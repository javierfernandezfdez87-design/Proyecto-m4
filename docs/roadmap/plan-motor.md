# Plan de área: motor de puzzles

Autor: `ingeniero-motor-puzzles`. Fecha: 7 de septiembre de 2026. Versión 1.0.
Base: `docs/roadmap/supuestos.md`, `docs/motor-viabilidad-jugabilidad.md` (Escena, 24 familias), `docs/motor-viabilidad-expediente.md` (Expediente, orden combinado §8), `docs/propuesta-jugabilidad.md` §5 y `docs/propuesta-jugabilidad-expediente.md` §9.
Estado del código al escribir esto: **cero**. `engine/` no existe. Todo lo que sigue son estimaciones, no medidas.

**Aviso de marca (D-006).** Revisados los cinco disparadores sobre este material: **ninguno se cumple hoy**. Pero este plan llega al lanzamiento público y al plan de contenidos con nota de prensa, y **una mención en prensa es disparador**. Consecuencia operativa para el calendario, no alerta activa: el expediente de la OEPM (clases 9 y 41) tiene que estar presentado **antes de la semana 8**, que es cuando empieza la comunicación del lanzamiento. Si no, el disparador nos pilla sin preparar.

---

## 0. Cómo leer este plan

### 0.1 Numeración

Los ids **M-01 … M-57** son tareas de este roadmap. **No confundir con las piezas M0-M12** de los dictámenes (M0 solver, M1 DSL, M3 escalera…), que son módulos de arquitectura y siguen llamándose igual dentro de las tareas. Cuando una tarea implementa una pieza, la pieza aparece citada en el texto de la tarea.

### 0.2 Semanas y fechas

`supuestos.md` ancla la beta en la **semana 7 = 19-25 de octubre**. Esa fecha obliga a que la semana 1 sea **7-13 de septiembre** (el 19 de octubre de 2026 es lunes; seis semanas antes es lunes 7 de septiembre). El propio documento dice «lunes 8 de septiembre», que es martes: **desfase de un día que `director-producto` debería corregir en `supuestos.md`**. Aquí uso el anclaje de la semana 7, que es el que tiene consecuencias.

| Semana | Fechas | Hito |
|---|---|---|
| S1 | 7-13 sep | Contratos congelados |
| S2 | 14-20 sep | Escena con U+NR |
| S3 | 21-27 sep | Escalera y certificado: «sin adivinar» demostrable |
| S4 | 28 sep - 4 oct | Reconstrucción, Sabueso, sobres, motor MV |
| S5 | 5-11 oct | **Compuerta 0-A: decisión del interrogatorio.** Los 7 días de Escena |
| S6 | 12-18 oct | Validación narrativa, pipeline, lote 1 (28 casos) |
| **S7** | **19-25 oct** | **Beta cerrada, 100-300 personas.** Expediente base parte 1 |
| S8 | 26 oct - 1 nov | Escalera de Expediente, el jueves, Compuerta 0-B |
| **S9** | **2-8 nov** | **Lanzamiento público.** Interrogatorio si verde, lote 2 (92 casos) |
| S10 | 9-15 nov | Escalafón, guardia de lanzamiento, estabilización |

### 0.3 Supuesto de capacidad (el número que sostiene todo el plan)

`supuestos.md` pide días de agente y horas del fundador, y D-009 dice que el cómputo no es la restricción. Traducido a un número explícito, que es lo que falta para que este plan sea comprobable:

> **M-CAP · 8 días de agente por semana de motor.** Un «día de agente» es una sesión enfocada con tests verdes y documentación mínima, no una jornada humana; ocho por semana son dos sesiones diarias de lunes a viernes con margen. Total S1-S10: **80 días de agente**.

**El trabajo comprometido hasta el lanzamiento suma 77,5 días, más 2,5 de reserva de estabilización: 80 exactos.** El plan no tiene holgura. Por eso la §9 lleva una lista de repliegue ordenada con los días que recupera cada corte, y por eso digo el número en vez de esconderlo en una tabla. Si la capacidad real resulta ser 6 días/semana, el lanzamiento se va a la semana 13 salvo que se aplique el repliegue.

Horas del fundador: **30 horas** en diez semanas (aprobaciones, resolución a ciegas, prueba de nombres con 5 personas, firma humana de 120 casos, veredictos de compuerta, revisión semanal).

### 0.4 Las tres promesas y dónde se ganan

La regla 3 del proyecto promete tres cosas y hoy no podemos sostener dos:

| Promesa | Se gana en | Semana |
|---|---|---|
| Solución única (U) y no redundancia (NR) | M-04 + M-06 (DSL + generador sobre el núcleo de máscaras) | **S2** |
| Se resuelve sin adivinar (SA) | **M-11 (M3, escalera + certificado)** | **S3** |
| Dificultad medida | M-15 (M5 sobre el certificado) | **S4** |

Hasta la semana 3, cualquier documento del proyecto que diga «sin adivinar» o «dificultad medida» está afirmando una intención. Lo digo aquí para que nadie lo escriba en una landing antes de tiempo.

---

## 1. La ruta crítica del motor

**La cadena que no admite paralelismo ni atajos**, 36 días de trabajo estrictamente secuencial de los 77,5 comprometidos:

```
M-01 contratos (1,5)  →  M-03 núcleo de máscaras X0 (2)  →  M-04 DSL de Escena (2,5)
  →  M-06 generador de Escena (3)  →  M-11 ESCALERA + CERTIFICADO (5)
  →  M-15 dificultad medida (2)    →  M-27 validación narrativa (2,5)
  →  M-30 pipeline de publicación (3)  →  M-32 lote 1: la beta tiene contenido (1)
  →  M-34 DSL de Expediente (2,5)  →  M-35 cuaderno↔permutaciones (1)
  →  M-36 generador de Expediente (2,5)  →  M-38 escalera de Expediente (3)
  →  M-39 el jueves (3)  →  M-43 lote 2: los 120 casos (1,5)
```

Cinco cosas que decir sobre ella:

1. **M-01 es lo único con la fecha límite ya corriendo.** Congelar el certificado agnóstico del modo, el esquema de caso y el contrato de predicado cuesta **1,5 días ahora y 3 días de retrofit** si se hace después de escribir el solver, en siete piezas de producto de los dos modos (reconstrucción, escalafón, Sabueso, contraprueba, pásale tu caso, imprimible, paso a paso). No se escribe una línea de solver antes.
2. **M-11 (M3) es la tarea indivisible más larga y la que más desbloquea.** Cinco días que habilitan total o parcialmente doce familias de Escena y todo el escalafón, la reconstrucción, Sabueso, los sobres, la contraprueba y la medida de dificultad de los dos modos. Si M-11 resbala una semana, resbala el lanzamiento entero: no hay forma de adelantar trabajo por otro lado.
3. **X0 (M-03) es la mejor inversión del proyecto y ya está descontada.** Fusionar M0+M7+M12 en un núcleo de enumeración con álgebra de máscaras convierte trece propiedades de los dos modos (U, NR, EN, PU, CP, MT, CC, DV, NV, NC, soportes mínimos, residuo de MV, entrañamiento) en dos `popcount`. Ahorra 1,5 días netos frente al presupuesto del dictamen de Escena. Dos días, y va antes que el DSL.
4. **El eslabón más tenso no es Escena: es Expediente.** Sus 12 días de base (M-34 a M-36 y M-38 a M-39) caen entre la apertura de la beta y el lanzamiento, y dejan **un solo jueves de beta** (29 de octubre) antes de publicar. Es el riesgo número uno de este plan y la §9 lleva su repliegue.
5. **La Compuerta 0 se parte en dos y la mitad que decide el lanzamiento va antes.** La tasa de MV (interrogatorio de Escena, el miércoles) se mide en **S5**, una semana antes del límite de la semana 6, porque solo necesita Escena y el motor MV. Las de Expediente (MV-E, CC, CT, MT) se miden en **S8**, cuando existe el generador que las produce; ninguna de ellas condiciona el lanzamiento, condicionan la fase 2.

---

## 2. Compuertas del área

Ninguna semana empieza si la compuerta anterior está roja. Los umbrales están fijados **antes** de ver el dato, como pide D-010.

| Compuerta | Cuándo | Qué debe cumplirse para pasar | Si no se cumple |
|---|---|---|---|
| **C-A · Contratos** | fin S1 | `certificado.v1.json`, `case.v1.json` y `clue.v1.json` publicados y aprobados por `disenador-puzzles` y `desarrollador-frontend`; ningún predicado de la lista de degeneración se puede construir | Se para el solver. Programar sobre un contrato abierto es el retrofit de 3 días |
| **C-B · U+NR** | fin S2 | 1.000 casos 4×4 y 5×5 generados: **100 % con exactamente una solución**; quitar cualquier pista rompe U en el 100 %; misma semilla = mismo caso; ≥2.000 casos válidos/minuto | Se para todo. Es el suelo del producto |
| **C-C · SA + dificultad** | fin S3 | Certificado emitido para el 100 % de los casos publicables; **cero casos publicados con paso N5**; escalera y residuo de máscaras coinciden en 10.000 casos | No se puede afirmar «sin adivinar». Se retira la frase de todas las páginas hasta que pase |
| **C-0A · MV (interrogatorio)** | **S5, límite S6** | τ ≥ 1 % · δ ≥ 1.000 · β ≥ 30 % sobre 10.000 candidatos 4×4 | **El miércoles se lanza como «clásico»** (§9.2) y el interrogatorio pasa a fase 2. Se ahorran 4 días |
| **C-D · Beta con contenido** | fin S6 | 28 casos de Escena + 28 vistazos generados, validados, etiquetados, con certificado y **firmados por el fundador**; pipeline sirviendo por calendario; la solución no viaja en claro | La beta se retrasa. No se abre una beta con contenido sin firmar |
| **C-0B · Expediente** | S8 | τ/δ/β de MV-E, CC, CT, MT + C0-5, C0-7, C0-8, C0-9 | Cada mecánica en rojo entra en su repliegue. Ninguna condiciona el lanzamiento |
| **C-E · Jueves de Expediente** | fin S8 | Un jueves completo publicado en beta con U+SA+NR, tabla del comisario y contraprueba; test de acuerdo cuaderno↔residuo verde | **El jueves del lanzamiento se publica como Escena «a puerta cerrada»** (V16, ya construido en S2) y Expediente entra en la semana 11 |
| **C-F · Lanzamiento** | fin S9 | 120 casos en calendario con etiqueta recalculable; cero incidencias de unicidad en la beta; contrato de API cerrado con backend | Se lanza con el archivo más corto y se rellena semanalmente |

---

## 3. Tabla de tareas · Semanas 1-6 (hasta la beta)

Columnas según `supuestos.md` §13. «Días» son días de agente; «h.f.» son horas del fundador.

| id | Tarea | Entregable (ruta) | Días | h.f. | Dependencias | Inicio | Fin | Hecho cuando | Riesgo |
|---|---|---|---|---|---|---|---|---|---|
| **M-01** | **Congelar contratos**: certificado agnóstico del modo (localizador polimórfico, `rama`, `premisas.pasos`), esquema de caso de los dos modos, contrato de predicado del DSL (`sat`, `mask`, `cells`, `¬`), CAP/NV/NC como invariantes del validador | `docs/specs/certificado.v1.json`, `engine/schema/case.v1.json`, `engine/schema/clue.v1.json`, `docs/motor.md` §1-3 | 1,5 | 1 | Respuestas 7.1, 7.2, 7.4 y 10.5 de `disenador-puzzles` (§8) | S1 | S1 | El renderizador de Escena puede escribirse contra el JSON sin transformarlo y el de rejilla sin tocarlo. Los tres invariantes del certificado tienen test | **Alto si se salta**: 3 días de retrofit en 7 piezas de producto |
| **M-02** | Andamiaje `engine/`: TypeScript, tests, CI, semilla determinista, esqueleto de CLI, README | `engine/`, `engine/README.md` | 1 | 0 | — | S1 | S1 | `npm test` verde en CI; `engine --version` responde | Bajo |
| **M-03** | **X0 · Núcleo de máscaras**: enumerador de `M₀`, bitsets, `residuo`, `popcount`, U, NR, entrañamiento, soportes mínimos, NV, NC, CAP. Fusiona M0+M7+M12 | `engine/core/`, `docs/motor.md` §2 | 2 | 0 | M-01 | S1 | S1 | Las 13 propiedades son una llamada de una línea; `\|M₀\|` se comprueba antes de enumerar y rechaza el preajuste si supera 150.000 | Bajo. Es la pieza mejor entendida |
| **M-04** | **M1 · DSL de Escena**: catálogo de predicados con `sat`, `mask`, `cells(pista, estado)`, negación y test unitario por predicado; auditoría de degeneración en el sistema de tipos; NV en el banco | `engine/dsl/escena/`, `engine/schema/clue.v1.json`, `docs/motor.md` §1 | 2,5 | 1 | M-01, M-03, **§8 preguntas 1-3** | S1 | S1 | Ningún predicado idénticamente verdadero o falso se puede **construir**; `cells()` existe desde el primer predicado, no se retrofita | **Medio**: `pegado` y `ve(A,B)` sin cerrar bloquean esta tarea |
| **M-05** | Tests de propiedad del núcleo y banco de benchmarks | `engine/test/propiedades/`, `engine/bench/` | 1 | 0 | M-03, M-04 | S1 | S1 | Las cinco propiedades de §6.1 corren en CI sobre 1.000 casos por preajuste | Bajo |
| **M-06** | **M2 · Generador de Escena**: solución primero con semilla, banco de pistas verdaderas, greedy, eliminación de redundantes, diversidad de tipos, lote | `engine/gen/escena/` | 3 | 0 | M-04, M-05 | S2 | S2 | 1.000 casos generados cumplen U+NR al 100 %; misma semilla, mismo caso | Medio: tasa de aceptación del greedy con NR |
| **M-07** | **CLI del motor**: `generar`, `validar`, `inspeccionar`, `resolver`, y **modo a ciegas** para que el fundador y QA resuelvan un caso sin ver la solución ni el certificado | `engine/cli/`, `engine/README.md` | 1,5 | 2 | M-06 | S2 | S2 | El fundador resuelve tres casos a ciegas desde la terminal y el motor registra tiempo, pasos y si usó Sabueso | Bajo. Es la única forma de que QA vea lo que ve el jugador antes de que exista el frontend |
| **M-08** | **M9 grafo de habitaciones** (adyacencia real, plantas, escalera, distancias precalculadas) + **V16 celdas bloqueadas** (`board.blocked`, comprobación de existencia antes de generar) | `engine/board/`, `engine/dsl/escena/` | 2 | 0 | M-04, respuesta 7.5 de `disenador-puzzles` | S2 | S2 | El jueves «a puerta cerrada» se genera; el generador nunca entra en bucle por un tablero sin colocación posible | Medio: con celdas bloqueadas caen las soluciones base y NR se vuelve más difícil |
| **M-09** | Esquema de caso implementado y validado + **hash de solución con sal**; la solución nunca sale en claro del servidor | `engine/schema/`, `engine/publish/hash.ts` | 1 | 0 | M-01, M-06 | S2 | S2 | Un caso serializado valida contra `case.v1.json`; el paquete que consume el cliente no contiene la solución | Bajo. Con la honestidad ya escrita: el residuo es derivable en cliente, ocultarlo sube el listón, no es una garantía |
| **M-10** | Benchmark de lote y perfilado | `engine/bench/`, `docs/motor.md` §7 | 0,5 | 0 | M-06 | S2 | S2 | ≥2.000 casos válidos por minuto y preajuste; el informe dice dónde se va el tiempo | Bajo |
| **M-11** | **M3 · Escalera humana + certificado**: bucle de punto fijo N1-N4, rama N4 con sub-certificado, rechazo de N5, serialización del certificado | `engine/ladder/`, `docs/specs/escalera-solver.md` | **5** | 1 | M-06, M-01 | S3 | S3 | Todo caso publicable trae certificado; **cero casos con paso N5**; el frontend pinta la reconstrucción con el JSON sin transformarlo | **El más alto del plan.** Es la tarea indivisible más larga y de ella cuelga todo lo visible |
| **M-12** | **M4** · `cells(pista, estado)` completado predicado a predicado (tirar del hilo) | `engine/dsl/escena/` | 0,5 | 0 | M-04, M-11 | S3 | S3 | Tocar una pista devuelve el conjunto exacto de celdas que restringe en el estado actual | Bajo si se escribe ahora; 3 días si se deja para después |
| **M-13** | Test de acuerdo **escalera ↔ residuo de máscaras** | `engine/test/propiedades/acuerdo.test.ts` | 0,5 | 0 | M-11, M-03 | S3 | S3 | En 10.000 casos, el cierre de la escalera coincide con el cuaderno inducido por el residuo | Bajo, y es el test que encuentra el 90 % de los errores de un motor de cuadrícula |
| **M-14** | **TR · Técnicas requeridas**: qué técnicas exige el caso (desactivación una a una) + huella de caso | `engine/ladder/tr.ts` | 1 | 0 | M-11 | S3 | S3 | Cada caso lleva su lista de técnicas requeridas; el cálculo es `\|T\|` ejecuciones y tarda menos de un segundo | Bajo |
| **M-15** | **M5 · Medida de dificultad**: métrica sobre el certificado (pasos, nivel máximo, ancho del árbol de casos), **etiqueta recalculable**, banco de calibración, bandas provisionales | `engine/difficulty/`, `docs/motor.md` §5 | 2 | 0 | M-11, M-14 | S3 | S4 | La etiqueta es un campo recalculable del caso, no un valor congelado; se puede reetiquetar el archivo entero de una pasada | **Medio**: la primera calibración estará mal por definición. Se marca «provisional» en administración, nunca en la interfaz del jugador |
| **M-16** | **V17 · Reconstrucción**: serialización estable del certificado y sus tres invariantes | `engine/ladder/serialize.ts`, `docs/specs/escalera-solver.md` | 1 | 0 | M-11, M-01 | S4 | S4 | `estado_resultante(k) = aplicar(efectos(k), estado(k-1))`; toda pista aparece en algún `premisas.pistas` | Bajo. Mejor relación valor/coste del proyecto |
| **M-17** | **V11 · Sabueso de dos niveles** + política de tablero imposible (escalera desde el estado inicial hasta el último peldaño compatible) | `engine/hint/` | 1,5 | 0 | M-11, M-12, respuesta 7.8 (`disenador-ux-ui`) | S4 | S4 | Sabueso nunca da señal de error, ni siquiera con el tablero del jugador ya contradictorio; un uso por caso | Medio: la política hay que confirmarla con UX antes de implementarla |
| **M-18** | **V8 probado / ganado por poco** + **guarda OR**: línea 13 del checklist y test de no filtración por interacción (sobres, Sabueso, menú, comprobar) | `engine/verify/or.ts`, `docs/motor.md` §6 | 0,5 | 0 | M-11 | S4 | S4 | Ninguna interacción del juego da información sobre la solución con menos razonamiento del que exige el certificado, y hay un test que lo comprueba por interacción | **Alto si se ignora**: OR es el riesgo que ningún test de unicidad detecta |
| **M-19** | **V6 · Sobres por progreso (OD)**: ordenación de pistas por prefijos con umbrales, verificación de OD | `engine/gen/escena/sobres.ts` | 2 | 0 | M-11, M-06 | S4 | S4 | El lunes se genera; el desbloqueo cuelga del **progreso**, nunca del acierto (si no, viola OR) | Medio: puede que muchos candidatos no admitan ninguna ordenación con OD. Se descarta el candidato, no se rebaja el umbral |
| **M-20** | **Motor MV compartido**: árbol AND-OR con **lectura universal**, memoización por bitset del residuo, deduplicación de preguntas por partición | `engine/mv/` | 2 | 0 | M-03, M-11 | S4 | S4 | `ofrecible(q,E,p)` se calcula en milisegundos sobre un residuo de decenas; sirve a V4 (Escena) y a E-7 (Expediente) sin duplicarse | Medio. Es la pieza que la Compuerta 0-A necesita para poder medir |
| **M-21** | **Compuerta 0-A · MV**: instrumentación de τ, δ y β y ejecución sobre 10.000 candidatos 4×4, con menú de 4 plantillas y de 2 | `docs/specs/compuerta0-escena.md` | 1,5 | 1 | M-20, M-06, M-11 | S5 | S5 | Informe con los tres números y veredicto verde/ámbar/rojo. **Decide si el interrogatorio entra en el lanzamiento** | **Riesgo de resultado, no de ejecución.** La tasa hoy no la sabe nadie |
| **M-22** | **V15 · Casa de dos plantas** (domingo): `justo_encima`, `planta`, `cuenta`, `mas_cerca_de` sobre distancia de grafo | `engine/dsl/escena/planta.ts` | 2 | 0 | M-08, respuesta 7.3 | S5 | S5 | El domingo 6×6 de dos plantas se genera con U+SA+NR y su banda medida **no es la más dura de la semana** | Bajo de lógica, medio de legibilidad |
| **M-23** | **V14 · El vistazo** 3×3 con techo N2 estricto + prueba de catálogo (δ) | `engine/gen/escena/vistazo.ts` | 0,5 | 0 | M-11, M-15 | S5 | S5 | Existen ≥200 vistazos estructuralmente distintos; si salen menos, el vistazo es semanal y no diario | Medio: con 6 soluciones base puede no haber catálogo para un mini diario |
| **M-24** | **M10 · Variables auxiliares**: objetos con trayectoria, atributos del ocupante, motivo | `engine/core/aux.ts` | 2 | 0 | M-03, M-04 | S5 | S5 | Una variable que no es «posición» entra en el enumerador y en la escalera sin tocar el solver | Bajo |
| **M-25** | **V2 · Rastro del objeto** (viernes): predicados ordinales y criterio RO | `engine/dsl/escena/rastro.ts` | 1,5 | 0 | M-24 | S5 | S5 | Al menos una habitación de la solución solo se determina por el objeto (resolver sin las pistas del objeto deja ≥2 modelos) | Medio: dos caminos independientes hacen que la eliminación de redundantes borre el rastro y el objeto quede de decoración |
| **M-26** | **V7 · El motivo como segunda fase**: micro-CSP de 3 candidatos y 2 pistas eliminatorias + comprobación de **no entrañamiento** | `engine/gen/motivo.ts` | 0,5 | 0 | M-24, M-03 | S5 | S5 | `pistas ∪ {motivo ≠ m*}` es satisfacible: el jugador no lo sabía ya | Bajo de motor, coste narrativo perpetuo |
| **M-27** | **M6 · Validación de la capa narrativa**: retraducción contrastada (N retraducciones concordantes), registro de entidades, existencia, concordancia, detección de sinónimos prohibidos | `engine/validate/narrativa/`, `docs/motor.md` §4 | 2,5 | 0 | M-04, **plantillas por predicado de `guionista-misterio`** | S6 | S6 | Ningún texto entra sin su forma formal; el conjunto formal retraducido da la misma solución única; toda entidad citada existe | **Alto**: la retraducción por IA es una heurística fuerte, **no una prueba**, y así hay que decirlo en todos los documentos |
| **M-29** | **Contrato de API con backend**: qué se sirve, qué no viaja nunca, versionado, verificación en servidor de duelos y marcadores | `docs/specs/api-motor.md` | 1 | 1 | M-09, **`desarrollador-backend`** | S6 | S6 | Backend puede modelar sus tablas sin preguntarme nada; la solución en claro no está en ningún payload | Medio: si el contrato se cierra tarde, backend programa contra un formato que cambia |
| **M-30** | **Pipeline de publicación diaria**: lote nocturno, deduplicación por hash (solución canónica + multiconjunto de tipos de pista + huella del certificado), calendario, cron, estados del caso, regeneración parcial | `engine/publish/`, `docs/motor.md` §8 | 3 | 0 | M-15, M-27, M-29 | S6 | S6 | Un cron nocturno llena el depósito, el calendario asigna día y formato, y ningún caso duplicado por estructura llega a publicarse | **Medio-alto**: es la pieza que **ningún dictamen presupuestó** y sin ella no hay juego diario |
| **M-31** | Panel de administración del motor en CLI: inspeccionar el calendario, sustituir un caso, forzar regeneración, ver métricas | `engine/cli/admin.ts` | 0,5 | 0 | M-30 | S6 | S6 | El fundador puede retirar un caso del calendario y ponerle otro sin tocar la base de datos | Bajo |
| **M-32** | **Lote 1: 28 casos de Escena (4 semanas) + 28 vistazos**, validados, etiquetados, con certificado, listos para la beta. **Firma humana del fundador** | `content/casos/`, `docs/motor.md` §8 | 1 | 2 | M-30, C-D | S6 | S6 | 28 casos en calendario, cero incidencias de unicidad, los 28 firmados | Medio: la etiqueta de dificultad es provisional y hay que decirlo en el informe interno |

**Total S1-S6: 48 días de agente, 9 horas del fundador.**

---

## 4. Tabla de tareas · Semanas 7-10 (beta y lanzamiento)

| id | Tarea | Entregable (ruta) | Días | h.f. | Dependencias | Inicio | Fin | Hecho cuando | Riesgo |
|---|---|---|---|---|---|---|---|---|---|
| **M-33** | Soporte de beta: instrumentación de métricas del motor para `analista-datos` (tiempo por paso, uso de Sabueso, abandono por peldaño), corrección de incidencias | `engine/telemetry/`, `docs/analitica/eventos.md` (aporte) | 1 | 1 | M-32 | S7 | S7 | Los eventos que necesita la recalibración de bandas salen desde el día 1 de la beta | Medio: sin estos eventos la recalibración de S9 no se puede hacer |
| **M-34** | **M1 · DSL de Expediente**: T1-T9 con `sat`, `mask`, `cells`, negación y test; **NV**; **CNT5/CNT6** (el recuento cuenta intersecciones); **T7 sobre `board.order`** con la forma canónica corregida | `engine/dsl/expediente/`, `engine/schema/clue.v1.json` | 2,5 | 0 | M-01, M-03, **§8.1 preguntas 6-8** | S7 | S7 | Ninguna forma idénticamente verdadera se puede construir; el recuento de E-12 y el ordinal de T7 quedan reescritos | **Alto si no se cierran las confirmaciones**: dos formas canónicas publicadas hoy son vacías |
| **M-35** | Canal **cuaderno booleano ↔ tupla de permutaciones** y su test de acuerdo | `engine/core/cuaderno.ts` | 1 | 0 | M-34, M-03 | S7 | S7 | El cierre del cuaderno bajo las técnicas coincide exactamente con el cuaderno inducido por el residuo, en 10.000 casos | Bajo, y es el test que más errores encuentra en un motor de cuadrícula |
| **M-36** | **Generador de Expediente**: bancos por familia, CAP comprobado en el validador, `givens` con los **tres regímenes** (informativo / entrañado / falso) | `engine/gen/expediente/` | 2,5 | 0 | M-34, M-35 | S7 | S7 | Los cuatro preajustes (Vistazo, Corto, Ancho, XL) generan con U+NR; la marca falsa **nunca** entra en el sistema formal | Medio: si los regímenes de `givens` se mezclan, U falla y el generador entra en bucle |
| **M-37** | **V23** · registro de decorados, identificadores estables de entidad, presupuesto de texto como criterio de publicación | `engine/validate/narrativa/decorados.ts` | 1 | 0 | M-27 | S7 | S7 | Un elemento reinterpretado por el «y sin embargo» está en el registro de decorados y **no aparece en ninguna pista**; un caso que se pasa de presupuesto de texto no se publica aunque cumpla U+SA+NR | Bajo |
| **M-38** | **Escalera de Expediente**: 12-15 técnicas propias con sus reglas de detección, las **tres orientaciones** del triángulo, la **pareja atada que cruza bloques** | `docs/specs/escalera-expediente.md`, `engine/ladder/expediente/` | 3 | 0 | M-35, M-11, respuesta §8.1 nº 9 | S8 | S8 | Todo Expediente publicable trae certificado ≤N4; TR funciona con el catálogo propio | Medio: los nombres tienen que haber pasado la prueba de 5 personas **antes**, no después |
| **M-39** | **El jueves**: E-5 tabla del comisario (1) + E-10 contraprueba (0,5) + E-2 motivo (0,5) + E-11 rueda `N1+lectura` (0,25) + E-12 recuento corregido (0,5) + Sabueso modo MT5 (0,25) | `engine/gen/expediente/`, `engine/hint/mt5.ts` | 3 | 1 | M-36, M-38 | S8 | S8 | Un jueves completo publicado en la beta el **29 de octubre**, con las dos firmas del modo | **El eslabón más tenso del plan**: un solo jueves de beta antes del lanzamiento |
| **M-40** | **Compuerta 0-B**: τ/δ/β de MV-E, CC, CT y MT sobre 10.000 candidatos **construidos** (no ciegos) + C0-5 catálogo del vistazo, C0-7 DV2′, C0-8 banda del domingo, C0-9 prueba del veterano. Reutiliza la instrumentación de M-21 | `docs/specs/compuerta0-expediente.md` | 2 | 1 | M-21, M-36, M-38 | S8 | S8 | Un informe por mecánica con veredicto verde/ámbar/rojo. **Nada de la fase 2 se construye antes de tener su número** | Riesgo de resultado: MV-E es la única con riesgo real, y hay que medirla con **tres** pistas de apertura, no dos |
| **M-41** | **V4 · Interrogatorio de menú vivo** (miércoles): filtro MV en tiempo real, catálogo de preguntas generado del DSL con auditoría de degeneración, solver en cliente | `engine/mv/escena/`, `engine/dsl/escena/preguntas.ts` | 4 | 1 | M-20, **C-0A en verde** | S9 | S9 | Ninguna pregunta ofrecida deja el caso sin cerrar; en la prueba con 12 personas **nadie dice «pregunté mal»** | **Condicionada.** Si C-0A salió roja, esta tarea no existe y libera 4 días |
| **M-42** | **Recalibración de bandas** con los datos de la beta y **reetiquetado del archivo entero** | `engine/difficulty/`, `docs/motor.md` §5 | 1,5 | 0 | M-33, `analista-datos` | S9 | S9 | La etiqueta correlaciona con tiempo real y abandono; el archivo se reetiqueta de una pasada sin regenerar casos | Medio: es la razón de que la etiqueta sea un campo recalculable |
| **M-43** | **Lote 2: 92 casos** con el calendario definitivo, completando los **120 de las primeras 17 semanas** (102 de Escena + 17 jueves de Expediente + 1 de reserva) + 92 vistazos. Firma humana | `content/casos/` | 1,5 | 5 | M-42, M-39 | S9 | S9 | 120 casos en calendario con etiqueta medida y certificado; **cero duplicados estructurales**; los 120 firmados | Medio: es donde se nota si la diversidad (δ) es peor de lo previsto |
| **M-44** | Endurecimiento: batería completa de tests de propiedad, benchmarks, `docs/motor.md` cerrado, README de `engine/` | `engine/`, `docs/motor.md` | 1 | 0 | todo | S9 | S9 | Un desarrollador que no soy yo genera, valida e inspecciona un caso siguiendo solo el README | Bajo |
| **M-45** | **V18 · Escalafón**: 12-15 técnicas nombradas acreditadas por **TR**, sin Sabueso | `engine/ladder/escalafon.ts` | 3 | 3 | M-14, **prueba de nombres con 5 personas** | S10 | S10 | El cuaderno acredita «este caso exigía la pinza de dos alas», nunca «has usado» —que no es observable— | **Condicionada** a que ≥8 de 14 nombres pasen la prueba. Si no, sale con 8-10 técnicas |
| **M-46** | Guardia de lanzamiento: regeneración parcial del calendario, repliegue de día, tablero de incidencias del motor | `engine/publish/guardia.ts` | 1,5 | 1 | M-30 | S10 | S10 | Un caso retirado a las 7 de la mañana se sustituye sin intervención manual en la base de datos | Bajo |
| **M-47** | **V3 · Pistas visuales**: leyenda cerrada y versionada, un icono = un predicado, texto alternativo = frase canónica | `engine/schema/leyenda.v1.json` | 1 | 1 | M-27 | S10 | S10 | En el plano solo se dibuja lo que está en la leyenda; todo lo demás es decorado registrado y sin valor lógico | Bajo de motor; el coste real es de ilustración |
| **M-48** | **Reserva de estabilización**: incidencias del lanzamiento con causa en el motor (las de la beta las absorbe M-33) | — | 2,5 | 1 | — | S10 | S10 | El lanzamiento no se para por un caso malo | — |

**Total S7-S10: 32 días de agente (2,5 de ellos de reserva), 15 horas del fundador. Total del plan: 80 días de agente —77,5 comprometidos y 2,5 de reserva— y 24 horas del fundador ligadas a tarea, más 6 de revisión semanal: 30 en total.**

---

## 5. Lo condicionado después del lanzamiento

Nada de esta lista se construye antes de tener su número o su prueba. Los días son incrementales sobre lo ya construido.

| id | Tarea | Días | Condición de entrada | Qué pasa si la condición falla |
|---|---|---|---|---|
| **M-49** | **E-7 · Vis a vis** (Expediente): catálogo de preguntas con coste asimétrico, generación hacia `\|R₀\| ≤ 16`, sobre el motor MV ya construido | 3 | C-0B verde **y** `disenador-puzzles` confirma **tres pistas de apertura** (con dos, τ = 0 por aritmética, no por generador) | No se construye. El jueves conserva la tabla del comisario y la contraprueba, que ya son dos firmas |
| **M-50** | **V13 · Cuatro manos**: cierre alternado (AM) como punto fijo por jugador, búsqueda de reparto, canal de deducciones cerrado | 3,5 | El prototipo **en papel** pasa sus tres compuertas (≥70 % de finalización, cero parejas encadenando más de dos pasos, ≥4 de 6 lo repetirían) **y** τ(AM) ≥ 1 % | Se publica solo la versión imprimible y **no se construye backend en tiempo real** |
| **M-51** | **V10 / E-6 · Caso invertido** con **generador propio de redundancia controlada** (no se fabrica desde un caso del día: bajo NR el único soporte es el conjunto completo) | 4 | τ(PU2) ≥ 1 % con distractores **construidos**, no sorteados | Se queda fuera del archivo y del Pack Aula |
| **M-52** | **Motivo como cuarta categoría** (domingo/especial), `n = 4`, `K = 4`, 13.824 modelos | 0,5 | CAP lo admite (ya comprobado). **Nunca `5×5×5 + motivo`**: 1,7 M de modelos, fuera del techo por dos vías | — |
| **M-53** | **Reparto recurrente**: NR-M1 (culpable sorteado uniformemente), NR-M2 (el quemado **no aparece como sospechoso**), NR-M3 (tabla `canon-soporta`), NR-M4 (todo atributo citado se imprime) + **prueba del veterano** | 1,5 | `content/biblia.md` con los 24 nombres corregidos y la tabla `canon-soporta` de `guionista-misterio` | Sin NR-M el veterano acierta a ciegas por encima del azar y el reparto recurrente deja de ser gratis |
| **M-54** | Resto de mecánicas de Expediente: E-9 orden (1), E-4 objeto perdido (1), E-1 coartada cruzada (1,5), E-8 doble víctima (0,5), E-3 cadena de custodia (2) | 6 | C-0B por mecánica | Cada una entra en su repliegue por separado |
| **M-55** | **M11 · Lote con restricciones entre casos** (semana firmada, arco, conspiración) | 1,5 | Decisión de producto sobre el arco | La semana se genera caso a caso, como hasta ahora |
| **M-56** | **V1 · Doble franja** | 5,5 | ≥6 de 8 personas entienden la regla en menos de 60 segundos, en papel | Se descarta definitivamente: el problema no era la interfaz |
| **M-57** | **V19 · Caso a la carta** con **depósito precalentado**, nunca generación en vivo | 2 | Dos meses publicando sin incidencias | — |

---

## 6. Tests de propiedad, benchmarks y CLI

### 6.1 Las propiedades que corren en CI en cada commit

| # | Propiedad | Sobre | Umbral |
|---|---|---|---|
| P1 | Todo caso generado tiene **exactamente una** solución | 1.000 casos por preajuste | 100 % |
| P2 | Quitar **cualquier** pista publicada rompe la unicidad (NR) | ídem | 100 % |
| P3 | Misma semilla ⟹ mismo caso, byte a byte | 1.000 semillas | 100 % |
| P4 | El **solver humano y el completo coinciden**: el cierre de la escalera es el cuaderno inducido por el residuo | 10.000 casos, los dos modos | 100 % |
| P5 | **Ningún caso publicable exige N5** (adivinar) | todo el lote | 0 casos |
| P6 | **NV**: ninguna pista publicada es idénticamente verdadera ni falsa (`0 < popcount(mask) < \|M₀\|`) | todo el banco | 100 % |
| P7 | **NC**: ninguna pista entraña por sí sola la identidad del culpable | todo el lote | 100 % |
| P8 | **CAP**: `\|M₀\| ≤ 150.000` comprobado **antes** de enumerar | todo preajuste | 100 % |
| P9 | Invariantes del certificado: `estado(k) = aplicar(efectos(k), estado(k−1))`; `premisas.pasos < paso`; **toda pista aparece en algún `premisas.pistas`** | todo certificado | 100 % |
| P10 | **OR**: ninguna interacción (sobre, Sabueso, menú, comprobar) da información con menos razonamiento que el certificado | por interacción | 100 % |
| P11 | Toda pista redactada tiene forma formal y el conjunto formal retraducido da la misma solución única | todo caso publicable | 100 % |
| P12 | Cero duplicados por hash estructural en el calendario | los 120 casos | 0 |

### 6.2 Benchmarks

Objetivo: **≥2.000 casos válidos por minuto y preajuste** en lote (§M-10). Construcción del banco de máscaras: una vez por **tablero**, no por candidato (≈200 construcciones para un lote de 10.000 candidatos, del orden de diez minutos). En cliente: enumerar 14.400 tuplas y construir 10 máscaras ≈ 15 ms en un móvil de gama media; el residuo **no se envía, se recalcula**.

### 6.3 La CLI a ciegas (M-07)

Es la única forma de que el fundador y QA vean lo que ve el jugador antes de que exista el frontend, y de que la calibración de dificultad tenga datos humanos desde la semana 2:

```
engine resolver --caso 127 --a-ciegas     # sin solución, sin certificado, registra tiempo y pasos
engine inspeccionar --caso 127            # solución, certificado, técnicas requeridas, banda
engine validar content/casos/2026-11-05.json
engine generar --modo escena --dia jueves --seed 4711 --lote 100
```

---

## 7. El pipeline de publicación (la pieza que ningún dictamen presupuestó)

Tres días (M-30) que no están en el orden combinado del dictamen de Expediente y sin los cuales no hay juego diario:

1. **Lote nocturno** que llena un depósito por `(modo, día, preajuste, banda)`. Nunca generación en la ruta de petición.
2. **Deduplicación por hash estructural**: solución canónica + multiconjunto de tipos de pista + huella del certificado. Es lo que impide que el jugador reconozca la estructura, que es el modo silencioso en el que se muere un juego diario.
3. **Calendario** con día, formato, mecánica estructural (una y nunca dos) y banda objetivo; **regeneración parcial** desde el principio, porque un fallo en el caso del martes no puede obligar a regenerar la semana.
4. **Cron de publicación diaria** y estados del caso (`generado → validado → firmado → programado → publicado → archivado`).
5. **La solución nunca viaja en claro.** Hash con sal para el caso individual; verificación en servidor para duelos y marcadores. Y la honestidad que ya está escrita: el residuo **es** derivable en el cliente —eso es el juego—, así que ocultar la solución sube el listón, no es una garantía.

**Los 120 casos de las 17 primeras semanas** (M-32 + M-43) se generan en **dos oleadas a propósito**: 28 antes de la beta y 92 después de la recalibración. Congelar 17 semanas de contenido antes de que la beta diga que la primera calibración está mal sería fijar 120 etiquetas equivocadas. La etiqueta es un campo recalculable precisamente para esto.

Composición de los 120: **102 de Escena** (6 días × 17 semanas) + **17 jueves de Expediente** + 1 de reserva, más 120 vistazos de 3×3. **Si `director-producto` decide que el jueves es exclusivamente Expediente**, el formato «a puerta cerrada» (V16, ya construido en S2) se mueve a otro día y la composición no cambia. Es una pregunta abierta de calendario que señalo en §8.4.

---

## 8. Qué necesito de otras áreas, y cuándo

### 8.1 De `disenador-puzzles` · las diez confirmaciones que bloquean código

Ninguna la decido yo. Cada una rompe casos reales si se decide mal, y **tres bloquean la semana 1**.

| # | Pregunta | Mi propuesta | Bloquea | **Fecha límite** |
|---|---|---|---|---|
| **1** | **«Pegado» significa dos cosas.** El vocabulario define `adyacente(h1,h2)` como «comparten lado», pero la pista 3 del caso base («un pasillo pegado al de Rubén») es adyacencia **de fila**. Dos relaciones distintas con la misma palabra, y la regla 5 del checklist prohíbe los sinónimos | Tres predicados con tres redacciones canónicas sin solape: `adyacente_hab` («comparten pared»), `pasillo_contiguo`, `ala_contigua` | **M-04** | **9 de septiembre** |
| **2** | **`ve(A, B)`.** Definido como «comparten pasillo, misma fila». **Bajo cuadrado latino es idénticamente falso** entre dos sospechosos, y la adyacencia ortogonal entre personas también | Revisar **todos** los predicados relacionales entre personas buscando degeneración antes de meterlos en el DSL. Media hora de revisión que evita un menú de interrogatorio con una plantilla que nunca informa | **M-04**, **M-41** | **9 de septiembre** |
| **3** | **Negación de los predicados no binarios.** `¬entre(A,B,C)` y `¬izquierda_de(A,B)` tienen varias lecturas naturales | Cerrar caso por caso; lo dejo escrito en `docs/motor.md` §1 | **M-01, M-04** | **9 de septiembre** |
| **4** | `justo_encima` y `mas_cerca_de`: ¿solo el par de filas que cruza la escalera? ¿distancia de grafo o de retícula? ¿empates? | Grafo, con la escalera como única arista; los empates no se generan | **M-22** | 2 de octubre |
| **5** | **Celdas bloqueadas: ¿tablero o pista?** | `board.blocked` para lo anunciado (fuera de NR y del recuento de pistas) y `nadie_en(h)` para el candado que se descubre | **M-08** | 14 de septiembre |
| **6** | **CNT5/CNT6 y la forma canónica del recuento.** «Exactamente dos de ellos estaban en la planta alta» es **idénticamente verdadera** bajo biyección: no elimina un solo modelo | El recuento cuenta la **intersección de dos propiedades independientes** («exactamente dos de los que estaban arriba llevaban algo de metal»). La mecánica sobrevive intacta; cambia la redacción | **M-34** | 16 de octubre |
| **7** | **La forma canónica de T7.** «El jardín está más lejos de la entrada que la galería» es un hecho de tablero, impreso, idénticamente verdadero | Hablar de **personas**: «Amaranta estaba más lejos de la entrada que Olimpia» | **M-34** | 16 de octubre |
| **8** | **Los tres regímenes de `givens`** (`informativo` / `entrañado` / `falso`), con la regla dura de que **la marca falsa nunca entra en el sistema formal** | Aceptarlos como campo del esquema | **M-01, M-36** | **9 de septiembre** (afecta al esquema de caso) |
| **9** | **OP3′, CT4, RR como `N1+lectura`, la técnica que falta** (la pareja atada que cruza bloques) | OP3′ = TR sobre «la cuenta del hueco»; CT4 = la pareja que intercambia debe ser deducible; RR suma pasos pero no nivel; la técnica que falta entra en el catálogo **antes** de la prueba de nombres, porque renombrar después es más caro | **M-38, M-54** | 20 de octubre |
| **10** | **Sabueso sobre un tablero imposible** (con `disenador-ux-ui`) | Ejecutar la escalera desde el estado inicial y avanzar hasta el último peldaño compatible, para no dar **nunca** señal de error | **M-17** | 28 de septiembre |

### 8.2 De `guionista-misterio`

| Qué | Para qué | **Cuándo** |
|---|---|---|
| **Plantillas cerradas de redacción por predicado** de Escena (una lista por predicado, no texto libre) | M-27 no puede contrastar una retraducción sin una forma canónica contra la que contrastar | **12 de octubre** (antes de M-27) |
| **`content/biblia.md`**: 24 nombres que pasen la prueba de lectura, regla de **nombre canónico del objeto**, vocabulario cozy | El validador comprueba entidades y sinónimos contra la biblia; sin ella, la detección de nombres duplicados y habitaciones ambiguas no tiene referencia | **19 de octubre** |
| **Plantillas de las nueve familias de Expediente** (T1-T9), con las formas canónicas de T7 y T8 ya corregidas | M-34 y M-39 | **26 de octubre** |
| **Tabla `canon-soporta(motivo, personaje)`** | NR-M3: que el motivo verdadero no sea función del canon del culpable | Con M-53 (fase 2) |
| Registro de decorados por caso (qué elementos de ambientación **no** son pistas) | El «y sin embargo» no puede reinterpretar algo que sí era pista | **12 de octubre** |

**Y una frase que hay que dejar de escribir en los documentos del proyecto:** «el motor valida el texto». El motor valida **la forma formal** y **contrasta** la retraducción. La retraducción por IA es una heurística fuerte con mitigaciones (N retraducciones concordantes, plantillas cerradas, revisión humana al estrenar plantilla), **no una demostración**.

### 8.3 De `desarrollador-backend`

| Qué | Para qué | **Cuándo** |
|---|---|---|
| Confirmación del **contrato de API** (M-29): qué se sirve, versionado, qué no viaja nunca | Que backend no programe contra un formato que cambia | **16 de octubre** |
| Dónde vive el **cron**: yo produzco el lote y el calendario; backend sirve el caso del día | Evitar dos cronos que se pisen | 16 de octubre |
| **Verificación en servidor** para duelos y marcadores (el caso individual va con hash con sal) | El valor real de no enviar la solución está en los marcadores, no en la partida | Con los duelos (fase 2) |
| Esquema de almacenamiento con `schema_version` y etiqueta de dificultad **recalculable** (columna, no valor congelado) | Reetiquetar el archivo entero tras la recalibración de M-42 sin regenerar casos | **16 de octubre** |

### 8.4 De `director-producto`

- **El jueves.** `supuestos.md` §8 compromete «semana completa de Escena (7 formatos)» **y** «jueves de Expediente». `propuesta-jugabilidad.md` §4 pone el jueves de Escena «a puerta cerrada» y `propuesta-jugabilidad-expediente.md` decisión 10 pone Expediente el jueves. **Son incompatibles si el jueves es uno solo.** Necesito la decisión antes de M-43 (2 de noviembre) para componer los 120 casos. Mi lectura: los dos productos conviven el jueves y el «a puerta cerrada» se mueve a otro día, pero no es mi decisión.
- **Confirmación de que el domingo XL es `n = 4, K = 4`** y no `5×5×5 + motivo` (fuera del techo por dos vías independientes), y de que el domingo de la conspiración con seis culpables no se construye. Las dos ya están recomendadas en las decisiones 12 y 13 de `propuesta-jugabilidad-expediente.md`; **faltan en `docs/decisiones.md`**.
- **El desfase de un día** de `supuestos.md` (§0.2 de este plan).
- **Registro de D-010** con las dieciséis decisiones de las dos propuestas: hasta que exista, este plan trabaja sobre recomendaciones, no sobre decisiones.

### 8.5 Del fundador

| Qué | Horas | Cuándo |
|---|---|---|
| Aprobar los contratos congelados (M-01) y cerrar con `disenador-puzzles` las tres confirmaciones que bloquean el DSL (M-04) | 2 | S1 |
| Resolver casos **a ciegas** con la CLI (M-07): tres al empezar y uno por semana | 2 | desde S2 |
| Revisar el certificado de la escalera con un caso real (M-11) | 1 | S3 |
| Veredicto de la Compuerta 0-A y **decisión del interrogatorio** (M-21) | 1 | **S5** |
| Confirmar el contrato de API con backend (M-29) | 1 | S6 |
| **Firma humana de 28 casos**, lote 1 (M-32) | 2 | S6 |
| Arranque de la beta y lectura de las primeras métricas del motor (M-33) | 1 | S7 |
| Primer jueves de Expediente en beta (M-39) y veredicto de la Compuerta 0-B (M-40) | 2 | S8 |
| Prueba del interrogatorio con 12 personas (M-41) | 1 | S9 |
| **Firma humana de 92 casos**, lote 2 (M-43) | 5 | S9 |
| **Prueba de nombres de técnica con 5 personas**, en papel, **antes** de implementar las detecciones (M-45) | 3 | S10 |
| Guardia de lanzamiento, leyenda de iconos y reserva (M-46, M-47, M-48) | 3 | S10 |
| Revisión semanal del área y decisiones de repliegue | 6 | S1-S10 |
| **Total** | **30** | |

---

## 9. Riesgos y repliegues

### 9.1 Los cinco que pueden hacer daño de verdad

| # | Riesgo | Probabilidad | Impacto | Mitigación / repliegue |
|---|---|---|---|---|
| **R1** | **Expediente no llega a tiempo**: 12 días entre la beta y el lanzamiento, con un solo jueves de prueba | Media | Alto | El jueves del lanzamiento se publica como Escena «a puerta cerrada» (ya construido en S2) y Expediente entra en la semana 11. La beta lo prueba entonces con usuarios reales, que es mejor que publicarlo con un jueves de rodaje |
| **R2** | **M-11 (la escalera) resbala**. Cinco días indivisibles de los que cuelga todo lo visible | Media | **Muy alto** | No hay repliegue: sin M3 no hay «sin adivinar», ni dificultad medida, ni escalafón, ni reconstrucción, ni Sabueso, ni contraprueba. Si resbala, **se retrasa el lanzamiento, no se recorta M3**. Lo único que se puede hacer es empezarla antes, y por eso S1 y S2 no llevan una sola tarea prescindible |
| **R3** | **La capacidad real es 6 días/semana y no 8** | Media | Alto | Repliegue en este orden: (a) el interrogatorio a fase 2 aunque C-0A esté verde (−4, M-41), (b) el escalafón sale con 8-10 técnicas (−1), (c) el viernes sale con tono y sin rastro del objeto (−1,5), (d) pistas visuales a fase 2 (−1), (e) E-11 y E-12 fuera del primer jueves (−1). Total recuperable: **8,5 días** |
| **R4** | **La primera calibración de dificultad está mal** (lo estará, por definición) | Alta | Medio | La etiqueta es un campo **recalculable**; el archivo entero se reetiqueta de una pasada en M-42. En administración se marca «provisional»; en la interfaz del jugador **nunca** |
| **R5** | **Un caso publicado con dos soluciones.** Es el fallo que no se perdona | Baja | **Muy alto** | P1 y P2 en CI sobre cada commit, verificación cruzada del lote antes de programar, firma humana de los 120, y la guardia de M-46 para retirar y sustituir un caso en caliente sin tocar la base de datos |

### 9.2 Repliegues escritos por adelantado

- **Si C-0A sale roja (MV):** el miércoles se lanza como «el clásico» 4×4, el interrogatorio pasa a fase 2 y se liberan 6 días (M-41 y parte de M-20, que igual sirve a E-7). La frase de la landing cambia de «las pistas las preguntas tú» a la mitad que sí tenemos: «el juego te reconstruye tu razonamiento y te acredita la técnica».
- **Si C-0B pone MV-E en rojo:** el vis a vis no se construye. El jueves conserva la tabla del comisario y la contraprueba, que son dos firmas y ya están en verde por construcción.
- **Si el catálogo del vistazo sale por debajo de 200 (C0-5):** el vistazo es semanal, no diario, y se anuncia como tal desde el primer día.
- **Si la prueba de nombres no llega a 8 de 14:** el escalafón sale con 8-10 técnicas. Nunca con nombres que el jugador no reconoce.

---

## 10. Lo que este plan **no** promete

1. **Las tasas de aceptación de MV, MV-E, CC, CT, AM y PU2.** Hoy no las sabe nadie, yo tampoco. Son medibles en día y medio por tanda y hasta entonces las mecánicas que dependen de ellas son apuestas, no compromisos.
2. **Que la retraducción de un texto de IA sea una prueba.** Es una heurística fuerte con mitigaciones.
3. **«Qué técnica usó el jugador».** No es observable. Solo lo es «qué técnica **exige** el caso» (TR), y la frase de la interfaz tiene que decir eso.
4. **Convertir un caso del día en su versión invertida.** Bajo NR el único soporte es el conjunto completo: el invertido necesita su propio generador con redundancia deliberada.
5. **Un lanzamiento con holgura.** 77,5 días comprometidos y 2,5 de reserva sobre 80 disponibles. El plan cabe; no sobra nada.

---

*Cambios a este documento: los registra `ingeniero-motor-puzzles`. Las confirmaciones de §8.1 las cierra `disenador-puzzles`; las de §8.4, `director-producto` en `docs/decisiones.md`.*
