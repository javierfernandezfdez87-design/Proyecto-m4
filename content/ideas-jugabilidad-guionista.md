## Cómo leer esto

Cada idea es una capa narrativa alrededor del puzzle, nunca un sustituto. En ninguna de las doce cambia la promesa no negociable: solución única, resoluble sin adivinar, dificultad medida por el motor. Lo que cambia es lo que el jugador *siente* mientras coloca a los sospechosos y lo que se lleva al terminar. Marco con **★ Favorita** las cinco que recomendaría priorizar primero.

Para cada idea: cómo se vive, qué emoción produce, en qué se diferencia de Murdoku/Murdle, qué necesita garantizar el motor, coste de contenido y a qué jugador gusta más.

---

## 1. ★ Favorita — El interrogatorio

**Cómo se vive.** Antes o después de leer las pistas espaciales, el jugador ve un banco de 6-8 preguntas ("¿Dónde estabas a las cinco?", "¿Quién más andaba por ahí?", "¿Qué llevabas en las manos?") y elige **tres**. Cada sospechoso responde con su voz. Las respuestas son las mismas pistas que ya conoce el motor, solo que dichas en primera persona; pero **una respuesta contradice un hecho ya fijado por la solución** y el jugador tiene que señalar cuál, con las mismas pistas que ya tiene delante.

> — ¿Dónde estabas a las cinco en punto?
> **Rubén** (cocinero): «En la cocina, dorando cebollas. No me moví de allí.»
> **Doña Amelia**: «Charlando con Nieves en el pasillo de la Biblioteca, como cada tarde.»
> **Nieves**: «Con doña Amelia, sí... en el pasillo de la Biblioteca.»
>
> Pero el plano ya resuelto dice que Nieves estaba en el pasillo 3 (el Mirador), no en el 2. Alguien miente sobre dónde estaba, y no hace falta ser el asesino para mentir.

**Emoción.** La sensación de estar "cara a cara" con los sospechosos, no solo moviendo fichas en un mapa. Pequeña victoria extra: "he pillado a alguien en un renuncio".

**Diferencia con Murdoku/Murdle.** Ninguno de los dos tiene diálogo ni voz de personaje; son cuadrículas frías. Esto convierte el mismo dato lógico en una escena jugable.

**Qué necesita del motor.** Nada nuevo en el núcleo: la mentira se calcula *después* de tener la solución fija, comparando la respuesta con la posición ya demostrada. El motor solo tiene que exponer, por sospechoso y por pregunta, a qué hecho de la solución corresponde cada respuesta, y garantizar que la contradicción es demostrable con pistas ya publicadas (no con información nueva). Cero riesgo de romper la unicidad porque no se añade ninguna restricción a la CSP: es una lectura posterior de un tablero ya resuelto.

**Coste de contenido.** Medio-alto: 4 respuestas por caso (una por sospechoso) más el banco de preguntas, reutilizable como plantilla entre casos. Generable por IA a partir de la pista formal ("dilo con la voz de X") y validable en dos pasos: (1) el motor confirma que la respuesta no aporta información falsa sobre el tablero salvo la mentira marcada; (2) el guionista comprueba que no hay una segunda lectura.

**A quién gusta.** Al jugador que quiere sentirse detective de verdad, no solo resolver un sudoku con nombres. Encaja con el público de "Puñales por la espalda" y "Sólo asesinatos en el edificio".

---

## 2. Testigos con personalidad

**Cómo se vive.** Las pistas de siempre (las seis frases que hoy son neutras) se redactan con la voz del personaje que las cuenta, sin cambiar ni un ápice el hecho espacial. El chismoso exagera, el tímido es telegráfico, el pedante da un dato de más que no sirve para nada.

> Formal: `no_sale(Rubén, pasillo_norte)`
> Neutra (hoy): «Rubén no salió del pasillo del norte en toda la tarde.»
> Voz del ama de llaves, cotilla: «Rubén ni se asomó fuera de la cocina, la despensa y el comedor. Yo lo vi, ¡las tres veces que pasé por allí!»
> Voz de Tomás, parco: «Rubén. Norte. Todo el rato.»

**Emoción.** Calidez y humor: los personajes tienen voz propia incluso cuando "hablan" a través de las pistas del narrador.

**Diferencia con Murdoku/Murdle.** Ambos redactan las pistas en un tono uniforme, casi de manual de instrucciones. Aquí el tono es un rasgo de personaje, no solo del juego.

**Qué necesita del motor.** Nada: es variación léxica pura sobre una pista ya validada, con la restricción de que la reformulación **debe superar el mismo test de "una pista, una lectura"** que la versión neutra. Se documenta en `plantillas-pistas.md` como una familia de tono más, junto a las neutras.

**Coste de contenido.** Bajo: una ficha de voz por personaje recurrente (3-4 rasgos de estilo) que se reutiliza en todos sus casos. Generable por IA con la ficha de voz como prompt; el filtro de calidad es el mismo que ya existe para cualquier pista (ida y vuelta con el motor).

**A quién gusta.** Al lector de cozy mystery que valora el carácter tanto como el enigma; refuerza el fandom del reparto recurrente (idea 11).

---

## 3. El villano de la semana

**Cómo se vive.** Un hilo narrativo que corre en paralelo a los seis casos independientes de la semana (cada uno con su propio asesino y su propia solución, sin tocarse entre sí). Un ladrón o estafador recurrente deja siempre la misma firma —una carta, una flor seca, una cita mal citada— en la escena, sin ser nunca el culpable del caso del día. El domingo, el caso XL lo atrapa.

> Al pie del informe del martes: «Sabueso ha encontrado, otra vez, un as de picas bajo el jarrón. El Cascabel vuelve a las andadas.»

**Emoción.** Anticipación semanal, la sensación de seguir una serie en vez de episodios sueltos.

**Diferencia con Murdoku/Murdle.** Ninguno tiene continuidad entre puzzles sueltos del mismo volumen; cada caso es una isla. Esto da una razón para volver siete días seguidos más allá del hábito.

**Qué necesita del motor.** Nada: es un texto decorativo añadido al informe de resultado, no una pista ni una restricción. Importante para no confundir al jugador: la firma del villano **nunca es una de las seis pistas numeradas del caso**, para que nadie intente resolverla como parte del puzzle de ese día.

**Coste de contenido.** Bajo-medio: una frase por caso (5-6 a la semana) más el cierre del domingo, generables en lote a partir de una biblia del personaje. Requiere revisión editorial para que la firma no se vuelva repetitiva.

**A quién gusta.** Al jugador que ya tiene el hábito diario y quiere algo más que lo enganche entre semana; también es contenido de calendario fácil de anunciar en el correo diario.

---

## 4. ★ Favorita — La confesión

**Cómo se vive.** Si el jugador acusa correctamente, además de la explicación paso a paso de siempre, se abre un epílogo breve en la voz del culpable: no repite el razonamiento, cuenta el motivo desde dentro.

> «No fue el dinero, aunque todos pensarán eso. Fue el reloj. Ese reloj que mi padre vendió para pagar las deudas de Casimiro y que él coleccionaba, orgulloso, en su propia biblioteca. Cuarenta años esperando para decírselo a la cara. No pensaba matarlo. Solo quería que lo reconociera.»

Si falla, no hay confesión: ve la explicación normal, sin el premio narrativo. No es un castigo nuevo, es reservar el mejor texto para quien acierta.

**Emoción.** Cierre emocional, la recompensa de "House of Cards" del cozy mystery: el motivo humaniza al culpable en vez de dejarlo como una casilla más.

**Diferencia con Murdoku/Murdle.** Ambos terminan en la cuadrícula resuelta, como mucho con una frase de cierre. Aquí el final tiene arco narrativo propio.

**Qué necesita del motor.** Solo el dato del motivo, que Expediente ya usa los domingos como cuarta categoría; para Escena hace falta que el motor (o el caso) tenga un campo de motivo aunque no sea parte de la CSP a resolver. No afecta a la lógica: es metadato narrativo asociado al culpable ya determinado.

**Coste de contenido.** Bajo: un párrafo de 40-60 palabras por caso, muy generable por IA a partir de ficha de personaje + motivo, y fácil de validar (no puede contradecir ninguna pista ni desvelar información antes de tiempo si el jugador lo lee por error).

**A quién gusta.** A todo el mundo, en realidad: es la idea de menor coste y mayor retorno emocional de la lista.

---

## 5. ★ Favorita — El "y sin embargo"

**Cómo se vive.** Un párrafo de cierre, después de la confesión o la explicación, que reinterpreta un detalle *decorativo* de la ambientación (nunca una de las pistas numeradas) a la luz de la solución.

> «Y sin embargo, aquella mancha en la manga de doña Amelia no era de tinta, como todos supusieron: era barniz de reloj. Llevaba semanas reparando, a escondidas, el que le había robado a Casimiro veinte años atrás.»

**Emoción.** El "ajá" final, el efecto Agatha Christie de mirar atrás y ver algo que estaba ahí desde el principio.

**Diferencia con Murdoku/Murdle.** Los dos terminan en cuanto se resuelve la cuadrícula; no hay una última vuelta de tuerca literaria.

**Qué necesita del motor.** Nada, con una condición de diseño estricta: el detalle reinterpretado **no puede ser una de las pistas numeradas** que el motor valida como restricción lógica, solo un elemento de ambientación de la sinopsis o la descripción de escena. Así el giro no puede introducir una segunda lectura de una pista real ni romper "una pista, una lectura".

**Coste de contenido.** Bajo: una frase de 2-3 líneas por caso, plantable desde el guion inicial (el guionista siembra el detalle en la sinopsis y lo paga al final). Generable por IA en el mismo lote que la sinopsis, validado a mano por ser el elemento más delicado de "no contradecir la lógica".

**A quién gusta.** Al jugador que relee la sinopsis después de acertar y quiere la sensación de "ya deberías haberlo visto".

---

## 6. La escena del crimen, ilustrada con pistas

**Cómo se vive.** El plano visto desde arriba (que ya existe en Escena) se dibuja con detalles reconocibles que *ilustran* alguna de las pistas textuales, nunca que las sustituyan: una huella de barro en el pasillo del sur, un jarrón roto en la sala de música, una ventana entreabierta. Tocar el detalle resalta la pista de texto a la que corresponde.

> El jugador toca la maceta volcada del Invernadero y aparece: «Pista 4: Tomás estaba en el ala más al oeste de la casa» (el Invernadero está en esa ala).

**Emoción.** Curiosidad exploratoria, la sensación de "leer" la escena como haría un detective de verdad, no solo una lista de frases.

**Diferencia con Murdoku/Murdle.** Ninguno de los dos ilustra sus pistas; son texto y cuadrícula. El dibujo con capas de significado es un territorio propio, cercano al juego de "busca y encuentra" sin serlo.

**Qué necesita del motor.** Nada de lógica nueva, pero sí una regla de diseño dura: **cada detalle visual debe corresponder exactamente a una pista textual ya validada**, uno a uno, nunca a una inferencia adicional. Si el dibujo "dice" algo que el texto no dice, se rompe la garantía de que toda la información necesaria está en las pistas escritas.

**Coste de contenido.** Alto (es trabajo de ilustración, no de texto): el guionista solo escribe el brief de qué detalle dibujar y dónde, uno por pista, reutilizable como lista de encargo para `disenador-ux-ui` o el proveedor de ilustración.

**A quién gusta.** Al jugador visual y al público familiar/infantil (sección sin víctima), donde un dibujo claro ayuda más que una frase abstracta.

---

## 7. ★ Favorita — Sabueso, el compañero que husmea

**Cómo se vive.** El botón "Comprobar" (hoy seco: "tienes 2 casillas mal") se viste con la mascota. Sabueso da la misma información de siempre, pero con carácter y en una escala de intensidad.

> 0 fallos: «Sabueso menea el rabo. No huele nada raro por aquí.»
> 1-2 fallos: «Sabueso frunce el hocico y mira hacia el pasillo 2. Algo no le cuadra.»
> 3 o más fallos: «Sabueso se ha tumbado en el suelo, ofendido. Esto hay que revisarlo desde el principio.»

**Emoción.** Compañía en vez de examen: la comprobación dejar de sentirse como un test para sentirse como un compañero de investigación que opina.

**Diferencia con Murdoku/Murdle.** Ambos usan comprobaciones neutras o ninguna. Un ayudante con personalidad es un rasgo de marca propio y barato de mantener.

**Qué necesita del motor.** Nada nuevo: el motor ya calcula cuántas casillas están mal para la comprobación única. Sabueso solo traduce ese número a una frase de una tabla fija de 3-5 niveles.

**Coste de contenido.** Muy bajo: una tabla de frases **reutilizable en todos los casos**, no por caso. Es la idea de mayor impacto de marca por menor coste de todas.

**A quién gusta.** A todo jugador, especialmente al que se frustra fácil: humaniza el momento de "me he equivocado" en lugar de sancionarlo con un número frío.

---

## 8. Tú eres sospechoso

**Cómo se vive.** Un caso especial (no el ritual diario, un formato ocasional) donde la sinopsis se escribe en segunda persona: el jugador es uno de los cuatro nombres de la cuadrícula. Resuelve el caso exactamente igual —colocando a todos, incluido "tú"— y el premio no es solo señalar al culpable, es limpiar su propio nombre.

> «Tú, Bruno, el jardinero, llevabas semanas discutiendo con don Casimiro por el sueldo. Todos sospechan de ti. Demuestra, casilla a casilla, dónde estabas de verdad esa tarde.»

**Emoción.** Implicación personal, tensión de estar "dentro" del misterio y no solo observándolo.

**Diferencia con Murdoku/Murdle.** Los dos colocan siempre al jugador como investigador externo. Convertirlo en pieza del tablero es un giro de punto de vista que ninguno de los dos usa.

**Qué necesita del motor.** Nada distinto en la CSP: "tú" es un nodo más, con las mismas restricciones que cualquier sospechoso, colocado por las pistas igual que los demás, nunca con información privilegiada. El motor no necesita saber que ese nodo es "el jugador"; es una etiqueta puramente narrativa sobre un sospechoso normal.

**Coste de contenido.** Medio: reescribir la sinopsis y las pistas que mencionan a ese sospechoso en segunda persona, y el epílogo de cierre ("Quedas libre de toda sospecha" o, si el jugador resulta ser el culpable en una variante más oscura —evitable si se quiere mantener siempre "cozy"— "confiesas"). Recomendado usarlo con moderación (especial mensual), no en el ritual diario, para no forzar la redacción de todos los casos.

**A quién gusta.** Al jugador que busca una sorpresa puntual dentro de la rutina diaria; buen contenido de lanzamiento o de fecha señalada.

---

## 9. Caso invertido: demuestra el cómo

**Cómo se vive.** La sinopsis revela el nombre del culpable desde la primera línea. El juego no es "quién", es "reconstruye la prueba": de las seis pistas, el jugador tiene que marcar cuáles son las que de verdad demuestran la culpabilidad y descartar las que son coartadas de otros o ruido. El tablero se resuelve igual (mismo mapa, mismas restricciones), pero el marcador de victoria es "expediente completo", no "acusación".

> «Sabemos que fue Nieves Bergara. Lo que necesita el juez es la cadena de pruebas. Coloca a los cuatro donde estaban esa tarde y señala, entre las seis pistas, las tres que no dejan escapatoria.»

**Emoción.** Sensación de fiscal, no de detective: la satisfacción de construir un caso irrefutable en vez de descubrir un secreto.

**Diferencia con Murdoku/Murdle.** Ambos son siempre "whodunit" puro. El "howcatchem" (formato clásico de Colombo) no existe hoy en ningún puzzle de este tipo en español.

**Qué necesita del motor.** Reutiliza algo que el motor **ya calcula por obligación**: qué pistas son mínimas y necesarias (si se quita una, dejaría de haber solución única). Esa misma lista de "pistas imprescindibles" es la que arma la mecánica de "señala las que prueban el caso". Cero trabajo lógico nuevo, solo exponer un dato que el generador ya produce internamente.

**Coste de contenido.** Bajo: solo cambia el orden de revelación en la sinopsis (nombrar al culpable al principio) y la instrucción de la interfaz. El resto del caso (pistas, mapa) es idéntico al formato normal; se puede convertir cualquier caso ya escrito en su versión invertida sin reescribir nada.

**A quién gusta.** Al jugador veterano que ya domina el "quién" y quiere una variación de reto sin aprender una mecánica nueva; buen formato para el archivo de pago (variedad barata de producir).

---

## 10. El motivo: la segunda deducción

**Cómo se vive.** Tras resolver quién y (en Expediente) con qué, se abre una minificha de 3 motivos candidatos con dos pistas propias, muy cortas, para deducir el motivo exacto antes de leer la confesión.

> Motivos posibles: dinero, venganza, honor.
> Pista A: «El motivo no tiene que ver con ninguna herencia.»
> Pista B: «Quien mató a Casimiro llevaba veinte años callando algo, no una semana.»
> → Por descarte, el motivo es venganza, no dinero (pista A) ni algo reciente como una discusión de honor puntual (pista B).

**Emoción.** Un segundo "clic" de satisfacción justo antes del cierre, sin alargar mucho la partida.

**Diferencia con Murdoku/Murdle.** Expediente de Murdle ya usa el motivo como cuarta categoría de la cuadrícula grande; aquí se propone como **mini-puzzle independiente de 1 paso**, disponible también en Escena (que hoy no tiene motivo en absoluto) sin tener que ampliar toda la cuadrícula principal.

**Qué necesita del motor.** Una segunda CSP diminuta (3 candidatos, 2 pistas) con la misma garantía de siempre: solución única, sin redundancia. Es el mismo solver aplicado a un problema mucho más pequeño; no es trabajo de ingeniería nuevo, es una instancia más.

**Coste de contenido.** Bajo-medio: 2 pistas y 3 candidatos por caso, in situ con la ficha de motivo que ya escribe el guionista para la confesión (idea 4); se pueden generar juntos en el mismo prompt.

**A quién gusta.** Al jugador que encuentra corto el caso de 4×4 entre semana y quiere un pasito más sin que se convierta en otro puzzle grande.

---

## 11. ★ Favorita — El diario del detective y el reparto que vuelve

**Cómo se vive.** Dos caras de la misma idea. Primera: los mismos nombres reaparecen con papeles distintos entre casos —el jardinero sospechoso del caso 12 es el testigo del caso 40 y, si el guion lo pide, la víctima del caso 90—, siempre con continuidad de carácter (mismo rasgo, mismo secreto si no se ha resuelto ya). Segunda: cada caso resuelto añade una ficha de una línea a un "diario" personal del jugador: retrato, epitafio y, con el tiempo, un mapa de quién conoce a quién.

> Diario, entrada del caso 90: «Tomás Quiroga, el jardinero de la Casa de las Once Ventanas. Lo conociste sospechando de él. Hoy lo has encontrado muerto en su propio invernadero.»

**Emoción.** Fandom: la sorpresa de "espera, ¿este no era el jardinero de aquel otro caso?" y el orgullo de coleccionista de ver crecer el diario.

**Diferencia con Murdoku/Murdle.** Los dos son antologías de casos desconectados; no hay universo compartido ni continuidad entre volúmenes. Esto es lo más parecido a una "biblia de serie" que ningún competidor de este formato ofrece hoy en español.

**Qué necesita del motor.** Nada de lógica: cada caso se resuelve solo, de forma independiente (nunca se puede exigir haber jugado el caso 12 para resolver el 90, porque rompería que cada caso se resuelve sin información externa). El motor solo necesita que cada personaje tenga un identificador estable que la biblia pueda reutilizar entre casos.

**Coste de contenido.** Medio-alto de mantenimiento a largo plazo: exige una biblia viva con árbol de relaciones y estado de cada personaje (vivo, sospechoso ya "quemado", etc.) para no contradecirse. Es más barato de generar que de mantener: la IA propone conexiones, el guionista es quien lleva la continuidad.

**A quién gusta.** Al jugador de hábito, el que ya lleva semanas jugando y busca una razón para sentir que esto es "su" mundo, no una lista infinita de crímenes sueltos. Es la apuesta a largo plazo de las cinco favoritas.

---

## 12. Viernes de disparate

**Cómo se vive.** Un día fijo de la semana (viernes encaja con el tono de "vísperas de fin de semana") con casos de humor más subido de lo habitual: víctimas de poca monta con muchísima dignidad herida —el gnomo de jardín premiado, la tarta que iba a ganar el concurso, el loro que sabía demasiado—, arquetipos aún más exagerados y pistas con más chiste, sin salirse del listón de seguridad cozy.

> «El inspector de sanidad Fermín Osuna apareció "muerto" de la risa (en sentido figurado: se ha desmayado, no hay ningún fallecido) al descubrir quién le había cambiado el sello oficial por uno de goma con un pato.»

**Emoción.** Alivio cómico, la sensación de "hoy toca reírse" dentro de un ritual que puede volverse serio si todos los días pesan igual.

**Diferencia con Murdoku/Murdle.** Ambos mantienen un registro uniforme en todos sus casos. Variar el tono por día de la semana es un recurso editorial (como el "domingo XL") que ningún competidor usa para el humor.

**Qué necesita del motor.** Nada: mismo tipo de caso, mismas restricciones, solo cambia el registro de la redacción.

**Coste de contenido.** Igual que un caso normal; no hay coste extra, solo una nota de estilo distinta en el brief de redacción de ese día.

**A quién gusta.** Al jugador ocasional que entra el viernes buscando algo ligero, y sirve de gancho de vídeo corto para `creador-social` (aunque esa pieza no forma parte de esta propuesta).

---

## Resumen de prioridad

Las cinco favoritas cubren registros distintos a propósito, para no apostarlo todo a un solo tipo de emoción:

1. **El interrogatorio** — diferenciación fuerte, coste medio, mayor riesgo de producción (hay que ser muy cuidadoso con la validación de la mentira).
2. **La confesión** — coste mínimo, impacto emocional alto, cero riesgo técnico. Empezar por aquí.
3. **El "y sin embargo"** — igual de barata, mismo consejo: probarla primero.
4. **Sabueso, el compañero que husmea** — coste casi nulo (una tabla de frases reutilizable), mejora percibida de marca inmediata.
5. **El diario del detective y el reparto que vuelve** — la apuesta a largo plazo: no se nota en el primer caso, se nota en el caso 90.

Ninguna de las doce exige tocar el motor de forma sustancial: en el peor de los casos (interrogatorio, motivo como segunda deducción) piden exponer datos que el motor ya calcula por sus propias garantías (unicidad, minimalidad de pistas), no lógica nueva.
