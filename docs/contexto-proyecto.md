# Contexto del proyecto (brief compartido para todos los agentes)

Lee este documento antes de trabajar. El análisis completo está en `docs/analisis-estrategico.md`.

## Qué estamos construyendo
El juego diario de deducción y misterio en español. Web móvil / PWA primero, sin app nativa hasta demostrar tracción.

- **Modo "Caso del día" (tipo Murdoku):** deducción espacial. Cada sospechoso ocupa una celda de una cuadrícula/mapa, uno por fila y columna, y el jugador los coloca a partir de pistas espaciales. El asesino es quien estaba con la víctima. Es el canal de adquisición: más de 20.000 búsquedas/mes en España de "murdoku online / gratis / en español" sin ningún producto sólido en español.
- **Modo "Expediente" (tipo Murdle):** cuadrícula lógica sospechoso × lugar × arma (× motivo). Es el producto diferencial: no existe nada online en español y encaja con narrativa generada por IA.
- Una partida dura 5-15 minutos. Racha, estadísticas, compartir resultado sin spoiler, archivo, duelos con enlace, Premium.

## Hechos clave del mercado (septiembre 2026)
- Murdoku (libro, Temas de Hoy/Planeta) es el fenómeno en España: 17 ediciones, +140.000 ejemplares, viral en TikTok. "murdoku" 33.100 búsquedas/mes; "murdle" 3.600.
- La demanda online la capturan hoy clones y una app no oficial con 2,36/5 y 63.000 descargas en 30 días. La web oficial murdoku.com tiene ~46.000 visitas/mes desde España y solo 500 palabras clave.
- Murdle tiene público de libro en España, pero online solo existe en inglés.
- Ventana estimada: 6-12 meses antes de que la moda se enfríe o el editor lance algo serio en español.

## Reglas no negociables
1. **Marca propia.** Nunca usar "Murdoku", "Murdle" ni derivados ("-doku", "-dle") en nombre, dominio, logo, app o personajes. Solo referencia comparativa en contenido editorial ("juegos como Murdoku", "si te gustan los Murdle").
2. **No copiar** personajes, textos, casos, ilustraciones ni elementos distintivos de ningún competidor. Las mecánicas no son protegibles; la expresión sí.
3. **La lógica la decide el motor determinista.** Todo puzzle publicado tiene exactamente una solución, es resoluble sin adivinar y tiene dificultad medida. La IA escribe historia, nombres, pistas y humor, pero cada pista se valida contra el solver.
4. **Español neutro con sabor local.** España es el primer mercado; Argentina, Chile y México vienen detrás. Evitar localismos que rompan la comprensión en LatAm.
5. **Contenido seguro.** Misterio "cozy": sin gore, sin crímenes reales, sin menores como víctimas, sin violencia sexual, sin humillación de colectivos.
6. **Velocidad y diferenciación.** El desarrollo se apoya en los agentes y el coste de cómputo no es la restricción (D-009): se prioriza lo que diferencia el producto y gusta a los jugadores, validado con personas reales. La fecha de lanzamiento se decide de forma consciente por la ventana de mercado (6-12 meses), no por recorte de alcance; decisión de continuar/parar en el día 90.

## Modelo de negocio
Gratis: caso del día, racha, estadísticas básicas, compartir, archivo de 7 días. Premium (2,99 €/mes o 19,99-24,99 €/año, no antes de tener hábito medido): archivo completo, casos ilimitados, dificultades, contrarreloj, duelos ilimitados, sin anuncios. Ingresos paralelos: packs PDF imprimibles, licencia del caso diario a medios, anuncios en el tier gratuito.

## Métricas que importan
Usuarios activos diarios y mensuales, retención D1/D7/D30, racha media, tasa de resolución por puzzle y punto de abandono, tasa de compartir, coeficiente viral, conversión a Premium, churn, tráfico orgánico por landing.

## Stack previsto
Next.js (App Router) o SvelteKit + TypeScript + PWA, Tailwind, Supabase (Postgres, Auth, Edge Functions), Stripe (o un merchant of record como Paddle/Lemon Squeezy para IVA UE), Vercel/Cloudflare, PostHog para analítica, motor de puzzles en TypeScript ejecutado en batch.

## Dónde vive cada cosa
- `docs/` análisis, especificaciones, guías de estilo.
- `.claude/agents/` el equipo de agentes; `docs/equipo-agentes.md` explica quién hace qué.
- `engine/` motor de puzzles (generador + solver). `web/` aplicación. `content/` biblia narrativa y casos. (Se crean cuando arranque el desarrollo.)
