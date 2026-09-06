# Proyecto: juego diario de deducción y misterio en español

Lee `docs/contexto-proyecto.md` antes de cualquier tarea. El análisis de mercado y la estrategia están en `docs/analisis-estrategico.md`.

## Equipo de agentes
Hay 14 agentes especializados en `.claude/agents/` (estrategia, producto, diseño de puzzles, motor, guion, periodismo, redes, UX/UI, frontend, backend, datos, calidad, legal). `docs/equipo-agentes.md` explica quién hace qué, qué debe saber cada uno y el flujo de trabajo. Para tareas amplias, empieza por `director-producto`.

## Reglas del proyecto
- Marca propia: nunca "Murdoku", "Murdle" ni derivados en nombre, dominio, código de producto o personajes. Solo referencia comparativa en contenido editorial.
- Todo puzzle publicado tiene solución única, se resuelve sin adivinar y tiene dificultad medida por el motor. La IA escribe; el motor decide.
- Español neutro con base de España. Contenido cozy: sin gore, crímenes reales, menores como víctimas ni violencia sexual.
- Los entregables se guardan en el repositorio (`docs/`, `content/`, `engine/`, `web/`, `supabase/`), no solo en la conversación.

## Alertas activas
- **Registro de marca (D-006 en `docs/decisiones.md`):** la marca Sospechario NO está registrada. En cuanto se cumpla cualquier disparador (5.000 usuarios mensuales, vídeo con +100.000 visualizaciones, mención en prensa, conversación B2B/editorial, tercero usando un nombre parecido), avisa al usuario al principio de la respuesta y recomienda registrar en la OEPM (clases 9 y 41) de inmediato.
