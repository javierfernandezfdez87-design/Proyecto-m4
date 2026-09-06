# Dictamen técnico de viabilidad: 39 ideas de jugabilidad, 24 familias

Autor: `ingeniero-motor-puzzles`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Encargo: dictamen de viabilidad de motor para `docs/diseno/ideas-jugabilidad-disenador.md` (15 mecánicas), `content/ideas-jugabilidad-guionista.md` (12 ideas) y `docs/ideas-jugabilidad-producto.md` (12 ideas).
Estado del código: **cero**. `engine/` no existe. Todo lo que sigue son estimaciones sobre un motor que hay que construir, no medidas.

**Aviso de marca (D-006).** Revisados los cinco disparadores en el material de este encargo: ninguno se cumple. No procede registrar todavía.

---

## 0. Cómo leer este documento

### 0.1 Advertencia previa: la especificación que debería existir y no existe

Mi encargo permanente dice que lea `docs/diseno/mecanicas.md`, `docs/diseno/taxonomia-pistas.md` y la especificación de dificultad. **Ninguno de los tres existe.** Lo único formal que hay hoy en el repositorio es el «Vocabulario formal común» de `ideas-jugabilidad-disenador.md` §0, que es un buen punto de partida y no es una especificación: nueve líneas, sin semántica cerrada por predicado y con al menos tres ambigüedades que rompen casos reales (§7 de este documento).

Por tanto este dictamen hace dos cosas a la vez: valorar las ideas y **proponer el vocabulario mínimo** que hace falta para valorarlas. Las decisiones marcadas «pendiente de `disenador-puzzles`» no las tomo yo.

### 0.2 Unificación de familias

Las tres listas se solapan mucho. He unificado 39 entradas en **24 familias**. La regla de unificación es funcional: dos ideas son la misma familia si el motor tiene que construir lo mismo, aunque el jugador vea cosas distintas.

| Familia | Diseñador | Guionista | Producto |
|---|---|---|---|
| V1 Doble franja | 1 | — | — |
| V2 Rastro del objeto | 2 | — | — |
| V3 Pista visual | 3 | 6 | — |
| V4 Interrogatorio | 4 | 1 | 3 |
| V5 Testigo falso | 5 | 1 (parte) | — |
| V6 Revelación progresiva | 6 | — | 3 (parte) |
| V7 Segunda deducción: el móvil | 7 | 10 | 2 |
| V8 Acusación anticipada | 8 | — | 9 |
| V9 Tirar del hilo | 9 | — | — |
| V10 Caso invertido | 10 | 9 | — |
| V11 Sabueso | 11 | 7 | 7 |
| V12 Arco entre casos | 12 | 3 | 5 |
| V13 Cuatro manos | 13 | — | 11 |
| V14 El vistazo (mini) | 14 | — | — |
| V15 Casa de dos plantas | 15 | — | — |
| V16 Celdas bloqueadas | (3, candado) | — | 4 (jueves) |
| V17 La reconstrucción | — | — | 1 |
| V18 Escalafón de técnicas | — | — | 6 |
| V19 Caso a la carta | — | — | 8 |
| V20 Hilo Escena↔Expediente | — | — | 12 |
| V21 Pásale tu caso | — | — | 10 |
| V22 Semana con carácter | (calendario) | 12 | 4 |
| V23 Capa narrativa validada | — | 2, 4, 5, 8, 11, 12 | — |
| V24 Modo Expediente (base) | — | — | — |

### 0.3 Unidad de coste

**Día de agente** = una sesión de trabajo enfocada que produce código con tests verdes y documentación mínima. No es una jornada humana. Los rangos son de mi propia estimación; la incertidumbre real está en las tasas de aceptación del generador, no en escribir el código, y eso lo digo caso por caso.

Los costes de cada familia son **incrementales sobre la plataforma** descrita en §1. Sumar los 24 sin la plataforma da un número falso.

### 0.4 Las propiedades formales

Las tres del proyecto, que no se negocian:

- **U** unicidad: exactamente un modelo satisface las restricciones.
- **SA** sin adivinar: existe certificado paso a paso con toda técnica en N1-N4.
- **NR** no redundancia: quitar cualquier pista publicada rompe U.

Las cinco que introduce `disenador-puzzles`: **OD** (orden deducible), **IQ** (independencia de preguntas), **MP** (mentiroso previo), **AM** (alternancia mínima), **PU** (prueba única).

Y **seis que propongo yo en este documento**, porque sin ellas hay mecánicas de las listas que no se pueden verificar:

| Sigla | Nombre | Qué exige | Para qué familia |
|---|---|---|---|
| **OR** | Oráculo restringido | Ninguna interacción del juego (comprobar, desbloquear, rechazar una colocación) permite obtener información sobre la solución con menos razonamiento del que exige el certificado. | V4, V6, V11, transversal |
| **MV** | Menú vivo | En todo estado alcanzable, el menú de preguntas ofrecido tiene ≥2 opciones y toda opción ofrecida deja el caso cerrable con las preguntas que quedan. | V4 |
| **ML** | Mentira localizable | Exactamente una declaración es refutable con las pistas ya publicadas, y su refutación tiene certificado ≤N4. | V4 (variante guionista), V5 |
| **EN** | Hecho importado entrañado | Todo hecho que llega de otro caso es consecuencia lógica de las pistas propias del caso receptor. | V12, V20 |
| **TR** | Técnica requerida | `t` es requerida por un caso si el caso no es resoluble con la escalera sin `t`. Es lo único observable; «qué técnica usó el jugador» no lo es. | V18, V22 |
| **CN** | Contrato narrativo | Toda pista publicada lleva forma formal; la retraducción del texto coincide con ella; toda entidad citada existe en el tablero; ningún elemento decorativo reinterpretado aparece en ninguna pista. | V3, V23, transversal |

**OR es la más importante de las seis y no está en ninguna de las tres listas.** Es la que descalifica la variante de interrogatorio de `producto` (§V4) y la que hay que aplicar a cualquier botón futuro que responda algo sobre el tablero.

---

## 1. La plataforma: lo que hay que construir antes de hablar de mecánicas

Nueve piezas. Las mecánicas se cuelgan de ellas.

| Pieza | Qué es | Días | Desbloquea |
|---|---|---|---|
| **M1** DSL de pistas v1 | Predicados serializables en JSON, semántica exacta por predicado, `cells(pista, estado)`, negación de todo predicado, test unitario por predicado | 2 | Todo |
| **M0** Solver completo | Propagación (forward checking + arco-consistencia), backtracking con variable más restringida, **conteo con parada en 2** | 2 | Todo (U) |
| **M2** Generador | Solución primero con semilla determinista, banco de pistas verdaderas, greedy + eliminación de redundantes, diversidad de tipos, CLI, lote | 3 | Todo (NR) |
| **M3** Escalera humana + certificado | Segundo solver que solo aplica N1-N4, emite certificado paso a paso (peldaño, técnica, pistas usadas, celdas afectadas, estado resultante), rechaza si necesita N5 | 4-5 | **La pieza clave. Ver §5** |
| **M4** Mapa pista→celdas | Cada pista expone el conjunto de celdas que restringe en un estado dado | 0,5 | V9, V17, V11, V21 |
| **M7** Harness de subconjuntos | «Para todo subconjunto S de pistas, ¿cuántos modelos?» con memoización | 1 | V4, V5, V10, V13 |
| **M9** Grafo de habitaciones | Adyacencia como grafo, no como retícula; huecos, plantas, escalera, distancias precalculadas | 1 | V1, V15, V16 |
| **M12** Comprobador de entrañamiento | `¿S ⊨ hecho?` = una llamada al solver sobre `S ∪ {¬hecho}` | 0,5 | V5, V7, V10, V12, V20 |
| **M5** Medida de dificultad | Métrica sobre el certificado (número de pasos, nivel máximo, ancho del árbol de casos), etiqueta recalculable, banco de calibración | 2 | V22, V14, V18, etiqueta de todo caso |
| **M6** Validación de la capa narrativa | Texto↔forma formal (retraducción), registro de entidades, existencia, concordancia, detección de sinónimos prohibidos, registro de decorados | 3 | Todo lo publicable |

**Plataforma completa: 19-20 días.** Con M1+M0+M2 (7 días) ya se publica el juego base de `funcionamiento-productos.md` §1.1 con U+NR garantizados, pero **sin SA medido**, que es media promesa del producto. M3 no es opcional.

Dos piezas más, no plataforma pero compartidas:

| Pieza | Qué es | Días | Desbloquea |
|---|---|---|---|
| **M10** Variables auxiliares | Variables que no son «posición»: objetos con trayectoria, atributos del ocupante, motivo, categorías de Expediente | 2 | V2, V7, V24, V3 (atributos) |
| **M11** Lote con restricciones entre casos | Generar una semana o un arco de una vez, con restricciones cruzadas y regeneración parcial | 1,5 | V12, V20, V22 |

---

## 2. Tabla resumen

Coste **incremental sobre la plataforma**. Riesgo: el dominante, no todos.

| # | Familia | Formalizable | Propiedad a verificar | Días | Dependencias | Riesgo dominante |
|---|---|---|---|---|---|---|
| **V1** | Doble franja | **Sí** | U+SA+NR sobre `2n` variables acopladas; **DF**: `t1` no deducible sin pistas de `t2` | 5-6 | M8 (nuevo), M9, M3 | Banco de pistas y tasa de aceptación, **no** explosión |
| **V2** | Rastro del objeto | **Sí** | U+SA+NR; **RO**: ≥1 habitación de la solución solo determinable vía el objeto | 3 | M10, M3 | Dos caminos independientes → NR falso |
| **V3** | Pista visual | **Sí** | CN + ≤3 iconos y ≤50 % del total; texto alternativo = frase canónica | 1 | M6, M1 | Coste de ilustración, no de motor |
| **V4** | Interrogatorio | **Parcial** | IQ **estricta es inviable** (§V4). Viable: **MV + OR** | 4-6 | M7, M3, solver en cliente | **Alto**: IQ como está escrita se rompe matemáticamente |
| **V5** | Testigo falso | **Sí** | MP + ML; negación cerrada del DSL; modelo `exactamente-uno(l_i)` | 3-4 | M7, M12, M1(negación) | Tasa de aceptación + coste narrativo |
| **V6** | Revelación progresiva | **Sí** (variante sobres) / **No** (variante «al acertar») | OD + **OR** | 2 | M3 | La variante de `producto` viola OR: se fuerza a bruta |
| **V7** | Segunda deducción: móvil | **Sí** | U+NR sobre micro-CSP + **no entrañado** por las pistas principales | 1,5 | M10, M12 | Ninguno serio |
| **V8** | Acusación anticipada | **Sí** (no afecta al puzle) | Distinguir «probado» de «por poco» con el certificado | 0,5 | M3 | El umbral del duelo no evita la lotería del 25 % |
| **V9** | Tirar del hilo | **Sí** | Contrato: toda pista expone `cells(pista, estado)` | 0,5 | M4 | Ninguno |
| **V10** | Caso invertido | **Sí**, pero **no** como lo describe `guionista` | PU sobre soportes mínimos de `pos(x)=R` | 2 | M7, M12 | **Exige pistas redundantes a propósito**: no es un caso normal |
| **V11** | Sabueso | **Sí** | OR; el paso siguiente sale del certificado, nunca de la solución | 1,5 | M3, M4, solver en cliente | Política cuando el tablero del jugador ya es imposible |
| **V12** | Arco entre casos | **Sí** | EN (la libreta acorta, nunca habilita) + generación semanal | 2,5 | M11, M12, M3 | Rigidez del calendario; coste narrativo continuo |
| **V13** | Cuatro manos | **Parcial** | AM formalizada como cierre por jugador (§V13) | 3-4 | M3, M7 | Tasa de aceptación desconocida + backend real |
| **V14** | El vistazo (mini) | **Sí** | U+SA+NR con techo N2 estricto | 0,5 | M2, M3 | Puede no haber casos 3×3 con U y solo N1-N2 |
| **V15** | Casa de dos plantas | **Sí** | U+SA+NR con adyacencia de grafo; `justo_encima`, `cuenta`, `distancia_a` | 2 | M9, M1 | Legibilidad, no lógica |
| **V16** | Celdas bloqueadas | **Sí** | Existencia (permanente > 0) + celdas bloqueadas van en `board`, no en `clues` | 1 | M9, M0 | Cae mucho el número de soluciones base |
| **V17** | La reconstrucción | **Sí** | Serialización completa del certificado | 1 | **M3**, M4 | Ninguno de motor |
| **V18** | Escalafón de técnicas | **Parcial** | TR: solo «técnica que el caso requiere», no «técnica que usó el jugador» | 3 | **M3** | La taxonomía puede no coincidir con las palabras del jugador |
| **V19** | Caso a la carta | **Sí** | Igual que un caso normal + latencia | 2 | M2, M11 | Generación en vivo: usar depósito precalentado, no live |
| **V20** | Hilo Escena↔Expediente | **Sí** | EN en los dos sentidos + U+SA+NR independiente de cada caso | 3 | M12, M11, V24 | Coste narrativo (dos casos, misma tarde, sin contradecirse) |
| **V21** | Pásale tu caso | **Sí** | Estado del jugador → paso más avanzado compatible del certificado | 1 | **M3**, M4 | Fuga de información hacia el observador |
| **V22** | Semana con carácter | **Sí** | TR + bandas de dificultad medidas por día | 1 | M3, M5, M11 | Calibración (necesita datos reales) |
| **V23** | Capa narrativa validada | **Sí** | CN + registro de decorados + identificadores estables de entidad | 1,5 | **M6** | La retraducción por IA es heurística, no prueba |
| **V24** | Modo Expediente (base) | **Sí** | U+SA+NR sobre asignación multicategoría | 3 | M10, M0, M3 | `6!³ = 373 M`: obliga a propagación, prohibido enumerar |

**Suma de incrementales: ~48 días.** Con la plataforma (20) y M10+M11 (3,5): **~72 días de agente** para construirlo todo. Nadie debería construirlo todo. Ver §5.

---

## 3. Detalle por familia

### V1 · Doble franja (diseñador 1)

**Modelado.** `pos_t1: S → H` y `pos_t2: S → H`, cada una inyectiva por fila y columna. Acoplamiento `pos_t2(s) ∈ {pos_t1(s)} ∪ vecinos_grafo(pos_t1(s))`. El culpable es `pos_t2⁻¹(R)`, no `pos_t1⁻¹(R)`.

**DSL nuevo.** Ocho predicados: `en_t(A, h, t)`, `no_en_t(A, h, t)`, `quieto(A)`, `se_movio(A)`, `cambio_ala(A)`, `cambio_pasillo(A)`, `intercambio(A, B)`, `paso_por(A, h)` (`∃t: pos_t(A) = h`), más `misma_fila_t`, `adyacente_t`. Todos los predicados espaciales existentes ganan un argumento de franja; propongo que el argumento sea obligatorio y explícito en JSON, nunca implícito, para que no se cuele una pista sin franja.

**Propiedad a verificar.** U+SA+NR sobre el sistema conjunto, más una propiedad de acoplamiento que el diseñador ya pide y que nombro **DF**: el subsistema restringido a `t1` no debe tener solución única usando solo las pistas de `t1`. Sin DF publicaríamos dos casos pegados con cinta.

**Escalera.** La técnica `N2-mov` («si `s` está en X en t1, en t2 solo puede estar en X o en sus vecinos») es propagación de dominio pura, del mismo coste cognitivo que N2. De acuerdo con el diseñador. Añado una segunda que aparecerá sola: `N3-conservación` (si en t1 el pasillo 1 tenía a dos personas y ninguna se movió de pasillo, en t2 sigue teniendo a esas dos).

**Sobre la «explosión combinatoria»: no la hay.** En 4×4 las soluciones de una franja son las permutaciones de 4, es decir **24**. El par `(π₁, π₂)` está acotado por `24 × 24 = 576` antes de aplicar ninguna restricción. En 6×6 son `720 × 720`, medio millón, enumerable a fuerza bruta en milisegundos. El solver no sufre. Lo que crece es **el banco de pistas candidatas** (más predicados × dos franjas ≈ ×2,5) y por tanto el coste del greedy y de la comprobación NR, que es lineal en el número de pistas. Eso es coste de generación por lotes, no de partida ni de navegador.

**Coste: 5-6 días.** M8 (extensión temporal del DSL, del solver y del generador) 3, escalera `N2-mov` y `N3-conservación` 1, criterio DF y casos límite (intercambio legal, huecos, celda de la víctima ocupable en t1) 1-2.

**Riesgos reales.** (a) Tasa de aceptación de DF: desconocida, hay que medirla sobre 10.000 candidatos antes de comprometer frontend. (b) Ambigüedad de «pegado»: en el caso base de `funcionamiento-productos.md`, «un pasillo pegado al de Rubén» es adyacencia **de fila**, mientras que `adyacente(h1,h2)` del vocabulario es adyacencia **de habitación**. Son dos relaciones distintas con la misma palabra. Ver §7.1. (c) Coste narrativo bajo: las pistas temporales se generan de plantilla igual que las demás.

---

### V2 · Rastro del objeto (diseñador 2)

**Modelado.** `parada: {1,2,3} → H`, inyectiva. Predicados ordinales `antes_que(h1, h2)`, `parada_es(k, h)`, `nunca_en(h)`, y el puente `ocupante_de_parada(k)` que enlaza el objeto con `pos⁻¹`. La última parada es `R`.

**Propiedad.** U+SA+NR más la que el diseñador pide y que nombro **RO**: al menos una habitación de la solución solo se determina a través del objeto. Sin RO el generador produce casos con dos caminos paralelos, la eliminación de redundantes borra el camino del objeto por ser el más largo, y publicamos un caso donde el objeto es decoración. Es exactamente el riesgo que el diseñador anticipa y tiene razón.

**Verificación de RO.** Resolver el caso con el subconjunto de pistas que no mencionan el objeto: debe tener ≥2 modelos.

**Coste: 3 días.** Depende de M10 (variables auxiliares). Predicados ordinales 1, criterio RO 0,5, generador y tests 1,5.

**Riesgo.** Bajo. La variante de dos paradas para infantil sale gratis (es un preajuste).

---

### V3 · Pista visual (diseñador 3 + guionista 6)

Son dos ideas distintas que se llevan bien:

- **Diseñador 3:** el icono **es** la pista. Leyenda cerrada y versionada, un icono = un predicado.
- **Guionista 6:** el icono **señala** una pista de texto que ya existe, uno a uno.

**La variante sólida es la del diseñador, y subsume a la del guionista** porque el icono lleva como texto alternativo su frase canónica: quien toca el icono ve la frase, quien usa lector de pantalla oye la frase. La del guionista, tomada literalmente, duplica información (el mismo hecho como icono y como pista numerada), lo que rompe NR salvo que el icono no cuente como pista, y entonces es adorno con riesgo: un adorno que «dice algo» es indistinguible de una pista para el jugador. **Regla dura que propongo: en el plano solo se dibuja lo que está en la leyenda cerrada; todo lo demás es decorado registrado y sin valor lógico.**

**Motor.** Casi nada: una etiqueta `render: "icono:<id>"` en la pista y una tabla `icono → predicado` versionada en `engine/schema/leyenda.vN.json`. Dos iconos de la leyenda v1 sí exigen máquina: la taza humeante depende de V1 y el ovillo/ventana exigen **atributos del ocupante**, que son variables auxiliares (M10).

**Propiedad.** CN, más los topes: ≤3 iconos y nunca más de la mitad de las pistas.

**Coste: 1 día** de motor. El coste real es de ilustración y está fuera del motor.

---

### V4 · Interrogatorio (diseñador 4 + guionista 1 + producto 3) — la familia con el problema serio

Tres variantes muy distintas bajo la misma palabra.

#### (a) Diseñador 4: el jugador elige 3 preguntas de un menú cerrado, propiedad IQ

**Aquí está el hallazgo principal de este dictamen: IQ, tal y como está escrita, es inviable, y por dos razones independientes.**

**Razón 1: el espacio de preguntas es 170 veces mayor de lo estimado.** El documento dice «4 plantillas × 4 sospechosos = 16 preguntas, C(16,3) = 560 comprobaciones». Pero las plantillas 3 y 4 llevan parámetro: «¿Estuviste en *<habitación>*?» son 4 sospechosos × 16 habitaciones = **64 preguntas**, y «¿Viste a *<sospechoso>*?» son 4 × 3 = **12**. El menú real es 4 + 4 + 64 + 12 = **84 preguntas**, y `C(84,3) = 95.284` comprobaciones por candidato, no 560. Sigue siendo asumible por lote (con D-009 el cómputo no es la restricción), pero cambia el orden de magnitud del criterio de aceptación.

**Razón 2, la grave: IQ estricta y «elegir bien es una habilidad» son incompatibles.** Si las pistas base dejan un conjunto residual de `k ≥ 2` soluciones y exigimos que **toda** terna de preguntas lo reduzca a 1, entonces en particular tienen que funcionar las ternas peores. Y las ternas peores existen siempre que el menú contenga preguntas poco informativas: «¿Estuviste en el Trastero?» respondida «no» en todas las soluciones residuales no aporta absolutamente nada. Tres preguntas así, y el caso no cierra. Con el menú parametrizado, la inmensa mayoría de las 95.284 ternas contiene al menos una pregunta vacía. **La tasa de aceptación no será baja: será cero.**

Y si se recorta el menú hasta que toda pregunta sea individualmente informativa (por ejemplo solo «¿en qué pasillo?» y «¿en qué ala?», 8 preguntas), entonces cualquiera de ellas cierra un residuo de dos soluciones totalmente discriminantes por sí sola, y las preguntas segunda y tercera sobran: la mecánica degenera en «haz una pregunta». En general: **si el menú tiene `m > k` preguntas y cualquier `k` deben bastar, o casi todas son individualmente decisivas (y entonces elegir no es una habilidad) o alguna terna falla (y entonces IQ no se cumple).** No hay punto medio estable.

**Lo más cercano que sí es formalizable, y que además juega mejor: MV, el menú vivo.** El motor no valida todas las ternas de antemano; **filtra el menú en tiempo real**. En cada momento el juego ofrece solo las preguntas que dejan el caso cerrable con las preguntas que queden. Formalmente:

```
MV1  el conjunto residual de soluciones se mantiene en el cliente (≤ unas decenas de modelos)
MV2  una pregunta q es ofrecible en el estado E con r preguntas restantes si:
     existe una secuencia de r preguntas que empieza por q y deja |residuo| = 1
     con certificado de nivel ≤ N4 en cada paso
MV3  en todo estado alcanzable hay ≥2 preguntas ofrecibles (si no, no hay agencia)
MV4  OR: el hecho de que una pregunta esté o no en el menú no debe revelar
     nada que el jugador no pueda deducir ya. Se cumple si el filtro se calcula
     sobre el residuo, que el jugador también puede calcular.
```

MV se verifica en generación por búsqueda en el árbol de preguntas (profundidad 3, ramificación acotada por el residuo, no por las 84 plantillas: solo son ofrecibles las preguntas cuyo parámetro aparece en alguna solución residual, lo que baja la ramificación a decenas). Coste por candidato: miles de nodos, no 95.284. **Es más barato que IQ y sí se puede satisfacer.** Y el jugador conserva la agencia real: elige entre varias preguntas válidas, unas dejan un camino N2 y otras uno N4, exactamente la habilidad que el diseñador quería, sin la promesa imposible de que valga cualquier terna.

Antes de comprometer nada: **medir sobre 10.000 candidatos 4×4 la tasa de aceptación de MV**, con el menú de 4 plantillas y con el de 2. Es el mismo experimento que pide el diseñador, con el criterio corregido.

#### (b) Producto 3: las pistas se ganan al colocar bien — **viola OR, no se puede publicar así**

«Si intenta colocar a alguien que todavía no es deducible, el juego no se lo acepta.» El juego acepta una colocación cuando es deducible, y una colocación deducible es correcta. Luego el botón de colocar **es un oráculo de la solución**: el jugador prueba las 16 celdas para el primer sospechoso, once o quince le rebotan, una se acepta, y ha resuelto una fila sin leer una sola pista. Repetido cuatro veces, resuelve el caso entero sin razonar. Clues by Sam lo tapa con un contador de errores —y de ahí sale su queja más citada, «why is this giving me a logic error?»—; nosotros hemos prohibido castigar el fallo, así que ni siquiera tenemos ese parche.

Esto no es un matiz: es **el motivo por el que el desbloqueo tiene que colgar del progreso y no del acierto**. La versión buena de «las pistas se ganan» ya está escrita en la lista del diseñador y es la V6 (sobres).

#### (c) Guionista 1: las respuestas repiten hechos y una miente — **sí, con ML**

Es una mecánica distinta y compatible con las otras dos: no añade restricciones a la CSP, es una lectura posterior. Pero **no es «cero riesgo» como dice el documento**: pedir al jugador que señale la mentira es un segundo puzle y necesita su propia garantía. La propiedad es **ML**: exactamente una de las declaraciones es refutable con las pistas ya publicadas, y su refutación tiene certificado ≤N4. Si dos son refutables, hay dos respuestas válidas; si ninguna lo es antes de resolver el tablero entero, la mecánica no aporta nada. Verificación: por cada declaración `d`, comprobar con M12 si `pistas ⊨ ¬d`; exigir cardinal 1.

**Veredicto de familia.** La variante más sólida es **(a) con MV en lugar de IQ**, con **(c)** como capa narrativa encima cuando el caso la admita. **(b) queda descartada** y se sustituye por V6.

**Coste: 4-6 días.** Residuo y filtro MV 2, búsqueda en generación 1,5, solver en cliente para el menú vivo 1, plantillas y validación de respuestas 0,5-1,5.

---

### V5 · Testigo falso (diseñador 5)

**Modelado limpio.** No hay que hacer `n` reconstrucciones a mano: se introducen booleanos `l_i` («la declaración `i` es falsa») con `exactamente_uno(l₁..l_m)` y, por cada `i`, `(¬l_i → C_i) ∧ (l_i → ¬C_i)`. El sistema resultante se resuelve con el mismo solver, y la solución incluye la identidad del mentiroso. Esto es más limpio que enumerar `S_i` y da gratis la segunda respuesta que el diseñador quiere («sabes quién ha mentido»).

**Lo que exige del DSL: negación cerrada.** Todo predicado debe tener `¬` con semántica definida y test propio. Fácil para `en/no_en`, `misma_fila`, `adyacente`. **No trivial para `entre(A,B,C)`, `izquierda_de` y los ordinales de V2**, donde la negación tiene varias lecturas naturales. Decisión pendiente de `disenador-puzzles` (§7.4).

**Propiedades.** MP como el diseñador la define, más las condiciones que ya escribe: contradicción textual directa con exactamente otra pista, rama falsa muerta en ≤3 pasos, mentiroso identificable sin usar el contenido de su propia declaración. La última exige que la escalera trabaje en modo dos ramas y registre qué pistas usó cada rama. Con M3 sale casi gratis.

**Coste: 3-4 días.** Negación del DSL 1,5, modelo de mentiroso y MP 1, escalera en dos ramas y certificado 1, tests 0,5.

**Riesgos.** (a) Tasa de aceptación: el requisito de contradicción textual directa **y** rama falsa que muere en ≤3 pasos **y** exactamente un `i` válido es muy restrictivo; hay que medirlo. (b) Coste narrativo alto: las dos pistas contradictorias tienen que sonar a dos personas contando cosas distintas, no a un error de redacción. (c) No hay explosión: `m` declaraciones son `m` ramas de un solver que ya cuenta hasta 2.

---

### V6 · Revelación progresiva (diseñador 6, sobres)

**Modelado.** El caso completo cumple U+SA+NR igual que hoy. Lo que se añade es un **orden** y unos umbrales. Formalización de OD:

```
Para cada prefijo P_j de pistas (3, 5, 7...):
  el certificado restringido a P_j alcanza al menos u_j colocaciones correctas
  usando solo pasos de nivel ≤ N2
```

Se verifica ejecutando M3 con el prefijo y contando colocaciones deducidas. Coste: `j` ejecuciones de la escalera por candidato, despreciable.

**OR se cumple** por construcción: los sobres se abren por número de posiciones confirmadas, sin mirar si son correctas. El juego no dice nada sobre acierto. Esa diferencia con Clues by Sam es lo que salva la mecánica, y hay que escribirla en la especificación como restricción, no como detalle de producto.

**Coste: 2 días.** Ordenación de pistas por el generador 1, criterio OD y tests 1.

**Riesgo.** Que muchos candidatos válidos no admitan ninguna ordenación con OD. Mitigación barata: el generador ordena, y si ninguna permutación cumple, se descarta el candidato en vez de rebajar el umbral.

---

### V7 · Segunda deducción: el móvil (diseñador 7 + guionista 10 + producto 2)

Las tres son la misma cosa con distinta envoltura: micro-CSP de 3 candidatos y 2 pistas, resuelto después de acusar.

**Modelado.** Variable `motivo ∈ {m1, m2, m3}`, independiente de `pos` salvo por las pistas del móvil. U por enumeración de tres casos. NR: quitar cualquiera de las dos pistas deja ≥2 modelos.

**La condición que las tres listas mencionan y que hay que verificar de verdad:** el móvil **no debe ser entrañado por las pistas principales**. Con M12: `pistas_principales ∪ {motivo ≠ m*}` debe ser satisfacible. Si no lo es, el jugador ya lo sabía y el beat se pierde.

**Ojo con la variante de `producto` 2** («al acusar bien se revela una séptima frase»): si la séptima frase se revela solo al acertar, y con ella el motivo queda determinado, hay que comprobar además que esa frase no ayuda a nada del tablero principal —si no, al fallar el jugador pierde información que otro sí tuvo, y dos jugadores resuelven problemas distintos.

**Coste: 1,5 días.** Depende de M10 y M12.

**Riesgo.** Ninguno técnico. Coste narrativo medio: tres móviles creíbles por caso, todos los días, para siempre.

---

### V8 · Acusación anticipada (diseñador 8 + producto 9)

No toca la lógica del puzle. El motor aporta dos cosas:

- **«Probado» vs «ganado por poco»:** trivial, comparar el tablero completo contra la solución en el instante de acusar.
- **Lo que de verdad aporta valor y usa M3:** en el informe, decir si **el culpable ya era deducible** con el estado que tenía el jugador al mojarse. Eso separa la corazonada del razonamiento con un dato objetivo, y es lo que hace interesante el marcador del duelo.

**Sobre la mitigación de `producto` 9 (habilitar solo con medio tablero puesto): no elimina la lotería.** Con 4 sospechosos, acusar a ciegas acierta el 25 % de las veces, y colocar dos fichas cualesquiera no cambia esa probabilidad. Si el objetivo es que el atrevimiento sea mérito y no azar, el criterio tiene que ser el de arriba (¿era deducible?) y la puntuación del duelo debe premiar el «probado». Decisión de producto; el dato se lo doy yo.

**Coste: 0,5 días.**

---

### V9 · Tirar del hilo (diseñador 9)

**Es un contrato del DSL, no una mecánica.** Cada predicado debe implementar `cells(pista, estado) → conjunto de celdas`. En el estado inicial para pintar la pista; en el estado actual para atenuarla cuando deja de decir nada. Sale como subproducto de la propagación: las celdas que la pista elimina o fija.

**Coste: 0,5 días** si se escribe desde el principio junto a cada predicado; **3 días** si se añade después a un DSL de veinte predicados ya escritos. Es el ejemplo perfecto de por qué hay que decidir el contrato antes de programar.

El tablón de corcho descartado por el diseñador está bien descartado: no genera ninguna restricción nueva y no hay nada que verificar.

---

### V10 · Caso invertido (diseñador 10 + guionista 9)

**Corrección importante al documento del guionista.** Dice: «reutiliza algo que el motor ya calcula por obligación: qué pistas son mínimas y necesarias» y «se puede convertir cualquier caso ya escrito en su versión invertida sin reescribir nada». **Las dos afirmaciones son falsas, y por el mismo motivo.** NR garantiza que en un caso publicado **todas** las pistas son necesarias. Luego el único subconjunto que demuestra la solución es el conjunto completo, el juego consiste en marcar las seis pistas de seis, y no hay puzle.

**Para que V10 exista hace falta lo contrario de NR.** El caso invertido necesita un conjunto de pistas **deliberadamente redundante**: pistas que son coartadas de otros, ruido consistente y distractores verdaderos. Es un tipo de caso distinto, con su propio generador, y no se puede fabricar a partir del caso del día.

**Modelado.** El objetivo del entrañamiento no es toda la solución, es solo `pos(x) = R`. Con M12: para cada subconjunto `S ⊆ C`, ¿es `S ∪ {pos(x) ≠ R}` insatisfacible? Los `S` que sí lo son «prueban» la culpabilidad. Se filtran los minimales. **PU** exige que haya exactamente uno, de tamaño ≥2. Con 8 pistas son 256 comprobaciones; con 12 distractores, 4.096. Nada.

**Coste: 2 días.** Enumeración de soportes mínimos y PU 0,5 (M7 ya está), **generador de casos con redundancia controlada 1,5**, que es la parte que nadie ha presupuestado.

**Riesgo.** Coste narrativo medio-alto: escribir cuatro pistas verdaderas que no prueban nada y suenan a que prueban algo es trabajo de guion fino, no de plantilla.

---

### V11 · Sabueso (diseñador 11 + guionista 7 + producto 7)

Tres variantes, de menos a más motor:

- **Guionista 7 (0,2 días):** viste el contador de fallos existente con tres frases. Cero riesgo, cero información nueva.
- **Diseñador 11 (0,5 días):** «¿dónde quieres que huela?», elige un pasillo o un ala y ladra una vez por acierto en esa línea. Es una comprobación de ámbito reducido. **Cumple OR solo con un uso por caso**; si se pudiera repetir, sería un oráculo que reconstruye la solución línea a línea sin razonar. El límite de un uso no es una regla de producto, es una condición de corrección.
- **Producto 7 (1,5 días, la buena):** dos niveles sobre el certificado. Nivel 1, señala la pista que el jugador todavía no ha exprimido. Nivel 2, señala la habitación donde ya se puede colocar a alguien. Nunca dice a quién. Sale directamente de M3 y **no revela la solución, revela el siguiente peldaño**, que es la diferencia entre una ayuda y una chuleta.

**El problema real de la variante buena, que no está en ningún documento: qué hacer cuando el tablero del jugador ya es imposible.** Si ejecutamos la escalera desde su estado, el solver dirá «no hay solución», y decírselo es señalarle el error. Propuesta: **ejecutar la escalera siempre desde el estado inicial** y avanzarla hasta el último peldaño cuyas conclusiones sean todas compatibles con el tablero del jugador; señalar la primera pista de ese peldaño. Con esto Sabueso nunca da señal de error, siempre da un paso legítimo, y el jugador equivocado recibe una pista que le contradice, que es lógica honesta. Pendiente de confirmar con `disenador-puzzles` y `disenador-ux-ui`.

**Coste: 1,5 días** para la variante de producto, encima de M3 y M4. Exige el solver en cliente (TypeScript compartido; por eso el motor va en TS).

---

### V12 · Arco entre casos (diseñador 12 + producto 5 + guionista 3)

Tres niveles de compromiso:

- **Guionista 3 (0 días):** firma decorativa del villano al pie del informe. No es pista, no está numerada, no entra en el CSP. Regla dura, ya escrita por el guionista y que suscribo: **la firma nunca puede ser una de las pistas numeradas**, y va en el registro de decorados (V23) para que el validador la vigile.
- **Diseñador 12, semana firmada (2 días):** el culpable de cada día debe tener el rasgo asignado a ese día. Es una restricción **entre casos**, así que la semana se genera de una vez (M11). El domingo debe cumplir U+SA con sus propias pistas; los rasgos son un panel de archivo, disponible para todo el mundo. Correcto y verificable: basta con que el generador del domingo no reciba los rasgos como restricción.
- **Producto 5, libreta de domingos (2,5 días):** «quien tenga los tres hechos lo resuelve con dos pasos menos». Aquí la propiedad es **EN**: cada hecho importado debe ser **consecuencia lógica de las pistas propias del caso receptor**. Se comprueba con M12 (`pistas_domingo4 ⊨ hecho`). Si lo es, añadirlo no cambia el conjunto de soluciones (U intacta) y solo acorta el certificado, que es exactamente lo que el documento promete. Y «dos pasos menos» deja de ser una promesa: se mide ejecutando M3 con y sin la libreta.

**Coste combinado: 2,5 días** sobre M11 y M12.

**Riesgos.** (a) **Rigidez de calendario:** con restricciones entre casos, un fallo en el caso del martes obliga a regenerar la semana. Hay que diseñar la regeneración parcial desde el principio. (b) Coste narrativo alto y **continuo**, semana tras semana. (c) Ninguno lógico si EN se respeta.

---

### V13 · Cuatro manos (diseñador 13 + producto 11)

**Formalizable, con una precisión.** AM tal como está escrita («ningún jugador puede encadenar más de 2 pasos del certificado sin información que solo tiene el otro») habla de *un* certificado, pero hay muchos, y los jugadores encontrarán el que encuentren. La versión verificable es un **cierre alternado**, no un certificado concreto:

```
estado ← estado inicial compartido
repetir:
  cierre_A ← ejecutar la escalera con las pistas de A hasta agotarse
  cierre_B ← ídem con las de B
  exigir  |cierre_A| ≤ 2  y  |cierre_B| ≤ 2   en cada turno
  estado ← estado ∪ cierre_A ∪ cierre_B
  contar una alternancia
exigir  alternancias ≥ 3  y  estado final = solución
```

Esto es determinista, no depende del orden que elijan los jugadores (el cierre es un punto fijo) y se calcula con M3. Además hay que exigir lo que los dos documentos ya piden: A sola no da U, B sola tampoco, A∪B sí, y NR sobre la unión.

**Búsqueda del reparto.** Con 6 pistas, `C(6,3) = 20` repartos; con 8, `C(8,4) = 70`. Se prueban todos. **No hay explosión combinatoria en el reparto.** El riesgo es que **ningún** reparto cumpla el cierre alternado, y eso solo se sabe midiendo.

**El canal de deducciones cerrado de `producto` 11** (mandarse hechos de un formulario, no texto libre) es además un regalo para el motor: cada mensaje es un predicado del DSL, así que se puede **validar que lo que A afirma es realmente deducible con lo que A sabe**. Si no lo es, el juego no lo bloquea (sería un oráculo, violaría OR), pero el informe final puede decir quién dedujo y quién adivinó. Eso es contenido de sobremesa gratis.

**Coste: 3-4 días** de motor, sobre M3. El coste grande de esta familia es backend en tiempo real y está fuera de mi alcance.

**Riesgos.** Tasa de aceptación desconocida (el más alto de la lista junto con V4 y V5); y `producto` acierta al condicionarlo a una señal de demanda previa.

---

### V14 · El vistazo, mini de 3 minutos (diseñador 14)

Un preajuste: 3×3, 3 sospechosos, techo estricto N2.

**La única duda real:** con 3 sospechosos hay `3! = 6` soluciones posibles, y hace falta que exista un conjunto de pistas con U, NR y **ningún paso por encima de N2**. Es muy probable que exista, pero es una comprobación de cinco minutos que hay que hacer antes de prometer un mini diario: si el catálogo de casos 3×3 distintos con esas condiciones resulta ser de solo unas decenas, el mini se repite cada mes y se nota.

**Coste: 0,5 días.**

---

### V15 · Casa de dos plantas (diseñador 15)

**Modelado.** La restricción de cuadrado latino se mantiene **global** sobre las 6 filas y 6 columnas, como dice el diseñador. La novedad es que la adyacencia deja de ser retícula y pasa a ser **grafo** (M9): la escalera es la única arista entre plantas.

**DSL nuevo:** `justo_encima(A, B)` (misma columna, filas 3 y 4 exactamente), `planta(A, p)`, `cuenta(planta, k)` (restricción de recuento, familia nueva en el DSL), `mas_cerca_de(A, B, h_ref)` con distancia de grafo precalculada.

**Dos decisiones pendientes** (§7.3): si `justo_encima` es solo el par de filas 3-4 o cualquier par vertical dentro de una planta; y cómo se rompen los empates en `mas_cerca_de`.

**Coste: 2 días.** Nada de esto cambia la familia del solver. `720` soluciones base: trivial.

---

### V16 · Celdas bloqueadas / caso a puerta cerrada (producto 4, jueves; diseñador 3, candado)

**Es el mismo objeto formal en dos presentaciones:** `∀s: pos(s) ≠ h`. Como icono de candado es una **pista**; como «habitación sellada» anunciada en la cabecera es parte del **tablero**.

**La distinción importa y hay que fijarla en el esquema:** las celdas bloqueadas anunciadas van en `board.blocked`, no en `clues`, porque si van en `clues` entran en NR y en el recuento de pistas, y el jugador ve «7 pistas» cuando una de ellas es una regla del escenario. Propongo `board.blocked` para lo anunciado y el predicado `nadie_en(h)` para el candado que se descubre.

**Comprobación de existencia.** Con celdas prohibidas, la colocación es una permutación que evita posiciones vetadas. Antes de generar hay que comprobar que existe alguna: es el permanente de la matriz 0/1, o más simple, una llamada al solver sin pistas. Barato, pero si se olvida el generador entra en bucle.

**Efecto secundario que hay que vigilar:** bloquear celdas reduce mucho el número de soluciones base, lo que **facilita** encontrar U pero **dificulta** NR (con pocas soluciones, casi cualquier pista sobra). El generador necesita menos pistas de las habituales esos días.

**Coste: 1 día** sobre M9.

---

### V17 · La reconstrucción (producto 1) — la mejor relación valor/coste del documento

**No necesita nada nuevo: necesita M3 y que M3 serialice bien.** El certificado ya contiene, por peldaño: pistas usadas, técnica aplicada, celdas afectadas y estado resultante. Animar eso es frontend.

El contrato que hay que congelar antes de que `desarrollador-frontend` escriba una línea (es el encargo que `producto` §14 pide en `docs/specs/escalera-solver.md`):

```json
{
  "paso": 3,
  "tecnica": "cerco_de_pasillo",
  "nivel": "N2",
  "pistas_usadas": ["c1", "c3"],
  "celdas_afectadas": [{"fila":2,"col":1,"efecto":"descartar","sospechoso":"amelia"}],
  "conclusion": {"tipo":"fija","sospechoso":"amelia","celda":{"fila":2,"col":2}},
  "estado_resultante": "<dominios comprimidos>"
}
```

**Coste: 1 día** de motor. Es la pieza que más se ve por menos trabajo de motor de toda la lista, y **solo existe si M3 existe**.

---

### V18 · Escalafón de técnicas (producto 6)

**Formalizable a medias, y la mitad que no lo es hay que decirla antes de prometer nada al jugador.**

«Has usado el cerco de pasillo» **no es observable**. El motor ve colocaciones en un tablero, no razonamientos en una cabeza. Un jugador puede llegar a la misma celda por tres caminos distintos, o por intuición.

**Lo que sí es observable y verificable es TR: la técnica que el caso requiere.** `t` es requerida si al desactivar `t` en la escalera el caso deja de ser resoluble. Se calcula con `|T|` ejecuciones de M3 por caso, unas quince, despreciable.

**Propuesta concreta:** el cuaderno acredita las técnicas **requeridas por el caso**, cuando el jugador lo resuelve **sin Sabueso**. Es honesto («este caso no se podía resolver sin la pinza de dos alas, y tú lo resolviste»), es verificable y no obliga a fingir que leemos la mente. La frase de la interfaz cambia de «has usado» a «este caso exigía», que además suena mejor.

**Coste: 3 días.** Implementar 12-15 técnicas nombradas dentro de la escalera 2, cálculo de TR y huella por caso 0,5, exposición 0,5. La taxonomía en sí la fija `disenador-puzzles`; yo aporto la regla de detección de cada una.

**Riesgo real, y es de diseño, no de motor:** que los nombres no coincidan con las palabras del jugador. La prueba de cinco personas que propone `producto` es la correcta y hay que hacerla **antes** de implementar las quince detecciones, no después.

---

### V19 · Caso a la carta (producto 8)

Técnicamente es el generador de siempre con parámetros de decorado y reparto. Lo único nuevo es operativo.

**Recomendación firme: depósito precalentado, no generación en vivo.** Generar bajo demanda tiene tres problemas: latencia impredecible (el rechazo por NR o por dificultad puede obligar a decenas de intentos), imposibilidad de garantizar que exista un caso con esa combinación exacta de parámetros, y coste de cómputo en la ruta de petición. Un lote nocturno que llene un depósito de N casos por `(escenario, reparto, dificultad)` resuelve las tres cosas, y al jugador le da igual: sigue siendo «suyo» porque nadie más lo juega.

**Sobre la solución en claro.** La regla del proyecto es no enviarla al cliente. Conviene ser honesto sobre su alcance: **la solución es derivable de las pistas en el cliente** —eso es el juego—, así que ocultarla solo sube el listón. El valor real de la verificación en servidor está en duelos y en cualquier marcador; para el caso individual, hash con sal es suficiente.

**Coste: 2 días.**

---

### V20 · Hilo Escena↔Expediente (producto 12)

**Menos difícil de lo que el documento supone, si se plantea con EN.** No hace falta «generar dos puzzles acoplados y demostrar la unicidad de los dos» como un problema conjunto. Basta con:

1. Generar los dos casos **por separado**, cada uno con U+SA+NR, compartiendo el elenco.
2. Elegir los hechos a exportar `F` (por ejemplo «Ignacio estaba en las calderas»).
3. Comprobar con M12 que cada `f ∈ F` está **entrañado por las pistas del caso receptor**.
4. Si lo está, precargarlo no cambia el conjunto de soluciones: U intacta, certificado más corto. Se mide cuánto más corto con M3.
5. Si no lo está, ese par se descarta (o se exporta otro hecho).

Con eso se cumple la regla dura que el propio documento pone («cada caso se valida por separado antes de acoplar») sin ninguna maquinaria conjunta.

**Coste: 3 días** sobre M12, M11 y V24.

**El coste caro es narrativo, no de motor:** dos casos, el mismo pueblo, la misma tarde, el mismo elenco, dos crímenes que no se contradicen. Eso son dos guiones acoplados todos los días.

---

### V21 · Pásale tu caso (producto 10)

Lo único que pide al motor es «por qué paso va el otro»: mapear el estado del jugador al **peldaño más avanzado del certificado compatible con su tablero**. Es el mismo cálculo que Sabueso nivel 1 (V11) con otra presentación. El pinchazo sale de una lista cerrada alimentada por ese peldaño.

**Riesgo menor de fuga:** el observador ve el índice del paso, y si conoce el caso puede inferir qué ha colocado el otro. Es aceptable porque el observador **ya resolvió el caso**. Pero conviene que el pinchazo no mencione celdas ni nombres, como el propio documento exige.

**Coste: 1 día** sobre M3 y M4.

---

### V22 · Semana con carácter (producto 4 + guionista 12 + calendario del diseñador)

En motor es configuración más medida de dificultad. Cada día es una tupla `(tamaño, mecánica estructural, banda de dificultad objetivo, techo de técnica)`, y el lote la respeta.

Dos observaciones:

- **La etiqueta de dificultad tiene que ser independiente del día**, como dice `producto`, y eso solo es posible con M3+M5. Sin escalera no hay etiqueta, hay opinión.
- **La calibración no se hace sin datos.** La primera versión de la etiqueta será una función del número de pasos y del nivel máximo; se recalibra con `analista-datos` contra tiempo real y abandono. Hasta entonces las bandas son provisionales y hay que decirlo en la interfaz de administración, no en la del jugador.

El jueves «a puerta cerrada» es V16; el viernes de disparate es coste cero de motor (una etiqueta de tono en el brief); el miércoles es V4 o V6.

**Coste: 1 día** sobre M3, M5 y M11.

---

### V23 · Capa narrativa validada (guionista 2, 4, 5, 8, 11, 12)

Seis ideas cuyo coste de motor individual es casi cero y cuyo coste **conjunto** es una pieza real: **M6, la validación de la capa narrativa**. Sin ella, ninguna de las seis se puede publicar con garantías.

- **Testigos con personalidad (2).** Riesgo directo sobre la regla «una pista, una lectura»: cuanta más voz, más ambigüedad. Solución: la variación de voz ocurre **en el envoltorio**, y el núcleo del predicado se renderiza desde una lista cerrada de plantillas por predicado. La validación es la **vuelta**: retraducir el texto a forma formal y exigir que coincida con la original. Aviso honesto que hay que registrar: **la retraducción por IA es una heurística, no una prueba.** Mitigación: N retraducciones independientes que deben coincidir, más revisión humana la primera vez que se estrena una plantilla. Una plantilla validada se reutiliza sin coste.
- **La confesión (4).** Un campo `motivo` en el esquema, ya necesario por V7. Cero lógica.
- **El «y sin embargo» (5).** Necesita algo que hoy no existe: un **registro de decorados**, la lista de elementos de ambientación que no son pistas. El validador comprueba que el detalle reinterpretado está en ese registro y **no aparece en ninguna pista**. Es una comprobación de diez líneas y es la que impide que un giro literario contradiga la lógica.
- **Tú eres sospechoso (8).** Cero en la CSP; extiende la comprobación de concordancia a segunda persona.
- **Diario y reparto recurrente (11).** Identificadores estables de entidad en el esquema, y una comprobación de que **ningún caso depende de otro** (se cumple por construcción si cada caso se genera aislado; hay que asegurarse de que sigue siendo verdad cuando llegue V12).
- **Viernes de disparate (12).** Etiqueta de tono. Cero.

**Coste: 1,5 días** sobre M6 (registro de decorados, identificadores, motivo, concordancia en segunda persona).

---

### V24 · Modo Expediente (base, no está en ninguna lista pero condiciona V20)

Lo incluyo porque `funcionamiento-productos.md` §1.2 lo compromete para las semanas 10-14 y V20 depende de él.

**Modelado.** Asignación sospechoso→lugar→objeto (→motivo el domingo). Con 4 categorías de 6 elementos hay `6!³ = 373.248.000` asignaciones: **prohibido enumerar, obligatorio propagar**. Es el único sitio de todo este dictamen donde el tamaño del espacio importa de verdad, y aun así la propagación por arco-consistencia lo resuelve en microsegundos.

**DSL propio:** las pistas de Expediente no son espaciales sino relacionales (`mismo(A, B)`, `distinto(A, B)`, `atributo(x, valor)`, disyunciones). Comparten el motor de restricciones con Escena pero no los predicados.

**Coste: 3 días** sobre M10 y M0.

---

## 4. Riesgos, ordenados por lo que de verdad puede hacernos daño

### 4.1 Explosión combinatoria: **no es el riesgo que parece**

Los números, para cerrar el asunto:

| Escenario | Espacio de soluciones antes de aplicar pistas |
|---|---|
| Escena 4×4 | 24 |
| Escena 5×5 | 120 |
| Escena 6×6 (una o dos plantas) | 720 |
| Doble franja 4×4 | ≤ 576 |
| Doble franja 6×6 | ≤ 518.400 |
| Expediente 4 categorías × 6 | 373.248.000 |
| Testigo falso, 6 declaraciones | 6 × el espacio base |
| PU con 12 pistas | 4.096 comprobaciones |
| AM con 8 pistas | 70 repartos |

Todo menos Expediente es enumerable a fuerza bruta. Expediente exige propagación, que es lo que se construye en M0 de todas formas. **El coste real del motor no está en resolver: está en generar**, y concretamente en la **tasa de aceptación** de las propiedades especiales. Encontrar un caso que cumpla MP, o MV, o el cierre alternado de AM, puede exigir mil candidatos o un millón, y eso no se sabe hasta medirlo. Es el único número que puede hacer inviable una mecánica, y por eso las tres que dependen de él (V4, V5, V13) llevan «medir antes de comprometer» en su ficha.

La única explosión de verdad que he encontrado en las tres listas es la del espacio de preguntas de IQ (§V4), y se resuelve cambiando la propiedad.

### 4.2 Rendimiento en el navegador: **no es un riesgo**

Las mecánicas que necesitan solver en cliente son V4 (menú vivo), V6 (sobres), V11 (Sabueso), V21 (paso del otro) y V8. Todas trabajan sobre espacios de ≤720 modelos, o sobre propagación en Expediente. En TypeScript, en un móvil de gama media, eso son milisegundos. El motor va en TypeScript precisamente para compartir el solver con el frontend; el generador no se envía nunca al cliente.

### 4.3 Calibración de la dificultad: **riesgo medio, y es el que más tarda en resolverse**

No se puede calibrar sin jugadores. La primera etiqueta será una función del número de pasos y el nivel máximo del certificado, y estará mal. La corrección viene de `analista-datos` con tiempo real y abandono. Consecuencia práctica: **la etiqueta de dificultad debe ser un campo recalculable del esquema**, no un valor congelado en el caso, para poder reetiquetar el archivo entero cuando la calibración mejore.

### 4.4 Coste de contenido narrativo por caso: **el riesgo más caro a largo plazo**

Ordenado de más caro a más barato, por caso publicado:

| Nivel | Familias | Qué exige |
|---|---|---|
| **Muy alto** | V20, V12 | Dos guiones acoplados al día, o continuidad semanal indefinida |
| **Alto** | V5, V10 | Contradicciones que suenan a personas; distractores que suenan a pruebas |
| **Medio** | V4, V7, V19 | Respuestas por sospechoso; tres móviles; cinco escenarios × cuatro repartos |
| **Bajo** | V1, V2, V15, V23 | Plantillas nuevas, reutilizables |
| **Nulo** | V6, V8, V9, V11, V14, V16, V17, V18, V21, V22 | Ninguno |

Diez de las veinticuatro familias no cuestan ni una línea de guion adicional por caso. Es un dato relevante para el calendario: **la ruta barata existe y es larga**.

### 4.5 Riesgo de corrección silenciosa: **OR**

El más peligroso porque no lo detecta ningún test de unicidad. Un caso puede cumplir U, SA y NR y aun así ser resoluble sin razonar si un botón del juego responde algo sobre la solución. Ya ha aparecido dos veces en estas listas (el desbloqueo por acierto de `producto` 3 y el olfateo repetible de `diseñador` 11). **Propongo que OR entre en el checklist de `revisor-calidad` como línea 13**, con la formulación: *ninguna interacción del juego permite obtener información sobre la solución con menos razonamiento del que exige el certificado.*

---

## 5. Orden de construcción: qué desbloquea más por unidad de trabajo

### 5.1 La respuesta corta

**M3, la escalera de técnicas con certificado paso a paso.** Cuatro o cinco días de trabajo que desbloquean, total o parcialmente, **doce de las veinticuatro familias**: V17 (reconstrucción), V18 (escalafón), V11 (Sabueso), V6 (sobres/OD), V22 (dificultad medida), V21 (pásale tu caso), V8 (probado vs por poco), V13 (AM), V1, V5, V12 y V4. Además es la única forma de cumplir la segunda mitad de la regla 3 del proyecto: hoy podemos prometer «solución única», pero «sin adivinar» y «dificultad medida» **no se pueden afirmar sin M3**.

`director-producto` llegó a la misma conclusión desde el lado del jugador (§13 de su documento: «hay que pedírsela al motor una sola vez para tres cosas»). Desde el lado del motor son doce, no tres.

### 5.2 El ranking completo, por familias desbloqueadas por día

| Puesto | Pieza | Días | Familias que toca | Ratio |
|---|---|---|---|---|
| 1 | **M4** mapa pista→celdas | 0,5 | 4 | **8,0** |
| 2 | **M12** entrañamiento | 0,5 | 5 | **10,0** |
| 3 | **M7** harness de subconjuntos | 1 | 4 | 4,0 |
| 4 | **M9** grafo de habitaciones | 1 | 3 | 3,0 |
| 5 | **M3** escalera + certificado | 4-5 | **12** | 2,7 |
| 6 | **M11** lote con restricciones cruzadas | 1,5 | 3 | 2,0 |
| 7 | **M10** variables auxiliares | 2 | 4 | 2,0 |
| 8 | M1+M0+M2 plataforma base | 7 | 24 | (obligatoria) |
| 9 | **M6** validación narrativa | 3 | 24 (para publicar) | (obligatoria) |

M4 y M12 tienen mejor ratio que M3, pero son piezas de medio día que **solo valen si se escriben desde el principio**: `cells(pista, estado)` cuesta 0,5 días si se escribe junto a cada predicado y 3 días si se añade a veinte predicados ya hechos. Son la razón de fijar el contrato del DSL antes de teclear.

### 5.3 Orden recomendado

**Bloque 0 · Plataforma (7 días).** M1 DSL v1 con `cells()` y negación desde el primer predicado → M0 solver con conteo hasta 2 → M2 generador con semilla, NR y CLI. **Al final de este bloque se publica el juego base con U+NR garantizados.** Tests de propiedad obligatorios: todo caso generado tiene exactamente una solución; quitar cualquier pista rompe la unicidad; misma semilla, mismo caso.

**Bloque 1 · La llave (6 días).** M3 escalera + certificado, M4, M12. **Al final de este bloque se puede afirmar «sin adivinar» y «dificultad medida», y quedan a un día de distancia V17 (reconstrucción), V9 (tirar del hilo) y V11 (Sabueso).** Es el bloque que convierte el motor en el activo diferencial del proyecto: es lo que `producto` §6 identifica como «lo único que solo nosotros podemos hacer bien».

**Bloque 2 · Lo visible y barato (6 días, incluye M5).** V17, V9, V11, V8, V3, V14, V22. Siete familias, ninguna toca el generador, todas se ven en la primera partida. Coincide casi exactamente con el «ahora, con el MVP» del diseñador y con las tres favoritas de MVP de `producto`, lo cual es buena señal.

**Bloque 3 · Publicable con garantías (4,5 días).** M6 + V23. Sin esto no se publica contenido escrito por IA con las garantías que promete la regla 3.

**Bloque 4 · Estructura (5 días).** M7, M9, V6 (sobres), V16 (celdas bloqueadas), V10 (invertido), V15 (dos plantas). Aquí entra la primera mecánica estructural de verdad.

**Bloque 5 · Medir antes de construir (2 días de medición, no de construcción).** Bancos de 10.000 candidatos para MV (V4), MP (V5) y cierre alternado (V13). **Tres informes de tasa de aceptación.** Ninguna de las tres se construye antes de tener su número. Este bloque es el que evita gastar quince días en una mecánica que el generador no sostiene.

**Bloque 6 · Con datos (el resto).** M10, V24 (Expediente), V7, V2, V1, V19, V12, V20, V18, V21, V13.

**Lo que NO se construye:** la variante «pistas al acertar» de `producto` 3 (viola OR), el interrogatorio de texto libre (ya descartado por el diseñador y con razón), el caso invertido a partir de casos normales (matemáticamente imposible bajo NR), e IQ estricta (§V4).

---

## 6. Lo que no se puede garantizar, dicho sin rodeos

1. **IQ tal como está escrita.** No es una cuestión de tasa de aceptación baja: es una incompatibilidad estructural entre «cualquier terna sirve» y «elegir bien es una habilidad». Propuesta de sustitución: MV, el menú vivo.
2. **«Las pistas se ganan al colocar correctamente».** Viola OR. El botón se convierte en oráculo y el caso se resuelve por fuerza bruta sin razonar. Sustituto: sobres por progreso (V6).
3. **«Convertir cualquier caso ya escrito en su versión invertida».** Bajo NR el soporte mínimo es el conjunto completo. El caso invertido necesita un generador propio con redundancia deliberada.
4. **«Qué técnica usó el jugador».** No es observable. Solo lo es «qué técnica requiere el caso» (TR).
5. **Que la retraducción de un texto de IA a forma formal sea una prueba.** Es una heurística fuerte con mitigaciones (N retraducciones concordantes, plantillas cerradas, revisión humana al estrenar plantilla), no una demostración. Cualquier documento que diga «el motor valida el texto» debe decir «el motor valida la forma formal y contrasta la retraducción».
6. **Las tasas de aceptación de MP, MV y AM.** Hoy no las sabe nadie, ni yo. Son medibles en dos días y hasta entonces V4, V5 y V13 son apuestas, no compromisos.

---

## 7. Preguntas abiertas para `disenador-puzzles`

No asumo ninguna de estas. Cada una rompe casos reales si se decide mal.

**7.1 «Pegado» significa dos cosas distintas en los documentos actuales.** El vocabulario formal define `adyacente(h1, h2) ⟺ comparten lado`, pero la pista 3 del caso base de `funcionamiento-productos.md` («doña Amelia estaba en un pasillo pegado al de Rubén») es adyacencia **de fila**, no de habitación. Son dos relaciones diferentes con la misma palabra en español, y la regla 5 del checklist prohíbe los sinónimos. Propongo tres predicados con tres redacciones canónicas distintas y sin solape: `adyacente_hab(A,B)` («en habitaciones que comparten pared»), `pasillo_contiguo(A,B)` («en pasillos contiguos»), `ala_contigua(A,B)` («en alas contiguas»). **Confirmar.**

**7.2 `ve(A, B)`.** El diseñador lo define en V4 como «comparten pasillo, misma fila, nada más». ¿Rige también fuera del interrogatorio, en pistas normales? **Confirmar** que es un predicado del DSL general y no solo una plantilla de pregunta.

**7.3 `justo_encima(A, B)` y `mas_cerca_de`.** ¿`justo_encima` es exclusivamente el par de filas 3-4 que cruza la escalera, o cualquier par de filas verticalmente contiguas? ¿`mas_cerca_de` usa distancia de grafo (contando la escalera) o distancia de retícula? ¿Qué pasa con los empates: la pista es falsa, o no se genera? **Confirmar.**

**7.4 Negación de los predicados no binarios.** V5 exige `¬C` para todo predicado. `¬entre(A,B,C)` puede significar «B no está estrictamente entre A y C» o «el orden es otro». `¬izquierda_de(A,B)` puede incluir o no la igualdad de columna. **Confirmar caso por caso**; lo dejaré escrito en `docs/motor.md` cuando exista.

**7.5 Celdas bloqueadas: ¿tablero o pista?** Propongo `board.blocked` para lo anunciado en cabecera (fuera de NR y del recuento de pistas) y el predicado `nadie_en(h)` para el candado que se descubre. **Confirmar**, porque afecta a cuántas pistas ve el jugador.

**7.6 Doble franja: ¿cuadrado latino en las dos franjas?** El texto lo da por hecho pero no lo dice. Si se exige en las dos, dos personas no pueden cruzarse hacia el mismo pasillo, lo que es una restricción fuerte y probablemente deseada. **Confirmar.**

**7.7 Interrogatorio y NR.** ¿Las respuestas del interrogatorio cuentan como pistas publicadas a efectos de NR? Propongo que **no** (NR se aplica solo a las pistas base) pero que cada respuesta deba ser **no vacía** en el estado en que se hace la pregunta, que es lo que MV garantiza. **Confirmar.**

**7.8 Sabueso sobre un tablero imposible.** Propongo ejecutar la escalera desde el estado inicial y avanzar hasta el último peldaño compatible con el tablero del jugador, para no dar nunca señal de error. **Confirmar con `disenador-ux-ui`.**

---

## 8. Qué escribo yo a continuación, cuando se apruebe esto

| Entregable | Dónde | Contenido |
|---|---|---|
| Contrato del DSL v1 | `docs/motor.md` §1 y `engine/schema/clue.v1.json` | Predicado a predicado: semántica exacta, negación, `cells()`, redacción canónica única, test |
| Contrato de la escalera | `docs/specs/escalera-solver.md` | El JSON de §V17, técnicas N1-N4, regla de detección de cada una |
| Formato de caso | `engine/schema/case.v1.json` | `schema_version`, `seed`, `mode`, `size`, `board`, `entities`, `clues_formal`, `clues_text`, `solution`, `difficulty`, `metrics`, `decorados` |
| Cómo se valida un texto de IA | `docs/motor.md` §4 | Retraducción, plantillas cerradas, límites de la garantía |
| Tres informes de tasa de aceptación | `docs/specs/` | MV, MP y cierre alternado sobre 10.000 candidatos |

---

*Cambios a este documento: los registra `ingeniero-motor-puzzles`. Las decisiones de §7 las cierra `disenador-puzzles`; las de alcance (qué familias se construyen y en qué orden), `director-producto` en `docs/decisiones.md`.*
