# Plan de crecimiento (SEO, contenidos y redes) — semana a semana

Área: adquisición. Responsable: `estratega-growth-seo`. Coordina a `periodista-contenidos` (redacción) y `creador-social` (vídeo y comunidad); sus tareas están asignadas dentro de este plan con id propio.
Fecha: 7 de septiembre de 2026. Formato de tarea según `docs/roadmap/supuestos.md` §13.

**Fuentes que gobiernan este plan y que no se contradicen aquí:** `docs/roadmap/supuestos.md` (calendario e hitos), `docs/arbol-web-final.md` (36 URL del día 1, §8 diversificación, §9 pendientes, §10 plan de contenidos), `docs/seo/analisis-geo.md` (§3.4 medios ganados, §6 panel de 25 preguntas), `docs/analisis-estrategico.md` §6 (0→1.000→10.000→100.000), `.claude/agents/creador-social.md`, `docs/decisiones.md` (D-006, D-007, D-009).

**Ninguna cifra de demanda de este documento es nueva.** Todas las de volumen y KD vienen de `docs/seo/keywords-espana.csv` y `keywords-latam.csv` (Semrush, 5/9/2026) a través del árbol web. Las cifras de tráfico y usuarios de la §13 son **objetivos fijados antes del dato**, no previsiones: se marcan como tales.

---

## 0. Aviso D-006 (registro de marca): estado hoy y dos disparadores programados

**Hoy, 7 de septiembre de 2026, no se ha cumplido ningún disparador de D-006** y no procede registrar todavía: no hay producto lanzado, ni vídeo con +100.000 visualizaciones, ni mención en prensa, ni conversación B2B o editorial, ni indicio de tercero con nombre parecido.

**Este plan programa deliberadamente tres disparadores y en este orden:**

| Disparador | Tarea que lo dispara | Semana | Qué tiene que estar listo antes |
|---|---|---|---|
| Mención en prensa | G-31 nota de prensa a 10-14 medios | **10** (9-15 nov) | Solicitud OEPM (clases 9 y 41, ≈250 €) **presentada**, no solo redactada |
| Vídeo con +100.000 visualizaciones | G-24/G-27 seeding de creadores y calendario TikTok | 9-13 | Ídem: si un vídeo de @cristinini o similar despega, el disparador se cumple en 48 h y no da tiempo a reaccionar |
| 5.000 usuarios activos mensuales | Objetivo de la §13 al día 90 | **22** (1 feb) | Ídem, ya cubierto por lo anterior |

**Regla operativa que se adopta aquí, más dura que la de D-006:** la solicitud OEPM se presenta **el día hábil anterior al envío de la nota de prensa** (semana 9, viernes 6 de noviembre), no el mismo día ni después. Motivo: en España y la UE la marca es de quien la presenta primero, y una nota de prensa es exactamente el acto que hace pública la marca ante terceros. `/para-medios` sigue bloqueada hasta que el expediente exista (árbol §2.9).

`creador-social` y `periodista-contenidos` comprueban el disparador de visualizaciones **en cada informe semanal** y avisan al principio, según D-006.

---

## 1. Cómo se lee este plan

**Numeración de semanas.** Semana 1 = **lunes 7 al domingo 13 de septiembre de 2026**. `supuestos.md` dice «lunes 8 de septiembre», pero sus propios hitos (semana 7 = 19-25 de octubre; semana 9 = a partir del 2 de noviembre) solo cuadran si la semana 1 empieza el **lunes 7**. Uso las fechas de los hitos, porque son las que fijan compromisos; conviene corregir esa línea de `supuestos.md`.

| Semana | Fechas | Fase |
|---:|---|---|
| 1-2 | 7-20 sep | Cimientos: medición, técnica, página pública con juego |
| 3-6 | 21 sep - 18 oct | Fábrica de contenido: 30 páginas, 12 vídeos, listas de creadores y prensa |
| 7-8 | 19 oct - 1 nov | **Beta cerrada** (100-300 personas) y archivo real de casos |
| 9 | 2-8 nov | **Lanzamiento público** (día L = martes 3 de noviembre) |
| 10-16 | 9 nov - 27 dic | Calendario editorial S2-S8 del árbol §10.3 |
| 17 | 28 dic - 3 ene | Tregua de Navidad (ver §1.2) |
| 18-22 | 4 ene - 7 feb | S9-S13 del árbol §10.3. Día 90 = **1 de febrero** |

**Ids.** `G-xx` para todas las tareas de esta área. Las dependencias con otras áreas se escriben con etiqueta provisional (`[MOTOR]`, `[FRONT]`, `[BACK]`, `[PROD]`, `[LEGAL]`, `[DATOS]`, `[UX]`, `[PUZZLES]`) porque sus planes aún no existen en `docs/roadmap/`; cuando existan, se sustituyen por el id real y se anota el cambio al pie.

### 1.1 Dos decisiones de calendario que este plan toma y conviene ratificar

**Decisión 1: el día L es el martes 3 de noviembre, no el lunes 2.** El 1 de noviembre de 2026 cae en domingo y varias comunidades trasladan Todos los Santos al lunes 2. Lanzar un producto y enviar prensa un día de puente en media España es tirar la única primera vez que hay. Ventana de retraso aceptada: martes **10 de noviembre** (semana 10) si falla la compuerta C-G4; más allá de esa fecha se entra en la zona muerta de diciembre y el lanzamiento se movería a enero, lo que cuesta ocho semanas de ventana de mercado.

**Decisión 2: la semana 17 (28 dic - 3 ene) es una tregua, no una semana de trabajo editorial.** El árbol §10.3 encadena S1…S13 sin huecos; aplicado al calendario real, el lanzamiento del modo Expediente (S9) caería entre Navidad y Año Nuevo. Se inserta una semana de tregua y todo lo posterior corre una semana. Mapa final:

| Semana editorial del árbol §10.3 | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | — | S9 | S10 | S11 | S12 | S13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Semana del roadmap** | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | **17 tregua** | 18 | 19 | 20 | 21 | 22 |

En la tregua no se publica ninguna página nueva ni se contacta con nadie: se publica el caso especial de Navidad, se dejan tres vídeos programados y se hace la auditoría de indexación del mes 4. El juego diario **no se interrumpe ni un día**: la promesa del producto es que hay caso todos los días, y romperla en Navidad es el peor momento posible.

### 1.2 Interpretación de dos métricas ambiguas del árbol §10.3

- «3.000 sesiones orgánicas» (S6) se lee como **sesiones orgánicas acumuladas en los 30 días anteriores**, no en esa semana. Una semana con 3.000 sesiones orgánicas a las seis semanas de lanzar un dominio nuevo no es un objetivo, es una fantasía.
- «≥ 60 palabras clave posicionadas» (S4) y «≥ 100» (mes 1 de §8.2) se leen como **palabras con al menos una impresión en Search Console en el periodo**, que es lo único verificable en una propiedad nueva; la definición de Semrush (top 100) llega más tarde y con menos fiabilidad en dominios sin autoridad.

---

## 2. Mapa de las 22 semanas de un vistazo

| Sem | SEO y técnica | Contenido editorial | Vídeo y redes | Comunidad y medios ganados | Hito |
|---:|---|---|---|---|---|
| 1 | Comprobaciones manuales §9.2, cola Semrush, especificación técnica | Plantilla de brief, mapa KW→URL congelado | Reserva de handles, bios con frase de entidad | Lectura de reglas de r/murdoku | — |
| 2 | GSC + Bing verificados, robots, sitemap v0, llms.txt v0 | **`/` «próximamente» con vistazo jugable + lista de espera** | Guiones de los 3 primeros vídeos | Lista de 20 creadores (criterios y cuotas) | **Dominio indexándose 8 semanas antes de lanzar** |
| 3 | — | Briefs de las 13 páginas no bloqueadas | Guiones 4-8 | Lista de prensa con contacto real | Luz verde legal sobre marca ajena |
| 4 | — | Redacción bloque categoría propia + aprender | Guiones 9-12, grabación 1-4 | Brief de colaboración de creadores | — |
| 5 | Prueba de rastreo con los 11 agentes | Redacción rama Murdoku (9) | Grabación 5-9 | Kit de prensa v1 | — |
| 6 | QA SEO de las 30 páginas | Redacción marca/negocio + legales | **12 vídeos en el banco** | Reclutamiento de la beta | Compuerta C-G3 |
| 7 | — | Correcciones de la beta | Vídeo de reglas de Escena grabado | **Beta cerrada arranca (100-300)** | Caso diario publicándose |
| 8 | Sitemaps definitivos, schema en CI | Congelación de textos | Vídeo de reglas montado y subido | Beta 2ª semana + OEPM presentada | Compuerta C-G4 |
| **9** | Envío de sitemap, alta en GSC/Bing | Artículo de lanzamiento | 3 vídeos + reglas | r/murdoku, r/juegos, dailydle.org | **LANZAMIENTO (L = 3 nov)** |
| 10 | — | «Cómo garantizamos una sola solución» | 3 vídeos | **Nota de prensa** + 20 creadores | 1.000 sesiones · D1 ≥ 35 % |
| 11 | — | `/vistazo`, `/dias`, `/dias/el-corto` | 3 vídeos + 1 largo YouTube | elarbolblanco.com, madresdesterradas.es | Activación desde landing ≥ 25 % |
| 12 | Primera auditoría de indexación | `/soluciones` + 7 soluciones | 3 vídeos | thinkygames.com, dailydle.org, murdoku.fans | ≥ 60 KW con impresiones |
| 13 | — | `/escalafon`, `/tecnicas`, `/autores/*` | 3 vídeos | — | **Día 30: 1.000 MAU** · panel GEO base |
| 14 | Arranca el plan de Argentina | `/dias/el-interrogatorio`, `/juegos-de-misterio` | 3 vídeos | Reddit: respuestas orgánicas | 3.000 sesiones orgánicas/30 d |
| 15 | — | `/para-profesores`, `/packs` | 3 vídeos + 1 docente | Grupos de Facebook de docentes | 300 correos de `PDF-CEBO` |
| 16 | Auditoría de poda del archivo | Facetas de archivo (4) | 3 vídeos | 2ª ronda de prensa con dato propio | Panel GEO ≥ 3/25 |
| 17 | Auditoría mensual | **Tregua**: caso de Navidad | 3 vídeos programados | — | — |
| 18 | — | `/expediente`, `/reglas/expediente` | 3 vídeos + reglas de Expediente | — | Modo Expediente sin errata |
| 19 | — | `/juegos-como-murdle` | 3 vídeos del jueves | Listas «games like» en inglés | `murdle online` en top 10 |
| 20 | Compuerta de catálogo C0-5 | `/acertijos`, `/enigmas` | 3 vídeos con registro neutro | r/argentina, r/mexico | Sesiones MX+AR ≥ 10 % |
| 21 | — | `/packs/[slug]`, `/para-medios` | 3 vídeos | Primera conversación B2B | 250 packs o 1 piloto |
| 22 | Revisión de canibalización | Retrospectiva de erratas | 3 vídeos | — | **Día 90: 5.000 MAU · panel 8/25** |

---

## 3. Tareas

Columnas: id · tarea · entregable · días de agente · horas del fundador · dependencias · semanas · criterio de «hecho» · riesgo.

### 3.1 Bloque A — Cimientos de medición y SEO técnico

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-01** | Las 10 comprobaciones manuales de `arbol-web-final.md` §9.2. Las 1-3 solo puede hacerlas el fundador (SERP geolocalizada en España desde su navegador) | `docs/seo/comprobaciones-manuales.md` con captura y fecha por comprobación | 1 | **3** | — | 1 | Las 10 con resultado escrito; los códigos de SERP 36, 38 y 52 resueltos o declarados irresolubles | Si el código 36 es el bloque generativo, toda la §4 del árbol pasa de recomendable a **obligatoria** y sube el coste de las 30 páginas |
| **G-02** | Cola de medición Semrush §9.1, tandas 1-4, en cuanto haya unidades. Actualizar los tres CSV | `docs/seo/keywords-espana.csv`, `keywords-latam.csv`, `mapa-keywords-urls.csv`, `docs/seo/medicion-2026-09.md` | 1,5 | **0,5** (comprar unidades) | — | 1-2 | Anomalía de México resuelta; Chile dimensionado; `juegos de logica` reconfirmada; `murdle pdf` con KD | Sin unidades, la rama de dos jugadores y el orden LatAm siguen a ciegas. **No bloquea el lanzamiento** |
| **G-03** | Congelar el mapa palabra→URL y la tabla de metadatos (`title`, `meta description`, `h1`, canónica) de las 30 páginas | `docs/seo/metadatos-dia-1.csv` | 1 | 0,5 | G-02 | 2 | 30 filas, una palabra principal por URL, sin ninguna palabra en dos URL | Canibalización creada por nosotros; la §7 del árbol la vigila |
| **G-04** | Especificación técnica para frontend: `robots.txt` con `Allow` a los 11 agentes, índice de sitemaps + 5 hijos, `llms.txt`, canónicas, 302→200 del caso de hoy, las 8 redirecciones 301 de §2.11, schema por tipo con test en CI, `hreflang="es"` + `x-default` | `docs/seo/especificacion-tecnica-seo.md` | 2 | 0 | — | 1-2 | Documento aceptado por `[FRONT]` con estimación propia | Que llegue tarde y se implemente a mano en la semana 8 |
| **G-05** | Alta y verificación de propiedades: Search Console (dominio + prefijo), Bing Webmaster Tools (importando GSC), PostHog, GA4 o Plausible, Wayback Machine, vigilancia gratuita TMview sobre `sospech*` en ES y EM | Capturas y accesos en `docs/seo/cuentas-medicion.md` (sin credenciales) | 0,5 | **1,5** (DNS y altas) | Dominio cerrado `[PROD]` | 2 | Las 6 verificadas y con datos entrando | Sin dominio cerrado no arranca nada de esta área |
| **G-06** | Plan de medición: definición de «usuario activo», eventos de PostHog, convención UTM, atribución por landing, cohortes por canal, coste por usuario activo | `docs/seo/plan-medicion.md` | 1,5 | 0,5 | `[DATOS]`, `[BACK]` | 2-3 | Eventos implementados y probados en la beta, no en el lanzamiento | Medir mal la semana 9 es irrecuperable: no hay segunda semana 9 |
| **G-07** | Prueba de rastreo: `curl` con los 11 agentes de IA + Googlebot + Bingbot contra 10 URL, en el CDN real. Comprobar que Cloudflare/Vercel no devuelve 403 | Registro en `docs/seo/prueba-rastreo.md` | 0,5 | 0,5 | G-04, `[FRONT]` | 5 y 8 | 0 respuestas 403 y 0 respuestas vacías sin JS | Es el fallo silencioso más caro del plan: se descubre a los tres meses |
| **G-08** | Auditoría mensual de indexación y poda: URL indexadas del archivo / URL con ≥1 impresión. Si baja del 30 %, `noindex` | `docs/seo/auditoria-indexacion-AAAA-MM.md` | 0,5/mes | 0 | Datos de GSC | 12, 16, 17, 22 | Cuatro auditorías con decisión de poda escrita | Archivo clasificado como plantilla vacía (árbol §6.3) |

### 3.2 Bloque B — Página pública anticipada y lista de espera (semana 2)

**Decisión de arquitectura:** la página «próximamente» se publica **en la raíz `/`**, no en `/proximamente`. Motivo: así el dominio acumula ocho semanas de rastreo, historial y datos de Search Console antes del día L, y la home no cambia nunca de URL. El día L, `/` se sustituye por el caso del día. No hay redirección, no hay URL huérfana y no se pierde ni una señal.

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-09** | Contenido de `/` anticipada: frase de entidad literal, qué es, cuándo abre, **un vistazo 3×3 jugable de verdad**, formulario de lista de espera, `Organization` + `WebSite`, sin ninguna marca ajena | Brief en `docs/seo/briefs/home-anticipada.md`; texto por `periodista-contenidos` | 1 | 1 (prueba en su móvil) | **`[MOTOR]` 20 vistazos 3×3 validados** + `[FRONT]` tablero mínimo | 2 | La página está viva, se juega sin registro y el `curl` devuelve el enunciado y las pistas | **Es la dependencia más tensa del plan.** Si el motor no llega, plan B: un solo caso validado a mano por `disenador-puzzles` y comprobado por el fundador, rejilla estática y el mismo formulario. Lo que no es negociable es que **haya juego**: una página de «próximamente» sin producto no da ni una señal útil |
| **G-10** | Lista de espera: doble opt-in, base en Supabase, texto RGPD, contador público de inscritos, agradecimiento en `noindex` | `[FRONT]` + `[BACK]`; copia legal por `experto-legal` | 0,5 | 0,5 | G-09 | 2 | Un correo real llega, se confirma y aparece en la base | Recoger correos sin base legal escrita |
| **G-11** | Secuencia de 4 correos hasta la beta: bienvenida con un caso jugable, «cómo se construye un caso», «te toca a ti: beta», «mañana abrimos» | `content/newsletter/secuencia-espera/*.md` | 1 | 0,5 | G-10 | 2-8 | Los 4 escritos, programados y probados con 5 direcciones | Lista fría a las 8 semanas: por eso hay un correo cada 15 días, no uno al final |
| **G-12** | Reserva de handles y bios idénticas con la frase de entidad: TikTok, Instagram, YouTube, X, Bluesky, Reddit, canal de WhatsApp, Threads | `content/social/perfiles.md` | 0,5 | **1,5** | Nombre cerrado `[PROD]` | 2 | 8 perfiles creados, bio idéntica, enlace al dominio, foto de marca | Que un tercero ocupe el handle mientras se decide el dominio. Cuesta cero hacerlo ya |

### 3.3 Bloque C — Las 30 páginas del día 1

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-13** | Plantilla de brief de landing (§5.1) y criterios de aceptación GEO | `docs/seo/briefs/_plantilla.md` | 0,5 | 0 | — | 2 | Aprobada por `periodista-contenidos` | — |
| **G-14** | Briefs de las 13 páginas **no bloqueadas** por legal (categoría propia 5, aprender y confianza 5, juego y archivo 3) | `docs/seo/briefs/*.md` (13) | 2 | 1 (revisión) | G-03, G-13 | 3 | 13 briefs con intención, H1, caso jugable asignado, FAQ, enlaces internos y metadatos | — |
| **G-15** | Briefs de las **9 páginas de la rama Murdoku** | `docs/seo/briefs/juegos-como-murdoku-*.md` (9) | 1,5 | 0,5 | **`[LEGAL]` luz verde sobre los 8 puntos** | 3-4 | 9 briefs con la frase de no afiliación redactada dentro de las primeras 60 palabras | **Bloqueante del día 1.** Sin luz verde no se escribe ni una línea: reescribir 9 landings en la semana 8 es imposible |
| **G-16** | Briefs de marca y negocio (3) | `docs/seo/briefs/*.md` (3) | 0,5 | 0,5 | — | 4 | 3 briefs; `/premium` revisado por `estratega-negocio` | — |
| **G-17** | **Redacción de las 13 no bloqueadas** — `periodista-contenidos` | `content/web/*.md` | 4 | 2 (muestreo) | G-14 | 4-5 | 13 textos con respuesta directa ≤60 palabras, FAQ y fecha visible | — |
| **G-18** | **Redacción de las 9 de marca ajena** — `periodista-contenidos`, con `experto-legal` revisando cada una | `content/web/juegos-como-murdoku/*.md` | 3 | 1 | G-15 | 4-5 | 9 textos revisados y firmados por legal | Riesgo reputacional en `/para-imprimir` (intención de piratería): se declara en la primera línea que no se persigue |
| **G-19** | Redacción de marca y negocio (3) y **de las 5 legales** (`experto-legal`) | `content/web/*.md`, `content/legal/*.md` | 2 | 1 | G-16 | 5-6 | 8 textos publicables | — |
| **G-20** | QA SEO de las 30: `curl` sin JS, un solo bloque JSON-LD válido, Lighthouse móvil ≥ 90, no afiliación en 60 palabras, caso jugable sobre el pliegue, enlaces internos recíprocos | `docs/seo/qa-dia-1.md` con 30 filas y semáforo | 1,5 | 1 | G-17…G-19, `[FRONT]` | 6 y 8 | 30/30 en verde antes de la compuerta C-G4 | Si el QA se hace la semana 9, no hay tiempo de corregir |

### 3.4 Bloque D — Vídeo

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-21** | **Vídeo de reglas de Escena** (60-90 s, YouTube, transcripción en `/como-jugar` y `/juegos-como-murdoku/como-se-juega`, `VideoObject`) | `content/social/guiones/reglas-escena.md` + vídeo publicado | 1,5 | **2** (grabación) | Build jugable `[FRONT]` sem. 5 | 7-8 | Publicado y enlazado en 2 páginas antes del día L | YouTube es el dominio más citado por AI Overviews (20,9 %): sin este vídeo, la página GEO del sitio va coja |
| **G-22** | **Vídeo de reglas de Expediente** (mismo formato) | Ídem | 1 | 1,5 | Modo Expediente `[PROD]` | 18 | Publicado con el lanzamiento del modo | Si Expediente se retrasa, el vídeo se retrasa con él |
| **G-23** | **12 vídeos cortos grabados antes de la beta**: guiones, grabación de pantalla del juego real, montaje, subtítulos quemados, miniaturas | `content/social/guiones/*.md` (12) + 12 MP4 9:16 en el banco | 5 | **3** | Build jugable sem. 5, casos validados `[PUZZLES]` | 3-6 | 12 vídeos listos, aprobados y con caso jugable enlazado antes del 18 de octubre | **Cuello de botella real**: sin build jugable en la semana 5 no hay grabación de pantalla. Plan B: 6 vídeos con mock de alta fidelidad de `[UX]`, y los 6 restantes en la semana 7 |
| **G-24** | Calendario de publicación de lanzamiento: 3 vídeos/semana desde la semana 9, con formato rotatorio (§6.3) | `content/social/calendario.md` | 1 | 0 | G-23 | 6 | 39 huecos con formato y caso asignado hasta la semana 22 | Publicar sin banco: a la tercera semana se seca |
| **G-25** | Bucle de iteración: medir retención media, finalizaciones, clics al enlace y usuarios activados por vídeo; **iterar el gancho, no el vídeo** | Informe semanal en `content/social/informe-AAAA-SS.md` | 0,5/sem | 0 | G-06 | 9-22 | 14 informes; regla escrita: gancho con < 60 % de retención a 3 s se retira | — |

### 3.5 Bloque E — Seeding con 20 creadores

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-26** | Lista de 20 creadores con criterios, cuotas por nicho y país, y estado (§7.1) | `content/social/creadores.md` | 2 | **1,5** (aprobar y aportar contactos) | — | 2-3 | 20 fichas con handle, seguidores, nicho, si ya ha hecho Murdoku, vía de contacto y estado | Inventar nombres. Solo hay **5 verificados** en el repositorio; los 15 restantes se buscan con el protocolo de §7.2 y se anotan con fuente |
| **G-27** | Brief de colaboración: libertad creativa, qué no se puede decir (nunca «somos Murdoku»), caso exclusivo, enlace medible, plazo | `content/social/brief-creadores.md` | 0,5 | 0,5 | `[LEGAL]` | 4 | Brief de 1 página aprobado por legal | Que un creador nos presente como «el Murdoku oficial»: es el peor titular posible |
| **G-28** | **Caso exclusivo por creador**: 20 casos con su nombre en el reparto, validados por el motor, que no entran en el archivo diario | `content/casos/creadores/*.json` | 1,5 | 0,5 | `[MOTOR]`, `[PUZZLES]` | 5-8 | 20 casos con certificado de solución única | Un caso con dos soluciones en manos de un creador con 50.000 seguidores |
| **G-29** | Enlaces medibles: `/c/<slug-creador>` → 301 a `/` con UTM, canónica limpia, cohorte propia en PostHog | `[FRONT]` + `docs/seo/plan-medicion.md` §UTM | 0,5 | 0 | G-06 | 6 | 20 enlaces creados y probados; el panel muestra usuarios activados por creador, no visitas | Medir visitas en vez de usuarios activos (regla del área) |
| **G-30** | Envío escalonado: **5 en la beta** (semana 7, con acceso anticipado), **15 en la semana 10**, con el caso del día 12 h antes | Estado en `content/social/creadores.md` | 1 | 1 | G-26…G-29 | 7 y 10 | 20 enviados, ≥ 6 respuestas, ≥ 3 publicaciones | Enviar los 20 el mismo día: si el producto falla, se quema toda la lista de una vez |

### 3.6 Bloque F — Prensa y medios ganados

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-31** | **Kit de prensa**: `/prensa` + zip con logos, capturas, GIF del tablero, biografía del fundador con foto, cifras actualizadas automáticamente, contacto directo, frase de entidad literal | `content/web/prensa.md` + `public/prensa/kit.zip` | 1,5 | **1,5** (foto, biografía, datos personales) | `[DATOS]` contadores | 6-8 | Descargable el día L, con `Organization` y `sameAs` reales | Un kit sin datos propios es un kit que no se usa |
| **G-32** | Lista de medios con **contacto real y nombre de persona**: Xataka, Genbeta, Xataka Android, Hipertextual, Educación 3.0, SerPadres, Telecinco, Que.es, Nokton Magazine, Think Big, El Progreso, elarbolblanco.com, madresdesterradas.es, tiamopastoor.com | `content/prensa/medios.csv` | 1 | **2** (los contactos que solo él puede conseguir) | — | 3-4 | ≥ 12 filas con persona, correo y ángulo propuesto | Enviar a `redaccion@`: tasa de respuesta cercana a cero |
| **G-33** | **Nota de prensa**, ángulo: «el primer juego diario de deducción **escrito** en español, con solución única garantizada por un motor». Con contadores propios, no adjetivos | `content/prensa/nota-lanzamiento.md` | 1 | 1 | G-31, G-32, **OEPM presentada** | 8-10 | Enviada personalizada, una a una, en la **semana 10** | **Condición dura:** no se envía si la solicitud OEPM no está presentada (§0) |
| **G-34** | Segunda ronda de prensa **con dato propio** («el 41 % resolvió el caso del martes»), a los mismos medios y a dos nuevos | `content/prensa/nota-datos-mes-1.md` | 0,5 | 0,5 | 30 días de datos | 16 | Enviada; ≥ 1 respuesta o publicación | Insistir sin dato nuevo quema la lista |
| **G-35** | Envío a listas «games like» y directorios: thinkygames.com, dailydle.org, murdermysterygameai.com, mindglegames.com, playinquest.com, murdoku.fans/games-like-murdoku. **No a cluedoku.app** (competidor directo) | `content/prensa/directorios.csv` con estado | 1 | 0,5 | Producto vivo | 9 (dailydle) y 12 (resto), 19 (en inglés) | 6 enviados, ≥ 2 aceptados | El 88 % de las URL citadas por IA no está en el top 10: estas listas valen más que una posición |
| **G-36** | Hacker News / Product Hunt con la pieza técnica «un solver que emite un certificado de deducción paso a paso» | Publicación + `content/prensa/hn-ph.md` | 0,5 | 1 | `/una-sola-solucion` publicada | 13 | Publicado con el fundador respondiendo en directo | `analisis-estrategico.md` §6 avisa: **no aporta usuarios hispanos**. Se hace por enlace y autoridad, no por tráfico. Si el fundador no tiene una hora para responder, no se publica |

### 3.7 Bloque G — Reddit y comunidades

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-37** | Cuenta real de Reddit del fundador, con historial: participar como jugador durante 7 semanas antes de mencionar nada. Leer y anotar las reglas de autopromoción de r/murdoku, r/murdle, r/puzzles, r/WebGames, r/juegos, r/argentina, r/mexico | `content/social/comunidades.md` | 0,5 | **0,5/sem × 7** | G-01 (comprobación 9) | 2-8 | Cuenta con ≥ 100 de karma y 7 subreddits con sus reglas escritas | Publicar el día L con una cuenta de un día es un baneo garantizado y **quema el canal para siempre** |
| **G-38** | Entrada de presentación en r/murdoku y r/juegos el día L, con el formato que pida cada subreddit y respuesta a todos los comentarios en 24 h | Enlaces en `content/social/comunidades.md` | 0,5 | **2** | G-37 | 9 | Publicado, sin retirar, con respuesta a cada comentario | r/murdoku ya rankea en la SERP de `murdoku online`: es medio ganado y prueba social a la vez |
| **G-39** | Grupos de Facebook y canales de Telegram/WhatsApp de pasatiempos en español: identificar 15, entrar, participar, presentar cuando proceda | `content/social/comunidades.md` | 1 | 1 | — | 6-11 | 15 identificados, ≥ 8 con presencia, ≥ 3 presentaciones aceptadas | Spam: una expulsión se propaga entre administradores |
| **G-40** | Comunidades de profesores (grupos de docentes, Genially como alianza) con el `PDF-AULA` | `content/social/comunidades.md` §docentes | 1 | 1 | `/para-profesores` | 15 | ≥ 5 grupos y 1 alianza abierta | El calendario escolar manda: septiembre y enero, no diciembre |
| **G-41** | Discord o Telegram propio **solo al superar 1.000 usuarios**, con normas y canal de soluciones con retraso | `content/social/comunidad-propia.md` | 1 | 1 | 1.000 MAU | 13+ | Abierto con ≥ 30 personas la primera semana | Abrirlo antes: una sala vacía es peor que no tener sala |

### 3.8 Bloque H — Newsletter

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-42** | «El caso de hoy»: correo diario automático a las 08:00 Europa/Madrid con el enunciado, el plano y el enlace profundo; sin spoiler; un solo botón. Doble opt-in, baja en un clic, SPF/DKIM/DMARC | `content/newsletter/plantilla-diaria.md` + envío en Resend | 2 | 1 | `[BACK]`, G-10 | 7-9 | Enviado sin fallo los 14 días de la beta y del lanzamiento | Es una de las dos palancas que **no dependen de ningún buscador** (árbol §8.3). Romper la cadencia un día es romper la promesa |
| **G-43** | Correo semanal de racha rota («te quedan 24 h para reparar la racha») y correo de reactivación a los 7 días de inactividad | Ídem | 1 | 0 | G-42 | 11-13 | Ambos activos, con medición de reapertura | Frecuencia excesiva: máximo 1 correo diario + 1 de racha, nunca más |
| **G-44** | Objetivo de lista y de calidad: tasa de apertura, clics, bajas, y **usuarios activos por correo**, no aperturas | Panel en PostHog | 0,5 | 0 | G-06 | 9-22 | Métrica semanal publicada | — |

### 3.9 Bloque I — Beta cerrada (semanas 7-8)

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-45** | Reclutamiento de 100-300 personas con cuotas (§11.1) | `docs/roadmap/beta-participantes.csv` (anonimizado) | 1 | **2** | Lista de espera ≥ 400 | 6-7 | ≥ 100 confirmadas, con las cuotas de LatAm y docentes cubiertas | Beta de 300 amigos: mide simpatía, no producto |
| **G-46** | Instrumentación y guion de la beta: qué se mide, qué se pregunta, cómo se recoge (§11.2) | `docs/roadmap/beta-protocolo.md` | 1 | 1 | G-06 | 6-7 | Protocolo escrito **antes** de que entre la primera persona | Medir después de mirar los datos |
| **G-47** | Ejecución: 14 días de caso diario real, correo diario, 6 entrevistas de 30 min, canal de incidencias | `docs/roadmap/beta-informe.md` | 2 | **6** (entrevistas y respuesta) | G-45, G-46 | 7-8 | Informe con las 12 métricas de §11.2 y la lista de correcciones priorizada | Que el caso diario falle un día: es exactamente lo que la beta debe descubrir |
| **G-48** | Compuerta de lanzamiento C-G4: decisión ir / no ir con criterios escritos antes (§16) | Acta en `docs/decisiones.md` | 0,5 | 1 | G-47, G-20 | 8 | Decisión firmada por el fundador el viernes 30 de octubre | Lanzar con la compuerta roja por no perder la fecha |

### 3.10 Bloque J — Lanzamiento y calendario editorial

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-49** | Semana de lanzamiento día a día (§12) | `content/prensa/plan-semana-l.md` | 1 | **10** | C-G4 | 9 | Los 8 días ejecutados con su lista de comprobación | — |
| **G-50** | Ejecución del calendario editorial S2-S13 reasignado a las semanas 10-22 (§2) | Páginas y artículos en `content/web/` y `content/blog/` | 12 (repartidos) | 0,5/sem | — | 10-22 | Cada semana con su entregable y su métrica | Que el calendario se coma la respuesta a la comunidad |
| **G-51** | Artículo mensual «Los datos de [mes]» con `analista-datos` | `content/blog/datos-AAAA-MM.md` | 0,5/mes | 0 | Contadores | 12, 16, 21 | 3 artículos con cifra propia y fecha | Es la pieza que ningún competidor puede copiar: nadie más tiene el dato |

### 3.11 Bloque K — GEO y expansión

| id | Tarea | Entregable | Días ag. | h fund. | Depende | Sem. | Hecho cuando | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **G-52** | **Panel GEO mensual** de 25 preguntas × 4 motores × 2 países (§14) | `docs/seo/geo-seguimiento.csv` + nota mensual | 1/mes | **3/mes** | Producto vivo | 13, 17, 21 y día 1 de cada mes | 3 paneles registrados; el primero puede ser 0/25 y está bien | Solo el fundador puede consultar ChatGPT/Gemini/Perplexity con sesión limpia: **si no dispone de las 3 h, el panel se reduce a 10 preguntas × 2 motores** y se dice |
| **G-53** | Señales automáticas semanales: informe de IA generativa de GSC, canal de referidos de asistentes en PostHog, recuento de rastreadores en logs con alerta a 14 días a cero | Panel + alerta | 1 | 0 | `[BACK]` | 10-22 | Alerta probada provocando un 403 a propósito | Entre el 35 y el 70 % de las sesiones desde asistentes llegan sin *referrer*: **la demanda de marca en GSC es el mejor indicador** |
| **G-54** | **Plan de Argentina, mes 4** (§15) | `docs/seo/plan-argentina.md` | 2 | **2** | G-02, datos de país | 14-17 | Plan con compuerta escrita y las cinco acciones sin URL en marcha | Abrir `/ar/` sin texto distinto que servir: multiplica el rastreo y canibaliza |
| **G-55** | Vigilancia de las 4 señales de aceleración del árbol §8.4 (app oficial de Murdoku, caída del 30 % interanual, categoría propia > 40 % de las sesiones, reto diario de Enigmic) | Nota en el informe semanal | 0,25/sem | 0 | `analista-competencia` | 9-22 | Revisión semanal registrada | Enterarse tarde de una app oficial es perder medio plan de golpe |

**Totales del área:** ≈ **68 días de agente** y ≈ **113 horas del fundador** repartidas en 22 semanas (§18).

---

## 4. Las 30 páginas del día 1: quién, cuándo y con qué caso jugable dentro

Regla del área: **cada landing contiene el juego**. Una página de marca ajena sin producto real dentro es una doorway y Google la degrada; con producto real dentro es una comparativa legítima.

**Regla nueva que este plan añade, y que el árbol no resuelve:** ocho landings de la rama Murdoku tienen asignado «el lunes El corto». Si las ocho sirven **el mismo tablero y el mismo enunciado**, tenemos ocho páginas con el contenido principal duplicado y ninguna se posiciona. Por eso se crea el **banco de casos de landing**: 12 casos exclusivos, con enunciado propio de ≥ 120 palabras, que **no entran en el archivo diario ni tocan la racha**, uno por landing jugable, con rotación mensual. Cada landing lleva además un módulo enlazado —no incrustado— «o juega el caso de hoy» hacia `/`, que preserva la promesa de juego diario sin duplicar HTML. Petición formal a `[MOTOR]` y `[PUZZLES]` en la semana 4.

| # | URL | Escribe | Revisa | Sem. | Caso jugable que lleva dentro |
|---:|---|---|---|---|---|
| 1 | `/` | `periodista-contenidos` + `analista-datos` | — | 2 (anticipada) / 5 | **Caso Escena del día completo**, con el carácter del día. En la semana 2, vistazo 3×3 |
| 2 | `/archivo` | `periodista-contenidos` + `analista-datos` | `estratega-growth-seo` | 4 | Calendario navegable + el caso **D+7** jugable (el más antiguo del archivo gratuito). *Corrección al árbol: el día 1 no existe «un caso del mes anterior» salvo que la beta haya publicado en octubre; con L = 3 nov, el archivo cubre 27 oct - 2 nov y sí existen dos meses* |
| 3 | `/archivo/AAAA-MM` | `periodista-contenidos` | — | 4 | Rejilla del mes + 1 caso jugable del mes. Se publican `2026-10` y `2026-11` |
| 4 | `/como-jugar` | `periodista-contenidos` | `revisor-calidad` | 4 | **Tutorial 3×3 jugable paso a paso** (el vistazo con andamiaje) + vídeo de reglas de Escena con transcripción |
| 5 | `/reglas` | `periodista-contenidos` | `revisor-calidad` | 4 | Mini-caso 3×3 **distinto** del de `/como-jugar` (evita canibalización de contenido, no solo de palabra) |
| 6 | `/reglas/escena` | `periodista-contenidos` + `ingeniero-motor-puzzles` | `revisor-calidad` | 4 | Vistazo 3×3 de Escena |
| 7 | `/una-sola-solucion` | `ingeniero-motor-puzzles` + `periodista-contenidos` | `revisor-calidad` | 4-5 | **Reconstrucción navegable** de un caso ya publicado: la cadena del certificado, peldaño a peldaño, con el nombre de la técnica |
| 8 | `/erratas` | `periodista-contenidos` | `revisor-calidad` | 5 | Sin juego (registro público). Es la única P0 sin producto dentro y está justificado |
| 9 | `/juegos-como-murdoku` | `periodista-contenidos` | **`experto-legal`** | 4-5 | Caso de landing 1 (4×4, sobres por progreso, abre con 3 pistas) + tabla comparativa fechada |
| 10 | `/juegos-como-murdoku/online` | `periodista-contenidos` | **`experto-legal`** | 4-5 | Caso de landing 2. **La página más importante del sitio** (`murdoku online`, 9.900 ES / KD 29) |
| 11 | `/juegos-como-murdoku/en-espanol` | `periodista-contenidos` | **`experto-legal`** | 4-5 | Caso de landing 3, elegido para lucir nombres, humor y escenario españoles: es la prueba de «escrito, no traducido» |
| 12 | `/juegos-como-murdoku/gratis` | `periodista-contenidos` | **`experto-legal`** + `estratega-negocio` | 4-5 | Caso de landing 4 + tabla de qué es gratis para siempre + compromiso publicado sobre anuncios |
| 13 | `/juegos-como-murdoku/sin-descargar` | `periodista-contenidos` | **`experto-legal`** | 4-5 | Caso de landing 5 + `HowTo` de instalar la PWA en dos toques + tabla de apps con nota y fecha |
| 14 | `/juegos-como-murdoku/como-se-juega` | `periodista-contenidos` | **`experto-legal`** | 4-5 | Caso 3×3 jugable + **vídeo propio de 60-90 s**. Es la página GEO del sitio |
| 15 | `/juegos-como-murdoku/para-imprimir` | `periodista-contenidos` | **`experto-legal`** (bloqueante reforzado) | 5 | **Expediente de una página** A4 descargable + hoja de trabajo en blanco sin pedir correo + caso de landing 6 |
| 16 | `/juegos-como-murdoku/para-ninos` | `periodista-contenidos` | **`experto-legal`** + `revisor-calidad` | 5 | **Viernes «De disparate» 4×4 sin fallecidos** + vistazo 3×3. Cero anuncios, sin compartir, sin cuentas de menores |
| 17 | `/juegos-como-murdoku/faciles` | `periodista-contenidos` | **`experto-legal`** | 5 | Vistazo 3×3 (2-3 min, no toca la racha) + tres consejos **con nombre de técnica** |
| 18 | `/juegos-diarios` | `periodista-contenidos` | `estratega-growth-seo` | 4 | El caso de hoy con la etiqueta del día + **la lista honesta de juegos diarios en español, incluidos los de terceros**, en `<table>` con fecha |
| 19 | `/juegos-de-detectives` | `periodista-contenidos` | `estratega-growth-seo` | 4 | **Miércoles «El interrogatorio»** si pasa la Compuerta 0 del motor; **si no, el miércoles clásico**, y la página se reescribe en la semana 14 |
| 20 | `/juegos-de-logica` | `periodista-contenidos` | `estratega-growth-seo` | 4 | El caso de hoy + vistazo |
| 21 | `/para-imprimir` | `periodista-contenidos` + `disenador-ux-ui` | `estratega-growth-seo` | 4 | Hoja de trabajo en blanco + expediente A4 de muestra, sin muro de correo |
| 22 | `/packs` | `periodista-contenidos` + `estratega-negocio` | `estratega-growth-seo` | 4 | **`PDF-CEBO` de 5 casos** gratis (a cambio de correo) + 1 caso del pack jugable en la página. Venta en el mes 3 |
| 23 | `/sobre-nosotros` | `periodista-contenidos` | `director-producto` | 5 | Sin juego. **Página crítica para GEO**: quién, dónde, desde cuándo, cómo se financia, frase de entidad literal, `sameAs` reales |
| 24 | `/premium` | `periodista-contenidos` | `estratega-negocio` | 5 | Sin juego. Lista de espera, 12 ventajas, precio y **lo que nunca entra en Premium** |
| 25 | `/contacto` | `periodista-contenidos` | — | 5 | Sin juego |
| 26 | `/legal/marcas` | **`experto-legal`** | — | 5 | Declaración de no afiliación y uso descriptivo. Enlazada desde el pie **y desde cada `/juegos-como-*`** |
| 27-30 | `/legal/aviso-legal`, `/privacidad`, `/cookies`, `/terminos` | **`experto-legal`** | — | 5-6 | — |

Las 6 URL restantes de las 36 (`/caso/AAAA-MM-DD` × 6) las genera el motor y **solo se publican indexables si cumplen la regla anti-contenido-fino** del árbol §6.3: título propio, ≥ 120 palabras únicas, dificultad medida, número de pistas, día y su regla, y técnica exigida según el certificado.

---

## 5. Briefs de landing

### 5.1 Plantilla (`docs/seo/briefs/_plantilla.md`)

Cada brief lleva exactamente estos 14 campos, y `periodista-contenidos` no empieza a escribir sin ellos:

1. **URL y tipo** (jugable / guía / comparativa / landing de intención / hub / institucional).
2. **Intención de búsqueda en una frase**, escrita como la diría el usuario.
3. **Palabra principal** con volumen y KD medidos y fecha de medición; **secundarias** con las suyas. Ninguna palabra puede aparecer en dos briefs.
4. **H1** literal y **`<title>`** (≤ 60 caracteres) y **`meta description`** (≤ 155) literales.
5. **Respuesta directa**: ≤ 60 palabras, autocontenida, sin «en este artículo veremos», que responda literalmente a la consulta. Va antes que ninguna otra cosa.
6. **Frase de no afiliación** literal, si es `/juegos-como-*`, **dentro de esas mismas 60 palabras**.
7. **Caso jugable**: cuál, de qué tamaño, con qué regla, dónde va (sobre el pliegue) y qué pasa si el jugador lo resuelve.
8. **Estructura de `h2`**, todos en forma de pregunta, con la longitud objetivo de cada bloque (40-80 palabras por párrafo).
9. **Tabla comparativa** si procede: columnas fijas y qué hace mejor el otro.
10. **FAQ**: 4-8 preguntas con la redacción conversacional de `analisis-geo.md` §2, respuesta de 40-80 palabras que **empieza afirmando**.
11. **Dato propio citable** con fecha de cálculo, y quién lo genera.
12. **Enlaces internos**: 2-4 salientes con su *anchor text* exacto, y de qué páginas debe recibir enlaces esta.
13. **Schema** que corresponde según el árbol §4.2.
14. **Criterios de aceptación**: `curl` sin JS devuelve enunciado + pistas + FAQ; Lighthouse móvil ≥ 90; un solo JSON-LD válido; fecha visible en el texto; autoría con `sameAs`.

### 5.2 Anchor texts que se fijan de una vez

- Hacia `/juegos-como-murdoku/online`: **«jugar murdoku online»** (480 / KD 13) mientras `murdoku online` (KD 29) madura. Es la palabra más barata del racimo y no merece página propia: merece ser el enlace.
- Hacia `/`: «el caso de hoy», «juego diario de deducción».
- Hacia `/una-sola-solucion`: «cómo garantizamos una sola solución».
- Nunca se usa la marca ajena como anchor hacia la home.

---

## 6. Vídeo

### 6.1 Vídeo de reglas por modo (obligatorio)

Dos piezas, no más, y las dos son superficie de cita, no adorno: YouTube es el dominio más citado por AI Overviews (20,9 % de las citas).

| Vídeo | Duración | Dónde vive | Dónde se incrusta | Semana | Id |
|---|---|---|---|---|---|
| **Reglas de Escena** | 60-90 s | YouTube (canal propio) | `/como-jugar`, `/reglas/escena`, `/juegos-como-murdoku/como-se-juega`, con **transcripción completa en la página** y `VideoObject` | 8 (publicado antes del día L) | G-21 |
| **Reglas de Expediente** | 60-90 s | YouTube | `/reglas/expediente`, `/juegos-como-murdle`, `/expediente` | 18 | G-22 |

Estructura fija de los dos: (1) qué es en una frase, (2) la regla dura en pantalla, (3) un ejemplo 3×3 resuelto en tiempo real, (4) el error típico, (5) llamada a jugar el caso de hoy. Título del vídeo con la consulta literal («Cómo se juega: reglas en 60 segundos»), descripción con la frase de entidad y enlace, capítulos, subtítulos subidos como fichero (no solo quemados) para que sean transcripción indexable.

### 6.2 Los 12 vídeos grabados antes de la beta (G-23)

Grabados y montados **antes del 18 de octubre** (fin de la semana 6). Reparto por formato, con el gancho ya escrito:

| # | Formato | Gancho | Caso | Semana de grabación |
|---:|---|---|---|---|
| 1-3 | «Resuelve este caso en 60 segundos» | «¿Quién se llevó el último trozo de tarta? Tienes 3 pistas» | Casos de landing 1-3 | 5 |
| 4-5 | «La pista que nadie ve» | «El 68 % falló por esta pista» (dato real del motor) | Casos del banco | 5 |
| 6-7 | «¿Puedes resolverlo antes que yo?» | Pantalla partida, el creador jugando | Caso del día tipo lunes | 6 |
| 8 | «Cómo se construye un caso» (detrás de cámaras del generador) | «Este caso tenía 4.000 soluciones. Así se quedó en una» | Salida real del solver | 6 |
| 9 | «Murdoku y nuestro caso del día» (comparativa respetuosa) | «Si te gustó el libro, esto es lo que cambia» | Caso de landing 1 | 6 |
| 10 | «El viernes no hay muertos» | «Este es el caso que juegan los niños» | Viernes «De disparate» | 6 |
| 11 | «El error que comete todo el mundo el primer día» | «No empieces por la pista 1» | Vistazo 3×3 | 6 |
| 12 | Reserva / respuesta a comentarios | — | — | 6 |

Reglas de `creador-social` que se aplican sin excepción: 9:16, 20-45 s, subtítulos quemados, texto grande, 1 pista cada 3-4 s, pausa explícita «pausa y piensa», revelación con giro, **una sola** llamada a la acción, sin depender del audio. Nunca se presenta el producto como Murdoku ni Murdle: siempre «inspirado en el género».

### 6.3 Calendario de publicación (G-24)

3 vídeos por semana desde la semana 9 hasta la 22 = **42 huecos**, cubiertos con los 12 del banco (semanas 9-12) y producción continua a partir de ahí. Rotación semanal fija: **martes** «resuelve este caso en 60 s», **jueves** formato variable (pista que nadie ve / detrás de cámaras / reto), **sábado** el caso del día de esa semana con más gracia. Plataformas: TikTok (descubrimiento), Reels (compartir), Shorts (cola larga y SEO de vídeo); en X y Bluesky solo el resultado en cuadrícula sin spoiler. Hashtags: `#murdoku #murdle #acertijos #booktok #pasatiempos #logica #misterio` + el propio de marca.

**Alerta permanente:** si un vídeo propio o de un creador que mencione la marca pasa de **100.000 visualizaciones**, `creador-social` avisa al principio de su siguiente informe: es disparador de D-006 (§0).

---

## 7. Seeding con 20 creadores de BookTok y pasatiempos

### 7.1 Cuotas de la lista

20 creadores de 10.000-50.000 seguidores (un vídeo de creador vale más que diez propios, y los micro tienen mejor coste por usuario activado que los grandes):

| Nicho | País | Cuota | Verificados hoy en el repositorio |
|---|---|---:|---|
| Pasatiempos, acertijos y lógica | ES | 5 | @cristinini (origen del fenómeno según Hipertextual), @martstips |
| BookTok y lectura | ES | 6 | @martamartiuss, @bymaria.aug |
| True crime suave y misterio | ES | 3 | — |
| Cualquiera de los tres | AR | 3 | @guilletokman |
| Cualquiera de los tres | MX | 3 | — |

**Honestidad sobre esta lista:** solo hay **5 creadores verificados** en todo el repositorio (`analisis-geo.md` §3.4.4 y el árbol §8.3). Los 15 restantes **no se inventan**: se buscan en la semana 3 con el protocolo de §7.2 y cada ficha se guarda con la fuente y la fecha en que se comprobó. Una lista con nombres inventados es peor que una lista de cinco.

### 7.2 Protocolo de búsqueda de los 15 restantes (semana 3, `creador-social`)

1. Buscar en TikTok e Instagram `#murdoku`, `#murdle`, `#booktok` + `pasatiempos`, `acertijos`, `libro de misterio`, y ordenar por vídeos de los últimos 90 días.
2. Filtrar: 10.000-50.000 seguidores, ≥ 3 vídeos en 30 días, comentarios reales (no bots), público hispanohablante mayoritario, **sin contenido incompatible con la política *cozy*** (nada de crímenes reales, gore ni menores como víctimas).
3. Anotar por ficha: handle, plataforma, seguidores, media de visualizaciones, si ya ha hecho un vídeo de Murdoku (los que sí, primero), vía de contacto y fecha de comprobación.
4. Revisar las páginas «discover» de TikTok que ya rankean para las colas largas en español: son un directorio gratuito de quién publica sobre esto.

### 7.3 Brief de colaboración (G-27, una página)

- **Qué damos:** el caso del día **12 horas antes** que nadie; un **caso exclusivo con su nombre en el reparto** (especial «tú eres sospechoso»); libertad creativa total sobre el guion; enlace propio; y, si lo pide, aparecer en `/autores/[slug]`.
- **Qué pedimos:** un vídeo, sin fecha impuesta, con el enlace en el pie o en la biografía.
- **Qué no se puede decir:** que somos Murdoku, que somos la app oficial de nadie, ni que estamos afiliados a ninguna editorial. Frase sugerida: «un juego diario de deducción escrito en español, inspirado en el género».
- **Recompensa:** en contenido y visibilidad, **nunca en dinero** en esta fase. Si más adelante hay pago, se declara como publicidad según la normativa española.

### 7.4 Enlace medible (G-29)

`sospechario.com/c/<slug-creador>` → **301** a `/` con `?utm_source=creador&utm_medium=social&utm_campaign=seeding&utm_content=<slug>`. La URL de destino es autocanónica y sin parámetros (árbol §6.1), así que el enlace mide sin ensuciar el índice. En PostHog, una cohorte por creador. **Lo que se reporta es usuarios activos a 7 días por creador, no visitas** — es la regla del área: coste por usuario activo, no por visita.

### 7.5 Cadencia de envío (G-30)

- **Semana 7 (beta):** 5 creadores, los que ya han hecho Murdoku, con acceso anticipado y sin pedir nada a cambio. Si el producto falla, falla ante 5, no ante 20.
- **Semana 10:** los 15 restantes, con el producto vivo, la nota de prensa ya enviada y un caso exclusivo cada uno.
- **Seguimiento:** un recordatorio a los 7 días y ninguno más. Objetivo: ≥ 6 respuestas y ≥ 3 publicaciones de los 20.

---

## 8. Prensa

**Ángulo único, repetido literalmente en todos los envíos:** «el primer juego diario de deducción **escrito** en español —no traducido—, con solución única garantizada por un motor que emite un certificado de deducción paso a paso». El dato que se entrega no son adjetivos: son **nuestros contadores** (casos publicados, tasa de resolución por día de la semana, tiempo medio, erratas reconocidas).

**Kit de prensa (G-31, semana 6-8):** `/prensa` + zip con logotipos en SVG y PNG, 6 capturas a resolución de imprenta, un GIF de 5 s del tablero resolviéndose, biografía y foto del fundador, la frase de entidad literal, tres cifras propias con fecha, y contacto directo con nombre y correo. Se actualiza solo.

**Lista (G-32, semana 3-4):** los 10 medios del árbol §8.3 más `El Progreso`, y los tres blogs nicho que el buscador ya resume (elarbolblanco.com, madresdesterradas.es, tiamopastoor.com). **Con nombre de persona**: enviar a `redaccion@` no funciona. Son 2 horas del fundador que no puede hacer ningún agente.

**Nota de prensa (G-33, semana 10):** envío **personalizado uno a uno**, martes por la mañana, con una línea distinta por medio explicando por qué le interesa a **su** público (Educación 3.0 → el viernes sin fallecidos y el aula; Xataka Android → la PWA frente a una app no oficial de 2,36/5 con 63.000 descargas; SerPadres → edad recomendada con criterio explicado). **Condición dura: OEPM presentada el viernes 6 de noviembre.**

**Segunda ronda (G-34, semana 16):** solo con dato nuevo del mes 1. Sin dato nuevo no se escribe.

---

## 9. Reddit y comunidades

La regla que gobierna todo este bloque: **la cuenta se calienta siete semanas antes**. Reddit encabeza las citas en ChatGPT y Perplexity (20-24 % en Perplexity) y r/murdoku ya aparece en la SERP de `murdoku online`: es a la vez canal de adquisición y medio ganado. Publicar el día L con una cuenta creada el día L es un baneo, y el baneo es permanente.

| Comunidad | Qué se hace | Cuándo |
|---|---|---|
| r/murdoku | Participar como jugador desde la semana 2. Entrada de presentación el día L con el formato que permitan sus reglas (G-01 comprobación 9) | 2-8 (lectura), 9 (presentación) |
| r/juegos | Ídem | 2-8, 9 |
| r/puzzles, r/WebGames | Respuestas cuando alguien pida «algo como Murdle en español», nunca al revés | 10-22 |
| r/murdle | Solo cuando exista el modo Expediente | 18+ |
| r/argentina, r/mexico | Hilos de «qué juegos diarios jugáis» | 20 |
| Grupos de Facebook de pasatiempos (15 identificados) | Entrar, participar 4 semanas, presentar si las normas lo permiten | 6-11 |
| Canales de Telegram/WhatsApp de juegos diarios | Ídem | 9-13 |
| Grupos de docentes + Genially | Con `PDF-AULA` y guía docente en abierto | 15 |
| Discord o Telegram propio | **Solo al superar 1.000 usuarios**, con canal de soluciones con retraso | 13+ |

Product Hunt y Hacker News: se hacen una vez (G-36, semana 13) por enlace y autoridad. `analisis-estrategico.md` §6 es explícito: **no aportan usuarios hispanos**. No se repiten.

---

## 10. Newsletter

Un correo al día, sin excepciones. Es, junto con la PWA instalada, la palanca que no depende de ningún buscador (árbol §8.3).

- **«El caso de hoy»** (G-42): 08:00 Europa/Madrid, enunciado + plano + un botón. Sin spoiler, sin solución, sin resumen del caso de ayer en el cuerpo.
- **Racha en peligro** (G-43): un solo correo, a las 20:00, solo si la racha lleva ≥ 3 días y hoy no se ha jugado.
- **Reactivación**: a los 7 días de inactividad, una vez, con el caso más resuelto de la semana.
- **Techo absoluto:** 1 diario + 1 de racha. Nunca más.
- **Higiene:** doble opt-in, baja en un clic, SPF/DKIM/DMARC configurados antes del primer envío masivo, y calentamiento del dominio durante la beta (14 días con 100-300 direcciones es exactamente el calentamiento que hace falta).
- **Métrica que cuenta:** usuarios activos atribuidos al correo, no aperturas. Objetivo semana 22: **≥ 25 % de los usuarios activos diarios llegan por correo**.

---

## 11. Beta cerrada (semanas 7-8, 19 de octubre - 1 de noviembre)

### 11.1 Cómo se reclutan 100-300 personas (G-45)

Objetivo: **150 confirmadas**, rango aceptable 100-300. Cuotas, porque una beta de 300 conocidos mide simpatía y no producto:

| Fuente | Cuota | Cómo |
|---|---:|---|
| Lista de espera de `/` anticipada | **80-150** | Correo 3 de la secuencia: «te toca a ti». Invitación por orden de inscripción |
| Creadores | 5 | Los 5 verificados, con acceso anticipado (G-30) |
| r/murdoku, r/juegos y grupos de pasatiempos | 20-40 | Solo si sus reglas lo permiten; si no, no se hace |
| Docentes | 10 | Contactos del fundador + grupos; validan el viernes «De disparate» y el `PDF-AULA` |
| **LatAm (AR y MX)** | **20** | Cuota obligatoria: valida el registro neutro y el cambio de caso a medianoche **local**, que es un compromiso de producto que nadie ha probado |
| Personas que nunca han oído hablar de Murdoku | **15** | Cuota obligatoria: son las únicas que pueden decir si el producto se entiende **sin** la marca ajena |
| Entorno del fundador | ≤ 15 | Techo, no objetivo |

Todas entran por correo con enlace personal, sin registro, en su propio móvil. Nadie entra por WhatsApp reenviado.

### 11.2 Qué se mide (G-46, protocolo escrito **antes** de que entre nadie)

Doce métricas y tres preguntas. Las métricas:

1. **Tasa de finalización del primer caso** (el número que más importa: si no completan el primero, nada de lo demás existe).
2. **Punto de abandono** por caso: en qué pista, en qué segundo.
3. **Tiempo medio** por día de la semana y por tamaño de rejilla.
4. **D1, D3, D7** de retención (D7 se mide con los que entraron en la semana 7).
5. **Racha media** y cuántos la rompen.
6. **Uso del Sabueso** (los dos niveles) y si correlaciona con finalizar o con abandonar.
7. **Tasa de compartir** el resultado sin spoiler y clics recibidos por resultado compartido → **coeficiente viral k** = (compartidos por usuario) × (usuarios nuevos por compartido).
8. **Apertura y clic del correo diario**, y usuarios que vuelven solo por él.
9. **Instalación de la PWA**: cuántos la instalan y a los cuántos días.
10. **Casos con incidencia lógica**: objetivo **cero**; cualquiera distinto de cero para el lanzamiento.
11. **Core Web Vitals reales de campo** en móviles de verdad, no en Lighthouse.
12. **Comprensión sin marca ajena**: de los 15 que no conocen Murdoku, cuántos completan el primer caso sin ayuda.

Las tres preguntas, en el correo del día 7 y en las 6 entrevistas de 30 minutos: (a) ¿se lo has contado a alguien? ¿a quién y cómo lo describiste? —esa frase es la entidad real, y si no coincide con la nuestra, la nuestra está mal—; (b) ¿qué te ha hecho volver al segundo día?; (c) ¿qué has echado de menos?

**Prueba de nombres (5 personas, semana 5), aparte:** los nombres de las 26 técnicas y del escalafón. Si no pasa, `/tecnicas` y `/escalafon` **no se publican** en la semana 13 y se reescriben (árbol §10.2 S5).

---

## 12. Semana de lanzamiento (semana 9): qué se publica cada día

Día L = **martes 3 de noviembre**. Ventana de retraso: martes 10.

| Día | Fecha | Qué se hace | Quién | Comprobación de cierre |
|---|---|---|---|---|
| **L-2** | dom 1 nov | Congelación de código y contenido. Última pasada de G-20 (30/30 verde) y G-07 (0 respuestas 403). Los 6 casos de archivo con ficha completa | `estratega-growth-seo`, `[FRONT]` | Nada se toca desde ahora salvo un fallo bloqueante |
| **L-1** | lun 2 nov | Correo «mañana abrimos» a toda la lista. Los 5 creadores reciben su caso exclusivo con **12 h de ventaja**. Aviso a los 150 de la beta. Vídeo de reglas publicado en YouTube | `creador-social`, `periodista-contenidos` | Correo entregado sin rebotes; vídeo indexable |
| **L** | **mar 3 nov** | Las 36 URL vivas. Sitemap enviado a Search Console y a Bing. `llms.txt` publicado. Artículo de lanzamiento. **Vídeo 1**. Entrada en r/murdoku y r/juegos. Correo de apertura. Canal de WhatsApp abierto. Primera captura en Wayback Machine | Todos | 36/36 devuelven 200 con enunciado por `curl`; sitemap aceptado; ≥ 10 URL ya rastreadas al final del día |
| **L+1** | mié 4 nov | Respuesta a **todos** los comentarios de Reddit en < 4 h. Presentación en 3 grupos de Facebook de pasatiempos. Primer informe de rastreo | `creador-social`, fundador | Ninguna respuesta sin contestar |
| **L+2** | jue 5 nov | **Vídeo 2**. Envío a **dailydle.org** (agregador de juegos diarios: solo exige la URL viva; el resto de listas espera a la semana 12, que es cuando ya hay datos propios que enseñar) | `creador-social` | Enviado |
| **L+3** | vie 6 nov | **Presentación de la solicitud OEPM** (clases 9 y 41, ≈250 €). Es el día del viernes «De disparate»: primer contenido para público familiar | **fundador** + `experto-legal` | Justificante de presentación guardado |
| **L+4** | sáb 7 nov | **Vídeo 3** (el sábado «El difícil»). Compartir resultados en X y Bluesky | `creador-social` | — |
| **L+5** | dom 8 nov | El domingo «El XL». Silencio de publicación: solo comunidad | — | — |
| **L+6** | lun 9 nov | **Informe de la semana 1**: indexación (objetivo 36/36 enviadas, ≥ 25 indexadas), sesiones, D1, activación desde landing, casos completados, errores. Decisión escrita de qué se corrige en la semana 10 | `estratega-growth-seo` + `analista-datos` | Informe publicado y tres correcciones priorizadas |

Lo que **no** se hace en la semana de lanzamiento, a propósito: nota de prensa (va en la 10, cuando el producto ha sobrevivido una semana y la OEPM está presentada), los 15 creadores restantes, Product Hunt, y cualquier página nueva. Una semana de lanzamiento es para vigilar y responder, no para publicar más.

---

## 13. Objetivos por semana: usuarios y tráfico orgánico

**Estos números son objetivos fijados antes del dato, no previsiones.** No hay serie histórica de este dominio ni de este producto, así que la función de la tabla es tener un umbral contra el que decidir, no acertar. Se revisan en la semana 13 con datos reales y se ajustan **una sola vez**.

Definiciones: **MAU** = navegadores únicos que abren al menos un caso en 30 días. **WAU** = ídem en 7 días. **Orgánicas** = sesiones desde buscador, sin marca; las que llegan de asistentes de IA se cuentan aparte y en gran medida como directo (35-70 % llegan sin *referrer*).

| Sem | Fecha | Sesiones | de ellas orgánicas | WAU | **MAU** | Correos | KW con impresiones | Hito |
|---:|---|---:|---:|---:|---:|---:|---:|---|
| 2-8 | pre-lanzamiento | — | — | — | — | **400** en lista | 5-20 (`/` anticipada) | Dominio con 8 semanas de rastreo |
| **9** | 2-8 nov | 1.400 | 100 | 600 | 600 | 500 | 30 | **36/36 en Search Console** |
| 10 | 9-15 nov | 1.100 | 250 | 550 | 850 | 650 | 45 | **1.000 sesiones acum. · D1 ≥ 35 %** |
| 11 | 16-22 nov | 1.300 | 450 | 600 | 950 | 750 | 55 | Activación desde landing ≥ 25 % |
| 12 | 23-29 nov | 1.600 | 700 | 700 | **1.000** | 850 | **60** | — |
| **13** | 30 nov-6 dic | 2.000 | 1.000 | 850 | **1.250** | 1.000 | 75 | **Día 30: objetivo 1.000 MAU cumplido** · panel GEO base |
| 14 | 7-13 dic | 2.600 | 1.500 | 1.000 | 1.500 | 1.150 | 90 | **3.000 sesiones orgánicas / 30 días** |
| 15 | 14-20 dic | 3.200 | 2.000 | 1.100 | 1.700 | 1.300 | 100 | 300 correos de `PDF-CEBO` |
| 16 | 21-27 dic | 3.400 | 2.200 | 1.200 | 2.000 | 1.400 | 110 | Panel GEO ≥ 3/25 |
| 17 | 28 dic-3 ene | 3.400 | 2.200 | 1.200 | 2.200 | 1.450 | 115 | Tregua. **Sin caída del caso diario** |
| 18 | 4-10 ene | 5.000 | 3.500 | 1.700 | 2.900 | 1.700 | 140 | Expediente sin errata |
| 19 | 11-17 ene | 6.300 | 4.500 | 2.000 | 3.400 | 1.900 | 160 | `murdle online` en top 10 |
| 20 | 18-24 ene | 7.400 | 5.400 | 2.300 | 3.900 | 2.100 | 180 | Sesiones MX+AR ≥ 10 % |
| 21 | 25-31 ene | 8.500 | 6.300 | 2.700 | 4.500 | 2.300 | 200 | 250 packs o 1 piloto B2B |
| **22** | 1-7 feb | 9.500 | 7.000 | 3.000 | **5.000** | 2.500 | 220 | **Día 90: 5.000 MAU · panel 8/25 en 2/4** |

**Lo que hay detrás de la forma de la curva, y es discutible pero está escrito:**
- La semana 9 es un pico artificial (lista de espera + beta + creadores) que **cae** en la 10. Confundir ese pico con tracción es el error clásico. La primera semana honesta es la 11.
- Diciembre tiene dos agujeros (24-25 y 31-1) y por eso las semanas 16-17 están casi planas a propósito.
- **Enero es el mejor mes del año para esta categoría**: propósitos, tiempo libre, regalos de libros de pasatiempos y hábito nuevo. De ahí el salto de la semana 18. Si enero no despega, el problema no es estacional: es el producto.
- La dependencia de marca ajena baja del **75 % el día 1 al 50 % en el mes 3** (árbol §8.2). Se mide cada mes con la misma fórmula y se publica en el informe.

**Métrica de coste:** coste por usuario activo a 7 días, por canal. Con presupuesto de medios cero, el coste es tiempo; se reporta en horas por cada 100 usuarios activos, y ese número decide qué canal se dobla en la semana 13.

**Semáforo de decisión de la semana 13 (día 30):** si MAU < 600 y la tasa de finalización del primer caso < 45 %, el problema es de producto y se para el calendario editorial dos semanas para arreglarlo. Si MAU < 600 pero la finalización es > 60 %, el problema es de distribución y se dobla la apuesta en vídeo y creadores. Escrito antes del dato para no racionalizar después.

---

## 14. Panel GEO mensual

Las **25 preguntas ★** de `analisis-geo.md` §2, consultadas el **día 1 de cada mes** en ChatGPT (con búsqueda, sesión sin memoria), Google AI Overviews + AI Mode (ventana privada, `gl=es`/`hl=es` y segunda pasada `gl=mx`), Perplexity y Gemini. Dos países: España y México. Hoja: `docs/seo/geo-seguimiento.csv`, con las 14 columnas ya definidas (`fecha`, `motor`, `pais`, `pregunta_id`, `aparece_sospechario`, `posicion_cita`, `url_citada`, `frase_exacta`, `competidores_citados`, `dato_correcto`, `dice_independiente`, `hay_bloque_ia`, `captura`).

| Panel | Fecha | Objetivo (fijado antes del dato) |
|---|---|---|
| **Base** | 1 de diciembre (semana 13) | Rastreados por los 4 motores, **0 respuestas 403** a bots de IA, panel registrado. Puede ser **0/25** y eso no es un fracaso |
| Mes 2 | 1 de enero (semana 17) | ≥ 3/25 en ≥ 1 motor. Tasa de error 0 |
| Mes 3 | 1 de febrero (semana 22) | **8/25 en 2 de 4 motores**, «dice independiente» en el 100 % de las citas de la familia Murdoku, 3 menciones ganadas |
| Mes 6 | 1 de mayo | 15/25 en 3 de 4, una lista «games like» en inglés y otra en español, referidos desde asistentes ≥ 3 % de las sesiones nuevas, `sospechario` ≥ 500 impresiones/mes en GSC |

**Restricción honesta del panel:** ningún agente puede consultar ChatGPT, Gemini o Perplexity con sesión limpia. Las 200 consultas (25 × 4 × 2) las hace **el fundador o una persona**, con un guion y una plantilla que prepara esta área, en **≈ 3 horas al mes**. Si esas 3 horas no están disponibles, el panel se reduce a un **núcleo de 10 preguntas × 2 motores × 1 país (≈ 45 minutos)** y se declara en el informe que el panel es parcial. Lo que no se hace es inventar el resultado ni «estimarlo».

**Qué se hace con el dato** (regla ya fijada en el árbol §4.4): pregunta sin cita dos meses seguidos → se revisa la página contra los requisitos 7 y 9 y se busca una mención ganada para esa pregunta concreta. Cita con dato falso → se corrige la respuesta directa y se registra la fecha. Cita que no dice «independiente» → aviso a `experto-legal`. Competidor citado donde no estamos → se anota **qué formato tiene su página** y se replica el formato, nunca el texto.

**Señales automáticas semanales** (G-53), que no dependen de nadie: informe de IA generativa de Search Console, canal de referidos de asistentes en PostHog (`chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`, `copilot.microsoft.com`, `bing.com/chat`), y recuento de rastreadores en logs con **alerta si un agente lleva 14 días a cero o devuelve 403**.

---

## 15. Plan de Argentina, mes 4 (semanas 14-17, diciembre de 2026)

**Lo primero, para que no haya malentendido: en el mes 4 no se abre `/ar/`.** El criterio del árbol §5.1 es que una variante `hreflang` se abre cuando hay **texto distinto que servir**, no cuando hay demanda distinta. Lo que se hace en el mes 4 es (a) preparar el único texto realmente distinto que existe —el voseo— y (b) trabajar Argentina con las cinco palancas que **no** son URL.

**Por qué Argentina y por qué ahora.** La ola de marca ya llegó allí (`murdoku` 9.900, `murdoku online` 2.900 / KD 27, `murdoku pdf` 1.300); `juegos diarios` tiene **KD 20**, la entrada genérica más barata de las tres bases medidas; `wordle espanol` mueve 5.400 en un país de ~46 M frente a 1.000 en uno de ~130 M, es decir, el hábito de juego diario ya está instalado; y el coste marginal es casi nulo porque las páginas ya existen.

### 15.1 Las cinco acciones del mes 4 (G-54)

| # | Acción | Semana | Quién | Métrica |
|---:|---|---|---|---|
| 1 | **Texto voseado completo** (botones, microcopy, correo diario, especial «vos sos sospechoso»), revisado por **dos hablantes argentinos** reclutados en la beta. Se guarda listo, no se publica | 14-16 | `periodista-contenidos` + `[PROD]` | Fichero revisado y firmado por 2 personas |
| 2 | **Reescritura de `/juegos-diarios` pensando en Argentina** (KD 20 allí frente a 37 en España) y de `/juegos-de-detectives` y `/juegos-de-misterio` con «celular» y «en línea» como sinónimos en el cuerpo | 14 | `periodista-contenidos` | Posición de `juegos diarios` en `ar` medida en la semana 17 |
| 3 | **Creadores argentinos**: @guilletokman + 2 más de la cuota AR, con caso exclusivo y enlace medible | 15 | `creador-social` | ≥ 1 publicación |
| 4 | **r/argentina** y grupos argentinos de pasatiempos, con la cuenta ya calentada | 16 (y 20 según el calendario editorial) | `creador-social` + fundador | ≥ 1 hilo sin retirar |
| 5 | **Comunicar el cambio de caso a medianoche local**: es un detalle que ningún tercero tiene y en Argentina se nota (4-5 h de diferencia). Va literal en `/juegos-como-murdoku/online` y en el correo | 14 | `periodista-contenidos` | Frase publicada |

### 15.2 Realidad del calendario argentino, que cambia dos cosas

- **Diciembre en Argentina es fin de curso y comienzo del verano.** El `PDF-AULA` y todo lo escolar **no** se lanza allí en diciembre: va en **febrero-marzo**, que es el inicio de clases. El calendario escolar latinoamericano no coincide con el español y esto ya está avisado en el árbol §9.1 consulta 12.
- **Enero es mes de vacaciones con mucho móvil**: es buen mes para vídeo y para el juego diario, y mal mes para prensa y para B2B.

### 15.3 Compuerta para abrir `/ar/` (no antes del mes 5)

Se abre `/ar/` (`es-AR`) **solo si se cumplen las dos**:
1. El texto voseado existe, está revisado por dos hablantes y cubre botones, microcopy y correo (acción 1).
2. Argentina supera el **15 % de las sesiones orgánicas durante cuatro semanas seguidas**.

Si se abre: `hreflang` recíproco completo, **sin redirección automática por IP** (solo un aviso con enlace), y precios en moneda local si existe Premium. Si no se cumple, se mantiene una sola variante y se revisa en el mes 6. **México va después**, y solo adelanta a Argentina si la consulta 1 de la §9.1 revela que su cabecera sí tiene volumen (hoy `murdoku online` vale 2.400 en México pero `murdoku` no devuelve dato, y esa anomalía está sin resolver).

**Advertencia que se repite aquí porque es la que más caro sale olvidar:** la ventana del fenómeno es de 6-12 meses. Entrar en LatAm persiguiendo `murdoku` en el mes 8 puede ser llegar a una ola que ya rompió. **La parte del plan latinoamericano que no caduca es la de categoría** —`enigmas` (14.800 MX / 9.900 AR), `acertijos` (22.200 MX / 5.400 AR), `juegos de misterio`, `juegos diarios`—, y en LatAm esa parte es proporcionalmente mucho mayor que en España.

---

## 16. Compuertas

| id | Compuerta | Se comprueba | Criterio para pasar | Si no pasa |
|---|---|---|---|---|
| **C-G1** | Luz verde legal sobre marca ajena | Semana 3 | `experto-legal` aprueba por escrito los 8 puntos y entrega `/legal/marcas` y la frase de no afiliación | No se escriben las 9 landings Murdoku. Se lanza con 21 páginas y el 100 % de la demanda del día 1 pasa a ser de categoría propia (8.540 en vez de 34.680). **Es el mayor riesgo del plan** |
| **C-G2** | Producto jugable en `/` anticipada | Semana 2 | Un caso se juega de verdad en un móvil real | Plan B de G-09: un caso validado a mano y rejilla estática |
| **C-G3** | Banco de contenido listo | Semana 6 | 12 vídeos montados + 12 casos de landing + 20 casos de creador + 30 textos escritos | La beta se retrasa una semana y el lanzamiento pasa al 10 de noviembre |
| **C-G4** | **Ir / no ir al lanzamiento** | Viernes 30 de octubre | (a) 30/30 páginas en verde en G-20; (b) **cero** casos con incidencia lógica en la beta; (c) finalización del primer caso ≥ 50 %; (d) D7 de la beta ≥ 25 %; (e) 7 días seguidos de caso diario y correo diario sin fallo; (f) 0 respuestas 403 a los 11 agentes de IA; (g) Lighthouse móvil ≥ 90 en las 30 | Se retrasa al martes 10 de noviembre. Si el 10 tampoco, se replantea el trimestre: diciembre no es fecha de lanzamiento |
| **C-G5** | OEPM antes de prensa | Viernes 6 de noviembre | Solicitud presentada, justificante guardado | **No se envía la nota de prensa.** Sin excepciones |
| **C-G6** | Catálogo para `/vistazo`, `/acertijos`, `/enigmas` | Semanas 11 y 20 | Medida C0-5 del motor: ≥ 200 vistazos distintos | Las páginas no se publican y el vistazo sigue siendo semanal |
| **C-G7** | Apertura de `/ar/` | Mes 5-6 | §15.3 | Una sola variante y revisión en el mes 6 |
| **C-G8** | Promoción de técnicas a URL propia | Mes 4 | ≥ 50 impresiones/mes en el ancla o cita en un motor generativo, + 300 palabras propias + caso jugable + dato de TR. Máximo 5 a la vez | Se quedan en anclas de `/tecnicas`. **Nunca se publican las 26 de golpe** |

---

## 17. Qué necesita esta área de otras áreas, y cuándo

| Qué | De quién | Para cuándo | Si no llega |
|---|---|---|---|
| Dominio y nombre cerrados | `[PROD]` | **Semana 1** | Se paran G-05, G-12 y todos los títulos y metadatos |
| 20 vistazos 3×3 validados + tablero mínimo jugable | `[MOTOR]`, `[FRONT]` | **Semana 2** | Plan B de G-09 |
| Luz verde sobre los 8 puntos de marca ajena + `/legal/marcas` | `[LEGAL]` | **Semana 3** | C-G1 |
| Build jugable con grabación de pantalla posible | `[FRONT]` | **Semana 5** | Los 12 vídeos se hacen con mock y pierden credibilidad |
| **12 casos de landing exclusivos** (no entran en el archivo) | `[MOTOR]`, `[PUZZLES]` | Semana 5 | Ocho landings con el mismo contenido principal: ninguna posiciona |
| 20 casos de creador con certificado | `[MOTOR]`, `[PUZZLES]` | Semana 7 | No hay seeding con caso exclusivo |
| Contadores públicos en HTML con fecha de cálculo | `[DATOS]`, `[BACK]` | **Semana 8** | Sin dato propio no hay prensa, ni GEO, ni artículo mensual |
| Eventos de PostHog y UTM implementados | `[BACK]` | **Semana 7** (probados en la beta) | Se mide mal la semana 9 y no hay segunda semana 9 |
| `robots.txt`, sitemaps, `llms.txt`, schema con test en CI, Bing y GSC | `[FRONT]` | **Día 1** | No se lanza |
| Caso diario publicándose sin fallo desde el 19 de octubre | `[MOTOR]`, `[BACK]` | Semana 7 | No hay archivo de 7 días el día L y se caen 8 de las 36 URL |
| Compuerta 0 del motor (interrogatorio) | `[MOTOR]` | Semana 6 | `/juegos-de-detectives` se escribe con el miércoles clásico y se reescribe en la semana 14 |
| Modo Expediente vivo | `[PROD]` | Semana 18 | Se caen `/juegos-como-murdle`, `/reglas/expediente` y el racimo Murdle (5.660 de demanda) |
| Prueba de nombres con 5 personas | `[PROD]` + fundador | Semana 5 | `/tecnicas` y `/escalafon` no se publican |

---

## 18. Qué necesito del fundador, y cuántas horas

**Total del área: ≈ 113 horas en 22 semanas (media de 5,1 h/semana).** El fundador es el recurso escaso (`supuestos.md` §5) y además tiene otras cinco áreas encima. Por eso abajo hay dos columnas: lo completo y el **mínimo irreducible**, que es lo que **solo él puede hacer** y sin lo cual el plan no existe.

| Sem | Horas | Qué hace exactamente | Mínimo irreducible |
|---:|---:|---|---:|
| 1 | 6 | Las 3 comprobaciones de SERP en Google España desde su navegador (códigos 36, 38 y 52); abrir murdoku.com, cluedoku.app y murdoku.fans y anotar qué hacen de verdad; comprar unidades de Semrush; comprobar la regla de bots de IA de Cloudflare/Vercel | 4 |
| 2 | 5 | Verificar Search Console y Bing (registros DNS); crear los 8 perfiles sociales; probar `/` anticipada en su móvil; primera tanda de contactos de prensa | 3,5 |
| 3 | 4 | Revisar los 13 briefs; aprobar la lista de creadores; empezar a calentar la cuenta de Reddit (0,5 h/sem hasta la 8) | 2 |
| 4 | 5 | **Contactos de prensa con nombre y persona** (2 h, nadie más puede); revisar la nota de prensa; grabar los vídeos 1-4 | 3 |
| 5 | 4 | Prueba de nombres con 5 personas reales; revisión por muestreo de 8 de las 30 páginas | 2,5 |
| 6 | 6 | Acompañar la grabación de los 8 vídeos restantes; reclutar la beta; aportar biografía y foto para el kit de prensa | 3,5 |
| 7 | 8 | **Beta**: dar la bienvenida, responder a incidencias, 3 entrevistas de 30 min | 6 |
| 8 | 8 | Beta 2ª semana, 3 entrevistas más, decisión de la compuerta C-G4, preparar la solicitud OEPM | 6 |
| **9** | **10** | **Semana de lanzamiento**: publicar en Reddit con su cuenta, responder a todos los comentarios en < 4 h, correos, presentar la OEPM el viernes 6 | 8 |
| 10 | 6 | **Enviar la nota de prensa personalizada, uno a uno** (nadie más puede firmarla) y seguimiento | 4 |
| 11-13 | 4/sem | Comunidad, revisión semanal, Hacker News/Product Hunt en la 13 (1 h respondiendo en directo) | 2/sem |
| 14-22 | 3/sem | Comunidad, revisión, decisiones | 1,5/sem |
| Día 1 de cada mes (×4) | 3 c/u | **Panel GEO**: 200 consultas en ChatGPT, AI Mode, Perplexity y Gemini con sesión limpia | 0,75 c/u (panel reducido) |

**Las siete cosas que ningún agente puede hacer por él, en orden de importancia:**
1. **Las tres comprobaciones de SERP en España** (semana 1). Deciden si toda la §4 del árbol es obligatoria o recomendable.
2. **Los contactos de prensa con nombre de persona** (semana 4). Enviar a `redaccion@` tiene una tasa de respuesta cercana a cero.
3. **Las entrevistas de la beta** (semanas 7-8). Los datos dicen qué pasó; solo una conversación dice por qué.
4. **Presentar la solicitud OEPM** (viernes 6 de noviembre). Bloquea la nota de prensa.
5. **Responder en Reddit con una cuenta real y con historial** (desde la semana 2). No se delega y no se improvisa.
6. **El panel GEO** (día 1 de cada mes). Requiere sesiones humanas en cuatro asistentes.
7. **Firmar la compuerta C-G4** (30 de octubre). La decisión de lanzar o no lanzar es suya.

**Cuentas que hay que crear (semana 2, 1,5 h):** TikTok, Instagram, YouTube, X, Bluesky, Reddit (o usar la personal si ya tiene historial, que es mejor), canal de WhatsApp, Threads. Todas con la **misma bio literal** —la frase de entidad— porque la consistencia de entidad es uno de los requisitos GEO y cuesta cero.

**Gastos que hay que aprobar:** unidades de Semrush (importe según plan), solicitud OEPM ≈ 250 €, dominio ≈ 40 €. **Presupuesto de medios pagados: cero.** No hay un solo dato de CPC en el repositorio (`arbol-web-final.md` §9.3): ninguna conversación sobre Google Ads puede sostenerse hoy, y además exigiría criterio previo por escrito de `experto-legal` por el uso de marca ajena.

---

## 19. Riesgos del área y lo que este plan no cubre

| Riesgo | Señal temprana | Respuesta ya decidida |
|---|---|---|
| **No llega la luz verde legal** (C-G1) | Semana 3 sin respuesta de `experto-legal` | Se lanza con 21 páginas y se reordena todo el plan hacia categoría propia. Se avisa al fundador en la semana 3, no en la 8 |
| **Un tercero anuncia app oficial de Murdoku en español** | Pies de vídeo de @cristinini; vigilancia G-55 | Se congela la inversión en `/juegos-como-murdoku/*` (se mantiene, no se amplía) y se adelantan `/acertijos`, `/enigmas` y `/juegos-para-pensar` un trimestre |
| **`murdoku` cae más del 30 % interanual** | Semrush, revisión mensual | Misma respuesta |
| **El caso diario falla un día** | Alerta del motor | Es lo único que rompe la promesa del producto y de la newsletter a la vez. Se publica en `/erratas` el mismo día: el registro público de erratas es lo que convierte un fallo en una prueba de honestidad |
| **Ocho landings con el mismo contenido principal** | QA G-20 | Banco de 12 casos de landing (§4). Si el motor no lo entrega, se publican 5 landings Murdoku en vez de 9 y las otras 4 llegan en la semana 12 |
| **La beta mide simpatía** | Más del 20 % del entorno del fundador | Cuotas obligatorias de LatAm (20) y de gente que no conoce Murdoku (15) |
| **El calendario editorial se come la respuesta a la comunidad** | Comentarios sin contestar en Reddit | La comunidad va antes que publicar: si hay que elegir, se cae la página nueva, no la respuesta |
| **Baneo en Reddit** | — | Cuenta calentada 7 semanas y lectura previa de las reglas de los 7 subreddits (G-01 comprobación 9) |

**Lo que este plan no cubre y hay que decirlo en voz alta:**
- **Cero datos de CPC**: nada de medios pagados, ni siquiera una prueba de 100 €.
- **Cero tendencia a 12 meses como serie**: solo hay etiquetas cualitativas heredadas. No se puede afirmar que la moda está creciendo o cayendo con precisión.
- **La familia de dos jugadores es casi entera una hipótesis** (una sola palabra medida, KD 69) y sostiene dos mecánicas firma. Está en la consulta 3 de la cola de medición.
- **La atribución de los asistentes de IA es estructuralmente mala**: entre el 35 y el 70 % llega sin *referrer*. El mejor indicador seguirá siendo la demanda de marca en Search Console, y eso tarda meses en existir.
- **No hay plan de app nativa** en estas 22 semanas, y es correcto: `analisis-estrategico.md` §6 la condiciona a D30 > 25 %.

---

*Cambios a este documento: los registra `estratega-growth-seo` con fecha y motivo. Las decisiones que se derivan de él y que conviene llevar a `docs/decisiones.md` son cinco: (1) día L = martes 3 de noviembre y ventana de retraso al 10; (2) la página anticipada se publica en `/` y no en `/proximamente`; (3) semana 17 de tregua y corrimiento del calendario editorial S9-S13; (4) banco de 12 casos de landing exclusivos que no entran en el archivo diario; (5) la solicitud OEPM se presenta el día hábil anterior al envío de la nota de prensa, no después.*
