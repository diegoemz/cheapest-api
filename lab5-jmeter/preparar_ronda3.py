"""Ronda 3: sidecar completo (reintentos + circuit breaker), imagen 1.0.0.
La revisión 1 de td-Cheapest-ventas (creada por CloudFormation) ya es exactamente eso.
Uso (desde la raíz del repo): python3 lab5-jmeter/preparar_ronda3.py
"""
import sys
from comun import *

td = describe_td("td-Cheapest-ventas:1")
sc = next((c for c in td["containerDefinitions"] if c["name"] == "ventas-sidecar"), None)
if not sc or not sc["image"].endswith(":1.0.0"):
    sys.exit("td-Cheapest-ventas:1 no tiene el sidecar con la imagen :1.0.0. Envíe esta salida.")
actual, _ = service_td("svc-Cheapest-ventas")
if actual.endswith("td-Cheapest-ventas:1"):
    log("Ventas ya usa td-Cheapest-ventas:1 (sidecar completo).")
else:
    update_service("svc-Cheapest-ventas", "td-Cheapest-ventas", 1)
    log(f"Ventas -> td-Cheapest-ventas:1 (sidecar {sc['image'].split('/')[-1]})")
    wait_stable("svc-Cheapest-ventas")
verificar_venta(output("ApiGatewayUrl"))
log("Listo para la Ronda 3. Ejecute:  python3 lab5-jmeter/ronda.py 3")
