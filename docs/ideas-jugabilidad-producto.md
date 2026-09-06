# Doce cambios en la forma de jugar

Autor: `director-producto`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Fuentes: `docs/contexto-proyecto.md`, `docs/funcionamiento-productos.md`, `docs/investigacion/analisis-profundidad.md` (Clues by Sam, LinkedIn Games, Duolingo, Enigmic, Sudoku.com, Murdle, Murdoku), `docs/oportunidades-resenas.md` (patrones P1-P25, cambios M1-M16, S1-S5).

**Alerta de marca (D-006).** Revisados los cinco disparadores: no hay usuarios (el producto no ha lanzado), no hay vídeo con más de 100.000 visualizaciones, no hay mención en prensa sobre nosotros, no hay conversación B2B ni editorial abierta, y en todo el material revisado no aparece ningún tercero usando un nombre parecido a Sospechario. **Ninguno se cumple; no procede registrar todavía.** La vigilancia manual (comprobación 10 de `docs/oportunidades-resenas.md` §5) sigue siendo quincenal.

---

## 0. Qué es esto y qué no es

El fundador tiene razón: `docs/propuesta-mejoras-producto.md` (PR1-PR10) y los cambios M1-M16 de D-007 son **fontanería**. Arreglan rachas, erratas, formato de compartir, muro de pago y persistencia. Ninguno cambia lo que ocurre entre el minuto 0 y el minuto 10 de una partida. Un jugador que venga de Murdoku no notaría diferencia salvo que el español está mejor escrito.

Este documento propone **doce cambios en la partida**. El filtro que he aplicado a cada uno es doble:

1. **¿Lo nota en la primera semana?** No en el mes tres, no cuando llegue Premium.
2. **¿Se lo cuenta a alguien?** La frase que tiene que poder decir es «tienes que ver cómo termina» o «el viernes es de risa» o «me ha subido a inspector porque he aprendido la pinza», no «tiene buena interfaz».

**Fuera de encargo (no aparecen aquí):** rachas y congelaciones, erratas y reparación, formato de compartir, precios y Premium. Siguen descartados por D-007: Elo, ligas, ranking global y editor público de casos.

**Restricción que no se toca en ninguna de las doce:** el motor sigue mandando. Toda propuesta que aumente la dificultad de generación tiene marcado el riesgo de motor, y ninguna se codifica hasta que `disenador-puzzles` cierre el diseño e `ingeniero-motor-puzzles` cierre el contrato (regla del proyecto).

**Escala de coste** (persona-semana incremental sobre lo ya presupuestado en F1-F19 + M1-M16): **bajo** ≤ 0,5 · **medio** 0,5-2 · **alto** > 2.

**Fases:** MVP (semanas 1-8) · Fase 2 (meses 3-5, con Expediente en semanas 10-14 y duelos en meses 4-5) · Fase 3 (mes 6 en adelante).

---

## 1. La reconstrucción · FAVORITA

**Qué ve y hace el jugador.** Pulsa Acusar. Hoy vería una tabla resuelta y un muro de texto. En su lugar, la pantalla se apaga y el plano se reconstruye solo, paso a paso, durante 20-25 segundos: se enciende la pista 1 y con ella la habitación que descarta; se enciende la 2 y un sospechoso camina a su celda; el jugador ve la cadena que él acaba de recorrer, pero contada como escena. Al final quedan iluminados dos: la víctima y quien estaba con ella. Y el culpable dice una frase. Una sola, escrita para ese caso: *«Los relojes de don Casimiro daban la hora exacta. Era lo único de esta casa que no mentía.»* Debajo, dos botones: **Volver a verlo** y **Paso a paso** (la misma cadena, detenida, con el tablero en cada peldaño y el nombre de la técnica usada; ver idea 6).

**Por qué gusta.** Es el único momento del producto que se enseña al de al lado. La evidencia dice tres cosas convergentes. Clues by Sam construyó su bucle sobre la recompensa inmediata en el acierto (la carta gira y suelta su pista) y sus jugadores lo describen como sensación de inteligencia: *«I feel smarter when I'm done with it»* (Adam Argyle). En Sudoku.com, de 150 reseñas recientes analizadas, lo único que se elogia de forma específica además de la sencillez son **las explicaciones**: *«me encantan las explicaciones de las pistas»*. Y P10 documenta que la gente se va a TikTok a buscar el porqué (*«Solución del juego Murdoku nivel 8»*, *«vi vídeos tutoriales porque las explicaciones del libro se quedaban cortas»*): la demanda de explicación existe y hoy la sirven terceros. Duolingo aporta la regla de colocación: la celebración va **inmediatamente después de la acción**, nunca al abrir.

**En qué se diferencia.** F8 ya promete explicación razonada, pero como texto. Murdoku en papel manda las soluciones al final del libro (*«sin enlaces para saltar, incómodo»*, Goodreads); Murdle igual; ninguna app del género anima la cadena. La diferencia no es tener explicación: es que la explicación sea un **espectáculo de 25 segundos con final**, y que ese final sea una confesión escrita, no una casilla verde.

**Coste:** medio (0,75-1,25 p-s: animación de la cadena reutilizando la salida del solver, más una frase de confesión por caso en la producción narrativa).
**Fase:** MVP. Es lo que más devuelve por euro y toca la pantalla que todo el mundo ve, gane o pierda.
**Riesgo:** que la animación estorbe a quien ya sabe cómo va. Mitigación: se salta con un toque y el ajuste queda recordado.
**Cómo se mide:** porcentaje de jugadores que llegan al final de la reconstrucción sin saltarla (objetivo ≥ 60 % en la primera semana) y uso de «Volver a verlo».

---

## 2. El porqué: la última pregunta

**Qué ve y hace el jugador.** Cuando acierta la acusación, antes de la confesión, aparece una pregunta de diez segundos: **¿por qué lo hizo?** Tres motivos en pantalla. No es adivinar: al acusar bien se revela una séptima frase (*«El testamento de don Casimiro se firmó el martes; doña Amelia lo supo el lunes»*) que, con lo que ya está en el tablero, deja un solo motivo en pie. Si acierta, la confesión se despliega entera y Sabueso lo anota en el informe como caso «cerrado del todo». Si falla, ve la confesión igualmente y Sabueso dice «casi»; no se pierde nada.

**Por qué gusta.** Cierra la historia. Murdle usa el motivo como cuarta categoría y es lo que convierte su cuadrícula en un caso; nuestro Expediente del domingo ya lo prevé, pero el modo Escena termina hoy en una tabla correcta y nada más. Sudoku.com demuestra el valor de premiar el cierre y no solo la victoria: su texto literal es *«Tournament Completed — ¡has completado el torneo y ganado una medalla!»*, medalla por **completar**, no por ganar. Y es el gesto que da sentido narrativo a diez minutos de lógica: el jugador pasa de resolver una cuadrícula a cerrar un caso.

**En qué se diferencia.** Nadie en el género pide al jugador que explique el móvil. Y en el nuestro es especialmente barato porque el motor ya sabe qué información tiene el jugador en ese momento: la pregunta se puede construir garantizando que es deducible, no una lotería. Eso respeta la regla 3 del proyecto, que es justo lo que un competidor improvisando un «bonus» rompería.

**Coste:** bajo (0,25-0,4 p-s: una pista de motivo por caso en la generación narrativa y una pantalla).
**Fase:** MVP, en la misma pantalla que la idea 1.
**Riesgo:** que se perciba como adivinanza. Mitigación innegociable: `ingeniero-motor-puzzles` valida que el motivo es deducible con la séptima pista; si en algún caso no lo es, la pregunta no se muestra.
**Cómo se mide:** tasa de acierto del motivo (banda sana 55-80 %; por encima es regalo, por debajo es lotería).

*Nota: se queda a las puertas de las cinco favoritas solo porque viaja en el mismo desarrollo que la idea 1. Si la 1 entra, esta entra con ella.*

---

## 3. Interrogatorio: las pistas se ganan · FAVORITA

**Qué ve y hace el jugador.** El miércoles el caso empieza distinto: hay seis sospechosos y **solo dos pistas**. Con esas dos, una persona ya es colocable. Al colocarla bien, esa persona **habla**: su ficha gira y suelta su declaración, que es la tercera pista. Con la tercera, otra se vuelve deducible. Y así hasta el final. Si intenta colocar a alguien que todavía no es deducible, el juego no se lo acepta, pero **no le riñe**: le señala las dos pistas que aún no ha exprimido y le dice «con esto todavía no basta».

**Por qué gusta.** Es el hallazgo mejor documentado de todo el análisis. Clues by Sam llegó a más de 50.000 jugadores diarios «casi todo por boca a boca», con The Guardian, Kotaku y Aftermath detrás, sobre exactamente esta mecánica: *«solo al deducir correctamente a alguien aparece su pista»* y *«no puedes adivinar: el juego sabe qué personas son deducibles en cada momento»* (Nicky Case). Lo que sus jugadores describen es un bucle que no se agota: *«figuring out how to combine all the clues to get the piece of info you need never stops being satisfying»* (Josh Collinsworth). Frente a las seis pistas servidas de golpe, el interrogatorio convierte la partida en una conversación: cada acierto te da algo nuevo que leer, en vez de tachar una línea de una lista que ya conocías.

**En qué se diferencia.** Murdoku, Murdle, Enigmic y los clones sirven todas las pistas en la primera pantalla. La única referencia con revelación progresiva está en inglés, sin localización, y su público es tecnológico y angloparlante. En español no existe. Y nuestra vuelta de tuerca es narrativa: en Clues by Sam la pista es una frase lógica en una carta; aquí es **una declaración de un sospechoso** con voz propia, que es exactamente el material que sabemos producir.

**En qué somos mejores que la referencia.** Su queja documentada es *«Where's my logic wrong? Why is this giving me a logic error?»*: el juego rechaza y calla. Nuestro rechazo enseña: señala qué pistas quedan sin usar. Es la diferencia entre un muro y un profesor.

**Coste:** alto (2-3 p-s, casi todo en motor: el generador tiene que producir casos con **orden de deducción garantizado** y el frontend tiene que consultar en cada toque si una colocación es deducible con el estado actual).
**Fase:** Fase 2, como el carácter del miércoles (idea 4), no como sustitución del modo Escena. Si funciona, se evalúa convertirlo en el tercer modo con numeración propia.
**Riesgo:** es el mayor riesgo de motor del documento. Si el generador no sostiene la escalera ordenada, no se lanza. Decisión de corte a cargo de `ingeniero-motor-puzzles` con un banco de 30 casos antes de comprometer semana de frontend.
**Cómo se mide:** tasa de resolución del miércoles frente al martes (no debe caer más de 10 puntos) y retorno del miércoles siguiente.

---

## 4. La semana con carácter · FAVORITA

**Qué ve y hace el jugador.** Cada día de la semana tiene una regla propia, anunciada y reconocible, no solo un tamaño de tablero:

| Día | Nombre | Qué cambia en la partida |
|---|---|---|
| Lunes | **El caso corto** | 4×4, tres minutos, para volver a coger el ritmo. Es el día de entrada de los nuevos. |
| Martes | **Caso clásico** | La forma canónica: 5×5, seis pistas. |
| Miércoles | **Interrogatorio** | Las pistas se ganan (idea 3). |
| Jueves | **Caso a puerta cerrada** | Aparece una restricción de escenario: una habitación sellada, un pasillo inundado, una escalera cortada. La rejilla ya no es limpia y hay que leer el plano, no solo las pistas. |
| Viernes | **Caso absurdo** | Reparto excéntrico y humor cozy: el mimo que no habla, la vidente que falla, el gato del hotel como testigo. Misma lógica, tono de sábado noche. |
| Sábado | **El difícil** | El de más pasos de inferencia medidos de la semana. Anunciado: «no apto para prisas». |
| Domingo | **XL** | El más grande y el más largo, pero no el más duro (P14). Día de sentarse. Ver idea 5. |

Cada caso lleva su etiqueta de dificultad medida por el motor (suave, normal, enrevesado, difícil, brutal), independiente del día: el sábado suele ser brutal, pero un jueves puede serlo.

**Por qué gusta.** Es la diferencia entre un juego y un ejercicio. Clues by Sam etiqueta la dificultad **por puzzle** y sus prescriptores han convertido eso en consejo de entrada: *«Monday's the best day to get into Clues by Sam»*; sus muestras verificadas confirman que la etiqueta no es el nombre del día (un domingo fue Hard y otro Evil). Murdle hace el sábado el más difícil y el domingo el más grande. Y las dos quejas más citadas del género son de curva: Enigmic, *«incluso los niveles más difíciles son muy fáciles de deducir»*; Murdoku en español, *«a partir del nivel 40 la resolución es poco lógica»*; TwinandTine, *«los primeros son casi insultantemente simples, hacia el 30 pega un salto»*. LinkedIn resuelve lo mismo por otra vía —ocho juegos distintos, uno nuevo cada 4-6 meses— porque más motivos distintos al día es más retención; nosotros no podemos construir ocho juegos, pero sí siete días con carácter.

**En qué se diferencia.** M6 (D-007) ya fija la curva por dificultad medida. Lo nuevo es que el día tenga **una regla que se pueda contar en una frase**. «El viernes es el de risa» y «el jueves te cierran una habitación» son cosas que se dicen en un grupo de WhatsApp; «el jueves es 5×5» no lo dice nadie. Ningún competidor del género da personalidad a los días.

**Coste:** bajo-medio en conjunto, pero desigual: el lunes, el martes, el sábado y el domingo son configuración del motor y contenido (0,25-0,5 p-s); el viernes es trabajo de `guionista-misterio` sin coste de código; el jueves exige que el generador acepte celdas bloqueadas (0,5-1 p-s); el miércoles es la idea 3.
**Fase:** MVP con cinco días (lunes, martes, jueves, viernes, sábado y domingo con carácter declarado; el jueves puede empezar sin celdas bloqueadas). Miércoles en fase 2.
**Riesgo:** las pistas de testimonio falso siguen prohibidas entre semana (P15). El viernes es absurdo en el tono, nunca en la lógica.
**Cómo se mide:** distribución de jugadores por día de la semana; el objetivo es que el sábado y el domingo dejen de ser los días flojos.

---

## 5. Domingo por entregas

**Qué ve y hace el jugador.** Cuatro domingos seguidos, el caso XL pertenece a la misma historia: la misma casa, el mismo pueblo, parte del mismo reparto. Al resolver el primero, el informe se queda con **un hecho** («Nieves Bergara mintió sobre la hora, pero no sobre el sitio») y lo guarda en una libreta que solo se abre los domingos. El cuarto domingo, el caso final se puede resolver con sus propias pistas, pero **quien tenga los tres hechos anteriores lo resuelve con dos pasos menos** y descubre además quién estaba detrás de los tres primeros. Si alguien llega en el tercer domingo, juega igual y no se pierde nada: la libreta se le rellena con lo que se puede deducir de los casos que no jugó, resumido en dos líneas.

**Por qué gusta.** Responde a la queja de fondo del género, que no es dificultad sino monotonía: *«un poco repetitivo al cabo de un rato»* (Murdle Vol. 2, Goodreads) y *«like Sudoku, after a while it does get a bit repetitive»* (Nicky Case sobre Clues by Sam, que es el producto más querido de la categoría). Sudoku.com ataca lo mismo con eventos de temporada verificados: el evento *Postcards* con cupos por dificultad (Fácil 0/3, Medio 0/2, Difícil 0/3, Experto 0/1) y un coleccionable al final, activado por LiveOps. Nuestra versión es mejor porque el hilo es narrativo, no cosmético: no coleccionas postales, coleccionas hechos que sirven.

**En qué se diferencia.** No hay ningún juego diario de deducción con arco. Los libros publican 100 casos independientes; las apps publican miles independientes. Un caso que recuerda lo que pasó hace tres semanas es algo que, hasta donde alcanza esta investigación, no existe en el género en ningún idioma.

**Coste:** medio (1-1,5 p-s: el motor debe generar cuatro casos que compartan universo y que el cuarto acepte hechos importados sin perder unicidad; más el arco narrativo).
**Fase:** Fase 2, cuando haya cuatro semanas de datos de comportamiento dominical.
**Riesgo:** que castigue al que llega tarde. Regla dura: **el caso final es resoluble sin la libreta**, siempre. La libreta acorta, no habilita.
**Cómo se mide:** retención de domingo a domingo dentro del arco (objetivo: cuarto domingo con más jugadores que el primero).

---

## 6. El escalafón: técnicas con nombre · FAVORITA

**Qué ve y hace el jugador.** Al terminar, entre la reconstrucción y el informe, aparece una línea: *«Has usado el cerco de pasillo y, por primera vez, la pinza de dos alas.»* La técnica nueva se abre en su cuaderno con su nombre, su dibujo y una frase de Sabueso explicando cuándo sirve. El cuaderno tiene doce o quince técnicas. Cuando domina cierto número (usadas sin ayuda, en casos distintos), sube de rango: **aprendiz de detective → detective → inspector → comisario → sabueso**. El rango no baja nunca y no depende de jugar todos los días: depende de **lo que sabe hacer**.

Nombres de ejemplo, que fijaría `disenador-puzzles` con el motor: el cerco de pasillo, la pinza de dos alas, el descarte por elemento único (el candelabro es lo único de plata), la cadena de tres, el hueco forzado, el testigo indirecto.

**Por qué gusta.** Es progresión con sentido, no con calendario. Tres evidencias. Sudoku.com: en el dataset verificado de reseñas recientes, lo único elogiado en concreto son **las pistas que explican la técnica**, y el análisis de terceros separa explícitamente la «escuela del revelar» de la «escuela de graduar por técnica» como el diferenciador real de la categoría. Clues by Sam: lo que sus jugadores dicen es *«me siento más listo cuando termino»*, es decir, valoran el aprendizaje, no la puntuación. Duolingo: su camino lineal funciona porque siempre hay una sola cosa siguiente y se ve el avance, pero su motor de progresión es la racha, con el coste documentado en reseñas (*«adiós a mi racha de 590 días»*, *«perdí 200 días viajando y eso rompió mi motivación»*, 18 quejas de pérdida de racha en la muestra). El escalafón por técnicas da la sensación de avance **sin la ansiedad**: quien se va dos semanas de vacaciones vuelve siendo inspector.

**En qué se diferencia.** Ningún competidor del género nombra las técnicas de deducción. Es además lo único de esta lista que **solo nosotros podemos hacer bien**: hace falta un solver que sepa por qué escalón pasó cada caso, y eso es exactamente lo que F2 ya construye para medir dificultad. Un competidor que escriba casos a mano no puede etiquetarlos así; y si nuestra correlación dificultad-tiempo real supera 0,6, tenemos la taxonomía gratis.

**Coste:** medio (1-1,5 p-s: taxonomía de 12-15 técnicas acordada entre `disenador-puzzles` e `ingeniero-motor-puzzles`, exposición de la escalera del solver, y el cuaderno en frontend).
**Fase:** Fase 2 (la taxonomía se define en el MVP porque la necesita también la idea 7).
**Riesgo:** que la taxonomía sea artificial y el jugador no reconozca lo que hizo. Prueba antes de construir: cinco personas resuelven un caso y describen su razonamiento; si sus palabras no encajan con nuestros nombres, los nombres están mal.
**Cómo se mide:** número medio de técnicas distintas desbloqueadas en los primeros 7 días y correlación entre rango y retención D30.

---

## 7. Sabueso olfatea · FAVORITA

**Qué ve y hace el jugador.** Está atascado. Toca a Sabueso, que duerme en una esquina de la pantalla. El perro se levanta, olfatea el tablero y **se planta delante de una pista**: esa que ya tenía y no ha exprimido. Se ilumina la pista y las celdas a las que afecta. Nada más. Si sigue atascado y vuelve a tocarlo, Sabueso gruñe hacia **una habitación concreta**: «aquí ya puedes colocar a alguien». Nunca dice a quién. Después se tumba y no se levanta más en ese caso: se ha cansado. En el informe final constará qué hizo el jugador solo y qué con ayuda.

**Por qué gusta.** Es el rescate que evita el abandono sin regalar la solución, y está probado en los dos productos con más jugadores del análisis, con la misma forma de dos niveles. Clues by Sam, FAQ oficial: *«la primera pulsación revela qué pistas deberías estar mirando, y la segunda revela qué sospechosos puedes identificar»*. LinkedIn Queens: la pista *«resalta una región donde debe ir una corona o señala colocaciones incorrectas»* —nunca la respuesta. Sudoku.com: sus *smart hints* que explican son, junto a la sencillez, lo único que sus usuarios elogian por su nombre. Y el contraejemplo es contundente: P16 documenta sistemas de pista inútiles (Tiny Crimes, *«6-12 pistas hasta conseguir una útil»*) y pistas tras anuncio que rompen la app (Myrdle).

**En qué se diferencia.** Tres cosas. Primera: **tiene personaje**. No es un botón de bombilla, es un perro que se cansa; ese detalle es lo que hace que se cuente. Segunda: **el coste es narrativo, no comercial**. En el resto del mercado la pista se paga con un vídeo (prohibido para siempre por M4) o con una vida; aquí se paga con el cansancio de Sabueso y con una línea en el informe. Tercera: nuestro «Comprobar» actual dice cuántas casillas fallan sin decir cuáles, que es una red de seguridad pero no enseña nada. Sabueso enseña.

**En qué somos mejores que la referencia.** Ellos no explican por qué esa pista; nosotros sí, porque el solver sabe qué escalón toca y cómo se llama (idea 6).

**Coste:** medio (1-1,5 p-s: exige exponer el siguiente paso del solver en vivo, que es la parte cara; el frontend es barato). Es la S1 del catálogo, con carácter y con el gatillo adelantado.
**Fase:** MVP en su forma de nivel 1 (señalar la pista sin exprimir) si el solver ya lo permite; nivel 2 en fase 2. D-007 condicionaba S1 a que el abandono antes de acusar superase el 35 %; **propongo adelantarlo**: no es una pista, es el personaje que da carácter al producto entero y es la pieza que sostiene el correo diario y la voz de marca.
**Riesgo:** que se use siempre y baje la sensación de logro. Mitigación: un olfateo por caso, sin excepciones, y el informe distingue lo resuelto solo.
**Cómo se mide:** abandono antes de acusar (objetivo: bajar de 35 % a menos de 25 %) y porcentaje de casos resueltos sin Sabueso (objetivo ≥ 60 %, si baja de ahí la ayuda es demasiado generosa).

---

## 8. Caso a la carta

**Qué ve y hace el jugador.** Termina el caso del día y quiere otro. En vez de «vuelve mañana», una pantalla de tres decisiones rápidas: **dónde** (el pazo de la costa, el hotel de carretera, el teatro cerrado, el tren nocturno, el balneario fuera de temporada), **quién** (la orquesta, el club de ajedrez, los vecinos de la escalera, la cuadrilla del bar) y **cómo de duro**. El motor genera el caso ahí mismo, con ese decorado y ese reparto. Es suyo: nadie más juega ese caso.

**Por qué gusta.** Porque el mercado ya educó a la gente en la abundancia y llegará esperándola. Enigmic tiene 320.000 descargas, 200.000 en 30 días (el 62 % de su base en un mes) y su titular de prensa es literalmente *«hay miles y son 100 % gratis»*. LinkedIn demuestra lo que pasa cuando no la sirves: la demanda de «más de uno al día» se fuga a clones (Queens Master, 13.100 valoraciones; más de veinte clones desde septiembre de 2025). Y sobre la personalización, la evidencia docente es específica: en Orientación Andújar el gancho son los **temas** (animales, cuentos, Stranger Things, ocho cuadernos en tres meses), no la dificultad (S3 de D-007).

**En qué se diferencia.** No es «casos ilimitados», que lo tiene cualquiera. Es **elegir el decorado y el reparto**, que es lo que convierte un puzzle generado en un caso propio, y hacerlo con la garantía de que sigue teniendo una sola solución y ninguna pista de sobra: eso último ningún generador temático de terceros lo promete.

**Coste:** medio (1-1,5 p-s: el motor tiene que aceptar plantillas de escenario y reparto como parámetros y `guionista-misterio` tiene que producir cinco escenarios y cuatro repartos con material suficiente).
**Fase:** Fase 2. No toca el caso del día, que sigue siendo uno y el mismo para todo el mundo (posicionamiento «diez minutos y a tu vida», P24).
**Riesgo:** romper la escasez que sostiene el ritual. Mitigación: nunca se ofrece antes de resolver el caso del día, y el caso a la carta no cuenta para nada más que el disfrute.
**Cómo se mide:** clics en «quiero otro» por jugador activo. Es además la señal de demanda que el catálogo pide antes de abrir Premium.

---

## 9. Acusación anticipada

**Qué ve y hace el jugador.** En un duelo aparece un botón que en la partida normal no existe: **Me mojo**. Puede pulsarlo en cualquier momento, con el tablero a medias, y señalar al culpable. Si acierta, gana el duelo aunque el rival termine el tablero entero antes que él. Si falla, pierde, aunque lo complete después. El marcador cuenta la historia: *«Ana se mojó en el minuto 3, con cuatro casillas puestas, y acertó. Luis terminó el tablero en 5:40.»*

**Por qué gusta.** Porque la velocidad es un eje competitivo que expulsa a la mitad de la gente, y el riesgo no. LinkedIn descubrió que lo que genera conversación en su compartir no es el tiempo sino **por dónde empezaste**: comparte los colores de las tres primeras coronas, las cinco primeras colocaciones, el orden de relleno. Un comentario real recogido en un chat de jugadores es *«unas tres primeras muy estéticas»*: la gente habla del atrevimiento, no del cronómetro. Clues by Sam registra los errores en el resultado y sus jugadores los comentan (*«Grr! Silly rushed mistake»*). Y encaja con nuestro descarte de Elo y ligas por expulsar al casual: aquí el lento puede ganar al rápido si tiene ojo.

**En qué se diferencia.** En todo el género se compite por tiempo. Aquí se compite por atrevimiento, que es una conversación mucho mejor («¿en serio lo tenías con tres pistas?») y que no exige ser bueno, exige ser valiente.

**Coste:** bajo (0,25-0,5 p-s sobre el desarrollo de duelos ya previsto).
**Fase:** Fase 2, con los duelos (meses 4-5).
**Riesgo:** que se convierta en lotería (uno de cuatro sospechosos, 25 % a ciegas). Mitigación: la acusación anticipada solo se habilita cuando el jugador tiene al menos la mitad del tablero colocado, y el marcador muestra siempre con cuántas casillas se mojó, que es lo que separa la corazonada del razonamiento.
**Cómo se mide:** porcentaje de duelos con al menos una acusación anticipada y tasa de acierto (si baja del 50 %, el umbral está mal puesto).

---

## 10. Pásale tu caso

**Qué ve y hace el jugador.** Ha resuelto un caso del archivo y le ha gustado. Botón: **Pásaselo a alguien**. Manda el enlace por WhatsApp y, a diferencia del duelo, aquí él ya no juega: **es el que sabe**. Ve, en asíncrono, cómo va el otro (por qué paso va, no qué ha puesto) y tiene derecho a **un pinchazo**: un mensaje de una línea de una lista corta —«estás mirando el ala equivocada», «la pista 4 la tienes sin usar», «tranquilo, vas bien»—. Cuando el otro termina, los dos ven el mismo informe y quién lo hizo mejor. El retado no necesita cuenta.

**Por qué gusta.** El rol de «el que ya lo sabe» es un placer distinto al de competir y no está servido en ninguna parte. Clues by Sam construyó su comunidad sobre un botón parecido, *Share scenario*, que empaqueta el estado exacto de la partida para pedir ayuda en Reddit o Bluesky: la gente **quiere** enseñar su tablero a otro. Murdoku: Endless Cases tiene salas privadas con amigos sobre el mismo caso (P22), lo que confirma la demanda pero no cubre este rol. Y la prensa española describe el consumo real del género como colectivo: *«funciona especialmente bien en modo cooperativo»* (Ser Padres).

**En qué se diferencia.** El duelo es una carrera; esto es un regalo con supervisión. Y el pinchazo convierte el chat de WhatsApp, que hoy está fuera del producto, en parte de la partida, sin construir un chat.

**Coste:** bajo-medio (0,5-0,75 p-s sobre la infraestructura de duelos).
**Fase:** Fase 2, después de los duelos.
**Riesgo:** que el pinchazo se use para chivar. Mitigación: la lista es cerrada, no hay texto libre, y ninguna frase menciona nombres ni casillas.
**Cómo se mide:** casos pasados por jugador y tasa de finalización del retado frente a la del duelo normal.

---

## 11. A cuatro manos: pistas repartidas

**Qué ve y hace el jugador.** Dos personas abren el mismo caso desde el mismo enlace. Cada una ve el tablero entero y **solo tres de las seis pistas**, distintas. Ninguna de las dos puede resolverlo sola: está garantizado por el motor. No pueden verse las pistas ni el tablero del otro. Lo único que pueden mandarse son **deducciones**, con un formulario, no con texto libre: «Tomás no está en el ala 1», «Rubén está en el pasillo del norte». Tres mensajes cada uno. Se resuelve entre los dos o no se resuelve, y el informe final dice qué dedujo cada uno.

**Por qué gusta.** Porque convierte una partida en una llamada de teléfono. La evidencia de que el género se consume en compañía es sólida en la prensa española (*«funciona especialmente bien en modo cooperativo»*, Ser Padres; *«resolver un asesinato de forma analógica»* como actividad de mesa, Deia) y en las reseñas de libros (abuela y nieta compartiendo el mismo cuaderno, Casa del Libro). Duolingo demuestra que el objetivo compartido funciona (misiones de amigos cooperativas con recompensa conjunta) y también dónde está la trampa: su racha de amigos es todo o nada y genera *«mi amigo lo dejó, perdí la racha, dejó de tener sentido seguir»*. Aquí no hay racha compartida ni castigo: solo un caso que se cae si no habláis.

**En qué se diferencia.** D-007 descartó «cooperativo en la misma pantalla» y tenía razón: dos personas mirando un móvil ya funcionan sin construir nada. **Esto es lo contrario:** la gracia es precisamente que **no** podéis ver lo mismo. Es información asimétrica, que es un género entero de juego de mesa y no existe en ningún juego diario de deducción. Registro aquí la revisión parcial de ese descarte: lo descartado sigue descartado; esto es otra cosa.

**Coste:** alto (2-3 p-s: el motor tiene que demostrar, para cada reparto 3+3, que ninguno de los dos subconjuntos resuelve el caso por separado y que la unión sí, sin redundancia; más dos sesiones sincronizadas y el canal de deducciones).
**Fase:** Fase 3, y condicionada a que los duelos (idea 9-10) demuestren que la gente juega con alguien.
**Riesgo:** el más alto del documento en coste y el más bajo en certeza de demanda. No se construye sin una señal previa: al menos el 15 % de los jugadores activos participando en algún duelo.
**Cómo se mide:** tasa de finalización de partidas a cuatro manos (si baja del 50 %, el reparto de pistas está mal calibrado).

---

## 12. El hilo del día: lo que deduces en Escena entra en el Expediente

**Qué ve y hace el jugador.** El caso del día y el expediente del día son **el mismo caso** contado por dos sitios: mismo pueblo, mismo elenco, misma tarde. Si por la mañana resolvió la Escena, al abrir el Expediente encuentra dos casillas ya marcadas, con una etiqueta: *«esto lo probaste tú esta mañana: Ignacio estaba en las calderas»*. Su trabajo de la mañana vale por la tarde. Y si empieza por el Expediente, pasa lo mismo al revés. Quien solo juegue uno de los dos no se pierde nada: cada caso es completo, único y justo por sí solo.

**Por qué gusta.** Convierte nuestra ventaja declarada en algo que se nota. Hoy §2.4 de `docs/funcionamiento-productos.md` presume de «dos formas de jugar bajo un mismo ritual», pero son dos juegos que no se hablan: eso es exactamente lo que hace LinkedIn con sus ocho juegos, donde cada uno vive en su mundo con su racha, y la unidad social tiene que ponerla el jugador desde fuera con bots de Telegram. Clues by Sam apunta en la dirección contraria y es su mejor idea de diseño: **el tablero es el cuaderno**, la información viaja dentro del juego y cada acierto alimenta el siguiente. Aquí la información viaja entre dos juegos.

**En qué se diferencia.** No hay nada parecido en el género en ningún idioma. Y es la única idea de esta lista que un competidor no puede copiar en una semana aunque quiera: requiere generar dos puzzles acoplados y demostrar la unicidad de los dos.

**Coste:** alto (2-3 p-s de motor).
**Fase:** Fase 3, después de que Expediente lleve al menos dos meses vivo y sepamos cuánta gente juega los dos modos el mismo día. Si son menos del 20 %, no se construye: sería trabajo caro para una minoría.
**Riesgo:** que el acoplamiento debilite alguno de los dos casos. Regla dura: cada caso se valida por separado con los criterios de F1 antes de acoplar; si el acoplamiento rompe la unicidad de cualquiera de los dos, se descarta ese par.
**Cómo se mide:** porcentaje de jugadores que juegan los dos modos el mismo día, antes y después.

---

## 13. Las cinco favoritas y por qué esas

| # | Idea | Qué gana | Coste | Fase |
|---|---|---|---|---|
| **1** | **La reconstrucción** | El momento que se enseña. Toca a todos los jugadores, ganen o pierdan, desde el primer caso | Medio | MVP |
| **7** | **Sabueso olfatea** | El personaje deja de ser un logo y se convierte en mecánica; rescata al que abandona | Medio | MVP (nivel 1) |
| **4** | **La semana con carácter** | Variedad con reglas contables; el barato con más efecto sobre la primera semana | Bajo-medio | MVP |
| **6** | **El escalafón** | Progresión con sentido y sin ansiedad; y es lo único que solo nosotros podemos hacer bien | Medio | Fase 2 |
| **3** | **Interrogatorio** | El mayor salto de diversión del documento y el que más nos aleja de ser «otro Murdoku en español» | Alto | Fase 2 |

**El criterio.** Las tres primeras entran en el MVP porque se notan en la primera partida y suman entre 2 y 3 persona-semana, que es lo que como mucho cabe. La 6 y la 3 son las dos apuestas de diferenciación real y comparten dependencia: **las dos exigen que el solver exponga su escalera de deducción paso a paso**. Esa es, por tanto, la pieza técnica más valiosa del proyecto después de la unicidad, y hay que pedírsela al motor una sola vez para tres cosas (Sabueso, escalafón, interrogatorio).

**Lo que dejo fuera de las favoritas y por qué.** La 2 viaja con la 1, no compite. La 5, la 8, la 9 y la 10 son buenas y baratas, pero dependen de piezas que aún no existen (arco dominical, generación bajo demanda, duelos). La 11 y la 12 son las más originales del documento y las que más me gustan como diseño, y precisamente por eso no las pongo arriba: son caras, dependen de señales de demanda que hoy no tenemos y las decidiría con datos, no con entusiasmo.

---

## 14. Lo que hay que cerrar antes de escribir una línea de código

Regla del proyecto: no se pide código hasta que el diseño de puzzle y el contrato del motor están cerrados. Estos son los encargos que salen de este documento, con responsable, entregable y criterio de hecho.

| Encargo | Responsable | Entregable | Dónde se guarda | Hecho cuando |
|---|---|---|---|---|
| Contrato de la escalera del solver: qué devuelve el motor paso a paso (peldaño, pistas usadas, celdas afectadas, nombre de técnica) | `ingeniero-motor-puzzles` | Especificación de la interfaz | `docs/specs/escalera-solver.md` | Frontend puede pintar una reconstrucción con datos reales de un caso generado |
| Taxonomía de 12-15 técnicas con nombre en español y regla de detección | `disenador-puzzles` con `ingeniero-motor-puzzles` | Tabla de técnicas | `docs/diseno/tecnicas-deduccion.md` | Cinco personas describen su razonamiento y sus palabras encajan con los nombres |
| Viabilidad del interrogatorio: banco de 30 casos con orden de deducción garantizado | `ingeniero-motor-puzzles` | Informe de viabilidad y coste | `docs/specs/interrogatorio-viabilidad.md` | Los 30 casos tienen escalera ordenada, unicidad y cero pistas redundantes; si no, se cancela la idea 3 |
| Reglas de los siete días y qué cambia en cada uno | `disenador-puzzles` | Especificación de la semana | `docs/specs/semana-con-caracter.md` | Cada día tiene regla, tamaño, banda de dificultad medida y una frase que lo describe |
| Confesión y pista de motivo: formato, longitud, tono cozy | `guionista-misterio` | Plantilla y 20 ejemplos | `content/` | 20 confesiones escritas y validadas: ninguna revela lógica, ninguna incumple la regla de contenido seguro |
| Sabueso como mecánica: comportamiento, animaciones, límites | `disenador-ux-ui` con `director-producto` | PRD breve | `docs/specs/sabueso-olfatea.md` | Criterios Given/When/Then de los dos niveles y del informe |

**Decisión pendiente de registrar en `docs/decisiones.md`** si se aprueba este documento: (a) adelantar S1 (pista contextual) al MVP como «Sabueso olfatea», rompiendo la condición del 35 % de abandono fijada en D-007, con el motivo escrito; (b) revisión parcial del descarte del modo cooperativo, que sigue vigente para el cooperativo en la misma pantalla y no cubre el reparto asimétrico de pistas de la idea 11.

---

*Cambios a este documento: los registra `director-producto` con fecha y motivo en `docs/decisiones.md`.*
