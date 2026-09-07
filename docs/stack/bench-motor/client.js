// Two JS-specific questions:
//  (A) client-side residual: enumerate M0 + build the published clues' masks + AND + popcount
//  (B) Uint32Array bitset vs BigInt bitset, for the same operation
const N = parseInt(process.argv[2] || "5", 10);
const CLUES = parseInt(process.argv[3] || "10", 10);
const REPS = parseInt(process.argv[4] || "200", 10);

function fact(k) { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; }
const NF = fact(N), M0 = NF * NF, WORDS = (M0 + 31) >>> 5;

function enumerate() {
  const perms = new Uint8Array(NF * N), avail = new Array(N);
  for (let idx = 0; idx < NF; idx++) {
    for (let i = 0; i < N; i++) avail[i] = i;
    let rem = idx;
    for (let i = 0; i < N; i++) {
      const f = fact(N - 1 - i), j = Math.floor(rem / f);
      rem %= f; perms[idx * N + i] = avail[j]; avail.splice(j, 1);
    }
  }
  return perms;
}
function pop32(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  v = (v + (v >>> 4)) & 0x0f0f0f0f;
  return (Math.imul(v, 0x01010101) >>> 24);
}
const hr = () => Number(process.hrtime.bigint()) / 1e6;

// --- (A) full client path, repeated REPS times (cold path each time) ---
let t = hr(), sink = 0;
for (let r = 0; r < REPS; r++) {
  const perms = enumerate();
  const masks = new Uint32Array(CLUES * WORDS);
  for (let c = 0; c < CLUES; c++) {
    const s = (c * 3 + r) % N, v = (c * 5 + r) % N, base = c * WORDS;
    for (let m = 0; m < M0; m++) {
      const pa = ((m / NF) | 0) * N;
      if (perms[pa + s] !== v) masks[base + (m >>> 5)] |= (1 << (m & 31));
    }
  }
  const acc = new Uint32Array(WORDS).fill(0xffffffff);
  if (M0 & 31) acc[WORDS - 1] = (1 << (M0 & 31)) - 1;
  for (let c = 0; c < CLUES; c++)
    for (let w = 0; w < WORDS; w++) acc[w] &= masks[c * WORDS + w];
  let tot = 0;
  for (let w = 0; w < WORDS; w++) tot += pop32(acc[w]);
  sink += tot;
}
const clientMs = (hr() - t) / REPS;

// --- (B) Uint32Array vs BigInt on the same AND+popcount, masks already built ---
const perms = enumerate();
const u32 = new Uint32Array(CLUES * WORDS);
for (let c = 0; c < CLUES; c++) {
  const s = c % N, v = (c * 5) % N, base = c * WORDS;
  for (let m = 0; m < M0; m++) {
    const pa = ((m / NF) | 0) * N;
    if (perms[pa + s] !== v) u32[base + (m >>> 5)] |= (1 << (m & 31));
  }
}
const big = [];
for (let c = 0; c < CLUES; c++) {
  let b = 0n;
  for (let w = WORDS - 1; w >= 0; w--) b = (b << 32n) | BigInt(u32[c * WORDS + w] >>> 0);
  big.push(b);
}
const ROUNDS = 2000;
t = hr();
const acc = new Uint32Array(WORDS);
let s1 = 0;
for (let r = 0; r < ROUNDS; r++) {
  acc.fill(0xffffffff);
  for (let c = 0; c < CLUES; c++)
    for (let w = 0; w < WORDS; w++) acc[w] &= u32[c * WORDS + w];
  let tot = 0;
  for (let w = 0; w < WORDS; w++) tot += pop32(acc[w]);
  s1 += tot;
}
const u32Ms = (hr() - t) / ROUNDS;
t = hr();
let s2 = 0;
for (let r = 0; r < ROUNDS; r++) {
  let b = (1n << BigInt(M0)) - 1n;
  for (let c = 0; c < CLUES; c++) b &= big[c];
  let tot = 0, x = b;
  while (x) { x &= x - 1n; tot++; }          // popcount over BigInt
  s2 += tot;
}
const bigMs = (hr() - t) / ROUNDS;

console.log(JSON.stringify({
  n: N, M0, clues: CLUES, words: WORDS,
  client_full_path_ms: +clientMs.toFixed(2),
  mask_bytes_client: CLUES * WORDS * 4,
  and_popcount_uint32_ms: +u32Ms.toFixed(4),
  and_popcount_bigint_ms: +bigMs.toFixed(4),
  bigint_slowdown: +(bigMs / u32Ms).toFixed(1),
  agree: s1 === s2, sink
}));
