"""Ronda 5 (local, Docker Compose): Fase 1 (el problema) y Fase 2 (Outbox + idempotencia).
Deja todo registrado en lab5-jmeter/resultados/ronda_5_local/registro.txt para el informe.
Requiere Docker Desktop abierto y la rama lab5. Uso (desde la raíz del repo):
    python3 lab5-jmeter/ronda5_local.py
"""
import json, os, subprocess, sys, time
from datetime import datetime, timezone
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from comun import http, log, DIR

INV = "http://localhost:3002/inventory"; VEN = "http://localhost:3003/ventas"
ITEM = "11111111-1111-4111-8111-111111111111"
OUT = os.path.join(DIR, "resultados", "ronda_5_local"); os.makedirs(OUT, exist_ok=True)
reg = open(os.path.join(OUT, "registro.txt"), "w")

def anota(texto):
    print(texto, flush=True); reg.write(texto + "\n"); reg.flush()

def sh(*cmd, check=True, quiet=False):
    r = subprocess.run(list(cmd), capture_output=quiet, text=True)
    if check and r.returncode != 0:
        sys.exit(f"Falló: {' '.join(cmd)}\n{r.stderr if quiet else ''}")
    return r

def dc(*args, **kw):
    return sh("docker", "compose", *args, **kw)

DB = None
def sql(q, mostrar=True):
    r = subprocess.run(["docker", "compose", "exec", "-T", "postgres", "psql", "-U", "postgres", "-d", DB,
                        "-P", "pager=off", "-c", q], capture_output=True, text=True)
    if mostrar:
        anota(f"$ sql \"{q}\"\n{r.stdout.rstrip()}")
    return r.stdout

def sql_val(q):
    r = subprocess.run(["docker", "compose", "exec", "-T", "postgres", "psql", "-U", "postgres", "-d", DB,
                        "-At", "-F", "|", "-c", q], capture_output=True, text=True)
    return r.stdout.strip()

def esperar_health(url, nombre, limite=300):
    t = time.time()
    while time.time() - t < limite:
        if http("GET", url, timeout=3)[0] == 200:
            return datetime.now(timezone.utc)
        time.sleep(1)
    sys.exit(f"{nombre} no respondió {url} en {limite} s. Revise: docker compose logs {nombre}")

if subprocess.run(["docker", "info"], capture_output=True).returncode != 0:
    sys.exit("Docker no responde: abra Docker Desktop y vuelva a ejecutar.")
rama = sh("git", "branch", "--show-current", quiet=True).stdout.strip()
anota(f"=== Ronda 5 local — {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} — rama {rama}")

log("Levantando el ambiente local (docker compose up -d --build). La primera vez tarda 5-10 min...")
dc("up", "-d", "--build")
DB = dc("exec", "-T", "postgres", "printenv", "POSTGRES_DB", quiet=True).stdout.strip() or "cheapest"
esperar_health("http://localhost:3002/health", "inventario")
esperar_health("http://localhost:3003/health", "ventas")
esperar_health("http://localhost:3001/health", "logistica")
log("Servicios arriba. Esperando 20 s a que creen las tablas...")
time.sleep(20)
# Sembrar directamente dentro del contenedor postgres de docker compose (no por el puerto 5432 del Mac,
# que puede estar ocupado por otro Postgres: ahí la base "cheapest" no existe).
n_items = sql_val("SELECT count(*) FROM items_inventario;")
if not n_items.isdigit():
    sys.exit(f"La tabla items_inventario no existe todavía en la base '{DB}'. Espere 30 s y vuelva a ejecutar.")
if int(n_items) > 0:
    log(f"La base local ya tiene datos ({n_items} items de inventario). No se vuelve a sembrar.")
else:
    log(f"Sembrando la base local '{DB}' con libs/shared/database/src/seed.sql dentro del contenedor postgres...")
    seed = open("libs/shared/database/src/seed.sql").read()
    r = subprocess.run(["docker", "compose", "exec", "-T", "postgres", "psql", "-U", "postgres", "-d", DB,
                        "-v", "ON_ERROR_STOP=1", "-q"], input=seed, capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit(f"El seed falló:\n{r.stderr}")
    log(f"Seed listo: {sql_val('SELECT count(*) FROM items_inventario;')} items de inventario.")
cant_ini = sql_val(f"SELECT cantidad FROM items_inventario WHERE id = '{ITEM}';")
anota(f"Base local '{DB}' | cantidad inicial del ítem {ITEM}: {cant_ini}")

# Producto externo local (el seed no los crea)
code, body, _ = http("GET", f"{VEN}/productos-externos")
lista = json.loads(body) if code == 200 else []
if not lista:
    code, body, _ = http("POST", f"{VEN}/productos-externos", {
        "tiendaId": "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb", "codigoBarras": "7700000000001",
        "nombre": "Producto Externo Lab5", "categoria": "General", "precioBase": 25.5,
        "monedaId": "cccccccc-cccc-4ccc-8ccc-cccccccccccc", "cantidad": 1000})
    lista = [json.loads(body)]
venta = {"tiendaId": "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb", "fechaHora": "2026-10-14T10:00:00Z",
         "monedaId": "cccccccc-cccc-4ccc-8ccc-cccccccccccc",
         "items": [{"productoExternoId": lista[0]["id"], "productoId": "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
                    "cantidad": 1, "precioUnitario": 25.5}]}
json.dump(venta, open("venta-local.json", "w"), indent=2)
for intento in range(1, 13):
    code, body, _ = http("POST", f"{VEN}/ventas", venta)
    if code == 201 and "pending_stock_confirmation" not in body:
        break
    log(f"Venta de verificación intento {intento}: HTTP {code} -> {body[:160]} (reintento en 5 s)")
    time.sleep(5)
anota(f"Venta de verificación: HTTP {code} | pending={'pending_stock_confirmation' in body}")
if code != 201 or "pending_stock_confirmation" in body:
    subprocess.run(["docker", "compose", "ps"])
    sys.exit("La venta de verificación no salió como 201 normal. Envíe esta salida y la de: docker compose logs --tail 30 logistica ventas inventario")
time.sleep(5)  # que el Outbox entregue esa venta

anota("\n========== FASE 1 — ESCENARIO 1: descuento aplicado dos veces (sin idempotencia)")
antes1 = int(sql_val(f"SELECT cantidad FROM items_inventario WHERE id = '{ITEM}';"))
anota(f"Cantidad antes: {antes1}")
registro = {"tiendaId": "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb", "productoId": "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
            "ventaId": "f0000000-0000-4000-8000-000000000001", "itemInventarioId": ITEM,
            "fechaVenta": "2026-10-14T10:00:00Z", "cantidad": 1}
for i in (1, 2):
    code, body, _ = http("POST", f"{INV}/ventas", registro)
    anota(f"POST /inventory/ventas (intento {i}, mismo ventaId): HTTP {code}")
despues1 = int(sql_val(f"SELECT cantidad FROM items_inventario WHERE id = '{ITEM}';"))
anota(f"Cantidad después: {despues1}  -> bajó {antes1 - despues1} (una sola venta)")

anota("\n========== FASE 1 — ESCENARIO 2: ventas registradas sin descuento de stock")
antes2 = int(sql_val(f"SELECT cantidad FROM items_inventario WHERE id = '{ITEM}';"))
ventas_antes = int(sql_val("SELECT count(*) FROM ventas;"))
anota(f"Cantidad antes: {antes2} | ventas antes: {ventas_antes}")
dc("stop", "inventario")
anota("$ docker compose stop inventario")
time.sleep(3)
for i in (1, 2, 3):
    code, body, t = http("POST", f"{VEN}/ventas", venta)
    st = json.loads(body).get("status", "-") if code == 201 else body[:120]
    anota(f"Venta {i}: HTTP {code} en {t:.2f} s | status={st}")
ventas_desp = int(sql_val("SELECT count(*) FROM ventas;"))
cant_desp = int(sql_val(f"SELECT cantidad FROM items_inventario WHERE id = '{ITEM}';"))
anota(f"Con Inventario apagado: ventas {ventas_antes} -> {ventas_desp} (+{ventas_desp - ventas_antes}) | cantidad {antes2} -> {cant_desp}")
sql('SELECT id, status, attempts, "createdAt" FROM outbox_http_calls ORDER BY "createdAt" DESC LIMIT 5;')
time.sleep(6)
anota("(6 s después: attempts debe haber crecido)")
sql('SELECT id, status, attempts, "createdAt" FROM outbox_http_calls ORDER BY "createdAt" DESC LIMIT 5;')
input("\n>>> CAPTURA: tome ahora la captura de la tabla PENDING de arriba y presione Enter para seguir con la Fase 2...")

anota("\n========== FASE 2 — Outbox e idempotencia")
dc("start", "inventario")
anota("$ docker compose start inventario")
t_rec = esperar_health("http://localhost:3002/health", "inventario")
anota(f"T_rec (Inventario vuelve a responder /health): {t_rec.astimezone().strftime('%H:%M:%S.%f')[:-3]}")
for _ in range(60):
    pend = int(sql_val("SELECT count(*) FROM (SELECT status FROM outbox_http_calls ORDER BY \"createdAt\" DESC LIMIT 3) t WHERE status <> 'DELIVERED';"))
    if pend == 0:
        break
    time.sleep(1)
sql('SELECT id, status, attempts, "deliveredAt" FROM outbox_http_calls ORDER BY "createdAt" DESC LIMIT 5;')
ultimo = sql_val('SELECT to_char(max("deliveredAt"), \'YYYY-MM-DD"T"HH24:MI:SS.MS\') FROM (SELECT "deliveredAt" FROM outbox_http_calls ORDER BY "createdAt" DESC LIMIT 3) t;')
if ultimo:
    # deliveredAt se guarda con la hora del contenedor (UTC)
    dl = datetime.fromisoformat(ultimo).replace(tzinfo=timezone.utc)
    anota(f"Reconciliación: último deliveredAt − T_rec = {(dl - t_rec).total_seconds():.1f} s (umbral ASR-4: < 30 s)")
cant_final = int(sql_val(f"SELECT cantidad FROM items_inventario WHERE id = '{ITEM}';"))
anota(f"Cantidad: {antes2} -> {cant_final}  (debe bajar exactamente 3: bajó {antes2 - cant_final})")

anota("\n--- Reenvío de una entrega ya hecha con la misma X-Idempotency-Key")
fila = sql_val("SELECT id, payload::text FROM outbox_http_calls WHERE status = 'DELIVERED' ORDER BY \"createdAt\" DESC LIMIT 1;")
oid, payload = fila.split("|", 1)
anota(f"Fila: id={oid}\npayload={payload}")
antes_409 = int(sql_val(f"SELECT cantidad FROM items_inventario WHERE id = '{ITEM}';"))
r = subprocess.run(["curl", "-s", "-i", "-X", "POST", f"{INV}/ventas/desde-outbox", "-H", "Content-Type: application/json",
                    "-H", f"X-Idempotency-Key: {oid}", "-d", payload], capture_output=True, text=True)
anota(f"$ curl -i -X POST {INV}/ventas/desde-outbox -H 'X-Idempotency-Key: {oid}' -d '<payload>'\n{r.stdout.strip()}")
desp_409 = int(sql_val(f"SELECT cantidad FROM items_inventario WHERE id = '{ITEM}';"))
anota(f"Cantidad antes/después del reenvío: {antes_409} -> {desp_409} (no debe cambiar)")
anota("\n>>> CAPTURAS: la tabla DELIVERED, la respuesta 409 y las cantidades están arriba y en registro.txt.")
anota("Al terminar las capturas apague el ambiente local con:  docker compose down")
log(f"Registro guardado en {os.path.join(OUT, 'registro.txt')}")
