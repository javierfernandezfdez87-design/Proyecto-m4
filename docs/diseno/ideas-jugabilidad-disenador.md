# Ideas de jugabilidad: 15 mecánicas para que el caso se juegue distinto

Autor: `disenador-puzzles`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Encargo: ronda de **diseño de juego puro**. Nada de rachas, erratas, compartir ni monetización.
Fuentes: `docs/contexto-proyecto.md`, `docs/funcionamiento-productos.md` (§1.1 y §1.2), `docs/investigacion/analisis-profundidad.md` (Murdoku, Murdle, Enigmic, Clues by Sam, LinkedIn Games, Logic Puzzles), `docs/oportunidades-resenas.md` (P3, P4, P11, P14, P15, P16, P23, P24).

---

## 0. Punto de partida: qué juego tenemos hoy y qué le falta

Hoy, en **Escena**, el jugador lee entre cinco y ocho frases, coloca cuatro fichas en una cuadrícula y acusa. En **Expediente** tacha casillas de una tabla. Es sólido, es justo y es exactamente lo que hace Murdoku. `funcionamiento-productos.md` §2.5 ya lo dice sin adornos: **no hay innovación de diseño en nuestro producto**.

El problema de juego, no de negocio, es este: **el jugador solo tiene un verbo, "colocar", y la información nunca cambia**. Las ocho pistas están todas ahí desde el segundo cero, el mapa es una foto fija, y el único momento emocional del caso está al final. Los cuatro competidores comparten esa limitación con matices:

| | Verbos del jugador | ¿La información cambia durante la partida? | Punto emocional |
|---|---|---|---|
| **Murdoku** | Colocar, anotar | No | Revelación de la víctima al cerrar la cuadrícula |
| **Murdle** | Tachar, marcar | No (salvo el mentiroso del sábado) | Acusación + chiste final |
| **Enigmic** | Colocar | No | Ninguno identificable (la queja documentada es dificultad plana) |
| **Clues by Sam** | Marcar inocente/criminal | **Sí**: cada acierto gira una carta y suelta una pista nueva | El goteo constante de pistas |

Clues by Sam es el único que ha resuelto ese problema, y no por casualidad es el que tiene 50.000 jugadores diarios crecidos por boca a boca y elogios del tipo «feel smarter when I'm done with it». Su hallazgo es que **la información se abre a medida que deduces**. Pero lo paga caro: castiga el error con un contador de *mistakes* y genera la queja «Why is this giving me a logic error?».

Las 15 mecánicas de abajo atacan ese hueco por seis vías: **dimensión** (tiempo, plantas, objetos que se mueven), **presentación** (pistas dibujadas en la escena en vez de escritas), **agencia** (interrogar, registrar, elegir dónde huele Sabueso), **estructura** (segunda fase, caso invertido, semana firmada), **tensión** (acusación anticipada) e **interacción social real** (caso a cuatro manos con información repartida).

### Regla que no se negocia en ninguna propuesta

Cualquier mecánica de este documento que no pueda cumplir las tres condiciones del proyecto queda descartada o degradada a variante formalizable. Se marca explícitamente en cada ficha.

- **U (unicidad).** Exactamente un modelo satisface todas las restricciones.
- **SA (sin adivinar).** Existe un orden de deducción donde cada paso se obtiene aplicando una técnica del escalón N1-N4 al estado actual. N5 (razonamiento por casos de más de 2 ramas o más de 2 niveles) se rechaza.
- **NR (no redundancia).** Quitar cualquier pista publicada del caso rompe U.

### Vocabulario formal común (para `ingeniero-motor-puzzles`)

Se añade a la especificación de mecánica. Nada de esto es opcional.

```
Habitaciones H = filas F × columnas C     (fila = "pasillo", columna = "ala")
Sospechosos S,  |S| = |F| = |C| = n
pos: S → H,  inyectiva en fila e inyectiva en columna    (cuadrado latino)
adyacente(h1, h2)  ⟺  comparten lado.  NUNCA diagonal.  Los huecos rompen adyacencia.
víctima: habitación fija R, no ocupa celda del cuadrado latino
culpable = el sospechoso s con pos(s) = R
```

**Escalera de técnicas** (el motor debe emitir un certificado paso a paso con el nivel de cada paso):

- **N1** eliminación directa: una pista fija o prohíbe una celda.
- **N2** restricción de fila/columna: en un pasillo o ala solo queda un candidato (equivalente al *hidden single* del sudoku).
- **N3** cadena de dos pasos: dos pistas se combinan sin ramificar.
- **N4** razonamiento por casos acotado: máximo **2 ramas**, máximo **2 niveles**, y toda rama falsa muere en ≤3 pasos.

**Propiedades nuevas que introduce este documento.** Cada una es una condición verificable por el generador antes de publicar y aparece en la ficha de la mecánica que la usa.

| Sigla | Nombre | Qué exige |
|---|---|---|
| **OD** | Orden deducible | Si una pista se desbloquea en el paso k, el certificado debe poder llegar al paso k **sin** esa pista. |
| **IQ** | Independencia de preguntas | Con interrogatorio: **toda** combinación admisible de k preguntas produce U + SA. No solo la combinación "buena". |
| **MP** | Mentiroso previo | Con testimonio falso: el mentiroso se identifica **sin usar el contenido de su propia declaración**, y el paso que lo identifica es de nivel ≤ N4 con ≤2 ramas. |
| **AM** | Alternancia mínima | En cooperativo: ningún jugador puede encadenar más de 2 pasos del certificado sin información que solo tiene el otro; el certificado alterna ≥3 veces. |
| **PU** | Prueba única | En caso invertido: existe **un solo** subconjunto mínimo de pistas que demuestra la culpabilidad. |

---

## 1. Las 15 mecánicas

Las cinco favoritas van marcadas con ★ y se justifican en la sección 3.

---

### ★ 1. Doble franja: el caso ocurre en dos momentos

**Cómo se juega, paso a paso.**
El jugador ve el plano de siempre (4×4) y, encima, un control de dos posiciones: **Antes** (20:30, cuando sonó el timbre) y **Después** (21:15, cuando se encontró el cuerpo). Toca una de las dos y coloca sospechosos en esa franja. La franja que no está viendo aparece como marcas fantasma, en gris claro, sobre las mismas celdas.

La regla añadida se explica en una frase: **entre las dos franjas, cada persona o se quedó donde estaba o se movió a una habitación pegada** (que comparte pared, nunca en diagonal). Y una segunda, que es la que produce el placer: **la víctima murió en la segunda franja**. Quien estuviera en la Biblioteca a las 20:30 y se fuera es inocente. El culpable es quien estaba allí a las 21:15.

Las pistas ahora pueden hablar del tiempo:
- «Nieves no se movió en toda la noche.» (`pos_t1(N) = pos_t2(N)`)
- «Rubén cambió de ala.» (`col(pos_t1(R)) ≠ col(pos_t2(R))`)
- «Cuando sonó el timbre, Amelia y Tomás compartían pasillo.» (`fila(pos_t1(A)) = fila(pos_t1(T))`)
- «Alguien pasó por la Cocina en algún momento de la noche.»
- «Amelia y Tomás intercambiaron sus habitaciones.» ← la trampa buena

**Por qué es más divertida.** Es el único cambio de este documento que genera un **"ajá" de tipo nuevo**, no un "ajá" más grande. La restricción de adyacencia es una tenaza: si sabes dónde estuvo alguien antes, has reducido su "después" a cuatro celdas como mucho, y en las esquinas a tres. Y la emoción central es la **sorpresa moral**: el sospechoso que llevabas veinte minutos colocando junto al cadáver resulta que se marchó a tiempo. Eso, en Murdoku, es literalmente imposible de contar.

**En qué se diferencia.** Ninguno de los cuatro competidores tiene eje temporal. Murdoku, Enigmic y Clues by Sam son fotos fijas. Murdle tiene categorías, no momentos. Es la diferencia estructural más grande que podemos construir sin cambiar de género.

**Unicidad y sin adivinar.** Se garantiza. El CSP pasa de `n` variables a `2n` con el acoplamiento `pos_t2(s) ∈ {pos_t1(s)} ∪ vecinos(pos_t1(s))`. El solver trabaja sobre el estado conjunto y la escalera gana una familia de técnicas: **N2-mov** («si s está en X en t1, en t2 solo puede estar en X o en sus vecinos»), que es de dificultad equivalente a N2 y por tanto no encarece el caso.
*Casos límite que el motor debe cubrir:* (a) el intercambio de habitaciones entre dos personas adyacentes es legal y debe generarse a propósito de vez en cuando; (b) con huecos en el mapa, la adyacencia se calcula sobre el grafo de habitaciones abiertas, no sobre la retícula; (c) la habitación de la víctima es una celda normal, ocupable en t1 por alguien inocente; (d) prohibido publicar un caso donde t1 sea deducible **entero** sin usar ninguna pista de t2 (sería dos casos pegados, no uno).

**Duración.** +3 a +5 minutos. Por eso el tablero baja a **4×4** cuando hay franjas: 10-14 min. Nunca 5×5 con dos franjas entre semana.

**Complejidad.** Motor **media** (el CSP crece pero es la misma familia; el generador necesita un nuevo criterio de aceptación). Frontend **media**: en 360 px no caben dos tableros; es un tablero con conmutador y marcas fantasma, y hay que resolver bien el gesto de "copiar mi colocación de antes a después".

**A quién le gusta.** Fan del género y competitivo. **No es un caso de lunes.** Jueves y domingo.

---

### 2. El rastro del objeto

**Cómo se juega.** Además de las personas, un objeto recorre la casa: la linterna, la llave del sótano, una bandeja. Bajo el plano aparece una tira de tres huecos: **primera parada · segunda parada · tercera parada**. El jugador la rellena con habitaciones, no con personas. Las pistas mezclan los dos planos:

- «La linterna estuvo en la Cocina antes que en el Taller.» (ordinal)
- «La linterna nunca subió al ala más al este.»
- «Quien tuvo la linterna en su segunda parada estaba en el pasillo del sur.» ← la bisagra
- «La linterna apareció junto al cuerpo.»

Quien ocupa la habitación de cada parada es quien tuvo el objeto en las manos. La última parada es la habitación del crimen.

**Por qué es más divertida.** Añade un **hilo narrativo con forma de deducción**: el objeto es un personaje. Y ofrece un tipo de razonamiento que la cuadrícula no da, el ordinal ("antes que", "después que"), que es lo que hace divertidos los puzles de Nikoli. Emoción: la satisfacción de "seguir un rastro", no la de rellenar una tabla.

**En qué se diferencia.** Murdle tiene el arma como categoría estática (quién la llevaba). Aquí el objeto **tiene trayectoria**, y eso es una capa ordinal encima de la espacial que nadie del género usa.

**Unicidad y sin adivinar.** Se garantiza. Variables nuevas: `parada: {1,2,3} → H`, inyectiva. Aviso importante para el motor: es fácil generar sin querer **dos caminos independientes hacia la respuesta** (el espacial y el del objeto), lo que rompe NR. La comprobación de no redundancia ya lo captura, pero conviene añadir una condición explícita: **al menos una habitación de la solución solo se determina a través del objeto**.

**Duración.** +2 minutos. Compatible con 4×4 y 5×5.

**Complejidad.** Motor **media**, frontend **baja** (una tira de tres huecos bajo el plano).

**A quién le gusta.** Fan del género. Con dos paradas en vez de tres, funciona también para familia y para la sección infantil ("¿por dónde pasó la tarta?").

---

### ★ 3. Pistas visuales: la escena habla

**Cómo se juega.** Dos o tres de las pistas del caso **no están escritas: están dibujadas en el plano**. Una huella de barro en la Bodega. Un candado en el Trastero. Una taza humeante en el Comedor. Una ventana abierta en el Mirador.

En un lateral fijo, siempre visible, está la **leyenda**, que es cerrada y versionada: cada icono significa una sola cosa, escrita en una sola frase, siempre la misma. Y **tocar el icono muestra esa frase en palabras** sobre el plano. El icono es una forma de dibujar una pista formal, no un acertijo de cultura general.

Leyenda v1 (cerrada; ampliarla es una decisión de diseño, no del guion):

| Icono | Frase canónica única | Forma formal |
|---|---|---|
| Huella de barro | «Alguien estuvo aquí.» | `∃s: pos(s) = h` |
| Candado | «Esta habitación estuvo cerrada: nadie estuvo aquí.» | `∀s: pos(s) ≠ h` |
| Taza humeante | «Quien estuvo aquí llegó en la segunda franja.» | (solo con mecánica 1) |
| Ventana abierta | «Quien estuvo aquí salió al exterior.» | atributo del ocupante |
| Ovillo de lana | «Quien estuvo aquí llevaba jersey.» | atributo del ocupante |
| Huella de pata | «Sabueso pasó por aquí.» | marcador narrativo, sin valor lógico |

**Por qué es más divertida.** Cambia el verbo de entrada de **leer** a **mirar**. Un caso que se entiende de un vistazo produce la sensación de estar delante de una escena, no de un enunciado. Es además la mecánica más **memorable y fotografiable** de la lista: un plano con una huella de barro y un candado se reconoce en una miniatura; ocho párrafos, no.

**En qué se diferencia.** Los cuatro competidores son listas de texto. Murdoku pega una tarjeta de pista al retrato de cada sospechoso, que es el máximo que hace nadie. Nosotros metemos la pista **dentro** del escenario. Y de paso ataca de frente la queja P3 (ambigüedad léxica) y P4 (no se sabe de dónde se cuenta): un icono en una celda no admite dos lecturas.

**Unicidad y sin adivinar.** Se garantiza sin tocar el solver: la pista sigue siendo formal, solo cambia cómo se pinta. Reglas duras: **máximo 3 pistas visuales por caso** y **nunca más de la mitad del total**, para que la explicación final siga leyéndose como un razonamiento y no como un jeroglífico. Cada icono lleva su texto alternativo, que es la frase canónica; un jugador con lector de pantalla recibe exactamente la misma información.

**Duración.** Neutra o −1 minuto. Se lee más rápido.

**Complejidad.** Motor **baja** (una etiqueta de renderizado por tipo de pista; la leyenda vive en la especificación, no en el guion). Diseño y frontend **media**: hay que dibujar un juego de iconos propio, distinto del código visual "papel cálido + manuscrita" del incumbente, y montar el panel de leyenda.

**A quién le gusta.** A todos, y muy especialmente a **casual, familia e infantil**. Es la mecánica que baja el listón de entrada.

---

### ★ 4. Interrogatorio: tres preguntas

**Cómo se juega.** El caso empieza con menos pistas de lo normal: cuatro en vez de siete. Debajo del plano hay un botón, **Interrogar**, con un contador: **3**.

El jugador toca a un sospechoso y elige una pregunta de un menú cerrado de cuatro:

1. «¿En qué pasillo estabas?» → devuelve la fila.
2. «¿En qué ala estabas?» → devuelve la columna.
3. «¿Estuviste en <habitación>?» → sí o no.
4. «¿Viste a <sospechoso>?» → sí o no, donde **ver** está definido en la leyenda: *dos personas se ven si comparten pasillo* (misma fila). Nada más. Ni diagonal, ni ala.

La respuesta se añade a la lista de pistas, con el retrato de quien la dio. **Todo el mundo dice la verdad** (para mentiras, mecánica 5, y nunca en el mismo caso). Cuando se agotan las tres, el caso tiene que quedar cerrado.

**Por qué es más divertida.** Es **agencia**, la emoción que le falta al género entero. El "ajá" deja de venirte dado y pasa a ser consecuencia de una decisión tuya: elegir bien a quién preguntar es una habilidad, y presumir de haberlo resuelto con dos preguntas es orgullo legítimo. Además rompe la pared inicial de ocho párrafos que espanta al casual.

**En qué se diferencia.** Clues by Sam desbloquea pistas **al acertar** una casilla, y castiga el fallo con un contador de errores; el jugador no elige nada, y de ahí su queja documentada de "logic error". Aquí el jugador **elige la información**, no la gana ni la pierde. Murdoku, Murdle y Enigmic no tienen nada equivalente.

**Unicidad y sin adivinar: aquí está la trampa, y hay que decirla clara.** Si las pistas base no bastan y solo *ciertas* tres preguntas cierran el caso, entonces hemos metido adivinanza por la puerta de atrás: el jugador acierta o falla al elegir. Inaceptable. Hay dos diseños posibles y solo uno es el bueno:

- **(a) Acelerador (seguro, barato, poco interesante).** Las pistas base ya cumplen U + SA. El interrogatorio solo acorta el camino. Es un sistema de ayudas con disfraz. Sirve como plan B.
- **(b) Investigación de verdad (la que hay que construir): propiedad IQ.** Las pistas base **no** dan U. El generador acepta el caso solo si **toda** combinación de 3 preguntas del menú, sobre cualquier sospechoso, produce U + SA. Con 4 plantillas × 4 sospechosos = 16 preguntas posibles, son C(16,3) = **560 comprobaciones por caso**, coste ridículo en un generador por lotes. Verificado eso, el jugador **no puede elegir mal**: preguntes lo que preguntes, el caso se cierra. Lo que cambia es cuánto trabajo te queda: unas combinaciones dejan un camino de nivel N2 y otras uno de N4. Esa diferencia es la habilidad, y esa es la etiqueta de dificultad que publicamos (el peor caso).

*Riesgo honesto:* la propiedad IQ es exigente y puede que la proporción de casos generados que la cumplen sea baja. Antes de comprometer esta mecánica, `ingeniero-motor-puzzles` debe medir la tasa de aceptación sobre 10.000 candidatos 4×4. Si es inferior al 1 %, se relaja el menú (3 plantillas en vez de 4) o se baja a 2 preguntas antes de renunciar.

**Duración.** +2 a +4 minutos (leer las respuestas y decidir a quién preguntar cuesta tiempo). El menú cerrado de cuatro plantillas es justo lo que impide que la decisión se eternice.

**Complejidad.** Motor **alta** (cambia el criterio de aceptación del generador y obliga a la búsqueda con la propiedad IQ). Frontend **media**.

**A quién le gusta.** Fan del género y competitivo por la optimización; casual y familia porque reduce la pared inicial y porque "hacer preguntas" se entiende sin tutorial.

---

### ★ 5. El testigo que se equivoca

**Cómo se juega.** En la cabecera, con distintivo propio y sin letra pequeña: **«Uno de estos seis testimonios es falso. Los otros cinco son ciertos.»** El jugador puede marcar cualquier pista como *dudosa* (un tercer estado, junto a *usada* y *pendiente*).

Dos de las pistas se contradicen a la cara. «Tomás pasó la tarde en el pasillo del norte» y «Tomás no salió del pasillo del sur» no pueden ser las dos verdad. A partir de ahí solo hay dos mundos posibles, y uno de ellos revienta en tres pasos. Cuando revienta, no solo sabes dónde estaba todo el mundo: sabes **quién ha mentido**, y eso es una segunda respuesta que el caso no te había pedido.

**Por qué es más divertida.** Es **el giro**. Es el único mecanismo de la lista que produce sorpresa narrativa a partir de pura lógica: descubres que la anfitriona mintió sobre la hora, y esa es la mejor frase del informe final. Emoción: sorpresa + orgullo.

**En qué se diferencia.** Murdle tiene *statements* con mentirosos y es **el muro de dificultad más citado de todo el género** (Ask MetaFilter: «no consigo resolver ni uno de los puzles con mentiroso»; grupos de Facebook pidiendo estrategia). Nuestra diferencia no es tener mentirosos: es tenerlos **con una garantía de justicia que ellos no dan**.

**Unicidad y sin adivinar: propiedad MP, y es estricta.**
1. La pista falsa debe estar en **contradicción textual directa con exactamente otra pista** del caso. Nada de mentiras que solo se detectan al final por descarte global.
2. Por tanto el mentiroso es uno de **dos** candidatos: dos ramas, dentro del límite de N4.
3. La rama falsa debe morir en **≤3 pasos**. Si tarda más, el caso se rechaza.
4. Formalmente, para cada pista `i` se construye `S_i = (C \ {C_i}) ∪ {¬C_i}`. El caso solo se publica si **exactamente un** `i` produce un sistema satisfacible con solución única, y ese `i` es uno de los dos de la contradicción textual.
5. El certificado debe identificar al mentiroso **sin usar el contenido de su declaración**: solo por incompatibilidad con el resto.

*Restricción de calendario, heredada de M6 en `docs/oportunidades-resenas.md`:* **prohibida entre semana**. Solo caso XL del domingo, siempre anunciada en pantalla y con su pantalla de tutorial la primera vez. Subir la dificultad cambiando las reglas sin avisar es exactamente lo que este género hace mal.

**Duración.** +3 a +4 minutos.

**Complejidad.** Motor **media-alta** (buscar configuraciones que cumplan MP y verificar las `n` reconstrucciones). Frontend **baja** (un distintivo en la cabecera y un tercer estado en la lista de pistas).

**A quién le gusta.** Fan del género y competitivo. Explícitamente **no** casual ni infantil.

---

### 6. El registro de la casa: pistas en sobres

**Cómo se juega.** El caso abre con tres pistas, no con siete. A la derecha hay tres sobres cerrados. **El primer sobre se abre solo cuando el jugador ha confirmado dos posiciones cualesquiera**; el segundo, con cuatro; el tercero, con seis. No importa si son correctas: el juego no dice nada sobre eso. Solo mide que has avanzado.

**Por qué es más divertida.** Cura el defecto de arranque del formato: una pantalla con ocho párrafos densos es lo que hace que la gente cierre la pestaña. Con sobres, el caso **se abre solo**, y cada apertura es una pequeña recompensa con sonido y animación. Emoción: ritmo, sensación de que la investigación progresa.

**En qué se diferencia de Clues by Sam, que es lo mismo pero no.** Ellos abren pistas **al acertar** y anotan cada fallo como *mistake* en el resultado. Eso convierte la mecánica en un examen y produce su queja más citada. Nosotros abrimos **por progreso, no por acierto**, y no damos ninguna señal de correcto/incorrecto. Si el jugador ha colocado mal, la pista nueva le contradirá y tendrá que rehacer: eso es lógica honesta, no castigo.

**Unicidad y sin adivinar: propiedad OD.** El conjunto completo de pistas cumple U + SA + NR igual que hoy. Lo que se añade es que el certificado debe ser **compatible con el orden de apertura**: con las 3 primeras pistas tiene que ser posible llegar a **al menos 2 colocaciones correctas** con pasos de nivel ≤ N2; con 5 pistas, a 4 colocaciones; y así. Si el certificado exige la pista 7 para dar el primer paso, el caso se rechaza.

**Duración.** Neutra. Reordena, no alarga.

**Complejidad.** Motor **baja-media** (ordenar las pistas y verificar OD). Frontend **baja**.

**A quién le gusta.** Casual y familia. Es la mecánica que más reduce el abandono en el minuto uno.

---

### 7. Segunda fase: el móvil

**Cómo se juega.** El jugador acusa. En vez de cerrar el caso, aparece una pantalla corta con la voz de Sabueso: *«El juez no acepta una acusación sin un motivo. Tienes dos pruebas más.»* Tres móviles posibles (la herencia, la carta, el reloj de la vitrina), dos pistas nuevas, una respuesta. Sesenta a noventa segundos.

Fallar el móvil **no pierde el caso**. Quien acierta las dos cosas cierra el **expediente completo**; quien solo acierta el culpable, lo cierra igual.

**Por qué es más divertida.** Cambia el ritmo justo en el momento en que hoy el juego se apaga. La partida pasa de cuadrícula a historia en su último minuto y **el caso termina con una frase, no con una casilla**. Es la mejor ventana de humor de todo el producto y el único sitio donde la narrativa cambia lo que el jugador hace. Emoción: cierre, humor, orgullo pequeño.

**En qué se diferencia.** Murdle mete el motivo como cuarta categoría **dentro** de la misma cuadrícula los domingos: es más de lo mismo, más grande. Aquí es un **beat distinto**, con otro ritmo y otra pantalla.

**Unicidad y sin adivinar.** Trivial de garantizar: subpuzle de 3 opciones y 2 pistas, U verificado por enumeración. Condición: el móvil **no debe ser deducible antes de acusar** (si no, el jugador lo resuelve de paso y el beat se pierde), y las dos pistas nuevas no pueden contradecir nada del caso principal.

**Duración.** +1 a +2 minutos.

**Complejidad.** **Baja** en motor y frontend. Media en contenido: `guionista-misterio` tiene que escribir tres móviles creíbles por caso.

**A quién le gusta.** Casual, familia y fan del género. Es de las pocas que gusta a todo el mundo.

---

### 8. La acusación anticipada (y el reloj del forense)

**Cómo se juega.** Hoy se acusa al final. A partir de ahora se puede acusar **en cualquier momento**, y la pantalla de resultado distingue dos finales que se llaman distinto:

- **Caso probado.** Acusaste con todas las casillas colocadas y todas correctas. Lo demostraste.
- **Caso ganado por poco.** Acertaste al culpable, pero cuando acusaste todavía quedaban deducciones sin hacer. Tuviste razón; no lo demostraste.

En **duelos** esto es el corazón de la tensión: acusar antes gana tiempo, pero si te equivocas se acabó, y el rival lo sabe.

Aparte, y **desactivado por defecto**, un ajuste opcional: **el reloj del forense**, una cuenta atrás de 8 minutos que al llegar a cero no te expulsa, solo marca el resultado. Opt-in siempre. El posicionamiento del producto es "diez minutos y a tu vida" (P24): no metemos estrés a quien no lo pide.

**Por qué es más divertida.** Introduce **decisión bajo incertidumbre**, que es la emoción que un puzle de lógica puro no puede dar, sin contaminar la lógica del puzle. Y nombra algo que hoy pasa en silencio: mucha gente acusa por intuición y se va creyendo que lo dedujo. Distinguir "probado" de "por poco" convierte el rigor en una meta deseable.

**En qué se diferencia.** Ninguno de los cuatro distingue entre acertar y demostrar. Clues by Sam lo intenta por la vía contraria, prohibiendo las marcas no deducibles, y genera frustración. Nosotros permitimos la corazonada y **la nombramos**.

**Unicidad y sin adivinar.** No afecta al puzle. Al contrario: hace visible y con nombre propio la única adivinanza que existía, que era la del jugador.

**Duración.** −2 a 0 minutos.

**Complejidad.** **Baja** (comparar el estado del tablero contra la solución en el instante de acusar).

**A quién le gusta.** Competitivo, sobre todo. A fan del género le da una meta nueva.

---

### 9. Tirar del hilo: la pista se dibuja sobre el plano

**Cómo se juega.** Tocar una pista **resalta las celdas que afecta y traza un hilo** entre ellas sobre el plano: «Amelia estaba en un pasillo pegado al de Rubén» dibuja una banda sobre los pasillos 1 y 2. Tocar una **celda**, al revés, atenúa todas las pistas que ya no dicen nada sobre ella y deja encendidas las que sí. La pista usada se puede tachar de un toque y se queda en gris.

Al terminar, la explicación paso a paso **se anima con los mismos hilos**: el jugador vuelve a ver su propio razonamiento dibujado.

**Por qué es más divertida.** Elimina la fricción número uno del formato en móvil, que es "¿cuál era la pista 4?", y sustituye la lectura por reconocimiento visual. Emoción: claridad, y la satisfacción de ver el razonamiento como un dibujo.

**Advertencia de diseñador: el tablón de corcho completo no lo recomiendo.** Un corcho con tarjetas y cuerdas que el jugador conecta a mano es precioso en un vídeo y horrible en 360 píxeles: gestos ambiguos, arrastres largos, y sobre todo **no aporta ninguna deducción nueva** (las conexiones que el jugador dibujaría son las que la pista ya afirma). La versión formalizable y útil es esta: hilos **sobre el plano**, generados por el motor, no dibujados por el jugador.

**Unicidad y sin adivinar.** No afecta. Pero **impone un requisito real al motor**: cada pista debe emitir, junto a su forma formal, el **conjunto de celdas que restringe** en el estado inicial. Sin eso el frontend no puede pintar nada. Anotarlo como contrato de la especificación.

**Duración.** −1 a −2 minutos.

**Complejidad.** Motor **baja** (emitir el mapa pista→celdas). Frontend **media**.

**A quién le gusta.** Casual y familia. Es accesibilidad disfrazada de mecánica.

---

### 10. Caso invertido: la prueba

**Cómo se juega.** La cabecera lo dice todo: *«Sabemos que fue Ignacio Cifuentes. El juez no lo acepta sin pruebas.»* El plano aparece **ya resuelto** y hay ocho pistas sobre la mesa. La tarea no es colocar a nadie: es **seleccionar el conjunto mínimo de pistas que demuestra que fue él**. El jugador marca pistas, el contador dice cuántas lleva, y acusa cuando cree que tiene la prueba justa. Sobrarle una pista es fallar igual que faltarle.

**Por qué es más divertida.** Cambia el verbo por completo: de *deducir* a *justificar*. Es corto, es intenso y produce una emoción que el género no da nunca: la de **entender por qué**, no solo *qué*. Y enseña a jugar mejor los casos normales, porque obliga a mirar qué pista hace qué.

**En qué se diferencia.** No existe en ninguno de los cuatro, ni en Cluedo, ni en Sherlock. Es lo más cercano a un formato propio de este documento.

**Unicidad y sin adivinar: propiedad PU.** El motor enumera todos los subconjuntos de pistas que fuerzan la identidad del culpable y se queda con los **mínimos** (ningún subconjunto propio funciona). El caso solo se publica si **hay exactamente uno**. Con 8 pistas son 256 subconjuntos: coste nulo. Si hay dos pruebas mínimas distintas, el caso es bonito pero injusto y se rechaza.
*Casos límite:* prohibido que la prueba mínima sea de una sola pista (sería trivial); tamaño objetivo, 3 de 8.

**Duración.** **3-5 minutos.** Es el mejor candidato a formato corto de todo el documento.

**Complejidad.** Motor **media** (enumeración de soportes mínimos, técnicamente sencilla). Frontend **baja**.

**A quién le gusta.** Fan del género. El casual necesita tutorial propio: el enunciado es contraintuitivo la primera vez.

---

### 11. Sabueso olfatea: la mascota como herramienta, no como adorno

**Cómo se juega.** Sabueso hace dos cosas dentro de la partida, y ninguna es decorativa.

**(a) Es la voz de la leyenda.** Los iconos de la mecánica 3 los explica él, en una frase, siempre la misma. Coste cero, personalidad ganada.

**(b) Sustituye a "Comprobar" por algo con decisión dentro.** Hoy hay un botón de comprobación única que dice cuántas casillas están mal en todo el tablero. Se cambia por: **«¿Dónde quieres que huela?»** El jugador elige **un pasillo o un ala** y Sabueso ladra una vez por cada persona **bien colocada** en esa línea. No dice cuáles.

Elegir dónde oler es una micro-decisión con criterio real: se huele donde tienes una cadena entera apoyada en una hipótesis, no donde ya estás seguro. Un solo uso por caso, gratis, y **nunca detrás de un anuncio** (regla M4).

**Por qué es más divertida.** Convierte una utilidad fría en un personaje y en una decisión. Y produce la emoción de compañía: no estás resolviendo solo. Para familia e infantil, Sabueso es el motivo por el que el niño vuelve.

**En qué se diferencia.** Murdle tiene al inspector Irratino, cuya pista es —por diseño de su propio código— «often useless or redundant», una regla al azar. Clues by Sam tiene una pista en dos niveles, útil pero sin personaje. Sabueso es lo único que existe que es a la vez **personaje y herramienta determinista**.

**Unicidad y sin adivinar.** No afecta al puzle: es una comprobación, no una pista. No inyecta información sobre la solución, solo sobre el estado del jugador.

**Duración.** Neutra.

**Complejidad.** **Baja**.

**A quién le gusta.** Casual, familia, infantil. Al competitivo le da igual, y está bien.

---

### 12. La semana firmada

**Cómo se juega.** De lunes a sábado, cada caso termina revelando **un rasgo verificado** de un antagonista recurrente que se cuela en todos los casos: era zurdo, llevaba un botón de nácar, olía a laurel. Los rasgos se apilan en una ficha que el jugador ve rellenarse. **El domingo**, en el caso XL, el antagonista está entre los sospechosos y hay que nombrarlo.

**La regla que hace esto honesto y que no se puede saltar.** El caso del domingo debe cumplir **U + SA usando exclusivamente sus propias pistas**. Los seis rasgos de la semana son un panel aparte, etiquetado como *archivo*, disponible **para todo el mundo**, también para quien llegó el sábado. Es decir: **la recompensa por jugar toda la semana es narrativa, nunca informativa.** Cualquier diseño donde el jugador nuevo esté en desventaja lógica es un diseño que castiga al recién llegado, y en un juego diario eso es suicidio.

**Por qué es más divertida.** Es la única mecánica que produce **anticipación entre partidas**. Y da al domingo un motivo para ser grande que no es "hoy toca sufrir más".

**En qué se diferencia.** Murdle tiene arco semanal (los culpables de la semana son los sospechosos del domingo, y la víctima es un personaje fijo). El nuestro tiene que ser distinto en la expresión, no solo en el detalle: allí es una **estructura** (los culpables reaparecen), aquí es un **dossier de rasgos** que el jugador rellena y una identidad que se nombra. `guionista-misterio` debe garantizar que ni el antagonista ni el mecanismo se parezcan a los suyos.

**Unicidad y sin adivinar.** Se garantiza por la regla de arriba. Detalle para el motor: la generación por lotes pasa a tener una restricción **entre casos** (el culpable del martes debe tener el rasgo asignado a ese día), lo que obliga a generar la semana completa de una vez, no día a día.

**Duración.** Sin cambio por caso.

**Complejidad.** Motor **media** (restricciones cruzadas y generación semanal). Contenido **alta**: es trabajo continuo de guion, semana tras semana, para siempre.

**A quién le gusta.** Fan del género. Es la mecánica más "serie de televisión" del conjunto.

---

### ★ 13. Caso a cuatro manos

**Cómo se juega.** Un jugador abre el caso y pulsa **Investigar con alguien**. Sale un enlace. La otra persona lo abre en su móvil, sin cuenta.

Los dos ven **el mismo plano** y las colocaciones son compartidas: si uno coloca a Nieves en el Mirador, el otro lo ve al instante. Lo que **no** comparten son las pistas. El jugador A tiene cuatro; el jugador B tiene otras cuatro; **ninguno de los dos puede resolver el caso solo**, y cada uno ve, en gris, que el otro tiene información que él no.

No hay chat en el producto. Se habla: por teléfono, por WhatsApp o en el mismo sofá. Esa es la mecánica.

**Por qué es más divertida.** Es, con diferencia, la mecánica más memorable de la lista, y por una razón concreta: **te obliga a decir tu razonamiento en voz alta**. «Yo sé que Rubén está en el norte» / «Pues entonces Amelia solo puede estar en el pasillo 2, porque la mía dice que están pegados». Ese intercambio es la mejor experiencia posible con este género y hoy no existe en ningún producto digital. Emoción: complicidad, y el "ajá" compartido, que dura más que el propio.

**En qué se diferencia.** Ninguno de los cuatro lo tiene. Murdoku anuncia un modo cooperativo en descripciones indexadas que **ninguna fuente independiente confirma** (`analisis-profundidad.md` lo marca como sin verificar). La prensa española describe el fenómeno como algo que se juega en grupo alrededor del papel: esto es la versión digital de eso, y es la única forma de que lo digital **añada** algo al papel en vez de restarlo.

**Conflicto que hay que declarar.** `docs/oportunidades-resenas.md` descarta el "modo cooperativo en la misma pantalla / familia" con un argumento correcto: si varias personas miran una pantalla, eso ya funciona sin construir nada. Lo que propongo **no es eso**. Es **información repartida entre dos dispositivos**, que es una mecánica distinta y que sí exige construcción. El argumento del descarte no le aplica. La decisión, con su coste, la toma `director-producto`.

**Unicidad y sin adivinar: propiedad AM.**
1. `A` sola: no da solución única. `B` sola: tampoco. `A ∪ B`: U + SA + NR.
2. Un paso del certificado es *disponible para A* si usa solo pistas de A más el estado compartido del tablero.
3. **Ningún jugador puede encadenar más de 2 pasos seguidos** sin un paso del otro, y el certificado debe alternar **al menos 3 veces**. Sin esta condición sale lo de siempre: el listo de los dos resuelve el 80 % y el otro mira.
4. El reparto se verifica sobre el certificado, no sobre las pistas: repartir 4 y 4 al azar produce casi siempre un caso donde uno lo hace todo.

**Duración.** +3 a +5 minutos, porque hablar es lento. Por eso el cooperativo es **4×4 siempre**, para caer en 12-18 minutos.

**Complejidad.** **Alta.** Es la única de la lista con coste de backend real: sesión compartida por enlace, estado en tiempo real, reconexión, y qué pasa si uno se va a mitad. Y el motor necesita el criterio de reparto con AM.

**A quién le gusta.** Familia, parejas, amigos, aula. Es también la mecánica con mejor historia para contar fuera del producto.

---

### 14. El vistazo: mini de tres minutos

**Cómo se juega.** 3×3, tres sospechosos, tres pistas, sin anotaciones y sin comprobación. Una sola cadena de tres deducciones, todas de nivel N1-N2. Numeración propia, no toca nada del caso del día.

**Por qué es más divertida.** Por la **victoria rápida**. Noventa segundos y la sensación de "se me da bien esto", que es exactamente lo que necesita alguien que llega desde una búsqueda y no sabe si esto es para él. Y para el veterano es el café de la mañana.

**En qué se diferencia.** No se diferencia: Murdle tiene mini diario y es su segunda página más visitada (11 % de su tráfico). Es un formato probado que hoy no tenemos, y su valor está en el tutorial jugable, no en la novedad.

**Unicidad y sin adivinar.** El mismo generador con un preajuste más pequeño. Restricción extra: **prohibido cualquier paso de nivel > N2** en el mini, siempre.

**Duración.** 2-3 minutos.

**Complejidad.** **Baja**.

**A quién le gusta.** Casual, recién llegado, infantil.

---

### 15. Domingo XL: la casa de dos plantas

**Cómo se juega.** El plano del domingo se parte en dos: **planta baja** (filas 1-3) y **planta alta** (filas 4-6), dibujadas una encima de otra, que es la lectura natural en un móvil vertical. Entre ellas hay **una sola escalera**, en una columna fija: es la única forma de subir o bajar, y por tanto la única adyacencia entre las dos plantas.

Se abre una familia de pistas que en un plano llano no existe:
- «Nieves estaba **justo encima** de Tomás.» (misma columna, plantas contiguas)
- «Nadie de la planta alta bajó.»
- «Dos personas estaban en la planta baja.» (pista de recuento)
- «Rubén estaba más cerca de la escalera que Amelia.»

**Por qué es más divertida.** «Justo encima» es una relación potentísima y muy legible: bloquea una columna entera de golpe, y visualmente se entiende sin explicación. Da al domingo una **razón espacial** para ser el día grande, en vez de ser el lunes con más casillas. Combinada con la mecánica 1 (doble franja), la escalera se convierte en un cuello de botella narrativo precioso: por ahí pasó el asesino.

**En qué se diferencia.** Murdoku juega en una retícula plana. La verticalidad y el cuello de botella de la escalera son nuestros.

**Unicidad y sin adivinar.** La restricción de cuadrado latino se mantiene **global** (una persona por fila y por columna en el conjunto de las seis filas), y la adyacencia se calcula sobre el grafo de habitaciones, con la escalera como única arista entre plantas. «Justo encima» = misma columna, filas 3 y 4. Todo formal, ningún cambio de familia en el solver.

**Duración.** **15-25 minutos.** Excede la ventana de 5-15 a propósito y **solo el domingo**, que es el día declarado de sentarse con calma. Entre semana, nunca.

**Complejidad.** Motor **media** (grafo de adyacencia y relación vertical). Frontend **media** (dos plantas apiladas, ejes rotulados en las dos, sin perder legibilidad a 360 px).

**A quién le gusta.** Fan del género y familia.

---

## 2. Tabla resumen

| # | Mecánica | Emoción | Duración | Motor | Frontend | Público | U/SA garantizados |
|---|---|---|---|---|---|---|---|
| ★1 | Doble franja | Sorpresa, ajá nuevo | +3/+5 | Media | Media | Fan, competitivo | Sí |
| 2 | Rastro del objeto | Ajá ordinal | +2 | Media | Baja | Fan, familia | Sí |
| ★3 | Pistas visuales | Reconocimiento, memoria | −1/0 | Baja | Media | Todos | Sí |
| ★4 | Interrogatorio | Agencia, orgullo | +2/+4 | **Alta** | Media | Fan, casual | Sí, **con propiedad IQ verificada** |
| ★5 | Testigo que se equivoca | Giro, sorpresa | +3/+4 | Media-alta | Baja | Fan, competitivo | Sí, con MP; solo domingo |
| 6 | Sobres | Ritmo | 0 | Baja-media | Baja | Casual, familia | Sí, con OD |
| 7 | Segunda fase: móvil | Cierre, humor | +1/+2 | Baja | Baja | Todos | Sí |
| 8 | Acusación anticipada | Tensión, nervio | −2/0 | Baja | Baja | Competitivo | No afecta |
| 9 | Tirar del hilo | Claridad | −1/−2 | Baja | Media | Casual, familia | No afecta |
| 10 | Caso invertido | Comprensión | 3-5 total | Media | Baja | Fan | Sí, con PU |
| 11 | Sabueso olfatea | Compañía, humor | 0 | Baja | Baja | Casual, familia | No afecta |
| 12 | Semana firmada | Anticipación | 0 | Media | Baja | Fan | Sí (recompensa solo narrativa) |
| ★13 | Caso a cuatro manos | Complicidad | +3/+5 | Media | **Alta** | Familia, amigos | Sí, con AM |
| 14 | El vistazo (mini) | Victoria rápida | 2-3 total | Baja | Baja | Casual, nuevo | Sí |
| 15 | Casa de dos plantas | Escala, vértigo | 15-25 (dom.) | Media | Media | Fan, familia | Sí |

### Calendario propuesto (para que esto no sea una lista suelta)

Las mecánicas no se acumulan: se reparten. Un caso con cuatro capas nuevas no es difícil, es confuso. **Máximo una mecánica estructural por caso**, más las transversales.

| Día | Tamaño | Mecánica estructural | Objetivo |
|---|---|---|---|
| Lunes | 4×4 | Ninguna (caso limpio) | 5-7 min, día de entrada |
| Martes | 4×4 | 2 · Rastro del objeto | 7-9 min |
| Miércoles | 5×5 | 6 · Sobres | 8-10 min |
| Jueves | 4×4 | **1 · Doble franja** | 10-14 min |
| Viernes | 5×5 | 10 · Caso invertido *o* 4 · Interrogatorio | 5-12 min, cambio de verbo |
| Sábado | 5×5 | 4 · Interrogatorio | El más difícil de la semana |
| Domingo | 6×6 dos plantas | **15 + 5 + 12** (XL, mentiroso, cierre de semana) | 15-25 min |

**Transversales, en todos los casos:** 3 (pistas visuales), 7 (segunda fase del móvil), 8 (acusación anticipada), 9 (tirar del hilo), 11 (Sabueso). **Fuera del ritual diario:** 13 (cooperativo) y 14 (el vistazo).

### Orden de construcción que recomiendo

1. **Ahora, con el MVP:** 3, 7, 9, 11, 8, 14. Todas de complejidad baja y todas mejoran el caso base sin tocar el generador. Este bloque, junto, ya hace que nuestro caso se sienta distinto de un Murdoku el primer día.
2. **Semanas 8-14:** 1 (doble franja) y 6 (sobres). Es el salto de mecánica de verdad.
3. **Después, con datos:** 4 (interrogatorio, condicionado a que la tasa de aceptación de IQ sea viable), 15, 2, 10.
4. **Fase 2, decisión de producto:** 13 (cooperativo), 5 (mentiroso), 12 (semana firmada).

---

## 3. Mis cinco favoritas

**★1. Doble franja.** Es el único cambio que crea un tipo de razonamiento que hoy no existe en el género, y la adyacencia entre momentos es una restricción tan potente como elegante. Produce además la mejor sorpresa posible en un juego de crímenes: el que estaba junto al cadáver se había ido. Coste de motor asumible y ningún riesgo para U/SA.

**★3. Pistas visuales.** Es la mecánica con mejor relación entre lo que cuesta y lo que cambia: coste bajo en motor, alto en identidad. Convierte una lista de párrafos en una escena que se entiende de un vistazo, ataca de frente las quejas P3 y P4 del género, y es lo único de esta lista que hace que un caso nuestro se reconozca en una miniatura.

**★4. Interrogatorio de tres preguntas.** Es la única que le da al jugador un verbo nuevo y agencia real, que es exactamente lo que le falta a los cuatro competidores. Y la propiedad IQ es un compromiso de justicia que ninguno puede igualar: preguntes lo que preguntes, el caso se cierra. Es la más cara y la más arriesgada; también la más diferencial.

**★5. El testigo que se equivoca.** Es el giro narrativo más barato que puede darse con pura lógica, y el mentiroso es el muro más citado de Murdle: llegar con la misma emoción y una garantía de justicia que ellos no dan (MP) es ganar la comparación en su propio terreno. Domingo, anunciado y con tutorial. Nunca entre semana.

**★13. Caso a cuatro manos.** Es la mecánica que produce el mejor recuerdo, porque obliga a decir el razonamiento en voz alta y convierte el "ajá" en algo compartido. Es la única forma de que lo digital añada algo al papel en vez de restarlo, y ninguno de los cuatro la tiene. Es cara y contradice un descarte previo: eso lo decide `director-producto`, con el conflicto encima de la mesa.

---

## 4. Lo que suena divertido y no lo propongo, con el motivo

Un diseñador que solo trae ideas es un diseñador que no ha hecho su trabajo. Estas se han quedado fuera.

| Idea | Por qué no |
|---|---|
| **Interrogatorio de texto libre** («pregúntale lo que quieras») | No es formalizable. Sin un menú cerrado no hay forma de verificar la propiedad IQ, y con IA generando respuestas la unicidad se rompe el primer día. La versión formalizable es la mecánica 4. |
| **Un sospechoso que miente de forma impredecible** | Rompe SA: si no se puede probar quién miente antes de usar su declaración, el jugador tiene que hipotetizar a ciegas. Es exactamente la queja documentada contra Murdle. La versión justa es la mecánica 5, con MP. |
| **Tablón de corcho con cuerdas que dibuja el jugador** | Precioso en vídeo, malísimo en 360 px, y no produce ninguna deducción nueva: las conexiones que el jugador trazaría son las que la pista ya afirma. Degradado a la mecánica 9. |
| **Escena de objetos ocultos** (buscar pistas escondidas en el dibujo) | Es puntería, no lógica. Rompe el contrato del producto y es inaccesible por definición para lectores de pantalla. |
| **Pistas que requieren cultura general** («el bronce es más pesado que la madera») | Ya prohibido de facto en §1.2 de `funcionamiento-productos.md`: todo lo necesario tiene que estar escrito en la propia página. Cualquier atributo debe venir en la ficha del personaje o del objeto. |
| **Final que cambia según cómo juegues** | Habría más de una solución. Es incompatible con U y con la promesa central del producto. |
| **Medidor de "intuición" o de confianza** | Recompensa hipotetizar. En un juego cuyo argumento es "aquí no se adivina nunca", es un mensaje contradictorio. |
| **Persecución, minijuego de destreza, temporizador obligatorio** | Expulsa al casual, contradice el posicionamiento "diez minutos y a tu vida" (P24) y no aporta ni una deducción. |
| **Más de una mecánica estructural en el mismo caso** | Un caso con franjas + objeto + mentiroso no es difícil: es ilegible. Regla dura: una estructural por caso, y las transversales encima. |

---

## 5. Checklist de revisión para cualquier caso que use estas mecánicas

`revisor-calidad` e `ingeniero-motor-puzzles` lo aplican antes de publicar. Un caso que falle cualquier línea no se publica, por bonito que sea.

1. **U:** el solver encuentra exactamente un modelo.
2. **SA:** existe certificado paso a paso, cada paso etiquetado N1-N4. Ningún paso N5.
3. **NR:** quitar cualquier pista publicada rompe U.
4. **Propiedad específica de la mecánica:** OD (6), IQ (4), MP (5), AM (13), PU (10) verificada por enumeración, no por muestreo.
5. **Vocabulario:** toda relación espacial usa la forma canónica única. Cero sinónimos («al lado de» y «junto a» no coexisten). Cero diagonales donde la leyenda dice lado.
6. **Existencia:** todo lugar, objeto y persona citado en una pista existe en ese tablero concreto (M13).
7. **Concordancia:** género y número de cada pista casan con la ficha del personaje (M13).
8. **Iconos:** ≤3 pistas visuales, nunca más de la mitad del total, cada una con su frase canónica como texto alternativo.
9. **Duración estimada** por el modelo de dificultad dentro de la ventana del día del calendario.
10. **Punto de "ajá" identificado y escrito**: en qué paso concreto el caso se abre. Un caso sin ese punto es un ejercicio, no un puzle.
11. **Anuncio de reglas especiales** en pantalla antes de empezar (franjas, mentiroso, invertido). Nunca se cambian las reglas en silencio.
12. **Una sola mecánica estructural** por caso.

---

*Cambios a este documento: los registra `disenador-puzzles`. Las decisiones de alcance (sobre todo la mecánica 13, que contradice un descarte previo, y la 4, condicionada a una medición del motor) las cierra `director-producto` en `docs/decisiones.md`.*
