# Banco de pruebas del núcleo del motor

Código que sostiene los números de `docs/stack/motor-y-pipeline-ia.md`. **No es código de producción**: es la implementación mínima del núcleo X0 (enumerar `M₀`, construir máscaras, álgebra de bitsets) repetida en cuatro lenguajes para poder comparar y para comprobar el determinismo entre entornos.

Cuando exista `engine/` (tarea M-02) esto se mueve a `engine/bench/` y pasa a ser una serie temporal de CI con umbral de regresión del 20 %.

## Qué mide cada fichero

| Fichero | Qué mide |
|---|---|
| `bench.js` · `bench.rs` · `bench.go` · `bench.py` | El núcleo X0 completo, **algoritmo idéntico y semilla idéntica** en los cuatro: PRNG xorshift32, permutaciones por código de Lehmer, banco de máscaras de cinco familias de pista, residuo, U y **NR completa** (quitar cada pista y recontar). Emiten un `checksum` que debe coincidir en los cuatro |
| `bitset.js` | `Uint32Array` con búfer reutilizado frente a `BigInt`, sobre el bucle interno de NR y **con residuo no trivial**, que es el caso realista durante la búsqueda |
| `client.js` | La ruta que corre en el navegador según D-011/R3: enumerar `M₀`, construir las máscaras de las pistas publicadas, `AND`, `popcount` |
| `ladder.js` | Dimensionado de la escalera (M3) y de TR. **Sintético**: reproduce la *forma* del coste (punto fijo sobre el cuaderno booleano, barridos por técnica, recuento de iteraciones), no el catálogo real de catorce técnicas, que todavía no existe |
| `cliente.ts` | Boceto funcional de la superficie que el motor expone al navegador (enumerador, `Bitset`, cinco familias de predicado, residuo, `cells`). Existe **para medir cuántos bytes ocupa**, no para usarse |

## Cómo se ejecuta

```sh
rustc -O -o bench_rs bench.rs && go build -o bench_go bench.go

# preajuste Ancho: n=5, K=3, |M0| = 14.400 · banco de 2.000 pistas · 1.000 candidatos
./bench_rs 5 2000 1000
./bench_go 5 2000 1000
node     bench.js 5 2000 1000
python3  bench.py 5 2000 1000          # tarda ~18 s, y ese es justamente el resultado

# estrés: n=6, |M0| = 518.400 (doble franja 6×6) · banco de 500
./bench_rs 6 500 200 ; ./bench_go 6 500 200 ; node bench.js 6 500 200

node bitset.js 4 3000     # BigInt frente a Uint32Array
node bitset.js 5 300
node client.js 5 10 200   # ruta del navegador (ver caveat abajo)
node ladder.js 5 3 14 2000
node ladder.js 4 4 14 2000
gzip -9 -c cliente.ts | wc -c
```

## Resultados obtenidos

Contenedor de 4 núcleos; Node 22.22.2, rustc 1.94.1 (`-O`), go 1.24.7, CPython 3.11.15. Dos ejecuciones por medida.

**`n = 5`, `|M₀| = 14.400`, banco de 2.000 pistas (28,8 M evaluaciones), 1.000 candidatos con U + NR:**

| Lenguaje | Banco (ms) | Álgebra (ms) | Checksum |
|---|---|---|---|
| Rust | 219 – 250 | 35 – 36 | `59696` |
| Go | 386 – 393 | 62 – 69 | `59696` |
| TypeScript / Node | 473 – 488 | 78 – 81 | `59696` |
| Python | 17.458 | 38 | `59696` |

**`n = 6`, `|M₀| = 518.400`, banco de 500 (259 M evaluaciones):**

| Lenguaje | Banco (ms) | Álgebra (ms) | Checksum |
|---|---|---|---|
| Rust | 1.931 | 242 | `165868` |
| Go | 3.505 | 426 | `165868` |
| TypeScript / Node | 4.235 | 449 | `165868` |

**Los cuatro checksums coinciden.** Es la comprobación de que el determinismo bit a bit entre entornos se consigue con reglas de codificación (PRNG de 32 bits, enteros, orden explícito) y no eligiendo lenguaje.

**`BigInt` frente a `Uint32Array`** (bucle de NR, residuo no trivial):

| Preajuste | `Uint32Array` | `BigInt` | Penalización | Montículo |
|---|---|---|---|---|
| `n = 4` (576) | 0,0061 ms | 0,1967 ms | **32,4×** | 443 KB / −436 KB |
| `n = 5` (14.400) | 0,0716 ms | 45,31 ms | **632,6×** | 117 KB / 4.861 KB |

**Ruta del navegador** (medida en Node; un móvil de gama media es ~3-5× más lento):

| Preajuste | Enumerar + 10 máscaras + residuo | Memoria |
|---|---|---|
| 576 | 0,17 ms | 0,6 KB |
| 14.400 | 1,21 ms | 18 KB |
| 518.400 | 1,6 + 53 ms | 633 KB |

**Escalera + TR** (sintético): `n=5, K=3` → 0,047 ms/caso. `n=4, K=4` (XL, 96 casillas) → 6,2 iteraciones, 87 barridos, **0,123 ms/caso**.

**Tamaño de la superficie de cliente:** `cliente.ts` son 3,4 KB de fuente y **1,3 KB comprimidos con gzip** (1,1 KB sin comentarios). Es un límite superior del tamaño minificado.

## Caveats, para que nadie cite un número fuera de contexto

1. **`ladder.js` es sintético.** Reproduce la forma del coste, no el catálogo real. Sirve para responder «¿la escalera es un problema de rendimiento?» (no lo es, por tres órdenes de magnitud), no para presupuestar el código final.
2. **La comparación `BigInt` de `client.js` está superada por `bitset.js`.** En `client.js` con `n = 5` el residuo colapsa a cero modelos, y entonces el `popcount` de `BigInt` termina de inmediato y sale artificialmente favorable. `bitset.js` fuerza un residuo no trivial y es la medida buena.
3. **`cliente.ts` es un boceto de dimensionado**, no una implementación revisada. Cubre cinco familias de predicado; el catálogo completo (nueve de Expediente más las de Escena) se estima en 4-8 KB comprimidos.
4. **El banco de pruebas mide el núcleo**, que es la parte cuyo coste depende del lenguaje. No mide el generador completo, ni el greedy, ni la validación narrativa.
5. **Las cifras son de este contenedor.** Lo que importa no son los milisegundos absolutos sino las **razones entre lenguajes** y el margen frente al objetivo de la compuerta C-B (≥2.000 casos válidos/minuto), que se cumple con más de 30× de holgura.
