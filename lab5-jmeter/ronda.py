"""Ejecuta una ronda completa (procedimiento B + cronograma del lab):
reinicia Inventario, detecta T0, corre la sonda, lanza la matriz de carga, espera
la recuperación hasta T0+12 min y recoge contador de Inventario y CloudWatch.
Uso (desde la raíz del repo): python3 lab5-jmeter/ronda.py <N> [filas...]
   ej.: python3 lab5-jmeter/ronda.py 1
        python3 lab5-jmeter/ronda.py 1b 1500     (segunda ventana con las filas que faltaron)
"""
import json, os, subprocess, sys, threading, time
from datetime import datetime, timedelta, timezone
from comun import *

RONDA = sys.argv[1] if len(sys.argv) > 1 else sys.exit(__doc__)
FILAS = [int(x) for x in sys.argv[2:]] or [50, 200, 500, 1500]
RAMPUP = {50: 10, 200: 20, 500: 50, 1500: 75}
OUT = os.path.join(DIR, "resultados", f"ronda_{RONDA}")
os.makedirs(OUT, exist_ok=True)
base_url = output("ApiGatewayUrl")
host = base_url.split("//")[1].split("/")[0]
body = venta_body()
pe_id = body["items"][0]["productoExternoId"]

# 1. Reiniciar Inventario (Force new deployment) y detectar la nueva tarea por injectedAt
previo = (chaos(base_url) or {}).get("injectedAt")
log("Reiniciando Inventario (Force new deployment)...")
aws("ecs", "update-service", "--cluster", CLUSTER, "--service", "svc-Cheapest-inventario",
    "--force-new-deployment")
log("Esperando a que el ALB envíe tráfico a la tarea nueva (suele tardar 2-4 min)...")
seguidos, t_limite = 0, time.time() + 600
while True:
    c = chaos(base_url)
    nuevo = c and c.get("injectedAt") and c["injectedAt"] != previo
    seguidos = seguidos + 1 if nuevo else 0
    if seguidos >= 10:  # ~50 s seguidos solo en la tarea nueva (la vieja ya salió del ALB)
        break
    if time.time() > t_limite:
        sys.exit("La tarea nueva de Inventario no empezó a recibir tráfico en 10 min. Revise ECS.")
    time.sleep(5)
if not c.get("active"):
    sys.exit(f"La tarea nueva NO tiene el fallo activo: {c}. ¿FAULT_DELAY_MS=5000 en la revisión de Inventario?")
T0 = parse_utc(c["injectedAt"]); REC = parse_utc(c["until"]) if c.get("until") else T0 + timedelta(minutes=10)
FIN = T0 + timedelta(minutes=12)
log(f"T0 = {hora_local(T0)} | recuperación a las {hora_local(REC)} | fin de la ronda {hora_local(FIN)}")
td_inv, _ = service_td("svc-Cheapest-inventario"); td_ven, _ = service_td("svc-Cheapest-ventas")
info = {"ronda": RONDA, "T0_local": hora_local(T0), "T0_utc": c["injectedAt"], "recuperacion_local": hora_local(REC),
        "td_inventario": td_inv.split("/")[-1], "td_ventas": td_ven.split("/")[-1]}

# 2. Sonda: una venta cada 2 s durante toda la ronda
parar = threading.Event()
sonda_path = os.path.join(DIR, "resultados", f"sonda_ronda_{RONDA}.log")
def sonda():
    with open(sonda_path, "w") as f:
        while not parar.is_set():
            code, b, t = http("POST", f"{base_url}/ventas/ventas", body, timeout=60)
            extra = " pending" if "pending_stock_confirmation" in b else ""
            f.write(f"{datetime.now().strftime('%H:%M:%S')} {code} {t:.3f}{extra}\n"); f.flush()
            parar.wait(2)
threading.Thread(target=sonda, daemon=True).start()
log(f"Sonda iniciada -> {sonda_path}")

def esperar_hasta(dt, motivo):
    while datetime.now(timezone.utc) < dt:
        falta = (dt - datetime.now(timezone.utc)).total_seconds()
        log(f"{motivo}: faltan {int(falta // 60)} min {int(falta % 60)} s")
        time.sleep(min(60, max(1, falta)))

# 3. Matriz de carga desde T0 + 1 min
esperar_hasta(T0 + timedelta(minutes=1), "Inicio de la matriz")
pendientes = list(FILAS)
for i, n in enumerate(FILAS):
    if datetime.now(timezone.utc) > T0 + timedelta(minutes=8):
        log(f"Pasó T0 + 8 min: NO se ejecutan las filas {pendientes}. Haga una segunda ventana con:")
        log(f"    python3 lab5-jmeter/ronda.py {RONDA}b {' '.join(map(str, pendientes))}")
        break
    csv = os.path.join(OUT, f"fila_{n}.csv"); html = os.path.join(OUT, f"html_{n}")
    if os.path.exists(csv): os.remove(csv)
    subprocess.run(["rm", "-rf", html])
    log(f"Fila {n} hilos / {RAMPUP.get(n, 10)} s ...")
    r = subprocess.run(["jmeter", "-n", "-t", os.path.join(DIR, "matriz.jmx"), f"-Jhost={host}",
                        f"-JpeId={pe_id}", f"-Jthreads={n}", f"-Jrampup={RAMPUP.get(n, 10)}",
                        "-l", csv, "-e", "-o", html, "-j", os.path.join(OUT, f"jmeter_{n}.log")],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if r.returncode != 0 or not os.path.exists(csv):
        log(f"JMeter falló en la fila {n}; revise {OUT}/jmeter_{n}.log")
    pendientes.remove(n)
    log(f"Fila {n} terminada")
    if i < len(FILAS) - 1: time.sleep(15)
subprocess.run(["python3", os.path.join(DIR, "resumen.py"), OUT])

# 4. Observar la recuperación hasta T0 + 12 min
esperar_hasta(FIN, "Observando la recuperación (solo sonda)")
parar.set(); time.sleep(3)
final = chaos(base_url) or {}
lineas = open(sonda_path).read().splitlines()
info["llamadasDisponibilidad"] = final.get("llamadasDisponibilidad")
info["sonda_201"] = sum(1 for l in lineas if " 201 " in l)
info["sonda_pending"] = sum(1 for l in lineas if l.endswith("pending"))
log(f"Contador de Inventario (llamadasDisponibilidad): {info['llamadasDisponibilidad']}")
log(f"Sonda: {len(lineas)} peticiones, {info['sonda_201']} con 201, {info['sonda_pending']} pending")

# 5. CloudWatch: RequestCount del target group de Inventario en [T0, T0+12 min]
tg = aws("elbv2", "describe-target-groups", "--names", "Cheapest-lab5-inventario-tg")["TargetGroups"][0]
dims = [f"Name=TargetGroup,Value=targetgroup/{tg['TargetGroupArn'].split(':targetgroup/')[1]}",
        f"Name=LoadBalancer,Value={tg['LoadBalancerArns'][0].split(':loadbalancer/')[1]}"]
log("Esperando 2 min a que CloudWatch publique las métricas...")
time.sleep(120)
iso = lambda d: d.strftime("%Y-%m-%dT%H:%M:%SZ")
m = aws("cloudwatch", "get-metric-statistics", "--namespace", "AWS/ApplicationELB", "--metric-name", "RequestCount",
        "--dimensions", *dims, "--start-time", iso(T0), "--end-time", iso(FIN), "--period", "60", "--statistics", "Sum")
info["cloudwatch_RequestCount_inventario"] = int(sum(p["Sum"] for p in m["Datapoints"]))
log(f"CloudWatch RequestCount del target group de Inventario [T0, T0+12]: {info['cloudwatch_RequestCount_inventario']}")
td_v = describe_td(td_ven)
if any(c["name"] == "ventas-sidecar" for c in td_v["containerDefinitions"]):
    log("Consulta de Logs Insights (sección 5.9) sobre /ecs/Cheapest-ventas-sidecar, [T0, T0+12 min]:")
    filas = logs_insights_sidecar(T0, FIN)
    with open(os.path.join(OUT, "logs_insights_sidecar.txt"), "w") as f:
        f.write(f"{'bin(30s)':<26} {'code':>4} {'flags':<6} {'peticiones':>10}\n")
        for b, c_, fl, n in filas:
            f.write(f"{b:<26} {c_:>4} {fl:<6} {n:>10}\n")
    print(open(os.path.join(OUT, "logs_insights_sidecar.txt")).read())
    info["logs_insights_por_flag"] = {}
    for _, c_, fl, n in filas:
        k = f"{c_} {fl}"; info["logs_insights_por_flag"][k] = info["logs_insights_por_flag"].get(k, 0) + int(float(n or 0))
json.dump(info, open(os.path.join(OUT, "info_ronda.json"), "w"), indent=2, ensure_ascii=False)
log(f"Listo. Datos guardados en {OUT}/info_ronda.json. Envíe toda esta salida.")
