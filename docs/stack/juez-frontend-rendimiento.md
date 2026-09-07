# Juez escéptico · Afirmaciones técnicas y de rendimiento del estudio de stack

Documento juzgado: `docs/stack/frontend.md` (recomienda SvelteKit 2 + Svelte 5 frente a Next.js 16). Fecha del juicio: 7 de septiembre de 2026.
Lente única: **verificar las afirmaciones técnicas y de rendimiento**. No se juzgan ni la matriz de pesos, ni la productividad de agentes, ni el ecosistema.
Documentos de apoyo leídos enteros: `docs/arbol-web-final.md` §1-2 y §6, `docs/roadmap/plan-frontend.md` §7 y §8, `docs/decisiones.md` D-011 (R4).

**Método.** 29 consultas web el 7/9/2026; lectura de la documentación oficial en sus repositorios de GitHub (el proxy de esta sesión bloquea nextjs.org, svelte.dev, vercel.com, webkit.org, v8.dev, react.dev y almanac.httparchive.org, así que se han leído los mismos ficheros `.md`/`.mdx` en `vercel/next.js`, `sveltejs/kit`, `reactjs/react.dev`, `v8/v8.dev` y `HTTPArchive/almanac.httparchive.org`); y, como npm sí funciona, **mediciones propias de JavaScript enviado** con las versiones publicadas hoy (apéndice A). No se ha medido INP ni hidratación en dispositivo: no existe tablero que medir.

> **Aviso D-006 comprobado.** Ninguno de los cinco disparadores se cumple con este documento: es interno, técnico y no público.

---

## 0. Veredicto

**¿Queda refutada la recomendación? No.** SvelteKit 2 + Svelte 5 sigue siendo la opción correcta para este árbol web en la lente de rendimiento, y medida es *más* fuerte que como la cuenta el estudio. **Puntuación: 3 sobre 5** (5 = todas las cifras verificadas; 3 = la conclusión se sostiene, varias cifras no; 1 = la recomendación no se sostiene).

Razonamiento, en doce líneas:

1. **La tesis central se sostiene y se refuerza al medir.** Un «hola mundo» de Next 16.3.4 App Router envía **130-133 KB gzip de JS (109-114 KB brotli) sin una sola línea de aplicación**; el mismo «hola mundo» en SvelteKit 2.70.3 envía **29,6 KB gzip**, y una página con `csr = false` envía **0 KB** (apéndice A; `page-options.md`: «Disabling CSR does not ship any JavaScript to the client»). La relación es 4,5×, no «40 KB frente a 1,6 KB».
2. **Las cifras de runtime del estudio son incorrectas en las dos direcciones.** El runtime de Svelte 5 no es «1,6 KB»: un componente hidratado mínimo cuesta **9,6 KB gzip** y una rejilla 6×6 con runas **12,9 KB**. React 19.2.8 + `react-dom/client` no son «~40 KB»: son **60,4 KB gzip / 52,0 KB brotli**.
3. **El presupuesto de `plan-frontend.md` §7 no está «en el techo del framework», está por debajo de su suelo.** ≤110 KB comprimidos en `/` es inalcanzable en Next 16 en gzip y coincide con el suelo en brotli con cero código propio; las landings a ≤40 KB son imposibles en Next y factibles en SvelteKit (30 KB + isla de 0,3 KB). El estudio no lo detecta porque no midió.
4. **El recuento 22 de 36 es correcto** (rehecho URL por URL, apéndice B), pero «las diez oportunidades de §1.3 sin excepción» es **falso**: `/para-profesores`, `/acertijos` y `/enigmas` son P1 y no están entre las 36 (7 de 10 sí). Y con D-011 R2, que el propio estudio cita, el recuento del día L es **27 de 41**.
5. **El mecanismo atribuido a RSC está mal.** En App Router **no existe forma de servir una página sin JavaScript** (`unstable_runtimeJS` solo existe en Pages Router; discusión vercel/next.js #49544 sin respuesta oficial desde 2023), así que las 14 URL «sin isla» envían el mismo suelo de 130 KB; RSC ahorra el código de los componentes de servidor, nunca el runtime. Medido: `/` sin isla y `/isla` con una rejilla cliente difieren en **0,35 KB gzip**.
6. **`proxy.ts` corre solo en Node: correcto** («The `edge` runtime is NOT supported in `proxy`. The `proxy` runtime is `nodejs`, and it cannot be configured»; `middleware.ts` sigue existiendo para edge, desaprobado). **«Pierde el borde» es exagerado:** en Vercel el Routing Middleware en Node corre antes de la caché y se despliega en todas las regiones sobre Fluid compute; Vercel desaprobó las Edge Functions en junio de 2025, así que el `runtime: 'edge'` de SvelteKit en Vercel es también una vía desaprobada; y en Cloudflare, OpenNext 1.20.3 ejecuta `proxy.ts` dentro del Worker (experimental). R4 no exige «el borde»: exige la zona horaria del CDN (`x-vercel-ip-timezone`, `cf.timezone`) y una reescritura a URL por número de caso, disponibles con los dos frameworks.
7. **«200 KB comprimidos cuestan 300-500 ms de análisis y 150-300 ms de hidratación» es una frase de un artículo de Medium sin medición citada, reproducida literalmente.** Como «análisis» está exagerada (V8 analiza en streaming y fuera del hilo principal en buena parte); como coste total de arranque en un gama media de 2019 es un orden de magnitud plausible (Almanac 2024: mediana móvil 558 KB de JS, TBT p50 de 1,2 s en laboratorio). El dispositivo P75 de 2026 (Galaxy A24 4G, Russell) es más rápido que ese Moto G4 de referencia.
8. **«La reactividad de grano fino resuelve R2 por construcción» es un error de categoría.** React con `memo` por celda y selector por celda (`useSyncExternalStore` solo re-renderiza «if the store changes and the returned value is different (as compared by `Object.is`)») actualiza la misma celda; la diferencia por toque son microsegundos frente a 200 ms de INP. La ventaja real de Svelte es de **arranque** (≈100 KB gzip menos que analizar y ejecutar antes del primer toque). R2 sigue siendo un riesgo de diseño (layout, arrastre, animación), no del framework.
9. **`$service-worker` expone `build`, `files`, `prerendered`, `version` y `base`, y su ejemplo oficial no llama a `skipWaiting`: correcto.** «Las recetas de Workbox son precisamente las que causan el bug de R5» es **falso**: Workbox `generateSW` tiene `skipWaiting` `@default false`; vite-plugin-pwa tiene `registerType` `@default 'prompt'`; la clase `Serwist` inicializa `skipWaiting = false`. Solo el ejemplo oficial de `@serwist/next` trae `skipWaiting: true, clientsClaim: true`, y cambiarlo es una línea.
10. **La caducidad de siete días de Safari borra también los registros de service worker** (WebKit, ITP: «Indexed DB, LocalStorage, Media keys, SessionStorage, Service Worker registrations» tras «seven days of Safari use without user interaction on the site») y **exime a las apps añadidas a la pantalla de inicio**: idéntica para los dos frameworks, ninguno la mitiga.
11. **Los dos frameworks recargan la página cuando un chunk deja de existir tras un despliegue** (SvelteKit lo documenta en `kit.version`: «it will fall back to traditional full-page navigation»), así que R5 se resuelve con persistencia por acción y con un service worker que espera, no con la elección de framework.
12. **En suma:** recomendación correcta sostenida sobre cifras parcialmente mal contadas. Se acepta con las condiciones de la §4, que corrigen las cifras antes de registrar D-F1-bis.

---

## 1. Tabla de afirmaciones: correctas, exageradas, falsas

| # | Afirmación del estudio | Estado | Dato verificado | Fuente |
|---|---|---|---|---|
| 1 | «Runtime de Svelte 5 ≈ 1,6 KB comprimido» (§3, §4.2) | **Falsa** | 8,9 KB gzip montaje estático; **9,6 KB hidratado**; 12,9 KB con rejilla 6×6 con runas (Svelte 5.57.0, Vite 8.2.2) | Medición A |
| 2 | «Runtime de React ~40 KB comprimidos» (§0, §4.2, §9) | **Subestimada** | **60,4 KB gzip / 52,0 KB brotli** (react + react-dom/client 19.2.8, esbuild, producción) | Medición A |
| 3 | «Primer paquete de Next ~70 KB en lo mínimo, 120-300 KB con RSC» (§4.2) | **Mitad falsa** | El suelo de Next 16.3.4 App Router es **130,4 KB gzip (webpack) / 133,1 KB (Turbopack)**, 109-114 KB brotli, sin código propio. No existe un «70 KB» | Medición A |
| 4 | «SPA mínima medida en 18 KB» en SvelteKit (§4.2) | **Optimista** | **29,6 KB gzip / 26,7 KB brotli** con router de cliente (7 ficheros precargados); **0 KB** con `csr = false` | Medición A; `page-options.md` |
| 5 | «El presupuesto ≤110 KB está fijado en el techo del framework» (§4.2, §9) | **Errónea, a favor de la tesis** | Está **por debajo del suelo** de Next 16 en gzip; en brotli coincide con el suelo con cero código. Landings ≤40 KB: imposibles en Next, factibles en SvelteKit | Medición A + `plan-frontend.md` §7 |
| 6 | «Veintidós de las 36 URL P0 llevan isla jugable» (§0, §9) | **Correcta** | 22 con `Juega:` y 14 sin (apéndice B). El estudio nombra 13 de las 14 y omite `/para-imprimir`, que solo ofrece PDF | `arbol-web-final.md` §1.1, §2 |
| 7 | «Las diez oportunidades de §1.3 sin excepción» (§0, §9) | **Falsa** | 7 de 10 son P0. `/para-profesores` (#7), `/acertijos` (#9) y `/enigmas` (#10) son P1; `/escalafon` (#6) también | `arbol-web-final.md` §1.3 |
| 8 | El recuento no cambia con D-011 R2 (Expediente el día L) | **Omisión** | Cinco URL pasan a P0, todas con juego: **27 de 41** | `decisiones.md` D-011 R2; árbol §2 |
| 9 | «La ventaja estructural de RSC se aplica a catorce URL» (§0) | **Falsa en el mecanismo** | App Router no puede servir cero JS; las 14 envían el mismo suelo. `/` sin isla frente a `/isla`: +0,35 KB gzip | vercel/next.js #49544; Medición A |
| 10 | Fila RR de §4.2: «las veintiséis landings con isla» | **Incoherente** | Contradice el 22 del propio estudio | `frontend.md` §4.2 |
| 11 | «Analizar 200 KB de JS comprimido cuesta 300-500 ms y la hidratación 150-300 ms en gama media» (§4.2) | **No verificable; exagerada como análisis** | Frase literal de un artículo de Medium (bhagyarana80) sin dispositivo ni medición citados. Orden de magnitud plausible como **coste total de arranque** en gama media de 2019 | V8 2019; Almanac 2024 |
| 12 | «Gama media = CPU 6× más lenta; INP p75 móvil 131 ms, 2,8× peor que escritorio» (§4.2) | **No verificada** | Compatible con V8 («over 6× as long on a low-end device») y con el 4× de Lighthouse; corewebvitals.io no abierto | V8 2019 |
| 13 | «`proxy.ts` corre solo en Node y no admite edge» (§3, §5.1) | **Correcta** | «The `edge` runtime is NOT supported in `proxy`… cannot be configured»; `middleware.ts` queda para edge, desaprobado; `runtime` en `proxy` lanza error | `version-16.mdx`; `proxy.mdx` |
| 14 | «Next 16 ha retrocedido… pierde el borde; SvelteKit sobre Workers lo resuelve en el borde sin excepción» (§0, §9) | **Exagerada** | Vercel: Routing Middleware Node antes de la caché, todas las regiones, Fluid compute; **Edge Functions desaprobadas (junio 2025)** para todos; Cloudflare: OpenNext 1.20.3 ejecuta `proxy.ts` en el Worker | Vercel docs; OpenNext CHANGELOG |
| 15 | «R4 convirtió `/` en resuelta en el borde, exactamente donde Next 16 ha retrocedido» (§0) | **Falsa como bloqueo** | R4 exige zona horaria del CDN + reescritura por número de caso. Vercel añade `x-vercel-ip-timezone`; Cloudflare, `cf.timezone`. Ninguno depende del runtime | Vercel request headers; D-011 R4 |
| 16 | «R2 deja de necesitar `useSyncExternalStore`, selectores y memoización» (§9) | **Exagerada** | Cierto: menos disciplina. Falso: que el riesgo desaparezca. Por toque, React memoizado es equivalente; la ventaja es de arranque | react.dev `useSyncExternalStore` |
| 17 | «`$service-worker` da `build`, `files`, `prerendered` y `version`» (§4.4) | **Correcta** | Más `base`. Ejemplo oficial de ~40 líneas sin `skipWaiting` ni `clients.claim` | `40-service-workers.md` |
| 18 | «Las recetas de Workbox son precisamente las que causan el bug de R5» (§5.3, §9) | **Falsa** | Workbox `skipWaiting` `@default false`; vite-plugin-pwa `registerType` `@default 'prompt'`; `Serwist` `skipWaiting = false`, `clientsClaim` `@default false`. Solo el **ejemplo** de `@serwist/next` trae `true, true` | Tipos instalados (apéndice A); `examples/next-basic/app/sw.ts` |
| 19 | «Serwist tiene integración de primera para SvelteKit» (§4.4) | No comprobada | Fuera de la lente; no se ha verificado | — |
| 20 | Versiones: Next 16.2.x, SvelteKit 2.57.1, Svelte 5.55.0; «SvelteKit 3 en RC» (§3) | **Desfasadas; la prerelease es cierta** | En npm el 7/9/2026: `next` 16.3.4 (`canary` 16.4.0-canary.19), `@sveltejs/kit` 2.70.3 con dist-tag `next` = **3.0.0-next.25**, `svelte` 5.57.0. El riesgo «el agente escribirá idiomática de SK3» que el estudio señala es real | `npm view … dist-tags` |
| 21 | Safari iOS borra el almacenamiento a los 7 días; sin `beforeinstallprompt` (§6.4, plan R1/R3) | **Correcta y neutra** | Borra también registros de SW; exime apps en pantalla de inicio; contador de «días de uso de Safari», no días naturales | WebKit (ITP), vía near-wallet #479 |

---

## 2. Mediciones propias (7 de septiembre de 2026)

Todo medido en producción, sumando gzip nivel 9 y brotli calidad 11 de **cada fichero JS que referencia el HTML de la ruta**, que es lo que descarga un navegador moderno. En Next se excluye el polyfill `noModule` (39,5 KB gzip), que los navegadores con módulos ES no descargan. Nota: `next build` de la 16.3.4 **ya no imprime** las columnas «Size» y «First Load JS», ni con Turbopack ni con `--webpack`; el presupuesto de CI del plan (F-05, F-50) no puede leerse de ahí.

| Qué | Versión | Ficheros | Sin comprimir | **gzip** | brotli |
|---|---|---:|---:|---:|---:|
| React: hola mundo `createRoot` | react 19.2.8, react-dom 19.2.8, esbuild 0.28.2 | 1 | 194,0 KB | **60,4 KB** | 52,0 KB |
| React: hidratar `<p>` | ídem | 1 | 194,0 KB | **60,4 KB** | 51,9 KB |
| React: contador `useState` | ídem | 1 | 194,1 KB | **60,5 KB** | 52,0 KB |
| React: rejilla 6×6 (36 celdas, ciclo por toque) | ídem | 1 | 194,3 KB | **60,6 KB** | 52,1 KB |
| Svelte: hola mundo `mount` | svelte 5.57.0, Vite 8.2.2 | 1 | 22,1 KB | **8,9 KB** | 8,1 KB |
| Svelte: hidratar `<p>` (`hydrate`) | ídem | 1 | 24,1 KB | **9,6 KB** | 8,7 KB |
| Svelte: contador `$state` | ídem | 1 | 26,9 KB | **10,6 KB** | 9,6 KB |
| Svelte: rejilla 6×6 con runas | ídem | 1 | 33,0 KB | **12,9 KB** | 11,8 KB |
| **Next 16 App Router: `/` sin componente cliente** | next 16.3.4 (Turbopack), react 19.2.8 | 5 | 453,1 KB | **133,1 KB** | 113,8 KB |
| Next 16: `/isla` con rejilla 6×6 `'use client'` | ídem | 6 | 453,6 KB | **133,4 KB** | 114,1 KB |
| Next 16: `/` sin componente cliente | next 16.3.4 (`--webpack`) | 5 | 445,6 KB | **130,4 KB** | 109,0 KB |
| **SvelteKit 2: `/` prerenderizada, `csr` por defecto** | @sveltejs/kit 2.70.3, svelte 5.57.0, Vite 8.2.2 | 7 | 76,1 KB | **29,6 KB** | 26,7 KB |
| SvelteKit 2: `/sin-js` con `csr = false` | ídem | 0 | 0 | **0** | 0 |
| SvelteKit 2: `/isla` con rejilla 6×6 con runas | ídem | 7 | 76,6 KB | **29,9 KB** | 27,0 KB |

Lecturas que importan para el estudio:

- **La isla es barata en los dos; el suelo es lo caro.** Añadir la rejilla 6×6 cuesta 0,35 KB gzip en Next y 0,27 KB en SvelteKit. Lo que separa a los dos es el suelo: 130-133 KB frente a 29,6 KB (**4,5×**). El estudio compara «40 KB frente a 1,6 KB» y acierta en el sentido, no en las cifras ni en el múltiplo.
- **En Next, las 36 URL pagan el suelo; en SvelteKit, solo las 22 con isla.** Las 14 sin isla pueden llevar `csr = false` y enviar 0 KB. Ese es el argumento correcto contra RSC en este árbol, y el estudio no lo formula así.
- **El presupuesto de §7 del plan de frontend es inalcanzable en Next 16.** `/` a ≤110 KB comprimidos: el suelo de Next es 130 KB gzip (109 KB brotli). Landings a ≤40 KB: imposible con un suelo de 130 KB; en SvelteKit, una landing con vistazo queda en ≈30-33 KB. La regla «si en la semana 4 no se cumple el presupuesto, recortar islas» de D-F1 no podría cumplirse jamás en Next: no habría islas que recortar.
- **Svelte 5 no tiene «runtime de 1,6 KB».** Su runtime de señales y DOM cuesta 9-10 KB gzip hidratado, y el propio equipo lo describe como «larger baseline runtime» que se compensa con componentes más compactos (discusión sveltejs/svelte #11214). Sigue siendo 6× menor que React.

---

## 3. Las seis preguntas del encargo

### 3.1 Tamaños reales en 2026

Respondido en la §2. Resumen: React 19.2 + React DOM cliente **60 KB gzip / 52 KB brotli**; Svelte 5 hidratado **≈10 KB gzip**; «hola mundo» Next 16 App Router **130-133 KB gzip**; «hola mundo» SvelteKit 2 **29,6 KB gzip** (0 con `csr = false`). Para contraste histórico, el único dato con versiones y fecha que circula por la web (jasongitmail/svelte-vs-next, 25/8/2023) daba SvelteKit 1.23 en 25,6 KB gzip con router y Next 13.4 en 131,3 KB gzip: la relación no ha cambiado en tres años. Los artículos de 2026 que el estudio cita (devmorph, dev.to) no publican método ni versiones; no se les debe dar más peso que a la medición del apéndice A.

### 3.2 Coste de análisis e hidratación por KB en Android de gama media

Lo que hay medido y publicado:

- **V8, «The cost of JavaScript in 2019»**: en un Moto G4 ejecutar el JS de Reddit tarda 3-4× más que en un Pixel 3, y más de 6× en un Alcatel 1X; hasta el 30 % del tiempo de carga puede ser ejecución de JS; el análisis es 2× más rápido desde Chrome 60 y el análisis en streaming quitó ~40 % del trabajo de análisis y compilación del hilo principal.
- **Web Almanac 2024 (JavaScript)**: mediana móvil **558 KB de JS transferidos**; TBT p50 **1.208 ms** y tareas largas p50 **2.366 ms** en el laboratorio de HTTP Archive (móvil emulado). Eso implica del orden de **2-4 ms de hilo principal por KB comprimido**, contando ejecución y terceros, no solo análisis. **Almanac 2025 (Page Weight)**: mediana móvil 646 KB de JS; p90 1,9 MB.
- **Alex Russell, «The Performance Inequality Gap, 2026»** (noviembre de 2025): dispositivo P75 = **Samsung Galaxy A24 4G o equivalente**; red P75 9 Mbps / 100 ms RTT; presupuesto ≈**150 KiB de HTML+CSS+fuentes y 300-350 KiB de JS comprimido**; cargas móviles de JS en P50/P75 de 680 KiB / 1,3 MiB.

Contra eso, la frase del estudio («200 KB comprimidos → 300-500 ms de análisis + 150-300 ms de hidratación en un gama media de 2019») procede palabra por palabra de un artículo de Medium («7 Hydration Strategies That Make React 19 Feel Instant») que no cita dispositivo ni medición. Como **análisis** está inflada: V8 lo hace en streaming y en buena parte fuera del hilo principal. Como **coste total de arranque** (analizar, compilar y ejecutar el runtime antes del primer toque) en un Moto G4 es un orden de magnitud plausible, y en el Galaxy A24 de 2026 sería aproximadamente la mitad. **La conclusión del estudio no depende de esa frase:** 100 KB gzip de suelo de más son ≈350 KB sin comprimir que el A24 tiene que procesar antes de que el primer toque en el tablero responda, y eso es lo que pesa en INP y en LCP con red irregular.

### 3.3 ¿De verdad 22 de 36? ¿Y pesan las islas lo que dice el estudio?

**Sí, 22 de 36** (apéndice B): `/`, los seis `/caso/AAAA-MM-DD`, `/archivo`, `/como-jugar`, `/reglas/escena`, las nueve de `/juegos-como-murdoku*`, `/juegos-diarios`, `/juegos-de-detectives`, `/juegos-de-logica`. Sin isla: las cuatro legales, `/legal/marcas`, `/sobre-nosotros`, `/contacto`, `/premium`, `/packs`, `/reglas`, `/una-sola-solucion`, `/erratas`, `/archivo/AAAA-MM` y `/para-imprimir` (PDF descargable; no lleva tablero). El estudio nombra 13 y omite `/para-imprimir`, pero el total cuadra.

Tres correcciones: (a) «las diez oportunidades de §1.3 sin excepción» es falso, son siete (las otras tres son P1); (b) D-011 R2 sube cinco URL con juego a P0 y el recuento del día L es 27 de 41; (c) la fila RR de §4.2 dice «veintiséis», que contradice el propio 22.

**No, las islas no pesan lo que dice el estudio, y el mecanismo es otro.** El estudio razona como si RSC dejara las 14 páginas sin isla a cero JS y cargara el runtime solo en las 22 con isla. En App Router no existe esa opción: toda página hidrata el layout raíz con el runtime completo (discusión #49544; `unstable_runtimeJS` no funciona en `app/`). Medido: `/` sin componente cliente envía 133,1 KB gzip y `/isla` con la rejilla 133,4 KB. Por tanto: en Next, **las 36 pagan 130 KB**; en SvelteKit, las 22 pagan ≈30 KB y las 14 pueden pagar 0. Es un argumento más contundente que el del estudio, y es el que debería figurar en D-F1-bis.

### 3.4 Middleware, edge y la medianoche local (D-011 R4)

Hechos verificados:

- Next 16: «The `edge` runtime is NOT supported in `proxy`. The `proxy` runtime is `nodejs`, and it cannot be configured»; «If you want to continue using the `edge` runtime, keep using `middleware`» (desaprobado). El doc de `proxy` añade: «Setting the `runtime` config option in Proxy will throw an error» y «We recommend users avoid relying on Middleware unless no other options exist». El issue #85344 (octubre de 2025) documenta que las guías se contradecían; se corrigió en la PR #85337.
- Vercel: el Routing Middleware «runs globally before the cache», está «built on top of fluid compute», se despliega «to all regions by default» y «configured with the proxy property runs on the Node.js runtime». Las **Edge Functions están desaprobadas** (junio de 2025); Vercel recomienda Node.js con Fluid compute para todo. Consecuencia que el estudio no menciona: el `runtime: 'edge'` del `adapter-vercel` de SvelteKit descansa sobre esa misma vía desaprobada.
- Cloudflare: OpenNext-Cloudflare soporta «all minor and patch versions of Next.js 16» (1.15.0) y desde la **1.20.3** «Node.js middleware (`proxy.ts`)» dentro del Worker, marcado experimental y con `nodejs_compat`. SvelteKit con `adapter-cloudflare` corre en el Worker sin excepción.
- Zona horaria: Vercel añade **`x-vercel-ip-timezone`** (nombre ICANN, p. ej. `America/Mexico_City`) a las peticiones que llegan a funciones y middleware («does not work if you're using a proxy in front of your deployment»); Cloudflare expone `request.cf.timezone`. El helper `geolocation()` de `@vercel/functions` no la devuelve; hay que leer la cabecera.

Consecuencia para R4: lo que R4 necesita es (1) una pista de zona horaria en la primera petición, (2) elegir el número de caso entre los tres posibles en cada instante, y (3) cachear en el CDN **por URL distinta**, porque ninguna caché de CDN varía por cabecera personalizada; es decir, reescribir `/` a `/_caso/[n]` o equivalente. Eso se hace en Next con `proxy.ts` (Node, antes de la caché) y en SvelteKit con `handle` en `hooks.server.ts`, en Vercel y en Cloudflare. El estudio tiene razón en que Next pierde la etiqueta «edge» en Vercel, y no la tiene en que eso afecte a R4: lo que cambia es la latencia del salto previo a la caché (punto de presencia frente a región: decenas de milisegundos), no la capacidad. Y su propia arquitectura SvelteKit (§6.1: «cachea por franja con `s-maxage`») está incompleta sin la reescritura por URL.

### 3.5 Grano fino de Svelte 5 frente a React con selectores por celda

- **Svelte 5**: cada campo de `$state` es una señal; en un `{#each}` de 36 celdas, tocar `cells[i]` actualiza el texto y la clase de esa celda. Sin memoización ni selectores. Correcto.
- **React**: `useSyncExternalStore` vuelve a renderizar el componente solo «if the store changes and the returned value is different (as compared by `Object.is`)»; con un componente `Celda` envuelto en `memo` y un selector `estado.celdas[i]`, tocar una celda re-renderiza **un** componente y el DOM cambia igual. El React Compiler automatiza la memoización. El sobrecoste residual por toque (ejecutar una función de componente y reconciliar un nodo) son microsegundos.
- **Lo que decide INP en un 6×6 en un Galaxy A24 no es eso**: es el recálculo de estilo y layout de 36 nodos, el arrastre a 60 Hz, la animación de reconstrucción y cualquier script de terceros en el hilo principal. Todo eso es agnóstico del framework, y el plan ya lo trata bien (resaltado por CSS en el contenedor, un solo escuchador, `requestAnimationFrame`).
- **Donde Svelte gana de verdad es en el arranque**: ≈100 KB gzip menos (≈350 KB sin comprimir) que analizar y ejecutar antes de que el primer toque pueda atenderse, y una hidratación más ligera. Es un argumento de LCP/TTI y del primer INP, no del re-render por celda.

No he podido abrir la tabla oficial de js-framework-benchmark (dominio bloqueado); las fuentes secundarias de 2026 sitúan a Svelte 5 a un 5-10 % de vanilla y a React 19 en torno a 1,4-1,6×, pero esas diferencias en tablas de 1.000 filas no se trasladan a 36 celdas. **Veredicto de la pregunta:** con React y selectores por celda es equivalente en la práctica por toque; el estudio tiene razón en que exige disciplina que Svelte no exige, y se equivoca al decir que el riesgo «baja de categoría por construcción».

### 3.6 Service worker: `$service-worker` frente a Serwist/Workbox, y Safari

- **SvelteKit**: si existe `src/service-worker.js`, se compila y se registra automáticamente (`navigator.serviceWorker.register` en el evento `load`). `$service-worker` exporta `build`, `files`, `prerendered`, `version` y `base`. El ejemplo oficial tiene tres escuchadores (`install`, `activate`, `fetch`) y **no** llama a `skipWaiting()` ni a `clients.claim()`: el SW nuevo espera a que se cierren las pestañas. La doc advierte: «stale data might be worse than data that's unavailable while offline» y remite a Workbox o al plugin Vite PWA para lo demás. Es decir, la regla de R5 («el worker nuevo no toma el control durante una partida») **es el comportamiento por defecto** de la receta de SvelteKit.
- **Serwist 9.5.12**: la clase `Serwist` inicializa `skipWaiting = false` y documenta `clientsClaim` con `@default false`; si `skipWaiting` es falso, escucha el mensaje `{ type: "SKIP_WAITING" }`. **Pero** el ejemplo oficial de `@serwist/next` (`examples/next-basic/app/sw.ts`) trae `skipWaiting: true, clientsClaim: true, navigationPreload: true` con `defaultCache`. Esa es la «receta» que el estudio teme, y es cierta para Serwist en Next; corregirla son dos claves.
- **Workbox 7.4.1** (`generateSW`): `skipWaiting` «@default false» («a `message` listener will be added instead»). **vite-plugin-pwa 1.3.0**: `registerType` «@default 'prompt'» (`autoUpdate` es opcional y es el que recarga las pestañas). La frase del estudio «las recetas de Workbox son precisamente las que causan el bug» es falsa para Workbox y para vite-pwa.
- **Qué rompe de verdad una partida.** Que un SW nuevo tome el control no recarga la página; cambia quién sirve las peticiones siguientes. La partida se rompe cuando la página vieja pide un chunk diferido (reconstrucción, compartir) que el despliegue nuevo ya no tiene, el navegador falla y el framework recarga: **SvelteKit** documenta que «if SvelteKit encounters an error while loading the page and detects that a new version has been deployed… it will fall back to traditional full-page navigation» (`kit.version`, `pollInterval` `@default 0`); Next hace lo equivalente ante un `ChunkLoadError`. Por eso R5 se resuelve con **persistencia por acción** (F-17), un SW que **espera** y un precaché que conserva los activos con hash del despliegue anterior durante horas. Nada de eso depende del framework.
- **Safari iOS**: WebKit (ITP, Safari 13.1 / iOS 13.4) borra «all of a website's script-writable storage after seven days of Safari use without user interaction on the site», incluidos «Service Worker registrations»; «Web applications added to the home screen are not part of Safari and thus have their own counter of days of use». Consecuencias, iguales para los dos frameworks: para el usuario de Safari **no instalado** que no vuelve en siete días de uso de Safari, desaparecen el SW, el caso de mañana precacheado y la partida guardada; el aviso de instalación (F-46) es también la mitigación de esto; y `navigator.storage.persist()` no está documentado por WebKit como exención (no he podido verificar el bug 209563). La nota de C3 (9 frente a 6) mide ergonomía, no R5 ni Safari.

---

## 4. Condiciones para aceptar la recomendación

1. **Corregir las cifras del estudio antes de registrar D-F1-bis** (§0, §3, §4.2 C1, §9): React 60 KB gzip; Svelte ≈10 KB hidratado; Next 16 suelo 130 KB gzip / 109 KB brotli; SvelteKit suelo 29,6 KB gzip y 0 con `csr = false`; 22 de 36 y 27 de 41 con Expediente; siete de diez oportunidades; y sustituir el argumento «RSC solo ayuda en 14» por «en Next las 36 pagan el suelo; en SvelteKit, 22 pagan 30 KB y 14 pagan 0».
2. **Reescribir el presupuesto de `plan-frontend.md` §7 con suelos medidos**, no con techos supuestos: `/` ≤ 60 KB gzip (suelo 30 + tablero + estado + cronómetro); landing con vistazo ≤ 40 KB gzip; las 14 páginas sin isla con `csr = false` y **0 KB** como prueba de CI; HTML de `/` ≤ 45 KB se mantiene. La puerta de CI debe sumar el gzip de los ficheros que referencia el HTML de cada ruta (como en el apéndice A), porque `next build` ya no imprime tamaños y Vite tampoco los da por ruta.
3. **La prueba 1 de la compuerta de §10 se mide, no se observa**: en un Galaxy A24 4G o equivalente (P75 de 2026 según Russell), INP p75 < 200 ms con `web-vitals` sobre 50 toques y un arrastre, y JS de `/` ≤ 50 KB gzip. «Tocar una celda actualiza un nodo» no es criterio: en React memoizado también.
4. **Service worker con la regla de R5 escrita como en la doc de SvelteKit**: sin `skipWaiting` en `install`; `SKIP_WAITING` solo tras `PARTIDA_INACTIVA`; persistir el estado del tablero en cada acción (IndexedDB con esquema versionado) porque **los dos frameworks recargan** ante un chunk desaparecido; conservar en precaché los activos con hash del despliegue anterior ≥ 24 h; el test de Playwright «partida a medias → despliegue → recarga» tal como está. Si se opta por Serwist, `skipWaiting: false` y `clientsClaim: false` explícitos, contra su ejemplo.
5. **Decidir el CDN antes de diseñar R4, y diseñarlo sin la palabra «edge»**: en Vercel, `handle` lee `x-vercel-ip-timezone` y reescribe a `/_caso/[n]`; en Cloudflare, `cf.timezone`; en los dos, la caché se hace por URL, nunca por cabecera. Si «edge» de verdad importara, la respuesta sería Cloudflare, donde Next 16 con `proxy.ts` también corre en el Worker (OpenNext 1.20.3, experimental): no es un motivo de framework.
6. **Fijar las versiones actuales, no las del estudio**: `@sveltejs/kit` 2.70.x y `svelte` 5.57.x (el estudio cita 2.57.1 y 5.55.0), con la instantánea de `llms.txt` de SvelteKit 2 en el repositorio, como ya propone.
7. **Dejar por escrito que R2 y R5 siguen siendo riesgos de diseño**, no propiedades del framework, y mantener la compuerta de reversión de §10 tal cual: la recomendación se acepta por bytes y por simplicidad, no por «resuelto por construcción».
8. **Safari**: añadir a R1 que la caducidad afecta también al SW y al caso precacheado, y que la instalación en pantalla de inicio es la única exención documentada. Vale igual con cualquier framework; conviene que el plan lo diga.

---

## 5. Fuentes

Consultadas el 7 de septiembre de 2026. Cuando el dominio oficial estaba bloqueado, se indica el espejo leído.

**Next.js 16, proxy y Vercel**
- Guía de migración a la 16 (espejo del repositorio): [`docs/01-app/02-guides/upgrading/version-16.mdx`](https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/upgrading/version-16.mdx) · Referencia de `proxy`: [`proxy.mdx`](https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/proxy.mdx) · Inconsistencia de runtime en docs: [issue #85344](https://github.com/vercel/next.js/issues/85344)
- Cero JS en `app/` no es posible: [discusión #49544](https://github.com/vercel/next.js/discussions/49544) · Qué incluye «First Load JS»: [discusión #19326](https://github.com/vercel/next.js/discussions/19326) · Región de middleware: [discusión #78171](https://github.com/vercel/next.js/discussions/78171)
- Vercel: [Routing Middleware](https://vercel.com/docs/routing-middleware) · [Edge Functions (Deprecated)](https://vercel.com/docs/functions/runtimes/edge/edge-functions.rsc) · [Edge Middleware and Edge Functions are now powered by Vercel Functions](https://vercel.com/changelog/edge-middleware-and-edge-functions-are-now-powered-by-vercel-functions) · [Request headers (`x-vercel-ip-timezone`)](https://vercel.com/docs/headers/request-headers) · [Enhanced geolocation information](https://vercel.com/changelog/enhanced-geolocation-information-available-for-vercel-functions)
- OpenNext Cloudflare: [docs `pages/cloudflare/index.mdx`](https://github.com/opennextjs/docs/blob/main/pages/cloudflare/index.mdx) · [CHANGELOG (1.15.0 «Next 16 is now supported»; 1.20.3 «support Node.js middleware (`proxy.ts`)»)](https://github.com/opennextjs/opennextjs-cloudflare/blob/main/packages/cloudflare/CHANGELOG.md)

**SvelteKit y Svelte 5**
- [Service workers (`40-service-workers.md`)](https://github.com/sveltejs/kit/blob/main/documentation/docs/30-advanced/40-service-workers.md) · [Page options (`40-page-options.md`)](https://github.com/sveltejs/kit/blob/main/documentation/docs/20-core-concepts/40-page-options.md) · Gestión de versiones (`kit.version`, `pollInterval`): JSDoc de `@sveltejs/kit` 2.70.3 (`types/index.d.ts`) · [Svelte 5 bundle size news? (discusión #11214)](https://github.com/sveltejs/svelte/discussions/11214)
- Dato histórico con método: [jasongitmail/svelte-vs-next (25/8/2023)](https://github.com/jasongitmail/svelte-vs-next)

**React**
- [`useSyncExternalStore` (espejo `reactjs/react.dev`)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useSyncExternalStore.md) · Tamaño de react-dom 19: [facebook/react #29913](https://github.com/facebook/react/issues/29913) · [pastelsky/bundlephobia #911](https://github.com/pastelsky/bundlephobia/issues/911)

**Coste del JavaScript y dispositivos**
- [The cost of JavaScript in 2019 (espejo `v8/v8.dev`)](https://github.com/v8/v8.dev/blob/main/src/blog/cost-of-javascript-2019.md)
- Web Almanac: [JavaScript 2024](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/content/en/2024/javascript.md) · [Page Weight 2025](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/content/en/2025/page-weight.md)
- [The Performance Inequality Gap, 2026 (Alex Russell)](https://infrequently.org/2025/11/performance-inequality-gap-2026/) (leído a través de resúmenes; dominio bloqueado)
- Origen de la frase «300-500 ms»: [7 Hydration Strategies That Make React 19 Feel Instant (Medium)](https://medium.com/@bhagyarana80/7-hydration-strategies-that-make-react-19-feel-instant-a80aec44e2ff) (no abierto; fragmento indexado sin medición)

**Service workers y Safari**
- Ejemplo oficial de `@serwist/next`: [`examples/next-basic/app/sw.ts`](https://github.com/serwist/serwist/blob/main/examples/next-basic/app/sw.ts) · Defaults leídos en los paquetes instalados: `serwist` 9.5.12 (`skipWaiting = false`, `clientsClaim` `@default false`), `workbox-build` 7.4.1 (`skipWaiting` `@default false`), `vite-plugin-pwa` 1.3.0 (`registerType` `@default 'prompt'`)
- WebKit, [Full Third-Party Cookie Blocking and More](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/) (citado a través de [near/near-wallet #479](https://github.com/near/near-wallet/issues/479); dominio bloqueado)

---

## Apéndice A · Reproducción de las mediciones

Entorno: Node 22.22.2, npm 10.9.7, 7/9/2026. Se suman gzip(-9) y brotli(11) con `zlib` de Node sobre cada `.js` referenciado por el HTML de la ruta.

```bash
# React 19 (esbuild, producción)
npm i react@latest react-dom@latest esbuild@latest
# hello.jsx: import { hydrateRoot } from 'react-dom/client'; hydrateRoot(document.getElementById('app'), <p>hola</p>);
npx esbuild hello.jsx --bundle --minify --jsx=automatic --define:process.env.NODE_ENV=\"production\" --outfile=hello.min.js

# Svelte 5 (Vite)
npm i vite@latest svelte@latest @sveltejs/vite-plugin-svelte@latest
# App.svelte: <p>hola</p> · main.js: import { hydrate } from 'svelte'; hydrate(App, { target: document.getElementById('app') });
npx vite build   # con build.modulePreload.polyfill = false

# Next 16 App Router
npx create-next-app@latest next-hello --ts --app --src-dir --no-tailwind --no-eslint --no-import-alias --use-npm --disable-git --yes
# page.tsx: export default function Page(){ return <p>hola</p>; }   (y /isla con un componente 'use client' de 36 celdas)
npx next build            # Turbopack;  npx next build --webpack  para la segunda cifra
# JS enviado: todos los /_next/static/...js referenciados por .next/server/app/index.html, excluyendo el <script noModule> (polyfill)

# SvelteKit 2
npx sv@latest create sveltekit-hello --template minimal --types ts --no-add-ons --install npm
# +page.ts: export const prerender = true;   (/sin-js añade export const csr = false)
npm run build
# JS enviado: todos los _app/immutable/...js referenciados por .svelte-kit/output/prerendered/pages/index.html
```

## Apéndice B · Recuento de islas en las 36 URL P0 (`arbol-web-final.md` §1.1 y §2)

| Bloque (§1.1) | URL | ¿Lleva juego («Juega:» en §2)? |
|---|---|---|
| Raíz y archivo (9) | `/` | Sí: caso del día |
| | `/caso/AAAA-MM-DD` ×6 | Sí: el caso de ese día |
| | `/archivo` | Sí: un caso jugable del mes anterior |
| | `/archivo/AAAA-MM` | No |
| Aprender y confianza (5) | `/como-jugar` | Sí: tutorial 3×3 |
| | `/reglas` | No |
| | `/reglas/escena` | Sí: vistazo 3×3 |
| | `/una-sola-solucion` | No |
| | `/erratas` | No |
| Marca ajena (9) | `/juegos-como-murdoku` y sus 8 hijas | Sí, las nueve (§3.4: «un caso jugable completo por encima del pliegue») |
| Categoría propia e imprimibles (5) | `/juegos-diarios`, `/juegos-de-detectives`, `/juegos-de-logica` | Sí |
| | `/para-imprimir` | No: PDF y hoja en blanco descargables, sin tablero |
| | `/packs` | No |
| Marca, negocio y legal (8) | `/sobre-nosotros`, `/premium`, `/contacto`, `/legal/marcas`, 4 legales | No |
| **Total** | **36** | **22 con juego · 14 sin** |

Con D-011 R2 (Expediente el día L) entran `/expediente`, `/reglas/expediente`, `/juegos-como-murdle`, `/dias/la-tabla-del-comisario` y `/archivo/modo/expediente`, las cinco con juego: **27 de 41**.
