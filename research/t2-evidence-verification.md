# T2 Focused evidence verification

Recorded 2026-11-25. Focused verification of the gaps listed in the target-driven audit and the evidence register. It reuses R1–R6 and S1–S3 and does not repeat broad research. The app does not read this file.

**Labels:** **[O]** official employer page or posting · **[OG]** official preparation guidance · **[C]** candidate report · **[T]** third-party · **[Ed]** editorial recommendation. "New" marks evidence first gathered in T2; everything else is cited from earlier research.

**Method limits:**
- Glassdoor, Blind and Reddit cannot be read directly. Candidate evidence marked "(search summary)" comes from search-result summaries of anonymous reports, not the reports themselves. It is the weakest evidence here and only suggests what might be present.
- Apple and Meta job searches were read in a browser.
- Netflix postings were read through its public careers API.

**Priority legend:** E Essential · I Important · O Optional or conditional · D Defer. Depth: Rec / Exp / Imp / App.

---

## 1. Company preparation requirements

### Amazon (SDE I, new grad) — evidence: moderate to strong official, weak candidate

**Eligibility**
- **[O, R2 A6]** 10 US early-career SDE postings:
  - a current or completed CS-related degree in 9/10 (stricter than Google's "or equivalent");
  - one general-purpose language;
  - data structures, algorithms and/or object-oriented design (OOD);
  - experience with AI-assisted development tools as a basic qualification in 5/10.
- **[O]** Amazon has a separate Students & Graduates page.

**Formats**
- **Online assessment [O, re-checked]:** coding (about 70 minutes), a Workstyles assessment (about 15 minutes, based on the Leadership Principles), a Work Simulation (about 60 minutes) and a survey. Publicly accessible online resources such as language documentation are allowed during the coding part; logged-in or private sites are not.
- **Interview loop [OG, R2 A4]:** 4–6 interviews of 45–60 minutes, including a Bar Raiser. This guidance covers all roles, not just SDE.
- **Interview topics [OG, R2 A1]:**
  - syntactically correct code without an IDE;
  - scalable, robust, well-tested code;
  - data-structure internals and runtimes;
  - OOD with defended choices;
  - database concepts (relational vs non-relational);
  - basics of distributed computing, operating systems and how the internet works.
- **What candidates report [C, R2 A8–A9]:** Leadership Principle questions in most rounds; low-level and API design rounds (2 reports); questions about how the candidate checks AI output (2 reports).

**AI policy**
- The online assessment allows public resources [O].
- No public amazon.jobs page on interview AI use was found. Secondary reporting (Business Insider, February 2025, via ITPro) [T] says candidates are told not to use generative AI in interviews unless explicitly permitted.
- **Recommendation:** practise interviews without AI and confirm with the recruiter.

**Behavioral**
- **[OG]** STAR, the Leadership Principles, and "I" rather than "we".
- **[C]** Leadership Principle questions in most rounds.
- Not every round follows an identical format, so don't promise that.

**Priorities**

| Priority | Topics |
|---|---|
| E | Fluency (App, no IDE); core DSA and complexity (App); testing your own code (Imp); **OOD / low-level design (Imp; S4, not yet published)**; **Leadership Principle story bank with deep follow-ups (App)** |
| I | Online assessment practice, including the Work Simulation (Amazon publishes a practice test); CS fundamentals vocabulary (Exp; Unit 4, not yet published); database concepts (Exp); explaining how you check AI output (Exp) |
| O | System design (Rec–Exp; named generically, and explicit only at SDE II); union-find and shortest paths |
| D | Design-pattern catalogues; deep distributed systems |

**How it differs from Google:**
- object-oriented and low-level design move up to Essential;
- Leadership Principles run throughout behavioral, with follow-ups;
- a three-part online assessment, including a non-coding Work Simulation;
- CS-fundamentals vocabulary;
- a degree requirement in most postings.

DSA depth looks similar. No evidence says Amazon needs more or less DSA than Google.

### Meta (E3 / University Grad) — evidence: weak

**Eligibility [O, new]**
- On 2026-11-25 there was no generalist software engineering University Grad posting. The 14 "University Grad" results were ASIC, research and PhD roles.
- Requirements can't be verified from a current posting.

**Formats**
- **[O, R2 M1]:** recruiter call → initial screen → full loop, typically 2–3 months. "Many" interviews include a built-in AI assistant that candidates are expected to use; interviews assess problem solving, coding, debugging and collaboration.
- **[OG, 2022]:** a screen with two problems in about 35 minutes, no compiler; behavioral using STAR.
- **[T/C, new]:** an AI-enabled coding round was piloted from October 2025, reportedly replacing one onsite coding round for E6 and below. It isn't universal (sources disagree on whether it's a pilot), and one prep site says E3 loops have no design round.
- **[C, R2 M6]:** a late-2025 new-grad loop had several coding tasks plus behavioral, with no design round.

**AI policy**
- Officially, the AI assistant is used in "many" interviews.
- Whether new-grad loops include it is not confirmed. Prepare both ways and ask the recruiter.

**Priorities**

| Priority | Topics |
|---|---|
| E | Fluency (App); core DSA and complexity at speed (App: two problems per session); testing and debugging (Imp); behavioral |
| I | **AI-assisted coding:** reading, debugging and extending code with an AI assistant and checking its output (Imp; Unit 5, not yet published); practice without a compiler |
| O | Union-find and shortest paths; object-oriented design |
| D | System design (weak evidence of any design round at E3) |

**How it differs from Google:** a speed-oriented screen, a possible AI-assisted round that emphasizes debugging and building on existing code, and a debugging focus.

### Microsoft (entry SDE) — evidence: moderate official (generic), weak entry-level

**Eligibility**
- **[O, R2 MS4]** No US entry-level posting was found. The level above entry requires a degree plus 2 years "or equivalent experience".
- Not re-verified in T2: the old student URL now returns a 404 page.

**Formats [OG, re-checked]**
- 2–4 conversations of up to an hour; technical rounds of 45 minutes.
- Code in your strongest language, **no pseudocode**, using **a third-party tool where you can run and compile your code**.
- **Interviewers expect you to test your solution.**
- Data structures are listed.
- System design and distributed systems are described for all levels; there is no entry-level statement.

**Behavioral [OG, MS3]:** STAR(R) adds Reflection; culture attributes include growth mindset and collaboration.

**AI policy [O, re-checked]:** "without outside assistance unless explicitly permitted".

**Candidate [C, search summary, new]:** 2026 new-grad reports describe LeetCode-style coding (graphs, sliding window, LRU cache), teamwork behavioral questions, and some low-level design.

**Priorities**

| Priority | Topics |
|---|---|
| E | Fluency (App, in a runnable environment); core DSA and complexity (App); **explicit testing of your solution (Imp)**; behavioral with Reflection |
| I | Object-oriented design (Imp; S4); explaining your projects |
| O | System design (Rec; Microsoft's page is not level-specific) |
| D | Advanced graphs |

**How it differs from Google:** practise in a runnable tool and finish every solution with tests. Google's reports describe a document without a compiler.

### Apple (early career, team-based) — evidence: weak

**Eligibility [O, new]**
- 2026-11-25: only two US postings titled "Early Career" in engineering: Frontend Engineer (IS&T, Austin) and Network Engineer (IS&T, Austin).
- **[O, R2 AP1]** proficiency in one language area (server, web, iOS or scripting); "computer science fundamentals"; a bachelor's degree or equivalent.

**Formats**
- No official interview guidance was found [R2 AP3]. Hiring appears team-driven.
- **[C, R2 AP5]** one new-grad report: HR call, Java fundamentals questions, coding, and a long manager/behavioral round.
- **[C, AP6]** AI workflow questions or AI-permitted coding in some loops, mostly not new grad.

**Priorities**

| Priority | Topics |
|---|---|
| E | Fluency **in the team's language** (App); core DSA (Imp–App); behavioral and motivation |
| I | **Language fundamentals questions** (Exp: use the Rapid-Fire guide); OOD (Imp; S4); CS fundamentals (Exp; Unit 4) |
| O | AI-workflow discussion; system design (team-dependent) |
| D | — |

**How it differs:** team and language first, with conceptual language questions. **Don't present the manager round as universal**; it rests on one report.

### Netflix — evidence: insufficient for an interview path

**Eligibility [O, new; careers API, 2026-11-25]**
- 139 results for "software engineer".
- Level-labelled roles are mostly L5 (45) and L6 (18).
- L4 roles (17) ask for 3+ years, and the one "Software Engineer 3" asks for 3–5 years.
- **No full-time new-grad software engineering posting was open.**
- "Software Engineer Intern – Summer 2027" is for current Bachelor's or Master's students graduating December 2027 – Summer 2028, with coursework in data structures, algorithms and debugging.
- **[T]** One third-party guide says new-grad roles usually post in September–October and are few.

**Formats:** no official SWE interview guidance was found. **[C, search summary]** coding, some system design and resume discussion, mostly experienced hires.

**Behavioral [O]:** Netflix's culture page lists values such as judgment, candor, selflessness and creativity.

**Recommendation for T3:** a **qualified eligibility note**, not an interview path:
- full-time entry-level openings are rare and seasonal;
- the internship route is for current students;
- prepare with the Other Employer path plus behavioral answers based on the culture page.

---

## 2. Employer-category preparation requirements

| | Early-stage / YC | AI-focused startups | Growth-stage | Established tech | Enterprise & structured programs |
|---|---|---|---|---|---|
| **Examples** | Corelayer, Confido, Lamar Health, MSPilot, Sherpa (R3) | Decagon, Plaud, xAI, Sierra, Notion AI (R3) | Stripe, Notion, Scale AI, DoorDash (R3) | Pinterest, DoorDash, Roblox, Affirm, Walmart Global Tech | Capital One, JPMorganChase, Walmart Global Tech, Bank of America (R3) |
| **Variation** | Very high: take-home + work trial (Corelayer), screen + onsite (Confido), AI work sample (Lamar), show a deployed project (MSPilot). **No standard process** | Candidate reports show basic system design and AI coding in some new-grad loops | Integration tasks (Stripe), debugging existing code (Stripe, Notion, Scale AI), DSA screens still common (Stripe, Decagon) | Pinterest **[O, R4]**: AI allowed only in designated sections; DoorDash **[O]**: postings require SQL, version control and unit tests; Walmart **[C, search summary, new]**: third-party (Karat) screen with knowledge questions plus coding, then behavioral and resume rounds | Capital One **[O, re-checked]**: automated assessment → recruiter → Power Day (job-fit, behavioral, case where relevant); **[C]** agentic coding round since September 2026; JPMorganChase **[C]** recorded video interview |
| **E** | One shipped project (App); practical feature work and debugging (Imp); communication | Practical and debugging work (Imp); AI-assisted engineering *where stated* (Imp) | DSA (Imp); practical integration and debugging (Imp); HTTP and APIs (Imp) | DSA and complexity (Imp–App); testing (Imp); behavioral | Online-assessment DSA (Imp); behavioral |
| **I** | DSA (Imp); APIs (Imp); AI-assisted work (Imp); take-home (conditional) | DSA screens (Imp); basic system design (Exp) | AI-assisted rounds (conditional); take-home | Git and SQL as postings require; AI-designated rounds (conditional) | Reading business logic and debugging (Imp); conditional: case interview, recorded video, agentic coding task |
| **D** | Apply-depth DSA; advanced patterns | Advanced DSA | Big Tech DSA volume | System design | System design; advanced DSA |
| **Evidence** | Weak on interviews | Weak | Moderate (one aggregator) | Weak; mostly candidate | Moderate (dominated by Capital One) |

**Do not generalize:**
- Not every startup gives a take-home or an AI round.
- Not every enterprise uses an agentic round; that comes from Capital One candidate reports.
- Established-tech new-grad loops remain under-documented.

---

## 3. Role requirements

| | Interview competencies | Professional competencies |
|---|---|---|
| **General SWE** | Set by the target (sections 1–2) | Fluency, testing and debugging, Git/PRs, reading unfamiliar code, one project, OOP, AI verification, HTTP basics (role guide, T1) |
| **Backend** | Target's DSA, plus **API/integration tasks** at growth-stage companies and startups (Stripe, Scale AI; R3–R4). **Dedicated SQL rounds: no US new-grad evidence found** in R4 or in T2 searches (only Accenture India, a Klaviyo internship, Wise UK) → **conditional**: prepare when the posting stresses SQL or the recruiter confirms a round | **SQL (Imp: joins, aggregation, transactions, basic indexes) — Essential on the job** (15/28 postings); REST/HTTP (Imp); data modelling; API tests; authentication concepts; logging; secure coding basics |
| **Full-stack** | Target's DSA; **debugging an existing React/TypeScript app** (Notion [C]); take-homes and work trials at startups | JavaScript/TypeScript, React (Imp), HTML/CSS, API integration, forms and loading/error states, one deploy, accessibility basics (R4) |

---

## 4. Content mapping

| Recommendation | Existing content | Status |
|---|---|---|
| Fluency, DSA, complexity, problem solving, testing your own code | Units 1–2: 27 topics; Coding & Algorithms; Python Debugging | Published |
| Selected practice per target | Existing exercises in the topics (Foundation / Reinforcement / Transfer) | Published; choose per path in T3 |
| Behavioral, including Leadership Principles, STAR(R) and the Netflix culture page | Behavioral guide | Published; company-specific framing goes in each path's guidance, not a new topic |
| Language fundamentals questions (Apple) | Rapid-Fire guide plus Library questions | Published |
| Resume, posting analysis, applications, recovery | Getting Hired guides | Published |
| **OOD / low-level design** (Amazon E; Apple, Microsoft I) | — | **S4 (not yet published) — the most important gap for T3** |
| Git, tests, HTTP, SQL concepts, CS fundamentals (Amazon I; backend) | — | S5 |
| Reading and debugging unfamiliar code; AI-assisted engineering (Meta, startups, enterprise) | — | S6 |
| Project, take-home, project deep dive, basic system design | Engineering Projects guide (partial) | S7 |
| Backend (SQL in practice, APIs, authentication); full-stack (React/TypeScript) | — | S8, S9 |
| Amazon Work Simulation; enterprise case and video interviews | — | Path guidance in T3/T4 (no new topics) |

**No new standalone topics are recommended.** Every material gap maps to an already-planned milestone. Java- or Swift-specific content stays out of scope (Python instructional stack); Apple guidance only points learners to their team's language.

---

## 5. Target-specific readiness (all [Ed]; none are employer thresholds)

| Target | Readiness recommendation |
|---|---|
| Amazon | Unit 2 general benchmark at Medium difficulty; one practice online assessment including the Work Simulation; one timed low-level design problem defended against a requirement change; 8–10 STAR stories, each mapped to at least two Leadership Principles, holding up to two follow-ups |
| Meta | Two unseen Medium problems in one 45-minute session without running code; one AI-assisted session reading and debugging an unfamiliar multi-file project, verifying AI output; behavioral stories |
| Microsoft | Unseen Medium problems solved in a runnable environment, finishing each with explicit tests (boundaries, invalid input); STAR(R) stories with a reflection |
| Apple | Recruiter-confirmed team language; answer core concept questions in that language aloud; Easy-to-Medium coding; motivation and behavioral stories |
| Netflix | No interview benchmark; eligibility first; use the Other Employer path |
| Early-stage / YC | Deployed project you can demo; a scoped take-home with tests and README; fix a bug in an unfamiliar repository in about 45 minutes |
| Growth-stage | Integration task (consume an API, transform data) in about 60 minutes; debugging round practice; Easy-to-Medium DSA |
| Established tech | Unit 2 general benchmark; tests and Git workflow; behavioral |
| Enterprise / programs | Easy-to-Medium online-assessment benchmark; debugging or business-logic case practice; recorded-video and behavioral practice |

---

## 6. Gaps resolved and remaining

**Resolved, to the point of useful qualified recommendations:**
- **Netflix:** no full-time new-grad SWE posting open; only an intern route; senior-heavy level mix. Conclusion: an eligibility note, not an interview path.
- **Meta:** no current generalist posting confirmed; the AI-enabled round is reported as varying and not universal.
- **Microsoft:** official runnable-code, testing and AI rules re-checked.
- **Apple:** current early-career postings counted (two).
- **Amazon:** official online-assessment structure and tool rules re-checked; AI-in-interview rule found only in secondary reporting.
- **Backend:** no US evidence of dedicated new-grad SQL rounds; SQL is professional-Essential, interview-conditional.
- **Established tech:** a few more candidate signals (Walmart, DoorDash, Pinterest AI round).

**Still uncertain:**
- Meta and Microsoft entry-level loop content.
- Apple's variation between teams.
- Established-tech new-grad formats; anonymous summaries only.
- AI-focused startup processes; small sample.
- Amazon's official AI-in-interview wording.
- All postings are seasonal snapshots from 2026-11-25.

**Blockers:** none for T3. Company paths can link only published topics. **Amazon's Essential object-oriented and low-level design content is unpublished until S4**, so the Amazon path will carry a clearly marked gap.
