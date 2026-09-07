# Dictamen del juez · ¿Sobrevive la recomendación de SvelteKit a la lente «agentes de IA y madurez del ecosistema»?

Autor: juez escéptico (rol `revisor-calidad`, encargo directo del fundador). Fecha: 7 de septiembre de 2026 (S1, día 1).
Encargo: intentar **refutar** la recomendación de `docs/stack/frontend.md` §9 (cambiar Next.js 16 por SvelteKit 2 + Svelte 5) con una sola lente: **productividad y fiabilidad de los agentes de IA que van a escribir y mantener este código, y madurez del ecosistema.** No se juzgan aquí rendimiento, SEO, PWA ni hosting (C1, C2, C3, C6 del estudio).
Documentos juzgados: `docs/stack/frontend.md` (matriz de 8 criterios, 8,23 frente a 6,99), `docs/roadmap/plan-frontend.md` §1 (D-F1 y sus tres razones), `docs/roadmap/supuestos.md` (el proyecto lo construyen agentes; el fundador no programa).

**Alerta D-006:** este dictamen no cumple ninguno de los cinco disparadores del registro de marca. No hay nada que avisar hoy.

---

## 0. Veredicto

| | |
|---|---|
| **¿Refutada?** | **No.** Bajo esta lente la recomendación **se sostiene, pero rebajada**: dos de los apoyos que el estudio usa en el criterio C4 son falsos o incompletos, uno en cada dirección, y el riesgo de SvelteKit 3 es **mayor y más concreto** de lo que el estudio describe (toca el módulo con el que diseña el service worker y el argumento del *edge* en Vercel). Nada de eso invierte la matriz: corregido C4 con los datos de abajo, la distancia entre SvelteKit y Next se estrecha en 0,2-0,3 puntos sobre 10 y sigue a favor de SvelteKit por criterios que no son los míos. |
| **Solidez de la recomendación (1-5)** | **3.** Conclusión defendible; argumentación del criterio de agentes floja en los dos sentidos; plan de mitigación del riesgo SK3 incompleto. |
| **Qué cambia respecto al estudio** | Se aceptan la matriz y la compuerta de reversión de §10, **a condición de** las siete cláusulas de la §4 de este dictamen, que convierten el criterio C4 en algo medible en la prueba de 1,5 días en vez de en un juicio del propio agente que va a escribir el código. |

### Razonamiento (doce líneas, con fuentes)

1. **El miedo central de C4 —«el agente escribe Svelte 4»— está obsoleto para la clase de modelo que usa este proyecto.** He leído los ficheros de resultados de SvelteBench (HumanEval para Svelte 5, nueve pruebas de runas, sin documentación en contexto): Claude Opus 4.5 **1,00** pass@1, Claude Sonnet 4.6 **1,00**, Gemini 3.1 Pro **1,00**, GPT-5.3-codex **0,97**; Claude Sonnet 4 (mayo de 2025) 0,90 y Claude Haiku 4.5 **0,66** (snippets 0,0). En todos los modelos de gama media o alta, pass@10 = 1,0: el error que queda es de reintento, no de concepto. ([khromov/svelte-bench, `benchmarks/*.json`](https://github.com/khromov/svelte-bench/tree/main/benchmarks))
2. **Pero el corpus de React sigue siendo más seguro para modelos de 2025:** Web-Bench (ByteDance, mayo de 2025) da pass@2 React 65 / Svelte 25 para Claude 3.7 sin razonamiento y 60 / 55 con razonamiento; GPT-4o 35 / 20; DeepSeek-R1 40 / 40. La brecha existe y se cierra con modelos que razonan. ([arXiv 2505.07473](https://arxiv.org/abs/2505.07473))
3. **El estudio infravalora el utillaje oficial de Next para agentes:** desde 16.2 la documentación **de la versión instalada** viaja dentro del paquete (`node_modules/next/dist/docs/`, «sin petición de red»); 16.3 genera `AGENTS.md`/`CLAUDE.md` con bloque gestionado, expone un MCP en `/_next/mcp` (`get_compilation_issues`, `compile_route`) y publica *skills* como `next-cache-components-adoption`. Es justo la mitigación del riesgo «escribe Next 15» que el estudio da por no resuelto. ([vercel/next.js · docs/01-app/02-guides/ai-agents.mdx](https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/ai-agents.mdx))
4. **Y sobrevalora el de Svelte en el punto que importa:** el MCP oficial (`mcp.svelte.dev`) sirve la documentación «**actualizada** directamente de svelte.dev/docs». El día que SvelteKit 3 sea estable, esa documentación describirá SK3 y un proyecto fijado en SK2 recibirá por su propia herramienta de mitigación la idiomática equivocada. El `svelte-autofixer` sí es valioso (compilador + reglas propias + `eslint-plugin-svelte`, con bandera `--svelte-version`). ([sveltejs/ai-tools · svelte-autofixer.ts](https://github.com/sveltejs/ai-tools/blob/main/packages/mcp-server/src/mcp/handlers/tools/svelte-autofixer.ts) · [docs/ai/30-mcp/40-tools.md](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/docs/ai/30-mcp/40-tools.md))
5. **«El compilador rechaza casi todo lo obsoleto» solo es cierto en modo runas forzado.** Svelte 5 compila `export let` y `$:` sin queja en modo *legacy*; el rechazo («Cannot use `export let` in runes mode») exige `runes: true`, y forzarlo globalmente rompe dependencias escritas en Svelte 4 (issue #9632); la receta es `vitePlugin.dynamicCompileOptions` excluyendo `node_modules`. El estudio no nombra esa configuración. ([sveltejs/svelte #9632](https://github.com/sveltejs/svelte/issues/9632) · [discusión #10707](https://github.com/sveltejs/svelte/discussions/10707))
6. **Svelte 5 tiene sus propios fallos silenciosos**, del mismo tipo que los que el estudio reprocha a Solid: bucles de `$effect` (#9944, #16224), reactividad perdida al desestructurar `$state` o al sacarlo a un `.ts`, avisos `state_referenced_locally` inconsistentes (#11883, #16343). Lo que sí sigue siendo cierto es que en React los equivalentes (`exhaustive-deps` desactivado por Cursor y Claude Code, dependencias de `useEffect` incompletas) están **más documentados como hábito de los agentes**. ([theroadtoenterprise](https://theroadtoenterprise.com/blog/vibe-coding-vs-production-coding-react) · [dev.to/devunionx](https://dev.to/devunionx/5-things-ai-cant-do-even-in-react-1f8p))
7. **SvelteKit 3 no es «`$lib` → `#lib` y config aplanada».** La guía de migración de la rama `version-3` elimina **`$service-worker`** (repartido en `$app/env`, `$app/manifest`, `$app/paths`, más `$app/service-worker` y un `tsconfig` aparte), elimina `$app/stores`, deja de soportar `svelte.config.js`, cambia `error()`, `handleError`, `goto`, los *matchers* y las cookies, y **`adapter-vercel` deja de soportar el runtime *edge***. El diseño §6.4 del estudio está escrito contra un módulo que SK3 borra, y el argumento del borde en Vercel (§9.2) caduca con SK3. ([sveltejs/kit · migrating-to-sveltekit-3, rama version-3](https://github.com/sveltejs/kit/blob/version-3/documentation/docs/60-appendix/35-migrating-to-sveltekit-3.md))
8. **Estado real a 1 de septiembre de 2026:** SvelteKit 3.0.0-next.25 en RC desde el 13 de agosto, «estable en un futuro próximo, sin más rupturas», sin fecha; la línea 2.x sigue viva (2.70.1-2.70.3 **después** del RC; el estudio cita 2.57.1: fijar sobre 2.70.x). `sv` ≥ 0.17 ya crea proyectos con `#lib`, así que esa parte de la migración cuesta cero si se empieza bien. ([What's new in Svelte, septiembre de 2026](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/blog/2026-09-01-whats-new-in-svelte-september-2026.md) · [RC](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/blog/2026-08-13-sveltekit-3-release-candidate.md))
9. **No hay política escrita de soporte de SK2 tras SK3.** Precedente: `@sveltejs/kit@1.30.4` salió el 16 de febrero de 2025 (14 meses después de SK2) y `svelte@4.2.20` el 20 de mayo de 2026 (19 meses después de Svelte 5), pero el aviso de CVEs de enero de 2026 solo parchea 2.x y 5.x. Traducción: un proyecto en SK2 en octubre tendrá parches de bugs probablemente durante 2027; los de seguridad no están garantizados. ([kit 1.30.4](https://github.com/sveltejs/kit/releases/tag/%40sveltejs%2Fkit%401.30.4) · [svelte 4.2.20](https://github.com/sveltejs/svelte/releases/tag/svelte%404.2.20) · [CVEs, enero 2026](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/blog/2026-01-15-cves-affecting-the-svelte-ecosystem.md))
10. **Ecosistema: suficiente para 36 páginas y un tablero, no equivalente.** Bits UI 3,5k estrellas, 52 issues, 2.19.0 el 20 de agosto de 2026, ya independiente de Melt; Radix 19,2k estrellas, mantenido por WorkOS, 9,5 M descargas semanales. Paraglide 2 arrastra regresiones documentadas (cambio de idioma con recarga o `setLocale()` manual, `load` no invalidado), **pero D-F1 ya había elegido «ficheros de mensajes propios, sin librería» (F-53)**: el estudio mete una dependencia que el plan no necesita. Satori + resvg en SvelteKit tiene cuatro recetas públicas; no es una pérdida real. ([Bits UI tags](https://github.com/huntabyte/bits-ui/tags) · [Radix](https://github.com/radix-ui/primitives) · [Paraglide #438](https://github.com/opral/paraglide-js/issues/438))
11. **Contratación: 60 a 1 en España** (Indeed: 700-800 ofertas de React frente a 12-13 de Svelte; LinkedIn mundial ≈110.000 frente a ≈900). Irrelevante para el año 1 —el código lo escriben agentes— y relevante el día que haya *due diligence* B2B o un humano de guardia. Debe constar en `decisiones.md`, no ocultarse en «no es criterio». ([Indeed ES React](https://es.indeed.com/q-react-empleos.html) · [Indeed ES Svelte](https://es.indeed.com/q-svelte-empleos.html))
12. **Los bytes no son decisivos bajo esta lente:** con el service worker precacheando la concha, Chrome genera **caché de código completa** en la instalación y las visitas siguientes no compilan; el ahorro de ~70 KB comprimidos vale 0,4-0,6 s en la **primera** visita en un Moto G con 4G lenta (donde importa: las 22 landings con tablero) y ≈0 en la partida diaria. Ventaja real, de segundo orden, que no compra por sí sola un cambio de framework. ([V8 · code caching for devs](https://github.com/v8/v8.dev/blob/main/src/blog/code-caching-for-devs.md) · [V8 · cost of JS 2019](https://github.com/v8/v8.dev/blob/main/src/blog/cost-of-javascript-2019.md) · [Web Almanac 2025 · Performance](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/content/en/2025/performance.md))

---

## 1. Cómo se ha hecho este dictamen y qué límites tiene

- **38 consultas de búsqueda y unas 45 lecturas** el 7 de septiembre de 2026. El proxy bloquea `svelte.dev`, `nextjs.org`, `arxiv.org`, `stateofjs.com`, `npmjs.com`, `v8.dev`, `web.dev` y `almanac.httparchive.org`. **Todo lo oficial se ha leído en su espejo de GitHub** (los repositorios `sveltejs/svelte.dev`, `sveltejs/kit` rama `version-3`, `sveltejs/ai-tools`, `vercel/next.js`, `v8/v8.dev`, `HTTPArchive/almanac.httparchive.org`), que es el mismo texto fuente. Las encuestas (State of JS 2025, Stack Overflow 2025) y las cifras de npm vienen de resúmenes de terceros y se marcan como **secundarias**.
- **Dato primario propio:** los ficheros JSON de resultados de SvelteBench se han leído uno a uno del repositorio (16 ficheros, octubre de 2025 a abril de 2026). No he ejecutado ningún banco de pruebas.
- **Lo que es juicio:** la puntuación 3/5, la estimación de 0,4-0,6 s de la línea 12 y el diseño de las condiciones de la §4.
- **Sesgo declarado:** el estudio lo firma el agente que va a escribir el código; este dictamen lo firma un agente que no lo va a escribir. Ninguno de los dos ha medido un Moto G.

---

## 2. Evidencia por pregunta

### 2.1 ¿Cómo de bien escriben los modelos actuales Svelte 5 con runas frente a React con hooks y Next App Router?

**Lo que dice el estudio:** C4 = Next 7, SvelteKit 6; «corpus menor y contaminado por Svelte 4, pero el compilador rechaza casi todo lo obsoleto».

**Lo que dice la evidencia:**

| Modelo (sin documentación en contexto) | pass@1 medio | Fallos concentrados en | Fecha del fichero |
|---|---:|---|---|
| Claude Opus 4.5 | **1,00** | — | 24-11-2025 |
| Claude Sonnet 4.6 | **1,00** | — | 17-02-2026 |
| Gemini 3.1 Pro (preview) | **1,00** | — | 20-02-2026 |
| GPT-5.3-codex | 0,97 | `$inspect` 0,7 | 25-02-2026 |
| Qwen 3.6-Plus (preview) | 0,98 | `$inspect` 0,9 | 31-03-2026 |
| kat-coder-pro-v2 | 0,91 | `$derived` 0,8 | 29-03-2026 |
| Claude Sonnet 4 (mayo 2025) | 0,90 | `$inspect` 0,2 | 18-10-2025 |
| GLM-5-turbo · MiMo-v2-pro · GLM-5v-turbo | 0,87-0,89 | snippets 0,2-0,8; `$inspect` 0,4-0,6 | 03/04-2026 |
| Nemotron-3-super 120B | 0,74 | `$props` 0,3; snippets 0,1 | 11-03-2026 |
| **Claude Haiku 4.5** | **0,66** | **snippets 0,0**; `$inspect` 0,6 | 18-10-2025 |
| qwen3-coder-next · intellect-3 | 0,55-0,68 | snippets 0,2 | 12-2025 / 02-2026 |
| qwen3-vl-8b · cogito-v2 405B | 0,09-0,10 | todo salvo hello-world | 17-10-2025 |

Tres lecturas. **(a)** `$state`, `$derived` y `$effect` ya no fallan en ningún modelo de gama media o alta: los errores que quedan están en la sintaxis más nueva (snippets, `$inspect`), que este proyecto casi no usa. **(b)** pass@10 = 1,0 en todos los modelos de la mitad superior de la tabla: con `svelte-check` como puerta, el fallo residual es un reintento. **(c)** **Haiku 4.5 no vale para escribir Svelte** (0,66; snippets 0,0). El plan debe fijar la clase de modelo para ficheros `.svelte`, cosa que hoy no hace.

**Límite del dato:** SvelteBench mide componentes de Svelte, no SvelteKit. Nada en él prueba `load`, `+page.server.ts`, *hooks*, adaptadores ni el service worker, que es exactamente el terreno donde SK2 y SK3 se confunden (§2.3).

**El otro lado del banco:** Web-Bench (20 tareas por proyecto, pass@2) muestra la brecha de corpus con modelos de principios de 2025: Claude 3.7 sin razonamiento **React 65 / Svelte 25**; con razonamiento 60 / 55; GPT-4o 35 / 20; DeepSeek-R1 40 / 40. Conclusión compatible con la tabla anterior: la brecha era grande hace 18 meses y la cierran los modelos que razonan. No hay un banco equivalente publicado para Next 16 con *Cache Components*; hay evidencia cualitativa abundante de que los agentes producen Pages Router y `middleware.ts` («la mayoría de los modelos se entrenaron con años de ejemplos de Pages Router»), y de que desactivan `exhaustive-deps` en `useEffect` generando cierres obsoletos. El propio estudio lo admite en §4.5 y §5.1.

**Sobre el «fallo silencioso»:** el estudio acierta en que el fallo típico de Next 16 (servir el caso de ayer) es peor que el típico de Svelte 5 (un valor que no se actualiza). Pero **Svelte 5 también falla en silencio**: bucles de `$effect` (issues #9944, #16224; el issue #14697 del propio equipo explica «por qué usar `$effect` no es buena idea si se puede evitar»), reactividad perdida al desestructurar `$state` o al mover lógica a un `.js` sin extensión `.svelte.js`, y avisos `state_referenced_locally` que aparecen «solo un nivel de profundidad» (#16343). El reductor del tablero (`estado.svelte.ts`) del estudio vive justo ahí. Se cubre con una regla: **prohibido `$effect` fuera de una lista blanca de tres ficheros** (persistencia, cronómetro, service worker) y `$derived` para todo lo demás, con lint.

**Sobre el «compilador rechaza lo obsoleto»:** solo con `runes: true`. En legacy mode `export let` y `$:` compilan y funcionan; mezclados con runas en el mismo componente sí fallan. Forzar `runes: true` en `compilerOptions` obliga también a las dependencias (#9632, cerrado): la receta vigente es `vitePlugin.dynamicCompileOptions({ filename }) => !filename.includes('node_modules') && { runes: true }`. Hay que escribirla el día 1 o la mitigación del estudio no existe.

**Utillaje oficial para agentes, comparado con justicia:**

| | Next.js 16.3 | Svelte / SvelteKit (sv ≥ 0.17) |
|---|---|---|
| Documentación | **Dentro del paquete, de la versión instalada, sin red** (`node_modules/next/dist/docs/`) | MCP remoto/local que lee **«la documentación actualizada de svelte.dev/docs»**; `llms.txt` por sección; sin fijación de versión documentada |
| Instrucciones | `AGENTS.md` y `CLAUDE.md` generados y actualizados por `next dev` (bloque gestionado) | `sv add ai-tools`: plugin de Claude Code / opencode, MCP, *skills* `svelte-code-writer` y `svelte-core-bestpractices`, subagente `svelte-file-editor`; el `AGENTS.md` oficial **no contiene reglas de sintaxis**, solo el bucle de herramientas |
| Verificación | MCP `/_next/mcp`: `get_compilation_issues`, `compile_route`; páginas de error con «copiar prompt» | `svelte-autofixer`: errores del compilador + comprobaciones propias (p. ej. `$state x = 3`, snippets dentro de `<script>`, variables en CSS) + `eslint-plugin-svelte`; bandera `--svelte-version` |
| Skills de migración | `next-cache-components-adoption`, `next-partial-prefetching-adoption`, `next-dev-loop` | `sv migrate sveltekit-3 --tasks all` (lista de tareas, no automático del todo) |

**Veredicto parcial 2.1:** el estudio se equivoca en las dos direcciones. Next tiene hoy la mitigación **más sólida por construcción** (documentación que no puede desincronizarse de la versión instalada); Svelte tiene un verificador estático mejor integrado y unos modelos de frontera que ya no se equivocan en runas. C4 corregido: **Next 7-8, SvelteKit 6-7.** La distancia no cambia; el motivo sí.

### 2.2 Volumen de corpus y ejemplos: SvelteKit 2 + Svelte 5 frente a Next 15/16

- **npm (secundario, fuentes no coincidentes entre sí):** Next 6,5 M descargas semanales frente a 500 k de SvelteKit (13×) según PkgPulse; React ≈28 M frente a ≈0,7-1,8 M de Svelte. Crecimiento interanual mayor en Svelte (+40-55 %). Orden de magnitud: **10-15 a 1.**
- **Encuestas (secundario):** State of JS 2025 (publicado en febrero de 2026): React uso 85 % / retención 72 %; Svelte uso 27 % / retención 86 % (**Svelte 5: 91 %**, primero); Next.js 59 % de uso entre metaframeworks. Stack Overflow 2025: React 44,7 %, Next 21,5 %. Web Almanac 2024: React en el 10 % de las páginas; Svelte no aparece.
- **Contaminación del corpus, en los dos lados:** el de Svelte mezcla 4 y 5 (`export let`, `$:`, `on:click`); el de Next mezcla Pages Router, App Router 13-15 con caché implícito y 16 con *Cache Components*. Svelte 5 salió en octubre de 2024; Next 16 en octubre de 2025: **el corpus de Next 16 es un año más joven que el de Svelte 5.** Y la próxima grieta, SK2/SK3, la abre SvelteKit dentro de nuestro calendario.
- **GitHub:** el topic `svelte5` tiene 288 repositorios; no hay cifra comparable limpia para App Router.

**Veredicto parcial 2.2:** el estudio tiene razón en que el corpus de Next es mayor «con diferencia», y la prueba de la §2.1 muestra que, para modelos de frontera, **el tamaño del corpus ya no predice el error en sintaxis básica**; predice el error en las esquinas (SvelteKit, adaptadores, service worker). Ahí es donde hay que medir en la prueba de 1,5 días.

### 2.3 SvelteKit 3 en RC: qué cambia, cuándo, y qué le pasa a un proyecto fijado en SK2 en octubre de 2026

**Estado:** RC del 13 de agosto de 2026; a 1 de septiembre, `3.0.0-next.25`; «estable en un futuro próximo, sin más rupturas»; **sin fecha.** La línea 2.x sigue publicando parches después del RC (2.70.1-2.70.3). Svelte 5.57. `sv` 1.0.0-next.4; **`sv create` ya genera `#lib`** en proyectos nuevos de SK2.

**Rupturas de SK3 que tocan lo que este proyecto va a escribir** (guía de migración, rama `version-3`):

| Ruptura | Dónde pega en `frontend.md` | Coste de migrar |
|---|---|---|
| **`$service-worker` eliminado**: `version` → `$app/env`; `assets`/`immutable`/`prerendered` → `$app/manifest`; `resolved` → `$app/paths`; nuevo `$app/service-worker` con `src/service-worker/tsconfig.json`; el SW se registra como `type: 'module'` | §6.4 entero (F-45, riesgo R5) está escrito contra el módulo que desaparece | Bajo si **un solo fichero** importa `$service-worker`; alto si se esparce |
| **`adapter-vercel`: el runtime *edge* deja de soportarse** | §9.2 «SvelteKit sobre Workers resuelve en el borde»: cierto en Cloudflare, **falso en Vercel con SK3**; el plan despliega en Vercel | Decisión de hosting, no de código |
| `svelte.config.js` no soportado: config en el plugin de Vite; ocho opciones eliminadas | F-02, F-05 | Mecánico |
| `$lib` → `#lib` **con extensión de fichero obligatoria** en los imports | Todos los imports | Cero si se empieza con `#lib` (sv ≥ 0.17) |
| `$app/stores` eliminado; `$app/environment` → `$app/env`; `$env/*` → `$app/env/private|public` | Cuenta, analítica, consentimiento | Mecánico |
| `pushState/replaceState` → `goto({ shallow: true })`; `invalidateAll` → `refreshAll`; `goto` rechaza URL sin ruta | Navegación tablero → resultado → reconstrucción | Mecánico si hay un helper |
| `error()` cambia de firma; `handleError` recibe **todos** los errores y puede fijar el status; los *matchers* pasan a `src/params.ts` | Sentry (F-06), `/r/[id]`, 410 del archivo | Medio |
| Mínimos: Node 22.17, TypeScript 6, Svelte 5.56.4, Vite 8.0.12, `vite-plugin-svelte` 7 | CI | Bajo |
| Cookies con `path: '/'` por defecto; CSRF con `trustedOrigins`; peticiones mutativas de otro origen sin `Content-Type` rechazadas | Magic link, sesión, `/api/*` | Bajo, pero de seguridad |

**Qué le pasa a un proyecto fijado en SK2 en octubre:** (1) sigue compilando y desplegando; (2) recibe parches de bugs con alta probabilidad durante meses (precedente: 1.30.4 catorce meses después de SK2; `svelte@4.2.20` diecinueve meses después de Svelte 5); (3) **no tiene garantía escrita de parches de seguridad** en la línea vieja (el aviso de CVEs de enero de 2026 solo lista versiones 2.x/5.x; no hay política de soporte publicada); (4) **su documentación de referencia cambia de sitio** el día del estable: svelte.dev pasará a describir SK3 y las versiones antiguas quedarán en un subdominio (precedente `v4.svelte.dev`), al que ni el MCP ni los `llms.txt` por defecto apuntan.

**El riesgo real, formulado bien:** no es que un agente escriba `#lib`; es que el agente que arregle un bug en `+page.server.ts` en diciembre lea `refreshAll`, `$app/env` o `handleError` de SK3 en la documentación «actualizada» y lo escriba en un proyecto SK2. La mitigación del estudio (instantánea de `llms.txt` en `web/docs-vendor/`) es la correcta **si va acompañada de** desactivar `get-documentation` del MCP tras el estable y de una lista de identificadores prohibidos en lint (§4, cláusula 3).

**Veredicto parcial 2.3:** riesgo **alto pero acotado**: todo lo que rompe SK3 es mecánico y `sv migrate` lo lista; lo que no es mecánico (SW, edge en Vercel) hay que decidirlo ahora, no en S11. El estudio lo pone en «Alto» y lo mitiga a medias.

### 2.4 Ecosistema: primitivas accesibles, i18n, animación, tests, OG

| Pieza | Next / React | SvelteKit / Svelte | Juicio |
|---|---|---|---|
| Primitivas accesibles | Radix: 19,2k ★, 201 issues, mantenido por WorkOS, actualizado el 8-8-2026, 9,5 M descargas/semana | Bits UI: 3,5k ★, 52 issues, **2.19.0 el 20-8-2026**, independiente de Melt (Melt es «inspiración»); Melt next-gen 330 ★, voluntario | Bits UI es creíble y activo, y 5× más pequeño. La auditoría axe de F-07 es la respuesta correcta; **las siete primitivas del plan son las que Bits UI tiene más rodadas** |
| i18n | `next-intl`, maduro | Paraglide 2: compilador y *tree-shaking* (hasta 70 % menos), **pero** cambio de idioma con `data-sveltekit-reload` o `setLocale()` manual, `load` no invalidado (#438), locale fuera del contexto de petición | **Moot:** D-F1/F-53 eligió ficheros propios sin librería. El estudio no debería cambiarlo |
| Animación | Motion | `svelte/transition` y `svelte/motion` dentro; Svelte Motion (API de Framer para Svelte 5); GSAP es agnóstico | Empate; ventaja de bytes para Svelte |
| Tests | RTL + Vitest, maduro | Documentación oficial recomienda `vitest-browser-svelte`; `@testing-library/svelte` tiene soporte «experimental» de Svelte 5 y jsdom sufre con las runas | Ligera desventaja; **usar modo navegador de Vitest desde F-05**, no jsdom |
| OG | `next/og` | satori + resvg: recetas de Geoff Rich, spences10, `@ethercorps/sveltekit-og`, `og-img` (agnóstico) | Media jornada, como dice el estudio. No es pérdida real |
| Agnósticos | Playwright, axe, Lighthouse CI, PostHog, Sentry, Supabase | Igual | — |

**Veredicto parcial 2.4:** C5 = Next 10, SvelteKit 8 es justo. Lo único que corregiría es **quitar Paraglide** del cambio.

### 2.5 Personas que sepan Svelte, si algún día hay que contratar

- **España (Indeed, septiembre de 2026):** 700-800 ofertas con «React» frente a 12-13 con «Svelte». **≈60 a 1.** InfoJobs tiene ofertas de Svelte, pocas.
- **Mundo:** ≈110.000 ofertas de React en LinkedIn frente a ≈900 de Svelte; en EE. UU. ≈20 a 1; cuota de anuncios 68 % React / 7 % Svelte.
- **Mitigación real:** «la transición de desarrolladores con experiencia en React a Svelte es directa» según las empresas que lo usan; Svelte tiene la retención más alta de las encuestas (86-91 %).

**Veredicto parcial 2.5:** el estudio lo excluye del criterio con razón para el año 1 (no hay equipo humano), pero **tiene que constar en la decisión** porque afecta a la *due diligence* de una licencia B2B y al día en que el fundador quiera un humano de guardia. No refuta nada; encarece la salida.

### 2.6 ¿Son decisivos 40 KB frente a 110 KB para un tablero que se juega 8 minutos, con PWA y visitas recurrentes?

- **Coste de la primera visita:** en 2019 un Moto G4 tardaba 3-4× más que un Pixel 3 en ejecutar el JS de una página real, y un gama baja más de 6×; hasta el 30 % del tiempo de carga es JavaScript (V8). Los ~70 KB comprimidos de diferencia (~200 KB sin comprimir) son ≈0,35 s de descarga en 4G lenta más 0,1-0,3 s de compilación y ejecución en ese teléfono: **0,4-0,6 s en la primera visita.** Importa para LCP < 2,5 s en las 22 landings con tablero que llegan por búsqueda, que **son primeras visitas**.
- **Coste de la visita recurrente:** con service worker, «Chrome tiene caché de código *eager* si se usa un service worker para cachear scripts»: los scripts guardados en `install` reciben **caché de código completa**, y sin SW la caché de código llega igual a la tercera carga si las dos primeras ocurren en 72 h. Para el jugador diario, el tamaño del runtime es **≈0**.
- **Contexto:** la mediana móvil es 558 KB de JS (44 % sin usar); los dos presupuestos del proyecto (110 KB y 40-50 KB) están muy por debajo. El 77 % de los sitios móviles ya tienen INP bueno; el INP del 6×6 lo decide el diseño de los manejadores y el resaltado por CSS (§6.2 del estudio), no 40 KB de React. Una fuente secundaria estima que «la elección de framework influye en los últimos 10 puntos porcentuales de la tasa de aprobado de CWV».
- **Y el estudio ya presupuesta las landings a ≤40 KB en Next** (isla del vistazo, §7): la ventaja de SvelteKit en primera visita es de **holgura**, no de aprobado/suspenso.

**Veredicto parcial 2.6:** ventaja real, **de segundo orden**, no decisiva. Bajo esta lente no compra el cambio; bajo C1 (que no es mía) el estudio la valora en 3 puntos de 10 y eso es discutible pero no absurdo.

---

## 3. Errores y omisiones del estudio bajo esta lente (lo que hay que corregir en `frontend.md` si se aprueba)

1. **§4.5 C4, NX:** falta el utillaje oficial de Next 16.2/16.3 para agentes (docs de la versión instalada dentro del paquete, `AGENTS.md` generado, MCP de compilación, *skills* de Cache Components). Con eso, la regla «prohibido `unstable_cache`, `revalidate`, `middleware.ts`» de §8 deja de ser artesanal.
2. **§4.5 C4, SK:** «el compilador rechaza casi todo lo obsoleto» exige `runes: true` vía `dynamicCompileOptions` excluyendo `node_modules`. Escribirlo como regla del proyecto, no como propiedad del framework.
3. **§5.2, riesgo SK3:** añadir que SK3 **elimina `$service-worker`** y el *edge* de `adapter-vercel`, y que la documentación «actualizada» del MCP será la de SK3 tras el estable. La mitigación necesita las cláusulas 3 y 4 de la §4.
4. **§3, versiones:** el estudio cita SvelteKit 2.57.1 / Svelte 5.55.0; a 1 de septiembre son 2.70.3 / 5.57. Fijar sobre 2.70.x.
5. **§6.5 y §9:** retirar Paraglide; F-53 (ficheros propios) sigue vigente.
6. **§2, «lo que deliberadamente no es criterio»:** la escasez 60:1 de Svelte en España debe constar en D-F1-bis como coste aceptado, no como criterio excluido.
7. **Modelo mínimo:** ningún fichero `.svelte`/`.svelte.ts` lo escribe un modelo de clase Haiku (0,66 en SvelteBench). El estudio no fija clase de modelo.

---

## 4. Condiciones bajo las que acepto el cambio

La compuerta de §10 del estudio (cuatro entregables, viernes 11 de septiembre, rojo en uno = vuelta a Next) se mantiene. **Se añaden siete cláusulas.** Si una falla, la recomendación queda refutada bajo esta lente y se vuelve a Next 16 con la arquitectura de §8 del estudio **y** con su utillaje oficial de agentes.

**Cláusula 1 · Esqueleto que ya es SK3-compatible donde cuesta cero.** `sv create` ≥ 0.17 con `#lib` y extensiones en los imports; `@sveltejs/kit@2.70.x`, `svelte@5.57.x`, `vite@8` fijados con versión exacta y Renovate en «solo parches»; `runes: true` para el código propio mediante `vitePlugin.dynamicCompileOptions` excluyendo `node_modules`; `svelte-check` y `eslint-plugin-svelte` como puertas de CI desde el primer commit (F-05). **Verde:** un fichero con `export let` o `$:` **falla el build**, demostrado con un test.

**Cláusula 2 · Superficies sensibles a SK3 detrás de un solo fichero cada una.** Un único módulo importa `$service-worker` (`src/lib/sw/manifest.ts`); un único helper de navegación envuelve `pushState/replaceState/goto/invalidateAll`; un único módulo lee `$env/*`; `$app/stores` prohibido por lint (usar `$app/state`); un helper propio para `error()`. **Verde:** `grep` en CI de esos identificadores fuera de sus ficheros devuelve cero. Es lo que convierte la migración a SK3 en «medio día con `sv migrate`» en vez de en una semana.

**Cláusula 3 · Documentación fijada, no «actualizada».** Instantánea de `llms.txt` de SvelteKit 2.70 y Svelte 5.57 en `web/docs-vendor/`, citada en `web/CLAUDE.md` como única fuente; `svelte-autofixer` permitido (con `--svelte-version 5`); **`get-documentation` del MCP oficial desactivado el día que SK3 sea estable**; lista negra en lint de identificadores exclusivos de SK3 (`$app/env`, `$app/manifest`, `$app/service-worker`, `refreshAll`, `trustedOrigins`, `src/params.ts`) que rompe el build con un mensaje que dice «esto es SvelteKit 3». **Verde:** la lista existe y tiene test.

**Cláusula 4 · Decisión de *edge* ahora.** O bien `/` se resuelve en Node en Vercel (`adapter-vercel`, runtime `nodejs`, caché por franja en el CDN: el mismo repliegue que el estudio da a Next en §5.1) y el argumento §9.2 se retira; o bien se despliega en Cloudflare con `adapter-cloudflare` desde S1. No se acepta «edge en Vercel» como razón del cambio porque SK3 lo elimina. **Verde:** la elección está escrita en D-F1-bis.

**Cláusula 5 · La prueba de 1,5 días mide al agente, no solo al tablero.** A los cuatro entregables de §10 se añaden tres métricas registradas en `web/README.md`:
- **Iteraciones hasta verde por entregable** (compilación + `svelte-check` + lint + test): umbral **≤ 3** en cada uno de los cuatro; el service worker puede llegar a 5.
- **Cero fallos de CI por sintaxis de Svelte 4 o API de SK3** una vez activas las cláusulas 1 y 3 (los que ocurran antes se anotan, no cuentan).
- **Tarea ciega:** un agente **sin** `docs-vendor` y con el MCP en modo «actualizado» escribe un `+page.server.ts` con `load`, `prerender` y una ruta `+server.ts` que devuelve PNG. Se anota si usa API de SK3 o mezcla `$lib`/`#lib`. **Verde:** la lista negra de la cláusula 3 lo detecta; **rojo:** produce código SK3 que compila y nadie lo detecta. Este es el dato que hoy no tiene nadie y que decide si el riesgo §2.3 es teórico o real para el modelo que usamos.

**Cláusula 6 · Ecosistema con puerta, y sin dependencias de más.** Las siete primitivas de F-07 en Bits UI 2.19 pasan axe y teclado en S2; si una falla, se escribe a mano (son primitivas). **Paraglide fuera**; F-53 sigue en ficheros propios. Tests de componente con `vitest-browser-svelte`, no con jsdom. OG con satori + resvg y el test de CI que ya exige §6.3. Modelo mínimo para ficheros Svelte: clase Sonnet o superior; **nunca Haiku**.

**Cláusula 7 · Calendario de SK3 escrito antes de que salga.** Si SK3 estable llega antes del día L (3 de noviembre), **no se migra antes del lanzamiento**, ocurra lo que ocurra. La migración (`sv migrate sveltekit-3 --tasks all`) se presupuesta en 1-2 días de agente en S11-S12, con la cláusula 2 como garantía de que es mecánica. Si SK2 deja de recibir parches de seguridad antes de S11, se adelanta a la primera semana sin ruta crítica y se avisa al fundador; no se decide en caliente.

**Regla de decisión, escrita antes del dato:** los cuatro entregables de §10 verdes **y** las siete cláusulas cumplidas el viernes 11 de septiembre → D-F1-bis, y no se reabre. Cualquier rojo → Next 16 con la §8 del estudio, `AGENTS.md` generado por `next dev`, `next-cache-components-adoption` como *skill* y las tres reglas de caché en lint. Se han perdido 1,5 días en ambos casos.

---

## 5. Lo que este dictamen no dice

- No dice que Next sea mejor: bajo mi lente lo es por poco (C4 +1, C5 +2) y el estudio ya lo reconoce; los criterios que deciden la matriz (C1, C3, C6, C7) no se juzgan aquí.
- No dice que SvelteKit 3 sea un peligro para el producto: es un coste de 1-2 días si se hace la cláusula 2; es un peligro solo si se ignora hasta diciembre.
- No dice que los bytes no importen: dice que importan en la primera visita y no en la octava, y que este proyecto vive de las dos.

---

## 6. Fuentes

Consultadas el 7 de septiembre de 2026. Los sitios oficiales bloqueados por el proxy se han leído en sus repositorios fuente en GitHub (mismo texto).

**Errores de los modelos con Svelte 5 y con React/Next**
- [khromov/svelte-bench](https://github.com/khromov/svelte-bench) y sus ficheros de resultados leídos directamente: [Opus 4.5](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2025-11-24T20-15-30.941Z.json) · [Sonnet 4.6](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-02-17T23-58-02.044Z.json) · [Gemini 3.1 Pro](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-02-20T03-42-52.185Z.json) · [GPT-5.3-codex](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-02-25T02-31-56.368Z.json) · [Sonnet 4](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2025-10-18T19-41-41.432Z.json) · [Haiku 4.5](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2025-10-18T17-44-14.389Z.json) · [Qwen 3.6-Plus](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-03-31T21-47-30.068Z.json) · [kat-coder-pro-v2](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-03-29T02-27-41.548Z.json) · [GLM-5-turbo](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-03-17T23-02-13.950Z.json) · [MiMo-v2-pro](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-03-19T00-33-33.718Z.json) · [GLM-5v-turbo](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-04-01T17-59-57.688Z.json) · [Nemotron-3-super](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-03-11T23-42-02.237Z.json) · [qwen3-coder-next](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2026-02-05T13-20-07.483Z.json) · [intellect-3](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2025-12-01T15-32-23.793Z.json) · [qwen3-vl-8b](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2025-10-17T19-44-13.413Z.json) · [cogito-v2 405B](https://raw.githubusercontent.com/khromov/svelte-bench/main/benchmarks/benchmark-results-2025-10-17T19-39-14.181Z.json)
- [Web-Bench: A LLM Code Benchmark Based on Web Standards and Frameworks (arXiv 2505.07473)](https://arxiv.org/abs/2505.07473) · [tabla por framework (ResearchGate)](https://www.researchgate.net/publication/391676652_Web-Bench_A_LLM_Code_Benchmark_Based_on_Web_Standards_and_Frameworks)
- [AI / LLM prompt/rules for Svelte 5 · discusión #14125](https://github.com/sveltejs/svelte/discussions/14125) · [Svelte 5 Runes: migrate without breaking reactivity (arc.dev)](https://arc.dev/employer-blog/svelte-5-runes-migration-guide/)
- Fallos silenciosos de Svelte 5: [#9944 `$effect` circular](https://github.com/sveltejs/svelte/issues/9944) · [#16224 bucle con arrays](https://github.com/sveltejs/svelte/issues/16224) · [#14697 por qué evitar `$effect`](https://github.com/sveltejs/svelte/issues/14697) · [#11883 `state_referenced_locally`](https://github.com/sveltejs/svelte/issues/11883) · [#16343 inconsistencias](https://github.com/sveltejs/svelte/issues/16343) · [#12320 props no reactivas](https://github.com/sveltejs/svelte/issues/12320)
- Modo runas: [#9632 runes forzado en librerías externas](https://github.com/sveltejs/svelte/issues/9632) · [#10707 opción `only-project`](https://github.com/sveltejs/svelte/discussions/10707) · [PR #17951 `runes` como función](https://github.com/sveltejs/svelte/pull/17951) · [vite-plugin-svelte · config](https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md)
- Errores de agentes en React/Next: [AI-Generated React Code, 9 Patterns That Fail in Production](https://theroadtoenterprise.com/blog/vibe-coding-vs-production-coding-react) · [5 Things AI Can't Do, Even in React](https://dev.to/devunionx/5-things-ai-cant-do-even-in-react-1f8p) · [AGENTS.md for Next.js: stop agents writing outdated code](https://kuldeepmodi.vercel.app/blog/agents-md-nextjs-ai-coding-agents) · [Next.js 16 "use cache" errors](https://www.iloveblogs.blog/post/nextjs-16-use-cache-cache-components-errors-fix) · [A Survey of Bugs in AI-Generated Code (arXiv 2512.05239)](https://arxiv.org/html/2512.05239v1)

**Utillaje oficial para agentes**
- Next.js: [Guides: AI Coding Agents (fuente en vercel/next.js)](https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/ai-agents.mdx) · [Next.js 16.3: AI Improvements](https://nextjs.org/blog/next-16-3-ai-improvements)
- Svelte: [docs/ai · MCP overview](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/docs/ai/30-mcp/10-mcp.md) · [MCP tools](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/docs/ai/30-mcp/40-tools.md) · [Skills](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/docs/ai/40-skills/10-skills.md) · [sveltejs/ai-tools · svelte-autofixer.ts](https://github.com/sveltejs/ai-tools/blob/main/packages/mcp-server/src/mcp/handlers/tools/svelte-autofixer.ts) · [AGENTS.md oficial](https://github.com/sveltejs/ai-tools/blob/main/tools/instructions/AGENTS.md) · [svelte-llm (Khromov)](https://svelte-llm.khromov.se/)

**SvelteKit 3 y soporte de SK2**
- [The SvelteKit 3 Release Candidate is here (13-8-2026)](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/blog/2026-08-13-sveltekit-3-release-candidate.md) · [What's new in Svelte: September 2026](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/blog/2026-09-01-whats-new-in-svelte-september-2026.md) · [Migrating to SvelteKit v3 (rama version-3)](https://github.com/sveltejs/kit/blob/version-3/documentation/docs/60-appendix/35-migrating-to-sveltekit-3.md) · [sv migrate](https://svelte.dev/docs/cli/sv-migrate)
- Precedentes de mantenimiento: [@sveltejs/kit@1.30.4 (16-2-2025)](https://github.com/sveltejs/kit/releases/tag/%40sveltejs%2Fkit%401.30.4) · [svelte@4.2.20 (20-5-2026)](https://github.com/sveltejs/svelte/releases/tag/svelte%404.2.20) · [CVEs affecting the Svelte ecosystem (15-1-2026)](https://github.com/sveltejs/svelte.dev/blob/main/apps/svelte.dev/content/blog/2026-01-15-cves-affecting-the-svelte-ecosystem.md) · [Svelte · endoflife.date](https://endoflife.date/svelte)

**Corpus y adopción (secundario)**
- [State of JavaScript 2025 · Front-end frameworks](https://2025.stateofjs.com/en-US/libraries/front-end-frameworks/) · [Meta-frameworks](https://2025.stateofjs.com/en-US/libraries/meta-frameworks/) · [2025 Stack Overflow Developer Survey · Technology](https://survey.stackoverflow.co/2025/technology) · [Next.js vs SvelteKit 2026 (PkgPulse)](https://www.pkgpulse.com/guides/nextjs-vs-sveltekit-2026) · [npm download trends 2026 (PkgPulse)](https://www.pkgpulse.com/guides/npm-download-trends-which-framework-actually-growing) · [Web Almanac 2024 · JavaScript](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/content/en/2024/javascript.md)

**Ecosistema**
- [Bits UI](https://github.com/huntabyte/bits-ui) · [tags](https://github.com/huntabyte/bits-ui/tags) · [Melt UI next-gen](https://github.com/melt-ui/next-gen) · [Radix Primitives](https://github.com/radix-ui/primitives) · [radix-ui en Snyk](https://security.snyk.io/package/npm/radix-ui)
- [Paraglide JS](https://github.com/opral/paraglide-js) · [#438 load no invalidado](https://github.com/opral/paraglide-js/issues/438) · [Paraglide 2.0 migration (dropanote)](https://dropanote.de/en/blog/20250506-paraglide-migration-2-0-sveltekit/)
- [vitest-browser-svelte](https://github.com/vitest-community/vitest-browser-svelte) · [testing-library/svelte #284 (Svelte 5)](https://github.com/testing-library/svelte-testing-library/issues/284) · [Svelte Motion](https://motion.svelte.page/) · [discusión #17360 animación](https://github.com/sveltejs/svelte/discussions/17360)
- OG: [og-img](https://github.com/fabian-hiller/og-img) · [spences10/og-image-gen](https://github.com/spences10/og-image-gen) · [Geoff Rich · social images](https://geoffrich.net/posts/svelte-social-image/) · [@ethercorps/sveltekit-og](https://github.com/etherCorps/sveltekit-og)

**Contratación**
- [Indeed España · React](https://es.indeed.com/q-react-empleos.html) · [Indeed España · Svelte](https://es.indeed.com/q-svelte-empleos.html) · [InfoJobs · Svelte](https://www.infojobs.net/ofertas-trabajo/svelte) · [Svelte vs React (thefrontendcompany)](https://www.thefrontendcompany.com/posts/svelte-vs-react) · [Svelte vs React 2026 (tech-insider)](https://tech-insider.org/svelte-vs-react-2026/)

**Bytes, caché de código y CWV**
- [The cost of JavaScript in 2019 (V8, fuente)](https://github.com/v8/v8.dev/blob/main/src/blog/cost-of-javascript-2019.md) · [Code caching for JavaScript developers (V8, fuente)](https://github.com/v8/v8.dev/blob/main/src/blog/code-caching-for-devs.md) · [Web Almanac 2025 · Performance (fuente)](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/content/en/2025/performance.md) · [Core Web Vitals Technology Report](https://github.com/HTTPArchive/cwv-tech-report) · [CWV by framework (webvitals.tools, secundario)](https://webvitals.tools/benchmarks/)
