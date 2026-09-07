# Estudio de stack · Framework y capa de presentación

Autor: `desarrollador-frontend`. Fecha: 7 de septiembre de 2026 (S1, día 1).
Encargo: estudio en profundidad antes de decidir. Sustituye la parte de framework de **D-F1** (`docs/roadmap/plan-frontend.md` §1) si el fundador aprueba la recomendación de la §9.

**Documentos que este estudio obedece:** `docs/contexto-proyecto.md`, `docs/arbol-web-final.md` §2, §4 y §6, `docs/propuesta-jugabilidad.md`, `docs/roadmap/plan-frontend.md` §7 y §8, `docs/roadmap/plan-backend.md` §1 y §2, `docs/decisiones.md` (D-007, D-009, **D-011**).

> **Aviso D-006 (registro de marca), comprobado hoy.** Ninguno de los cinco disparadores se ha cumplido con este documento: es interno, técnico y no público. El expediente de la OEPM sigue programado por calendario para el **viernes 30 de octubre** (D-011/R5). No procede adelantar nada por este estudio.

---

## 0. Veredicto en catorce líneas

**Cambio de recomendación: SvelteKit 2 + Svelte 5, no Next.js 16.** La matriz da 8,23 frente a 6,99 sobre 10 con los pesos declarados en la §2.

El motivo no es la moda ni el tamaño del *hello world*. Es que **D-F1 contenía un error de análisis que este estudio ha encontrado**: su razón 2 decía que los Componentes de Servidor de React dejan el tablero como única isla hidratada y que el resto de la página no cuesta JavaScript. Es cierto en abstracto, pero **en este árbol web no hay páginas sin isla en el tramo que trae el tráfico**. Contando las 36 URL P0 de `arbol-web-final.md` §2 una por una, **veintidós llevan tablero, vistazo o tutorial jugable** —entre ellas las nueve de la rama Murdoku, los tres hubs de categoría, `/`, los seis casos del archivo y `/como-jugar`, es decir, **las diez oportunidades de la §1.3 sin excepción**— y catorce no llevan nada: las cuatro legales, `/legal/marcas`, `/sobre-nosotros`, `/contacto`, `/premium`, `/packs`, `/reglas`, `/una-sola-solucion`, `/erratas` y los meses del archivo. La ventaja estructural de RSC se aplica a catorce URL sin volumen de búsqueda propio; el peaje de 40 KB comprimidos del runtime de React se aplica a las veintidós que traen el tráfico. Eso invierte el argumento con el que se eligió Next.

A eso se suman dos cosas que cambiaron **después** de escribir D-F1, las dos de D-011: **R4** convirtió `/` de estático anclado a Madrid en resuelto por número de caso en el borde, que es exactamente el modo donde Next 16 ha retrocedido (`proxy.ts` corre solo en Node, sin *edge*); y **R2** metió Expediente en el lanzamiento, es decir, más pantallas de cliente sobre el mismo presupuesto de bytes.

**Lo que se pierde con el cambio, dicho sin adornos:** el ecosistema más grande, el corpus de ejemplos más seguro para un agente y `next/og` regalado. Son ~3 días de agente de fontanería que Next daba hecha. **Lo que se gana:** el presupuesto de §7 deja de estar en el techo del framework, los dos riesgos técnicos de mayor daño del plan (R2 rendimiento del 6×6, R5 el service worker que rompe la partida) bajan de categoría por construcción, y la portabilidad de hosting pasa de «con peaje» a «una línea de configuración».

**El cambio hoy cuesta cero líneas de código** (no existe `web/`) y **no rompe ningún contrato de backend**: C1-C9 son HTTP y tipos `zod`, agnósticos del framework. Va con compuerta de reversión escrita en la §10: si la prueba de 1,5 días de S1 no sale verde, se vuelve a Next 16 sin haber perdido nada más que esos 1,5 días.

---

## 1. Cómo se ha hecho este estudio, y qué es dato y qué es juicio

**Datos de septiembre de 2026** obtenidos con búsqueda web durante la redacción (versiones, tamaños, soporte y cambios recientes). Cada uno va con su fuente en la §11. `WebFetch` está bloqueado en casi todo, así que no hay medición propia: **no he ejecutado ningún banco de pruebas**. Los tamaños de paquete son los publicados por terceros y por los propios proyectos, y los trato como órdenes de magnitud, no como cifras exactas.

**Lo que es juicio y lo digo:** las puntuaciones de los criterios 4 (productividad de agentes), 7 (complejidad) y 8 (futuro) no tienen dato duro detrás. Son mi criterio profesional aplicado a este producto concreto, y en el criterio 4 el juicio es especialmente incómodo porque **soy yo el que va a escribir el código**: tengo un sesgo obvio a decir que escribo bien cualquier cosa. He intentado corregirlo puntuando ahí a favor de Next.

**Lo que no he hecho y hay que saber:** no he medido INP real en un Moto G. Eso solo se puede hacer con el tablero construido, y por eso la §10 propone construirlo en 1,5 días antes de cerrar la decisión.

---

## 2. Los ocho criterios y sus pesos

Los pesos suman 100 y se fijan **antes** de puntuar, con la justificación de por qué ese peso y no otro.

| # | Criterio | Peso | Por qué ese peso |
|---:|---|---:|---|
| **C1** | Rendimiento móvil real del tablero 6×6 en Android de gama media (JS enviado, hidratación, INP) | **20** | El producto **es** el tablero, se juega en móvil con red irregular y LCP < 2,5 s / INP < 200 ms son **puertas de CI** (`plan-frontend.md` §7), no aspiraciones. R2 es riesgo de daño alto |
| **C2** | SSR/SSG/ISR para 36 landings y GEO: HTML completo sin JS, datos estructurados, OG dinámica sin *spoiler* | **18** | El 75 % de la demanda del día 1 llega por SEO de marca ajena y la estrategia GEO es el segundo canal. Una landing que no responde a `curl` con enunciado y pistas **no existe** para el canal de adquisición |
| **C4** | Productividad de agentes de IA escribiendo y manteniendo el código | **16** | D-009 dice que el cómputo no es la restricción, pero el **calendario sí**: 54 días de agente, día L el 3 de noviembre y el límite duro es el 12 de enero de 2027. Un framework que cuesta un 20 % más de días de agente es riesgo de fecha |
| **C3** | PWA y service worker: caché del caso de hoy y de mañana, actualización que no rompe partida, Safari iOS | **14** | `/juegos-como-murdoku/sin-descargar` es una landing P0 que **vende** la instalación en dos toques frente a una app de 2,36/5. R5 (el SW rompe la partida) es la única fila del plan con daño «muy alto» junto a R1 |
| **C5** | Ecosistema: UI accesible, i18n, animación de la reconstrucción, tests | **12** | WCAG 2.2 AA es compromiso de producto y requisito B2B, y la reconstrucción animada es la firma B. Pero casi todo el ecosistema crítico (Vitest, Playwright, axe, Lighthouse, PostHog, Sentry) es agnóstico del framework, y eso baja el peso |
| **C6** | Coste y dependencia del hosting: ¿funciona igual fuera de Vercel? | **8** | El presupuesto de backend es < 100 €/mes hasta 50.000 usuarios y Vercel Pro (20 $) ya está presupuestado. A esta escala el coste es pequeño: lo que se pesa aquí es **poder irse**, no lo que se paga hoy |
| **C7** | Curva de complejidad y riesgo de sobre-ingeniería para un producto de este tamaño | **7** | Son 36 páginas y un tablero. Todo lo que sea maquinaria que no se usa es superficie de error, pero es un coste difuso, no un bloqueo |
| **C8** | Futuro: envoltorio Capacitor, widget embebible para medios, i18n es-AR/es-MX | **5** | Los tres están en el catálogo (`LIBRO-LICENCIA`, `/para-medios`, D-011/R4 y `arbol-web-final.md` §5.2) pero ninguno es del año 1. Se pesa poco a propósito: decidir hoy por un futuro que puede no llegar es el error clásico |

**Lo que deliberadamente no es criterio:** «lo que usa más gente», «lo que pide el mercado laboral» y «lo que sabe el equipo». No hay equipo humano de frontend: hay agentes, y eso está dentro de C4.

---

## 3. Estado real de cada opción en septiembre de 2026

Antes de puntuar, los hechos. Varios cambian el enunciado del encargo.

| Opción | Versión y estado hoy | Lo que hay que saber |
|---|---|---|
| **Next.js 16** App Router | 16.2.x; la 16 salió en octubre de 2025, la 16.2.6 el 7/5/2026 con 13 avisos de seguridad en una sola versión | Turbopack por defecto; el caché implícito se sustituye por **Cache Components** (`use cache`, `cacheLife`, `cacheTag`), que es el mayor cambio de modelo mental de la historia del framework; **`middleware.ts` → `proxy.ts`, que corre solo en Node y no admite *edge*** |
| **SvelteKit 2 + Svelte 5** | SvelteKit 2.57.1 / Svelte 5.55.0 estables; **SvelteKit 3 en RC desde agosto de 2026** | Runtime de Svelte 5 ≈ **1,6 KB comprimido**; runas con reactividad de grano fino; *remote functions* estabilizadas en 5.49-5.55. SvelteKit 3 trae rupturas (`$lib` → `#lib`, config aplanada) con migración automática `sv migrate` |
| **Astro** | **Astro 6 (marzo de 2026)**, no Astro 5: el enunciado del encargo se ha quedado una versión atrás | Islas con React, Svelte, Solid, Vue o Preact en el mismo proyecto; *server islands*; **Cloudflare compró el equipo de Astro el 16 de enero de 2026** y se comprometió a mantenerlo abierto |
| **React Router 7** (modo framework) | v7 desde noviembre de 2024; Remix v2 fusionado dentro como «framework mode» | **Remix 3 sigue en beta a mediados de 2026 y ya no está construido sobre React**: modelo de componentes propio inspirado en Preact. El nombre «Remix» apunta hoy a tres cosas distintas |
| **Nuxt 4** | 4.5.1; **Nuxt 3 llegó a fin de vida el 31 de julio de 2026** | Vite 8, Rspack 2, *streaming* SSR experimental. Nitro da reglas de ruta por patrón (`prerender`, `isr`, `swr`, `ssr:false`) en un solo bloque |
| **SolidStart** | **v2 estable**; exige Node 24 y Vite 8 | Sustituye Vinxi por la Environment API de Vite. Señales de grano fino: el modelo teóricamente óptimo para una rejilla de 36 celdas |
| **Qwik City** | Qwik 2 centrado en abaratar el coste de la resumibilidad y del HTML que codifica los escuchadores | **672 sitios detectados en julio de 2026.** La adopción no ha acompañado a la ambición de la arquitectura |
| **Vite + React SPA + prerender** | Vike (ex `vite-plugin-ssr`) o `vite-react-ssg`; `prerender-spa-plugin` y Rendertron están archivados | Prerenderizado en `vite build`; sin servidor en ejecución no hay SSR ni ISR |

**Consecuencia del cuadro para el encargo:** «Astro 5» hoy es Astro 6; «Remix» hoy no es una opción única sino tres; y Next 16 no es Next 15 con más cosas, es otro modelo de caché.

---

## 4. Matriz de puntuación

Escala 0-10 por celda. **NX** Next.js 16 · **SK** SvelteKit 2+Svelte 5 · **AS** Astro 6 + islas Svelte · **RR** React Router 7 · **NU** Nuxt 4 · **SO** SolidStart 2 · **QW** Qwik City 2 · **VI** Vite+React SPA prerenderizado.

### 4.1 Resumen

| Criterio | Peso | NX | SK | AS | RR | NU | SO | QW | VI |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| C1 Rendimiento del tablero en gama media | 20 | 6 | **9** | 8 | 5 | 6 | **9** | 6 | 4 |
| C2 SSR/SSG/ISR, 36 landings y GEO | 18 | **9** | 8 | **9** | 6 | **9** | 6 | 5 | 3 |
| C3 PWA y service worker | 14 | 6 | **9** | 6 | 7 | 8 | 6 | 4 | **9** |
| C4 Productividad de agentes de IA | 16 | **7** | 6 | **7** | 4 | 6 | 4 | 3 | **7** |
| C5 Ecosistema | 12 | **10** | 8 | 8 | 9 | 9 | 6 | 4 | 8 |
| C6 Coste y dependencia del hosting | 8 | 6 | **10** | 9 | 8 | **10** | 8 | 8 | 9 |
| C7 Complejidad y sobre-ingeniería | 7 | 4 | **8** | 7 | 6 | 6 | 6 | 3 | 5 |
| C8 Futuro (Capacitor, widget, i18n) | 5 | 5 | **9** | 8 | 6 | 7 | 7 | 5 | 7 |
| **Total ponderado sobre 10** | 100 | **6,99** | **8,23** | **7,75** | **6,14** | **7,55** | **6,49** | **4,72** | **6,10** |

Orden: **SvelteKit 8,23 · Astro 7,75 · Nuxt 7,55 · Next 6,99 · SolidStart 6,49 · React Router 6,14 · Vite SPA 6,10 · Qwik 4,72.**

Dos avisos sobre esta tabla. **Uno:** la distancia entre el primero y el cuarto es de 1,24 puntos sobre 10; es una diferencia real pero no es una goleada, y cambiar dos pesos la estrecha. **Dos:** los tres primeros son elegibles; los cinco últimos no lo son por motivos que la §5 explica y que no dependen de los pesos.

### 4.2 C1 · Rendimiento del tablero 6×6 en Android de gama media (peso 20)

Contexto medido: en 2026 «gama media» equivale a una CPU 6× más lenta que la de referencia; el INP p75 móvil (131 ms) es 2,8 veces peor que el de escritorio; **analizar 200 KB de JS comprimido cuesta 300-500 ms en ese teléfono y la hidratación de una página moderadamente compleja otros 150-300 ms**.

| | Nota | Justificación |
|---|---:|---|
| **NX** | 6 | El runtime de React son ~40 KB comprimidos antes de escribir una línea y el primer paquete real ronda 70 KB en lo mínimo y 120-300 KB con RSC; el presupuesto de §7 (≤110 KB) está fijado **en el techo del framework**, no con holgura |
| **SK** | **9** | Runtime de 1,6 KB comprimidos y SPA mínima medida en 18 KB frente a 70 KB del equivalente Next; la reactividad de grano fino de las runas actualiza el nodo de la celda tocada sin difundir por un árbol, que es exactamente lo que pide R2 |
| **AS** | 8 | Las páginas de contenido salen con **cero** JS por defecto y la isla del tablero paga lo mismo que en SvelteKit, pero cada navegación entre `/`, `/racha` y `/resultado` es un documento nuevo y la isla se reconstruye |
| **RR** | 5 | Runtime de React sin el ahorro de RSC: hidrata la página entera, así que las veintiséis landings con isla pagan React **más** el marcado de la landing |
| **NU** | 6 | Vue 3 son ~35 KB comprimidos y la reactividad por proxy es buena, pero el re-render sigue siendo por componente y el modo Vapor no es el predeterminado |
| **SO** | **9** | Las señales de Solid son el modelo teóricamente óptimo para 36 celdas independientes: la celda se actualiza sin que se vuelva a ejecutar ningún componente, con ~7 KB de runtime |
| **QW** | 6 | El mejor LCP posible porque no hidrata, pero **la primera pulsación descarga un fragmento por la red**, y «red irregular» es literalmente la condición de este producto: cambia un problema de CPU por uno de latencia |
| **VI** | 4 | Hidrata todo y arrastra el enrutador y el código de todas las rutas salvo con una disciplina de división que nadie mantiene a lo largo de 54 días |

### 4.3 C2 · SSR/SSG/ISR para 36 landings y GEO (peso 18)

Exigencias concretas: cinco modos de renderizado en un proyecto (SSG, `/` resuelta por número de caso, ISR para el archivo, SSR para `/r/[id]`, CSR+noindex para cuenta); `curl` con enunciado y pistas; **un solo bloque JSON-LD por página validado en CI**; OG del caso del día sin *spoiler*; canónicas absolutas, `hreflang`, cuatro sitemaps, 301 de variantes.

| | Nota | Justificación |
|---|---:|---|
| **NX** | **9** | Es su terreno: renderizado por ruta, `generateMetadata`, `sitemap.ts`, `robots.ts`, ISR con `revalidateTag` y `next/og` (satori) en el mismo repositorio sin servicio aparte |
| **SK** | 8 | Tiene los cinco modos con tres banderas por ruta (`prerender`, `ssr`, `csr`) y es el modelo más simple de todos, pero la OG con satori, el sitemap y `robots.txt` se escriben a mano: **≈1,5 días que Next regala** |
| **AS** | **9** | La mejor garantía de «HTML sin JS» del conjunto porque el cero JavaScript es el valor por defecto y no una disciplina; `@astrojs/sitemap`, i18n de enrutado y control de prerenderizado por ruta vienen dentro |
| **RR** | 6 | SSR y prerenderizado sí; **ISR no es una primitiva**, se emula con cabeceras de caché, y los metadatos y la OG se montan a mano |
| **NU** | **9** | Las reglas de ruta de Nitro expresan la matriz de cinco modos en un solo bloque de configuración, que es la forma más limpia de todo el estudio, y `nuxt-og-image` y `@nuxtjs/seo` cubren OG, sitemap y schema |
| **SO** | 6 | SSR y prerenderizado correctos, sin primitiva de ISR y con `@solidjs/meta` como única ayuda: todo lo de SEO se escribe |
| **QW** | 5 | SSG y SSR sí; el resto —ISR, sitemaps, OG, JSON-LD— es trabajo propio en el ecosistema con menos ejemplos del conjunto |
| **VI** | 3 | **Es el descarte técnico del estudio en este criterio:** `/` se resuelve por número de caso en cada petición (D-011/R4), el archivo crece un caso al día y `/r/[id]` es SSR por C8 de backend; nada de eso se prerenderiza sin reconstruir el sitio entero cada noche |

### 4.4 C3 · PWA y service worker (peso 14)

Lo difícil es igual en todos: disciplina de `skipWaiting`, esquema de persistencia versionado y la regla de R5 («el worker nuevo no toma el control durante una partida»). Lo que cambia es la integración de construcción y si la receta por defecto de la herramienta **induce** el bug de R5.

| | Nota | Justificación |
|---|---:|---|
| **NX** | 6 | `@serwist/next` es el camino mantenido (`next-pwa` está muerto), pero la salida del App Router —cargas útiles de RSC, `/_next/data`, *streaming*— es la menos amable con un SW, y el fallo típico es servir un HTML nuevo con una carga de RSC vieja |
| **SK** | **9** | SvelteKit expone `$service-worker` con las listas exactas de `build`, `files`, `prerendered` y `version`: son ~40 líneas propias sin Workbox y con control total del momento de tomar el control, que es precisamente lo que R5 exige. Serwist además tiene integración de primera para SvelteKit |
| **AS** | 6 | `@vite-pwa/astro` funciona y es cero configuración, pero **Serwist todavía no tiene integración de Astro** y montar una concha de aplicación sobre un modelo multipágina obliga a que el SW sirva cada navegación como documento |
| **RR** | 7 | Base Vite, `vite-plugin-pwa` correcto y modelo híbrido SPA/SSR que encaja bien con una concha de aplicación |
| **NU** | 8 | `@vite-pwa/nuxt` es maduro y documentado, y Serwist también tiene integración de Nuxt |
| **SO** | 6 | `vite-plugin-pwa` funciona; el problema es la escasez de ejemplos para el caso difícil, que es la actualización sin romper partida |
| **QW** | 4 | Qwik ya trae **su propio** service worker para precargar fragmentos; añadir encima uno de *offline* pone dos responsabilidades en el mismo sitio |
| **VI** | **9** | Una SPA pura es el caso más fácil que existe para `vite-plugin-pwa`: una concha, unos activos, sin cargas útiles de servidor que sincronizar |

### 4.5 C4 · Productividad de agentes de IA (peso 16)

Lo que decide este criterio a lo largo de 54 días no es el volumen de ejemplos: es **cuántas veces el agente produce código que compila, arranca y está mal**. Un error de sintaxis cuesta un reintento; un error de caché sirve el caso de ayer a media España.

| | Nota | Justificación |
|---|---:|---|
| **NX** | **7** | El corpus más grande con diferencia y ejemplos de primera para Radix, Sentry, PostHog y satori, **pero** la mayor parte de ese corpus es Next 13-15 con caché implícito: un agente escribe `unstable_cache`, `revalidate` de segmento y `middleware.ts` con naturalidad y en Next 16 eso falla **en silencio** |
| **SK** | 6 | Corpus menor y contaminado por la sintaxis de Svelte 4 (`export let`, `$:`), **pero el compilador rechaza casi todo lo obsoleto en vez de ejecutarlo mal**, y `svelte-llm` sirve documentación en formato `llms.txt` y por MCP actualizada cada hora, que es la mitigación exacta de este problema |
| **AS** | **7** | La superficie propia de Astro es pequeña y muy estable (frontmatter y directivas `client:*`) y los agentes aciertan mucho con ella; lo que se les da mal es el estado compartido **entre** islas, que aquí sería el cronómetro y el historial |
| **RR** | 4 | El peor caso del estudio: el corpus mezcla Remix v1, Remix v2, RR6, RR7 declarativo, RR7 de datos, RR7 framework y Remix 3 —que ya no es React— con nombres solapados. Un agente no puede desambiguar eso de forma fiable |
| **NU** | 6 | Documentación excelente y convenciones estables, pero las importaciones automáticas son justo lo que un agente gestiona peor (añade importaciones que chocan u omite las que no ve) y Nuxt 3 en fin de vida sesga el corpus hacia la versión anterior |
| **SO** | 4 | Las reglas de reactividad de Solid (no desestructurar props, no leer señales fuera del ámbito rastreado) son precisamente las que un agente rompe, y el fallo es **silencioso**: un valor que deja de actualizarse |
| **QW** | 3 | Corpus mínimo y la frontera `$` impone restricciones de serialización cuyos fallos aparecen en ejecución y en producción |
| **VI** | **7** | React liso es lo que un agente escribe con más fiabilidad de todo el estudio; el problema es que después hay que escribir a mano el enrutado, el prerenderizado, los metadatos y el sitemap, y **la infraestructura escrita a mano es lo que se pudre** |

### 4.6 C5 · Ecosistema (peso 12)

| | Nota | Justificación |
|---|---:|---|
| **NX** | **10** | Radix (ya elegido en D-F1), shadcn, react-aria, Motion, `next-intl`, y todas las herramientas de prueba del plan con ejemplos de primera |
| **SK** | 8 | Bits UI sobre Melt UI cubre diálogo, hoja, acordeón, pestañas, popover e interruptor con el modelo mental de Radix; Paraglide compila los mensajes y elimina por sacudida los idiomas no usados; y **`svelte/transition` y `svelte/motion` vienen dentro, así que la reconstrucción no necesita librería de animación**, que son 5-22 KB menos |
| **AS** | 8 | Hereda el ecosistema de la isla que elijas, e i18n de enrutado propio; el coste es que la pregunta «qué librería de interfaz» se multiplica por cada framework de isla |
| **RR** | 9 | Ecosistema React completo, con menos piezas integradas por el framework que en Next |
| **NU** | 9 | Reka UI es el equivalente de Radix para Vue, `@nuxtjs/i18n` es de los mejores del mercado y el catálogo de módulos es el más ordenado del estudio |
| **SO** | 6 | Kobalte cubre lo accesible y `@solid-primitives` ayuda, pero i18n y utilidades de SEO son finos |
| **QW** | 4 | Qwik UI existe y es delgado; lo demás se escribe |
| **VI** | 8 | Ecosistema React completo menos las piezas que integra un framework (metadatos, sitemap, OG) |

### 4.7 C6 · Coste y dependencia del hosting (peso 8)

Referencia de coste con una carga de 250.000 visitas al mes: **Vercel ≈ 305 $, Netlify ≈ 340 $, Cloudflare Workers ≈ 15 $, VPS con CDN ≈ 30 $**. La diferencia no es descuento: Cloudflare no cobra tráfico de salida. Nuestro presupuesto es < 100 €/mes hasta 50.000 usuarios.

| | Nota | Justificación |
|---|---:|---|
| **NX** | 6 | Funciona fuera de Vercel —OpenNext cubre todas las menores de Next 16 en Cloudflare Workers y `output: standalone` corre en un VPS— pero es un adaptador de terceros que va por detrás de las versiones, el ISR se reimplementa sobre KV/R2 y `proxy.ts` en Node quita el *edge* que sí hay en Vercel |
| **SK** | **10** | Los adaptadores son una abstracción que mantiene el propio framework: Vercel, Cloudflare, Netlify, Node y estático son **una línea de configuración**, y esa línea es la única diferencia entre los cinco destinos |
| **AS** | 9 | Mismo modelo de adaptadores oficiales; el matiz es de gobernanza, no técnico: **el equipo lo compró Cloudflare en enero de 2026**, lo que aporta recursos y a la vez introduce un interés de plataforma |
| **RR** | 8 | Construcción con Vite y despliegue en cualquier Node o Worker, sin primitivas atadas a un proveedor |
| **NU** | **10** | Los preajustes de Nitro detectan y generan la salida de una veintena de destinos desde una sola construcción; es la mejor portabilidad del estudio junto con SvelteKit |
| **SO** | 8 | Environment API de Vite con preajustes equivalentes; menos rodado |
| **QW** | 8 | Adaptadores para Cloudflare, Vercel, Netlify y Node, correctos |
| **VI** | 9 | Ficheros estáticos en cualquier sitio y por casi nada, pero en cuanto haga falta una ruta SSR hay que montar un servidor aparte |

### 4.8 C7 · Complejidad y riesgo de sobre-ingeniería (peso 7)

| | Nota | Justificación |
|---|---:|---|
| **NX** | 4 | La mayor carga conceptual del conjunto —frontera servidor/cliente, Cache Components, `use cache`/`cacheLife`/`cacheTag`, PPR, *streaming*, proxy frente a middleware, tres cachés— para un producto que son 36 páginas y un tablero |
| **SK** | **8** | `+page.svelte`, `+page.server.ts`, `load` y tres banderas por ruta; el modelo entero cabe en una página y no ha cambiado desde 2021 |
| **AS** | 7 | Mínima carga para contenido, pero la complejidad se muda de sitio: compartir el cronómetro y el historial entre islas y navegaciones es un problema que es fácil subestimar el día 1 |
| **RR** | 6 | Modelo razonable; la confusión de identidad del proyecto es en sí misma un impuesto de complejidad |
| **NU** | 6 | Módulos e importaciones automáticas esconden mucho, para bien y para mal |
| **SO** | 6 | API pequeña con reglas de reactividad afiladas |
| **QW** | 3 | La frontera `$` y las restricciones de serializabilidad son un impuesto en cada línea, durante todo el proyecto |
| **VI** | 5 | Mínima complejidad de framework y máxima de «te lo construyes tú»: para 36 URL indexables con cinco modos de renderizado, ese «te lo construyes tú» **es** la sobre-ingeniería |

### 4.9 C8 · Futuro: Capacitor, widget para medios, i18n es-AR/es-MX (peso 5)

| | Nota | Justificación |
|---|---:|---|
| **NX** | 5 | Capacitor exige `output: 'export'`, que **desactiva justo lo que sostiene la web**: ISR, SSR, `next/og` y `proxy.ts`; serían dos configuraciones de construcción divergentes, y el widget para medios habría que empaquetarlo aparte |
| **SK** | **9** | `adapter-static` es el camino documentado para la concha de Capacitor **con el mismo código**, y el tablero compilado se entrega como `<script>` a un medio sin obligarle a cargar React y ReactDOM; Paraglide resuelve es-ES/es-AR/es-MX con sacudida por idioma |
| **AS** | 8 | Exportación estática trivial, i18n de enrutado dentro y el widget es la propia isla si es Svelte o Solid |
| **RR** | 6 | El modo SPA encaja bien con Capacitor; el widget arrastra React |
| **NU** | 7 | `nuxi generate` para Capacitor está documentado; el widget arrastra ~35 KB de Vue |
| **SO** | 7 | Exportación estática y widget diminuto; el resto del ecosistema pesa en contra |
| **QW** | 5 | Exportación estática sí, pero el widget necesita el cargador de Qwik en la página ajena |
| **VI** | 7 | El mejor caso para Capacitor porque ya **es** una SPA; el widget arrastra React |

---

## 5. Riesgos y mitigaciones por opción

### 5.1 Next.js 16 (6,99)

| Riesgo | Daño | Mitigación |
|---|---|---|
| El agente escribe idiomática de Next 15 (`unstable_cache`, `revalidate` de segmento, `middleware.ts`) y **falla en silencio** en el modelo de Cache Components | **Muy alto**: el fallo se manifiesta sirviendo el caso de ayer | Regla escrita en `web/README.md` prohibiendo las cuatro API antiguas, con lint que rompe el build; y un test de CI que hace `curl` de `/` y compara el número de caso con `/api/calendario` |
| El presupuesto de 110 KB de §7 está en el techo del framework: cualquier isla nueva (Expediente, reconstrucción, compartir) lo pone en rojo | Alto | Carga diferida agresiva y `@next/bundle-analyzer` como puerta; en la práctica, recortar islas cada vez que se añade una |
| El HTML de una página con RSC lleva el contenido **dos veces** (marcado más carga útil de RSC en línea). Comprime bien porque es el mismo texto, pero el presupuesto de **45 KB de HTML comprimido** de §7 se fijó sin contar con ello | Medio | Medir el HTML real de `/` en S1 antes de dar por bueno el presupuesto |
| `proxy.ts` corre solo en Node: la selección por número de caso de D-011/R4 pierde el borde | Medio | Resolver el número en la función de la ruta y cachear por franja horaria en el CDN |
| 13 avisos de seguridad en una sola versión (16.2.6, mayo de 2026) indican una superficie amplia | Medio | Renovate con actualización semanal y `pnpm audit` en CI |

### 5.2 SvelteKit 2 + Svelte 5 (8,23) — la recomendada

| Riesgo | Daño | Mitigación |
|---|---|---|
| **SvelteKit 3 está en RC y la documentación que un agente busque en octubre describirá SK3** (`#lib` en vez de `$lib`, config aplanada): el agente escribirá idiomática de 3 en un proyecto de 2 | **Alto**, y es el riesgo propio de esta opción | Fijar `@sveltejs/kit@2.57.x` y `svelte@5.55.x` con versiones exactas; **volcar la instantánea de `llms.txt` de SvelteKit 2 en `web/docs-vendor/` y citarla en `web/README.md` como la única fuente**; migrar a 3 en S11 con `sv migrate`, nunca antes del día L |
| El agente escribe sintaxis de Svelte 4 (`export let`, `$:`) | Bajo | Falla en compilación, no en producción; `svelte-check` es puerta de CI |
| Hay que escribir a mano OG con satori, `sitemap.xml`, `robots.txt` y `llms.txt` | Medio: ≈1,5 días | Está presupuestado en la §9 y son piezas de una sola vez, no mantenimiento continuo |
| Menos ejemplos para Serwist, Sentry y Supabase que en React | Medio | Los tres tienen SDK oficial de SvelteKit; PostHog es agnóstico. El service worker se escribe con `$service-worker` sin Workbox, que es **menos** código, no más |
| Bits UI es menos maduro que Radix | Medio | Auditoría con axe de las siete primitivas en S2 (F-07 ya lo exige); si una falla, se escribe a mano: son primitivas, no pantallas |

### 5.3 Astro 6 + islas Svelte (7,75)

| Riesgo | Daño | Mitigación |
|---|---|---|
| El juego es una **aplicación**, no contenido: cronómetro corriendo, historial de deshacer, partida persistida, hoja inferior y cuenta atrás. En un modelo multipágina cada navegación destruye la isla | **Alto** | Encerrar el juego entero en una sola isla en `/` con enrutado interno; es decir, usar Astro para las 30 páginas de contenido y una SPA dentro para el juego: **dos modelos mentales en un repositorio** |
| Serwist no tiene integración de Astro todavía; queda `@vite-pwa/astro` | Medio | Es Workbox por debajo y funciona, pero la regla de R5 hay que escribirla contra las recetas por defecto, que son justo las que causan el bug |
| Cloudflare es dueño del equipo desde enero de 2026 | Bajo hoy | Se comprometieron a mantenerlo abierto; el riesgo es de dirección futura, no de licencia |

### 5.4 Las cinco descartadas

| Opción | Por qué no entra, en una frase |
|---|---|
| **Nuxt 4** (7,55) | Técnicamente es una opción excelente y la mejor del estudio en portabilidad y en expresar la matriz de renderizado, **pero mete Vue en un proyecto donde todo lo demás es TypeScript liso y no compra nada que SvelteKit no dé más barato en C1 y C7** |
| **React Router 7** (6,14) | Pierde la ventaja de RSC sin ganar la ligereza de un compilador, y su corpus de entrenamiento es el más ambiguo del conjunto por la triple identidad Remix/React Router |
| **SolidStart 2** (6,49) | Empata con SvelteKit en el criterio de más peso y pierde en todos los demás; y sus fallos de reactividad son silenciosos, que es lo peor que puede pasarle a código escrito por un agente |
| **Qwik City** (4,72) | 672 sitios en julio de 2026, dos service workers compitiendo y una primera interacción que depende de la red **en un producto cuya condición declarada es red irregular** |
| **Vite + React SPA** (6,10) | No puede servir `/` resuelta por número de caso, ni el archivo que crece a diario, ni `/r/[id]` en servidor, sin dejar de ser lo que es |

---

## 6. Arquitectura propuesta · Opción 1: SvelteKit 2 + Svelte 5

### 6.1 Qué se renderiza dónde

Las 36 URL P0 del árbol, con la bandera exacta de SvelteKit:

| Grupo | URL | Modo del árbol | Cómo se escribe |
|---|---|---|---|
| Landings y guías (23 URL) | `/juegos-como-murdoku/*`, `/juegos-como-murdle`, `/juegos-diarios`, `/juegos-de-detectives`, `/juegos-de-logica`, `/como-jugar`, `/reglas*`, `/una-sola-solucion`, `/sobre-nosotros`, `/premium`, `/packs`, legales | SSG | `export const prerender = true` en `+page.ts`; HTML en el CDN, sin servidor |
| Caso del día | `/` | Resuelto por número de caso (D-011/R4) | `prerender = false`, `ssr = true`. El `load` de servidor resuelve el número desde la cabecera de zona del CDN, cachea por **franja** (`Madrid`, `Ciudad de México`, `Buenos Aires`, `Santiago`) con `s-maxage` hasta el siguiente cambio; el cliente confirma con su fecha local y, si difiere, pide `/api/caso/[n]` (que el SW ya tiene precacheado) |
| Archivo jugable | `/caso/AAAA-MM-DD` ×6, `/archivo`, `/archivo/AAAA-MM` | ISR | Los 7 del archivo se prerenderizan en el build diario; los demás con `Cache-Control: s-maxage=86400, stale-while-revalidate=604800`, que es ISR sin depender de una primitiva de proveedor |
| Erratas | `/erratas` | ISR | Igual, con revalidación por etiqueta al publicar una errata |
| Resultado compartido | `/r/[id]` | SSR | `prerender = false`, `noindex, follow`, `X-Robots-Tag` en la OG (C8 de backend) |
| Cuenta | `/entrar`, `/cuenta/*` | CSR + noindex | `export const ssr = false` |

**Prueba de aceptación, igual que hoy:** `curl` de cada URL P0 contiene enunciado y pistas. En SvelteKit sale del SSR o del prerenderizado sin trabajo extra, porque el marcado de la pista es marcado, no una isla.

### 6.2 Cómo se aísla el tablero como isla

No hay «isla» explícita: **hay un componente y un módulo de estado**, y lo que hace de aislamiento es dónde vive el estado.

```
src/dominio/tablero/estado.svelte.ts   ← $state({ celdas: Celda[36], historial: Comando[] })
src/lib/juego/Tablero.svelte           ← <div role="grid"> con CSS Grid, un <Celda> por celda
src/lib/juego/Celda.svelte             ← lee estado.celdas[i]; solo se reactiva su nodo
```

Cuatro reglas que sostienen R2 y que son puertas de revisión:

1. **La cuadrícula se pinta desde el HTML servido**, con CSS Grid y las celdas ya en su estado inicial. No hay esqueleto que se reemplace al hidratar (regla de `arbol-web-final.md` §6.6).
2. **Una celda, un nodo reactivo.** `Celda.svelte` lee `estado.celdas[i]`; la reactividad de grano fino de Svelte 5 actualiza ese texto y esa clase, no las 36. No hace falta ni selector ni memoización: es el comportamiento por defecto.
3. **El resaltado por pista no toca las celdas.** Al tocar una pista se escribe un atributo en el contenedor (`data-resaltadas="3,9,14"`) y **el resaltado lo hace CSS**. Cero re-render, y funciona igual con `forced-colors`.
4. **Un solo escuchador de puntero en el contenedor**, con delegación por `data-celda`, `touch-action: manipulation` (sin retraso de 300 ms y sin prohibir el zoom, que sigue vetado por lint) y arrastre agrupado en `requestAnimationFrame`.

El módulo `estado.svelte.ts` es TypeScript puro con runas: **se prueba con Vitest sin montar componentes** y es donde vive el test de propiedad de F-11 (50 acciones + 50 deshacer devuelven el estado inicial exacto con 1.000 semillas).

### 6.3 Cómo se genera la OG sin spoiler

Ruta de servidor `src/routes/og/caso/[numero]/+server.ts`:

1. Pide a backend **solo los campos no reveladores** del caso: número, título, día de la semana, regla del día, tamaño de la cuadrícula y número de pistas. La respuesta de esa ruta no contiene solución ni certificado, y hay un test de CI que rompe el build si el JSON que entra en la plantilla tiene esos campos (es el mismo test que ya exige `plan-frontend.md` §10 para el caso público).
2. Compone la plantilla con **satori** (HTML y CSS a SVG) y la rasteriza con **resvg**. Es la misma pareja que usa `next/og` por debajo, disponible como paquete agnóstico de framework y ejecutable en Node y en el borde: no se pierde nada por no estar en Next, se pierde el azúcar.
3. Devuelve PNG con `Cache-Control: public, s-maxage=31536000, immutable` (la OG de un caso no cambia nunca) y **`X-Robots-Tag: noindex`**, y sin cookies ni identificadores de seguimiento, como exige C8 de backend.
4. **Nada de lo que aparece en la imagen deja de aparecer en la página.** El plano se dibuja vacío o con las celdas bloqueadas: nunca con una posición resuelta.

### 6.4 Service worker (F-45, riesgo R5)

`src/service-worker.ts`, sin Workbox, usando el módulo `$service-worker` que da las listas exactas:

- **Precaché:** concha de la aplicación (`build` + `files`) y las páginas prerenderizadas; más el caso de hoy y **el de mañana** en cuanto `disponible_desde` ha pasado, desde `/api/caso/[n]` y `/api/caso/[n+1]`.
- **Regla de R5, escrita como código:** en `install` **no** se llama a `skipWaiting`. La página envía `{tipo:'PARTIDA_ACTIVA'}` al empezar a jugar y `{tipo:'PARTIDA_INACTIVA'}` al salir del tablero; solo con la partida inactiva la aplicación pide `skipWaiting` y recarga. Test de Playwright explícito: partida a medias → despliegue → recarga → tablero, cronómetro y ajustes intactos.
- **Persistencia versionada:** el esquema de IndexedDB lleva número de versión y migración; una actualización nunca lee un esquema que no entiende.
- **iOS (R1):** se detecta iOS sin instalar y se ofrece la cuenta como «guarda tu racha» tras el segundo caso resuelto, más instrucciones ilustradas de «Añadir a pantalla de inicio», porque `beforeinstallprompt` no existe.

### 6.5 El resto del stack, que **no cambia**

Tailwind v4 con `tokens.json`, TypeScript estricto, Vitest, Playwright, axe, Lighthouse CI, PostHog, Sentry, Supabase, Vercel, Serwist como alternativa si `$service-worker` se queda corto. **Todos funcionan igual.** Cambian tres piezas: Radix → **Bits UI**, `next-intl` → **Paraglide**, `next/og` → **satori y resvg a mano**.

---

## 7. Arquitectura propuesta · Opción 2: Astro 6 + islas Svelte

Se documenta porque es la segunda mejor y porque, si el criterio del fundador fuese «el SEO por encima de todo», **esta gana**.

- **Las 30 páginas de contenido** son `.astro` con **cero JavaScript**, salvo la isla del vistazo con `client:visible`. Es la única opción del estudio donde «HTML sin JS» no depende de la disciplina de nadie.
- **El juego** vive en una única isla `client:load` en `/` que contiene tablero, cuaderno, pistas, resultado y reconstrucción, con enrutado interno por History API. Es, de hecho, una pequeña SPA de Svelte dentro de un sitio Astro.
- **OG** en `src/pages/og/caso/[numero].png.ts` con satori, idéntico a la §6.3.
- **Service worker** con `@vite-pwa/astro`, sobreescribiendo la receta de navegación por defecto para cumplir R5.
- **Lo que se acepta a cambio:** dos modelos mentales en un repositorio, el estado del juego fuera del framework de páginas, y una integración de PWA menos afinada que la de SvelteKit.

**Cuándo elegiría esta y no la 1:** si `/` no tuviera que ser una aplicación. En el momento en que el cronómetro tiene que sobrevivir a una navegación y la partida tiene que persistir entre pantallas, la opción 1 es más simple.

---

## 8. Arquitectura propuesta · Opción 3: quedarse en Next.js 16

Se documenta entera para que «mantener» sea una decisión informada y no la inercia.

- **Todo es Componente de Servidor por defecto**; `"use client"` solo bajo `src/components/juego/`. Regla de lint que falla el build si aparece en `src/components/contenido/`.
- **`/`** es dinámica: `proxy.ts` (Node) lee la cabecera de zona del CDN y reescribe a `/_caso/[n]`, que lleva `use cache` y `cacheTag('caso-N')`; al publicar el caso, backend llama a `revalidateTag`.
- **Landings** con `use cache` y `cacheLife('max')`; **archivo** con `cacheLife('days')`; **`/r/[id]`** dinámica; **cuenta** en cliente.
- **OG** con `opengraph-image.tsx` por ruta, que es donde Next gana de verdad: media jornada menos de trabajo.
- **Service worker** con `@serwist/next`, **excluyendo explícitamente las cargas útiles de RSC del caché de ejecución** para evitar el desajuste concha-vieja/datos-nuevos.
- **Tres reglas nuevas que habría que escribir hoy:** prohibido `unstable_cache`, prohibido `export const revalidate` de segmento y prohibido `middleware.ts`. Sin esas tres reglas, el agente escribirá Next 15 durante diez semanas.

---

## 9. Recomendación final

**Cambio a SvelteKit 2 + Svelte 5.** Las razones, en orden de peso, y la corrección honesta de lo que escribí hace cinco días.

**1. El argumento con el que elegí Next estaba mal.** D-F1 razón 2 decía que RSC deja el tablero como única isla y que el resto no cuesta JavaScript. Al contrastarlo con el árbol web URL por URL, **veintidós de las 36 P0 llevan caso jugable, vistazo o tutorial arriba del pliegue porque el propio árbol lo exige**, incluidas **las diez oportunidades mayores de §1.3 sin una sola excepción**; las catorce que no lo llevan son legales, institucionales y de tienda, sin volumen de búsqueda propio. El ahorro de RSC se aplica donde no hay visitas; el peaje de 40 KB del runtime de React, donde sí las hay. Es el mismo hecho que hace que el presupuesto de §7 esté fijado en 110 KB: no es un presupuesto exigente, es el techo de lo que Next puede dar en este producto.

**2. Dos de las tres razones de D-F1 han caducado con D-011.** La razón 1 (cinco modos de renderizado en vocabulario del App Router) valía cuando `/` era estática anclada a Madrid; **R4 la convirtió en resuelta por número de caso en el borde**, y ahí Next 16 ha retrocedido: `proxy.ts` corre solo en Node. SvelteKit sobre Workers resuelve eso en el borde sin excepción. La razón 3 (`next/og`) sigue siendo cierta y **es lo único que pierdo de verdad**: media jornada.

**3. Los dos riesgos de mayor daño del plan bajan de categoría por construcción.** R2 (el 6×6 en gama media) deja de necesitar `useSyncExternalStore`, selectores por celda y disciplina de memoización: la reactividad de grano fino de las runas hace por defecto lo que en React hay que construir y vigilar. R5 (el service worker que rompe la partida) deja de escribirse contra recetas de Workbox —que son precisamente las que causan el bug— y pasa a escribirse en 40 líneas propias con las listas de activos que da el framework.

**4. La portabilidad deja de ser una promesa.** Cambiar de Vercel a Cloudflare o a un VPS es una línea de configuración, no un adaptador de terceros que va por detrás de las versiones. Con el presupuesto de backend en < 100 €/mes y una diferencia de orden de magnitud entre proveedores, esa puerta conviene tenerla abierta.

**5. Y lo que pierdo, dicho otra vez para que quede en el acta:** el ecosistema más grande, el corpus más seguro para un agente y tres piezas que hay que escribir a mano (OG, sitemap, `robots.txt`). **≈3 días de agente sobre 54.** El riesgo real no es ese coste, es **SvelteKit 3 en RC**: la documentación que yo mismo consulte en octubre describirá una versión que no es la que usamos. Se mitiga fijando versiones exactas y volcando la instantánea de documentación en el repositorio, y se acepta a cambio de todo lo anterior.

**Lo que NO cambia si se aprueba:** el resto de D-F1 entero (TypeScript estricto, Tailwind v4 con tokens, reductor propio con historial, Serwist como alternativa, PostHog, Sentry, Vitest, Playwright, axe, Lighthouse CI, Vercel, ficheros de mensajes propios); **los nueve contratos de backend C1-C9**, que son HTTP y tipos `zod`; las 58 tareas de `plan-frontend.md`; las compuertas CF-0 a CF-5; el presupuesto de §7, que se cumple con holgura en vez de rozándolo; y la fecha del día L.

**Lo que hay que corregir en tres documentos si se aprueba:** `docs/roadmap/plan-frontend.md` §1 (D-F1 y la tabla de stack: Radix → Bits UI, `next-intl` → Paraglide, `next/og` → satori), `docs/decisiones.md` (entrada nueva D-F1-bis con lo que se acepta a cambio) y `docs/roadmap/supuestos.md` (la línea «stack Next.js + Supabase + Vercel + PostHog + Resend»).

---

## 10. Compuerta de reversión: cómo se decide esto sin apostar la fecha

Recomendar un cambio de framework el día 1 sin una prueba es exactamente lo que cuesta un lanzamiento. Por eso el cambio va con compuerta.

**Prueba de 1,5 días de agente en S1, antes de que cierre CF-0.** Se construyen en SvelteKit las cuatro cosas de las que depende toda la apuesta, y ninguna otra:

| # | Qué se construye | Criterio de verde |
|---:|---|---|
| 1 | Tablero 6×6 con estado por celda en runas, ciclo por toque y arrastre | En un Android de gama media **real** (F19), tocar una celda actualiza un nodo, sin toques perdidos, y el JS de la página queda por debajo de **50 KB comprimidos** |
| 2 | OG del caso del día con satori y resvg | PNG correcto en menos de 300 ms en frío, sin ningún campo de solución en la entrada, con el test de CI que lo comprueba |
| 3 | Service worker con la regla de R5 | Partida a medias → despliegue → recarga: tablero, cronómetro y ajustes intactos, verificado en Playwright |
| 4 | Una landing P0 completa con vistazo, JSON-LD y `curl` | `curl` devuelve enunciado y pistas; un solo bloque JSON-LD y valida; Lighthouse móvil ≥ 90 |

**Regla de decisión, escrita antes del dato:** si los cuatro salen verdes el **viernes 11 de septiembre (S1, día 5)**, se registra D-F1-bis y se sigue en SvelteKit. Si **uno solo** sale rojo, se vuelve a Next 16 con la arquitectura de la §8 y se han perdido 1,5 días, no una semana: CF-0 es una compuerta de **contratos** (certificado del motor, esquema del caso, tokens, estados de la celda), y ninguno de esos cuatro contratos depende del framework.

**Y la regla de D-F1 se mantiene igual de dura para la elección nueva:** decidido esto el viernes 11, **no se vuelve a abrir**. Si en la semana 4 el presupuesto de JS no se cumpliera, la respuesta seguiría siendo recortar islas, no cambiar de framework.

---

## 11. Fuentes

Consultadas el 7 de septiembre de 2026. Ninguna cifra de este documento es inventada; lo que es juicio va marcado como juicio en la §1.

- Next.js 16, Cache Components y `proxy.ts`: [nextjs.org/blog/next-16](https://nextjs.org/blog/next-16) · [Upgrading: Version 16](https://nextjs.org/docs/app/guides/upgrading/version-16) · [Migrating to Cache Components](https://nextjs.org/docs/app/guides/migrating-to-cache-components) · [What's New in Next.js 16](https://www.trevorlasn.com/blog/whats-new-in-nextjs-16) · [Next.js 16 App Router: The Complete Guide for 2026](https://getcraftly.dev/blog/nextjs-16-app-router-guide)
- Svelte 5 y SvelteKit 2/3: [What's new in Svelte: agosto de 2026](https://svelte.dev/blog/whats-new-in-svelte-august-2026) · [What's new in Svelte: septiembre de 2026](https://svelte.dev/blog/whats-new-in-svelte-september-2026) · [Svelte 5 brings up to 50% bundle size decrease](https://khromov.se/svelte-5-brings-up-to-50-bundle-size-decrease-for-existing-svelte-4-apps/) · [Remote functions · SvelteKit Docs](https://svelte.dev/docs/kit/remote-functions) · [SvelteKit 3 puts heat on Next.js (The Register)](https://forums.theregister.com/forum/all/2026/08/19/202618/)
- Documentación para agentes: [svelte-llm](https://svelte-llm.stanislav.garden/) · [Better AI LLM assistance for Svelte 5 and SvelteKit](https://khromov.se/getting-better-ai-llm-assistance-for-svelte-5-and-sveltekit/)
- Astro 6 y Cloudflare: [Cloudflare Acquires Astro (nota de prensa, 16/1/2026)](https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-astro-to-accelerate-the-future-of-high-performance-web-development/) · [Islands architecture · Astro Docs](https://docs.astro.build/en/concepts/islands/) · [On-demand rendering · Astro Docs](https://docs.astro.build/en/guides/on-demand-rendering/) · [What's new in Astro, mayo de 2026](https://astro.build/blog/whats-new-may-2026/)
- React Router 7 y Remix 3: [React Router v7, Remix v2, Remix 3: what production teams should do](https://blog.eduonix.com/2026/08/react-router-v7-remix-v2-remix-3-what-production-teams-should-actually-do/) · [React Router v7 Complete Guide (2026)](https://stacknotice.com/blog/react-router-v7-complete-guide-2026)
- Nuxt 4 y fin de vida de Nuxt 3: [Nuxt Roadmap](https://nuxt.com/docs/4.x/community/roadmap) · [Nuxt release notes, septiembre de 2026](https://releases.sh/nuxt)
- SolidStart 2: [SolidStart v2 is now Stable](https://github.com/solidjs/solid-start/discussions/2281) · [The state of Solid.js in 2026](https://listiak.dev/blog/the-state-of-solid-js-in-2026-signals-performance-and-growing-influence)
- Qwik: [Towards Qwik 2.0](https://www.builder.io/blog/qwik-2-coming-soon) · [Alternatives to Qwik 2026: adopción medida](https://pulse.adyog.com/insights/alternatives-to-qwik-2026-framework-comparison)
- Prerenderizado sin framework: [Vike · prerender](https://vike.dev/prerender) · [Render Modes (SPA, SSR, SSG, HTML-only)](https://vite-plugin-ssr.com/render-modes)
- Tamaños de paquete y rendimiento móvil: [SvelteKit vs Next.js 16: 2026 Performance Benchmarks](https://www.devmorph.dev/blogs/sveltekit-vs-nextjs-16-performance-benchmarks-2026) · [SvelteKit vs Next.js in 2026](https://dev.to/paulthedev/sveltekit-vs-nextjs-in-2026-why-the-underdog-is-winning-a-developers-deep-dive-155b) · [7 Hydration Strategies That Make React 19 Feel Instant](https://medium.com/@bhagyarana80/7-hydration-strategies-that-make-react-19-feel-instant-a80aec44e2ff) · [Interaction to Next Paint (INP)](https://www.corewebvitals.io/core-web-vitals/interaction-to-next-paint)
- PWA y service workers: [Serwist · ¿sigue haciendo falta el fork de Workbox?](https://github.com/serwist/serwist/discussions/120) · [PWA en Next.js con Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7) · [@vite-pwa/astro](https://github.com/vite-pwa/astro) · [Vite PWA · SvelteKit](https://vite-pwa-org.netlify.app/frameworks/sveltekit.html)
- OG con satori fuera de Next: [og-img (agnóstico de framework)](https://github.com/fabian-hiller/og-img) · [Dynamic OG images with Satori and Astro](https://knaap.dev/posts/dynamic-og-images-with-any-static-site-generator/) · [OG dinámicas con SvelteKit y Satori](https://www.youtube.com/watch?v=b3vzl9fHvkQ)
- Interfaz accesible en Svelte: [Bits UI](https://www.bits-ui.com/) · [Bits UI · Introducción](https://next.bits-ui.com/)
- Hosting y coste: [OpenNext · Cloudflare](https://opennext.js.org/cloudflare) · [Next.js en Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/) · [Vercel Cost in 2026](https://makerkit.dev/blog/saas/vercel-cost) · [Vercel Pricing in 2026](https://flexprice.io/blog/vercel-pricing-breakdown)
- Capacitor: [Next.js con Capacitor 8](https://capgo.app/blog/building-a-native-mobile-app-with-nextjs-and-capacitor/) · [SvelteKit con Capacitor](https://bryanhogan.com/blog/web-to-app-sveltekit-capacitor)
- Animación: [GSAP vs Motion (2026)](https://annnimate.com/compare/gsap-vs-motion) · [Comparing the best React animation libraries for 2026](https://blog.logrocket.com/best-react-animation-libraries/)
