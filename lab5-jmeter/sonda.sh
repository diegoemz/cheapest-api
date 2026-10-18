#!/bin/bash
# Uso: ./sonda.sh <ronda>   (Ctrl+C para detenerla). Ejecútela desde la raíz del repo (donde está venta.json). Requiere BASE_URL.
[ -f venta.json ] || { echo "No encuentro venta.json: ejecute desde la raíz del repo"; exit 1; }
: "${BASE_URL:?Exporte BASE_URL primero}"
DIR="$(cd "$(dirname "$0")" && pwd)"; mkdir -p "$DIR/resultados"
LOG="$DIR/resultados/sonda_ronda_$1.log"
echo "Sonda ronda $1 -> $LOG"
while true; do
  printf "%s " "$(date +%H:%M:%S)"
  curl -s -o /dev/null -w "%{http_code} %{time_total}\n" -X POST "$BASE_URL/ventas/ventas" \
    -H 'Content-Type: application/json' -d @venta.json
  sleep 2
done | tee "$LOG"
