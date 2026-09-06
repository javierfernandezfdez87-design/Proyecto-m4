# Cómo funciona cada producto, contado como lo vive el jugador

Autor: `director-producto`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Fuentes: `docs/contexto-proyecto.md`, `docs/analisis-estrategico.md` (§2.3 y §3), `docs/catalogo-productos.md`, `docs/decisiones.md` (D-003, D-005, D-006).
Para quién: para leerlo directamente, sin conocer el proyecto por dentro. Sin jerga y sin listas de características.

Dos avisos antes de empezar:

- El nombre **Sospechario** y la mascota **Sabueso** están aprobados solo de forma provisional (D-005) y el registro de marca todavía no se ha hecho (D-006). En este documento los uso como si fueran definitivos para que se entienda el tono, pero pueden cambiar.
- Los nombres, personajes y casos que aparecen aquí son **inventados por nosotros** como ejemplo. No hay ni un solo elemento tomado de Murdoku ni de Murdle.

---

## Parte 1. Qué vive el jugador, producto por producto

### 1.1 El caso del día, modo Escena

Es el producto principal y el que casi todo el mundo conocerá primero. Es gratis para siempre.

**Qué ve al entrar.**
Alguien busca en el móvil "murdoku online gratis en español" y aterriza en nuestra web. Lo primero que ve, sin pulsar nada y sin registrarse, es el caso de hoy: un título ("Caso 47 · El silencio de la Casa de las Once Ventanas"), un dibujo de un plano de una casa vista desde arriba, y un botón grande que dice **Empezar**. Debajo, en pequeño, "resuelto hoy por 3.412 personas". Nada más. No hay registro, no hay elección de nivel, no hay menú. La primera vez, al pulsar Empezar, entra un tutorial de un minuto que se puede saltar y que se puede repetir después desde ajustes.

**Qué hace, paso a paso.**
Le presentamos un plano de 4×4 habitaciones. Cuatro sospechosos y una víctima. La regla es simple y se explica en una frase: **cada sospechoso está en una habitación distinta, y no hay dos en el mismo pasillo ni en la misma ala**. Como en un sudoku, pero con personas. El asesino es quien estaba en la habitación donde apareció el cuerpo.

El jugador toca una habitación y elige quién estaba allí. Puede además marcar posibilidades ("aquí podría estar Nieves") o tachar ("aquí seguro que no está Tomás"), que es como se juega de verdad: primero se descarta. Puede deshacer y rehacer cuantas veces quiera, sin castigo. Tiene un botón **Comprobar** que puede usar **una sola vez** por caso y que le dice cuántas casillas tiene mal, pero nunca cuáles: es una red de seguridad, no una chuleta. Y tiene un botón **Acusar**, que es el final: pide confirmación, no se puede deshacer y cierra el caso.

**Una partida completa, con el caso entero.**

> **Caso 47 · El silencio de la Casa de las Once Ventanas**
>
> Don Casimiro Valdés, coleccionista de relojes y de enemigos, apareció sin vida en la **Biblioteca**. Cuatro personas estaban en la casa esa tarde: doña Amelia Cifuentes (la anfitriona), Rubén Lasarte (el cocinero), Nieves Bergara (la archivera) y Tomás Quiroga (el jardinero).

El plano, visto desde arriba. Los pasillos van del 1 (norte) al 4 (sur); las alas, del 1 (oeste) al 4 (este).

|  | Ala 1 (oeste) | Ala 2 | Ala 3 | Ala 4 (este) |
|---|---|---|---|---|
| **Pasillo 1 (norte)** | Recibidor | Comedor | Cocina | Despensa |
| **Pasillo 2** | Salón | **Biblioteca** | Estudio | Invernadero |
| **Pasillo 3** | Escalera | Sala de música | Galería | Mirador |
| **Pasillo 4 (sur)** | Bodega | Taller | Trastero | Terraza |

Las seis pistas que ve el jugador:

1. Rubén no salió del pasillo del norte en toda la tarde.
2. Tomás estuvo todo el rato en el pasillo del sur.
3. Doña Amelia estaba en un pasillo pegado al de Rubén.
4. Tomás estaba en el ala más al oeste de la casa.
5. Rubén estaba dos alas más al este que Tomás.
6. Nieves no estaba en el ala de la Biblioteca.

Cómo se deduce, sin adivinar en ningún momento:

- Por las pistas 1 y 2, Rubén está en el pasillo 1 y Tomás en el 4.
- La pista 3 dice que Amelia está pegada a Rubén. Pegado al pasillo 1 solo está el 2 (el 0 no existe) y el 1 ya lo ocupa Rubén. Así que **Amelia está en el pasillo 2**. Como no puede haber dos personas en el mismo pasillo, a Nieves solo le queda el 3.
- La pista 4 pone a Tomás en el ala 1: pasillo 4, ala 1, es decir, **la Bodega**.
- La pista 5 pone a Rubén dos alas al este de Tomás, o sea en el ala 3: pasillo 1, ala 3, **la Cocina**.
- Quedan libres las alas 2 y 4 para Amelia y Nieves. La pista 6 dice que Nieves no está en el ala de la Biblioteca, que es la 2. Luego **Nieves está en el ala 4**: pasillo 3, ala 4, **el Mirador**. Y a Amelia le queda el ala 2: pasillo 2, ala 2, **la Biblioteca**.
- La Biblioteca es donde apareció el cuerpo. **La asesina es doña Amelia Cifuentes.**

Fíjese en un detalle que es el corazón del juego: ninguna pista habla de la Biblioteca ni de la culpable. El nombre del asesino aparece solo al final, como consecuencia de haber colocado bien a todo el mundo. No hay ninguna bifurcación en la que haya que probar suerte, y sobra exactamente cero información: si se quita cualquiera de las seis pistas, el caso deja de tener una única respuesta. Eso lo garantiza nuestro motor antes de publicar el caso, no el criterio de quien lo escribió.

**Qué pasa al terminar.**
El jugador pulsa Acusar. Si ha acertado, la pantalla se abre con el plano resuelto, el tiempo que ha tardado, si usó la comprobación, y **la explicación paso a paso** que acaba de leer usted, escrita con la voz de Sabueso, nuestra mascota. Debajo: su racha ("llevas 12 días seguidos"), un calendario de los últimos 30 días con un cuadradito por día, un botón de compartir, un botón para jugar un caso de los últimos 7 días y una invitación a recibir el aviso por correo mañana a las ocho.

Si ha fallado, ve exactamente lo mismo, incluida la explicación completa, y la racha se rompe (con matices, ver 1.3). No escondemos la solución para obligar a volver: castigar al que falla es la mejor forma de que no vuelva.

**Qué pasa al día siguiente.**
A las **00:00 de su hora local** —la del reloj de su móvil, no la de España— aparece un caso nuevo, con el número siguiente, y el de ayer pasa al archivo. El lunes y el martes el plano es de 4×4; de miércoles a sábado, de 5×5; el domingo hay "caso XL" de 6×6, que es el día de sentarse con calma. Es la misma curva todas las semanas, para que el jugador aprenda a esperar el domingo.

**Qué pasa si paga.** Nada del caso del día cambia: sigue siendo uno al día y gratis. Lo que cambia es lo que hay alrededor (ver 1.10).

---

### 1.2 El caso del día, modo Expediente

Llega poco después del lanzamiento (semanas 10-14). Es otra forma de jugar el mismo ritual: en la portada aparecen dos pestañas, **Escena** y **Expediente**, y el jugador elige. La cuenta es la misma, las estadísticas son las mismas y **la racha es una sola**: le basta con resolver uno de los dos casos del día para mantenerla.

**Qué ve al entrar.**
En vez de un plano, una ficha de expediente: la lista de sospechosos, la lista de lugares y la lista de objetos, cada uno con una línea de descripción. Y debajo, una tabla de casillas donde se marca con ✓ lo que es seguro y con ✗ lo que está descartado.

**Qué hace, paso a paso.**
Va cruzando: "la doctora Prado no tocó la estatuilla" → tacha esa casilla. Cuando en una fila solo queda una casilla sin tachar, ahí está la respuesta, y el juego puede propagar solo el resto de tachones si el jugador activa esa ayuda (es opcional; hay gente que disfruta haciéndolo a mano). También hay una comprobación única y un botón de acusar.

**Una partida completa, con el caso entero.**

> **Expediente 12 · El tasador y la marea**
>
> Don Pelayo Sanz, tasador de antigüedades, apareció muerto en **la sala de calderas** del pazo de Riomao. Cuatro personas estaban allí esa tarde. Cada una estuvo en un sitio distinto y llevaba un objeto distinto.
>
> **Sospechosos:** Bárbara Olmo, astrónoma · Ignacio Cifuentes, relojero · la doctora Prado, veterinaria · el capitán Muriel, marino retirado.
> **Lugares:** el faro · el invernadero · la sala de calderas · el embarcadero.
> **Objetos:** un rodillo de amasar (de madera) · un paraguas con empuñadura de latón · una estatuilla de bronce · un candelabro de plata.

Las seis pistas:

1. El rodillo de amasar no salió del invernadero en toda la tarde.
2. Quien bajó a la sala de calderas dejó una mancha de bronce en el pasamanos.
3. El candelabro apareció en el embarcadero, apagado y con la cera aún fresca.
4. Bárbara no soporta el olor a tierra mojada: no pisó ni el invernadero ni las calderas.
5. El capitán Muriel llevaba algo de plata en la mano.
6. Ignacio volvió a casa con hollín en los puños de la camisa.

Cómo se deduce:

- Pista 1: el rodillo estaba en el invernadero. Pista 3: el candelabro, en el embarcadero. Pista 2: la única pieza de bronce es la estatuilla, luego la estatuilla estaba en las calderas. Solo queda un objeto y un lugar: el paraguas estaba en el faro.
- Pista 5: lo único de plata es el candelabro, y el candelabro está en el embarcadero. Luego **Muriel estaba en el embarcadero**.
- Pista 4: Bárbara solo podía estar en el faro o en el embarcadero, y el embarcadero ya es de Muriel. Luego **Bárbara estaba en el faro**, con el paraguas.
- Pista 6: el hollín es de las calderas. Luego **Ignacio estaba en la sala de calderas**, con la estatuilla de bronce. A la **doctora Prado** le queda el invernadero, con el rodillo.
- El cuerpo apareció en la sala de calderas. **El asesino es Ignacio Cifuentes, y el arma, la estatuilla de bronce.**

De nuevo: ninguna pista dice quién es el culpable, ni siquiera lo insinúa. Y de nuevo, las seis pistas hacen falta y ninguna sobra.

Un detalle de diseño que se nota jugando: las pistas se apoyan en las descripciones de la ficha ("de plata", "de bronce", "de madera"). No hay que saber nada del mundo real ni deducir por cultura general; todo lo necesario está escrito en la propia página.

**Qué pasa al terminar y al día siguiente.** Igual que en Escena: informe con la cadena de deducción explicada, tiempo, racha común, compartir, archivo. Al día siguiente hay expediente nuevo a medianoche local. De lunes a jueves son cuatro elementos por categoría; de viernes a domingo, cinco; y el domingo se añade una cuarta categoría, el motivo.

---

### 1.3 La racha

**Qué ve.** Un número con una llama pequeña arriba a la derecha y un calendario de 30 cuadraditos en la pantalla de resultado. Verde: resuelto. Gris: no jugado. Rojo: fallado. Azul: día de gracia.

**Cómo funciona, de verdad.**
La racha sube cuando resuelve **cualquiera** de los dos casos del día. No hay dos rachas ni una por modo: eso convertiría el segundo modo en una obligación, y un juego diario que da órdenes se abandona.

El día se corta a medianoche de su hora local. Si viaja o cambia de país, el juego se adapta, pero solo permitimos cambiar la zona horaria declarada una vez cada 24 horas: si no, bastaría con saltar de huso para adelantar el caso de mañana.

**El día que falla.** Todo el mundo, pague o no, tiene **un día de gracia cada 30**: si se salta un día, la racha no se rompe, y el calendario lo marca en azul. Es una decisión deliberada: la parte oscura de las rachas es que cuando se rompe una de 60 días, mucha gente no vuelve nunca. Preferimos perder un poco de presión y no perder al jugador. Si se salta dos días seguidos, o si ya gastó su gracia, la racha vuelve a cero y el mensaje no le riñe: "Se acabó una racha de 43 días. Empezamos otra hoy".

**Qué pasa si paga.** Añade cuatro "congelaciones" al mes, que puede aplicar hasta 48 horas después del día perdido (es decir, puede rescatar una racha el martes por un lunes que se le olvidó), y un modo vacaciones que la pausa hasta 14 días seguidos, dos veces al año.

---

### 1.4 Compartir el resultado

**Qué ve.** En la pantalla de resultado, un botón "Compartir". Al pulsarlo se abre el menú de compartir del móvil, con un texto ya escrito y una imagen vertical lista para Stories.

**Qué se comparte exactamente.** Ni la solución, ni los nombres, ni las posiciones. Algo así:

```
Sospechario · Caso 47 🔎
🟩🟩🟩🟩
⬜🟩⬜⬜
🟨🟩🟩🟩
Resuelto en 6:12 · sin comprobar · racha 12
sospechario.com
```

Los cuadraditos cuentan cómo fue la partida (en qué orden cayeron las deducciones, dónde se atascó), no dónde estaba cada persona. Quien lo recibe no puede resolver el caso con eso, pero sí puede compararse, y esa comparación es la conversación. Es el mecanismo que hizo grande a Wordle y lo copiamos sin disimulo.

**Qué pasa después.** El enlace lleva una marca de quién lo compartió, no para señalar a nadie, sino para poder medir cuántos jugadores nuevos entran por esta vía. Compartir es ilimitado, gratis y para siempre; nunca será una ventaja de pago.

---

### 1.5 El archivo

**Qué ve.** Una lista de los **últimos 7 días**, cada uno con su título, su tamaño de plano y una marca de si lo resolvió, lo falló o no lo jugó. Se puede jugar cualquiera de ellos sin límite y sin que afecte a la racha (la racha solo la mueve el caso de hoy).

**Para qué sirve de verdad.** Para dos cosas. Una: si alguien descubre el juego un jueves, no empieza con las manos vacías, tiene una semana de casos por delante y eso multiplica la probabilidad de que vuelva mañana. Dos: es el escaparate de Premium, porque el día 8 de cada caso el archivo lo suelta.

**Qué pasa al día siguiente.** El archivo se desliza: entra el caso de ayer y sale el del octavo día. Si alguien guarda el enlace de un caso viejo y vuelve a él, ve una página que le explica que ese caso ya no está en el archivo gratuito y le ofrece apuntarse a Premium.

**Qué pasa si paga.** Tiene el archivo **completo desde el caso 1**, con buscador por fecha, filtro por dificultad y filtro por "los que fallé". Esta es la ventaja principal de Premium y la que más se pide en juegos de este tipo.

---

### 1.6 Los duelos

**Qué ve.** En la pantalla de resultado, junto a compartir, un botón que dice "Reta a alguien". No hay que crear una sala, ni buscar amigos, ni añadir a nadie.

**Cómo se usa, paso a paso.**
Ana resuelve el caso de hoy en 6 minutos y 12 segundos y pulsa "Reta a alguien". El juego genera un enlace y ella lo pega en el grupo de WhatsApp de la oficina. El enlace muestra una tarjeta: "Ana te reta con el Caso 47. Ella tardó 6:12". Su compañero Luis pulsa, escribe un alias —no necesita cuenta, ni correo, ni nada— y juega **el mismo caso exacto**. Al acabar ve una tabla: quién tardó menos, quién usó comprobaciones, quién falló casillas por el camino. La sala admite hasta 8 personas y caduca a las 48 horas.

**Por qué está hecho así.** Porque un duelo es una invitación disfrazada de juego: alguien manda un enlace a gente que aún no nos conoce y esa gente juega en el primer toque. Es nuestra vía de crecimiento boca a boca más medible.

**Lo que no es.** No es en tiempo real, no hay chat, no hay ranking mundial ni ligas, no se empareja con desconocidos. Todo eso mete presión competitiva y expulsa al jugador casual, que es exactamente nuestro público.

**Qué pasa si paga.** Gratis se pueden **crear 3 duelos al día**; aceptar es ilimitado siempre. Premium crea los que quiera. Lo importante: **pagar no da ventaja dentro del duelo**. Las comprobaciones se ponen a cero para todos y el contrarreloj no se aplica. Un juego donde el que paga gana es un juego muerto.

---

### 1.7 Las páginas de búsqueda con puzzle dentro

**Qué ve.** Alguien busca "murdoku en español" y llega a una página nuestra. Lo que encuentra **no es un artículo** con un enlace escondido al final: es un caso jugable en la primera pantalla, sin desplazarse, con dos líneas encima explicando qué es y un enlace al caso de hoy debajo. Ocho páginas de este tipo, una por cada forma de buscar: online, en español, gratis, cómo se juega, fácil, para niños, alternativas a Murdle.

**Qué hace.** Juega ahí mismo. Si lo resuelve, al terminar ve el informe normal y la invitación a jugar el caso de hoy y a apuntarse al correo diario. Es el punto de entrada del 70-80 % de nuestros jugadores previstos en los primeros meses.

**Una nota importante.** En esas páginas mencionamos Murdoku y Murdle como referencia comparativa, que es legítimo, igual que un fabricante de galletas puede decir "si te gustan las de tal marca". Lo que nunca haremos: usar esos nombres en nuestra marca, dominio, logo o nombre de aplicación. Los textos los revisa `experto-legal` antes de publicarse.

---

### 1.8 El correo diario

**Qué ve.** Un correo de 80-120 palabras a las 08:00 de su hora local, firmado por Sabueso: el gancho del caso de hoy sin destriparlo ("Hoy hay una gotera, un cuadro torcido y alguien que miente sobre las dos cosas"), un botón para jugar y un recordatorio de racha ("llevas 12 días"). Una vez por semana, una curiosidad del género.

**Por qué existe.** Porque un juego diario necesita algo que le recuerde al jugador que existe, y las notificaciones del navegador funcionan mal en iPhone. El correo es lo único que llega igual a todo el mundo. Alta con doble confirmación, baja en un clic, nunca vendemos ni cedemos la lista, y no hay publicidad de terceros.

---

### 1.9 La sección para niños

**Qué ve un padre o un maestro.** Una página propia, con casos de 3×3 y 4×4, dibujos amables, **sin cronómetro visible** y sin víctima: aquí no muere nadie. Desaparece la tarta del cumpleaños, el hámster de clase o el trofeo del colegio, y hay que averiguar quién estaba en la despensa. El lenguaje espacial es sencillo: encima, debajo, a la izquierda, a la derecha. Nada de "adyacente en diagonal".

**Qué no hay.** No hay cuentas para menores, no se pide el correo a ningún niño, no hay botones de compartir en redes, no hay publicidad y no se puede comprar nada desde esa sección. Si un adulto quiere el cuaderno imprimible, lo compra desde una página distinta, pensada para adultos.

---

### 1.10 Premium: qué cambia exactamente si paga

Cuesta **2,99 € al mes o 19,99 € al año** y no aparecerá hasta que sepamos que la gente vuelve sola: si a los 60 días del lanzamiento no hay 5.000 usuarios mensuales y una retención decente, no se abre la pasarela. Quien esté en la lista de espera desde el principio paga **14,99 € el primer año**.

**La regla que gobierna todo:** Premium **no quita nunca nada que hoy sea gratis**. El caso del día seguirá siendo gratuito en los dos modos, para siempre. Los límites del plan gratuito existen desde el primer día; no se aprietan luego.

Lo que se lleva quien paga, contado como lo vive:

- **El archivo entero.** Puede volver al caso 1 y jugarse los 200 que se perdió. Es la razón número uno por la que la gente paga en juegos así.
- **Casos cuando quiera.** Si termina el de hoy y quiere otro, pulsa y aparece uno nuevo, generado en ese momento, en el modo que prefiera. Lo que *no* puede es ver el caso de mañana: nadie lo ve antes de tiempo, ni pagando.
- **Elegir dificultad.** Fácil, normal, experto e imposible. Y la etiqueta no es un adorno: la pone el motor midiendo cuántos pasos de deducción encadenados hacen falta.
- **Contrarreloj.** Un caso con cuenta atrás de 3, 5 u 8 minutos, con marca personal.
- **Tres comprobaciones** por caso en vez de una (cero en los duelos, para todos).
- **Congelar la racha** cuatro veces al mes y pausarla en vacaciones.
- **Estadísticas de verdad:** en qué percentil está su tiempo, y en qué paso concreto se suele atascar comparado con el resto.
- **Retos semanales:** una serie de cinco casos encadenados con un final, tipo miniserie.
- Seis temas visuales más, exportar el caso de hoy a PDF de un clic, 30 % de descuento en los cuadernos, y cero anuncios si algún día los activamos.

**Cómo se cancela.** Un botón dentro de la propia aplicación, sin escribir a nadie. Si va por el plan anual, avisamos por correo siete días antes de la renovación.

---

### 1.11 Los cuadernos en PDF

**Quién los usa y cómo.** Hay mucha gente que busca esto para jugar **en papel**: en un viaje, en la mesa de la cocina, en clase, o para regalar. Se compran en una página, se pagan con tarjeta y llega un enlace de descarga válido 72 horas.

- **"5 casos para imprimir"** es gratis a cambio del correo: ocho páginas, cinco casos y sus soluciones razonadas. Es el anzuelo.
- **Pack Detective (5,99 €):** 40 casos de Escena y 10 de Expediente, de menos a más difícil, con las soluciones explicadas paso a paso, en A4 y en tamaño carta, y con una versión de tinta baja para no arruinarse imprimiendo.
- **Pack Aula (14,99 €, o 39,99 € para todo un centro):** 60 casos ordenados por curso, de 2.º a 6.º de primaria, con una guía de seis páginas para el docente, hoja de trabajo y rúbrica, y permiso explícito para hacer 35 copias. Un maestro lo compra el domingo por la noche y el lunes lo tiene fotocopiado.
- **Pack Junior (4,99 €):** 40 casos infantiles sin víctima, con ilustraciones y páginas para colorear.
- **Edición Regalo (9,99 €, para Navidad):** 100 casos, portada personalizable con un nombre y una dedicatoria, y una tarjeta regalo imprimible para meter en el sobre.

**Lo que no incluyen.** No se pueden revender ni redistribuir, no hay versión editable ni envío físico. Y ninguno repite casos que se hayan publicado como caso del día en los últimos 90 días, para no vender lo que alguien puede jugar gratis en el archivo.

---

### 1.12 La licencia a medios

Aquí el "usuario" es un periódico, no un jugador.

**El widget (450-750 € al mes).** El responsable de la sección de pasatiempos de un diario pega tres líneas de código en su plantilla y al día siguiente sus lectores tienen un caso nuevo cada mañana dentro de la web del diario, con los colores y la tipografía del diario. Abajo, discreto, "creado por Sospechario". Él ve un panel con cuántos lo juegan y cuántos lo terminan. No tiene que gestionar nada: a las 00:00 hay caso nuevo, garantizado. El primer mes es un piloto gratis.

**La marca blanca (desde 1.200 € al mes).** Un medio o una editorial que quiere que parezca suyo del todo. Le enviamos cada día un archivo con el caso y su narrativa, más un PDF listo para imprenta si lo publican también en papel, y adaptamos nombres de personajes y escenarios a su universo. Nuestra marca no aparece por ningún lado. Lo que no cedemos nunca es la propiedad del motor ni de los casos: es una licencia de uso, no una venta.

Para el jugador de un medio, la experiencia es la misma partida descrita en 1.1, pero sin racha ni cuenta ni archivo: solo el caso de hoy.

---

### 1.13 Lo que solo existe si se cumplen condiciones

- **La aplicación para móvil.** Solo si a los meses la web demuestra que la gente vuelve (retención a 30 días del 25 % y más de 30.000 usuarios mensuales). Sería la misma web empaquetada, con avisos push y el icono mostrando la racha. Ni un caso exclusivo. Si se hace, Premium en la tienda cuesta más (3,99 €/mes) porque Apple y Google se llevan su parte, y lo diremos claramente.
- **El libro.** No lo autoeditamos. Si la marca llega a ser conocida, preparamos una selección de 120 casos y se la licenciamos a una editorial, que se encarga de imprimir y distribuir.
- **La publicidad.** No se activa por debajo de 30.000 usuarios al mes. Cuando se active: un solo anuncio, en la pantalla de resultado, nunca durante la partida, nunca en la sección infantil.

---

## Parte 2. Comparación honesta con Murdoku y con Wordle

### 2.0 Lo primero, sin rodeos

**La mecánica base de nuestro modo Escena es la misma que la de Murdoku.** Colocar a cada sospechoso en una cuadrícula, uno por fila y columna, a partir de pistas espaciales, y descubrir que el asesino es quien estaba con la víctima. No es "parecida", no es "inspirada en": es la misma. Cualquier documento nuestro que diga otra cosa está vendiendo humo.

**El molde de producto lo copiamos de Wordle.** Un puzzle al día, el mismo para todo el mundo, racha, y un resultado que se comparte con cuadraditos de colores sin destripar la solución. Eso tampoco lo hemos inventado nosotros.

Esto se puede hacer y es legal. Las **reglas de un juego no se protegen** ni por derecho de autor ni por patente: nadie es dueño de "coloca a cada sospechoso en una fila y una columna", igual que nadie es dueño del sudoku ni del crucigrama. Lo que sí se protege es la **expresión**: el nombre, el logo, los personajes concretos, los textos, las ilustraciones, la interfaz. Por eso doña Amelia Cifuentes, Sabueso, la Casa de las Once Ventanas, cada pista escrita y cada dibujo son nuestros y no se parecen a los suyos, y por eso jamás usaremos "Murdoku", "Murdle" ni terminaciones en "-doku" o "-dle" en el nombre, el dominio o el logo. Mencionarlos en un texto para decir "si te gustan los Murdoku, prueba esto" sí es legítimo.

### 2.1 Lo que no sabemos con certeza sobre Murdoku

Antes de la tabla, tres cosas que las fuentes se contradicen y que **no damos por hechas**:

1. **Si murdoku.com está en español.** Una fuente dice que la web está disponible en 19 idiomas incluido el español; otra, que la interfaz solo está en inglés y portugués. No lo hemos verificado a mano. Está pendiente de comprobación directa; hasta entonces, cualquier plan que dependa de "no existe en español" es una hipótesis, no un hecho.
2. **Si tiene duelos y ligas semanales.** Nuestro propio análisis lo afirma, pero la fuente no está confirmada. Podría tenerlos, podría haberlos tenido, podría ser una función anunciada y no lanzada.
3. **Cómo se generan sus casos.** Suponemos que son de creación manual del autor, como suele ocurrir con los libros de esta categoría, pero no lo sabemos. Podrían usar un generador.

Donde hay duda, en la tabla aparece marcado como "sin verificar". Si al comprobarlo resulta que murdoku.com está bien traducido al español y tiene un producto digital sólido, nuestra principal ventaja se reduce mucho y hay que revisar la estrategia. Es un riesgo real que conviene mirar de frente.

### 2.2 La tabla

| | **Nosotros** | **Murdoku** | **Wordle (NYT)** |
|---|---|---|---|
| **Mecánica principal** | Espacial: un sospechoso por fila y columna, pistas espaciales, culpable = quien está con la víctima | **La misma** | Adivinar una palabra de 5 letras en 6 intentos con pistas de color. No tiene nada que ver |
| **Formato diario** | Un caso al día, el mismo para todo el mundo, a medianoche local | Casos diarios (además de casos sueltos) | Una palabra al día, a medianoche local. El modelo del que todos copiamos |
| **Racha** | Sí, única para los dos modos, con un día de gracia cada 30 y congelaciones de pago | Sí | Sí, sin gracia ni congelaciones |
| **Compartir sin spoiler** | Sí, texto con cuadraditos + imagen vertical | Sí | Sí. Lo inventó Wordle |
| **Archivo** | 7 días gratis, completo con Premium | Catálogo de casos accesible (alcance exacto sin verificar) | Solo para suscriptores de NYT Games; no hay archivo público |
| **Duelos** | Sí, por enlace, hasta 8 personas, 48 h, sin cuenta para el retado | **Sin verificar**: nuestro análisis dice que tiene duelos, cooperativo y ligas, pero no está confirmado | No |
| **Cómo se crean los casos** | Motor propio que genera y **demuestra** que hay una sola solución, que se puede resolver sin adivinar y que ninguna pista sobra; la IA escribe la historia y cada frase se vuelve a validar contra el motor | Probablemente manual, obra del autor (**sin verificar**) | Lista de palabras curada por una persona (editora en NYT) |
| **Idioma y localización** | Español nativo de partida, con variantes para España y América Latina; huso horario local | Inglés seguro; **español sin verificar** (fuentes contradictorias). Los libros sí están en español, editados por Planeta | Inglés. NYT no tiene versión oficial en español; lo que juega la gente en español son clones de terceros |
| **Segundo modo** | Sí: Expediente (cuadrícula lógica quién/dónde/con qué), misma cuenta y misma racha | No consta | No (el NYT tiene otros juegos, pero son productos separados con estadísticas separadas) |
| **Contenido infantil** | Sección web propia sin víctima, 3×3 y 4×4, y cuaderno para el aula | No consta | No |
| **Cuadernos imprimibles** | Cinco, de 0 a 14,99 €, incluido uno con licencia de aula | No como producto propio (existen PDF sueltos de terceros y del editor) | No |
| **Licencia a medios** | Sí, es una línea de negocio planificada (widget y marca blanca) | No consta | No aplica: el NYT *es* el medio |
| **Modelo de negocio** | Gratis + suscripción de 2,99 €/mes + cuadernos + licencias B2B + publicidad como suelo | **Libros**: 17 ediciones y más de 140.000 ejemplares en España. El juego digital es promoción del libro | Suscripción a NYT Games (unos 40 $/año) dentro de un paquete con muchos más juegos |
| **Aplicación** | No en el MVP; solo si la web demuestra retención | No hay app oficial; la que hay en Google Play no es suya y tiene 2,36 sobre 5 | Sí, la app de NYT Games |

### 2.3 Qué de esto le importa a un jugador y qué no

**Diferencias que el jugador nota el primer día:**

- **El idioma y el cuidado del texto.** Si su alternativa real hoy es una app no oficial con 2,36 estrellas y traducciones malas, jugar en español bien escrito es una diferencia enorme y evidente.
- **Que haya dos juegos en un mismo ritual y una sola racha.** Puede elegir entre deducción espacial o cuadrícula lógica según el día y el ánimo, sin que le castiguen por no jugar los dos.
- **La explicación de la solución al terminar.** Siempre, gane o pierda, con la cadena de razonamiento paso a paso. Es lo que convierte una derrota en aprendizaje.
- **El trato con la racha.** Un día de gracia cada 30 y la posibilidad de congelarla. Wordle no perdona; nosotros sí.
- **El horario.** Caso nuevo a medianoche de *su* reloj, lo que hace que el juego funcione igual de bien en Madrid, en Ciudad de México y en Buenos Aires.
- **Los duelos por enlace.** Retar a alguien de un grupo de WhatsApp sin que esa persona tenga que registrarse.
- **El archivo de 7 días y los cuadernos imprimibles.** Se ven, se usan, se tocan.

**Diferencias que solo nos importan a nosotros (y que el jugador no ve):**

- **El motor determinista.** Al jugador le da igual cómo se hace un caso. Solo nota el resultado: que nunca se atasque en un punto donde haya que probar suerte, y que la dificultad del jueves sea de verdad mayor que la del martes. Si el motor funciona, es invisible. Si falla, es lo único que se nota.
- **Que la narrativa la escriba una IA.** No es una ventaja para nadie. Es una forma de producir mucho contenido barato. Cualquiera puede hacerlo hoy, y hacerlo mal es fácil.
- **El modelo de negocio.** Que nosotros vendamos suscripción y ellos vendan libros no cambia en nada la partida de esta tarde. Es una diferencia de empresa, no de producto.
- **La licencia a medios y la marca blanca.** Otro canal de ingresos, cero impacto en la experiencia.
- **Que haya o no app nativa.** Importa para captar gente que busca "descargar", pero el juego es el mismo.

### 2.4 Lo que de verdad nos hace distintos

1. **Somos el único producto digital serio, en español y hecho para el móvil, en una categoría con más de 20.000 búsquedas al mes en España que hoy caen en clones, PDF sueltos y una app no oficial de 2,36 estrellas.** No es una ventaja de mecánica: es una ventaja de ejecución y de idioma, y solo vale mientras nadie más la ocupe. Depende además de confirmar que murdoku.com no está ya bien resuelto en español.
2. **Dos formas de jugar bajo un mismo ritual diario y una sola racha.** Nadie más ofrece hoy en español las dos mecánicas juntas en una misma cuenta. Es además nuestro seguro: si la moda de una se enfría, la otra sigue viva.
3. **Podemos garantizar, y demostrar, que cada caso es justo.** Una sola solución, resoluble sin adivinar jamás, dificultad medida de verdad y solución explicada al final. A cualquier volumen, todos los días, en dos modos. Eso lo hace el motor; un autor a mano no puede sostenerlo a este ritmo.

### 2.5 Lo que NO nos hace distintos

1. **La mecánica de Escena.** Es la de Murdoku, punto. Y el formato diario, la racha y el compartir con cuadraditos son de Wordle. No hay innovación de diseño en nuestro producto y no debemos comunicarlo como si la hubiera.
2. **Usar inteligencia artificial para escribir los casos.** No es un argumento de venta ni una barrera de entrada: cualquier competidor puede hacerlo esta misma semana. Lo que sí cuesta replicar es el motor que valida, no la IA que redacta.
3. **El modelo de negocio.** Suscripción, cuadernos y licencias son decisiones nuestras de caja. No hacen mejor la partida de nadie y no defienden nada: se copian en un mes. La única defensa real es llegar antes, ser mejor jugando y que la gente vuelva por costumbre.

---

*Cambios a este documento: los registra `director-producto` con fecha y motivo en `docs/decisiones.md`.*
