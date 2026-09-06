# Ideas de experiencia narrativa para Expediente

Autor: `guionista-misterio`. Fecha: 2026-09-06.
Fuentes: `docs/contexto-proyecto.md`, `docs/funcionamiento-productos.md` (§1.2), `docs/propuesta-jugabilidad.md` (§2 tabla maestra, V23, V24, V7, V20), `docs/motor-viabilidad-jugabilidad.md` (V23, V24), `docs/investigacion/resenas-libros-comunidad.md`, `content/ideas-jugabilidad-guionista.md`.

## Cómo leer esto

Este documento diseña **la experiencia narrativa** de Expediente, no su lógica. Ningún ejemplo de aquí es un caso publicable: son maquetas que muestran el formato y que, antes de salir, pasarían por el mismo trámite que cualquier caso —el motor genera y valida (solución única, sin adivinar, ninguna pista sobrante), y yo leo el resultado como jugador antes de darlo por bueno—. Donde una idea toca al motor, lo digo explícitamente y marco si es una decisión mía (contenido) o una pregunta abierta para `disenador-puzzles` / `ingeniero-motor-puzzles`.

Una regla ya cerrada en `docs/propuesta-jugabilidad.md` gobierna todo lo que sigue y no se negocia: **la voz de personaje nunca entra en una pista numerada.** Confesión, "y sin embargo", fichas de personaje y epílogos van siempre **fuera** de las seis (o diez) frases que el jugador usa para deducir. Esa frontera es la que separa Expediente de un Murdle con más adjetivos: aquí el dossier tiene alma, pero el expediente formal —las pistas— sigue siendo tan seco y sin trampa como en Escena.

---

## 1. La voz de Expediente frente a Escena

**Escena es un plano: se mira desde arriba y en silencio.** Expediente es otra cosa: es una carpeta que alguien te pone sobre la mesa, con fotos, notas y un informe de pruebas. Si Escena se lee como un mapa, Expediente se lee como se lee un caso de verdad: primero conoces a la gente, luego los sitios, luego los objetos, y solo entonces te dan las pruebas.

### El formato, en cuatro bloques

1. **Cabecera del expediente.** Número de caso, título, una sinopsis de dos líneas con la víctima, dónde apareció y cuántas personas estaban esa tarde. Esto es narrativa libre: aquí sí puede haber tono, adjetivos, humor.
2. **Fichas de sospechoso.** Una por persona: retrato (icono, silueta reconocible), oficio en una línea, y **una frase de carácter** que no es una pista —es decorado, registrado como tal (regla de M6: el detalle no puede coincidir con ningún predicado formal ni insinuar la solución). Sirve para que el jugador tenga a alguien a quien "leer", no un nombre suelto.
3. **Fichas de lugar y de objeto.** Una línea cada una. Aquí la línea del objeto **sí es información necesaria**: el material, el color o el rasgo que las pistas usarán ("de plata", "de bronce", "de madera"). No es decorado, es vocabulario cerrado, y por eso tiene que ser tan preciso como una pista.
4. **Las pistas, aparte, numeradas, secas.** Sin voz, sin adjetivos, sin nombre de quien las dice salvo que el propio hecho lo requiera ("Diego volvió a casa con serrín en los puños"). Se redactan con las mismas reglas que las de Escena: una pista, una lectura, vocabulario cerrado, forma formal e ida y vuelta con el motor.

La regla de frontera es simple y es la misma que ya rige Escena: **todo lo que tiene voz vive en las fichas y en los textos de cierre; todo lo que hay que deducir vive en las pistas numeradas, y las pistas numeradas nunca tienen voz.**

### Ejemplo completo, un caso 4×4, tal como lo leería el jugador

*(Maqueta narrativa. Las seis pistas están construidas para tener una única solución con este reparto de 4×4×4 — lo comprobaría el motor antes de publicarse.)*

> ## Expediente 8 · La séptima puja
>
> Don Herminio Baztán, subastador de la Casa Almenara, apareció sin vida en el **Almacén** una hora antes de la puja estrella de la tarde. Cuatro personas estaban en la casa de subastas. Cada una estuvo en un sitio distinto y llevaba un objeto distinto.

**Sospechosos**

| | Oficio | Rasgo | |
|---|---|---|---|
| **Ana Solórzano** | Restauradora de cuadros | Nunca se quita las gafas de aumento del cuello | «Un cuadro mal restaurado es peor que uno perdido.» |
| **Bruno Iriarte** | Chófer de la casa | Silba boleros mientras espera | «Yo solo conduzco. Lo que se cargue detrás no es asunto mío.» |
| **Clara Nieva** | Periodista de arte | No suelta su libreta de tapas rojas | «Si no lo escribo, no ha pasado.» |
| **Diego Ferrán** | Marchante de antigüedades | Colecciona relojes de bolsillo que nunca da cuerda | «El tiempo, en esta casa, se vende por lotes.» |

**Lugares**

- **Sala de Catálogo** — donde se exhiben las piezas antes de la puja.
- **Guardarropa** — donde los invitados dejan abrigos y bolsos.
- **Recepción** — la entrada, con el mostrador y el libro de firmas.
- **Almacén** — donde se guardan las cajas sin catalogar todavía.

**Objetos**

- **unos guantes de algodón blanco** — los que se usan para manipular piezas sin dejar huella.
- **una lupa de joyero** — para examinar barnices y firmas.
- **un abrecartas de hueso** — para abrir los sobres de las pujas por correo.
- **un pañuelo de seda azul** — con las iniciales de la casa bordadas.

**Las seis pistas:**

1. Los guantes de algodón no salieron de la Recepción en toda la tarde.
2. El abrecartas de hueso apareció junto a las cajas de embalaje del Almacén, con la etiqueta de envío rota.
3. El pañuelo de seda azul quedó doblado sobre la percha del Guardarropa.
4. Clara llevaba la lupa de joyero encima toda la tarde.
5. Ana no soporta el ambientador de la Recepción: no puso un pie allí.
6. Diego volvió a casa con serrín en los puños de la chaqueta.

**Cómo se deduce**, sin adivinar en ningún momento:

- Pistas 1-3 fijan tres objetos a tres lugares: guantes-Recepción, abrecartas-Almacén, pañuelo-Guardarropa. Por descarte, **la lupa está en la Sala de Catálogo**.
- Pista 4: Clara lleva la lupa, luego **Clara está en la Sala de Catálogo**.
- Pista 6: el serrín es del Almacén (las cajas de embalaje), luego **Diego está en el Almacén, con el abrecartas**.
- Quedan Ana y Bruno para Recepción y Guardarropa. La pista 5 dice que Ana no está en Recepción, luego **Ana está en el Guardarropa, con el pañuelo**, y **Bruno en la Recepción, con los guantes**.
- El cuerpo apareció en el Almacén. **El culpable es Diego Ferrán, y el arma, el abrecartas de hueso.**

Ninguna pista menciona al culpable ni al Almacén como escena del crimen hasta que el jugador lo deduce solo; y cada una de las seis hace falta (quitar cualquiera deja más de una asignación posible). Eso lo certificaría el motor antes de publicar, no yo.

Después de acusar, fuera ya de las pistas, entra el cierre narrativo (confesión y "y sin embargo", secciones 2 y 4).

---

## 2. El motivo como remate

Hay tres formas de tratar el motivo y no son excluyentes entre sí; lo que cambia es cuánto peso de *puzzle* le dan y qué día de la semana lo soporta.

| Opción | Cómo funciona | Pros | Contras |
|---|---|---|---|
| **A. Cuarta categoría plena** | El motivo entra en la cuadrícula grande, con sus propias pistas y sus propias relaciones cruzadas con sospechoso/lugar/objeto. Ya comprometido para el **domingo XL** en `funcionamiento-productos.md` §1.2. | Sensación de expediente completo; reutiliza el mismo motor sin mecánica nueva (V24 ya admite `atributo(x,valor)`); coherente con el domingo grande. | Alarga la partida entre semana si se hiciera todos los días (rompe el objetivo de 5-15 min); duplica el coste de redacción (las pistas de motivo también deben pasar "una pista, una lectura"); riesgo de que una pista de motivo suene a estereotipo («el chef temperamental, claro que fue por orgullo») en vez de a deducción. |
| **B. Segunda fase tras acusar** (V7): 3 candidatos + 1-2 pistas cortas, saltable | El jugador acierta el «quién», y solo entonces se abre una minificha: «¿Por qué lo hizo?» con tres motivos y una o dos pistas nuevas y breves. | Barato, opcional, añade un segundo «clic» sin alargar mucho; el motor ya lo modela como micro-CSP independiente (U+NR sobre 3 candidatos); funciona igual en Escena y en Expediente, reforzando el ritual único. | Es un plus, no el plato principal: hay que evitar que se sienta un anticlímax tras la gran revelación; exige comprobar con M12 que el motivo **no esté ya entrañado** por las pistas principales, o el remate se pierde antes de llegar. |
| **C. Solo recompensa narrativa en la confesión** | El motivo se revela directamente en el epílogo, sin pistas ni deducción: es historia, no puzzle. | Coste mínimo, cero riesgo de motor, funciona todos los días sin excepción. | Pierde el «clic» de deducción; el motivo se siente «regalado», no ganado; no diferencia frente a lo que ya hace cualquier libro con una frase de cierre. |

**Mi recomendación: combinar las tres, cada una en su sitio, no elegir una sola.**

- **De lunes a sábado en Expediente, motivo = opción B.** Tras acusar bien, una minificha de tres candidatos y una o dos pistas cortas, siempre saltable. Mantiene el caso corto entre semana y usa una pieza que el motor ya sabe construir.
- **El domingo, motivo = opción A**, ya comprometida: el domingo es el día grande de Expediente (cinco elementos por categoría) y es donde tiene sentido que el motivo sea una categoría más, con sus propias pistas cruzadas.
- **Siempre, sea cual sea el mecanismo, motivo = opción C además**, como remate: la confesión ata arma + lugar + motivo en una sola escena. Esto no es alternativo a A o B, es el broche que las dos necesitan para no quedarse en un dato frío.

### Ejemplo, día de semana (opción B), sobre el caso de la subasta

> **¿Por qué lo hizo?**
> Motivos posibles: **dinero**, **venganza**, **orgullo**.
>
> Pista A: El motivo de Diego no tiene nada que ver con ninguna deuda de la casa de subastas.
> Pista B: Diego llevaba veinte años esperando a que alguien reconociera el valor real de una pieza que él mismo tasó mal, no una discusión reciente.
>
> Por descarte: no es dinero (pista A) ni algo de esta semana (pista B, que descarta una disputa puntual de honor). **El motivo es el orgullo.**

### Ejemplo, apunte para el domingo (opción A)

Aquí la ficha de motivo se trata como una categoría más, con sospechosos, lugares, objetos *y* motivos (dinero, venganza, orgullo, miedo, celos —cinco, si el domingo tiene cinco elementos por categoría), y las pistas pueden cruzar motivo con cualquier otra categoría:

> «Quien guardaba rencor por la tasación de hace veinte años no fue quien se llevó el candelabro.»
> «El motivo de dinero coincide con quien estuvo en la Recepción esa tarde.»

Nota de oficio para quien redacte estas pistas: el riesgo real de la opción A no es de motor, es de mí —evitar que el motivo se adivine por estereotipo de personaje en vez de por la cadena de pistas. Cada pista de motivo debe poder resolverse sin conocer el carácter de nadie, exactamente igual que una pista espacial.

---

## 3. Reparto recurrente y universo

Expediente es, de los dos modos, el que mejor encaja con un elenco fijo: tiene oficios, objetos y motivos que dan pie a biografía, y Murdle vive precisamente de eso (sus sospechosos recurrentes son la razón por la que la gente sigue comprando el volumen siguiente). Propongo un reparto de **24 personajes** (dentro del rango 20-30 que pide la tarea), pensado para el mundo hispano, con la misma regla de nombres que ya rige Escena: nombres pronunciables en toda la región, sin repetir inicial **dentro de un mismo caso**.

### El reparto (muestra representativa; se completa en `content/biblia.md` cuando se escriba)

| Nombre | Oficio | Rasgo visible | Secreto (canon) | Estado |
|---|---|---|---|---|
| Ana Solórzano | Restauradora de cuadros | Gafas de aumento al cuello | Encubrió una restauración fallida hace diez años | Activo |
| Bruno Iriarte | Chófer | Silba boleros | Conduce sin haber sacado nunca el carnet | Activo |
| Clara Nieva | Periodista de arte | Libreta de tapas rojas | Debe dinero a la casa de subastas | Activo |
| Diego Ferrán | Marchante de antigüedades | Relojes de bolsillo sin cuerda | Tasó mal una pieza y lo ocultó veinte años | **Quemado** (Expediente 8) |
| Elena Rus | Florista | Siempre huele a jazmín | Es hija no reconocida de un notario del pueblo | Activo |
| Fermín Otazu | Notario jubilado | Pajarita los domingos | Falsificó un testamento hace treinta años | Activo |
| Gala Prendes | Influencer de yoga | Habla en susurros | No domina la postura que enseña en sus vídeos | Activo |
| Hugo Zabaleta | Chef temperamental | Grita en la cocina, nunca fuera de ella | Le copió una receta a su maestro | Activo |
| Inés Calatayud | Veterinaria | Siempre con un gato en brazos | Ocultó una negligencia con un animal | Activo |
| Jacobo Meruelo | Cartero | Memoriza cada dirección del pueblo | Lee las postales antes de entregarlas | Activo |
| Leonor Ibáñez | Coleccionista de arte | Nunca se quita los guantes | Compró una pieza sabiendo que era robada | Activo |
| Mateo Sagasti | Bibliotecario | Susurra incluso fuera de la biblioteca | Guarda en casa libros que debería haber devuelto | Activo |
| Nieves Recalde | Astrónoma | Mira hacia arriba al hablar | Firmó un descubrimiento que no fue suyo | Activo |
| Octavio Prada | Capitán retirado | Cojea del pie izquierdo | Dejó a un compañero atrás en una travesía | Activo |
| Paula Uranga | Repostera | Siempre con harina en el delantal | Dejó que culparan a otro proveedor de un fallo suyo | Activo |
| Remedios Anta | Costurera | Guarda alfileres en la manga | Cosió una prueba falsa para incriminar a un rival | Activo |
| Salvador Etxeberria | Apicultor | Manos siempre hinchadas de picaduras | Vendió miel adulterada una temporada | Activo |
| Teodora Villagrán | Subastadora | Nunca repite un martillazo | Amañó una puja hace años | Activo |
| Urbano Casals | Anticuario | Cuenta el tiempo por años, no por meses | Heredó su tienda con un documento falsificado | Activo |
| Valeria Odriozola | Enfermera | Llega siempre cinco minutos antes | Firmó un certificado médico que no debía | Activo |
| Ximena Roca | Jueza jubilada | Apunta fechas en un cuaderno de tapa dura | Dejó libre a un culpable por amistad | Activo |
| Yago Sertucha | Guía turístico | Conoce trescientas leyendas locales | Se inventó la mitad | Activo |
| Zoraida Umerez | Pintora | Manchas de óleo en los nudillos | Un cuadro suyo se atribuye hoy a otro autor | Activo |
| Casimiro Prado | Relojero | Lleva la hora de tres países a la vez | Robó piezas de un museo hace treinta años | **Víctima** (Expediente 8) |

Nota de continuidad: cuando se escriba `content/biblia.md`, conviene revisar si nombres ya usados como ejemplo en otros documentos del equipo (Remedios Anta y Braulio Sende aparecen en `docs/propuesta-jugabilidad.md` como ejemplo de una mecánica de motor) se incorporan al canon o se dejan como maquetas de otro documento; lo señalo aquí para que no se dupliquen sin querer.

### Cómo se construye

- **Nombre + inicial distinta dentro del pool**, no solo dentro del caso: con 24 nombres y unas 20 iniciales distintas cubiertas, cualquier subconjunto de 4-6 personas que arme un caso puede filtrarse para no repetir inicial, sin tener que inventar nombres nuevos cada vez. Es una regla para quien monte el reparto de cada caso (persona o script), no del motor.
- **Oficio reconocible + un rasgo visible** (para el icono) + **un secreto canon**, exactamente la misma fórmula que Escena, pero aquí el secreto tiene un uso extra: es la reserva de motivos futuros. Un personaje puede aparecer diez veces como sospechoso inocente antes de que su secreto se convierta en el motivo del caso en el que por fin es culpable.

### Cómo evoluciona

- **Estados:** *activo* (disponible para sospechoso, testigo o víctima) → *quemado* (fue culpable en un caso publicado; sale del pool de sospechosos durante un tiempo largo, puede reaparecer como referencia o testigo, no vuelve a ser culpable a corto plazo porque repetir el mismo nombre como asesino dos veces en poco tiempo cansa) → *víctima* (se retira del pool de forma permanente; puede aparecer en flashbacks o casos de época anteriores a su muerte, pero no como sospechoso vivo).
- **El sospechoso de ayer, víctima de hoy** es exactamente el mecanismo que da fandom: Diego, culpable del Expediente 8, puede ser mencionado como testigo en un caso posterior antes de, mucho más adelante, convertirse él mismo en víctima de otro caso —siempre con el aviso explícito de que **matar a un personaje recurrente querido es un evento raro**, reservado a domingos especiales o aniversarios, y revisado con `director-producto` antes de publicarse (cuesta más caro en fandom de lo que parece en texto).
- **Regla dura, la misma que ya fijó el dictamen del motor para el diario y el reparto recurrente:** ningún caso depende de otro para resolverse. El reparto recurrente es una capa de premio para quien juega seguido; el jugador que entra por primera vez tiene, en las pistas y las fichas del propio caso, todo lo que necesita.

### Cómo se evita que los atributos fijos filtren la solución

Este es el punto más delicado y la respuesta es una frontera, no un parche:

**Los atributos biográficos estables de un personaje (oficio, rasgo visible, secreto, y si algún día se fijan, altura o mano dominante) viven exclusivamente en la ficha de personaje y en los textos fuera de las pistas —sinopsis, confesión, "y sin embargo". Nunca son el valor que fija o pregunta una pista numerada.**

Las pistas de cada caso versan siempre sobre variables que se sortean de cero en cada aparición: dónde estaba esa tarde, qué objeto llevaba, cuál fue el motivo esta vez. Por eso el jugador veterano que recuerda que "Bruno silba boleros" no gana nada: ningún caso pregunta jamás por eso, porque esa frase es de ficha, no de expediente formal.

Si el motor incorpora más adelante una categoría de atributo físico (el DSL de V24 admite `atributo(x, valor)`), esa categoría tiene que usar rasgos que se resortean caso a caso —quién llevaba gafas de sol esa tarde, quién iba de negro— y nunca el rasgo canon del personaje. Trazar esa frontera es una decisión mía de contenido, no del motor: yo decido qué es "de ficha" (fijo, para siempre) y qué es "de caso" (variable, se olvida al cerrar el expediente), y esa línea no se cruza nunca en el ritual diario.

La única excepción es deliberada y se anuncia: en un especial de aniversario se puede jugar a propósito con el conocimiento del fandom ("por primera vez, lo que sabéis de Ana sí importa"), pero siempre en la portada del caso, nunca como sorpresa silenciosa —la misma regla que ya rige la semana con carácter en `docs/propuesta-jugabilidad.md` §4.

---

## 4. Ideas narrativas propias de Expediente

Diez ideas. Para cada una: cómo se vive con un ejemplo real, la emoción que busca, en qué se diferencia de Murdle, qué necesita del motor, coste de contenido por caso, y si es generable con IA y validable.

### 4.1 Confesión con motivo

**Cómo se vive.** Al acusar bien, un epílogo en la voz del culpable que ata en una sola escena el arma, el lugar y el motivo ya resueltos —no los repite por separado, los funde.

> «El abrecartas era de mi padre. Lo até a mi cinturón la tarde en que Herminio dijo, delante de todos, que mis tasaciones no valían ni el papel del catálogo. No fui al almacén por venganza. Fui a buscar el cuchillo, y él ya estaba allí, riéndose de la misma pieza que yo había fallado veinte años atrás.»

**Emoción.** Cierre emocional: las tres piezas del expediente dejan de ser datos sueltos y se vuelven una escena.
**Diferencia con Murdle.** Murdle cierra con una frase de humor sobre la cuadrícula resuelta, no con un párrafo que amarre arma, lugar y motivo en una sola voz.
**Qué necesita del motor.** Nada nuevo: los tres campos (arma, lugar, motivo) ya están resueltos antes de escribir el epílogo (V23, coste casi cero).
**Coste de contenido.** Bajo, 40-70 palabras por caso.
**Generable con IA y validable.** Sí. Prompt: ficha de personaje + los tres valores fijados por el solver. Validación: no puede contradecir la solución ni desvelar nada de un caso que el jugador ha fallado (si falla, no hay confesión, como ya está decidido).

### 4.2 "Y sin embargo" con arma

**Cómo se vive.** El último párrafo reinterpreta un detalle decorativo sobre el **objeto**, plantado desde el principio en su ficha, nunca en una pista formal.

> «Y sin embargo, el abrecartas de hueso no era, como constaba en el inventario, un regalo de la casa a sus empleados más veteranos. Era el que Diego se llevó, sin permiso, la noche en que empezó a trabajar allí. Veinte años guardando un cuchillo que nunca fue suyo.»

**Emoción.** El "ajá" retrospectivo de releer la ficha del objeto y ver lo que ya estaba ahí.
**Diferencia con Murdle.** Murdle no reinterpreta ningún dato al cerrar el caso.
**Qué necesita del motor.** El registro de decorados (M6): el validador comprueba que el detalle reinterpretado no aparece en ninguna pista numerada.
**Coste de contenido.** Bajo, 2-3 líneas, sembradas desde la ficha del objeto en el guion inicial.
**Generable con IA y validable.** Sí, con revisión a mano —es el punto más delicado de "no contradecir la lógica".

### 4.3 El objeto que cuenta la historia

**Cómo se vive.** La ficha de cada objeto lleva, además de la línea resoluble ("de plata", "de bronce"), una segunda línea de procedencia puramente decorativa que lo conecta con el reparto recurrente o con casos anteriores.

> «Un candelabro de plata, del ajuar de boda de los Riomao — el mismo que estuvo a punto de prender fuego, sin querer, en el Expediente 4.»

**Emoción.** Fandom de universo compartido: "he reconocido este objeto".
**Diferencia con Murdle.** Los objetos de Murdle son genéricos y no reaparecen entre casos; aquí construyen continuidad como una serie.
**Qué necesita del motor.** Nada de lógica. Si se quiere que un objeto concreto "viaje" entre casos, necesita un identificador estable, igual que los personajes.
**Coste de contenido.** Bajo-medio: exige llevar un registro de qué objetos ya han aparecido y dónde, para no contradecirse (tarea de continuidad editorial, no de motor).
**Generable con IA y validable.** Sí, junto a la ficha del objeto; la validación es de continuidad, la hago yo.

### 4.4 El informe forense como pista de atributo

**Cómo se vive.** Una pista se envuelve en un membrete documental (informe forense, nota de recepción, apunte de agenda) firmado por un perito recurrente, pero la pista en sí, debajo del membrete, sigue seca y numerada como siempre.

> *Informe forense, doctora Recondo:*
> 3. El objeto hallado junto al cuerpo tenía restos de barniz para madera.

**Emoción.** Sensación de expediente policial real, refuerza el tono "dossier" frente al "plano" de Escena.
**Diferencia con Murdle.** Murdle numera sus pistas sin ningún envoltorio; aquí cada pista puede llevar un membrete de procedencia distinto sin cambiar su contenido.
**Qué necesita del motor.** Nada: el membrete es maquetación sobre una pista ya validada. Regla dura: el membrete nunca añade información ni insinúa una lectura ("la doctora sospecha que…" está prohibido).
**Coste de contenido.** Muy bajo: catálogo cerrado de 4-5 membretes reutilizables entre todos los casos.
**Generable con IA y validable.** Sí, plantilla cerrada; la validación es la misma prueba de ida y vuelta de cualquier pista (el membrete no puede alterar el predicado formal).

### 4.5 El diario del detective con las armas coleccionadas

**Cómo se vive.** Extensión del "diario y reparto recurrente" centrada en objetos: una vitrina personal con las armas de los casos resueltos, cada una con una línea de historia.

> «Abrecartas de hueso — Expediente 8, La séptima puja. Veinte años de rencor guardados en un cajón.»

**Emoción.** Coleccionismo, orgullo de vitrina completa, sin tocar la racha.
**Diferencia con Murdle.** No existe ningún elemento de colección persistente entre casos en Murdle.
**Qué necesita del motor.** Identificador estable de objeto + campos arma/motivo ya resueltos. Cero lógica nueva.
**Coste de contenido.** Bajo: una línea generada a partir de metadatos que ya existen.
**Generable con IA y validable.** Sí, automático a partir del caso cerrado; validar que no se muestren casos que ese jugador concreto no ha resuelto todavía (evitar spoilers si la vitrina se comparte).

### 4.6 La doble víctima

**Cómo se vive.** Un caso especial, poco frecuente, con dos víctimas: el mismo reparto de sospechosos hay que cruzarlo contra dos escenas, dos armas y (si aplica) dos motivos.

> «Esa noche hubo dos disparos, no uno. El primero mató al subastador. El segundo, al hombre que iba a delatarlo. Sospecha de los mismos cuatro nombres, para las dos muertes.»

**Emoción.** "Esto es más grande de lo que parecía", sube la apuesta sin cambiar la mecánica base.
**Diferencia con Murdle.** Murdle mantiene siempre una sola víctima por caso.
**Qué necesita del motor.** **Bloqueante, pregunta abierta para `disenador-puzzles`/`ingeniero-motor-puzzles`:** hay que verificar si esto es una ampliación trivial (más filas) o exige comprobar entrañamiento (EN) entre dos sub-modelos si comparten sospechosos. No lo doy por resuelto aquí.
**Coste de contenido.** Alto: doble de fichas, doble de pistas, sinopsis más compleja.
**Generable con IA y validable.** Parcialmente. La IA puede proponer el borrador, pero el riesgo de contradicción entre las dos víctimas exige más revisión humana que un caso normal.

### 4.7 Casos de época (el domingo XL en un tren de 1920)

**Cómo se vive.** Mismo formato de expediente, ambientado en una época reconocible, con oficios y objetos propios (telegrafista, doncella, viajante de comercio), reservado sobre todo al domingo XL.

> «Expediente 21 · El expreso de las diez y cuarto. 1923. El barón Anselmo Etxarri apareció sin vida en el vagón restaurante, en algún punto entre Irún y Madrid.»

**Emoción.** Escapismo: sensación de "otro género" dentro del mismo ritual diario.
**Diferencia con Murdle.** Murdle no varía su ambientación entre casos; mantiene siempre el mismo tono contemporáneo.
**Qué necesita del motor.** Nada de lógica nueva en principio, pero si los "lugares" son vagones en fila en vez de una cuadrícula 2D, hay que confirmar con `ingeniero-motor-puzzles` que la adyacencia lineal se puede expresar en el DSL actual sin inventar predicados nuevos.
**Coste de contenido.** Medio-alto: documentación de época, cuidado con anacronismos y con la regla de no usar hechos históricos reales.
**Generable con IA y validable.** Sí, con más supervisión que un caso contemporáneo: hay que revisar anacronismos y que ningún elemento roce un hecho real (regla del proyecto).

### 4.8 Casos serializados con un villano que deja un arma firma

**Cómo se vive.** Extiende el "villano de la semana" a Expediente: un ladrón o estafador recurrente deja siempre el mismo objeto secundario en la escena —nunca el arma del caso del día—, mencionado solo en el informe de cierre.

> «Entre las cajas del almacén, alguien ha dejado, otra vez, un naipe de la baraja francesa. El Cascabel ha vuelto a pasar por aquí, aunque esta vez no ha matado a nadie.»

**Emoción.** Anticipación semanal, sensación de temporada en vez de casos sueltos.
**Diferencia con Murdle.** No hay continuidad de villano entre los casos de un mismo volumen.
**Qué necesita del motor.** Nada: la firma es texto añadido al informe de resultado, nunca una pista numerada ni una entrada del expediente formal.
**Coste de contenido.** Bajo-medio: una frase semanal a partir de la biblia del personaje.
**Generable con IA y validable.** Sí; validar que la firma nunca se cuele dentro de una ficha o de una pista formal del caso del día.

### 4.9 Humor de viernes con "armas" absurdas

**Cómo se vive.** El viernes de disparate aplicado a Expediente: el objeto es deliberadamente ridículo y de bajo riesgo, y la ficha lo trata con humor sin dejar de ser resoluble.

> «Una tarta de manzana de tres capas — todavía tibia cuando alguien decidió que era mejor arma que postre.»

**Emoción.** Alivio cómico tras un día más difícil.
**Diferencia con Murdle.** Murdle mantiene siempre el registro de "asesinato", aunque desenfadado; nuestro viernes deja explícito que no muere nadie de verdad, alineado con la regla cozy y con la sección infantil.
**Qué necesita del motor.** Nada: mismas restricciones que cualquier caso, solo cambia el registro de redacción (etiqueta de tono en el brief).
**Coste de contenido.** Igual que un caso normal.
**Generable con IA y validable.** Sí, con nota de estilo específica; validar que el chiste no se cuele dentro de una pista numerada.

### 4.10 "Tú eres sospechoso" en versión dossier

**Cómo se vive.** Adaptación del especial mensual al formato Expediente: una ficha de sospechoso está escrita en segunda persona y el jugador tiene que demostrar, casilla a casilla, con qué objeto y en qué lugar estaba "tú" esa tarde.

> «Tú, Bruno Iriarte, el chófer. Todos recuerdan que discutiste con don Herminio por el aparcamiento del furgón. Demuestra dónde estabas y qué llevabas en las manos.»

**Emoción.** Implicación personal dentro del propio dossier.
**Diferencia con Murdle.** Murdle nunca convierte al lector en una entrada de su propia tabla.
**Qué necesita del motor.** Nada distinto en la CSP —"tú" es un nodo más, con las mismas restricciones que cualquier sospechoso—; solo cambia la concordancia gramatical a segunda persona en la ficha y en las pistas que lo mencionen, ya prevista en V23.
**Coste de contenido.** Medio: reescribir la ficha y las pistas que mencionan a ese sospechoso.
**Generable con IA y validable.** Sí, con revisión de concordancia (tuteo/voseo según variante regional si aplica).

---

## 5. Mis 5 favoritas

1. **Confesión con motivo (4.1).** Coste mínimo, cero riesgo de motor, y es exactamente lo que ya está decidido para Escena extendido a Expediente sin fricción: el remate que convierte tres datos resueltos en una escena.
2. **El objeto que cuenta la historia (4.3).** Construye universo con lo que Expediente tiene y Escena no —objetos con nombre propio— y alimenta el reparto recurrente de la sección 3 sin pedirle nada al motor.
3. **Casos serializados con villano de arma firma (4.8).** Barato, da una razón para volver entre semana más allá del hábito, y es puro texto de cierre: cero riesgo de romper una pista.
4. **Humor de viernes con armas absurdas (4.9).** Coste cero, ya validado por el panel de jugadores para el resto del calendario (V22, "viernes de disparate" con nota alta y contable), y encaja de forma natural en Expediente porque el objeto es el protagonista del chiste.
5. **"Y sin embargo" con arma (4.2).** El mecanismo ya está aprobado en general; aplicarlo al objeto en vez de a un elemento decorativo del plano le da a Expediente su propio "ajá" final, distinto del de Escena.

Dejo fuera de las cinco, no porque sean malas sino porque piden más antes de comprometerse: la doble víctima (4.6, pregunta abierta de motor sin resolver), los casos de época (4.7, coste alto y riesgo de anacronismo) y el informe forense (4.4) y el diario de armas (4.5), que son buenas piezas de tono pero de impacto más marginal que las cinco de arriba.
