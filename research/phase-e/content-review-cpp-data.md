# Phase E content review — cpp-data (automated reviewer, not human expert review)

Scope: `content/questions/cpp.ts`, `sql-databases.ts`, `data-engineering.ts`. Date 2026-11-27.
Execution: all C++ examples compiled with Apple clang 14 `-std=c++20 -Wall -Wextra` under ASan+UBSan and separately TSan (clean; outputs match comments). SQL run in SQLite 3.45 (via Python sqlite3) and a temporary PostgreSQL 14.20 on port 54331 (stopped after). Python run with `python3 -I`. MySQL not available: MySQL-specific claims are from documentation knowledge only.

## C++ (25 questions)

| Q | Issue | Correction | Source checked | Uncertainty |
|---|---|---|---|---|
| 2 Stack vs heap | Presented stack/heap as language terms | Notes the standard says automatic/dynamic storage; stack/heap are typical implementation | cppreference storage duration | — |
| 4 RAII | "resources cannot leak"; unwinding of uncaught exceptions is implementation-defined | "owned resources do not leak", "when a caught exception unwinds" | cppreference RAII / exceptions | — |
| 5 Smart pointers | "no overhead over a raw pointer" unqualified | "with the default deleter typically the size of a raw pointer" | cppreference unique_ptr | ABI cost of passing unique_ptr by value not mentioned (deliberately) |
| 6 Rule of 0/3/5 | Missing the consequential trap | Declaring a destructor/copy op suppresses implicit moves (verified: move copies) | cppreference rule_of_three | — |
| 8 Move semantics | "valid but unspecified" applied to all types; "only assign or destroy" too strict | Library-type guarantee vs user types; operations without preconditions allowed | cppreference std::move | — |
| 9 noexcept move | Omitted move_if_noexcept exception for non-copyable types | Added "(or the type cannot be copied)" | Core Guidelines C.66 | — |
| 11 Virtual cost | No mention of devirtualization | One clause on `final`/devirtualization | cppreference virtual | — |
| 14 vector vs list | "for most sizes vector wins" overgeneral | Qualified to small/moderate elements, "measure" | — (editorial, Stroustrup's well-known benchmark) | Performance claim is empirical |
| 19 Data race | Definition omitted the "not both atomic / not ordered by happens-before" conditions | Definition made precise | cppreference memory model | — |
| 20 atomic vs volatile | seq_cst description vague; "acquire/release are faster" unqualified; lock-freedom not mentioned; relaxed in code not explained | Single total order; x86 cost (verified: seq_cst store → `xchg`, release store → `mov`); relaxed suffices for counter read after join; `is_lock_free()` | cppreference atomic, memory_order; clang -S output | Hardware cost wording is x86-specific by design |
| 21 Condition variable | Lost-wakeup aspect missing | Predicate avoids sleeping on an earlier notification; modify state under the mutex | cppreference condition_variable | — |
| 24 Order book | "production systems replace…" unsupported generalization | "low-latency implementations often…" | — (editorial) | — |
| All CG links | Anchors `#Rf-dangle` etc. do not exist on the rendered page (ids are lowercase) | Lowercased five anchors | Fetched guidelines HTML | — |

Reviewed 25 questions; no issues found in the others. Removals: none. LeetCode sources return 403 to curl (bot protection); slugs are the known problem pages.

## SQL & Databases (24 → 25 questions)

| Q | Issue | Correction | Source checked | Uncertainty |
|---|---|---|---|---|
| 1 Keys | "PK cannot be NULL" false in SQLite for non-integer PKs (verified: two NULL rows inserted); FK may reference any unique key | SQLite exception noted; "(or another unique key)" | SQLite run; PG tutorial | — |
| 3 GROUP BY | PostgreSQL accepts columns functionally dependent on a grouped PK (verified) | Parenthetical added | PG run | — |
| 4 NULL | "neither true nor false" without naming UNKNOWN | Names UNKNOWN | — | — |
| 7 Logical order | "use HAVING" mixed alias and aggregate fixes; SQLite accepts aliases in WHERE (verified), MySQL in HAVING | Split the advice; dialect note | SQLite and PG runs | MySQL HAVING-alias behaviour not run |
| 9 NOT IN | First query's empty result had no output comment | `-- -> no rows` | SQLite + PG runs | — |
| 10 CTE | "current PostgreSQL" vague | PG 12+ inlining conditions, AS MATERIALIZED | PG WITH docs | — |
| 11 Second-highest | **LIMIT/OFFSET version wrong in PostgreSQL when salaries contain NULL** (NULLs sort first in DESC; verified returned 100 not 90) | Added `WHERE salary IS NOT NULL` and dialect note | PG + SQLite runs | — |
| 13 Running total | Default frame includes peers: ties get the same running total (verified) | Stated; RANGE INTERVAL marked PG 11+/MySQL 8, not SQLite; numeric output format noted | PG run; PG window docs | — |
| 14 Streaks | `date - int` is PostgreSQL-only | Marked | PG run | — |
| 15 Pivot | No input data stated; FILTER said PG-only (SQLite supports it) | Data comment added (outputs verified in PG and SQLite); "PostgreSQL and SQLite (not MySQL)" | Both runs | — |
| 21 ACID | Lost-update sentence and follow-up moved to the new isolation question | Removed duplication | PG tutorial | — |
| 22 Slow query | Contrast missing | "(MySQL InnoDB does)" index FKs | — | From MySQL docs knowledge |
| NEW Isolation levels | Genuine gap: isolation levels/anomalies are a standard backend interview topic and were covered by one sentence | Added one concise question; PG behaviour demonstrated with two concurrent sessions (READ COMMITTED lost update → 90; REPEATABLE READ → "could not serialize access due to concurrent update"; atomic UPDATE → 80) | PG 13.2 Transaction Isolation (fetched: default RC, RU=RC, RR no phantoms but serialization anomalies possible) | MySQL default RR and SQLite "serializable" from docs knowledge, not run |

Reviewed 24 original questions; no issues found in the others. Removals: none. Addition: 1 (isolation levels).

## Data engineering (23 questions)

| Q | Issue | Correction | Source checked | Uncertainty |
|---|---|---|---|---|
| 7 Idempotency | ON CONFLICT dialect and unique-constraint requirement unstated | Comment added (run twice in PG: 1 row) | PG INSERT docs | — |
| 10 Late data | Watermark and allowed lateness conflated; "events later than that are dropped" stated as a guarantee | Watermark = max event time − delay; Flink allowed lateness separate; Spark only guarantees data within the delay is aggregated; source added | Spark Structured Streaming watermarking section (fetched) | Flink detail from docs knowledge |
| 15 Spark shuffle | Shuffle mechanics and AQE skew handling missing | Shuffle written to disk/fetched over network; broadcast avoids shuffling the large side; AQE skew-join splitting | Spark RDD guide | — |
| 16 Kafka | "exactly-once within Kafka" imprecise; one-consumer claim ignored rebalances | EOS scoped to read-process-write on Kafka topics with read_committed/Streams; idempotent producer scoped to retry duplicates; rebalance redelivery | Kafka design: delivery semantics (fetched) | — |
| 20 Mobile events | Device timestamp only | Also record server receive time | — (editorial) | — |
| 21 Flatten JSON | Docstring claimed lists go to a separate table; function does not do that | Docstring corrected | Run | — |
| 22 Large file | **Bug: a row with a missing column gives None and raises an uncaught TypeError** (verified) | Catch TypeError too | Run | — |

Reviewed 23 questions; no issues found in the others. Removals: none.

## Human expert review still needed
Highest impact: C++ Q20 (memory orders, x86 cost wording), Q8/Q6 (moved-from state, special-member suppression); SQL new isolation-level question (MySQL InnoDB and SQLite behaviour not executed); Kafka exactly-once wording (DE Q16); watermark semantics across Spark/Flink (DE Q10). All answers still need human expert review in principle.
