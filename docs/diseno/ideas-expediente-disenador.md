# Diseño de juego del modo Expediente

Autor: `disenador-puzzles`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Encargo: dejar Expediente tan avanzado como Escena. Base formal, traslado de mecánicas, mecánicas propias, semana y descartes.
Fuentes: `docs/contexto-proyecto.md`, `docs/funcionamiento-productos.md` (§1.2), `docs/propuesta-jugabilidad.md` (D-010 pendiente de firma), `docs/motor-viabilidad-jugabilidad.md` (V24 y propiedades U, SA, NR, OD, MV, ML, EN, TR, CN, OR, PU, AM), `docs/diseno/ideas-jugabilidad-disenador.md` (D1-D15), `docs/diseno/panel-jugadores-jugabilidad.md` (cinco perfiles), `docs/oportunidades-resenas.md` (P1-P4, P10, P11, P14, P15, P18, P23, P24), `docs/investigacion/analisis-profundidad.md` (ficha de murdle.com).

**Alerta de marca (D-006), comprobada hoy sobre este material:** ninguno de los cinco disparadores se cumple (sin usuarios, sin vídeo de +100.000 visualizaciones, sin prensa, sin conversación B2B o editorial, sin tercero usando un nombre parecido). No procede registrar todavía.

**Nota de marca (regla 1 del proyecto):** en este documento se cita a Murdle como referencia comparativa, que es legítimo en material interno y editorial. Ningún nombre, personaje, caso, texto o elemento de este documento procede de Murdle ni de Murdoku; todos los casos de ejemplo son originales.

---

## 0. Punto de partida

Hoy Expediente son cinco líneas en `funcionamiento-productos.md` §1.2, tres días de motor en el dictamen (V24) y una fecha (semanas 10-14). Escena tiene quince mecánicas, tres firmas, una semana con carácter y un plan de validación. Si el segundo modo sale con la mecánica base y nada más, ocurre lo previsible: es una cuadrícula lógica en español, la juega el 15 % los primeros días, se apaga, y el argumento «dos formas de jugar bajo un mismo ritual» —que es la ventaja 2 de `funcionamiento-productos.md` §2.4— se queda sin la mitad.

El problema de juego de Expediente no es el mismo que el de Escena. En Escena el jugador tiene **un solo verbo, colocar**. En Expediente tiene dos, **tachar y confirmar**, y el problema es otro: **la información está toda delante y el trabajo es de contabilidad**. La queja documentada del género lo dice mejor que yo: *«demasiadas pistas comparado incluso con libros estándar de puzles de lógica, lo que significa que no está bien editado»* (P23), *«20 erratas repartidas en 6 acertijos»* (P1), *«redacción ambigua, sobre todo para no nativos»* (P3). Nadie se queja de que la cuadrícula sea aburrida: se quejan de que **leer es caro y arriesgado**.

De ahí sale la tesis del modo, que es hermana de la de Escena (D-010) pero no la misma:

> **En Expediente ninguna pista se lee dos veces. Cada frase dice una cosa, se ve dónde cae en la tabla en cuanto la tocas, y ninguna sobra. Y cuando acabas, el juego te pide que demuestres una casilla: no basta con acertar, hay que poder señalar por qué.**

Las tres firmas del modo, en el mismo orden de importancia:

| | Firma de Expediente | Cuelga de | Qué ataca |
|---|---|---|---|
| **X-A** | **El vis a vis** (E-7): pocas pistas, preguntas elegidas, cada respuesta cierra una casilla | MV + OR (V4) | La pared de texto inicial (P24, la queja de Marta) |
| **X-B** | **La contraprueba** (E-10): al acusar, el juego señala una casilla y pide las pistas que la demuestran | PU sobre una celda + M3 | Que acertar y demostrar sean lo mismo; alimenta el escalafón |
| **X-C** | **La coartada cruzada** (E-1): dos coartadas verdaderas que se estorban, sin mentiroso | CC (nueva) | El muro del mentiroso (P15) con garantía de justicia |

Y una decisión de alcance que condiciona todo lo demás y que tomo aquí: **Expediente no crece por tamaño.** El género sube dificultad añadiendo elementos y categorías hasta que la cuadrícula no cabe en un móvil. Nosotros subimos por profundidad medida y por estructura. El techo está en la §1.1 y no se negocia.

---

## 1. La base, bien definida

### 1.1 Tamaños: el techo y por qué

El tablero de Expediente es un **cuaderno triangular**: con `k+1` categorías hay `C(k+1, 2)` bloques de `n × n` casillas.

| Preajuste | Elementos `n` | Categorías | Bloques | Casillas | Pistas | Duración objetivo | Uso |
|---|---|---|---|---|---|---|---|
| **Vistazo** | 3 | 3 | 3 | 27 | 4-5 | 2-3 min | Tutorial jugable, landing, infantil |
| **Corto** | 4 | 3 | 3 | 48 | 6-7 | 5-8 min | Lunes, aula, imprimible |
| **Clásico** | 4 | 3 | 3 | 48 | 6-7 | 6-9 min | Martes a viernes |
| **Ancho** | 5 | 3 | 3 | 75 | 8-10 | 9-14 min | Sábado |
| **XL** | 4 | **4** (con motivo) | 6 | 96 | 10-12 | 15-22 min | Domingo |

**Regla del techo, verificable por el generador:** `n ≤ 5` y `bloques ≤ 3` cuando `n = 5`; `bloques ≤ 6` cuando `n = 4`. Es decir, **nunca 5 elementos con 4 categorías** y **nunca 6 elementos**.

Tres motivos, en orden:

1. **Legibilidad en 360 píxeles.** 5 elementos y 4 categorías son 150 casillas; 6 elementos y 4 categorías, 216. Con objetivos táctiles de 44 px (criterio F6) no caben ni con zoom. 96 casillas es el máximo que hemos visto funcionar en vertical con cabeceras legibles.
2. **Duración.** La ventana del producto es 5-15 minutos y el domingo 15-25 (D-007). Un 5×5 de cuatro categorías se va a 30-40 minutos y deja de ser un ritual diario.
3. **Un regalo para el motor que conviene cobrar.** El dictamen advierte, con razón, que 4 categorías de 6 elementos son `6!³ = 373.248.000` asignaciones y que está «prohibido enumerar». **Bajo este techo el peor caso es `(5!)² = 14.400` modelos (Ancho) y `(4!)³ = 13.824` (XL).** Los dos son enumerables a fuerza bruta en milisegundos. Consecuencia práctica y no menor: **el residuo de soluciones cabe en el cliente**, así que MV (menú vivo), Sabueso y «pásale tu caso» son *más baratos* en Expediente que en Escena 6×6, no más caros. El techo de diseño paga el coste del motor.

**Casos límite que el generador debe cubrir:** `n = 3` con 3 categorías tiene `(3!)² = 36` modelos y puede no admitir U + NR con techo N2 estricto; hay que catalogar cuántos vistazos distintos existen antes de prometer un mini diario (mismo aviso que V14). Si salen menos de doscientos, el mini de Expediente es semanal, no diario.

### 1.2 Categorías: cuáles, cuántas y quién es el ancla

```
Categorías  K = {sospechoso} ∪ A,  |A| = 2 o 3
sospechoso  es siempre el ancla: la fila del cuaderno y el sujeto de la acusación
asig_c: S → E_c  biyectiva para cada c ∈ A         (una cosa por persona, una persona por cosa)
junto(x, y)  ⟺  x e y pertenecen a la misma fila del expediente   (x, y de categorías distintas)
víctima      lugar fijo R (o deducible), no ocupa fila
culpable     el sospechoso s con asig_lugar(s) = R
```

- **Ancla: sospechoso, siempre.** La acusación es sobre una persona; el ancla tiene que ser la categoría de la que va la historia. Además hace que «una por fila» se lea sin explicación.
- **Obligatorias: lugar y objeto.** Uso **objeto** en toda la interfaz, no «arma». Motivos: el viernes de disparate y la sección infantil no tienen fallecidos y necesitan la misma palabra; y «el arma» es una etiqueta narrativa que se aplica **al final**, cuando se sabe qué llevaba el culpable. Una sola palabra que viaja a todos los formatos vale más que dos que se pisan.
- **Cuarta categoría: solo el motivo, solo el domingo, solo a 4 elementos.** Ver §1.3.
- **Todas las categorías tienen la misma cardinalidad y todas las asignaciones son biyectivas.** La única asimetría permitida es la de E-4 (objeto perdido), que se anuncia en cabecera y cambia la biyección por una inyección declarada. Una categoría no biyectiva sin anunciar destruye la lectura básica del cuaderno («si hay un ✓, el resto de la fila y la columna son ✗») y esa lectura es lo único que el jugador sabe sin tutorial.

**Combinaciones prohibidas de categorías**, porque producen bloques que no se pueden razonar: dos categorías que sean atributos del mismo objeto (material y peso); una categoría cuyos valores sean estados abstractos (culpabilidad, intención, nerviosismo); y cualquier categoría cuyos valores no puedan dibujarse en una cabecera de dos palabras.

### 1.3 El motivo: cuarta categoría **y** segunda fase, y no son la misma pieza

Es la pregunta del encargo y la respuesta es que son dos mecánicas distintas con dos funciones distintas, y que la que va todos los días es la segunda.

| | **Motivo como cuarta categoría** | **Motivo como segunda fase** (E-2) |
|---|---|---|
| Dónde vive | Dentro del cuaderno, 3 bloques más | Pantalla propia, después de acusar |
| Coste de tablero | 48 → 96 casillas | Cero |
| Qué añade al razonamiento | Más cruces del mismo tipo | Un micro-CSP de 3 opciones y 2 pistas |
| Qué añade a la partida | Volumen | Un cambio de ritmo y un final con frase |
| Riesgo | Muro; el domingo se hace largo | Ninguno si es saltable |
| Cuándo | **Solo domingo, solo `n = 4`** | **Todos los días** |

El razonamiento: una cuarta categoría no aporta un tipo de deducción nuevo, aporta **más de lo mismo**, y duplica el cuaderno. Eso está bien exactamente un día a la semana, cuando la promesa del día es «grande, no duro» (regla 4 del calendario de D-010). El resto de los días el motivo tiene que ser lo que es narrativamente: **la última frase, no la última columna**.

### 1.4 Atributos: qué son, qué no son y las cinco reglas duras

Un atributo es un dato **impreso en la ficha** de un sospechoso, un objeto o un lugar, que permite que una pista hable de un subconjunto sin nombrarlo. **No es una categoría**: no exige biyección, no añade bloques, no se marca en el cuaderno y **no cuenta como pista para NR**.

| Portador | Atributos admitidos | Tipo | Ejemplo de pista que habilita |
|---|---|---|---|
| **Sospechoso** | altura, edad (orden total sin empates) · mano dominante · pelo · gafas · calzado · oficio | ordinal / cerrado / binario | «El zurdo no tocó el candelabro» |
| **Objeto** | material (madera, plata, latón, cristal, cuero) · peso (pesado / ligero) · si corta · si mancha · si hace ruido | cerrado / binario | «Quien estaba en el archivo llevaba algo de plata» |
| **Lugar** | planta (arriba / abajo) · dentro / fuera · con luz / a oscuras · de cara al público · posición en la tira de orden | binario / ordinal | «Dos de ellos estaban arriba» |

**Las cinco reglas duras de atributo.** Cada una nace de una queja documentada.

1. **Todo atributo citado en una pista está impreso en la ficha con la misma palabra exacta.** Nada de cultura general: si una pista dice «algo pesado», la ficha del objeto dice «pesado». Prohibido «el bronce pesa más que la madera» (§4 de mi documento anterior, y §1.2 de `funcionamiento-productos.md`).
2. **Los atributos ordinales son orden total estricto, sin empates, y la ficha muestra el orden, no el número.** «Amaranta es la segunda más alta» y no «Amaranta mide 1,68». Un empate en un ordinal es una errata que el jugador vive como pista contradictoria (P1).
3. **El artículo anuncia la cardinalidad.** «**El** zurdo» solo si hay exactamente uno. Con dos o más: «**ninguno de los** zurdos» o «**quien fuera** zurdo». Es la ambigüedad más barata de eliminar de todo el modo y la que más veces he visto romper un caso.
4. **Máximo dos atributos activos por caso** (activo = citado en alguna pista). Un caso con cinco atributos activos no es difícil: es una hoja de cálculo.
5. **Si un atributo tiene un solo portador, la pista de atributo es una pista directa disfrazada** y el certificado la etiqueta como N1. Es legítima —es la pista amable del lunes— pero no puede contar como profundidad en la medida de dificultad.

### 1.5 Taxonomía de pistas de Expediente

Nueve familias. Cada una con forma canónica única, forma formal, negación definida y nivel típico en la escalera. Esto es lo que `ingeniero-motor-puzzles` implementa sin preguntarme nada.

| # | Familia | Forma canónica (única) | Forma formal | Negación | Nivel | Notas |
|---|---|---|---|---|---|---|
| **T1** | **Directa** | «Tino no salió de la conserjería.» / «El abrecartas apareció en la terraza.» | `junto(x, y)` | `¬junto(x,y)` = T2 | N1 | Cierra una casilla y pinta su cruz |
| **T2** | **Negativa** | «Bárbara no pisó el invernadero.» | `¬junto(x, y)` | T1 | N1 | La pista más común y la más segura |
| **T3** | **Negativa compuesta** | «Ni Bárbara ni Ignacio pisaron el faro.» | `¬junto(a,y) ∧ ¬junto(b,y)` | — (no se niega) | N1 | Cuenta como **una** pista; ver **NR-C** en §6.2 |
| **T4** | **Disyuntiva interna** | «El rodillo estaba en el invernadero o en la cocina.» | `junto(x,y₁) ∨ junto(x,y₂)`, `y₁,y₂` de la **misma** categoría | «no estaba ni en… ni en…» | N2 | Exclusiva **automáticamente** por biyección. Ver §1.6 |
| **T5** | **Relacional entre categorías** | «Quien estaba en el archivo llevaba algo de plata.» | `∀o: junto(archivo,o) → plata(o)`, equivalente a restringir el dominio | «quien estaba en X no llevaba nada de…» | N2-N3 | **La bisagra.** Es la pista que hace de Expediente un juego y no una tabla |
| **T6** | **De atributo** | «El zurdo no tenía el candelabro.» / «Ninguno de los zurdos…» | `∀s: zurdo(s) → ¬junto(s,candelabro)` | forma afirmativa | N1-N2 | Regla 3 de §1.4 obligatoria |
| **T7** | **Ordinal** | «El jardín está más lejos de la entrada que la galería.» · «entre A y B» (estricto) · «justo antes de» | orden total impreso sobre una categoría o un atributo | «no está más lejos que» = «está igual o más cerca»; con orden estricto sin empates, «está más cerca» | N2-N3 | Exige **tira de orden impresa** y origen declarado. Ver E-9 |
| **T8** | **De recuento** | «Dos de ellos estaban arriba.» (siempre **exactamente**) | `\|{s : arriba(asig_lugar(s))}\| = k` | `≠ k`, no se usa | N2-N3 | «Dos» nunca significa «al menos dos». Ver E-12 |
| **T9** | **Condicional** | «Si Clara estaba en la cocina, el candelabro estaba en el salón.» | `junto(clara,cocina) → junto(candelabro,salón)` | no se niega | N3 | **Solo** si el certificado lo usa en contrapositivo o con el antecedente ya probado. Ver §1.6 |

**Familias fuera de la taxonomía y por qué:** el testimonio falso (descartado en D-010, decisión 5, y aquí lo mantengo: ver §5.2); la disyunción cruzada de categorías (§1.6); el condicional anidado; el cuantificador existencial suelto («alguien llevaba algo de plata»), que es verdadero por construcción en casi todo caso y por tanto vacío.

**Sobre el testimonio como presentación, no como mecánica.** D-010 descartó «la voz de personaje dentro de una pista numerada» y estoy de acuerdo. Pero varias mecánicas de la §3 necesitan que una pista **se atribuya** a alguien. La regla que concilia las dos cosas y que propongo cerrar aquí:

> **Atribución sí, voz no.** El texto de la pista es la plantilla canónica, palabra por palabra. Lo que se añade es un prefijo fijo («Casilda declara:») y un retrato. Cero libertad dentro de la frase, cero modismos, cero chiste. La atribución no cambia la forma formal ni el nivel.

### 1.6 Qué hace elegante a una pista de Expediente y qué la hace odiosa

**Elegante** (las seis señales, y las uso como criterio de aceptación del guion):

1. **Cae en un sitio y se ve.** Al tocarla se iluminan como mucho `n` casillas de un solo bloque, o de dos si es T5. Si al tocarla se enciende media tabla, la pista es un párrafo con forma de pista.
2. **Se apoya en un dato impreso**, no en el mundo. El detalle sensorial (hollín, cera fresca, una mancha de latón) **nombra** el atributo impreso; no lo sustituye ni lo insinúa.
3. **Cabe en una línea:** una oración, un verbo, un «no» como máximo, ≤20 palabras.
4. **Es la única forma de decir esa relación.** Cero sinónimos: si el vocabulario dice «más lejos de la entrada que», no existe «más adentro que».
5. **Es la bisagra:** cruza dos categorías que todavía no se hablaban. Un caso sin al menos una T5 es una tabla, no un caso.
6. **Sobrevive a la retirada de su adorno.** Si se le quita el color narrativo y la pista sigue diciendo exactamente lo mismo, el adorno estaba bien puesto.

**Odiosa** (las diez, cada una anclada en una queja real del género):

| Qué la hace odiosa | Evidencia | Cómo se impide |
|---|---|---|
| **Hay que leerla dos veces para saber de qué categoría habla** («lo de la cocina pesaba») | P3, ambigüedad léxica | Plantilla canónica por familia; retraducción contrastada (CN) |
| **Doble negación** («nadie que no fuera zurdo…») | P3 | Prohibida en el DSL: una negación por pista |
| **Depende de un dato no impreso** | Regla del proyecto | Regla 1 de §1.4; validador de existencia |
| **Disyunción cruzada de categorías** («o Clara tenía el candelabro o Diego estaba en el jardín») | P3, P23 | **Prohibida.** Ver el descarte razonado abajo |
| **Condicional vacío** (el antecedente resulta falso y la pista no dijo nada) | P16, la pista de Irratino «often useless or redundant» | T9 solo se publica si el certificado la usa |
| **Sobra** | P23: «demasiadas pistas… no está bien editado» | NR, demostrada por máquina en cada caso |
| **Contradice a otra** | P1: «20 erratas en 6 acertijos»; página de erratas del incumbente | U + validación de la capa narrativa |
| **Es un muro** (siete párrafos en la primera pantalla) | P24, Marta «a las ocho de la mañana» | Presupuesto de texto (abajo) + sobres + vis a vis |
| **Lleva un chiste dentro** | Prueba 5 de D-010, umbral cero | El humor vive en la sinopsis, la confesión y el epílogo |
| **Usa un sinónimo de otra pista** | Regla 5 de mi checklist | Vocabulario cerrado y versionado |

**El presupuesto de texto**, que es la medida más barata contra el muro y hoy no está escrita en ningún sitio:

```
pista            ≤ 20 palabras, una oración, ≤1 negación
ficha de entidad ≤ 10 palabras + etiquetas de atributo (sin prosa)
total de pistas  ≤ 120 palabras (n=4, 3 cat) · ≤ 180 (n=5) · ≤ 220 (XL)
cabecera del caso ≤ 45 palabras, incluida la regla del día
```

Un caso que se pase del presupuesto no se publica aunque cumpla U, SA y NR. Es un criterio de calidad, no de estilo, y se comprueba con un contador.

**Por qué prohíbo la disyunción cruzada de categorías, que es una pista clásica del género.** «O Clara tenía el candelabro o Diego estaba en el jardín» tiene tres problemas a la vez: (a) en español el «o» inclusivo y el exclusivo se dicen igual, y entre categorías distintas la biyección **no** los hace coincidir, así que la frase tiene dos lecturas; (b) al tocarla se encienden casillas de dos bloques sin relación, que es justo lo que la señal 1 prohíbe; y (c) lo único que aporta es dificultad, y tenemos cuatro formas mejores de subirla (cadenas T5, recuento T8, coartada cruzada, ordinales). Dentro de una misma categoría (T4) no hay problema: la biyección hace la disyunción exclusiva sola, y eso sí lo escribo como nota para el motor.

---

## 2. Qué se traslada de Escena y en qué se convierte

Catorce piezas. La columna que importa es la tercera: **casi ninguna se traslada tal cual**.

| Pieza en Escena | En Expediente se convierte en | Qué cambia y qué hay que decidir |
|---|---|---|
| **Interrogatorio de menú vivo (F-A)** | **El vis a vis (E-7)** | Cambia el catálogo de preguntas y aparece un coste por pregunta. **La ficción encaja mejor aquí que en Escena.** Ver §2.1 |
| **Sobres por progreso (V6/OD)** | Sobres contados por **casillas confirmadas**, no por colocaciones | Ver §2.2 |
| **Celdas bloqueadas (V16)** | **La coartada confirmada**: casillas ya marcadas en `board.givens` | Ver §2.3 |
| **Rastro del objeto (V2)** | **La cadena de custodia (E-3)** | La traducción literal es redundante: el recorrido por lugares ya es una categoría. Lo que añade valor es el eje **temporal**. Ver §2.4 |
| **Casa de dos plantas (V15)** | **El reparto (E-12)**: la planta es un **atributo de lugar** + pistas de recuento | **No es una cuarta categoría.** Ver §2.5 |
| **Tirar del hilo (V9)** | Igual, y vale más aquí | Ver §2.6 |
| **Sabueso de dos niveles (V11)** | Nivel 1 = la pista sin exprimir; nivel 2 = **el bloque y la fila** donde ya se puede cerrar algo | Misma política de OR y de tablero imposible |
| **Reconstrucción (V17)** | Igual, con animación sobre el cuaderno en vez de sobre el plano | El certificado es el mismo JSON |
| **Escalafón (V18/TR)** | **Catorce técnicas propias, diez de ellas inexistentes en Escena** | Ver §2.7 |
| **Acusación anticipada / probado vs por poco** | Acusación **atómica** de 3 o 4 campos con tres resultados | Ver §2.8 |
| **Semana con carácter (V22)** | Semana propia o día fijo | Ver §4 |
| **El vistazo (V14)** | 3 elementos, 3 categorías, techo N2 | Catalogar cuántos existen antes de prometerlo diario |
| **Pistas visuales (V3)** | **No se trasladan como pistas.** Los iconos viven en la ficha y son **atributos** | Ver §2.9 |
| **Cuatro manos (F-C)** | Hoja A / hoja B sobre el mismo cuaderno; AM sin cambios | Es **más fácil** de repartir aquí y se imprime mejor |
| **Confesión, «y sin embargo», tú eres sospechoso** | Igual, fuera de las pistas numeradas | Sin cambios |

### 2.1 El interrogatorio: qué se le pregunta a alguien en una cuadrícula lógica

La pregunta del encargo tiene una respuesta que me ha sorprendido escribiéndola: **el interrogatorio nació para este modo**. En Escena hay que justificar por qué un sospechoso contesta sobre un plano; en Expediente la ficción es literal —un detective pregunta a la gente dónde estaba y qué llevaba— y **cada respuesta cierra exactamente una casilla del cuaderno**, que es la retroalimentación más legible que tiene el producto.

**Catálogo de preguntas, con su coste y su forma formal:**

| Plantilla | Coste | Forma formal | Qué cierra |
|---|---|---|---|
| «¿Dónde estabas?» | **2** | `junto(s, l)` | Una fila entera del bloque sospechoso×lugar |
| «¿Qué llevabas?» | **2** | `junto(s, o)` | Una fila entera del bloque sospechoso×objeto |
| «¿Quién llevaba <objeto>?» | **2** | `junto(s', o)` | Una fila del bloque, sobre otro |
| «¿Estuviste en <lugar>?» | 1 | `junto(s,l)` o `¬junto(s,l)` | Una casilla |
| «¿Llevaba <fulano> <objeto>?» | 1 | `junto(s',o)` o su negación | Una casilla |
| «¿Viste algo de <material>?» | 1 | atributo del objeto del vecino en la tira de orden | Una casilla, solo con E-9 |

**El jugador tiene 4 fichas.** Abierta cuesta 2, cerrada cuesta 1. Esto resuelve un problema que en Escena no existe y que descubrí probando el menú sobre papel: **en Expediente una pregunta abierta es tan informativa que, sin coste asimétrico, el jugador siempre elige abierta y no hay decisión ninguna**. Con 4 fichas hay tres estrategias reales (dos abiertas; una abierta y dos cerradas; cuatro cerradas) y la elección se nota en cuántos pasos te quedan. Esa es exactamente la agencia que MV promete.

**Auditoría de degeneración, que es la lección de `ve(A,B)` del dictamen (§7.2) aplicada a este modo.** Bajo biyección hay preguntas y predicados que son idénticamente verdaderos o falsos y que por tanto **nunca informan**. Se prohíben en el DSL, no en la interfaz:

| Prohibido | Por qué |
|---|---|
| «¿Quién estaba contigo?» / `mismo_lugar(A,B)` | Idénticamente falso: una persona por lugar |
| «¿Estabas solo?» | Idénticamente verdadero |
| `distinto_lugar(A,B)`, `distinto_objeto(A,B)` | Idénticamente verdaderos: no restringen nada |
| «El culpable estaba donde apareció el cuerpo» | Tautología: es la definición de culpable |
| Atributo sin portadores («ninguno de los pelirrojos…» sin pelirrojos) | Vacío |
| `cuenta(C, k)` con `k = |C|` forzado por las reglas | Vacío |

**Lo que sí es legítimo y conviene saber lo que es:** «El asesino llevaba algo de plata» no es una tautología, es una T5 sobre el lugar de la víctima (`junto(R, o) → plata(o)`). Es una pista fuerte y perfectamente publicable, pero **cierra mucho**: el generador debe tratarla como cualquier otra y NR decidirá si cabe.

**Garantía.** La misma que en Escena: **MV + OR**, con la ventaja de que aquí el residuo (≤14.400 modelos) cabe holgadamente en el cliente. Y una condición propia, **MV-E**, porque el coste asimétrico la exige:

```
MV-E1  q es ofrecible en el estado E con p fichas restantes si existe una secuencia de
       preguntas de coste total ≤ p que empieza por q y deja |residuo| = 1,
       con certificado ≤N4 en cada paso
MV-E2  en todo estado alcanzable hay ≥2 preguntas ofrecibles y al menos una de cada coste
MV-E3  OR: el filtro se calcula sobre el residuo, que el jugador también puede calcular
```

MV-E2 es lo que impide que el menú degenere en «solo te dejo preguntar lo abierto».

### 2.2 Sobres: qué cuenta como progreso en una tabla

En Escena el umbral es «posiciones confirmadas». Aquí la traducción ingenua («casillas marcadas») se rompe: un jugador con autopropagación activada marca cuarenta casillas con un toque y abre los tres sobres antes de razonar nada.

**Regla:** el contador cuenta **casillas en verde (✓) del estado del cuaderno**, vengan del dedo del jugador o de la autopropagación, y los umbrales se fijan en función de `n`:

```
n = 4, 3 categorías (12 ✓ en total en la solución):  sobre 1 con 2 ✓ · sobre 2 con 5 ✓
n = 5, 3 categorías (15 ✓):                          sobre 1 con 3 ✓ · sobre 2 con 7 ✓
OD-E: con el prefijo P_j de pistas, el certificado alcanza u_j casillas ✓ usando solo pasos ≤N2
```

Contar ✓ y no toques es lo correcto por dos motivos: **OR** (el juego no dice nada sobre acierto, solo sobre avance) y equidad entre quien usa autopropagación y quien no, porque el estado del cuaderno es el mismo en los dos casos. Se comprueba con M3 ejecutando la escalera sobre el prefijo, igual que OD en Escena.

### 2.3 Celdas bloqueadas → la coartada confirmada

El equivalente exacto de `board.blocked` no es una pista negativa: es **una casilla que ya viene marcada y que no cuenta como pista**.

> **Cabecera:** «El comisario Bermejo ya comprobó dos cosas antes de llamarte: Casilda no estuvo en la terraza y el abrecartas no es de Tino.»

Formalmente van en **`board.givens`**, nunca en `clues`. Consecuencias, que son la razón de la distinción:

- No entran en el recuento de pistas que ve el jugador (el caso «tiene seis pistas» y no siete).
- **No entran en NR.** NR se comprueba sobre las pistas **dado el estado con givens aplicados**.
- Antes de generar hay que comprobar existencia: los givens no pueden por sí solos determinar la solución ni dejar el sistema insatisfacible. Es una llamada al solver, barata, y si se olvida el generador entra en bucle (mismo aviso que V16).

Valor de juego: **el cuaderno arranca con algo dentro**, que es la diferencia entre una tabla vacía intimidante y un expediente empezado. Es la mecánica que más baja el listón de entrada de todo el modo y por eso vive en el lunes y en las landings.

### 2.4 Rastro del objeto → la cadena de custodia

La traducción literal (un objeto que recorre tres lugares) **no funciona aquí y conviene decirlo**: en Expediente el vínculo objeto-lugar ya es un bloque del cuaderno, así que «el rodillo estuvo en la cocina antes que en el taller» crea un segundo camino hacia la misma información y rompe NR por la vía que el dictamen ya avisó en V2.

Lo que sí añade un tipo de razonamiento nuevo es el **eje temporal sobre la propiedad, no sobre el lugar**: quién tenía el objeto antes y quién después. Es E-3, y es la respuesta a «¿el arma que cambia de manos?»: sí, y con una restricción que preserva la biyección (un intercambio entre dos personas, no un traspaso suelto).

### 2.5 Casa de dos plantas → ¿cuarta categoría? No

La planta no es una categoría: es un **atributo de lugar**, y lo que desbloquea no son tres bloques más, son las **pistas de recuento** (T8) y el razonamiento de casillero. Cero coste de tablero, un tipo de deducción nuevo. Es E-12.

Regla general que se deduce de esto y que conviene escribir: **toda geometría de Escena se traduce en Expediente como atributo (si es una partición) o como tira de orden (si es una relación de vecindad).** Nunca como categoría.

### 2.6 Tirar del hilo, con un añadido propio

Contrato idéntico (`cells(pista, estado)`), pero aquí devuelve **bloque + coordenadas**, y hay una segunda función que en Escena no tiene sentido:

- **El hilo entre bloques.** Cuando hay `✓` en sospechoso–lugar y `✓` en lugar–objeto, el juego puede dibujar el `✓` implícito en sospechoso–objeto. Eso **es** una técnica (el cruce de tablas) y por tanto la autopropagación transitiva **es opcional y está desactivada por defecto en experto**. Motivo, y es importante: si el juego cruza las tablas solo, le está quitando al jugador exactamente la técnica que el escalafón quiere acreditarle.

En un cuaderno de 96 casillas tirar del hilo no es una comodidad: es la diferencia entre jugable y no jugable. Sigue siendo obligatoria y sigue costando 0,5 días si se escribe junto a cada predicado y 3 si se añade después.

### 2.7 Las técnicas de Expediente son otras: catorce, diez nuevas

Respuesta directa al encargo. Con el contrato de TR (el motor acredita **la técnica que el caso exige**, no la que el jugador usó).

| # | Nombre propuesto | Nivel | Qué es | Regla de detección para el motor | ¿Existe en Escena? |
|---|---|---|---|---|---|
| 1 | **El tachón** | N1 | Una pista negativa borra una casilla | Aplicación directa de T2/T3/T6 | Sí (eliminación directa) |
| 2 | **La cruz** | N1 | Un ✓ llena de ✗ su fila y su columna del bloque | Propagación de `junto` | No |
| 3 | **El único que queda** | N2 | En una fila o columna de un bloque solo queda una casilla viva | Conteo de dominio = 1 | Sí |
| 4 | **El cruce de tablas** | N2 | `s–l ✓` y `l–o ✓` ⟹ `s–o ✓` | Transitividad positiva entre tres bloques | **No** |
| 5 | **El cruce en negativo** | N3 | `s–l ✓` y `l–o ✗` ⟹ `s–o ✗` | Transitividad negativa | **No** |
| 6 | **El corte por atributo** | N2 | Una T6 elimina la misma casilla en varios portadores | Aplicación de T6 sobre ≥2 sospechosos | **No** |
| 7 | **La pareja atada** | N3 | Dos sospechosos confinados a los mismos dos lugares excluyen a los demás de esos dos | Par desnudo en un bloque | **No** |
| 8 | **El trío atado** | N3 | Igual con tres | Trío desnudo | **No** |
| 9 | **El reparto** | N3 | Una T8 más el casillero fijan una asignación | Recuento + palomar | Sí (dos plantas) |
| 10 | **La tenaza ordinal** | N3 | Dos T7 acotan por arriba y por abajo | Propagación de intervalos sobre el orden | **No** (parecida a la tenaza de orden, no igual) |
| 11 | **La cuenta del hueco** | N3 | Con una categoría de `n+1`, deducir cuál se queda sin dueño | Conteo sobre la inyección (E-4) | **No** |
| 12 | **El puente de tiempo** | N3 | Razonar a través del intercambio antes/después | Propagación por la transposición (E-3) | **No** |
| 13 | **La coartada imposible** | N4 | Suponer una de las dos ramas de la coartada cruzada y matarla | Rama que muere en ≤3 pasos (E-1) | **No** |
| 14 | **La rama corta** | N4 | Razonamiento por casos acotado, 2 ramas, ≤2 niveles | Genérico | Sí |

**Diez de las catorce no existen en Escena.** Eso convierte el escalafón en una segunda colección de verdad: un jugador que sea «detective» en Escena vuelve a ser aprendiz en la tabla, y el rango global del producto pasa de 14 a 24 técnicas. Es el mejor argumento de retención que tiene el segundo modo y no cuesta nada de contenido: sale de M3.

**Aviso de método, no negociable:** estos catorce nombres **no se implementan sin repetir la prueba 1 de D-010** (cinco personas, papel, describir el razonamiento en voz alta antes de ver ningún nombre, dos de LatAm, umbral ≥8 de 14). «Cruce de tablas» y «pareja atada» son los dos que más me preocupan: el primero puede sonar a jerga de contabilidad y el segundo viene del sudoku, donde el jugador que lo conoce lo llama «par desnudo». Si sus palabras no encajan, **se cambian los nombres, no la idea**.

### 2.8 Acusar en Expediente

La acusación tiene 3 campos (quién, dónde, con qué) o 4 el domingo (por qué). Dos decisiones:

- **Es atómica.** Se envía todo de una vez, una sola vez, con confirmación. Nada de acertar el culpable y seguir intentando el objeto: eso convierte el final en un examen a plazos.
- **Tres resultados con nombre**, que salen del certificado y del estado del cuaderno al pulsar:
  - **Expediente completo:** todos los campos correctos y el cuaderno entero deducido.
  - **Acusación firme:** culpable correcto, algún campo mal o alguna casilla sin deducir. Cuenta como resuelto para la racha (la racha se juega al culpable, no a la contabilidad).
  - **Se te escapó:** culpable incorrecto.

La distinción «probado / ganado por poco» de Escena se mantiene y aquí es más informativa, porque el certificado puede decir **si el culpable ya era deducible con el estado que tenías al acusar**.

### 2.9 Pistas visuales: no se trasladan

En Escena el plano puede alojar una pista (una huella en una habitación). En Expediente el equivalente sería dibujar algo en la ficha de un objeto, y eso **no puede ser una pista**: la ficha aloja atributos, que son permanentes, gratuitos y fuera de NR. Un dibujo que a veces es atributo y a veces es pista es indistinguible para el jugador y es exactamente el tipo de ambigüedad que P3 documenta.

**Regla:** en Expediente los iconos son **etiquetas de atributo** en la ficha (un candado si el lugar estaba cerrado, una gota si el objeto mancha, una mano si el sospechoso es zurdo) y **nunca** cuentan como pista. La única excepción, porque es tablero y no pista, es la **tira de orden** de E-9.

---

## 3. Doce mecánicas estructurales propias de Expediente

Ninguna de estas doce se puede construir en Escena, porque todas necesitan **más de una categoría asignada** o **una tabla como superficie**. Cada ficha lleva lo mismo: cómo se juega con un caso concreto, emoción, diferencia con Murdle, garantía formal en el lenguaje del motor, duración, complejidad y público. Los casos de ejemplo están verificados a mano: solución única, sin adivinar y sin pista sobrante.

Regla que sigue vigente y que aquí importa más que en Escena: **una mecánica estructural por caso**. Un expediente con coartada cruzada, cadena de custodia y objeto perdido no es difícil, es ilegible.

---

### E-1 · La coartada cruzada

**Cómo se juega.** Dos sospechosos se dan coartada mutua y **los dos dicen la verdad**. Lo que no dicen es en qué orden: «Estuvimos uno en la sala de subastas y otro en el archivo, y nos veíamos por la puerta». La pista fija el **par de lugares** para el **par de personas**, sin decir quién estaba en cuál. El caso se decide cuando otra cadena rompe el empate, y como uno de los dos lugares es donde apareció el cuerpo, **romper el empate es nombrar al culpable**.

> **Expediente 31 · La sociedad filatélica de Riodouro**
> Don Marcial Ondiz, tasador de sellos, apareció sin vida en **el archivo**.
> **Sospechosos:** Casilda Rey (encuadernadora) · Nicanor Puga (subastador) · Elvira Baamonde (perito calígrafa) · Tino Salgueiro (conserje).
> **Lugares:** la sala de subastas · el archivo · la conserjería · la terraza.
> **Objetos:** una lupa de latón · un abrecartas de nácar · un cepillo **de plata** · un tampón de tinta.

1. Casilda y Nicanor declaran lo mismo: estuvieron uno en la sala de subastas y otro en el archivo.
2. Tino no salió de la conserjería.
3. El abrecartas de nácar apareció en la terraza.
4. Nicanor no tocó el cepillo de plata.
5. Quien estaba en el archivo llevaba algo de plata.
6. La lupa de latón no salió de la conserjería.

**Cómo se deduce, sin adivinar.** Por 1 y 2, a Elvira solo le queda la terraza; por 3, lleva el abrecartas. Por 5, quien estaba en el archivo llevaba el cepillo, que es lo único de plata de la ficha. Por 4, Nicanor no llevaba el cepillo, luego **Nicanor no estaba en el archivo**: la coartada se resuelve sola y coloca a **Nicanor en la sala de subastas y a Casilda en el archivo**, con el cepillo. Por 6, Tino lleva la lupa; a Nicanor le queda el tampón. **La culpable es Casilda Rey, con el cepillo de plata.**

**El «ajá».** Paso 3: la coartada no salva a nadie, **coloca a los dos**. Es el mismo escalofrío que produce el mentiroso —descubrir que una declaración verdadera te condena— sin ninguna de sus injusticias.

**Diferencia con Murdle.** Allí la tensión de este tipo la dan los `statements`, donde el culpable miente y los inocentes no: el jugador que no sabe quién es el culpable no sabe qué frases puede usar, y de ahí sale el muro más citado del género (P15: *«no consigo resolver ni uno de los puzles con mentiroso»*). Aquí **todo el mundo dice la verdad siempre** y la dificultad está en una disyunción declarada, visible y acotada.

**Garantía formal. Propiedad nueva CC:**

```
CC1  exactamente una pista del caso tiene forma pareja(A,B;P1,P2) =
     (junto(A,P1) ∧ junto(B,P2)) ∨ (junto(A,P2) ∧ junto(B,P1))
CC2  NR estándar: sin esa pista el sistema tiene ≥2 modelos
CC3  el certificado resuelve la disyunción con un paso ≤N4 y la rama falsa
     muere en ≤3 pasos
CC4  exactamente uno de los dos lugares {P1,P2} es el lugar de la víctima, y por
     tanto el culpable es A en una rama y B en la otra
```

CC4 es la condición que separa esta mecánica de un adorno: si la coartada no contiene al culpable, resolverla es contabilidad. En el ejemplo, `P2 = el archivo`, y el culpable es Casilda o Nicanor según la rama. Verificación: `|C(8,2)|` comprobaciones de entrañamiento con M12, coste nulo.

**Duración.** +2 a +3 minutos. **Complejidad.** Motor media (una familia de pista nueva y el criterio CC), frontend baja (la pista pinta cuatro casillas en dos filas). **Público.** Luis y Sofía; el fan del género y el competitivo. Es la mecánica más «novela» de las doce.

---

### E-2 · El motivo, en el último minuto

**Cómo se juega.** El jugador acusa. Antes del informe aparece una pantalla corta con la voz de Sabueso: *«El juez no acepta una acusación sin motivo. Te quedan dos pruebas.»* Tres motivos, dos pistas, una respuesta. Sesenta a noventa segundos. **Fallar el motivo no pierde el caso**; quien acierta las dos cosas cierra el expediente completo.

> Sobre el Expediente 31. **Los tres motivos:** (a) don Marcial le había devuelto tres encuadernaciones sin pagarlas; (b) don Marcial sabía que el sello del lote 40 era falso; (c) don Marcial iba a dejar el archivo a la sobrina.
> **Prueba A.** Casilda no había entregado ningún trabajo a la sociedad desde marzo.
> **Prueba B.** El testamento de don Marcial es de 2019 y Casilda fue testigo de la firma.

A descarta (a); B descarta (c); queda **(b)**. Y el epílogo lo dice ella: *«Un sello no vale por lo que es. Vale por lo que la gente cree que es. Y él iba a contarlo.»*

**Emoción.** Cierre y humor. El caso termina con una frase, no con una casilla. Es la mejor ventana de tono de todo el producto.

**Diferencia con Murdle.** Allí el motivo es la cuarta columna del cuaderno los días que toca: más de lo mismo, más grande. Aquí es **otro ritmo y otra pantalla**, y por eso puede haberlo todos los días sin duplicar la tabla.

**Garantía formal.** Micro-CSP de 3 opciones y 2 pistas: U por enumeración, NR (quitar cualquiera de las dos deja ≥2 modelos) y, la condición que de verdad importa, **no entrañado**: con M12, `pistas_principales ∪ {motivo ≠ m*}` debe ser satisfacible. Si el motivo ya era deducible del caso principal, el beat se pierde y el caso se rechaza. Estructura obligatoria: con 3 opciones y 2 pistas, **las dos pistas son eliminatorias**; una pista que confirme directamente el motivo convierte la otra en redundante.

**Duración.** +1 a +2 minutos, saltable, con el botón de compartir al lado y nunca detrás. **Complejidad.** Motor baja (V7 ya presupuestado, 1,5 días), contenido media: tres motivos creíbles por caso, todos los días, para siempre. **Público.** Todos. Es de las pocas que no divide.

---

### E-3 · La cadena de custodia

**Cómo se juega.** En la cabecera, una frase: **«Dos de ellos se cambiaron lo que llevaban en algún momento de la tarde. El arma es lo que el culpable tenía al final.»** El cuaderno gana una columna de objetos «al principio» y otra «al final», o —mejor en móvil— un bloque de objetos y un pequeño control de dos huecos: *quién se cambió con quién*. La regla preserva la biyección: no hay traspasos sueltos, hay **un intercambio**.

> **Expediente 44 · El orfeón de Santa Rita**
> Don Anselmo Vigil, director del orfeón, apareció sin vida en **el ropero**.
> **Sospechosos:** Perpetua Nadal (contralto) · Fabián Osoro (tenor) · Milagros Quiroga (organista) · Damián Berlanga (afinador).
> **Lugares:** el ropero · el coro · la sacristía · el patio (el único al aire libre).
> **Objetos:** un diapasón de acero · una batuta de ébano · un paraguas de puño de asta · una carpeta de cuero.

1. Milagros no salió del coro.
2. Fabián no pisó ni el patio ni el ropero.
3. Damián pasó la tarde al aire libre.
4. Fabián llegó con el diapasón y se marchó con el diapasón.
5. Damián no soltó el paraguas en toda la tarde.
6. La batuta de ébano llegó al orfeón en el estuche de la organista.

**Cómo se deduce.** Por 3, Damián en el patio; por 1, Milagros en el coro; por 2, a Fabián solo le queda la sacristía y a **Perpetua el ropero**. Por 4 y 5, ni Fabián ni Damián participaron en el cambio; como la cabecera dice que se cambiaron exactamente dos, **el intercambio fue entre Perpetua y Milagros**. Por 6, Milagros llegó con la batuta, luego Perpetua llegó con la carpeta. Después del cambio, **Perpetua tenía la batuta**. La culpable es Perpetua Nadal y el arma, **la batuta de ébano, que no era suya**.

**Emoción.** La sorpresa moral que la doble franja da en Escena, aquí en versión objeto: **el arma estaba en las manos equivocadas**. Y una segunda, más pequeña y muy buena: la organista se pasa el caso pareciendo culpable porque el arma es suya, y no lo es.

**Diferencia con Murdle.** El arma allí es una categoría estática: quién la llevaba, punto. Un objeto con dueño anterior y dueño posterior es una capa temporal que la cuadrícula clásica no tiene, y produce un tipo de pista («no soltó lo suyo», «llegó con», «se marchó con») que allí no existe.

**Garantía formal. Propiedad nueva CT:**

```
Modelo   obj_antes: S → O biyectiva ; τ = transposición (A B) ; obj_despues = obj_antes ∘ τ
Espacio  (n!) · C(n,2) = 24 · 6 = 144 para n=4. Enumerable.
CT1  el sistema con τ = identidad es insatisfacible (el intercambio está forzado
     por las pistas, no es decorativo)
CT2  el portador del arma antes del intercambio NO es el culpable
     (si coinciden, la mecánica no cuenta nada y el caso se rechaza)
CT3  el certificado incluye al menos un paso de tipo "puente de tiempo"
```

CT2 es la garantía emocional escrita como condición verificable, que es exactamente lo que se le pide a este documento.

**Duración.** +3 a +4 minutos; **siempre `n = 4`**, nunca 5. **Complejidad.** Motor media (variable auxiliar sobre M10 y la transposición; ~2 días), frontend media (el control de intercambio y el estado antes/después sin duplicar el bloque). **Público.** Luis y Sofía. La familia lo entiende bien porque «se cambiaron las cosas» se explica en cinco palabras.

---

### E-4 · El objeto perdido

**Cómo se juega.** Cabecera: **«Cinco objetos, cuatro personas: uno se quedó sin dueño.»** La categoría de objetos tiene `n+1` valores y la asignación es inyectiva, no biyectiva. El efecto en el razonamiento es mayor de lo que parece: **la técnica «el único que queda» deja de funcionar en esa dirección**. Ya no basta con llegar al final y repartir lo que sobra: hay que **demostrar** cuál se queda huérfano.

> **Expediente 18 · La chocolatería Rives**
> Doña Rosalía Cimas, dueña de la casa, apareció sin vida en **el obrador**.
> **Sospechosos:** Ovidio Landa · Rita Cabezón · Julia Merodio.
> **Lugares:** el obrador · el despacho · la tienda (el único de cara al público).
> **Objetos (cuatro):** un cazo de cobre (metal) · una tetera de porcelana · unas tijeras de podar (metal, corta) · una libreta de tapas duras (cartón).

1. La tetera no salió del despacho.
2. Rita no entró en el obrador.
3. Julia no tocó nada de metal.
4. El cazo de cobre seguía caliente: alguien lo tenía en la mano.
5. Quien atendía en la tienda llevaba algo que corta.

**Cómo se deduce.** Por 5, las tijeras están en la tienda; por 1, la tetera en el despacho. Por 4 el cazo tiene dueño, y el único sitio libre es el obrador: **la libreta es el objeto sin dueño**. Por 3, Julia no puede estar ni en la tienda (tijeras) ni en el obrador (cazo): **Julia en el despacho**. Por 2, Rita no está en el obrador: **Rita en la tienda** y **Ovidio en el obrador, con el cazo de cobre**. Y la libreta estaba abierta sobre la mesa porque era de doña Rosalía.

**Emoción.** Inquietud limpia. Un objeto sin dueño en una tabla donde todo tiene dueño es una anomalía que se ve, y el jugador la persigue. Además da a la víctima un objeto propio, que es un regalo narrativo gratis.

**Diferencia con Murdle.** Todas sus categorías son de igual tamaño y la asignación es siempre completa. La columna de más es una asimetría declarada que cambia una técnica del solver humano, no un adorno.

**Garantía formal. Propiedad nueva OP, sobre una asignación inyectiva:**

```
INJ   asig_objeto: S → O inyectiva con |O| = n+1 ; exactamente un valor sin asignar
OP1   el hueco se anuncia en board.header (nunca se descubre en silencio)
OP2   la identidad del objeto huérfano es deducible y el certificado contiene al
      menos un paso "cuenta del hueco" que la usa como premisa
OP3   el generador comprueba que quitar el hueco (volviendo a n objetos) rompe U
```

Variante simétrica que sale gratis del mismo código: **`n+1` sospechosos y un lugar de menos**, es decir, alguien que no estuvo en la casa. Se usará en la sección infantil («uno se quedó en el recreo») y en el viernes.

**Duración.** Neutra o +1 minuto. **Complejidad.** Motor baja-media (inyección en vez de biyección; el solver no cambia de familia), frontend baja (una fila más en un bloque). **Público.** Todos, y es especialmente buena para el viernes y para el aula: la anomalía se explica sin tutorial.

---

### E-5 · La tabla del comisario

**Cómo se juega.** El cuaderno **llega con marcas puestas** —entre un tercio y un 40 %— y una cabecera: **«El comisario Bermejo ya rellenó parte del expediente. Una de sus marcas está mal. Las demás son buenas.»** El jugador tiene dos trabajos: encontrar la marca equivocada (tocarla dos veces la devuelve a vacío y el juego registra que la ha rechazado) y terminar el caso.

> Sobre el **Expediente 31** (la sociedad filatélica), con las mismas seis pistas.
> El comisario ha marcado: ✓ Tino–conserjería · ✗ Elvira–archivo · ✓ **Nicanor–archivo** · ✗ Casilda–terraza.
> Tres son correctas y se deducen de las pistas 2 y 1. La tercera es la falsa: por la pista 5, quien estaba en el archivo llevaba algo de plata, y por la 4 Nicanor no tocó el cepillo. **Nicanor no pudo estar en el archivo.** Al rechazar esa marca, la coartada cruzada se resuelve al revés y el caso se abre entero.

**Emoción.** Contradecir a la autoridad. Es la emoción más grande que he encontrado en todo el modo por el menor coste de motor, y viene con un regalo de producto: **un cuaderno medio lleno intimida mucho menos que uno vacío**, así que es el mejor formato para las landings, para el lunes y para quien llega por una búsqueda.

**Diferencia con Murdle, y por qué esto no es el mentiroso que descartamos.** El mentiroso pone la duda en **el texto**: no sabes qué frase puedes usar, y por eso es un muro (P15) y por eso D-010 lo descartó del ritual diario. Aquí la duda está en **una casilla**, la tabla te enseña exactamente dónde mirar, todas las pistas siguen siendo verdaderas siempre, y la refutación es una cadena corta y visible. Es la misma emoción con el riesgo invertido.

**Garantía formal. Propiedad nueva MT (marca falsa):**

```
MT1  exactamente una marca precargada m cumple  pistas ⊨ ¬m
MT2  TODAS las demás marcas precargadas cumplen  pistas ⊨ m
     (el regalo tiene que ser real: nada de marcas "probablemente ciertas")
MT3  la refutación de m tiene certificado ≤N4 y usa ≥2 pistas
     (con una sola pista es un error de copia, no una deducción)
MT4  las marcas precargadas van en board.givens; NR se comprueba sobre las pistas
     dado el estado con givens correctos aplicados
MT5  el caso sigue cumpliendo U, SA y NR si el jugador nunca rechaza la marca falsa:
     entonces el sistema es insatisfacible y el certificado lo detecta.
     Sabueso nivel 2 señala el bloque de la contradicción, nunca la casilla
```

MT2 y MT3 son las dos que hacen que el formato sea justo. MT5 es la política de rescate, y es la misma filosofía que la de Sabueso sobre un tablero imposible: **el juego nunca dice «tienes un error»**, acota dónde mirar.

**Duración.** −2 a −3 minutos frente a un caso equivalente vacío. **Complejidad.** Motor baja-media (M12 y una comprobación de cardinal), frontend media (marcas en un color propio, gesto de rechazo, y no confundir «marca del comisario» con «marca mía»). **Público.** Marta y el recién llegado por encima de todos; también Diego, porque en papel funciona igual.

---

### E-6 · El expediente invertido

**Cómo se juega.** Cabecera: *«Sabemos que fue Casilda Rey. El juez no lo acepta sin pruebas.»* El cuaderno llega **resuelto** y hay nueve pistas sobre la mesa. La tarea no es deducir: es **marcar el conjunto mínimo de pistas que demuestra que fue ella**. Sobrarle una es fallar igual que faltarle una.

> Sobre una variante ampliada del Expediente 31, con nueve pistas de las cuales cuatro son verdaderas y no prueban nada (Elvira llegó tarde; el tampón estaba seco; la terraza se cerró a las siete; Tino cobra los martes). La prueba mínima son **tres**: «quien estaba en el archivo llevaba algo de plata» + «Nicanor no tocó el cepillo» + la coartada cruzada.

**Emoción.** Cambia el verbo: de deducir a **justificar**. Y produce la única emoción que el género no da nunca: entender **por qué**, no solo qué. Enseña además a jugar mejor los casos normales, porque obliga a mirar qué hace cada pista.

**Diferencia con Murdle.** No existe allí, ni en Cluedo, ni en los cuadernos del género. Y en Expediente funciona mejor que en Escena por un motivo concreto: **la prueba mínima se lee como una historia** («el cepillo es de plata → quien estaba en el archivo llevaba plata → Nicanor no tenía el cepillo → la coartada cae del otro lado»), mientras que en un plano es una lista de coordenadas.

**Garantía formal.** **PU** sobre los soportes mínimos de `junto(Casilda, archivo)`, con dos correcciones que el dictamen ya dejó claras y que repito porque son la causa de que esto tenga generador propio:

```
PU1  para cada S ⊆ C, S "prueba" si S ∪ {¬junto(Casilda, archivo)} es insatisfacible (M12)
PU2  existe exactamente un S minimal (ningún subconjunto propio prueba)
PU3  |S| ≥ 2  (una sola pista es trivial) y objetivo |S| = 3 de 9
PU4  el conjunto de pistas es DELIBERADAMENTE REDUNDANTE: NR no se aplica.
     Por tanto NO se puede fabricar a partir de un caso del día: necesita
     su propio generador con redundancia controlada
```

**Duración.** 3-5 minutos. Es el mejor formato corto de todo el modo. **Complejidad.** Motor media (2 días, y el grueso es el generador con redundancia, no la enumeración: con 9 pistas son 512 comprobaciones). Contenido **alta**: escribir cuatro pistas verdaderas que suenan a prueba y no prueban nada es trabajo de guion fino, no de plantilla. **Público.** Luis y Diego. Formato de archivo, de Pack Aula y de Premium, **nunca caso del día** (D-010 ya lo colocó ahí y sigue siendo correcto).

---

### E-7 · El vis a vis · **firma X-A**

**Cómo se juega.** El caso abre con **dos pistas**, no con seis, y con **cuatro fichas de interrogatorio**. El jugador toca a un sospechoso y elige del menú de §2.1; las abiertas cuestan dos fichas y las cerradas una. Sobre el menú, siempre, la misma línea: *«Cualquiera de estas cierra el caso. Unas te dejan más trabajo que otras.»* Y cada respuesta **cierra una casilla concreta del cuaderno delante de sus ojos**, que es lo que le da el nombre.

> **Expediente 31**, versión miércoles. Abre solo con:
> 1. Tino no salió de la conserjería.
> 2. El abrecartas de nácar apareció en la terraza.
>
> **Ficha 1-2.** Pregunta a Casilda «¿qué llevabas?» (abierta, 2 fichas). *—Un cepillo de plata que le compré a su tío en la subasta de mayo.* → `junto(Casilda, cepillo)`.
> **Ficha 3.** Pregunta a Elvira «¿estuviste en la terraza?» (cerrada, 1). *—Sí, a fumar. Con este frío.* → Elvira en la terraza, con el abrecartas. Quedan Casilda y Nicanor para subastas y archivo.
> **Ficha 4.** Pregunta a Nicanor «¿llevaba Casilda algo de plata?» —no hace falta: el menú **ya no ofrece** esa pregunta, porque no dice nada en este estado. Sí ofrece «¿estuviste en el archivo?». *—Ni entré. Me quedé pujando hasta las nueve.* → **Casilda en el archivo**, y con el cepillo. Culpable y arma a la vez.

**Emoción.** Agencia, que es lo que le falta al género entero, y una segunda que es propia de este modo: **ver la tabla cerrarse por algo que has pedido tú**. En Escena la respuesta mueve una ficha; aquí tacha nueve casillas de golpe y el efecto visual es notablemente mejor.

**Diferencia con Murdle.** Sus `statements` son declaraciones **dadas**, todas a la vez, y una miente. Las nuestras son **elegidas**, llegan de una en una y todas son verdad. Y el interrogatorio de texto libre no es formalizable, así que nadie puede prometer la garantía.

**Garantía formal.** **MV-E + OR** (§2.1), más el catálogo cerrado de plantillas y la auditoría de degeneración. Y la decisión pendiente del dictamen §7.7, que cierro aquí para este modo: **las respuestas no cuentan para NR** (NR se aplica solo a las pistas base), pero **cada respuesta debe ser no vacía en el estado en que se hace**, que es justo lo que MV-E1 garantiza.

**Compuerta.** No se construye antes de medir la tasa de aceptación de MV-E sobre 10.000 candidatos, exactamente como la firma A de Escena, y con el mismo plan de repliegue en tres escalones (menú de menos plantillas → 3 fichas → variante acelerador → el miércoles pasa a sobres). Ventaja frente a Escena: aquí el residuo es enumerable, así que la medición es más rápida y más fiable.

**Duración.** 8-12 minutos, `n = 4` siempre. **Complejidad.** Motor alta (4-6 días compartidos con V4: el mismo filtro sirve para los dos modos si el DSL se escribe bien), frontend media. **Público.** Marta y Sofía por la pared inicial que desaparece; Luis por la ficción; la familia porque se reparten las fichas sola («una pregunta cada uno»), que es el hallazgo del panel en Escena y aquí funciona igual.

---

### E-8 · La doble víctima

**Cómo se juega.** Dos hechos en la misma tarde y en dos sitios distintos, y **la pregunta final es si fue una persona o fueron dos**. Para que eso sea posible, los dos culpables se definen por caminos distintos: uno por **lugar** («quien estaba en el obrador») y otro por **objeto** («quien se llevó la llave del almacén»). Bajo biyección, dos definiciones por lugar darían siempre dos personas distintas y no habría tensión; cruzando categorías, pueden coincidir.

> **Expediente 52 · El casino de Ribadela** (especial mensual, `n = 4`)
> A don Elpidio Barrantes lo encontraron sin sentido en **el salón de juego**. Y esa misma tarde desapareció la recaudación, que estaba en la caja: quien la abrió tenía **la llave de latón**.
> La acusación tiene dos nombres, y pueden ser el mismo.

**Emoción.** Suspense hasta el último paso, que es algo que una cuadrícula lógica casi nunca consigue: el último «ajá» no es una casilla, es **cuántos nombres hay que escribir**.

**Diferencia con Murdle.** Un caso, un culpable, siempre. La ambigüedad estructurada sobre el número de responsables no existe en el género y no se puede improvisar: hay que demostrarla.

**Garantía formal. Propiedad nueva DV:**

```
DV1  culpable₁ = asig_lugar⁻¹(R)   ;   culpable₂ = asig_objeto⁻¹(llave)
DV2  con el conjunto de pistas menos la última del certificado,
     NI  pistas ⊨ (culpable₁ = culpable₂)  NI  pistas ⊨ (culpable₁ ≠ culpable₂)
     (las dos lecturas siguen vivas hasta el último paso: es la propiedad de suspense,
      y es verificable con dos llamadas a M12)
DV3  U, SA y NR sobre el sistema completo, como siempre
DV4  el resultado y el compartible reflejan los dos nombres sin revelar cuáles
```

DV2 es la que convierte «esto tiene suspense» en algo que una máquina comprueba, que es el trabajo de este documento.

**Duración.** +3 a +4 minutos. **Complejidad.** Motor baja (dos objetivos de entrañamiento; se apoya en M12), frontend media (acusación de dos nombres, y hay que resolver bien el caso de «son la misma persona» sin que parezca un error de la interfaz). **Público.** Luis, Sofía y la familia el domingo. **Restricción de contenido:** nunca dos fallecidos. Un hecho grave y un hurto, o dos hurtos en la versión infantil. La regla cozy manda.

---

### E-9 · El pasillo: los lugares tienen orden

**Cómo se juega.** Los lugares se imprimen en una **tira ordenada** con el origen declarado —«desde la entrada: el zaguán, la sala de lectura, la galería, el jardín»— y eso desbloquea las pistas ordinales (T7): «más lejos de la entrada que», «entre A y B» (estricto), «justo antes de». Si además los sospechosos tienen un orden impreso (altura, edad), una pista puede cruzar los dos órdenes, que es la pista más satisfactoria del modo y también la más peligrosa.

> **Expediente 27 · El balneario de Fuentelmonte**
> Don Isidro Camba, aguador jubilado, apareció sin vida en **la sala de lectura**.
> **Los lugares, desde la entrada:** el zaguán · la sala de lectura · la galería · el jardín (el único al aire libre).
> **Sospechosas y sospechoso, de más alta a más bajo:** Olimpia Recuero · Amaranta Sierra (bibliotecaria) · Bruno Casal · Filomena Trigo.
> **Objetos:** un bastón de fresno · un frasco de sales · una lámpara de aceite · un cesto de mimbre.

1. La más alta estaba más lejos del jardín que la bibliotecaria.
2. Bruno pasó la tarde al aire libre.
3. Amaranta no llegó a entrar en la galería.
4. El cesto de mimbre estaba en el jardín.
5. Quien llevaba el bastón estaba más cerca de la entrada que quien llevaba la lámpara.
6. El frasco de sales estaba en la sala más cercana a la entrada.

**Cómo se deduce.** Por 2, Bruno en el jardín. Por 1, Olimpia está más lejos del jardín que Amaranta, o sea más cerca de la entrada; por 3, Amaranta no está en la galería, luego Amaranta está en la sala de lectura y **Olimpia en el zaguán**, y a **Filomena le queda la galería**. Por 4, Bruno lleva el cesto; por 6, Olimpia el frasco de sales; por 5, el bastón está antes que la lámpara, luego **Amaranta el bastón y Filomena la lámpara**. **La culpable es Amaranta Sierra, con el bastón de fresno.**

**Emoción.** El placer ordinal, que es el de los puzles de Nikoli: acotar por los dos lados hasta que solo cabe una cosa. Y visualmente la tira de orden es lo más parecido a un plano que Expediente puede tener sin dejar de ser una tabla.

**Diferencia con Murdle.** Sus lugares son un conjunto sin estructura; las relaciones ordinales que usa son sobre atributos del sospechoso (signo, altura), no sobre el espacio. Una tira de lugares con origen declarado es tablero, no pista, y abre una familia entera.

**Garantía formal.**

```
ORD1  el orden es total, estricto y está impreso en la cabecera con el origen declarado
      ("desde la entrada"), y se dibuja siempre, también en el imprimible
ORD2  "entre" es estricto; "justo antes/después" es contigüidad exacta; sin empates
ORD3  máximo UNA pista que cruce dos órdenes distintos (lugares × altura) por caso,
      y nunca antes del miércoles
ORD4  cells(pista, estado) de una T7 devuelve el intervalo, no la casilla: el hilo
      pinta un tramo de la tira
```

ORD3 es la regla que evita el desastre. Una pista que cruza dos órdenes es N3 y se lee tres veces; dos en el mismo caso y el jugador cierra la pestaña. Es exactamente la queja P4 («no se sabe de dónde se cuenta») trasladada a este modo, y la solución es la misma: **el origen se rotula siempre**.

**Duración.** +1 a +2 minutos. **Complejidad.** Motor media (orden precalculado y propagación de intervalos), frontend baja-media (la tira). **Público.** Luis y Sofía; Marta si el origen está rotulado, y no si no lo está.

---

### E-10 · La contraprueba · **firma X-B**

**Cómo se juega.** El jugador acusa y acierta. Antes del informe, cuarenta segundos: el juego **ilumina una casilla de su cuaderno** y pregunta *«¿Con qué lo demuestra?»*. El jugador toca las pistas que la prueban —dos o tres— y confirma. Acertar da la etiqueta **expediente probado** y acredita la técnica en el escalafón; fallar no quita nada y el juego enseña la cadena buena.

> Sobre el Expediente 31. El juego ilumina **Casilda–archivo** y pide la prueba. La respuesta es 5 + 4 + 1: quien estaba en el archivo llevaba plata; Nicanor no tocó el cepillo; la coartada dice que uno de los dos estaba en el archivo. Tres pistas, ni una más. Si el jugador marca también la 2, el juego responde: *«Con esas tres bastaba. La de Tino no hacía falta.»*

**Emoción.** La única de las doce que produce **orgullo verificado**: no «he acertado», sino «sabía por qué». Y hace algo que ninguna otra pieza hace: convierte el certificado, que es nuestro activo invisible, en algo que el jugador **usa** en vez de mirar.

**Diferencia con Murdle.** Allí acertar y demostrar son indistinguibles: rellenas la cuadrícula y acusas. Aquí se separan y se nombran, y eso solo se puede hacer si existe un solver que sepa qué prueba qué. Es, literalmente, «lo único que solo nosotros podemos hacer».

**Garantía formal.** **PU restringida a una celda**, calculada con M7 y M12:

```
CP1  el generador elige la celda objetivo entre las que tienen EXACTAMENTE UN
     soporte mínimo, de tamaño 2 o 3
CP2  si ninguna celda cumple CP1, la contraprueba de ese caso NO se ofrece
     (mejor no ofrecerla que ofrecer una con dos respuestas válidas)
CP3  la celda elegida es la de mayor peso narrativo entre las candidatas:
     la del culpable si califica, si no la del arma
CP4  fallar la contraprueba no cambia el resultado del caso ni la racha
```

CP2 es la clave de por qué esto es barato y seguro: es **opcional por caso**. No hay que forzar al generador a nada; se ofrece cuando sale.

**Duración.** +40 segundos. **Complejidad.** Motor baja (M7 y M12 ya presupuestados; medio día), frontend baja (iluminar una casilla y marcar pistas, que es un gesto que el jugador ya conoce de tirar del hilo). **Público.** Todos, y sobre todo Sofía y Diego: es un ítem de rúbrica perfecto y es lo que hace que el escalafón se sienta ganado.

**Sinergia que justifica construirla pronto:** es el **entrenamiento diario de cuarenta segundos** que hace que E-6 (el expediente invertido) se entienda sin tutorial. Sin ella, el invertido necesita una pantalla de explicación; con ella, el jugador ya lo ha hecho quince veces.

---

### E-11 · La rueda de reconocimiento

**Cómo se juega.** Un testigo que **no es sospechoso** (la portera, el taxista, el niño de la ventana) describe a alguien por **atributos**, nunca por nombre: *«Vi salir a alguien alto, con gafas, y llevaba algo que brillaba.»* El jugador cruza las fichas para saber de quién habla. La descripción es una pista con dos capas: primero identificar, luego aplicar.

> Sobre el **Expediente 27**. La portera declara: *«La que subió a la galería era de las bajitas y no llevaba gafas.»* En la ficha, las dos más bajas son Bruno y Filomena, y Bruno lleva gafas. La descripción señala a **Filomena**, y entonces dice algo del caso: Filomena estaba en la galería.

**Emoción.** La rueda de reconocimiento de las películas, y una sensación de cerco muy física: cada atributo que se añade tacha caras.

**Diferencia con Murdle.** Allí los atributos se usan como condicionales universales sobre un subconjunto («quien estuviera en el laberinto era zurdo»), que es potente pero se lee mal cuando hay varios zurdos. La nuestra es una **descripción identificadora con portador único garantizado**, y el artículo avisa de cuál es cuál (regla 3 de §1.4). Las dos formas conviven; lo que no puede ocurrir es que el jugador no sepa cuál está leyendo.

**Garantía formal. Propiedad nueva RR:**

```
RR1  la conjunción de atributos de cada descripción tiene EXACTAMENTE UN portador
     en el reparto de ese caso (comprobado contra las fichas, no contra la solución)
RR2  ≥2 atributos por descripción (con uno es una pista de atributo normal)
     y ≤3 (con cuatro es un acertijo de lectura)
RR3  máximo UNA descripción por caso
RR4  la descripción se redacta con la plantilla canónica de T6 encadenada;
     la voz del testigo va en el prefijo de atribución, no dentro de la frase
```

RR1 es lo que evita la trampa: si la conjunción tuviera dos portadores, en español «vi a alguien alto y con gafas» es un existencial y la pista tendría dos lecturas. Con portador único es una pista directa cuyo coste es cruzar fichas, que es N2 y muy agradable.

**Duración.** Neutra. **Complejidad.** Motor baja (una comprobación de cardinal sobre las fichas), frontend baja (resaltar las fichas que quedan vivas al leer la descripción es un extra bonito y opcional). **Público.** Marta, la familia e infantil. Es la mecánica más intuitiva de las doce y la que menos explicación necesita.

---

### E-12 · El reparto: la casa de dos plantas, sin cuarta categoría

**Cómo se juega.** Los lugares llevan un atributo impreso que los parte en dos grupos (arriba/abajo, dentro/fuera, con luz/a oscuras) y las pistas cuentan: **«Dos de ellos estaban arriba»**, «Solo uno llevaba algo de metal», «Ninguno de los que estaban fuera llevaba paraguas». La palabra «dos» significa **exactamente dos**, siempre, y eso se dice en la cabecera la primera vez.

> Sobre el **Expediente 27**, versión domingo: el balneario tiene planta baja (zaguán, sala de lectura) y planta alta (galería, mirador). Pista: «Exactamente dos de ellos estaban en la planta alta» + «Ninguna de las dos más altas subió» ⟹ las dos de arriba son Bruno y Filomena, y las dos de abajo, Olimpia y Amaranta. Dos pistas y medio caso resuelto sin tocar una sola casilla de objeto.

**Emoción.** La del casillero: saber cuántos caben sin saber quiénes, y que eso baste. Es una satisfacción distinta a la del tachón y muy poco explotada en el género.

**Diferencia con Murdle.** Las pistas de recuento son raras allí y cuando aparecen se leen como «al menos». Fijar por convención que **el número es exacto** convierte una familia ambigua en una familia limpia, y es una decisión de vocabulario, no de motor.

**Garantía formal.**

```
CNT1  cuenta(C, k) es SIEMPRE cardinal exacto; "al menos" y "como mucho" no existen
      en el vocabulario publicado
CNT2  el conjunto C se define solo por atributos impresos, nunca por enumeración
      de nombres (para eso está T3)
CNT3  la partición tiene al menos dos elementos por lado (una partición 1-3 hace
      que el recuento sea una pista directa disfrazada)
CNT4  máximo dos pistas de recuento por caso
```

**Duración.** Neutra. **Complejidad.** Motor baja-media (restricción de cardinalidad en el solver, familia nueva pero estándar), frontend baja (una etiqueta en la cabecera de cada lugar). **Público.** Todos. Y es la traducción correcta del domingo de dos plantas de Escena: **misma emoción de escala, cero casillas nuevas**.

---

### 3.13 Tabla resumen de las doce

| # | Mecánica | Emoción | Propiedad nueva | Duración | Motor | Frontend | Público | Dónde vive |
|---|---|---|---|---|---|---|---|---|
| E-1 | Coartada cruzada | Giro sin injusticia | **CC** | +2/+3 | Media | Baja | Luis, Sofía | Sábado |
| E-2 | Motivo en el último minuto | Cierre, humor | (V7) no entrañado | +1/+2 | Baja | Baja | Todos | Todos los días |
| E-3 | Cadena de custodia | Sorpresa del objeto | **CT** | +3/+4 | Media | Media | Luis, Sofía | Especial mensual |
| E-4 | Objeto perdido | Inquietud limpia | **OP / INJ** | 0/+1 | Baja-media | Baja | Todos | Viernes |
| E-5 | Tabla del comisario | Contradecir | **MT** | −2/−3 | Baja-media | Media | Marta, nuevo | Jueves y landings |
| E-6 | Expediente invertido | Comprensión | **PU** | 3-5 total | Media | Baja | Luis, Diego | Archivo y aula |
| E-7 | **Vis a vis** | Agencia | **MV-E + OR** | 8-12 total | Alta | Media | Todos | Miércoles |
| E-8 | Doble víctima | Suspense final | **DV** | +3/+4 | Baja | Media | Luis, familia | Especial mensual |
| E-9 | El pasillo (orden) | Placer ordinal | **ORD** | +1/+2 | Media | Baja-media | Luis, Sofía | Transversal |
| E-10 | **La contraprueba** | Orgullo verificado | **CP** (PU de celda) | +40 s | Baja | Baja | Todos | Todos los días |
| E-11 | Rueda de reconocimiento | Cerco | **RR** | 0 | Baja | Baja | Marta, familia | Transversal |
| E-12 | El reparto | Casillero | **CNT** | 0 | Baja-media | Baja | Todos | Domingo |

---

## 4. La semana de Expediente

### 4.1 Si Expediente fuera un ritual diario paralelo

Una estructural por día, ninguna acumulada, y **el mismo carácter de día que Escena aunque el caso sea otro**. Esa es la decisión que hace que la semana se pueda contar en una frase: *«el miércoles se pregunta, juegues donde juegues; el jueves alguien ha tocado el tablero antes que tú; el viernes el objeto es el protagonista»*.

| Día | Nombre en pantalla | Preajuste | Estructural (una) | Duración | Banda | Carácter compartido con Escena |
|---|---|---|---|---|---|---|
| **Lunes** | **El expediente corto** | 4, 3 cat | **Sobres por progreso** (§2.2) + givens de coartada confirmada | 5-7 min | Suave | El día de entrada, el de las landings |
| **Martes** | **El clásico** | 4, 3 cat | Ninguna. Seis pistas a la vista | 6-9 min | Normal | La forma canónica |
| **Miércoles** | **El vis a vis** | 4, 3 cat | **E-7** (2 pistas + 4 fichas) | 8-12 min | Normal-enrevesado | **El día de preguntar** |
| **Jueves** | **La tabla del comisario** | 5, 3 cat | **E-5** | 8-11 min | Enrevesado | **El día en que el tablero llega tocado** (en Escena, una habitación sellada) |
| **Viernes** | **De disparate** | 4 + 5 objetos | **E-4** el objeto perdido | 6-9 min | Suave-normal | **El día del objeto**, sin fallecidos, humor cozy |
| **Sábado** | **El careo** | 5, 3 cat | **E-1** la coartada cruzada | 10-14 min | Difícil | El más duro de la semana |
| **Domingo** | **El XL** | 4, **4 cat** (motivo) | Cuarta categoría + **E-12** como familia de pistas | 15-22 min | Enrevesado, **nunca el más duro** | Grande, no castigo |

**Fuera del ritual:** el vistazo de 3 elementos (2-3 min, numeración propia), **el expediente invertido** (E-6) en el archivo y en el Pack Aula, y el caso a cuatro manos cuando pase su prueba en papel.
**Transversales, todos los días:** la contraprueba (E-10), el motivo (E-2), tirar del hilo, Sabueso de dos niveles, la reconstrucción, el escalafón, la etiqueta probado/por poco, y las familias E-9 y E-11 cuando el caso las admita.
**Especiales mensuales, alternos:** la cadena de custodia (E-3) y la doble víctima (E-8).

**Dos divergencias respecto a D-010 que declaro en vez de esconder:**

1. **El sábado de Escena no tiene mecánica estructural («el reto es la profundidad») y el de Expediente sí.** El motivo: en una cuadrícula, «más profundidad» a igualdad de tamaño es **más contabilidad**, no más razonamiento; el jugador no percibe un sábado difícil, percibe un sábado largo. La coartada cruzada sube la profundidad medida **con una historia**, que es lo que el día necesita. Si `director-producto` prefiere mantener la simetría, el repliegue es dejar el sábado limpio y mover E-1 al jueves, y entonces E-5 pasa a las landings y al archivo.
2. **El domingo lleva cuarta categoría, que es la única concesión al «más grande».** Es coherente con la regla «el domingo es el más grande y no el más duro» (D-007 §6.12): 96 casillas dan volumen sin subir el nivel máximo del certificado. La banda de dificultad medida del domingo **debe quedar por debajo de la del sábado**; si el generador no lo consigue, se baja el número de pistas, no el tamaño.

**Y la nota de temporada, que es una palanca de operación barata:** a los tres meses, una sola casilla de la tabla rota (por ejemplo, el jueves pasa de E-5 a E-3). Cambiar un día al trimestre mantiene la semana aprendible y da a `creador-social` algo que anunciar sin construir nada.

### 4.2 Si Expediente fuera un día fijo de la semana de Escena

**El jueves.** Y el argumento es más fuerte de lo que parece, porque no se trata solo de encontrar un hueco: se trata de que **el día conserve su carácter al cambiar de superficie**.

Descarte de los otros seis, en orden:

- **Lunes.** Es el día de entrada y el de las landings. Un cuaderno de 48 casillas es un primer contacto más duro que un plano de 16, aunque el caso sea más fácil. No.
- **Martes.** Es la forma canónica de Escena y el día de Luis, que quiere leerlas todas antes de tocar nada. Quitarle su día al perfil que paga el archivo es mal negocio.
- **Miércoles.** Es la firma. No se regala.
- **Viernes.** Es el día de la familia y del aula, y el plano en el sofá funciona mejor que la tabla.
- **Sábado.** Poner el segundo modo en el día más duro hace que su primera impresión sea un muro. Es la peor opción de las siete.
- **Domingo.** Tentador —el XL de cuatro categorías es genuinamente el mejor domingo posible— pero el domingo ya es el día de la casa de dos plantas, es el día colectivo que describe la prensa, y es el único con un ritual establecido (15-25 min, en el sofá). Cambiarlo cuesta más de lo que da.

**Por qué el jueves sí:**

1. **Es el día con menos identidad que perder.** Su regla actual (una habitación sellada) es la variación más pequeña de las siete, y además **sobrevive intacta al cambio de superficie**: en Expediente, «hay algo que ya está decidido antes de empezar» son los `board.givens` de la coartada confirmada, o directamente la tabla del comisario (E-5). El jugador que espera «hoy hay algo cerrado» sigue encontrándolo.
2. **Está en mitad de la semana**, que es donde un cambio de superficie combate mejor la fatiga y donde la retención flojea.
3. **La banda encaja sin tocar nada:** el jueves de Escena es 5×5, 8-11 minutos, banda enrevesado. Un Expediente de 4 elementos y 3 categorías con la tabla del comisario cae en 8-11 minutos y en la misma banda. La curva semanal no se deforma.
4. **La racha es una** (§1.3 de `funcionamiento-productos.md`), así que el jueves no obliga a nadie: quien no soporte las tablas juega el jueves de Escena en el archivo del miércoles o se salta el día con su gracia. Nadie pierde nada.

**El aviso que va con la recomendación.** Un modo que existe un día a la semana **nunca construye hábito propio** y su escalafón se llena a un séptimo de velocidad: catorce técnicas a tres casos cada una son 42 jueves, más de nueve meses. Así que la recomendación completa tiene dos tiempos:

> **Empezar por el jueves fijo** (una sola pieza de contenido semanal, cero canibalización, medición limpia) y **abrir la semana paralela completa** cuando se cumpla el disparador: **≥15 % de quienes juegan el jueves vuelven a jugar un Expediente del archivo por su cuenta dentro de los siete días siguientes**. Ese número mide deseo, no curiosidad, y se lee con dos eventos de analítica que ya están en la lista de F15.

Mi preferencia, si se me pide una sola respuesta: **jueves primero, semana paralela después**, y no al revés. Sacar siete días de Expediente sin saber si alguien quiere el segundo es siete veces el coste de contenido para el mismo dato.

---

## 5. Mis cinco favoritas y lo que descarto

### 5.1 Las cinco

**E-7 · El vis a vis.** El interrogatorio nació para este modo y no para Escena: un detective pregunta a personas, no a un plano, y aquí cada respuesta tacha nueve casillas delante de tus ojos en vez de mover una ficha. Es la única mecánica que ataca la queja de fondo del género —la pared de texto de la primera pantalla— sin quitar ni una gota de lógica. Y el coste asimétrico de las preguntas (abierta 2, cerrada 1) convierte el menú en una decisión real, que es lo que a la versión de Escena le falta.

**E-10 · La contraprueba.** Cuarenta segundos, medio día de motor, y es la única pieza del producto entero que pone el certificado en las manos del jugador en vez de enseñárselo. Convierte «he acertado» en «sabía por qué», que es exactamente la promesa de la marca, y es el entrenamiento diario que hace comprensible el expediente invertido sin una sola pantalla de tutorial. Si solo se pudiera construir una cosa de las doce, sería esta.

**E-1 · La coartada cruzada.** Da la emoción del mentiroso —una declaración verdadera que te condena— sin ninguno de sus cuatro defectos, y con una condición formal, CC4, que garantiza que la coartada contiene al culpable y por tanto **resolverla es el caso**. Ganamos la comparación en el terreno donde el género tiene su muro más citado, y lo ganamos por construcción, no por suerte.

**E-5 · La tabla del comisario.** Es la mejor relación entre emoción y coste de las doce: contradecir a la autoridad no lo da ninguna otra mecánica, y de paso resuelve el problema de entrada del modo, porque un cuaderno medio lleno no asusta y uno vacío sí. Es el formato de landing que Expediente necesita para existir en búsqueda, y en papel funciona igual de bien.

**E-3 · La cadena de custodia.** Es lo que la doble franja es para Escena: el único eje nuevo, el tiempo. Y produce un beat que la cuadrícula clásica no puede contar estructuralmente —el arma estaba en las manos equivocadas— con una condición, CT2, que lo garantiza en vez de esperarlo. Es la más cara de las cinco y la única que pediría medir antes de comprometer.

### 5.2 Lo que descarto, con el motivo

| Idea | Por qué no |
|---|---|
| **El mentiroso al estilo del género** (declaraciones donde el culpable miente) | D-010 lo descartó del ritual diario con cuatro negativos independientes, y en Expediente es **peor** que en Escena: la mentira vive en el texto y la tabla no te enseña dónde mirar. La emoción se recupera entera con E-1 y E-5, que son localizables por construcción |
| **Seis elementos por categoría** | El problema no es que sean 373 millones de asignaciones: es que son 108 casillas con 3 categorías y 216 con 4. No caben en 360 píxeles con objetivos táctiles de 44 px, y no caben en quince minutos |
| **Cuarta categoría entre semana** | Duplica el cuaderno y no añade ningún tipo de deducción nuevo. El motivo tiene una versión que sí añade algo y no cuesta casillas: E-2 |
| **Disyunción cruzada de categorías** («o Clara tenía el candelabro o Diego estaba en el jardín») | Dos lecturas en español, enciende casillas de dos bloques sin relación, y lo único que aporta es dificultad que conseguimos mejor con T5, T8, E-1 y E-9 |
| **Condicional con antecedente falso** | Vacío por definición: el jugador siente que le han robado una pista. T9 solo se publica si el certificado la usa en contrapositivo o con el antecedente ya probado |
| **Pistas cifradas y criptogramas** (el «modo difícil» del incumbente) | No es deducción, es teclear; es inaccesible para lector de pantalla y es exactamente el tipo de dificultad que P14 llama «salto brutal» |
| **Categorías no biyectivas sin anunciar** (dos personas en el mismo sitio) | Destruye la única regla que el jugador sabe sin tutorial («si hay un ✓, el resto de la fila y la columna son ✗»). La única asimetría permitida es la declarada de E-4 |
| **Autopropagación transitiva obligatoria** | Le quita al jugador el cruce de tablas, que es justo la técnica que el escalafón quiere acreditarle. Opcional siempre, desactivada por defecto en experto |
| **Puntuación por porcentaje de casillas correctas** | Convierte la deducción en un examen. Es el error documentado del único competidor que abre información durante la partida, y ya tenemos prohibido castigar el fallo |
| **Dos marcas falsas en la tabla del comisario** | La segunda duplica la ramificación y rompe la garantía de refutación en ≤N4. Una es un caso; dos es una lotería |
| **Doble víctima con dos fallecidos** | Regla de contenido cozy. Un hecho grave y un hurto, o dos hurtos en la versión familiar |
| **Interrogatorio de texto libre** | No es formalizable: sin menú cerrado no hay MV-E que verificar y la unicidad se rompe el primer día |
| **Atributos que exigen cultura general** | Ya prohibido por el proyecto y aquí es la primera causa de pista injusta: si la pista dice «pesado», la ficha dice «pesado» |
| **Un caso con dos mecánicas estructurales** | Un expediente con coartada cruzada, cadena de custodia y objeto perdido no es difícil: es ilegible. Una por caso, transversales encima |

---

## 6. Contrato para `ingeniero-motor-puzzles`

Todo lo que sigue está decidido. Nada de esto necesita una consulta.

### 6.1 Esquema de caso de Expediente

```jsonc
{
  "schema_version": "expediente.v1",
  "seed": "...",
  "mode": "expediente",
  "preset": "clasico",                    // vistazo | corto | clasico | ancho | xl
  "board": {
    "n": 4,
    "categories": ["sospechoso", "lugar", "objeto"],   // ancla siempre la primera
    "entities": {
      "sospechoso": [{ "id": "casilda", "nombre": "Casilda Rey", "oficio": "encuadernadora",
                       "atributos": { "altura_rank": 2, "mano": "diestra" } }, "..."],
      "lugar":      [{ "id": "archivo", "nombre": "el archivo",
                       "atributos": { "planta": "baja", "exterior": false }, "orden": 2 }, "..."],
      "objeto":     [{ "id": "cepillo", "nombre": "un cepillo de plata",
                       "atributos": { "material": "plata", "peso": "ligero" } }, "..."]
    },
    "order": { "lugar": { "origen": "la entrada", "secuencia": ["zaguan","lectura","galeria","jardin"] } },
    "extra": null,                        // { "categoria": "objeto", "sobrantes": 1 }  para E-4
    "givens": [ { "bloque": "sospechoso×lugar", "x": "tino", "y": "conserjeria", "valor": true } ],
    "victima": { "lugar": "archivo" },
    "header": "Una de estas marcas está mal."          // ≤45 palabras, incluye la regla del día
  },
  "clues_formal": [ { "id": "c1", "tipo": "T5", "..." : "..." } ],
  "clues_text":   [ { "id": "c1", "texto": "Quien estaba en el archivo llevaba algo de plata." } ],
  "solution":     { "casilda": { "lugar": "archivo", "objeto": "cepillo" }, "...": "..." },
  "mecanica":     { "tipo": "coartada_cruzada", "params": { "...": "..." } },
  "difficulty":   { "etiqueta": "enrevesado", "pasos": 9, "nivel_max": "N3", "recalculable": true },
  "tecnicas_requeridas": ["cruce_de_tablas", "corte_por_atributo", "coartada_imposible"],
  "decorados":    ["el frío de la terraza", "la subasta de mayo"],
  "presupuesto":  { "palabras_pistas": 96, "max_por_pista": 20 }
}
```

### 6.2 Propiedades a verificar, todas nuevas o adaptadas

| Sigla | Para | Qué exige | Coste |
|---|---|---|---|
| **U, SA, NR** | Todo | Como siempre. NR se comprueba **dado el estado con `givens` aplicados** | Base |
| **NR-C** | T3 y toda pista compuesta | Las dos mitades de una pista compuesta deben ser necesarias; si no, se parte o se recorta | 2 llamadas por pista compuesta |
| **OD-E** | Sobres | Con el prefijo `P_j`, el certificado alcanza `u_j` casillas ✓ con pasos ≤N2, contando ✓ del estado, no toques | `j` ejecuciones de M3 |
| **MV-E** | E-7 | §2.1. Coste asimétrico, ≥2 ofrecibles y una de cada coste | Búsqueda en árbol sobre residuo ≤14.400 |
| **CC** | E-1 | §3 E-1, cuatro condiciones, CC4 es la que importa | M12, coste nulo |
| **CT** | E-3 | Intercambio forzado (CT1) y culpable ≠ portador previo (CT2) | Enumeración de 144 configuraciones |
| **OP / INJ** | E-4 | Inyección declarada, hueco deducible y usado en el certificado | Trivial |
| **MT** | E-5 | Exactamente una marca refutable, todas las demás entrañadas, refutación ≤N4 con ≥2 pistas | `\|givens\|` llamadas a M12 |
| **PU** | E-6 | Soporte mínimo único de tamaño ≥2, sobre un conjunto **deliberadamente redundante** | 2⁹ = 512 comprobaciones |
| **CP** | E-10 | PU restringida a una celda; **opcional por caso** (CP2) | ≤ nº de celdas × M12 |
| **DV** | E-8 | Las dos lecturas (mismo/distinto) vivas hasta el último paso | 2 llamadas a M12 |
| **RR** | E-11 | Conjunción de atributos con portador único, 2-3 atributos, una por caso | Contra las fichas |
| **ORD** | E-9 | Orden total estricto impreso con origen; máximo una pista que cruce dos órdenes | Precálculo |
| **CNT** | E-12 | Cardinal exacto siempre; partición ≥2 por lado; ≤2 por caso | Restricción estándar |
| **CN, OR, TR, EN** | Transversales | Sin cambios respecto al dictamen | — |

**Prohibiciones que van en el DSL, no en la interfaz** (auditoría de degeneración, §2.1): `mismo_lugar`, `mismo_objeto`, `distinto_lugar`, `distinto_objeto`, «¿estabas solo?», «¿quién estaba contigo?», atributo sin portadores, recuento forzado, y la tautología «el culpable estaba donde apareció el cuerpo».

**Coste estimado sobre V24 (3 días).** E-2, E-4, E-10, E-11, E-12: +3 días entre las cinco (todas se apoyan en piezas ya presupuestadas). E-1, E-5, E-9: +4. E-3, E-8: +3. E-6: +2 con generador propio. E-7: +4-6, compartidos con V4 si el DSL se escribe una sola vez. **Total del modo completo: ~19-21 días incrementales**, de los cuales el bloque mínimo recomendado (base + E-2 + E-5 + E-10 + E-11) son **7-8**.

### 6.3 Checklist de revisión de un caso de Expediente

`revisor-calidad` e `ingeniero-motor-puzzles` lo aplican antes de publicar. Un caso que falle una línea no se publica.

1. **U:** exactamente un modelo.
2. **SA:** certificado con todos los pasos en N1-N4; ninguno N5.
3. **NR** dado el estado con `givens`; **NR-C** en las pistas compuestas.
4. **Propiedad de la mecánica** verificada por enumeración, no por muestreo.
5. **Vocabulario:** una forma canónica por familia, cero sinónimos, cero dobles negaciones.
6. **Atributos:** todos los citados están impresos con la misma palabra; ≤2 activos; el artículo concuerda con la cardinalidad; los ordinales no tienen empates.
7. **Degeneración:** ninguna pista ni pregunta de la lista prohibida.
8. **Existencia y concordancia:** toda entidad citada existe en ese caso; género y número casan con la ficha.
9. **Presupuesto de texto** dentro de los límites de §1.6.
10. **Al menos una pista T5** (bisagra entre categorías). Un caso sin bisagra es una tabla.
11. **Punto de «ajá» identificado y escrito:** en qué paso se abre el caso.
12. **Duración estimada** dentro de la ventana del día.
13. **Una sola mecánica estructural.**
14. **Regla del día anunciada en la portada**, nunca en un tutorial.
15. **OR:** ninguna interacción (sobres, Sabueso, contraprueba, menú del vis a vis) da información con menos razonamiento del que exige el certificado.

---

## 7. Lo que hay que probar con personas antes de comprometer

Tres compuertas, con el umbral escrito **antes** de mirar el dato, siguiendo el método de la §6 de D-010.

| # | Qué se prueba | Formato | Personas | Umbral fijado antes |
|---|---|---|---|---|
| **X1** | **Los catorce nombres de técnica** | Papel, resolver en voz alta y describir el razonamiento antes de ver ningún nombre | 5 (una por perfil, 2 de LatAm) | **≥8 de 14** mapeables por un tercero. Por debajo, se reescriben; por debajo de 5 tras dos vueltas, el escalafón de Expediente sale con 8-10 técnicas |
| **X2** | **La tabla del comisario** (E-5) | HTML jugable, sin tutorial, contra un caso vacío equivalente | 10 | (a) **≥8 de 10** encuentran la marca falsa sin ayuda. (b) **Nadie** dice que el juego «le ha mentido»: si alguien lo dice, la cabecera está mal escrita. (c) Tasa de finalización **igual o mejor** que el caso vacío |
| **X3** | **El vis a vis** (E-7) | HTML, un caso de miércoles y uno de martes de control | 12 | (a) **Nadie** dice «pregunté mal» (una sola vez y la mecánica se revisa). (b) Caída de resolución **≤10 puntos**. (c) **≥8 de 12** usan un verbo de investigación al describir la partida. (d) **≥6 de 12** gastan las fichas en una combinación distinta de «dos abiertas»: si no, el coste asimétrico no está funcionando |

**Compuerta 0, sin personas:** tasa de aceptación de **MV-E**, **CC**, **CT** y **MT** sobre 10.000 candidatos por preajuste, con margen ×10 sobre la demanda. Ninguna de las cuatro se construye antes de tener su número. MT y CC son las que más me preocupan: las dos exigen que exista una configuración con una propiedad muy concreta y ninguna de las dos se puede forzar.

---

*Cambios a este documento: los registra `disenador-puzzles`. Las decisiones de alcance —cuántas de las doce se construyen, si Expediente es un día fijo o una semana paralela, y la divergencia declarada del sábado en §4.1— las cierra `director-producto` en `docs/decisiones.md`.*
