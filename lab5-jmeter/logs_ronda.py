"""Repite la consulta de Logs Insights del sidecar para una ronda ya ejecutada.
Uso (desde la raíz del repo): python3 lab5-jmeter/logs_ronda.py <N> [T0 en UTC, ej. 2026-10-18T19:41:47Z]
"""
import json, os, sys
from datetime import timedelta
from comun import *

N = sys.argv[1] if len(sys.argv) > 1 else sys.exit(__doc__)
OUT = os.path.join(DIR, "resultados", f"ronda_{N}")
ruta = os.path.join(OUT, "info_ronda.json")
info = json.load(open(ruta)) if os.path.exists(ruta) else {"ronda": N}
if len(sys.argv) > 2:
    info["T0_utc"] = sys.argv[2]
if "T0_utc" not in info:
    sys.exit("No hay info_ronda.json para esta ronda: pase la T0 en UTC como segundo argumento.")
T0 = parse_utc(info["T0_utc"]); FIN = T0 + timedelta(minutes=12)
filas = logs_insights_sidecar(T0, FIN)
txt = f"{'intervalo (UTC)':<26} {'code':>4} {'flags':<6} {'peticiones':>10}\n" + \
      "".join(f"{b:<26} {c:>4} {fl:<6} {n:>10}\n" for b, c, fl, n in filas)
open(os.path.join(OUT, "logs_insights_sidecar.txt"), "w").write(txt)
print(txt)
tot = {}
for _, c, fl, n in filas:
    tot[f"{c} {fl}"] = tot.get(f"{c} {fl}", 0) + int(float(n or 0))
print("Totales por código/flag:", tot)
info["logs_insights_por_flag"] = tot
json.dump(info, open(os.path.join(OUT, "info_ronda.json"), "w"), indent=2, ensure_ascii=False)
