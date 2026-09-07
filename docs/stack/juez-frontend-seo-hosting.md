# Juicio escéptico del estudio de framework · lente SEO, GEO, OG, hosting y portabilidad

Autor: `responsable-crecimiento-seo`. Fecha: 7 de septiembre de 2026 (S1, día 1).
Documento juzgado: `docs/stack/frontend.md` (recomendación de cambio a SvelteKit 2 + Svelte 5).
Documentos que obedece este juicio: `docs/contexto-proyecto.md`, `docs/arbol-web-final.md` §4 y §6, `docs/roadmap/plan-backend.md` §1 y §2.

**Alcance deliberadamente estrecho.** No juzgo rendimiento del tablero, productividad de agentes, ecosistema de interfaz ni service worker. Solo: los cinco modos de renderizado, la OG dinámica sin *spoiler*, los datos estructurados y el aparato de rastreo, el HTML que ve un bot, el hosting y la portabilidad, el widget para medios y el envoltorio Capacitor. Todo lo demás queda fuera y no lo contradigo ni lo respaldo.

> **Aviso D-006 (registro de marca), comprobado hoy.** Ninguno de los cinco disparadores se cumple con este documento: es interno, técnico y no público. No procede adelantar el expediente de la OEPM.

---

## 0. Veredicto

| | |
|---|---|
| **¿Refutada la recomendación de SvelteKit?** | **No.** |
| **Puntuación de solidez en esta lente** | **4 sobre 5** (1 = insostenible, 5 = incontestable). Se sostiene, con tres correcciones de hecho y siete condiciones escritas. |
| **Qué queda refutado** | Tres de las cinco razones de la §9 del estudio y una línea de su arquitectura (§6.1, erratas). |
| **Qué se acepta** | La conclusión, no todo el razonamiento con el que se defiende. |

**Razonamiento, en once líneas.**
1. La razón 2 del estudio («Next ha retrocedido en el borde, SvelteKit lo resuelve en el borde») está **refutada en Vercel**: Vercel dejó obsoletas las Edge Functions como producto y las movió a Vercel Functions / Fluid Compute; Next 16.3 ya no admite `runtime = 'edge'`; y la opción `runtime` de `adapter-vercel` de SvelteKit **también está marcada como obsoleta y se retirará**. Ninguno de los dos tiene borde en Vercel hoy ([Vercel changelog](https://vercel.com/changelog/edge-middleware-and-edge-functions-are-now-powered-by-vercel-functions), [Edge Functions deprecated](https://vercel.com/docs/functions/runtimes/edge/edge-functions.rsc), [adapter-vercel](https://vercel.com/academy/svelte-on-vercel/runtime-selection)).
2. Y no hace falta: `x-vercel-ip-timezone` está activo **en todas las Vercel Functions, de todos los planes, sin configuración**, en cualquier framework. D-011/R4 se resuelve igual de bien en los dos ([Request headers](https://vercel.com/docs/headers/request-headers)).
3. La razón 4 («la portabilidad deja de ser una promesa») está **parcialmente refutada**: el 25 de marzo de 2026 Next 16.2 publicó una **API de adaptadores de despliegue estable**, construida con Netlify, Cloudflare, OpenNext, AWS y Google Cloud, con compromiso público de tratar a los adaptadores conformes en igualdad con Vercel ([Netlify](https://www.netlify.com/blog/the-next-js-adapter-api-just-shipped-here-s-what-comes-next/), [Agility](https://agilitycms.com/blog/nextjs-162-adapters-deploy-anywhere)). SvelteKit sigue por delante **hoy**; la ventaja caduca a finales de 2026, dentro de nuestro límite duro del 12 de enero de 2027.
4. Peor para el argumento: **en Cloudflare, Next conserva ISR y SvelteKit no.** OpenNext soporta SSG, SSR, ISR, middleware, PPR y caché componible sobre KV/R2; `adapter-cloudflare` no tiene ISR y lo único que existe es un paquete de comunidad ([OpenNext](https://opennext.js.org/cloudflare/caching), [sveltekit-isr-cloudflare-workers](https://github.com/reegodev/sveltekit-isr-cloudflare-workers)).
5. Lo que sí pierde SvelteKit y el estudio no dice: **no existe equivalente de `revalidateTag`.** La revalidación bajo demanda es un `GET`/`HEAD` con `x-prerender-revalidate: <bypassToken>` **por URL** ([kit#12031](https://github.com/sveltejs/kit/issues/12031)). La línea «Erratas → ISR con revalidación por etiqueta» de la §6.1 del estudio **no es implementable tal como está escrita**.
6. A cambio, el estudio se dejó su mejor argumento en esta lente: **el *streaming* de React esconde el JSON-LD a los rastreadores que no ejecutan JavaScript.** Dentro de un `Suspense`, el bloque llega como `self.__next_f.push(...)`, no como nodo del DOM; la discusión de Next sigue **sin respuesta oficial** ([next#87723](https://github.com/vercel/next.js/discussions/87723)).
7. Y eso importa porque **ningún rastreador de IA grande ejecuta JavaScript a mediados de 2026**: GPTBot descarga JS en ~11,5 % de sus peticiones y no lo ejecuta; ClaudeBot en ~23,84 % y tampoco; solo Gemini renderiza, vía Googlebot ([SearchOptimo](https://searchoptimo.com/blog/do-ai-crawlers-render-javascript), [HybridRanking](https://hybridranking.com/blog/most-ai-crawlers-dont-render-javascript-2026)). El requisito 2 de `arbol-web-final.md` §4.1 es literalmente el canal.
8. En OG no hay ventaja de motor, solo de azúcar: `next/og` **es** satori + resvg. Los mismos límites en los dos: solo *flex*, fuentes `ttf`/`otf`/`woff` sin fuentes del sistema, emoji por proveedor explícito, imágenes solo PNG/JPEG, presupuesto de 500 KB ([ImageResponse](https://nextjs.org/docs/app/api-reference/functions/image-response)). Lo que Next regala son el convenio de fichero y el prerenderizado en build; en SvelteKit son ~80 líneas y `entries()`.
9. En HTML servido, Next pierde por peso: las páginas RSC serializan el contenido dos veces y hay una incidencia abierta que mide **~29 % del HTML de SSR en listas de URL de fragmentos duplicadas**, creciendo de forma cuadrática con las referencias de cliente ([next#95559](https://github.com/vercel/next.js/issues/95559)). El presupuesto de 45 KB comprimidos de `plan-frontend.md` §7 aguanta por gzip, pero medirlo en S1 sigue siendo obligatorio.
10. En TTFB no hay diferencia que un usuario o un bot perciba a nuestra escala: con acierto de caché manda el CDN; con fallo, los dos están en 50-200 ms según comparativas de 2026 que **no he medido yo** ([devMorph](https://www.devmorph.dev/blogs/sveltekit-vs-nextjs-16-performance-benchmarks-2026)). Este criterio no debe pesar en la decisión.
11. Conclusión: la recomendación se sostiene, pero **no por los motivos que el estudio pone primero**. Se sostiene por HTML sin *streaming*, por peso de HTML y por Capacitor; no por el borde ni por una portabilidad que Next está cerrando. Y el destino al que apunta esa portabilidad —Cloudflare— **bloquea por defecto bots de IA de Entrenamiento y Agente desde el 15 de septiembre de 2026** ([Cloudflare changelog](https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/)).

---

## 1. Los cinco modos de renderizado

| Modo que exige `arbol-web-final.md` | SvelteKit 2 | Next 16 | Juicio |
|---|---|---|---|
| **SSG** (23 landings) | `export const prerender = true` | `use cache` + `cacheLife('max')` | Empate. SvelteKit es más simple de leer |
| **SSR** (`/r/[id]`) | `prerender = false`, `ssr = true` | ruta dinámica | Empate |
| **CSR + noindex** (`/entrar`, `/cuenta/*`) | `export const ssr = false`, una línea | `'use client'` + desactivar prerender | Ventaja SvelteKit, menor |
| **ISR** (archivo, meses, erratas) | `config = { isr: { expiration, bypassToken, allowQuery, group } }` **solo en `adapter-vercel`** | ISR nativo + `cacheTag`/`updateTag`/`revalidateTag` | **Ventaja Next, real** |
| **Borde** (`/` por número de caso) | `runtime: 'edge'` **obsoleto y en retirada** | `runtime='edge'` **eliminado en 16.3**; `proxy.ts` solo Node | **Empate a la baja: ninguno lo tiene en Vercel** |

**Tres cosas que hay que corregir en el estudio.**

**(a) El borde no existe para nadie en Vercel.** Vercel deprecó las Edge Functions como producto en junio de 2025 y todo el cómputo pasó a Vercel Functions con Fluid Compute; a partir de Next 16.3 `runtime = 'edge'` deja de admitirse; y la opción `runtime` de `adapter-vercel` (`'edge' | 'nodejs20.x' | 'nodejs22.x'`) **está documentada como obsoleta y se retirará**, momento en el que todas las funciones usarán la versión de Node del proyecto. El estudio construye su razón 2 sobre una asimetría que ya no existe. La resolución de `/` por franja horaria se hace con `x-vercel-ip-timezone` en una función Node y `s-maxage` por franja, **idéntico en los dos frameworks**.

**(b) SvelteKit no tiene invalidación por etiqueta.** Lo que hay es un `bypassToken` de ≥ 32 caracteres y una petición con cabecera `x-prerender-revalidate` **contra cada URL**. No hay `revalidateTag` ni `revalidatePath`; la incidencia que lo pide sigue abierta. Consecuencia directa sobre `docs/stack/frontend.md` §6.1: la fila de `/erratas` («ISR con revalidación por etiqueta al publicar una errata») hay que reescribirla. Es la única línea de esa arquitectura que no se puede construir.

**(c) El ISR de Vercel tiene bordes ásperos documentados.** ISR no surte efecto si la ruta lleva `prerender = true`; `prerender = 'auto'` provocó cacheado indefinido; no aplica a rutas de API; hay incidencias con parámetros *rest* (`[...path]`) y con acciones de formulario que dejan de funcionar a las 24 h. Son incidencias de 2023-2024 y no las he reproducido, pero la superficie es más fina que la de Next.

**Lo que salva a SvelteKit en este criterio es que la arquitectura propuesta ya no usa el ISR de Vercel.** La §6.1 del estudio elige `Cache-Control: s-maxage=86400, stale-while-revalidate=604800`, que es la primitiva estándar, funciona igual en Vercel, Cloudflare, Netlify o un VPS con CDN, y evita además la facturación separada de ISR ($0,40/M lecturas, $4/M escrituras en Pro). Es la decisión correcta y hay que dejarla escrita como decisión, no como apaño: **no se usa `isr` de `adapter-vercel` en ninguna ruta.**

Fuentes: [SvelteKit en Vercel](https://vercel.com/docs/frameworks/full-stack/sveltekit) · [ISR de Vercel](https://vercel.com/docs/incremental-static-regeneration) · [kit#12031](https://github.com/sveltejs/kit/issues/12031) · [kit#9182](https://github.com/sveltejs/kit/issues/9182) · [kit#10836](https://github.com/sveltejs/kit/issues/10836) · [kit#12158](https://github.com/sveltejs/kit/issues/12158) · [Runtime Selection · Vercel Academy](https://vercel.com/academy/svelte-on-vercel/runtime-selection) · [Vercel Edge en 2026](https://gautamkhorana.com/blog/vercel-edge-explained-2026/) · [Precios de Vercel 2026](https://flexprice.io/blog/vercel-pricing-breakdown)

---

## 2. OG dinámica sin *spoiler*: satori + resvg frente a `next/og`

**No hay diferencia de motor.** `next/og` es satori (HTML+CSS → SVG) más resvg (SVG → PNG). Los dos caminos comparten las mismas limitaciones, y conviene tenerlas escritas antes de diseñar la plantilla:

- **Maquetación:** satori solo entiende *flex*. Sin `grid`, sin `block`, sin `float`. El plano vacío del caso hay que componerlo con *flex* anidado o con SVG a mano.
- **Fuentes:** no hay fuentes del sistema. Hay que enviar el fichero; `ttf` u `otf` mejor que `woff` porque se analizan más rápido. En el borde no hay `node:fs`, así que se sirve por HTTP o se incrusta.
- **Emoji:** no salen solos. Hay que declarar proveedor (`twemoji`, `noto`, `blobmoji`, `openmoji`) y cada uno cuesta una petición si no se incrusta. **Recomendación: prohibir emoji en la plantilla OG.** Es una regla de una línea que elimina una clase entera de fallos.
- **Imágenes:** solo PNG y JPEG. WebP revienta con un error poco útil, y en Workers la carga de imágenes de satori **falla en silencio**, así que hay que descargarlas a mano y pasarlas a base64.
- **Presupuesto:** `ImageResponse` tiene un tope de 500 KB incluyendo fuentes, imágenes y código.

**Coste real y tiempo.** Satori tarda ~10-15 ms en pasar a SVG y resvg ~20-30 ms en rasterizar: menos de 50 ms en caliente. Las cifras que publicó el propio Vercel comparando este par con Chrome sin cabeza son P99 de TTFB en frío de 4,96 s → **0,99 s**, y paquete de despliegue de ~50 MB → ~500 KB. Es decir: en caliente sobra, **en frío el P99 es del orden del segundo, no de 300 ms**.

**Consecuencia sobre la compuerta.** La compuerta 2 de la §10 del estudio («PNG correcto en menos de 300 ms en frío») está mal calibrada y va a dar rojo por un motivo que no tiene que ver con el framework. Hay que reescribirla (condición C2 de la §7).

**Dónde gana Next, sin adornos.** Convenio de fichero `opengraph-image.tsx` por ruta, funciona en el tiempo de ejecución de Node en 16, y **se puede prerenderizar en build** cuando la ruta tiene segmentos dinámicos con `generateStaticParams`. En SvelteKit hay que escribir el `+server.ts`, exportar `entries()` para prerenderizar las OG del archivo y decidir el tiempo de ejecución. Es media jornada, no un día y medio, si se hace contra `satori` y `@resvg/resvg-js` directamente.

**Dónde SvelteKit puede hacerse daño solo: las dependencias de comunidad.** Las dos envolturas visibles son delgadas. `@ethercorps/sveltekit-og` **declara explícitamente que no soporta Vercel Edge ni Cloudflare Workers**; `svelte-component-to-image` exige `<svelte:options css="injected" />` en cada componente y tiene un predecesor marcado como obsoleto. **Recomendación: cero envolturas. `satori` + `@resvg/resvg-js` llamados a pelo en `+server.ts`.** Son ~80 líneas, sin intermediario que se pudra, y es el mismo par que usa Next por debajo.

**El coste oculto es de portabilidad, no de framework.** `@resvg/resvg-js` es un binding nativo (napi): perfecto en Vercel Node y en un VPS, **imposible en Cloudflare Workers**. Mudarse obliga a cambiar a `@resvg/resvg-wasm` y pelearse con el empaquetado de wasm (nada de compilación dinámica, importaciones estáticas precompiladas por wrangler). Next en Cloudflare sufre la misma clase de dolor —`Could not resolve "/wasm/..."` en build, `Cannot perform Construct on a detached ArrayBuffer` desde satori— pero tiene escapes hechos (`@cf-wasm/og`, el plugin `vercel-og` de Pages). **Es un impuesto de Cloudflare, no de SvelteKit, y es una razón más para no mudarse antes del día L.**

Fuentes: [ImageResponse · Next.js](https://nextjs.org/docs/app/api-reference/functions/image-response) · [Postcards from a Satori OG factory](https://catsoupmedia.com/blog/satori-og-factory/) · [Dynamic OG images with Satori and Astro](https://knaap.dev/posts/dynamic-og-images-with-any-static-site-generator/) · [satori#159 · ¿funciona en Workers?](https://github.com/vercel/satori/discussions/159) · [kit#8299 · OG image generation](https://github.com/sveltejs/kit/discussions/8299) · [@resvg/resvg-js](https://github.com/thx/resvg-js) · [@cf-wasm/og](https://www.npmjs.com/package/@cf-wasm/og) · [next-on-pages#165](https://github.com/cloudflare/next-on-pages/issues/165)

---

## 3. Datos estructurados, canónicas, hreflang, sitemaps y `robots.txt` para bots de IA

**Resumen: no hay diferencia relevante, salvo una y va a favor de SvelteKit.**

| Pieza | SvelteKit | Next 16 | Diferencia real |
|---|---|---|---|
| **JSON-LD** (un bloque por página, validado en CI) | `<svelte:head>` con `{@html}` | `<script type="application/ld+json">` en el componente o en `generateMetadata` | Ninguna en escritura. **Sí en entrega: ver abajo** |
| **Canónica absoluta** | `<svelte:head>` desde `load` | `generateMetadata().alternates.canonical` | Ninguna. Next es un poco más declarativo |
| **`hreflang`** | Componente | `alternates.languages` | **Irrelevante hoy**: §5.1 decidió una sola variante `es` + `x-default` a sí misma |
| **Sitemaps** (índice + 5 ficheros, `lastmod` real, filtro anti-contenido-fino) | `+server.ts` por sitemap, prerenderizado en el build de las 00:00 con `entries()` | `sitemap.ts` + `generateSitemaps()` | **Ventaja Next: ~0,5 días.** Pero son ~50 líneas de XML desde la misma consulta que ya alimenta `/archivo` |
| **`robots.txt`** abierto a las tres familias de bots | Fichero estático o `+server.ts` | `robots.ts` | Ninguna. **Y no es aquí donde está el riesgo** |
| **`llms.txt`** | Fichero estático | Fichero estático | Ninguna |

**La única diferencia que importa: el *streaming* de React puede esconder el JSON-LD.** Cuando un componente se transmite dentro de un `Suspense`, no llega como etiqueta HTML sino como instrucción `self.__next_f.push(...)` en fragmentos posteriores. Un rastreador que no ejecuta JavaScript ve el sustituto de carga y **no ve el bloque de datos estructurados**. La discusión en el repositorio de Next (diciembre de 2025 - marzo de 2026) sigue **sin respuesta oficial**; los apaños propuestos son sacar el JSON-LD de todo `Suspense`, detectar bots en middleware y desactivar el *streaming*, o inyectarlo por `generateMetadata`. Next tiene detección de agentes que espera al render completo para bots conocidos, pero **la corrección es una lista de agentes de usuario**, y las listas de agentes envejecen justo en el frente donde el mercado se mueve más rápido.

Por qué esto pesa mucho aquí y no en un sitio cualquiera: `arbol-web-final.md` §4.1 requisito 2 hace del HTML servido una **prueba de aceptación**, y §4.2 exige `FAQPage`, `HowTo`, `VideoGame`, `Article` y `BreadcrumbList` en las páginas que traen el tráfico. A mediados de 2026 **ningún rastreador de IA grande ejecuta JavaScript**: GPTBot descargó ficheros JS en ~11,5 % de sus peticiones sin ejecutarlos; ClaudeBot en ~23,84 % y nunca los ejecuta; GPTBot, ClaudeBot y PerplexityBot hacen una sola petición HTTP, leen el HTML que vuelve y se van, sin reintento. La única excepción es Gemini, que usa la infraestructura de renderizado de Googlebot. **En SvelteKit ese modo de fallo no existe porque no hay carga útil de framework en la que esconderse.**

**Y el riesgo de verdad no es el `robots.txt`, es el CDN.** El árbol ya lo avisa en §4.3 y el aviso ha envejecido a peor: Cloudflare anunció el 1 de julio de 2026 nuevas opciones de tráfico de IA con tres categorías (Búsqueda, Agente, Entrenamiento) y **defaults nuevos a partir del 15 de septiembre de 2026** —dentro de ocho días— que bloquean Entrenamiento y Agente para dominios nuevos, sitios nuevos de clientes existentes y **todos los clientes gratuitos existentes**, dejando Búsqueda permitida. Vercel no bloquea por defecto: su bloqueo de bots de IA es una plantilla de cortafuegos que hay que activar. Esto no cambia la elección de framework; **cambia la elección de destino, y hay que escribirlo** (condición C4).

Fuentes: [next#87723](https://github.com/vercel/next.js/discussions/87723) · [Fix 'Streaming' SSR Issues in Next.js](https://oneuptime.com/blog/post/2026-01-24-nextjs-streaming-ssr-issues/view) · [No-JavaScript Fallbacks in 2026](https://buttonblock.com/blog/no-javascript-fallbacks-ai-crawlers-2026) · [Do AI Crawlers Render JavaScript?](https://searchoptimo.com/blog/do-ai-crawlers-render-javascript) · [Most AI Crawlers Still Don't Render JavaScript](https://hybridranking.com/blog/most-ai-crawlers-dont-render-javascript-2026) · [Cloudflare · New options to manage AI traffic](https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/) · [Cloudflare's Default AI Bot Block Is Killing Your GEO Strategy](https://www.playwire.com/blog/cloudflares-default-ai-bot-block-is-killing-your-geo-strategy) · [Vercel · cómo bloquear GPTBot](https://vercel.com/kb/guide/how-to-block-bots-openai-gptbot) · [JSON-LD en SvelteKit](https://www.xvrc.net/posts/how-to-add-json-ld-to-a-sveltekit-app/) · [sveltekit-sitemap](https://www.npmjs.com/package/sveltekit-sitemap)

---

## 4. Rendimiento de rastreo: HTML sin JS, tamaño y TTFB

**HTML completo sin JS en las 36 URL P0.** Los dos lo dan cuando la ruta es SSG o SSR. Dos matices:

- El «cero JavaScript por defecto» de Next es **disciplina**, no valor por defecto, y el propio estudio cuenta 22 de las 36 URL P0 con tablero, vistazo o tutorial. No he recontado esas 22 una por una; acepto la cuenta porque es coherente con la §2 del árbol, y la marco como dato heredado, no verificado por mí.
- El modo de fallo del *streaming* (§3) es la única forma realista de incumplir la prueba de `curl`, y solo la tiene Next.

**Tamaño del HTML.** Aquí Next pierde y el estudio lo trata de refilón. Las páginas con RSC llevan el contenido dos veces: el marcado y la carga útil de *flight* en línea. Hay una incidencia abierta que mide **~29 % del HTML de SSR ocupado por listas de URL de fragmentos duplicadas**, con crecimiento cuadrático según se multiplican las referencias de cliente, y reportes de que el HTML «se hincha» al migrar a RSC hasta anular la ganancia de JS. Comprime bien porque es texto repetido, pero el presupuesto de **45 KB comprimidos** de `plan-frontend.md` §7 se fijó sin contarlo. **La mitigación del estudio (medir el HTML real de `/` en S1) es correcta y hay que mantenerla gane quien gane.**

**TTFB.** Con acierto de caché, los dos sirven desde el CDN y el TTFB es del CDN: idéntico. Con fallo, las comparativas de 2026 sitúan a los dos en 50-200 ms, con SvelteKit en ~20-50 ms de tiempo de servidor y un techo de peticiones por segundo más alto (1.200 frente a 850). **No he medido nada de esto**: son cifras de comparativas de terceros y las trato como dirección, no como dato. A nuestro volumen, ningún usuario ni ningún bot nota la diferencia. **Este criterio no debe pesar en la decisión y no pesa en mi puntuación.**

Fuentes: [next#95559](https://github.com/vercel/next.js/issues/95559) · [next#42170 · `self.__next_f.push`](https://github.com/vercel/next.js/discussions/42170) · [Cómo optimizar el tamaño de la carga útil de RSC](https://vercel.com/kb/guide/how-to-optimize-rsc-payload-size) · [SvelteKit vs Next.js 16 · comparativa 2026](https://www.devmorph.dev/blogs/sveltekit-vs-nextjs-16-performance-benchmarks-2026)

---

## 5. Portabilidad: cuánto cuesta irse, y qué se pierde

| Destino | SvelteKit | Next 16 | Qué se pierde de verdad |
|---|---|---|---|
| **Vercel** (hoy) | `adapter-vercel` | nativo | Nada. Ninguno tiene borde |
| **Cloudflare Workers** | `adapter-cloudflare`, una línea. **Sin ISR.** OG hay que reescribirla a `resvg-wasm` | OpenNext: SSG, SSR, **ISR** (KV/R2), middleware, PPR, optimización de imagen. Sin el tiempo de ejecución *edge* de Next, sin middleware de Node de 15.2, sin `minimumCacheTTL` | **SvelteKit pierde ISR; Next lo conserva.** Contradice la razón 4 del estudio |
| **Netlify** | `adapter-netlify`, una línea. Sin ISR de SvelteKit | Adaptador verificado **en desarrollo activo**, previsto para finales de 2026 | Empate a la baja |
| **VPS / Node** | `adapter-node`, una línea | `output: standalone` funciona, pero **`use cache` cae a caché en memoria por defecto** al autoalojarse: con varias instancias hace falta un gestor de caché propio | Ventaja SvelteKit, clara |
| **Estático (Capacitor)** | `adapter-static` con `fallback: 'index.html'` | `output: 'export'` prohíbe segmentos dinámicos sin `generateStaticParams`, middleware, ISR y `next/og` | **Ventaja SvelteKit, la más limpia de las cinco razones del estudio** |

**La corrección importante.** El 25 de marzo de 2026, Next 16.2 publicó una **API de adaptadores de despliegue estable**: una descripción tipada y versionada de la aplicación a la que cualquier plataforma puede apuntar, construida con Netlify, Cloudflare, OpenNext, AWS y Google Cloud, con adaptadores verificados que ejecutan la suite completa de compatibilidad, viven bajo la organización de GitHub de Next y se documentan «en igualdad con Vercel». Hoy hay verificados para Vercel y Bun; Netlify, Cloudflare y AWS están en desarrollo activo y se esperan **antes de que acabe 2026**. La frase del estudio «un adaptador de terceros que va por detrás de las versiones» era cierta cuando se escribió D-F1 y **está caducando ahora mismo**.

**Un tercer camino que es señal de inestabilidad, no de madurez.** En febrero de 2026 Cloudflare publicó `vinext`, una reimplementación de Next sobre Vite hecha por un ingeniero dirigiendo un modelo en menos de una semana, que cubre el 94 % de la superficie de API de Next 16, construye 4,4× más rápido y produce paquetes un 57 % más pequeños; Cloudflare lo recomienda como camino por defecto **y su propio README dice que OpenNext sigue siendo la opción más segura**. Que en el mismo trimestre haya tres formas de ejecutar Next en Cloudflare no es tranquilizador.

**Coste, con las cifras comprobadas.** El preset de 250.000 visitas de Vercel ronda los **305 $/mes**; Pro incluye 1 TB de transferencia rápida y 10 M de peticiones de borde; Fluid/Active CPU va de 0,128 a 0,221 $/hora; **ISR se factura aparte a 0,40 $/M lecturas y 4 $/M escrituras**, y las aplicaciones intensivas en ISR e imagen suman un 10-30 %. Nuestro presupuesto es < 100 €/mes hasta 50.000 usuarios con todo lo público en caché de CDN: **nada de esto muerde**. Por eso el peso de 8 que el estudio da a C6 me parece, si acaso, generoso: **no nos vamos a mudar dentro de esta ventana, y el destino al que apuntaríamos tiene una trampa de GEO activa dentro de ocho días.**

Fuentes: [Next.js Across Platforms](https://nextjs.org/blog/nextjs-across-platforms) · [Netlify · la API de adaptadores acaba de salir](https://www.netlify.com/blog/the-next-js-adapter-api-just-shipped-here-s-what-comes-next/) · [Next.js 16.2 Adapters](https://agilitycms.com/blog/nextjs-162-adapters-deploy-anywhere) · [OpenNext · caché](https://opennext.js.org/cloudflare/caching) · [Next.js en Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/) · [vinext explicado (LogRocket)](https://blog.logrocket.com/vinext-cloudflares-vite-based-next-js-replacement/) · [Cloudflare presenta vinext](https://itbrief.news/story/cloudflare-unveils-vinext-a-vite-based-next-js-rival) · [@sveltejs/adapter-cloudflare](https://www.npmjs.com/package/@sveltejs/adapter-cloudflare) · [Cache Components y autoalojamiento](https://www.buildwithmatija.com/blog/nextjs-16-2-caching-unstable-cache-vs-use-cache) · [Vercel Cost 2026](https://makerkit.dev/blog/saas/vercel-cost)

---

## 6. Widget embebible para medios y envoltorio Capacitor

**Widget: el estudio puntúa una ventaja que en la práctica no se cobra.** La decisión que manda no es el framework, es **iframe o etiqueta `<script>`**, y para un caso diario licenciado a un medio la respuesta es **iframe**: aislamiento total de estilos y de JavaScript del sitio anfitrión, sin negociar CSP con cada redacción, sin riesgo de que su CSS se coma la rejilla, y el medio puede diferir la carga. Con iframe, el widget es una ruta más de nuestra propia aplicación (`/embed/[fecha]`) y **los dos frameworks son exactamente iguales**.

La ventaja de SvelteKit solo aparece en el caso de la etiqueta `<script>`, y ahí es real —un componente web de Svelte de ejemplo pesa ~7 KB, frente a React más ReactDOM como suelo— pero **no es gratis ni es «el mismo código»**: la opción `customElement` tiene que ser un literal estáticamente analizable, Svelte «no se diseñó para mezclar componentes normales con componentes web» (la bandera del compilador es del proyecto entero), las props que no son cadenas exigen configuración incómoda y el DOM en la sombra impide depender del CSS global de la aplicación. Lo que se hace en la práctica es un paquete aparte en modo biblioteca de Vite que produce un IIFE e importa el mismo componente de tablero — **que es exactamente lo que hace un monorepo de Next con un paquete de componente web**. Juicio: **empate con iframe; ventaja de bytes para SvelteKit con `<script>`, menor que la que sugiere una nota de 9 sobre 10.**

**Capacitor: aquí el estudio tiene toda la razón, y es su mejor argumento de los cinco.** `output: 'export'` de Next desactiva segmentos dinámicos sin `generateStaticParams`, middleware, ISR, `next/og` y las rutas dinámicas: son dos construcciones divergentes de verdad. `adapter-static` de SvelteKit con `fallback: 'index.html'` más `ssr = false` en las rutas de la aplicación da una concha SPA real desde el mismo árbol de código, con la salvedad documentada de que una construcción estática no arrastra el `fetch` del servidor y las llamadas de datos tienen que apuntar explícitamente a la API desplegada. **Aquí no hay problema: C1-C9 ya son HTTP.** Vale aproximadamente un día y medio de dolor futuro, en un entregable que no es del año 1.

Fuentes: [Custom elements · Svelte](https://svelte.dev/docs/svelte/custom-elements) · [Web Components with Svelte (Mainmatter)](https://mainmatter.com/blog/2025/06/25/web-components-with-svelte/) · [Building Embeddable Widgets with Svelte](https://ferndesk.com/blog/building-embeddable-widgets-with-svelte) · [Embeddable React Widgets](https://makerkit.dev/blog/tutorials/embeddable-widgets-react) · [Estructura Next + widget no-React](https://community.vercel.com/t/structure-for-next-js-app-embeddable-non-react-widget-shared-ui/17335) · [Tips to implement an embeddable widget](https://jmperezperez.com/blog/embeddable-widget/) · [Single-page apps · SvelteKit](https://svelte.dev/docs/kit/single-page-apps) · [next#88228 · segmentos dinámicos con `output: export`](https://github.com/vercel/next.js/discussions/88228) · [SvelteKit y Capacitor](https://bryanhogan.com/blog/web-to-app-sveltekit-capacitor)

---

## 7. Condiciones para aceptar el cambio

Siete, todas escritas antes del dato y todas verificables. Si se aprueba SvelteKit, se aprueba **con estas siete**; ninguna cuesta más de medio día.

| # | Condición | Dónde se registra | Quién |
|---:|---|---|---|
| **C1** | **Se prohíbe el `isr` de `adapter-vercel`.** El archivo, los meses y `/erratas` se cachean con `s-maxage` + `stale-while-revalidate`, que es estándar y portable. La fila de erratas de `docs/stack/frontend.md` §6.1 se reescribe: **no hay revalidación por etiqueta en SvelteKit**; la publicación de una errata dispara una purga **por lista explícita de URL** desde el cron de backend (`/erratas`, `/archivo`, `/archivo/AAAA-MM`, `/caso/AAAA-MM-DD`, los cuatro sitemaps) | `frontend.md` §6.1, `plan-backend.md` B-36 | frontend + backend |
| **C2** | **Se recalibra la compuerta 2 de la §10.** No «300 ms en frío». Verde = PNG correcto, **p50 en caliente < 150 ms, p99 en frío < 1 s**, fuente subconjunto en el repositorio, **emoji prohibido en la plantilla**, cero campos de solución en la entrada verificado por test, `X-Robots-Tag: noindex` y `s-maxage=31536000, immutable`. Las OG del archivo se **prerenderizan en el build** con `entries()`, de modo que el camino en frío se recorre una vez por caso, no una vez por compartición | `frontend.md` §10 | frontend |
| **C3** | **Compuerta nueva que el estudio no tiene y que Next también habría necesitado.** En CI, en cada despliegue: `curl -A "GPTBot"` sobre `/`, `/juegos-como-murdoku/online`, `/juegos-como-murdoku/gratis` y `/como-jugar` debe devolver **en el primer cuerpo de respuesta** el enunciado, las pistas, el texto de la FAQ y **exactamente un** bloque `application/ld+json` que valide. Rompe el build si falla | `plan-frontend.md` compuertas, `arbol-web-final.md` §4.1 req. 2 | frontend + calidad |
| **C4** | **El hosting se queda en Vercel hasta después del día L**, y se escribe por qué: en Cloudflare SvelteKit pierde ISR, la OG hay que reescribirla a `resvg-wasm`, y **Cloudflare bloquea por defecto bots de IA de Entrenamiento y Agente desde el 15/9/2026** para dominios nuevos y zonas gratuitas. Además, comprobación de bots convertida en **alerta permanente**, no en verificación de una vez: si `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Bingbot` o `Applebot` reciben un 403, salta aviso el mismo día | `decisiones.md` (D-F1-bis), `arbol-web-final.md` §4.3 | crecimiento + backend |
| **C5** | **Versiones exactas y documentación congelada**, como ya propone el estudio. SvelteKit 3 está en RC en septiembre de 2026 con estable «próximamente» y sin más rupturas anunciadas; `sv migrate` automatiza buena parte. **Nada de migrar antes del día L**, y la instantánea de `llms.txt` de SvelteKit 2 en `web/docs-vendor/` como única fuente citable | `web/README.md` | frontend |
| **C6** | **Sitemaps a mano, sin paquete de terceros.** Un `+server.ts` por sitemap, prerenderizado en el build de las 00:00, alimentado por **la misma consulta que `/archivo`** y filtrado por la regla anti-contenido-fino de §6.3. Ninguna URL con `noindex` entra. Test que compare el número de URL del sitemap con el número de casos con ficha completa | `frontend.md` §6, `plan-backend.md` B-36 | frontend |
| **C7** | **El widget para medios se construye primero como iframe** (`/embed/[fecha]`, `noindex`, sin cookies, sin seguimiento). Solo si un medio rechaza el iframe se construye el IIFE, y entonces **como paquete aparte en modo biblioteca de Vite**, nunca activando `customElement` en la aplicación | `catalogo-productos.md` (`/para-medios`) | frontend + crecimiento |

**Qué haría que volviese a Next desde mi lente, y solo eso.** Dos cosas, ninguna de las cuales es la compuerta 2 del estudio: (a) que el HTML comprimido de `/` en SvelteKit no cupiese en el presupuesto de 45 KB —improbable, y si pasara, Next estaría peor por la doble serialización de RSC—; o (b) que el camino de OG con `satori` + `@resvg/resvg-js` costase más de **dos días** de agente. Un rojo en «300 ms en frío» **no** es motivo de reversión: es una compuerta mal escrita, y arreglarla es la condición C2.

**Y una advertencia sobre el propio marco de decisión del estudio.** En mi lente, C2 (18) y C6 (8) suman 26 de los 100 puntos, y el estudio le da a Next un 9 y a SvelteKit un 8 en C2. Es decir: **el cambio no se gana en SEO ni en GEO, se gana en rendimiento y en simplicidad.** Yo mantendría el 9-8 de C2, pero por motivos distintos a los que da el estudio: Next gana en azúcar (OG, sitemaps, metadatos) y pierde en entrega (*streaming* que esconde el JSON-LD, HTML más pesado). Con las siete condiciones anteriores puestas, esa diferencia se cierra a mano en menos de dos días y deja de ser un argumento.

---

## 8. Qué es dato, qué es juicio y qué no he podido comprobar

**Dato**, con fuente enlazada: versiones y fechas (Next 16.2 con API de adaptadores estable el 25/3/2026; SvelteKit 3 en RC en septiembre de 2026; `vinext` en febrero de 2026), obsolescencias (Edge Functions de Vercel, `runtime='edge'` en Next 16.3, opción `runtime` de `adapter-vercel`), límites de satori y `ImageResponse`, precios de Vercel, defaults de bots de IA de Cloudflare del 15/9/2026, y el comportamiento medido de GPTBot y ClaudeBot ante JavaScript.

**Juicio profesional, sin dato duro detrás:** que el iframe es la forma correcta del widget para medios; que la envoltura de OG de comunidad no debe entrar en el camino crítico; que el peso de C6 es generoso; y que la ventaja de GEO por no hacer *streaming* vale más que el azúcar de `next/og`.

**Lo que no he hecho:** no he ejecutado ninguna medición. No he construido ninguna de las dos aplicaciones, no he medido TTFB, ni tamaño de HTML, ni tiempo de generación de OG. Las comparativas de TTFB y de peticiones por segundo son de terceros y las trato como dirección, no como cifra. **No he recontado las 22 de 36 URL con isla** del estudio: la acepto como dato heredado.

**Limitación de acceso que conviene registrar:** el proxy de salida bloquea `svelte.dev`, `nextjs.org` y `dev.to`, así que la documentación oficial de `adapter-vercel`, `adapter-cloudflare`, `single-page-apps` y el anuncio de la API de adaptadores de Next **están citados a través de fuentes secundarias** (Vercel Academy, Netlify, Agility, LogRocket, incidencias de GitHub). Los enlaces primarios quedan puestos para que se verifiquen a mano antes de registrar D-F1-bis. Ninguna cifra de este documento es inventada.
