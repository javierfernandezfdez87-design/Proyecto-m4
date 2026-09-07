// X0 core primitive benchmark - Go. Identical algorithm & seed to bench.js
package main

import (
	"fmt"
	"math/bits"
	"os"
	"strconv"
	"time"
)

var st uint32 = 20260907

func next() uint32 {
	st ^= st << 13
	st ^= st >> 17
	st ^= st << 5
	return st
}
func rnd(m uint32) uint32 { return next() % m }

func fact(k int) int {
	f := 1
	for i := 2; i <= k; i++ {
		f *= i
	}
	return f
}

func main() {
	n, bank, iters := 5, 2000, 1000
	if len(os.Args) > 1 { n, _ = strconv.Atoi(os.Args[1]) }
	if len(os.Args) > 2 { bank, _ = strconv.Atoi(os.Args[2]) }
	if len(os.Args) > 3 { iters, _ = strconv.Atoi(os.Args[3]) }

	nf := fact(n)
	perms := make([]uint8, nf*n)
	for idx := 0; idx < nf; idx++ {
		avail := make([]uint8, n)
		for i := 0; i < n; i++ { avail[i] = uint8(i) }
		rem := idx
		for i := 0; i < n; i++ {
			f := fact(n - 1 - i)
			j := rem / f
			rem %= f
			perms[idx*n+i] = avail[j]
			avail = append(avail[:j], avail[j+1:]...)
		}
	}
	m0 := nf * nf
	words := (m0 + 31) >> 5

	kind := make([]uint8, bank)
	a1 := make([]uint8, bank)
	b1 := make([]uint8, bank)
	b2 := make([]uint8, bank)
	for c := 0; c < bank; c++ {
		kind[c] = uint8(rnd(5))
		a1[c] = uint8(rnd(uint32(n)))
		b1[c] = uint8(rnd(uint32(n)))
		b2[c] = uint8(rnd(uint32(n)))
	}

	t0 := time.Now()
	masks := make([]uint32, bank*words)
	pc := make([]int, bank)
	for c := 0; c < bank; c++ {
		k, s, v1, v2 := kind[c], int(a1[c]), b1[c], b2[c]
		base := c * words
		count := 0
		for m := 0; m < m0; m++ {
			pa := (m / nf) * n
			pb := (m % nf) * n
			var sat bool
			switch k {
			case 0:
				sat = perms[pa+s] == v1
			case 1:
				sat = perms[pb+s] == v1
			case 2:
				sat = false
				for i := 0; i < n; i++ {
					if perms[pa+i] == v1 && perms[pb+i] == v2 { sat = true; break }
				}
			case 3:
				sat = perms[pa+s] != v1
			default:
				sat = perms[pa+s] == v1 || perms[pa+s] == v2
			}
			if sat {
				masks[base+(m>>5)] |= 1 << uint(m&31)
				count++
			}
		}
		pc[c] = count
	}
	bankMs := float64(time.Since(t0).Nanoseconds()) / 1e6

	nvRejected := 0
	for c := 0; c < bank; c++ { if pc[c] == 0 || pc[c] == m0 { nvRejected++ } }

	scratch := make([]uint32, words)
	var sel [8]int
	var checksum uint32
	uniques := 0
	t2 := time.Now()
	for it := 0; it < iters; it++ {
		for i := 0; i < 8; i++ { sel[i] = int(rnd(uint32(bank))) }
		for w := 0; w < words; w++ { scratch[w] = 0xffffffff }
		if m0&31 != 0 { scratch[words-1] = (1 << uint(m0&31)) - 1 }
		for i := 0; i < 8; i++ {
			base := sel[i] * words
			for w := 0; w < words; w++ { scratch[w] &= masks[base+w] }
		}
		total := uint32(0)
		for w := 0; w < words; w++ { total += uint32(bits.OnesCount32(scratch[w])) }
		if total == 1 { uniques++ }
		checksum += total
		for drop := 0; drop < 8; drop++ {
			for w := 0; w < words; w++ { scratch[w] = 0xffffffff }
			if m0&31 != 0 { scratch[words-1] = (1 << uint(m0&31)) - 1 }
			for i := 0; i < 8; i++ {
				if i == drop { continue }
				base := sel[i] * words
				for w := 0; w < words; w++ { scratch[w] &= masks[base+w] }
			}
			t := uint32(0)
			for w := 0; w < words; w++ { t += uint32(bits.OnesCount32(scratch[w])) }
			checksum += t
		}
	}
	algebraMs := float64(time.Since(t2).Nanoseconds()) / 1e6

	fmt.Printf("{\"lang\":\"go\",\"n\":%d,\"M0\":%d,\"bank\":%d,\"iters\":%d,\"words\":%d,\"bank_ms\":%.1f,\"algebra_ms\":%.1f,\"evals\":%d,\"mask_bytes\":%d,\"nv_rejected\":%d,\"uniques\":%d,\"checksum\":%d}\n",
		n, m0, bank, iters, words, bankMs, algebraMs, bank*m0, bank*words*4, nvRejected, uniques, checksum)
}
