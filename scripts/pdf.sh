#!/usr/bin/env bash
# Genera el PDF de entrega a partir de print.html usando Chrome headless.
set -euo pipefail
cd "$(dirname "$0")/.."
OUT="${1:-Cubo_Seis_Caras_Evaluacion_Primer_Corte.pdf}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT=4799

npx vite build >/dev/null
npx vite preview --port "$PORT" --strictPort >/dev/null 2>&1 &
PID=$!
trap 'kill $PID' EXIT
sleep 2

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 --print-to-pdf="$OUT" \
  "http://localhost:$PORT/print.html" 2>/dev/null
echo "PDF generado: $OUT"
