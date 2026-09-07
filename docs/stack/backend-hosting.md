# Estudio de stack: backend, base de datos, autenticación, hosting, correo, analítica, pagos y observabilidad

Autor: `desarrollador-backend`. Fecha: 7 de septiembre de 2026.
Encargo: estudio en profundidad del stack con datos de precios y límites de 2026, criterios con peso declarado, coste a 1.000 / 10.000 / 50.000 / 200.000 usuarios mensuales y recomendación por categoría frente al plan vigente.
Base: `docs/contexto-proyecto.md`, `docs/roadmap/plan-backend.md`, `docs/catalogo-productos.md` v1.2, `docs/analisis-estrategico.md` §4.4, `docs/decisiones.md` (D-006 a D-011).

**Alerta D-006:** este estudio no cumple ninguno de los cinco disparadores de registro de marca (sin usuarios, sin prensa, sin conversación B2B, sin tercero con nombre parecido). No hay nada que avisar hoy. La vigilancia sigue en B-29, como dice el plan.

> **Resumen de lo que este estudio cambia.** El plan vigente acierta en el 80 % de las decisiones y falla en el presupuesto. Con la hipótesis de uso que ahora declara el fundador (**12 sesiones por usuario y mes**, el doble de la que había implícita en `plan-backend.md` §10), el stack elegido cuesta **114 €/mes a 50.000 usuarios, no 95-110 €**, y eso ya contando con la palanca de analítica que el plan guardaba como reserva. Hay además dos acantilados de coste que el plan no ve —los usuarios activos mensuales de Supabase y las peticiones de borde de Vercel— y dos hallazgos de 2026 que cambian conclusiones ya escritas: **Stripe Managed Payments** (Stripe como *merchant of record* desde abril de 2026) y las **cuatro subidas de precio de Hetzner** en lo que va de año. La recomendación es **mantener Supabase, mantener PostHog con un presupuesto de eventos mucho más duro, mantener Resend hasta los 50.000, cambiar la pasarela recomendada de Paddle a Stripe Managed Payments y añadir la línea de observabilidad que el presupuesto no tenía.**

---

## 1. Criterios y pesos

Los pesos se declaran antes de mirar ningún dato, como manda la casa. Suman 100.

| # | Criterio | Peso | Por qué ese peso |
|---|---|---|---|
| 1 | **Residencia de datos en la UE y RGPD** (región del dato, contrato de encargado, subencargados, CLOUD Act) | **20** | Es requisito de la compuerta CB-4 y de `experto-legal`. Un proveedor sin región europea no entra, cueste lo que cueste. Producto para consumidores españoles y latinoamericanos, con datos de menores excluidos por diseño pero con perfiles de juego que sí son datos personales |
| 2 | **Coste real a 50.000 usuarios mensuales** | **20** | Es el único número contractual del proyecto: `plan-backend.md` §1 punto 7 y §10 fijan < 100 €/mes hasta 50.000 usuarios. Los escenarios de 1.000, 10.000 y 200.000 se puntúan, pero el que decide es el de 50.000 |
| 3 | **Dependencia del proveedor y plan de salida** | **15** | Un solista no puede permitirse una migración de seis semanas. Se mide en días de agente y en pérdida de negocio, no en sensación |
| 4 | **Madurez y estabilidad de precios** | **10** | Con presupuesto de 100 € y un proveedor que sube un 150 %, el presupuesto deja de existir. 2026 ha dado ejemplos reales de las dos cosas |
| 5 | **Anticheat: escritura solo por servidor y RLS o equivalente** | **10** | Decisión de arquitectura 2 del plan. La solución no viaja al cliente y los intentos los escribe `service_role` |
| 6 | **Autenticación anónima con ascenso a cuenta** | **8** | Decisión de arquitectura 3. Sin ascenso nativo hay que construir fusión de progreso, que es B-26 multiplicado por tres |
| 7 | **Operación sin guardias: cron fiable, copias y restauración probada** | **7** | Requisito explícito del encargo. Incluye publicación diaria y la incidencia automática de B-23 |
| 8 | **Latencia desde España y LatAm** | **5** | Importa poco porque el caso del día se sirve de CDN. Solo la acusación es una llamada síncrona obligatoria |
| 9 | **Productividad de agentes de IA** (documentación, tipado, ejemplos) | **3** | Real pero secundario: D-009 dice que la capacidad de desarrollo no es la restricción |
| 10 | **Realtime para duelos futuros** | **2** | **Peso deliberadamente bajo y justificado:** `catalogo-productos.md` define `DUELOS` como *reto asíncrono por enlace* con caducidad de 48 h y sala de 8. No hay tiempo real, ni chat, ni emparejamiento. Elegir plataforma por una necesidad de realtime que el producto no tiene sería el error clásico de esta comparativa |

**Dos reglas de descarte, aplicadas antes de sumar puntos.** Son requisitos duros del encargo, no criterios ponderables, y por eso van fuera de la tabla:

- **R1 · Residencia.** Cualquier opción sin región europea real para el dato de identidad queda fuera. Solo una la incumple: **Firebase**, porque Firebase Authentication no tiene opción de residencia en la UE.
- **R2 · Sin guardias.** Cualquier opción que traslade al fundador el parcheado, las copias, la restauración y la respuesta a incidentes queda fuera. La incumplen **Postgres autoalojado en Hetzner con Coolify**, **PocketBase** y **Umami autoalojado**. Se puntúan igualmente y se muestran en las tablas porque su puntuación es informativa —salen altas, y conviene ver por qué no se eligen—, pero están excluidas por regla.

Sin R2, la tabla de §3.1 recomendaría autoalojar. Con R2, no. Merece decirse en voz alta: **la comparativa de coste puro da la razón al autoalojamiento, y lo que lo descarta es el modelo operativo de una persona sola, no el dinero.**

---

## 2. Hipótesis de uso (el modelo que produce todos los números)

Todo lo que sigue sale de aquí. Si una hipótesis cambia, cambian las tablas.

| Hipótesis | Valor | Origen |
|---|---|---|
| Sesiones por usuario y mes | **12** | Encargo del fundador. **Nota: `plan-backend.md` §10 asumía implícitamente 6** (10.000 activos diarios × 30 días ÷ 50.000 mensuales). Esta es la causa principal de la desviación del presupuesto |
| Llamadas autenticadas al servidor por sesión | 4 (abrir, guardar × 2, acusar) | `plan-backend.md` §5, B-07 y B-10 |
| Lecturas de base de datos del caso del día por sesión | ≈ 0 | Decisión de arquitectura 1: CDN con ≤ 5 lecturas por cada 10.000 peticiones (B-20) |
| Eventos de analítica por sesión | **6** en el presupuesto C7 vigente | `plan-backend.md` §10 y C7 |
| Egress de CDN por sesión | ≈ 150 KB | PWA con activos cacheados tras la primera visita |
| Egress de base de datos por sesión | ≈ 20 KB | JSON de estado, sin contenido público |
| Suscriptores de correo | **6 %** de los usuarios mensuales | `catalogo-productos.md`: 3.000 suscriptores en el mes 3 con ~50.000 usuarios |
| Correos por suscriptor y mes | 30 | Un correo diario, `NEWSLETTER` |
| Filas de `intentos` por usuario y mes | ≈ 12 | Unicidad `(usuario, numero_caso)`: como máximo una por día jugado |
| Tipo de cambio de trabajo | 1 $ = 0,92 € | Si el euro se debilita, todas las cifras en euros suben. Es un riesgo de presupuesto que nadie del equipo controla |

**Magnitudes derivadas:**

| Magnitud mensual | 1.000 usuarios | 10.000 | 50.000 | 200.000 |
|---|---|---|---|---|
| Sesiones | 12.000 | 120.000 | 600.000 | 2.400.000 |
| Llamadas autenticadas | 48.000 | 480.000 | 2,4 M | 9,6 M |
| Peticiones de borde (≈ 15/sesión) | 180.000 | 1,8 M | 9,0 M | 36 M |
| Eventos de analítica a 6/sesión | 72.000 | 720.000 | **3,6 M** | **14,4 M** |
| Egress de CDN | 1,8 GB | 18 GB | 90 GB | 360 GB |
| Egress de base de datos | 0,25 GB | 2,5 GB | 12 GB | 48 GB |
| Suscriptores / correos enviados | 60 / 1.800 | 600 / 18.000 | 3.000 / **90.000** | 12.000 / **360.000** |
| Filas nuevas de `intentos` | 12.000 | 120.000 | 600.000 | 2,4 M |
| Usuarios activos mensuales de Auth | 1.000 | 10.000 | 50.000 | **200.000** |

Las tres cifras en negrita son las que rompen presupuestos. Se tratan en §4.

---

## 3. Matriz por categoría

Puntuación de 0 a 5 en cada criterio, ponderada por §1. Se puntúa la opción **para este producto**, no en abstracto.

### 3.1 Backend, base de datos y autenticación

Escala de 0 a 5 por criterio. Máximo teórico 500.

| Opción | UE/RGPD (20) | Coste 50k (20) | Salida (15) | Precios (10) | RLS/anticheat (10) | Anónimo (8) | Operación (7) | Latencia (5) | IA (3) | Realtime (2) | **Total /500** |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Supabase (Postgres, Auth, Edge Functions, cron, Realtime, Storage)** | 5 | 4 | 4 | 4 | **5** | **5** | 4 | 4 | **5** | 5 | **443** |
| Postgres autoalojado en Hetzner + Coolify | **5** | **5** | **5** | **1** | 5 | 2 | **1** | 5 | 3 | 3 | *398 · fuera por R2* |
| PocketBase autoalojado | 5 | 5 | 4 | 4 | 3 | 3 | **1** | 5 | 1 | 3 | *395 · fuera por R2* |
| **Neon + Drizzle + Better Auth** | 5 | 3 | **5** | 3 | 4 | 2 | 3 | 4 | 3 | 1 | **373** |
| **Cloudflare D1 + Durable Objects + Workers** | 4 | **5** | 2 | 4 | 2 | 2 | 3 | **5** | 3 | **5** | **351** |
| **PlanetScale Postgres + Better Auth** | 4 | 2 | 4 | 3 | 4 | 2 | 3 | 3 | 3 | 1 | **313** |
| **Appwrite Cloud** | 3 | 4 | 2 | 3 | 3 | 4 | 3 | 3 | 2 | 3 | **310** |
| **Convex** | 2 | 2 | 1 | 2 | 4 | 4 | 4 | 3 | 4 | **5** | **252** |
| Firebase / Firestore | **0** | 3 | 1 | 3 | 2 | 5 | 4 | 3 | 4 | 5 | *230 · fuera por R1* |
| Clerk como capa de auth (con cualquier BD) | 3 | **0** | 2 | 3 | — | 4 | 4 | 4 | 4 | — | *fuera por coste, ver abajo* |

**Lo que sostiene cada nota:**

- **Supabase.** Regiones europeas suficientes: Fráncfort (`eu-central-1`), **París (`eu-west-3`)**, Estocolmo, Zúrich, Londres, Irlanda. El inicio de sesión anónimo es una fila real en `auth.users` que un magic link **asciende sin fusión**, que es exactamente la decisión 3 del plan; ningún otro proveedor de la lista lo da hecho. RLS de Postgres es el mecanismo más fuerte de la comparativa para la regla "ninguna política de escritura en `intentos`". `pg_cron` viene activado por defecto en todos los planes, con la limitación operativa de **no más de 8 trabajos concurrentes y 10 minutos por trabajo** —relevante para el correo, ver §4.4—. Generación de tipos TypeScript desde el esquema y un corpus de ejemplos enorme: es la mejor opción del estudio para el criterio 9. **Puntos flojos:** el coste de MAU a partir de 100.000 (§4.1), el coste por rama de vista previa —una rama viva en cómputo Micro cuesta unos 9,7 $/mes y **el crédito de cómputo de 10 $ del plan no la cubre**, ver la decisión E-5 de §8— y que PITR cuesta 100 $/mes por cada 7 días de retención, lo que lo saca del presupuesto del MVP.
- **Neon + Drizzle + Better Auth.** Tras la compra por Databricks los precios **bajaron** (almacenamiento de 1,75 a 0,35 $/GB-mes) y desde diciembre de 2025 **no hay mínimo mensual**: 0,106 $/CU-hora en el plan Launch. Es el mejor plan de salida del estudio: Postgres puro, sin capa propietaria. Y **Auth.js está en modo mantenimiento desde que su equipo se unió a Better Auth en septiembre de 2025**, así que Better Auth es la elección obvia si se va por aquí. El problema es lo que hay que construir: magic link, sesión anónima, ascenso de anónimo a cuenta, límites de alta, cron, almacenamiento de ficheros. Son **6-10 días de agente** que en Supabase son uno (B-04), y la responsabilidad de seguridad de la autenticación pasa a ser nuestra. Por eso pierde en el criterio 6 pese a ganar en el 3.
- **Cloudflare D1 + Durable Objects + Workers.** Lo más barato con diferencia (Workers de pago 5 $/mes con 10 M de peticiones y 30 M de CPU-ms; D1 a 0,001 $/M lecturas y 1 $/M escrituras; Durable Objects a 0,15 $/M peticiones más duración) y lo más rápido desde LatAm. Los Durable Objects admiten **restricción jurisdiccional `eu`**, que es una garantía de residencia mejor que la de casi todo el resto. Pero: **no hay RLS**, la seguridad de datos es código en el Worker; no hay auth anónima con ascenso; D1 es SQLite con límites de tamaño por base y sin la potencia de consulta que la racha necesita (`plan-backend.md` §4.2 pide una función SQL pura sobre tres tablas con ventanas); y salir de Durable Objects es reescribir. Buena plataforma, mal encaje con este esquema.
- **Convex.** **Se descarta por Europa, no por producto.** Las regiones europeas existen, pero el precio es **1,3× el de Estados Unidos y el uso incluido de los planes Starter y Pro no se aplica a los despliegues europeos**, que se facturan íntegramente por consumo. Es decir: en la UE, Convex es un producto distinto y peor que el que anuncia. Añádase que la salida es una reescritura completa de funciones y esquema.
- **Postgres autoalojado en Hetzner con Coolify.** Es la opción más barata a cualquier escala y la de mejor residencia (servidores en Alemania o Finlandia, empresa alemana, sin CLOUD Act). Y aun así se rechaza por dos motivos duros. El primero es el requisito explícito de **no tener guardias**: parcheado, copias, restauración probada, monitorización y respuesta a incidentes pasan a ser trabajo del fundador, y el plan ya presupuesta 27 horas suyas en diez semanas sin margen. El segundo es que la premisa de estabilidad se ha caído en 2026: **Hetzner ha hecho cuatro acciones de precio este año** —tarifas de alta en febrero, subida general del 30-37 % el 1 de abril, tarifas de alta en dedicados el 29 de abril y, el **15 de junio de 2026, subidas del 113-176 % en las líneas CPX y CCX** de Alemania y Finlandia—. El argumento "autoalojar es barato y estable" ha dejado de ser cierto en la mitad que importa.
- **Firebase / Firestore.** **Descartado en el criterio 1.** Firestore tiene multirregión `eur3`, pero **Firebase Authentication no tiene opción de residencia en la UE**, y la autenticación es precisamente el dato de identidad de todos nuestros jugadores. Sumado a que toda la infraestructura pertenece a una sociedad estadounidense sujeta al CLOUD Act y a que el modelo de documentos no soporta la consulta de racha sin duplicar datos, no hay conversación posible.
- **Clerk.** **Descartado por coste.** 50.000 MAU gratis y después **0,02 $ por MAU**: con un producto cuyo modelo es "cuenta anónima desde el primer toque", a 200.000 usuarios mensuales son unos 3.000 $/mes solo de autenticación. Es treinta veces el presupuesto entero.
- **PocketBase y Appwrite.** PocketBase es excelente para prototipos y horrible para lo que pide este proyecto: un solo binario, SQLite, sin réplica, con copias y actualizaciones a mano; el mismo problema de guardias que Hetzner sin la ventaja de Postgres. Appwrite Cloud (Pro desde 15 $/mes) es un producto razonable y con buena historia de autoalojamiento, pero su corpus de ejemplos es pequeño, su modelo de permisos por documento es más débil que RLS para nuestro caso y no aporta nada que Supabase no tenga.

**Ganador de la categoría: Supabase (443 sobre 500).** No por poco: gana los criterios 5, 6 y 9 de forma clara y no pierde ninguno de forma grave. Las dos opciones que se le acercan —Hetzner con Coolify (398) y PocketBase (395)— lo hacen ganando coste y salida y perdiendo operación, y están excluidas por la regla R2. Dicho de otra forma: **el segundo mejor backend de esta tabla es el que exige guardias, y por eso la regla R2 hay que tenerla escrita antes de puntuar y no después.** La siguiente opción realmente elegible, Neon con Better Auth, queda 70 puntos por detrás.

### 3.2 Hosting de la web

Aquí no aplican los criterios 5, 6 y 10 (RLS, autenticación anónima y realtime son de la capa de datos). Se puntúa sobre los siete criterios restantes, 80 puntos de peso, máximo teórico 400.

| Opción | UE/RGPD (20) | Coste 50k (20) | Salida (15) | Precios (10) | Operación (7) | Latencia ES/LatAm (5) | IA (3) | **Total /400** |
|---|---|---|---|---|---|---|---|---|
| **Cloudflare Workers / Pages (OpenNext)** | 4 | **5** | 3 | 4 | 4 | **5** | 3 | **327** |
| VPS Hetzner + Coolify | **5** | **5** | **5** | **1** | **1** | 4 | 3 | *321 · fuera por R2* |
| **Fly.io** | 4 | 3 | 4 | 4 | 2 | 4 | 3 | **283** |
| **Vercel Pro** | 3 | 3 | 4 | 3 | **5** | 4 | **5** | **280** |
| **Railway** | 3 | 3 | 4 | 4 | 3 | 3 | 3 | **265** |
| **Render** | 3 | 3 | 4 | 4 | 3 | 3 | 3 | **265** |
| **Netlify** | 3 | 2 | 4 | 3 | 4 | 3 | 4 | **245** |

- **Vercel** cambió de modelo en 2025-2026: Fluid compute con **precio por CPU activa** (0,128 $/CPU-hora en las regiones estándar), que solo cobra el tiempo en el que el código está realmente en CPU. Para nuestro perfil —funciones que esperan a Postgres— el cambio es una **rebaja**, no una subida. El plan Pro son 20 $/mes por asiento que despliega, **con 20 $ de crédito de uso incluidos**, 1 TB de ancho de banda y 10 M de peticiones de borde que no consumen crédito. Con un solo asiento y nuestro modelo, la factura es 20 $ hasta pasados los 50.000 usuarios. **Su punto flojo es el criterio 1**: se pueden fijar las funciones en `fra1`, `cdg1` o `dub1`, pero el plano de control, el soporte y los datos de cuenta están en Estados Unidos y Vercel Inc. es una sociedad estadounidense. El contrato de encargado y las cláusulas contractuales tipo cubren el trámite, y `experto-legal` tiene que verlo, pero no es residencia europea de verdad.
- **Cloudflare Workers** gana la categoría por coste y por latencia. 5 $/mes cubren 10 M de peticiones; a 50.000 usuarios estamos en 9 M. La red tiene presencia en Madrid, Barcelona, Valencia, Bilbao y Málaga, y muchos más puntos en México, Colombia, Chile y Argentina que cualquiera de sus rivales: para el caso del día servido de CDN, que es el 90 % de nuestras peticiones, es la diferencia entre 20 ms y 150 ms para un jugador de Bogotá. Cloudflare Inc. es igualmente estadounidense, pero la Data Localization Suite y las jurisdicciones de Durable Objects dan controles más finos. **Su riesgo real es técnico:** Next.js sobre Workers mediante OpenNext funciona, pero la regeneración incremental y la revalidación bajo demanda —de las que dependen `/casos/<n>`, `/erratas` y el archivo— son la parte menos madura del adaptador, y el corpus de ejemplos es pequeño (criterio 9 en 3). Presupuestar **3-5 días de agente extra** y una tarde de sustos.
- **Netlify, Fly.io, Railway, Render.** Netlify incluye 125.000 invocaciones de función y cobra 25 $/M después, lo que a 2,4 M de llamadas autenticadas es caro; queda último. Fly, Railway y Render son plataformas de contenedores: mejores si algún día hay un proceso largo (el motor en batch ya vive en GitHub Actions), peores en CDN y en operación. **Fly.io empata técnicamente con Vercel (283 frente a 280)**, y conviene decir dónde está la diferencia real, porque en la tabla es ruido: Vercel gana el criterio 9 con un 5 frente a un 3 y da la regeneración incremental sin configurar, que es exactamente lo que un calendario de nueve semanas necesita; Fly gana en precio y en no ser una caja negra. **Railway y Render son las salidas honestas** si algún día hay que dejar Vercel sin ir a Cloudflare: contenedor, base de datos al lado, precio previsible.

**Ganador de la categoría por puntos: Cloudflare Workers (327 sobre 400).** La recomendación de §7.2 **no es esa**, y el motivo se explica allí: es una decisión de calendario, no de tabla.

### 3.3 Correo transaccional y diario

Seis criterios aplicables, 75 puntos de peso, máximo teórico 375. La columna "coste a 200.000" es informativa y no puntúa: a esa escala la migración de proveedor cuesta un día y medio, así que no debe decidir hoy.

| Opción | UE/RGPD (20) | Coste 50k (20) | Salida (15) | Precios (10) | Operación (7) | IA (3) | **Total /375** | *(Coste 200k)* |
|---|---|---|---|---|---|---|---|---|
| **Amazon SES (eu-west-1)** | 4 | **5** | **5** | **5** | 2 | 3 | **328** | *≈ 36 $* |
| **Resend** | 3 | 4 | **5** | 3 | **5** | **5** | **295** | *≈ 200 $* |
| **Brevo** | **5** | 2 | 4 | 4 | 4 | 3 | **277** | *≈ 300 $* |
| **Postmark** | 3 | 1 | 5 | 4 | **5** | 4 | **242** | *≈ 600 $* |
| **Loops** | 2 | 2 | 4 | 3 | 4 | 3 | **207** | *≈ 300 $* |

Precios de 2026 para nuestro volumen: **Resend** gratis hasta 3.000 correos/mes *con tope de 100 al día* (relevante: con 60 suscriptores caben justo, con 200 no), 20 $ hasta 50.000, unos 35 $ hasta 100.000, y el plan Scale desde 90 $ (100.000) hasta 1.150 $ (2,5 M). **SES** cuesta 0,10 $ por cada 1.000 correos en cualquier región, más transferencia de datos. **Postmark** ronda los 85 $ por 50.000 y **Brevo** unos 74 $, ambos fuera de discusión para un correo diario masivo. **Loops** cobra por contacto (49 $/mes de 1.000 a 5.000 suscriptores), lo que a 12.000 suscriptores es peor que Resend.

Traducido a nuestros escenarios: 90.000 correos/mes a 50.000 usuarios cuestan **35 $ en Resend y 9 $ en SES**; 360.000 correos a 200.000 usuarios cuestan **unos 200 $ en Resend y 36 $ en SES**.

**Sobre residencia**, el dato que hay que llevar a `experto-legal`: **Resend no tiene un plan íntegramente europeo**. El envío puede originarse en Irlanda y la residencia europea es de plan Pro en adelante, pero los datos de cuenta y los registros permanecen en Estados Unidos. Como los registros de envío contienen direcciones de correo de suscriptores, esto es un tratamiento con transferencia internacional que hay que declarar en la política de privacidad y cubrir con cláusulas contractuales tipo. La retención de registros subió a 30 días en todos los planes en marzo de 2026, lo que empeora ligeramente el argumento de minimización. **Brevo es el único de la lista con sede y datos íntegramente en la UE** (Francia); si `experto-legal` considera que la transferencia es un problema, Brevo es la salida, a cambio de peor API y más coste.

**Ganador por puntos: SES. Ganador para el MVP: Resend**, por las razones de §7.3.

### 3.4 Analítica de producto

Aquí los criterios 5 y 6 (RLS y autenticación anónima) no aplican y se sustituyen por uno específico de la categoría: **utilidad para los KPI declarados en `docs/contexto-proyecto.md`** —retención D1/D7/D30, punto de abandono por paso, tasa de compartir, conversión— con el peso combinado de ambos, **18**. Total de pesos 90, máximo teórico 450.

| Opción | UE/RGPD (20) | Coste 50k (20) | Salida (15) | Precios (10) | Utilidad KPI (18) | Operación (7) | **Total /450** |
|---|---|---|---|---|---|---|---|
| Umami autoalojado | **5** | **5** | **5** | **5** | 2 | **1** | *368 · fuera por R2* |
| **PostHog Cloud EU** | **5** | 2 | 4 | 2 | **5** | **5** | **345** |
| **Plausible (nube UE)** | **5** | 3 | 4 | 4 | 1 | **5** | **313** |
| **Mixpanel** | 3 | 1 | 3 | 2 | **5** | 4 | **263** |
| **GA4** | 1 | **5** | 2 | 3 | 3 | 4 | **262** |

- **PostHog Cloud EU** está en AWS Fráncfort (`eu-central-1`) como instancia completamente independiente, sin transferencia de datos a Estados Unidos, con generador de contrato de encargado autoservicio. Es lo único de la lista que mide de una pieza los embudos, la retención por cohorte, los indicadores de funcionalidad y el punto de abandono por paso, que son literalmente las métricas de `contexto-proyecto.md`. **Su problema es el precio y es serio:** primer millón de eventos gratis y después 0,00005 $/evento entre 1 y 2 M, 0,0000343 $ entre 2 y 15 M. Y un detalle que el plan no contempla: **los eventos identificados (con perfil de persona) cuestan del orden de 4 veces más que los anónimos** —unos 0,000198 $/evento, con su propio millón gratis—. Con nuestra taxonomía C7 de 6 eventos por sesión, 50.000 usuarios producen 3,6 M de eventos, que son **105 $/mes**; 200.000 usuarios producen 14,4 M, que son **475 $/mes**. Es, con enorme diferencia, el servicio más caro del stack y el único sin techo.
- **Plausible** es europeo (Estonia), sin cookies y honesto, pero mide páginas y objetivos, no embudos ni cohortes. No sirve para "en qué paso se atasca el jugador", que es el dato que decide si un caso está mal calibrado. Como complemento del SEO sí; como analítica de producto no.
- **Umami autoalojado** es gratis, europeo si lo alojamos en Europa y nuestro. Pero vuelve a introducir un servidor que mantener y su análisis de producto es pobre.
- **GA4** pierde el criterio 1: el uso de Google Analytics ha sido declarado contrario al RGPD por varias autoridades europeas y su encaje sigue siendo defendible pero incómodo, justo en un producto cuya portada promete honestidad. Además contamina la relación con `experto-legal` sin aportar nada que PostHog no dé.
- **Mixpanel** pasó a cobrar 0,28 $ por cada 1.000 eventos tras el primer millón: a 3,6 M serían unos 730 $/mes. Absurdo para nosotros.

**Ganador: PostHog Cloud EU, con el presupuesto de eventos reescrito.** Ver §4.2, que es la sección más importante del documento.

### 3.5 Pagos con IVA de la UE (fase 2)

Precios efectivos calculados sobre nuestros dos puntos de precio reales: **2,99 €/mes** y **19,99 €/año** (`catalogo-productos.md`, `PREMIUM`).

| Opción | Comisión nominal | Sobre 2,99 € | Sobre 19,99 € | IVA UE | Herramientas de prueba | Salida |
|---|---|---|---|---|---|---|
| **Stripe Managed Payments** (Stripe como MoR) | 1,5 % + 0,25 € (tarjeta EEE) **+ 3,5 %** | **0,40 € · 13,3 %** | **1,25 € · 6,3 %** | Suyo | **Las mejores del mercado** (CLI, relojes de prueba) | **Interna** hacia Stripe directo |
| **Paddle** | 5 % + 0,50 € | 0,65 € · **21,7 %** | 1,50 € · 7,5 % | Suyo | Buenas | Recobro de tarjetas |
| **Lemon Squeezy** | 5 % + 0,50 $ | ≈ 0,64 € · 21,4 % | ≈ 1,49 € · 7,5 % | Suyo | Correctas | Migración guiada a Stripe |
| **Polar.sh** (organizaciones nuevas) | 5 % + 0,50 $ | ≈ 0,64 € · 21,4 % | ≈ 1,49 € · 7,5 % | Suyo | Correctas | Recobro de tarjetas |
| **Stripe directo + Stripe Tax** | 1,5 % + 0,25 € **+ 0,5 %** | 0,31 € · **10,4 %** | 0,65 € · **3,3 %** | **Nuestro** (alta en OSS, declaración trimestral) | Las mejores | — |

**Los cuatro hechos de 2026 que cambian la recomendación de `plan-backend.md` §11.2:**

1. **Stripe lanzó su propio *merchant of record*.** Se llama **Stripe Managed Payments**, nació de la compra de Lemon Squeezy, entró en beta privada en abril de 2025 y **en abril de 2026 pasó a la API** como indicador `managed_payments` en Checkout Sessions y Payment Links. Cobra **3,5 % sobre las tarifas de proceso normales**, que en tarjeta del EEE son 1,5 % + 0,25 €. Total: **5 % + 0,25 €**, es decir, **el mismo porcentaje que Paddle con la mitad de la comisión fija**.
2. **La comisión fija es lo que mata nuestro plan mensual.** Sobre 2,99 €, los 0,50 € de Paddle, Lemon Squeezy y Polar son por sí solos el **16,7 %** del precio. Con Stripe Managed Payments son el 8,4 %. Esto no es un matiz: es la diferencia entre un plan mensual con 21,7 % de comisión y uno con 13,3 %, y `docs/decisiones.md` D-008 hipótesis H6 ya dice que **si la comisión efectiva del mensual pasa del 18 % tres meses seguidos se retira el mensual o se sube a 3,49 €**. Con Paddle nacemos incumpliendo H6 desde el primer día.
3. **Paddle pide hablar con ventas para productos por debajo de 10 $.** Nuestro plan mensual es 2,99 €. Es decir, Paddle puede no aceptarnos en condiciones estándar, y el plan lo recomienda sin haberlo comprobado. Esto convierte B-41 de "media jornada de comparativa" en "media jornada de comparativa más una conversación comercial con resultado incierto".
4. **Polar subió sus tarifas el 27 de mayo de 2026**, de 4 % + 0,40 $ a **5 % + 0,50 $** para organizaciones nuevas (las anteriores conservan la tarifa antigua si no pasan a un plan de pago). Su ventaja de precio, que era su único argumento, ha desaparecido. **Lemon Squeezy** sigue operando y aceptando altas, pero su equipo está construyendo Stripe Managed Payments, su consejero delegado lo ha llamado públicamente "el futuro" y desde enero de 2026 hay ruta de migración pública desde Lemon Squeezy hacia él. Es un producto en modo transición: sirve, pero no se elige hoy para cinco años.

**Y el hecho que no cambia:** el IVA de la UE con alta en OSS y declaración trimestral es trabajo recurrente del recurso más escaso del proyecto. La aritmética que confirma el umbral del plan: a 50.000 usuarios con 1,2 % de conversión y mezcla 55/45 anual/mensual son unos 600 suscriptores y ~1.357 €/mes brutos; la diferencia entre un MoR al 5 % + 0,25 € y Stripe directo con Stripe Tax es de unos **110-120 €/mes**, que es lo que cuesta una gestoría. **El umbral de 2.700 €/mes brutos durante tres meses seguidos que fija `plan-backend.md` §11.2 es correcto y se mantiene.** Lo que cambia es con qué se llega hasta él.

**Ganador: Stripe Managed Payments**, con Paddle como alternativa si Stripe Managed Payments no admite todavía vendedores establecidos en España o si el proceso de alta se atasca. Ver §7.5.

### 3.6 Errores y observabilidad

Los criterios 5, 6, 8 y 10 no aplican; se sustituyen por uno específico: **cubre B-23 (incidencia automática por caída de ≥ 20 min) y B-29 (panel de salud y tres alertas)**, con peso combinado **17**. Total de pesos 82, máximo teórico 410.

| Opción | UE/RGPD (20) | Coste (20) | Salida (15) | Cubre B-23 y B-29 (17) | Operación (7) | IA (3) | **Total /410** |
|---|---|---|---|---|---|---|---|
| **Sentry (región UE, `de.sentry.io`) + Better Stack (monitor)** | **5** | 4 | 4 | **5** | **5** | 4 | **372** |
| **Better Stack solo** (errores, registros, monitor y avisos en un paquete) | 4 | 4 | 4 | **5** | **5** | 3 | **349** |
| **Solo registros nativos de Vercel y Supabase** | 4 | **5** | **5** | **1** | 3 | 2 | **299** |
| **Highlight** | 3 | 4 | 3 | 3 | 4 | 3 | **273** |

- **Sentry tiene región europea en Alemania (`de.sentry.io`), disponible en todos los planes incluido el gratuito Developer.** Un detalle operativo crítico: **la región se elige al crear la organización y es irreversible**; no hay migración posterior. Si se crea la cuenta en `sentry.io` por inercia, se pierde el argumento de residencia para siempre. El plan Team son 26 $/mes con 50.000 errores; el gratuito Developer basta al lanzamiento.
- **Better Stack** incluye 100.000 excepciones al mes gratis, es compatible con el SDK de Sentry —lo que hace la salida trivial en ambas direcciones— y trae monitorización de disponibilidad, avisos y página de estado en el mismo paquete. Su nivel gratuito con comprobaciones cada 3 minutos **es suficiente para B-23**, cuyo umbral es de 20 minutos continuados de indisponibilidad.
- **Solo registros nativos: descartado.** `plan-backend.md` B-23 exige que "una caída simulada de 25 min conceda el día a todos y lo publique en `/erratas` sin que nadie lo teclee". Eso necesita un monitor **externo**: un sistema no puede detectar de forma fiable su propia caída. Y `plan-backend.md` §10 **no tiene ninguna línea de observabilidad en el presupuesto**, lo que es un agujero, no un ahorro.

**Ganador: Sentry en región alemana (plan gratuito al lanzar) más el nivel gratuito de Better Stack como monitor externo.**

---

## 4. Los cuatro acantilados de coste

Son los cuatro sitios donde la factura deja de ser lineal. Tres de ellos no están en `plan-backend.md` §10.

### 4.1 Usuarios activos mensuales de Supabase: el acantilado de los 100.000

Supabase incluye **100.000 usuarios activos mensuales** en el plan Pro y cobra **0,00325 $ por usuario** a partir de ahí. Y **los inicios de sesión anónimos cuentan como MAU en cuanto se autentican**, igual que un usuario que solo refresca su token.

La decisión de arquitectura 3 del plan dice que se crea una cuenta anónima **desde el primer toque**. Con landings SEO diseñadas para captar tráfico de búsqueda, "primer toque" incluye a todo el que rebota. A 200.000 usuarios mensuales eso son 200.000 MAU: **100.000 por encima del incluido, 325 $/mes**, más que todo el resto del stack junto a esa escala.

**Corrección recomendada, y hay que tomarla ahora porque toca `web/src/servidor/auth.ts` (B-04) y la primera migración:** crear la cuenta anónima **de forma perezosa, en la primera interacción real con el tablero**, no al cargar la página. Hasta ese momento el visitante es una sesión sin identidad, el estado del tablero vive en `localStorage` y no hay ninguna fila en `auth.users`. Tres ventajas, ningún inconveniente:

- Si el 40 % de los visitantes llega a tocar el tablero, a 200.000 visitantes hay 80.000 MAU: **coste 0 en lugar de 325 $**.
- El captcha invisible de B-11 se pide solo a quien va a jugar, no a todo el que llega de Google. Mejora la conversión de la landing y reduce el vector de abuso de R-06 al mismo tiempo.
- No cambia nada de la decisión 3: sigue habiendo una fila en `auth.users` desde el primer momento **en el que hay algo que guardar**, la RLS sigue siendo idéntica para todos y el magic link sigue ascendiendo la misma fila sin fusión.

Lo único que hay que escribir es la regla en `docs/backend.md`: **"anónimo se crea en la primera interacción con el tablero, no en la primera visita"**, y una prueba que compruebe que cargar `/` no crea ninguna fila.

### 4.2 Eventos de PostHog: el presupuesto C7 es incompatible con el techo de 100 €

Esta es la desviación grande y merece la aritmética completa.

| Eventos por sesión | Eventos/mes a 50.000 usuarios | Coste PostHog | Eventos/mes a 200.000 | Coste PostHog |
|---|---|---|---|---|
| **6 (presupuesto C7 vigente)** | 3,6 M | **105 $** | 14,4 M | **475 $** |
| 4 | 2,4 M | 68 $ | 9,6 M | 300 $ |
| **2,8 (2 fijos + 4 sobre muestra del 20 %)** | 1,68 M | **34 $** | 6,72 M | **212 $** |
| 2 | 1,2 M | 10 $ | 4,8 M | 140 $ |

A 6 eventos por sesión, **PostHog solo ya se come el presupuesto entero a 50.000 usuarios**. El plan §10 estimaba 30-45 $ porque asumía 1,8 M de eventos, y 1,8 M sale de 6 sesiones por usuario y mes, no de 12. Con la hipótesis que ahora declara el fundador, la cifra se dobla.

**Lo que hay que hacer, y es una corrección de C7, no una palanca de emergencia:**

1. **Presupuesto duro de 2 eventos por sesión al 100 %**: `partida_iniciada` y `partida_cerrada` (con `modo`, resultado, tiempo, ayudas usadas y origen). Con esos dos y la propiedad `modo` obligatoria se calculan la tasa de resolución, el tiempo mediano, el uso de ayudas y el KPI del correo.
2. **Los otros cuatro eventos del embudo van sobre una muestra determinista del 20 %** de las sesiones (hash estable del identificador, no aleatorio por evento, para que los embudos sean coherentes). Los embudos y el punto de abandono por paso se leen igual de bien con 120.000 sesiones al mes que con 600.000.
3. **Cero eventos identificados salvo conversión.** Los eventos con perfil de persona cuestan unas cuatro veces más. Se identifican únicamente `cuenta_creada`, `premium_*` y `correo_*`; todo lo demás va anónimo. Esto también es mejor RGPD: menos perfiles, menos dato.
4. **Todo agregado se calcula en Postgres.** Usuarios activos diarios y mensuales, retención D1/D7/D30, racha media y distribución, tasa de resolución por caso, días del mes completados y tasa de compartir salen de `intentos` y `rachas`, que ya existen y ya están indexadas. PostHog se reserva para lo que Postgres no hace bien: embudos con abandono por paso y cohortes por propiedad.
5. **Comprobación en integración continua** del presupuesto por sesión, como ya pide B-25, pero con el número corregido a **2,8 y no 6**.

Esto hay que acordarlo con `analista-datos` antes del final de la semana 1, porque C7 se congela ahí y la serie histórica nace con la taxonomía que se escriba.

### 4.3 Peticiones de borde de Vercel: el techo de los 10 millones

El plan Pro incluye **10 M de peticiones de borde** que no consumen crédito. Nuestro modelo da unas 15 por sesión: **9 M a 50.000 usuarios y 36 M a 200.000**. Es decir, cabemos justo a 50.000 y nos salimos por 26 M a 200.000.

Mitigaciones, en orden de coste: cabeceras de caché agresivas y de larga vida en los activos con huella (`immutable`, un año), consolidar peticiones de la PWA en el arranque, y si aún así se pasa, mover las rutas públicas cacheadas a un Worker de Cloudflare de 5 $ delante del dominio. **No es un problema del MVP; es una alerta que hay que meter en el panel de salud de B-29** para que no llegue como sorpresa en la factura.

### 4.4 El correo diario y el límite de `pg_cron`

Dos cosas distintas con la misma causa.

**Coste:** 90.000 correos/mes a 50.000 usuarios son 35 $ en Resend; 360.000 a 200.000 usuarios son unos 200 $ frente a 36 $ en Amazon SES. El cambio de proveedor de correo es la migración más barata del stack (1-2 días de agente: es SMTP y unas plantillas), así que **no hay que decidirlo ahora**: se decide cuando la lista pase de 6.000 suscriptores, que es donde SES empieza a pagar el peor desarrollador.

**Operación:** Supabase recomienda **no más de 8 trabajos concurrentes de `pg_cron` y no más de 10 minutos por trabajo**. Un envío horario a 12.000 suscriptores no cabe en un trabajo de `pg_cron` que llame a la API de Resend fila a fila. El diseño correcto, para escribirlo en B-28 desde el principio: **`pg_cron` solo selecciona y encola** el lote de la hora en una tabla de trabajo; una Edge Function (o una GitHub Action) consume la cola paginando y usando el envío por lotes del proveedor (100 destinatarios por llamada), con idempotencia por `(suscriptor, fecha_civil)` y reintento con retroceso. Así el cron nunca dura más de segundos y un fallo de envío no duplica correos.

---

## 5. Coste total mensual por escenario

Tres combinaciones. Las tres comparten **PostHog Cloud EU** con el presupuesto corregido de §4.2, **Sentry en región alemana** y el **nivel gratuito de Better Stack** como monitor, porque esas tres categorías las gana la misma opción sea cual sea el resto del stack. Lo que varía es la base de datos y el hosting: **A** es el plan vigente, **B** cambia el hosting a Cloudflare y **C** cambia la base a Postgres puro con autenticación propia.

Cifras en dólares donde el proveedor factura en dólares; total convertido a 1 $ = 0,92 €. **Todas las filas incluyen ya las dos correcciones de §4.1 y §4.2**; la línea "sin correcciones" del final muestra lo que costaría el plan tal y como está escrito hoy.

### Combinación A — Supabase (París) + Vercel Pro + Resend + PostHog EU + Sentry EU

*Es el plan vigente con las correcciones aplicadas y la línea de observabilidad añadida.*

| Servicio | 1.000 | 10.000 | 50.000 | 200.000 |
|---|---|---|---|---|
| Supabase Pro (BD, auth, cron, almacenamiento) | 25 | 30 | 31 | 78 |
| Vercel Pro, 1 asiento | 20 | 20 | 20 | 65 |
| Resend | 0 | 20 | 35 | 200 |
| PostHog Cloud EU (2,8 eventos/sesión) | 0 | 0 | 34 | 212 |
| Sentry región UE | 0 | 0 | 0 | 40 |
| Better Stack (monitor) | 0 | 0 | 0 | 0 |
| Dominios y correo de dominio | 4 | 4 | 4 | 4 |
| **Total $/mes** | **49** | **74** | **124** | **599** |
| **Total €/mes** | **45 €** | **68 €** | **114 €** | **551 €** |
| Con SES en lugar de Resend a 200.000 | — | — | — | **400 €** |

### Combinación B — Supabase (París) + Cloudflare Workers + Resend/SES + PostHog EU + Sentry EU

*Cambia solo el hosting. Es la única de las tres que cumple el techo de 100 €.*

| Servicio | 1.000 | 10.000 | 50.000 | 200.000 |
|---|---|---|---|---|
| Supabase Pro | 25 | 30 | 31 | 78 |
| Cloudflare Workers de pago | 5 | 5 | 5 | 17 |
| Resend (SES a 200.000) | 0 | 20 | 35 | 36 |
| PostHog Cloud EU | 0 | 0 | 34 | 212 |
| Sentry región UE | 0 | 0 | 0 | 40 |
| Dominios | 4 | 4 | 4 | 4 |
| **Total $/mes** | **34** | **59** | **109** | **387** |
| **Total €/mes** | **31 €** | **54 €** | **100 €** | **356 €** |
| Trabajo adicional frente a A | — | — | **+3-5 días de agente** (OpenNext, regeneración incremental) y riesgo en `/casos/<n>` y `/erratas` | |

### Combinación C — Neon (Fráncfort) + Drizzle + Better Auth + Vercel + Resend + PostHog EU

*La opción sin capa propietaria, para comprobar si "Postgres puro" sale más barato. No sale.*

| Servicio | 1.000 | 10.000 | 50.000 | 200.000 |
|---|---|---|---|---|
| Neon (Launch, con autosuspensión) | 8 | 20 | 40 | 120 |
| Vercel Pro, 1 asiento | 20 | 20 | 20 | 65 |
| Resend (SES a 200.000) | 0 | 20 | 35 | 36 |
| PostHog Cloud EU | 0 | 0 | 34 | 212 |
| Sentry región UE | 0 | 0 | 0 | 40 |
| Almacenamiento de ficheros (R2 o S3, para `PDF-*`) | 0 | 1 | 2 | 5 |
| Dominios | 4 | 4 | 4 | 4 |
| **Total $/mes** | **32** | **65** | **135** | **482** |
| **Total €/mes** | **29 €** | **60 €** | **124 €** | **443 €** |
| Trabajo adicional frente a A | **+6-10 días de agente** (magic link, sesión anónima, ascenso, límites, cron, almacenamiento) y la seguridad de la autenticación pasa a ser nuestra | | | |

### Lo que costaría el plan tal y como está escrito hoy

Para que la desviación quede en una cifra y no en un adjetivo:

| | 1.000 | 10.000 | **50.000** | 200.000 |
|---|---|---|---|---|
| `plan-backend.md` §10 estima | 45-65 € | — | **95-110 €** | — |
| Combinación A **sin** las correcciones de §4.1 y §4.2 | 45 € | 68 € | **179 €** | **1.092 €** |
| Combinación A **con** las correcciones | 45 € | 68 € | **114 €** | 551 € |
| Combinación B **con** las correcciones | 31 € | 54 € | **100 €** | 356 € |

**A 50.000 usuarios la desviación es de 69 € y es prácticamente toda de PostHog** (+65 €): doce sesiones por usuario y mes en lugar de seis, con el presupuesto de seis eventos por sesión intacto. No es culpa de un proveedor ni de una subida de precios: es una hipótesis de uso que se ha doblado y un presupuesto que no se rehízo. Aplicando la corrección de §4.2 se recupera casi entera.

**A 200.000 usuarios la desviación es de otra naturaleza y por eso importa más:** 1.092 € frente a 551 €, y ahí el reparto es 325 $ de MAU de Supabase (§4.1), 263 $ de PostHog (§4.2) y unos 45 $ de peticiones de borde y correo. **Las dos decisiones que quitan 588 $ de esa factura —cuenta anónima perezosa y presupuesto de eventos— hay que tomarlas en la semana 1**, porque una toca `auth.users` y la otra congela la taxonomía. Después cuestan lo que cuesta rehacer una serie histórica y una migración de identidades.

Y una nota sobre observabilidad que la tabla esconde: la línea es de 0 € hasta los 50.000 usuarios porque los planes gratuitos de Sentry y Better Stack bastan. Que salga a cero no significa que estuviera contemplada: `plan-backend.md` §10 sencillamente no la tiene, y a 200.000 usuarios son 40 $.

### El punto de referencia que se rechaza: autoalojar en Hetzner con Coolify

Dos servidores (aplicación y base de datos) más copias propias costarían del orden de **35-45 €/mes constantes hasta los 50.000 usuarios**, aproximadamente un tercio de la combinación B. Se rechaza por dos motivos que el encargo pone por delante del coste: **exige guardias** (parcheado, copias, restauración, respuesta a incidentes), lo que contradice el requisito explícito y las 27 horas de fundador ya presupuestadas; y **la estabilidad de precios que era su argumento se ha caído en 2026**, con cuatro acciones de precio de Hetzner en nueve meses y subidas del 113-176 % en las líneas CPX y CCX el 15 de junio. Se queda como plan de contingencia documentado en §6, no como opción.

---

## 6. Riesgos de dependencia y plan de salida

Coste de salida medido en días de agente y, cuando lo hay, en pérdida de negocio. Es la columna que nadie calcula hasta que la necesita.

| Pieza | Riesgo | Qué nos ata de verdad | Coste de salir | Qué hacemos hoy para abaratarlo |
|---|---|---|---|---|
| **Supabase** | **Bajo-medio** | GoTrue (`auth.users` y emisión de JWT), Storage, Edge Functions. El esquema, las políticas RLS y las funciones son Postgres estándar y salen con `pg_dump` | **5-10 días de agente.** La autenticación es lo pegajoso, pero GoTrue es código abierto y autoalojable, y `auth.users` es una tabla normal que se vuelca | **La decisión de arquitectura 1 del plan ya es una política de portabilidad**: si el cliente nunca habla con PostgREST y todo pasa por rutas de servidor, cambiar de proveedor de base es cambiar una cadena de conexión y reimplementar la verificación del token. Hay que escribirlo así en `docs/backend.md` y prohibir `supabase-js` en el cliente salvo en las dos lecturas con RLS |
| **Vercel** | **Bajo** | Regeneración incremental, imágenes OG, `middleware`, análisis de despliegue | **3-8 días** si la aplicación se mantiene en API estándar de Next.js | Regla escrita: ningún paquete `@vercel/*` en tiempo de ejecución salvo `next/og`; ninguna variable de entorno `VERCEL_*` fuera de un único módulo de adaptación |
| **Cloudflare** (si se elige B) | **Bajo-medio** | El adaptador OpenNext y el caché incremental en KV | 3-8 días hacia Vercel | Igual que arriba, más una prueba de humo que compruebe que `/casos/<n>` y `/erratas` se regeneran |
| **PostHog** | **Bajo** | Paneles y definiciones de embudo, no los datos | **3-5 días.** Los eventos se exportan; los paneles se rehacen | Los KPI del panel del día 90 se calculan en Postgres (§4.2 punto 4). Si PostHog desaparece mañana, el negocio sigue midiéndose |
| **Resend** | **Muy bajo** | Nada: es SMTP con plantillas | **1-2 días** | Plantillas en el repositorio, no en el panel del proveedor. Cabecera `List-Unsubscribe` implementada por nosotros, no delegada |
| **Sentry** | **Bajo** | El SDK, que Better Stack acepta tal cual | **1 día** | **Crear la organización directamente en `de.sentry.io`: la región se fija al crear y es irreversible** |
| **Pasarela de pago** | **Alto. Es el único riesgo grave del stack** | Los datos de tarjeta de los suscriptores pertenecen al *merchant of record*, no a nosotros | **Cambiar de MoR con suscriptores activos exige o una transferencia de credenciales conforme a PCI negociada con el proveedor saliente, o volver a pedir la tarjeta a cada cliente.** Lo segundo es lo normal, y cuesta entre el 20 % y el 40 % de la base de suscriptores | **Es la razón principal para recomendar Stripe Managed Payments**: pasar de ahí a Stripe directo con alta en OSS —que es exactamente el movimiento que prevé el umbral de 2.700 €/mes— es un cambio **dentro de Stripe**, sin recobro de tarjetas y sin churn. Ningún otro camino tiene esa propiedad |
| **Hetzner** (contingencia) | **Alto en precio** | Nada técnico | 0 | Documentado como contingencia. Cuatro subidas en 2026: no se planifica presupuesto sobre él |

**Contingencia escrita, para no improvisarla:** si Supabase cambiara su modelo de precios de forma que rompiera el presupuesto, la ruta es Neon o un Postgres gestionado europeo + Better Auth, con el esquema intacto. Si Vercel lo hiciera, la ruta es Cloudflare Workers o Railway. Si PostHog lo hiciera, la ruta es Umami autoalojado para el tráfico y Postgres para los KPI, aceptando perder embudos. **Ninguna de las tres rutas exige tocar el esquema de datos, y eso no es casualidad: es el resultado de la decisión de arquitectura 1.**

---

## 7. Recomendación final por categoría

Formato: qué decía el plan, qué se recomienda, y por qué.

### 7.1 Backend, base de datos y autenticación — **MANTENER Supabase**, con dos precisiones

**Mantener.** Gana la matriz con holgura y gana los tres criterios que más pesan para este producto concreto: RLS para la regla de "los intentos los escribe solo el servidor", inicio de sesión anónimo con ascenso sin fusión, y el mejor corpus de documentación y tipado para agentes. Ninguna alternativa sale más barata a 50.000 usuarios una vez se cuenta el trabajo.

**Precisión 1 — región: París (`eu-west-3`), no Fráncfort.** El plan dice "regiones" sin concretar (B-02). París está entre 10 y 15 ms más cerca de Madrid que Fráncfort, es igual de bueno para el resto de Europa occidental y cumple igual la residencia. AWS tiene región en España (Aragón), pero Supabase no la ofrece, así que París es el óptimo disponible. **Es una decisión irreversible barata hoy y cara después: un proyecto de Supabase no cambia de región, se migra.**

**Precisión 2 — la cuenta anónima se crea de forma perezosa.** §4.1. Es la diferencia entre 0 $ y 325 $/mes a 200.000 usuarios, y mejora la conversión de las landings.

**Se descarta explícitamente:** PITR de Supabase (100 $/mes por 7 días de retención) en el MVP. Las copias diarias del plan Pro con 7 días de retención más el volcado semanal cifrado a almacenamiento propio de B-30 son suficientes y ya están en el plan. Se reconsidera cuando haya ingresos de suscripción.

### 7.2 Hosting de la web — **MANTENER Vercel en el MVP; Cloudflare Workers es la palanca del mes 3**

Esta es la única recomendación que **no** coincide con el ganador de su matriz, y conviene decir por qué en voz alta.

Cloudflare gana por coste (5 $ frente a 20 $) y por latencia en LatAm, que es un mercado declarado en `contexto-proyecto.md`. Pero el lanzamiento es el **3 de noviembre de 2026** (D-010) y la ruta crítica del backend ya tiene dos hilos que se cruzan en la semana 4. Meter en la semana 1 un adaptador cuya parte menos madura es exactamente la regeneración incremental de la que dependen `/casos/<n>`, `/erratas` y el archivo —tres piezas que son argumento de portada— es cambiar 15 $/mes por riesgo de calendario. D-009 dice que la restricción es la ventana de mercado, no el coste de cómputo.

**Recomendación operativa:**
1. **MVP en Vercel Pro**, un solo asiento, funciones fijadas en `cdg1` (París) para que estén junto a la base de datos.
2. **Regla de portabilidad desde el día 1**, escrita en `docs/backend.md`: ningún paquete `@vercel/*` en tiempo de ejecución salvo `next/og`; las variables `VERCEL_*` solo en un módulo de adaptación.
3. **Alerta de peticiones de borde** en el panel de salud de B-29, disparando al 80 % de los 10 M incluidos.
4. **Prueba de portabilidad en la semana 10** (B-40, media jornada): desplegar la aplicación en Cloudflare Workers en un entorno de pruebas y anotar qué se rompe. Con ese dato, el cambio en el mes 3 es una decisión de una tarde en vez de una apuesta.

### 7.3 Correo — **MANTENER Resend hasta 6.000 suscriptores; Amazon SES después**

Resend gana la operación y el desarrollo, SES gana el coste a partir de cierto volumen, y la migración cuesta 1-2 días. Con esos tres hechos, la decisión correcta es no decidir ahora: Resend al lanzamiento (gratis hasta 3.000 correos con tope de 100 diarios, 20 $ hasta 50.000, ~35 $ hasta 100.000) y **umbral escrito: se estudia SES cuando la lista pase de 6.000 suscriptores o cuando la factura mensual de correo pase de 60 $**.

**Dos cosas que hay que llevar a `experto-legal` antes de la semana 5** (dependencia ya listada en `plan-backend.md` §7): Resend no tiene plan íntegramente europeo —el envío puede originarse en Irlanda, pero los datos de cuenta y los registros están en Estados Unidos, con 30 días de retención desde marzo de 2026—, lo que exige declarar la transferencia internacional y firmar el contrato de encargado con cláusulas contractuales tipo. Si esa transferencia se considera inaceptable, **Brevo es la alternativa europea**, a cambio de peor API y más coste. La decisión es suya, no mía.

**Diseño de B-28 con el límite de `pg_cron` en la cabeza**, según §4.4: `pg_cron` encola, la Edge Function envía por lotes con idempotencia.

### 7.4 Analítica — **MANTENER PostHog Cloud EU, CAMBIAR el presupuesto de eventos de 6 a 2,8**

PostHog Cloud EU es lo único de la comparativa que da a la vez residencia europea real (Fráncfort, instancia independiente, sin transferencia a Estados Unidos, contrato de encargado autoservicio) y las métricas que el proyecto declara necesitar. Se mantiene.

Lo que cambia es C7, y es un cambio grande: **2 eventos por sesión al 100 %, cuatro más sobre una muestra determinista del 20 %, ningún evento identificado salvo conversión, y todos los agregados en Postgres.** Sin eso, el servicio cuesta 105 $/mes a 50.000 usuarios y el techo contractual de 100 € no se cumple.

**Esto hay que negociarlo con `analista-datos` en la semana 1**, y no es un recorte gratuito: la muestra del 20 % da 120.000 sesiones al mes a 50.000 usuarios, que es muchísimo más de lo que un embudo necesita para ser significativo. Lo que se pierde es la capacidad de mirar el recorrido de una persona concreta, y eso ni lo necesitamos ni lo queremos guardar.

**Regla escrita, coherente con `plan-backend.md` §10:** si el coste proyectado supera 100 €/mes antes de los 50.000 usuarios mensuales, se recorta analítica, no producto. Con la corrección aplicada, esa regla ya no se dispara.

### 7.5 Pagos — **CAMBIAR de Paddle a Stripe Managed Payments** (decisión de B-41, fase 2)

`plan-backend.md` §11.2 recomienda Paddle. Esa recomendación se escribió antes de que Stripe metiera **Managed Payments** en la API, en abril de 2026. Con el dato nuevo, Paddle deja de ser la mejor opción por cuatro razones, en orden de peso:

1. **Precio en nuestro punto de precio real.** Stripe Managed Payments cuesta 3,5 % sobre las tarifas normales, que en tarjeta del EEE son 1,5 % + 0,25 €: total **5 % + 0,25 €**. Paddle son 5 % + 0,50 €. Mismo porcentaje, la mitad de comisión fija. Sobre 2,99 €/mes eso es **13,3 % frente a 21,7 %**, y sobre 19,99 €/año **6,3 % frente a 7,5 %**. Con Paddle, D-008 hipótesis H6 —retirar el mensual si la comisión efectiva pasa del 18 % tres meses seguidos— se incumple desde la primera factura.
2. **Reversibilidad.** Cambiar de *merchant of record* con suscriptores activos obliga a recobrar los datos de tarjeta y cuesta entre el 20 % y el 40 % de la base. Pasar de Stripe Managed Payments a Stripe directo con alta en OSS —que es exactamente lo que prevé el umbral de 2.700 €/mes— es un cambio **dentro de Stripe**. Es la única ruta del mercado que no cobra peaje por crecer.
3. **Herramientas de prueba.** B-43 exige procesar eventos reales del entorno de pruebas dos veces sin duplicar nada, y probar entrega duplicada y desordenada. Los relojes de prueba y la CLI de Stripe son lo mejor que existe para eso; nadie más tiene equivalente al reloj de prueba para simular renovaciones e impagos.
4. **Riesgo comercial de Paddle.** Paddle pide contactar con ventas para productos por debajo de 10 $. Nuestro plan mensual son 2,99 €.

**Lo que hay que verificar en B-41 antes de cerrarlo, y no lo puedo verificar desde aquí:** que Stripe Managed Payments admite vendedores establecidos en España con la forma jurídica que tenga el proyecto, que soporta el punto de precio de 2,99 €, y que emite factura conforme para consumidor español. **Si alguna de las tres falla, la alternativa es Paddle**, y entonces hay que aplicar H6 desde el principio: mensual a 3,49 € o solo anual.

**Se descartan:** Polar (subió a 5 % + 0,50 $ el 27 de mayo de 2026, perdiendo su único argumento) y Lemon Squeezy como opción principal (sigue operando y sin fecha de cierre anunciada, pero su equipo construye Stripe Managed Payments y hay ruta de migración pública hacia él desde enero de 2026: es un producto en transición). **Lemon Squeezy sí sigue siendo la opción para `PDF-CLASICO` con precio libre** si el cambio 25 lo mantiene, porque Stripe Managed Payments no cubre ese caso de la misma forma; se decide en B-44, no en B-41.

**El umbral de reconsideración de `plan-backend.md` §11.2 se mantiene tal cual:** 2.700 €/mes brutos durante tres meses seguidos para pasar a Stripe directo con Stripe Tax. Mi aritmética independiente lo confirma: a 50.000 usuarios y 1,2 % de conversión, la diferencia entre MoR y directo es de unos 110-120 €/mes, que es lo que cuesta una gestoría.

**Y lo que el backend construye no cambia en absoluto**: `webhooks_recibidos` con unicidad `(proveedor, evento_id)` ya está en el esquema del MVP, y esa tabla es idéntica para los cinco proveedores. La decisión de reservarla desde el primer día sigue siendo correcta.

### 7.6 Observabilidad — **AÑADIR la línea que no existía**

`plan-backend.md` §10 no tiene ninguna línea de observabilidad y B-23 exige un monitor externo capaz de declarar una incidencia de 20 minutos por sí solo. Recomendación:

- **Sentry en la región alemana (`de.sentry.io`)**, plan gratuito Developer al lanzamiento, plan Team (26 $/mes, 50.000 errores) cuando se supere la cuota. **La región se elige al crear la organización y es irreversible: hay que crearla bien en la semana 1** (B-02), no cuando haga falta.
- **Better Stack en su nivel gratuito** como monitor externo de disponibilidad. Comprobaciones cada 3 minutos, suficientes para el umbral de 20 minutos de B-23. Es también el plan de salida de Sentry, porque acepta su SDK sin cambios.
- **Las tres alertas y ninguna más** que ya fija `plan-backend.md` §9: caída, depósito de casos por debajo de 14 días, coste proyectado por encima del presupuesto. Se añade una cuarta condición dentro de la alerta de coste, no una alerta nueva: peticiones de borde por encima del 80 % de lo incluido.
- Presupuesto: **0 $/mes hasta los 50.000 usuarios** (cuotas gratuitas de ambos), **26-40 $/mes por encima**. Que la línea salga a cero no es motivo para no escribirla: lo que no está en el presupuesto no se vigila.

---

## 8. Lo que este estudio pide que se decida

| # | Decisión | Quién | Cuándo | Si no se decide |
|---|---|---|---|---|
| **E-1** | **Presupuesto de eventos de C7 baja de 6 a 2,8 por sesión** con muestra determinista del 20 % y agregados en Postgres | `analista-datos` con backend | **fin de S1**, antes de congelar C7 | El techo de 100 € a 50.000 usuarios no se cumple, y cambiar la taxonomía después invalida la serie histórica |
| **E-2** | **La cuenta anónima se crea en la primera interacción con el tablero**, no en la primera visita | backend, informa a `desarrollador-frontend` (afecta al arranque de la PWA) y a `director-producto` | **S1-S2**, dentro de B-04 | 325 $/mes de sobrecoste a 200.000 usuarios y captcha a todo el tráfico de las landings |
| **E-3** | **Región de Supabase: París (`eu-west-3`)** para producción y staging | backend | **S1**, dentro de B-02 | Un proyecto no cambia de región: se migra. 10-15 ms peores desde España para siempre |
| **E-4** | **Organización de Sentry creada en `de.sentry.io`** | backend | **S1**, dentro de B-02 | La región es irreversible; se pierde el argumento de residencia para siempre |
| **E-5** | **Ramas de vista previa de Supabase efímeras**, no permanentes: una rama viva cuesta ~9,7 $/mes y no la cubre el crédito de cómputo | backend | **S1-S2**, dentro de B-05 | Cuatro ramas olvidadas son 39 $/mes, el 40 % del presupuesto |
| **E-6** | **Pasarela recomendada: Stripe Managed Payments**, con Paddle como alternativa si el alta en España o el precio de 2,99 € no encajan | `estratega-negocio` y `experto-legal`, propone backend | **S11**, dentro de B-41 | Se elige un MoR con 21,7 % de comisión en el plan mensual y salida con recobro de tarjetas |
| **E-7** | **Transferencia internacional de Resend** (registros y datos de cuenta en Estados Unidos) aceptada con cláusulas contractuales tipo, o cambio a Brevo | `experto-legal` | **fin de S5** | La política de privacidad se publica incompleta y la beta con personas reales se bloquea |
| **E-8** | **El presupuesto de `plan-backend.md` §10 se actualiza** a 45 €/mes al lanzamiento y **100-114 €/mes a 50.000 usuarios**, con línea de observabilidad | backend, confirma `director-producto` | **S1** | El compromiso de "< 100 € hasta 50.000 usuarios" solo se cumple con la combinación B; conviene saberlo antes de prometerlo |

---

## 9. Cambios concretos que este estudio propone en `docs/roadmap/plan-backend.md`

Para que el parche sea mecánico y no haya que releer el estudio entero:

- **§1 punto 7 (coste antes que elegancia).** Añadir: el presupuesto de eventos de analítica es 2,8 por sesión, no 6, y la cuenta anónima se crea en la primera interacción con el tablero.
- **§2, contrato C7.** Cambiar "el presupuesto de eventos por sesión de §10" por el presupuesto corregido: 2 eventos al 100 %, 4 sobre muestra determinista del 20 %, ninguno identificado salvo conversión.
- **§5.1, B-02.** Fijar región París (`eu-west-3`) y organización de Sentry en `de.sentry.io`.
- **§5.1, B-04.** Añadir el criterio de hecho: "cargar la portada no crea ninguna fila en `auth.users`; la cuenta anónima nace en la primera interacción con el tablero".
- **§5.1, B-05.** Añadir: las ramas de vista previa se destruyen al fusionar; ninguna rama viva más de 24 h.
- **§5.1, B-25.** Corregir el presupuesto comprobado en integración continua de 6 a 2,8 eventos por sesión.
- **§5.1, B-28.** Añadir el diseño de cola: `pg_cron` encola, la Edge Function envía por lotes; ningún trabajo de `pg_cron` por encima de un minuto.
- **§5.1, B-29.** Añadir la alerta de peticiones de borde al 80 % de lo incluido, dentro de la alerta de coste.
- **§10.** Sustituir la tabla por la de §5 de este documento, con la línea de observabilidad y la nota de que la hipótesis de sesiones se ha doblado.
- **§11.2.** Sustituir la recomendación de Paddle por la de §7.5 de este documento, manteniendo intactos el umbral de 2.700 €/mes y la lista de lo que el backend construye en cualquier caso.

---

## 10. Fuentes

Precios y límites consultados el 7 de septiembre de 2026.

- [Supabase Pricing](https://supabase.com/pricing.md) · [Supabase Pricing 2026: Plans, Overage Rates, and Real Monthly Costs](https://flexprice.io/blog/supabase-pricing-breakdown) · [Supabase Pricing in 2026 (with Calculator)](https://makerkit.dev/blog/saas/supabase-pricing) · [Regions | Supabase](https://supabase.com/regions) · [Anonymous Sign-Ins | Supabase Docs](https://supabase.com/docs/guides/auth/auth-anonymous) · [Cron | Supabase Docs](https://supabase.com/docs/guides/cron) · [Supabase Functions Pricing](https://supabase.com/docs/guides/functions/pricing) · [Supabase PITR cost](https://revivedb.dev/blog/supabase-pitr-cost)
- [Vercel Pricing](https://vercel.com/pricing) · [Fluid compute pricing](https://vercel.com/docs/functions/usage-and-pricing) · [Lower pricing with Active CPU pricing for Fluid compute](https://vercel.com/changelog/lower-pricing-with-active-cpu-pricing-for-fluid-compute) · [Vercel Pricing in 2026: Plans, Credits, and What You'll Actually Pay](https://flexprice.io/blog/vercel-pricing-breakdown) · [Global network and regions](https://vercel.com/docs/regions) · [Vercel EU Alternative 2026: GDPR, CLOUD Act](https://sota.io/blog/vercel-eu-alternative-gdpr-cloud-act-2026)
- [Cloudflare Workers Pricing](https://developers.cloudflare.com/workers/platform/pricing/) · [Cloudflare Workers Pricing 2026: Real Bills + CPU vs Requests](https://www.budgetforge.dev/tools/cloudflare-workers-pricing-2026) · [Durable Objects · Data Localization Suite](https://developers.cloudflare.com/data-localization/how-to/durable-objects/) · [Next.js hosting cost in 2026: Vercel vs Netlify vs Railway vs VPS](https://dev.to/nayankyada/nextjs-hosting-cost-in-2026-vercel-vs-netlify-vs-railway-vs-vps-431a)
- [PostHog Pricing 2026: Real Bills and the 4x Event Trap](https://www.budgetforge.dev/tools/posthog-pricing-2026) · [PostHog Pricing Guide 2026](https://flexprice.io/blog/posthog-pricing-guide) · [Introducing PostHog Cloud EU](https://posthog.com/blog/posthog-cloud-eu) · [PostHog & GDPR compliance](https://posthog.com/docs/privacy/gdpr-compliance) · [Anonymous vs identified events](https://archive.posthog.com/docs/data/anonymous-vs-identified-events)
- [Resend Pricing Explained (2026)](https://www.sequenzy.com/pricing/resend) · [Best Resend EU Alternative for GDPR-Compliant Email (2026)](https://nuntly.com/alternatives/resend-eu) · [Amazon SES Pricing](https://aws.amazon.com/ses/pricing/) · [Loops Pricing Explained (2026)](https://www.sequenzy.com/pricing/loops) · [Email API Pricing Comparison (2026)](https://www.buildmvpfast.com/api-costs/email)
- [Managed Payments pricing · Stripe Support](https://support.stripe.com/questions/managed-payments-pricing) · [Your Merchant of Record Provider | Stripe Managed Payments](https://stripe.com/managed-payments) · [Stripe Managed Payments Fees Explained (2026)](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained) · [Paddle Fees 2026: The Real Cost of 5% + 50¢](https://dodopayments.com/blogs/paddle-fees-explained) · [Introducing Polar Plans](https://polar.sh/blog/introducing-polar-plans) · [Fees — Polar](https://polar.sh/docs/merchant-of-record/fees) · [2026 Update: Lemon Squeezy + Stripe Managed Payments](https://www.lemonsqueezy.com/blog/2026-update)
- [Sentry's EU Region FAQ](https://sentry.zendesk.com/hc/en-us/articles/25074658211227-Sentry-s-EU-Region-FAQ) · [Data storage location in Germany is generally available](https://sentry.io/changelog/data-storage-location-in-germany-is-generally-available) · [Sentry Pricing 2026](https://middleware.io/blog/sentry-pricing/) · [Better Stack vs Sentry (2026)](https://betterstack.com/community/comparisons/better-stack-vs-sentry/)
- [Neon Pricing Calculator (2026)](https://makerkit.dev/pricing-calculator/neon) · [PostgreSQL Hosting Options in 2026: Pricing Comparison](https://www.bytebase.com/blog/postgres-hosting-options-pricing-comparison/) · [Just landed in Europe — Convex](https://news.convex.dev/we-finally-got-our-eu-visa/) · [Convex Pricing 2026](https://toolradar.com/tools/convex/pricing) · [Appwrite vs PocketBase 2026](https://www.devtoolreviews.com/reviews/appwrite-vs-pocketbase-2026)
- [Hetzner Price Adjustment 15 June 2026](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/) · [Hetzner cloud server price increases in 2026: full breakdown](https://northflank.com/blog/hetzner-cloud-server-price-increases) · [Hetzner price increase June 2026: CPX and CCX up to +176%](https://wz-it.com/en/blog/hetzner-price-increase-june-2026-cpx-ccx-alternatives/)
- [Firebase EU Alternative 2026: GDPR, CLOUD Act](https://www.sota.io/blog/firebase-eu-alternative-gdpr-cloud-act-2026) · [Firebase Alternatives in Europe: GDPR-Compliant Backend Platforms (2026)](https://danubedata.ro/blog/firebase-alternatives-europe-gdpr-2026)
- [Better Auth vs Clerk vs NextAuth vs Supabase Auth (2026)](https://makerkit.dev/blog/tutorials/better-auth-vs-clerk) · [Clerk vs Better Auth (2026)](https://dev.to/thiago_alvarez_a7561753aa/clerk-vs-better-auth-2026-we-verified-every-price-so-you-dont-have-to-13pk)
- [Plausible vs Umami (2026)](https://analytics-alternatives.com/compare/plausible-vs-umami/) · [Web Analytics Pricing 2026](https://www.stackscored.com/pricing/analytics/)

---

*Este estudio no modifica `docs/decisiones.md` ni `docs/catalogo-productos.md`. Propone ocho decisiones (§8) y diez parches concretos a `docs/roadmap/plan-backend.md` (§9). La documentación permanente del área sigue siendo `docs/backend.md`, entregable de B-38, donde estas conclusiones se consolidarán junto con el esquema y las cuatro políticas.*
