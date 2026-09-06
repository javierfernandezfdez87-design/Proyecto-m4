# Catálogo de productos

Autor: `director-producto`. Fecha: 5 de septiembre de 2026. **Versión 1.1** (6 de septiembre de 2026).
Fuentes: `docs/contexto-proyecto.md`, `docs/analisis-estrategico.md`, `docs/equipo-agentes.md`.

**Cambios de la versión 1.1.** Todo lo marcado con **[reseñas]** procede de `docs/oportunidades-resenas.md` y se decidió en **D-007** (`docs/decisiones.md`): son cambios derivados de quejas y peticiones reales de usuarios de productos del género, no de opinión interna. Coste incremental sobre el MVP: ≈ 7,25 persona-semana.

Este documento es la **lista cerrada** de lo que vamos a construir y vender en los próximos 12 meses.
Nada que no esté aquí se construye. Añadir un producto exige modificar este documento y registrar la decisión.

Precios en euros, **IVA incluido** (venta a consumidor en la UE).
Fases: **MVP** = semanas 1-8 · **Fase 2** = meses 3-6 · **Fase 3** = meses 6-12.

---

## 0. Nomenclatura (leer antes que nada)

El brief mezcla el nombre del *ritual* con el nombre de la *mecánica*. Se separan:

| Concepto | Nombre público | Nombre interno | Qué es |
|---|---|---|---|
| Ritual diario | **Caso del día** | `caso_diario` | El puzzle nuevo de cada jornada. Es un *slot*, no una mecánica. |
| Mecánica espacial (tipo Murdoku) | **Escena** | `modo_escena` | Cuadrícula/mapa, un sospechoso por fila y columna, pistas espaciales, el asesino es quien estaba con la víctima. |
| Mecánica lógica (tipo Murdle) | **Expediente** | `modo_expediente` | Cuadrícula lógica sospechoso × lugar × arma (× motivo). |

En la interfaz el usuario ve "El caso de hoy" y, cuando existan dos mecánicas, dos pestañas: **Escena** y **Expediente**.
Motivo: si "Caso del día" fuera el nombre de la mecánica espacial, el caso diario del modo lógico sería innombrable. Ver Decisión abierta 1.

---

## 1. Lista cerrada de productos

### 1.1 Núcleo gratuito

---

#### `JUEGO-DIARIO` — El caso del día (modo Escena)

- **A quién sirve.** Persona hispanohablante de 25-55 años que ha visto Murdoku en TikTok o ha leído el libro, busca "murdoku online gratis en español" en el móvil y quiere jugar en 30 segundos sin registrarse. +20.000 búsquedas/mes solo en España con esa intención.
- **Qué incluye exactamente.**
  - 1 caso Escena nuevo al día, cuadrícula 4×4 (lunes-martes), 5×5 (miércoles-sábado) y 6×6 (domingo, "caso XL"). **[reseñas]** El tamaño sigue la curva pero **no la define**: la curva semanal se define por **dificultad medida por el motor** (pasos de inferencia), con **lunes el más suave y sábado el más difícil**; el domingo XL es el más grande y largo, **no el más duro** (es el día familiar). **[reseñas]** Prohibidas las pistas de testimonio falso ("alguien miente") en el caso del día entre semana; si alguna vez se usan, solo en el XL del domingo, etiquetadas en pantalla.
  - **[reseñas]** Ejes de la cuadrícula **numerados y rotulados de forma permanente** (pasillo 1 = norte, ala 1 = oeste), también en 6×6. **Tocar una pista resalta las celdas que afecta.** Vocabulario espacial cerrado y versionado: una sola forma canónica por relación.
  - Tutorial interactivo de 60 segundos, obligatorio la primera vez, saltable. **[reseñas]** Incluye una pantalla dedicada solo a la convención espacial: de dónde se cuentan filas y columnas.
  - Cuadrícula táctil con anotaciones: colocar, marcar candidato, tachar, deshacer/rehacer ilimitado. **[reseñas]** Marcar o descartar un candidato en **varias celdas con un arrastre**, "borrar todas las anotaciones de este sospechoso", botón **"Empezar de cero"** visible durante la partida (no escondido en ajustes) y **zoom nativo del navegador nunca desactivado**.
  - **Comprobar**: hasta 1 comprobación por caso (marca cuántas celdas están mal, no cuáles).
  - **Acusar**: acción final e irreversible que cierra el caso y muestra resultado, tiempo y explicación paso a paso de la solución. **[reseñas]** La explicación de cada caso se publica además como **página pública indexable el día 8**, cuando el caso sale del archivo gratuito.
  - **[reseñas]** Botón **"reportar un problema con este caso"** en la pantalla de resultado, con página de erratas pública y **reparación automática de la racha de los afectados** cuando el error es nuestro.
  - Racha, calendario de últimos 30 días, estadísticas básicas (partidas, % resueltos, racha actual, racha máxima, tiempo medio).
  - Gracia de racha automática: 1 día perdido cada 30 días naturales no rompe la racha. **[reseñas]** La gracia es **visible y explicada** en el calendario y en el mensaje ("tu racha sigue viva: has usado tu día de gracia"), y hay **48 h para recuperar el día perdido sin escribir a soporte** cuando la causa fue nuestra.
  - Compartir sin spoiler: texto con emojis + imagen 9:16 para Stories. **[reseñas]** Con límite de tamaño de la cuadrícula, texto alternativo legible en la imagen y línea resumen legible, para que un lector de pantalla no lea decenas de emojis.
  - Archivo de los últimos 7 días, jugables sin límite. **[reseñas]** Con aviso de caducidad ("este caso sale del archivo en 2 días"); el día 8 no es un 404 comercial sino una página con la explicación razonada y la oferta de Premium debajo.
  - Cuenta opcional por *magic link*; anónimo funciona con `localStorage` y fusiona progreso al registrarse. **[reseñas]** La **sincronización entre dispositivos** (empezar en el móvil, seguir en el portátil) es la razón declarada para crear cuenta y un criterio de "hecho" verificable, no un muro.
  - **[reseñas]** Ajustes (tema, sonido, autopropagación) persistidos en local y en cuenta, que sobreviven a recarga y a actualización del *service worker*; el cronómetro del caso no se reinicia al recargar.
  - Funciona sin conexión si el caso ya se descargó (PWA).
- **Qué NO incluye.** Modo Expediente, dificultades seleccionables, casos ilimitados, contrarreloj, duelos, archivo anterior a 7 días, ranking global, chat, cuentas de menores de 14 años, anuncios (en MVP no hay).
- **Precio.** Gratuito, sin registro obligatorio, para siempre. No se pondrá jamás detrás de pago el caso del día.
- **Fase.** MVP (semanas 1-8).
- **Métrica de éxito.** A los 30 días del lanzamiento: 5.000 usuarios únicos mensuales, **D1 ≥ 35 %**, **D7 ≥ 20 %**, tasa de resolución del caso diario 55-75 % (si baja de 45 % está mal calibrado; si sube de 85 %, es aburrido), tiempo mediano 5-12 min, tasa de compartir ≥ 10 % de los que acusan.
- **Dependencia técnica.** `engine/` generador + solver determinista con prueba de unicidad y métrica de dificultad; tabla `puzzles` con publicación por cron; solución nunca servida en claro al cliente antes de acusar; PWA con Workbox.
- **Responsable.** `disenador-puzzles` (mecánica) → `ingeniero-motor-puzzles` (motor) → `disenador-ux-ui` → `desarrollador-frontend` + `desarrollador-backend`.

---

#### `LANDINGS-JUGABLES` — Páginas SEO con puzzle dentro

- **A quién sirve.** Tráfico de búsqueda de intención ("murdoku online", "en español", "gratis", "para imprimir", "para niños", "fácil", "cómo se juega", "juegos como Murdle"). Es el canal de adquisición número uno.
- **Qué incluye exactamente.** 8 páginas renderizadas en servidor, cada una con **un puzzle real jugable arriba del pliegue**, no un artículo: `/murdoku-online`, `/murdoku-en-espanol`, `/murdoku-gratis`, `/jugar-murdoku-online`, `/como-jugar` (tutorial interactivo), `/facil`, `/para-ninos`, `/juegos-como-murdle`. Cada una con metadatos, Open Graph generado, datos estructurados y enlace al caso del día.
  - **[reseñas]** Dos páginas más, que no son landings de intención sino de confianza y de contenido: **`/una-sola-solucion`** (cómo garantizamos que cada caso tiene exactamente una respuesta y se resuelve sin adivinar, con la página de erratas enlazada) y **`/casos/<n>`**, la explicación razonada de cada caso publicada el día 8. Esta segunda captura la demanda real de "solución del caso N", que hoy se sirve en vídeos de terceros.
  - **[reseñas]** Desde `/como-jugar` y desde la pantalla de resultado, **hoja de trabajo en blanco imprimible, gratis y sin pedir el correo** (PDF de una página, sin casos: no canibaliza `PDF-CEBO`).
- **Qué NO incluye.** Uso de marca ajena en dominio, logo, nombre de producto o nombre de app. Solo mención comparativa en el cuerpo del texto, con los textos revisados por `experto-legal`. No son páginas puente vacías.
- **Precio.** Gratuito.
- **Fase.** MVP (semanas 6-8, publicadas el día del lanzamiento).
- **Métrica de éxito.** Mes 3: ≥ 8.000 sesiones orgánicas/mes y ≥ 150 palabras clave posicionadas; **tasa de activación desde landing ≥ 25 %** (visita → caso resuelto). Se mide activación, no visitas.
- **Dependencia técnica.** SSR/SSG con Next.js o SvelteKit, canónicas del archivo diario, hreflang `es-ES` / `es-419`, Core Web Vitals con presupuesto en CI.
- **Responsable.** `estratega-growth-seo` (mapa de intención) + `periodista-contenidos` (textos) + `desarrollador-frontend`.

---

#### `NEWSLETTER` — "El caso de hoy"

- **A quién sirve.** Jugador que ya ha resuelto un caso y necesita un disparador externo para volver. Es la palanca de retención más barata que tenemos y la única que no depende de notificaciones push (que iOS PWA sirve mal).
- **Qué incluye exactamente.** Correo diario de 80-120 palabras a las 08:00 hora local del suscriptor: gancho del caso de hoy sin spoiler, botón de jugar, recordatorio de racha ("llevas 12 días"), y una vez por semana una curiosidad del género. Doble *opt-in*, baja en un clic. Captura desde la página de espera (semanas 1-2) y desde la pantalla de resultado.
- **Qué NO incluye.** Solución del caso, publicidad de terceros, venta de la lista, contenido patrocinado en los primeros 12 meses.
- **Precio.** Gratuito.
- **Fase.** MVP (captura semana 1; envíos diarios desde el lanzamiento).
- **Métrica de éxito.** 300 correos antes del lanzamiento; mes 3: 3.000 suscriptores, apertura ≥ 40 %, clic ≥ 18 %, y **D7 de los suscriptores ≥ 15 puntos por encima** del de los no suscriptores.
- **Dependencia técnica.** Proveedor transaccional (Resend/Postmark) + tabla `subscribers` con base legal RGPD y prueba de consentimiento; cron de envío por zona horaria.
- **Responsable.** `periodista-contenidos` (copy) + `desarrollador-backend` + `experto-legal`.

---

#### `MODO-EXPEDIENTE` — Cuadrícula lógica diaria

- **A quién sirve.** Jugador ya enganchado que quiere más profundidad narrativa, y el público de "Murdle" en español, para el que **hoy no existe ningún producto online**. Es el producto diferencial y la defensa si la moda Murdoku se enfría.
- **Qué incluye exactamente.** 1 caso Expediente nuevo al día: cuadrícula sospechoso × lugar × arma (4 elementos por categoría lunes-jueves, 5 viernes-domingo, motivo como cuarta categoría solo en el caso XL del domingo). Marcado de celdas con ✓/✗, autopropagación opcional, deshacer, comprobar (1 uso), acusar, resultado con la cadena de deducción explicada. Comparte racha, cuenta, estadísticas, archivo y compartir con `JUEGO-DIARIO`; la racha es **una sola, común a ambos modos**: basta resolver uno de los dos casos del día para mantenerla.
- **Qué NO incluye.** Racha separada, estadísticas separadas, cuenta separada, motivos en todos los días, casos ilimitados.
- **Precio.** Gratuito, 1 caso al día.
- **Fase.** Fase 2, arranque inmediato: **semanas 10-14** (mes 3). Es el primer trabajo tras el lanzamiento.
- **Métrica de éxito.** Mes 4: ≥ 35 % de los activos diarios juegan los dos modos el mismo día; **D7 de los que juegan ambos modos ≥ 15 puntos por encima** de los monomodo; tasa de resolución 50-70 %.
- **Dependencia técnica.** Segundo generador/solver en el mismo `engine/` con DSL de pistas compartido; esquema `puzzles` con campo `modo`; interfaz de cuadrícula lógica nueva (no reutiliza la de Escena).
- **Responsable.** `disenador-puzzles` → `ingeniero-motor-puzzles` → `guionista-misterio` → frontend.

---

#### `DUELOS` — Reto asíncrono por enlace

- **A quién sirve.** Jugador que quiere ganar a alguien concreto (pareja, grupo de WhatsApp, compañeros de oficina). Es un producto de crecimiento disfrazado de característica: cada duelo es una invitación medible.
- **Qué incluye exactamente.** Botón "Reta a alguien" en la pantalla de resultado. Genera un enlace con un caso concreto (el del día o uno del archivo). El retado juega el mismo caso; al terminar ve una comparativa: tiempo, errores, comprobaciones usadas. Sala hasta 8 participantes, expira a las 48 h. Funciona sin cuenta para el retado (se le pide un alias).
- **Qué NO incluye.** Tiempo real, chat, ranking global, ligas, emparejamiento con desconocidos, apuestas.
- **Precio.** Gratuito con límite: **crear 3 duelos al día**; aceptar duelos es ilimitado. Premium: crear ilimitados.
- **Fase.** Fase 2 (meses 4-5).
- **Métrica de éxito.** **K-factor ≥ 0,15** (cada 100 jugadores traen 15 nuevos por duelos), tasa de aceptación del enlace ≥ 40 %, ≥ 8 % de los activos crea al menos un duelo por semana.
- **Dependencia técnica.** Tabla `duels` con token opaco, resultado verificado en servidor y firmado (anticheat), OG image dinámica del reto, deep link al caso.
- **Responsable.** `desarrollador-backend` + `estratega-growth-seo`.

---

#### `JUNIOR-WEB` — Casos para niños en la web

- **A quién sirve.** Familias y docentes que buscan "murdoku para niños" (210/mes, KD 0) y "murdoku fácil" (170/mes, KD 0). Nichos sin cubrir y baratísimos de capturar.
- **Qué incluye exactamente.** La landing `/para-ninos` con un preajuste del motor: cuadrículas 3×3 y 4×4, vocabulario espacial simplificado (izquierda/derecha/encima/debajo, sin "adyacente en diagonal"), narrativa de misterio sin víctima (desaparece la tarta, el hámster, el trofeo del colegio), ilustraciones amables, sin cronómetro visible. 3 casos rotatorios por semana + enlace al pack PDF Junior.
- **Qué NO incluye.** **No es un modo con cuenta.** No se crean cuentas a menores de 14 años, no se pide correo a menores, no hay compartir en redes desde esta sección, no hay anuncios, no hay compra dentro de la sección infantil (el pack se compra desde una página para adultos). No es una app aparte.
- **Precio.** Gratuito.
- **Fase.** Fase 2 (mes 3, alineado con la vuelta al cole si se acelera; si no, mes 5).
- **Métrica de éxito.** Mes 6: posición 1-3 en España para "murdoku para niños" y "murdoku fácil"; ≥ 1.200 sesiones/mes; ≥ 8 % de esas sesiones acaba comprando o descargando un PDF.
- **Dependencia técnica.** Preajustes de generación en `engine/` (tamaño, tipos de pista permitidos, léxico); no requiere backend nuevo.
- **Responsable.** `disenador-puzzles` (preajuste) + `guionista-misterio` (léxico infantil) + `experto-legal` (menores).

---

### 1.2 Suscripción

---

#### `PREMIUM` — Suscripción individual

- **A quién sirve.** El 1-2 % de jugadores con hábito consolidado (racha > 14 días) que quieren más casos, más dificultad y su historial completo. No es el motor del negocio; es la tercera pata.
- **Qué incluye exactamente.**
  1. **Archivo completo** desde el caso 1 (frente a 7 días).
  2. **Casos ilimitados** bajo demanda, generados en el momento, en los dos modos.
  3. **Dificultades seleccionables**: fácil, normal, experto, imposible (etiquetadas por la métrica del motor, no a ojo).
  4. **Contrarreloj**: caso con cuenta atrás de 3 / 5 / 8 minutos y marcador personal.
  5. **Sin anuncios**, si algún día se activan.
  6. **Congelar racha**: 4 congelaciones al mes, no acumulables, aplicables hasta 48 h después del día perdido, más "modo vacaciones" que pausa la racha hasta 14 días seguidos.
  7. **Duelos ilimitados** (frente a 3 al día).
  8. **Estadísticas avanzadas**: distribución de tiempos por dificultad, comparativa contra la mediana de todos los jugadores, mapa de en qué paso te atascas.
  9. **Retos semanales**: serie temática de 5 casos encadenados con un caso final.
  10. **3 comprobaciones** por caso en lugar de 1.
  11. **Temas visuales**: 6 temas adicionales.
  12. **Exportar el caso del día a PDF** imprimible, 1 clic.
- **Qué NO incluye.** El caso del día (es gratis y lo seguirá siendo), ventaja competitiva en duelos (las comprobaciones extra se desactivan en duelo), contenido narrativo exclusivo, packs PDF completos (se venden aparte, con 30 % de descuento para suscriptores).
- **Precio.** **2,99 €/mes** o **19,99 €/año** (44 % de descuento). Precio fundador para la lista de espera: **14,99 €/año el primer año**, renovación automática a 19,99 €, avisada por correo 7 días antes. Sin prueba gratuita (el juego gratis ya es la prueba). Cancelación en un clic desde la propia app.
- **Fase.** Fase 2, **condicionada**. Lista de espera con precio fundador desde el día del lanzamiento. Solo se programa la pasarela si a los 60 días se cumplen las tres condiciones: **≥ 5.000 usuarios activos mensuales**, **D7 ≥ 20 %** y **≥ 2 % de los activos se apunta a la lista**. Si se cumplen, sale en el mes 4-5.
- **Métrica de éxito.** Mes 9: conversión de activos mensuales a pago **≥ 1,2 %**, churn mensual ≤ 6 %, ≥ 55 % de los suscriptores en plan anual, y ≥ 40 % de los suscriptores usa al menos 3 de las 12 ventajas al mes (si no, la lista de ventajas está inflada).
- **Dependencia técnica.** Stripe Billing o *merchant of record* (Paddle/Lemon Squeezy) por el IVA de la UE; tabla `subscriptions` con verificación en servidor; *feature flags* por derecho, nunca por confianza en el cliente; textos precontractuales y desistimiento revisados por `experto-legal`.
- **Responsable.** `estratega-negocio` (precio y umbral) + `desarrollador-backend` + `experto-legal`.

---

### 1.3 Packs PDF imprimibles

Cuatro SKU cerrados más un cebo gratuito. "murdoku pdf" (2.400/mes) + "para imprimir" (350) + "para niños" (210) justifican la línea. Todos se generan con el motor, se maquetan una vez y tienen margen cercano al 100 %.

| Interno | Nombre público | Contenido exacto | Precio | Fase |
|---|---|---|---|---|
| `PDF-CEBO` | "5 casos para imprimir" | 5 casos Escena + soluciones, 8 páginas, marca de agua con la web | **Gratis a cambio del correo** | MVP (semana 8) |
| `PDF-CLASICO` | Pack Detective | 40 casos Escena + 10 Expediente, dificultad progresiva, soluciones razonadas, A4 y carta, versión tinta baja | **5,99 €** | Fase 2 (mes 3) |
| `PDF-AULA` | Pack Aula | 60 casos 3×3 a 5×5 por cursos (2.º a 6.º de primaria), guía docente de 6 páginas, hoja de trabajo, rúbrica, **licencia de aula para 35 copias** | **14,99 €** (licencia de centro: **39,99 €**) | Fase 2 (mes 4, salida en septiembre siguiente si se pierde la ventana) |
| `PDF-JUNIOR` | Pack Junior | 40 casos infantiles sin víctima, 6-10 años, ilustraciones, páginas para colorear la escena | **4,99 €** | Fase 2 (mes 4) |
| `PDF-REGALO` | Edición Regalo | 100 casos de ambos modos, portada personalizable con nombre y dedicatoria, listo para encuadernar, tarjeta regalo imprimible | **9,99 €** | Fase 3 (mes 7, campaña noviembre-diciembre) |

- **A quién sirve.** `PDF-CLASICO`: quien busca "murdoku pdf" para jugar en papel o en un viaje. `PDF-AULA`: docentes de primaria (orientacionandujar ya rankea con "35 murdokus"). `PDF-JUNIOR`: familias. `PDF-REGALO`: compra de Navidad y Reyes.
- **Qué NO incluye ningún pack.** Licencia de reventa, licencia comercial, derecho a redistribuir, versión editable, envío físico, casos que ya se hayan publicado como caso del día en los últimos 90 días (para no canibalizar el archivo).
- **Métrica de éxito.** Mes 6: ≥ 250 unidades vendidas acumuladas y **≥ 600 €/mes** en el conjunto de la línea; tasa de conversión de la página de pack ≥ 2,5 %; reembolsos < 3 %.
- **Dependencia técnica.** Exportador PDF desde `engine/` (maquetación con Typst o LaTeX en batch), pasarela con IVA UE resuelto (Lemon Squeezy/Gumroad en fase 2 para no tocar Stripe), entrega por enlace firmado con caducidad de 72 h y 5 descargas.
- **Responsable.** `ingeniero-motor-puzzles` (exportador) + `disenador-ux-ui` (maquetación) + `periodista-contenidos` (guía docente) + `estratega-negocio` (precio).

---

### 1.4 B2B: licencia del caso diario

---

#### `B2B-WIDGET` — Widget embebible

- **A quién sirve.** Medios digitales en español con sección de pasatiempos (El País Juegos, La Vanguardia, Prensa Ibérica, El Confidencial, La Nación AR, Emol CL) y portales de gran audiencia que quieren retención diaria sin construir nada.
- **Qué incluye exactamente.** Un `<script>` o `<iframe>` que renderiza el caso del día jugable dentro de la página del medio, con colores y tipografía del medio, un enlace discreto "creado por [nuestra marca]", panel con estadísticas de uso, SLA de publicación diaria a las 00:00 y soporte por correo en 24 h laborables.
- **Qué NO incluye.** Exclusividad, dominio propio, cuentas de usuario del medio, archivo, personalización narrativa, casos a medida.
- **Precio.** **450 €/mes** hasta 100.000 partidas/mes; **750 €/mes** hasta 300.000. Contrato de 6 meses, primer mes de piloto gratis.
- **Fase.** Fase 3 (meses 6-12). Piloto con **un** medio en el mes 5 para tener caso de referencia.
- **Métrica de éxito.** Mes 12: **3 contratos activos** y ≥ 1.500 €/mes recurrentes; ≥ 5 % de los jugadores del widget hace clic hacia nuestro sitio (el canal también debe traer usuarios).
- **Dependencia técnica.** Endpoint público con clave de API y cuotas, empaquetado del juego como componente independiente sin cookies de terceros, tematización por tokens, aislamiento de analítica por cliente.

---

#### `B2B-MARCABLANCA` — Caso diario en marca blanca

- **A quién sirve.** Medio o editorial que quiere el juego como producto propio, incluida la versión para papel.
- **Qué incluye exactamente.** Feed JSON diario de casos con narrativa, un PDF listo para imprenta para la edición en papel, personalización de nombres de personajes y escenarios al universo del cliente, hasta 2 revisiones de estilo al mes, y sin mención de nuestra marca.
- **Qué NO incluye.** Cesión de la propiedad intelectual del motor ni de los casos (licencia de uso, no venta), exclusividad territorial salvo sobreprecio del 60 %, integración a medida.
- **Precio.** Desde **1.200 €/mes** (solo digital) hasta **2.500 €/mes** (digital + papel + personalización). Mínimo 12 meses.
- **Fase.** Fase 3 (meses 8-12).
- **Métrica de éxito.** Mes 12: **1 contrato firmado**. Con uno basta para que la línea sea rentable.
- **Dependencia técnica.** Pipeline de generación parametrizable por universo narrativo, exportador a PDF de imprenta con sangrado, contrato de licencia redactado por `experto-legal`.
- **Responsable de ambos.** `estratega-negocio` (venta) + `ingeniero-motor-puzzles` + `experto-legal`.

---

### 1.5 Fase 3 condicional

---

#### `APP-NATIVA` — Envoltorio Capacitor de la PWA

- **A quién sirve.** Las 1.300 búsquedas/mes de "descargar murdoku gratis" y el público que solo entiende "app". También desbloquea notificaciones push fiables en iOS.
- **Qué incluye exactamente.** La misma PWA empaquetada con Capacitor para iOS y Android, más: notificación push del caso del día, icono con insignia de racha, compra de Premium por la tienda. Nada de contenido exclusivo.
- **Qué NO incluye.** Código nativo propio, juego offline completo del archivo, versión de tableta optimizada, presencia en tiendas alternativas.
- **Precio.** Descarga gratuita. Premium en la tienda a **3,99 €/mes** o **24,99 €/año** (recarga de la comisión del 15-30 %; el precio web se mantiene en 2,99/19,99 y se comunica).
- **Fase.** Fase 3, **condicionada a D30 ≥ 25 %** y a que la PWA supere 30.000 usuarios mensuales. Si no se cumple, no se construye.
- **Métrica de éxito.** 20.000 descargas y valoración ≥ 4,3 en los primeros 90 días (la app no oficial tiene 2,36; superarla es el listón).
- **Dependencia técnica.** PWA estable, cuentas de desarrollador, revisión de tiendas, `RevenueCat` o equivalente para las compras.

---

#### `LIBRO-LICENCIA` — Edición impresa

- **A quién sirve.** El mercado donde está hoy el dinero de esta categoría: Murdle ha vendido 3M de ejemplares y Murdoku 300.000 en español.
- **Qué incluye exactamente.** No autoeditamos. Preparamos un dossier con 120 casos seleccionados, la biblia narrativa y datos de audiencia, y lo licenciamos a una editorial (Planeta no; Anaya, SM, Libros Cúpula, Zenith, RBA). Nuestro trabajo: generación, curación y estilo. La editorial: edición, imprenta y distribución.
- **Qué NO incluye.** Autoedición, Amazon KDP, gestión de stock, ilustración a color, gira de promoción.
- **Precio.** Adelanto + royalty del 8-10 % sobre PVP. No se persigue antes de tener marca reconocible.
- **Fase.** Fase 3 (meses 9-12), **condicionada** a que la marca tenga ≥ 50.000 usuarios mensuales o cobertura de prensa nacional.
- **Métrica de éxito.** Una carta de interés firmada en el mes 12.

---

### 1.6 Capa transversal (no es un producto)

#### `ADS` — Publicidad en el tier gratuito

Suelo de ingresos, no producto. Reglas cerradas: **nunca durante la partida**; un único formato, intersticial o banner, **solo en la pantalla de resultado, máximo 1 por sesión**; nada de vídeo con recompensa; consentimiento con banner conforme a la guía de la AEPD; **cero anuncios en `JUNIOR-WEB`**. No se activa antes de **30.000 usuarios mensuales**: por debajo de esa cifra, el daño a la retención y al boca a boca cuesta más que los 1-3 € de RPM.

**[reseñas]** Dos añadidos. Primero, regla nueva y permanente: **nunca un anuncio para desbloquear una pista, una ayuda o una comprobación** (cuatro productos del género se hunden exactamente ahí: «ads take so long to get through that it doesn't feel worth it», «6-12 hints to get an unhinted clue», y una app cuyo vídeo por pista cierra el juego). Segundo, estas reglas dejan de ser internas: se **publican como compromiso** en la página de precios, porque el público del género elogia explícitamente la ausencia de publicidad («not bogged down by advertising») y es el argumento más barato que tenemos.

---

## 2. Qué se descarta y por qué

| Idea | Decisión | Motivo |
|---|---|---|
| Editor de casos para usuarios (UGC) | **Descartado 12 meses** | Requiere moderación, rompe la promesa de "solución única verificada" y no aporta a la métrica de hábito. Coste alto, RICE bajísimo. |
| Ligas semanales y ranking global | **Descartado 12 meses** | Murdoku oficial ya las tiene y no es su ventaja. Introduce presión competitiva que expulsa al jugador casual, que es nuestro público. Los duelos 1v1 dan el 80 % del efecto viral por el 20 % del coste. |
| Multijugador cooperativo en tiempo real | **Descartado** | Infraestructura de tiempo real para un caso de uso no demandado en ninguna búsqueda ni reseña. |
| Modo niños como app o marca separada | **Descartado**, se hace como `JUNIOR-WEB` | Cuentas de menores de 14 años en España exigen consentimiento parental verificable. El valor está en el PDF y en el SEO, no en una app infantil. |
| Versión en inglés o portugués | **Descartado 12 meses** | En inglés compiten murdle.com y decenas de clones; nuestra ventaja es el español. Diluye el foco en la ventana de 6-12 meses. |
| Merchandising físico | **Descartado** | Logística, stock y devoluciones para márgenes bajos. |
| Discord/Telegram propios como producto | **Descartado como producto**, se usan como canal | No tienen métrica de negocio propia; los mantiene `creador-social`. |
| Premium el día 1 | **Descartado** | Sin hábito medido no sabemos qué empaquetar; poner un muro el día 1 mata el bucle SEO + compartir que es toda nuestra adquisición. |
| App nativa en el MVP | **Descartado** | 2-3 semanas de coste y revisiones de tienda que retrasan la ventana. Condicionada a D30 ≥ 25 %. |
| Casos basados en crímenes reales o *true crime* | **Descartado** | Contradice la regla de contenido cozy y abre riesgo de derecho al honor. |
| **[reseñas]** Zoom / pinch dedicado en el tablero | **Descartado** | RICE 0,5. F6 ya obliga a que un 6×6 sea legible y tocable en 360 px. Si F6 se cumple, el zoom sobra; si no, el problema es F6. Sí se acepta lo que cuesta cero: no desactivar el zoom nativo del navegador. |
| **[reseñas]** Más comprobaciones o "vidas" por caso | **Descartado** | La queja del competidor es «no placeholders to test possible character positions»: piden anotar hipótesis, no más intentos. Se responde con anotación múltiple. Se mantienen 1 comprobación gratis / 3 Premium / 0 en duelo y una única acusación irreversible. |
| **[reseñas]** Elo, temporadas y salas privadas | **Descartado 12 meses** | Un competidor en español ya lo tiene y no es su ventaja; mete presión competitiva que expulsa al casual. El duelo por enlace da el efecto social sin el coste. |
| **[reseñas]** Modo cooperativo en la misma pantalla | **Descartado** | La cooperación que describe la prensa ocurre alrededor del papel, con varias personas mirando una hoja: nuestra pantalla ya lo permite sin construir nada. |
| **[reseñas]** Anuncio con recompensa (vídeo por pista) | **Descartado permanentemente** | Cuatro productos distintos se hunden por esto y no hay ni una evidencia a favor. Pasa a ser regla escrita en `ADS`. |
| **[reseñas]** Traducir el producto a otros idiomas | **Descartado 12 meses**, reafirmado | La queja número uno del género en papel **es la traducción** (20 erratas en 6 acertijos en una edición española). Traducir un juego de lógica es exactamente el error que este mercado castiga. Si algún día se hace, se **genera** en el idioma destino, no se traduce. |
| **[reseñas]** Vender "generado por IA" como argumento | **Descartado** | «Poorly designed by AI» aparece como insulto asociado a pistas defectuosas. Prohibido en producto, tienda, landings y vídeos. |

---

## 3. Matriz gratis vs Premium, característica por característica

Regla general: **Premium no quita nada de lo que hay hoy gratis**. Todo lo que aparece como límite gratuito ya existe así desde el primer día.

| # | Característica | Gratis | Premium |
|---|---|---|---|
| 1 | Caso del día, modo Escena | 1/día, siempre | 1/día, siempre |
| 2 | Caso del día, modo Expediente | 1/día, siempre | 1/día, siempre |
| 3 | Caso XL del domingo | Sí | Sí |
| 4 | Casos adicionales bajo demanda | **0** (solo el archivo de 7 días) | **Ilimitados** |
| 5 | Archivo | **Últimos 7 días** (deslizante) | **Completo**, desde el caso 1 |
| 6 | Dificultad | La del día (curva fija lunes→domingo) | **Elegible**: fácil / normal / experto / imposible |
| 7 | Contrarreloj | No | Sí (3 / 5 / 8 min) |
| 8 | Comprobaciones por caso | **1** | **3** (0 para ambos dentro de un duelo) |
| 9 | Deshacer / rehacer | Ilimitado | Ilimitado |
| 10 | Tutorial y explicación de la solución | Sí, completa | Sí, completa |
| 11 | Racha | Sí, común a ambos modos | Sí |
| 12 | Gracia de racha automática | **1 día cada 30**, **[reseñas]** visible y explicada en el calendario | 1 día cada 30, visible y explicada |
| 13 | Congelar racha manualmente | No | **4/mes**, aplicable hasta 48 h después |
| 14 | Modo vacaciones (pausa de racha) | No | Hasta **14 días** seguidos, 2 veces al año |
| 15 | Estadísticas básicas | Sí | Sí |
| 16 | Estadísticas avanzadas | No | Sí (percentiles, comparativa, punto de atasco) |
| 17 | Compartir resultado (texto + imagen) | Ilimitado | Ilimitado |
| 18 | Crear duelos | **3/día** | Ilimitados |
| 19 | Aceptar duelos | Ilimitado | Ilimitado |
| 20 | Retos semanales temáticos (serie de 5) | No | Sí |
| 21 | Temas visuales | **2** (claro y oscuro) | **8** (2 + 6) |
| 22 | Exportar el caso del día a PDF | No | Sí, 1 clic |
| 23 | Packs PDF completos | Se compran aparte | Se compran aparte **con 30 % de descuento** |
| 24 | Anuncios (si se activan tras 30.000 MAU) | 1 por sesión, solo en resultado | **Ninguno** |
| 25 | Sincronización entre dispositivos | Sí, con cuenta gratuita | Sí |
| 26 | Exportar y borrar mis datos (RGPD) | Sí, 1 clic | Sí, 1 clic |
| 27 | Soporte | Correo, mejor esfuerzo | Correo, respuesta en 48 h |
| 28 | **[reseñas]** Reparación de racha cuando el error es nuestro | **Sí, automática**, sin escribir a nadie | Sí, automática |
| 29 | **[reseñas]** Explicación pública de la solución de cada caso (día 8) | Sí, abierta a todo el mundo | Sí |
| 30 | **[reseñas]** Hoja de trabajo en blanco imprimible | Sí, sin pedir el correo | Sí |

**Ambigüedades resueltas explícitamente:**
- "Casos ilimitados" significa generación bajo demanda con semilla nueva, no acceso anticipado al caso de mañana. **Nadie**, ni Premium, ve el caso del día antes de su publicación.
- Premium **no** da ventaja en duelos: las comprobaciones se igualan a 0 y el contrarreloj no aplica.
- La racha es una y solo una por cuenta, no una por modo.
- El archivo gratuito son los 7 días naturales anteriores a hoy, deslizante: un caso que sale del archivo deja de ser jugable en gratis.

---

## 4. MVP: características con criterio de "hecho" verificable

Alcance de las semanas 1-8. Si una característica no cabe, se corta de abajo hacia arriba: F17, F16, F13. **[reseñas]** Dentro de los añadidos de D-007, el orden de corte es: primero la hoja imprimible en blanco, luego la anotación por arrastre, luego las páginas de explicación del día 8 (estas últimas se pueden desplegar en la semana 9 sin coste de oportunidad: por definición no hacen falta hasta el día 8). **F19 y la parte de accesibilidad de F12 no se cortan**: la primera es la queja que hunde a la app líder del género, la segunda es obligación legal.
"Hecho" significa: implementado, con test automatizado que lo cubre, desplegado en producción y validado por `revisor-calidad`.

| # | Característica | Criterio de "hecho" (verificable) | Responsable |
|---|---|---|---|
| F1 | Motor: generador + solver Escena | Genera 1.000 puzzles con semilla fija; **el 100 % tiene exactamente 1 solución** (conteo con parada en 2), **0 % requiere adivinar** (resoluble por la escalera de técnicas humanas), **0 pistas redundantes**; media < 400 ms por puzzle; salida reproducible bit a bit con la misma semilla. | `ingeniero-motor-puzzles` |
| F2 | Métrica de dificultad | Cada puzzle sale etiquetado fácil/normal/experto por profundidad de inferencia; en una muestra de 60 casos resueltos a mano por 5 personas, la correlación entre etiqueta y tiempo real es ≥ 0,6. | `ingeniero-motor-puzzles` + `analista-datos` |
| F3 | Validación de pistas escritas por IA | Toda pista redactada se vuelve a parsear a forma formal; si no coincide exactamente con la original, se descarta. Test: 500 pistas generadas, 0 casos de pista aceptada con semántica distinta. **[reseñas]** Además, tres validaciones nuevas y bloqueantes: (a) todo lugar citado en la pista existe en ese tablero concreto; (b) género y número de la pista concuerdan con la ficha del personaje (el fallo exacto que rompió el caso 60 de una edición del libro de referencia); (c) ningún texto pasa por un paso de traducción: el español es lengua de origen. Test: 500 pistas, 0 aceptadas con lugar inexistente y 0 con discordancia de género. | `ingeniero-motor-puzzles` + `guionista-misterio` |
| F4 | Banco de 60 casos publicables | 60 casos en `content/casos/`, cada uno validado por el motor y **resuelto a ciegas por una persona** de `revisor-calidad` sin ambigüedad reportada; curva semanal 4×4 → 6×6 aplicada. | `guionista-misterio` + `revisor-calidad` |
| F5 | Publicación del caso del día | Dado un usuario en cualquier zona horaria, cuando son las 00:00 de su fecha local, entonces ve un caso nuevo con número correlativo y el anterior pasa al archivo. La solución no viaja al cliente hasta que se acusa (verificable inspeccionando la respuesta de red). **[reseñas]** Añadidos verificables: **un número de caso = un solo contenido para todo el mundo** (nunca dos casos distintos bajo el mismo número, el fallo que arruinó la comparación en Wordle #284); cuenta atrás visible hasta el siguiente caso; la zona horaria declarada solo puede cambiarse una vez cada 24 h; test de reloj simulado que cubre los dos cambios de horario de verano. | `desarrollador-backend` |
| F6 | Cuadrícula táctil | En un móvil de 360 px de ancho, una cuadrícula 6×6 es legible y cada objetivo táctil mide ≥ 44 px; el ciclo de estados por toque funciona sin retraso de 300 ms; probado en Chrome Android e iOS Safari reales. **[reseñas]** Ejes numerados y rotulados visibles en todo momento, también en 6×6; tocar una pista resalta las celdas que afecta; el zoom nativo del navegador **no** está desactivado (`user-scalable=no` prohibido). | `disenador-ux-ui` + `desarrollador-frontend` |
| F7 | Anotaciones, deshacer y rehacer | Estado del puzzle como máquina de estados con historial; deshacer/rehacer ilimitado; test Playwright de 50 acciones aleatorias seguidas de 50 deshacer devuelve el tablero al estado inicial exacto. **[reseñas]** Añadidos: marcar o descartar un candidato en varias celdas con un arrastre, "borrar todas las anotaciones de este sospechoso" y botón "Empezar de cero" visible durante la partida. | `desarrollador-frontend` |
| F8 | Comprobar y acusar | Comprobar (1 uso) devuelve solo el número de celdas erróneas, nunca cuáles: verificable en la respuesta del servidor. Acusar es irreversible, pide confirmación y muestra la solución razonada paso a paso. | frontend + backend |
| F9 | Tutorial de 60 segundos | Un usuario nuevo que nunca ha jugado completa el tutorial en ≤ 90 s en 8 de cada 10 pruebas con personas reales; se puede saltar y se puede repetir desde ajustes. **[reseñas]** Incluye una pantalla dedicada a la convención espacial (de dónde se cuentan filas y columnas); en la prueba con personas reales, 9 de 10 responden bien a "¿dónde está el pasillo 3?" al terminar. | `disenador-ux-ui` |
| F10 | Persistencia, cuenta opcional y sincronización | Sin cuenta, cerrar y reabrir el navegador conserva la partida en curso y la racha. Al registrarse por magic link, el progreso anónimo se fusiona sin duplicar ni perder días (test con 3 escenarios de colisión). **[reseñas]** Criterio nuevo y verificable con **dos dispositivos reales**: empiezo el caso en el móvil, abro el portátil con la misma cuenta y encuentro la partida en curso, la racha y las estadísticas. El texto de registro dice qué gana el usuario ("guarda tu racha en todos tus dispositivos"), no qué pierde si no se registra. | `desarrollador-backend` |
| F11 | Racha y calendario | La racha aumenta al resolver cualquiera de los casos del día; se rompe al segundo día perdido consecutivo (gracia de 1 día cada 30) y el calendario de 30 días muestra resuelto / fallado / gracia / sin jugar. Test de reloj simulado que cubre cambio de mes, año bisiesto y cambio de zona horaria. **[reseñas]** La gracia es **visible**: el día en azul lleva explicación al tocarlo y el mensaje dice "tu racha sigue viva: has usado tu día de gracia". Existe además una ventana de 48 h para recuperar el día perdido **sin intervención humana** cuando la causa fue nuestra (caída, errata o fallo de sincronización), disparada desde F18. | `desarrollador-backend` |
| F12 | Compartir sin spoiler | Genera texto con emojis y una imagen 9:16; **ninguna de las dos revela posiciones ni nombres** (revisado por `revisor-calidad` sobre 20 resultados distintos); usa Web Share API con alternativa de copiar al portapapeles; el enlace lleva parámetro de atribución. **[reseñas]** Accesibilidad: la cuadrícula compartida tiene tamaño máximo acotado, la imagen lleva texto alternativo descriptivo y el texto incluye una línea resumen legible, de modo que un lector de pantalla no lea decenas de emojis uno a uno. No se corta. | `desarrollador-frontend` |
| F13 | Archivo de 7 días | Muestra exactamente los 7 días naturales anteriores; un caso del día 8 devuelve 404 con invitación a la lista de espera Premium. **[reseñas]** Cada ficha del archivo indica cuándo caduca ("sale del archivo en 2 días"); el día 8 deja de ser un 404 comercial y pasa a ser la página pública `/casos/<n>` con la explicación razonada de la solución y la oferta de Premium debajo. | backend |
| F14 | 8 landings SEO jugables | Las 8 URLs renderizan en servidor con el puzzle en el HTML inicial, Lighthouse móvil ≥ 90 en rendimiento y accesibilidad, metadatos y OG completos, y los textos con marca ajena aprobados por `experto-legal`. | frontend + `estratega-growth-seo` |
| F15 | Analítica de eventos | La taxonomía de `docs/analitica/eventos.md` está implementada y **cada evento del embudo llega a PostHog en un recorrido de prueba grabado**: `caso_abierto`, `tutorial_completado`, `primera_celda`, `comprobacion_usada`, `acusacion`, `resuelto`, `abandono` (con el paso), `compartido`, `retorno_d1`. | `analista-datos` + frontend |
| F16 | PWA y legal | Instalable, funciona sin conexión con el caso ya cargado, el service worker no rompe una partida en curso al actualizarse (test explícito). Aviso legal, política de privacidad, política de cookies conforme a la AEPD y banner de consentimiento publicados. | frontend + `experto-legal` |
| F17 | Newsletter | Alta con doble opt-in desde la pantalla de resultado y desde la landing; envío diario automatizado; baja en un clic funcionando; prueba de entregabilidad ≥ 95 % en Gmail, Outlook y Apple Mail. **[reseñas]** Máximo **un correo al día**, sin excepciones ni campañas añadidas: el relato de prensa del género es "salir de las pantallas" y un producto digital que insiste pierde esa conversación. | backend + `periodista-contenidos` |
| **F18** | **[reseñas] Promesa de solución única, erratas y reparación de racha** | Existe `/una-sola-solucion` explicando el método de verificación y una página de erratas pública. La pantalla de resultado tiene "reportar un problema con este caso" y el informe llega a una bandeja revisada a diario. Prueba end-to-end: se marca un caso como defectuoso y **la racha de todos los que lo jugaron ese día se repara sola**, con correo de aviso, sin que nadie escriba a soporte. | `desarrollador-backend` + `periodista-contenidos` |
| **F19** | **[reseñas] Estabilidad y persistencia de ajustes** | Los ajustes (tema, sonido, autopropagación, idioma de variante) se guardan en local y en cuenta y sobreviven a recargar, a cerrar el navegador y a una actualización del *service worker*; el cronómetro del caso no se reinicia al recargar; la suite E2E se ejecuta en **un Android de gama media real**, no solo en emulador, sin bloqueos ni toques perdidos en 3 partidas completas. No se corta: es la queja que hunde a la app más descargada del género. | `revisor-calidad` + frontend |

**Fuera del MVP, sin excepciones:** Premium y pasarela de pago, modo Expediente, duelos, packs PDF de pago (solo el cebo gratuito **y [reseñas] la hoja de trabajo en blanco, que no lleva casos**), app nativa, anuncios, sección infantil, B2B, editor, ligas. **[reseñas]** También fuera: la pista contextual del solver, condicionada a que el abandono antes de acusar supere el 35 % en el mes 2.

---

## 5. Decisiones abiertas que necesitan al usuario

Eran cinco; **quedan cuatro**: D4 se cerró en D-007. Cada una bloquea trabajo; se necesita respuesta antes del final de la semana 1.

**D1. ¿Cómo se llaman los modos de cara al usuario?**
El brief usa "Caso del día" para la mecánica espacial, lo que deja sin nombre al caso diario del modo lógico.
*Recomendación:* "Caso del día" es el ritual; las mecánicas son **Escena** (espacial) y **Expediente** (lógico). Alternativa descartada: llamar "Murdoku" y "Murdle" a los modos, prohibido por la regla de marca. Impacto si se retrasa: bloquea microcopy, iconos, landings y el nombre de las rutas.

**D2. ¿El MVP sale con un modo o con dos?**
*Recomendación:* **uno, Escena**, en las semanas 1-8, y Expediente en producción entre las semanas 10 y 14. Motivo: Escena captura las 20.000 búsquedas/mes; Expediente captura 330. Salir con los dos añade 3-4 semanas y consume la ventana. Alternativa descartada: salir con los dos para diferenciarnos desde el día 1; el diferencial no sirve de nada si llegamos tarde.

**D3. ¿Cuándo se abre Premium y a qué precio?**
*Recomendación:* **2,99 €/mes y 19,99 €/año**, con precio fundador de **14,99 €/año** para la lista de espera; se programa la pasarela solo si a los 60 días hay ≥ 5.000 usuarios mensuales, D7 ≥ 20 % y ≥ 2 % de apuntados. Alternativa descartada: 4,99 €/mes; en España, con un producto sin marca todavía, mata la conversión y el listón mental es NYT Games (≈ 40 $/año) para un catálogo mucho mayor.

**D4. ¿A qué hora cambia el caso del día?** — **CERRADA el 6 de septiembre de 2026 en D-007. [reseñas]** Se adopta la recomendación: **medianoche de la hora local del dispositivo**, número de caso por fecha civil local, **un número = un solo contenido para todo el mundo**, cuenta atrás visible, cambio de zona declarada limitado a una vez cada 24 h y racha calculada en servidor. Ver §6.11. Ya no bloquea trabajo.

**D5. ¿Activamos publicidad en el tier gratuito y cuándo?**
*Recomendación:* **no antes de 30.000 usuarios mensuales**, y cuando se active, un solo formato en la pantalla de resultado, máximo uno por sesión, cero en la sección infantil. Por debajo de esa cifra son 30-90 €/mes a cambio de dañar la retención y el boca a boca, que son todo nuestro crecimiento. Alternativa descartada: anuncios desde el día 1 para financiar la infraestructura; la infraestructura cuesta 100-300 €/mes y es asumible.

---

## 6. Decisiones ya cerradas en este documento

No se reabren sin datos nuevos.

1. El caso del día es gratis para siempre en ambos modos. Premium nunca lo bloquea.
2. La racha es única por cuenta, común a los dos modos: basta resolver uno de los dos casos.
3. Gracia automática de 1 día cada 30 para todos; congelaciones manuales solo en Premium.
4. Archivo gratuito de 7 días deslizante; archivo completo es la ventaja principal de Premium.
5. Premium no da ventaja en duelos.
6. El modo niños es una sección web y un pack PDF, no una app ni un modo con cuenta.
7. Cinco SKU de PDF y ni uno más en 12 meses.
8. Nada de UGC, ligas, tiempo real, merchandising ni idiomas adicionales en 12 meses.
9. La app nativa está condicionada a D30 ≥ 25 %.
10. Los anuncios no son un producto: son una capa con reglas fijas y umbral de activación.
11. **[reseñas]** El caso del día cambia a **medianoche de la hora local del dispositivo**, con un solo contenido por número de caso. Cierra D4.
12. **[reseñas]** La curva semanal se define por **dificultad medida por el motor**, no por tamaño de cuadrícula: lunes el más suave, sábado el más difícil, domingo el más grande pero no el más duro.
13. **[reseñas]** Se mantienen 1 comprobación en gratis, 3 en Premium, 0 en duelo y **una única acusación irreversible**. Quien quiere probar hipótesis lo hace con anotaciones, no con más intentos.
14. **[reseñas]** Nunca un anuncio para desbloquear una pista, una ayuda o una comprobación. Regla permanente y publicada.
15. **[reseñas]** No se comunica "generado por IA" en ningún texto de producto o marketing. Se comunica "solución única verificada por el motor y caso resuelto por una persona antes de publicarse".

---

## 7. Trabajo que se reparte a partir de este documento

| Tarea | Entregable | Dónde | Hecho cuando | Agente |
|---|---|---|---|---|
| Cerrar mecánica Escena y taxonomía de pistas | Especificación implementable sin preguntas | `docs/diseno/mecanica-escena.md` | El ingeniero del motor la implementa sin abrir una sola duda | `disenador-puzzles` |
| Contrato del motor (DSL de pistas + API) | Esquema versionado + tipos TypeScript | `docs/motor.md`, `engine/` | F1, F2 y F3 del MVP verdes | `ingeniero-motor-puzzles` |
| Validar precios y umbral de Premium | Modelo con escenarios y umbral de decisión | `docs/estrategia-precios.md` | Responde D3 con números | `estratega-negocio` |
| Mapa de intención → 8 landings | Brief por página con puzzle asignado | `docs/plan-seo.md` | Cada URL tiene título, intención, puzzle y llamada a la acción | `estratega-growth-seo` |
| Taxonomía de eventos antes de programar | Lista cerrada de eventos y propiedades | `docs/analitica/eventos.md` | Frontend puede instrumentar sin preguntar | `analista-datos` |
| Riesgo de marca y textos comparativos | Guía de uso de marcas ajenas + textos legales | `docs/legal/` | Las 8 landings tienen los textos aprobados | `experto-legal` |
| PRD del modo Expediente | PRD con criterios Given/When/Then | `docs/specs/modo-expediente.md` | Antes de la semana 9 | `director-producto` |
| **[reseñas]** Vocabulario espacial cerrado y versionado, y curva semanal por dificultad medida | Lista canónica de relaciones (una forma por relación) + tabla lunes→domingo con rango de pasos de inferencia | `docs/diseno/mecanica-escena.md` | El motor puede etiquetar un caso como "martes" o "sábado" sin criterio humano | `disenador-puzzles` |
| **[reseñas]** Las tres validaciones nuevas de F3 (lugar existente, concordancia de género, cero traducción) | Reglas implementadas + suite de 500 pistas | `engine/` | F3 verde con los tres tests nuevos | `ingeniero-motor-puzzles` |
| **[reseñas]** Textos de `/una-sola-solucion`, página de erratas y compromiso público de anuncios | Tres páginas redactadas y revisadas | `web/`, `docs/legal/` | Publicadas el día del lanzamiento | `periodista-contenidos` + `experto-legal` |
| **[reseñas]** F18 (reportar y reparar racha) y F19 (estabilidad y persistencia) | Endpoint + flujo de reparación; suite E2E en Android real | `web/`, `supabase/` | Prueba end-to-end de reparación automática pasando | `desarrollador-backend` + `revisor-calidad` |
| **[reseñas]** Plantilla de `/casos/<n>` con la explicación razonada | Ruta SSG alimentada por la salida del motor | `web/` | Se despliega el día 8 tras el lanzamiento | `estratega-growth-seo` + frontend |
| **[reseñas]** Las 10 comprobaciones manuales de la sección 5 de `docs/oportunidades-resenas.md` | Notas con capturas por comprobación | `docs/investigacion/` | Antes del final de la semana 2; las 2, 3 y 10 son urgentes | usuario + `analista-datos` |

---

*Cambios a este documento: los registra `director-producto` con fecha y motivo en `docs/decisiones.md`.*
