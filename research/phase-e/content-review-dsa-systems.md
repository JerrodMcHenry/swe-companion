# Phase E content review — dsa-systems

Automated review (Claude), 2026-11-27. This is not a human expert review.

Method: read every answer. Extracted every `code` block. Ran the 27 DSA Python examples and 2 OS Python examples with `python3 -I` (3.13.5), and compiled the 2 C++ snippets (clang++ -std=c++20, ASan+UBSan). Every output comment matched the real output. Checked the HTTP status of all 93 source URLs (all returned 200). Fetched and checked the content of: the docs.python.org time-complexity page (dict O(n) worst case, amortized append), heapq (the *_max functions were added in 3.14), asyncio-task (gather/TaskGroup failure semantics), Brewer's "CAP Twelve Years Later" and "The Tail at Scale".

## data-structures-algorithms.ts (76)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Worst/average/amortized | The answer did not say how amortized cost differs from average case | Added: amortized is a guarantee over every sequence of operations, not an assumption about the inputs | docs.python.org time-complexity (footnote 1) | — |
| Quicksort | Gave only the average O(log n) stack space | Added: O(n) in the worst case unless you recurse into the smaller part first | VisuAlgo (existing) | — |
| Own sort in interview | "stable" was stated generically, but stability depends on the language | Python sort is guaranteed stable; C++ std::sort is not (use std::stable_sort) | Python Sorting HOWTO | — |

Reviewed 76 questions; no issues found in the others. Removals: none.

## system-design.ts (11)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Load balancer | Said the load balancer "removes a single point of failure", but the LB itself can be one | It removes servers as a single point of failure; the LB itself needs redundancy | SDP load balancer | — |
| Caching | "Update or delete" on write ignored the race between concurrent writes and gave no staleness guidance | Invalidate rather than overwrite; the TTL bounds staleness; state the tolerable staleness for each piece of data | SDP cache | Invalidation still has a small race window (not mentioned, to keep the answer short) |
| Message queue | Did not mention at-least-once delivery | Most queues deliver at least once, so jobs must be idempotent; repeatedly failing jobs go to a dead-letter queue | SDP asynchronism | — |
| CAP | Used the "pick two of three" wording | Reframed: the C-or-A choice applies during a partition; "two of three" is misleading; without a partition the trade-off is consistency vs latency; the choice can differ per operation. Source changed to Brewer 2012 | InfoQ Brewer article | — |

Reviewed 11 questions; no issues found in the others. Removals: none.

## networking.ts (7)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| URL in browser | Assumed TCP+TLS on every connection | Added that HTTP/3 uses QUIC over UDP and combines the transport and TLS steps | — (standard; RFC 9000/9114) | — |
| TCP vs UDP | Handshake costs and HTTP/2 vs HTTP/3 were absent (the follow-up asked for them) | Added: three-way handshake = 1 RTT; TLS 1.3 adds +1 RTT (TLS 1.2 +2); TCP head-of-line blocking in HTTP/2; QUIC streams with a 1-RTT combined handshake. Follow-up replaced | — (RFC 8446, RFC 9000) | 0-RTT resumption omitted on purpose |
| HTTP methods | "Safe methods do not change server state" was too absolute | Safe methods are defined as read-only: the client requests no state change | RFC 9110 semantics | — |

Reviewed 7 questions; no issues found in the others. Removals: none.

## operating-systems.ts (19)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Stack vs heap | Implied that Python's RecursionError is a stack overflow | Python stops earlier, at its configurable recursion limit | gc/sys docs | — |
| False sharing | Presented 64 bytes as universal and said performance "collapses" | Lines are typically 64 bytes on x86-64; some CPUs (e.g. Apple M-series) use 128; use hardware_destructive_interference_size or the measured size. "Drop sharply". The code comment now says 64-byte line | — | The 128-byte figure for Apple M-series is from memory, not fetched |
| Alignment | Did not say misaligned access is UB in C++ | Added: undefined behaviour in C++, and faults on some hardware | cppreference (existing) | — |
| Context switch | The µs figure was not labelled as typical | Now "typically on the order of microseconds; varies" | — | Magnitude only |
| Busy-polling | Trade-off not stated | It costs a fully used core and power | — | — |
| Atomics | Implied atomics are always lock-free and cheap | Contended atomics still bounce cache lines; only std::atomic_flag is guaranteed lock-free | cppreference | — |
| Tail latency | No source and no concrete reasoning | Added the fan-out example (100 servers × 1% → ~63%, computed 1−0.99^100) and the Dean & Barroso source | research.google page | — |
| Hot-path allocation | Said "std::function captures" allocate, which is too broad | Only captures beyond the small-buffer size allocate (implementation-defined) | — | — |

Reviewed 19 questions; no issues found in the others. GIL wording (free-threaded build experimental in 3.13, supported but not default in 3.14) was checked and kept. Removals: none.

## Human expert review still needed
Highest impact: CAP and caching-consistency wording (system design); the networking handshake RTT summary; the OS low-latency group (false-sharing line sizes, context-switch cost, atomics/lock-free, UDP multicast vs TCP order entry, which is third-party knowledge); and the DSA complexity claims for Dijkstra (O((V+E) log V) with lazy deletion) and union-find (inverse Ackermann). In principle, every answer still needs a human review.
