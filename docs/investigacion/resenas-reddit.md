# Reddit: pasada exhaustiva sobre r/murdle, r/murdoku y comunidades afines

Autor: agente de investigación (encargo de `director-producto`). Fecha: 6 de septiembre de 2026. Versión 1.0.
Documentos previos que este informe **no repite**: `docs/investigacion/resenas-apps-web.md`, `docs/investigacion/resenas-libros-comunidad.md`, `docs/oportunidades-resenas.md` (patrones P1-P25 y cambios M1-M16).

---

## 0. Aviso obligatorio sobre la calidad de la evidencia

**No se ha podido leer ni un solo hilo de Reddit.** Antes de usar cualquier cosa de este documento hay que saber exactamente qué canal funcionó y cuál no:

| Canal probado | Resultado |
|---|---|
| `WebSearch` con `site:reddit.com/r/murdle …`, `site:reddit.com/r/murdoku …`, `site:reddit.com …` (18 consultas) | **Cero URLs de reddit.com** en todas. El buscador devuelve páginas de Goodreads, Wikipedia, itch.io o tiendas. Cuando se fuerza el filtro de dominio, el propio servicio responde: *«The following domains are not accessible to our user agent: ['reddit.com']»*. Es decir, **reddit.com está excluido del índice del buscador**, no solo bloqueado para descarga. |
| `WebSearch` con "reddit" / "r/murdle" / "redditors" como palabra clave (46 consultas) | Devuelve **páginas de terceros que citan hilos de Reddit** (Tom's Guide, AOL, un blog de reseñas, una reseña de Goodreads, Substack). De ahí sale todo lo que hay aquí. |
| `WebFetch` / `curl` a reddit.com, `old.reddit.com`, `reddit.com/r/murdle.json` | Bloqueado por el proxy. |
| Archivos de Reddit: `api.pullpush.io`, `arctic-shift.photon-reddit.com` | Bloqueados por el proxy (`EGRESS_BLOCKED`). |
| Wayback Machine (`web.archive.org`) | Bloqueado. |
| Otros buscadores (Bing, DuckDuckGo HTML, Startpage, Brave, Google) | Bloqueados todos. |
| Las páginas de terceros que citan Reddit (tomsguide.com, aol.com, lesserjoke.home.blog, goodreads.com, dev.to, substack.com, threads.com, elarbolblanco.com, murdoku.fans) | Bloqueadas todas al intentar abrirlas. Solo tenemos **el fragmento indexado**. |

Consecuencias:
1. **No hay ningún hilo con URL de Reddit en este documento.** Lo que hay son *referencias a hilos* hechas por terceros, con el subreddit indicado cuando el tercero lo indica.
2. Cada fragmento va marcado como **[textual]** (entrecomillado tal cual apareció en el extracto del buscador) o **[paráfrasis]** (resumen del propio buscador o mío). Nada de lo marcado como paráfrasis debe citarse como si lo hubiera dicho un usuario.
3. Los términos de la lista original (`streak`, `bug`, `wish`, `archive`, `stats`, `hint`, `too easy`, `too hard`, `mobile`, `app`, `premium`, `share`, `clue 21`, `puzzle wrong`, `ambiguous`, `level 40`, `pdf`, `print`, `spanish`) se lanzaron todos. **Ninguno devolvió un resultado de Reddit.** No se puede afirmar ni negar que esos hilos existan.
4. **r/murdoku:** no se ha podido confirmar que el subreddit exista. Ninguna consulta lo devuelve, ni ninguna página de terceros lo menciona. r/murdle sí existe (dos terceros lo citan por nombre, ver hilos H1 y H2).

**Alerta de marca (D-006):** en las 64 consultas no ha aparecido ningún tercero usando un nombre parecido a Sospechario, ni menciones de prensa ni conversación B2B sobre nosotros. No se ha cumplido ningún disparador.

---

## 1. Hilos de Reddit encontrados (siempre de forma indirecta)

Formato: **ID · Subreddit · Cómo lo sabemos (fuente de tercero, fecha si consta) · Fragmento.** Cuando la URL es la del tercero y no la del hilo, se dice.

### 1.1 Libros de Murdle: erratas y puzzles irresolubles

**H1 · r/murdle · Murdle Vol. 2, puzzle #99 irresoluble tal como está impreso**
- Fuente: reseña «Book Review: Murdle: Volume 2 by G. T. Karber», blog *The Lesser Joke*, 17 de agosto de 2025. URL del tercero: https://lesserjoke.home.blog/2025/08/17/book-review-murdle-volume-2-by-g-t-karber/ (no se pudo abrir; la URL del hilo de Reddit no aparece en el extracto).
- Fragmento **[paráfrasis del buscador]**: «puzzle #99 in Murdle: Volume 2 is actually unsolvable as printed. A Reddit thread at r/murdle documents several people complaining about the same issue, with no one rebutting them.»
- Qué aporta: es el **primer dato concreto y atribuido a r/murdle** que tenemos en todo el proyecto. Confirma que (a) hay erratas en los libros originales en inglés, no solo en la traducción española; (b) la comunidad de Reddit hace de página de erratas no oficial; (c) en ese hilo **nadie del lado del autor o del editor responde** («no one rebutting them»).

**H2 · subreddit no indicado (probablemente r/murdle o r/puzzles) · Murdoku (edición en inglés de Manuel Garand): un caso cuya solución no tiene sentido**
- Fuente: reseña en Goodreads de *Murdoku: 80 Murder Mystery Logic Puzzles* (Manuel Garand; 30 valoraciones, media 4,57). URL del tercero: https://www.goodreads.com/book/show/229222594-murdoku (no se pudo abrir).
- Fragmento **[textual, según extracto]**: «There is one that even the solutions don't make sense (reddit backed me up)». El reseñista dice haber resuelto 62 de 80 **[paráfrasis]**.
- Qué aporta: el jugador que duda de un puzzle **va a Reddit a que le confirmen que el error es del libro** y no suyo. Reddit funciona como tribunal de apelación. Nota: la edición inglesa de Murdoku existe (MIT Press Bookstore, ISBN 9781454961796; hay un *Volume 2: Back in Time*, ISBN 9781454961802), dato nuevo para `docs/analisis-estrategico.md`.

**H3 · Facebook (no Reddit, pero misma función) · «Help with Murdle volume 1 puzzle 21 clue?»**
- Fuente: grupo de Facebook, URL https://www.facebook.com/groups/1501188563657432/posts/2359283211181292/ · TikTok discover «Murdle 1 Puzzle 21 Answers». Ya recogido en `resenas-libros-comunidad.md` (P10). Se lista solo para constar que la consulta «clue 21» se lanzó y que en Reddit no apareció nada indexado.

**Búsquedas sin resultado de Reddit:** «puzzle wrong», «ambiguous», «errata», «clue mistake», «unsolvable volume 1/3».

### 1.2 La web murdle.com (rachas, archivo, pistas, móvil, premium, compartir)

**Resultado: ningún hilo de Reddit, ni directo ni citado por terceros.** Las 8 consultas específicas (`streak`, `bug`, `wish`, `archive`, `stats`, `hint`, `too easy/too hard`, `mobile/app/premium/share`) devolvieron Goodreads e itch.io. Lo único relacionado con la web oficial que apareció fuera de Reddit:

**H4 · dev.to (no Reddit) · «Using the keyboard on Murdle cards»**
- Fuente: artículo de nicm42, https://dev.to/nicm42/using-the-keyboard-on-murdle-cards-3ikd (no se pudo abrir; sin fecha en el extracto).
- Fragmento **[paráfrasis del buscador]**: el autor «quería poder dejar una carta pulsando Escape e ir a la siguiente carta con la flecha derecha»; reconstruyó las cartas de murdle.com con `role="button"`, `tabindex` y *listeners* de teclado, copiando la CSS y los emojis del juego original.
- Qué aporta: **murdle.com no es operable con teclado** en su componente principal (las "cartas" de pistas); un desarrollador tuvo que reconstruirlo. Es una carencia de accesibilidad concreta del líder que no estaba recogida.

**Ya recogido en informes anteriores (no se repite):** Quarter To Three con instrucciones para reparar la racha enlazando a Reddit (P5); Threads @tomcashman1 «it's inelegant that the Wordle refreshes at midnight in whatever your local timezone is but the Mini refresh is based on American time» (P6; el buscador la devolvió de nuevo, URL https://www.threads.com/@tomcashman1/post/C8_KSAtybmb).

### 1.3 r/murdoku y menciones en subreddits en español

**Resultado: nada.** `site:reddit.com/r/murdoku` (5 variantes: online link, app, error, solución, level 40, spanish, pdf, print), `site:reddit.com murdoku`, r/es, r/spain, r/argentina, r/mexico, r/chile, r/books, «juegos como murdle/murdoku»: **cero resultados de Reddit**. Lo que aparece en su lugar es TikTok (`/discover/murdoku-español-pdf`, `/discover/murdoku-libro-en-español-caso-1-solución`, «Cómo jugar Mordoku en línea» — nótese la grafía «Mordoku», ya conocida), El Árbol Blanco («Murdle vs Murdoku: diferencias y cuál elegir»), murdoku.fans («Juegos parecidos a Murdoku») y un vídeo de @elmundo.es en TikTok: **[textual del título]** «'Murdoku', el pasatiempo que ha conquistado España con más de 330.000 libros vendidos en solo seis meses» y «"Aspiro a que cada puzle sea memorable", asegura su creador».

> Dato a contrastar: **330.000 ejemplares en seis meses** (El Mundo, vía TikTok) frente a los +140.000 de `docs/contexto-proyecto.md`. Si el dato es de 2026, el fenómeno es más del doble de lo que tenemos apuntado. Va a `docs/analisis-estrategico.md` como cifra pendiente de verificar.

**H5 · Goodreads (no Reddit) · Murdoku ES, niveles 40-60**
- Fragmento **[paráfrasis del buscador]**: «a partir del puzzle 40 se vuelven muy difíciles, los últimos 10 prácticamente imposibles; a partir del 40 la lógica de la resolución no es muy clara; a partir del 50 o 60 hay errores de traducción que en algunos casos hacen imposible resolverlo». Ya está en P2 y P14; se deja constancia de que Reddit no añade nada nuevo en español.

### 1.4 Aprendizajes del ritual diario (r/wordle, r/NYTGames, Puzzmo)

**H6 · r/wordle (citado por Tom's Guide) · Racha reseteada por cambio de huso horario al viajar**
- Fuente: Tom's Guide, «I lost my Wordle streak without losing or missing a game — here's what happened», https://tomsguide.com/features/i-lost-my-wordle-streak-without-losing-or-missing-a-game-heres-what-happened (no se pudo abrir; sin fecha en el extracto).
- Fragmentos **[paráfrasis del buscador, que a su vez cita «Reddit posts»]**: «Wordle seemingly can't handle a change of time zone». Caso del autor: vuelo Reino Unido → Florida, racha de 180 días, jugó antes de despegar, «hadn't missed a day and hadn't played between 7 p.m. and midnight Florida-time, which would have been after midnight back in the UK», y al despertar en el hotel la racha estaba a cero. Otro usuario de Reddit: «jugó a medianoche estando en el extranjero y al día siguiente su racha se había reseteado».
- Qué aporta: la causa no es el cambio de hora estacional (ya en P6) sino **el desplazamiento del jugador entre husos**. Al cruzar el Atlántico hacia el oeste, el "día civil local" del dispositivo retrocede y el sistema interpreta que el día anterior no se jugó (o que se jugó dos veces). M7 prevé «cambio de huso declarado 1 vez/24 h» pero **no tiene caso de prueba de viaje**.

**H7 · r/wordle y X (citados por Tom's Guide y GamesRadar) · Rachas perdidas en la migración a NYT y restauración posterior**
- Fuentes: Tom's Guide «Wordle fail — some players just lost their streaks and stats» y GamesRadar «Rejoice, for your broken Wordle Streak might soon be restored» (https://www.gamesradar.com/well-damn-it-looks-like-wordle-streaks-did-reset-after-the-new-york-times-transfer/).
- Fragmento **[paráfrasis]**: la cuenta NYTimes Wordplay «confirmó que era consciente de que las rachas se habían reseteado» y que «podrían ser restauradas». Ya en P5; el matiz nuevo es que **el editor acabó restaurando rachas de forma centralizada**, lo que valida M2/M10 (reparación automática cuando la causa es nuestra).

**H8 · Comunidad Wordle (AOL / Yahoo News) · Caída de AWS del 20 de octubre de 2025 rompe Wordle; rachas en el aire**
- Fuente: AOL, «The outage that broke Wordle (and some players' sanity)», https://www.aol.com/articles/outage-broke-wordle-players-sanity-194722792.html (no se pudo abrir).
- Fragmentos **[paráfrasis del buscador]**: la caída empezó «alrededor de las 2:40 ET»; «quien no había terminado el puzzle del lunes tuvo que esperar a que volviera antes de medianoche, y quien lo había resuelto solo podía rezar para que su racha se restaurase». Declaración de Jordan Cohen (NYT) **[textual según extracto]**: «We are encouraging subscribers to try logging in again at a later time and are taking steps to resolve the issue as soon as possible.» Una jugadora «encontró su racha restaurada hacia las 14:00 ET».
- Qué aporta: **la infraestructura ajena puede romper el ritual**. Un juego diario cuyo caso no está precargado deja al jugador sin poder cumplir el día y con la racha a merced del proveedor. Nada en P1-P25 cubre "caída del servicio".

**H9 · Comunidad Wordle (PC Gamer, Screen Rant) · Cierre del archivo no oficial y acaparamiento de contenido por miedo al muro de pago**
- Fuentes: PC Gamer «Wordle Archive taken down at New York Times' request»; Screen Rant «New York Times Closes Wordle Archive, Removes Old Puzzles» (marzo de 2022); TechCrunch (7 de mayo de 2024) sobre el archivo oficial de +1.000 puzzles para suscriptores.
- Fragmento **[paráfrasis del buscador]**: «algunos jugadores han llegado a **guardar la lista restante de palabras** del Wordle original por si el periódico decide ponerle muro de pago»; «muchos jugadores encontraron su racha reseteada, lo que llevó a bastantes a abandonar el juego».
- Qué aporta al P9: el jugador que percibe riesgo de muro de pago **copia el contenido**. En nuestro caso, un archivo de 7 días con caducidad clara y anunciada (M14) reduce el incentivo a scrapear; y confirma que **la racha perdida produce abandono, no solo queja**.

**H10 · Wordle (AOL, «exclusiva») · Un solo puzzle acabó con 5,6 millones de rachas en 2024**
- Fuente: https://www.aol.com/exclusive-wordle-puzzle-ended-5-013624721.html **[solo título, textual]**: «Find out the Wordle puzzle that ended 5.6 million streaks in 2024». Tom's Guide publica listas anuales «The 10 hardest Wordles of 2025 — these are the puzzles that broke our streaks» y TechRadar «Today's Wordle answer is so hard it nearly cost me my 1,045-game streak – and it's all the NYT's fault».
- Qué aporta: **la varianza de dificultad del caso diario es el mayor destructor de rachas**, y la prensa la convierte en noticia. Refuerza M6 (curva por dificultad medida) y da un argumento cuantitativo para la gracia de racha (M10).

**H11 · Puzzmo (mssv.net, 21 de noviembre de 2023; Adrian Hon, Substack; An Archaeopteryx, 2 de octubre de 2025) · Gamificación estresante y percentiles que desaniman**
- Fragmentos **[textual según extracto]**: «Delightful daily puzzling sullied by stressful gamification». **[paráfrasis]**: «los usuarios se desaniman cuando terminan un puzzle y ven que están en el 20 % inferior»; «molestos por ser castigados en los rankings porque no les gustan los crucigramas, o por trampas aparentes de otros jugadores y grupos»; «la fijación de Puzzmo con puntuaciones y rankings delata falta de consideración por cómo afectan negativamente a la gente». Regla de racha de Puzzmo **[paráfrasis]**: «si pierdes una racha y luego haces una racha de 7 días, recuperas la racha más larga que tenías». Título de bearblog **[textual]**: «Puzzmo & Hard Paywalls».
- Qué aporta: dos cosas que no estaban. (1) **Mostrar el percentil al terminar desmotiva** a la mitad inferior por definición; nuestro Premium promete «percentiles» (fila 16 del catálogo) y hay que decidir cómo se enseñan. (2) **Mecánica de recuperación de racha por esfuerzo** (7 días seguidos devuelven la racha máxima), una alternativa a las congelaciones compradas que encaja con "sin trampas".

**H12 · Streaks en general (devise.substack, «the pleasure and pain of streaks»)**
- Fragmento **[paráfrasis]**: «la función de racha de Duolingo hace que algunos usuarios abandonen por completo tras romper una racha larga»; «la gente odia perder más de lo que le gusta ganar: una racha de 100 días se convierte en trofeo, y perderla escuece».
- Refuerza M10. Sin novedad de producto.

**Búsquedas sin resultado de Reddit:** r/NYTGames complaints (devuelve guías de Strands), «puzzmo review reddit», «daily puzzle lost my streak» (devuelve itch.io y Steam), «hint / give up counts as loss».

### 1.5 Clones y competidores

**Resultado: ningún hilo de Reddit** para «daily murder», everyclue, cluedoku, caseoku, «endless cases». Lo que sí ha salido, como inteligencia competitiva colateral:

- **everyclue.com** **[textual de su ficha]**: «Crime Scene turns deduction into a room map where you place each suspect where the clues allow, then identify who was alone with the victim». Es exactamente nuestro "Caso del día". Ya constaba el modo en `resenas-apps-web.md` (fila everyclue); lo nuevo es que la ficha ya lo describe con nuestro mismo vocabulario.
- **cluedoku.app** mantiene una página `/murdoku` («Murdoku Online: Play a Free Murdoku-Style Case Every Day») y anuncia **[textual]** «Ranked duels race you against another detective on the same case, co-op lets you crack one board together with a friend, and weekly leagues give the habit a ladder to climb». Ya constaba (fila cluedoku.app); refuerza P22.
- **The Daily Murder** (itch.io, phaddius): «crime board of hex tiles», «CSI experts», deducir «murderer, motive, method». Ya en P13.
- Apps de logic grid con contenido diario que aparecen en las recomendaciones (no Reddit): Logic Daily (4.000+ puzzles), Daily Logic Puzzles («minimal ads, leaderboards»), Everyday Grids, Griddoku, Gossipdle («daily logic grid inspired by Einstein's Riddle, gossipy themes»). Sin reseñas indexadas.

---

## 2. Recuento

| Subreddit / comunidad | Hilos con URL de Reddit | Hilos citados por terceros | Consultas lanzadas |
|---|---|---|---|
| r/murdle | 0 | 1 (H1, Vol. 2 #99) + 1 probable (H2) | 22 |
| r/murdoku | 0 | 0 (no se confirma que exista) | 7 |
| r/puzzles, r/books, r/boardgames | 0 | 0 | 5 |
| r/es, r/spain, r/argentina, r/mexico, r/chile | 0 | 0 | 4 |
| r/wordle | 0 | 2 (H6, H7) | 8 |
| r/NYTGames | 0 | 0 | 3 |
| Puzzmo, clones (everyclue, cluedoku, caseoku, daily murder, endless cases) | 0 | 0 | 15 |
| **Total** | **0** | **4-5** | **64** |

---

## 3. Patrones: nuevos y reforzados respecto a `docs/oportunidades-resenas.md`

Criterio de **NUEVO**: no aparece en P1-P25 ni en M1-M16, o aporta un matiz que cambia la decisión. Criterio de **REFUERZA**: ya estaba y Reddit (o el ritual diario) añade evidencia.

| # | Patrón | Evidencia de esta pasada | Estado | Relación con P/M | Cambio concreto que propongo |
|---|---|---|---|---|---|
| R1 | **Reddit es la página de erratas de facto y nadie del editor contesta** | H1: r/murdle documenta el #99 de Vol. 2 irresoluble, «several people complaining… no one rebutting them» | REFUERZA (P1, M2) con el **primer dato atribuido a r/murdle** | P1, M2 | Sin cambio de alcance. Añadir a M2 un criterio: **respuesta pública en menos de 48 h** en la página de erratas cuando un caso recibe ≥3 reportes, para que el hilo de Reddit sobre nosotros tenga siempre una respuesta oficial enlazable. |
| R2 | **El jugador que duda va a Reddit a que le confirmen que el error es del libro** («reddit backed me up») | H2 | **NUEVO** (matiz de P10: no busca la solución, busca *validación*) | P10, M2 | El botón «reportar un problema con este caso» (M2) debe devolver algo inmediato: «X personas han reportado esto; lo estamos revisando» o «este caso ha sido verificado por el solver y por una persona: la solución es única». Esa segunda respuesta es la que hoy solo da Reddit. |
| R3 | **Viajar entre husos horarios rompe la racha aunque se juegue cada día** | H6: 180 días a cero por un vuelo Reino Unido → Florida; otro usuario jugó a medianoche en el extranjero y perdió la racha | **NUEVO** como caso de prueba (P6/M7 solo cubrían DST y el cambio de día en LatAm) | P5, P6, M7 | Añadir a M7 dos tests explícitos: **viaje hacia el oeste** (el dispositivo vuelve a "ayer": no debe contar doble ni romper) y **viaje hacia el este** (el día "salta": se concede el día intermedio automáticamente). Regla propuesta: la racha se calcula por **número de caso consecutivo resuelto**, nunca por fecha del dispositivo. |
| R4 | **Una caída del proveedor (AWS) deja al jugador sin poder cumplir el día** | H8: caída de AWS 20-10-2025, rachas «en el aire», restauración horas después, comunicado del NYT | **NUEVO** (P13 cubre bugs propios, no caída de infraestructura) | F16, M10 | Dos cosas. (1) F16 ya pide PWA offline «con el caso ya cargado»; convertirlo en **precarga del caso de mañana** por el service worker (el contenido es estático y pesa poco), de modo que una caída de Supabase/CDN a medianoche no impida jugar. (2) M10: si el servidor registra una ventana de indisponibilidad, **conceder el día automáticamente** a todos, sin pedir soporte. Coste estimado: 0,5 persona-semana backend. |
| R5 | **Un solo caso demasiado difícil destruye millones de rachas y sale en prensa** | H10: «the Wordle puzzle that ended 5.6 million streaks in 2024»; listas anuales de «puzzles that broke our streaks» | REFUERZA (P14, M6) con cifra | M6, M10 | Sin cambio de alcance. Añadir al **criterio de "hecho" de M6** un umbral: ningún caso entre semana puede superar el percentil 90 de dificultad medida del mes; si el motor lo supera, se mueve a sábado. Argumento de comunicación gratis: «aquí ningún martes te rompe la racha». |
| R6 | **Mostrar el percentil al terminar desanima a la mitad inferior** | H11: Puzzmo, «bummed out… bottom 20%», «punished in leaderboards» | **NUEVO** (el catálogo promete percentiles en Premium, fila 16, sin decir cómo se enseñan) | Catálogo fila 16, `funcionamiento-productos.md` §Estadísticas | Regla de UX: el percentil **nunca se muestra por defecto** en la pantalla de resultado; se ofrece bajo «ver comparativa» y siempre acompañado del dato de progreso propio («has mejorado tu tiempo medio un 12 % este mes»). Los rankings (fase 2) por **grupos elegidos** (duelos, amigos), no globales por defecto. Coste cero si se decide ahora. |
| R7 | **Recuperar la racha por esfuerzo, no por compra** | H11: Puzzmo devuelve la racha máxima tras 7 días seguidos | **NUEVO** (M10 solo tiene gracia automática y congelaciones Premium) | F11, M10 | Añadir a F11: «si rompes la racha, 7 casos seguidos resueltos recuperan tu racha más larga». Es una mecánica de retorno (trae de vuelta a quien abandonó por la racha rota, ver H9 y H12) y no depende de Premium, lo que evita la sensación de "racha de pago". Coste: 0,25 persona-semana. |
| R8 | **Sin muro de pago claro, la comunidad copia el contenido** | H9: fans guardaron la lista de palabras de Wordle por miedo al muro de pago; el archivo no oficial fue cerrado por vía legal | REFUERZA (P9, M14) con matiz | P9, M14 | Sin cambio. Confirma que el archivo de 7 días debe estar **anunciado desde el día 1** (ya en M14) y que la explicación pública del día 8 (M8) reduce el incentivo a scrapear. Registrar para `experto-legal`: **no perseguir archivos de fans** en los primeros 12 meses; es el error reputacional del NYT. |
| R9 | **El tablero del líder no es operable con teclado** | H4: un desarrollador reconstruyó las "cartas" de murdle.com para poder usar Escape y flechas | **NUEVO** (M16 cubre el compartir accesible, no el tablero) | M16, F6 | Ampliar M16: **tablero y pistas 100 % operables con teclado** (Tab entre celdas, flechas para moverse, Espacio/Enter para marcar, Escape para cerrar la pista) y foco visible. Es requisito del European Accessibility Act y una ventaja concreta frente al líder. Coste: 0,5 persona-semana frontend. |
| R10 | **La racha perdida produce abandono, no solo queja** | H9 («muchos abandonaron el juego»), H12 (Duolingo) | REFUERZA (P5, M10) | M10 | Sin cambio. Da la justificación cuantitativa para que M10 y R7 estén en el MVP y no en fase 2. |
| R11 | **El editor acaba restaurando rachas de forma centralizada** | H7: NYT Wordplay confirma y restaura; H8: rachas restauradas «hacia las 14:00 ET» | REFUERZA (M2, M10) | M2, M10 | Sin cambio. Es la prueba de que la reparación automática (M2) es lo que hace el líder cuando la causa es suya; nosotros lo hacemos desde el día 1 y sin que haya que pedirlo. |
| R12 | **Cifra de mercado pendiente: 330.000 ejemplares de Murdoku en seis meses** | Vídeo de @elmundo.es en TikTok (título) | **NUEVO** como dato, no como patrón de producto | `contexto-proyecto.md`, `analisis-estrategico.md` | Verificar a mano la fecha y la fuente de El Mundo. Si es 2026, actualizar las cifras del brief (hoy +140.000) y el tamaño de la ventana. |
| R13 | **Murdoku tiene edición en inglés (Manuel Garand) con un Volumen 2** | MIT Press Bookstore, ISBN 9781454961796 y 9781454961802; Goodreads 30 valoraciones, 4,57 | **NUEVO** como dato competitivo | `analisis-estrategico.md` | Registrar: el editor ya exporta la marca fuera de España; la apuesta digital seria del editor en español sigue sin aparecer en ninguna búsqueda. |

**Lo que Reddit NO ha aportado y sigue pendiente** (idéntico a la lista de la sección 5 de `oportunidades-resenas.md`): quejas sobre la web murdle.com (rachas, archivo, pistas, móvil, premium, compartir), peticiones de features en r/murdle, cualquier hilo en español sobre Murdoku, existencia de r/murdoku, reseñas de Puzzmo en Reddit. **Estas siguen siendo comprobaciones manuales**: abrir r/murdle (ordenar por "top" de todos los tiempos y buscar «streak», «archive», «hint», «bug»), buscar «murdoku» en r/es y r/spain, y comprobar si r/murdoku existe.

---

## 4. Consultas lanzadas (para no repetirlas)

**Con operador `site:` (todas sin resultado de Reddit):** `site:reddit.com/r/murdle` + streak · bug · wish · archive · stats · hint · "too easy" OR "too hard" · spanish OR español · mobile OR app OR premium OR share · `site:reddit.com/r/murdoku` + pdf OR print OR error OR solución · `site:reddit.com murdoku` · `site:reddit.com/r/puzzles murdle` · `site:reddit.com/r/wordle archive old puzzles` · `site:reddit.com caseoku OR cluedoku OR everyclue` · `site:reddit.com "daily murder"`.

**Con filtro de dominio de la herramienta (8 consultas, rechazadas por el servicio: «reddit.com not accessible»).**

**Con "reddit" como palabra clave (46):** "r/murdle" reddit · "r/murdoku" reddit · murdle "clue 21" volume 1 wrong · murdle.com streak archive complaint · murdoku online link app español nivel 40 · wordle "lost my streak" timezone midnight · r/NYTGames complaints streak ads · r/puzzles murdle daily logic grid · "logic grid puzzle" daily app recommendation · "juegos como murdle" OR "juegos como murdoku" · r/spain OR r/es murdoku libro · r/argentina OR r/mexico OR r/chile murdoku · r/books murdoku OR murdle review · r/boardgames murdle · wordle archive removed NYT complaints · "puzzmo" review daily puzzles · "daily puzzle" "lost my streak" bug · "daily murder" puzzle deduction · everyclue daily murder mystery · cluedoku OR caseoku app · "endless cases" murdoku · "on reddit" OR "redditors" murdle karber streak · "r/wordle" streak reset travel time zone · "r/NYTGames" streak connections strands · murdle errata puzzle answer wrong · murdoku opinión libro españa viral tiktok · puzzmo "streak" OR "gamification" stressful · "hint" daily puzzle "give up" streak counts as loss · wordle AWS outage streak restore · murdle.com "resets at" time zone · murdoku nivel 40 imposible erratas foro · NYT Games "hard mode" OR "streak freeze" · murdle keyboard accessibility dev.to · "im mad about murdle" substack · goodreads murdoku Garand "reddit" solutions · murdle "impossible" OR "unsolvable" volume thread · murdle "volume 2" "#99" unsolvable · "Using the keyboard on Murdle cards" · tomsguide wordle streak reddit 180 Florida · puzzmo "bottom 20%" leaderboard · "r/murdle" site:goodreads OR substack OR home.blog · wordle streak "restored" NYT support.
