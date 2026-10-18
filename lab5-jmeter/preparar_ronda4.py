"""Ronda 4: rate limiting en API Gateway (Rate 100, Burst 200) + sidecar completo.
Uso (desde la raíz del repo): python3 lab5-jmeter/preparar_ronda4.py [rate] [burst]
"""
import sys
from comun import *

RATE = int(sys.argv[1]) if len(sys.argv) > 1 else 100
BURST = int(sys.argv[2]) if len(sys.argv) > 2 else 200
base_url = output("ApiGatewayUrl")
api_id = base_url.split("//")[1].split(".")[0]

aws("apigatewayv2", "update-stage", "--api-id", api_id, "--stage-name", "lab",
    "--default-route-settings", f"ThrottlingRateLimit={RATE},ThrottlingBurstLimit={BURST}")
st = aws("apigatewayv2", "get-stage", "--api-id", api_id, "--stage-name", "lab")["DefaultRouteSettings"]
log(f"API Gateway {api_id} stage lab: Rate={st.get('ThrottlingRateLimit')} Burst={st.get('ThrottlingBurstLimit')}")

actual, _ = service_td("svc-Cheapest-ventas")
if not actual.endswith("td-Cheapest-ventas:1"):
    update_service("svc-Cheapest-ventas", "td-Cheapest-ventas", 1)
    wait_stable("svc-Cheapest-ventas")
log("Ventas usa td-Cheapest-ventas:1 (sidecar completo).")
td = describe_td(service_td("svc-Cheapest-inventario")[0])
c = next(x for x in td["containerDefinitions"] if x["name"] == "inventario")
log(f"Inventario: {td['family']}:{td['revision']} FAULT_DELAY_MS={get_env(c, 'FAULT_DELAY_MS')}")
verificar_venta(base_url)
log("Listo. Parte 1:  caffeinate -dimsu python3 lab5-jmeter/ronda.py 4")
log("Parte 2 (después de que termine la Parte 1):  caffeinate -dimsu python3 lab5-jmeter/saturacion.py")
