# Análisis GEO y de competencia en buscadores para el lanzamiento

Autor: `estratega-growth-seo`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Para: `director-producto` (prioridades), `periodista-contenidos` (briefs de landing y FAQ), `desarrollador-frontend` (robots, schema, HTML servido), `experto-legal` (§5.1), `analista-datos` (§6), `creador-social` (§3.4).
Fuentes: `docs/arbol-web.md` (árbol v1, §3 marcas ajenas, §4 GEO), `docs/investigacion/herramientas-online.md` (110 herramientas), `docs/legal/anterioridades-sospechario.md`, `docs/propuesta-jugabilidad.md` y `docs/propuesta-jugabilidad-expediente.md` (los dos modos, Escena y Expediente), `docs/keywords-arbol-web.csv` (Semrush, 5/9/2026), y **60 consultas WebSearch hechas hoy** (lista completa en §8).

**Alerta de marca (D-006), comprobada hoy:** ninguno de los cinco disparadores se cumple. En las 60 consultas no aparece ningún tercero que use "Sospechario" ni un nombre parecido; todos los que ocupan la SERP usan la marca ajena "Murdoku" (murdoku.fans, murdokujuego.com, cluedoku.app, siete apps de tienda). No procede registrar todavía. Dos señales que hay que vigilar aunque no sean disparadores: (1) los pies de los vídeos de @cristinini repiten "Pronto haremos los Murdokus de la App", que puede anunciar una app oficial o asociada al libro y cambiaría la familia Murdoku entera (§4.1, comprobación 1 de §7); (2) la primera mención en prensa de Sospechario **sí** será disparador, y la estrategia de medios ganados de §3.4 la busca a propósito: el expediente de la OEPM tiene que estar preparado antes de enviar la primera nota de prensa.

---

## 0. Resumen en diez líneas

1. La demanda del género en español ya la responden **terceros sin producto**: una guía de fans (murdoku.fans), un clon anglófono traducido (cluedoku.app, con el título literal "Murdoku online en español"), una galería estática (murdokujuego.com), páginas programáticas de TikTok y la prensa. Nadie tiene un caso diario jugable, escrito en español y con solución única garantizada: ese sigue siendo el hueco.
2. Los motores generativos citan hoy, en este género, **listas "juegos como X" fechadas en 2026, comparativas de dos columnas, guías de reglas con lista numerada y vídeo corto**. Las escriben los propios competidores (cluedoku, murdoku.fans, INQUEST) y blogs nicho (elarbolblanco.com aparece en 3 de las 60 consultas con solo 2 páginas).
3. Los estudios de 2026 coinciden en tres cosas que nos afectan: **el 88 % de las URL citadas por IA no está en el top 10 de Google** (Ahrefs), **YouTube es el dominio más citado por AI Overviews (20,9 %)** y los motores prefieren **medios ganados** (prensa, Reddit, listas de terceros) a contenido de marca. GEO no es solo lo que ponemos en nuestra web: es conseguir que otros nos nombren.
4. Lo que sí controlamos y funciona según la evidencia: respuesta directa en el primer 30 % de la página (ahí nace el 44 % de las citas de ChatGPT), citas y cifras con fuente (+30-40 % de visibilidad en el estudio de Princeton), FAQ y HowTo en JSON-LD, autoría con `sameAs`, entidad de marca escrita siempre igual, HTML servido sin JS y rastreadores de IA permitidos. **`llms.txt` no tiene evidencia de efecto** (97 % de esos ficheros no recibe ni una petición; Google lo ignora): se publica porque cuesta cero, no se cuenta con él.
5. España es un mercado maduro para GEO: AI Overviews sale en el 25-30 % de las búsquedas informativas, AI Mode está activo desde octubre de 2025, ChatGPT concentra el 70 % del tráfico de IA y lo usa con frecuencia el 28 % de la población. **Orden de prioridad de motores: ChatGPT > Google (AI Overviews + AI Mode) > Perplexity > Gemini > Claude.**
6. Por familias: Murdoku (ES/LatAm) la dominan murdoku.com (sin español, sin caso diario), murdoku.fans, cluedoku.app, TikTok y prensa; Murdle no tiene ningún jugable en español (solo libro, piratería y tres blogs con "Murdle vs Murdoku"); los genéricos de detectives y lógica los ocupan portales de minijuegos sin deducción; los imprimibles y el aula son de Orientación Andújar; los juegos diarios, de agregadores y clones de Wordle. Todas tienen la misma grieta: **ninguna página jugable en español con datos propios y autoría.**
7. Cuatro riesgos de posicionamiento: marcas ajenas (la fórmula segura de `arbol-web.md` §3 se mantiene y se añade una regla GEO: la frase de no afiliación en las primeras 60 palabras, para que un modelo no nos resuma como "Murdoku en español"), archivo fino (365 casos plantilla), canibalización (cuatro landings responden a la misma pregunta "jugar Murdoku online gratis en español"; tres páginas explican "cómo se juega") y **dependencia**: 21.300 de las ~23.000 búsquedas/mes de intención P0 llevan la marca ajena.
8. Diversificación concreta: subir `/juegos-diarios` y `/juegos-de-detectives` de P1 a P0 (son las dos consultas genéricas donde el resumen del buscador hoy no tiene nada que recomendar en español), definir la entidad "juego diario de deducción" antes de que la ocupe otro, y construir marca propia por medios ganados (prensa que ya cubre el género, creadores de TikTok, listas "games like", YouTube propio).
9. Medición: panel mensual de 25 preguntas (marcadas ★ en §2) en cuatro motores desde España y México, con registro de cita, posición, frase exacta, competidor citado y corrección del dato; señales automáticas con el informe de IA generativa de Search Console (impresiones en AI Overviews y AI Mode, junio 2026), el canal "AI Assistant" de GA4 o su equivalente en PostHog, y recuento de rastreadores de IA en logs. Objetivo mes 3: citados en 8 de 25 preguntas en 2 de 4 motores; mes 6: 15 de 25 en 3 de 4.
10. Límite del análisis: la herramienta de búsqueda devuelve resultados desde EE. UU., sin geolocalizar a España/México/Argentina y sin mostrar el bloque generativo; no se pudo abrir ninguna página. Las conclusiones sobre **qué dominios** dominan son robustas (se repiten en 5-10 consultas cada uno); las de **posición exacta**, no. Las diez comprobaciones manuales de §7 cierran ese hueco.

---

## 1. Método y límites

- **60 consultas WebSearch** el 6/9/2026: 41 en español (España y LatAm, incluidas variantes con "celular", "en línea", "dónde compro"), 12 en inglés sobre el género y 7 técnicas (estudios de citación, rastreadores, adopción de IA en España, medición).
- **Qué significa "qué responde hoy el buscador".** La herramienta devuelve la lista de resultados y compone un resumen a partir de ellos. Ese resumen se parece a lo que hace un motor generativo (sintetiza 5-10 fuentes y las cita), así que lo uso como aproximación de la respuesta generativa. No es AI Overviews ni ChatGPT literalmente.
- **Sin geolocalización.** Los resultados salen desde EE. UU. Para consultas en español devuelven páginas en español, pero el orden no es el de la SERP de Madrid o Ciudad de México, y no aparecen ni *People Also Ask* ni el bloque de IA. Por eso cada familia de §4 lleva la advertencia y §7 pide comprobación manual.
- **Sin abrir páginas.** WebFetch bloqueado. Lo que digo del contenido de cada dominio sale de títulos, descripciones, del resumen de la herramienta y de `herramientas-online.md`.
- **Volúmenes.** Los de `docs/keywords-arbol-web.csv` (Semrush, 5/9/2026). No se repitieron consultas de volumen.
- **Convención.** `[marca]` de `arbol-web.md` ya es **Sospechario** (D-005, provisional). Descriptor fijo: "el caso de misterio de cada día". Modos: **Escena** (espacial) y **Expediente** (cuadrícula lógica, los jueves al lanzar).

---

## 2. Preguntas conversacionales: qué se pregunta, qué se responde hoy y qué página nuestra debe responderlo

Formatos: **RD** = respuesta directa de ≤60 palabras bajo el `h1` · **DEF** = definición de una frase "X es un Y que Z" · **FAQ** = pregunta/respuesta de 40-80 palabras dentro de `FAQPage` · **TC** = tabla comparativa en HTML · **CJ** = caso jugable completo en el HTML servido · **HT** = pasos numerados `HowTo` · **DP** = dato propio con fecha de cálculo · **VID** = vídeo de 60-90 s con transcripción en la página.
**★** = una de las 25 preguntas del panel mensual de medición (§6).

### 2.1 Familia Murdoku (marca ajena): jugar, entender, elegir

| # | Pregunta (variante España · LatAm) | Qué responde hoy el buscador (según los resultados vistos) | URL destino | Formato | ★ |
|---|---|---|---|---|---|
| 1 | ¿Hay un Murdoku online en español? · ¿Hay murdoku en español para jugar en línea? | cluedoku.app/es/murdoku (título literal "Murdoku online en español"), murdoku.fans, cuatro páginas "discover" de TikTok. El resumen dice: "murdoku.com solo en inglés y portugués; Cluedoku está totalmente traducido y publica un caso diario". | `/juegos-como-murdoku/en-espanol` | RD + CJ + FAQ (3) | ★ |
| 2 | ¿Dónde puedo jugar al Murdoku gratis? · ¿Dónde juego murdoku gratis? | murdoku.com/play (casos semanales), TikTok @martamartiuss ("en la web es gratis y puedes equivocarte sin ensuciar la página"), cluedoku. | `/juegos-como-murdoku/gratis` | RD + TC (qué es gratis para siempre / qué no) + CJ | ★ |
| 3 | ¿Se puede jugar al Murdoku sin descargar nada? | murdoku.fans/murdoku-app y murdoku.com ("diseñado para navegador móvil"). | `/juegos-como-murdoku/sin-descargar` | RD + HT (instalar la PWA en dos toques) + FAQ | |
| 4 | ¿Hay app oficial de Murdoku? ¿Cuál es la app para Android/iPhone? · ¿Cómo descargo murdoku en el celular? | Cuatro páginas "discover" de TikTok, AppBrain (NozCore), murdoku.fans/murdoku-app, Google Play (Caseoku). El resumen ya dice: "no hay app oficial; Enigmic, Crimoku, NozCore y Caseoku son de terceros". | `/juegos-como-murdoku/sin-descargar` | FAQ + TC de apps de tienda (nota, anuncios, idioma, fecha de consulta) | ★ |
| 5 | ¿Qué juegos hay parecidos a Murdoku? · ¿Alternativas a Murdoku? | murdoku.fans/games-like-murdoku, thinkygames.com/…/similar, elarbolblanco.com (Murdle vs Murdoku), Similarweb, TikTok. El resumen lista mystery-o-matic, Enigmic, Roomdoku, Casedoku y Murdle. | `/juegos-como-murdoku` | DEF + TC (libro / web oficial / apps / Sospechario) + CJ | ★ |
| 6 | ¿Cómo se juega al Murdoku? ¿Cuáles son las reglas? | Dos vídeos de YouTube, tres *reels* de Instagram (Cristinini), madresdesterradas.es, murdoku.fans/how-to-play. El resumen ya devuelve una lista numerada de reglas: es el formato que gana. | `/juegos-como-murdoku/como-se-juega` | HT (verbos en imperativo, un paso por `<li>`) + CJ 3×3 + VID + FAQ | ★ |
| 7 | ¿Qué es un Murdoku? ¿Qué son los murdokus? | Telecinco, SerPadres, Educación 3.0, elarbolblanco.com, Amazon. El resumen define "sudoku + Cluedo; libro de Manuel Garand, diseñador de Montreal; viral en TikTok". | `/juegos-como-murdoku` (bloque `h2` "¿Qué es un Murdoku?") | DEF de una frase con atribución al autor + RD | ★ |
| 8 | ¿En qué se diferencia un Murdoku de un sudoku? · ¿Es un sudoku? | elarbolblanco.com y murdoku.fans/faq. La consulta "sudoku de asesinatos" la captura *Killer Sudoku* (significado equivocado). | `/juegos-como-murdoku/como-se-juega` | FAQ de desambiguación | |
| 9 | ¿Hay Murdokus para niños? ¿A partir de qué edad? · ¿Para qué edad es murdoku? | SerPadres, Kinuma (+10), Caracola Kids (9+), Ecomimos, Orientación Andújar. El resumen da "9-10 años; 10-13 en fácil/medio; 14+ tableros grandes". | `/juegos-como-murdoku/para-ninos` | RD con edad y criterio explicado + CJ 4×4 sin víctima + FAQ | ★ |
| 10 | ¿Hay Murdokus en PDF gratis o para imprimir? · ¿Murdoku pdf para imprimir? | GitHub (pirata), TikTok ("libro completo gratis"), Scribd, Andújar, murdoku.fans/pdf. El resumen mezcla piratería con kits imprimibles. | `/juegos-como-murdoku/para-imprimir` | RD honesta ("PDF propios generados por nuestro motor; el libro se compra") + hoja de muestra + enlace a `/packs` | ★ |
| 11 | ¿Hay Murdokus fáciles para empezar? · consejos para principiantes | murdoku.fans/strategy, madresdesterradas.es, *reels*. Resumen: "empieza por las pistas fijas, usa los límites de fila y columna, identifica la pareja víctima-asesino". | `/juegos-como-murdoku/faciles` | RD + CJ fácil + tres consejos con nombre de técnica | |
| 12 | ¿Trucos para resolver un Murdoku más rápido? ¿Estrategia? | TikTok de @cristinini (soluciones caso a caso), murdoku.fans/strategy, YouTube Shorts. | `/guias/tecnicas-de-deduccion` (P1) | Guía: técnica nombrada + cuándo aplicarla + tablero de ejemplo + CJ | |
| 13 | ¿Un Murdoku puede tener varias soluciones? ¿Cómo sé que solo hay una? | Nada específico. Las reseñas de apps se quejan de "multiple solutions but only one is accepted". Es una pregunta sin dueño. | `/como-creamos-los-casos` y `/una-sola-solucion` | RD + explicación del certificado del solver + DP (casos publicados, erratas) | ★ |
| 14 | Soluciones del Murdoku 23 · solucionario | TikTok (@cristinini, @martstips), Scribd, murdoku.fans/cases. | **No se ataca** (demanda del libro ajeno). Una línea en la FAQ de `/juegos-como-murdoku`: no publicamos soluciones de libros de terceros. | FAQ de una línea | |
| 15 | ¿Dónde compro el libro Murdoku en México / Argentina / Chile? | TikTok "discover" ("en dónde compro el libro de murdoku en México"), Casa del Libro MX, Buscalibre, MercadoLibre, Libroide, Yenny. | Fuera de intención. `/juegos-como-murdoku` enlaza al editor (refuerza que la comparativa es real). | FAQ de una línea + enlace saliente | |
| 16 | ¿Hay un Murdoku 2? ¿Cuándo sale el siguiente? | PlanetadeLibros ("Viaje al pasado", 1/7/2026, 17,90 €), Casa del Libro, Fnac. | `/juegos-como-murdoku` (FAQ) | FAQ de una línea con fecha, mantenida | |
| 17 | ¿Murdoku para el aula? ¿Sirve para comprensión lectora? | Andújar ("35 murdokus listos para jugar"), actividadesdeinfantilyprimaria.com (Club A, 3.º de Infantil). Para "secundaria" no hay nada. | `/para-profesores` | RD + ficha `LearningResource` (curso, competencia, tiempo de aula) + PDF de muestra | |
| 18 | ¿Hay murdoku online en México? ¿Y en Argentina? | murdokujuego.com, murdoku.fans/puzzles, tiendas. El resumen recomienda "juega en murdokujuego.com" (galería estática). | `/juegos-como-murdoku/online` (y `/mx/`, `/ar/` en el mes 4) | RD + frase "el caso cambia a medianoche de tu hora local" + CJ | ★ |

### 2.2 Familia Murdle (marca ajena) y cuadrícula lógica

| # | Pregunta | Qué responde hoy | URL destino | Formato | ★ |
|---|---|---|---|---|---|
| 19 | ¿Se puede jugar a Murdle online en español? | murdle.com (solo inglés), TikTok "murdle libro español pdf", murdoku.fans, cluedoku (intención equivocada), wordly.org (clon), murdle.com vía Google Translate. **El resumen se equivoca**: "murdle.com parece tener versión en español". | `/juegos-como-murdle` | RD ("no existe versión oficial en español; esto es lo más parecido, escrito en español") + Expediente jugable + FAQ | ★ |
| 20 | ¿Juegos como Murdle gratis? · ¿Alternativas a Murdle? | murdermysterygameai.com (lista "2026"), Poki "Murder" (irrelevante), TikTok, murdle.com. En inglés: mindglegames.com, playinquest.com (INQUEST), cluedoku.app/games-like-murdle, thinkygames. | `/juegos-como-murdle` | TC + CJ | ★ |
| 21 | ¿Murdle o Murdoku? ¿Diferencias? ¿Cuál elegir? | elarbolblanco.com, Nokton Magazine (compara cuatro pasatiempos del verano), murdoku.fans/murdoku-vs-murdle, tiamopastoor.com (EN). El resumen ya está estructurado: "espacial en mapa vs cuadrícula lógica; Murdoku en diez minutos, Murdle con narrativa; complementarios". | `/juegos-como-murdle` (sección) + FAQ en `/juegos-como-murdoku` | TC de dos columnas + FAQ "cuál elegir" | ★ |
| 22 | ¿Murdle en PDF o en español? | Scribd, Lectulandia, gmbinder (piratería), PlanetadeLibros, Amazon, muestra oficial en el CDN de Planeta. | Fuera de intención. FAQ de una línea en `/juegos-como-murdle` con enlace a la muestra oficial. | FAQ de una línea | |
| 23 | ¿Hay app de Murdle? | cozyculprits.com (EN: "no hay app oficial"), clones Myrdle y Ultra Murdle en tiendas. | `/juegos-como-murdle` (FAQ) | FAQ de 40 palabras | |
| 24 | ¿Qué es una cuadrícula lógica? ¿Un puzzle de "quién, dónde y con qué"? | Tiger Algebra (solucionador), setienymarin.com, LoGriP (app), Educación 3.0. Nada jugable en español. | `/reglas/expediente` | DEF + HT (cómo se rellena la rejilla) + Expediente 3×3×3 jugable | ★ |

### 2.3 Genéricos de categoría (lógica, deducción, detectives, misterio, diarios)

| # | Pregunta | Qué responde hoy | URL destino | Formato | ★ |
|---|---|---|---|---|---|
| 25 | ¿Qué es un juego de deducción? | Wikipedia (deducción **social**), Devir, Kinuma (Deductio), catarandamus.com, threefourteengames (todo juegos de mesa). El término, en español, lo posee otro significado. | `/como-jugar` (bloque `h2` "¿Qué es un juego diario de deducción?") | DEF que lo distinga de la deducción social y de mesa | ★ |
| 26 | Recomiéndame un juego de lógica diario para el móvil | Xataka Android (13 juegos), Genbeta, Loxik (plataforma española nueva de retos diarios), juegos-mentales.com/Diario, fr9.es, ErreKGamer. Ninguno es de deducción. | `/juegos-diarios` | RD + lista honesta que incluye a terceros + CJ del día | ★ |
| 27 | ¿Juego de lógica diario gratis en español? | Genbeta, fr9.es/juegosdiarios, Tarkus, Poki, PsicoActiva, Minijuegos, La Ranita. | `/juegos-diarios` y `/juegos-de-logica` | RD + CJ | |
| 28 | ¿Juegos de deducción online gratis? | Tiendas de mesa (Ferre, Punto Lúdico, CJM, Nonly), ElEnemigos (deducción social), Gamedoz. Ningún juego de deducción jugable. | `/expediente` y `/juegos-de-logica` | RD + CJ | |
| 29 | ¿Juegos de detectives online gratis para resolver crímenes? · ¿Casos para resolver? | Cokitos, Juegos.com, GameTop, CoolJuegos, Poki, CrazyGames, Minijuegos, Playhop: portales de minijuegos sin deducción. El resumen recomienda "Betrayal.io, Vortex Point, Murderer (tipo Among Us)". | `/juegos-de-detectives` | RD + CJ + TC ("qué hay en los portales y qué hay aquí") | ★ |
| 30 | ¿App para resolver crímenes en español? · ¿App de detective en español? | galileo.edu (apps policiales reales), App Store ES (Enigmic, "Crímenes: casos abiertos", Criminal Case), Movilzona, CrimeBot 2. | `/juegos-de-detectives` + `/juegos-como-murdoku/sin-descargar` | FAQ + TC de apps (con fecha) | |
| 31 | ¿Juego de detectives para jugar con mi hijo en casa? | jugarijugar.com, Amazon, GuíaAIJU, Educación 3.0 (juegos de mesa), Murparty (PDF), Genially. | `/juegos-como-murdoku/para-ninos` | RD (edad, duración, sin violencia) + CJ 4×4 + PDF | |
| 32 | ¿Juegos de lógica para niños de 8 años online? | Mundo Primaria, Educaenvivo, Cokitos, Poki, Nominis. | `/juegos-como-murdoku/para-ninos` + `/para-profesores` | RD + CJ | |
| 33 | ¿Juegos diarios tipo Wordle en español? | Think Big (Telefónica), Vibe Arcade, wordlees.com, JugaLetras, lapalabra-deldia.com, Minijuegos. Todo palabras. | `/juegos-diarios` | TC de juegos diarios en español (incluidos terceros) + nuestro caso | |
| 34 | ¿Hay algo como Wordle pero de misterio o de detectives? | Nada en español. En inglés: murdle.com, Clues by Sam, Daily Detective. | `/juegos-diarios` y `/` | RD + CJ | |
| 35 | ¿Un juego de misterio diario en español con un caso nuevo cada día? | sudoku-online.org, juegos-mentales.com, Minijuegos, juegosdiarios.com y **murderox.com**, que ya tiene landing en español ("Juego de Misterio de Asesinato Gratis — Puzle Lógico Diario"). | `/` y `/juegos-de-misterio` | RD + CJ + DP (casos publicados hasta hoy) | ★ |
| 36 | ¿Juegos para pensar online gratis para adultos? | Juegos123, Cokitos, juegos-mentales, Games for the Brain, SilverGames, Minijuegos, Poki. | `/juegos-para-pensar` (P2); mientras, `/juegos-de-logica` | RD + CJ | |
| 37 | ¿Acertijos de lógica difíciles con respuesta? | UnComo (40), Pinterest, Planeta Curioso (57), SoyMatemáticas, La Mente es Maravillosa (115): listas de texto. | `/archivo/dificultad/experto`; `/acertijos` solo con acertijos propios jugables (P2) | RD + CJ difícil + DP (tasa de resolución) | |
| 38 | ¿Escape room online gratis en español para jugar en casa? | escaperoomlover.com (70), Eduma, Time Out, SRunners, escaperoomonline.net, zasca.app. | `/juegos-de-misterio` (FAQ honesta: no somos un escape room; casos de 10 minutos; enlace a los buenos) | FAQ de 60 palabras | |
| 39 | ¿"Sudoku de asesinatos"? ¿Sudoku con crimen? | *Killer Sudoku* (Juegos123, sudoku-online.org, sudoku.com): significado equivocado. | `/juegos-como-murdoku/como-se-juega` | FAQ de desambiguación | |
| 40 | ¿Juegos de lógica online gratis? | Poki, Minijuegos, PsicoActiva, Tarkus. | `/juegos-de-logica` | RD + CJ | |

### 2.4 LatAm y variantes de registro (celular, en línea, voseo)

| # | Pregunta | Qué responde hoy | URL destino | Formato | ★ |
|---|---|---|---|---|---|
| 41 | ¿Juego de detectives para el celular gratis? (MX/AR) | Apps de objetos ocultos, CrimeBot 2. | `/juegos-de-detectives` | RD ("no hace falta instalar nada; funciona en el celular") + CJ | |
| 42 | ¿Acertijos o enigmas para resolver en línea? (`acertijos` 22.200 MX; `enigmas` 14.800 MX, 9.900 AR) | Listas de texto (UnComo, Planeta Curioso, etc.). | `/enigmas` y `/acertijos` (P2) | Solo con jugables propios; si es lista de texto, no se lanza | |
| 43 | ¿Murdoku llegó a Chile / Colombia / Perú? ¿Dónde lo juego? | Buscalibre (.cl, .co, .pe): solo libro. | `/juegos-como-murdoku/online` (FAQ) | FAQ de una línea + hora local | |

### 2.5 Producto y confianza (hoy no tienen SERP: solo las responde nuestra web)

| # | Pregunta | Qué responde hoy | URL destino | Formato | ★ |
|---|---|---|---|---|---|
| 44 | ¿Sospechario es gratis? ¿Hace falta registrarse? | — | `/` y `/juegos-como-murdoku/gratis` | RD + FAQ | ★ |
| 45 | ¿Cuánto se tarda en resolver un caso? | — | `/como-jugar` | DP (tiempo medio medido, por día de la semana) | |
| 46 | ¿Los casos tienen siempre una única solución? ¿Se resuelven sin adivinar? | — (las quejas del género en reseñas son justo lo contrario) | `/como-creamos-los-casos` y `/una-sola-solucion` | RD + certificado del solver explicado + DP | ★ |
| 47 | ¿Los casos los escribe una IA? | — | `/como-creamos-los-casos` | RD honesta: la IA escribe la historia, el motor decide la lógica y valida cada pista, una persona firma cada caso | ★ |
| 48 | ¿Es apto para niños? ¿Hay violencia o sangre? | SerPadres (sobre el libro) | `/juegos-como-murdoku/para-ninos` | RD (política *cozy* escrita) | |
| 49 | ¿Quién está detrás de Sospechario? ¿De dónde es? | — | `/sobre-nosotros` | RD: nombre y apellidos, ciudad, desde cuándo, cómo se financia, contacto | ★ |
| 50 | ¿Qué es Sospechario? | — | `/`, `/sobre-nosotros`, `llms.txt`, perfiles sociales | DEF literal de entidad, idéntica en todos los sitios (§3.3, requisito 1) | ★ |
| 51 | ¿Qué diferencia a Sospechario de Murdoku? ¿No es una copia? | — | `/juegos-como-murdoku` (tabla) | TC + RD: caso diario, escrito en español, solución única certificada, interrogatorio de menú vivo, escalafón de técnicas | ★ |
| 52 | ¿Puedo usarlo en clase? ¿Hay licencia de aula? | Andújar (PDF sueltos) | `/para-profesores` | RD + FAQ | |
| 53 | ¿Se puede publicar el caso diario en un periódico o una web? | — | `/para-medios` | RD + FAQ | |
| 54 | ¿Se puede jugar con amigos? ¿Hay duelos? | — | `/duelos` (P2); mientras, FAQ en `/como-jugar` | FAQ | |
| 55 | ¿Cómo comparto el resultado sin destripar el caso? | — | `/como-jugar` | FAQ + imagen de ejemplo | |
| 56 | ¿Funciona sin conexión? ¿Se puede instalar? | — | `/juegos-como-murdoku/sin-descargar` | FAQ + HT | |
| 57 | ¿Qué es el modo Expediente? ¿Y el modo Escena? | — | `/reglas/expediente` y `/reglas/caso-del-dia` | DEF + HT | ★ |

**Lectura transversal de la tabla.** De las 40 preguntas con SERP hoy (1-43), en **31 el buscador recomienda a un tercero que no tiene juego** (guía, tienda, TikTok, portal, blog) y en **cuatro se equivoca** (19: "murdle.com tiene versión en español"; 8 y 39: confunde con Killer Sudoku; 15: mezcla piratería con kits). Las 17 preguntas de producto (44-57) no las responde nadie porque no existe el producto: son gratis de ganar y son las que construyen entidad de marca.

---

## 3. Qué citan hoy los motores generativos y qué debe tener nuestra web

### 3.1 Lo que se ve en las consultas (por tipo de pregunta)

| Tipo de consulta | Qué tipo de página aparece y se resume | Señales que tienen en común |
|---|---|---|
| "juegos como Murdle / Murdoku", "best daily mystery puzzle games" | **Listas** con un `h2` por juego, precio en una línea y frase de "el más parecido en espíritu": murdermysterygameai.com, mindglegames.com (blog de tienda), playinquest.com (blog de un competidor), cluedoku.app/games-like-murdle, murdoku.fans/games-like-murdoku, thinkygames.com/…/similar, greatest.games, fandomwire, dailydle.org (agregador), Escapist. | "2026" en el título o la URL; 6-10 ítems; cada ítem con formato, precio y plataforma; enlaces salientes; **las escriben los propios competidores** y así se citan a sí mismos. |
| "qué es un Murdoku" | **Prensa generalista y familiar** (Telecinco, SerPadres "7 razones", Educación 3.0, Xataka "17 ediciones", Que.es) y **un blog nicho**: elarbolblanco.com. | Definición en el primer párrafo; cifras (17 ediciones, 300.000-500.000 ejemplares, 80 casos); nombre del autor y ciudad; fecha visible. |
| "cómo se juega al Murdoku" | **Vídeo** (YouTube, Shorts, *reels* de Cristinini) + guías con lista numerada (murdoku.fans/how-to-play, madresdesterradas.es). | Pasos numerados con verbo; reglas como frases cortas ("cada fila y columna solo una persona"); el resumen del buscador ya devuelve la lista numerada tal cual. |
| "Murdle vs Murdoku" | **Comparativas de dos columnas** (elarbolblanco, Nokton, murdoku.fans, tiamopastoor). | Criterio por criterio (mecánica, tiempo, narrativa, para quién); cierre "cuál elegir"; "complementarios". |
| "murdoku online / app / pdf" | Web oficial, guía de fans, clon traducido, **páginas "discover" de TikTok** (programáticas, una por consulta), AppBrain, Scribd. | TikTok ha creado una página por cada consulta de cola larga en español; ocupan 2-4 posiciones de cada SERP sin dar el juego. |
| "juego de lógica diario", "juegos diarios tipo Wordle" | Prensa tecnológica (Genbeta, Xataka Android, Think Big), agregadores (juegos-mentales.com/Diario, fr9.es, dailydle.org), plataformas nuevas (Loxik). | Listas de 5-13 con una línea por juego; "gratis", "sin descargar", "en el navegador"; fecha 2026. |
| "juego de deducción", "juegos de detectives" | Wikipedia (deducción social), tiendas y blogs de **juegos de mesa**, portales de minijuegos con categorías finas. | El significado dominante en español no es el nuestro. Hay que definir la categoría o nos definen. |
| "para niños / edad / aula" | Prensa familiar, tiendas de juguetes (con "edad +10" como dato), Orientación Andújar (PDF). | La edad aparece como dato estructurado de ficha de producto; el buscador la extrae y la promedia ("9-10 años"). |

### 3.2 Lo que dicen los estudios de 2025-2026 (con la fuente y lo que nos aplica)

1. **El 88 % de las URL que citan los motores de IA no están en el top 10 orgánico de Google** (Ahrefs, 15.000 consultas). Un dominio nuevo puede ser citado antes de posicionar. Aplica: no esperar al SEO clásico para trabajar GEO.
2. **YouTube es el dominio más citado por AI Overviews (20,9 % de las citas, +34 % en seis meses)** (índice de fuentes 2026, síntesis de seis estudios). En "cómo se juega" ya se ve. Aplica: un vídeo propio de 60-90 s por modo, subido a YouTube con transcripción, es una superficie de cita, no un extra.
3. **Reddit, Wikipedia, YouTube, LinkedIn y Forbes concentran las citas**; Reddit encabeza en ChatGPT y Perplexity (20-24 % en Perplexity). **Los motores prefieren medios ganados a contenido de marca** (estudio de la Universidad de Toronto citado por varias síntesis). Aplica: §3.4.
4. **ChatGPT cita solo el 15 % de lo que recupera** (548.534 páginas, 15.000 *prompts*) y **el 44 % de sus citas sale del primer 30 % de la página**. Aplica: la respuesta va arriba, no tras la introducción.
5. **Estudio GEO de Princeton (KDD 2024, 10.000 consultas, nueve métodos):** citas a fuentes, estadísticas y citas textuales suben la visibilidad un 30-40 % (máximo, no media); el relleno de palabras clave la baja. Aplica: cada página de concepto con una cifra fechada y una cita atribuida.
6. **`FAQPage`, `Article` con autor y fechas, y `HowTo`** son los tres esquemas que las guías de 2026 asocian a más citas en AI Overviews y AI Mode (los multiplicadores "2,1×", "2,3×" son de proveedores, no de estudios independientes: se toman como dirección, no como cifra). Google apenas muestra ya el *rich result* de FAQ, pero el JSON-LD sigue emparejando pregunta y respuesta para un modelo.
7. **`llms.txt` no tiene evidencia de efecto:** el 97 % de esos ficheros no recibió ni una petición en mayo de 2026 (Ahrefs, 137.000 dominios); no hay correlación con citas; Google dice que lo ignora. Adopción del 8,7 % en el top 1.000 de Tranco. Aplica: se publica (cuesta cero), no se le atribuye nada.
8. **Rastreadores:** hay tres familias. Entrenamiento (GPTBot, ClaudeBot, Google-Extended, CCBot), recuperación para citar (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot) y agentes de usuario (ChatGPT-User, Claude-User, Perplexity-User). Bloquear los de recuperación elimina el sitio de las respuestas. La decisión de `arbol-web.md` §4.1.10 (permitir todos) se mantiene y se amplía con los nombres nuevos.
9. **España:** AI Overviews sale en el 29,8 % de las búsquedas sobre medios (Laboratorio de Periodismo, 2.699 palabras clave), en ~25 % de las informativas y España lidera Europa; AI Mode está activo en España desde el 8/10/2025 y en español en todo el mundo; ChatGPT es el 70,5 % del tráfico de IA en España (SE Ranking, 2026) y el 28 % de la población lo usa con frecuencia (Funcas); el tráfico orgánico de los anunciantes analizados cayó un 10,5 % entre enero de 2025 y abril de 2026. Aplica: el orden de motores del resumen (ChatGPT > Google > Perplexity > Gemini > Claude) y que las consultas con AI Overviews son justo las informativas de §2.
10. **Medición oficial:** Search Console tiene desde el 3/6/2026 un informe de "IA generativa" con **impresiones** en AI Overviews y AI Mode por página, país y dispositivo (sin clics ni consultas; despliegue por fases, primero Reino Unido). GA4 tiene desde el 13/5/2026 un canal "AI Assistant" por *referrer*; Perplexity puede caer en "Referral". Entre el 35 y el 70 % de las sesiones desde asistentes llegan sin *referrer* y se cuentan como directo. Aplica: §6.

### 3.3 Qué debe tener nuestra web para ser citada (requisitos, con prioridad y responsable)

| # | Requisito | Concreción para Sospechario | Prioridad | Responsable |
|---|---|---|---|---|
| 1 | **Entidad de marca consistente** | Una frase, literal, en `/`, `/sobre-nosotros`, `llms.txt`, `Organization.description`, `manifest`, bios sociales y kit de prensa: **"Sospechario es un juego diario de deducción y misterio en español: cada día un caso nuevo, con solución única garantizada por un motor lógico, que se resuelve en 5-15 minutos sin registrarse."** El descriptor corto "el caso de misterio de cada día" va en el `<title>` y el logo. Sin variaciones creativas. | P0 | `director-producto` + `periodista-contenidos` |
| 2 | **Página "qué es"** | Dos definiciones, cada una con `h2` en forma de pregunta y patrón "X es un Y que Z": "¿Qué es un Murdoku?" en `/juegos-como-murdoku` (con atribución al autor y al editor, fechada) y "¿Qué es un juego diario de deducción?" en `/como-jugar`, que distinga de deducción social y de juegos de mesa (pregunta 25). | P0 | `periodista-contenidos` |
| 3 | **Página "cómo se juega"** | `HowTo` con pasos imperativos, un paso por `<li>`, ejemplo resuelto, caso 3×3 jugable, y **vídeo propio de 60-90 s por modo** en YouTube con transcripción en la página (requisito nuevo: YouTube es la fuente más citada). | P0 (vídeo P0 para Escena, P1 para Expediente) | `periodista-contenidos` + `creador-social` |
| 4 | **Comparativas honestas en `<table>`** | `/juegos-como-murdoku` (libro / web oficial / apps de tienda / Sospechario), `/juegos-como-murdle` (Murdle / Murdoku / Sospechario, dos modos), `/juegos-diarios` (juegos diarios en español, incluidos terceros). Columnas fijas: formato, idioma, gratis, caso diario, solución única garantizada, app o PWA, para quién. Se dice qué hace mejor el otro. Fecha de última revisión visible. | P0 / P1 | `periodista-contenidos` + `experto-legal` |
| 5 | **Datos propios citables** | Publicados en HTML con fecha de cálculo y actualización automática: casos publicados, tasa media de resolución (global y por día de la semana), tiempo medio, distribución de dificultad medida, racha media, porcentaje que usa el interrogatorio, erratas reconocidas (que serán cero o pocas, y eso es noticia). Viven en `/archivo`, `/como-creamos-los-casos` y un artículo mensual "Los datos de [mes]" en `/blog`. Cuando se cite un dato ajeno (300.000 ejemplares, 2,36/5 de la app), medio y fecha. | P0 (contadores) / P1 (artículo mensual) | `analista-datos` + `desarrollador-backend` |
| 6 | **Autoría verificable** | Cada guía, comparativa y artículo con autor real (nombre, página `/autores/[slug]`, `sameAs` a LinkedIn y a la red que se use), `datePublished` y `dateModified` visibles en el texto. Cada caso, con la firma humana que ya exige M5 de D-007. | P0 | `periodista-contenidos` + `desarrollador-frontend` |
| 7 | **Respuesta en el primer 30 %** | Primer párrafo tras el `h1` responde literalmente a la pregunta de la página en ≤60 palabras; el caso jugable y la tabla van antes que la historia de la marca. Criterio de aceptación del brief de cada landing. | P0 | `periodista-contenidos` |
| 8 | **Frase de no afiliación en las primeras 60 palabras** de cada `/juegos-como-*` | "Sospechario es un juego independiente; Murdoku es una marca de sus titulares." Motivo GEO: si solo va al pie, el modelo puede resumirnos como "Murdoku en español" (§5.1). | P0 | `experto-legal` |
| 9 | **FAQ real con `FAQPage`** | 4-8 preguntas por página tomadas de §2 con su redacción conversacional, respuesta de 40-80 palabras que empiece afirmando. | P0 | `periodista-contenidos` |
| 10 | **HTML servido sin depender de JS** | Enunciado, plano o rejilla, pistas, reglas, FAQ, tabla, precios y contadores en el HTML de la primera respuesta; solo el tablero se hidrata. Prueba de aceptación: `curl` de cada URL P0 contiene el enunciado y las pistas. | P0 | `desarrollador-frontend` |
| 11 | **`robots.txt` abierto a IA** | `Allow` explícito para GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Bingbot, Applebot y Applebot-Extended; `Disallow` solo `/api/`, `/_next/data/`, `/buscar`, `/cuenta`. Sin reglas de *rate limit* en el CDN que devuelvan 403 a estos agentes (comprobar en Cloudflare/Vercel: sus reglas "bloquear bots de IA" vienen activadas por defecto en algunos planes). | P0 | `desarrollador-frontend` |
| 12 | **`llms.txt`** | Tres frases de entidad, las 20 URL más útiles con una línea, cómo citarnos, contacto. Se publica el día 1 y no se mide nada con él. | P0 (30 minutos) | `desarrollador-frontend` |
| 13 | **Schema por tipo de página** | La tabla de `arbol-web.md` §4.2 sin cambios, más `VideoObject` en las páginas con vídeo y `Person` en `/autores/*`. Un solo bloque JSON-LD, validado en CI. | P0 | `desarrollador-frontend` |
| 14 | **Bing Webmaster Tools el día 1** | Copilot y parte de ChatGPT se apoyan en el índice de Bing. | P0 | `desarrollador-frontend` |
| 15 | **Fecha visible y "2026"** | Las páginas comparativas y de lista llevan "Actualizado el [fecha]" arriba y el año en el `<title>` cuando la lista cambie de año. Las listas citadas hoy lo llevan todas. | P0 | `periodista-contenidos` |

### 3.4 Medios ganados: la parte que no controlamos y que pesa más

Los motores citan lo que otros dicen de nosotros más que lo que decimos nosotros. Este plan es de `creador-social` y `periodista-contenidos`, con `director-producto` avisando del disparador D-006 antes de la primera nota de prensa.

1. **Prensa que ya cubre el género y ha sido citada en estas consultas:** Xataka, Genbeta, Xataka Android, Hipertextual (su artículo sobre Enigmic es la única recomendación de app que devuelve el buscador), Educación 3.0, SerPadres, Telecinco, Que.es, El Progreso, Nokton Magazine, Think Big. Ángulo: "el primer juego diario de deducción escrito en español, con solución única garantizada por un motor". El dato que les damos: nuestros propios contadores (requisito 5).
2. **Blogs nicho que el buscador ya resume:** elarbolblanco.com (dos páginas, tres apariciones), madresdesterradas.es, tiamopastoor.com (EN). Pedir prueba y reseña; ofrecer un caso exclusivo para su público.
3. **Listas "games like" (en inglés y español):** thinkygames.com (envío de juego), dailydle.org (agregador de juegos diarios), murdermysterygameai.com, mindglegames.com, playinquest.com, murdoku.fans/games-like-murdoku (es una guía de fans declarada "tributo": aceptará probablemente una entrada). No se pide inclusión a cluedoku.app (competidor directo).
4. **Creadores de TikTok e Instagram que dominan "cómo se juega":** @cristinini (origen del fenómeno según Hipertextual), @martamartiuss, @martstips, @bymaria.aug, @guilletokman (AR). Formato que ya funciona: "resolviendo el caso de hoy" en 60 s. Lo que ofrecemos: el caso del día en exclusiva 12 horas antes, y un "caso con tu nombre" (especial "tú eres sospechoso").
5. **Reddit:** r/murdoku aparece en la SERP de `murdoku online` según Semrush; además r/puzzles, r/WebGames, r/juegos, r/argentina y r/mexico (hilos de "qué juegos diarios jugáis"). Participar con cuenta real, sin *spam*: una entrada de presentación y respuestas cuando alguien pida "algo como Murdle en español".
6. **YouTube propio:** canal con el vídeo de reglas de cada modo, un "caso del sábado explicado" semanal y el "así garantizamos la solución única" (requisito 3). Transcripciones en la página.
7. **Hacker News y Product Hunt** para la pieza técnica "un solver que emite un certificado de deducción paso a paso" (`/como-creamos-los-casos`): es el tipo de contenido que Clues by Sam y mystery-o-matic usaron para arrancar, y ambos aparecen hoy en las listas en inglés.

---

## 4. Competencia en SERP por familia

Advertencia común: dominios vistos desde EE. UU. con consultas en español; posiciones no geolocalizadas. La columna "cómo se le gana" asume las reglas de `arbol-web.md` §3 (marcas ajenas) y §5.3 (archivo).

### 4.1 Familia "Murdoku" (marca ajena) — España y LatAm

| Dominio | Qué es | Qué tiene | Debilidad | Cómo se le gana |
|---|---|---|---|---|
| **murdoku.com** (oficial) | Web del autor con casos en navegador | Marca, autoridad, comunidad (Discord, subreddit), PDF de muestra, dos casos nuevos por semana, duelos y cooperativo según fuentes no verificadas | Interfaz solo en inglés y portugués (según murdoku.fans); sin caso diario; sin español pese a ser España su primer mercado; 500 palabras clave | Caso **diario**, **escrito** en español, con dato de resolución y racha; comparativa honesta que diga que el original es mejor en ilustración y catálogo del libro. No competir por "murdoku" a secas (navegacional) |
| **murdoku.fans** | Guía de fans bilingüe ("tributo") | Páginas para cada intención: /how-to-play, /strategy, /pdf, /murdoku-app, /games-like-murdoku, /murdoku-vs-murdle, /faq, /puzzles, /cases, /about. Aparece en **14 de las 41 consultas en español**: es el dominio que más veces sale | No tiene juego; URL en `/en/` con títulos en español (señal débil de idioma); sin datos propios; sin autoría con nombre; usa la marca ajena como nombre de dominio (riesgo legal que nosotros no corremos) | Misma cobertura de intenciones **con el caso jugable arriba** de cada página; datos propios; autoría; pedir inclusión en su lista "games like" |
| **cluedoku.app** | Clon anglófono traducido, con apps | Caso diario gratis, racha, campaña de 1.000+ casos, duelos, cooperativo, ligas, landings /es/murdoku, /murdoku, /games-like-murdle. Es el competidor **más parecido** y el que hoy se lleva la respuesta a "murdoku online en español" | Producto en inglés traducido ("totalmente traducido" es su argumento); título literal "Murdoku online en español" (uso de marca ajena como nombre de página, más expuesto que nuestra fórmula); nombre que evoca Cluedo (Hasbro); sin solución única garantizada visible; sin autoría; sin tráfico medido en Semrush | Español **nativo** (nombres, humor, escenarios), solución única certificada, dificultad medida, interrogatorio y escalafón (no lo tiene nadie), autoría con nombre, datos publicados. Comparativa que reconozca lo que ellos tienen (campaña de 1.000 casos, apps nativas) |
| **murdokujuego.com** | Galería estática de casos imprimibles en español | Una URL por caso, versión imprimible, solución oculta; el buscador lo recomienda para "jugar en México"; ~448 visitas/mes | No es un juego (no hay comprobación); contenido fino; sin autoría; posible uso de material ajeno | Archivo jugable con ficha de datos por caso (§5.2); PDF propios en `/para-imprimir` |
| **TikTok "discover"** (tiktok.com/discover/…) | Páginas programáticas por consulta | Una página por cada cola larga en español ("como jugar a murdoku online", "murdoku app celular android", "murdoku pdf para imprimir", "en donde compro el libro de murdoku en mexico"…). Ocupan 2-4 posiciones por SERP | No responden nada: son listas de vídeos | No se compite con TikTok en Google; se entra en TikTok (§3.4.4) y se responde en 60 palabras lo que esas páginas no responden |
| **Prensa** (Telecinco, SerPadres, Educación 3.0, Xataka, Que.es, El Progreso, Hipertextual) | Artículos sobre el fenómeno | Definición, cifras (17 ediciones, 300.000-500.000 ejemplares, Sant Jordi), edad, "7 razones" | Sin juego; fecha fija; no volverán a escribir del libro, sí de "lo siguiente" | Ser "lo siguiente" (§3.4.1) con un dato propio que puedan citar |
| **elarbolblanco.com** | Blog nicho | "Qué es Murdoku" y "Murdle vs Murdoku": aparece en 3 consultas | Dos páginas; sin juego; sin actualización | Comparativa mejor y jugable; pedirles reseña |
| **Tiendas** (Amazon, Casa del Libro, Fnac, Kinuma, Caracola, Buscalibre, MercadoLibre) | Fichas del libro | Edad recomendada como dato estructurado, precio, disponibilidad por país | Solo libro | No se compite: se enlaza (comparativa honesta) |
| **Piratería** (GitHub, Scribd, Lectulandia, TikTok "pdf gratis") | Descargas del libro | Capturan `murdoku pdf` (2.400) | Riesgo reputacional para quien se acerque | No perseguir; primera línea de `/para-imprimir` deja claro que los PDF son propios |
| **Apps de tienda** (NozCore 2,36/5; Enigmic 800 niveles con anuncios; Caseoku; Crimoku; ES GAMES; Apo-Games; Fran del Sol; Endless Cases) | Apps no oficiales | Enigmic tiene la única recomendación de prensa (Hipertextual) y 18 idiomas | Anuncios ("11 en 15 minutos"), errores de traducción, pistas con habitaciones inexistentes, varias soluciones, ajustes que se pierden | PWA sin tienda, sin anuncios intrusivos, tabla comparativa con nota y fecha en `/sin-descargar`; la promesa de solución única como diferencia principal |

**Señal a verificar (comprobación 1 de §7):** los pies de vídeo de @cristinini dicen "Pronto haremos los Murdokus de la App". Si el editor o el autor lanzan una app oficial en español, `murdoku app`, `murdoku online` y `descargar murdoku` pasan a ser navegacionales hacia ella y la rama `/juegos-como-murdoku/*` pierde la mitad de su intención. Es el argumento más fuerte a favor de §5.4.

**LatAm.** México: el buscador responde con tiendas (Casa del Libro MX, Amazon MX, Buscalibre), TikTok ("en dónde compro el libro… en México") y murdokujuego.com; la intención "online" (2.400/mes) no tiene producto local. Argentina: MercadoLibre, Buscalibre, Yenny, Planeta AR y el blog de Libroide ("Murdoku llegó a Argentina"); `murdoku` 9.900 y `murdoku online` 2.900 sin nadie. Chile, Colombia y Perú: solo Buscalibre. Cómo se gana: el mismo contenido con tres detalles locales que ningún tercero tiene, ya decididos en D-007: **el caso cambia a medianoche de la hora local**, "celular" y "en línea" como sinónimos en el texto, y precios en moneda local cuando exista Premium. `/mx/` y `/ar/` en el mes 4, como dice `arbol-web.md` §5.2.

### 4.2 Familia "Murdle" (marca ajena) y cuadrícula lógica

| Dominio | Qué es | Debilidad | Cómo se le gana |
|---|---|---|---|
| **murdle.com** (oficial, G. T. Karber) | Caso diario en inglés, tutorial, erratas, Murdle Jr. | Solo inglés; sin app; el buscador llega a afirmar que "tiene versión en español" porque aparece traducido por Google | `/juegos-como-murdle` con RD que corrija el error y un Expediente jugable en español |
| **Amazon / PlanetadeLibros / Scribd / Lectulandia** | Libro "Murdle: Resuelve el crimen" (Temas de Hoy, 2024) y piratería | Intención de libro y de PDF, no de juego | No perseguir; enlazar a la muestra oficial de Planeta |
| **elarbolblanco.com, Nokton Magazine, murdoku.fans, tiamopastoor.com** | Comparativas "Murdle vs Murdoku" | Texto sin juego; tres de cuatro en español: es toda la competencia de la consulta 21 | Comparativa con tabla y los dos modos jugables en la misma página |
| **Listas en inglés** (murdermysterygameai, mindglegames, playinquest/INQUEST, cluedoku, thinkygames, dailydle) | "Games like Murdle 2026" | Ninguna menciona nada en español | Pedir inclusión (§3.4.3) con el argumento "el único en español" |
| **Tiger Algebra, setienymarin.com, LoGriP, wordly.org** | Solucionador, blog, app, clon | Nadie explica ni ofrece la cuadrícula lógica en español como juego | `/reglas/expediente` con DEF + HT + 3×3×3 jugable |
| **Myrdle, Ultra Murdle** (tiendas) | Clones | Anuncios que cierran el juego; inglés/árabe | Tabla de apps en `/juegos-como-murdle` |

Realidad medida: ~330 búsquedas/mes de "jugar Murdle online en español" con KD 0-20. Es la familia más pequeña y la más vacía: se gana con una sola página bien hecha y, sobre todo, es donde la línea de PDF y el Pack Aula tienen la demanda (`propuesta-jugabilidad-expediente.md` §8.1: "la landing de Expediente vende el PDF tanto como el juego").

### 4.3 Genéricos: lógica, deducción, detectives, misterio

| Dominio | Qué es | Debilidad | Cómo se le gana |
|---|---|---|---|
| **Portales de minijuegos** (Minijuegos, Poki, CrazyGames, Cokitos, Juegos.com, CoolJuegos, GameTop, Playhop, Juegos123, SilverGames) | Categorías "detectives", "lógica", "pensar" con decenas de juegos Flash/HTML5 | Contenido fino de categoría, sin deducción real, cargados de anuncios; el buscador recomienda "Betrayal.io, Vortex Point, Murderer" | Página de categoría con **un juego real de deducción arriba**, DEF de la categoría, tabla "qué encontrarás allí / qué aquí"; KD 18-25 en `juegos de detectives` y `juegos de misterio` |
| **Prensa tecnológica** (Xataka Android, Genbeta, Movilzona, ErreKGamer) | Listas "13 juegos de lógica para el móvil" | Sin nada de deducción narrativa; fechadas | Entrar en la siguiente lista (§3.4.1) |
| **Agregadores de lógica** (juegos-mentales.com, fr9.es/juegosdiarios, Tarkus, PsicoActiva, sudoku-online.org) | Sudoku, kakuro, laberintos | Sin narrativa, sin deducción, sin marca | Distinto producto: no se compite, se cita en `/juegos-diarios` |
| **Loxik.io** | Plataforma española nueva de retos diarios (palabras, cálculo, visual) | Sin misterio | Vigilar: es el único actor español nuevo con modelo "diario en navegador" |
| **murderox.com** | Clon anglófono con landing en español "Puzle Lógico Diario" | Traducción automática, sin marca, sin datos | Español nativo + datos + autoría |
| **Wikipedia (deducción social), Devir, Kinuma, Punto Lúdico, CJM** | Juegos de mesa | Significado distinto | Definir "juego diario de deducción" (requisito 2); no pelear "juegos de deducción" a secas |
| **Listas de acertijos** (UnComo, Planeta Curioso, La Mente es Maravillosa, SoyMatemáticas) | 40-115 acertijos de texto con respuesta | Texto, sin interacción; KD 33-43 | Solo con acertijos propios jugables (`/acertijos`, P2); si no, no se entra |
| **Escape rooms online** (escaperoomlover, escaperoomonline.net, zasca.app) | Listas y salas | Otro producto | FAQ honesta en `/juegos-de-misterio` y enlaces salientes |

### 4.4 Imprimibles y aula

| Dominio | Qué es | Debilidad | Cómo se le gana |
|---|---|---|---|
| **orientacionandujar.es** | Mayor portal docente en español; "35 murdokus listos para jugar", cuadernos temáticos; #2-#8 en casi todo lo infantil e imprimible | PDF sueltos sin solución única garantizada, sin progresión por curso, sin guía docente ni rúbrica; usa marca ajena y PI de terceros (Stranger Things, Mario) | `/para-profesores` con ficha por curso, competencia, tiempo de aula, rúbrica, licencia de aula, PDF de muestra gratis y `LearningResource`; casos sin víctima para primaria; nunca PI ajena |
| **actividadesdeinfantilyprimaria.com** | "Murdokus Club A" (3.º Infantil) | Igual que Andújar, menor | Igual |
| **murparty.com, Genially (vistas públicas), TPT, Twinkl** | PDF de detectives para niños, plantillas | Genéricos; Genially es plataforma, no competidor: candidato a alianza | Reto embebible con solución única (B2B docente) |
| **Piratería del libro** | GitHub, Scribd, TikTok | — | No acercarse a la intención |

### 4.5 Juegos diarios

| Dominio | Qué es | Debilidad | Cómo se le gana |
|---|---|---|---|
| **Clones de Wordle en español** (wordlees.com, lapalabra-deldia.com, JugaLetras, wordle.danielfrg.com, Minijuegos) | Palabra del día | Palabras, no misterio; algunos con marca ajena | `/juegos-diarios` como la lista honesta de juegos diarios en español (ser el "dailydle.org" en español) con nuestro caso arriba |
| **Agregadores** (juegos-mentales.com/Diario, fr9.es, minijuegos.com/juegos-diarios, dailydle.org) | Listas de dailies | Sin narrativa; dailydle solo inglés | Pedir inclusión en dailydle.org; lista propia |
| **Prensa** (Think Big, Genbeta, Vibe Arcade) | "Apple, Samsung y LinkedIn apuestan por juegos diarios" | Fechadas | Ser el ejemplo español en la siguiente pieza |
| **eldiario.es** (navegacional en `juegos diarios`) | Sección de juegos | — | No se compite; se mide CTR real a los 60 días (`arbol-web.md` §2.5) |

---

## 5. Riesgos de posicionamiento

### 5.1 Uso de marcas ajenas en títulos y URL (fórmula segura resumida)

La fórmula de `arbol-web.md` §3.1, validada pendiente por `experto-legal` (§3.2), se resume y se completa con tres reglas nuevas que nacen de este análisis:

- **URL:** la marca ajena solo dentro de una carpeta que la encuadra como comparación: `/juegos-como-murdoku/online`, `/juegos-como-murdle`. Nunca `/murdoku`, `/murdoku-online`, ni subdominio. Las variantes `/murdoku-online`, `/murdoku-en-espanol`, `/alternativas-a-murdoku` son 301, no páginas.
- **`<title>`:** la marca ajena nunca abre el título y nunca va sin el marco. Patrón: `Juegos como Murdoku para jugar online gratis — un caso nuevo cada día | Sospechario`. Prohibido `Murdoku online gratis | Sospechario`. **cluedoku.app hace justo lo prohibido** ("Murdoku online en español: resuelve murdokus gratis cada día"): es un precedente de lo que no se copia, no de lo que funciona.
- **`<h1>`:** siempre con "como", "alternativa a", "si te gusta", "parecido a" o en pregunta; un solo `h1`; la marca propia presente.
- **Nunca:** marca ajena en nombre de producto, dominio, logo, favicon, `manifest.name`, tiendas, redes, hashtag principal, imágenes OG, capturas, nombres de personajes o de casos, ni como anchor interno hacia `/`; nunca sustantivada ("nuestros murdokus"): se dice **"casos de deducción"**.
- **Siempre, en cada `/juegos-como-*`:** caso jugable completo arriba, aviso visible de no afiliación con enlace a `/legal/marcas`, comparación honesta que diga qué hace mejor el otro, enlace saliente al original.
- **Regla GEO nueva 1:** la frase de no afiliación va **en las primeras 60 palabras**, no solo en el aviso. Un modelo que extraiga el primer párrafo debe leer "Sospechario es un juego independiente". Si no, el riesgo es que ChatGPT o Gemini nos presenten como "la versión en español de Murdoku", que es exactamente el uso a título de marca que no podemos permitirnos.
- **Regla GEO nueva 2:** en las FAQ, la primera mención de la marca ajena lleva siempre el genérico delante: "el libro Murdoku", "el juego Murdle". Nunca "Murdoku" como sustantivo común.
- **Regla GEO nueva 3:** ninguna cifra ajena (ediciones, ejemplares, notas de apps) sin medio y fecha. Es lo que convierte la comparativa en publicidad comparativa lícita y, de paso, lo que los motores citan.
- **Cluedo y Wordle:** `/juegos-como-cluedo` y `/juegos-diarios-como-wordle` siguen sin publicarse sin luz verde expresa. cluedoku.app ya asume ese riesgo con Hasbro; nosotros cubrimos la intención con `/juegos-de-detectives` y `/juegos-diarios`.
- **Anuncios de pago sobre "murdoku":** supuesto distinto y más expuesto que el SEO; criterio previo por escrito (ya en `arbol-web.md` §3.2.7).

### 5.2 Contenido fino en el archivo de casos

Regla de `arbol-web.md` §5.3 sin cambios: una página `/caso/AAAA-MM-DD` solo es indexable si tiene título propio, ≥120 palabras únicas de ambientación y enunciado, dificultad medida, número de pistas y, cuando haya partidas, tasa de resolución y tiempo medio; si no, `noindex`. Añadido GEO:

- **El archivo fino también diluye la entidad.** Un modelo que rastree 365 páginas casi iguales aprende que el sitio es una plantilla; las citas van a las 20-30 páginas de concepto. Por eso `sitemap-casos.xml` solo lleva casos con ficha completa y `llms.txt` no enumera casos.
- **Lo que hace única a una página de caso** y a la vez citable: la ficha de datos en HTML (fecha, día de la semana y su regla, modo, dificultad medida, pistas, % de resolución, tiempo medio, técnica que exige según el certificado). Es contenido que ningún competidor puede generar.
- Auditoría mensual: URL indexadas del archivo / URL con al menos una impresión en Search Console; si baja del 30 %, se poda con `noindex`.
- La misma regla se aplica a `/archivo/escenario/*` (≥8 casos y texto propio) y a `/acertijos` y `/enigmas` (solo con jugables propios).

### 5.3 Canibalización entre landings

Pares concretos de riesgo detectados al cruzar §2 con el árbol:

| Conflicto | Por qué | Resolución |
|---|---|---|
| `/juegos-como-murdoku/online` · `/en-espanol` · `/gratis` · `/sin-descargar` | Las cuatro responden a "jugar Murdoku online gratis en español sin descargar". Google elegirá una y las otras oscilarán | `/online` es la única página "jugar ahora" y la canónica de la intención principal; las otras tres no repiten su primer párrafo ni su FAQ: `/en-espanol` habla de idioma nativo y LatAm, `/gratis` de qué es gratis para siempre y sin registro, `/sin-descargar` de la PWA y las apps de tienda. Se comprueba en Search Console a los 60 días (informe de páginas por consulta): si dos URL alternan para la misma consulta durante cuatro semanas, se fusionan con 301 |
| `/como-jugar` · `/reglas/caso-del-dia` · `/juegos-como-murdoku/como-se-juega` | Tres páginas explican cómo se juega | `/como-jugar` = tutorial jugable de Sospechario (60 s); `/reglas/*` = referencia por modo, sin marca ajena; `/juegos-como-murdoku/como-se-juega` = reglas del Murdoku **y** en qué se parece y se diferencia el nuestro (es la única con la marca ajena y la única con `HowTo` sobre el juego ajeno) |
| `/juegos-diarios` · `/archivo` | Las dos apuntan a `juegos diarios` (2.900) | `/juegos-diarios` es la landing de categoría (lista de juegos diarios en español + nuestro caso); `/archivo` apunta a "archivo / calendario de casos / pasatiempos diarios" y lleva los contadores |
| `/juegos-de-detectives` · `/juegos-de-misterio` | Misma intención en México | `/juegos-de-detectives` = resolver casos (apps, celular, LatAm); `/juegos-de-misterio` = ambientación y escape rooms (FAQ honesta); FAQ distintas |
| `/juegos-como-murdle` · `/reglas/expediente` | Las dos explican la cuadrícula lógica | `/reglas/expediente` = DEF y HT sin marca ajena; `/juegos-como-murdle` = comparativa y "cuál elegir" |
| `/caso/[hoy]` · `/` | Duplicado diario | Ya resuelto: 302 a `/` hasta D+1 |

### 5.4 Dependencia de una sola familia (Murdoku) y cómo diversificar

- **El dato.** De las ~23.000 búsquedas/mes de intención directa que cubre el lanzamiento, 21.300 llevan la marca ajena. Semrush ya muestra el pico de `murdoku` "en los dos últimos meses": la moda puede enfriarse en 2027 (`analisis-estrategico.md`) o, peor para nosotros, **consolidarse con una app oficial** (la señal de Cristinini). En los dos escenarios la rama `/juegos-como-murdoku/*` pierde valor.
- **Diversificación 1 — genéricos a P0.** `/juegos-diarios` (2.900 ES, 2.400 MX, 2.400 AR con KD 20) y `/juegos-de-detectives` (320 ES, 880 MX, 720 AR, KD 25) suben de P1 a P0. Motivo visto en §2: son las dos preguntas genéricas donde el resumen del buscador hoy **no tiene nada que recomendar en español** (26, 29, 35). Coste: dos landings más con el mismo caso jugable.
- **Diversificación 2 — la entidad de categoría.** Definir y repetir "juego diario de deducción" (requisito 2) antes de que Loxik, murderox o un medio lo hagan. Es la frase que queremos que un modelo asocie a Sospechario cuando nadie diga "Murdoku".
- **Diversificación 3 — marca propia por medios ganados** (§3.4). Una mención en Xataka o Genbeta vale más para ChatGPT que diez landings, y es la única forma de que la consulta navegacional `sospechario` exista. Objetivo mes 3: 3 menciones en prensa, 2 listas "games like", 1 hilo en Reddit con respuestas.
- **Diversificación 4 — Expediente como línea propia.** La demanda de cuadrícula lógica es pequeña pero es de PDF, aula y libro: no depende de la moda del libro ajeno y es la que activa `/para-profesores`, `/packs` y `/para-medios`.
- **Diversificación 5 — LatAm.** Argentina tiene `murdoku` 9.900 con KD 29 y `juegos diarios` con KD 20; México `acertijos` 22.200 y `enigmas` 14.800. El contenido local (hora, léxico, moneda) del mes 4 es la segunda pata.
- **Diversificación 6 — canales que no son buscador.** Newsletter diaria, PWA instalada y compartir sin spoiler (ya en el catálogo) son el seguro contra cualquier cambio de SERP.

### 5.5 Otros riesgos detectados

- **Piratería:** `murdoku pdf` (2.400) y `murdle pdf` (390) están ocupados por GitHub, Scribd, Lectulandia y vídeos "libro completo gratis". Acercarse a esa intención asocia la marca a la piratería ante un modelo que resume. `/para-imprimir` dice en la primera línea que los PDF son propios.
- **Páginas "discover" de TikTok:** ocupan la cola larga en español y no se pueden desplazar con SEO. Se compite dentro de TikTok.
- **Errores de los motores:** el buscador afirma hoy que "murdle.com tiene versión en español" y confunde "sudoku de asesinatos" con Killer Sudoku. Nuestras FAQ de desambiguación (8, 19, 39) son la corrección que un modelo puede citar.
- **Cifras de proveedores:** los "2,1×" y "2,3×" de FAQ schema vienen de agencias; no se usan como argumento de negocio.

---

## 6. Plan de medición GEO

No hay Search Console para asistentes. El plan combina un panel manual mensual con cuatro señales automáticas. Responsable: `analista-datos`; ejecución del panel: `estratega-growth-seo`; hoja: `docs/seo/geo-seguimiento.csv` (se crea con la primera medición, el día 30 tras el lanzamiento).

### 6.1 Panel mensual de consultas (las 25 marcadas ★ en §2)

Preguntas 1, 2, 4, 5, 6, 7, 9, 10, 13, 18, 19, 20, 21, 24, 25, 26, 29, 35, 44, 46, 47, 49, 50, 51 y 57. Cubren las cinco familias, las dos marcas ajenas, LatAm y la entidad propia. Se redactan tal cual están en la tabla (registro conversacional), no como palabras clave.

**Cómo se ejecuta.** Un día fijo al mes (el día 1), cada pregunta en:
1. **ChatGPT** (con búsqueda activada, sesión sin memoria, cuenta gratuita).
2. **Google AI Overviews y AI Mode** (navegación privada, `gl=es` y `hl=es`; segunda pasada `gl=mx`).
3. **Perplexity** (sin sesión).
4. **Gemini** (sesión nueva).
Opcional trimestral: Copilot y Claude.
Dos localizaciones: España y México (VPN o colaborador local). Misma redacción en las dos; en México se cambia "móvil" por "celular" donde la tabla lo indica.

**Qué se registra por fila** (columnas del CSV): `fecha`, `motor`, `pais`, `pregunta_id`, `pregunta_literal`, `aparece_sospechario` (sí/no), `posicion_cita` (1.ª, 2.ª… o "mención sin enlace"), `url_citada`, `frase_exacta` (copiada), `competidores_citados` (dominios, en orden), `dato_correcto` (sí/no: ¿lo que dice de nosotros es verdad?), `dice_independiente` (sí/no: ¿deja claro que no somos Murdoku?), `hay_bloque_ia` (para Google: ¿salió AI Overviews?), `captura` (ruta del archivo).

**Indicadores derivados:** cobertura (preguntas con cita / 25) por motor y país; cuota de cita frente a cluedoku.app y murdoku.fans (las dos referencias hoy); tasa de error (respuestas que nos atribuyen algo falso); tasa de "independiente".

### 6.2 Señales automáticas

| Señal | Herramienta | Qué se mira | Frecuencia |
|---|---|---|---|
| Impresiones en AI Overviews y AI Mode | Search Console, informe "IA generativa" (junio 2026; despliegue por fases, comprobar si la propiedad lo tiene) | Impresiones por página y país; qué landings entran en el bloque | Semanal |
| Referidos desde asistentes | PostHog (grupo de canal propio por *referrer*: `chatgpt\.com \| chat\.openai\.com \| perplexity\.ai \| gemini\.google\.com \| claude\.ai \| copilot\.microsoft\.com \| bing\.com/chat \| you\.com` (en el regex real, sin espacios alrededor de las barras)) y, si se usa GA4, su canal "AI Assistant" con la regla de IA por encima de "Referral" | Sesiones, página de entrada, si juegan el caso, retención D1 de ese canal | Semanal |
| Rastreo de bots de IA | Logs del CDN/servidor: recuento por *user-agent* (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended, Bingbot, Applebot) y códigos de respuesta | Si un agente lleva 14 días a cero o devuelve 403, alerta: no nos pueden citar | Semanal, con alerta |
| Índice de Bing | Bing Webmaster Tools | URL indexadas y errores (alimenta Copilot y parte de ChatGPT) | Mensual |
| Menciones ganadas | Búsqueda manual `"sospechario"` en Google, Reddit, YouTube y TikTok; alertas de Google | Nuevas menciones, listas "games like" que nos incluyen | Mensual (también alimenta el disparador D-006) |
| Demanda de marca | Search Console: consultas con "sospechario" (impresiones y clics) | Crecimiento mensual; es el mejor indicador de que GEO y medios ganados funcionan aunque el 35-70 % de las sesiones desde asistentes lleguen como "directo" | Mensual |

### 6.3 Objetivos (fijados antes del dato)

- **Mes 1:** rastreados por los cuatro motores (logs); llms.txt y robots publicados; 0 errores 403 a bots de IA; panel base registrado (puede ser 0/25).
- **Mes 3:** citados en **8 de 25** preguntas en **2 de 4** motores (objetivo heredado de `arbol-web.md` §4.4); tasa de error 0; "dice independiente" en el 100 % de las citas de la familia Murdoku; 3 menciones ganadas.
- **Mes 6:** **15 de 25** en **3 de 4** motores; citados en al menos una lista "games like" en inglés y una en español; referidos desde asistentes ≥3 % de las sesiones nuevas; demanda de marca `sospechario` ≥500 impresiones/mes en Search Console.

### 6.4 Qué se hace con el dato

- Pregunta sin cita en ningún motor durante dos meses → se revisa la página destino contra los 15 requisitos de §3.3 (sobre todo 7 y 9) y se busca una mención ganada para esa pregunta.
- Cita con dato falso → se corrige en la página (RD más explícita) y, si es Google, se usa el control de Search Console si existe; se registra en `docs/seo/geo-seguimiento.csv` con la fecha de corrección.
- Cita que no dice "independiente" → aviso a `experto-legal`; se refuerza la frase de las primeras 60 palabras.
- Competidor citado donde nosotros no → se anota qué formato tiene su página (lista, tabla, vídeo) y se replica el formato, no el texto.

---

## 7. Comprobaciones manuales pendientes (no pude hacerlas desde aquí)

1. **"Pronto haremos los Murdokus de la App"** (@cristinini): abrir los vídeos y confirmar si se refiere a una app oficial, a NozCore o a otra. Cambia la prioridad de §5.4.
2. **SERP real desde España y México** para las 25 preguntas ★: posiciones, *People Also Ask* y si sale AI Overviews (confirma el código 36 de Semrush de `arbol-web.md` §1).
3. **murdoku.com a mano:** idiomas de la interfaz, si hay caso diario, duelos, ligas y Premium (decide el ángulo honesto de la tabla comparativa).
4. **cluedoku.app a mano:** idioma real del contenido (¿traducción automática?), si afirma solución única, autoría, precio, y el texto exacto de sus landings `/es/murdoku` y `/games-like-murdle`.
5. **murdoku.fans:** quién lo firma, si acepta entradas en `/games-like-murdoku`, y si tiene tráfico (Semrush `domain_ranks`).
6. **Search Console:** si el informe "IA generativa" está disponible para propiedades nuevas en España, y el control de inclusión/exclusión.
7. **Cloudflare/Vercel:** comprobar la regla por defecto de bloqueo de bots de IA en el plan contratado.
8. **elarbolblanco.com y madresdesterradas.es:** contacto y disposición a reseñar.
9. **dailydle.org y thinkygames.com:** formulario de envío y requisitos.
10. **r/murdoku:** existencia, tamaño y reglas de autopromoción.

---

## 8. Fuentes: las 60 consultas y los resultados usados

**Familia Murdoku (España):** "murdoku online" · "murdoku online gratis en español jugar" · "juegos como murdoku alternativas" · "cómo se juega al murdoku reglas" · "qué es un murdoku" · "murdoku app oficial android iphone" · "murdoku pdf gratis descargar" · "murdoku para niños edad recomendada" · "murdoku varias soluciones error errata solución única" · "murdoku reddit r/murdoku" · "murdoku viaje al pasado nuevo libro 2026 planeta ventas" · "murdoku fácil para empezar principiantes consejos" · "murdoku trucos estrategia cómo resolver más rápido" · "murdoku app en español sin anuncios opiniones" · "murdoku cómo empezar a jugar qué necesito lápiz goma" · "murdoku profesores aula actividad comprensión lectora secundaria" · "murdoku tiktok cristinini viral fenómeno pasatiempo" · "murdoku ediciones ejemplares vendidos récord Temas de Hoy 2026" · "hipertextual adicto a los murdokus juego perfecto para el móvil" · "murdoku.fans guía tributo Manuel Garand" · "cluedoku.app detective sudoku caso diario".
**LatAm:** "murdoku méxico dónde jugar comprar" · "murdoku argentina online libro" · "murdoku chile colombia perú libro furor".
**Familia Murdle:** "murdle online en español jugar" · "juegos como murdle gratis" · "murdle o murdoku diferencias cuál elegir" · "murdle resuelve el crimen pdf español libro" · "best games like murdle daily" · "Clues by Sam daily puzzle review how it works".
**Genéricos:** "juegos de deducción online gratis" · "juego de lógica diario gratis en español" · "juegos de detectives online gratis resolver crímenes" · "app para resolver crímenes en español" · "qué es un juego de deducción" · "juego de detectives para jugar con niños en casa" · "juegos diarios tipo wordle en español lista" · "recomiéndame un juego de lógica diario para el móvil" · "puzzle de cuadrícula lógica online español quién dónde con qué" · "juegos para pensar online gratis para adultos" · "acertijos de lógica con respuesta para adultos difíciles" · "juego de misterio diario en español navegador nuevo caso cada día" · "sudoku de asesinatos juego online gratis" · "escape room online gratis en español para jugar en casa" · "juegos de lógica para niños de 8 años online gratis" · "\"juego diario de deducción\"" · "best daily mystery puzzle games".
**Imprimibles y aula:** "murdokus para imprimir gratis pdf primaria".
**GEO y medición:** "AI Overviews citations study which sources get cited 2026" · "ChatGPT search citations study what pages get cited 2026" · "Perplexity citation sources study 2026 what domains does Perplexity cite" · "llms.txt adoption 2026 does it work evidence" · "AI Overviews España porcentaje búsquedas español 2026" · "robots.txt allow GPTBot OAI-SearchBot PerplexityBot ClaudeBot Google-Extended list AI crawlers 2026" · "ChatGPT uso en España 2026 usuarios porcentaje población buscador" · "Google AI Mode España lanzamiento español 2026" · "generative engine optimization study Princeton GEO methods citing sources statistics quotations visibility increase" · "how to get cited by Gemini AI Overviews structured data FAQ schema author bylines 2026 study" · "track AI referral traffic referrer chatgpt.com perplexity.ai gemini.google.com copilot GA4 PostHog 2026" · "Google Search Console AI Overviews AI Mode impressions reporting 2026".

**URL de referencia citadas en el texto (selección):**
- Competidores y satélites: https://murdoku.com/play/ · https://murdoku.fans/en/ (y /how-to-play, /strategy, /pdf, /murdoku-app, /games-like-murdoku, /murdoku-vs-murdle, /faq, /puzzles) · https://cluedoku.app/es/murdoku · https://cluedoku.app/games-like-murdle · https://murdokujuego.com/ · https://murderox.com/ · https://dailydetective.org/ · https://cluesbysam.com/ · https://murdle.com/ · https://loxik.io/ · https://www.orientacionandujar.es/2026/06/07/35-murdokus-listos-para-jugar-y-divertirse/ · https://www.actividadesdeinfantilyprimaria.com/2026/08/31/murdokus-para-3-o-de-infantil-1-o-de-primaria/
- Prensa y blogs citados por el buscador: https://www.telecinco.es/noticias/cultura/20260525/murdoku-nuevo-genero-arrasa-ventas-permite-resolver-crimenes_18_019260654.html · https://www.serpadres.es/familia/murdoku-conectar-familias-verano.html · https://www.educaciontrespuntocero.com/libros/que-son-los-murdokus/ · https://www.elarbolblanco.com/que-es-murdoku-pasatiempo-misterio-logica/ · https://www.elarbolblanco.com/murdle-vs-murdoku-diferencias/ · https://noktonmagazine.com/he-jugado-a-los-pasatiempos-del-verano-y-los-comparo-murdoku-murdle-el-crimen-del-verano-o-cuaderno-blackie/amp/ · https://www.que.es/2026/07/06/murdoku-libro-exito-17-ediciones/ · https://www.xataka.com/magnet/nueva-sensacion-editorial-mundo-puzles-mezcla-sudokus-cluedo-esta-arrasando-va-17-edicion · https://hipertextual.com/actualidad/me-he-vuelto-adicto-a-los-murdokus-y-ahora-he-encontrado-el-juego-perfecto-para-el-movil-hay-miles-y-son-100-gratis/ · https://madresdesterradas.es/index.php/2026/02/07/murdoku/ · https://www.genbeta.com/paso-a-paso/wordle-se-te-queda-corto-este-juego-logica-diario-todo-desafio · https://www.xatakandroid.com/aplicaciones-android/13-juegos-de-logica-para-ejercitar-tu-mente-desde-el-movil · https://libroide.ar/blogs/news/murdoku-llego-a-argentina-el-libro-de-crimenes-y-logica-que-no-se-lee-se-resuelve
- Listas "games like" en inglés: https://murdermysterygameai.com/article/best-daily-mystery-puzzle-games-like-murdle-2026 · https://mindglegames.com/blogs/host-play-solve/the-best-games-like-murdle-to-play-in-2026-that-go-way-beyond-the-daily-puzzle · https://playinquest.com/blog/games-like-murdle/ · https://thinkygames.com/games/murdoku/similar/ · https://www.dailydle.org/ · https://greatest.games/blog/best-daily-puzzle-games
- Creadores: https://www.tiktok.com/@cristinini/video/7673986142525574422 · https://www.tiktok.com/@martamartiuss/video/7636425084919401750 · https://www.youtube.com/watch?v=x3ZqrDcr2as
- Estudios y datos GEO: https://ahrefs.com/blog/ai-overview-citations-top-10/ · https://everything-pr.com/google-ai-overviews-citation-source-index-2026 · https://everything-pr.com/ai-platform-citation-source-index-2026 · https://everything-pr.com/perplexity-citation-source-index-2026 · https://www.5wpr.com/research/state-of-ai-citations-2026/ · https://contently.com/2026/04/29/top-sources-llms-cite/ · https://kime.ai/blog/chatgpt-citation-sources-decoded · https://subscribepr.com/blog/how-to-get-cited-by-chatgpt/ · https://arxiv.org/pdf/2311.09735 (Princeton GEO) · https://www.digitalapplied.com/blog/llms-txt-in-practice-adoption-evidence-2026 · https://www.1clickreport.com/blog/llms-txt-evidence-2026 · https://www.anagram.ai/blog/ai-crawlers-explained-gptbot-claudebot-perplexitybot-and-how-to-let-them-in-2026 · https://auditae.app/blog/ai-crawlers-explained · https://heeya.fr/en/blog/schema-org-faq-howto-google-ai-overviews · https://www.menra.ai/guides/ai-overviews-structured-data
- España y medición: https://laboratoriodeperiodismo.org/impacto-de-ai-overviews-en-espana-google-activa-resumenes-generativos-en-el-298-de-busquedas-sobre-medios/ · https://seranking.com/es/blog/trafico-ia-espana/ · https://www.programaticaly.com/portada/ai-overviews-reduce-105-trafico-organico-anunciantes · https://marketing4ecommerce.net/espana-ai-overviews-trafico/ · https://www.funcas.es/prensa/el-uso-frecuente-de-chatgpt-en-espana-sube-del-4-al-28-entre-2023-y-2025/ · https://www.jellyfish.com/es-es/blog/google-lanza-su-nuevo-modo-ia-en-espana/ · https://www.trecebits.com/google-ai-mode-fin-buscador-internet/ · https://www.searchenginejournal.com/google-reports-ai-search-impressions-how-to-read-them/582824/ · https://www.orbitmedia.com/blog/track-ai-traffic-ga4/ · https://www.darwinapps.com/blog/how-to-track-chatgpt-gemini-and-perplexity-referral-traffic-in-ga4-and-crm/

---

*Cambios a este documento: los registra `estratega-growth-seo` con fecha y motivo; las decisiones que se deriven (subida de `/juegos-diarios` y `/juegos-de-detectives` a P0, vídeo de reglas como requisito P0, reglas GEO nuevas de §5.1) las registra `director-producto` en `docs/decisiones.md`.*
