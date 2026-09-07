# Plan de área: backend

Autor: `desarrollador-backend`. Fecha: 7 de septiembre de 2026.
Supuestos heredados sin discusión: `docs/roadmap/supuestos.md` (arranque el lunes 8 de septiembre, semana 1; beta cerrada en la **semana 7**; lanzamiento público en las **semanas 9-10**; stack Next.js + Supabase + Vercel + PostHog + Resend).
Base de producto: `docs/catalogo-productos.md` v1.1, `docs/propuesta-mejoras-producto.md` §8, `docs/propuesta-jugabilidad.md` §5 y `docs/propuesta-jugabilidad-expediente.md` §8.

**Alerta D-006:** ninguno de los cinco disparadores de registro de marca se ha cumplido a fecha de hoy (sin usuarios, sin prensa, sin conversación B2B). Este plan crea dos de ellos a plazo fijo: el contador de usuarios activos mensuales (B-25) y el feed B2B. **El disparador de 5.000 usuarios activos mensuales se vigila desde el panel de salud (B-29) y se avisa al usuario el mismo día en que se cruce.**

Todo el código del área vive en `web/` (rutas de API y acciones de servidor) y `supabase/` (migraciones y funciones). Todo cambio de esquema es una migración numerada con su `rollback` correspondiente. La documentación permanente del área es `docs/backend.md`, que este plan produce como entregable de B-38.

---

## 1. Las siete decisiones de arquitectura que este plan da por tomadas

Se registran aquí porque condicionan todo lo demás y ninguna es reversible barata después de la semana 3.

1. **Dos superficies de datos, no una.** Lo público (caso del día, archivo, erratas, agregados del escalafón) se sirve desde **rutas de API en Vercel con caché de CDN** y clave de servicio en el servidor; nunca con `supabase-js` en el cliente. Lo de usuario (intentos, racha, preferencias, cuaderno) va por acciones de servidor con RLS como segundo cerrojo. Motivo: el endpoint del caso del día es el de más tráfico del producto y tiene que costar cero lecturas de base de datos por usuario; y la verificación de la acusación no puede depender de que el cliente se porte bien.
2. **Los intentos los escribe solo el servidor.** RLS concede `select` de lo propio y **deniega `insert`/`update` a `authenticated` y `anon`**. Escribe `service_role` desde la acción de servidor que ya ha verificado la acusación. Es la columna vertebral del anticheat y cuesta lo mismo hacerlo así desde el primer día.
3. **Anónimo es una cuenta real de Auth, no un identificador local suelto.** Se usa el inicio de sesión anónimo de Supabase: hay una fila en `auth.users` desde el primer toque, la RLS es idéntica para todos y **enlazar un magic link asciende la misma fila**, sin fusión. La fusión (B-26) queda para el único caso que la necesita de verdad: alguien que ya tenía cuenta en otro dispositivo.
4. **El día se ancla al número de caso, no a la fecha de servidor** (D-007 punto 4, PR3 regla (a)). El calendario es una tabla de números consecutivos con una fecha civil cada uno; la racha cuenta números, no días.
5. **Un caso al día y una racha** (`propuesta-jugabilidad-expediente.md` §8.1). El jueves es Expediente y el resto Escena; el modo es un campo del caso, no una segunda serie. Esto ahorra la mitad del esquema y es lo que hace posible que la racha, el archivo, el compartir y el correo sean una sola pieza.
6. **Todo lo que dependa del tiempo pasa por un reloj inyectable.** Ninguna función lee `now()` directamente: leen `app.ahora()`, que en producción es `now()` y en las pruebas es lo que le diga la suite. Sin esto, la suite de husos y cambios de horario (B-14) no se puede escribir, y esa suite es un requisito de PR3.
7. **Coste antes que elegancia.** El presupuesto es < 100 €/mes hasta 50.000 usuarios mensuales y sin guardias nocturnas. Eso descarta cualquier cosa que cobre por evento sin control (§10), obliga a caché de CDN en todo lo público y convierte "cuántos eventos manda el servidor" en una decisión de arquitectura, no de analítica.

---

## 2. Los contratos que se congelan en la semana 1

Es lo único de este plan con fecha límite corriendo. Medio día ahora, tres días de retrofit después. Cada contrato tiene un dueño, una fecha y una consecuencia si se salta.

| Id | Contrato | Dueño / co-firma | Fecha límite | Qué rompe si no se congela |
|---|---|---|---|---|
| **C1** | **Certificado agnóstico de modo v1.0**: el esquema de `docs/propuesta-jugabilidad-expediente.md` §8.2 entero, con localizador polimórfico (`rejilla` / `cuaderno` / `tira`), campo `rama` para el razonamiento por casos, `premisas.pasos` y las tres invariantes con test de propiedad | `ingeniero-motor-puzzles` · firman backend y frontend | **día 2 de S1**, antes de la primera línea del solver de Escena | Reconstrucción, escalafón, Sabueso, contraprueba, "paso a paso" y solución razonada del imprimible: siete piezas con dos esquemas en vez de uno |
| **C2** | **Esquema del caso publicable v1**: qué campos viajan al cliente (`contenido_publico`), identificadores estables de entidad, registro de decorados, y la lista negra de lo que **nunca** sale antes de acusar (solución, certificado, semilla, técnicas requeridas, número de pasos, dificultad numérica) | backend · firma motor | día 3 de S1 | Una filtración de solución en el JSON público el día del lanzamiento; y el anticheat entero, que se apoya en esta lista |
| **C3** | **Tipos compartidos de la API**: un único paquete `web/src/contratos/` en TypeScript con esquemas `zod` para `Caso`, `Intento`, `Acusacion`, `Resultado`, `Racha`, `Escalafon`, `Calendario`, `Reporte`, más los códigos de error y la forma de la respuesta | backend · firma `desarrollador-frontend` | día 4 de S1 | Tipos duplicados en frontend, que es la forma más común de que el cliente y el servidor discrepen sobre qué es "resuelto" |
| **C4** | **Política de día y número de caso**: medianoche local del dispositivo, un número por fecha civil, un solo contenido por número, ventana de aceptación ±1 día, huso declarado y **un cambio cada 24 h** | backend · firma `director-producto` | día 4 de S1 | La numeración del motor y la fecha que pide el frontend; es la decisión que más caro sale mover |
| **C5** | **Reglas de racha**: cuenta números consecutivos; gracia de 1 cada 30 días naturales; día concedido (caída ≥ 20 min o caso anulado) que **ni rompe ni avanza**; jueves neutro las cuatro primeras semanas de Expediente; día saltado por viaje al este solo con cambio declarado ≥ 5 h y una vez cada 30 días | backend · firma `director-producto` | día 5 de S1 | PR3 dice literalmente que esto cuesta 0,5 persona-semana **si se decide antes de escribir la racha**, y varias veces más después |
| **C6** | **Contrato de ayudas**: "Comprobar" devuelve **celdas vacías y celdas erróneas por separado** (cambio 26 de §8.2), un uso por caso (tres en Premium, desactivadas en duelo); Sabueso de dos niveles se calcula en servidor sobre el certificado y **jamás devuelve la solución ni señal de error** | backend · firma `disenador-ux-ui` | día 5 de S1, antes de que frontend escriba la pantalla de resultado | La pantalla de resultado (PR10) y el criterio de acreditación del escalafón, que depende de "resuelto sin Sabueso" |
| **C7** | **Taxonomía de eventos** con propiedad `modo` **obligatoria en todos**, `racha_salvada` con motivo, `caso_abierto` con origen (el KPI del correo, cambio 28), `pwa_instalada`, y el presupuesto de eventos por sesión de §10 | `analista-datos` · implementa backend | fin de S1 (puede cerrarse en S2 sin coste) | Ningún umbral de `propuesta-jugabilidad-expediente.md` §2.3 se puede medir sin `modo`, y añadirlo después invalida la serie |
| **C8** | **Resultado compartido `/r/[id]`**: identificador aleatorio de ≥ 16 caracteres no derivado de nada, caducidad de 30 días con 410, borrado encadenado desde "borrar mi cuenta", imagen OG sin cookies ni seguimiento y con `X-Robots-Tag: noindex`, y **un `/r/[id]` de caso fuera del archivo de 7 días abre la página del día 8, no el caso jugable** (cambio 33) | backend · firma `experto-legal` | fin de S1 | Corrige `arbol-web-final.md`, que hoy define `/r/[id]` como CSR; y son reglas de datos personales que cuestan cero ahora y un rediseño después |
| **C9** | **Contrato de ingestión motor → backend**: forma del artefacto por caso, versión de formato, hash de contenido para idempotencia, estados (`candidato` → `revisado` → `listo` → `programado` → `publicado` / `anulado`) y campo de firma humana | backend · firma `ingeniero-motor-puzzles` y `revisor-calidad` | fin de S1 | El banco de 60 casos llega sin poder entrar en la base de datos, que es el bloqueo clásico de la semana antes de la beta |

**Regla de trabajo mientras el motor construye.** Backend no espera: desde el día 3 de S1 trabaja contra **dobles de prueba** (`supabase/pruebas/fixtures/`) que cumplen C1 y C2 y están firmados por el ingeniero de motor. Si el motor se retrasa, lo que se retrasa es el contenido, no la plataforma.

---

## 3. Esquema de datos

Migraciones en `supabase/migrations/NNNN_<nombre>.sql`, cada una con `supabase/migrations/rollback/NNNN_<nombre>_down.sql`. Nada de cambios manuales en el panel: si no está en una migración, no existe.

### 3.1 Tablas del MVP

| Tabla | Para qué | Claves e índices que importan |
|---|---|---|
| `usuarios` | Extiende `auth.users`. `tipo` (`anonimo` \| `cuenta`), `alias_publico` (nulo por defecto), `zona_horaria` (IANA), `tz_cambiada_en`, `tz_cambios_30d`, `creado_en`, `ultimo_visto_en`, `borrado_solicitado_en` | PK = `auth.users.id`. Índice parcial por `tipo='anonimo' and ultimo_visto_en < ahora-12 meses` para la purga de retención |
| `preferencias` | Tema, sonido, autopropagación, animación reducida, correo diario. Es lo que hace verdadera la promesa de sincronía entre dispositivos (M9) | PK `usuario_id` |
| `casos` | Un caso del motor. `modo`, `version_formato`, `semilla`, `tamano`, `dia_caracter`, `mecanica_estructural`, `contenido_publico` jsonb, **`solucion` jsonb**, **`certificado` jsonb**, `dificultad_medida`, `etiqueta_dificultad` (recalculable, no congelada), `tecnicas_requeridas` text[], `estado`, `firma_humana` jsonb, `hash_contenido`, `creado_en` | PK `id`. Unique `hash_contenido`. Índice `(estado, modo, dia_caracter)` para elegir programación |
| `calendario` | El calendario de publicación. `numero_caso` int **PK**, `fecha_civil` date **unique**, `modo`, `caso_id` unique, `estado`, `neutral` bool, `motivo_neutral`, `disponible_desde` timestamptz, `anulado_en` | Índices por `fecha_civil` y por `disponible_desde`. Es la tabla que decide qué es "hoy" para todo el sistema |
| `intentos` | Una partida. `usuario_id`, `numero_caso`, `caso_id`, `contexto` (`diario` \| `archivo` \| `vistazo` \| `duelo`), `estado`, `iniciado_en`, `primera_interaccion_en`, `cerrado_en`, `tiempo_activo_ms`, `tiempo_total_ms`, `tiempo_servidor_ms`, `resultado`, `comprobaciones_usadas`, `sabueso_nivel_max`, `autopropagacion_activa`, `sello`, `acusacion` jsonb, `tecnicas_acreditadas` text[], `anomalias` jsonb | **Unique `(usuario_id, numero_caso)` con `contexto='diario'`** (una acusación por caso y persona). Índice `(usuario_id, numero_caso desc)` para racha y archivo; índice parcial `(numero_caso)` where `contexto='diario' and estado='acusado'` para tasa de resolución |
| `rachas` | Caché de la racha: `actual`, `maxima`, `ultimo_numero`, `gracias_usadas` date[], `congelaciones_restantes`, `recalculado_en` | PK `usuario_id`. Es caché: la verdad la da la función pura de B-13 y siempre se puede recalcular |
| `escalafon_creditos` | Un crédito = un caso que **exigía** una técnica y se resolvió sin Sabueso. `usuario_id`, `apartado` (`escena` \| `expediente`), `tecnica`, `numero_caso`, `acreditado_en` | Unique `(usuario_id, tecnica, numero_caso)`. Índice `(usuario_id, apartado)` |
| `reportes_errata` | El reporte estructurado de PR2: `numero_caso`, **`pista_id`** (de la lista de pistas del caso, no texto libre), `comentario` acotado, `usuario_id` nulo permitido, `ip_hash`, `estado` | Índice `(numero_caso, pista_id)`: es exactamente la consulta de la alerta de tres reportes coincidentes |
| `erratas` | El registro público de `/erratas`: `numero_caso`, `tipo` (`anulado` \| `corregido` \| `dia_concedido`), `publicado_en`, `texto_publico`, `reparacion` | Índice por `publicado_en desc`. Se sirve con ISR y caché de CDN |
| `incidencias` | Las caídas que conceden día: `desde`, `hasta`, `motivo`, `numeros_afectados` int[], `declarada_por` (`monitor` \| `humano`) | La declara el monitor, no una persona (PR3 regla (b)) |
| `resultados_compartidos` | `/r/[id]`. `id` text de 22 caracteres aleatorios, `usuario_id`, `numero_caso`, `carga` jsonb (tiempo **declarado**, sello, marcas sin spoiler), `creado_en`, `expira_en`, `borrado_en` | PK `id`. Índice por `expira_en` para la purga diaria. Índice por `usuario_id` **solo** para el borrado encadenado |
| `suscriptores_correo` | `correo` citext unique, `estado` (`pendiente` \| `activo` \| `baja`), `token_confirmacion`, `token_baja`, `consentimiento` jsonb (fecha, texto exacto mostrado, origen, `ip_hash`), `zona_horaria`, `ultimo_envio_en` | Índice `(estado, zona_horaria)` para el cron horario. El `consentimiento` es la prueba que exige el RGPD, y por eso guarda el texto, no un booleano |
| `webhooks_recibidos` | Reservada desde el MVP aunque se use en fase 2: `proveedor`, `evento_id` unique, `recibido_en`, `procesado_en`, `carga` | Unique `(proveedor, evento_id)`: es toda la idempotencia de los pagos, y se crea ahora para no tocar el esquema con dinero en juego |

### 3.2 Fase 2 (no se crean en el MVP, se dejan diseñadas)

`duelos`, `duelo_participantes`, `suscripciones`, `compras`, `descargas_firmadas`. Detalle en §11.

### 3.3 Row Level Security

RLS activada en **todas** las tablas, incluidas las que no tienen ninguna política (denegar todo es una decisión, no un olvido). El patrón, con ejemplos reales:

```sql
alter table public.intentos enable row level security;

-- El jugador lee lo suyo y nada más.
create policy intentos_leer_propio on public.intentos
  for select to authenticated using (usuario_id = auth.uid());

-- Nadie escribe intentos desde el cliente: ni insert, ni update, ni delete.
-- La ausencia de política es la política. Escribe service_role, que salta RLS.

alter table public.casos enable row level security;
-- Sin ninguna política: 'casos' no es accesible desde el cliente en ningún caso.
-- El contenido público se sirve por ruta de API, filtrando columnas en el servidor.

alter table public.resultados_compartidos enable row level security;
-- Legible por cualquiera que conozca el id, y solo mientras no haya caducado.
create policy resultado_por_id on public.resultados_compartidos
  for select to anon, authenticated
  using (borrado_en is null and expira_en > app.ahora());
```

Tres reglas que se comprueban en CI con una prueba por tabla:

1. Ninguna tabla sin RLS activada.
2. Ninguna política que use `true` como `using` sin una condición de propiedad o de caducidad.
3. Ninguna consulta del cliente puede alcanzar `casos.solucion` ni `casos.certificado`: hay una prueba que lo intenta por las cuatro vías (PostgREST directo, vista, función `security definer` y RPC) y falla si alguna devuelve datos.

---

## 4. Las cuatro políticas que hay que escribir antes que el código

### 4.1 Zona horaria y número de caso

- **El día cambia a medianoche de la hora local del dispositivo** (D-007 punto 4). No hay un instante global de publicación: hay un calendario que el servidor expone con varios días y un cliente que sabe qué fecha civil es la suya.
- El servidor expone `/api/calendario` con la **ventana [hoy−7, hoy+1]** en referencia UTC, y cada entrada lleva `numero_caso`, `fecha_civil`, `modo`, `disponible_desde` y `estado`. El cliente elige por su fecha civil local. Esto resuelve a la vez el archivo de 7 días y la precarga del caso de mañana para la PWA.
- **Ventana de aceptación, precisa.** La medianoche más temprana del planeta para la fecha civil `D` ocurre a `D−1 10:00 UTC` (UTC+14) y la más tardía termina a `D+1 12:00 UTC` (UTC−12). Por tanto: el contenido del caso `N` se sirve desde `D−1 10:00 UTC` y un intento contra `N` se acepta hasta `D+1 12:00 UTC`. Fuera de esa ventana el servidor responde `409 caso_fuera_de_ventana`. Esa es la traducción operativa de "±1 día" y hace irrelevante el reloj del dispositivo: un reloj adelantado no consigue el caso de pasado mañana.
- **Huso declarado, con límite.** `usuarios.zona_horaria` la declara el cliente y **solo se puede cambiar una vez cada 24 h**. Cada cambio se registra. Un cambio declarado de **≥ 5 horas** concede el día saltado por viaje al este, **como máximo una vez cada 30 días** (PR3 condición (c)); por debajo de eso, un cambio de huso no concede nada. Sin este límite, alternar zona permite "cobrar" días de racha.
- **Casos de prueba obligatorios** (suite de reloj simulado, B-14; se ejecuta en CI en cada migración):
  1. Cambio a horario de verano en Europe/Madrid (marzo): el día de 23 horas no salta un número.
  2. Cambio a horario de invierno (octubre): el día de 25 horas no duplica un número.
  3. Viaje Madrid → Ciudad de México (−7 h) el día del vuelo: no se pierde ningún número.
  4. Viaje Ciudad de México → Madrid (+7 h): el día saltado se concede una vez y **la segunda vez en 30 días no**.
  5. Alternancia de zona cada 24 h buscando conceder días: se conceden 0 después del primero.
  6. Reloj del dispositivo adelantado 48 h: el servidor no sirve el caso ni acepta el intento.
  7. Reloj atrasado 48 h: el caso de hace dos días es jugable desde el archivo y **no cuenta para la racha**.
  8. Jugador en UTC+14 y jugador en UTC−11 el mismo número de caso: los dos válidos, el mismo contenido.
  9. Caso anulado a mitad de la ventana: el que aún no ha empezado sigue pudiendo jugarlo, con aviso, y el número queda neutro para todos.

### 4.2 Racha por número de caso y día concedido

La racha es **una función pura de SQL** sobre `intentos` + `calendario` + `incidencias`, y `rachas` es solo un caché con `recalculado_en`. Esto no es purismo: es lo que hace que reparar la racha de 4.000 personas tras una anulación sea un `update` de una fila del calendario más un recálculo en lote, y no un procedimiento manual.

Reglas, en el orden en que se aplican:

1. Cuenta **números de caso consecutivos con un intento `diario` acusado y resuelto**. No cuenta fechas de servidor.
2. Un número con `calendario.neutral = true` **ni rompe ni avanza**: se salta al comparar consecutividad. Se marca `neutral` cuando el caso se anula (PR2 regla 3) o cuando una incidencia declarada por el monitor lo cubre (PR3 regla (b): ≥ 20 minutos continuados de indisponibilidad del endpoint del caso o del guardado, en cualquier región, concedido a **todos** los usuarios, no solo a los de la región afectada).
3. **Gracia**: un número perdido cada 30 días naturales no rompe la racha. Se consume automáticamente, se registra en `rachas.gracias_usadas` y **se le dice al jugador** ("tu racha sigue viva: has usado tu día de gracia"), porque una red de seguridad invisible no cambia el comportamiento de nadie.
4. **Ventana de 48 h**: si el fallo fue nuestro (errata confirmada o incidencia), el día se repara solo, sin escribir a soporte. La reparación es el paso 2, no un flujo aparte.
5. **Jueves neutro del primer mes**: durante las cuatro primeras semanas de vida de Expediente, el jueves ni rompe ni avanza (`propuesta-jugabilidad-expediente.md` §2.3). Se implementa como `neutral` con motivo propio, y el porcentaje que juega el jueves sin presión de racha es el dato que abre o no el segundo día.
6. **Congelaciones de Premium** (fase 2): cuatro al mes, no acumulables, aplicables hasta 48 h después. Se modelan como un tipo de neutralidad **por usuario**, no global.
7. Cada vez que una regla salva una racha se emite `racha_salvada` con `motivo` (`dia_concedido` \| `errata` \| `gracia` \| `congelacion` \| `jueves_de_propina`), por exigencia de PR3 (d). Y el compromiso escrito que la acompaña: **cualquier red de seguridad que no mueva D7 en 60 días se retira.**

**Decisión que este plan fija y que `director-producto` debe confirmar (B-16):** jugar un caso del archivo **no** restaura la racha de ese día. Cuenta para estadísticas y para el escalafón, no para la racha. Motivo: la racha es el ritual del día; si el archivo la restaura, la gracia, el día concedido y las congelaciones de Premium dejan de significar nada y Premium vende una restauración que el tier gratuito ya regala.

### 4.3 Anticheat proporcionado

El objetivo declarado no es la perfección: es que **compartir un resultado no sea trivialmente falsificable** y que los duelos sean justos.

- **La solución no viaja al cliente.** `casos.solucion` y `casos.certificado` no salen del servidor antes de acusar, por ninguna vía (C2 y la prueba de RLS de §3.3). El certificado se entrega **con el veredicto**, no antes.
- **Acusar es una acción de servidor atómica e irreversible.** El servidor lee la solución con clave de servicio, compara, escribe el intento y devuelve veredicto + certificado + sello. Un `unique` sobre `(usuario_id, numero_caso)` en contexto diario garantiza una acusación por caso y persona; el reintento solo se permite si el caso fue anulado.
- **Comprobar y Sabueso también son servidor.** Comprobar devuelve celdas vacías y erróneas por separado (C6) y consume uno de los usos disponibles, contabilizado en `intentos`, no en el cliente. Sabueso ejecuta la escalera **desde el estado inicial** hasta el último peldaño compatible con el tablero del jugador, y por construcción nunca da señal de error.
- **Tiempos.** El servidor marca `primera_interaccion_en` (el cronómetro arranca en la primera interacción con el tablero, cambio 30) y `cerrado_en`, y guarda `tiempo_activo_ms` y `tiempo_total_ms` declarados por el cliente junto a `tiempo_servidor_ms` medido por él. Si el declarado es menor que el de servidor menos la tolerancia, se marca `anomalias` y **no se bloquea nada**: en el MVP el tiempo compartido se etiqueta **"declarado"**, nunca "verificado" (cambio 33). En duelos (fase 2) manda el de servidor y punto.
- **Límites.** Rate limiting por usuario y por `ip_hash` en abrir caso, comprobar, acusar, reportar y crear resultado compartido. Captcha invisible (Turnstile) en el alta anónima, porque el inicio de sesión anónimo es gratis de crear y es el vector obvio para inflar métricas o agotar cuota.
- **Lo que se acepta perder.** Un jugador decidido puede resolver el caso en papel y teclear la solución con un tiempo bonito. No se persigue: el coste de perseguirlo es alto y el daño es una línea en un grupo de WhatsApp.

### 4.4 Datos personales y retención

- Se recogen: identificador de cuenta, correo solo si hay cuenta o suscripción al boletín, zona horaria declarada, alias solo si el jugador lo escribe, y los datos de partida. **No** se recoge ubicación, ni se geolocaliza para conceder días de racha (por eso el día concedido va a todo el mundo).
- **Exportación y borrado en un clic** (B-27). El borrado encadena: intentos, racha, créditos del escalafón, preferencias, reportes (se anonimizan, no se borran, porque son la prueba de una errata), **todas las páginas `/r/[id]` de esa persona y sus imágenes OG en caché** (C8 y PR4 regla 4), suscripción al boletín y perfil de PostHog.
- Retención documentada: cuentas anónimas inactivas 12 meses se purgan; resultados compartidos caducan a 30 días; `ip_hash` a 90 días; reportes anonimizados al año; copias de seguridad, 7 días de retención en el MVP.
- PostHog en **región europea** y con perfil de persona solo para cuentas identificadas.

---

## 5. Tabla de tareas

Días de agente y horas del fundador. Dependencias: ids de este plan salvo indicación (`MOT-` motor, `FRT-` frontend, `UX-`, `DAT-`, `LEG-`, `QA-`).

### 5.1 Hasta la beta (semanas 1-7)

| Id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho | Riesgo |
|---|---|---|---|---|---|---|---|---|
| **B-01** | Congelar los nueve contratos C1-C9 | `docs/backend.md` §2, `web/src/contratos/` | 1,5 | 2 | MOT-B0, FRT, UX, DAT | S1 | Los nueve firmados por su dueño y su co-firma; ningún tipo de dominio definido fuera de `contratos/` | **Alto.** Es la única tarea con coste multiplicado por seis si se salta |
| **B-02** | Proyecto Supabase de producción y de staging, regiones, secretos, `config.toml` | `supabase/config.toml`, `docs/backend.md` §1 | 0,5 | 1,5 | — | S1 | Dos proyectos idénticos, secretos solo en Vercel y en GitHub, ningún secreto en el repositorio | Bajo |
| **B-03** | Migración 0001: `usuarios`, `preferencias`, `casos`, `calendario` + RLS base + convención de rollback | `supabase/migrations/0001_*` | 1,5 | 0 | B-01, B-02 | S1 | `supabase db reset` reproduce el esquema desde cero; el rollback se ejecuta y deja la base igual que antes | Medio |
| **B-04** | Auth: alta anónima con captcha, magic link, sesión, ascenso de anónimo a cuenta | `web/src/servidor/auth.ts` | 1 | 0,5 | B-03 | S1-S2 | Un anónimo que pide magic link conserva su `id` y todo su progreso sin fusión | Medio |
| **B-05** | CI: `db reset`, lint de SQL, pruebas, entorno de vista previa por rama | `.github/workflows/backend.yml` | 1 | 0,5 | B-02 | S1-S2 | Ninguna rama se fusiona con la suite en rojo; cada PR levanta su base efímera | Bajo |
| **B-06** | Migración 0002: `intentos` con índices y RLS de solo lectura propia | `supabase/migrations/0002_*` | 1 | 0 | B-03 | S2 | La prueba que intenta escribir un intento desde el cliente falla por las cuatro vías | Medio |
| **B-07** | Abrir caso, guardar progreso, reanudar (el cronómetro no se reinicia al recargar, F19) | `web/src/app/api/caso/`, `web/src/servidor/partida.ts` | 1 | 0 | B-06, C2 | S2 | Recargar a mitad de partida conserva tablero, anotaciones y tiempo; el service worker no invalida la sesión | Medio |
| **B-08** | Comprobar en servidor, con celdas vacías y erróneas separadas y usos contabilizados | `web/src/servidor/ayudas.ts` | 0,5 | 0 | B-07, C6 | S2 | Un segundo uso en el tier gratuito responde `403 sin_usos`; el cliente no puede fabricarse usos | Bajo |
| **B-09** | Sabueso de dos niveles sobre el certificado, un uso, sin señal de error | `web/src/servidor/sabueso.ts` | 1 | 0 | C1, MOT-M3 | S2-S3 | Sobre 200 casos, ningún nivel 2 revela una colocación no deducible del estado del jugador | **Alto.** Depende del certificado real del motor |
| **B-10** | Acusar: verificación en servidor, atómica, veredicto + certificado + sello | `web/src/servidor/acusar.ts` | 1,5 | 0 | B-06, C1, C2 | S2 | Una segunda acusación responde `409`; el certificado no aparece en ninguna respuesta anterior | **Alto** |
| **B-11** | Anticheat: ventana del número de caso, tiempos servidor frente a declarados, límites, captcha | `web/src/servidor/limites.ts` | 1 | 0 | B-10, C4 | S2-S3 | Los nueve casos de la suite de reloj pasan; 1.000 altas anónimas desde una IP se cortan | Medio |
| **B-12** | Reloj inyectable `app.ahora()` y política de huso con límite de cambios | `supabase/migrations/0003_*` | 1 | 0 | C4 | S3 | Ninguna función lee `now()`; el cambio de huso se rechaza dentro de las 24 h | Medio |
| **B-13** | Racha: función SQL pura, caché, gracia, neutralidad, reparación en lote | `supabase/migrations/0004_*`, `docs/backend.md` §4.2 | 1,5 | 0 | B-12, C5 | S3 | Recalcular desde cero da el mismo número que el caché en 10.000 usuarios sintéticos | **Alto** |
| **B-14** | Suite de reloj simulado: los nueve casos de §4.1 | `supabase/pruebas/reloj/` | 1,5 | 0 | B-13 | S3 | Los nueve en verde en CI; añadir un caso nuevo cuesta cinco líneas | Medio |
| **B-15** | Escalafón: créditos por técnica requerida sin Sabueso, dos apartados, rango por el apartado más avanzado | `supabase/migrations/0005_*` | 1 | 0 | B-10, C1 | S3 | Acreditar exige *el caso la exigía* **y** *resuelto sin Sabueso* **y** *sin autopropagación si la técnica es "el salto"*; jugar los dos modos da insignia, no rango mayor | Medio |
| **B-16** | Archivo de 7 días, calendario del mes y "días del mes completados" | `web/src/app/api/archivo/` | 0,75 | 0,5 | B-13 | S3-S4 | El día 8 sale del archivo y el calendario lo marca con candado; el agregado sale de `intentos`, sin interfaz nueva (cambio 26 (d)) | Bajo |
| **B-17** | Ingestión desde el motor: CLI, validación de esquema, invariantes del certificado, idempotencia | `supabase/ingesta/`, `scripts/ingesta.ts` | 1,5 | 0 | C9, MOT | S4 | Reingerir el mismo artefacto dos veces no crea filas; un certificado que viola una invariante se rechaza con el motivo | **Alto** |
| **B-18** | Estados del caso y firma humana (resolución a ciegas antes de publicar) con panel mínimo | `web/src/app/interno/casos/` | 1 | 2 h/semana | B-17 | S4 | Ningún caso llega a `programado` sin firma humana registrada con persona y fecha | Medio |
| **B-19** | Cron de publicación, precarga del caso de mañana y vigilancia del depósito | `supabase/migrations/0006_*` (pg_cron) | 1 | 0 | B-17 | S4 | Con menos de 14 días programados salta una alerta; el caso de mañana está disponible desde `D−1 10:00 UTC` | **Alto** |
| **B-20** | Endpoints públicos con caché de CDN (hoy, archivo, erratas, agregados) | `web/src/app/api/` | 1 | 0 | B-19 | S4 | 10.000 peticiones al caso del día generan ≤ 5 lecturas de base de datos | Medio |
| **B-21** | Reportes estructurados por pista, respuesta inmediata y alerta de tres coincidentes | `web/src/app/api/reporte/` | 1 | 0,5 | B-20 | S5 | El tercer reporte que cita la misma pista notifica fuera de la ventana de revisión; la respuesta en pantalla es inmediata y sin esperar a nadie | Medio |
| **B-22** | Anulación de caso con las seis reglas + reparación automática de racha + `/erratas` | `web/src/app/interno/anular/`, `supabase/migrations/0007_*` | 1,5 | 1 | B-13, B-21 | S5 | Anular el caso 47 lo neutraliza para todo el mundo en un instante, sin retirarlo, sin generar `/casos/47` y con la racha reparada sin intervención | **Alto** |
| **B-23** | Incidencias y día concedido automático desde el monitor (≥ 20 min) | `supabase/migrations/0008_*` | 0,75 | 0 | B-22, B-29 | S5 | Una caída simulada de 25 min concede el día a todos y lo publica en `/erratas` sin que nadie lo teclee | Medio |
| **B-24** | `/r/[id]`: creación, identificador no adivinable, caducidad de 30 días, 410, borrado encadenado, OG sin seguimiento | `web/src/app/api/resultado/` | 1 | 0,5 | C8, B-10 | S5 | Enumerar 10.000 identificadores no encuentra ninguno; a los 31 días responde 410; un `/r/[id]` de caso fuera del archivo lleva a la página del día 8 | Medio |
| **B-25** | PostHog en servidor con la taxonomía y el presupuesto de eventos | `web/src/servidor/analitica.ts` | 1 | 0,5 | C7 | S5 | Todos los eventos llevan `modo`; el presupuesto por sesión se comprueba en CI; los agregados caros se calculan en Postgres, no en PostHog | Medio |
| **B-26** | Fusión de progreso anónimo con cuenta existente, determinista y auditable | `supabase/migrations/0009_*` | 1 | 0 | B-04, B-13 | S6 | Con conflicto en el mismo número gana el intento resuelto y, en empate, el más antiguo; la fusión es idempotente y deja rastro | Medio |
| **B-27** | Exportación y borrado de cuenta en un clic, con borrado encadenado | `web/src/app/api/cuenta/` | 1 | 0,5 | B-24, B-26, LEG | S6 | Un borrado deja cero filas de esa persona en todas las tablas y elimina sus `/r/[id]` y su perfil de PostHog, comprobado por una prueba | **Alto.** Es requisito legal y bloquea la beta con personas reales |
| **B-28** | Correo diario con Resend: doble opt-in, cron horario por huso, baja en un clic, KPI de clic o partida | `supabase/migrations/0010_*`, `web/src/app/api/correo/` | 1,5 | 1 | C7, LEG, `periodista-contenidos` | S6 | Sale a las 08:00 locales de cada suscriptor, una vez al día como máximo; la baja funciona con un clic y sin sesión, también por cabecera `List-Unsubscribe` | Medio |
| **B-29** | Observabilidad mínima: monitor externo, alertas, panel de salud, presupuesto de coste | `docs/backend.md` §9, `web/src/app/interno/salud/` | 1 | 1 | B-20 | S6 | El monitor detecta 20 min de caída y crea la incidencia solo; hay tres alertas y ninguna más (caída, coste, depósito de casos) | Medio |
| **B-30** | Copias de seguridad y **restauración probada** en staging, cronometrada | `docs/backend.md` §10 | 0,75 | 1 | B-02 | S6 | Una restauración completa en staging desde copia del día anterior, con el tiempo medido y escrito | Medio |
| **B-31** | Prueba de carga y coste por usuario medido | `docs/backend.md` §11 | 0,5 | 0 | B-20 | S6 | 5.000 partidas simuladas en una hora sin degradar; coste extrapolado a 50.000 usuarios por debajo de 100 €/mes | Medio |
| **B-32** | Despliegue de la beta con lista de acceso y telemetría | — | 0,5 | 3 | B-27, B-30 | S7 | 100-300 personas entran con su enlace; ninguna incidencia de datos personales abierta | Medio |

### 5.2 De la beta al lanzamiento (semanas 8-10)

| Id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho | Riesgo |
|---|---|---|---|---|---|---|---|---|
| **B-33** | Correcciones de la beta y endurecimiento (límites, cabeceras, errores) | — | 2 | 2 | B-32 | S8 | Cero incidencias de severidad 1 abiertas; los límites resisten un ataque casero de 1.000 peticiones por minuto | Medio |
| **B-34** | Simulacro de anulación y de día concedido con la gente de la beta | `docs/backend.md` §6 | 0,5 | 1 | B-22, B-23 | S8 | Se anula un caso de verdad en la beta, se mide el tiempo hasta la reparación y se comprueba que **4 de 5 personas** explican en una frase por qué su racha sigue viva (condición (e) de PR3) | Medio |
| **B-35** | Congelación del esquema y migración de datos de la beta a producción | `supabase/migrations/0011_*` | 0,5 | 0,5 | B-33 | S8 | La beta arranca en producción con su progreso intacto; a partir de aquí, cambio de esquema solo con migración y rollback probados | Medio |
| **B-36** | Día 1: sitemaps y feed generados desde datos, canónicas del archivo, caché | `web/src/app/sitemap*.ts` | 0,75 | 0 | B-20, FRT | S9 | Solo entran en el sitemap casos con ficha completa (regla anti-contenido-fino del árbol web); ningún `noindex` en el sitemap | Bajo |
| **B-37** | Guardia ligera del lanzamiento: dos revisiones al día a hora fija, sin guardias nocturnas | `docs/backend.md` §9 | 0 | 6 | B-29 | S9-S10 | El compromiso público es **anulación en menos de 12 horas desde el tercer reporte coincidente**, y se cumple en la primera semana | Medio |
| **B-38** | `docs/backend.md` definitivo: esquema, tiempo, anticheat, datos | `docs/backend.md` | 0,75 | 0,5 | todas | S9 | Una persona nueva monta el entorno y entiende las cuatro políticas sin preguntar | Bajo |
| **B-39** | Página del día 8 `/casos/<n>` desde el certificado, en opción A (sin la acusación final) | `web/src/app/casos/[n]/` | 1 | 0,5 | B-22, C1 | S10 | Un caso anulado **no** genera página y su URL responde con la entrada de erratas; la explicación se corta en el penúltimo paso | Medio |
| **B-40** | Retrospectiva de coste e incidencias, cierre de deuda técnica | `docs/backend.md` §11 | 0,5 | 0,5 | B-31 | S10 | Coste real del primer mes escrito y comparado con la estimación de §10 | Bajo |

**Total MVP: ≈ 34,5 días de agente y ≈ 27 horas del fundador**, repartidas en 3-4 horas por semana salvo la semana 7 (beta, 3 h) y las semanas 9-10 (guardia ligera, 6 h).

### 5.3 Post-lanzamiento (fase 2)

| Id | Tarea | Entregable | Días | Horas fundador | Dependencias | Semanas | Hecho | Riesgo |
|---|---|---|---|---|---|---|---|---|
| **B-41** | Decisión de pasarela: comparativa cerrada y recomendación (§11.2) | `docs/backend.md` §12 | 0,5 | 2 | `estratega-negocio`, LEG | S11 | Decisión registrada con el umbral de reconsideración escrito antes del dato | Bajo |
| **B-42** | Duelos por enlace: token opaco, sala de 8, expiración de 48 h, tiempos de servidor, límites, privacidad | `supabase/migrations/1001_*` | 3 | 1 | B-10, B-11 | S11-S13 | Un duelo caduca solo; el retado juega sin cuenta con alias; el tiempo que cuenta es el del servidor y las comprobaciones extra de Premium están desactivadas | Medio |
| **B-43** | Premium con merchant of record: checkout, portal, webhooks idempotentes, estados, gracia, congelaciones de racha | `supabase/migrations/1002_*`, `web/src/app/api/pagos/` | 4 | 3 | B-41, LEG | S14-S17 | Los eventos reales del entorno de pruebas del proveedor se procesan dos veces sin duplicar nada; cancelar es un clic dentro de la aplicación; el derecho de desistimiento está implementado como diga `experto-legal` | **Alto** |
| **B-44** | Packs PDF: entrega por enlace firmado de 72 h y 5 descargas, `noindex`, sin marca ajena en metadatos | `web/src/app/api/descarga/` | 1,5 | 1 | B-43, MOT (exportador) | S15-S18 | El enlace caduca y el contador funciona; el archivo no es alcanzable sin firma; el cebo no está indexado y la hoja en blanco sí | Medio |

---

## 6. Semana a semana

**S1 · 8-13 de septiembre. Contratos y cimientos.** B-01 a B-05. Al final de la semana existen los nueve contratos, los dos proyectos de Supabase, la migración 0001, el alta anónima y la integración continua. *Compuerta CB-1: sin los nueve contratos firmados no se escribe una línea de la tabla de intentos ni del tablero.*

**S2 · 14-20 de septiembre. La partida.** B-06 a B-11. Abrir caso, guardar, comprobar, acusar, límites. Al final de la semana un caso de prueba se puede jugar de principio a fin con la solución viviendo solo en el servidor.

**S3 · 21-27 de septiembre. El tiempo y la racha.** B-12 a B-16, más B-09 si el certificado del motor llega. Al final de la semana la suite de reloj simulado está en verde con sus nueve casos. *Compuerta CB-2: sin esa suite verde no se publica ninguna promesa de racha, ni en portada ni en el correo.*

**S4 · 28 de septiembre - 4 de octubre. El contenido entra.** B-17 a B-20. Ingestión, firma humana, cron y endpoints públicos cacheados. Al final de la semana el sistema publica solo, todos los días, sin que nadie toque nada. *Compuerta CB-3: no hay beta sin 14 días de casos programados con firma humana.*

**S5 · 5-11 de octubre. La confianza.** B-21 a B-25. Reportes, anulación, erratas, incidencias, `/r/[id]`, analítica de servidor. Es la semana que convierte la promesa de "una sola solución" en un mecanismo comprobable, que es el argumento de portada del proyecto.

**S6 · 12-18 de octubre. Cuenta, correo y operación.** B-26 a B-31. Fusión, RGPD, correo diario, observabilidad, copias de seguridad con restauración probada, carga y coste. *Compuerta CB-4: no entra ninguna persona real en la beta sin borrado en un clic funcionando y sin una restauración probada.*

**S7 · 19-25 de octubre. Beta cerrada.** B-32 y soporte. 100-300 personas de la lista de espera. El backend no construye: observa, mide y corrige. La métrica que se vigila esta semana es la tasa de errores del servidor y el tiempo de la acusación, no la retención.

**S8 · 26 de octubre - 1 de noviembre. Endurecer.** B-33 a B-35, con el simulacro de anulación (B-34) como pieza central: es la única forma de saber si el compromiso de 12 horas es real. *Compuerta CB-5: sin cero incidencias de severidad 1, sin coste medido y sin esquema congelado, no se lanza.*

**S9 · 2-8 de noviembre. Lanzamiento.** B-36 a B-38 y guardia ligera. Dos revisiones al día a hora fija, la alerta de tres reportes coincidentes cubriendo el resto.

**S10 · 9-13 de noviembre. Estabilizar y medir.** B-39, B-40. La primera página del día 8 aparece ocho días después del primer caso, es decir, en esta semana. Se cierra la retrospectiva de coste y arranca el trabajo de fase 2.

---

## 7. Lo que el área necesita de otras áreas, y cuándo

| De quién | Qué | Para cuándo | Si no llega |
|---|---|---|---|
| `ingeniero-motor-puzzles` | **C1, el certificado agnóstico v1.0** | día 2 de S1 | Backend trabaja con dobles firmados y el retrofit cuesta seis veces más. Es el riesgo número uno del plan |
| `ingeniero-motor-puzzles` | Artefacto de ingestión con hash y CLI determinista (C9) | fin de S3 | La semana 4 se va en formatos y la beta se retrasa |
| `ingeniero-motor-puzzles` | Técnicas requeridas (TR) por caso | fin de S3 | El escalafón (B-15) sale sin acreditaciones y hay que rehacerlo |
| `ingeniero-motor-puzzles` + `revisor-calidad` | 14 días de casos con firma humana | fin de S6 | No hay beta |
| `desarrollador-frontend` | Firma de C3 y compromiso de no duplicar tipos; cronómetro que arranca en la primera interacción | día 4 de S1 | Discrepancias entre cliente y servidor sobre qué es "resuelto", que es el error más caro de depurar |
| `disenador-ux-ui` | Especificación de la pantalla de resultado (PR10) y textos de racha, gracia y anulación | fin de S1 | B-08 y B-10 devuelven una forma que hay que cambiar después |
| `analista-datos` | C7, taxonomía cerrada con `modo` obligatorio | fin de S1, tope S2 | La serie histórica nace sin `modo` y ningún umbral de apertura del segundo día se puede medir |
| `experto-legal` | Textos de consentimiento del correo, política de privacidad, retención y base legal del alias | fin de S5 | La beta con personas reales no puede empezar |
| `periodista-contenidos` | Copy del correo diario y voz de Sabueso en la página de erratas | fin de S5 | El correo sale sin voz propia, que es su única ventaja |
| `director-producto` | Confirmación de C4, C5 y de la decisión de §4.2 sobre el archivo y la racha | fin de S1 | Se implementa una política que luego hay que deshacer con datos ya escritos |

---

## 8. Compuertas

| Compuerta | Cuándo | Qué debe cumplirse | Qué se bloquea si no |
|---|---|---|---|
| **CB-1** | fin de S1 | Los nueve contratos firmados | La tabla de intentos y el tablero del frontend |
| **CB-2** | fin de S3 | Suite de reloj simulado verde en sus nueve casos | Cualquier promesa pública sobre la racha |
| **CB-3** | fin de S4 | ≥ 14 días programados con firma humana y certificado válido | La beta |
| **CB-4** | fin de S6 | Borrado en un clic, baja del correo en un clic y restauración probada | La entrada de personas reales |
| **CB-5** | fin de S8 | Cero incidencias de severidad 1, coste medido, esquema congelado | El lanzamiento público |

---

## 9. Operación

- **Cron.** `pg_cron` dentro de Supabase para todo lo que vive en la base de datos (vigilancia del depósito, purga de resultados caducados, recálculo de agregados, selección horaria del correo). GitHub Actions solo para la generación de casos, que necesita ejecutar el motor. Motivo: menos piezas, sin servidor propio y sin coste añadido.
- **Alertas, exactamente tres.** Caída del endpoint del caso del día o del guardado (que además crea la incidencia y concede el día); depósito de casos por debajo de 14 días; coste mensual proyectado por encima del presupuesto. Cualquier alerta que no obligue a actuar se retira: un canal con ruido es un canal apagado.
- **La alerta de tres reportes coincidentes** (PR2) no es una alerta de infraestructura sino de contenido, y es la única que notifica fuera de las dos revisiones diarias a hora fija. Es lo que sostiene el compromiso de 12 horas sin guardia nocturna.
- **Copias de seguridad.** Diarias del plan Pro con 7 días de retención, más un volcado semanal cifrado a almacenamiento propio. La restauración se **prueba** en staging en S6 y otra vez en S8, cronometrada y escrita: una copia sin restauración probada no es una copia.
- **Staging.** Proyecto Supabase idéntico y despliegue de vista previa por rama, con datos sintéticos, nunca con datos reales de jugadores. Las migraciones pasan siempre por staging antes que por producción.
- **Registros.** Los del servidor y los de la base de datos, 7 días, sin datos personales en el mensaje (identificadores, nunca correos).

---

## 10. Coste mensual estimado

Con la regla de arquitectura de que lo público se sirve desde CDN y de que la analítica tiene presupuesto de eventos.

| Servicio | Al lanzamiento (≈ 1.000-5.000 usuarios/mes) | A 50.000 usuarios/mes | Notas |
|---|---|---|---|
| Supabase Pro | 25 $ | 25 $ + ~10 $ de recursos | El plan gratuito no vale: no tiene copias diarias y pausa el proyecto |
| Vercel Pro | 20 $ | 20 $ | El plan gratuito prohíbe el uso comercial |
| Resend | 0-20 $ | 35 $ | Gratis hasta 3.000 correos/mes; con 3.000 suscriptores diarios son 90.000/mes |
| PostHog (UE) | 0 $ | 30-45 $ | Gratis hasta 1 M de eventos/mes. Con 10.000 activos diarios y **6 eventos por sesión**, ≈ 1,8 M/mes |
| Dominios y correo | ≈ 4 $ | ≈ 4 $ | Prorrateado |
| **Total** | **≈ 50-70 $ ≈ 45-65 €** | **≈ 105-120 $ ≈ 95-110 €** | |

**Las tres palancas si se acerca al techo**, en orden de uso: (1) bajar el presupuesto de eventos de PostHog a 4 por sesión y calcular en Postgres todo lo que sea agregado (es el único servicio que escala con el uso y sin tope); (2) muestrear las sesiones anónimas que no acusan; (3) revisar la caché de CDN antes que subir de plan, porque un fallo de caché en el endpoint del caso del día multiplica por mil las lecturas de base de datos.

**Regla escrita antes del dato:** si el coste proyectado supera 100 €/mes antes de los 50.000 usuarios mensuales, se recorta analítica, no producto.

---

## 11. Post-lanzamiento

### 11.1 Duelos por enlace (B-42)

`duelos` (`id` token opaco de 22 caracteres, `creador_id`, `numero_caso`, `modo`, `creado_en`, `expira_en` a 48 h, `max_participantes` 8, `estado`) y `duelo_participantes` (`duelo_id`, `usuario_id` o `alias` + token de invitado, `tiempo_servidor_ms`, `resultado`, `comprobaciones`, `sello`, `unido_en`).

Reglas que hacen que el duelo sea justo sin construir un anticheat serio: el tiempo que cuenta es **el del servidor** entre la primera interacción y la acusación; las comprobaciones extra de Premium se desactivan dentro del duelo; una sola participación por persona y duelo; el enlace caduca solo. Privacidad: solo el alias elegido, con longitud acotada y lista negra, nunca correo ni identificador de cuenta; la imagen OG del reto no lleva datos de nadie. Límites: crear 3 duelos al día en el tier gratuito, ilimitado en Premium, más límite por IP. La comparativa final es consciente del modo: en Expediente no hay "celdas mal colocadas", hay "casillas marcadas mal".

### 11.2 Premium: Stripe frente a merchant of record

| | **Stripe Billing** | **Paddle** | **Lemon Squeezy** |
|---|---|---|---|
| Quién vende | Nosotros | Paddle (merchant of record) | Lemon Squeezy (merchant of record) |
| Comisión típica | ≈ 1,5 % + 0,25 € (tarjeta UE) + Stripe Tax | ≈ 5 % + 0,50 € | ≈ 5 % + 0,50 $ |
| IVA de la UE | **Nuestro**: alta en OSS, declaración trimestral, facturas | Suyo | Suyo |
| Comisión efectiva sobre 19,99 €/año | ≈ 3 % | ≈ 7 % | ≈ 7 % |
| Comisión efectiva sobre 2,99 €/mes | ≈ 10 % | ≈ 20 % | ≈ 20 % |
| Herramientas de prueba | Las mejores del mercado (CLI de eventos y relojes de prueba para simular renovaciones y impagos) | Buenas, sin equivalente al reloj de prueba | Correctas |
| Precio libre nativo | No | No | **Sí** (lo necesita `PDF-CLASICO` según el cambio 25) |
| Riesgo específico | Carga administrativa que recae en el fundador | Aprobación previa de cuenta y pagos cada 15 días | Adquirida por Stripe: continuidad sin confirmar (§8.3 punto 3) |

**Recomendación: Paddle como merchant of record para Premium**, y Lemon Squeezy **solo** para los packs con precio libre, y solo si antes se confirma por escrito su continuidad. Los tres motivos, en orden: el equipo es una persona y el IVA de la UE con OSS es trabajo recurrente del recurso más escaso del proyecto; D-008 ya calculó el negocio **con** una comisión de merchant of record (1,53 €/mes netos por suscriptor), así que elegir Stripe no mejora el plan, solo lo cambia; y el volumen esperado no paga el trabajo administrativo.

**Umbral de reconsideración, escrito antes del dato:** se estudia pasar a Stripe directo con alta en OSS cuando la facturación bruta de suscripción supere **2.700 €/mes durante tres meses seguidos**, que es el punto en el que los ~3,5 puntos de diferencia de comisión pagan una gestoría. Es coherente con la hipótesis H6 de D-008: si la comisión efectiva del plan mensual supera el 18 % tres meses seguidos, se retira el mensual, se sube a 3,49 € o se pasa a pasarela directa.

**Lo que el backend construye en cualquiera de los tres casos:** tabla `suscripciones` con estados (`activa`, `en_gracia`, `cancelada_al_final`, `cancelada`, `reembolsada`), webhooks **idempotentes** apoyados en `webhooks_recibidos` con unicidad por `(proveedor, evento_id)` y procesamiento en transacción, período de gracia y reintentos de cobro, derechos por permiso y **nunca por confianza en el cliente**, cancelación en un clic dentro de la aplicación, y aviso de renovación por correo 7 días antes para el precio fundador. Las pruebas se hacen con eventos reales del entorno de pruebas del proveedor, incluyendo la entrega duplicada y la entrega desordenada, que es donde fallan todas las integraciones de pago.

### 11.3 Packs PDF (B-44)

Archivos en almacenamiento privado; entrega por **enlace firmado con caducidad de 72 h y 5 descargas**, contador en `descargas_firmadas`; `X-Robots-Tag: noindex` en la respuesta y ruta fuera del sitemap; nombre de archivo y metadatos **sin marca ajena** (`casos-de-deduccion-para-imprimir.pdf`, nunca la marca del competidor en el campo de título). Lo que se indexa es la página que pide el correo, no el archivo. La hoja de trabajo en blanco es la excepción: gratis, sin correo e indexable.

---

## 12. Ruta crítica y riesgos

**La ruta crítica tiene dos hilos y se cruzan en la semana 4:**

`C1 certificado (S1) → B-09 Sabueso + B-10 acusar (S2) → B-13 racha (S3) → B-15 escalafón (S3) → beta`

`C9 ingestión (S1) → B-17 ingesta (S4) → B-18 firma humana (S4) → B-19 cron y depósito (S4) → CB-3 → beta`

Nada más está en la ruta crítica. El correo, la analítica y `/r/[id]` pueden moverse una semana sin mover la beta; la racha, la ingestión y el certificado no.

| Id | Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|---|
| **R-01** | **Discrepancia de fecha sin resolver.** `supuestos.md` fija el lanzamiento en las semanas 9-10; `propuesta-jugabilidad.md` §7 decisión 3 recomienda las semanas 12-14 con el interrogatorio y el escalafón dentro | Alta | Alto | Este plan se ejecuta contra las semanas 9-10, que es el supuesto vigente. **Lo decide el fundador antes del final de S2**, porque a partir de S3 el escalafón y el jueves de Expediente empiezan a consumir la holgura. Si se elige la 12-14, el backend no gana alcance: gana pruebas y depósito de casos |
| **R-02** | El certificado (C1) llega tarde o cambia después de S1 | Media | **Muy alto** | Dobles de prueba firmados desde el día 3; el retrofit está cifrado por el propio motor en tres días frente a medio. Si llega en S4, la beta sale con Escena y sin escalafón, **nunca sin racha** |
| **R-03** | El depósito de casos no llega a 14 días con firma humana | Media | Alto | Alerta automática desde S4 (B-19); la firma humana es 15-30 min diarios del fundador y está presupuestada; si falla, la beta se abre con 10 días y se avisa |
| **R-04** | La racha se implementa antes de que C5 esté cerrada | Media | Alto | Es exactamente lo que PR3 advierte que multiplica el coste. Compuerta CB-1 y orden explícito de tareas: B-13 no arranca hasta que C5 tenga firma |
| **R-05** | Coste de PostHog fuera de control al crecer | Media | Medio | Presupuesto de eventos comprobado en CI, agregados en Postgres, alerta de coste. Es el único servicio del stack que escala sin tope |
| **R-06** | Abuso del alta anónima (cuentas infladas, cuota agotada) | Media | Medio | Captcha invisible en el alta, límites por IP, purga a los 12 meses de inactividad |
| **R-07** | Una errata real en la primera semana sin el circuito rodado | Media | **Muy alto** para la marca | El simulacro de B-34 se hace **con la beta**, no en producción; la respuesta inmediata al reporte y la racha reparada sola son el diferencial de PR2, y si no funcionan el día 1 el argumento de portada se cae |
| **R-08** | El borrado en un clic no está listo cuando entran personas reales | Baja | **Muy alto** legalmente | Compuerta CB-4, con prueba automática que cuenta filas por persona en todas las tablas |
| **R-09** | La política de husos abre un hueco para "cobrar" días de racha | Baja | Medio | Ya cerrado en C5 con el límite de ≥ 5 h y una vez cada 30 días, y con dos de los nueve casos de la suite dedicados a intentarlo |
| **R-10** | Premium se construye antes de tiempo y consume la fase 2 | Media | Medio | Premium está **condicionado** a las tres métricas del catálogo a los 60 días. B-43 no arranca sin ellas; B-41 (media jornada) sí, para no decidir la pasarela con prisa |

---

*Este plan no modifica el catálogo ni las decisiones registradas. Las tres decisiones que necesita del fundador o del director de producto están señaladas en §4.2 (archivo y racha), §7 (confirmación de C4 y C5) y R-01 (fecha de lanzamiento).*
