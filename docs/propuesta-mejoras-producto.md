# Propuesta de mejoras de producto a partir del análisis de competidores

Autor: `director-producto`. Fecha: 6 de septiembre de 2026. **Versión 1.1** (revisión del 6 de septiembre de 2026: doce correcciones de un revisor externo aplicadas; ver §9 "Notas de revisión").
Fuentes: análisis en profundidad de 12 herramientas, mapa de 110 herramientas, y verificación adversarial de 22 propuestas por tres jueces (viabilidad, diferenciación, valor-evidencia).
Contraste: `docs/catalogo-productos.md` v1.1, `docs/decisiones.md` (D-007), `docs/oportunidades-resenas.md`, `docs/arbol-web.md`, `docs/funcionamiento-productos.md`, `docs/investigacion/resenas-reddit.md`, `docs/legal/anterioridades-sospechario.md`.

> **Aviso de trazabilidad (bloqueante).** Las tres fuentes primarias de este documento — el mapa de 110 herramientas, los 12 análisis en profundidad y los veredictos de los tres jueces — **no están todavía en el repositorio**, y `CLAUDE.md` exige que los entregables se guarden en él. Mientras no estén, ninguna frase del tipo "el juez escribió textualmente…" es auditable por el fundador y debe leerse como **[aportado]**, no como evidencia. Entregable pendiente y bloqueante para aprobar la sección 5: `docs/investigacion/mapa-110-herramientas.md`, `docs/investigacion/analisis-12-herramientas.md` y `docs/investigacion/verificacion-adversarial.md`, con commit. Responsable: `director-producto`. Fecha límite: antes de que el usuario decida sobre §8. Hasta entonces este documento es una propuesta con fuentes declaradas, no verificadas.

**Alerta de marca (D-006): comprobada, ningún disparador se ha cumplido.** No hay usuarios (el producto no ha lanzado), no hay prensa sobre nosotros y no hay conversación B2B ni editorial. En las fichas del mapa no aparece ningún tercero con un nombre parecido a Sospechario, Pistario, Culpabilia ni Ocultia (los productos del género se llaman Crimoku, Caseoku, Cluedoku, Whodoku, Myrdle, Enigmic, GridNoir, EveryClue). **Matiz sobre "Sabueso": sí existen terceros con ese nombre** —Sabuesos (RTVE, 2018, clase 41) y El Sabueso (Grupo Animal, México)—, recogidos en `docs/legal/anterioridades-sospechario.md` §0 y §3.4, que califica el uso **emancipado** de "Sabueso" (como marca, app, dominio o título) de **riesgo alto** y solo autoriza el uso subordinado como personaje. Eso no activa el disparador de D-006 (nadie usa un nombre parecido *al nuestro*: somos nosotros quienes rozamos el suyo), pero la evaluación de "Sabueso" la manda el documento legal, no este. No procede registrar todavía. Siguiente comprobación: en dos semanas, o el mismo día en que se firme el piloto B2B o salga la primera pieza de prensa.

**Aviso sobre la evidencia.** Marco cada dato como **[verificado]** (leído en fuente primaria o en Semrush en esta ronda), **[aportado]** (dato traído de una fase anterior, de un dossier o de una cita indirecta, y no reverificado) o **[inferido]** (deducción). Regla que esta revisión normaliza: **una cita indirecta o traída de un dossier nunca es [verificado]**, aunque el original lo fuera. WebFetch estuvo bloqueado para Google Play, App Store, Reddit, Amazon, prensa y la mayoría de webs de juegos: buena parte de la información sobre apps viene de extractos de buscador, datasets en GitHub y Semrush, no de las páginas originales. En la revisión de la v1.1 no se pudo reverificar nada: la cuota de WebSearch de la sesión estaba agotada (200/200) y Semrush no tenía unidades de API.

---

## 0. Qué decides hoy (una página)

Si solo lees una página, lee esta. Cada fila es una decisión que necesita un sí o un no del fundador; el detalle está en la sección indicada.

| # | Qué se decide | Recomendación | Coste si dices sí | Dónde |
|---|---|---|---|---|
| **0** | **Capacidad y fecha de lanzamiento.** El MVP no cabe: 20-24 persona-semana de trabajo frente a 8-16 de capacidad. Hay tres salidas: tercera persona, lanzar en la semana 11-12, o recortar a nivel F | Decidir **esto primero**; todo lo demás depende | — | §6 pregunta 0, §7.4.1 |
| 1 | Publicar o no el nombre del nivel de dificultad el día 1 | No hasta que el motor lo mida bien | 0 | §6 p. 1, PR1 |
| 2 | Caso defectuoso: anular o sustituir | Anular | 0,25-0,5 p-s | §6 p. 2, PR2 |
| 3 | Percentil gratuito en el resultado | Sí, pero **nunca por defecto** y siempre con progreso propio | 0,1 p-s | §6 p. 3 |
| 4 | Qué muestra la página pública del día 8 (explicación de la solución) | Explicación **sin la acusación final** | 0 | §6 p. 4, PR6 |
| 5 | El muro de Premium enseña los títulos que faltan | Sí, solo en pantalla | 0,5 p-s (fase 2) | §6 p. 5, PR6 |
| 6 | Qué se corta del MVP | Ver orden de corte de §8 | — | §6 p. 6 |
| 7 | Vender un cuaderno PDF a precio libre para medir disposición a pagar | Sí, **pero es un cambio a una decisión cerrada** y necesita luz verde legal | 0,5 p-s + trabajo legal | §6 p. 7, §7.3 |
| 8 | Validación anti-repetición en el motor | Sí, como test | 0,25 p-s | §6 p. 8 |

**Lo que este documento NO decide:** nada del catálogo cambia hasta que apruebes la sección 8. Si apruebas, `director-producto` registra la decisión y publica `docs/catalogo-productos.md` v1.2.

---

## 0.1 Glosario (para leer el resto sin ayuda)

| Término | Qué significa aquí |
|---|---|
| **F1, F2… F19** | Las características del MVP con criterio de "hecho" verificable, numeradas en `docs/catalogo-productos.md` §4. F2 es la métrica de dificultad del motor; F11, la racha; F18, reportar y reparar. |
| **M1, M2… M16** | Los 16 cambios al MVP que salieron de las reseñas de competidores y se aprobaron en D-007. |
| **S1, S2, S3** | Los tres cambios que D-007 mandó a fase 2. |
| **P1, P2… P25** | Los 25 patrones de queja o petición detectados en reseñas (`docs/oportunidades-resenas.md`). |
| **PR1… PR9** | Las nueve propuestas de **este** documento. (En la v1.0 se llamaban R1-R9 y chocaban con los patrones R1-R13 de `docs/investigacion/resenas-reddit.md`.) |
| **persona-semana (p-s)** | Una persona trabajando una semana. Es la unidad de coste: 0,5 p-s = dos días y medio de una persona. |
| **SSR / CSR / SSG / ISR** | Dónde se construye una página web: **SSR** en el servidor cuando alguien la pide (rápida de ver, buena para enlaces compartidos); **CSR** en el navegador del que la abre (más lenta la primera vez); **SSG** una vez, al publicar; **ISR**, SSG que se regenera cada cierto tiempo. |
| **noindex** | Etiqueta que le dice a Google "no metas esta página en tus resultados". `X-Robots-Tag: noindex` es lo mismo para un archivo (por ejemplo, un PDF), que no puede llevar etiqueta dentro. |
| **CNAME** | Apuntar un subdominio propio (`juegos.medio.es`) al servidor de otro. Es como el medio aloja hoy sus juegos sin construirlos. |
| **k-factor** | Cuántos usuarios nuevos trae de media cada usuario existente. Por encima de 1 el producto crece solo; 0,15 ya es un canal útil. |
| **RICE** | Método de priorización: alcance × impacto × confianza ÷ esfuerzo. |
| **correlación 0,6** | Umbral de acierto de la métrica de dificultad: que lo que el motor llama "difícil" se corresponda de verdad con lo que a la gente le cuesta. Por debajo, la etiqueta miente. |
| **MoR (merchant of record)** | Empresa que vende en tu nombre (Paddle, Lemon Squeezy, Gumroad) y asume el IVA de cada país. Cobra más comisión a cambio de quitarte el problema fiscal. |
| **OSS (ventanilla única)** | El régimen del IVA europeo al que hay que darse de alta si vendes tú directamente a consumidores de varios países de la UE. |
| **DST** | Cambio de hora de verano/invierno. Rompe rachas si el juego cuenta días por fecha en vez de por número de caso. |
| **EAA** | *European Accessibility Act*: la ley europea de accesibilidad que nos obliga, entre otras cosas, a que el tablero se pueda usar solo con el teclado. |
| **D1 / D7 / D30** | Porcentaje de gente que vuelve 1, 7 o 30 días después de su primera partida. |

---

## 1. Resumen ejecutivo

**Lo primero, porque es lo que decide todo lo demás: el MVP no cabe.** Sumando lo que ya está comprometido (F1-F19, ≈10-14 persona-semana **[estimado]**), los incrementos de D-007 (7,25) y lo que propone este documento (≈2,25, más 0,5 de accesibilidad de teclado que es obligación legal), salen **20-24 persona-semana frente a 8-16 de capacidad real**: un déficit del 30-65 % incluso con dos desarrolladores. La aritmética está en §7.4.1 y es del estratega, no mía, y la acepto entera. Por eso la primera decisión de este documento no es qué propuesta entra, sino **capacidad y fecha** (pregunta 0): tercera persona, lanzamiento en la semana 11-12, o recorte a nivel F. Discutir si cae PR5 o el sello "Impecable" (0,25 p-s cada uno) es ruido frente a ese déficit.

Hemos analizado en profundidad 12 productos (los dos originales del género, el mejor juego diario de deducción del mundo, dos plataformas de juegos diarios a escala, dos apps de lógica de masas, el mayor juego diario en español, el portal docente que ya publica "murdokus", el proveedor B2B que ya está dentro de El País y AS, y el referente de hábito) y hemos mapeado el resto (ver §2.2 y la nota de recuento).
Veintidós ideas pasaron por verificación adversarial: **20 fueron refutadas o quedaron sin veredicto y 2 sobrevivieron con condiciones**, ambas con puntuación 2 y una refutación cada una. La conclusión honesta es que el catálogo v1.1 ya cubre casi todo lo importante: lo que falta son cinco piezas pequeñas, no una fase nueva.
**Orden único recomendado** (§8; la v1.0 dejaba dos órdenes sin resolver, el del director y el del estratega, y esta versión los cierra en uno solo): **(1) racha anclada al número de caso y día concedido cuando la caída es nuestra** (PR3, y su ventana se cierra el día que se escriba F11); **(2) caso defectuoso: se anula, nunca se sustituye** (PR2); **(3) `/r/[id]` servido en servidor** (PR4, solo el SSR); **(4) ficha técnica del caso** (PR1, sin la curva declarada hasta que el motor la mida); **(5) el PDF como página indexable** (PR5, con la puerta legal y de captación que fija su propia ficha); y en fase 2, **el muro de Premium que dice qué casos concretos te faltan** (PR6).
Descarto explícitamente el álbum mensual de sellos y el rediseño del B2B, y dejo **nueve preguntas** (la 0 y ocho más) cerradas en una sola página al final. Advertencia: **este documento no puede aprobarse a la vez que la §5 de la v1.0**, porque la sección del estratega añadió después siete decisiones más que no estaban en esa lista; todas se han consolidado en **§8**, que es la única lista que hay que aprobar.

---

## 2. Panorama

### 2.1 Las 12 herramientas analizadas en profundidad

| Herramienta | Qué hace bien | Qué hace mal | Qué tomamos |
|---|---|---|---|
| **Murdoku** (murdoku.com, M. Garand) | Archivo de casos como galería de sobres sellados con contador "X/Y completados", filtros por dificultad y **una URL indexable por caso** (más de 30 páginas de caso rankean en Google España). Imprimibles gratis en color, tinta baja y solución. **[verificado, Semrush]** ~46.000 visitas orgánicas/mes desde España y ~156.000 globales, con solo 510 palabras clave; despegue de 149 visitas en mayo de 2026 a 44.000 en agosto. **[inferido, no verificado — comprobación 3 pendiente]** Indicios de que **no tiene español**: Semrush no lista ninguna URL `?lang=es` ni ningún PDF `-es`, mientras "murdoku en español" mueve 2.400/mes en España, 1.000 en México y 260 en Argentina **[verificado, Semrush]**. Mismos indicios, misma calidad de evidencia, para "sin caso diario (cadencia semanal), sin racha, sin ritual y sin tarjeta de compartir". **Que Semrush no liste una URL con parámetro de idioma no prueba que no haya selector de idioma en el cliente**, ni que no haya racha dentro de la sesión. | La ficha del archivo con dificultad, tamaño y número de sospechosos; la URL indexable por caso (ya prevista en M8); los imprimibles con variante de tinta baja. **El hueco del español es la hipótesis que sostiene el plan, no un hecho comprobado** (ver aviso de abajo). |
| **Murdle** (murdle.com, G. T. Karber) | El ritual mejor construido del género: caso diario, **mini diario como tutorial jugable** (11 % de su tráfico orgánico en EE. UU.), curva semanal declarada en público ("el más difícil es el sábado, el más grande el domingo"), arco narrativo semanal, página de erratas escrita en la voz del juego. | Racha solo en `localStorage`, sin cuenta ni gracia: la comunidad publica instrucciones para repararla a mano. Sin archivo ("murdle archive" 210/mes, "murdle unlimited" 170/mes en EE. UU.). Pista aleatoria "a menudo inútil o redundante" por diseño propio. | Declarar la curva semanal (M6 ya la fija, faltaba decirla). La página de erratas en voz de marca (F18). Y la confirmación de que reparar la racha solo es un diferencial real y barato. |
| **Clues by Sam** | La garantía "no se puede adivinar" como **regla de juego visible**, no como propiedad interna del motor; etiqueta de dificultad por puzzle en el resultado compartido; "compartir escenario" para pedir ayuda sin spoiler. Más de 50.000 jugadores diarios a principios de 2026 con **menos del 5 % de tráfico de búsqueda**: es hábito y boca a boca. | Bloquear la jugada no deducible genera frustración ("¿dónde está mi error de lógica?"). Repetitivo a medio plazo. Sin español. | Que la promesa se enseñe, no se cuente (propuesta PR1). La etiqueta de dificultad viajando en el compartir. El pack "paga lo que quieras" como termómetro de disposición a pagar (queda como pregunta, no como propuesta). |
| **NYT Games** | Escala de referencia: 11.200 millones de partidas en 2025 y más de un millón de suscriptores solo de juegos. Feedback amable (sacudida y gris, nunca rojo), "One away…", iconografía de archivo sin spoiler, cuenta atrás en el resultado. | Racha estricta sin congelación: una sola palabra rompió **5,6 millones de rachas** y la única salida es soporte manual. Muro de pago que avanza (el Mini pasó a de pago en agosto de 2025) y genera indignación recurrente. | La iconografía de estado del archivo (candado y caducidad, propuesta PR6) y la regla de que el archivo no toca la racha. La política de racha como argumento público. |
| **LinkedIn Games** | Congelaciones **ganadas** (1 cada 5 días, máximo 2, automáticas), sello "Flawless" con reglas públicas, percentil lúdico en el texto compartido, rastro parcial sin spoiler. Retención declarada de 84-86 % al día siguiente **[no auditada, es cifra de la empresa]**. | Corte a medianoche del Pacífico para todo el mundo: en España el caso cambia a las 8-9 de la mañana y se pierden rachas por huso, no por olvido. Sin archivo. Cambios de formato del compartir que rompen los bots de la comunidad. | El sello "Impecable" con reglas públicas y el formato de compartir estable y versionado (PR4). El corte a medianoche local ya lo cerramos en D-007; esto lo confirma como diferencial. |
| **Sudoku.com** (Easybrain) | Retención que no depende solo de la racha: calendario del reto diario, sala de premios, eventos de temporada ("Postcards" con cupos por dificultad) y estadísticas por dificultad. **[verificado, Semrush]** 444.000 visitas orgánicas/mes desde España. Estructura SEO con `/es/facil`, `/es/dificil`, `/es/como-jugar`. | Publicidad como queja dominante: 138 de 150 reseñas recientes la mencionan, 30,7 % de 1 estrella; anuncios en mitad de la partida. Interfaz recargada. | La estructura de landings por dificultad con slug en español (ya en el árbol web). El calendario como objetivo: adoptado solo en su versión barata (candado y caducidad, PR6), no como álbum. |
| **Logic Puzzles – Brain Riddles** (Easybrain) | El competidor directo del modo Expediente a escala: más de 12 millones de descargas, cuadrícula lógica con historias temáticas, reto diario y eventos de temporada. | **Ad-gating**: en agosto de 2026 el 96 % de las reseñas recientes en iOS eran de 3 estrellas o menos y la media reciente cae 2,71 puntos. Y una queja de diseño concreta: "es fácil marcar mal una casilla y no hay forma aparente de deshacer". | Deshacer ilimitado como criterio de "hecho" del PRD de Expediente (no como detalle). Y la confirmación de que nuestra política de anuncios (M4) también es diferencial frente a la cuadrícula lógica, no solo frente a los clones. |
| **Enigmic** (Tangram/Infinity) | El producto que más rápido crece en España en el género: **[aportado, no reverificado]** 320.000 descargas, 200.000 en 30 días, 4,35 en Android y 4,79 en iOS, 18 idiomas con español y catalán. Prensa favorable por "gratis y anuncios honestos". | "Incluso los niveles más difíciles son muy fáciles de deducir": el techo de un generador sin métrica de dificultad. Y la misma regla de anuncios que elogia la prensa la sufre el usuario como "cada 60 segundos" porque el nivel dura un minuto. | La dificultad medida como argumento visible (PR1). Su compra única de 4,99 € es el ancla de precio real del género en España: se traslada a la pregunta 7. |
| **La Palabra del Día** | El mayor juego diario en español: **[verificado, del propio autor]** 1,5 millones de usuarios mensuales y ~300.000 diarios en 2024, con archivo completo gratis y enlace de "tablero" compartible con mensaje personal. | **[verificado en el código]** El día cambia a las **05:00 UTC fijas** (medianoche de Colombia): en España el caso nuevo aparece a las 6-7 de la mañana y en México a las 23:00 del día anterior. Sin cuenta, sin sincronización (la copia de seguridad es una URL que hay que copiar a mano) y sin monetización más allá del display programático. | La confirmación de que un juego diario en español sin marca puede llegar a millones solo con SEO, y de que la medianoche local (D-007) es un diferencial que el líder no tiene. El enlace de resultado con mensaje personal alimenta PR4. |
| **Orientación Andújar** | Diez cuadernos de "murdokus" gratis en diez semanas, co-creados con una maestra de Instagram, temáticos (Stranger Things, Mario Bros, cuentos) y **con los PDF indexados como páginas independientes**: su PDF de animalitos rankea por delante del post que lo aloja. | Sin garantía de solución única, sin niveles medidos, soluciones no siempre incluidas y nunca razonadas. | El PDF tratado como página indexable (PR5), **con un límite que hay que decir**: sus PDF rankean porque se titulan "murdokus", y `arbol-web.md` §3.1 nos prohíbe la marca ajena en el nombre de un producto, incluido el título y el nombre de archivo de un PDF. Copiamos el formato, no la palanca. Y la lección comercial: en el segmento docente el puzzle vale cero, solo se paga la garantía, la progresión, la guía y la licencia escrita. |
| **Arkadium / Arena** | **[verificado por DNS]** juegos.elpais.com, juegos.as.com, juegos.abc.es y juegos.eleconomista.es apuntan por CNAME a `*.arena.arkadiumhosted.com`: el modo de despliegue real en los medios españoles es subdominio alojado, no un `<script>`. juegos.elpais.com recibe ~268.000 visitas orgánicas/mes desde España. | Preroll de vídeo de 15 s o más y muro anti-adblock, con años de quejas documentadas en listas de filtros. Ningún juego de deducción en su catálogo. | La constatación de que nuestro `B2B-WIDGET` (embed simple, 450-750 €/mes) no encaja con el flujo real del comprador. Se registra como hallazgo para el piloto del mes 5, no como rediseño (PR9). |
| **Duolingo** | La reactivación mejor documentada del mercado: **[verificado en la carta a accionistas de agosto de 2026]** "Streak Revival" revivió 15,4 millones de rachas en junio de 2026 y la cohorte retuvo mejor que una reactivación normal. Registro diferido hasta después de la primera lección. | El sistema de energía es la causa principal de sus reseñas de 1 estrella y la propia dirección atribuye la desaceleración de usuarios al foco en monetización. | La regla negativa, que es la más valiosa: **nunca limitar el volumen de juego con vidas ni energía**, y decirlo en público. De la racha entra en el MVP solo lo que no depende de nadie (PR3); la **recuperación por esfuerzo** queda atada a H3, con su coste real de 0,25 persona-semana. |

> **Aviso sobre murdoku.com: la premisa central de este documento está sin verificar y contradice dos documentos aprobados.** `docs/funcionamiento-productos.md` §2.1 y §2.2 dicen exactamente lo contrario en tres puntos —le atribuyen **casos diarios**, **racha** y **compartir sin spoiler**, y dejan el español como "sin verificar"—; `docs/analisis-estrategico.md` §2.3 le atribuye además **duelos, cooperativo y ligas semanales**, también sin confirmar; y la **comprobación manual 3** de `docs/oportunidades-resenas.md` §5 (abrir `murdoku.com/play` y mirar el selector de idiomas, la sincronización, los duelos y la cadencia de publicación) sigue **pendiente y marcada como urgente**. Consecuencias que asumo por escrito:
> 1. Todo lo que la fila de arriba dice sobre lo que a murdoku.com le falta es **[inferido]**, no [verificado].
> 2. **La comprobación 3 no se cierra con este documento**: sigue abierta y es la que decide si "el hueco del español" es un hecho o una hipótesis. Es media hora de trabajo del fundador y vale más que cualquier propuesta de aquí.
> 3. **Hasta que se haga, los tres documentos no se unifican.** El día que se haga, `director-producto` alinea en una sola pasada la descripción de murdoku.com en este documento, en `funcionamiento-productos.md` §2.2 y en `analisis-estrategico.md` §2.3, y registra el resultado en `docs/decisiones.md`. Si resulta que murdoku.com está bien resuelto en español, no cambia una propuesta de este documento, pero sí cambia la estrategia entera: lo dice ya `funcionamiento-productos.md` §2.1.

### 2.2 El resto del mapa, por categoría

- **Ecosistema Escena / "murdoku" (18):** apps no oficiales (NozCore 2,36★ con 63.000 descargas en 30 días, Crimoku, Endless Cases con Elo y salas privadas, Caseoku, GridNoir, Apo-Games, ES GAMES), webs clon (cluedoku.app, murdokujuego.com, murdoku.fans, Daily Murder, murdersudoku.com) y variantes de tienda. Conclusión: mucha oferta, ninguna con producto sólido en español; Endless Cases es el único que ya tiene lo social.
- **Cuadrícula lógica / Expediente (12):** Murdle, Logic Puzzles (Easybrain), Cross Logic (10M+ descargas), Einstein's Riddle (5,3M, 4,78★), Egghead/Puzzle Baron (4,85★, sin anuncios, "smart hints" que explican), Conceptis, Sherlock de Kaser, Brainzilla, EveryClue, Myrdle, Mystery-o-matic. El patrón: quien explica la técnica en la pista tiene 4,8; quien la vende tras un anuncio tiene 3,9.
- **Juegos diarios de referencia (13):** NYT, LinkedIn, Puzzmo (Hearst), Apple News+, Washington Post, Guardian, Britannica, Waffle, Squaredle, Framed, Globle, Immaculate Grid, Squabble. Todos coinciden en cuatro piezas: un puzzle al día, cuenta atrás, compartir sin spoiler y racha.
- **Juegos diarios en español (9):** La Palabra del Día, Boludle, wordle.global/wordleplay/wordly, Wordle de danielfrg, Pasapalabra, Cifras y Letras, sudoku-online.org (305.000 visitas/mes ES), RTVE Wordlab, Minijuegos. Demuestran el tamaño del mercado y su punto ciego: nadie resuelve bien el huso horario ni la cuenta.
- **Medios en español, competidores y clientes B2B (8):** El País Juegos (563.000 visitas/mes), elDiario.es (123.000), La Vanguardia + Lexi Reto, 20minutos, La Nación AR (175.000), Claringrilla, Emol, más los proveedores Amuse Labs y Arambee.
- **Apps de lógica de masas y monetización (10):** Sudoku.com, Nonogram.com, Nonograms Katana, Brain Test, June's Journey, Criminal Case, Cluedo (Marmalade), Adventure Escape, Rooms & Exits, escape rooms en español. Aportan el mapa de formatos publicitarios y de precios (compra única 4,99-14,99 €).
- **Hábito y gamificación fuera del género (10):** Duolingo, Chess.com, Lichess, GeoGuessr, Strava, Kahoot, Preguntados, Apalabrados, Words With Friends, Discord. De aquí salen racha, ligas (descartadas), duelos por enlace (adoptados) y comparación con amigos.
- **Educación e imprimibles (18):** Orientación Andújar, Twinkl, Genially, Educaplay, Wordwall, Canva Edu, Eduki, TPT, Breakout EDU, Escape Kit, Educima, Eduescaperoom, Puzzlemaker, Brainzilla, Superstar Worksheets, ePasatiempos, Lolita Perrins y los cuadernos KDP que ya venden "murdokus" en Amazon.es. Todo el segmento vive de gratis + publicidad o de suscripciones de 4-10 €/mes.
- **B2B e infraestructura (4) y suscripción de marca cognitiva (3):** Arkadium/Arena, Amuse Labs PuzzleMe, Google H5 Ads, Sporcle/Kongregate; Brilliant, Lumosity, Elevate.

> **Nota de recuento, honesta.** La v1.0 decía "el resto del mapa (98 fichas)", que es 110 − 12. Las categorías de arriba **suman 105**. La diferencia de siete fichas **no está conciliada** y no puede estarlo hasta que `docs/investigacion/mapa-110-herramientas.md` esté en el repositorio (ver aviso de trazabilidad de la cabecera). Hasta entonces, el número correcto que se puede afirmar es "**más de 100 herramientas mapeadas**", y las cifras por categoría son **[aportado]**.

### 2.3 Cinco categorías que el mapa no cubre

El revisor tiene razón: hay cinco familias de productos que tocan decisiones vivas del catálogo y que el mapa no mira. Las declaro aquí con candidatos nombrados y **sin una sola cifra**, porque en esta ronda no se pudo verificar nada (WebSearch agotado, Semrush sin unidades). Cada una tiene responsable y fecha; ninguna bloquea el MVP, pero **(d) bloquea la pregunta 7**.

| Categoría | Candidatos a ficha | Por qué importa | Responsable / cuándo |
|---|---|---|---|
| **(a) Juegos y bots nativos de mensajería** | Bots de juego diario en Telegram; juegos de WhatsApp Channels; bots de puzzle en Discord (categoría **[inferido]**; los bots que ya tenemos mapeados solo *parsean* resultados ajenos, no son juego) | Es el canal real de conversación en España y LatAm y el destino natural de PR4: si el enlace `/r/[id]` vive en WhatsApp, hay que saber qué hace la competencia dentro de WhatsApp | `creador-social` + `estratega-growth-seo`, antes del mes 3 |
| **(b) Editores y sindicadores de pasatiempos en papel** | Keesing Media Group (Keesing Ibérica), Nikoli, Puzzler Media **[aportado, a verificar]** | `B2B-MARCABLANCA` vende "PDF listo para imprenta" y `LIBRO-LICENCIA` compite en ese mercado; el mapa solo tiene B2B digital, así que hoy fijamos precio B2B de papel a ciegas | `estratega-negocio`, antes del piloto B2B |
| **(c) Juegos de mesa y kits de misterio en español** | Sherlock (Q-System, GDM Games), Unlock!, Chronicles of Crime, Unsolved Case Files **[aportado, a verificar]** | Competidor directo de `PDF-REGALO` en la campaña de Navidad y referencia de diseño para los "retos semanales" (ventaja 9 de Premium) | `estratega-negocio` + `disenador-puzzles`, antes de decidir la ventana de `PDF-REGALO` |
| **(d) Pasarelas y *merchant of record*** | Stripe, Paddle, Lemon Squeezy (de Stripe desde 2024 **[aportado]**), Gumroad, RevenueCat | La pregunta 7 y la hipótesis H6 se apoyan hoy en "tarifas no reverificadas". Con tickets de 1-3 € la parte fija de la comisión decide si la prueba es viable | `estratega-negocio`, **antes de la pregunta 7** |
| **(e) Generadores y solvers de deducción de código abierto** | mystery-o-matic (ya consta como código abierto en `analisis-estrategico.md` §2.3), generadores de *logic grid* en GitHub, solvers de restricciones genéricos | PR7 afirma que el motor es "el único activo técnico defendible". Sin mapear lo que ya es gratis y público, esa frase no se sostiene, y es el argumento con el que se vende B2B | `ingeniero-motor-puzzles`, antes de construir PR7 |

---

## 3. Propuestas recomendadas, por prioridad

Escala de esfuerzo: la misma de D-007, **persona-semana incremental sobre lo que F1-F19 ya presupuestan**, mínimo 0,25.
Recordatorio: el MVP ya carga ≈7,25 persona-semana incrementales por D-007, con orden de corte fijado. Todo lo que se añada aquí obliga a mover ese orden.
**Aviso de orden:** la numeración PR1→PR9 es la de la v1.0 y se conserva para poder seguir las referencias. **El orden de prioridad que vale es el de §8.1**, que empieza por PR3.
**Aviso sobre el campo "Jueces":** mientras `docs/investigacion/verificacion-adversarial.md` no esté en el repositorio, todo lo que aparece ahí —incluidas las frases del tipo "el juez escribió textualmente"— es **[aportado]** y no lo puede comprobar nadie más que quien escribió este documento. Se mantiene porque explica de dónde salen las condiciones aceptadas, no como prueba.

---

### PR1. Ficha técnica del caso y curva semanal declarada

- **Qué es, tal como lo vive el jugador.** En la tarjeta del archivo, en la cabecera de la partida y en el resultado aparece una línea fija: *"Caso 47 · martes · una sola solución comprobada · 6 pistas, ninguna sobra · resuelto por una persona antes de publicarse"*. En `/como-jugar` y en la cuenta atrás se dice qué toca mañana ("miércoles · normal"; "sábado · el más difícil de la semana"). Cuando la métrica del motor esté validada, la línea añade el nombre del nivel y los pasos de deducción.
- **Dos fichas, no una: la "firma humana" no se puede prometer en todos los productos.** La v1.0 ponía "resuelto por una persona antes de publicarse" como línea fija de **toda** tarjeta, y eso es imposible de cumplir en dos productos del catálogo: la ventaja 2 de `PREMIUM` son **casos ilimitados generados en el momento** y el feed diario de `B2B-MARCABLANCA` sale bajo demanda. Nadie resuelve a ciegas un caso que se genera en el instante en que se pide. Por tanto se definen **dos fichas distintas y con texto distinto**:
  - **Ficha A — caso del día (y archivo, y packs PDF).** *"Caso 47 · martes · una sola solución comprobada · 6 pistas, ninguna sobra · resuelto por una persona antes de publicarse."* Es la única que lleva firma humana, y solo porque F4 y M5 la garantizan caso a caso.
  - **Ficha B — caso generado bajo demanda (Premium ilimitado, contrarreloj, dificultades, feed B2B).** *"Caso generado para ti · una sola solución comprobada por el motor · ninguna pista sobra."* **Sin** mención a persona alguna. Y en `B2B-MARCABLANCA`, el contrato dice qué ficha corresponde a qué entrega.
  - **Cuando un caso se anula (PR2)**, la ficha se sustituye por: *"Caso 47 · anulado el 12 de octubre · no cuenta para tu racha ni para tus estadísticas · te explicamos por qué"*, con enlace a la página de erratas. Nunca desaparece la ficha en silencio.
  - **Puerta legal.** Una afirmación pública de calidad es publicidad: le aplican los arts. 5 (actos de engaño) y 7 (omisiones engañosas) de la Ley de Competencia Desleal, y el riesgo de "promesa" de §7.4.3 es también jurídico, no solo reputacional. **El texto exacto de las dos fichas y del estado anulado lo redacta `periodista-contenidos` y lo aprueba `experto-legal` antes de que se escriba una línea de frontend.** Sin esa aprobación, PR1 no sale.
- **En qué se inspira.** Murdle declara su curva en público ("el más difícil es el sábado, el más grande el domingo") **[verificado]**; Clues by Sam pone la etiqueta de dificultad en el propio texto compartido **[verificado]**; la queja número uno de Connections es no saber si el puzzle de hoy es fácil o difícil **[aportado, Vox vía dossier, no reverificado]**; Enigmic demuestra el techo contrario ("incluso los niveles más difíciles son muy fáciles") **[aportado]**.
- **Valor para el usuario.** Elige con expectativas correctas y deja de sentirse tonto un sábado. Saber que hoy toca el duro es permiso para tardar; saber que mañana toca suave es una razón para volver mañana.
- **Valor para el negocio.** Convierte F2 (caro de construir y hoy invisible) en argumento de portada, de prensa y de venta B2B, y es la única prueba que vale para la cohorte quemada por las erratas del papel (riesgo 8 de `oportunidades-resenas.md`).
- **Esfuerzo y fase.** ≈0,75 persona-semana (frontend + copy), más la revisión de textos de `experto-legal`, que no consume capacidad de desarrollo pero sí es puerta. **MVP.**
- **Estado frente al catálogo.** Mejora de existente: M5, M6 y F2 ya existen; lo que falta es enseñarlos en pantalla. **Toca además `PREMIUM` (ventaja 2) y `B2B-MARCABLANCA`**, que necesitan la ficha B.
- **Jueces.** Formaba parte de la propuesta fusionada que **sobrevivió con puntuación 2**; el juez de viabilidad la refutó como paquete de cuatro piezas y señaló expresamente estas dos como la parte que sí cabe en el MVP. **Condiciones que acepto:** (a) estado degradado el día 1 si F2 no llega a correlación 0,6 — se muestra "una sola solución comprobada · N pistas, ninguna sobra · resuelto por una persona" **sin nombre de nivel ni número de pasos**, y la etiqueta se activa cuando el dato esté; (b) la regla de tope de dificultad entre semana se calcula sobre el conjunto de casos generados de cada tamaño, no sobre lo ya publicado, y un caso que se pase se descarta o se guarda para archivo, nunca se "asciende" a sábado rompiendo la curva de tamaño.
- **Recomendación: incluir en MVP.**

---

### PR2. Caso defectuoso: se anula, nunca se sustituye

- **Qué es.** Un botón interno que marca un caso como defectuoso. A partir de ese momento: el caso queda anulado (no se cambia por otro), **la racha de todos los que lo jugaron se conserva sin que nadie escriba a soporte**, aparece en la página de erratas con la explicación en voz de Sabueso, y quien lo tenga abierto ve un aviso. Además, el botón "reportar un problema con este caso" pasa a preguntar **qué pista falla**, con la lista de pistas del caso, en vez de un campo de texto libre.
- **Las seis reglas que faltaban (la anulación ocurre a una hora, pero el caso se publica a medianoche local de cada zona).** Sin esto, la política no es implementable:
  1. **La anulación es del número de caso, no de la franja horaria.** Se anula el caso 47 para todo el mundo, en todas las zonas, desde el instante en que se pulsa. Deriva directa de la decisión cerrada 11: un número = un contenido.
  2. **El caso anulado no se retira: se marca.** Quien aún no lo ha empezado (México va seis horas por detrás de España) **puede seguir jugándolo**, con el aviso arriba. Retirarlo dejaría a media América sin caso ese día, que es peor que jugar uno imperfecto.
  3. **Nadie pierde el día.** El caso anulado **no cuenta para la racha ni para las estadísticas de nadie**, ni de quien lo resolvió ni de quien no lo abrió: el día se concede a todos, exactamente igual que en la regla (b) de PR3. Se marca en el calendario con el mismo color de "día concedido" y con su propia leyenda.
  4. **No hay página del día 8.** Un caso anulado **no genera `/casos/<n>`**; su URL responde con la entrada de la página de erratas. No se indexa la explicación de un caso que estaba mal.
  5. **Sale del feed B2B** con aviso al cliente el mismo día, bajo la cláusula de SLA "anulación con aviso y sin crédito económico" (§7.3). Es la única forma de que una errata no genere una obligación de devolución.
  6. **La ficha técnica del caso cambia de estado** (ficha "anulado" de PR1), en la tarjeta del archivo y en el resultado de quien ya lo jugó.
- **El reporte devuelve algo en el acto** (patrón **R2 de `resenas-reddit.md`**, que la v1.0 no recogía). Quien duda de un caso no busca la solución: busca que le confirmen que el error no es suyo, y hoy eso solo se lo da un hilo de Reddit. Al enviar el reporte se responde en la misma pantalla, sin esperar a nadie: *"Este caso está verificado por el motor y resuelto por una persona: la solución es única"*, o bien *"Van N personas que señalan esta misma pista; lo estamos revisando"*. Coste: es la misma pantalla del campo estructurado, +0 persona-semana.
- **Quién declara la anulación y en cuánto tiempo.** No hay guardia nocturna en el MVP y no la va a haber: prometer minutos es prometer una persona despierta a las 00:10. Regla real: **revisión humana de la bandeja de reportes dos veces al día a hora fija** (mañana y tarde, dentro de los 15-30 min diarios ya presupuestados en §7.4.2) **más una alerta automática** cuando tres reportes distintos citan la misma pista, que sí notifica fuera de esa ventana. **Compromiso público: anulación en menos de 12 horas desde el tercer reporte coincidente**, no "en minutos". Lo decide `director-producto`; en su ausencia, `revisor-calidad`.
- **En qué se inspira.** Murdle mantiene página de erratas pública y la comunidad repara la racha a mano en Reddit **[verificado]**; NYT solo ofrece "Report a Bug" y restauración manual, y un solo puzzle rompió 5,6 millones de rachas **[verificado]**; el caso 60 de la 17.ª edición del libro de referencia y los acertijos 21-22 de Murdle en español son la razón por la que existe la cohorte quemada.
- **Valor para el usuario.** El peor día posible del producto (una pista mala) deja de costarle su racha y deja de exigirle escribir a nadie.
- **Valor para el negocio.** Reduce **de días a horas** (no a minutos: ver la regla de guardia de arriba) la ventana en la que una pista mala nos pone la etiqueta "hecho por IA", que es el riesgo número uno del proyecto. Y el campo estructurado convierte los reportes en datos: sin él, la detección automática de fase 2 ("tres reportes citando la misma pista") no es medible.
- **Esfuerzo y fase.** ≈0,25-0,5 persona-semana sobre F18, **más la alerta automática de tres reportes coincidentes**, que la v1.0 daba por fase 2 y aquí es lo que sostiene el compromiso de 12 horas: +0,25 persona-semana de backend. **MVP.**
- **Estado frente al catálogo.** Mejora de existente (F18, M2, M10) más **una decisión nueva** que hay que registrar: anular, no sustituir.
- **Jueces.** Misma propuesta superviviente, puntuación 2. El juez de viabilidad refutó la versión original —que sustituía el caso por uno de reserva dentro de una ventana de tres horas— con un argumento que acepto entero: con publicación a medianoche local no existe un instante único de publicación, así que sustituir significaría que España juega el caso A y México el caso B bajo el mismo número, que es exactamente el fallo de Wordle #284 y viola la decisión cerrada 11. **Condición aceptada:** anulación pura, sin caso de reserva y sin subir F4 de 60 a 67 casos.
- **Recomendación: incluir en MVP.**

---

### PR3. Racha anclada al número de caso y día concedido cuando la caída es nuestra

- **Qué es.** Tres reglas, ninguna visible hasta que hace falta: (a) la racha cuenta **números de caso consecutivos resueltos**, no fechas de servidor, de modo que un vuelo de Madrid a México no la rompe; (b) si el servicio no estuvo disponible, ese día se concede automáticamente a todo el mundo y se marca en el calendario con color propio; (c) la suite de reloj simulado cubre los dos cambios de horario de verano y dos viajes (este y oeste).
- **Qué cuenta como "no disponible" (regla (b), que la v1.0 dejaba sin definir).** Lo declara **el monitor, no una persona**: ≥ 20 minutos continuados de indisponibilidad del endpoint del caso del día o del guardado de partida, medidos por nuestro propio monitor externo, en **cualquier** región. Consecuencias: el día se concede automáticamente a **todos los usuarios**, no solo a los de la región afectada (distinguir por región exige geolocalizar, y no vamos a tratar datos de ubicación para conceder un día de racha); se marca en el calendario con color propio y leyenda *"día concedido: el fallo fue nuestro"*; y se publica en la página de erratas. Una caída **parcial** (funciona jugar pero no guardar) cuenta igual: si el jugador no puede cerrar su caso, el día es nuestro. Umbral y ventana quedan como criterio de "hecho" de F11 y se prueban en la suite de reloj simulado.
- **De dónde sale, además de los jueces.** Las reglas (a) y (c) son literalmente los patrones **R3 y R4 de `docs/investigacion/resenas-reddit.md`** (viaje entre husos y caída de AWS del 20 de octubre de 2025), que la v1.0 no citaba. Ese informe cifra la regla (b) en 0,5 persona-semana de backend, coherente con lo que aquí se presupuesta.
- **En qué se inspira.** LinkedIn corta a medianoche del Pacífico y sus usuarios europeos pierden rachas por huso **[aportado, cita indirecta de su ayuda]**; La Palabra del Día ancla el día a las 05:00 UTC y deja a España a las 6-7 de la mañana **[verificado en el código]**; NYT documenta rachas rotas por viajes y por la caída de AWS de octubre de 2025 **[aportado, vía prensa citada en `resenas-reddit.md` H6 y H8]**.
- **Valor para el usuario.** La causa de abandono más citada del género desaparece sin que él tenga que saber que existía.
- **Valor para el negocio.** Es la parte de la política de racha que sí podemos poner en portada sin exagerar ("aquí la racha no se rompe por un vuelo ni por una caída nuestra") y no crea deuda de producto.
- **Esfuerzo y fase.** ≈0,5 persona-semana de backend sobre F5/F11, **si se decide antes de escribir F11**. **MVP.**
- **Estado frente al catálogo.** Mejora de existente (F5, F11, M7, M10). No toca la decisión cerrada 3: **no** añade congelaciones ganadas al tier gratuito.
- **Jueces.** La propuesta grande de "racha que perdona" (congelaciones ganadas + resurrección + enlace de rescate + captura de cuenta el día 7) fue **refutada por los tres jueces**; el de viabilidad señaló que lo único barato y que sí cabe es este bloque. Lo recojo tal cual y descarto el resto. **Condición:** decidirlo antes de implementar F11, o el coste se multiplica.
- **Corrección sobre la recuperación de racha por esfuerzo (variante Puzzmo).** La v1.0 la descartó dentro del paquete de 2-3 persona-semana, y eso era un error de imputación: **suelta cuesta 0,25 persona-semana** ("si rompes la racha, siete casos seguidos te devuelven tu racha más larga"), tal como la tasa el patrón **R7 de `resenas-reddit.md`**. No entra en el MVP igualmente, pero por una razón distinta y mejor: es una **mecánica de retorno**, y hasta que no haya usuarios que se hayan ido no hay nada que recuperar. Queda **atada a la hipótesis H3**: si más del 2 % de las rachas rotas al mes no son imputables al jugador, o si la tasa de retorno tras racha rota es baja, se implementa en el mes 3 por 0,25 persona-semana. Ventaja sobre las congelaciones: no depende de Premium, así que no huele a "racha de pago".
- **Recomendación: incluir en MVP.**

---

### PR4. El resultado que sale de casa: `/r/[id]` servido en servidor, formato versionado y sello "Impecable"

- **Qué es.** Tres cambios pequeños en el compartir: (a) `/r/[id]` deja de ser una página de cliente y se sirve renderizada, con el caso jugable arriba del pliegue, de modo que quien abre el enlace en WhatsApp empieza a jugar en un toque (sigue `noindex, follow`); (b) el texto compartido tiene **formato fijo, documentado y versionado** —marca, número de caso, día, tiempo, sello y URL— y se publica esa especificación; (c) se define y nombra el sello **"Impecable"**: 0 comprobaciones, 0 ayudas, autopropagación desactivada, y aparece en la primera línea del texto compartido.
- **En qué se inspira.** Los bots de grupo de Telegram que parsean Murdle, LinkedIn y Wordle existen y se rompen cada vez que el formato cambia **[verificado en GitHub: giochini-bot, parsle, dledle, daily-games-score]**; LinkedIn documenta "Flawless" y sus reglas **[aportado, cita indirecta]**; La Palabra del Día tiene dos capas (cuadrícula sin spoiler y enlace de tablero con mensaje) **[verificado en URLs reales]**; el compartir es la única vía de adquisición no-SEO que tenemos.
- **Datos y consentimiento (faltaba entero en la v1.0).** Al pasar `/r/[id]` de página de cliente a **página persistente en servidor**, deja de ser un enlace efímero y se convierte en una publicación con datos de rendimiento de una persona (tiempo, racha, sello) más una imagen OG que cualquiera puede indexar aunque la página lleve `noindex`. Reglas, todas de coste cero si se deciden ahora:
  1. **Identificador no adivinable**: `id` aleatorio de ≥ 16 caracteres, nunca derivado del identificador de usuario ni del número de caso, para que nadie pueda enumerar resultados ajenos.
  2. **Cero datos identificativos**: sin nombre, sin correo, sin foto, sin alias por defecto. Si algún día hay alias, es opcional y editable.
  3. **Caducidad**: la página expira a los **30 días** y responde 410. Un resultado compartido es una conversación de hoy, no un expediente permanente.
  4. **Derecho de supresión conectado**: "exportar y borrar mis datos" (fila 26 de la matriz) **borra también todas las páginas `/r/[id]` de esa persona y sus imágenes OG en caché**. Es un criterio de "hecho" de F12, no una nota.
  5. **La imagen OG no lleva nada que no esté en la página**, y se genera sin cookies ni identificadores de seguimiento.
  6. `noindex, follow` se mantiene, **y además `X-Robots-Tag: noindex` en la imagen OG**, que es un archivo y no puede llevar la etiqueta dentro.
  Revisa `experto-legal`; implementa `desarrollador-frontend` + `desarrollador-backend`.
- **Valor para el usuario.** Quien recibe el enlace juega sin fricción; quien lo manda tiene algo que presumir que no es solo el tiempo.
- **Valor para el negocio.** Es la forma más barata de medir el k-factor antes de que existan los duelos (fase 2) y de que los grupos de oficina y familia lleven la cuenta sin que construyamos ligas.
- **Esfuerzo y fase.** ≈0,5 persona-semana (frontend + copy), más 0,1 por las reglas de datos de arriba. **MVP.**
- **Estado frente al catálogo.** Mejora de existente (F12, F14) y **corrección del árbol web**, que hoy define `/r/[id]` como CSR.
- **Jueces.** La propuesta original (página jugable + tiempo firmado en servidor + comparativa 1 a 1 + kit de bots) fue **refutada por los tres jueces**: era `DUELOS` adelantado al MVP, que la decisión cerrada del catálogo excluye "sin excepciones". El juez de diferenciación escribió textualmente que el delta real y barato es servir `/r/[id]` en SSR con el caso arriba del pliegue y medir apertura → inicio antes del mes 4. Eso es lo que recojo. **Condiciones:** nada de tiempos firmados ni anticheat en el MVP, nada de comparativa 1 a 1 (eso es DUELOS), y el sello "Impecable" no puede filtrar información del caso.
- **Recomendación: incluir en MVP**, pero solo el SSR y las reglas de datos: el sello y la especificación publicada son lo primero que cae (ver el cierre de §3 y el ranking de §8.1, donde esta propuesta sube al puesto 4).

---

### PR5. El PDF como página indexable, no como descarga muda

- **Qué es (corregido: se indexa la hoja en blanco, no el cebo).** La v1.0 proponía indexar los dos PDF, y eso **destruye la puerta del `PDF-CEBO`**, que el catálogo §1.3 define como *"gratis a cambio del correo"* y cuyo valor entero, según §7.1, son 35-80 correos al mes. Si Google indexa ese PDF como documento, se descarga desde la propia página de resultados sin dejar el correo. Queda así:
  - **Se indexa solo la hoja de trabajo en blanco** (M15), que ya es gratis y sin correo por decisión de D-007: nombre de archivo descriptivo en español, título y autor en los metadatos, primera página con texto real (no una imagen) y enlace de vuelta a la web.
  - **`PDF-CEBO` se sirve por enlace firmado con caducidad**, con `X-Robots-Tag: noindex` en la respuesta, fuera del sitemap y en una ruta que no se enlaza en abierto. Lo que se indexa del cebo es **la página que pide el correo**, no el archivo.
  - **Metadatos y nombre de archivo sin marca ajena.** `arbol-web.md` §3.1 prohíbe la marca ajena en el nombre de producto, y el título, el autor y el nombre de archivo de un PDF **son** nombre de producto: nada de `murdoku-para-imprimir.pdf` ni de "Murdoku" en el campo `Title`. Se usa *"casos de deducción para imprimir"*. Esto nos quita de encima la razón exacta por la que rankean los PDF de Orientación Andújar (se llaman "murdokus"), y hay que decirlo: **no podemos replicar su ventaja, solo aproximarnos con vocabulario propio.** La expectativa de tráfico de §7.1 baja en consecuencia.
  - **`/juegos-como-murdoku/para-imprimir` no se publica sin luz verde de `experto-legal`.** Es la página que `arbol-web.md` §3.2.6 marca como de mayor riesgo (puede interpretarse que explota la intención de piratería del libro ajeno). Si no hay luz verde, los PDF se enlazan desde `/para-imprimir`, que es una landing propia y sin marca ajena.
- **En qué se inspira.** Orientación Andújar: sus PDF están indexados como documentos independientes y **captan más tráfico que el post que los aloja** (su PDF de animalitos rankea en el puesto 2 con ~51 visitas/mes estimadas frente a 17 del post) y aparecen en "murdoku descargar gratis", "murdoku pdf español" y "murdoku en español gratis" **[verificado, Semrush ES]**. Nota honesta: la consulta "murdoku filetype:pdf" que aparece en el informe es un artefacto de Semrush, no algo que la gente teclee; lo verificado es que los PDF rankean en consultas reales.
- **Valor para el usuario.** Encuentra la hoja en blanco desde Google sin pasar por ningún formulario. Y quien quiere los cinco casos del cebo sabe lo que da a cambio: el correo, dicho claro en la página.
- **Valor para el negocio.** Es tráfico de cola larga a coste cero sobre un entregable que ya está presupuestado, y refuerza el puente hacia el público analógico que describe la prensa (P24). La hoja en blanco no capta correos por sí sola: capta **sesiones**, y el correo se pide dentro de la web. Esa es la cadena, y es más larga que la que suponía la v1.0.
- **Esfuerzo y fase.** 0,25 persona-semana. **MVP** (o semana 9 sin coste de oportunidad), con fecha límite del **1 de diciembre** por la ventana de regalo (§7.5).
- **Estado frente al catálogo.** Mejora de existente (M15, `PDF-CEBO`, `LANDINGS-JUGABLES`) **con una regla nueva**: ningún entregable descargable de pago o con puerta se sirve indexable.
- **Jueces.** **Sin juicio.** Formaba parte de la propuesta de la línea de aula, que fue refutada por los tres jueces por razones que no afectan a esta pieza (licencia de centro a 49 €, generador con los nombres de la clase, obligación editorial mensual). La propongo yo, con la evidencia de Semrush como único aval.
- **Recomendación: incluir en MVP.**

---

### PR6. El muro de Premium dice qué te falta, y el archivo avisa con candado

- **Qué es.** Cuando un caso sale del archivo de 7 días, su día no desaparece del calendario: queda con un candado. Y la página de Premium deja de decir "archivo completo" y dice **"te faltan 6 casos de septiembre y 41 desde que juegas"**, con los títulos concretos.
- **En qué se inspira.** NYT codifica el progreso del archivo sin revelar nada (contorno, líneas, estrella llena o vacía) **[verificado en su ayuda]**; Sudoku.com convierte el calendario del reto diario en objetivo **[verificado]**; Murdle no tiene archivo y la demanda existe y está medida ("murdle archive" 210/mes, "murdle unlimited" 170/mes en EE. UU.) **[verificado]**.
- **La contradicción que hay que resolver antes: vendemos el archivo y publicamos su solución.** El estratega concluye en §7.3 que **"el archivo es el producto"** (filas 4-5 de la matriz; 380 búsquedas/mes de "archive" + "unlimited" frente a cero de "stats"). A la vez, M8 y la pregunta 4 quieren **indexar la explicación razonada de cada caso el día 8**, y `arbol-web.md` §2.1 y §5.3 dicen lo contrario con un argumento que la v1.0 no respondió: *"indexar soluciones propias antes de tener hábito canibaliza la partida"*, por eso `/caso/*/solucion` va con `noindex, follow` en fase 1. La condición (a) que acepté —"el muro no enlaza a la explicación pública"— **no arregla nada**: una página indexada en Google no necesita que nosotros la enlacemos.
  **Decisión que propongo (opción A).** La página del día 8 se indexa, pero publica **la explicación del razonamiento sin la acusación final**: la cadena de inferencias hasta el penúltimo paso, con la técnica nombrada, y se corta con *"desde aquí solo queda una colocación posible: juega el caso para verla"*. Eso sirve la intención de búsqueda ("cómo se resuelve esto"), es texto propio y citable por motores generativos, y **deja el caso jugable**, que es lo que Premium vende. Efecto esperado sobre la ventaja principal de Premium: **cero por construcción**, porque no se publica lo que hace que el caso deje de merecer la pena.
  **Opción B (explicación completa, incluida la acusación).** Sirve mejor la intención de búsqueda y es más citable, pero convierte cada caso del archivo en contenido consumido. No puedo cuantificarlo con datos propios y digo por qué: no hay archivo, no hay Premium y no hay serie histórica. Lo que sí se puede acotar es la exposición: las filas 4-5 son la ventaja declarada principal de `PREMIUM` y PR6 existe para subir su conversión un 20-25 % relativo (+184 €/mes en §7.1). Poner en riesgo esa línea a cambio de un tráfico SEO no medido es una apuesta asimétrica en contra. Si se elige B, hay que aceptar que PR6 y su hipótesis H2 pierden sentido.
  **Se decide en la pregunta 4 y afecta a `arbol-web.md` §2.1/§5.3 y a M8, que hoy se contradicen también en la ruta** (`/casos/<n>` frente a `/caso/AAAA-MM-DD/solucion`).
- **Valor para el usuario.** Ve de un vistazo lo que le falta, sin que nadie le riña y sin que la racha rota lo mande a cero.
- **Valor para el negocio.** Convierte la oferta de Premium de abstracta a concreta, que es la palanca de conversión de este modelo, y da una segunda métrica de hábito (días del mes completados) menos frágil que la racha.
- **Esfuerzo y fase.** ≈0,5 persona-semana. **Fase 2**, junto con Premium.
- **Estado frente al catálogo.** Mejora de existente (F13, M14, `PREMIUM`).
- **Jueces.** Propuesta superviviente con puntuación 2; el juez de valor-evidencia la refutó por el álbum de sellos que la acompañaba, no por esta parte, y escribió que "lo único con mecanismo causal claro y coste bajo es el muro con huecos concretos y el candado en el calendario". **Condiciones que acepto:** (a) el muro **no enlaza** a la explicación pública del día 8 de los casos que vende; (b) el mensaje se muestra solo dentro del producto, nunca por correo ni notificación; (c) el criterio de éxito se prerregistra con cálculo de potencia real (con 5.000-10.000 usuarios mensuales hacen falta 1.500-4.000 vistas de muro por rama y 2-3 meses; el efecto mínimo detectable realista es del 20-25 % relativo, no del 50 %).
- **Recomendación: incluir en fase 2.**

---

### PR7. Demostración del motor en vivo en `/una-sola-solucion`

- **Qué es.** Un botón "genera uno delante de mí" que, en menos de un segundo y en el navegador, crea un caso 3×3 mostrando el conteo de soluciones parándose en dos, la eliminación de pistas redundantes y la medición de pasos. El caso resultante es jugable y sirve de caso de práctica.
- **En qué se inspira.** Ningún competidor lo hace. Lo más cercano es `/como-creamos-los-casos` de nuestro propio árbol web, que hoy es texto. La necesidad viene de la cohorte quemada (P1, riesgo 8) y de que la promesa de unicidad es invisible hasta que falla.
- **Valor para el usuario.** Deja de tener que creerse una promesa: la ve.
- **Valor para el negocio.** Es la pieza más citable del sitio para motores generativos (§4 del árbol web), material de prensa y la pantalla con la que se vende B2B.
- **Esfuerzo y fase.** 1,5-2 persona-semana. **Fase 2**, cuando el motor esté estable y compartido en TypeScript.
- **Estado frente al catálogo.** Nueva, sobre `/una-sola-solucion` (que ya existe por M2).
- **Jueces.** Parte de la propuesta superviviente, puntuación 2. El juez de viabilidad la sacó del MVP con un argumento correcto: exige un empaquetado del motor para navegador que hoy no existe, y el propio texto de la propuesta admitía que iría en la semana 9-10. **Condición:** se expone una versión reducida del generador (3×3), nunca el algoritmo completo, porque es el único activo técnico defendible.
- **Recomendación: incluir en fase 2.**

---

### PR8. Álbum mensual de sellos y colección

- **Qué es.** Cuadrícula del mes con iconografía sin spoiler, contador "18/30" y un sello coleccionable ilustrado al cerrar el mes, guardado en un álbum permanente.
- **Jueces.** Puntuación 2, refutada por el juez de valor-evidencia con cuatro razones que comparto: (a) en los 25 patrones de reseñas y las 108 palabras clave medidas **no hay una sola petición** de colecciones ni de sellos; (b) se contradice —Premium no compraría racha, pero sí compraría el sello del mes, porque los días de más de 7 días atrás solo se recuperan pagando—; (c) "sin coste de contenido" ignora doce ilustraciones al año; (d) crea de hecho una segunda racha cuya rotura duele igual.
- **Recomendación: no incluir por ahora.** Se reabre solo con señal medida propia: porcentaje de jugadores que usan el archivo de 7 días y tasa de retorno tras racha rota con PR3 y F18 ya en producción.

---

### PR9. B2B alojado por CNAME al estilo Arena

- **Qué es.** Ofrecer el caso diario como subdominio del medio (`juegos.medio.es`) apuntando a nuestro host, con tematización, en lugar de solo como `<script>`/`<iframe>`.
- **Jueces.** El paquete completo (modo alojado + tres tarifas + reparto publicitario + papel incluido + feed público) fue **refutado por los tres jueces**: el modo alojado no es una ventaja sino el estándar que Arkadium ya da gratis; el subdominio `juegos.` de los cuatro medios objetivo **ya está ocupado por él** (verificado por DNS); y el reparto de inventario reintroduce la publicidad justo donde el argumento de venta la prohíbe.
- **Recomendación: no incluir por ahora.** Pero sí registrar el hallazgo verificado en el catálogo como nota: cuando llegue el piloto B2B del mes 5, la primera pregunta al medio es si acepta un `<script>` o si necesita subdominio, porque de eso depende que el producto sea vendible.

---

**Coste total si se aceptan PR1 a PR5, revisado:** ≈**2,6 persona-semana** adicionales sobre las 7,25 de D-007 (2,25 de la v1.0 + 0,25 de la alerta de tres reportes coincidentes en PR2 + 0,1 de las reglas de datos de PR4, redondeando). A eso hay que sumar **0,5 persona-semana de accesibilidad de teclado del tablero**, que no es una propuesta sino cumplimiento del *European Accessibility Act* y que el catálogo **no** cubre hoy: M16 solo cubre el compartir accesible (patrón **R9 de `resenas-reddit.md`**). Total realista: **≈3,1 persona-semana sobre D-007**.

**Y esto no cabe.** Con F1-F19 (10-14 **[estimado]**) + D-007 (7,25) + esto (3,1) salen **20,5-24,5 persona-semana** frente a 8-16 de capacidad. Ver §7.4.1 y la **pregunta 0**: la decisión no es qué propuesta cae, es capacidad y fecha.

**Orden de corte, si aun así hay que cortar, de abajo hacia arriba:** primero PR5 (se despliega en la semana 9 sin coste, con tope el 1 de diciembre), luego el sello "Impecable" y la especificación publicada de PR4 (dejando solo el SSR de `/r/[id]` y sus reglas de datos), luego la curva declarada de PR1 (dejando la ficha técnica). **PR2 y PR3 no se cortan** y **la accesibilidad de teclado tampoco**, porque es obligación legal, no producto.

---

## 4. Propuestas descartadas por los jueces

**Refutadas con argumento (10).**

| Propuesta | Motivo en una línea |
|---|---|
| Puerta de entrada: caso corto diario y enrutado para que nadie empiece por el sábado | Es un segundo producto de publicación diaria (2,5-3,5 persona-semana, no 1,5) y más de la mitad ya existe como F9, M1 y las landings con caso jugable. |
| El resultado que sale de casa (versión completa: página jugable, tiempo firmado, kit de bots) | Es `DUELOS` adelantado al MVP quitando lo barato y dejando el anticheat; el catálogo excluye duelos del MVP "sin excepciones". Rescatado su núcleo en PR4. |
| La racha que perdona (congelaciones ganadas, resurrección, enlace de rescate) | Coste real de 2-3 persona-semana, no 0,75; el disparador de "segundo dispositivo" es indetectable sin cuenta y siete redes de seguridad apiladas no se explican en una frase. Rescatado su núcleo en PR3. |
| El solver como ayuda que enseña (aviso de contradicción, pista en dos niveles, perfil por técnica) | Con solución única garantizada, un solver en el dispositivo es un "Comprobar" ilimitado que rompe la decisión cerrada 13 y regala el anticheat de duelos. |
| Calendario narrativo: arco semanal, temporadas y caso de la comunidad | Error aritmético en su propia regla (24 personajes no permiten "ningún culpable repetido en 30 casos") y, sobre todo, publicar los seis culpables de la semana el domingo destripa el archivo gratuito de 7 días. |
| B2B rediseñado (CNAME, tres tarifas, reparto de inventario, papel) | El modo alojado es lo que el incumbente ya regala, el subdominio objetivo está ocupado y el SKU de reparto reintroduce la publicidad que el propio SLA prohíbe. Ver PR9. |
| La línea de aula deja de ser un PDF (ficha mensual, generador con nombres de la clase, licencia de centro 49 €) | Rompe la decisión cerrada 7 ("cinco SKU y ni uno más"), crea una obligación editorial mensual permanente y su única pieza con ventaja real (el generador) cuesta 10-15 persona-semana. Rescatado el PDF indexable en PR5. |
| Programa de prescriptores con comisiones | La economía no cierra (1.000 usuarios activados ≈ 72 € de comisión) y la mitad del programa ya está en el brief de `creador-social` y en el plan de lanzamiento. |
| El plan analógico: domingo XL imprimible y kit de club para bibliotecas | El kit regala 12 casos con solución cuando `PDF-CEBO` pide el correo por 5, y rompe la decisión cerrada 7. |
| Caso a medida con los nombres de tu grupo | Es UGC con otro nombre (descartado 12 meses), depende de cuatro piezas de fase 2-3 y su prueba de unicidad es invisible hasta que un puzzle falla. |

**Sin veredicto registrado (10).** Estas diez aparecen en la lista de descartadas, pero **los tres jueces devolvieron veredicto vacío**: no fueron refutadas con argumento, simplemente no se juzgaron. Lo digo porque cambia cómo hay que leerlas. Mi lectura, como director, es que ocho de las diez ya están en el catálogo v1.1 y que dos merecen volver con menos ambición.

| Propuesta | Mi lectura en una línea |
|---|---|
| La pantalla de resultado como ritual de cuatro tiempos (ayudas con nombre, sello, cifras del día, percentil escondido) | El sello lo rescato en PR4; el percentil gratuito choca con la fila 16 de la matriz de Premium y lo convierto en la pregunta 3. |
| Contrato de partida (gestos, pistas vivas con pictograma, cronómetro honesto, lápiz de hipótesis) | M1, M12 y F7 ya lo cubren casi entero; el lápiz de hipótesis ya es S2 en fase 2. |
| El informe de Sabueso (explicación que nombra la técnica y señala dónde te desviaste) | F8 ya obliga a la explicación paso a paso; "dónde te desviaste" exige la escalera del solver, que es S1 y está condicionada al dato de abandono. |
| Variedad garantizada por máquina (catálogo de tipos de pista, anti-repetición bloqueante) | Buena idea y barata como test en `engine/`; la llevo a la pregunta 8 en vez de a propuesta, porque toca el contrato del motor y lo cierra `ingeniero-motor-puzzles`. |
| Disparadores de retorno sin app (insignia en el icono, correo a tu hora, un solo canal) | F17 ya fija un correo al día máximo; la insignia en el icono es fase 3 con `APP-NATIVA`. |
| Español de los dos lados (lista negra léxica bloqueante, dos registros generados) | M13 ya prohíbe la traducción; dos registros regionales contradicen la decisión de "una sola variante al lanzar" del árbol web §5.2. |
| Tablero accesible de serie (teclado, lector de pantalla, color redundante) | **Corrección de la v1.0: NO está cubierta.** M16 cubre el **compartir** accesible, no el tablero, y el patrón **R9 de `resenas-reddit.md`** documenta que ni siquiera el líder es operable con teclado (un desarrollador tuvo que reconstruir sus cartas para poder usar Escape y las flechas). Es cumplimiento del EAA y entra en el MVP como ampliación de M16 por **0,5 persona-semana**: Tab entre celdas, flechas para moverse, Espacio/Enter para marcar, Escape para cerrar la pista, foco visible. No es negociable y no es propuesta: por eso no lleva número PR. |
| Medir la disposición a pagar con dinero real antes de Premium (cuaderno a precio libre, pase fundador) | La única de las diez que me parece que falta de verdad: la convierto en la pregunta 7. |
| Política de cobro y empaquetado (merchant of record, tramos por país, regalo) | Ya es dependencia técnica de `PREMIUM` y trabajo asignado a `estratega-negocio`. |
| Un solo hueco comercial al día ("Parte de Sabueso") | El MVP no tiene anuncios ni Premium: hoy ese hueco es la lista de espera y la newsletter, que ya existen. |

---

## 5. Cambios que propongo al catálogo (no aplicados todavía)

Si el usuario aprueba, esto pasaría a `docs/catalogo-productos.md` v1.2 y se registraría como **D-009** (D-008 queda para la corrección aritmética del escenario Base, ver §8).

> **No apruebes esta lista sola.** La sección 7 (estratega) añadió después siete decisiones más que no están aquí, y esta revisión ha añadido otras seis. **La lista única y consolidada está en §8**; esta sección se conserva para que se vea qué proponía cada parte y en qué momento.

1. **`JUEGO-DIARIO` y F6.** Añadir la ficha técnica visible del caso (número, día de la semana, promesa de unicidad, número de pistas, firma humana) en tarjeta de archivo, cabecera de partida y resultado, con **estado degradado** definido si F2 no alcanza correlación 0,6. **[revisión]** Son **dos fichas**, no una: ficha A con firma humana para el caso del día, el archivo y los packs PDF; ficha B **sin** firma humana para el caso generado bajo demanda (`PREMIUM` ventaja 2, contrarreloj, dificultades y feed de `B2B-MARCABLANCA`); y ficha de estado "anulado". Los tres textos los aprueba `experto-legal` (Ley de Competencia Desleal, arts. 5 y 7) antes de programarlos.
2. **F2 y `docs/diseno/mecanica-escena.md`.** La curva semanal se declara en público y la regla de tope de dificultad entre semana se define sobre el conjunto generado por tamaño, no sobre lo publicado.
3. **Nueva decisión cerrada 16.** *Un caso publicado nunca se sustituye: se anula.* Un número de caso conserva su contenido para siempre en todas las zonas horarias (deriva de la decisión 11). La anulación congela la racha de todos los afectados. **[revisión]** Con las seis reglas de PR2, que forman parte de la decisión: la anulación es del número de caso en todas las zonas; el caso **no se retira**, se marca (quien va por detrás en huso puede jugarlo); **no cuenta para la racha ni para las estadísticas de nadie** y el día se concede a todos; **no genera página del día 8**; sale del feed B2B con la cláusula "anulación con aviso y sin crédito"; y la ficha del caso pasa a estado "anulado". Más la regla de operación: dos revisiones diarias a hora fija, alerta automática con tres reportes coincidentes y **compromiso público de 12 horas, no de minutos** (no hay guardia nocturna).
4. **F18.** El reporte de problema incluye un campo estructurado "qué pista falla", con la lista de pistas del caso. **[revisión]** Y **devuelve respuesta inmediata** en la misma pantalla ("verificado por el motor y por una persona" / "van N personas señalando esta pista"), que es lo que hoy solo da un hilo de Reddit (patrón R2 de `resenas-reddit.md`).
5. **F5 y F11.** La racha se calcula por números de caso consecutivos, no por fechas de servidor; se concede el día automáticamente si el servicio no estuvo disponible; la suite de reloj simulado añade dos escenarios de viaje (este y oeste). **[revisión]** "No disponible" queda definido como criterio de "hecho" de F11: **≥ 20 minutos continuados** de caída del endpoint del caso o del guardado, en cualquier región, declarado por el monitor y **concedido a todos los usuarios**, no solo a la región afectada; las caídas parciales cuentan.
6. **F12 y árbol web §2.6.** `/r/[id]` pasa de "CSR + noindex" a **renderizado en servidor con el caso jugable arriba del pliegue** (sigue `noindex, follow`). Se define el sello **"Impecable"** con reglas públicas y se publica la especificación versionada del texto compartido. **[revisión]** Con las seis reglas de datos de PR4 como criterio de "hecho": identificador no adivinable, cero datos identificativos, caducidad a 30 días, borrado encadenado desde la fila 26 de la matriz (RGPD), imagen OG sin seguimiento y `X-Robots-Tag: noindex` en esa imagen.
7. **M15 y `PDF-CEBO`. [revisión, cambiado]** Se indexa **solo la hoja de trabajo en blanco** (gratis y sin correo). El `PDF-CEBO` se sirve por **enlace firmado con `X-Robots-Tag: noindex`**, fuera del sitemap: indexarlo destruiría la puerta del correo, que es todo su valor. Metadatos, título, autor y nombre de archivo **sin marca ajena** (`arbol-web.md` §3.1). El enlace desde `/juegos-como-murdoku/para-imprimir` queda **condicionado a la luz verde de `experto-legal`** (§3.2.6 del árbol web); si no la hay, se enlaza desde `/para-imprimir`.
8. **`PREMIUM` y F13.** El muro de Premium enumera los casos concretos que faltan; el archivo caducado se queda en el calendario con candado; regla nueva: **el muro no enlaza a la explicación pública de los casos que vende**. **[revisión]** Se añade lo que faltaba: **qué publica la página del día 8** (opción A recomendada: explicación sin la acusación final), porque "el muro no enlaza" no protege nada si la página está indexada en Google.
9. **`/una-sola-solucion`.** Se añade la demostración del motor en vivo como entregable de fase 2 (no MVP).
10. **`B2B-WIDGET`.** Nota de realidad: los cuatro medios españoles objetivo sirven hoy sus juegos desde subdominio propio apuntando a un proveedor externo (verificado por DNS). El piloto del mes 5 debe preguntar por el modo de despliegue antes de fijar precio.
11. **Corrección de una contradicción entre documentos aprobados.** El catálogo (M8, F13, matriz fila 29) dice que la explicación de cada caso se publica como **página indexable el día 8**; `docs/arbol-web.md` §2.1 y §5.3 dicen que `/caso/*/solucion` va con **`noindex, follow` en fase 1** y se reevalúa en el mes 4. Además las rutas no coinciden (`/casos/<n>` frente a `/caso/AAAA-MM-DD/solucion`). Hay que elegir una y corregir el otro documento.
12. **§7 (reparto de trabajo).** Tres tareas nuevas: ficha técnica y curva declarada (`disenador-ux-ui` + `periodista-contenidos`), anulación de caso y campo estructurado de reporte (`desarrollador-backend`), especificación del formato de compartir y sello Impecable (`desarrollador-frontend` + `analista-datos`). **[revisión]** Y cuatro más: textos de las dos fichas y del estado anulado (`periodista-contenidos` + `experto-legal`), reglas de datos de `/r/[id]` (`experto-legal` + backend), tablero operable con teclado (`desarrollador-frontend`), y las tres fuentes primarias al repositorio (`director-producto`).
13. **[revisión] M16, ampliado: tablero y pistas operables con teclado.** Tab entre celdas, flechas, Espacio/Enter para marcar, Escape para cerrar la pista, foco visible. 0,5 persona-semana. Es obligación del *European Accessibility Act* y hoy el catálogo solo cubre el compartir accesible. **No se corta.**
14. **[revisión] Regla nueva y transversal.** Ningún entregable con puerta (correo o pago) se sirve en una URL indexable: siempre enlace firmado con `X-Robots-Tag: noindex`. Aplica a `PDF-CEBO` hoy y a `PDF-CLASICO`, `PDF-AULA`, `PDF-JUNIOR` y `PDF-REGALO` mañana.
15. **[revisión] `docs/investigacion/`.** Tres archivos que faltan y que hacen auditable todo lo anterior: `mapa-110-herramientas.md`, `analisis-12-herramientas.md` y `verificacion-adversarial.md`. Sin ellos, `CLAUDE.md` se incumple y las citas a los jueces no son verificables.
16. **[revisión] Comprobación manual 3 de `oportunidades-resenas.md` §5** (murdoku.com/play: idiomas reales, racha, cadencia, duelos): sigue **abierta y urgente**, y de ella depende que "el hueco del español" sea un hecho o una hipótesis. Cuando se cierre, se unifica la descripción de murdoku.com en este documento, en `funcionamiento-productos.md` §2.2 y en `analisis-estrategico.md` §2.3.
17. **[revisión] Recuperación de racha por esfuerzo** (siete casos seguidos devuelven la racha máxima): **no en el MVP**, atada a H3, 0,25 persona-semana si se activa. Se registra para que no se vuelva a descartar por un coste que no es el suyo.

---

## 6. Preguntas para decidir juntos

Son **nueve**: la 0 y ocho más. La 0 es la única que hay que responder hoy; las demás dependen de ella.

0. **¿Cómo resolvemos que el MVP no cabe: tercera persona, fecha o recorte?**
   El trabajo comprometido son 20,5-24,5 persona-semana y la capacidad es de 8-16 (§7.4.1). No es una opinión, es una resta, y no se arregla cortando piezas de 0,25. Hay tres salidas y no hay una cuarta:
   - **(a) Tercera persona** durante las semanas 3-8. Mantiene la fecha y el alcance; cuesta dinero y una semana de puesta al día.
   - **(b) Lanzar en la semana 11-12** con el alcance entero. Es lo que yo recomiendo si hay que elegir una sola: tres semanas de retraso todavía caen dentro de la ventana de diciembre-enero (regalo y propósitos de año nuevo), que es la mejor ventana de adquisición del año para un producto de hábito. **Seis semanas nos sacan de ella**, y esa es la línea roja.
   - **(c) Recorte a nivel F**, no de propuestas: salir sin modo Expediente ya está decidido (D2), y lo siguiente que se puede aplazar sin romper el producto son las páginas del día 8, la anotación por arrastre y parte de las landings.
   *Recomendación:* **(b), con (a) si el presupuesto lo permite.** Y una regla de decisión escrita antes del dato: **cualquier cosa que empuje el lanzamiento más allá de la semana 12 se corta, sea lo que sea**, incluida cualquier propuesta de este documento.
1. **¿Publicamos el nombre del nivel de dificultad el día 1, aunque F2 no esté validada?**
   *Recomendación:* no. La ficha técnica sale el día 1 sin nombre de nivel ni número de pasos, y la etiqueta se activa cuando la correlación llegue a 0,6. Publicar una etiqueta mal calibrada amplifica el error en vez de esconderlo.
2. **Caso defectuoso: ¿anular o sustituir por uno de reserva?**
   *Recomendación:* anular. Sustituir obliga a que España y México jueguen contenidos distintos bajo el mismo número, que es el fallo que arruinó la comparación en Wordle #284 y que la decisión cerrada 11 prohíbe. Anular es además más barato y no exige subir el banco de casos.
3. **¿Ponemos un percentil gratuito en la pantalla de resultado ("hoy has sido más rápido que el 78 %")?**
   *Recomendación, corregida en esta revisión:* **sí, pero nunca por defecto.** La v1.0 proponía enseñarlo "solo si estás por encima de la mediana", y eso es enseñar solo las buenas noticias: hay que decirlo a la cara. Además choca con el patrón **R6 de `docs/investigacion/resenas-reddit.md`**, que documenta el caso de Puzzmo (a la mitad inferior, por definición, el percentil la desanima) y fija la regla contraria: **el percentil no se muestra por defecto, se ofrece tras "ver comparativa", y siempre acompañado del progreso propio** ("has mejorado tu tiempo medio un 12 % este mes"). Adopto la regla del informe: una línea, sin tabla ni nombres, bajo petición, con progreso propio al lado, e igual para todos. Sigue siendo el gancho social más barato y canibaliza poco de la fila 16, que conserva percentiles por dificultad y mapa de atascos. Coste cero si se decide ahora.
4. **La contradicción `/caso/*/solucion` con `noindex` frente a M8 indexable el día 8: ¿cuál gana, y qué publica exactamente esa página?**
   La v1.0 respondía "gana M8" sin contestar al argumento de `arbol-web.md` §2.1/§5.3 ("indexar soluciones propias canibaliza la partida") ni al del propio estratega ("el archivo es el producto"). Reformulada, la pregunta tiene dos partes.
   *Recomendación (a), qué se indexa:* gana M8 **con la opción A de PR6**: se indexa la página del día 8 con la **explicación del razonamiento hasta el penúltimo paso**, con la técnica nombrada, y sin la acusación final. Sirve la intención de búsqueda, es citable por motores generativos y **deja el caso jugable**, que es lo que Premium vende. Efecto esperado sobre las filas 4-5 de la matriz: cero por construcción.
   *Recomendación (b), qué ruta:* una sola, **`/casos/<n>`** (número de caso, coherente con la decisión cerrada 11 y con PR3: el número es la unidad, no la fecha). Se corrige `arbol-web.md`, que hoy usa `/caso/AAAA-MM-DD/solucion`.
   *Si eliges la opción B* (explicación completa con acusación), hay que aceptar por escrito que PR6 y la hipótesis H2 pierden sentido: no se puede vender un archivo cuya solución publicamos.
5. **El muro personalizado de fase 2: ¿enseñamos los títulos de los casos que faltan?**
   *Recomendación:* sí, en pantalla y solo en pantalla. Nunca por correo ni notificación, y sin enlazar a la explicación pública de esos mismos casos.
6. **Dentro de la respuesta a la pregunta 0, ¿qué entra y qué se aplaza a la semana 9?**
   *Recomendación:* PR3 y PR2 entran sí o sí (poco más de una persona-semana entre las dos, y la ventana de PR3 se cierra al escribir F11). La **accesibilidad de teclado** entra por obligación legal. PR4 entra con el SSR de `/r/[id]` **y sus reglas de datos**; el sello y la especificación publicada se despliegan en la semana 9. PR1 entra **solo la ficha técnica**; la curva declarada espera a que F2 alcance correlación 0,6. PR5 va a la semana 9 con tope del 1 de diciembre. Ninguna de estas decisiones arregla el déficit de la pregunta 0: son el orden de corte una vez respondida.
7. **¿Medimos la disposición a pagar con dinero real antes de construir Premium? Ojo: esto cambia una decisión cerrada.**
   *Recomendación:* sí, con una sola prueba y sin pasarela nueva, **pero no como "un cuaderno nuevo"**. Tal como estaba escrito en la v1.0 rompía dos cosas: la **decisión cerrada 7** del catálogo ("cinco SKU de PDF y ni uno más en 12 meses") y el bloque "Fuera del MVP, sin excepciones: packs PDF de pago". Es exactamente el motivo por el que este mismo documento descarta la línea de aula, así que no puede aplicarse aquí un criterio distinto. Forma correcta:
   - **Es `PDF-CLASICO` adelantado y con precio libre**, no un SKU nuevo: mismo pack, mismo exportador, versión reducida si hace falta, vendido a **precio libre con suelo de 2 €** (con suelo de 1 €, un *merchant of record* con parte fija se lleva el 46 % de la venta).
   - **Es un cambio a una decisión cerrada** y como tal se registra: entra en D-009 con constancia expresa de que altera la decisión cerrada 7 y el bloque "fuera del MVP". Sin ese registro, no se hace.
   - **Fecha corregida.** La v1.0 decía "mes 2", pero con la convención del catálogo (MVP = semanas 1-8, fase 2 = meses 3-6, meses contados desde septiembre de 2026) **el mes 2 cae antes del lanzamiento**, y no se puede medir disposición a pagar sin producto ni tráfico. Va al **mes 3**, el primero después de lanzar. **Convención que fijo para todo el documento: los meses se cuentan desde el inicio del desarrollo, septiembre de 2026 = mes 1, y el lanzamiento cae al final del mes 2.** Toda fecha de aquí en adelante se lee así.
   - **Puerta legal, con veto de `experto-legal`.** Es la primera venta a consumidor del proyecto y necesita, antes de cobrar el primer euro: condiciones de venta; información precontractual (identidad del vendedor, precio total con impuestos, medio de pago, plazo de entrega); **renuncia expresa al derecho de desistimiento** con la casilla y el texto que exige la venta de contenido digital, o el desistimiento se mantiene 14 días; factura e IVA con la respuesta escrita a **quién es el sujeto pasivo** (con Gumroad y con un *merchant of record* la respuesta no es la misma, y de eso depende si hay que darse de alta en OSS); política de reembolsos; y tratamiento de los datos del comprador. Si `experto-legal` no cierra esta lista, **la prueba no se hace** y la disposición a pagar se mide con la lista de espera de precio fundador, que no cobra.
   Motivo de fondo: el ancla de precio del género en España la puso Enigmic con 4,99 € de compra única **[aportado]**, y Clues by Sam sostiene 50.000 jugadores diarios con packs de pago voluntario **[aportado]**. Si la gente compra a precio libre, la suscripción anual tiene sentido; si no, hay que replantear Premium antes de programarlo.
8. **¿Añadimos al motor una validación anti-repetición bloqueante (ningún nombre, lugar u objeto repetido en los últimos N casos, y ninguna combinación de solución reutilizada)?**
   *Recomendación:* sí, como test en `engine/` antes del lanzamiento. Nos cuesta un test; a los competidores con catálogo grande les cuesta la reseña ("las historias son básicamente idénticas, ni se molestan en cambiar los nombres"). Lo decide `ingeniero-motor-puzzles` con `disenador-puzzles` porque toca el contrato del motor.

---

## 7. Impacto en negocio (estratega)

Autor: `estratega-negocio`. Fecha: 6 de septiembre de 2026. Añadido sobre la v1.0 sin tocar las secciones 1-6.
No reabro nada de lo que ya está decidido: doy por aceptados el alcance y las condiciones que fija el director para PR1-PR7. Lo que añado es **cuánto mueve cada una en euros**, con supuestos explícitos y separando lo medido de lo estimado.

**Alerta D-006:** hoy no se cumple ningún disparador, y confirmo la comprobación del director. Pero dos de las propuestas de esta sección empujan hacia B2B (PR1 habilita el pitch, PR7 es la pantalla de venta). **El día que se abra la primera conversación con un medio se cumple el disparador 4 y hay que registrar en la OEPM antes de esa reunión, no después.** Presentarse a un comprador B2B con una marca sin solicitud es regalarle una palanca de negociación y exponerse a que un tercero la presente.

---

### 7.0 Supuestos y aritmética del Base (leer antes que el resto)

Todo lo que sigue se calcula sobre el escenario **Base de `docs/analisis-estrategico.md` §4.4: 50.000 usuarios mensuales**. Supuestos explícitos:

| Variable | Valor | Origen |
|---|---|---|
| Usuarios activos mensuales | 50.000 | Escenario Base **[aportado]** |
| Sesiones/mes | 600.000 (12 por usuario) | Supuesto del propio §4.4 **[aportado]** |
| D30 de la categoría | ≈ 41 % | Benchmark de juegos diarios **[aportado]** |
| Usuarios que resuelven ≥1 caso al mes | 60 % = 30.000 | **[estimado]** |
| Conversión a Premium | 1,2-1,5 % | Objetivo del catálogo (≥1,2 % al mes 9) y §4.4 (1,5 %) **[aportado]** |
| Mezcla anual / mensual | 55 / 45 | Objetivo del catálogo **[aportado]** |
| Cohorte con racha viva > 14 días | ≈ 10 % de la MAU = 5.000 | **[estimado]** |
| Tasa de compartir | ≥ 10 % de los que acusan | Métrica de `JUEGO-DIARIO` **[aportado]** |

**Corrección aritmética que hay que hacer antes de decidir nada.** El §4.4 apunta 2.200 €/mes de Premium para 750 suscriptores. Eso implica ≈2,93 € por suscriptor y mes, es decir, **todo el mundo en plan mensual, sin IVA y sin comisión**. Con la mezcla que el propio catálogo se marca como objetivo:

- Anual 19,99 € IVA incl. → IVA 3,47 € + comisión de *merchant of record* (5 % + ~0,45 €) 1,46 € → **15,06 €/año = 1,26 €/mes netos**.
- Mensual 2,99 € IVA incl. → IVA 0,52 € + comisión 0,61 € → **1,86 €/mes netos**. La parte fija de la comisión hace que el plan mensual pague ~**20 % efectivo**, frente al ~7 % del anual.
- Mezclado 55/45: **1,53 €/mes netos por suscriptor**, no 2,93 €.

| Línea | §4.4 (bruto) | Neto real con los mismos usuarios | Nota |
|---|---|---|---|
| Premium (750 subs) | 2.200 € | **1.148 €** | −48 %: el §4.4 no descuenta IVA ni comisión y supone mezcla mensual |
| Publicidad | 900 € | **400-1.200 €** (uso 700 €) | 600.000 sesiones × 1 anuncio máximo × RPM 1-3 €, ajustado por tasa de consentimiento en España (60-75 %) **[estimado]** |
| PDF | ~400 € | **420 €** | Objetivo del catálogo de 600 €/mes brutos al mes 6, menos IVA y comisión |
| B2B | ~400 € | **450 €** | Un contrato `B2B-WIDGET` |
| **Total** | **~3.900 €** | **≈ 2.720 €** | Menos infra e IA (150-350 €) y el operador editorial diario (150-300 €, ver 7.4) → **margen ≈ 2.100-2.400 €/mes** |

**Registro de esta corrección (revisión).** No es una opinión ni una propuesta: es un error aritmético en un documento aprobado. Queda registrada como **D-008 en `docs/decisiones.md`**, afecta a `docs/analisis-estrategico.md` §4.4 (cuya columna de ingresos pasa a leerse como **bruta**) y a la decisión abierta **D3** del catálogo (el precio de Premium se decide sobre el neto, no sobre el bruto). No espera a que se apruebe nada más.

Esto no cambia ninguna decisión, pero sí el listón: **el Base no es "3.900 €/mes", es "2.200 €/mes de margen"**. Cuando abajo digo que una propuesta vale 180 €/mes, es un 7-8 % de ese margen, no un 4 % de una cifra inflada.

---

### 7.1 (a) Qué mueve cada propuesta recomendada

| Propuesta | Palanca principal | Mecanismo | Benchmark de la herramienta de referencia | Efecto en Base (€/mes) | Confianza |
|---|---|---|---|---|---|
| **PR1** Ficha técnica + curva declarada | Retención (directo) y **adquisición/B2B** (indirecto) | Expectativa correcta el día duro → menos abandono el sábado; "mañana toca suave" → razón para volver. Y convierte F2, que hoy es invisible, en el único argumento de venta que Arkadium no puede igualar | Murdle declara su curva en público **[verificado]**; la queja nº 1 de Connections es no saber si hoy es fácil o difícil **[verificado]**; Enigmic demuestra el techo contrario **[aportado]** | **+150 a +350** por retención **[estimado, confianza baja: no hay dato de elasticidad publicado]**. El efecto grande es habilitar la línea B2B (450-2.250 €/mes con 1-3 contratos) | Baja en el número, alta en el mecanismo |
| **PR2** Anular, nunca sustituir | Protección de ingresos (seguro) | Evita que el peor día del producto cueste rachas + la etiqueta "hecho por IA". Y estructura el reporte, sin lo cual la detección automática de fase 2 no es medible | Murdle mantiene página de erratas y la comunidad repara rachas a mano **[verificado]**; un solo puzzle de NYT rompió 5,6 M de rachas y la única salida es soporte manual **[verificado]** | p(≥1 caso defectuoso en 365) ≈ 0,6-0,8 **[estimado]**; incidente sin gestionar ≈ −3 a −8 % de MAU el mes siguiente ≈ **−90 a −240 €/mes recurrentes**. Valor esperado **+55 a +190** | Media |
| **PR3** Racha por número de caso + día concedido | Retención del cohorte de mayor valor | Elimina la causa de abandono más citada del género actuando sobre el 10 % de usuarios de los que sale ~el 80 % de la conversión a Premium **[estimado]** | LinkedIn pierde rachas europeas por huso **[verificado]**; La Palabra del Día ancla a 05:00 UTC **[verificado en código]**; NYT documenta rachas rotas por viaje y por la caída de AWS **[verificado]** | Salva 50-100 usuarios de alto valor/mes; a 12 meses de acumulación **+45 a +145 €/mes**, pero **multiplicativo sobre las cuatro líneas**, no aditivo sobre una | Media |
| **PR4** `/r/[id]` en SSR + formato versionado + sello | **Adquisición sin coste** | Único canal no-SEO del MVP. Modelo: 30.000 resolutores → 3.000 enlaces → 3.600-6.000 aperturas → apertura→partida 25-35 % en CSR frente a 40-55 % en SSR → 27 % vuelve. Delta ≈ **+220 usuarios/mes**, ≈ +0,4 %/mes compuesto ≈ +5 % de MAU a 12 meses | Los bots de grupo que puntúan Wordle/Murdle existen y se rompen al cambiar el formato **[verificado en GitHub]**; Clues by Sam sostiene 50.000 jugadores diarios con <5 % de tráfico de búsqueda **[verificado]** | **+140 a +180** a 12 meses. Más **valor de opción**: es el instrumento con el que se decide `DUELOS` (K ≥ 0,15), una apuesta de 2-4 persona-semana de fase 2 | Media en el mecanismo, baja en el delta CSR→SSR **[estimado, sin medir]** |
| **PR5** PDF indexable **(revisado a la baja)** | Lista de correo (no ingresos) | Único canal propio de captación de la línea PDF. **Cadena corregida:** se indexa solo la **hoja en blanco**, no el cebo (indexar el cebo elimina la puerta del correo y con ella todo el valor de esta fila), y el PDF **no puede llamarse "murdoku"**, que es justo por lo que rankean los de Orientación Andújar. La hoja capta **sesiones**, y el correo se pide después, dentro de la web: hay un paso más de pérdida | Orientación Andújar: su PDF rankea por delante del post que lo aloja **[verificado, Semrush ES]**; que rankee sin la marca ajena en el título es **[inferido, sin evidencia]** | **+4 a +17 €/mes directos: irrelevante en euros.** Correos esperados: **la mitad baja de la horquilla original, 15-40/mes [estimado]**, por el paso intermedio y por no poder usar la palabra que trae el tráfico | Media en el mecanismo (baja en el volumen), el euro es marginal |
| **PR6** Muro que dice qué te falta | **Conversión** (la única que la toca directamente) | Convierte una oferta abstracta ("archivo completo") en una pérdida concreta y enumerada. Aversión a la pérdida sobre un progreso ya acumulado | NYT codifica el progreso del archivo sin spoiler **[verificado]**; Sudoku.com convierte el calendario en objetivo **[verificado]**; demanda medida de archivo: "murdle archive" 210/mes + "murdle unlimited" 170/mes **[verificado]** | Con el efecto mínimo prerregistrado (+20 % relativo): 1,2 % → 1,44 % = +120 subs = **+184 €/mes netos**, +16 % de la línea Premium, **acumulativo sobre cada cohorte nuevo** | Media |
| **PR7** Motor en vivo | Venta B2B y prensa | Pantalla con la que se demuestra lo que nadie más puede demostrar | Ningún competidor lo hace **[aportado; el mapa no está en el repositorio y no cubre los generadores de código abierto, categoría (e) de §2.3, que es justo donde puede haber algo parecido]** | **0 € directos.** 1,5-2 persona-semana = 12-25 % de toda la capacidad del MVP; a coste de oportunidad equivale a 4-5 meses de un contrato B2B | Baja |

**Suma de PR2+PR3+PR4+PR6: 420-700 €/mes ≈ 15-25 % del margen Base, por ≈1,75 persona-semana.** Es una relación excelente. Pero conviene decirlo entero: **ninguna de las siete cambia el orden de magnitud del negocio.** Lo que decide si el Base existe es (1) llegar a 50.000 usuarios antes de que se cierre la ventana, (2) que Premium convierta al 1,2 % y no al 0,6 %, y (3) que se firme 1 o 3 contratos B2B. Estas propuestas son ajustes del 5-20 % sobre una cuenta de resultados que determina la adquisición. **Ese hecho es el que ordena mi prioridad en 7.5.**

---

### 7.2 (b) Las tres que más mueven el Base

**1. PR6 — el muro que enumera lo que falta.** Es la única que toca la variable de conversión, y la conversión es el multiplicador de la línea más grande. +184 €/mes netos con el efecto mínimo detectable que el propio director prerregistra, y crece con cada cohorte nuevo y con la edad del archivo: en el mes 24 la misma pantalla dice "te faltan 600 casos". Coste 0,5 persona-semana en fase 2. Es la mejor relación euro/esfuerzo del documento.
*Condición de negocio que añado:* su potencia escala con la antigüedad del jugador. En el mes 4, a un usuario de tres semanas el muro le dice "te faltan 14 casos", que no es una oferta. **El test hay que segmentarlo por antigüedad y no se puede juzgar antes del mes 3 de Premium.**

**2. PR3 — la racha anclada al número de caso.** No es la que más euros aporta en línea recta, pero es la única cuyo efecto es **multiplicativo**: actúa sobre el cohorte del que sale la conversión a Premium, y la MAU que protege alimenta a la vez publicidad, PDF y el argumento de venta B2B. Además tiene una consecuencia de precio que nadie ha escrito todavía: **sin PR3, la ventaja 6 de Premium ("congelar racha") es vender la solución a un fallo nuestro.** Es exactamente la trampa de la energía de Duolingo, que su propia dirección asocia a la desaceleración de usuarios **[verificado en la carta a accionistas]**. PR3 es la condición para que congelar racha sea una ventaja legítima y no una extorsión.

**3. PR4, pero solo el SSR de `/r/[id]`.** Es la única propuesta que produce **usuarios gratis** y la única que reduce, aunque sea al margen, la concentración del 70-80 % de la adquisición en SEO sobre una marca ajena. Y tiene valor de opción: sin medir apertura→inicio, `DUELOS` se construye a ciegas en fase 2. 0,25-0,3 persona-semana de las 0,5 que cuesta PR4 entera.

**Por qué PR1 y PR2 no están aquí y siguen entrando.** PR2 no mueve el Base: lo protege, y su valor está en la varianza, no en la media (el riesgo nº 1 del proyecto es la etiqueta "hecho por IA"). PR1 tampoco mueve el Base: mueve el **Bueno** y sobre todo la línea B2B, que es donde 1.350-2.250 €/mes dependen de tener un argumento que Arkadium no pueda igualar.

---

### 7.3 (c) Lo que cambia el modelo de precios o las líneas de ingreso

**PR6 cambia cómo se vende Premium, y con ello el riesgo de churn.** Un muro de archivo atrae al comprador "me pongo al día y me voy": paga un mes, se ventila 40 casos y cancela. Tres consecuencias operativas:
1. En esa pantalla concreta, **el plan anual va como opción por defecto** (el mensual sigue existiendo, pero no lidera). Es lo que hace que el precio anual retenga, que es su función.
2. **Medir el churn segmentado por origen de la conversión** (muro / lista de espera / otras). Si el convertido por muro churna por encima del 12 % mensual, el muro está vendiendo un consumible, no una suscripción, y entonces el producto correcto es un pago único de acceso al archivo, no una suscripción. Eso sería un SKU nuevo y exige decisión del usuario: lo señalo, no lo abro.
3. PR6 confirma que **el archivo (filas 4-5 de la matriz) es el producto**, y las otras diez ventajas son relleno de percepción. La demanda medida lo dice: 380 búsquedas/mes de "archive" + "unlimited", cero de "stats". La lista de 12 ventajas debería reordenarse para que el archivo abra, no cerrar con él.

**PR1 y PR2 cambian la línea B2B, que es donde más euros por unidad de esfuerzo hay.** PR1 le da a `B2B-WIDGET` el único argumento defendible frente al incumbente (unicidad demostrable + dificultad medida + firma humana); sin él vendemos "otro widget de pasatiempos" contra un proveedor ya desplegado por CNAME en los cuatro medios objetivo. PR2 aporta la cláusula que hace **firmable** un SLA: qué pasa el día que un caso está mal. Recomendación concreta para el contrato: **anulación con aviso y sin crédito económico**, para que una errata no genere una obligación de devolución; hoy el SLA promete publicación diaria sin decir qué ocurre si lo publicado es defectuoso.

**PR5 es lo único que alimenta la línea PDF, y llega tarde en el calendario.** Señalo una incoherencia con consecuencia en caja, para que la decida el director: `PDF-REGALO` se describe como "campaña noviembre-diciembre" pero está en fase 3, mes 7 — que contando desde septiembre de 2026 cae en marzo-abril de 2027. O se adelanta a diciembre de 2026 (el exportador ya existe para `PDF-CLASICO`; el incremento es la portada personalizable, ≈0,5 persona-semana) o se pierde su única ventana y espera a noviembre de 2027. Con margen cercano al 100 % y estacionalidad de regalo, es la decisión de calendario más cara que hay abierta en el catálogo.

**Pregunta 7 (cuaderno a precio libre): sí, y con el criterio escrito antes del dato.** Es lo único de todo el documento que cambia la *base de evidencia* del precio, y por eso vale más que cualquier propuesta de producto. **Corregido en la revisión:** no es un cuaderno nuevo sino **`PDF-CLASICO` adelantado a precio libre** (la decisión cerrada 7 no admite un sexto SKU), va en el **mes 3** —el mes 2 cae antes del lanzamiento con la convención del catálogo— y **no se hace sin la lista legal de venta a consumidor cerrada por `experto-legal`** (condiciones de venta, información precontractual, renuncia al desistimiento en contenido digital, factura, IVA y sujeto pasivo, reembolsos). Prueba en el mes 3, ≥1.000 visitas a la página del pack:

| Resultado | Lectura | Decisión |
|---|---|---|
| ≥2,5 % compra **y** precio mediano elegido ≥3,00 € | Hay disposición a pagar real | Premium anual a 19,99 € defendible; se programa la pasarela si además se cumplen las tres condiciones del catálogo |
| 1,0-2,5 % **o** mediana 1,50-3,00 € | Hay disposición, pero baja | Premium sale **solo anual** a 14,99 €, sin plan mensual (el mensual a 2,99 € paga 20 % de comisión y no retiene), y se sube el peso de PDF y B2B |
| <1,0 % **o** mediana ≤1,50 € | No hay disposición a pagar por suscripción en este público | **No se programa Premium en 12 meses.** El negocio es PDF + B2B + publicidad. Replantear antes de escribir una línea de pasarela |

Dos precisiones fiscales y de pasarela para esa prueba: (a) con precio mínimo de 1 €, un *merchant of record* con parte fija (~0,45 €) se come el 46 % de la venta, así que **el suelo se fija en 2 €**; para tickets de 1-3 € conviene una pasarela de comisión solo porcentual (~10 %) **[tarifas públicas, no reverificadas en esta ronda; la categoría (d) de §2.3 existe para cerrar este dato antes de la prueba]**; (b) sea cual sea, el *merchant of record* asume el IVA de la UE y evita darse de alta en OSS por una prueba de dos semanas — **pero eso es una afirmación fiscal, no de producto, y la confirma `experto-legal` por escrito antes de cobrar**, incluida la respuesta a quién es sujeto pasivo con Gumroad, que no opera igual que Paddle o Lemon Squeezy.

**Pregunta 3 (percentil gratuito): sí, y no canibaliza.** La fila 16 de la matriz (estadísticas avanzadas) no es lo que la gente compra: la demanda medida es de archivo y de casos ilimitados, no de estadísticas. Regalar una línea de percentil cuesta una fracción pequeña de una fila que no cierra ventas y compra el mecanismo viral más barato que hay en el dossier. **Nota de coherencia (revisión):** el argumento de negocio no cambia con la corrección de la pregunta 3 —el percentil bajo petición sigue sin canibalizar—, pero el mecanismo viral es más débil de lo que suponía esta línea, porque lo que no se enseña por defecto no se comparte solo. El efecto se mide dentro de H1, no aparte.

---

### 7.4 (d) Riesgos de negocio de incluirlas

**1. Dilución del foco: el presupuesto no cuadra, y es aritmética, no opinión.** El MVP son 8 semanas × 1-2 personas = **8-16 persona-semana de capacidad total**. Los incrementos ya aceptados en D-007 son 7,25 y estos añaden **3,1 tras la revisión** (2,25 + 0,25 de la alerta de reportes + 0,1 de las reglas de datos de `/r/[id]` + 0,5 del teclado, que es obligación legal): **10,35 persona-semana solo de incrementos**, antes de contar F1-F19 (motor, solver, 60 casos, 8 landings, PWA, analítica, legal), que no bajan de 10-14 **[estimado]**. Total ≈**20,5-24,5** frente a 8-16. **Déficit del 30-65 % incluso con dos desarrolladores.** La conversación útil no es "¿cortamos PR5 o el sello Impecable?" (0,25 persona-semana cada uno, ruido frente al déficit), sino: tercera persona, fecha de lanzamiento en la semana 11-12, o recorte a nivel F. **Esto es ahora la pregunta 0 de §6 y la primera fila de la portada de decisiones**, que es donde tenía que haber estado desde la v1.0. Y esa decisión tiene precio: la ventana estimada es de 6-12 meses desde septiembre de 2026 **[aportado]**, y diciembre-enero es la mejor ventana de adquisición del año para un producto de hábito (regalo + propósitos de año nuevo). Retrasar tres semanas cabe; retrasar seis nos saca de ella. **Aviso honesto:** no puedo cuantificar esa estacionalidad con datos propios, porque la serie de "murdoku" solo tiene cuatro meses de vida (149 → 44.000 visitas de mayo a agosto de 2026) y no tiene historia estacional; estaría aplicando la estacionalidad general de la categoría de pasatiempos **[inferido]**.

**2. Coste de contenido recurrente, que no está presupuestado.** Tres de las propuestas crean obligaciones diarias, no entregables:
- PR1: declarar la curva obliga a que el sábado **sea** de verdad el más difícil, todos los sábados. Si F2 no llega a correlación 0,6, la curva declarada es una promesa que incumplimos a diario, que es peor que no decir nada.
- PR2: la página de erratas y la bandeja de reportes exigen revisión diaria.
- PR6: los títulos concretos del muro tienen que ser atractivos y sin spoiler, es decir, un estándar de copy sobre cada caso.
Coste conjunto: 15-30 minutos diarios de curación humana ≈ **150-300 €/mes equivalentes [estimado]**, que son un 7-14 % del margen Base y que ninguna proyección incluye hoy. Es dinero bien gastado, pero hay que meterlo en el modelo.

**3. Riesgo de promesa (el más subestimado), y es también jurídico.** PR1 y PR2 convierten calidad interna en **promesa pública**. Una promesa pública es un activo mientras se cumple y un pasivo el día que se rompe, y el coste de romperla es mayor que el de no haberla hecho nunca — precisamente porque nuestro público objetivo es la cohorte quemada por las erratas del papel. **Añadido en la revisión:** una afirmación pública sobre las características de lo que vendemos es **publicidad**, y le aplican los arts. 5 (actos de engaño) y 7 (omisiones engañosas) de la Ley de Competencia Desleal. "Resuelto por una persona antes de publicarse" en un caso generado bajo demanda no sería solo una promesa incumplida: sería una afirmación falsa sobre una característica del producto, y la consecuencia no es reputacional sino sancionable. De ahí las dos fichas de PR1 y el veto de `experto-legal` sobre su texto exacto. Mitigación: publicar solo lo que F1/F3 pueden demostrar hoy (unicidad, cero pistas redundantes y, **solo donde es cierto**, firma humana) y dejar fuera lo que depende de F2 hasta que F2 esté validada. De ahí mi división de PR1 en 7.5.

**4. Dependencia de terceros.**
- PR4 publica una especificación de la que dependen bots de Telegram/WhatsApp que no controlamos: si se abandonan, el efecto desaparece; si la cambiamos, la comunidad se queja (es el fallo documentado de LinkedIn). Mitigación barata: publicarla como v1 con **compromiso explícito de estabilidad** (sin cambio incompatible sin 30 días de aviso y subida de versión). Eso convierte la dependencia en activo reputacional. Depende además del renderizado y del caché de vista previa de WhatsApp y Telegram, que cambian sin avisar.
- PR5 depende de que Google siga indexando PDF como documentos independientes **y, tras la revisión, de dos cosas más: que la hoja en blanco rankee sin llevar la marca ajena en el título (que es justo lo que hace rankear a los PDF del competidor docente) y de que `experto-legal` autorice `/juegos-como-murdoku/para-imprimir`**. Cuesta 0,25 persona-semana: riesgo asumible, expectativa menor.
- PR6 depende de que Premium exista, y Premium está condicionado a tres umbrales. Es trabajo de fase 2 con probabilidad de no ejecutarse.
- Y la dependencia que **ninguna** de las siete reduce: el 70-80 % de la adquisición prevista viene de SEO sobre el término de marca de un tercero. Un movimiento de Google contra las páginas "marca ajena + online", o el lanzamiento de un producto digital serio en español por parte de Planeta/Garand, pone esa línea a cero. PR4 es la única que abre un canal alternativo, aunque sea pequeño. **Es el argumento más fuerte para subirla de prioridad.**

---

### 7.5 (e) Mi orden de prioridad, y en qué difiere

> **Cerrado en la revisión.** Esta tabla dejaba dos órdenes vivos, el del director y el del estratega, y eso no es una recomendación: es un empate. **El director adopta el orden del estratega** —el argumento de la ventana es mejor que el RICE pieza a pieza— y el ranking único, ya sin columnas, está en **§8**. La tabla se conserva para que se vea de dónde viene cada cambio.

| Puesto | Director (v1.0) | Estratega (adoptado) | Motivo del cambio |
|---|---|---|---|
| 1 | PR1 | **PR3** | Cuesta 0,5 persona-semana, su ventana se cierra al escribir F11 (después se multiplica el coste), protege el cohorte del que sale la conversión y es la condición para que "congelar racha" sea una ventaja legítima de Premium y no la venta de un fallo propio. |
| 2 | PR2 | **PR2** (igual) | El seguro más barato contra el riesgo nº 1 del proyecto, y la cláusula sin la cual un SLA B2B no es firmable. |
| 3 | PR3 | **PR4, solo el SSR de `/r/[id]`** | El director la pone cuarta y primera candidata a caer. Es la única que produce usuarios gratis, la única que abre un canal fuera del SEO de marca ajena y el instrumento con el que se decide `DUELOS`. Corto el sello y la especificación publicada (que es donde vive la dependencia de terceros), **nunca el SSR**. |
| 4 | PR4 | **PR1, solo la ficha técnica; la curva declarada espera a F2** | El director acepta un estado degradado; yo voy un paso más allá: la curva semanal no se publica hasta que la correlación llegue a 0,6. Declarar "el sábado es el más difícil" y fallar es el fallo exacto que castiga nuestro público objetivo, y crea una obligación editorial diaria permanente. La ficha ("una sola solución comprobada · N pistas, ninguna sobra · resuelta por una persona") sí entra el día 1: cuesta ~0,4 persona-semana y es el argumento de prensa y de B2B. |
| 5 | PR5 | **PR5, con fecha: antes del 1 de diciembre** | De acuerdo en la semana 9, pero con anclaje de calendario: es el único canal de captación de la línea PDF y la ventana de regalo es diciembre. Sin esa fecha se desliza a enero y pierde su año. |
| 6 | PR6 (fase 2) | **PR6 (fase 2)**, con segmentación por antigüedad y anual por defecto | Igual en el puesto, con las dos condiciones de negocio de 7.2 y 7.3. |
| 7 | PR7 (fase 2) | **PR7 condicionada al primer contacto B2B real** | 1,5-2 persona-semana es el 12-25 % de la capacidad del MVP y su beneficio es una pantalla de venta. Solo se paga sola si B2B existe: se construye en el mes previo al piloto, o después de la primera conversación, nunca antes. |
| — | PR8 y PR9: no | **Igual: no** | De acuerdo con los dos descartes y con registrar el hallazgo de DNS. |

**El argumento que ordena todo lo anterior:** como estas propuestas valen entre el 5 % y el 20 % de la cuenta de resultados y la ventana vale el 100 %, el criterio de corte no debe ser el RICE de cada pieza sino **el impacto sobre la fecha de lanzamiento**. Todo lo que cabe sin mover la fecha, entra; lo primero que empuje la fecha más allá de la semana 11, fuera, sea lo que sea.

---

### 7.6 Hipótesis falsables, con umbral y fecha

Se escriben antes del dato para no reinterpretarlas después.

| # | Hipótesis | Umbral de refutación | Fecha | Qué se hace si se refuta |
|---|---|---|---|---|
| H1 | El compartir es un canal de adquisición | Apertura de `/r/[id]` → primera celda **< 30 % de las aperturas medibles**, con el ajuste de consentimiento de la nota de abajo | Mes 3 | No se construye `DUELOS` en fase 2; los recursos van a SEO y PDF |
| H2 | El muro concreto convierte mejor que el genérico | Alza < 20 % relativo con 1.500-4.000 vistas por rama, segmentado por antigüedad | Mes 3 de Premium, no antes | Se revierte al muro genérico y se deja de invertir en personalización del muro |
| H3 | Las rachas rotas por causa no imputable al jugador son residuales | > 2 % de las rachas rotas al mes | Mes 3 | PR3 se queda corto: se añade la **recuperación por esfuerzo** (siete casos seguidos devuelven la racha máxima), que cuesta **0,25 persona-semana suelta**, no las 2-3 del paquete con el que se descartó |
| H4 | Hay disposición a pagar en este público | < 1,0 % de compra o mediana ≤ 1,50 € en `PDF-CLASICO` a precio libre (suelo 2 €) | **Mes 3** (corregido: el mes 2 es anterior al lanzamiento) | No se programa Premium en 12 meses (ver tabla de 7.3) |
| H5 | La política de anulación es una excepción, no la norma | ≥ 2 casos anulados en 90 días | Mes 3 | El problema no es la política sino F1/F3: se para la publicación diaria hasta arreglarlo |
| H6 | El mensual a 2,99 € es viable con *merchant of record* | Comisión efectiva > 18 % durante 3 meses seguidos | Mes 3 de Premium | Se retira el plan mensual o se sube a 3,49 €, o se pasa a pasarela directa con alta en OSS |

> **Nota de la revisión sobre H1: qué se puede medir y con qué consentimiento.** H1 mide "apertura → primera celda" en **personas que llegan de fuera y todavía no han visto nuestro aviso de cookies**. Según la guía de cookies de la AEPD, solo la **medición de audiencia agregada, de primera parte y con condiciones estrictas** (finalidad exclusivamente estadística, sin cruce con otros tratamientos, sin seguimiento entre sitios, datos agregados) queda exenta de consentimiento; todo lo demás exige aceptación previa. Dos formas de hacerlo bien, y hay que elegir una **antes** de instrumentar:
> - **(a) Medición exenta.** Contador propio, agregado, sin identificador persistente y sin cruzarlo con el perfil del usuario: cuenta aperturas de `/r/[id]` y primeras celdas del mismo modo. Es el diseño que recomiendo, porque mide a todo el mundo y el umbral del 30 % se lee tal cual.
> - **(b) PostHog tras el consentimiento.** Entonces solo se ve a quien acepta, y **el umbral del 30 % hay que corregirlo por la tasa de aceptación**: con la misma horquilla de 60-75 % que §7.0 usa para la publicidad en España **[estimado]**, un 30 % real se observa como 18-22,5 %. Comparar el observado con el 30 % sin corregir sería refutar H1 por un artefacto de consentimiento.
> Lo cierra `analista-datos` con `experto-legal` antes de F15.

**Lo que sigo sin poder medir y cómo obtenerlo.** El delta CSR→SSR en apertura→partida (H1 lo resuelve con dato propio en el mes 3); la elasticidad retención/curva declarada (no hay benchmark publicado: solo cabe un antes-después sobre la tasa de retorno el domingo tras fallar el sábado); y la estacionalidad de diciembre para este término (la serie es demasiado joven; se aproxima con la categoría general de pasatiempos en Semrush ES, marcándolo como aproximación). Lo coordino con `analista-datos` cuando F15 esté instrumentado.

---

## 8. Recomendación final única (esto es lo que se aprueba)

Autor: `director-producto`, tras la sección del estratega y la revisión externa. **Sustituye a la §5 de la v1.0 y a las dos columnas de §7.5.** Si algo de las secciones anteriores contradice a esta, gana esta.

### 8.1 Un solo ranking

Criterio de orden, adoptado del estratega: **estas propuestas valen entre el 5 % y el 20 % de la cuenta de resultados y la ventana de lanzamiento vale el 100 %**, así que ordena el impacto sobre la fecha, no el RICE de cada pieza.

| Puesto | Qué entra | Alcance exacto | Coste | Cuándo |
|---|---|---|---|---|
| **1** | **PR3** Racha por número de caso + día concedido | Las tres reglas, más la definición de "no disponible" (≥ 20 min, cualquier región, concedido a todos) | 0,5 p-s | MVP, **antes de escribir F11** |
| **2** | **PR2** Anular, nunca sustituir | Las seis reglas de anulación + campo estructurado + respuesta inmediata al reportar + alerta de tres reportes coincidentes + compromiso de 12 h | 0,5-0,75 p-s | MVP |
| **3** | **Accesibilidad de teclado del tablero** (no es propuesta, es EAA) | Tab, flechas, Espacio/Enter, Escape, foco visible. Amplía M16 | 0,5 p-s | MVP, **no se corta** |
| **4** | **PR4** solo el SSR de `/r/[id]` + reglas de datos | SSR con caso jugable arriba del pliegue, `noindex, follow`, identificador no adivinable, caducidad 30 días, borrado encadenado, OG sin seguimiento | 0,35 p-s | MVP. El sello "Impecable" y la especificación publicada, semana 9 |
| **5** | **PR1** solo la ficha técnica (dos fichas + estado anulado) | Sin nombre de nivel ni pasos hasta que F2 llegue a 0,6; sin "firma humana" en casos generados bajo demanda; textos aprobados por `experto-legal` | 0,4 p-s | MVP. La curva declarada, cuando F2 esté validada |
| **6** | **PR5** PDF indexable, corregido | Se indexa solo la hoja en blanco; `PDF-CEBO` por enlace firmado y `noindex`; metadatos sin marca ajena; `/juegos-como-murdoku/para-imprimir` con luz verde legal | 0,25 p-s | Semana 9, **tope 1 de diciembre** |
| **7** | **PR6** El muro dice qué te falta | Con candado en el calendario, plan anual por defecto en esa pantalla, segmentación por antigüedad y decisión previa sobre la página del día 8 | 0,5 p-s | Fase 2, con Premium |
| **8** | **PR7** Motor en vivo | Generador reducido 3×3 en el navegador | 1,5-2 p-s | **Condicionada al primer contacto B2B real**, nunca antes |
| — | **PR8** (álbum de sellos) y **PR9** (B2B por CNAME) | No se hacen | — | Se reabren solo con señal medida propia |

**Y antes que todo lo anterior, la pregunta 0:** nada de esta tabla cabe sin decidir capacidad y fecha. Regla escrita antes del dato: **lo que empuje el lanzamiento más allá de la semana 12 se corta, sea lo que sea.**

### 8.2 Lista consolidada de cambios (la única que hay que aprobar)

Incluye los 17 puntos de §5 **y las siete decisiones que el estratega añadió en §7 y que no estaban en ninguna lista**. Si se aprueba, se registra como **D-009** y sale `docs/catalogo-productos.md` v1.2.

| # | Cambio | Qué documento toca | Origen | Puerta |
|---|---|---|---|---|
| 1-17 | Los diecisiete puntos de §5 | Catálogo, árbol web, `mecanica-escena.md` | Director + revisión | `experto-legal` en los puntos 1, 7 y 14 |
| 18 | **Plan anual por defecto** en la pantalla del muro de Premium (el mensual sigue existiendo, pero no lidera) | `PREMIUM`, D3 | Estratega §7.3 | — |
| 19 | **Churn segmentado por origen de conversión** (muro / lista de espera / otros); si el convertido por muro churna > 12 % mensual, el producto correcto es un pago único de acceso al archivo, no una suscripción | Métricas de `PREMIUM`, `docs/analitica/eventos.md` | Estratega §7.3 | `analista-datos` |
| 20 | **Reordenar las 12 ventajas de Premium** para que el archivo abra la lista (380 búsquedas/mes de "archive" + "unlimited", cero de "stats") | `PREMIUM` | Estratega §7.3 | — |
| 21 | **Cláusula de SLA "anulación con aviso y sin crédito económico"** | `B2B-WIDGET` y `B2B-MARCABLANCA` | Estratega §7.3 | `experto-legal` |
| 22 | **Adelantar `PDF-REGALO` a diciembre de 2026** (hoy está en fase 3, mes 7 = marzo-abril de 2027, fuera de su única ventana) o asumir que espera a noviembre de 2027 | Catálogo §1.3, fases | Estratega §7.3 | Decisión del usuario, coste ≈0,5 p-s |
| 23 | **Revisar el plan mensual de 2,99 €** si su comisión efectiva supera el 18 % tres meses seguidos: retirarlo, subirlo a 3,49 € o pasar a pasarela directa con alta en OSS | `PREMIUM`, D3 | Estratega, H6 | `estratega-negocio` + `experto-legal` |
| 24 | **Corrección aritmética del escenario Base**: 2.200 € brutos ≠ 1.148 € netos; el Base es "2.200 €/mes de margen", no "3.900 €/mes" | `analisis-estrategico.md` §4.4 y D3 | Estratega §7.0 | **Ya registrada como D-008**: es un error, no una preferencia |
| 25 | **`PDF-CLASICO` adelantado a precio libre** (suelo 2 €, mes 3) como prueba de disposición a pagar | Catálogo §1.3, decisión cerrada 7, bloque "fuera del MVP" | Pregunta 7 | **Veto de `experto-legal`**: sin la lista de venta a consumidor cerrada, no se hace |

### 8.3 Lo que queda pendiente y bloquea

1. **Las tres fuentes primarias al repositorio** (`mapa-110-herramientas.md`, `analisis-12-herramientas.md`, `verificacion-adversarial.md`), con commit. Bloquea la aprobación de §8.2.
2. **Comprobación manual 3** (murdoku.com/play). Decide si el hueco del español es un hecho. Media hora del fundador.
3. **Categorías (b), (c) y (d) de §2.3**: la (d) bloquea la pregunta 7.
4. **Este documento no está en el índice de versiones ni commiteado.** Hasta que lo esté, no existe para el proyecto.

---

## 9. Notas de revisión (qué se ha aplicado y qué no)

Un revisor externo entregó doce correcciones sobre la v1.0. **Diez se aplican enteras, dos se aplican en parte.** Ninguna se descarta por completo, pero tres tienen matices que conviene leer.

| # | Corrección | Estado | Nota |
|---|---|---|---|
| 1 | La premisa sobre murdoku.com está sin verificar y contradice dos documentos | **Aplicada** | Reetiquetada como [inferido], aviso en §2.1, comprobación 3 mantenida abierta. **No se ha unificado la descripción en los tres documentos**, y es deliberado: unificar sin haber mirado la web sería elegir una versión por comodidad. Se unifica el día que se haga la comprobación. |
| 2 | Las fuentes primarias no están en el repositorio | **Aplicada en parte** | Se aplican la normalización de etiquetas ("[verificado, Vox vía dossier]" y "[verificado en su ayuda, cita indirecta]" pasan a **[aportado]**), el aviso de trazabilidad de la cabecera y la remisión de la alerta de "Sabueso" a `docs/legal/anterioridades-sospechario.md`. **No se han escrito los tres archivos**: reconstruir de memoria 110 fichas, 12 análisis y los veredictos de tres jueces sería fabricar evidencia, que es exactamente lo que la corrección denuncia. Quedan como entregable bloqueante en §8.3. **Tampoco se ha hecho commit**: esta sesión no tiene acceso a git; lo hace el usuario o la sesión que lo tenga. |
| 3 | El cuaderno a precio libre rompe el catálogo y el calendario | **Aplicada** | Reformulado como `PDF-CLASICO` adelantado a precio libre, con suelo de 2 €, registrado como cambio a la decisión cerrada 7, con veto de `experto-legal` y lista legal completa. Convención de meses fijada: **se cuentan desde el inicio del desarrollo (septiembre de 2026 = mes 1)**, que es la del catálogo; por eso la prueba pasa del mes 2 al mes 3. Se ha preferido esta convención a "desde el lanzamiento" para no crear una tercera forma de contar. |
| 4 | La "firma humana" es imposible en dos productos | **Aplicada** | Dos fichas (A con firma humana, B sin ella), ficha de estado anulado, y el texto exacto sometido a `experto-legal` por la Ley de Competencia Desleal. |
| 5 | Indexar el `PDF-CEBO` destruye su propia puerta | **Aplicada** | Se indexa solo la hoja en blanco; el cebo va por enlace firmado con `X-Robots-Tag: noindex`; metadatos sin marca ajena; `/juegos-como-murdoku/para-imprimir` con puerta legal. La expectativa de correos se ha bajado de 35-80 a 15-40/mes en §7.1: la corrección tiene coste, y se dice. |
| 6 | Se vende el archivo mientras se publica su solución | **Aplicada** | Decidido: opción A (explicación sin la acusación final), con la opción B descrita y su coste. La pregunta 4 se ha reescrito entera y ahora también fija la ruta (`/casos/<n>`). |
| 7 | `resenas-reddit.md` no se cita y colisionan los identificadores | **Aplicada** | Propuestas renombradas a **PR1-PR9**; informe citado en PR2, PR3, pregunta 3 y §4; pregunta 3 reconciliada con su R6 (nunca por defecto, siempre con progreso propio); recuperación por esfuerzo recosteada a 0,25 p-s y atada a H3; teclado añadido a §5, §8 y al coste total. |
| 8 | Faltan datos personales y consentimiento en PR4 y H1 | **Aplicada** | Seis reglas de datos en PR4 (incluido el borrado encadenado desde la fila 26 de la matriz) y rediseño de H1 con las dos opciones: medición exenta o umbral corregido por la tasa de aceptación. |
| 9 | Los cambios del estratega se perderían al aprobar §5 | **Aplicada** | Nueva §8 con ranking único y lista consolidada de 25 puntos; §7.5 marcada como cerrada; la corrección aritmética del Base registrada como **D-008** en `docs/decisiones.md`, sin esperar aprobación, porque es un error y no una preferencia. |
| 10 | La conclusión grave está enterrada, los números no cuadran, falta glosario | **Aplicada** | Déficit de capacidad al principio del resumen y como **pregunta 0**; portada "qué decides hoy"; glosario §0.1; "nueve preguntas" ahora es cierto (0 a 8); el desajuste 98/105 fichas se declara **sin conciliar** en vez de elegir un número. |
| 11 | Huecos de lógica en PR2 y PR3 | **Aplicada** | Seis reglas de anulación con la semántica de husos, definición de "no disponible", y "de días a **horas**" con compromiso público de 12 h en vez de una guardia nocturna que nadie va a hacer. |
| 12 | Cinco categorías de herramientas sin cubrir | **Aplicada en parte** | Añadida §2.3 con las cinco categorías, candidatos nombrados, por qué importan, responsable y fecha. **Sin cifras y sin fichas completas**: en esta sesión no se pudo verificar nada (WebSearch agotado 200/200, Semrush sin unidades de API). Prometer dos fichas documentadas por categoría habría sido inventarlas. La categoría (d) queda como bloqueante de la pregunta 7. |

**Una discrepancia que dejo anotada, no resuelta.** El revisor da por hecho que la propuesta afirmaba cosas falsas sobre murdoku.com. Puede que sí y puede que no: lo único demostrable hoy es que **la evidencia no daba para afirmarlo**, que es un problema distinto y el que se ha corregido. Si al abrir la web resulta que no hay español ni caso diario, la v1.0 tenía razón y quien tendrá que corregirse es `funcionamiento-productos.md` §2.2. Esa comprobación sigue sin hacerse y ya es la tarea abierta más rentable del proyecto.

---

*Este documento no modifica el catálogo. Si el usuario aprueba total o parcialmente la **sección 8**, `director-producto` registra **D-009** en `docs/decisiones.md` y publica `docs/catalogo-productos.md` v1.2. La corrección aritmética del escenario Base no espera a esa aprobación: ya está registrada como D-008.*
