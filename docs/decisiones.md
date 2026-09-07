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

## D-009 · La capacidad de desarrollo no es la restricción; lo son la diferenciación, la calidad y la ventana de mercado

- **Fecha:** 2026-09-06
- **Decide:** usuario (Javier Fernández)
- **Contexto:** `docs/propuesta-mejoras-producto.md` v1.2 concluía que el MVP no cabía (20-25 persona-semana frente a 8-16 de capacidad) y ponía como pregunta 0 elegir entre tercera persona, retrasar o recortar. El usuario indica que trabajará con un plan amplio de Claude, que el coste de cómputo no es una restricción relevante y que el objetivo es **un producto diferenciador que funcione**.
- **Decisión:**
  1. La pregunta 0 de la propuesta se responde: la "tercera persona" son los agentes del equipo. El alcance no se recorta por capacidad de programación.
  2. El criterio de priorización pasa de "qué cabe en 8 semanas" a **"qué diferencia el producto y qué disfrutan los jugadores"**, verificado con jugadores reales antes de lanzar.
  3. Se mantienen tres límites que el cómputo no resuelve: la **ventana de mercado** (6-12 meses; la fecha de lanzamiento sigue siendo una decisión consciente, no una consecuencia del alcance), el **tiempo del usuario** para probar, decidir y validar con personas, y la **calidad** (todo lo que se añade pasa por el motor, por QA y por prueba con jugadores; más alcance no puede significar más errores).
  4. La ronda de mejoras de jugabilidad en curso (`docs/diseno/ideas-jugabilidad-*.md`, `content/ideas-jugabilidad-guionista.md`, `docs/ideas-jugabilidad-producto.md`) se evalúa con este criterio: diferenciación y diversión primero, esfuerzo después.
- **Efecto sobre documentos anteriores:** la sección 8.1 de `docs/propuesta-mejoras-producto.md` (orden por impacto en la fecha) y la regla "lo que empuje el lanzamiento más allá de la semana 12 se corta" quedan **suspendidas** hasta que el director de producto reordene con el nuevo criterio. La regla "Velocidad" de `docs/contexto-proyecto.md` se matiza: velocidad de validación, no de recorte.
- **Alternativas descartadas:** mantener el recorte por capacidad (ignora el cambio de contexto); eliminar toda fecha límite (la ventana de mercado existe aunque el cómputo sea barato).

## D-010 · Las 16 decisiones de jugabilidad y los 34 cambios de la propuesta de mejoras se adoptan como base del roadmap

- **Fecha:** 2026-09-07
- **Decide:** `director-producto`, **por recomendación del director, con aprobación tácita del fundador al pedir el roadmap**. Cualquier objeción del fundador se registra como enmienda a esta entrada, no como discusión abierta.
- **Contexto:** ocho planes de área se escribieron el 7 de septiembre de 2026 sobre las recomendaciones de `docs/propuesta-jugabilidad.md` §7 (ocho decisiones), `docs/propuesta-jugabilidad-expediente.md` §10 (ocho más) y `docs/propuesta-mejoras-producto.md` §8.2 (34 cambios). Cuatro de esos planes señalan explícitamente que trabajan «sobre recomendaciones, no sobre decisiones» y piden el registro. Sin esta entrada, ocho planes construyen sobre algo que formalmente no existe.

### Las 16 decisiones de jugabilidad, adoptadas

**Escena (1-8), de `docs/propuesta-jugabilidad.md` §7:**

1. **La tesis de diferenciación es el eje del producto**: «las pistas las preguntas tú» y «el juego te enseña la técnica y te acredita». Dos frases que un jugador puede repetir, colgadas de la misma pieza (M3), en vez de esfuerzo repartido entre veinte mecánicas.
2. **M3 (escalera + certificado) se construye antes que cualquier mecánica de jugabilidad.** Desbloquea 12 de 24 familias y es la única forma de sostener «sin adivinar» y «dificultad medida».
3. **La fecha de lanzamiento NO se mueve a la semana 12-14.** Es la única de las 16 que se adopta **en contra** de la recomendación original; el motivo completo está en D-011 R1.
4. **Se financia el prototipo en papel de cuatro manos** (hoja A / hoja B, coste ≈0) y el desarrollo digital se compromete solo si pasa las tres compuertas de la prueba. Revisa parcialmente el descarte de D-007.
5. **Se descartan el testigo que miente del ritual diario y los testigos con personalidad dentro de las pistas numeradas.** La narrativa se queda, pero fuera de las pistas numeradas.
6. **Sabueso: variante de dos niveles sobre el certificado**, con el gesto «¿dónde quieres que huela?», y se adelanta rompiendo a propósito la condición del 35 % de abandono que fijó D-007. Se registra que la condición se rompe conscientemente.
7. **El aula es subproducto del PDF en los primeros 12 meses**, con una regla nueva: toda mecánica que entre al lanzamiento se marca «imprimible» o «solo pantalla», y al menos cuatro de las siete del calendario tienen que ser imprimibles.
8. **El caso a la carta se retrasa a fase 2**, pese a ser lo que más pide el panel: un caso generado bajo demanda no puede llevar firma humana, y una sola pista mala etiquetaría «hecho por IA» a todo el producto. Se abre tras dos meses publicando sin incidencias y con depósito precalentado, nunca con generación en vivo.

**Expediente (9-16), de `docs/propuesta-jugabilidad-expediente.md` §10:**

9. **Escena y Expediente son una sola tesis con dos caras**, no dos marcas: un cuaderno, un rango, una racha, una página `/una-sola-solucion`, un correo.
10. **Arquitectura B-jueves**: Expediente solo el jueves, domingo intacto, segundo día en el viernes cuando toque. El domingo de `5×5×5 + motivo` era imposible en el motor.
11. **Las firmas de Expediente son la tabla del comisario, la contraprueba con el escalafón y el vis a vis condicionado.** La coartada cruzada baja a especial mensual: es la única mecánica que contradice la tesis del propio modo.
12. **El motivo es segunda fase ligera todos los días**, cuarta categoría solo con `n = 4` y fuera del ritual, y remate en la confesión siempre. **Nunca `5×5×5 + motivo`**: 1,7 M de modelos, fuera del techo por dos vías independientes.
13. **Se descarta el domingo de la conspiración.** Exige seis elementos, prohibido por el techo de modelos, y bajo B-jueves es estructuralmente imposible.
14. **El escalafón de Expediente sale con 12 técnicas y acredita con 2 casos** en vez de 3; el archivo y los ilimitados de Premium cuentan. La asimetría con Escena se registra a propósito.
15. **Fichas plegadas por defecto y presupuesto de texto como criterio de publicación**: un caso que se pase no se publica aunque cumpla unicidad, no adivinación y no redundancia. El problema de Expediente es el texto, no la tabla.
16. **El reparto recurrente se corrige y se aplaza a fase 2** con NR-M1..4 y la prueba del veterano: apellidos que se leen a la primera en Rosario, vocabulario cozy, prohibición del «tú» en pistas numeradas y regla de nombre canónico del objeto.

### Los 34 cambios de `propuesta-mejoras-producto.md` §8.2, adoptados

Se adoptan **los 34 en bloque**, con la lista de §8.2 como texto vinculante. Los diez que gobiernan el roadmap y por eso se citan aquí:

- **PR3** racha por número de caso con día concedido, antes de escribir la racha (es lo que la hace costar 0,5 persona-semana en vez de varias veces más).
- **PR2** anular, nunca sustituir, con el compromiso público de 12 h desde el tercer aviso coincidente.
- **PR10** (cambio 26) núcleo de la pantalla de resultado con orden fijo de cuatro bloques, «Comprobar» en lenguaje llano y en gris, y la regla transversal de que **ningún estadístico de posición se muestra por defecto**. Obliga a que Comprobar devuelva celdas vacías y erróneas por separado.
- **Cambio 27**: la accesibilidad de teclado se mantiene como **requisito B2B y compromiso de producto, no como obligación legal** (la exención de microempresas del art. 4.5 de la Directiva 2019/882 nos alcanza). **No se cita el EAA en ningún texto público.**
- **Cambio 28**: el KPI de la newsletter pasa de apertura a **clic o partida iniciada**; la apertura no es medible con las protecciones de privacidad de correo actuales. Se añade el evento `pwa_instalada`.
- **Cambio 30**: el cronómetro **arranca en la primera interacción con el tablero**, no al cargar, y se registran tiempo activo y tiempo total por separado.
- **Cambio 33**: un `/r/[id]` de caso fuera del archivo de 7 días abre la página del día 8, no el caso jugable; y el tiempo compartido se etiqueta **«declarado»**, nunca «verificado».
- **Cambio 25**: `PDF-CLASICO` a precio libre en el mes 3 como prueba de disposición a pagar, con veto de `experto-legal` hasta tener cerrada la lista de venta a consumidor.
- **Cambio 22**: `PDF-REGALO` se adelanta a **diciembre de 2026**, que es su única ventana real; esperar a marzo de 2027 es esperar a noviembre de 2027.
- **Cambio 34**: dos correcciones de dato que se propagan (el reparto de tráfico de LatAm sin España es ≈19 % del global, no «cerca de la mitad»; «planta baja / primer piso» no diverge en México ni Argentina).

**Lo que esta entrada NO adopta:** la regla de §8.1 «lo que empuje el lanzamiento más allá de la semana 12 se corta, sea lo que sea», que D-009 dejó suspendida y que este roadmap sustituye por el orden de repliegue de `docs/roadmap.md` §4.3 y §7.1.

- **Efecto:** `docs/roadmap.md` v1.0 se publica sobre esta base. `docs/catalogo-productos.md` pasa a v1.2 con la nota de alcance y fases. Los ocho planes de área dejan de trabajar «sobre recomendaciones».
- **Alternativas descartadas:** esperar a una aprobación explícita punto por punto (paraliza ocho planes ya escritos y contradice la instrucción de `supuestos.md` §7 de adoptar las recomendaciones del director salvo objeción); adoptar solo las de Escena y dejar Expediente abierto (rompe la decisión 9, que es lo que hace que los dos modos no compitan por presupuesto).
- **Alerta D-006 comprobada:** ningún disparador cumplido a 7 de septiembre de 2026.

## D-011 · Las ocho contradicciones entre planes de área, resueltas

- **Fecha:** 2026-09-07
- **Decide:** `director-producto`. Las resoluciones R1, R2, R5, R7 y R8 afectan a compromisos del fundador y quedan sujetas a enmienda por su parte.
- **Contexto:** los ocho planes de área se escribieron en paralelo y señalaron con honestidad ocho puntos donde se contradicen entre sí o con documentos aprobados. Ninguno de sus autores podía resolverlos: cinco de los ocho cruzan tres áreas o más. El desarrollo completo de cada resolución está en `docs/roadmap.md` §2.

| # | Contradicción | Resolución | Alternativa descartada |
|---|---|---|---|
| **R1** | Fecha de lanzamiento: semana 9-10 (`supuestos.md`, seis planes) frente a semana 12-14 (`propuesta-jugabilidad.md` §7 decisión 3; riesgo R-01 de backend) | **Semana 9. Día L martes 3 de noviembre de 2026, ventana de retraso al martes 10.** Las dos semanas de más no compran lo que dicen: el interrogatorio depende de una compuerta de resultado que dos semanas no mueven, y el escalafón ya está en el alcance del día L. Y retrasar a diciembre equivale a retrasar a enero | Semana 12-14: cae entre el 30 de noviembre y el 14 de diciembre, el peor momento del año para prensa, B2B y hábito nuevo. Límite duro: si el 10 de noviembre falla, **12 de enero de 2027**, nunca diciembre |
| **R2** | Expediente el día L (`supuestos.md`, motor: cabe con un solo jueves de rodaje) frente a fase 2 (`catalogo-productos.md` v1.1 semanas 10-14, `arbol-web-final.md`). Frontend pide decisión antes de S4 | **Entra el día L**, con compuerta dura CP-7 el jueves 29 de octubre (un jueves completo publicado en beta) y repliegue de coste cero ya construido: si CP-7 va roja, el jueves del día L sale como Escena «a puerta cerrada» y Expediente entra en S11. **El jueves es Expediente y solo Expediente; el formato de celdas bloqueadas se mueve al sábado** | Aplazarlo a fase 2: lanzar sin él es lanzar con media tesis y sin el racimo de demanda de Murdle. Decidirlo en S8 cuesta 3 días de frontend en vez de medio |
| **R3** | «Solver en cliente» (`propuesta-jugabilidad.md`, diseño D-23) frente a la regla F5 del catálogo y al anticheat (frontend §0.2, backend §4.3) | **El cliente calcula el residuo a partir de las pistas que ya tiene; nunca recibe la respuesta a una pregunta que el jugador no ha formulado.** Comprobar, Sabueso, acusar y el menú del interrogatorio van al **servidor**. El motor MV no cambia de código, cambia de sitio, con presupuesto de 300 ms en p75. **Esas cuatro acciones no funcionan sin conexión y se dice en pantalla** | Menú vivo en el navegador: exige tener en el navegador las respuestas del interrogatorio, que son la solución troceada. Fingir que funciona sin conexión: es la clase de promesa que produce la reseña de una estrella |
| **R4** | Medianoche local del dispositivo (D-007 punto 4, backend C4) frente al build estático diario anclado a Madrid (frontend, contradicción 3) | **Medianoche local.** `/api/calendario` expone la ventana [hoy−7, hoy+1] en UTC y el cliente elige por su fecha civil; el caso `N` se sirve desde `D−1 10:00 UTC` y se acepta hasta `D+1 12:00 UTC`. **El número de caso, no la fecha, es la clave canónica** en racha, archivo, compartir, correo y microcopy. `/` deja de ser estático anclado a Madrid: el contenido se genera por número y la selección se hace en el borde | Anclar a Madrid: un jugador en México vería el caso «de hoy» de España durante siete horas, y la promesa está publicada. Reescribir la promesa: es un diferencial real que ningún tercero tiene y en Argentina se nota |
| **R5** | OEPM: semana 8 (legal) frente a viernes 6 de noviembre (crecimiento) frente a «con tracción» (D-006) | **Viernes 30 de octubre de 2026 (S8). Marca mixta, clases 9, 41 y 16, ≈340 €.** El día L es tan público como la nota de prensa: el 3 de noviembre se publican 36 URL, se entra en comunidades y cinco creadores reciben material. La clase 16 entra ahora porque la prioridad de seis meses del Convenio de París solo cubre los productos que ya estaban en la solicitud española, y `LIBRO-LICENCIA` y `PDF-AULA` están en el catálogo | Esperar al 6 de noviembre: deja tres días de exposición pública sin expediente y no ahorra nada. Esperar al disparador (D-006 literal): la ventana de riesgo coincide exactamente con la semana de máxima visibilidad. **D-006 no se deroga: el escalón 2 pasa a ejecutarse por calendario y los cinco disparadores siguen vigilándose para el escalón 3 (EUIPO, ventana hasta el 30 de abril de 2027)** |
| **R6** | El supuesto de 8 días de agente por semana del motor sostiene toda la fecha y no está verificado; con 6 el lanzamiento se va a la semana 13 | **Compuerta nueva CP-1 al final de S2 (20 de septiembre): M-01 a M-10 cerradas.** Si no, la capacidad real no es 8 y **el repliegue se activa esa semana**, con el orden pre-aprobado: interrogatorio a fase 2 (−4 días), escalafón con 8-10 técnicas (−1), viernes sin rastro del objeto (−1,5), pistas visuales a fase 2 (−1), dos mecánicas menores fuera del primer jueves (−1). Recuperables: 8,5 días. Además, el catálogo completo de técnicas y las pistas visuales salen de la ruta crítica a S10 | Aceptar el supuesto y descubrirlo en S9: reaccionar con una semana de margen en vez de con siete. Ampliar el plan a 12 semanas por precaución: cuesta la ventana de mercado sin evidencia de que haga falta |
| **R7** | Quién firma los casos (N-06) y cuánto cuesta: cuatro planes presupuestan por separado la misma actividad, y sumada supera las 40 horas | **Firma el fundador y solo él hasta el día 90**, con **presupuesto único de 2 h/semana desde S4** que absorbe C-12/C-15/C-19, Q-02/Q-03/Q-11 y M-32/M-43. **El criterio se delimita:** resolución a ciegas completa del 100 % de los casos de un formato la primera vez que ese formato se publica y de una muestra del 25 % del resto; checklist de seis puntos sobre el certificado para los demás. **Y el texto público se corrige a «una persona revisa cada caso antes de publicarlo y resuelve a ciegas los de cada formato nuevo»**, nunca «resuelve cada caso»: lo contrario es una afirmación no verificable sobre una característica del servicio (art. 5 de la Ley 3/1991). Válvula: si H8 se refuta en el mes 1, se contrata revisor (150-400 €/mes) | Contratar revisor desde el principio: la firma humana es la promesa que separa este producto de un generador, y el criterio todavía no está escrito con detalle suficiente para delegarlo. Mantener la promesa literal de «resuelve cada caso»: son 25 horas por lote y es indefendible ante un competidor |
| **R8** | Día L en martes 3 y no en lunes 2, por el traslado de Todos los Santos | **Confirmado, martes 3 de noviembre.** El 1 de noviembre cae en domingo y varias comunidades trasladan la festividad al lunes 2. Se añaden dos razones que no estaban escritas: el martes es el formato «El clásico», el más fácil de explicar a quien llega por primera vez, y las entradas en comunidades y los envíos a medios rinden de martes a jueves | Lunes 2: lanzar y hacer ruido un día de puente en media España es tirar la única primera vez que hay |

- **Correcciones de calendario que esta entrada cierra:** la semana 1 empieza el **lunes 7 de septiembre**, no el 8 (`supuestos.md` corregido); el **día 90 es el 1 de febrero de 2027**, no el 31 de enero; el **mes 6 del proyecto es marzo de 2027**.
- **Documentos que hay que corregir por efecto de esta entrada, con su responsable:** `docs/propuesta-jugabilidad.md` §5 (dependencia «solver en cliente», `ingeniero-motor-puzzles`), `docs/roadmap/plan-diseno.md` D-23 (el filtro no corre en el cliente, `disenador-ux-ui`), `docs/roadmap/plan-legal.md` §3.4 (el total de horas del fundador es 15,5 y no 24; la §9 es la correcta), `docs/arbol-web-final.md` §2 (las cinco URL de Expediente pasan de P1 a P0), y los argumentarios que digan «una persona resuelve cada caso» (`periodista-contenidos` y `estratega-growth-seo`).
- **Alerta D-006 comprobada:** ningún disparador cumplido a 7 de septiembre de 2026. Ninguna de estas ocho resoluciones lo cumple; R5 es precisamente la que impide que el día L nos pille sin expediente presentado.

## D-012 · Stack tecnológico: trece capas decididas, el framework a compuerta con desempate escrito, y treinta y siete correcciones a los planes

- **Fecha:** 2026-09-07
- **Decide:** `director-producto`, sobre los ocho estudios de `docs/stack/` y tres dictámenes de refutación. Los puntos 1, 5, 6 y 9 quedan sujetos a aprobación o enmienda del fundador (son las decisiones 1, 4, 5 y 6 de `docs/stack-tecnologico.md` §7).
- **Documento de desarrollo:** **`docs/stack-tecnologico.md`**, que es la versión de la verdad sobre el stack. Esta entrada registra lo decidido y lo condicionado; el razonamiento completo está allí.
- **Contexto:** el 7 de septiembre se encargaron ocho estudios en profundidad (framework, backend y hosting, arquitecturas alternativas, coste y riesgo, motor y pipeline de IA) y tres dictámenes escépticos con la instrucción de **refutar** la recomendación de cambiar de framework. **Ninguno la refutó** (4/5 en SEO y hosting, 3/5 en rendimiento, 3/5 en agentes), pero los tres corrigieron cifras o argumentos con los que se defendía, y dos de ellos aportaron datos que **el estudio original no tenía**: mediciones propias de bytes con npm y los resultados de SvelteBench por modelo.

### 1. Framework: **prueba de verificación el viernes 11 con desempate escrito a favor de SvelteKit** (opción c)

Se rechazan las otras dos formas de cerrarlo. **(a) adoptar SvelteKit hoy** es donde apunta la evidencia, pero deja sin resolver el único dato que podría invertir la decisión: si un agente sin documentación fijada escribe API de SvelteKit 3 que **compila** y la lista negra de lint no lo detecta, la mitigación entera de SK3 es papel mojado. **(b) mantener Next 16** exige reescribir el presupuesto de bytes hacia arriba y aceptar que las 22 de 36 URL que traen el tráfico —primeras visitas por búsqueda en gama media— envían 3,5 veces más JavaScript, con la agravante de que la válvula escrita en D-F1 («si el presupuesto falla, se recortan islas») **no puede existir**: el suelo es del framework.

- **Siete criterios medibles y una regla de reversión**, escritos antes del dato, en `docs/stack-tecnologico.md` §2.4. Recalibran los cuatro entregables de `docs/stack/frontend.md` §10, que tenían dos compuertas mal escritas: «tocar una celda actualiza un nodo» (en React memoizado también) y «PNG en menos de 300 ms en frío» (el propio Vercel publica P99 en frío de ~0,99 s para satori + resvg).
- **Rojo en bytes de `/`, en la prueba de bot/JSON-LD o en la tarea ciega → vuelta a Next.js 16.3.** Rojo en los otros cuatro **no revierte**: son problemas de diseño idénticos en los dos frameworks y revertir por ellos sería revertir por algo que Next no arregla.
- **Empate, ambigüedad o criterio no medible → SvelteKit.** Motivo escrito antes del dato: el suelo medido de Next 16.3.4 App Router son **130-133 KB gzip sin una línea de código propio**, lo que incumple por sí solo el presupuesto de `/` (110 KB) y hace imposible el de landing (40 KB). La carga de la prueba la tiene Next.
- **La congelación de contratos del jueves 10 no se toca ni se retrasa:** certificado, esquema de caso, contrato de predicado, tipos de la API y C4-C9 son HTTP y `zod`, agnósticos del framework (`docs/stack/motor-y-pipeline-ia.md` §9.8).
- **Si gana SvelteKit se aplican las 22 condiciones consolidadas** de los tres jueces (§2.4 del documento de stack), entre ellas: versiones exactas 2.70.x/5.57.x, instantánea de `llms.txt` en `web/docs-vendor/` como única fuente citable, `get-documentation` del MCP desactivado el día que SK3 sea estable, cada superficie sensible a SK3 detrás de un solo fichero con `grep` en CI, **Paraglide fuera** (F-53 sigue en ficheros propios), `vitest-browser-svelte` en vez de jsdom, y **modelo mínimo de clase Sonnet para ficheros `.svelte`; nunca Haiku** (0,66 en SvelteBench, snippets 0,0).
- **Tres argumentos del estudio original quedan retirados y no se pueden citar:** que Next «pierde el borde» (**ninguno de los dos tiene borde en Vercel**: las Edge Functions están obsoletas desde junio de 2025, Next 16.3 eliminó `runtime='edge'` y la opción `runtime` de `adapter-vercel` está marcada para retirada); que la reactividad de grano fino «resuelve R2 por construcción» (es de arranque, no de re-render); y que «las recetas de Workbox causan el bug de R5» (Workbox, vite-plugin-pwa y la clase `Serwist` traen `skipWaiting` en falso por defecto; solo el ejemplo de `@serwist/next` no).
- **Coste aceptado y registrado, no escondido:** el ecosistema más grande, el utillaje oficial de agentes de Next 16.2/16.3 —cuya documentación viaja dentro del paquete y **no puede desincronizarse de la versión instalada**—, `next/og`, `sitemap.ts` y `generateMetadata` (2-3 días de agente), el ISR que Next conserva en Cloudflare y SvelteKit no, la ausencia de equivalente a `revalidateTag`, y **la escasez 60:1 de Svelte en España**, irrelevante el año 1 y relevante el día de una *due diligence* B2B.

### 2. Once capas cerradas

TypeScript estricto y Node 22 · Tailwind v4 con `tokens.json` y Bits UI · motor en TypeScript con `Uint32Array` (**nunca `BigInt`**: 633× más lento con `n = 5`) en monorepo pnpm **sin Turborepo** · **Supabase Pro en París (`eu-west-3`)** · **Vercel Pro con funciones en `cdg1`** y tope de gasto duro · **Resend hasta 6.000 suscriptores, luego Amazon SES `eu-west-1`** · **PostHog Cloud EU a 2,8 eventos por sesión** · **Sentry en `de.sentry.io`** más Better Stack gratuito · **Stripe Managed Payments** (fase 2, condicionada) · GitHub Actions con `generar.yml` y `redactar.yml` separados · Vitest en modo navegador, fast-check y **oráculo ingenuo en TS**.

### 3. Hosting: se elige lo que **no** gana la matriz, y se dice por qué

Cloudflare Workers gana la tabla (327 frente a 280) por coste y por latencia en LatAm. **No se elige**, y no por inercia: cambia 15 $/mes por riesgo de calendario en la semana 1; **bloquea por defecto los bots de IA de Entrenamiento y Agente desde el 15 de septiembre de 2026** para zonas nuevas y gratuitas, que es exactamente el canal GEO; SvelteKit pierde ISR allí; y `@resvg/resvg-js` es un binding nativo imposible en Workers, así que la OG habría que reescribirla a `resvg-wasm`. **Es el destino de la salida, no el punto de partida**, con la salida ensayada en CI desde S2 y disparador escrito.

### 4. Trece correcciones con fecha en la semana 1

Anónimo perezoso (jueves 10, toca C1/C2) · Supabase en París · Sentry en la región alemana (irreversible) · C7 a 2,8 eventos (jueves 10) · **`contratos/` como paquete de primer nivel, fuera de `web/`** (jueves 10, corrige C3) · **CAP partido en CAP-C y CAP-S** (miércoles 9; 518.400 > 150.000 era una contradicción dentro del mismo documento) · presupuesto de bytes reescrito con suelos medidos · tope de gasto en Vercel · comprobación de 403 a bots de IA el viernes 11 y alerta permanente después · versiones y documentación fijadas · ramas de vista previa efímeras · DNS en Cloudflare en gris · techo de gasto por usuario. Las veinticuatro restantes, con semana y responsable, en `docs/stack-tecnologico.md` §4.

### 5. Presupuesto: el compromiso de «<100 €/mes hasta 50.000 usuarios» queda sustituido

**No es un cambio de criterio: es una cuenta incompleta, como la que corrigió D-008.** Las causas son que la hipótesis de uso se dobló (de 6 a 12 sesiones por usuario y mes) y que Sentry y la IA de redacción nunca estuvieron en el presupuesto.

- **Día 1: 55-85 €/mes.** 10.000 usuarios: 84 €. 50.000: **130-215 €**. 200.000: **455-530 €**.
- **Techo nuevo: 0,006 € por usuario activo mensual** de infraestructura, con suelo de 130 €/mes hasta 22.000 usuarios y alerta al 0,0045 €. La IA se presupuesta aparte, con techo de 2 € por caso y 80 €/mes.
- **Se conserva íntegra la única parte que importaba de la regla anterior: se recorta analítica, no producto.**
- **Punto de inflexión: 35.000-40.000 usuarios**, que coincide con los umbrales ya escritos de `ADS` y `APP-NATIVA`: es un solo hito de operaciones, no tres.

### 6. IA de redacción: Opus 5 donde se nota, Sonnet 5 donde no

**Recomendación al fundador, que decide:** Opus 5 para redacción y paquete post-acusación, Sonnet 5 para retraducción y puntuación, API por lotes y caché de prefijo, SDK de TypeScript con salidas estructuradas. **Haiku prohibido** en redacción y en ficheros `.svelte`. Con 20K de entrada y 8K de salida por caso son **0,30 $ por caso y 0,15 $ por lotes**; 365 casos al año, **55-110 $**, y **26-40 $** con el reparto de dos modelos y la arquitectura del pipeline, que redacta **un** candidato y no veinte. Confirma D-009 desde otro ángulo: **el cuello de botella no es el modelo, son las 2 h/semana de firma humana de R7.**

### 7. Pasarela: se reabre B-41

`coste-y-riesgo.md` da Paddle por firme; `backend-hosting.md` y `arquitecturas-alternativas.md` piden reabrirlo con dos datos de 2026 que el primero no tenía: **Stripe Managed Payments pasó a la API en abril de 2026** (5 % + 0,25 €, es decir **13,3 % sobre 2,99 €** frente al 21,7 % de Paddle) y **Paddle exige contrato a medida por debajo de 10 $**, que es nuestro punto de precio. Con Paddle nacemos incumpliendo la hipótesis H6 de D-008 desde la primera factura. **Se reabre con recomendación de Stripe Managed Payments y Paddle como suplente**, y tres verificaciones antes de cerrar en S11: alta de vendedor español, punto de precio de 2,99 € y factura conforme para consumidor. La comisión que citan los dos estudios difiere (13,3 % frente a 17 %) porque uno usa tarifas base del EEE y el otro de EE. UU.: **manda el 13,3 %**, y es lo primero que hay que comprobar.

### 8. Alternativas descartadas, para que no se repita la conversación

**Framework:** Astro 6 (el juego es una aplicación, no contenido: dos modelos mentales en un repositorio), Nuxt 4 (mete Vue donde todo lo demás es TypeScript liso), SolidStart 2 (fallos de reactividad **silenciosos**, lo peor para código de agente), React Router 7 (corpus con triple identidad Remix/RR), Vite+React SPA (no puede servir `/` por número de caso), Qwik (672 sitios y la primera pulsación depende de la red). **Datos:** Firebase (**Firebase Auth no tiene residencia en la UE**), Convex (en Europa el uso incluido de Starter y Pro **no aplica**), Cloudflare D1 (sin RLS y SQLite obliga a reescribir la racha), Neon+Better Auth (6-10 días y la seguridad de la auth pasa a ser nuestra), Clerk (~3.000 $/mes a 200.000 usuarios solo de auth), Hetzner y PocketBase (**fuera por la regla «sin guardias»**, no por dinero). **Hosting:** Netlify (créditos opacos; descartado también como plan de salida), Fly, Railway y Render (salidas honestas, no aportan hoy), **plan Hobby de Vercel (prohíbe el uso comercial)**. **Correo:** Postmark y Brevo por coste (Brevo se queda como salida europea), Loops porque cobra por contacto. **Analítica:** Plausible (no da embudos ni cohortes), GA4 (residencia, en un producto cuya portada promete honestidad), Mixpanel (~730 $/mes), Umami (guardias). **Pagos:** Polar (subió el 27/5/2026 y perdió su único argumento), Lemon Squeezy (en transición hacia Stripe Managed Payments; sigue siendo candidata para `PDF-CLASICO` en B-44), Gumroad (solo para el experimento de precio libre). **Motor:** Rust→WASM (2,1× sobre un presupuesto que sobra por 30×), Go (no resuelve ningún problema del proyecto), Python (36× más lento **en la etapa que domina la Compuerta 0**), híbrido TS+Python (dos implementaciones divergen el día que alguien arregla un caso límite en una sola, y «misma semilla, mismo caso» deja de ser cierto sin que ningún test lo diga).

### 9. Lo que esta decisión NO tiene medido, y consta

Los dominios oficiales de Next, Svelte, Vercel y Cloudflare estaban **bloqueados por el proxy**: lo oficial se leyó en su espejo de GitHub y lo que no tiene espejo —precios y documentación de adaptadores— viene de fuentes secundarias que hay que verificar antes de firmar. **Las mediciones de bytes las hizo un juez con npm en este contenedor**, con proyectos vacíos: son un suelo, no una previsión. **Nada se ha probado en un Android real** porque el dispositivo no está comprado (Q-13, 150-200 €): ni el INP del 6×6, ni la hidratación, ni el LCP con red irregular. Y **ninguna hipótesis de uso está medida**: las tablas de coste son escenarios, no previsiones, y se revisan con los datos de la beta de S7 antes del día L.

- **Efecto en otros documentos:** se crea `docs/stack-tecnologico.md` como versión de la verdad del stack; `docs/roadmap/supuestos.md` línea «Stack» sustituida por un remite; `docs/roadmap/plan-frontend.md` §1 recibe una nota de remite **sin reescribir el plan** (D-F1 se sustituye o se confirma el viernes 11 con D-F1-bis); `docs/roadmap/plan-backend.md` recibe los diez parches de `docs/stack/backend-hosting.md` §9; `docs/roadmap/plan-motor.md` y `motor-viabilidad-expediente.md`, las cinco correcciones de `motor-y-pipeline-ia.md` §8.
- **Alternativas de método descartadas:** decidir el framework por la matriz de `arquitecturas-alternativas.md` (su propio autor dice que no la zanja y que no debe usarse para eso); aplazar la decisión a S2 «para tener más datos» (los datos que faltan son de dispositivo, y el dispositivo no llega antes); y congelar el framework el jueves 10 junto con los contratos (mezcla una decisión reversible con nueve que no lo son, y ninguno de los contratos depende del framework).
- **Alerta D-006 comprobada:** ningún disparador cumplido a 7 de septiembre de 2026. Este documento es interno y técnico. Se anota que **la primera conversación B2B sí lo disparará**, y que `coste-y-riesgo.md` §6.1 sitúa `B2B-WIDGET` como la línea de mejor margen unitario del catálogo (92-98 %): si esa conversación se adelantara sobre el 30 de octubre, **el expediente de la OEPM se adelanta con ella**, nunca al revés.
