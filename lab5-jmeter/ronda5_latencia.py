"""Ronda 5 (AWS): impacto del Outbox en la latencia con Inventario SANO (FAULT_DELAY_MS=0).
Crea una revisión de Inventario sin fallo, espera a que quede sana y corre la fila 500 hilos / 50 s.
Uso (desde la raíz del repo): caffeinate -dimsu python3 lab5-jmeter/ronda5_latencia.py
"""
import copy, os, subprocess, sys, time
from comun import *

base_url = output("ApiGatewayUrl")
host = base_url.split("//")[1].split("/")[0]
pe_id = venta_body()["items"][0]["productoExternoId"]
td = describe_td(service_td("svc-Cheapest-inventario")[0])
c = next(x for x in td["containerDefinitions"] if x["name"] == "inventario")
if get_env(c, "FAULT_DELAY_MS") != "0":
    nuevo = copy.deepcopy(td)
    set_env(next(x for x in nuevo["containerDefinitions"] if x["name"] == "inventario"), "FAULT_DELAY_MS", "0")
    rev = register_td(nuevo)
    update_service("svc-Cheapest-inventario", td["family"], rev)
    log(f"Inventario -> td-Cheapest-inventario:{rev} (FAULT_DELAY_MS=0)")
    wait_stable("svc-Cheapest-inventario")
for _ in range(60):
    ch = chaos(base_url)
    if ch and not ch.get("active"):
        break
    time.sleep(5)
else:
    sys.exit("Inventario sigue reportando el fallo activo. Revise la revisión desplegada.")
log(f"Inventario sano (chaos: mode={ch.get('mode')}, active={ch.get('active')})")
log("Esperando 60 s para que el circuito del sidecar quede CLOSED...")
time.sleep(60)
verificar_venta(base_url)

OUT = os.path.join(DIR, "resultados", "ronda_5_latencia"); os.makedirs(OUT, exist_ok=True)
csv = os.path.join(OUT, "fila_500.csv"); html = os.path.join(OUT, "html_500")
if os.path.exists(csv): os.remove(csv)
subprocess.run(["rm", "-rf", html])
log("Fila 500 hilos / 50 s con Inventario sano y Outbox activo...")
subprocess.run(["jmeter", "-n", "-t", os.path.join(DIR, "matriz.jmx"), f"-Jhost={host}", f"-JpeId={pe_id}",
                "-Jthreads=500", "-Jrampup=50", "-l", csv, "-e", "-o", html, "-j", os.path.join(OUT, "jmeter.log")],
               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
subprocess.run(["python3", os.path.join(DIR, "resumen.py"), OUT])
log("Compare el p99 con la fila 500 de la Ronda 4 (lab5-jmeter/resultados/ronda_4).")
