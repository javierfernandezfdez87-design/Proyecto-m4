# Plan de contenido narrativo (`guionista-misterio`)

Autor: `guionista-misterio`. Fecha: 2026-09-07.
Fuentes: `docs/roadmap/supuestos.md`, `docs/propuesta-jugabilidad.md` (Escena: confesión, "y sin embargo", Sabueso de dos niveles, portada del día, semana con carácter, viernes de disparate), `docs/propuesta-jugabilidad-expediente.md` (dossier, presupuesto de 120 palabras, motivo como segunda fase, reparto recurrente aplazado a fase 2 con NR-M1..4 y las correcciones §7.2), `content/ideas-jugabilidad-guionista.md`, `content/ideas-expediente-guionista.md`, `docs/diseno/ideas-expediente-disenador.md` (familias T1-T9), `docs/decisiones.md`, `docs/equipo-agentes.md`.

**Cómo leer este plan.** Sigo el formato de `supuestos.md` §"Formato del plan de área": id `C-xx`, tarea, entregable con ruta en el repo, días de agente, horas del fundador, dependencias, semana de inicio y fin, criterio de "hecho" y riesgo. Añado compuertas y una lista de lo que necesito de otras áreas. **No existe todavía** `docs/diseno/taxonomia-pistas.md`: donde el plan depende de un catálogo formal que aún no se ha escrito, lo digo explícitamente en vez de inventarlo.

**Qué doy por bueno de las dos propuestas de jugabilidad, sin repetirlo:** arquitectura B-jueves (Expediente solo el jueves al lanzamiento), semana con carácter de siete días + especiales mensuales, las tres firmas de Escena (interrogatorio, escalafón+reconstrucción, cuatro manos condicionado) y las tres de Expediente (tabla del comisario, contraprueba+escalafón, vis a vis condicionado), motivo en tres capas, reparto recurrente de 24 aplazado a fase 2 con las tres correcciones de la §7.2 del documento de Expediente (apellidos, vocabulario cozy, prohibición del "tú" en pistas numeradas), y la regla de que **la voz de personaje nunca entra en una pista numerada**.

---

## 1. Compuertas de contenido

Nada de lo que sigue se construye a ciegas ni se publica sin pasar su compuerta. Los umbrales están fijados aquí, antes de mirar ningún dato, siguiendo el mismo método que las dos propuestas de jugabilidad.

| Compuerta | Qué exige | Antes de qué | Si falla |
|---|---|---|---|
| **G1 · Biblia aprobada** | Tono, voz de Sabueso, glosario espacial narrativo y banco de nombres corregido (regla de apellidos) revisados por el fundador | Escribir la primera pista real o el primer prompt de generación en lote | Se itera sobre la biblia; nada se produce con una voz sin fijar |
| **G2 · Plantillas validadas ida y vuelta** | Cada plantilla de pista, por familia, se retraduce a su forma formal con el motor y coincide exactamente con el predicado original | Generar el primer caso completo | La plantilla se reescribe; no se "salva" con una nota al margen |
| **G3 · Prueba de nombres y apellidos superada** | Prueba 1 (nombres de técnica, ≥8/14 y ≥8/12 mapeables) y prueba 6(b) (≤3 tropiezos en 24 apellidos, seis personas de LatAm) | Fijar el catálogo definitivo del escalafón y el banco de nombres del reparto recurrente | Se renombra lo que falle y se repite; el escalafón puede salir con menos técnicas (8-10 en Escena, 8 en Expediente) antes que con nombres que no se entienden |
| **G4 · Banco pre-beta firmado** | ≥20 casos con validación de motor, QA de `revisor-calidad` y firma a ciegas del fundador, en verde | Abrir la beta cerrada (semana 7) | La beta se retrasa antes que abrirse con casos sin firmar; es una regla dura del proyecto (D-007, M5), no solo mía |
| **G5 · Compuerta 0 del motor en verde o repliegue aceptado** | Tasas de aceptación de MV (interrogatorio) y MT (tabla del comisario) medidas | Comprometer las plantillas de pregunta del miércoles y del jueves como definitivas | Se usan las plantillas del escalón de repliegue ya previsto en la propuesta de jugabilidad (menú más corto, o el miércoles sale "clásico") |
| **G6 · Reparto recurrente activable** | NR-M1..4 verificadas por la prueba del veterano (motor) + prueba 6(b) de apellidos + tabla `canon-soporta` completa | Publicar el primer caso con canon activo | El reparto sigue en modo "biblia sin activar": los nombres existen pero ningún caso los usa con secreto propio |

---

## 2. La producción de casos: cuánto, a qué ritmo, quién firma

### 2.1 El número

El plan del motor fija el objetivo en **120 casos para 17 semanas** de producción continua. Leído al derecho: si el ritmo diario de publicación es de un caso por día (7 a la semana, la cadencia del "caso del día"), **17 semanas de producción sostenida a 7 casos/semana dan 119 ≈ 120 casos**. No es una cifra de calendario de lanzamiento —el lanzamiento público sigue en la semana 9-10 según `supuestos.md`—, es la ventana de producción de contenido: **empieza en la semana 4** (en cuanto el generador (M2) y la escalera con certificado (M3) del motor existen y hay algo real que vestir, no antes) **y termina hacia la semana 20**, dejando el ritual diario cubierto desde antes de la beta hasta bien entrada la fase 2, con un colchón de 2-3 semanas de reserva en todo momento para que un fallo de QA o una reescritura de plantilla no ponga en riesgo la publicación de mañana.

| Fase | Semanas | Casos producidos | Qué cubre |
|---|---|---|---|
| **A · Piloto** | 3-4 (antes de que corra la ventana de 17) | 10-15, no todos publicables | Material de las pruebas 1-5 de `docs/propuesta-jugabilidad.md` §6 y de la Compuerta 0. Se reutiliza lo que pase QA |
| **B · Rampa a beta** | 4-7 | 4 semanas × 7 ≈ 28 (≈24 tras descartes de QA) | El archivo de 7 días previo a la beta + la semana de beta en vivo + reserva. Es el número que responde a "cuántos antes de la beta": **≈20-24 casos firmados** |
| **C · Rampa a lanzamiento** | 8-13 | 6 semanas × 7 = 42 | Primeras semanas de Expediente-jueves en vivo, colchón extra por ser la primera vez que el jueves "toca distinto" |
| **D · Crucero fase 2** | 14-20 | 7 semanas × 7 = 49 | Régimen estable: producir lo que se publica esa semana más el colchón, ni más ni menos |
| **Total ventana de 17 semanas (4-20)** | — | **28 + 42 + 49 = 119 ≈ 120** | Coincide con el objetivo del motor |

**Por qué no se produce más rápido aunque el cómputo no sea la restricción (D-009).** El cuello de botella deliberado es la firma humana del fundador y la capacidad de QA, no los agentes. Producir 120 casos en tres semanas y dejarlos en un cajón tiene dos costes: el humor de viernes y las referencias de temporada envejecen mal, y cualquier ajuste de plantilla que llegue de una prueba con personas (§6 de las dos propuestas de jugabilidad) obligaría a reescribir un banco ya cerrado. Un colchón de 2-3 semanas por delante del día de publicación es suficiente para no publicar nunca sin firma y lo bastante corto para poder corregir el rumbo.

### 2.2 El flujo, paso a paso

```
1. MOTOR genera un caso resuelto: solución, certificado paso a paso,
   pistas en forma formal, etiqueta de día/dificultad, semilla.
   → ingeniero-motor-puzzles

2. REDACCIÓN. guionista-misterio viste el caso: elige nombres del banco
   (regla de iniciales distintas + apellidos ya filtrados), escribe la
   sinopsis, redacta cada pista con la plantilla aprobada de su familia
   (§3), la confesión, el "y sin embargo" si aplica, el motivo si aplica.
   → guionista-misterio

3. VALIDACIÓN IDA Y VUELTA. El motor reparsea cada pista redactada a su
   forma formal y comprueba que coincide exactamente con el predicado
   original: ni de más, ni de menos, ni de otra forma. Si falla, vuelve
   al paso 2. Automático, sin intervención humana.
   → ingeniero-motor-puzzles (herramienta) + guionista-misterio (reescribe)

4. QA NARRATIVO. revisor-calidad juega el caso (a ciegas cuando puede)
   buscando doble lectura, nombre confuso, errata, tono fuera de cozy,
   presupuesto de palabras excedido (Expediente: ≤120/180/220 según
   tamaño), coherencia con la biblia (apellido en la lista negra, nombre
   canónico del objeto roto entre ficha/pista/confesión).
   → revisor-calidad

5. FIRMA A CIEGAS. El fundador resuelve el caso completo sin ayuda ni
   acceso previo a la solución, y solo entonces firma. Es la regla D-007
   (M5): ningún caso se publica sin firma humana ni se comunica como
   "generado por IA". Si no se resuelve sin adivinar, o si algo choca
   con el tono, rebota al paso 2 (narrativo) o a disenador-puzzles /
   ingeniero-motor-puzzles (si el problema es de lógica, no de texto).
   → Javier

6. PROGRAMACIÓN. Se asigna número de caso, fecha de publicación
   (medianoche local, D4/D-007), día de la semana con su carácter
   (calendario v2 de `docs/propuesta-jugabilidad.md` §2.4), y entra en
   la cola de publicación.
   → desarrollador-backend
```

### 2.3 Horas del fundador, por tipo de día

El tiempo de firma a ciegas no es arbitrario: es aproximadamente la duración objetivo de juego de ese día (§4 y §2.4 de las dos propuestas de jugabilidad) más un checklist de 6-8 puntos (tono, apellidos/lista negra, nombre canónico del objeto, presupuesto de palabras, ninguna doble lectura evidente, coherencia con la biblia).

| Día | Duración objetivo del jugador | Tiempo de firma del fundador |
|---|---|---|
| Lunes · El corto | 5-7 min | ~8 min |
| Martes · El clásico | 7-9 min | ~10 min |
| Miércoles · El interrogatorio | 8-12 min | ~13 min |
| Jueves · Expediente, la tabla del comisario | 8-11 min | ~14 min (incluye contraprueba y motivo) |
| Viernes · De disparate | 6-9 min | ~9 min |
| Sábado · El difícil | 10-14 min | ~16 min |
| Domingo · El XL | 15-25 min | ~24 min |
| **Semana completa (7 casos)** | — | **~94 min de resolución + ~15 min de checklist ≈ 1,8 h** |

Con el 10-15 % de casos que rebotan una vez desde QA o desde la propia firma, la media estable es **≈2 horas/semana**. Los picos son puntuales y están acotados en el plan semana a semana: la semana de beta (+0,5 h por el primer contacto real con jugadores externos), las semanas de prueba con personas (recruiting y lectura de resultados, +0,5-1 h, compartido con `director-producto`), y la semana de activación del reparto recurrente (+1 h, una sola vez, para revisar la tabla `canon-soporta` completa). **Nadie más firma un caso.** `revisor-calidad` hace QA técnico y narrativo antes, pero la firma que autoriza publicar es siempre del fundador, porque es la garantía humana que el proyecto promete no automatizar.

---

## 3. Plan semana a semana

### 3.1 Fundamentos (semanas 1-2)

| id | Tarea | Entregable | Días de agente | Horas del fundador | Dependencias | Semana | Criterio de "hecho" | Riesgo |
|---|---|---|---|---|---|---|---|---|
| **C-01** | Biblia narrativa v1: tono, voz de Sabueso, glosario espacial narrativo (fraseo aprobado para las relaciones que ya usan los ejemplos del director: adyacencia diagonal `ve()`, "más al norte/sur/este/oeste que", "entre", "en la misma planta"), escenarios recurrentes, banco de nombres con la regla de apellidos e iniciales, lista negra léxica (dobles sentidos regionales: coger, concha, pico, chucho...) | `content/biblia.md` | 1,5 | 1 (aprobar tono y voz de Sabueso) | Ninguna bloqueante; mejora si `disenador-puzzles` ya tiene el catálogo formal de predicados | 1-1 | El fundador aprueba tono y tres muestras de voz de Sabueso (niveles 1-3); el banco de nombres tiene ≥40 candidatos con apellidos pre-filtrados por la lista negra | El glosario espacial narrativo puede quedar corto si el catálogo formal de `disenador-puzzles` llega tarde; se marca "provisional" y se revisa en C-04 |
| **C-02** | Guía de estilo v1, compartida con `periodista-contenidos` y `creador-social`: español neutro de base España, léxico neutro (ordenador→portátil si hace falta), sin "vosotros", Fundéu/RAE como árbitros, disciplina "una pista, una lectura" explicada para no técnicos | `docs/guia-estilo.md` | 0,5 | 0 | C-01 | 1-2 | `periodista-contenidos` y `creador-social` confirman que pueden escribir con ella sin preguntar dos veces | Que cada área quiera una excepción distinta; se resuelve con un único documento y no con anexos por área |
| **C-03** | Nombres candidatos para las 14 técnicas del escalafón de Escena y las 12 de Expediente (co-entrega con `disenador-puzzles`) + preparación de la prueba 6(b) de apellidos (24 nombres del reparto recurrente, aunque su activación sea fase 2) | `docs/diseno/mecanica-expediente.md` (aportación) + lista de apellidos en `content/biblia.md` §banco de nombres | 1 | 0,5 (aprobar convocatoria de las pruebas con personas) | `disenador-puzzles` (catálogo de técnicas) | 1-2 | Material listo para la prueba 1 y la prueba 6(b) de `docs/propuesta-jugabilidad-expediente.md` §9.2 | Nombres que "suenan bien" en España y no viajan a Rosario/CDMX/Bogotá; por eso la prueba se hace antes de fijar nada, no después |

### 3.2 Plantillas y validación (semanas 2-4)

| id | Tarea | Entregable | Días de agente | Horas del fundador | Dependencias | Semana | Criterio de "hecho" | Riesgo |
|---|---|---|---|---|---|---|---|---|
| **C-04** | Plantillas de redacción de pistas de Escena: 3-5 redacciones aprobadas por familia (directa/fija, negativa, relacional de orden norte-sur-este-oeste, adyacencia diagonal `ve()`, entre/extremos, recuento, planta) con forma formal ↔ redacción | `content/plantillas-pistas.md` §Escena | 2 | 0,25 | **`disenador-puzzles`: catálogo formal de predicados de Escena** (no existe aún `docs/diseno/taxonomia-pistas.md`; si no llega a tiempo, se trabaja sobre los predicados ya usados en los ejemplos de `docs/propuesta-jugabilidad.md` y se revisa cuando llegue) | 2-3 | Cada familia tiene ≥3 redacciones que pasan la ida y vuelta con el motor cuando M1 (DSL) esté listo; ninguna admite una segunda lectura a ojo de `revisor-calidad` | Publicar antes de tener el DSL real: se marca "provisional, pendiente de validar contra motor" hasta que M1 exista |
| **C-05** | Prompts y filtros de generación asistida por IA en lote (nombres, ambientación, redacción de pistas a partir de la forma formal) con el filtro de calidad y seguridad (cozy, sin doble lectura, sin localismo, presupuesto de palabras) | `content/prompts-generacion-ia.md` | 1 | 0 | C-01, C-04 | 2-3 | Un lote de 10 casos de prueba generado con el prompt pasa QA sin reescritura manual más del 30 % de las veces (primera versión; se afina con datos reales) | Prompts que producen texto correcto pero sin carácter; se corrige iterando con ejemplos concretos, no con instrucciones más largas |
| **C-06** | Plantillas de portada del día, una por formato (los siete días con carácter + Expediente-jueves + especiales), con la regla de anunciar siempre la regla del día en la portada, nunca en un tutorial | `content/plantillas-portada.md` | 1 | 0 | C-01, calendario v2 de `disenador-puzzles` (`docs/propuesta-jugabilidad.md` §2.4) | 2-3 | Cada portada cabe en el presupuesto de cabecera (≤45 palabras en Expediente; equivalente en Escena) y un lector la entiende sin tutorial | Que la portada explique la mecánica en vez de anunciarla; se corrige con la prueba 3 de `docs/propuesta-jugabilidad-expediente.md` (el muro) |
| **C-07** | Documentar el pipeline motor→redacción→validación→QA→firma→programación (el de la §2.2) como procedimiento operativo, con los tiempos y responsables de cada paso | `docs/guia-estilo.md` §flujo de producción | 0,5 | 0 | C-01 a C-06 | 3-3 | `revisor-calidad` y `desarrollador-backend` confirman que el procedimiento es implementable en su cola de trabajo | Que el flujo quede en la cabeza del guionista y no en un documento; por eso se escribe ya, aunque cambie después |
| **C-08** | Banco piloto de 10-15 casos narrados sobre puzzles reales del motor (en cuanto M2/M3 den el primer lote), material de las pruebas 1-5 de `docs/propuesta-jugabilidad.md` §6 | `content/casos/piloto-01.md` … `piloto-15.md` | 2 | 1 (firma a ciegas de 8-10 de ellos) | `ingeniero-motor-puzzles` (M2 generador, M3 escalera+certificado) | 3-4 | Al menos 8 casos superan QA y firma; se reutilizan como banco 1-8 del ritual si pasan | Que el motor no esté listo a tiempo; el piloto se retrasa entero y arrastra la beta, por eso es la primera dependencia dura del plan |

### 3.3 Rampa hacia la beta (semanas 4-7)

| id | Tarea | Entregable | Días de agente | Horas del fundador | Dependencias | Semana | Criterio de "hecho" | Riesgo |
|---|---|---|---|---|---|---|---|---|
| **C-09** | Guion del tutorial de 60 segundos (Escena) + guion del vídeo de reglas del interrogatorio (miércoles), para `desarrollador-frontend` y `creador-social` | `content/tutorial-60s.md`, `content/videos-reglas.md` §Escena | 1 | 0,25 | C-06, flujos de `disenador-ux-ui` | 4-5 | El tutorial se lee en voz alta en ≤60 s reales; nadie de la prueba 3 de `docs/propuesta-jugabilidad.md` §6 dice "no lo entendí" | Un tutorial que explica de más y se convierte en un muro él mismo |
| **C-10** | Textos de confesión y "y sin embargo": plantillas + reglas duras (nombre canónico del objeto, ningún giro sobre una pista numerada, filtro de contenido seguro, versión suavizada por defecto en sección familiar) | `content/textos-confesion-giro.md` | 1 | 0,25 | C-01 | 3-4 | 5 pares de confesión/giro pasan el filtro cozy y el registro de decorados (M6 del motor, cuando exista) sin contradecir ninguna pista | Confesión que sube de registro sin darse cuenta (el caso ya documentado de "fui a buscar el cuchillo" cuando el objeto era un abrecartas); se corrige con la regla de nombre canónico |
| **C-11** | Microcopy de interfaz v1: botones, estados vacíos, errores, pantalla de resultado, compartir | `content/microcopy.md` | 1,5 | 0,5 | Flujos de `disenador-ux-ui`; taxonomía de eventos de `analista-datos` para nombrar estados correctamente | 4-5 | `desarrollador-frontend` integra sin pedir textos nuevos para los flujos ya definidos | Microcopy genérico que no suena a la marca; se revisa contra la guía de estilo (C-02) |
| **C-12** | Rampa de producción hacia la beta: 4 semanas de casos reales (Escena completa + primer jueves de Expediente en cuanto exista), ≈28 producidos, ≈20-24 tras QA y firma | `content/casos/0001.md` … | 4 (0,25-0,3/caso) | ~2 h/semana (según §2.3) | C-04, C-08, motor con M1+M2+M3 en verde | 4-7 | ≥20 casos firmados y en cola antes del primer día de beta; el archivo de 7 días está lleno el día que abre la beta | Que el motor no sostenga el ritmo (Compuerta 0 en rojo/ámbar para alguna familia); el repliegue ya está escrito en las dos propuestas de jugabilidad y no depende de mí |
| **C-13** | Catálogo cerrado de plantillas de pregunta para el menú vivo del miércoles (Escena): las ~16-84 plantillas parametrizadas con auditoría de degeneración ya señalada por el motor (`ve(A,B)` como diagonal, nunca "misma fila") | `content/plantillas-preguntas-interrogatorio.md` | 1 | 0 | Motor: definición corregida de `ve(A,B)` (bloqueante, ya señalado en `docs/propuesta-jugabilidad.md` §3.1) | 5-6 | El catálogo no contiene ninguna plantilla idénticamente falsa o verdadera; `ingeniero-motor-puzzles` la usa tal cual en el filtro MV | Escribir preguntas sobre un predicado que el motor todavía no ha corregido; se coordina antes de escribir, no después |
| **C-14** | Microcopy del escalafón (14 técnicas de Escena con nombre + frase de Sabueso, provisional hasta la prueba 1), de la racha (gracia, reparación) y del correo diario | `content/microcopy.md` §escalafón + §correo | 1 | 0,25 | C-03, resultado de la prueba 1 | 5-6 | Los nombres de técnica usados son los que superaron la prueba 1; si no ha llegado el resultado, se marca "borrador sujeto a cambio" | Publicar un nombre de técnica que la prueba 1 termine rechazando; por eso el criterio de hecho exige el resultado, no solo el borrador |
| **C-15** | QA narrativo + firma a ciegas del banco pre-beta (compuerta G4) | — (verificación, no crea archivo nuevo) | 0,5 | Incluido en C-12 | C-12, `revisor-calidad` | 6-7 | ≥20 casos en verde el día antes de que abra la beta (semana 7, 19-25 oct) | Descubrir en la última semana que faltan casos de un día concreto (p. ej. domingo XL); se mitiga repartiendo la producción por día de la semana desde el principio, no al final |

### 3.4 Expediente y rampa hacia el lanzamiento (semanas 4-10)

| id | Tarea | Entregable | Días de agente | Horas del fundador | Dependencias | Semana | Criterio de "hecho" | Riesgo |
|---|---|---|---|---|---|---|---|---|
| **C-16** | Plantillas de redacción para las nueve familias de pista de Expediente (T1 directa, T2 negativa, T3 negativa compuesta, T4 disyuntiva interna, T5 relacional/bisagra, T6 de atributo, T7 ordinal, T8 de recuento — forma corregida, nunca la idénticamente verdadera —, T9 condicional) + membretes de informe (catálogo cerrado de 4-5) | `content/plantillas-pistas.md` §Expediente | 2,5 | 0,5 | **`disenador-puzzles`: confirmación formal de las nueve familias T1-T9** (`docs/diseno/ideas-expediente-disenador.md`, ya leído para preparar este plan, pero la versión que use el motor debe congelarse con `ingeniero-motor-puzzles`) | 5-7 | Cada familia tiene 3-5 redacciones validadas ida y vuelta; T8 usa siempre "exactamente", nunca "al menos" | T5 (la bisagra) es la más delicada: una redacción ambigua rompe la promesa "es lo que separa un caso de una tabla" |
| **C-17** | Portada y microcopy del jueves ("el comisario ya rellenó parte del expediente..."), regla dura "el jueves nunca es una tabla vacía", cabecera dentro de 45 palabras | `content/plantillas-portada.md` §jueves + `content/microcopy.md` §comisario | 0,5 | 0,25 | C-06, C-16, motor con las tres regímenes de `givens` (informativo/entrañado/falso) | 6-7 | La cabecera de ejemplo cabe en 45 palabras contando la regla del día; `revisor-calidad` confirma que "todas las pistas son ciertas" queda claro y nadie lo confunde con el mentiroso (prueba 4 de la Expediente, X2) | Confundir el formato con "el testigo que miente", ya descartado; se vigila explícitamente en QA |
| **C-18** | Guion del tutorial del jueves (dispara solo la primera vez que el jugador llega a un jueves) + guion del vídeo de reglas de la tabla del comisario | `content/tutorial-60s.md` §Expediente, `content/videos-reglas.md` §Expediente | 1 | 0,25 | C-17 | 7-8 | El tutorial no aparece nunca antes del primer jueves real; pasa la prueba 2 de `docs/propuesta-jugabilidad-expediente.md` §9.2 | Un tutorial "por si acaso" que nadie ve, como ya advierte la regla del calendario |
| **C-19** | Rampa de producción hacia el lanzamiento: 6 semanas, ≈42 casos, con el foco en sostener el jueves de Expediente ya en vivo y ampliar el colchón antes de la semana 9-10 | `content/casos/00xx.md` … | 6 (0,25-0,3/caso) | ~2-2,5 h/semana | C-16, C-17, motor con Expediente base (B-3/B-4 de `docs/propuesta-jugabilidad-expediente.md` §9) en verde | 8-13 | Colchón de ≥3 semanas por delante del día de publicación en todo momento; ningún jueves llega sin su marca falsa (MT) revisada | Que Expediente llegue después que Escena y el jueves tenga que salir "clásico" unas semanas (repliegue ya previsto, no bloquea el resto de la semana) |
| **C-20** | Pase final de correo diario y textos de compartir para los dos modos (sin posiciones ni nombres reales en el compartible, línea resumen para lector de pantalla) | `content/microcopy.md` §compartir + §correo | 0,5 | 0,25 | C-11, `analista-datos` (eventos con propiedad `modo`) | 8-9 | Un compartible de Escena y uno de Expediente pasan la revisión de accesibilidad de F12/M16 | Que el compartible de Expediente "se vea igual" que el de Escena y pierda su firma visual propia; ya decidido que deben distinguirse |

### 3.5 Régimen de crucero y fase 2 (semanas 11 en adelante)

| id | Tarea | Entregable | Días de agente | Horas del fundador | Dependencias | Semana | Criterio de "hecho" | Riesgo |
|---|---|---|---|---|---|---|---|---|
| **C-21** | Régimen de crucero: producir cada semana lo que se publica esa semana más el colchón de 2-3 semanas, hasta completar la ventana de 17 semanas (≈49 casos en este tramo) | `content/casos/0xxx.md` … | 7 (0,25-0,3/caso) | ~2 h/semana estable | C-19 | 14-20 | El colchón nunca baja de 2 semanas ni sube de 4 (para no envejecer el humor de temporada) | Que el ritmo se relaje al pasar la presión del lanzamiento; se vigila con un contador simple en `docs/analitica/` (casos en cola) |
| **C-22** | Reparto recurrente de 24, corregido: apellidos que pasan la prueba 6(b), tabla `canon-soporta(motivo, personaje)` completa para NR-M3, regla de nombre canónico del objeto aplicada también a los objetos con historia | `content/reparto-recurrente.md` | 1,5 | 0,5 | G3, G6; `ingeniero-motor-puzzles` (prueba del veterano, NR-M1..4) | 11-12 | Prueba del veterano: el bot con canon no acierta más de 2 puntos por encima del bot sin canon, sobre 1.000 casos simulados | Repetir el error ya detectado por el panel: un secreto que también sirve de pista filtra la solución; se evita con NR-M3 obligatoria antes de activar |
| **C-23** | Activación del primer caso con canon activo (aniversario), anunciado en portada, y puesta en marcha del diario del jugador (fichas de una línea por caso resuelto) | `content/casos/00xx.md` (primer caso con `board.flags: ["canon_activo"]`) + `content/microcopy.md` §diario | 1 | 1 (revisión especial, una sola vez) | C-22, G6 en verde | 12-13 | El caso se anuncia en portada como excepción; ningún otro caso del ritual diario depende de haber jugado este | Activar el canon sin anunciarlo y romper la regla ya cerrada de "nunca sorpresa silenciosa" |
| **C-24** | Calendario de especiales mensuales: "Tú eres sospechoso" (en plano y en rejilla), doble víctima, cadena de custodia (solo si su Compuerta 0 da verde) | `content/especiales-mensuales.md` | 1 | 0,5 (aprobar calendario trimestral) | Motor: CC/CT/DV en verde según Compuerta 0 (`docs/propuesta-jugabilidad-expediente.md` §9.1) | 10-11 y trimestral en adelante | Un especial al mes, alterno entre formatos, ninguno usa el "tú" dentro de una pista numerada | Saturar el calendario de especiales y que pierdan su condición de "especial"; máximo uno al mes, regla dura |
| **C-25** | Casos de época: piloto (el expreso de 1923) + guía de anacronismos y vocabulario de época | `content/casos-epoca.md` | 1,5 | 0,5 | `ingeniero-motor-puzzles` (confirmar que `board.order.topologia = "linea"` no exige predicado nuevo) | 14-16 | El piloto pasa QA sin ningún anacronismo señalado y sin rozar un hecho histórico real (regla del proyecto) | El riesgo es de vocabulario y de anacronismo, no de motor; por eso lleva más revisión humana que un caso contemporáneo |
| **C-26** | Plantillas del vis a vis de Expediente (fase 2, condicionado a que la Compuerta 0 ponga MV-E en verde con tres pistas de apertura) | `content/plantillas-preguntas-interrogatorio.md` §vis a vis | 1 | 0 | Compuerta 0 (MV-E) en verde | Solo si se cumple, tentativamente 15-17 | No se escribe ni un prompt antes de tener el número; si sale rojo, esta fila no se ejecuta | Escribir contenido para una mecánica que el motor termine descartando; por eso está condicionada explícitamente |
| **C-27** | Revisión trimestral de biblia, guía de estilo y lista negra léxica | `content/biblia.md`, `docs/guia-estilo.md` (revisión) | 0,5 cada trimestre | 0,5 | Ninguna | Cada 12-13 semanas desde el lanzamiento | Ningún caso publicado en el trimestre contradice la biblia vigente; la lista negra incorpora cualquier palabra señalada por QA o por jugadores | Que la biblia se vuelva "papel muerto" y cada quien la interprete a su manera; la revisión periódica es la mitigación |

---

## 4. Qué necesito de otras áreas, y cuándo

| De quién | Qué necesito | Cuándo lo necesito | Qué pasa si llega tarde |
|---|---|---|---|
| `disenador-puzzles` | Catálogo formal de predicados de Escena (`docs/diseno/taxonomia-pistas.md`, hoy no existe) | Antes de C-04 (semana 2) | Trabajo con los predicados ya usados en los ejemplos de las propuestas de jugabilidad, marcados "provisional" |
| `disenador-puzzles` | Confirmación de las nueve familias T1-T9 de Expediente tal como las congela `ingeniero-motor-puzzles` en el DSL | Antes de C-16 (semana 5) | Las plantillas de Expediente se retrasan y arrastran el jueves de la beta |
| `disenador-puzzles` | Lista de 14 técnicas de Escena y 12 de Expediente para la prueba 1 (co-entrega) | Semana 1-2, antes de C-03 | La prueba 1 se retrasa y con ella el escalafón, que bloquea la reconstrucción y la contraprueba |
| `ingeniero-motor-puzzles` | M1 (DSL con `cells()` y negación) para validar plantillas ida y vuelta | Antes de que C-04/C-16 se den por cerrados | Las plantillas quedan "sin validar contra motor" hasta que exista, con el riesgo de reescribir después |
| `ingeniero-motor-puzzles` | M2 (generador) y M3 (escalera + certificado) para producir el primer caso real | Antes de C-08 (semana 3-4) | El piloto y la rampa a beta se retrasan en bloque; es la dependencia dura que más arriesga la fecha de beta |
| `ingeniero-motor-puzzles` | Corrección de `ve(A,B)` (diagonal, no misma fila) antes de escribir preguntas del interrogatorio | Antes de C-13 (semana 5) | Se escribiría una plantilla de pregunta idénticamente falsa; se detecta en la validación ida y vuelta, pero cuesta un ciclo de reescritura |
| `ingeniero-motor-puzzles` | Resultado de Compuerta 0 (MV, MT, MV-E, CC, CT, DV) | Antes de comprometer C-13, C-17, C-24, C-26 | Contenido escrito para una mecánica que no se construye; por eso cada fila condicionada lo dice explícitamente |
| `disenador-ux-ui` | Flujos de interfaz (dónde vive cada texto) para escribir microcopy con contexto real | Antes de C-11 (semana 4) | Microcopy genérico que hay que reescribir con contexto cuando lleguen los flujos |
| `analista-datos` | Taxonomía de eventos con la propiedad `modo` | Antes de C-20 (semana 8) | Los textos de compartir y correo no pueden nombrarse de forma consistente con lo que mide analítica |
| `revisor-calidad` | Checklist de QA compartido y calendario de revisión | Antes de C-07 (semana 3) | El flujo de producción queda sin su paso de control de calidad documentado |
| `experto-legal` | Revisión de que ningún nombre del banco coincide con una persona real ni con un tercero que use "Sabueso" de forma conflictiva (ya cubierto parcialmente por `docs/legal/anterioridades-sospechario.md`) | Antes de publicar el primer caso | Riesgo legal menor pero evitable con una revisión de una tarde |
| `director-producto` | Registro formal de D-010 (las dos propuestas de jugabilidad) en `docs/decisiones.md` | Cuanto antes; este plan ya las da por adoptadas siguiendo la instrucción de `supuestos.md` | Ninguno operativo inmediato, pero conviene que el registro no quede pendiente indefinidamente |

---

## 5. Riesgos transversales del área

- **El motor llega tarde y arrastra toda la producción.** Es el riesgo que más pesa: cinco de las siete filas de la §3.2-3.3 dependen de M1/M2/M3. Mitigación: el piloto (C-08) empieza con lo mínimo que el motor pueda dar, aunque sea un solo tamaño de tablero, y se amplía después.
- **Una plantilla de pista se cuela con doble lectura y se descubre tarde.** Mitigación: la validación ida y vuelta (paso 3 del flujo) es automática y obligatoria antes de QA, no una sugerencia.
- **El escalafón se activa con nombres de técnica que nadie reconoce.** Mitigación: la prueba 1 es la primera compuerta con personas de todo el plan de jugabilidad (antes que el interrogatorio, antes que la tabla del comisario) precisamente porque bloquea más cosas que ninguna otra.
- **El reparto recurrente se adelanta por presión de fandom antes de pasar NR-M1..4.** Mitigación: está descrito como fase 2 en las dos propuestas de jugabilidad y aquí se mantiene con una compuerta explícita (G6); no se activa por popularidad, se activa por prueba superada.
- **El fundador se convierte en cuello de botella si el ritmo sube sin avisar.** Mitigación: el ritmo objetivo (~7 casos/semana, ~2 h de firma) está fijado en este plan, no se decide semana a semana; si hace falta subirlo (por ejemplo, para adelantar colchón antes de una prueba con personas), se avisa con una semana de antelación.

---

*Cambios a este documento: los registra `guionista-misterio`, y cualquier cambio de calendario que afecte a otra área se comunica a `director-producto` para `docs/roadmap.md`.*
