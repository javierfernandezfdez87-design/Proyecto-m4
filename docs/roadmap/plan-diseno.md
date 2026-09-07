# Plan de área: diseño de producto y marca

Autor: `disenador-ux-ui`. Fecha: 7 de septiembre de 2026. Versión 1.0.
Formato: el de `docs/roadmap/supuestos.md` §13. Supuestos comunes heredados sin cambios (arranque lunes 8 de septiembre = semana 1; beta cerrada semana 7; lanzamiento semanas 9-10).

**Aviso de alcance de los identificadores.** Los `D-xx` de este documento son **tareas de Diseño**, no registros de decisión. Los registros de decisión del proyecto (D-005, D-006, D-007, D-009, D-010) viven en `docs/decisiones.md` y aquí se citan como "decisión D-00x" siempre con la palabra "decisión" delante. Si esta convención molesta, se renombra a `DIS-xx` en la v1.1: es una búsqueda y reemplazo.

**Alerta de marca (decisión D-006).** Hoy no se ha cumplido ningún disparador. Pero **este plan programa dos de ellos**: los primeros vídeos de `creador-social` (semana 7, beta) y la nota de prensa a 10 medios (semana L+2 de `docs/arbol-web-final.md` §10.2). Ninguna pieza de marca de este plan —logotipo, mascota, icono de PWA, tarjetas de compartir, plantillas de vídeo— debe publicarse fuera del círculo cerrado de beta antes de que `experto-legal` confirme la presentación en la OEPM. La tarea **D-06** lo bloquea explícitamente y es la única de este plan con veto.

---

## 0. Las cinco reglas con las que se ha escrito este plan

1. **El orden lo fija frontend, no la estética.** Cada especificación se entrega la semana anterior a la que frontend la necesita, y en el orden del motor (`docs/motor-viabilidad-expediente.md`, "orden combinado"). Por eso el tablero de Escena y la pantalla de resultado son las dos primeras y el paywall es la última.
2. **Nada se entrega sin sus cinco estados** (carga, vacío, error, éxito, offline). Una pantalla sin estados es media pantalla y la otra media la improvisa frontend a las dos de la mañana.
3. **Nada se prueba con personas sin umbral escrito antes del dato.** Se hereda el método de `docs/propuesta-jugabilidad.md` §6.
4. **El pulgar en el metro manda.** 360 px de ancho, una mano, objetivo táctil de 44 px, nada de gestos que choquen con el deslizamiento desde el borde del navegador, deshacer siempre visible.
5. **El color nunca es el único portador de información.** Ni en el tablero, ni en el cuaderno del comisario, ni en la tarjeta de compartir, ni en el imprimible en blanco y negro.

---

## 1. Lo que congelo el día 1 (para que frontend no espere a que yo decida)

Esto no es una tarea: es el conjunto de decisiones que tomo ahora, por escrito, para que las tareas de abajo tengan sobre qué construirse. Se revisa una sola vez, tras las pruebas de la semana 5.

### 1.1 Paleta base

| Rol | Claro | Oscuro | Nota |
|---|---|---|---|
| Fondo | Marfil `#F6F1E7` | Tinta `#14161C` | El oscuro existe desde el día 1, no es un añadido |
| Superficie / ficha | `#FFFCF5` | `#1D2029` | La ficha de sospechoso es papel: siempre un punto más clara que el fondo |
| Texto principal | `#14161C` | `#F0EADD` | Contraste 15,8:1 y 14,1:1 |
| **Acento de marca** | Latón `#C8912F` | Latón `#D9A548` | El acento reconocible de la marca. En claro **nunca se usa para texto pequeño** (2,4:1 sobre marfil) |
| Acento de texto | Latón oscuro `#7A5410` | Latón `#D9A548` | La variante que sí pasa AA en texto |
| **Marca del comisario** | Petróleo `#1E4E5F` | Petróleo `#5FA0B4` | Segundo acento, exclusivo del Expediente |
| Descartado | Gris `#6B6B66` | Gris `#8A8A84` | Nunca rojo |
| Aviso / anulado | Ciruela `#7B2233` | Ciruela `#C97F8C` | Solo para caso anulado y erratas (PR2) |

**Regla dura:** el par rojo/verde está prohibido en cualquier estado del tablero, del cuaderno y de la tarjeta de compartir. El eje que usamos es ámbar/petróleo, que sobrevive a protanopía, deuteranopía y tritanopía, y la distinción siempre lleva además forma o trazo.

### 1.2 Tipografía

- **Wordmark y títulos:** serif humanista variable, con juego completo de tildes, ñ, ¿ y ¡ y versalitas reales. Candidata: **Fraunces** (SIL OFL). Alternativa: **Bitter**.
- **Interfaz:** **Source Sans 3** (SIL OFL), elegida por legibilidad a 13-14 px y por diacríticos correctos (la ñ y la tilde de las mayúsculas son donde fallan la mitad de las tipografías de moda).
- **Cronómetro y números del resultado:** cifras tabulares obligatorias, o el tiempo baila mientras corre.
- **Autoalojadas**, nunca desde CDN de terceros: es un requisito de `experto-legal` para el RGPD y de rendimiento (Lighthouse ≥ 90 en las 30 páginas del día 1).
- Escalado: el cuerpo base respeta el tamaño de texto del sistema; ninguna medida del tablero en `px` fijos donde pueda ir `rem`.

### 1.3 La mascota, y el problema legal que trae de fábrica

`docs/legal/anterioridades-sospechario.md` §3.4 fija **seis reglas de uso obligatorias para diseño**. Las tres que me afectan directamente:

- El nombre del producto es **Sospechario**, siempre. La mascota va subordinada en todo texto: *"Sabueso, el basset que te abre el caso de hoy"*, nunca como si fuera la marca del servicio.
- **El valor defendible del personaje está en el dibujo, no en el nombre.** Si lo dibuja una persona, hace falta contrato escrito de cesión en exclusiva (arts. 43 y 45 TRLPI). **Si se genera con IA, la titularidad es un problema abierto** y va a dictamen. Esto es un bloqueante real de la tarea D-04 y por eso lleva compuerta.
- Recomendación legal de coste cero que **recojo y llevo a decisión del fundador en la semana 1**: dar al perro un **nombre propio** ("Barón", "Trufa", "Sabu") y usar "sabueso" como descriptor. Blinda la licencia editorial en México frente a *El Sabueso* de Grupo Animal y en España frente a *Sabuesos* de RTVE. Mi recomendación de diseño: **sí**, y que el nombre propio sea corto y con vocal abierta al final, porque va a aparecer 300 veces en la interfaz y en los correos.

### 1.4 El icono no es el wordmark

El icono de la PWA es **la cabeza del basset de frente, orejas caídas**, en tres formas planas. El wordmark vive en la cabecera, en la portada del caso y en la tarjeta de compartir, nunca en el icono: "Sospechario" son 11 caracteres y se trunca bajo el icono de iOS y Android, riesgo ya identificado en `docs/naming-shortlist.md` §3.

---

## 2. La ruta: qué necesita frontend y cuándo

Orden de construcción de frontend, derivado del orden del motor y de la decisión D-009 (§8.2, punto 26: *`disenador-ux-ui` firma la spec de la pantalla de resultado **antes** de que frontend escriba la pantalla*).

| Semana en que frontend lo escribe | Pantalla | Spec que se entrega la semana anterior |
|:-:|---|---|
| 2 | Portada del día · Tablero de Escena · Panel de pistas | D-13, D-14, D-15 |
| 3 | Acusar · **Resultado de cuatro bloques** · Reconstrucción · Compartir | D-16, D-17, D-18 |
| 4 | Sabueso · Sobres · Vistazo · Onboarding · Racha y calendario | D-19, D-20, D-21, D-22 |
| 5 | Interrogatorio · Escalafón y cuaderno | D-23, D-24 |
| 6 | Expediente: dossier, cuaderno del comisario, contraprueba | D-25, D-26, D-27 |
| 7 | Archivo · Estados de red y PWA · Erratas · Aterrizaje y OG | D-28, D-29, D-30, D-36 |
| 9-10 | Paywall (spec v0, sin pasarela) | D-31 |

**La consecuencia práctica:** las semanas 1 y 2 son las más cargadas de este plan y no admiten deslizamiento. Todo lo de marca que no sea el icono, la paleta y la tipografía se hace después.

---

## 3. Tabla maestra

Días de agente y horas del fundador. Dependencias entre áreas con el nombre del agente. "Hecho" es verificable por alguien que no soy yo.

### Bloque A · Identidad de marca

| id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho cuando | Riesgo |
|---|---|---|:-:|:-:|---|:-:|---|---|
| **D-01** | Congelar paleta, escalas y modo oscuro (la tabla de §1.1 con todos los tonos intermedios y los pares de contraste medidos) | `docs/diseno/ux/tokens.json` v0.9 + `docs/diseno/marca/paleta.md` | 1 | 0,5 | — | 1 | Todos los pares texto/fondo del sistema tienen ratio medido y ≥4,5:1 (≥3:1 en texto grande), en claro y en oscuro, en una tabla | Bajo |
| **D-02** | Tipografía: elección, licencias, subconjunto latino con diacríticos, escala tipográfica, cifras tabulares | `docs/diseno/marca/tipografia.md` + ficheros en `web/public/fonts/` | 0,5 | 0 | D-01 | 1 | La ñ, las mayúsculas acentuadas y ¿¡ se renderizan en las dos familias; licencia OFL adjunta; peso total ≤ 90 kB con subconjunto | Bajo |
| **D-03** | Wordmark de Sospechario: dibujo, versiones (completa, corta, monograma S), lockup con descriptor fijo *"el caso de misterio de cada día"*, versiones para claro/oscuro y para una sola tinta | `docs/diseno/marca/logotipo.md` + SVG en `docs/diseno/marca/svg/` | 1,5 | 1 | D-02 | 1-2 | El wordmark es legible a 120 px de ancho, funciona en una tinta y hay versión de campo (para bordado/sello) sin degradados | Medio: 11 caracteres es mucho para una cabecera de 360 px |
| **D-04** | **Mascota:** basset con lupa y pajarita. Hoja de personaje (proporciones, do y no), **8 expresiones** y **carta de derechos** (quién dibuja y con qué contrato) | `docs/diseno/marca/mascota.md` + SVG | 2,5 | 1,5 | D-06 (veto legal), `experto-legal` | 2-3 | Las 8 expresiones existen, cada una tiene su uso escrito, y **existe el papel de cesión o el dictamen sobre ilustración generada con IA** | **Alto: sin el papel, la mascota no es del proyecto** |
| **D-05** | Nombre propio de la mascota: 10 candidatos con criterio (2 sílabas, vocal abierta, sin colisión), recomendación y prueba de dictado | Sección en `docs/diseno/marca/mascota.md` | 0,5 | 1 | `experto-legal` §3.4 regla 6 | 1 | El fundador ha decidido; el nombre está en `docs/decisiones.md` como addendum a la decisión D-005 | Medio |
| **D-06** | Compuerta legal de marca visual: revisión de logotipo, icono y mascota por `experto-legal` antes de cualquier publicación externa | Anotación en `docs/legal/anterioridades-sospechario.md` | 0 (mío) | 0,5 | D-03, D-04 | 3 | `experto-legal` firma "puede publicarse en beta" y "puede publicarse en abierto" por separado | **Bloqueante** |
| **D-07** | Icono de aplicación a **60 / 32 / 16 px**, claro y oscuro, sobre blanco y negro, más el juego completo de PWA (maskable 512, 192, apple-touch, favicon SVG, splash) y prueba del label truncado | `docs/diseno/prototipos/iconos-app.html` + `web/public/icons/` | 1 | 0,5 | D-04 | 3 | El icono se reconoce a 16 px (no es una mancha) y pasa el test de 5 segundos mezclado con Murdoku, Murdle, Cluedo y dos clones, con 5 personas | Medio: es el criterio 3 de decisión de `naming-shortlist.md` §5 |
| **D-08** | Guía de estilo: voz visual, uso del acento, qué no hacer (nada de salpicaduras, cinta policial, tiza en el suelo ni máquina de escribir) | `docs/guia-estilo.md` (sección visual) | 0,5 | 0 | D-01..D-04 | 3 | Hay 6 ejemplos de "sí" y 6 de "no" con imagen; `creador-social` y `periodista-contenidos` la citan | Bajo |

### Bloque B · Sistema: tokens, componentes, iconos

| id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho cuando | Riesgo |
|---|---|---|:-:|:-:|---|:-:|---|---|
| **D-09** | **Tokens exportables a Tailwind**: color, espaciado (escala de 4), tipografía, radios, sombras, duraciones, z-index. Un solo fichero fuente y su mapeo | `docs/diseno/ux/tokens.json` v1.0 + `docs/diseno/ux/tokens-tailwind.md` | 1 | 0 | D-01, D-02 | 1 | `desarrollador-frontend` genera `tailwind.config` desde el JSON **sin editarlo a mano**; hay token para `prefers-reduced-motion` y para `forced-colors` | Bajo, y es la tarea de mayor apalancamiento del plan |
| **D-10** | Biblioteca de componentes con estados: celda, ficha de sospechoso, pista, botón, panel deslizante, pestañas, cronómetro, deshacer, aviso, hoja modal, tarjeta de técnica | `docs/diseno/ux/componentes.md` | 2 | 0 | D-09 | 1-2 | Cada componente tiene: medidas, área táctil, estados (reposo, pulsado, foco, deshabilitado, error), texto para lector de pantalla y comportamiento a 360/390/430 px | Medio: es el documento que más se consulta y el que más envejece |
| **D-11** | **Sistema de iconos de sospechosos, objetos y lugares.** Triple codificación: silueta + inicial + color. 6 sospechosos, 8 objetos, 24 lugares | `docs/diseno/ux/iconos.md` + SVG | 2,5 | 0,5 | D-01, `disenador-puzzles` (vocabulario cerrado) | 2-3 | Cada icono se distingue de todos los demás **a 24 px en escala de grises**; ninguna pareja se distingue solo por color; la leyenda es cerrada (≤3 iconos por caso, ≤50 % de las pistas) | **Alto**: es la prueba 5 de `propuesta-jugabilidad.md` §6, y un icono con doble lectura es una pista con dos lecturas |
| **D-12** | Mapa de flujos: los 9 recorridos completos (primer día, día normal, día fallido, jueves de Expediente, vistazo, compartir, archivo, duelo por enlace, instalación de PWA) | `docs/diseno/ux/flujos.md` | 1,5 | 0,5 | D-10 | 2 | Cada flujo tiene punto de entrada, salida, callejones sin salida marcados y el evento de analítica en cada paso, acordado con `analista-datos` | Medio |

### Bloque C · Especificaciones de pantalla, en el orden en que frontend las necesita

Todas incluyen **carga, vacío, error, éxito y offline**, más teclado y lector de pantalla. Todas se entregan en `docs/diseno/ux/pantallas/`.

| id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho cuando | Riesgo |
|---|---|---|:-:|:-:|---|:-:|---|---|
| **D-13** | **Portada del día con la regla** (≤45 palabras incluida la regla, 7 variantes de día, etiqueta de tamaño y banda de dificultad) | `pantallas/01-portada.md` | 0,5 | 0 | D-10, `disenador-puzzles` | 1 | Las 7 portadas caben sin desplazamiento en 360×640; la regla del día se lee antes del botón Empezar | Bajo |
| **D-14** | **Tablero de Escena.** Cuadrículas 4×4, 5×5 y 6×6 en 360 px; colocar arrastrando y tocando; ciclo de estados por toque; deshacer; celdas bloqueadas; dos plantas del domingo; tirar del hilo | `pantallas/02-tablero.md` | 3 | 1 | D-09, D-10, D-11, contrato `cells(pista, estado)` del motor | 1-2 | El 6×6 es legible y tocable a 360 px con objetivo ≥44 px (o separación equivalente); los ejes van rotulados; deshacer está siempre visible; el cronómetro **arranca en la primera interacción**, no al cargar | **Alto: es la pantalla del producto** |
| **D-15** | **Panel de pistas** que no tapa la cuadrícula: decisión entre panel deslizante y pestañas, con prototipo de las dos y medida de cuánto tablero se ve en cada una | `pantallas/03-pistas.md` | 1 | 0,5 | D-14 | 2 | Con el panel abierto se sigue viendo ≥40 % del tablero; abrirlo y cerrarlo no pierde el estado; el gesto no choca con el deslizamiento desde el borde del navegador | Medio |
| **D-16** | **Acusar con confirmación**: hoja de confirmación que muestra qué se está acusando en palabras, con salida sin coste | `pantallas/04-acusar.md` | 0,5 | 0 | D-14 | 2 | Nadie acusa por accidente: la confirmación repite nombre, lugar y objeto en una frase | Bajo |
| **D-17** | **Pantalla de resultado de cuatro bloques** (decisión D-009 §8.2 punto 26): orden fijo, "Comprobar" en lenguaje llano y en gris, ayudas con nombre, **ningún estadístico de posición por defecto**, ficha técnica de dos fichas + estado anulado, tiempo activo y total | `pantallas/05-resultado.md` | 2 | 1 | D-14, F8 devuelve vacías y erróneas por separado | 2 | La spec está **firmada antes** de que frontend escriba una línea de la pantalla; los cuatro bloques tienen orden fijo y estado anulado | **Alto: está señalada como bloqueante en la decisión D-009** |
| **D-18** | **Reconstrucción de 22 segundos** + "Paso a paso" con el mismo peso visual + **compartir nunca detrás de la animación** + `prefers-reduced-motion` con equivalente estático completo | `pantallas/06-reconstruccion.md` | 1,5 | 0,5 | D-17, certificado serializado (M3) | 2-3 | Se salta con un toque y el ajuste se recuerda; con movimiento reducido la reconstrucción se convierte en una lista de peldaños, no desaparece | Medio: depende de que M3 exista |
| **D-19** | **Sabueso de dos niveles** y el gesto "¿dónde quieres que huela?": nivel 1 señala la pista, nivel 2 la habitación; se cansa; en Expediente señala el bloque de la contradicción, nunca la casilla; **jamás dice "tienes un error"** | `pantallas/07-sabueso.md` | 1 | 0,5 | D-04, D-14 | 3 | Ningún estado de Sabueso comunica error; las 8 expresiones están asignadas a estado; el uso queda registrado para el escalafón | Medio |
| **D-20** | **Sobres por progreso** (abre con 3 pistas) y **vistazo 3×3** con numeración propia | `pantallas/08-sobres-vistazo.md` | 1 | 0 | D-15 | 3 | El sobre nuevo entra sin empujar el tablero fuera de pantalla; el vistazo no toca la racha y lo dice | Bajo |
| **D-21** | **Onboarding de 60 s** con caso guiado 3×3 + pantalla de convención espacial. Saltable, repetible, sin reglas de día | `pantallas/09-onboarding.md` | 1,5 | 0,5 | D-20 | 3 | Se completa en ≤60 s en la prueba con personas; ninguna pantalla tiene más de dos líneas de texto | Medio |
| **D-22** | **Racha, calendario y archivo de 7 días**: racha por número de caso con día concedido, calendario con candado, "días del mes completados" | `pantallas/10-racha-archivo.md` | 1 | 0 | D-17 | 3-4 | El calendario distingue jugado / fallido / concedido / no disponible **sin usar solo color**; la racha salvada se explica en una frase | Bajo |
| **D-23** | **Interrogatorio con menú.** Contador de preguntas, menú de 3-5 por sospechoso, la línea fija *"Cualquiera de estas cierra el caso"*, respuesta con retrato, y qué pasa cuando el menú se queda con dos opciones | `pantallas/11-interrogatorio.md` | 2 | 0,5 | D-14, **Compuerta 0 del motor (MV)** | 4 | Nadie puede preguntar fuera del menú; la línea fija es visible sin desplazar; hay estado para "el motor tarda" (el filtro corre en el cliente) | **Alto: condicionada a la Compuerta 0** |
| **D-24** | **Escalafón y cuaderno de 14 técnicas**: ficha de técnica (nombre, dibujo, frase de Sabueso, casos que faltan), cinco rangos, regla del rango único sobre el apartado más avanzado, insignia de doble especialidad | `pantallas/12-escalafon.md` | 2 | 0,5 | D-17, prueba de nombres (D-33) | 4 | El cuaderno se lee en 360 px sin pellizcar; las técnicas no acreditadas se distinguen por forma además de por color; el rango **nunca baja** y la interfaz lo dice | Medio |
| **D-25** | **Expediente: dossier con fichas plegadas.** Plegada = nombre, oficio y etiquetas de atributo; retrato y frase de carácter al tocar; tira de lugares con origen rotulado | `pantallas/13-dossier.md` | 1,5 | 0 | D-10, `docs/propuesta-jugabilidad-expediente.md` §5 | 5 | La pantalla de 360 px del §5.2 se reproduce con ≤45 palabras de cabecera; el origen de la tira de orden está rotulado también en el texto alternativo | Medio |
| **D-26** | **Cuaderno del comisario**: marcas en color propio (petróleo) **y trazo propio**, gesto de rechazo por doble toque distinto del de marcar, registro de la marca rechazada | `pantallas/14-cuaderno.md` | 1,5 | 0,5 | D-25, D-11 | 5 | Una persona daltónica distingue marca propia de marca del comisario en el prototipo; el doble toque no colisiona con el zoom del navegador | **Alto: confundir las dos marcas mata el jueves** |
| **D-27** | **Contraprueba con casilla en negativo**: pregunta, selección de pistas, respuesta cuando sobra una pista, y **el compartir sigue en pantalla mientras tanto** | `pantallas/15-contraprueba.md` | 1 | 0 | D-26 | 5 | Fallar no cambia nada visible del resultado ni de la racha; se puede saltar | Bajo |
| **D-28** | **Estados de red y PWA**: offline con caso cacheado, offline sin caso, "nuevo caso en 3 h", prompt de instalación **tras el segundo caso resuelto**, actualización disponible | `pantallas/16-red-pwa.md` | 1 | 0 | D-12 | 6 | Los cuatro estados están dibujados; el prompt de instalación no aparece antes del segundo caso y se puede rechazar para siempre | Bajo |
| **D-29** | **Erratas y caso anulado** (PR2): botón de reportar con campo estructurado, respuesta inmediata, estado "caso anulado" en resultado, archivo y compartir | `pantallas/17-erratas.md` | 0,5 | 0 | D-17 | 6 | El estado anulado se ve en las tres superficies y no rompe la racha | Bajo |
| **D-30** | **Duelo por enlace** (spec v0, se implementa cuando haya backend): invitación, sala, resultado comparado | `pantallas/18-duelo.md` | 0,5 | 0 | D-17 | 8 | Existe la spec; queda marcada "fase 2, no se construye ahora" | Bajo |
| **D-31** | **Paywall que muestra el valor y se cierra sin trucos** (spec v0): qué te falta, plan anual por defecto, cerrar en un toque, sin cuenta atrás falsa | `pantallas/19-paywall.md` | 1 | 0,5 | `estratega-negocio` | 9 | La pantalla se puede cerrar con un solo toque, el botón de cerrar es igual de grande que el de comprar, y no hay ningún patrón oscuro de la lista de la CNMC | Bajo |

### Bloque D · Prototipos HTML y pruebas con personas

| id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho cuando | Riesgo |
|---|---|---|:-:|:-:|---|:-:|---|---|
| **D-32** | Prototipo jugable del **tablero de Escena** (HTML, un caso real, sin motor: estado precocinado) | `docs/diseno/prototipos/tablero-escena.html` | 1,5 | 0 | D-14 | 3 | Se juega con el pulgar en un móvil real del fundador; deshacer funciona; se puede meter en el prototipo de las pruebas | Bajo |
| **D-33** | Prototipo y protocolo de la **prueba de nombres del escalafón** (papel + hoja de anotación), 14 técnicas de Escena y 12 de Expediente | `docs/diseno/prototipos/nombres-escalafon.html` + `docs/diseno/ux/pruebas/protocolo-nombres.md` | 1 | 3 | `disenador-puzzles` (taxonomía) | 3-4 | El protocolo hace describir el razonamiento **antes** de mostrar ningún nombre; hoja de anotación lista para 5 personas | **Alto: bloquea la taxonomía, que bloquea escalafón, semana con carácter y la página `/tecnicas`** |
| **D-34** | Prototipo jugable del **interrogatorio** (menú vivo simulado sobre residuo precalculado, sin tutorial) | `docs/diseno/prototipos/interrogatorio.html` | 1,5 | 0 | D-23, Compuerta 0 | 4 | Un caso de miércoles y uno de martes de control, jugables sin explicación previa | Medio |
| **D-35** | Prototipo jugable de la **tabla del comisario** (16 marcas puestas, una falsa, gesto de rechazo) | `docs/diseno/prototipos/tabla-comisario.html` | 1,5 | 0 | D-26 | 4 | Se puede rechazar la marca falsa; el juego nunca dice "tienes un error"; funciona en móvil | Medio |
| **D-36** | **Hoja A / hoja B de cuatro manos, en papel**: dos hojas imprimibles en blanco y negro, con las pistas del otro en gris, más hoja de observación | `content/imprimibles/cuatro-manos-hoja-a.pdf`, `-hoja-b.pdf` + `docs/diseno/ux/pruebas/protocolo-cuatro-manos.md` | 1 | 3 | `disenador-puzzles` (reparto verificado con cierre alternado) | 4 | Las dos hojas se imprimen en A4 en blanco y negro y son legibles; la hoja de observación registra quién encadena cuántos pasos | Medio |
| **D-37** | **Pruebas de usabilidad con 5 personas, semana 5.** Cuatro bloques en una sesión de 45 min: tablero + resultado, interrogatorio, tabla del comisario, nombres del escalafón. Más la sesión aparte de cuatro manos en papel | `docs/diseno/ux/pruebas/informe-s5.md` | 2 | **8** | D-32..D-36 | 5 | 5 personas (1 casual, 1 fan, 1 competitivo, 1 familia, 1 docente; **2 de LatAm** entre ellas), grabadas con permiso, con los umbrales de §6 escritos antes | **Alto: es la única prueba con personas antes del código definitivo** |
| **D-38** | Correcciones de diseño derivadas de la prueba y segunda vuelta de los nombres que fallen | Revisión de las specs afectadas + `informe-s5.md` §correcciones | 1,5 | 1 | D-37 | 6 | Cada hallazgo tiene una decisión: se corrige, se descarta con motivo, o se aplaza con fecha | Medio |

### Bloque E · Compartir, vídeo, imprimibles, aterrizaje y OG

| id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho cuando | Riesgo |
|---|---|---|:-:|:-:|---|:-:|---|---|
| **D-39** | **Tarjetas de compartir**: 9:16 para Stories y 1:1 para feed, cuadrícula de cuadros sin spoiler, tiempo etiquetado **"declarado"**, versión de alto contraste, versión sin resultado (para quien falló) | `docs/diseno/ux/compartir.md` + plantillas SVG | 1,5 | 0,5 | D-17 | 3-4 | La cuadrícula de cuadros no revela ninguna posición ni el culpable; el texto se lee en la miniatura de WhatsApp; hay variante en alto contraste; no lleva marca ajena | Medio: es el motor del bucle viral y lo que más se mira |
| **D-40** | **Imagen OG** por familia de página (caso, archivo, landing, resultado compartido `/r/[id]`), generada por plantilla, **sin seguimiento** | `docs/diseno/ux/og.md` + plantillas | 1 | 0 | D-39, `desarrollador-frontend` | 5-6 | Una plantilla por familia, texto legible a 300 px de ancho, y `/r/[id]` genera la suya con el dato del caso | Bajo |
| **D-41** | **Página de aterrizaje**: portada con caso jugable por encima del pliegue, y la plantilla de las 9 landings de la rama de marca ajena con la frase de no afiliación en las primeras 60 palabras | `docs/diseno/ux/pantallas/20-aterrizaje.md` | 1,5 | 0,5 | D-14, `estratega-growth-seo`, **luz verde de `experto-legal`** | 6 | El caso del lunes es jugable sin desplazar en 360×640; Lighthouse móvil ≥90 en rendimiento y accesibilidad | Medio |
| **D-42** | **Plantillas de vídeo corto para `creador-social`**: 3 formatos (resuelve en 60 s, la regla del día, el momento del salto), con zona segura de TikTok/Reels, subtítulos quemados, tipografía de marca y un guion de estructura | `docs/diseno/plantillas-video.md` + `docs/diseno/prototipos/plantilla-video-9x16.html` | 1,5 | 0,5 | D-08, D-39, **D-06** | 7 | `creador-social` produce un vídeo con la plantilla **sin pedirme nada**; los subtítulos caen fuera de la zona de interfaz de las tres redes | Medio |
| **D-43** | **PDF de una página de Expediente** (muestra) y **hoja de trabajo en blanco imprimible**: los dos activos de producto del día 1 (`arbol-web-final.md` §10.1) | `content/imprimibles/expediente-muestra.pdf`, `content/imprimibles/hoja-en-blanco.pdf` | 1,5 | 0,5 | D-25, D-11 | 6-7 | Se imprimen en A4 en blanco y negro sin perder información; la hoja en blanco sirve para 4×4, 5×5 y 6×6; la solución razonada usa los nombres de técnica | Bajo, y es la pieza que más pide el perfil docente |
| **D-44** | Kit de beta: pantallazos, texto de invitación, primera hoja de "qué mirar" para los 100-300 de la lista de espera | `docs/diseno/ux/kit-beta.md` | 0,5 | 0,5 | D-06 | 7 | La invitación no usa ninguna marca ajena y no promete lo que no está construido | Bajo |

### Bloque F · Accesibilidad y cierre

| id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho cuando | Riesgo |
|---|---|---|:-:|:-:|---|:-:|---|---|
| **D-45** | **Especificación de teclado del tablero** (decisión D-009 §8.2 punto 3): Tab, flechas, teclas 1-6, Espacio/Enter, Escape, foco visible, `prefers-contrast` y `forced-colors`. Un solo documento, con "Enter coloca" unificado | `docs/diseno/ux/teclado.md` | 1 | 0 | D-14 | 2-3 | Un caso 5×5 se resuelve entero sin ratón ni pantalla táctil; el foco es visible en los dos temas | Medio: **es requisito B2B y compromiso de producto, no obligación legal** (decisión D-009 punto 27) |
| **D-46** | **Etiquetas para lector de pantalla** de todas las superficies: celda ("Ana, cocina, descartado"), pista, marca del comisario, reconstrucción, tarjeta de compartir | `docs/diseno/ux/accesibilidad.md` | 1 | 0 | D-45 | 3 | Cada componente de `componentes.md` tiene su cadena; las cadenas están en español neutro y no leen iconos como "imagen" | Medio |
| **D-47** | **Auditoría WCAG 2.2 AA** sobre lo construido, con lista de incumplimientos y responsable | `docs/diseno/ux/auditoria-wcag.md` | 1,5 | 0,5 | frontend, semana 7 | 8 | Contraste, foco, teclado, movimiento reducido, tamaño de texto ajustable y etiquetas comprobados pantalla a pantalla; cero incumplimientos abiertos de nivel A | Medio |
| **D-48** | Pulido de lanzamiento: revisión de las 20 superficies con el producto real en un móvil, con lista priorizada | `docs/diseno/ux/repaso-lanzamiento.md` | 1,5 | 2 | D-47 | 9 | El fundador y yo recorremos los 9 flujos en un móvil real y no queda ningún callejón sin salida | Medio |
| **D-49** | Congelar el sistema v1.0 y dejar el mantenimiento escrito (quién toca qué, cómo se añade un token, cómo se añade un icono) | `docs/diseno/ux/componentes.md` §mantenimiento | 0,5 | 0 | D-48 | 10 | Otro agente añade un icono siguiendo el documento sin preguntarme | Bajo |

**Totales.** 49 tareas · **≈57 días de agente** · **≈32 horas del fundador**, de las cuales **8 son la sesión de pruebas de la semana 5** y 6 más son las pruebas en papel de las semanas 3-4. El resto son decisiones de 30 minutos.

---

## 4. Calendario semana a semana

| Semana | Fechas | Qué sale de diseño | Horas del fundador | Lo que desbloquea |
|:-:|---|---|:-:|---|
| **1** | 8-13 sep | D-01, D-02, D-05, D-09, **D-13**, **D-14 (borrador)**, D-10 (mitad) | 2,5 | Frontend arranca el tablero con tokens reales, no con grises provisionales |
| **2** | 14-20 sep | **D-14 final**, D-15, D-16, **D-17**, D-03, D-12, D-10 (fin), D-45 | 3,5 | La pantalla de resultado, que es el punto 26 de la decisión D-009 |
| **3** | 21-27 sep | D-18, D-19, D-20, D-21, D-22, D-04, D-07, D-08, D-11, D-32, D-33, D-39, D-46 | 5,5 | Los prototipos y la prueba de nombres en papel |
| **4** | 28 sep-4 oct | D-23, D-24, D-34, D-35, **D-36 + sesión de cuatro manos** | 5 | El interrogatorio y la tabla del comisario listos para probar |
| **5** | 5-11 oct | **D-37: pruebas de usabilidad con 5 personas**, D-25, D-26, D-27, D-40 | 8 | Todo lo que cambie, cambia aquí y no después |
| **6** | 12-18 oct | D-38 (correcciones), D-28, D-29, D-41, D-43 | 2 | Aterrizaje e imprimibles del día 1 |
| **7** | 19-25 oct | **Beta cerrada**: D-42, D-44, apoyo a incidencias | 2 | `creador-social` empieza a producir |
| **8** | 26 oct-1 nov | D-30, D-47 (auditoría) | 1 | Nada sale a abierto con incumplimientos de nivel A |
| **9** | 2-8 nov | D-31, **D-48 (repaso en móvil real)** | 2,5 | Lanzamiento |
| **10** | 9-15 nov | D-49, apoyo, primeras correcciones con dato real | 0,5 | El sistema queda mantenible sin mí |

---

## 5. Estados de cada pantalla

La tabla que frontend usa como lista de comprobación. Ninguna pantalla se da por entregada sin las cinco columnas. "n/a" está permitido, "no lo pensé" no.

| # | Pantalla | Carga | Vacío | Error | Éxito | Offline |
|:-:|---|---|---|---|---|---|
| 1 | Portada del día | Esqueleto de cabecera, sin salto de maquetación | n/a (siempre hay caso) | "No hemos podido traer el caso" + reintentar | Botón Empezar activo | Caso cacheado: se juega; sin caché: "vuelve con conexión" y ofrece el vistazo |
| 2 | Tablero de Escena | Cuadrícula gris con ejes ya rotulados | Tablero sin colocaciones, con la primera sugerencia de Sabueso apagada | Colocación no guardada: aviso no modal + reintento silencioso | Todas las celdas resueltas: se activa Acusar | Se juega entero en local; indicador discreto "sin conexión, se guardará" |
| 3 | Panel de pistas | Tres pistas en esqueleto | n/a | Pista sin cargar: se marca esa pista, no el panel | — | Todas las pistas vienen con el caso |
| 4 | Acusar | Botón en espera con el texto, no un giro anónimo | n/a | "No se ha registrado la acusación": se guarda en cola y se avisa | Confirmación en una frase | Se acepta en local y se sincroniza; el resultado se muestra igual |
| 5 | Resultado (4 bloques) | Bloques en esqueleto en orden fijo | Sin racha previa: se explica qué es la racha en una línea | Estadísticas no disponibles: el bloque desaparece, no muestra ceros | Los cuatro bloques | Bloques 1, 2 y 4 sí; el bloque de comparación dice "cuando vuelvas a tener conexión" |
| 6 | Reconstrucción | Primer peldaño ya pintado antes de animar | n/a | Sin certificado: cae a "Paso a paso" en texto | Frase final + los tres botones | Funciona: el certificado viene con el caso |
| 7 | Sabueso | El perro olfateando, ≤400 ms | Sin usos: el perro dormido, con el motivo | Sin certificado: "hoy Sabueso no encuentra el rastro", no cuenta el uso | Pista señalada | Funciona en local |
| 8 | Sobres / vistazo | — | Vistazo ya jugado: "vuelve mañana" + archivo | — | Sobre nuevo con animación corta | Sí |
| 9 | Onboarding | — | n/a | — | "Ya sabes jugar" + caso de hoy | Sí, va empaquetado |
| 10 | Racha y archivo | Calendario en esqueleto | Primer día: calendario con un solo hueco y una frase | "No hemos podido traer tu historial" + reintentar | — | Últimos 7 días cacheados; el resto en gris con candado de red, no de Premium |
| 11 | Interrogatorio | Menú en esqueleto (el filtro corre en cliente, ≤150 ms) | Cero preguntas restantes: el botón se apaga con motivo | Menú vacío = fallo de invariante: se registra y se cae a caso clásico con las pistas restantes | Respuesta con retrato | Sí: el residuo está en el cliente |
| 12 | Escalafón y cuaderno | Fichas en esqueleto | Cero técnicas: cuaderno con las 14 en gris y una frase de Sabueso | — | Técnica acreditada: animación breve, saltable | Se muestra el último estado conocido, fechado |
| 13 | Dossier (Expediente) | Fichas plegadas ya visibles | n/a | — | — | Sí |
| 14 | Cuaderno del comisario | Marcas del comisario aparecen ya puestas, no se animan una a una | Cuaderno con 16 marcas: nunca está vacío (es su razón de ser) | Rechazo no guardado: se reintenta en local | Marca falsa rechazada: registro visible | Sí |
| 15 | Contraprueba | — | No se ofrece en este caso: sencillamente no aparece | — | "Con esas dos bastaba" | Sí |
| 16 | Compartir | Tarjeta en esqueleto | — | Sin imagen generada: se copia el texto y se avisa | Copiado / compartido | Copia el texto; la imagen se genera al volver |
| 17 | Erratas | — | Sin reportes: n/a | Envío fallido: se guarda y se reintenta | "Lo miramos en 12 h" | Se encola |
| 18 | Duelo | Sala en espera | Nadie ha entrado aún | Enlace caducado: página del día 8 | Comparación | Requiere conexión, y lo dice antes de entrar |
| 19 | Paywall | — | — | Pago no disponible: se cierra sin culpa | — | "Necesitas conexión" |
| 20 | Aterrizaje | Caso jugable renderizado en servidor: sin estado de carga | — | — | — | Página cacheada por el trabajador de servicio |

---

## 6. Pruebas con personas: qué se prueba, con quién y con qué umbral

**La sesión de la semana 5 (D-37) es la capa de diseño, no sustituye a las pruebas de producto** de `docs/propuesta-jugabilidad.md` §6 (12 personas para el interrogatorio, 10 para reconstrucción, 6 parejas para cuatro manos). Lo digo por escrito para que nadie dé por validado con 5 personas algo que exige 12. Lo que sí hago en la semana 5 es adelantar las señales de diseño, que con 5 personas son fiables cuando el fallo es grande.

**Reclutamiento (horas del fundador, semana 4):** 5 personas, una por perfil de `docs/diseno/panel-jugadores-jugabilidad.md`, **dos de ellas de LatAm**, ninguna del entorno cercano que ya conozca el proyecto. 45 minutos por sesión, remota con pantalla compartida en su propio móvil.

| Bloque | Duración | Qué mido | Umbral fijado antes del dato |
|---|:-:|---|---|
| **A · Tablero y resultado** | 15 min | Tiempo hasta la primera colocación sin ayuda; usos de deshacer; ¿encuentran las pistas sin que se les diga? | **5 de 5** colocan sin pedir ayuda; **5 de 5** abren el panel de pistas solos; si alguien no encuentra deshacer, deshacer cambia de sitio |
| **B · Interrogatorio** | 10 min | ¿Alguien dice "pregunté mal"? Verbo espontáneo al describir lo que hizo | **Una sola persona que diga "pregunté mal"** obliga a revisar el filtro y la línea fija antes de construir |
| **C · Tabla del comisario** | 10 min | ¿Distinguen su marca de la del comisario? ¿Encuentran la falsa? ¿Descubren el gesto de rechazo sin ayuda? | **5 de 5** distinguen las marcas (es lo que valida el doble código color+trazo); **≥3 de 5** encuentran el gesto sin ayuda, o el gesto se cambia |
| **D · Nombres del escalafón** | 10 min | Cuántas de las 14 técnicas reciben, de ≥3 personas, una descripción que un tercero mapea al nombre | **≥8 de 14** → se implementa. 5-7 → se reescriben y se repite. <5 tras dos vueltas → el escalafón sale con 8-10 técnicas (heredado de §6 prueba 1) |
| **E · Cuatro manos en papel** | sesión aparte | Finalización; ¿alguien encadena más de dos deducciones seguidas?; ¿dicen que lo repetirían? | Los de la prueba 4 de §6: finalización ≥70 %, **cero** parejas con más de dos seguidas, ≥4 de 6 lo repetirían |

**Qué hago con lo que salga.** Cada hallazgo entra en `informe-s5.md` con una de tres etiquetas: *se corrige esta semana*, *se descarta con motivo escrito*, *se aplaza con fecha*. Nada queda como "a tener en cuenta".

---

## 7. Compuertas

| Compuerta | Cuándo | Qué debe cumplirse para pasar | Si no se cumple |
|---|:-:|---|---|
| **G-D1 · Marca publicable** | Semana 3 | `experto-legal` firma logotipo, icono y mascota, y existe el papel de cesión de la ilustración (o el dictamen sobre ilustración generada con IA) | No sale nada de marca fuera del repositorio. La beta usa el nombre en clave y una marca provisional |
| **G-D2 · Iconos sin doble lectura** | Semana 4 | Ningún icono de la leyenda admite dos lecturas y todos se distinguen a 24 px en escala de grises | El icono dudoso se retira de la leyenda v1 y esa pista pasa a texto |
| **G-D3 · Taxonomía de técnicas** | Semana 5 | ≥8 de 14 nombres reconocidos (prueba D) | Se reescriben y se repite; a la segunda, el escalafón sale con 8-10 técnicas y la página `/tecnicas` no se publica |
| **G-D4 · Diseño listo para beta** | Semana 6 | Las 20 pantallas tienen sus cinco estados y las correcciones de la semana 5 aplicadas | La beta sale con las pantallas incompletas marcadas y una lista visible de "esto todavía no está" |
| **G-D5 · Accesibilidad** | Semana 8 | Cero incumplimientos abiertos de nivel A; teclado completo en el tablero; movimiento reducido con equivalente estático | No se lanza en abierto: es requisito B2B y compromiso de producto (decisión D-009 punto 27) |

---

## 8. Lo que diseño necesita de otras áreas, y cuándo

| Necesito | De quién | Para cuándo | Sin ello |
|---|---|:-:|---|
| Contrato del certificado del solver serializado (JSON de §3.2 de `propuesta-jugabilidad.md`) | `ingeniero-motor-puzzles` | **Semana 1** | No puedo especificar reconstrucción, escalafón ni Sabueso: los tres pintan el mismo dato |
| Contrato `cells(pista, estado)` de cada predicado | `ingeniero-motor-puzzles` | **Semana 1** | "Tirar del hilo" pasa de 0,5 días a 3, y la spec del tablero se queda sin la mitad de sus estados |
| Vocabulario cerrado de sospechosos, objetos y lugares | `disenador-puzzles` | Semana 2 | No puedo dibujar los iconos: no sé cuántos ni cuáles |
| Taxonomía de las 14 + 12 técnicas con nombres candidatos | `disenador-puzzles` | Semana 3 | No hay prueba de nombres en la semana 5 y el escalafón se retrasa a después del lanzamiento |
| Resultado de la **Compuerta 0** (tasa de aceptación de MV) | `ingeniero-motor-puzzles` | **Semana 4** | El interrogatorio se especifica a ciegas; si MV falla, se tira una semana de diseño |
| Reparto verificado de la hoja A / hoja B con cierre alternado | `disenador-puzzles` | Semana 4 | La prueba de cuatro manos mide una hoja mal repartida y da un falso negativo |
| Textos de cabecera, portadas y frases de Sabueso | `guionista-misterio` | Semanas 2 y 5 | Las pantallas se prueban con texto provisional, que es exactamente lo que no hay que probar |
| F8 devuelve celdas vacías y erróneas por separado | `desarrollador-backend` | Semana 2 | La pantalla de resultado no puede cumplir el punto 26 de la decisión D-009 |
| Luz verde sobre uso de marca ajena en landings y OG | `experto-legal` | Semana 5 | No se diseña la rama de landings: es bloqueante del día 1 según `arbol-web-final.md` §10.1 |
| Eventos de analítica acordados por pantalla | `analista-datos` | Semana 2 | Los flujos se entregan sin instrumentación y en el mes 2 no sabemos dónde abandona la gente |
| Reclutamiento de las 5 personas y de las 6 parejas | fundador | Semana 4 | No hay prueba en la semana 5, que es la única antes del código definitivo |

---

## 9. Riesgos del área, ordenados por lo que cuesta arreglarlos tarde

1. **La ilustración de la mascota sin papel firmado.** Es el único riesgo del plan que no se arregla con tiempo ni con trabajo: sin cesión escrita, el activo más valioso de la marca no es del proyecto. Mitigación: G-D1 en la semana 3 y no antes de la semana 3 se publica nada.
2. **Un icono con doble lectura.** Cuesta un día arreglarlo en la semana 4 y cuesta una errata pública y una anulación en el mes 2. Mitigación: G-D2 con prueba en escala de grises.
3. **La confusión entre la marca del jugador y la del comisario.** Mata el jueves entero, que es el modo diferencial. Mitigación: doble código (color petróleo + trazo discontinuo + esquina) y bloque C de la prueba, con umbral de 5 de 5.
4. **El 6×6 del domingo en 360 px.** Es la pantalla donde la ergonomía y la ambición chocan. Mitigación: se prototipa en la semana 3, se prueba en un móvil real del fundador, y si no cabe con objetivo táctil suficiente, el domingo se resuelve con desplazamiento vertical por plantas, no encogiendo la celda.
5. **La spec de resultado llega tarde y frontend improvisa.** Está señalada como bloqueante en la decisión D-009 y por eso es la única tarea de la semana 2 que no puede deslizarse.
6. **Conflicto de fechas heredado, que no resuelvo yo.** `supuestos.md` fija el lanzamiento en las semanas 9-10; `propuesta-jugabilidad.md` §7 decisión 3 recomienda semanas 12-14 con las firmas dentro. Este plan está escrito contra 9-10. **Si el fundador mueve la fecha a 12-14, lo que gana diseño son dos semanas de pulido y una segunda ronda de pruebas con personas; nada de este plan se cae.** Lo dejo registrado para que la decisión se tome mirando el calendario completo y no el de un área.

---

*Cambios a este documento: los registra `disenador-ux-ui` con fecha y motivo, y avisa a `desarrollador-frontend` de cualquier cambio en `tokens.json` o en `componentes.md`.*
