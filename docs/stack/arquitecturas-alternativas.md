# Arquitecturas alternativas para el juego diario: evaluación independiente

Autor: arquitecto de software independiente (agente, sin área asignada). Fecha: 7 de septiembre de 2026 (S1, día 1). Versión 1.0.
Encargo del fundador: estudiar **todas** las posibilidades antes de fijar el stack, con cinco arquitecturas completas y coherentes (y una sexta si la hay), pesos declarados, coste por escenario, riesgos con plan de salida y clasificación final.

Documentos que este estudio obedece: `docs/contexto-proyecto.md`, `docs/catalogo-productos.md` v1.2, `docs/arbol-web-final.md` §6, `docs/propuesta-jugabilidad.md` §1, `docs/roadmap/plan-frontend.md`, `docs/roadmap/plan-backend.md`, `docs/roadmap/supuestos.md`, `docs/decisiones.md` (D-007, D-009, D-010, D-011).
Documento hermano, escrito en paralelo hoy: **`docs/stack/frontend.md`** (`desarrollador-frontend`), que compara ocho frameworks de presentación sobre la misma infraestructura y recomienda SvelteKit con una compuerta de prueba de 1,5 días. Este estudio es de **arquitectura completa** (framework + hosting + datos + auth + correo + analítica + operación); donde los dos se solapan, lo señalo y no repito su análisis.

> **Aviso D-006 (registro de marca), comprobado hoy.** Ninguno de los cinco disparadores se cumple: no hay usuarios, ni vídeo viral, ni prensa, ni conversación B2B, ni tercero con nombre parecido. Este documento es interno. El expediente de la OEPM sigue por calendario el viernes 30 de octubre (D-011/R5).

---

## 0. Veredicto en diez líneas

1. **La arquitectura actual, tal como está escrita en los planes, no gana. Gana la actual con siete correcciones** (arquitectura **F**, §4.6): región de funciones en Fráncfort, tope de gasto, usuario anónimo perezoso, salida ensayada en CI, DNS en Cloudflare en gris, disparador de cambio de proveedor de correo y reglas de lint contra la idiomática vieja de Next. Cuestan 1-2 días de agente en S1-S2 y cero calendario.
2. Con los pesos declarados (§2): **F 4,07 · A 3,92 · C 3,86 · D 3,71 · B 3,59 · E2 3,51 · E1 3,31** sobre 5. Las tres primeras comparten Supabase + Vercel; su diferencia está **dentro del margen de error** de mi puntuación.
3. **La elección del framework (Next 16 o SvelteKit 2) no la decide esta matriz**: la decide la prueba de 1,5 días de `docs/stack/frontend.md` §10 el viernes 11. Las siete correcciones valen igual para los dos.
4. **B («todo Cloudflare»), D («Astro con islas») y E («monolito clásico») pierden por dos criterios que no dependen de pesos**: el calendario (beta en S7, seis semanas) y la operación sin guardias. Sin calendario, D y B empatarían con A; con calendario, no.
5. **El coste no separa arquitecturas hasta 50.000 usuarios** (45-95 $/mes en todas menos B, que cuesta 5-10 $). A 200.000 usuarios lo que escala no es el hosting: es el **correo diario (≈ 650 $/mes con Resend) y la analítica (≈ 300 $/mes con PostHog)**, iguales en todas. Hay que registrar un disparador de cambio de proveedor de correo a 50.000 usuarios.
6. **Dos costes ocultos de la A que nadie había escrito:** Supabase cobra los usuarios anónimos como MAU por encima de 100.000 (≈ 325 $/mes a 200.000 usuarios con el diseño actual de «anónimo = cuenta de Auth»), y Vercel factura el tráfico de ataque y de bots a 0,15 $/GB sin tope si no se activa la gestión de gasto.
7. **Datos de 2026 que cambian el enunciado:** no existe Next.js 17 (la última es 16.3, agosto de 2026; una fuente que anunciaba la 17 es falsa); Hetzner ha subido precios dos veces en 2026 (+30-43 % en abril; +113-175 % en CPX/CCX en junio) y sus planes baratos están sin stock; Cloudflare compró Astro en enero; el envío de correo de Cloudflare sigue en beta; Paddle exige contrato a medida para productos por debajo de 10 $, que es el caso del Premium de 2,99 €.
8. **Residencia UE:** todas las arquitecturas menos E1 (Hetzner) dependen del marco UE-EE. UU. (DPF), válido hoy y recurrido ante el TJUE (asunto C-703/25 P, sin fecha de vista). Con datos personales mínimos (correo, alias, zona horaria) el riesgo es papeleo, no bloqueo; se mitiga alojando datos en Fráncfort en todos los proveedores, que ya es posible en Supabase, Vercel, PostHog, Sentry y Resend (envío).
9. **Cambiar ahora frente a en el mes 6:** cambiar de framework hoy cuesta 1,5-5 días de agente; en marzo de 2027, 25-35 días más 15-20 horas del fundador. Cambiar de **hosting** en el mes 6 cuesta 3-6 días sin reescribir (Docker `standalone` u OpenNext a Cloudflare): es la salida barata y hay que ensayarla en CI desde S2. Cambiar de **auth** es lo caro (5-8 días): Supabase Auth es el candado real, no Vercel.
10. **Decisiones que pido al fundador** (§10): aprobar F; dejar que la compuerta del viernes 11 decida el framework; registrar los disparadores de correo, de MAU anónimos y de hosting; y reabrir la elección de pasarela en B-41 con el dato de Paddle.

---

## 1. Qué tiene que hacer la arquitectura (requisitos extraídos, no inventados)

| # | Requisito | Fuente | Consecuencia arquitectónica |
|---|---|---|---|
| R1 | PWA móvil primero; LCP < 2,5 s, INP < 200 ms en Android de gama media; JS de `/` ≤ 110 KB comprimido; HTML de `/` ≤ 45 KB | `plan-frontend.md` §7 | Presupuesto de bytes como puerta de CI; el runtime del framework cuenta |
| R2 | 36 URL P0 indexables con HTML completo sin JS, un JSON-LD por página, OG dinámica **sin spoiler**, sitemaps con `lastmod` real, canónicas sin `www` | `arbol-web-final.md` §6, `plan-frontend.md` F-39..F-42 | SSG + ISR (o equivalente con `s-maxage`) + una ruta de imagen OG |
| R3 | **El caso cambia a medianoche local del dispositivo**; un número de caso = un contenido; el caso N se sirve desde D−1 10:00 UTC y se acepta hasta D+1 12:00 UTC | D-011/R4, `plan-backend.md` §4.1 | `/` no puede ser estática anclada a Madrid: se resuelve por número en el servidor o en el borde y se cachea por franja |
| R4 | **La solución nunca viaja al cliente.** Comprobar, Sabueso, acusar y el menú del interrogatorio corren en servidor, con presupuesto de 300 ms en p75 | D-011/R3, `plan-backend.md` §4.3 | El solver (TypeScript, `engine/`) se ejecuta en cada petición de esas cuatro acciones: el servidor tiene que ejecutar Node/JS o llamar a algo que lo haga |
| R5 | Motor en TypeScript, monorepo, contratos `zod` compartidos (C1-C9) | `plan-motor.md` M-02, `plan-backend.md` §2 | Un backend que no sea JS/TS necesita un proceso Node aparte o una reimplementación (prohibida: rompe «solución única») |
| R6 | Racha por número de caso, gracia, día concedido, anulación con reparación en lote; función SQL pura; reloj inyectable `app.ahora()`; `pg_cron` | `plan-backend.md` §1, §3, §4.2, §9 | Diseño pensado para **Postgres**; SQLite (D1) obliga a reescribirlo |
| R7 | Cuenta opcional por *magic link*; anónimo como cuenta real de Auth que asciende sin fusión; RLS en todas las tablas; escrituras solo desde `service_role` | `plan-backend.md` §1 decisiones 2-3, §3.3 | Auth gestionada (Supabase) o propia (Better Auth); el anticheat depende de que el cliente no escriba |
| R8 | Correo diario a las 08:00 locales por huso, doble *opt-in*, baja en un clic, `List-Unsubscribe` | F17, B-28 | Cron horario + proveedor transaccional con región UE |
| R9 | Analítica con presupuesto de eventos, PostHog UE, sin cargar antes del consentimiento | F15, F-52, B-25 | Agnóstico del stack; es el coste que escala |
| R10 | Presupuesto < 100 €/mes hasta 50.000 usuarios; **sin guardias nocturnas**; dos revisiones al día a hora fija | `plan-backend.md` §1 decisión 7, B-37 | Descarta lo que exige un operador humano a las 3 de la mañana |
| R11 | Fase 2: duelos **asíncronos** por enlace (sin tiempo real); Premium con *merchant of record*; packs PDF por enlace firmado | Catálogo §1.1 `DUELOS`, `plan-backend.md` §11 | Tiempo real **no** es requisito; Durable Objects sería sobreingeniería en fase 2 |
| R12 | Fase 3: widget `<script>`/`<iframe>` para medios sin cookies de terceros; app con Capacitor condicionada a D30 ≥ 25 % | Catálogo §1.4-1.5 | Tablero empaquetable sin el framework; concha estática para Capacitor |
| R13 | Beta cerrada en **S7 (19-25 de octubre)**; día L **martes 3 de noviembre**; límite duro 12 de enero de 2027 | D-011/R1, `roadmap.md` | Hoy es S1 día 1: seis semanas. Toda arquitectura que exija reescribir el plan de backend consume la holgura |

---

## 2. Método

### 2.1 Pesos declarados antes de puntuar (suman 100)

| # | Criterio | Peso | Por qué ese peso |
|---:|---|---:|---|
| 1 | Rendimiento móvil (JS enviado, hidratación, INP del 6×6) | 10 | Es puerta de CI, pero `docs/stack/frontend.md` ya lo pesa a 20 en su ámbito; aquí pesa lo que separa **arquitecturas**, no frameworks |
| 2 | SEO/GEO: HTML completo, OG dinámica, ISR o equivalente, sitemaps, AI crawlers | 12 | El 75 % de la adquisición del día 1 entra por búsqueda |
| 3 | PWA: caché del caso de hoy y de mañana, actualización que no rompe partida | 5 | Difícil en todas por igual; lo que cambia es la integración |
| 4 | Coste total a 1.000 / 10.000 / 50.000 / 200.000 usuarios mensuales | 10 | Importa poco hasta 50.000 y mucho después; el escenario de 200.000 es el que separa |
| 5 | Residencia UE y RGPD (dónde están los datos, quién es el responsable, DPF) | 8 | Obligación legal con datos personales mínimos; mitigable por región en casi todas |
| 6 | Complejidad operativa: piezas, qué se rompe a las 3 de la mañana, quién lo arregla | 12 | R10: no hay guardias; el fundador no es técnico; los agentes no reciben avisos de madrugada |
| 7 | Dependencia del proveedor y plan de salida | 7 | Se pesa **poder irse**, no lo que se paga hoy |
| 8 | Productividad de los agentes de IA (qué escriben bien, qué rompen en silencio) | 16 | Todo el código lo escriben agentes; un stack que cuesta un 20 % más de reintentos es riesgo de fecha |
| 9 | Tiempo hasta la beta (S7) con el roadmap actual | 12 | Seis semanas; los planes ya están escritos para A |
| 10 | Extensibilidad: duelos en tiempo real (si algún día), widget para medios, app nativa | 5 | Fase 2-3 y condicionadas; decidir hoy por un futuro incierto es el error clásico |
| 11 | Riesgo de cambios de precio o licencia del proveedor | 3 | Real (Hetzner 2026, Vercel 2024-25) pero mitigable con el criterio 7 |

Escala 1-5 por celda, con medios puntos. Lo que es juicio y no dato lo digo en cada fila (§5.2).

### 2.2 Supuestos de tráfico para el coste (los mismos para todas)

| Magnitud | Valor | Origen |
|---|---:|---|
| Sesiones por usuario mensual | 8 | Mezcla del jugador diario (≈ 25) y del ocasional (1-2); DAU/MAU ≈ 25-30 % |
| Peticiones al CDN por sesión | 25 | HTML, 3-4 trozos de JS, fuentes (en caché tras la primera), iconos, 5-8 llamadas a API |
| De ellas, dinámicas (función/Worker) | 8 | Caso (cacheado en CDN), guardar ×3, comprobar, acusar, calendario, racha |
| CPU media por petición dinámica | 30 ms | Lecturas de 5 ms y solver de hasta 300 ms |
| Transferencia por sesión | 0,25 MB | Primera carga 0,4 MB; visita repetida con *service worker* ≈ 0,08 MB |
| Eventos de analítica por sesión | 6 | Presupuesto de `plan-backend.md` §10 |
| Suscriptores del correo | 25 % de los usuarios hasta 10.000; 15 % desde 50.000 | El catálogo pide 3.000 a los 3 meses con ≈ 5.000 usuarios |
| Correos por suscriptor y mes | 30 | Uno al día, sin excepciones (F17) |
| Filas de base de datos por sesión | 50 leídas, 10 escritas | Intentos, calendario, racha, preferencias |

Resultado por escenario: **1.000 usuarios** → 8.000 sesiones, 200.000 peticiones, 2 GB, 48.000 eventos, 7.500 correos · **10.000** → 80.000 sesiones, 2 M peticiones, 20 GB, 480.000 eventos, 75.000 correos · **50.000** → 400.000 sesiones, 10 M peticiones, 100 GB, 2,4 M eventos, 225.000 correos · **200.000** → 1,6 M sesiones, 40 M peticiones, 400 GB, 9,6 M eventos, 900.000 correos.

Precios en la moneda de facturación de cada proveedor ($ salvo Hetzner en €); el tipo de cambio no altera el orden. Fuentes en §11, consultadas el 7 de septiembre de 2026. `WebFetch` está bloqueado para vercel.com, developers.cloudflare.com, fly.io, nextjs.org y varios más: las cifras vienen de búsquedas y de fuentes secundarias que cito; las marco como aproximadas donde lo son.

---

## 3. Estado de 2026 que condiciona la decisión (hechos, con fuente)

### 3.1 Versiones

| Pieza | Estado a 7 de septiembre de 2026 |
|---|---|
| **Next.js** | **16.3 (agosto de 2026)** es la última. **No existe Next.js 17**: una fuente anunciaba «Next.js 17, 15 de junio de 2026» y es falsa; el blog oficial va por 16.3 y solo menciona la 17 como plan futuro (Node como runtime por defecto). Next 16 (octubre de 2025): Turbopack por defecto, Cache Components (`use cache`, PPR) opcionales, `middleware.ts` → `proxy.ts` solo en Node, React 19.2 mínimo. **Ritmo de seguridad:** React2Shell (CVE-2025-55182, CVSS 10, diciembre de 2025), DoS CVE-2026-23864/23870 (enero de 2026), tres avisos de salto de `proxy` y una SSRF en autoalojado (CVE-2026-44578, mayo de 2026), y una «July 2026 Security Release» |
| **SvelteKit / Svelte** | SvelteKit 2.57 + Svelte 5.55 (mayo de 2026). **SvelteKit 3 en Release Candidate (septiembre de 2026)** con migración automática `npx sv@next migrate sveltekit-3`. MCP oficial con `svelte-autofixer` desde octubre de 2025 |
| **Astro** | Astro 6 estable (primer trimestre de 2026); 6.3 con enrutado Hono experimental. **Cloudflare compró The Astro Technology Company el 16 de enero de 2026**; licencia MIT mantenida; adaptadores de Vercel y Netlify siguen |
| **Hono** | Estable, ubicuo en Workers; su creador trabaja en Cloudflare |
| **Drizzle ORM** | 1.0 todavía en beta/RC (beta.22 en abril, rc.1 en junio de 2026): la API relacional v2 cambia respecto de 0.x, que es lo que hay en el corpus |
| **Rails / Laravel / Django** | Rails 8.1 (octubre de 2025) con Solid Queue/Cache/Cable y Kamal 2; Laravel 13 (17 de marzo de 2026, sin rupturas); Django 6.0 (diciembre de 2025) y **6.1 (agosto de 2026)** con tareas en segundo plano nativas |
| **Coolify** | v4 marcada estable en abril de 2026 tras dos años en beta; 4.1 en mayo (algunas reseñas la llaman «v5») |
| **Better Auth** | Activa; plugins de anónimo y *magic link*; adaptadores Drizzle y D1 |
| **OpenNext para Cloudflare** | 1.20.x; soporta todas las menores de Next 16 |

### 3.2 Precios

| Proveedor | Precio relevante en 2026 |
|---|---|
| **Vercel** | Pro 20 $/asiento con 20 $ de crédito de uso. Incluye ≈ 1 TB de transferencia (después 0,15 $/GB), 10 M peticiones al borde (después 2 $/M), ≈ 1 M invocaciones, CPU activa a **0,128 $/h en EE. UU. y 0,184 $/h en Fráncfort**, memoria 0,0106 $/GB-h. **El plan Hobby prohíbe uso comercial.** Gestión de gasto: alerta por defecto (≈ 200 $), tope duro opcional |
| **Supabase** | Pro **25 $/mes desde 2021**, con 10 $ de crédito de cómputo (Micro incluido; Small +5, Medium +50). Incluye 8 GB de disco (0,125 $/GB), 250 GB de salida (0,09 $/GB), 2 M invocaciones de Edge Functions, 500 conexiones Realtime, y **100.000 MAU; después 0,00325 $/MAU, y los inicios anónimos cuentan**. Nuevo cobro de logs desde junio-julio de 2026. Serie F de 500 M$ a 10.500 M$ de valoración (junio de 2026) |
| **Cloudflare** | Workers Paid **5 $/mes**: 10 M peticiones (0,30 $/M después), 30 M ms de CPU (0,02 $/M ms). D1: 25.000 M filas leídas, 50 M escritas y 5 GB incluidos. Durable Objects: 1 M peticiones y 400.000 GB-s incluidos. KV: 10 M lecturas. R2: 0,015 $/GB-mes, **sin coste de salida**. Cron gratis. Activos estáticos gratis. **Email Sending en beta pública (abril de 2026): 3.000 correos incluidos, 0,35 $/1.000 después.** Free plan de D1 con corte duro desde el 1 de septiembre de 2026 |
| **Neon** (Databricks desde mayo de 2025) | Launch 0,106 $/CU-hora, almacenamiento 0,35 $/GB-mes, sin mínimo mensual desde diciembre de 2025; región Fráncfort |
| **Hetzner** | **Dos subidas en 2026**: 1 de abril (+30-43 % en CX/CAX/CPX) y 15 de junio (CPX/CCX +113-175 %, Intel/ARM +30 %). CX23 5,49 €, CX33 8,49 €, CPX12 11,99 €, CPX22 19,49 €. **A 4 de septiembre los rastreadores de stock marcan CX23/CX33/CAX «no disponible» en FSN1/NBG1/HEL1**; el más barato pedible es CPX12. Las instancias existentes conservan precio; un cambio de tamaño lo pierde |
| **Fly.io** | Sin plan gratuito; shared-cpu-1x 1 GB ≈ 5,92 $/mes; **Managed Postgres desde 38 $/mes** (Basic) y 72 $ (Starter); región `mad` (Madrid) disponible; salida 0,02 $/GB |
| **PostHog** | 1 M eventos gratis; después ≈ 0,00005 $/evento (1-2 M) y tramos decrecientes (≈ 0,0000343 $ de 2 a 15 M); nube UE en Fráncfort |
| **Resend** | 3.000 gratis; Pro 20-35 $ (50.000-100.000); Scale desde 90 $; ≈ 650 $ por millón. **Región de envío UE (Irlanda), pero cuenta, logs y metadatos en EE. UU.** |
| **Sentry** | Developer gratis (5.000 errores); Team 26 $/mes (50.000). **Región UE (Fráncfort) en todos los planes, sin coste, elegida al crear la organización** |
| **Paddle / Lemon Squeezy / Stripe** | Paddle y Lemon Squeezy 5 % + 0,50 $; **Paddle exige contrato a medida para productos por debajo de 10 $** (el Premium mensual es 2,99 €). Stripe Managed Payments (MoR propio de Stripe, anunciado en enero de 2026, ≈ 35 países en mayo) suma 3,5 % a la tarifa base (1,5 % + 0,25 € en Europa) |

### 3.3 Incidentes de los últimos doce meses

| Proveedor | Qué pasó | Lección para nosotros |
|---|---|---|
| **Cloudflare** | 18 de noviembre de 2025: caída global de ≈ 3 h por un fichero de configuración de Bot Management (afectó a Workers KV, Access, etc.). **7-14 de agosto de 2026: 13 incidentes en 8 días** en R2, Durable Objects, KV, Workers AI y red (fuente secundaria sobre la página de estado). 20 de febrero de 2026: retirada de rutas BYOIP | B concentra **todo** el riesgo en un proveedor con un año accidentado; cuando cae, no hay nada que hacer salvo esperar |
| **Vercel** | Febrero de 2026: dos incidentes de panel y *builds* (2,5 h y 4,5 h); 9 incidentes menores en los últimos 30 días según agregadores. Ninguno de servicio de páginas global registrado en las fuentes | Afecta a desplegar, no a servir; tolerable |
| **Supabase** | **12 de febrero de 2026: 3 h 42 min sin servicio en us-east-2** (todos los servicios, 4,92 % de clientes) por un cambio interno que activó un bloqueo de red de AWS; reconocen que tardaron en escalar al equipo correcto | Regional: **Fráncfort no se vio afectado**. Elegir región UE es también resiliencia |
| **Fly.io** | Marzo y agosto de 2026: degradaciones de Consul/Corrosion que afectan a Postgres y a la red privada; Managed Postgres con incidentes de plano de control (1,5 h el 1 de agosto) | «Casi todos los incidentes trazan a los mismos dos sistemas» |
| **Next.js** | Cuatro tandas de CVE en nueve meses (diciembre, enero, mayo, julio). **En Vercel, el WAF mitigó React2Shell automáticamente y sin coste**; en autoalojado hay que parchear en horas | Si Next, entonces Vercel (o asumir guardia de parches). Es un argumento de operación, no de marketing |
| **Supabase + apps hechas por IA** | CVE-2025-48757: 170+ apps de Lovable con tablas sin RLS; análisis de 2025: 70 % de las apps de Lovable con RLS desactivada en al menos una tabla | El plan de backend ya lo cubre (escrituras solo `service_role`, prueba por las cuatro vías): **esa guardia no se recorta** |

### 3.4 Licencias, adquisiciones y marco legal

- **Todos los frameworks JS relevantes pertenecen hoy a un proveedor de hosting**: Next.js (Vercel), Svelte (mantenido por empleados de Vercel), Nuxt (Vercel, desde 2025), Astro (Cloudflare, 2026), Hono (su creador en Cloudflare). Licencias MIT en todos; el riesgo no es de licencia, es de **dirección**: cada framework optimiza para su casa. Los adaptadores lo hacen manejable.
- **Rails, Django y Laravel** son los únicos «neutrales» (37signals, Django Software Foundation, Laravel Inc.). Coolify es Apache-2. Supabase es Apache-2 y autoalojable; Neon, Apache-2. PostHog MIT. Sentry FSL (irrelevante en SaaS).
- **Cloudflare bloquea rastreadores de IA por defecto** para zonas nuevas desde julio de 2025 y, desde el 15 de septiembre de 2026, aplica un nuevo defecto («permitir búsqueda, bloquear entrenamiento y agentes en páginas con anuncios», y bloquear rastreadores mixtos). Afecta a B y a cualquier CDN de Cloudflare delante: hay que permitir explícitamente `OAI-SearchBot`, `PerplexityBot` y compañía (R8 de `plan-frontend.md`).
- **Marco UE-EE. UU. (DPF):** el Tribunal General lo confirmó el 3 de septiembre de 2025 (Latombe); recurso ante el TJUE registrado el 31 de octubre de 2025 (C-703/25 P), sin fecha de vista; los comentaristas no esperan sentencia antes de finales de 2026 o 2027. Si cae, todos los proveedores estadounidenses (Vercel, Supabase Inc., Cloudflare, Fly, Neon/Databricks, PostHog Inc., Sentry, Resend) pasan a cláusulas contractuales tipo con evaluación de impacto. Con datos en Fráncfort la exposición real es mínima; **Hetzner es la única opción sin transferencia**.

---

## 4. Las arquitecturas

Cada una con diagrama, cómo resuelve R1-R13, qué se rompe a las 3 de la mañana y plan de salida. El coste está en §6.

### 4.1 A · La actual: Next.js 16 + Supabase + Vercel

```
 navegador (PWA, Serwist)
   │ HTTPS
   ▼
 Vercel CDN ── activos estáticos, SSG (landings), ISR (archivo), caché de /api/caso
   │
   ▼
 Vercel Functions (Fluid, Node, región fra1)   ← Next.js 16 App Router
   ├─ RSC/SSR de /, /r/[id], /caso/*            ├─ next/og (satori) → imagen OG sin spoiler
   ├─ rutas /api/* (caso, calendario, archivo)  ├─ acciones de servidor (comprobar, sabueso, acusar)
   └─ engine/ (solver TS) importado en proceso  └─ proxy.ts (Node) → número de caso por zona
   │ clave de servicio
   ▼
 Supabase (Fráncfort): Postgres + Auth (anónimo, magic link) + pg_cron + Storage (PDF)
   │
   ├─ Resend (envío UE)        ├─ PostHog UE      ├─ Sentry UE
   └─ GitHub Actions: generación de casos (motor) → ingesta
```

- **R3 (medianoche local):** `proxy.ts` corre solo en Node en Next 16 (no en el borde). Funciona: lee la zona declarada (cookie) y reescribe a `/_caso/[n]` con `use cache` + `cacheTag`; el CDN cachea por franja. Se pierde el «borde» literal, no la función.
- **R4-R5 (solver en servidor):** `engine/` se importa en la función; 30-300 ms de CPU activa; presupuesto de 300 ms p75 se cumple sin frío relevante (Fluid reutiliza instancias).
- **R6-R7:** el plan de backend está escrito para esto: Postgres, RLS, `pg_cron`, Auth anónima.
- **R2 (SEO/GEO):** su terreno. `generateMetadata`, `sitemap.ts`, `opengraph-image.tsx`, ISR con `revalidateTag`.
- **R1 (móvil):** el presupuesto de 110 KB está **en el techo del framework** (React ≈ 40 KB comprimidos antes de la primera línea): `docs/stack/frontend.md` §4.2 lo desarrolla. Es cumplible con disciplina; no hay holgura.
- **R12 (widget, nativa):** el widget arrastra React (≈ 45 KB) o exige un segundo empaquetado del tablero; Capacitor exige `output: 'export'`, que desactiva ISR, SSR y `next/og` → dos configuraciones de construcción.
- **Qué se rompe a las 3 de la mañana:** (1) una CVE de Next/React: Vercel la mitiga en el WAF y se parchea por la mañana; (2) caída regional de Supabase Fráncfort: nada que hacer, el monitor concede el día (B-23); (3) `pg_cron` no publica el caso: alerta de depósito (B-19); (4) ISR sirve el caso de ayer tras medianoche: el test de `curl` de CF-5 y `revalidateTag` desde el cron; (5) **factura**: un rastreador o un ataque que llega a la aplicación se cobra a 0,15 $/GB y 2 $/M peticiones sin tope si no hay gestión de gasto (casos documentados de 1.477 $, 3.200 $ y 23.000 $); (6) el agente escribe `middleware.ts`/`unstable_cache` de Next 15 y **falla en silencio** en 16.
- **Plan de salida:** hosting → `output: 'standalone'` en Docker (Hetzner/Fly) u OpenNext a Cloudflare Workers (3-6 días; se pierden `next/og` nativo, ISR gestionado y el WAF automático); datos → `pg_dump` a cualquier Postgres (2-4 días); **auth → Better Auth con la tabla `usuarios` (5-8 días; los usuarios vuelven a entrar por magic link)**. Lo pegajoso es Auth, no Vercel.

### 4.2 B · «Todo Cloudflare»: SvelteKit en Workers + D1 (o Hyperdrive → Postgres) + DO + KV/R2 + Cron + Email

```
 navegador (PWA)
   │
   ▼
 Cloudflare (PoP Madrid/Barcelona) ── activos estáticos gratis, Cache API, WAF, bots
   │
   ▼
 Worker único (SvelteKit adapter-cloudflare, nodejs_compat por defecto desde 2026-08-04)
   ├─ SSR de todo, `request.cf.timezone` → número de caso en el borde (R3 exacto)
   ├─ engine/ en proceso (CPU hasta 30 s por defecto, ampliable a 5 min)
   ├─ workers-og (satori + resvg-wasm) → OG
   ├─ Better Auth (anónimo + magic link) sobre D1 con Drizzle
   ├─ Cron Triggers (publicación, purgas, correo horario) + Queues
   └─ Durable Objects (solo si algún día hay tiempo real; los duelos de fase 2 son asíncronos)
   │ bindings
   ▼
 D1 (SQLite, jurisdicción `eu`, Time Travel 30 días)  ── o Hyperdrive → Neon/Supabase Postgres (Fráncfort)
 KV (caché de casos) · R2 (PDF, copias) · Email Sending (beta) o Resend
 PostHog UE · Sentry UE · GitHub Actions (motor)
```

- **R3:** el mejor de todos: Cloudflare da `cf.timezone` del visitante; el número de caso se resuelve en el borde con cero infraestructura.
- **R4-R5:** el solver corre en el Worker; `nodejs_compat` por defecto; CPU sobrada.
- **R6:** **aquí está el problema.** El plan de backend es Postgres: racha como función SQL pura, `pg_cron`, `citext`, arrays, `jsonb`, reloj inyectable `app.ahora()`, RLS como segundo cerrojo. En D1 (SQLite) todo eso se reescribe en TypeScript; con Hyperdrive a Neon/Supabase se conserva, pero entonces no es «todo Cloudflare» y se paga Postgres aparte (§6).
- **R7:** no hay auth gestionada: Better Auth con plugins de anónimo y magic link (3-5 días, más revisión de seguridad; es donde los agentes cometen los errores más caros y no hay proveedor que los mitigue).
- **R8:** Email Sending está en **beta** con aviso de cambios de API: usar Resend hasta que sea GA.
- **R2:** sin primitiva de ISR: `Cache-Control: s-maxage` + Cache Rules para HTML + purga por URL (la purga por etiqueta es Enterprise). Suficiente para 36 URL y un archivo diario. **Rastreadores de IA bloqueados por defecto**: hay que abrirlos (§3.4).
- **UE:** D1, DO y R2 admiten jurisdicción `eu` en autoservicio (D1 desde noviembre de 2025); el Worker corre donde entra la petición (para España, PoP español). **Logs y metadatos no quedan en la UE sin Data Localization Suite, que es Enterprise.**
- **Qué se rompe a las 3 de la mañana:** (1) caída global de Cloudflare (18-nov-2025) o del racimo de agosto de 2026: todo a la vez, sin plan B; (2) un bug propio en la auth: nadie lo mitiga por nosotros; (3) D1: límite de 10 GB por base y un solo escritor; (4) el Email beta cambia de API; (5) el agente escribe SQL de Postgres contra SQLite o usa una API de Node que el runtime no tiene (menos frecuente desde agosto de 2026).
- **Plan de salida:** SvelteKit → cualquier adaptador (1 línea); D1 → exportar SQLite a Postgres (1-2 días si el esquema es portable, que no lo será si se usaron extensiones); **DO no tiene equivalente** (si se usaron, se reescribe); Better Auth es portable (está en nuestra base). Salida media.

### 4.3 C · «Svelte y sencillo»: SvelteKit 2 + Supabase (Fráncfort) + Vercel (o Cloudflare)

```
 navegador (PWA con $service-worker)
   │
   ▼
 Vercel CDN (o Cloudflare)
   │
   ▼
 SvelteKit (adapter-vercel: Fluid, ISR por ruta, edge opcional / adapter-cloudflare)
   ├─ +page.server.ts con `load`; prerender/ssr/csr por ruta (SSG, ISR, SSR, CSR)
   ├─ engine/ en proceso; comprobar/sabueso/acusar como +server.ts
   ├─ satori + resvg → OG (≈ 1 día que Next regalaba)
   └─ / resuelta por número con cookie de zona; en Vercel, ruta `edge` si se quiere borde
   │ clave de servicio (nunca supabase-js en cliente para lo público)
   ▼
 Supabase (Fráncfort): Postgres + Auth + pg_cron + Storage   ← el plan de backend intacto
 Resend · PostHog UE · Sentry UE · GitHub Actions (motor)
```

- **Es la A con otro framework.** Los nueve contratos C1-C9 son HTTP y `zod`: no cambian. `docs/stack/frontend.md` §6 detalla el renderizado de las 36 URL, el tablero con runas, la OG y el service worker; no lo repito.
- **R1:** runtime de ≈ 1,6 KB; el presupuesto deja de estar en el techo. **R12:** el tablero compilado como *custom element* es el widget (≈ 10-15 KB) sin obligar al medio a cargar React; `adapter-static` es la concha de Capacitor con el mismo código.
- **R2:** ISR nativo en `adapter-vercel`; OG, sitemap y `robots.txt` a mano (≈ 1,5 días).
- **Variante C′ (SvelteKit en Cloudflare Workers + Supabase por REST/Hyperdrive):** hosting a 5-35 $/mes en vez de 20-105 $; conserva el backend Postgres; pierde el WAF automático de Vercel (Cloudflare tiene el suyo) y gana `cf.timezone`. Añade una pieza (Hyperdrive) y una cuenta más.
- **Qué se rompe a las 3 de la mañana:** lo mismo que A menos (1) y (6), más: **SvelteKit 3 en RC** (la documentación que consulte el agente en octubre describirá la 3: fijar 2.57.x y volcar `llms.txt` de la 2 en el repositorio, como propone el estudio de frontend); menos avisos críticos de seguridad en su historial que Next.
- **Plan de salida:** hosting = una línea de adaptador (la mejor de todas); datos y auth = igual que A.

### 4.4 D · «Astro con islas»: Astro 6 (landings y archivo) + isla Svelte (tablero) + API en Hono + Postgres gestionado

```
 navegador
   │
   ▼
 Cloudflare Workers (Astro 6 + @astrojs/cloudflare, workerd en desarrollo = producción)
   ├─ 30 páginas .astro con CERO JS (landings, archivo, guías, legales)   → SEO/GEO óptimo
   ├─ / y el juego: UNA isla Svelte `client:load` con enrutado interno (SPA dentro del sitio)
   ├─ server islands para lo personalizado (racha en cabecera, cuenta atrás)
   └─ src/fetch.ts con Hono (6.3, experimental) o Worker aparte: /api/*, comprobar, sabueso, acusar, OG
   │
   ▼
 Neon (Fráncfort) o Supabase (Fráncfort) vía Hyperdrive · Better Auth (o Supabase Auth)
 Resend · PostHog UE · Sentry UE · Cron Triggers · GitHub Actions (motor)
```

- **R2:** la mejor garantía de HTML sin JS del estudio, porque es el valor por defecto. `@astrojs/sitemap`, i18n de rutas dentro.
- **R1:** las páginas de contenido, imbatibles; **el juego es una aplicación** (cronómetro, historial, partida persistida, hoja inferior): en un modelo multipágina cada navegación destruye la isla, así que el juego entero acaba siendo una SPA de Svelte dentro de Astro: **dos modelos mentales en un repositorio** (`docs/stack/frontend.md` §7 llega a la misma conclusión).
- **R6-R7:** Postgres se conserva; auth propia salvo que se use Supabase Auth (posible, pero entonces la pieza «Postgres gestionado» es Supabase y D converge con C′).
- **Astro es de Cloudflare desde enero:** primera clase en Workers (el servidor de desarrollo corre en `workerd`), adaptadores de Vercel/Netlify mantenidos. Riesgo de dirección, no de licencia.
- **Qué se rompe a las 3 de la mañana:** tres cadenas de construcción (Astro, isla, Hono) que se desincronizan; el estado del juego fuera del framework de páginas; enrutado Hono en Astro **experimental**; lo demás como B.
- **Plan de salida:** adaptadores de Astro; Hono corre en cualquier sitio; la isla Svelte se lleva a SvelteKit sin tocar el estado. Salida buena.

### 4.5 E · «Monolito clásico y barato»

**E1 · Rails 8.1 / Laravel 13 / Django 6.1 + HTMX/Alpine + isla JS, Postgres, Hetzner con Coolify**

```
 navegador
   │
   ▼
 Cloudflare (gratis) DNS + CDN + WAF   ← imprescindible: un VPS sin CDN no aguanta un ataque casero
   │
   ▼
 Hetzner CPX22 (2 vCPU, 4 GB) con Coolify: Docker, Traefik, TLS
   ├─ Rails (Puma + Solid Queue/Cache) · Laravel (Octane + scheduler) · Django (gunicorn + tasks 6.0)
   ├─ HTML en servidor + HTMX/Hotwire; tablero como isla Svelte/Preact
   ├─ **proceso Node aparte** con engine/ (solver TS) llamado por HTTP local para comprobar/sabueso/acusar
   ├─ Postgres en contenedor (copias a Object Storage de Hetzner) o servidor aparte
   └─ cron del framework (correo horario, publicación)
 Resend/SES · PostHog UE (o autoalojado) · Sentry UE · GitHub Actions (motor)
```

**E2 · Node/Hono monolito en Fly.io (región `mad`)**

```
 navegador → Cloudflare (gratis) → Fly Machines ×2 (shared-cpu-1x, 1 GB, `mad`)
   Hono: SSR (JSX de Hono o plantillas) + HTMX, isla Svelte para el tablero,
   engine/ en proceso, Better Auth, cron en proceso, satori → OG
   → Fly Managed Postgres (Basic 38 $/mes, copias y HA incluidas)
```

- **R5 es el que rompe E1.** El motor es TypeScript y hay que ejecutarlo en cada comprobación, Sabueso, acusación y menú del interrogatorio. En Ruby/Python/PHP eso es un proceso Node al lado (más una pieza, más un fallo posible) o reimplementar el solver (prohibido: dos solvers son dos verdades sobre «solución única»). E2 lo evita quedándose en TypeScript.
- **R10 es el que rompe E1 y hiere a E2.** En un VPS **tú eres el operador**: disco lleno, `VACUUM`, renovación TLS, Docker que publica puertos saltándose el cortafuegos (caso documentado en una reseña de Coolify: aviso del CERT por Postgres expuesto), copias que nadie ha restaurado, actualizaciones de kernel. Ningún agente recibe la alerta a las 3 de la mañana y el fundador no es técnico. En Fly, las máquinas y Postgres son gestionados, pero su historial de 2025-2026 traza a Consul/Corrosion.
- **Hetzner en 2026 ya no es «barato y estable»:** dos subidas, planes básicos sin stock, y un cambio de tamaño repone el precio nuevo. Alternativas europeas (UpCloud, Scaleway, OVH, netcup) existen y también han subido.
- **UE:** E1 es la única sin transferencia internacional de datos de juego (Hetzner GmbH). Es su mejor argumento y es real.
- **Agentes:** Rails/Django/Laravel tienen corpus enormes y API estables (Laravel 13 sin rupturas); HTMX/Hotwire, mucho menos; y el sidecar Node es exactamente el tipo de fontanería que se pudre. E2 mantiene TypeScript de punta a punta con Hono, que los agentes escriben bien.
- **Qué se rompe a las 3 de la mañana:** todo lo anterior, y lo arreglas tú.
- **Plan de salida:** perfecto (nada propietario) y, a la vez, irrelevante: el problema de E no es irse, es quedarse.

### 4.6 F · La sexta: «A endurecida» (la A que yo firmaría)

No es otro stack: es A (o C, si el viernes 11 gana SvelteKit) con las siete correcciones que ninguno de los dos planes escribe. Las he puesto como arquitectura aparte porque la matriz cambia con ellas y porque son decisiones, no detalles.

```
 DNS en Cloudflare (gris = sin proxy; se pasa a naranja solo si hay abuso o factura)
   │
   ▼
 Vercel (Pro) ── funciones fijadas a `fra1` en vercel.json ── gestión de gasto: alerta 60 $, tope 200 $
   │              WAF gratuito con reglas de bots; rastreadores de IA permitidos explícitamente
   ▼
 Next 16 (modo de caché clásico, sin Cache Components hasta S11) o SvelteKit 2 (fijado a 2.57.x)
   lint que rompe el build con: middleware.ts, unstable_cache, revalidate de segmento, pages/, user-scalable=no
   AGENTS.md con versión exacta + docs de node_modules + next-devtools-mcp / MCP de Svelte
   │
   ▼
 Supabase Fráncfort ── **usuario anónimo perezoso**: la fila de auth.users se crea en la primera
   interacción con el tablero, no al cargar la página (la mitad o menos de MAU facturables; menos filas basura)
 Resend (envío UE) hasta 150.000 correos/mes → disparador a SES o Cloudflare Email (cuando sea GA)
 PostHog UE (presupuesto de eventos) · Sentry UE (elegido al crear la organización; no se puede cambiar)
 CI: job mensual `next build` standalone en Docker + job trimestral OpenNext→Workers (miden la deriva)
 B-30: pg_dump semanal cifrado a almacenamiento propio (ya está); añadir export de auth.users
```

| # | Corrección | Dónde entra | Coste | Qué evita |
|---:|---|---|---:|---|
| 1 | `regions: ["fra1"]` en `vercel.json`; PostHog UE; Sentry UE al crear la organización; Resend región UE de envío; DPA de los cuatro archivados en `docs/legal/` | F-02, B-02, F-06, B-25, B-28 | 0,25 días | Que las funciones corran en `iad1` por defecto y los datos crucen el Atlántico por descuido |
| 2 | Gestión de gasto de Vercel: alerta a 60 $, tope duro a 200 $ (no «pausar»), WAF con reglas de bots y desafío; comprobación de `OAI-SearchBot` en CF-5 | F-05, B-29 | 0,25 días | La factura de 1.477 $ por un rastreador; la de 23.000 $ por un ataque |
| 3 | Usuario anónimo **perezoso** (primera interacción con el tablero) manteniendo la decisión 3 de backend | B-04, B-11 | 0,25 días | ≈ 325 $/mes a 200.000 usuarios y cuentas basura; mantiene RLS uniforme |
| 4 | Next 16 en caché clásico hasta S11; lint contra la idiomática de Next 15; `AGENTS.md` con versión exacta; MCP de Next o de Svelte según el framework | F-02, F-05, web/README.md | 0,5 días | El fallo silencioso «sirve el caso de ayer» |
| 5 | Salida ensayada: build `standalone` en Docker (mensual) y OpenNext a Workers (trimestral) como jobs no bloqueantes; documento `docs/stack/salida.md` con los tres caminos y su coste | F-05, B-38 | 0,5 días + 0,1 días/mes | Descubrir en el mes 6 que la salida cuesta el triple |
| 6 | Disparador de correo: a 50.000 usuarios o 150.000 correos/mes, migrar el envío a SES (≈ 0,10 $/1.000) o a Cloudflare Email si es GA; `List-Unsubscribe` y doble *opt-in* portables | B-28, `docs/backend.md` §10 | 0 ahora, 1-2 días entonces | 650 $/mes a 200.000 usuarios |
| 7 | DNS en Cloudflare en gris desde el día 1 (registro y DNS, sin proxy) | B-02 | 0,1 días | Que pasar a proxy naranja (tope real de tráfico, WAF gratuito) sea un clic y no una migración de DNS con TTL |

Total: **≈ 2 días de agente en S1-S2**, cero calendario, ninguna reescritura. Y una regla: **B, D y E no se reevalúan antes del mes 6**; el disparador para reabrir hosting es «factura de Vercel > 150 $/mes tres meses seguidos o un incidente de facturación», y la salida ensayada en la corrección 5 es la que se ejecuta.

---

## 5. Matriz de puntuación ponderada

### 5.1 Puntuaciones (1-5) y total sobre 5

| Criterio (peso) | A | B | C | D | E1 | E2 | **F** |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 Rendimiento móvil (10) | 3,5 | 5 | 4,5 | 4,5 | 4 | 4 | 3,5 |
| 2 SEO/GEO (12) | 5 | 4 | 4 | 5 | 4,5 | 4 | 5 |
| 3 PWA (5) | 3,5 | 4 | 4,5 | 3 | 3 | 3,5 | 3,5 |
| 4 Coste (10) | 3 | 5 | 3 | 4,5 | 4 | 3,5 | 3,5 |
| 5 UE y RGPD (8) | 3 | 4 | 3 | 4 | 5 | 3,5 | 3 |
| 6 Operación y 3 a. m. (12) | 4 | 3 | 4 | 3 | 1,5 | 2,5 | 4,5 |
| 7 Dependencia y salida (7) | 3 | 2 | 4 | 4 | 5 | 4,5 | 4 |
| 8 Agentes de IA (16) | 4,5 | 3 | 3,5 | 3 | 3 | 4 | 4,5 |
| 9 Tiempo hasta la beta (12) | 5 | 2 | 4,5 | 2,5 | 1,5 | 2,5 | 4,5 |
| 10 Extensibilidad (5) | 3 | 5 | 4 | 4 | 3 | 3,5 | 3 |
| 11 Riesgo de precio o licencia (3) | 3 | 4 | 3,5 | 4 | 2,5 | 3 | 4 |
| **Total ponderado / 5** | **3,92** | **3,59** | **3,86** | **3,71** | **3,31** | **3,51** | **4,07** |

Orden: **F 4,07 · A 3,92 · C 3,86 · D 3,71 · B 3,59 · E2 3,51 · E1 3,31.** «C endurecida» (SvelteKit + las mismas siete correcciones) da **4,02**: a cinco centésimas de F, dentro del ruido. C′ (SvelteKit en Workers + Supabase) da 3,83 sin correcciones.

### 5.2 Justificación de las filas donde hay juicio

- **Rendimiento (1):** A/F 3,5 porque el presupuesto de 110 KB está en el techo de React; C/D 4,5 por runtime de ≈ 2 KB; B 5 por lo mismo más borde y salida gratis; E 4 por HTML de servidor con isla pequeña. Dato de terceros, no medido por mí (igual que en `docs/stack/frontend.md` §1).
- **SEO/GEO (2):** A/F/D 5 (todo integrado o cero JS por defecto); C 4 (ISR nativo en Vercel, OG y sitemap a mano); B 4 (sin ISR, con Cache Rules y purga por URL; bloqueo de IA por defecto que hay que abrir); E1 4,5 (HTML completo, caché con Solid Cache/Redis, OG con satori en el sidecar o headless).
- **Coste (4):** con la tabla de §6. B 5 por orden de magnitud; D 4,5; A/C 3 por el escenario de 200.000 (borde + MAU anónimos); F 3,5 porque las correcciones 3 y 7 recortan ambos.
- **UE (5):** E1 5 (sin transferencia); B/D 4 (jurisdicción `eu` en datos; logs fuera); A/C/F 3 (datos en Fráncfort, responsable estadounidense, funciones en `fra1` solo si se configura). **F no sube porque fijar la región no cambia quién controla el proveedor.**
- **Operación (6):** F 4,5 (gestionado, WAF que mitiga CVE, tope de gasto, salida ensayada); A/C 4; B 3 (un solo proveedor con un año accidentado; auth propia; SQLite); D 3 (tres cadenas); E2 2,5; **E1 1,5: es la única donde la respuesta a «qué se rompe a las 3 de la mañana» es «y lo arreglas tú»**.
- **Agentes (8):** es la fila con más juicio y la desarrollo en §8. A/F 4,5 (corpus mayor, herramientas de agente de primera, pero deriva de versión 13→16 que falla en silencio); E2 4 (TypeScript liso + Hono); C 3,5 (corpus menor y contaminado por Svelte 4, mitigado por MCP oficial con autofixer y por un compilador que rechaza lo obsoleto); B/D/E1 3 (APIs de Workers/Astro 6 finas en el corpus; auth propia; sidecar; SQL de SQLite).
- **Tiempo a beta (9):** A 5 (los planes son estos); F 4,5 (dos días); C 4,5 (1,5 días de prueba con compuerta de reversión y ≈ 3 días de fontanería, según el estudio de frontend; sin tocar backend); D 2,5 y B 2 (reescritura del plan de backend y auth propia: 8-15 días, beta en S8-S9, día L al 10 de noviembre o al 12 de enero); E 1,5-2,5 (15-25 días más montar operación).
- **Extensibilidad (10):** B 5 (DO/WebSockets, widget desde el borde, concha estática); C/D 4 (custom element como widget, `adapter-static`); A/F 3 (React en el widget, `output: export` incompatible con lo que sostiene la web).

### 5.3 Sensibilidad

| Cambio de pesos | Resultado | Lectura |
|---|---|---|
| **Sin calendario** (peso 9 → 0) | F 4,01 · C-end. 3,95 · D 3,88 · B 3,81 · A 3,77 · C 3,77 · E2 3,64 · E1 3,55 | Sin fecha, D y B empatan con A: **el calendario es lo que las descarta**, no su técnica |
| **Agentes a la mitad** (16 → 8) | C-end. 4,07 · F 4,03 · C 3,89 · A 3,86 · D 3,77 · B 3,64 | Si el fundador cree menos en la ventaja de corpus de React, gana SvelteKit endurecido por una centésima: **empate técnico** |
| **Coste al doble** (10 → 20) | F 4,01 · C-end. 3,97 · A 3,83 · C 3,78 · D 3,78 · B 3,72 | Ni con el coste al doble sube B al podio: su ahorro de 40-90 $/mes no paga 8-15 días de reescritura ni la auth propia |

Conclusión robusta a los pesos: **la infraestructura (Supabase Fráncfort + Vercel fra1 + siete correcciones) es la decisión; el framework es un empate que debe zanjar una prueba, no una matriz.**

---

## 6. Coste mensual por escenario

### 6.1 Capa que depende de la arquitectura (hosting, cómputo, base de datos, auth, cron, OG)

| Arquitectura | 1.000 | 10.000 | 50.000 | 200.000 | Qué manda a 200.000 |
|---|---:|---:|---:|---:|---|
| **A** Next + Vercel + Supabase | 45 $ | 45 $ | 55 $ | **180-505 $** | Vercel ≈ 105 $ (30 M peticiones al borde fuera de cuota = 60 $; CPU en `fra1` ≈ 19 $; invocaciones ≈ 7 $) + Supabase Medium 75 $ + **MAU anónimos 0-325 $** |
| **B** todo Cloudflare | 5 $ | 6 $ | 8 $ | **30-40 $** | Workers 5 $ + CPU ≈ 7 $ + D1/KV/R2 ≈ 10-20 $; sin salida; sin auth de pago |
| **C** SvelteKit + Vercel + Supabase | 45 $ | 45 $ | 55 $ | 170-485 $ | Como A, con ≈ 5 % menos de borde y CPU |
| **C′** SvelteKit en Workers + Supabase | 30 $ | 30 $ | 38 $ | 110-435 $ | Workers 5-35 $ + Supabase 75 $ (+ MAU) |
| **D** Astro + Hono en Workers + Neon | 20 $ | 20 $ | 65 $ | ≈ 195 $ | Neon 1-2 CU ≈ 155 $ + 7 $ de almacenamiento + Workers ≈ 35 $ |
| **E1** Hetzner + Coolify | ≈ 30 € | ≈ 30 € | ≈ 80 € | **≈ 250-300 € + operación humana** | CPX22 19,49 € + copias + Object Storage; a 50.000, servidor de BD aparte y balanceador; a 200.000, dos apps + CCX (tras la subida del 113-175 %) |
| **E2** Node/Hono en Fly.io | 50 $ | 50 $ | 95 $ | ≈ 250 $ | 2 máquinas + Managed Postgres Basic 38 $ → Starter 72 $ → superior |
| **F** A endurecida | 45 $ | 45 $ | 55 $ | **≈ 130 $** | Vercel ≈ 55 $ (Cloudflare en naranja absorbe activos y bots; solo el origen cuenta) + Supabase 75 $; MAU dentro de los 100.000 con el anónimo perezoso |

### 6.2 Capa común (igual para todas salvo nota)

| Servicio | 1.000 | 10.000 | 50.000 | 200.000 | Nota |
|---|---:|---:|---:|---:|---|
| PostHog UE (6 eventos/sesión) | 0 $ | 0 $ | ≈ 64 $ | **≈ 311 $** | Con 4 eventos/sesión: 30 $ y 201 $. Es la palanca 1 del plan de backend; **E1 podría autoalojarlo** (y operarlo) |
| Correo (Resend) | 20 $ | 35 $ | ≈ 120 $ | **≈ 650 $** | Con SES: ≈ 1 $, 8 $, 23 $, 90 $. Con Cloudflare Email (beta): 2 $, 25 $, 78 $, 314 $. **B lo tiene nativo** |
| Sentry UE | 0 $ | 0 $ | 26 $ | 26 $ | Team desde 50.000 errores/mes |
| Dominios (`.com`, `.es`, `.app`) | 4 $ | 4 $ | 4 $ | 4 $ | Prorrateo |
| **Total común** | **24 $** | **39 $** | **≈ 214 $** | **≈ 991 $** | **≈ 321 $** con SES y 4 eventos |

### 6.3 Total y lectura

| Arquitectura | 1.000 | 10.000 | 50.000 | 200.000 (Resend + 6 ev.) | 200.000 (SES + 4 ev.) |
|---|---:|---:|---:|---:|---:|
| A | 69 $ | 84 $ | 269 $ | 1.171-1.496 $ | 501-826 $ |
| B (con Email de Cloudflare; con SES en la última columna) | 11 $ | 35 $ | 180 $ | ≈ 690 $ | ≈ 360 $ |
| C | 69 $ | 84 $ | 269 $ | 1.161-1.476 $ | 491-806 $ |
| D | 44 $ | 59 $ | 279 $ | ≈ 1.186 $ | ≈ 516 $ |
| E1 | ≈ 54 € | ≈ 69 € | ≈ 294 € | ≈ 1.241-1.291 € | ≈ 571-621 € |
| E2 | 74 $ | 89 $ | 309 $ | ≈ 1.241 $ | ≈ 571 $ |
| **F** | 69 $ | 84 $ | 269 $ | ≈ 1.121 $ | **≈ 451 $** |

Tres lecturas:

1. **Hasta 50.000 usuarios el stack no cambia el coste** de forma que importe: 55-95 $ de infraestructura en todas menos B (8 $). Coincide con `plan-backend.md` §10 (95-110 €/mes a 50.000). Lo que el plan **subestima** es la capa común: con 7.500 suscriptores enviando a diario y 2,4 M eventos, correo y analítica cuestan 180 $ y no 65 $. No es un problema de stack; es un disparador que hay que escribir (corrección 6).
2. **A 200.000 usuarios, el 70-80 % del coste es correo y analítica en todas las arquitecturas.** La diferencia entre la más barata (B) y la más cara (A sin correcciones) en la capa de stack es 150-470 $/mes; la diferencia entre Resend y SES es 560 $/mes. **Cambiar de proveedor de correo vale más que cambiar de hosting.**
3. A 200.000 usuarios el producto factura: 1,2 % de conversión × 1,53 € netos ≈ 3.700 €/mes de Premium (D-008), más packs y B2B. 450-1.100 $ de infraestructura es el 12-28 % de esa cifra: alto, pero no existencial, y las dos palancas anteriores lo bajan a la mitad.

---

## 7. Riesgos con plan de salida

| Arq. | Riesgo principal | Prob. | Daño | Mitigación | Plan de salida y coste |
|---|---|---|---|---|---|
| **A/F** | Deriva de versión de Next (el agente escribe 15 en un proyecto 16) que falla en silencio sirviendo el caso de ayer | Alta | Muy alto | Lint que rompe el build, `AGENTS.md` con versión, docs de `node_modules`, test de `curl` contra `/api/calendario` en CI (corrección 4) | No aplica: es de proceso |
| **A/F** | Factura de Vercel por bots o ataque | Media | Alto | Gestión de gasto con tope, WAF, Cloudflare en naranja si hace falta (correcciones 2 y 7) | Hosting → Docker `standalone` u OpenNext: 3-6 días, ensayado mensualmente (corrección 5) |
| **A/C/F** | Supabase Auth como candado; MAU anónimos por encima de 100.000 | Media | Medio | Anónimo perezoso (corrección 3); export de `auth.users` en B-30 | Auth → Better Auth sobre la misma tabla: 5-8 días; los usuarios reentran por magic link |
| **A/C/F** | Caída regional de Supabase Fráncfort (como us-east-2 el 12-feb-2026) | Baja | Alto (horas) | Monitor que concede el día (B-23); nada más razonable a este tamaño | Réplica en otro proveedor: no antes del mes 12 |
| **A/C/F** | El TJUE anula el DPF | Baja en 12 meses | Medio | Datos ya en Fráncfort; DPA con SCC archivados; TIA breve en `docs/legal/` | Hetzner/UpCloud para Postgres: 2-4 días (datos) |
| **C** | SvelteKit 3 RC contamina lo que el agente lee | Alta | Alto | Fijar 2.57.x; volcar `llms.txt` de la 2; migrar en S11 con `sv migrate` | No aplica |
| **B** | Caída global de Cloudflare o racimo de incidentes como el de agosto | Media | Alto | Ninguna real: un solo proveedor | Adaptador de SvelteKit a Vercel/Node: 1 línea; D1 → Postgres: 1-2 días si no se usaron DO; **DO no tiene equivalente** |
| **B/D/E** | Bug de seguridad en auth propia | Media | Muy alto | Revisión de seguridad dedicada; usar solo plugins oficiales de Better Auth | Cambiar a Supabase Auth: 3-5 días |
| **B** | Email Sending cambia de API o no llega a GA | Media | Bajo | Resend hasta GA | Resend/SES: 0,5 días |
| **D** | Astro se inclina hacia Cloudflare y los otros adaptadores se rezagan | Baja-media | Medio | Fijar versiones; vigilar el changelog | Isla Svelte → SvelteKit: 3-5 días |
| **E1** | Operación sin operador: disco, TLS, puertos expuestos, copias no probadas | Alta | Muy alto | Contratar operación (150-400 €/mes) o gestionar Postgres fuera | A gestionado (Fly/Supabase): 3-5 días |
| **E1** | Hetzner: subidas y stock | Alta (ya ocurrió dos veces) | Medio | Instancia fija (conserva precio); UpCloud/Scaleway/netcup como alternativas | Docker es portable: 1-2 días |
| **E2** | Incidentes de Consul/Corrosion en Fly que afectan a Postgres | Media | Alto | Managed Postgres con HA; región `mad` | A Hetzner/Supabase: 2-4 días |
| **Todas** | PostHog y correo escalan sin tope | Alta a partir de 50.000 | Medio | Presupuesto de eventos (ya); disparador de correo (corrección 6) | SES / Cloudflare Email / PostHog autoalojado: 1-2 días |
| **Todas** | Paddle no acepta 2,99 €/mes sin contrato a medida | Alta | Medio | Reabrir B-41: Lemon Squeezy (Stripe) o Stripe Managed Payments, o vender solo anual | 0,5 días de decisión en S11 |

---

## 8. Productividad de los agentes de IA, stack por stack (lo concreto y lo incómodo)

Lo que decide este criterio no es cuántos ejemplos hay: es **cuántas veces el agente produce código que compila, arranca y está mal**, porque ese es el error que llega a producción. Datos que sí existen: TypeScript es el lenguaje más usado en GitHub desde agosto de 2025 (Octoverse 2025), empujado por los agentes; un estudio académico de 2025 atribuye el 94 % de los errores de compilación generados por LLM a fallos de tipos, es decir, **TypeScript estricto convierte errores de producción en errores de compilación**. Eso favorece a todas las opciones TS (A, B, C, D, E2) frente a Ruby/Python/PHP (E1), y el proyecto ya está en TS (motor, contratos `zod`).

| Stack | Lo que el agente hace bien | Dónde se equivoca, y si el error es ruidoso o silencioso | Mitigación disponible en 2026 |
|---|---|---|---|
| **Next.js 16 / React** | Pantallas, formularios, Radix, Sentry, PostHog, satori: el corpus más grande con diferencia y ejemplos de primera para todo lo del plan | **Deriva de versión** (13-15 → 16): `middleware.ts`, `unstable_cache`, `revalidate` de segmento, `fetch` con caché implícita; fronteras `"use client"` y serialización RSC; acciones de servidor expuestas sin comprobación de permisos. **Lo primero falla en silencio**; lo segundo, en compilación o hidratación (ruidoso); lo tercero es un agujero de seguridad | Next 16 envía su documentación versionada en `node_modules/next/dist/docs/` y un MCP en `/_next/mcp` con `get_compilation_issues`; Vercel Agent Skills y guía oficial de `AGENTS.md`; lint propio (corrección 4) |
| **SvelteKit 2 / Svelte 5** | Rutas, `load`, formularios, componentes pequeños; el modelo cabe en una página y no ha cambiado desde 2021 | Sintaxis de Svelte 4 (`export let`, `$:`, `on:click`) y confusión entre runas; SvelteKit 3 RC en la documentación pública. **Casi todo falla en compilación** (ruidoso), que es la mejor clase de error | MCP oficial (`npx @sveltejs/mcp`) con `svelte-autofixer`, `llms.txt` oficial; fijar versiones y volcar la doc de la 2 en el repositorio |
| **Cloudflare Workers (B, C′, D)** | Hono, rutas, KV/R2 sencillos; Cloudflare invierte en agentes (guía «Claude Code + Cloudflare», MCP de la API con Code Mode, `llms-full.txt`) | Bindings y `wrangler.jsonc`; APIs de Node que el runtime no tiene (menos desde agosto de 2026); **SQL de Postgres contra SQLite** (silencioso hasta que hay datos); ciclo de vida de Durable Objects; límites de CPU. Auth propia: sesiones, tokens, CSRF (silencioso y grave) | Docs y prompts oficiales (`pages-to-workers.txt` y similares); tipos generados por `wrangler types`; Better Auth solo con plugins oficiales |
| **Astro 6** | Páginas de contenido, frontmatter, directivas `client:*`: superficie pequeña y estable | Estado compartido **entre** islas (cronómetro, historial): el agente lo subestima; APIs nuevas (content layer, actions, server islands, enrutado Hono experimental) finas en el corpus | `llms.txt` de Astro; encerrar el juego en una sola isla |
| **Hono / Node liso (E2)** | Express-like; rutas, middleware, RPC tipado: muy alta fiabilidad | SSR a mano (JSX de Hono o plantillas) sin las guardas de un framework: metadatos, canónicas y sitemap escritos a mano se pudren | Plantillas y lint |
| **Rails / Laravel / Django (E1)** | Modelos, migraciones, CRUD, jobs, correo: corpus enorme y APIs estables (Laravel 13 sin rupturas; Django 6.1) | HTMX/Hotwire con menos corpus; **el sidecar Node del solver** (contratos entre dos procesos); tipos dinámicos: los errores llegan en ejecución | Sorbet/mypy (poco usados por agentes); tests |
| **Supabase (A, C, D si aplica)** | Migraciones SQL, RLS, Auth, `pg_cron`: corpus grande y MCP oficial | **RLS olvidada en tablas nuevas** (CVE-2025-48757; 70 % de apps de Lovable): silencioso y grave; `supabase-js` en cliente para lo público | El plan de backend ya lo cierra: RLS en todas, escrituras solo `service_role`, prueba por cuatro vías en CI. **Esa prueba es la guardia contra el agente, no contra el atacante** |

**Lo incómodo, dicho:** la ventaja de corpus de React es real, pero **la mayor parte del corpus es Next 13-15**, y los errores que produce son los silenciosos. La desventaja de corpus de Svelte también es real, pero sus errores son ruidosos y hay un autofixer oficial. Neto: A/F un medio punto por encima de C en mi tabla, y reconozco que ese medio punto es juicio. Lo que **no** es juicio: B, D y E1 añaden auth propia, sidecar o SQLite, que son las tres fuentes de errores silenciosos y graves que ningún proveedor mitiga.

---

## 9. Clasificación final y argumentos

**1.º F · A endurecida (4,07).** Gana porque no gasta calendario, mantiene el corpus mayor y la mitigación de CVE en el WAF, y cierra los dos costes ocultos (MAU anónimos, factura por tráfico) y la salida no ensayada. Sus siete correcciones cuestan dos días.

**2.º A · la actual sin correcciones (3,92).** Pierde frente a F por lo que no tiene escrito: región de funciones, tope de gasto, anónimo perezoso, salida ensayada. **La actual, tal como está en los planes, no gana.** Y hay que decirlo así porque las cuatro cosas que le faltan son exactamente las que duelen en el mes 6, no en la beta.

**3.º C · SvelteKit + Supabase + Vercel (3,86; 4,02 con las mismas correcciones).** Empate técnico con F. Mejor rendimiento, mejor portabilidad, mejor widget, service worker más simple; peor corpus y SvelteKit 3 en RC. **No la decido yo:** `docs/stack/frontend.md` §10 propone una prueba de 1,5 días con cuatro criterios de verde y reversión a Next sin coste; es la forma correcta de zanjarlo, y las correcciones de F valen igual para las dos. Si el viernes 11 gana SvelteKit, este documento lo llama «F sobre C» y no cambia nada más.

**4.º D · Astro con islas (3,71).** La mejor para las 30 páginas de contenido y la peor para el juego como aplicación. Sin calendario empataría con A. Con calendario, cuesta 8-12 días de replanificación y una auth propia. Es una arquitectura de **mes 12** si algún día se separa el sitio de contenido del juego; hoy, no.

**5.º B · Todo Cloudflare (3,59).** La más barata por un orden de magnitud y la mejor en borde y extensibilidad; pierde por concentrar todo el riesgo en un proveedor con un año accidentado, por obligar a reescribir el backend Postgres o a pagar Postgres aparte, por la auth propia y por el Email en beta. Durable Objects para duelos es sobreingeniería: los duelos de fase 2 son asíncronos por catálogo. **Es el destino natural de la salida de hosting** (corrección 5), no el punto de partida.

**6.º E2 · Node/Hono en Fly.io (3,51)** y **7.º E1 · Rails/Laravel/Django en Hetzner (3,31).** E1 tiene la mejor residencia UE y ninguna dependencia, y es la peor en lo que más pesa para un fundador no técnico sin guardias: la operación es tuya. Además, el motor en TypeScript convierte a Rails/Django/Laravel en «un monolito más un sidecar», que no es un monolito. Hetzner en 2026 ha dejado de ser el argumento de coste que era.

### 9.1 Qué cambiaría en la actual (lista cerrada)

Las siete correcciones de §4.6, más tres registros: (a) disparador de reevaluación de hosting (factura > 150 $/mes tres meses seguidos o incidente de facturación) con B como destino ensayado; (b) disparador de correo a 50.000 usuarios; (c) reabrir B-41 con el dato de Paddle (< 10 $ = contrato a medida) y con Stripe Managed Payments ya disponible en España.

### 9.2 Cuánto cuesta cambiar ahora frente a en el mes 6

| Cambio | Ahora (S1, sin una línea de `web/`) | Mes 6 (marzo de 2027, en producción) |
|---|---|---|
| Aplicar las siete correcciones de F | **≈ 2 días de agente**, 0 calendario | 4-6 días (migrar región de funciones con datos vivos, reprocesar MAU, montar la salida a ciegas) |
| A → C (SvelteKit, mismo backend y hosting) | 1,5 días de prueba + ≈ 3 días de fontanería; reversión gratis si la prueba falla | 25-35 días de agente + 15-20 h del fundador; 2-3 semanas de doble ejecución; riesgo SEO por cambio de render con las mismas URL |
| A → D (Astro + isla + Hono) | 8-12 días; beta a S8-S9 | 35-50 días |
| A → B (todo Cloudflare, con D1) | 10-15 días; beta a S8-S9; día L al 10 de noviembre o al 12 de enero | 40-60 días (frontend, backend, auth, migración de datos) |
| A → E | 15-25 días más montar operación; día L al 12 de enero | 50-70 días más contratar operación |
| **Solo hosting** (Vercel → Workers vía OpenNext, o → Docker en Hetzner/Fly) | No procede | **3-6 días sin reescribir**: la salida barata, si se ensaya desde S2 |
| **Solo datos** (Supabase Postgres → Neon/Hetzner) | No procede | 2-4 días (`pg_dump`, `pg_cron` → cron externo) |
| **Solo auth** (Supabase Auth → Better Auth) | No procede | 5-8 días; los usuarios reentran por magic link. **Es el cambio caro y el único candado real** |

Regla que se deduce: **el framework se decide esta semana o no se decide en un año; el hosting se puede decidir en el mes 6 si la salida se ensaya desde S2; la auth no se cambia salvo causa mayor.**

---

## 10. Decisiones que pido al fundador (antes del viernes 11)

1. **Aprobar F**: las siete correcciones de §4.6 entran en F-02, F-05, B-02, B-04, B-28, B-29 y B-30 (≈ 2 días de agente). `desarrollador-backend` y `desarrollador-frontend` las incorporan a sus planes; se registra como **D-012** con lo que se acepta a cambio (dos jobs de CI más, un `AGENTS.md` que mantener).
2. **Framework:** dejar que la compuerta de `docs/stack/frontend.md` §10 decida entre Next 16 y SvelteKit 2 el viernes 11, con su regla de reversión. Esta matriz no lo zanja y no debe usarse para zanjarlo. Decidido el viernes, **no se reabre**.
3. **Registrar tres disparadores** en `docs/decisiones.md`: correo (50.000 usuarios o 150.000 correos/mes → SES o Cloudflare Email GA), MAU anónimos (80.000 MAU de Auth → revisar creación perezosa y purga), hosting (factura de Vercel > 150 $/mes tres meses seguidos → ejecutar la salida ensayada a Workers).
4. **Reabrir B-41 (pasarela) en S11** con dos datos nuevos: Paddle exige contrato a medida por debajo de 10 $ y Stripe Managed Payments ya opera en España (≈ 5 % + 0,25 €). La recomendación de `plan-backend.md` §11.2 se escribió sin ellos.
5. **No reevaluar B, D ni E antes del mes 6** salvo disparador. Queda escrito para que la próxima vez que alguien proponga «todo Cloudflare» o «un VPS barato» se lea este documento en vez de repetirlo.

---

## 11. Fuentes

Consultadas el 7 de septiembre de 2026. Las cifras de terceros van marcadas como aproximadas en el texto; las de fuentes oficiales, no.

- **Next.js:** [Next.js 16](https://nextjs.org/blog/next-16) · [Next.js 16.3](https://nextjs.org/blog/next-16-3) · [July 2026 Security Release](https://nextjs.org/blog/july-2026-security-release) · [Security Release Program](https://nextjs.org/blog/next-security-release-program) · [proxy.js](https://nextjs.org/docs/app/api-reference/file-conventions/proxy) · [Guía de agentes de IA](https://nextjs.org/docs/app/guides/ai-agents) · [MCP de Next.js](https://nextjs.org/docs/app/guides/mcp) · [next-devtools-mcp](https://github.com/vercel/next-devtools-mcp) · [Vercel Agent Skills](https://vercel.com/docs/agent-resources/skills) · [Resources for protecting against React2Shell (Vercel)](https://vercel.com/blog/resources-for-protecting-against-react2shell) · [Unit 42: CVE-2025-55182](https://unit42.paloaltonetworks.com/cve-2025-55182-react-and-cve-2025-66478-next/) · [Akamai: CVE-2026-23864](https://www.akamai.com/blog/security-research/cve-2026-23864-react-nextjs-denial-of-service) · [Avisos de mayo de 2026](https://cybersecuritynews.com/next-js-react-server-vulnerabilities/) · [OpenNext Cloudflare](https://opennext.js.org/cloudflare)
- **Vercel precios e incidentes:** [Active CPU pricing](https://vercel.com/blog/introducing-active-cpu-pricing-for-fluid-compute) · [Regional pricing](https://vercel.com/docs/pricing/regional-pricing) · [Configuring regions](https://vercel.com/docs/functions/configuring-functions/region) · [Vercel Pro Plan](https://vercel.com/docs/plans/pro-plan) · [Vercel cost 2026 (makerkit)](https://makerkit.dev/blog/saas/vercel-cost) · [Bill shock: $700+ (bex.co)](https://bex.co/blog/2026/07/31/vercel-bandwidth-bill-shock) · [The $23,000 Vercel bill (UsageBox)](https://usagebox.com/articles/vercel-23000-dollar-bill-usage-based-platform-bill-shock-2026) · [Historial de incidentes (StatusGator)](https://statusgator.com/services/vercel/outage-history) · [Vercel EU alternative: GDPR, CLOUD Act (sota.io)](https://sota.io/blog/vercel-eu-alternative-gdpr-cloud-act-2026)
- **Supabase:** [Incidente del 12 de febrero de 2026](https://supabase.com/blog/supabase-incident-on-february-12-2026) · [Regiones](https://supabase.com/docs/guides/platform/regions) · [GDPR](https://supabase.com/docs/guides/security/gdpr-compliance) · [Billing](https://supabase.com/docs/guides/platform/billing-on-supabase) · [Pricing (md)](https://supabase.com/pricing.md) · [Edge Functions pricing](https://supabase.com/docs/guides/functions/pricing) · [Developer Update junio 2026 (logs)](https://supabase.com/changelog/46689-developer-update-june-2026) · [Sacra: Supabase](https://sacra.com/c/supabase/) · [Supabase pricing history (saaspricepulse)](https://www.saaspricepulse.com/blog/supabase-pricing-history) · [Lovable / CVE-2025-48757](https://vibeappscanner.com/lovable-security) · [Supabase RLS misconfiguration atlas 2026](https://vibe-eval.com/data-studies/supabase-rls-misconfiguration-atlas-2026/)
- **Cloudflare:** [Nota de prensa: adquisición de Astro (16/1/2026)](https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-astro-to-accelerate-the-future-of-high-performance-web-development/) · [Post mortem 18/11/2025 (CircleID)](https://circleid.com/posts/cloudflare-explains-major-outage-in-detailed-post-mortem) · [13 incidentes en 8 días, agosto 2026 (shattered.io, secundaria)](https://shattered.io/cloudflare-outage-august-2026/) · [Historial de estado](https://www.cloudflarestatus.com/history) · [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/) · [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/) · [D1 jurisdicciones (5/11/2025)](https://developers.cloudflare.com/changelog/post/2025-11-05-d1-jurisdiction/) · [Durable Objects: data location](https://developers.cloudflare.com/durable-objects/reference/data-location/) · [Durable Objects pricing](https://developers.cloudflare.com/durable-objects/platform/pricing) · [Regional Services (DLS)](https://developers.cloudflare.com/data-localization/regional-services/) · [Migrar de Pages a Workers](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/) · [Límites de CPU (5 min)](https://developers.cloudflare.com/changelog/2025-03-25-higher-cpu-limits/) · [Claude Code + Cloudflare](https://developers.cloudflare.com/agent-setup/claude-code/) · [Code Mode MCP (InfoQ)](https://www.infoq.com/news/2026/04/cloudflare-code-mode-mcp-server/) · [Email Service vs Resend (sequenzy)](https://www.sequenzy.com/versus/cloudflare-email-vs-resend) · [Cloudflare Workers email cost](https://flowmails.net/blog/cloudflare-workers-email-cost) · [AI crawlers: nueva política (TechCrunch, 1/7/2026)](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/) · [Your site, your rules (blog)](https://blog.cloudflare.com/content-independence-day-ai-options/) · [workers-og](https://github.com/kvnang/workers-og)
- **SvelteKit / Svelte / Astro / Hono / Drizzle / Better Auth:** [SvelteKit 3 RC](https://svelte.dev/blog/sveltekit-3-release-candidate) · [What's new in Svelte: septiembre 2026](https://svelte.dev/blog/whats-new-in-svelte-september-2026) · [MCP oficial de Svelte](https://svelte.dev/docs/mcp) · [adapter-cloudflare](https://www.npmjs.com/package/@sveltejs/adapter-cloudflare) · [SvelteKit en Vercel](https://vercel.com/docs/frameworks/full-stack/sveltekit) · [Astro en Cloudflare (docs)](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) · [What's new in Astro, mayo 2026](https://astro.build/blog/whats-new-may-2026/) · [Hono en Workers (docs)](https://developers.cloudflare.com/workers/framework-guides/web-apps/more-web-frameworks/hono/) · [Drizzle 1.0 beta](https://orm.drizzle.team/docs/latest-releases/drizzle-orm-v1beta2) · [Better Auth: anónimo](https://better-auth.com/docs/plugins/anonymous) · [Better Auth: magic link](https://better-auth.com/docs/plugins/magic-link) · [Better Auth + Hono + D1](https://github.com/better-auth/better-auth/discussions/7963)
- **Monolitos y VPS:** [Rails 8 (AppSignal)](https://blog.appsignal.com/2024/10/07/whats-new-in-ruby-on-rails-8.html) · [Rails 8 + Kamal 2 en Hetzner](https://mooktakim.com/blog/deploying-rails-with-kamal/) · [Laravel 13](https://laravel-news.com/laravel-13) · [Django 6.0](https://www.djangoproject.com/weblog/2025/dec/03/django-60-released/) · [Django 6.1](https://www.djangoproject.com/weblog/2026/aug/05/django-61-released/) · [Hetzner: ajuste de precios 15/6/2026 (docs)](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/) · [Hetzner price increases 2026 (Northflank)](https://northflank.com/blog/hetzner-cloud-server-price-increases) · [Hetzner second price hike (bex.co)](https://bex.co/blog/2026/08/21/hetzner-second-price-hike-ccx-cpx-113-percent-fleet-economics) · [Hetzner pricing after April/June (AgentDeals)](https://agentdeals.dev/hetzner-pricing-2026) · [Hetzner stock tracker](https://hetzner.thegoated.dev/) · [Coolify review (cloudmagazin, 6/2026)](https://www.cloudmagazin.com/en/2026/06/07/coolify-review-self-hosting-instead-of-vercel-and-heroku/) · [Hetzner + Coolify: what nobody tells you](https://ceaksan.com/en/hetzner-coolify-self-hosting-reality) · [Fly.io Managed Postgres](https://fly.io/docs/mpg/) · [Fly.io regions](https://fly.io/docs/reference/regions/) · [Fly.io reliability 2026 (Kuberns)](https://kuberns.com/blogs/is-fly-io-good-for-production/) · [Fly.io status](https://status.flyio.net/)
- **Neon, PostHog, Resend, Sentry, pagos:** [Databricks acquires Neon](https://databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems) · [Neon pricing 2026 (vela.run)](https://vela.run/articles/neon-serverless-postgres-pricing-2026/) · [Neon changelog 4/9/2026](https://neon.com/docs/changelog/2026-09-04) · [PostHog pricing (flexprice)](https://flexprice.io/blog/posthog-pricing-guide) · [Resend pricing (flexprice)](https://flexprice.io/blog/detailed-resend-pricing-guide) · [Resend alternatives in Europe (residencia)](https://blueyemail.com/alternatives/resend-europe) · [Sentry EU Region FAQ](https://sentry.zendesk.com/hc/en-us/articles/25074658211227-Sentry-s-EU-Region-FAQ) · [Sentry pricing (Last9)](https://last9.io/blog/sentry-pricing/) · [Paddle pricing (StackScored)](https://www.stackscored.com/pricing/saas-billing/paddle/) · [Paddle vs Lemon Squeezy (Dodo)](https://dodopayments.com/blogs/paddle-vs-lemon-squeezy) · [Stripe Managed Payments](https://stripe.com/managed-payments) · [Coste real de Stripe Managed Payments (tiun)](https://tiun.io/blog/cost-of-stripe-managed-payments-2026)
- **Agentes y lenguaje:** [Octoverse 2025: TypeScript #1](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/) · [How AI is reshaping developer choice (GitHub)](https://github.blog/ai-and-ml/generative-ai/how-ai-is-reshaping-developer-choice-and-octoverse-data-proves-it/) · [Best frontend frameworks for vibe coding (Appwrite)](https://appwrite.io/blog/post/best-frontend-frameworks-for-vibe-coding) · [Better AI assistance for Svelte 5 (Khromov)](https://khromov.se/getting-better-ai-llm-assistance-for-svelte-5-and-sveltekit/)
- **RGPD:** [IAPP: el Tribunal General desestima Latombe](https://iapp.org/news/a/european-general-court-dismisses-latombe-challenge-upholds-eu-us-data-privacy-framework) · [EDPL: Latombe v Commission](https://edpl.lexxion.eu/article/EDPL/2026/1/15) · [Berkeley Tech Law Journal: fate of the DPF](https://btlj.org/2026/02/third-times-the-charm-the-fate-of-the-eu-u-s-data-privacy-framework/)

---

*Este documento no modifica ningún plan ni decisión. Propone D-012 (§10.1) y tres disparadores (§10.3); los registra `director-producto` si el fundador los aprueba.*
