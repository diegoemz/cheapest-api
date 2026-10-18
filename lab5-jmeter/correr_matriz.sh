#!/bin/bash
# Uso: ./correr_matriz.sh <ronda> [filas]
#   ./correr_matriz.sh 1          -> las 4 filas (50, 200, 500, 1500)
#   ./correr_matriz.sh 1 500 1500 -> solo esas filas (segunda ventana)
# Requiere BASE_URL y PE_ID exportados en la terminal.
set -u
RONDA="$1"; shift
FILAS=("$@"); [ ${#FILAS[@]} -eq 0 ] && FILAS=(50 200 500 1500)
: "${BASE_URL:?Exporte BASE_URL primero}"; : "${PE_ID:?Exporte PE_ID primero}"
HOST=$(echo "$BASE_URL" | sed -E 's#https?://([^/]+).*#\1#')
DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/resultados/ronda_$RONDA"; mkdir -p "$OUT"
rampup_de() { case $1 in 50) echo 10;; 200) echo 20;; 500) echo 50;; 1500) echo 75;; *) echo 10;; esac; }

for T in "${FILAS[@]}"; do
  R=$(rampup_de "$T")
  echo "=== Ronda $RONDA | fila $T hilos / $R s | inicio $(date +%H:%M:%S)"
  rm -rf "$OUT/html_$T" "$OUT/fila_$T.csv"
  jmeter -n -t "$DIR/matriz.jmx" -Jhost="$HOST" -JpeId="$PE_ID" -Jthreads="$T" -Jrampup="$R" \
    -l "$OUT/fila_$T.csv" -e -o "$OUT/html_$T" -j "$OUT/jmeter_$T.log" > /dev/null
  echo "    fin $(date +%H:%M:%S)"
  [ "$T" != "${FILAS[${#FILAS[@]}-1]}" ] && sleep 15
done
python3 "$DIR/resumen.py" "$OUT"
