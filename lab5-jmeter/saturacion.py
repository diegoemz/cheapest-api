"""Ronda 4, Parte 2: prueba de saturación a 300 req/s durante 120 s (con Inventario ya recuperado).
Uso (desde la raíz del repo): python3 lab5-jmeter/saturacion.py [hilos]
"""
import csv, json, os, subprocess, sys
from collections import Counter
from comun import *

HILOS = sys.argv[1] if len(sys.argv) > 1 else "150"
OUT = os.path.join(DIR, "resultados", "ronda_4_saturacion"); os.makedirs(OUT, exist_ok=True)
base_url = output("ApiGatewayUrl"); host = base_url.split("//")[1].split("/")[0]
pe_id = venta_body()["items"][0]["productoExternoId"]
c = chaos(base_url) or {}
if c.get("active"):
    log(f"AVISO: Inventario todavía tiene el fallo activo (hasta {c.get('until')}). El lab pide hacer esto con Inventario recuperado.")
csvp = os.path.join(OUT, "saturacion.csv"); html = os.path.join(OUT, "html")
if os.path.exists(csvp): os.remove(csvp)
subprocess.run(["rm", "-rf", html])
log(f"Saturación: {HILOS} hilos, objetivo 300 req/s, 120 s ...")
subprocess.run(["jmeter", "-n", "-t", os.path.join(DIR, "saturacion.jmx"), f"-Jhost={host}", f"-JpeId={pe_id}",
                f"-Jthreads={HILOS}", "-Jduracion=120", "-l", csvp, "-e", "-o", html,
                "-j", os.path.join(OUT, "jmeter.log")], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
rows = list(csv.DictReader(open(csvp, newline="")))
ts = [int(r["timeStamp"]) for r in rows]; el = [int(r["elapsed"]) for r in rows]
dur = (max(t + e for t, e in zip(ts, el)) - min(ts)) / 1000
codes = Counter(r["responseCode"] for r in rows)
ok = sorted(int(r["elapsed"]) for r in rows if r["responseCode"] == "201")
p = lambda v, q: v[max(0, int(round(q / 100 * len(v) + 0.4999)) - 1)] if v else 0
res = {"hilos": int(HILOS), "duracion_s": round(dur, 1), "total": len(rows), "throughput_total": round(len(rows) / dur, 1),
       "codigos": dict(codes), "pct_429": round(100 * codes.get("429", 0) / len(rows), 2),
       "throughput_201": round(len(ok) / dur, 1), "p95_201_ms": p(ok, 95), "p99_201_ms": p(ok, 99)}
json.dump(res, open(os.path.join(OUT, "resumen.json"), "w"), indent=2)
for k, v in res.items():
    print(f"  {k:<18} {v}")
if res["throughput_total"] < 250:
    log(f"El throughput total ({res['throughput_total']}/s) quedó lejos de 300/s: repita con más hilos, ej. python3 lab5-jmeter/saturacion.py 300")
