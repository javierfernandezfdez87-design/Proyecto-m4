// X0 core primitive benchmark - Rust. Identical algorithm & seed to bench.js
use std::time::Instant;

static mut ST: u32 = 20260907;
#[inline]
fn next() -> u32 {
    unsafe {
        ST ^= ST << 13;
        ST ^= ST >> 17;
        ST ^= ST << 5;
        ST
    }
}
#[inline]
fn rnd(m: u32) -> u32 { next() % m }

fn fact(k: usize) -> usize { (2..=k).product::<usize>().max(1) }

fn main() {
    let args: Vec<String> = std::env::args().collect();
    let n: usize = args.get(1).map(|s| s.parse().unwrap()).unwrap_or(5);
    let bank: usize = args.get(2).map(|s| s.parse().unwrap()).unwrap_or(2000);
    let iters: usize = args.get(3).map(|s| s.parse().unwrap()).unwrap_or(1000);

    let nf = fact(n);
    let mut perms = vec![0u8; nf * n];
    for idx in 0..nf {
        let mut avail: Vec<u8> = (0..n as u8).collect();
        let mut rem = idx;
        for i in 0..n {
            let f = fact(n - 1 - i);
            let j = rem / f;
            rem %= f;
            perms[idx * n + i] = avail[j];
            avail.remove(j);
        }
    }
    let m0 = nf * nf;
    let words = (m0 + 31) >> 5;

    let mut kind = vec![0u8; bank];
    let mut a1 = vec![0u8; bank];
    let mut b1 = vec![0u8; bank];
    let mut b2 = vec![0u8; bank];
    for c in 0..bank {
        kind[c] = rnd(5) as u8;
        a1[c] = rnd(n as u32) as u8;
        b1[c] = rnd(n as u32) as u8;
        b2[c] = rnd(n as u32) as u8;
    }

    let t0 = Instant::now();
    let mut masks = vec![0u32; bank * words];
    let mut pc = vec![0i32; bank];
    for c in 0..bank {
        let (k, s, v1, v2) = (kind[c], a1[c] as usize, b1[c], b2[c]);
        let base = c * words;
        let mut count = 0i32;
        for m in 0..m0 {
            let pa = (m / nf) * n;
            let pb = (m % nf) * n;
            let sat = match k {
                0 => perms[pa + s] == v1,
                1 => perms[pb + s] == v1,
                2 => {
                    let mut f = false;
                    for i in 0..n {
                        if perms[pa + i] == v1 && perms[pb + i] == v2 { f = true; break; }
                    }
                    f
                }
                3 => perms[pa + s] != v1,
                _ => perms[pa + s] == v1 || perms[pa + s] == v2,
            };
            if sat {
                masks[base + (m >> 5)] |= 1u32 << (m & 31);
                count += 1;
            }
        }
        pc[c] = count;
    }
    let bank_ms = t0.elapsed().as_secs_f64() * 1000.0;

    let mut nv_rejected = 0;
    for c in 0..bank { if pc[c] == 0 || pc[c] as usize == m0 { nv_rejected += 1; } }

    let mut scratch = vec![0u32; words];
    let mut sel = [0usize; 8];
    let mut checksum: u32 = 0;
    let mut uniques = 0;
    let t2 = Instant::now();
    for _ in 0..iters {
        for i in 0..8 { sel[i] = rnd(bank as u32) as usize; }
        for w in 0..words { scratch[w] = 0xffff_ffff; }
        if m0 & 31 != 0 { scratch[words - 1] = (1u32 << (m0 & 31)) - 1; }
        for i in 0..8 {
            let base = sel[i] * words;
            for w in 0..words { scratch[w] &= masks[base + w]; }
        }
        let mut total: u32 = 0;
        for w in 0..words { total += scratch[w].count_ones(); }
        if total == 1 { uniques += 1; }
        checksum = checksum.wrapping_add(total);
        for drop in 0..8 {
            for w in 0..words { scratch[w] = 0xffff_ffff; }
            if m0 & 31 != 0 { scratch[words - 1] = (1u32 << (m0 & 31)) - 1; }
            for i in 0..8 {
                if i == drop { continue; }
                let base = sel[i] * words;
                for w in 0..words { scratch[w] &= masks[base + w]; }
            }
            let mut t: u32 = 0;
            for w in 0..words { t += scratch[w].count_ones(); }
            checksum = checksum.wrapping_add(t);
        }
    }
    let algebra_ms = t2.elapsed().as_secs_f64() * 1000.0;

    println!("{{\"lang\":\"rust\",\"n\":{},\"M0\":{},\"bank\":{},\"iters\":{},\"words\":{},\"bank_ms\":{:.1},\"algebra_ms\":{:.1},\"evals\":{},\"mask_bytes\":{},\"nv_rejected\":{},\"uniques\":{},\"checksum\":{}}}",
        n, m0, bank, iters, words, bank_ms, algebra_ms, bank * m0, bank * words * 4, nv_rejected, uniques, checksum);
}
