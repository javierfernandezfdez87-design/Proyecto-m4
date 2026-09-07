# Stack tecnológico: coste total de propiedad, riesgo de proveedor y encaje con el negocio

Autor: `estratega-negocio`. Fecha: **7 de septiembre de 2026**.
Fuentes de negocio: `docs/analisis-estrategico.md` §4.4, `docs/catalogo-productos.md` v1.2, `docs/roadmap/plan-backend.md` §10 y §11.2, `docs/roadmap/plan-datos-calidad-negocio.md` §7, `docs/decisiones.md` (D-006, D-008, D-009, D-010, D-011).
Fuentes de precio: búsqueda web del 7 de septiembre de 2026; cada tarifa lleva su enlace y su fecha en §2. **WebFetch está bloqueado en este entorno**: todos los precios proceden de resultados de búsqueda, no de la página de tarifas leída directamente. Los cinco que mueven una decisión están marcados con ⚠ y hay que confirmarlos en la web del proveedor antes de firmar (§10).

**Alerta D-006:** ningún disparador de registro de marca se cumple hoy (0 usuarios, sin prensa, sin vídeo, sin conversación B2B). Este documento **no** activa ninguno. Recordatorio operativo: D-011 R5 ya fijó la presentación en la OEPM para el **viernes 30 de octubre de 2026** por calendario, no por disparador; §2.9 recalcula la tasa con las tarifas oficiales vigentes.

**Este documento no reabre ninguna decisión tomada.** D-008 (neto por suscriptor), D-010 (34 cambios), D-011 (ocho resoluciones) y la elección de Paddle como *merchant of record* se dan por firmes. Lo que sí hace es **resolver la condición que `plan-backend` §11.2 dejó abierta** sobre Lemon Squeezy (§2.8) y **corregir aritméticamente el presupuesto de `plan-backend` §10 y de `plan-datos-calidad-negocio` §7**, igual que D-008 corrigió el escenario Base: no es un cambio de criterio, es una cuenta que estaba incompleta.

---

## 0. Las seis conclusiones, antes de las tablas

1. **El presupuesto vigente está bien al lanzar y mal a escala.** Los 45-65 €/mes de `plan-backend` §10 se confirman para 1.000-5.000 usuarios mensuales **de infraestructura pura**, pero omiten la IA de redacción y Sentry: el coste real del día 1 es **75-105 €/mes**. La cifra de 95-110 €/mes a 50.000 usuarios está subestimada **entre 2,5 y 3,5 veces**: son **332 €/mes** con el stack gestionado tal cual está diseñado (§3.2).
2. **El ancho de banda de Vercel no es el riesgo.** Este producto no pasa de **290 GB/mes ni en el escenario Óptimo**, frente al 1 TB incluido en Pro. El medidor que sí muerde es **Peticiones de Edge** (10 M incluidas, 2 $/M después): se agota a **~33.000 usuarios mensuales** y cuesta 100 $/mes a 200.000 (§3.4).
3. **El límite sorpresivo más caro del stack es el MAU de Supabase Auth, y lo crea una decisión de arquitectura propia.** `plan-backend` §1.3 decide que «anónimo es una cuenta real de Auth»: eso convierte a **cada visitante de SEO que rebota** en un MAU facturable. A 150.000 usuarios son **162 $/mes**; a 200.000, **325 $/mes**. Diferir el alta a la primera interacción con el tablero lo lleva a cero y **cuesta medio día de agente si se decide en la semana 1** frente a 2,5 días después (§5.3).
4. **La partida que más crece es el correo, y crece con la retención**: 1 correo diario × N suscriptores. Cuanto mejor va el producto, más cara es. Resend pasa de 20 $ a **~460 $/mes** entre el escenario Validación y el Óptimo; Amazon SES hace lo mismo por **73 $** y además elimina una transferencia internacional de datos, porque Resend almacena en Estados Unidos aunque envíe desde Irlanda (§5.7).
5. **El punto de inflexión son 35.000-40.000 usuarios mensuales.** Por debajo, migrar no compensa: el stack gestionado cuesta menos de 200 €/mes y cada día de agente gastado en infraestructura es un día que no se gasta en el producto. Por encima, el coste marginal del stack gestionado es de **70 €/mes por cada 10.000 usuarios** frente a **15 €/mes** del optimizado: **4,7 veces más** (§4).
6. **B2B es la línea que amortiza todo el stack.** Un contrato de `B2B-WIDGET` de 450 €/mes con 100.000 partidas cuesta **8-33 $/mes de infraestructura marginal: margen del 92-98 %**. Es el mejor margen unitario del catálogo, y no exige construir casi nada nuevo si el widget se sirve por *iframe* y no por *script* (§6.1).

---

## 1. Supuestos de uso, explícitos y falsables

Nada de lo que viene después vale más que estos supuestos. Están escritos aquí para que se puedan refutar con la beta.

### 1.1 Dos perfiles de uso, porque el repositorio ya tiene dos

`docs/analisis-estrategico.md` §4.3 calcula las páginas vistas con **12 sesiones/mes por usuario activo** (es lo que sostiene la estimación de RPM publicitario). `docs/roadmap/plan-backend.md` §10 calcula PostHog con **10.000 activos diarios sobre 50.000 mensuales**, es decir, **6 sesiones/mes por usuario**. Los dos supuestos están vigentes, se contradicen y **la factura de analítica se duplica según cuál se use**.

- **Perfil A (bajo):** 6 sesiones/mes por usuario activo mensual. DAU/MAU = 0,20.
- **Perfil B (alto):** 12 sesiones/mes por usuario activo mensual. DAU/MAU = 0,40.

**Se presupuesta con el perfil B.** Motivo: si el uso real resulta ser el A, sobra presupuesto; al revés, hay una factura sorpresa. Donde el perfil cambia la decisión, aparecen los dos números.

### 1.2 Tabla de supuestos

| Supuesto | Valor de planificación | Origen | ¿Medido? |
|---|---|---|---|
| Sesiones/mes por usuario activo | 12 | `analisis-estrategico` §4.3 | No |
| Usuarios nuevos sobre el total mensual | 50 % | Estimación propia (producto en crecimiento con adquisición SEO/TikTok) | No |
| Peso de la primera carga | 700 KB | Estimación. F14 exige Lighthouse ≥ 90, lo que acota por arriba | No |
| Peso de una sesión recurrente (PWA con service worker) | 80 KB | Estimación | No |
| Imágenes de compartir (OG + 9:16) | 10 % de las sesiones × 150 KB | Objetivo de compartir del catálogo | No |
| **Peticiones de edge por sesión** | **25** | Estimación. **Es el número que hay que medir en la beta** | **No** |
| Invocaciones de función por sesión | 8 | Derivado de `plan-backend`: abrir caso (CDN, 0), guardar ×3-4, comprobar 0-1, acusar 1, racha 1, analítica de servidor 1 | No |
| CPU activa por invocación | 50 ms | Estimación. R3 (D-011) fija 300 ms de presupuesto de latencia total en p75 | No |
| Memoria provisionada | 2 GB × 150 ms de reloj por invocación | Tamaño estándar de Vercel | No |
| Eventos de analítica por sesión | 6 | C7 y `plan-backend` §10 | No |
| Suscriptores al correo diario | 10 % de los usuarios activos mensuales | Calibrado con el objetivo del catálogo (3.000 en el mes 3) | No |
| Correos transaccionales | 0,5 por usuario activo y mes | Estimación (magic link, confirmaciones, avisos de racha, recibos) | No |
| Tamaño de una fila de `intentos` | 1 KB | Estimación sobre el esquema de `plan-backend` §3.1 | No |
| Fracción de visitantes que toca el tablero | 45 % | Estimación. Determina el MAU de Auth con alta diferida | No |
| Tipo de cambio | **1 $ = 0,90 €** | Supuesto de planificación. Ver riesgo R-12 | — |
| Casos publicados al mes (dos modos + banco de PDF) | 60 el primer año | `catalogo-productos` (1/día por modo + packs) | — |

### 1.3 Magnitudes derivadas por escenario

Escenarios de `docs/analisis-estrategico.md` §4.4. Perfil B.

| Magnitud mensual | Validación 10.000 | Base 50.000 | Bueno 150.000 | Óptimo 200.000 |
|---|---:|---:|---:|---:|
| Sesiones | 120.000 | 600.000 | 1.800.000 | 2.400.000 |
| Transferencia de salida (GB) | 14,5 | 72,5 | 217,5 | 290 |
| Peticiones de edge (millones) | 3,0 | 15,0 | 45,0 | 60,0 |
| Invocaciones de función (millones) | 0,96 | 4,8 | 14,4 | 19,2 |
| CPU activa (horas) | 13,3 | 66,7 | 200 | 267 |
| Memoria provisionada (GB-hora) | 80 | 400 | 1.200 | 1.600 |
| Eventos de analítica (millones) | 0,72 | 3,6 | 10,8 | 14,4 |
| Correos enviados | 35.000 | 175.000 | 525.000 | 700.000 |
| — de ellos, boletín diario | 30.000 | 150.000 | 450.000 | 600.000 |
| Filas nuevas de `intentos` | 120.000 | 600.000 | 1.800.000 | 2.400.000 |
| Crecimiento de la base de datos (GB/año) | 1,4 | 7,2 | 21,6 | 28,8 |
| Egress de Supabase (GB, con caché de CDN) | 1,2 | 6 | 18 | 24 |
| **MAU de Auth, arquitectura actual** | **10.000** | **50.000** | **150.000** | **200.000** |
| MAU de Auth con alta diferida | 4.500 | 22.500 | 67.500 | 90.000 |

**Tres lecturas inmediatas.** El ancho de banda nunca es un problema (290 GB frente a 1 TB incluido). El egress de Supabase nunca es un problema porque la arquitectura de caché de CDN de `plan-backend` §1.1 ya lo neutraliza (24 GB frente a 250 GB incluidos): **esa decisión de arquitectura ya está pagando**. Y el MAU de Auth es exactamente igual al tráfico del sitio, que es lo que lo convierte en el riesgo caro.

---

## 2. Catálogo de tarifas, con fuente y fecha

Todas las tarifas consultadas el **7 de septiembre de 2026**. Precios en dólares salvo indicación.

### 2.1 Hosting y cómputo

| Proveedor | Plan | Precio base | Incluido | Sobrecoste | Fuente |
|---|---|---|---|---|---|
| **Vercel** | Hobby | 0 $ | 100 GB transferencia, 1 M peticiones de edge, 1 M invocaciones, 4 h CPU activa | Se **pausa** la función ~30 días, no factura | [Vercel Hobby docs](https://vercel.com/docs/plans/hobby), [justinmckelvey.com](https://justinmckelvey.com/blog/is-vercel-free) |
| **Vercel** | Hobby: **uso comercial prohibido** | — | — | Cualquier despliegue que genere ingresos para alguien (anuncios, venta, freelance) exige Pro | [justinmckelvey.com](https://justinmckelvey.com/blog/is-vercel-free), [thesearchsherpa.com](https://thesearchsherpa.com/is-vercel-free-for-small-business/) |
| **Vercel** | Pro | **20 $/asiento** con **20 $ de crédito de uso** | **1 TB** de Fast Data Transfer y **10 M** de Peticiones de Edge, ambos **fuera** del crédito | Transferencia 0,15 $/GB (EE. UU.), 0,15-0,35 $/GB por región; Edge 2 $/M; invocaciones 0,60 $/M; **CPU activa 0,128 $/h**; memoria 0,0106 $/GB-h; ISR 4 $/M escrituras, 0,40 $/M lecturas | [flexprice.io](https://flexprice.io/blog/vercel-pricing-breakdown), [makerkit.dev](https://makerkit.dev/blog/saas/vercel-cost), [Vercel changelog Active CPU](https://vercel.com/changelog/lower-pricing-with-active-cpu-pricing-for-fluid-compute), [Vercel changelog invocaciones](https://vercel.com/changelog/function-invocations-now-billed-per-unit) |
| **Cloudflare** | Pages (estático) | 0 $ | **Ancho de banda ilimitado y no medido** en activos estáticos, en todos los planes; 500 compilaciones/mes | Lo dinámico factura como Workers | [Cloudflare Pages pricing](https://developers.cloudflare.com/pages/functions/pricing/), [devtoolreviews.com](https://www.devtoolreviews.com/reviews/cloudflare-pages-pricing-bandwidth-limits-2026) |
| **Cloudflare** | Workers Paid | **5 $/mes** | 10 M peticiones, 30 M ms de CPU | 0,30 $/M peticiones, 0,02 $/M ms de CPU. **Sin cargo por egreso ni ancho de banda.** La espera de E/S no se factura | [Cloudflare Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/), [budgetforge.dev](https://www.budgetforge.dev/tools/cloudflare-workers-pricing-2026) |
| **Cloudflare** | D1 | incluido en Workers Paid | 25.000 M filas leídas, 50 M escritas, 5 GB | 0,001 $/M filas leídas, 1,00 $/M escritas, 0,75 $/GB-mes | [Cloudflare D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/) |
| **Cloudflare** | R2 | pago por uso | 10 GB, 1 M clase A, 10 M clase B | 0,015 $/GB-mes, 4,50 $/M escrituras, 0,36 $/M lecturas. **Egreso 0 $** | [budgetforge.dev](https://www.budgetforge.dev/tools/cloudflare-workers-pricing-2026), [blazingcdn](https://blog.blazingcdn.com/en-us/cloudflares-pricing-for-developers-a-closer-look-at-workers-pages) |
| **Netlify** | Pro | 20 $/organización | 3.000 créditos (~150 GB o ~200 despliegues) | 20 créditos/GB (~0,13 $/GB); recarga de 1.500 créditos por 10 $. Modelo de créditos desde finales de 2025 | [costbench.com](https://costbench.com/software/cloud-infrastructure/netlify/), [toolchase.com](https://toolchase.com/blog/netlify-pricing-guide/), [netli.fyi](https://netli.fyi/blog/netlify-free-plan-limits-2026) |
| **Fly.io** | pago por uso, sin cuota base | ~2,02 $/mes (shared-cpu-1x, 256 MB); ~5,70 $/mes (1 GB) | 160 GB de salida | 0,02 $/GB en Europa y Norteamérica | [Fly.io pricing](https://fly.io/docs/about/pricing/), [deployhandbook.com](https://deployhandbook.com/pricing/fly-io) |
| **Hetzner Cloud** | CX22 / CPX11 | **4,49 € / 5,49 €** al mes | 20 TB de tráfico de salida | 1 €/TB. **Dos subidas de precio en 2026** (1 de abril y 15 de junio) | [Hetzner ajuste de precios](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/), [northflank.com](https://northflank.com/blog/hetzner-cloud-server-price-increases) |

### 2.2 Base de datos y backend

| Proveedor | Plan | Precio base | Incluido | Sobrecoste | Fuente |
|---|---|---|---|---|---|
| **Supabase** | Free | 0 $ | — | **Pausa el proyecto**, sin copias diarias. Descartado por `plan-backend` §10 | [uibakery.io](https://uibakery.io/blog/supabase-pricing) |
| **Supabase** | Pro | **25 $/mes** + 10 $ de crédito de cómputo (cubre una instancia Micro) | **100.000 MAU de Auth**, 8 GB de base de datos, **250 GB de egress**, 100 GB de almacenamiento, 2 M de invocaciones de Edge Functions | **MAU: 0,00325 $**; egress 0,09 $/GB; cómputo Small 15 $, Medium 60 $, Large 110 $, XL 210 $ | [flexprice.io](https://flexprice.io/blog/supabase-pricing-breakdown), [metacto.com](https://www.metacto.com/blogs/the-true-cost-of-supabase-a-comprehensive-guide-to-pricing-integration-and-maintenance), [makerkit.dev](https://makerkit.dev/blog/saas/supabase-pricing) |
| **Supabase** | Team | **599 $/mes** | Lo anterior + SLA, SOC 2, registros de auditoría | — | [nocode.mba](https://www.nocode.mba/articles/supabase-pricing) |
| **Neon** (Databricks) | Launch / Scale | sin mínimo mensual desde diciembre de 2025 | Free: 0,5 GB y 100 CU-hora | 0,106 $/CU-h (Launch), 0,222 $/CU-h (Scale), almacenamiento 0,35 $/GB-mes. Autosuspensión a los 5 min | [prisma.io](https://www.prisma.io/blog/prisma-postgres-vs-neon-pricing-2026), [vantage.sh](https://www.vantage.sh/blog/neon-acquisition-new-pricing) |
| **Firebase** | Blaze | pago por uso | Cuotas gratuitas del plan Spark | Firestore 0,06 $/100k lecturas, 0,18 $/100k escrituras, 0,18 $/GiB-mes; Functions 0,40 $/M invocaciones; Storage 0,12 $/GB descargado | [budgetforge.dev](https://www.budgetforge.dev/tools/firebase-pricing-2026), [sashido.io](https://www.sashido.io/en/blog/firebase-guide-and-pricing-traps-2026) |
| **Convex** | Professional | **25 $/desarrollador/mes** | 50 GB de almacenamiento, 50 GB de E/S, 50 GB de egreso, 250 M de llamadas | 0,20 $/GB almacenamiento y E/S, 0,12 $/GB egreso, 2 $/M llamadas | [makerkit.dev](https://makerkit.dev/pricing-calculator/convex), [saasodds.com](https://www.saasodds.com/blog/convex-pricing) |

### 2.3 Analítica

| Proveedor | Plan | Gratis | Precio | Fuente |
|---|---|---|---|---|
| **PostHog** | Cloud EU (Frankfurt) | **1 M eventos anónimos + 1 M identificados**, 5.000 grabaciones, 1 M de peticiones de *feature flags* | Anónimos: 0,00005 $/evento (1-2 M) → **50 $ el segundo millón**; 0,0000343 $ (2-15 M) → **34,3 $/M**; 0,0000295 (15-50 M). **Identificados: desde 0,000198 $/evento, hasta 4× más caros** | [flexprice.io](https://flexprice.io/blog/posthog-pricing-guide), [budgetforge.dev](https://www.budgetforge.dev/tools/posthog-pricing-2026), [PostHog anónimos vs identificados](https://posthog.com/docs/data/anonymous-vs-identified-events) |
| **Plausible** | Starter / Growth / Business | prueba de 30 días, sin plan gratuito permanente | 9 $/mes (10k páginas vistas), 14 $, 19 $, escalando con tráfico. **Alojamiento en la UE en todos los planes.** Community Edition autoalojable | [seline.com](https://seline.com/blog/plausible-analytics-pricing), [europeanpurpose.com](https://europeanpurpose.com/tool/plausible) |
| **Umami** | Cloud Hobby / Pro | 100.000 eventos/mes | Pro ~20 $/mes por ~1 M de eventos; extra a 0,00003 $/evento (3 $ por 100k). **Autoalojado gratis, licencia MIT** | [canivibecodeit.com](https://canivibecodeit.com/umami-cloud), [analytics-alternatives.com](https://analytics-alternatives.com/tools/umami/) |

### 2.4 Correo

| Proveedor | Plan | Precio | Marginal | Fuente |
|---|---|---|---|---|
| **Resend** | Free / Pro / Scale | 3.000/mes (tope de 100/día) · **20 $ = 50.000** · **90 $ = 100.000** · hasta 1.150 $ = 2,5 M | ~0,0008 $/correo declarado en Pro; **0,00044 $/correo implícito** entre los escalones de 100k y 2,5 M | [resend.com/docs](https://resend.com/docs/knowledge-base/what-is-resend-pricing), [automationatlas.io](https://automationatlas.io/answers/resend-pricing-explained-2026/), [flexprice.io](https://flexprice.io/blog/detailed-resend-pricing-guide) |
| **Amazon SES** | pago por uso | **0,10 $ por 1.000 correos**, uniforme en todas las regiones incluidas las de la UE | 0,0001 $/correo. Adjuntos 0,12 $/GB | [AWS SES pricing](https://aws.amazon.com/ses/pricing/), [emailplatformreview.com](https://www.emailplatformreview.com/blog/amazon-ses-pricing-official-2026/) |
| **Postmark** | Basic / Pro / Platform | 15 $ (10k) · 16,50 $ · 18 $ | 1,80 $ / 1,30 $ / 1,20 $ por cada 1.000 adicionales; ~0,51 $/1.000 a 1,5 M | [costbench.com](https://costbench.com/software/email-api/postmark/), [klymentiev.com](https://klymentiev.com/blog/postmark-pricing) |
| **Brevo** | Free / Starter | 300/día (~9.000/mes) · 9 $ (5k), 18 $ (20k), 29 $ (40k), **65 $ (100k)** | — | [smtpedia.com](https://smtpedia.com/brevo-pricing/), [layer3labs.io](https://www.layer3labs.io/guides/brevo-pricing) |

### 2.5 Errores

| Proveedor | Plan | Precio | Incluido | Fuente |
|---|---|---|---|---|
| **Sentry** | Developer | 0 $ | ~5.000 errores/mes, 1 usuario | [costbench.com](https://costbench.com/software/developer-tools/sentry/) |
| **Sentry** | Team | **26-29 $/mes** | 50.000 errores, 5 M de *spans*, 50 repeticiones, 1 monitor de disponibilidad | [markaicode.com](https://markaicode.com/pricing/sentry-pricing/), [cubeapm.com](https://cubeapm.com/blog/sentry-pricing-review/) |

### 2.6 Pagos

Sobre los dos precios del catálogo: **2,99 €/mes** y **19,99 €/año**, IVA español del 21 % incluido.

| Opción | Comisión nominal | Sobre 2,99 €/mes | Sobre 19,99 €/año | ¿IVA de la UE? | Fuente |
|---|---|---:|---:|---|---|
| **Paddle** (MoR) | 5 % + 0,50 € | 0,65 € → **21,7 % del bruto**, neto ≈ **1,82 €** | 1,50 € → **7,5 %**, neto ≈ **15,02 €/año = 1,25 €/mes** | Suyo | [dodopayments.com](https://dodopayments.com/blogs/paddle-vs-lemon-squeezy), [checkthat.ai](https://checkthat.ai/brands/paddle/pricing) |
| Paddle, coste oculto | Margen de cambio **1,5-3 %** si la divisa de venta ≠ la de cobro; 20 $ por *contracargo* | — | — | — | [dodopayments.com](https://dodopayments.com/blogs/paddle-fees-explained) |
| **Stripe + Stripe Tax** | 1,5 % + 0,25 € (tarjetas europeas) + **0,5 % de Stripe Tax** | 0,31 € → **10,4 %** | 0,65 € → **3,3 %** | **Nuestro**: alta en OSS, declaración trimestral, facturas | [checkoutpage.com](https://checkoutpage.com/blog/stripe-processing-fees), [flexprice.io](https://flexprice.io/blog/stripe-pricing-breakdown-2026) |
| **Stripe Managed Payments** (sucesor de Lemon Squeezy) | **3,5 % encima** de la comisión de Stripe; ≈6,4 % + 0,30 $ en EE. UU. | ~0,50 € → **17 %** | ~1,80 € → **9 %** | Suyo | [support.stripe.com](https://support.stripe.com/questions/managed-payments-pricing), [dodopayments.com](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained) |
| **Lemon Squeezy** | 5 % + 0,50 $ nominal | — | — | Suyo | Adquirida por Stripe en 2024; en **enero de 2026** anunció Stripe Managed Payments como primer hito de la integración: [artisangrowthstrategies.com](https://www.artisangrowthstrategies.com/blog/paddle-vs-stripe-vs-lemon-squeezy-2026) |
| **Gumroad** | 10 % + 0,50 $ **más** el procesamiento (~2,9 % + 0,30 $) ≈ **12,9 % + 0,80 $** | sobre 5,99 € del `PDF-CLASICO`: ~1,50 € = **25 %** | — | Suyo, MoR completo desde enero de 2025 | [dodopayments.com](https://dodopayments.com/blogs/gumroad-fees-explained), [insightraider.com](https://insightraider.com/en/answers/how-much-does-gumroad-cost-per-month) |

Estas cifras **confirman D-008 sin corregirlo**: 1,86 €/mes netos en el mensual y 1,26 €/mes en el anual, mezcla 55/45 → 1,53 €/mes netos por suscriptor. La única diferencia con este documento es de céntimos por el redondeo del componente fijo.

### 2.7 Lo que resuelve la condición abierta sobre Lemon Squeezy

`plan-backend` §11.2 recomendaba Lemon Squeezy para los packs con precio libre **«solo si antes se confirma por escrito su continuidad»**. La condición ya tiene respuesta y es negativa: la continuidad de Lemon Squeezy existe, pero **en forma de migración hacia Stripe Managed Payments**, cuya comisión es 3,5 puntos *encima* de la de Stripe y por tanto peor que Paddle en el ticket anual (9 % frente a 7,5 %) y solo algo mejor en el mensual (17 % frente a 21,7 %) a costa de perder el MoR unificado.

**Ejecución propuesta, sin reabrir D-010 cambio 25 (`PDF-CLASICO` a precio libre en el mes 3):**
- **Paddle para todo lo permanente**: Premium y los cuatro SKU de PDF con precio fijo. Sobre 5,99 €: 0,80 € de comisión = **13,4 %**, la mitad que Gumroad.
- **La prueba H4 de precio libre se hace en Gumroad**, que es el único MoR con precio libre nativo, aceptando ~25 % de comisión efectiva **sobre un experimento**, no sobre un negocio. Con 1.000 visitas y una compra del 1,5 % a una mediana de 3 €, son ~45 € de ingreso y ~11 € de comisión: irrelevante frente al valor del dato.
- **No se construye la tienda sobre Lemon Squeezy**, ni siquiera para el experimento.

### 2.8 IA de redacción: orden de magnitud por caso

Sin fijar modelo, con las tarifas de septiembre de 2026 ([cloudzero](https://www.cloudzero.com/blog/llm-api-pricing-comparison/), [benchlm.ai](https://benchlm.ai/llm-pricing)): modelos económicos ~0,20 $/1,20 $ por millón de tokens de entrada/salida; intermedios ~3 $/15 $; frontera ~5 $/25 $.

Unidad de coste: **un candidato de caso** = biblia narrativa + esquema formal + ejemplos ≈ 12.000 tokens de entrada, y ≈ 3.000 de salida. Un caso publicado consume **4 candidatos** (la validación de F3 descarta pistas que no reparsean) más 2 pasadas de revisión.

| Nivel de modelo | Coste por candidato | **Coste por caso publicado** | 60 casos/mes | 365 casos (1 año) | 120 casos (libro) |
|---|---:|---:|---:|---:|---:|
| Económico | ~0,01 $ | **~0,05 $ (0,05 €)** | 3 € | 16 € | 5 € |
| Intermedio | ~0,08 $ | **~0,50 $ (0,45 €)** | 27 € | 164 € | 54 € |
| Frontera | ~0,14 $ | **~0,85 $ (0,77 €)** | 46 € | 281 € | 92 € |

**Cifra de planificación: 40 €/mes**, con techo de **2 € por caso publicado** y **80 €/mes**. Es dos órdenes de magnitud menor que cualquier otra decisión de este informe, lo que confirma la premisa de `analisis-estrategico` §5.2 («coste de IA por caso: céntimos») y de D-009 («el coste de cómputo no es la restricción»).

**Matiz que importa:** si la generación se ejecuta dentro del plan de tarifa plana del fundador (D-009), el coste marginal es **0 €** y la restricción es el tiempo de calendario del agente. Pero el cron diario de publicación (B-19) necesita una clave de API, así que la partida se presupuesta igual. La regla práctica: **candidatos con modelo intermedio, pasada final de estilo con modelo frontera**; nunca al revés.

### 2.9 Dominio y marca

| Concepto | Coste | Fuente |
|---|---|---|
| `sospechario.com` + `.es`, renovación | **25-40 €/año** (~2,50-3,30 €/mes) | [ofertango.com](https://ofertango.com/como-registrar-un-dominio-com-en-2026), [arsys.net](https://www.arsys.net/domains/prices) |
| **OEPM, tasas vigentes desde el 1 de abril de 2026, vía telemática** | **125,36 € la primera clase + 81,21 € por clase adicional** | [OEPM, tasas de marcas](https://www.oepm.es/es/tasas-y-precios-publicos/tasas-de-marcas-y-nombres-comerciales/), [cohenyaguirre.es](https://cohenyaguirre.es/cuanto-cuesta-registrar-una-marca-comercial-tasas) |
| **OEPM para las clases 9, 41 y 16 (D-011 R5)** | 125,36 + 2 × 81,21 = **287,78 €** | Cálculo propio sobre las tarifas oficiales |
| EUIPO, clases 9 y 41 (escalón 3 de D-006) | ~900 € según D-006; **no verificado en esta ronda** | `docs/decisiones.md` D-006 |

**Corrección menor a D-011 R5:** la entrada estima «≈340 €». Con las tasas oficiales de 2026 y presentación telemática, la cifra es **287,78 €**. La diferencia (52 €) sobra: se deja como colchón, no se reasigna.

---

## 3. Coste por escenario y proveedor

Conversión a euros con 1 $ = 0,90 €. «Stack gestionado» = la arquitectura tal como está diseñada hoy en `plan-backend` (Vercel Pro + Supabase Pro + PostHog Cloud EU + Resend + Sentry). «Optimizado» = con las tres migraciones de §4.

### 3.1 Escenario Validación — 10.000 usuarios activos mensuales

| Partida | Cálculo | $/mes | €/mes |
|---|---|---:|---:|
| Vercel Pro | 20 $ base; 3,0 M peticiones de edge (dentro de 10 M); 14,5 GB (dentro de 1 TB); uso medido 3,13 $ absorbido por el crédito | 20,00 | 18,00 |
| Supabase Pro | 25 $; Micro cubierto por el crédito de 10 $; 10.000 MAU de Auth (dentro de 100.000); 1,2 GB de egress | 25,00 | 22,50 |
| PostHog Cloud EU | 0,72 M eventos, dentro del millón gratuito | 0,00 | 0,00 |
| Resend Pro | 35.000 correos (dentro de 50.000) | 20,00 | 18,00 |
| Sentry Developer | Gratis | 0,00 | 0,00 |
| Dominios | Prorrateado | 3,00 | 2,70 |
| **Subtotal infraestructura** | | **68,00** | **61,20** |
| IA de redacción | 60 casos, modelo intermedio-frontera | 44,00 | 40,00 |
| **Total** | | **112,00** | **101,20** |
| **Coste por usuario activo mensual** | | | **0,0101 €** |

**Al día del lanzamiento (1.000-5.000 usuarios), la misma tabla da 48-68 $ = 43-61 € de infraestructura**, lo que confirma los 45-65 €/mes de `plan-backend` §10. Con IA y sin Sentry el coste real del primer mes es **75-105 €/mes**.

### 3.2 Escenario Base — 50.000 usuarios activos mensuales

| Partida | Cálculo | $ gestionado | $ optimizado |
|---|---|---:|---:|
| Vercel Pro | 20 $ + edge 5 M × 2 $ = 10 $ + invocaciones 2,88 $ + CPU 8,54 $ + memoria 4,24 $ = 25,66 $ medido − 20 $ de crédito | **25,66** | 20,00 (con dieta a 15 peticiones/sesión: 9 M de edge, dentro de lo incluido) |
| Supabase Pro | 25 $ + Small 15 $ − 10 $ de crédito; 50.000 MAU dentro de lo incluido; 7,2 GB dentro de 8 GB el primer año | **30,00** | 30,00 |
| PostHog Cloud EU | 3,6 M eventos: 1 M gratis + 1 M × 50 $ + 1,6 M × 34,3 $ | **104,88** | 63,72 (4 eventos/sesión) · **7-12 (autoalojado)** |
| Correo | Resend: 90 $ + 75.000 marginales · SES: 175.000 × 0,0001 $ + notificaciones | **123-150** | **20,00** |
| Sentry Team | 50.000 errores | **26,00** | 26,00 |
| Dominios | | 3,00 | 3,00 |
| **Subtotal infraestructura ($)** | | **313-340** | **106-113** |
| IA de redacción | | 44,00 | 44,00 |
| **Total ($ / €)** | | **357-384 $ / 321-346 €** | **150-157 $ / 135-141 €** |
| **Coste por usuario activo mensual** | | **0,0066 €** | **0,0028 €** |

**Cifra de referencia del escenario Base: 332 €/mes gestionado, 138 €/mes optimizado.**

> **Discrepancia que hay que registrar.** `plan-backend` §10 estima **95-110 €/mes a 50.000 usuarios** y fija la regla «si el coste proyectado supera 100 €/mes antes de los 50.000 usuarios mensuales, se recorta analítica, no producto». Con las tarifas reales de septiembre de 2026, la cifra correcta es **332 €/mes**, es decir, **3,0 veces** la estimada. Las tres causas, en orden de tamaño: (a) Resend a 175.000 correos cuesta 123-150 $, no 35 $, porque el plan Scale arranca en 90 $ por 100.000; (b) PostHog con 12 sesiones/mes (perfil B) genera 3,6 M de eventos, no 1,8 M, y la factura se duplica; (c) el presupuesto no incluía Sentry ni la IA de redacción. **No es un error de criterio: es la misma clase de cuenta incompleta que corrigió D-008.** La regla se mantiene en espíritu y se reancla en §7.2.

### 3.3 Escenario Bueno — 150.000 usuarios activos mensuales

| Partida | Cálculo gestionado | $ gestionado | $ optimizado |
|---|---|---:|---:|
| Vercel Pro | 20 $ + edge 35 M × 2 $ = 70 $ + invocaciones 8,64 $ + CPU 25,60 $ + memoria 12,72 $ = 116,96 $ − 20 $ | **116,96** | 80,96 (dieta a 15 peticiones/sesión: 27 M de edge) |
| Supabase Pro | 25 $ + Medium 60 $ − 10 $ = 75 $ · **MAU: 50.000 × 0,00325 $ = 162,50 $** · disco 1,70 $ | **239,20** | **76,70** (alta de Auth diferida: 67.500 MAU, dentro de lo incluido) |
| PostHog Cloud EU | 10,8 M eventos: 50 $ + 8,8 M × 34,3 $ | **351,84** | **12,00** (autoalojado en Hetzner CPX21 + copias) |
| Correo | Resend: 90 $ + 425.000 marginales · SES: 525.000 × 0,0001 $ | **277-430** | **55,00** |
| Sentry Team + sobrecoste | | **36,00** | 36,00 |
| Dominios | | 3,00 | 3,00 |
| **Subtotal infraestructura ($)** | | **1.024-1.177** | **263,66** |
| IA de redacción | | 55,00 | 55,00 |
| **Total ($ / €)** | | **1.079-1.232 $ / 971-1.109 €** | **319 $ / 287 €** |
| **Coste por usuario activo mensual** | | **0,0069 €** | **0,0019 €** |

**Cifra de referencia: 1.037 €/mes gestionado, 287 €/mes optimizado. Ahorro: 750 €/mes, un 72 %.**

### 3.4 Escenario Óptimo — 200.000 usuarios activos mensuales

| Partida | $ gestionado | $ optimizado |
|---|---:|---:|
| Vercel Pro (edge 50 M × 2 $ = 100 $; cómputo 62,61 $; − 20 $) | **162,61** | 114,61 (dieta: 36 M de edge) |
| Supabase Pro (Large 110 $ − 10 $ + 25 $ = 125 $ · **MAU 100.000 × 0,00325 $ = 325 $** · disco 2,60 $) | **452,60** | **127,60** |
| PostHog Cloud EU (14,4 M: 50 $ + 12,4 M × 34,3 $) | **475,32** | **15,00** |
| Correo (Resend 90 $ + 600.000 marginales · SES 700.000 × 0,0001 $) | **354-570** | **73,00** |
| Sentry | **46,00** | 46,00 |
| Dominios | 3,00 | 3,00 |
| **Subtotal infraestructura ($)** | **1.494-1.710** | **379,21** |
| IA de redacción | 66,00 | 66,00 |
| **Total ($ / €)** | **1.560-1.776 $ / 1.404-1.598 €** | **445 $ / 401 €** |
| **Coste por usuario activo mensual** | **0,0075 €** | **0,0020 €** |

**Cifra de referencia: 1.500 €/mes gestionado, 401 €/mes optimizado. Ahorro: 1.099 €/mes, un 73 %.**

### 3.5 Resumen y contraste con el ingreso

Ingresos brutos por escenario, con la corrección de D-008 aplicada a la línea Premium (−48 %) también en Bueno y Óptimo, que D-008 dejó explícitamente sin recalcular. **Esta es una extrapolación mía, no una decisión registrada.**

| Escenario | Usuarios | Coste gestionado | Coste optimizado | €/usuario gestionado | Ingreso bruto estimado | Coste gestionado / ingreso | Coste optimizado / ingreso |
|---|---:|---:|---:|---:|---:|---:|---:|
| Validación | 10.000 | **101 €** | 88 € | 0,0101 € | ~650 € | **15,5 %** | 13,5 % |
| Base | 50.000 | **332 €** | 138 € | 0,0066 € | ~2.720 € | **12,2 %** | 5,1 % |
| Bueno | 150.000 | **1.037 €** | 287 € | 0,0069 € | ~8.200 € | **12,6 %** | 3,5 % |
| Óptimo | 200.000 | **1.500 €** | 401 € | 0,0075 € | ~15.900 € | **9,4 %** | 2,5 % |

**Coste marginal por cada 10.000 usuarios adicionales entre el Base y el Bueno: 70,5 €/mes gestionado frente a 14,9 €/mes optimizado. El stack gestionado cuesta 4,7 veces más en el margen.**

Y el dato que hay que colgar de la pared: en el escenario Base, **cada suscriptor Premium aporta 1,53 €/mes netos (D-008) y cada 232 usuarios activos cuestan 1,53 € de infraestructura gestionada**. Con una conversión del 1,5 %, esos 232 usuarios producen 3,5 suscriptores: la infraestructura se paga con **el 29 % de un suscriptor**. Es un negocio sano por el lado del coste; lo que decide su viabilidad es la conversión, no el stack.

---

## 4. Punto de inflexión y coste de cada migración

### 4.1 Dónde se cruza cada techo gratuito

| Techo | Se agota a… | Consecuencia inmediata |
|---|---:|---|
| **PostHog, 1 M de eventos** | **~14.000 usuarios/mes** (6 eventos × 12 sesiones) | Salto de 0 $ a 50 $, y de ahí lineal y sin tope |
| **Resend Pro, 50.000 correos** | **~16.500 usuarios/mes** (1.650 suscriptores diarios) | Salto de 20 $ a 90 $ (plan Scale) |
| **Vercel, 10 M peticiones de edge** | **~33.000 usuarios/mes** (25 peticiones/sesión) | 2 $/M, absorbido por el crédito de 20 $ hasta ~50.000 usuarios |
| **Supabase Pro, 8 GB de base de datos** | **~13 meses a 50.000 usuarios/mes** | Céntimos por GB; el problema real es el tamaño de la instancia, no el disco |
| **Supabase Auth, 100.000 MAU** | **100.000 usuarios/mes** con la arquitectura actual; **220.000** con alta diferida | 0,00325 $/MAU, lineal y sin tope |
| Vercel, 1 TB de transferencia | **~690.000 usuarios/mes** | Irrelevante para este producto |
| Supabase, 250 GB de egress | **~2 M de usuarios/mes** con la caché de CDN | Irrelevante mientras la caché funcione |

### 4.2 El punto de inflexión

**35.000-40.000 usuarios activos mensuales.** Por debajo: el stack gestionado cuesta menos de 200 €/mes, cada día de agente en infraestructura es un día que no se gasta en el producto, y la ventana de mercado (6-12 meses) es más cara que cualquier factura. Por encima: los tres medidores sin tope (PostHog, correo, Auth) crecen en línea recta y el ahorro anual de las migraciones supera los 2.000 €.

Coincide con dos umbrales ya escritos en el proyecto: los 30.000 usuarios mensuales que activan `ADS` (D5 del catálogo) y los 30.000 de la PWA que condicionan `APP-NATIVA`. **Es el mismo momento del producto: el mes en que se activa la publicidad es el mes en que se mueve el correo a SES.** Conviene tratarlo como un solo hito de operaciones y no como tres.

### 4.3 Coste de cada migración, en días de agente

Estimaciones propias, calibradas contra las tablas de `plan-backend` §5 (donde una migración de esquema con pruebas ronda 1-1,5 días y una integración con proveedor externo, 1,5-4).

| # | Migración | Días de agente | Horas del fundador | Ahorro €/mes (Base → Bueno → Óptimo) | Disparador escrito antes del dato |
|---|---|---:|---:|---|---|
| **M1** | **Alta de Auth diferida a la primera interacción con el tablero** | **0,5** si se decide en S1 (toca C1/C2/B-04) · **2,5** si se hace después | 0 | 0 → **146 €** → **292 €** | **Decidir en la semana 1**, sin esperar al dato |
| **M2** | **Boletín diario a Amazon SES** (`eu-west-1`), transaccional queda en Resend | **2,5** | **2** (verificación de dominio, DKIM/SPF/DMARC, salida del *sandbox*) | **93 €** → **250 €** → **340 €** | Boletín > **100.000 correos/mes** (≈3.300 suscriptores) |
| **M3** | **Dieta de analítica**: 4 eventos/sesión, solo anónimos salvo cuentas con correo, agregados en Postgres | **1,5** | 0 | **37 €** → **111 €** → **148 €** | Eventos > **2,5 M/mes** |
| **M4** | **Analítica autoalojada** (PostHog CE o Umami en Hetzner CPX21) | **4** | 1 (dominio, copias, actualización trimestral) | 47 € → **306 €** → **414 €** | Eventos > **8 M/mes** (≈110.000 usuarios) |
| **M5** | **Dieta de peticiones de edge**: consolidar *chunks*, precargar en el service worker, recortar cargas RSC | **2** | 0 | 5 € → **32 €** → **43 €** | Medición en beta > **30 peticiones/sesión** |
| **M6** | **Almacenamiento de PDF a Cloudflare R2** (egreso 0 $) | **0,5** | 0 | 2-15 € desde el primer pack | Al construir `PDF-CLASICO` (B-44) |
| **M7** | **Hosting a Cloudflare** (Workers + Pages + R2, vía `@opennextjs/cloudflare`) | **6-9** | 1 | 30 € → **75 €** → **110 €** | Vercel > **200 €/mes** durante 2 meses **o** un quinto reprecio |
| **M8** | Postgres autogestionado en Hetzner | 8-12 | 4 + guardias | 60 € → 200 € → 400 € | **Nunca.** Rompe el compromiso de «sin guardias nocturnas» de `plan-backend` §1.7 y §9. Descartada por escrito |

**Orden de ejecución recomendado, por ahorro y por riesgo:** M1 (ahora, es gratis) → M6 (al construir el pack) → M3 → M2 → M5 → M4 → M7 solo si hay reprecio.

**Total de la ruta completa M1-M5: 7 días de agente y 2 horas del fundador**, que rinden **281 €/mes en el escenario Base**, **539 €/mes en el Bueno** y **823 €/mes en el Óptimo**. En el escenario Bueno, siete días de agente devuelven **6.470 €/año**.

---

## 5. Riesgo de proveedor y plan de salida

### 5.1 Vercel: reprecio, no ancho de banda

**Cuatro reprecios en dos años y medio**, la cadencia más rápida del sector: medidores granulares y bajada de la transferencia de 0,40 a 0,15 $/GB (abril de 2024); modelo de ejecución Fluid (febrero de 2025); facturación por CPU activa (junio de 2025); crédito de 20 $ por asiento y reparto por asiento (septiembre de 2025) ([bex.co](https://bex.co/blog/2026/08/04/vercel-four-repricings-hosted-platform-bill-shock), [flexprice.io](https://flexprice.io/blog/vercel-pricing-breakdown)). Tres de los cuatro fueron a la baja para el uso típico, así que **el riesgo no es que suban: es que el presupuesto tiene una vida útil de unos nueve meses** y que la estructura cambia bajo los pies.

**Plan de salida, que cuesta cero si se decide ahora.** Mantener desde el día 1 **cero dependencias propietarias**: nada de `@vercel/kv`, `@vercel/blob`, `@vercel/postgres` ni Vercel Analytics como fuente de verdad; el cron ya vive en `pg_cron` (`plan-backend` §9) y no en Vercel Cron; el ISR se expresa con `revalidate` estándar. Con esa disciplina, la salida a Cloudflare o a un contenedor cuesta **6-9 días** (M7). Sin ella, 15-25.

**Riesgo de límite sorpresivo.** No es el ancho de banda: es **Peticiones de Edge** y, sobre todo, la **cláusula de uso comercial de Hobby**, que prohíbe cualquier despliegue que genere ingresos para alguien. Con anuncios, packs y Premium en el catálogo, **Hobby queda descartado desde el día 1** y no es una opción de ahorro. Consecuencia: los 20 $/mes de Vercel Pro son coste fijo desde antes del primer usuario.

**Disponibilidad.** Incidente multicomponente del 3-5 de febrero de 2026 (panel, API y compilaciones, ~4 h 35 min) y fallo de funciones en contenedor el 20 de agosto de 2026; los agregadores registran ~9 incidencias en 30 días y una mediana de resolución de ~161 minutos ([statusgator](https://statusgator.com/services/vercel/outage-history), [apistatuscheck](https://apistatuscheck.com/api/vercel)). Ese perfil es compatible con la regla de racha ya escrita (incidencia ≥ 20 min ⇒ día concedido a todos, B-23), **pero no con un SLA B2B con penalización**.

### 5.2 Cloudflare: la caída que hay que tener en cuenta antes de firmar un SLA

**18 de noviembre de 2025: caída global de 5 h 38 min** (11:28-17:06 UTC), por un fichero de Bot Management que duplicó su tamaño tras un cambio de permisos en una base de datos y superó los límites de memoria de los servidores proxy ([blog de Cloudflare](https://blog.cloudflare.com/18-november-2025-outage/), [ThousandEyes](https://www.thousandeyes.com/blog/cloudflare-outage-analysis-november-18-2025)).

Esto **no descarta Cloudflare**: sus economías (ancho de banda estático ilimitado, egreso 0 en R2, 5 $/mes de Workers) son las mejores del mercado y M7 sigue siendo la salida recomendada. Lo que descarta es **prometer un SLA de disponibilidad B2B superior al del proveedor**. Ver §6.1.

### 5.3 Supabase: el MAU de Auth es el límite sorpresivo del proyecto

`plan-backend` §1 decisión 3 establece que «anónimo es una cuenta real de Auth, no un identificador local suelto»: hay una fila en `auth.users` **desde el primer toque**. Es una buena decisión de ingeniería —RLS idéntica para todos, ascenso a cuenta sin fusión— y este documento no la discute. Pero tiene una consecuencia económica que ningún documento del repositorio había calculado: **el MAU facturable de Auth pasa a ser igual al tráfico del sitio**, incluido el visitante de SEO que rebota sin tocar el tablero.

| Usuarios/mes | MAU de Auth actual | Coste | MAU de Auth con alta diferida | Coste |
|---:|---:|---:|---:|---:|
| 50.000 | 50.000 | 0 $ | 22.500 | 0 $ |
| 100.000 | 100.000 | 0 $ | 45.000 | 0 $ |
| **150.000** | **150.000** | **162,50 $** | 67.500 | **0 $** |
| **200.000** | **200.000** | **325,00 $** | 90.000 | **0 $** |
| 300.000 | 300.000 | 650,00 $ | 135.000 | 113,75 $ |

**Y es además el vector de abuso**: el alta anónima es gratis de crear (riesgo R-06 de `plan-backend`, mitigado con Turnstile en B-11). Una campaña de raspado o una oleada de bots infla directamente la factura, no solo las métricas.

**Plan (M1):** crear la fila de Auth en la **primera interacción con el tablero** (evento `primera_celda` de F15), no en la primera carga. Antes de eso, el jugador ve el caso desde la caché de CDN y su estado vive en `localStorage`. Efecto secundario positivo: si Supabase Auth tiene una incidencia, **un usuario nuevo puede seguir jugando**, cosa que hoy no ocurriría. Riesgo: hay que comprobar que no baja la activación (hipótesis HT5 de §9). Coste: **0,5 días si se decide en la semana 1**, porque toca C1, C2 y B-04, que se congelan entonces; 2,5 días después.

**Disponibilidad.** Los agregadores registran para Supabase incidentes de duración notable en 2026: ~4 h 11 min el 12 de febrero, varios días marcados en Auth entre el 17 y el 20 de abril, y 2 h 50 min + 3 h 20 min el 8 y el 10 de julio ([statusgator](https://statusgator.com/services/supabase), [status.supabase.com](https://status.supabase.com/history)). ⚠ **Estas cifras vienen de un agregador que mide cambios en la página de estado, no del post-mortem oficial, y probablemente sobreestiman la indisponibilidad real de nuestro caso de uso.** Hay que verificarlas en `status.supabase.com/history` antes de citarlas en ningún contrato. Lo que sí se puede afirmar sin verificar: **los incidentes de 2026 se concentran en Auth**, que es precisamente la pieza que M1 saca del camino crítico de la primera partida.

**Solvencia.** Serie E de 100 M$ a 5.000 M$ (octubre de 2025) y Serie F de **500 M$ a 10.500 M$** (junio de 2026), con Stripe entre los inversores y 170 M$ de ingresos recurrentes anuales ([CNBC](https://www.cnbc.com/2026/06/04/database-startup-supabase-raises-500-million-10point5-billion-valuation.html), [PRNewswire](https://www.prnewswire.com/news-releases/supabase-raises-100m-at-5b-valuation-co-led-by-accel-and-peak-xv-302573153.html)). Riesgo de desaparición: **bajo**. Riesgo de reprecio al alza tras una Serie F a esa valoración: **medio-alto**, porque es el patrón del sector.

**Plan de salida.** Postgres es Postgres. Si el esquema vive en migraciones SQL puras con RLS estándar (ya decidido) y el cliente **nunca** usa `supabase-js` (ya decidido, `plan-backend` §1.1), migrar la base de datos a Neon, RDS o Hetzner cuesta **5-8 días**. La pieza con cerrojo real es **Auth**: sustituirla por otro proveedor o por sesiones propias cuesta **4-6 días adicionales**. Total de salida completa: **9-14 días**. Se deja escrito para que nadie descubra el número en caliente.

### 5.4 PostHog: el único coste sin tope

Es el único servicio del stack cuya factura crece linealmente con el uso y **sin techo contractual**. `plan-backend` §10 ya lo identifica como riesgo R-05, y este documento lo confirma con precios: 0 $ hasta 1 M de eventos, **50 $ el segundo millón**, **34,3 $/millón** de 2 a 15 M.

**El agravante que no estaba escrito:** PostHog cobra los **eventos identificados hasta 4 veces más caros** que los anónimos ([PostHog docs](https://posthog.com/docs/data/anonymous-vs-identified-events), [budgetforge](https://www.budgetforge.dev/tools/posthog-pricing-2026)). Si el alta anónima de Supabase se propaga a PostHog como identificación de persona, **la factura se multiplica**. `plan-backend` §4.4 ya lo acota bien («perfil de persona solo para cuentas identificadas»), pero conviene decirlo en términos de dinero: identificar a todos los anónimos en el escenario Bueno costaría del orden de **1.400 $/mes en vez de 352 $**.

**Plan de salida.** PostHog Community Edition es de código abierto y autoalojable, y Umami (MIT) y Plausible (Community Edition) cubren la analítica web. La migración M4 cuesta **4 días** y baja la partida a 12-15 €/mes en Hetzner. Se ejecuta con el disparador de §4.3, no antes.

### 5.5 Netlify: descartado, y por qué

Cambió a un modelo de créditos a finales de 2025: Pro a 20 $ con 3.000 créditos (~150 GB), 20 créditos/GB, recargas de 1.500 créditos por 10 $ ([costbench](https://costbench.com/software/cloud-infrastructure/netlify/), [netli.fyi](https://netli.fyi/blog/netlify-free-plan-limits-2026)). Para el perfil de este producto —poca transferencia, muchas peticiones pequeñas— **el modelo de créditos es opaco y no aporta nada frente a Vercel o Cloudflare**, con la desventaja añadida de que un cambio de conversión de créditos reprecia toda la plataforma de golpe. **Descartado como plataforma y como plan de salida.**

### 5.6 Fly.io y Hetzner: dónde sí y dónde no

- **Fly.io**: 0,02 $/GB en Europa, 160 GB de salida incluidos, máquinas desde ~2 $/mes ([Fly.io docs](https://fly.io/docs/about/pricing/)). Es un buen destino de salida para un contenedor Next.js si Cloudflare no encajara. No aporta nada mientras Vercel funcione.
- **Hetzner**: el sitio más barato del mundo para la analítica autoalojada (CX22 a 4,49 €, CPX11 a 5,49 €, 20 TB de tráfico), **pero subió precios dos veces en 2026**, el 1 de abril y el 15 de junio ([Hetzner docs](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/), [Northflank](https://northflank.com/blog/hetzner-cloud-server-price-increases)). Incluso con las subidas sigue siendo cinco veces más barato que cualquier alternativa gestionada. **Regla escrita: en Hetzner solo va lo que puede estar caído 24 horas sin que nadie se entere** —es decir, la analítica—. Nunca la base de datos ni el juego: eso rompería el compromiso de «sin guardias nocturnas» que `plan-backend` §1.7 fija como restricción de arquitectura.

### 5.7 Correo: coste y residencia de datos, el mismo problema

Resend almacena los datos de cliente —contenido de los mensajes, registros de entrega, cargas de webhook y datos de cuenta— **en Estados Unidos**. Elegir región de envío (`eu-west-1`) cambia desde dónde salen los correos, **no dónde se guardan**; no hay hoy ninguna opción que mueva el almacenamiento a la UE. Las transferencias se cubren con SCC y con el marco EU-U.S. Data Privacy Framework ([Resend GDPR](https://resend.com/security/gdpr), [Resend regiones](https://resend.com/docs/dashboard/domains/regions), [nuntly.com](https://nuntly.com/alternatives/resend-eu)).

Nuestro boletín diario contiene la racha del usuario y su correo: es un dato personal, poco sensible pero identificable, con envío diario y retención en registros. **Amazon SES en `eu-west-1` o `eu-central-1` resuelve el coste y la residencia a la vez.** Es la única decisión del stack que mejora las dos cosas al mismo tiempo. Pasar a `experto-legal` para el registro de actividades de tratamiento.

**Riesgo de la migración:** la entregabilidad. SES exige reputación propia, gestión de rebotes y quejas por SNS, lista de supresión y salida del *sandbox*. El criterio de «hecho» de F17 (entregabilidad ≥ 95 % en Gmail, Outlook y Apple Mail) se mantiene y se vuelve a medir **antes** de cortar Resend. Mitigación: mover primero el boletín (tolerante a un fallo puntual) y **dejar el transaccional en Resend**, que es donde la entregabilidad inmediata sí es crítica (magic link) y donde el volumen es bajo (< 25.000/mes en todos los escenarios, dentro del plan de 20 $).

### 5.8 Pagos: qué riesgo queda tras elegir Paddle

La decisión está tomada y no se reabre. Los riesgos residuales, con su plan:

| Riesgo | Impacto | Plan |
|---|---|---|
| Paddle exige aprobación previa de cuenta | Retraso de días o semanas en el mes 4-5 | **Abrir la cuenta en la semana 11**, junto con B-41, aunque no se use hasta el mes 4-5. Cuesta cero y quita la incertidumbre del camino crítico |
| Margen de cambio de **1,5-3 %** si la divisa de venta ≠ la de cobro | Solo afecta a ventas en moneda local de LatAm | Cobrar en euros; no fijar precios locales hasta el umbral de §6.3 |
| Comisión efectiva del mensual del **21,7 %** | H6 de D-008 se refuta casi por construcción | H6 ya tiene umbral (>18 % tres meses seguidos) y salida escrita (retirar el mensual, subir a 3,49 € o pasar a Stripe + OSS). **Este documento confirma que se refutará**: conviene decidir la respuesta antes, no después |
| Lemon Squeezy se disuelve en Stripe Managed Payments | Ninguno si no construimos ahí | Resuelto en §2.7: no se construye sobre Lemon Squeezy |
| Umbral de paso a Stripe directo | 2.700 €/mes brutos durante 3 meses (`plan-backend` §11.2) | Se mantiene tal cual. A ese volumen, los ~14 puntos de diferencia en el mensual y ~4 en el anual pagan una gestoría |

### 5.9 Residencia de datos y transferencias internacionales

| Proveedor | Dónde están los datos | Transferencia a EE. UU. | Fuente |
|---|---|---|---|
| **Supabase** | Región elegible: `eu-central-1` (Fráncfort) o `eu-west-3` (París) | Panel y soporte en EE. UU. | Documentación del proveedor |
| **Vercel** | Funciones en `fra1`, `cdg1`, `dub1`, `lhr1` | **Sí**: plano de control, soporte y datos de cuenta en EE. UU.; las IP pasan por el sistema anti-DDoS. Requiere DPA firmado + SCC | [Vercel DPA](https://vercel.com/legal/dpa), [flowconsent.com](https://www.flowconsent.com/en/services/hosting/vercel) |
| **PostHog** | **Cloud EU en Fráncfort (AWS `eu-central-1`), instancia independiente** | **No sistemática** | [PostHog Cloud EU](https://posthog.com/blog/posthog-cloud-eu), [PostHog GDPR](https://posthog.com/docs/privacy/gdpr-compliance) |
| **Resend** | **Estados Unidos**, aunque envíe desde Irlanda | **Sí**, cubierta por SCC + DPF | [Resend GDPR](https://resend.com/security/gdpr) |
| **Amazon SES** | Región elegida (`eu-west-1`, `eu-central-1`) | No, si se elige región de la UE | [AWS SES](https://aws.amazon.com/ses/pricing/) |
| **Cloudflare** | Red global; existe Data Localization Suite de pago | Depende de la configuración | — |
| **Paddle** | Reino Unido | Cubierta por decisión de adecuación UE-RU | — |

**Consecuencia para `experto-legal`:** el registro de actividades de tratamiento tendrá que listar como encargados con transferencia internacional al menos a **Vercel (EE. UU.)**, **Resend (EE. UU.)** y **Paddle (RU)**. Sustituir Resend por SES elimina una de las tres y ahorra dinero. La elección de PostHog Cloud EU ya evitaba la cuarta: fue una buena decisión y conviene que quede reconocida como tal.

### 5.10 Riesgo de tipo de cambio

**Todo el stack factura en dólares salvo Hetzner, los dominios `.es` y la OEPM.** Un movimiento del 10 % en EUR/USD mueve la factura un 10 %: ±33 €/mes en el escenario Base y ±150 €/mes en el Óptimo con el stack gestionado. No se cubre —el importe no lo justifica— pero se anota, porque explica desviaciones del presupuesto que si no se atribuirían al uso.

---

## 6. Encaje con el negocio

### 6.1 Licencia B2B a medios: qué exige y qué margen deja

`B2B-WIDGET` (450-750 €/mes) y `B2B-MARCABLANCA` (1.200-2.500 €/mes) son la línea que más exige del stack y la que mejor lo amortiza.

**Widget: `<iframe>`, no `<script>`.** El catálogo dice «un `<script>` o `<iframe>`». Recomendación técnica y económica: **iframe con `sandbox` y `allow` restringidos**. Cuatro razones, en orden de peso:
1. **Aislamiento de CSS y JS** frente al gestor de contenidos del medio, que es hostil por definición y cambia sin avisarnos.
2. **Ninguna cookie de terceros ni huella en el dominio del medio**: el consentimiento lo gestiona el medio en su banner, no nosotros. Con `<script>` compartimos el `document` y entramos en su inventario de RGPD, lo que convierte cada contrato en una negociación de privacidad.
3. **La política de seguridad de contenidos del medio** no nos bloquea (`frame-src` es más fácil de conceder que `script-src`).
4. **El rendimiento del medio no arrastra al nuestro ni al revés**, que es lo que hace defendible un SLA de publicación.

Coste: el juego ya es una PWA; empaquetarlo como ruta `/embed/[cliente]` con tematización por *tokens* CSS y clave de API con cuota son **3-4 días de agente**. Con `<script>` hay que resolver aislamiento de estilos (Shadow DOM) y colisiones de nombres: **6-8 días y soporte perpetuo**. La diferencia son 3-4 días que compran exactamente cero valor para el cliente.

**CNAME y dominio propio.** El catálogo ya excluye el dominio propio de `B2B-WIDGET`, y hace bien: un CNAME por cliente exige dominio adicional, certificado, y —en marca blanca— contrato de subencargado. Coste: ~1 día por cliente más gestión recurrente. **Regla: el CNAME no se vende por debajo de `B2B-MARCABLANCA`.**

**SLA: el límite lo pone el proveedor, no nosotros.** El catálogo promete «SLA de publicación diaria a las 00:00 y soporte por correo en 24 h laborables». Es un SLA de **contenido**, no de **disponibilidad**, y es la formulación correcta. Lo que hay que tener escrito antes de la primera reunión:
- **Vercel Pro no da SLA contractual** (es de Enterprise). **Supabase Pro no da SLA con crédito**; Team sí, y cuesta **599 $/mes**.
- Cumplir un 99,9 % con penalización exigiría **Supabase Team + Vercel Enterprise: más de 800 $/mes**, que **se come dos contratos de `B2B-WIDGET`**.
- **Por tanto:** `B2B-WIDGET` se vende con SLA de publicación y disponibilidad «a mejor esfuerzo», con crédito máximo limitado a la cuota del mes. Solo `B2B-MARCABLANCA` a 2.500 €/mes podría financiar un SLA de disponibilidad, y aun así conviene servir el feed desde un origen cacheado y estático (R2 o CDN) para que **la disponibilidad del feed no dependa de la base de datos**. Servir un JSON diario desde R2 tiene una disponibilidad estructuralmente mayor que servirlo desde Postgres, y cuesta céntimos.

**Aislamiento de datos y su coste.** El catálogo pide «aislamiento de analítica por cliente». Con PostHog eso significa proyectos separados o una propiedad `cliente` obligatoria, y **el tráfico del medio entra en nuestra factura**. Un medio con 100.000 partidas/mes a 6 eventos son 600.000 eventos ≈ 20-30 $/mes. **Recomendación: el widget se mide con un contador propio agregado en Postgres, no con PostHog.** Es lo que el cliente necesita (partidas, finalizaciones, clics de vuelta), cuesta prácticamente cero y evita meter su tráfico en un medidor sin tope.

**Margen unitario de un contrato B2B.** 100.000 partidas/mes = ~2,5 M de peticiones de edge (5 $) + funciones y CPU (~3 $) + analítica en Postgres (~0 $) = **8-33 $/mes contra 450 €/mes de cuota: margen del 92-98 %**. Es el mejor margen unitario del catálogo, muy por encima de Premium (donde la comisión del MoR se lleva el 7,5-21,7 %). **Argumento de negocio, no técnico: el stack ya está pagado por el producto de consumo; B2B lo amortiza.** Refuerza la prioridad que el catálogo ya da al piloto del mes 5.

**Aviso D-006:** la primera conversación B2B real activa un disparador de registro de marca. D-011 R5 ya adelantó la OEPM al 30 de octubre, así que llegaremos con el expediente presentado. Si por cualquier motivo esa fecha se moviera, **la conversación B2B no se abre antes que el expediente**.

### 6.2 El aula: lo más barato del catálogo

`PDF-AULA` (14,99 € / 39,99 € licencia de centro), `PDF-JUNIOR` y `JUNIOR-WEB` exigen del stack exactamente tres cosas, y las tres son baratas:

1. **Cero cuenta y cero datos personales de menores.** Páginas renderizadas en servidor, PDF y nada más. **Coste marginal ≈ 0 €** y ningún riesgo de proveedor. Es, con diferencia, la línea con menor coste técnico del catálogo.
2. **Entrega de PDF sin fricción**: enlace firmado de 72 h y 5 descargas (ya diseñado en B-44). **Recomendación M6: alojar los PDF en Cloudflare R2 desde el primer pack**, porque R2 no cobra egreso y un pack de 40 casos pesa 8-15 MB. Con 1.000 descargas al mes son 15 GB: dentro de la cuota de Supabase, pero **0 $ en R2 para siempre**, y el coste de adoptarlo ahora es medio día. Con `PDF-REGALO` en diciembre de 2026 (D-010 cambio 22) y un pico de campaña, el ahorro se nota.
3. **Que funcione con la red de un colegio**, que suele filtrar y no permite instalar nada. Ya resuelto por diseño: el producto del aula es papel, no web.

**Aviso a `experto-legal` que no aparece en ningún documento:** la **licencia de centro a 39,99 €** puede exigir factura con NIF a nombre del centro y, si es público, alta en FACe. Un *merchant of record* emite su propia factura, no la nuestra, y eso puede bloquear la compra en administración pública. **Si aparece esa demanda, esa referencia sale de Paddle y se factura directamente.** No es un problema hoy —la venta a centros es de fase 2 y de bajo volumen— pero es exactamente la clase de fricción que mata una línea de ingreso el día que llega el primer pedido de un colegio público.

### 6.3 LatAm: latencia, precio y, sobre todo, impuestos

**Latencia.** Por R3 (D-011), **comprobar, Sabueso, acusar y el interrogatorio se ejecutan en el servidor**, con presupuesto de 300 ms en p75. Con las funciones y la base de datos en Fráncfort, un jugador en Buenos Aires o Santiago paga **230-280 ms solo de ida y vuelta de red**: el presupuesto no se cumple en LatAm. Las opciones:
- (a) Réplicas de lectura de Supabase → plan Team o superior, **599 $/mes**. Desproporcionado.
- (b) Servir todo lo público desde CDN (ya está) y **aceptar 250-350 ms en las cuatro acciones de servidor**, compensándolo con optimismo de interfaz: el tablero responde localmente al instante y la confirmación del servidor llega después, sin animación bloqueante. **Coste: 1 día de frontend.**
- (c) Mover el cómputo al borde con Cloudflare Workers: acerca la CPU pero **no la base de datos**, que es donde está la latencia. No resuelve el problema.

**Recomendación: (b).** Es un problema de percepción, no de corrección, y hay una manera barata de que no se note. **La infraestructura en América solo se estudia si LatAm supera el 35 % de los activos**; hoy la estimación del proyecto es ≈19 % del global (D-010, cambio 34).

**Precio.** 19,99 €/año es un precio de lujo en México y en Argentina. En paridad de poder adquisitivo equivale a unos 7-9 dólares en México y 5-7 en Argentina. Paddle admite precios localizados, pero abre arbitraje por VPN y complica la comunicación. **Propuesta: no fijar precios locales hasta que LatAm supere el 25 % de los activos**, y cuando se haga, **solo en el plan anual y con detección por método de pago, no por IP.**

**Impuestos: el factor decisivo, y no lo arregla ningún proveedor.** En Argentina, las percepciones y retenciones sobre compras en moneda extranjera con tarjeta pueden añadir **entre un 21 % y un 60 %** al precio final que ve el comprador, según el régimen vigente. Ningún *merchant of record* lo evita. Y la cobertura de Paddle en LatAm es desigual: México (IVA a servicios digitales), Chile y Colombia tienen regímenes distintos y no todos están cubiertos igual.

**Conclusión de negocio, que confirma la estrategia ya escrita:** **Argentina y Chile son mercado de adquisición, de tráfico y de anuncios; España es el mercado de ingreso por suscripción.** No se construye ni se promete monetización de suscripción en LatAm hasta que exista un método de pago local que valga la pena. Esto refuerza, no contradice, el plan de expansión de `analisis-estrategico` §6.

**Datos.** Un jugador argentino con sus datos en Fráncfort no plantea problema regulatorio para nosotros; el sentido contrario (datos europeos en EE. UU.) sí, y es lo que resuelve §5.7.

### 6.4 Libro y licencia editorial: la única línea inmune al riesgo de proveedor

`LIBRO-LICENCIA` exige del stack **una sola cosa, y ya está garantizada**: que todos los casos publicados se conserven con su certificado y su semilla, de forma reproducible bit a bit. Está en C1, C9 y en `casos.semilla` (`plan-backend` §3.1). Tres consecuencias operativas:

1. **Nunca se borra la tabla `casos`**, ni siquiera los anulados. El volumen es despreciable: 365 casos/año × ~50 KB = **18 MB al año**. Guardar diez años cuesta menos que un café.
2. **La purga de datos personales (B-27, retención de `plan-backend` §4.4) no puede tocar `casos`.** Conviene que la prueba automática de borrado que cuenta filas por persona **excluya explícitamente** esa tabla, para que nadie la incluya por celo.
3. **El generador se ejecuta fuera de la plataforma.** Hoy vive en GitHub Actions (`plan-backend` §9): un libro de 120 casos se genera y maqueta **sin tocar Vercel ni Supabase**. Es la única línea del catálogo con **riesgo de proveedor cero**, y conviene decirlo así en el dossier a la editorial: *«el activo que licenciamos no depende de que ninguna plataforma siga existiendo»*. Es un argumento de venta gratis.

Coste de IA para el dossier de 120 casos: **54-92 €**, una vez (§2.8), frente a un adelanto editorial de cuatro cifras.

---

## 7. Recomendación

### 7.1 Presupuesto tecnológico por escenario

| Escenario | Usuarios/mes | **Presupuesto de infraestructura** | **Presupuesto de IA** | **Total** | Qué tiene que estar hecho a esa altura |
|---|---:|---:|---:|---:|---|
| **Lanzamiento** (mes 1) | 1.000-5.000 | **45-65 €** | 30-40 € | **75-105 €** | M1 decidido en la semana 1 |
| **Validación** | 10.000 | **61 €** | 40 € | **101 €** | Medición real de peticiones de edge y de eventos por sesión |
| **Umbral de migración** | 35.000-40.000 | **160-200 €** | 45 € | **205-245 €** | M6 y M3 hechos; M2 en curso |
| **Base** | 50.000 | **125 €** optimizado (292 € sin migrar) | 40 € | **165 €** (332 € sin migrar) | M1, M2, M3, M6 hechos |
| **Bueno** | 150.000 | **238 €** optimizado (982 € sin migrar) | 50 € | **288 €** (1.037 € sin migrar) | M1-M6 hechos |
| **Óptimo** | 200.000 | **341 €** optimizado (1.434 € sin migrar) | 60 € | **401 €** (1.500 € sin migrar) | M1-M6 hechos; M7 evaluado |

**Costes de una sola vez, fuera del presupuesto mensual:** dominios ~40 €, **OEPM 287,78 €** (30 de octubre de 2026), dispositivo Android de gama media 150-200 € (Q-13), EUIPO ~900 € si se cruza el criterio del día 90.

### 7.2 Límite de gasto por usuario activo mensual

Regla escrita **antes** del dato, para no ajustarla después de mirar la factura:

> **Techo: 0,006 € por usuario activo mensual de infraestructura** (todo el stack menos la IA de contenido), con **suelo absoluto de 130 €/mes hasta 22.000 usuarios**, que es donde los costes fijos dominan.
> **Alerta al 0,0045 €/usuario** o al 80 % del suelo.
> **La IA de contenido se presupuesta aparte**, con techo de **2 € por caso publicado** y **80 €/mes**.
> **Si el techo se cruza dos meses seguidos**, se ejecuta la siguiente migración pendiente por orden de ahorro por día de agente (§4.3). **No se recorta producto.**

De dónde sale el 0,006: es el 11 % del ingreso bruto por usuario del escenario Base (0,054 €/usuario) y deja el coste técnico por debajo del 12 % de la facturación en los cuatro escenarios. Con las migraciones hechas, el coste real queda en **0,002-0,003 €/usuario**, es decir, **con el doble de holgura sobre el techo**.

**Esto sustituye la regla de `plan-backend` §10** («si el coste proyectado supera 100 €/mes antes de los 50.000 usuarios mensuales, se recorta analítica, no producto»), que era correcta en el espíritu pero imposible de cumplir con las tarifas reales. Se conserva íntegra la parte que importaba: **se recorta analítica, no producto.**

### 7.3 Las tres decisiones de stack con mayor impacto económico

**Decisión 1 — Cuándo se crea la fila de Auth del usuario anónimo.**
Es la decisión con mejor relación entre impacto y coste de todo el informe. Diferir el alta a la primera interacción con el tablero saca del contador facturable a más de la mitad del tráfico de SEO. Impacto: **0 € en Validación y Base, 146 €/mes en el escenario Bueno y 292 €/mes en el Óptimo**, más la eliminación de un vector de abuso y la posibilidad de que un usuario nuevo juegue durante una incidencia de Auth. **Coste: 0,5 días si se decide en la semana 1; 2,5 días después, porque toca C1, C2 y B-04, que se congelan esa semana.** Dueño: `desarrollador-backend`, con firma de `director-producto`. **Fecha límite: día 4 de la semana 1.**

**Decisión 2 — Quién envía el correo diario.**
Es la única partida del stack que **crece con la retención**: cuanto mejor funciona el producto, más cara es. Resend hasta 100.000 correos al mes; a partir de ahí, el boletín pasa a Amazon SES en `eu-west-1` y el transaccional se queda en Resend. Impacto: **93 €/mes en el Base, 250 €/mes en el Bueno, 340 €/mes en el Óptimo**, y elimina una transferencia internacional de datos personales. **Coste: 2,5 días de agente y 2 horas del fundador.** Dueño: `desarrollador-backend` con `experto-legal`. **Disparador: 100.000 correos/mes.**

**Decisión 3 — Cuántos eventos se mandan a PostHog y de qué tipo.**
Es el único servicio del stack sin techo. El presupuesto de C7 (6 eventos por sesión) baja a **4 eventos por sesión**, **todos anónimos salvo para cuentas con correo**, y todo lo que sea agregado se calcula en Postgres. Impacto: **37 €/mes en el Base, 111 €/mes en el Bueno, 148 €/mes en el Óptimo**, y evita el escenario patológico —identificar a todos los anónimos— que multiplicaría la factura por cuatro. **Coste: 1,5 días.** Plan de salida disponible sin tocar el SDK: PostHog CE autoalojado, 4 días. Dueño: `analista-datos` con `desarrollador-backend`. **Se decide al cerrar C7, fin de la semana 1.**

### 7.4 Las tres decisiones que este documento pide NO tomar

1. **No usar el plan Hobby de Vercel.** Sus condiciones prohíben el uso comercial y el catálogo prevé anuncios, packs y suscripción. Los 20 $/mes de Pro son coste fijo desde antes del primer usuario, y no hay ahorro que buscar ahí.
2. **No autogestionar Postgres.** Ahorra 60-400 €/mes y rompe el compromiso de «sin guardias nocturnas» de `plan-backend` §1.7, que es una restricción de arquitectura, no una preferencia. Con un equipo de una persona, el ahorro se paga con la primera noche en vela.
3. **No vender un SLA de disponibilidad B2B con penalización** por debajo de `B2B-MARCABLANCA`. Cumplirlo exigiría Supabase Team (599 $) más Vercel Enterprise: más de 800 $/mes, que se comen dos contratos de widget.

---

## 8. Lo que este documento pide a otros agentes

| A quién | Qué | Para cuándo | Por qué |
|---|---|---|---|
| `desarrollador-backend` | **Decidir M1** (alta de Auth diferida a la primera interacción) al congelar C1/C2/B-04 | **Día 4 de la semana 1** | 0,5 días ahora frente a 2,5 después; 146-292 €/mes a escala |
| `analista-datos` | Cerrar C7 con **4 eventos por sesión** y regla de «solo anónimos salvo cuentas con correo» | Fin de la semana 1 | Es el único medidor sin tope del stack |
| `desarrollador-backend` | Instrumentar en la beta **peticiones de edge por sesión** y **eventos por sesión** como métricas de coste, no solo de producto | Semana 7 (beta) | Son los dos supuestos de §1.2 que más mueven la factura y hoy no están medidos |
| `desarrollador-backend` | **Abrir la cuenta de Paddle en la semana 11**, aunque no se use hasta el mes 4-5 | Semana 11 | La aprobación previa puede tardar; cuesta cero y sale del camino crítico |
| `experto-legal` | Registro de actividades: **Vercel (EE. UU.), Resend (EE. UU.), Paddle (RU)** como transferencias; y valorar si el boletín justifica adelantar SES | Fin de la semana 5 (con los textos del correo) | Resend guarda en EE. UU. aunque envíe desde Irlanda |
| `experto-legal` | **Facturación a centros educativos**: si la licencia de centro exige factura propia o FACe, esa referencia sale del *merchant of record* | Antes de `PDF-AULA` (mes 4) | Es la fricción que puede matar la línea el día del primer pedido público |
| `director-producto` | Registrar la corrección del presupuesto de §3.2 y el nuevo techo por usuario de §7.2 en `docs/decisiones.md` | Semana 2 | Igual que D-008: no es un cambio de criterio, es una cuenta que estaba incompleta |
| `disenador-ux-ui` + `desarrollador-frontend` | **Optimismo de interfaz** en las cuatro acciones de servidor, por la latencia de LatAm | Antes del día L | 1 día de trabajo que evita que Expediente y Escena se sientan lentos en Buenos Aires |
| `ingeniero-motor-puzzles` | Confirmar que la purga de datos personales **excluye `casos`** y que la regeneración desde semilla sigue siendo bit a bit | Al cerrar C9 | Es todo el activo de `LIBRO-LICENCIA` |

---

## 9. Hipótesis con umbral y fecha

Escritas antes de mirar el dato, como exige el método.

| # | Hipótesis | Umbral de refutación | Fecha | Qué se hace si se refuta |
|---|---|---|---|---|
| **HT1** | 25 peticiones de edge por sesión es una cota superior | La beta mide **> 30 por sesión** | Fin de la semana 7 | Se ejecuta M5 antes del día L (2 días). Sin ella, el escenario Bueno pasa de 105 € a ~160 €/mes solo en Vercel |
| **HT2** | El boletín diario lo suscribe **≤ 10 %** de los usuarios activos | **> 14 %** en el mes 2 | Mes 2 tras el día L | Se adelanta M2 sin esperar al disparador de 100.000 correos |
| **HT3** | Con caché de CDN, el egress de Supabase se queda por debajo del 20 % de los 250 GB incluidos | **> 100 GB/mes** antes de 50.000 usuarios | Mes 1 | Hay un fallo de caché en un endpoint público: se revisa la caché **antes** de subir de plan (palanca 3 de `plan-backend` §10) |
| **HT4** | El coste de IA se queda por debajo de **2 € por caso publicado** | **> 2 €/caso** en un mes completo | Mes 1 | Modelo económico para candidatos y modelo caro solo en la pasada final de estilo |
| **HT5** | Diferir el alta anónima **no** baja la activación | Caída **> 3 puntos** en «visita → primera celda» frente al control | Beta (semana 7) | Se revierte M1 y se acepta el coste de Auth: 146-292 €/mes en Bueno y Óptimo |
| **HT6** | El coste técnico se queda por debajo del **12 % del ingreso bruto** | **> 15 %** dos meses seguidos | Continuo desde el mes 2 | Se ejecuta la siguiente migración pendiente por orden de §4.3. No se recorta producto |

---

## 10. Lo que no está verificado

Honestidad sobre los límites de esta ronda. **WebFetch está bloqueado**: todo procede de resultados de búsqueda, no de páginas de tarifas leídas directamente.

| ⚠ | Dato | Por qué importa | Cómo verificarlo |
|---|---|---|---|
| 1 | **La escalera completa de Resend por encima de 100.000 correos** no está publicada. Se ha estimado con la tasa marginal (0,00044-0,0008 $/correo), lo que da un rango de 277-430 $ en el escenario Bueno | Cambia el disparador de M2 en unos meses, no la decisión | Panel de facturación de Resend o consulta a su equipo comercial |
| 2 | **El sobrecoste de disco de Supabase por encima de 8 GB** | No mueve ninguna decisión: son céntimos por GB | Página de tarifas de Supabase |
| 3 | **Los incidentes de Supabase de 2026** proceden de un agregador (StatusGator) que mide cambios en la página de estado, no de post-mortems oficiales; probablemente sobreestiman | No se puede citar en un contrato B2B sin comprobarlo | `status.supabase.com/history` |
| 4 | **Tasas de la EUIPO en 2026** (el proyecto usa ~900 € de D-006) | Solo afecta al escalón 3, posterior al día 90 | Web de la EUIPO |
| 5 | **Disponibilidad de la región de la UE en el plan Team de Sentry** | Si no la hubiera, sería una cuarta transferencia internacional | Panel de Sentry al contratar |
| 6 | **Tipo de cambio EUR/USD** de septiembre de 2026 (se ha usado 1 $ = 0,90 €) | Un 10 % de desviación mueve la factura un 10 % | Cualquier fuente de mercado el día de aprobar el presupuesto |

**Además, ninguno de los supuestos de uso de §1.2 está medido.** Es inevitable —no hay producto todavía— pero significa que las tablas de §3 son escenarios, no previsiones. Los dos que más mueven la factura, peticiones de edge por sesión y eventos por sesión, tienen que salir de la beta de la semana 7 (petición a `desarrollador-backend` en §8) y este documento se revisa con esos números antes del día L.

---

*Cambios a este documento: los registra `estratega-negocio`. Si alguno afecta a un umbral ya fijado —el techo de 0,006 €/usuario, los disparadores de migración o las seis hipótesis de §9—, se anota además en `docs/decisiones.md` con fecha y motivo.*
