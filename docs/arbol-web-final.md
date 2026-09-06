# Árbol web definitivo para el lanzamiento — Sospechario

Versión 2.0 (definitiva para el lanzamiento). Sustituye a `docs/arbol-web.md` (v1, 5/9/2026).
Fecha: 6 de septiembre de 2026. Responsable: `estratega-growth-seo`.
Redacción de landings: `periodista-contenidos`. Implementación: `desarrollador-frontend`. Validación de marcas: `experto-legal`. Datos propios: `analista-datos`.

**Fuentes de dato (todas medidas, ninguna estimada):** `docs/seo/keywords-espana.csv` (116 palabras medidas en Semrush **es**, 5/9/2026), `docs/seo/keywords-latam.csv` (18 **mx** + 18 **ar**), `docs/seo/investigacion-espana.md`, `docs/seo/investigacion-latam.md`, `docs/seo/analisis-geo.md` (60 consultas, 57 preguntas conversacionales, 25 de panel).
**Fuentes de producto:** `docs/propuesta-jugabilidad.md` (Escena, semana con carácter, tres firmas), `docs/propuesta-jugabilidad-expediente.md` (Expediente, B-jueves, escalafón de dos apartados), `docs/catalogo-productos.md` v1.1.
**Fuente legal:** `docs/legal/anterioridades-sospechario.md` (fórmula de uso de marcas ajenas y estrategia de registro escalonado).
**Tabla de destino:** `docs/seo/mapa-keywords-urls.csv` (190 filas: 152 de España, 19 de México y 19 de Argentina; una fila por palabra clave y país, con URL destino, tipo de página, prioridad y fase).

**Cómo se lee `mapa-keywords-urls.csv`.** `prioridad` y `fase` no son lo mismo y por eso son dos columnas: `prioridad` dice **cuánto importa esa palabra** (`P0` · `P1` · `P2` · `solo-faq`, se responde en una FAQ y no tiene página · `no-atacar` · `bloqueada-legal` · `pendiente-medir` · `B2B-no-SEO`) y `fase` dice **cuándo existe la página de destino** (`lanzamiento` · `mes-2-3` · `mes-4-6` · `mes-7-12` · `bloqueada` · `no-aplica`). Una palabra puede ser P0 y tener su página en `mes-2-3` (es el caso de todo el racimo Murdle) o ser P2 sobre una página que ya existe el día 1. **Cada palabra se asigna a una sola URL**: sumar la columna `volumen` por URL da el objetivo de esa página sin doble conteo. `volumen`/`kd` con `sin_medir` o `sin dato` **no son ceros**: son huecos, y están en la cola de la §9.

> **Semrush sin unidades de API.** Este documento no consulta Semrush: se construye enteramente con los datos guardados del 5/9/2026. Todo lo pendiente de medir está en la §9, ordenado por coste/información. Ninguna cifra de este árbol es inventada; lo que no está medido lo dice.

> **Aviso D-006 (registro de marca), comprobado hoy.** Ninguno de los cinco disparadores se ha cumplido: el producto no ha lanzado, no hay vídeo con +100.000 visualizaciones, no hay mención en prensa, no hay conversación B2B ni editorial abierta y ningún tercero usa un nombre parecido. **No procede registrar todavía.** Pero este plan **programa dos disparadores**: la primera nota de prensa (§10, semana 2) y la publicación de `/para-medios` con su primer contacto comercial (§10, mes 2). El expediente de la OEPM (clases 9 y 41, ≈250 €, y valorar la 16 si el libro es línea real) tiene que estar **redactado y presupuestado antes de la semana 2**, no después. `/para-medios` no se publica hasta que ese expediente exista.

---

## 1. Resumen ejecutivo

### 1.1 Cuántas URL indexables el día 1

**36 URL indexables el día del lanzamiento**, de las cuales 6 son casos de archivo generados por el propio motor. Es decir, **30 páginas que hay que escribir**.

| Bloque | URL P0 | Detalle |
|---|---:|---|
| Raíz jugable y archivo | 9 | `/`, `/caso/AAAA-MM-DD` × 6 (D+1 a D+7; el de hoy vive solo en `/`), `/archivo`, `/archivo/AAAA-MM` |
| Aprender y confianza de producto | 5 | `/como-jugar`, `/reglas`, `/reglas/escena`, `/una-sola-solucion`, `/erratas` |
| Marca ajena (Murdoku) | 9 | hub + `/online`, `/en-espanol`, `/gratis`, `/sin-descargar`, `/como-se-juega`, `/para-imprimir`, `/para-ninos`, `/faciles` |
| Categoría propia e imprimibles | 5 | `/juegos-diarios`, `/juegos-de-detectives`, `/juegos-de-logica`, `/para-imprimir`, `/packs` (catálogo con el cebo gratuito; la venta llega en el mes 3) |
| Marca, negocio y legal | 8 | `/sobre-nosotros`, `/premium` (lista de espera), `/contacto`, `/legal/marcas` + 4 legales |
| **Total indexable P0** | **36** | |
| Fuera del índice el día 1 | 8 | `/entrar`, `/cuenta/*` (4), `/buscar`, `/r/[id]`, `/api/*` |
| Ficheros de sistema | 8 | `robots.txt`, `sitemap.xml` + 3 hijos, `llms.txt`, `feed.xml`, `manifest.webmanifest` |

Mes 2-3 (P1) añade **32 URL** (incluidas las plantillas de `/blog/[slug]`, `/autores/[slug]` y `/packs/[slug]`); mes 4+ (P2), **15 más**. Total del árbol: **83 URL indexables planificadas en 12 meses**, más el archivo diario, que crece a razón de 1 caso indexable al día **solo si pasa la regla anti-contenido-fino** (§6.3).

### 1.2 Qué demanda medida ataca el día 1

Suma de volúmenes mensuales medidos, asignados a una sola URL cada uno (sin doble conteo). Sumar volúmenes **exagera el tráfico real**: hay solapamiento entre variantes y el volumen no son clics. Sirve para ordenar, no para prometer visitas.

| Familia | ES día 1 | ES mes 2-3 (acumulado) | MX medido | AR medido |
|---|---:|---:|---:|---:|
| Marca ajena Murdoku (sin la cabecera) | **26.140** | 26.150 | 5.000 | 4.460 |
| Marca ajena Murdle | 0 | **5.660** | 10 | sin dato |
| Categoría propia (lógica, diarios, detectives, misterio, imprimibles) | **8.300** | 10.520 | 5.580 | 5.460 |
| Acertijos y enigmas (puerta LatAm) | 0 | **12.780** | 37.390 | 15.440 |
| Niños y aula | 0 | **2.800** | 210 | 170 |
| Soluciones y archivo razonado | 240 | **5.060** | sin dato | sin dato |
| **Total atacado** | **34.680** | **62.970** | **9.500 direccionable** | **8.900 direccionable** |
| **Dependencia de marca ajena** | **75 %** | **50 %** | — | — |

Las columnas de MX y AR suman lo medido por familia; el «direccionable» de la última fila es el del `investigacion-latam.md` §2, que **excluye a propósito** la intención de listado de `acertijos` y `enigmas` y el navegacional de `pasatiempos`, porque capturarla exige un catálogo de vistazos que no existe todavía.

Además, el hub `/juegos-como-murdoku` recoge como cola la consulta navegacional `murdoku` (**33.100 ES / 9.900 AR / sin dato MX**), que **no se persigue como objetivo**: va al libro y a la web oficial.

Fuera de este cómputo, y a propósito: `pasatiempos` + medio (79.800 ES) se atiende con `/para-medios` y no con SEO; `wordle espanol` (110.000) y `la palabra del dia juego` (12.100) no se atacan en el año 1; `acertijos de pensamiento lateral` (260 / KD 14) se descarta por encaje —el pensamiento lateral no tiene solución única deductiva y contradice la regla 3 del proyecto—; `murdoku libro pdf` (140) y `donde comprar murdoku` son intención de libro ajeno.

### 1.3 Las 10 oportunidades mayores

Criterio: **volumen × facilidad × encaje con el producto final**, sumando los tres países medidos. La columna «producto» es lo que va dentro de la página, que es lo que la separa de una doorway.

| # | Oportunidad | Volumen medido | KD | URL | Producto que la sirve |
|---:|---|---:|---|---|---|
| 1 | `murdoku online` y variantes de «jugar» | **15.200** (ES 9.900 · AR 2.900 · MX 2.400) | 27-30 | `/juegos-como-murdoku/online` | Escena · lunes «El corto», 4×4, sobres por progreso, abre con 3 pistas |
| 2 | `juegos diarios` + `gratis` | **7.700** (ES 4.200 · MX 2.400 · AR 2.400 con **KD 20**) | 20-37 | `/juegos-diarios` | La semana con carácter: siete días, siete reglas, y el caso de hoy |
| 3 | `murdoku pdf` / `para imprimir` | **5.830** (ES 2.930 · MX 1.600 · AR 1.300) | 0-34 | `/juegos-como-murdoku/para-imprimir` → `/packs` | **Expediente de una página**: A4 fotocopiable con solución razonada del certificado |
| 4 | `murdoku gratis` (tres variantes) | **5.400** ES | 25-41 | `/juegos-como-murdoku/gratis` | El caso de hoy sin registro + compromiso publicado de anuncios |
| 5 | `murdoku en español` (seis variantes) | **4.590** (ES 3.330 · MX 1.000 · AR 260) | 0-33 | `/juegos-como-murdoku/en-espanol` | Escrito en español, no traducido: nombres, humor y escenarios propios |
| 6 | `juegos de logica` y su cola | **4.580** (ES 2.780 · AR 880 · MX 170 + 750 de cola barata) | 8-27 | `/juegos-de-logica` + `/escalafon` | El escalafón: el juego **nombra la técnica** que el caso exigía y la acredita |
| 7 | `acertijos para ninos` | **2.400** ES | **22** | `/para-profesores` | Viernes «De disparate» (sin fallecidos) + `PDF-AULA` + expediente invertido |
| 8 | `descargar murdoku gratis` | **1.700** ES | 0-33 | `/juegos-como-murdoku/sin-descargar` | PWA instalable en dos toques frente a una app no oficial de 2,36/5 |
| 9 | `acertijos` (hub LatAm) | **35.700** (MX 22.200 · ES 8.100 · AR 5.400) | 41 ES | `/acertijos` | **Condicionada**: solo con vistazos propios jugables y con respuesta razonada |
| 10 | `enigmas` (hub LatAm) | **26.000** (MX 14.800 · AR 9.900 · ES 1.300) | 32 ES | `/enigmas` | Ídem. En España es una página menor; en México y Argentina es de primer orden |

Las dos últimas van al final **a pesar de tener el mayor volumen bruto** porque su intención es de listado, no de juego: capturarlas exige un catálogo de vistazos propios que no existe el día 1 (medida C0-5 del motor: ≥200 casos distintos).

### 1.4 Las 5 más baratas (KD 0-15)

| # | Paquete | Volumen a KD ≤ 15 | URL | Por qué es casi gratis |
|---:|---|---:|---|---|
| 1 | `murdoku para ninos` 210/**0** + `murdoku ninos` 140/0 + `murdoku edad recomendada` 70/0 + `murdoku para que edad es` 70/0 | **490** | `/juegos-como-murdoku/para-ninos` | Demanda **nueva**, KD 0 en las cuatro, y por primera vez hay producto exacto: el viernes sin fallecidos con la misma lógica |
| 2 | `juegos de ingenio` 480/**15** + `murdoku facil` 170/**0** + `juegos de logica faciles` 20/0 | **670** | `/vistazo` + `/juegos-como-murdoku/faciles` | El vistazo 3×3 de 2 minutos existe ya como puerta de entrada; en v1 estas páginas no tenían contenido propio |
| 3 | `murdoku como jugar` 170/**0** + `reglas murdoku` 140/0 + `murdoku instrucciones` 40/0 | **350** (+320 de `como se juega al murdoku`, KD 30) | `/juegos-como-murdoku/como-se-juega` | Coste marginal cero sobre una página que se escribe de todas formas, y es **la página GEO del sitio** |
| 4 | `murdle online` 170/**0** + `murdle espanol online` 70/0 + `murdle espanol` 70/20 + `murdle en espanol` 20/0 | **330** | `/juegos-como-murdle` | El único hueco del mercado donde **no hay absolutamente nadie**. Las cuatro pasaron de cero a su máximo en el último mes |
| 5 | `juegos de logica y razonamiento` 210/**12** + `juegos de logica para ninos` 170/**8** + `pasatiempos para ninos` 90/**13** + `juegos de logica para imprimir` 110/**10** | **580** | `/escalafon`, `/para-profesores`, `/para-imprimir` | La familia con la mejor relación volumen/KD del conjunto y la única que sobrevive si la moda del libro ajeno se enfría |

Mención aparte: **`jugar murdoku online` 480 / KD 13** es la palabra con volumen más barata de todo el racimo. No merece página propia (canibalizaría `/online`): es el **anchor text** con el que se entra a la SERP desde el enlazado interno y desde los medios ganados mientras `murdoku online` (KD 29) madura.

### 1.5 Qué cambia respecto al árbol v1, y por qué

Ocho cambios. Los siete primeros los provocan las mecánicas finales; el octavo, los datos de LatAm.

| # | Cambio | Antes (v1) | Ahora | Motivo con dato |
|---:|---|---|---|---|
| 1 | **Imprimibles a P0** | `/juegos-como-murdoku/para-imprimir` P0-P1 dudosa; `/para-imprimir` P1; `/packs` P1 | **Las tres a P0** (`/packs` como catálogo con el cebo gratuito; venta en el mes 3) | Expediente es formato imprimible **nativo**: una lista, una rejilla en blanco y cinco frases en un A4 que se fotocopia, con la solución razonada del certificado al pie. En v1 no teníamos nada propio que ofrecer a las 3.910 búsquedas/mes de `imprimible-pdf` ES + 1.710 MX/AR |
| 2 | **Rama de dos jugadores** | No existía | `/juegos-para-dos` (P2 **condicionada**) + `/para-profesores/hoja-a-hoja-b` (P1 si pasa la prueba de aula) | Cuatro manos (F-C) y rejilla a dos manos son mecánicas firma condicionadas y la familia `dos-jugadores-grupo` tiene **una sola palabra medida y es mala** (`juegos para dos personas online` 260 / KD 69). Es el vacío de datos más caro del conjunto: encabeza la cola de medición (§9) |
| 3 | **El vistazo da contenido a las páginas «fáciles»** | `/faciles` era una landing sin producto propio | `/vistazo` (P1) + el vistazo dentro de `/faciles`, `/para-ninos`, `/enigmas` y las siete páginas de día | El vistazo (3×3 en Escena, 3×3×3 en Expediente, 2-3 min, numeración propia, no toca la racha) existe justamente como puerta de entrada desde las landings |
| 4 | **Expediente como formato de papel, no solo como modo** | `/juegos-como-murdle` vendía el juego | Vende **el pack tanto como el juego**, y `/packs` cuelga de ahí | El 93 % del volumen de la familia Murdle en España (`murdle` 3.600 + `resuelve el crimen` 1.300 + `pdf` 390) es **intención de papel**, no de juego |
| 5 | **La semana con carácter se convierte en árbol** | No existía | Hub `/dias` + siete páginas de formato, cada una con su vistazo | Es contenido que **nadie tiene** y es la respuesta literal a «recomiéndame un juego de lógica diario» (pregunta GEO 26), donde hoy el buscador no tiene nada de deducción que recomendar en español |
| 6 | **«Soluciones» se reabre** | `/caso/*/solucion` en `noindex` en fase 1 | **Indexable desde D+8**, cuando el caso sale del archivo gratuito, + hub `/soluciones` (P1) | Cambió qué es una solución en este producto: no es la respuesta, es la **cadena razonada del certificado con el nombre de la técnica**. Sirve `acertijos con respuesta` 1.900/KD 33 y `casos para resolver` 170/KD 16, y **no** se persigue `murdoku soluciones` (140), que es demanda de libro ajeno |
| 7 | **Una sola página de promesa** | `/como-creamos-los-casos` (P0) y `/una-sola-solucion` (F18 del catálogo) eran dos | **`/una-sola-solucion`** es la página; `/como-creamos-los-casos` es **301** hacia ella | Dos páginas explicando lo mismo es una canibalización creada por nosotros. `/una-sola-solucion` ya está comprometida en D-007/F18, es el nombre que un jugador puede repetir y responde a las preguntas GEO 13, 46 y 47 |
| 8 | **`/enigmas` y `/acertijos` suben a P1 como puerta LatAm** | Los dos P2 con volumen español | P1, con compuerta de catálogo | La palabra de categoría **cambia de continente**: en España es `pasatiempos` (27.100) y `enigmas` es residual (1.300); en México `enigmas` vale 14.800 y `acertijos` 22.200; en Argentina 9.900 y 5.400. Son la puerta barata a LatAm sin abrir variante de idioma |

Cambios menores heredados y confirmados: `/juegos-diarios` y `/juegos-de-detectives` suben de P1 a **P0** (decisión ya tomada en `analisis-geo.md` §5.4); `/juegos-como-cluedo` y `/juegos-diarios-como-wordle` siguen **bloqueadas** sin luz verde de `experto-legal`; `/pasatiempos-online` **no se hace** en el año 1.

---

## 2. Árbol completo

**Leyenda de cada nodo.** `tipo` · `prioridad` · `renderizado` · KW principal (volumen ES / KD) · KW secundarias · intención · **juega:** contenido jugable que lleva · **enlace:** enlace interno principal · **GEO:** preguntas de `analisis-geo.md` §2 que responde (★ = del panel de 25).

**Tipos:** jugable · guía · comparativa · landing de intención · hub de categoría · archivo · tienda · B2B · institucional · legal · cuenta.
**Prioridades:** **P0** día del lanzamiento · **P1** meses 2-3 · **P2** mes 4 en adelante.
**Renderizado:** **SSG-diario** (build de las 00:00 Europa/Madrid) · **SSG** · **ISR** · **SSR** · **CSR+noindex**.

> **Dependencia de calendario que hay que decidir una vez.** El catálogo pone Expediente en las semanas 10-14 (fase 2); la decisión 3 de `propuesta-jugabilidad.md` propone fijar el lanzamiento en la semana 12-14 con las firmas dentro. Este árbol asume el escenario conservador: **Expediente es P1**. Si el fundador aprueba la decisión 3, cinco URL pasan de P1 a P0 sin tocar nada más: `/expediente`, `/reglas/expediente`, `/juegos-como-murdle`, `/dias/la-tabla-del-comisario` y `/archivo/modo/expediente`. El árbol está construido para que ese cambio no mueva ninguna otra pieza.

---

### 2.1 Raíz jugable

**`/`** — *el caso de hoy*
- **jugable** · **P0** · **SSG-diario**
- KW principal: `sospechario` (marca, volumen a construir) · secundarias: `juegos de deduccion` (20 / **KD 0**, se compra hoy por nada y es la entidad que queremos poseer), `juegos diarios gratis` (1.300 / KD 28)
- Intención: jugar ahora, sin registro, en el móvil
- **Juega:** el caso Escena del día completo, con el carácter del día que toque (lunes «El corto» 4×4 … domingo «El XL» 6×6). Enunciado, plano, pistas y botón de acusar **en el HTML servido**
- **Enlace:** `/como-jugar`, `/archivo`, `/dias`
- **GEO:** 34, 35★, 44★, 50★ · Bloque obligatorio de 60 palabras: qué es, cómo se juega, cuánto dura, cuánto cuesta, y la cifra de casos publicados
- Notas: el `lastmod` del sitemap y el `dateModified` del schema cambian cada día. El caso de hoy **no tiene URL propia indexable** (§6.2)

**`/expediente`** — *modo Expediente, página madre*
- **jugable** · **P1** (con el lanzamiento del modo) · **SSG-diario**
- KW principal: `juegos de deduccion` (20 / KD 0) · secundarias: `rompecabezas de logica` (sin medir, cola M1), `juegos de logica` (1.600 / KD 27) como apoyo
- Intención: descubrir el segundo modo; entrar desde la familia Murdle
- **Juega:** el Expediente del jueves («La tabla del comisario», 4×4×4, tres bloques, 48 casillas, con dieciséis marcas ya puestas y una falsa) y, los otros seis días, el **vistazo de Expediente 3×3×3**
- **Enlace:** `/reglas/expediente`, `/juegos-como-murdle`
- **GEO:** 24★, 28, 57★
- Nota de producto: el jueves llega **con algo dentro**. Nunca una tabla vacía de seis pistas: es la regla dura 5 del calendario y es lo que hace que la página no se abandone en la primera pantalla

**`/escena`** — *modo Escena, página madre*
- **jugable** · **P1** · **SSG**
- KW principal: `juegos de logica online` (320 / KD 25) · secundarias: `juegos de misterio` (260 ES / **1.300 MX**), `juego de asesinatos` (sin medir)
- Intención: entender el modo espacial sin pasar por la marca ajena
- **Juega:** vistazo 3×3 + los últimos siete casos Escena
- **Enlace:** `/reglas/escena`, `/dias`
- **GEO:** 57★
- Nota: existe por simetría con `/expediente` y para que el enlazado interno no tenga que pasar por la rama de marca ajena. Si a los 90 días no tiene impresiones propias, se fusiona con `/reglas/escena`

---

### 2.2 El caso por fecha y el archivo

**`/caso/AAAA-MM-DD`** — *un caso de Escena por fecha*
- **archivo jugable** · **P0** (los 7 del archivo el día 1) · **ISR**
- KW: cola larga por título del caso · agregadas: `murdoku diario` (0, serie 0→1,00 en dos meses), `puzzle diario` (70 / **KD 17**)
- Intención: rejugar, recuperar racha, llegar desde un enlace compartido
- **Juega:** el caso de ese día, con su regla de día
- **Enlace:** `/archivo/AAAA-MM`
- Regla dura: **la fecha de hoy responde 302 a `/`** y solo pasa a 200 auto-canónica a partir de D+1
- Alias: `/caso/[numero]` → **301** a la URL fechada (la gente comparte el número de caso, no la fecha)

**`/expediente/AAAA-MM-DD`** — igual para el modo Expediente · **P1** · ISR. Bajo B-jueves hay uno por semana, así que **el archivo gratuito de 7 días contiene siempre un Expediente**: es exactamente la muestra que necesita quien llega buscando cuadrícula lógica.

**`/caso/AAAA-MM-DD/solucion`** — *cómo se resolvía, paso a paso*
- **guía** · **P1** · **ISR** · **indexable solo desde D+8**
- KW principal: cola larga (`solucion del caso [n]`) · secundarias del hub: `acertijos con respuesta` (1.900 / KD 33)
- Intención: entender por qué, no descubrir la respuesta del caso de hoy
- Contenido: la **cadena razonada del certificado** con el nombre de la técnica en cada peldaño, la reconstrucción en texto, la tasa de resolución medida y el tiempo medio
- **Enlace:** `/soluciones`, `/tecnicas`
- **GEO:** 12, 14 (se responde **que no publicamos soluciones de libros de terceros**)
- Por qué D+8 y no D+1: el día 8 el caso sale del archivo gratuito (F13 del catálogo). Publicarlo antes canibaliza la partida; publicarlo el día 8 convierte lo que era un 404 comercial en la pieza de contenido más citable que tenemos

**`/soluciones`** — *hub de casos resueltos y explicados*
- **guía** · **P1** · **ISR**
- KW principal: `acertijos con respuesta` (**1.900** / KD 33) · secundarias: `casos para resolver` (170 / **KD 16**), `enigmas para resolver` (260 / KD 28), `misterios para resolver` (20)
- **Juega:** un caso resuelto **jugable en modo reconstrucción** (se ve la cadena, se puede parar en cada peldaño) + un caso nuevo del mismo tipo
- **GEO:** 12, 13★
- Aviso legal en la primera línea: no publicamos ni facilitamos soluciones de libros de terceros

**`/archivo`** — *hub del archivo*
- **archivo** · **P0** · **ISR**
- KW principal: `juegos diarios` se queda en `/juegos-diarios`; aquí la KW propia es `casos para resolver` (170 / KD 16) y `puzzle diario` (70 / KD 17) · secundarias: `pasatiempos diarios` (5.400 / KD 50, aspiracional)
- **Juega:** calendario navegable + un caso jugable del mes anterior
- Contenido citable: **contadores reales** (casos publicados, tasa media de resolución global y por día de la semana, tiempo medio, distribución de dificultad medida, racha media), con fecha de cálculo. Es la página que un motor generativo puede citar con una cifra que nadie más tiene
- **Enlace:** `/`
- **GEO:** 35★, 37

  - **`/archivo/AAAA-MM`** — mes · archivo · **P0** · SSG · máximo 31 casos por página, sin paginación adicional
  - **`/archivo/modo/escena`** y **`/archivo/modo/expediente`** — archivo · **P1** · SSG · facetas indexables porque cada una tiene texto propio, contadores propios y un caso jugable propio
  - **`/archivo/dificultad/facil`** — jugable + archivo · **P1** · SSG · `murdoku facil` (170 / KD 0) va a `/faciles`; aquí `juegos de logica faciles` (20 / KD 0), `acertijos faciles` (390 / KD 36). Lleva un caso fácil jugable, no un listado
  - **`/archivo/dificultad/experto`** — jugable + archivo · **P1** · SSG · `acertijos dificiles` (1.300 / KD 35), `dificiles acertijos` (1.600 / KD 43), `juegos de logica dificiles` (20 / KD 0), `juegos de logica para adultos` (390 / **KD 16**). Lleva el sábado «El difícil» (5×5 con celdas bloqueadas)
  - **`/archivo/dificultad/normal`** — **P2** · SSG
  - **`/archivo/escenario/[slug]`** — **P2** · SSG · solo se publica un escenario con **≥ 8 casos** y texto de ambientación propio; por debajo, `noindex`
  - **`/expediente/invertido`** — *el expediente que llega resuelto* · jugable · **P2** · SSG · `casos para resolver` (170 / KD 16), `misterios para resolver` (20), `enigmas para resolver` (260 / KD 28). Contenido que **nadie tiene**: el cuaderno llega resuelto y hay que marcar las tres pistas que lo prueban. Es formato de archivo, de Pack Aula y de Premium; **nunca caso del día**

---

### 2.3 La semana con carácter

Hub y siete páginas de formato. **No compiten por genéricos**: su función es entidad, enlazado interno y GEO. Cada una lleva el **vistazo** de su modo configurado con la regla de ese día, más los últimos cuatro casos archivados de ese día. Es contenido que ningún competidor del género puede publicar, porque exige que el motor sepa etiquetar un caso como «jueves» sin criterio humano.

**`/dias`** — *la semana: siete casos, siete reglas*
- **hub de categoría** · **P1** · **SSG**
- KW principal: sin volumen propio medido (`retos de logica`, `puzzle de logica diario`, sin medir, cola M1) · vive del enlazado y de GEO
- **Juega:** el vistazo del día que sea hoy
- **Enlace:** `/juegos-diarios` (que es la landing de tráfico) y `/`
- **GEO:** 26★, 33
- Criterio honesto: **esta página no es un objetivo de tráfico**. Si a los 120 días no tiene impresiones ni citas, se mantiene por enlazado y no se invierte más en ella

| URL | Día | Prioridad | Juega (vistazo + regla) | KW propias con volumen | GEO |
|---|---|---|---|---|---|
| `/dias/el-corto` | Lunes, Escena 4×4 | **P1** | Vistazo 3×3 + sobres por progreso (abre con 3 pistas) | `juegos de logica faciles` 20/0 | 11, 27 |
| `/dias/el-clasico` | Martes, Escena 5×5 | P2 | Vistazo 3×3, seis pistas a la vista | — | 40 |
| `/dias/el-interrogatorio` | Miércoles, Escena 4×4 | **P1** | Vistazo 3×3 **con menú vivo**: tres preguntas que el motor filtra | `juegos de investigacion` 140/28, `resolver crimenes` (sin medir) | 29★, 30 |
| `/dias/la-tabla-del-comisario` | Jueves, **Expediente** 4×4×4 | **P1** | Vistazo 3×3×3 con marcas del comisario y una falsa | `juegos de deduccion` 20/0 | 20★, 24★ |
| `/dias/de-disparate` | Viernes, Escena 4×4 | P2 | Vistazo 3×3 + rastro del objeto, sin fallecidos | `juegos de logica para ninos` 170/**8** (cede a `/para-profesores`) | 31, 48 |
| `/dias/el-dificil` | Sábado, Escena 5×5 | P2 | Vistazo 3×3 con una celda bloqueada | `acertijos dificiles` 1.300/35 (cede a `/archivo/dificultad/experto`) | 37 |
| `/dias/el-xl` | Domingo, Escena 6×6 dos plantas | P2 | Vistazo 3×3 de dos plantas | — | 31 |

Regla editorial de estas siete páginas: **la regla del día se cuenta en una frase y se demuestra jugando**, nunca en un tutorial. Es la misma regla que en producto (portada del caso), y es lo que las hace legibles para un modelo generativo.

---

### 2.4 Aprender a jugar, técnicas y confianza

**`/como-jugar`** — *tutorial jugable de 60 segundos*
- **guía jugable** · **P0** · **SSG**
- KW principal: `juegos de logica` cede a `/juegos-de-logica`; aquí `como jugar sospechario` (marca) · secundarias: `como se juega al sudoku` (1.000 / KD 23) **solo como FAQ de desambiguación**, `juegos para pensar` (260 ES / 720 MX / **1.300 AR**)
- **Juega:** tutorial de 3×3 jugable paso a paso (es el vistazo con andamiaje)
- Schema: `HowTo` + `FAQPage` + `VideoObject`
- **Vídeo propio obligatorio el día 1** (60-90 s, en YouTube, con transcripción en la página): YouTube es el dominio más citado por AI Overviews (20,9 %) y en «cómo se juega» ya manda el vídeo
- **Enlace:** `/`, `/reglas`
- **GEO:** 25★ (bloque `h2` «¿Qué es un juego diario de deducción?», que lo distingue de la deducción **social** y de los juegos de mesa: en español ese término lo posee otro significado), 45, 54, 55

  - **`/reglas`** — hub · guía · **P0** · SSG · `reglas murdoku` y `murdoku instrucciones` viven en `/juegos-como-murdoku/como-se-juega`; aquí las reglas propias, sin marca ajena
  - **`/reglas/escena`** — guía · **P0** · SSG · **juega:** vistazo 3×3 · GEO 57★
  - **`/reglas/expediente`** — guía · **P1** · SSG · KW `rompecabezas de logica` (sin medir) · **juega:** vistazo 3×3×3 · Schema `HowTo` + `FAQPage` · GEO **24★** («¿qué es una cuadrícula lógica?»: hoy no hay **nada jugable en español** que responda esto), 57★

**`/tecnicas`** — *el cuaderno de técnicas*
- **guía** · **P1** · **SSG**
- KW principal: `trucos murdoku` (10 / KD 0) · secundarias: `acertijos de logica` (720 / KD 27), `juegos de logica y razonamiento` (210 / **KD 12**, compartida con `/escalafon`)
- **Juega:** un mini-caso por técnica, cargado en la propia página, que **exige** esa técnica según TR del certificado
- **GEO:** 11, 12

> **¿Merece indexarse una página por técnica?** Son 26 (14 de Escena + 12 de Expediente). **Decisión: no al lanzar, con criterio escrito antes del dato.**
>
> **A favor:** es contenido único que literalmente nadie tiene, porque exige un solver que sepa por qué escalón pasó cada caso; encaja con `HowTo` + `Article`; y son 26 respuestas conversacionales limpias.
> **En contra, y pesa más hoy:** el volumen de búsqueda es **cero por construcción** (los nombres los inventamos nosotros y la prueba de 5 personas aún puede cambiarlos); 26 páginas casi iguales en un dominio nuevo es exactamente el patrón que hace que un modelo aprenda que el sitio es una plantilla (§6.3); y la taxonomía **no está congelada** hasta que pase la prueba 1 de `propuesta-jugabilidad.md` §6 y la prueba 6 de Expediente.
>
> **Lo que se hace:** una sola página `/tecnicas` con las 26, cada una con ancla estable (`/tecnicas#el-salto`), su definición de una frase, su mini-caso jugable y su dato propio («el 31 % de los casos de agosto la exigían»). **Compuerta de promoción a URL propia**, revisada en el mes 4 con Search Console: una técnica sale a `/tecnicas/[slug]` cuando su ancla acumula **≥ 50 impresiones/mes** o aparece citada en un motor generativo, y solo si tiene ≥ 300 palabras propias, un caso jugable que la exige y el dato de TR. Se promocionan como máximo cinco a la vez. Nunca se publican las 26 de golpe.

**`/escalafon`** — *cómo se sube de aprendiz a comisario*
- **guía** · **P1** · **SSG**
- KW principal: `juegos de logica y razonamiento` (210 / **KD 12**) · secundarias: `juegos de logica para adultos` (390 / KD 16), `retos de logica` (sin medir)
- Intención: entender la progresión; es donde «razonamiento» deja de ser etiqueta y pasa a ser respuesta literal
- Contenido: los cinco rangos, el cuaderno **de dos apartados** (Escena y Expediente), la regla de que el rango se calcula **sobre el apartado más avanzado y nunca sobre la suma**, la insignia de doble especialidad, y por qué la frase es **«este caso exigía»** y no «has usado» (el motor ve tableros, no cabezas)
- **Juega:** un caso que exige una técnica concreta, con la acreditación simulada al final
- **Enlace:** `/tecnicas`, `/premium`
- **GEO:** 51★ (es una de las cinco diferencias que sostienen «¿qué diferencia a Sospechario de Murdoku?»)

**`/una-sola-solucion`** — *cómo garantizamos que hay exactamente una respuesta*
- **guía institucional** · **P0** · **SSG** · **la pieza más citable del sitio**
- KW: sin volumen propio relevante; vive de GEO, de prensa y de enlazado
- Contenido: el generador, el solver, la prueba de unicidad con parada en 2, la escalera de técnicas humanas (por qué «sin adivinar» es verificable y no un eslogan), cómo se mide la dificultad, **qué hace y qué no hace la IA** (la IA escribe la historia; el motor decide la lógica y valida cada pista; una persona resuelve cada caso a ciegas antes de publicarlo), el apartado sobre el interrogatorio («por qué no puedes preguntar mal») y el enlace a `/erratas`
- Dato propio citable: casos publicados, erratas reconocidas y reparaciones de racha automáticas, con fecha
- **GEO:** 13★, 46★, 47★
- `/como-creamos-los-casos` → **301** aquí (§7)

  - **`/erratas`** — institucional · **P0** · ISR · registro público de erratas con fecha, caso afectado y reparación aplicada. Es la página que convierte una promesa en un hecho comprobable, y el género castiga exactamente lo contrario

**`/guias`** — hub de estrategia · **P1** · SSG
  - `/guias/como-anotar-y-descartar` (**P1**), `/guias/resolver-sin-adivinar` (**P1**), `/guias/errores-mas-comunes` (P2), `/guias/de-facil-a-experto` (P2)
  - Cada guía termina con un caso jugable que ejercita justo esa técnica y lleva autor real con `sameAs`
  - Nota: `/guias/tecnicas-de-deduccion` de v1 **desaparece**: su contenido es `/tecnicas`, que es mejor y no lo duplica

---

### 2.5 Marca ajena: Murdoku

Toda esta rama sigue la política de la §3. La marca ajena **nunca** es el nombre del producto, siempre va dentro del marco comparativo, **cada página lleva un caso jugable completo arriba del pliegue** y la frase de no afiliación va **en las primeras 60 palabras**.

**`/juegos-como-murdoku`** — *hub comparativo*
- **comparativa jugable** · **P0** · **SSG**
- KW principal: `juegos como murdoku` (0 medido, término de encuadre) + cola de `murdoku` (**33.100** ES / **9.900 AR** / sin dato MX, KD 35, navegacional) · secundarias: `alternativas a murdoku` (0), `juegos parecidos a murdoku` (0), `murdoku 2` (140 / KD 0), `que es murdoku` (10 / KD 0), `que es un murdoku` (0)
- Intención: «he oído hablar del libro, ¿dónde juego algo así?»
- **Juega:** el lunes «El corto» (4×4, sobres por progreso, abre con tres pistas). En una landing, la pared de ocho párrafos en la primera pantalla sale carísima
- Contenido obligatorio: bloque `h2` **«¿Qué es un Murdoku?»** con definición de una frase y atribución al autor y al editor, fechada; **tabla comparativa HTML** (libro / web oficial / apps de tienda / Sospechario) con columnas fijas —formato, idioma, gratis, caso diario, solución única garantizada, app o PWA, para quién— diciendo qué hace mejor el otro; aviso de no afiliación con enlace a `/legal/marcas`; enlace saliente al producto original; FAQ de una línea para `murdoku soluciones` (no publicamos soluciones de libros ajenos), `donde comprar murdoku` (enlace al editor) y `murdoku 2` (fecha y precio mantenidos)
- **Enlace:** `/`
- **GEO:** 5★, 7★, 14, 15, 16, 21★, 51★

**`/juegos-como-murdoku/online`** — **la página más importante del sitio**
- **landing de intención jugable** · **P0** · **SSG**
- KW principal: `murdoku online` (**9.900 ES / KD 29** · **2.900 AR / KD 27** · **2.400 MX / KD 30**) · secundarias: `jugar murdoku online` (480 / **KD 13**), `murdoku on line` (480 / KD 33), `murdoku play` (390 / KD 31), `murdoku jugar` (110 / KD 0), `murdoku online gratis` (90 / KD 33), `murdoku donde jugar` y `hay murdoku online` (sin medir)
- Intención: jugar ahora en el navegador, sin descargar
- **Juega:** el lunes «El corto» completo
- **Enlace:** `/juegos-como-murdoku`
- **GEO:** 1★, 18★ (con la frase «el caso cambia a medianoche de **tu** hora local», que es un detalle local que ningún tercero tiene), 43

**`/juegos-como-murdoku/en-espanol`**
- **landing de intención jugable** · **P0** · **SSG**
- KW principal: `murdoku en espanol` (**2.400 ES / KD 30** · **1.000 MX / KD 32** · 260 AR / KD 29) · secundarias: `murdoku espanol` (390 / KD 23), `murdoku online espanol` (260 / KD 26), `murdoku en espanol online` (140 / KD 33), `murdoku online en espanol` (70 / KD 0), `murdoku espanol online` (70 / KD 0)
- Ángulo que solo nosotros podemos sostener: **escrito** en español, no traducido. Los nombres, el humor y los escenarios son propios, y el español es lengua de origen (validación F3 del catálogo: ningún texto pasa por un paso de traducción)
- **Juega:** el lunes «El corto»
- **GEO:** 1★, 18★
- Corrección citable: hoy el resumen del buscador afirma que el clon traducido «está totalmente traducido». Nuestra respuesta directa distingue **traducido** de **escrito en español**, con un ejemplo

**`/juegos-como-murdoku/gratis`**
- **landing de intención jugable** · **P0** · **SSG**
- KW principal: `murdoku gratis` (1.900 / **KD 41**, la más alta del racimo: no se gana solo con contenido, exige enlaces) · secundarias: `murdoku juego gratis` (1.900 / KD 36), `murdoku en espanol gratis` (**1.600 / KD 25**, la mejor relación volumen/KD del tramo alto: va en un `h2` y en la FAQ, no solo en el `title`)
- Contenido: qué es gratis para siempre y qué no, en tabla, sin letra pequeña. Bloque explícito «no hace falta registrarse ni pagar» y el **compromiso publicado sobre anuncios** (nunca durante la partida, nunca un anuncio para desbloquear una pista, cero en la sección infantil)
- **Juega:** el lunes «El corto»
- **GEO:** 2★, 44★

**`/juegos-como-murdoku/sin-descargar`**
- **landing de intención jugable** · **P0** · **SSG**
- KW principal: `descargar murdoku gratis` (**1.300 / KD 30**) · secundarias: `murdoku descargar gratis` (170 / KD 0), `murdoku app` (140 / KD 33), `murdoku en espanol app` (90 / KD 0), `murdoku android` (0, serie 0→1,00), `juegos online sin descargar` (390 / KD 88, no se persigue)
- Ángulo honesto: quien busca «descargar» quiere una app. Le damos **instalar la PWA en dos toques**, con `HowTo`, y una **tabla de apps de tienda con nota y fecha de consulta** (la app no oficial más descargada puntúa 2,36/5 con 63.000 descargas en 30 días: es demanda insatisfecha medida). **Nunca se afirma ser la app oficial de nadie**
- **Juega:** el lunes «El corto»
- **GEO:** 3, 4★, 30, 56

**`/juegos-como-murdoku/como-se-juega`**
- **guía jugable** · **P0** · **SSG** · **la página GEO del sitio**
- KW principal: `como se juega al murdoku` (**320 / KD 30**) · secundarias: `murdoku como jugar` (170 / **KD 0**), `reglas murdoku` (140 / KD 0), `murdoku instrucciones` (40 / KD 0), `que es murdoku` (10 / KD 0), `sudoku de asesinatos` (sin medir)
- Schema: `HowTo` + `FAQPage` + `VideoObject`. Pasos numerados con verbo en imperativo, uno por `<li>`, ejemplo resuelto
- **Juega:** caso 3×3 jugable + vídeo propio de 60-90 s con transcripción
- FAQ de desambiguación obligatoria: en qué se diferencia de un sudoku, y por qué «sudoku de asesinatos» **no** es Killer Sudoku (hoy el buscador se equivoca en las dos)
- **GEO:** 6★, 8, 39
- Con KD 30 y 320 de volumen no entra por tráfico: entra porque su SERP ya dispara vídeo, carrusel de vídeo y *People Also Ask* de forma sistemática, y porque es la página que un modelo puede citar entera

**`/juegos-como-murdoku/para-imprimir`** — *reclasificada a P0*
- **landing de intención + tienda** · **P0** · **SSG**
- KW principal: `murdoku pdf` (**2.400 ES / KD 33** · **1.600 MX / KD 34** · **1.300 AR / KD 32**) · secundarias: `murdoku en espanol para imprimir` (210 / KD 28, la variante con intención limpia), `murdoku para imprimir` (140 / **KD 0**), `murdoku pdf espanol` (110 / KD 27), `murdoku pdf gratis` (70 / KD 16)
- **Aviso de intención en la primera línea, no en el pie:** buena parte del volumen de `murdoku pdf` busca el libro pirateado (GitHub, Scribd, Lectulandia, vídeos de «libro completo gratis»). **No se persigue esa intención.** La página ofrece PDF propios generados por nuestro motor y lo dice antes que ninguna otra cosa
- **Juega:** el **expediente de una página** (A4 con caso, rejilla en blanco y solución razonada al dorso) descargable gratis como muestra, más la hoja de trabajo en blanco sin pedir correo, más el lunes jugable
- **Enlace:** `/packs`, `/para-imprimir`
- **GEO:** 10★, 22
- Redacción validada por `experto-legal` antes de publicar. Riesgo reputacional si se interpreta que se explota la intención de piratería

**`/juegos-como-murdoku/para-ninos`**
- **landing de intención jugable** · **P0** · **SSG**
- KW principal: `murdoku para ninos` (210 / **KD 0**, demanda **nueva**) · secundarias: `murdoku ninos` (140 / KD 0), `murdoku edad recomendada` (70 / KD 0), `murdoku para que edad es` (70 / KD 0), `juegos de logica para ninos` (170 / **KD 8**; 210 MX, 170 AR), `pasatiempos para ninos` (90 / KD 13)
- **Juega:** el **viernes «De disparate»** en 4×4 sin fallecidos («quién se llevó el último trozo de tarta») + vistazo 3×3
- Contenido: edad recomendada **con el criterio explicado** (el buscador hoy promedia «9-10 años» a partir de fichas de juguetería), política *cozy* escrita, PDF descargable
- Reglas de producto que se declaran en la página: sin cuentas de menores de 14 años, sin compartir en redes desde esta sección, **cero anuncios**, sin compra dentro de la sección infantil
- **Enlace:** `/para-profesores`
- **GEO:** 9★, 31, 32, 48

**`/juegos-como-murdoku/faciles`**
- **landing de intención jugable** · **P0** · **SSG**
- KW principal: `murdoku facil` (170 / **KD 0**, demanda nueva) · secundarias: `juegos de logica faciles` (20 / KD 0), `acertijos faciles` (390 / KD 36)
- **Juega:** el **vistazo 3×3** (2-3 min, numeración propia, no toca la racha). En v1 esta página no tenía producto propio; ahora es un juego de dos minutos
- Contenido: tres consejos con **nombre de técnica** (que es lo que nadie más puede dar) y el enlace a `/vistazo`
- **GEO:** 11

**`/vistazo`** — *un caso en dos minutos*
- **jugable** · **P1** · **SSG**
- KW principal: `juegos de ingenio` (480 / **KD 15**, la mejor relación volumen/KD de la categoría propia) · secundarias: `acertijos faciles` (390 / KD 36), `juegos de logica faciles` (20 / KD 0)
- **Juega:** vistazo 3×3 de Escena y, desde el mes 3, vistazo 3×3×3 de Expediente, con numeración propia
- Compuerta: se publica cuando el catálogo de vistazos supere la medida **C0-5** del motor (≥ 200 casos distintos). Por debajo, el vistazo es semanal y esta página no se publica

---

### 2.6 Marca ajena: Murdle

**`/juegos-como-murdle`** — *hub comparativo del modo Expediente*
- **comparativa jugable** · **P1** (con el lanzamiento del modo) · **SSG**
- KW principal: `murdle online` (170 / **KD 0**) · secundarias: `murdle` (3.600 / KD 20, intención de libro), `murdle resuelve el crimen` (**1.300 / KD 22**), `murdle pdf` (390 / **KD sin medir**), `murdle espanol` (70 / KD 20), `murdle espanol online` (70 / KD 0), `murdle juego` (40 / KD 17), `murdle en espanol` (20 / KD 0). MX: `murdle` 10. AR: sin dato
- Realidad medida: **~330 búsquedas/mes de intención «jugar online en español» con KD 0-20**, y el 93 % del resto de la familia es intención de papel. Poco volumen, coste de captura casi nulo, y es el único hueco donde no hay absolutamente nadie
- **Juega:** el jueves «La tabla del comisario» (4×4×4) + vistazo 3×3×3
- Contenido: **corrección de un error que el buscador comete hoy** («murdle.com parece tener versión en español»: no existe versión oficial en español); tabla de dos columnas cuadrícula lógica vs deducción espacial con el «cuál elegir»; **el pack PDF vendido con el mismo peso que el juego**; FAQ de una línea sobre apps clon y sobre el PDF (con enlace a la muestra oficial del editor, nunca a piratería)
- **Enlace:** `/expediente`, `/packs`
- **GEO:** 19★, 20★, 21★, 23
- `/juegos-como-murdle/en-espanol` — **P2**, solo si el hub se queda corto de cobertura tras 90 días

---

### 2.7 Hubs de categoría con marca propia

Esta rama es el seguro contra «la moda se enfría en 2027» **y** contra «el editor lanza una app oficial». Se construye en paralelo, no después. Dos de ellas suben a P0 respecto de v1.

**`/juegos-diarios`** — **P0** · hub de categoría jugable · SSG
- KW principal: `juegos diarios` (**2.900 ES / KD 37** · **2.400 MX** · **2.400 AR / KD 20**) · secundarias: `juegos diarios gratis` (1.300 / **KD 28**, la mejor de la familia), `juego diario gratis` (390 / KD 55), `juego diario` (480 / KD 56), `juego del dia` (170 / KD 64), `reto diario` (40 / KD 24), `juegos tipo wordle` (sin medir)
- **Juega:** el caso de hoy, con la etiqueta del día
- Contenido: **la lista honesta de juegos diarios en español, incluidos los de terceros**, en `<table>` con fecha de revisión visible. Ser el «dailydle» en español. Es la respuesta a las preguntas donde hoy el buscador **no tiene nada de deducción que recomendar**
- **GEO:** 26★, 27, 33, 34
- Cuidado medido: parte del volumen ES es navegacional hacia eldiario.es. Se mide el CTR real a los 60 días antes de invertir más. En Argentina, **KD 20**: es la entrada genérica más barata de las tres bases

**`/juegos-de-detectives`** — **P0** · hub de categoría jugable · SSG
- KW principal: `juegos de detectives` (320 ES / **880 MX** / **720 AR** / KD 25) · secundarias: `juego de detectives` (320 / KD 24), `juegos de resolver crimenes` (210 / KD 36), `casos para resolver` (170 / KD 16, cede a `/archivo`), `juegos de investigacion` (140 / KD 28)
- **Juega:** el **miércoles «El interrogatorio»** (menú vivo). Es la única mecánica del conjunto en la que el jugador **investiga** en vez de leer, y es lo que separa esta página de un listado de portal de minijuegos
- Contenido: tabla «qué encontrarás en los portales de minijuegos / qué hay aquí», sin denigrar
- **GEO:** 29★, 30, 41
- Es la landing que prepara la expansión: casi el triple de volumen en México que en España

**`/juegos-de-logica`** — **P0** · hub de categoría jugable · SSG
- KW principal: `juegos de logica` (**1.600 / KD 27**; 880 AR, 140 MX) · secundarias: `juegos de logica online` (320 / KD 25; 30 MX, 30 AR), `juegos de logica gratis` (260 / KD 36), `juegos gratis de logica` (210 / KD 30), `juegos de logica para adultos` (390 / **KD 16**), `juegos mentales` (1.600 / KD 49, P2)
- **Juega:** el caso de hoy + el vistazo
- **Reconfirmar el volumen antes de invertir más**: esta palabra aparece con 480/KD 33 en `analisis-estrategico.md` §2.1 y con 1.600/KD 27 en el CSV. Es la primera fila de la cola de medición (§9)
- **GEO:** 27, 28, 40

**`/juegos-de-misterio`** — **P1** · hub de categoría jugable · SSG
- KW principal: `juegos de misterio` (260 ES / **1.300 MX** / 110 AR / KD 18) · secundarias: `escape room online gratis` (720 / KD 39)
- Página pensada explícitamente para México, donde vale **cinco veces** lo que en España
- FAQ honesta: no somos un escape room; casos de 10 minutos; enlace saliente a los buenos
- **GEO:** 35★, 38

**`/enigmas`** — **P1** · hub de categoría jugable · SSG · **puerta LatAm**
- KW principal: `enigmas` (1.300 ES / **14.800 MX** / **9.900 AR**) · secundarias: `enigmas para resolver` (260 / KD 28)
- **Juega:** vistazo propio + un caso del archivo con su cadena razonada
- **Compuerta:** solo se publica con ≥ 30 vistazos propios jugables publicados y con la SERP comprobada. Si es un listado de texto, no se lanza
- Es **una página española de bajo interés y una página latinoamericana de primer orden**: se escribe con la palabra de categoría que usa LatAm, no con «pasatiempos»

**`/acertijos`** — **P1 condicionada** · hub de categoría jugable · SSG
- KW principal: `acertijos` (8.100 ES / **22.200 MX** / 5.400 AR / KD 41) · secundarias: `acertijos de logica` (720 / KD 27; 390 MX, 140 AR), `acertijos para adultos` (2.400 / KD 30), `acertijos con respuesta` (1.900 / KD 33, cede a `/soluciones`)
- Misma compuerta que `/enigmas`, más una: **hay que ver la SERP** (`phrase_organic` de `acertijos`, cola M1.5). Si es listado puro de blogs, entramos con producto; si no, no se entra
- No se ataca `acertijos de pensamiento lateral` (260 / **KD 14**) pese a ser la mejor KD de la familia: el pensamiento lateral no tiene solución única deductiva y venderlo sería vender lo que no hacemos

**`/juegos-para-pensar`** — **P2** · SSG · 260 ES / 720 MX / **1.300 AR**
**`/pasatiempos-online`** — **no se hace en el año 1.** `pasatiempos` (27.100 / KD 61) y `pasatiempos online` (6.600 / KD 67) son un racimo navegacional de El País, 20minutos, La Vanguardia y ABC (35.000+ búsquedas/mes solo en los cinco medios). Se ataca desde `/para-medios`
**`/juegos-como-cluedo`** — **bloqueada.** `cluedo online` (480 ES / KD 17; 110 MX; 20 AR) es buena palabra, pero Cluedo es marca de Hasbro con historial activo de defensa. Sin luz verde expresa de `experto-legal` no se publica; la intención la cubre `/juegos-de-detectives`
**`/juegos-diarios-como-wordle`** — **bloqueada.** `wordle espanol` 110.000 / KD 53 y marca de The New York Times. Volumen enorme, encaje bajo

---

### 2.8 Imprimibles, aula y dos jugadores

**`/para-imprimir`** — **P0** · landing + tienda · SSG
- KW principal: `pasatiempos para imprimir` (320 / **KD 19**; 110 MX, 20 AR) · secundarias: `juegos de logica para imprimir` (110 / **KD 10**), `acertijos para imprimir` (20 / sin medir), `juegos de logica para imprimir pdf` y `pasatiempos para imprimir pdf` (sin medir, cola M1)
- Es la versión de `/juegos-como-murdoku/para-imprimir` **que sobrevive si la moda se enfría**: mismo producto, sin marca ajena
- **Juega:** el expediente de una página y la hoja de trabajo en blanco, descargables sin dar el correo; el pack de 5 casos a cambio del correo
- **Enlace:** `/packs`

**`/packs`** — **P0 como catálogo, venta desde el mes 3** · tienda · SSG
- KW: vive de `/para-imprimir` y de `/juegos-como-murdoku/para-imprimir`; propia: `murdle pdf` (390 / KD sin medir)
- Schema `Product` + `Offer` **solo cuando haya precio real**. Nunca `AggregateRating` inventado
- `/packs/[slug]` — **P1** · fichas de `PDF-CEBO` (gratis por correo), `PDF-CLASICO` (5,99 €), `PDF-AULA` (14,99 € / centro 39,99 €), `PDF-JUNIOR` (4,99 €), `PDF-REGALO` (9,99 €)
- Composición que sale del producto final: `PDF-CLASICO` = 30 Escena + 20 Expediente; `PDF-AULA` = Escena en 3.º-4.º y Expediente en 5.º-6.º; `PDF-REGALO` mayoritariamente Expediente

**`/para-profesores`** — **P1** · landing sectorial · SSG
- KW principal: `acertijos para ninos` (**2.400 / KD 22**, el mayor volumen atacable fuera del racimo Murdoku) · secundarias: `juegos de logica para ninos` (170 / **KD 8**; 210 MX, 170 AR), `pasatiempos para ninos` (90 / KD 13), `acertijos para adolescentes` (90 / KD 26), `recursos para profesores` (50 / KD 25), `juegos de logica para clase` y `actividades de logica primaria` (sin medir, cola M1)
- **Juega:** el viernes «De disparate» + el **expediente invertido** (llega resuelto, hay que marcar las tres pistas que lo prueban: es la actividad de revisión crítica que un docente puede corregir)
- Schema `LearningResource`: curso, edad, competencia trabajada, tiempo de aula, PDF
- Contexto competitivo medido: orientacionandujar.es rankea con «35 murdokus listos para jugar» y ocupa el #2-#8 en casi todo lo infantil e imprimible. Se compite con **progresión por curso, guía docente, rúbrica y solución única garantizada**, que es exactamente lo que un blog de recursos no puede prometer
- **GEO:** 17, 32, 52
- `/para-profesores/recursos` — **P2**, fichas por curso
- `/para-profesores/hoja-a-hoja-b` — **P1 condicionada** a que pase la prueba 4 (seis parejas + un aula de 28, en papel). Es la mejor actividad en parejas del año según el perfil docente, y **cuesta cero**: son dos PDF

**`/juegos-para-dos`** — **P2 condicionada** · landing de intención jugable · SSG
- KW principal: `juegos para dos personas online` (260 / **KD 69**, mala palabra) · secundarias sin medir: `juego de detectives para dos`, `juegos de logica cooperativos`, `juegos de logica en grupo`, `escape room en casa`, `juegos de mesa de detectives`
- **Doble compuerta, y las dos son duras:** (a) la prueba 4 en papel pasa sus tres umbrales, y (b) la medición M1.1 devuelve volumen con KD razonable en al menos tres de las palabras. **No se escribe la landing antes**: hoy sostendríamos una página sobre una sola palabra medida y es mala
- **Juega:** hoja A / hoja B del caso a cuatro manos y la rejilla a dos manos

---

### 2.9 Negocio, marca y confianza

**`/premium`** — **P0 como lista de espera**, venta en el mes 4-5 · landing comercial · SSG
- KW: sin volumen propio; vive del enlazado y del producto
- Contenido: las 12 ventajas, el precio (2,99 €/mes · 19,99 €/año · fundador 14,99 €/año), y lo que **nunca** entra en Premium (el caso del día es gratis para siempre; Premium no da ventaja en duelos). El argumento fuerte del modo Expediente: el archivo y los ilimitados **cuentan para acreditar técnicas**, y el cuaderno de tabla se llena a un séptimo de velocidad si solo se juega el jueves
- Schema `Product`/`Offer` solo cuando haya precio real y pasarela

**`/duelos`** — **P2** · landing jugable · SSG · `juegos para dos personas online` (260 / KD 69)
  - `/duelo/[id]` — **CSR + `noindex, follow`**. Es una invitación, no una página: carga rápida, sin login, OG dinámica
**`/r/[id]`** — resultado compartido con enlace profundo · **CSR + `noindex, follow`** con imagen OG generada. Motor del bucle viral, no del SEO

**`/para-medios`** — **P1, y bloqueada hasta que exista el expediente OEPM** · B2B · SSG
- Argumento comercial con dato verificable: el racimo `pasatiempos + medio` mueve **79.800 búsquedas/mes** en España (El País 22.200 + 6.600 + 12.100 de `pasatiempos gratis`, 20minutos 2.900, La Vanguardia 1.300, ABC 1.000, `pasatiempos` 27.100, `pasatiempos online` 6.600) y `murdoku` 33.100
- Qué se licencia: `B2B-WIDGET` con **Escena** (táctil, visual, móvil) y `B2B-MARCABLANCA` con **Expediente por delante** (cabe en una columna, se compone con la tipografía del medio y va a imprenta con coste cero)
- **GEO:** 53
- **Disparador D-006:** abrir la primera conversación con un medio o una editorial cumple un disparador. La página no se publica antes de que la solicitud OEPM esté redactada y presupuestada

**`/sobre-nosotros`** — **P0** · institucional · SSG · **página crítica para GEO**
- Quién está detrás con nombre y apellidos, dónde, desde cuándo, cómo se financia, contacto real
- Schema `Organization` (con `sameAs` a los perfiles reales) + `AboutPage`
- **GEO:** 49★, 50★
- Aquí vive la frase de entidad, **literal y sin variaciones creativas** (§3.3)

**`/prensa`** — **P1** · institucional · SSG · logos, capturas, cifras actualizadas automáticamente, biografía, contacto directo, todo descargable. Schema `Organization`
**`/blog`** — **P1** · SSG; `/blog/[slug]` **P1** · ISR
- Líneas: los datos del mes («el 41 % resolvió el caso del martes»), la moda del misterio en español, análisis de casos difíciles, novedades. Schema `Article` con `author` `Person` real y `sameAs`
**`/autores/[slug]`** — **P1** · institucional · SSG · una página por autor con `Person` y `sameAs`. Sin esto, ni las guías ni el blog tienen autoría verificable
**`/contacto`** — **P0** · SSG

**Legal, todas `index, follow`** (son señales de confianza, no ruido):
`/legal/aviso-legal`, `/legal/privacidad`, `/legal/cookies`, `/legal/terminos` — **P0** · SSG
**`/legal/marcas`** — **P0** · SSG · declaración de no afiliación y de uso descriptivo de marcas de terceros. Enlazada desde el pie **y desde cada landing de `/juegos-como-*`**. La redacta `experto-legal`

---

### 2.10 Cuenta y sistema (fuera del índice)

- `/entrar`, `/cuenta`, `/cuenta/estadisticas`, `/cuenta/racha`, `/cuenta/cuaderno`, `/cuenta/suscripcion` — CSR + **`noindex, nofollow`**
- `/buscar` y cualquier resultado de búsqueda interna — **`noindex, follow`**, bloqueado en robots
- `/api/*`, `/_next/data/*` — `Disallow`
- `/robots.txt`, `/sitemap.xml` (índice), `/sitemap-core.xml`, `/sitemap-landings.xml`, `/sitemap-casos.xml`, `/sitemap-blog.xml`, `/sitemap-packs.xml`, `/feed.xml`, `/llms.txt`, `/manifest.webmanifest`

### 2.11 Redirecciones que se registran el día 1

`/murdoku-online`, `/murdoku-en-espanol`, `/murdoku-gratis`, `/alternativas-a-murdoku`, `/murdle-online`, `/murdle-en-espanol` → **301 permanente** a la página equivalente de `/juegos-como-*`. Se registran los slugs para que no los ocupe un tercero y para absorber enlaces entrantes con esa forma, pero **no existen como páginas**.
`/como-creamos-los-casos` → **301** a `/una-sola-solucion`.
`/caso/[numero]` → **301** a `/caso/AAAA-MM-DD`.
`/guias/tecnicas-de-deduccion` → **301** a `/tecnicas`.

---

## 3. Política de marcas ajenas: slug, título, H1 y primeras 60 palabras

Base jurídica: uso nominativo descriptivo del art. 37 de la Ley 17/2001 de Marcas y del art. 14 del RMUE, en los términos de `docs/legal/anterioridades-sospechario.md`. **Pendiente de luz verde expresa de `experto-legal` sobre los ocho puntos de `arbol-web.md` §3.2 antes de publicar cualquier `/juegos-como-*`.**

### 3.1 La fórmula, en cuatro capas

**Capa 1 — la URL.** La marca ajena solo aparece dentro de una carpeta que ya la encuadra como comparación.
- Correcto: `/juegos-como-murdoku/online`, `/juegos-como-murdle`
- Prohibido: `/murdoku`, `/murdoku-online`, `/murdoku-gratis`, `/es/murdoku`, cualquier subdominio `murdoku.sospechario.com`
- Precedente de lo que **no** se copia: cluedoku.app publica `/es/murdoku` con el título literal «Murdoku online en español». Es exactamente el uso a título de marca que nuestra fórmula evita.

**Capa 2 — el `<title>`.** La marca ajena nunca abre el título y nunca aparece sin el marco comparativo. La marca propia siempre está.

**Capa 3 — el `<h1>`.** Siempre con «como», «alternativa a», «si te gusta», «parecido a» o en pregunta. Un solo `h1` por página, con «Sospechario» presente.

**Capa 4 — las primeras 60 palabras (regla GEO nueva 1).** La frase de no afiliación va **dentro del primer párrafo**, no solo en el aviso del pie. Motivo: un modelo que extraiga el primer 30 % de la página debe leer «Sospechario es un juego independiente». Si no, el riesgo real es que ChatGPT o Gemini nos resuman como «la versión en español de Murdoku», que es justo el uso a título de marca que no podemos permitirnos.

**Párrafo canónico de apertura (59 palabras), que se adapta pero no se reinventa:**

> Sospechario es un juego diario de deducción y misterio en español: cada día un caso nuevo, con solución única garantizada por un motor lógico, que se resuelve en 5-15 minutos sin registrarse. Es un juego independiente: el libro Murdoku es una marca de sus titulares y no estamos afiliados a ellos. El caso de hoy se juega aquí abajo.

### 3.2 Las tres reglas GEO nuevas

1. **No afiliación en las primeras 60 palabras** (arriba).
2. **El genérico delante de la marca ajena, siempre en la primera mención de cada bloque:** «el libro Murdoku», «el juego Murdle», «la web murdoku.com». Nunca «Murdoku» como sustantivo común, nunca «nuestros murdokus». Nosotros publicamos **casos de deducción**.
3. **Ninguna cifra ajena sin medio y fecha:** «17 ediciones (Xataka, julio de 2026)», «2,36/5 con 63.000 descargas en 30 días (Google Play, consultado el 5/9/2026)». Es lo que convierte la comparativa en publicidad comparativa lícita y, de paso, lo que los motores citan.

### 3.3 Prohibiciones absolutas

- Marca ajena en el nombre del producto, dominio, subdominio, logo, favicon, nombre de la PWA, `manifest.name`, nombre en tiendas, cuentas de redes o hashtag principal
- Marca ajena en imágenes OG, capturas, nombres de personajes o títulos de casos
- Reproducir portada, tipografía, ilustraciones, personajes o textos del libro o de la web ajena
- Sustantivar la marca ajena como si fuera nuestra categoría
- Usar la marca ajena como *anchor text* de enlaces internos hacia `/`
- Pujar por «murdoku» en Google Ads sin criterio previo por escrito de `experto-legal` (es un supuesto jurídicamente distinto y más expuesto que el SEO)

### 3.4 Obligaciones en cada página de `/juegos-como-*`

1. Un **caso jugable completo por encima del pliegue**. Sin juego no se publica la página. Es la única defensa real contra que Google la trate como *doorway*
2. Aviso visible de no afiliación, con enlace a `/legal/marcas`
3. **Comparación honesta y verificable**: se dice qué hace mejor el otro producto. Denigrar es lo que convierte un uso descriptivo lícito en publicidad comparativa ilícita
4. Enlace saliente al producto original
5. Fecha de última revisión visible

### 3.5 Ejemplos de `<title>` y `<meta description>` por página

Títulos ≤ 70 caracteres, descripciones ≤ 158. La marca propia cierra siempre.

| URL | `<title>` | `<meta description>` |
|---|---|---|
| `/` | El caso de misterio de cada día — Sospechario | Un caso nuevo cada día, en español, con solución única garantizada. Se juega en 5-15 minutos, gratis y sin registrarse. Hoy toca «El interrogatorio». |
| `/juegos-como-murdoku` | Juegos como Murdoku: qué son y dónde jugar uno hoy \| Sospechario | Qué es un Murdoku, en qué se parece y en qué se diferencia de Sospechario, y un caso de deducción jugable ahora mismo. Comparativa honesta y actualizada. |
| `/juegos-como-murdoku/online` | Juegos como Murdoku online y gratis: el caso de hoy \| Sospechario | Juego independiente de deducción en español: el caso de hoy, jugable en el navegador, gratis y sin registro. Murdoku es marca de sus titulares. |
| `/juegos-como-murdoku/en-espanol` | ¿Buscas un Murdoku en español? Juega un caso de hoy \| Sospechario | Escrito en español, no traducido: nombres, humor y escenarios propios, un caso nuevo cada día y solución única certificada. Juego independiente. |
| `/juegos-como-murdoku/gratis` | Juegos como Murdoku gratis, sin registro y sin anuncios \| Sospechario | Qué es gratis para siempre y qué no, sin letra pequeña. El caso del día no se pone nunca detrás de pago. Nunca un anuncio para desbloquear una pista. |
| `/juegos-como-murdoku/sin-descargar` | Jugar sin descargar nada: instálalo en dos toques \| Sospechario | No hace falta app: se instala desde el navegador en dos toques y funciona sin conexión. Comparativa de las apps de tienda, con nota y fecha. |
| `/juegos-como-murdoku/como-se-juega` | Cómo se juega a un Murdoku: reglas en 6 pasos y ejemplo \| Sospechario | Las reglas explicadas con un caso 3×3 resuelto y un vídeo de 90 segundos. En qué se diferencia de un sudoku y qué es «un caso de deducción». |
| `/juegos-como-murdoku/para-imprimir` | Casos de deducción para imprimir en PDF, propios \| Sospechario | PDF generados por nuestro motor, con solución razonada al dorso. Una hoja gratis sin dar el correo. No publicamos ni enlazamos libros de terceros. |
| `/juegos-como-murdoku/para-ninos` | Casos de deducción para niños: desde 8 años, sin víctima \| Sospechario | Misma lógica, ninguna víctima: quién se llevó el último trozo de tarta. Edad recomendada con criterio explicado, PDF gratis y cero anuncios. |
| `/juegos-como-murdle` | ¿Juegos como Murdle en español? Un expediente cada jueves \| Sospechario | No existe versión oficial de Murdle en español: esto es lo más parecido, escrito en español. Cuadrícula lógica jugable y pack imprimible en A4. |
| `/juegos-diarios` | Juegos diarios en español: la lista y el caso de hoy \| Sospechario | Los juegos diarios que se pueden jugar hoy en español, incluidos los de otros, y un caso de deducción nuevo cada día. Actualizado cada mes. |
| `/juegos-de-detectives` | Juegos de detectives online gratis: interroga y resuelve \| Sospechario | Aquí no eliges opciones: preguntas. Un caso nuevo cada día con solución única garantizada, en el navegador y sin instalar nada. |
| `/una-sola-solucion` | Una sola solución, y se resuelve sin adivinar: así lo garantizamos \| Sospechario | Cómo el motor prueba que cada caso tiene exactamente una respuesta, cómo se mide la dificultad y qué hace y qué no hace la IA. Erratas publicadas. |
| `/para-profesores` | Casos de lógica para el aula, por curso, con rúbrica \| Sospechario | Fichas de 2.º a 6.º de primaria con competencia, tiempo de aula y solución razonada. Muestra gratis y licencia de aula para 35 copias. |

**Títulos prohibidos, para que no haya duda:** `Murdoku online gratis | Sospechario`, `Murdoku en español`, `Juega al Murdoku`, `Murdle online en español`.

---

## 4. GEO por tipo de página

Los datos que lo justifican: `phrase_questions` mide **10 búsquedas/mes** de «qué es murdoku» mientras el término mueve 33.100. Esa diferencia se está haciendo en ChatGPT, Perplexity, Gemini y en el bloque generativo de la propia SERP. En España, AI Overviews sale en ~25-30 % de las búsquedas informativas, AI Mode está activo desde octubre de 2025 y ChatGPT concentra el 70,5 % del tráfico de IA. Orden de prioridad de motores: **ChatGPT > Google (AI Overviews + AI Mode) > Perplexity > Gemini > Claude**.

### 4.1 Reglas transversales de todas las páginas indexables

1. **Respuesta directa en el primer 30 % de la página**, ≤ 60 palabras, autocontenida, sin «en este artículo veremos». El 44 % de las citas de ChatGPT sale del primer 30 % de la página.
2. **HTML servido, no dependiente de JS.** Enunciado, plano o rejilla, pistas, reglas, FAQ, tabla, precios y contadores en la primera respuesta. Solo el tablero se hidrata. Prueba de aceptación: `curl` de cada URL P0 contiene el enunciado y las pistas.
3. **Definición explícita «qué es»** con patrón *«X es un Y que Z»* bajo un `h2` en forma de pregunta.
4. **FAQ real con `FAQPage`**, 4-8 preguntas por página, redactadas como las haría una persona, respuesta de 40-80 palabras que **empieza afirmando**.
5. **Datos propios con fuente y fecha.** Somos la fuente primaria de cifras que nadie más tiene. Cita ajena, siempre con medio y fecha (regla GEO 3).
6. **Autoría verificable**: autor con página `/autores/[slug]`, `sameAs` reales, `datePublished` y `dateModified` visibles en el texto, no solo en el schema.
7. **Entidad consistente**, literal y sin variaciones creativas, en `/`, `/sobre-nosotros`, `llms.txt`, `Organization.description`, `manifest`, bios sociales y kit de prensa:
   > **«Sospechario es un juego diario de deducción y misterio en español: cada día un caso nuevo, con solución única garantizada por un motor lógico, que se resuelve en 5-15 minutos sin registrarse.»**
   Descriptor corto para el `<title>` y el logo: **«el caso de misterio de cada día»**.
8. **Encabezados en forma de pregunta** y párrafos de 40-80 palabras.
9. **Tablas comparativas en `<table>`**, nunca en imagen ni en `div`.
10. **Fecha visible y «2026»** en comparativas y listas: todas las listas que hoy se citan lo llevan.
11. **`llms.txt`** el día 1. Se publica porque cuesta cero: el 97 % de esos ficheros no recibió ni una petición y Google dice que lo ignora. **No se le atribuye ningún efecto ni se mide con él.**

### 4.2 Tabla por tipo de página

| Tipo | Bloque de respuesta directa (≤60 palabras) | FAQ obligatoria | Dato propio citable | Schema |
|---|---|---|---|---|
| **Home / jugable** | Qué es, cómo se juega, cuánto dura, cuánto cuesta | 4: gratis, registro, duración, hora del cambio de caso | Casos publicados a hoy; tasa media de resolución | `VideoGame` + `WebSite` + `Organization` |
| **Caso por fecha** | Qué caso es, de qué día de la semana y qué regla tenía | — | Dificultad medida, nº de pistas, % de resolución, tiempo medio, técnica que exigía (TR) | `VideoGame` + `BreadcrumbList` |
| **Solución / archivo razonado** | Qué técnica exigía y en cuántos pasos se cerraba | 2: ¿había otra solución?, ¿se podía sin adivinar? | Cadena del certificado, % que lo resolvió sin Sabueso | `Article` + `HowTo` |
| **Cómo jugar / reglas** | La regla en una frase | 5-6 | Tiempo medio por día de la semana | `HowTo` + `FAQPage` + `VideoObject` |
| **Comparativa de marca ajena** | Definición «qué es» + no afiliación en las mismas 60 palabras | 5-8 de las preguntas de §4.4 | Nuestra tasa de resolución frente al «no hay dato» del otro | `FAQPage` + `BreadcrumbList` + `VideoGame` del caso incrustado |
| **Landing de intención** | Respuesta literal a la consulta en la primera frase; precio y gratuidad explícitos | 4-6 | Casos publicados; qué es gratis para siempre | `VideoGame` + `FAQPage` |
| **Hub de categoría** | Qué es la categoría y qué hay aquí que no hay en un portal de minijuegos | 4 | Tabla comparativa con terceros, fechada | `CollectionPage` + `FAQPage` + `VideoGame` |
| **Página de día de la semana** | La regla de ese día en una frase | 3 | % de resolución y tiempo medio **de ese día** | `VideoGame` + `BreadcrumbList` |
| **Técnicas / escalafón** | Qué es la técnica y cuándo se aplica | 4 | % de casos del mes que la exigían (TR) | `Article` + `HowTo` |
| **Guía de estrategia** | Técnica nombrada, cuándo aplicarla, error típico | 3-4 | Punto de atasco medido | `Article` + `HowTo` + `Person` |
| **Blog** | Dato propio en los dos primeros párrafos | — | El dato del mes | `Article` con `author` `Person` y `sameAs` |
| **Packs / tienda** | Qué incluye, cuántos casos, formato, precio con IVA | 4 | Nº de casos y distribución de dificultad medida | `Product` + `Offer` |
| **Profesores** | Curso, edad, competencia, tiempo de aula | 4 | Tasa de resolución por curso, cuando exista | `LearningResource` + `FAQPage` |
| **Institucional / metodología** | Quién, dónde, desde cuándo, cómo se financia · cómo se garantiza la solución única | 4-6 | Erratas reconocidas y reparaciones automáticas | `Organization` + `AboutPage` / `Article` + `FAQPage` |
| **Legal** | Qué dice esta página, en una frase | — | — | — |

**Reglas duras de implementación:** un solo bloque JSON-LD por página, validado en CI con un test que falle el build si no valida; `BreadcrumbList` en todo lo que cuelga de un hub, coherente con la migaja visible; **nunca `AggregateRating` inventado**.

### 4.3 `robots.txt` y rastreadores

`Allow` explícito para las tres familias de rastreadores, porque bloquear los de **recuperación** elimina el sitio de las respuestas:
- Entrenamiento: `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, `Applebot-Extended`
- Recuperación para citar: `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`, `Bingbot`, `Applebot`
- Agentes de usuario: `ChatGPT-User`, `Claude-User`, `Perplexity-User`

`Disallow` solo `/api/`, `/_next/data/`, `/buscar`, `/cuenta`, `/entrar`.
**Comprobación obligatoria antes del día 1:** las reglas «bloquear bots de IA» de Cloudflare y Vercel vienen activadas por defecto en algunos planes. Si el CDN devuelve 403 a `OAI-SearchBot`, no existimos para ChatGPT por muy bien escrito que esté el `robots.txt`.

### 4.4 Panel de 25 preguntas de medición

Las 25 marcadas ★ en `docs/seo/analisis-geo.md` §2. Se consultan **el día 1 de cada mes** en ChatGPT (con búsqueda, sesión sin memoria), Google AI Overviews + AI Mode (privado, `gl=es`/`hl=es` y segunda pasada `gl=mx`), Perplexity y Gemini. Dos localizaciones: España y México. Hoja: `docs/seo/geo-seguimiento.csv`.

| # | Pregunta (redacción conversacional) | URL destino |
|---:|---|---|
| 1 | ¿Hay un Murdoku online en español? | `/juegos-como-murdoku/en-espanol` |
| 2 | ¿Dónde puedo jugar al Murdoku gratis? | `/juegos-como-murdoku/gratis` |
| 4 | ¿Hay app oficial de Murdoku? ¿Cuál es la app para Android o iPhone? | `/juegos-como-murdoku/sin-descargar` |
| 5 | ¿Qué juegos hay parecidos a Murdoku? ¿Alternativas? | `/juegos-como-murdoku` |
| 6 | ¿Cómo se juega al Murdoku? ¿Cuáles son las reglas? | `/juegos-como-murdoku/como-se-juega` |
| 7 | ¿Qué es un Murdoku? | `/juegos-como-murdoku` |
| 9 | ¿Hay Murdokus para niños? ¿A partir de qué edad? | `/juegos-como-murdoku/para-ninos` |
| 10 | ¿Hay Murdokus en PDF gratis o para imprimir? | `/juegos-como-murdoku/para-imprimir` |
| 13 | ¿Cómo sé que un caso tiene una sola solución? | `/una-sola-solucion` |
| 18 | ¿Hay murdoku online en México? ¿Y en Argentina? | `/juegos-como-murdoku/online` |
| 19 | ¿Se puede jugar a Murdle online en español? | `/juegos-como-murdle` |
| 20 | ¿Juegos como Murdle gratis? ¿Alternativas a Murdle? | `/juegos-como-murdle` |
| 21 | ¿Murdle o Murdoku? ¿Diferencias? ¿Cuál elegir? | `/juegos-como-murdle` + FAQ en `/juegos-como-murdoku` |
| 24 | ¿Qué es una cuadrícula lógica de «quién, dónde y con qué»? | `/reglas/expediente` |
| 25 | ¿Qué es un juego de deducción? | `/como-jugar` |
| 26 | Recomiéndame un juego de lógica diario para el móvil | `/juegos-diarios` |
| 29 | ¿Juegos de detectives online gratis para resolver crímenes? | `/juegos-de-detectives` |
| 35 | ¿Un juego de misterio diario en español con un caso nuevo cada día? | `/` y `/juegos-de-misterio` |
| 44 | ¿Sospechario es gratis? ¿Hace falta registrarse? | `/` y `/juegos-como-murdoku/gratis` |
| 46 | ¿Los casos tienen siempre una única solución? ¿Se resuelven sin adivinar? | `/una-sola-solucion` |
| 47 | ¿Los casos los escribe una IA? | `/una-sola-solucion` |
| 49 | ¿Quién está detrás de Sospechario? | `/sobre-nosotros` |
| 50 | ¿Qué es Sospechario? | `/`, `/sobre-nosotros`, `llms.txt` |
| 51 | ¿Qué diferencia a Sospechario de Murdoku? ¿No es una copia? | `/juegos-como-murdoku` |
| 57 | ¿Qué es el modo Expediente? ¿Y el modo Escena? | `/reglas/expediente`, `/reglas/escena` |

**Qué se registra por fila:** `fecha`, `motor`, `pais`, `pregunta_id`, `pregunta_literal`, `aparece_sospechario`, `posicion_cita`, `url_citada`, `frase_exacta`, `competidores_citados`, `dato_correcto`, `dice_independiente`, `hay_bloque_ia`, `captura`.

**Objetivos, fijados antes del dato.** Mes 1: rastreados por los cuatro motores, 0 respuestas 403 a bots de IA, panel base registrado (puede ser 0/25). Mes 3: **8 de 25** en **2 de 4** motores, tasa de error 0, «dice independiente» en el 100 % de las citas de la familia Murdoku, 3 menciones ganadas. Mes 6: **15 de 25** en **3 de 4**, una lista «games like» en inglés y otra en español, referidos desde asistentes ≥ 3 % de las sesiones nuevas, demanda de marca `sospechario` ≥ 500 impresiones/mes en Search Console.

**Señales automáticas semanales:** informe de IA generativa de Search Console (impresiones en AI Overviews y AI Mode por página y país), canal propio de referidos en PostHog (`chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`, `copilot.microsoft.com`, `bing.com/chat`, `you.com`), recuento de rastreadores de IA en logs con alerta si un agente lleva 14 días a cero o devuelve 403. Entre el 35 y el 70 % de las sesiones desde asistentes llegan sin *referrer* y se cuentan como directo: por eso **la demanda de marca en Search Console es el mejor indicador de que GEO funciona**.

**Qué se hace con el dato.** Pregunta sin cita durante dos meses → se revisa la página contra los requisitos 7 y 9 y se busca una mención ganada para esa pregunta. Cita con dato falso → se corrige la respuesta directa y se registra la fecha. Cita que no dice «independiente» → aviso a `experto-legal` y se refuerza el párrafo de las 60 palabras. Competidor citado donde nosotros no → se anota **qué formato tiene su página** (lista, tabla, vídeo) y se replica el formato, nunca el texto.

---

## 5. Internacional

### 5.1 Decisión: una sola variante al lanzar

`<html lang="es">`, `hreflang="es"` y `hreflang="x-default"` apuntando a la misma URL. **Sin `es-ES`, sin `es-MX`, sin `es-419`.**

El criterio correcto, y es una corrección al de v1: **una variante hreflang se abre cuando hay texto distinto que servir, no cuando hay demanda distinta.** Dos URL con contenido idéntico y hreflang entre ellas no ganan nada, multiplican por tres lo que hay que rastrear e indexar y canibalizan en un dominio sin autoridad. La demanda se captura con una sola página bien escrita.

Mientras tanto, la localización se hace **por contenido, no por URL**, con cuatro detalles que ningún tercero tiene hoy:
- El caso cambia a **medianoche de la hora local del dispositivo** (D-007), y eso se dice literalmente en `/juegos-como-murdoku/online` y en `/`
- «Celular» y «en línea» aparecen como sinónimos en el texto de `/juegos-de-detectives`, `/juegos-de-misterio` y `/sin-descargar`
- La palabra de categoría cambia de continente y se respeta: `/enigmas` y `/acertijos` se escriben con el vocabulario de LatAm; `pasatiempos` se reserva para España y para `/para-medios`
- `/juegos-de-misterio` se redacta pensando en México (1.300 frente a 260) y `/juegos-diarios` pensando en Argentina (KD 20 frente a 37)

### 5.2 Disparadores para abrir `/ar/` y `/mx/`

| País | Variante | Disparador, escrito antes del dato |
|---|---|---|
| **Argentina** `/ar/` (`es-AR`) | **La primera** | Único mercado con **diferencia real de texto**: el **voseo** en botones, microcopy, correo diario y el especial «tú eres sospechoso» («resolvé el caso», «elegí a un sospechoso», «tenés tres preguntas»), cuya propiedad de motor ya incluye concordancia tuteo/voseo. Se abre cuando (a) el texto voseado exista y esté revisado por dos hablantes, y (b) Argentina supere el **15 % de las sesiones orgánicas** durante cuatro semanas. Demanda que lo sostiene: 18.800/mes con cabecera |
| **México** `/mx/` (`es-MX`) | Segunda, condicionada | Sin voseo, el texto sería idéntico salvo media docena de sustantivos. Se abre cuando (a) se resuelva la **anomalía de la cabecera** —`murdoku online` vale 2.400 pero `murdoku` no devuelve dato, y la relación cabecera/online es 3,34 en España y 3,41 en Argentina— y (b) haya escenarios y léxico propios. **Si la consulta 1 de la §9 revela que la cabecera sí tiene volumen, México adelanta a Argentina** |
| **Chile, Colombia, Perú, Uruguay, Ecuador** | No, y **no hay datos para decidirlo** | Cero palabras medidas. Chile es el que más papeletas tiene: murdoku.com recibe ~9.500 visitas/mes desde Chile frente a ~46.000 desde España, es decir, aproximadamente **la mitad de tráfico por habitante**, la intensidad más alta medida fuera de España. Un dato de tráfico del incumbente no justifica una variante, pero sí justifica medirlo primero |

Cuando se abran: `hreflang` recíproco completo, **sin redirección automática por IP** (solo un aviso con enlace), y precios en moneda local si existe Premium.

### 5.3 Los hubs `/enigmas` y `/acertijos` como puerta LatAm

Es la pieza nueva de este árbol y sustituye a abrir variantes antes de tiempo. Los datos:

| Palabra | España | México | Argentina |
|---|---:|---:|---:|
| `pasatiempos` | **27.100** | 6.600 | 2.900 |
| `acertijos` | 8.100 | **22.200** | 5.400 |
| `enigmas` | 1.300 | **14.800** | **9.900** |

En España la categoría se llama *pasatiempos*; en México y Argentina se invierte. Dos páginas en español neutro, escritas con la palabra que usa LatAm, capturan 37.000+ búsquedas/mes al otro lado del Atlántico **sin abrir una sola variante de idioma, sin duplicar URL y sin riesgo de canibalización**. Por eso suben de P2 a P1 y por eso su compuerta es de catálogo (vistazos propios jugables), no de idioma.

### 5.4 Orden de entrada

**1.º España** — 21.300/mes de intención de jugar más 33.100 de cabecera, y toda la estructura P0 está diseñada para ese mercado.
**2.º Argentina** — la ola de marca ya llegó (cabecera 9.900), `juegos diarios` con **KD 20** es la entrada genérica más barata de las tres bases, `wordle espanol` 5.400 en un país de ~46 M frente a 1.000 en uno de ~130 M (el hábito de juego diario ya está instalado), y el coste marginal es casi nulo: las páginas ya existen y lo único nuevo es el voseo, que ya está en el plan de producto.
**3.º México, condicionado** a la consulta 1 de la §9. Es el mayor mercado por población y el que más volumen de categoría tiene medido, pero su intención de jugar la marca ajena (3.400) es casi igual a la argentina (3.160) sobre casi el triple de población.
**4.º Chile**, con la advertencia de que puede que no sea el cuarto: está ahí por falta de datos, no por falta de mercado.
**5.º Colombia y Perú · 6.º Uruguay y Ecuador**, sin ningún dato. Uruguay comparte voseo, es decir, comparte variante con `/ar/`.

**Advertencia de calendario que vale para los cinco:** la ventana del fenómeno es de 6-12 meses. Entrar en LatAm persiguiendo `murdoku` en el mes 8 puede ser llegar a una ola que ya rompió. **La parte del plan latinoamericano que no caduca es la de categoría** —`enigmas`, `acertijos`, `juegos de misterio`, `juegos diarios`—, y en LatAm esa parte es proporcionalmente mucho mayor que en España.

---

## 6. Reglas técnicas

### 6.1 Canónicas

- Autocanónica absoluta en todas las páginas indexables, con dominio y sin parámetros
- **Sin `www`, HTTPS, sin barra final**, una sola forma; el resto, 301
- Cada `/archivo/AAAA-MM` es autocanónica: no se canonicaliza al hub ni se pagina más allá del mes
- **Facetas:** solo se indexan las dos de modo, las tres de dificultad y, en P2, los escenarios con ≥ 8 casos. Cualquier combinación (dificultad × mes × escenario × modo) es `noindex, follow`, y **no se generan enlaces rastreables hacia combinaciones no indexables**
- **Parámetros:** `?utm_*`, `?ref`, `?duelo`, `?compartido` → canónica a la URL limpia, y configurado también en el CDN para no servir variantes cacheadas distintas
- Las variantes `/murdoku-online` y compañía son **301**, nunca canónicas

### 6.2 El caso de hoy

**El caso de hoy vive solo en `/`.** `/caso/[fecha de hoy]` responde **302** a `/`; a las 00:00 del día siguiente pasa a **200** con autocanónica y entra en el sitemap. Así no hay dos URL con el mismo contenido ni canónicas que cambien de destino cada día. `/caso/[numero]` es 301 a la URL fechada.

Mismo trato para `/expediente` y `/expediente/[fecha de hoy]`.

### 6.3 Qué se indexa y qué no

**Se indexa:** `/`, `/escena`, `/expediente`, `/archivo` y meses, `/caso/*` y `/expediente/*` desde D+1, `/caso/*/solucion` **desde D+8**, las facetas de modo y de dificultad, `/dias` y las siete páginas de día, todas las `/juegos-como-*`, todos los hubs de categoría propia, `/como-jugar`, `/reglas/*`, `/tecnicas`, `/escalafon`, `/guias/*`, `/soluciones`, `/vistazo`, `/una-sola-solucion`, `/erratas`, `/blog` y artículos, `/autores/*`, `/packs` y fichas, `/para-imprimir`, `/premium`, `/para-medios`, `/para-profesores`, `/prensa`, `/sobre-nosotros`, `/contacto`, `/legal/*`.

**`noindex, follow`:** `/caso/*/solucion` antes de D+8, `/duelo/*`, `/r/*`, `/buscar`, facetas combinadas, escenarios con menos de 8 casos, previsualizaciones, `/tecnicas/[slug]` mientras no pasen su compuerta.

**`noindex, nofollow`:** `/entrar`, `/cuenta/*`, pasarela y confirmaciones.

**Bloqueado en robots:** `/api/*`, `/_next/data/*`, staging (además con autenticación básica).

**Regla anti-contenido-fino del archivo (crítica).** Una página de caso solo se publica indexable si cumple **todo**: título propio, ≥ 120 palabras únicas de ambientación y enunciado, dificultad medida por el motor, número de pistas, día de la semana y su regla, técnica que exigía según el certificado (TR) y —desde que haya partidas suficientes— tasa de resolución y tiempo medio. Si falta algo, `noindex` y se revisa.

Dos motivos, y el segundo es nuevo: publicar 365 casos idénticos salvo por los nombres es la forma más rápida de que Google clasifique todo el archivo como plantilla vacía; y **un modelo que rastree 365 páginas casi iguales aprende que el sitio es una plantilla**, con lo que las citas se van a las 25-30 páginas de concepto. Por eso `sitemap-casos.xml` solo lleva casos con ficha completa y **`llms.txt` no enumera casos**.

Auditoría mensual: URL indexadas del archivo / URL con al menos una impresión en Search Console. **Si baja del 30 %, se poda con `noindex`.** La misma regla vale para `/archivo/escenario/*`, `/acertijos` y `/enigmas`.

### 6.4 Sitemaps, Search Console y Bing

- `/sitemap.xml` como índice; `sitemap-core.xml` (home, modos, hubs, institucionales), `sitemap-landings.xml`, `sitemap-casos.xml` (máx. 5.000 URL por fichero, paginado por año), `sitemap-blog.xml`, `sitemap-packs.xml`
- `lastmod` real por URL, generado en el build diario de las 00:00. **Sin `priority` ni `changefreq`** (Google los ignora)
- Solo URL 200 e indexables. Ninguna URL con `noindex` entra en el sitemap. El caso del día entra en D+1
- **Alta y verificación en Google Search Console y Bing Webmaster Tools el día 1.** Bing no es opcional: alimenta a Copilot y a parte del ecosistema de ChatGPT
- Comprobar si el informe «IA generativa» de Search Console (junio de 2026) está disponible para la propiedad: da impresiones en AI Overviews y AI Mode por página y país

### 6.5 `llms.txt`

En la raíz el día 1: tres frases de entidad (las literales del requisito 7 de §4.1), las 20 URL más útiles con una línea de descripción cada una, qué se puede citar, cómo citarnos y contacto. **No enumera casos.** Se publica porque cuesta 30 minutos y **no se mide nada con él**: no hay evidencia de efecto.

### 6.6 Rendimiento y datos estructurados

- **Core Web Vitals móvil como criterio de aceptación**, no como mejora posterior: LCP < 2,5 s, INP < 200 ms, CLS < 0,1. El tablero se pinta con CSS Grid desde el HTML servido; nada de esqueletos que se reemplacen tras la hidratación
- Fuentes autoalojadas con `font-display: swap`; imágenes en AVIF/WebP con `width`/`height`; sin librerías de animación en la ruta crítica
- Un solo bloque JSON-LD por página, validado en CI
- El zoom nativo del navegador **nunca** se desactiva (`user-scalable=no` prohibido)

---

## 7. Canibalización

### 7.1 Los seis pares del análisis GEO

| # | Conflicto | Por qué ocurre | Resolución |
|---:|---|---|---|
| 1 | `/juegos-como-murdoku/online` · `/en-espanol` · `/gratis` · `/sin-descargar` | Las cuatro responden a «jugar Murdoku online gratis en español sin descargar». Google elegirá una y las otras oscilarán | **`/online` es la única página «jugar ahora»** y la canónica de la intención principal. Las otras tres **no repiten su primer párrafo ni su FAQ**: `/en-espanol` habla de idioma nativo y de LatAm; `/gratis`, de qué es gratis para siempre, del registro y del compromiso de anuncios; `/sin-descargar`, de la PWA y de la tabla de apps de tienda. Comprobación en Search Console a los 60 días (páginas por consulta): **si dos URL alternan para la misma consulta durante cuatro semanas, se fusionan con 301** |
| 2 | `/como-jugar` · `/reglas/escena` · `/juegos-como-murdoku/como-se-juega` | Tres páginas explican cómo se juega | `/como-jugar` = tutorial jugable de Sospechario en 60 s, con la definición de la **categoría**. `/reglas/escena` = referencia del modo, sin marca ajena, sin `HowTo` duplicado (el suyo es del modo, no del juego ajeno). `/juegos-como-murdoku/como-se-juega` = **la única con marca ajena** y la única con `HowTo` sobre el juego ajeno, más la desambiguación con el sudoku |
| 3 | `/juegos-diarios` · `/archivo` | Las dos apuntan a `juegos diarios` (2.900) | `/juegos-diarios` = landing de categoría: la lista honesta de juegos diarios en español, incluidos terceros, más el caso de hoy. `/archivo` = calendario y contadores, y apunta a `puzzle diario` (70/17), `casos para resolver` (170/16) y `pasatiempos diarios`. **`/juegos-diarios` no lleva calendario y `/archivo` no lleva lista de terceros** |
| 4 | `/juegos-de-detectives` · `/juegos-de-misterio` | Misma intención en México | `/juegos-de-detectives` = **resolver casos** (interrogatorio, apps, celular, LatAm). `/juegos-de-misterio` = **ambientación** y escape rooms, con FAQ honesta y enlaces salientes. FAQ completamente distintas y ningún párrafo compartido |
| 5 | `/juegos-como-murdle` · `/reglas/expediente` | Las dos explican la cuadrícula lógica | `/reglas/expediente` = definición y `HowTo` **sin marca ajena** (es la que debe ganar la pregunta 24, «qué es una cuadrícula lógica»). `/juegos-como-murdle` = comparativa, «cuál elegir» y el pack imprimible |
| 6 | `/caso/[hoy]` · `/` | Duplicado diario | Resuelto en §6.2: 302 a `/` hasta D+1 |

### 7.2 Los tres pares nuevos que crean las mecánicas finales

| # | Conflicto | Resolución |
|---:|---|---|
| 7 | `/vistazo` · `/juegos-como-murdoku/faciles` · `/archivo/dificultad/facil` | Tres páginas ofrecen «lo fácil». **`/vistazo` es el producto** (un caso de dos minutos con numeración propia) y se queda `juegos de ingenio` (480/15) y `acertijos faciles`. **`/faciles` es la intención de marca ajena** y se queda `murdoku facil` (170/0), con tres consejos con nombre de técnica que `/vistazo` no lleva. **`/archivo/dificultad/facil` es archivo**: listado con contadores y un caso fácil del histórico. Si dos de las tres alternan a los 60 días, se fusionan `/faciles` → `/vistazo` con 301 |
| 8 | `/juegos-como-murdoku/para-imprimir` · `/para-imprimir` · `/packs` | La de marca ajena capta la intención `murdoku pdf` y **enlaza**; `/para-imprimir` es la misma oferta sin marca ajena y es la que sobrevive si la moda se enfría; `/packs` es la tienda con `Product`/`Offer` y **no compite por ninguna palabra informacional**. Ninguna de las tres repite el primer párrafo. La de marca ajena lleva el aviso de intención; las otras dos, no |
| 9 | `/tecnicas` · `/escalafon` · `/guias/*` | `/tecnicas` = catálogo de las 26 con mini-caso por técnica. `/escalafon` = la progresión, los rangos y el cuaderno de dos apartados; se queda `juegos de logica y razonamiento` (210/12). `/guias/*` = piezas de estrategia largas con autor y caso al final. **Regla: una técnica se explica en `/tecnicas` y en ningún otro sitio**; las guías la citan con enlace, no la reexplican |

### 7.3 Regla general de arbitraje

Cuando dos URL compiten, **gana la que tiene el juego más completo dentro**, no la que tiene mejor texto. Y el criterio de fusión está fijado antes del dato: **cuatro semanas de alternancia para la misma consulta en el informe de páginas de Search Console = 301 de la perdedora a la ganadora**, sin discusión ni excepciones.

---

## 8. Diversificación: cómo dejar de depender de la marca ajena

### 8.1 El problema, con el número

De las ~23.000 búsquedas/mes de intención directa que cubría el árbol v1, **21.300 llevaban la marca ajena: el 93 %**. Este árbol baja esa cifra al **75 % el día 1** (26.140 de 34.680) simplemente por subir cuatro landings de categoría propia a P0, y al **50 % en el mes 3**.

No es una preocupación teórica. Hay dos escenarios y los dos hacen daño:
- **La moda se enfría en 2027.** Semrush ya muestra el pico de `murdoku` en los dos últimos meses.
- **Peor para nosotros: se consolida con una app oficial.** Los pies de los vídeos de @cristinini repiten «Pronto haremos los Murdokus de la App». Si el editor o el autor lanzan una app oficial en español, `murdoku app`, `murdoku online` y `descargar murdoku` pasan a ser **navegacionales hacia ella** y la rama `/juegos-como-murdoku/*` pierde la mitad de su intención de golpe.

### 8.2 Objetivo mes a mes, con la palanca de cada mes

Volumen ES medido y asignado a una sola URL. «Dependencia» = volumen de marca ajena atacado / volumen total atacado.

| Mes | URL nuevas | Palanca principal | Demanda **no** de marca añadida | Dependencia | Objetivo verificable |
|---|---:|---|---:|---:|---|
| **0 · lanzamiento** | 35 | Los cuatro hubs de categoría propia a P0 (`/juegos-diarios`, `/juegos-de-detectives`, `/juegos-de-logica`, `/para-imprimir`) | 8.540 | **75 %** | Las cuatro publicadas, jugables y con tabla comparativa fechada. `juegos de deduccion` (KD 0) reclamada en `Organization`, `llms.txt` y home |
| **1** | +6 | `/vistazo`, `/soluciones`, `/dias` + tres días, `/escalafon` | +3.140 | **69 %** | ≥ 100 palabras clave posicionadas, de las cuales **≥ 35 % sin marca ajena**. 3 menciones ganadas (§8.3) |
| **2-3** | +22 | Lanzamiento del modo Expediente: `/expediente`, `/juegos-como-murdle`, `/packs`, `/para-profesores`, `/acertijos`, `/enigmas`, `/juegos-de-misterio` | +19.480 | **50 %** | 8 de 25 preguntas GEO citadas en 2 de 4 motores. Demanda de marca `sospechario` medible en Search Console |
| **4-6** | +12 | `/juegos-para-pensar`, `/expediente/invertido`, `/duelos`, facetas de escenario, primeros `/tecnicas/[slug]` promocionados | +8.600 | **44 %** | 15 de 25 preguntas en 3 de 4 motores. `sospechario` ≥ 500 impresiones/mes. Una lista «games like» en inglés y otra en español |
| **7-12** | Variante `/ar/`, `/mx/` según §5.2 | LatAm por categoría, no por marca ajena | MX 5.580 + AR 5.460 de categoría, más 52.830 de `acertijos` y `enigmas` si pasan la compuerta | **< 40 %** | La consulta navegacional `sospechario` supera en clics a la landing `/juegos-como-murdoku/online`. Ese es el día en que el proyecto deja de depender de nadie |

### 8.3 Las cinco palancas que no son páginas

Los motores citan **lo que otros dicen de nosotros** más que lo que decimos nosotros: el 88 % de las URL citadas por IA no está en el top 10 de Google, y los estudios coinciden en que se prefieren los medios ganados al contenido de marca. Estas cinco valen más que diez landings.

1. **La entidad de categoría.** Definir y repetir literalmente «juego diario de deducción» **antes de que lo ocupe Loxik, murderox o un medio**. Cuesta cero y es irreversible una vez ganada. Es la frase que queremos que un modelo asocie a Sospechario cuando nadie diga «Murdoku».
2. **Prensa que ya cubre el género y ya ha sido citada por el buscador**: Xataka, Genbeta, Xataka Android, Hipertextual, Educación 3.0, SerPadres, Telecinco, Que.es, Nokton Magazine, Think Big. Ángulo: «el primer juego diario de deducción **escrito** en español, con solución única garantizada por un motor». El dato que se les da son **nuestros contadores**.
3. **Listas «games like»**: thinkygames.com (envío de juego), dailydle.org (agregador), murdermysterygameai.com, mindglegames.com, playinquest.com, y murdoku.fans/games-like-murdoku, que es una guía de fans declarada «tributo» y probablemente acepte una entrada. **No se pide inclusión a cluedoku.app**, que es competidor directo.
4. **Vídeo corto y YouTube propio.** YouTube es el dominio más citado por AI Overviews (20,9 %). El formato está probado en este mismo género: «resuelve este caso en 60 segundos». Creadores a los que se ofrece el caso del día 12 horas antes y un «caso con tu nombre»: @cristinini, @martamartiuss, @martstips, @bymaria.aug, @guilletokman (AR).
5. **Reddit y comunidad**: r/murdoku ya rankea en la SERP de `murdoku online`; además r/puzzles, r/WebGames, r/juegos, r/argentina, r/mexico. Cuenta real, una entrada de presentación y respuestas cuando alguien pida «algo como Murdle en español». Nada de spam.

Y dos que no dependen de ningún buscador y son el seguro definitivo: **la newsletter diaria** (un correo al día, sin excepciones) y **la PWA instalada** con el compartir sin spoiler.

### 8.4 Cuatro señales que disparan aceleración

- Un tercero anuncia app oficial de Murdoku en español → se congela la inversión en la rama `/juegos-como-murdoku/*` (se mantiene, no se amplía) y se adelantan `/acertijos`, `/enigmas` y `/juegos-para-pensar` un trimestre
- `murdoku` cae más de un 30 % interanual en Semrush → misma respuesta
- La rama de categoría propia supera el 40 % de las sesiones orgánicas → se adelanta `/ar/`
- Enigmic (app de deducción en español que ya anuncia retos diarios) publica su reto diario → alerta competitiva a `analista-competencia`, y su racimo de marca entra en la primera tanda de medición

---

## 9. Pendiente de medir

**Semrush no tiene unidades ahora mismo.** Esta es la cola, ordenada por decisiones desbloqueadas por unidad gastada. Se ejecuta de arriba abajo y se para donde se acaben las unidades: cada tanda es útil por sí sola. Unidades: <https://www.semrush.com/mcp-access>.

### 9.1 Orden de ejecución

| # | Consulta | Qué desbloquea | Por qué va aquí |
|---:|---|---|---|
| **1** | **`phrase_all`** de la cabecera y sus modificadores, una llamada por palabra, **todas las bases a la vez**: `murdoku`, `murdoku online`, `murdoku gratis`, `murdoku en espanol`, `jugar murdoku`, `murdoku app`, `descargar murdoku`, `murdoku pdf`, `murdoku para imprimir`, `como se juega al murdoku`, `murdoku soluciones`, `murdle`, `murdle online`, `enigmic`, `cluedoku` | Resuelve la **anomalía de México** (§5.2) y dimensiona Chile, Colombia, Perú, Uruguay y Ecuador **de golpe**. Decide el orden de entrada internacional | Es la forma más barata de cubrir siete países. Una consulta decide si México adelanta a Argentina |
| **2** | **`domain_ranks`** de `murdoku.com` y de `murdle.com` | Tráfico orgánico del incumbente **en todas las bases**: la mejor aproximación al tamaño real de la demanda de producto por país. Confirma o desmiente el dato de Chile | Dos llamadas, siete mercados dimensionados |
| **3** | **`phrase_these`** de la familia **dos jugadores y aula** (`juego de detectives para dos`, `juegos de logica cooperativos`, `juegos de logica en grupo`, `juegos de deduccion para el aula`, `juego de detectives para profesores`, `juegos de logica para clase`, `actividades de logica primaria`, `acertijos de detectives para ninos`, `escape room en casa`, `juegos de mesa de detectives`) | Decide si `/juegos-para-dos` existe. **Sostiene dos mecánicas firma condicionadas** y una línea de negocio | Es el vacío de datos más caro: hoy hay **una sola palabra medida y es mala** (KD 69) |
| **4** | **`phrase_these`** de reconfirmación: `juegos de logica`, `murdle pdf`, `juegos como murdoku`, `acertijos para imprimir`, `misterios para resolver` | `juegos de logica` aparece con 480/KD 33 y con 1.600/KD 27 en dos documentos: es la primera fila de la que no me fío. `murdle pdf` no tiene KD y bloquea el brief | Cinco filas, cinco decisiones |
| **5** | **`phrase_these`** de marcas ajenas sin medir: `cluedoku`, `caseoku`, `enigmic`, `clues by sam`, `endless cases`, `whodoku`, `murder sudoku`, `dailymurder` + modificadores | Dimensiona a los competidores reales. Enigmic es el producto en español más parecido al nuestro y **no estaba en la tabla de competidores** | |
| **6** | **`phrase_organic`** de las 11 palabras no-marca de mayor volumen (`pasatiempos`, `pasatiempos gratis`, `acertijos`, `pasatiempos online`, `pasatiempos diarios`, `sudoku diario`, `juegos diarios`, `acertijos para ninos`, `acertijos para adultos`, `acertijos con respuesta`, `juegos como murdoku`) | **Decide si `/acertijos` y `/enigmas` se publican** y cuánto de `juegos diarios` es navegacional hacia eldiario.es | `acertijos para ninos` es la SERP que más decide: si es blog puro, entramos con producto |
| **7** | **`phrase_fullsearch`** sobre `murdoku`, `murdle`, `juegos de logica`, `juegos de detectives`, `acertijos`, `juegos diarios`, `pasatiempos para imprimir` (ES) y sobre `murdoku`, `enigmas`, `acertijos`, `juegos de logica` en `mx`, `ar`, `cl` | Encuentra **las palabras que nadie ha pensado en escribir**. Es la carencia metodológica más importante del conjunto: todo lo que sabemos viene de `phrase_these`, o sea, de lo que a alguien se le ocurrió teclear | Es la consulta que más probablemente produzca una sorpresa |
| **8** | **`phrase_these`** en `mx`, `ar`, `cl`, `co`, `pe` con `export_columns` `Ph,Nq,Kd,Cp,Td` | Recupera **CPC y tendencia**, que faltan en las 152 filas de España y en las 36 de LatAm | Es lo único que falta para que el CSV esté completo |
| **9** | **`phrase_these`** del léxico regional sin verificar: `rompecabezas`, `puzle`, `puzzle`, `juegos de ingenio`, `adivinanzas`, `acertijos mentales`, `juegos de logica para celular`, `computadora`, `fichas de logica para imprimir` | Decide cómo se escriben los títulos de LatAm. Ninguna está medida y **ninguna debe usarse para redactar hasta tenerla** | |
| **10** | **`phrase_organic`** de `murdoku online` y `juegos de logica` en `mx` y `ar` | Si hay clones locales instalados o la SERP está tan fragmentada como en España | |
| **11** | **`phrase_these`** del resto de intenciones y preguntas: `un caso al dia`, `juego detective diario`, `juegos tipo wordle`, `cluedo para imprimir`, `como se juega al murdle`, `murdoku donde jugar`, `hay murdoku online`, `alternativa a murdoku`, `juegos parecidos a murdle`, `cual es mejor murdle o murdoku` | Cola larga y preguntas de la rama comparativa | |
| **12** | **Bloque educación** en `mx`, `ar`, `cl`, `co`, `pe` | `/para-profesores` en LatAm. Aviso: el calendario escolar latinoamericano **no coincide** con el español, y eso afecta al lanzamiento de los packs de profesor | |

### 9.2 Comprobaciones manuales que cuestan cero y deberían hacerse esta semana

Ninguna gasta una unidad de API. Las tres primeras cambian decisiones que hoy están tomadas a ciegas.

1. **Abrir a mano en Google España** `murdoku online`, `como se juega al murdoku` y `acertijos para ninos`, y anotar si sale **AI Overview**, *People Also Ask* y carrusel de vídeo. Resuelve los códigos de SERP **36, 38 y 52** de Semrush, que llevan pendientes desde el árbol v1. Si el 36 es el bloque generativo —y su presencia en casi todas las consultas del racimo lo sugiere—, **toda la §4 pasa de recomendable a obligatoria**.
2. **Los pies de vídeo de @cristinini**: abrir los vídeos y confirmar a qué se refiere «Pronto haremos los Murdokus de la App» (¿app oficial del editor?, ¿NozCore?, ¿otra?). Es el argumento más fuerte a favor de acelerar la §8 y puede cambiar la prioridad de toda la rama de marca ajena.
3. **murdoku.com a mano**: idiomas reales de la interfaz, si hay caso **diario** o solo semanal, duelos, ligas, Premium. Hoy las fuentes se contradicen (murdoku.fans dice inglés y portugués) y esa fila sostiene la tabla comparativa de **todas** las landings `/juegos-como-*`. Sin verificarla, la comparativa honesta no es honesta: es una suposición.
4. **cluedoku.app a mano**: idioma real (¿traducción automática?), si afirma solución única, autoría, precio, y el texto exacto de `/es/murdoku` y `/games-like-murdle`. Es el competidor más parecido y el que hoy se lleva la respuesta a «murdoku online en español».
5. **murdoku.fans**: quién lo firma y si acepta entradas en `/games-like-murdoku`. Aparece en 14 de 41 consultas en español: es el dominio que más veces sale.
6. **Instalar y jugar Enigmic** (`analista-competencia`): idioma real, calidad de las pistas, si garantiza solución única, modelo de negocio, si ya tiene reto diario.
7. **Cloudflare/Vercel**: comprobar la regla por defecto de bloqueo de bots de IA del plan contratado. Si devuelve 403 a `OAI-SearchBot`, el `robots.txt` no sirve de nada.
8. **Search Console**: si el informe «IA generativa» está disponible para propiedades nuevas en España.
9. **r/murdoku**: tamaño y reglas de autopromoción, antes de publicar nada allí.
10. **elarbolblanco.com, madresdesterradas.es, dailydle.org y thinkygames.com**: contacto, formulario de envío y requisitos.

### 9.3 Lo que hoy no tenemos y hay que decir en voz alta

- **Cero datos de CPC** en todo el repositorio. Ninguna conversación sobre Google Ads puede sostenerse hoy, y además exige criterio previo por escrito de `experto-legal`.
- **Cero tendencia a 12 meses como serie.** Solo hay ocho etiquetas cualitativas heredadas (`explosiva`, `nueva`, `subiendo`, `estable`, `0→1,00 en 2 meses`, `0→máx último mes`).
- **Cinco países sin una sola palabra medida** (Chile, Colombia, Perú, Uruguay, Ecuador), y Chile es el que más señal indirecta tiene.
- **La familia de dos jugadores es casi entera una hipótesis**, y sostiene dos mecánicas firma.
- **`murdle pdf` no tiene KD**, y es la palabra que decide cómo se escribe la landing de Expediente.

---

## 10. Plan de contenidos del lanzamiento

### 10.1 Qué hay que tener escrito y jugable el día 1

**30 páginas de texto** (las 36 indexables menos los 6 casos de archivo, que los genera el motor), más 1 vídeo, más 4 activos de producto.

| Bloque | Páginas | Palabras aprox. | Escribe | Revisa | Implementa |
|---|---:|---:|---|---|---|
| Rama Murdoku (9) | hub + 8 landings | 700-900 cada una | `periodista-contenidos` | **`experto-legal` (bloqueante)** | `desarrollador-frontend` |
| Categoría propia e imprimibles (5) | `/juegos-diarios`, `/juegos-de-detectives`, `/juegos-de-logica`, `/para-imprimir`, `/packs` | 600-800 | `periodista-contenidos` | `estratega-growth-seo` | frontend |
| Aprender y confianza (5) | `/como-jugar`, `/reglas`, `/reglas/escena`, `/una-sola-solucion`, `/erratas` | 500-1.200 | `periodista-contenidos` + `ingeniero-motor-puzzles` (metodología) | `revisor-calidad` | frontend |
| Juego y archivo (3) | `/`, `/archivo`, `/archivo/AAAA-MM` | 200-400 + contadores | `periodista-contenidos` + `analista-datos` (contadores) | — | frontend + backend |
| Marca y negocio (3) | `/sobre-nosotros`, `/premium`, `/contacto` | 300-600 | `periodista-contenidos` | `estratega-negocio` (`/premium`) | frontend |
| Legal (5) | 4 legales + `/legal/marcas` | — | **`experto-legal`** | — | frontend |
| Vídeo (1) | Reglas de Escena, 60-90 s, YouTube + transcripción | — | `creador-social` + `periodista-contenidos` | — | frontend |
| Activos de producto (4) | `PDF-CEBO` (5 casos), hoja de trabajo en blanco, expediente de una página de muestra, `llms.txt` | — | `ingeniero-motor-puzzles` + `disenador-ux-ui` | `revisor-calidad` | frontend |

**Criterios de aceptación del día 1, verificables:**
- `curl` de cada una de las 30 URL devuelve el enunciado, las pistas y la FAQ en el HTML (§4.1.2)
- Las 9 páginas de marca ajena tienen la frase de no afiliación **dentro de las primeras 60 palabras** y el caso jugable por encima del pliegue
- Lighthouse móvil ≥ 90 en rendimiento y accesibilidad en las 30
- Un solo bloque JSON-LD por página y el test de schema en verde en CI
- Search Console y Bing Webmaster Tools verificados, sitemap enviado, `llms.txt` publicado, `robots.txt` sin 403 a los 11 agentes de IA
- Vigilancia gratuita de TMview activada sobre `sospech*` en ES y EM, y primera captura en Wayback Machine (prueba fechada de uso, D-006)

**Bloqueantes, en orden:** (1) luz verde de `experto-legal` sobre los ocho puntos de uso de marca ajena; (2) nombre y dominio cerrados (bloquean títulos, `Organization`, `llms.txt` y la entidad); (3) las tres comprobaciones manuales 1-3 de §9.2, porque la tabla comparativa depende de ellas.

### 10.2 Semanas 2-8

| Semana | Qué se publica | Por qué en ese orden |
|---|---|---|
| **2** | Nota de prensa a los 10 medios de §8.3 (con el expediente OEPM ya redactado) · primer artículo de blog · alta en `/prensa` | La prensa cita lo nuevo, y «lo nuevo» dura tres semanas |
| **3** | `/vistazo` (si el catálogo pasa C0-5) · `/dias` + `/dias/el-corto` · primeros 3 vídeos cortos | El vistazo desbloquea `/faciles` y da producto a `juegos de ingenio` (KD 15) |
| **4** | `/soluciones` + primeras `/caso/*/solucion` (los casos del día 1 cumplen D+8 en la semana 2, pero el hub necesita 7 para no ser una página vacía) · envío a listas «games like» | Es la primera pieza que ningún competidor puede copiar |
| **5** | `/escalafon` · `/tecnicas` con las 14 de Escena · `/autores/*` · `/guias/resolver-sin-adivinar` | Requiere que la prueba de nombres (5 personas) haya pasado. **Si no ha pasado, no se publica: se reescriben los nombres** |
| **6** | `/dias/el-interrogatorio` · `/juegos-de-misterio` · segundo artículo de datos («los datos de [mes]») | El interrogatorio es la firma; su página va cuando el miércoles lleva 4 semanas publicándose |
| **7** | `/para-profesores` + `/packs` con ficha de `PDF-AULA` en preventa · `/para-profesores/hoja-a-hoja-b` si pasó la prueba de aula | `acertijos para ninos` (2.400/KD 22) es el mayor volumen atacable fuera de la marca ajena |
| **8** | `/archivo/dificultad/facil` y `/experto` · `/archivo/modo/escena` · primer panel GEO de 25 preguntas registrado | El archivo necesita 8 semanas de casos para que las facetas no sean contenido fino |

### 10.3 Calendario editorial del primer trimestre

Un vídeo corto cada dos días y tres artículos al mes es el ritmo sostenible con este equipo. La columna «métrica» es lo que se mira **ese** mes, no todo lo que se mide.

| Semana | Páginas nuevas | Blog / datos | Vídeo y social | Medios ganados y comunidad | Responsable principal | Métrica de la semana |
|---|---|---|---|---|---|---|
| **S1** | Las 30 del día 1 + 6 casos | Artículo de lanzamiento | 3 vídeos «resuelve este caso en 60 s» + vídeo de reglas | Presentación en r/murdoku y r/juegos | `estratega-growth-seo` | Indexación: 36/36 en Search Console |
| **S2** | `/prensa` | «Cómo garantizamos que hay una sola solución» | 3 vídeos | **Nota de prensa a 10 medios** · 20 microcreadores de BookTok y pasatiempos | `periodista-contenidos` | 1.000 sesiones · D1 ≥ 35 % |
| **S3** | `/vistazo`, `/dias`, `/dias/el-corto` | — | 3 vídeos + primer «caso del sábado explicado» en YouTube | Contacto con elarbolblanco.com y madresdesterradas.es | `creador-social` | Tasa de activación desde landing ≥ 25 % |
| **S4** | `/soluciones` + 7 soluciones | «Los datos de [mes 1]»: casos publicados, tasa de resolución por día | 3 vídeos | Envío a thinkygames.com y dailydle.org | `analista-datos` | ≥ 60 palabras clave posicionadas |
| **S5** | `/escalafon`, `/tecnicas`, `/autores/*` | Guía «resolver sin adivinar» | 3 vídeos + «el escalafón explicado» | Hacker News / Product Hunt con la pieza del certificado del solver | `periodista-contenidos` | Primer panel GEO base (puede ser 0/25) |
| **S6** | `/dias/el-interrogatorio`, `/juegos-de-misterio` | Entrevista o análisis del género | 3 vídeos del miércoles | Reddit: respuestas a «algo como Murdle en español» | `creador-social` | 3.000 sesiones orgánicas |
| **S7** | `/para-profesores`, `/packs` | Guía docente en abierto | 3 vídeos + 1 para docentes | Grupos de Facebook de docentes; Genially como alianza | `periodista-contenidos` | 300 correos de `PDF-CEBO` |
| **S8** | Facetas de archivo (4) | «Los datos de [mes 2]» | 3 vídeos | Segunda ronda de prensa con el dato propio | `analista-datos` | **Panel GEO: ≥ 3 de 25** |
| **S9** | `/expediente`, `/reglas/expediente` | «Qué es una cuadrícula lógica» | 3 vídeos + vídeo de reglas de Expediente | — | `director-producto` | Lanzamiento del modo sin errata |
| **S10** | `/juegos-como-murdle`, `/dias/la-tabla-del-comisario` | «Murdle o Murdoku: en qué se diferencian» (comparativa honesta) | 3 vídeos del jueves | Envío a las listas «games like» **en inglés** con el argumento «el único en español» | `periodista-contenidos` + `experto-legal` | `murdle online` en top 10 (KD 0) |
| **S11** | `/acertijos`, `/enigmas` (si pasan compuerta) | «Los enigmas que sí tienen una sola respuesta» | 3 vídeos con registro neutro para LatAm | r/argentina, r/mexico | `estratega-growth-seo` | Primeras sesiones de MX y AR ≥ 10 % |
| **S12** | `/packs/[slug]` completos · `/para-medios` (con OEPM listo) | «Los datos del trimestre» | 3 vídeos | **Primera conversación B2B** (dispara D-006: la solicitud tiene que estar presentada o lista) | `estratega-negocio` | 250 unidades de pack o 1 piloto B2B |
| **S13** | Revisión: fusiones por canibalización, poda del archivo | Retrospectiva pública de erratas | 3 vídeos | — | `estratega-growth-seo` | **Panel GEO: 8 de 25 en 2 de 4 motores** |

### 10.4 Reparto de trabajo que sale de este documento

| Qué | Quién | Cuándo |
|---|---|---|
| Briefs de las 30 páginas del día 1 (intención, H1, contenido jugable, FAQ, enlaces internos, metadatos) | `estratega-growth-seo` → los redacta `periodista-contenidos` | Tras la luz verde legal |
| Luz verde sobre los ocho puntos de uso de marca ajena + redacción de `/legal/marcas` y del aviso de no afiliación | `experto-legal` | **Bloqueante del día 1** |
| Expediente OEPM (clases 9 y 41, valorar 16) redactado y presupuestado | `experto-legal` + usuario | **Antes de la semana 2** |
| Las diez comprobaciones manuales de §9.2 | `estratega-growth-seo` (1-5, 7-10) + `analista-competencia` (6) | Esta semana |
| Cola de medición de §9.1 en cuanto haya unidades, y actualización de los tres CSV | `estratega-growth-seo` | En cuanto haya unidades |
| Contadores públicos en HTML con fecha de cálculo (`/archivo`, `/una-sola-solucion`, `/dias/*`) | `analista-datos` + `desarrollador-backend` | Día 1 |
| `robots.txt`, sitemaps, `llms.txt`, schema con test en CI, Bing y Search Console | `desarrollador-frontend` | Día 1 |
| Vídeo de reglas de Escena (60-90 s) con transcripción | `creador-social` + `periodista-contenidos` | Día 1 |
| Panel GEO mensual de 25 preguntas en 4 motores y 2 países | `estratega-growth-seo`, hoja de `analista-datos` | Día 30 y cada día 1 |

---

*Cambios a este documento: los registra `estratega-growth-seo` con fecha y motivo. Las decisiones que se derivan de él —imprimibles a P0, `/juegos-diarios` y `/juegos-de-detectives` a P0, reapertura de las soluciones en D+8, fusión de `/como-creamos-los-casos` en `/una-sola-solucion`, `/enigmas` y `/acertijos` como puerta LatAm, y la no indexación individual de las técnicas— las registra `director-producto` en `docs/decisiones.md`.*
