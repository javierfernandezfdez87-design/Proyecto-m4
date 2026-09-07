# Plan de datos, calidad y negocio (analítica + QA + negocio)

Autor: `analista-datos`. Fecha: 7 de septiembre de 2026.
Fuentes: `docs/roadmap/supuestos.md`, `docs/catalogo-productos.md` v1.1, `docs/propuesta-mejoras-producto.md` §7 (impacto en negocio, hipótesis H1-H6), `docs/propuesta-jugabilidad.md` §6 (pruebas de Escena), `docs/propuesta-jugabilidad-expediente.md` §9 (pruebas de Expediente y Compuerta 0), `.claude/agents/revisor-calidad.md`, `.claude/agents/estratega-negocio.md`, `docs/decisiones.md` (D-003, D-006, D-007, D-008, D-009).

**Comprobación D-006 a fecha de hoy (7 de septiembre de 2026):** ningún disparador se cumple (0 usuarios, sin prensa, sin vídeo, sin conversación B2B, sin terceros con nombre parecido detectados). Este plan instala la comprobación como rutina obligatoria de cada informe desde la semana 1, no solo desde la beta: ver §11.

Formato de cada fila (heredado de `supuestos.md`): id · tarea · entregable (ruta) · días de agente · horas del fundador · dependencias · semana inicio-fin · criterio de "hecho" · riesgo.

**Calendario base.** Semana 1 = 8-14 sept. 2026. Beta: semana 7 (19-25 oct.). Lanzamiento: semanas 9-10 (2-13 nov.). Fechas de semanas intermedias sin cifra explícita en `supuestos.md` son aproximadas (±3 días) y no se usan para nada que dependa de precisión de calendario, solo de orden. Día 90 desde el lanzamiento ≈ 31 de enero de 2027 (semana 21-22). Fase 2 hasta marzo de 2027 (semana ≈30).

---

## 1. Analítica (A-xx)

| id | Tarea | Entregable | Días agente | Horas fundador | Dependencias | Semana | Criterio de "hecho" | Riesgo |
|---|---|---|---|---|---|---|---|---|
| A-01 | Taxonomía de eventos definitiva de **los dos modos** (Escena y Expediente), incluidos los 9 eventos de F15 (`caso_abierto`, `tutorial_completado`, `primera_celda`, `comprobacion_usada`, `acusacion`, `resuelto`, `abandono` con paso, `compartido`, `retorno_d1`) más `duel_created/joined`, `paywall_viewed`, `install_prompt_shown/accepted`, `streak_broken`, y propiedad `modo` en todos | `docs/analitica/eventos.md` | 2 | 1 (revisión y aprobación) | Nombres de mecánica cerrados (D-003, `disenador-puzzles`); esquema `certificado.v1.json` de `ingeniero-motor-puzzles` para las propiedades de dificultad | **S2, antes de instrumentar** | Frontend puede instrumentar sin abrir una duda; incluye los eventos de Escena (interrogatorio, escalafón, vistazo, Sabueso) y de Expediente (jueves, contraprueba, vis a vis) | Si se cierra tarde, frontend reinstrumenta dos veces (coste real, no solo molestia) |
| A-02 | Diseño de medición de H1 (compartir → primera celda) sin cookies o con consentimiento corregido por tasa de aceptación | `docs/analitica/consentimiento-h1.md` | 1 | 0,5 | `experto-legal` (guía AEPD) | S2-S3 | Elegida por escrito la opción (a) contador propio agregado o (b) PostHog con corrección de umbral; ninguna de las dos se deja implícita | Sin esto, H1 se refuta por un artefacto de consentimiento, no por realidad, y se cancela `DUELOS` sin motivo |
| A-03 | Alta técnica: PostHog (proyecto, entornos test/prod), GA4 o Plausible, Search Console | Configuración en Vercel/Supabase + `docs/analitica/herramientas.md` | 1,5 | 0,5 (altas, pagos si aplica) | `desarrollador-backend`/`frontend` (SDK) | S3-S4 | Un evento de prueba llega a PostHog y a GA4/Plausible en un recorrido grabado | Cuentas mal tageadas contaminan la serie desde el primer día y no se puede corregir retroactivamente |
| A-04 | Paneles base: embudo de activación, retención D1/D7/D30, tiempo mediano y percentiles por dificultad, punto de abandono por celda/pista | Dashboards PostHog + `docs/analitica/metricas.md` | 2 | 0 | A-01, A-03 | S4-S5 | `metricas.md` tiene la definición exacta y la consulta (PostHog o SQL) de cada métrica del catálogo, sin ambigüedad | Definir la métrica después de mirar el dato es la forma más barata de mentirse |
| A-05 | Protocolo de calibración de dificultad (F2, Escena): correlación etiqueta-tiempo, primero con los 60 casos resueltos a mano por QA, después con datos reales de la beta | `docs/analitica/calibracion-dificultad.md` | 1 | 0 | Q-02 | Protocolo S4; lectura con datos reales S7-S9 | Correlación calculada con intervalo de confianza; con N=60 se declara el resultado como orientativo, no como significativo, si el intervalo es ancho | No fingir significación con muestra pequeña (regla explícita del rol) |
| A-06 | Protocolo de medición de las 13 pruebas con personas: cómo se lee un umbral como "compuerta de diseño" y no como contraste estadístico | Nota en `docs/analitica/metricas.md` + insumo de este documento §4 | 0,5 | 0 | `disenador-puzzles` | S2 | Cada una de las 13 pruebas tiene su criterio de lectura escrito antes de la sesión | Mirar el resultado y ajustar el umbral a posteriori |
| A-07 | Medición de activación por landing SEO (F14): UTM, evento de activación (visita → caso resuelto) por URL | Integrado en A-03/A-04 | 1 | 0 | `estratega-growth-seo` (mapa de intención) | S6-S8 | Las 8 landings + `/una-sola-solucion` + `/casos/<n>` reportan activación individualizada | Sin esto, "≥25 % de activación" del catálogo es un número sin desglose accionable |
| A-08 | Corrección del KPI de newsletter: `D7 de los suscriptores ≥ 15 puntos por encima de los no suscriptores` compara dos poblaciones autoseleccionadas (quien se suscribe ya está más enganchado). Diseño de comparación por cohortes emparejadas por fecha de alta / grupo de "apuntados tarde a la lista" como cuasi-control | `docs/analitica/metricas.md` §newsletter | 1 | 0 | `periodista-contenidos` (fechas de alta, calendario de envíos) | S3; evaluación en mes 3 (~S18-19) | La métrica publicada distingue el efecto causal estimado del delta bruto; el delta bruto se sigue reportando pero etiquetado como "no ajustado por autoselección" | Decidir la newsletter (coste de operación, prioridad de copy) con un número inflado por sesgo |
| A-09 | Dry-run de instrumentación end-to-end (F15) | Recorrido grabado, adjunto al informe de release | 0,5 | 0,5 (validación manual en navegador real, tarea del fundador según `supuestos.md`) | `desarrollador-frontend` | S6 | Los 9 eventos de F15 llegan en un único recorrido de prueba, verificado en la respuesta de red | - |
| A-10 | Primer informe semanal, en piloto, con datos de lista de espera/newsletter (sin usuarios de producto todavía) | `docs/analitica/informes/semana-06.md` | 0,5 | 0 | - | S6 | La plantilla se usa de verdad antes de que existan datos de juego, para no improvisarla en la beta | - |
| A-11 | Informes semanales desde la beta (recurrente) | `docs/analitica/informes/<semana>.md` | 0,5/semana | 0,5/semana (lectura) | Q-10, N-08 | S7 → continuo | Cada informe responde qué cambió, por qué y qué hacemos; comprueba los 5 disparadores de D-006 en su primera línea | Ver §11 |
| A-12 | Calibración de dificultad de Expediente (equivalente a F2) | `docs/analitica/calibracion-dificultad.md` §Expediente | 1 | 0 | Q-03 | S7-S9 | Mismo criterio que Escena aplicado al modo lógico, con su propio N pequeño declarado | - |
| A-13 | Construcción y ejecución del panel del día 90 | `docs/analitica/informes/dia-90.md` | 2 | 2 (sesión de decisión con el fundador) | N-07 | Construcción S16-18; ejecución S21-22 | Panel con los umbrales de `docs/contexto-proyecto.md` punto 6 y una recomendación explícita de continuar/parar/ajustar | Presentar el panel sin recomendación es delegar la decisión sin hacer el trabajo |
| A-14 | Vigilancia de los 5 disparadores de D-006 desde la semana 1 (no solo desde la beta) | Primera línea de cada informe (A-10, A-11) | Incluido en A-10/A-11 | 0 | - | S1 → continuo | Ningún informe se publica sin la comprobación explícita | Olvidarla es la falta más cara del rol: es la única alerta que el proyecto exige por escrito en cada informe |

**Total agente estimado, analítica, hasta el lanzamiento (S1-S10):** ≈14 días. **Horas de fundador, mismo periodo:** ≈7 h, más la carga recurrente de lectura de informes (0,5-1 h/semana) desde S6.

---

## 2. Calidad (Q-xx)

| id | Tarea | Entregable | Días agente | Horas fundador | Dependencias | Semana | Criterio de "hecho" | Riesgo |
|---|---|---|---|---|---|---|---|---|
| Q-01 | Checklist de caso (unicidad, no-adivinar, cero pistas redundantes, sin ambigüedad ES/LatAm, contenido cozy, ejes rotulados) | `docs/calidad/checklist-caso.md` | 1 | 0 | `docs/diseno/mecanica-escena.md` cerrado (`disenador-puzzles`) | S1-S2 | Ningún caso pasa a "resuelto a ciegas" sin este checklist aplicado | - |
| Q-02 | Resolución a ciegas del banco de 60 casos Escena (F4) + **firma humana** en una muestra | Registro `qa: aprobado por revisor-calidad, fecha` por caso + informe | 6 (blind-solve por lotes de `guionista-misterio`) | **3,5** (revisión personal de una muestra ≈25 % + decisión de política, ver N-06) | Q-01, banco de casos de `guionista-misterio` | S3-S6 | 60/60 sin ambigüedad reportada; al menos la muestra firmada por una persona real, no solo por el agente QA | La promesa pública "resuelto por una persona" (M5, D-007) exige que "persona" sea alguien real; si se generaliza a los 60 sin un plan, el coste recae entero en el fundador. Ver N-06 |
| Q-03 | Resolución a ciegas de los casos Expediente del jueves (lote inicial de lanzamiento) | Igual formato | 4 | 2 (muestra) | Q-01, `guionista-misterio` | S6-S8 | Mismo criterio que Q-02 aplicado al modo lógico | El modo lógico es nuevo: mayor probabilidad de ambigüedad no vista en la primera pasada |
| Q-04 | Matriz de dispositivos (Safari iOS instalada/navegador, Chrome Android, escritorio) | `docs/calidad/matriz-dispositivos.md` | 1 | 1 (comprobación manual en un dispositivo real, tarea explícita del fundador) | Builds de `desarrollador-frontend` | S3-S4, repetida antes de beta y lanzamiento | Cuadrícula 6×6 legible y objetivos táctiles ≥44 px verificados en los tres entornos reales, no en emulador | - |
| Q-05 | Suite Playwright de flujos críticos: medianoche, cambio de huso, offline, actualización del service worker con partida en curso | `web/tests/e2e/` | 4 | 0 | F5, F11, F16 (backend/frontend) entregados de forma incremental | S4-S8 (iterativo, crece con cada feature) | Los cuatro escenarios pasan en CI con reloj simulado, cubriendo los dos cambios de hora de verano | Tests que dependen del reloj real son frágiles; deben simular el reloj, no esperar a la medianoche real |
| Q-06 | Auditoría de accesibilidad (F12 y F19, que no se cortan por decisión ya cerrada del catálogo) | `docs/calidad/informes/accesibilidad-<fecha>.md` | 2 | 0 | `disenador-ux-ui` | S5-S7 | Lector de pantalla, contraste, tamaño de fuente del sistema, reduce-motion revisados; F19 probado en Android real, 3 partidas completas sin bloqueo | - |
| Q-07 | Localización LatAm (léxico, ambigüedad regional en el banco de 60) | Integrado en checklist de caso + informe | 1 | 0 | `guionista-misterio` | S3, reforzado S5-S6 con los participantes LatAm de las pruebas de §4 | 0 ambigüedades léxicas regionales sin resolver en el banco de lanzamiento | El equipo interno no detecta localismos propios; depende de los 2-3 participantes LatAm reales de §4 |
| Q-08 | Checklist de release de la **beta** | `docs/calidad/checklist-release-beta.md` | 1 | 1 (firma final de apertura) | Todas las áreas técnicas | S6-S7 | Todos los ítems verdes antes de abrir la beta a 100-300 personas | - |
| Q-09 | Protocolo de tratamiento de bugs de la beta (severidad, bandeja, SLA) | `docs/calidad/tratamiento-bugs-beta.md` | 1 | 0 | - | S6 | Bloqueante ≤24 h, alta ≤72 h, media/baja en backlog priorizado; todo bug reproducible termina en un test | - |
| Q-10 | Ejecución del tratamiento de bugs durante la beta | `docs/calidad/informes/<fecha>-<slug>.md` por bug | 1/semana | 2/semana (revisión y priorización con el fundador) | A-11 | S7-S9 | Bandeja en cero bloqueantes antes del lanzamiento | Que "beta" se use para no arreglar nada porque "ya se sabe que es beta" |
| Q-11 | Segunda ronda de blind-resolve + firma humana antes del **lanzamiento** (casos nuevos o corregidos tras la beta) | Igual formato que Q-02 | 3 | 2 | Q-02, Q-09 | S8-S9 | 0 casos publicables sin firma registrada | - |
| Q-12 | Checklist de release del **lanzamiento** (extiende el de beta: legal, PWA, 36 URL, política de anuncios publicada) | `docs/calidad/checklist-release-lanzamiento.md` | 1 | 1 | `experto-legal` | S8-S9 | Todos los ítems verdes antes de S9-10 | - |
| Q-13 | Prueba en Android de gama media real, 3 partidas completas (parte de F19, repetida antes del lanzamiento) | Informe adjunto a Q-12 | 0,5 | 1 (prestar o comprar el dispositivo) | `desarrollador-frontend` | S7-S8 | 0 bloqueos, 0 toques perdidos | - |

**Total agente estimado, calidad, hasta el lanzamiento (S1-S10):** ≈26,5 días. **Horas de fundador, mismo periodo:** ≈14,5 h (concentradas en firma humana y comprobaciones manuales, que son tareas que `supuestos.md` asigna explícitamente al fundador).

---

## 3. Negocio (N-xx)

| id | Tarea | Entregable | Días agente | Horas fundador | Dependencias | Semana | Criterio de "hecho" | Riesgo |
|---|---|---|---|---|---|---|---|---|
| N-01 | Presupuesto mensual real, primera versión (infraestructura, dominios, OEPM, herramientas, pruebas con personas) | `docs/negocio/presupuesto-mensual.md` | 1 | 1 (aprobación de gasto) | D5, D-006, D-008 | S1 | Cada línea con cifra o rango y fuente citada (ver §7) | - |
| N-02 | Hitos de negocio: lista de espera, beta, 1.000, 5.000 usuarios, primera conversación B2B, decisión Premium | `docs/negocio/hitos.md` | 0,5 | 0 | Catálogo, D3, D-006 | S1 | Cada hito lleva fecha objetivo **o** condición de disparo, nunca las dos mezcladas sin decir cuál manda | - |
| N-03 | Consolidar hipótesis con umbral y fecha (H1-H6 de `propuesta-mejoras-producto.md` §7.6 + condiciones de D3 + disparadores de D-006) en un único documento vivo | `docs/negocio/hipotesis.md` | 0,5 | 0 | §7.6 ya escrita por `estratega-negocio` | S2 | Documento único; no reabre lo ya cerrado, solo lo agrega y le pone fecha de revisión | Duplicar criterios entre documentos hace que se lean versiones distintas |
| N-04 | Primer informe al fundador (pre-beta) | `docs/negocio/informes/<fecha>.md` | 0,5 | 1 | A-10 | S2 (arranca la cadencia quincenal) | Cadencia quincenal cumplida desde aquí | - |
| N-05 | Expediente OEPM redactado y presupuesto aprobado, **listo para presentar sin construirlo en caliente** | Coordinación con `experto-legal` | 0,5 | 0,5 | `experto-legal` | S3-S4 | Solicitud redactada, clases 9 y 41, lista para enviarse el mismo día en que se cumpla un disparador de D-006 | Redactarlo *después* del disparador regala una ventana a un tercero |
| N-06 | Decisión sobre quién es la "persona" de la firma humana de casos (¿el fundador para siempre, o un revisor contratado desde cierto volumen?) y su línea de presupuesto | Actualización de `docs/negocio/presupuesto-mensual.md` + entrada en `docs/decisiones.md` | 0,5 | 1 (la decisión en sí) | Q-02 | S4-S5 | Decisión registrada por escrito, con coste mensual si se opta por contratar | Sin decidirlo, el fundador hereda una obligación diaria perpetua que compite con las horas que `supuestos.md` ya declara escasas |
| N-07 | Diseño de los umbrales del panel del día 90 | Insumo de A-13 | 0,5 | 0,5 | `docs/contexto-proyecto.md` punto 6 | S16-18 | Umbrales fijados por escrito antes de mirar el dato | - |
| N-08 | Informes quincenales al fundador (recurrente) | `docs/negocio/informes/<fecha>.md` | 0,5/quincena | 1/quincena | A-11 | S2 → continuo | Comprueba D-006 en su primera línea (igual que los informes semanales de datos) | - |
| N-09 | Vigilancia activa de los disparadores de D-006 y ejecución del registro OEPM en cuanto se cumpla uno (con N-05 ya preparado) | Nueva entrada en `docs/decisiones.md` si se activa | - | 0 hasta que se active; 1 h para autorizar el gasto (~250 €) cuando se active | A-14, N-05 | S1 → continuo | Registro presentado en ≤5 días hábiles desde el disparador confirmado | - |
| N-10 | Prueba de disposición a pagar (H4: `PDF-CLASICO` a precio libre, ≥1.000 visitas) | `docs/negocio/hipotesis.md` (lectura del resultado) | 0,5 | 0,5 | `estratega-negocio` (dueño de la prueba), exportador PDF | Mes 3 post-lanzamiento (~S18-19) | Resultado leído contra la tabla de umbrales ya prerregistrada en §7.3 de `propuesta-mejoras-producto.md` | Mirar el dato antes de tener las 1.000 visitas y decidir con menos |
| N-11 | Revisión de las tres condiciones de Premium a los 60 días del lanzamiento (5.000 MAU, D7≥20 %, ≥2 % apuntados) | `docs/negocio/hitos.md` (actualización) | 0,5 | 1 | A-04, A-11 | ~S17-18 | Documentado si se cumplen o no las tres condiciones, con la cifra real de cada una | Programar la pasarela sin las tres cumplidas repite el error que D-008 ya corrigió una vez |

**Total agente estimado, negocio, hasta el lanzamiento (S1-S10):** ≈4,5 días. **Horas de fundador, mismo periodo:** ≈5 h, más la cadencia quincenal de 1 h desde S2.

---

## 4. Calendario único de pruebas con personas reales (6 de Escena + 7 de Expediente)

Regla común a las 13 (repetida en los dos documentos de origen y que aquí se aplica sin excepción): **con 5-12 personas no hay significación estadística y no se finge que la hay.** Son compuertas de diseño (un fallo grande es señal fiable; una diferencia de 2 puntos no lo es), no contrastes A/B. `analista-datos` define el protocolo de lectura de cada umbral (A-06); el agente listado en "responsable" diseña el material y facilita la sesión.

Las pruebas 1 de cada modo van juntas porque bloquean la misma taxonomía. Las 4 de Escena y las 5, 6 de Expediente necesitan coordinación externa (colegio, personas de LatAm) con antelación: reclutamiento arranca 1-2 semanas antes de la sesión.

| Tanda | Semana | id | Prueba | Modo | Personas | Reclutamiento | Umbral (fijado antes) | Responsable | Horas del fundador |
|---|---|---|---|---|---|---|---|---|---|
| 0 · Papel, sin software | S2 | PE-1 | Nombres de las técnicas (escalafón) | Escena | 5 (1 por perfil, 2 LatAm) | Lista de espera + red personal + 2 contactos LatAm vía Discord/Telegram | ≥8/14 técnicas mapeables por ≥3 personas → se implementa; 5-7 se reescribe; <5 tras 2 iteraciones → 8-10 técnicas | `disenador-puzzles` | 2,5 (moderar + notas) |
| 0 | S2 (misma tanda) | PX-1 | Nombres de técnica de rejilla | Expediente | 5 + 6 LatAm | Igual que PE-1, ampliado | ≥8/12 mapeables; ≤3 tropiezos en 24 apellidos | `disenador-puzzles` + `guionista-misterio` | Incluido en las 2,5 h de arriba (misma sesión) |
| 0 | S3 | PE-4 | Cuatro manos en papel (hoja A/B) | Escena | 6 parejas + 1 aula (28) | Familias/parejas de la red del fundador + 1 colegio (consentimiento vía `experto-legal`) | ≥70 % termina; cero parejas con >2 deducciones seguidas; ≥4/6 repetirían → compromete versión digital | `disenador-puzzles` | 4 (coordinar aula + parejas) |
| 1 · HTML jugable, tras el motor mínimo | S5 | PE-2 | Interrogatorio de menú vivo | Escena | 12 (4 casual, 3 fan, 2 competitivo, 2 familia, 1 docente) | Lista de espera segmentada por perfil | Ninguna persona dice "pregunté mal"; caída de resolución ≤10 pts frente a un martes de control; ≥8/12 usan verbo de investigación | `disenador-puzzles` + `guionista-misterio` | 5 |
| 1 | S5 (misma tanda) | PE-3 | Reconstrucción + escalafón juntos | Escena | 10 | Igual, dos sesiones separadas 24 h | ≥60 % no salta la animación la primera vez; ≥6/10 recuerda la técnica al día siguiente | `disenador-puzzles` | Incluido |
| 1 | S5 (misma tanda) | PE-5 | Pistas visuales + viernes de disparate | Escena | 8 (1 lector puro, 1 docente, 2 LatAm) | Igual | Cero iconos con doble lectura; ≥6/8 entienden el humor igual en España y LatAm; cero chistes dentro de una pista | `guionista-misterio` + `revisor-calidad` | Incluido |
| 1 | S6 | PX-2 | El primer jueves (confusión de modos) | Expediente | 8, en 2 brazos de 4 | Lista de espera | Abandono ≤ el del día 3 de Escena + 10 pts; ≤1/4 dice "me han cambiado el juego"; 4/4 vuelven el día 5 | `director-producto` + `disenador-puzzles` | 4 |
| 1 | S6 (misma tanda) | PX-3 | El muro (dossier plegado vs. desplegado) | Expediente | 10 | Igual | Si ≥4/10 dicen "mucho texto" con la desplegada → plegada por defecto | `disenador-ux-ui` + `guionista-misterio` | Incluido |
| 1 | S6 (misma tanda) | PX-4 | La tabla del comisario | Expediente | 10 + 3 lectores de Murdle | Lista de espera + comunidad de lectores del género | ≥8/10 encuentran la marca falsa; nadie dice que el juego "ha mentido"; 0/3 lo identifican con el mentiroso descartado | `disenador-puzzles` | Incluido |
| 2 · Tras Compuerta 0 verde | S7 | PX-6 | El vis a vis | Expediente | 12, 4 sin tutorial | Lista de espera | **Solo si Compuerta 0 la puso en verde.** Nadie dice "pregunté mal"; caída ≤10 pts; ≥8/12 usan verbo de investigación; ≥3/4 entienden el coste 2/1 con una línea | `disenador-puzzles` | 5 |
| 2 | S7 | PE-6 | Doble franja | Escena | 8 | Solo si el fundador reabre la mecánica | ≥6/8 entiende la regla en <60 s → prototipo digital; si no, se descarta definitivamente | `disenador-puzzles` | 4 (condicional, no se agenda si no se reabre) |
| 2 | S7-S8 | PX-5 | Papel: expediente de una página + hoja A/B | Expediente | ~75 alumnos, 3 aulas | 1 colegio, consentimiento parental vía `experto-legal` (menores) | ≥70 % terminan; ningún docente reescribe una pista; ≤2 modismos señalados en Argentina | `guionista-misterio` + `experto-legal` | 4 (coordinación con el centro) |
| Fuera del camino crítico | S7, S8, S9 (3 domingos) | PX-7 | El domingo en familia | Expediente | 4 familias, 3 domingos | Red del fundador | Expediente entra al domingo solo si el menor hace ≥20 % de las marcas y ≥3/4 familias lo eligen al repetir | `guionista-misterio` + `director-producto` | 3 (repartidas en 3 semanas) |

**Horas de fundador en las 13 pruebas: ≈31,5 h**, concentradas entre las semanas 2 y 9. Es la mayor exigencia de tiempo del fundador de todo el plan y coincide con la ventana en la que también firma casos (Q-02, Q-03) y aprueba checklists de release (Q-08, Q-12): **hay solapamiento real entre semanas 6-9 que puede requerir repriorizar horas del fundador esa quincena.** Se señala aquí para que `director-producto` lo vea al consolidar el roadmap general, no se resuelve en este documento.

---

## 5. Compuertas por área

**Analítica.**
- Antes de instrumentar el frontend: A-01 aprobado + A-02 cerrado con `experto-legal`.
- Antes de la beta: PostHog + GA4/Plausible funcionando de extremo a extremo (A-09), panel de retención listo (A-04), plantilla de informe usada al menos una vez (A-10).
- Antes del lanzamiento: calibración F2 revisada con datos reales de beta (A-05), aunque el resultado sea "N insuficiente, se revisa en el mes 1".

**Calidad.**
- Antes de la beta: banco de 60 casos con firma humana (Q-02), checklist de release de beta en verde (Q-08), Playwright de flujos críticos en verde para lo ya construido (Q-05), F12/F19 no recortados (Q-06).
- Antes del lanzamiento: casos Expediente del jueves con firma humana (Q-03/Q-11), checklist de release de lanzamiento en verde (Q-12), matriz de dispositivos repetida (Q-04), bandeja de bugs de la beta en cero bloqueantes (Q-10).

**Negocio.**
- Antes de abrir cualquier conversación B2B o editorial: expediente OEPM listo (N-05), por el disparador 4 de D-006.
- Antes de programar la pasarela de Premium: las tres condiciones de D3 cumplidas a los 60 días (N-11) **y** H4 no refutada (N-10).
- En el día 90: panel con recomendación explícita de continuar/parar/ajustar (A-13 + N-07).

---

## 6. Qué necesita cada área de las demás, y cuándo

**Analítica necesita:**
- De `ingeniero-motor-puzzles`: esquema `certificado.v1.json` y propiedades de dificultad — **antes de S2** (A-01).
- De `disenador-puzzles`: nombres definitivos de mecánicas (interrogatorio, escalafón, vistazo, Sabueso, contraprueba, vis a vis) — **antes de S2**.
- De `desarrollador-frontend`/`backend`: implementación del SDK de PostHog — **antes de S4**.
- De `experto-legal`: diseño del CMP/consentimiento — **antes de S3** (condiciona A-02, y con ello H1).
- De `revisor-calidad`: los 60 casos resueltos a mano para calibrar F2 (Q-02) — **antes de S6**.

**Calidad necesita:**
- De `disenador-puzzles`: `docs/diseno/mecanica-escena.md` y `mecanica-expediente.md` cerrados — **antes de S2** (Q-01).
- De `guionista-misterio`: el banco de casos entregado por lotes (no de golpe) para poder resolver a ciegas de forma escalonada — **desde S3**.
- De `ingeniero-motor-puzzles`: build con F1-F3 en verde antes de poder auditar dispositivos de verdad — **antes de S4**.
- De `desarrollador-frontend`: builds en staging desplegables — **continuo desde S4**.
- De `experto-legal`: consentimiento parental para la prueba de aula PX-5 — **antes de S6** (con margen para el colegio).

**Negocio necesita:**
- De analítica: MAU y D7 reales para comprobar las condiciones de Premium y los disparadores de D-006 — **desde la beta (S7)**.
- De `experto-legal`: contratos, SLA y textos precontractuales antes de cualquier conversación real — **antes de que N-09 se active**.
- De `estratega-growth-seo`: CAC por canal para completar el unit economics — **desde que haya tráfico medible, ~S8**.
- De calidad: decisión de N-06 depende del volumen real que Q-02/Q-11 confirmen que hace falta sostener — **S4-S5**.

---

## 7. Presupuesto mensual real

| Línea | Coste | Cuándo empieza | Fuente/nota |
|---|---|---|---|
| Infraestructura (Vercel, Supabase, renovación de dominios) | 100-300 €/mes | S1 | Rango ya usado en D5 del catálogo (`docs/catalogo-productos.md`) |
| Dominios, compra inicial (`sospechario.com`, `.es`, `.app` si libre) | ≈40 € (único) | S1 | D-006 |
| Herramientas de analítica (PostHog, Resend) | 0-70 €/mes | S3 | El nivel gratuito cubre el volumen de beta; se revisa al superar los primeros miles de eventos/mes |
| SEO/competitivo (Semrush u otra herramienta de mercado) | Ya contratada / vía acceso existente | - | Sin coste incremental si el acceso ya está disponible al equipo |
| OEPM, clases 9 y 41 | ≈250 € (único, al disparador) | Cuando se cumpla un disparador de D-006 (N-09) | Presupuesto ya aprobado por el usuario en D-006 |
| Pruebas con personas (incentivos, fotocopias, desplazamiento/material de aula) | ≈400-600 € (concentrado S2-S9) | S2 | 13 pruebas, ≈100 participantes distintos (§4) |
| Revisor humano de casos, si se decide contratar en vez de que lo asuma el fundador (N-06) | 0 € si lo asume el fundador; 150-400 €/mes si se contrata | Decisión en S4-S5 | Ligado a Q-02/Q-11; sin esta línea, la promesa "resuelto por una persona" (M5) recae entera en el tiempo del fundador de forma indefinida |
| Dispositivo Android de gama media real (si no se dispone de uno) | ≈150-200 € (único) | S6-S7 | Para Q-13/F19, exigido por el propio catálogo (F19 no se corta) |
| **Total recurrente estimado, antes de cualquier ingreso** | **≈250-650 €/mes** (más 150-400 €/mes si se contrata revisor) | - | Coherente con "la infraestructura cuesta 100-300 €/mes y es asumible" (D5) más el coste nuevo de las pruebas con personas y la firma humana, que ningún documento anterior había presupuestado con cifra |

Nota de honestidad: ninguna de estas cifras sustituye la que fije `estratega-negocio` con datos de facturación real de PostHog/Resend/Vercel una vez arrancado; son las mismas órdenes de magnitud ya usadas en el catálogo y en D5, con las dos líneas nuevas (pruebas con personas y revisor humano) que este plan es el primero en poner en una tabla de coste.

---

## 8. Hitos de negocio

| Hito | Definición | Fecha objetivo / condición | Fuente |
|---|---|---|---|
| Lista de espera / newsletter | Correos captados antes del lanzamiento | 300 antes de S9 | `NEWSLETTER`, catálogo |
| Beta cerrada | 100-300 personas activas | S7 (19-25 oct.) | `supuestos.md` |
| Lanzamiento público | Disponible sin invitación | S9-10 (2-13 nov.) | `supuestos.md` |
| 1.000 usuarios activos mensuales | MAU ≥1.000 | Sin fecha fija; se sigue semana a semana desde S9 en los informes de A-11 | Objetivo intermedio implícito hacia el escenario Base |
| 5.000 usuarios activos mensuales | MAU ≥1.000 → dispara el aviso de D-006 y es 1 de las 3 condiciones de Premium | Objetivo a 60 días del lanzamiento (~S17-18); **es un umbral, no una fecha garantizada** | D3, D-006 |
| Primera conversación B2B o editorial | Contacto real, no una intención | Dispara D-006 (aviso inmediato); no antes de tener la ficha técnica (PR1) | Catálogo B2B, D-006 disparador 4 |
| Decisión Premium (programar pasarela sí/no) | Las tres condiciones de D3 evaluadas juntas | ~S17-18 (N-11) | D3 |
| Panel del día 90 | Continuar/parar/ajustar | ~S21-22 (≈31 de enero de 2027) | `docs/contexto-proyecto.md` punto 6 |

---

## 9. Hipótesis con umbral y fecha

Se reproducen tal cual de `docs/propuesta-mejoras-producto.md` §7.6 (no se reabren; se consolidan y se les da seguimiento en `docs/negocio/hipotesis.md`, N-03):

| # | Hipótesis | Umbral de refutación | Fecha | Si se refuta |
|---|---|---|---|---|
| H1 | El compartir es canal de adquisición | Apertura de `/r/[id]` → primera celda <30 % (corregido por tasa de aceptación si se mide tras consentimiento) | Mes 3 post-lanzamiento | No se construye `DUELOS` en fase 2 |
| H2 | El muro concreto convierte mejor que el genérico | Alza <20 % relativo | Mes 3 de Premium | Se revierte al muro genérico |
| H3 | Las rachas rotas no imputables son residuales | >2 % de rachas rotas al mes | Mes 3 | Se añade recuperación por esfuerzo (0,25 p-s) |
| H4 | Hay disposición a pagar en este público | <1,0 % de compra o mediana ≤1,50 € en `PDF-CLASICO` a precio libre | Mes 3 post-lanzamiento (N-10) | No se programa Premium en 12 meses |
| H5 | La anulación de casos es excepción, no norma | ≥2 casos anulados en 90 días | Mes 3 | Se para la publicación diaria hasta corregir F1/F3 |
| H6 | El plan mensual de 2,99 € es viable con *merchant of record* | Comisión efectiva >18 % durante 3 meses seguidos | Mes 3 de Premium | Se retira el mensual o se sube a 3,49 € |

**Añadido de este plan, con la misma disciplina de umbral-antes-que-dato:**

| # | Hipótesis | Umbral de refutación | Fecha | Si se refuta |
|---|---|---|---|---|
| H7 | El KPI de newsletter (D7 +15 pts) mide un efecto real y no solo autoselección | El delta ajustado por cohortes emparejadas (A-08) es <5 puntos, frente al bruto declarado | Mes 3 post-lanzamiento | Se deja de usar el delta bruto como argumento de negocio; se reformula el objetivo de la newsletter en términos de apertura/clic, que sí son atribuibles |
| H8 | La firma humana de casos es sostenible con las horas del fundador tal como están repartidas hoy | El fundador dedica >3 h/semana de forma sostenida a firma humana + comprobaciones manuales una vez lanzado | Mes 1 post-lanzamiento | Se activa N-06 (revisor contratado) en vez de seguir aplazándolo |

---

## 10. Panel del día 90

Construido en A-13/N-07, ejecutado en S21-22. Contenido mínimo, con la recomendación explícita de continuar/parar/ajustar de `docs/contexto-proyecto.md` punto 6:

- MAU y su comparación con el escenario Base (5.000/50.000).
- D1/D7/D30 por cohorte semanal y por canal.
- Tasa de resolución del caso diario en los dos modos, frente a la banda 55-75 % del catálogo.
- Estado de las tres condiciones de Premium (D3) y de H1-H8.
- Estado de los disparadores de D-006 (si alguno se ha cumplido, cuándo se registró en la OEPM).
- Presupuesto real gastado vs. estimado (§7) y coste por usuario activo.
- Bandeja de calidad: bugs bloqueantes abiertos, casos anulados (H5), quejas de dificultad injusta.

---

## 11. Cadencia de informes y disparador D-006

- **Informe semanal de datos** (`docs/analitica/informes/<semana>.md`, A-11): desde S7 (beta), continuo. Responde qué cambió, por qué, qué hacemos.
- **Informe quincenal al fundador** (`docs/negocio/informes/<fecha>.md`, N-08): desde S2, continuo.
- **Regla obligatoria, sin excepción, en ambos:** la primera línea comprueba los 5 disparadores de D-006 (5.000 MAU, vídeo >100.000 visualizaciones, mención en prensa, conversación B2B/editorial, tercero con nombre parecido). Si se cumple cualquiera, esa línea recomienda registrar en la OEPM de inmediato y remite a N-05 (expediente ya preparado) y N-09 (ejecución).
- Hoy, 7 de septiembre de 2026, ninguno se cumple. Este plan no sustituye la comprobación semanal: la instala como rutina desde la semana 1, antes incluso de la beta, porque un vídeo viral o una mención de prensa pueden ocurrir por sorpresa durante la fase de lista de espera.

---

*Cambios a este documento: los registra `analista-datos`, coordinado con `revisor-calidad` y `estratega-negocio`, con fecha y motivo en `docs/decisiones.md` si afectan a un umbral ya fijado.*
