# R6 — Employment-first curriculum design

Status: proposal for product-owner approval. Date: **2026-11-25**. Based on R1–R5 (R5 as corrected). Nothing here has been implemented: no application code, schema, curriculum file or topic file has been changed.

All curriculum structure, priorities, depths, readiness checkpoints and stopping points in this report are **editorial recommendations** derived from R1–R5. They are not verified employer requirements. Evidence limitations from R1–R5 apply throughout; references use R5 section numbers (e.g. R5 §5.3) and original source IDs where useful.

Depth scale (CLAUDE.md): **Recognize · Explain · Implement · Apply**. Priority codes: **E** Essential · **W** Working knowledge · **C** Conditional · **D** Defer. Paths: **G** general · **BT** Big Tech · **SU** startup/growth · **EN** enterprise · **BE** backend · **FS** full-stack.

---

## 1. Executive summary

- **Replace 18 sequential subject phases with 10 focused Apprenticeship units in the existing three stages**: five foundation units, three applied units, two employment units (§2).
- **Deliver targeted paths as Interview Preparation guides**, not as more Apprenticeship phases: company guides (Google, Amazon, Meta, Microsoft, Apple, Startups & growth, Enterprise programs) and role guides (Software Engineer, Backend, Full-Stack). Each path guide selects shared Library topics by priority, gives a sequence, add-ons and a stopping point. The existing `InterviewGuide` type already supports this (§14).
- **Replace Programming Mastery with Programming Fluency**: a 12-topic fluency gate (6 already published) plus later reinforcement; 3 role-specific and 3 optional reference topics; proficient learners skip with a checkpoint (§12).
- **Integrate interview preparation from day one**: communication and dry-running inside every DSA exercise; a behavioral story bank started in the first unit; eleven format guides prioritised by R5 evidence strength (§7).
- **One deployed project plus two repeatable drill types** (codebase drills with separate no-AI and AI-assisted modes; timed take-home simulation). Real users optional (§8).
- **Readiness-first navigation**: every unit opens with a "can you already do this?" checklist and ends with a stopping point; every path says when to apply (§9).
- **Architecture**: the curriculum fits existing types, routes and templates **except** a readiness checklist at the top of Apprenticeship units. One optional field on `Phase` plus one rendered section is proposed; a no-change fallback exists (§14–15).
- **Publication plan**: a structural batch (curriculum restructure, depth-text migration) followed by content batches ordered by employability impact: fluency gate → DSA → core interview guides → practical engineering → backend track → path guides → full-stack → conditional formats (§16).

---

## 2. Proposed complete curriculum

### 2.1 Apprenticeship (10 units, existing three stages)

| # | Stage | Unit | Replaces / absorbs | Primary paths |
|---|---|---|---|---|
| 1 | Foundations | **Programming Fluency** | Programming Mastery | All |
| 2 | Foundations | **Data Structures, Algorithms & Complexity** | DSA | All (E for BT/EN; W for SU) |
| 3 | Foundations | **Object-Oriented Programming & Design** | OOP; Software Design | All (E for G/BT/BE) |
| 4 | Foundations | **Engineering Fundamentals** | Developer Tools; CS Fundamentals; Networking & Internet (concepts); SQL & Databases (concepts); security basics | All |
| 5 | Foundations | **Practical Software Engineering** | Testing & Software Quality; AI-Assisted Engineering; code reading and review | All |
| 6 | Applied Engineering | **Build and Deploy One Project** | Practical Engineering Projects; Cloud & DevOps (single deploy); System Design (entry-level explanation) | All (E for SU/BE/FS; W for BT/EN) |
| 7 | Applied Engineering | **Backend Engineering** | Backend Engineering; SQL & Databases (implementation); Networking (HTTP/REST implementation) | BE, FS; W for SU/EN |
| 8 | Applied Engineering | **Full-Stack Engineering** | Frontend Engineering | FS; C otherwise |
| 9 | Employment Preparation | **Interview Preparation** (points to the Interview Preparation section) | Technical Interviews; Behavioral Interviews; System Design (interview format) | All |
| 10 | Employment Preparation | **Getting Hired** (points to the Getting Hired section) | Getting Hired | All |

### 2.2 Interview Preparation (paths and formats)

- **Role guides:** Software Engineer (general), Backend Engineer, Full-Stack Engineer. (AI, Solutions and Forward Deployed Engineer remain planned for later research.)
- **Company guides:** Google, Amazon, Meta, Microsoft, Apple, Startups & Growth-Stage, Enterprise Programs. (Netflix remains planned; not researched.)
- **Interview-type (format) guides:** Coding & Algorithms (published), OOP & Low-Level Design, Debugging & Code Review, Practical Coding Assessments, AI-Assisted Coding, Take-Home Assignments, Project Deep Dives, Behavioral Interviews (canonical), Basic System Design (conditional), SQL & Database Assessments (conditional), Rapid-Fire Technical Questions (conditional; replaces "Technical Knowledge").

### 2.3 Knowledge Library

All published topics, including optional and deferred reference material, organised by category (§13). The Apprenticeship links only the topics a unit needs; path guides link topics by priority.

### 2.4 Getting Hired

Existing career guides, plus guidance on reading postings (unreliable titles, eligibility versus readiness, scarcity of entry-level roles). Behavioral and project interview entries reference the canonical Interview Preparation guides instead of duplicating them.

---

## 3. Common foundation

Units 1–5 plus the project (unit 6) and the behavioral story bank form the common foundation (R5 §3.2). **It is not a prerequisite block**: learners start targeted preparation as soon as the relevant entry checks are met.

| Foundation element | Unit | Minimum depth | Can start targeted prep after |
|---|---|---|---|
| One language at fluency | 1 | Apply (closed-book core) | Fluency gate |
| DSA & complexity | 2 | Apply (BT) / Implement (others) | Core patterns checkpoint |
| OOP & small-scale design | 3 | Implement | LLD checkpoint |
| Git, HTTP, database and CS concepts, security basics | 4 | Explain (Implement for Git) | Unit 4 checkpoint |
| Testing, debugging, codebase reading, code review, AI two modes | 5 | Implement | First drill passed |
| One explainable project | 6 | Explain / Implement | Project walkthrough |
| Behavioral story bank | Interview Prep (started in unit 1) | Implement | 8–10 stories |

---

## 4. Targeted preparation paths

Each path is an Interview Preparation guide that **references** shared units and Library topics with a priority, then adds path-specific practice. No path duplicates foundation content.

| Path | Shared units emphasised | Add-ons | Stop and apply when |
|---|---|---|---|
| **Big Tech (general)** | 1, 2 (Apply), 3, 5; project at W | Volume of timed DSA; AI-free, no-compiler practice; mock interviews | R5 §11.2 + §11.6 met |
| Google | as Big Tech | Strict AI-free practice; harder graph/DP problems | + Google add-on |
| Amazon | as Big Tech + 3 (E), 4 | Leadership Principles mapping; LLD/API design; OA incl. Work Simulation; AI-verification discussion | + Amazon add-on (R5 §11.7) |
| Meta | as Big Tech + 5 (AI-assisted mode) | Two problems in ~35 min; AI-native practice in existing multi-file code | + Meta add-on |
| Microsoft | as Big Tech | Runnable code with explicit tests; STAR(R) reflection | + Microsoft add-on |
| Apple | as Big Tech | Language-fundamentals questions; long manager behavioral round | + Apple add-on |
| **Startup & growth-stage** | 1, 2 (Implement), 5 (E), 6 (E), 7 or 8 | Debugging and integration rounds; take-home simulation; AI-heavy workflow; basic system design for AI companies | R5 §11.3 + project deployed + §11.6 |
| **Enterprise programs** | 1, 2 (Implement), 3, 4, 5 | Online assessment; recorded video interview; business case (Capital One); agentic round | R5 §11.1–11.2 (Implement level) + enterprise add-on |
| **Backend** | 1, 2, 4, 5, 6, 7 | SQL practice; REST resource benchmark; security review | R5 §11.4 + relevant company add-on |
| **Full-stack** | Backend path + 8 | React component benchmark; frontend debugging | R5 §11.5 + relevant company add-on |

Company and role paths combine: e.g. "Backend at a startup" uses the Backend guide for engineering content and the Startup guide for interview formats.

---

## 5. Recommended learning sequence

**Principle:** one **primary focus** at a time plus **one small recurring practice**; never several unrelated courses in parallel.

| Step | Primary focus | Recurring practice (small, weekly) | Skip rule |
|---|---|---|---|
| 1 | Programming Fluency (unit 1) | Start behavioral story bank (one story per week) | Pass fluency gate → skip |
| 2 | DSA core patterns (unit 2) | Narrate and dry-run every problem; one story | Pass DSA checkpoint → move on |
| 3 | Practical SE basics (unit 5): testing, debugging, first no-AI drill | One DSA problem every other day (active recall) | Pass first drill → move on |
| 4 | OOP & Design (unit 3) | One codebase drill per week | Pass LLD checkpoint |
| 5 | Engineering Fundamentals (unit 4) | DSA review | Pass unit 4 checklist |
| 6 | Project (unit 6) with Backend (7) or Full-Stack (8) track | One drill per week (alternating no-AI / AI-assisted); DSA review | Project checkpoint |
| 7 | Path guide: interview formats for chosen targets | Mock interviews; take-home simulation | Path stopping point → **apply** |

Big Tech learners may move from step 4 directly to step 7, keeping the project lighter (W). Startup and backend learners reach step 6 earlier and keep DSA at Implement. Applying can start as soon as a path's criteria are met; the remaining units continue alongside applications.

**Retention methods (applied in every unit):** active recall (solve without notes before reviewing), independent implementation, explaining aloud or in writing, spaced repetition of earlier patterns through later exercises, and reuse of earlier concepts in the project and drills.

---

## 6. Detailed learning-unit specifications

Each unit lists: purpose · evidence · roles · priority · depth · essential concepts · prerequisites · representative questions · practical exercises · interview relevance · readiness checkpoint (entry: skip if met) · stopping point · defer.

### Unit 1 — Programming Fluency

- **Purpose:** write correct code without references quickly enough to start DSA and projects.
- **Evidence:** R5 §5.1, §9; R1 §7; R2 §8.
- **Roles / priority:** all paths, E. **Depth:** Apply (closed-book core subset).
- **Essential concepts:** the 12 gate topics (§12): types, operators, strings, conditionals, loops, functions, lists, sets, dictionaries, mutability and references, sorting with keys, debugging and tracebacks.
- **Prerequisites:** none.
- **Questions:** "Why did this function change its caller's list?" "What does `sorted(..., key=...)` cost?" "Why is set membership O(1) on average?"
- **Exercises:** 10–20 short programs from specifications; predict-the-output drills; fix tracebacks.
- **Interview relevance:** prerequisite for all coding rounds; basis for rapid-fire language questions.
- **Readiness checkpoint (skip if you can):** solve 10 unseen easy problems (strings, arrays, hash maps) in under 20 minutes each without references, and explain the cost of every built-in used.
- **Stopping point:** checkpoint passed → start unit 2. Remaining Python topics are reinforced later or used as reference.
- **Defer:** iterators/generators protocol, writing decorators, file handling beyond basics, metaclasses, async internals.
- **Learners proficient in another suitable language** may take the checkpoint in that language and skip the unit; they use Python only where the instructional stack requires it (unit 7).

### Unit 2 — Data Structures, Algorithms & Complexity

- **Purpose:** pass coding screens, online assessments and Big Tech coding rounds.
- **Evidence:** R5 §5.3–5.4, §6 (well supported); R1 §5; R2 §7; R3 C1/C5/C8.
- **Roles / priority:** E for G, BT, EN, BE; W for SU, FS. **Depth:** Apply (BT); Implement (others).
- **Essential concepts:** complexity (time/space, worst case, amortised); arrays and strings with two pointers and sliding window; hash maps and sets; stacks and queues; linked lists; binary search; recursion and backtracking; trees and BSTs; heaps; graphs (BFS, DFS, topological sort); intervals and sorting-based patterns; basic dynamic programming. BT only: union-find, Dijkstra at Implement.
- **Prerequisites:** unit 1 checkpoint.
- **Questions:** "BFS vs DFS — when?" "Worst case of your hash map solution?" "How would you detect a cycle?"
- **Exercises:** per pattern: learn → solve 3–5 problems → revisit one week later without notes; every solution includes clarifying questions, brute force, optimisation, complexity and a dry run.
- **Interview relevance:** highest-supported technical format.
- **Readiness checkpoint (skip if you can):** solve two of three unseen Medium problems in 45 minutes each, AI-free, explaining complexity (BT); or two of three unseen Easy/Medium problems in 45 minutes (other paths).
- **Stopping point:** checkpoint met consistently over two weeks → stop adding volume; maintain with spaced review.
- **Defer:** segment trees, network flow, advanced string algorithms, competitive-programming tricks.

### Unit 3 — Object-Oriented Programming & Design

- **Purpose:** write maintainable code and pass OOD/LLD rounds (strongest at Amazon).
- **Evidence:** R5 §5.5; R2 A1/A9; R1 S15.
- **Roles / priority:** E for G, BT, BE; W for SU, EN, FS. **Depth:** Implement.
- **Essential concepts:** classes and objects; encapsulation; composition vs inheritance; interfaces / abstract base classes; separation of concerns; small API design; adapting to changing requirements; SOLID at Recognize.
- **Prerequisites:** unit 1.
- **Questions:** "Design a parking lot." "Why composition here?" "How does this change if a new type is added?"
- **Exercises:** three 45-minute LLD problems with two requirement changes each; refactor a procedural script into classes.
- **Interview relevance:** moderate overall; high for Amazon.
- **Readiness checkpoint:** design and code a small system in 45 minutes and adapt it to two requirement changes.
- **Stopping point:** checkpoint met.
- **Defer:** design-pattern catalogs, UML, advanced SOLID.

### Unit 4 — Engineering Fundamentals

- **Purpose:** the shared vocabulary and tools needed for jobs, practical rounds and concept questions.
- **Evidence:** R5 §5.6–5.9, §5.14; R2 A1/AP1; R3 §8; R4 §3.3.
- **Roles / priority:** E for SU, EN, BE, FS (Git E everywhere); W for BT. **Depth:** Implement (Git, terminal); Explain (others).
- **Essential concepts:** Git branches, pull requests, conflicts, code review etiquette; terminal and virtual environments; how the internet and HTTP work (DNS, TCP/IP at a high level, methods, status codes, headers); relational vs non-relational databases, tables/keys/joins at concept level; processes, threads, memory and concurrency basics; security basics (injection, authentication vs authorization, secrets).
- **Prerequisites:** unit 1.
- **Questions:** "What happens when you load a URL?" "Process vs thread?" "Inner vs left join?" "How does SQL injection happen?"
- **Exercises:** complete a feature via PR and resolve a conflict; write a one-page explanation of a request's journey; answer 15 concept questions closed-book.
- **Interview relevance:** concept questions (Amazon, Apple), practical rounds; low as a standalone format.
- **Readiness checkpoint:** PR workflow demonstrated; 15 concept questions answered accurately without notes.
- **Stopping point:** checkpoint met; deeper SQL and HTTP move to unit 7.
- **Defer:** OS internals, networking protocols beyond HTTP basics, Git internals, cloud networking.

### Unit 5 — Practical Software Engineering

- **Purpose:** demonstrate the work-sample skills assessed outside Big Tech and increasingly within it, and required on every job.
- **Evidence:** R5 §5.12–5.13, §5.17; R3 §6, §8; R2 M1/A6; R4 O1.
- **Roles / priority:** E on all paths. **Depth:** Implement.
- **Essential concepts:** unit and integration testing; test-first bug fixes; debugging with tracebacks, logs and a debugger; navigating and tracing an unfamiliar codebase; scoped changes with regression tests; reviewing a pull request; **AI-free mode** and **AI-assisted mode** (decompose, instruct, review every change, test before trusting, detect hallucinated APIs, correctness before optimisation, explain the result).
- **Prerequisites:** unit 1; unit 4 Git basics.
- **Questions:** "How do you know your change didn't break anything?" "How do you verify AI-generated code?" "What do you do when the AI is wrong?"
- **Exercises:** Assignment A2 drills (§8), alternating modes; a verification log for every AI-assisted drill.
- **Interview relevance:** debugging and AI-assisted formats are well supported; code review weak at entry level. **AI-assisted engineering is recommended professional preparation; its interview relevance depends on employer and format.**
- **Readiness checkpoint:** fix two of three seeded bugs in a ~1,000-line unfamiliar repo in 45 minutes; add a tested feature in 45 minutes once AI-free and once AI-assisted, catching at least one incorrect AI suggestion.
- **Stopping point:** checkpoint met on two different repositories; continue drills weekly as maintenance.
- **Defer:** property-based and mutation testing, test infrastructure, LLM product development.

### Unit 6 — Build and Deploy One Project

- **Purpose:** evidence for screening, project deep dives, take-home defences and on-the-job readiness.
- **Evidence:** R5 §5.15–5.16, §5.20, §10; R3 O1; R4 §3.2.
- **Roles / priority:** E for G, SU, BE, FS; W for BT, EN. **Depth:** Implement (build, deploy); Explain (architecture and scaling).
- **Essential concepts:** scoping a small real domain; layered structure; tests; CI; configuration and secrets; one deployment; README with architecture and trade-offs; explaining how it would change at 10×–100× users (entry-level system design).
- **Prerequisites:** units 1, 4, 5; unit 7 (backend) or 8 (full-stack) in parallel.
- **Questions:** "Why this architecture?" "Hardest bug?" "What changes with 100× users?" "How did you use and verify AI?"
- **Exercises:** Assignment A1 (§8).
- **Interview relevance:** project deep dives (moderate; high at startups); basic system design (conditional).
- **Readiness checkpoint:** deployed, tested, documented application; 20-minute walkthrough answering 10 deep-dive questions without notes.
- **Stopping point:** checkpoint met. Additional projects only to close a demonstrated gap.
- **Defer:** Kubernetes, IaC, microservices, multi-region design.

### Unit 7 — Backend Engineering

- **Purpose:** backend job readiness and backend practical/take-home rounds.
- **Evidence:** R5 §5.8–5.10, §5.14; R4 §4, §7, §9.
- **Roles / priority:** E for BE, FS; W for SU, EN; C for G, BT. **Depth:** Implement (job); Explain (interview concepts).
- **Essential concepts:** REST resource design and implementation; request/response lifecycle; validation and consistent errors; SQL (CRUD, joins, grouping, aggregation, indexes) and data modelling; one ORM at Recognize–Implement; authentication and authorization (sessions/tokens, OAuth/JWT at Explain); security in practice (parameterised queries, password hashing, secrets); structured logging; async endpoints at Explain; deployment with a managed database.
- **Prerequisites:** units 1, 4; unit 5 testing.
- **Questions:** "Where does validation belong?" "How does your API stop users accessing others' data?" "What does an index cost?"
- **Exercises:** backend version of A1; SQL query set against a provided schema; A3 take-home simulation.
- **Interview relevance:** practical and integration rounds (moderate); SQL as a US interview format weak.
- **Readiness checkpoint:** R5 §11.4 (REST resource in ~60 min AI-free; 10 SQL queries; schema design; lifecycle explanation; five security flaws; deployment walkthrough).
- **Stopping point:** checkpoint met.
- **Defer:** microservices, message queues, caching strategies beyond basics, database tuning, a second backend framework.

### Unit 8 — Full-Stack Engineering

- **Purpose:** full-stack job readiness and frontend practical rounds.
- **Evidence:** R5 §5.11; R4 §5, §7 F1–F12.
- **Roles / priority:** E for FS; C for others; D for BE. **Depth:** Implement.
- **Essential concepts:** TypeScript essentials; semantic HTML and CSS layout; DOM and events at Explain; React components, props, state and effects; forms and validation; API integration with loading and error states; accessibility basics; one component-testing tool; browser dev tools; deploying frontend with the API.
- **Prerequisites:** unit 7 (or an existing backend), unit 5.
- **Questions:** "Props vs state?" "How does the UI handle a failed request?" "How do you make a form accessible?"
- **Exercises:** full-stack version of A1; React debugging drill in an unfamiliar repo.
- **Interview relevance:** debugging in React/TypeScript codebases; take-homes.
- **Readiness checkpoint:** R5 §11.5.
- **Stopping point:** checkpoint met.
- **Defer:** a second framework, advanced state libraries, SSR internals, animation, design systems.

### Unit 9 — Interview Preparation

- **Purpose:** route learners to the format and path guides relevant to their targets.
- **Evidence:** R5 §6–7.
- **Roles / priority:** E. **Depth:** varies by format.
- **Content:** points to the Interview Preparation section (existing `sectionHref` mechanism) and lists the format guides in priority order (§7).
- **Readiness checkpoint:** the chosen path's stopping point (§9).

### Unit 10 — Getting Hired

- **Purpose:** eligibility evidence, applications, postings literacy and offers.
- **Content:** points to the Getting Hired section (existing).

---

## 7. Interview preparation integration

### 7.1 Format guides and priority (from R5 §6 evidence strength)

| Format guide | Evidence strength | Default priority | Shared material referenced | Starts in |
|---|---|---|---|---|
| Coding & Algorithms (published; revise) | Well supported | E | Unit 2 topics | Unit 2 |
| Behavioral Interviews (canonical) | Well supported | E | Story bank method | Unit 1 (weekly) |
| Debugging & Code Review | Well supported outside BT | E | Unit 5 | Unit 5 |
| AI-Assisted Coding | Well supported, employer-specific | E (as preparation) | Unit 5 AI modes | Unit 5 |
| Practical Coding Assessments | Moderate | E for SU/EN; W for BT | Units 5, 7 | Unit 5 |
| OOP & Low-Level Design | Moderate (high at Amazon) | E for BT/BE; W otherwise | Unit 3 | Unit 3 |
| Project Deep Dives | Moderate | E for SU/BE/FS | Unit 6 | Unit 6 |
| Take-Home Assignments | Moderate, startup-specific | C (E for SU) | A3 | Unit 6 |
| Basic System Design | Weak, conflicting | C | Unit 6 architecture | Unit 6 |
| SQL & Database Assessments | Weak in US | C | Units 4, 7 | Unit 7 |
| Rapid-Fire Technical Questions | Weak, employer-specific | C | Units 1, 4 | Unit 1 |

Each guide states that **not every candidate receives every format**, lists which employers were observed using it, and labels official versus candidate-reported evidence.

### 7.2 Integration from the beginning

- Unit 1: rapid-fire question practice on the language; first two behavioral stories.
- Unit 2: every problem practised in interview mode (clarify, brute force, optimise, complexity, dry run); weekly timed problem.
- Unit 3: LLD practised in interview mode.
- Unit 5: debugging and AI-assisted drills timed as interview rounds.
- Unit 6: project walkthrough rehearsed as a deep dive.
- Path guides: mock interviews and employer add-ons at the end.

### 7.3 No duplication

Company guides list shared topics with a priority (`studyTopics`) and add only employer-specific formats, policies and add-ons. Getting Hired entries for behavioral and project interviews link to the Interview Preparation guides (CLAUDE.md rule 9).

---

## 8. Practical engineering assignments

Represented as Library topics in a "Practical Engineering" category, linked from units 5–8.

**A1 — Deployed project (one).**
- Backend: REST API + PostgreSQL; CRUD plus one non-trivial query; validation and errors; authentication and authorization; unit and API tests; structured logging; CI; deployed; README with architecture, trade-offs and scaling notes; short "how AI was used and verified" section.
- Full-stack: adds TypeScript/React UI with forms, validation, loading/error states, accessibility basics, component tests.
- **Real users optional.** Must be explainable and modifiable without AI.

**A2 — Existing-codebase drills (repeatable).**
- A2a **no AI:** seeded bugs + small tested feature, 45–60 minutes.
- A2b **AI-assisted:** same task type with an AI agent and a verification log.
- A2c **review:** review a PR or AI-generated change.

**A3 — Take-home simulation (repeatable).**
- 3–4 hours: consume an external REST API, transform and store data, expose an endpoint (and a screen for FS), tests and README; then a 30–45 minute defence.

**Additional projects:** only for a demonstrated gap (e.g. extend A1 with a frontend for a backend learner switching to full-stack, rather than starting a new project).

**Instructional stack:** Python / FastAPI / PostgreSQL; TypeScript / React for full-stack. A vehicle for transferable concepts, not an employer requirement (FastAPI named in 1 of 28 R4 postings). Learners proficient in another suitable stack may use it. No competing frameworks.

---

## 9. Readiness checkpoints and stopping points

**Readiness-first navigation:** each unit opens with its checkpoint as a "Can you already do this?" checklist; learners who can demonstrate it skip to the next unit or their path guide.

| Path | Apply when (all editorial benchmarks; R5 §11) |
|---|---|
| General SWE | Units 1–3 checkpoints; unit 5 checkpoint; unit 6 walkthrough; R5 §11.6 behavioral |
| Big Tech | R5 §11.2 + §11.6 + company add-on; project at walkthrough level |
| Startup & growth | R5 §11.3 + unit 6 deployed + §11.6 (+ basic system design for AI companies) |
| Enterprise programs | Units 1–3 at Implement; unit 5; §11.6; enterprise add-on |
| Backend | R5 §11.4 + §11.3 items 1–3 + §11.6 + company add-on |
| Full-stack | Backend criteria + R5 §11.5 |

**Stopping rule for every path:** once criteria are met, apply; continue remaining units alongside applications only if they serve the target roles. Full apprenticeship completion is not required.

---

## 10. Explicit deferred-topic list

Defer until needed (conditions from R5 §12): advanced Python (iterator protocol, writing decorators, metaclasses, async internals); file handling beyond basics; full system design; Kubernetes, Terraform/IaC; microservices, message queues, event-driven systems; advanced database optimisation, sharding, replication; design-pattern catalogs and advanced SOLID; OS internals and networking depth; second frontend or backend framework; GraphQL and gRPC; cloud certifications; rare algorithms; ML/LLM building, evals, fine-tuning; business case frameworks (Capital One-style programs only); clearance-related knowledge (defence employers only). Deferred material may be published later as optional Library reference without appearing in Apprenticeship units.

---

## 11. Mapping of the existing 18 phases

| # | Existing phase | Disposition | New location |
|---|---|---|---|
| 1 | Programming Mastery | Replaced (trimmed) | Unit 1 Programming Fluency |
| 2 | Object-Oriented Programming | Merged | Unit 3 |
| 3 | Data Structures & Algorithms | Kept (expanded with complexity) | Unit 2 |
| 4 | Computer Science Fundamentals | Reduced to Explain-level essentials | Unit 4; rest → Library (deferred) |
| 5 | Developer Tools | Merged | Unit 4 (Git, terminal) |
| 6 | SQL & Databases | Split | Unit 4 (concepts) + Unit 7 (implementation) |
| 7 | Networking & Internet | Split | Unit 4 (concepts) + Unit 7 (HTTP/REST) |
| 8 | Backend Engineering | Kept as a track | Unit 7 |
| 9 | Frontend Engineering | Reframed as full-stack track | Unit 8 |
| 10 | Testing & Software Quality | Merged | Unit 5 (and integrated in all units) |
| 11 | Software Design | Merged, reduced | Unit 3 (SOLID at Recognize) |
| 12 | Cloud & DevOps | Reduced to one deployment + CI | Units 6–7; rest → deferred |
| 13 | System Design | Reduced to entry-level | Unit 6 explanation + conditional format guide |
| 14 | AI-Assisted Engineering | Moved earlier, two modes | Unit 5 + AI-Assisted Coding guide |
| 15 | Practical Engineering Projects | Consolidated to one project + drills | Unit 6 + A1–A3 |
| 16 | Technical Interviews | Replaced by section pointer | Unit 9 → Interview Preparation |
| 17 | Behavioral Interviews | Replaced by section pointer | Unit 9 → canonical Behavioral guide |
| 18 | Getting Hired | Kept (pointer) | Unit 10 |

---

## 12. Mapping of existing Python topics (24)

| Category | Topics | Count |
|---|---|---|
| **Required early (fluency gate)** | Variables and Data Types ✔, Operators and Expressions ✔, Strings ✔, Conditional Statements ✔, Loops ✔, Functions and Arguments ✔, Lists, Sets, Dictionaries ✔, Mutability References and Copying, Sorting and Custom Sort Keys, Python Debugging | 12 (6 published) |
| **Reinforced through later assignments** | Scope ✔ (functions, project), Tuples (DSA), Built-in Functions (DSA), Comprehensions (project), Standard Library Essentials — `collections`, `heapq`, `bisect` (taught inside unit 2), Integrated Programming Exercises (becomes the unit 1 checkpoint rather than a topic) | 6 (1 published) |
| **Role-specific preparation** | Exception Handling (backend/full-stack), Modules and Packages (project structure), Type Hints (FastAPI backend) | 3 |
| **Optional reference** | File Handling, Iterators and Generators, Decorators | 3 |
| **Total** | | **24** (8 published ✔) |

All eight published topics are preserved and keep their slugs. They need two content updates in the first batch: phase reference (if the phase slug changes, §15) and depth text ("Master" → "Apply"; Scope's "Implement" definition updated to the CLAUDE.md wording).

---

## 13. Knowledge Library organization

Categories (the existing `category` string field; no schema change):

| Category | Contents |
|---|---|
| Python | Fluency, reinforcement, role-specific and optional Python topics |
| Data Structures & Algorithms | Complexity and pattern topics; advanced algorithms as optional |
| Software Design | OOP, composition, LLD practice, design principles |
| Engineering Fundamentals | Git and PRs, terminal, internet and HTTP, database concepts, CS fundamentals, security |
| Practical Engineering | Testing, debugging, codebase reading, code review, AI-assisted engineering, A1–A3 |
| Backend | REST, SQL in practice, data modelling, validation, auth, logging, deployment |
| Frontend | TypeScript, HTML/CSS, React, forms and UI states, frontend testing, accessibility |
| Advanced (optional) | Deferred topics when eventually published (Kubernetes, system design depth, advanced Python) |

Library search already covers titles, categories, phase titles and keywords. Optional topics appear in the Library but not in Apprenticeship unit lists.

---

## 14. Existing architecture assessment

Inspected: `content/types.ts`, `content/curriculum.ts`, `content/topics.ts`, `content/interview-guides.ts`, `content/career-guides.ts`, and the templates under `app/`.

| Requirement | Existing support | Gap? |
|---|---|---|
| 10 units in three stages | `Phase` with `stage` union (`Foundations`, `Applied Engineering`, `Employment Preparation`) | No — stage names fit |
| Unit description, objectives, ordered topics, completion criteria | `description`, `objectives`, `topics`, `mastery` (rendered "Phase mastery criteria") | No |
| Units that point to another section | `sectionHref` (rendered when a unit has no topics) | No |
| Optional topics outside a unit | Publish in Library without listing in `topics` | No |
| Published vs planned topics | `PhaseTopic = { slug } \| { planned }` | No |
| Targeted paths with priorities, sequence, add-ons, stopping point | `InterviewGuide`: `category` Company/Role, `studyTopics` with Essential/Important/Optional priority and topic links, `sequence`, `practice`, `readiness`, `competencies`, `process` | No |
| Format guides | `InterviewGuide` category "Interview type" | No |
| Assignments | `Topic` (exercises, mastery, objectives) in "Practical Engineering" category | No (resources may be empty arrays) |
| Library categories | `Topic.category` string | No |
| Getting Hired references to canonical guides | `CareerGuide.relatedTopics` links topics only; landing listings are text | Minor: link to a guide via prose for now |
| **Readiness checklist at the top of each unit** | `objectives` renders first but is titled "Learning objectives"; `mastery` renders last | **Yes** |
| Per-path priority inside an Apprenticeship unit | Not supported in `PhaseTopic` | Not needed: priorities live in path guides; units list only essential topics |
| Depth text "Apply" | Free-text `depth` field | No schema gap; seven published topics need text updates (six read "Master"; Scope uses the old "Implement" definition) |

---

## 15. Proposed minimal structural changes

### 15.1 Readiness checklist on Apprenticeship units (recommended)

- **Exact limitation:** the unit page has no section that appears before the topic list and is labelled as a skip-ahead checklist. `objectives` is labelled "Learning objectives"; `mastery` renders at the end.
- **Smallest change:** add an optional `readiness?: string[]` field to `Phase` in `content/types.ts`, and render it in `app/apprenticeship/[phase]/page.tsx` as the first section ("Can you already do this?" with one sentence inviting learners to skip ahead), only when present.
- **Why existing structures are insufficient:** reusing `objectives` would mislabel the checklist; using `mastery` puts it at the end, defeating readiness-first navigation.
- **Files affected:** `content/types.ts`, `app/apprenticeship/[phase]/page.tsx`; content in `content/curriculum.ts` when units are written.
- **Migration:** none; the field is optional. Existing phases render unchanged.
- **Routes and content:** unchanged.
- **Simpler alternatives considered:** (a) write the checklist into `description` as a sentence — works with no code change but is less scannable; (b) relabel `objectives` globally — changes meaning for every unit. **Fallback:** if the change is not approved, use (a).

### 15.2 Phase slug changes (content migration, no schema change)

- New units replace several phase slugs (e.g. `programming-mastery` → `programming-fluency`, new `engineering-fundamentals`, `practical-software-engineering`). Changing slugs alters `/apprenticeship/<slug>` URLs and requires updating `phase` in the eight published topic files; build-time validation catches any missed reference.
- **Alternative:** keep existing slugs where a unit replaces one phase (e.g. keep `programming-mastery` with the title "Programming Fluency") to avoid touching topic files. Recommendation: rename now, while the site is unpublished and no external links exist. **Decision required.**

### 15.3 No other structural changes

Paths, format guides, assignments, Library categories and priorities all fit existing types. Interview-guide listings (`content/interview-guides.ts`) and career-guide listings need content edits only (renaming "Technical Knowledge", adding new format entries, pointing behavioral/project entries to Interview Preparation).

---

## 16. Prioritized content publication plan

Each batch requires an approved specification; resources verified per CLAUDE.md (accessibility vs relevance, no fabricated dates).

| Batch | Content | Why first |
|---|---|---|
| **S0 Structure** (needs approval) | Rewrite `curriculum.ts` to the 10 units with readiness checklists (or fallback); slug decision; depth-text migration in published topics; interview-guide and career-guide listing updates | Enables everything else; no new topics |
| **C1 Fluency gate** | Lists, Sets, Mutability, Sorting, Python Debugging (+ revise Dictionaries if needed); unit 1 checkpoint. Reuse `research/m7.1b-resource-notes.md` (corrected Think Python chapters, time-complexity docs) | Completes the gate; 6 of 12 already published |
| **C2 DSA core** | Complexity; arrays/strings patterns; hash maps & sets; stacks/queues; linked lists; binary search; recursion/backtracking; trees; heaps; graphs; intervals; DP basics | Most-supported interview format |
| **C3 Core interview guides** | Revise Coding & Algorithms; Behavioral (canonical); Debugging & Code Review; AI-Assisted Coding; OOP & LLD | Integrates interview prep early |
| **C4 Practical engineering** | Testing; debugging unfamiliar code; codebase drills A2; code review; AI two modes; Git & PRs | Work-sample skills across paths |
| **C5 Backend track + A1/A3** | HTTP/REST; SQL in practice; data modelling; validation; auth; security; logging; deployment; project and take-home specs | Backend/full-stack and startup readiness |
| **C6 Path guides** | Role: Software Engineer, Backend; Company: Google, Amazon, Startups, Enterprise | Converts foundation into targeted plans |
| **C7 Full-stack + remaining paths** | TypeScript, HTML/CSS, React, UI states, frontend testing; Meta, Microsoft, Apple, Full-Stack guides; Getting Hired posting-literacy guide | Smaller audience; depends on C5 |
| **C8 Conditional formats and references** | Basic System Design; SQL Assessments; Rapid-Fire Questions; Take-Home and Practical Assessment guides; optional Python topics; engineering-fundamentals concept topics as needed | Weakly supported or optional |

---

## 17. Research limitations and unresolved decisions

### Limitations (carried from R1–R5)

- Evidence is a one-day snapshot (2026-11-25) during fall hiring season; candidate evidence relies heavily on one aggregator; several employers lack current entry-level postings or new-grad candidate reports.
- Interview format prevalence is unknown; priorities reflect evidence presence and strength, not frequency.
- System design and SQL interview relevance at entry level remain uncertain; Meta AI-native applicability to new grads is unconfirmed.
- Readiness benchmarks are editorial and untested against outcomes.

### Decisions required from the product owner

1. Approve the 10-unit structure and stage placement (§2.1).
2. Approve the `Phase.readiness` field (§15.1) or the description-text fallback.
3. Phase slugs: rename now or keep existing (§15.2).
4. Confirm targeted paths as Interview Preparation guides (company + role) rather than Apprenticeship phases.
5. Confirm Netflix, AI Engineer, Solutions Engineer and Forward Deployed Engineer remain planned and out of scope.
6. Confirm the instructional stack (Python/FastAPI/PostgreSQL + TypeScript/React) and the equivalence rule.
7. Confirm assignments A1–A3 as Library topics in a "Practical Engineering" category.
8. Approve batch order (§16) and the first batch specification (S0).

---

## Appendix — Learner-facing examples

### Example 1: Google L3 (entry-level) path

> **Goal:** pass Google's entry-level software engineering interviews.
>
> 1. **Check your fluency.** Can you solve 10 easy problems without notes in under 20 minutes each? If yes, skip Programming Fluency.
> 2. **Make Data Structures, Algorithms & Complexity your main focus.** Practise every problem the way Google interviews run it: clarify, brute force, optimise, explain complexity, dry-run — **without AI and without running the code**.
> 3. **Start your story bank now.** Write one behavioral story a week (Situation, Task, Action, Result, with numbers).
> 4. **Add one OOP & Design exercise** once core patterns are solid.
> 5. **Keep debugging habits sharp** with a short codebase drill each week (no AI).
> 6. **Have one project you can explain end to end.** It does not need to be deployed for Google, but you should be able to discuss its design and trade-offs.
> 7. **Do two mock interviews** with another person.
>
> **Apply when** you solve two of three unseen Medium problems in 45 minutes each without AI or a compiler, explain complexity, and can tell 8–10 strong stories. You do not need SQL depth, deployment skills, frameworks or system design beyond the basics for this path.

### Example 2: Junior backend engineer path

> **Goal:** get a junior backend role at a startup, scaleup or enterprise.
>
> 1. **Check your fluency** (or skip if you already code comfortably in a suitable language).
> 2. **Learn the core DSA patterns** to the point of solving Easy–Medium problems in 45 minutes — enough for online assessments and screens.
> 3. **Engineering Fundamentals:** Git and pull requests, how HTTP works, database concepts, security basics.
> 4. **Practical Software Engineering:** fix bugs and add features in unfamiliar code — once on your own, once with an AI assistant while checking everything it writes.
> 5. **Backend Engineering + your project:** build and deploy one REST API with PostgreSQL, authentication, tests, logging and CI. Real users are a bonus, not a requirement.
> 6. **Practise a 4-hour take-home** and explain your decisions afterwards.
> 7. **Prepare interview formats** for your targets: coding, practical/debugging rounds, project deep dive, behavioral; SQL questions if your target companies use them.
>
> **Apply when** you can build a tested REST resource in about an hour without AI, write SQL with joins and aggregation, explain how a request flows through your app, demo your deployed project, and handle behavioral questions with follow-ups. Kubernetes, microservices and a second framework can wait until a role requires them.
