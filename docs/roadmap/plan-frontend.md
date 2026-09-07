# Plan de frontend hasta la beta y el lanzamiento

Autor: `desarrollador-frontend`. Fecha: 7 de septiembre de 2026.
Fuentes que este plan obedece: `docs/roadmap/supuestos.md`, `docs/catalogo-productos.md` §4 (F1-F19), `docs/propuesta-mejoras-producto.md` §8 (aprobada como base), `docs/propuesta-jugabilidad.md`, `docs/propuesta-jugabilidad-expediente.md`, `docs/arbol-web-final.md`, `docs/decisiones.md`.

**Este plan no decide alcance de producto.** Decide cómo se construye, en qué orden y qué hace falta de quién para que no haya que rehacer nada. Donde he encontrado una contradicción entre documentos aprobados, la señalo en §9 en vez de elegir en silencio.

---

## 0. Cuatro avisos antes de la tabla

**1. Corrección de calendario.** `supuestos.md` dice «lunes 8 de septiembre de 2026 (semana 1)», pero el 8 de septiembre de 2026 es martes. Los hitos que da el mismo documento (beta en la semana 7 = 19-25 de octubre; lanzamiento en la 9-10 = 2-13 de noviembre) solo cuadran si la semana 1 empieza el **lunes 7 de septiembre**. Ese es el calendario que uso:

| Semana | Fechas | Semana | Fechas |
|---|---|---|---|
| S1 | 7-13 sep | S6 | 12-18 oct |
| S2 | 14-20 sep | **S7** | **19-25 oct · beta cerrada** |
| S3 | 21-27 sep | S8 | 26 oct - 1 nov |
| S4 | 28 sep - 4 oct | **S9** | **2-8 nov · lanzamiento** |
| S5 | 5-11 oct | S10 | 9-15 nov · estabilización |

**2. El cliente no lleva solver ni certificado antes de acusar.** `propuesta-jugabilidad.md` lista «solver en cliente» como dependencia del interrogatorio (V4) y de Sabueso (V11). **No se puede hacer así** sin romper la regla del catálogo («la solución no viaja al cliente hasta que se acusa, verificable inspeccionando la respuesta de red», F5). Un menú vivo calculado en el navegador exige tener las respuestas en el navegador; y las respuestas del interrogatorio son la solución troceada. Decisión de este plan, que hay que registrar y que cambia dos contratos de backend: **el menú vivo, Sabueso, Comprobar y la contraprueba son llamadas al servidor**, con el estado del tablero como cuerpo de la petición. Consecuencia honesta: esas cuatro acciones **no funcionan sin conexión**, y hay que decirlo en pantalla en vez de fingir que sí (§8, riesgo R4).

**3. La pantalla de resultado no se programa hasta que `disenador-ux-ui` firme su especificación.** Es el punto 26 de §8.2 de `propuesta-mejoras-producto.md`, aprobado como base, y lo cumplo literalmente: F-24 no arranca sin la spec firmada.

**4. Expediente entra en el lanzamiento y el árbol web no lo sabe.** `supuestos.md` mete «jueves de Expediente (tabla del comisario)» en el alcance del lanzamiento público; `arbol-web-final.md` §2 asume el escenario conservador y deja `/expediente` y otras cuatro URL en P1. Planifico las 36 URL P0 del árbol **más un paquete de cinco URL** (F-40) que se activa si Expediente sale el día 1, que es lo que dice el alcance. Cuesta medio día si se decide ahora y tres si se decide en la semana 8.

---

## 1. Stack: qué se elige, por qué, y qué no se toca después

### D-F1 · Next.js 15, App Router, React Server Components

**Elegido frente a SvelteKit.** No por gusto: por tres exigencias del árbol web que Next resuelve sin trabajo extra.

1. **«HTML servido, no dependiente de JS»** (§4.1, regla 2 del árbol) con cinco modos de renderizado distintos en el mismo proyecto: SSG-diario para `/`, SSG para las landings, ISR para el archivo, SSR para `/r/[id]` y CSR+noindex para cuenta. La matriz de renderizado del árbol está escrita en el vocabulario del App Router; traducirla a SvelteKit es trabajo de traducción sin beneficio.
2. **RSC deja el tablero como única isla hidratada.** El enunciado, el plano, las pistas, la FAQ y las tablas comparativas salen del servidor y **no cuestan JavaScript en el cliente**. Es lo que hace posible el presupuesto de §7 en un móvil medio con red irregular.
3. **La imagen OG del caso del día sin spoiler** se genera con `next/og` (satori) en el mismo repositorio, sin servicio aparte ni navegador sin cabeza.

**Lo que se acepta a cambio:** más peso de framework que SvelteKit y un modelo mental más caro. Se compensa con el presupuesto de bytes de §7, que es un test de CI y no una intención.

**No se cambia a mitad.** Si en la semana 4 el presupuesto de JS no se cumple, la respuesta es recortar islas, no cambiar de framework.

### El resto del stack, sin discusión posterior

| Pieza | Elección | Motivo en una línea |
|---|---|---|
| Lenguaje | TypeScript en modo estricto (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) | El certificado del motor es un JSON con ramas; un tipo laxo aquí se paga en la reconstrucción |
| Estilos | Tailwind v4 con tema generado desde `docs/diseno/ux/tokens.json` | Un solo origen de verdad para color, espacio, tipografía y movimiento |
| Primitivas accesibles | Radix UI (Dialog, Accordion, Tabs, Popover, Switch, Toast, Tooltip) | Foco, `aria` y teclado ya resueltos; el tablero es propio porque ninguna primitiva sirve |
| Estado del puzzle | Reductor propio + registro de comandos, con `useSyncExternalStore` y selector por celda | Sin XState ni Redux: 36 celdas no justifican 15 KB y el historial es un array de comandos |
| Estado de servidor | `fetch` de RSC + TanStack Query solo en las pantallas de cuenta | El caso del día no necesita caché de cliente: lo cachea el service worker |
| PWA | Workbox vía Serwist | Es Workbox con el envoltorio que entiende el App Router |
| Analítica | PostHog (`posthog-js` con carga diferida y sin sesión grabada) | Taxonomía de `analista-datos`; se carga tras el primer render, nunca en la ruta crítica |
| Errores | Sentry (cliente y servidor), sin PII, con `replaysSessionSampleRate` a 0 | El replay de sesión de una partida es un spoiler y un dato personal |
| Tests | Vitest (lógica), Playwright (móvil emulado y Android real), axe, Lighthouse CI | Los cuatro son puertas de CI, no informes |
| Despliegue | Vercel, con previsualización por rama y `Cache-Control` explícito por tipo de ruta | Lo fija `supuestos.md` |
| i18n | Ficheros de mensajes propios (`messages/es-ES.json`), sin librería | Una sola variante al lanzar (§5.1 del árbol); la estructura ya admite `es-419` |

### Estructura del repositorio

```
web/
  src/app/                 rutas (grupos: (juego) (contenido) (cuenta) (sistema))
  src/components/ui/       primitivas envueltas sobre Radix
  src/components/juego/    tablero, cuaderno, pistas, Sabueso, resultado
  src/components/contenido/ bloques de página indexable (respuesta directa, FAQ, tabla, migas)
  src/dominio/             reductor del tablero, comandos, historial, persistencia
  src/contratos/           tipos del caso y del certificado (generados desde engine/)
  src/analitica/           taxonomía tipada de eventos
  messages/                es-ES.json
  tests/                   unit/ e2e/ fixtures/
  README.md                decisiones técnicas (obligatorio, D-F1..D-Fn)
```

---

## 2. Compuertas del área

Ninguna semana avanza sin su compuerta. Una compuerta en rojo no se salta: se para y se avisa al `director-producto`.

| Compuerta | Cuándo | Qué tiene que cumplirse | Qué bloquea si está en rojo |
|---|---|---|---|
| **CF-0 · Contratos y tokens** | Fin de S1 | Certificado v1.0 congelado (§8.2 de `propuesta-jugabilidad-expediente.md`), esquema de caso público de los dos modos, contrato `cells(pista, estado)`, `tokens.json` v1 y spec de estados del tablero firmada | **Todo el bloque de tablero.** Es la única compuerta cuyo retraso no se recupera |
| **CF-1 · Tablero verde** | Fin de S3 | 6×6 legible y tocable en 360 px con objetivos ≥44 px, ciclo de estados sin retraso, 50 acciones + 50 deshacer devuelven el estado inicial exacto, teclado completo, Lighthouse móvil ≥90 en `/` con datos reales | Resultado, reconstrucción, Expediente, landings |
| **CF-2 · Partida completa** | Fin de S5 | Un caso de Escena y un Expediente se juegan de punta a punta contra el backend real: portada → tablero → Sabueso → acusar → resultado → reconstrucción → escalafón → compartir | Beta |
| **CF-3 · Sitio completo** | Fin de S6 | Las 36 URL P0 responden 200 con su renderizado, JSON-LD válido, presupuesto de rendimiento verde, PWA instalable, eventos llegando a PostHog en un recorrido grabado | Beta |
| **CF-4 · Beta** | S7 | Los tres flujos de la beta pasan en un Android de gama media **real** (F19), Sentry sin errores no gestionados en 72 h, sin bloqueos ni toques perdidos en 3 partidas completas | Lanzamiento |
| **CF-5 · Lanzamiento** | S9, día -2 | Lighthouse verde en las 36 URL, `curl` de cada URL P0 contiene enunciado y pistas, robots y sitemaps comprobados contra el CDN, ensayo de cambio de día a las 00:00 con reloj simulado y con reloj real | El día 1 |
| **Compuerta 0 del motor** | Antes de S6 | τ de MV ≥1 % con δ ≥1.000 y β ≥30 % | El interrogatorio del miércoles. Si está en rojo, el miércoles se lanza como «clásico» y F-32 se queda detrás de bandera |

---

## 3. Semana a semana

### S1 (7-13 sep) · Arranque y contratos
Esqueleto de `web/`, CI con presupuesto desde el primer commit, tubería de tokens, tipos del caso y del certificado a partir de los contratos que el motor congela en su B-0. **La mitad de esta semana es negociar contratos, no escribir producto**, y es la mitad que ahorra las tres semanas de retrofit que el motor ya ha calculado. Termina en CF-0.

### S2 (14-20 sep) · Sistema de componentes y máquina de estados
Primitivas accesibles, componentes de producto (cabecera con ficha técnica, botonera, hoja inferior, cuenta atrás), página de estilos viva. En paralelo, el reductor del tablero con historial: es lógica pura, se prueba con Vitest y **no depende de que exista el diseño final**.

### S3 (21-27 sep) · Tablero de Escena
La semana más cara y la que no se puede comprimir: render 6×6 sin re-render global, gestos, ejes rotulados, tirar del hilo, teclado y lector de pantalla, variantes de día (celdas bloqueadas, dos plantas, rastro del objeto, sobres), persistencia y cronómetro. Termina en CF-1.

### S4 (28 sep - 4 oct) · Pistas, Sabueso, resultado y reconstrucción
Panel de pistas y sobres, Sabueso de dos niveles contra el servidor, Comprobar con celdas vacías y erróneas separadas, pantalla de resultado con los cuatro bloques fijos, reconstrucción animada con «saltar» recordado, escalafón y cuaderno de técnicas.

### S5 (5-11 oct) · Expediente, racha, archivo y cuenta
Cuaderno de tres bloques, dossier con fichas plegadas, marcas del comisario, contraprueba, acusación atómica, renderizador de reconstrucción de rejilla, tutorial del primer jueves. Racha por número de caso, calendario, archivo, cuenta por magic link. Interrogatorio si la Compuerta 0 llegó verde. Termina en CF-2.

### S6 (12-18 oct) · Compartir, landings, PWA y analítica
Tarjetas 9:16 y 1:1, Web Share, `/r/[id]` en servidor, las 36 URL con su renderizado y su JSON-LD, sitemaps y OG, service worker con caché del caso de mañana, prompt de instalación diferido, instrumentación completa. Termina en CF-3.

### S7 (19-25 oct) · **Beta cerrada**
Congelación de funcionalidad el lunes. La semana es suite en Android real, accesibilidad con lector de pantalla, corrección de lo que la beta encuentre y **nada más**. Termina en CF-4.

### S8 (26 oct - 1 nov) · Correcciones y endurecimiento
Lo que salga de la beta, por orden de daño. Banner de consentimiento y páginas legales enlazadas, presupuestos ajustados, ensayo del cambio de día.

### S9 (2-8 nov) · **Lanzamiento**
Día -2: CF-5. Día 1: publicación, alta en Search Console y Bing, vigilancia de Sentry y de Web Vitals de campo. El resto de la semana, guardia.

### S10 (9-15 nov) · Estabilización
Web Vitals de campo frente al presupuesto de laboratorio, primeras correcciones de accesibilidad reportadas, `web/README.md` y `docs/decisiones.md` al día.

---

## 4. Tabla de tareas

Formato de `supuestos.md`. «Días» = días de agente. «Horas» = horas del fundador (decisión, prueba en dispositivo real o comprobación manual en navegador). Dependencias: `F-xx` de este plan; `M-xx`/`B-x` del motor; `BE-xx` de backend; `UX-xx` de diseño; `AN-xx` de datos; `LG-xx` de legal.

### Bloque A · Arranque, contratos y calidad (S1)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-01** | Decidir y registrar el stack | `docs/decisiones.md` (D-F1), `web/README.md` | 0,5 | 1 | — | S1-S1 | D-F1 escrita con las tres razones y con lo que se acepta a cambio; el fundador la ha leído y no la reabre | Bajo |
| **F-02** | Esqueleto de la aplicación | `web/` (Next 15, TS estricto, ESLint, Prettier, grupos de rutas) | 1 | 0 | F-01 | S1-S1 | `pnpm build` verde; `/` responde con HTML que contiene texto real; `tsc --noEmit` sin `any` implícito | Bajo |
| **F-03** | Tubería de tokens de diseño | `web/src/estilos/tokens.css`, `scripts/tokens.ts` | 0,5 | 0 | UX-01 (`tokens.json` v1) | S1-S1 | Cambiar un valor en `tokens.json` y reconstruir cambia la pantalla; ningún color literal en el código (regla de lint que falla el build) | Medio: depende de que UX entregue el día 2 |
| **F-04** | Contratos tipados del caso y del certificado | `web/src/contratos/` + `tests/fixtures/` | 1 | 0 | Motor B-0 | S1-S2 | Los tipos se generan desde el esquema del motor, no se escriben a mano; 30 fixtures (uno por día de la semana ×4 + 2 de Expediente) se cargan y validan en test | **Alto: es la compuerta CF-0** |
| **F-05** | CI con presupuesto | `.github/workflows/web.yml` | 1 | 0 | F-02 | S1-S1 | Un PR que sube el JS de `/` por encima del presupuesto de §7 **falla**; typecheck, lint, Vitest, build, axe, Lighthouse CI y validador de JSON-LD en la misma tubería | Medio |
| **F-06** | Sentry | `web/sentry.*.config.ts` | 0,5 | 0,5 | F-02 | S1-S1 | Un error provocado en móvil llega con mapa de fuentes legible y sin PII; `replaysSessionSampleRate = 0` | Bajo |

### Bloque B · Sistema de componentes (S2)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-07** | Primitivas accesibles | `web/src/components/ui/` | 1 | 0 | F-03, UX-02 | S2-S2 | Diálogo, hoja inferior, acordeón, pestañas, interruptor, aviso y ayuda emergente pasan axe y se manejan solo con teclado; foco devuelto al cerrar | Bajo |
| **F-08** | Componentes de producto | `web/src/components/juego/cabecera/`, `.../botonera/` | 1 | 1 | F-07, UX-03, LG-01 | S2-S2 | Cabecera con las **tres** fichas técnicas (A, B, anulado) renderizadas desde datos; cuenta atrás al siguiente caso; botonera con Comprobar, Deshacer, Rehacer y «Empezar de cero» **visible durante la partida** | Medio: los textos de ficha no salen sin aprobación legal |
| **F-09** | Marco de la aplicación | `web/src/app/(juego)/layout.tsx`, fuentes autoalojadas, iconos, mascota | 0,5 | 0 | UX-02, UX-04 | S2-S2 | Dos caras de fuente, `woff2`, subconjunto latino, `font-display: swap`; sin salto de maquetación al cargar (CLS 0 medido) | Bajo |
| **F-10** | Página de estilos viva | `web/src/app/(sistema)/_estilos/` (noindex) | 0,5 | 0,5 | F-07 | S2-S2 | Todos los componentes y todos sus estados en una URL; `disenador-ux-ui` la usa para revisar sin abrir el código | Bajo |
| **F-11** | Máquina de estados del tablero | `web/src/dominio/tablero/` | 1,5 | 0 | F-04, UX-05 | S2-S2 | Reductor puro; historial de comandos; deshacer/rehacer ilimitado; **50 acciones aleatorias + 50 deshacer devuelven el estado inicial exacto** (test de propiedad con 1.000 semillas) | Medio |

### Bloque C · Tablero de Escena (S3) — ruta crítica

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-12** | Render del tablero sin re-render global | `web/src/components/juego/tablero/` | 1 | 1 | F-11, UX-05 | S3-S3 | CSS Grid pintado desde el HTML servido, sin esqueleto que se reemplace al hidratar; tocar una celda de un 6×6 vuelve a pintar **una** celda (medido con el perfilador de React) | **Alto: es el riesgo de rendimiento R2** |
| **F-13** | Gestos táctiles | (mismo componente) | 1 | 2 | F-12 | S3-S3 | Objetivos ≥44 px en 360 px; ciclo de estados por toque sin retraso de 300 ms; arrastre para marcar o descartar candidatos en varias celdas; **`user-scalable=no` prohibido** por lint; probado por el fundador en Chrome Android e iOS Safari reales | Alto |
| **F-14** | Ejes rotulados y tirar del hilo | (mismo componente) | 0,5 | 0 | F-12, Motor M4 | S3-S3 | Ejes numerados y rotulados visibles también en 6×6; tocar una pista resalta exactamente las celdas que devuelve `cells(pista, estado)`, sin que el frontend recalcule nada | Medio |
| **F-15** | Teclado y lector de pantalla | (mismo componente) + `docs/decisiones.md` | 1 | 2 | F-12, UX-06 | S3-S3 | Tab, flechas, teclas **1-6**, Espacio/Enter, Escape, foco visible, `prefers-contrast` y `forced-colors`; roles de rejilla y celda con etiqueta «pasillo 3, ala 2, vacía»; una partida completa con VoiceOver y otra con TalkBack, hechas por el fundador | Alto |
| **F-16** | Variantes de día | `web/src/components/juego/tablero/variantes/` | 1,5 | 0 | F-12, F-14 | S3-S4 | Celdas bloqueadas (sábado), dos plantas con una escalera (domingo), rastro del objeto (viernes) y sobres por progreso (lunes) se renderizan **desde el campo del caso**, sin condicional por fecha en el código | Medio |
| **F-17** | Persistencia local y cronómetro | `web/src/dominio/persistencia/` | 1 | 1,5 | F-11 | S3-S3 | IndexedDB con repliegue a `localStorage`; cerrar y reabrir conserva partida, ajustes y racha; **el cronómetro arranca en la primera interacción con el tablero**, no al cargar, y no se reinicia al recargar; se guardan tiempo activo y tiempo total por separado | **Alto: caducidad de almacenamiento en iOS (R1)** |
| **F-18** | Portada del caso y tutorial | `web/src/app/(juego)/_componentes/portada/`, `.../tutorial/` | 1 | 2 | F-12, UX-07 | S3-S4 | La regla del día se anuncia **en la portada**, nunca en un tutorial; tutorial de 60 s saltable y repetible desde ajustes, con pantalla dedicada a la convención espacial; 8 de 10 personas lo completan en ≤90 s | Medio |

### Bloque D · Pistas, sobres, Sabueso y comprobación (S4)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-19** | Panel de pistas y sobres | `web/src/components/juego/pistas/` | 0,75 | 0 | F-14, UX-08 | S4-S4 | Pistas numeradas y secas, con resaltado bidireccional; los sobres se abren **por progreso**, nunca por acierto; el lunes abre con tres pistas y el juego dice cuántas faltan | Bajo |
| **F-20** | Sabueso de dos niveles | `web/src/components/juego/sabueso/` | 0,75 | 1 | F-12, BE-04, UX-09 | S4-S4 | Un uso por caso; nivel 1 señala la pista, nivel 2 la habitación; **jamás da señal de error** y jamás recibe la solución: el peldaño llega del servidor a partir del estado enviado; sin conexión, el botón explica que necesita conexión | Medio |
| **F-21** | Comprobar y contraprueba | `web/src/components/juego/comprobar/` | 0,5 | 0 | BE-03, UX-10 | S4-S4 | La respuesta trae **celdas vacías y celdas erróneas por separado**; el texto dice «te falta una» / «hay 3 fuera de sitio», **nunca en rojo**, y nunca existe la etiqueta contraria; se verifica en la respuesta de red que no viajan cuáles | Medio |

### Bloque E · Resultado, reconstrucción y escalafón (S4)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-22** | Acusar | `web/src/components/juego/acusar/` | 0,5 | 0 | BE-05 | S4-S4 | Acción irreversible con confirmación; sin conexión se encola y el resultado se resuelve al reconectar, con estado «pendiente» explícito; una sola acusación por caso y persona | Medio |
| **F-23** | Pantalla de resultado (PR10) | `web/src/app/(juego)/resultado/` | 1 | 1 | **UX-11 firmada**, F-22, BE-05 | S4-S4 | **Orden fijo de cuatro bloques**: veredicto → explicación de Sabueso (abierta si se falló, plegada si se resolvió) con «reportar un problema» discreto al final → tu racha → y ahora qué (botón principal, Compartir, cuenta atrás con la regla del día en lenguaje llano). **Ningún estadístico de posición por defecto.** Microcopy sobre el **número de caso**, nunca sobre la fecha | Medio |
| **F-24** | Reconstrucción animada | `web/src/components/juego/reconstruccion/` (carga diferida) | 1,5 | 1 | F-04, UX-12, Motor M3 | S4-S5 | Se pinta **desde el certificado sin transformarlo**; 20-25 s; «saltar» con un toque **y el ajuste se recuerda**; «volver a verlo» y «paso a paso» con el tablero en cada peldaño y el nombre de la técnica; **Compartir nunca queda detrás**; respeta `prefers-reduced-motion` mostrando la versión en pasos | Medio |
| **F-25** | Escalafón y cuaderno de técnicas | `web/src/app/(juego)/cuaderno/` | 1 | 1 | Motor (TR), UX-13 | S5-S5 | Doce a catorce técnicas con nombre, dibujo y frase de Sabueso; acreditadas en color, pendientes en gris con los casos que faltan; **un cuaderno, dos apartados, un rango**, y el rango se calcula sobre el apartado más avanzado, nunca sobre la suma; el rango **no baja nunca** | Medio |
| **F-26** | Motivo como segunda fase | `web/src/components/juego/motivo/` | 0,5 | 0 | F-23 | S5-S5 | 60-90 s, tres motivos y dos pruebas; **saltable**; el botón de compartir está al lado, nunca detrás | Bajo |

### Bloque F · Expediente (S5)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-27** | Cuaderno de Expediente | `web/src/components/juego/cuaderno-expediente/` | 1,5 | 1 | F-11, F-04, UX-14 | S5-S5 | Tres bloques, 48 casillas en 360 px con objetivos ≥44 px; ✓/✗ con el mismo historial de comandos que Escena; **autopropagación opcional y nunca obligatoria** (desactivada en experto); tirar del hilo entre bloques; guardar, restaurar y vaciar | Alto |
| **F-28** | Dossier con fichas plegadas | `web/src/components/juego/dossier/` | 1 | 0,5 | F-07, UX-15 | S5-S5 | Ficha plegada muestra nombre, oficio y **etiquetas de atributo**; retrato y frase de carácter solo al tocar; el origen de la tira de orden va rotulado («desde la entrada») también en el texto alternativo; un contador comprueba el presupuesto de texto y **avisa en desarrollo si se pasa** | Medio |
| **F-29** | Marcas del comisario y acusación atómica | (mismos componentes) | 1 | 0,5 | F-27, BE-06 | S5-S6 | Las marcas llegan como `givens` del caso y se distinguen visualmente de las del jugador; una es falsa y se puede refutar; la acusación es atómica con **tres** resultados; la contraprueba señala una casilla, a menudo en negativo | Medio |
| **F-30** | Reconstrucción de rejilla | `web/src/components/juego/reconstruccion/rejilla.tsx` | 1 | 0 | F-24, F-04 | S6-S6 | **Mismo contrato de certificado, segundo renderizador**: las casillas se encienden en orden y se marca el salto entre bloques; cero cambios en el motor | Medio |
| **F-31** | Tutorial del primer jueves | `web/src/app/(juego)/_componentes/tutorial/expediente.tsx` | 0,5 | 0,5 | F-18 | S6-S6 | Se dispara **solo la primera vez que el jugador llega a un jueves**, nunca antes; saltable y repetible | Bajo |
| **F-32** | Interrogatorio de menú vivo *(detrás de bandera)* | `web/src/components/juego/interrogatorio/` | 1,5 | 1 | **Compuerta 0 del motor**, BE-07, UX-16 | S6-S6 | Tres preguntas, contador visible, menú servido por el backend en cada turno; **el cliente no recibe respuestas no formuladas**; la línea «cualquiera de estas cierra el caso» siempre visible; con la bandera apagada el miércoles se sirve como «clásico» sin rastro en el HTML | **Alto: depende de un número que aún no existe** |

### Bloque G · Racha, archivo y cuenta (S5)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-33** | Racha y calendario | `web/src/app/(juego)/racha/` | 1 | 1 | BE-08, UX-17 | S5-S5 | Calendario de 30 días con cinco estados: resuelto, fallado, **gracia**, **día concedido** y sin jugar, cada uno con su color y su explicación al tocarlo; la racha se lee por **número de caso**, no por fecha; el mensaje dice «tu racha sigue viva: has usado tu día de gracia» | Medio |
| **F-34** | Archivo de 7 días | `web/src/app/(contenido)/archivo/` | 0,75 | 0 | BE-09 | S5-S5 | Siete días naturales, ficha con aviso de caducidad («sale del archivo en 2 días»), filtro por modo; el día 8 lleva a la página de explicación, no a un 404 | Bajo |
| **F-35** | Cuenta, sincronización y ajustes | `web/src/app/(cuenta)/` | 1,25 | 2 | BE-10 | S5-S6 | Magic link; el progreso anónimo se fusiona sin duplicar ni perder días; **prueba con dos dispositivos reales**: empiezo en el móvil, abro el portátil y encuentro partida, racha y estadísticas; los ajustes (tema, sonido, autopropagación, movimiento reducido) sobreviven a recarga, a cierre y **a una actualización del service worker** | Alto |

### Bloque H · Compartir (S6)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-36** | Tarjeta de resultado en lienzo | `web/src/dominio/compartir/tarjeta.ts` | 1,25 | 1 | UX-18, `docs/specs/compartir.md` | S6-S6 | 9:16 y 1:1 generadas en el cliente con `OffscreenCanvas`; **ni posiciones ni nombres** (revisado sobre 20 resultados por `revisor-calidad`); tamaño de cuadrícula acotado, texto alternativo descriptivo y **una línea resumen legible** para lector de pantalla; paleta variable en alto contraste; el tiempo se etiqueta **«declarado»** | Medio |
| **F-37** | Web Share y repliegue | `web/src/dominio/compartir/` | 0,5 | 1 | F-36 | S6-S6 | Web Share nivel 2 con imagen donde exista; repliegue a copiar al portapapeles con confirmación; enlace con parámetro de atribución; probado por el fundador en iOS Safari, Chrome Android y escritorio | Medio |
| **F-38** | `/r/[id]` en servidor | `web/src/app/r/[id]/` | 0,75 | 0 | BE-11, LG-02 | S6-S6 | SSR con el caso **jugable arriba del pliegue**; `noindex, follow` y `X-Robots-Tag: noindex` en la imagen OG; identificador aleatorio ≥16 caracteres; 410 a los 30 días; si el caso ya salió del archivo, abre **la página del día 8**, no el caso; la imagen OG no lleva nada que no esté en la página ni identificadores de seguimiento | Medio |

### Bloque I · Landings, SEO y GEO (S6-S7)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-39** | Sistema de página indexable | `web/src/components/contenido/` | 1 | 0 | F-07 | S6-S6 | Bloques reutilizables: respuesta directa de ≤60 palabras en el primer 30 %, definición «X es un Y que Z» bajo un h2 en forma de pregunta, FAQ, tabla comparativa en `<table>`, migas, fecha visible, autor; un lint avisa si la respuesta directa pasa de 60 palabras | Bajo |
| **F-40** | Las 36 URL P0 (+5 de Expediente) | `web/src/app/(contenido)/**` | 2,5 | 2 | F-39, contenidos, F-16 | S6-S7 | Cada URL con su renderizado exacto del árbol (SSG-diario, SSG, ISR, SSR); **`curl` de cada URL P0 contiene el enunciado y las pistas**; canónicas absolutas sin `www` y sin barra final; 301 de las variantes; `/caso/[hoy]` responde 302 a `/`; hreflang `es-ES`/`es-419` preparado | **Alto: depende de que existan los textos** |
| **F-41** | Datos estructurados | `web/src/dominio/schema/` + test de CI | 0,75 | 0 | F-40 | S6-S7 | Un **solo** bloque JSON-LD por página, con el tipo que le toca según la tabla §4.2 del árbol; **el build falla si no valida**; `BreadcrumbList` coherente con la miga visible; **nunca `AggregateRating`** | Bajo |
| **F-42** | OG, sitemaps y ficheros de sistema | `web/src/app/opengraph-image.tsx`, `sitemap*.xml`, `robots.txt`, `llms.txt`, `feed.xml` | 1 | 1 | F-40 | S7-S7 | Imagen OG del caso del día **sin spoiler**, generada en el borde; índice de sitemaps con cuatro hijos, `lastmod` real, sin `priority` ni `changefreq`, solo URL 200 e indexables; `robots.txt` con `Allow` explícito a los tres grupos de rastreadores; **comprobado que el CDN no devuelve 403 a `OAI-SearchBot`** | Medio |
| **F-43** | Vistazo embebible | `web/src/components/juego/vistazo/` | 0,5 | 0 | F-12, F-27 | S7-S7 | 3×3 de Escena y 3×3×3 de Expediente, con numeración propia, **no tocan la racha**, jugables dentro de una landing sin cargar el paquete del caso completo | Bajo |

### Bloque J · PWA (S6)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-44** | Manifest, iconos y arranque | `web/public/manifest.webmanifest`, iconos, pantallas de arranque | 0,5 | 0,5 | UX-19 | S6-S6 | Instalable en Chrome Android y en iOS Safari («Añadir a pantalla de inicio»); iconos enmascarables; pantallas de arranque de iOS; la descripción del manifest es **literalmente** la frase de entidad de §4.1 del árbol | Bajo |
| **F-45** | Service worker | `web/src/sw.ts` (Serwist) | 1,5 | 1,5 | F-17, F-44 | S6-S6 | Precaché del caso de hoy **y del de mañana** en cuanto se publica; el caso ya descargado se juega sin conexión; **una actualización del service worker no rompe una partida en curso** (test explícito: partida a medias → despliegue → recarga → tablero, cronómetro y ajustes intactos); la actualización se aplica al cambiar de pantalla, nunca durante la partida | **Alto** |
| **F-46** | Prompt de instalación diferido | `web/src/components/sistema/instalar/` | 0,5 | 0,5 | F-44, F-52 | S6-S7 | No aparece antes del **segundo caso resuelto**; se puede rechazar y no vuelve en 30 días; evento `pwa_instalada`; en iOS, instrucciones manuales en vez de prompt, porque `beforeinstallprompt` no existe | Bajo |

### Bloque K · Analítica, pruebas y accesibilidad (S6-S7)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-47** | Instrumentación de eventos | `web/src/analitica/` | 1 | 0,5 | **AN-01** (taxonomía con `modo`) | S6-S6 | Taxonomía tipada: un evento fuera de la taxonomía **no compila**; todos los eventos llevan la propiedad `modo`; el embudo completo llega a PostHog en un recorrido de prueba grabado, incluidos `pregunta_hecha`, `reconstruccion_completada`/`_saltada`, `tecnica_acreditada`, `rango_subido`, `sabueso_usado` (con nivel), `sobre_abierto`, `movil_acertado`, `racha_salvada` (con motivo) y `pwa_instalada` | Medio |
| **F-48** | Pruebas de lógica | `web/tests/unit/` | 1 | 0 | F-11, F-27 | S6-S6 | Vitest sobre reductor, historial, autopropagación, persistencia y traducción certificado→fotogramas; invariante del certificado comprobada en el frontend (estado *k* = aplicar efectos sobre estado *k−1*) para las 30 fixtures | Bajo |
| **F-49** | Pruebas de extremo a extremo en móvil | `web/tests/e2e/` | 1,5 | 0 | F-40, F-45 | S6-S7 | Playwright en móvil emulado: resolver un caso, romper y recuperar la racha, cambio de día a las 00:00 con reloj simulado, sin conexión, actualización del service worker a mitad de partida, y las 50+50 acciones de F-11 | Medio |
| **F-50** | Presupuesto en CI | `lighthouserc.json` | 0,5 | 0 | F-05, F-40 | S7-S7 | Presupuesto de §7 por tipo de página; el PR falla si se pasa; se ejecuta contra las 36 URL en la rama principal | Bajo |
| **F-51** | Accesibilidad WCAG 2.2 AA | informe en `web/README.md` | 0,75 | 2 | F-15, F-40 | S7-S7 | axe sin infracciones en las 36 URL; recorrido completo con VoiceOver (iOS) y TalkBack (Android) hecho por el fundador; `prefers-reduced-motion` y `forced-colors` respetados en tablero, cuaderno y reconstrucción | Alto |
| **F-52** | Consentimiento y legales | `web/src/components/sistema/consentimiento/` | 0,5 | 1 | LG-03 | S7-S7 | Banner conforme a la AEPD: rechazar cuesta lo mismo que aceptar; **PostHog no carga hasta el consentimiento**; las cuatro páginas legales enlazadas desde el pie | Medio |
| **F-53** | i18n | `web/messages/es-ES.json` | 0,5 | 0 | — | S6-S6 | Ningún texto literal en componentes (regla de lint); estructura de claves lista para `es-419` sin refactor; formatos de fecha y número por variante | Bajo |

### Bloque L · Beta, lanzamiento y cierre (S7-S10)

| id | Tarea | Entregable | Días | Horas | Dependencias | S | Criterio de «hecho» | Riesgo |
|---|---|---|---:|---:|---|---|---|---|
| **F-54** | Suite en Android real | informe | 0,5 | 3 | F-49 | S7-S7 | Tres partidas completas en un Android de gama media **real**, sin bloqueos ni toques perdidos (F19). No se sustituye por emulador | Alto |
| **F-55** | Correcciones de la beta | commits | 2,5 | 4 | CF-4 | S7-S8 | Todo lo marcado «impide jugar» y «pierde progreso», cerrado; el resto, priorizado y registrado | Medio |
| **F-56** | Ensayo de lanzamiento | lista de comprobación en `web/README.md` | 1 | 2 | CF-3 | S8-S9 | Ensayo del cambio de día a las 00:00 Europa/Madrid con reloj real; `curl` de las 36 URL; robots y sitemaps comprobados **contra el CDN**, no contra el repositorio; alta en Search Console y Bing | Medio |
| **F-57** | Día 1 y guardia | — | 1 | 4 | CF-5 | S9-S9 | Web Vitals de campo vigilados las primeras 48 h; Sentry sin errores no gestionados; un problema que impida jugar se corrige el mismo día | Medio |
| **F-58** | Documentación de decisiones | `web/README.md`, `docs/decisiones.md` | 0,5 | 0,5 | — | S9-S10 | D-F1 a D-Fn escritas con motivo y con lo que se acepta a cambio; cualquier agente entiende por qué el interrogatorio va contra el servidor sin preguntar | Bajo |

### Totales

| Bloque | Días de agente | Horas del fundador |
|---|---:|---:|
| A · Arranque y contratos | 4,5 | 1,5 |
| B · Componentes | 4,5 | 1,5 |
| C · Tablero de Escena | 6,0 | 8,5 |
| D · Pistas, Sabueso, comprobación | 2,0 | 1,0 |
| E · Resultado y reconstrucción | 4,5 | 3,0 |
| F · Expediente e interrogatorio | 6,5 | 3,5 |
| G · Racha, archivo, cuenta | 3,0 | 3,0 |
| H · Compartir | 2,5 | 2,0 |
| I · Landings, SEO y GEO | 5,75 | 3,0 |
| J · PWA | 2,5 | 2,5 |
| K · Analítica, pruebas, accesibilidad | 5,75 | 3,5 |
| L · Beta y lanzamiento | 5,5 | 13,5 |
| **Total** | **53,0** | **46,5** |

Reparto: ≈5,3 días de agente por semana durante diez semanas, y **4-5 horas del fundador por semana**, concentradas en tres cosas que ningún agente puede hacer: probar en dispositivos reales, decidir microcopy con implicación legal y comprobar el comportamiento del CDN.

---

## 5. Qué necesito de otras áreas, y cuándo

La fecha de la columna «Para» es la **última** en que sirve. Un día más tarde, la tarea que depende se mueve o se hace con datos inventados y se rehace.

### 5.1 De `disenador-ux-ui`

| id | Qué | Para | Sin esto no puedo | Formato que necesito |
|---|---|---|---|---|
| **UX-01** | `docs/diseno/ux/tokens.json` v1: color (claro, oscuro y **alto contraste**), espaciado, escala tipográfica, radios, sombras, duraciones y curvas de movimiento | **S1, día 3** | F-03, y por tanto todo lo demás | JSON plano con nombres semánticos (`color.tablero.celda.candidata`), no nombres de color |
| **UX-02** | Inventario de componentes y sus estados (reposo, foco, activo, deshabilitado, cargando, error) | S1, día 5 | F-07, F-09 | Tabla o Figma con nombre de componente = nombre de carpeta |
| **UX-03** | Cabecera de partida en 360 px con la **ficha técnica** de una línea, la cuenta atrás y la regla del día | S2, día 2 | F-08 | Maqueta con el texto real de las tres fichas (A, B, anulado) |
| **UX-04** | Iconografía y **mascota Sabueso**: reposo, olfateando, cansado, celebrando; favicon, icono enmascarable y pantallas de arranque | S2 (juego) y S6 (PWA) | F-09, F-20, F-44 | SVG optimizado; la mascota en dos tamaños |
| **UX-05** | **Especificación de estados de la celda del tablero** y del ciclo por toque: vacía → candidata → descartada → colocada, más bloqueada, enfocada por teclado y resaltada por pista. Incluye el gesto de arrastre y qué pasa al soltar fuera | **S2, día 1** | F-11, F-12, F-13 | Diagrama de estados con las transiciones nombradas |
| **UX-06** | Modelo de foco y de anuncios de lector de pantalla del tablero: qué se lee al entrar, al moverse y al colocar | S2, día 5 | F-15 | Texto literal de las etiquetas, no descripción |
| **UX-07** | Portada del caso (con la regla del día) y las cuatro pantallas del tutorial, incluida la de convención espacial | S3, día 1 | F-18 | Maquetas con copy definitivo |
| **UX-08** | Panel de pistas, sobres por progreso y estado «faltan tres declaraciones» | S3, día 5 | F-19 | Maqueta |
| **UX-09** | Sabueso de dos niveles: el gesto «¿dónde quieres que huela?», los dos niveles, el estado «se ha cansado» | S3, día 5 | F-20 | Maqueta + microcopy |
| **UX-10** | Microcopy de Comprobar en lenguaje llano y en gris, con la regla «nunca existe la etiqueta contraria» | S3, día 5 | F-21 | Lista de frases por caso (faltan N / hay N fuera de sitio / todo colocado) |
| **UX-11** | **Especificación firmada de la pantalla de resultado** (los cuatro bloques de PR10, en orden, con el microcopy del número de caso) | **S3, día 3 — es puerta** | F-23. Está escrito en §8.2 punto 26 que se firma antes de que yo escriba nada | Maqueta + copy, firmada |
| **UX-12** | Guion de la reconstrucción: 20-25 s, qué se enciende en cada peldaño, dónde va la tarjeta con el nombre de la técnica, cómo se ve «saltar» y «paso a paso» | S4, día 1 | F-24 | Guion con marcas de tiempo, y la variante para `prefers-reduced-motion` |
| **UX-13** | Cuaderno de técnicas: 12-14 iconos, cinco rangos, estado acreditado/pendiente, insignia de doble especialidad | S4, día 3 | F-25 | SVG + maqueta |
| **UX-14** | Cuaderno de Expediente: tres bloques y 48 casillas en 360 px, marca del jugador frente a marca del comisario, casilla refutada | **S4, día 3** | F-27, F-29. Es la maqueta más difícil del proyecto | Maqueta a tamaño real |
| **UX-15** | Dossier: ficha plegada y desplegada, etiquetas de atributo, membrete, tira de orden con origen rotulado | S4, día 5 | F-28 | Maqueta |
| **UX-16** | Interrogatorio: menú de preguntas, contador, retrato y respuesta | S5, día 3 (solo si la Compuerta 0 va verde) | F-32 | Maqueta |
| **UX-17** | Calendario de racha con **cinco** estados y sus explicaciones al tocar | S4, día 5 | F-33 | Maqueta + copy de los cinco |
| **UX-18** | Tarjeta de compartir 9:16 y 1:1, con paleta normal y **paleta variable de alto contraste** | S5, día 3 | F-36 | Especificación de medidas en píxeles, tipografía y márgenes |
| **UX-19** | Iconos de PWA, pantallas de arranque, y el aviso de instalación diferido | S5, día 5 | F-44, F-46 | PNG/SVG en los tamaños de la lista |

**Lo que no pido y quiero decir en voz alta:** no pido una maqueta por landing. Con el sistema de bloques de F-39 y dos maquetas de referencia (una landing de intención y un hub) me apaño; treinta maquetas serían trabajo tirado.

### 5.2 De `desarrollador-backend`

Los contratos se congelan **antes de S3**; después, cualquier cambio cuesta el triple. Pido esquema OpenAPI o tipos TypeScript compartidos, no prosa.

| id | Contrato | Para | Nota que cambia el diseño |
|---|---|---|---|
| **BE-01** | `GET` caso público del día, por modo: enunciado, plano o categorías, pistas, `givens`, regla del día, ficha técnica, número de caso, **sin solución** | **S2, día 3** | Debe existir una versión «pública» del caso, distinta de la que guarda el motor. Si el mismo objeto lleva la solución, el HTML servido la lleva |
| **BE-02** | `GET`/`PUT` partida en curso (estado del tablero, historial comprimido, cronómetro activo y total) | S3, día 5 | El historial se envía comprimido; hay que fijar el tope de tamaño |
| **BE-03** | `POST` comprobar → `{ vacias: n, erroneas: n }` **separados**, nunca cuáles | S3, día 5 | Lo exige PR10; si se decide después, se rehacen endpoint y pantalla |
| **BE-04** | `POST` sabueso `{ nivel, estado }` → peldaño del certificado, **uno solo** | S4, día 1 | La escalera se ejecuta **desde el estado inicial** y avanza hasta el último peldaño compatible con el tablero del jugador. Nunca da señal de error |
| **BE-05** | `POST` acusar → veredicto, certificado completo, tiempo, racha resultante, etiqueta «probado»/«ganado por poco» | S4, día 1 | El certificado viaja **aquí y no antes**. Necesito que venga en la misma respuesta: una segunda petición retrasa la reconstrucción |
| **BE-06** | Régimen de `givens` de Expediente y refutación de la marca falsa | S5, día 1 | — |
| **BE-07** | `POST` interrogar `{ sospechoso, plantilla, estado }` → respuesta + menú siguiente | S5, día 3 | **Punto crítico:** el menú se calcula en el servidor. Si backend no puede, el interrogatorio no sale, porque en el cliente no cabe sin filtrar la solución |
| **BE-08** | Racha, calendario de 30 días y motivo por día (resuelto, fallado, gracia, día concedido) | S4, día 5 | La racha va por **número de caso**, no por fecha (PR3) |
| **BE-09** | Archivo de 7 días con caducidad por ficha | S5, día 1 | — |
| **BE-10** | Magic link, fusión de progreso anónimo y sincronización entre dispositivos | S5, día 1 | Necesito el contrato de conflicto: qué gana si hay partida en los dos lados |
| **BE-11** | Crear y leer `/r/[id]`, con las seis reglas de datos de PR4 | S5, día 5 | Caducidad a 30 días con 410; el borrado de datos del usuario borra también las páginas y sus OG en caché |
| **BE-12** | Cabeceras de caché por tipo de ruta y disparadores de revalidación del build diario de las 00:00 Europa/Madrid | S6, día 1 | Sin esto, el caso del día se sirve viejo desde el CDN a media España |
| **BE-13** | `POST` reportar un problema con este caso, con campo estructurado | S6, día 1 | Va en la pantalla de resultado (F18 del catálogo) |

### 5.3 De `ingeniero-motor-puzzles`

| id | Qué | Para | Por qué me bloquea |
|---|---|---|---|
| **MO-01** | **Certificado v1.0 congelado** (esquema de §8.2 de `propuesta-jugabilidad-expediente.md`), con localizador polimórfico, `rama` y `premisas.pasos` | **S1, día 3** | Es la compuerta CF-0. Reconstrucción, escalafón, Sabueso, contraprueba y «paso a paso» son **cinco piezas de un solo esquema**; si cambia después, se rehacen las cinco |
| **MO-02** | Esquema del caso público de los dos modos, con `modo`, día, regla, tamaño, `board.blocked` (nunca dentro de `clues`), etiqueta de dificultad **recalculable** y número de pistas | S1, día 5 | F-04, F-16 |
| **MO-03** | Contrato `cells(pista, estado)` por predicado (M4) | S2, día 5 | Tirar del hilo. Medio día si va escrito junto a cada predicado; tres días si lo añado yo después. No lo voy a reimplementar en el cliente |
| **MO-04** | Campo `tecnica` por peldaño + tabla de nombres humanos de las 12-14 técnicas | S4, día 1 | Reconstrucción y escalafón. Sin nombres, la tarjeta del pico de la animación queda vacía |
| **MO-05** | **Fixtures con semilla fija**: 4 casos por cada día de la semana + 6 Expediente + sus certificados + 3 casos anulados y 2 con rama | S2, día 5 | Trabajo sin backend durante S2-S4 y todos los tests. Es lo que me permite no bloquearme si backend llega tarde |
| **MO-06** | Formato del vistazo 3×3 y 3×3×3 | S6, día 1 | F-43 |
| **MO-07** | Resultado de la **Compuerta 0** de MV | **Antes de S6** | Decide si el interrogatorio se construye o el miércoles se lanza como «clásico» |

### 5.4 De `analista-datos`, `experto-legal` y `periodista-contenidos`

| id | Qué | De quién | Para |
|---|---|---|---|
| **AN-01** | `docs/analitica/eventos.md` cerrada, con la propiedad `modo` en **todos** los eventos y los nuevos de jugabilidad | `analista-datos` | **S5, día 5** (antes de instrumentar; añadirla después obliga a reprocesar) |
| **AN-02** | Qué se mide del prompt de instalación y del embudo de compartir | `analista-datos` | S6, día 1 |
| **LG-01** | Texto aprobado de las **tres fichas técnicas** (A, B y anulado) | `experto-legal` + `periodista-contenidos` | S2, día 1. Sin aprobación, PR1 no sale y la cabecera va sin ficha |
| **LG-02** | Revisión de las seis reglas de datos de `/r/[id]` y de la imagen OG | `experto-legal` | S5, día 5 |
| **LG-03** | Banner de consentimiento conforme a la AEPD y las cuatro páginas legales | `experto-legal` | S6, día 5 |
| **CO-01** | Textos de las 30 páginas que hay que escribir, con la respuesta directa de ≤60 palabras ya redactada y la FAQ | `periodista-contenidos` | **S6, día 1** (30 páginas es la dependencia más voluminosa del plan) |
| **CO-02** | Microcopy del juego: Comprobar, Sabueso, racha, gracia, día concedido, caducidad del archivo | `periodista-contenidos` | S3, día 5 |

---

## 6. Ruta crítica

```
MO-01 certificado congelado ─┐
UX-01 tokens ────────────────┼─► F-04 contratos ─► F-11 máquina de estados ─► F-12/F-13 tablero
UX-05 estados de la celda ───┘                                   │
                                                                 ▼
                              UX-11 spec de resultado ─► F-23 resultado ─► F-24 reconstrucción
                                                                 │
                                     F-27 cuaderno de Expediente ┤
                                                                 ▼
                                        F-40 las 36 URL ─► F-45 service worker ─► CF-4 beta ─► lanzamiento
```

**Las cuatro piezas que, si se retrasan un día, retrasan el lanzamiento un día:**

1. **MO-01, el certificado.** Medio día del motor, cinco piezas de frontend. Es lo único de todo el proyecto con una fecha límite que ya está corriendo.
2. **UX-05, los estados de la celda.** El tablero es seis días de trabajo y no se empieza a ciegas.
3. **UX-11, la pantalla de resultado.** Está escrito que se firma antes de programarla; si llega en S5, la reconstrucción se va a S6 y la beta pierde su semana de correcciones.
4. **CO-01, los textos de las treinta páginas.** No es trabajo mío, pero sin ellos las landings son maquetas y CF-3 no se cierra.

**Lo que no está en la ruta crítica y por eso va donde va:** el interrogatorio (bandera), el motivo, el vistazo, las cinco URL de Expediente, el prompt de instalación. Si la semana 6 se tuerce, se cortan en ese orden y **no se corta la accesibilidad de teclado ni el compartir accesible**: la primera es compromiso de producto y requisito B2B (punto 27 de §8.2), y el segundo es F12 y está escrito que no se corta.

---

## 7. Presupuesto de rendimiento (es una puerta de CI, no una aspiración)

La primera pantalla tiene que cargar en menos de 2,5 s en un móvil medio con red irregular. Eso se traduce en números que fallan el build:

| Métrica | Presupuesto | Dónde se mide |
|---|---|---|
| LCP | **< 2,5 s** (p75, Moto G de gama media, 4G lenta) | Lighthouse CI en `/`, `/caso/*` y tres landings |
| INP | **< 200 ms** | Lighthouse + campo (PostHog Web Vitals) |
| CLS | **< 0,1** | Ídem |
| HTML de `/` comprimido | ≤ 45 KB, con enunciado, plano y pistas dentro | Test de CI sobre la respuesta |
| JavaScript de primera carga en `/` | **≤ 110 KB comprimido**, carga útil de RSC incluida | `@next/bundle-analyzer` en CI |
| JavaScript de una landing | ≤ 40 KB (solo el tablero del vistazo) | Ídem |
| Peticiones antes del primer render | 0 a terceros | Test de CI |
| Fuentes | 2 caras, `woff2`, subconjunto latino, autoalojadas, `font-display: swap` | Ídem |

**Reglas de construcción que sostienen el presupuesto:**

- El tablero se pinta con CSS Grid **desde el HTML servido**. Nada de esqueletos que se reemplacen al hidratar (regla explícita de §6.6 del árbol).
- Ninguna librería de animación en la ruta crítica. La reconstrucción se carga **después de acusar**, en diferido.
- El lienzo del compartir, el cuaderno de técnicas y el tutorial son islas diferidas.
- PostHog y Sentry cargan tras el primer render y tras el consentimiento.
- Imágenes en AVIF/WebP con `width` y `height`; ninguna ilustración por encima del pliegue salvo el plano, que es CSS y SVG.
- **`user-scalable=no` está prohibido** por una regla de lint que falla el build. El zoom nativo no se desactiva nunca.

---

## 8. Riesgos

Ordenados por daño esperado, no por probabilidad. Cada uno con su repliegue escrito **antes** de que ocurra.

| id | Riesgo | Probabilidad | Daño | Mitigación | Repliegue si ocurre |
|---|---|---|---|---|---|
| **R1** | **Safari iOS borra el almacenamiento.** Sin cuenta, IndexedDB y `localStorage` de un sitio no instalado se pueden eliminar tras **siete días sin visitas**. Un jugador de fin de semana pierde racha y estadísticas sin haber hecho nada mal, y nos culpa a nosotros | **Alta** | **Muy alto**: es exactamente la queja que hunde a la app líder del género | Detectar iOS + no instalado; ofrecer la cuenta como «guarda tu racha en todos tus dispositivos» tras el segundo caso resuelto; el prompt de instalación de F-46 es también mitigación, porque una PWA instalada no sufre esa caducidad; escribir el aviso en `/reglas` | Ventana de 48 h de recuperación de racha sin escribir a soporte (F18), que ya está comprometida por otro motivo y sirve para este |
| **R2** | **Rendimiento del 6×6 en gama media.** 36 celdas, resaltado por pista, arrastre y animación de reconstrucción en un móvil de 2022 | Media | Alto: rompe INP y F6 | Selector por celda con `useSyncExternalStore`; el resaltado se pinta con variables CSS en el contenedor, no cambiando clases de 36 nodos; arrastre agrupado en `requestAnimationFrame`; medición desde S3, no desde S7 | Si el 6×6 del domingo no cumple INP, se simplifica **la animación**, nunca el tamaño del tablero |
| **R3** | **iOS Safari no da prompt de instalación ni notificaciones push hasta instalar.** No hay `beforeinstallprompt` y la única palanca de retorno es el correo | Cierta | Medio | Instrucciones manuales ilustradas para «Añadir a pantalla de inicio»; la newsletter es la palanca de retorno, no el push (ya decidido en el catálogo) | Ninguno: es una restricción de plataforma y se asume |
| **R4** | **Cuatro acciones necesitan conexión** (Sabueso, interrogatorio, Comprobar, acusar) por la regla de no filtrar la solución. Choca con la promesa «funciona sin conexión» | Cierta | Medio | Decirlo en pantalla; el juego, las anotaciones, el deshacer y el cronómetro **sí** funcionan sin conexión; acusar se encola y se resuelve al reconectar | Si la cola falla, el estado «pendiente» conserva la partida y el tiempo; nunca se pierde progreso |
| **R5** | **La actualización del service worker rompe una partida en curso.** Es la queja que hunde a la app más descargada del género (F19) | Media | Muy alto | El service worker nuevo **no toma el control durante una partida**: se aplica al cambiar de pantalla o al recargar fuera de partida; versionado del esquema de persistencia con migración; test explícito en Playwright | Botón «recargar» manual con guardado previo forzado |
| **R6** | **UX-11 (pantalla de resultado) llega tarde** y la reconstrucción se desplaza | Media | Alto | Está escrito que se firma antes de programar; lo pido en S3 día 3, con dos semanas de margen | Se programan los cuatro bloques con el orden ya decidido en PR10 y copy provisional, y se ajusta el diseño encima; el **orden** no se toca |
| **R7** | **Los textos de las 30 páginas no llegan** para CF-3 | Media | Alto | Sistema de bloques (F-39) que acepta textos por goteo; las URL existen con el puzzle y la respuesta directa desde el principio | Se publican con menos páginas y se añaden en S8-S10. Nunca se publica una landing sin puzzle jugable: sería exactamente la página puente vacía que el catálogo prohíbe |
| **R8** | **El CDN bloquea a los rastreadores de IA por defecto.** Cloudflare y Vercel activan esa regla en algunos planes; si `OAI-SearchBot` recibe 403, no existimos para ChatGPT por bien escrito que esté el `robots.txt` | Media | Alto | Comprobación explícita en F-42 y en CF-5, con `curl` y agente de usuario simulado **contra producción** | Desactivar la regla del CDN; es un ajuste, no desarrollo |
| **R9** | **La Compuerta 0 deja el interrogatorio en rojo** en la semana 6 | Media | Bajo para el calendario, alto para el relato | La bandera existe desde el primer día y el miércoles «clásico» ya está construido (es el martes con otro caso) | El miércoles se lanza como clásico; F-32 sale en fase 2 sin tocar nada más |
| **R10** | **Expediente en el lanzamiento no está en el árbol web** ni en el catálogo (que lo pone en semanas 10-14) | Alta | Medio | Paquete F-40 de cinco URL preparado y presupuestado | Si se confirma que Expediente es fase 2, se cae el bloque F (6,5 días) y el plan gana holgura; **no al revés**: decidirlo en S8 sí duele |
| **R11** | **El calendario tiene tres semanas de trabajo por delante de la beta y una sola de correcciones.** Es poco para un producto que se juega a diario | Media | Alto | La congelación de funcionalidad el lunes de S7 es dura; S8 entera está reservada a correcciones | Si CF-4 sale en rojo, el lanzamiento se mueve a S10 (13 de noviembre, el límite que da `supuestos.md`), no se recorta la accesibilidad ni los tests |

---

## 9. Contradicciones entre documentos aprobados que necesitan una decisión (no las resuelvo yo)

1. **Expediente el día 1 o en fase 2.** `supuestos.md` lo mete en el lanzamiento; `catalogo-productos.md` lo pone en las semanas 10-14 y `arbol-web-final.md` asume lo segundo. Son 6,5 días de agente y cinco URL. **Decisión para el fundador, antes de S4.**
2. **«Solver en cliente».** `propuesta-jugabilidad.md` lo lista como dependencia de V4 y V11; el catálogo prohíbe que la solución viaje al cliente antes de acusar. Este plan resuelve el choque llevando las cuatro acciones al servidor, y hay que **registrarlo como decisión** porque cambia dos contratos de backend y la promesa de «sin conexión».
3. **`/caso/[hoy]` responde 302 a `/`, pero el caso del día cambia a la medianoche local del jugador** (F5), no a la del servidor. Con SSG-diario a las 00:00 Europa/Madrid, un jugador en México ve el caso «de hoy» de España durante siete horas. **Necesito de backend y de producto la regla exacta**: o el número de caso se resuelve en el borde por zona declarada, o la promesa se reescribe. Va en BE-12 y hay que cerrarlo antes de S6.
4. **La ficha técnica depende de un dictamen legal** (LG-01) que aún no existe. Si no llega, la cabecera se publica sin ficha y PR1 se cae del lanzamiento.

---

## 10. Cómo trabajo, para que nadie tenga que preguntarlo

- Código en `web/`. Commits pequeños, en español, con el id de la tarea al principio (`F-12: render del tablero sin re-render global`).
- **Nada se fusiona sin tests y sin Lighthouse verde en móvil.** No hay excepción por prisa; si hay prisa, se recorta alcance, no la puerta.
- **Antes de implementar una pantalla compruebo que existe su especificación de estados en `docs/diseno/ux/`.** Si falta, la pido a `disenador-ux-ui` y **no la invento**. La única excepción escrita es R6, y con el orden de bloques ya fijado.
- **El cliente nunca recibe la solución en claro.** La comprobación se hace contra `desarrollador-backend`. Hay un test de CI que rompe el build si la respuesta del caso público contiene el campo de solución.
- Las decisiones técnicas se documentan en `web/README.md` (el detalle) y en `docs/decisiones.md` (la decisión y lo que se acepta a cambio), no en la conversación.
