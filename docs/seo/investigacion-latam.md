# Investigación de palabras clave — Latinoamérica

Fecha: 6 de septiembre de 2026
Responsable: `seo-crecimiento`
Estado: **v0.1 incompleta — la investigación encargada NO se ha podido ejecutar.**
Tabla de datos: `docs/seo/keywords-latam.csv`

---

## 0. Estado: por qué este documento no tiene los datos que debería

La investigación pedida (bases `mx`, `ar`, `cl`, `co`, `pe`, `uy`, `ec` con `phrase_these` y `phrase_fullsearch`) **no se ha ejecutado**. La cuenta de Semrush está activa pero **no tiene unidades de API suficientes**, y todas las llamadas devuelven el mismo error. Se reintentó ocho veces sobre seis endpoints distintos (`keyword_research`, `domain_overview`, `organic_research`, `competitors_research`, `get_report_schema`, `execute_report`), incluyendo una llamada con parámetros corregidos tras un error de formato: el mensaje es idéntico y es de nivel de cuenta, no transitorio.

Para conseguir unidades de API adicionales: **https://www.semrush.com/mcp-access**

**Consecuencia práctica:** no hay ni una cifra nueva en este documento. Todo lo que contiene procede de la consulta de Semrush **del 5 de septiembre de 2026** ya registrada en `docs/arbol-web.md` §1 y `docs/keywords-arbol-web.csv`, más un dato de `docs/analisis-estrategico.md` §2.1. Nada está estimado, extrapolado ni redondeado a ojo; lo que no se midió aparece como `sin dato`.

**Lo que sigue sin saberse, y es la mayor parte del encargo:**

| Bloque del encargo | Estado |
|---|---|
| Bases `cl`, `co`, `pe`, `uy`, `ec` | **Cero datos.** Ninguna keyword consultada en ninguna de las cinco |
| Marca ajena `enigmic`, `cluedoku` (cualquier país) | **Cero datos** |
| Modificadores de marca en LATAM (`gratis`, `jugar`, `app`, `descargar`, `para imprimir`, `cómo se juega`, `soluciones`) | **Cero datos.** En MX y AR solo hay medidos `online`, `en español` y `pdf` |
| Léxico regional (`rompecabezas` / `puzzle` / `puzle`, `juegos de ingenio`, `adivinanzas`, `acertijos mentales`, `para celular`, `sin descargar`) | **Cero datos.** Solo hipótesis, marcadas como tales en §3 |
| Bloque educación (6 keywords) | **Cero datos** salvo `juegos de logica para ninos` en MX y AR |
| CPC y tendencia 12 meses | **Cero datos en toda LATAM.** Nunca se pidieron esas columnas en la consulta de septiembre |
| Tráfico de `murdoku.com` / `murdle.com` por país | Solo un dato indirecto de Chile (§2.3) |
| `phrase_organic` de `murdoku online` y `juegos de logica` en MX y AR | **No ejecutado.** Solo existe la SERP de España |

En la §6 está el plan de consultas listo para lanzar en una sola pasada cuando haya unidades, ordenado por coste/información.

---

## 1. Alcance de lo que sí está medido

36 filas en `keywords-latam.csv`: 18 keywords en México y 18 en Argentina, todas de la consulta del 5/9/2026. De ellas, solo **7 tienen KD por país** (las cuatro de marca Murdoku en cada base y `juegos diarios` en AR). El resto lleva `sin dato` en KD, y es importante que siga así: la columna `kd` de `docs/keywords-arbol-web.csv` es la **KD de España** y reutilizarla como KD de México o Argentina sería inventar un dato.

---

## 2. Tamaño de cada mercado

### 2.1 México (medido)

**Marca ajena — 5.000/mes medidos:**

| Keyword | Volumen | KD |
|---|---|---|
| murdoku online | 2.400 | 30 |
| murdoku pdf | 1.600 | 34 |
| murdoku en español | 1.000 | 32 |
| murdle | 10 | sin dato |
| **murdoku (cabecera)** | **sin dato** | — |

De esos 5.000, la **intención de jugar** son 3.400 (`online` + `en español`); `murdoku pdf` es intención mixta de descarga y, como en España, buena parte busca el libro pirateado.

**Genéricos — 50.890/mes medidos** (14 keywords). Pero la cifra hay que despiezarla, porque agregada no significa nada:

- **Listado, no juego (37.000):** `acertijos` 22.200 + `enigmas` 14.800. Volumen enorme e intención de leer una lista con respuestas, no de jugar. Solo capturable con hubs jugables reales.
- **Navegacional de medios (6.600):** `pasatiempos`. En España este racimo es de El País, 20minutos, La Vanguardia y ABC. **Está sin verificar si en México pasa lo mismo con Reforma, El Universal o Milenio**, y es una consulta barata que cambia si `/pasatiempos-online` tiene sentido en LATAM o no.
- **No atacable (1.000):** `wordle español`.
- **Núcleo direccionable con nuestro producto (6.070):** `juegos diarios` 2.400, `juegos de misterio` 1.300, `juegos de detectives` 880, `juegos para pensar` 720, `acertijos de logica` 390, `juegos de logica para ninos` 210, `juegos de logica` 140, `juegos de logica online` 30. Más `pasatiempos para imprimir` 110 y `cluedo online` 110.

**Mercado direccionable medido en México: ≈9.500/mes** (3.400 de marca ajena con intención de jugar + 6.070 de genéricos con encaje de producto).

**El dato que más llama la atención de México: `juegos de misterio` vale 1.300, cinco veces el volumen de España (260).** Y `juegos de detectives` 880 frente a 320 de España, casi el triple. México no busca la marca ajena, busca la categoría.

### 2.2 Argentina (medido)

**Marca ajena — 14.360/mes medidos:**

| Keyword | Volumen | KD |
|---|---|---|
| murdoku | 9.900 | 29 |
| murdoku online | 2.900 | 27 |
| murdoku pdf | 1.300 | 32 |
| murdoku en español | 260 | 29 |
| murdle | sin dato | — |

Intención de jugar: 3.160 (`online` + `en español`). La cabecera, 9.900, es navegacional.

**Genéricos — 29.390/mes medidos** (14 keywords), despiezados igual:

- **Listado (15.300):** `enigmas` 9.900 + `acertijos` 5.400.
- **Navegacional de medios (2.900):** `pasatiempos`. Mismo aviso que en México, con Clarín y La Nación.
- **No atacable (5.400):** `wordle español`. Nótese que Argentina busca `wordle español` cinco veces más que México (1.000) teniendo un tercio de su población: el hábito de juego diario en Argentina ya existe.
- **Núcleo direccionable (5.750):** `juegos diarios` 2.400 (**KD 20**), `juegos para pensar` 1.300, `juegos de logica` 880, `juegos de detectives` 720, `juegos de logica para ninos` 170, `acertijos de logica` 140, `juegos de misterio` 110, `juegos de logica online` 30.

**Mercado direccionable medido en Argentina: ≈8.900/mes** sin contar la cabecera; **≈18.800/mes** contándola.

**Los dos datos que mandan en Argentina:** la cabecera `murdoku` ya vale 9.900 (la ola de marca **ya llegó**), y `juegos diarios` tiene **KD 20 frente a 37 en España**: es la puerta genérica más barata de todo el conjunto medido, ES incluida.

### 2.3 Chile, Colombia, Perú, Uruguay, Ecuador

**Sin ninguna keyword medida.** El único dato disponible es indirecto y viene de `analisis-estrategico.md` §2.1: **murdoku.com recibe ~9.500 visitas/mes desde Chile**, frente a ~46.000/mes desde España.

Ese dato solo sirve para una cosa, pero es importante: puesto contra la población (Chile ~20 M, España ~48 M; cifras de contexto, no de Semrush), el incumbente recibe en Chile **aproximadamente la mitad de tráfico por habitante que en España**. Es la intensidad más alta medida fuera de España, por encima de cualquier señal que tengamos de México. **Chile no es el cuarto mercado por defecto: es el que primero hay que medir.**

De Colombia, Perú, Uruguay y Ecuador no hay absolutamente nada, ni directo ni indirecto. Queda además por confirmar que las bases `uy` y `ec` existan en el plan contratado.

### 2.4 La anomalía de México, que es la pregunta más importante de todo el documento

`murdoku online` vale 2.400 en México, pero **la cabecera `murdoku` no devuelve dato en la base mx** (y el análisis anterior de julio la daba en 0). Eso es raro y admite dos lecturas opuestas con consecuencias contrarias:

- **Lectura A:** la ola mexicana está empezando y la demanda todavía es de cola (`online`, `pdf`) sin marca instalada. México es un mercado pequeño hoy y grande en seis meses.
- **Lectura B:** es un hueco de la base de datos. La relación cabecera/`online` es **3,34 en España** (33.100/9.900) y **3,41 en Argentina** (9.900/2.900), sospechosamente estable. Si México se comportara igual, la cabecera estaría en el entorno de las 8.000 búsquedas y México sería, hoy, un mercado comparable a Argentina.

**No se puede elegir entre A y B con los datos que hay, y la diferencia entre una y otra cambia el orden de entrada.** Ninguna de las dos cifras se ha escrito en el CSV: la aritmética de la lectura B es una hipótesis, no un dato. Resolverlo cuesta una sola consulta (§6, consulta 1).

---

## 3. Diferencias léxicas por país

### 3.1 La única diferencia léxica que está medida, y es grande

**La palabra de categoría cambia de continente.** Comparando las tres bases con el mismo dato del 5/9/2026:

| Keyword | España | México | Argentina |
|---|---|---|---|
| pasatiempos | 27.100 | 6.600 | 2.900 |
| acertijos | 8.100 | **22.200** | 5.400 |
| enigmas | 1.300 | **14.800** | **9.900** |

En España la categoría se llama **pasatiempos** (27.100) y `enigmas` es residual (1.300). En México y Argentina se invierte: `enigmas` multiplica por 11 y por 7,6 el volumen español, y en México `acertijos` casi triplica al español. Ajustado por población el contraste es aún mayor.

**Qué implica para títulos y textos:** un `<title>` o un `<h2>` que en España se escribe con "pasatiempos" pierde en LATAM, y al revés. Los hubs `/acertijos` y `/enigmas` están hoy marcados como **P2** en `arbol-web.md` §2.5 con el volumen español (8.100 y 1.300). Con el dato de LATAM sobre la mesa, **`/enigmas` es una página española de bajo interés y una página latinoamericana de primer orden**, y su prioridad debe revisarse en el momento en que se decida entrar en MX o AR, no antes.

### 3.2 Hipótesis léxicas SIN VERIFICAR

Ninguna de estas está medida. Van aquí para que la consulta de la §6 las incluya, y **no deben usarse para redactar nada hasta tener volumen**:

| Variante | Hipótesis | Por qué importa |
|---|---|---|
| `rompecabezas` (LATAM) vs `puzle`/`puzzle` (ES) | La forma latinoamericana es `rompecabezas` | Afecta a `/juegos-de-logica`, a los packs y a cualquier título con "puzle" |
| `celular` (LATAM) vs `móvil` (ES) | `juegos de logica para celular` debería existir en MX/AR/CO y no en ES | Landing de PWA e instalación; hoy `/juegos-como-murdoku/sin-descargar` está escrita en español de España |
| `computadora` (LATAM) vs `ordenador` (ES) | Igual | Textos de "jugar en el navegador" |
| `juegos de ingenio` | Uso más argentino que español (480 medidos en ES) | Puede ser una puerta barata en AR |
| `adivinanzas` | Fuerte en el ámbito escolar latinoamericano | Bloque educación y `/para-profesores` |
| `acertijos mentales` | Forma latinoamericana frente a `juegos mentales` (1.600 en ES) | Hub de categoría |
| `fichas` (ES escolar) vs `actividades`/`ejercicios` (LATAM) | El profesor español pide "fichas para imprimir"; el mexicano o argentino, otra cosa | `/para-profesores` y los packs |

### 3.3 El voseo argentino: no es léxico, es interfaz

Argentina es el único mercado del conjunto donde **el texto de producto cambia de verdad**, y no por vocabulario sino por conjugación: "resolvé el caso", "elegí a un sospechoso", "tenés tres preguntas". Afecta a botones, microcopy, correo diario y, de forma explícita, al especial "tú eres sospechoso" (`propuesta-jugabilidad.md`, ficha 18), cuya propiedad de motor ya incluye "concordancia en segunda persona (tuteo/voseo)".

Esto es lo que convierte a Argentina en el primer candidato real a variante propia, y el argumento no es de volumen (§4).

Aviso relacionado, ya registrado en `propuesta-jugabilidad.md` §3.2: los nombres de las 14 técnicas del escalafón deben pasar por **dos hablantes de LatAm** en la prueba de cinco personas, con la regla "si un nombre necesita explicación en Rosario, se cambia". Esa prueba es también la ocasión más barata para validar media docena de las hipótesis de la §3.2 sin gastar una unidad de API.

---

## 4. Las 10 oportunidades por país

Criterio: volumen × facilidad × encaje con el producto. **Solo se pueden ordenar México y Argentina**; de los otros cinco países no hay datos para hacer una lista.

### 4.1 México

| # | Keyword | Vol. | KD | Página | Coste marginal |
|---|---|---|---|---|---|
| 1 | murdoku online | 2.400 | 30 | `/juegos-como-murdoku/online` | **Cero: la página ya está en el plan P0** |
| 2 | juegos de misterio | 1.300 | sin dato | `/juegos-de-misterio` | Cero. La landing **ya está pensada para México** en `arbol-web.md` §2.5 |
| 3 | murdoku en español | 1.000 | 32 | `/juegos-como-murdoku/en-espanol` | Cero (P0) |
| 4 | juegos diarios | 2.400 | sin dato | `/juegos-diarios` | Cero (P1) |
| 5 | juegos de detectives | 880 | sin dato | `/juegos-de-detectives` | Cero (P1) |
| 6 | murdoku pdf | 1.600 | 34 | `/juegos-como-murdoku/para-imprimir` + `/packs` | Bajo. Intención mixta: no se persigue la del libro pirateado |
| 7 | juegos para pensar | 720 | sin dato | `/juegos-para-pensar` | Bajo (hoy P2) |
| 8 | acertijos de logica | 390 | sin dato | `/acertijos` | Medio: exige acertijos propios jugables |
| 9 | juegos de logica para ninos | 210 | sin dato | `/juegos-como-murdoku/para-ninos`, `/para-profesores` | Bajo. En España la misma keyword tiene KD 8 |
| 10 | enigmas | 14.800 | sin dato | `/enigmas` | **Alto**, y por eso va el último pese a ser el mayor volumen: intención de listado. Solo con hub jugable |

Lo que **no** está en la lista y debería comprobarse antes de cerrarla: los modificadores `gratis`, `jugar`, `app`, `descargar`, `como se juega`, `para imprimir` y `soluciones` sobre "murdoku" en base mx. En España esos siete modificadores suman más volumen que `murdoku online` sola. **Esta lista de 10 está construida sobre 18 keywords; la de España se construyó sobre más de 100.**

### 4.2 Argentina

| # | Keyword | Vol. | KD | Página | Coste marginal |
|---|---|---|---|---|---|
| 1 | murdoku | 9.900 | 29 | `/juegos-como-murdoku` (hub) | Cero (P0) |
| 2 | murdoku online | 2.900 | 27 | `/juegos-como-murdoku/online` | Cero (P0). KD 27, la más baja de las tres bases |
| 3 | juegos diarios | 2.400 | **20** | `/juegos-diarios` | Cero (P1). **La KD más baja de todo el conjunto medido** |
| 4 | juegos para pensar | 1.300 | sin dato | `/juegos-para-pensar` | Bajo (hoy P2). Cinco veces el volumen español |
| 5 | murdoku pdf | 1.300 | 32 | `/juegos-como-murdoku/para-imprimir` | Bajo, con el mismo aviso de intención |
| 6 | juegos de logica | 880 | sin dato | `/juegos-de-logica` | Cero (P1) |
| 7 | juegos de detectives | 720 | sin dato | `/juegos-de-detectives` | Cero (P1) |
| 8 | murdoku en español | 260 | 29 | `/juegos-como-murdoku/en-espanol` | Cero (P0) |
| 9 | juegos de logica para ninos | 170 | sin dato | `/para-profesores` | Bajo |
| 10 | enigmas | 9.900 | sin dato | `/enigmas` | Alto, mismo motivo que en México |

Mismo aviso: faltan los modificadores de marca, y en Argentina falta además saber si `murdle` tiene volumen (la base no devolvió dato).

---

## 5. hreflang: qué países lo justifican y cuáles no

**La decisión de `arbol-web.md` §5.2 —una sola variante `es` + `x-default` al lanzar— se mantiene, y los datos de LATAM no la contradicen.** Pero conviene corregir el criterio con el que se abrirá la primera subcarpeta, porque el documento actual lo ata al volumen y eso es un error.

**Criterio correcto: una variante hreflang se abre cuando hay texto distinto que servir, no cuando hay demanda distinta.** Dos URL con contenido idéntico y hreflang entre ellas no ganan nada, multiplican el rastreo y canibalizan en un dominio sin autoridad. La demanda se captura con una sola página bien escrita.

Aplicado:

| País | ¿Variante propia? | Motivo |
|---|---|---|
| **Argentina** | **Sí, la primera.** `/ar/` con `es-AR` | Único mercado con **diferencia real de texto**: voseo en botones, microcopy, correo diario y el especial "tú eres sospechoso". No es una traducción cosmética, es otra conjugación en toda la interfaz. Y la demanda medida (18.800 con cabecera) sostiene el coste |
| **México** | Todavía no | Sin voseo, el texto sería idéntico al de España salvo media docena de sustantivos (§3.2). Se abre cuando se resuelva la anomalía de la cabecera (§2.4) **y** haya escenarios y léxico propios. Antes de eso, `/juegos-de-misterio` y `/juegos-de-detectives` en español neutro ya capturan lo medido |
| **Chile, Colombia, Perú, Uruguay, Ecuador** | **No, y no hay datos para decidirlo** | Cero keywords medidas. Chile es el que más papeletas tiene por el dato indirecto de tráfico (§2.3), pero un dato de tráfico del incumbente no justifica una variante |

**Nada de redirección automática por IP en ningún caso**, solo un aviso con enlace, tal como ya está escrito en `arbol-web.md` §5.2.

---

## 6. Orden de entrada recomendado

**1.º España.** Sin discusión: 21.300 búsquedas/mes de intención de jugar más 33.100 de cabecera, y toda la estructura P0 ya está diseñada para ese mercado.

**2.º Argentina.** Cuatro razones, todas con dato medido:
- La ola de marca **ya llegó**: cabecera 9.900. En México no hay dato de cabecera.
- `juegos diarios` con **KD 20** es la entrada genérica más barata de las tres bases, y es exactamente nuestra categoría.
- `wordle español` 5.400 en un país de ~46 M frente a 1.000 en uno de ~130 M: el hábito de juego diario está instalado.
- **Coste marginal casi nulo**: las páginas P0 ya existen; lo único que hay que resolver es el voseo, que además ya está en el plan de producto.

**3.º México, condicionado.** Es el mayor mercado por población y el que más volumen de categoría tiene medido (`acertijos` 22.200, `enigmas` 14.800, `juegos de misterio` 1.300, cinco veces España). Pero su intención de jugar la marca ajena (3.400) es prácticamente igual a la argentina (3.160) sobre casi el triple de población, y la cabecera no devuelve dato. **Si la consulta 1 de la §6 revela que la cabecera sí tiene volumen, México adelanta a Argentina.** Es una decisión de una sola consulta.

**4.º Chile, con una advertencia: puede que no sea el cuarto.** El único dato que hay (murdoku.com, ~9.500 visitas/mes) sugiere una intensidad por habitante superior a la de cualquier otro mercado latinoamericano del que tengamos señal. Está el cuarto por falta de datos, no por falta de mercado.

**5.º Colombia y Perú, 6.º Uruguay y Ecuador.** Sin ningún dato. Colombia y Perú van por delante por tamaño de población; Uruguay, por proximidad cultural y lingüística con Argentina, podría rendir por encima de su tamaño y comparte el voseo, es decir, comparte variante con `/ar/`. Todo esto es orden por defecto, no orden justificado.

**Y una advertencia sobre el calendario que vale para los cinco.** La ventana estimada del fenómeno es de 6-12 meses (`contexto-proyecto.md`) y `oportunidades-resenas.md` §9 avisa de que el volumen de marca ajena "no es tráfico de marca estable". Entrar en LATAM persiguiendo `murdoku` en el mes 8 puede ser llegar a una ola que ya rompió. La parte del plan latinoamericano que no caduca es la de categoría —`enigmas`, `acertijos`, `juegos de misterio`, `juegos diarios`— y en LATAM esa parte es proporcionalmente **mucho** mayor que en España. Es un argumento para que la rama de marca propia (`arbol-web.md` §2.5) no se retrase.

---

## 7. Plan de consultas, listo para ejecutar

Ordenado por información obtenida frente a unidades gastadas. Las dos primeras resuelven la mitad de las preguntas abiertas.

**Consulta 1 — `phrase_all` (una llamada por keyword, devuelve TODAS las bases a la vez).** Es la forma más barata de cubrir los siete países. Keywords: `murdoku`, `murdoku online`, `murdoku gratis`, `murdoku en espanol`, `jugar murdoku`, `murdoku app`, `descargar murdoku`, `murdoku pdf`, `murdoku para imprimir`, `como se juega al murdoku`, `murdoku soluciones`, `murdle`, `murdle online`, `enigmic`, `cluedoku`. **Resuelve la anomalía de México (§2.4) y dimensiona Chile, Colombia, Perú, Uruguay y Ecuador de golpe.** Empezar por aquí.

**Consulta 2 — `domain_ranks` de `murdoku.com` y de `murdle.com`.** Una llamada por dominio devuelve el tráfico orgánico en todas las bases. Dimensiona los siete mercados por el tráfico del incumbente, que es la mejor aproximación al tamaño real de la demanda de producto. Confirma o desmiente el dato de Chile.

**Consulta 3 — `phrase_these`, bases `mx`, `ar`, `cl`, `co`, `pe` (+ `uy`, `ec` si existen), con `export_columns` `Ph,Nq,Kd,Cp,Td`** para recuperar CPC y tendencia, que hoy faltan en las 36 filas del CSV. Lista de genéricos: los 20 del encargo más `rompecabezas`, `puzzle`, `puzle`, `juegos de ingenio`, `adivinanzas`, `acertijos mentales`, `juegos de logica para celular`, `juegos sin descargar`, `para imprimir gratis`.

**Consulta 4 — `phrase_fullsearch`** sobre `murdoku`, `enigmas`, `acertijos` y `juegos de logica` en `mx`, `ar` y `cl`, para descubrir los modificadores locales que no se nos ocurren desde España. Es la consulta que más probablemente produzca una sorpresa.

**Consulta 5 — bloque educación** (`juegos de logica para ninos`, `actividades de logica para primaria`, `acertijos para ninos de primaria`, `juegos de deduccion para el aula`, `material didactico logica`, `fichas de logica para imprimir`) en `mx`, `ar`, `cl`, `co`, `pe`. Nota: el calendario escolar latinoamericano no coincide con el español (`arbol-web.md` da por hecho septiembre), y eso afecta al lanzamiento de los packs de profesor.

**Consulta 6 — `phrase_organic` de `murdoku online` y `juegos de logica` en `mx` y `ar`.** Quién ocupa hoy la SERP. En España es una SERP fragmentada sin producto sólido; hay que confirmar si en LATAM también, o si hay clones locales instalados.

**Al terminar:** rehacer `keywords-latam.csv` completo, revisar la prioridad de `/enigmas` y `/acertijos` (§3.1), cerrar el orden de entrada (§6) y decidir la fecha de `/ar/` (§5).
