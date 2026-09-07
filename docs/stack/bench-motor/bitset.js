// Fair comparison: Uint32Array scratch buffer vs BigInt, on the NR inner loop.
// NR = for each of the 8 clues, AND the other 7 and popcount. Residual kept non-trivial.
const N = parseInt(process.argv[2] || "5", 10);
const CLUES = 8;
const ROUNDS = parseInt(process.argv[3] || "2000", 10);

function fact(k) { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; }
const NF = fact(N), M0 = NF * NF, WORDS = (M0 + 31) >>> 5;

// clues that each keep ~half the models -> residual stays large (worst case for popcount)
const u32 = new Uint32Array(CLUES * WORDS);
for (let c = 0; c < CLUES; c++) {
  const base = c * WORDS;
  for (let m = 0; m < M0; m++) {
    if ((m % (c + 11)) !== 0) u32[base + (m >>> 5)] |= (1 << (m & 31));
  }
}
const big = [];
for (let c = 0; c < CLUES; c++) {
  let b = 0n;
  for (let w = WORDS - 1; w >= 0; w--) b = (b << 32n) | BigInt(u32[c * WORDS + w] >>> 0);
  big.push(b);
}
function pop32(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  v = (v + (v >>> 4)) & 0x0f0f0f0f;
  return (Math.imul(v, 0x01010101) >>> 24);
}
const hr = () => Number(process.hrtime.bigint()) / 1e6;
const heap = () => process.memoryUsage().heapUsed;

// --- Uint32Array with one preallocated scratch buffer: zero allocation in the loop ---
const scratch = new Uint32Array(WORDS);
let t = hr(), h = heap(), s1 = 0;
for (let r = 0; r < ROUNDS; r++) {
  for (let drop = 0; drop < CLUES; drop++) {
    scratch.fill(0xffffffff);
    if (M0 & 31) scratch[WORDS - 1] = (1 << (M0 & 31)) - 1;
    for (let c = 0; c < CLUES; c++) {
      if (c === drop) continue;
      const base = c * WORDS;
      for (let w = 0; w < WORDS; w++) scratch[w] &= u32[base + w];
    }
    let tot = 0;
    for (let w = 0; w < WORDS; w++) tot += pop32(scratch[w]);
    s1 += tot;
  }
}
const u32Ms = (hr() - t) / ROUNDS, u32Heap = heap() - h;

// --- BigInt: every AND allocates a new immutable value ---
const FULL = (1n << BigInt(M0)) - 1n;
t = hr(); h = heap(); let s2 = 0;
for (let r = 0; r < ROUNDS; r++) {
  for (let drop = 0; drop < CLUES; drop++) {
    let b = FULL;
    for (let c = 0; c < CLUES; c++) { if (c === drop) continue; b &= big[c]; }
    let tot = 0, x = b;
    while (x) { x &= x - 1n; tot++; }
    s2 += tot;
  }
}
const bigMs = (hr() - t) / ROUNDS, bigHeap = heap() - h;

console.log(JSON.stringify({
  n: N, M0, words: WORDS, clues: CLUES, rounds: ROUNDS, residual_bits: s1 / (ROUNDS * CLUES),
  nr_uint32_ms: +u32Ms.toFixed(4), nr_bigint_ms: +bigMs.toFixed(4),
  bigint_slowdown: +(bigMs / u32Ms).toFixed(1),
  heap_delta_uint32_kb: Math.round(u32Heap / 1024), heap_delta_bigint_kb: Math.round(bigHeap / 1024),
  agree: s1 === s2
}));
