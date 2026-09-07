# Estudio de stack: lenguaje y arquitectura del motor, y pipeline narrativo con IA

Autor: `ingeniero-motor-puzzles`. Fecha: 7 de septiembre de 2026. Versión 1.0.
Encargo: parte del estudio en profundidad del stack que pide el fundador. Cubre **lenguaje y runtime del motor**, **estructura del repositorio**, **almacenamiento de casos** y **arquitectura del pipeline de generación narrativa con IA**.
Base: `docs/contexto-proyecto.md`, `docs/motor-viabilidad-jugabilidad.md`, `docs/motor-viabilidad-expediente.md`, `docs/roadmap/plan-motor.md`, `docs/roadmap/plan-contenido.md`, `docs/roadmap/plan-backend.md` (contratos C1-C9), `docs/stack/frontend.md` (estudio hermano, recomienda SvelteKit), `docs/decisiones.md` (D-009, D-010, D-011).

**Fuera de mi encargo, por indicación expresa:** elegir modelo de IA y dar precios de proveedores. Eso lo cierra `director-producto` con la referencia oficial. Aquí hay **arquitectura, requisitos que el modelo debe cumplir y consumo en tokens por caso**; ni una cifra en euros ni un nombre de proveedor.

**Aviso de marca (D-006).** Revisados los cinco disparadores sobre este material: **ninguno se cumple**. Este estudio no crea ninguno. El registro en la OEPM ya está calendarizado por otra vía (D-011, R5: viernes 30 de octubre), así que no procede alerta.

---

## 0. Cómo leer este documento

### 0.1 Qué es medida y qué es juicio

Los dos dictámenes de viabilidad decían, con razón, que el estado del código era **cero** y que todo eran estimaciones. Este estudio cambia eso en la parte que se podía cambiar: **he implementado el núcleo de máscaras (X0) cuatro veces —TypeScript/Node, Rust, Go y Python— con el mismo algoritmo, la misma semilla y las mismas estructuras, y lo he medido.** Los cuatro programas están en el anexo de §2.1 y son reproducibles.

- **Medido** (en este contenedor, 4 núcleos; Node 22.22.2, rustc 1.94.1 con `-O`, go 1.24.7, CPython 3.11.15): todo lo de §1, §2.2, §2.3, §2.4, §2.5.
- **Estimado con método declarado**: el presupuesto de tokens de §5.8 y el coste en días de agente de las piezas nuevas.
- **Juicio de ingeniería**: los pesos de la matriz de §2.6 y las recomendaciones. Se pueden discutir; los números de §2.2 no.

Una advertencia de honestidad sobre el banco de pruebas: mide **el núcleo, que es el 100 % del coste que depende del lenguaje**, no el motor entero. La escalera (M3) la he medido con un modelo sintético estructuralmente fiel (§1.3), no con el catálogo real de técnicas, que no existe. Lo digo antes de que nadie cite el número fuera de contexto.

### 0.2 Veredicto en doce líneas

1. **Un solo lenguaje: TypeScript.** Node para el lote y el servidor, el mismo código en el navegador para el residuo.
2. **La razón no es la comodidad: es que la velocidad no es el problema.** El objetivo de la compuerta C-B (≥2.000 casos válidos/minuto) se cumple en TypeScript plano con un margen de más de 30×. Rust es 2,1× más rápido en la única parte que importa; ese 2,1× se aplica a un presupuesto que ya sobra.
3. **El determinismo bit a bit entre entornos es un problema resuelto, y lo he comprobado:** los cuatro lenguajes producen **exactamente el mismo checksum** con un PRNG de 32 bits y aritmética entera. No es una propiedad del lenguaje, es una propiedad de cuatro reglas de codificación (§2.3).
4. **BigInt está descartado como bitset**, y con datos: 32× más lento que `Uint32Array` con `n = 4` y **633× con `n = 5`**, más 4,9 MB de basura de montículo donde el búfer reutilizado genera 117 KB.
5. **Nada de Python en producción, ni siquiera para "investigar tasas".** Es 36× más lento que TypeScript **justo en la etapa que domina la Compuerta 0**: construir el banco de máscaras. Las medidas de τ, δ y β son generación pura; hacerlas en un cuaderno de Python las haría inviables. El motor emite CSV y el análisis se hace donde se quiera.
6. **Rust a WASM: no, y con un disparador escrito** para reabrirlo (§2.7).
7. **Monorepo con pnpm workspaces, cuatro paquetes, sin Turborepo** hasta que CI pase de 10 minutos.
8. **Corrección al contrato C3 de backend:** `contratos/` no puede vivir dentro de `web/`. Si vive ahí, `engine/` depende de `web/` y la dirección de las dependencias queda invertida. Es un cambio de ruta que hoy cuesta cero y en la semana 3 cuesta un refactor en dos áreas.
9. **Almacenamiento en tres niveles**, con una consecuencia bonita del determinismo: **la solución no hace falta guardarla en el repositorio, porque es derivable de `(semilla, versión del motor)`**. Lo que no se guarda no se filtra.
10. **El hash con sal no es confidencialidad, es integridad.** Con `|M₀| = 576` hay 576 hashes que probar. Los documentos actuales lo dan por garantía y no lo es (§4.4).
11. **El pipeline narrativo se diseña alrededor de una idea:** el embudo se estrecha **antes** de la etapa cara. Se generan muchos candidatos deterministas (gratis) y se redacta **uno**. Y la validación de ida y vuelta empieza por un **emparejador de gramática determinista**, no por el modelo: si el texto es la plantilla con sus huecos rellenos, su significado formal está probado por construcción, no contrastado por heurística.
12. **Cinco contradicciones entre documentos aprobados** salen a la luz en §8, incluida una del propio dictamen de Expediente: la doble franja 6×6 son 518.400 modelos y **no cabe bajo CAP**, que está fijado en 150.000.

---

## 1. El perfil de coste real del motor

Antes de comparar lenguajes hay que saber en qué se va el tiempo, porque de eso depende que el lenguaje importe o no. Estas son medidas, no suposiciones.

### 1.1 Las tres etapas y lo que cuesta cada una

Con el preajuste **Ancho** (`n = 5`, `K = 3`, `|M₀| = 14.400`), que es el mayor de Expediente en producción:

| Etapa | Qué hace | Coste medido (TypeScript/Node) | ¿Depende del lenguaje? |
|---|---|---|---|
| **Construir el banco de máscaras** | Evaluar 2.000 pistas candidatas sobre los 14.400 modelos = 28,8 M evaluaciones de predicado | **473-488 ms por tablero** | **Sí, mucho.** Es un bucle escalar apretado |
| **Álgebra de máscaras** | 1.000 candidatos × (U + NR sobre 8 pistas) = 9.000 `AND`-reduce de 450 palabras + `popcount` | **78-81 ms**, es decir **~79 µs por candidato** | Sí, algo |
| **Escalera + TR** | Certificado (punto fijo sobre el cuaderno) + `\|T\|` reejecuciones para TR | **47 µs por caso** (Ancho) / **123 µs** (XL, `n=4, K=4`) | Poco: el cuaderno son 75-96 casillas |

**La conclusión que reordena las prioridades:** el coste dominante es **por tablero**, no por candidato, exactamente como decía `motor-viabilidad-expediente.md` §1.3. Y la escalera, que es la tarea indivisible más larga del plan (M-11, 5 días) y la que más miedo da, **no es un problema de rendimiento en absoluto**: 0,123 ms por caso en el peor preajuste. Su dificultad es de diseño, no de máquina.

### 1.2 ¿Se cumple la compuerta C-B?

C-B exige **≥2.000 casos válidos por minuto y preajuste**. Extrapolando de lo medido, con un lote sobre ~200 tableros distintos:

| Tasa de aceptación τ | Candidatos necesarios | Álgebra + escalera | Bancos (200 tableros) | **Total** |
|---|---|---|---|---|
| τ = 10 % | 20.000 | ~4 s | ~96 s | **~1,7 min** |
| τ = 1 % (umbral VERDE) | 200.000 | ~26-40 s | ~96 s | **~2,3 min** |
| τ = 0,1 % (umbral ÁMBAR) | 2.000.000 | ~4,5 min | ~96 s | **~6-8 min** |

Para 2.000 casos válidos. **Se cumple con holgura en TypeScript plano y sin paralelizar**, incluso en el escenario ámbar. Con `worker_threads` sobre 4 núcleos se divide entre tres. Ese es el hecho que decide el lenguaje: **elegir el runtime más rápido optimiza un presupuesto que ya sobra por un factor de 30**.

### 1.3 Dónde sí duele, y es un sitio solo

El único preajuste que cambia el orden de magnitud es la **doble franja 6×6 de Escena** (V1 / M-56), con `|M₀| = 518.400`:

| Medida | `n = 5` (14.400) | `n = 6` (518.400) | Factor |
|---|---|---|---|
| Banco de 2.000 pistas, TS/Node | 0,48 s | **~17 s** (extrapolado de 4,2 s con 500) | 36× |
| Memoria del banco de 2.000 | 3,6 MB | **130 MB** | 36× |
| Máscara por pista | 1,8 KB | 64,8 KB | 36× |
| Residuo en el navegador (10 pistas) | 1,2 ms / 18 KB | **53 ms / 633 KB** | 44× / 35× |

Esto no es un problema de lenguaje —Rust tardaría 8 s en vez de 17, y seguiría necesitando 130 MB—, es un problema de **techo**. Y aquí aparece la contradicción de §8.1: CAP está fijado en 150.000 modelos y 518.400 no cabe.

---

## 2. Lenguaje y runtime del motor

### 2.1 El banco de pruebas

Cuatro implementaciones del núcleo X0, algoritmo idéntico línea a línea:

1. **PRNG xorshift32** con semilla `20260907`, aritmética de 32 bits exacta en los cuatro lenguajes.
2. **Enumeración de `M₀`** como tuplas de permutaciones, decodificadas con código de Lehmer (índice → permutación, sin tablas).
3. **Banco de pistas** de cinco familias (`junto` sobre dos categorías, `junto` valor-valor con cuantificador existencial, negativa, disyuntiva), sorteadas del PRNG.
4. **Máscaras** como bitset (`Uint32Array` en JS, `Vec<u32>` en Rust, `[]uint32` en Go, entero de precisión arbitraria en Python) y `popcount`.
5. **Bucle de generación**: 1.000 candidatos, cada uno con residuo (`AND`-reduce + `popcount`) y **la comprobación NR completa** (quitar cada una de las 8 pistas y recontar).
6. **Checksum** de todos los `popcount`, para comprobar que los cuatro calculan lo mismo bit a bit.

**El código está en el repositorio, en `docs/stack/bench-motor/`**, con su `README.md`: `bench.js`, `bench.rs`, `bench.go` y `bench.py` (el núcleo en los cuatro lenguajes), más `bitset.js` (BigInt frente a `Uint32Array`), `client.js` (ruta del navegador), `ladder.js` (dimensionado de la escalera) y `cliente.ts` (boceto para medir bytes). El README lleva las instrucciones de ejecución, los resultados y **cinco advertencias sobre lo que cada número no dice**. Se moverá a `engine/bench/` cuando `engine/` exista (tarea M-02).

### 2.2 Resultados

**Preajuste Ancho** (`n = 5`, `K = 3`, `|M₀| = 14.400`; banco de 2.000 pistas = 28,8 M evaluaciones; 1.000 candidatos con U + NR). Dos ejecuciones, mostrando el rango:

| Lenguaje | Banco (ms) | Álgebra (ms) | Banco, vs Rust | Checksum |
|---|---|---|---|---|
| **Rust** (`-O`) | **219 – 250** | **35 – 36** | 1,0× | `59696` |
| **Go** | 386 – 393 | 62 – 69 | 1,6× | `59696` |
| **TypeScript / Node** | 473 – 488 | 78 – 81 | **2,1×** | `59696` |
| **Python** (enteros grandes) | **17.458** | 38 | **75×** | `59696` |

**Preajuste de estrés** (`n = 6`, `|M₀| = 518.400`; banco de 500 pistas = 259 M evaluaciones):

| Lenguaje | Banco (ms) | Álgebra (ms) | Checksum |
|---|---|---|---|
| Rust | 1.931 | 242 | `165868` |
| Go | 3.505 | 426 | `165868` |
| TypeScript / Node | 4.235 | 449 | `165868` |

Cuatro lecturas de esta tabla:

- **TypeScript está a 2,1× de Rust**, no a 10×. Para bucles escalares sobre `TypedArray` con enteros de 32 bits, V8 genera código muy bueno. La ventaja de Rust es real y es pequeña **en la escala en la que este proyecto trabaja**.
- **Go queda en medio y no aporta nada que resuelva un problema del proyecto.** No comparte código con la web, no corre en el navegador y no es más rápido que Rust. Es la opción sin argumento.
- **Python es 36× más lento que TypeScript construyendo el banco**, que es la etapa dominante. Y a la vez **es competitivo en el álgebra** (38 ms frente a 78 de JS), porque el `AND` de dos enteros de 14.400 bits en CPython es un bucle en C. Es un perfil muy revelador: Python sirve para *consumir* máscaras, no para *fabricarlas*.
- **Los checksums son idénticos en los cuatro.** Eso es §2.3.

### 2.3 Determinismo bit a bit: no es una propiedad del lenguaje, son cuatro reglas

El encargo pregunta por «determinismo bit a bit entre entornos». **He comprobado que se consigue en los cuatro lenguajes a la vez**, lo que significa que el determinismo no puede ser un criterio para elegir uno: es un criterio para elegir **cómo se escribe**. Las cuatro reglas:

| # | Regla | Por qué |
|---|---|---|
| **D1** | **El PRNG opera sobre palabras de 32 bits, nunca de 64.** xorshift32, PCG32 o SplitMix32 | Es la única anchura que JS reproduce sin `BigInt` (`Math.imul`, `>>>`), y la que Rust, Go y Python replican trivialmente. Un PRNG de 64 bits obliga a `BigInt` en JS y abre la puerta a divergencias |
| **D2** | **Ni un número en coma flotante en ninguna ruta que decida algo.** Ni para sortear, ni para puntuar, ni para ordenar, ni para medir dificultad | La dificultad se mide en **enteros** (pasos, nivel máximo, ancho del árbol). Una media en coma flotante que decida una banda es un determinismo roto esperando a que cambie el redondeo |
| **D3** | **Todo orden de iteración es explícito.** Nunca recorrer un `Map`, un `Set`, un `dict` ni `Object.keys` para tomar una decisión; siempre un array ordenado por una clave declarada | Es el fallo de determinismo más común y el más difícil de ver. Se comprueba con una regla de lint, no con disciplina |
| **D4** | **La serialización es canónica**: claves ordenadas, sin espacios, enteros sin notación exponencial, UTF-8 con normalización NFC | Es lo que hace que P3 («misma semilla ⟹ mismo caso, byte a byte») sea comprobable, y lo que hace que el hash de deduplicación signifique algo |

Estas cuatro reglas van en `docs/motor.md` §2 y en el lint de `engine/`. Con ellas, un caso generado en el portátil del fundador, en GitHub Actions y en el navegador es **el mismo caso**, y una segunda implementación en otro lenguaje sirve de oráculo (§6.2).

### 2.4 `BigInt` frente a bitsets de 32 bits: la pregunta tiene respuesta, y es rotunda

El encargo pregunta explícitamente por esto. Medido sobre el bucle interno de NR (quitar cada una de 8 pistas, `AND`-reduce y `popcount`), con el residuo **no trivial** —que es el caso realista durante la búsqueda, no el caso final de un modelo:

| Preajuste | `Uint32Array` con búfer reutilizado | `BigInt` | Penalización | Montículo (`Uint32Array` / `BigInt`) |
|---|---|---|---|---|
| `n = 4` (576 modelos) | 0,0061 ms | 0,1967 ms | **32,4×** | 443 KB / −436 KB |
| `n = 5` (14.400 modelos) | **0,0716 ms** | **45,31 ms** | **632,6×** | 117 KB / **4.861 KB** |

Los dos calculan lo mismo (comprobado). Dos motivos y una consecuencia:

- **`BigInt` es inmutable**: cada `AND` reserva un objeto nuevo de 1,8 KB. El bucle de NR de un solo candidato genera ~115 KB de basura; un lote de 200.000 candidatos genera **más de 20 GB de objetos efímeros**. El `Uint32Array` con un búfer de rascar preasignado reserva **cero**.
- **`popcount` sobre `BigInt` no tiene forma buena.** Limpiar el bit más bajo (`x &= x - 1n`) cuesta una operación sobre un entero enorme por cada bit puesto; trocear en palabras de 32 exige desplazar el entero entero, que es cuadrático.
- **Consecuencia de diseño, no solo de rendimiento:** el núcleo expone `Bitset` como clase sobre `Uint32Array` con operaciones **in situ** (`yIgual`, `llenar`, `cuenta`) y un búfer de rascar por hilo. Esa firma va en el contrato del núcleo (M-01/M-03), porque una API que devuelve bitsets nuevos invita a escribir el bucle lento sin darse cuenta.

Y una nota sobre 64 bits: `BigUint64Array` **sí** existe y sería un 2× teórico sobre `Uint32Array`, pero sus elementos se leen y escriben como `BigInt`, con lo que la ganancia se pierde en la conversión. **Palabras de 32 bits, decidido.**

### 2.5 El residuo en el cliente: qué queda de este argumento después de D-011/R3

Este es el punto donde el argumento clásico a favor de TypeScript («el motor va en TS para compartir el solver con el frontend», dictamen de Escena §4.2 y §V11) **ha cambiado de forma y hay que reescribirlo con precisión**, porque D-011/R3 movió cuatro cosas al servidor.

Lo que R3 decide, literalmente: *«El cliente calcula el residuo a partir de las pistas que ya tiene; nunca recibe la respuesta a una pregunta que el jugador no ha formulado. Comprobar, Sabueso, acusar y el menú del interrogatorio van al servidor.»*

Traducido a paquetes:

| Pieza | Dónde corre | ¿Se comparte con la web? |
|---|---|---|
| Enumerador de `M₀`, `Bitset`, residuo | **Servidor y navegador** | **Sí** |
| DSL: `sat`, `mask`, **`cells(pista, estado)`** (tirar del hilo) | **Servidor y navegador** | **Sí** |
| Escalera M3, certificado, TR | **Solo servidor** | No |
| Motor MV (menú vivo), Sabueso, Comprobar, acusar | **Solo servidor** | No |
| Generador, banco de pistas, greedy, NR | **Solo lote** | No |

**El argumento sobrevive, pero es más pequeño y más nítido:** lo compartido es **el núcleo y el DSL**, que es justo la parte donde una segunda implementación sería una fuente de divergencia entre lo que el jugador ve subrayado y lo que el motor cree. Medido, el coste de esa superficie en el navegador:

| Preajuste | Enumerar `M₀` | 10 máscaras | Memoria | En un móvil medio (≈3-5×) |
|---|---|---|---|---|
| Corto/Clásico (576) | <0,1 ms | 0,17 ms | 0,6 KB | **<1 ms** |
| Ancho (14.400) | 0,3 ms | 1,21 ms | 18 KB | **~4-6 ms** |
| Doble franja (518.400) | 1,6 ms | 53 ms | 633 KB | **~160-270 ms** |

Y el **tamaño del paquete**, que es lo que le importa a `desarrollador-frontend` con su presupuesto de 110 KB: he escrito un boceto funcional de la superficie de cliente (enumerador + `Bitset` + cinco familias de predicado + residuo + `cells`) y ocupa **3,4 KB de fuente, 1,1-1,3 KB comprimido con gzip**. Extrapolado al catálogo completo (nueve familias de Expediente más los predicados de Escena), **4-8 KB comprimidos**. Es entre el 4 % y el 7 % del presupuesto de bytes del frontend.

> **Compromiso que asumo con `desarrollador-frontend`:** `@caso-diario/motor-cliente` no pasará de **10 KB comprimidos**, y habrá una prueba en CI del motor que falle si lo supera. No es su presupuesto el que tiene que absorber mi descuido.

Consecuencia de arquitectura, que va en §3.2: **`engine/core` y `engine/dsl` no pueden importar `node:*` ni nada de Node.** Es una regla de lint, y es la que hace que este argumento siga siendo cierto dentro de tres meses.

### 2.6 La matriz

Pesos declarados antes de puntuar, siguiendo el método de D-010. Escala 0-10.

| # | Criterio | Peso | TypeScript | Rust→WASM | Go | Python | Híbrido TS+Py |
|---|---|---|---|---|---|---|---|
| C1 | **Rendimiento real del lote** (medido, §2.2) | 15 | 8 | 10 | 9 | 1 | 8 |
| C2 | **Determinismo bit a bit** (§2.3) | 18 | 9 | 9 | 9 | 9 | **5** |
| C3 | **Compartir núcleo y DSL con la web** (§2.5) | 20 | **10** | 5 | 1 | 1 | 9 |
| C4 | **Productividad de agentes de IA** | 14 | **10** | 6 | 8 | 9 | 7 |
| C5 | **Tests de propiedad** | 8 | 8 | 8 | 5 | **10** | 8 |
| C6 | **CLI y firma a ciegas** | 6 | 9 | 8 | 9 | 9 | 8 |
| C7 | **Empaquetado en el monorepo** | 9 | **10** | 5 | 4 | 4 | 5 |
| C8 | **Coste de mantener el stack** | 10 | **10** | 5 | 7 | 8 | **3** |
| | **Total ponderado sobre 10** | 100 | **9,25** | 7,20 | 6,10 | 5,29 | 6,85 |

Justificación de las notas que no son obvias:

- **C2, híbrido = 5.** Es la nota más dura de la tabla y es deliberada. Dos implementaciones del mismo generador en dos lenguajes no divergen el primer día: divergen el día que alguien arregla un caso límite en una y no en la otra, y entonces «misma semilla, mismo caso» deja de ser cierto sin que ningún test lo diga. Un oráculo diferencial (§6.2) es otra cosa: no genera contenido publicable.
- **C3, Rust→WASM = 5.** WASM sí corre en el navegador, pero el módulo no comparte *tipos* con el frontend: hay que serializar en la frontera, y el `cells(pista, estado)` que pinta el subrayado se llama en cada toque de pista. Además suma ~15-25 KB de módulo al presupuesto de bytes frente a los 4-8 KB del TS plano.
- **C4, Rust = 6.** Un agente escribe Rust correcto, pero el ciclo de compilación y el préstamo de memoria multiplican las iteraciones sobre un código que cambiará mucho (el catálogo de predicados y las 14 técnicas están sin cerrar). El coste de agente no es escribir: es reescribir.
- **C5, Python = 10.** Hypothesis sigue siendo la mejor biblioteca de tests de propiedad que existe, con ventaja clara sobre fast-check en composición de estrategias y en `stateful testing`. **Es el único criterio donde Python gana**, y pesa 8 sobre 100. No compra un segundo lenguaje.
- **C8, híbrido = 3.** Dos cadenas de herramientas, dos CI, dos formas de fijar versiones, dos sitios donde arreglar un predicado, y la pregunta «¿cuál de las dos manda?» apareciendo en cada revisión.

### 2.7 Veredicto y los tres disparadores que lo reabren

**TypeScript, un solo lenguaje, en modo estricto** (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`), Node 22 LTS para el lote y el servidor, el mismo código en el navegador para el núcleo y el DSL.

La decisión no se toma «para siempre». Se reabre si ocurre **cualquiera** de estas tres cosas, y solo entonces:

| Disparador | Umbral | Qué se haría |
|---|---|---|
| **T1 · Un preajuste por encima de 600.000 modelos entra en producción** | La doble franja 6×6 (M-56) supera su prueba en papel **y** `disenador-puzzles` sube CAP | Reescribir **solo la construcción del banco** en Rust→WASM (≈2× medido) y dejar todo lo demás en TS. Es la única función con superficie pequeña y estable |
| **T2 · El lote semanal supera 30 minutos** | Medido en el benchmark de CI, tres semanas seguidas | Primero `worker_threads` (4 núcleos, ~3× gratis); solo si no basta, T1 |
| **T3 · Aparece una divergencia núcleo/escalera que el oráculo en TS no detecta** | P4 falla en producción con el oráculo en verde | Segunda implementación del núcleo en Rust **solo como oráculo de CI**, nunca como generador |

Ninguno se cumple hoy. Y conviene decir la parte incómoda: **T1 depende de una mecánica (V1, doble franja) que está en la fase 2 condicionada a una prueba con ocho personas en papel.** Es decir, el único caso donde el lenguaje importaría está detrás de una compuerta que puede salir en rojo.

### 2.8 Por qué el híbrido con Python no sirve para lo que se propone

La propuesta del encargo es razonable en abstracto —«TypeScript para producto y Python para investigación de tasas»— y **la medida la desmonta**. La «investigación de tasas» es la Compuerta 0: medir τ, δ y β sobre 10.000 candidatos **construidos**. Eso es:

```
τ, δ, β  =  construir bancos de máscaras  +  generar candidatos  +  correr la escalera
           └──────────── 36× más lento en Python ────────────┘
```

No es análisis de datos: es **la parte más pesada del generador**. Un lote de Compuerta 0 que en TypeScript tarda 2-8 minutos, en Python tardaría **entre una y cinco horas**, y habría que reimplementar el DSL y la escalera enteros para llegar a ese resultado peor.

**Lo que sí se hace:** el motor emite las medidas en CSV/JSONL (`engine medir --compuerta 0 --salida csv`) y el análisis, los histogramas y las regresiones se hacen donde `analista-datos` prefiera, incluida una hoja de cálculo. **El lenguaje del análisis no tiene por qué ser el lenguaje del motor**, y confundir las dos cosas es lo que produce el segundo lenguaje que nadie quería mantener.

---

## 3. Estructura del repositorio

### 3.1 Monorepo, y no está muy reñido

| Criterio | Monorepo | Repos separados |
|---|---|---|
| Cambio atómico de contrato (certificado v1 → v1.1 toca motor, web y supabase) | **Un PR, un CI, una revisión** | Tres PR coordinados y una ventana donde el sistema está roto |
| Tipos compartidos | Referencia directa de paquete | Publicar en un registro, versionar, actualizar consumidores |
| Agentes de IA trabajando | **Todo el contexto en un `grep`** | Contexto partido; el agente del motor no ve cómo se consume su JSON |
| Aislar secretos de la IA del código de producto | Un job separado en el mismo CI | Natural |
| Tiempo de CI | Crece con el repositorio (mitigable con filtros por ruta) | Menor por repositorio |

Con cuatro áreas de código, un contrato que es la columna vertebral del producto (C1, el certificado) y agentes que necesitan ver el conjunto, **monorepo sin discusión**. Ya es de hecho lo que hay: `docs/`, `content/` y el CLAUDE.md del proyecto lo dan por supuesto.

### 3.2 Los paquetes y la dirección de las dependencias

```
caso-diario/                       (raíz: pnpm-workspace.yaml, tsconfig.base.json, .github/)
├── contratos/                     @caso-diario/contratos      ← NADIE depende hacia arriba
│   ├── src/caso.ts                esquema del caso (Zod)      · emite engine/schema/case.v1.json
│   ├── src/certificado.ts         C1, agnóstico del modo      · emite docs/specs/certificado.v1.json
│   ├── src/pista.ts               DSL serializable            · emite engine/schema/clue.v1.json
│   ├── src/api.ts                 C3: Caso, Intento, Acusacion, Resultado, Racha, Escalafon…
│   └── src/publico.ts             proyección público/privado (§4.4)
│
├── engine/                        el motor
│   ├── core/                      @caso-diario/motor-core     ← SIN node:*, va al navegador
│   │   ├── bitset.ts              Uint32Array, operaciones in situ, búfer de rascar
│   │   ├── enumerar.ts            M₀ por código de Lehmer, CAP comprobado antes
│   │   └── algebra.ts             residuo, U, NR, entrañamiento, soportes mínimos, NV, NC
│   ├── dsl/                       @caso-diario/motor-dsl      ← SIN node:*, va al navegador
│   │   ├── escena/                predicados: sat, mask, cells, ¬, test por predicado
│   │   └── expediente/            T1-T9
│   ├── ladder/                    @caso-diario/motor-escalera ← solo servidor
│   ├── gen/                       @caso-diario/motor-gen      ← solo lote
│   ├── validate/                  narrativa: gramática, retraducción, léxico, decorados
│   ├── publish/                   lote, calendario, deduplicación, artefacto de ingestión
│   ├── cli/                       generar · validar · inspeccionar · resolver --a-ciegas · medir
│   ├── bench/                     los ficheros de §2.1, como serie temporal en CI
│   └── schema/                    JSON Schema EMITIDO desde contratos/ (commiteado, diffable)
│
├── web/                           la aplicación (SvelteKit o Next, según docs/stack/frontend.md)
│   └── depende de: contratos, motor-core, motor-dsl        ← y de nada más del motor
│
├── supabase/                      migraciones y funciones
├── content/                       biblia, plantillas, prompts, casos redactados
└── docs/
```

**Dirección de las dependencias, que es la única regla que importa:**

```
contratos  ←  motor-core  ←  motor-dsl  ←  motor-escalera  ←  motor-gen
    ↑              ↑             ↑
    └──────────────┴─────────────┴───  web
```

Nada apunta hacia `web/`. Se comprueba en CI con una regla de dependencias (`dependency-cruiser` o equivalente), no con buena voluntad.

> **Corrección al contrato C3 de `plan-backend.md`.** C3 dice: *«un único paquete `web/src/contratos/` en TypeScript con esquemas zod»*. Y `plan-frontend.md` dice que los tipos del caso son *«generados desde `engine/`»*. **Las dos cosas juntas invierten la flecha:** si los contratos viven dentro de `web/`, entonces `engine/` tiene que importar de `web/`, y el motor —que es la pieza de más arriba— pasa a depender de la aplicación. Propongo **`contratos/` como paquete de primer nivel**, `@caso-diario/contratos`, consumido por los tres. El resto de C3 (zod, un solo sitio, firma de frontend) queda igual. **Coste hoy: cambiar una ruta en un plan. Coste en la semana 3: un refactor que toca motor, web y backend a la vez.** Necesito la conformidad de `desarrollador-backend` y `desarrollador-frontend` (§9).

### 3.3 pnpm workspaces, y Turborepo todavía no

**pnpm workspaces**, que ya es lo que usa el plan de frontend (`pnpm build` en F-02). Sobre Turborepo:

| A favor de Turborepo | En contra, aquí y ahora |
|---|---|
| Caché de tareas entre ramas y en CI | Con 4-6 paquetes y compilaciones de segundos, la caché ahorra menos de lo que cuesta configurarla |
| Orquestación del grafo de tareas | `pnpm -r --filter` ya lo hace para un grafo de esta forma |
| Caché remota compartida | Es de pago o es otro servicio que administrar; el presupuesto de backend es <100 €/mes |
| | El lote nocturno **no es cacheable por diseño**: produce contenido nuevo cada vez. La tarea más cara del repositorio no se beneficia |

**Decisión: sin Turborepo al lanzamiento.** Disparador para añadirlo: **CI por encima de 10 minutos de reloj en el camino crítico durante dos semanas seguidas**. Es una tarde de trabajo cuando llegue y no condiciona nada hoy.

### 3.4 Versionado del esquema de caso y del certificado

Dos artefactos, dos políticas distintas, porque no envejecen igual.

**El certificado (C1) es el que no se puede romper.** Lo consumen siete piezas de producto (reconstrucción, escalafón, Sabueso, contraprueba, pásale tu caso, imprimible, paso a paso) y vive en la base de datos de todos los casos ya publicados.

| Tipo de cambio | Ejemplo | Versión | Regla |
|---|---|---|---|
| **Compatible** | Campo opcional nuevo; valor nuevo en un enumerado **de técnicas** | `1.0` → `1.1` | Los lectores de 1.0 siguen funcionando. Se permite en cualquier momento |
| **Incompatible** | Renombrar `celdas_afectadas`; cambiar la forma del localizador; hacer obligatorio un campo | `1.x` → `2.0` | **Prohibido después de la semana 1 sin migración escrita.** El certificado de un caso publicado es inmutable: una migración 1→2 es un script que reescribe el archivo entero, no un cambio de código |

Y una regla que evita el fallo silencioso: **cada caso guarda `certificado_version` y `motor_version`**, y el lector **rechaza** lo que no sabe leer en vez de interpretarlo a medias. `motor_version` no es decorativa: es lo que hace regenerable la solución (§4.3).

**El esquema de caso (C2) es más flexible**, porque el contenido público se proyecta en el momento de servir: `schema_version` entera, con la misma distinción compatible/incompatible, y la etiqueta de dificultad **fuera** del versionado porque es un campo recalculable por diseño (R4 del plan de motor).

**Cómo se comprueba en CI:** un fichero de casos de oro (`engine/schema/oro/*.json`), uno por versión publicada, que **se lee con el código actual en cada commit**. Si un cambio rompe la lectura de un caso de la semana 3, CI lo dice ese día y no seis meses después, cuando alguien abra el archivo.

---

## 4. Almacenamiento de casos

### 4.1 Las tres opciones del encargo

| Criterio | JSONB en Postgres | Ficheros en el repositorio | Almacenamiento de objetos |
|---|---|---|---|
| Servir el caso del día | **Nativo, con índices** | Hay que desplegar para publicar | Otra pieza y otra latencia |
| Revisión humana con diff | Ilegible en un panel | **Es literalmente un PR** | No |
| Firma humana con rastro | Columna + fecha | **Firma de commit** | No |
| Consultas («¿qué casos exigían la pinza?») | **Trivial** | `grep` sobre 120 ficheros | No |
| Riesgo de filtrar la solución | RLS ya resuelto (`casos` sin políticas) | **Alto si el repositorio se hace público** | Depende de la configuración |
| Ficheros grandes (PDF imprimible, imágenes OG) | Mala idea | Peor idea | **Su sitio natural** |
| Reetiquetar 120 casos tras recalibrar (M-42) | **Un `UPDATE`** | 120 ficheros y un PR | Reescribir 120 objetos |

Ninguna gana en todo, y las tres tienen un trabajo que hacen mejor que las otras.

### 4.2 Recomendación: tres niveles, con la frontera puesta donde está el riesgo

```
content/casos/2026-11-03.md        ← REPOSITORIO. Lo que una persona revisa y firma:
                                     narrativa, pistas redactadas, forma formal de cada
                                     pista, semilla, versión del motor, decorados.
                                     SIN solución. SIN certificado.
        │
        │  engine publicar  (recalcula la solución y el certificado desde la semilla)
        ▼
Postgres · casos                   ← SERVICIO. contenido_publico jsonb, solucion jsonb,
                                     certificado jsonb, dificultad recalculable, estado,
                                     firma_humana, hash_contenido. RLS: sin políticas.
        │
        │  proyección explícita (§4.4)
        ▼
Almacenamiento de objetos          ← PESADO. PDF del Pack Aula, imágenes OG por caso.
```

Encaja con lo que ya está decidido: la tabla `casos` de `plan-backend.md` §3.1 con `solucion` y `certificado` en JSONB y RLS sin políticas; el flujo de siete pasos de `plan-contenido.md` §2.2 con la firma humana en medio; y `content/casos/` como ruta de entregable en CLAUDE.md.

### 4.3 La solución no se guarda en el repositorio: se deriva

Esta es la consecuencia más útil del determinismo y no está escrita en ningún documento del proyecto.

Si `(semilla, versión del motor, plan del tablero)` reproduce el caso **byte a byte** —que es la propiedad P3, obligatoria en CI—, entonces la solución y el certificado **no son datos, son una función**:

```
solución, certificado  =  engine.derivar(semilla, motor_version, board)
```

De ahí salen tres cosas gratis:

1. **El repositorio no contiene ni una solución.** Si `content/` se hace público mañana —para el Pack Aula, para un colaborador, para enseñar cómo se hace—, no hay nada que filtrar. Hoy, con la solución dentro del fichero del caso, hacer público el repositorio significa publicar la respuesta de las 17 semanas siguientes.
2. **La reconstrucción de un archivo corrupto es un comando**, no una restauración de copia de seguridad.
3. **La semilla pasa a ser un secreto de primera clase**, y ya está en la lista negra de C2 («la solución, el certificado, **la semilla**, las técnicas requeridas, el número de pasos, la dificultad numérica»). Aquí solo hago explícito **por qué**: quien tiene la semilla tiene la solución sin resolver nada.

**Contrapartida honesta:** si se cambia el motor de forma que altere la generación, los casos antiguos ya no se derivan igual. Por eso cada caso guarda `motor_version` y por eso Postgres guarda la solución **materializada**: el repositorio es la fuente de la verdad de lo que una persona revisó; Postgres es la fuente de la verdad de lo que se sirvió. Regenerar es una comprobación de integridad (`engine verificar --archivo`), no el camino de servicio.

### 4.4 Cómo se garantiza que la solución no viaja al cliente

Cinco capas. Ninguna basta sola.

| # | Capa | Dónde | Qué detiene |
|---|---|---|---|
| **1** | **Proyección explícita**, no omisión | `contratos/src/publico.ts`: una función `aPublico(caso): CasoPublico` que **construye** el objeto campo a campo | Que un campo nuevo del caso se cuele por defecto. `Omit<>` no protege: en tiempo de ejecución las propiedades de más viajan igual |
| **2** | **Esquema estricto en la frontera** | `CasoPublico` validado con `.strict()` al serializar | Claves desconocidas, aunque la proyección tenga un fallo |
| **3** | **Prueba de fuga en CI** | Serializar 1.000 casos públicos y buscar cualquier valor de la solución, del certificado o de la semilla en el texto | El fallo que las capas 1 y 2 no vean. Es la prueba que hay que escribir en M-09 |
| **4** | **RLS en Postgres** | `casos` sin ninguna política; la prueba de cuatro vías de `plan-backend.md` §3.3 | Que alguien lo pida por PostgREST, por vista, por función o por RPC |
| **5** | **Verificación en servidor** | Acusar, Comprobar, Sabueso y el menú (D-011/R3) | Que el cliente se invente que ha resuelto |

**Y el límite que hay que decir en voz alta, porque los documentos actuales lo dan por garantía.** `motor-viabilidad-jugabilidad.md` §V19 y `plan-motor.md` §7 dicen que «para el caso individual, hash con sal es suficiente». **Es suficiente para lo que sirve, que no es lo que la frase sugiere:**

- Con `|M₀| = 576` (preajuste Clásico), un cliente que tenga el hash y la sal prueba **576 candidatos** y encuentra la solución en milisegundos. Con 14.400, tampoco tarda.
- Por tanto, el hash con sal **no da confidencialidad**. Da **integridad**: el cliente puede comprobar su propia acusación sin conexión (que es lo que la PWA necesita) y no puede ser engañado sobre el veredicto.
- La confidencialidad real del veredicto la da la **capa 5**, y solo importa donde hay algo en juego: duelos, marcadores y racha. Que es exactamente donde `plan-backend.md` ya la pone.
- Y sigue en pie la honestidad que ya está escrita: **el residuo es derivable en el cliente porque eso *es* el juego**. Ocultar la solución sube el listón; no es una garantía.

Propongo que la frase «hash con sal es suficiente» se sustituya en los dos documentos por: **«hash con sal para que el cliente verifique su acusación sin conexión; verificación en servidor para todo lo que puntúa»**.

---

## 5. Arquitectura del pipeline narrativo con IA

### 5.1 El principio de diseño

Todo lo que sigue sale de una sola idea, y conviene enunciarla antes del diagrama porque explica por qué las etapas están donde están:

> **El embudo se estrecha antes de la etapa cara, no después.**

La generación determinista es prácticamente gratis (§1.2: 200.000 candidatos en dos minutos). La redacción con IA no lo es, ni en tokens ni en latencia ni en riesgo. Así que se generan **muchos** candidatos, se selecciona **uno** con criterios deterministas, y **solo ese** se redacta. La alternativa ingenua —redactar veinte y elegir el mejor texto— multiplica el coste por veinte para elegir sobre un eje (la prosa) que no es el que decide si el caso es bueno.

Y un corolario que hay que escribir en el contrato del pipeline: **el modelo nunca ve la solución** en la llamada de redacción previa a la acusación. No la necesita —redacta a partir de `clues_formal` y del tablero— y lo que no ve no lo puede filtrar. La confesión, el motivo y el «y sin embargo» sí necesitan saber quién es el culpable, y por eso son **un artefacto aparte que no se sirve hasta después de acusar**, alineado con la lista negra de C2.

### 5.2 El diagrama

```
                       ┌───────────────────────── DETERMINISTA · sin red · reproducible ─────────────────────────┐

 calendario     ┌────────────┐   plan.json   ┌──────────────┐  N candidatos  ┌──────────────┐   1 caso formal
   + semilla ──▶│ 0· PLAN    │──────────────▶│ 1· GENERAR   │───────────────▶│ 2· SELECCIÓN │──────────────┐
                │  tablero   │               │  X0 + DSL    │  por hueco     │  β banda     │              │
                │  preajuste │               │  U·NR·SA·CAP │  (20-40)       │  δ diversidad│              │
                │  mecánica  │               │  NV·NC·OR    │                │  cobertura TR│              │
                └────────────┘               └──────┬───────┘                └──────────────┘              │
                                                    │ rechazos con motivo                                  │
                                                    ▼                                                      │
                                            τ, δ, β  →  engine/bench (Compuerta 0)                          │
                       └──────────────────────────────────────────────────────────────────────────────────┐│
                                                                                                          ││
                       ┌────────────────── NO DETERMINISTA · con red · con secretos ─────────────────┐    ││
                                                                                                     │    ▼▼
   content/biblia.md        ┌────────────────────────┐                        ┌──────────────────────────────┐
   content/plantillas ─────▶│ 3· REDACCIÓN           │  texto por pista       │  clues_formal + board        │
   guía de estilo           │  prefijo estático      │◀───────────────────────│  (SIN solución)              │
   (prefijo cacheable,      │  + carga del caso      │                        └──────────────────────────────┘
    idéntico en el lote)    │  plantilla cerrada     │
                            └───────────┬────────────┘
                                        │ {clue_id, plantilla_id, texto}
                                        ▼
                            ┌────────────────────────────────────────────────────────────┐
                            │ 4· VALIDACIÓN DE IDA Y VUELTA                               │
                            │                                                            │
                            │  4a EMPAREJADOR DE GRAMÁTICA  (determinista, sin red)      │
                            │      ¿el texto es la plantilla con sus huecos rellenos?     │
                            │      SÍ → significado PROBADO por construcción ─────┐      │
                            │      NO ↓  (objetivo: <10 % de las pistas)           │      │
                            │  4b RETRADUCCIÓN  ×R independientes, prompt distinto │      │
                            │      solo gramática del DSL, sin ver la forma original      │
                            │      las R deben coincidir entre sí y con la original│      │
                            │  4c RECOMPROBACIÓN FORMAL (determinista) ◀───────────┘      │
                            │      el conjunto retraducido debe dar la MISMA solución     │
                            │      única y la MISMA huella de certificado                 │
                            │  4d LINTS (determinista): entidades, decorados, léxico,     │
                            │      presupuesto de palabras, nombre canónico, 2ª persona   │
                            └───────────┬────────────────────────────────┬───────────────┘
                                        │ verde                          │ rojo
                                        ▼                                └──▶ vuelta a 3 (máx. 2 reintentos)
                            ┌────────────────────────┐                        └──▶ descarte del candidato,
                            │ 5· CALIDAD Y SEGURIDAD │                             se toma el siguiente de 2
                            │  determinista + modelo │
                            │  cozy · tono · repetic.│
                            └───────────┬────────────┘
                       └───────────────────────────────────────────────────────────────┘
                                        ▼
                            ┌────────────────────────┐      ┌────────────────────────┐
                            │ 6· COLA HUMANA         │─────▶│ 7· INGESTIÓN Y         │
                            │  revisor-calidad · QA  │      │    PROGRAMACIÓN        │
                            │  fundador · firma a    │      │  hash_contenido        │
                            │  ciegas (D-011 R7)     │      │  → Postgres (B-17)     │
                            └────────────────────────┘      │  → calendario (B-19)   │
                                                            └────────────────────────┘
```

### 5.3 Las ocho etapas: qué hace cada una y dónde corre

| # | Etapa | Determinista | Red | Secretos | Dónde corre | Cadencia |
|---|---|---|---|---|---|---|
| **0** | Plan de tableros desde el calendario | **Sí** | no | no | GH Actions + local | Semanal |
| **1** | Generación de candidatos (X0, DSL, U·NR·SA, CAP·NV·NC) | **Sí** | no | no | **GH Actions programado** | Semanal (o local a demanda) |
| **2** | Selección (banda β, diversidad δ, cobertura de técnicas, huecos narrativos) | **Sí** | no | no | Mismo job que 1 | — |
| **3** | Redacción | no | **sí** | **sí** | **Job separado**, con el secreto y sin permiso de escritura sobre los artefactos de 1-2 | Bajo demanda del calendario |
| **4a** | Emparejador de gramática | **Sí** | no | no | Mismo job que 5 | — |
| **4b** | Retraducción ×R | no | **sí** | **sí** | Job de 3 | Solo lo que 4a rechaza |
| **4c-d** | Recomprobación formal y lints | **Sí** | no | no | Job determinista | — |
| **5** | Calidad y seguridad | mixto | parcial | parcial | — | — |
| **6** | Cola humana: QA + firma a ciegas | — | — | — | CLI + panel interno (B-18) | Continua, ~2 h/semana (R7) |
| **7** | Ingestión y programación | **Sí** | sí | sí | GH Actions → Supabase (B-17) | Al firmar |

Tres decisiones de operación que hay que dejar por escrito:

- **Separar el job determinista del job con secretos no es burocracia: es lo que hace que P3 sea comprobable.** Si el mismo job puede escribir los artefactos deterministas y llamar a una API, un fallo de la API puede cambiar el contenido de un artefacto que se supone reproducible. El job de redacción **lee** de 2 y **escribe** en un directorio distinto.
- **La cadencia de generación y la de publicación son cosas distintas y hoy se confunden.** `plan-motor.md` §7 pide «lote nocturno» y «cron de publicación diaria»; `plan-contenido.md` §2.1 pide un colchón de 2-3 semanas y firma humana de cada caso. Son compatibles si: la **generación determinista** puede ser nocturna (es gratis y llena el depósito de candidatos), la **redacción** es **semanal y por tirón** (solo lo que el calendario necesita más el colchón, porque es la etapa cara), y el **cron diario** (pg_cron, B-19) solo **sirve** casos ya firmados. Un cron diario que redacte veinte candidatos por hueco quema tokens en contenido que nadie va a firmar.
- **Todo corre también en local.** `engine generar` y `engine validar` sin red hacen las etapas 0-2 y 4a/4c/4d. Es lo que permite depurar sin gastar un token, y es lo que hace que un agente pueda iterar sobre el DSL.

### 5.4 La validación de ida y vuelta: primero la gramática, después el modelo

Esta es la aportación de arquitectura más importante de la §5, y cambia la naturaleza de la garantía.

Los dictámenes dicen, con razón, que **la retraducción por IA es una heurística fuerte, no una prueba**. Es verdad **para el texto libre**. Pero V23 ya obliga a que el núcleo del predicado se rinda desde una **lista cerrada de plantillas por predicado**, y la variación de voz ocurra en el envoltorio. Si eso se cumple, entonces:

```
plantilla T4.b :  "«{x} estaba en {y1} o en {y2}», dijo {testigo} {envoltorio}."
texto          :  "«Casilda estaba en el archivo o en la terraza», dijo Tino sin levantar la vista."
```

**El emparejador es una gramática determinista, no un modelo.** Empareja el texto contra la forma de la plantilla; si encaja, los huecos dan `{x = casilda, y1 = archivo, y2 = terraza}` y el significado formal es el declarado por la plantilla `T4.b`, **por construcción**. No hay heurística: hay un `parse`.

Consecuencias, en orden de importancia:

1. **La garantía sube de categoría para la mayoría de las pistas.** Deja de ser «tres modelos coincidieron» y pasa a ser «el texto es la plantilla». Sigue siendo cierto que el conjunto formal es lo que manda, pero ya no dependemos de una heurística para saber qué dice cada pista.
2. **La retraducción con modelo queda como red de seguridad** para lo que el emparejador rechace: una variación de voz que se salió del envoltorio, una plantilla nueva sin registrar, una elisión legítima del español que la gramática no contempla.
3. **Aparece una métrica de salud del pipeline que hoy no existe:** el **porcentaje de pistas emparejadas por gramática**. Objetivo ≥90 %. Si baja, es que las plantillas se están quedando cortas o que el prompt se está tomando libertades, y se ve antes de que cause un problema. **Propongo que sea una métrica de la Compuerta G2 de `plan-contenido.md`.**
4. **Baja el consumo de tokens** de la etapa 4 en un orden de magnitud, porque solo se retraduce el 10 %.

Y dos reglas para que el 10 % restante signifique algo:

- **El que retraduce no puede ser el que escribió.** Prompt distinto, construido **solo** con la gramática del DSL, **sin las plantillas de redacción** y **sin ver la forma formal original**. Un escritor y un lector que comparten prompt comparten el modo de fallo: coinciden entre ellos estando los dos equivocados, y la concordancia deja de ser evidencia.
- **`R` retraducciones independientes deben coincidir entre sí *y* con la original.** Si coinciden entre ellas pero difieren de la original, el fallo es del escritor. Si difieren entre ellas, la pista es ambigua para un lector competente, que es exactamente lo que queremos detectar. **Los dos casos son motivo de reescritura, y el segundo además es un aviso de que la plantilla tiene doble lectura.**

Y luego, pase lo que pase, **4c**: el conjunto retraducido se mete en el solver y tiene que dar **la misma solución única y la misma huella de certificado**. Es la comprobación que convierte todo lo anterior en algo que no depende de nadie.

### 5.5 Idempotencia y trazabilidad

Todo artefacto es **direccionable por contenido**. La clave de cada texto redactado es:

```
clave = H( caso_formal_hash ‖ prompt_id ‖ plantilla_version ‖ modelo_id ‖ parametros ‖ semilla_texto )
```

Con eso:

- **Idempotencia**: si la clave ya existe en `content/`, la etapa 3 **no llama a nada**. Reejecutar el lote entero después de un fallo de red cuesta cero tokens en lo ya hecho. Es la propiedad que hace que un pipeline con IA se pueda reintentar sin miedo.
- **Trazabilidad**: cada pista redactada guarda, en su registro, **qué prompt, qué versión de plantilla, qué modelo y con qué parámetros la produjo**. Cuando dentro de tres meses aparezca una pista con doble lectura, la pregunta «¿qué más se escribió con esa plantilla?» es una consulta, no una arqueología.
- **Invalidación explícita**: cambiar una plantilla cambia `plantilla_version` y por tanto la clave. Los textos viejos **no se regeneran solos** —ya están firmados— pero quedan marcados como «producidos con plantilla v3» y se pueden listar.
- **Reproducibilidad honesta**: con temperatura > 0 la misma clave **no** garantiza el mismo texto. Por eso la clave sirve para **no repetir la llamada**, no para reproducirla. La reproducibilidad estricta vive en las etapas 0-2, que es donde importa.

El registro por caso, que va en el esquema:

```jsonc
"procedencia": {
  "caso_formal_hash": "…",
  "motor_version": "0.4.1",
  "textos": [
    { "clue_id": "c3", "plantilla_id": "T4.b", "plantilla_version": 2,
      "prompt_id": "redaccion-expediente@7", "modelo_id": "…", "parametros": {…},
      "validacion": { "via": "gramatica" } },
    { "clue_id": "c5", "plantilla_id": "T7.a", "plantilla_version": 1,
      "prompt_id": "redaccion-expediente@7", "modelo_id": "…", "parametros": {…},
      "validacion": { "via": "retraduccion", "r": 3, "acuerdo": "3/3" } }
  ],
  "reintentos": 1,
  "firma_humana": { "persona": "…", "fecha": "…", "modo": "a_ciegas" }
}
```

`modelo_id` se registra pero **no lo elige este documento**: es el campo donde entra la decisión del director.

### 5.6 Filtros de seguridad y léxico, y puntuación de calidad

Dos bloques, y la diferencia importa: el primero **bloquea**, el segundo **ordena la cola**.

**Bloqueantes, todos deterministas** (etapa 4d). Un caso que falle uno no pasa, aunque cumpla U+SA+NR:

| Filtro | Qué comprueba | De dónde sale |
|---|---|---|
| Entidades | Toda entidad citada existe en el registro del caso; ninguna citada fuera de él | M6, `plan-motor.md` M-27 |
| Decorados | Ningún elemento del registro de decorados aparece en una pista numerada | V23, M-37 |
| Léxico | Lista negra de dobles sentidos regionales (`coger`, `concha`, `pico`, `chucho`…) | `content/biblia.md`, C-01 |
| Cozy | Vocabulario prohibido: gore, arma real de fuego, menores como víctima | Regla 5 del proyecto |
| Presupuesto de texto | ≤120/180/220 palabras según tamaño; cabecera ≤45 | `plan-contenido.md` §2.2 |
| Nombre canónico del objeto | El mismo objeto se llama igual en ficha, pista y confesión | C-10 («el abrecartas que se convierte en cuchillo») |
| Segunda persona | Prohibida dentro de una pista numerada | `plan-contenido.md` §0 |
| Iniciales | Dos sospechosos del mismo caso no comparten inicial | C-01 |

**De puntuación** (etapa 5), que **no bloquean**: producen un número que decide si el caso va a `auto-aprobado`, a `cola humana` o a `reescritura`.

| Señal | Cómo se calcula |
|---|---|
| Repetición contra los últimos K casos | n-gramas, determinista |
| Legibilidad | palabras por frase, subordinadas, determinista |
| Tono cozy (0-5) y humor del viernes | modelo, con rúbrica corta |
| Claridad de cada pista («¿admite una segunda lectura?») | modelo, y **es la señal más valiosa**: es la queja número uno del género |
| Voz del personaje | modelo |

**La regla que ata las dos listas:** una señal de modelo **nunca** puede aprobar sola; puede rechazar o puede pedir revisión humana. La decisión de publicar la toman los filtros deterministas y una persona.

### 5.7 La cola de revisión humana

El recurso escaso del proyecto es el fundador, y D-011/R7 ya fijó el presupuesto: **2 h/semana desde S4**, resolución a ciegas completa del 100 % de los casos de un formato **la primera vez** que ese formato se publica, muestra del 25 % del resto, y checklist de seis puntos sobre el certificado para los demás.

Lo que el pipeline le debe a esa regla:

1. **`engine resolver --caso N --a-ciegas`** (M-07): resolver desde la terminal sin ver solución ni certificado, con registro de tiempo, pasos y si usó Sabueso. Es la herramienta de la firma, y existe **antes** que el frontend.
2. **Ordenación de la cola por riesgo, no por fecha.** Primero lo que la máquina no puede garantizar: formato estrenado, plantilla estrenada, pistas que pasaron por retraducción y no por gramática, puntuación de claridad baja, mecánica con τ ámbar. Si el fundador solo tiene dos horas, que las gaste donde la máquina es más débil.
3. **Un caso rechazado no vuelve al principio**: vuelve a la etapa 2 y se toma el siguiente candidato del mismo hueco, que ya está generado y esperando. Rechazar cuesta minutos, no un ciclo entero.
4. **El motivo del rechazo se registra en una taxonomía cerrada** (lógica / doble lectura / tono / nombre / presupuesto / anacronismo). Sin taxonomía no se puede mejorar el prompt con datos, y con texto libre nadie los lee.

### 5.8 Presupuesto de tokens por caso

**Orden de magnitud, con método declarado.** No es una medida: no hay pipeline todavía. Sin precios, por encargo.

Supuestos: caso de Expediente de tamaño medio, 6-9 pistas, ~200 palabras de texto publicado; español (~1,4-1,6 tokens por palabra); `R = 3` retraducciones; **90 % de las pistas emparejadas por gramática** (§5.4); 1,3 reintentos de media (de la meta de C-05: ≤30 % necesitan reescritura).

| Etapa | Entrada / llamada | Salida / llamada | Llamadas por caso | Entrada total | Salida total |
|---|---|---|---|---|---|
| **3 · Redacción (pre-acusación)** | 4.000 – 6.000 · *de los cuales 3.000-5.000 son prefijo estático* | 500 – 800 | 1,3 | 5.200 – 7.800 | 650 – 1.040 |
| **3b · Paquete post-acusación** (confesión, motivo, «y sin embargo») | 1.500 – 2.500 | 250 – 400 | 1,3 | 1.950 – 3.250 | 325 – 520 |
| **4b · Retraducción** (solo el ~10 % de pistas) | 1.200 – 2.000 · *casi todo prefijo de gramática* | 80 – 150 | 0,7 × 3 = 2,1 | 2.500 – 4.200 | 170 – 315 |
| **5 · Puntuación de calidad** | 2.000 – 3.000 | 150 – 300 | 1,0 | 2.000 – 3.000 | 150 – 300 |
| **Total por caso publicado** | | | **≈5,7 llamadas** | **11.700 – 18.300** | **1.300 – 2.200** |

Y lo que de verdad decide la factura:

| Palanca | Efecto |
|---|---|
| **Prefijo estático cacheable** | La biblia, la guía de estilo y las plantillas son **idénticas para todo el lote**. Son el 70-80 % de la entrada. Con caché de prefijo, la entrada **no cacheada** baja a **~2.500-4.500 tokens por caso** |
| **Emparejador de gramática al 90 %** | Divide la etapa 4 por diez. Si cayera al 50 %, la entrada total sube ~60 % |
| **Redactar 1 candidato y no 20** (§5.1) | Es un factor 20 sobre las etapas 3-5. Es la decisión de arquitectura más cara de revertir y la más barata de tomar bien |
| **Tasa de reintento** | Es la mayor incertidumbre. Con 1,0 el total baja un 20 %; con 2,0 sube un 50 % |

**Para el lote de 120 casos** (M-32 + M-43): del orden de **1,4-2,2 M tokens de entrada** (≈0,3-0,5 M sin cachear) y **160-260 K de salida**. Es un lote pequeño, y confirma D-009 desde otro ángulo: **el coste de cómputo no es la restricción; el cuello de botella son las 2 h/semana de firma humana.**

Requisitos que el modelo debe cumplir, para que el director decida con criterio (sin elegirlo yo):

1. **Salida estructurada fiable** (JSON conforme a un esquema). Toda la etapa 3 devuelve JSON, no prosa.
2. **Caché de prefijo**, o el presupuesto de entrada se multiplica por cuatro.
3. **Español peninsular neutro competente**, incluidas la voz y las comillas latinas.
4. **Dos perfiles distintos**: uno para redactar y otro para retraducir. Pueden ser el mismo modelo con prompts distintos, pero **no el mismo prompt** (§5.4).
5. **Nada de lo anterior necesita el modelo más caro para la retraducción**: es una tarea de análisis con gramática cerrada, y es la que más llamadas hace.

### 5.9 Las seis barreras que impiden que la IA rompa la lógica

Resumen operativo, porque es la pregunta del encargo y es la promesa del producto:

| # | Barrera | Naturaleza |
|---|---|---|
| **1** | **La IA no escribe forma formal.** `clues_formal` sale del generador; el modelo rellena huecos de una plantilla cerrada | Arquitectura |
| **2** | **El modelo no ve la solución** en la redacción previa a la acusación | Arquitectura |
| **3** | **Emparejador de gramática**: el significado de ≥90 % de las pistas queda probado por construcción | **Prueba** |
| **4** | **Retraducción independiente ×R** con prompt distinto y sin ver el original, para el resto | Heurística fuerte |
| **5** | **Recomprobación formal**: el conjunto retraducido debe dar la misma solución única y la misma huella de certificado | **Prueba** |
| **6** | **Lints deterministas + firma humana a ciegas** | Prueba + persona |

Y la frase que hay que dejar de escribir en los documentos del proyecto, que ya pedí en `plan-motor.md` §8.2 y repito aquí porque este estudio es donde se decide la arquitectura que la sostiene: **«el motor valida el texto» es falso. El motor valida la forma formal y contrasta la retraducción.** Con el emparejador de gramática se puede decir algo más fuerte y sigue siendo cierto: **«el motor prueba el significado de las pistas escritas con plantilla, y contrasta el resto».**

---

## 6. Herramientas

### 6.1 Validación de esquemas: Zod como fuente, JSON Schema como artefacto

| Opción | A favor | En contra |
|---|---|---|
| **Zod** | Ya es el contrato C3 firmado por backend y frontend; inferencia de tipos; ecosistema | Bytes en el cliente (~13 KB comprimidos) |
| **Valibot** | ~2 KB comprimidos, modular | Ecosistema menor; **rompería C3, que ya está firmado** |
| **JSON Schema** | **Neutral respecto al lenguaje**; es lo que los documentos ya prometen (`engine/schema/case.v1.json`) | Escrito a mano se desincroniza de los tipos: es la fuente clásica de deriva |

**Recomendación: una fuente y un artefacto.**

- **Fuente**: Zod en `contratos/`. Un solo sitio, ya firmado en C3, tipos inferidos sin duplicar.
- **Artefacto**: JSON Schema **emitido en CI** y **commiteado** a `engine/schema/*.json` y `docs/specs/certificado.v1.json`. CI falla si el emitido difiere del commiteado (`git diff --exit-code`). Así los ficheros que los documentos prometen existen, son revisables en un PR, y **no se pueden desincronizar**.
- **Por qué el JSON Schema hace falta de verdad y no es ceremonia:** el contrato tiene consumidores que no son TypeScript y lo tendrá más (el imprimible del Pack Aula, una eventual licencia B2B a un medio, un script de análisis). Un contrato que solo existe como tipo de TypeScript no es un contrato publicable.
- **Sobre los bytes de Zod en el cliente:** el problema desaparece si se mira bien. **El cliente no necesita validar en tiempo de ejecución la respuesta de su propio servidor** —mismo dominio de confianza, mismo despliegue, mismos tipos—. La validación pertenece a **la frontera de ingestión** motor→backend (B-17) y a CI. Si aun así el frontend quiere una comprobación en cliente, se genera una copia en Valibot desde el mismo JSON Schema. **Zod no entra en el presupuesto de bytes del tablero.**

### 6.2 Tests de propiedad, y el oráculo diferencial barato

**fast-check sobre Vitest**, que es lo que el frontend ya usa. Hypothesis es mejor biblioteca (§2.6, C5) y vive en el lenguaje equivocado.

Tres reglas de uso que valen más que la elección de biblioteca:

1. **La semilla de cada ejecución se imprime y se archiva en CI.** Un fallo de propiedad sin semilla es irreproducible, y la propiedad P3 del proyecto es literalmente «misma semilla, mismo caso»: sería absurdo que las pruebas no la respetaran.
2. **Cada fallo se convierte en un caso de regresión fijo**, con su semilla, en `engine/test/regresion/`. Las propiedades encuentran; los casos fijos impiden que vuelva.
3. **El reductor (`shrinking`) es la razón de usar la biblioteca**, no el sorteo. Cuando P4 (la escalera y el residuo discrepan) falle, fallará sobre un caso de 96 casillas y 9 pistas; sin reducción a un mínimo, ese informe es inútil.

**El oráculo diferencial, que es la parte que más errores encuentra en un motor de este tipo.** El dictamen ya identifica la prueba clave (P4: el cierre de la escalera debe coincidir con el cuaderno inducido por el residuo). Añado la de abajo, que valida la capa de bits:

> **Oráculo ingenuo en el mismo TypeScript.** Un segundo solver de veinte líneas, sin bitsets ni máscaras: enumerar `M₀` en un array de objetos y filtrar con `Array.prototype.filter` aplicando `sat(pista, modelo)` directamente. Es evidentemente correcto y evidentemente lento. En CI, sobre 1.000 casos por preajuste, **el residuo por máscaras y el residuo por filtro deben coincidir modelo a modelo**.

Coste: **medio día**. Encuentra toda la familia de errores que la arquitectura de máscaras hace posibles —un desplazamiento mal puesto, la palabra de cola sin enmascarar, un `popcount` con signo— y que **ningún test de unicidad detecta**, porque un bitset con un bit de más produce un caso que sigue teniendo una solución: la equivocada. Es la mitad del valor de un segundo lenguaje por el 2 % del coste, y es lo que hace innecesario el híbrido.

Y con §2.3 comprobado, queda registrada la opción de subir un peldaño si algún día hace falta (disparador T3): un **oráculo en Rust** que tiene que dar el **mismo checksum**, no solo el mismo resultado.

### 6.3 CI

GitHub Actions, que ya es lo que usan backend (`.github/workflows/backend.yml`) y frontend (`web.yml`). `engine.yml`:

| Job | Qué hace | Falla si | Duración objetivo |
|---|---|---|---|
| `tipos` | `tsc --noEmit` en todos los paquetes | Un `any` implícito | <1 min |
| `lint` | ESLint + reglas propias: **sin `node:*` en core/dsl**, **sin coma flotante en rutas de decisión**, **sin iterar `Map`/`Set` para decidir**, dirección de dependencias | Cualquiera de las cuatro | <1 min |
| `unidad` | Vitest. **Un test por predicado**: `sat`, `mask`, `¬`, `cells`, NV | Un predicado sin sus cinco tests | <2 min |
| `propiedad` | P1-P12 de `plan-motor.md` §6.1 con presupuesto fijo de casos | Cualquier propiedad | <5 min |
| `oraculo` | Máscaras contra el solver ingenuo (§6.2) | Discrepancia de un solo modelo | <2 min |
| `esquema` | Emitir JSON Schema y `git diff --exit-code`; leer los casos de oro de todas las versiones | Deriva o rotura de compatibilidad | <1 min |
| `bench` | Serie temporal de `engine/bench` | **Regresión >20 %** frente a la mediana de las últimas 10 | <3 min |

Y **dos workflows programados**, separados a propósito (§5.3): `generar.yml` (determinista, sin secretos, nocturno) y `redactar.yml` (con el secreto, semanal, con permiso de escritura acotado).

### 6.4 Benchmarks

El benchmark **es una compuerta, no un informe**. Las series que se siguen, todas ya medidas hoy y por tanto con línea base real desde el primer commit:

| Serie | Línea base medida | Umbral de fallo |
|---|---|---|
| Banco de máscaras por tablero (Ancho, 2.000 pistas) | 480 ms | >20 % sobre la mediana de 10 |
| Álgebra por candidato (U + NR, 8 pistas) | 79 µs | ídem |
| Certificado + TR por caso (XL) | 123 µs | ídem |
| Casos válidos por minuto y preajuste | — | **<2.000** (C-B) |
| Tamaño de `motor-cliente` comprimido | 1,3 KB (5 familias) | **>10 KB** (§2.5) |
| Residuo en cliente, preajuste Ancho | 1,2 ms | >10 ms |

### 6.5 Cobertura: la métrica de líneas no sirve aquí, y hay dos que sí

Un solver con 95 % de cobertura de líneas puede tener un predicado cuya negación no se ha ejecutado nunca. Tres métricas, en orden de valor:

1. **Cobertura de predicados** (compuerta dura, 100 %): **todo predicado del DSL tiene sus cinco pruebas** —`sat`, `mask` contra el oráculo ingenuo, negación, `cells(pista, estado)`, y NV— **y ninguno se puede añadir sin ellas**. Se comprueba enumerando el catálogo contra el registro de tests, no leyendo un informe.
2. **Cobertura de técnicas** (compuerta dura, 100 %): **cada técnica de la escalera dispara en al menos un caso de CI**, y hay un caso donde es **requerida** (TR). Una técnica que nunca dispara es una técnica que no existe, y el escalafón la estaría acreditando.
3. **Cobertura de líneas** (suelo, no objetivo): ≥90 % en `core/` y `dsl/`, ≥80 % en el resto. Es un detector de código muerto, no una medida de calidad.

---

## 7. Recomendación final

| Decisión | Recomendación | Confianza |
|---|---|---|
| **Lenguaje del motor** | **TypeScript estricto**, Node 22 LTS. Un solo lenguaje | **Alta** (medida) |
| **Bitsets** | `Uint32Array` con búfer de rascar y operaciones in situ. **Nunca `BigInt`** | **Alta** (medida) |
| **Determinismo** | Las cuatro reglas D1-D4 de §2.3, con lint | **Alta** (medida) |
| **Rust / Go / Python** | No, con tres disparadores escritos (T1-T3, §2.7) | Alta |
| **Híbrido TS + Python** | No. Las medidas de tasas son generación pura; el motor emite CSV y el análisis va aparte | **Alta** (medida) |
| **Repositorio** | Monorepo, pnpm workspaces, **sin Turborepo** hasta que CI pase de 10 min | Alta |
| **`contratos/`** | Paquete de primer nivel, **no dentro de `web/`**. Corrige C3 | Alta |
| **Núcleo compartido** | `motor-core` y `motor-dsl` sin `node:*`, ≤10 KB comprimidos al navegador | Alta |
| **Esquemas** | Zod como fuente en `contratos/`; JSON Schema **emitido y commiteado**; CI falla si divergen | Alta |
| **Almacenamiento** | Tres niveles. `content/` **sin solución ni certificado**: se derivan de la semilla | Alta |
| **Hash con sal** | Es **integridad**, no confidencialidad. Corregir la frase en dos documentos | **Alta** (aritmética) |
| **Pipeline de IA** | Ocho etapas, embudo estrecho antes de la etapa cara, job determinista separado del job con secretos | Alta |
| **Ida y vuelta** | **Gramática determinista primero (≥90 %)**, retraducción ×R con prompt distinto después, recomprobación formal siempre | Alta |
| **Tokens por caso** | 12-18 K de entrada (2,5-4,5 K sin cachear) y 1,3-2,2 K de salida | **Media** (estimación) |
| **Tests** | fast-check + **oráculo ingenuo en TS** (medio día) | Alta |
| **Cobertura** | Predicados 100 %, técnicas 100 %, líneas ≥90 % como suelo | Alta |

**Coste incremental sobre `plan-motor.md`:** las decisiones de este estudio **no añaden tareas nuevas a la ruta crítica**. Reparten trabajo dentro de tareas existentes (M-01 los contratos, M-02 el andamiaje, M-05 los tests de propiedad, M-27 y M-30 el pipeline) y añaden **1,5 días**: medio día del oráculo ingenuo (§6.2), medio día del emparejador de gramática (§5.4, que se recupera con creces en tokens y en ciclos de reescritura) y medio día de la emisión de JSON Schema con sus casos de oro. Caben en la reserva de estabilización de M-48 si el resto va según lo previsto; si no, la primera que cae es la emisión de JSON Schema, no las otras dos.

---

## 8. Lo que este estudio corrige de documentos ya aprobados

Cinco. Ninguna la decido yo solo; las cinco necesitan un dueño.

### 8.1 CAP y la doble franja se contradicen dentro del mismo documento

`motor-viabilidad-expediente.md` §1.2 fija **CAP: `|M₀| ≤ 150.000`**. Y §1.3, dos páginas después, dice: *«la doble franja 6×6 son 518.400: todo el proyecto cabe bajo CAP»*. **518.400 > 150.000.** Lo escribí yo y estaba mal.

Y la medida (§1.3 de este documento) dice que el problema real no es el número de modelos, sino **dos presupuestos distintos que hoy se confunden en uno**:

```
CAP-C (cliente)   |M₀| ≤ 150.000                      → enumerar + 10 máscaras en un móvil
                                                        medido: 14.400 → 4-6 ms · 18 KB
                                                                518.400 → 160-270 ms · 633 KB
CAP-S (servidor)  |M₀| × |banco| / 8  ≤  256 MB       → memoria del banco en el lote
                                                        medido: 14.400 × 2.000 → 3,6 MB
                                                                518.400 × 2.000 → 130 MB
```

Con dos números, la doble franja 6×6 **cabe en el servidor** (130 MB, 17 s por tablero) y **no cabe en el cliente** con el presupuesto actual. Que es exactamente la verdad, y una sola cifra no la puede expresar. **Para `disenador-puzzles`** (§9).

### 8.2 `contratos/` no puede vivir dentro de `web/`

C3 de `plan-backend.md` lo pone en `web/src/contratos/`; `plan-frontend.md` dice que los tipos se generan desde `engine/`. Juntas invierten la dirección de las dependencias. **Para `desarrollador-backend` y `desarrollador-frontend`**, y hay que cerrarlo en la semana 1 porque después es un refactor en tres áreas.

### 8.3 «El solver en cliente» hay que reescribirlo, no borrarlo

D-011/R3 ya corrige la dependencia «solver en cliente» y encarga la corrección de `propuesta-jugabilidad.md` §5 a mi persona. La redacción exacta que propongo, para que no se pase de un exceso al contrario:

> El cliente ejecuta **el núcleo y el DSL** —enumera `M₀`, construye las máscaras de las pistas publicadas, calcula el residuo y resuelve `cells(pista, estado)` para tirar del hilo—. **No ejecuta la escalera, ni el motor MV, ni Sabueso, ni la verificación de la acusación**, que van al servidor. Es la misma implementación, en el mismo paquete, corriendo en dos sitios.

### 8.4 «Hash con sal es suficiente» promete confidencialidad y solo da integridad

§4.4. Afecta a `motor-viabilidad-jugabilidad.md` §V19 y a `plan-motor.md` §7. Lo corrijo yo en los dos, salvo objeción.

### 8.5 La cadencia del lote no es la cadencia de la publicación

`plan-motor.md` §7 puede leerse como que el lote nocturno alimenta la publicación. Con la firma humana obligatoria (D-011/R7) y el colchón de 2-3 semanas de `plan-contenido.md`, la lectura correcta es la de §5.3: **generación determinista nocturna (gratis), redacción semanal por tirón (cara), publicación diaria de lo ya firmado**. Lo aclaro yo en `docs/motor.md` §8.

---

## 9. Preguntas abiertas

### Para `disenador-puzzles`

**9.1 · CAP en dos presupuestos** (§8.1). ¿Se sustituye `CAP: |M₀| ≤ 150.000` por **CAP-C** (cliente, 150.000) y **CAP-S** (servidor, 256 MB de banco)? Es la formulación que hace verificable la doble franja en vez de dejarla en una contradicción. **Confirmar antes de M-01**, porque CAP es un invariante del validador.

**9.2 · El techo del cliente.** Si la doble franja 6×6 llegara a construirse (M-56), su residuo en cliente son 160-270 ms y 633 KB en un móvil medio. ¿Se acepta ese coste, se reduce el preajuste a 5×5 (14.400, trivial), o esa mecánica renuncia a «tirar del hilo» en el cliente y lo pide al servidor? **No urge** —M-56 es fase 2 condicionada—, pero conviene que la respuesta esté escrita antes de que alguien prometa el subrayado instantáneo.

### Para `desarrollador-backend` y `desarrollador-frontend`

**9.3 · `contratos/` de primer nivel** (§8.2). Necesito conformidad de los dos en la **semana 1**. El resto de C3 no cambia.

**9.4 · El presupuesto de bytes del motor en el cliente.** Me comprometo a ≤10 KB comprimidos con prueba en CI (§2.5). ¿Le sirve a `desarrollador-frontend` ese número dentro de su presupuesto de 110 KB, o lo quiere más bajo? Prefiero saberlo antes de escribir el DSL que después.

### Para `director-producto`

**9.5 · Modelo de IA y caché de prefijo.** No elijo modelo. Sí digo que **la caché de prefijo cambia el consumo de entrada por un factor de cuatro** (§5.8) y que hacen falta **dos perfiles** (redactor y retraductor), que pueden ser el mismo modelo con prompts distintos pero nunca el mismo prompt. Si el modelo elegido no tiene caché de prefijo, el presupuesto de §5.8 se multiplica y hay que decirlo antes.

**9.6 · La métrica del 90 % de emparejamiento por gramática** (§5.4). Propongo que entre en la Compuerta **G2** de `plan-contenido.md` como umbral, no como aspiración. Es la métrica que separa «probamos el significado de las pistas» de «lo contrastamos con una heurística», y es la frase que se puede decir en público. **Cerrar con `guionista-misterio`**, que es quien escribe las plantillas.

**9.7 · El día de la decisión de SvelteKit.** El estudio hermano (`docs/stack/frontend.md`) recomienda cambiar de framework con una compuerta de reversión en S1. **Nada de este documento depende de esa decisión** —`motor-core` y `motor-dsl` son TypeScript sin framework y `contratos/` es zod—, y lo digo explícitamente para que el cambio de framework no se retrase por miedo a arrastrar al motor. No lo arrastra.

### Para `guionista-misterio`

**9.8 · Las plantillas tienen que ser emparejables por gramática**, no solo legibles. Es un requisito nuevo que sale de §5.4: cada plantilla se declara con sus huecos marcados y su envoltorio delimitado, de forma que un `parse` determinista pueda separar el núcleo del predicado de la voz del personaje. Cambia poco cómo se escriben y cambia mucho lo que se puede prometer. **Lo necesito antes de C-04** (12 de octubre) y lo especifico yo en `docs/motor.md` §4 en cuanto se confirme.

---

## 10. Lo que este estudio no promete

1. **Que el motor completo sea 2,1× más lento que en Rust.** Lo medido es **el núcleo**, que es la parte cuyo coste depende del lenguaje. La escalera real, con su catálogo de catorce técnicas, no existe todavía; su dimensionado de §1.1 es sintético y estructuralmente fiel, no una medida del código final.
2. **Las tasas de aceptación.** Siguen sin saberse (τ de MV, MV-E, CC, CT, AM, PU2). Este estudio dice cuánto cuesta **medirlas**, no cuánto van a salir.
3. **El presupuesto de tokens de §5.8.** Es una estimación con método declarado. La mayor incertidumbre es la tasa de reintento, y hasta que corra un lote real de 20 casos, es un orden de magnitud y no un presupuesto.
4. **Que el emparejador de gramática alcance el 90 %.** Es el objetivo de diseño y la métrica que propongo vigilar. Si las plantillas resultan más flexibles de lo previsto, bajará, y entonces la etapa 4 cuesta más y la garantía es más débil. **Se sabrá en el primer lote piloto (C-08), no antes.**
5. **Que la retraducción sea una prueba.** Con emparejador de gramática, el significado de las pistas que encajan **sí** queda probado. Del resto seguimos diciendo lo mismo que en los dos dictámenes: **heurística fuerte con mitigaciones, no demostración.**
6. **Que un cambio de framework en `web/` no toque nada.** Toca `web/`. Lo que este estudio garantiza es que **no toca el motor**, porque la frontera está en `contratos/` y en dos paquetes sin dependencias de framework.

---

*Cambios a este documento: los registra `ingeniero-motor-puzzles`. Las decisiones de §9.1-9.2 las cierra `disenador-puzzles`; la de §9.3-9.4, `desarrollador-backend` y `desarrollador-frontend`; las de §9.5-9.7, `director-producto` en `docs/decisiones.md`; la de §9.8, `guionista-misterio`.*
