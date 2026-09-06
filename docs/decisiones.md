# Registro de decisiones

Una fila por decisión con fecha, contexto, alternativas descartadas y quién la tomó. Las decisiones no se borran: se sustituyen con una nueva entrada que referencia la anterior.

---

## D-001 · Criterios de naming fusionados en un solo conjunto de 10 con pesos sobre 100

- **Fecha:** 2026-09-05
- **Decide:** `director-producto`
- **Contexto:** tres agentes entregaron tres conjuntos de criterios incompatibles (negocio con pesos, diseño sin pesos, guion cualitativo). Sin un conjunto único, la discusión de naming no se puede cerrar con datos.
- **Decisión:** conjunto único de 10 criterios ponderados en `docs/naming-shortlist.md` §1. Registrabilidad 18, SEO 13, dominio 12, universo visual 12, memorabilidad 10, extensibilidad 9, icono 8, comprensión temática 8, LatAm 6, tono/distancia 4.
- **Alternativas descartadas:**
  - Usar la ponderación de negocio tal cual: ignora universo visual y comprensión temática, que son la aportación real de diseño y guion.
  - Mantener "distancia de Murdoku" con peso 10: puntúa 5 en los 18 candidatos, así que solo comprimía las diferencias. Degradado a puerta de eliminación.
  - Mantener "potencial de categoría" con peso 8: el propio estratega lo llama lotería de baja probabilidad. Retirado de la ponderación y reservado como criterio de desempate.

## D-002 · La discrepancia neologismo/palabra real se resuelve con prueba de sensibilidad, no por criterio del árbitro

- **Fecha:** 2026-09-05
- **Decide:** `director-producto`
- **Contexto:** negocio defendía neologismos (Sospechario); diseño y guion defendían palabras reales con mascota (Sabueso, Casona, Urraca). La objeción de que los pesos favorecían por construcción a los neologismos era legítima.
- **Decisión:** se recalculó la matriz completa con un escenario alternativo que baja registrabilidad+dominio+SEO de 43 a 28 puntos y sube universo visual, icono y comprensión. Ninguna palabra real entra en el top 4 en ninguno de los dos escenarios. La causa no es la ponderación: es que `sabueso.com`, `casona.com`, `urraca.com`, `lince.com` y `coartada.com` están ocupados y sus SERP tienen dueño (4.400 a 22.200 búsquedas/mes de otra cosa).
- **Resolución:** arquitectura híbrida propuesta por el propio diseñador. Marca-concepto inventada + mascota-personaje con nombre común. La mascota entrega el día 1, no en fase 2.
- **Alternativas descartadas:** decidir por antigüedad del documento, por votación entre agentes, o partir la marca en dos (nombre distinto por modo).

## D-003 · El modo espacial se llama "Escena"

- **Fecha:** 2026-09-05
- **Decide:** `director-producto`
- **Contexto:** el brief usaba "Caso del día" para el modo espacial y "Expediente" para el lógico, pero "Caso del día" es la unidad diaria común a los dos modos, no un modo. `disenador-ux-ui` propuso "Plano".
- **Decisión:** modo espacial = **Escena**. Modo de cuadrícula lógica = **Expediente**. Unidad diaria = **el caso del día**, común a ambos. Nunca "reto" ni "nivel".
- **Alternativas descartadas:** "Plano" (igual de corto pero técnico y frío, choca con el tono cozy); "Mapa" (describe la mecánica y la encierra); seguir usando "Caso del día" como nombre de modo (colisiona con la unidad diaria y rompe la arquitectura de submarcas).

## D-004 · Nombre de marca definitivo

- **Fecha prevista:** 2026-09-14
- **Estado:** **pendiente**. Bloqueada por el plan de validación de 7 días de `docs/naming-shortlist.md` §5.
- **Lista corta:** Sospechario (92), Pistario (89), Culpabilia (85), Ocultia (82), Doña Pista (78, control experimental).
- **Recomendación de partida:** Sospechario + mascota, descriptor fijo "el caso de misterio de cada día".
- **Umbrales fijados antes del dato:** ≥60 % de comprensión temática espontánea y ≥85 % de escritura correcta al primer intento, con 100 personas. Anterioridad viva en clases 9/28/41 elimina. `.com` exacto por encima de 500 € baja a suplente.
- **Regla de no bloqueo:** el desarrollo arranca el 2026-09-07 con el nombre en clave `caso-diario` y una capa de marca aislada en un único archivo de configuración. Si el 14 de septiembre no hay decisión, se lanza con el mejor candidato legalmente limpio.

## D-005 · Aprobación provisional de la arquitectura de marca: Sospechario + mascota Sabueso

- **Fecha:** 2026-09-05
- **Decide:** usuario (Javier Fernández)
- **Contexto:** lista corta de D-004 y recomendación híbrida del director de producto.
- **Decisión:** se aprueba **provisionalmente** Sospechario como marca-concepto y Sabueso (basset hound, nombre común) como mascota y voz narradora, con descriptor fijo "el caso de misterio de cada día". El usuario se reserva cambiar el nombre si surge uno mejor antes del registro. La validación de 7 días de `docs/naming-shortlist.md` §5 sigue en pie: dominio en registrador, búsqueda de anterioridades por `experto-legal`, iconos y test con 100 personas.
- **Efecto:** `disenador-ux-ui` puede empezar logotipo, icono y mascota con Sospechario como hipótesis de trabajo; el código sigue usando el nombre en clave `caso-diario` con capa de marca aislada hasta D-004.
- **Pendiente del usuario:** autorización del gasto de registro (ver explicación de costes en la conversación del 2026-09-05 y en `docs/naming-criterios-negocio.md` §"Presupuesto de registro").

## D-006 · Registro de marca escalonado: nada antes de lanzar, OEPM con tracción, EUIPO con el criterio del día 90

- **Fecha:** 2026-09-05
- **Decide:** usuario (Javier Fernández)
- **Contexto:** el plan de naming proponía registrar en la EUIPO (~900 €) antes de lanzar. El usuario señala, con razón, que para lanzar el MVP solo hace falta el dominio; el registro es una decisión de riesgo, no un requisito técnico.
- **Decisión:**
  1. **Antes de lanzar (≈40 €):** comprar `sospechario.com` y `.es` (y `.app` si está libre) y hacer la **búsqueda gratuita de anterioridades** en TMview y OEPM. Encargada a `experto-legal` el 2026-09-05 (resultado en `docs/legal/anterioridades-sospechario.md`).
  2. **Con la primera señal de tracción (≈250 €):** registro en la **OEPM**, clases 9 y 41. Da seis meses de prioridad para extender a la UE con la misma fecha.
  3. **Si se supera el criterio del día 90 (≈900 €):** registro en la **EUIPO**, clases 9 y 41. Latinoamérica (Protocolo de Madrid) solo después.
- **Disparadores de aviso al usuario (escalón 2).** El equipo debe **avisar al usuario de forma explícita y al principio del informe** en cuanto se cumpla cualquiera de estos hechos, recomendando registrar en la OEPM ya:
  - 5.000 usuarios activos mensuales, o
  - un vídeo propio o de un creador con más de 100.000 visualizaciones que mencione la marca, o
  - una mención de la marca en prensa o medios, o
  - el inicio de una conversación de licencia B2B o editorial, o
  - cualquier indicio de que un tercero usa o intenta registrar un nombre igual o parecido.
- **Responsables del aviso:** `analista-datos` (comprueba los disparadores en cada informe semanal), `creador-social` y `periodista-contenidos` (visualizaciones y prensa), `director-producto` (consolida y avisa). La alerta se anota también en `CLAUDE.md` para que cualquier sesión la vea.
- **Riesgo aceptado:** en España y la UE la marca es de quien la presenta primero; usarla no da derechos. Entre el lanzamiento y el escalón 2 existe una ventana en la que un tercero podría registrarla. El usuario acepta ese riesgo a cambio de no gastar antes de validar.
- **Alternativas descartadas:** EUIPO antes de lanzar (1.100 € antes de tener un solo usuario); no registrar nunca (inaceptable en cuanto haya tracción); registrar solo el dominio y confiar en el uso (no genera derechos de marca en la UE).
