# Dictamen técnico de viabilidad: modo Expediente

Autor: `ingeniero-motor-puzzles`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Encargo: dictamen de viabilidad de motor para `docs/diseno/ideas-expediente-disenador.md` (12 mecánicas E-1 a E-12, 9 familias de pista, 14 técnicas, 8 propiedades nuevas), `content/ideas-expediente-guionista.md` (10 ideas narrativas, reparto recurrente) y `docs/ideas-expediente-producto.md` (arquitectura B, certificado agnóstico del modo).
Dictamen hermano: `docs/motor-viabilidad-jugabilidad.md` (Escena, 24 familias). Este documento **no lo repite**: da por buenas sus piezas M0-M12 y sus propiedades U, SA, NR, OD, OR, MV, ML, EN, TR, CN, PU, AM, y solo escribe lo que cambia.
Estado del código: **cero**. `engine/` sigue sin existir. Todo lo que sigue son estimaciones sobre un motor por construir, no medidas.

**Aviso de marca (D-006).** Revisados los cinco disparadores sobre este material: **ninguno se cumple hoy**. Pero hay que decir una cosa que no estaba en el dictamen de Escena: la **Decisión 3 de `director-producto`** (§6.2 de su documento) pone `B2B-MARCABLANCA` con Expediente por delante como línea comercial principal, y la primera conversación con un medio o una editorial **es** un disparador. Recomendación operativa: tener el expediente de la OEPM (clases 9 y 41) **preparado y aprobado presupuestariamente antes** de que esa conversación se abra, porque el disparador no avisa con antelación. No es una alerta activa; es evitar que lo sea.

---

## 0. Cómo leer este documento

### 0.1 Lo que ha cambiado desde el dictamen de Escena

El dictamen de Escena dedicaba a Expediente **catorce líneas** (V24), y decían esto: «con 4 categorías de 6 elementos hay `6!³ = 373.248.000` asignaciones: prohibido enumerar, obligatorio propagar». **Esa frase ya no es válida y es una buena noticia.** El techo `n ≤ 5` que fija `disenador-puzzles` en su §1.1 cambia el orden de magnitud del problema por un factor de 26.000 y, con él, cambia la arquitectura correcta del motor: bajo ese techo **no solo se puede enumerar, sino que enumerar es la decisión de ingeniería correcta**, y hace baratas trece propiedades que de otro modo serían trece módulos. La §1 lo desarrolla y lo cuantifica.

El techo del diseñador es, en términos de motor, la decisión de diseño más valiosa de los tres documentos. Lo digo antes que nada porque conviene que quede registrado que **el que lo propuso lo hizo por legibilidad en 360 píxeles y por duración, no por el motor**, y aun así acertó de pleno.

### 0.2 Unidad de coste

**Día de agente**, como en el dictamen de Escena: una sesión enfocada que produce código con tests verdes y documentación mínima. Los costes son **incrementales sobre la plataforma de Escena** (M0-M12, 19-20 días) y sobre las piezas que este documento reorganiza. Sumarlos sin la plataforma da un número falso.

### 0.3 Las propiedades formales, ordenadas

Las tres del proyecto (**U** unicidad, **SA** sin adivinar, **NR** no redundancia) y las seis que introduje en Escena (**OR**, **MV**, **ML**, **EN**, **TR**, **CN**) rigen igual aquí. `disenador-puzzles` añade ocho propias de Expediente: **CC**, **CT**, **OP/INJ**, **MT**, **DV**, **RR**, **ORD**, **CNT**, más **MV-E**, **NR-C** y **OD-E** como adaptaciones. Las he revisado una a una; el resultado está en §4.

Y **cuatro que propongo yo**, porque sin ellas hay mecánicas de la lista que no se pueden verificar o que se publican rotas:

| Sigla | Nombre | Qué exige | Para qué |
|---|---|---|---|
| **CAP** | Techo de modelos | `\|M₀\| ≤ 150.000` comprobado por el generador **antes** de enumerar, donde `M₀` es el espacio de asignaciones del tablero sin pistas. Sustituye a la regla «`n ≤ 5` y bloques ≤ 3/≤ 6», que no cubre E-3 ni E-4 | Transversal. §1.3 |
| **NV** | No vacuidad universal | Ninguna pista publicada cumple `mask(c) ⊇ M₀` (idénticamente verdadera) ni `mask(c) ∩ M₀ = ∅` (idénticamente falsa). Es una comprobación de dos `popcount`, no una lista negra | Transversal. **Es la que impide repetir el error de `ve(A,B)` y el de E-12.** §2.4 |
| **NR-M** | No filtración por memoria | El conocimiento canon acumulado de un jugador veterano no cambia su distribución de probabilidad sobre la solución antes de leer las pistas | Reparto recurrente. §5 |
| **NC** | No chivatazo | Ninguna pista publicada entraña por sí sola la identidad del culpable | Transversal. §2.4 |

**NV es la más importante de las cuatro** y es, en una línea, la lección de este dictamen: la auditoría de degeneración que pide el diseñador no debe ser una lista de predicados prohibidos que hay que recordar, sino **un invariante que el generador comprueba en todas las pistas de todos los casos, siempre**. La lista negra sigue siendo útil como documentación y como sistema de tipos del DSL, pero la garantía la da el invariante.

---

## 1. Modelado base

### 1.1 Variables y dominios: la corrección de «biyección por bloque»

El encargo dice «representación como asignación biyectiva por bloque». **Hay que corregirlo, y la corrección es la diferencia entre un motor que funciona y uno que no.**

El cuaderno de Expediente tiene `C(K,2)` bloques con `K` categorías (3 bloques con 3 categorías, 6 con 4). Pero **los bloques no son variables independientes**: solo `K−1` de ellos lo son. Con `sospechoso` como ancla:

```
Ancla        S,  |S| = n
Categorías   A = {c₁ … c_{K−1}},  cada E_c con |E_c| = n
Variables    asig_c : S → E_c,  biyectiva,  una por c ∈ A          ← K−1 biyecciones
Derivado     junto(y, z) con y ∈ E_{c_i}, z ∈ E_{c_j}, i ≠ j:
             ⟺ ∃s : asig_{c_i}(s) = y  ∧  asig_{c_j}(s) = z
Culpable     asig_lugar⁻¹(R)
```

Con 4 categorías hay **6 bloques y 3 biyecciones**. Si se modelan los seis bloques como seis biyecciones independientes, el espacio de tuplas candidatas es `(4!)⁶ = 1,9 × 10⁸`, que luego hay que filtrar con restricciones ternarias de transitividad hasta `(4!)³ = 13.824`. Es un desperdicio de factor 13.800 y, peor, las restricciones ternarias propagan mal. Modelando por categoría no ancla y derivando el resto, el espacio **es** el espacio de soluciones desde el primer momento.

**Consecuencia que hay que escribir en el contrato:** el motor tiene **dos representaciones** del mismo objeto y las dos son necesarias.

| Representación | Qué es | Quién la usa |
|---|---|---|
| **Tupla de permutaciones** `(π₁ … π_{K−1})` | Un modelo. `\|M₀\| = (n!)^{K−1}` | Solver completo, generador, todas las propiedades, conteo, entrañamiento |
| **Cuaderno booleano** `C(K,2)` bloques × `n²` celdas en `{vacío, ✓, ✗}` | Un **estado de conocimiento**, no un modelo | Escalera humana (M3), `cells(pista, estado)`, interfaz, Sabueso, contraprueba |

Y un **test de propiedad obligatorio** entre las dos: para todo caso generado, el cierre del cuaderno bajo las técnicas de la escalera debe ser exactamente el cuaderno inducido por el residuo de modelos. Si divergen, o la escalera tiene un fallo o el DSL tiene un predicado mal implementado. Es el test que en un motor de cuadrícula lógica encuentra el 90 % de los errores.

### 1.2 Verificación del número: los 14.400 son correctos, la regla que los produce no

El diseñador afirma que bajo su techo «el peor caso es `(5!)² = 14.400` modelos (Ancho) y `(4!)³ = 13.824` (XL)». **Verificado: las dos cifras son exactas** y `\|M₀\| = (n!)^{K−1}` es la fórmula.

| Preajuste | `n` | `K` | `\|M₀\| = (n!)^{K−1}` | Bloques | Casillas |
|---|---|---|---|---|---|
| Vistazo | 3 | 3 | **36** | 3 | 27 |
| Corto / Clásico | 4 | 3 | **576** | 3 | 48 |
| Ancho (sábado) | 5 | 3 | **14.400** | 3 | 75 |
| XL (domingo) | 4 | 4 | **13.824** | 6 | 96 |
| *Prohibido:* n=5, K=4 | 5 | 4 | 1.728.000 | 6 | 150 |
| *Prohibido:* n=6, K=4 | 6 | 4 | 373.248.000 | 6 | 216 |

**Pero la regla que el diseñador escribe («`n ≤ 5` y bloques ≤ 3 cuando `n = 5`; bloques ≤ 6 cuando `n = 4`») no cubre tres de sus propias mecánicas**, porque dos de ellas cambian el espacio sin cambiar `n` ni el número de bloques:

| Mecánica | Qué le hace a `M₀` | n=4, K=3 | n=5, K=3 | n=4, K=4 |
|---|---|---|---|---|
| — (base) | `(n!)^{K−1}` | 576 | 14.400 | 13.824 |
| **E-4** objeto perdido | una biyección pasa a inyección `S → E` con `\|E\| = n+1`: `×(n+1)!/n!` … en total `(n+1)!` en vez de `n!` | 2.880 | **86.400** | 69.120 |
| **E-3** cadena de custodia | añade `obj_antes` y la transposición: `× C(n,2)` | 3.456 | **144.000** | 82.944 |
| **E-8** doble víctima | nada: `culpable₂ = asig_objeto⁻¹(llave)` es derivado | 576 | 14.400 | 13.824 |

El diseñador salva las dos casillas peligrosas **por otra vía** —dice «E-3 siempre `n = 4`, nunca 5» y coloca E-4 en el viernes, que es `n = 4`—, así que ningún caso publicable se le escapa. Pero esas dos frases viven en la prosa de su documento, no en la regla verificable, y el generador no lee prosa.

**Propuesta: sustituir la regla por CAP, un solo número comprobado antes de enumerar.**

```
CAP    |M₀| ≤ 150.000, calculado a partir de board (n, categorías, extra, mecánica)
       antes de generar nada. Si no se cumple, el preajuste se rechaza.
```

CAP rechaza `n=5 × K=4` (1,7 M), rechaza cualquier cosa con 6 elementos, admite los cuatro preajustes, admite E-4 en todas sus casillas y admite E-3 en las suyas (144.000 entra por poco, y el diseñador ya lo prohíbe por duración). **Una regla en vez de tres, expresada en la magnitud que de verdad restringe al motor, y a prueba de mecánicas futuras.**

### 1.3 Propagación frente a enumeración: la conclusión invierte la de V24

Con `|M₀| ≤ 150.000` la respuesta correcta es **enumerar**, y no como último recurso sino como arquitectura.

```
1. Enumerar M₀ una vez por tablero            → array de ≤150.000 tuplas
2. Para cada pista candidata c del banco:
   mask(c) = bitset de |M₀| bits, bit i = 1 ⟺ el modelo i satisface c
3. Todo lo demás es álgebra de máscaras:
   residuo(S)        = AND de mask(c) para c ∈ S            (bitwise)
   |modelos(S)|      = popcount(residuo(S))
   U                 = popcount == 1
   NR                = ∀c ∈ S: popcount(residuo(S \ {c})) ≥ 2
   entrañamiento M12 = popcount(residuo(S) AND NOT mask(f)) == 0
   soporte mínimo    = enumeración de subconjuntos con la misma primitiva
   NV                = 0 < popcount(mask(c) AND mask(M₀)) < |M₀|
```

Tamaños reales: 14.400 bits = **1,8 KB por máscara**; 150.000 bits = 18,3 KB. Un banco de 2.000 pistas candidatas sobre el preajuste Ancho ocupa **3,6 MB** y se construye con 28,8 millones de evaluaciones de predicado, que en TypeScript son unos pocos segundos por tablero. A partir de ahí **todas las propiedades del documento del diseñador cuestan microsegundos**.

Cuatro consecuencias, y la tercera es la que más trabajo ahorra:

1. **Coste de generación.** Lo caro es construir el banco de máscaras una vez por **tablero**, no por candidato. Un lote de 10.000 candidatos sobre ~200 tableros distintos son ~200 construcciones de banco: del orden de diez minutos, no de horas. Con D-009 (el cómputo no es la restricción) esto deja de ser un tema.
2. **Vale también para Escena.** Escena 4×4 son 24 modelos, 6×6 son 720, y la doble franja 6×6 son 518.400: **todo el proyecto cabe bajo CAP.** La misma primitiva sirve a los dos modos.
3. **M0, M7 y M12 dejan de ser tres piezas.** En el dictamen de Escena presupuesté solver de conteo (2 días) + harness de subconjuntos (1) + comprobador de entrañamiento (0,5) = 3,5 días en tres módulos. Con la arquitectura de máscaras son **un solo módulo de 2 días** que además entrega gratis PU, CP, MT, DV, CC, EN y el residuo de MV-E. **Es la pieza con mejor relación de todo el proyecto y hay que escribirla primero.**
4. **Lo que la enumeración no da es la escalera.** El residuo dice *cuántas* soluciones quedan; no dice *si un humano puede llegar sin adivinar*. SA sigue exigiendo M3, un segundo solver que trabaja sobre el cuaderno booleano y solo aplica las 14 técnicas. La propagación no desaparece: cambia de sitio. Deja de ser la herramienta del solver completo y pasa a ser **la definición de la dificultad**.

### 1.4 Qué implica para el residuo en cliente, MV-E y Sabueso

Las tres preguntas del encargo, con números.

**Residuo en cliente.** El cliente **no recibe** el residuo: lo recalcula. Recibe `board` (que ya necesita para dibujar) y las pistas en forma formal (que ya necesita para «tirar del hilo»), enumera `M₀` y aplica las máscaras. Enumerar 14.400 tuplas de dos permutaciones de 5 elementos en TypeScript es **del orden de 1 ms** en un móvil de gama media; construir 10 máscaras sobre ellas, unos 15 ms. Memoria: 1,8 KB por pista, 18 KB el caso entero. **No es un riesgo por ningún lado.** Y hay que decir lo que ya dije en V19: el residuo derivable en cliente *es* el juego; ocultarlo no es una garantía, solo un listón. La solución en claro no viaja, y para el caso individual basta con hash con sal.

**MV-E (el vis a vis, E-7).** El diseñador dice que el residuo «≤14.400 cabe holgadamente en el cliente». Cierto, pero el número relevante es mucho menor: **E-7 es siempre `n = 4, K = 3`, luego `|M₀| = 576`**, y después de las pistas de apertura el residuo son decenas. El árbol de preguntas se calcula en el cliente en milisegundos, sin ida y vuelta al servidor, lo que hace la mecánica jugable sin conexión en la PWA. **Pero MV-E tal como está escrita tiene un fallo de cuantificación que la hace no verificable y, además, un límite duro que nadie ha calculado.** Está en §4, E-7, y es el hallazgo principal de este dictamen.

**Sabueso.** Nivel 1 (la pista sin exprimir) sale de comparar `cells(pista, estado)` con el cuaderno del jugador: coste nulo. Nivel 2 (el bloque y la fila donde ya se puede cerrar algo) sale del certificado, con la misma política que fijé en V11: **ejecutar la escalera desde el estado inicial** y avanzar hasta el último peldaño cuyas conclusiones sean compatibles con el cuaderno del jugador, para no dar nunca señal de error. En Expediente hay un caso nuevo que en Escena no existe y que hay que especificar: **con E-5 (la tabla del comisario), el jugador que no rechaza la marca falsa tiene un cuaderno inconsistente con los `givens`, no con las pistas.** MT5 ya dice qué hacer (señalar el bloque de la contradicción, nunca la casilla) pero hay que implementarlo como un modo distinto de Sabueso, no como el caso general. Coste: 0,25 días extra sobre V11.

---

## 2. El DSL de pistas de Expediente

### 2.1 Las nueve familias, con semántica exacta

Sobre el modelado de §1.1. `x`, `y`, `z` son entidades; `s` recorre `S`; `c` recorre las categorías. Todos los predicados son serializables en JSON, todos tienen negación definida, todos implementan `cells(pista, estado)` y todos llevan test unitario.

| # | Familia | Forma formal exacta | Negación | `cells()` devuelve | Nivel |
|---|---|---|---|---|---|
| **T1** | Directa | `junto(x, y)`, `x ∈ E_{c_i}`, `y ∈ E_{c_j}`, `i ≠ j`. Si `c_i` o `c_j` es el ancla: `asig_{c_j}(x) = y`. Si ninguna lo es: `∃s: asig_{c_i}(s)=x ∧ asig_{c_j}(s)=y` | `¬junto(x,y)` = T2 | la celda `(x,y)` y, tras aplicarla, su fila y columna en ese bloque | N1 |
| **T2** | Negativa | `¬junto(x, y)` | T1 | la celda `(x,y)` | N1 |
| **T3** | Negativa compuesta | `⋀_{k} ¬junto(x_k, y)`, `x_k` todos de la **misma** categoría, `k ≤ 3` | no se niega (**prohibida**) | `k` celdas de un bloque | N1 |
| **T4** | Disyuntiva interna | `⋁_k junto(x, y_k)`, `y_k` todos de la **misma** categoría, `k ∈ {2,3}` y `k < n` | «ni… ni…» = T3 | `k` celdas de una fila | N2 |
| **T5** | Relacional entre categorías | `∀s: P_i(asig_{c_i}(s)) → P_j(asig_{c_j}(s))`, con `P_i`, `P_j` predicados de atributo **impresos**. Caso más común: `P_i` singular (un solo portador) | intercambiar `P_j` por `¬P_j` | las celdas del bloque `c_i × c_j` que cruzan `P_i` con `¬P_j` | N2-N3 |
| **T6** | De atributo | `∀s: P(s) → ¬junto(s, y)` y variantes; `P` atributo impreso del ancla | forma afirmativa | una columna parcial: `\|{s : P(s)}\|` celdas | N1-N2 |
| **T7** | Ordinal | sobre `ord_c : E_c → {1…n}` **declarado en `board.order`**: `ord(asig_c(A)) < ord(asig_c(B))`; `entre(A,B,C)` estricto; `justo_antes(A,B)` = `ord(asig(B)) = ord(asig(A)) + 1` | orden total estricto ⟹ `¬(a<b)` es `b<a` | el **intervalo** de la tira, no la celda | N2-N3 |
| **T8** | De recuento | `\|{s : Q(s)}\| = k` **exacto**, con `Q` conjunción de **≥2** propiedades independientes (§2.4) | `≠ k`: prohibida | las celdas de la partición en los bloques implicados | N2-N3 |
| **T9** | Condicional | `junto(x,y) → junto(z,w)` | no se niega (**prohibida**) | las celdas de antecedente y consecuente, atenuadas | N3 |

Cuatro decisiones de semántica que el documento del diseñador deja implícitas y que cierro aquí, sujetas a su confirmación (§10):

- **T1 y T4 son simétricas en sus dos argumentos.** «El rodillo estaba en el invernadero o en la cocina» y «el archivo lo ocupaba Casilda o Nicanor» son la misma familia con los papeles cambiados. La forma canónica de T4 debe leerse «un término fijo, disyunción sobre valores de una sola categoría», sin importar cuál de los dos términos es el ancla.
- **T3 exige `k < n`.** Con `k = n` es idénticamente falsa (alguien está en `y`); con `k = n−1` degenera en T1 y hay que publicarla como T1.
- **T4 exige `k < n`.** Con `k = n` es idénticamente verdadera.
- **T9 no se niega y no se anida.** Un condicional negado es una conjunción con una negación dentro, que rompe la regla de «una negación por pista» del §1.6 del diseñador.

### 2.2 Cómo se declaran los ordinales

Las familias T7 y las técnicas 10 (tenaza ordinal) y 12 (puente de tiempo) exigen un orden. La pregunta del encargo es cómo se declara. Propuesta:

```jsonc
"board": {
  "order": {
    "lugar":      { "origen": "la entrada", "secuencia": ["zaguan","lectura","galeria","jardin"],
                    "topologia": "linea" },
    "sospechoso": { "origen": "de más alta a más bajo", "atributo": "altura_rank",
                    "secuencia": ["olimpia","amaranta","bruno","filomena"] }
  }
}
```

Cinco reglas, cuatro del diseñador (ORD1-ORD4) y una mía:

1. **El orden es total y estricto, sin empates.** Un empate en un ordinal es, para el jugador, una pista contradictoria (P1). El validador lo comprueba sobre `secuencia` (longitud `n`, sin repetidos).
2. **El origen se rotula siempre**, también en el imprimible y en el texto alternativo. Es la queja P4 traducida.
3. **Como mucho una pista por caso cruza dos órdenes distintos** (ORD3), y nunca antes del miércoles.
4. **`cells()` de una T7 devuelve el intervalo**, no la celda: el hilo pinta un tramo de la tira.
5. **Mía: un orden declarado sobre una categoría convierte automáticamente en pistas prohibidas los enunciados sobre el propio orden.** «El jardín está más lejos de la entrada que la galería» es un hecho de `board.order`, impreso, y como pista es idénticamente verdadera. Y es, literalmente, **la forma canónica que el diseñador escribe en la fila T7 de su taxonomía**. Hay que cambiarla: la forma canónica de T7 tiene que hablar de **dónde estaba alguien**, no de dónde está un lugar. Redacción canónica propuesta: «*Amaranta estaba más lejos de la entrada que Olimpia*», nunca «*la galería está más lejos de la entrada que el zaguán*».

Sobre `topologia`: `"linea"` cubre el pasillo de E-9 y **también los vagones de un tren de 1923** (guionista 4.7). Ver §4.15.

### 2.3 Auditoría de degeneración: qué predicados están prohibidos

La lección de `ve(A,B)` en Escena, aplicada. Bajo biyección hay formas que son idénticamente verdaderas, idénticamente falsas o vacías, y **el DSL no debe permitir siquiera construirlas**.

**Idénticamente falsas** (el modelo nunca las satisface):

| Forma | Por qué |
|---|---|
| `asig_c(A) = asig_c(B)` con `A ≠ B`, `c` biyectiva («¿quién estaba contigo?», `mismo_lugar`, `mismo_objeto`) | Una persona por lugar |
| `junto(A, y) ∧ junto(A, z)` con `y ≠ z` de la misma categoría | Una cosa por persona |
| `T3` con `k = n` | Alguien está en `y` |

**Idénticamente verdaderas** (no restringen nada):

| Forma | Por qué |
|---|---|
| `asig_c(A) ≠ asig_c(B)` con `A ≠ B` (`distinto_lugar`, `distinto_objeto`, «¿estabas solo?») | Biyección |
| `∃s : junto(s, y)` para cualquier `y` | Todo valor tiene dueño, salvo bajo E-4 |
| `junto(culpable, R)` | Es la definición de culpable |
| `ord(y₁) < ord(y₂)` entre **constantes** | Es tablero, está impreso |
| `atributo(entidad_nombrada, valor)` | Es ficha, está impresa |
| `T4` con `k = n` | Alguna opción es cierta |
| **`cuenta({s : P(asig_c(s))}, k)` con `k = \|{y ∈ E_c : P(y)}\|`** | **Ver abajo. Es la trampa que el diseñador no ha visto** |

**Vacías o degeneradas a otra familia:**

| Forma | Qué pasa |
|---|---|
| `T6` con cero portadores del atributo | Vacía |
| `T6` con exactamente un portador | Es una T1 disfrazada. Legítima, pero el certificado la etiqueta **N1** (regla 5 del §1.4 del diseñador; la suscribo) |
| `T5` cuyo `P_j` cubre 0 o `n` valores de su categoría | Idénticamente falsa o verdadera |
| `T9` con antecedente ya refutado por el resto | Elimina modelos, pero el jugador siente que le han robado una pista |
| `T4` con una rama ya descartada por otra pista | Degenera en T1 |
| `RR` (E-11) con la conjunción de atributos identificando a una persona | Es una T1 con coste de lectura. Legítima, pero **no aporta profundidad**: el certificado debe etiquetarla `N1+lectura`, no N2 |

**Y la que hay que mirar de frente: el recuento de E-12 es idénticamente verdadero tal como está escrito.**

El ejemplo estrella de E-12 dice: los lugares del balneario son zaguán y sala de lectura (abajo), galería y mirador (arriba); la pista es «**Exactamente dos de ellos estaban en la planta alta**». Bajo biyección, cada sospechoso ocupa exactamente un lugar y cada lugar exactamente un sospechoso, luego **el número de sospechosos arriba es exactamente el número de lugares arriba: dos, siempre, en todos los modelos**. La pista no elimina ni un modelo. Toda la deducción del ejemplo la hace la segunda pista («ninguna de las dos más altas subió»), y la primera es decoración con número.

Y no es un desliz del ejemplo: **es general**. Contar sospechosos por una propiedad de su lugar, o por una propiedad de su objeto, es contar la propiedad en la categoría de destino, que está impresa en el tablero. Lo mismo vale para «solo uno llevaba algo de metal» si hay exactamente un objeto de metal. La condición CNT3 del diseñador («la partición tiene al menos dos elementos por lado») no lo arregla: evita que el recuento sea una pista directa disfrazada, pero no evita que sea **nada**.

**La reparación es limpia y conserva la mecánica entera.** Un recuento es informativo cuando cuenta la **intersección de dos propiedades que no están en biyección entre sí**:

```
CNT5 (nueva)  cuenta(Q, k) solo se publica si Q es conjunción de ≥2 propiedades
              alcanzadas por vías distintas, es decir al menos dos de:
                (a) atributo impreso del ANCLA               P(s)          — fijo
                (b) atributo del valor de asig_{c_i}(s)                    — variable
                (c) atributo del valor de asig_{c_j}(s), j ≠ i             — variable
              Excepción: con E-4 (categoría inyectiva) el recuento sobre esa
              sola categoría SÍ es informativo, porque un valor se queda fuera.
CNT6 (nueva)  el rango alcanzable de k debe tener ≥2 valores:
              max(0, z+g−n) ≤ k ≤ min(z, g)  con z=|{s: P(s)}|, g=|{y: P'(y)}|.
              Si el rango es un solo valor, la pista es idénticamente verdadera.
```

Con CNT5, la pista buena de E-12 es «**Exactamente dos de los que estaban arriba llevaban algo de metal**» o «**Exactamente dos zurdos subieron**». Las dos son informativas, las dos producen la técnica 9 («el reparto», recuento + palomar) que el diseñador quiere, y las dos siguen siendo la emoción del casillero que él describe. **La mecánica sobrevive intacta; lo que cambia es la forma canónica de la pista.** Es exactamente el mismo tipo de corrección que `ve(A,B)` en Escena, y por eso propongo NV.

### 2.4 NV y NC: la guarda que hace innecesaria la vigilancia

La lista de arriba es larga y no está completa: no puede estarlo, porque las mecánicas futuras traerán formas nuevas. Con la arquitectura de máscaras de §1.3 hay una guarda universal que las captura todas, incluidas las que no hemos pensado:

```
NV  Para toda pista candidata c y todo tablero:  0 < popcount(mask(c)) < |M₀|
```

Dos `popcount`. Se ejecuta al construir el banco, antes de que el greedy elija nada. Habría bastado para detectar `ve(A,B)` en Escena y el recuento de E-12 en Expediente, **el mismo día en que se escribieron**, sin que nadie tuviera que darse cuenta. La lista negra sigue valiendo como documentación del DSL y como sistema de tipos (que `mismo_lugar(A,B)` ni siquiera se pueda escribir es mejor que descubrir que sale falso), pero la garantía la da NV.

NV no captura la vacuidad **contextual** (una pista implicada por las demás). De eso se encarga NR, que ya está. Y hay un lema pequeño que conviene registrar porque cierra el asunto del condicional vacío:

> **NR + SA ⟹ toda pista publicada aparece citada en el certificado.** Si quitar `c` deja ≥2 modelos, la escalera no puede cerrar el caso sin `c`, luego algún peldaño la cita.

Queda una comprobación más, para el condicional: no basta con que T9 se cite, hay que exigir **cómo** se cita. La regla del diseñador («T9 solo se publica si el certificado la usa en contrapositivo o con el antecedente ya probado») es correcta y se implementa como una etiqueta de técnica: el peldaño que cita una T9 debe ser `modus_ponens` o `contrapositivo`, nunca `eliminacion_de_modelos`.

Y la última, que no está en ningún documento:

```
NC  Ninguna pista publicada c cumple, por sí sola:  mask(c) ∩ M₀ ⊆ {modelos con culpable = s*}
```

Sin NC, el generador puede publicar «Casilda no salió del archivo» en un caso cuya víctima apareció en el archivo, y el caso se acaba en la pista 1. NR no lo impide (esa pista es perfectamente necesaria para el resto del cuaderno) y U tampoco. Coste: un `popcount` por pista.

---

## 3. Tabla resumen

Coste **incremental** sobre la plataforma de Escena y sobre las piezas de §8. «Tasa esperada» es mi prior, no una medida; las cuatro de la Compuerta 0 se miden antes de construir (§7).

| # | Mecánica | Formalizable | Propiedad a verificar | Cómo se genera | Tasa esperada | Días | Depende de | Riesgo dominante |
|---|---|---|---|---|---|---|---|---|
| **E-1** | Coartada cruzada | **Sí** | CC1-CC4; CC4 es la que importa | **Construida**: se planta `pareja(A,B;P1,P2)` con `P2 = R` y se genera el resto alrededor | Media-alta, **10-30 %** | 1,5 | X0, M3 (rama N4) | CC3 (la rama falsa muere en ≤3 pasos) es el filtro real |
| **E-2** | Motivo, 2ª fase | **Sí** | U+NR sobre micro-CSP + **no entrañado** (M12) | Micro-CSP de 3×2 independiente | **>80 %** | 0,5 | X0 (V7 ya) | Ninguno de motor. Coste narrativo perpetuo |
| **E-3** | Cadena de custodia | **Sí** | CT1-CT3, **+CT4 que añado** | Construida: se elige la transposición y `obj_antes` con CT2 por diseño | Media, **5-20 %**, desconocida | 2 | X0, M10, CAP | Predicados nuevos antes/después; `n=4` obligatorio |
| **E-4** | Objeto perdido | **Sí**, con **OP3 reformulada** | INJ, OP1, OP2, **OP3′ = TR(cuenta_del_hueco)** | Construida: inyección declarada en `board.extra` | Alta, **>40 %** | 1 | X0, CAP | OP3 tal como está escrita no es una propiedad bien definida |
| **E-5** | Tabla del comisario | **Sí** | MT1-MT5, **+ dos regímenes de `givens`** | **Construida, casi determinista** (§4.5) | **≈100 %** | 1 | X0, M12, M3 | Ninguno serio. **El diseñador la teme sin motivo** |
| **E-6** | Expediente invertido | **Sí**, con generador propio | PU1-PU4; NR **no** se aplica | Generador de redundancia controlada, propio | Media-baja, desconocida | 2 | X0, generador propio | PU2 (soporte minimal único) con 4 distractores |
| **E-7** | **Vis a vis** | **Parcial**: MV-E mal cuantificada **y el presupuesto no da** | MV-E1 reformulada como estrategia adversaria; `\|R₀\| ≤ 16` | Construida hacia `\|R₀\|` objetivo | **Desconocida. La única de riesgo real** | 3 (+2 compartidos con V4) | X0, M3, MV de Escena | §4.7. **Con 2 pistas de apertura y 4 fichas es imposible** |
| **E-8** | Doble víctima | **Sí** | DV1-DV4 | Filtrada: 2 llamadas a M12 por candidato | Media, **5-20 %** | 0,5 | X0, M12 | DV2 exige que el último peldaño sea justo el que decide |
| **E-9** | El pasillo (orden) | **Sí**, quitando los ordinales de tablero | ORD1-ORD4 **+ regla 5 de §2.2** | Banco de T7 sobre `board.order` | Alta, **>40 %** | 1 | X0, X1 | La forma canónica publicada del diseñador es vacía |
| **E-10** | **La contraprueba** | **Sí**, y es **opcional por caso** | CP1-CP4 | Filtrada tras generar: se busca celda con soporte minimal único | Alta por ser opcional | 0,5 | X0 (soportes mínimos) | Ninguno. CP2 elimina el riesgo |
| **E-11** | Rueda de reconocimiento | **Sí** | RR1-RR4 | Comprobación de cardinal contra las fichas | **>80 %** | 0,25 | X1 | Es una T1 con coste de lectura: no contar como profundidad |
| **E-12** | El reparto (recuento) | **Parcial**: la forma canónica es **idénticamente verdadera** | CNT1-CNT4 **+ CNT5 y CNT6 que añado** | Banco de recuentos sobre intersecciones | Alta una vez corregida | 0,5 | X0, NV | §2.3. Se publica roto si no se corrige |
| **N-1** | Doble víctima del guionista (dos fallecidos, dos escenas) | **No como está escrita** | — | — | — | — | — | Regla cozy + `(n!)⁴` + doble guion. **E-8 es la versión buena** |
| **N-2** | Casos de época, topología lineal | **Sí, coste cero** | ORD | `board.order.topologia = "linea"` | — | **0** | E-9 | Ninguno de motor. Anacronismos, que no son míos |
| **N-3** | Motivo como 4ª categoría (domingo) | **Sí a `n=4`**; **no a `n=5`** | CAP | `K = 4`, `\|M₀\| = 13.824` | — | 0 | CAP | **Conflicto con el calendario de `producto` (§4.17)** |

---

## 4. Detalle por mecánica

### 4.1 E-1 · La coartada cruzada

**Modelado.** `pareja(A,B;P1,P2) ≡ (junto(A,P1) ∧ junto(B,P2)) ∨ (junto(A,P2) ∧ junto(B,P1))`. Bajo biyección las dos ramas son **mutuamente excluyentes** (A no puede estar en dos sitios), así que la disyunción es exclusiva sola, igual que T4. Una máscara, dos `popcount`, nada nuevo en el solver.

**Las cuatro condiciones, revisadas.** CC1 (exactamente una pista con esa forma) y CC2 (NR) son estándar. CC4 es la buena y es verificable en una línea: `R ∈ {P1, P2}` y `\|{P1,P2} ∩ {R}\| = 1`. CC3 («el certificado resuelve la disyunción con un paso ≤N4 y la rama falsa muere en ≤3 pasos») es la única que cuesta, porque **exige que la escalera sepa ramificar y registrar la muerte de una rama**. Eso es la técnica 13 («la coartada imposible», N4) y hay que implementarla como un modo de M3, no como una técnica más: la escalera supone `junto(A,P1)`, propaga, y si llega a contradicción en ≤3 peldaños emite un sub-certificado de rama.

**Cómo se genera, y por qué la tasa será mejor de lo que el diseñador teme.** No se filtra: **se construye**. Se elige la solución, se toma `A = culpable` (con `asig_lugar(A) = R`), se toma `B` cualquier otro, se planta `pareja(A,B; asig_lugar(B), R)` como pista fija y se genera el resto del conjunto con la restricción añadida de que **ninguna otra pista fije directamente el lugar de A ni de B** (si lo hiciera, la pareja sería redundante y NR la borraría). El único filtro que queda es CC3, que se mide ejecutando la escalera. Prior: 10-30 %.

**Coste: 1,5 días.** Predicado `pareja` y su máscara 0,25; criterio CC 0,25; **rama de la escalera con sub-certificado 1**.

**Riesgo.** CC3. Si la rama falsa tarda más de 3 pasos en morir, el jugador vive un callejón largo y la mecánica se convierte en lo que el diseñador quería evitar. Es medible en la Compuerta 0.

### 4.2 E-2 · El motivo en el último minuto

Es V7 con otro nombre y coincide con la opción B del guionista. Micro-CSP de 3 candidatos y 2 pistas, U por enumeración de tres casos, NR trivial, y la condición que importa: **no entrañado** por las pistas principales (`pistas ∪ {motivo ≠ m*}` satisfacible). Una llamada a M12.

La estructura obligatoria que añade el diseñador es correcta y la suscribo: **con 3 opciones y 2 pistas, las dos pistas son eliminatorias**. Una pista que confirme directamente el motivo hace redundante la otra, y entonces NR falla.

Hay una condición más que no está en ningún documento y que sale de la §5 de este dictamen: **el motivo verdadero no puede ser función del canon del culpable** (NR-M3). El guionista quiere justo lo contrario («un personaje puede aparecer diez veces como inocente antes de que su secreto sea el motivo del caso en el que por fin es culpable»), y eso, sin corregir, convierte E-2 en una pregunta que el veterano acierta sin leer las dos pruebas. La corrección está en §5 y es de contenido, no de motor: los otros dos motivos ofrecidos deben ser igualmente compatibles con el canon de otros sospechosos.

**Coste: 0,5 días.** Ya presupuestado en V7.

### 4.3 E-3 · La cadena de custodia

**Modelado.** `obj_antes : S → O` biyectiva; `τ` transposición de dos sospechosos, con `τ` como variable de dominio `C(n,2)`; `obj_despues = obj_antes ∘ τ`. Espacio: `n! · C(n,2) · n!` (contando el lugar) = **3.456 para `n = 4`**. El diseñador da 144 para la parte del objeto: correcto. Enumerable, y bajo CAP en todas sus casillas legales.

**Las tres condiciones y una cuarta.** CT1 (el intercambio está forzado) y CT2 (el portador previo del arma no es el culpable) son comprobaciones de máscara. CT3 (el certificado incluye un paso «puente de tiempo») es TR sobre la técnica 12. **Añado CT4: la pareja `{A,B}` que intercambia debe ser deducible**, no solo la asignación final. Sin CT4 el caso puede cumplir U sobre el arma final y dejar ambiguo quién se cambió con quién, que es justo lo que el jugador cree estar resolviendo, y el cuaderno tendría un control de dos huecos sin respuesta única.

**DSL nuevo, cuatro predicados:** `llego_con(s, o)` = `obj_antes(s) = o`; `se_marcho_con(s, o)` = `obj_despues(s) = o`; `no_solto(s)` = `s ∉ τ`; `intercambio(A, B)` = `τ = (A B)`. Los cuatro con negación y `cells()`.

**Coste: 2 días.** Variable auxiliar y transposición 0,75; cuatro predicados 0,5; criterios CT 0,25; técnica «puente de tiempo» en la escalera 0,5.

**Riesgo.** El banco de pistas se multiplica (todos los predicados de objeto se duplican en antes/después) y el generador tarda más, que con D-009 no es un problema. El riesgo real es la tasa, y es desconocida. Es una de las cuatro de la Compuerta 0 y el diseñador tiene razón en pedir que se mida.

### 4.4 E-4 · El objeto perdido

**Modelado.** `asig_objeto : S → O` **inyectiva** con `\|O\| = n+1`. `\|M₀\|` pasa de `(n!)²` a `n! · (n+1)!/1!`, es decir de 576 a 2.880 con `n = 4`. Bajo CAP.

**El efecto en el razonamiento que el diseñador describe es real y hay que implementarlo en la escalera:** «el único que queda» deja de valer en esa dirección. En términos de motor: la restricción de la categoría inyectiva es `exactamente_uno` por fila (cada sospechoso lleva uno) pero **`como_mucho_uno` por columna** (cada objeto tiene 0 o 1 dueño), y hay una restricción global de cardinalidad `\|asignados\| = n`. Son tres restricciones distintas donde antes había una.

**OP3 hay que reformularla.** Dice: «el generador comprueba que quitar el hueco (volviendo a `n` objetos) rompe U». Eso no está bien definido: quitar el objeto huérfano cambia el tablero, el banco de pistas y el espacio de modelos; el caso resultante es otro caso, y comparar U entre dos problemas distintos no dice nada. **Propongo OP3′: la técnica «la cuenta del hueco» (nº 11) es requerida por el caso, en el sentido de TR** —desactivarla en la escalera deja el caso irresoluble—. Eso es exactamente lo que OP3 quiere decir, es una propiedad de un solo problema y se calcula con una ejecución de M3.

Y una nota que sale de §2.3: **con E-4 el recuento sobre una sola categoría vuelve a ser informativo**, porque un valor se queda fuera. Es la única excepción a CNT5 y hay que dejarla escrita, porque si no el validador rechazará pistas legítimas del viernes.

**Coste: 1 día.** Inyección en el enumerador 0,5; tres restricciones en la escalera 0,25; OP y tests 0,25.

### 4.5 E-5 · La tabla del comisario — **la buena noticia del dictamen**

El diseñador escribe: «MT y CC son las que más me preocupan: las dos exigen que exista una configuración con una propiedad muy concreta y ninguna de las dos se puede forzar». **En MT se equivoca, y en su favor: MT se construye casi con certeza.**

El procedimiento:

```
1. Generar un caso válido normal (U + SA + NR).
2. Calcular la máscara del residuo: es un único modelo (la solución).
3. Para cada celda del cuaderno, comprobar entrañamiento con un popcount:
   celdas ✓ entrañadas y celdas ✗ entrañadas. Con U, TODAS lo están.
4. Elegir 15-18 de ellas como marcas correctas del comisario → MT2 se cumple
   por construcción, no por suerte.
5. Elegir la marca falsa entre las ✗ entrañadas (se presenta como ✓) y
   comprobar MT3: ejecutar la escalera desde el estado con esa marca puesta y
   exigir que la contradicción aparezca en ≤N4 usando ≥2 pistas.
   Hay del orden de 30 candidatas; se prueban todas y se elige la mejor.
6. MT1 (exactamente una refutable) se cumple porque las otras están entrañadas.
```

**El único filtro real es el paso 5, y se elige entre ~30 candidatas.** La probabilidad de que ninguna de las treinta dé una refutación de nivel ≤N4 con ≥2 pistas es muy baja. Mi prior es una tasa próxima al 100 %, y aun así sigue mereciendo la pena medirla en la Compuerta 0 porque el número exacto decide cuántas marcas se ponen.

**Lo que sí hay que arreglar es el esquema, porque `board.givens` está haciendo dos trabajos incompatibles.** En §2.3 del diseñador (la coartada confirmada) los `givens` son **información gratuita no entrañada** por las pistas, y por eso NR debe comprobarse *dado* el estado con givens aplicados. En E-5 los `givens` son **entrañados por construcción** (MT2), y entonces aplicarlos no cambia el conjunto de modelos y NR sobre las pistas es idéntico con y sin ellos: MT4 es, en ese caso, redundante. Dos regímenes distintos bajo el mismo campo es exactamente el tipo de ambigüedad que produce un caso roto seis meses después. Propongo:

```jsonc
"givens": [
  { "bloque": "sospechoso×lugar", "x": "tino", "y": "conserjeria",
    "valor": true, "regimen": "informativo" },     // NO entrañado; NR se comprueba con él aplicado
  { "...": "...", "regimen": "entrañado" },        // entrañado por las pistas; no altera NR
  { "...": "...", "regimen": "falso" }             // E-5: pistas ⊨ ¬m. NUNCA entra en el sistema formal
]
```

Y la regla dura: **el sistema formal del caso es `clues ∪ givens(informativo) ∪ givens(entrañado)`. La marca falsa nunca forma parte de él**; es metadato de interfaz más una obligación de verificación. Si se olvida, U falla y el generador entra en bucle intentando entender por qué.

**Coste: 1 día.** Cálculo de celdas entrañadas 0,25 (ya está en X0); selección de marcas y MT3 0,5; tres regímenes en el esquema 0,25.

**Y una consecuencia de calendario.** Bajo la arquitectura B de `producto`, Expediente ocupa jueves y domingo. E-5 es la mecánica del jueves y es **casi gratis**. Eso la convierte, junto con E-10, en el bloque mínimo de Expediente, y cambia el orden de construcción de §8.

### 4.6 E-6 · El expediente invertido

Es V10 trasladado, y las dos correcciones que hice allí siguen valiendo enteras: **bajo NR el único soporte es el conjunto completo**, así que el invertido **no se puede fabricar a partir de un caso del día** y necesita su propio generador con redundancia deliberada. El diseñador ya lo ha registrado en PU4, y le doy la razón en que **en Expediente funciona mejor que en Escena**: el soporte mínimo se lee como una cadena narrativa y no como una lista de coordenadas.

**Modelado.** Objetivo: `junto(Casilda, archivo)`. Para cada `S ⊆ C`, `S` prueba si `residuo(S) ∩ mask(¬objetivo) = ∅`. Con 9 pistas son 512 comprobaciones de `popcount`: microsegundos. Se filtran los minimales; PU2 exige exactamente uno, PU3 tamaño 2-3.

**El problema real es PU2 y hay que decirlo con números.** Con 5 pistas útiles y 4 distractores, el generador tiene que conseguir que exista **un solo** subconjunto minimal que pruebe la celda. Con NR relajada, es fácil que haya dos caminos de prueba distintos (por ejemplo, uno por la coartada y otro por la cadena de atributos), y entonces el juego tiene dos respuestas correctas y falla el jugador que da la otra. Es un filtro fuerte y la tasa es desconocida. Mitigación barata: el generador **construye el distractor** en vez de sortearlo —una pista verdadera sobre una entidad que no participa en la cadena de prueba no puede crear un segundo soporte—, y solo así la tasa sube.

**Coste: 2 días.** Soportes mínimos 0,25 (X0 ya lo da); **generador de redundancia controlada 1,5**; PU y tests 0,25. Sigue siendo la parte que nadie presupuesta.

**Dónde vive.** El diseñador lo saca del caso del día y lo manda a archivo y Pack Aula. Correcto, y añado un motivo de motor: es el único formato del modo que no cumple NR, así que **no puede pasar por el mismo pipeline de publicación diaria**. Necesita su propia rama del validador o el checklist lo rechazará todos los días.

### 4.7 E-7 · El vis a vis — **la mecánica con el problema serio**

Es la firma X-A y es la única de las doce que hoy **no puedo dar por viable**, por dos razones independientes. Ninguna es fatal; las dos exigen cambiar la especificación antes de medir nada.

#### Razón 1: MV-E1 está mal cuantificada, y en la lectura que la hace verificable el filtro no leaka; en la otra, sí

MV-E1 dice: «`q` es ofrecible en el estado `E` con `p` fichas restantes si **existe una secuencia** de preguntas de coste total ≤ `p` que empieza por `q` y deja `\|residuo\| = 1`». La frase no cuantifica sobre **las respuestas**, y ahí hay dos lecturas incompatibles:

- **Lectura existencial** («existe una secuencia que, *con las respuestas que de hecho se den*, cierra el caso»): el filtro depende del modelo verdadero, que el jugador no conoce. Entonces **el menú es un oráculo**: el hecho de que una pregunta esté ofrecida transmite información sobre la solución que el jugador no podía deducir. **Viola OR**, que es la propiedad que el propio MV-E3 invoca.
- **Lectura universal** («para *toda* respuesta posible existe continuación»): el filtro depende solo del residuo, que el jugador también puede calcular. **Cumple OR** y hace verdadera la frase de pantalla que el diseñador quiere poner: *«cualquiera de estas cierra el caso»*.

Solo la segunda es publicable. Formalizada como un juego de árbol AND-OR, memoizado sobre el residuo:

```
cierra(E, p)      ⟺  |E| = 1
                     ∨  ∃q con coste(q) ≤ p :
                          ∀a ∈ respuestas_posibles(q, E) : cierra(E|q=a, p − coste(q))

ofrecible(q,E,p)  ⟺  coste(q) ≤ p  ∧  ∀a ∈ respuestas_posibles(q, E) :
                          cierra(E|q=a, p − coste(q))
                     ∧  cada respuesta deja certificado ≤N4 (SA en cada rama)

MV-E2′            ⟺  |{q : ofrecible(q,E,p)}| ≥ 2  en todo estado alcanzable,
                     y al menos una de coste 1 y una de coste 2
```

El coste de calcularlo es bajo si se hacen dos cosas: **memoizar sobre el residuo** (clave = el bitset) y **deduplicar preguntas por la partición que inducen** sobre el residuo (dos preguntas que parten el residuo igual son la misma pregunta). Con un residuo de decenas, son miles de nodos, no los 95.284 que temía en Escena.

La misma corrección hay que aplicarla a **MV en Escena** (dictamen de Escena, §V4, MV2), que tiene la misma ambigüedad. Es una corrección compartida y por eso el motor de MV es una sola pieza para los dos modos.

#### Razón 2: con dos pistas de apertura y cuatro fichas, el presupuesto de información no da. Y se demuestra

Bajo la lectura universal, el número máximo de hojas que un presupuesto puede distinguir es exacto. Con coste 2 para la abierta (≤ `n` respuestas) y coste 1 para la cerrada (2 respuestas):

```
L(0)=1 · L(1)=2 · L(2)=max(n, 4) · L(p)=max(n·L(p−2), 2·L(p−1))
n = 4 :  L(2)=4 ·  L(3)=8 ·  L(4)=16
```

**Con 4 fichas y `n = 4`, ninguna estrategia distingue más de 16 modelos**, y las tres reparticiones de coste dan las tres el mismo tope: `2⁴ = 16`, `4·2·2 = 16`, `4·4 = 16`. Luego **MV-E exige `\|R₀\| ≤ 16`** después de las pistas de apertura.

Ahora el ejemplo del propio documento. Expediente 31 versión miércoles abre con dos pistas: «Tino no salió de la conserjería» y «El abrecartas apareció en la terraza». `\|M₀\| = 576`. La primera fija el lugar de Tino: quedan `3! = 6` asignaciones de lugar. La segunda liga el objeto del ocupante de la terraza: quedan `3! = 6` de objeto. **Residuo: 6 × 6 = 36.** Y `36 > 16`.

**El caso de ejemplo de la firma X-A no puede cumplir MV-E.** En la narración funciona porque las respuestas salen informativas; con otras respuestas, las cuatro fichas se agotan sin cerrar. Es exactamente el mismo error que IQ en Escena: una promesa que solo se cumple en la rama afortunada.

**Cuatro reparaciones, ordenadas por lo que cuestan al diseño:**

| Reparación | Qué hace | Coste para el jugador | Veredicto |
|---|---|---|---|
| **Tres pistas de apertura, 4 fichas** | 576 → ~9 con tres pistas de fuerza media; `9 ≤ 16` | Una frase más en pantalla; sigue siendo la mitad de las seis | **Recomendada** |
| Dos pistas, 6 fichas | `L(6) = 64 ≥ 36` | Más fichas diluye la decisión, que es la gracia del coste asimétrico | Aceptable |
| Dos pistas, una de ellas muy fuerte (T3 o T8) | 576/24 = 24 > 16 | — | **No basta** |
| Lectura existencial | — | — | **Prohibida**: viola OR |

Con `n = 5` los números cambian (`L(4) = 25`), pero el diseñador fija `n = 4` para E-7 y hace bien.

**Consecuencia para la Compuerta 0: la tasa de aceptación de MV-E hay que medirla con tres pistas de apertura, no con dos.** Medirla con dos daría cero y la conclusión sería falsa: no es que la mecánica no exista, es que el presupuesto estaba mal.

**Coste: 3 días propios** (catálogo de preguntas con la auditoría de degeneración, coste asimétrico, generación hacia `\|R₀\|` objetivo) **+ 2 compartidos con V4** (motor de árbol AND-OR con memoización y deduplicación por partición). Si V4 se construye primero, E-7 baja a 3.

**Y una nota sobre el catálogo de preguntas.** La auditoría de §2.3 se aplica también a las preguntas: «¿quién estaba contigo?» es idénticamente falsa, «¿estabas solo?» idénticamente verdadera, y hay una tercera que el diseñador no lista: **«¿viste algo de `<material>`?» solo existe con E-9** (necesita un vecino en la tira de orden), así que en un caso sin orden declarado es una pregunta sin semántica y el DSL no debe poder construirla. El menú se genera del DSL, no de una tabla escrita a mano.

### 4.8 E-8 · La doble víctima

**Modelado: cuesta cero variables nuevas.** `culpable₁ = asig_lugar⁻¹(R)` y `culpable₂ = asig_objeto⁻¹(llave)`. Los dos son derivados de las biyecciones que ya existen. `\|M₀\|` no cambia. El diseñador lo ha visto bien y es lo que separa su E-8 de la idea 4.6 del guionista (§4.14).

**DV2 es la propiedad interesante y hay que precisarla.** Dice: «con el conjunto de pistas menos la última del certificado, ni `pistas ⊨ (c₁ = c₂)` ni `pistas ⊨ (c₁ ≠ c₂)`». Habla de «la última del certificado», que es un **peldaño**, no una pista. La formulación verificable es sobre el estado:

```
DV2′  sea E_{k−1} el residuo en el penúltimo peldaño del certificado:
      E_{k−1} contiene al menos un modelo con c₁ = c₂ y al menos uno con c₁ ≠ c₂
      (dos popcount sobre el residuo de ese peldaño)
```

Con la arquitectura de máscaras, el certificado puede llevar el residuo de cada peldaño como bitset y DV2′ son dos `AND` y dos `popcount`. Trivial.

**Tasa.** DV2′ exige que el **último** paso sea justamente el que decide la identidad. No es raro pero tampoco es lo habitual: mi prior es 5-20 %. Es filtrable, no construible, así que el coste es de lote, no de diseño.

**Restricción de contenido**, que no es mía pero la registro porque el generador la aplica: nunca dos fallecidos (regla cozy). Un hecho grave y un hurto. En términos de motor es solo la etiqueta de la segunda «víctima», que pasa a ser un objeto (`llave`) en vez de un lugar.

**Coste: 0,5 días.**

### 4.9 E-9 · El pasillo

Ver §2.2. El modelado es un orden total declarado en `board.order` más la familia T7 y la propagación de intervalos (técnica 10, «la tenaza ordinal»). Nada nuevo en el solver: un orden es un atributo ordinal impreso y las pistas hablan de las posiciones asignadas.

**La corrección importante ya está en §2.2, regla 5:** la forma canónica que el documento publica en la fila T7 («El jardín está más lejos de la entrada que la galería») es un hecho de tablero, idénticamente verdadero, y NV lo rechazaría. Hay que reescribir la forma canónica para que hable de sospechosos, no de lugares. Las seis pistas del Expediente 27 que el diseñador escribe **sí están bien** (la 1 y la 5 hablan de personas y de portadores); es solo la fila de la taxonomía la que está mal.

ORD3 (máximo una pista que cruce dos órdenes) es una restricción del generador, no del solver, y es de las que evitan un desastre real. La suscribo entera.

**Coste: 1 día.** Orden precalculado y distancias 0,25; T7 con negación y `cells()` de intervalo 0,5; ORD 0,25.

### 4.10 E-10 · La contraprueba

**Es PU restringida a una celda, y CP2 la hace segura.** Se calcula tras generar: para cada celda del cuaderno, enumerar los soportes mínimos de esa celda con la primitiva de máscaras; quedarse con las celdas que tienen **exactamente uno** de tamaño 2 o 3; elegir la de mayor peso narrativo (la del culpable, si califica). Si ninguna califica, **no se ofrece la contraprueba en ese caso**, y no pasa nada.

Esa opcionalidad es lo que la hace la mejor pieza de la lista: **no impone ninguna restricción al generador**, así que no baja la tasa de aceptación de nada, y convierte el certificado —el activo invisible— en algo que el jugador usa. Coincido con el diseñador en que si solo se pudiera construir una cosa de las doce, sería esta.

Dos precisiones de motor:

- **Con NR sobre el caso completo, los soportes de una celda concreta pueden ser más pequeños que el conjunto entero.** No hay contradicción con lo que dije en V10: allí el objetivo era la solución completa; aquí es una celda. Por eso E-10 sí sale de un caso del día y E-6 no.
- **El «con esas tres bastaba» necesita el soporte minimal, no el soporte.** Si el jugador marca 4 pistas y el minimal es de 3, la respuesta correcta del juego es señalar cuál sobra, y eso exige guardar el minimal en el caso, no recalcularlo en el cliente (recalcularlo también vale: 512 `popcount`).

**Coste: 0,5 días** sobre X0.

### 4.11 E-11 · La rueda de reconocimiento

RR1 (portador único de la conjunción de atributos) se comprueba **contra las fichas, no contra la solución**: es una propiedad del reparto del caso, no de su solución. Trivial: un recorrido por los `n` sospechosos.

**La precisión que hay que hacer es de dificultad, no de corrección.** Con RR1, la descripción identifica a una persona, luego la pista **es una T1 con un coste de lectura por delante**. El diseñador dice que es N2 «y muy agradable». Lo segundo sí; lo primero, no: el trabajo de cruzar fichas es lectura, no deducción, y si el certificado la cuenta como N2 la medida de dificultad se infla. Propongo etiquetarla `N1+lectura` y que la métrica de dificultad de M5 la sume como paso pero no como nivel. Es la misma decisión que ya tomamos con la T6 de un solo portador.

**Coste: 0,25 días.**

### 4.12 E-12 · El reparto

Ver §2.3. La mecánica es buena y la emoción del casillero es real; **la forma canónica de la pista es idénticamente verdadera y hay que cambiarla**. Con CNT5 y CNT6, el recuento cuenta la intersección de dos propiedades independientes y todo funciona: la técnica 9 («el reparto», recuento + palomar) sigue existiendo y sigue siendo N3.

CNT1 (cardinal exacto, nunca «al menos») es una decisión de vocabulario excelente y la suscribo sin matices: es de las pocas cosas de este documento que mejoran el género entero por una convención.

CNT4 (máximo dos recuentos por caso) es del generador. CNT3 (partición ≥2 por lado) sigue valiendo, pero por otro motivo del que el diseñador da: no evita la vacuidad —de eso se encarga CNT6— sino que evita que la intersección tenga rango trivial.

**Coste: 0,5 días.** Restricción de cardinalidad sobre intersecciones 0,25; CNT5/CNT6 en el validador 0,25.

### 4.13 Transversales de Escena que se trasladan

Resumen de lo que **no** cuesta días nuevos porque ya está presupuestado, con lo que cambia:

| Pieza de Escena | En Expediente | Cambio | Días extra |
|---|---|---|---|
| Sobres / OD | OD-E sobre ✓ del cuaderno | Contar ✓ del estado, no toques. Correcto y por el motivo correcto (OR + equidad con la autopropagación) | 0 |
| Tirar del hilo / M4 | `cells()` devuelve bloque + coordenadas; T7 devuelve intervalo | En 96 casillas no es comodidad, es jugabilidad | 0 |
| Sabueso / V11 | Dos niveles sobre el certificado + **modo MT5** | §1.4 | 0,25 |
| Reconstrucción / V17 | Mismo certificado, otro renderizador | §6 | 0 |
| Escalafón / TR | 14 técnicas propias | §6 | dentro de X4 |
| Probado / por poco | Igual, más informativo | 0 | 0 |
| Cuatro manos / AM | Reparto de pistas sobre el mismo cuaderno | El cierre alternado de V13 se traslada sin cambios y **se reparte mejor**: las pistas de Expediente son más independientes entre sí | 0 |
| Pistas visuales / V3 | **No se trasladan.** Los iconos son etiquetas de atributo | Decisión correcta y la refuerzo: un dibujo que a veces es atributo y a veces pista es indistinguible, y NV no lo detecta porque no es una pista | 0 |

Sobre la **autopropagación transitiva**: el diseñador la deja opcional y desactivada por defecto en experto, con el argumento de que si el juego cruza las tablas solo, le quita al jugador la técnica que el escalafón quiere acreditarle. Tiene razón y añado la consecuencia de motor: **TR se calcula sobre el caso, no sobre la sesión**, así que la acreditación no cambia según el ajuste. Lo que sí cambia es la medida de dificultad percibida, y por eso el ajuste tiene que viajar en los eventos de analítica o la calibración de M5 mezclará dos poblaciones.

### 4.14 Narrativa que roza el motor · La doble víctima del guionista

El guionista (4.6) la deja como **pregunta abierta bloqueante**: «¿es una ampliación trivial (más filas) o exige comprobar entrañamiento entre dos sub-modelos si comparten sospechosos?». **Respuesta: ninguna de las dos, y la pregunta tiene tres respuestas según cuál de las dos versiones se elija.**

- **Versión E-8 del diseñador** (un hecho grave + un hurto, los dos culpables definidos por categorías distintas): **cuesta cero variables**. `culpable₁` y `culpable₂` son derivados de las biyecciones existentes. No hay dos sub-modelos, hay uno. No hace falta EN. Es la versión correcta.
- **Versión del guionista** (dos fallecidos, dos escenas, dos armas, dos motivos, mismo reparto): son **dos asignaciones completas** sobre el mismo conjunto de sospechosos, es decir `(n!)⁴ = 331.776` con `n = 4`. Enumerable, pero **cuadruplica el cuaderno** (12 bloques), duplica las pistas y duplica el guion, y además **incumple la regla cozy** que el propio diseñador invoca (nunca dos fallecidos).
- **Versión intermedia** (dos hechos, dos escenas, un solo reparto de objetos): equivale a añadir una categoría `escena` y cae bajo CAP normalmente.

**Veredicto: la pregunta del guionista está resuelta y la respuesta es E-8.** No hay ningún entrañamiento que comprobar entre sub-modelos porque no hay sub-modelos. Lo que sí hay que comprobar es DV2′, que es la propiedad de suspense y que ninguno de los dos documentos había expresado de forma calculable.

### 4.15 Narrativa que roza el motor · Casos de época con topología lineal

El guionista (4.7) pregunta si «los lugares como vagones en fila» se puede expresar en el DSL actual sin inventar predicados. **Sí, exactamente, y sin coste: es `board.order` con `topologia: "linea"` y la familia T7.** Un vagón restaurante entre el coche cama y el furgón es `entre(A, B, C)` sobre el orden declarado; «el vagón siguiente» es `justo_antes`. Es la misma pieza que E-9 y no hace falta nada más.

Dos avisos de motor, pequeños:

- **El origen hay que declararlo también aquí**: «desde la locomotora» o «desde la cola». Sin origen, ORD2 falla y aparece la queja P4 dentro de un tren.
- **Si algún día se quiere una topología que no sea una línea** (un barco con cubiertas, una casa con plantas), eso ya no es `order` sino el **grafo de habitaciones M9 de Escena**, y entonces la traducción correcta a Expediente es la que el propio diseñador escribe en su §2.5: **como atributo si es una partición, como tira de orden si es una vecindad. Nunca como categoría.** Esa regla es buena y conviene subirla al DSL como restricción del generador.

Coste de motor de los casos de época: **cero**. El riesgo (anacronismos, hechos históricos reales) es del guionista y del validador de contenido, no mío.

### 4.16 Narrativa que roza el motor · El motivo como segunda fase

Ya cubierto en §4.2. La recomendación del guionista (combinar A, B y C: cuarta categoría el domingo, segunda fase entre semana, confesión siempre) coincide con la del diseñador y con V7, y no hay conflicto de motor. La única condición que hay que añadir es NR-M3 (§5).

### 4.17 El conflicto de calendario que hay que resolver antes de programar nada

`producto` propone (§1.4): **Domingo, Expediente, `5×5×5 + motivo`**. Eso son `n = 5` con `K = 4`:

```
|M₀| = (5!)³ = 1.728.000   →   CAP lo rechaza (límite 150.000)
casillas = 6 bloques × 25 = 150   →   el techo del diseñador lo rechaza (§1.1)
máscara por pista = 216 KB   →   un banco de 2.000 pistas = 432 MB
residuo en cliente = 1,7 M modelos   →   Sabueso y la contraprueba dejan de ser instantáneos
```

**El diseñador tiene razón y `producto` no lo ha comprobado.** El domingo XL debe ser **`n = 4` con `K = 4`** (13.824 modelos, 96 casillas), que es exactamente el preajuste XL de §1.1. La sensación de «grande» la da el número de casillas (96 frente a 48: el doble), no el número de elementos.

Y hay un segundo conflicto en el mismo sitio: la idea **E4 de `producto`** («el domingo de la conspiración: los culpables de los seis casos de la semana son los sospechosos») exige `n = 6`, que está **doblemente prohibido** (CAP y el techo). Reparaciones posibles, todas de producto y no mías: usar **cuatro** de los culpables de la semana (`n = 4`, XL con motivo), o **cinco** con `K = 3` (preajuste Ancho, 14.400, sin motivo). La segunda conserva mejor la idea; la primera conserva mejor el domingo con motivo. Además, la conspiración es una restricción **entre casos** y por tanto exige M11 (lote semanal con regeneración parcial) y EN; no es gratis, es 1,5 días como `producto` estima, pero sobre M11, que no está en su cuenta.

---

## 5. Reparto recurrente con atributos fijos: la regla del guionista no basta

El guionista propone la frontera: *«los atributos biográficos estables viven en la ficha y en los textos fuera de las pistas; nunca son el valor que fija o pregunta una pista numerada»*. Es una regla buena, es necesaria, y **no es suficiente**, porque ataca un canal de filtración que en realidad no filtra e ignora dos que sí.

**Formalización de lo que hay que garantizar.** Sea `K` el conocimiento canon acumulado de un jugador veterano (fichas, oficios, secretos, estados, historial de culpables y de motivos). Sea `F(c)` la información impresa en el caso `c`. Lo que hay que exigir:

```
NR-M   Para todo caso publicado c y todo prefijo de pistas P:
       Pr[ solución | P, F(c), K ]  =  Pr[ solución | P, F(c) ]
```

Es decir: **el canon no cambia las probabilidades.** Ahora los canales, uno por uno:

| Canal | ¿Filtra? | ¿Lo cubre la regla del guionista? |
|---|---|---|
| **H1** El veterano recuerda que Bruno silba boleros y no tiene que leer la ficha | **No.** El dato está impreso en el caso; la memoria ahorra lectura, no aporta información | La regla lo cubre y era el canal menos peligroso |
| **H2** El veterano recuerda que el rasgo canon de un personaje es su `altura_rank`, y las pistas ordinales lo usan | **No, si se imprime siempre.** Sí, si alguna vez se omite «porque es canon» | Parcialmente. Hay que hacer explícito: **todo atributo citado se imprime en el caso, siempre, aunque sea canon** |
| **H3** El personaje que fue culpable hace tres casos está *quemado*, aparece como sospechoso y el veterano lo descarta a priori | **Sí, y es grave.** Con 4 sospechosos, descartar uno a priori sube la probabilidad de acertar a ciegas del 25 % al 33 % antes de leer una pista | **No.** La regla habla de pistas; este canal pasa por el reparto |
| **H4** El motivo verdadero de E-2 es siempre el secreto canon del culpable | **Sí.** Y es peor: una vez el jugador reduce a dos candidatos, el que tenga un secreto compatible con un motivo ofrecido es el culpable | **No.** La regla habla de pistas; este canal pasa por el motivo |
| **H5** El veterano lleva la cuenta de quién ha sido culpable y calcula frecuencias | **No**, si el culpable se sortea uniformemente | La regla no lo menciona; se cumple por construcción |

**H3 es consecuencia directa de la propia regla de estados del guionista**, que dice que el quemado «sale del pool de sospechosos durante un tiempo largo, puede reaparecer como referencia o testigo, **no vuelve a ser culpable a corto plazo**». Las dos mitades de esa frase se contradicen: si sale del pool, no filtra; si reaparece como sospechoso pero no puede ser culpable, filtra. Hay que quedarse con la primera y decirlo sin ambigüedad.

**H4 es consecuencia directa de la idea que el guionista más quiere** («un personaje puede aparecer diez veces como inocente antes de que su secreto se convierta en el motivo del caso en el que por fin es culpable»). Y es recuperable: la idea sobrevive si los otros dos motivos ofrecidos son igualmente creíbles para otros sospechosos del caso.

**Las cuatro reglas verificables que propongo:**

```
NR-M1  El culpable se sortea uniformemente entre los sospechosos del caso,
       sin condicionar por canon (ni secreto, ni oficio, ni estado, ni antigüedad).
NR-M2  Un personaje en estado "quemado" o "víctima" NO aparece como SOSPECHOSO.
       Puede aparecer como testigo (E-11), como referencia o en el epílogo.
       Su ausencia no informa porque nunca está presente.
NR-M3  Para cada uno de los tres motivos ofrecidos en E-2 existe al menos un
       sospechoso del caso cuyo canon lo soporta. Comprobable con una tabla
       canon-soporta(motivo, personaje) que mantiene `guionista-misterio`.
NR-M4  Todo atributo citado en una pista se imprime en la ficha del caso,
       siempre, aunque sea canon y aunque el veterano lo sepa de memoria.
```

**Y una prueba con número, que es lo que convierte esto en algo comprobable en vez de una buena intención:**

> **Prueba del veterano.** Dos bots acusan sin leer ninguna pista: el bot A conoce solo `F(c)` (las fichas del caso); el bot B conoce además todo el canon acumulado. Sobre 1.000 casos generados, la tasa de acierto de B no debe superar a la de A en más de **2 puntos porcentuales** (la de A es `1/n`, un 25 % con `n = 4`). Si B acierta significativamente más, hay un canal de filtración y el informe dice cuál: se repite la prueba desactivando NR-M2, luego NR-M3, y el que mueva el número es el culpable.

Es barata (es una simulación sobre casos que el lote ya genera) y es la única forma de saber que la frontera se respeta cuando el reparto tenga dos años de historia y nadie recuerde por qué se escribió la regla.

**La excepción del aniversario** («por primera vez, lo que sabéis de Ana sí importa») es correcta tal como el guionista la plantea, porque se anuncia en portada: en ese caso `K` pasa a formar parte de `F(c)` y NR-M no aplica. En términos de motor es un `board.flags: ["canon_activo"]` que apaga la comprobación, y el checklist lo exige anunciado.

---

## 6. El escalafón y el certificado

### 6.1 ¿Comparten escalera las 14 técnicas de cada modo?

**El algoritmo sí; los catálogos no.** La escalera es un bucle de punto fijo que aplica técnicas por orden de nivel y escala cuando nada dispara. Ese bucle, el cálculo de TR, la emisión del certificado, la medida de dificultad y la detección de N5 son **una sola implementación compartida**. Lo que cambia por modo es:

| Componente | ¿Compartido? |
|---|---|
| Bucle de punto fijo, orden de niveles, escalada, tope N4 | **Sí** |
| Ramificación N4 (rama corta, sub-certificado) | **Sí**. La necesitan CC3, MT3 y la técnica 14 de los dos modos |
| Cálculo de TR (`\|T\|` ejecuciones desactivando cada técnica) | **Sí** |
| Métrica de dificultad sobre el certificado (M5) | **Sí** el cálculo; **no** las bandas, que se calibran por modo |
| Representación del estado | **No**: dominios de posición en Escena, cuaderno booleano en Expediente. Se abstraen como `Estado = {variables, dominios}` |
| Catálogo de técnicas y sus reglas de detección | **No**: 14 y 14, con 10 nuevas en Expediente |
| `cells()` y el localizador de celdas | **No**: son coordenadas distintas |

**Diez de las catorce técnicas de Expediente no existen en Escena** y el diseñador tiene razón en que eso es el mejor argumento de retención del segundo modo. Añado tres precisiones de motor sobre su tabla:

1. **Las técnicas 4 y 5 son las dos caras productivas de la misma regla.** En un triángulo `(s, l, o)`, conocer dos de las tres relaciones restringe la tercera; solo dos patrones concluyen algo: `(✓,✓) → ✓` (técnica 4) y `(✓,✗) → ✗` (técnica 5, en sus tres orientaciones). `(✗,✗)` no concluye nada. La regla de detección debe enumerar las tres orientaciones de la técnica 5, no solo la que el documento escribe.
2. **Falta una técnica que el generador producirá sola y a la que hay que ponerle nombre antes de la prueba con personas**: la pareja atada **que cruza bloques**. Si en `s×l` un sospechoso está confinado a `{l1, l2}` y en `l×o` esos dos lugares están confinados a `{o1, o2}`, entonces ese sospechoso está confinado a `{o1, o2}` sin que ninguna casilla de `s×o` se haya tocado. Es N3, no es la técnica 7 (que vive dentro de un bloque) y no es la 4 (que necesita ✓). Es probablemente la deducción más característica del formato y no está en la lista.
3. **La técnica 11 («la cuenta del hueco») solo existe con E-4**, y la 12 («el puente de tiempo») solo con E-3. Eso significa que **dos de las catorce solo se pueden acreditar los días que toca esa mecánica**, y con la arquitectura B (Expediente jueves y domingo) eso son unas pocas veces al año. Es un dato para `director-producto`: el escalafón de Expediente **no se llena a la misma velocidad que el de Escena** ni de lejos, y el propio diseñador lo avisa (42 jueves para 14 técnicas). Con dos técnicas atadas a mecánicas mensuales, el número real es peor.

### 6.2 El contrato de certificado agnóstico del modo — **lo único de este documento que hay que congelar hoy**

`producto` lo pide en su R7 y en su tabla de reparto: *«el contrato JSON de peldaños se congela agnóstico del modo antes de que se escriba la primera línea del solver de Escena»*. **Está en lo cierto y es la única tarea de todo este dictamen con una fecha límite que ya está corriendo.** Medio día ahora, tres días si se retrofita.

El borrador que existe hoy (`propuesta-jugabilidad.md` §3.2, repetido en mi V17) **tiene tres huecos** que no se ven desde Escena y que Expediente destapa:

| Hueco | Qué rompe | Reparación |
|---|---|---|
| `celdas_afectadas` usa `{fila, col}`, que es geometría de Escena | El cuaderno tiene `{bloque, x, y}`. Retrofitar esto es tocar todos los renderizadores | **Localizador polimórfico** con discriminador `espacio` |
| No hay forma de expresar un **razonamiento por casos** | CC3, MT3 y la técnica 14 de los dos modos lo necesitan. Sin él, N4 no se puede serializar y la reconstrucción no puede animar una rama que muere | Campo `rama` con supuesto, resultado y longitud |
| Un peldaño no dice **de qué peldaños depende** | «Pásale tu caso» (V21) y Sabueso necesitan mapear un estado parcial al peldaño más avanzado compatible, y la reconstrucción no puede dibujar el hilo del razonamiento | `premisas.pasos` |

**Esquema mínimo que propongo congelar:**

```jsonc
{
  "certificado_version": "1.0",
  "modo": "escena",                       // escena | expediente  — discrimina el catálogo de técnicas
  "caso_id": "…",
  "resoluble": true,                      // false si exige N5: el caso se rechaza
  "nivel_max": "N3",
  "pasos": 9,
  "tecnicas_requeridas": ["cruce_de_tablas", "corte_por_atributo"],   // TR
  "traza": [
    {
      "paso": 3,
      "nivel": "N2",                      // N1 | N2 | N3 | N4
      "tecnica": "cruce_de_tablas",       // del catálogo del modo
      "premisas": {
        "pistas":  ["c1", "c3"],
        "givens":  ["g2"],
        "pasos":   [1, 2]                 // ← dependencia entre peldaños
      },
      "efectos": [
        { "objetivo": { … }, "efecto": "fijar", "valor": "archivo" },
        { "objetivo": { … }, "efecto": "descartar", "valor": "terraza" }
      ],
      "conclusion": { "tipo": "fija", "objetivo": { … }, "valor": "archivo" },
      "rama": null,                       // ← ver abajo
      "estado_resultante": "…"            // codificación por modo, definida en el esquema
    }
  ]
}
```

**El localizador polimórfico**, que es el único punto donde el modo asoma:

```jsonc
// modo escena
{ "espacio": "rejilla",  "fila": 2, "col": 1, "entidad": "amelia" }
// modo expediente
{ "espacio": "cuaderno", "bloque": "sospechoso×lugar", "x": "casilda", "y": "archivo" }
// modo expediente, pista ordinal (E-9): un tramo, no una celda
{ "espacio": "tira",     "categoria": "lugar", "desde": 2, "hasta": 4 }
```

**El campo `rama`**, para el razonamiento por casos:

```jsonc
"rama": {
  "supuesto":  { "objetivo": { … }, "valor": "archivo" },
  "resultado": "muere",               // muere | sobrevive
  "en_pasos":  3,                     // CC3 exige ≤3 ; MT3 exige ≤N4
  "sub_traza": [ /* peldaños de la rama, misma forma */ ]
}
```

**Tres invariantes que hay que verificar con test de propiedad**, porque son lo que permite que un renderizador confíe en el JSON sin recalcular nada:

1. `estado_resultante(k) = aplicar(efectos(k), estado_resultante(k−1))`. Así el frontend puede replicar o leer, indistintamente.
2. Toda pista de `premisas.pistas` existe en `clues_formal`; todo `paso` de `premisas.pasos` es `< paso`.
3. Con NR + SA, **toda pista del caso aparece en al menos un `premisas.pistas`** (el lema de §2.4). Si no, hay una pista que sobra y NR está mal calculada.

**Lo que este contrato desbloquea sin trabajo adicional:** la reconstrucción de los dos modos (V17, E2 de producto), el escalafón de los dos (V18, TR), Sabueso de los dos (V11), «pásale tu caso» (V21), la contraprueba (E-10, que consume `premisas.pistas`), la solución razonada del imprimible (E8 de producto) y el «paso a paso» en texto. **Siete piezas de producto de un esquema de medio día.**

Sobre la pregunta directa del encargo —*¿un solo certificado con `modo` y `tecnica`?*—: **sí, uno solo**. La alternativa (dos esquemas) obliga a duplicar la reconstrucción, el escalafón, Sabueso y el exportador, que son ocho o nueve días de frontend por ahorrar medio día de esquema.

---

## 7. Compuerta 0 de Expediente

El diseñador la pide sin personas: tasa de aceptación de **MV-E, CC, CT y MT** sobre 10.000 candidatos por preajuste, con margen ×10 sobre la demanda. Estoy de acuerdo con las cuatro y con el método, y añado tres cosas: **qué es exactamente un candidato**, **qué más hay que medir**, y **por qué el umbral no puede ser solo una tasa**.

### 7.1 Qué es un candidato, y por qué importa

«10.000 candidatos» es ambiguo y la ambigüedad cambia el resultado por órdenes de magnitud. Definición operativa:

```
candidato = (tablero, solución, conjunto de pistas seleccionado por el generador)
```

Un **tablero** (entidades, atributos, orden, mecánica) da lugar a `|M₀|` soluciones y a un banco de miles de pistas, del que el greedy extrae muchos conjuntos distintos. Medir 10.000 candidatos sobre **200 tableros** cuesta unos diez minutos (§1.3) y es la lectura correcta. Medir 10.000 tableros costaría horas y mediría otra cosa.

Y una precisión que cambia el resultado de tres de las cuatro: **CC, CT y MT no se filtran, se construyen** (§4.1, §4.3, §4.5). La tasa que hay que medir no es «de 10.000 candidatos ciegos, cuántos cumplen CC», que sería casi cero y llevaría a descartar mecánicas viables, sino «de 10.000 candidatos **construidos con la mecánica plantada**, cuántos sobreviven a U + SA + NR + la propiedad». Es la diferencia entre medir la mecánica y medir el azar.

### 7.2 Qué medir y con qué umbral

Umbrales fijados **antes** de ver el dato, siguiendo el método de D-010. Tres números por mecánica, porque una tasa sola no dice si el catálogo se repite ni si cae en la banda del día:

| Métrica | Qué es | Por qué |
|---|---|---|
| **τ** tasa de aceptación | válidos / candidatos construidos | Viabilidad |
| **δ** diversidad | nº de casos **estructuralmente distintos** en un lote nocturno de 1 M de candidatos, con hash de (solución canónica + multiconjunto de tipos de pista + huella del certificado) | Que no se repitan. Es el aviso de V14 aplicado a todo |
| **β** ajuste de banda | fracción de los válidos que cae en la banda de dificultad del día en que vive la mecánica | Que sirvan para el calendario, no solo para existir |

```
VERDE  (se construye)                τ ≥ 1 %   y  δ ≥ 1.000   y  β ≥ 30 %
ÁMBAR  (se construye con repliegue escrito y lote nocturno mayor)
                                     0,1 % ≤ τ < 1 %   o   β < 30 %
ROJO   (no se construye; entra el repliegue)
                                     τ < 0,1 %   o   δ < 200
```

`δ ≥ 1.000` sale de la demanda con margen ×10: bajo la arquitectura B, una mecánica semanal necesita 52 casos al año y unos 104 en dos años. `δ < 200` significa que el catálogo se agota antes de dos años y el jugador reconoce la estructura, que es el modo silencioso de que un juego diario se muera.

### 7.3 Las cuatro del diseñador, con mi prior y lo que de verdad se está midiendo

| Propiedad | Preajuste | Lo que de verdad filtra | Mi prior de τ | Nota |
|---|---|---|---|---|
| **MV-E** (E-7) | Clásico, `n=4` | Que exista una **estrategia adversaria** completa con el presupuesto, y MV-E2′ en todo estado alcanzable | **Desconocida. La única de riesgo real** | **Medir con TRES pistas de apertura** (§4.7). Con dos, τ = 0 por aritmética, no por generador |
| **CC** (E-1) | Ancho, `n=5` | **CC3**: la rama falsa muere en ≤3 pasos | 10-30 % | Se construye. CC4 es por diseño |
| **CT** (E-3) | Clásico, `n=4` | U + SA + NR sobre el espacio ampliado, y CT3 (paso «puente de tiempo» requerido) | 5-20 % | Se construye. La más incierta de las tres construibles |
| **MT** (E-5) | Clásico y Ancho | **MT3**: refutación ≤N4 con ≥2 pistas, elegida entre ~30 candidatas | **≈100 %** | El diseñador la teme sin motivo. Se mide igual, porque el número decide **cuántas** marcas se ponen |

### 7.4 Lo que hay que medir y no está en la lista

Cinco más, baratas, y dos de ellas pueden matar una promesa de calendario si salen mal:

| # | Qué | Por qué | Umbral |
|---|---|---|---|
| **C0-5** | **Catálogo del Vistazo** (`n=3`, `K=3`, 36 modelos, techo N2 estricto) | Es el mismo aviso que V14: con 36 modelos puede no haber suficientes casos con U + NR + techo N2. Si salen menos de 200, **el mini de Expediente es semanal, no diario** | δ ≥ 200 para diario; δ ≥ 60 para semanal |
| **C0-6** | **PU2 en E-6** (soporte minimal único con 4 distractores) | Es el filtro real del expediente invertido y nadie lo ha estimado | τ ≥ 1 % con distractores **construidos** |
| **C0-7** | **DV2′ en E-8** | Exige que el último peldaño sea el que decide. Es filtrable, no construible | τ ≥ 2 % (es mensual: 12 al año) |
| **C0-8** | **Banda del domingo por debajo de la del sábado** | El diseñador lo declara como regla («el domingo es el más grande y no el más duro») y solo se sabe midiendo el certificado de los dos preajustes | La mediana de `nivel_max` y `pasos` del XL < la del Ancho, en 1.000 casos de cada uno |
| **C0-9** | **Prueba del veterano** (NR-M, §5) | Es la única forma de comprobar que el reparto recurrente no filtra | acierto(B) − acierto(A) ≤ 2 puntos sobre 1.000 casos |

**Coste de la Compuerta 0 completa: 1,5 días** de instrumentación y ejecución, y no se construye ninguna de las cuatro mecánicas antes de tener su número. Es el mismo bloque que en Escena, y por el mismo motivo: **evita gastar quince días en una mecánica que el generador no sostiene**.

---

## 8. Orden de construcción combinado Escena + Expediente

### 8.1 Qué se comparte y qué es propio

| Pieza | Escena | Expediente | Compartido |
|---|---|---|---|
| **X0** Núcleo de máscaras (enumerador + álgebra de bitsets) = **M0 + M7 + M12 fusionados** | sí | sí | **100 %.** 2 días en total, no 3,5 en tres módulos |
| **M1** DSL: interfaz de predicado, `sat`, `mask`, `cells`, negación, tests, **NV** | maquinaria | maquinaria | **maquinaria sí, catálogos no.** 2 días Escena + 2 Expediente |
| **M2** Generador: solución primero, semilla, banco, greedy, NR, lote, CLI | sí | sí | **esqueleto sí** (3 días Escena), bancos propios (+2 Expediente) |
| **M3** Escalera + certificado: bucle, niveles, rama N4, TR, serialización | sí | sí | **motor sí** (4-5 días Escena), catálogos propios (+3 Expediente) |
| **Certificado** (§6.2) | sí | sí | **100 %**, con localizador polimórfico. **0,5 días, ahora** |
| **MV** motor de árbol AND-OR con memoización y deduplicación por partición | V4 | E-7 | **100 %.** 2 días una vez |
| **M5** Dificultad | métrica sí | métrica sí | métrica compartida, **bandas calibradas por modo** |
| **M6** Validación narrativa: retraducción, entidades, decorados, presupuesto de texto | sí | sí | maquinaria sí (3 días), plantillas propias (+1) |
| **M11** Lote con restricciones entre casos | V12, V22 | domingo de la conspiración | **100 %**, 1,5 días |
| **M4** `cells()` | contrato | contrato | contrato sí, implementación por predicado |
| **M9** Grafo de habitaciones | **propio de Escena** | no se usa: es atributo o tira de orden | — |
| **M8** Doble franja | **propio de Escena** | — | — |
| **M10** Variables auxiliares | V2, V7 | E-3, E-4 | **sí**, 2 días |
| Cuaderno booleano ↔ permutaciones, canal y test de acuerdo | — | **propio** | 1 día |
| `givens` con tres regímenes | V16 (`board.blocked`) | **propio** (§4.5) | parcial, 0,5 |

**Lo que Expediente le devuelve a Escena**: X0 tal como lo describo aquí (enumerar y operar con máscaras) nació de mirar el techo `n ≤ 5`, y **también sirve para Escena entera**, incluida la doble franja 6×6 (518.400 modelos, dentro de CAP). Fusionar M0, M7 y M12 en X0 ahorra **1,5 días netos en Escena** respecto de lo que presupuesté en el dictamen anterior.

### 8.2 Días por bloque

| Bloque | Contenido | Días | Al final de este bloque… |
|---|---|---|---|
| **B-0** · Congelar contratos | Certificado agnóstico (§6.2) + esquema de caso de los dos modos + contrato del DSL (`sat`, `mask`, `cells`, `¬`, NV) | **1** | Nadie tendrá que retrofitar nada. **Es lo único con fecha límite: antes de la primera línea del solver de Escena** |
| **B-1** · Núcleo | **X0** (2) + M1 Escena (2) + M2 esqueleto (3) | **7** | Escena publicable con U + NR. Y U, NR, EN, PU, CP, soportes mínimos disponibles para los dos modos |
| **B-2** · La llave | **M3** escalera + certificado + rama N4 (5) + M4 (0,5) | **5,5** | Se puede afirmar «sin adivinar» y «dificultad medida». 12 familias de Escena a un día de distancia |
| **B-3** · Expediente base | M1 Expediente T1-T9 + NV (2) + cuaderno↔permutaciones (1) + generador Expediente (2) + escalera de 14 técnicas (3) + `givens` (0,5) + M6 plantillas (1) | **9,5** | **Expediente publicable con las mismas garantías que Escena.** Aquí ya existe el jueves |
| **B-4** · Lo barato y visible de Expediente | E-10 contraprueba (0,5) + E-2 motivo (0,5) + E-11 rueda (0,25) + E-12 recuento corregido (0,5) + E-5 tabla del comisario (1) + Sabueso modo MT5 (0,25) | **3** | **El jueves y el domingo con carácter.** Cinco mecánicas, ninguna toca el generador de forma arriesgada |
| **B-5** · Compuerta 0 | Instrumentación y ejecución de las nueve medidas de §7 | **1,5** | Tres o cuatro informes de tasa. **Nada de B-7 se construye antes** |
| **B-6** · Estructura de Expediente | E-9 orden (1) + E-4 objeto perdido (1) + E-1 coartada cruzada (1,5) + E-8 doble víctima (0,5) | **4** | Sábado, viernes y los especiales mensuales |
| **B-7** · Lo caro y lo condicionado | MV motor compartido (2) + E-7 vis a vis (3) + E-3 cadena de custodia (2) + E-6 invertido (2) | **9** | Solo lo que la Compuerta 0 haya puesto en verde |

**Expediente completo: ~27 días** incrementales, de los cuales **~14 son el bloque mínimo** (B-0 + B-3 + B-4, más su parte de B-1 y B-2). El diseñador estimaba 19-21 incrementales sobre V24 (3), es decir 22-24: estamos en el mismo orden y yo soy algo más caro, sobre todo en la escalera de 14 técnicas y en el canal cuaderno↔permutaciones, que él no presupuesta.

**Una corrección a `producto`.** Su §1.5 estima «≈14,5 días de agente incrementales» para las siete piezas de «tan avanzado como Escena», y ese número incluye **6,5 días de frontend** (rejilla táctil 3, reconstrucción 1,5, tutorial 0,5, exportador 1,5), dejando **8 días de motor**. Mi estimación para el mismo alcance es **~14 de motor**. La diferencia está casi entera en dos partidas que no aparecen en su cuenta: la **escalera propia de Expediente con sus catorce técnicas** (él la cifra en 3, yo en 3 más el canal de representación y los `givens`) y el **generador propio con sus bancos por familia**. Dicho en claro: **`producto` subestima el motor de Expediente en unos 6 días.** No cambia su recomendación de arquitectura, pero sí el calendario de la fase 2.

### 8.3 Qué desbloquea más

| Puesto | Pieza | Días | Qué toca | Ratio |
|---|---|---|---|---|
| 1 | **B-0 · Contratos congelados** | 1 | Impide retrofit en 7 piezas de producto de los dos modos | **el único con fecha límite** |
| 2 | **X0 · Núcleo de máscaras** | 2 | U, NR, EN, PU, CP, MT, CC, DV, soportes mínimos, residuo de MV, NV, NC — **13 propiedades, dos modos** | **6,5** |
| 3 | **M3 · Escalera + certificado** | 5,5 | 12 familias de Escena + escalafón, reconstrucción, Sabueso, contraprueba, OD-E, TR de Expediente | **~3** |
| 4 | **M1 Expediente + cuaderno** | 3 | Todo Expediente | (obligatoria) |
| 5 | **MV compartido** | 2 | V4 + E-7, las dos firmas de interrogatorio | 1,0 |
| 6 | **M11 lote entre casos** | 1,5 | V12, V22, domingo de la conspiración | 2,0 |

**La respuesta corta al encargo: X0 primero, y B-0 el mismo día.** X0 es la pieza que en el dictamen de Escena estaba repartida en tres módulos y que el techo de Expediente convierte en una sola primitiva; escribirla primero hace que trece propiedades de los dos modos sean `popcount` en vez de módulos. M3 sigue siendo la llave del producto —sin ella no hay «sin adivinar», ni dificultad medida, ni escalafón, ni reconstrucción, ni Sabueso, ni contraprueba—, pero **X0 es la llave del motor**, y M3 se apoya en ella.

---

## 9. Lo que no se puede garantizar, dicho sin rodeos

1. **MV-E con dos pistas de apertura y cuatro fichas.** No es una tasa baja: es aritmética. Cuatro fichas distinguen 16 modelos como máximo y dos pistas dejan 36. La firma X-A necesita **tres pistas de apertura** (o seis fichas) antes de que se mida nada. §4.7.
2. **El recuento de E-12 tal como está redactado.** «Exactamente dos de ellos estaban arriba» es idénticamente verdadero bajo biyección. La mecánica se salva entera con CNT5 (contar intersecciones), pero la forma canónica publicada hoy produciría casos con una pista que no dice nada. §2.3.
3. **La forma canónica de T7 tal como está en la taxonomía.** «El jardín está más lejos de la entrada que la galería» es tablero, no pista. §2.2.
4. **Que la regla del guionista baste para el reparto recurrente.** Cubre el canal que no filtraba y deja abiertos dos que sí: el personaje quemado que reaparece como sospechoso, y el motivo que coincide con el secreto canon. §5.
5. **El domingo `5×5×5 + motivo` de `producto`.** 1,7 millones de modelos y 150 casillas. El XL es `n = 4` con cuatro categorías. Y el domingo de la conspiración con seis culpables exige `n = 6`, que está prohibido dos veces. §4.17.
6. **Las tasas de MV-E, CT, DV y PU2.** Hoy no las sabe nadie, yo tampoco. Son medibles en día y medio y hasta entonces E-7, E-3, E-8 y E-6 son apuestas, no compromisos. En cambio **MT y CC son mejores de lo que el diseñador teme** y CC4/MT2 se cumplen por construcción, no por suerte.
7. **La velocidad del escalafón de Expediente.** Con dos días a la semana y dos técnicas atadas a mecánicas mensuales, catorce técnicas a tres casos cada una no se completan en menos de un año. Es un dato de producto, no un fallo de motor, pero conviene no prometerlo.
8. **Que la retraducción de un texto de IA sea una prueba.** Igual que en Escena: es una heurística fuerte con mitigaciones, no una demostración. Aquí el riesgo es mayor porque el vocabulario cerrado de Expediente tiene nueve familias con formas canónicas muy parecidas entre sí, y confundir una T5 con una T6 en la retraducción no salta a la vista.

---

## 10. Preguntas abiertas

### Para `disenador-puzzles`

**10.1 CNT5 y la forma canónica del recuento.** ¿Se acepta que `cuenta` cuente siempre la intersección de dos propiedades independientes, y se reescribe la forma canónica de T8 y el ejemplo de E-12? Si se prefiere conservar la redacción actual, la alternativa es que las categorías dejen de ser biyectivas, y eso rompe la única regla que el jugador sabe sin tutorial. **Confirmar.**

**10.2 La forma canónica de T7.** ¿Se cambia a «X estaba más lejos del origen que Y» (sobre personas) y se prohíbe la comparación entre lugares? **Confirmar.**

**10.3 E-7: tres pistas de apertura o seis fichas.** Es la decisión que hay que tomar antes de la Compuerta 0. Mi recomendación es tres pistas de apertura y cuatro fichas, porque conserva el coste asimétrico y la decisión de estrategia. **Confirmar.**

**10.4 OP3.** ¿Se sustituye por OP3′ (la técnica «cuenta del hueco» es requerida, en el sentido de TR)? OP3 tal como está no compara dos estados del mismo problema. **Confirmar.**

**10.5 Los tres regímenes de `givens`.** ¿Se acepta `informativo` / `entrañado` / `falso` como campo del esquema, con la regla de que el falso nunca entra en el sistema formal? **Confirmar**, porque afecta a cómo se calcula NR.

**10.6 La técnica que falta.** La «pareja atada que cruza bloques» (§6.1, punto 2) aparecerá sola en los casos generados. ¿Entra en la lista de catorce (que pasaría a quince) antes de la prueba X1 con personas, o se deja como variante de la técnica 7? Prefiero que entre antes de la prueba: renombrar después es más caro. **Confirmar.**

**10.7 CT4.** ¿Se exige que la pareja que intercambia sea deducible, y no solo la asignación final de objetos? Sin ello, el control de dos huecos del cuaderno puede quedar sin respuesta única. **Confirmar.**

**10.8 RR y la dificultad.** ¿Se acepta etiquetar la rueda de reconocimiento como `N1+lectura` en el certificado, de modo que sume pasos pero no nivel? **Confirmar**, porque si no la medida de dificultad se infla en los casos con testigo.

### Para `director-producto`

**10.9 El domingo XL.** El calendario de la §1.4 de su documento dice `5×5×5 + motivo`, que está fuera del techo por dos vías independientes. La corrección es `n = 4` con cuatro categorías (96 casillas, el doble que el jueves). **Cerrar en `docs/decisiones.md`.**

**10.10 El domingo de la conspiración (E4).** Con seis culpables de la semana hacen falta seis elementos, que está prohibido. Las dos salidas son cuatro culpables con motivo, o cinco sin motivo. Y no es gratis: exige M11. **Cerrar.**

**10.11 El presupuesto de motor de la fase 2.** Su §1.5 cifra el conjunto en 14,5 días incluyendo frontend; mi cuenta para el mismo alcance es ~14 solo de motor. **Revisar el calendario de la fase 2 con el número corregido**, no la decisión de arquitectura, que no cambia.

### Para `guionista-misterio`

**10.12 NR-M2 y NR-M3.** El estado «quemado» debe significar «no aparece como sospechoso», sin la coletilla de «puede reaparecer pero no como culpable». Y la tabla `canon-soporta(motivo, personaje)` es un entregable suyo que el validador necesita para comprobar NR-M3. **Confirmar los dos.**

---

## 11. Qué escribo yo a continuación, cuando se apruebe esto

| Orden | Entregable | Dónde | Contenido |
|---|---|---|---|
| **1** | **Contrato de certificado agnóstico del modo** | `docs/specs/certificado.v1.json` + `docs/motor.md` §3 | §6.2 entero, con los tres invariantes y el localizador polimórfico. **Antes que ninguna otra cosa** |
| **2** | Contrato del DSL, los dos modos | `docs/motor.md` §1 + `engine/schema/clue.v1.json` | Predicado a predicado: `sat`, `mask`, `cells`, negación, redacción canónica única, test. Con la lista negra de §2.3 en el sistema de tipos y **NV** en el generador |
| **3** | Formato de caso de Expediente | `engine/schema/case.expediente.v1.json` | El esquema del diseñador §6.1 con: `givens.regimen`, `board.order.topologia`, `board.extra` para INJ, `mecanica.params` tipado, `certificado`, y **CAP comprobado en el validador** |
| **4** | Especificación de la escalera de Expediente | `docs/specs/escalera-expediente.md` | Las 14 (o 15) técnicas con su regla de detección, los tres patrones del triángulo, el modo rama para N4 |
| **5** | Informes de la Compuerta 0 | `docs/specs/compuerta0-expediente.md` | Las nueve medidas de §7 con τ, δ y β, y el veredicto verde/ámbar/rojo por mecánica |
| **6** | Cómo se valida un texto de IA en Expediente | `docs/motor.md` §4 | Nueve familias, formas canónicas, retraducción contrastada, presupuesto de texto, límites de la garantía |

---

*Cambios a este documento: los registra `ingeniero-motor-puzzles`. Las decisiones de §10.1-10.8 las cierra `disenador-puzzles`; las de §10.9-10.11, `director-producto` en `docs/decisiones.md`; las de §10.12, `guionista-misterio`.*
