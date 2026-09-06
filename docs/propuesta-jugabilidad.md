# Propuesta de jugabilidad: qué construimos para diferenciarnos

Autor: `director-producto`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Para: decisión del fundador. No es un registro de decisión: si se aprueba, se registra como **D-010** en `docs/decisiones.md`.

Fuentes: `docs/contexto-proyecto.md`, `docs/decisiones.md` (D-007, D-008, **D-009**), `docs/funcionamiento-productos.md`, `docs/catalogo-productos.md`, `docs/diseno/ideas-jugabilidad-disenador.md` (D1-D15), `content/ideas-jugabilidad-guionista.md` (G1-G12), `docs/ideas-jugabilidad-producto.md` (P1-P12), `docs/motor-viabilidad-jugabilidad.md` (V1-V24, propiedades formales, costes), `docs/diseno/panel-jugadores-jugabilidad.md` (26 mecánicas puntuadas por cinco perfiles).

**Alerta de marca (D-006), comprobada hoy:** ninguno de los cinco disparadores se ha cumplido —sin usuarios (el producto no ha lanzado), sin vídeo de +100.000 visualizaciones, sin mención en prensa, sin conversación B2B ni editorial, y sin ningún tercero usando un nombre parecido en el material revisado—, así que **no procede registrar todavía** en la OEPM; la vigilancia sigue siendo quincenal.

---

## 1. Resumen en una página

### 1.1 La tesis de diferenciación, en dos frases

> **En Sospechario las pistas no te las sirven: las preguntas tú, y el juego te garantiza por construcción que no puedes preguntar mal —cualquier pregunta que te deje hacer cierra el caso.**
>
> **Y cuando acabas no te dice solo si acertaste: te reconstruye tu propio razonamiento paso a paso, le pone nombre a la técnica que ese caso exigía y te acredita que sabes hacerla —subes de aprendiz a comisario por lo que sabes, no por los días seguidos que no has fallado.**

Eso es lo que un jugador puede contar y que **no puede contar de Murdoku ni de Murdle**, y no por capricho de diseño sino porque las dos cosas dependen de una pieza que un autor que escribe casos a mano no puede tener: un solver que emite un **certificado paso a paso** de cómo se deduce cada caso. Murdoku, Murdle, Enigmic y los clones sirven todas las pistas en la primera pantalla y terminan en una cuadrícula correcta. Clues by Sam, que es el único que abre información durante la partida, lo hace **al acertar**, y de ahí sale su queja más citada («*why is this giving me a logic error?*»).

Lo que **no** vamos a comunicar como diferencia, porque no lo es: la mecánica de Escena (es la de Murdoku), el formato diario con racha y cuadraditos (es el de Wordle), y que la narrativa la escriba una IA (`funcionamiento-productos.md` §2.5 ya lo dice y sigue siendo verdad).

### 1.2 Qué recomiendo, en una lista

**Mecánicas firma (3).** Las que definen el producto y justifican el precio del trabajo:

| | Firma | Estado |
|---|---|---|
| **F-A** | **El interrogatorio de menú vivo** (panel 4, motor V4 con **MV**) | Lanzamiento, **condicionada** a la tasa de aceptación de MV sobre 10.000 candidatos |
| **F-B** | **El escalafón + la reconstrucción** (panel 23 + 21, motor V18 con **TR** y V17) | Lanzamiento, **condicionada** a la prueba de nombres con 5 personas |
| **F-C** | **El caso a cuatro manos** (panel 13, motor V13 con **AM**) | Prototipo en papel **ya**; digital solo si el papel pasa |

**Al lanzamiento, además de las firmas (la base y el marco).** Semana con carácter (22) como marco · tirar del hilo (9) · Sabueso de dos niveles (11) · sobres por progreso (5, variante de diseño) · pistas visuales con leyenda cerrada (3) · el vistazo de 3 minutos (14) · rastro del objeto (2) · celdas bloqueadas (V16) · domingo de dos plantas (15) · viernes de disparate (20) · la segunda fase del móvil (7) · confesión y «y sin embargo» (17) · «tú eres sospechoso» (18) como especial mensual · la etiqueta «probado / ganado por poco» (mitad de 8).

**Fase 2.** Modo Expediente (V24, ya comprometido) · doble franja (1) tras prueba con personas · caso invertido (10) como formato de archivo y de aula · pásale tu caso (25) con los duelos · el botón «Me mojo» (mitad de 8) con los duelos · arco narrativo con recompensa **solo** narrativa (12) · diario y reparto recurrente (19) · caso a la carta (24) · cuatro manos digital si el papel pasa.

**Fase 3 o condicionado.** El hilo del día Escena↔Expediente (26), solo si ≥20 % juega los dos modos el mismo día.

**Descartar.** El testigo que miente (6) en el ritual diario · testigos con personalidad (16) dentro de las pistas numeradas · las pistas que se abren **al acertar** con rechazo de colocaciones (variante de producto de la 5: viola OR) · la propiedad **IQ** tal como estaba escrita (es matemáticamente imposible) · la libreta del arco que **acorta la lógica** (12, variante de producto) · convertir casos normales en invertidos (bajo NR el soporte mínimo es el conjunto entero) · el interrogatorio de texto libre · el tablón de corcho.

### 1.3 Cómo he pesado las discrepancias (esto es lo importante de esta página)

Tres documentos proponían tres cosas distintas y el panel las puntúa de una cuarta manera. La regla que he aplicado, y que se puede discutir:

**El panel decide la variante y el hueco del calendario; no decide si una mecánica existe. La diferenciación (D-009) decide qué construimos; el panel decide a quién se lo servimos y cómo.**

El motivo es que el panel es un panel **simulado**: no es la validación con jugadores reales que exige D-009, y darle poder de veto sería sustituir una opinión de agente por otra. Pero dentro del panel hay dos señales que **no son opinión** y que sí uso como si fueran dato:

- **Señal estructural: a qué perfil sirve cada mecánica.** Que seis mecánicas reciban un 5 de Luis (el lector de Murdle) y un 2-3 de los otros cuatro no dice «esto no gusta»: dice «esto sirve a un segmento». Eso sobrevive aunque el panel sea inventado, porque los perfiles están anclados en reseñas reales.
- **Señal de variante.** En tres familias la variante decide más que la mecánica: sobres **por progreso** sí y **por acierto** no; arco con recompensa **narrativa** sí y con **dos pasos menos** no; Sabueso **que elige dónde huele** para la familia. Corregir una variante es gratis y pesa más que añadir una mecánica.

Y añado un criterio propio, porque «nota media alta» es engañoso: **tirar del hilo saca 4,2 y no lo contaría nadie (0 de 5)**. Eso no es una mecánica diferencial, es el suelo de un producto bien hecho. El criterio de candidatura a firma es **nota ≥3,6 Y al menos 3 de 5 lo contarían**, que deja seis: escalafón (4,2/3), interrogatorio (4,0/4), viernes de disparate (3,8/4), pásale tu caso (3,8/4), caso a la carta (3,8/3) y tú eres sospechoso (3,6/3). De esas seis, solo dos son **foso**: las otras cuatro son tono, distribución, riesgo o especial, y se copian en una semana.

**Aplicado a cada documento:**

- **Las favoritas del diseñador no llegan al podio del panel, y las tres tienen destinos distintos.** *Doble franja* (3,2): la objeción de Marta y de la familia es de **interfaz** («un tablero conmutado en 360 píxeles», «el de diez no entiende que la misma persona esté en dos sitios»), no de concepto, y Luis le da un 5 con la mejor frase del panel. Una objeción de interfaz se arregla; por eso va a **prueba con personas**, no a la papelera. *El testigo que miente* (2,6, la peor nota): aquí hay **cuatro negativos independientes** —peor nota del panel, es el muro más citado de todo el género (Murdle), coste narrativo alto y continuo, y tasa de aceptación de MP desconocida— y solo un defensor. Se descarta del ritual diario. *Cuatro manos* (3,6, σ 1,20): divide por **forma de vida**, no por gusto, y sus dos defensores le dan un 5 con la frase más entusiasta que hay en las 26 fichas. Además tiene una versión en papel que cuesta cero y que es exactamente la prueba. Por eso es firma **condicionada**.
- **Las del guionista gustan sobre todo a un perfil, y ese perfil es el que paga.** Luis es el lector quemado por las erratas y el único que dice que pagaría el archivo. Ignorarlo deja el producto sin narrativa; construir para él expulsa a Marta y a Sofía. La solución no es elegir: es **sacar toda la narrativa fuera de las pistas numeradas**. Confesión, «y sin embargo», diario, respuestas del interrogatorio y sinopsis: sí. Voz de personaje **dentro de una pista numerada**: no, nunca —es la única mecánica del conjunto que va en contra de lo que las reseñas piden (claridad, ninguna pista sobrante, sin localismos) y abre dos grietas a la vez, la doble lectura (P3) y el modismo (regla 4).
- **Las de producto viajan mejor entre perfiles, y hay que entender por qué antes de celebrarlo.** Viajan porque son **infraestructura montada sobre el certificado del solver**, y la infraestructura sirve a todo el mundo. Eso las convierte en la base obligatoria, no automáticamente en la historia. La excepción es el escalafón, que es infraestructura **y** se cuenta («he subido a inspector») **y** solo la podemos hacer nosotros. Por eso es firma y tirar del hilo no lo es.
- **Frente a D-009.** El coste ya no ordena nada: entra todo lo que diferencia y gusta, y sale todo lo que no, aunque sea barato. Lo que D-009 **no** suspende son los otros tres límites: la ventana de mercado (por eso hay un calendario y una fecha), el tiempo del usuario para validar (por eso el plan de la §6 tiene seis pruebas y no doce) y la calidad (por eso las tres firmas llevan una compuerta antes de comprometerse y ninguna se construye a ciegas).

---

## 2. Tabla maestra: las 26 familias del panel más las 2 que solo ve el motor

Nota media y dispersión, del panel (σ >1,0 = divide). «Contable» = al menos 3 de los 5 perfiles se lo contarían a un amigo. Viabilidad y coste, del dictamen del motor; el coste está en **días de agente incrementales sobre la plataforma** (que son 19-20 días aparte) y no se puede sumar sin ella.

| # | Familia (motor) | Qué es en una línea | Media | σ | Contable | Motor | Propiedad a verificar | Días | Dependencias | Recomendación y motivo |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Doble franja (V1) | El caso ocurre en dos momentos y entre ellos cada persona se queda o se mueve a una habitación pegada | 3,2 | 0,98 | No (1) | **Sí** | U+SA+NR sobre `2n` + **DF** | 5-6 | M8, M9, M3 | **Prueba con personas antes** (fase 2). Única «ajá» de tipo nuevo del conjunto; el freno del panel es de interfaz, no de concepto |
| 2 | Rastro del objeto (V2) | Un objeto recorre tres habitaciones y el jugador rellena la tira de paradas | 4,0 | 0,63 | No (1) | **Sí** | U+SA+NR + **RO** | 3 | M10, M3 | **Lanzamiento** (viernes/sábado). Consenso alto, barata, imprimible y da a la familia su frase |
| 3 | Pistas visuales (V3) | Dos o tres pistas dibujadas en el plano con leyenda cerrada y frase canónica única | 4,0 | 0,89 | No (2) | **Sí** | **CN** + ≤3 iconos y ≤50 % del total | 1 | M6, M1 | **Lanzamiento**. Ataca de frente P3/P4; el coste real es ilustración, no motor |
| 4 | Interrogatorio (V4) | Menos pistas y tres preguntas de un menú que el motor filtra en vivo | 4,0 | 0,63 | **Sí (4)** | **Parcial** | **MV + OR** (IQ es inviable) | 4-6 | M7, M3, solver en cliente | **FIRMA · lanzamiento condicionado** a la tasa de aceptación de MV. Única estructural con consenso y contable |
| 5 | Pistas que se ganan (V6) | El caso abre con tres pistas y las demás se liberan al avanzar | 3,4 | 0,80 | No (1) | **Sí** por progreso / **No** por acierto | **OD + OR** | 2 | M3 | **Lanzamiento** solo la variante por progreso, en el lunes y en las landings. La de acierto **se descarta**: viola OR |
| 6 | Testigo que miente (V5) | Uno de los seis testimonios es falso y hay que pillarlo por contradicción directa | 2,6 | 0,80 | No (1) | **Sí** | **MP + ML** + negación cerrada del DSL | 3-4 | M7, M12, M1 | **Descartar** del ritual diario. Peor nota, muro más citado del género, coste narrativo alto y tasa MP desconocida |
| 7 | Segunda fase: el móvil (V7) | Tras acusar, tres motivos y dos pistas para deducir el porqué | 3,6 | 1,02 | No (1) | **Sí** | U+NR sobre micro-CSP + **no entrañado** | 1,5 | M10, M12 | **Lanzamiento**, saltable y con el botón de compartir **antes o al lado**, nunca detrás |
| 8 | Acusación anticipada (V8) | Acusar con el tablero a medias; «probado» frente a «ganado por poco» | 3,0 | 1,10 | No (1) | **Sí** | El certificado dice si **ya era deducible** | 0,5 | M3 | **Partir en dos.** La etiqueta al lanzamiento; el botón «Me mojo», a fase 2 con duelos y con el criterio del motor, no el del medio tablero |
| 9 | Tirar del hilo (V9) | Tocar una pista resalta las celdas que afecta y al revés | 4,2 | 0,40 | No (0) | **Sí** | Contrato `cells(pista, estado)` | 0,5 | M4 | **Lanzamiento, obligatoria.** Mejor nota del panel y nadie la contaría: es suelo, no argumento. **0,5 días si se escribe con el DSL, 3 si se añade después** |
| 10 | Caso invertido (V10) | El plano viene resuelto y hay que marcar el conjunto mínimo de pistas que lo prueba | 3,4 | **1,36** | No (2) | **Sí**, con generador propio | **PU** sobre soportes mínimos | 2 | M7, M12 | **Fase 2**, como formato de archivo y de aula, nunca caso del día. La más polarizante del panel |
| 11 | Sabueso (V11) | La mascota señala el siguiente peldaño del razonamiento, un uso por caso | 3,6 | 0,80 | No (1) | **Sí** | **OR**; el paso sale del certificado, jamás de la solución | 1,5 | M3, M4, solver en cliente | **Lanzamiento.** Variante de producto (dos niveles) con el gesto «¿dónde quieres que huela?» de diseño. Rompe la condición del 35 % de D-007, con motivo escrito |
| 12 | Arco entre casos (V12) | Un antagonista o una historia atraviesa la semana o cuatro domingos | 3,0 | 1,10 | No (1) | **Sí** | **EN**: la libreta acorta, nunca habilita | 2,5 | M11, M12, M3 | **Fase 2**, solo con recompensa narrativa. La variante de «dos pasos menos» **se descarta**: rompe «el mismo caso para todos» |
| 13 | Cuatro manos (V13) | Dos personas, dos móviles, pistas repartidas; ninguna puede resolverlo sola | 3,6 | **1,20** | No (2, los más entusiastas) | **Parcial** | **AM** como cierre alternado | 3-4 + backend | M3, M7 | **FIRMA CONDICIONADA · prototipo en papel ya.** Divide por forma de vida, no por gusto; la versión en papel cuesta cero y es la prueba |
| 14 | El vistazo (V14) | Mini de 3×3 y tres pistas, dos minutos, numeración propia | 4,0 | 1,10 | No (2) | **Sí** | U+SA+NR con techo **N2 estricto** | 0,5 | M2, M3 | **Lanzamiento.** Tutorial jugable, calentamiento de aula y puerta de entrada desde las landings |
| 15 | Dos plantas (V15) | El domingo el plano tiene dos pisos y una sola escalera | 3,6 | 1,20 | No (2) | **Sí** | Adyacencia de grafo; `justo_encima`, `cuenta`, `distancia` | 2 | M9, M1 | **Lanzamiento** (domingo). Da al XL una razón espacial en vez de ser el lunes con más casillas |
| 16 | Testigos con personalidad (V23) | Las pistas numeradas se redactan con la voz del personaje | 3,0 | **1,26** | No (1) | Sí en forma, **no** en efecto | **CN** (retraducción, que es heurística) | (dentro de 1,5) | M6 | **Descartar dentro de las pistas numeradas.** Única mecánica que va contra lo que piden las reseñas. Permitida en sinopsis, respuestas y epílogo |
| 17 | Confesión y «y sin embargo» (V23) | Epílogo en la voz del culpable y una última vuelta de tuerca sobre un detalle decorativo | 3,2 | 0,98 | No (1) | **Sí** | **CN** + registro de decorados | (dentro de 1,5) | M6 | **Lanzamiento.** Coste casi nulo y es lo que hace que Luis pague; va fuera de las pistas, así que no molesta a nadie |
| 18 | Tú eres sospechoso (V23) | Especial en segunda persona: el jugador es uno de los nombres del tablero | 3,6 | **0,49** | **Sí (3)** | **Sí** | Concordancia en segunda persona (tuteo/voseo) | (dentro de 1,5) | M6 | **Lanzamiento como especial mensual.** Consenso casi total, la frase más grabable del panel, cero coste de motor. Nunca culpable en la sección familiar |
| 19 | Diario y reparto recurrente (V23) | Los mismos nombres vuelven con papeles distintos y el jugador colecciona fichas | 3,0 | 1,10 | No (1) | **Sí** | Identificadores estables + ningún caso depende de otro | (dentro de 1,5) | M6 | **Fase 2.** Barato de generar y caro de mantener: una biblia que se contradice es, para la cohorte de Luis, una errata más |
| 20 | Viernes de disparate (V22) | Un día fijo de humor alto, víctimas de poca monta, misma lógica | 3,8 | 0,98 | **Sí (4)** | **Sí** | Etiqueta de tono; el chiste **nunca** dentro de una pista | 0 | — | **Lanzamiento.** Coste cero de motor y la frase más repetida del panel. No es foso: cualquiera lo copia |
| 21 | Reconstrucción animada (V17) | Al acusar, el plano se resuelve solo en 25 segundos y termina con una frase | 3,8 | 0,75 | No (2) | **Sí** | Serialización completa del certificado | 1 | **M3**, M4 | **FIRMA (con 23) · lanzamiento.** Mejor relación valor/coste del conjunto y **solo existe si existe M3** |
| 22 | Semana con carácter (V22) | Cada día una regla propia que se cuenta en una frase, con dificultad medida | 3,8 | 0,75 | No (2) | **Sí** | **TR** + bandas de dificultad medidas | 1 | M3, M5, M11 | **Lanzamiento.** Es el marco que permite servir a cinco perfiles distintos sin elegir uno |
| 23 | El escalafón (V18) | El juego nombra la técnica que el caso exigía y acredita al jugador que la sabe hacer | **4,2** | 0,75 | **Sí (3)** | **Parcial** | **TR**: «qué exige el caso», no «qué usó el jugador» | 3 | **M3** | **FIRMA · lanzamiento condicionado** a la prueba de nombres. Mejor nota **y** contable **y** lo único que solo nosotros podemos hacer |
| 24 | Caso a la carta (V19) | Elegir decorado, reparto y dificultad y jugar un caso propio al momento | 3,8 | 1,17 | **Sí (3)** | **Sí** | Igual que un caso normal + **depósito precalentado** | 2 | M2, M11 | **Fase 2.** El panel lo quiere y Marta pagaría, pero un caso sin firma humana es donde una sola pista mala nos etiqueta «hecho por IA» (P18). Riesgo asimétrico |
| 25 | Pásale tu caso (V21) | Mandar un caso resuelto a alguien, ver por qué paso va y darle un pinchazo | 3,8 | **0,40** | **Sí (4)** | **Sí** | Estado del jugador → peldaño compatible del certificado | 1 | **M3**, M4 | **Fase 2 con los duelos.** Consenso y contable a la vez: es la mejor pieza de crecimiento del conjunto, pero necesita infraestructura de duelos |
| 26 | Hilo del día (V20) | La Escena y el Expediente del día son el mismo caso y se pasan lo deducido | 3,2 | 0,75 | No (1) | **Sí** | **EN** en los dos sentidos + U+SA+NR de cada caso por separado | 3 | M12, M11, V24 | **Fase 3**, y solo si ≥20 % juega los dos modos el mismo día. Coste narrativo muy alto: dos guiones acoplados al día |
| — | Celdas bloqueadas (V16) | Una habitación sellada o un pasillo cortado anunciados en la cabecera | (dentro de 22) | — | No | **Sí** | Existencia (permanente >0) + van en `board.blocked`, **no** en `clues` | 1 | M9, M0 | **Lanzamiento** (jueves «a puerta cerrada»). Es lo que hace que el jueves se sienta distinto y no solo se llame distinto |
| — | Modo Expediente base (V24) | Cuadrícula lógica sospechoso × lugar × objeto (× motivo) | (no puntuado) | — | — | **Sí** | U+SA+NR sobre asignación multicategoría; **prohibido enumerar** | 3 | M10, M0, M3 | **Fase 2** (semanas 10-14), ya comprometido en `funcionamiento-productos.md` §1.2 y condición de la 26 |

**Totales de referencia.** Plataforma 19-20 días (M1, M0, M2, M3, M4, M7, M9, M12, M5, M6) + M10 y M11 (3,5). Lo recomendado para **lanzamiento** suma ≈19 días incrementales; **fase 2**, ≈16; el resto queda fuera. El dictamen del motor cifra las 24 familias completas en ~72 días y dice, con razón, que nadie debería construirlas todas.

---

## 3. Las mecánicas firma

### 3.1 Firma A · El interrogatorio de menú vivo

*(panel 4 · diseñador D4 · guionista G1 · producto P3 · motor V4 variante (a) con **MV**)*

#### Cómo se juega, paso a paso, con un caso concreto

> **Caso 23 · La tarde en que se pararon todos los relojes**
> Doña Perpetua Miralles, coleccionista de mapas antiguos, apareció sin vida en **el Fumadero** del pazo de Vilaseca. Cuatro personas estaban en la casa: **Braulio Sende** (el chófer), **Remedios Anta** (la bibliotecaria), **Cosme Valbuena** (el afinador de pianos) y **Olalla Ferrer** (la sobrina).

El plano, 4×4. Pasillos del 1 (norte) al 4 (sur); alas del 1 (oeste) al 4 (este). Los ejes van rotulados en pantalla (M1 de D-007).

| | Ala 1 (oeste) | Ala 2 | Ala 3 | Ala 4 (este) |
|---|---|---|---|---|
| **Pasillo 1 (norte)** | Portalón | Salita de té | Despacho | Palomar |
| **Pasillo 2** | Lavadero | Sala de mapas | **Fumadero** | Terraza norte |
| **Pasillo 3** | Cocina | Bodeguilla | Sala de billar | Solana |
| **Pasillo 4 (sur)** | Cochera | Cuarto de calderas | Archivo | Muelle |

**Paso 1. El caso abre con tres pistas, no con siete.** Es la mitad de una pantalla, no un muro.

1. Cosme no salió del pasillo del norte en toda la tarde.
2. Olalla estaba en el ala más al este de la casa.
3. Braulio estaba más al sur que Remedios.

Con esto **no se puede cerrar el caso**, y el juego lo dice: «Faltan tres declaraciones. Pregunta.»

**Paso 2. Debajo del plano, un botón *Interrogar* con un contador: 3.** El jugador toca a un sospechoso y se abre un menú **de tres a cinco preguntas**. No son todas las posibles: son **las que el motor ha calculado que dejan el caso cerrable con las preguntas que quedan**. Encima del menú, siempre, una línea: *«Cualquiera de estas cierra el caso. Unas te dejan más trabajo que otras.»*

Toca a **Braulio** y elige *«¿En qué ala estabas?»*
> —En la primera, la del oeste. Estuve con el coche toda la tarde.

`ala(Braulio) = 1`. Contador: 2.

**Paso 3.** Toca a **Olalla** y elige *«¿En qué pasillo estabas?»*
> —¿Yo? En el cuarto, el de abajo del todo. Bajé a fumar al muelle.

`pasillo(Olalla) = 4`. Contador: 1. Y aquí el tablero se abre solo: Cosme está en el pasillo 1, Olalla en el 4, así que Braulio y Remedios se reparten el 2 y el 3; la pista 3 dice que Braulio está más al sur, luego **Braulio en el 3 y Remedios en el 2**, los dos de golpe. Braulio está en el ala 1: **Braulio en la Cocina** (pasillo 3, ala 1). Y Olalla está en el ala 4: **Olalla en el Muelle** (pasillo 4, ala 4).

Quedan Cosme (pasillo 1) y Remedios (pasillo 2), que tienen que ocupar las alas 2 y 3, en algún orden. Dos mundos posibles y una pregunta.

**Paso 4. La última.** Si toca a Remedios, el menú **no le ofrece** *«¿Estuviste en el Palomar?»*: esa pregunta ya no dice nada en este estado, y por eso no está. Sí le ofrece, entre otras, *«¿Estuviste en el Despacho?»* a Cosme.
> —¿En el despacho? No, ni me acerqué. Yo estuve toda la tarde con la tetera.

`Cosme ≠ ala 3`, luego **Cosme en la Salita de té** (pasillo 1, ala 2) y **Remedios en el Fumadero** (pasillo 2, ala 3).

**La sorpresa.** El cuerpo estaba en el Fumadero. **La culpable es Remedios Anta.** Y la frase que la condena no se la ha dicho ella: se la ha dicho **Cosme**, que no tiene nada que ver con nada y al que el jugador ha preguntado por un despacho en el que no estuvo. Ese es el beat que el género no da nunca: en Murdoku y en Murdle la última pista te la sirve el libro; aquí **tú eliges a quién le arrancas la frase que condena a otro**.

Al terminar entra la firma B: la reconstrucción anima esos seis pasos y dice *«Este caso exigía **la tenaza de orden**: dos pasillos libres y una pista de "más al sur" los fijan a los dos a la vez. La has hecho sin ayuda, y es la segunda vez.»*

#### Por qué gusta, según el panel y las reseñas

- **Es la única mecánica estructural con consenso y con boca a boca a la vez**: 4,0 de media con σ 0,63 y **4 de 5 se lo contarían**. Marta: «*me hace sentir detective y no lectora*». Sofía: «*"lo cerré con dos preguntas" es algo que yo pondría en el grupo*» —y además el menú es cerrado, o sea, sin tutorial, que es su condición de siempre. Luis: «*es Simenon*». La familia descubre algo que no estaba en el diseño: **reparte los turnos sola** («el pequeño una pregunta, la mayor otra, yo la tercera»).
- **Cura el defecto de arranque del formato.** La queja de fondo del género no es la dificultad: es la pared de ocho párrafos en la primera pantalla. Empezar con tres pistas es lo que Marta pide «*a las ocho de la mañana*».
- **Es agencia**, que es lo que le falta a los cuatro competidores del análisis: hoy el jugador solo tiene un verbo, *colocar*.

#### Por qué nadie más lo tiene

Clues by Sam, el único producto del género que abre información durante la partida, la abre **al acertar**, y por eso genera su queja más citada. Murdoku, Murdle, Enigmic y los clones sirven todo en la primera pantalla. Y el interrogatorio de **texto libre** no es formalizable, así que nadie puede prometerlo con garantías.

Lo que hace esto irreplicable no es la idea —la idea la tiene cualquiera— sino la promesa: **«no puedes preguntar mal»**. Para sostenerla hace falta mantener el residuo de soluciones y filtrar el menú en tiempo real, en el cliente, con el mismo solver que usa el generador. Un autor que escribe casos a mano no puede hacerlo a ningún volumen, y un competidor que lo improvise romperá la unicidad la primera semana.

#### Qué garantiza el motor, y con qué propiedad

**No con IQ. IQ no se puede garantizar y hay que decirlo.** El dictamen del motor demuestra dos cosas: (a) el menú real no son 16 preguntas sino **84** (las plantillas «¿estuviste en X?» y «¿viste a Y?» llevan parámetro), o sea 95.284 ternas por candidato en vez de 560; y (b), lo grave, **IQ estricta y «elegir bien es una habilidad» son incompatibles**: si cualquier terna debe cerrar el caso, o casi toda pregunta es individualmente decisiva —y entonces elegir no es una habilidad— o alguna terna contiene preguntas vacías y falla. No hay punto medio. La tasa de aceptación no sería baja: sería cero.

La propiedad que sí se puede garantizar es **MV, el menú vivo**, más **OR**:

```
MV1  el residuo de soluciones compatibles se mantiene en el cliente (decenas de modelos)
MV2  q es ofrecible en el estado E con r preguntas restantes si existe una secuencia
     de r preguntas que empieza por q y deja |residuo| = 1, con certificado ≤N4 en cada paso
MV3  en todo estado alcanzable hay ≥2 preguntas ofrecibles (si no, no hay agencia)
MV4  OR: que una pregunta esté o no en el menú no revela nada que el jugador
     no pueda deducir ya, porque el filtro se calcula sobre el residuo, que él también ve
```

Con esto la promesa al jugador cambia de «*cualquier terna vale*» (falso) a «**cualquier pregunta que te dejemos hacer cierra el caso**» (verdadero, y mejor: es visible en pantalla). Y la agencia sigue existiendo, porque unas preguntas dejan un camino N2 y otras uno N4, que es exactamente la habilidad que el diseñador quería.

**Dos decisiones de vocabulario que hay que cerrar antes, y una es un fallo real que he encontrado revisando el ejemplo.** El diseñador define `ve(A, B)` como «comparten pasillo (misma fila)». **Bajo el cuadrado latino, dos sospechosos nunca comparten fila ni columna, así que ese predicado es idénticamente falso y la pregunta 4 del menú no informa jamás.** Peor: la adyacencia ortogonal («comparten pared») también es imposible entre dos sospechosos, porque exige compartir fila o columna. La única definición no degenerada es **`ve(A,B) ⟺ |Δpasillo| = 1 ∧ |Δala| = 1`** (contigüidad en diagonal: «se vieron por la puerta entornada»), que además es narrativamente bonita —y que obliga a matizar la regla «NUNCA diagonal» del vocabulario, que vale para `adyacente_hab` pero no puede valer para las relaciones entre personas. **Bloqueante para `disenador-puzzles`**, junto con la §7.7 del dictamen (las respuestas no cuentan para NR, pero cada una debe ser no vacía en el estado en que se hace).

#### Riesgo de rechazo y cómo se mitiga

| Riesgo | Mitigación |
|---|---|
| **La tasa de aceptación de MV es demasiado baja y el generador no sostiene un caso semanal** | Se mide **antes** de tocar frontend, sobre 10.000 candidatos 4×4, con menú de 4 plantillas y de 2. Plan de repliegue en tres escalones: menú de 2 plantillas → 2 preguntas en vez de 3 → variante «acelerador» del diseñador (las pistas base ya cierran el caso y preguntar solo acorta) → el miércoles pasa a sobres (V6), que ya está construido |
| **«Y si pregunto mal me quedo sin resolver»** (Marta lo dice explícitamente, y dice que se lo creerá «la segunda vez que lo compruebe, no la primera») | El menú **físicamente no ofrece** preguntas que no cierren. La línea sobre el menú lo dice en una frase. Y la página `/una-sola-solucion` (F18) incorpora un apartado sobre el interrogatorio |
| **«Que el miércoles no tarde el doble que el martes»** (Sofía) | El miércoles es **4×4**, no 5×5, con objetivo de 8-12 minutos y menú de tres preguntas. La duración del día se mide y se corrige con la banda de dificultad, no con la mecánica |
| **No se imprime** (Diego: «cada alumno haría preguntas distintas y yo no puedo corregir 28 caminos») | Versión imprimible con las tres respuestas ya dadas al pie («la clase vota la pregunta») en el Pack Aula. Se acepta que en papel es otra actividad |
| **La variante del guionista mezcla dos mecánicas** (una respuesta miente) | Se separan, como pide el panel. Interrogatorio sí; mentira no. Si algún día se recupera, es con **ML** verificada y jamás en el mismo caso |

#### Qué prueba con personas hay que hacer antes de comprometerla

Compuerta 0, del motor (2 días, sin personas): tasa de aceptación de MV. **Si es inviable, no hay prueba con personas que salvarla.**
Compuerta 1, con personas: **prueba 2 de la §6**. 12 personas, prototipo HTML, sin tutorial. Umbrales fijados antes del dato: **nadie dice «pregunté mal»** (una sola vez, y la mecánica no existe); la tasa de resolución no cae más de 10 puntos frente a un caso clásico equivalente; **≥8 de 12** describen espontáneamente lo que han hecho con un verbo de investigación («he preguntado», «he interrogado»), no con uno de lectura.

---

### 3.2 Firma B · El escalafón, con la reconstrucción como su escaparate

*(panel 23 + 21 · producto P6 + P1 · motor V18 con **TR** y V17)*

Van juntas porque son la misma promesa contada en dos momentos: la reconstrucción **enseña** cómo se deduce y el escalafón **acredita** que lo sabes hacer. Separadas, la reconstrucción es un adorno bonito y el escalafón es una insignia sin contexto.

#### Cómo se juega, paso a paso, con el mismo caso

**Paso 1.** El jugador pulsa Acusar en el Caso 23. La pantalla se apaga.

**Paso 2. La reconstrucción, 22 segundos.** Se enciende la pista 1 y el pasillo del norte se ilumina bajo Cosme. Se enciende la 2 y el ala este se ilumina bajo Olalla. Aparecen las dos respuestas del interrogatorio con el retrato de quien las dio. Entonces —y esto es el pico— **Braulio y Remedios caminan a la vez** a sus pasillos, y una tarjeta lo nombra: *«La tenaza de orden.»* Se enciende la respuesta de Cosme, Remedios cruza al Fumadero y queda sola, iluminada, junto al cuerpo. Y dice una frase, una sola, escrita para este caso:

> —Doña Perpetua tenía mapas de sitios que ya no existen. Yo solo quería uno. El del pueblo de mi madre.

Debajo: **Volver a verlo** · **Paso a paso** (la misma cadena detenida, con el tablero en cada peldaño y el nombre de la técnica) · **Compartir**.

**Paso 3. El escalafón, una línea.**

> *Este caso exigía **la tenaza de orden** y **el cerco de pasillo**. Las dos las has hecho sin ayuda.*
> *Tenaza de orden: 2 de 3 casos. Te falta uno para acreditarla.*
> *Aprendiz de detective · 7 técnicas de 14 · faltan 2 para **detective**.*

**Paso 4. El cuaderno.** Catorce técnicas con nombre, dibujo y una frase de Sabueso explicando cuándo sirve cada una. Las acreditadas, en color; las que no, en gris con el número de casos que faltan. **El rango no baja nunca y no depende de jugar todos los días**: depende de lo que sabes hacer. Quien se va dos semanas de vacaciones vuelve siendo detective.

#### Por qué gusta, según el panel y las reseñas

- **Escalafón: 4,2, la mejor nota del panel, y a diferencia de la otra 4,2 (tirar del hilo, 0 de 5) esta sí se cuenta: 3 de 5.** Sofía, que es la más dura del panel (media 3,2) y a la que casi nada de la lista le sirve, lo llama «*mi favorita*» y dice la frase textual: «*he subido a inspector*». Diego ve doce ítems de rúbrica. La hija mayor de la familia Ruiz «*va por detective y me lo recuerda*». Luis: «*que me digan cómo se llama lo que acabo de hacer es la explicación que el libro no da*».
- **Es progresión sin la ansiedad de la racha.** El coste oscuro de las rachas está documentado en el análisis de Duolingo (18 quejas de pérdida de racha en la muestra: «*adiós a mi racha de 590 días*»). El escalafón da la sensación de avance sin ese coste, y convive con nuestra racha en vez de competir con ella.
- **Reconstrucción: 3,8, σ 0,75, nadie la rechaza.** Y responde a una demanda que **hoy la sirven terceros**: P10 documenta que la gente se va a TikTok a buscar «*Solución del juego Murdoku nivel 8*» y que «*las explicaciones del libro se quedaban cortas*». Marta lo dice tal cual: «*es el vídeo que yo buscaba, pero dentro del juego y de mi caso*». La familia: «*es el mejor momento del domingo*».
- Lo único que los usuarios de Sudoku.com elogian por su nombre, en el conjunto de reseñas analizado, además de la sencillez, son **las explicaciones de las pistas**. Es el punto donde el género tiene demanda insatisfecha y nadie está.

#### Por qué nadie más lo tiene

Porque hace falta un solver que sepa **por qué escalón pasó cada caso**, y eso es exactamente lo que M3 construye. Un libro con casos escritos a mano no puede etiquetar por técnica, ni animar la cadena, ni decir «este caso no se podía resolver sin la pinza de dos alas». Y un competidor que lo intente sin motor tendrá que inventarse la etiqueta, que es peor que no tenerla: el jugador lo nota a la tercera vez.

Es, textualmente, «lo único que solo nosotros podemos hacer bien». Y es acumulativo: cada caso publicado alimenta el cuaderno y la calibración; en el mes seis, un competidor que arranque no tiene forma de alcanzarlo por dinero.

#### Qué garantiza el motor, y con qué propiedad

**Con TR, y con una corrección honesta que hay que aceptar antes de escribir un solo texto de interfaz: «has usado el cerco de pasillo» no es observable.** El motor ve colocaciones en un tablero, no razonamientos en una cabeza. Un jugador puede llegar a la misma celda por tres caminos o por intuición.

Lo observable es **TR (técnica requerida)**: `t` es requerida por un caso si, al desactivar `t` en la escalera, el caso deja de ser resoluble. Se calcula con ~15 ejecuciones de M3 por caso, coste despreciable.

Por eso la frase de interfaz es **«este caso exigía»**, no «has usado» —y suena mejor, además de ser cierta. La acreditación es: *el caso exigía t* **y** *el jugador lo resolvió sin Sabueso*. Es una afirmación verificable y no obliga a fingir que leemos la mente.

La reconstrucción no necesita ninguna propiedad nueva: necesita que **M3 serialice el certificado**, con este contrato congelado antes de que frontend escriba una línea:

```json
{ "paso": 3, "tecnica": "tenaza_de_orden", "nivel": "N2",
  "pistas_usadas": ["c3", "q2"],
  "celdas_afectadas": [{"fila":3,"col":1,"efecto":"fijar","sospechoso":"braulio"}],
  "conclusion": {"tipo":"fija","sospechoso":"braulio","celda":{"fila":3,"col":1}},
  "estado_resultante": "<dominios comprimidos>" }
```

#### Riesgo de rechazo y cómo se mitiga

| Riesgo | Mitigación |
|---|---|
| **La taxonomía es artificial y el jugador no reconoce lo que hizo.** Es el riesgo real y es de diseño, no de motor. Marta: «*"cerco de pasillo" y "pinza de dos alas" suenan a jerga; si no reconozco lo que hice, es un logro vacío*» | La prueba de cinco personas va **antes** de implementar las catorce detecciones, no después. Si sus palabras no encajan, **se cambian los nombres, no la idea** |
| **Nombres que no viajan a LatAm** (Diego valida «pinza» y «cerco»; otros pueden fallar) | Cada nombre pasa por dos hablantes de LatAm en la misma prueba. Regla: si un nombre necesita explicación en Rosario, se cambia |
| **Inflación de rango: subir demasiado deprisa vacía el logro** | Una técnica se acredita con **3 casos distintos** que la exijan, resueltos sin Sabueso. Cinco rangos y catorce técnicas dan una curva de meses, no de días |
| **La animación estorba a quien ya sabe cómo va** (Sofía: «la primera vez bonito, la quinta saltar»; Luis prefiere el paso a paso quieto) | Se salta con un toque, **el ajuste se recuerda**, y «Paso a paso» está al lado con el mismo peso visual. Y el botón de compartir nunca queda detrás de la animación |
| **La frase del culpable se sale de lo cozy** (la familia lo señala sobre el ejemplo del guionista: «*no pensaba matarlo*» es más oscuro de lo que un padre lee en voz alta) | La frase pasa por el filtro de contenido seguro como cualquier otro texto, y hay una versión suavizada por defecto en la sección familiar |
| **No existe en el PDF** (Diego: «el PDF es lo que yo uso») | La «solución razonada» del imprimible es **la misma cadena del certificado en texto**, con los nombres de técnica incluidos. Sale gratis del mismo dato |

#### Qué prueba con personas hay que hacer antes de comprometerla

**Prueba 1 de la §6, y es la primera de todas porque bloquea la taxonomía y es la más barata.** Cinco personas (una de cada perfil, dos de LatAm), en papel, resuelven un caso y **describen su razonamiento en voz alta antes de ver ningún nombre**. Umbral fijado antes del dato: **al menos 8 de las 14 técnicas** reciben, de ≥3 de las 5 personas, una descripción que un tercero mapea sin ayuda al nombre propuesto. Por debajo de 8, se reescriben los nombres y se repite; por debajo de 5 después de dos iteraciones, la taxonomía se reduce a las que sí funcionan y el escalafón sale con 8-10 técnicas en vez de 14.

Y después, **prueba 3**: 10 personas juegan con reconstrucción y escalafón. Se mide **% que llega al final de la animación sin saltarla (≥60 % la primera semana)** y **≥6 de 10 recuerdan al día siguiente el nombre de la técnica que su caso exigía**. Si no lo recuerdan, la mecánica es decoración cara.

---

### 3.3 Firma C · El caso a cuatro manos, en papel antes que en pantalla

*(panel 13 · diseñador D13 · producto P11 · motor V13 con **AM**)*

Es firma **condicionada**, y quiero ser explícito sobre por qué: es la mecánica con **el mejor recuerdo posible** y la **peor certeza de demanda** del conjunto. La incluyo porque tiene una prueba que cuesta prácticamente cero y que se puede hacer esta semana.

#### Cómo se juega, paso a paso, con el mismo caso

Dos personas, dos hojas (o dos móviles). Mismo plano, mismo cuerpo en el Fumadero, mismas cuatro personas. **Las colocaciones son compartidas: si uno pone a Olalla en el Muelle, el otro lo ve.** Las pistas, no.

**Hoja A (el padre):**
1. Cosme no salió del pasillo del norte.
2. Braulio estaba más al sur que Remedios.
3. Cosme no estuvo en el Despacho.

**Hoja B (la hija de trece):**
4. Olalla estaba en el ala más al este.
5. Olalla estaba en el pasillo de más al sur.
6. Braulio estaba en el ala más al oeste.

Ninguno de los dos puede resolverlo solo, y los dos **ven en gris** que el otro tiene tres pistas que ellos no.

- **Ella empieza:** con 4 y 5 coloca a Olalla en el Muelle. Un paso. Con la 6 sabe el ala de Braulio pero no su pasillo. Se atasca.
- **Él, con lo que ya está en el tablero:** por la 1, Cosme está en el pasillo 1; con Olalla en el 4, quedan el 2 y el 3 para Braulio y Remedios, y la 2 los fija a los dos. Dos pasos. Se atasca: no sabe en qué ala está Braulio.
- **Ella:** «Braulio está en el ala uno.» Braulio a la Cocina. Un paso. Se atasca.
- **Él:** «Cosme no estuvo en el Despacho, o sea que no está en el ala tres.» Cosme a la Salita de té, Remedios al Fumadero. Fin.

Cuatro alternancias, nadie encadena más de dos pasos seguidos, y **la conversación en voz alta es el juego**. No hay chat en el producto: se habla por teléfono, por WhatsApp o en el mismo sofá.

**La sorpresa aquí no es narrativa, es social:** el momento en que la hija de trece le dice a su padre el dato que a él le faltaba. La familia Ruiz lo nombra exactamente así: «*es la primera vez que ella me enseña algo a mí*».

#### Por qué gusta, según el panel y las reseñas

- **3,6 de media con σ 1,20, y esa dispersión no es desacuerdo de gusto: es diferencia de forma de vida.** Marta (2) juega sola en el metro, ocho minutos; Sofía (3) prefiere lo asíncrono. Familia Ruiz (5) y Diego (5) lo puntúan con la frase más entusiasta de las 26 fichas: «*hay uno que solo se puede resolver entre dos*». Diego: «*si me imprimen la hoja A y la hoja B por separado, es la mejor actividad en parejas del año*».
- **La prensa española describe el consumo real del género como colectivo**: «*funciona especialmente bien en modo cooperativo, un caso para toda la familia donde cada uno aporta una pieza de razonamiento*» (Ser Padres); «*se está convirtiendo en opción para jugar en familia*» (Gaceta de Salamanca); en Casa del Libro, una abuela y su nieta compartiendo el mismo cuaderno.
- **Es la única forma de que lo digital *añada* algo al papel en vez de restarlo.** Todo lo demás que hacemos, el papel también lo hace.

#### Por qué nadie más lo tiene

Ninguno de los cuatro competidores lo tiene. Murdoku anuncia un modo cooperativo en descripciones indexadas que **ninguna fuente independiente confirma**. Endless Cases tiene salas privadas sobre el mismo caso, que es lo contrario: los dos ven lo mismo.

Y hay que registrar el conflicto abiertamente: **D-007 descartó el «cooperativo en la misma pantalla»** con un argumento correcto —si varias personas miran un móvil, eso ya funciona sin construir nada—. Esto **no es eso**. Es **información asimétrica repartida entre dos soportes**, que es un género entero de juego de mesa y una mecánica distinta. Lo descartado sigue descartado; esto es otra cosa. Si el fundador aprueba, la revisión parcial de ese descarte se registra en D-010.

#### Qué garantiza el motor, y con qué propiedad

**AM, pero no como estaba escrita.** El diseñador la formula sobre «el certificado» («ningún jugador encadena más de 2 pasos del certificado»), y el problema es que hay muchos certificados y los jugadores encontrarán el que encuentren. La versión verificable, que además es determinista y no depende del orden que elijan las personas, es un **cierre alternado**:

```
estado ← estado inicial compartido
repetir:
  cierre_A ← ejecutar la escalera con las pistas de A hasta agotarse
  cierre_B ← ídem con las de B
  exigir |cierre_A| ≤ 2 y |cierre_B| ≤ 2 en cada turno
  estado ← estado ∪ cierre_A ∪ cierre_B ; contar una alternancia
exigir alternancias ≥ 3 y estado final = solución
```

Más lo que los dos documentos ya pedían: A sola no da U, B sola tampoco, A∪B sí, y NR sobre la unión. La búsqueda del reparto **no explota**: con 6 pistas son 20 repartos, con 8 son 70; se prueban todos. El riesgo es que **ningún** reparto cumpla el cierre alternado, y eso solo se sabe midiendo.

Regalo del canal de deducciones cerrado (mandarse hechos de un formulario, no texto libre): cada mensaje es un predicado del DSL, así que el motor puede **validar si lo que A afirma era deducible con lo que A sabe**. No lo bloquea —sería un oráculo y violaría OR—, pero el informe final puede decir quién dedujo y quién adivinó. Eso es conversación de sobremesa gratis.

#### Riesgo de rechazo y cómo se mitiga

| Riesgo | Mitigación |
|---|---|
| **Uno resuelve el 80 % y el otro mira.** Es el fracaso clásico del cooperativo | Es literalmente para lo que existe AM. El reparto se verifica sobre el cierre alternado, no al azar: repartir 3 y 3 sin verificar produce casi siempre un caso donde uno lo hace todo |
| **La demanda no existe fuera de la familia y del aula** | **Por eso el papel va primero.** Si la hoja A / hoja B funciona con seis parejas, sabemos que la mecánica funciona antes de gastar un día de backend. Y si funciona solo en papel, ya tenemos producto: es el Pack Aula |
| **Coste de backend en tiempo real, reconexión, uno que se va a mitad** | No se construye hasta que el papel pase **y** los duelos demuestren que ≥15 % de los activos juega con alguien. Dos compuertas, no una |
| **Marta y Sofía se sienten excluidas de un día del calendario** | **Nunca es el caso del día.** Vive fuera del ritual, como el vistazo, y no toca la racha |
| **Tasa de aceptación de AM desconocida** | Se mide en la misma tanda de dos días que MV y MP |

#### Qué prueba con personas hay que hacer antes de comprometerla

**Prueba 4 de la §6, en papel, y es la que más información da por menos dinero de todo el plan.** Seis parejas: dos familias con menores, dos parejas adultas, dos amigos que no viven juntos (por teléfono), más una sesión de aula de 28 con Diego. Hoja A y hoja B impresas, sin pantalla.

Umbrales fijados antes del dato: **tasa de finalización ≥70 %**; **en ninguna pareja un jugador encadena más de dos deducciones seguidas** (se observa y se anota); **≥4 de 6 dicen sin que se les pregunte que lo repetirían**. Si pasa, se compromete el desarrollo digital y se publica ya la versión imprimible. Si no pasa pero el aula sí funciona, se queda como producto de Pack Aula y **no se construye la versión digital**, que es un resultado perfectamente bueno y ahorra semanas.

---

## 4. La semana con carácter

Una mecánica estructural por caso y **nunca dos**, como pide el diseñador —y como su propio calendario incumple el domingo, donde apila tres—. Las transversales (tirar del hilo, Sabueso, reconstrucción, escalafón, confesión, acusación etiquetada) van en **todos** los casos y no cuentan como estructurales.

| Día | Nombre en pantalla | Tamaño | Mecánica estructural (una) | Duración objetivo | Banda de dificultad medida | A quién sirve |
|---|---|---|---|---|---|---|
| **Lunes** | **El corto** | 4×4 | **Sobres por progreso** (V6): abre con 3 pistas | **5-7 min** | Suave | Marta y el que llega hoy. Es el día de entrada y el que va en las landings |
| **Martes** | **El clásico** | 5×5 | Ninguna. La forma canónica, seis pistas a la vista | **7-9 min** | Normal | Luis, que quiere leerlas todas antes de tocar nada |
| **Miércoles** | **El interrogatorio** | 4×4 | **Menú vivo** (V4/MV): 3 pistas + 3 preguntas | **8-12 min** | Normal-enrevesado | Todos menos el aula. Es el día firma |
| **Jueves** | **A puerta cerrada** | 5×5 | **Celdas bloqueadas** (V16): una habitación sellada o un pasillo cortado, anunciado en la cabecera | **8-11 min** | Enrevesado | Marta («el jueves te cierran una habitación» se entiende sin tutorial) |
| **Viernes** | **De disparate** | 4×4 | **Rastro del objeto** (V2): ¿por dónde pasó la tarta? | **6-9 min** | Suave-normal | La familia y Diego. Sin fallecidos, humor cozy, misma lógica |
| **Sábado** | **El difícil** | 5×5 | Ninguna. El reto es la profundidad, medida, no una regla nueva | **10-14 min** | Difícil / brutal | Luis y Sofía. Anunciado: «no apto para prisas» |
| **Domingo** | **El XL** | 6×6, dos plantas | **Casa de dos plantas** (V15): una sola escalera | **15-25 min** | Enrevesado, **nunca el más duro** | La familia y Luis. Grande, no castigo (M6 de D-007 y las reseñas piden justo eso) |

**Fuera del ritual diario, todos los días:** el vistazo de 3×3 (V14, 2-3 min, numeración propia, no toca la racha) y —cuando pase su prueba— el caso a cuatro manos.
**Especial mensual:** «Tú eres sospechoso» (panel 18), que sustituye el caso de un viernes o de un sábado.

**Cuatro reglas duras del calendario:**

1. **La regla del día se anuncia siempre en la portada del caso, antes de empezar, nunca en un tutorial.** Sofía salta tutoriales; Marta no lee más de dos líneas. Cambiar las reglas en silencio es la queja P15.
2. **Una estructural por caso.** Un caso con franjas + objeto + mentiroso no es difícil: es ilegible.
3. **La etiqueta de dificultad es independiente del día** y la pone el motor con el certificado. El sábado *suele* ser brutal, pero un jueves puede serlo. Sin M3+M5 no hay etiqueta: hay opinión.
4. **El domingo es el más grande y no el más duro.** Es una decisión ya cerrada (D-007, §6.12) y el panel la confirma por dos vías distintas.

Nótese qué **no** hay: ningún día con mentiroso, ninguna doble franja hasta que pase su prueba, y ningún día que exija haber jugado el anterior.

---

## 5. Cómo encaja con el catálogo actual

Referencia: `docs/catalogo-productos.md` v1.1, §4 (F1-F19).

### 5.1 Qué cambia de lo que ya existe

| Ficha | Qué cambia | Por qué |
|---|---|---|
| **F1** Motor: generador + solver | Su criterio ya dice «0 % requiere adivinar (**resoluble por la escalera de técnicas humanas**)». Eso **presupone M3** y hasta ahora M3 no estaba presupuestada como entregable con contrato propio. Se explicita: F1 no está verde sin M3 | Hoy podemos prometer «solución única»; **«sin adivinar» y «dificultad medida» no se pueden afirmar sin M3** |
| **F2** Métrica de dificultad | Se amplía: además de la etiqueta, el motor expone **TR** (qué técnicas exige el caso) y la etiqueta pasa a ser **campo recalculable**, no valor congelado, para poder reetiquetar el archivo entero cuando mejore la calibración | Lo exigen el escalafón, la semana con carácter y el hecho de que la primera calibración estará mal por definición |
| **F3** Validación de pistas por IA | Se añade el **registro de decorados** (los elementos de ambientación que no son pistas) y los **identificadores estables de entidad**. Y se corrige una frase que estamos usando mal en varios documentos: el motor valida **la forma formal** y **contrasta** la retraducción; la retraducción por IA es una heurística fuerte con mitigaciones, **no una prueba** | Sin el registro de decorados, el «y sin embargo» puede reinterpretar un elemento que sí era pista. Y decir «el motor valida el texto» es una promesa que no podemos sostener |
| **F4** Banco de 60 casos | El banco deja de ser una curva 4×4→6×6 y pasa a ser **la semana completa**: 60 casos repartidos entre los siete caracteres de día, con al menos 8 de miércoles (interrogatorio) y 8 de domingo (dos plantas) | Sin eso no se puede probar el calendario ni calibrar las bandas |
| **F6** Cuadrícula táctil | El «tocar una pista resalta las celdas que afecta» que D-007 ya añadió pasa de ser una petición de interfaz a un **contrato del DSL**: cada predicado implementa `cells(pista, estado)` | **0,5 días si se escribe junto a cada predicado; 3 días si se añade a veinte predicados ya escritos.** Es el ejemplo perfecto de por qué el contrato va antes que el código |
| **F8** Comprobar y acusar | Tres cambios. (a) La «solución razonada paso a paso» pasa a ser **la reconstrucción animada** con «Paso a paso» al lado. (b) La comprobación fría («tienes 2 mal») se sustituye por **Sabueso de dos niveles**, un uso por caso. (c) Se añade la etiqueta **«caso probado» / «ganado por poco»**, que sale del certificado | La comprobación actual es una red de seguridad que no enseña nada; Sabueso enseña. Y la etiqueta gusta a más gente que el botón de mojarse |
| **F9** Tutorial de 60 s | No crece. **Las reglas de día no se enseñan en el tutorial: se anuncian en la portada del caso.** Se añade solo la pantalla de convención espacial que ya estaba | Sofía salta tutoriales. Un tutorial por mecánica es cinco tutoriales y nadie los ve |
| **F13** Archivo de 7 días | Se añade el **caso invertido** como formato exclusivo del archivo en fase 2, y el filtro «los que fallé» gana un compañero: «los que exigían una técnica que aún no tengo» | Convierte el archivo en entrenamiento y refuerza el argumento de Premium sin quitar nada gratis |
| **F14** 8 landings SEO | El puzzle incrustado es el **lunes** (4×4 con sobres por progreso) y no un caso cualquiera | La pared de ocho párrafos en la primera pantalla es lo que hace que se cierre la pestaña, y la landing es donde más caro sale |
| **F15** Analítica | Eventos nuevos: `pregunta_hecha` (con plantilla y sospechoso), `reconstruccion_completada` / `_saltada`, `tecnica_acreditada`, `rango_subido`, `sabueso_usado` (con nivel), `sobre_abierto`, `movil_acertado` | Sin estos eventos no se pueden medir los umbrales de la §6 ni recalibrar la dificultad |
| **F18** Solución única | `/una-sola-solucion` gana un apartado sobre el interrogatorio: **por qué no puedes preguntar mal**, explicado en cristiano | Es nuestra promesa más fuerte y la más difícil de creer. Marta dice que se lo creerá «la segunda vez que lo compruebe» |
| **D-007 · S1** | La pista contextual del solver estaba **condicionada** a que el abandono antes de acusar superase el 35 % en el mes 2. Se **adelanta al lanzamiento** como «Sabueso olfatea» | No es una pista: es el personaje que sostiene la voz de marca, el correo diario y la mascota aprobada en D-005. Se registra que la condición se rompe a propósito |

### 5.2 Qué se añade

| Nueva ficha | Qué es | Criterio de «hecho» (Given/When/Then abreviado) | Responsable |
|---|---|---|---|
| **F20 · Escalera del solver con certificado (M3)** | Segundo solver que solo aplica N1-N4, emite certificado paso a paso y rechaza lo que exija N5 | *Dado* un caso generado, *cuando* se pide su certificado, *entonces* devuelve el JSON de §3.2 con un peldaño por paso, cada uno etiquetado N1-N4, y el frontend pinta la reconstrucción con datos reales sin transformarlos | `ingeniero-motor-puzzles` |
| **F21 · La reconstrucción** | Animación de 20-25 s de la cadena + «Paso a paso» + frase del culpable | ≥60 % de los jugadores de la primera semana llega al final sin saltarla; se salta con un toque y el ajuste se recuerda; el botón de compartir nunca queda detrás | frontend + `guionista-misterio` |
| **F22 · El escalafón y el cuaderno** | 12-14 técnicas con nombre, acreditación por TR sin Sabueso, cinco rangos que no bajan | La taxonomía ha pasado la prueba de 5 personas (§6, prueba 1); ≥6 de 10 recuerdan al día siguiente el nombre de la técnica de su caso | `disenador-puzzles` + `ingeniero-motor-puzzles` + frontend |
| **F23 · El interrogatorio (miércoles)** | 3 pistas base + menú vivo de 3 preguntas | La tasa de aceptación de MV sobre 10.000 candidatos permite generar ≥1 caso válido al día con margen ×10; en la prueba con 12 personas nadie dice «pregunté mal» | `ingeniero-motor-puzzles` + frontend |
| **F24 · La semana con carácter** | Los siete días de §4, con celdas bloqueadas, dos plantas, rastro del objeto, sobres y vistazo | Cada día tiene regla anunciada en portada, tamaño, banda de dificultad medida y una frase que lo describe; el motor etiqueta un caso como «jueves» sin criterio humano | `disenador-puzzles` + `ingeniero-motor-puzzles` |
| **F25 · Sabueso de dos niveles** | Nivel 1 señala la pista sin exprimir; nivel 2, la habitación donde ya se puede colocar; un uso por caso, se cansa | Nunca da señal de error: la escalera se ejecuta **desde el estado inicial** y avanza hasta el último peldaño compatible con el tablero del jugador; ≥60 % de casos se resuelven sin él | `disenador-ux-ui` + frontend |

**Sigue fuera del lanzamiento, sin cambios:** Premium y pasarela, duelos, packs de pago, app nativa, anuncios, B2B, editor, ligas. **Y sale de fase 2 a fase 3:** el hilo Escena↔Expediente.

### 5.3 Por qué M3 es la primera pieza que hay que construir

**M3, la escalera de técnicas con certificado paso a paso: 4-5 días que desbloquean, total o parcialmente, doce de las veinticuatro familias.** V17 (reconstrucción), V18 (escalafón), V11 (Sabueso), V6 (sobres/OD), V22 (semana con dificultad medida), V21 (pásale tu caso), V8 (probado vs por poco), V13 (AM), V1, V5, V12 y V4.

Tres razones, en orden de importancia:

1. **Sin M3 no podemos decir la mitad de lo que decimos.** La regla 3 del proyecto promete tres cosas: solución única, resoluble sin adivinar y dificultad medida. Con M1+M0+M2 (7 días) tenemos la primera. **Las otras dos no existen sin M3.** Hoy hay documentos del proyecto que las afirman; hasta que M3 esté verde, son intenciones.
2. **Las dos mecánicas firma son M3 con dos caras.** El escalafón *es* TR sobre la escalera. El menú vivo exige certificado ≤N4 en cada paso de la secuencia de preguntas. La reconstrucción es la serialización del certificado. Sabueso es el siguiente peldaño del certificado. **No hay forma de construir la diferenciación por otro camino.**
3. **Es el activo que no se copia con dinero.** Cualquiera puede escribir casos con IA esta semana; lo que cuesta replicar es el motor que valida y, sobre todo, el que *explica*. Y es acumulativo: cada caso publicado alimenta la calibración.

**Y una advertencia de orden que es la más barata de atender y la más cara de ignorar.** M4 (`cells(pista, estado)`) y M12 (entrañamiento) cuestan **medio día cada una si se escriben junto a cada predicado del DSL, y hasta 3 días si se retrofitan a veinte predicados ya escritos**. Entre las dos desbloquean nueve familias. Por eso la secuencia no admite atajos:

**Bloque 0 · Plataforma (7 días).** M1 (DSL v1 **con `cells()` y negación desde el primer predicado**) → M0 (solver con conteo con parada en 2) → M2 (generador con semilla, NR y CLI). Al final se publica el juego base con U+NR garantizados.
**Bloque 1 · La llave (6 días).** M3 + M4 + M12. Al final se puede afirmar «sin adivinar» y «dificultad medida», y V17, V9 y V11 quedan a un día.
**Bloque 2 · Lo visible (6 días, con M5).** Reconstrucción, tirar del hilo, Sabueso, etiqueta probado/por poco, pistas visuales, el vistazo, semana con carácter.
**Bloque 3 · Publicable (4,5 días).** M6 + capa narrativa validada. Sin esto no se publica texto de IA con las garantías que promete la regla 3.
**Bloque 4 · Estructura (5 días).** M7, M9, sobres, celdas bloqueadas, dos plantas. Y el escalafón (3 días) sobre M3.
**Bloque 5 · Medir antes de construir (2 días, sin construir nada).** Tasas de aceptación de MV, MP y cierre alternado sobre 10.000 candidatos.
**Bloque 6 · Según el dato.** Interrogatorio (si MV pasa), Expediente, el resto.

**Antes de teclear una línea de motor hay que cerrar seis decisiones de `disenador-puzzles`** (§7 del dictamen), más la que he encontrado escribiendo el ejemplo de la §3.1: **`ve(A,B)` como «comparten pasillo» es idénticamente falso bajo el cuadrado latino, y la adyacencia ortogonal entre sospechosos también**. Hay que revisar todos los predicados **relacionales entre personas** buscando degeneración antes de meterlos en el DSL. Es media hora de revisión y evita un menú de interrogatorio con una plantilla que nunca informa.

---

## 6. Plan de validación con jugadores reales

Con miles de usuarios, y menos aún con ninguno, **no valen los tests A/B clásicos**. El método es: cambios grandes con efecto visible, comparación de cohortes, y **el umbral de decisión fijado por escrito antes de mirar el dato**. Todo lo de abajo cumple esa regla.

**Compuerta 0 · Motor, sin personas (2 días, en paralelo con todo).** Tasas de aceptación sobre 10.000 candidatos 4×4 de **MV** (menú vivo, con menú de 4 plantillas y de 2), **MP** (mentiroso) y **cierre alternado** (cuatro manos). Umbral: se necesita poder generar el caso del día con **margen ×10** sobre la demanda (un miércoles a la semana ⇒ ≥10 casos válidos por semana de generación nocturna). Por debajo, se aplica el repliegue de la §3.1. **Ninguna de las tres se construye antes de tener su número.** Este es el bloque que evita gastar quince días en una mecánica que el generador no sostiene.

| # | Qué se prueba | Formato | Cuántas personas | Qué se mide | Umbral de decisión (fijado antes) |
|---|---|---|---|---|---|
| **1** | **Nombres de las técnicas** (escalafón) | Papel, resolver en voz alta y describir el razonamiento **antes** de ver ningún nombre | **5** (una por perfil; 2 de LatAm) | Cuántas de las 14 técnicas reciben, de ≥3 personas, una descripción que un tercero mapea sin ayuda al nombre propuesto | **≥8 de 14** → se implementa. 5-7 → se reescriben los nombres y se repite. **<5 tras dos iteraciones** → el escalafón sale con 8-10 técnicas, no 14 |
| **2** | **Interrogatorio de menú vivo** | HTML jugable, sin tutorial, un caso de miércoles y uno de martes de control | **12** (4 casual, 3 fan, 2 competitivo, 2 familia, 1 docente) | (a) ¿Alguien dice «pregunté mal»? (b) Tasa de resolución del miércoles frente al martes. (c) Verbo espontáneo al describir la partida | (a) **Una sola persona que lo diga = la mecánica no existe** tal cual y se revisa el filtro del menú. (b) **caída ≤10 puntos**. (c) **≥8 de 12** usan un verbo de investigación |
| **3** | **Reconstrucción + escalafón juntos** | HTML, dos sesiones separadas 24 h | **10** | (a) % que llega al final de la animación sin saltarla. (b) % que al día siguiente recuerda el nombre de la técnica que su caso exigía. (c) ¿Alguien la salta y luego busca «Paso a paso»? | (a) **≥60 %** la primera vez. (b) **≥6 de 10**; por debajo, la mecánica es decoración cara y se recorta a la reconstrucción sola |
| **4** | **Cuatro manos, en papel** (hoja A / hoja B) | Papel. Dos familias, dos parejas adultas, dos amigos por teléfono, más un aula de 28 | **6 parejas + 1 aula** | (a) Tasa de finalización. (b) ¿Algún jugador encadena más de dos deducciones seguidas? (observado). (c) ¿Dicen sin que se les pregunte que lo repetirían? | (a) **≥70 %**. (b) **cero parejas** con más de dos seguidas (si falla, es el reparto, no la mecánica). (c) **≥4 de 6** → se compromete la versión digital. Si (a) y (b) pasan pero (c) no, se publica solo la versión imprimible y **no se construye backend** |
| **5** | **Pistas visuales + viernes de disparate** | HTML + una hoja impresa en blanco y negro | **8** (incluye 1 lector puro, 1 docente, 2 de LatAm) | (a) ¿Algún icono admite dos lecturas? (b) ¿El humor viaja? (c) ¿Algún chiste está dentro de una pista? | (a) **Cero iconos** con doble lectura, o se retira ese icono de la leyenda v1. (b) **≥6 de 8** LatAm y España lo entienden igual. (c) **Cero**, sin excepción: un chiste dentro de una pista es una pista con dos lecturas |
| **6** | **Doble franja** (solo si se plantea para fase 2) | Papel primero, HTML después | **8** | ¿Entienden la regla («cada uno se queda o se mueve a una habitación pegada») sin tutorial? ¿En cuánto tiempo? | **≥6 de 8 en menos de 60 segundos** → pasa a prototipo digital. Por debajo, **se descarta definitivamente**, porque el problema no era la interfaz |

**Orden y por qué ese orden.** La 1 va primera porque es la más barata (5 personas, papel, una tarde) y porque **bloquea la taxonomía**, que a su vez bloquea el escalafón, la semana con carácter y la etiqueta de dificultad. La 2 va segunda porque el interrogatorio es la firma más cara y la que tiene el repliegue más largo: cuanto antes sepamos, más barato es replegarse. La 4 va tercera aunque sea de fase 2, porque **cuesta cero y su resultado cambia la hoja de ruta de dos meses**. La 3 y la 5 se pueden hacer en la misma tanda que la 2. La 6, solo si el fundador quiere reabrir la doble franja.

**Cómo se leen estos números.** Con 5-12 personas no hay significación estadística y no la vamos a fingir. Estos umbrales no son contrastes de hipótesis: son **compuertas de diseño**. Un fallo grande (nadie reconoce los nombres, alguien dice «pregunté mal») es señal fiable con muestras pequeñas; una diferencia de dos puntos porcentuales no lo es, y por eso ningún umbral está formulado así. La medición fina —retención, abandono por paso, correlación etiqueta-tiempo— llega con usuarios reales y la hace `analista-datos` por cohortes, no por A/B.

---

## 7. Decisiones para el fundador

Ocho. Cada una con mi recomendación en una línea. Si se aprueban, las registro como **D-010**.

| # | Decisión | Mi recomendación |
|---|---|---|
| **1** | **¿Aceptamos la tesis de diferenciación de §1.1 —«las pistas las preguntas tú» + «el juego te enseña la técnica y te acredita»— como el eje del producto, en vez de repartir esfuerzo entre veinte mecánicas?** | **Sí.** Dos frases que un jugador puede repetir valen más que veinte mejoras que nadie menciona, y las dos cuelgan de la misma pieza (M3), así que no compiten entre sí. |
| **2** | **¿Se construye M3 (escalera + certificado) antes que cualquier feature de jugabilidad, aunque retrase ~2 semanas lo que se ve en pantalla?** | **Sí, sin discusión.** Desbloquea 12 de 24 familias, es la única forma de sostener «sin adivinar» y «dificultad medida», y las tres firmas son M3 con distinta cara. |
| **3** | **¿Fijamos el lanzamiento en la semana 12-14 en vez de la 8, con el interrogatorio y el escalafón dentro?** | **Sí.** D-009 quita el recorte por capacidad pero mantiene la ventana de 6-12 meses: la semana 14 sigue dentro con margen, y salir en la 8 sin las firmas es salir siendo otro Murdoku en español. Decisión de fecha consciente, no consecuencia del alcance. |
| **4** | **¿Financiamos ya el prototipo en papel de cuatro manos (hoja A / hoja B, coste ≈0) y comprometemos el desarrollo digital solo si pasa las tres compuertas de la prueba 4?** | **Sí.** Es la mecánica con el mejor recuerdo y la peor certeza de demanda: es exactamente el caso en el que un prototipo de papel decide dos meses de backend. Y esto revisa parcialmente el descarte de D-007, que hay que registrar. |
| **5** | **¿Descartamos el testigo que miente del ritual diario y los testigos con personalidad dentro de las pistas numeradas?** | **Sí, los dos.** El mentiroso tiene cuatro negativos independientes (peor nota del panel 2,6, es el muro más citado del género, coste narrativo alto y continuo, tasa MP desconocida). Las pistas con voz son la única propuesta que va **en contra** de lo que las reseñas piden. La narrativa se queda, pero fuera de las pistas numeradas. |
| **6** | **Sabueso: ¿qué variante, y adelantamos S1 rompiendo la condición del 35 % de abandono que fijó D-007?** | **La variante de producto (dos niveles sobre el certificado) con el gesto «¿dónde quieres que huela?» de diseño como envoltorio; y sí, se adelanta.** No es una pista: es el personaje aprobado en D-005 convertido en mecánica, y sostiene el correo diario y la voz de marca. Se registra que la condición se rompe a propósito. |
| **7** | **El aula (el perfil Diego): ¿es un mercado con diseño propio o un subproducto del PDF?** | **Subproducto en los primeros 12 meses, con una regla nueva:** toda mecánica que entre al lanzamiento se marca «imprimible» o «solo pantalla», y al menos cuatro de las siete del calendario tienen que ser imprimibles. Trece de las 26 mecánicas hoy no se imprimen; sin esa regla, el Pack Aula se queda sin material. |
| **8** | **Caso a la carta (3,8 de media y «si es de pago, pago»): ¿se retrasa a fase 2 pese a ser lo que más pide el panel?** | **Sí, se retrasa.** El riesgo es asimétrico: un caso generado bajo demanda no puede llevar firma humana (M5 de D-007) y **una sola pista mala en un caso a la carta etiqueta «hecho por IA» a todo el producto** (P18). Se abre cuando el motor lleve dos meses publicando sin incidencias y con depósito precalentado, nunca generación en vivo. |

---

*Cambios a este documento: los registra `director-producto` con fecha y motivo en `docs/decisiones.md`.*
