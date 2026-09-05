# Árbol web v1 (sitemap) — SEO clásico + GEO

Fecha: 5 de septiembre de 2026
Responsable: `seo-crecimiento`. Redacción de landings: `periodista-contenidos`. Implementación: `desarrollador-frontend`. Validación de marcas: `experto-legal`.
Fuente de datos: Semrush, bases **es**, **mx** y **ar**, informes `phrase_these`, `phrase_fullsearch`, `phrase_questions`, `phrase_organic`, consultados el 5/9/2026. Tabla completa en `docs/keywords-arbol-web.csv`.
Convención: `[marca]` = nombre de marca propia todavía por decidir (ver `analisis-estrategico.md` §3.3). Ningún slug lleva acentos ni ñ.

---

## 0. Resumen de decisiones

1. **La home es el juego.** `/` sirve el caso del día en HTML, no una portada de marketing. Todo lo demás cuelga de ahí.
2. **Ninguna marca ajena va sola en un slug.** Existe la carpeta comparativa `/juegos-como-murdoku/` y dentro los modificadores (`/online`, `/gratis`, `/en-espanol`…). Nunca `/murdoku`, nunca `/murdoku-online`.
3. **Cada landing de intención contiene un caso jugable completo**, no un artículo que enlaza al juego. Es la única defensa real contra que Google la trate como doorway page.
4. **Una sola variante de idioma al lanzar** (`es`, x-default). Subcarpetas `/mx/` y `/ar/` solo cuando haya contenido diferenciado, no antes (razonamiento en §5.2).
5. **El archivo no se publica en bruto.** Una página de caso solo se indexa si tiene texto propio y datos del motor (§5.3). Si no, `noindex`.
6. **GEO se diseña desde el HTML, no se añade después**: respuesta directa en las primeras 60 palabras, entidades consistentes, autoría, fecha, datos propios citables, `llms.txt` (§4).

---

## 1. Qué dicen los datos (lo que sostiene el árbol)

Todo verificado en Semrush el 5/9/2026. Nada estimado a ojo.

**Racimo "Murdoku con intención de jugar" (España): ~21.300 búsquedas/mes.**

| Palabra clave | Vol. ES | KD | Intención |
|---|---|---|---|
| murdoku online | 9.900 | 29 | informacional-jugar |
| murdoku en español | 2.400 | 30 | informacional |
| murdoku gratis | 1.900 | 41 | informacional |
| murdoku juego gratis | 1.900 | 36 | informacional |
| murdoku en español gratis | 1.600 | 25 | informacional |
| descargar murdoku gratis | 1.300 | 30 | informacional |
| jugar murdoku online | 480 | 13 | navegacional |
| murdoku on line | 480 | 33 | informacional |
| murdoku español | 390 | 23 | informacional |
| murdoku play | 390 | 31 | navegacional |
| murdoku online español | 260 | 26 | informacional |
| murdoku en español online | 140 | 33 | informacional |
| murdoku jugar | 110 | 0 | — |
| murdoku online gratis | 90 | 33 | informacional |
| murdoku español online / online en español | 70 + 70 | 0 | — |
| murdoku descargar gratis | 170 | 0 | — |

**Racimo cabecera y contenido:** `murdoku` 33.100 (KD 35, navegacional), `murdoku pdf` 2.400 (KD 33), `murdoku en español para imprimir` 210 (KD 28), `murdoku para imprimir` 140 (KD 0), `como se juega al murdoku` 320 (KD 30), `murdoku como jugar` 170 (KD 0), `reglas murdoku` 140 (KD 0), `murdoku soluciones` 140 (KD 28), `murdoku para niños` 210 (KD 0), `murdoku niños` 140 (KD 0), `murdoku facil` 170 (KD 0), `murdoku edad recomendada` 70 (KD 0).

**Racimo Murdle (España):** `murdle` 3.600 (KD 20, casi todo intención de libro), `murdle resuelve el crimen` 1.300 (KD 22), `murdle pdf` 390, `murdle online` 170 (**KD 0**), `murdle español` 70 (KD 20), `murdle español online` 70 (KD 0), `murdle en español` 20 (KD 0). Total "jugar Murdle online en español" ≈ 330/mes, prácticamente sin competencia.

**Genéricos de categoría (España):** `pasatiempos` 27.100 (KD 61), `pasatiempos gratis` 12.100 (KD 61), `acertijos` 8.100 (KD 41), `pasatiempos online` 6.600 (KD 67), `pasatiempos diarios` 5.400 (KD 50), `juegos diarios` 2.900 (KD 37), `acertijos con respuesta` 1.900 (KD 33), `juegos de logica` 1.600 (KD 27), `juegos mentales` 1.600 (KD 49), `juegos diarios gratis` 1.300 (KD 28), `enigmas` 1.300 (KD 32), `acertijos de logica` 720 (KD 27), `escape room online gratis` 720 (KD 39), `cluedo online` 480 (KD 17), `juegos de ingenio` 480 (KD 15), `juegos de logica online` 320 (KD 25), `juegos de detectives` 320 (KD 25), `pasatiempos para imprimir` 320 (KD 19), `juegos de misterio` 260 (KD 18), `juegos de logica para niños` 170 (KD 8), `juegos de logica para imprimir` 110 (KD 10). `wordle español` 110.000 (KD 53) marca el techo de la categoría, no es un objetivo.

Aviso importante: **`pasatiempos` es un racimo navegacional de medios** (`pasatiempos el pais` 22.200, `el pais pasatiempos` 6.600, `20 minutos pasatiempos` 2.900, `la vanguardia pasatiempos` 1.300, `abc pasatiempos` 1.000). No se ataca con SEO; se ataca con la línea de negocio de licencia a medios (`/para-medios`).

**México (base mx):** la ola ya llegó. `murdoku online` 2.400 (KD 30), `murdoku pdf` 1.600 (KD 34), `murdoku en español` 1.000 (KD 32). El término cabecera `murdoku` a secas todavía no devuelve dato en la base mx. Genéricos fuertes: `acertijos` 22.200, `pasatiempos` 6.600, `juegos diarios` 2.400, `enigmas` 14.800, `juegos de misterio` 1.300, `wordle español` 1.000, `juegos de detectives` 880, `juegos para pensar` 720, `acertijos de logica` 390, `juegos de logica para niños` 210. `murdle` 10.

**Argentina (base ar):** `murdoku` 9.900 (KD 29), `murdoku online` 2.900 (KD 27), `murdoku pdf` 1.300 (KD 32), `murdoku en español` 260 (KD 29). Genéricos: `enigmas` 9.900, `wordle español` 5.400, `acertijos` 5.400, `pasatiempos` 2.900, `juegos diarios` 2.400 (KD **20**), `juegos para pensar` 1.300, `juegos de logica` 880, `juegos de detectives` 720. `murdle` sin dato.

**SERP de `murdoku online` (ES, `phrase_organic`):** murdoku.com (3 URLs), TikTok de @martamartiuss, la app no oficial de NozCore en Google Play, murdokujuego.com, el PDF promocional en el CDN de Planeta, Instagram, Reddit r/murdoku y una segunda app ("murder sudoku"). Sigue siendo una SERP fragmentada sin ningún producto web sólido en español.

**Funciones de SERP:** las palabras del racimo Murdoku disparan de forma sistemática los códigos 7, 9, 21, 36 y 20 (reseñas, vídeo, *People Also Ask*, carrusel de vídeo y un bloque adicional recurrente). `como se juega al murdoku` añade el 38 y el 52. Los códigos 9/20/21 confirman dos cosas accionables: **vídeo corto y PAA mandan en esta SERP**. El significado exacto de los códigos 36, 38 y 52 hay que confirmarlo a mano en una SERP real antes de darlo por bueno; si el 36 es el bloque generativo, como parece por su presencia en casi todas las consultas, la sección GEO (§4) pasa de recomendable a obligatoria.

**Preguntas (`phrase_questions`, ES):** el volumen medido de preguntas explícitas es marginal (`qué es murdoku` 10, `qué es un murdoku` 0, `dónde comprar murdoku` 0). Esto **no** significa que no haya que responderlas: significa que esas preguntas se están haciendo en ChatGPT, Gemini y Perplexity, no en Google. Es exactamente el argumento para la sección GEO.

---

## 2. Árbol web

Leyenda de cada nodo:
`tipo` · `kw principal (volumen ES / KD)` · `kw secundarias` · `intención` · `prioridad` · `renderizado` · `enlace interno principal`

Prioridades: **P0** = día del lanzamiento · **P1** = meses 2-3 · **P2** = después.
Renderizado: **SSG-diario** = generado estáticamente en el build de las 00:00 Europa/Madrid · **ISR** = estático con revalidación bajo demanda · **SSR** = servidor por petición · **CSR+noindex** = cliente, fuera del índice.

---

### 2.1 Raíz jugable

- **`/`** — *home jugable: el caso de hoy*
  - Tipo: **jugable** (P0) · Renderizado: **SSG-diario**
  - KW principal: `[marca]` (marca propia, volumen a construir)
  - KW secundarias que debe capturar: `juegos diarios` (2.900 / KD 37), `juegos diarios gratis` (1.300 / KD 28), `juego diario gratis` (390 / KD 55), `juegos de logica online` (320 / KD 25)
  - Intención: jugar ahora, sin registro
  - Contenido: enunciado del caso, cuadrícula, pistas y botón de comprobar **en el HTML servido**; bloque "qué es esto" de 60 palabras; racha; enlaces a tutorial, archivo y modo Expediente
  - Enlace interno principal: `/como-jugar` y `/archivo`
  - Nota: el HTML de `/` cambia cada día; el `lastmod` del sitemap y el `dateModified` del schema también

- **`/expediente`** — *modo Expediente del día (cuadrícula lógica quién/dónde/con qué)*
  - Tipo: **jugable** (P1, a la vez que el modo 2) · **SSG-diario**
  - KW principal: `juegos de deduccion` (20 / KD 0 — categoría emergente, se compra barata)
  - Secundarias: `juegos de logica` (1.600 / KD 27), `juegos de misterio` (260 ES / **1.300 MX** / KD 18), `juegos de detectives` (320 ES / 880 MX / 720 AR)
  - Intención: jugar, descubrir el segundo modo
  - Enlace interno principal: `/` y `/reglas/expediente`

- **`/caso/AAAA-MM-DD`** — *caso de un día concreto (modo Caso del día)*
  - Tipo: **archivo jugable** (P0) · **ISR**
  - KW principal: cola larga por título del caso (`[titulo del caso] solucion`, sin volumen medible individual)
  - Secundarias agregadas: `murdoku diario` (0, tendencia 0→1,00 en 2 meses), `puzzle diario` (70 / KD 17)
  - Intención: rejugar, recuperar racha, llegar desde un enlace compartido
  - Regla dura: **la fecha de hoy no tiene URL propia indexable**; `/caso/[hoy]` responde 302 a `/` y solo pasa a 200 auto-canónica a partir de D+1 (evita duplicado home ↔ caso del día)
  - Enlace interno principal: `/archivo/AAAA-MM`

- **`/expediente/AAAA-MM-DD`** — igual que el anterior para el modo 2 (P1, ISR)

- **`/caso/AAAA-MM-DD/solucion`** — *solución explicada paso a paso*
  - Tipo: **guía** (P1) · **ISR** · **`noindex, follow` en fase 1**
  - Razón: `murdoku soluciones` (140 / KD 28) es demanda del libro ajeno, no de nuestros casos; indexar soluciones propias antes de tener hábito canibaliza la partida. Reevaluar en el mes 4 con datos de `/archivo`.

---

### 2.2 Archivo

- **`/archivo`** — *hub del archivo*
  - Tipo: **archivo** (P0) · **ISR**
  - KW principal: `juegos diarios` (2.900 / KD 37)
  - Secundarias: `pasatiempos diarios` (5.400 / KD 50 — objetivo aspiracional), `juego del dia` (170 / KD 64)
  - Contenido: calendario navegable, casos por mes, contadores reales (nº de casos publicados, tasa media de resolución)
  - Enlace interno principal: `/`

  - **`/archivo/AAAA-MM`** — *mes* · archivo (P0) · SSG · cola larga + enlazado; máx. 31 casos por página, sin paginación adicional
  - **`/archivo/dificultad/facil`** — *jugable + archivo* (P1) · SSG
    - KW: `murdoku facil` (170 / **KD 0**), `juegos de logica faciles` (20 / KD 0), `acertijos faciles` (390 / KD 36)
    - Contiene un caso fácil jugable en la propia página, no solo un listado
  - **`/archivo/dificultad/normal`** (P2, SSG) y **`/archivo/dificultad/experto`** (P1, SSG)
    - KW experto: `juegos de logica dificiles` (20 / KD 0), `acertijos dificiles` (1.300 / KD 35), `dificiles acertijos` (1.600 / KD 43)
  - **`/archivo/escenario/[slug]`** — *SEO programático por escenario* (mansión, hotel, tren, teatro…)
    - Tipo: **jugable + archivo** (P2) · SSG
    - Solo se publica un escenario cuando tiene ≥ 8 casos y un texto de ambientación propio. Menos de eso = `noindex`.

---

### 2.3 Aprender a jugar

- **`/como-jugar`** — *tutorial interactivo, hub*
  - Tipo: **guía jugable** (P0) · **SSG**
  - KW principal: `como se juega al murdoku` se ataca desde `/juegos-como-murdoku/como-se-juega` (ver §2.4); aquí la KW propia es `como jugar [marca]` + `juegos de logica` (1.600 / KD 27)
  - Secundarias: `como se juega al sudoku` (1.000 / KD 23) como referencia de formato, `juegos para pensar` (260 ES / 1.300 AR / 720 MX)
  - Contenido: tutorial de 60 segundos jugable, paso a paso, con un caso de 3×3
  - Schema: `HowTo` + `FAQPage`
  - Enlace interno principal: `/`

  - **`/reglas`** — *reglas, hub* · guía (P0) · SSG · `murdoku reglas` (20 / KD 0), `reglas murdoku` (140 / **KD 0**), `murdoku instrucciones` (40 / KD 0)
    - **`/reglas/caso-del-dia`** — guía (P0) · SSG
    - **`/reglas/expediente`** — guía (P1) · SSG

- **`/guias`** — *hub de estrategia*
  - Tipo: **guía** (P1) · SSG · KW: `trucos murdoku` (10 / KD 0), `acertijos de logica` (720 / KD 27)
  - **`/guias/tecnicas-de-deduccion`** (P1) · **`/guias/como-anotar-y-descartar`** (P1) · **`/guias/errores-mas-comunes`** (P2) · **`/guias/resolver-sin-adivinar`** (P1, pieza clave de autoridad y de GEO: explica el solver) · **`/guias/de-facil-a-experto`** (P2)
  - Cada guía termina con un caso jugable que ejercita justo esa técnica. Enlace interno principal: `/como-jugar`

---

### 2.4 Landings de intención por marca ajena (comparativas honestas con juego dentro)

Toda esta rama sigue la política de §3. La marca ajena **nunca** es el nombre del producto, siempre va dentro del marco comparativo, y **cada página lleva un caso jugable completo arriba del pliegue**.

- **`/juegos-como-murdoku`** — *hub comparativo*
  - Tipo: **comparativa jugable** (P0) · **SSG**
  - KW principal: `juegos como murdoku` (0 medido, término de encuadre) + captura de `murdoku` (33.100 / KD 35, navegacional) como cola
  - Secundarias: `alternativas a murdoku` (0), `juegos parecidos a murdoku` (0), `murdoku app` (140 / KD 33), `murdoku 2` (140 / KD 0)
  - Intención: "he oído hablar del libro, ¿dónde juego algo así?"
  - Contenido obligatorio: definición de una frase de qué es este tipo de puzle; tabla comparativa honesta (libro / web oficial / app no oficial / [marca]) sin denigrar; caso jugable; aviso de marcas; enlaces a los hijos
  - Enlace interno principal: `/`

  - **`/juegos-como-murdoku/online`** — **la página más importante del sitio**
    - Tipo: **landing de intención jugable** (P0) · **SSG**
    - KW principal: `murdoku online` (**9.900 / KD 29**)
    - Secundarias: `jugar murdoku online` (480 / **KD 13**), `murdoku on line` (480 / KD 33), `murdoku online español` (260 / KD 26), `murdoku online gratis` (90 / KD 33), `murdoku play` (390 / KD 31), `murdoku jugar` (110 / KD 0). MX 2.400 / AR 2.900
    - Intención: jugar ahora en el navegador, sin descargar
    - Título: `Juegos como Murdoku para jugar online gratis — un caso nuevo cada día | [marca]`
    - Enlace interno principal: `/juegos-como-murdoku`

  - **`/juegos-como-murdoku/en-espanol`**
    - Tipo: **landing de intención jugable** (P0) · SSG
    - KW principal: `murdoku en español` (**2.400 / KD 30**)
    - Secundarias: `murdoku español` (390 / KD 23), `murdoku en español online` (140 / KD 33), `murdoku online en español` (70 / KD 0), `murdoku español online` (70 / KD 0). MX 1.000 / AR 260
    - Ángulo: nuestro juego está **escrito** en español, no traducido; los nombres, el humor y los escenarios son propios
    - Enlace interno principal: `/juegos-como-murdoku/online`

  - **`/juegos-como-murdoku/gratis`**
    - Tipo: **landing de intención jugable** (P0) · SSG
    - KW principal: `murdoku gratis` (1.900 / KD 41)
    - Secundarias: `murdoku juego gratis` (1.900 / KD 36), `murdoku en español gratis` (**1.600 / KD 25**), `murdoku online gratis` (90), `murdoku pdf gratis` (70 / KD 16)
    - Contenido: qué es gratis para siempre y qué no, sin letra pequeña. Bloque explícito "no hace falta registrarse ni pagar"
    - Enlace interno principal: `/juegos-como-murdoku/online`

  - **`/juegos-como-murdoku/sin-descargar`**
    - Tipo: **landing de intención jugable** (P0) · SSG
    - KW principal: `descargar murdoku gratis` (**1.300 / KD 30**)
    - Secundarias: `murdoku descargar gratis` (170 / KD 0), `murdoku app` (140 / KD 33), `murdoku en español app` (90 / KD 0), `murdoku android` (0, tendencia 0→1,00), `juegos online sin descargar` (390 / KD 88)
    - Ángulo honesto: quien busca "descargar" quiere una app; le damos **instalar la PWA en 2 toques** y le explicamos por qué eso es mejor que la app no oficial de 2,36/5. Nunca se afirma ser la app oficial de nadie
    - Enlace interno principal: `/juegos-como-murdoku/gratis`

  - **`/juegos-como-murdoku/como-se-juega`**
    - Tipo: **guía jugable** (P0) · SSG
    - KW principal: `como se juega al murdoku` (**320 / KD 30**)
    - Secundarias: `murdoku como jugar` (170 / **KD 0**), `reglas murdoku` (140 / KD 0), `murdoku reglas` (20 / KD 0), `murdoku instrucciones` (40 / KD 0), `qué es murdoku` (10, pregunta clave para motores generativos)
    - Schema: `HowTo` + `FAQPage`. **Esta es la página diseñada para ser citada por AI Overviews y ChatGPT** (ver §4)
    - Enlace interno principal: `/como-jugar`

  - **`/juegos-como-murdoku/para-imprimir`**
    - Tipo: **landing de intención + tienda** (P0-P1) · SSG
    - KW principal: `murdoku en español para imprimir` (210 / KD 28)
    - Secundarias: `murdoku para imprimir` (140 / **KD 0**), `murdoku pdf` (2.400 / KD 33), `murdoku pdf español` (110 / KD 27), `murdoku libro pdf` (140 / KD 27), `murdoku pdf gratis` (70 / KD 16), `juegos de logica para imprimir` (110 / KD 10), `pasatiempos para imprimir` (320 / KD 19). MX 1.600 / AR 1.300 para `murdoku pdf`
    - **Aviso de intención:** buena parte del volumen de `murdoku pdf` busca el libro pirateado. No se persigue esa intención. La página ofrece **PDF propios, generados por nuestro motor**, gratis (una hoja de muestra) y de pago (`/packs`), y lo dice en la primera línea. Validar redacción con `experto-legal`
    - Enlace interno principal: `/packs`

  - **`/juegos-como-murdoku/para-ninos`**
    - Tipo: **landing de intención jugable** (P1) · SSG
    - KW principal: `murdoku para niños` (210 / **KD 0**)
    - Secundarias: `murdoku niños` (140 / KD 0), `murdoku edad recomendada` (70 / KD 0), `murdoku para que edad es` (70 / KD 0), `juegos de logica para niños` (170 / **KD 8**; MX 210, AR 170), `acertijos para niños` (2.400 / KD 22), `pasatiempos para niños` (90 / KD 13)
    - Contenido: casos 4×4 sin víctima (versión "quién se llevó el último trozo de tarta"), edad recomendada con criterio explicado, PDF descargable
    - Enlace interno principal: `/para-profesores`

  - **`/juegos-como-murdoku/faciles`**
    - Tipo: **landing de intención jugable** (P1) · SSG
    - KW principal: `murdoku facil` (170 / **KD 0**)
    - Secundarias: `juegos de logica faciles` (20 / KD 0), `acertijos faciles` (390 / KD 36)
    - Enlace interno principal: `/archivo/dificultad/facil`

- **`/juegos-como-murdle`** — *hub comparativo del modo Expediente*
  - Tipo: **comparativa jugable** (P1) · SSG
  - KW principal: `murdle online` (170 / **KD 0**)
  - Secundarias: `murdle español` (70 / KD 20), `murdle español online` (70 / KD 0), `murdle en español` (20 / KD 0), `murdle` (3.600 / KD 20, intención de libro), `murdle juego` (40 / KD 17)
  - Realidad medida: ~330 búsquedas/mes de intención "jugar online en español", **KD 0-20**. Poco volumen, coste de captura casi nulo, y es el único hueco donde no hay absolutamente nadie
  - Contenido: explicar la diferencia entre cuadrícula lógica y deducción espacial, con un Expediente jugable
  - Enlace interno principal: `/expediente`
  - **`/juegos-como-murdle/en-espanol`** (P2, SSG) solo si el hub se queda corto de cobertura

- **`/juegos-como-cluedo`** — *comparativa* (P2) · SSG · `cluedo online` (480 / KD 17; MX 110)
  - **Marca de terceros de alto riesgo (Hasbro).** No se publica sin luz verde expresa de `experto-legal`. Alternativa segura si hay dudas: `/juegos-de-detectives` cubriendo la misma intención sin nombrar la marca

- **`/alternativas-a-murdoku`**, **`/murdoku-online`**, **`/murdoku-en-espanol`** → **301 permanente** a la página equivalente de `/juegos-como-murdoku/`. Se registran los slugs para que no los ocupe un tercero y para absorber enlaces entrantes de terceros que usen esa forma, pero **no existen como páginas**.

---

### 2.5 Landings de categoría con marca propia (independencia de la moda)

Esta rama es el seguro contra el escenario "la moda del libro se enfría en 2027". Se construye en paralelo, no después.

- **`/juegos-de-logica`** — landing de intención jugable (P1) · SSG
  - `juegos de logica` (1.600 / KD 27); secundarias `juegos de logica online` (320 / KD 25), `juegos de logica gratis` (260 / KD 36), `juegos gratis de logica` (210 / KD 30), `juegos de logica para adultos` (390 / KD 16), `juegos de logica y razonamiento` (210 / **KD 12**). AR 880, MX 140
  - Enlace interno principal: `/`
- **`/juegos-de-detectives`** — landing de intención jugable (P1) · SSG
  - `juegos de detectives` (320 ES / **880 MX** / **720 AR** / KD 25); secundarias `juego de detectives` (320 / KD 24), `juegos de resolver crimenes` (210 / KD 36), `casos para resolver` (170 / **KD 16**), `juegos de investigacion` (140 / KD 28)
- **`/juegos-de-misterio`** — landing de intención jugable (P1) · SSG
  - `juegos de misterio` (260 ES / **1.300 MX** / 110 AR / KD 18); secundarias `misterios para resolver` (20), `escape room online gratis` (720 / KD 39)
  - Página pensada explícitamente para la ola de México
- **`/juegos-diarios`** — landing de intención jugable (P1) · SSG
  - `juegos diarios` (2.900 ES / 2.400 MX / **2.400 AR con KD 20**); secundarias `juegos diarios gratis` (1.300 / **KD 28**), `juego diario gratis` (390 / KD 55), `puzzle diario` (70 / KD 17), `reto diario` (40 / KD 24)
  - Cuidado: parte del volumen ES es navegacional hacia eldiario.es. Medir CTR real a los 60 días antes de invertir más
- **`/acertijos`** — hub jugable (P2) · SSG
  - `acertijos` (8.100 ES / **22.200 MX** / 5.400 AR / KD 41); secundarias `acertijos de logica` (720 / KD 27), `acertijos con respuesta` (1.900 / KD 33), `acertijos de pensamiento lateral` (260 / **KD 14**), `acertijos para adultos` (2.400 / KD 30)
  - Solo se lanza con acertijos propios jugables y con respuesta. Si es un listado de texto, no se lanza
- **`/enigmas`** — hub jugable (P2) · SSG · `enigmas` (1.300 ES / **14.800 MX** / 9.900 AR); `enigmas para resolver` (260 / KD 28)
- **`/juegos-para-pensar`** — landing (P2) · SSG · 260 ES / 720 MX / **1.300 AR**
- **`/para-imprimir`** — landing + tienda (P1) · SSG · `pasatiempos para imprimir` (320 / KD 19), `juegos de logica para imprimir` (110 / **KD 10**), `acertijos para imprimir` (20)
- **`/pasatiempos-online`** — **no se hace en el año 1.** `pasatiempos` (27.100 / KD 61) y `pasatiempos online` (6.600 / KD 67) son un racimo navegacional de El País, 20minutos, La Vanguardia y ABC. Se ataca desde `/para-medios`, no desde el SEO
- **`/juegos-diarios-como-wordle`** — comparativa (P2, opcional) · `wordle español` 110.000 / KD 53; `la palabra del dia juego` 12.100 / KD 58. Volumen enorme, encaje de producto bajo y marca de The New York Times. Solo con validación de `experto-legal` y solo si `/juegos-diarios` ya rinde

---

### 2.6 Negocio

- **`/packs`** — *tienda de packs imprimibles* · landing comercial (P1) · SSG
  - `murdoku pdf` (2.400 / KD 33) vía `/juegos-como-murdoku/para-imprimir`; propias: `pasatiempos para imprimir` (320), `juegos de logica para imprimir` (110)
  - Schema `Product` + `Offer`. Enlace interno principal: `/juegos-como-murdoku/para-imprimir`
  - **`/packs/[slug]`** — ficha de pack (P1) · SSG · `Product`, `Offer`, reseñas solo si son reales
- **`/premium`** — landing comercial (P0 como **lista de espera**, P1 como venta) · SSG
  - Sin KW propia relevante; vive del enlazado interno y del producto. Schema `Product`/`Offer` solo cuando haya precio real
  - Enlace interno principal: `/`
- **`/duelos`** — landing jugable (P2) · SSG · `juegos para dos personas online` (260 / KD 69), `juegos por turnos con amigos` (sin dato)
  - **`/duelo/[id]`** — **CSR + `noindex, follow`**. Es un enlace de invitación, no una página. Debe cargar rápido y sin login
- **`/r/[id]`** — resultado compartido con enlace profundo al caso · **CSR + `noindex, follow`**, con OG image generada. Es el motor del bucle viral, no del SEO
- **`/para-medios`** — landing B2B (P1) · SSG
  - Argumento comercial basado en dato verificable: el racimo `pasatiempos + medio` mueve más de 35.000 búsquedas/mes en España (El País 22.200 + 6.600 + 2.400, 20minutos 2.900 + 2.900, La Vanguardia 1.300, ABC 1.000) y `murdoku` 33.100
  - Contenido: qué se licencia (caso diario en marca blanca, widget embebible, PDF semanal), formatos, ejemplo en vivo, contacto
- **`/para-profesores`** — landing sectorial (P1) · SSG
  - `juegos de logica para niños` (170 / **KD 8**), `juegos de logica para imprimir` (110 / KD 10), `acertijos para niños` (2.400 / KD 22), `recursos para profesores` (50 / KD 25), `acertijos para adolescentes` (90 / KD 26)
  - Contexto competitivo: orientacionandujar.es ya rankea con "35 murdokus para jugar". Se compite con material mejor y con solución única garantizada
  - **`/para-profesores/recursos`** (P2) — fichas por curso, PDF gratuitos con marca

---

### 2.7 Confianza, marca y GEO

- **`/sobre-nosotros`** — institucional (P0) · SSG. **Página crítica para GEO.** Quién está detrás con nombre y apellidos, dónde, desde cuándo, cómo se financia el proyecto, contacto real. Schema `Organization` + `AboutPage`
- **`/como-creamos-los-casos`** — guía metodológica (P0) · SSG. **La pieza más citable del sitio para motores generativos**: explica generador, solver, solución única garantizada, cómo se mide la dificultad y qué hace y qué no hace la IA. Es a la vez E-E-A-T, diferenciación y material de prensa
- **`/prensa`** — kit de prensa (P1) · SSG. Logos, capturas, cifras actualizadas, biografía, contacto directo, todo descargable. Schema `Organization`
- **`/blog`** — hub editorial (P1) · SSG; **`/blog/[slug]`** artículos (P1, ISR)
  - Líneas: la moda del misterio en España, entrevistas, análisis de casos difíciles, novedades del producto, datos propios ("el 41% resolvió el caso del martes")
  - Schema `Article` con `author` `Person` real y `sameAs`
- **`/contacto`** (P0) · SSG
- **`/legal/aviso-legal`**, **`/legal/privacidad`**, **`/legal/cookies`**, **`/legal/terminos`** — legal (P0) · SSG · `index, follow` (son señales de confianza, no ruido)
- **`/legal/marcas`** — legal (P0) · SSG. Declaración de no afiliación y de uso descriptivo de marcas de terceros. Enlazada desde el pie **y desde cada landing de `/juegos-como-*`**. Redacta `experto-legal`

---

### 2.8 Cuenta y sistema (fuera del índice)

- **`/entrar`**, **`/cuenta`**, **`/cuenta/estadisticas`**, **`/cuenta/racha`**, **`/cuenta/suscripcion`** — CSR + **`noindex, nofollow`**
- **`/buscar`** y cualquier resultado de búsqueda interna — **`noindex, follow`**, bloqueado en robots
- **`/api/*`** — `Disallow`
- **`/robots.txt`**, **`/sitemap.xml`** (índice), **`/sitemap-core.xml`**, **`/sitemap-landings.xml`**, **`/sitemap-casos.xml`**, **`/sitemap-blog.xml`**, **`/feed.xml`**, **`/llms.txt`**, **`/manifest.webmanifest`**

---

### 2.9 Recuento del lanzamiento (P0)

23 URL indexables el día 1: `/`, `/caso/*` (archivo de 7 días), `/archivo`, `/archivo/AAAA-MM`, `/como-jugar`, `/reglas`, `/reglas/caso-del-dia`, las 8 de `/juegos-como-murdoku/*` más el hub, `/premium` (lista de espera), `/sobre-nosotros`, `/como-creamos-los-casos`, `/contacto`, `/legal/*` (5). Es asumible en 6-8 semanas y cubre ~21.000 búsquedas/mes de intención directa.

---

## 3. Política de uso de marcas ajenas

### 3.1 La fórmula segura

**En la URL:** la marca ajena solo aparece dentro de una carpeta que ya la encuadra como comparación.

- Correcto: `/juegos-como-murdoku/online`, `/juegos-como-murdle`
- Prohibido: `/murdoku`, `/murdoku-online`, `/murdoku-gratis`, `/es/murdoku`, cualquier subdominio `murdoku.[marca].com`

**En el `<title>`:** la marca ajena nunca abre el título y nunca aparece sin el marco comparativo.

- Patrón: `Juegos como Murdoku para jugar online gratis — un caso nuevo cada día | [marca]`
- Patrón: `¿Buscas un Murdoku en español? Juega un caso de deducción nuevo cada día | [marca]`
- Prohibido: `Murdoku online gratis | [marca]`, `Murdoku en español`, `Juega al Murdoku`

**En el `<h1>`:** siempre con "como", "alternativa a", "si te gusta", "parecido a" o en pregunta. Un solo `h1` por página y siempre con la marca propia presente.

**Nunca, en ningún caso:**
- Marca ajena en el nombre del producto, dominio, subdominio, logo, favicon, nombre de la PWA, `manifest.name`, nombre en tiendas de apps, cuentas de redes o hashtag principal
- Marca ajena en imágenes OG, en capturas, en el nombre de los personajes o de los casos
- Reproducir portada, tipografía, ilustraciones, personajes o textos del libro o de la web ajena
- Sustantivar la marca ajena como si fuera nuestra categoría ("nuestros murdokus", "un murdoku de [marca]"). Se dice **"casos de deducción"**
- Usar la marca ajena como anchor text de enlaces internos hacia `/`

**Siempre, en cada landing de `/juegos-como-*`:**
- Un caso jugable completo por encima del pliegue. Sin juego no se publica la página
- Aviso visible, no en letra pequeña: *"Murdoku es una marca de sus respectivos titulares. [marca] es un juego independiente y no está afiliado, patrocinado ni respaldado por ellos."* con enlace a `/legal/marcas`
- Comparación honesta y verificable: se dice qué hace mejor el otro producto. Denigrar es lo que convierte un uso descriptivo lícito en publicidad comparativa ilícita
- Enlace saliente al producto original cuando aporte al lector (refuerza que es una comparativa real, no una doorway)

### 3.2 Qué debe validar `experto-legal` antes del día 1

1. **Uso nominativo descriptivo** de "Murdoku" y "Murdle" en `<title>`, `<h1>` y slugs bajo el art. 37 de la Ley de Marcas española y el art. 14 del RMUE: confirmar que el marco "juegos como / alternativas a" es suficiente y validar la redacción exacta de los patrones de §3.1.
2. **Estado registral**: solicitud USPTO 99677726 de Murdoku; buscar registro o solicitud en OEPM/EUIPO clases 9, 16, 28 y 41 a nombre de Planeta o Manuel Garand, y equivalente para Murdle. El resultado puede cambiar el nivel de riesgo de la rama `/juegos-como-murdle`.
3. **Texto del aviso de no afiliación** y de la página `/legal/marcas`.
4. **`/juegos-como-cluedo`**: Cluedo/Clue es marca de Hasbro con historial activo de defensa. Decisión de publicar o sustituir por `/juegos-de-detectives`.
5. **`/juegos-diarios-como-wordle`**: Wordle es marca de The New York Times. Misma decisión.
6. **`/juegos-como-murdoku/para-imprimir`**: redacción que deje inequívoco que los PDF son creación propia y que no se facilita ni se enlaza el libro ajeno. Riesgo reputacional y de infracción si se interpreta que se explota la intención de piratería.
7. **Publicidad de pago**: si en algún momento se plantea pujar por "murdoku" en Google Ads, es un supuesto jurídicamente distinto (y más expuesto) que el SEO. Criterio previo por escrito.
8. **Nombre y dominio propios**: comprobación de disponibilidad y registro en OEPM/EUIPO clases 9 y 41 antes de publicar cualquier landing.

---

## 4. GEO: cómo construir cada página para ser citada por motores generativos

Los datos de `phrase_questions` muestran que las preguntas explícitas sobre Murdoku casi no tienen volumen en Google (`qué es murdoku` 10/mes) mientras el término mueve 33.100. La diferencia se está haciendo en ChatGPT, Perplexity, Gemini y en el bloque generativo de la propia SERP. Optimizar solo para el enlace azul deja fuera una parte creciente de la demanda.

### 4.1 Reglas transversales (todas las páginas indexables)

1. **Respuesta directa en las primeras 60 palabras.** El primer párrafo tras el `h1` responde literalmente a la pregunta de la página, en una o dos frases autocontenidas, sin "en este artículo veremos". Un modelo debe poder extraerlo como cita sin contexto adicional.
2. **HTML servido, no dependiente de JS.** Enunciado del caso, pistas, reglas, FAQ, precios y comparativas están en el HTML de la respuesta inicial. Los rastreadores de ChatGPT y Perplexity no ejecutan JavaScript de forma fiable. Solo la interacción del tablero se hidrata en cliente.
3. **Definición explícita "qué es".** Cada página de concepto incluye un bloque `<h2>¿Qué es …?</h2>` seguido de una definición de una frase con el patrón *"X es un Y que Z"*. Es la estructura que los modelos extraen mejor.
4. **FAQ real con `FAQPage`.** 4-8 preguntas por página, redactadas como las haría una persona hablando ("¿hay algún Murdoku online en español?"), con respuesta de 40-80 palabras que empiece afirmando. Google ya casi no muestra el rich result de FAQ, pero el marcado sigue siendo la forma más limpia de que un modelo empareje pregunta y respuesta.
5. **Datos propios con fuente y fecha.** Los motores generativos citan cifras. Nosotros somos la fuente primaria de cifras que nadie más tiene: número de casos publicados, tasa media de resolución, tiempo medio, distribución de dificultad, racha media. Se publican en `/archivo`, `/como-creamos-los-casos` y el blog, actualizadas automáticamente, con la fecha del cálculo. Cuando se cite dato ajeno (ediciones del libro, descargas de la app), se cita medio y fecha.
6. **Autoría verificable.** Cada guía y cada artículo lleva autor con página propia, `sameAs` a perfiles reales y fecha de publicación y de actualización visibles en el texto, no solo en el schema.
7. **Entidades consistentes.** El nombre de la marca se escribe siempre igual, en el mismo sitio del `<title>`, en `Organization.name`, en el `manifest`, en las redes y en el pie. Se define una entidad clara: *"[marca] es un juego diario de deducción en español"*. Esa frase exacta se repite, sin variaciones creativas, en home, `/sobre-nosotros`, `llms.txt`, perfiles sociales y kit de prensa. La consistencia literal es lo que hace que un modelo asocie marca y categoría.
8. **Fecha de actualización real.** `dateModified` que cambie solo cuando el contenido cambie de verdad.
9. **`/llms.txt`** en la raíz: qué es el sitio en tres frases, la lista de las 20 URL más útiles con una línea de descripción cada una, qué se puede citar, cómo citarnos y contacto. Complementado con `llms-full.txt` si crece.
10. **`robots.txt` permite explícitamente los rastreadores de IA**: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Bingbot`, `Applebot-Extended`. En esta fase la visibilidad vale más que la protección del contenido; el activo defendible es el juego, no el texto.
11. **Encabezados en forma de pregunta** y párrafos de 40-80 palabras, autocontenidos. Nada de una idea repartida en cinco párrafos.
12. **Tablas comparativas en HTML** (`<table>`, no imagen, no div). Es el formato que más se cita en respuestas de comparación.

### 4.2 Por tipo de página

| Tipo | Bloque GEO obligatorio | Schema |
|---|---|---|
| Home / jugable | 60 palabras: qué es, cómo se juega, cuánto dura, cuánto cuesta. Cifra del día en HTML | `VideoGame` + `WebSite` + `Organization` |
| Caso por fecha | Ficha en HTML: fecha, dificultad medida, nº de pistas, % de resolución, tiempo medio | `VideoGame` + `BreadcrumbList` |
| Cómo jugar / reglas | Pasos numerados con verbo en imperativo, uno por `<li>`; ejemplo resuelto; FAQ | `HowTo` + `FAQPage` |
| Comparativa de marca ajena | Definición "qué es", tabla comparativa HTML, aviso de no afiliación, FAQ conversacional | `FAQPage` + `BreadcrumbList` (+ `VideoGame` del caso incrustado) |
| Landing de intención | Respuesta directa a la consulta en la primera frase, precio y gratuidad explícitos | `VideoGame` + `FAQPage` |
| Guía de estrategia | Técnica nombrada, cuándo aplicarla, ejemplo con tablero, error típico | `Article` + `HowTo` |
| Blog | Autor real, fecha, dato propio en los primeros dos párrafos | `Article` |
| Packs | Qué incluye, número de casos, dificultad, formato, precio con IVA | `Product` + `Offer` |
| Profesores | Curso, edad, competencia trabajada, tiempo de aula, PDF | `LearningResource` |
| Sobre nosotros | Quién, dónde, desde cuándo, financiación, contacto | `Organization` + `AboutPage` |
| Metodología | Cómo se garantiza la solución única y cómo se mide la dificultad | `Article` + `FAQPage` |

### 4.3 Preguntas conversacionales que el sitio debe responder literalmente

Cada una debe tener una respuesta de 40-80 palabras, en HTML, con la pregunta como `<h2>` o dentro del `FAQPage` de la página indicada.

**Sobre Murdoku**
- ¿Hay un Murdoku online en español? → `/juegos-como-murdoku/en-espanol`
- ¿Dónde puedo jugar al Murdoku gratis? → `/juegos-como-murdoku/gratis`
- ¿Se puede jugar al Murdoku online sin descargar nada? → `/juegos-como-murdoku/sin-descargar`
- ¿Hay una app de Murdoku? ¿Es oficial? → `/juegos-como-murdoku/sin-descargar`
- ¿Cómo se juega al Murdoku? / ¿Cuáles son las reglas del Murdoku? → `/juegos-como-murdoku/como-se-juega`
- ¿Qué es un Murdoku? ¿En qué se diferencia de un sudoku? → `/juegos-como-murdoku` y `/juegos-como-murdoku/como-se-juega`
- ¿Qué juegos hay parecidos al Murdoku? / ¿Alternativas al Murdoku? → `/juegos-como-murdoku`
- ¿Hay Murdokus para imprimir en PDF? → `/juegos-como-murdoku/para-imprimir`
- ¿Hay Murdokus para niños? ¿A partir de qué edad? → `/juegos-como-murdoku/para-ninos`
- ¿Hay Murdokus fáciles para empezar? → `/juegos-como-murdoku/faciles`

**Sobre Murdle y la categoría**
- ¿Hay juegos como Murdle en español? → `/juegos-como-murdle`
- ¿Se puede jugar a Murdle online en español? → `/juegos-como-murdle`
- ¿Cuál es la diferencia entre Murdle y Murdoku? → `/juegos-como-murdle`
- ¿Qué juego diario de lógica en español puedo jugar hoy? → `/juegos-diarios`
- ¿Hay algo como Wordle pero de misterio en español? → `/juegos-diarios`
- ¿Qué juegos de detectives puedo jugar online gratis? → `/juegos-de-detectives`

**Sobre el producto y la confianza**
- ¿Es gratis? ¿Hace falta registrarse? → `/` y `/juegos-como-murdoku/gratis`
- ¿Cuánto se tarda en resolver un caso? → `/como-jugar`
- ¿Los casos tienen siempre una única solución? → `/como-creamos-los-casos`
- ¿Los casos los escribe una IA? → `/como-creamos-los-casos` (respuesta honesta: la IA escribe la historia, el motor decide la lógica y valida cada pista)
- ¿Es apto para niños? ¿Hay violencia? → `/juegos-como-murdoku/para-ninos`
- ¿Quién está detrás de [marca]? → `/sobre-nosotros`
- ¿Puedo usarlo en clase? → `/para-profesores`
- ¿Se puede publicar el caso diario en un medio? → `/para-medios`

### 4.4 Cómo se mide GEO

No hay Search Console para modelos. El plan mínimo:
- Consulta mensual manual de las 25 preguntas de §4.3 en ChatGPT, Perplexity, Gemini y Copilot; se registra si aparecemos, en qué posición de la respuesta y con qué frase. Hoja de seguimiento en `docs/`
- Referidos por `utm`/referrer de `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com` en PostHog, como canal propio
- Rastreo de nuestros logs para `GPTBot`, `OAI-SearchBot`, `PerplexityBot` y `ClaudeBot`: si no nos rastrean, no nos pueden citar
- Objetivo mes 3: aparecer citados en al menos 8 de las 25 preguntas en 2 de los 4 motores

---

## 5. Reglas técnicas

### 5.1 Canónicas

- Autocanónica absoluta en todas las páginas indexables, con dominio y sin parámetros
- **Home ↔ caso de hoy:** el caso de hoy vive **solo** en `/`. `/caso/[fecha de hoy]` responde **302** a `/`. A partir de las 00:00 del día siguiente pasa a **200** con autocanónica. Así no hay dos URL con el mismo contenido ni canónicas que cambian de destino cada día
- **Archivo:** cada `/archivo/AAAA-MM` es autocanónica. No se canonicaliza al hub ni se pagina más allá del mes
- **Facetas:** solo se indexan las tres de dificultad y, en P2, los escenarios con ≥ 8 casos. Cualquier combinación (dificultad × mes × escenario) es `noindex, follow`. Nunca se generan enlaces rastreables hacia combinaciones no indexables
- **Parámetros:** `?utm_*`, `?ref`, `?duelo`, `?compartido` → canónica a la URL limpia. Configurar también en el CDN para no servir variantes cacheadas distintas
- **Sin `www`, HTTPS, sin barra final**, una sola forma; el resto, 301
- Las variantes `/murdoku-online` y compañía son **301**, no canónicas

### 5.2 Idioma y hreflang

**Decisión: al lanzar, una sola variante.** `<html lang="es">`, `hreflang="es"` y `hreflang="x-default"` apuntando a la misma URL. Sin `es-ES`, sin `es-MX`, sin `es-419`.

Razones:
1. El contenido sería **idéntico** en las tres variantes. Un hreflang entre páginas iguales no aporta nada y multiplica por tres las URL a rastrear, indexar y mantener, con riesgo real de canibalización en un dominio nuevo sin autoridad.
2. La estrategia de contenido ya es "español neutro con base en España" (`contexto-proyecto.md` §4). No hay dos textos que diferenciar.
3. Google resuelve bien la geolocalización de un dominio único en español cuando hay señales locales claras (moneda, contacto, enlaces). El coste de no segmentar hoy es bajo; el coste de segmentar mal es alto.

**Cuándo se abre `/mx/` y `/ar/` (revisión en el mes 4):** solo cuando se cumpla al menos una condición de contenido real diferenciado — hora de publicación del caso adaptada al huso, léxico y escenarios locales, clasificación y ligas por país, o precios en peso. Los datos ya justifican planificarlo: AR tiene `murdoku` 9.900 y `murdoku online` 2.900; MX tiene `murdoku online` 2.400, `murdoku pdf` 1.600 y `murdoku en español` 1.000, además de `acertijos` 22.200 y `enigmas` 14.800. Estructura prevista: `/` (es, x-default) + `/mx/` (es-MX) + `/ar/` (es-AR), con `hreflang` recíproco completo y sin redirección automática por IP (solo un aviso con enlace).

Mientras tanto, la localización se hace por contenido: `/juegos-de-misterio` y `/juegos-de-detectives` se redactan pensando en México, `/juegos-diarios` en Argentina (KD 20 allí frente a 37 en España).

### 5.3 Qué se indexa y qué no

**Se indexa:** `/`, `/expediente`, `/archivo` y meses, `/caso/*` y `/expediente/*` desde D+1, las tres dificultades, todas las `/juegos-como-*`, todas las de categoría propia, `/como-jugar`, `/reglas/*`, `/guias/*`, `/blog` y artículos, `/packs` y fichas, `/premium`, `/para-medios`, `/para-profesores`, `/prensa`, `/sobre-nosotros`, `/como-creamos-los-casos`, `/contacto`, `/legal/*`.

**No se indexa (`noindex, follow`):** `/caso/*/solucion` (fase 1), `/duelo/*`, `/r/*`, `/buscar` y sus resultados, facetas combinadas, páginas de escenario con menos de 8 casos, versiones de previsualización.

**No se indexa (`noindex, nofollow`):** `/entrar`, `/cuenta/*`, pasarela de pago, confirmaciones.

**Bloqueado en robots:** `/api/*`, `/_next/data/*`, entornos de staging (además con autenticación básica).

**Regla anti-contenido-fino del archivo (crítica).** Una página de caso solo se publica indexable si cumple **todo**: título propio, ≥ 120 palabras de ambientación y enunciado únicos, dificultad medida por el motor, número de pistas, y —desde que haya suficientes partidas— tasa de resolución y tiempo medio. Si falta algo, se sirve con `noindex` y se revisa. Publicar 365 casos idénticos salvo por los nombres es la forma más rápida de que Google clasifique todo el archivo como plantilla vacía. Auditoría mensual de la relación URL indexadas / URL con tráfico; si baja del 30% en el archivo, se poda.

### 5.4 Sitemaps

- `/sitemap.xml` como índice; `sitemap-core.xml` (home, modos, hubs, institucionales), `sitemap-landings.xml`, `sitemap-casos.xml` (máx. 5.000 URL por fichero, paginado por año), `sitemap-blog.xml`, `sitemap-packs.xml`
- `lastmod` real por URL, generado en el build diario de las 00:00. Sin `priority` ni `changefreq` (Google los ignora)
- Solo URL 200 e indexables. Ninguna URL con `noindex` entra en el sitemap
- Alta y verificación en Google Search Console y Bing Webmaster Tools el día 1 (Bing alimenta a Copilot y a parte del ecosistema generativo)
- El caso del día entra en el sitemap el día D+1, cuando su URL pasa a 200

### 5.5 Rendimiento y datos estructurados

- **Core Web Vitals móvil como criterio de aceptación**, no como mejora posterior: LCP < 2,5 s, INP < 200 ms, CLS < 0,1. El tablero se pinta con CSS Grid desde el HTML servido; nada de esqueletos que se reemplacen tras la hidratación (CLS y, sobre todo, contenido invisible para rastreadores sin JS)
- Fuentes autoalojadas con `font-display: swap`; imágenes en AVIF/WebP con `width`/`height`; sin librerías de animación en la ruta crítica
- **Datos estructurados**: `Organization` y `WebSite` (con `SearchAction` solo si hay buscador real) en todas; el resto según la tabla de §4.2. JSON-LD, un solo bloque por página, validado en el CI con un test que falle el build si el schema no valida
- Nunca `AggregateRating` inventado. Solo si hay valoraciones reales y visibles en la página
- `BreadcrumbList` en todo lo que cuelgue de un hub, coherente con la migaja visible

---

## 6. Qué falta por decidir

1. **Nombre y dominio.** Bloquea títulos, `Organization`, `llms.txt` y la entidad de marca. Es la dependencia número 1.
2. **Confirmación manual del significado de los códigos de SERP 36, 38 y 52** de Semrush en una SERP real española. Si el 36 es el bloque generativo, §4 sube a prioridad máxima.
3. **Verificación a mano de murdoku.com**: idiomas reales de la interfaz, si tiene duelos y ligas, si hay Premium. Determina el ángulo honesto de la tabla comparativa de `/juegos-como-murdoku`.
4. **Luz verde de `experto-legal`** sobre los ocho puntos de §3.2 antes de publicar cualquier `/juegos-como-*`.
5. **Briefs de landing** (intención, H1, contenido jugable, FAQ, enlaces internos, metadatos) para las 9 páginas P0 de la rama Murdoku: los redacta `periodista-contenidos` a partir de este documento.
