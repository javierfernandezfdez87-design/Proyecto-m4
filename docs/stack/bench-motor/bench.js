// X0 core primitive benchmark - JS/Node (what TypeScript compiles to)
// Preset "Ancho": n=5, K=3 -> |M0| = (5!)^2 = 14400
// Same algorithm, same seed, same checksums as bench.py / bench.rs / bench.go

const N = parseInt(process.argv[2] || "5", 10);
const BANK = parseInt(process.argv[3] || "2000", 10);
const ITERS = parseInt(process.argv[4] || "1000", 10);
const SEED = 20260907;

// ---- 32-bit PRNG (xorshift32): bit-identical in JS, Python, Rust, Go ----
let st = SEED >>> 0;
function next() {
  st ^= (st << 13) >>> 0; st >>>= 0;
  st ^= st >>> 17;
  st ^= (st << 5) >>> 0; st >>>= 0;
  return st >>> 0;
}
function rnd(m) { return next() % m; }

// ---- permutations via Lehmer decode ----
function fact(k) { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; }
const NF = fact(N);
const perms = new Uint8Array(NF * N);
{
  const avail = new Array(N);
  for (let idx = 0; idx < NF; idx++) {
    for (let i = 0; i < N; i++) avail[i] = i;
    let rem = idx;
    for (let i = 0; i < N; i++) {
      const f = fact(N - 1 - i);
      const j = Math.floor(rem / f);
      rem = rem % f;
      perms[idx * N + i] = avail[j];
      avail.splice(j, 1);
    }
  }
}
const M0 = NF * NF;              // models: (pi1, pi2)
const WORDS = (M0 + 31) >>> 5;   // uint32 words per mask

// ---- clue bank: T1 (junto), T2 (not junto), T4 (disjunction of 2) ----
// kinds: 0 = SxL, 1 = SxO, 2 = LxO (derived), 3 = negated SxL, 4 = disjunction over L
const kind = new Uint8Array(BANK), a1 = new Uint8Array(BANK),
      b1 = new Uint8Array(BANK), b2 = new Uint8Array(BANK);
for (let c = 0; c < BANK; c++) {
  kind[c] = rnd(5); a1[c] = rnd(N); b1[c] = rnd(N); b2[c] = rnd(N);
}

function popcount32(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  v = (v + (v >>> 4)) & 0x0f0f0f0f;
  return (Math.imul(v, 0x01010101) >>> 24);
}

// ---- build the bank of masks: the dominant cost of generation ----
const t0 = process.hrtime.bigint();
const masks = new Uint32Array(BANK * WORDS);
const pc = new Int32Array(BANK);
for (let c = 0; c < BANK; c++) {
  const k = kind[c], s = a1[c], v1 = b1[c], v2 = b2[c];
  const base = c * WORDS;
  let count = 0;
  for (let m = 0; m < M0; m++) {
    const pa = ((m / NF) | 0) * N, pb = (m % NF) * N;
    let sat;
    switch (k) {
      case 0: sat = perms[pa + s] === v1; break;                       // junto(s, lugar)
      case 1: sat = perms[pb + s] === v1; break;                       // junto(s, objeto)
      case 2: {                                                         // junto(lugar, objeto)
        sat = false;
        for (let i = 0; i < N; i++) {
          if (perms[pa + i] === v1 && perms[pb + i] === v2) { sat = true; break; }
        }
        break;
      }
      case 3: sat = perms[pa + s] !== v1; break;                       // no junto
      default: sat = perms[pa + s] === v1 || perms[pa + s] === v2;     // disyuncion
    }
    if (sat) { masks[base + (m >>> 5)] |= (1 << (m & 31)); count++; }
  }
  pc[c] = count;
}
const t1 = process.hrtime.bigint();

// ---- NV guard: 0 < popcount(mask) < |M0| ----
let nvRejected = 0;
for (let c = 0; c < BANK; c++) if (pc[c] === 0 || pc[c] === M0) nvRejected++;

// ---- generation loop: residual + NR over sets of 8 clues ----
const scratch = new Uint32Array(WORDS);
const sel = new Int32Array(8);
let checksum = 0, uniques = 0;
const t2 = process.hrtime.bigint();
for (let it = 0; it < ITERS; it++) {
  for (let i = 0; i < 8; i++) sel[i] = rnd(BANK);
  // residuo(S) = AND de mask(c)
  scratch.fill(0xffffffff);
  if ((M0 & 31) !== 0) scratch[WORDS - 1] = (1 << (M0 & 31)) - 1;
  for (let i = 0; i < 8; i++) {
    const base = sel[i] * WORDS;
    for (let w = 0; w < WORDS; w++) scratch[w] &= masks[base + w];
  }
  let total = 0;
  for (let w = 0; w < WORDS; w++) total += popcount32(scratch[w]);
  if (total === 1) uniques++;
  checksum = (checksum + total) >>> 0;
  // NR: quitar cada pista debe dejar >= 2 modelos
  for (let drop = 0; drop < 8; drop++) {
    scratch.fill(0xffffffff);
    if ((M0 & 31) !== 0) scratch[WORDS - 1] = (1 << (M0 & 31)) - 1;
    for (let i = 0; i < 8; i++) {
      if (i === drop) continue;
      const base = sel[i] * WORDS;
      for (let w = 0; w < WORDS; w++) scratch[w] &= masks[base + w];
    }
    let t = 0;
    for (let w = 0; w < WORDS; w++) t += popcount32(scratch[w]);
    checksum = (checksum + t) >>> 0;
  }
}
const t3 = process.hrtime.bigint();

const ms = (a, b) => Number(b - a) / 1e6;
console.log(JSON.stringify({
  lang: "js/node", n: N, M0, bank: BANK, iters: ITERS, words: WORDS,
  bank_ms: +ms(t0, t1).toFixed(1),
  algebra_ms: +ms(t2, t3).toFixed(1),
  evals: BANK * M0,
  mask_bytes: BANK * WORDS * 4,
  nv_rejected: nvRejected, uniques, checksum: checksum >>> 0
}));
