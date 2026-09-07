// Synthetic but structurally faithful sizing of M3 (escalera humana + certificado).
// State = boolean notebook: C(K,2) blocks x n x n cells in {0 vacio, 1 tick, 2 cross}.
// Techniques = scans until fixed point. Then TR = |T| re-runs with one technique off.
// This does NOT implement the real technique catalogue; it measures the SHAPE of the
// cost: how many rule-scans per certificate, and what that costs per case.
const N = parseInt(process.argv[2] || "5", 10);
const K = parseInt(process.argv[3] || "3", 10);
const TECHNIQUES = parseInt(process.argv[4] || "14", 10);
const CASES = parseInt(process.argv[5] || "2000", 10);

const BLOCKS = (K * (K - 1)) / 2;
const CELLS = BLOCKS * N * N;

function solve(nb, disabled, seed) {
  // fixed-point loop: apply each enabled technique as a full scan until nothing changes
  let changed = true, iterations = 0, scans = 0, steps = 0;
  let s = seed >>> 0;
  while (changed && iterations < 60) {
    changed = false; iterations++;
    for (let t = 0; t < TECHNIQUES; t++) {
      if (t === disabled) continue;
      scans++;
      // a scan: touch every cell of every block, plus row/col aggregates
      for (let b = 0; b < BLOCKS; b++) {
        const base = b * N * N;
        for (let r = 0; r < N; r++) {
          let ticks = 0, crosses = 0, lastFree = -1;
          for (let c = 0; c < N; c++) {
            const v = nb[base + r * N + c];
            if (v === 1) ticks++; else if (v === 2) crosses++; else lastFree = c;
          }
          // "only one left in the row" - the cheapest real rule
          if (ticks === 0 && crosses === N - 1 && lastFree >= 0) {
            nb[base + r * N + lastFree] = 1; changed = true; steps++;
            for (let c = 0; c < N; c++) if (c !== lastFree) nb[base + r * N + c] = 2;
          }
          // cross-block triangle scan (technique 4/5): the characteristic Expediente cost
          if (t % 3 === 0 && ticks === 1) {
            for (let b2 = 0; b2 < BLOCKS; b2++) {
              if (b2 === b) continue;
              const base2 = b2 * N * N;
              for (let c = 0; c < N; c++) {
                if (nb[base2 + r * N + c] === 0) {
                  s ^= (s << 13) >>> 0; s >>>= 0; s ^= s >>> 17; s ^= (s << 5) >>> 0; s >>>= 0;
                  if ((s & 63) === 0) { nb[base2 + r * N + c] = 2; changed = true; steps++; }
                }
              }
            }
          }
        }
      }
    }
  }
  return { iterations, scans, steps };
}

// initial state after applying the published clues: ~35% of cells already crossed
function seedNotebook(nb, seed) {
  let s = seed >>> 0;
  for (let i = 0; i < CELLS; i++) {
    s ^= (s << 13) >>> 0; s >>>= 0; s ^= s >>> 17; s ^= (s << 5) >>> 0; s >>>= 0;
    nb[i] = (s % 100) < 35 ? 2 : 0;
  }
}

const hr = () => Number(process.hrtime.bigint()) / 1e6;
const nb = new Int8Array(CELLS);
let totScans = 0, totSteps = 0, totIter = 0;

// --- one certificate per case ---
let t = hr();
for (let i = 0; i < CASES; i++) {
  nb.fill(0); seedNotebook(nb, 1000 + i);
  const r = solve(nb, -1, 1000 + i);
  totScans += r.scans; totSteps += r.steps; totIter += r.iterations;
}
const certMs = (hr() - t) / CASES;

// --- TR: re-run the ladder once per technique, disabled ---
t = hr();
for (let i = 0; i < CASES; i++) {
  for (let d = 0; d < TECHNIQUES; d++) { nb.fill(0); solve(nb, d, 1000 + i); }
}
const trMs = (hr() - t) / CASES;

console.log(JSON.stringify({
  n: N, K, blocks: BLOCKS, cells: CELLS, techniques: TECHNIQUES, cases: CASES,
  avg_iterations: +(totIter / CASES).toFixed(1),
  avg_scans_per_certificate: +(totScans / CASES).toFixed(1),
  avg_steps: +(totSteps / CASES).toFixed(1),
  certificate_ms: +certMs.toFixed(3),
  tr_ms: +trMs.toFixed(3),
  total_per_case_ms: +(certMs + trMs).toFixed(3),
  cases_per_minute: Math.round(60000 / (certMs + trMs))
}));
