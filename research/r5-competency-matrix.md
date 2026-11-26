# R5 — Consolidated entry-level competency matrix

Status: draft for product-owner review. Synthesis date: **2026-11-25**. Evidence base: R1 (Google L3), R2 (Big Tech), R3 (startups and enterprises), R4 (backend and full-stack). No new research batch was run; no targeted verification was required (§13 explains why). Nothing here has been published to the application.

**Everything in this report is an editorial recommendation** derived from R1–R4. Priorities, depths and readiness criteria are not official or universal hiring requirements. Evidence references use the source IDs from each report (e.g. R2-A1, R3-C8, R4-O1).

**Depth scale used here:** Recognize → Explain → Implement → Apply (the scale requested for R5). R1–R4 used "Master" for the top level; "Apply" replaces it with a narrower meaning: solve unfamiliar problems and explain trade-offs, not exhaustive mastery. CLAUDE.md still defines "Master"; aligning the two is an R6 decision (§14).

**Path abbreviations:** **G** general entry-level SWE · **BT** Big Tech · **SU** startup / growth-stage · **EN** enterprise · **BE** backend · **FS** full-stack. Company paths (BT, SU, EN) and role paths (BE, FS) overlap: a candidate picks one or more of each.

**Priority codes:** **E** Essential · **W** Working knowledge · **C** Conditional · **D** Defer.

---

## 1. Executive synthesis

1. **A single shared foundation serves every path.** One programming language to fluency, core data structures and algorithms with complexity analysis, testing and debugging, reading and modifying existing code, technical communication, a behavioral story bank, and AI-assisted engineering with verification. Every report converged on this independently.
2. **Interviews and jobs test different things.** Interviews (especially Big Tech) emphasise DSA, complexity and communication under closed-book conditions. Jobs (all paths) require Git, testing, SQL, APIs, code review, debugging and verified AI use, usually with documentation available. Preparation must cover both, but at different depths and in different modes.
3. **Practical assessments are now common outside Big Tech and spreading inside it.** Debugging rounds, integration tasks, agentic AI rounds, take-homes and work trials appear at growth-stage companies, enterprises (Capital One) and Meta. Codebase drills therefore belong in the foundation, not at the end.
4. **AI policy splits by employer, so candidates need two modes.** Closed-book, AI-free problem solving (Google, Microsoft, most live questions at Pinterest) and AI-assisted work with explicit verification (Meta AI-native rounds, Capital One agentic round, Stripe AI round, startup expectations, Amazon postings).
5. **Role specialisation adds a bounded layer.** Backend adds HTTP/REST, SQL and data modelling, validation, auth and security basics, logging and one deployment. Full-stack adds TypeScript and React. Both are demonstrated mainly through one deployed project.
6. **Much of the conventional curriculum can be deferred.** Advanced language features, system design beyond basics, Kubernetes, microservices, advanced database tuning, design-pattern catalogs, multiple frameworks and cloud certifications are not needed for a first role, each with a stated condition for when they become relevant.
7. **Curriculum completion is not an eligibility substitute.** Postings commonly require degrees, internships or 0–2 years of experience; several "junior" titles require 2+ years. Preparation improves interview and engineering readiness; it does not satisfy experience requirements (§3.1).
8. **Candidates should apply once path-specific readiness criteria are met**, not after completing the apprenticeship (§11).

---

## 2. Evidence quality assessment

### 2.1 What each report contributes

| Report | Strongest evidence | Weakest evidence |
|---|---|---|
| R1 Google | Official process and AI policy; 14 official postings | US posting sample = 1; 5 candidate reports (3 independent) |
| R2 Big Tech | Amazon official topics, OA and 10 US postings; Meta official AI-native FAQ; Microsoft official technical guidance | No current Meta/Microsoft entry postings; no Apple official guidance; Microsoft new-grad candidate reports absent |
| R3 Startup/enterprise | 25 classified postings; official processes (Capital One, JPMorgan, GitLab, YC startups); board-level scarcity counts | Enterprise sample small and finance-heavy; early-stage = YC only; established-tech interview content unverified |
| R4 Backend/full-stack | 28 postings with technology mentions; Pinterest official AI policy | SQL interview evidence weak in US; much candidate evidence internship or non-US; mention counts crude |

### 2.2 Overlaps and non-independent evidence

- **Postings reused:** 8 of R4's 28 postings were already in R3 (Notion new grad, Stripe, Pinterest, DoorDash, Scale AI, Verkada, Affirm ×2). R3 and R4 findings about these postings are **not independent confirmation**.
- **Candidate reports reused or duplicated:** R4 reuses R3-C1–C9 and R2-AP5. R3-C8 and R3-C9 (Capital One) overlap. R3-C4's two Scale AI pages likely describe one candidate. R1-S15/S16 were reposted by one aggregator account. Aced free previews were found unreliable and excluded (R1-S17 partially, R2 Amazon).
- **Single aggregator dependence:** most candidate evidence across R2–R4 comes from FastPrep, which rewrites and combines reports.

### 2.3 Samples that must not be combined

The posting samples used different frames and filters: R1 (all 14 Google early-career SWE roles worldwide, 13 non-US), R2 (10 Amazon US early-career roles plus single postings for Apple), R3 (25 roles selected by segment, entry-level title filters), R4 (28 roles selected by backend/full-stack titles from a third-party index). Counting R1 (14), R2 Amazon (10) and Apple (1), R3 (25) and R4 (28) less the 8 reused, there are roughly 70 distinct postings, but **no aggregate percentages across reports are valid** and none are given here. Within-report counts are cited only with their report.

### 2.4 Overall confidence

| Finding | Confidence |
|---|---|
| Shared foundation (language, DSA, complexity, testing/debugging, communication, behavioral) | **High** — consistent across official and candidate evidence in all reports |
| AI dual-mode requirement | **High** — multiple official sources (R1-S1, R2-M1, R2-MS1, R4-O1) plus postings |
| Practical/codebase skills assessed outside Big Tech | **Medium–high** — official (R3-O1–O4) plus several candidate reports; prevalence unknown |
| Backend core (REST, SQL, testing) as job requirements | **High** for jobs; **low** for SQL as a US interview format |
| TypeScript/React as full-stack signal | **Medium–high** within R4's sample |
| Entry-level system design | **Low** — conflicting, small, employer-specific |
| Employer-specific formats (Amazon LP/Work Simulation, Capital One case/agentic, Meta AI-native) | **Medium** — official for format existence; new-grad applicability sometimes unconfirmed |

---

## 3. Common entry-level engineering foundation

### 3.1 Hiring eligibility (cannot be met by study alone)

- **Degree:** commonly required or preferred; Google, Stripe, Roblox, Affirm, State Street and others accept equivalent experience; Amazon early-career postings require a current or completed CS-related degree in 9/10 (R2-A6).
- **Experience:** new-grad roles typically expect internships (DoorDash requires two, R3) or shipped projects; "junior" and "I" titles may require 0–2 or even 2+ years (R3 Bank of America, Affirm; R4 Jampack listing).
- **Work authorisation / clearance:** segment-specific (defence employers).
- **Implication:** the apprenticeship should help learners **evidence** experience (projects, open-source, internships) and read postings critically (Getting Hired), not imply that completion makes them eligible.

### 3.2 Foundation competencies (all paths)

**[Editorial]** Required before or alongside any path-specific preparation:

1. One programming language at interview fluency (closed-book) and engineering fluency (documentation allowed).
2. Core data structures, algorithms and complexity analysis.
3. Testing and debugging, including dry-running code without execution.
4. Reading and modifying an unfamiliar codebase.
5. Git and pull-request workflow.
6. OOP and small-scale design.
7. Technical communication.
8. Behavioral story bank.
9. AI-assisted engineering with verification, plus AI-free practice.
10. Networking/HTTP and database concepts at Explain depth.
11. One project the learner can explain end to end.

---

## 4. Consolidated competency matrix

Priority by path (E/W/C/D) and minimum sufficient depth. "Interview" and "Engineering" columns summarise relevance across paths (H/M/L, with notable path differences in brackets). Detailed specifications follow in §5.

| # | Competency | G | BT | SU | EN | BE | FS | Interview relevance | Engineering relevance | Min. depth (closed-book interview / on the job) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Programming proficiency (one language) | E | E | E | E | E | E | H (all) | H | Apply / Implement |
| 2 | Language-specific technical knowledge | W | W (C: Apple) | W | W (C: Java/.NET enterprises) | W | W | L (M at Apple, Amazon topic list) | M | Explain / Explain |
| 3 | Data structures and algorithms | E | E | W | E | W–E | W–E | H (BT, EN OAs); M (SU) | M | Apply (BT) · Implement (SU) / Implement |
| 4 | Complexity analysis | E | E | W | E | E | W | H (BT); M elsewhere | M | Apply (BT) · Explain (others) / Explain |
| 5 | OOP and software design (incl. LLD) | E | E | W | W | E | W | M (H at Amazon) | H | Implement / Implement |
| 6 | CS fundamentals (OS, memory, concurrency) | W | W | C | W | W | C | L–M (M at Amazon, Apple MQ) | M | Explain / Explain |
| 7 | Developer tools and Git | E | W | E | E | E | E | L | H | Implement / Implement |
| 8 | SQL and databases | W | C | W | W | E | E | L (US interviews) | H (BE/FS) | Explain / Implement |
| 9 | Networking, HTTP and APIs | W | W | E | W | E | E | M (H in integration rounds) | H | Explain / Implement |
| 10 | Backend engineering (validation, auth, logging, architecture) | C | C | W | W | E | E | M (practical rounds) | H (BE/FS) | Explain / Implement |
| 11 | Frontend engineering (TS, React, HTML/CSS) | C | C | C | C | D | E | M (FS practical rounds) | H (FS) | Implement / Implement |
| 12 | Testing and debugging | E | E | E | E | E | E | H | H | Implement / Implement |
| 13 | Reading and modifying existing code | E | E (Meta, Amazon) | E | E | E | E | H outside BT; M–H in BT | H | Implement / Implement |
| 14 | Application security fundamentals | W | W | W | W | E | E | L | M–H | Explain / Implement (basics) |
| 15 | Deployment and cloud fundamentals | W | D–C | E | W | W | W | L | M (H at early-stage) | Recognize / Implement (one deploy) |
| 16 | Entry-level system design | C | C | C (E for AI startups) | C | W | W | L–M (SU), low (BT) | M | Explain / Explain |
| 17 | AI-assisted engineering and verification | E | E | E | E | E | E | H (format-dependent) | H | Implement (both modes) |
| 18 | Technical communication | E | E | E | E | E | E | H | H | Apply / Apply |
| 19 | Behavioral preparation | E | E | E | E | E | E | H | H (collaboration) | Implement |
| 20 | Project and portfolio discussions | E | W | E | W | E | E | M (H at SU) | M | Explain |

Notes: BE/FS rows assume the general foundation is already in place. A BT backend candidate takes the BT column for interview topics and the BE column for engineering readiness.

---

## 5. Detailed minimum-depth specifications

Format per competency: why · eligibility / interview / engineering · priority · depth · concepts · questions · tasks · readiness · defer · deeper when · evidence · confidence.

### 5.1 Programming proficiency (one language)

- **Why:** every coding round, take-home and job task depends on it; employers accept any mainstream language (R2-A1, R2-MS2, R3 Stripe/Roblox).
- **Eligibility:** ~1 year of programming via coursework, projects or internships (R1-S10, R3 Pinterest). **Interview:** write correct code without IDE or compiler (R1-S17, R2-A1, R2-M2); runnable in some loops (R2-MS2). **Engineering:** write maintainable code in a team codebase with documentation available.
- **Priority:** E on all paths. **Depth:** Apply (closed-book core subset); Implement (on the job with documentation).
- **Concepts:** types and values; control flow; functions and scope; strings; lists, tuples, sets, dictionaries; mutability and references; sorting with keys; core built-ins; exceptions; classes; modules and imports; reading tracebacks.
- **Questions:** "Why did this function modify its caller's list?" "What does `sorted(items, key=…)` return and in what time?" "Why is membership faster in a set than a list?"
- **Tasks:** write a 30–60 line program from a spec without references; refactor repeated code into functions; fix a traceback.
- **Readiness:** solve 10 unseen easy problems (string/array/hash map) in under 20 minutes each without references; explain the cost of every built-in used.
- **Defer:** metaclasses, descriptors, async internals, generator protocol details, advanced decorators, packaging.
- **Deeper when:** target employer requires a language you don't know; systems or language-runtime roles.
- **Evidence:** R1 §7; R2 §8; R3 §3.2; R4 §3.3. **Confidence:** high.

### 5.2 Language-specific technical knowledge

- **Why:** some interviewers check that you understand what you use; a few run rapid-fire concept questions.
- **Eligibility:** none. **Interview:** rare outside Apple (nine Java questions, R2-AP5) and Amazon's "language nuances" topic (R2-A1); non-US OAs use MCQs (R4-C2, C3). **Engineering:** idiomatic usage, reading library docs.
- **Priority:** W; C for Apple and Java/.NET enterprise targets. **Depth:** Explain.
- **Concepts (Python):** mutable vs immutable; references and copying; default-argument pitfall; `is` vs `==`; truthiness; integer and float behaviour; dict/set hashing requirements; iteration vs indexing; exception hierarchy basics.
- **Questions:** "What happens with a mutable default argument?" "Shallow vs deep copy?" "Why can't a list be a dict key?"
- **Tasks:** predict outputs of 10 short snippets; explain a bug caused by aliasing.
- **Readiness:** answer 15 core questions about your language correctly without notes.
- **Defer:** interpreter internals, GIL details, memory allocator behaviour, bytecode.
- **Deeper when:** Apple-style loops; Java/C# enterprise roles (OOP and exceptions questions).
- **Evidence:** R1-S17, R2-A1, R2-AP5, R4 §6. **Confidence:** low–medium (few reports).

### 5.3 Data structures and algorithms

- **Why:** the dominant format in Big Tech loops and in enterprise and many startup online assessments (R1 §5, R2 §7, R3-O5, R3-C8).
- **Eligibility:** listed in 8/14 Google, 10/10 Amazon, several R3/R4 postings. **Interview:** H for BT and EN OAs; M for SU (still present in Stripe/Decagon screens, R3-C1, C5). **Engineering:** choosing appropriate structures; rarely implementing algorithms from scratch.
- **Priority:** E (G, BT, EN); W (SU); W–E (BE/FS, depending on company path). **Depth:** Apply for BT; Implement for SU and enterprise OAs.
- **Concepts:** arrays and strings; hash maps and sets; stacks and queues (deque); linked lists; trees and BSTs; heaps; graphs (BFS/DFS, topological sort); two pointers; sliding window; binary search; recursion and backtracking; intervals; sorting (one n·log n algorithm explained); basic dynamic programming; union-find and Dijkstra at Implement level for BT.
- **Questions:** "Which structure gives O(1) average lookup and why?" "BFS vs DFS — when?" "How would you detect a cycle?"
- **Tasks:** timed unseen problems; follow-up optimisation; problems without a compiler.
- **Readiness:** see §11.2.
- **Defer:** segment trees, network flow, advanced string algorithms, competitive-programming tricks.
- **Deeper when:** targeting Big Tech or quant firms; after failing a loop on DSA.
- **Evidence:** R1-S4/S5/S15–S19, R2-A1/A2/MS2/M2, R3-C1/C5/C8, R4 §6. **Confidence:** high.

### 5.4 Complexity analysis

- **Why:** asked in every reported Big Tech round; used to justify trade-offs everywhere.
- **Interview:** H (BT); M (SU, EN). **Engineering:** spotting accidentally quadratic code, N+1 queries.
- **Priority:** E (G, BT, EN, BE); W (SU, FS). **Depth:** Apply (BT); Explain elsewhere.
- **Concepts:** Big-O for time and space; best/average/worst; amortised cost; cost of built-ins; complexity of nested loops (not always n²).
- **Questions:** "What's the worst case of your hash map solution?" "Why is `list.append` amortised O(1)?"
- **Tasks:** state and justify complexity for every practice problem; improve an O(n²) solution.
- **Readiness:** derive time/space for 20 of your own solutions without error.
- **Defer:** formal proofs, master theorem beyond recognition.
- **Deeper when:** performance-critical roles.
- **Evidence:** R1 §5, R2-MS2/M2, R1-S19. **Confidence:** high.

### 5.5 OOP and software design (including low-level design)

- **Why:** Amazon officially assesses OOD (R2-A1) and new-grad reports describe LLD/API design rounds (R2-A9); OOP is listed in enterprise postings (R4 State Street, PathAI); essential for maintainable code.
- **Interview:** M overall; H at Amazon; occasional at Google (R1-S15). **Engineering:** H.
- **Priority:** E (G, BT, BE); W (SU, EN, FS). **Depth:** Implement.
- **Concepts:** classes and objects; encapsulation; composition vs inheritance; interfaces/abstract base classes; separation of concerns; designing a small API; SOLID at Recognize level.
- **Questions:** "Design classes for a parking lot." "Why composition over inheritance here?" "How would this change if a new payment type is added?"
- **Tasks:** 45-minute LLD exercises with changing requirements; refactor a procedural script into classes.
- **Readiness:** design and code a small system (parking lot, library, rate limiter) in 45 minutes and adapt it to two requirement changes.
- **Defer:** design-pattern catalogs (Amazon says detailed patterns are unlikely to be asked, R2-A1), UML.
- **Deeper when:** Amazon targets; Java/.NET enterprise roles.
- **Evidence:** R1-S15, R2-A1/A9, R3 §7, R4 §7. **Confidence:** medium.

### 5.6 Computer science fundamentals (OS, memory, concurrency)

- **Why:** named by Amazon (R2-A1) and as an Apple MQ (R2-AP1); occasionally team-specific in Google (R1-S20).
- **Interview:** L–M; TD. **Engineering:** M (understanding performance, threads, async).
- **Priority:** W (G, BT, EN, BE); C (SU, FS). **Depth:** Explain.
- **Concepts:** processes vs threads; memory (stack/heap, references); concurrency basics and race conditions; async I/O; caching; what happens when a URL loads (overlaps 5.9).
- **Questions:** "Process vs thread?" "What is a race condition?" "Why use async for I/O-bound work?"
- **Tasks:** explain an async endpoint; reason about a shared-counter bug.
- **Readiness:** explain five core fundamentals questions accurately without notes.
- **Defer:** OS internals, scheduling algorithms, virtual memory details, kernel programming.
- **Deeper when:** systems/infrastructure teams (R1-S20), embedded roles.
- **Evidence:** R1-S20, R2-A1/AP1, R4 §7 #17. **Confidence:** medium.

### 5.7 Developer tools and Git

- **Why:** every job uses version control and code review; startups expect PR fluency from day one.
- **Interview:** L (rarely assessed directly). **Engineering:** H (R1-S12/S13, R3 DoorDash, R4 15/28 code review).
- **Priority:** E (G, SU, EN, BE, FS); W (BT interviews, still E for the job). **Depth:** Implement.
- **Concepts:** commits, branches, merging, rebasing basics, resolving conflicts, pull requests, code review etiquette, terminal basics, virtual environments, a debugger.
- **Questions:** "How do you resolve a merge conflict?" "What makes a good PR description?"
- **Tasks:** all project work via branches and PRs; resolve a seeded conflict; review a PR.
- **Readiness:** complete a feature via PR with a clear description, respond to review, resolve a conflict.
- **Defer:** advanced Git internals, monorepo tooling.
- **Deeper when:** joining a team with specific workflows.
- **Evidence:** R1-S12/S13, R3 §8, R4 §3.3. **Confidence:** high (job) / medium (interview).

### 5.8 SQL and databases

- **Why:** the most consistent backend requirement (R4: 15/28 mentions); job-essential for BE/FS.
- **Eligibility:** required in some postings (R3 DoorDash; R4 State Street, TikTok). **Interview:** **L in US evidence** (no accessible US new-grad SQL round, R4 §14); M in non-US OAs (R4-C3) and internships (R4-C1); concepts at Amazon (R2-A1). **Engineering:** H for BE/FS.
- **Priority:** E (BE, FS); W (G, SU, EN); C (BT). **Depth:** Explain (interview concepts) / Implement (job).
- **Concepts:** tables, keys, relationships; SELECT with filtering, JOINs, GROUP BY, aggregation; INSERT/UPDATE/DELETE; transactions; indexes and when to add them; relational vs non-relational trade-offs; N+1 queries; SQL injection.
- **Questions:** "Inner vs left join?" "What does an index cost?" "When would you choose a document store?"
- **Tasks:** write queries for a provided schema; design a schema for a small domain; use the database in the project.
- **Readiness:** write 10 queries (joins, grouping, aggregation, subquery) correctly without reference; explain index trade-offs.
- **Defer:** query planner optimisation, sharding, replication internals, stored procedures.
- **Deeper when:** data-heavy or performance-critical roles; database teams (Amazon Database SDE).
- **Evidence:** R2-A1, R3 §3.2, R4 §3.3/§6/§14. **Confidence:** high (job) / low (US interview format).

### 5.9 Networking, HTTP and APIs

- **Why:** integration rounds (R3-C1/C2, R4-C2) and backend/full-stack jobs depend on it; Amazon lists internet fundamentals (R2-A1).
- **Interview:** M; H in SU integration rounds. **Engineering:** H.
- **Priority:** E (SU, BE, FS); W (G, BT, EN). **Depth:** Explain (interview) / Implement (job).
- **Concepts:** DNS, TCP/IP at a high level; HTTP methods, status codes, headers; request/response lifecycle; REST resource design; JSON; pagination; idempotency; rate limits; consuming third-party APIs with error handling.
- **Questions:** "What happens when you type a URL?" "PUT vs PATCH?" "How would you page through an API?"
- **Tasks:** consume a paginated REST API and transform the data in 60 minutes; build CRUD endpoints.
- **Readiness:** complete the integration benchmark (§11.3); explain request lifecycle end to end.
- **Defer:** TCP internals, BGP, GraphQL/gRPC (unless the team uses them).
- **Deeper when:** networking/infrastructure teams; API platform roles.
- **Evidence:** R2-A1, R3-C1/C2, R4-C1/C2, R4 §3.3. **Confidence:** medium–high.

### 5.10 Backend engineering (validation, auth, logging, architecture)

- **Why:** distinguishes backend-ready candidates; assessed indirectly through practical rounds and take-homes.
- **Interview:** M (backend practicals, take-home defences: R3-C4, R4-O2). **Engineering:** H for BE/FS.
- **Priority:** E (BE, FS); W (SU, EN); C (G, BT). **Depth:** Explain / Implement.
- **Concepts:** layered structure (routes/handlers, services, data access); input validation and consistent error responses; authentication vs authorization; sessions and tokens (OAuth/JWT at Explain); configuration and secrets; structured logging; basic async endpoints; ORM basics in one tool.
- **Questions:** "Where does validation belong?" "How does your API stop users accessing others' data?" "What would you log on an error?"
- **Tasks:** build Assignment 1 backend (§10).
- **Readiness:** see §11.4.
- **Defer:** microservices, message queues, event sourcing, advanced caching.
- **Deeper when:** infra or platform roles; mid-level.
- **Evidence:** R4 §4, §7. **Confidence:** medium.

### 5.11 Frontend engineering (TypeScript, React, HTML/CSS)

- **Why:** full-stack postings converge on TypeScript (19/28) and React (18/28) (R4 §3.3).
- **Interview:** M for FS (debugging in React/TS codebases, R3-C3; app-building in internships, R4-C1). **Engineering:** H for FS.
- **Priority:** E (FS); C (G, BT, SU, EN — only if targeting frontend-heavy teams); D (BE). **Depth:** Implement.
- **Concepts:** semantic HTML and CSS layout; TypeScript types, async/await, modules; DOM and events at Explain; React components, props, state, effects; forms and validation; API calls with loading/error states; accessibility basics (labels, keyboard, contrast); one component-testing tool; browser dev tools.
- **Questions:** "Props vs state?" "How do you handle a failed API call in the UI?" "How do you make a form accessible?"
- **Tasks:** build Assignment 1 frontend; debug a broken React feature in an unfamiliar repo.
- **Readiness:** see §11.5.
- **Defer:** second framework, advanced state libraries, SSR internals, animation, design systems.
- **Deeper when:** frontend-specialist roles; team uses another framework.
- **Evidence:** R4 §5, §7 F1–F12. **Confidence:** medium–high.

### 5.12 Testing and debugging

- **Why:** universally assessed (Google testing, Microsoft explicit testing, debugging rounds outside BT) and universally required.
- **Interview:** H. **Engineering:** H.
- **Priority:** E on all paths. **Depth:** Implement.
- **Concepts:** constructing examples and edge cases; dry-running; reading tracebacks and logs; using a debugger; unit and integration/API tests; test-first for bug fixes; regression tests.
- **Questions:** "How do you know your solution works?" "Walk me through how you found this bug."
- **Tasks:** dry-run every DSA solution; write tests for the project; find seeded bugs in unfamiliar repos.
- **Readiness:** find and fix two of three seeded bugs in a ~1,000-line repo in 45 minutes (§11.3).
- **Defer:** property-based testing, mutation testing, performance testing frameworks.
- **Deeper when:** QA-heavy teams, test infrastructure roles.
- **Evidence:** R1-S4/S7, R2-MS2/M1, R3-C1–C4/C8, R4 §6. **Confidence:** high.

### 5.13 Reading and modifying existing code

- **Why:** official focus at Meta (R2-M1) and GitLab (R3-O3), practical rounds at Stripe/Notion/Scale AI/Capital One, and a stated job expectation (R3 Affirm, Stripe, MSPilot).
- **Interview:** H outside BT; M–H within BT (Meta, Amazon work simulation). **Engineering:** H.
- **Priority:** E on all paths. **Depth:** Implement.
- **Concepts:** navigating a repository; tracing execution; reading tests to learn behaviour; making a scoped change without breaking behaviour; writing a regression test; code review for correctness and design.
- **Questions:** "How did you orient yourself in this codebase?" "How do you know your change didn't break anything?"
- **Tasks:** Assignment 2 drills (§10).
- **Readiness:** add a small tested feature to an unfamiliar repo in 45–60 minutes on two different repos.
- **Defer:** large-scale refactoring, legacy migration strategy.
- **Deeper when:** mid-level ownership.
- **Evidence:** R2-M1, R3-O3/C1–C4/C8/C9, R4 §6. **Confidence:** medium–high.

### 5.14 Application security fundamentals

- **Why:** referenced in 11/28 R4 postings; enterprise and regulated domains stress secure coding; SQL-injection debugging observed (R4-C1).
- **Interview:** L. **Engineering:** M–H.
- **Priority:** E (BE, FS); W (others). **Depth:** Explain; Implement basics in the project.
- **Concepts:** injection (SQL, command); authentication vs authorization; password hashing; secrets management; input validation; least privilege; dependency vulnerabilities; HTTPS.
- **Questions:** "How does SQL injection happen and how do you prevent it?" "Where do you store secrets?"
- **Tasks:** secure the project (hashed passwords, parameterised queries, env secrets, authorization checks).
- **Readiness:** identify five security flaws in a provided code sample.
- **Defer:** threat modelling frameworks, cryptography internals, penetration testing.
- **Deeper when:** security, identity, fintech, healthcare or government roles.
- **Evidence:** R3 §4.4, R4 §3.3/§7. **Confidence:** medium.

### 5.15 Deployment and cloud fundamentals

- **Why:** early-stage startups expect engineers to own deploys (R3-O1 MSPilot); enterprises use existing pipelines; Big Tech uses internal tooling.
- **Interview:** L. **Engineering:** M; H at early-stage.
- **Priority:** E (SU); W (G, EN, BE, FS); D–C (BT). **Depth:** Recognize (interview) / Implement one deploy.
- **Concepts:** environments and configuration; environment variables; one hosting platform; a managed database; CI running tests; containers at Recognize; logs in production.
- **Questions:** "How is your app deployed and configured?" "What happens when a deploy fails?"
- **Tasks:** deploy the project with CI.
- **Readiness:** explain and demonstrate your deployment pipeline.
- **Defer:** Kubernetes, Terraform/IaC, multi-region architectures, cloud certifications (none required in R3/R4 entry samples).
- **Deeper when:** infra/platform/cloud teams; startups listing them as requirements.
- **Evidence:** R3 §8/§11, R4 §3.3/§12. **Confidence:** medium.

### 5.16 Entry-level system design

- **Why:** conflicting evidence: not observed in Big Tech new-grad reports (R1 §5, R2-M6) but present in some startup new-grad loops (R3-C5–C7) and generic official materials (R1-S8, R2-A1, R2-M2).
- **Interview:** L (BT), L–M (SU, especially AI startups). **Engineering:** M.
- **Priority:** C (G, BT, SU, EN — E for AI-focused startups that list it); W (BE, FS). **Depth:** Explain.
- **Concepts:** clients, APIs, databases, caches; stateless services; basic scaling (load balancing, read replicas, caching) vocabulary; data modelling; trade-offs.
- **Questions:** "Design a URL shortener's API and storage." "What changes at 100× users?"
- **Tasks:** describe the architecture of your project and how it would scale.
- **Readiness:** in 30 minutes, explain the API, data model and scaling plan for a small product and justify two trade-offs.
- **Defer:** distributed consensus, sharding strategy, senior-level design interviews.
- **Deeper when:** startup targets with design rounds; mid-level roles; Amazon SDE II (R2-A3 boundary).
- **Evidence:** R1-S8, R2-A1/A3/M2/M6, R3-C5–C7. **Confidence:** low.

### 5.17 AI-assisted engineering and verification

- **Why:** postings increasingly require it (R1-S10, R2-A6, R3 §3.2, R4 §3.2); interviews either prohibit AI (R1-S1, R2-MS1) or assess its use (R2-M1, R3-C8/C9, R4-O1).
- **Eligibility:** listed as a minimum qualification in some postings (Google US, Amazon 5/10). **Interview:** H, mode depends on employer. **Engineering:** H (validate AI code: R2-A6).
- **Priority:** E on all paths. **Depth:** Implement, in two separate modes.
- **Concepts:** **AI-free mode:** solve and explain without assistance. **AI-assisted mode:** decompose the task; give precise instructions; review every change; test before trusting; detect hallucinated APIs and subtle bugs; check correctness before optimising (R2-M7); keep ownership and explain the result.
- **Questions:** "How do you verify AI-generated code?" "What do you do when the AI is wrong?" (R2-A8)
- **Tasks:** Assignment 2b with a verification log; complete one agentic bug-fix-plus-feature exercise in 40 minutes.
- **Readiness:** catch at least one incorrect AI suggestion per drill; explain every line accepted.
- **Defer:** building LLM products, evals, fine-tuning (unless targeting AI roles).
- **Deeper when:** AI-product roles; employers with AI-native interviews.
- **Evidence:** R1-S1/S10, R2-A6/A8/M1/M7/MS1, R3-C8/C9, R4-O1. **Confidence:** high.

### 5.18 Technical communication

- **Why:** repeatedly decisive in candidate reports and official guidance (R1-S2/S5, R2-MS2/MS3).
- **Interview:** H. **Engineering:** H.
- **Priority:** E. **Depth:** Apply.
- **Concepts:** clarifying questions; stating assumptions; brute force before optimising; thinking aloud; accepting hints; summarising; written PR descriptions and READMEs.
- **Questions:** behaviour observed across all technical rounds rather than asked directly.
- **Tasks:** narrate every timed practice problem; record and review mock interviews.
- **Readiness:** two realistic mock interviews with explicit feedback on clarity.
- **Evidence:** R1 §4–5, R2 §5, R3-C9 ("talking through the work mattered"). **Confidence:** high.

### 5.19 Behavioral preparation

- **Why:** a dedicated round at every employer reviewed; pervasive at Amazon; case and manager rounds in enterprise and Apple.
- **Interview:** H. **Engineering:** collaboration skills H.
- **Priority:** E. **Depth:** Implement.
- **Concepts:** STAR / STAR(R) structure; quantified impact; "I" not "we"; ambiguity, conflict, failure, ownership, deadlines, learning, collaboration, customer focus; mapping stories to employer values (Amazon Leadership Principles).
- **Questions:** "Tell me about a time you disagreed with a teammate." "A time you failed." "A time you took ownership beyond your role."
- **Tasks:** write and rehearse 8–10 stories; handle three levels of follow-up.
- **Readiness:** §11.6.
- **Evidence:** R1-S2, R2-A4/A5/MS3/M2/AP5, R3-O4. **Confidence:** high.

### 5.20 Project and portfolio discussions

- **Why:** startups ask to see deployed projects (R3-O1, R4 Mirantis, EQL); deep-dive rounds appear in several loops; internship loops include project presentations (R2-MS6).
- **Interview:** M; H at SU. **Engineering:** M.
- **Priority:** E (G, SU, BE, FS); W (BT, EN). **Depth:** Explain.
- **Concepts:** problem and users; architecture; key decisions and alternatives; trade-offs; what broke and how you fixed it; what you would change; how AI was used and verified.
- **Questions:** "Why this architecture?" "What was the hardest bug?" "What would you change with more time or users?"
- **Tasks:** 20-minute project walkthrough with Q&A.
- **Readiness:** answer 10 deep-dive questions about your project without notes.
- **Evidence:** R2-MS6, R3-O1, R4 §3.2/§6. **Confidence:** medium.

---

## 6. Interview assessment framework

| Format | Support | Where observed | Preparation category |
|---|---|---|---|
| Coding and algorithms | **Well supported** | All BT; enterprise OAs; many SU screens | Foundation DSA (§5.3–5.4) |
| Behavioral | **Well supported** | All employers | Story bank (§5.19) |
| Debugging and code review | **Well supported outside BT**; code review weak at entry level | Stripe, Notion, Scale AI, Capital One; GitLab (non-entry) | Codebase drills (§10 A2) |
| AI-assisted coding | **Well supported, employer-specific** | Meta (official), Capital One, Stripe, Pinterest designated sections, startups | Two-mode AI practice (§5.17) |
| Practical engineering assessments | Moderately supported | Amazon Work Simulation, Scale AI backend practical, Klaviyo (intern), Capital One technical case | Codebase drills + project |
| OOP and low-level design | Moderately supported; strongest at Amazon | Amazon (official + reports), Google once, Stripe parsers | LLD practice (§5.5) |
| Project deep dives | Moderately supported | Startups, Decagon, Microsoft internship | Project walkthrough (§5.20) |
| Take-home assignments | Moderately supported, startup-specific | Corelayer, EQL, Notion AI, xAI | Take-home simulation (§10 A3) |
| Basic system design | **Weakly supported, conflicting** | Some startup new-grad loops; generic official material | Conditional (§5.16) |
| SQL and database assessments | **Weak in US** | Accenture India, Klaviyo internship, Wise (1/13) | Job-focused SQL (§5.8); conditional interview prep |
| Rapid-fire technical questions | **Weak**, employer-specific | Apple (Java), non-US OAs | Language knowledge (§5.2), conditional |
| Business case interview | Single employer | Capital One | Employer add-on |
| Recorded video interview | Single employer in sample | JPMorgan HireVue | Employer add-on |

No candidate should expect every format; the target path determines which to prepare.

---

## 7. Employer-specific differences (add-ons to the foundation)

| Path / employer | Add-on preparation |
|---|---|
| Google | Higher DSA volume and difficulty; no-compiler practice; strictly AI-free |
| Amazon | Leadership Principles mapped to every story with deep follow-ups; OOD/LLD and API design; OA incl. Work Simulation; CS-fundamentals vocabulary; discuss verifying AI output |
| Meta | Speed (two problems in ~35 minutes historically); AI-native practice in CoderPad-style environment with existing multi-file code |
| Microsoft | Runnable-code discipline; explicit testing (boundaries, stress, security); STAR(R) with reflection |
| Apple | Language-fundamentals questions; long manager behavioral round; team-specific recruiter guidance |
| Early-stage startups | Deployed project with evidence of use; take-home and work-trial readiness; heavy AI-tool fluency; product and customer communication |
| Growth-stage | Debugging and integration rounds; AI coding rounds; basic system design for some AI companies |
| Enterprise programs | Online assessment (CodeSignal/HackerRank); recorded video interview (JPMorgan); behavioral + business case (Capital One); agentic coding round (Capital One) |

---

## 8. Role-specific differences

| Role | Adds to the foundation | Primarily demonstrated by |
|---|---|---|
| General SWE | Nothing beyond the foundation; one project | Interviews + one project |
| Backend | HTTP/REST, SQL and data modelling, validation and errors, auth, security basics, logging, one deployment | Assignment 1 (backend), integration take-home |
| Full-stack | Backend additions + TypeScript, React, HTML/CSS, forms, API integration, loading/error states, accessibility basics, frontend debugging | Assignment 1 (full-stack), React debugging drill |

A backend candidate targeting Big Tech prepares BT interview topics (DSA-heavy) and builds backend evidence for screening and the job; a full-stack candidate targeting startups prioritises practical rounds and a deployed full-stack project.

---

## 9. Existing Python topic priority review

The 8 published topics remain unchanged. Priority applies to the **general and Big Tech interview path**; backend notes where the instructional stack changes the priority.

| # | Topic | Status | Priority | Rationale |
|---|---|---|---|---|
| 1 | Variables and Data Types | Published | **E** | Core fluency |
| 2 | Operators and Expressions | Published | **E** | Core fluency; modulo/floor division in DSA |
| 3 | Strings | Published | **E** | Frequent interview data type |
| 4 | Conditional Statements | Published | **E** | Core fluency |
| 5 | Loops | Published | **E** | Core fluency; complexity basis |
| 6 | Functions and Arguments | Published | **E** | Core fluency; interview solutions are functions |
| 7 | Scope | Published | **W** | Explain-level; prevents bugs |
| 8 | Lists | Planned | **E** | Primary interview structure |
| 9 | Tuples | Planned | **W** | Multiple returns, composite keys |
| 10 | Sets | Planned | **E** | Hash-set patterns central to DSA |
| 11 | Dictionaries | Published | **E** | Hash-map patterns central to DSA |
| 12 | Mutability, References and Copying | Planned | **E** (Explain depth) | Common source of interview bugs; language questions |
| 13 | Built-in Functions | Planned | **W** (focused subset) | `sorted`, `enumerate`, `zip`, `min/max`, `sum`, `any/all`, `range` |
| 14 | Sorting and Custom Sort Keys | Planned | **E** | Intervals, greedy problems, records |
| 15 | Comprehensions | Planned | **W** | Readability; not required to solve problems |
| 16 | Exception Handling | Planned | **W** (E for BE/FS) | Error handling in APIs and projects |
| 17 | Modules and Packages | Planned | **W** | Needed to structure a project; basic imports and environments only |
| 18 | File Handling | Planned | **C** | Only for tasks reading files; Recognize otherwise |
| 19 | Type Hints | Planned | **C** (W for BE using FastAPI) | Required by the instructional backend framework; not for interviews |
| 20 | Iterators and Generators | Planned | **D** (Recognize) | Rarely needed for entry interviews |
| 21 | Decorators | Planned | **D** (Recognize usage only) | Using framework decorators is enough; writing them deferred |
| 22 | Standard Library Essentials | Planned | **E** (narrow scope) | `collections` (deque, Counter, defaultdict), `heapq`, `bisect` are DSA tools; rest deferred |
| 23 | Python Debugging | Planned | **E** | Tracebacks, print/logging, debugger; supports §5.12 |
| 24 | Integrated Programming Exercises | Planned | **E** as a checkpoint | Becomes the fluency gate below |

**Fluency gate before DSA [Editorial]:** topics 1–6, 8, 10, 11, 12 (Explain), 14 and 23, plus the §5.1 readiness check (10 unseen easy problems, under 20 minutes each, no references). Topics 7, 9, 13, 15, 16, 17 can be learned alongside DSA or the project; 18–21 are learned only when needed; 22 is taught inside DSA. **Learners do not need to complete all 24 topics before progressing.**

Distinctions: **language fluency** = gate topics; **language-specific interview preparation** = §5.2 question set; **advanced language knowledge** = topics 18–21 and beyond, deferred.

---

## 10. Practical engineering recommendations

**[Editorial]** Minimum set: one substantial project plus two repeatable drill types.

**A1 — One deployed application (portfolio).**
- Backend version: REST API + PostgreSQL for a small real domain; CRUD plus one non-trivial query; validation and consistent errors; authentication and authorization; unit and API tests; structured logging; CI; deployed; README with architecture and trade-offs.
- Full-stack version: adds a TypeScript/React frontend with forms, validation, loading/error states, accessibility basics, component tests; deployed end to end.
- General-path candidates may build either version.
- **Real users are beneficial but not required** to demonstrate competence; a deployed, tested, documented application with a clear walkthrough is sufficient. Users strengthen startup applications.
- Must be explainable and modifiable without AI; include a short "how AI was used and verified" note.

**A2 — Existing-codebase drills (repeatable, not portfolio).**
- 2a, **no AI:** fix seeded bugs and add a tested feature in unfamiliar repositories (45–60 minutes).
- 2b, **AI-assisted:** repeat with an AI agent; keep a verification log; reject incorrect output; prove fixes with tests.
- 2c, **review:** review a PR or AI-generated change for correctness, design, tests, security and readability.

**A3 — Timed integration take-home simulation (repeatable).**
- 3–4 hours: consume an external REST API, transform and store data in SQL, expose an endpoint (and a screen for full-stack), with tests and README; then defend decisions for 30–45 minutes.

**Additional projects** only when a gap remains, e.g. a candidate who built a backend-only A1 but targets full-stack roles extends A1 with a frontend rather than starting a new project.

**Instructional stack [Editorial].** Default: **Python / FastAPI / PostgreSQL** for the backend and **TypeScript / React** for full-stack frontends. Rationale: Python is the apprenticeship's language and a common interview language; FastAPI exposes HTTP, validation and typing concepts clearly; PostgreSQL is the most-named database in R4; TypeScript and React are the clear full-stack market signal. Caveat: FastAPI was named in only 1 of 28 R4 postings — it is a vehicle for transferable concepts, not an employer requirement. **Equivalence rule:** a learner already proficient in another suitable stack (e.g. TypeScript/Node, Java/Spring, Go, C#/.NET) may use it for A1–A3 if it demonstrates the same concepts. No competing frameworks are taught.

---

## 11. Readiness criteria

**[Editorial benchmarks — not employer-validated hiring thresholds.]** Candidates should apply once the criteria for their chosen path are met; the full apprenticeship is not a prerequisite.

### 11.1 General engineering foundations
1. Pass the Python fluency gate (§9).
2. Explain 15 core language questions (§5.2) without notes.
3. Complete one A2a drill within time on an unfamiliar repository.
4. Use Git branches and PRs for all work; resolve a merge conflict.
5. Explain what happens when a browser loads a URL; process vs thread; relational vs non-relational.

### 11.2 Big Tech coding interviews
1. Solve two of three unseen Medium problems in 45 minutes each, AI-free and without a compiler, across the §5.3 patterns.
2. For each: clarify, brute force, optimise, state time/space complexity, dry-run edge cases.
3. Design and code a small LLD problem in 45 minutes and adapt to two requirement changes.
4. Pass two realistic timed mock interviews with another person.
**Stopping point:** once met consistently over two weeks, additional problem volume has diminishing returns; apply.

### 11.3 Practical engineering interviews
1. Find and fix two of three seeded bugs in a ~1,000-line unfamiliar repo in 45 minutes, explaining aloud.
2. Add a small tested feature to unfamiliar code in 45 minutes, once AI-free and once with an AI agent, catching at least one incorrect AI suggestion.
3. Consume a paginated REST API, transform the data and handle errors in 60 minutes.
4. Complete a 4-hour take-home with tests and README, and defend it for 45 minutes.
5. Review a 200-line PR and identify correctness, design, testing and readability issues.

### 11.4 Backend engineering
1. AI-free, implement a REST resource (CRUD + filtered list) with validation, errors and tests in ~60 minutes.
2. Write 10 SQL queries (joins, grouping, aggregation, subquery) without reference; explain index trade-offs.
3. Design a schema for a small domain and justify it.
4. Explain the request lifecycle in your app and where auth, validation and logging occur.
5. Identify five security flaws in a sample; explain prevention.
6. Demonstrate and explain the deployment of A1.

### 11.5 Full-stack engineering
Backend criteria, plus:
1. AI-free, build a React component with a form, validation, API call, and loading/error states in ~60 minutes.
2. Debug a broken React/TypeScript feature in an unfamiliar repo using dev tools.
3. Explain how frontend, API and database interact in A1 and what changes with more users.

### 11.6 Behavioral interviews
1. 8–10 STAR(R) stories, 2–3 minutes each, with quantified results and personal contribution.
2. Hold up under three levels of follow-up.
3. Present A1 for 20 minutes and answer 10 deep-dive questions.

### 11.7 Employer-specific
- Amazon: every story mapped to at least two Leadership Principles; practice OA including Work Simulation.
- Meta: AI-native practice session; one timed two-problem screen.
- Microsoft: solve in a runnable environment with explicit tests.
- Apple: core language-fundamentals questions.
- Startups: A1 deployed; one take-home simulation; basic system design explanation for AI-focused companies.
- Capital One-style enterprise: practice OA; business case discussion; agentic bug-fix + feature in 40 minutes.
- JPMorgan-style: practice recorded video interview.

---

## 12. Explicit defer-until-needed list

| Topic | Keep the foundation | Becomes necessary when… |
|---|---|---|
| Advanced Python (iterators protocol, writing decorators, metaclasses, descriptors, async internals) | Use framework decorators; Recognize generators | Library/framework development; language-heavy interviews |
| File handling beyond basics | Read/write a text or JSON file | Tasks involving files or data processing |
| Full system design | Entry-level design (§5.16) | Startup design rounds; mid-level roles |
| Kubernetes, Terraform, IaC | One deploy; Recognize containers | Infra/platform roles or explicit requirements |
| Microservices, message queues, event-driven systems | API contracts; Recognize concepts | Microservice-heavy teams |
| Advanced database optimisation, sharding, replication | Indexes, N+1 awareness | Data-heavy or performance roles |
| Design-pattern catalogs, advanced SOLID | OOP, separation of concerns | Java/.NET enterprise roles |
| OS internals, networking depth | Explain-level fundamentals (§5.6, §5.9) | Systems/infrastructure teams |
| Second frontend or backend framework | One framework well | Target employer mandates another |
| GraphQL, gRPC | REST | Team uses them |
| Cloud certifications | — | Rarely; not required in R3/R4 entry samples |
| Rare algorithms (segment trees, network flow) | Core patterns | Competitive or quant interviews |
| ML/LLM building, evals, fine-tuning | AI-assisted engineering | AI-product or ML roles |
| Business case frameworks | — | Capital One-style programs |
| Clearance-related knowledge | — | Defence employers |

---

## 13. Contradictions and unresolved uncertainties

| Issue | Evidence | Resolution for curriculum purposes |
|---|---|---|
| AI banned vs expected in interviews | Google/Microsoft prohibit (R1-S1, R2-MS1); Meta expects (R2-M1); Pinterest uses designated sections (R4-O1); Capital One agentic round (R3-C8/C9) | Not a contradiction: employer-specific. Teach both modes explicitly. |
| System design at entry level | Not observed in BT new-grad reports; observed in some startup loops; generic official mentions | Conditional; Explain depth; confidence low. |
| SQL: required on job, rarely tested in US interviews | R4 15/28 postings vs no US SQL round found (R4 §14) | Teach SQL to Implement for job readiness; interview SQL practice conditional. |
| DSA at early-stage startups | Not described in official startup processes (R3 §4.1) vs present in Stripe/Decagon screens | Keep DSA at W for SU; E for BT and enterprise OAs. |
| Degree requirement | "Or equivalent" (Google, many) vs Amazon degree requirement | Eligibility varies; Getting Hired guidance should flag it. |
| Real users for projects | R3 recommended real users; R5 brief requires them to be optional | Beneficial, not required (§10). |
| Python vs TypeScript as primary language | TypeScript more frequent in R4 FS postings; Python common for interviews and the existing curriculum | Python primary; TypeScript added only for full-stack. |
| Depth scale (Master vs Apply) | CLAUDE.md uses Master; R5 brief uses Apply | R6 decision; R5 uses Apply. |

**Why no targeted verification was performed:** each apparent contradiction is explained by employer differences or by the interview-versus-job distinction, both already documented with official sources. Further sampling would not change the curriculum recommendation within this batch's scope.

**Remaining uncertainties:** Meta AI-native applicability to new grads; Microsoft new-grad loop content; established-tech new-grad interview content (Pinterest, DoorDash, Roblox, Affirm, Palantir); prevalence of every observed format; seasonal effects on posting counts.

---

## 14. Recommendations for R6 curriculum restructuring

**[Editorial]** For product-owner decision; no changes made.

1. **Restructure the Apprenticeship around paths, not 18 sequential subject phases:**
   - **Foundation:** Python fluency gate → DSA and complexity (with dry-run testing integrated) → OOP and LLD → Git and developer tools → CS fundamentals essentials (Explain) → technical communication and behavioral (continuous).
   - **Practical engineering:** codebase drills (A2, no-AI and AI-assisted) introduced early and repeated; A1 project built progressively.
   - **Role tracks:** Backend (HTTP/REST, SQL, data modelling, validation, auth, security, logging, deployment); Full-stack (backend + TypeScript/React).
   - **Interview preparation by format:** coding, LLD, practical/debugging, take-home, project deep dive, behavioral, AI-assisted; employer add-ons layered on top.
2. **Map existing phases** (Programming Mastery; OOP; DSA; CS Fundamentals; Developer Tools; SQL; Networking; Backend; Frontend; Testing; Software Design; Cloud & DevOps; System Design; AI-Assisted Engineering; Projects; Technical Interviews; Behavioral; Getting Hired) into the structure above, merging those that become role-track modules (SQL, Networking, Backend, Frontend, Testing, Cloud & DevOps) and reducing System Design and Software Design to entry-level scope.
3. **Trim Programming Mastery** to the fluency gate plus working-knowledge topics (§9); move deferred topics to the Knowledge Library as optional reference.
4. **Add "apply now" checkpoints** tied to §11 criteria per path.
5. **Keep all published content**; re-label priorities rather than delete.
6. **Decide the depth scale** (adopt Apply in CLAUDE.md, or keep Master) before publishing new content.
7. **Flag possible content-structure needs for approval** (feature freeze applies): representing per-path priorities and checkpoints may require changes to the curriculum data or topic fields. R6 should first test whether the existing architecture can express the new structure (e.g. phases as path stages, planned entries for deferred topics) before proposing any schema change.
8. **Interview Preparation and Getting Hired:** add format-based guides and employer add-ons; add guidance on reading postings (unreliable titles, scarcity of entry roles, eligibility vs readiness).
9. **Revalidate weak areas** opportunistically (Meta new-grad AI-native, Microsoft new-grad loops, US SQL interview evidence) without a new broad research batch.
