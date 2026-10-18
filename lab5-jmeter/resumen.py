"""Resume los CSV de JMeter de una ronda: p95, p99, error %, throughput, 201 y pending."""
import csv, glob, os, sys
from collections import Counter

def pct(vals, p):
    if not vals: return 0
    s = sorted(vals); k = max(0, min(len(s) - 1, int(round(p / 100 * len(s) + 0.4999)) - 1))
    return s[k]

out = sys.argv[1]
filas = []
for path in sorted(glob.glob(os.path.join(out, "fila_*.csv")), key=lambda p: int(p.split("_")[-1][:-4])):
    rows = list(csv.DictReader(open(path, newline="")))
    if not rows: continue
    el = [int(r["elapsed"]) for r in rows]
    ts = [int(r["timeStamp"]) for r in rows]
    dur = (max(t + e for t, e in zip(ts, el)) - min(ts)) / 1000 or 1
    err = sum(1 for r in rows if r["success"] != "true")
    codes = Counter(r["responseCode"] for r in rows)
    pend = sum(1 for r in rows if "pending" in r["label"])
    filas.append((int(path.split("_")[-1][:-4]), len(rows), pct(el, 95), pct(el, 99),
                  len(rows) / dur, 100 * err / len(rows), codes.get("201", 0), pend, codes))

print(f"\n{'hilos':>6} {'n':>6} {'p95 ms':>8} {'p99 ms':>8} {'req/s':>7} {'error %':>8} {'201':>6} {'pending':>8}  códigos")
for f in filas:
    print(f"{f[0]:>6} {f[1]:>6} {f[2]:>8} {f[3]:>8} {f[4]:>7.2f} {f[5]:>8.2f} {f[6]:>6} {f[7]:>8}  {dict(f[8])}")
tot = sum(f[1] for f in filas); t201 = sum(f[6] for f in filas)
print(f"\nTotal enviadas: {tot} | respuestas 201 (JMeter): {t201}")
print("Para el factor de amplificación sume también los 201 de la sonda: grep -c ' 201 ' sonda_ronda_N.log")
