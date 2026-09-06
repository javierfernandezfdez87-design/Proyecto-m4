# Propuesta de jugabilidad: Expediente, y la semana definitiva de los dos modos

Autor: `director-producto`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Para: decisión del fundador. No es un registro de decisión: si se aprueba, se registra junto con las ocho de Escena como **D-010** en `docs/decisiones.md` (decisiones 9 a 16).

Fuentes: `docs/contexto-proyecto.md`, `docs/decisiones.md` (D-003, D-005 a D-009), `docs/propuesta-jugabilidad.md` (tesis, tres firmas, semana con carácter, decisiones 1-8), `docs/diseno/ideas-expediente-disenador.md` (E-1 a E-12, 9 familias de pista, 14 técnicas, techo `n ≤ 5`), `content/ideas-expediente-guionista.md` (dossier, motivo, reparto de 24, ideas 4.1-4.10), `docs/ideas-expediente-producto.md` (arquitecturas A/B/C, reparto de piezas, E1-E10), `docs/motor-viabilidad-expediente.md` (CAP, NV, NC, NR-M, álgebra de máscaras, correcciones a E-7, E-12, T7, OP3, DV2, MT), `docs/diseno/panel-jugadores-expediente.md` (35 fichas puntuadas por cinco perfiles, arquitectura B-jueves, siete pruebas).

**Alerta de marca (D-006), comprobada hoy:** ninguno de los cinco disparadores se ha cumplido —sin usuarios (el producto no ha lanzado), sin vídeo de +100.000 visualizaciones, sin mención en prensa, sin conversación B2B ni editorial iniciada, y ningún tercero usando un nombre parecido en el material revisado—, así que **no procede registrar todavía** en la OEPM. Aviso operativo que esta propuesta refuerza: la decisión 3 de `ideas-expediente-producto.md` pone Expediente por delante en `B2B-MARCABLANCA` y en las líneas de papel, y **la primera conversación con un medio o una editorial cumple un disparador**. Recomiendo tener el expediente de la OEPM (clases 9 y 41, ≈250 €) preparado y aprobado presupuestariamente **antes** de abrir esa conversación, porque el disparador no avisa con antelación.

---

## 1. Resumen en una página

### 1.1 La tesis de Expediente, en dos frases

La del diseñador dice: *«ninguna pista se lee dos veces, y al acabar el juego te pide que demuestres una casilla»*. La primera mitad hay que ajustarla, y el motivo está en el propio panel: el **presupuesto de texto** saca 4,4 —la mejor nota de las 35— y **solo 1 de 5 se lo contaría a un amigo**. Es exactamente el caso de «tirar del hilo» en Escena (4,2 y 0 de 5): es el suelo de un producto bien hecho, no un argumento. Una tesis no puede colgar de algo que nadie repite.

Lo que sí repiten es otra cosa. Las dos frases del panel con 4 de 5 contable son **«el comisario se ha equivocado»** (Marta) y **«lo cerré con dos abiertas»** (Sofía). Y la frase de Luis sobre la contraprueba —*«convierte "acerté" en "sabía por qué"»*— es la que nombra el activo. La tesis ajustada:

> **En Expediente el expediente te llega ya empezado por alguien que se equivocó en una casilla, y tu primer trabajo es demostrar que se equivocó: ninguna pista se lee dos veces, ninguna sobra, y todas son ciertas siempre.**
>
> **Y cuando acusas, el juego no se limita a decirte si acertaste: te señala una casilla, te pide que la demuestres, y le pone nombre a la técnica de tabla que ese caso exigía.**

### 1.2 ¿Una tesis con dos caras o dos tesis? Una, con dos caras, y conviene decir cuáles

**Una sola tesis de producto, con dos caras.** El núcleo común es una frase que no cambia entre modos:

> **Tenemos una máquina que sabe por qué se deduce cada caso, y en vez de guardárnosla te la damos a jugar.**

Lo que cambia es el **verbo**, y el reparto es limpio:

| | Escena | Expediente |
|---|---|---|
| **Cara del certificado** | Te deja **preguntar** antes de deducir | Te obliga a **demostrar** después de deducir |
| **Mecánica que la encarna** | El interrogatorio de menú vivo (F-A) | La tabla del comisario (X-A) y la contraprueba (X-B) |
| **Momento** | Agencia **antes** | Prueba **después** |
| **Lo que el jugador dice** | «Lo cerré con dos preguntas» | «El comisario se equivocó» · «Sabía por qué» |
| **Pieza que lo sostiene** | M3 (escalera + certificado) sobre X0 | La misma, con otro catálogo de técnicas |

Y hay una asimetría real que conviene escribir, porque explica por qué Expediente no es «Escena con tabla»: **en Expediente el acto característico es demostrar un negativo**. «Clara no estuvo en el guardarropa» se prueba cruzando dos bloques, y esa deducción (el cruce en negativo) no existe en un plano. Diez de las catorce técnicas del modo son nuevas. Eso es lo que convierte el escalafón en una segunda colección de verdad y no en una insignia repetida.

**Consecuencia operativa de que sea una tesis y no dos:** un solo contrato de certificado, un solo cuaderno de técnicas con dos apartados, una sola página `/una-sola-solucion`, un solo correo diario, una sola racha. Dos tesis habrían significado dos marcas, dos landings sin cruce y dos backlogs. No.

### 1.3 Qué recomiendo, en una lista

**Mecánicas firma de Expediente (3).**

| | Firma | Panel | Motor | Estado |
|---|---|---|---|---|
| **X-A** | **La tabla del comisario** (E-5, ficha 13) | 4,2 · σ 0,75 · **4 de 5 contable** | τ ≈ 100 %, 1 día | **Lanzamiento del modo.** Es el jueves |
| **X-B** | **La contraprueba + el escalafón de tabla** (E-10 + ficha 31) | 4,2 y 4,2 · 2 y 3 contable | 0,5 días + dentro de M3 | **Lanzamiento del modo** |
| **X-C** | **El vis a vis** (E-7, ficha 15) | 4,2 · σ 0,75 · **4 de 5 contable** | **Riesgo real.** Exige **tres** pistas de apertura | **Fase 2, condicionada** a la Compuerta 0 |

**Al lanzamiento del modo, además de las firmas.** Presupuesto de texto como criterio de publicación (3) · fichas plegadas por defecto (1) · pistas por atributo de ficha (2) · tirar del hilo entre bloques con autopropagación por defecto salvo experto (34) · acusación atómica con tres resultados (33) · reconstrucción de la rejilla con el salto entre bloques (21) · motivo como segunda fase saltable (4) · el reparto/recuento con la forma canónica corregida (20) · la rueda de reconocimiento (19) · el pasillo con orden (17) · sobres por casillas ✓ y coartada confirmada (32) · guardar, restaurar y vaciar (25) · el vistazo 3×3×3 y el tutorial que solo salta el primer jueves (35) · el expediente de una página imprimible (26) · membrete de una línea (9) · confesión y «y sin embargo» con filtro cozy (6) · viernes de armas absurdas como tono compartido (30).

**Fase 2.** El vis a vis (15) si la Compuerta 0 lo pone en verde · el objeto perdido (12) como mecánica del segundo día · la coartada cruzada (10) como especial mensual y de archivo · el expediente invertido (14) en archivo, Pack Aula y Premium · Expediente Junior (27) · el reparto recurrente con NR-M1..4 (7) · «tú eres sospechoso» en rejilla (28) · la doble víctima en la versión del diseñador (16) · la cadena de custodia (11) si la Compuerta 0 lo permite · casos de época (29) · el villano con arma firma (23) · el objeto con historia y la vitrina (8) · el XL de cuatro categorías a `n = 4`, **fuera del ritual** (5) · la rejilla a dos manos en papel ya, en digital solo si el papel pasa (24).

**Descartar.** El **domingo de la conspiración** (22) · la **doble víctima del guionista** con dos fallecidos (N-1 del motor) · la forma canónica del recuento tal como está escrita en E-12 (idénticamente verdadera) · la forma canónica de T7 sobre lugares (es tablero, no pista) · la **lectura existencial de MV-E** (viola OR) · el **mentiroso** en cualquiera de sus formas · la **disyunción cruzada de categorías** · el **interrogatorio de texto libre** · **seis elementos** por categoría y **cinco elementos con cuatro categorías** · las **pistas cifradas** · el **«tú» dentro de una pista numerada** · dos marcas falsas en la tabla del comisario · la **autopropagación obligatoria**.

### 1.4 Cómo he pesado las discrepancias

La misma regla que en Escena, sin excepciones:

> **El panel decide la variante y el hueco del calendario; no decide si una mecánica existe. La diferenciación (D-009) decide qué construimos; el panel decide a quién se lo servimos y cómo. Y por encima de los dos, la aritmética del motor no se vota.**

Aplicada, esto significa tres cosas concretas en esta ronda:

1. **El panel gana el hueco y me hace cambiar de arquitectura.** Yo recomendaba B (jueves y domingo); el panel recomienda B-jueves y tiene razón. Lo explico en la §2 y me corrijo sin adornos.
2. **El panel no gana los descartes.** La coartada cruzada saca 3,2 y no desaparece: baja a especial mensual y a archivo. El expediente invertido saca 3,4 con la σ más alta y no desaparece: es archivo, aula y Premium, que es donde el propio panel lo pone. Lo que el panel dice de una mecánica dividida no es «esto no gusta», es «esto sirve a un segmento», y eso decide dónde vive, no si existe.
3. **El motor gana siempre que el argumento sea aritmético.** El domingo `5×5×5 + motivo` que yo escribí son 1.728.000 modelos contra un CAP de 150.000 y 150 casillas contra un techo de 96. No es una diferencia de criterio: es una cuenta que no hice. Igual que E-12 («exactamente dos de ellos estaban arriba» no elimina ni un modelo bajo biyección), la forma canónica de T7 y MV-E con dos pistas de apertura. Las cuatro se corrigen aquí y ninguna es negociable.

Y añado el criterio propio de Escena, porque cambia el podio: **el criterio de candidatura a firma es nota ≥3,6 y al menos 3 de 5 lo contarían.** Deja seis fichas: objeto perdido (4,4/3), tabla del comisario (4,2/4), vis a vis (4,2/4), escalafón (4,2/3), viernes de armas absurdas (3,8/4) y tú eres sospechoso (3,6/3). De esas seis, **solo tres son foso**: comisario, vis a vis y escalafón. El objeto perdido es una mecánica excelente que cualquiera copia en una tarde (basta con poner cinco objetos y cuatro personas); el viernes es tono; «tú eres sospechoso» es un especial. Y la contraprueba (4,2, contable 2) entra como firma **emparejada con el escalafón**, con el mismo argumento con el que en Escena emparejé la reconstrucción con el escalafón: son la misma promesa contada en dos momentos, y separadas una es un adorno y la otra una insignia sin contexto.

**Dónde discrepo del diseñador, y por qué.** Sus cinco favoritas son E-7, E-10, E-1, E-5 y E-3. Confirmo tres (E-7 condicionada, E-10 y E-5, que él coloca en cuarto lugar y yo pongo primera), y bajo dos:

- **E-1, la coartada cruzada,** es la única mecánica del documento que **contradice literalmente la tesis del propio modo**: una disyunción se lee dos veces por construcción. Lo dice el panel y lo firma su nota (3,2, σ 1,17, dos doses). Y hay un motivo mejor, que descubrí escribiendo el ejemplo de la §4.3: **el vis a vis entrega la emoción de E-1 sin su defecto.** La frase que condena a Diego se la arranca el jugador a otra persona, es verdadera, y no hay ninguna disyunción que releer. Si la firma de la declaración verdadera que condena ya está en X-C, E-1 es un especial, no un sábado.
- **E-3, la cadena de custodia,** es la más cara de las cinco (2 días), la de tasa más incierta (5-20 %, desconocida) y la que el panel puntúa peor de las estructurales caras (3,2 con un solo defensor). Es fase 2 y con compuerta, no favorita.

**Dónde discrepo del guionista.** Sus ideas gustan a un perfil, Luis, exactamente como en Escena; nueve fichas reciben un 5 suyo y un 2-3 del resto. La diferencia con Escena es que **aquí Luis es el dueño de la casa**: prefiere Expediente, paga el archivo y es quien sostiene la línea de papel. Así que su material entra, pero con la misma frontera de siempre —toda la narrativa fuera de las pistas numeradas— y con tres correcciones que el panel encontró y nadie más había visto (apellidos, vocabulario violento, «tú» en pistas). Están en la §7.

---

## 2. La arquitectura, decidida

### 2.1 Las tres posiciones sobre la mesa

| Quién | Qué propone | Con qué argumento |
|---|---|---|
| **Yo** (`ideas-expediente-producto.md` §1.4) | **B**: Expediente el jueves y el domingo; el domingo XL `5×5×5 + motivo` con la conspiración | Reversibilidad, medición limpia, coste de firma humana, palanca de Premium |
| **El panel** (§2 y §7) | **B-jueves**: solo el jueves; el domingo sigue siendo Escena de dos plantas | Media 3,6, σ 0,49, **la única arquitectura sin ningún 2**. B pierde con los dos perfiles a los que toca el día |
| **El motor** (§4.17 y §9.5) | B es imposible tal como la escribí | `(5!)³ = 1.728.000 > CAP 150.000`; 150 casillas > techo 96; la conspiración de seis culpables está **prohibida dos veces** |

### 2.2 Decisión: **B-jueves**. El domingo no se toca

Me corrijo, y quiero que quede escrito por qué, porque el error es mío y es instructivo.

**Primero, la aritmética.** Dos de los tres componentes de mi domingo estaban muertos antes de que nadie opinara. El XL de cinco elementos con motivo no cabe en el motor ni en la pantalla, y la conspiración de seis culpables está prohibida por CAP y por el techo del diseñador. Lo que queda de mi domingo es el XL de `n = 4` con cuatro categorías (13.824 modelos, 96 casillas) —que es legal— y resulta que es **la peor nota de las 35 fichas del panel: 2,4**, seguida de la conspiración con 2,8, la tercera peor. Mi domingo perdía por tres vías independientes y yo solo había comprobado ninguna.

**Segundo, la reversibilidad, que es mi propio argumento y va en mi contra.** Escribí que se empieza por el lado del que se puede volver. El domingo es **el único día con un ritual establecido y colectivo**: 15-25 minutos, en el sofá, tres cabezas sobre una tableta, y la prensa española describe el consumo del género exactamente así. La familia Ruiz es el 100 % de su uso doméstico en ese día. Cambiar la superficie del domingo es el movimiento menos reversible del calendario y yo lo puse en la primera versión. B-jueves es un escalón por debajo del mío en el mismo eje, y por tanto es más coherente con mi propio criterio que mi propia propuesta.

**Tercero, el coste de contenido baja otra vez a la mitad.** Bajo B eran ≈104 Expedientes validados al año; bajo B-jueves son **52**. El cuello de botella sigue siendo la firma humana de F4/M5 (resolución a ciegas antes de publicar), que D-009 mantiene expresamente como límite. Luis y Diego lo dicen con sus palabras en el panel: prefieren dos a la semana sin una errata que siete con una al mes.

**Y cuarto, lo que no cambia.** La **paridad de producto** se mantiene entera: motor con certificado propio, escalafón propio, reconstrucción propia, archivo, imprimible, landing y pack. El panel decide el hueco; D-009 decide que Expediente se construye como producto completo. Un modo que existe un día a la semana **no es un modo de segunda si el día es bueno**; es un modo de segunda si el día es un relleno. Por eso el jueves lleva la firma X-A y no un caso genérico.

**Lo que asumo y no disimulo.** Un modo de un día a la semana no construye hábito propio y su escalafón se llena a un séptimo de velocidad. El diseñador lo avisa (42 jueves para 14 técnicas) y el motor lo empeora (dos técnicas atadas a mecánicas mensuales). No lo dejo abierto: lo arreglo en la §8.3 con tres números —12 técnicas al lanzamiento en vez de 14, acreditación con **2** casos en vez de 3, y **el archivo y los ilimitados de Premium cuentan**—, y eso convierte el problema en la mejor palanca de conversión que tiene el modo.

### 2.3 Los umbrales para abrir el segundo día, y cuál es

Escritos antes de ver un solo dato, y con la escalera completa para que nadie improvise el paso siguiente.

**Escalón 0 · Lanzamiento.** Expediente solo el jueves.

**Regla de gracia del primer mes, que es nueva y resuelve un problema que el panel encontró y nadie había escrito.** El día de gracia de la racha es uno cada treinta y los jueves son cuatro al mes: quien no soporte la tabla no tiene escapatoria dentro de la racha. La solución no es dejar que un caso del archivo cuente (rompería «el mismo caso para todos» y crearía un segundo ritual invisible). La solución es: **durante las cuatro primeras semanas de vida del modo, el jueves no rompe la racha ni la avanza**, anunciado en la portada y en el correo. Es honesto, es temporal, es un motivo para hablar («el primer mes el jueves es de propina») y —esto es lo importante— **el porcentaje que juega el jueves sin presión de racha es la medida más limpia de deseo que vamos a tener nunca**. Es el dato que alimenta el escalón siguiente.

**Escalón 1 · Se abre el segundo día** si durante **cuatro semanas seguidas** se cumplen las cuatro:

- **(a)** ≥15 % de quienes juegan el jueves juegan además un Expediente del archivo **por su cuenta** en los siete días siguientes (disparador del diseñador; mide deseo, no curiosidad).
- **(b)** La tasa de resolución del jueves está en la banda **50-70 %**.
- **(c)** El retorno D1 desde el jueves no cae más de **5 puntos** frente a la mediana de los días Escena de esa semana.
- **(d)** Menos del **15 %** de los activos diarios se salta el jueves sistemáticamente.

**El segundo día es el viernes, no el domingo y no el martes.** El criterio es el del propio diseñador y es el mejor que hay: **el día conserva su carácter al cambiar de superficie**. El viernes es «el día del objeto, sin fallecidos, humor cozy»; en Escena eso es el rastro del objeto (V2) y en Expediente es **el objeto perdido (E-4)**, que es la mecánica estructural mejor puntuada de las 35 (4,4, σ 0,49, 3 de 5 contable), la que la familia pide con frase propia («uno se quedó en el recreo») y la única que Diego puede dar en primaria baja tal cual. Y el viernes es el día que Diego imprime para el lunes. El domingo queda fuera para siempre salvo que la prueba 5 diga lo contrario; el martes es el día canónico de Escena de Luis, y quitarle su Escena al perfil que paga el archivo es exactamente el mal negocio que el diseñador describe. Coste que se acepta: bajo el escalón 1, **V2 (rastro del objeto) pasa a especial mensual y a archivo**.

**Escalón 2 · Semana paralela de Expediente** (la §4.1 del diseñador, que solo existe bajo la arquitectura A): se reabre **solo** si el escalón 1 vuelve a cumplir los cuatro umbrales durante cuatro semanas **y** el tiempo de curación humana por caso medido por `revisor-calidad` permite 730 resoluciones a ciegas al año sin bajar el listón. Con la conspiración recuperable ahí y solo ahí, porque **bajo B-jueves no existen seis culpables de Expediente en una semana**: la idea es estructuralmente imposible antes del escalón 2, y eso es un argumento que no había dado nadie.

**Escalón −1 · Repliegue.** Si más del 25 % de los activos diarios se salta el jueves durante dos semanas seguidas, o si el abandono antes de acusar en Expediente supera al de Escena en más de 12 puntos, el jueves pasa a **quincenal** antes que a desaparecer, y Expediente vive del archivo, la landing, el PDF y Premium, que es donde ya paga su desarrollo. C (Expediente como caso opcional sin racha) sigue siendo el plan de repliegue final y no el plan.

### 2.4 La semana definitiva de los dos modos, en una sola tabla

Versión v2 de `docs/propuesta-jugabilidad.md` §4. Una mecánica estructural por caso y nunca dos; las transversales (tirar del hilo, Sabueso, reconstrucción, escalafón, contraprueba, acusación etiquetada, motivo de segunda fase) van en todos los casos y no cuentan como estructurales.

| Día | Modo | Nombre en pantalla | Tamaño | Mecánica estructural (una) | Duración objetivo | Banda medida |
|---|---|---|---|---|---|---|
| **Lunes** | Escena | **El corto** | 4×4 | Sobres por progreso (V6) | 5-7 min | Suave |
| **Martes** | Escena | **El clásico** | 5×5 | Ninguna | 7-9 min | Normal |
| **Miércoles** | Escena | **El interrogatorio** | 4×4 | Menú vivo (V4 · MV) | 8-12 min | Normal-enrevesado |
| **Jueves** | **Expediente** | **La tabla del comisario** | **4×4×4 · 3 bloques · 48 casillas** | **Marca falsa (E-5 · MT)** | **8-11 min** | Enrevesado |
| **Viernes** | Escena | **De disparate** | 4×4 | Rastro del objeto (V2) | 6-9 min | Suave-normal |
| **Sábado** | Escena | **El difícil** | 5×5 | **Celdas bloqueadas (V16)**, que se muda aquí desde el jueves | 10-14 min | Difícil / brutal |
| **Domingo** | Escena | **El XL** | 6×6, dos plantas | Casa de dos plantas (V15) | 15-25 min | Enrevesado, **nunca el más duro** |

**Fuera del ritual diario, todos los días:** el vistazo de Escena 3×3 y el **vistazo de Expediente 3×3×3** (2-3 min, numeración propia, no tocan la racha; semanal en vez de diario si la medida C0-5 del motor da menos de 200 casos distintos) · el **expediente invertido** (E-6) en archivo, Pack Aula y Premium · el **XL de Expediente** de `n = 4` y cuatro categorías en archivo, Premium y especial mensual · el caso a cuatro manos y la rejilla a dos manos cuando pasen su prueba en papel.

**Especiales mensuales, alternos:** «Tú eres sospechoso» (en plano o en rejilla) · la coartada cruzada (E-1) · la doble víctima (E-8) · la cadena de custodia (E-3), esta última solo si la Compuerta 0 la pone en verde.

**Cinco reglas duras del calendario, cuatro heredadas y una nueva:**

1. La regla del día se anuncia **en la portada del caso**, nunca en un tutorial. Y el jueves además en el correo: «hoy toca expediente», antes del botón.
2. Una estructural por caso.
3. La etiqueta de dificultad es independiente del día y la pone el motor con el certificado.
4. El domingo es el más grande y no el más duro. Comprobado con la medida C0-8 del motor, no declarado.
5. **Nueva: el jueves nunca es una tabla vacía de seis pistas.** El cuaderno del jueves llega siempre con algo dentro —las marcas del comisario, o los `givens` de la coartada confirmada—. Es la mitigación de la confusión de modos y es lo que hace que Marta abra el jueves.

**Qué cambia respecto de la v1 y por qué:** el jueves cambia de modo y **conserva su carácter** («el día en que el tablero llega tocado»: en Escena una habitación sellada, en Expediente unas marcas ya puestas). Celdas bloqueadas (V16) se muda al sábado y le da a «el difícil» una razón que no sea solo más profundidad, que era la debilidad que el diseñador señala del sábado. El domingo y el resto de la semana no se tocan.

---

## 3. Tabla maestra de Expediente

Las 35 fichas del panel, unificadas ya con las correspondencias que el propio panel establece (§3 de su documento) y con las correcciones del motor. «Contable» = cuántos de los cinco perfiles se lo contarían a un amigo. «Días» = días de agente **incrementales** sobre la plataforma compartida (X0, M1, M2, M3, M4, M6, M10) y sobre el motor base de Expediente; no se pueden sumar sin ella. Cuando el motor y el diseñador dan cifras distintas, uso la del motor.

| # | Ficha (código) | Qué es en una línea | Media | σ | Contable | Motor · propiedad | Días | Dependencias | Recomendación y motivo |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Dossier con fichas | Cabecera, ficha por entidad, pistas secas aparte | 3,6 | 1,02 | 2 | Sí · CN + registro de decorados | 0 (en M6) | M6 | **Lanzamiento con fichas plegadas.** Desplegado es más texto que un caso entero de Escena |
| 2 | Pistas por atributo (T5/T6) | «Quien estaba en el archivo llevaba algo de plata» | **4,2** | 0,75 | 2 | Sí · 5 reglas duras de atributo | 0 (en M1-E) | M1-E, M4 | **Lanzamiento, obligatoria.** Es la bisagra: un caso sin T5 es una tabla |
| 3 | Presupuesto de texto | ≤20 palabras por pista, ≤120 por caso, cabecera ≤45 | **4,4** | 0,49 | 1 | Sí · contador en el validador | 0,25 | — | **Lanzamiento, criterio de publicación.** Mejor nota de las 35 y no es una mecánica: el problema del modo es el texto |
| 4 | Motivo, segunda fase (E-2) | Tres motivos, dos pruebas eliminatorias, saltable | 3,8 | 0,75 | 1 | Sí · U+NR micro-CSP + **no entrañado** + NR-M3 | 0,5 | M12, E-2 | **Lanzamiento, todos los días.** Compartir al lado, nunca detrás |
| 5 | Motivo como 4ª categoría (XL) | 3 bloques → 6, 96 casillas | **2,4** | 1,02 | 1 | Sí a `n=4` (13.824) · **No a `n=5`** (CAP) | 0 | CAP | **Fuera del ritual:** archivo, Premium y especial mensual. **Peor nota del panel** |
| 6 | Confesión y «y sin embargo» | Epílogo del culpable y giro sobre un decorado del objeto | 3,2 | 0,98 | 1 | Sí · CN + decorados | 0 (en M6) | M6 | **Lanzamiento**, con filtro cozy y **nombre canónico del objeto** (§7.3) |
| 7 | Reparto recurrente de 24 | Elenco con oficio, rasgo, secreto y estados | 3,0 | 1,10 | 1 | Sí · **NR-M1..4** + prueba del veterano | 0,5 + contenido | M11 opcional | **Fase 2**, con las tres correcciones de la §7. Barato de generar, caro de mantener |
| 8 | Objeto con historia y vitrina | Segunda línea de procedencia y colección de armas | 3,0 | 0,63 | 1 | Sí · sin motor | 0,5 (frontend) | — | **Fase 2.** La vitrina sí; la segunda línea **fuera de la ficha jugable** |
| 9 | Membrete de informe | «Informe forense:» y debajo la pista seca | 3,4 | 0,80 | 1 | Sí · atribución sí, voz no | 0 (en M6) | M6 | **Lanzamiento.** Catálogo cerrado de 4-5, una línea, sin firma ni fecha |
| 10 | Coartada cruzada (E-1) | Dos coartadas verdaderas que se estorban | 3,2 | **1,17** | 2 | Sí · CC1-4; **CC3** es el filtro real; τ 10-30 % | 1,5 | M3 rama N4 | **Fase 2, especial mensual y archivo.** Contradice la tesis del modo: una disyunción se lee dos veces |
| 11 | Cadena de custodia (E-3) | Dos personas se intercambiaron lo que llevaban | 3,2 | 0,98 | 2 | Sí · CT1-3 **+ CT4**; τ 5-20 % desconocida | 2 | M10, CAP, `n=4` | **Fase 2 con compuerta.** La más cara y la más incierta; especial mensual, nunca regla de semana |
| 12 | Objeto perdido (E-4) | Cinco objetos, cuatro personas: uno sin dueño | **4,4** | 0,49 | **3** | Sí · INJ, OP1-2, **OP3′ = TR** ; τ >40 % | 1 | CAP | **Fase 2 como mecánica del segundo día (viernes).** Mejor estructural del panel, pero no es foso |
| 13 | **Tabla del comisario (E-5)** | Un tercio de marcas puestas; **una está mal** | **4,2** | 0,75 | **4** | Sí · MT1-5 **+ tres regímenes de `givens`**; **τ ≈ 100 %** | 1 | M12, M3 | **FIRMA X-A · lanzamiento.** Única ficha nueva en las tres listas: media, contable y jueves |
| 14 | Expediente invertido (E-6) | El cuaderno llega resuelto; marca las 3 pistas que lo prueban | 3,4 | **1,36** | 2 | Sí, con **generador propio**; NR no aplica; τ desconocida (C0-6) | 2 | Generador propio | **Fase 2**, archivo, Pack Aula y Premium. **Nunca caso del día**; no pasa por el pipeline diario |
| 15 | **Vis a vis (E-7)** | Pocas pistas y cuatro fichas de interrogatorio | **4,2** | 0,75 | **4** | **Parcial.** MV-E en lectura **universal**; exige **`\|R₀\| ≤ 16`** → **tres pistas de apertura** | 3 (+2 con V4) | MV compartido, M3 | **FIRMA X-C · fase 2 condicionada.** Medir con tres pistas: con dos, τ = 0 por aritmética |
| 16 | Doble víctima (E-8) | Un hecho grave y un hurto: ¿una persona o dos? | 2,8 | 0,75 | 2 | Sí · DV1-4, **DV2′** sobre el residuo; τ 5-20 % | 0,5 | M12 | **Fase 2, especial mensual.** La versión del guionista (dos fallecidos) **se descarta**: regla 5 |
| 17 | El pasillo (E-9) | Los lugares en tira ordenada con origen declarado | 3,6 | 0,49 | 1 | Sí · ORD1-4 **+ regla 5**: la forma canónica habla de personas, no de lugares | 1 | `board.order` | **Lanzamiento como familia transversal.** Máximo una pista que cruce dos órdenes, nunca la primera |
| 18 | **Contraprueba (E-10)** | Al acusar: «¿con qué lo demuestras?», 40 segundos | **4,2** | 0,75 | 2 | Sí · CP1-4; **opcional por caso** | 0,5 | X0 (soportes mínimos) | **FIRMA X-B con la 31 · lanzamiento.** No impone nada al generador: no baja ninguna tasa |
| 19 | Rueda de reconocimiento (E-11) | Un testigo describe por atributos, con portador único | **4,4** | 0,49 | 2 | Sí · RR1-4; **etiqueta `N1+lectura`**, no N2 | 0,25 | Fichas | **Lanzamiento, transversal.** La más intuitiva del modo; no cuenta como profundidad |
| 20 | El reparto / recuento (E-12) | «Exactamente dos de los que subieron llevaban metal» | 4,0 | 0,63 | 1 | **Parcial:** la forma publicada es **idénticamente verdadera**. Se salva con **CNT5 y CNT6** | 0,5 | NV | **Lanzamiento con la forma corregida.** Contar intersecciones de dos propiedades, nunca una sola |
| 21 | Reconstrucción con salto entre bloques | Las casillas se encienden en el orden del certificado | 4,0 | 0,63 | 2 | Sí · serialización + **localizador polimórfico** | 1,5 (frontend) | Certificado | **Lanzamiento** (parte de X-B). Nadie en el género enseña el salto entre bloques |
| 22 | Domingo de la conspiración | Los culpables de la semana, sospechosos del domingo | 2,8 | **1,17** | 2 | **No:** `n = 6` prohibido dos veces (CAP y techo). Exige M11 | 1,5 + M11 1,5 | M11, EN | **Descartar.** Tercera peor nota, y bajo B-jueves **no hay seis Expedientes en la semana**. Reabrir solo en el escalón 2 |
| 23 | Villano con arma firma | Un ladrón recurrente deja siempre un naipe | 2,8 | 0,75 | 1 | Sí · texto de cierre, jamás pista ni ficha | 0 | M6 | **Fase 2.** Cuesta una frase; el riesgo es de disciplina, no de juego |
| 24 | Rejilla a dos manos (hoja A / hoja B) | Dos juegos de pistas, una rejilla, nadie puede solo | 3,6 | **1,20** | 2 | Sí · **AM** como cierre alternado; se reparte mejor que en plano | **0** papel · 3-4 + backend | M3, backend | **Papel ya**, en la misma tanda que la prueba 4 de Escena. Digital solo si el papel pasa |
| 25 | Guardar, restaurar y vaciar | Instantánea del cuaderno para probar una hipótesis | 3,8 | 0,75 | 0 | Sí · sin motor; instantánea de F7 | 0,5 | F7 | **Lanzamiento.** Fruta madura: responde a la petición de anotación más citada sin romper nada |
| 26 | Expediente de una página | Un A4 con caso, rejilla en blanco y solución al dorso | 3,4 | **1,20** | 2 | Sí · exportador sobre el certificado | 1,5 | Certificado | **Lanzamiento del modo.** Es la razón comercial por la que Expediente existe |
| 27 | Expediente Junior | 3×3×3 sin víctima, «quién se llevó qué del armario» | 3,4 | **1,36** | 2 | Sí · preajuste vistazo; medida **C0-5** (δ ≥ 200) | 1 | JUNIOR-WEB | **Fase 2.** Hueco verificado: `murdle_jr_setting` vacío en el código del líder |
| 28 | Tú eres sospechoso, en rejilla | El nombre del jugador es una fila del cuaderno | 3,6 | 0,49 | **3** | Sí · concordancia tuteo/voseo | 0 | M6 | **Fase 2, especial mensual.** **Corrección:** el «tú» nunca dentro de una pista numerada (§7.3) |
| 29 | Casos de época | El expreso de 1923, con oficios y objetos propios | 3,2 | 0,98 | 1 | Sí, **coste cero** · `board.order.topologia = "linea"` | 0 | E-9 | **Fase 2.** El riesgo es de anacronismo y vocabulario, no de motor |
| 30 | Viernes de armas absurdas | «Una tarta de tres capas, todavía tibia» | 3,8 | 0,98 | **4** | Sí · etiqueta de tono; el chiste **nunca** en la pista | 0 | — | **Lanzamiento como tono compartido.** El mismo viernes en los dos modos. No es foso |
| 31 | **Escalafón de Expediente** | El juego nombra la técnica de tabla que el caso exigía | **4,2** | 0,75 | **3** | Parcial · **TR**; catálogo propio, **10 de 14 no existen en Escena** | 3 (en B-3) | M3 | **FIRMA X-B con la 18 · lanzamiento**, con **12 técnicas** y acreditación a **2 casos** (§8.3) |
| 32 | Sobres por ✓ y coartada confirmada | Abre con pocas pistas; marcas del comisario ya puestas | 3,4 | 0,80 | 1 | Sí · **OD-E** cuenta ✓ del estado, no toques; `givens` informativos | 0,5 | M3, `givens` | **Lanzamiento**, dentro del jueves y de las landings. Baja el listón de entrada del modo |
| 33 | Acusación atómica, tres resultados | Completo · firme · se te escapó | 4,0 | 0,63 | 1 | Sí · sale del certificado y del estado | 0,25 | Certificado | **Lanzamiento, obligatoria.** «La racha se juega al culpable, no a la contabilidad» |
| 34 | Tirar del hilo entre bloques | Tocar la pista ilumina bloque y casillas; autopropagación | **4,2** | **0,40** | 0 | Sí · contrato `cells(pista, estado)` | **0,5 si se escribe con el DSL; 3 si después** | M1-E, M4 | **Lanzamiento, obligatoria.** En 48 casillas no es comodidad: es jugable o no jugable |
| 35 | Vistazo 3×3×3 y tutorial del jueves | Mini de 2-3 min y tutorial que solo salta el primer jueves | 3,8 | 0,98 | 2 | Sí · techo N2 estricto; medida **C0-5** | 0,5 | M3 | **Lanzamiento.** Es la mitigación de la confusión de modos, junto con la portada y el correo |

**Piezas que solo ve el motor y que no están en el panel, pero sin las cuales nada de lo anterior existe:**

| Pieza | Qué es | Días | Por qué está aquí |
|---|---|---|---|
| **Contrato de certificado agnóstico del modo** | Un solo JSON de peldaños con `modo`, localizador polimórfico, campo `rama` y `premisas.pasos` | **1** | **Lo único con fecha límite ya corriendo.** Medio día ahora, tres si se retrofita. Desbloquea siete piezas de producto de los dos modos |
| **X0 · Núcleo de máscaras** | Enumerar `M₀` y operar con bitsets. Fusiona M0 + M7 + M12 | **2** | Trece propiedades de los dos modos pasan a ser `popcount`. **Ahorra 1,5 días netos en Escena** respecto del presupuesto anterior |
| **CAP** | `\|M₀\| ≤ 150.000` comprobado antes de enumerar | (en X0) | Una regla en vez de tres. Rechaza `5×5×5+motivo` y `n = 6`; admite los cuatro preajustes |
| **NV** | Ninguna pista idénticamente verdadera ni falsa: dos `popcount` | (en X0) | Habría detectado `ve(A,B)` en Escena y el recuento de E-12 **el mismo día en que se escribieron** |
| **NC** | Ninguna pista entraña por sí sola la identidad del culpable | (en X0) | Sin ella el generador puede publicar un caso que se acaba en la pista 1 |
| **Cuaderno booleano ↔ permutaciones** | Las dos representaciones y el test de acuerdo entre ellas | **1** | Es el test que en un motor de cuadrícula lógica encuentra el 90 % de los errores |
| **La técnica que falta** | La pareja confinada **que cruza bloques**: N3, no es la 4 ni la 7 | 0 (nombrarla) | El generador la producirá sola. Renombrar después es más caro que nombrarla antes de la prueba 6 |
| **NR-M · prueba del veterano** | Dos bots acusan sin leer pistas; el que sabe canon no puede acertar más | (en la 7) | Única forma de saber que el reparto recurrente no filtra cuando tenga dos años |

**Totales.** Lo recomendado **al lanzamiento del modo** suma ≈17,5 días incrementales de motor y frontend de Expediente sobre la plataforma compartida; **fase 2**, ≈13; el resto queda fuera o condicionado. La cuenta detallada está en la §9, y corrige a la baja mi propia estimación anterior de 14,5 días, que mezclaba motor y frontend y **subestimaba el motor en unos 6 días**, como señala el motor en su §8.2. Lo registro porque era un número mío y se estaba usando para planificar.

---

## 4. Las mecánicas firma de Expediente

El caso de trabajo es **«La séptima puja»**, la maqueta del guionista (`content/ideas-expediente-guionista.md` §1), con **tres correcciones que hago aquí** y que son, ellas solas, una demostración de para qué sirven las reglas:

1. **La pista 6 original («Diego volvió a casa con serrín en los puños») dependía de un dato no impreso.** El jugador tenía que saber que el serrín es del Almacén. Corrección: la ficha del Almacén imprime **«serrín en el suelo»** con esa palabra exacta (regla 1 de atributo). Y como el serrín tiene un solo portador, **el certificado la etiqueta N1, no N2** (regla 5): es una pista directa disfrazada, legítima, pero no cuenta como profundidad.
2. **El caso original no tenía bisagra T5** y por tanto habría fallado el punto 10 del checklist («un caso sin bisagra es una tabla»). Corrección: se sustituyen dos pistas por una relacional sobre un atributo con dos portadores.
3. **El motivo del guionista era el secreto canon del culpable**, que es el canal de filtración H4 del motor. Corrección en la §6.

El caso corregido, que es el que uso en las tres firmas:

> **Expediente 8 · La séptima puja**
> Don Herminio Baztán, subastador, apareció sin vida en el **Almacén** una hora antes de la puja estrella.
>
> **Sospechosos:** Ana Solórzano (restauradora) · Bruno Iriarte (chófer) · Clara Nieva (periodista) · Diego Ferrán (marchante).
> **Lugares, desde la entrada:** Recepción · Guardarropa · Sala de Catálogo · **Almacén** *(cajas de embalaje, serrín en el suelo)*.
> **Objetos:** unos guantes de algodón *(tejido)* · un pañuelo de seda *(tejido)* · una lupa de latón *(metal)* · un abrecartas de hueso *(hueso)*.
>
> 1. El que estuvo más cerca de la entrada llevaba algo de tejido. *(T5, la bisagra)*
> 2. Clara llevaba la lupa de latón.
> 3. Ana no puso un pie en la Recepción.
> 4. Diego volvió a casa con serrín en los puños.
> 5. El pañuelo de seda no salió del Guardarropa.
>
> **Solución:** Bruno–Recepción–guantes · Ana–Guardarropa–pañuelo · Clara–Sala de Catálogo–lupa · **Diego–Almacén–abrecartas**. El cuerpo estaba en el Almacén: **el culpable es Diego Ferrán, con el abrecartas de hueso**.
>
> Cinco pistas, **43 palabras** (presupuesto: 120). Cada una necesaria: quitar cualquiera deja al menos dos asignaciones posibles. Es una maqueta; el motor lo certificaría antes de publicar.

### 4.1 Firma X-A · La tabla del comisario

*(panel 13 · diseñador E-5 · motor §4.5, «la buena noticia del dictamen»)*

#### Cómo se juega, paso a paso

**Paso 1. La portada, 43 palabras contando la regla del día.**

> **El comisario Bermejo ya rellenó parte del expediente antes de llamarte. Una de sus marcas está mal; las demás son buenas. Todas las pistas son ciertas.**

**Paso 2. El cuaderno llega con dieciséis marcas puestas**, en su propio color, distintas de las del jugador. Cuatro de ellas, para el ejemplo:

- ✗ Ana – Recepción *(cierta: pista 3)*
- ✓ el pañuelo de seda – Guardarropa *(cierta: pista 5)*
- ✓ Diego – el Almacén *(cierta: pista 4)*
- ✓ **Clara – Recepción** ← **la falsa**

**Paso 3. La refutación, dos pistas y dos peldaños.** La pista 2 dice que Clara llevaba la lupa **de latón**. La pista 1 dice que quien estuvo más cerca de la entrada —la Recepción— llevaba algo **de tejido**. Una persona lleva un objeto. **Clara no pudo estar en la Recepción.** El jugador toca la marca dos veces y la rechaza; el juego registra que la ha encontrado.

**Paso 4. El caso se abre entero.** Rechazada Clara–Recepción y con Ana descartada por la pista 3, la Recepción es de Bruno o de Diego; la pista 4 pone a Diego en el Almacén, luego **Bruno–Recepción**, y por la pista 1, con los guantes. La pista 5 pone el pañuelo en el Guardarropa; Clara lleva la lupa, así que **Clara–Sala de Catálogo**; a Ana le queda el Guardarropa con el pañuelo, y el abrecartas, por descarte, el Almacén. **Diego Ferrán, con el abrecartas de hueso.**

**La sorpresa** no es narrativa: es de autoridad. El comisario puso a la periodista en el mostrador, que es donde uno pondría a una periodista, y es exactamente donde no estaba.

#### Por qué gusta

- **4,2 de media y 4 de 5 se lo contarían**, la mejor combinación de la ronda junto al vis a vis. Marta, que es a quien el jueves le cambia el juego, le da un **5**: *«un cuaderno medio lleno no asusta, y "una marca del comisario está mal" es un juego que entiendo en una frase y que se ve en una captura. Es el único jueves que me hace olvidar que me han cambiado el juego.»* La familia: *«corregir al adulto»*. Diego: *«la ficha con marcas del profe y una mal: la actividad de revisión crítica que no tenía»*.
- **Resuelve el problema de entrada del modo, que es el problema del modo.** Una tabla vacía de 48 casillas es la pared que hace que Marta cierre la pestaña. Un cuaderno con un tercio hecho es un expediente empezado. Por eso además es el formato de las landings y del lunes.
- **Da la emoción del mentiroso sin el mentiroso.** El muro más citado del género pone la duda **en el texto**; aquí la duda está **en una casilla**, la tabla enseña dónde mirar, todas las pistas siguen siendo verdaderas y la refutación es corta y visible.

#### Por qué Murdle no lo tiene

Porque MT2 —**todas las demás marcas son ciertas y deducibles**— exige comprobar el entrañamiento de cada casilla del cuaderno contra el conjunto de pistas, y eso solo lo hace un solver. Un autor que rellena un tercio de la cuadrícula a mano no puede garantizar que las quince marcas buenas lo sean todas; y una sola marca «probablemente cierta» convierte el formato en el mentiroso, que es justo lo que Luis no perdona. La ayuda del incumbente es, por confesión de su propio código, *«often useless or redundant»*: una regla verdadera al azar. La nuestra es una marca falsa **elegida entre unas treinta candidatas por su calidad de refutación**.

#### Qué garantiza el motor

MT1-MT5, y el motor demuestra que **se construye, no se filtra**: se genera un caso válido normal, se calculan las casillas entrañadas (con U lo están todas), se eligen 15-18 como marcas correctas —MT2 se cumple **por construcción, no por suerte**— y se elige la falsa entre las ✗ entrañadas comprobando MT3 (refutación en ≤N4 con ≥2 pistas). **Prior de aceptación: ≈100 %.** El diseñador la temía; el motor demuestra que no había motivo.

Lo que sí hay que arreglar antes de escribir una línea es el esquema: `board.givens` estaba haciendo dos trabajos incompatibles. Se congelan **tres regímenes** —`informativo` (no entrañado; NR se comprueba con él aplicado), `entrañado` (no altera NR) y `falso` (E-5)— con la regla dura: **el sistema formal del caso es `clues ∪ givens(informativo) ∪ givens(entrañado)`; la marca falsa nunca forma parte de él.** Si se olvida, U falla y el generador entra en bucle.

#### Riesgo de rechazo y mitigación

| Riesgo | Mitigación |
|---|---|
| **«Es el mentiroso otra vez»** (Luis, el único freno del panel, con un 3) | MT2 real y verificada, y la cabecera lo dice en esas palabras: «las demás son buenas. Todas las pistas son ciertas». La prueba 3 mide exactamente esto: **0 de 3 lectores de Murdle** deben identificarlo con el mentiroso tras tres casos |
| **Confundir la marca del comisario con la propia** | Color y forma distintos, y el gesto de rechazo es doble toque, no el mismo que marcar. Se prueba en la misma tanda |
| **El jugador nunca rechaza la marca falsa y se queda con un cuaderno imposible** | MT5: el sistema es insatisfacible y el certificado lo detecta. **Sabueso señala el bloque de la contradicción, nunca la casilla**, y el juego jamás dice «tienes un error». Es un modo propio de Sabueso, 0,25 días |
| **Dos marcas falsas «para subir dificultad»** | Prohibido. Duplica la ramificación y rompe la garantía de refutación en ≤N4. Una es un caso; dos es una lotería |

#### Prueba con personas antes de comprometerla

**Prueba 3 del panel (X2 del diseñador), ampliada.** 5 perfil Marta en HTML + 5 alumnos de 5.º-6.º en papel con Diego + **3 lectores de Murdle en español que juegan tres casos seguidos**. Umbrales fijados antes: **≥8 de 10** encuentran la marca falsa sin ayuda; **nadie** dice que el juego «le ha mentido»; finalización **igual o mejor** que un caso vacío equivalente; y **0 de 3** lectores lo identifican con el mentiroso. Si esto último falla, el problema es la cabecera, no la mecánica, y se reescribe antes de repetir.

### 4.2 Firma X-B · La contraprueba, con el escalafón de tabla como su acreditación

*(panel 18 + 31 · diseñador E-10 + §2.7 · motor §4.10 y §6)*

Van juntas por el mismo motivo que en Escena van juntas la reconstrucción y el escalafón: son **la misma promesa en dos momentos**. La contraprueba te hace demostrar; el escalafón te acredita lo que has demostrado. Separadas, una es un examen de cuarenta segundos y la otra una insignia sin contexto.

#### Cómo se juega, paso a paso

**Paso 1.** El jugador acusa: Diego Ferrán, en el Almacén, con el abrecartas de hueso. Acierta.

**Paso 2. La reconstrucción, 20 segundos.** Las casillas se encienden en el orden del certificado. Y en el peldaño tres la animación hace lo único que ningún producto del género hace: **marca el instante en que la deducción salta de un bloque a otro**. «Clara lleva la lupa» está en *sospechoso × objeto*; «la lupa está en la Sala de Catálogo» está en *objeto × lugar*; y de ahí sale «Clara está en la Sala de Catálogo», que está en un tercer bloque que nadie ha tocado. Una tarjeta lo nombra: **«el salto»**. Es exactamente el punto donde se rompe todo principiante de rejilla lógica.

**Paso 3. La contraprueba, 40 segundos.** El juego ilumina **una casilla en negativo** y pregunta:

> **¿Con qué demuestras que Clara no estuvo en el guardarropa?**

El jugador toca las pistas. La respuesta son **dos**: la 2 (Clara llevaba la lupa) y la 5 (el pañuelo no salió del guardarropa). Si además marca la 1, el juego responde: *«Con esas dos bastaba. La del tejido no hacía falta.»* Acertar da **expediente probado** y acredita **el cruce en negativo** (técnica 5, N3, que no existe en Escena). Fallar no quita nada y el juego enseña la cadena buena.

Un detalle que conviene declarar porque enseña cómo funciona CP: **la casilla del culpable no calificaba en este caso** —su soporte mínimo son cuatro pistas y CP1 exige dos o tres—, así que CP3 baja a la siguiente candidata. Y si ninguna calificara, **la contraprueba de ese caso sencillamente no se ofrece** (CP2). Esa opcionalidad es lo que la hace la pieza más barata y segura de las doce: **no impone ninguna restricción al generador, así que no baja la tasa de aceptación de nada**.

**Paso 4. El escalafón, tres líneas.**

> *Este expediente exigía **el corte por atributo**, **el salto** y **el único que queda**. Los tres, sin Sabueso.*
> *El salto: 2 de 2 expedientes. **Acreditada.***
> *Cuaderno · **Escena** inspector, 9 de 14 · **Expediente** 4 de 12. Rango: **inspector**, por Escena.*

**Paso 5. El cuaderno.** Un solo cuaderno, dos apartados, **un solo rango calculado sobre el apartado más avanzado y nunca sobre la suma**. Quien solo juega Escena puede llegar a comisario; si no, Expediente vuelve a ser una obligación disfrazada, que es justo lo que la racha única se inventó para evitar. Jugar los dos da una **insignia visible de doble especialidad**, no un rango mayor. El panel toma esta regla como obligatoria: sin ella, Marta lee las técnicas de tabla como una deuda.

#### Por qué gusta

- **Contraprueba 4,2, σ 0,75, y el único freno es de tiempo, no de gusto.** Luis: *«convierte "acerté" en "sabía por qué", que es lo que las explicaciones escuetas del libro nunca me dieron»*. Diego: *«es la rúbrica hecha botón»* y la imprime como pregunta al pie. La familia: *«"¿con qué lo demuestras?" es lo que yo les pregunto a los niños desde el primer domingo; ahora lo pregunta el juego y a mí me deja escuchar»*.
- **Escalafón 4,2 y 3 de 5 lo contarían**, con Sofía —la más dura del panel— dándole un 5: *«"doble especialidad" es una insignia que se enseña»*. Y Diego ve catorce ítems de rúbrica.
- **Es progresión sin la ansiedad de la racha.** El rango no baja y no depende de jugar todos los días, que es exactamente lo que un modo de un día a la semana necesita.
- **Reconstrucción 4,0** y la familia le da un 5: *«el de diez ve el salto; es lo que yo no sabía explicar con el dedo»*.

#### Por qué Murdle no lo tiene

Murdle termina con «It was X with Y in Z!» y nada más; por eso su comunidad pregunta en Facebook por casos concretos y por eso la gente se va a TikTok a buscar soluciones. Y sus insignias son **sociales, no de habilidad**: la insignia «socialist» se gana visitando sus foros. Para hacer esto hace falta un solver que sepa **qué prueba qué** y **por qué escalón pasó cada caso**, y eso es X0 (soportes mínimos por `popcount`) más M3 (TR). Un competidor que se invente la etiqueta lo notará el jugador a la tercera vez, que es peor que no tenerla.

#### Qué garantiza el motor

- **La contraprueba:** CP1 (la celda tiene **exactamente un** soporte mínimo, de tamaño 2 o 3), CP2 (si ninguna califica, no se ofrece), CP3 (la de mayor peso narrativo), CP4 (fallar no cambia el resultado ni la racha). Sobre X0 son 512 `popcount` para nueve pistas: microsegundos.
- **El escalafón:** **TR**, la técnica requerida —`t` es requerida si desactivarla en la escalera deja el caso irresoluble—, con ~15 ejecuciones de M3 por caso. Por eso la frase de interfaz es **«este expediente exigía»** y nunca «has usado»: el motor ve tableros, no cabezas. Y por eso **el escalafón no acredita «el salto» a quien juega con la autopropagación activada**, que es la regla que el panel pide explícitamente y que hay que escribir.

#### Riesgo de rechazo y mitigación

| Riesgo | Mitigación |
|---|---|
| **La jerga.** «Cruce de tablas» y «pareja atada» son los dos nombres que el diseñador teme, y son exactamente los dos que Marta y Diego rechazan | Se renombran **antes** de implementar las detecciones. Mi propuesta a probar: «cruce de tablas» → **«el salto»** (mismo nombre que el momento que anima la reconstrucción: un concepto, una palabra, dos sitios) y «pareja atada» → **«los dos huecos»**. La decisión la toma la prueba 6, no yo |
| **El escalafón de Expediente se llena a un séptimo de velocidad** | Tres números, en la §8.3: **12 técnicas al lanzamiento**, acreditación con **2 casos** en vez de 3, y **el archivo y los ilimitados de Premium cuentan**. Con eso, un jugador de solo jueves lo completa en ~5,5 meses y un Premium en semanas |
| **La contraprueba se siente examen** | Es opcional por caso, fallar no deja huella en el compartible, y **el botón de compartir sigue en pantalla mientras tanto** (condición explícita de Sofía) |
| **La animación estorba a quien ya sabe cómo va** | Se salta con un toque, el ajuste se recuerda, «Paso a paso» está al lado con el mismo peso visual, y el compartir nunca queda detrás |

#### Prueba con personas antes de comprometerla

**Prueba 6 del panel (X1 del diseñador), en dos brazos.** (a) Cinco personas, una por perfil, dos de LatAm: resuelven en papel y **describen su razonamiento en voz alta antes de ver ningún nombre**. Umbral: **≥8 de 12** técnicas reciben, de ≥3 de las 5, una descripción que un tercero mapea sin ayuda al nombre propuesto. Por debajo de 8 se reescriben y se repite; por debajo de 5 tras dos vueltas, el escalafón de Expediente sale con 8 técnicas. (b) A las tres personas de perfil Marta se les pregunta si 24 técnicas entre los dos apartados **motivan o abruman**, con y sin la regla del rango único: si solo dicen «motiva» con la regla, **la regla es obligatoria** y así se registra.

Y va **antes** que cualquier implementación, porque bloquea la taxonomía, que a su vez bloquea el escalafón, la contraprueba y la etiqueta de dificultad.

### 4.3 Firma X-C · El vis a vis, condicionada y con tres pistas de apertura

*(panel 15 · diseñador E-7 · producto E1 · motor §4.7, el hallazgo principal del dictamen)*

Es firma **condicionada** y quiero ser explícito: es la mecánica con **más consenso y boca a boca del modo** (4,2, 4 de 5 contable, con un 5 de Marta y otro de Luis) y **la única de las doce que el motor no puede dar por viable hoy**. No es pesimismo: es que la especificación estaba mal y hasta corregirla la medida habría dado cero.

#### La corrección, primero, porque cambia el ejemplo

El motor demuestra dos cosas. **Una:** MV-E estaba mal cuantificada, y solo la **lectura universal** («para toda respuesta posible existe continuación») cumple OR y hace verdadera la frase de pantalla; la existencial convierte el menú en un oráculo. **Dos, y es aritmética:** con coste 2 para la abierta y 1 para la cerrada, cuatro fichas distinguen como máximo **16 modelos**, y el ejemplo del diseñador abre con dos pistas y deja **36**. No es una tasa baja: es imposible. **La reparación es tres pistas de apertura**, que sigue siendo la mitad de las seis y conserva el coste asimétrico.

#### Cómo se juega, paso a paso

**Paso 1. El caso abre con tres pistas de las cinco, no con una pared.** Sobre «La séptima puja»: la 5 (el pañuelo no salió del Guardarropa), la 2 (Clara llevaba la lupa) y la 1 (el que estuvo más cerca de la entrada llevaba algo de tejido). Residuo: **12 modelos de 576**, y `12 ≤ 16`. Cabe.

**Paso 2. Cuatro fichas.** Abierta 2, cerrada 1. Encima del menú, siempre, una línea: *«Cualquiera de estas cierra el caso. Unas te dejan más trabajo que otras.»*

**Fichas 1-2 (abierta, 2).** A Bruno: *«¿Qué llevabas?»*
> —Unos guantes de algodón. Sin ellos no se toca una pieza.

Bruno lleva los guantes; por la pista 1, los guantes están en la Recepción; luego **Bruno–Recepción**, y el cuaderno se tacha en nueve casillas de golpe. Residuo: 4.

**Ficha 3 (cerrada, 1).** A Ana: *«¿Estuviste en el guardarropa?»*
> —Sí, dejé el abrigo y me quedé un rato.

**Ana–Guardarropa**, y por la pista 5, con el pañuelo. Residuo: 2.

**Ficha 4 (cerrada, 1).** El menú **no le ofrece** a nadie *«¿llevaba Ana el pañuelo?»*: en este estado ya está entrañado y la pregunta no dice nada, y por eso no está. Sí le ofrece a Clara *«¿estuviste en el almacén?»*
> —No, no bajé en toda la tarde.

**Clara–Sala de Catálogo** y **Diego–Almacén**, con el abrecartas. Residuo: 1. Culpable y arma.

**La sorpresa.** El cuerpo estaba en el Almacén: **Diego Ferrán**. Y la frase que lo condena no se la ha dicho él: se la ha dicho **Clara**, que no tiene nada que ver con nada y a la que el jugador ha preguntado por un almacén al que no bajó. Es la emoción que Luis le atribuye a la coartada cruzada —*«una declaración verdadera que te condena»*— entregada **sin ninguna disyunción que releer**. Ese es el argumento por el que E-1 baja a especial: el vis a vis ya da su beat, y sin su defecto.

#### Por qué gusta

Marta le da un **5**: *«abre con dos pistas. Dos. Eso me mata la pared, que era lo que me impedía abrir una tabla. Y ver la tabla tacharse por algo que pregunté yo es lo que grabaría: nueve casillas de golpe.»* Luis, otro 5: *«el interrogatorio nació aquí. En el plano había que justificar por qué un sospechoso contesta sobre habitaciones; aquí un detective pregunta dónde estabas y qué llevabas, que es lo que hace Maigret.»* Sofía compara estrategias («lo cerré con dos abiertas» contra «con cuatro cerradas»). Y la familia lo reparte sola: una pregunta cada uno.

#### Por qué Murdle no lo tiene

Sus `statements` son declaraciones **dadas**, todas a la vez, y una miente. Las nuestras son **elegidas**, llegan de una en una y todas son verdad. Y el interrogatorio de texto libre no es formalizable: sin menú cerrado no hay propiedad que verificar y la unicidad se rompe el primer día. Lo irreplicable no es la idea, es la promesa: **«no puedes preguntar mal»**, y sostenerla exige mantener el residuo en el cliente y filtrar el menú en tiempo real con el mismo solver que usa el generador.

#### Qué garantiza el motor

MV-E en lectura universal, formalizada como un juego de árbol AND-OR memoizado sobre el residuo y con las preguntas deduplicadas por la partición que inducen, más `|R₀| ≤ 16` tras las pistas de apertura, más OR, más el catálogo cerrado de plantillas con la auditoría de degeneración (fuera «¿quién estaba contigo?», idénticamente falsa; fuera «¿estabas solo?», idénticamente verdadera; y **«¿viste algo de X?» solo existe si el caso tiene orden declarado**, así que el menú se genera del DSL y no de una tabla escrita a mano). Ventaja frente a Escena: aquí el residuo son 576 modelos, así que la medición es más rápida y más fiable.

#### Riesgo de rechazo y mitigación

| Riesgo | Mitigación |
|---|---|
| **La tasa de aceptación de MV-E no da** (la única de riesgo real del dictamen) | Se mide en la Compuerta 0 **con tres pistas de apertura**, sobre 10.000 candidatos construidos. Repliegue escrito en tres escalones: menú de menos plantillas → 3 fichas → variante «acelerador» (las pistas base ya cierran y preguntar solo acorta) → el día pasa a la tabla del comisario, que ya está construida y ya funciona |
| **«Y si pregunto mal me quedo sin resolver»** | El menú **físicamente no ofrece** preguntas que no cierren, y la línea encima lo dice. `/una-sola-solucion` gana un apartado. Umbral: **una sola persona que diga «pregunté mal» y la mecánica se revisa** |
| **El coste asimétrico es una regla más y Sofía la salta** | Va en la cabecera, en una línea, nunca en un tutorial. Umbral: **≥3 de las 4 personas sin tutorial** entienden el coste 2/1 solo con esa línea |
| **No se imprime** (Diego: 28 caminos distintos) | Versión imprimible con las respuestas ya dadas al pie, «la clase vota la pregunta». Se acepta que en papel es otra actividad |

#### Prueba con personas antes de comprometerla

**Compuerta 0, sin personas, primero.** Si MV-E sale roja, no hay prueba con personas que la salve. **Después, la prueba 4 del panel (X3 del diseñador):** 12 personas, HTML sin tutorial, un caso de vis a vis y uno de control. Umbrales: nadie dice «pregunté mal»; caída de resolución ≤10 puntos; ≥8 de 12 usan un verbo de investigación al describir la partida; **≥6 de 12 gastan las fichas en una combinación distinta de «dos abiertas»** —si no, el coste asimétrico no está funcionando y la agencia que promete no existe—.

---

## 5. El dossier y el muro de texto

El panel es unánime en el diagnóstico y lo dice con la mejor frase de la ronda: **el muro se ha resuelto en las pistas y se ha reabierto en las fichas.** El presupuesto de texto saca la mejor nota de las 35; el formato de dossier pone cabecera + doce fichas con frase de carácter + membretes **antes de la primera pista**, que es más texto que un caso entero de Escena.

### 5.1 El formato, decidido

1. **Fichas plegadas por defecto.** Plegada muestra **nombre, oficio y las etiquetas de atributo** (que son información y tienen que verse). Retrato y **frase de carácter al tocar**. Es la variante que pide el panel casi al unísono y es gratis.
2. **Presupuesto de texto como criterio de publicación, no como consejo.** Pista ≤20 palabras, una oración, ≤1 negación. Ficha ≤10 palabras más etiquetas. Total de pistas ≤120 palabras (`n = 4`), ≤180 (`n = 5`), ≤220 (XL). Cabecera ≤45 palabras **incluida la regla del día**. **Un caso que se pase no se publica aunque cumpla U, SA y NR.** Lo comprueba un contador, no una persona.
3. **Pistas sin voz, numeradas y secas.** La voz de personaje nunca entra en una pista numerada. Lo que sí se permite es **atribución sin voz**: un prefijo fijo de un catálogo cerrado de cuatro o cinco membretes, de **una línea**, sin firma, sin cargo y sin fecha, y el texto de la pista es la plantilla canónica palabra por palabra. El membrete no añade información, no insinúa y no cambia el nivel.
4. **La segunda línea del objeto (procedencia, historia) sale de la ficha jugable** y vive en la pantalla de resultado. Mezclar en la misma ficha la línea que deduce con la que decora es la forma más barata de convertir «de plata» en ambiguo.
5. **Un caso sin bisagra T5 no se publica** (punto 10 del checklist). Es lo que separa un caso de una tabla, y es lo que Luis pide cuando dice que el presupuesto no le quite la bisagra.

### 5.2 Ejemplo de pantalla, en texto

Así se ve el jueves en 360 píxeles, antes de tocar nada. Lo que sigue son **43 palabras de cabecera y 43 de pistas**, contra un presupuesto de 45 y 120.

```
┌──────────────────────────────────────────────┐
│  EXPEDIENTE 8 · jueves            [Sabueso]  │
│  La séptima puja                             │
│                                              │
│  Don Herminio Baztán, subastador, apareció   │
│  sin vida en el Almacén una hora antes de    │
│  la puja estrella.                           │
│                                              │
│  ▸ El comisario Bermejo ya rellenó parte     │
│    del expediente. UNA de sus marcas está    │
│    mal; las demás son buenas. Todas las      │
│    pistas son ciertas.                       │
├──────────────────────────────────────────────┤
│  SOSPECHOSOS                          [ ⌄ ]  │
│  Ana Solórzano · restauradora                │
│  Bruno Iriarte · chófer                      │
│  Clara Nieva · periodista                    │
│  Diego Ferrán · marchante                    │
├──────────────────────────────────────────────┤
│  LUGARES · desde la entrada           [ ⌄ ]  │
│  Recepción → Guardarropa → Sala de           │
│  Catálogo → Almacén [cajas · serrín]         │
├──────────────────────────────────────────────┤
│  OBJETOS                              [ ⌄ ]  │
│  guantes [tejido] · pañuelo [tejido] ·       │
│  lupa [metal] · abrecartas [hueso]           │
├──────────────────────────────────────────────┤
│  PISTAS                                      │
│  1  El que estuvo más cerca de la entrada    │
│     llevaba algo de tejido.                  │
│  2  Clara llevaba la lupa de latón.          │
│  3  Ana no puso un pie en la Recepción.      │
│  4  Diego volvió a casa con serrín en los    │
│     puños.                                   │
│  5  El pañuelo de seda no salió del          │
│     Guardarropa.                             │
├──────────────────────────────────────────────┤
│         [ CUADERNO ]      [ ACUSAR ]         │
└──────────────────────────────────────────────┘
```

Tres cosas que este dibujo decide y conviene leer despacio:

- **La frase de carácter no está.** Está detrás del `⌄` de sospechosos, junto al retrato. Luis la encuentra en un toque; Sofía no la ve nunca. Nadie pierde.
- **Las etiquetas de atributo sí están**, porque son información y porque la regla 1 exige que la palabra de la pista y la de la ficha sean la misma: «tejido» aparece en la pista 1 y en dos fichas de objeto, con esa palabra.
- **El origen de la tira de orden está rotulado** («desde la entrada»), también en el imprimible y en el texto alternativo. Sin origen, la pista ordinal es una lotería, que es la queja documentada del género traducida a esta superficie.

### 5.3 La confusión de modos: qué la mitiga y qué no

El panel es tajante: **no se arregla con la portada**, porque Marta abre desde el correo y pulsa Empezar sin leer. Lo que la retiene el primer jueves son cuatro cosas y solo funcionan juntas:

1. El **correo del jueves** dice «hoy toca expediente» **antes del botón**.
2. El **vistazo 3×3×3** está disponible desde el miércoles como calentamiento, con su propia numeración y sin tocar la racha.
3. El **jueves es la tabla del comisario**, no una tabla vacía de seis pistas. Es la regla 5 del calendario.
4. **El primer mes el jueves no rompe la racha** (§2.3). Es la pieza que faltaba y es lo que convierte «me han cambiado el juego» en «hoy es distinto».

Y el **tutorial de 60 segundos propio del modo se dispara solo la primera vez que el jugador llega a un jueves**, nunca antes, es saltable y es repetible. Un tutorial que se enseña por si acaso es un tutorial que nadie ve.

---

## 6. El motivo

### 6.1 Decisión

**Las tres formas, cada una en su sitio, exactamente como recomienda el guionista, con una corrección de calendario y otra de contenido.**

| Forma | Dónde vive | Coste | Estado |
|---|---|---|---|
| **Segunda fase ligera (E-2)** | **Todos los días de Expediente**, tras acusar. Tres motivos, dos pruebas eliminatorias, 60-90 segundos, **saltable**, **compartir al lado y nunca detrás** | 0,5 días | **Lanzamiento** |
| **Cuarta categoría a `n = 4`** | **Fuera del ritual:** archivo, Premium («el expediente completo») y especial mensual. **Nunca el domingo** —el domingo es Escena— y **nunca a `n = 5`** | 0 (CAP lo permite a `n=4`) | **Fase 2** |
| **Remate en la confesión** | **Siempre**, en los dos casos anteriores. Ata objeto, lugar y motivo en una escena | 0 (en M6) | **Lanzamiento** |

**Las dos correcciones.** La de calendario: el motivo como cuarta categoría es la **peor nota del panel (2,4)** y su versión de cinco elementos está prohibida por CAP; sale del domingo y sale del ritual, y se convierte en argumento de Premium para Luis, que es quien la puntúa con un 4 y quien paga. La de contenido está en la §6.3 y es más importante de lo que parece.

**La estructura obligatoria, que suscribo del diseñador y del motor:** con tres opciones y dos pistas, **las dos pistas son eliminatorias**. Una pista que confirme el motivo directamente hace redundante la otra y NR falla. Y el motivo verdadero **no puede estar ya entrañado** por las pistas principales: una llamada a M12, o el remate se pierde antes de llegar.

### 6.2 Ejemplo, sobre «La séptima puja»

> **¿Por qué lo hizo?** *(Sabueso, 70 segundos. Fallar no quita nada. Compartir sigue ahí.)*
>
> **dinero · venganza · orgullo**
>
> **A.** Quien lo hizo no debía nada a la Casa Almenara.
> **B.** No hubo ninguna discusión entre el subastador y quien lo hizo en toda la temporada.
>
> A descarta **dinero**. B descarta **venganza**. Queda **orgullo**.
>
> Y entonces, y solo entonces, la confesión:
>
> > —Hace veinte años tasé esa pieza y me equivoqué. Herminio lo sabía y lo dejó pasar. Esta tarde iba a venderla por lo que vale, delante de todos, y a mí me iba a mirar al decir el precio.

### 6.3 Por qué el ejemplo del guionista había que cambiarlo

El guionista escribe la pista B como *«Diego llevaba veinte años esperando a que alguien reconociera el valor real de una pieza que él mismo tasó mal»*, es decir: **la pista de motivo es el secreto canon del culpable**. Eso es el canal de filtración **H4** del motor, y es grave: un jugador veterano que haya reducido a dos candidatos identifica al culpable **por cuál de los dos tiene un secreto compatible con un motivo ofrecido**, sin leer las dos pruebas.

La reparación conserva la idea entera —que es la mejor del documento del guionista, y Luis le da un 5— y es la regla **NR-M3**: **para cada uno de los tres motivos ofrecidos existe al menos un sospechoso del caso cuyo canon lo soporta.** En el ejemplo: «dinero» lo soporta Clara Nieva, que debe dinero a la casa; «venganza» lo soporta Ana Solórzano; «orgullo» lo soporta Diego. Los tres son creíbles, ninguno se adivina por ficha, y el remate sigue siendo el secreto del culpable. Se comprueba con una tabla `canon-soporta(motivo, personaje)` que mantiene `guionista-misterio` y que el validador consulta. Es un entregable suyo, no del motor.

---

## 7. Reparto recurrente

### 7.1 Decisión: sí, en fase 2, con las cuatro reglas y la prueba

**Sí al reparto recurrente**, porque es la razón por la que la gente compra el volumen siguiente y porque Luis —que es el dueño de este modo— le da un 5 y dice la frase que lo justifica: *«el secreto como reserva de motivos es la mejor idea del documento entero»*. **En fase 2**, porque es barato de generar y caro de mantener, y una biblia que se contradice es, para la cohorte que más nos importa en este modo, **una errata más**, y ya llevan veinte.

Y con las cuatro reglas del motor, que no son burocracia: la regla del guionista *«los atributos biográficos viven en la ficha, nunca en una pista numerada»* es buena, es necesaria y **no es suficiente**, porque cubre el canal que no filtraba y deja abiertos dos que sí.

```
NR-M1  El culpable se sortea uniformemente entre los sospechosos del caso,
       sin condicionar por canon (ni secreto, ni oficio, ni estado, ni antigüedad).
NR-M2  Un personaje "quemado" o "víctima" NO aparece como SOSPECHOSO.
       Puede ser testigo, referencia o epílogo. Su ausencia no informa
       porque nunca está presente.
NR-M3  Para cada uno de los tres motivos ofrecidos existe al menos un sospechoso
       del caso cuyo canon lo soporta.  (tabla canon-soporta, de guionista-misterio)
NR-M4  Todo atributo citado en una pista se imprime en la ficha del caso, siempre,
       aunque sea canon y aunque el veterano lo sepa de memoria.
```

**NR-M2 obliga a cerrar una ambigüedad del guionista y hay que decirlo claro.** Su definición de «quemado» dice a la vez que *«sale del pool de sospechosos»* y que *«puede reaparecer como referencia o testigo, no vuelve a ser culpable a corto plazo»*. Las dos mitades se contradicen: si sale del pool, no filtra; si reaparece como sospechoso pero no puede ser culpable, **filtra, y con cuatro sospechosos descartar uno a priori sube el acierto a ciegas del 25 % al 33 % antes de leer una pista**. Nos quedamos con la primera mitad, sin coletilla.

**La prueba del veterano**, que es lo que convierte esto en comprobable en vez de en una buena intención: dos bots acusan sin leer ninguna pista, uno con solo las fichas del caso y otro con todo el canon acumulado. Sobre 1.000 casos generados, **el segundo no puede acertar más de 2 puntos por encima del primero**. Si acierta más, se repite desactivando NR-M2 y luego NR-M3, y el que mueva el número es el culpable. Es una simulación sobre casos que el lote ya genera: 0,5 días, y es la única forma de saber que la frontera se respeta cuando el reparto tenga dos años y nadie recuerde por qué se escribió la regla.

**La excepción del aniversario** («por primera vez, lo que sabéis de Ana sí importa») es correcta tal como el guionista la plantea porque se anuncia en portada: en ese caso el canon pasa a ser información del caso y NR-M no aplica. En el esquema es `board.flags: ["canon_activo"]`, y el checklist exige que esté anunciado.

### 7.2 Los tres choques con las reglas del proyecto, corregidos

El panel encontró tres cosas que chocan con reglas no negociables y que nadie más había visto. Las tres se corrigen en una tarde y las tres se corrigen **antes** de escribir `content/biblia.md`.

**(a) Apellidos. Regla 4 (español neutro con base de España).** Ocho de los veinticuatro nombres son apellidos vascos —Iriarte, Otazu, Zabaleta, Uranga, Odriozola, Etxeberria, Sertucha, Umerez— en un reparto que promete «pronunciable en toda la región». Diego los lista uno a uno: *«en Rosario ninguno se lee a la primera y en clase se pierde un minuto por apellido. Neutro es Prado, Rey, Roca.»* Es una tercera parte del elenco. **Decisión:** se sustituyen los que no pasen la prueba, y la prueba está escrita: **prueba 6(b) del panel** —seis personas de LatAm (Rosario, CDMX, Bogotá) leen los 24 nombres en voz alta; umbral **≤3 tropiezos en total**—. Los nombres los propone `guionista-misterio`; el umbral no se negocia. Y la regla permanente: **si un apellido necesita que alguien pregunte «¿cómo se dice?», no entra en el reparto fijo.** Puede aparecer como decorado en un caso suelto; en el elenco que vuelve cada semana, no.

**(b) Vocabulario violento. Regla 5 (contenido cozy).** Dos casos concretos. La **doble víctima del guionista** («esa noche hubo dos disparos, no uno») incumple la regla directamente y además, dice el motor, cuadruplica el cuaderno y duplica el guion: **se descarta esa versión** y se conserva la del diseñador (un hecho grave y un hurto, o dos hurtos en la versión familiar), que además no cuesta ni una variable nueva. Y la **confesión** sube de registro justo donde un padre lee en voz alta: *«fui a buscar el cuchillo»* cuando el objeto de la ficha era un abrecartas. **Decisión, y es una regla nueva que conviene escribir porque no estaba en ningún sitio:**

> **Nombre canónico del objeto.** Un objeto se nombra con la misma palabra en la ficha, en la pista, en la confesión, en el epílogo y en el compartible. Cero sinónimos, también en la narrativa. Un abrecartas es un abrecartas cuando confiesa.

Es la misma disciplina de vocabulario cerrado que ya rige las pistas, extendida al texto de cierre, y resuelve de golpe la queja de la familia y el riesgo de que el «y sin embargo» reinterprete un elemento que sí era pista. La confesión pasa por el filtro de contenido seguro como cualquier otro texto y hay versión suavizada por defecto en la sección familiar.

**(c) El «tú» dentro de una pista numerada. Regla ya cerrada en D-010, decisión 5.** La idea 4.10 del guionista dice que la segunda persona entrará también en *«las pistas que lo mencionen»*, y ahí es exactamente donde la voz estaba prohibida. **Decisión: prohibido.** En «Tú eres sospechoso», la segunda persona vive en la **cabecera**, en la **ficha del jugador** y en el **cierre**; las **pistas numeradas hablan del jugador en tercera persona y con su nombre**, igual que de cualquier otro sospechoso. Motivo doble: la concordancia tuteo/voseo multiplica las formas que hay que validar en una frase que ya tiene una sola lectura garantizada, y una pista con voz es una pista con dos lecturas. La mecánica no pierde nada: el panel le da 3 de 5 contable y un σ de 0,49 precisamente por el gesto de verse en el tablero, no por el pronombre de las pistas.

---

## 8. Lo que comparten los dos modos y lo que no

### 8.1 La tabla

La regla de fondo: **se comparte todo lo que es infraestructura o identidad; se separa todo lo que es lenguaje del modo.** Compartir un lenguaje que no encaja es la forma barata de que las dos cosas se sientan mal hechas.

| Pieza | ¿Compartida? | Detalle |
|---|---|---|
| **Racha** | **Sí, una sola** | Hay un caso al día, luego hay una racha. La gracia de 1 día cada 30, la ventana de 48 h de F18 y la reparación automática funcionan igual sea cual sea el modo del día. **Excepción temporal:** el primer mes, el jueves ni rompe ni avanza (§2.3) |
| **Escalafón / cuaderno** | **Un cuaderno, dos apartados, un rango** | Las técnicas son **distintas de verdad**: diez de las catorce de tabla no existen en un plano. El **rango se calcula sobre el apartado más avanzado, nunca sobre la suma**; jugar los dos da insignia de doble especialidad, no rango mayor |
| **Sabueso** | **Mismo personaje, dos olfatos** | Misma voz, mismo gesto, un uso por caso, jamás la solución. En Escena el nivel 2 señala la habitación; en Expediente, **el bloque donde ya se puede tachar**. Y un modo propio: con la tabla del comisario, señala el **bloque de la contradicción**, nunca la casilla (0,25 días) |
| **Reconstrucción** | **Mismo contrato, dos renderizadores** | En Escena las personas caminan por el plano; en Expediente las casillas se encienden en orden y se marca **el salto entre bloques**. Cero trabajo de motor adicional si el contrato se congela hoy |
| **Contraprueba** | **Sí, misma pieza** | Sale de los soportes mínimos de X0, que es la misma primitiva en los dos modos. En Escena señala una celda del plano; en Expediente, una casilla del cuaderno, y a menudo **en negativo**, que es el acto característico del modo |
| **Archivo** | **Sí, una sola lista** | 7 días gratis, filtrable por modo. Bajo B-jueves el archivo gratuito contiene siempre **un Expediente**, que es exactamente la muestra que necesita quien llega buscando cuadrícula lógica |
| **Duelos** | **Sí, sin trabajo específico** | El duelo se crea sobre un caso, no sobre un modo. Único ajuste: la tabla comparativa final tiene que ser consciente del modo (no hay «celdas mal colocadas» en una rejilla, hay «casillas marcadas mal») |
| **Compartir** | **Sí en concepto, distinto en forma** | La cuadrícula compartida de Expediente son tres bloques de marcas, no un plano: **firma visual distinta, y eso es bueno**. Se mantienen las tres reglas de F12/M16: ni posiciones ni nombres, tamaño acotado, y una línea resumen legible para lector de pantalla |
| **Newsletter** | **Sí, un solo correo** | «Hoy toca expediente» es información útil, no una elección. Máximo un correo al día |
| **Analítica** | **Sí, con propiedad `modo` en todos los eventos** | Sin esa propiedad ninguno de los umbrales de la §2.3 se puede medir. Es un cambio de una línea en la taxonomía y hay que hacerlo **antes** de instrumentar |
| **Tutorial** | **No: uno por modo** | 60 s, saltable, y solo se dispara la primera vez que el jugador llega a un jueves |
| **Vistazo** | **No: uno por modo** | 3×3 en plano, 3×3×3 en rejilla. Semanal en vez de diario si el catálogo no da (medida C0-5) |
| **Packs PDF** | **No: Expediente es el formato imprimible** | Escena necesita plano ilustrado y tinta; Expediente es una lista, una rejilla en blanco y cinco frases, y cabe en un A4 que se fotocopia. `PDF-CLASICO` a 30 Escena + 20 Expediente; `PDF-AULA` con Escena en 3.º-4.º y Expediente en 5.º-6.º; `PDF-REGALO` mayoritariamente Expediente |
| **Licencia B2B** | **No** | `B2B-WIDGET` con Escena (táctil, visual, móvil). `B2B-MARCABLANCA` **con Expediente por delante**: cabe en una columna, se compone con la tipografía del medio y se convierte a imprenta con coste cero. **Y activa el disparador de D-006 en cuanto se abra la conversación** |
| **Landings SEO** | **No: dos familias** | Escena captura las 20.000 búsquedas/mes de intención de juego. La demanda de cuadrícula lógica en español es pequeña y **de otra naturaleza**: PDF, libro e imprimible. Consecuencia: **la landing de Expediente vende el PDF y el pack tanto como el juego** |
| **Motor de generación** | **Mismo `engine/`, dos generadores** | Campo `modo`, DSL compartido en la maquinaria, catálogos de predicados y de técnicas propios |
| **Pistas visuales** | **No se trasladan** | En Expediente los iconos son **etiquetas de atributo** en la ficha y nunca cuentan como pista. Un dibujo que a veces es atributo y a veces es pista es indistinguible, y NV no lo detecta porque no es una pista |

### 8.2 El contrato de certificado común, que hay que congelar el día 1

Es **la única tarea de toda esta propuesta con una fecha límite que ya está corriendo**: medio día ahora, tres días si se retrofita, y hay que hacerla **antes de que se escriba la primera línea del solver de Escena**, aunque Expediente llegue en la semana 10.

El borrador que existe hoy tiene tres huecos que no se ven desde Escena y que Expediente destapa: `celdas_afectadas` usa `{fila, col}`, que es geometría de plano; no hay forma de expresar un **razonamiento por casos** (y sin él la coartada cruzada, la tabla del comisario y la técnica 14 de los dos modos no se pueden serializar, ni la reconstrucción puede animar una rama que muere); y un peldaño no dice **de qué peldaños depende**, que es lo que necesitan Sabueso, la contraprueba y «pásale tu caso».

**Esquema mínimo que se congela:**

```jsonc
{
  "certificado_version": "1.0",
  "modo": "expediente",                  // escena | expediente — discrimina el catálogo de técnicas
  "caso_id": "…",
  "resoluble": true,                     // false si exige N5: el caso se rechaza
  "nivel_max": "N3",
  "pasos": 7,
  "tecnicas_requeridas": ["corte_por_atributo", "salto", "unico_que_queda"],   // TR
  "traza": [{
    "paso": 3, "nivel": "N2", "tecnica": "salto",
    "premisas": { "pistas": ["c1","c2"], "givens": ["g2"], "pasos": [1,2] },
    "efectos":  [{ "objetivo": {…}, "efecto": "fijar",     "valor": "catalogo" },
                 { "objetivo": {…}, "efecto": "descartar", "valor": "almacen"  }],
    "conclusion": { "tipo": "fija", "objetivo": {…}, "valor": "catalogo" },
    "rama": null,
    "estado_resultante": "…"
  }]
}

// Localizador polimórfico: el único punto donde el modo asoma
{ "espacio": "rejilla",  "fila": 2, "col": 1, "entidad": "amelia" }
{ "espacio": "cuaderno", "bloque": "sospechoso×lugar", "x": "clara", "y": "guardarropa" }
{ "espacio": "tira",     "categoria": "lugar", "desde": 2, "hasta": 4 }

// Campo rama, para el razonamiento por casos (CC3, MT3, técnica 14)
"rama": { "supuesto": {…}, "resultado": "muere", "en_pasos": 3, "sub_traza": [ … ] }
```

**Tres invariantes con test de propiedad**, porque son lo que permite que un renderizador confíe en el JSON sin recalcular nada: (1) `estado_resultante(k) = aplicar(efectos(k), estado_resultante(k−1))`; (2) toda pista de `premisas.pistas` existe en `clues_formal` y todo `paso` citado es anterior; (3) con NR y SA, **toda pista del caso aparece en al menos un `premisas.pistas`** —si no, hay una pista que sobra y NR está mal calculada—.

**Lo que este medio día desbloquea sin trabajo adicional:** la reconstrucción de los dos modos, el escalafón de los dos, Sabueso de los dos, la contraprueba, «pásale tu caso», la solución razonada del imprimible y el «paso a paso» en texto. **Siete piezas de producto de un esquema.** La alternativa —dos esquemas— obliga a duplicar reconstrucción, escalafón, Sabueso y exportador: ocho o nueve días de frontend por ahorrar medio día de contrato.

### 8.3 Los tres números del escalafón de Expediente

El problema es real: con un día a la semana, catorce técnicas a tres casos cada una no se completan en menos de un año, y dos de las catorce están atadas a mecánicas que bajo B-jueves no tienen día. No lo dejo abierto.

1. **Doce técnicas al lanzamiento, no catorce.** Salen las tres atadas a mecánicas sin día —la cuenta del hueco (E-4), el puente de tiempo (E-3) y la coartada imposible (E-1)— y entra la que el motor encontró y que el generador producirá sola: **la pareja confinada que cruza bloques** (N3; no es el par dentro de un bloque ni el cruce positivo). Las tres que salen vuelven cuando su mecánica tenga día o especial.
2. **Acreditación con dos casos distintos, no tres.** En Escena son tres porque hay siete días; aquí son dos porque hay uno. Registro la asimetría a propósito: 12 técnicas × 2 casos = 24 jueves ≈ 5,5 meses para quien solo juegue el jueves.
3. **El archivo y los ilimitados de Premium cuentan para acreditar.** Es lo que convierte el problema en la mejor palanca de conversión del modo: «tu cuaderno de tabla se llena más rápido si juegas más de un expediente a la semana», y eso es exactamente lo que Premium vende. La condición no cambia: acreditación = *el caso exigía la técnica* **y** *el jugador lo resolvió sin Sabueso* **y** *sin la autopropagación activada si la técnica es «el salto»*.

---

## 9. Plan de construcción combinado

Bloques del motor, adaptados a B-jueves. Días de agente; los de Expediente son **incrementales** sobre la plataforma compartida y no se pueden sumar sin ella.

| Bloque | Contenido | Días | Al final de este bloque… |
|---|---|---|---|
| **B-0 · Congelar contratos** | Certificado agnóstico (§8.2) + esquema de caso de los dos modos + contrato del DSL (`sat`, `mask`, `cells`, negación, **NV**) | **1** | Nadie tendrá que retrofitar nada. **Es lo único con fecha límite: antes de la primera línea del solver de Escena** |
| **B-1 · Núcleo** | **X0** (2, fusiona M0+M7+M12) + M1 Escena (2) + M2 esqueleto (3) | **7** | Escena publicable con U y NR. Y U, NR, EN, PU, CP, soportes mínimos, NV, NC disponibles **para los dos modos** |
| **B-2 · La llave** | **M3** escalera + certificado + rama N4 (5) + M4 `cells()` (0,5) | **5,5** | Se puede afirmar «sin adivinar» y «dificultad medida». Doce familias de Escena a un día |
| **B-3 · Expediente base** | M1 Expediente T1-T9 con NV (2) + cuaderno↔permutaciones y su test de acuerdo (1) + generador Expediente (2) + escalera de 12 técnicas (3) + tres regímenes de `givens` (0,5) + M6 plantillas (1) | **9,5** | **Expediente publicable con las mismas garantías que Escena** |
| **B-4 · El jueves** | E-5 tabla del comisario (1) + E-10 contraprueba (0,5) + E-2 motivo (0,5) + E-11 rueda (0,25) + E-12 recuento **corregido** (0,5) + E-9 orden (1) + Sabueso modo MT5 (0,25) | **4** | **El jueves existe, con las dos firmas de lanzamiento** |
| **B-4b · Producto** | Presupuesto de texto en el validador (0,25) + acusación atómica (0,25) + guardar/restaurar/vaciar (0,5) + exportador A4 (1,5) + vistazo 3×3×3 (0,5) + reconstrucción de rejilla (1,5, frontend) | **4,5** | **Expediente «tan avanzado como Escena»** según la definición operativa de las siete piezas |
| **B-5 · Compuerta 0** | Instrumentación y ejecución de las medidas de los dos modos | **3,5** | Informes de tasa. **Nada de B-6 ni B-7 se construye antes** |
| **B-6 · Segundo día** *(condicionado a los umbrales de §2.3)* | E-4 objeto perdido (1) + E-1 coartada cruzada (1,5) + E-8 doble víctima (0,5) + M11 lote entre casos (1,5) | **4,5** | El viernes de Expediente y los especiales mensuales |
| **B-7 · Lo caro y lo condicionado** | MV motor compartido (2, ya necesario para el miércoles de Escena) + E-7 vis a vis (3) + E-3 cadena de custodia (2) + E-6 invertido con generador propio (2) | **9** | Solo lo que la Compuerta 0 haya puesto en verde |

**Qué desbloquea más, en orden.** (1) **B-0**, el único con fecha límite, impide el retrofit en siete piezas de producto de los dos modos. (2) **X0**, dos días, convierte trece propiedades de los dos modos en `popcount` y **ahorra 1,5 días netos en Escena** respecto del presupuesto anterior. (3) **M3**, la llave del producto: sin ella no hay «sin adivinar», ni dificultad medida, ni escalafón, ni reconstrucción, ni Sabueso, ni contraprueba. (4) **M1 Expediente + cuaderno**, obligatoria para todo el modo. (5) **MV compartido**, que sirve a las dos firmas de interrogatorio.

**El número honesto, que corrige el mío.** «Expediente en producción el jueves, tan avanzado como Escena» = B-0 + B-3 + B-4 + B-4b ≈ **19 días incrementales** (de los cuales ~3 son frontend), sobre B-1 y B-2, que son de Escena y se construyen igual. Mi estimación anterior era 14,5 incluyendo 6,5 de frontend, es decir 8 de motor; la del motor para el mismo alcance es ~14 solo de motor. **Subestimé el motor de Expediente en unos seis días.** No cambia la decisión de arquitectura; cambia el calendario de la fase 2, y así hay que decirlo en los informes.

### 9.1 Compuerta 0 de los dos modos, sin personas

Ninguna mecánica condicionada se construye antes de tener su número. Umbrales fijados antes de mirar el dato, y **tres métricas por mecánica**, porque una tasa sola no dice si el catálogo se repite ni si el caso cae en la banda del día:

```
τ  tasa de aceptación  = válidos / candidatos CONSTRUIDOS (no ciegos: CC, CT y MT se
                         construyen, y medirlas por filtrado daría casi cero)
δ  diversidad          = casos estructuralmente distintos en un lote nocturno de 1 M
β  ajuste de banda     = fracción de válidos que cae en la banda del día

VERDE  τ ≥ 1 %  y  δ ≥ 1.000  y  β ≥ 30 %       → se construye
ÁMBAR  0,1 % ≤ τ < 1 %  o  β < 30 %             → se construye con repliegue escrito
ROJO   τ < 0,1 %  o  δ < 200                    → no se construye; entra el repliegue
```

| Medida | Qué se está midiendo de verdad | Prior | Nota |
|---|---|---|---|
| **MV** (Escena, V4) | Estrategia adversaria completa con tres preguntas | Desconocida | Firma A de Escena |
| **MV-E** (E-7) | Ídem con cuatro fichas y coste asimétrico | **Desconocida. El único riesgo real** | **Medir con TRES pistas de apertura.** Con dos, τ = 0 por aritmética, no por generador |
| **MP** (mentiroso, Escena) | — | — | Ya descartado; se mide solo para cerrar el asunto |
| **AM** (cierre alternado, cuatro manos) | Que exista **algún** reparto que cumpla el cierre alternado | Desconocida | Se mide en la misma tanda que el prototipo en papel |
| **MT** (E-5) | Refutación ≤N4 con ≥2 pistas, elegida entre ~30 candidatas | **≈100 %** | El número decide **cuántas** marcas se ponen, no si se construye |
| **CC** (E-1) | CC3: la rama falsa muere en ≤3 pasos | 10-30 % | Fase 2 |
| **CT** (E-3) | U+SA+NR sobre el espacio ampliado y el paso «puente de tiempo» | 5-20 % | Fase 2 |
| **C0-5 · Catálogo del vistazo** | Con 36 modelos puede no haber casos suficientes | — | δ ≥ 200 para diario; δ ≥ 60 para semanal. **Decide si el mini de Expediente es diario o semanal** |
| **C0-6 · PU2 en E-6** | Soporte minimal **único** con cuatro distractores construidos | Desconocida | τ ≥ 1 % |
| **C0-7 · DV2′ en E-8** | Que el último peldaño sea el que decide | 5-20 % | τ ≥ 2 % (es mensual: 12 al año) |
| **C0-8 · Banda del domingo** | Que el domingo sea el más grande y **no** el más duro | — | Mediana de `nivel_max` y `pasos` del domingo < la del sábado, en 1.000 casos de cada uno. **Es una promesa pública, no una intención** |
| **C0-9 · Prueba del veterano** | Que el reparto recurrente no filtre | — | acierto(B) − acierto(A) ≤ 2 puntos sobre 1.000 casos |

### 9.2 Qué se valida con personas antes de comprometer, y en qué orden

| Orden | Prueba | Personas | Qué bloquea | Umbral fijado antes |
|---|---|---|---|---|
| **1** | **Nombres de técnica** (prueba 6 del panel / X1) | 5 + 6 de LatAm | La taxonomía, y con ella el escalafón, la contraprueba y la etiqueta de dificultad de **los dos modos** | ≥8 de 12 mapeables; «el salto» y «los dos huecos» se renombran si fallan; ≤3 tropiezos en 24 apellidos |
| **2** | **El primer jueves** (confusión de modos) | 8, en dos brazos de 4 | **La arquitectura entera.** Si la mitigación no funciona, B-jueves no funciona | En el brazo con comisario + portada + correo + vistazo: abandono ≤ el del día 3 de Escena + 10 puntos; ≤1 de 4 dice «me han cambiado el juego»; 4 de 4 vuelven el día 5 |
| **3** | **El muro** (dossier plegado contra desplegado) | 10 | El formato de presentación de todos los casos del modo | Si ≥4 de 10 dicen «mucho texto» con la desplegada, plegada por defecto. Si los lectores dicen que la plegada «no tiene alma», retrato y frase **al tocar**, no desplegados |
| **4** | **La tabla del comisario** (X2) | 10 + 3 lectores de Murdle | La firma X-A | ≥8 de 10 encuentran la marca falsa; nadie dice que el juego «le ha mentido»; finalización ≥ la del caso vacío; **0 de 3 lo identifican con el mentiroso** |
| **5** | **Papel** (expediente de una página y hoja A/B) | ~75 alumnos, 3 aulas | El exportador, el Pack Aula y la decisión sobre la versión digital de dos manos | ≥70 % terminan; ningún docente reescribe una pista; ≤2 modismos señalados en Argentina |
| **6** | **El vis a vis** (X3) | 12, con 4 sin tutorial | La firma X-C, **solo si la Compuerta 0 la puso en verde** | Nadie dice «pregunté mal»; caída ≤10 puntos; ≥8 de 12 usan verbo de investigación; ≥6 de 12 no usan «dos abiertas»; ≥3 de 4 entienden el coste 2/1 con una línea |
| **7** | **El domingo en familia** | 4 familias, 3 domingos | **Solo el escalón 2.** Bajo B-jueves el domingo no cambia, así que esta prueba deja de bloquear el lanzamiento | Expediente entra en el domingo solo si el menor hace ≥20 % de las marcas y ≥3 de 4 familias lo eligen al repetir |

**Por qué ese orden.** La 1 va primera porque es la más barata y bloquea a los dos modos a la vez. La 2 va segunda porque si la mitigación de la confusión de modos no funciona, **la arquitectura entera está mal** y es mejor saberlo antes de construir el jueves. La 3 y la 4 se hacen en la misma tanda. La 5 cuesta fotocopias y decide dos líneas comerciales. La 6 solo existe si el motor la habilita. Y la 7 **sale del camino crítico**, que es exactamente lo que se gana al no tocar el domingo.

**Cómo se leen estos números.** Con 5-12 personas no hay significación estadística y no la vamos a fingir: son **compuertas de diseño**, no contrastes de hipótesis. Un fallo grande —nadie reconoce los nombres, alguien dice «pregunté mal», cuatro de cuatro dicen «me han cambiado el juego»— es señal fiable con muestras pequeñas; una diferencia de dos puntos porcentuales no lo es, y por eso ningún umbral está formulado así. La medición fina llega con usuarios reales y la hace `analista-datos` por cohortes, no por A/B.

---

## 10. Decisiones para el fundador

Ocho, numeradas a continuación de las ocho de Escena. Si se aprueban, las registro juntas como **D-010**.

| # | Decisión | Mi recomendación |
|---|---|---|
| **9** | **¿Aceptamos que Escena y Expediente son una sola tesis con dos caras —el certificado del solver, jugable: preguntar antes en Escena, demostrar después en Expediente— en vez de dos tesis con dos marcas?** | **Sí.** Cuelgan de la misma pieza (X0 + M3 + el contrato de certificado), así que no compiten por presupuesto, y una tesis se repite mientras que dos se olvidan. La consecuencia operativa es concreta: un cuaderno, un rango, una racha, una página `/una-sola-solucion`, un correo. |
| **10** | **¿Arquitectura B-jueves —Expediente solo el jueves y el domingo intacto— en vez de la B que yo mismo propuse (jueves y domingo)?** | **Sí, y me corrijo.** Mi domingo era imposible en el motor (1,7 M de modelos contra un CAP de 150.000) y es la peor nota del panel (2,4). B-jueves es la única arquitectura sin ningún 2, reduce otra vez a la mitad el coste de firma humana y deja intacto el único día con ritual colectivo establecido. Con la escalera de umbrales de la §2.3 y con el **segundo día en el viernes**, no en el domingo. |
| **11** | **¿Las firmas de Expediente son la tabla del comisario, la contraprueba con el escalafón, y el vis a vis condicionado; y la coartada cruzada baja a especial mensual?** | **Sí.** El comisario tiene 4 de 5 contable, τ ≈ 100 % y un día de coste: es la mejor relación de toda la ronda y resuelve el problema de entrada del modo. La coartada cruzada es la única mecánica que **contradice la tesis del propio modo** (una disyunción se lee dos veces) y su beat —la declaración verdadera que condena— ya lo entrega el vis a vis sin ese defecto. |
| **12** | **El motivo: ¿segunda fase ligera todos los días, cuarta categoría solo a `n = 4` y fuera del ritual, y remate en la confesión siempre?** | **Sí.** Y cierra la pregunta 10.9 del motor: el XL de `5×5×5 + motivo` que yo escribí está fuera del techo por dos vías independientes y no se construye nunca. La cuarta categoría vive en archivo, Premium y especial mensual, que es donde la quiere el único perfil que la puntúa bien. |
| **13** | **¿Se descarta el domingo de la conspiración?** | **Sí.** Tercera peor nota del panel (2,8), exige seis elementos —prohibido por CAP y por el techo—, y bajo B-jueves es **estructuralmente imposible**: no hay seis Expedientes en una semana. Se reabre solo en el escalón 2 (semana paralela) y con M11, que son 1,5 días que no estaban en mi cuenta. Cierra la pregunta 10.10 del motor. |
| **14** | **¿El escalafón de Expediente sale con 12 técnicas, acredita con 2 casos en vez de 3, y el archivo y los ilimitados de Premium cuentan?** | **Sí.** Es la reparación del único defecto estructural de B-jueves —un modo de un día llena su cuaderno a un séptimo de velocidad— y convierte el defecto en la mejor palanca de conversión que tiene el modo. La asimetría con Escena (2 casos frente a 3) se registra a propósito y con el motivo escrito. |
| **15** | **¿Fichas plegadas por defecto y presupuesto de texto como criterio de publicación —un caso que se pase no se publica aunque cumpla unicidad, no adivinación y no redundancia?** | **Sí.** El presupuesto de texto es la mejor nota de las 35 fichas y no es una mecánica: dice que **el problema de Expediente es el texto, no la tabla**. Es la medida más barata contra el muro y la única que se comprueba con un contador. El riesgo que hay que vigilar es interno: que se relaje «solo para el domingo». |
| **16** | **¿Se corrige el reparto recurrente —apellidos, vocabulario cozy, «tú» en pistas— y se aplaza a fase 2 con NR-M1..4 y la prueba del veterano?** | **Sí, las cuatro cosas.** Un tercio del elenco lleva apellidos que no se leen a la primera en Rosario (regla 4); «dos disparos» y un abrecartas que se convierte en cuchillo en la confesión incumplen la regla 5; y el «tú» dentro de una pista numerada rompe una decisión ya cerrada. Se corrigen antes de escribir `content/biblia.md`, con el umbral de la prueba 6(b) y la regla nueva de **nombre canónico del objeto**. |

---

## 11. Trabajo que se reparte si se aprueba

| Tarea | Objetivo | Entregable | Dónde se guarda | Hecho cuando | Agente |
|---|---|---|---|---|---|
| **Congelar el contrato de certificado agnóstico** | Que nada de los dos modos exija retrofit | Esquema JSON versionado con `modo`, localizador polimórfico, `rama` y `premisas.pasos`, y los tres invariantes | `docs/specs/certificado.v1.json` + `docs/motor.md` §3 | El renderizador de Escena consume el JSON sin transformarlo y el de rejilla se puede escribir sin tocarlo. **Antes de la primera línea del solver de Escena** | `ingeniero-motor-puzzles` |
| Contrato del DSL de los dos modos | Que el motor implemente sin abrir una duda | Predicado a predicado: `sat`, `mask`, `cells`, negación, redacción canónica única, test; lista negra en el sistema de tipos y **NV** en el generador | `docs/motor.md` §1 + `engine/schema/clue.v1.json` | Ningún predicado de la lista de degeneración se puede siquiera construir | `ingeniero-motor-puzzles` |
| Cerrar las ocho confirmaciones del dictamen | Desbloquear el motor | CNT5/CNT6, forma canónica de T7, tres pistas de apertura en E-7, OP3′, tres regímenes de `givens`, la técnica que falta, CT4, RR como `N1+lectura` | `docs/diseno/ideas-expediente-disenador.md` v1.1 | El motor no tiene ninguna pregunta abierta | `disenador-puzzles` |
| Calendario semanal v2 con modo por día | Cerrar la semana de los dos modos | La tabla de la §2.4, con bandas de dificultad | `docs/propuesta-jugabilidad.md` §4 v2 | El motor etiqueta un caso como «jueves» sin criterio humano | `disenador-puzzles` |
| Lista de 12 técnicas de rejilla con nombres candidatos | Que la prueba 1 incluya los dos modos en la misma tanda | Nombre, dibujo y frase de Sabueso por técnica, con dos alternativas para «el salto» y «los dos huecos» | `docs/diseno/mecanica-expediente.md` | ≥8 de 12 superan el umbral de la prueba 1 | `disenador-puzzles` + `guionista-misterio` |
| Corrección del reparto y tabla `canon-soporta` | Cumplir las reglas 4 y 5 y NR-M3 | 24 nombres que pasen la prueba de lectura; tabla motivo×personaje; regla de nombre canónico del objeto | `content/biblia.md` | ≤3 tropiezos en la prueba 6(b); el validador puede comprobar NR-M3 | `guionista-misterio` |
| PRD del modo Expediente | Convertir esto en trabajo programable | PRD con Given/When/Then, eventos de analítica, riesgos y dependencias | `docs/specs/modo-expediente.md` | Antes de la semana 9 | `director-producto` |
| Catálogo v1.2 y `roadmap.md` | Que no haya dos versiones de la verdad | Catálogo con la arquitectura B-jueves, F26-F28, y el roadmap con fases, hitos y estado | `docs/catalogo-productos.md`, `docs/roadmap.md` | Publicados el mismo día de la aprobación | `director-producto` |
| Propiedad `modo` en toda la taxonomía de eventos | Sin ella ningún umbral de la §2.3 se puede medir | Taxonomía actualizada, más los eventos nuevos del modo | `docs/analitica/eventos.md` | **Antes** de instrumentar el frontend | `analista-datos` |
| Mapa de intención de las landings de Expediente | Capturar una demanda que es de PDF y de libro, no de juego | Brief de `/juegos-como-murdle` y una página nueva, con el Expediente jugable arriba del pliegue | `docs/plan-seo.md` | Cada URL tiene intención, puzzle asignado y llamada a la acción | `estratega-growth-seo` |
| Reglas de distancia estética y textos comparativos | Que el modo más cercano a un competidor reconocible no se le parezca en la expresión | Guía de estética prohibida (cero emojis de cabecera, cero máquina de escribir, cero arquetipos rastreables) y textos aprobados | `docs/legal/` | Antes de la primera maqueta de rejilla | `experto-legal` + `disenador-ux-ui` |
| Expediente de la OEPM preparado | Que el disparador de D-006 no nos pille sin preparar | Solicitud redactada y presupuesto aprobado, clases 9 y 41 | `docs/legal/` | **Antes** de abrir la primera conversación B2B o editorial | `experto-legal` + usuario |

---

*Cambios a este documento: los registra `director-producto` con fecha y motivo en `docs/decisiones.md`.*
