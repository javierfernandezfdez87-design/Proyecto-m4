# Roadmap del proyecto

Autor: `director-producto`. Fecha: 7 de septiembre de 2026. **Versión 1.0.**
Este documento es la **única versión de la verdad sobre fechas, alcance y reparto**. Donde un plan de área diga otra cosa, gana este; los planes de área siguen siendo la referencia de *cómo* se hace cada cosa.

Fuentes consolidadas: `docs/roadmap/supuestos.md` y los ocho planes de área (`plan-motor.md`, `plan-frontend.md`, `plan-backend.md`, `plan-diseno.md`, `plan-contenido.md`, `plan-crecimiento.md`, `plan-legal.md`, `plan-datos-calidad-negocio.md`), `docs/decisiones.md` (D-001 a D-011), `docs/propuesta-jugabilidad.md` §7, `docs/propuesta-jugabilidad-expediente.md` §10, `docs/propuesta-mejoras-producto.md` §8, `docs/catalogo-productos.md`, `docs/arbol-web-final.md`.

**Alerta D-006, comprobada hoy:** ninguno de los cinco disparadores se ha cumplido (cero usuarios, cero prensa, cero vídeo, cero conversación B2B o editorial, ningún tercero detectado con nombre parecido). Este roadmap **programa deliberadamente dos de ellos** y por eso no espera al disparador: fija la presentación en la OEPM el **viernes 30 de octubre de 2026**, antes del lanzamiento (resolución R5 de §2 y decisión D-011).

---

## 1. Resumen en una página

### 1.1 Fechas clave

| Hito | Fecha | Semana |
|---|---|---|
| Arranque | lunes **7 de septiembre de 2026** | S1 |
| Contratos congelados (CP-0) | viernes **11 de septiembre** | S1 |
| Suelo del producto: unicidad, «sin adivinar», dificultad medida (CP-2) | domingo **27 de septiembre** | S3 |
| Compuerta 0-A: decide si el interrogatorio entra (CP-3) | domingo **11 de octubre** | S5 |
| Beta con contenido y con derechos (CP-5) | domingo **18 de octubre** | S6 |
| **Beta cerrada, 100-300 personas** | **19-25 de octubre** | S7 |
| Primer jueves de Expediente en beta (CP-7) | jueves **29 de octubre** | S8 |
| **OEPM presentada** (CP-8) y **decisión ir / no ir** (CP-9) | viernes **30 de octubre** | S8 |
| Congelación de código y contenido (CP-10) | domingo **1 de noviembre** | S9 |
| **Día L · lanzamiento público** | **martes 3 de noviembre** | S9 |
| Nota de prensa a 10-14 medios | martes **10 de noviembre** | S10 |
| Día 30 | jueves **3 de diciembre** | S13 |
| Decisión de Premium (tres condiciones a 60 días) | sábado **2 de enero de 2027** | S17 |
| **Día 90 · panel continuar/parar/ajustar** | lunes **1 de febrero de 2027** | S22 |
| Cierre de fase 2 / mes 6 del proyecto | **1-7 de marzo de 2027** | S26 |

**Ventana de retraso del día L: martes 10 de noviembre.** Si el 10 tampoco, no se lanza en diciembre: se va al **12 de enero de 2027**. Diciembre no es fecha de lanzamiento y perder enero cuesta el mejor mes del año de esta categoría.

Correcciones de calendario que este documento cierra: la semana 1 empieza el **lunes 7**, no el 8 (los tres planes que lo señalaron tenían razón; `supuestos.md` queda corregido). El **día 90 es el 1 de febrero de 2027**, no el 31 de enero: 90 días naturales desde el 3 de noviembre. El **mes 6 del proyecto es marzo de 2027**; el mes 6 de vida del producto (mayo de 2027) queda fuera de este roadmap.

### 1.2 Qué se lanza exactamente el día L (alcance cerrado)

Esta lista es cerrada. Nada que no esté aquí se publica el 3 de noviembre, y nada de aquí se corta sin una entrada nueva en `docs/decisiones.md`.

1. **La semana completa de siete formatos.** Lunes «El corto» (4×4, sobres que se abren por progreso, abre con tres pistas) · martes «El clásico» (5×5) · miércoles «El interrogatorio» de menú vivo *o* un segundo clásico según CP-3 · **jueves «Expediente», la tabla del comisario** con contraprueba y motivo, según CP-7 · viernes «De disparate» con rastro del objeto y sin fallecidos · sábado «El difícil» a puerta cerrada (celdas bloqueadas) · domingo «El XL» 6×6 de dos plantas.
2. **Un caso al día, una racha, un cuaderno**, comunes a los dos modos.
3. **Reconstrucción animada** de 20-25 segundos pintada desde el certificado del solver, con «saltar» recordado, «volver a verlo» y «paso a paso» con el nombre de la técnica en cada peldaño.
4. **Escalafón y cuaderno de técnicas**, con acreditación automática por técnica exigida y resuelta sin ayuda. El día L sale con el catálogo de técnicas que el motor reconoce; se completa a 12-15 en S10.
5. **Sabueso de dos niveles**, un uso por caso, calculado en el servidor, que **nunca da señal de error**.
6. **Vistazo 3×3** que no toca la racha. Diario si el catálogo llega a 200 estructuras distintas; si no, semanal, y se anuncia como semanal desde el primer día.
7. **Racha por número de caso** con gracia de un día cada 30, día concedido por incidencia o errata, jueves neutro las cuatro primeras semanas de Expediente, y calendario de 30 días con cinco estados explicados al tocarlos.
8. **Archivo de 7 días** con aviso de caducidad; el día 8 lleva a la página de explicación, nunca a un 404.
9. **Compartir**: tarjeta 9:16 y 1:1 sin posiciones ni nombres, con paleta de alto contraste y línea resumen para lector de pantalla, Web Share con repliegue, `/r/[id]` servido en servidor y caducidad de 30 días. El tiempo se etiqueta **«declarado»**, nunca «verificado».
10. **Cuenta opcional** por enlace mágico, con sincronización entre dispositivos, exportación y **borrado en un clic**.
11. **PWA instalable**, con el caso de hoy y el de mañana en caché, y una actualización que no rompe una partida en curso.
12. **Correo diario «El caso de hoy»** a las 08:00 de la hora local de cada suscriptor, doble consentimiento y baja en un clic.
13. **Las 36 URL del día 1** (más las cinco de Expediente si CP-7 está verde) con su renderizado, un solo bloque de datos estructurados por página, sitemaps, `robots.txt` con permiso explícito a los rastreadores de IA y `llms.txt`.
14. **`/erratas` y el compromiso público de anulación** en menos de 12 horas desde el tercer aviso coincidente, con reporte estructurado por pista, respuesta inmediata y reparación automática de la racha.
15. **Los cinco textos legales** publicados y enlazados desde el pie y desde cada landing.
16. **Analítica completa** con la propiedad `modo` en todos los eventos.
17. **Accesibilidad**: teclado completo en el tablero, etiquetas de lector de pantalla, `prefers-reduced-motion`, `forced-colors` y compartir accesible. No se corta.

**Lo que no sale el día L, y cuándo sale:** interrogatorio si CP-3 salió roja (S11-S12) · Expediente si CP-7 salió roja (S11) · duelos por enlace (S11-S13, condicionados a H1) · reparto recurrente con canon activo (S12-S13) · especiales mensuales (desde S11) · vis a vis de Expediente (S15-S17, si C-0B verde y con tres pistas de apertura) · Premium (decisión el 2 de enero, construcción S14-S17 si se cumplen las tres condiciones) · packs PDF de pago y prueba de precio libre (enero) · cuatro manos digital (S18-S20, solo si el papel pasa sus tres compuertas) · licencia B2B (conversación desde finales de enero, contrato listo antes) · `/ar/` para Argentina (no antes del mes 5 y con dos condiciones) · caso a la carta (dos meses publicando sin incidencias) · caso invertido, doble franja, editor, app nativa (condicionada a D30 > 25 %).

### 1.3 Esfuerzo por área

«Día de agente» es una sesión enfocada con entregable, pruebas y documentación mínima; no es una jornada humana.

| Área | S1-S10 (hasta estabilizar) | S11-S26 (fase 2) | Total |
|---|---:|---:|---:|
| Motor de puzzles | 80 (77,5 comprometidos + 2,5 de reserva) | ≈27 condicionados | ≈107 |
| Diseño de producto y marca | 57 | ≈6 | ≈63 |
| Frontend | 54 | ≈20 | ≈74 |
| Datos, calidad y negocio | 45 | ≈18 | ≈63 |
| Crecimiento (SEO, contenidos, redes) | ≈40 | ≈28 | 68 |
| Backend | 34,5 | 9 | 43,5 |
| Contenido narrativo | ≈24 | ≈20 | ≈44 |
| Legal | ≈16 | ≈10 | ≈26 |
| **Total** | **≈350** | **≈138** | **≈488** |

350 días de agente en diez semanas son **35 días de agente por semana repartidos entre catorce agentes**: 2,5 por agente y semana de media, con cuatro áreas cargadas (motor 8, diseño 5,7, frontend 5,4, crecimiento 4). Es asumible con el criterio de D-009. **La única área sin holgura es el motor**, y por eso lleva compuerta propia de capacidad al final de S2 (resolución R6).

### 1.4 Horas del fundador: el número que de verdad manda

Si se suman las horas que pide cada plan sin tocar nada, salen **≈291 horas en diez semanas: 29 por semana**. Es inviable y hay que decirlo antes que ninguna otra cosa. La suma bruta es engañosa por dos motivos: tres áreas presupuestan por separado **la misma prueba con personas** (la de nombres del escalafón la piden diseño, motor y datos) y cuatro áreas presupuestan por separado **la misma firma humana de casos** (contenido, motor, calidad y backend).

| Área | Horas que pide su plan (S1-S10) | Tras consolidar |
|---|---:|---:|
| Crecimiento | 62 | 42,5 (mínimo irreducible de su §18) |
| Frontend | 46,5 | 22 (fusionadas con las pruebas de dispositivo de calidad y con el repaso de diseño) |
| Datos, calidad y negocio | 58 (26,5 + 31,5 de pruebas) | 31 (las 13 pruebas absorben las de diseño y motor) |
| Diseño | 32 | 6 (D-37 se fusiona con la tanda 1 de pruebas; D-33 y D-36, con las tandas 0) |
| Motor | 30 | 9 (firma humana fuera; queda contratos, veredictos y CLI a ciegas) |
| Backend | 27 | 12 (contratos y guardia; la firma humana sale del área) |
| Contenido (firma humana) | 20 | 14 (2 h/semana desde S4, presupuesto único de todo el proyecto) |
| Legal | 15,5 | 15,5 (no se toca: es casi todo irreducible) |
| **Total** | **291** | **≈152** |

Con un techo de 10 h por semana (y 14 en las dos semanas críticas) el presupuesto real es **≈111 horas**. La diferencia con las 152 se cierra moviendo trabajo, no fingiendo que cabe: ver §7.

| Semana | Horas del fundador | Por encima de 10 | Qué se hace para no pasarse |
|:-:|:-:|:-:|---|
| S1 | 10 | — | Las cuatro búsquedas de marca y las tres comprobaciones de SERP son irreducibles (6,25 h). La congelación de contratos se hace en **una sola sesión de 2 h** con los cuatro agentes técnicos, no en cuatro conversaciones |
| S2 | 10 | — | La prueba de nombres (2,5 h) cubre a la vez a diseño, motor y datos. La aprobación de la spec de resultado y el cierre de D-004 caben en la misma tarde |
| S3 | 9 | — | La prueba de cuatro manos en papel (4 h) se hace en fin de semana y en una sola sesión con seis parejas, no en seis citas |
| S4 | 10 | — | Los contactos de prensa (2 h) no se delegan. La grabación de vídeos pasa de 3 h a 2 h usando maquetas de alta fidelidad para cuatro de los doce |
| S5 | **11** | **+1** | Se fusionan la sesión de diseño de 5 personas (8 h en el plan de diseño) con la tanda 1 de pruebas de producto (5 h): son las mismas personas y el mismo día. Ahorro: 8 h |
| S6 | **12** | **+2** | Se acepta el pico: es la semana de la compuerta de beta. Se saca de aquí el kit de prensa (biografía y foto, 1,5 h) a S8 |
| S7 | **14** | **+4** | Semana de beta. Se acepta. Se saca la prueba PX-6 (vis a vis, 5 h) a S11: depende de una compuerta que aún no se ha medido |
| S8 | **12** | **+2** | Se acepta. **La firma de los 92 casos del lote 2 no se hace aquí**: se reparte a 2 h/semana entre S8 y S12 |
| S9 | **14** | **+4** | Semana de lanzamiento. Se acepta. Se saca de aquí la presentación de la OEPM (a S8, ver R5) y el repaso en móvil (a S8) |
| S10 | 9 | — | La nota de prensa personalizada (4 h) es lo único irreducible |

**Regla de gobierno de las horas:** el techo es 10 h por semana. Las cuatro semanas por encima (S6, S7, S8, S9) están aprobadas de antemano y son las cuatro últimas antes del lanzamiento. Si en alguna semana la previsión supera el techo sin estar en esa lista, se corta alcance, no se roban horas: el orden de corte está en §4.3.

Desde S11 el compromiso baja a **4-6 h/semana** sostenidas, más 3 h el día 1 de cada mes para el panel GEO y 2 h/semana de firma humana.

### 1.5 Presupuesto hasta el mes 6 (marzo de 2027)

| Línea | Mínimo | Recomendado | Techo |
|---|---:|---:|---:|
| Infraestructura (Vercel Pro, Supabase Pro, PostHog UE, Resend), 7 meses | 350 € | 550 € | 800 € |
| Dominios (`.com`, `.es`, `.app`) y renovación a dos años | 40 € | 70 € | 90 € |
| **OEPM, marca mixta, clases 9, 41 y 16** | 340 € | 340 € | 340 € |
| OEPM, segunda solicitud denominativa (opcional) | 0 € | 340 € | 340 € |
| Abogado y agente de PI antes de lanzar (puntos 1, 3 y 4 de `plan-legal.md` §8) | 1.150 € | 2.400 € | 3.300 € |
| Ilustración de la mascota con cesión escrita en exclusiva | 0 € (generada, con dictamen de titularidad aparte) | 500 € | 800 € |
| Pruebas con personas (incentivos, material, aula) | 400 € | 500 € | 600 € |
| Dispositivo Android de gama media real | 0 € (si ya hay uno) | 175 € | 200 € |
| Unidades de Semrush | 0 € | 150 € | 250 € |
| **EUIPO** con prioridad, clases 9, 41 y 16 (solo si el día 90 va verde) | 0 € | 1.050 € | 1.850 € (con agente) |
| Abogado de Premium y B2B (puntos 5, 6 y 9) | 0 € | 700 € | 2.600 € |
| Revisor humano de casos (solo si H8 se refuta), 4 meses | 0 € | 0 € | 1.600 € |
| **Total hasta marzo de 2027** | **≈2.280 €** | **≈6.775 €** | **≈12.770 €** |

**Recomendación:** el escenario recomendado, con dos matices. El primero, **la ilustración de la mascota se encarga a una persona con contrato de cesión en exclusiva** (arts. 43 y 45 TRLPI): 500 € es barato para el activo de marca más valioso del proyecto, y la titularidad de lo generado con IA en la UE no es pacífica. El segundo, **la EUIPO no se decide hoy**: es una consecuencia del criterio del día 90 y su ventana llega hasta el 30 de abril de 2027.

El coste recurrente de operación antes de cualquier ingreso es de **50-70 €/mes al lanzamiento** y sube a 95-110 €/mes con 50.000 usuarios mensuales. Regla escrita antes del dato: si el coste proyectado supera 100 €/mes antes de los 50.000 usuarios mensuales, **se recorta analítica, no producto**.

---

## 2. Contradicciones entre planes, resueltas

Las ocho resoluciones se registran juntas como **D-011** en `docs/decisiones.md`.

### R1 · La fecha de lanzamiento se queda en la semana 9-10. Día L: martes 3 de noviembre

**El choque.** `supuestos.md` fija el lanzamiento en las semanas 9-10 y seis de los ocho planes están escritos contra esa fecha, con repliegues escritos. `docs/propuesta-jugabilidad.md` §7, decisión 3, recomienda la semana 12-14 «con el interrogatorio y el escalafón dentro». Backend lo eleva como su riesgo R-01 y pide decisión antes del final de S2; diseño lo registra en su riesgo 6.

**Decisión: semana 9. Día L el martes 3 de noviembre, con ventana de retraso al martes 10.**

Tres argumentos, en orden de peso:

1. **Las dos semanas de más no compran lo que dicen comprar.** El argumento de la semana 12-14 era meter el interrogatorio y el escalafón. Pero el interrogatorio no depende del tiempo: depende de una **compuerta de resultado** (τ ≥ 1 %, δ ≥ 1.000, β ≥ 30 % sobre 10.000 candidatos) que se mide en S5. Si sale roja, no entra ni en la semana 14 ni en la 20. Y el escalafón ya está en el alcance del día L: el cuaderno es frontend en S5 y la acreditación es backend en S3; lo que queda para S10 es afinar el catálogo de técnicas de 8-10 a 12-15, que no es condición de lanzamiento. Se pagarían dos semanas por algo que ya se tiene o que dos semanas no arreglan.
2. **Retrasar dos semanas es retrasar ocho.** La semana 12-14 cae entre el 30 de noviembre y el 14 de diciembre. Diciembre tiene dos agujeros de calendario, es el peor mes para prensa y para B2B, y enero es el mejor mes del año para esta categoría (propósitos, tiempo libre, hábito nuevo). Un lanzamiento el 8 de diciembre no se distingue de un lanzamiento en enero, salvo en que gasta la única primera vez que hay en la peor semana posible.
3. **D-009 quitó el recorte por capacidad pero mantuvo la ventana de mercado** como uno de los tres límites que el cómputo no resuelve. La ola de marca del género tiene 6-12 meses. La fecha es una decisión consciente, y la decisión es noviembre.

**Lo que se acepta a cambio, escrito para que nadie lo descubra después:** el miércoles puede salir como «clásico» si CP-3 va roja; el escalafón sale con el catálogo de técnicas que TR reconozca y se completa en S10; y no hay holgura en el motor (ver R6). **Lo que no se acepta:** recortar accesibilidad, tests, firma humana de casos o la promesa de solución única para llegar a la fecha. Si algo de eso peligra, se mueve la fecha al 10 de noviembre.

### R2 · Expediente entra el día L, con la compuerta y el repliegue ya construidos

**El choque.** `supuestos.md` mete el jueves de Expediente en el alcance del lanzamiento. `catalogo-productos.md` v1.1 lo pone en las semanas 10-14 y `arbol-web-final.md` asume ese escenario dejando cinco URL en P1. Frontend pide la decisión **antes de S4** (medio día ahora, tres días en S8) y la registra como su riesgo R10. Motor dice que cabe, pero deja **un solo jueves de rodaje** antes de publicar y lo llama su riesgo número uno.

**Decisión: sí, el jueves de Expediente entra el día L.** Con tres condiciones que la hacen defendible:

1. **Compuerta dura CP-7, el jueves 29 de octubre.** Un jueves completo publicado en la beta, con unicidad, «sin adivinar», no redundancia, tabla del comisario y contraprueba, y el test de acuerdo cuaderno↔residuo en verde.
2. **Repliegue de coste cero y ya construido.** Si CP-7 sale roja, el jueves del día L se publica como Escena «a puerta cerrada» —que ya está construido en S2 para el sábado— y Expediente entra en S11 con usuarios reales probándolo. No hay que escribir una línea nueva para replegarse.
3. **Frontend recibe la decisión hoy**, no en S8: el paquete F-40 de cinco URL se planifica desde ya, y las cinco entran o no según CP-7.

**Y de paso se cierra la pregunta §8.4 del plan de motor:** el jueves es Expediente y **solo** Expediente; el formato «a puerta cerrada» de Escena se mueve al **sábado**. La composición de los 120 casos no cambia: 102 de Escena, 17 jueves de Expediente y 1 de reserva.

Por qué se decide así y no al revés: el jueves de Expediente es la mitad de la tesis del producto (preguntar antes en Escena, demostrar después en Expediente) y es lo que da acceso al racimo de demanda de Murdle, que son 5.660 búsquedas que hoy no atacamos. Lanzar sin él es lanzar con media tesis. Y el coste del error está acotado por construcción, que es la única razón por la que una apuesta así se puede firmar.

### R3 · El solver va al servidor. El residuo se calcula en el cliente

**El choque.** `docs/propuesta-jugabilidad.md` lista «solver en cliente» como dependencia del interrogatorio (V4) y de Sabueso (V11), y diseño especifica el interrogatorio con el filtro corriendo en el cliente en menos de 150 ms. El catálogo prohíbe que la solución viaje al cliente antes de acusar (F5, verificable inspeccionando la respuesta de red). Frontend y backend llevan las cuatro acciones al servidor por anticheat. Y el propio plan de motor dice, con honestidad, que **el residuo es derivable en el cliente: eso es el juego**.

**Decisión, con la distinción que resuelve las dos cosas a la vez:**

> **El cliente puede calcular el residuo a partir de las pistas que ya tiene. El cliente nunca recibe la respuesta a una pregunta que el jugador no ha formulado.**

En consecuencia:

- **Van al servidor**, con el estado del tablero como cuerpo de la petición: Comprobar, Sabueso, acusar y el menú del interrogatorio. Las respuestas del interrogatorio son la solución troceada; un menú vivo calculado en el navegador exige tener esas respuestas en el navegador.
- **Se queda en el cliente**: el residuo del cuaderno, tirar del hilo, las anotaciones, el deshacer, el cronómetro y el juego entero.
- **El motor MV no cambia de código, cambia de sitio.** La misma pieza `engine/mv/` se ejecuta en una función de servidor. Se añade un presupuesto de latencia: **300 ms en el percentil 75** para la respuesta del menú, y el estado de espera que diseño ya tiene especificado («el motor tarda»).
- **Consecuencia que se dice en pantalla, no se disimula:** esas cuatro acciones **no funcionan sin conexión**. El resto del juego sí. Acusar se encola y se resuelve al reconectar, con estado «pendiente» explícito, y nunca se pierde progreso.

Esto obliga a corregir dos documentos: la dependencia «solver en cliente» de `propuesta-jugabilidad.md` §5 y la nota de diseño D-23 sobre el filtro en cliente. Los corrigen sus autores.

### R4 · Medianoche local del dispositivo. El número de caso es la clave canónica

**El choque.** D-007 punto 4 cerró que el caso cambia a **medianoche de la hora local del dispositivo**. Pero frontend planifica `/` como SSG diario anclado a las 00:00 de Europa/Madrid, y lo señala en su contradicción 3: un jugador en México vería el caso «de hoy» de España durante siete horas.

**Decisión: se mantiene la medianoche local, y la implementación es la de backend C4, que ya está diseñada:**

- El servidor expone `/api/calendario` con la ventana **[hoy−7, hoy+1]** en referencia UTC. Cada entrada lleva número de caso, fecha civil, modo, `disponible_desde` y estado. **El cliente elige por su fecha civil local.** Esto resuelve a la vez el archivo de siete días y la precarga del caso de mañana para la PWA.
- **Ventana de aceptación precisa:** el contenido del caso `N` se sirve desde `D−1 10:00 UTC` (la medianoche más temprana del planeta) y un intento contra `N` se acepta hasta `D+1 12:00 UTC` (la más tardía). Fuera de esa ventana, `409 caso_fuera_de_ventana`. Un reloj adelantado no consigue el caso de pasado mañana.
- **El número de caso, no la fecha, es la clave canónica** en todo el sistema: racha, archivo, compartir, correo, escalafón y microcopy. La interfaz habla del número de caso, nunca de la fecha.
- **Consecuencia para frontend:** `/` deja de ser SSG anclado a Madrid. El contenido se genera estáticamente por número de caso y la **selección del número se hace en el borde** según la fecha civil declarada, con `Cache-Control` por número y no por fecha. `/caso/[hoy]` sigue respondiendo 302 a `/`.
- **Huso declarado con límite:** se puede cambiar una vez cada 24 horas; un cambio de ≥5 horas concede el día saltado por viaje al este como máximo una vez cada 30 días. Sin ese límite, alternar zona permite cobrar días de racha.
- **La suite de reloj simulado con sus nueve casos es compuerta** (CP-2, fin de S3). Sin ella no se publica ninguna promesa sobre la racha, ni en portada ni en el correo.

### R5 · La OEPM se presenta el viernes 30 de octubre, con tres clases, por ≈340 €

**El choque.** Legal recomienda presentar en la semana 8, antes del lanzamiento. Crecimiento fija el viernes 6 de noviembre, el día hábil anterior a la nota de prensa. D-006 decía «con la primera señal de tracción».

**Decisión: viernes 30 de octubre de 2026 (S8). Marca mixta —wordmark más cabeza del basset—, clases 9, 41 y 16. Tasas ≈340 €.**

- **Por qué el 30 de octubre y no el 6 de noviembre.** La prensa no es el único acto que hace pública la marca ante terceros: el **día L lo es**. El 3 de noviembre se publican 36 URL, se entra en Reddit, se envía a un agregador, se abre un canal de WhatsApp y cinco creadores reciben material. Esperar al 6 deja tres días de exposición pública con el nombre desprotegido y no ahorra nada, porque el gasto ya está aprobado en D-006.
- **Por qué tres clases y no dos.** El art. 4 del Convenio de París da seis meses de prioridad para extender a la UE, pero **solo sobre los productos que ya estaban en la solicitud española**. `LIBRO-LICENCIA` y `PDF-AULA` están en el catálogo y viven en la clase 16. Añadirla ahora cuesta 96 €; descubrirlo en la EUIPO cuesta una clase sin prioridad. La clase 28 no se pide: no vendemos producto físico y es la que más colisiona con marcas vivas.
- **Por qué mixta.** La mixta desactiva casi siempre la objeción de descriptividad del art. 5.1.c, que es un riesgo real ya identificado para «Sospechario». Si el presupuesto lo permite, se presenta además la denominativa (+340 €), que protege mejor el nombre desnudo.
- **D-006 no se deroga, se ejecuta por calendario.** El escalón 2 pasa de «cuando se cumpla un disparador» a «antes del lanzamiento». Los cinco disparadores siguen vigilándose en cada informe semanal, ahora para el **escalón 3 (EUIPO)**, cuya ventana con prioridad llega hasta el **30 de abril de 2027**.
- **La compuerta C-G5 de crecimiento se adelanta al 30 de octubre** y la nota de prensa del 10 de noviembre sigue condicionada al resguardo con número de expediente.

### R6 · Los 8 días de agente por semana del motor se verifican al final de S2, no al final de S9

**El choque.** El plan de motor cifra su capacidad en 8 días de agente por semana y reconoce que el plan no tiene holgura: 77,5 días comprometidos y 2,5 de reserva sobre 80. Si la capacidad real fuera 6, el lanzamiento se iría a la semana 13 salvo repliegue. El supuesto está declarado, pero **no está verificado**, y es el número del que cuelga toda la fecha.

**Decisión: no se acepta un plan sin holgura en la ruta crítica del proyecto sin una medida temprana. Tres medidas.**

1. **Compuerta nueva CP-1, fin de S2 (20 de septiembre).** Criterio verificable: **M-01 a M-10 cerradas**, que son exactamente 16 días de agente en dos semanas. Si al domingo 20 no están cerradas, la capacidad real no es 8 y se activa el repliegue **esa semana**, no en la 9. Es la diferencia entre reaccionar con siete semanas de margen y reaccionar con una.
2. **El repliegue queda pre-aprobado y en orden**, para que no haya que discutirlo bajo presión: (a) el interrogatorio pasa a fase 2 aunque CP-3 esté verde (−4 días); (b) el escalafón sale con 8-10 técnicas (−1); (c) el viernes sale con tono y sin rastro del objeto (−1,5); (d) las pistas visuales pasan a fase 2 (−1); (e) dos mecánicas menores salen del primer jueves (−1). Recuperables: **8,5 días**, que es exactamente lo que compensa pasar de 8 a 6,5 días por semana.
3. **Se saca de la ruta crítica todo lo que no es condición de lanzamiento**: el catálogo completo de técnicas del escalafón (M-45) y las pistas visuales (M-47) viven en S10, después del día L, y su retraso no mueve nada.

Y una nota de honestidad que corresponde al director, no al ingeniero: **el eslabón que puede tirar la fecha no es Expediente, es M-11**, los cinco días indivisibles de la escalera y el certificado en S3. Expediente tiene repliegue de coste cero; M-11 no tiene ninguno.

### R7 · La firma humana de casos la hace el fundador, con el criterio delimitado por escrito y un presupuesto único de 2 h/semana

**El choque.** N-06 pregunta quién es la «persona» de la firma humana. Cuatro planes la presupuestan por separado: contenido (2 h/semana), motor (2 h para 28 casos y 5 h para 92), calidad (3,5 + 2 + 2 h) y backend (2 h/semana de panel). Sumadas dan más de 40 horas y describen la misma actividad. Y detrás hay una promesa pública comprometida en D-007 (M5): que **una persona resuelve cada caso antes de publicarlo**.

**Decisión, en tres partes.**

1. **Firma el fundador, y solo él, hasta el día 90.** Es la promesa pública y es lo que separa este producto de un generador. No se delega mientras el criterio de firma no esté escrito con detalle suficiente como para que otra persona lo aplique igual.
2. **La firma es una sola actividad con un solo presupuesto: 2 h/semana desde S4, nunca más de 3.** Absorbe C-12, C-15 y C-19 de contenido, Q-02, Q-03 y Q-11 de calidad, y M-32 y M-43 de motor. Los cuatro planes dejan de presupuestarla por su cuenta.
3. **Y el criterio se delimita, porque es lo que hace que quepa.** La resolución a ciegas completa se hace sobre **el 100 % de los casos de un formato la primera vez que ese formato se publica** y sobre **una muestra del 25 % del resto**; los demás llevan un checklist de seis puntos sobre el certificado del motor, dos o tres minutos por caso. Eso es lo que convierte 92 casos en cinco horas y no en veinticinco.

**Consecuencia sobre lo que se dice en público, y es obligatoria.** El texto aprobado es *«una persona revisa cada caso antes de publicarlo y resuelve a ciegas los de cada formato nuevo»*, no *«resuelve cada caso»*. `experto-legal` ya lo señaló: una afirmación no verificable sobre una característica del servicio es un acto de engaño del art. 5 de la Ley 3/1991. La frase actual del argumentario se corrige antes de publicarse.

**Y una válvula, con umbral fijado antes del dato:** H8 dice que si el fundador dedica más de 3 h/semana sostenidas a firma y comprobaciones una vez lanzado, se contrata revisor (150-400 €/mes). Se revisa en el mes 1 de vida, no «cuando se note».

### R8 · El día L es martes. Confirmado

**El choque.** No es un choque entre planes sino una decisión de crecimiento que pide ratificación: el día L es el martes 3 y no el lunes 2.

**Decisión: confirmado, martes 3 de noviembre.** El 1 de noviembre cae en domingo y varias comunidades trasladan Todos los Santos al lunes 2. Lanzar y hacer ruido un día de puente en media España es tirar la única primera vez que hay. Se añaden dos razones que no estaban escritas: el martes es el día del formato **«El clásico»**, que es el más fácil de explicar a alguien que llega por primera vez y el que mejor funciona en el vídeo de reglas; y las entradas en comunidades y los envíos a medios rinden de martes a jueves. **Ventana de retraso: martes 10 de noviembre.** Y el límite duro: si el 10 falla, **12 de enero de 2027**, no diciembre.

---

## 3. Roadmap semana a semana (S1-S10)

Los identificadores son los de los planes de área: `M-` motor, `F-` frontend, `B-` backend, `D-` diseño, `C-` contenido, `G-` crecimiento, `L-` legal, `A-`/`Q-`/`N-` datos, calidad y negocio; `UX-`, `MO-`, `BE-` son peticiones entre áreas.

### S1 · 7-13 de septiembre · Congelar antes de construir

| | |
|---|---|
| **Objetivo** | Que nada de lo que se escriba a partir de S2 haya que rehacerlo. La mitad de esta semana es negociar contratos, y es la mitad que ahorra tres semanas de retrofit en siete piezas de producto |
| **Motor** | M-01 contratos (certificado, caso, predicado) · M-02 andamiaje `engine/` · M-03 núcleo de máscaras X0 · M-04 DSL de Escena · M-05 tests de propiedad. **8 días exactos** |
| **Frontend** | F-01 stack registrado (D-F1) · F-02 esqueleto · F-03 tubería de tokens · F-04 contratos tipados · F-05 CI con presupuesto que rompe el build · F-06 Sentry |
| **Backend** | B-01 los nueve contratos C1-C9 · B-02 dos proyectos Supabase **en región UE** · B-03 migración 0001 · B-04 alta anónima y enlace mágico · B-05 CI |
| **Diseño** | D-01 paleta con contrastes medidos · D-02 tipografía · D-05 nombre propio de la mascota · D-09 tokens exportables · D-13 portada del día · D-14 tablero (borrador) · D-10 (mitad) |
| **Contenido** | C-01 biblia narrativa v1 · C-02 guía de estilo · C-03 nombres candidatos de las 26 técnicas |
| **Crecimiento** | G-01 las 10 comprobaciones manuales · G-02 cola de medición · G-04 especificación técnica de SEO · G-05 altas de propiedades |
| **Legal** | **L-01 a L-04 búsquedas de anterioridades (bloqueante B1)** · L-05 vigilancia TMview · L-06 dominios y handles · L-07 dictamen de marca ajena (arranca) · L-09 datos del prestador |
| **Datos/calidad** | A-01 taxonomía con `modo` · A-14 vigilancia D-006 desde hoy · Q-01 checklist de caso · N-01 presupuesto · N-02 hitos |
| **Compuerta** | **CP-0 · Contratos congelados**, viernes 11 |
| **Fundador** | **10 h**: 4 búsquedas de marca (3,25) · 3 comprobaciones de SERP y competencia (3) · sesión única de congelación de contratos (2) · dominios y handles (0,75) · biblia y presupuesto (1) |
| **Riesgos que vencen** | Que el 9 de septiembre no lleguen las cuatro confirmaciones de `disenador-puzzles` que desbloquean el DSL. Que aparezca una marca idéntica viva en clases 9/28/41 |

### S2 · 14-20 de septiembre · El sistema y la partida

| | |
|---|---|
| **Objetivo** | Que exista un caso generado con unicidad demostrada y un tablero que se pueda tocar. Y saber si la capacidad del motor es la que dijimos |
| **Motor** | M-06 generador de Escena · M-07 CLI con modo a ciegas · M-08 grafo de habitaciones y celdas bloqueadas · M-09 hash de solución con sal · M-10 benchmark |
| **Frontend** | F-07 primitivas accesibles · F-08 componentes con las tres fichas técnicas · F-09 marco y fuentes · F-10 página de estilos viva · F-11 máquina de estados del tablero |
| **Backend** | B-06 tabla de intentos con RLS de solo lectura · B-07 abrir, guardar y reanudar · B-08 Comprobar en servidor · B-10 acusar atómico · B-11 anticheat |
| **Diseño** | **D-14 tablero final** · D-15 pistas · D-16 acusar · **D-17 pantalla de resultado (firmada)** · D-03 wordmark · D-12 flujos · D-45 teclado |
| **Contenido** | C-04 plantillas de pistas de Escena · C-05 prompts y filtros · C-06 plantillas de portada |
| **Crecimiento** | **G-09 `/` anticipada con vistazo jugable de verdad** · G-10 lista de espera · G-11 secuencia de 4 correos · G-12 ocho perfiles sociales · G-03 mapa palabra→URL |
| **Legal** | L-10 cierre de D-004 · L-07 dictamen de marca ajena (bloqueante B2, límite el 18) · L-11 expediente OEPM redactado |
| **Datos/calidad** | A-02 medición de H1 · A-06 protocolo de lectura de las 13 pruebas · N-03 hipótesis · N-04 primer informe |
| **Compuerta** | **CP-1 · Capacidad real del motor** (M-01 a M-10 cerradas) y **C-B · unicidad y no redundancia** al 100 % sobre 1.000 casos |
| **Fundador** | **10 h**: prueba de nombres del escalafón en papel, 5 personas (2,5) · cuatro DPA y regiones (1,5) · DNS y verificación de propiedades (1,5) · ocho perfiles sociales (1,5) · cierre de D-004 (0,5) · aprobación de la spec de resultado (1) · tres casos a ciegas con la CLI (1) · informe (0,5) |
| **Riesgos que vencen** | Que el dictamen de marca ajena no llegue el 18: se cae la rama de nueve landings, que es el 75 % de la demanda del día 1 |

### S3 · 21-27 de septiembre · El suelo del producto

| | |
|---|---|
| **Objetivo** | Poder decir «se resuelve sin adivinar» y «dificultad medida» sin estar afirmando una intención. Es la semana más importante del proyecto |
| **Motor** | **M-11 escalera humana y certificado (5 días indivisibles)** · M-12 `cells` completado · M-13 test de acuerdo escalera↔residuo · M-14 técnicas requeridas |
| **Frontend** | F-12 render sin re-render global · F-13 gestos · F-14 ejes y tirar del hilo · F-15 teclado y lector de pantalla · F-16 variantes de día · F-17 persistencia y cronómetro · F-18 portada y tutorial |
| **Backend** | B-12 reloj inyectable y husos · B-13 racha como función pura · B-14 suite de reloj simulado · B-15 escalafón · B-09 Sabueso |
| **Diseño** | D-18 reconstrucción · D-19 Sabueso · D-20 sobres y vistazo · D-21 tutorial · D-22 racha y archivo · D-04 mascota · D-07 iconos · D-11 sistema de iconos · D-32 prototipo jugable · D-39 tarjetas de compartir · D-46 lector de pantalla |
| **Contenido** | C-07 pipeline documentado · C-08 banco piloto de 10-15 casos · C-10 confesión y «y sin embargo» |
| **Crecimiento** | G-14 briefs de las 13 páginas no bloqueadas · G-15 briefs de las 9 de marca ajena · G-26 lista de 20 creadores · G-32 lista de medios con persona |
| **Legal** | L-18 encargados y transferencias (bloqueante B5) · L-19 consentimiento de la newsletter · L-31 lista de puntos que exigen abogado |
| **Datos/calidad** | A-03 alta técnica · A-08 corrección del KPI de newsletter · Q-02 resolución a ciegas (arranca) · Q-04 matriz de dispositivos · Q-07 localización LatAm |
| **Compuerta** | **CP-2 · Suelo del producto**: certificado para el 100 % de los publicables, cero casos con paso N5, tablero verde (CF-1), suite de reloj en verde (CB-2) |
| **Fundador** | **9 h**: prueba de cuatro manos en papel con 6 parejas (4) · gestos en móvil real (2) · revisión de los 13 briefs (1) · calentar la cuenta de Reddit (0,5) · firma de casos piloto (1,5) |
| **Riesgos que vencen** | **M-11 resbala.** Es el riesgo número uno del proyecto y no tiene repliegue |

### S4 · 28 de septiembre - 4 de octubre · Lo que el jugador ve al terminar

| | |
|---|---|
| **Objetivo** | Cerrar el bucle completo de una partida: acusar, resultado, reconstrucción, escalafón. Y que el contenido entre solo en el sistema |
| **Motor** | M-15 dificultad medida · M-16 reconstrucción serializada · M-17 Sabueso de dos niveles · M-18 guarda OR · M-19 sobres por progreso · M-20 motor MV compartido |
| **Frontend** | F-19 panel de pistas y sobres · F-20 Sabueso · F-21 Comprobar y contraprueba · F-22 acusar · F-23 pantalla de resultado · F-24 reconstrucción animada |
| **Backend** | B-17 ingestión desde el motor · B-18 estados del caso y firma humana · B-19 cron y depósito · B-20 endpoints públicos con caché de CDN · B-16 archivo |
| **Diseño** | D-23 interrogatorio · D-24 escalafón · D-34 prototipo del interrogatorio · D-35 prototipo de la tabla del comisario · **D-36 hojas A y B de cuatro manos** |
| **Contenido** | C-09 tutorial de 60 s · C-11 microcopy v1 · **C-12 rampa de producción a beta (arranca)** |
| **Crecimiento** | G-16 briefs de marca y negocio · G-17 redacción de las 13 · G-18 redacción de las 9 · G-27 brief de creadores · G-23 guiones y grabación de vídeos 1-4 |
| **Legal** | L-13 aviso legal · L-14 términos de uso · L-15 política de privacidad |
| **Datos/calidad** | A-04 paneles base · A-05 protocolo de calibración · Q-05 suite Playwright de flujos críticos · **N-06 decisión de la firma humana** |
| **Compuerta** | **CB-3 · Contenido entrando solo**: ≥14 días programados con firma humana y certificado válido |
| **Fundador** | **10 h**: contactos de prensa con nombre y persona (2) · grabación de vídeos (2) · teclado y lector de pantalla en dispositivo real (2) · firma de casos (2) · decisión N-06 (1) · Reddit y revisión (1) |
| **Riesgos que vencen** | Que la spec de resultado o la del cuaderno de Expediente lleguen tarde y frontend improvise |

### S5 · 5-11 de octubre · La partida completa y el veredicto del interrogatorio

| | |
|---|---|
| **Objetivo** | Jugar un caso de punta a punta contra el backend real. Y saber si el miércoles existe |
| **Motor** | **M-21 Compuerta 0-A: τ, δ y β sobre 10.000 candidatos** · M-22 casa de dos plantas · M-23 el vistazo · M-24 variables auxiliares · M-25 rastro del objeto · M-26 el motivo |
| **Frontend** | F-25 escalafón y cuaderno · F-26 motivo · F-27 cuaderno de Expediente · F-28 dossier con fichas plegadas · F-29 marcas del comisario · F-33 racha y calendario · F-34 archivo · F-35 cuenta y sincronización |
| **Backend** | B-21 reportes por pista · B-22 anulación con reparación de racha · B-23 incidencias y día concedido · B-24 `/r/[id]` · B-25 analítica de servidor |
| **Diseño** | **D-37 pruebas con 5 personas** · D-25 dossier · D-26 cuaderno del comisario · D-27 contraprueba · D-40 imágenes OG |
| **Contenido** | C-13 plantillas de pregunta del interrogatorio · C-14 microcopy del escalafón y la racha · C-16 plantillas de Expediente |
| **Crecimiento** | G-07 prueba de rastreo con los 11 agentes · G-19 redacción de marca, negocio y legales · G-23 grabación de vídeos 5-9 · G-28 casos exclusivos de creador |
| **Legal** | L-16 cookies y analítica · L-17 registro de actividades · L-20 menores |
| **Datos/calidad** | **Tanda 1 de pruebas: PE-2 interrogatorio, PE-3 reconstrucción y escalafón, PE-5 pistas visuales** · Q-06 accesibilidad |
| **Compuerta** | **CP-3 · Compuerta 0-A** (τ ≥ 1 %, δ ≥ 1.000, β ≥ 30 %) y **CP-4 · partida completa** (CF-2) |
| **Fundador** | **11 h**: tanda 1 de pruebas fusionada con la sesión de diseño, 5 personas (5) · veredicto de la Compuerta 0-A (1) · firma de casos (2) · muestreo de 8 de las 30 páginas (1,5) · Reddit y revisión (1,5) |
| **Riesgos que vencen** | Que τ salga por debajo del 1 %: el miércoles se lanza como «clásico» y se liberan 4-6 días. Es un riesgo de resultado, no de ejecución |

### S6 · 12-18 de octubre · Todo lo que la beta necesita

| | |
|---|---|
| **Objetivo** | Que el sitio entero exista, que haya 28 casos firmados y que se pueda meter a personas reales sin problema legal |
| **Motor** | M-27 validación de la capa narrativa · M-29 contrato de API · **M-30 pipeline de publicación diaria** · M-31 panel de administración · **M-32 lote 1: 28 casos firmados** |
| **Frontend** | F-30 reconstrucción de rejilla · F-31 tutorial del jueves · F-32 interrogatorio tras bandera · F-36 tarjeta de compartir · F-37 Web Share · F-38 `/r/[id]` · F-39 sistema de página indexable · F-44/F-45 PWA y service worker · F-47 instrumentación · F-48 pruebas de lógica · F-53 i18n |
| **Backend** | B-26 fusión de progreso · **B-27 exportación y borrado en un clic** · B-28 correo diario · B-29 observabilidad · B-30 copias con restauración probada · B-31 carga y coste |
| **Diseño** | D-38 correcciones de la prueba · D-28 estados de red y PWA · D-29 erratas · D-41 aterrizaje · D-43 imprimibles |
| **Contenido** | C-12 cierre de la rampa · C-15 QA y firma del banco pre-beta · C-17 portada del jueves |
| **Crecimiento** | **G-20 QA SEO de las 30 páginas** · G-23 los 12 vídeos en el banco · G-24 calendario de publicación · G-29 enlaces medibles · G-45 reclutamiento de la beta · G-46 protocolo de la beta |
| **Legal** | L-21 compromiso de anulación · L-22 licencias de packs · L-23 dictamen de accesibilidad · L-24 revisión de textos frente a competencia desleal |
| **Datos/calidad** | A-09 recorrido de instrumentación · A-10 primer informe · Q-08 checklist de release de beta · Q-09 protocolo de bugs · **PX-2, PX-3, PX-4 (Expediente)** |
| **Compuerta** | **CP-5 · Beta con contenido y con derechos**: 28 casos firmados, pipeline sirviendo, 36 URL en verde (CF-3), borrado en un clic y restauración probada (CB-4), 12 vídeos y 30 textos (C-G3), 20 pantallas con sus cinco estados (G-D4) |
| **Fundador** | **12 h**: pruebas de Expediente con 8-10 personas (4) · reclutamiento de la beta (2) · firma de los 28 casos del lote 1 (2) · contrato de API (1) · checklist de release (1) · consentimiento y textos legales (1) · Reddit y revisión (1) |
| **Riesgos que vencen** | Que los 30 textos no lleguen. Que el CDN devuelva 403 a los rastreadores de IA y no nos enteremos hasta dentro de tres meses |

### S7 · 19-25 de octubre · Beta cerrada

| | |
|---|---|
| **Objetivo** | Que 100-300 personas jueguen catorce días seguidos y nos digan qué está roto. **Congelación de funcionalidad el lunes**: esta semana se corrige, no se construye |
| **Motor** | M-33 telemetría de beta · M-34 DSL de Expediente · M-35 canal cuaderno↔permutaciones · M-36 generador de Expediente · M-37 registro de decorados |
| **Frontend** | F-40 las 36 URL (+5) · F-41 datos estructurados · F-42 OG, sitemaps y ficheros de sistema · F-43 vistazo embebible · F-46 prompt de instalación · F-49 pruebas en móvil · F-50 presupuesto en CI · F-51 accesibilidad · F-52 consentimiento · **F-54 suite en Android real** |
| **Backend** | B-32 despliegue de la beta con lista de acceso y telemetría; soporte |
| **Diseño** | D-42 plantillas de vídeo · D-44 kit de beta; apoyo a incidencias |
| **Contenido** | C-18 tutorial del jueves · producción continua |
| **Crecimiento** | **G-47 ejecución de la beta**: 14 días de caso diario real, correo diario, canal de incidencias · G-30 cinco creadores con acceso anticipado · G-21 vídeo de reglas de Escena |
| **Legal** | L-25 cesión de derechos de la mascota (firma) · L-30 revisión legal de la beta |
| **Datos/calidad** | A-11 informes semanales (arrancan) · Q-10 tratamiento de bugs · Q-13 Android real |
| **Compuerta** | **CP-6 · Beta sana** (CF-4): tres flujos completos en Android de gama media real, Sentry sin errores no gestionados en 72 h, cero bloqueos y cero toques perdidos en tres partidas |
| **Fundador** | **14 h**: bienvenida, respuesta a incidencias y 3 entrevistas de 30 min (6) · suite en Android real (3) · priorización de bugs (2) · firma de casos (2) · contrato del ilustrador (1) |
| **Riesgos que vencen** | Los dos candidatos reales a romper la beta: la caducidad de almacenamiento en Safari iOS y la actualización del service worker a mitad de partida |

### S8 · 26 de octubre - 1 de noviembre · Endurecer, y decidir

| | |
|---|---|
| **Objetivo** | Cerrar lo que la beta encontró, publicar el primer jueves de Expediente y tomar la decisión de lanzar. Es la semana de tres compuertas |
| **Motor** | M-38 escalera de Expediente · **M-39 el jueves (publicado en beta el 29)** · M-40 Compuerta 0-B |
| **Frontend** | F-55 correcciones de la beta por orden de daño · F-56 ensayo de lanzamiento con reloj real |
| **Backend** | B-33 correcciones y endurecimiento · **B-34 simulacro de anulación con la gente de la beta** · B-35 congelación del esquema |
| **Diseño** | D-30 duelo (spec v0) · **D-47 auditoría WCAG** · D-48 repaso en móvil real (adelantado de S9) |
| **Contenido** | C-19 rampa hacia el lanzamiento; firma repartida del lote 2 |
| **Crecimiento** | G-08 sitemaps definitivos · G-20 segunda pasada de QA · **G-48 compuerta C-G4** · G-31 kit de prensa |
| **Legal** | **L-12 presentación en la OEPM (viernes 30)** · L-27 verificación de los cinco legales · L-28 derechos de los interesados |
| **Datos/calidad** | Q-11 segunda ronda de firma · Q-12 checklist de release de lanzamiento · A-05 lectura de la calibración con datos reales |
| **Compuertas** | **CP-7 · Jueves de Expediente** (jueves 29) · **CP-8 · OEPM presentada** (viernes 30) · **CP-9 · Ir / no ir** (viernes 30) |
| **Fundador** | **12 h**: segunda semana de beta y 3 entrevistas (6) · presentación en la OEPM (1,5) · decisión ir / no ir (1) · simulacro de anulación (1) · firma de casos (2) · repaso en móvil y accesibilidad (0,5) |
| **Riesgos que vencen** | Que CP-7 salga roja (repliegue de coste cero) y que CP-9 salga roja (la fecha se mueve al 10 de noviembre, y eso está bien) |

### S9 · 2-8 de noviembre · Día L

| | |
|---|---|
| **Objetivo** | Publicar y vigilar. **Una semana de lanzamiento es para responder, no para publicar más** |
| **Domingo 1** | Congelación de código y contenido. Última pasada de QA SEO (30/30) y de rastreo (cero 403). **CP-10** |
| **Lunes 2** | Correo «mañana abrimos» a toda la lista. Los cinco creadores reciben su caso exclusivo con 12 h de ventaja. Vídeo de reglas publicado |
| **Martes 3 · L** | Las 36 URL vivas. Sitemap a Search Console y Bing. `llms.txt`. Artículo de lanzamiento. Vídeo 1. Entradas en r/murdoku y r/juegos. Correo de apertura. Primera captura en Wayback Machine |
| **Miércoles 4** | Respuesta a todos los comentarios en menos de 4 h. Presentación en tres grupos. Primer informe de rastreo |
| **Jueves 5** | Vídeo 2. Envío a dailydle.org. **Primer jueves de Expediente en abierto** |
| **Viernes 6** | Viernes «De disparate»: primer contenido para público familiar |
| **Sáb-dom 7-8** | Vídeo 3. El sábado difícil y el domingo XL. Silencio de publicación: solo comunidad |
| **Motor** | M-41 interrogatorio si CP-3 verde · M-42 recalibración de bandas · M-43 lote 2 (92 casos) · M-44 endurecimiento |
| **Backend / frontend** | B-36 sitemaps y feed desde datos · B-37/F-57 guardia con dos revisiones al día a hora fija |
| **Compuerta** | **CF-5 · Lanzamiento** (día −2) |
| **Fundador** | **14 h**: semana L completa, Reddit, correos y comunidad (8) · guardia y Web Vitals (4) · firma de casos (2) |
| **Riesgos que vencen** | Que un caso falle el primer día. Es lo único que rompe la promesa del producto y la del correo a la vez, y por eso `/erratas` y la reparación automática de la racha existen desde el minuto uno |

### S10 · 9-15 de noviembre · Estabilizar y contar

| | |
|---|---|
| **Objetivo** | Convertir la primera semana en dato, enviar la prensa y cerrar la deuda del lanzamiento |
| **Motor** | M-45 catálogo completo de técnicas del escalafón · M-46 guardia de regeneración · M-47 pistas visuales · M-48 reserva de estabilización |
| **Frontend / backend** | F-58 documentación de decisiones · B-39 página del día 8 · B-40 retrospectiva de coste |
| **Diseño** | D-49 sistema congelado y mantenimiento escrito |
| **Crecimiento** | **G-33 nota de prensa, martes 10, envío personalizado uno a uno** · G-30 los 15 creadores restantes · G-50 calendario editorial S2 |
| **Datos/calidad** | Informe de la semana 1: indexación, sesiones, D1, activación desde landing, casos completados, errores, con tres correcciones priorizadas |
| **Compuerta** | Objetivo: 36/36 URL en Search Console, ≥25 indexadas, 1.000 sesiones acumuladas, **D1 ≥ 35 %** |
| **Fundador** | **9 h**: nota de prensa personalizada y seguimiento (4) · guardia y comunidad (2) · firma de casos (2) · retrospectiva (1) |
| **Riesgos que vencen** | Que el pico artificial de la semana 9 (lista de espera, beta, creadores) se confunda con tracción. **La primera semana honesta es la 11** |

---

## 4. Por mes, hasta el mes 6 (S11-S26)

### Noviembre (S11-S13 · 16 nov - 6 dic) · Mes 1 de vida

**Objetivo:** que la retención exista sin el empujón del lanzamiento, y cerrar las mecánicas que quedaron condicionadas.

- **Entregables:** interrogatorio si CP-3 salió roja · Expediente si CP-7 salió roja · duelos por enlace (B-42, condicionado a H1) · vis a vis si C-0B lo puso en verde y `disenador-puzzles` confirma tres pistas de apertura · reparto recurrente con NR-M1..4 y la prueba del veterano (M-53, C-22) · primer caso con canon activo anunciado en portada (C-23) · primer especial mensual · `/vistazo`, `/dias`, `/soluciones`, `/escalafon`, `/tecnicas` · artículo «Cómo garantizamos una sola solución» · decisión de pasarela (B-41).
- **Hitos de negocio:** día 30 el 3 de diciembre. Objetivo 1.000 usuarios activos mensuales, activación desde landing ≥ 25 %, ≥ 60 palabras con impresiones, panel GEO base el 1 de diciembre.
- **Compuertas:** **CP-11 · semáforo del día 30**, con la regla escrita antes del dato: si hay menos de 600 usuarios activos y la finalización del primer caso está por debajo del 45 %, el problema es de producto y se para el calendario editorial dos semanas; si hay menos de 600 pero la finalización supera el 60 %, el problema es de distribución y se dobla vídeo y creadores. **C-G6 · catálogo del vistazo** (≥200 estructuras) decide si `/vistazo` se publica.
- **Decisiones programadas:** vis a vis (S11, con el informe de C-0B) · cuatro manos digital (según las tres compuertas del papel de S3) · apertura de Discord o Telegram propio solo al superar 1.000 usuarios.
- **Fundador:** 4-6 h/semana. Comunidad, firma de casos, panel GEO el 1 de diciembre (3 h).

### Diciembre (S14-S17 · 7 dic - 3 ene) · Mes 2 de vida

**Objetivo:** aguantar el mes flojo sin romper la cadena y preparar enero, que es el mes bueno.

- **Entregables:** plan de Argentina, con el texto voseado completo revisado por dos hablantes argentinos y guardado sin publicar (G-54) · `PDF-REGALO` adelantado a diciembre, que es su única ventana real · `/para-profesores` y `/packs` · segunda ronda de prensa con dato propio · **la semana 17 (28 dic - 3 ene) es tregua editorial**: no se publica ninguna página nueva ni se contacta con nadie, se publica el caso especial de Navidad, se dejan tres vídeos programados y se hace la auditoría de indexación. **El juego diario no se interrumpe ni un día**: romper la promesa en Navidad es el peor momento posible.
- **Hitos:** 3.000 sesiones orgánicas en 30 días · 300 correos del cebo de PDF · panel GEO ≥ 3/25 · 2.000-2.200 usuarios activos mensuales.
- **Compuertas:** condiciones de Premium evaluadas el **2 de enero** (5.000 usuarios activos, D7 ≥ 20 %, ≥ 2 % apuntados). Si las tres se cumplen y H4 no está refutada, se programa la pasarela; si no, **no se programa Premium en 12 meses**, que es lo que dice H4 y lo que evita repetir el error que D-008 ya corrigió una vez.
- **Decisiones programadas:** Premium sí/no (2 de enero) · merchant of record (recomendación: Paddle; Lemon Squeezy solo para precio libre y solo con su continuidad confirmada por escrito).
- **Fundador:** 4 h/semana, y menos en la tregua. Panel GEO el 1 de enero.

### Enero (S18-S21 · 4 ene - 31 ene) · Mes 3 de vida

**Objetivo:** el mes de crecimiento del año. Si enero no despega, el problema no es estacional.

- **Entregables:** lanzamiento editorial de Expediente (`/expediente`, `/reglas/expediente`, vídeo de reglas) · `/juegos-como-murdle` y el racimo de 5.660 búsquedas · `/acertijos` y `/enigmas` con registro neutro para LatAm · Premium si las tres condiciones se cumplieron (B-43, condiciones legales L-34 y L-36) · packs PDF de pago y la prueba de precio libre de `PDF-CLASICO` (H4) · cuatro manos digital si el papel pasó · contrato B2B con SLA listo **antes** de la primera conversación.
- **Hitos:** `murdle online` en el top 10 · sesiones de México y Argentina ≥ 10 % · 250 packs vendidos o un piloto B2B · 4.500 usuarios activos mensuales.
- **Compuertas:** **CP-12 · día 90, el 1 de febrero**: panel con MAU, D1/D7/D30 por cohorte y canal, tasa de resolución en los dos modos frente a la banda 55-75 %, estado de H1 a H8, presupuesto real frente a estimado, y **una recomendación explícita de continuar, parar o ajustar**. Presentar el panel sin recomendación es delegar la decisión sin hacer el trabajo.
- **Decisiones programadas:** **EUIPO** (S21-S22), reivindicando la prioridad de la solicitud española, mismo signo y mismos productos o un subconjunto; ventana improrrogable hasta el 30 de abril de 2027 · **B2B**: primera conversación a partir de S20, que es disparador de D-006 y ya está cubierta por la OEPM presentada · **app nativa**: condicionada a D30 > 25 %, se evalúa en el panel del día 90.
- **Fundador:** 4-6 h/semana. Panel GEO el 1 de enero y el 1 de febrero. Sesión de decisión del día 90 (2 h).

### Febrero y marzo (S22-S26 · 1 feb - 7 mar) · Mes 6 del proyecto

**Objetivo:** consolidar lo que el día 90 diga que funciona y cerrar la fase 2.

- **Entregables:** ejecución de la recomendación del día 90 · `/ar/` para Argentina **solo si** el texto voseado está revisado por dos hablantes y Argentina supera el 15 % de las sesiones orgánicas cuatro semanas seguidas; si no, una sola variante y revisión en el mes 6 · material escolar para LatAm en febrero-marzo, que es cuando empieza el curso allí, no en diciembre · resto de mecánicas de Expediente por compuerta (orden, objeto perdido, coartada cruzada, doble víctima, cadena de custodia) · casos de época · revisión trimestral de biblia, guía de estilo y lista negra léxica.
- **Hitos:** panel GEO 8/25 en dos de cuatro motores · dependencia de marca ajena por debajo del 50 % de las sesiones · retrospectiva de coste real frente a estimado.
- **Compuertas:** **C-G7 · apertura de `/ar/`** · **C-G8 · promoción de técnicas a URL propia** (máximo cinco a la vez, nunca las 26 de golpe).
- **Decisiones programadas:** Protocolo de Madrid para LatAm, solo con negocio real en el país, y con el dato que cambia el plan: **Argentina no es parte del Protocolo y exige solicitud nacional ante el INPI** · caso a la carta, solo tras dos meses publicando sin incidencias y con depósito precalentado · reapertura de la doble franja únicamente si el fundador la reabre y pasa la prueba de papel.
- **Fundador:** 3-4 h/semana sostenidas.

---

## 5. Ruta crítica del proyecto

No es la de ninguna área: es la cadena que fija el día L.

```
D-P confirmaciones del DSL (mié 9 sep)
   └─► M-01 contratos congelados (vie 11 sep) ──┬─► M-03 X0 ─► M-04 DSL ─► M-06 generador (S2)
                                                │        └─► M-11 ESCALERA + CERTIFICADO (S3, 5 días)
                                                │                 └─► M-15 dificultad (S4)
                                                │                        └─► M-27 validación narrativa (S6)
                                                │                               └─► M-30 pipeline (S6)
                                                │                                      └─► M-32 lote 1 firmado (S6)
                                                │                                             └─► BETA (S7)
                                                │                                                    └─► correcciones (S8)
                                                │                                                           └─► CP-9 (30 oct) ─► DÍA L (3 nov)
   UX-01 tokens (mié 9) ─► UX-05 celda (S2 d1) ─┴─► F-11 estados ─► F-12/F-13 tablero (S3)
                                UX-11 resultado firmada (S3 d3) ─► F-23 ─► F-24 reconstrucción (S4-S5)
   C-G1 luz verde de marca ajena (vie 18 sep) ─► briefs ─► 30 textos (CO-01, S6 d1) ─► F-40 las 36 URL (S6-S7)
```

**Las seis piezas que, si se retrasan un día, retrasan el lanzamiento un día:**

1. **Las cuatro confirmaciones de `disenador-puzzles` del 9 de septiembre.** Media jornada de trabajo que desbloquea el DSL, y por tanto todo lo demás.
2. **M-01, los contratos.** Día y medio ahora, tres días de retrofit en siete piezas de producto después. Es lo único con la fecha límite ya corriendo.
3. **UX-01 y UX-05, los tokens y los estados de la celda.** El tablero son seis días y no se empieza a ciegas.
4. **M-11, la escalera y el certificado.** Cinco días indivisibles en S3 de los que cuelgan la reconstrucción, el escalafón, Sabueso, la contraprueba, la dificultad medida y las tres promesas del producto. **No tiene repliegue.**
5. **M-30, el pipeline de publicación.** Tres días que ningún dictamen presupuestó y sin los cuales no hay juego diario.
6. **CO-01, los treinta textos.** No es trabajo del camino técnico, pero sin ellos las landings son maquetas y CP-5 no se cierra.

**Holguras, medidas:**

| Cadena | Holgura | Nota |
|---|---|---|
| Motor | **0 días** (2,5 de reserva sobre 80) | Por eso existe CP-1 al final de S2 y el repliegue está pre-aprobado |
| Frontend | ≈1 semana | 6,5 días si Expediente cae; el interrogatorio, el motivo, el vistazo y el prompt de instalación se cortan en ese orden |
| Backend | 1 semana en correo, analítica y `/r/[id]`; **0 en racha, ingestión y certificado** | Sus dos hilos se cruzan en S4 |
| Diseño | 1 semana desde S6 | Las semanas 1 y 2 no admiten deslizamiento |
| Contenido | 2-3 semanas de colchón permanente | Se rompe si el motor resbala: cinco de sus siete tareas dependen de M1/M2/M3 |
| Legal | **0 en B1 (11 sep) y B2 (18 sep)**; 1-2 semanas en el resto | |
| Crecimiento | 1 semana, salvo la luz verde legal y el banco de vídeos | |

### Los cinco riesgos que más pueden mover la fecha

| # | Riesgo | Señal temprana | Repliegue |
|---|---|---|---|
| **1** | **M-11 resbala.** Cinco días indivisibles de los que cuelga todo lo visible | CP-1 al final de S2: si M-01 a M-10 no están cerradas, la capacidad no es 8 días/semana | **No hay repliegue de alcance: se mueve la fecha al 10 de noviembre.** Sin M-11 no hay «sin adivinar», ni dificultad medida, ni escalafón, ni reconstrucción, ni Sabueso. Se aplica el repliegue R3 del motor (8,5 días recuperables) y se protege M-11 quitándole todo lo demás alrededor |
| **2** | **La luz verde legal sobre marca ajena no llega el 18 de septiembre.** Nueve landings que son el 75 % de la demanda del día 1 | Semana 3 sin respuesta escrita de `experto-legal` | Se lanza con 21 páginas y todo el peso pasa a categoría propia (8.540 búsquedas en vez de 34.680). **No mueve la fecha, mueve la curva.** Se avisa al fundador en S3, no en S8 |
| **3** | **Los treinta textos no llegan para CP-5** | Ritmo de redacción en S4-S5 por debajo de seis páginas por semana | Las URL existen desde el principio con el puzzle jugable y la respuesta directa; los textos entran por goteo hasta S12. **Nunca se publica una landing sin puzzle jugable**: sería exactamente la página puente vacía que el catálogo prohíbe |
| **4** | **CP-6 en rojo: la beta encuentra algo que impide jugar o pierde progreso.** Los dos candidatos están identificados: la caducidad de almacenamiento en Safari iOS sin instalar y la actualización del service worker a mitad de partida | Sentry y las tres partidas en Android real de S7 | El día L se mueve al **10 de noviembre**. No se recorta accesibilidad ni tests para llegar. La ventana de 48 h de recuperación de racha y el prompt de instalación diferido ya son mitigación de lo primero |
| **5** | **Un caso publicado con dos soluciones.** No mueve la fecha hacia atrás: la rompe hacia delante, y es el fallo que este género no perdona | Tres reportes coincidentes sobre la misma pista | Doce propiedades en CI en cada commit, verificación cruzada del lote antes de programar, firma humana de los 120, guardia de regeneración para retirar y sustituir en caliente sin tocar la base de datos, y el compromiso público de anular en menos de 12 h desde el tercer aviso. **Un caso con fallo se anula, nunca se sustituye** |

**Y uno que parece de esta lista y no lo es.** Expediente en el día L es el riesgo número uno del plan de motor, pero **no puede mover la fecha**: su repliegue está construido desde S2 y cuesta cero. Está en CP-7 precisamente para que se decida el 29 de octubre y no el 2 de noviembre.

---

## 6. Compuertas del proyecto

| Compuerta | Fecha | Criterio verificable | Firma | Si no se cumple |
|---|---|---|---|---|
| **CP-0 · Contratos congelados** | vie 11 sep | `certificado.v1.json`, `case.v1.json` y `clue.v1.json` publicados; los nueve contratos C1-C9 firmados por dueño y co-firma; `tokens.json` v1; spec de estados de celda; ningún predicado de la lista de degeneración se puede construir | `director-producto`, con motor, frontend, backend y diseño | Se para el solver y el tablero. Programar sobre un contrato abierto cuesta 3 días de retrofit en 7 piezas |
| **CP-1 · Capacidad real del motor** | dom 20 sep | M-01 a M-10 cerradas (16 días de agente en dos semanas) | `ingeniero-motor-puzzles` + `director-producto` | Se activa el repliegue R3 pre-aprobado, en su orden, **esa misma semana** |
| **CP-2 · Suelo del producto** | dom 27 sep | Certificado emitido para el 100 % de los casos publicables · cero casos con paso N5 · escalera y residuo coinciden en 10.000 casos · 6×6 legible y tocable en 360 px con objetivos ≥44 px · 50 acciones + 50 deshacer devuelven el estado inicial exacto · suite de reloj simulado verde en sus nueve casos | Motor, frontend, backend, `revisor-calidad` | Se retira «se resuelve sin adivinar» de todas las páginas y se para la producción de contenido |
| **CP-3 · Compuerta 0-A (interrogatorio)** | dom 11 oct | τ ≥ 1 % · δ ≥ 1.000 · β ≥ 30 % sobre 10.000 candidatos 4×4 | **el fundador** | El miércoles se lanza como «clásico», el interrogatorio pasa a fase 2 y se liberan 4-6 días. La frase de portada cambia a la mitad que sí tenemos |
| **CP-4 · Partida completa** | dom 11 oct | Un caso de Escena y un Expediente jugados de punta a punta contra el backend real: portada → tablero → Sabueso → acusar → resultado → reconstrucción → escalafón → compartir | `desarrollador-frontend` | La beta se retrasa una semana y el día L pasa al 10 de noviembre |
| **CP-5 · Beta con contenido y con derechos** | dom 18 oct | 28 casos firmados con certificado + pipeline sirviendo por calendario · 36 URL con su renderizado y datos estructurados válidos · borrado en un clic y restauración probada · 12 vídeos y 30 textos · 20 pantallas con sus cinco estados | **el fundador**, con `revisor-calidad` | La beta se retrasa una semana y el día L pasa al 10 de noviembre. **No se abre una beta con contenido sin firmar ni con personas reales sin borrado funcionando** |
| **CP-6 · Beta sana** | dom 25 oct | Tres flujos completos en un Android de gama media real · Sentry sin errores no gestionados en 72 h · cero bloqueos y cero toques perdidos en tres partidas | `revisor-calidad` + `desarrollador-frontend` | El día L se mueve al 10 de noviembre |
| **CP-7 · Jueves de Expediente** | jue 29 oct | Un jueves completo publicado en beta con unicidad, «sin adivinar» y no redundancia, tabla del comisario y contraprueba; test de acuerdo cuaderno↔residuo en verde | `ingeniero-motor-puzzles` + el fundador | El jueves del día L se publica como Escena «a puerta cerrada» y Expediente entra en S11. Coste cero |
| **CP-8 · OEPM presentada** | vie 30 oct | Resguardo con número de expediente y fecha, clases 9, 41 y 16, tasas pagadas | **el fundador** + `experto-legal` | No hay nota de prensa, no hay `/para-medios`, no hay conversación B2B. Sin excepciones |
| **CP-9 · Ir / no ir** | vie 30 oct | (a) 30/30 páginas en verde · (b) **cero** casos con incidencia lógica en la beta · (c) finalización del primer caso ≥ 50 % · (d) D7 de la beta ≥ 25 % · (e) 7 días seguidos de caso y correo diarios sin fallo · (f) cero respuestas 403 a los 11 agentes de IA · (g) Lighthouse móvil ≥ 90 en las 30 · (h) cero incidencias de severidad 1 abiertas y esquema congelado · (i) cero incumplimientos de accesibilidad de nivel A | **el fundador, y solo él** | Se retrasa al martes 10 de noviembre. Si el 10 tampoco, **12 de enero de 2027**, nunca diciembre |
| **CP-10 · Día −2** | dom 1 nov | Lighthouse verde en las 36 URL · `curl` de cada URL con enunciado y pistas · robots y sitemaps comprobados **contra el CDN** · ensayo del cambio de día con reloj simulado y con reloj real | `desarrollador-frontend` | No se publica hasta que esté |
| **CP-11 · Día 30** | jue 3 dic | 1.000 usuarios activos mensuales · D1 ≥ 35 % · activación desde landing ≥ 25 % | `analista-datos` + `director-producto` | Se aplica el semáforo escrito antes del dato: producto o distribución, según la tasa de finalización |
| **CP-12 · Día 90** | lun 1 feb 2027 | Panel completo con umbrales fijados antes del dato **y una recomendación explícita** de continuar, parar o ajustar | `analista-datos` presenta, **decide el fundador** | No se pasa a fase 3 sin decisión escrita |

---

## 7. Lo que el fundador tiene que hacer

Siete cosas de esta tabla no las puede hacer ningún agente y por eso son irreducibles: las comprobaciones de SERP en España desde su navegador, los contactos de prensa con nombre de persona, las entrevistas de la beta, la presentación en la OEPM, responder en comunidades con una cuenta real y con historial, el panel GEO, y la firma de la compuerta de ir / no ir.

| Semana | Horas | Decisiones | Comprobaciones manuales | Pruebas con personas | Firma de casos | Registros y pagos | Contactos | Fecha límite |
|:-:|:-:|---|---|---|---|---|---|---|
| **S1** | 10 | Congelar contratos; aprobar tono y voz de Sabueso; aprobar presupuesto | 4 búsquedas de anterioridades (TMview, OEPM, USPTO, RMC); 3 comprobaciones de SERP; abrir murdoku.com/play, cluedoku.app y murdoku.fans; regla de bots de IA del CDN | — | — | Dominios `.com`, `.es`, `.app` y 8 handles (≈40-70 €); alerta TMview | — | **vie 11 sep** |
| **S2** | 10 | Cierre de D-004 (nombre definitivo); aprobar la spec de la pantalla de resultado | 3 casos a ciegas con la CLI del motor | **Nombres de las 26 técnicas, 5 personas, en papel** | — | 4 DPA firmados y regiones verificadas; DNS y verificación de propiedades | 8 perfiles sociales; cuenta de Reddit | **dom 20 sep** |
| **S3** | 9 | Aprobar los 13 briefs de landing | Gestos táctiles en móvil real | **Cuatro manos en papel, 6 parejas** | Casos piloto | — | Empieza a calentar Reddit (0,5 h/sem hasta S8) | **dom 27 sep** |
| **S4** | 10 | **N-06: quién firma los casos**; aprobar la nota de prensa | Teclado y lector de pantalla en dispositivo real | — | 2 h/sem (arranca) | — | **Contactos de prensa con nombre de persona (2 h)**; grabación de vídeos | **dom 4 oct** |
| **S5** | 11 | **Veredicto de la Compuerta 0-A: entra o no el interrogatorio** | Muestreo de 8 de las 30 páginas | **Tanda 1: interrogatorio, reconstrucción y escalafón, pistas visuales (5 personas)** | 2 h | — | Reddit | **dom 11 oct** |
| **S6** | 12 | Firmar el contrato de API; checklist de release de beta | Consentimiento y textos legales | **Expediente: primer jueves, el muro, la tabla del comisario (8-10 personas)** | **Los 28 del lote 1** | — | Reclutamiento de la beta (100-300) | **dom 18 oct** |
| **S7** | 14 | Priorización de bugs de la beta | **Suite en Android de gama media real, 3 partidas** | — | 2 h | Firma del contrato de cesión del ilustrador | **3 entrevistas de 30 min** con gente de la beta | **dom 25 oct** |
| **S8** | 12 | **CP-9: ir / no ir** | Repaso de las 20 superficies en móvil real; simulacro de anulación | — | 2 h | **Presentación en la OEPM, ≈340 €** | 3 entrevistas más | **vie 30 oct** |
| **S9** | 14 | Qué se corrige en caliente y qué espera | Web Vitals de campo y Sentry, dos revisiones al día | — | 2 h | Captura en Wayback Machine el día 1 | Reddit y comunidades: respuesta a todo en < 4 h | **mar 3 nov** |
| **S10** | 9 | Tres correcciones priorizadas de la semana 1 | — | — | 2 h | — | **Nota de prensa personalizada, uno a uno (4 h)** | **mar 10 nov** |
| **S11-S13** | 4-6/sem | Vis a vis; cuatro manos digital; Discord propio | Panel GEO el 1 de diciembre (3 h) | — | 2 h/sem | — | Los 15 creadores restantes; comunidad | **jue 3 dic** |
| **S14-S17** | 4/sem | **Premium sí/no**; merchant of record | Panel GEO el 1 de enero | — | 2 h/sem | — | Grupos de docentes; segunda ronda de prensa | **sáb 2 ene** |
| **S18-S22** | 4-6/sem | **Panel del día 90: continuar, parar o ajustar** (2 h) | Panel GEO el 1 de febrero | — | 2 h/sem | **EUIPO con prioridad** (si el día 90 va verde) | Primera conversación B2B | **lun 1 feb** |
| **S23-S26** | 3-4/sem | Apertura de `/ar/`; Protocolo de Madrid | Panel GEO mensual | — | 2 h/sem | Renovaciones | LatAm | **dom 7 mar** |

### 7.1 Orden de corte si una semana se pasa del techo

Se corta en este orden y no en otro, para que la decisión no dependa del cansancio del viernes:

1. El panel GEO se reduce a 10 preguntas × 2 motores × 1 país (de 3 h a 45 min) y se declara parcial en el informe.
2. Las grabaciones de vídeo se hacen con maqueta de alta fidelidad en vez de con producto real.
3. La revisión por muestreo de páginas baja de 8 a 4.
4. Se aplaza una prueba con personas de la tanda condicionada (nunca una de la tanda 0 ni de la 1).
5. Se aplaza una decisión que no tenga compuerta esa semana.

**Nunca se corta:** la firma de casos, las entrevistas de la beta, la presentación en la OEPM, la firma de CP-9 ni las comprobaciones que solo puede hacer una persona en un navegador y un dispositivo reales.

---

## 8. Semana 1 en detalle (7-13 de septiembre)

### Lunes 7 · Arrancan los catorce

| Agente | Qué arranca |
|---|---|
| `director-producto` | Publica este roadmap, D-010 y D-011. Convoca la sesión única de congelación de contratos del jueves |
| `ingeniero-motor-puzzles` | M-02 andamiaje de `engine/` con CI y semilla determinista. Primer borrador de `certificado.v1.json` |
| `disenador-puzzles` | **Las cuatro confirmaciones que bloquean el DSL**, con fecha límite el miércoles |
| `desarrollador-frontend` | F-01 (registrar el stack como D-F1 con sus tres razones y lo que se acepta a cambio) y F-02 (esqueleto de `web/`) |
| `desarrollador-backend` | B-02: los dos proyectos de Supabase **en región de la UE**, no en `us-east`. Crearlos mal ahora significa migrar la base entera después |
| `disenador-ux-ui` | D-01 paleta con todos los pares de contraste medidos, en claro y en oscuro |
| `guionista-misterio` | C-01 biblia narrativa v1 con tono, voz de Sabueso, glosario espacial y lista negra léxica |
| `periodista-contenidos` | Plantilla de brief de landing |
| `estratega-growth-seo` | G-04 especificación técnica de SEO; prepara las 10 comprobaciones manuales para el fundador |
| `creador-social` | Prepara la reserva de handles y las bios con la frase de entidad |
| `analista-datos` | A-01 taxonomía de eventos con `modo` obligatorio en todos |
| `revisor-calidad` | Q-01 checklist de caso |
| `estratega-negocio` | N-01 presupuesto mensual real, N-02 hitos con fecha **o** condición de disparo, nunca las dos mezcladas |
| `experto-legal` | Prepara los 16 términos exactos de TMview y las cuatro búsquedas para el fundador; L-09 datos del prestador |
| **Fundador (1 h)** | Lee el roadmap. Aprueba o enmienda D-010 y D-011 |

### Martes 8 · El fundador hace lo que nadie puede hacer por él

- `disenador-ux-ui` entrega **`tokens.json` v0.9** y cierra la tipografía.
- `ingeniero-motor-puzzles` circula el certificado a frontend, backend y diseño para su firma.
- `desarrollador-backend` redacta C2 a C9 y los pasa a co-firma.
- **Fundador (3,25 h):** las cuatro búsquedas de anterioridades. TMview con los 16 términos, territorios ES + EM + WO, estados **Registrada, Solicitada y Expirada** (filtrar solo «Registrada» es el error clásico: una solicitud pendiente ya bloquea), clases 9, 16, 28 y 41. OEPM en **modalidad marca y modalidad nombre comercial**. USPTO expediente 99677726 en TSDR. Registro Mercantil Central. Es el bloqueante B1 y la tarea más rentable de todo el proyecto: cuesta 0 € e impide construir ocho semanas sobre un nombre que no se puede usar.

### Miércoles 9 · El día que desbloquea el código

**`disenador-puzzles` cierra y publica las cuatro confirmaciones.** Sin ellas, M-04 (el DSL de Escena) no arranca y la ruta crítica del proyecto pierde su primer día en su primera semana.

| # | Qué se confirma | Por qué bloquea |
|:-:|---|---|
| **1** | **«Pegado» se parte en tres predicados** con tres redacciones canónicas sin solape: `adyacente_hab` («comparten pared»), `pasillo_contiguo` y `ala_contigua` | El vocabulario usa la misma palabra para dos relaciones distintas, y la regla 5 del checklist prohíbe los sinónimos. Un caso publicado con esa ambigüedad es una pista con dos lecturas |
| **2** | **`ve(A, B)` revisado, y con él todos los predicados relacionales entre personas**, buscando degeneración bajo cuadrado latino | Tal como está definido es **idénticamente falso** entre dos sospechosos: una plantilla de interrogatorio que nunca informa. Media hora de revisión que evita un menú roto |
| **3** | **Negación de los predicados no binarios**, cerrada caso por caso | `¬entre(A,B,C)` y `¬izquierda_de(A,B)` tienen varias lecturas naturales. Afecta al contrato del certificado, no solo al DSL |
| **8** | **Los tres regímenes de `givens`** (`informativo`, `entrañado`, `falso`), con la regla dura de que **la marca falsa nunca entra en el sistema formal** | Es un campo del esquema de caso. Si no entra ahora, entra en un retrofit del esquema en S7, con Expediente ya escrito encima |

Además: `disenador-ux-ui` entrega **`tokens.json` v1** (frontend lo necesita hoy) · `desarrollador-frontend` monta F-03, la tubería de tokens con la regla de lint que rompe el build si alguien escribe un color literal · `ingeniero-motor-puzzles` arranca **M-03, el núcleo de máscaras X0**, que convierte trece propiedades de los dos modos en dos operaciones de recuento de bits.

### Jueves 10 · Congelación de contratos

Sesión única, dos horas del fundador, cuatro agentes técnicos, y a partir de ahí nadie reabre nada sin una entrada en `docs/decisiones.md`.

**Lo que se congela:**

| Contrato | Contenido | Dueño / co-firma |
|---|---|---|
| **Certificado agnóstico de modo v1.0** | Localizador polimórfico (rejilla, cuaderno, tira), campo `rama` para el razonamiento por casos, `premisas.pasos`, y los tres invariantes con test de propiedad | Motor · firman backend, frontend y diseño |
| **Esquema del caso publicable v1** | Qué campos viajan al cliente, identificadores estables de entidad, registro de decorados, y la **lista negra de lo que nunca sale antes de acusar**: solución, certificado, semilla, técnicas requeridas, número de pasos y dificultad numérica | Backend · firma motor |
| **Contrato de predicado del DSL** | `sat`, `mask`, `cells(pista, estado)`, negación, redacción canónica única y auditoría de degeneración en el sistema de tipos | Motor · firma `disenador-puzzles` |
| **Tipos compartidos de la API** | Un único paquete `web/src/contratos/` con esquemas de validación y los códigos de error. Ningún tipo de dominio definido fuera de ahí | Backend · firma frontend |
| **Política de día y número de caso (C4)** | **Medianoche local del dispositivo**, un número por fecha civil, un solo contenido por número, ventana [D−1 10:00 UTC, D+1 12:00 UTC], huso declarado con un cambio cada 24 h. Es la resolución R4 | Backend · firma `director-producto` |
| **Reglas de racha (C5)** | Números consecutivos, gracia de uno cada 30 días, día concedido que ni rompe ni avanza, jueves neutro las cuatro primeras semanas, día por viaje al este solo con cambio ≥5 h y una vez cada 30 días | Backend · firma `director-producto` |
| **Contrato de ayudas (C6)** | Comprobar devuelve **celdas vacías y celdas erróneas por separado, nunca cuáles**; Sabueso de dos niveles se calcula en servidor sobre el certificado y **jamás devuelve la solución ni señal de error**. Es la resolución R3 | Backend · firma `disenador-ux-ui` |
| **Taxonomía de eventos (C7)** | Propiedad `modo` obligatoria en todos, `racha_salvada` con motivo, `caso_abierto` con origen, `pwa_instalada`, presupuesto de eventos por sesión | `analista-datos` · implementa backend |
| **Resultado compartido (C8)** | Identificador aleatorio de ≥16 caracteres no derivado de nada, caducidad de 30 días con 410, borrado encadenado, imagen OG sin seguimiento, y un `/r/[id]` de caso fuera del archivo abre la página del día 8 | Backend · firma `experto-legal` |
| **Ingestión motor → backend (C9)** | Forma del artefacto, versión de formato, hash de contenido para idempotencia, estados del caso y campo de firma humana | Backend · firma motor y `revisor-calidad` |
| **Tokens y estados de celda** | `tokens.json` v1 y la especificación de estados de la celda con el ciclo por toque y el gesto de arrastre | Diseño · firma frontend |

Y arranca **M-04, el DSL de Escena**, con las confirmaciones del miércoles ya cerradas.

### Viernes 11 · Las comprobaciones del fundador (≈4 h)

1. **Leer el resultado de las búsquedas** contra la tabla de criterio de `docs/legal/anterioridades-sospechario.md` §5.7, que está fijada antes del dato y no se reinterpreta. Si aparece un idéntico vivo en clases 9, 28 o 41, **Sospechario cae hoy y entra Culpabilia** — no en la semana 8, cuando ya haya logotipo, dominio, `Organization` y treinta briefs escritos encima.
2. **Las tres comprobaciones de SERP en Google España**, desde su navegador y su ubicación (códigos 36, 38 y 52 del árbol web). Deciden si toda la estrategia GEO es obligatoria o recomendable, y con ello el coste de las treinta páginas. **Ningún agente puede hacerlas.**
3. **Abrir murdoku.com/play, cluedoku.app y murdoku.fans** y anotar qué hacen de verdad: si hay español dentro del cliente, y si existen los duelos, el cooperativo y las ligas que anuncian sus descripciones indexadas. Media hora, y sigue siendo la tarea abierta más rentable del repositorio.
4. **Comprobar que el CDN no devuelve 403 a `OAI-SearchBot`** ni a los otros diez agentes. Es el fallo silencioso más caro del plan: si no se mira ahora, se descubre a los tres meses.
5. **Comprar los dominios y reservar los ocho handles**, con privacidad de WHOIS y renovación automática a dos años.
6. **Aprobar el tono y las tres muestras de voz de Sabueso** de la biblia. Es lo que desbloquea toda la redacción de contenido.
7. **Aprobar el presupuesto** de N-01 y firmar la congelación de contratos si quedó algo abierto el jueves.

### Fin de semana

No se trabaja. La regla del proyecto es que si la semana 1 no cabe en cinco días, se corta alcance, no se roban horas: la única restricción que no se puede ampliar comprando cómputo es la persona que firma los casos.

---

## 9. Mantenimiento de este documento

- Lo actualiza `director-producto`, semanalmente los lunes, con el estado de cada compuerta.
- Cualquier cambio de fecha, de alcance del día L o de compuerta se registra **antes** en `docs/decisiones.md` y **después** aquí.
- Los planes de área siguen siendo la referencia de ejecución; sus autores los actualizan y avisan a `director-producto` de cualquier cambio que toque una fecha de esta tabla.
- Cada informe semanal de `analista-datos` y cada informe quincenal de `estratega-negocio` empiezan comprobando los cinco disparadores de D-006.
