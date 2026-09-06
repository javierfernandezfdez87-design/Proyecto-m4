# Expediente como producto: arquitectura, reparto de piezas y 10 ideas propias

Autor: `director-producto`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Para: decisión del fundador. No es un registro de decisión: si se aprueba, se registra como **D-011** en `docs/decisiones.md` (D-010 está reservada para `docs/propuesta-jugabilidad.md`).

Fuentes: `docs/contexto-proyecto.md`, `docs/analisis-estrategico.md` §2.1-2.4, `docs/decisiones.md` (D-003, D-007, D-009), `docs/catalogo-productos.md` v1.1, `docs/funcionamiento-productos.md` §1.2 y §2.4, `docs/propuesta-jugabilidad.md` (tabla maestra, §4 semana con carácter, §5 catálogo, §6 validación), `docs/oportunidades-resenas.md` (P1-P25), `docs/investigacion/analisis-profundidad.md` §murdle.com (DOM y JS verificados el 13-jul-2026).

**Alerta de marca (D-006), comprobada hoy:** ninguno de los cinco disparadores se ha cumplido —sin usuarios (el producto no ha lanzado), sin vídeo de +100.000 visualizaciones, sin mención en prensa, sin conversación B2B ni editorial iniciada, y ningún tercero de los revisados aquí (murdle.com, Letterinth, Murdle Jr, Endless Cases, everyclue) usa un nombre parecido a Sospechario, Pistario, Culpabilia u Ocultia—, así que **no procede registrar todavía** en la OEPM. Aviso operativo: la idea E8 y la §2.9 de este documento proponen empujar la línea B2B de papel y marca blanca; **el día que se abra la primera conversación con un medio o una editorial, ese disparador se cumple y hay que registrar en la OEPM (clases 9 y 41) antes de la segunda reunión.**

---

## 0. Cómo he leído el encargo, antes de responderlo

El fundador pide que **Expediente esté tan avanzado como Escena**. Esa frase admite dos lecturas y hay que separarlas, porque llevan a productos distintos:

- **Paridad de cadencia:** Expediente tiene un caso nuevo cada día, igual que Escena.
- **Paridad de producto:** Expediente tiene motor con certificado propio, escalafón propio, reconstrucción propia, interrogatorio propio, archivo, imprimible, landing y pack. Es un producto completo, no una pestaña con menos cosas.

Mi respuesta es: **paridad de producto sí, paridad de cadencia no**, y las siete secciones que siguen son el argumento. La paridad de producto es lo que hace que Expediente sea la defensa si la moda de Murdoku se enfría (la razón por la que existe, según `catalogo-productos.md` §1.1). La paridad de cadencia no añade defensa: añade 365 casos validados al año, parte la conversación diaria en dos y debilita la única palanca de Premium que de verdad funciona.

Definición operativa de "tan avanzado como Escena", con criterio de hecho para cada punto, en §1.5.

---

## 1. La pregunta estructural

### 1.1 Las tres arquitecturas, enunciadas sin adornos

| | Qué es | Casos validados al año | Rachas | Qué ve el jugador nuevo el día 1 |
|---|---|---|---|---|
| **A** | Dos rituales diarios paralelos. Caso Escena del día + caso Expediente del día. Racha única: basta resolver uno | **730** | 1 | Dos pestañas y una elección antes de jugar |
| **B** | Un solo ritual. El modo es una **propiedad del día**, como la regla del día. Expediente ocupa dos días fijos de la semana | **365** (≈104 Expediente) | 1 | "El caso de hoy". Ninguna elección |
| **C** | Escena es el producto. Expediente es un **segundo caso opcional** del día, sin racha, para quien quiere más | **730** | 1 (solo Escena) | "El caso de hoy" y, debajo, "¿quieres otro?" |

A es lo que dice hoy el catálogo (`catalogo-productos.md` §1.1 `MODO-EXPEDIENTE`, §3 filas 1-2, §6 decisión cerrada 2). C es, exactamente, lo que hace murdle.com con su mini diario.

### 1.2 Evaluación por los ocho criterios pedidos

**Hábito y claridad para el jugador nuevo.**
El modelo Hook necesita un disparador y una acción sin fricción. En **A** el disparador (correo, notificación, costumbre) desemboca en una **elección**, y una elección antes de la acción es fricción pura para alguien que ha llegado buscando "murdoku online gratis" en el móvil. Peor: rompe la escasez, que es la mitad del motor del formato diario. "Uno al día" es una promesa; "dos al día, elige" es un catálogo. Y rompe la conversación compartida: la gracia de Wordle es que todo el mundo hizo lo mismo hoy; con dos casos, "¿cuánto has tardado?" deja de tener respuesta comparable. En **B** el jugador nunca elige: abre y hay un caso, y el jueves ese caso es una rejilla en lugar de un plano, anunciado en la portada igual que "el jueves te cierran una habitación". El marco ya existe y ya está aprobado: es la semana con carácter de `propuesta-jugabilidad.md` §4. En **C** la claridad se conserva, pero Expediente queda estructuralmente en segunda fila para siempre. — **B > C > A**

**Canibalización.**
En **A** los dos modos compiten por el mismo hueco de 5-15 minutos al día del mismo jugador. La racha única, que se diseñó precisamente para que el segundo modo no fuese una obligación (`funcionamiento-productos.md` §1.3, "un juego diario que da órdenes se abandona"), tiene un efecto secundario que no estaba escrito: **hace que el segundo modo sea prescindible**. El jugador satisface la racha con el modo que prefiere y el otro se convierte en contenido que se produce, se valida y no se juega. Y además impide medirlo: no hay forma de saber si Expediente retiene, porque quien lo juega se autoselecciona. En **B** no hay canibalización porque no hay dos cosas. En **C** la canibalización es leve pero el ratio coste/uso es el peor de los tres. — **B > C > A**

**Coste de contenido (dos casos diarios validados).**
El cuello de botella no es la generación: el motor genera miles. Es la **firma humana**. F4 exige que cada caso publicado lo haya **resuelto a ciegas una persona** de `revisor-calidad` sin ambigüedad reportada, y M5 de D-007 convirtió eso en compromiso permanente y en línea visible ("verificado por el motor y resuelto por una persona"). Ese compromiso es nuestra defensa contra P18 (la desconfianza hacia lo que parece "hecho por IA") y es lo que no podemos aflojar. **A y C exigen duplicarlo: 730 resoluciones a ciegas al año en vez de 365.** No es un coste de cómputo, que D-009 declara irrelevante: es tiempo de persona, que D-009 mantiene expresamente como límite. — **B >> A = C**

**SEO (¿dos rituales son dos landings jugables?).**
Este es el argumento más fuerte a favor de A y **no resiste el dato**. Primero, los volúmenes: "murdoku online" 9.900/mes, "murdoku en español" 2.400, "murdoku gratis" 1.900, más de 20.000 con intención de jugar; "murdle online" **170** con KD 0 y "murdle español" 70 (`analisis-estrategico.md` §2.1). La demanda española de Murdle es **de libro**, no de juego: "murdle resuelve el crimen" 1.300, "murdle pdf" 390, "murdle libro" 210. Segundo, y decisivo: **una landing jugable no necesita el caso del día**. F14 exige "un puzzle real jugable arriba del pliegue", no el de hoy. `/juegos-como-murdle` puede llevar un Expediente perenne del archivo y posicionar exactamente igual bajo B que bajo A. El único incremento real de A sobre B es poder escribir "caso nuevo cada día" en esa landing, que vale 170 búsquedas/mes. — **A ligeramente > C > B, y la diferencia es pequeña y cara**

**Premium.**
La ventaja principal de Premium es el archivo (`catalogo-productos.md` §3 fila 5) y la segunda son los casos ilimitados. **A regala el doble de contenido gratis y debilita las dos.** **B crea la mejor palanca de conversión que tenemos y la crea sin quitar nada**: "hay Expediente el jueves y el domingo; si quieres uno hoy, es Premium". Eso es escasez auténtica, no un muro: el caso del día sigue siendo gratis siempre, la regla de `catalogo-productos.md` §6.1 se respeta al pie de la letra, y el límite existe desde el primer día, que es lo que evita el rechazo de P9. — **B >> C > A**

**LatAm.**
Ninguna de las tres cambia gran cosa. Matiz a favor de B: el mercado hispano fuera de España se abre por oleadas (Argentina ya tiene 9.900/mes de "murdoku"; México todavía 0) y lo que hay que sostener en esas oleadas es **un ritual reconocible y un banco de casos limpio**, no dos catálogos. Además, la exigencia de español neutro y la prohibición de traducir (P2, descarte reafirmado en `catalogo-productos.md` §2) hacen que el coste de revisión lingüística sea por caso: duplicar casos duplica la superficie de errata regional. — **B > A = C**

**Aula.**
Aquí Expediente gana en todas las arquitecturas, porque **es el formato que se imprime**: lista de sospechosos, lista de lugares, lista de objetos, rejilla en blanco, pistas, y la solución detrás. Es literalmente el formato de los libros de Murdle (3 M de ejemplares) y no necesita ilustrar un plano. Lo que cambia entre arquitecturas es cuánto material genera: A produce más, pero el aula no necesita 365 expedientes al año, necesita 60 bien ordenados por curso (`PDF-AULA`). El volumen deja de ser el criterio. — **empate, con ventaja de B por la regla "imprimible" de la decisión 7 de `propuesta-jugabilidad.md` §7**

**Qué hace murdle.com hoy.**
Y esto es evidencia, no opinión, porque está verificada sobre el JS y el DOM del sitio: murdle.com sostiene **un solo modo**. Tiene una curva semanal declarada en público ("*The hardest puzzle is on Saturday, but the biggest is on Sunday*"), variedad por día mediante banderas del generador (`statements`, `motive`, `hard`, `size` 4 o 5), y un **domingo de conspiración** en el que los seis asesinos de la semana son los sospechosos (`weekly_object.Sunday.suspects.push(killer)`), en una cárcel de cuello blanco, con Irratino como víctima. Su segundo ritual —el mini diario en `?mode=tutorial`— **no cuenta para la racha** y es un tutorial jugable, no un modo paralelo; recibe el 11 % del tráfico orgánico de EE. UU. Es decir: **el líder de esta mecánica, con 3 M de libros vendidos detrás, no tiene dos rituales diarios. Tiene uno con carácter distinto cada día y un mini que no compite.** Copiar su mecánica y duplicar su cadencia es quedarse con lo caro de los dos mundos.

### 1.3 La tabla, con los pesos declarados antes de puntuar

Pesos míos, discutibles, escritos antes de puntuar para no acomodarlos al resultado. Escala 1-5.

| Criterio | Peso | A | B | C |
|---|---|---|---|---|
| Hábito y claridad para el jugador nuevo | 25 | 2 | 5 | 4 |
| Coste de contenido validado (firma humana) | 20 | 1 | 5 | 1 |
| SEO | 15 | 4 | 3 | 4 |
| Premium (palanca que crea) | 12 | 2 | 5 | 3 |
| Canibalización y dilución del ritual | 12 | 2 | 5 | 4 |
| Aula y papel | 8 | 4 | 5 | 4 |
| LatAm | 8 | 3 | 4 | 3 |
| **Total sobre 100** | 100 | **46,8** | **92,4** | **64,0** |

Los dos criterios que deciden son hábito y coste de contenido, y son los dos donde A pierde por más. Es un resultado honesto: si alguien cree que el SEO de un segundo ritual vale 40 puntos en vez de 15, la tabla cambia, y por eso el volumen de "murdle online" (170/mes, España) está citado tres veces en esta sección.

### 1.4 Recomendación: **B**, con la forma exacta y con la puerta de salida escrita

**Recomiendo B: un solo caso al día; el modo es una propiedad del día, no una elección del jugador; Expediente ocupa el jueves y el domingo.**

Tres razones, en orden de importancia:

1. **La asimetría de reversibilidad.** De B se puede subir a A (añadir días de Expediente) el día que el dato lo pida, y el jugador lo vive como un regalo. De A no se puede bajar a B: quitar un caso diario que la gente ya tenía es un recorte, y los recortes en juegos diarios generan exactamente la reacción documentada en P9 (el muro del Mini del NYT llegó "como sorpresa y como indignación"). **Se empieza por el lado del que se puede volver.**
2. **B es lo único que permite medir Expediente.** Bajo A no hay lectura posible: la racha compartida hace que quien juegue Expediente se autoseleccione. Bajo B, el jueves y el domingo son una **comparación de cohortes limpia**: los mismos usuarios, dos formatos, la misma semana. Es el método que exige `propuesta-jugabilidad.md` §6 para muestras pequeñas —cambios grandes con efecto visible y umbral fijado antes— y es el único diseño que lo hace posible.
3. **B mata una idea cara y la sustituye por una barata y mejor.** La familia 26 de la tabla maestra (el hilo del día Escena↔Expediente, fase 3, 3 días, "coste narrativo muy alto: dos guiones acoplados al día") **deja de existir bajo B**, porque no hay dos casos el mismo día. En su lugar entra el arco semanal del domingo (idea **E4**), que cuesta menos, tiene evidencia verificada en el código de murdle.com y da una razón narrativa —no punitiva— para jugar toda la semana.

**Calendario propuesto (v2 de `propuesta-jugabilidad.md` §4).** Lo cierra `disenador-puzzles`; esto es la propuesta:

| Día | Nombre en pantalla | Modo | Formato | Mecánica estructural (una) |
|---|---|---|---|---|
| Lunes | El corto | Escena | 4×4 | Sobres por progreso |
| Martes | El clásico | Escena | 5×5 | Ninguna |
| Miércoles | El interrogatorio | Escena | 4×4 | Menú vivo |
| **Jueves** | **El expediente** | **Expediente** | **4×4×4, sin motivo** | **Interrogatorio de ficha (E1)** |
| Viernes | De disparate | Escena | 4×4 | Rastro del objeto |
| Sábado | El difícil | Escena | 5×5 | Celdas bloqueadas (se muda aquí desde el jueves) |
| **Domingo** | **El XL de la conspiración** | **Expediente** | **5×5×5 + motivo** | **Arco semanal: los culpables de la semana (E4)** |

Por qué jueves y domingo, y no otros dos: el lunes es la puerta de entrada y va en las landings; el miércoles es el día firma de Escena; los dos días de Expediente no deben ser consecutivos; y hace falta uno entre semana (corto, 8-11 min) y uno de fin de semana (largo, el que se imprime, el que se juega en familia y el que cierra la semana). El domingo Expediente además resuelve un problema abierto: **una rejilla lógica de cinco elementos con motivo escala a "grande y largo, pero no el más duro" mucho mejor que un plano de 6×6 con dos plantas**, que es lo que exige la decisión cerrada 12 de D-007.

Consecuencia que hay que aceptar: **"casa de dos plantas" (V15) sale del domingo** cuando llegue Expediente y pasa a ser una variante del sábado, del archivo o de Premium. No se pierde; cambia de sitio.

**La puerta de salida, con umbrales fijados antes del dato.** Se revisa a las cuatro semanas de que Expediente esté en producción, con estos números y no con otros:

- **Se sube a tres días** (se añade el martes) si, durante **cuatro semanas seguidas**: la tasa de resolución de los días Expediente está en la banda 50-70 %, el retorno D1 desde un día Expediente no cae más de 5 puntos frente a la mediana de los días Escena de esa semana, **y** menos del 15 % de los activos diarios se salta sistemáticamente los dos días Expediente.
- **Se baja a un día** (solo domingo) si más del **25 %** de los activos diarios se salta los dos días Expediente durante dos semanas seguidas, o si el abandono antes de acusar en Expediente supera al de Escena en más de 12 puntos.
- **Se pasa a C** (Expediente como caso opcional sin racha) si se baja a un día y el número no mejora en el mes siguiente. C es el plan de repliegue, no el plan.
- **Se reconsidera A** solo si aparece un producto en español con Expediente diario y tracción real, o si "murdle online / murdle en español" pasa de 240 búsquedas/mes conjuntas a más de 2.000 en España. Hoy no ocurre ninguna de las dos.

### 1.5 "Tan avanzado como Escena": la definición operativa

Siete piezas, con criterio de hecho verificable. Mientras falte una, Expediente **no** está a la altura de Escena y así hay que decirlo en los informes.

| # | Pieza | Criterio de hecho |
|---|---|---|
| 1 | **Motor con certificado propio** | El solver de Expediente emite el **mismo contrato JSON** de peldaños que el de Escena (`docs/propuesta-jugabilidad.md` §3.2), con su propia lista de técnicas. Unicidad, no adivinación y cero pistas redundantes demostradas sobre 1.000 casos con semilla fija |
| 2 | **Escalafón propio** | 8-10 técnicas de rejilla con nombre, pasadas por la **misma prueba de 5 personas** (prueba 1 de §6) antes de implementarse |
| 3 | **Reconstrucción propia** | Animación sobre la rejilla, no sobre el plano, que muestra el **salto entre bloques** (E2). Mismo contrato, dos renderizadores |
| 4 | **Interrogatorio propio** | Menú vivo sobre las categorías de la ficha (E1), con la misma propiedad MV: cualquier pregunta ofrecida cierra el caso |
| 5 | **Archivo, racha, cuenta, duelos y compartir** | Sin trabajo específico: son transversales. Verificable jugando un Expediente del archivo y retando con él |
| 6 | **Imprimible de una página** | Exportador que produce un A4 sin ilustración con caso, rejilla en blanco y solución razonada al dorso (E8) |
| 7 | **Landing y pack** | `/juegos-como-murdle` con un Expediente jugable arriba del pliegue, y presencia en `PDF-CLASICO` y `PDF-AULA` |

**Coste estimado del conjunto:** ≈14,5 días de agente incrementales sobre la plataforma y sobre M3, repartidos así: motor base de Expediente (V24) 3 · escalera y certificado de rejilla 3 · rejilla táctil en frontend 3 · reconstrucción de rejilla 1,5 · interrogatorio de ficha 2 · tutorial de 60 s propio 0,5 · exportador de una página 1,5. Estimación mía sobre la unidad de `propuesta-jugabilidad.md`; la confirma `ingeniero-motor-puzzles` antes de comprometerse.

### 1.6 Qué cambia exactamente en el catálogo si se aprueba B

Doce cambios. Los aplico yo a `catalogo-productos.md` (que pasaría a v1.2) el mismo día de la aprobación.

| # | Dónde | Cambio |
|---|---|---|
| 1 | §0 Nomenclatura | Desaparece "dos pestañas: Escena y Expediente". Entra: **"hay un caso del día; el modo es una propiedad del día, anunciada en su portada, no una elección del jugador"** |
| 2 | §1.1 `MODO-EXPEDIENTE` | Reescritura completa: de "1 caso Expediente nuevo al día" a "el caso del día del **jueves y del domingo**, más archivo, más ilimitados en Premium" |
| 3 | §1.1 `MODO-EXPEDIENTE`, métrica de éxito | Cae "≥35 % de los activos juegan los dos modos el mismo día" (imposible bajo B). Entran los cuatro umbrales de §1.4 |
| 4 | §1.1 `JUEGO-DIARIO` | La curva semanal deja de ser solo de tamaño y dificultad: incluye **modo**. Lunes-miércoles y viernes-sábado, Escena; jueves y domingo, Expediente |
| 5 | §1.1 `LANDINGS-JUGABLES` | `/juegos-como-murdle` pasa a llevar un **Expediente jugable** (fase 2). Se añade una décima página, `/cuadricula-logica` o equivalente, que `estratega-growth-seo` decide con el mapa de intención |
| 6 | §1.1 `JUNIOR-WEB` | Se añade el preajuste **Expediente Junior** (idea E9) al lado del preajuste Escena |
| 7 | §1.3 packs | `PDF-CLASICO` pasa de "40 Escena + 10 Expediente" a **"30 Escena + 20 Expediente"**; `PDF-AULA` usa Escena en 2.º-4.º y **Expediente en 5.º-6.º** (donde la tabla de doble entrada es currículo, no adorno); `PDF-REGALO` mayoría Expediente por coste de maquetación |
| 8 | §1.4 B2B | **`B2B-MARCABLANCA` se vende con Expediente por delante** (texto, una columna, cero ilustración, convertible a imprenta). `B2B-WIDGET` sigue con Escena (táctil, visual, móvil). Ver §2.9 |
| 9 | §3 matriz gratis/Premium | Fila 2 pasa a "los días que toca (2/semana), siempre gratis"; fila 3 (XL del domingo) pasa a Expediente desde fase 2; fila 4 (casos bajo demanda) gana fuerza como palanca; **fila nueva 31**: cuaderno de técnicas con dos especialidades y un solo rango |
| 10 | §4 MVP | F4 (banco de 60 casos) gana un hermano para fase 2: **banco de 30 Expedientes** antes de la primera publicación. Se añaden **F26** (motor de Expediente con certificado), **F27** (rejilla lógica táctil y accesible) y **F28** (exportador de una página) |
| 11 | §6 decisiones cerradas | La 2 ("la racha es única, común a ambos modos: basta resolver uno") se **sustituye** por "hay un caso del día y una racha; el modo no crea rachas, ni obligaciones, ni elecciones". La 12 (curva semanal) se amplía con el modo |
| 12 | §5 decisiones abiertas | D1 y D2 quedan respondidas de otra forma: los nombres Escena y Expediente se mantienen (D-003), pero dejan de ser pestañas; el MVP sigue siendo solo Escena |

Y fuera del catálogo: `propuesta-jugabilidad.md` §4 pasa a v2 con el calendario de §1.4, y su familia **26 (hilo del día) se descarta** en lugar de quedar en fase 3.

---

## 2. Qué comparte Escena con Expediente y qué no

Lista explícita. La regla de fondo: **se comparte todo lo que es infraestructura o identidad; se separa todo lo que es lenguaje del modo.** Compartir un lenguaje que no encaja es la forma barata de que las dos cosas se sientan mal hechas.

| Pieza | ¿Compartida? | Detalle y por qué |
|---|---|---|
| **Racha** | **Sí, una sola** | Bajo B la pregunta se disuelve: hay un caso al día, así que hay una racha. La gracia de 1 día cada 30, la ventana de 48 h de F18 y las congelaciones de Premium funcionan igual sea cual sea el modo del día. El problema que la "racha común a dos modos" venía a parchear deja de existir |
| **Cuenta, sincronización, ajustes, calendario, estadísticas básicas** | **Sí** | Sin trabajo específico. F10 y F19 cubren los dos modos sin cambios |
| **Escalafón / cuaderno de técnicas** | **Un solo cuaderno, dos apartados, un solo rango** | Las técnicas **son distintas de verdad**: "la tenaza de orden" es espacial y no existe en una rejilla; "el salto entre bloques" es de rejilla y no existe en un plano. Forzar una taxonomía común sería inventar nombres, que es exactamente el riesgo que la prueba 1 existe para evitar. Y el **rango se calcula sobre el apartado más avanzado, nunca sobre la suma**: quien solo juega Escena tiene que poder llegar a comisario, o Expediente vuelve a ser una obligación disfrazada. Jugar los dos da una insignia visible de "doble especialidad", no un rango más alto |
| **Sabueso** | **Mismo personaje, dos olfatos** | Misma voz, mismo gesto ("¿dónde quieres que huela?"), mismo límite de un uso por caso, misma regla de que jamás da la solución. La implementación es distinta porque el certificado es distinto: en Escena el nivel 2 señala la habitación; en Expediente, **el bloque donde ya se puede tachar** |
| **Reconstrucción** | **Mismo contrato, dos renderizadores** | El JSON de peldaños de `propuesta-jugabilidad.md` §3.2 tiene que ser **agnóstico del modo desde el primer día**. Es la misma lección que M4 y M12: medio día ahora, tres días si se retrofita. Visualmente son cosas distintas: en Escena las personas caminan por el plano; en Expediente las casillas se encienden en orden y se ve el salto de un bloque a otro (idea E2) |
| **Archivo** | **Sí, una sola lista** | 7 días gratis, filtrable por modo. Bajo B el archivo gratuito contiene siempre 1-2 Expedientes, que es exactamente la muestra que necesita quien llega buscando Murdle |
| **Duelos** | **Sí, sin trabajo específico** | El duelo se crea sobre un caso, no sobre un modo. Único ajuste: la tabla comparativa del final tiene que ser consciente del modo (en Expediente no hay "celdas mal colocadas" sino "casillas marcadas mal") |
| **Compartir** | **Sí en concepto, distinto en forma** | La cuadrícula compartida de Expediente son tres bloques de marcas, no un plano. Es una **firma visual distinta y eso es bueno**: se distingue de un vistazo en un grupo de WhatsApp. Se mantienen las tres reglas de F12/M16: nada de posiciones ni nombres, tamaño acotado, y una línea resumen legible para lector de pantalla en vez de un muro de emojis |
| **Tutorial** | **No: uno por modo** | 60 segundos, saltable, y **solo se dispara la primera vez que el jugador llega a un día Expediente**, nunca antes. Un tutorial que se enseña por si acaso es un tutorial que nadie ve (regla de F9) |
| **Vistazo (mini de 2-3 min)** | **No: uno por modo** | El mini de murdle.com recibe el 11 % de su tráfico orgánico y no cuenta para la racha. Un mini de rejilla 3×3×3 es la puerta de entrada de la landing de Expediente y el calentamiento del aula |
| **Packs PDF** | **No: Expediente es el formato imprimible** | Escena necesita un plano ilustrado, maquetación de página completa y tinta. Expediente es una lista, una rejilla en blanco y seis frases: **es el formato del libro de Murdle**, cabe en un A4 y se fotocopia. Cambia la mezcla de `PDF-CLASICO`, `PDF-AULA` (cursos altos) y `PDF-REGALO`. Lo que **no** cambia: siguen siendo cinco SKU y ni uno más en 12 meses (§6.7 del catálogo) |
| **Licencia B2B** | **No: Expediente va primero en papel y marca blanca; Escena en widget** | Ver §2.9 |
| **Landings SEO** | **No: dos familias** | Escena captura las 20.000 búsquedas/mes de intención "murdoku". Expediente captura una demanda pequeña y **de otra naturaleza**: "murdle resuelve el crimen" 1.300, "murdle pdf" 390, "murdle online" 170, más genéricos ("juegos de lógica" 480, "cluedo online" 480). Consecuencia estratégica: **la landing de Expediente debe vender el PDF y el pack tanto como el juego**, porque eso es lo que su demanda busca |
| **Newsletter** | **Sí, un solo correo** | Bajo B el correo diario gana: "hoy toca expediente" es información útil, no una elección. Se mantiene el máximo de un correo al día de F17 |
| **Motor de generación** | **Mismo `engine/`, dos generadores** | Campo `modo` en la tabla `puzzles`, DSL compartido en lo compartible, predicados propios de rejilla |
| **Analítica** | **Sí, con propiedad `modo` en todos los eventos** | Sin esa propiedad, ninguno de los umbrales de §1.4 se puede medir. Es un cambio de una línea en la taxonomía de `analista-datos` y hay que hacerlo **antes** de instrumentar |

### 2.9 La pregunta del medio: ¿querría un periódico Expediente antes que Escena?

Sí, y con dos motivos que no son de gusto sino de producción:

1. **Expediente es texto.** Cabe en una columna, se compone con la tipografía del medio, no necesita ilustración, no necesita un componente táctil y **se convierte a página impresa con coste cero**. Escena necesita un plano dibujado o renderizado, que en papel es una imagen y en web es un componente interactivo. La sección de pasatiempos de un diario es, físicamente, una columna de texto con una rejilla.
2. **La línea de marca blanca (`B2B-MARCABLANCA`, desde 1.200 €/mes) promete "un PDF listo para imprenta para la edición en papel".** Con Expediente esa promesa cuesta un exportador; con Escena cuesta un exportador más dirección de arte por caso.

Recomendación concreta: **`B2B-WIDGET` (450-750 €/mes) se vende con Escena** —es táctil, visual, móvil y encaja en un embed—; **`B2B-MARCABLANCA` se vende con Expediente por delante** y con Escena como extra digital. Y el aviso operativo ya escrito arriba: la primera conversación B2B activa el disparador de D-006.

---

## 3. Qué notaría un lector de Murdle en su primera semana

Ordenado por el día en que lo nota, no por lo importante que nos parezca. Cada punto está anclado en un hueco **verificado** de murdle.com, no en una suposición.

**Día 1 — La explicación de por qué era esa persona.** Murdle termina con "It was X with Y in Z!" y nada más; por eso su comunidad pregunta en Facebook "Murdle Vol 1 Puzzle 53 Clue Issue" y por eso la gente se va a TikTok a buscar soluciones (P10). Nosotros terminamos con la **reconstrucción de la rejilla**: las casillas se encienden en el orden en que se deducen y se ve el salto entre bloques, que es el momento exacto donde un principiante se pierde. Y debajo, "Paso a paso" en texto, con el nombre de la técnica. Es lo único que los usuarios de Sudoku.com elogian por su nombre además de la sencillez.

**Día 1 — El interrogatorio.** En murdle.com el jugador tiene dos verbos: **tachar** una pista y **marcar** una casilla. La única ayuda es el Inspector Irratino, cuya pista es, por diseño y por confesión propia del código, "*often useless or redundant*": una regla verdadera **al azar** (`parseHintRule(newRuleType.simple())`). Nosotros abrimos con menos pistas y damos tres preguntas de un menú que el motor filtra en vivo, y en Expediente ese menú es especialmente natural porque **las preguntas son literalmente casillas de la rejilla** ("¿dónde estabas?", "¿qué llevabas?", "¿por qué?"). La promesa que se puede leer en pantalla: *cualquier pregunta que te dejemos hacer cierra el caso.*

**Día 2 — El caso de ayer sigue ahí.** Murdle no tiene archivo y la demanda lo grita: "murdle archive" 210/mes, "murdle unlimited" 170/mes, "can you play murdle more than once" 10/mes; el propio sitio redirige "unlimited" a la página de crossovers. Nosotros: 7 días gratis, deslizante, con aviso de caducidad, y el completo en Premium.

**Día 2 — Sigue ahí también en el otro dispositivo.** La racha de Murdle vive en `localStorage`, por navegador, sin cuenta y sin sincronización (verificado en `main.js`). "is there a murdle app" 40/mes, "murdle app" 170/mes. Nosotros: cuenta opcional por magic link, sincronización como criterio de hecho de F10 con dos dispositivos reales, PWA instalable.

**Día 3 — El motivo no es un desplegable escondido.** Murdle enseña "WHY?" solo algunos días, como una cuarta persiana. En nuestro domingo el motivo es la **cuarta categoría de la rejilla** y además el acto final: acusas quién, dónde y con qué, cierras el caso y la racha, y **después**, si quieres, dices por qué, y eso desbloquea la confesión del culpable escrita para ese caso. No penaliza fallarlo.

**Día 4-7 — El escalafón.** Las insignias de Murdle son sociales, no de habilidad: la insignia "socialist" se gana **por visitar sus foros y redes**. Nosotros nombramos la técnica que el caso exigía y acreditamos que sabe hacerla, con la frase honesta ("este caso exigía", no "has usado", porque el motor ve tableros, no cabezas). Es progresión sin la ansiedad de la racha, y no baja por irse de vacaciones.

**Toda la semana — Cero erratas, y racha reparada sola cuando falle.** Este es el punto que un lector de Murdle **en español** siente en el estómago, porque ya le pasó: la edición española de Murdle acumula "20 erratas en 6 acertijos", con los acertijos 21 y 22 irresolubles, y la propia murdle.com mantiene una página de erratas que solo cubre dos casos de los libros. Cuando un Murdle sale defectuoso, la racha se rompe y **la comunidad publica en Reddit instrucciones para repararla a mano**. Nosotros llegamos con `/una-sola-solucion` publicada el día uno, página de erratas abierta, botón de reportar en la pantalla de resultado y **reparación automática de la racha de todos los afectados**, sin escribir a soporte (F18). Es un diferencial barato, defendible y exactamente contrario a la queja número uno del género.

**Toda la semana — Reparto hispano con ficha, y que la ficha sirve para algo.** Murdle tiene un elenco reconocible (Logico, Irratino) y unas cartas volteables cuyos atributos alimentan las pistas ("*Whoever was in the impossible hedge maze was left-handed*", "*traces of a weapon made of crystal*"). Es su mejor idea de contenido y la copiaremos **en estructura, jamás en expresión**: personajes nuestros, en español, con fichas cuyos atributos (material, oficio, procedencia, manía) generan tipos de pista (idea E7). Eso es lo que responde a la queja "un poco repetitivo al cabo de un rato" (P23) sin inventar reglas nuevas.

**Lo que un lector de Murdle NO debe notar, y hay que decirlo:** la mecánica de la rejilla es la suya. No hay innovación de diseño ahí, igual que no la hay en Escena (`funcionamiento-productos.md` §2.5). Lo nuestro es lo que rodea a la rejilla y la garantía de que la rejilla nunca está rota.

---

## 4. Diez ideas de producto propias de Expediente

Coste en **días de agente incrementales** sobre la plataforma, M3 y el motor base de Expediente (V24, 3 días), en la unidad de `propuesta-jugabilidad.md` §2. No se pueden sumar sin esa base.

| # | Idea | Categoría | Qué es, en una línea | Evidencia que la respalda | Coste | Fase |
|---|---|---|---|---|---|---|
| **E1** | **El interrogatorio de ficha** | Momento contable · maestría | Tres pistas de salida y tres preguntas de un menú vivo; las preguntas son casillas de la rejilla ("¿dónde estabas?", "¿qué llevabas?") | En murdle.com la interacción con los sospechosos es **pasiva**: cartas que se voltean ("INVESTIGATE CARDS TO LEARN MORE") y una pista aleatoria confesadamente "*often useless or redundant*". Panel: interrogatorio 4,0 de media, σ 0,63, **4 de 5 se lo contarían**, la mejor combinación de consenso y boca a boca de las 26 familias | **2** | Fase 2, con Expediente |
| **E2** | **La reconstrucción de la rejilla: el salto entre bloques** | Momento contable · maestría | La animación enciende las casillas en el orden del certificado y **marca el instante en que una deducción salta de un bloque a otro** | Panel: reconstrucción 3,8, σ 0,75, nadie la rechaza. P10: la gente se va a TikTok a buscar "Solución del juego Murdoku nivel 8" porque "las explicaciones del libro se quedaban cortas". El salto entre bloques es el punto donde se atasca todo principiante de rejilla lógica y **ningún producto del género lo enseña** | **1,5** | Fase 2, con Expediente |
| **E3** | **El motivo como acto final y la confesión** | Momento contable | Acusar quién/dónde/con qué cierra el caso y la racha. Después, opcional y sin penalización, el motivo; acertarlo desbloquea la confesión del culpable | murdle.com esconde "WHY?" en un cuarto desplegable solo algunos días. Panel V7 ("segunda fase: el móvil") 3,6, recomendado a lanzamiento **saltable y con el botón de compartir antes o al lado, nunca detrás**. Panel 17 (confesión y "y sin embargo") 3,2: coste casi nulo y es lo que hace pagar al perfil lector | **1** | Fase 2, con Expediente |
| **E4** | **El domingo de la conspiración** | Variedad semanal · momento contable | Los culpables de los seis casos de la semana son los sospechosos del Expediente XL del domingo, en un solo escenario, con motivo | Verificado en el código de murdle.com: `weekly_object.Sunday.suspects.push(killer)`, escenario de cárcel, víctima recurrente que reaparece; texto público "*the biggest is on Sunday*". Nuestra decisión cerrada 12 de D-007 ya dice que el domingo es el más grande y **no** el más duro. Da razón narrativa —no punitiva— para jugar toda la semana | **1,5** + guion | Fase 2, con Expediente |
| **E5** | **La rejilla a dos manos (hoja A / hoja B)** | Cooperación | Dos personas, dos juegos de pistas, una sola rejilla compartida; ninguno puede cerrarla solo | murdle.com hizo exactamente esto en su semana de evento de 2023: "*Maybe each of them got only a single clue, too. And maybe together, they could solve the case?*". Ser Padres: "funciona especialmente bien en modo cooperativo". Panel 13: 3,6 con σ 1,20 y las dos frases más entusiastas de las 26 fichas. **En rejilla el reparto de pistas es más natural que en plano** y la versión en papel cuesta cero | **0** en papel · **3-4 + backend** en digital | Papel **ya** (prueba 4) · digital solo si pasa |
| **E6** | **Guardar, restaurar y vaciar la rejilla** | Maestría | Tres botones: guardo el estado, pruebo una hipótesis, y si no cuadra vuelvo al estado guardado | Es literalmente lo que hace el cuaderno de murdle.com (iconos 💾 ♻️ 🗑️ verificados en el DOM) y es **la respuesta correcta a P11** ("no placeholders to test possible character positions", "having to note the tiles one by one really makes it frustrating"). Y respeta la decisión cerrada 13 de D-007: es anotación, **no más comprobaciones ni más vidas**. Técnicamente es una instantánea de la máquina de estados que F7 ya tiene | **0,5** | Fase 2, con Expediente |
| **E7** | **Pistas por atributo de ficha** | Variedad · personalización | Cada sospechoso, lugar y objeto tiene ficha con atributos (material, oficio, procedencia, manía) y las pistas los usan: "quien bajó a las calderas dejó una mancha de bronce" | murdle.com: `suspects.js` con `eyes`, `sign`, `element`; `settings.js` con `materials` y `weight`; pistas reales del tipo "*traces of a weapon made of crystal*". Responde a P23 ("un poco repetitivo al cabo de un rato") sin añadir reglas. Nuestro propio ejemplo de `funcionamiento-productos.md` §1.2 ya funciona así ("de plata", "de bronce", "de madera") | **2** | Fase 2, con Expediente |
| **E8** | **El expediente de una página, imprimible de verdad** | Personalización · aula | Un A4 por caso: sospechosos, lugares, objetos, rejilla en blanco, pistas, y la solución razonada al dorso. Sin ilustración. Descargable gratis para el caso del día; en pack para los demás | "murdoku pdf" 2.400/mes, "murdoku para imprimir" 350, "murdle pdf" 390. P20: venta pirata de PDF en TikTok y Discord en LatAm, 8 cuadernos de Orientación Andújar en 3 meses. Es **el formato del libro que ha vendido 3 M de ejemplares**. Y cumple la regla "imprimible" de la decisión 7 de `propuesta-jugabilidad.md` §7, que hoy incumplen 13 de 26 mecánicas | **1,5** | Fase 2, con Expediente |
| **E9** | **Expediente Junior** | Variedad · aula | Rejilla 3×3×3 sin víctima (quién se llevó qué del armario del cole), preajuste del motor, dentro de `JUNIOR-WEB` | **La rejilla lógica es mejor que el plano para 8-12 años**: no exige convención espacial, que es la queja P4 ("*rows and columns aren't numbered so you don't know which way to start counting*"). Y hay hueco verificado: en el JS de murdle.com existe una variable `murdle_jr_setting` **vacía**, es decir, ni siquiera el líder ha lanzado su Junior online, pese a que el libro vende ("murdle jr" 590/mes en EE. UU.). P21: el gancho docente es el tema, no la dificultad | **1** | Fase 2 |
| **E10** | **"Tú eres sospechoso", en rejilla** | Momento contable · personalización | Especial mensual en segunda persona: el nombre del jugador es una fila de la rejilla y tiene que demostrar dónde estuvo | Panel 18: 3,6 de media con **σ 0,49, el mayor consenso de las 26 familias**, contable (3 de 5), coste de motor cero. En rejilla es más fuerte que en plano porque el jugador **se ve tachando sus propias casillas**. Nunca culpable en la sección familiar | **0** de motor, dentro del presupuesto narrativo | Fase 2, especial mensual |

**En la sala de espera, con motivo escrito.** *Pista cifrada del sábado con decodificador* (murdle.com la usa; "how to use decoder ring in murdle" 10/mes): sube dificultad sin tocar la lógica y cuesta 0,5 días, pero el sábado es Escena bajo B, así que se pospone hasta que Expediente tenga un tercer día. *Elenco recurrente coleccionable con gabinete de fichas* (panel 19, 3,0, σ 1,10): barato de generar y caro de mantener; una biblia que se contradice es, para la cohorte del lector quemado, una errata más. Va después de E7, que ya construye el registro de personajes.

**Descartado explícitamente, para que no vuelva:** el **testigo que miente** en Expediente. Es la tentación obvia —murdle.com tiene días con `statements` donde los inocentes dicen la verdad y el culpable miente— y es, con evidencia, su muro de dificultad más citado ("*no consigo resolver ni uno de los puzles con mentiroso*", "Tips for solving murdle lying puzzles?"). El panel le da 2,6, la peor nota de 26. Sigue prohibido entre semana por D-007 y no se recupera en Expediente.

---

## 5. Riesgos y cómo se mitigan

| # | Riesgo | Por qué es real | Mitigación concreta |
|---|---|---|---|
| **R1** | **Confusión entre modos: el jueves el jugador abre y no reconoce el juego** | Cambiar el tablero de un día para otro es un cambio de reglas, y "cambiar las reglas en silencio" es la queja P15 | Bajo B el riesgo baja mucho (no hay elección), pero no desaparece. Tres medidas, ninguna cara: (a) **la portada del caso anuncia el modo antes de empezar**, con una frase y un icono, igual que anuncia la regla del día; (b) tutorial de 60 s propio, disparado **solo** la primera vez que el jugador llega a un jueves, saltable y repetible; (c) el vistazo 3×3×3 disponible como calentamiento. Y la regla dura que ya existe: **nunca dos mecánicas estructurales el mismo día** |
| **R2** | **Duplicar el coste editorial** | El cuello de botella es la firma humana de F4/M5 (resolución a ciegas antes de publicar), que es tiempo de persona y **D-009 mantiene el tiempo del usuario como límite explícito** | La mitigación principal **es la arquitectura**: B produce 365 casos al año, no 730. Además: se mide el **tiempo real de curación humana por caso** desde el primer día y se publica en el informe semanal de `analista-datos`; si supera el umbral que fije `revisor-calidad`, **baja la cadencia antes que la calidad** (se retira un día de Expediente, nunca se publica sin resolver a ciegas). El compromiso público "verificado por el motor y resuelto por una persona" no se toca |
| **R3** | **Diluir la tesis de diferenciación** | La tesis (`propuesta-jugabilidad.md` §1.1) es "las pistas las preguntas tú" + "el juego te nombra la técnica y te acredita". Si Expediente sale sin eso, es **Murdle en español**: una copia legal, sin foso, con 170 búsquedas/mes detrás | Regla de publicación, sin excepciones: **no se publica un solo Expediente sin certificado del solver, sin reconstrucción y sin técnica nombrada**. La taxonomía de técnicas de rejilla pasa la **misma prueba de 5 personas** que la de Escena antes de implementarse. Si esa prueba falla dos veces, Expediente sale con 6-8 técnicas, no con 10 —pero sale con escalafón |
| **R4** | **Copiar la estructura de murdle.com y además duplicar su cadencia** | murdle.com sostiene **un** modo con 3 M de libros detrás. Su segundo ritual (el mini) no cuenta para la racha. Duplicar donde el líder no duplica es asumir su coste sin su respaldo | Es el argumento central a favor de B. Se registra como parte de la decisión para que no se reabra "porque el fundador quiere paridad": la paridad se entrega en producto (§1.5), no en cadencia |
| **R5** | **Riesgo de marca: Expediente es el modo más cercano a la expresión de un competidor reconocible** | Las mecánicas no se protegen; la **expresión** sí. Y Expediente comparte con Murdle no solo la rejilla, sino la tentación de la estética (emojis como cabeceras, tipografía de máquina de escribir, arquetipos de personaje) | Reglas escritas para `disenador-ux-ui` y `guionista-misterio`, revisadas por `experto-legal` antes de la primera maqueta: **cero emojis como cabecera de categoría**, cero estética de expediente mecanografiado en Courier, cero arquetipos rastreables a Logico o Irratino, cero nombres derivados. Los textos comparativos de `/juegos-como-murdle` van al mismo circuito de aprobación que las otras siete landings (F14). Nuestra estética la fija Sabueso, no la máquina de escribir |
| **R6** | **El lector de Murdle llega buscando Expediente y solo encuentra dos días** | Es el coste real de B y hay que mirarlo de frente | Cuatro compensaciones, todas ya en el plan: archivo (siempre hay 1-2 Expedientes jugables), landing con un Expediente jugable permanente, **ilimitados en Premium** —que es precisamente la palanca que B crea— y el pack imprimible. Y la promesa se dice en claro en la landing: "expediente cada jueves y cada domingo", no se insinúa |
| **R7** | **El certificado se escribe pensando solo en Escena y luego hay que retrofitarlo** | Es el error que `propuesta-jugabilidad.md` §5.3 ya documenta para M4 y M12: medio día si se escribe junto al predicado, tres días si se añade a veinte predicados ya escritos | **El contrato JSON de peldaños se congela agnóstico del modo antes de que se escriba la primera línea del solver de Escena**, aunque Expediente llegue en la semana 10. Es la única tarea de esta propuesta que hay que hacer **ahora** y no en fase 2 |

---

## 6. Mis cinco favoritas y las tres decisiones del fundador

### 6.1 Las cinco

1. **E4 · El domingo de la conspiración.** La mejor relación entre lo que da y lo que cuesta de todo el documento: 1,5 días, evidencia verificada en el código del líder, y convierte la semana en una historia con final. Es lo que hace que el domingo sea grande sin ser un castigo, y es lo que sustituye a la familia 26 (3 días, "dos guiones acoplados al día") que B hace desaparecer.
2. **E2 · La reconstrucción de la rejilla con el salto entre bloques.** Es la tesis de diferenciación traducida al modo nuevo. Y contiene el único momento genuinamente inédito del conjunto: **nadie enseña el salto entre bloques**, que es exactamente donde se rompe un principiante de rejilla lógica. Sale de un contrato que ya vamos a construir.
3. **E1 · El interrogatorio de ficha.** La mecánica firma, y en Expediente encaja mejor que en Escena porque las preguntas **son** casillas. Con la misma compuerta: si la tasa de aceptación del menú vivo sobre el generador de rejilla no da margen ×10, se repliega a dos preguntas y luego a sobres por progreso, sin drama.
4. **E6 · Guardar, restaurar y vaciar la rejilla.** Medio día. Responde a la petición de anotación más citada del género sin romper ninguna decisión cerrada (no son más comprobaciones, no son vidas, es anotación). Es la definición de fruta madura.
5. **E8 · El expediente de una página.** Es la respuesta comercial a "por qué existe Expediente": 2.790 búsquedas/mes de PDF e imprimible en España, el aula, el pack, la marca blanca y la conversión a papel, todo desde un exportador de 1,5 días. Y es lo que hace que Expediente pague su propio desarrollo aunque su ritual sea de dos días.

Sexta, muy cerca y la menciono porque es barata y nadie la ocupa: **E9, Expediente Junior**. La variable `murdle_jr_setting` vacía en el código del líder es la evidencia más limpia de hueco que hay en todo el análisis.

### 6.2 Las tres decisiones

**Decisión 1 · La arquitectura: ¿A, B o C?**
*Mi recomendación:* **B**. Un solo caso al día; el modo es una propiedad del día; Expediente el jueves y el domingo; y la puerta de salida escrita de §1.4, con los cuatro umbrales fijados antes de ver un solo dato. Los dos motivos que deciden son que **de B se puede subir a A y de A no se puede bajar a B**, y que **solo B permite medir si Expediente retiene**. Bloquea: `catalogo-productos.md` v1.2 (doce cambios), el calendario v2, el mapa de landings de Expediente y la secuencia del motor.

**Decisión 2 · El cuaderno y el rango: ¿uno o dos?**
*Mi recomendación:* **un solo cuaderno con dos apartados (14 técnicas de Escena, 8-10 de rejilla) y un solo rango, calculado sobre el apartado más avanzado y nunca sobre la suma.** Quien solo juega Escena tiene que poder llegar a comisario; si no, Expediente vuelve a ser una obligación disfrazada, que es justo lo que la racha única se inventó para evitar. Jugar los dos da una insignia visible de doble especialidad, no un rango mayor. Bloquea la prueba 1 de validación con personas, que es la primera de todo el plan y la más barata.

**Decisión 3 · ¿Expediente pasa a ser la columna vertebral de las líneas de papel y de B2B?**
*Mi recomendación:* **sí.** `PDF-CLASICO` pasa a 30 Escena + 20 Expediente, `PDF-AULA` usa Expediente en 5.º y 6.º, `PDF-REGALO` es mayoritariamente Expediente, y **`B2B-MARCABLANCA` se vende con Expediente por delante** mientras `B2B-WIDGET` sigue con Escena. El motivo no es de gusto: Expediente es texto, cabe en una columna, no necesita ilustración y se convierte a imprenta con coste cero. Cambia el argumentario de venta y el presupuesto de maquetación. **Aviso ligado:** en cuanto se abra la primera conversación con un medio o una editorial se cumple un disparador de D-006 y hay que registrar en la OEPM (clases 9 y 41) antes de la segunda reunión.

---

## 7. Trabajo que se reparte si se aprueba

| Tarea | Objetivo | Entregable | Dónde | Hecho cuando | Agente |
|---|---|---|---|---|---|
| **Congelar el contrato de certificado agnóstico del modo** | Que la reconstrucción y el escalafón de Expediente no exijan retrofit | Esquema JSON versionado con `modo` y lista de técnicas por modo | `docs/motor.md`, `engine/` | El renderizador de Escena consume el JSON sin transformarlo y el de rejilla se puede escribir sin tocarlo. **Antes de la primera línea del solver de Escena** | `ingeniero-motor-puzzles` |
| Mecánica de Expediente y taxonomía de pistas de rejilla | Especificación implementable sin preguntas | Predicados, vocabulario cerrado, atributos de ficha (E7) | `docs/diseno/mecanica-expediente.md` | El motor la implementa sin abrir una duda | `disenador-puzzles` |
| Lista candidata de 8-10 técnicas de rejilla | Que la prueba 1 pueda incluir los dos modos en la misma tanda | Nombres, dibujo y frase de Sabueso por técnica | `docs/diseno/mecanica-expediente.md` | ≥6 de las técnicas propuestas superan el umbral de la prueba 1 | `disenador-puzzles` + `guionista-misterio` |
| Calendario semanal v2 con modo por día | Cerrar qué días son Expediente y adónde se muda "dos plantas" | Tabla lunes→domingo con modo, tamaño, mecánica y banda de dificultad | `docs/propuesta-jugabilidad.md` §4 v2 | El motor etiqueta un caso como "jueves" sin criterio humano | `disenador-puzzles` |
| PRD del modo Expediente | Convertir esto en trabajo programable | PRD con Given/When/Then, eventos y riesgos | `docs/specs/modo-expediente.md` | Antes de la semana 9 (tarea ya comprometida en `catalogo-productos.md` §7) | `director-producto` |
| Catálogo v1.2 con los doce cambios de §1.6 | Que no haya dos versiones de la verdad | `catalogo-productos.md` v1.2 + entrada D-011 | `docs/` | Publicado el mismo día de la aprobación | `director-producto` |
| Propiedad `modo` en toda la taxonomía de eventos | Sin ella, ninguno de los umbrales de §1.4 se puede medir | Taxonomía actualizada | `docs/analitica/eventos.md` | **Antes** de instrumentar el frontend | `analista-datos` |
| Mapa de intención de las landings de Expediente | Capturar una demanda que es de PDF y libro, no de juego | Brief de `/juegos-como-murdle` + una página nueva | `docs/plan-seo.md` | Cada URL tiene intención, puzzle asignado y llamada a la acción | `estratega-growth-seo` |
| Reglas de distancia estética y textos comparativos | Que el modo más cercano al competidor no se le parezca en la expresión | Guía de estética prohibida + textos aprobados | `docs/legal/` | Antes de la primera maqueta de rejilla | `experto-legal` + `disenador-ux-ui` |
| Prototipo en papel de la rejilla a dos manos (E5) | Decidir dos meses de backend con una tarde de fotocopias | Hoja A y hoja B de tres casos | `content/` | Prueba 4 ejecutada con 6 parejas y un aula | `disenador-puzzles` + usuario |
| Roadmap con fases, hitos y estado | Que exista un sitio donde mirar el orden | `docs/roadmap.md` | `docs/` | Refleja el calendario de Escena y la entrada de Expediente | `director-producto` |

---

*Cambios a este documento: los registra `director-producto` con fecha y motivo en `docs/decisiones.md`.*
