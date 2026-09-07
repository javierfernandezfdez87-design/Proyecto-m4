# Plan de área: legal

- **Autor:** `experto-legal`
- **Fecha:** 7 de septiembre de 2026 (semana 1, día 1)
- **Formato:** el de `docs/roadmap/supuestos.md` §13. Ids `L-xx`.
- **Fuentes:** `docs/roadmap/supuestos.md`, `docs/decisiones.md` (D-005, D-006, D-007, D-008, D-009), `docs/legal/anterioridades-sospechario.md`, `docs/arbol-web-final.md` §3 y §10, `docs/arbol-web.md` §3.2, `docs/catalogo-productos.md` v1.1, `docs/propuesta-mejoras-producto.md` §8.

> **Aviso de valor jurídico.** Este documento es un plan de trabajo redactado por un agente, no un dictamen de abogado colegiado ni de agente de la propiedad industrial. Todo lo marcado **[ABOGADO]** exige revisión profesional antes de publicarse o firmarse; el precio de esa revisión está en §8. Lo demás puede ejecutarse con criterio propio, asumiendo el riesgo que se declara en cada fila.

---

## 0. Alerta D-006, comprobada hoy

**Ningún disparador cumplido a 7 de septiembre de 2026**: cero usuarios, cero prensa, cero conversación B2B o editorial, ningún tercero detectado usando un nombre parecido a Sospechario.

**Pero dos disparadores están *programados* en este plan y hay que decirlo alto:**

| Disparador de D-006 | Cuándo lo provocamos nosotros a propósito | Semana del roadmap | Fecha |
|---|---|---|---|
| Mención de la marca en prensa o medios | Nota de prensa a 10 medios (`arbol-web-final.md` §10.2, semana 2 del plan de contenidos) | **W10** | 9-15 nov 2026 |
| Inicio de conversación de licencia B2B o editorial | `/para-medios` + primera conversación B2B (§10.3, S12 del plan de contenidos) | **W20** | 18-24 ene 2027 |

Enviar una nota de prensa es fabricar el disparador con la mano. Por eso **la recomendación de este plan es adelantar la presentación en la OEPM a la semana 8** (antes del lanzamiento), en vez de esperar a que el disparador se cumpla y reaccionar. Coste de adelantarla: unos 340 €, ocho semanas antes de lo previsto en D-006. Coste de no adelantarla: ver §7.1.

---

## 1. Cómo leer este plan

**Numeración de semanas.** W1 = 7-13 de septiembre de 2026 (la que fija `supuestos.md` al situar la beta cerrada en 19-25 de octubre). Beta cerrada **W7**. Lanzamiento público **W9** (2-8 de noviembre). El *plan de contenidos* de `arbol-web-final.md` §10 usa su propia numeración con S1 = semana del lanzamiento. Equivalencia usada aquí:

| Plan de contenidos | Roadmap | Fecha |
|---|---|---|
| S1 (lanzamiento) | **W9** | 2-8 nov 2026 |
| S2 (nota de prensa) | **W10** | 9-15 nov 2026 |
| S10 (comparativa Murdle/Murdoku) | **W18** | 4-10 ene 2027 |
| S12 (primera conversación B2B) | **W20** | 18-24 ene 2027 |
| S13 | **W21** | 25-31 ene 2027 |

**Día 90.** Se fija aquí, porque estaba ambiguo entre documentos: **día 90 = 90 días naturales desde el lanzamiento público = 31 de enero de 2027 (W21)**. Es la fecha del criterio continuar/parar de `contexto-proyecto.md` y la que dispara el escalón 3 de D-006 (EUIPO).

**Formato de cada recomendación.** Cada tarea que implica criterio lleva en §4 las cuatro líneas del método del área: **riesgo** (alto/medio/bajo), **norma aplicable**, **opción segura**, **opción aceptable**, **lo que no se debe hacer**.

**Columna "riesgo" de las tablas.** Es el riesgo de la *tarea* (que se retrase, que salga mal, que dependa de un tercero), no el riesgo jurídico del asunto. El riesgo jurídico está en §4.

---

## 2. Los cinco bloqueantes, con fecha

| # | Bloqueante | Qué bloquea | Fecha límite | Tarea |
|---|---|---|---|---|
| **B1** | Comprobaciones manuales en TMview, OEPM, EUIPO/USPTO y RMC | Compra de dominios, cierre de D-004, títulos, `Organization`, `llms.txt`, toda la rama de marca ajena | **viernes 11 sep 2026 (W1)** | L-01 a L-04 |
| **B2** | Luz verde escrita sobre uso de marca ajena en las 9 landings y sus títulos | Las 9 landings de `/juegos-como-*`, los briefs de las 30 páginas del día 1, el vídeo, el compartir | **viernes 18 sep 2026 (W2)** | L-07, L-08 |
| **B3** | Los cinco textos legales del día 1 publicados y enlazados | Lanzamiento público. Sin aviso legal no se puede operar (art. 10 LSSI) | **viernes 30 oct 2026 (W8)** | L-13 a L-17 |
| **B4** | Expediente OEPM redactado, presupuestado y **presentado** | Nota de prensa (W10), `/para-medios` (W20), cualquier conversación B2B | **viernes 30 oct 2026 (W8)**; sin excusa, el 13 nov (W10) | L-11, L-12 |
| **B5** | Contratos de encargado firmados y región de datos verificada (Supabase, Vercel, PostHog, Resend) | Recogida de cualquier dato personal, incluida la lista de espera de la W1-W2 | **viernes 25 sep 2026 (W3)**, antes del primer correo capturado | L-18 |

B5 está antes de lo que parece intuitivo: la newsletter captura correos **desde la semana 1** (`catalogo-productos.md`, `NEWSLETTER`, fase MVP). En cuanto entra el primer correo hay tratamiento de datos personales, y con él la obligación de información, base jurídica, prueba de consentimiento y encargado contratado.

---

## 3. Tablas de tareas

Convención de columnas: id · tarea · entregable (ruta) · días de agente · horas del fundador · dependencias · W inicio-fin · criterio de "hecho" · riesgo.

### 3.1 Semana 1 — comprobaciones del fundador y bloqueantes del día 1

| id | Tarea | Entregable | Días ag. | Horas fund. | Dep. | W | Criterio de "hecho" | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **L-01** | **TMview**: 16 términos exactos (§4.1), territorios ES + EM + WO, estados *Registrada + Solicitada + Expirada*, clases 9/16/28/41. Segunda pasada MX/CL/CO | `docs/legal/busquedas/tmview-2026-09.md` (capturas en `docs/legal/busquedas/`) | 0,25 | **1,5** | — | W1 | Los 16 términos ejecutados, con captura fechada de cada resultado y titular/clase/estado anotados. Lectura aplicada con la tabla de criterio de `anterioridades-sospechario.md` §5.7 | Medio: si sale un idéntico vivo en 9/28/41, cae Sospechario y se activa Culpabilia |
| **L-02** | **OEPM**: Localizador + CEO, **modalidad marca y modalidad nombre comercial**, mismos términos, clases 9/16/28/41 | mismo archivo, §2 | 0,25 | **0,75** | — | W1 | Los nombres comerciales españoles comprobados (TMview no los refleja bien y también son derecho oponible) | Medio |
| **L-03** | **Estado registral de las marcas ajenas**: `murdoku` y `murdle` en EUIPO eSearch plus, OEPM y TMview; **USPTO 99677726** en TSDR (titular, fecha de presentación, clases, estado) y si hay reivindicación de prioridad hacia la UE | mismo archivo, §3 | 0,25 | **0,75** | — | W1 | Titular, fecha y clases anotados. **Se presume protección en la UE aunque no aparezca**: el dictamen L-07 no depende de encontrarlas | Bajo: no cambia la conclusión, sí el tono |
| **L-04** | **Registro Mercantil Central**, denominaciones `SOSPECHARIO`, `PISTARIO`, `CULPABILIA` | mismo archivo, §4 | 0,1 | **0,25** | — | W1 | Consultado y anotado. No da derecho de marca; avisa de fricción práctica | Bajo |
| **L-05** | **Vigilancia gratuita en TMview** sobre `sospech*` en ES y EM, con alerta al correo del fundador | mismo archivo, §5 (captura del alta) | 0,1 | **0,25** | L-01 | W1 | Alerta activa y correo de confirmación recibido. Es la **única defensa gratuita** mientras no haya registro (D-006, riesgo aceptado) | Bajo |
| **L-06** | **Compra de dominios y handles**: `sospechario.com`, `.es`, `.app` si está libre; handles `@sospechario` en TikTok, Instagram, X, YouTube. Con privacidad de WHOIS y renovación automática a 2 años | `docs/legal/marca-propia.md` §1 (facturas en `docs/legal/pruebas-de-uso/`) | 0,1 | **0,5** | L-01 (verde) | W1 | Dominios en el panel del registrador a nombre del fundador, factura guardada y fechada, handles reservados. Presupuesto ≈40-70 € | Medio: el `.com` puede estar aparcado con precio de reventa; el criterio de D-004 es bajarlo a suplente por encima de 500 € |
| **L-07** | **Dictamen de uso de marca ajena**: los 8 puntos de `arbol-web.md` §3.2, landing por landing (las 9), título por título, más compartir, OG, vídeo y `llms.txt`. Incluye veredicto sobre `/juegos-como-cluedo` y `/juegos-diarios-como-wordle` y criterio escrito sobre Google Ads | **`docs/legal/uso-marcas-ajenas.md`** | 1,5 | **1,0** (leer y aprobar) | L-03 | W1-W2 | Tabla con las 9 landings, veredicto (publicar / publicar con cambio / no publicar), redacción exacta obligatoria y las 12 prohibiciones. Firmado y fechado | **Alto: bloqueante del día 1.** Sin esto `periodista-contenidos` no puede escribir un solo brief |
| **L-08** | **Texto de `/legal/marcas`** y del aviso de no afiliación que va en cada landing, en la versión larga (página) y corta (aviso) | `docs/legal/uso-marcas-ajenas.md` §6 (textos listos para pegar) | 0,25 | 0 | L-07 | W2 | Texto cerrado, con enlace saliente al producto original y fecha de revisión visible | Bajo |
| **L-09** | **Datos de identificación del prestador** para el aviso legal: nombre o razón social, NIF, domicilio, correo de contacto, alta censal, y decisión persona física / S.L. | `docs/legal/aviso-legal.md` §1 (borrador con huecos) | 0,1 | **0,5** | — | W1 | Los seis datos del art. 10 LSSI recogidos. **Si se opera como persona física hay que publicar nombre y domicilio reales**: si eso incomoda, la alternativa es una S.L. o un domicilio de coworking, y eso se decide ahora, no en la W8 | Medio: decisión personal del fundador con consecuencias de coste |

**Horas del fundador en W1: 5,5 h.** Es la semana más cara del área y la más rentable: las cuatro primeras tareas cuestan 3,25 h y 0 € y son las que impiden construir ocho semanas sobre un nombre que no se puede usar.

### 3.2 Semanas 2-4 — expediente de marca y armazón de datos

| id | Tarea | Entregable | Días ag. | Horas fund. | Dep. | W | Criterio de "hecho" | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **L-10** | **Cierre de D-004** con el resultado de L-01/L-02: Sospechario confirmado o sustituido por Culpabilia. Nota para `docs/decisiones.md` | entrada D-010 en `docs/decisiones.md` | 0,25 | **0,5** | L-01, L-02, L-06 | W2 | Decisión escrita con fecha, quien decide y alternativa descartada. Fecha prevista de D-004: 14 sep = **W2** | Alto si hay que cambiar: arrastra logo, dominio, `Organization` y los 30 briefs |
| **L-11** | **Expediente OEPM redactado y presupuestado**: signo (denominativa + mixta), lista de productos y servicios de clases **9 y 41**, valoración razonada de la **16** y de la 28, tasas vigentes, plazos, y quién presenta (fundador o agente de PI) | **`docs/legal/marca-propia.md`** | 1,0 | **1,0** | L-10 | W2-W3 | Expediente listo para presentar en una sesión de 30 min: textos de clase copiables, tasas confirmadas ese día en la sede de la OEPM, y la casilla de prioridad de París explicada para la fase 2. Ver §4.2 | Medio: la lista de productos es donde se gana o se pierde alcance. **[ABOGADO]** recomendado, 250-500 € |
| **L-12** | **Presentación en la OEPM** (acto del fundador, con certificado digital o Cl@ve) | resguardo en `docs/legal/marca-propia.md` §5 | 0,1 | **1,0** | L-11, CL-2 | **W8** | Resguardo con número de expediente y fecha. Tasas pagadas (≈244 € con 2 clases, ≈340 € con 3) | **Alto si se retrasa más allá de W10**: la nota de prensa sale con el nombre desprotegido |
| **L-13** | **Aviso legal** (art. 10 Ley 34/2002 LSSI-CE) | `docs/legal/aviso-legal.md` | 0,25 | 0 | L-09 | W4 | Prestador identificado, datos de contacto, condiciones de acceso, propiedad intelectual, ley aplicable y fuero de consumidor (domicilio del consumidor, no el nuestro) | Bajo |
| **L-14** | **Términos de uso**: objeto, gratuidad del caso del día, cuenta opcional desde 14 años, conducta prohibida, alias de duelos, disponibilidad sin SLA para el tier gratuito, anulación de casos, propiedad intelectual del contenido y del motor, limitación de responsabilidad conforme a TRLGDCU, modificación, resolución, DSA en lo básico | **`docs/legal/terminos-de-uso.md`** | 1,0 | **0,5** | L-13 | W4-W5 | Redactados, con la cláusula de anulación de L-21 incorporada y sin ninguna cláusula que limite derechos irrenunciables del consumidor | Medio. **[ABOGADO]** |
| **L-15** | **Política de privacidad por capas**: capa 1 en el punto de recogida, capa 2 completa. Tratamientos: cuenta, progreso anónimo, newsletter, duelos, soporte y erratas, analítica, pagos (fase 2) | **`docs/legal/privacidad.md`** | 1,0 | **0,5** | L-18 | W4-W5 | Un tratamiento por fila con finalidad, base jurídica, categorías, plazo de conservación, destinatarios, transferencias y derechos. Correo de ejercicio de derechos operativo | Medio. **[ABOGADO]** |
| **L-16** | **Política de cookies y decisión de analítica**: qué se instala, qué está exento y qué no. Objetivo declarado: **analítica sin consentimiento donde sea posible** (§4.3) | **`docs/legal/cookies.md`** | 0,75 | **0,25** | L-18 | W5 | Inventario real hecho contra el sitio de preproducción (no contra la teoría), con la decisión de configuración de PostHog escrita y verificable en el código | Medio: depende de que frontend implemente la configuración exacta |
| **L-17** | **Registro de actividades de tratamiento** (art. 30.1 RGPD, como responsable) | `docs/legal/registro-actividades.md` | 0,5 | 0 | L-15 | W5 | Una ficha por tratamiento, con encargados, plazos y medidas. Documento vivo con fecha de última revisión | Bajo. Es barato y es lo primero que pide la AEPD en una inspección |
| **L-18** | **Contratos de encargado y mapa de transferencias**: Supabase, Vercel, PostHog, Resend. Aceptar DPA de cada uno, verificar **región europea real** y anotar subencargados y transferencias a EE. UU. (SCC + marco de adecuación) | `docs/legal/encargados-tratamiento.md` | 0,75 | **1,5** | — | W3 | Los cuatro DPA aceptados y guardados en PDF con fecha, región confirmada en el panel de cada proveedor, y la ficha de transferencia rellena. Ver §4.4 | **Alto**: es bloqueante B5 y depende de que el fundador entre en cuatro paneles |
| **L-19** | **Consentimiento y prueba de la newsletter**: doble opt-in, texto de la casilla, registro de fecha/hora/IP del consentimiento, baja en un clic (art. 21 LSSI + art. 7.1 RGPD) | `docs/legal/privacidad.md` §7 + especificación para backend | 0,25 | 0 | L-15 | W3 | Texto de la casilla cerrado, campo `consent_ts`/`consent_ip` en la tabla `subscribers`, enlace de baja en cada envío | Medio: si se captura antes de esto, hay que rehacer el consentimiento |

### 3.3 Semanas 5-8 — producto, menores, contenido y cierre para lanzar

| id | Tarea | Entregable | Días ag. | Horas fund. | Dep. | W | Criterio de "hecho" | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **L-20** | **Menores**: edad mínima de cuenta (14, art. 7 LOPDGDD), sección infantil sin cuenta ni correo ni compartir ni anuncios ni compra, compra del pack Junior desde página de adultos, y regla de cero perfilado publicitario | **`docs/legal/menores.md`** | 0,75 | **0,25** | L-15 | W5-W6 | Las nueve reglas de §4.5 escritas y convertidas en criterios de aceptación verificables por `revisor-calidad` | Medio: `JUNIOR-WEB` es fase 2, pero `/juegos-como-murdoku/para-ninos` es **del día 1** y ya obliga |
| **L-21** | **Compromiso de anulación y página de erratas**: texto público exacto del compromiso de 12 h, qué se promete y qué no, y estructura de la entrada de errata | `docs/legal/compromiso-anulacion-erratas.md` | 0,5 | **0,25** | — | W6 | Texto cerrado, con el matiz de "12 horas desde el tercer reporte coincidente" y sin ninguna promesa de guardia nocturna. Ver §4.6 | Medio: un compromiso público incumplido es acto de engaño (art. 5 LCD) |
| **L-22** | **Licencia de contenido de packs PDF y aula**: licencia de uso personal, licencia de aula de 35 copias, licencia de centro, y lo que ninguna incluye | `docs/legal/licencia-contenido.md` | 0,5 | 0 | — | W6 | Tres textos de licencia, la nota de copyright de pie de página del PDF y la advertencia de venta a centro público. Ver §4.7 | Medio: `PDF-CEBO` sale en W8 y ya lleva licencia |
| **L-23** | **Dictamen sobre accesibilidad y EAA**: si la Directiva (UE) 2019/882 y la Ley 11/2023 nos obligan hoy, y qué se puede decir en público | `docs/legal/accesibilidad-eaa.md` | 0,5 | **0,25** | — | W6 | Dictamen escrito con conclusión binaria, la frase exacta que sí se puede publicar y la lista de frases prohibidas. Ver §4.8. **Levanta el veto del punto 27 de `propuesta-mejoras-producto.md` §8.2** | Bajo jurídicamente, alto reputacionalmente si se dice mal |
| **L-24** | **Revisión de textos de compartir y de la ficha técnica frente a la Ley 3/1991**: cada afirmación de la ficha, el texto de compartir, la imagen 9:16, la tabla comparativa de las 9 landings y el argumentario de prensa | `docs/legal/competencia-desleal-textos.md` | 0,75 | **0,25** | L-07 | W6-W7 | Tabla afirmación → ¿verificable? → prueba → redacción aprobada. Ver §4.9 | **Alto**: aquí está el mayor riesgo de sanción de consumo y de demanda de un competidor |
| **L-25** | **Derechos sobre la mascota y los activos**: contrato escrito de cesión en exclusiva con el ilustrador (arts. 43 y 45 TRLPI), inventario de licencias de tipografías, iconos e imágenes, y política sobre lo generado con IA | `docs/legal/propiedad-intelectual-activos.md` | 0,5 | **0,5** (firmar) | — | W7 | Contrato firmado por ambas partes con modalidades, ámbito territorial y duración delimitados. Inventario con licencia y enlace por activo | **Alto**: sin ese papel, la mascota no es del proyecto (`anterioridades` §3.4 regla 5) |
| **L-26** | **Textos precontractuales de la lista de espera de Premium**: qué se promete al inscribirse, precio fundador 14,99 €, renovación a 19,99 €, que no hay cargo ahora y que el precio puede no llegar a existir | `docs/legal/condiciones-premium.md` §1 | 0,25 | 0 | L-14 | W7 | Texto de la página `/premium` aprobado. La lista de espera **no es un contrato**, y tiene que decirlo | Medio: prometer un precio que luego no se ofrece es engaño |
| **L-27** | **Publicación y verificación de los cinco legales** en el sitio: pie de página, enlaces desde cada landing, `noindex` no, fecha de última actualización visible | criterio de aceptación para `desarrollador-frontend` | 0,25 | **0,5** | L-13..L-16, L-08 | W8 | Las cinco URL (`/legal/aviso-legal`, `/legal/privacidad`, `/legal/cookies`, `/legal/terminos`, `/legal/marcas`) responden 200, están en el pie y enlazadas desde las 9 landings | Bajo |
| **L-28** | **Procedimiento de derechos de los interesados**: buzón, plantilla de respuesta, verificación de identidad, plazo de un mes, y borrado real en Supabase (incluida la cadena de duelos y erratas) | `docs/legal/privacidad.md` §9 + runbook | 0,25 | 0 | L-15 | W8 | Plantillas de acceso, supresión, portabilidad y oposición escritas, y prueba de que el borrado encadenado funciona en preproducción | Medio: el derecho de supresión sin borrado técnico real es incumplimiento |
| **L-29** | **Kit de prueba fechada de uso** (mitigación de D-006 §6.3): captura en Wayback Machine el día 1, `git log`, capturas fechadas, primera publicación en redes, primera factura | `docs/legal/pruebas-de-uso/README.md` | 0,25 | **0,5** | — | W9 | Primera instantánea de la home en `web.archive.org` con fecha del día del lanzamiento, y carpeta con al menos cinco pruebas fechadas | Bajo, pero solo sirve si se acumula desde el principio |
| **L-30** | **Revisión legal de la beta cerrada** (W7): términos aceptados por los 100-300 participantes, aviso de que es preproducción, tratamiento de las respuestas de la prueba y de las grabaciones si las hay | anexo en `docs/legal/terminos-de-uso.md` | 0,25 | **0,25** | L-14 | W7 | Texto de invitación con la información del art. 13 RGPD y casilla de consentimiento separada para grabar sesiones | Bajo |
| **L-31** | **Lista de puntos que exigen abogado colegiado, con coste** | **`docs/legal/revision-abogado.md`** | 0,5 | **1,0** (decidir presupuesto) | todas | W3 y actualización W8 | Tabla de §8 con prioridad, coste estimado y decisión del fundador contratado/no contratado por cada línea | Medio: si no se contrata nada, hay que registrar el riesgo aceptado por escrito |

### 3.4 Post-lanzamiento (W10 en adelante)

| id | Tarea | Entregable | Días ag. | Horas fund. | Dep. | W | Criterio de "hecho" | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **L-32** | **Comprobación previa a la nota de prensa**: que la OEPM está presentada, que el kit de prensa no contiene marca ajena en titular ni en imágenes, y que las cifras propias tienen fecha de cálculo | visto bueno escrito en `docs/legal/competencia-desleal-textos.md` §5 | 0,25 | **0,25** | L-12, L-24 | **W10** | Nota de prensa aprobada línea a línea. **Si L-12 no está hecha, la nota no sale** | Alto |
| **L-33** | **Vigilancia de marca en funcionamiento**: revisión mensual de la alerta de TMview, de las tiendas de apps y de los clones; protocolo de reacción (oposición en 2 meses desde el BOPI) | `docs/legal/marca-propia.md` §6 | 0,25 | **0,25**/mes | L-05 | W10 en adelante | Revisión mensual anotada con fecha, aunque el resultado sea "nada" | Bajo |
| **L-34** | **Condiciones de Premium completas**: información precontractual, derecho de desistimiento de 14 días y su excepción para contenido digital, renovación automática, cancelación tan fácil como el alta, precios con IVA, reglas de reembolso, Omnibus | **`docs/legal/condiciones-premium.md`** | 1,25 | **0,5** | L-35 | W14-W16 | Los 12 puntos de §7.2 cubiertos, con el texto exacto de la casilla de pérdida del derecho de desistimiento. **[ABOGADO]** | **Alto**: es donde están las sanciones de consumo |
| **L-35** | **Merchant of record: elección y contrato**: comparativa Paddle / Lemon Squeezy / Stripe directo + OSS, quién es el vendedor frente al consumidor, quién asume el desistimiento, obligaciones fiscales que **siguen siendo nuestras** | `docs/legal/merchant-of-record.md` | 0,75 | **1,0** | — | W13-W15 | Decisión escrita con la tabla de §7.3, contrato del MoR leído y las tres obligaciones que no desaparecen anotadas | Medio: `PREMIUM` está condicionado a métricas, pero `PDF-CLASICO` (mes 3) ya vende |
| **L-36** | **Condiciones de venta de los packs PDF**: entrega inmediata, desistimiento y su renuncia, enlace firmado de 72 h y 5 descargas, reembolsos, factura | `docs/legal/condiciones-premium.md` §6 | 0,5 | 0 | L-35, L-22 | W13 | Flujo de compra con la casilla de renuncia al desistimiento **antes** de la descarga, no después | Medio |
| **L-37** | **Contrato B2B con SLA**: licencia de uso no exclusiva, propiedad del motor y de los casos, SLA de publicación diaria y soporte, **cláusula de anulación con aviso y sin crédito económico**, protección de datos entre responsables, duración, precio, resolución, ley y fuero | `docs/legal/contrato-b2b.md` | 1,5 | **1,0** | L-21 | W17-W19 | Contrato marco + anexo de SLA + anexo de datos, listo **antes** de la primera conversación B2B de W20. **[ABOGADO]** | **Alto**: un SLA mal redactado convierte una errata en obligación de devolución |
| **L-38** | **Escalón 3 de D-006: EUIPO** clases 9 y 41 (+16 si el libro va en serio), **reivindicando la prioridad de la solicitud española** | `docs/legal/marca-propia.md` §7 | 0,5 | **1,0** | L-12, día 90 | **W21-W22** | Solicitud presentada con la casilla de prioridad marcada, dentro de los 6 meses desde la fecha de la OEPM. ≈1.050 € con 3 clases | Alto si se pasa el plazo: se pierde la retroactividad, no la marca española |
| **L-39** | **Protocolo de Madrid**: designaciones para LatAm, con la advertencia de que **Argentina no es parte** y exige solicitud nacional | `docs/legal/marca-propia.md` §8 | 0,5 | **0,5** | L-38 | W26+ | Plan de designaciones (MX, CL, CO vía Madrid; AR nacional) con coste y calendario. Solo se ejecuta con negocio real en esos países | Bajo: es una decisión de fase 3 |
| **L-40** | **Publicidad y plataformas**: políticas de AdSense o red equivalente, consentimiento conforme a la guía de la AEPD, cero anuncios en la sección infantil, y reglas de tienda si se hace app nativa | `docs/legal/publicidad-plataformas.md` | 0,75 | **0,25** | L-16, L-20 | W22+ | Documento con las reglas del catálogo convertidas en criterios verificables y el cambio de la promesa "sin anuncios" gestionado (§4.9) | Medio: activar anuncios contradice textos publicados el día 1 |
| **L-41** | **Revisión de aniversario**: renovación de dominios, estado de la solicitud OEPM, revisión de los legales, actualización del registro de actividades y del inventario de encargados | `docs/legal/revision-anual-2027.md` | 0,5 | **0,5** | — | W40 | Checklist ejecutada con fecha | Bajo |

**Totales del área.** ≈19,5 días de agente y **≈24 horas del fundador** hasta el lanzamiento (W9), más ≈7 horas y ≈1.500-2.000 € de tasas y honorarios entre W10 y W22.

---

## 4. Los entregables que necesitan criterio

### 4.1 Términos exactos de las comprobaciones manuales (L-01 a L-04)

**TMview** (`https://www.tmdn.org/tmview/`). Configuración obligatoria: territorios **ES + EM + WO**; estados **Registrada + Solicitada + Expirada** (filtrar solo "Registrada" es el error clásico: una solicitud pendiente ya bloquea); clases **9, 16, 28, 41**.

| # | Término | Tipo | Qué decide |
|:-:|---|---|---|
| 1 | `sospechario` | exacta | **Cualquier resultado vivo en 9/28/41 elimina el candidato** |
| 2 | `sospech*` | comodín | Familia de la raíz: titular, clase, estado |
| 3 | `sospechosos` | exacta | Alcance de *Sospechosos Inusuales* (Lúdilo) |
| 4 | `culpabilia` | exacta | Suplente: si Sospechario cae, esta es la sustituta |
| 5 | `culpa*` | comodín, 9/16/41 | Alcance real de la familia "CULPA" de Prime Video / Mercedes Ron |
| 6 | `pistario` | exacta | Segunda suplente |
| 7 | `pist*` | comodín, 9/28/41 | Familia "PIST-" |
| 8 | `pictionary` | exacta | Titular, clases, estado y familia. Decide si Pistario es viable |
| 9 | `sabueso` | exacta, 9/16/28/41 | Marcas vivas sobre el término común |
| 10 | `sabuesos` | exacta, 41 | Estado de la marca de la serie de RTVE |
| 11 | `murdoku` | exacta, todas las clases | Estado registral en ES/EM/WO de la marca ajena principal |
| 12 | `murd*` | comodín, 9/16/28/41 | Familia del titular y marcas defensivas |
| 13 | `murdle` | exacta | Ídem para la segunda marca ajena |
| 14 | `cluedo` | exacta, 9/28/41 | Decide `/juegos-como-cluedo` |
| 15 | `wordle` | exacta, 9/41 | Decide `/juegos-diarios-como-wordle` |
| 16 | `sospechario` | exacta, **MX + AR + CL + CO** | Segunda pasada, mercados 2 a 5 |

**OEPM** (`https://consultas2.oepm.es/LocalizadorMarcas/` y `/ceo/`): términos 1, 2, 3, 4, 6, 9, 11, 13, en **modalidad marca y en modalidad nombre comercial**, clases 9/16/28/41.

**USPTO TSDR** (`https://tsdr.uspto.gov`): expediente **99677726**. Anotar titular, fecha de presentación, clases y estado. **Por qué importa y por qué no cambia la conclusión:** si esa solicitud es reciente, su titular tiene seis meses para presentar en la UE reivindicando prioridad, así que hay que **presumir protección en la UE aunque hoy no aparezca nada**. El dictamen L-07 se redacta con esa presunción; encontrar o no la marca solo cambia el tono del aviso de no afiliación, no la fórmula.

**Registro Mercantil Central** (`https://www.rmc.es`): `SOSPECHARIO`, `PISTARIO`, `CULPABILIA`.

**Cómo leer los resultados:** se aplica la tabla de criterio fijada antes del dato en `docs/legal/anterioridades-sospechario.md` §5.7. No se reinterpreta.

---

### 4.2 Expediente de la OEPM (L-11): qué se pide y cuánto cuesta

**Riesgo si no se hace:** alto. **Norma:** Ley 17/2001 de Marcas; Reglamento (UE) 2017/1001 (RMUE); Convenio de París art. 4.

**Signo.** Presentar **denominativa** ("SOSPECHARIO") **y mixta** (wordmark + cabeza del basset) como dos solicitudes, o una sola mixta si el presupuesto aprieta. La mixta desactiva casi siempre la objeción de descriptividad del art. 5.1.c (riesgo real identificado en `anterioridades` §3.1); la denominativa protege mejor el nombre desnudo. **Opción segura:** las dos. **Opción aceptable:** solo la mixta, aceptando que el nombre desnudo queda menos protegido. **Lo que no se debe hacer:** presentar solo la denominativa si el examinador tiene margen para objetar descriptividad, y quedarse sin marca y sin tasa.

**Clases y redacción propuesta** (borrador para que lo afine el agente de PI; **no copiar el encabezamiento de clase**, que es el error que deja fuera lo que de verdad se vende):

- **Clase 9** — *Software de juegos informáticos descargable; aplicaciones descargables para teléfonos móviles y tabletas para jugar a juegos de lógica y deducción; publicaciones electrónicas descargables en materia de pasatiempos, juegos de lógica y misterio; archivos de imagen y de datos descargables en formato PDF con pasatiempos y juegos de deducción.*
- **Clase 41** — *Servicios de juegos prestados en línea a través de una red informática; suministro de juegos de lógica y de deducción en línea no descargables; publicación en línea de pasatiempos y de contenidos editoriales sobre juegos de lógica; servicios de entretenimiento consistentes en la publicación diaria de casos de deducción; servicios educativos consistentes en el suministro de material didáctico de lógica y razonamiento para centros de enseñanza; concesión de licencias de contenidos lúdicos a medios de comunicación para su publicación.*
- **Clase 16 — se recomienda incluirla ya.** *Libros, publicaciones impresas y material impreso en materia de pasatiempos y juegos de lógica; material didáctico impreso.* Motivo: `catalogo-productos.md` contempla `LIBRO-LICENCIA` y `PDF-AULA` para impresión. Y sobre todo, el art. 4 del Convenio de París: **la prioridad de seis meses solo cubre los productos que ya estaban en la solicitud española**. Añadirla ahora cuesta ≈96 €; descubrirlo en la EUIPO cuesta una clase sin prioridad.
- **Clase 28 — no ahora.** Solo si aparece producto físico de mesa. Es la que más colisiona con *Sospechosos Inusuales* y con Pictionary, y hoy no vendemos nada ahí.

**Presupuesto (confirmar la tasa vigente el día de la presentación; se actualizan):**

| Concepto | Importe aproximado |
|---|---:|
| OEPM, solicitud en línea, 1.ª clase | ≈148 € |
| OEPM, 2.ª clase | ≈96 € |
| OEPM, 3.ª clase (la 16) | ≈96 € |
| **Total 2 clases (9 + 41)** | **≈244 €** |
| **Total 3 clases (9 + 41 + 16)** | **≈340 €** |
| Segunda solicitud (denominativa + mixta por separado), 3 clases | +≈340 € |
| Honorarios de agente de PI, si se delega | 250-500 € |
| EUIPO fase 2, 3 clases (850 + 50 + 150) | ≈1.050 € |

**Cuándo presentar.** *Opción segura:* **W8**, antes del lanzamiento y antes de la nota de prensa. *Opción aceptable:* dentro de los cinco días hábiles siguientes al primer disparador de D-006, con el expediente ya redactado para que sea una sesión de 30 minutos. *Lo que no se debe hacer:* enviar la nota de prensa a diez medios con el expediente "redactado" y sin presentar. Redactado no protege nada; presentar sí, y desde ese instante.

---

### 4.3 Cookies y analítica sin consentimiento (L-16)

**Riesgo si se hace mal:** medio-alto (la AEPD sanciona banners de cookies con relativa frecuencia y es de lo más denunciado). **Norma:** art. 22.2 LSSI-CE; RGPD; *Guía sobre el uso de las cookies* de la AEPD.

La clave del art. 22.2 no es "cookies": es **almacenar información en el equipo del usuario o acceder a la que ya está almacenada**. `localStorage` cuenta. Por lo tanto:

| Qué | ¿Exento de consentimiento? | Por qué |
|---|---|---|
| `localStorage` del progreso del caso, racha y ajustes | **Sí** | Es el servicio que el usuario ha solicitado expresamente. Sin él no hay juego |
| Cookie de sesión del *magic link* | **Sí** | Autenticación solicitada por el usuario |
| Preferencia de tema y de sonido | **Sí** | Personalización de interfaz solicitada |
| Service worker de la PWA | **Sí** | Necesario para el servicio solicitado |
| Analítica de producto con identificador persistente en el dispositivo | **No, salvo que se configure para no almacenar nada** | Ver abajo |
| Anuncios y medición publicitaria (fase futura) | **No** | Consentimiento obligatorio, sin excepción |

**Opción segura, y es la que recomiendo: analítica sin almacenamiento en el dispositivo.** PostHog configurado con `persistence: 'memory'` (o su modo sin cookies), `disable_persistence`, sin `distinct_id` persistente, IP truncada, sin *session recording*, sin *autocapture* de contenido, sin identificación de usuarios anónimos, alojamiento en **PostHog Cloud EU (Fráncfort)**. Si no se escribe ni se lee nada en el terminal, **el art. 22.2 LSSI no entra**, y solo queda el RGPD, que se cubre con interés legítimo del art. 6.1.f documentado en el registro de actividades. Resultado: **medición de producto sin banner**, y sin la pérdida del 30-60 % de los datos que causa un banner.

Consecuencia aceptada, dicha en voz alta: sin identificador persistente **no hay retención D1/D7/D30 fiable a nivel de dispositivo anónimo**. Se resuelve por otra vía, no rompiendo la regla:
- usuarios con cuenta (magic link): identificador propio, base contractual, retención medible de verdad;
- usuarios anónimos: cohortes por evento del lado servidor y por el `localStorage` del propio juego, que **sí es exento**, exponiendo al análisis solo un identificador de juego seudónimo generado por nosotros para el funcionamiento del juego. Esto último es la parte que hay que confirmar: **[ABOGADO]**, porque reutilizar para analítica un identificador creado para el servicio es exactamente donde la exención se estira demasiado.

**Opción aceptable:** acogerse al criterio de medición de audiencia propia de la guía de la AEPD (primera parte, sin compartir datos, agregado, ámbito limitado a nuestro sitio), documentando por qué encaja. Es defendible, pero es un criterio interpretativo y no un puerto seguro: se registra como riesgo asumido.

**Lo que no se debe hacer:** banner con "Aceptar" destacado y "Rechazar" escondido; muros de cookies; cargar PostHog antes del consentimiento "porque es anónimo"; usar Google Analytics 4 (que sí escribe identificador y arrastra transferencia internacional) y llamarlo analítica esencial.

**Página `/legal/cookies` igualmente obligatoria**, aunque no haya banner: hay que informar de lo que se almacena, aunque esté exento.

---

### 4.4 Encargados y transferencias (L-18)

**Norma:** arts. 28, 30, 44-49 RGPD.

| Proveedor | Papel | Qué hay que verificar y guardar | Riesgo |
|---|---|---|---|
| **Supabase** | Encargado (base de datos, auth, funciones) | DPA aceptado; proyecto creado en **región de la UE** (Fráncfort o Irlanda), no en `us-east`; lista de subencargados; cifrado en reposo | Alto si el proyecto se crea en EE. UU. por defecto: rehacerlo después es migrar la base entera |
| **Vercel** | Encargado (alojamiento, funciones, logs) | DPA; **región de funciones y de logs en la UE**; SCC para la parte estadounidense; retención de logs configurada | Medio: Vercel es sociedad estadounidense; la transferencia existe aunque el cómputo sea europeo |
| **PostHog** | Encargado (analítica) | Cuenta en **Cloud EU**; DPA; configuración de L-16 verificada en el código, no en la intención | Medio |
| **Resend** | Encargado (correo transaccional y newsletter) | DPA; región de datos europea si la ofrece; retención de contenidos de correo; SCC | Medio |

Para cada uno: PDF del DPA con fecha, captura del panel donde se ve la región, y una fila en `docs/legal/encargados-tratamiento.md` con finalidad, datos tratados, subencargados y mecanismo de transferencia. **Opción segura:** los cuatro en región UE y DPA guardado antes del primer dato real. **Lo que no se debe hacer:** capturar los primeros 300 correos de la lista de espera en la W1-W2 con Resend sin DPA firmado, que es exactamente lo que va a pasar si esta tarea no se adelanta a la W3.

---

### 4.5 Menores (L-20)

**Norma:** art. 8 RGPD y **art. 7 LOPDGDD (14 años en España)**; art. 28 del Reglamento (UE) 2022/2065 (DSA) para plataformas en línea; políticas de las redes publicitarias.

Nueve reglas, convertibles en criterios de aceptación:

1. **Edad mínima para crear cuenta: 14 años.** Declaración de edad en el alta, no verificación intrusiva.
2. **El juego se puede jugar sin cuenta a cualquier edad.** No se pregunta la edad a quien solo juega: preguntarla sería recoger un dato que no necesitamos.
3. **La sección infantil (`/juegos-como-murdoku/para-ninos` el día 1, `JUNIOR-WEB` en fase 2) no tiene cuenta, ni correo, ni compartir en redes, ni anuncios, ni compra dentro.**
4. **Cero perfilado publicitario a menores**, sin excepción y aunque la red lo permita.
5. **La compra del pack Junior ocurre en una página para adultos**, con un texto que lo diga.
6. **La newsletter exige 14 años** y lo dice en la casilla.
7. **Los alias de duelos se filtran** (lista de términos y longitud máxima) y no se indexan: un alias puede ser un dato personal de un menor.
8. **Ningún contenido de la sección infantil tiene víctima**, en coherencia con la regla 5 de `contexto-proyecto.md`, y eso también es lo que sostiene el encaje con las políticas de las redes publicitarias.
9. **`/para-profesores` no recoge datos de alumnos.** El profesor compra e imprime; el alumno no entra en ningún sistema nuestro. Si algún día lo hiciera, cambiaría el marco entero (centro educativo como responsable, nosotros como encargado).

**Sobre el DSA:** mientras no haya contenido generado por usuarios difundido al público —y D-007 descarta el UGC durante 12 meses—, no somos "plataforma en línea" y no aplican las obligaciones de los arts. 20-28. Lo que sí conviene tener desde el día 1 porque cuesta cero: **punto de contacto único publicado** y un procedimiento de retirada de contenido. **[ABOGADO]** para confirmar la calificación cuando existan duelos con alias visibles.

---

### 4.6 Compromiso de anulación y erratas (L-21)

**Riesgo:** medio. **Norma:** arts. 5 y 7 de la Ley 3/1991 de Competencia Desleal (engaño por acción y por omisión); arts. 19-27 TRLGDCU (prácticas comerciales desleales con consumidores). Un compromiso público es exigible: si se promete y no se cumple, es engaño.

**Texto público propuesto para `/erratas` y `/una-sola-solucion`:**

> **Qué hacemos si un caso sale mal.** Un caso con un fallo **se anula, no se sustituye**: nadie juega un contenido distinto bajo el mismo número. Revisamos los avisos dos veces al día, y cuando tres personas señalan la misma pista salta una alerta automática. **Nuestro compromiso es anular en menos de 12 horas desde ese tercer aviso coincidente.** Un caso anulado no cuenta para la racha ni para las estadísticas de nadie: el día se concede a todo el mundo, lo hubiera resuelto o no. Publicamos aquí todas las erratas, con fecha, caso afectado y qué hicimos.

Tres precisiones que hay que respetar en el texto y que son la diferencia entre un compromiso cumplible y uno incumplible:

- **"Menos de 12 horas desde el tercer aviso coincidente"**, nunca "en minutos" ni "de inmediato". No hay guardia nocturna y no la va a haber (`propuesta-mejoras-producto.md` PR2).
- **Horas naturales, no laborables**, y decirlo. Si se quiere el matiz de festivos, se escribe; no se deja a la interpretación.
- **No prometer compensación económica.** El día concedido es la reparación; no hay derecho a devolución porque el caso del día es gratuito. Para Premium, la reparación se regula en `condiciones-premium.md` y sigue sin ser dineraria salvo interrupción prolongada del servicio.

**Lo que no se debe hacer:** publicar el compromiso y no publicar las erratas. Una página de erratas vacía tres meses después de la primera anulación es peor que no tenerla.

---

### 4.7 Licencia de contenido de packs y aula (L-22)

**Norma:** Texto Refundido de la Ley de Propiedad Intelectual (RDL 1/1996), arts. 17, 43, 45.

Punto de partida que conviene tener claro y decir en público sin miedo: **las mecánicas y las reglas de juego no se protegen por derecho de autor; la expresión sí.** Lo protegible nuestro son los textos de los casos, los personajes, las ilustraciones, la maquetación y el diseño distintivo, no la idea de colocar sospechosos en una cuadrícula. Eso vale en las dos direcciones: nos protege y nos permite hacer lo que hacemos.

| Licencia | Qué permite | Qué no permite | Precio |
|---|---|---|---|
| **Personal** (`PDF-CEBO`, `PDF-CLASICO`, `PDF-JUNIOR`, `PDF-REGALO`) | Uso privado, imprimir las copias que necesite el comprador y su unidad familiar | Reventa, redistribución, subida a repositorios o grupos, uso en clase, uso comercial, obra derivada | incluido |
| **De aula** (`PDF-AULA`) | Un docente, sus grupos de un curso académico, hasta **35 copias impresas por caso**, proyección en el aula | Compartir el archivo con otros docentes, subirlo a un repositorio o a un aula virtual abierta a internet, uso por todo el centro, reventa | 14,99 € |
| **De centro** | Todos los docentes de **un** centro identificado, copias para sus alumnos, alojamiento en el aula virtual **cerrada** del centro | Redes de centros, editoriales, formación de pago a terceros, reventa | 39,99 € |

Cinco reglas que van en el pie de cada PDF y en la página de compra:

1. Nombre del titular, año y la frase "licencia personal / de aula / de centro, no transferible".
2. Marca de agua discreta con el nombre del comprador en `PDF-AULA` y `PDF-CENTRO`: es la única medida disuasoria que funciona y no molesta.
3. **Ningún pack contiene, cita ni enlaza contenido de terceros.** El texto de `/juegos-como-murdoku/para-imprimir` debe dejar inequívoco que los PDF son creación propia y que no facilitamos soluciones ni copias de libros ajenos (punto 6 de `arbol-web.md` §3.2).
4. Entrega por **enlace firmado con caducidad de 72 h y 5 descargas**, y aviso de que la caducidad no reduce la licencia: si el enlace expira, se reenvía.
5. **Venta a centro público:** puede activar obligaciones de contratación menor y de accesibilidad del material (RD 1112/2018 alcanza al sector público). Se ofrece factura, y el PDF debe tener al menos texto seleccionable y estructura de encabezados. **[ABOGADO]** ligero antes de la primera venta a un centro público.

---

### 4.8 Dictamen sobre accesibilidad y el EAA (L-23)

**Riesgo jurídico: bajo. Riesgo reputacional de decirlo mal: medio-alto.** **Norma:** Directiva (UE) 2019/882 (European Accessibility Act), art. 4.5; Ley 11/2023, aplicable desde el 28 de junio de 2025; RD 1112/2018 (solo sector público); Ley 3/1991 art. 5.

**Conclusión, que confirma el punto 27 de `propuesta-mejoras-producto.md` §8.2:** prestamos un servicio de comercio electrónico incluido en el ámbito material de la norma, pero **la exención de microempresas del art. 4.5 de la Directiva nos alcanza mientras seamos microempresa** (menos de 10 personas y volumen de negocio o balance no superior a 2 millones de euros). Hoy lo somos con enorme margen. Por lo tanto: **la accesibilidad de teclado del tablero se hace porque se ha decidido hacerla —requisito B2B y compromiso de producto—, no porque nos obligue la ley.**

Tres advertencias que van con la conclusión:

1. **La exención se evapora con el crecimiento**, y con un cliente B2B mediano llega antes: los medios sí están obligados y trasladarán el requisito por contrato. Construirlo ahora es más barato que retrofitearlo.
2. **No citar el EAA ni la Ley 11/2023 en ningún texto público.** Decir "cumplimos el European Accessibility Act" cuando estamos exentos y no hemos auditado nada es una afirmación no verificable sobre una característica del servicio: art. 5 LCD, acto de engaño. Es el tipo de frase que un competidor recorta y envía.
3. **Tampoco decir "accesible" a secas.** Se describe lo que de verdad está hecho.

**Frase aprobada para publicar:**

> Sospechario se puede jugar entero con el teclado, respeta los ajustes de contraste alto del sistema y el compartir lleva texto alternativo legible. No hemos pasado una auditoría externa de accesibilidad; si algo no te funciona, escríbenos y lo arreglamos.

**Frases prohibidas:** "cumple el EAA", "cumple la Ley 11/2023", "conforme a WCAG 2.2 AA" (sin auditoría), "totalmente accesible", "certificado de accesibilidad".

**Opción aceptable si algún día se quiere el argumento fuerte:** auditoría externa (600-1.500 €) y declaración de conformidad parcial honesta, con la lista de lo que no cumple. Entonces sí se puede citar la norma.

---

### 4.9 Compartir, ficha técnica y comparativas frente a la Ley de Competencia Desleal (L-24)

**Riesgo: alto.** **Norma:** Ley 3/1991, arts. 5 (engaño), 6 (confusión), 10 (comparación), 12 (explotación de la reputación ajena), 20-27 (prácticas con consumidores); Directiva 2006/114/CE; TRLGDCU arts. 19-27.

**Regla base para la comparación (art. 10):** solo es lícita si compara productos que satisfacen la misma necesidad, sobre características **objetivas, pertinentes, verificables y representativas**, sin denigrar, sin generar confusión, sin aprovecharse indebidamente de la reputación ajena y **sin presentar nuestro producto como una imitación** del otro. Los cinco requisitos son acumulativos: fallar uno convierte toda la landing en publicidad ilícita.

Afirmaciones de la ficha técnica y del argumentario, revisadas una por una:

| Afirmación | ¿Verificable? | Veredicto | Redacción aprobada |
|---|---|---|---|
| "Solución única garantizada" | Sí, por el solver, con parada en 2 | **Aceptable con matiz** | "Cada caso publicado pasa por el solver, que comprueba que hay exactamente una solución. Si alguna vez falla, lo anulamos y lo publicamos en `/erratas`" |
| "Se resuelve sin adivinar" | Sí, escalera de técnicas humanas | **Aceptable** | Mantener, con enlace a la metodología |
| "Ninguna pista sobra" | Sí, si el motor lo comprueba | **Aceptable si el motor lo comprueba de verdad**; si no, se retira | — |
| "Firma humana: una persona resuelve cada caso antes de publicarlo" | Sí, con registro | **Aceptable solo para los casos diarios**, nunca para los generados bajo demanda de Premium | Delimitar por escrito qué casos llevan firma |
| "Certificado" / "certificado del solver" | No: sugiere certificación de un tercero | **Cambiar** | Uso interno sí; en público, "comprobación del motor" |
| Tiempo compartido del jugador | No hay identidad | **Ya resuelto** en el punto 33 de §8.2: etiquetar **"declarado"**, nunca "verificado" | — |
| "Gratis, sin registro y **sin anuncios**" (título de `/juegos-como-murdoku/gratis`) | Cierto hoy, falso el día que se activen los anuncios a 30.000 usuarios | **Riesgo real** | Escribir "hoy no hay anuncios" con fecha, o mantener la promesa como compromiso permanente para esa sección. **Decisión del fundador, y hay que tomarla antes de publicar el título** |
| "Nunca un anuncio para desbloquear una pista" | Es una regla nuestra | **Aceptable y recomendable**: es un compromiso que sí podemos cumplir siempre | Publicarlo como compromiso, no como descripción |
| "No existe versión oficial de Murdle en español" (meta de `/juegos-como-murdle`) | Comprobable, pero caduca | **Aceptable con fecha** | "No hay edición oficial de Murdle en español (comprobado el DD/MM/AAAA)" |
| "Esto es lo más parecido" | Superlativo no verificable y roza presentar el producto como sucedáneo | **Cambiar** | "Una alternativa en español, con nuestras propias reglas y nuestros propios casos" |
| Cifras ajenas (17 ediciones, 2,36/5, 63.000 descargas) | Sí | **Aceptable con medio y fecha**, como ya exige la regla GEO 3 | Guardar captura fechada de cada cifra en `docs/legal/pruebas-comparativa/` |

**Textos de compartir.** Sin marca ajena, sin comparación, sin cifra ajena, sin spoiler. La imagen 9:16 y la OG no pueden contener el signo ajeno ni la tipografía ajena (§3.3 del árbol). El texto de compartir es el único activo que circula fuera de nuestro control: si lleva una comparación, la comparación viaja sin el marco que la hace lícita.

**Regla de prueba, que es lo que convierte todo esto en defendible:** cada cifra ajena publicada tiene su captura fechada en el repositorio el día en que se publica. Sin el archivo de pruebas, la comparativa honesta es indistinguible de una suposición.

---

### 4.10 Las nueve landings, veredicto preliminar (lo formaliza L-07)

Preliminar, sujeto a L-03. Riesgo por página y cambio exigido:

| Landing | Título propuesto en el árbol | Riesgo | Veredicto preliminar |
|---|---|:-:|---|
| `/juegos-como-murdoku` | "Juegos como Murdoku: qué son y dónde jugar uno hoy" | Bajo | **Publicar.** Marco comparativo correcto |
| `/juegos-como-murdoku/online` | "Juegos como Murdoku online y gratis: el caso de hoy" | Bajo | **Publicar** |
| `/juegos-como-murdoku/en-espanol` | "**¿Buscas un Murdoku en español?** Juega un caso de hoy" | **Medio** | **Cambiar antes de publicar.** "Un Murdoku" sustantiva la marca ajena, que es justo lo que prohíbe la regla GEO 2 del propio árbol, y ayuda al titular a sostener dos cosas que no nos convienen: que presentamos nuestro producto como una imitación (art. 10.e LCD) y que nos aprovechamos de su reputación (art. 12). Redacción: **"¿Buscas un juego como Murdoku en español?"** |
| `/juegos-como-murdoku/gratis` | "Juegos como Murdoku gratis, sin registro y sin anuncios" | **Medio** | **Publicar solo tras decidir la promesa de anuncios** (§4.9) |
| `/juegos-como-murdoku/sin-descargar` | "Jugar sin descargar nada: instálalo en dos toques" | Bajo | **Publicar.** Sin marca ajena en el título; la comparativa de apps de tienda, con nota y fecha |
| `/juegos-como-murdoku/como-se-juega` | "**Cómo se juega a un Murdoku**: reglas en 6 pasos y ejemplo" | **Medio** | **Cambiar.** Misma sustantivación. Redacción: **"Cómo se juega a un caso de deducción como los de Murdoku: reglas en 6 pasos"** |
| `/juegos-como-murdoku/para-imprimir` | "Casos de deducción para imprimir en PDF, propios" | Bajo | **Publicar**, con el aviso en la primera línea de que no publicamos ni facilitamos soluciones de libros de terceros |
| `/juegos-como-murdoku/para-ninos` | "Casos de deducción para niños: desde 8 años, sin víctima" | Bajo | **Publicar**, sujeto a las nueve reglas de §4.5 |
| `/juegos-como-murdle` | "¿Juegos como Murdle en español? Un expediente cada jueves" | Bajo-medio | **Publicar con la meta corregida** ("lo más parecido" → alternativa; fecha en la afirmación de que no hay edición oficial) |

**Bloqueadas, y siguen bloqueadas:** `/juegos-como-cluedo` (Hasbro, historial activo de defensa) y `/juegos-diarios-como-wordle` (The New York Times, que ha actuado contra clones). La intención se cubre con `/juegos-de-detectives` y `/juegos-diarios`, que además son categoría propia y no dependen de nadie. Mencionar Cluedo o Wordle **dentro** de un listado editorial en `/juegos-diarios` sí es admisible: lo que no es admisible es una landing dedicada con la marca en el slug.

**Corrección menor al árbol.** §2 dice que se registran los slugs `/murdoku-online` y similares "para que no los ocupe un tercero". Nadie puede ocupar una ruta de nuestro propio dominio; la razón real y suficiente es absorber enlaces entrantes. Se mantienen como 301, con tres condiciones: no se enlazan desde el sitio, no entran en el sitemap y no se anuncian.

**Google Ads: criterio previo por escrito, que es este.** *Riesgo: medio-alto.* Comprar "murdoku" como **palabra clave** es lícito en la UE con la jurisprudencia del TJUE (*Google France* C-236/08 a C-238/08; *Interflora* C-323/09) **siempre que el anuncio permita a un internauta normalmente informado saber sin esfuerzo que el producto no procede del titular de la marca ni de una empresa vinculada**. Traducido a reglas operativas: (a) la marca ajena **nunca** en el título ni en la URL visible del anuncio; (b) el anuncio dice "Sospechario" y "juego independiente"; (c) la landing de destino es una de las de `/juegos-como-*` ya aprobadas; (d) nada de dynamic keyword insertion, que mete la marca ajena en el título automáticamente y tira abajo toda la construcción. *Lo que no se debe hacer:* pujar por la marca ajena con el anuncio que diga "Murdoku online gratis". Nota práctica: `arbol-web-final.md` §9.3 avisa de que **no hay un solo dato de CPC en el repositorio**, así que esta conversación no debería abrirse todavía por motivos de negocio, antes incluso que por los jurídicos.

---

## 5. Compuertas

| id | Compuerta | Qué debe cumplirse | Cuándo se comprueba | Si no se cumple |
|---|---|---|---|---|
| **CL-1** | **Nombre limpio** | L-01 a L-04 ejecutadas y sin marca idéntica viva en clases 9/28/41 en ES, EM o WO | **viernes W1** | No se compra dominio, no se anuncia el nombre, se activa Culpabilia y se repite L-01 con sus términos |
| **CL-2** | **Luz verde de marca ajena** | `docs/legal/uso-marcas-ajenas.md` firmado, con veredicto por landing y textos de aviso | **viernes W2** | `periodista-contenidos` no escribe ningún brief de `/juegos-como-*`. Se adelanta la redacción de las 5 páginas de categoría propia, que no dependen de esto |
| **CL-3** | **Datos personales con red debajo** | Los cuatro DPA aceptados, regiones UE verificadas, política de privacidad en borrador y consentimiento de newsletter especificado | **viernes W3** | Se para la captura de correos de la lista de espera hasta que esté |
| **CL-4** | **Marca presentada** | Resguardo de la OEPM con número de expediente | **viernes W8** | El lanzamiento sigue; **la nota de prensa de W10 no sale** hasta que haya resguardo |
| **CL-5** | **Legales publicados** | Las 5 URL responden 200, están en el pie y enlazadas desde las 9 landings; cookies verificado contra el sitio real | **viernes W8** | No hay lanzamiento público. Es la única compuerta de este plan que detiene el lanzamiento |
| **CL-6** | **Cobro con marco** | `condiciones-premium.md` cerrado, MoR elegido y contratado, casilla de renuncia al desistimiento implementada | Antes del primer euro cobrado (`PDF-CLASICO`, mes 3) | No se activa la pasarela. Vender sin esto es la vía más rápida a una reclamación de consumo |
| **CL-7** | **Contrato antes de la conversación** | `contrato-b2b.md` con SLA y cláusula de anulación, revisado | **viernes W19** | La conversación B2B de W20 se tiene igual (es una conversación), pero **no se firma ni se envía propuesta** hasta tener el contrato |

---

## 6. Lo que el área necesita de otras áreas, y cuándo

| Necesito | De quién | Cuándo | Sin eso, qué se para |
|---|---|---|---|
| Decisión de forma jurídica (persona física o S.L.) y datos de identificación | **fundador** | W1 | Aviso legal, facturación, alta en MoR |
| Resultado de D-004 (nombre definitivo) | `director-producto` + fundador | W2 | Expediente OEPM, dominios, títulos |
| Logotipo cerrado y contrato con quien lo dibuje | `disenador-ux-ui` + fundador | W6 | Solicitud mixta de marca y titularidad de la mascota |
| Inventario real de lo que el sitio almacena en el navegador (cookies, `localStorage`, service worker, terceros) | `desarrollador-frontend` | W5 | Política de cookies verificable; no acepto un inventario teórico |
| Confirmación de que PostHog está configurado sin persistencia y en Cloud EU | `desarrollador-frontend` + `analista-datos` | W6 | La decisión de analítica sin consentimiento |
| Lista definitiva de eventos y de datos que se envían a PostHog | `analista-datos` | W5 | Registro de actividades y evaluación de interés legítimo |
| Diagrama de datos personales por tabla en Supabase, con plazos de conservación | `desarrollador-backend` | W5 | Registro de actividades y derecho de supresión con borrado encadenado |
| Textos de la ficha técnica, del compartir y de la tabla comparativa, en versión final | `periodista-contenidos` | W6 | L-24; no reviso borradores que van a cambiar |
| Capturas fechadas de cada cifra ajena que se vaya a publicar | `estratega-growth-seo` | W6 | La comparativa honesta no es defendible sin prueba |
| Confirmación de que el motor comprueba de verdad "ninguna pista sobra" | `ingeniero-motor-puzzles` | W6 | Se retira esa afirmación del argumentario |
| Precio, mezcla de planes y mecánica de renovación cerrados | `estratega-negocio` | W13 | Condiciones de Premium |
| Nombre del primer medio B2B y qué se le va a ofrecer | `estratega-negocio` | W17 | Contrato B2B |

---

## 7. Post-lanzamiento, en detalle

### 7.1 Registro de marca: los dos escalones que quedan

**Escalón 2 (OEPM), adelantado a W8.** Ya justificado en §0 y §4.2. El argumento que cierra la discusión: 340 € es menos que el coste de una sola semana de ficha retirada en una tienda de aplicaciones, y muchísimo menos que los 1.000-2.000 € de tasa más 12-24 meses de una acción de nulidad por mala fe que, con una ventana de mercado de 6-12 meses, llega tarde por definición.

**Escalón 3 (EUIPO), W21-W22.** Se presenta **reivindicando expresamente la prioridad** de la solicitud española (art. 4 del Convenio de París, art. 34 RMUE). Cuatro condiciones que no se subsanan y que hay que cumplir con precisión:

1. **Seis meses improrrogables** desde el día de presentación en la OEPM. Con la OEPM en W8 (30 oct 2026), la ventana europea llega hasta el **30 de abril de 2027**. Holgado.
2. **Hay que marcar la casilla** e identificar país, fecha y número. Si no se marca, no existe.
3. **Mismo signo.** Si el logotipo se rediseña entre medias y se presenta otra versión, la prioridad puede decaer.
4. **Mismos productos, o un subconjunto.** No se puede ampliar. De ahí la recomendación de meter la clase 16 ya en la OEPM.

### 7.2 Condiciones de Premium (L-34): los doce puntos obligatorios

**Norma:** TRLGDCU (RDL 1/2007), arts. 60, 62.3, 97, 98, 103.m; Directiva 2011/83/UE; Directiva (UE) 2019/2161 (Omnibus); LSSI art. 27.

1. **Información precontractual completa antes del botón de pago**: características, precio total con IVA, duración, condiciones de renovación y de resolución.
2. **Botón de pago etiquetado con obligación de pago** ("Suscribirse y pagar", no "Continuar").
3. **Derecho de desistimiento de 14 días naturales**, con formulario de desistimiento accesible.
4. **Excepción para contenido digital (art. 103.m)**: solo se pierde el derecho si el usuario **consiente expresamente** el inicio inmediato de la ejecución **y reconoce que pierde el derecho**. Son **dos casillas separadas y ninguna premarcada**, y hay que guardar la prueba. Sin las dos casillas, el desistimiento sigue vivo 14 días y hay que devolver el dinero.
5. **Renovación automática informada**: se dice en la contratación y se recuerda por correo **7 días antes** en el caso del precio fundador (14,99 € → 19,99 €), como ya prevé el catálogo. Mantener ese recordatorio para todos los planes anuales, sea o no obligatorio: es barato y desactiva la mitad de las reclamaciones.
6. **Cancelación tan fácil como el alta**: un clic desde la cuenta, sin llamada, sin correo, sin formulario de retención con fricción (art. 62.3, prohibición de obstáculos). La pausa por inactividad solo puede ofrecerse **dentro** del flujo de cancelación, nunca aplicarse automáticamente (punto 32 de §8.2 de la propuesta).
7. **Precios siempre con IVA incluido** en toda comunicación al consumidor.
8. **Omnibus**: si se anuncia una reducción de precio, hay que indicar el precio anterior más bajo de los 30 días previos. El "44 % de descuento" del anual frente al mensual **no es una reducción de precio** sino una comparación entre dos planes: se puede decir, pero es más limpio expresarlo como "equivale a 1,67 €/mes".
9. **Reembolsos**: plazo de 14 días desde el desistimiento, por el mismo medio de pago.
10. **Qué pasa con las ventajas al cancelar**: se disfrutan hasta el fin del periodo pagado. Decirlo.
11. **Interrupciones y anulaciones**: para el suscriptor, la anulación de un caso no genera derecho a devolución (el caso del día es gratuito); una interrupción prolongada del servicio de pago, sí. Fijar el umbral por escrito.
12. **Precio distinto en app nativa** (3,99 €/mes en tienda frente a 2,99 € en web): es lícito y hay que **decirlo con claridad** en ambos sitios. Reglas de enlace externo de App Store y Google Play: revisar en su momento, cambian rápido.

### 7.3 Merchant of record (L-35)

**Por qué un MoR simplifica.** En la venta de servicios digitales a consumidores de la UE, el IVA se devenga en el país del consumidor. Vendiendo directo hay que darse de alta en la ventanilla única (OSS: modelo 035 de alta y 369 de declaración trimestral), aplicar 27 tipos distintos y conservar dos pruebas de localización por venta. Un merchant of record (Paddle, Lemon Squeezy) **es el vendedor frente al consumidor** y asume ese IVA. Coste: ≈5 % + 0,45 € por transacción, que en un ticket de 2,99 € es una comisión efectiva del ~20 % (D-008).

**Tres obligaciones que el MoR no hace desaparecer, y que casi todo el mundo pasa por alto:**

1. **Nuestra factura al MoR** sigue existiendo: es una prestación de servicios a una sociedad establecida fuera de España, lo que normalmente exige alta en el **Registro de Operadores Intracomunitarios** (modelo 036) y modelo 349 si el MoR está en la UE, u otro tratamiento si está fuera. **[GESTOR/ABOGADO]**, es media hora y evita un susto.
2. **La información precontractual y la política de privacidad del juego siguen siendo nuestras.** El MoR cubre el checkout, no la página de precios.
3. **El desistimiento lo gestiona el MoR, pero el usuario nos lo va a pedir a nosotros.** Hay que tener el circuito montado y contestar en plazo.

**Decisión:** Lemon Squeezy documenta precio libre nativo (necesario para la prueba de disposición a pagar del punto 25 de §8.2) pero su continuidad tras la adquisición por Stripe está sin confirmar; Paddle es más sólido para suscripciones. **Opción segura:** Paddle para `PREMIUM`, y para el experimento de precio libre de `PDF-CLASICO` se comprueba antes que la pasarela elegida lo soporta de verdad. **Lo que no se debe hacer:** montar Stripe directo sin alta en OSS "porque son cuatro ventas".

### 7.4 Contrato B2B con SLA (L-37)

Cláusulas que no pueden faltar, en orden de lo que más duele si falta:

1. **Licencia de uso no exclusiva y revocable** sobre el caso diario y el widget. **No se cede la propiedad intelectual** del motor ni de los casos (`catalogo-productos.md`, `B2B-MARCABLANCA`).
2. **SLA de publicación diaria** a las 00:00 y soporte en 24 h laborables, con la definición exacta de "disponible" y el método de medida.
3. **Cláusula de anulación con aviso y sin crédito económico** (punto 21 de §8.2): si un caso se anula, sale del feed con aviso el mismo día y eso **no** genera derecho a descuento ni a devolución. Sin esta cláusula, nuestra propia política de calidad se convierte en una obligación de pago.
4. **Marca**: el cliente usa nuestra marca solo para identificar el origen del juego, en la forma que fijemos; nosotros podemos citarlo como cliente salvo pacto en contrario.
5. **Protección de datos**: definir si somos encargado (analítica del widget por cuenta del medio) o responsables independientes. En marca blanca, con feed JSON y sin datos de usuario, normalmente ni siquiera hay tratamiento por nuestra parte: conviene declararlo.
6. **Exclusividad** solo con sobreprecio del 60 % y con ámbito y plazo delimitados.
7. **Duración, prórroga, preaviso de resolución, precio y revisión**, y **ley española y fuero** que se pueda pactar (en B2B sí se puede).
8. **Limitación de responsabilidad** con tope en lo pagado en los 12 meses anteriores, excluida la culpa grave.

### 7.5 Protocolo de Madrid (L-39)

Se ejecuta **solo con negocio real** en el país, nunca por si acaso. Base: el registro español o el europeo. Dato que cambia el plan de LatAm y que conviene tener claro desde ahora: **Argentina no es parte del Protocolo de Madrid**, así que el segundo mercado del plan exige **solicitud nacional ante el INPI**, con agente local. México, Chile y Colombia sí son parte y se pueden designar desde una única solicitud internacional. Orden recomendado: MX (donde además está *El Sabueso* de Grupo Animal y donde el nombre de la mascota es el punto sensible), luego AR por vía nacional, luego CL y CO. Coste orientativo: tasa base ≈653 CHF (marca en blanco y negro) más tasas por designación, y honorarios; entre 1.500 y 2.500 € para tres países.

---

## 8. Lo que exige abogado colegiado, con coste estimado

Ordenado por relación entre lo que evita y lo que cuesta. La columna "si no se contrata" dice el riesgo que se acepta, para que la decisión sea consciente y quede escrita.

| # | Punto | Quién | Coste | Cuándo | Si no se contrata |
|---:|---|---|---|---|---|
| 1 | **Validación de la lectura de L-01/L-02** e informe de anterioridades | Agente de la propiedad industrial | **150-400 €** | W2 | Se lanza sobre un nombre que puede estar registrado por un tercero. Es el punto crítico y el más barato |
| 2 | **Redacción de la lista de productos y servicios** de las clases 9, 41 y 16, y presentación | Agente de la PI | **250-500 €** + tasas | W3-W8 | Riesgo de proteger mal justo lo que se vende. Un copiado del encabezamiento de clase deja fuera la licencia B2B |
| 3 | **Dictamen sobre el uso de marca ajena en las 9 landings** y en los títulos | Abogado de competencia desleal / PI | **400-900 €** | W2 | Es el bloqueante del día 1 y la apuesta de adquisición entera del proyecto (75 % del volumen atacado el día 1). Mi dictamen L-07 reduce el riesgo; no lo elimina |
| 4 | **Términos, privacidad, cookies y aviso legal** revisados | Abogado de digital / protección de datos | **600-1.200 €** | W7 | Riesgo de sanción de la AEPD y de cláusulas abusivas. Es el paquete que más se abarata contratándolo junto |
| 5 | **Condiciones de Premium y venta de packs** (desistimiento, renovación, cancelación, Omnibus) | Abogado de consumo | **400-800 €** | W14 | Es donde están las sanciones de consumo y las reclamaciones en masa |
| 6 | **Contrato B2B con SLA** y cláusula de anulación | Abogado mercantil | **600-1.500 €** | W19 | Un SLA sin la cláusula de anulación convierte cada errata en una obligación de devolución |
| 7 | **Cesión de derechos del ilustrador** y titularidad de lo generado con IA | Abogado de PI | **150-300 €** (contrato); el dictamen sobre IA, **300-600 €** | W7 | Sin contrato escrito, la mascota no es del proyecto (arts. 43 y 45 TRLPI). La parte de IA en la UE no es pacífica |
| 8 | **Analítica sin consentimiento**: confirmación del encaje del identificador de juego reutilizado para analítica | Abogado de protección de datos | **200-400 €** (o incluido en el punto 4) | W5 | Se cae a la opción de banner, con pérdida del 30-60 % de los datos |
| 9 | **Alta fiscal, OSS o MoR, y factura al MoR** | Gestor o asesor fiscal | **150-300 €** puntual, o cuota mensual | W13 | Alta probabilidad de error formal con la Agencia Tributaria; barato de evitar |
| 10 | **Dictamen sobre accesibilidad y EAA** | Abogado de digital | **300-600 €** (o incluido en el punto 4) | W6 | Mi dictamen L-23 es claro y el riesgo es bajo. Es el más prescindible de la lista |
| 11 | **EUIPO con prioridad** | Agente de la PI | **400-800 €** + 1.050 € de tasas | W21 | Se puede presentar sin agente; el riesgo es perder la prioridad por un error de formulario |
| 12 | **Auditoría externa de accesibilidad** (solo si se quiere el argumento público) | Consultora | 600-1.500 € | Fase 3 | No se puede citar ninguna norma de accesibilidad en público. No pasa nada |

**Paquete mínimo antes de lanzar (puntos 1, 3 y 4): 1.150-2.500 €.**
**Paquete recomendado antes de lanzar (1, 2, 3, 4, 7): 1.550-3.300 €** más las tasas de la OEPM.
**Total hasta el mes 6, con Premium y B2B (todos menos el 12): 3.700-8.100 €** más tasas.

Mi recomendación, si hay que elegir con un presupuesto de 1.500 €: **puntos 1, 3 y la parte de privacidad-cookies del 4**, en ese orden. El 1 porque un nombre secuestrado se lleva el proyecto por delante; el 3 porque las nueve landings son el 75 % de la adquisición del día 1 y son el uso más expuesto que hace este proyecto de algo ajeno; y el 4 porque la AEPD es el regulador que efectivamente actúa contra proyectos de este tamaño.

---

## 9. Horas del fundador, por semana

| Semana | Horas | En qué |
|---|---:|---|
| W1 | **5,5** | TMview, OEPM, EUIPO/USPTO, RMC, vigilancia, dominios, datos de identificación |
| W2 | **2,5** | Cierre de D-004, lectura y aprobación del dictamen de marca ajena, revisión del expediente OEPM |
| W3 | **2,5** | Los cuatro DPA y verificación de regiones, decisión sobre abogado y presupuesto |
| W4 | **0,5** | Revisión de aviso legal y términos |
| W5 | **0,5** | Revisión de privacidad y cookies |
| W6 | **1,0** | Menores, accesibilidad, textos de compartir y ficha técnica |
| W7 | **1,0** | Firma del contrato del ilustrador, revisión de la beta |
| W8 | **1,5** | **Presentación en la OEPM** y verificación de los cinco legales |
| W9 | **0,5** | Wayback, capturas fechadas, publicación |
| W10 | **0,25** | Comprobación previa a la nota de prensa |
| W13-W16 | **1,5** | Merchant of record y condiciones de Premium |
| W19-W21 | **2,0** | Contrato B2B y solicitud EUIPO |
| Mensual, desde W10 | **0,25** | Vigilancia de marca |

**Total hasta el lanzamiento: ≈15,5 h.** Menos de dos jornadas repartidas en nueve semanas, y **más de un tercio se concentra en la W1**, que es donde tiene que estar.

---

## 10. Riesgos aceptados, por escrito

1. **Ventana sin registro entre el día 1 y la presentación en la OEPM.** Mitigada al mínimo posible al adelantar la presentación a W8 (antes del lanzamiento). Si el fundador prefiere mantener D-006 tal cual y esperar al disparador, el riesgo pasa de residual a real durante las semanas 9 y 10, justo cuando la nota de prensa da visibilidad al nombre. Mitigaciones gratuitas activas: vigilancia de TMview (L-05) y prueba fechada de uso (L-29).
2. **Dictámenes emitidos por un agente, no por un colegiado.** Los puntos 1, 3 y 4 de §8 son los que convierten esto en un riesgo asumible.
3. **Analítica sin consentimiento por la vía del identificador de juego reutilizado.** Es la opción con mejor relación entre dato obtenido y riesgo, pero estira una exención. Si el punto 8 de §8 no se contrata, se documenta la decisión y se acepta que en una inspección habría que defenderla.
4. **La promesa "sin anuncios" del título de `/juegos-como-murdoku/gratis`** vive en tensión con la activación de `ADS` a los 30.000 usuarios. Hay que resolverla antes de publicar el título, no después.
5. **Sección infantil el día 1 sin la infraestructura de fase 2.** `/juegos-como-murdoku/para-ninos` se publica en W9; `JUNIOR-WEB` es fase 2. Las nueve reglas de §4.5 aplican desde el día 1 a la landing, no desde la fase 2.

---

*Cambios a este documento los registra `experto-legal` con fecha y motivo. Las decisiones que se deriven de él —adelanto de la presentación en la OEPM a W8, inclusión de la clase 16, analítica sin consentimiento, promesa de anuncios en `/gratis`, y los cambios de título de las dos landings de §4.10— las registra `director-producto` en `docs/decisiones.md`.*
