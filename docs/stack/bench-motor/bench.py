# X0 core primitive benchmark - Python. Identical algorithm & seed to bench.js
# Uses arbitrary-precision int as the bitset (the idiomatic fast path in Python)
import sys, time, json

N = int(sys.argv[1]) if len(sys.argv) > 1 else 5
BANK = int(sys.argv[2]) if len(sys.argv) > 2 else 2000
ITERS = int(sys.argv[3]) if len(sys.argv) > 3 else 1000
MASK32 = 0xFFFFFFFF
st = 20260907

def nxt():
    global st
    st ^= (st << 13) & MASK32
    st ^= st >> 17
    st ^= (st << 5) & MASK32
    return st

def rnd(m): return nxt() % m

def fact(k):
    f = 1
    for i in range(2, k + 1): f *= i
    return f

NF = fact(N)
perms = []
for idx in range(NF):
    avail = list(range(N)); rem = idx; p = []
    for i in range(N):
        f = fact(N - 1 - i); j = rem // f; rem %= f
        p.append(avail.pop(j))
    perms.append(p)
M0 = NF * NF
WORDS = (M0 + 31) >> 5

kind = [0]*BANK; a1 = [0]*BANK; b1 = [0]*BANK; b2 = [0]*BANK
for c in range(BANK):
    kind[c] = rnd(5); a1[c] = rnd(N); b1[c] = rnd(N); b2[c] = rnd(N)

t0 = time.perf_counter()
masks = [0]*BANK
pc = [0]*BANK
for c in range(BANK):
    k = kind[c]; s = a1[c]; v1 = b1[c]; v2 = b2[c]
    acc = 0; count = 0
    for m in range(M0):
        pa = perms[m // NF]; pb = perms[m % NF]
        if k == 0:   sat = pa[s] == v1
        elif k == 1: sat = pb[s] == v1
        elif k == 2:
            sat = False
            for i in range(N):
                if pa[i] == v1 and pb[i] == v2: sat = True; break
        elif k == 3: sat = pa[s] != v1
        else:        sat = pa[s] == v1 or pa[s] == v2
        if sat:
            acc |= (1 << m); count += 1
    masks[c] = acc; pc[c] = count
bank_ms = (time.perf_counter() - t0) * 1000

nv_rejected = sum(1 for c in range(BANK) if pc[c] == 0 or pc[c] == M0)

FULL = (1 << M0) - 1
checksum = 0; uniques = 0
t2 = time.perf_counter()
for _ in range(ITERS):
    sel = [rnd(BANK) for _ in range(8)]
    r = FULL
    for i in sel: r &= masks[i]
    total = r.bit_count()
    if total == 1: uniques += 1
    checksum = (checksum + total) & MASK32
    for drop in range(8):
        r = FULL
        for i in range(8):
            if i == drop: continue
            r &= masks[sel[i]]
        checksum = (checksum + r.bit_count()) & MASK32
algebra_ms = (time.perf_counter() - t2) * 1000

print(json.dumps({
    "lang": "python", "n": N, "M0": M0, "bank": BANK, "iters": ITERS, "words": WORDS,
    "bank_ms": round(bank_ms, 1), "algebra_ms": round(algebra_ms, 1),
    "evals": BANK * M0, "mask_bytes": BANK * WORDS * 4,
    "nv_rejected": nv_rejected, "uniques": uniques, "checksum": checksum
}))
