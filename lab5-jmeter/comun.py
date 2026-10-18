"""Funciones compartidas por los scripts del Lab 5 (solo biblioteca estándar de Python)."""
import json, os, subprocess, sys, time, urllib.request, urllib.error
from datetime import datetime, timezone

REGION = "us-east-1"
CLUSTER = "Cheapest-lab5-cluster"
STACK = "Cheapest-lab5"
DIR = os.path.dirname(os.path.abspath(__file__))


def log(msg):
    print(f"[{datetime.now().strftime('%H:%M:%S')}] {msg}", flush=True)


def aws(*args, parse=True):
    cmd = ["aws", *args, "--region", REGION, "--output", "json"]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit(f"\nERROR ejecutando: {' '.join(cmd)}\n{r.stderr.strip()}\n"
                 "Si dice ExpiredToken: renueve las credenciales de AWS Academy y vuelva a ejecutar.")
    return json.loads(r.stdout) if parse and r.stdout.strip() else r.stdout


def output(key):
    outs = aws("cloudformation", "describe-stacks", "--stack-name", STACK)["Stacks"][0]["Outputs"]
    return next(o["OutputValue"] for o in outs if o["OutputKey"] == key)


def http(method, url, body=None, timeout=60):
    data = json.dumps(body).encode() if isinstance(body, (dict, list)) else body
    req = urllib.request.Request(url, data=data, method=method,
                                 headers={"Content-Type": "application/json"})
    t = time.time()
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.status, resp.read().decode(), time.time() - t
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode(errors="replace"), time.time() - t
    except Exception as e:  # timeout, conexión
        return 0, str(e), time.time() - t


def chaos(base_url):
    code, body, _ = http("GET", f"{base_url}/inventario/chaos", timeout=15)
    try:
        return json.loads(body) if code == 200 else None
    except ValueError:
        return None


def parse_utc(s):
    return datetime.fromisoformat(s.replace("Z", "+00:00"))


def hora_local(dt):
    return dt.astimezone().strftime("%H:%M:%S")


def venta_body():
    with open(os.path.join(os.getcwd(), "venta.json")) as f:
        return json.load(f)


def service_td(service):
    s = aws("ecs", "describe-services", "--cluster", CLUSTER, "--services", service)["services"][0]
    return s["taskDefinition"], len(s["deployments"])


def describe_td(td):
    return aws("ecs", "describe-task-definition", "--task-definition", td)["taskDefinition"]


def register_td(td):
    drop = {"taskDefinitionArn", "revision", "status", "requiresAttributes", "compatibilities",
            "registeredAt", "registeredBy", "deregisteredAt"}
    clean = {k: v for k, v in td.items() if k not in drop}
    path = os.path.join(DIR, ".td_tmp.json")
    with open(path, "w") as f:
        json.dump(clean, f)
    res = aws("ecs", "register-task-definition", "--cli-input-json", f"file://{path}")
    os.remove(path)
    return res["taskDefinition"]["revision"]


def set_env(container, name, value):
    env = container.setdefault("environment", [])
    for e in env:
        if e["name"] == name:
            e["value"] = value
            return
    env.append({"name": name, "value": value})


def get_env(container, name):
    return next((e["value"] for e in container.get("environment", []) if e["name"] == name), None)


def update_service(service, family, rev):
    aws("ecs", "update-service", "--cluster", CLUSTER, "--service", service,
        "--task-definition", f"{family}:{rev}")


def wait_stable(*services):
    log(f"Esperando a que {', '.join(services)} terminen de desplegar (2-8 min)...")
    r = subprocess.run(["aws", "ecs", "wait", "services-stable", "--cluster", CLUSTER,
                        "--services", *services, "--region", REGION])
    if r.returncode != 0:
        sys.exit("ECS no quedó estable a tiempo. Revise la pestaña Tareas/Eventos del servicio en la consola.")
    log("Despliegue terminado.")


QUERY_SIDECAR = ('parse @message /HTTP\\/1\\.1" (?<code>\\d{3}) (?<flags>\\S+) / '
                 '| filter ispresent(code) '
                 '| stats count(*) as peticiones by bin(30s) as intervalo, code, flags '
                 '| sort intervalo asc')


def logs_insights_sidecar(inicio, fin):
    """Ejecuta la consulta de la sección 5.9 sobre /ecs/Cheapest-ventas-sidecar. Devuelve filas."""
    q = aws("logs", "start-query", "--log-group-name", "/ecs/Cheapest-ventas-sidecar",
            "--start-time", str(int(inicio.timestamp())), "--end-time", str(int(fin.timestamp())),
            "--query-string", QUERY_SIDECAR)["queryId"]
    for _ in range(60):
        r = aws("logs", "get-query-results", "--query-id", q)
        if r["status"] in ("Complete", "Failed", "Cancelled", "Timeout"):
            break
        time.sleep(2)
    filas = []
    for row in r.get("results", []):
        d = {f["field"]: f["value"] for f in row}
        filas.append((d.get("intervalo", ""), d.get("code", ""), d.get("flags", ""), d.get("peticiones", "")))
    return filas


def ecr_login_y_registro():
    cuenta = aws("sts", "get-caller-identity")["Account"]
    registro = f"{cuenta}.dkr.ecr.{REGION}.amazonaws.com"
    pwd = subprocess.run(["aws", "ecr", "get-login-password", "--region", REGION],
                         capture_output=True, text=True, check=True).stdout
    r = subprocess.run(["docker", "login", "--username", "AWS", "--password-stdin", registro],
                       input=pwd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit(f"docker login a ECR falló (¿Docker Desktop abierto?): {r.stderr}")
    return registro


def verificar_venta(base_url, esperar_pending=False):
    antes = (chaos(base_url) or {}).get("llamadasDisponibilidad")
    code, body, t = http("POST", f"{base_url}/ventas/ventas", venta_body())
    time.sleep(2)
    despues = (chaos(base_url) or {}).get("llamadasDisponibilidad")
    log(f"Venta de prueba: HTTP {code} en {t:.2f} s | llamadasDisponibilidad {antes} -> {despues}")
    if code != 201:
        sys.exit(f"La venta de prueba no respondió 201: {body[:300]}")
    if "pending_stock_confirmation" in body and not esperar_pending:
        log("AVISO: la venta salió en modo degradado. Si Inventario está sano, Ventas no llega a Inventario.")
    if antes is not None and despues is not None and despues <= antes:
        log("AVISO: el contador de Inventario no subió: la venta no consultó disponibilidad.")
