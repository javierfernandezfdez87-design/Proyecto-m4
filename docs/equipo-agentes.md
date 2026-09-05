# Equipo de agentes del proyecto

Catorce agentes especializados viven en `.claude/agents/`. Cada uno tiene en su prompt el contexto del proyecto, el conocimiento que necesita para ser experto en su área, cómo entrega su trabajo y con quién coordina. Todos leen `docs/contexto-proyecto.md` antes de empezar.

## Cómo usarlos

- Desde Claude Code, pide el trabajo nombrando al agente: "usa `disenador-puzzles` para definir la taxonomía de pistas" o deja que Claude elija por la descripción.
- Para tareas transversales, empieza por `director-producto`: reparte el trabajo y mantiene `docs/roadmap.md` y `docs/decisiones.md`.
- Los agentes escriben en carpetas propias (`docs/`, `content/`, `engine/`, `web/`, `supabase/`) para que el trabajo quede en el repositorio y no en la conversación.

## El equipo de un vistazo

| Agente | Rol | Entregables principales | Modelo |
|---|---|---|---|
| `director-producto` | Coordina, define MVP, prioriza, escribe specs | `docs/roadmap.md`, `docs/specs/`, `docs/decisiones.md` | opus |
| `estratega-negocio` | Modelo de negocio, precios, proyecciones, go/no-go | `docs/estrategia-*.md` | opus |
| `estratega-growth-seo` | SEO, landings jugables, bucles virales, lanzamiento | `docs/plan-seo.md`, `docs/plan-lanzamiento.md` | opus |
| `disenador-puzzles` | Mecánicas, pistas, dificultad, tutorial, formatos | `docs/diseno/` | opus |
| `ingeniero-motor-puzzles` | Generador + solver determinista, DSL, dificultad, pipeline | `engine/`, `docs/motor.md` | opus |
| `guionista-misterio` | Biblia narrativa, casos, pistas en lenguaje natural, microcopy | `content/biblia.md`, `content/casos/`, `docs/guia-estilo.md` | sonnet |
| `periodista-contenidos` | Guías, comparativas, newsletter, prensa | `content/articulos/`, `content/calendario.md` | sonnet |
| `creador-social` | TikTok/Reels/Shorts, creadores, comunidad | `content/social/` | sonnet |
| `disenador-ux-ui` | Marca, iconos, cuadrícula táctil, flujos, tokens | `docs/diseno/ux/`, prototipos | opus |
| `desarrollador-frontend` | PWA, interfaz de juego, landings SSR, rendimiento | `web/` | opus |
| `desarrollador-backend` | Datos, auth, caso diario, rachas, pagos, RGPD | `web/` (API), `supabase/`, `docs/backend.md` | opus |
| `analista-datos` | Eventos, retención, calibración, experimentos | `docs/analitica/` | sonnet |
| `revisor-calidad` | QA de puzzles y de app, accesibilidad, localización | `docs/calidad/` | sonnet |
| `experto-legal` | Marcas, competencia desleal, RGPD, consumo, menores | `docs/legal/` | opus |

## Análisis: qué debe saber cada perfil para ser experto

### Estrategas

**Estratega de negocio.** Necesita dominar la economía de suscripción (LTV, CAC, churn, payback, conversión gratis→pago) y, sobre todo, los benchmarks reales del género: NYT Games cobra 40 $/año y tiene más de un millón de suscriptores solo de juegos; Puzzmo cobra lo mismo; Murdle y Murdoku regalan el juego y ganan con libros; los juegos web convierten al 1-2 %, no al 3 %. Debe conocer el mercado hispanohablante (tamaños, poder adquisitivo, estacionalidad editorial como Sant Jordi y Navidad), las líneas de ingreso alternativas que los datos justifican (PDF imprimibles, licencia a medios, anuncios) y la fiscalidad de servicios digitales en la UE (IVA, ventanilla única, merchant of record). Su método: hipótesis falsables con umbral y fecha, escenarios en lugar de cifras únicas, y distinguir siempre lo medido de lo estimado.

**Estratega de growth y SEO.** Debe saber mapear intención de búsqueda a páginas jugables, no a artículos: la demanda medida ("murdoku online" 9.900, "murdoku en español" 2.400, "para niños" y "fácil" con dificultad cero) exige landings que contengan el juego. Tiene que entender los límites de Google con palabras clave de marca ajena (doorway pages), el SEO técnico de una PWA (renderizado en servidor, canónicas del archivo diario, hreflang es-ES/es-419, Core Web Vitals), los bucles virales de los juegos diarios (compartir sin spoiler, duelos por enlace, k-factor) y el formato de vídeo corto que hizo viral Murdoku. Y medir por usuarios activados por canal, no por visitas.

**Director de producto.** Es el perfil añadido que hace que el resto funcione: convierte estrategia en especificaciones con criterios de aceptación, reparte trabajo y registra decisiones. Debe dominar el diseño de hábito (modelo Hook, escasez del "uno al día", rachas y su lado oscuro, política de zona horaria), el alcance de MVP (qué valida y qué escala), la priorización (RICE, coste de retraso) y la experimentación con muestras pequeñas (tests secuenciales, cohortes, umbral de decisión previo).

### Creativos

**Diseñador de puzzles.** Es el creativo más importante y el más técnico. Debe conocer la teoría del puzzle de deducción (cuadrados latinos, cuadrículas lógicas tipo cebra, principio de solución única, principio de "sin adivinar", redundancia de pistas), una taxonomía completa de pistas con su coste cognitivo, las dos mecánicas del producto (espacial tipo Murdoku y lógica tipo Murdle) con vocabulario espacial sin ambigüedad, y cómo medir la dificultad por profundidad de inferencia en lugar de a ojo. También la experiencia: onboarding en 60 segundos, estados de celda en móvil, diferencia entre comprobar y acusar, curva semanal, formatos especiales. Su entregable tiene que ser implementable por el ingeniero del motor sin preguntar.

**Guionista de misterio.** Debe dominar las reglas del juego limpio del whodunit (Knox, Van Dine), el tono cozy mystery con humor, la construcción de personajes con silueta e inicial distintas, escenarios con habitaciones de nombre inequívoco, y la disciplina de redactar pistas a partir de su forma formal con la regla "una pista, una lectura", devolviendo siempre la forma formal para que el motor la valide. Necesita español neutro con sabor de España, conocimiento de dobles sentidos regionales y Fundéu/RAE como árbitros, y saber dirigir a la IA con plantillas y filtros en lugar de dejarla escribir sola.

**Periodista de contenidos.** Debe aportar rigor (verificación, fuentes, distinción hecho/opinión, libro de estilo) y SEO editorial (estructura por intención, respuesta directa al principio, FAQ real, E-E-A-T). Conoce las piezas del proyecto: guías evergreen, comparativas honestas con competidores revisadas legalmente, newsletter diaria de 80 palabras, kit de prensa y pitch a medios tecnológicos y culturales en español, contenido para profesores. No inventa datos ni usa marcas ajenas como nombre del producto.

**Creador de contenido social.** Debe dominar el vídeo corto que retiene (gancho en el primer segundo, una pista cada 3-4 segundos, pausa para pensar, revelación, una sola llamada a la acción, subtítulos quemados), los formatos recurrentes y las series con personajes, las diferencias entre TikTok, Reels, Shorts, X y WhatsApp Channels, el trabajo con creadores de BookTok y pasatiempos (brief, caso exclusivo, enlace medible) y la gestión de comunidad en Reddit, Discord o Telegram con control de spoilers. Mide retención del vídeo y usuarios activados por vídeo, y itera el gancho.

**Diseñador de UX/UI y marca.** Debe saber diseñar una cuadrícula táctil para un pulgar (44 px, ciclo de estados por toque, arrastrar, deshacer visible, 6×6 legible en 360 px), un lenguaje visual cozy con modo oscuro y tipografía con tildes y ñ, un sistema de iconos de sospechosos y objetos inconfundibles a 24 px y apto para daltónicos, los flujos clave (onboarding, caso, acusar, resultado, compartir en 9:16 y 1:1, archivo, paywall sin trucos oscuros), accesibilidad WCAG 2.2 AA, la PWA (icono, instalación diferida, offline) y un sistema de tokens exportable a Tailwind. También los criterios de nombre y marca.

### Desarrolladores

**Ingeniero del motor de puzzles.** Es el activo técnico. Debe dominar el modelado como problema de satisfacción de restricciones (propagación, backtracking, conteo de soluciones con parada en 2 para probar unicidad), el diseño de un DSL de pistas serializable con semántica exacta y test por predicado, la generación "solución primero, luego pistas" con eliminación de redundantes y semilla determinista, un solver "humano" con escalera de técnicas que mide dificultad y rechaza lo que exige adivinar, la validación de ida y vuelta de las pistas redactadas por IA, y un pipeline con esquema versionado, detección de duplicados, cron de publicación y solución nunca enviada en claro al cliente. Tests de propiedad y benchmarks son obligatorios.

**Desarrollador frontend.** Debe dominar Next.js o SvelteKit con TypeScript estricto y Tailwind, el estado del puzzle como máquina de estados con historial, gestos táctiles sin retraso, persistencia local, PWA con Workbox y sus rarezas en Safari iOS, renderizado en servidor de landings con metadatos, Open Graph generado y datos estructurados, Web Share API con fallback y tarjetas en canvas, Vitest y Playwright en móvil emulado, Lighthouse con presupuesto en CI, Sentry, accesibilidad e i18n preparada para es-ES/es-419.

**Desarrollador backend.** Debe dominar Supabase/Postgres con Row Level Security y migraciones, autenticación anónima con fusión de progreso al registrarse, la política de zona horaria del caso del día y las rachas con gracia, anticheat proporcionado (verificación en servidor, resultado firmado), pagos con Stripe Billing o merchant of record y sus implicaciones de IVA, duelos con tokens, cron de publicación, backups probados, coste por usuario y cumplimiento RGPD (exportar y borrar en un clic).

### Soporte (perfiles añadidos)

**Analista de datos.** Sin él, el proyecto no puede aprender. Debe definir la taxonomía de eventos antes de programar, dominar las métricas del juego diario (retención por cohorte, distribución y supervivencia de rachas, punto de abandono por celda o pista, tasa de compartir y k-factor, activación), calibrar la dificultad cruzando la métrica del motor con tiempo y abandono reales, seguir el embudo de negocio y el SEO por landing, y aplicar estadística práctica con muestras pequeñas. Herramientas: PostHog, SQL, Search Console, Semrush.

**Revisor de calidad.** Es el último filtro. Debe saber resolver casos a ciegas y detectar ambigüedades en español de España y de LatAm, probar la matriz de dispositivos y los flujos críticos (medianoche, cambio de zona horaria, offline, actualización del service worker con partida en curso, pagos en modo test), auditar accesibilidad y localización, convertir cada bug en un test automatizado y escribir informes reproducibles con severidad.

**Experto legal.** Es el perfil que evita el error caro. Debe dominar el registro de marca en OEPM y EUIPO (clases 9 y 41) y el riesgo con "Murdoku" y "Murdle", la publicidad comparativa lícita según la Ley de Competencia Desleal y la Directiva 2006/114 (qué se puede decir y cómo), la frontera entre mecánica no protegible y expresión protegida, RGPD y LOPDGDD con la guía de cookies de la AEPD y las reglas para menores (14 años en España), y el derecho de consumo para suscripciones (información precontractual, desistimiento de 14 días y su excepción para contenido digital, cancelación fácil, renovación informada, IVA incluido). Siempre ofrece la alternativa segura y marca lo que debe revisar un abogado colegiado.

## Flujo de trabajo recomendado

1. `director-producto` fija el alcance del MVP y las specs; `estratega-negocio` y `estratega-growth-seo` aportan hipótesis y canales.
2. `disenador-puzzles` cierra mecánicas y taxonomía de pistas; `ingeniero-motor-puzzles` implementa el DSL, el solver y el generador con tests.
3. `guionista-misterio` construye la biblia y las plantillas de redacción; el motor valida cada pista redactada.
4. `disenador-ux-ui` entrega flujos, tokens e iconos; `desarrollador-frontend` y `desarrollador-backend` construyen la PWA con los eventos definidos por `analista-datos`.
5. `experto-legal` entrega marca, textos legales y guía de uso de marcas ajenas antes del lanzamiento.
6. `periodista-contenidos` y `creador-social` preparan landings, guías y vídeos con casos aprobados por `revisor-calidad`.
7. Tras el lanzamiento, `analista-datos` informa cada semana y `director-producto` ajusta el roadmap.
