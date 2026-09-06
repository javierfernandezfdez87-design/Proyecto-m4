# Panel de jugadores: qué opinan los cinco perfiles de Expediente (arquitectura, 35 mecánicas e ideas, y comparación con Escena)

Autor: panel simulado (agente), con los mismos cinco perfiles de `docs/diseno/panel-jugadores-jugabilidad.md`. Fecha: 6 de septiembre de 2026. Versión 1.0.
Fuentes: `docs/contexto-proyecto.md`, `docs/funcionamiento-productos.md` (§1.2 y §1.3), `docs/diseno/panel-jugadores-jugabilidad.md` (perfiles y método), `docs/investigacion/resenas-libros-comunidad.md` (§4, §5, §6, §7.2, §7.5, §10), `docs/diseno/ideas-expediente-disenador.md` (E-1 a E-12, §1 base, §2 traslados, §4 semana, §5.2 descartes, §7 pruebas), `content/ideas-expediente-guionista.md` (§1 dossier, §2 motivo, §3 reparto, §4.1-4.10), `docs/ideas-expediente-producto.md` (§1 arquitecturas A/B/C, §2 reparto de piezas, §4 E1-E10, §5 riesgos).

**Aviso de método.** Son los mismos cinco jugadores inventados del panel anterior, con la misma forma de hablar y las mismas anclas en reseñas reales (citadas entre comillas y en cursiva). Lo nuevo es la superficie: una tabla en vez de un plano. Esto **no sustituye** la validación con personas reales que exige D-009; es la criba previa que decide qué se prueba primero y con quién (§9). Las notas van de 1 (no lo jugaría) a 5 (lo pediría). La media es aritmética; la dispersión es la desviación típica poblacional sobre las cinco notas (σ < 0,7 = consenso; 0,7-1,0 = matices; > 1,0 = divide). Donde dos documentos proponen variantes de la misma idea, el panel puntúa la familia y dice **qué variante quiere**.

**Alerta de marca (D-006):** ninguno de los cinco disparadores se cumple hoy. No procede avisar. Recordatorio operativo heredado de `ideas-expediente-producto.md`: la primera conversación con un medio o una editorial (la vía que E8 y la marca blanca empujan) cumple un disparador, y entonces hay que registrar en la OEPM (clases 9 y 41) antes de la segunda reunión.

**Dos exigencias que el encargo pide y el panel aplica en todas las fichas:** (1) **el muro de texto**, que es la queja principal contra el libro de Murdle (*«demasiadas pistas comparado incluso con libros estándar de puzles de lógica, lo que significa que no está bien editado»*, Vol. 2; *«alguien tiene que hacer un mejor trabajo de edición»*, Vol. 3); y (2) **la confusión entre modos** para quien viene de Murdoku y abre el jueves esperando un plano.

---

## 1. Los cinco jugadores, y qué traen a una tabla que no traían a un plano

| Jugador | Quién es (sin cambios) | Qué le pasa con Expediente (evidencia) |
|---|---|---|
| **Marta**, 34 | Fan del libro Murdoku por Cristinini; metro, móvil en una mano, 8-12 minutos, entre semana | Nunca ha jugado una cuadrícula lógica: *«al principio cuesta entender la lógica, pero una vez la pillas engancha»* (Casa del Libro MX) es su curva, y una tabla de 48 casillas es «entender la lógica» otra vez. Su enemigo sigue siendo la doble lectura (*«beside, south of, alone o shelf»*, murdoku.fans) y ahora también el texto: en Expediente hay fichas antes de las pistas. Lo que la haría grabar un vídeo: algo que se vea en una captura. |
| **Luis**, 52 | Lector de Murdle y de novela negra; sillón, calma, lee todas las pistas antes de tocar nada | **Expediente es su libro.** Lo compró en español y le pasó lo de todos: *«20 erratas repartidas en 6 acertijos; el 21 y el 22 son imposibles de resolver»*, *«pistas que se contradicen en al menos 10-15 de los 100 casos»* (Goodreads). Lo que le gustaba: *«vas siguiendo una historia que te lleva de un acertijo a los siguientes»* (Casa del Libro) y que el reparto vuelva. Lo que odiaba: el mentiroso (*«no consigo resolver ni uno de los puzles con mentiroso»*, MetaFilter), *«las soluciones al final sin enlaces para saltar»* y que el cierre sea una frase de chiste sobre la cuadrícula, no un porqué. Desconfía de lo que huele a máquina (*«poorly designed by AI»*, Caseoku). |
| **Sofía**, 27 | Wordle y LinkedIn Games; ascensor, comparte en dos grupos, salta cualquier tutorial | Una tabla es más «contabilidad» que un plano y su tiempo sube; lo acepta solo si es comparable con todo el mundo (*«insignia de honor»*). Cualquier pantalla entre acusar y compartir es un peaje. Le encantan las reglas que caben en una frase (*«Monday's the best day to get into Clues by Sam»*). Se enfada con los rechazos sin explicación (*«Why is this giving me a logic error?»*). |
| **Familia Ruiz** | Padre con hijos de 10 y 13; domingo, sofá, tableta, el padre lee en voz alta | La hoja de tachar es la del Cluedo de mesa y los niños la conocen. Pero el domingo era su día de la casa de dos plantas (5 en el panel anterior) y el pequeño no llega a 96 casillas. Anclas: *«funciona especialmente bien en modo cooperativo»* (Ser Padres); Murdle Junior *«a mis niños de 10 y 12 les encanta»*; el padre filtra lo que no es cozy (*«no pensaba matarlo»* ya le pareció oscuro). |
| **Diego**, 41 | Profesor en Rosario; un día a la semana, 28 alumnos, papel; prepara el domingo | **Ya enseña este formato sin saberlo:** las fichas «murdoku» de Orientación Andújar *«son en realidad de tipo Murdle: personaje × objeto»* (§7.5 de las reseñas), y venden *«comprensión lectora real, donde cada pista cuenta: un detalle mal leído (un "no" o un "cerca") y el culpable se escapa»*. La tabla de doble entrada es currículo de 5.º-6.º. Piratea PDF a regañadientes (*«kit imprimible de 80 casos, alrededor de $3.000»*). Necesita español sin modismos, solución razonada y que se imprima en una carilla. |

---

## 2. Parte 1 · La arquitectura: A, B o C

Las tres de `ideas-expediente-producto.md` §1.1, y una cuarta que no es invento del panel sino la propuesta explícita de `ideas-expediente-disenador.md` §4.2 («jueves primero, semana paralela después»):

- **A.** Dos rituales diarios paralelos (Escena y Expediente cada día), racha única: basta resolver uno.
- **B.** Un solo caso al día; el modo es una propiedad del día; Expediente ocupa **jueves y domingo**. El domingo XL pasa a ser Expediente y «la casa de dos plantas» sale del domingo.
- **C.** Escena es el producto; Expediente es un segundo caso opcional del día, sin racha.
- **B-jueves.** Como B, pero **solo el jueves**; el domingo sigue siendo Escena de dos plantas; el segundo día de Expediente se abre cuando ≥15 % de quienes juegan el jueves vuelven a un Expediente del archivo por su cuenta en los siete días siguientes.

### Marta

«Yo vine por el plano. Busqué "murdoku online gratis", me salió esto y me quedé. **A** me deja en paz: dos pestañas, yo toco la mía y la otra ni la miro... pero eso mismo es lo malo, que abrir y tener que elegir es un menú, y a las ocho de la mañana no quiero menús. **B** es la que me da miedo: abro el jueves desde el correo, le doy a Empezar sin leer nada y me sale una tabla de 48 casillas. Me han cambiado el juego. Y el día de gracia es uno cada treinta, y jueves hay cuatro al mes, así que o juego la tabla o pierdo la racha. Me dicen que la portada avisa; yo no leo portadas, leo el botón. **C** es lo que quiero: mi caso todos los días, y si un día tengo diez minutos de más, el otro. Lo de **B-jueves** lo aguanto si el jueves es el del comisario, que empieza medio lleno y me dice en una frase qué tengo que hacer; si el jueves es una tabla vacía con seis pistas, me voy al archivo del miércoles y el jueves dejo de abrirlo.»
**A 3 · B 2 · C 4 · B-jueves 3**

### Luis

«Lo tengo claro y es **A**: el libro me lo hacía cada noche y no cada jueves. Pero pongo una condición que sale de mi propia herida: *«frustrante intentar el mismo misterio varias veces para descubrir que el problema era del libro y no mío»*. Si tener Expediente a diario significa el doble de casos que una persona tiene que resolver a ciegas antes de publicarlos, y eso se afloja, prefiero dos a la semana sin una sola errata que siete con una al mes. Por eso **B** no me parece mal: el jueves, el domingo con el motivo como cuarta columna, y si quiero uno el martes lo pago, que ya he dicho que pago; lo que no acepto es que el de pago tenga menos revisión que el del día. **C** es la peor para mí, y no por la racha, que me da igual: un modo que "no cuenta para nada" es un modo que nadie cuida, y es lo que hace murdle.com con su mini. **B-jueves** es una ración corta; con el archivo y el ilimitado me apaño, pero no me hagan esperar nueve meses para llenar el escalafón.»
**A 5 · B 4 · C 2 · B-jueves 3**

### Sofía

«Un ritual. Uno. Lo que comparto en el grupo es "el de hoy", y si hay dos "el de hoy" ya no es una frase, es una lista. **A** es LinkedIn: yo juego Queens y Tango cada día, así que no me muero, pero la comparación se parte en dos y la mitad del grupo no juega la segunda. **B** me gusta por lo que le gustaría a cualquiera de mi grupo: "el jueves es de tabla" es una regla de una frase, y el jueves todo el mundo hace la misma tabla, así que mi tiempo vale. Lo que me va a pasar el primer jueves: me salto el tutorial y pierdo. Lo asumo; el segundo jueves ya no. **C** es un caso que hace el 20 % y no se puede comparar con nadie: no lo juego. **B-jueves** es lo mismo que B pero con el domingo intacto, y a mí el domingo me da igual: 4.»
**A 3 · B 4 · C 2 · B-jueves 4**

### Familia Ruiz

«Nosotros jugamos el domingo y nada más, así que la arquitectura para nosotros es una pregunta: ¿qué hay el domingo? En **A**, las dos cosas, y elegimos según el día: el plano de dos plantas casi siempre, y la tabla el domingo que llueve y sobra tarde. En **B** el domingo es siempre la tabla, y encima la grande: nos quitan la casa de dos plantas, que era nuestro plan, y nos ponen 96 casillas en la tableta con tres cabezas encima; el de diez se pierde en la tercera fila y la de trece se lo hace sola. Y luego está lo de "los seis culpables de la semana": nosotros no hemos jugado la semana, para nosotros son seis desconocidos. Un detalle que nos ha chocado leyendo: el de producto dice que el domingo son cinco por categoría más motivo, y el diseñador dice que eso no cabe en la pantalla y que nunca se hará. Que se pongan de acuerdo antes de tocarnos el domingo. **C** nos vale igual que A. **B-jueves** nos deja el domingo como estaba y la tabla en el archivo para cuando queramos: 4.»
**A 4 · B 2 · C 4 · B-jueves 4**

### Diego

«A mí el calendario me da igual: doy clase un día a la semana y lo que imprimo es del archivo. Lo que me importa es que exista el expediente de una página y que haya suficientes. **A** me da 365 al año, pero yo necesito 60 bien ordenados por curso, no 365; y si el doble de casos significa que alguno sale con un "no" mal puesto, ese caso lo descubro con 28 chicos delante, que es el peor sitio del mundo para descubrirlo. **B** me viene bien por lo contrario: menos casos, mejor revisados, y el pack de aula lleva Expediente en quinto y sexto, que es donde la tabla de doble entrada es contenido y no adorno. El jueves sale, el domingo lo imprimo, el lunes lo doy. **C** igual que A. **B-jueves**, lo mismo que B para mí: 4.»
**A 3 · B 4 · C 3 · B-jueves 4**

### La tabla

| Arquitectura | Marta | Luis | Sofía | Ruiz | Diego | Media | σ |
|---|---|---|---|---|---|---|---|
| **A** · dos rituales paralelos | 3 | 5 | 3 | 4 | 3 | **3,6** | 0,80 |
| **B** · un caso al día, Expediente jueves y domingo | 2 | 4 | 4 | 2 | 4 | 3,2 | 0,98 |
| **C** · segundo caso opcional sin racha | 4 | 2 | 2 | 4 | 3 | 3,0 | 0,89 |
| **B-jueves** · solo el jueves, domingo intacto | 3 | 3 | 4 | 4 | 4 | **3,6** | **0,49** |

**Lo que el panel concluye.** A y B-jueves empatan en media, pero A divide (un 5 de Luis contra tres 3) y B-jueves es la única sin ningún 2. **B tal como la propone producto pierde precisamente con los dos perfiles a los que toca el día:** Marta (el jueves le cambia el juego) y la familia (el domingo le quita las dos plantas). Los tres argumentos de producto a favor de B (reversibilidad, medición limpia, firma humana) los entienden Luis y Diego y los repiten con sus palabras; nadie los rebate. Lo que el panel rebate es **el domingo**: es el único día con un ritual establecido y colectivo, y B lo cambia de superficie de golpe. Por eso la arquitectura ganadora del panel es **B-jueves**: un solo ritual, Expediente el jueves con la tabla del comisario, el domingo como estaba, y el segundo día de Expediente decidido por el dato y por la prueba 5 de §9 (familias reales, tres formatos de domingo). Detalle a cerrar antes: producto y diseñador se contradicen en el tamaño del domingo XL (5×5×5 + motivo, 150 casillas, contra el techo «nunca 5 elementos con 4 categorías» del diseñador); el panel toma el techo del diseñador por bueno.

---

## 3. Cómo se han unificado las ideas de los tres documentos en 35 fichas

| # | Ficha unificada | Diseñador | Guionista | Producto |
|---|---|---|---|---|
| 1 | El dossier: cabecera, fichas con frase de carácter, pistas secas aparte | §1.5 «atribución sí, voz no» | §1 (cuatro bloques) | — |
| 2 | Pistas por atributo de ficha | §1.4 (cinco reglas duras), T5/T6 | fichas de objeto | E7 |
| 3 | Presupuesto de texto: pista de una línea, ≤120 palabras | §1.6 + taxonomía T1-T9 | — | — |
| 4 | El motivo en el último minuto (segunda fase saltable) | E-2 | §2 opción B | E3 |
| 5 | El motivo como cuarta categoría el domingo XL | §1.3 | §2 opción A | calendario §1.4 |
| 6 | Confesión con motivo y «y sin embargo» con arma | — | 4.1, 4.2, §2 opción C | E3 (confesión) |
| 7 | Reparto recurrente de 24 con estados | — | §3 | «sala de espera» |
| 8 | El objeto que cuenta la historia y la vitrina de armas | — | 4.3, 4.5 | — |
| 9 | El membrete: informe forense como envoltorio de pista | §1.5 (prefijo fijo) | 4.4 | — |
| 10 | La coartada cruzada | E-1 | — | — |
| 11 | La cadena de custodia | E-3 | — | — |
| 12 | El objeto perdido | E-4 | — | — |
| 13 | La tabla del comisario | E-5 | — | — |
| 14 | El expediente invertido | E-6 | — | — |
| 15 | El vis a vis / interrogatorio de ficha | E-7 (4 fichas, coste asimétrico) | — | E1 (3 preguntas) |
| 16 | La doble víctima | E-8 (un hecho grave y un hurto) | 4.6 (dos disparos) | — |
| 17 | El pasillo: los lugares tienen orden | E-9 | 4.7 (vagones en fila) | — |
| 18 | La contraprueba | E-10 | — | — |
| 19 | La rueda de reconocimiento | E-11 | — | — |
| 20 | El reparto: dos plantas sin cuarta categoría | E-12, §2.5 | — | — |
| 21 | La reconstrucción de la rejilla con el salto entre bloques | §2 traslado | — | E2 |
| 22 | El domingo de la conspiración | — | — | E4 |
| 23 | El villano que deja un arma firma | — | 4.8 | — |
| 24 | La rejilla a dos manos: hoja A / hoja B | §2 traslado | — | E5 |
| 25 | Guardar, restaurar y vaciar la rejilla | — | — | E6 |
| 26 | El expediente de una página imprimible | — | — | E8 |
| 27 | Expediente Junior | E-4 variante «uno se quedó en el recreo» | — | E9 |
| 28 | Tú eres sospechoso, en rejilla | §2 traslado | 4.10 | E10 |
| 29 | Casos de época | — | 4.7 | — |
| 30 | Humor de viernes con armas absurdas | §4.1 viernes | 4.9 | — |
| 31 | El escalafón de Expediente | §2.7 (14 técnicas) | — | §2 (un cuaderno, dos apartados, un rango) |
| 32 | El lunes corto: sobres por casillas ✓ y coartada confirmada | §2.2, §2.3 | — | — |
| 33 | Acusación atómica con tres resultados | §2.8 | — | — |
| 34 | Tirar del hilo entre bloques y autopropagación opcional | §2.6 | — | — |
| 35 | El vistazo 3×3×3 y el tutorial que solo salta el primer jueves | §1.1 | — | §2, R1 |

Fuera de las fichas, porque son la arquitectura y ya están puntuadas en §2: la semana propia de Expediente (§4.1 del diseñador, solo existe bajo A) y el jueves fijo (§4.2).

---

## 4. Las 35 fichas

### 1. El dossier: cabecera, fichas con frase de carácter, pistas secas aparte

Cabecera de dos líneas con tono; una ficha por sospechoso (retrato, oficio, **una frase de carácter** que es decorado); fichas de lugar y objeto de una línea (la del objeto sí es información); y las pistas numeradas, secas, sin voz. Un caso 4×4×4 tiene, antes de la primera pista, cabecera + 12 fichas.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «He contado: cabecera, cuatro personas con oficio, rasgo y frase, cuatro sitios, cuatro objetos, y *luego* las seis pistas. Es más texto que un caso entero de Escena y todo antes de tocar nada. Si las fichas vienen plegadas y solo veo nombre, oficio y "de plata", y la frase sale al tocar, es un 4. Desplegadas, en el metro, es *«demasiadas pistas... no está bien editado»* pero con fichas.» |
| Luis | 5 | «"Primero conoces a la gente, luego los sitios, luego las pruebas": eso es abrir un expediente de Maigret. Y las pistas secas y aparte es exactamente lo que le pido al libro en español, donde el adjetivo de la traductora me costó dos acertijos. Que la frase de carácter no sea nunca pista es la regla que me hace confiar.» |
| Sofía | 2 | «Cuatro frases de carácter que no sirven para nada son cuatro líneas de scroll entre yo y la pista 1. Yo voy a las pistas. Si tengo que pasar por "silba boleros" cada día, mi tiempo sube y no por lógica.» |
| Familia Ruiz | 4 | «Yo leo las fichas con voces y a los niños les gusta saber quién es quién antes de empezar: la del chófer que silba se la sabe el pequeño. Es el reparto de personajes del Cluedo, pero con frase.» |
| Diego | 4 | «La ficha es vocabulario cerrado y eso lo puedo enseñar: "de plata", "de bronce". La frase de carácter la uso para comprensión, pero que venga marcada como decorado, porque si no un chico la trata como pista y "colecciona relojes sin cuerda" acaba en una deducción. Y en la carilla ocupa sitio.» |

**Media:** 3,6 · **Dispersión:** σ 1,02, divide entre quien lee (Luis, familia) y quien escanea (Sofía, Marta) · **¿Se lo contaría a un amigo?** Luis y la familia (las voces) · **Riesgo de rechazo:** el muro. El formato tiene el doble de texto que Escena antes de la primera pista y la queja documentada del género es exactamente esa. **Lo que el panel pide, casi al unísono: fichas plegadas por defecto** (nombre + oficio + etiqueta de atributo visible; retrato y frase de carácter al tocar), y la cabecera de 45 palabras contando la regla del día.

### 2. Pistas por atributo de ficha

Cada sospechoso, lugar y objeto lleva atributos impresos (material, peso, zurdo, planta) y las pistas los usan: «quien estaba en el archivo llevaba algo de plata». Cinco reglas duras: misma palabra en ficha y pista, ordinales sin empates, el artículo anuncia la cardinalidad («el zurdo» solo si hay uno), máximo dos atributos activos, un solo portador = pista directa disfrazada.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «"Algo de plata" con "de plata" escrito en la ficha es lo contrario de *beside*: no hay que saber nada, está ahí. Lo único: ir de la pista a la ficha y volver con una mano; si al tocar la pista se me iluminan los objetos de plata, 5.» |
| Luis | 5 | «Es la mejor idea de Murdle, las cartas con atributos, y la única que quiero que se copie: en estructura, no en texto. Y la regla del artículo, "el zurdo" solo si hay uno, es exactamente el tipo de cosa que la traducción rompió: el error del caso 60 era de género. Que lo compruebe una máquina me quita un peso.» |
| Sofía | 3 | «Una pista con dos capas, primero busco quién es de plata y luego aplico, son dos lecturas. Rápido si el hilo me pinta las fichas; lento si tengo que subir a mirar.» |
| Familia Ruiz | 4 | «"El zurdo no tocó el candelabro": los niños se van a las fichas a ver quién es el zurdo. Es un minijuego dentro del caso y lo puede hacer el pequeño.» |
| Diego | 5 | «Vocabulario impreso, sin cultura general: si la pista dice "pesado", la ficha dice "pesado". Es la regla que les enseño con las fichas de Andújar y que ninguna cumple. Y "máximo dos atributos activos" es lo que evita que el caso sea una planilla.» |

**Media:** 4,2 · **Dispersión:** σ 0,75, matices: Sofía frena por el ida y vuelta · **¿Se lo contaría a un amigo?** Luis («las fichas sirven para algo») y la familia · **Riesgo de rechazo:** que la ficha esté lejos de la pista en 360 píxeles; el panel condiciona la nota a que tirar del hilo (ficha 34) ilumine también las fichas afectadas. Y el riesgo de siempre: un atributo citado con un sinónimo («latón» en la ficha, «metal» en la pista).

### 3. Presupuesto de texto: pista de una línea, ≤120 palabras

Pista ≤20 palabras, una oración, ≤1 negación; ficha ≤10 palabras más etiquetas; total de pistas ≤120 (n=4), ≤180 (n=5), ≤220 (XL); cabecera ≤45. Un caso que se pasa no se publica aunque cumpla U, SA y NR. Nueve familias de pista con una sola forma canónica cada una; prohibidas la doble negación y la disyunción cruzada de categorías.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 5 | «Ciento veinte palabras son menos que un tuit largo. Es lo único de todo el documento que me hace abrir una tabla a las ocho de la mañana. Y que si se pasa no salga, en vez de "ya lo recortaremos", es lo que la app de 2,3 estrellas no hacía.» |
| Luis | 4 | «Me gusta leer, no me gusta releer. Veinte palabras y una negación es Simenon; "nadie que no fuera zurdo" es la traductora del volumen 1. Solo pido que el presupuesto no me quite la bisagra, esa pista que cruza dos categorías: un caso sin ella es una tabla.» |
| Sofía | 5 | «Menos palabras, menos tiempo, y todo el caso cabe en una captura. Que sea una regla contada y no un consejo es lo que Wordle hace con cinco letras.» |
| Familia Ruiz | 4 | «Seis frases cortas las leo en voz alta sin perder al pequeño en la tercera. Con el libro, a la quinta pista ya estaba mirando el techo.» |
| Diego | 4 | «Para comprensión lectora, veinte palabras y un "no" me va perfecto: es la frase que trabajo. Prohibir la doble negación me quita un ejercicio de sexto, pero acá no es el sitio. Y ciento veinte palabras caben en media carilla, que es lo que necesito.» |

**Media:** 4,4 · **Dispersión:** σ 0,49, consenso: **es la mejor nota del panel junto a dos mecánicas de juego, y no es una mecánica**. Dice lo que las reseñas dicen: el problema del género no es la tabla, es el texto · **¿Se lo contaría a un amigo?** Sofía («cabe en una captura»); es infraestructura, no se cuenta · **Riesgo de rechazo:** ninguno para el jugador. El riesgo es interno: que el presupuesto se relaje «solo para el domingo» y el XL vuelva a ser Vol. 2. Y que un caso corto por presupuesto se sienta «insultantemente simple» para Luis, si el ahorro de palabras se hace bajando profundidad en vez de adjetivos.

### 4. El motivo en el último minuto (segunda fase saltable)

Tras acusar, una pantalla corta con Sabueso: tres motivos, dos pruebas eliminatorias, una respuesta, 60-90 segundos. Fallar no pierde el caso; acertar cierra «el expediente completo». Botón de compartir al lado, nunca detrás. Todos los días.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «Un minuto más después de acusar, con tres opciones y sin castigo. Cuando voy con prisa lo salto; cuando no, cierra mejor. No me cambia si vuelvo el viernes.» |
| Luis | 5 | «"El juez no acepta una acusación sin motivo." Es lo que le falta a la cuadrícula del libro, que termina en "fue X con Y en Z" y un chiste. Y que las dos pruebas descarten y no confirmen es la única forma de que no sea adivinanza.» |
| Sofía | 3 | «Si el botón de compartir está al lado, ni lo veo y no me molesta. Si está detrás, cierro. Es la única condición y ya está escrita, así que 3 y no 2.» |
| Familia Ruiz | 4 | «Tres motivos y dos pistas, sin perder si fallas: los niños se lanzan a decir por qué y da igual. Es el trocito de historia que el pequeño sí sigue. Que los motivos sean de tarta y no de herencia los viernes.» |
| Diego | 4 | «Deducir el motivo con dos pistas es argumentación en un renglón y se imprime como pregunta bonus al pie. Y "las dos pistas son eliminatorias" es una regla de lógica que puedo nombrar.» |

**Media:** 3,8 · **Dispersión:** σ 0,75, matices, casi los mismos que en Escena (3,6) pero Sofía sube un punto porque la condición del compartir ya está escrita · **¿Se lo contaría a un amigo?** Luis · **Riesgo de rechazo:** que un motivo se adivine por estereotipo de personaje («el chef temperamental, claro que fue por orgullo»), que es el riesgo que el propio guionista declara; y que el motivo ya esté entrañado por las pistas principales y la pantalla sea vacía. **El panel prefiere esta variante a la cuarta categoría (ficha 5) seis días de siete.**

### 5. El motivo como cuarta categoría el domingo XL

Solo el domingo, solo con 4 elementos: la tabla pasa de 3 bloques (48 casillas) a 6 bloques (96). Volumen, no un tipo de deducción nuevo. Producto lo combina con el domingo de la conspiración y con 5 elementos (150 casillas), que el techo del diseñador prohíbe.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 1 | «Noventa y seis casillas en mi pantalla. Ni el domingo, que además no juego. Y la versión de producto son ciento cincuenta. No.» |
| Luis | 4 | «El domingo con café, cuatro columnas, motivo incluido: es el expediente completo, el de los días buenos del libro. Con la regla de "grande, no duro" cumplida de verdad, medida: si el domingo es el más difícil de la semana, se me hace largo, no bueno.» |
| Sofía | 2 | «Veinte minutos es un evento y lo juego. Pero seis bloques no son una captura bonita: la cuadrícula compartida de Escena era un plano; esto es una hoja de cálculo.» |
| Familia Ruiz | 2 | «El de diez se pierde en la tercera fila del cuarto bloque. La de trece se lo hace sola y nos deja fuera. Y es el precio de perder las dos plantas. Si el domingo es tabla, que sea la de tres bloques y el motivo en la pantallita de después.» |
| Diego | 3 | «En A4 sí cabe y una tabla de cuatro categorías es contenido de sexto de verdad. En pantalla no la daría. Y solo la de cuatro elementos; la de cinco es una planilla.» |

**Media:** 2,4 · **Dispersión:** σ 1,02; **la peor media del panel** y con un defensor, igual que le pasó al mentiroso en Escena · **¿Se lo contaría a un amigo?** Luis · **Riesgo de rechazo:** el muro con forma de tabla; y la contradicción abierta entre producto (5×5×5 + motivo) y diseñador (nunca). **Variante que el panel quiere:** domingo con 3 bloques (5 elementos, 75 casillas, «ancho») y el motivo como segunda fase; la cuarta categoría, en el archivo y en Premium para Luis.

### 6. Confesión con motivo y «y sin embargo» con arma

Al acertar, un epílogo en la voz del culpable que funde arma, lugar y motivo en una escena; y un último párrafo que reinterpreta un detalle decorativo de la ficha del **objeto**. Solo si se acierta.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «Un párrafo al final que puedo leer o no. Si es corto lo leo. Lo del objeto que "no era suyo" está bien la primera vez; no lo busco.» |
| Luis | 5 | «"Veinte años guardando un cuchillo que nunca fue suyo." Es el epílogo de Christie y es lo que Murdle nunca da: allí el cierre es un chiste sobre la cuadrícula. Que solo lo lea quien acierta es un premio justo. Y que el "y sin embargo" sea sobre el objeto, que en este modo es el protagonista, es acertado.» |
| Sofía | 2 | «Lo salto. Ya está.» |
| Familia Ruiz | 3 | «Yo lo leo en voz alta y a veces se ríen. Pero "fui a buscar el cuchillo" no se lo leo al de diez: el abrecartas era un abrecartas hasta que la confesión lo llamó cuchillo. Que el filtro cozy pase por la confesión igual que por la pista.» |
| Diego | 3 | «Como cierre del PDF de soluciones queda muy bien. Pero el "y sin embargo" que reinterpreta la ficha del objeto confunde a un chico que ya dudaba de si la ficha era pista.» |

**Media:** 3,2 · **Dispersión:** σ 0,98, lector contra jugador, exactamente como en Escena · **¿Se lo contaría a un amigo?** Luis · **Riesgo de rechazo:** el tono. La maqueta del guionista sube de registro justo en la confesión («cuchillo», «riéndose de la misma pieza»), y es la parte que un padre lee en voz alta. Y que el detalle reinterpretado se sienta como *«omisión de pistas»* (Goodreads, Murdle ES).

### 7. Reparto recurrente de 24 con estados

24 personajes con oficio, rasgo visible y secreto canon (reserva de motivos futuros); estados activo → quemado → víctima; el sospechoso de ayer puede ser la víctima de mañana; ningún caso depende de otro; los atributos biográficos nunca entran en una pista.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «Reconocer al chófer que silba boleros me hace gracia y "el marchante del caso 8 ha vuelto" es un vídeo. Pero yo quiero casos, no un álbum. Que alguien sea culpable una vez y no vuelva en meses, bien: en el libro repetían y se notaba.» |
| Luis | 5 | «Es la razón por la que la gente compra el siguiente volumen: *«vas siguiendo una historia»*. El secreto como reserva de motivos es la mejor idea del documento entero: diez casos inocente y al undécimo su secreto es el motivo. Con una condición que no negocio: la biblia no puede contradecirse nunca, porque para mí una contradicción entre casos es una errata más, y ya llevo veinte.» |
| Sofía | 2 | «Me da igual quién silba. No leo la ficha.» |
| Familia Ruiz | 3 | «"¿Este no era el del otro domingo?" pasa y les gusta. Pero jugamos poco y veinticuatro son muchos para reconocerlos. Y "que la víctima sea un personaje querido" nos lo pensaríamos: al pequeño no le mates al apicultor.» |
| Diego | 2 | «Cada clase es una isla, la continuidad no me sirve. Y prometen "nombres pronunciables en toda la región" y luego leo Etxeberria, Odriozola, Umerez, Sertucha, Zabaleta, Uranga, Otazu, Iriarte. En Rosario ninguno se lee a la primera y en clase se pierde un minuto por apellido. Neutro es Prado, Rey, Roca.» |

**Media:** 3,0 · **Dispersión:** σ 1,10, divide por hábito, como el diario en Escena · **¿Se lo contaría a un amigo?** Luis · **Riesgo de rechazo:** dos. Uno ya conocido: la biblia que se contradice. Otro nuevo y concreto: **un tercio del reparto lleva apellidos vascos que incumplen la regla 4 del proyecto** en LatAm y en media España. Se corrige en una tarde; el panel lo señala porque nadie más lo ha hecho.

### 8. El objeto que cuenta la historia y la vitrina de armas

La ficha del objeto lleva, además de la línea de atributo, una segunda línea decorativa de procedencia («del ajuar de boda de los Riomao, el mismo que casi prende fuego en el Expediente 4»); y una vitrina personal con las armas de los casos resueltos.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «"Mi vitrina tiene doce armas" es un post. La segunda línea del objeto no la leo, y si está al lado de la de "de plata", que es la que importa, me estorba.» |
| Luis | 4 | «El candelabro que ya estuvo a punto de arder: eso es universo. Pero la línea de historia no puede confundirse con la de material, que es la que sirve para deducir. Dos tipografías o dos sitios.» |
| Sofía | 3 | «Colección sin ranking. Aunque "vitrina completa" es un logro que se enseña. Tres.» |
| Familia Ruiz | 3 | «Al pequeño le gusta coleccionar cosas, así que la vitrina sí. La línea de historia me la salto en voz alta.» |
| Diego | 2 | «Segunda línea por objeto es más texto en el A4 y una línea que no sirve. En clase la tacho. Y "no muestres casos que ese alumno no resolvió" no aplica en papel.» |

**Media:** 3,0 · **Dispersión:** σ 0,63, consenso tibio · **¿Se lo contaría a un amigo?** Marta (la vitrina) · **Riesgo de rechazo:** mezclar en la ficha del objeto la línea que deduce con la que decora, que es la única forma de convertir «de plata» en ambiguo. Y más texto en el sitio donde ya sobra. **Variante:** la vitrina sí; la segunda línea, solo en la pantalla de resultado, no en la ficha jugable.

### 9. El membrete: informe forense como envoltorio de pista

Una pista se envuelve en un membrete documental fijo («*Informe forense, doctora Recondo:*») y debajo va la pista seca y numerada, palabra por palabra. Catálogo cerrado de 4-5 membretes. El membrete nunca añade información ni insinúa.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «Una línea más encima de la pista. Si es un icono y tres palabras, no molesta; si es un párrafo con firma, es muro.» |
| Luis | 4 | «"Informe forense" y debajo la frase seca: eso es un expediente y no una lista. Y que no pueda añadir nada ("la doctora sospecha que...") es la regla que me deja confiar en el membrete.» |
| Sofía | 2 | «Más líneas entre yo y la pista. Lo escaneo y me molesta.» |
| Familia Ruiz | 4 | «Papá lee "informe forense" con voz de médico. Es teatro gratis, y el pequeño pide la "nota de recepción".» |
| Diego | 4 | «Tipos de texto: informe, nota, apunte de agenda. Es contenido de lengua y se imprime. Que sean cuatro fijos y se repitan para que los reconozcan.» |

**Media:** 3,4 · **Dispersión:** σ 0,80 · **¿Se lo contaría a un amigo?** La familia · **Riesgo de rechazo:** que el membrete crezca (una firma, un cargo, una fecha) y se convierta en la línea que Marta lee dos veces; y que un membrete distinto por pista parezca una pista distinta por tipo. Con 4-5 fijos y de una línea, es tono barato.

### 10. La coartada cruzada

Dos sospechosos se dan coartada mutua y **los dos dicen la verdad**: la pista fija el par de lugares para el par de personas sin decir quién en cuál; uno de los dos lugares es el del cuerpo, así que romper el empate es nombrar al culpable. Sábado. Propiedad CC verificada por el motor.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 2 | «"Estuvieron uno en subastas y otro en el archivo, sin decir quién" es una pista que leo dos veces por definición, y me rompe la regla que me habían prometido: una pista, una lectura. Además es sábado y no juego.» |
| Luis | 5 | «Una declaración verdadera que te condena: es el escalofrío del mentiroso sin la injusticia del mentiroso. Es lo mejor que le puede pasar a un lector de Murdle que se dejó el volumen 1 en el acertijo con mentiroso. Y CC4, "la coartada contiene al culpable", es la garantía de que no es contabilidad.» |
| Sofía | 4 | «Es dificultad medida, la misma para todos, y "la coartada los colocó a los dos" es una frase de grupo. Con una condición de interfaz: que al tocar la pista se pinten las cuatro casillas, porque si no la leo tres veces como Marta.» |
| Familia Ruiz | 2 | «"Dos que se dan coartada": el de diez pregunta "¿entonces cuál miente?" y no miente nadie, y ahí se lía. Es una pista con dos ramas y el sofá no lleva bien las ramas.» |
| Diego | 3 | «Razonamiento por casos acotado: dos ramas y una muere en tres pasos. Sexto, y se imprime. Pero "careo" y "coartada" hay que explicarlos, y en tercero no.» |

**Media:** 3,2 · **Dispersión:** σ 1,17, divide por gusto, no por canal: dos 2 y un 5 · **¿Se lo contaría a un amigo?** Luis y Sofía · **Riesgo de rechazo:** es la única mecánica del diseñador que **contradice literalmente su propia tesis** («ninguna pista se lee dos veces»): una disyunción es dos lecturas por construcción. El panel la acepta en sábado y solo si el hilo pinta las cuatro casillas y la cabecera dice «los dos dicen la verdad» en esas palabras.

### 11. La cadena de custodia

Cabecera: «dos de ellos se cambiaron lo que llevaban; el arma es lo que el culpable tenía al final». Un intercambio, no traspasos sueltos. El portador anterior del arma nunca es el culpable (CT2). Especial mensual, siempre n=4.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 2 | «Antes y después en una tabla con el móvil en una mano es la doble franja de Escena otra vez, y ya le puse un 3. Aquí, con un control de "quién se cambió con quién" encima de los bloques, 2.» |
| Luis | 5 | «El arma en las manos equivocadas, y la organista que se pasa el caso pareciendo culpable porque la batuta es suya y no lo es: eso es un giro de Christie, no una casilla. Y CT2 escrito como condición es la garantía de que el giro existe siempre.» |
| Sofía | 3 | «Tres o cuatro minutos más. Como especial mensual, vale, y "el arma no era suya" se comparte. Como regla del día, no.» |
| Familia Ruiz | 3 | «"Se cambiaron las cosas" se explica en cinco palabras, sí. El control de dos huecos en la tableta con tres manos, ya veremos.» |
| Diego | 3 | «Secuencia temporal sobre propiedad: sexto. En papel es una columna más y "llegó con / se marchó con" se entiende acá. Una vez al mes.» |

**Media:** 3,2 · **Dispersión:** σ 0,98, un 5 rotundo y el resto en 2-3 · **¿Se lo contaría a un amigo?** Luis y Sofía · **Riesgo de rechazo:** la interfaz del intercambio en 360 píxeles, que es donde la doble franja ya asustaba; y que el jugador sienta que hay dos tablas. El panel la quiere como especial mensual y nunca como regla de semana.

### 12. El objeto perdido

Cabecera: «cinco objetos, cuatro personas: uno se quedó sin dueño». La categoría de objetos tiene n+1 valores; hay que demostrar cuál queda huérfano. Viernes. Variante simétrica: n+1 sospechosos y uno que no estuvo («uno se quedó en el recreo»).

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «"Cinco objetos, cuatro personas" se entiende en la cabecera y no hay tutorial. Una fila más en un bloque no me asusta; y un objeto que nadie tiene es un misterio que se ve.» |
| Luis | 4 | «El objeto de la víctima es un regalo narrativo. Pero que "el único que queda" deje de funcionar en esa dirección hay que decirlo en la cabecera, o el primer viernes pensaré que es una errata y yo con las erratas ya no negocio.» |
| Sofía | 4 | «"El viernes es de objeto" es una regla de una frase. Y se compara: todos con el mismo hueco.» |
| Familia Ruiz | 5 | «"Uno se quedó en el recreo" lo pidió el pequeño en cuanto lo leí. Y la versión de una persona de más, alguien que no estuvo en la casa, es el mejor viernes que le puedo poner sin muerto.» |
| Diego | 5 | «La anomalía se explica sin tutorial y es un problema de conteo de tercer grado: cinco cosas, cuatro dueños. Es la única mecánica estructural que puedo dar en primaria baja tal cual.» |

**Media:** 4,4 · **Dispersión:** σ 0,49, consenso: **la mecánica estructural mejor puntuada** · **¿Se lo contaría a un amigo?** Sofía, la familia y Diego · **Riesgo de rechazo:** que el hueco «se descubra en silencio» (OP1 lo prohíbe) y que la fila de más rompa la lectura «un ✓ tacha fila y columna» sin que la cabecera lo diga. Barata, corta, imprimible, sin muro: es el «rastro del objeto» de este panel.

### 13. La tabla del comisario

El cuaderno llega con un tercio de marcas puestas por el comisario Bermejo; **una está mal**, las demás son ciertas y deducibles. Tocarla dos veces la rechaza. Todas las pistas son verdaderas siempre. Jueves y landings.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 5 | «Un cuaderno medio lleno no asusta, y "una marca del comisario está mal" es un juego que entiendo en una frase y que se ve en una captura. Es lo primero que grabaría de Expediente y el único jueves que me hace olvidar que me han cambiado el juego.» |
| Luis | 3 | «Contradecir a la autoridad me gusta. Pero una marca falsa en la tabla es un mentiroso con otro nombre, y yo vengo de ahí. Si la refutación es de dos pistas y corta, como prometen, 4; el día que una marca me haga dudar de las pistas y no de la marca, 1. Que me lo prueben.» |
| Sofía | 4 | «"La pillé en el minuto dos" es un momento con frase. Y no hay tutorial: la cabecera lo dice todo. Solo que la marca del comisario se distinga de la mía sin que tenga que aprender colores.» |
| Familia Ruiz | 4 | «"El comisario se equivocó" es lo que los niños adoran: corregir al adulto. La de trece fue a buscar la marca falsa antes de leer las pistas, y la encontró. Es el jueves que sí jugaríamos si jugáramos jueves.» |
| Diego | 5 | «En papel es la ficha con marcas del profe y una mal: la actividad de revisión crítica que no tenía. "Justificá por qué esa marca está mal" es rúbrica, y se imprime igual que la vacía.» |

**Media:** 4,2 · **Dispersión:** σ 0,75; Luis es el freno, por la misma herida de siempre · **¿Se lo contaría a un amigo?** Sí, 4 de 5: Marta («el comisario se ha equivocado»), Sofía, la familia y Diego · **Riesgo de rechazo:** MT2 (todas las demás marcas ciertas) es lo que la separa del mentiroso; una sola marca «probablemente cierta» y Luis se va. Y en frontend, confundir marca del comisario con marca propia. **Es el jueves que el panel pide para la arquitectura ganadora.**

### 14. El expediente invertido

Se sabe quién fue; el cuaderno llega resuelto; nueve pistas, cuatro verdaderas que no prueban nada; hay que marcar las tres que demuestran la culpabilidad. Sobrar una es fallar. Archivo, Pack Aula, Premium; nunca caso del día.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 2 | «Un examen de lógica con la solución a la vista. Lo probaría una vez, como en Escena, y volvería al normal.» |
| Luis | 5 | «Colombo, y aquí mejor que en el plano, porque la prueba mínima se lee como una historia: el cepillo es de plata, quien estaba en el archivo llevaba plata, Nicanor no tocó el cepillo. Es un párrafo, no una lista de coordenadas. Y con la contraprueba de cada día, no necesito que me lo expliquen.» |
| Sofía | 3 | «Es corto y distinto, así que lo juego. Con la contraprueba diaria ya sé lo que me piden. Pero "sobrarte una pista es fallar" sigue siendo la regla escondida que me explican después de perder.» |
| Familia Ruiz | 2 | «Ya saben quién fue. "¿Y entonces para qué jugamos?", dijo la de trece en Escena, y lo repite.» |
| Diego | 5 | «Argumentación pura: señalá las tres pistas que no dejan escapatoria y justificalo. Se evalúa con rúbrica y se imprime en una carilla. Las cuatro pistas verdaderas que no sirven son el ejercicio más rico del documento: distinguir dato de prueba.» |

**Media:** 3,4 · **Dispersión:** σ 1,36, **la más polarizante del panel** (empatada con Junior), con el mismo dibujo que en Escena: dos cincos, dos doses · **¿Se lo contaría a un amigo?** Luis y Diego · **Riesgo de rechazo:** dos pruebas mínimas distintas, que es *«varias soluciones y solo aceptan una»* con otro nombre; y que las «pistas verdaderas que no prueban nada» rompan la promesa de marca «ninguna pista sobra» si el jugador no entiende que es otro formato. Nunca caso del día: el panel lo confirma.

### 15. El vis a vis / interrogatorio de ficha

Abre con dos pistas (diseñador) o tres (producto) y cuatro fichas: preguntas abiertas cuestan 2 («¿dónde estabas?»), cerradas 1 («¿estuviste en el archivo?»). Menú vivo filtrado por el motor: cualquier pregunta ofrecida cierra el caso. Cada respuesta tacha casillas delante del jugador. Miércoles (diseñador) o jueves (producto).

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 5 | «Abre con dos pistas. Dos. Eso me mata la pared, que era lo que me impedía abrir una tabla. Y ver la tabla tacharse por algo que pregunté yo es lo que grabaría: nueve casillas de golpe. Lo de las fichas de 1 y 2 me lo tienen que decir en una línea encima del menú, no en un tutorial.» |
| Luis | 5 | «El interrogatorio nació aquí. En el plano tenía que justificar por qué un sospechoso contesta sobre habitaciones; aquí un detective pregunta dónde estabas y qué llevabas, que es lo que hace Maigret. Las respuestas con voz, fuera de las pistas numeradas: bien. Y si cualquier combinación cierra, es justo; si un día pregunto "mal", me habrán mentido.» |
| Sofía | 4 | «"Lo cerré con dos abiertas" contra "con cuatro cerradas" es estrategia, y se compara. Lo que no quiero es que el día del vis a vis tarde el doble; y la regla del coste es una cosa más que explicar, así que cabecera de una línea o me la salto y pierdo.» |
| Familia Ruiz | 4 | «Cuatro fichas, tres personas: se reparten solas. El pequeño hace la cerrada, la mayor la abierta, yo decido la última. Es lo mismo que en Escena, pero aquí se ve mejor porque la tabla se tacha.» |
| Diego | 3 | «No se imprime: cada alumno preguntaría distinto y no puedo corregir 28 caminos. En el proyector con la clase votando la pregunta, es la mejor clase del año.» |

**Media:** 4,2 · **Dispersión:** σ 0,75, el único freno es el aula · **¿Se lo contaría a un amigo?** Sí, 4 de 5: Marta («la tabla se tacha sola cuando preguntas»), Luis, Sofía («con dos abiertas»), la familia · **Riesgo de rechazo:** el mismo de Escena, multiplicado: si la propiedad MV-E no se cumple una sola vez («pregunté mal»), la mecánica no existe. Y una nueva: el coste asimétrico es una regla más, y Sofía la salta. **Variante que el panel quiere:** la del diseñador (cuatro fichas, coste 2/1) porque tiene decisión; la de producto (tres preguntas iguales) la aceptan como repliegue.

### 16. La doble víctima

Diseñador: un hecho grave y un hurto en dos sitios; los dos culpables se definen por caminos distintos (lugar y objeto) y la pregunta final es si fue una persona o dos; nunca dos fallecidos. Guionista: «esa noche hubo dos disparos, no uno»: dos muertes, dos escenas, dos armas. Especial mensual.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 2 | «Dos nombres, "y pueden ser el mismo", es la frase que leo tres veces. Y una acusación con dos huecos es una pantalla nueva.» |
| Luis | 4 | «El suspense de cuántos nombres hay que escribir es literatura de verdad, y DV2, que las dos lecturas sigan vivas hasta el último paso, es una promesa que ningún libro puede hacer. Lo que no quiero es la versión de "dos disparos": yo leo novela negra, pero esto es un juego de tarde y "cozy" era la palabra.» |
| Sofía | 3 | «Como especial mensual, vale; "eran dos" es una frase. Pero que la interfaz sepa decir "es la misma persona" sin que parezca un error.» |
| Familia Ruiz | 2 | «"Dos disparos" no, y no hace falta que explique por qué. La de un golpe y un robo, con dos acusaciones, tampoco: el de diez no llega a dos preguntas a la vez.» |
| Diego | 3 | «Dos hurtos en la versión escolar sí me interesa: "¿fue el mismo el que se llevó la tiza y el que abrió el armario?". Pero la ambigüedad sobre el número de responsables es secundaria frente a lo demás.» |

**Media:** 2,8 · **Dispersión:** σ 0,75 · **¿Se lo contaría a un amigo?** Luis y Sofía · **Riesgo de rechazo:** la variante del guionista incumple la regla 5 del proyecto tal cual está escrita (dos fallecidos, disparos). **El panel descarta esa variante y acepta la del diseñador solo como especial.** Riesgo de interfaz: una acusación de dos nombres que «pueden ser el mismo» necesita un diseño que hoy no existe.

### 17. El pasillo: los lugares tienen orden

Los lugares se imprimen en una tira ordenada con origen declarado («desde la entrada: el zaguán, la sala de lectura, la galería, el jardín»), y eso permite «más lejos de la entrada que», «entre A y B», «justo antes de». Máximo una pista que cruce dos órdenes por caso, nunca antes del miércoles.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «La tira con "desde la entrada" es casi un plano y me gusta: es lo que reconozco. Pero "la más alta estaba más lejos del jardín que la bibliotecaria" cruza dos órdenes y la leo tres veces. La regla de una sola por caso me salva; sin ella, 1.» |
| Luis | 4 | «El placer ordinal, acotar por los dos lados. "Entre" estricto y el origen rotulado son las dos cosas que en el libro faltaban y que hacían que "al lado de" fuera una lotería.» |
| Sofía | 4 | «Es Queens con una tira: rápido, si el hilo me pinta el tramo y no la casilla.» |
| Familia Ruiz | 3 | «"Más lejos de la entrada" se entiende leyéndolo. "De más alta a más baja" cruzado con los sitios, ya no: ahí el pequeño se baja.» |
| Diego | 4 | «Ordinales: mayor, menor, antes, después, entre. Contenido de cuarto, y la tira se imprime en un renglón. Que "más lejos de" tenga una sola forma y no aparezca "más adentro".» |

**Media:** 3,6 · **Dispersión:** σ 0,49, consenso moderado · **¿Se lo contaría a un amigo?** Luis · **Riesgo de rechazo:** la pista que cruza dos órdenes. ORD3 la limita a una; el panel pide que además **nunca sea la primera pista del caso** y que la tira se dibuje siempre, también en el PDF.

### 18. La contraprueba

Al acusar y acertar, 40 segundos: el juego ilumina una casilla y pregunta «¿con qué lo demuestras?»; el jugador toca las dos o tres pistas que la prueban. Acertar da «expediente probado» y acredita la técnica; fallar no quita nada. Se ofrece solo si la celda tiene un soporte mínimo único.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «Cuarenta segundos después de acusar. Si es opcional y el compartir está al lado, lo hago cuando no voy con prisa. "Con esas tres bastaba, la de Tino no hacía falta" es amable, no me riñe.» |
| Luis | 5 | «Es el porqué. Convierte "acerté" en "sabía por qué", que es lo que las *«explicaciones escuetas»* del libro nunca me dieron. Y me entrena para el invertido sin que me lo expliquen. Si solo se construyera una cosa de las doce, yo también elegiría esta.» |
| Sofía | 4 | «"Expediente probado" es una etiqueta que se enseña y sube el escalafón: cuarenta segundos que rentan. Lo hago. Pero solo si el botón de compartir sigue estando ahí mientras tanto.» |
| Familia Ruiz | 4 | «"¿Con qué lo demuestras?" es lo que yo les pregunto a los niños desde el primer domingo. Ahora lo pregunta el juego y a mí me deja escuchar.» |
| Diego | 5 | «Es la rúbrica hecha botón: señalá las pistas que prueban esa casilla. Y se imprime como pregunta al pie: "¿qué pistas demuestran que Casilda estaba en el archivo?". Es la mejor traducción de "resolver sin adivinar" a una actividad evaluable.» |

**Media:** 4,2 · **Dispersión:** σ 0,75, Marta es el único freno y es de tiempo, no de gusto · **¿Se lo contaría a un amigo?** Sofía («expediente probado») y Diego (a colegas) · **Riesgo de rechazo:** casi ninguno si es opcional por caso (CP2) y no bloquea el compartir. El riesgo es que se sienta examen si un día aparece obligatoria o si «fallarla» deja huella en el compartido.

### 19. La rueda de reconocimiento

Un testigo que no es sospechoso describe a alguien por atributos, nunca por nombre («la que subió a la galería era de las bajitas y no llevaba gafas»); la conjunción tiene exactamente un portador en las fichas; 2-3 atributos; una por caso.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 5 | «Miro las fichas, tacho caras, y no leo dos veces. Es la más visual de todas las de este modo y la única que haría captura: cuatro retratos y "de las bajitas, sin gafas".» |
| Luis | 4 | «La portera que describe a quien subió es Simenon. Y con portador único garantizado no hay la doble lectura de "vi a alguien alto", que en el libro te dejaba con dos zurdos y una duda.» |
| Sofía | 4 | «Cruzar dos atributos es rápido y tiene un "ajá" limpio. Sin tutorial: la frase se explica sola.» |
| Familia Ruiz | 5 | «El pequeño busca quién es "alto con gafas" en las fichas: es su parte del caso, y la hace solo. Es lo más parecido a las cartas del Cluedo que hay en la lista.» |
| Diego | 4 | «Descripción, identificación, aplicación: comprensión lectora en dos pasos y se imprime. Que las fichas lleven el atributo escrito y no solo dibujado, para el papel en blanco y negro.» |

**Media:** 4,4 · **Dispersión:** σ 0,49, consenso: **empata en cabeza con el objeto perdido y el presupuesto de texto** · **¿Se lo contaría a un amigo?** Marta (la captura) y la familia · **Riesgo de rechazo:** casi ninguno. RR1 (portador único comprobado contra las fichas) es lo que la salva de ser un existencial con dos lecturas; y el retrato tiene que leerse en blanco y negro.

### 20. El reparto: dos plantas sin cuarta categoría

Los lugares llevan un atributo que los parte en dos (arriba/abajo, dentro/fuera) y las pistas cuentan: «exactamente dos de ellos estaban arriba». «Dos» siempre significa exactamente dos. Cero casillas nuevas.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «"Dos de ellos estaban arriba" y que "dos" sea exactamente dos: si me lo dicen en la cabecera, bien; si lo tengo que recordar de otro día, me equivoco y pienso que el caso está mal.» |
| Luis | 4 | «El casillero: saber cuántos caben sin saber quiénes. Y "exactamente" como convención es una regla que agradezco después de un libro donde "dos" a veces era "al menos dos".» |
| Sofía | 4 | «Es la regla de Tango: contar. Rápido y se ve.» |
| Familia Ruiz | 4 | «La escalera de dos plantas sin dibujarla: "arriba" y "abajo" lo entienden los dos. Es lo que más se parece a nuestro domingo sin ser nuestro domingo.» |
| Diego | 5 | «Recuento exacto y partición: matemática de tercero. Y evitar "al menos" me quita un problema que en Rosario también se lee de dos maneras.» |

**Media:** 4,0 · **Dispersión:** σ 0,63, consenso · **¿Se lo contaría a un amigo?** Diego (a colegas) · **Riesgo de rechazo:** que «exactamente» viva en un tutorial y no en la cabecera de cada caso que lo usa. El panel lo pide como frase fija de cabecera, siempre.

### 21. La reconstrucción de la rejilla con el salto entre bloques

Al acusar, las casillas se encienden en el orden del certificado y la animación **marca el instante en que una deducción salta de un bloque a otro**; «Paso a paso» quieto con el nombre de la técnica al lado.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «Es el vídeo de "solución caso N" pero de mi caso y dentro del juego. Y el salto entre bloques es justo donde yo me perdería la primera semana: ver que de "Casilda tiene el cepillo" se pasa a "Casilda en el archivo" por otro bloque.» |
| Luis | 4 | «Prefiero el paso a paso quieto con el nombre de la técnica, y que esté al lado. La animación la veo la primera semana; después quiero el texto.» |
| Sofía | 3 | «Veinticinco segundos entre acusar y compartir. Que se acuerde de que la salto.» |
| Familia Ruiz | 5 | «Las casillas se encienden en orden y el de diez ve el salto. Es lo que yo no sabía explicar con el dedo: por qué de un bloque se pasa al otro. Es el mejor momento del domingo, si hay tabla el domingo.» |
| Diego | 4 | «El salto entre bloques es la explicación que ningún libro da y que mis alumnos buscan en YouTube. En el proyector. Y que el PDF lleve la misma cadena en texto, con el nombre del salto.» |

**Media:** 4,0 · **Dispersión:** σ 0,63 · **¿Se lo contaría a un amigo?** La familia y Marta («te lo reconstruye como una peli») · **Riesgo de rechazo:** el peaje para Sofía (se salta y se recuerda); y que la animación sobre 96 casillas dure más de lo que dice. Producto tiene razón en que es la traducción de la tesis de diferenciación: el panel la confirma.

### 22. El domingo de la conspiración

Los culpables de los seis casos de la semana son los sospechosos del XL del domingo, en un solo escenario, con motivo. Razón narrativa, no punitiva: quien no jugó la semana lo resuelve igual.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 2 | «Si no jugué el martes ni el miércoles no reconozco a nadie, y me venden que es "la semana" cuando yo entré el jueves. Y no juego domingos.» |
| Luis | 5 | «La semana con final. Los seis culpables sentados en la misma mesa: es lo que convierte siete casos en una temporada y lo que hace de Murdle una serie y no un cuaderno. Que la lógica no dependa de haber jugado, sí; pero el que jugó lo disfruta el doble.» |
| Sofía | 3 | «"El domingo se juntan los culpables" es frase de grupo. Pero si no cambia la lógica es decorado, y si la cambiara no sería el mismo caso para todos. Tres.» |
| Familia Ruiz | 2 | «Nosotros no jugamos la semana: son seis desconocidos. Y es el mismo domingo que nos quita las dos plantas.» |
| Diego | 2 | «Cada clase es una isla y no me sirve. Y el XL de cinco más motivo no me cabe ni en la hoja.» |

**Media:** 2,8 · **Dispersión:** σ 1,17, divide por hábito, exactamente como el arco semanal en Escena (3,0) · **¿Se lo contaría a un amigo?** Luis y Sofía · **Riesgo de rechazo:** para quien juega solo el domingo (la familia, el 100 % de su uso) el «premio» es invisible y el coste (96 casillas) es real. La evidencia de murdle.com es buena; el panel avisa de que allí el domingo no compite con una casa de dos plantas que la familia ya adora.

### 23. El villano que deja un arma firma

Un ladrón recurrente deja siempre el mismo objeto secundario (un naipe), mencionado solo en el informe de cierre; nunca pista ni ficha.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «"El Cascabel ha vuelto" es TikTok. Pero yo no juego todos los días; si es texto de cierre y no me pide nada, vale.» |
| Luis | 4 | «El naipe entre las cajas es folletín, y me gusta el folletín. Pero fuera de las pistas, siempre.» |
| Sofía | 2 | «Texto de cierre que salto.» |
| Familia Ruiz | 3 | «Al pequeño le gustaría un ladrón con nombre. Pero un domingo al mes no lo seguimos.» |
| Diego | 2 | «No sirve en clase.» |

**Media:** 2,8 · **Dispersión:** σ 0,75 · **¿Se lo contaría a un amigo?** Luis · **Riesgo de rechazo:** ninguno de juego (es una frase), uno de disciplina: que la firma «se cuele» en una ficha. Barata; el panel no la pide pero no la vetaría.

### 24. La rejilla a dos manos: hoja A / hoja B

Dos personas, dos juegos de pistas, una rejilla; ninguna puede cerrarla sola. En papel cuesta cero; en digital, 3-4 días más backend, solo si pasa la prueba en papel.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 2 | «Juego sola en el metro. Lo mismo que dije en Escena.» |
| Luis | 3 | «Con mi mujer en el sofá, cada uno con su hoja: en tabla se reparte mejor que en plano, porque las pistas de objeto y las de lugar se separan solas. Un sábado al mes.» |
| Sofía | 3 | «Fricción en vivo. Con mi hermana por la novedad.» |
| Familia Ruiz | 5 | «Es lo que ya hacemos, pero de verdad: la mayor tiene pistas que yo no tengo y me las explica. Y en la tabla se ve quién ha tachado qué.» |
| Diego | 5 | «Hoja A y hoja B en papel, coste cero: es la actividad en parejas del año. Y en tabla se reparte mejor que en plano: uno lleva los objetos, otro los lugares, y los dos tienen que hablar para cruzar. Que el reparto lo garantice el motor es lo que Andújar no me da.» |

**Media:** 3,6 · **Dispersión:** σ 1,20, divide por forma de vida, como en Escena · **¿Se lo contaría a un amigo?** La familia y Diego, con entusiasmo · **Riesgo de rechazo:** que uno resuelva el 80 % y el otro mire; y la versión digital antes de tiempo. El panel repite lo que dijo en Escena: **papel primero**, y aquí con más razón porque la hoja A y la hoja B son dos columnas de la misma carilla.

### 25. Guardar, restaurar y vaciar la rejilla

Tres botones: guardo el estado, pruebo una hipótesis, vuelvo. Anotación, no comprobaciones ni vidas. Medio día.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «Es *«equivocaros todo lo que queráis sin ensuciar la página»* en un botón. Yo lo hago con deshacer, pero en un toque es mejor.» |
| Luis | 5 | «*«Hay que hacerlo a lápiz sí o sí para probar posibilidades»*: esto es eso, sin lápiz. Medio día de trabajo y es lo primero que echaría en falta el primer sábado. No entiendo que no estuviera ya.» |
| Sofía | 3 | «Yo no pruebo hipótesis, deduzco. No molesta.» |
| Familia Ruiz | 4 | «Guardar antes de que el pequeño toque. Sí.» |
| Diego | 3 | «En papel es la goma. En tableta con sexto, útil; no cambia la actividad.» |

**Media:** 3,8 · **Dispersión:** σ 0,75 · **¿Se lo contaría a un amigo?** Nadie: es interfaz · **Riesgo de rechazo:** ninguno. Fruta madura, como dice producto; el panel solo añade que el «vaciar» pida confirmación, porque en el sofá alguien lo pulsa sin querer.

### 26. El expediente de una página imprimible

Un A4 por caso: sospechosos, lugares, objetos, rejilla en blanco, pistas, y la solución razonada al dorso. Sin ilustración. Gratis para el caso del día; en pack para los demás.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 2 | «Yo no imprimo. Mi madre sí, y se lo regalaría. Para mí, 2.» |
| Luis | 4 | «El libro sin erratas, en A4, con la solución razonada detrás. Me lo imprimo para el tren, que en el sillón ya tengo el móvil.» |
| Sofía | 2 | «No imprimo.» |
| Familia Ruiz | 4 | «La abuela, que está lejos y tiene el libro, lo imprime y jugamos el mismo caso a distancia. Y el domingo de lluvia, en la mesa, sin pantalla.» |
| Diego | 5 | «Es exactamente lo que piratean en Rosario, pero legal, en una carilla y con la solución razonada, que el kit pirata no trae. El jueves sale, el domingo lo imprimo, el lunes lo doy. Es el motivo por el que Expediente existe para mí.» |

**Media:** 3,4 · **Dispersión:** σ 1,20, divide por canal: quien imprime le da 4-5, quien no, 2 · **¿Se lo contaría a un amigo?** Diego (a todo el claustro) y la familia (a la abuela) · **Riesgo de rechazo:** ninguno para el jugador; el riesgo es de negocio (el caso del día gratis en PDF y el pack de pago tienen que distinguirse). El panel apoya la decisión 3 de producto: **Expediente es el formato de papel.**

### 27. Expediente Junior

Rejilla 3×3×3 sin víctima («quién se llevó qué del armario del cole»), dentro de la sección infantil; la variante «uno se quedó en el recreo» (n+1 sospechosos) del diseñador.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «No tengo niños. Pero un 3×3×3 sin muerto es el vistazo que yo jugaría en el andén, así que 3.» |
| Luis | 2 | «No es para mí y que no cuente para nada.» |
| Sofía | 2 | «No.» |
| Familia Ruiz | 5 | «El de diez tiene su tabla mientras la mayor y yo hacemos la grande, y es *su* caso: el armario del cole, el recreo. Es lo que Murdle Junior le dio y aquí sin muerto.» |
| Diego | 5 | «Sin convención espacial es mejor que el plano para tercero y cuarto, que es justo lo que dice producto y lo que veo en clase: "a la izquierda de" falla, "quién tenía qué" no. Y "uno se quedó en el recreo" es el objeto perdido para chicos.» |

**Media:** 3,4 · **Dispersión:** σ 1,36, **empatada como la más polarizante**, pero polariza por canal, no por gusto: nadie lo rechaza, dos no lo necesitan · **¿Se lo contaría a un amigo?** La familia y Diego · **Riesgo de rechazo:** que el generador 3×3×3 produzca pocos casos distintos (aviso del diseñador) y el aula se lo acabe en un mes.

### 28. Tú eres sospechoso, en rejilla

Especial mensual en segunda persona: el nombre del jugador es una fila y tiene que demostrar dónde estuvo y qué llevaba. Nunca culpable en la sección familiar.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «"Hoy la sospechosa era yo" sigue siendo un vídeo, y tachar mis propias casillas es mejor que buscarme en un plano.» |
| Luis | 3 | «Truco de novela juvenil. Tiene gracia una vez al mes.» |
| Sofía | 3 | «"Me han acusado a mí" se comparte. Como especial.» |
| Familia Ruiz | 4 | «"¡Yo soy el chófer!" Nunca culpable, y menos el de diez.» |
| Diego | 4 | «Cada alumno una fila: se imprime cambiando un nombre. Que "vos" y "tú" no rompan la concordancia de las pistas; ya lo dije en Escena.» |

**Media:** 3,6 · **Dispersión:** σ 0,49, consenso: igual que en Escena · **¿Se lo contaría a un amigo?** Marta, la familia y Diego · **Riesgo de rechazo:** la concordancia tuteo/voseo; y que el «tú» aparezca dentro de una pista numerada, que es donde el guionista dice que sí irá («las pistas que lo mencionen»), y donde la voz estaba prohibida. El panel pide que las pistas sobre «tú» usen la tercera persona con el nombre y la segunda solo en la ficha.

### 29. Casos de época

Mismo formato ambientado en una época reconocible (el expreso de 1923), con oficios y objetos propios; reservado sobre todo al domingo. Riesgo de anacronismo y de rozar hechos reales.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «El tren de 1920 es estética de TikTok y está bonito. Pero "telegrafista" y "viajante de comercio" son palabras que no uso; si la ficha lo explica en cinco palabras, bien.» |
| Luis | 5 | «El expreso, el barón, el vagón restaurante. Es Christie y es mi domingo. Con cuidado de no tocar nada real: lo dice el proyecto y lo suscribo.» |
| Sofía | 2 | «Decorado. No cambia el puzzle ni mi tiempo.» |
| Familia Ruiz | 3 | «A la de trece le gusta. El de diez no sabe qué es un telegrafista y yo se lo explico, que tampoco está mal.» |
| Diego | 3 | «Vocabulario de época es potente para sexto. Pero anacronismos y "hechos reales" en clase me preocupan, y el vocabulario de 1923 no es neutro por definición.» |

**Media:** 3,2 · **Dispersión:** σ 0,98 · **¿Se lo contaría a un amigo?** Luis · **Riesgo de rechazo:** el vocabulario. Un oficio de época es un atributo que no está impreso «con la misma palabra» en la cabeza de Marta; la ficha tiene que explicarlo. Y el coste de supervisión que el propio guionista declara.

### 30. Humor de viernes con armas absurdas

El viernes de disparate aplicado al objeto: «una tarta de manzana de tres capas, todavía tibia cuando alguien decidió que era mejor arma que postre». Nadie muere. El chiste nunca en la pista.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «La tarta como arma es el caso que grabaría. El viernes es de risa y en Expediente el objeto es el chiste: mejor que en el plano.» |
| Luis | 2 | «Un loro con cuadrícula. Lo juego porque es viernes; es el día que menos espero. Y que no se le pegue al humor de cierre de todos los días.» |
| Sofía | 4 | «"El viernes es de risa" ya se dice en mi grupo por Escena. Que sea el mismo viernes en los dos modos.» |
| Familia Ruiz | 5 | «Un caso sin muerto con una tarta ofendida es el que juego con el pequeño sin filtrar nada. Que el objeto perdido sea el viernes y sea una tarta: perfecto.» |
| Diego | 4 | «Una tarta como arma se entiende en cualquier país; "un mimo que no habla", también. Que el chiste no dependa de un modismo y no entre en la pista.» |

**Media:** 3,8 · **Dispersión:** σ 0,98, cuatro a favor y uno en contra por tono, igual que en Escena · **¿Se lo contaría a un amigo?** Sí, 4 de 5 · **Riesgo de rechazo:** humor que no viaja y chiste que contamina la pista. Lo nuevo aquí: el objeto absurdo lleva atributo («de manzana», «tibia»), y un atributo gracioso es un atributo que Marta lee dos veces. Etiquetas secas, chiste en la sinopsis.

### 31. El escalafón de Expediente

Diseñador: 14 técnicas de tabla, 10 inexistentes en Escena (el cruce de tablas, la pareja atada, la cuenta del hueco, el puente de tiempo...), que suben el rango global a 24. Producto: 8-10 técnicas, **un solo cuaderno con dos apartados y un solo rango calculado sobre el apartado más avanzado**; jugar los dos da una insignia de doble especialidad, no un rango mayor.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 3 | «"Cruce de tablas" y "pareja atada" son jerga. Y veinticuatro técnicas me abruman: yo quería subir de rango sin que me castiguen por saltarme días, no hacer un máster. Un solo rango sobre lo que mejor hago me parece justo; que la segunda colección no me la enseñen hasta el primer jueves.» |
| Luis | 4 | «Que me nombren "el cruce en negativo" es la explicación que el libro no da. Veinticuatro me motivan: son veinticuatro cosas que ahora sé que sé. Con la frase honesta: "este caso exigía", no "has usado".» |
| Sofía | 5 | «"Doble especialidad" es una insignia que se enseña, y "he subido a inspector en tabla" es otra frase. Que el rango no baje. Veinticuatro me motivan porque son veinticuatro cosas que decir en el grupo.» |
| Familia Ruiz | 4 | «La de trece va a por la doble insignia y ya me lo ha dicho. El pequeño no sigue el escalafón, sigue al perro. Un rango, dos insignias: bien.» |
| Diego | 5 | «Catorce técnicas de tabla son catorce ítems de rúbrica: "el reparto", "la cuenta del hueco" son objetivos de aprendizaje que escribo en la planificación. "Pareja atada" hay que renombrarla; viene del sudoku y a los chicos les suena a otra cosa.» |

**Media:** 4,2 · **Dispersión:** σ 0,75; Marta es la única que dice «abruma» · **¿Se lo contaría a un amigo?** Sofía, Diego y la familia · **Riesgo de rechazo:** la jerga; los dos nombres que el diseñador ya teme son los dos que Marta y Diego rechazan. **El panel toma la regla de producto (un solo rango sobre el mejor apartado) como obligatoria**: sin ella, Marta lee 24 como una deuda.

### 32. El lunes corto: sobres por casillas ✓ y coartada confirmada

El caso abre con pocas pistas y las demás se liberan por casillas confirmadas (no por toques); y el cuaderno arranca con marcas del comisario ya puestas y correctas, que no cuentan como pista.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «Empieza con dos marcas puestas y tres pistas: es el único lunes que abriría una tabla. Sin regañina, por avanzar, como pedí en Escena.» |
| Luis | 3 | «Leo todo primero y los sobres me quitan la vista de conjunto. Las marcas del comisario me parecen bien si no cuentan como pista y lo dice la cabecera.» |
| Sofía | 4 | «Clues by Sam y sin "logic error". Bien.» |
| Familia Ruiz | 4 | «Abrir sobres por avanzar y no por acertar: nadie se pelea con la tableta.» |
| Diego | 2 | «Los sobres no se imprimen. Las marcas puestas sí: una ficha con dos marcas ya hechas es un buen primer día.» |

**Media:** 3,4 · **Dispersión:** σ 0,80 · **¿Se lo contaría a un amigo?** La familia · **Riesgo de rechazo:** que con autopropagación los sobres se abran sin razonar (el diseñador ya cuenta ✓ y no toques, y OD-E lo verifica). Y en las landings, que la persona que llega por «murdle en español» vea un cuaderno con marcas y no sepa cuáles son suyas.

### 33. Acusación atómica con tres resultados

Se acusa de una vez (quién, dónde, con qué; el domingo, por qué), sin acertar a plazos. Tres resultados: **expediente completo** (todo bien y todo deducido), **acusación firme** (culpable bien, algo mal: cuenta para la racha), **se te escapó**.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «"Acusación firme" cuenta para la racha aunque falle el objeto: es justo, y en la app del libro me hacían acertar todo o nada.» |
| Luis | 4 | «Acusar de una vez, sin examen a plazos, es lo correcto. Y "expediente completo" es la medalla que quiero: no acerté, lo cerré.» |
| Sofía | 5 | «Tres resultados con nombre son tres cosas que compartir, y "firme" contra "completo" es el "probado / por poco" que ya me gustaba, pero mejor dicho.» |
| Familia Ruiz | 3 | «Los niños quieren acusar dos veces, y que no se pueda es una discusión de sofá. Pero "se te escapó" no riñe, y eso lo agradezco.» |
| Diego | 4 | «Rúbrica de tres niveles, lista. Y "la racha se juega al culpable, no a la contabilidad" es una frase que voy a usar en clase.» |

**Media:** 4,0 · **Dispersión:** σ 0,63 · **¿Se lo contaría a un amigo?** Sofía · **Riesgo de rechazo:** que «acusación firme» se perciba como aprobado a medias y no como resuelto; y la pantalla de acusación de tres campos en móvil. Bien resuelto en el documento; el panel no añade nada.

### 34. Tirar del hilo entre bloques y autopropagación opcional

Tocar la pista ilumina el bloque y las casillas; el juego puede dibujar el ✓ implícito entre bloques (el cruce de tablas), pero esa autopropagación transitiva es opcional y va desactivada en experto porque es una técnica que el escalafón acredita.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 5 | «En 48 casillas, tocar la pista y ver el bloque es la diferencia entre jugar y no jugar. Y la autopropagación activada para mí por defecto, por favor: yo no vengo a cruzar tablas, vengo a resolver un caso en el metro.» |
| Luis | 4 | «Que no me cruce las tablas solo: esa es mi técnica y la quiero hacer yo. Desactivada en experto es lo correcto. El hilo, sí, siempre.» |
| Sofía | 4 | «Queens. Interfaz que funciona. No es una mecánica.» |
| Familia Ruiz | 4 | «Toco la pista y les enseño dónde mirar sin decirles la respuesta. Y la autopropagación activada, que si no el pequeño tacha a mano cuarenta casillas.» |
| Diego | 4 | «En el proyector, tocar "quien estaba en el archivo llevaba algo de plata" y ver los dos bloques encenderse es la mejor explicación de "cruzar" que voy a dar.» |

**Media:** 4,2 · **Dispersión:** σ 0,40, **la más baja del panel**, como su equivalente en Escena · **¿Se lo contaría a un amigo?** Nadie · **Riesgo de rechazo:** el valor por defecto. Marta y la familia la quieren activada; Luis, desactivada. El panel pide: **activada por defecto en fácil y normal, desactivada en experto, y que el escalafón no acredite «el cruce de tablas» a quien la lleva activada** (el motor ve tableros, no cabezas: que lo diga).

### 35. El vistazo 3×3×3 y el tutorial que solo salta el primer jueves

Un mini de 3 elementos y 3 categorías (2-3 minutos, numeración propia, no cuenta para la racha) como calentamiento y puerta de la landing; tutorial de 60 s propio del modo, saltable, disparado solo la primera vez que el jugador llega a un día Expediente.

| Jugador | Nota | Por qué |
|---|---|---|
| Marta | 4 | «Un 3×3×3 de dos minutos el miércoles por la noche es cómo aprendería la tabla sin tutorial. Y que el tutorial no salte hasta el jueves, y que el correo del jueves diga "hoy toca expediente" antes del botón: eso es lo que me quita la sensación de que me han cambiado el juego.» |
| Luis | 2 | «Insultantemente simple, como los primeros del libro. Que no cuente y que no me lo pongan delante.» |
| Sofía | 4 | «El tutorial lo salto, ya lo he dicho. El vistazo lo juego de calentamiento y lo comparto si tiene su número.» |
| Familia Ruiz | 4 | «Es el del pequeño, mientras la mayor y yo hacemos el grande.» |
| Diego | 5 | «Ocho por página: los cinco minutos de calentamiento de cada clase, y en tabla, que es lo que doy. Que existan doscientos distintos, como avisa el diseñador.» |

**Media:** 3,8 · **Dispersión:** σ 0,98, Luis lo ignora sin rencor · **¿Se lo contaría a un amigo?** Marta («hay uno de dos minutos») y Diego · **Riesgo de rechazo:** que el catálogo de vistazos sea corto y se repita; y que el tutorial salte «por si acaso» antes del jueves, que es lo que Sofía salta y Marta ni ve. **Es la mitigación de la confusión de modos que el panel considera suficiente, junto a la portada y el correo.**

---

## 5. Matriz completa

| # | Ficha | Marta | Luis | Sofía | Ruiz | Diego | Media | σ | Lo contarían |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Dossier con fichas | 3 | 5 | 2 | 4 | 4 | 3,6 | 1,02 | 2 |
| 2 | Pistas por atributo de ficha | 4 | 5 | 3 | 4 | 5 | **4,2** | 0,75 | 2 |
| 3 | Presupuesto de texto | 5 | 4 | 5 | 4 | 4 | **4,4** | 0,49 | 1 |
| 4 | Motivo en el último minuto | 3 | 5 | 3 | 4 | 4 | 3,8 | 0,75 | 1 |
| 5 | Motivo como cuarta categoría (XL) | 1 | 4 | 2 | 2 | 3 | **2,4** | 1,02 | 1 |
| 6 | Confesión + «y sin embargo» con arma | 3 | 5 | 2 | 3 | 3 | 3,2 | 0,98 | 1 |
| 7 | Reparto recurrente de 24 | 3 | 5 | 2 | 3 | 2 | 3,0 | 1,10 | 1 |
| 8 | Objeto con historia y vitrina | 3 | 4 | 3 | 3 | 2 | 3,0 | 0,63 | 1 |
| 9 | Membrete de informe | 3 | 4 | 2 | 4 | 4 | 3,4 | 0,80 | 1 |
| 10 | Coartada cruzada | 2 | 5 | 4 | 2 | 3 | 3,2 | **1,17** | 2 |
| 11 | Cadena de custodia | 2 | 5 | 3 | 3 | 3 | 3,2 | 0,98 | 2 |
| 12 | Objeto perdido | 4 | 4 | 4 | 5 | 5 | **4,4** | 0,49 | 3 |
| 13 | Tabla del comisario | 5 | 3 | 4 | 4 | 5 | **4,2** | 0,75 | **4** |
| 14 | Expediente invertido | 2 | 5 | 3 | 2 | 5 | 3,4 | **1,36** | 2 |
| 15 | Vis a vis / interrogatorio de ficha | 5 | 5 | 4 | 4 | 3 | **4,2** | 0,75 | **4** |
| 16 | Doble víctima | 2 | 4 | 3 | 2 | 3 | 2,8 | 0,75 | 2 |
| 17 | El pasillo (orden) | 3 | 4 | 4 | 3 | 4 | 3,6 | 0,49 | 1 |
| 18 | Contraprueba | 3 | 5 | 4 | 4 | 5 | **4,2** | 0,75 | 2 |
| 19 | Rueda de reconocimiento | 5 | 4 | 4 | 5 | 4 | **4,4** | 0,49 | 2 |
| 20 | El reparto (recuento exacto) | 3 | 4 | 4 | 4 | 5 | 4,0 | 0,63 | 1 |
| 21 | Reconstrucción con salto entre bloques | 4 | 4 | 3 | 5 | 4 | 4,0 | 0,63 | 2 |
| 22 | Domingo de la conspiración | 2 | 5 | 3 | 2 | 2 | 2,8 | **1,17** | 2 |
| 23 | Villano con arma firma | 3 | 4 | 2 | 3 | 2 | 2,8 | 0,75 | 1 |
| 24 | Rejilla a dos manos | 2 | 3 | 3 | 5 | 5 | 3,6 | **1,20** | 2 |
| 25 | Guardar, restaurar, vaciar | 4 | 5 | 3 | 4 | 3 | 3,8 | 0,75 | 0 |
| 26 | Expediente de una página | 2 | 4 | 2 | 4 | 5 | 3,4 | **1,20** | 2 |
| 27 | Expediente Junior | 3 | 2 | 2 | 5 | 5 | 3,4 | **1,36** | 2 |
| 28 | Tú eres sospechoso, en rejilla | 4 | 3 | 3 | 4 | 4 | 3,6 | 0,49 | 3 |
| 29 | Casos de época | 3 | 5 | 2 | 3 | 3 | 3,2 | 0,98 | 1 |
| 30 | Viernes de armas absurdas | 4 | 2 | 4 | 5 | 4 | 3,8 | 0,98 | **4** |
| 31 | Escalafón de Expediente | 3 | 4 | 5 | 4 | 5 | **4,2** | 0,75 | 3 |
| 32 | Lunes corto: sobres y coartada confirmada | 4 | 3 | 4 | 4 | 2 | 3,4 | 0,80 | 1 |
| 33 | Acusación atómica, tres resultados | 4 | 4 | 5 | 3 | 4 | 4,0 | 0,63 | 1 |
| 34 | Tirar del hilo entre bloques | 5 | 4 | 4 | 4 | 4 | **4,2** | **0,40** | 0 |
| 35 | Vistazo 3×3×3 y tutorial del jueves | 4 | 2 | 4 | 4 | 5 | 3,8 | 0,98 | 2 |

Media de cada jugador sobre las 35: **Marta 3,3 · Luis 4,1 · Sofía 3,3 · Ruiz 3,7 · Diego 3,8.** Comparado con Escena (3,5 · 3,9 · 3,2 · 3,7 · 3,5): Luis sube porque este es su modo, Diego sube porque este es su formato, **Marta baja dos décimas porque este no es el juego que vino a buscar.** Sofía y la familia no se mueven.

---

## 6. Parte 3 · Comparación con Escena: qué modo prefiere cada uno

| Jugador | Modo preferido | ¿Jugaría los dos? | El escalafón con 24 técnicas: ¿motiva o abruma? |
|---|---|---|---|
| **Marta** | **Escena.** «Yo vine por el plano; la tabla es "entender la lógica" otra vez.» | **El jueves, con condiciones:** portada y correo que digan «hoy toca expediente», el vistazo del miércoles por la noche, y que el jueves sea el comisario o el vis a vis, nunca una tabla vacía de seis pistas. Un XL de 96 casillas, nunca. | **Abruma.** «Quería subir de rango, no hacer un máster.» Acepta un solo rango sobre el mejor apartado y pide que la segunda colección no aparezca hasta el primer jueves. |
| **Luis** | **Expediente.** «Es mi libro sin erratas y con el porqué.» | **Sí, los dos:** Escena el martes (su día canónico) y Expediente siempre que exista, pagando el ilimitado. Lo único que le haría jugar los dos el mismo día era el hilo del día (26 en Escena), que B descarta; lo lamenta y lo entiende. | **Motiva.** «Veinticuatro cosas que ahora sé que sé.» Con «este caso exigía», nunca «has usado». |
| **Sofía** | **Escena,** por velocidad: el plano se escanea, la tabla se contabiliza y su tiempo sube. Pero «el jueves es de tabla» es contenido de grupo. | **Sí, si es uno al día** y el mismo para todos. Dos pestañas con dos tiempos, no: la comparación se parte. | **Motiva.** «Doble especialidad» es la insignia que enseñaría; que el rango no baje nunca. |
| **Familia Ruiz** | **Escena el domingo** (la casa de dos plantas), **Expediente Junior para el pequeño** en paralelo. | **Sí, si conviven el mismo domingo:** el grande en plano para los tres, el 3×3×3 en tabla para el de diez. Un XL de tabla en lugar de las dos plantas, no. | **La de trece: motiva. El de diez: no lo mira.** Un rango y dos insignias es la única forma de que la mayor no le saque al pequeño dos rangos de ventaja. |
| **Diego** | **Expediente,** sin duda: se imprime en una carilla, no exige convención espacial y es currículo de 5.º-6.º. | **Sí, por curso:** Escena en 3.º-4.º (encima/debajo), Expediente en 5.º-6.º (tabla de doble entrada). Es enseñanza diferenciada con el mismo motor. | **Motiva, como rúbrica.** Catorce ítems de tabla. Renombrar «pareja atada» y «cruce de tablas». |

**Lo que el panel ve en conjunto.** Escena es el modo de entrada (Marta, Sofía, la familia) y Expediente es el modo de retención y de papel (Luis, Diego). Nadie prefiere «los dos por igual». La consecuencia para la arquitectura es la de §2: el ritual sigue siendo el plano y la tabla entra por un día, por el archivo, por el PDF y por Premium. El escalafón de 24 motiva a cuatro de cinco **solo** con la regla de producto (un rango, dos apartados) y con nombres que pasen la prueba X1 del diseñador.

---

## 7. Resultados

### Las 5 mecánicas de Expediente con mejor nota media

1. **El objeto perdido (12)** — 4,4, σ 0,49, 3 de 5 lo contarían. La mecánica estructural mejor puntuada: se explica en la cabecera, no tiene tutorial, se imprime, no añade texto, y la familia y Diego la piden con frase propia («uno se quedó en el recreo»). Es el «rastro del objeto» de este panel, con más consenso.
2. **La rueda de reconocimiento (19)** — 4,4, σ 0,49. La más visual del modo (cuatro retratos, «de las bajitas y sin gafas»), la única de las estructurales que Marta grabaría, y la que el pequeño hace solo. Cero riesgo si RR1 se cumple.
3. **El presupuesto de texto (3)** — 4,4, σ 0,49. No es una mecánica, y que esté en el podio es el dato más importante del documento: **el problema de Expediente es el texto, no la tabla.** Ciento veinte palabras y una línea por pista es lo que hace que Marta y Sofía abran una cuadrícula.
4. **La tabla del comisario (13)** — 4,2, σ 0,75, **4 de 5 lo contarían.** Empatada a 4,2 con cinco más; entra por ser la más contable y por resolver el jueves de Marta: un cuaderno medio lleno y una regla de una frase. Luis pone la condición (MT2 real, o es un mentiroso disfrazado).
5. **El vis a vis (15)** — 4,2, σ 0,75, 4 de 5 lo contarían. Igual que en Escena, la mecánica estructural que gusta a cuatro perfiles y se cuenta, y aquí encaja mejor (las preguntas son casillas). Todo depende de la garantía MV-E; el panel prefiere la variante de cuatro fichas con coste 2/1.

Empatadas a 4,2 y fuera del podio por dispersión o por no contarse: **tirar del hilo (34)** (σ 0,40, infraestructura obligatoria), **pistas por atributo (2)**, **la contraprueba (18)** (la favorita del diseñador; el panel la quiere, pero solo Sofía y Diego la contarían) y **el escalafón (31)**.

**Lo que llama la atención.** De las cinco favoritas del diseñador (E-7, E-10, E-1, E-5 y E-12), el panel confirma tres (vis a vis 4,2, contraprueba 4,2, comisario 4,2) y una como buena sin entusiasmo (el reparto 4,0); **la coartada cruzada (E-1) se queda en 3,2 con σ 1,17**, porque contradice la tesis del propio modo («ninguna pista se lee dos veces»). De las cinco del guionista, ninguna pasa de 3,8 y tres se quedan en 3,0-3,2: son de un solo jugador (Luis), exactamente como en Escena. De las cinco de producto, tres están en el podio o empatadas (E1 vis a vis, E2 reconstrucción 4,0, E8 imprimible para Diego) y **el domingo de la conspiración (E4) es la tercera peor del panel (2,8).**

### Las 3 más polarizantes

1. **El expediente invertido (14)** y **Expediente Junior (27)** — σ 1,36, empatadas. El invertido divide por gusto (Colombo y rúbrica contra «un examen con la solución a la vista»), igual que en Escena; Junior divide por canal (los que no tienen niños ni aula no lo necesitan; la familia y Diego le dan 5). Ninguna es caso del día; las dos son archivo, aula y Pack.
2. **La rejilla a dos manos (24)** y **el expediente de una página (26)** — σ 1,20. Las dos dividen por forma de vida: quien juega solo en el metro les da 2; quien juega en compañía o imprime les da 5. Las dos valen en papel y cuestan cero. **Diego les da 5 a las cuatro polarizantes: es el perfil que la ronda de Expediente sirve mejor.**
3. **La coartada cruzada (10)** y **el domingo de la conspiración (22)** — σ 1,17. Estas sí polarizan por gusto y no por canal: un 5 de Luis contra dos 2. La coartada cruzada es la única mecánica que rompe la promesa de una lectura; la conspiración premia al jugador diario y deja fuera al del domingo, que es quien más pierde con el cambio de superficie.

Mención: **el reparto recurrente (7)**, σ 1,10, y **el dossier con fichas (1)**, σ 1,02: las dos piezas del guionista donde Luis da 5 y Sofía 2, y las dos con un problema concreto que nadie había señalado (los apellidos vascos; el texto antes de la primera pista).

### Las 3 que más «se contarían a un amigo»

1. **El vis a vis (15)** — 4 de 5. Marta: «la tabla se tacha sola cuando preguntas»; Sofía: «lo cerré con dos abiertas»; Luis: «es Maigret»; la familia: «una pregunta cada uno». Diego no lo contaría porque no lo puede imprimir. Igual que en Escena, y por las mismas razones.
2. **La tabla del comisario (13)** — 4 de 5. Marta: «el comisario se ha equivocado»; Sofía: «la pillé en el minuto dos»; la familia: «corregir al adulto»; Diego: «la ficha con marcas del profe». Luis no lo contaría hasta comprobar que no es el mentiroso con otro nombre. **Es la única mecánica nueva de esta ronda que entra en las tres listas (media, contable y jueves).**
3. **El viernes de armas absurdas (30)** — 4 de 5. «El viernes es de risa» es la misma frase que en Escena, y el panel pide que sea el mismo viernes en los dos modos.

Mención: **el objeto perdido (12)**, **tú eres sospechoso (28)** y **el escalafón (31)**, 3 de 5 cada uno; y **la cadena de custodia (11)**, con la frase más «de novela» del panel («el arma no era suya») aunque solo dos la dirían.

### La arquitectura ganadora del panel

**B-jueves**: un solo caso al día, Expediente el jueves con la tabla del comisario, el domingo intacto (Escena de dos plantas), el vistazo 3×3×3 disponible desde el miércoles, el correo del jueves anunciando «hoy toca expediente», y el segundo día de Expediente decidido por el disparador del diseñador (≥15 % vuelven al archivo) **y** por la prueba 5 de §9 con familias reales. Media 3,6, σ 0,49, sin ningún 2. A empata en media pero divide (3,6, σ 0,80); B tal como la propone producto (3,2) pierde con los dos perfiles a los que toca el día; C (3,0) es el repliegue, no el plan, y el panel coincide con producto en eso.

Lo que el panel **no** discute de producto: la reversibilidad («de B se sube a A, de A no se baja»), la medición limpia, la firma humana como cuello de botella (Luis y Diego lo dicen con sus palabras) y que Expediente sea la columna de papel y B2B. Lo que sí discute: **el domingo**, y una contradicción de tamaño (5×5×5 + motivo contra el techo de 96 casillas) que hay que cerrar antes de escribir el calendario v2.

---

## 8. Lo que el panel le dice al equipo

1. **El muro se ha resuelto en las pistas y se ha reabierto en las fichas.** El presupuesto de texto (120 palabras) es la mejor idea de la ronda y el panel la premia. Pero el formato de dossier del guionista pone cabecera + 12 fichas con frase de carácter + membretes **antes** de la primera pista: más texto que un caso entero de Escena. Marta y Sofía lo llaman por su nombre. Solución barata y unánime: **fichas plegadas por defecto** (nombre, oficio, etiqueta de atributo), retrato y frase al tocar; membretes de una línea; la segunda línea del objeto (4.3) fuera de la ficha jugable.
2. **La confusión de modos no se arregla con la portada.** Marta abre desde el correo y pulsa Empezar sin leer. Lo que la retiene el primer jueves es la combinación de tres cosas, todas ya propuestas y ninguna cara: el correo que dice «hoy toca expediente», el vistazo 3×3×3 disponible el miércoles, y **que el jueves sea el comisario** (cuaderno medio lleno, regla de una frase) y no una tabla vacía de seis pistas. Y una cuarta que nadie había escrito: el día de gracia es uno cada 30 y los jueves son cuatro; quien no quiera la tabla no tiene escapatoria dentro de la racha. Hay que asumirlo o dar al jueves un plan B (el caso del miércoles del archivo contando para la racha solo el primer mes).
3. **Luis sigue solo, pero aquí es el dueño de la casa.** Nueve fichas reciben un 5 de Luis y un 2-3 del resto (dossier, confesión, reparto, coartada cruzada, cadena de custodia, invertido, conspiración, época, doble víctima). En Escena eso era un problema; en Expediente es la definición del modo: es el producto para el lector de Murdle que quiere lo que el libro le prometió sin erratas. La regla del panel anterior sigue valiendo, **toda la narrativa fuera de las pistas numeradas**, y aquí el guionista y el diseñador la han escrito los dos, lo que es una buena noticia.
4. **Tres cosas del guionista chocan con reglas del proyecto y nadie las había visto:** (a) ocho apellidos vascos en un reparto que promete «pronunciable en toda la región» (regla 4; Diego los lista); (b) «dos disparos, no uno» en la doble víctima y «fui a buscar el cuchillo» en la confesión (regla 5, cozy; la familia los para); (c) «tú» dentro de «las pistas que lo mencionen» en 4.10, donde la voz estaba prohibida. Las tres se corrigen en una tarde.
5. **El domingo es el día que más cuesta cambiar y el que menos gana con el cambio.** La cuarta categoría (2,4) y la conspiración (2,8) son las dos peores notas del panel, y las dos viven en el domingo de B. La familia, que es el 100 % del uso del domingo en su casa, prefiere el reparto (E-12, 4,0: la escalera sin dibujarla) y el motivo en la pantallita de después (3,8). Si Expediente entra en el domingo alguna vez, que sea con 3 bloques y la prueba 5 aprobada.
6. **Diego es el perfil mejor servido de la ronda, y eso confirma la decisión 3 de producto.** Le dan 5 el imprimible, la hoja A/B, Junior, el invertido, el comisario, el objeto perdido, la contraprueba, el reparto, los atributos, el escalafón y el vistazo: once cincos, más que nadie. Expediente es el formato del aula y del papel, y la ronda lo ha diseñado sabiéndolo.
7. **Las variantes que el panel elige, como en Escena:** vis a vis con cuatro fichas y coste 2/1 (no tres preguntas iguales); motivo como segunda fase seis días de siete (no cuarta columna); doble víctima solo en la versión «un hecho grave y un hurto» (nunca dos fallecidos); un solo rango sobre el mejor apartado (no suma); autopropagación activada por defecto salvo en experto, y sin acreditar el cruce de tablas a quien la lleva puesta.

---

## 9. Qué probar con personas reales, y en qué orden

Siete pruebas. Las X1-X3 son las del diseñador (§7) y el panel las suscribe con un añadido cada una; las otras cuatro son nuevas. Umbral escrito antes de mirar el dato, según el método de D-010.

| # | Qué se prueba | Con quién | Cuántas | Qué se mide | Umbral fijado antes |
|---|---|---|---|---|---|
| **1** | **El primer jueves** (confusión de modos) | Perfil Marta: han jugado Murdoku en libro o web, nunca una cuadrícula lógica | 8, en dos brazos de 4 | Tres días de Escena en prototipo y el cuarto un Expediente. Brazo (a): tabla clásica vacía de seis pistas, sin aviso. Brazo (b): tabla del comisario, portada con icono, correo «hoy toca expediente», vistazo jugado la víspera. Se mide: abandono antes de la primera marca, tiempo hasta la primera marca, si dicen espontáneamente «me han cambiado el juego», y si vuelven el día 5 | En (b): abandono ≤ el de su día 3 de Escena + 10 puntos; ≤1 de 4 dice «me han cambiado el juego»; 4 de 4 vuelven el día 5. Si (a) y (b) no se distinguen, la mitigación no existe |
| **2** | **El muro** (dossier y presupuesto de texto) | 4 Marta, 3 Sofía, 3 Luis | 10 | El mismo caso en dos maquetas: fichas desplegadas con frase de carácter y membretes, contra fichas plegadas (nombre + oficio + atributo) y pistas solas. Se mide: tiempo hasta la primera marca, cuántos leen las fichas antes de la pista 1, y la respuesta a «¿había mucho texto?» y a «¿cuántas pistas había?» al terminar | Si ≥4 de 10 dicen «mucho texto» con la desplegada, plegada por defecto. Si los 3 Luis dicen que la plegada «no tiene alma», retrato y frase al tocar, no desplegado |
| **3** | **La tabla del comisario** (X2 del diseñador) | 5 Marta en HTML, 5 Diego con alumnos de 5.º-6.º en papel | 10 | Lo que fija X2: ≥8 de 10 encuentran la marca falsa sin ayuda; nadie dice que el juego «le ha mentido»; finalización igual o mejor que el caso vacío. **Añadido del panel:** 3 Luis (lectores de Murdle ES) juegan tres casos seguidos y se les pregunta «¿es el mentiroso otra vez?» | Los umbrales de X2, y **0 de 3 Luis** lo identifican con el mentiroso |
| **4** | **El vis a vis** (X3 del diseñador) | 12, con 4 Sofía a las que no se les enseña tutorial | 12 | Lo que fija X3: nadie dice «pregunté mal»; caída de resolución ≤10 puntos; ≥8 de 12 usan un verbo de investigación; ≥6 de 12 gastan las fichas en una combinación distinta de «dos abiertas». **Añadido:** las 4 Sofía sin tutorial | Los de X3, y que **≥3 de las 4 Sofía** entiendan el coste 2/1 solo con la línea de cabecera |
| **5** | **El domingo en familia** | Familias con un menor de 9-11 años y otro de 12-14 | 4 familias, 3 domingos | Tres formatos, uno por domingo, en orden rotado: Escena de dos plantas 6×6; Expediente XL de 4 elementos y 4 categorías (96 casillas); Expediente ancho de 5 elementos y 3 categorías (75) con el motivo en segunda fase. Se mide: cuántas marcas hace el menor, tiempo total, si terminan, y «¿cuál repetiríais?» | Expediente entra en el domingo solo si el menor hace ≥20 % de las marcas y ≥3 de 4 familias lo eligen al repetir. Si gana el ancho de 3 bloques sobre el XL de 4 categorías, se cierra la contradicción de tamaño a favor del diseñador |
| **6** | **Los nombres** (X1 del diseñador + reparto) | (a) 5 personas, una por perfil, 2 de LatAm; (b) 6 personas de LatAm (Rosario, CDMX, Bogotá) | 5 + 6 | (a) Catorce técnicas: resolver en voz alta y describir el razonamiento antes de ver ningún nombre; y a las 3 Marta, «¿24 técnicas te motiva o te abruma?» con y sin la regla del rango único. (b) Leer en voz alta los 24 nombres del reparto; contar tropiezos y preguntas «¿cómo se dice?» | (a) ≥8 de 14 mapeables; «cruce de tablas» y «pareja atada» se renombran si fallan; las 3 Marta dicen «motiva» solo con rango único, o la regla es obligatoria. (b) ≤3 tropiezos en total; por encima, se cambian los apellidos |
| **7** | **Papel** (expediente de una página y hoja A/B) | 2 aulas de 5.º-6.º en Argentina y 1 en España | ~75 alumnos | Un expediente de una página y una rejilla a dos manos por alumno o pareja. Se mide: % que termina, errores por «no» o «cerca» mal leídos, tiempo, y si el docente reescribe alguna pista antes de repartirla | ≥70 % terminan; ningún docente reescribe una pista; ≤2 modismos señalados por los alumnos argentinos. Si pasa, la versión digital de dos manos espera y el Pack Aula lleva Expediente en 5.º-6.º |

Orden: 1 y 2 primero (son las que deciden si Marta abre el jueves), 3 y 4 después (son las mecánicas del jueves), 5 antes de escribir el calendario v2, 6 antes de implementar el escalafón, 7 cuando exista el exportador.

---

*Cambios a este documento: los registra `director-producto` con fecha y motivo en `docs/decisiones.md`. Las decisiones que este panel deja abiertas (B-jueves frente a B; el tamaño del domingo XL; fichas plegadas; el plan B del jueves dentro de la racha; renombrar apellidos y técnicas) las cierra `director-producto` con el resultado de las pruebas de §9.*
