// Superficie que el navegador necesita segun R3: enumerar M0, mascaras, residuo, cells().
export type Preajuste = { n: number; K: number };
export type Modelo = Uint8Array;
const FACT = [1,1,2,6,24,120,720];
export function enumerarPermutaciones(n: number): Uint8Array {
  const nf = FACT[n], perms = new Uint8Array(nf * n), avail = new Array<number>(n);
  for (let idx = 0; idx < nf; idx++) {
    for (let i = 0; i < n; i++) avail[i] = i;
    let rem = idx;
    for (let i = 0; i < n; i++) {
      const f = FACT[n - 1 - i], j = Math.floor(rem / f);
      rem %= f; perms[idx * n + i] = avail[j]; avail.splice(j, 1);
    }
  }
  return perms;
}
export class Bitset {
  readonly words: Uint32Array;
  constructor(readonly bits: number) { this.words = new Uint32Array((bits + 31) >>> 5); }
  set(i: number) { this.words[i >>> 5] |= (1 << (i & 31)); }
  get(i: number) { return (this.words[i >>> 5] & (1 << (i & 31))) !== 0; }
  llenar() { this.words.fill(0xffffffff); const r = this.bits & 31; if (r) this.words[this.words.length - 1] = (1 << r) - 1; }
  yIgual(o: Bitset) { const w = this.words, v = o.words; for (let i = 0; i < w.length; i++) w[i] &= v[i]; }
  cuenta() {
    let t = 0; const w = this.words;
    for (let i = 0; i < w.length; i++) {
      let v = w[i];
      v = v - ((v >>> 1) & 0x55555555);
      v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
      v = (v + (v >>> 4)) & 0x0f0f0f0f;
      t += (Math.imul(v, 0x01010101) >>> 24);
    }
    return t;
  }
  primero() { const w = this.words; for (let i = 0; i < w.length; i++) if (w[i]) return (i << 5) + (31 - Math.clz32(w[i] & -w[i])); return -1; }
}
export type Pista =
  | { t: "junto"; cat: number; s: number; v: number }
  | { t: "no_junto"; cat: number; s: number; v: number }
  | { t: "junto_vv"; c1: number; v1: number; c2: number; v2: number }
  | { t: "o"; cat: number; s: number; vs: number[] }
  | { t: "cuenta"; cat: number; prop: number[]; k: number };
export function mascara(p: Pista, n: number, K: number, perms: Uint8Array, M0: number): Bitset {
  const nf = FACT[n], bs = new Bitset(M0);
  for (let m = 0; m < M0; m++) {
    const idx: number[] = []; let r = m;
    for (let c = 0; c < K - 1; c++) { idx.push((r % nf) * n); r = Math.floor(r / nf); }
    let sat = false;
    switch (p.t) {
      case "junto": sat = perms[idx[p.cat] + p.s] === p.v; break;
      case "no_junto": sat = perms[idx[p.cat] + p.s] !== p.v; break;
      case "junto_vv": {
        for (let i = 0; i < n; i++)
          if (perms[idx[p.c1] + i] === p.v1 && perms[idx[p.c2] + i] === p.v2) { sat = true; break; }
        break;
      }
      case "o": sat = p.vs.includes(perms[idx[p.cat] + p.s]); break;
      case "cuenta": {
        let c = 0;
        for (let i = 0; i < n; i++) if (p.prop.includes(perms[idx[p.cat] + i])) c++;
        sat = c === p.k; break;
      }
    }
    if (sat) bs.set(m);
  }
  return bs;
}
export function residuo(masks: Bitset[], M0: number): Bitset {
  const acc = new Bitset(M0); acc.llenar();
  for (const m of masks) acc.yIgual(m);
  return acc;
}
export function celdas(p: Pista, n: number): Array<[number, number]> {
  switch (p.t) {
    case "junto": case "no_junto": return [[p.s, p.v]];
    case "o": return p.vs.map(v => [p.s, v] as [number, number]);
    case "junto_vv": return [[p.v1, p.v2]];
    case "cuenta": { const o: Array<[number, number]> = []; for (let i = 0; i < n; i++) for (const v of p.prop) o.push([i, v]); return o; }
  }
}
