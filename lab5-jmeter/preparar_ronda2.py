"""Ronda 2: sidecar SOLO con reintentos (circuit breaker desactivado).
1. Construye la imagen del sidecar con enforcing_consecutive_5xx: 0 y la sube como 1.0.0-solo-retry.
2. Devuelve envoy.yaml.tmpl a 100 (su repositorio queda con la configuración completa).
3. Crea una revisión de Ventas a partir de la revisión 1 (la que tiene sidecar) cambiando solo la imagen.
Requiere Docker Desktop abierto. Uso (desde la raíz del repo): python3 lab5-jmeter/preparar_ronda2.py
"""
import copy, subprocess, sys
from comun import *

ENVOY = "apps/ventas/sidecar/envoy.yaml.tmpl"
TAG = "1.0.0-solo-retry"
original = open(ENVOY).read()
if original.count("enforcing_consecutive_5xx: 100") != 1:
    sys.exit(f"No encuentro exactamente una línea 'enforcing_consecutive_5xx: 100' en {ENVOY}.")
if subprocess.run(["docker", "info"], capture_output=True).returncode != 0:
    sys.exit("Docker no responde: abra Docker Desktop y vuelva a ejecutar.")

registro = ecr_login_y_registro()
imagen = f"{registro}/cheapest-ventas-sidecar:{TAG}"
try:
    open(ENVOY, "w").write(original.replace("enforcing_consecutive_5xx: 100", "enforcing_consecutive_5xx: 0"))
    log(f"Construyendo {imagen} (circuit breaker desactivado)...")
    r = subprocess.run(["docker", "build", "--platform", "linux/amd64", "--provenance=false",
                        "-t", imagen, "apps/ventas/sidecar/"])
    if r.returncode != 0:
        sys.exit("docker build falló.")
finally:
    open(ENVOY, "w").write(original)
    log(f"{ENVOY} restaurado (enforcing_consecutive_5xx: 100).")
log("Subiendo la imagen a ECR...")
if subprocess.run(["docker", "push", imagen]).returncode != 0:
    sys.exit("docker push falló.")

td = describe_td("td-Cheapest-ventas:1")
if "ventas-sidecar" not in [c["name"] for c in td["containerDefinitions"]]:
    sys.exit("td-Cheapest-ventas:1 no tiene el contenedor ventas-sidecar. Indique cuál revisión lo tiene.")
nuevo = copy.deepcopy(td)
next(c for c in nuevo["containerDefinitions"] if c["name"] == "ventas-sidecar")["image"] = imagen
rev = register_td(nuevo)
update_service("svc-Cheapest-ventas", "td-Cheapest-ventas", rev)
log(f"Ventas -> td-Cheapest-ventas:{rev} (sidecar {TAG}, INVENTARIO_BASE_URL=http://localhost:10000)")
wait_stable("svc-Cheapest-ventas")
verificar_venta(output("ApiGatewayUrl"))
log("Listo para la Ronda 2. Ejecute:  python3 lab5-jmeter/ronda.py 2")
