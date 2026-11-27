# Quant trading firms: engineering interview research (Jane Street, Citadel Securities, HRT, Jump, Optiver)

Date checked for every claim: **2026-11-27** unless stated. Scope: engineering roles only (software engineer, quantitative developer, C++/low-latency engineer). Quant trader and quant researcher roles are mentioned only to say what an engineer should not over-prepare.

Evidence labels: **[OFF]** official firm interview guidance · **[POST]** current or recent job posting (establishes job expectations, not interview content) · **[CAND]** candidate-reported (anonymous, small samples, dated) · **[REP]** representative prep material, not firm-specific · **[ED]** editorial recommendation.

Access notes: citadelsecurities.com and citadel.com return HTTP 403 to automated fetches. Citadel pages were read from Wayback Machine snapshots (dates given). Glassdoor and 1point3acres were not readable directly: Glassdoor blocks automated access and 1point3acres puts details behind a login. Candidate claims from those sites come from search-result snippets only, are labelled that way, and should be re-checked by a person before publication. The Jane Street, HRT and Jump careers job lists are client-rendered (empty tables or a "Loading Open Roles" placeholder). Postings were read from each firm's public Greenhouse board API, which is the data behind those pages.

---

## 1. Jane Street

**Official interview guidance [OFF]**
- *Preparing for a Software Engineering interview* (undated, live): the first round is a technical interview over Zoom. Final rounds are in person and focus "mostly, if not entirely" on collaborating on a series of coding problems. Candidates must write code "in a real programming language… not pseudocode" and may use any language. Problems are open-ended, and the page rules out "algorithm bingo" and "aha" puzzles. **No mental math, math olympiad or logic puzzles for SWE.** "We also don't award bonus points for using a functional language like OCaml." Knowing functional programming is not required.
- *What to expect* page: "we strongly encourage you not to try OCaml for the first time during the interview." Most engineers join with no OCaml experience. The process "can be a bit more bespoke" and the recruiter explains it. It links a **mock interview video** (a retired question).
- Blog, *Jane Street interview process 2020* (24 Jul 2020): one technical phone interview, then 2–4 technical onsite rounds. Experienced candidates may also have a non-technical call. London candidates may first take a HackerRank round. Interviews use CoderPad. "We won't ask you math or probability questions for general software engineering roles." This is dated; the current prep page confirms the no-maths rule.
- Blog, *What a Jane Street dev interview is like* (28 Feb 2017): a worked example of the retired "Memo" question in three parts: memoize a function with a hash table, bound the cache with FIFO eviction, then switch to **LRU** (hash table plus doubly linked list, O(1)). Most passing candidates finish part 2. Strong candidates finish part 3.
- Blog, *Our software engineering interviews are changing (a little)* (Matthew Saffer, **2 Nov 2026**): Jane Street is trialling new onsite rounds for **campus candidates** where **LLMs are permitted**. These rounds involve less code-writing and more software design, checking the quality, structure and intent of code, and using LLMs to produce code. "Most rounds will continue to be traditional coding interviews, conducted without LLM assistance." Not every onsite includes the new rounds, and candidates are told in advance. Experienced candidates still get varied interviews: producing software, designing systems and discussing past work. Candidates do not need a particular LLM setup.
- Take-home: none mentioned officially. Behavioral: no separate round is described. The emphasis is collaboration and communication during coding.

**Postings [POST]** (Greenhouse board, updated 2026-11-25)
- *Software Engineer*, NYC, Full-Time: Experienced (gh 4274288002). OCaml is the primary tool and Python is used for research. Asks for "top-notch programming skills" with "no specific checklist". "We don't expect you to have experience with functional programming, OCaml, Python, or finance." No years of experience stated.
- *Software Engineer*, NYC intern (gh 8599644002) and HKG new grad (8637960002). Asks for "a top-notch programmer with a love for technology", curiosity and humility. Interns learn OCaml on the job.
- *Low-Latency Engineer*, NYC (gh 6254435002). Systems are mostly OCaml with small amounts of C/C++, and OCaml is not required. Asks for low-level systems programming and optimization, hardware performance counters and profiling, x86 cache hierarchies, and ideally kernel bypass (OpenOnload, ef_vi, DPDK). This is a specialist experienced role, not entry level.
- OCaml *is* required only in titles marked "(OCaml Experience)", e.g. Senior Software Engineer (OCaml Experience), NYC, which asked for 1 year of OCaml, async programming and production incident handling. That posting now returns 404, so this comes from a search snippet only.

**Candidate reports [CAND]** (Glassdoor snippets, unverified)
- 2025 (NYC): a 30-minute engineer conversation, then CoderPad coding. Another candidate had two technical screens, then onsites.
- 2025–2026: practical, multi-part problems were reported, such as implementing a read/write file system on a low-level disk API, hashing an immutable tree and syncing it with a remote, and an intern class-interface design question. One London candidate reported a file-system design round.
- These support the official "open-ended, extendable problem" description, not LeetCode-style bingo. Third-party guides note that applicants can be routed to QR/QT roles, which do use probability.

**Do not over-prepare [ED]:** the *Probability & Markets* PDF and trading interviews are for QT/QR, not SWE. Learning OCaml for the interview gives no credit and Jane Street advises against it.

---

## 2. Citadel Securities

**Official interview guidance [OFF]**: *Our Engineering Interview Process*, dated 9 Nov 2024. Read from a Wayback snapshot of 10 Jan 2026 because the live page returns 403. The content is campus-oriented: it mentions internships and past internship experience. Some search indexes title it "Experienced Professionals", so whether it also covers experienced hires is unconfirmed. Separate intern/new-grad page (`?p=44130`) was not readable.
- Four steps over about 8 weeks:
  1. A 45-minute remote first round covering technical and behavioral skills: "programming skills, ability, data structures/algorithms and problem-solving". **"Our core programming languages are Python and C++, but we welcome any languages."** Uses CoderPad.
  2. A second round, usually three 45-minute interviews, each technical plus behavioral.
  3. A leadership interview with a senior engineer for a specific team; there may be several if more than one team is interested.
  4. A final review.
- Candidates are assessed generally and matched to a team only at the end. One process covers both Citadel and Citadel Securities.
- Prep advice: research the mission and values, reflect on internship impact, refine your personal story. "Our approach is practical and oriented toward problem-solving". Ask clarifying questions, share your thought process, discuss trade-offs, take hints.
- Online assessment, take-home, maths and AI policy: **not mentioned**. No AI policy found on any official page.

**Postings [POST]**
- *Software Engineer – University Graduate (US)*, Miami/NY (Wayback 28 Oct 2026). Asks for a CS/CE degree, "exceptional programming and design skills", and **"strong analytical skills and familiarity with probability and statistics"**. This is a job requirement, not proof that probability is interviewed. Base pay $235k–$300k.
- *C++ Software Engineer* (expression of interest; Wayback 21 Sep 2026). Asks for "deep experience in C++", "a strong grasp of multithreading, concurrency, and distributed systems", and a CS degree. Trading background is optional.
- *Rates & Credit C++ Engineer*, London (Built In copy, removed 18 Nov 2026). Asks for C++ as the primary language in recent roles, multi-threaded design, distributed systems, data structures, algorithms and memory management.
- *Crypto Quantitative Developer* (Built In copy, mid level). Asks for C++17 or newer for performance-critical systems, Linux, networking and concurrency, and low-latency production trading systems.

**Candidate reports [CAND]** (Glassdoor or 1point3acres snippets, mostly 2024–2025, intern and early career)
- Some interns report a HackerRank OA with two LeetCode-style problems. Others report no OA. The official page lists no OA.
- Reported coding prompts include a ring buffer with read/write, a templated hash map, a thread pool for sending messages, BFS, an "order book" string problem, a stock options book design using a dict, and an OS question. One report describes a C++ debugging-heavy round.
- One 1point3acres write-up describes a backend phone screen on C++ coding plus system design.
- Third-party guides say Securities asks more C++ and systems questions than Citadel. That is third-party opinion, not candidate data.

---

## 3. Hudson River Trading (HRT)

**Official interview guidance [OFF]**: HRT Beat blog, *How to Prepare for Your Software Engineer Interview at HRT* (Dani Ortiz, **15 Sep 2021**). Covers campus SWE and Algo Engineering roles. The internship process is "similar but more abbreviated". The process iterates, and the recruiter is the "primary source of truth".
- **Take-home test** on HackerRank or Codility, usually timed. Some roles restrict the language. Using books or the internet as a language reference is allowed. Test corner cases.
- **About two phone interviews:**
  - A roughly 45-minute technical discussion of systems knowledge, data structures or problem solving.
  - A programming round. Some roles require C++ or Python; others allow any language.
- **Onsite:** a full day. Interviewers look for code that is "idiomatic, modern, resource-aware, well-encapsulated, readable" and for **fundamental systems knowledge: memory, I/O, process management**, i.e. what happens "under the hood". Collaboration, teachability and communication are also assessed.
- Maths/probability for SWE: not mentioned. Experienced-hire process: not covered. No newer official process page found.

**Official AI policy [POST]**: in current postings (e.g. Algo Developer, gh 96224, updated 2026-11-06; also 2026 Grads and C++ postings): "Use of AI tools by an applicant during interviews or assessments is **strictly prohibited**, unless otherwise instructed or agreed upon." HRT says it uses "various methods to evaluate the authenticity of candidate responses" and may end the interview, disqualify the candidate or rescind an offer.

**Postings [POST]** (Greenhouse board `wehrtyou`)
- *Software Engineer (C++ or Python) – 2027 Grads*, NY/Austin/Chicago/London/Singapore (gh 8052122, 2026-11-19). For full-time undergraduate or master's CS students. Asks for "Working experience with C/C++ or Python… good CS fundamentals" and "Knowledge of UNIX operating systems (we use Linux), system/processor performance, and network communication". US base pay $300k.
- *Software Engineering Internship (C++ or Python) – Summer 2027* (gh 8052083). Same language framing.
- *Software Engineer – C++*, experienced (gh 7392942). Asks for 1+ years' experience, "Advanced C++ experience is required, daily use preferred", plus Linux, processor performance and networking. The posting mentions OS internals, CPU architecture and network protocols.
- *Algo Developer* (gh 96224). A quant-research-style role: statistical modelling with "familiarity with C++". This is **not** a pure engineering role. There is also a separate "Algorithm Developer (Quant Researcher)" campus title.
- Other engineering titles on the board: Software Engineer – Low Level (C++), Software Engineer – Python, Distributed Compute/Systems, Trading Systems Engineer, Junior Trading Systems Engineer.

**Candidate reports [CAND]** (Glassdoor snippets)
- Feb 2025 (Singapore): the OA appeared to allow only C++.
- Feb–Mar 2026: a CodeSignal OA with 4 questions in 70 minutes, medium to hard. The phone screen covered C++ pointers and references. A later round covered deep OS questions, data structures, networking and past projects.
- 2022–2024: questions on virtual functions and vtables, virtual vs physical memory, and how map vs unordered_map are implemented. One candidate called the systems questions the hardest part.

---

## 4. Jump Trading

**Official interview guidance:** **none found.** The careers, students and new-grad pages (client-rendered) have no process, prep or FAQ content beyond a scam warning and a note on 2027 regional openings.

**Postings [POST]** (Greenhouse board `jumptrading`, updated 2026-11-20 unless stated)
- *Campus C++ Software Engineer (Intern)*, Singapore (gh 8027946, 2026-09-03; HK/Shanghai version 8027860). Asks for a CS/CE degree, "Proficient in C++", "Strong fundamentals in data structures, algorithms, system design, networking concepts and operating systems", debugging in unfamiliar codebases, and Linux (command line, debugging, bare metal). Competitive programming and statistics are a bonus. The profile says "You use AI tools (Claude, ChatGPT, etc) to move faster" with judgment on when to trust the output. This is a **job expectation, not an interview AI policy**.
- *Campus Python Software Engineer (Intern)*, Singapore (gh 8027955). Python data pipelines, Kafka, MySQL and ClickHouse, with some migration to Rust.
- *Campus Software Engineer (Full-Time)*, Chicago (Jump Crypto mirror, posted 9 Jul 2026, now closed). Asks for C++ **or** Python on Linux and a "Strong understanding of data structures and threading models". Coursework in networking, OS and compilers is helpful but not required. Base pay $250k.
- *Senior Software Engineer – Core Development*, APAC (gh 7809758). Asks for 3+ years, C++ or Python on large distributed systems, and OS, networks and performance.
- *C++ Software Engineer – Trading Team*, London (gh 8242766). Asks for 5+ years of C++ with algorithmic trading systems.
- *Quantitative Developer – Trading Team*, HK (gh 6172858). Asks for a 5-year track record, Python and/or C++, and the "Ability to reason through quantitative problems".
- *Software Engineer – Market Data Systems*, Chicago (Dice copy). Asks for 5+ years, C++ and Rust in low-latency systems. Linux internals and TCP/UDP/multicast are bonus skills.

**Candidate reports [CAND]** (thin and mostly old)
- Oct–Dec 2022, SWE new grad (1point3acres, from the visible summary): a C++ video interview on heap vs stack, TCP vs UDP and vector implementation.
- Glassdoor snippets (dates mostly unknown or before 2020): an onsite focused on concurrency in C/C++, a semaphore output-possibility question, an order book class in C++, a serialized limit order book, and Python decorators. Some 2015 campus interviews with traders included probability.
- One 2026 report mentions a task based on the candidate's experience. There are too few recent reports to describe a current process.

---

## 5. Optiver

**Official interview guidance [OFF]**
- *Optiver interview tips for Software Engineers* (undated, live): interviews feel like "solving a problem with a colleague". "Confident knowledge of a major object-oriented language (**C++, Java, or Python**) is key." Candidates should know data structures and the complexity of their operations and be ready to discuss memory layout. Design trade-offs are probed ("Why did you make this design decision?"). Diagrams and whiteboarding are encouraged. Design should consider architecture, networking, concurrency and memory management. There is a behavioral interview (STAR stories, motivation). "exhaustive preparation is not needed or advised."
- *Applying to Optiver Europe: Recruitment FAQ* (11 Jun 2026): apply via the careers page. Online assessments come by invitation with an authenticator login, and **one attempt per 8 months**, with no retakes. Then a recruiter behavioral interview, then a final day for campus roles. No SWE assessment content and no AI policy.
- Postings state that online assessments follow a successful application and must be completed within 7 days. The Sydney graduate posting says "experience with C++, Java or Python is required for our technical assessment" and asks for object-oriented design knowledge. Intern and graduate applicants who did an OA in the last 8 months cannot reapply.
- AI policy: **none found**.

**Postings [POST]** (Greenhouse board `optiverus`, updated 2026-11-20)
- *Software Engineer Internship (2027 Start)*, London (gh 8713435002). For penultimate-year CS/CE students. Asks for C++, Python or Java "with a strong understanding of underlying computer architecture and system operations", plus clean code.
- *Expressions of Interest – Graduate Software Developer 2027*, Sydney (gh 8450243002). Asks for OO design, C++/Java/Python, and projects outside the classroom. Notes training at the Optiver Tech Academy.
- *Software Engineer – C++*, NYC HFT (gh 8521364002). Asks for 2+ years of C++ in low-latency systems (preferred); C, Python and Linux are a plus.
- *Software Engineer*, Austin HFT (gh 8925970002). C++ preferred, ideally performance-critical. Python, Linux and distributed systems are a plus.

**Candidate reports [CAND]** (Glassdoor or 1point3acres snippets)
- 2024–2026 intern and graduate OA reports: HackerRank coding (two problems in several reports, one a topological-sort variant), plus **multiple-choice CS questions** and **games or mini-games** (Zap-N is named in one summary). One snippet names computer architecture and networking MCQs.
- A Sydney graduate report describes pair programming and a final behavioral plus system design round. European intern reports describe an OA, then a recruiter behavioral interview, then technical interviews over 4–8 weeks.
- An Interview Query aggregation says later rounds are design-heavy (DS, OOP/OOD, systems concepts) and mentions a circular-buffer queue, LRU cache, order book and scheduler. This is third-party aggregation, not individually dated reports.

---

## Cross-firm summary

| Firm | Engineering titles (current) | Languages (posting / interview) | Interview emphasis | AI policy |
|---|---|---|---|---|
| Jane Street | Software Engineer (intern, new grad, experienced), Low-Latency Engineer, Production Engineer, Compiler / PL Engineer | OCaml is primary at work but **not required**. Interview in any language, and no credit for OCaml [OFF] | Collaborative, open-ended, multi-part coding in a real language. No maths or puzzles for SWE [OFF]. Design and past-work discussion for experienced hires [OFF] | **Official**: traditional rounds are LLM-free. Trial campus onsite rounds allow and assess LLM use (Nov 2026) |
| Citadel Securities | Software Engineer (University Graduate), C++ Software Engineer, Quantitative Developer, Rates & Credit C++ Engineer | Python and C++ core; any language welcome [OFF]. Postings stress C++ and multithreading | 45-min rounds of DSA plus behavioral, then team matching [OFF]. C++, concurrency, ring buffer and order book reported [CAND] | None found |
| HRT | Software Engineer (C++ or Python) 2027 Grads and Intern, Software Engineer – C++, Low Level (C++), Python, Trading Systems Engineer. Algo Developer is QR-style | C++ or Python for campus. Advanced C++ for experienced. Some OAs C++-only [CAND] | Timed OA, systems discussion (memory, I/O, processes), idiomatic resource-aware code [OFF 2021]. C++ internals and OS depth [CAND] | **Official (postings)**: AI prohibited in interviews and assessments unless instructed |
| Jump Trading | Campus C++ / Python / UI Software Engineer, Core Development SWE, C++ SWE Trading Team, Quantitative Developer | C++ (primary), Python, some Rust. Linux throughout [POST] | No official guidance. C/C++ concurrency, memory, networking, order book [CAND, mostly old] | None for interviews. Postings expect AI tools on the job |
| Optiver | Software Engineer (intern, graduate, experienced), Software Engineer – C++ (HFT), Quantitative Developer, FPGA | C++, Java or Python for interviews [OFF] | OA (coding, CS MCQs, games) [CAND]. Conversational DS/complexity, memory layout, design trade-offs, behavioral (STAR) [OFF] | None found. One OA attempt per 8 months [OFF] |

## Category mapping and priority (for entry-level engineering candidates) [ED, grounded in the evidence above]

Existing categories that apply to all five: **coding problems**, **data structures and algorithms**, **behavioral**, **projects**. SQL, APIs, backend and AI-assisted coding are low priority except as noted.

| Firm | Priority order |
|---|---|
| Jane Street | 1 practical coding and debugging (open-ended multi-part) · 2 DSA · 3 coding problems · 4 low-level design / OOP-style interface design · 5 projects (experienced: system design, past work) · 6 AI-assisted coding (campus trial rounds only, conditional) · Functional programming (OCaml) **not justified as an interview category** (Jane Street says don't); at most a Library note |
| Citadel Securities | 1 DSA · 2 coding problems · 3 behavioral (assessed in every round) · 4 C++ · 5 concurrency · 6 low-level design (ring buffer, order book) · 7 operating systems · 8 system design (experienced/team rounds) · probability: conditional (posting requirement only) |
| HRT | 1 coding problems (timed OA) · 2 DSA · 3 C++ · 4 operating systems (memory, I/O, processes) · 5 systems performance / low latency · 6 networking · 7 practical coding (idiomatic, resource-aware) · 8 behavioral |
| Jump Trading | 1 C++ · 2 DSA · 3 concurrency · 4 operating systems · 5 networking · 6 systems performance · 7 low-level design (order book) · 8 Python (Python-track roles) · probability: conditional, weak evidence |
| Optiver | 1 DSA (with complexity and memory layout) · 2 coding problems (OA) · 3 OOP / low-level design · 4 system design (trade-offs, hardware-aware) · 5 behavioral · 6 operating systems, networking and computer architecture (OA MCQs [CAND], official tips) · 7 concurrency |

**Proposed new categories**
- **C++**: justified for Citadel Securities, HRT, Jump and Optiver. Postings require it for experienced C++ roles, and candidate reports describe C++ internals questions. Make it **conditional** for campus candidates, since HRT, Jump and Optiver campus roles also accept Python (Optiver also Java), and Citadel welcomes any language. **Not** relevant to Jane Street.
- **Systems performance / low latency**: justified as **conditional** (HRT, Jump, experienced Optiver and Citadel Securities roles, Jane Street Low-Latency Engineer). It is a posting requirement for experienced roles. Interview evidence is candidate-reported and mostly OS and memory fundamentals rather than kernel bypass. Fold entry-level content into operating systems.
- **Concurrency**: justified (Citadel Securities and Jump postings and reports, the Jump campus "threading models" requirement, Optiver official tips).
- **Functional programming (OCaml)**: **not justified** as interview preparation. Jane Street explicitly gives no credit and advises against first-time OCaml use. It could be at most an optional "on the job" note.
- **Probability for engineers**: **not justified as a general category**. Jane Street officially excludes it for SWE. HRT, Optiver and Jump have no official evidence. Citadel's new-grad posting lists probability and statistics familiarity, which makes it **conditional (Citadel Securities only)**. It is labelled a posting requirement, not interview content. Quant trader and researcher probability prep (mental math, market-making games) should be marked "skip for engineering".
- **Trading systems basics**: weak evidence for interviews. No firm says finance knowledge is required (Jane Street, Citadel and Jump say explicitly it is not). Order-book-style exercises appear in candidate reports. Treat as **Defer / optional context**, with the order book covered under low-level design.

## Representative practical exercises

| Exercise | Status |
|---|---|
| LRU cache | **Officially documented by Jane Street** as part 3 of the retired "Memo" question (2017 blog). Optiver mention is third-party aggregation only |
| Order book / limit order book | **Candidate-reported**: Citadel Securities (order book string problem, options book design), Jump (C++ order book class, serialized limit book), Optiver (third-party aggregation). Not officially documented by any firm |
| Ring / circular buffer | **Candidate-reported**: Citadel Securities (ring buffer read/write). Optiver circular-buffer queue via third-party aggregation. Not official |
| Thread pool | **Candidate-reported**: Citadel Securities (one report) |
| Thread-safe queue | **Representative only**. No firm-specific report found |
| Running median | **Representative only**. No firm-specific report found |
| Templated hash map; vector implementation | **Candidate-reported**: Citadel Securities (hash map), Jump (vector, 2022) |
| File system on a disk API; tree hashing and sync | **Candidate-reported**: Jane Street (2025–2026 Glassdoor snippets) |
| Jane Street mock interview video | **Official** practice resource (retired question) |

## New grad vs experienced (what the evidence supports)
- **Campus**: language-flexible coding plus DSA everywhere. Systems fundamentals (OS, memory, networking) appear in HRT, Jump and Optiver campus postings and reports. Jane Street's LLM trial applies only to campus onsites.
- **Experienced**: postings add years of C++, low-latency or production trading experience (HRT 1+ years, Optiver 2+ preferred, Jump 3–5+), plus system design and past-work discussion (Jane Street official, Citadel leadership round). This is outside the site's entry-level scope beyond eligibility notes.

---

## Sources (all checked 2026-11-27)

| URL | Type | Supports |
|---|---|---|
| https://www.janestreet.com/preparing-for-a-software-engineering-interview | OFF | JS stages, real code, any language, no OCaml bonus, no maths or puzzles |
| https://www.janestreet.com/join-jane-street/interviewing/ | OFF | Don't try OCaml first time, bespoke process, mock interview link |
| https://www.janestreet.com/mock-interview | OFF | Mock interview video |
| https://blog.janestreet.com/jane-street-interview-process-2020/ | OFF (2020) | Phone plus 2–4 onsite rounds, CoderPad, no maths for SWE, London HackerRank |
| https://blog.janestreet.com/what-a-jane-street-dev-interview-is-like/ | OFF (2017) | Memo / FIFO / LRU example |
| https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/ | OFF (2 Nov 2026) | LLM-permitted campus trial rounds, other rounds LLM-free |
| https://www.efinancialcareers.co.uk/news/quant-trading-interview-process-market-making | Press (11 Nov 2026) | Secondary report of the JS LLM trial |
| https://boards-api.greenhouse.io/v1/boards/janestreet/jobs (ids 4274288002, 8599644002, 6254435002) | POST | JS SWE (experienced, intern), Low-Latency Engineer |
| https://www.janestreet.com/join-jane-street/position/8637960002 , /8594541002 | POST | JS SWE requirements, no OCaml needed |
| https://www.janestreet.com/join-jane-street/position/7515116002 | POST (404, search snippet only) | OCaml required only for "(OCaml Experience)" titles |
| https://www.glassdoor.com/Interview/Jane-Street-Interview-E255549-RVW103021371.htm (and related JS reviews in search) | CAND (snippets) | 2025–26 CoderPad screens, file-system and tree-hash problems |
| http://web.archive.org/web/20260110114950/https://www.citadelsecurities.com/careers/career-perspectives/our-engineering-interview-process/ | OFF (page 9 Nov 2024; live page 403) | Citadel Securities 4 steps, 45-min rounds, Python/C++ core, any language, CoderPad |
| http://web.archive.org/web/20261028220901/https://www.citadelsecurities.com/careers/details/software-engineer-university-graduate-us/ | POST | New grad requirements, incl. probability and statistics familiarity |
| http://web.archive.org/web/20260921194226/https://www.citadelsecurities.com/careers/details/c-software-engineer/ | POST | C++, multithreading, concurrency, distributed systems |
| https://builtin.com/job/rates-credit-c-engineer/9612395 | POST (aggregator, removed 18 Nov 2026) | Rates & Credit C++ Engineer |
| https://builtin.com/job/crypto-quantitative-developer/8497959 | POST (aggregator) | Crypto QD: C++17, Linux, networking, concurrency |
| https://www.glassdoor.com/Interview/Citadel-Securities-Interview-E1443495-RVW86624118.htm ; https://www.1point3acres.com/interview/thread/1119707 | CAND (snippets) | OA, ring buffer, hash map, thread pool, order book, C++ debugging |
| https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/ | OFF (15 Sep 2021) | HRT take-home, phone rounds, onsite criteria, systems fundamentals |
| https://boards-api.greenhouse.io/v1/boards/wehrtyou/jobs (ids 8052122, 8052083, 7392942, 96224) | POST | HRT titles and requirements, AI prohibition |
| https://builtin.com/job/software-engineer-c-or-python-2026-grads/6833743 | POST (aggregator, removed Feb 2026) | HRT 2026 grads posting and AI prohibition |
| https://www.glassdoor.com/Interview/Hudson-River-Trading-Interview-E470937-RVW103443082.htm ; …RVW95109331 ; …RVW85272403 | CAND (snippets) | CodeSignal 4 in 70 min, C++ pointers, OS and networking, vtables, memory |
| https://www.jumptrading.com/careers/ ; https://www.jumptrading.com/hr/students-new-grads | OFF (no interview content; client-rendered roles) | Absence of official guidance |
| https://boards-api.greenhouse.io/v1/boards/jumptrading/jobs (ids 8027946, 8027955, 7809758, 8242766, 6172858) | POST | Jump campus and experienced requirements, AI-on-the-job expectation |
| https://jobs.theblockchainassociation.org/companies/jump-crypto/jobs/85751816-campus-software-engineer-full-time | POST (mirror, closed) | Campus SWE: C++ or Python on Linux, threading |
| https://www.dice.com/job-detail/f320eaa6-4e1e-4601-a914-de7c0f358041 | POST (aggregator) | Market Data Systems: 5+ years, C++ and Rust |
| https://www.1point3acres.com/interview/thread/944273 | CAND (2022) | Jump C++ interview: heap/stack, TCP/UDP, vector |
| https://www.glassdoor.com/Interview/Jump-Trading-Interview-E251744-RVW30735025.htm (and related) | CAND (snippets, mostly old) | Concurrency, order book, semaphore |
| https://www.optiver.com/join-us/stories/optiver-interview-tips-for-software-engineers/ | OFF (undated) | C++/Java/Python, DS and complexity, design trade-offs, behavioral |
| https://www.optiver.com/join-us/stories/optiver-europe-recruitment-faq/ | OFF (11 Jun 2026) | OA logistics, 8-month rule, behavioral recruiter interview |
| https://boards-api.greenhouse.io/v1/boards/optiverus/jobs (ids 8713435002, 8450243002, 8521364002, 8925970002) | POST | Optiver intern, graduate and experienced requirements, OA within 7 days |
| https://www.glassdoor.co.uk/Interview/Optiver-Interview-E243355-RVW101297753.htm ; https://www.1point3acres.com/interview/thread/1076649 | CAND (snippets) | OA: HackerRank, CS MCQs, games |
| https://www.interviewquery.com/interview-guides/optiver-software-engineer | REP (third party) | Design-heavy later rounds, circular buffer, LRU, order book |

**Biggest gaps:**
- There is no official current process for HRT (2021 only), no official guidance at all for Jump, and no official AI policy for Citadel Securities, Jump or Optiver.
- Citadel's live pages are blocked, so they were read from archive snapshots.
- Candidate data comes from unverified Glassdoor and 1point3acres snippets and is thin for experienced hires and for Jump after 2022.
