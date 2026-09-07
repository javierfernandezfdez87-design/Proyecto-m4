# Stack tecnológico · documento de decisión

Autor: `director-producto`. Fecha: **7 de septiembre de 2026** (S1, día 1). Versión 1.0.
Para: el fundador (Javier Fernández).
Encargo: «qué stack escogerías y por qué, analizando todas las posibilidades en profundidad».

**Documentos que este documento consolida y cierra:** los ocho estudios de `docs/stack/` (`frontend.md`, `juez-frontend-agentes.md`, `juez-frontend-rendimiento.md`, `juez-frontend-seo-hosting.md`, `backend-hosting.md`, `arquitecturas-alternativas.md`, `coste-y-riesgo.md`, `motor-y-pipeline-ia.md` con `bench-motor/`), más `docs/decisiones.md` (D-009, D-010, D-011), `docs/roadmap.md` §8, `docs/roadmap/supuestos.md` y `docs/roadmap/plan-frontend.md` §1.
**Registra:** D-012 en `docs/decisiones.md`.

> **Alerta D-006 (registro de marca), comprobada hoy:** ninguno de los cinco disparadores se cumple —cero usuarios, sin vídeo con +100.000 visualizaciones, sin mención en prensa, sin conversación B2B ni editorial, sin tercero usando un nombre parecido—, así que **no procede adelantar nada**; el expediente de la OEPM sigue calendarizado para el viernes 30 de octubre por D-011/R5, y la primera conversación B2B (que este documento sitúa como la línea de mejor margen del catálogo) sí lo dispararía.

---

## 1. Recomendación en una página

Trece capas. Una frase de por qué cada una y qué quedó segunda.

| Capa | **Elección** | Por qué, en una frase | Segunda opción | Estado |
|---|---|---|---|---|
| **Framework** | **SvelteKit 2.70.x + Svelte 5.57.x**, con prueba de verificación el viernes 11 y desempate escrito a su favor | El suelo medido de Next 16 App Router son **130 KB gzip sin una línea de código propio**, y las 22 de 36 URL que traen el tráfico son primeras visitas por búsqueda; SvelteKit envía 29,6 KB con router y **0 KB** en las 14 páginas sin isla | Next.js 16.3 con el presupuesto de bytes reescrito hacia arriba y el JSON-LD fuera de todo `Suspense` | **Condicionada** (§2) |
| **Lenguaje** | **TypeScript estricto** (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`), Node 22 LTS | Un solo lenguaje de punta a punta: el motor medido en cuatro lenguajes da el **mismo checksum** y TypeScript cumple la compuerta C-B con 30× de margen | Rust→WASM solo para el banco de máscaras, con disparador escrito (T1) | Cerrada |
| **Estilos y componentes** | **Tailwind v4** con tema generado desde `tokens.json` + **Bits UI 2.19** + `svelte/transition` y `svelte/motion` | Un solo origen de verdad para color, espacio y movimiento; y la animación de la reconstrucción viene dentro del framework, sin librería (5-22 KB menos) | Radix UI si se revierte a Next; escribir las siete primitivas a mano si Bits UI falla la auditoría axe de S2 | Cerrada, condicionada al framework |
| **Motor de puzzles** | **TypeScript**, `Uint32Array` con búfer de rascar, **nunca `BigInt`**, monorepo pnpm **sin Turborepo**, `contratos/` como paquete de primer nivel | Medido: `BigInt` es **633× más lento** con `n = 5`; y el núcleo compartido con el navegador cabe en ≤10 KB comprimidos | Rust como oráculo de CI (disparador T3), nunca como generador | Cerrada |
| **Backend, BD y auth** | **Supabase Pro**, región **París (`eu-west-3`)**, RLS en todas las tablas, escrituras solo por `service_role`, **cuenta anónima perezosa** | Gana la matriz con 443/500: es lo único que da RLS de Postgres, inicio anónimo que asciende sin fusión y el mejor corpus para agentes | Neon + Drizzle + Better Auth (373/500), a cambio de 6-10 días de agente y de que la seguridad de la autenticación pase a ser nuestra | Cerrada |
| **Hosting** | **Vercel Pro**, un asiento, funciones fijadas en **`cdg1` (París)**, junto a la base de datos, con **tope de gasto duro** | Cloudflare gana por coste y latencia (327 frente a 280) pero **bloquea bots de IA de Entrenamiento y Agente por defecto desde el 15/9/2026** y SvelteKit pierde ISR allí; es decisión de calendario y de GEO, no de tabla | Cloudflare Workers como **salida ensayada** desde S2, ejecutable en el mes 3 | Cerrada hasta el día L |
| **Correo** | **Resend** hasta 6.000 suscriptores o 100.000 correos/mes; **Amazon SES (`eu-west-1`)** después | Resend gana la operación y el desarrollo; SES gana el coste **y la residencia** (Resend guarda registros y cuenta en EE. UU. aunque envíe desde Irlanda) | Brevo, único íntegramente europeo, si `experto-legal` rechaza la transferencia | Cerrada, con disparador |
| **Analítica** | **PostHog Cloud EU** (Fráncfort), **2,8 eventos por sesión**: 2 al 100 % + 4 sobre muestra determinista del 20 %, sin eventos identificados salvo conversión | Es lo único con residencia europea real *y* embudos con abandono por paso; a 6 eventos por sesión se come el presupuesto entero a 50.000 usuarios | Plausible como complemento de tráfico; PostHog CE autoalojado con el disparador de 8 M eventos/mes | Cerrada |
| **Errores y monitorización** | **Sentry en `de.sentry.io`** (la región se fija al crear la organización y **es irreversible**) + **Better Stack** gratuito como monitor externo | B-23 exige declarar una caída de 20 minutos, y un sistema no detecta con fiabilidad su propia caída: hace falta un monitor de fuera | Better Stack solo (349/410), que acepta el SDK de Sentry sin cambios y es a la vez el plan de salida | Cerrada |
| **Pagos (fase 2)** | **Stripe Managed Payments** (MoR de Stripe desde abril de 2026) | Mismo porcentaje que Paddle con la mitad de comisión fija —**13,3 % frente a 21,7 % sobre 2,99 €**— y la salida a Stripe directo con alta en OSS es un cambio **dentro de Stripe**, sin recobro de tarjetas | Paddle, si Stripe Managed Payments no admite vendedor español, el precio de 2,99 € o la factura conforme | **Reabierta** en B-41 (S11) |
| **IA de redacción** | **Claude Opus 5** para redacción y paquete post-acusación; **Sonnet 5** para retraducción y puntuación; **API por lotes + caché de prefijo**; SDK de TypeScript con salidas estructuradas | La calidad del caso **es** el producto y el coste es irrelevante: 26-110 $ **al año** para 365 casos; la retraducción es análisis con gramática cerrada y hace más llamadas, así que no necesita el modelo caro | Sonnet 5 para todo si el fundador prefiere uniformidad. **Haiku queda prohibido** en redacción y en ficheros `.svelte` (0,66 en SvelteBench) | **Decide el fundador** (§7) |
| **Repositorio y CI** | **Monorepo pnpm workspaces**, cuatro paquetes, **sin Turborepo**; GitHub Actions con `generar.yml` (determinista, sin secretos) y `redactar.yml` (con secreto) separados | Con 4-6 paquetes y compilaciones de segundos, la caché ahorra menos de lo que cuesta; y separar los dos jobs es lo que hace **comprobable** la propiedad «misma semilla, mismo caso» | Turborepo con disparador escrito: CI por encima de 10 min en el camino crítico dos semanas seguidas | Cerrada |
| **Tests** | **Vitest en modo navegador** (`vitest-browser-svelte`, no jsdom) + **fast-check** + **oráculo ingenuo en TS** + Playwright + axe + Lighthouse CI | El oráculo ingenuo cuesta **medio día** y encuentra la familia de errores de bits que ningún test de unicidad detecta —un bitset con un bit de más produce un caso que sigue teniendo solución: la equivocada | Hypothesis es mejor biblioteca de propiedades y vive en el lenguaje equivocado | Cerrada |

**Lo que este stack cuesta:** **55-85 €/mes el día 1**, 130-210 €/mes a 50.000 usuarios, 440-530 €/mes a 200.000 con las correcciones aplicadas (§5). Techo escrito: **0,006 € por usuario activo mensual**.

**Lo que este stack no promete:** nada de esto se ha probado en un Android real, las mediciones de bytes las hizo un juez con npm en este contenedor, y los dominios oficiales de Next, Svelte, Vercel y Cloudflare estaban bloqueados durante toda la investigación (§8).

---

## 2. La decisión del framework, resuelta

### 2.1 El estado de la discusión

`docs/roadmap/plan-frontend.md` §1 registró **D-F1: Next.js** con tres razones. Cinco días después, el propio autor escribió `docs/stack/frontend.md` y encontró que **su razón 2 era un error de análisis**: no que RSC no funcione, sino que en **este** árbol web no hay páginas sin isla en el tramo que trae el tráfico. Recomendó SvelteKit con 8,23 frente a 6,99.

Tres jueces escépticos intentaron refutarlo, cada uno con una lente distinta. **Ninguno lo refutó.**

| Juez | Lente | Veredicto | Solidez | Lo que corrige |
|---|---|---|---|---|
| `juez-frontend-seo-hosting` | SEO, GEO, OG, hosting, portabilidad | No refutada | **4/5** | Tres de las cinco razones del estudio son falsas o caducan; **la mejor razón el estudio no la usó** |
| `juez-frontend-rendimiento` | Afirmaciones técnicas y de rendimiento | No refutada | **3/5** | Varias cifras falsas o exageradas; **medida, la tesis es más fuerte de lo que el estudio la cuenta** |
| `juez-frontend-agentes` | Productividad de agentes y madurez | No refutada, «rebajada» | **3/5** | Los dos apoyos de C4 son falsos, uno en cada dirección; el riesgo de SK3 es mayor y más concreto |

Un dictamen que dice «no refutada, 3/5» no es un aprobado tibio: dice **la conclusión se sostiene, el razonamiento con el que la defiendes no**. Eso obliga a reescribir el argumento antes de registrarlo, y es lo que hace la §2.2.

### 2.2 Lo que queda en pie cuando se corrigen las cifras

**A favor de SvelteKit, medido y no discutido por nadie:**

1. **El suelo, no la isla.** El juez de rendimiento midió con npm y las versiones publicadas hoy: un «hola mundo» de **Next 16.3.4 App Router envía 130-133 KB gzip** (109-114 brotli) sin una línea de aplicación; el mismo en **SvelteKit 2.70.3 envía 29,6 KB**, y **0 KB con `csr = false`**. Añadir la rejilla 6×6 cuesta 0,35 KB en Next y 0,27 KB en SvelteKit. **La isla es barata en los dos; lo caro es el suelo, y la relación es 4,5×.**
2. **En App Router no existe forma de servir una página sin JavaScript** (`unstable_runtimeJS` solo existe en Pages Router; la discusión vercel/next.js #49544 sigue sin respuesta oficial desde 2023). Por tanto: **en Next las 36 URL pagan 130 KB; en SvelteKit, 22 pagan ~30 KB y 14 pagan 0.** Este es el argumento correcto, y el estudio original **no lo formuló así**: dijo que RSC ayuda en 14 URL, que es falso en el mecanismo.
3. **El presupuesto de `plan-frontend.md` §7 no está «en el techo de Next»: está por debajo de su suelo.** `/` a ≤110 KB comprimido es inalcanzable en gzip; landings a ≤40 KB son imposibles con un suelo de 130 KB. Y la regla de D-F1 —«si en la semana 4 el presupuesto no se cumple, se recortan islas»— **nunca podría cumplirse en Next: no habría islas que recortar.** Esto no es una preferencia: es una contradicción entre dos documentos aprobados que hay que resolver eligiendo uno de los dos.
4. **El *streaming* de React puede esconder el JSON-LD a los bots que no ejecutan JavaScript.** Dentro de un `Suspense`, el bloque llega como `self.__next_f.push(...)`, no como nodo del DOM; la discusión next#87723 (diciembre 2025 - marzo 2026) sigue sin respuesta oficial. Y **ningún rastreador de IA grande ejecuta JavaScript a mediados de 2026**: GPTBot descarga JS en ~11,5 % de sus peticiones y no lo ejecuta; ClaudeBot en ~23,84 % y tampoco; la única excepción es Gemini vía Googlebot. `arbol-web-final.md` §4.1 requisito 2 convierte el HTML servido en **prueba de aceptación**, y la GEO es el segundo canal de adquisición. **En SvelteKit ese modo de fallo no existe porque no hay carga útil de framework donde esconderse.**
5. **El HTML de Next pesa más:** las páginas con RSC serializan el contenido dos veces y hay una incidencia abierta que mide **~29 % del HTML de SSR** ocupado por listas de URL de fragmentos duplicadas, con crecimiento cuadrático. El presupuesto de 45 KB de HTML comprimido de §7 se fijó sin contar con ello.
6. **Capacitor y el envoltorio nativo:** `output: 'export'` de Next desactiva segmentos dinámicos, middleware, ISR y `next/og` —dos configuraciones de construcción divergentes—; `adapter-static` con `fallback: 'index.html'` da una concha SPA real desde el mismo árbol. El juez de SEO lo llama «la más limpia de las cinco razones del estudio».
7. **El corpus ya no decide.** SvelteBench (nueve pruebas de runas, sin documentación en contexto): **Opus 4.5 pass@1 = 1,00 · Sonnet 4.6 = 1,00 · Gemini 3.1 Pro = 1,00 · GPT-5.3-codex = 0,97**; pass@10 = 1,0 en toda la mitad superior. La brecha React/Svelte de Web-Bench (65/25) es de modelos de principios de 2025 sin razonamiento y se cierra con modelos que razonan. **El único que suspende es Haiku 4.5 (0,66; snippets 0,0)**, y este proyecto no escribe código con Haiku.

**A favor de Next, y hay que decirlo entero:**

1. **El utillaje oficial para agentes es estructuralmente mejor.** Desde 16.2 la documentación **de la versión instalada** viaja dentro del paquete (`node_modules/next/dist/docs/`, sin petición de red); 16.3 genera `AGENTS.md`/`CLAUDE.md` con bloque gestionado, expone un MCP en `/_next/mcp` (`get_compilation_issues`, `compile_route`) y publica *skills* como `next-cache-components-adoption`. **Esa documentación no puede desincronizarse de la versión instalada.** El MCP oficial de Svelte, en cambio, sirve la documentación «actualizada de svelte.dev/docs»: **el día que SvelteKit 3 sea estable, nuestra propia herramienta de mitigación nos devolverá la idiomática equivocada.**
2. **SvelteKit 3 está en RC desde el 13 de agosto de 2026 y no es «`$lib` → `#lib`».** Elimina **`$service-worker`** —el módulo contra el que está escrito el diseño del service worker—, elimina `$app/stores`, deja de soportar `svelte.config.js`, cambia `error()`, `handleError`, `goto`, los *matchers* y las cookies, y **`adapter-vercel` deja de soportar el runtime *edge***. Y **no hay política escrita de parches de seguridad para la línea 2.x tras el estable**.
3. **En Cloudflare, Next conserva ISR y SvelteKit no**; y **SvelteKit no tiene equivalente de `revalidateTag`**: la revalidación bajo demanda es un `GET` con `x-prerender-revalidate` **por URL** (kit#12031, abierto).
4. **La portabilidad de Next está dejando de ser un problema.** El 25 de marzo de 2026, Next 16.2 publicó una **API de adaptadores de despliegue estable**, construida con Netlify, Cloudflare, OpenNext, AWS y Google Cloud, con compromiso público de tratar a los adaptadores conformes en igualdad con Vercel. La ventaja de SvelteKit **caduca a finales de 2026**, dentro de nuestro límite duro del 12 de enero de 2027.
5. **Contratación 60 a 1 en España** (700-800 ofertas de React frente a 12-13 de Svelte). Irrelevante el año 1 —el código lo escriben agentes— y relevante el día de una *due diligence* B2B o el día que el fundador quiera un humano de guardia. **Consta como coste aceptado, no como criterio excluido.**
6. **`next/og`, `sitemap.ts`, `robots.ts` y `generateMetadata` son azúcar real:** entre media jornada y dos días de agente que hay que escribir a mano.

**Tres argumentos del estudio original que quedan retirados**, porque un documento de decisión no puede apoyarse en ellos:

- «Next pierde el borde y SvelteKit lo resuelve en el borde»: **ninguno tiene borde en Vercel**. Vercel dejó obsoletas las Edge Functions en junio de 2025; Next 16.3 eliminó `runtime='edge'`; y la opción `runtime` de `adapter-vercel` está documentada como obsoleta y se retirará. D-011/R4 necesita la **cabecera de zona** (`x-vercel-ip-timezone`, activa en todas las funciones de todos los planes) y una **reescritura por URL**: disponible igual en los dos.
- «La reactividad de grano fino resuelve R2 por construcción»: **error de categoría**. React con `memo` por celda y `useSyncExternalStore` actualiza la misma celda; la diferencia por toque son microsegundos frente a 200 ms de INP. La ventaja de Svelte es de **arranque**, no de re-render.
- «Las recetas de Workbox son las que causan el bug de R5»: **falso**. Workbox `generateSW` trae `skipWaiting` `@default false`; vite-plugin-pwa `registerType` `@default 'prompt'`; la clase `Serwist` inicializa `skipWaiting = false`. Solo el **ejemplo** de `@serwist/next` trae `true, true`, y cambiarlo son dos claves.

### 2.3 Por qué no elijo (a) ni (b)

**(b) mantener Next** es defendible y sería lo cómodo. Exige dos cosas: reescribir el presupuesto de bytes hacia arriba (`/` ≤ 145 KB gzip, landing ≤ 140 KB gzip) y resolver el JSON-LD sacándolo de todo `Suspense` con una compuerta de CI que haga `curl -A GPTBot`. Lo segundo funciona —**y hay que hacerlo gane quien gane**—. Lo primero significa aceptar que las **22 URL que traen el tráfico**, que son primeras visitas por búsqueda en un teléfono de gama media con red irregular, envían 3,5 veces más JavaScript del que envía la alternativa, y que la válvula escrita en D-F1 para cuando el presupuesto falle **no existe**. Con LCP < 2,5 s como puerta de CI y ~100 KB gzip de diferencia (≈350 KB sin comprimir) que hay que analizar y ejecutar antes del primer toque, eso son 0,4-0,6 s de la primera visita en un Galaxy A24. Se gana en azúcar de ecosistema (2-3 días) y en utillaje de agentes; se pierde en las dos cosas de las que vive el producto. **No compensa.**

**(a) adoptar SvelteKit hoy con las 22 condiciones** es lo que la evidencia sostiene, y es donde va a acabar esto. No lo elijo hoy por una razón sola: **hay un dato que nadie tiene y que decide si el mayor riesgo de la opción es teórico o real.** Es la tarea ciega de la cláusula 5 del juez de agentes: si un agente sin documentación fijada escribe API de SvelteKit 3 que **compila** y nuestra lista negra no lo detecta, la mitigación entera de SK3 es papel mojado y el riesgo alto se convierte en riesgo muy alto. Ese dato cuesta medio día y hoy no existe.

### 2.4 Decisión: **(c) prueba de 1,5 días con criterios corregidos y desempate escrito a favor de SvelteKit**

Y una precisión que cambia la naturaleza de la prueba: **no es una moneda al aire, es una verificación con carga de la prueba invertida.** La cuestión de los bytes **ya está resuelta por medición** y no depende del resultado del viernes; lo que la prueba verifica es que no hay una sorpresa en las tres cosas que sí podrían invertirla. Además, **el coste incremental es casi cero**: F-02 (esqueleto de `web/`) ya está en la agenda del lunes 7 y el esqueleto hay que construirlo en algo; lo que se arriesga es rehacerlo, no construirlo.

**Encaje con el calendario:** el jueves 10 se congelan **contratos** —certificado, esquema de caso, contrato de predicado, tipos de la API, C4-C9, tokens—, y **ninguno depende del framework**: son HTTP y `zod`. El estudio del motor lo dice explícitamente (§9.8: «nada de este documento depende de esa decisión»). Por tanto **la congelación del jueves 10 sigue intacta y no se toca**, y la decisión de framework se toma el viernes 11 sin bloquear nada.

#### Los siete criterios, escritos antes del dato

Los cuatro entregables de `frontend.md` §10, **recalibrados** con las condiciones 3 de rendimiento y C2 de SEO, más las tres métricas de agente de la cláusula 5.

| # | Qué se construye | **Verde** (medible el viernes 11) |
|:-:|---|---|
| **1a** | Tablero 6×6 en SvelteKit, estado por celda con runas, ciclo por toque y arrastre | **JS enviado por `/` ≤ 50 KB gzip**, sumando el gzip de cada `.js` que referencia el HTML de la ruta (método del apéndice A del juez de rendimiento: `next build` ya no imprime tamaños y Vite tampoco los da por ruta) |
| **1b** | Ídem | **INP p75 < 200 ms sobre 50 toques y un arrastre**, medido con `web-vitals` en Chrome con CPU a 4× y 4G lenta emulada. **La medición en Android real se aplaza a CF-1 (fin de S3) porque el dispositivo no está comprado**; se compra esta semana (Q-13, 150-200 €). «Tocar una celda actualiza un nodo» **no es criterio**: en React memoizado también |
| **2** | OG del caso del día con `satori` + `@resvg/resvg-js` **a pelo, sin envoltura de comunidad** | PNG correcto, **p50 en caliente < 150 ms y p99 en frío < 1 s** (no «300 ms en frío», que es una compuerta mal calibrada: el propio Vercel publica P99 en frío de ~0,99 s para este par); fuente subconjunto en el repositorio; **emoji prohibido en la plantilla**; cero campos de solución en la entrada verificado por un test que rompe el build; `X-Robots-Tag: noindex`; `s-maxage=31536000, immutable` |
| **3** | Service worker con la regla de R5 | Partida a medias → despliegue → recarga: tablero, cronómetro y ajustes **intactos**, verificado en Playwright. Sin `skipWaiting` en `install`; `SKIP_WAITING` solo tras `PARTIDA_INACTIVA`; **persistencia por acción** en IndexedDB versionado; precaché que conserva los activos con hash del despliegue anterior ≥24 h |
| **4** | Una landing P0 completa con vistazo, JSON-LD y prueba de bot | `curl -A "GPTBot"` sobre `/juegos-como-murdoku/online` devuelve **en el primer cuerpo de respuesta** enunciado, pistas, texto de FAQ y **exactamente un** bloque `application/ld+json` que valida; JS de la landing **≤ 40 KB gzip**; y una página sin isla con `csr = false` envía **0 KB**; Lighthouse móvil ≥ 90 |
| **5** | *(agente)* Iteraciones hasta verde por entregable | **≤ 3** en cada uno; el service worker puede llegar a 5 |
| **6** | *(agente)* Higiene de versión | Un fichero con `export let` o `$:` **falla el build**, demostrado con un test, con `runes: true` vía `vitePlugin.dynamicCompileOptions` excluyendo `node_modules` |
| **7** | *(agente)* **Tarea ciega** | Un agente **sin** `web/docs-vendor/` y con el MCP en modo «actualizado» escribe un `+page.server.ts` con `load` y `prerender` y un `+server.ts` que devuelve PNG. **Verde:** la lista negra de lint detecta cualquier identificador de SK3 (`$app/env`, `$app/manifest`, `$app/service-worker`, `refreshAll`, `trustedOrigins`, `src/params.ts`). **Rojo:** produce código SK3 que compila y nadie lo detecta |

#### Regla de decisión y desempate, escrita antes del dato

1. **Los siete en verde → SvelteKit.** Se registra D-F1-bis y **no se reabre**, ni en la semana 4 ni nunca: si el presupuesto de JS fallara más adelante, la respuesta es recortar islas, no cambiar de framework.
2. **Rojo en 1a, 4 o 7 → se vuelve a Next.js 16.3** con la arquitectura de `frontend.md` §8, `AGENTS.md` generado por `next dev`, el MCP `/_next/mcp`, la *skill* `next-cache-components-adoption` y las tres reglas de lint (prohibido `unstable_cache`, `revalidate` de segmento y `middleware.ts`). Son los tres criterios que sostienen la decisión: los bytes, el HTML que lee un bot y la deriva de versión.
3. **Rojo en 1b, 2, 3, 5 o 6 → NO revierte.** Se anota como deuda con dueño y fecha y se corrige en S2. Motivo escrito: el juez de rendimiento demostró que la OG, el service worker y el INP del 6×6 son **problemas de diseño idénticos en los dos frameworks**; revertir por ellos sería revertir por un motivo que Next no arregla.
4. **Empate, resultado ambiguo o criterio no medible → SvelteKit.** Motivo escrito antes del dato: **el suelo de 130 KB gzip de Next incumple por sí solo el presupuesto de `/` y hace imposible el de landing en las 22 URL que traen el tráfico, y ese hecho ya está medido y no depende de la prueba.** Con un empate, la carga de la prueba la tiene Next.
5. **Si la prueba no se puede completar el viernes 11** por falta de tiempo o de dispositivo, se ejecuta el lunes 14 con los criterios que no necesitan dispositivo y **la decisión no pasa del martes 15**: a partir de S2 arranca el sistema de componentes y el coste de cambiar sube de 1,5 días a una semana.
6. **En los dos casos se han perdido 1,5 días**, no una semana, porque CF-0 es una compuerta de **contratos** y ninguno de ellos depende del framework.

#### Las 22 condiciones consolidadas (se aplican si gana SvelteKit)

Siete del juez de agentes (**A**), ocho del de rendimiento (**P**), siete del de SEO y hosting (**S**). Cuatro parejas se solapan y se ejecutan una sola vez; se marca cuál.

| # | Condición | Semana | Dónde |
|:-:|---|:-:|---|
| **A1** | Esqueleto ya SK3-compatible donde cuesta cero: `sv create` ≥0.17 con `#lib` y extensiones en los imports; `@sveltejs/kit@2.70.x`, `svelte@5.57.x`, `vite@8` con versión **exacta**; Renovate en «solo parches»; `runes: true` vía `dynamicCompileOptions` excluyendo `node_modules`; `svelte-check` y `eslint-plugin-svelte` como puertas desde el primer commit | **S1** | F-02, F-05 |
| **A2** | Superficies sensibles a SK3 **detrás de un solo fichero cada una**: un módulo importa `$service-worker`; un helper envuelve `pushState/replaceState/goto/invalidateAll`; un módulo lee `$env/*`; `$app/stores` prohibido por lint; un helper propio para `error()`. `grep` en CI devuelve cero fuera de sus ficheros | **S1-S2** | F-02, F-05 |
| **A3** | Documentación **fijada, no «actualizada»**: instantánea de `llms.txt` de SvelteKit 2.70 y Svelte 5.57 en `web/docs-vendor/`, citada en `web/CLAUDE.md` como única fuente; `svelte-autofixer --svelte-version 5` permitido; **`get-documentation` del MCP oficial desactivado el día que SK3 sea estable**; lista negra de identificadores SK3 en lint *(se solapa con P6 y S5)* | **S1** | web/CLAUDE.md |
| **A4** | **Decisión de edge, ahora:** `/` se resuelve en Node en Vercel (`adapter-vercel`, runtime `nodejs22.x`), `handle` lee `x-vercel-ip-timezone` y **reescribe a `/_caso/[n]`**; caché **por URL**, nunca por cabecera. Se retira el argumento del borde *(se solapa con P5)* | **S1** | D-012, F-02 |
| **A5** | La prueba de 1,5 días **mide al agente**, no solo al tablero: criterios 5, 6 y 7 de §2.4 | **S1** | web/README.md |
| **A6** | Ecosistema con puerta y sin dependencias de más: las siete primitivas de F-07 en Bits UI 2.19 pasan axe y teclado en S2, y si una falla **se escribe a mano**; **Paraglide fuera** (F-53 sigue en ficheros de mensajes propios); tests con `vitest-browser-svelte`, no jsdom; **modelo mínimo clase Sonnet para ficheros `.svelte`, nunca Haiku** | **S1-S2** | F-05, F-07 |
| **A7** | Calendario de SK3 escrito antes de que salga: **no se migra antes del día L**, ocurra lo que ocurra; 1-2 días en S11-S12 con `sv migrate sveltekit-3 --tasks all`; si SK2 pierde parches de seguridad antes de S11, se adelanta a la primera semana sin ruta crítica y **se avisa al fundador**, no se decide en caliente | S11-S12 | roadmap |
| **P1** | Corregir las cifras **antes** de registrar: React 60,4 KB gzip (no 40); Svelte ~9,6 KB hidratado (no 1,6); suelo de Next 130-133 KB gzip / 109-114 brotli (no «70 KB»); SvelteKit 29,6 KB y 0 con `csr=false` (no 18); 22 de 36 y **27 de 41 con Expediente**; **siete** de diez oportunidades, no diez | **S1** | D-012 |
| **P2** | **Reescribir el presupuesto de `plan-frontend.md` §7 con suelos medidos:** `/` ≤ **60 KB gzip**; landing con vistazo ≤ **40 KB gzip**; las 14 páginas sin isla con `csr = false` y **0 KB como prueba de CI**; HTML de `/` ≤ 45 KB se mantiene. La puerta suma el gzip de los ficheros que referencia el HTML de cada ruta | **S1** | F-05, F-50 |
| **P3** | La prueba 1 **se mide, no se observa** (criterios 1a y 1b de §2.4) | **S1** | §2.4 |
| **P4** | Service worker con la regla R5 **como en la doc de SvelteKit** (sin `skipWaiting` en `install`), persistencia por acción, precaché del despliegue anterior ≥24 h; si se opta por Serwist, `skipWaiting: false` y `clientsClaim: false` **explícitos, contra su ejemplo** | S6 | F-45 |
| **P5** | Decidir el CDN antes de diseñar R4 y **diseñarlo sin la palabra «edge»** *(= A4)* | **S1** | D-012 |
| **P6** | Fijar las versiones actuales, no las del estudio *(= A3)* | **S1** | F-02 |
| **P7** | Dejar por escrito que **R2 y R5 siguen siendo riesgos de diseño**, no propiedades del framework: la recomendación se acepta por bytes y por simplicidad, no por «resuelto por construcción» | **S1** | D-012 |
| **P8** | Safari: la caducidad de siete días de uso borra **también el registro del service worker** y el caso precacheado; la instalación en pantalla de inicio es **la única exención documentada**. Vale igual con cualquier framework y el plan tiene que decirlo | S6 | R1, F-46 |
| **S1c** | **Prohibido el `isr` de `adapter-vercel`.** Archivo, meses y `/erratas` con `s-maxage` + `stale-while-revalidate`, que es estándar y portable y además evita la facturación separada de ISR. **No hay revalidación por etiqueta en SvelteKit:** la publicación de una errata dispara purga **por lista explícita de URL** desde el cron de backend | S3-S5 | frontend §6.1, B-36 |
| **S2c** | Compuerta 2 recalibrada *(incorporada al criterio 2 de §2.4)*; OG del archivo **prerenderizadas en el build** con `entries()` para que el camino en frío se recorra una vez por caso, no una por compartición | **S1** + S6 | §2.4, F-41 |
| **S3c** | **Compuerta nueva de bots en CI** que Next también habría necesitado: `curl -A "GPTBot"` sobre `/`, `/juegos-como-murdoku/online`, `/juegos-como-murdoku/gratis` y `/como-jugar` en cada despliegue. **Rompe el build si falla** | S6 | CF-3, CF-5 |
| **S4c** | **Hosting en Vercel hasta después del día L**, con el motivo escrito; **alerta permanente** —no comprobación de una vez— si `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Bingbot` o `Applebot` reciben un 403 | **S1** (comprobación) + S6 (alerta) | B-29, roadmap §8 viernes 11 |
| **S5c** | Versiones exactas y documentación congelada; nada de migrar antes del día L *(= A3, A7)* | **S1** | web/README.md |
| **S6c** | **Sitemaps a mano, sin paquete de terceros**: un `+server.ts` por sitemap, prerenderizado en el build de las 00:00, alimentado por **la misma consulta que `/archivo`** y filtrado por la regla anti-contenido-fino; test que compare el número de URL del sitemap con el de casos con ficha completa | S6 | F-42, B-36 |
| **S7c** | El widget para medios se construye **primero como iframe** (`/embed/[fecha]`, `noindex`, sin cookies, sin seguimiento). El IIFE solo si un medio rechaza el iframe, y entonces **como paquete aparte en modo biblioteca de Vite**, nunca activando `customElement` en la aplicación | Fase 3 | catálogo `/para-medios` |

---

## 3. Alternativas evaluadas y descartadas

Una línea por descarte. Ninguna se reabre antes del mes 6 salvo disparador escrito.

### 3.1 Framework de presentación

| Opción | Nota | Por qué no |
|---|---:|---|
| **Astro 6 + islas Svelte** | 7,75 | Es la mejor del estudio para las 30 páginas de contenido y la peor para el juego: en un modelo multipágina cada navegación destruye la isla, así que el cronómetro, el historial y la partida obligan a meter una SPA dentro del sitio → **dos modelos mentales en un repositorio** |
| **Nuxt 4** | 7,55 | Técnicamente excelente y la mejor en portabilidad, pero **mete Vue en un proyecto donde todo lo demás es TypeScript liso** y no compra nada que SvelteKit no dé más barato en rendimiento y simplicidad |
| **SolidStart 2** | 6,49 | Empata con SvelteKit en el criterio de más peso y pierde en todos los demás; y **sus fallos de reactividad son silenciosos**, que es lo peor que le puede pasar a código escrito por un agente |
| **React Router 7 / Remix** | 6,14 | Pierde la ventaja de RSC sin ganar la ligereza de un compilador, y **el corpus es el más ambiguo del conjunto**: Remix v1, v2, RR6, RR7 declarativo, RR7 de datos, RR7 framework y Remix 3 —que ya no es React— con nombres solapados |
| **Vite + React SPA prerenderizado** | 6,10 | No puede servir `/` resuelta por número de caso, ni el archivo que crece a diario, ni `/r/[id]` en servidor, sin dejar de ser lo que es |
| **Qwik City 2** | 4,72 | **672 sitios detectados en julio de 2026**, dos service workers compitiendo, y una primera pulsación que descarga un fragmento por la red en un producto cuya condición declarada es red irregular |

### 3.2 Backend, base de datos y autenticación

| Opción | Nota | Por qué no |
|---|---:|---|
| **Postgres autoalojado en Hetzner + Coolify** | *398* | Gana la comparativa de coste puro y **queda fuera por la regla «sin guardias»**: parcheado, copias, restauración y respuesta a incidentes pasarían al fundador; además Hetzner ha hecho **cuatro acciones de precio en 2026**, con +113-176 % en CPX/CCX el 15 de junio |
| **PocketBase autoalojado** | *395* | Mismo problema de guardias que Hetzner **sin la ventaja de Postgres**: un binario, SQLite, sin réplica, copias y actualizaciones a mano |
| **Neon + Drizzle + Better Auth** | 373 | El mejor plan de salida del estudio (Postgres puro, sin capa propietaria) y **6-10 días de agente** para construir magic link, sesión anónima, ascenso, límites de alta, cron y almacenamiento —que en Supabase es uno—, con la seguridad de la autenticación pasando a ser nuestra |
| **Cloudflare D1 + Durable Objects** | 351 | Lo más barato y lo más rápido desde LatAm, pero **no hay RLS**, no hay auth anónima con ascenso, y D1 es SQLite: la racha como función SQL pura sobre tres tablas con ventanas habría que reescribirla entera en TypeScript |
| **PlanetScale Postgres** | 313 | No aporta nada que Supabase no tenga y cuesta más a 50.000 |
| **Appwrite Cloud** | 310 | Producto razonable, corpus pequeño y modelo de permisos por documento más débil que RLS para nuestro caso |
| **Convex** | 252 | **Se descarta por Europa, no por producto:** las regiones europeas existen pero el precio es 1,3× el de EE. UU. y **el uso incluido de Starter y Pro no se aplica a los despliegues europeos**. En la UE es un producto distinto y peor del que anuncia |
| **Firebase / Firestore** | *230* | **Fuera por la regla dura de residencia: Firebase Authentication no tiene opción de residencia en la UE**, y la autenticación es el dato de identidad de todos nuestros jugadores |
| **Clerk como capa de auth** | — | 0,02 $/MAU sobre 50.000: con «cuenta anónima desde el primer toque», a 200.000 usuarios son ~3.000 $/mes **solo de autenticación**, treinta veces el presupuesto entero |

### 3.3 Hosting

| Opción | Nota | Por qué no |
|---|---:|---|
| **Cloudflare Workers / Pages** | **327** (gana por puntos) | **Gana la tabla y no se elige**, y hay que decirlo en voz alta: cambia 15 $/mes por riesgo de calendario en la semana 1, **bloquea bots de IA de Entrenamiento y Agente por defecto desde el 15/9/2026** (justo el canal GEO), SvelteKit pierde ISR allí, y la OG hay que reescribirla a `resvg-wasm` porque `@resvg/resvg-js` es un binding nativo imposible en Workers. **Es el destino de la salida, no el punto de partida** |
| **VPS Hetzner + Coolify** | *321* | Fuera por la regla «sin guardias» y por las cuatro subidas de precio de 2026 |
| **Fly.io** | 283 | Empate técnico con Vercel; gana en precio y en no ser una caja negra, pierde en CDN, en corpus para agentes y en regeneración incremental sin configurar. Su historial de 2026 traza a los mismos dos sistemas (Consul/Corrosion) |
| **Railway / Render** | 265 | Son **las salidas honestas** si algún día hay que dejar Vercel sin ir a Cloudflare: contenedor, base al lado, precio previsible. No aportan nada hoy |
| **Netlify** | 245 | Modelo de créditos desde finales de 2025, opaco para nuestro perfil (poca transferencia, muchas peticiones pequeñas), y un cambio de conversión de créditos reprecia la plataforma de golpe. **Descartado como plataforma y como plan de salida** |
| **Plan Hobby de Vercel** | — | **Sus condiciones prohíben el uso comercial** y el catálogo prevé anuncios, packs y suscripción. Los 20 $/mes de Pro son coste fijo desde antes del primer usuario |

### 3.4 Correo

| Opción | Nota | Por qué no |
|---|---:|---|
| **Amazon SES** | **328** (gana por puntos) | **Gana la tabla y se aplaza**, no se descarta: exige reputación propia, gestión de rebotes por SNS, lista de supresión y salida del *sandbox*, y el criterio de entregabilidad ≥95 % de F17 hay que volver a medirlo antes de cortar Resend. **Entra con disparador**, no en el día 1 |
| **Brevo** | 277 | **El único con sede y datos íntegramente en la UE** (Francia): es la salida si `experto-legal` rechaza la transferencia de Resend. A cambio, peor API y ~74 $ por 100.000 correos |
| **Postmark** | 242 | ~85 $ por 50.000 y ~600 $ a 200.000: fuera de discusión para un correo diario masivo |
| **Loops** | 207 | Cobra **por contacto** (49 $/mes de 1.000 a 5.000 suscriptores): a 12.000 suscriptores es peor que Resend |

### 3.5 Analítica

| Opción | Nota | Por qué no |
|---|---:|---|
| **Umami autoalojado** | *368* | Gana por coste y queda fuera por la regla «sin guardias»; y su análisis de producto es pobre para «en qué paso se atasca el jugador» |
| **Plausible (nube UE)** | 313 | Europeo, sin cookies y honesto, pero **mide páginas y objetivos, no embudos ni cohortes**: no sirve para el punto de abandono por paso, que es el dato que decide si un caso está mal calibrado |
| **GA4** | 262 | Pierde el criterio de residencia —declarado contrario al RGPD por varias autoridades europeas— **justo en un producto cuya portada promete honestidad**, y contamina la relación con `experto-legal` sin aportar nada que PostHog no dé |
| **Mixpanel** | 263 | 0,28 $ por 1.000 eventos tras el primer millón: a 3,6 M serían ~730 $/mes |

### 3.6 Pagos (fase 2)

| Opción | Comisión sobre 2,99 € | Por qué no |
|---|---:|---|
| **Paddle** | **21,7 %** | Mismo porcentaje que Stripe Managed Payments con **el doble de comisión fija**; nace incumpliendo la hipótesis H6 de D-008 (>18 % tres meses seguidos) desde la primera factura; **exige contrato a medida para productos por debajo de 10 $**, y el nuestro es 2,99 €. **Queda como suplente**, no como recomendación |
| **Lemon Squeezy** | 21,4 % | Sigue operando y **su equipo está construyendo Stripe Managed Payments**, con ruta de migración pública desde enero de 2026: sirve, pero no se elige hoy para cinco años. Sí puede servir para `PDF-CLASICO`, y eso se decide en B-44, no en B-41 |
| **Polar.sh** | 21,4 % | **Subió a 5 % + 0,50 $ el 27 de mayo de 2026**, perdiendo su único argumento |
| **Gumroad** | ~25 % | Solo para el experimento H4 de **precio libre**, que es el único caso donde es el único que lo hace nativamente: ~11 € de comisión sobre un experimento de 45 €, irrelevante frente al valor del dato |
| **Stripe directo + Stripe Tax** | 10,4 % | Es lo más barato y **el IVA de la UE pasa a ser nuestro**: alta en OSS y declaración trimestral del recurso más escaso. Se activa con el umbral ya escrito: **2.700 €/mes brutos tres meses seguidos** |

### 3.7 Lenguaje del motor

| Opción | Nota | Por qué no |
|---|---:|---|
| **Rust → WASM** | 7,20 | Es **2,1× más rápido** en la única etapa que importa, medido, y ese 2,1× se aplica a un presupuesto que ya sobra por 30×. No comparte tipos con el frontend, obliga a serializar en la frontera donde se llama `cells(pista, estado)` en cada toque, y suma 15-25 KB de módulo frente a los 4-8 KB del TS plano. **Disparador T1 escrito** |
| **Go** | 6,10 | Queda en medio y **no resuelve ningún problema del proyecto**: no comparte código con la web, no corre en el navegador y no es más rápido que Rust. Es la opción sin argumento |
| **Python** | 5,29 | **36× más lento que TypeScript justo en la etapa que domina la Compuerta 0.** Un lote que en TS tarda 2-8 minutos tardaría entre una y cinco horas, y habría que reimplementar el DSL y la escalera enteros para llegar a un resultado peor |
| **Híbrido TS + Python** «para investigar tasas» | 6,85 | Las medidas de τ, δ y β **son generación pura, no análisis de datos**. Y dos implementaciones del mismo generador **divergen el día que alguien arregla un caso límite en una y no en la otra**, y «misma semilla, mismo caso» deja de ser cierto sin que ningún test lo diga. El motor emite CSV y el análisis va donde quiera |
| **Monolito Rails / Django / Laravel** | 3,31 | El motor es TypeScript y hay que ejecutarlo en cada Comprobar, Sabueso, acusación y menú: eso es **un proceso Node al lado** (una pieza más y un fallo más) o reimplementar el solver, **que está prohibido porque dos solvers son dos verdades sobre «solución única»** |

---

## 4. Correcciones que el estudio impone a los planes

Treinta y siete correcciones. **Las trece marcadas con ⏰ tienen fecha en la semana 1**, casi todas porque tocan algo que se congela el jueves 10 o algo irreversible.

### 4.1 Las trece de la semana 1

| # | Corrección | Id | Fecha | Qué evita |
|:-:|---|---|---|---|
| **⏰1** | **Cuenta anónima perezosa**: la fila de `auth.users` se crea en la **primera interacción con el tablero**, no al cargar la página. Test: cargar `/` no crea ninguna fila | B-04, B-11, C1/C2 | **jueves 10** (se congela C1/C2) | **325 $/mes a 200.000 usuarios**, captcha a todo el tráfico de las landings, y un vector de abuso que infla la factura. Cuesta 0,5 días ahora y 2,5 después |
| **⏰2** | **Supabase en París (`eu-west-3`)**, producción y staging | B-02 | **S1** | Un proyecto no cambia de región: se migra. 10-15 ms peores desde Madrid **para siempre** |
| **⏰3** | **Organización de Sentry creada en `de.sentry.io`** | B-02 | **S1** | La región se elige al crear y **es irreversible**: crearla por inercia en `sentry.io` pierde el argumento de residencia para siempre |
| **⏰4** | **C7 baja de 6 a 2,8 eventos por sesión**: 2 al 100 % (`partida_iniciada`, `partida_cerrada`) + 4 sobre muestra determinista del 20 %, **ningún evento identificado salvo conversión**, y todos los agregados en Postgres | C7, A-01, B-25 | **jueves 10** (se congela C7) | 105 $/mes a 50.000 usuarios y 475 $ a 200.000; y cambiar la taxonomía después **invalida la serie histórica** |
| **⏰5** | **`contratos/` como paquete de primer nivel**, no en `web/src/contratos/`. Corrige el contrato C3 | C3, M-01, F-02 | **jueves 10** | Si los contratos viven en `web/`, **`engine/` depende de `web/`** y la dirección de las dependencias queda invertida. Hoy cuesta cambiar una ruta; en S3, un refactor en tres áreas |
| **⏰6** | **CAP se parte en dos:** `CAP-C` (cliente, `\|M₀\| ≤ 150.000`) y `CAP-S` (servidor, banco ≤256 MB). La doble franja 6×6 son **518.400 modelos**: cabe en servidor (130 MB, 17 s) y **no cabe en cliente** | M-01, `disenador-puzzles` | **miércoles 9** | Una contradicción dentro del mismo documento aprobado, con CAP como invariante del validador |
| **⏰7** | **Presupuesto de bytes reescrito con suelos medidos**: `/` ≤ 60 KB gzip, landing ≤ 40 KB gzip, las 14 sin isla a **0 KB con `csr = false`** como prueba de CI, HTML de `/` ≤ 45 KB. La puerta suma el gzip de los ficheros referenciados por el HTML de cada ruta, porque **`next build` ya no imprime tamaños y Vite tampoco** | §7 de plan-frontend, F-05, F-50 | **S1** | Un presupuesto que está **por debajo del suelo** del framework y una válvula de escape que no existe |
| **⏰8** | **Tope de gasto en Vercel**: alerta a 60 $, **tope duro a 200 $**; WAF con reglas de bots; funciones fijadas en `cdg1` en `vercel.json` | F-02, F-05, B-29 | **S1** | Las facturas documentadas de 1.477 $, 3.200 $ y 23.000 $ por un rastreador o un ataque; y que las funciones corran en `iad1` por defecto |
| **⏰9** | **Comprobación de 403 a bots de IA** el viernes 11, convertida después en **alerta permanente** sobre ocho agentes de usuario | roadmap §8, B-29, G-04 | **viernes 11** + S6 | «El fallo silencioso más caro del plan»: si no se mira ahora, se descubre a los tres meses |
| **⏰10** | **Versiones exactas y documentación fijada** del framework elegido, con lista negra de identificadores de la versión siguiente en lint | F-02, web/CLAUDE.md | **S1** | Que el agente que arregle un bug en diciembre lea la documentación «actualizada» de SK3 y la escriba en un proyecto SK2 |
| **⏰11** | **Ramas de vista previa de Supabase efímeras**, destruidas al fusionar; ninguna viva más de 24 h | B-05 | **S1-S2** | Una rama viva cuesta ~9,7 $/mes y **el crédito de cómputo de 10 $ no la cubre**: cuatro olvidadas son el 40 % del presupuesto |
| **⏰12** | **DNS en Cloudflare en gris** (registro y DNS, sin proxy) desde el día 1 | B-02 | **S1** | Que pasar a proxy naranja el día que haya abuso o factura sea una migración de DNS con TTL en vez de un clic |
| **⏰13** | **Presupuesto actualizado y techo por usuario**: se sustituye «<100 €/mes hasta 50.000 usuarios» por **0,006 € por usuario activo mensual** con suelo de 130 €/mes hasta 22.000 usuarios | §10 de plan-backend, N-01 | **S1** | Prometer un techo que solo se cumple con la combinación Cloudflare y sin contar IA ni observabilidad |

### 4.2 Las veinticuatro restantes, con semana

| # | Corrección | Id | Semana |
|:-:|---|---|:-:|
| 14 | **`pg_cron` solo encola**; una Edge Function consume la cola y envía por lotes de 100 con idempotencia por `(suscriptor, fecha_civil)`. Ningún trabajo de `pg_cron` por encima de un minuto (el límite recomendado son 8 concurrentes y 10 min) | B-28 | S4-S5 |
| 15 | **Revalidación por lista explícita de URL, no por etiqueta**: SvelteKit no tiene `revalidateTag`. Al publicar una errata se purgan `/erratas`, `/archivo`, `/archivo/AAAA-MM`, `/caso/AAAA-MM-DD` y los cuatro sitemaps | frontend §6.1, B-36 | S3-S5 |
| 16 | **Prohibido el `isr` de `adapter-vercel`**: `s-maxage` + `stale-while-revalidate`, que es estándar, portable y evita la facturación separada de ISR (0,40 $/M lecturas, 4 $/M escrituras) | frontend §6.1 | S3 |
| 17 | **Service worker con `skipWaiting` solo tras `PARTIDA_INACTIVA`**, persistencia por acción en IndexedDB versionado, precaché del despliegue anterior ≥24 h. Y **se corrige la afirmación falsa**: los valores por defecto de Workbox y vite-plugin-pwa **no** causan el bug; solo el ejemplo de `@serwist/next` | F-45 | S6 |
| 18 | **Compuerta de bots en CI** (`curl -A GPTBot` sobre cuatro URL, un solo JSON-LD que valida, rompe el build) | CF-3, CF-5 | S6 |
| 19 | **Sitemaps a mano**, alimentados por la misma consulta que `/archivo`, con test de recuento contra los casos con ficha completa | F-42, B-36 | S6 |
| 20 | **OG del archivo prerenderizadas en el build** con `entries()`; emoji prohibido en la plantilla; fuente subconjunto en el repositorio | F-41 | S6 |
| 21 | **Safari:** la caducidad de siete días de uso borra también el registro del SW y el caso precacheado; **la instalación en pantalla de inicio es la única exención documentada** | R1, F-46 | S6 |
| 22 | **Instrumentar en la beta peticiones de edge por sesión y eventos por sesión** como métricas de coste, no solo de producto (hipótesis HT1: >30 por sesión dispara la dieta antes del día L) | B-25, B-29 | **S7** |
| 23 | **Salida ensayada en CI**: job mensual de construcción `adapter-node`/Docker y job trimestral hacia Cloudflare, no bloqueantes, con `docs/stack/salida.md` | F-05, B-38 | S2 |
| 24 | **Disparador de correo escrito**: a **6.000 suscriptores o 100.000 correos/mes**, el boletín pasa a Amazon SES en `eu-west-1`; el transaccional se queda en Resend | B-28 | disparador |
| 25 | **Pasarela: se reabre B-41** con recomendación de Stripe Managed Payments y Paddle como suplente; se abre la cuenta en S11 aunque no se use hasta el mes 4-5 | B-41 | S11 |
| 26 | **Optimismo de interfaz** en las cuatro acciones de servidor: con la base en París, un jugador en Buenos Aires paga 230-280 ms solo de red y el presupuesto de 300 ms de R3 **no se cumple en LatAm**. El tablero responde localmente y la confirmación llega después, sin animación bloqueante | F-24, D-23 | antes del día L |
| 27 | **Cuarta medida en la Compuerta 0-A**: tiempo de cálculo de `ofrecible(q, E, p)` en el **peor** residuo alcanzable, con umbral de **300 ms**. Un menú vivo correcto pero lento es tan inservible como uno con τ baja | M-21 | antes de S5 |
| 28 | **Emparejamiento por gramática ≥90 % como umbral de la Compuerta G2**, no como aspiración: es lo que separa «probamos el significado de las pistas» de «lo contrastamos con una heurística» | plan-contenido G2 | antes de C-04 (12 oct) |
| 29 | **Las plantillas del guion tienen que ser emparejables por gramática**, con huecos marcados y envoltorio delimitado | C-04, `guionista-misterio` | antes del 12 oct |
| 30 | **«Hash con sal es suficiente» se sustituye** por «hash con sal para que el cliente verifique su acusación sin conexión; verificación en servidor para todo lo que puntúa». Con `\|M₀\| = 576` hay 576 hashes que probar: es **integridad, no confidencialidad** | motor-viabilidad-jugabilidad §V19, plan-motor §7 | S2 |
| 31 | **La solución no se guarda en `content/`: se deriva** de `(semilla, motor_version, plan del tablero)`. Lo que no se guarda no se filtra, y hace publicable el repositorio | M-09, plan-contenido | S2 |
| 32 | **La purga de datos personales excluye explícitamente `casos`**: es todo el activo de `LIBRO-LICENCIA` y son 18 MB al año | B-27, C9 | S5 |
| 33 | **Cadencia partida en tres**: generación determinista nocturna (gratis), **redacción semanal por tirón** (cara), publicación diaria de lo ya firmado. Un cron diario que redacte 20 candidatos por hueco quema tokens en contenido que nadie va a firmar | plan-motor §7, B-19 | S3 |
| 34 | **`generar.yml` (determinista, sin secretos) y `redactar.yml` (con secreto, escritura acotada) separados**: es lo que hace comprobable la propiedad «misma semilla, mismo caso» | motor CI | S2 |
| 35 | **Zod como fuente en `contratos/`, JSON Schema emitido y commiteado**, con `git diff --exit-code` en CI. **Zod no entra en el presupuesto de bytes del tablero**: el cliente no valida en ejecución la respuesta de su propio servidor | M-01, F-05 | S1-S2 |
| 36 | **Sin Turborepo** hasta que CI pase de 10 minutos en el camino crítico dos semanas seguidas | monorepo | disparador |
| 37 | **D-F1 dice «Next.js 15» y el estudio compara Next 16.3**: la entrada del plan está desfasada una versión mayor, con otro modelo de caché. Se corrige al registrar D-F1-bis | plan-frontend §1 | **viernes 11** |

---

## 5. Coste del stack por escenario

### 5.1 Hipótesis de planificación (si cambian, cambian las tablas)

12 sesiones por usuario y mes (perfil alto, para que la sorpresa sea a la baja) · **2,8 eventos de analítica por sesión** (C7 corregido) · 15 peticiones de edge por sesión tras la dieta (25 sin ella; **no está medido**) · **6 % de suscriptores** al correo diario, que es el objetivo del catálogo (3.000 con ~50.000 usuarios), con 10 % como escenario de estrés · 1 $ = 0,90-0,92 € · **cuenta anónima perezosa** aplicada (45 % de los visitantes toca el tablero).

### 5.2 Coste mensual

| Partida | **Día 1** (1.000-5.000) | **10.000** | **50.000** | **200.000** |
|---|---:|---:|---:|---:|
| Supabase Pro (BD, auth, cron, almacenamiento) | 25 $ | 30 $ | 30-31 $ | 78-100 $ |
| Vercel Pro, 1 asiento, `cdg1` | 20 $ | 20 $ | 20-30 $ | 65-115 $ |
| Correo (Resend → SES con el disparador) | 0-20 $ | 20 $ | 35-90 $ ⚠ | 36 $ (SES) |
| PostHog Cloud EU (2,8 ev./sesión) | 0 $ | 0 $ | 34 $ | 212 $ |
| Sentry región UE + Better Stack | 0 $ | 0 $ | 0-26 $ | 40-46 $ |
| Dominios | 4 $ | 4 $ | 4 $ | 4 $ |
| **Infraestructura** | **49-69 $** | **74 $** | **123-215 $** | **435-513 $** |
| **En euros** | **45-63 €** | **68 €** | **113-198 €** | **400-472 €** |
| **IA de redacción** (Opus 5 + Sonnet 5, por lotes) | 8-16 € | 16 € | 16-20 € | 55-60 € |
| **TOTAL €/mes** | **55-85 €** | **84 €** | **130-215 €** | **455-530 €** |
| **€ por usuario activo mensual** | — | 0,0084 € | **0,0026-0,0043 €** | **0,0023-0,0027 €** |

⚠ **La escalera de Resend por encima de 100.000 correos no está publicada** y es la mayor incertidumbre de la tabla: el rango 35-90 $ a 50.000 usuarios sale de dos fuentes secundarias que no coinciden. No mueve ninguna decisión —solo la fecha del disparador de SES—, pero hay que confirmarlo en el panel de facturación.

**Tres lecturas.**

1. **El compromiso «<100 €/mes hasta 50.000 usuarios» de `plan-backend.md` §10 está muerto y hay que sustituirlo, no maquillarlo.** Solo se cumple con la combinación Cloudflare (100 €) y solo contando infraestructura sin IA ni observabilidad. Las dos causas no son un proveedor caro: son **una hipótesis de uso que se dobló** (de 6 a 12 sesiones por usuario y mes) y **dos partidas que nunca estuvieron en el presupuesto** (Sentry y la IA). Es la misma clase de cuenta incompleta que corrigió D-008.
2. **A partir de 50.000, el 70-80 % del coste es correo y analítica en cualquier arquitectura.** La diferencia entre el hosting más barato y el más caro es 150-470 $/mes; la diferencia entre Resend y SES es 560 $/mes a 200.000. **Cambiar de proveedor de correo vale más que cambiar de hosting**, y eso invierte el orden de prioridades que uno esperaría.
3. **El coste de la IA es irrelevante y conviene decirlo con números** para que nadie lo use como excusa para bajar la calidad: con 20K de entrada y 8K de salida por caso, Opus 5 son **0,30 $ por caso, 0,15 $ por lotes**, y **365 casos al año cuestan entre 55 y 110 $**. Con la arquitectura del pipeline —que redacta **un** candidato, no veinte— y el reparto Opus 5 / Sonnet 5, baja a **26-40 $ al año**. El cuello de botella no es el modelo: son **las 2 h/semana de firma humana** de D-011/R7.

### 5.3 Techo por usuario activo, escrito antes del dato

> **Techo: 0,006 € por usuario activo mensual** de infraestructura (todo el stack menos la IA de contenido), con **suelo absoluto de 130 €/mes hasta 22.000 usuarios**, que es donde mandan los costes fijos.
> **Alerta al 0,0045 €/usuario** o al 80 % del suelo.
> **La IA de contenido se presupuesta aparte**, con techo de **2 € por caso publicado** y **80 €/mes** (con Opus 5 estamos veinte veces por debajo).
> **Si el techo se cruza dos meses seguidos, se ejecuta la siguiente migración pendiente** por orden de ahorro por día de agente. **No se recorta producto.** Esa última frase es la única parte de la regla anterior que se conserva íntegra.

De dónde sale el 0,006: es el 11 % del ingreso bruto por usuario del escenario Base y deja el coste técnico por debajo del 12 % de la facturación en los cuatro escenarios. Con las correcciones aplicadas el coste real queda en 0,002-0,004 €/usuario: **el doble de holgura sobre el techo**.

### 5.4 Disparadores de migración, con fecha o condición

| # | Migración | Días de agente | Ahorro | **Disparador** |
|:-:|---|---:|---|---|
| **M1** | Cuenta anónima perezosa | **0,5** (2,5 después) | 0 → 146 € → 292 €/mes | **Fecha: jueves 10 de septiembre.** No espera al dato |
| **M2** | Dieta de analítica a 2,8 eventos | 1,5 | 37 → 111 → 148 €/mes | **Fecha: jueves 10 de septiembre** (se congela C7) |
| **M3** | PDF a Cloudflare R2 (egreso 0 $) | 0,5 | 2-15 €/mes | **Condición:** al construir `PDF-CLASICO` (B-44) |
| **M4** | Boletín diario a Amazon SES `eu-west-1` | 2,5 + 2 h del fundador | 93 → 250 → 340 €/mes | **Condición:** 6.000 suscriptores **o** 100.000 correos/mes **o** factura de correo >60 $. Adelantar si HT2 se refuta (suscripción >14 % en el mes 2) |
| **M5** | Dieta de peticiones de edge (consolidar chunks, precargar en el SW) | 2 | 5 → 32 → 43 €/mes | **Condición:** la beta mide >30 peticiones por sesión (HT1) |
| **M6** | Analítica autoalojada (PostHog CE o Umami) | 4 | 47 → 306 → 414 €/mes | **Condición:** >8 M eventos/mes (~110.000 usuarios) |
| **M7** | Hosting a Cloudflare Workers | 6-9 | 30 → 75 → 110 €/mes | **Condición:** factura de Vercel >150-200 $/mes **tres meses seguidos** o un incidente de facturación. **Y nunca antes del día L** |
| **M8** | Postgres autogestionado | 8-12 + guardias | 60 → 400 €/mes | **Nunca.** Rompe el compromiso de «sin guardias» |
| **T1** | Banco de máscaras a Rust→WASM | 3-5 | — | **Condición:** un preajuste por encima de 600.000 modelos entra en producción **y** `disenador-puzzles` sube CAP-S |
| **SK3** | Migración a SvelteKit 3 | 1-2 | — | **Condición:** SK3 estable **y** después del día L. Si SK2 pierde parches de seguridad antes de S11, se adelanta y se avisa |

**Punto de inflexión: 35.000-40.000 usuarios activos mensuales.** Por debajo, cada día de agente en infraestructura es un día que no se gasta en el producto y la ventana de mercado es más cara que cualquier factura. Por encima, los tres medidores sin tope crecen en línea recta. Coincide con dos umbrales ya escritos —los 30.000 que activan `ADS` y los 30.000 de PWA que condicionan `APP-NATIVA`—: **es el mismo mes del producto y hay que tratarlo como un solo hito de operaciones, no como tres.**

**La ruta M1-M5 completa son 7 días de agente y 2 horas del fundador, y devuelven 281 €/mes en el escenario Base, 539 € en el Bueno y 823 € en el Óptimo.** En el Bueno, siete días de agente devuelven 6.470 €/año.

---

## 6. Riesgos de proveedor y planes de salida

| Pieza | Riesgo | Qué nos ata de verdad | **Coste de salir** | Qué hacemos hoy para abaratarlo |
|---|---|---|---|---|
| **Supabase Auth** | **Medio. Es el único candado real del stack** | GoTrue: `auth.users` y la emisión de JWT | **5-8 días de agente**, y **los usuarios tienen que volver a entrar por magic link** | Export de `auth.users` en el volcado semanal de B-30; anónimo perezoso, que además saca a Auth del camino crítico de la primera partida |
| **Supabase (datos)** | Bajo | Nada: el esquema, las políticas RLS y las funciones son Postgres estándar | **2-4 días** con `pg_dump` | La decisión de arquitectura 1 **ya es una política de portabilidad**: el cliente nunca habla con PostgREST y todo pasa por rutas de servidor, así que cambiar de proveedor es cambiar una cadena de conexión |
| **Vercel** | **Bajo técnicamente, medio en precio.** Cuatro reprecios en dos años y medio: **el presupuesto tiene una vida útil de unos nueve meses** | Regeneración incremental, imágenes OG, análisis de despliegue | **3-6 días** (`adapter-node` en Docker) u **6-9 días** (OpenNext/Workers) | Ningún paquete `@vercel/*` en tiempo de ejecución; `VERCEL_*` solo en un módulo de adaptación; **salida ensayada mensualmente en CI** (corrección 23) |
| **Cloudflare** (destino de salida) | Medio | El adaptador y el caché en KV | 3-8 días de vuelta | **Caída global de 5 h 38 min el 18/11/2025** y 13 incidentes en 8 días en agosto de 2026. Prueba de humo trimestral; y **no se firma un SLA B2B con penalización por encima del que da el proveedor** |
| **PostHog** | Bajo | Los paneles y las definiciones de embudo, **no los datos** | **3-5 días** | Todos los KPI del panel del día 90 se calculan en Postgres: **si PostHog desaparece mañana, el negocio sigue midiéndose** |
| **Resend** | Muy bajo | Nada: es SMTP con plantillas | **1-2 días** | Plantillas en el repositorio, no en el panel; `List-Unsubscribe` implementada por nosotros |
| **Sentry** | Bajo | El SDK, que Better Stack acepta tal cual | **1 día** | **Crear la organización directamente en `de.sentry.io`**: la región se fija al crear y es irreversible |
| **Pasarela de pago** | **Alto. Es el riesgo grave del stack** | Los datos de tarjeta pertenecen al *merchant of record*, no a nosotros | **Cambiar de MoR con suscriptores activos cuesta entre el 20 % y el 40 % de la base**, porque hay que volver a pedir la tarjeta | **Es la razón principal de recomendar Stripe Managed Payments:** pasar de ahí a Stripe directo con alta en OSS —el movimiento que prevé el umbral de 2.700 €/mes— es un cambio **dentro de Stripe**, sin recobro y sin churn. Ninguna otra ruta del mercado tiene esa propiedad |
| **SvelteKit 2 → 3** | **Alto pero acotado** | `$service-worker` (eliminado), `$app/stores`, `error()`, `handleError`, `goto`, matchers, cookies | **1-2 días** con la cláusula A2 puesta; **una semana sin ella** | Cada superficie sensible detrás de **un solo fichero**, con `grep` en CI. Es exactamente lo que convierte la migración en mecánica |
| **Marco UE-EE. UU. (DPF)** | Baja en 12 meses | Todos los proveedores estadounidenses | 2-4 días (datos a un Postgres europeo) | Recurrido ante el TJUE (C-703/25 P, sin fecha de vista). Con datos en París y DPA con cláusulas contractuales tipo archivados en `docs/legal/`, la exposición real es papeleo. **Hetzner es la única opción sin transferencia, y está descartada por operación** |

**Contingencias escritas, para no improvisarlas:** si Supabase rompiera el presupuesto → Neon o un Postgres gestionado europeo + Better Auth, con el esquema intacto. Si Vercel lo hiciera → Cloudflare Workers o Railway. Si PostHog lo hiciera → Umami autoalojado para tráfico y Postgres para los KPI, aceptando perder embudos. **Ninguna de las tres rutas exige tocar el esquema de datos, y eso no es casualidad: es el resultado de la decisión de arquitectura 1.**

**Y una regla de negocio que sale del riesgo de proveedor:** Vercel Pro **no da SLA contractual** y Supabase Pro no da SLA con crédito (Team cuesta 599 $/mes). Cumplir un 99,9 % con penalización exigiría más de 800 $/mes, que **se comen dos contratos de `B2B-WIDGET`**. Por tanto `B2B-WIDGET` se vende con **SLA de publicación diaria**, no de disponibilidad, y solo `B2B-MARCABLANCA` podría financiar lo segundo.

---

## 7. Decisiones para el fundador

Seis. Cada una con recomendación, coste de no decidir y fecha.

| # | Decisión | **Recomendación** | Si no se decide | Fecha |
|:-:|---|---|---|---|
| **1** | **Framework.** Aprobar la opción (c): prueba de verificación de 1,5 días con los siete criterios de §2.4 y **desempate escrito a favor de SvelteKit** | **Sí.** La cuestión de los bytes ya está resuelta por medición y no depende de la prueba; lo que la prueba compra es el dato de deriva de versión que hoy no tiene nadie, y cuesta ~0 incremental porque el esqueleto hay que construirlo igual | El coste de cambiar pasa de 1,5 días a 25-35 días de agente más 15-20 h suyas en marzo | **viernes 11** |
| **2** | **El bloque irreversible de la semana 1**, en una sola firma: anónimo perezoso, Supabase en París, Sentry en `de.sentry.io`, C7 a 2,8 eventos, ramas efímeras, DNS en Cloudflare en gris, tope de gasto en Vercel | **Aprobar en bloque.** Son siete decisiones de **≈2 días de agente y cero calendario** cuyo coste se multiplica por cinco si se toman después, y tres de ellas son literalmente irreversibles | 325 $/mes de MAU, 65 €/mes de analítica, la región de Sentry perdida para siempre y una serie histórica que nace mal | **jueves 10** |
| **3** | **Dos correcciones a contratos que se congelan el jueves**: `contratos/` como paquete de primer nivel (fuera de `web/`) y **CAP partido en CAP-C/CAP-S** | **Aprobar.** La primera corrige una inversión de dependencias entre dos documentos aprobados; la segunda, una contradicción dentro del mismo documento (518.400 > 150.000) | Un refactor en tres áreas en S3, y un invariante del validador que no se puede comprobar | **jueves 10** |
| **4** | **Presupuesto y techo.** Sustituir «<100 €/mes hasta 50.000 usuarios» por **0,006 €/usuario activo** con suelo de 130 €/mes; presupuesto del día 1 de **55-85 €/mes** | **Aprobar.** No es un cambio de criterio: es la misma clase de cuenta incompleta que corrigió D-008. La parte que importaba —**se recorta analítica, no producto**— se conserva íntegra | Se sigue planificando contra un techo imposible y la desviación se descubre con la factura | **S1-S2** |
| **5** | **Pasarela.** Reabrir B-41 con **Stripe Managed Payments** como recomendación y Paddle como suplente; abrir la cuenta en S11 aunque no se use hasta el mes 4-5 | **Reabrir.** Paddle nace incumpliendo H6 de D-008 (21,7 % frente al umbral del 18 %) y **exige contrato a medida por debajo de 10 $**, que es nuestro caso. Hay que verificar tres cosas antes de cerrar: alta de vendedor español, punto de precio de 2,99 € y factura conforme para consumidor | Se elige un MoR con 21,7 % de comisión y salida con recobro de tarjetas (20-40 % de la base) | **S11** |
| **6** | **Modelo de IA.** **Opus 5** para redacción y paquete post-acusación; **Sonnet 5** para retraducción y puntuación; **API por lotes + caché de prefijo**; SDK de TypeScript con salidas estructuradas. **Haiku prohibido** en redacción y en ficheros `.svelte` | **Opus 5 donde se nota, Sonnet 5 donde no.** La calidad del caso es el producto y el coste total son **26-110 $ al año**; la retraducción es análisis con gramática cerrada, hace más llamadas y no necesita el modelo caro. Si el fundador prefiere uniformidad, Sonnet 5 para todo cuesta ~15 $/año y baja el listón donde más se ve | El pipeline no puede fijar `modelo_id` y la caché de prefijo —que cambia el consumo de entrada por un factor de cuatro— no se diseña | **S2** |

---

## 8. Lo que no se ha podido medir, dicho sin adornos

Este documento consolida ocho estudios y tres dictámenes, y **ninguno de ellos pudo abrir la documentación oficial de los proveedores que decide**. Conviene que quede escrito, porque la calidad de una decisión no es mayor que la de sus datos.

1. **Los dominios oficiales estaban bloqueados por el proxy durante toda la investigación:** `nextjs.org`, `svelte.dev`, `vercel.com`, `developers.cloudflare.com`, `webkit.org`, `v8.dev`, `react.dev`, `arxiv.org`, `npmjs.com`, `stateofjs.com`, `almanac.httparchive.org`, `fly.io`, `dev.to`. Lo oficial se ha leído **en su espejo de GitHub** (`vercel/next.js`, `sveltejs/kit` rama `version-3`, `sveltejs/svelte.dev`, `sveltejs/ai-tools`, `reactjs/react.dev`, `v8/v8.dev`, `HTTPArchive/almanac.httparchive.org`), que es el mismo texto fuente. **Lo que no tiene espejo —la documentación de `adapter-vercel`, `adapter-cloudflare`, el anuncio de la API de adaptadores de Next, los precios de Vercel, Supabase, Resend y PostHog— viene de fuentes secundarias y hay que verificarlo a mano antes de firmar nada.** Los cinco datos que mueven una decisión están marcados con ⚠ en `coste-y-riesgo.md` §10.
2. **Las mediciones de bytes las hizo un juez con npm en este contenedor** (Node 22.22.2, npm 10.9.7), construyendo cuatro proyectos reales y sumando gzip-9 y brotli-11 de cada `.js` referenciado por el HTML. Son la mejor evidencia del expediente y **siguen siendo una medición de laboratorio con proyectos vacíos**: el suelo es un suelo, no una previsión de lo que enviará la aplicación terminada.
3. **Nada se ha probado en un Android real.** No hay dispositivo: `coste-y-riesgo.md` lo presupuesta como gasto de una vez de 150-200 € (Q-13) y no está comprado. **Ni el INP del 6×6, ni la hidratación, ni el LCP con red irregular tienen una sola medición en el hardware que decide.** Por eso el criterio 1b de la prueba del viernes se mide con emulación y **la medición real se aplaza a CF-1**, y por eso el dispositivo hay que comprarlo esta semana.
4. **Ninguna de las hipótesis de uso está medida** —12 sesiones por usuario y mes, 25 peticiones de edge por sesión, 6 % de suscriptores, 700 KB de primera carga—. Es inevitable sin producto, pero significa que las tablas de §5 son **escenarios, no previsiones**. Las dos que más mueven la factura salen de la beta de S7 y este documento se revisa con ellas antes del día L.
5. **El motor sí está medido, y es lo único que lo está**: cuatro implementaciones del núcleo en TypeScript, Rust, Go y Python con **checksum idéntico**, reproducidas por el director de esta sesión (Node 498 ms, Python 16,9 s). El código está en `docs/stack/bench-motor/` con sus cinco advertencias sobre lo que cada número **no** dice. Y lo que mide es **el núcleo**, no el motor entero: la escalera real, con su catálogo de catorce técnicas, todavía no existe.
6. **Tres afirmaciones de este expediente son juicio y no dato**, y no las disfrazo: que el iframe es la forma correcta del widget para medios; que la ventaja de GEO por no hacer *streaming* vale más que el azúcar de `next/og`; y que la escasez 60:1 de Svelte en España es un coste aceptable el año 1. Las tres son mías o de un juez, y las tres se pueden discutir.
7. **Dos contradicciones entre estudios que resuelvo aquí y conviene que se vean:** (a) `coste-y-riesgo.md` calcula la IA sobre **cuatro candidatos redactados por caso** y `motor-y-pipeline-ia.md` §5.1 rechaza expresamente esa arquitectura y redacta **uno**; mando el motor y la partida de IA baja de 40 € a 8-20 €/mes. (b) `coste-y-riesgo.md` da por firme Paddle y `backend-hosting.md` y `arquitecturas-alternativas.md` piden reabrirlo con datos de abril y mayo de 2026 que el primero no tenía; **reabro B-41**. La comisión de Stripe Managed Payments que aparece en los dos difiere (13,3 % frente a 17 %) porque uno usa tarifas base del EEE y el otro de EE. UU.: **para un vendedor español con tarjetas del EEE manda el 13,3 %**, y es lo primero que hay que verificar en B-41.

---

*Mantiene este documento `director-producto`. Cualquier cambio que toque una decisión de §1, un umbral de §5.3 o un disparador de §5.4 se registra antes en `docs/decisiones.md`. El resultado de la prueba del viernes 11 se anota aquí y en D-F1-bis el mismo día.*
