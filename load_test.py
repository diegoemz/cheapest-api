"""
load_test.py — Script de pruebas de carga para el Lab 2 (Cheapest).

Uso para escenarios > 450 threads, donde JMeter deja de ser confiable.

Requiere: pip install httpx

Ejemplos:
    python load_test.py --endpoint GET --users 1500 --ramp-up 75 --duration 60
    python load_test.py --endpoint POST --users 3000 --ramp-up 100 --duration 60 --body sample_body.json

Salidas:
    results_get.csv  o  results_post.csv  (según --endpoint)
    Resumen impreso en consola con throughput, latencia promedio/p95/p99 y Error %.
"""

import argparse
import asyncio
import csv
import json
import statistics
import time
import uuid
from pathlib import Path
from typing import Optional

import httpx

BASE_URL_DEFAULT = "http://localhost:3000"

# IDs de ejemplo que trae src/datasources/seed.sql — úsalos como default
# para que las peticiones sean válidas contra los datos sembrados.
DEFAULT_TIENDA_ID = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb"
DEFAULT_ZONA = "Zona Norte"
DEFAULT_MONEDA_ID = "cccccccc-cccc-4ccc-8ccc-cccccccccccc"
DEFAULT_PRODUCTO_ID = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
# seed.sql siempre crea estos 2 productos fijos (ver Producto Ejemplo 1/2).
# Usar SOLO estos evita 100% error por productoId inexistente (FK violation).
KNOWN_PRODUCTO_IDS = [
    "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
    "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaab",
]


def build_default_post_body(n_items: int = 25) -> dict:
    """Genera un pedido 'grande' con > 20 ítems, ciclando entre los productos
    fijos de seed.sql para garantizar que el productoId siempre exista."""
    items = []
    for i in range(n_items):
        items.append(
            {
                "productoId": KNOWN_PRODUCTO_IDS[i % len(KNOWN_PRODUCTO_IDS)],
                "cantidad": (i % 5) + 1,
                "precioUnitario": 5000 + (i * 250),
                "descuento": 0 if i % 3 else 500,
                "monedaId": DEFAULT_MONEDA_ID,
            }
        )
    return {
        "identificador": f"PED-LOADTEST-{uuid.uuid4().hex[:12]}",
        "tiendaId": DEFAULT_TIENDA_ID,
        "fechaHoraCreacion": time.strftime("%Y-%m-%dT%H:%M:%S.000Z", time.gmtime()),
        "montoTotal": sum(it["precioUnitario"] * it["cantidad"] for it in items),
        "monedaId": DEFAULT_MONEDA_ID,
        "estado": "creado",
        "items": items,
    }


def load_body(path: Optional[str]) -> dict:
    if path is None:
        return build_default_post_body()
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


async def worker(
    client: httpx.AsyncClient,
    method: str,
    url: str,
    body: Optional[dict],
    stop_at: float,
    results: list,
):
    """Un 'usuario' que envía peticiones en bucle hasta que se acaba la duración."""
    while time.monotonic() < stop_at:
        t0 = time.monotonic()
        timestamp_iso = time.strftime("%Y-%m-%dT%H:%M:%S", time.gmtime())
        status_code = None
        error = ""
        try:
            if method == "GET":
                resp = await client.get(url, timeout=10.0)
            else:
                resp = await client.post(url, json=body, timeout=10.0)
            status_code = resp.status_code
            if status_code >= 400:
                error = f"HTTP {status_code}"
        except httpx.TimeoutException:
            error = "timeout"
        except httpx.ConnectError:
            error = "connection_error"
        except Exception as e:  # noqa: BLE001
            error = f"error:{type(e).__name__}"
        latency_ms = (time.monotonic() - t0) * 1000
        results.append(
            {
                "timestamp_iso": timestamp_iso,
                "status_code": status_code if status_code is not None else "",
                "latency_ms": round(latency_ms, 2),
                "error": error,
            }
        )


async def run_load_test(
    method: str,
    url: str,
    body: Optional[dict],
    users: int,
    ramp_up: float,
    duration: float,
):
    results: list = []
    start = time.monotonic()
    stop_at = start + ramp_up + duration  # se sostiene 'duration' tras terminar el ramp-up

    async with httpx.AsyncClient(limits=httpx.Limits(max_connections=None, max_keepalive_connections=None)) as client:
        tasks = []
        delay_between_users = ramp_up / users if users > 0 else 0
        for i in range(users):
            # lanza usuarios espaciados en el tiempo (ramp-up)
            await asyncio.sleep(delay_between_users)
            tasks.append(
                asyncio.create_task(worker(client, method, url, body, stop_at, results))
            )
        await asyncio.gather(*tasks)

    total_elapsed = time.monotonic() - start
    return results, total_elapsed


def summarize(results: list, total_elapsed: float, method: str):
    n = len(results)
    if n == 0:
        print(f"[{method}] No se registraron requests.")
        return

    latencies = sorted(r["latency_ms"] for r in results)
    errors = sum(1 for r in results if r["error"])
    error_pct = 100 * errors / n

    def pct(p):
        idx = min(int(len(latencies) * p / 100), len(latencies) - 1)
        return latencies[idx]

    avg = statistics.mean(latencies)
    p95 = pct(95)
    p99 = pct(99)
    throughput = n / total_elapsed if total_elapsed > 0 else 0

    print(f"\n===== Resumen {method} =====")
    print(f"Total requests: {n}")
    print(f"Duración total: {total_elapsed:.1f} s")
    print(f"Throughput: {throughput:.2f} req/s")
    print(f"Latencia promedio: {avg:.2f} ms")
    print(f"Latencia p95: {p95:.2f} ms")
    print(f"Latencia p99: {p99:.2f} ms")
    print(f"Error %: {error_pct:.2f}%")
    print("=============================\n")


def export_csv(results: list, method: str):
    filename = f"results_{method.lower()}.csv"
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f, fieldnames=["timestamp_iso", "status_code", "latency_ms", "error"]
        )
        writer.writeheader()
        for r in results:
            writer.writerow(
                {
                    "timestamp_iso": r["timestamp_iso"],
                    "status_code": r["status_code"],
                    "latency_ms": r["latency_ms"],
                    "error": r["error"],
                }
            )
    print(f"Resultados exportados a {filename}")


def main():
    parser = argparse.ArgumentParser(description="Pruebas de carga para Cheapest (Lab 2)")
    parser.add_argument("--endpoint", choices=["GET", "POST"], required=True)
    parser.add_argument("--users", type=int, required=True, help="Concurrencia máxima (threads)")
    parser.add_argument("--ramp-up", type=float, required=True, help="Segundos para alcanzar --users")
    parser.add_argument("--duration", type=float, default=60.0, help="Segundos sostenidos tras el ramp-up")
    parser.add_argument("--body", type=str, default=None, help="Ruta a JSON con el body del POST (opcional)")
    parser.add_argument("--base-url", type=str, default=BASE_URL_DEFAULT)
    parser.add_argument("--tienda-id", type=str, default=DEFAULT_TIENDA_ID)
    parser.add_argument("--zona", type=str, default=DEFAULT_ZONA)
    args = parser.parse_args()

    if args.endpoint == "GET":
        url = f"{args.base_url}/logistics/tenderos/productos-disponibles?tiendaId={args.tienda_id}&zona={args.zona}"
        body = None
    else:
        url = f"{args.base_url}/logistics/pedidos"
        body = load_body(args.body)

    print(f"Lanzando prueba {args.endpoint} -> {url}")
    print(f"users={args.users} ramp_up={args.ramp_up}s duration={args.duration}s")

    results, total_elapsed = asyncio.run(
        run_load_test(args.endpoint, url, body, args.users, args.ramp_up, args.duration)
    )
    summarize(results, total_elapsed, args.endpoint)
    export_csv(results, args.endpoint)


if __name__ == "__main__":
    main()
