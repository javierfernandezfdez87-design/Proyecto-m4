# Investigación de palabras clave — España

Fecha: 6 de septiembre de 2026.
Responsable: `estratega-growth-seo`. Base de datos objetivo: Semrush **es**.
Tabla: `docs/seo/keywords-espana.csv`.
Sustituye y amplía a `docs/keywords-arbol-web.csv` (5/9/2026), del que hereda todos los datos medidos.

---

## 0. Aviso de estado: qué se ha podido medir hoy y qué no

**Semrush no ha devuelto ningún dato nuevo en esta sesión.** Se han hecho cuatro intentos con cuatro llamadas distintas (`keyword_research`, `get_report_schema` sobre `phrase_these`, `execute_report` sobre `phrase_these` con dos formatos de parámetros, y `execute_report` sobre `phrase_this`). Las cuatro han devuelto la misma respuesta: **la suscripción está activa pero no hay unidades de API suficientes para completar la petición**. Para ver las opciones disponibles hay que entrar en <https://www.semrush.com/mcp-access>.

Consecuencia, dicha sin rodeos:

| Lo que pedía la tarea | Estado |
|---|---|
| `phrase_these` de las cinco familias | **No ejecutado.** Se usan los datos ya medidos el 5/9/2026 |
| `phrase_fullsearch` (expansión ancha) | **No ejecutado** |
| `phrase_related` (relacionadas) | **No ejecutado** |
| `phrase_organic` de las 10 no-marca de más volumen y de `juegos como murdoku` | **No ejecutado.** Solo existe la SERP de `murdoku online` capturada el 5/9 |
| CPC de cualquier palabra | **Nunca se ha medido en este proyecto.** No hay ni un dato de CPC en el repositorio |
| Tendencia a 12 meses (`Td`) | **Nunca se ha medido como serie.** Solo hay etiquetas cualitativas (explosiva / nueva / estable / 0→1,00) registradas en `analisis-estrategico.md` §2.1 y `arbol-web.md` §1 |

**Ninguna cifra de este documento está estimada, redondeada ni inferida.** Todo volumen y toda KD que aparece aquí procede de las consultas de Semrush del 5/9/2026 conservadas en `docs/keywords-arbol-web.csv`, `docs/arbol-web.md` §1 y `docs/analisis-estrategico.md` §2.1. Lo que no está medido aparece literalmente como `sin_medir` en el CSV y como "sin medir" aquí. La §7 contiene la cola de medición lista para ejecutar en cuanto haya unidades.

**Cómo leer el CSV.** Las columnas pedidas van en el orden pedido; se ha añadido una décima, `fuente`, precisamente para que nadie confunda una fila medida con una fila pendiente. `fuente = semrush-es-2026-09-05` es dato; `fuente = sin_medir` es una hipótesis de trabajo con producto asignado y turno de medición (`medir-M1`, `M2`, `M3`), no un dato.

**Una incoherencia heredada que hay que resolver al remedir.** `juegos de logica` aparece con **480 / KD 33** en `analisis-estrategico.md` §2.1 y con **1.600 / KD 27** en `keywords-arbol-web.csv`. Son dos consultas distintas en fechas distintas. El CSV usa la segunda por ser la más reciente y detallada, pero es la primera fila que hay que reconfirmar.

---

## 1. Resumen por familia

Volumen = suma de los volúmenes mensuales medidos en la base **es** de las palabras de esa familia que hay en el CSV. **Sumar volúmenes exagera el tráfico real**: hay solapamiento entre variantes y el volumen no son clics. Sirve para ordenar familias entre sí, no para prometer visitas.

| Familia | Vol. medido/mes | Palabras medidas | Sin medir | Oportunidad (volumen alto × KD baja) | Tendencia registrada |
|---|---:|---:|---:|---|---|
| `marca-murdoku` | **56.370** | 30 | 0 | `jugar murdoku online` 480/**KD 13**; `murdoku en espanol gratis` 1.600/KD 25; `murdoku espanol` 390/KD 23; **seis palabras con KD 0** (`murdoku como jugar` 170, `murdoku descargar gratis` 170, `reglas murdoku` 140, `murdoku jugar` 110, `murdoku 2` 140, `murdoku instrucciones` 40) | **Explosiva** en `murdoku`, `murdoku online`, `murdoku en espanol` y `murdoku pdf`. `murdoku diario` y `murdoku android` con serie 0→1,00 en 2 meses |
| `categoria-pasatiempos-medios` | **79.800** | 8 | 1 | **Ninguna.** KD 31-67 y racimo navegacional hacia El País, 20minutos, La Vanguardia y ABC | Sin medir |
| `marca-otros` | **122.580** | 3 | 5 | `cluedo online` 480/KD 17 (riesgo Hasbro). El resto del volumen es `wordle espanol` 110.000/KD 53, que no es objetivo | `wordle espanol` estable |
| `categoria-acertijos-enigmas` | **18.230** | 10 | 0 | `acertijos de logica` 720/KD 27; `acertijos para adultos` 2.400/KD 30. `acertijos de pensamiento lateral` 260/**KD 14** tiene la mejor KD y **el peor encaje**: el pensamiento lateral no tiene solución única deductiva y choca con la regla 3 del proyecto | Sin medir |
| `categoria-diarios` | **15.350** | 11 | 4 | `puzzle diario` 70/**KD 17**; `juegos diarios gratis` 1.300/KD 28; `como se juega al sudoku` 1.000/KD 23 | `murdoku diario` 0→1,00 |
| `marca-murdle` | **5.270** | 7 | 0 | Todo el racimo "jugar online en español" (`murdle online` 170/**KD 0**, `murdle espanol online` 70/KD 0, `murdle en espanol` 20/KD 0) suma **370/mes con KD 0-20**. Coste de captura casi nulo | `murdle` subiendo; las cuatro variantes online **de cero a su máximo en el último mes** |
| `categoria-logica` | **5.390** | 12 | 2 | `juegos de logica y razonamiento` 210/**KD 12**; `juegos de ingenio` 480/**KD 15**; `juegos de logica para adultos` 390/**KD 16**; `juegos de deduccion` 20/**KD 0** | `juegos de logica` estable (con la salvedad de la §0) |
| `imprimible-pdf` | **3.910** | 10 | 3 | `juegos de logica para imprimir` 110/**KD 10**; `murdoku pdf gratis` 70/KD 16; `pasatiempos para imprimir` 320/KD 19; `murdoku para imprimir` 140/**KD 0** | `murdoku pdf` explosiva |
| `ninos-aula` | **3.290** | 9 | 5 | **La mejor familia del conjunto por relación volumen/KD.** `murdoku para ninos` 210/**KD 0**, `murdoku ninos` 140/KD 0, `murdoku edad recomendada` 70/KD 0, `murdoku para que edad es` 70/KD 0, `juegos de logica para ninos` 170/**KD 8**, `pasatiempos para ninos` 90/KD 13, `acertijos para ninos` 2.400/**KD 22** | `murdoku para ninos` marcada como demanda **nueva** |
| `categoria-detectives-misterio` | **2.160** | 8 | 6 | `casos para resolver` 170/**KD 16**; `juegos de misterio` 260/KD 18; `juego de detectives` 320/KD 24; `juegos de detectives` 320/KD 25 | `juegos de detectives` estable |
| `otros-genericos` | 390 | 1 | 0 | Ninguna (`juegos online sin descargar` KD 88) | Sin medir |
| `dos-jugadores-grupo` | **260** | 1 | 4 | **Familia sin datos.** Lo único medido es `juegos para dos personas online` 260/**KD 69**, que es mala palabra | Sin medir |
| `preguntas-geo` | **10** | 6 | 6 | Ninguna en Google. `que es murdoku` 10, y `que es un murdoku`, `juegos como murdoku`, `alternativas a murdoku`, `donde comprar murdoku` a **0** | Sin medir |
| **Total medido** | **≈313.010** | 116 | 36 | | |

### 1.1 Las tres lecturas que importan de esa tabla

**1. El volumen bruto engaña por un factor de tres.** De las ~313.010 búsquedas medidas, **205.500 no son atacables por SEO** en el año 1 y así están marcadas en el CSV: `wordle espanol` 110.000, todo el racimo `pasatiempos + medio` 79.800, `la palabra del dia juego` 12.100 y `sudoku diario` 3.600. Quedan **≈107.510**, y de esas, 33.100 son el término cabecera `murdoku`, que es navegacional hacia el libro y la web oficial. **El fondo realmente disputable con landings propias ronda las 74.400 búsquedas/mes**, y más de la mitad son la cola de Murdoku.

**2. La demanda de marca ajena no se reparte igual que la nuestra.** El racimo Murdoku es 56.370 y el de Murdle 5.270: una relación de 10,7 a 1. Pero dentro de Murdle, el 93 % del volumen (`murdle` 3.600 + `murdle resuelve el crimen` 1.300 + `murdle pdf` 390) es **intención de papel**, no de juego. Esto confirma y refuerza lo que ya dice `propuesta-jugabilidad-expediente.md` §8.1: *"la demanda de cuadrícula lógica en español es pequeña y de otra naturaleza: PDF, libro e imprimible"*. La landing de Expediente **vende el PDF tanto como el juego**, y eso no es una concesión: es lo que dice el dato.

**3. El hueco de datos está exactamente donde está la mecánica nueva.** `dos-jugadores-grupo` tiene una sola palabra medida, y es mala (KD 69). Es la familia que serviría **el caso a cuatro manos** (F-C) y la **rejilla a dos manos**, que son mecánicas firma condicionadas. No sabemos si hay demanda de búsqueda para ellas. Es el vacío más caro del conjunto y encabeza la cola de medición.

---

## 2. Qué producto satisface cada familia

Esta es la parte que el árbol web v1 no podía escribir, porque se hizo antes de que existieran las mecánicas finales. La regla del proyecto no cambia — *cada landing contiene el juego* — pero ahora se puede decir **qué caso concreto va dentro de cada landing**, con su tamaño, su duración y su regla del día.

| Familia | Producto que la satisface | Por qué ese y no otro |
|---|---|---|
| `marca-murdoku` (intención de jugar) | **Escena · lunes "El corto"**: 4×4, sobres por progreso, 5-7 min, banda suave | Ya está decidido en `propuesta-jugabilidad.md` §5.1 (F14): *"El puzzle incrustado es el lunes y no un caso cualquiera"*. Abre con **tres pistas, no con siete**: la pared de ocho párrafos en la primera pantalla es lo que hace cerrar la pestaña, y en una landing eso sale carísimo |
| `marca-murdoku` (cómo se juega, reglas, soluciones, trucos) | **Reconstrucción animada + escalafón** (F21 + F22) | `murdoku soluciones` 140/KD 28, `como se juega al murdoku` 320/KD 30, `murdoku como jugar` 170/KD 0, `reglas murdoku` 140/KD 0 y `trucos murdoku` 10/KD 0. La reconstrucción es literalmente lo que esta gente va a buscar a TikTok ("solución del juego Murdoku nivel 8"), pero dentro del juego y sobre su propio caso |
| `marca-murdoku` (descargar / app) | **PWA instalable en dos toques** | 1.300 + 170 + 140 + 90 buscan una app. La app no oficial que hoy captura esa intención tiene **2,36/5**. El ángulo honesto es instalar la PWA, nunca afirmar ser la app oficial de nadie |
| `marca-murdoku` (fácil) | **El vistazo 3×3** (2-3 min, numeración propia, no toca la racha) | `murdoku facil` 170/**KD 0**. El vistazo existe justamente como puerta de entrada desde las landings y como calentamiento de aula. Antes esta landing no tenía producto propio; ahora sí |
| `marca-murdle` | **Expediente · jueves "La tabla del comisario"** (4×4×4, tres bloques, 48 casillas) + **vistazo de Expediente 3×3×3** | El jueves llega **con marcas ya puestas** por un comisario que se equivocó en una casilla. Es lo que hace que la landing no sea una tabla vacía de seis pistas, que es la razón por la que la gente abandona una cuadrícula lógica en la primera pantalla |
| `imprimible-pdf` | **Packs PDF con Expediente como formato principal** (`PDF-CLASICO` 30 Escena + 20 Expediente, `PDF-AULA`, `PDF-REGALO`) | `propuesta-jugabilidad-expediente.md` §8.1 lo dice con precisión: Escena necesita plano ilustrado y tinta; **Expediente es una lista, una rejilla en blanco y cinco frases, y cabe en un A4 que se fotocopia**. Los 3.910 de esta familia los sirve Expediente, no Escena |
| `ninos-aula` | **Escena · viernes "De disparate"** (sin fallecidos, humor cozy, misma lógica) + **PDF-AULA** (Escena en 3.º-4.º, Expediente en 5.º-6.º) + **expediente invertido** + **hoja A / hoja B** | El viernes es la respuesta exacta a "¿es apto para niños?": misma lógica, ninguna víctima. El expediente invertido y la hoja A/B son las dos actividades de aula que un docente puede corregir |
| `categoria-logica` | **La semana con carácter completa** + **escalafón** para `juegos de logica y razonamiento` (210/KD 12) | El escalafón es lo que convierte "juegos de razonamiento" de etiqueta genérica en promesa concreta: el juego **nombra la técnica** que el caso exigía y acredita que sabes hacerla |
| `categoria-detectives-misterio` | **Escena · miércoles "El interrogatorio"** (menú vivo) | Es la única mecánica del conjunto en la que el jugador **investiga** en vez de leer. Para `juegos de detectives`, `juego de detectives`, `resolver crimenes` y `juegos de investigacion`, el miércoles es el argumento; el lunes es solo un puzzle |
| `categoria-acertijos-enigmas` | **Vistazo 3×3** (fácil) + **sábado "El difícil"** (5×5 con celdas bloqueadas) + **reconstrucción** para `acertijos con respuesta` (1.900/KD 33) | "Con respuesta" es exactamente lo que el certificado del solver produce gratis: la cadena razonada paso a paso con el nombre de la técnica. Es el único sitio de esta familia donde tenemos algo que nadie más tiene |
| `categoria-diarios` | **La semana con carácter** (siete días con regla propia anunciada en portada) + **archivo y Premium** para `puzzle diario` | Un "juego diario" genérico es indefendible; siete días con carácter distinto es una historia contable y es lo que separa el archivo de un listado |
| `categoria-pasatiempos-medios` | **B2B: `B2B-WIDGET` con Escena y `B2B-MARCABLANCA` con Expediente** | 79.800 búsquedas/mes que **no se atacan con SEO**. Expediente por delante en marca blanca porque cabe en una columna, se compone con la tipografía del medio y va a imprenta con coste cero |
| `dos-jugadores-grupo` | **Cuatro manos (hoja A / hoja B)** y **rejilla a dos manos** | Producto condicionado a la prueba en papel (prueba 4 de `propuesta-jugabilidad.md` §6). No se escribe ninguna landing hasta que esa prueba pase **y** hasta que haya volumen medido |
| `preguntas-geo` | **Reconstrucción + escalafón + `/como-creamos-los-casos`** | El volumen en Google es cero. Estas preguntas se hacen en ChatGPT, Perplexity y Gemini. La respuesta es GEO (`arbol-web.md` §4), no una landing más |

### 2.1 Tres reclasificaciones respecto del árbol web v1

Son los tres sitios donde las mecánicas finales cambian una decisión ya escrita.

**1. `/juegos-como-murdoku/para-imprimir` sube de prioridad y cambia de argumento.** En v1 era una página incómoda: `murdoku pdf` (2.400) es en buena parte demanda de libro pirateado y no teníamos nada propio que ofrecer salvo "PDF generados por nuestro motor". Con Expediente como formato imprimible nativo —A4, fotocopiable, con la solución razonada del certificado al pie— la familia `imprimible-pdf` (3.910/mes, con `juegos de logica para imprimir` a **KD 10**) pasa a tener un producto de verdad. **Recomendación: P0 en lugar de P1**, con el aviso de intención intacto en la primera línea.

**2. `murdoku soluciones` (140 / KD 28) merece reabrirse.** El árbol v1 dejó `/caso/*/solucion` en `noindex` en fase 1 con un argumento correcto: indexar soluciones propias antes de tener hábito canibaliza la partida. Lo que ha cambiado es **qué es una solución en este producto**: no es la respuesta, es la cadena razonada con el nombre de la técnica y la acreditación del escalafón. Eso es contenido que nadie más puede publicar y que no destripa el caso de hoy (el archivo empieza en D+1). **Recomendación: mantener `noindex` al lanzar y reevaluar en el mes 4 con datos reales de `/archivo`**, como ya preveía v1, pero con la hipótesis a favor en vez de en contra.

**3. Hace falta una rama que v1 no tiene: dos jugadores.** Cuatro manos y rejilla a dos manos no existían cuando se dibujó el árbol. No propongo publicar la landing todavía —el producto está condicionado a una prueba en papel—, pero sí **medir la familia antes de que la prueba termine**, para no descubrir en enero que no hay demanda de búsqueda para una mecánica firma. Va la primera en la cola de la §7.

---

## 3. Las 30 palabras clave prioritarias

Criterio de selección, escrito antes de mirar la lista: **cada una de las 30 obliga a una pieza de trabajo distinta** (una landing, un activo de producto, una pieza de contenido o una línea de negocio). Las variantes que viven en una landing que ya está en la lista y no exigen trabajo adicional (`murdoku on line`, `murdoku play`, `murdoku jugar`, `murdoku online espanol`, `murdoku espanol`, `murdoku en espanol online`…) **no ocupan plaza**: son secundarias de una página ya priorizada y así están en el CSV. Ordenar por volumen bruto habría llenado 18 de las 30 plazas con sinónimos de la misma URL.

Orden: por prioridad de ejecución, no por volumen.

| # | Palabra clave | Vol. | KD | Pieza que obliga a construir | Justificación |
|---:|---|---:|---:|---|---|
| 1 | `murdoku online` | 9.900 | 29 | `/juegos-como-murdoku/online` con el lunes jugable | La página más importante del sitio. Sola vale más que toda la familia `categoria-logica` junta. SERP fragmentada sin ningún producto web sólido en español (§4) |
| 2 | `murdoku en espanol` | 2.400 | 30 | `/juegos-como-murdoku/en-espanol` | Ángulo que solo nosotros podemos sostener: escrito en español, no traducido. La app que hoy captura esta intención falla precisamente por las traducciones |
| 3 | `murdoku juego gratis` | 1.900 | 36 | `/juegos-como-murdoku/gratis` | Con la #4, 3.800/mes en una sola landing. Bloque explícito "no hace falta registrarse ni pagar" |
| 4 | `murdoku gratis` | 1.900 | 41 | Enlaces hacia la misma landing | **La KD más alta de todo el racimo (41).** Es la única del top que no se gana solo con contenido: exige enlaces. Priorizarla es priorizar el trabajo de relaciones, no otra página |
| 5 | `murdoku en espanol gratis` | 1.600 | 25 | Secundaria de #2 y #3 | **Mejor relación volumen/KD del tramo alto**: 1.600 con KD 25. Debe ir en el `<h2>` y en el FAQ, no solo en la etiqueta `title` |
| 6 | `descargar murdoku gratis` | 1.300 | 30 | `/juegos-como-murdoku/sin-descargar` + PWA instalable | 1.300 personas al mes quieren una app y la que encuentran puntúa 2,36/5. Obliga a que la instalación de la PWA sea un flujo de producto, no una nota al pie |
| 7 | `como se juega al murdoku` | 320 | 30 | `/juegos-como-murdoku/como-se-juega` con `HowTo` + `FAQPage` | Es **la página GEO del sitio**. Con KD 30 y 320 de volumen no entra por tráfico: entra porque es la que ChatGPT y AI Overviews van a citar, y porque su SERP ya dispara PAA y vídeo (§4) |
| 8 | `jugar murdoku online` | 480 | **13** | Anchor de enlazado interno hacia #1 | **La KD más baja con volumen de todo el racimo.** Es la palabra con la que se entra a la SERP mientras `murdoku online` madura |
| 9 | `murdoku para ninos` | 210 | **0** | `/juegos-como-murdoku/para-ninos` con el **viernes de disparate** | KD 0, demanda **nueva**, y por primera vez hay un producto exacto: un caso sin fallecidos con la misma lógica. Arrastra `murdoku ninos` (140/0) y las dos de edad (70/0 cada una): 490/mes a coste casi nulo |
| 10 | `murdoku facil` | 170 | **0** | `/juegos-como-murdoku/faciles` con **el vistazo 3×3** | KD 0 y demanda nueva. En v1 esta página no tenía contenido propio; el vistazo la convierte en un producto de 2 minutos |
| 11 | `murdoku como jugar` | 170 | **0** | Secundaria de #7 | KD 0. Junto con `reglas murdoku` (140/0) y `murdoku instrucciones` (40/0) suma 350/mes de coste marginal cero sobre una página que ya se escribe |
| 12 | `murdoku descargar gratis` | 170 | **0** | Secundaria de #6 | KD 0 sobre una intención que en su forma principal tiene KD 30. Es la puerta barata a la misma landing |
| 13 | `murdoku pdf` | 2.400 | 33 | `/juegos-como-murdoku/para-imprimir` + `/packs` | **Reclasificada (§2.1).** Ahora hay producto: el expediente de una página en A4. Sigue exigiendo el aviso de intención en la primera línea y luz verde de `experto-legal` |
| 14 | `murdoku en espanol para imprimir` | 210 | 28 | Secundaria de #13 | Es la variante con intención limpia de la familia: quien busca esto quiere imprimir, no descargar un libro ajeno |
| 15 | `murdoku para imprimir` | 140 | **0** | Secundaria de #13 | KD 0 dentro de una familia con KD 33. Con #13 y #14, 2.750/mes en una landing |
| 16 | `pasatiempos para imprimir` | 320 | 19 | `/para-imprimir` (marca propia) | KD 19 y sin marca ajena: es la versión de #13 que sobrevive si la moda se enfría |
| 17 | `juegos de logica para imprimir` | 110 | **10** | Secundaria de #16 | **KD 10.** Poco volumen y coste de captura casi nulo; es la palabra que valida la línea de packs sin depender de Murdoku |
| 18 | `murdle online` | 170 | **0** | `/juegos-como-murdle` con **el jueves jugable** | Con `murdle espanol online` (70/0), `murdle en espanol` (20/0) y `murdle espanol` (70/20): **370/mes con KD 0-20 y nadie compitiendo.** Es el único hueco del mercado donde no hay absolutamente nadie |
| 19 | `murdle pdf` | 390 | sin medir | Bloque de PDF dentro de #18 | Confirma que la demanda española de Murdle es de papel. La landing de Expediente **vende el pack**, no solo el juego. **KD sin medir: reconfirmar antes de escribir el brief** |
| 20 | `murdle resuelve el crimen` | 1.300 | 22 | Bloque comparativo dentro de #18 | 1.300/mes con KD 22 de gente que conoce el libro. No se persigue la intención de libro; se le ofrece el modo jugable y el PDF propio |
| 21 | `juegos de logica` | 1.600 | 27 | `/juegos-de-logica` | El seguro contra el escenario "la moda se enfría en 2027". **Reconfirmar el volumen antes de invertir** (incoherencia de la §0) |
| 22 | `juegos diarios gratis` | 1.300 | 28 | `/juegos-diarios` con la semana con carácter | Mejor palabra de la familia `diarios`: KD 28 frente a los 37 de `juegos diarios`, que además arrastra volumen navegacional hacia eldiario.es |
| 23 | `acertijos para ninos` | 2.400 | 22 | `/para-profesores` + `PDF-AULA` | **El mayor volumen atacable fuera del racimo Murdoku.** 2.400 con KD 22 y competencia de blogs de recursos. El producto es el viernes de disparate y las fichas por curso |
| 24 | `juegos de logica para ninos` | 170 | **8** | Secundaria de #23 | **KD 8.** Con `pasatiempos para ninos` (90/13) y `recursos para profesores` (50/25), la familia `ninos-aula` completa 3.290/mes con la KD media más baja del conjunto |
| 25 | `juegos de ingenio` | 480 | **15** | Bloque dentro de #21 | 480 con KD 15: la mejor relación volumen/KD de toda la categoría propia. El vistazo es el activo |
| 26 | `juegos de logica para adultos` | 390 | **16** | Bloque "sábado El difícil" dentro de #21 | KD 16 y encaje perfecto con el día difícil y con el argumento de Premium |
| 27 | `juegos de logica y razonamiento` | 210 | **12** | Bloque del **escalafón** dentro de #21 | KD 12. Es la palabra donde el escalafón deja de ser una funcionalidad y pasa a ser la respuesta literal a la consulta |
| 28 | `juegos de detectives` | 320 | 25 | `/juegos-de-detectives` con **el miércoles** | 320 en España pero **880 en México y 720 en Argentina**: es la landing que prepara la expansión. El interrogatorio es lo que la hace distinta de un listado |
| 29 | `casos para resolver` | 170 | **16** | `/archivo` + **expediente invertido** | KD 16 y encaje literal: es lo que somos. El expediente invertido (llega resuelto, marca las pistas que lo prueban) es el formato exacto de esta consulta |
| 30 | `juegos de deduccion` | 20 | **0** | Nombre de categoría en `Organization`, `llms.txt` y toda la entidad de marca | 20 búsquedas y KD 0. **Se prioriza por posicionamiento de entidad, no por tráfico**: es la palabra que queremos que signifique "nosotros" en Google y en los modelos generativos cuando la categoría crezca. Cuesta cero comprarla hoy |

**Suma de volumen de las 30: 32.620/mes** (29 palabras con volumen medido + `murdle pdf` 390 con KD sin medir), sin contar las secundarias que cuelgan de ellas.

**Qué se ha dejado fuera a propósito y por qué.** `murdoku` (33.100 / KD 35): es navegacional hacia el libro y la web oficial, se captura como cola desde el hub, no como objetivo. `wordle espanol` (110.000 / KD 53) y `la palabra del dia juego` (12.100 / KD 58): volumen enorme, encaje bajo y marca de The New York Times. Todo el racimo `pasatiempos + medio` (79.800): se ataca con `/para-medios`, no con SEO. `sudoku diario` (3.600 / KD 68), `juego diario` (480 / KD 56), `juegos online sin descargar` (390 / KD 88): KD alta y encaje parcial. `acertijos de pensamiento lateral` (260 / **KD 14**): la mejor KD de su familia y **encaje bajo**, porque el pensamiento lateral no tiene solución única deductiva y contradice la regla 3 del proyecto; incluirla sería vender lo que no hacemos. `cluedo online` (480 / KD 17): buena palabra, bloqueada hasta luz verde de `experto-legal` (Hasbro).

---

## 4. SERP analizadas

### 4.1 `murdoku online` — base es, `phrase_organic`, 5/9/2026

Es la única SERP del proyecto capturada con datos de Semrush. Resultados registrados, en el orden en que constan en `arbol-web.md` §1 y `analisis-estrategico.md` §2.2:

| # | Resultado | Tipo de página |
|---|---|---|
| 1-3 | **murdoku.com** (oficial, 3 URLs) | Producto de marca ajena |
| 4 | **TikTok de @martamartiuss** (vídeo viral recomendando jugar gratis en la web) | Vídeo social |
| 5 | **App no oficial de NozCore Tech** en Google Play (2,36/5, 63.000 descargas en 30 días) | Ficha de tienda de apps |
| 6 | **murdokujuego.com** | Clon en español, galería de puzzles |
| 7 | **PDF promocional del libro** alojado en el CDN de Planeta | PDF |
| 8 | **Instagram** | Social |
| 9 | **Reddit r/murdoku** | Comunidad |
| 10 | Segunda app ("murder sudoku") | Ficha de tienda de apps |

Fuentes complementarias que también aparecen para `murdoku gratis`: Scribd, murdoku.fans (guía con afiliación) y orientacionandujar.es ("35 murdokus para jugar", recurso educativo).

**Qué tipo de página rankea, en una frase:** ninguna. **No hay una sola web de juego en español bien hecha en la primera página.** Rankean el sitio oficial, dos apps, un clon, un PDF y cuatro perfiles sociales. Es una SERP de "no existe el producto que la gente busca".

**Tres consecuencias operativas:**

1. **Un vídeo y una comunidad valen tanto como una landing.** Cuatro de los diez resultados son TikTok, Instagram, Reddit y Google Play. La estrategia no puede ser solo la página: hay que ocupar r/murdoku, el formato de vídeo corto de 60 segundos y —cuando exista— la ficha de la PWA.
2. **La app no oficial es el hueco más flagrante.** 63.000 descargas en 30 días con 2,36/5 es demanda insatisfecha medida, no supuesta. Justifica la #6 de las prioritarias.
3. **orientacionandujar.es rankeando con "35 murdokus" confirma la familia `ninos-aula`.** Se compite con material mejor y con solución única garantizada, que es exactamente lo que un blog de recursos no puede prometer.

### 4.2 Funciones de SERP del racimo Murdoku

Códigos de Semrush registrados el 5/9/2026: **7, 9, 20, 21 y 36** de forma sistemática en todo el racimo; `como se juega al murdoku` añade el **38** y el **52**.

- **7 = reseñas, 9 = vídeo, 20 = carrusel de vídeo, 21 = *People Also Ask***. Estas cuatro están confirmadas y dicen lo mismo: **en esta SERP mandan el vídeo corto y las preguntas**. Justifica el `FAQPage` obligatorio y el plan de vídeo con `creador-social`.
- **36, 38 y 52 siguen sin confirmar.** El árbol v1 ya lo dejó como pendiente y **sigue pendiente**: no voy a afirmar qué son sin verlo. La hipótesis de trabajo es que el 36 sea el bloque generativo, por su presencia en casi todas las consultas del racimo; si se confirma, la sección GEO de `arbol-web.md` §4 pasa de recomendable a obligatoria. **Esta comprobación cuesta cero unidades de API**: es abrir una SERP española a mano y mirar. Debería hacerse esta semana.

### 4.3 SERP que la tarea pedía y **no** se han podido comprobar

Las 10 palabras de mayor volumen **no de marca ajena** y `juegos como murdoku`. Quedan pendientes de `phrase_organic` (base `es`) y son, por volumen medido:

| # | Palabra clave | Vol. | KD | Qué esperamos encontrar (hipótesis a verificar, **no dato**) |
|---:|---|---:|---:|---|
| 1 | `pasatiempos` | 27.100 | 61 | Medios españoles. Confirmaría que es racimo navegacional y que se ataca por B2B |
| 2 | `pasatiempos gratis` | 12.100 | 61 | Ídem |
| 3 | `acertijos` | 8.100 | 41 | Blogs de listados y recopilaciones. Determina si `/acertijos` tiene sentido o no |
| 4 | `pasatiempos online` | 6.600 | 67 | Medios y portales de juegos |
| 5 | `pasatiempos diarios` | 5.400 | 50 | Medios |
| 6 | `sudoku diario` | 3.600 | 68 | Portales de sudoku consolidados |
| 7 | `juegos diarios` | 2.900 | 37 | Mezcla; hay que ver cuánto es eldiario.es antes de invertir |
| 8 | `acertijos para ninos` | 2.400 | 22 | Blogs de recursos educativos y de crianza. **Es la SERP que más decide**: si es blog puro, entramos con producto |
| 9 | `acertijos para adultos` | 2.400 | 30 | Listados |
| 10 | `acertijos con respuesta` | 1.900 | 33 | Listados. Determina si la reconstrucción es un argumento diferencial aquí |
| 11 | `juegos como murdoku` | 0 medido | sin medir | Volumen 0 en Google pero es el **término de encuadre** de toda la rama comparativa. Hay que ver si la SERP existe y qué la ocupa (probablemente murdoku.fans y listados) |

Payload listo para ejecutar en la §7.

### 4.4 Un competidor que ninguna SERP nuestra había registrado: **Enigmic**

Comprobado hoy fuera de Semrush: **Enigmic ("Enigmic: Casos de crímenes", Tangram Game Studio)** es una aplicación de deducción criminal **en español**, publicada en App Store y Google Play, cuya mecánica descrita es exactamente la de Escena —tablero, sospechosos, pistas, colocar a cada sospechoso en su posición— y que anuncia **retos diarios "muy pronto"**. Además, murdoku.fans ya la lista como alternativa a Murdoku.

No estaba en la tabla de competidores de `analisis-estrategico.md` §2.3. **No es una alerta de marca (D-006): el nombre no se parece al nuestro y no cumple ningún disparador.** Es una alerta competitiva: es el producto en español más parecido al nuestro que hemos visto, y si añade el reto diario antes que nosotros, ocupa parte de la intención de las 30 palabras de la §3. Recomiendo que `analista-competencia` lo verifique a mano (idioma real, calidad de las pistas, si garantiza solución única, modelo de negocio) y que se mida su racimo de marca en la primera tanda de la §7.

---

## 5. Lo que la tarea pedía y no está aquí

Dicho en claro para que nadie lo dé por hecho:

1. **No hay ni un dato de CPC**, ni en este documento ni en el repositorio. La columna existe en el CSV y está entera a `sin_medir`.
2. **No hay tendencia a 12 meses como serie.** Hay ocho etiquetas cualitativas heredadas (`explosiva`, `nueva`, `subiendo`, `estable`, `0->1,00 en 2 meses`, `0->max ultimo mes`) y nada más. La columna `Td` de Semrush no se ha consultado nunca en este proyecto.
3. **No hay `phrase_fullsearch` ni `phrase_related`.** Todo lo que hay procede de `phrase_these` y `phrase_questions` del 5/9. Esto significa que **el conjunto de palabras conocidas es el que alguien pensó en escribir**, no el que Semrush habría descubierto. Es la carencia metodológica más importante del documento.
4. **De los siete racimos de marca ajena que pedía la tarea, solo dos están medidos** (murdoku y murdle). `cluedoku`, `caseoku`, `enigmic`, `clues by sam` y `endless cases` no tienen ni una cifra.
5. **De las nueve preguntas de la familia 4, seis no están medidas** (`como se juega al murdle`, `murdoku donde jugar`, `hay murdoku online`, `alternativa a murdoku`, `juegos parecidos a murdle`, `cual es mejor murdle o murdoku`). Las tres medidas dan 0, 0 y 20.
6. **La familia `dos-jugadores-grupo` es casi entera una hipótesis**, y sostiene dos mecánicas firma condicionadas.

---

## 6. Qué se puede decidir hoy sin más datos, y qué no

**Se puede decidir hoy.** Las nueve landings P0 de la rama Murdoku, sus contenidos jugables (lunes en las de intención, vistazo en la de fáciles, viernes en la de niños), la asignación de Expediente al racimo imprimible, el `PDF-AULA` como respuesta a `ninos-aula`, y el tratamiento B2B de `pasatiempos`. Los datos que lo sostienen son de hace un día y las decisiones ya están tomadas en `arbol-web.md`; lo que este documento aporta es **qué caso concreto va dentro de cada página**.

**No se puede decidir hoy.** Si merece la pena una landing de dos jugadores. Si `/acertijos` tiene sentido (depende de la SERP). Si el racimo de Enigmic hay que atacarlo. Si la KD de `murdle pdf` permite el brief. Y **nada que dependa de CPC**, incluida cualquier conversación sobre Google Ads, que además exige criterio previo por escrito de `experto-legal` (`arbol-web.md` §3.2, punto 7).

---

## 7. Cola de medición, lista para ejecutar

Ordenada por lo que más decisiones desbloquea por unidad gastada. Base **es** en todas. Ejecutar de arriba abajo y parar donde se acaben las unidades: cada tanda es útil por sí sola.

### M1 · Lo que desbloquea decisiones de producto ya comprometidas

**M1.1 — `phrase_these`, familia dos jugadores y aula.** Es la primera porque sostiene dos mecánicas firma condicionadas y una línea de negocio.
```
juego de detectives para dos;juegos de logica cooperativos;juegos de logica en grupo;
juegos de deduccion para el aula;juego de detectives para profesores;juegos de logica para clase;
actividades de logica primaria;acertijos de detectives para ninos;escape room en casa;
juegos de mesa de detectives;juegos para dos jugadores;juegos en pareja
```

**M1.2 — `phrase_these`, marcas ajenas sin medir.** Semillas y modificadores en la misma llamada.
```
cluedoku;caseoku;enigmic;clues by sam;endless cases;whodoku;murder sudoku;dailymurder;
enigmic español;enigmic online;enigmic app;enigmic gratis;cluedoku español;cluedoku online;
caseoku online;caseoku español;clues by sam español;endless cases español
```

**M1.3 — `phrase_these`, genéricos del núcleo que faltan.**
```
sudoku de asesinatos;juego de asesinatos;quien es el asesino;resolver crimenes;
rompecabezas de logica;retos de logica;pasatiempos para adultos;puzzle de logica diario;
juegos de logica para imprimir pdf;pasatiempos para imprimir pdf
```

**M1.4 — `phrase_these` de reconfirmación.** Cinco filas que hoy no me fío de ellas.
```
juegos de logica;murdle pdf;juegos como murdoku;acertijos para imprimir;misterios para resolver
```

**M1.5 — `phrase_organic`** de las 11 palabras de la §4.3.

### M2 · Expansión y descubrimiento

**M2.1 — `phrase_fullsearch`** sobre las semillas `murdoku`, `murdle`, `juegos de logica`, `juegos de detectives`, `acertijos`, `juegos diarios`, `pasatiempos para imprimir`. Es lo que encuentra las palabras que nadie ha pensado en escribir; ver §5.3.

**M2.2 — `phrase_related`** sobre `murdoku online`, `juegos de logica`, `juegos de detectives`, `casos para resolver`, `juegos diarios gratis`.

**M2.3 — `phrase_these`** del resto de intenciones de producto y preguntas: `un caso al dia`, `juego detective diario`, `juegos tipo wordle`, `cluedo para imprimir`, `historias de detectives cortas`, `como se juega al murdle`, `murdoku donde jugar`, `hay murdoku online`, `alternativa a murdoku`, `juegos parecidos a murdle`, `cual es mejor murdle o murdoku`.

### M3 · Completar el histórico

**M3.1 — Reejecutar `phrase_these` sobre las 116 palabras ya medidas pidiendo explícitamente `Cp` (CPC) y `Td` (tendencia 12 meses)**, que es lo único que falta para que el CSV esté completo con las columnas pedidas.

**M3.2 — Repetir M1 y M2 en las bases `mx` y `ar`**, donde hoy solo hay 20 filas sueltas.

### Comprobaciones manuales que cuestan cero unidades y deberían hacerse ya

1. **Abrir a mano en Google España** `murdoku online`, `como se juega al murdoku` y `acertijos para ninos` y anotar si hay AI Overview, PAA y carrusel de vídeo. Resuelve los códigos 36, 38 y 52 que llevan pendientes desde el árbol v1 y decide la prioridad de toda la sección GEO.
2. **Verificar murdoku.com a mano**: idiomas reales de la interfaz, duelos, ligas, Premium. Es la fila que sostiene la tabla comparativa de todas las landings `/juegos-como-*` y hoy las fuentes se contradicen.
3. **Instalar y jugar Enigmic** (§4.4).

---

## 8. Reparto del trabajo que sale de aquí

| Qué | Quién | Cuándo |
|---|---|---|
| Ejecutar M1 completa en cuanto haya unidades y actualizar `docs/seo/keywords-espana.csv` | `estratega-growth-seo` | En cuanto haya unidades |
| Las tres comprobaciones manuales de coste cero (§7) | `estratega-growth-seo` | Esta semana |
| Briefs de las 9 landings P0 con el caso jugable ya asignado por la §2 | `periodista-contenidos` a partir de este documento | Tras luz verde de `experto-legal` |
| Verificación competitiva de **Enigmic** y actualización de `analisis-estrategico.md` §2.3 | `analista-competencia` | Esta semana |
| Luz verde sobre los ocho puntos de `arbol-web.md` §3.2, más la redacción de `/juegos-como-murdoku/para-imprimir` con Expediente como producto | `experto-legal` | Antes de publicar cualquier `/juegos-como-*` |
| Expediente de la OEPM (clases 9 y 41) preparado **antes** de abrir la primera conversación con un medio, porque `/para-medios` es la línea que atiende las 79.800 búsquedas de `pasatiempos` y **la primera conversación B2B cumple un disparador de D-006** | `experto-legal` + usuario | Antes de `/para-medios` |
