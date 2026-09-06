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

## D-007 · Las reseñas de los competidores entran en el catálogo: 16 cambios al MVP, 3 a fase 2, 8 descartes y cierre de D4

- **Fecha:** 2026-09-06
- **Decide:** `director-producto`
- **Contexto:** dos investigaciones (`docs/investigacion/resenas-apps-web.md`, 17 patrones sobre apps, webs y clones; `docs/investigacion/resenas-libros-comunidad.md`, 14 patrones sobre los libros y las comunidades) documentaron qué falla y qué se pide en los productos del género. El catálogo v1.0 se escribió sin ese material. La fusión de ambos informes da **25 patrones únicos**, analizados en `docs/oportunidades-resenas.md`.
- **Límite de la evidencia asumido explícitamente:** ninguna de las dos investigaciones pudo abrir una sola página (Google Play, App Store, Reddit, TikTok, Amazon y Goodreads bloquearon el acceso); todo procede de extractos de buscador. Por eso la decisión incorpora **diez comprobaciones manuales obligatorias** (§5 de `oportunidades-resenas.md`), tres de ellas urgentes, y ninguna decisión de esta entrada depende de una sola cita sin corroborar.
- **Decisión.** Priorizados con RICE (alcance en miles de usuarios/mes al mes 3, esfuerzo **incremental** sobre F1-F17 con mínimo de 0,25 persona-semana):
  1. **Entran en el MVP 16 cambios** (RICE de 18,0 a 1,4), por ≈ 7,25 persona-semana incrementales: ejes numerados y convención espacial explícita (M1); medianoche local cerrada con un solo contenido por número de caso (M7); "equivócate sin ensuciar" como mensaje y botón "Empezar de cero" (M3); política de anuncios publicada como compromiso (M4); tres validaciones nuevas en F3 —lugar existente, concordancia de género, cero traducción— (M13); prohibición de comunicar "generado por IA" y firma humana por caso (M5); sincronización entre dispositivos como criterio de "hecho" (M9); página `/una-sola-solucion`, erratas, botón de reportar y reparación automática de racha, nuevo F18 (M2); curva semanal por dificultad medida y prohibición de pistas de testimonio falso entre semana (M6); gracia de racha visible y ventana de 48 h (M10); explicación pública indexable el día 8 (M8); aviso de caducidad del archivo (M14); nuevo F19 de estabilidad y persistencia de ajustes (M11); anotación por arrastre y zoom nativo no bloqueado (M12); hoja de trabajo en blanco gratis y sin correo (M15); compartir accesible (M16).
  2. **Van a fase 2 tres cambios:** pista contextual del solver, **condicionada** a que el abandono antes de acusar supere el 35 % en el mes 2 (S1); lápiz avanzado con hipótesis (S2); tema como parámetro del preajuste Junior (S3).
  3. **Se descartan ocho ideas** que las reseñas sugieren: zoom dedicado, más comprobaciones o "vidas", Elo/ligas/salas privadas, cooperativo en la misma pantalla, anuncio con recompensa, traducir el producto a otros idiomas, "el papel se estropea" como argumento y vender "generado por IA".
  4. **Se cierra D4:** el caso del día cambia a **medianoche de la hora local del dispositivo**, con un número de caso por fecha civil local y un solo contenido por número.
  5. **Cinco mensajes de posicionamiento** derivados de citas reales pasan a ser el material de portada y de vídeo corto (§3 de `oportunidades-resenas.md`).
- **Orden de corte si el MVP no cabe:** hoja imprimible → anotación por arrastre → páginas de explicación del día 8 (que por definición pueden desplegarse en la semana 9). **No se cortan F19 ni la accesibilidad de F12.**
- **Excepción registrada:** M16 (compartir accesible) entra con RICE 1,4, el más bajo de la lista. Entra por obligación legal de accesibilidad, no por negocio. Se anota para no fingir que lo decidió el número.
- **Alternativas descartadas:**
  - *Tratar el informe de apps y el de libros por separado.* Producía dos listas de tareas con seis solapamientos (unicidad, traducción, anuncios, anotaciones, dificultad, explicación de la solución) y habría duplicado trabajo en frontend y en motor.
  - *Meter la pista contextual en el MVP.* Es la petición más citada tras la unicidad, pero exige exponer la escalera del solver con explicación (2 persona-semana) y compite con "Comprobar". La explicación completa al acusar ya es la red de seguridad. Se condiciona al dato de abandono en vez de decidirlo a ciegas.
  - *Construir zoom en el tablero.* Si F6 se cumple (6×6 legible y tocable en 360 px), el zoom es una tirita sobre un diseño roto. Se acepta solo lo que cuesta cero: no desactivar el zoom del navegador.
  - *Añadir Elo, ligas o salas privadas para igualar a Endless Cases.* Igualar a un competidor en lo que no es su ventaja es la forma más cara de no diferenciarse, y la presión competitiva expulsa al jugador casual, que es nuestro público.
  - *Aplazar la promesa pública de solución única a cuando haya usuarios.* Es exactamente al revés: es lo primero que hay que decir, porque la queja número uno del género es la contraria y llegamos sin marca que nos avale.
- **Efecto en otros documentos:** `docs/catalogo-productos.md` pasa a la versión 1.1 con cada cambio marcado **[reseñas]**; se añaden F18 y F19; D4 sale de §5 y entra en §6 como decisiones cerradas 11-15; se añaden ocho filas a la tabla de descartes y seis tareas a §7. `docs/funcionamiento-productos.md` queda **desactualizado en dos puntos** y lo revisa `director-producto`: §2.4 (ventaja competitiva 1, ver riesgo 3 de `oportunidades-resenas.md`) y §1.1 (curva semanal descrita por tamaño).
- **Alerta D-006 comprobada:** ninguno de los cinco disparadores se ha cumplido. Ningún producto de los 25 revisados usa un nombre parecido a Sospechario, Pistario, Culpabilia u Ocultia; los siete que llevan "Murdoku" en el título usan marca ajena, no la nuestra. La comprobación 10 de §5 de `oportunidades-resenas.md` vigila este disparador cada dos semanas.

## D-008 · Corrección aritmética del escenario Base: 2.200 € de Premium son brutos; el neto es 1.148 €

- **Fecha:** 2026-09-06
- **Decide:** `director-producto`, a partir del cálculo de `estratega-negocio` en `docs/propuesta-mejoras-producto.md` §7.0
- **Contexto:** el escenario Base de `docs/analisis-estrategico.md` §4.4 apunta 2.200 €/mes de Premium con 750 suscriptores, es decir ≈2,93 € por suscriptor y mes. Eso solo es posible si todo el mundo está en plan mensual, sin IVA y sin comisión de pasarela, lo que contradice el propio objetivo del catálogo (mezcla 55 % anual / 45 % mensual). No es una diferencia de criterio: es una cuenta mal hecha, y se estaba usando como listón para decidir precios y prioridades.
- **Decisión.** Con la mezcla objetivo del catálogo y un *merchant of record* (5 % + ~0,45 € por transacción):
  - Anual 19,99 € IVA incl. → **15,06 €/año = 1,26 €/mes netos** (comisión efectiva ≈7 %).
  - Mensual 2,99 € IVA incl. → **1,86 €/mes netos** (comisión efectiva ≈20 %: la parte fija pesa mucho en tickets pequeños).
  - Mezcla 55/45 → **1,53 €/mes netos por suscriptor**, no 2,93 €.
  - Línea Premium del Base: **1.148 €/mes**, no 2.200 € (−48 %). Total del Base ≈**2.720 €** brutos de las cuatro líneas y **≈2.100-2.400 €/mes de margen** una vez descontadas infraestructura, IA y curación editorial diaria.
- **Efecto en otros documentos:** la columna de ingresos de `docs/analisis-estrategico.md` §4.4 se lee como **bruta**, no como neta; la decisión abierta **D3** del catálogo (precio y umbral de Premium) se decide sobre el neto; y toda valoración de propuestas se compara contra "≈2.200 €/mes de margen", no contra "3.900 €/mes".
- **Consecuencia de precio ya visible:** el plan mensual de 2,99 € paga ~20 % de comisión efectiva. Queda abierta la hipótesis H6 de §7.6 de la propuesta: si la comisión efectiva supera el 18 % durante tres meses seguidos, se retira el plan mensual, se sube a 3,49 € o se pasa a pasarela directa con alta en OSS. Lo decide `estratega-negocio` con `experto-legal`.
- **Por qué se registra sin esperar aprobación del usuario:** corrige un error de cálculo, no una preferencia. Las decisiones de producto y catálogo que dependen de esta cifra siguen abiertas y se registrarán como **D-009** si el usuario aprueba la sección 8 de `docs/propuesta-mejoras-producto.md`.
- **Alternativas descartadas:** dejar §4.4 como estaba y anotar la salvedad solo en la propuesta (el error se seguiría propagando a cada documento que cite el Base); recalcular también los escenarios Bueno y Malo (no hay datos nuevos para hacerlo con rigor: se hará cuando exista una pasarela real y una mezcla observada).
- **Alerta D-006 comprobada:** ningún disparador cumplido. Sin usuarios, sin prensa, sin conversación B2B ni editorial, y sin terceros usando un nombre parecido al nuestro. Matiz registrado en `docs/propuesta-mejoras-producto.md`: los terceros llamados "Sabueso" (RTVE, Grupo Animal MX) los cubre `docs/legal/anterioridades-sospechario.md` §3.4 y no activan este disparador.
