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
