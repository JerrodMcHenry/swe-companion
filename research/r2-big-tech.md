# R2 — Big Tech entry-level software engineering: Amazon, Meta, Microsoft, Apple (with Google from R1)

Status: draft for product-owner review. Research date (all sources accessed): **2026-11-25**. Nothing in this report has been published to the application.

Evidence labels and reading rules are the same as R1:

- **[Official]** Published by the employer (careers sites, job postings, official blogs/videos).
- **[Candidate]** Candidate-reported experiences on third-party sites. Individual, unverified; aggregator pages may rewrite or combine reports.
- **[Third-party]** Unofficial data or guides (compensation aggregators, prep-company guides, job-board mirrors).
- **[Editorial]** Our recommendation, derived from the evidence. Not an employer requirement.
- "**Not observed**" means absent from the reviewed sources. It is not evidence that a topic is never assessed.
- Readiness criteria are **editorial benchmarks**, not employer hiring thresholds. No employer reviewed publishes pass thresholds.
- **US vs international**: US evidence is prioritized; non-US evidence is labelled.
- **Independence**: aggregated or rewritten candidate reports are labelled and not counted as independent confirmation of each other.

---

## 1. Research methodology

**Scope.** Entry-level / new-graduate software engineering at Amazon (SDE I), Meta (entry-level SWE), Microsoft (entry-level SWE) and Apple (early-career SWE). Google L3 findings are carried over from R1 for comparison. Mid-level material is used only to mark boundaries.

**Method.**

1. Read each employer's official hiring-process and interview-preparation pages.
2. Searched each employer's careers site for **currently open US entry-level software engineering postings** and extracted qualifications (Amazon via the amazon.jobs search API; Meta, Microsoft and Apple via their search pages in a browser).
3. Verified title and level conventions from postings, then compared them with a third-party level map.
4. Located recent (2025–2026) candidate reports via web search and read those accessible.
5. Rated each competency per employer, separating interview relevance from professional relevance.

**Access limitations.** LeetCode Discuss, Glassdoor, Blind, Reddit and some Medium posts were blocked (403 / bot protection). Meta's downloadable Full Loop Interview Guide PDF uses a signed link that could not be retrieved. Official employer videos (Amazon prep videos, Meta recruiter video) were not reviewed. Candidate evidence is therefore thin, mostly from one aggregator (FastPrep), and absent for Microsoft new-grad full-time loops.

---

## 2. Role titles and seniority mapping

Titles were verified from postings; internal level codes come from a third-party source and are **unofficial**.

| Employer | Entry-level title in official postings | Internal level (third-party, Levels.fyi, accessed 2026-11-25) | Notes |
|---|---|---|---|
| Google | Software Engineer II (e.g. "Software Engineer II, Early Career") | L3 | R1 |
| Amazon | "Software Development Engineer, Early Career – 2027 (US)"; "Software Development Engineer I" | L4 = SDE I | Amazon's entry level is **L4**, not L3. "SDE I" appears in some official titles |
| Meta | "Software Engineer (University Grad)" — **no such posting open on the access date** | E3 | Title known from third-party mirrors and an Aced crawl (Oct 2026); not verified on metacareers.com |
| Microsoft | "Software Engineer" (vs "Software Engineer II", "Senior") — **no US entry-level posting open on the access date** | 59–60 = "SDE" | A current "Software Engineer" posting found requires 2+ years (boundary, not entry) |
| Apple | Titles suffixed "Early Career" / "IS&T Early Career" | ICT2 = "Junior Software Engineer" | Few open; several earlier early-career postings had closed |

Implication: level numbers are not comparable across employers (Google L3 ≈ Amazon L4 ≈ Meta E3 ≈ Microsoft 59/60 ≈ Apple ICT2 by the third-party map). Comparisons in this report are by **entry-level role**, not by number.

---

## 3. Verified source inventory

All accessed 2026-11-25. Google sources S1–S20 are listed in R1 and referred to as R1-S#.

### Amazon

| # | Source | URL | Publisher | Pub. date | Role / seniority | Category | Findings | Limitations |
|---|---|---|---|---|---|---|---|---|
| A1 | Amazon Software Development Interview Topics | https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics | Amazon | Not stated | SDE (page refers candidates with 2+ years to the SDE II page, so it targets entry/general SDE) | Official | Topic list: programming language, data structures, algorithms, coding, object-oriented design, databases, distributed computing, operating systems, internet topics, general ML/AI. "Syntactically correct code—no pseudo code"; evaluated on "scalable, robust, and well-tested code"; check edge cases; practice outside an IDE; not memorization; most technical interviews include coding and system design whiteboarding | Generic across SDE interviews; does not state which topics apply to new grads specifically |
| A2 | Online assessment prep for SDE roles | https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa | Amazon | Not stated | University / recent-graduate SDE, full-time and internship | Official | OA is the first step. Full-time: coding assessment (~70 min, two problems), Workstyles assessment (Leadership Principles, ~15 min), Work Simulation (~60 min, SDE day-in-the-life scenarios with emails, code snippets, wikis), feedback survey. Publicly accessible online resources (e.g. language docs) allowed; browser usage logged; no copy-paste | OA content may vary by country ("one or two parts") |
| A3 | SDE II Interview Prep | https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep | Amazon | Not stated | SDE II (boundary) | Official | SDE II OA adds system design scenarios; loop expects at least one software systems design question | Mid-level; used only to mark what is *added* above entry level |
| A4 | Your complete guide to the Amazon interview process | https://www.aboutamazon.com/news/workplace/amazon-interview-guide | Amazon (About Amazon) | 2025-04-08 | All roles | Official | Phone screen 30–45 min; loop 4–6 interviews of 45–60 min incl. a Bar Raiser; technical roles spend ~half the loop on technical assessment; STAR method; "I" not "we"; metrics | Not SDE-specific |
| A5 | Leadership Principles | https://www.amazon.jobs/content/en/our-workplace/leadership-principles | Amazon | Not stated | All roles | Official | The principles used in behavioral evaluation and the Workstyles assessment | — |
| A6 | 10 US early-career SDE postings (Appendix A) | e.g. https://www.amazon.jobs/en/jobs/10583340 | Amazon | Posted Aug 25 – Nov 10, 2026 | Early career, US | Official — postings | Basic quals: one general-purpose language; "data structure implementation, basic algorithm development, and/or object-oriented design principles" (10/10); **"experience using AI-assisted development tools" (basic qualification in 5/10; preferred in 4 of the other 5)**; current or completed CS-related degree (9/10; one says "Bachelor's or equivalent"). Responsibilities (10583340): break down ambiguous problems, code reviews, documentation, **validate and verify AI-generated code**, CI/CD, **on-call**, monitoring and production troubleshooting | Snapshot; team variants (database, embedded, robotics, Annapurna systems) |
| A7 | Levels.fyi — Amazon Software Engineer | https://www.levels.fyi/companies/amazon/salaries/software-engineer | Levels.fyi | Updated 2026-11-24 | — | Third-party | SDE I = L4 (entry), SDE II = L5 | Unofficial |
| A8 | 2026 Amazon New Grad SDE I OA and Virtual Onsite | https://www.fastprep.io/experience/2026-amazon-new-grad-sde-i-oa-and-virtual-onsite-1-experience-4up84xayt9 | FastPrep (aggregator) | Report 2026-11-09; interviews Q4 2026 | SDE I new grad, referral | Candidate (rewritten by aggregator) | OA: one coding question + an "AI debugging" section. Onsite: four ~1-hour rounds; three with coding + LP questions, one all LP; **code could not be run**; one LP set about **checking AI output and handling AI errors**; graph (multi-source BFS), streak, word-composition (DP/trie) problems; not selected | Single report; rewritten |
| A9 | AWS New Grad SDE Interview Loops | https://www.fastprep.io/experience/aws-new-grad-sde-interview-loops-7bbqogzk9j | FastPrep (first-person post) | 2026-11-16 | AWS SDE new grad, bachelor's | Candidate | Four rounds: (1) 3 LP + **application design (LLD)** with evolving requirements; (2) 2 LP + merge k sorted arrays (heap) + complexity; (3) **Bar Raiser: three deep behavioral questions**; (4) hiring manager: **GenAI question** + **API design**. Candidate self-identified missing tests/edge cases as weaknesses; rejected | Single report; candidate's self-assessment |

Excluded: Aced "Amazon SDE-1 (2026)" page — its free preview contains repeated, templated non-SWE questions (same pattern observed in R1), so it is treated as unreliable. LeetCode Discuss reports (403) could not be verified.

### Meta

| # | Source | URL | Publisher | Pub. date | Role / seniority | Category | Findings | Limitations |
|---|---|---|---|---|---|---|---|---|
| M1 | Meta Hiring Process (incl. FAQ) | https://www.metacareers.com/hiring-process/ | Meta | Current (not dated) | All roles; SWE-specific FAQ | Official | Recruiter call → initial screening → full loop; typically 2–3 months. **"Many of Meta's interviews now include an AI assistant built into the interview environment. Candidates are expected to use this AI assistant"**; interviews evaluate problem-solving, coding, **debugging** and collaboration. AI assistant in CoderPad offers Claude, ChatGPT, Gemini and Meta models; design interviews in CoderPad with Mermaid; no outside AI tools. Prep advice: practise with AI coding tools; be comfortable **reading, debugging and building on existing code**. AI-native coding interview supports Python, Java, TypeScript, C++, C#, Kotlin, Swift, Rust, Go | Does not say which levels (incl. new grads) receive AI-native rounds ("many", "select roles") |
| M2 | Preparing for your software engineering interview at Meta | https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/ | Meta Careers blog | Updated 2022-10-06 (orig. 2016) | SWE, general | Official (older) | Screen: 45 min, two coding problems in ~35 min (algorithms, data structures, recursion, binary trees); practise without a compiler, in a plain editor; review lists, arrays, hash maps, stacks, queues, graphs, trees, heaps, sorting, searching, BFS/DFS, big-O. Full loop: coding (harder), design (systems or product, matched to background), behavioral (STAR; sample questions on proudest work, conflict, feedback, collaboration) | Pre-dates the AI-native format; general, not new-grad-specific |
| M3 | Preparing for Your Full Loop Interview | https://www.metacareers.com/swe-prep-onsite/ | Meta | Not stated | SWE | Official | Points to a downloadable Full Loop Interview Guide | PDF could not be retrieved |
| M4 | Meta job search (no entry-level SWE posting open) | https://www.metacareers.com/jobsearch/?q=university%20grad | Meta | Access date | — | Official (absence) | Only network-production and ASIC "University Grad" roles open; no "Software Engineer (University Grad)" | Seasonal; cannot extract current entry-level qualifications |
| M5 | Levels.fyi — Meta | https://www.levels.fyi/companies/facebook/salaries/software-engineer | Levels.fyi | Updated 2026-11-25 | — | Third-party | E3 = entry level | Unofficial |
| M6 | Meta Software Engineer Onsite Questions: 3 Experiences (report 02) | https://www.fastprep.io/experience/meta-software-engineer-onsite-questions-3-experiences-43fayxndgv | FastPrep (aggregator) | Report 2026-08-24; interviews Oct–Dec 2025 | New grad, full-time | Candidate (rewritten) | Six onsite coding tasks (circular linked list, course scheduling/BFS, palindrome with k deletions, word break, BST range queries with prefix sums, sparse vector dot product) with follow-ups, plus a behavioral conversation; **no design round mentioned**; passed | Single new-grad report; pre-dates wide AI-native rollout |
| M7 | 2026 Meta AI-Native Coding Interview: 3 Experiences | https://www.fastprep.io/experience/2026-meta-ai-native-coding-interview-experienced-swe-and-mle-onsite-3-experience-1av6vvamu0 | FastPrep (aggregator) | Reports Sep–Nov 2026 | **Experienced** (incl. E6) | Candidate (rewritten) — boundary | Non-AI coding phone screen, then two AI-native coding rounds (hard problems inside mostly written code, test suites incl. stress tests) plus system design and behavioral. One candidate failed by optimizing AI code that still had a bug; another passed by checking correctness first | Not entry level; shows what the AI-native format assesses |

Third-party guides surfaced in search disagree on whether E3 candidates receive the AI-native round (e.g. hellointerview.com, intervue.io); they are not used as evidence.

### Microsoft

| # | Source | URL | Publisher | Pub. date | Role / seniority | Category | Findings | Limitations |
|---|---|---|---|---|---|---|---|---|
| MS1 | How we hire | https://careers.microsoft.com/v2/global/en/hiring-tips.html | Microsoft | Current (not dated) | All roles | Official | "Most interviews include 2-4 conversations… each lasting up to an hour." AI: use responsibly for preparation; "during assessments and interviews, candidates should demonstrate their own skills without outside assistance unless explicitly permitted" | Generic |
| MS2 | Technical interviewing | https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing | Microsoft | Current (not dated) | Technical roles, all levels | Official | 45-minute rounds; clarify ambiguity and plan before implementing; code in your strongest language, **no pseudocode**; **third-party tool where you can run and compile code**; you will be expected to **test** your solution (boundaries, stress, security); know at least one, preferably two, n·log n sorts (quicksort, merge sort); recursion; big-O; data structures (arrays, strings, queues, lists, linked lists, trees/tries, hash maps/sets, graphs). "Depending on the role": system design / distributed systems, AI/ML, networking | Not level-specific; system design listed as role-dependent |
| MS3 | Interview tips | https://careers.microsoft.com/v2/global/en/hiring-tips/interview-tips.html | Microsoft | Current (not dated) | All roles, incl. a student/recent-graduate section | Official | Clarify and state assumptions; talk through approach; STAR(R) (Situation, Task, Action, Result, Reflection); culture attributes assessed: growth mindset, inclusion, One Microsoft (collaboration), customer obsession, values | — |
| MS4 | Microsoft job search — "Software Engineer" (job 200065329) | https://apply.careers.microsoft.com/careers | Microsoft | Posted 2026-11-04 | Requires 2+ years (boundary) | Official | No US entry-level SWE posting found on the access date; a "Software Engineer" posting required a bachelor's **and 2+ years** of coding experience, "OR equivalent experience" | Absence of current entry-level postings; seasonal |
| MS5 | Levels.fyi — Microsoft | https://www.levels.fyi/companies/microsoft/salaries/software-engineer | Levels.fyi | Updated 2026-11-24 | — | Third-party | 59–60 = "SDE" (entry), 61–62 = SDE II | Unofficial |
| MS6 | Microsoft SWE Intern, Mid 2025: 42 Experiences (Part 4) | https://www.fastprep.io/experience/2025-2026-microsoft-software-engineering-internship-oa-interviews-244-experience-1tmno4q08v | FastPrep (aggregator) | Reports Jul–Sep 2025 | **Internship** (adjacent) | Candidate (aggregated) | Resume/project deep dives 16/42; behavioral/motivation 14/42; arrays/hashing 11/42; strings 10/42; CS fundamentals (OS, OOP, DBMS, networks) 7/42; one US loop ended with a project presentation/demo | Internship, not full-time; 18 of 42 India; aggregated |

No accessible Microsoft **new-grad full-time** candidate report was found (LeetCode and Medium copies blocked).

### Apple

| # | Source | URL | Publisher | Pub. date | Role / seniority | Category | Findings | Limitations |
|---|---|---|---|---|---|---|---|---|
| AP1 | Frontend Engineer, EE&P – IS&T Early Career (role 200676168-0157) | https://jobs.apple.com/en-us/details/200676168-0157/frontend-engineer-ee-p-is-t-early-career | Apple | Posted 2026-08-10 | Early career, Austin TX | Official — posting | MQs: proficiency in one of server-side (Java/Python), web (JavaScript/HTML/CSS) or iOS (Objective-C/Swift), or a scripting language; **"Experience in Computer Science Fundamentals"**; bachelor's in CS/CE/Engineering **or equivalent experience**. PQs: AWS or GCP, internship/job experience, quantitative and interpersonal skills, leadership | One posting; IS&T organisation |
| AP2 | Closed early-career postings and third-party mirrors | e.g. https://jobs.apple.com/en-us/details/200612452/software-engineer-early-career (closed); https://www.themuse.com/jobs/apple/software-engineer-early-career-backenddata-803290 | Apple (closed); The Muse (mirror) | 2026 | Early career | Official (closed) / Third-party | Mirrors quote early-career requirements such as "strong object-oriented design skills, coupled with a deep knowledge of data structures and algorithms" and "less than 3 years of working experience" | Mirror wording not verified against live Apple postings |
| AP3 | Apple careers pages (work-at-apple, students) | https://www.apple.com/careers/us/students.html | Apple | Current | Students | Official (absence) | **No published interview-preparation guidance found** | Apple appears to leave preparation to recruiters and teams |
| AP4 | Levels.fyi — Apple | https://www.levels.fyi/companies/apple/salaries/software-engineer | Levels.fyi | Updated 2026-11-24 | — | Third-party | ICT2 = Junior Software Engineer (entry) | Unofficial |
| AP5 | 2026 Apple New Grad SWE: HR call, Java questions, coding and manager round | https://www.fastprep.io/experience/2026-apple-new-grad-swe-hr-call-java-questions-coding-and-manager-round-1-experi-52ej2p4ouy | FastPrep (aggregator) | Report 2026-11-03; interviews Q1 2026 | New grad (general SWE), master's | Candidate (rewritten) | HR call; **nine Java fundamentals questions** (polymorphism, abstract classes vs interfaces, overloading vs overriding, checked vs unchecked exceptions, String vs StringBuilder…); coding (reverse a linked list; hash map/array work); **1.5-hour behavioral manager round** (learning, failure, best project, improvement) | Single report |
| AP6 | Apple AI Coding and Related Interviews: 17 Experiences | https://www.fastprep.io/experience/2024-2026-apple-ai-coding-related-interviews-17-experiences-new-grad-first-2hegeoa82n | FastPrep (aggregator) | Interviews Q4 2024 – Q3 2026 | 3 new grad; rest interns, experienced, ML/iOS teams | Candidate (aggregated) | AI access during coding in 3/17; verbal AI-workflow questions (e.g. "How do you use AI to code?") in 9/17; modifying or debugging existing code 3/17; system/code design 7/17 (mostly non-new-grad); ML/GenAI tasks 9/17 (ML roles) | Mixed levels and teams; aggregated |

---

## 4. Employer-specific findings

### Google (from R1, summarized)

Official: structured rubrics, no brainteasers, AI and Search banned in interviews, STAR-style behavioral, coding/testing/data structures/graphs/recursion emphasized. Candidate-reported: 45-minute screen, 3–4 coding rounds (~LeetCode Medium), one behavioral round, sometimes coding without a compiler. US posting: bachelor's or equivalent, 1 year industry development, AI-productivity-tool experience.

### Amazon (SDE I)

- **Qualifications [Official, A6]:** one general-purpose language; data structures, basic algorithms and/or OOD principles; a current or completed CS-related degree (9/10; stricter than Google's "or equivalent"); AI-assisted development tools as a basic qualification in half the postings and preferred in most of the rest. Preferred: internships or projects, cloud (AWS), SQL and NoSQL, version control, debugging, SDLC basics, communication.
- **Professional expectations [Official, A6]:** code reviews, documentation, CI/CD, on-call and production troubleshooting from the entry level; explicit responsibility to **critically validate AI-generated code**.
- **Process [Official, A2, A4]:** OA (two coding problems ~70 min, Workstyles/LP assessment, ~60-minute Work Simulation), then a loop of 4–6 interviews of 45–60 min including a Bar Raiser.
- **Interview content [Official, A1]:** syntactically correct code without an IDE; evaluated on scalability, robustness and testing; data-structure internals and runtimes; algorithm trade-offs; **OOD with defended design choices**; broad familiarity with databases (relational vs non-relational), distributed computing basics, OS topics affecting performance, and internet fundamentals (DNS, TCP/IP, sockets).
- **Candidate-reported [A8, A9]:** coding plus LP questions in most rounds; one all-LP / Bar Raiser round with deep follow-ups; **LLD / application and API design** rounds for new grads; **questions about how the candidate verifies AI output**; an OA section on AI debugging; code that could not be run.
- **Behavioral:** Leadership Principles appear in the OA and essentially every interview — more pervasive than at any other employer reviewed.

### Meta (entry-level SWE)

- **Qualifications:** no entry-level SWE posting open on the access date [Official, M4]; requirements cannot be verified from a current official posting.
- **Process [Official, M1]:** recruiter call, initial screen, full loop; 2–3 months.
- **AI-native interviews [Official, M1]:** many technical interviews now include a built-in AI assistant that candidates are **expected to use**; skills assessed include problem-solving, coding, **debugging** and collaboration; preparation advice centres on reading, debugging and extending existing code. Whether new-grad loops include AI-native rounds is **not stated**.
- **Traditional content [Official (2022), M2]:** fast DSA coding (two problems in ~35 minutes), no compiler, big-O; full loop historically includes coding, design (systems or product, matched to background) and behavioral (STAR).
- **Candidate-reported [M6]:** a new-grad loop (late 2025) with six coding tasks with follow-ups and a behavioral conversation, no design round. Experienced-hire AI-native reports [M7] show the format tests verifying and debugging AI-written code before optimizing.

### Microsoft (entry-level SWE)

- **Qualifications:** no US entry-level posting open on the access date [Official, MS4]. The level above entry requires a bachelor's and 2+ years "OR equivalent experience".
- **Process [Official, MS1]:** typically 2–4 conversations of up to an hour; technical rounds 45 minutes [MS2].
- **Interview content [Official, MS2]:** clarify and plan first; **runnable code in a real tool**; no pseudocode; **explicit testing expectations** (boundaries, stress, security); sorting algorithms (n·log n), recursion, big-O, standard data structures. System design, distributed systems, networking and ML are "depending on the role".
- **Behavioral [Official, MS3]:** STAR(R) with a Reflection step; culture attributes (growth mindset, collaboration, customer obsession).
- **AI [Official, MS1]:** no outside assistance during interviews unless explicitly permitted.
- **Candidate-reported:** no new-grad full-time evidence accessible. Adjacent internship evidence [MS6] shows resume/project deep dives and behavioral questions as common as coding, plus some CS-fundamentals questions.

### Apple (early-career SWE)

- **Qualifications [Official, AP1]:** proficiency in one language area (server, web, iOS or scripting); **CS fundamentals**; bachelor's or equivalent experience. Mirrors of other early-career postings [Third-party, AP2] cite strong OOD and DSA.
- **Official interview guidance:** **none found** [AP3]. Process appears team-driven.
- **Candidate-reported [AP5, AP6]:** language-fundamentals questions (Java OOP, exceptions, strings) for a general new-grad role; DSA coding; a long behavioral manager round; AI-related questions or AI-permitted coding in some loops (mostly non-new-grad or ML teams).

---

## 5. Official interview guidance compared

| Topic | Google | Amazon | Meta | Microsoft | Apple |
|---|---|---|---|---|---|
| Published SWE prep guidance | Yes | Yes (detailed) | Yes (2022 blog + current FAQ) | Yes | **Not found** |
| Online assessment | Possible (R1-S1) | **Yes**: coding + Workstyles + Work Simulation (A2) | Not stated | Not stated on current pages | Not stated |
| Coding environment | Not specified officially | Practise without an IDE; no pseudocode (A1) | No compiler / plain editor historically (M2); CoderPad with built-in AI for AI-native rounds (M1) | **Runnable, compilable tool** (MS2) | — |
| Testing explicitly expected | Yes (videos) | Yes ("well-tested", edge cases) | "Find and fix bugs yourself" (M2) | **Yes, emphasized** | — |
| OOD / design named | System design (generic video) | **OOD** + system design whiteboarding (A1) | Design round, systems or product (M2) | System design "depending on role" | — |
| CS fundamentals named | Broad CS background (R1-S1 FAQ) | **DBs, distributed computing, OS, internet** (A1) | Not named | Networking/distributed "depending on role" | **MQ: CS fundamentals** (AP1) |
| Behavioral framework | STAR variant; data | **STAR + Leadership Principles in every round** | STAR; Meta values | **STAR(R)**; culture attributes | — |
| AI during interviews | **Banned** | Allowed: public docs in OA; AI use not stated for loop | **Built-in AI expected** in many interviews | **Banned unless explicitly permitted** | Varies (candidate-reported) |

---

## 6. Recent candidate-reported experiences (summary)

| Employer | Reports used (independence) | Structure observed | Notable content |
|---|---|---|---|
| Google | 5 (3 independent) — R1 | Screen + 3–4 coding + 1 behavioral | Medium-level DSA; communication; no-compiler coding; OOD once |
| Amazon | 2 (independent of each other; one rewritten by aggregator) | OA + 4 rounds; LP in most rounds; Bar Raiser | LLD/API design ×2 reports; GenAI-verification questions ×2; code not runnable ×1 |
| Meta | 1 new grad (rewritten) + 1 experienced AI-native page (boundary) | New grad: multiple coding tasks + behavioral, no design | AI-native rounds observed for experienced hires only in accessible reports |
| Microsoft | 0 new-grad full-time; internship compilation (adjacent) | — | Projects and behavioral as common as coding in internship loops |
| Apple | 1 new grad (rewritten) + mixed-level AI compilation | HR call → technical → long manager round | Java fundamentals; AI-workflow questions in some loops |

Overall candidate evidence is **weak** for Meta, Microsoft and Apple entry level. Patterns should be re-validated before curriculum decisions that depend on them.

---

## 7. Comparative competency matrix

Interview relevance per employer: **H** high (assessed in most loops), **M** medium (sometimes / named officially without emphasis), **L** low, **NO** not observed, **TD** team-dependent. Evidence type in brackets: O official, C candidate. Professional relevance and minimum depth are for a generalist entry-level engineer across all five.

| # | Competency | Google | Amazon | Meta | Microsoft | Apple | Professional relevance | Minimum effective entry depth (interview) | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Programming proficiency (one language) | H [O,C] | H [O,C] | H [O] | H [O] | H [O,C] | Essential | Master (core subset; no IDE) | High |
| 2 | Language-specific questions | L [C] | M [O: "nuances, memory management, collections"] | NO | NO | M [C: Java fundamentals] | Working | Explain (your chosen language's core semantics) | Medium |
| 3 | Data structures & algorithms | H [O,C] | H [O,C] | H [O,C] | H [O] | H [O mirrors, C] | Working | Master | High |
| 4 | Complexity analysis | H [O,C] | H [O] | H [O] | H [O] | M [C] | Working | Master | High |
| 5 | OOP / low-level design | M [C] | **H** [O OOD; C LLD/API ×2] | M [O design round, matched to background] | NO for entry (TD) | M [O mirrors, C] | Essential | Implement | Medium |
| 6 | System design | L / NO for L3 [C]; generic [O] | M [O: whiteboarding named generically; SDE II adds explicitly] | M [O 2022 generic]; NO in new-grad report | TD [O] | TD [C] | Working (grows with level) | Recognize → Explain | Low–medium |
| 7 | CS fundamentals (OS, memory, networking) | TD [C] | **M** [O: OS, internet, distributed basics] | NO | TD [O] | M [O MQ] | Working | Recognize → Explain | Medium |
| 8 | SQL & databases | NO | M [O: DB concepts, relational vs non-relational] | NO | NO | TD | Team-dependent | Recognize (concepts) | Medium |
| 9 | Testing & debugging | H [O,C] | H [O] | H [O: debugging in AI-native] | **H** [O] | M [C] | Essential | Implement | High |
| 10 | Practical engineering assessment (work simulation, existing-code tasks) | NO | **H** [O Work Simulation] | **H** [O AI-native existing-code] | NO | M [C] | Essential | Implement (read, debug, extend existing code) | Medium |
| 11 | Behavioral | H [O,C] | **H** (every round) [O,C] | H [O,C] | H [O] | H [C] | Essential (collaboration) | Implement (story bank) | High |
| 12 | Technical communication | H [O,C] | H [O,C] | H [O] | H [O] | H [C] | Essential | Master | High |
| 13 | AI-assisted engineering | Banned in interview; MQ in postings | **Postings: basic qual (5/10)**; GenAI-verification questions [C] | **Expected in many interviews** [O] | Banned unless permitted [O] | Mixed [C] | Essential (validate AI output) | Implement — two modes: AI-free fundamentals **and** AI-assisted verification/debugging | Medium–high |
| 14 | Git / workflow | NO | NO (PQ: version control) | NO | NO | NO | Essential | Implement (basic) — job, not interview | Medium |
| 15 | Practical application development / projects | M (screening) | M (PQ; projects) | M (behavioral) | M [C intern: project deep dives] | M (MQ/PQ) | Essential | Explain (own projects in depth) | Medium |
| 16 | Cloud & deployment | NO | L (PQ: AWS) | NO | TD | L (PQ: AWS/GCP) | Team-dependent | Recognize | Medium |
| 17 | ML / AI fundamentals | TD | TD [O topic list] | TD | TD [O] | TD [C] | Team-dependent | Defer unless targeting ML teams | Medium |

---

## 8. Common entry-level preparation foundation

**[Editorial]** The following foundation would serve all five employers without repeated study:

1. **One language to fluency** (core syntax, standard collections, strings, classes, exceptions), able to write correct code without an IDE or compiler, plus the ability to explain the semantics and cost of what you use.
2. **Core data structures and algorithms** to Master depth: arrays/strings, hash maps/sets, stacks/queues, linked lists, trees/BSTs, heaps, graphs; two pointers, sliding window, binary search, recursion/backtracking, BFS/DFS, sorting (incl. one n·log n algorithm explained), intervals, basic DP.
3. **Complexity analysis** for every solution, including worst-case and amortized reasoning.
4. **Testing and debugging habits**: construct examples, dry-run, edge cases, write tests when code is runnable.
5. **Interview communication**: clarify, state assumptions, brute force first, optimize, narrate, accept hints.
6. **Object-oriented and low-level design**: model a small system with classes and APIs, and defend choices.
7. **Behavioral story bank**: 8–10 specific, quantified stories (ownership, conflict, failure, ambiguity, deadline, learning, collaboration, customer focus, technical achievement) structured as STAR with reflection, mappable to Amazon's Leadership Principles and other employers' values.
8. **Code reading and AI verification**: read, debug and extend an unfamiliar codebase; review AI-generated code for correctness before optimizing.
9. **CS fundamentals at Recognize/Explain depth**: how the internet works (DNS, TCP/IP, HTTP), processes/threads/memory basics, relational vs non-relational databases.
10. **One substantial project** you can explain end to end.

Employer-specific additions are small relative to this foundation (§9).

---

## 9. Meaningful differences between employers

| Employer | What to add beyond the common foundation |
|---|---|
| Google | More/harder DSA volume; no-compiler practice; AI-free practice |
| Amazon | **Leadership Principles mapped to every story**, with deep follow-ups (Bar Raiser); **OOD/LLD and API design**; OA Work Simulation practice; broad CS-fundamentals vocabulary; readiness to discuss verifying AI output |
| Meta | Speed (two problems in ~35 minutes historically); **AI-native practice**: using an AI assistant in CoderPad, verifying and debugging its code, working in multi-file existing code |
| Microsoft | **Runnable-code discipline and explicit testing** (boundaries, stress, security); STAR(R) reflection; culture attributes (growth mindset) |
| Apple | Team-specific preparation via recruiter; **language-fundamentals questions** in the chosen language; long behavioral/manager conversations; possible AI-workflow questions |

The largest structural split is **AI policy**: Google and Microsoft prohibit outside AI in interviews (Microsoft unless permitted); Meta expects use of a built-in assistant in many interviews; Amazon and Apple reportedly ask about AI use and Amazon lists AI-assisted development as a qualification. Candidates now need both AI-free fundamentals and AI-assisted verification skills.

---

## 10. Proposed readiness criteria

**[Editorial benchmarks — not employer hiring thresholds.]**

**Common (apply to any of the five):**

1. Solve at least two of three unfamiliar Medium-level DSA problems in 45 minutes each, without notes, AI or a compiler, covering the patterns in §8.2.
2. For each, clarify requirements, state brute force, optimize, give time/space complexity, and dry-run or test edge cases.
3. Explain, without notes, the behavior and cost of every language feature and library call used.
4. Design the classes and public API for a small system (e.g. parking lot, library, rate limiter) in 45 minutes and defend the design when requirements change.
5. Given an unfamiliar ~300-line codebase with a bug, find and fix it and add a test within 45 minutes; repeat once with an AI assistant, verifying its output before accepting it.
6. Deliver 8–10 STAR(R) stories of 2–3 minutes each, with metrics, holding up to three levels of follow-up questions.
7. Explain at a high level what happens when a browser loads a URL, the difference between a process and a thread, and when to choose a relational vs non-relational database.
8. Present one personal or professional project end to end, including trade-offs and what you would change.
9. Pass at least two realistic timed mock interviews with another person.

**Employer add-ons:** Amazon — map each story to at least two Leadership Principles and complete a practice OA; Meta — complete Meta's AI-native practice session and one timed two-problem screen; Microsoft — solve problems in a runnable environment and write explicit tests; Apple — answer core language-fundamentals questions for your chosen language.

Stopping point: once the common criteria plus the relevant add-on are met, apply.

---

## 11. Topics that can reasonably be deprioritized (interview preparation)

**[Editorial]**, for entry-level interview preparation only. Absence from the evidence does not prove these are never assessed, and several matter on the job.

- Full-depth system design (keep to Recognize/Explain; distributed-systems vocabulary helps for Amazon).
- Design-pattern catalogs beyond a few common patterns (Amazon says detailed pattern knowledge is unlikely to be asked).
- SQL query fluency for interviews (concept-level database knowledge is enough for Amazon; SQL remains relevant for backend roles — revisit in R4).
- Cloud platforms and deployment.
- ML/AI theory, unless targeting ML teams.
- OS internals and networking depth beyond Recognize/Explain, unless targeting systems or infrastructure teams.
- Rare advanced algorithms (segment trees, network flow, advanced string algorithms).
- Exhaustive language features unrelated to everyday collections, strings, classes and exceptions.

---

## 12. Research limitations

- **No current official entry-level postings for Meta or Microsoft** on the access date; Apple had one relevant US posting. Qualifications for these employers rely on official process pages, boundary postings and unverified mirrors.
- **Apple publishes no interview guidance** that could be found.
- **Candidate evidence is thin**: one usable Meta new-grad report, none for Microsoft new-grad full-time, one Apple new-grad report, two Amazon new-grad reports; most rewritten by one aggregator. Major forums were inaccessible.
- **AI-native interviews at Meta**: official, but applicability to new-grad loops is unconfirmed.
- Meta's Full Loop guide PDF and all official prep videos were not reviewed.
- Amazon's topics page (A1) is generic; which topics are weighted for new grads is inferred.
- One-day posting snapshot; hiring is seasonal.
- Level mappings are third-party.

---

## 13. Implications for the apprenticeship

**[Editorial]** For discussion; no changes made. These extend R1.

1. **R1's core conclusion holds across employers**: one language to fluency, DSA, complexity, testing, communication and behavioral preparation form the shared interview core. Exhaustive Python topics remain "learn as needed".
2. **OOD / low-level design rises in priority** (Amazon official + two reports; Apple and Meta signals). It should sit alongside DSA rather than late in the path.
3. **Code reading, debugging existing code and AI verification are now interview-relevant**, not only job-relevant (Meta official AI-native format; Amazon work simulation, GenAI questions and posting responsibilities). The existing AI-Assisted Engineering phase likely needs to move earlier and split into AI-free fundamentals vs AI-assisted verification practice.
4. **Behavioral preparation should be continuous and Amazon-compatible**: a single STAR(R) story bank mapped to Leadership Principles covers all five employers.
5. **CS fundamentals are needed at Recognize/Explain depth** (Amazon official topics; Apple MQ), not full courses.
6. **Testing deserves explicit practice in runnable environments** (Microsoft) and by hand (Google/Amazon/Meta).
7. **Practical engineering** (Git, code review, CI/CD, on-call basics) is job-relevant from day one at Amazon; it can be learned through projects rather than interview drilling.
8. **System design, SQL, cloud and ML** remain low priority for Big Tech entry-level interviews; R3–R4 will test whether startups, enterprise and backend roles change this.
9. A single **common foundation plus small employer add-ons** (§8–§10) is a workable structure for the Interview Preparation section and avoids duplicating study across company guides.

---

## Appendix A — Amazon US early-career SDE postings reviewed (2026-11-25)

URL pattern: https://www.amazon.jobs/en/jobs/{id}

| ID | Title | Location | Posted |
|---|---|---|---|
| 10583340 | Software Development Engineer, Early Career – 2027 (US) | Seattle, WA | 2026-10-19 |
| 10593902 | Software Development Engineer (Database) Early Career – 2027 (US) | Seattle, WA | 2026-10-30 |
| 10595839 | Software Development Engineer (Embedded Systems) Early Career – 2027 (US) | Seattle, WA | 2026-11-03 |
| 10597803 | Software Development Engineer, Amazon Leo, Early Career – 2027 (US) | Redmond, WA | 2026-11-05 |
| 10598021 | Software Development Engineer (Embedded systems), Amazon Leo, Early Career – 2027 (US) | Redmond, WA | 2026-11-05 |
| 10513110 | Software Development Engineer, Amazon Leo, Early Career – 2026 | Redmond, WA | 2026-08-25 |
| 10601956 | Software Development Engineer, Amazon Dedicated Cloud, Early Career – 2027 | Seattle, WA | 2026-11-10 |
| 10529546 | Software Development Engineer, Amazon Dedicated Cloud, Early Career – 2026 | Seattle, WA | 2026-09-04 |
| 10567489 | Software Development Engineer, Robotics, Early Career – 2027 | North Reading, MA | 2026-10-01 |
| 10558915 | Software Development Engineer I, Annapurna Labs, Early Career – 2027 | Cupertino, CA | 2026-09-24 |
