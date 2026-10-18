"""Deja el despliegue listo para la Ronda 1 (línea base):
- Inventario con FAULT_DELAY_MS=5000 y RECOVERY_TIME_MS=600000.
- Ventas SIN sidecar, con INVENTARIO_BASE_URL apuntando al ALB de Inventario.
Uso (desde la raíz del repo): python3 lab5-jmeter/preparar_ronda1.py
"""
import copy, sys, time
from comun import *

alb = output("InventarioALBDns")
base_url = output("ApiGatewayUrl")
cambios = []

# --- Inventario con fallo ---
td_arn, _ = service_td("svc-Cheapest-inventario")
td = describe_td(td_arn)
c = next(x for x in td["containerDefinitions"] if x["name"] == "inventario")
if get_env(c, "FAULT_DELAY_MS") == "5000" and get_env(c, "RECOVERY_TIME_MS") == "600000":
    log(f"Inventario ya usa una revisión con el fallo: {td['family']}:{td['revision']}")
else:
    nuevo = copy.deepcopy(td)
    c = next(x for x in nuevo["containerDefinitions"] if x["name"] == "inventario")
    set_env(c, "FAULT_DELAY_MS", "5000"); set_env(c, "RECOVERY_TIME_MS", "600000")
    rev = register_td(nuevo)
    update_service("svc-Cheapest-inventario", td["family"], rev)
    log(f"Inventario -> td-Cheapest-inventario:{rev} (fallo 5000 ms / 600000 ms)")
    cambios.append("svc-Cheapest-inventario")

# --- Ventas sin sidecar ---
td_arn, _ = service_td("svc-Cheapest-ventas")
td = describe_td(td_arn)
nombres = [x["name"] for x in td["containerDefinitions"]]
url_ok = f"http://{alb}"
ventas = next(x for x in td["containerDefinitions"] if x["name"] == "ventas")
if nombres == ["ventas"] and get_env(ventas, "INVENTARIO_BASE_URL") == url_ok:
    log(f"Ventas ya usa una revisión sin sidecar y apuntando al ALB: {td['family']}:{td['revision']}")
else:
    nuevo = copy.deepcopy(td)
    nuevo["containerDefinitions"] = [x for x in nuevo["containerDefinitions"] if x["name"] != "ventas-sidecar"]
    v = nuevo["containerDefinitions"][0]
    v.pop("dependsOn", None)
    set_env(v, "INVENTARIO_BASE_URL", url_ok)
    rev = register_td(nuevo)
    update_service("svc-Cheapest-ventas", td["family"], rev)
    log(f"Ventas -> td-Cheapest-ventas:{rev} (sin sidecar, INVENTARIO_BASE_URL={url_ok})")
    log("ANOTE: esta es la revisión sin sidecar. La revisión 1 es la que tiene el sidecar (Ronda 3).")
    cambios.append("svc-Cheapest-ventas")

if cambios:
    wait_stable(*cambios)

# --- Verificación: una venta debe llegar a Inventario ---
antes = (chaos(base_url) or {}).get("llamadasDisponibilidad")
code, body, t = http("POST", f"{base_url}/ventas/ventas", venta_body())
time.sleep(2)
despues = (chaos(base_url) or {}).get("llamadasDisponibilidad")
log(f"Venta de prueba: HTTP {code} en {t:.2f} s | llamadasDisponibilidad {antes} -> {despues}")
if code != 201:
    sys.exit(f"La venta de prueba no respondió 201: {body[:300]}")
if "pending_stock_confirmation" in body:
    sys.exit("La venta salió en modo degradado: Ventas no está llegando a Inventario. Envíe esta salida.")
if antes is not None and despues is not None and despues <= antes:
    sys.exit("El contador de Inventario no subió: la venta no consultó disponibilidad. Envíe esta salida.")
log("Todo listo para la Ronda 1. Ejecute:  python3 lab5-jmeter/ronda.py 1")
