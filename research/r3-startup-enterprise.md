# R3 — Startup and enterprise entry-level software engineering

Status: draft for product-owner review. Research date (all sources accessed): **2026-11-25**. Nothing in this report has been published to the application.

Same evidence rules as R1–R2: **[Official]** employer-published; **[Candidate]** candidate-reported (aggregator pages may rewrite or combine reports); **[Third-party]** mirrors, aggregators, unofficial guides; **[Editorial]** our recommendation. "Not observed" ≠ "not assessed". Readiness criteria are editorial benchmarks, not employer thresholds. Job postings establish **eligibility and job expectations**, not interview content; interview prevalence is taken only from official process descriptions and candidate reports.

---

## 1. Research methodology

**Segments.**

1. **Early-stage startups** — YC companies from recent batches with small teams (2–65 people).
2. **Growth-stage startups / scaleups** — large, venture-backed private companies (e.g. Notion, Stripe, Scale AI, Verkada, Sierra, Anduril).
3. **Established technology companies outside Big Tech** — public tech companies (e.g. Pinterest, DoorDash, Roblox, Affirm, Palantir, GitLab).
4. **Traditional enterprises with internal engineering** — banks, asset managers and an enterprise software consultancy (Capital One, JPMorgan Chase, Bank of America, Fidelity, SEP).

**Method.**

1. Collected postings from public job-board APIs (Greenhouse, Lever, Ashby), YC's public job listings, Workday and SmartRecruiters endpoints, and careers pages in a browser.
2. Filtered titles for entry-level signals (new grad, university, early career, junior, "I") and also measured how many engineering postings each board had **without** any entry-level role.
3. Read the qualifications of each selected posting and classified its experience requirement (§3).
4. Read official hiring-process pages where they exist.
5. Read 2026 candidate reports (mostly FastPrep) for interview content.

**Sample achieved.** 25 postings classified (§3, Appendix A): early-stage 6, growth-stage 8, established tech 6 (+ GitLab process only), enterprise 5 (incl. one program page). 24 US (incl. US-remote) and 1 mixed US/international; Bay Area well represented in segments 1–3; enterprise sample is East Coast / Midwest / Texas and finance-heavy. Plus board-level counts for 31 companies (§3.3).

**Access limitations.** Workday rate-limited all tenants after initial queries (Walmart, Target, GM could not be sampled). Several enterprise postings had closed; Capital One's TDP posting is read from an AnitaB.org mirror. LeetCode, Glassdoor, Blind and Reddit were inaccessible. Candidate evidence relies heavily on one aggregator.

---

## 2. Verified source inventory

All accessed 2026-11-25. Posting URLs for the full sample are in Appendix A.

### Official hiring and interview guidance

| # | Source | URL | Publisher | Date | Segment | Findings | Limitations |
|---|---|---|---|---|---|---|---|
| O1 | YC job pages (interview_process fields) — Corelayer, Confido, Lamar Health, MSPilot | https://www.ycombinator.com/companies/corelayer/jobs/d98zA8p-founding-engineer (and Appendix A) | Employers via YC | Posted 3 days – ~1 year ago | Early-stage | Corelayer: CEO call → **4-hour take-home** → CTO interview on the take-home → **2 days working on-site** → offer within 48h. Confido: recruiter (20 min) → technical screen (60 min) → ~5-hour onsite. Lamar Health: application replaced by an **AI-usage task** (use an LLM to produce a policy checklist and document prompts/challenges). MSPilot: candidates must show a **deployed side project with real users** | Individual companies; not representative of all startups |
| O2 | Scaling engineering organizations | https://stripe.com/guides/atlas/scaling-eng | Stripe | Not stated; appears several years old | Growth | **Bug Squash** interview: solve a real historical bug in an open-source project in your language; standardized rubrics | Dated; current Stripe new-grad loop may differ |
| O3 | Technical Interviews (handbook) | https://handbook.gitlab.com/handbook/hiring/interviewing/technical/ | GitLab | Last modified 2026-10-30 | Established | Interview centres on **reviewing a prepared merge request** (sent 72h ahead), then a 90-minute session walking through the review and **writing code to improve it**; **AI use encouraged** | GitLab's career framework starts at "Intermediate" — boundary evidence, not entry-level |
| O4 | What to expect during your Capital One interview; Student & grad application questions, answered | https://www.capitalonecareers.com/what-to-expect-during-your-capital-one-interview-students-101 ; https://www.capitalonecareers.com/student-and-grad-application-questions-answered-students-cdev | Capital One | Not stated | Enterprise | Technology Development Program (TDP): **online assessment**, then a Power Day with **technical, behavioral and case** interviews; behavioral uses "Tell me about a time…"; decisions usually within two weeks | Program lists per interview type; does not describe coding format |
| O5 | Insider tips for AI & machine learning interviews | https://www.capitalonecareers.com/insider-tips-for-ai-and-machine-learning-interviews-tech-101-cdev | Capital One | Not stated | Enterprise (AI/ML roles) | Coding assessment: 70 min, four DSA questions, pass/fail (CodeSignal); Power Day: four one-hour interviews (coding, system design, behavioral STAR, case) | AI/ML track, not general SWE |
| O6 | Software Engineer Program; JPMorganChase Digital Handbook; SEP FAQs; How we hire FAQ | https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime ; https://www.jpmorganchase.com/content/dam/jpmorganchase/documents/careers/jpmc-digital-handbook.pdf | JPMorgan Chase | Current | Enterprise | Two-year program; "foundational skills in at least one programming language"; teams are "AI-enabled" with internal AI tools. Early careers: **round 1 recorded HireVue and/or HackerRank assessment (technology)**, round 2 one or more interviews; team placement conversations after offer | Interview content beyond format not described |

### Candidate-reported (all [Candidate], FastPrep unless noted)

| # | Report | URL | Date | Segment | Findings | Limitations |
|---|---|---|---|---|---|---|
| C1 | 2026 Stripe New Grad: phone screen and virtual onsite (2 candidates) | https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-and-virtual-onsite-2-experiences-4bh59j9rh0 | Reports Nov 2026 | Growth | Phone screen: multi-part payments/reconciliation problem. Onsite: **integration round** (payment reconciliation; request replay), **debugging round** (an open-source library), **AI coding round** | Two candidates, rewritten |
| C2 | 2026 Stripe New Grad: onsite and HM round | https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-onsite-and-hm-round-1-experience-4hwnoqtl0q | Report 2026-11-05 | Growth | Onsite: JSON/API **integration** task, rule parser, **debugging** a library; hiring-manager round | Single |
| C3 | Notion New Grad SWE onsite invitations (2) | https://www.fastprep.io/experience/2026-notion-new-grad-assessments-and-virtual-onsite-invitations-2-experiences-2tarwra7ip | May–Jun 2026 | Growth | General new grad: two-hour onsite with a **debugging round** (existing React/TypeScript codebase). AI new grad: **90-minute take-home (30 min design doc + 60 min coding)**, then coding (testing-focused) and debugging rounds | Invitations described before interviews took place |
| C4 | Scale AI New Grad SWE virtual onsite (+ duplicate debugging post) | https://www.fastprep.io/experience/scale-ai-new-grad-swe-virtual-onsite-cwmvy27rd8 | ~May 2026 | Growth | Five rounds: coding, **three-part debugging**, **backend practical**, values, hiring manager; rejected after missing one bug | The two Scale AI pages appear to describe the same candidate; counted once |
| C5 | Decagon New Grad SWE | https://www.fastprep.io/experience/2026-decagon-new-grad-swe-interviews-1-experience-4p0yzlfvh5 | Apr–Jun 2026 | Growth | Coding screens; onsite: **AI coding**, **system design**, project deep dive, behavioral | Single |
| C6 | Plaud New Grad SWE onsite | https://www.fastprep.io/experience/plaud-new-grad-swe-onsite-interview-experience-1-experience-cx8d9z234f | Jul–Sep 2026 | Early/growth | **System design** (social feed), graph coding (topological sort, ratios), added behavioral/coding round | Single; negative experience |
| C7 | xAI New Grad AI coding and take-home (2 new grad + 1 unspecified) | https://www.fastprep.io/experience/2025-2026-xai-ai-coding-interview-building-with-ai-new-grad-take-home-onsite-3-e-1vhv6zjyey | Oct 2025 – Jul 2026 | Growth | **Four-hour take-home built with AI**, or onsite: whiteboard design **without AI**, ~90 minutes building it **with AI**, then demo | Small sample |
| C8 | Capital One TDP Agentic Power Day (25 reports, Part 1) | https://www.fastprep.io/experience/2027-cycle-capital-one-tdp-new-grad-oa-power-day-24-experiences-4opp91z6le | Jul–Nov 2026 | Enterprise | OA: four questions (CodeSignal), two easy + two medium where rated. Power Day: **technical case** (business discussion, then **tracing business rules, debugging and writing a similar method**), behavioral, coding. From Sep 2026 the coding round became **agentic with Claude Code** | Aggregated; includes UK/Canada reports |
| C9 | Capital One TDP Agentic Round (7 reports) | https://www.fastprep.io/experience/2026-capital-one-ai-coding-interview-agentic-round-with-claude-code-new-grad-tdp-4lmthlusl2 | Sep 30 – Oct 23, 2026 | Enterprise | Agentic round: ~20 min **fix a bug in a large full-stack app**, then ~20 min **add a feature**, using Claude Code; 4/7 ran out of time, 2 of those still received offers; talking through the work mattered | Overlaps with C8 |

---

## 3. Job posting sample and qualification findings

### 3.1 Experience classification

| Class | Definition | Count |
|---|---|---|
| **New grad / entry-level** | Explicitly for graduating or recent students, or "no minimum years" | 16 |
| **Early career (<2 years)** | States less than ~2 years of professional experience | 2 (Notion ×2; Stripe's ≤18-month cap is counted under new grad) |
| **1–2 years** | Requires ~1+ year of professional experience | 2 (Cekura, Confido) |
| **Junior-labelled but substantial experience** | Title or label implies junior/entry but text requires ≥2 years, or demanding experience | 4 (Lamar Health "1+" label but 2–5 years; Bank of America "Software Engineer I" requires 2 years; two Affirm "Software Engineer I" postings require prior experience launching backend systems "at scale") |
| **Mid-level boundary (excluded from entry findings)** | "Software Engineer" requiring 2–4 years | 1 (Fidelity) |
| Excluded | Non-SWE role mislabelled in a SWE listing (SyntheticFi "Growth Engineer": YC label 1+ years, description 2+ years, GTM automation) | — |

Some of the 16 "new grad OK" postings still expect substantial practical evidence (e.g. Sherpa: "shipped production software that real people depend on"; Corelayer: "built reliable, performant distributed systems"; Scale AI: "track record of shipping high-quality products and features at scale"). **Eligibility does not equal attainability**: several new-grad-eligible early-stage roles effectively target strong builders.

### 3.2 Qualification findings (new-grad and early-career postings, n = 18)

[Official — postings]. Counts are approximate where postings use free text.

| Requirement | Observed | Notes |
|---|---|---|
| Degree required (CS or related, completed or in progress) | ~12 / 18 | Enterprise and established tech most often require it; several accept "or equivalent" (Stripe, Roblox, Affirm, Scale AI); early-stage startups often do not mention degrees (MSPilot explicitly welcomes self-taught engineers) |
| Prior internship(s) required or strongly preferred | ~10 / 18 | DoorDash requires **two** internships or equivalent; Notion, Scale AI, Verkada require internship experience |
| Demonstrated shipped projects / real users | ~6 / 18 | Strongest at early-stage startups (MSPilot, Sherpa) and product-focused scaleups (Scale AI, Sierra) |
| Named language(s) | Common | Python, TypeScript/JavaScript, Java, Go most frequent; Stripe and Roblox explicitly accept learning new languages from strong fundamentals |
| Named frameworks / tools | Common in startups and scaleups | React, Node.js, MongoDB (Scale AI); Redis, DynamoDB, Postgres, Kafka, Terraform, Kubernetes ("what you'll do" at Verkada, not requirements); Kubernetes as bonus (Corelayer) |
| Data structures & algorithms / CS fundamentals | ~8 / 18 | DoorDash, Pinterest, Notion, Palantir, Anduril (preferred), Capital One (preferred programming skills) |
| SQL / databases | ~4 / 18 | DoorDash (required), Capital One (listed language), Affirm (MySQL, backend), Verkada (job duties) |
| Version control, unit tests, clean code | Explicit in DoorDash; implicit in many | Affirm: "well tested and extensible code", code reviews |
| Reading/navigating existing code, code review | Explicit in Affirm, Stripe ("learn unfamiliar systems"), MSPilot ("investigate bugs and production issues, find the root cause") | |
| **AI-assisted development** | **~8 / 18** (tool-usage expectations; AI-product roles excluded) | Required/expected: Sherpa ("use AI less than 10 hours a day" = not a fit), Notion (stay current with Claude Code/Cursor/Codex), Pinterest (AI as coding partner with judgment on accuracy and security), Capital One TDP (AI tooling "beyond basic code completion"), JPMorgan (AI-enabled teams); nice-to-have with **evaluation of AI output**: DoorDash; Corelayer (ship quickly with AI while keeping a high bar) |
| Communication / customer contact | Very common | Many startups expect direct customer interaction (Sierra, Scale AI, Corelayer, MSPilot) |
| Work authorization / security clearance | Segment-specific | Anduril and Palantir (defence) require US Person or clearance eligibility; SEP does not sponsor visas |

### 3.3 Scarcity of entry-level postings (board-level counts, 2026-11-25)

[Official — job boards]. Engineering postings vs. entry-level software postings found by title:

- **Zero entry-level software postings**: Ramp (43 eng), Figma (35), Airbnb (52), Cloudflare (242), Datadog (88), Robinhood (64), Plaid (49), Brex (64), Vercel (31), Coinbase (103), Glean (48), Mercury (16), Decagon (41), Harvey (151), Twilio (34), Okta (177), Chime (26), Asana (40), Gusto (34), Block (39), Linear (9), Instacart (28), Lyft (47), Reddit (71), Dropbox (29).
- **Some entry-level**: Notion 3, Stripe 1 US (several international), Scale AI 2 US, Verkada 1 SWE, Sierra 1 US, Pinterest 1, DoorDash 1, Roblox 1, Affirm 3 US-remote, Palantir many (incl. forward-deployed), Anduril 1 SWE (many non-software).
- **YC listings**: of 32 software-engineering postings on YC's main SWE list, 3 accepted new grads, 3 required 1+ years, 15 required 3+ and 11 required 6+ years. On the Bay Area list, 4 of 13 accepted new grads.

Interpretation: entry-level openings outside Big Tech are concentrated in a minority of companies with structured new-grad programs, plus a small number of early-stage startups. Many well-known scaleups hire no entry-level engineers at a given time. Timing (fall new-grad season) affects these counts.

---

## 4. Findings by employer segment

### 4.1 Early-stage startups (YC; team 2–65)

- **Eligibility:** few accept new grads; those that do often expect **evidence of shipping** (deployed projects, real users, production software). Some advertise "new grads OK" while asking for distributed-systems experience.
- **Expectations [Official, postings]:** full-stack ownership "from first customer conversation to release"; direct customer contact; extreme AI-tool usage (Sherpa: agents run in parallel, "a lot of the job is reviewing their work"); fast shipping; some require 6-day in-office weeks (Corelayer, Cekura).
- **Assessments [Official, O1]:** take-home + discussion + **paid/unpaid work trial on-site** (Corelayer); recruiter → technical screen → long onsite (Confido); AI-usage work sample instead of a cover letter (Lamar); show your deployed project (MSPilot).
- **DSA:** not described in early-stage official processes reviewed; candidate evidence for this segment is limited.

### 4.2 Growth-stage startups / scaleups

- **Eligibility [Official]:** structured new-grad roles at a minority of companies; internships commonly required; strong product/shipping signals preferred.
- **Assessments [Candidate C1–C7; Official O2]:** more **realistic engineering rounds** than Big Tech: integration tasks (Stripe), debugging existing code (Stripe, Notion, Scale AI), backend practicals (Scale AI), take-homes with design docs (Notion AI), AI-assisted building (xAI, Stripe AI round, Decagon AI coding). **System design appears in some new-grad loops** (Decagon, Plaud, xAI) — more than observed for Big Tech new grads. Algorithmic coding screens are still common (Stripe, Decagon).

### 4.3 Established technology companies (public, non-Big Tech)

- **Eligibility [Official]:** formal new-grad programs (Pinterest, DoorDash, Roblox, Palantir); DoorDash requires SQL, version control and unit tests; Pinterest requires DSA/software design and AI-tool judgment; Palantir/defence requires clearance eligibility. Affirm's "Software Engineer I" expects prior experience launching backend systems, navigating large codebases and reviewing code.
- **Assessments:** GitLab's official process is a merge-request review and improvement session with AI allowed [O3] (non-entry boundary). Roblox points candidates to a practice-assessment platform. Candidate evidence for this segment's new-grad loops was not gathered in this batch beyond what is noted; **interview content for Pinterest, DoorDash, Roblox, Affirm and Palantir new grads is unverified here.**

### 4.4 Traditional enterprises

- **Eligibility [Official]:** structured programs (Capital One TDP, JPMorgan SEP, SEP) target graduates with degrees; requirements emphasise programming in at least one language, communication and, increasingly, AI tooling. **Titles are unreliable**: Bank of America "Software Engineer I" requires 2 years; Fidelity "Software Engineer" requires 2–4 years.
- **Assessments [Official O4–O6; Candidate C8–C9]:** online assessments (CodeSignal/HackerRank), **recorded video interviews** (JPMorgan HireVue), Power Days with **behavioral and business case interviews** (Capital One — a case interview is unique among all employers reviewed in R1–R3), technical case involving **reading business logic and debugging**, and, since September 2026, an **agentic coding round with Claude Code** (bug fix then feature in a large app) at Capital One.
- **Job expectations [Official, postings]:** unit testing, test automation, CI/CD, REST APIs, secure coding, code reviews, on-call (Fidelity, mid-level), AI-assisted engineering (Bank of America, JPMorgan, Capital One).

---

## 5. Official hiring and interview guidance (summary)

| Employer | Format (official) |
|---|---|
| Corelayer (early) | CEO call → 4h take-home → CTO interview on take-home → 2-day on-site work → offer |
| Confido (early/growth) | Recruiter → 60-min technical screen → ~5h onsite |
| Lamar Health (early) | AI-usage communication task |
| MSPilot (early) | Show a deployed project used by real people |
| Stripe (growth) | Bug Squash: fix a real historical open-source bug (dated source) |
| GitLab (established; non-entry) | Async merge-request review + 90-min live improvement; AI encouraged |
| Capital One (enterprise) | Online assessment → Power Day: technical, behavioral, case |
| JPMorgan Chase (enterprise) | HireVue and/or HackerRank → interviews → team placement |

---

## 6. Candidate-reported interview experiences (summary)

| Pattern | Reports observing it | Segments |
|---|---|---|
| Debugging existing code as a dedicated round | Stripe (C1, C2), Notion (C3), Scale AI (C4), Capital One technical case (C8) | Growth, enterprise |
| Integration / API / practical backend task | Stripe (C1, C2), Scale AI (C4) | Growth |
| AI-assisted or agentic coding round | Stripe (C1), Decagon (C5), xAI (C7), Capital One (C8, C9) | Growth, enterprise |
| Take-home | Notion AI (C3), xAI (C7); Corelayer (official) | Early, growth |
| System design for new grads | Decagon (C5), Plaud (C6), xAI (C7) | Early/growth |
| Algorithmic coding (LeetCode-style) | Stripe phone screens, Decagon, Plaud, Capital One OA | All |
| Behavioral / values round | Scale AI, Decagon, Plaud, Capital One | All |
| Business case interview | Capital One (official + C8) | Enterprise |

Independence: C1/C2 are separate candidates; C4's two pages likely describe one candidate; C8/C9 overlap. Sample sizes are small; patterns indicate presence, not prevalence.

---

## 7. Comparative competency matrix

Interview relevance by segment: **H** high, **M** medium, **L** low, **NO** not observed, **TD** team-dependent. BT = Big Tech summary from R1–R2. Evidence: O official, C candidate, P posting (eligibility/job, not interview).

| # | Competency | BT | Early-stage | Growth | Established | Enterprise | Professional relevance | Min. entry depth | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Programming proficiency (one language) | H | H [O,P] | H [C,P] | H [P] | H [O,P] | Essential | Master core subset | High |
| 2 | Language-specific questions | L–M | NO | NO | NO | NO | Working | Explain own language's semantics | Low (little evidence) |
| 3 | DSA | H | L / NO (official processes) | M–H [C] | Unverified (P: required) | H in OA [O,C] | Working | Implement–Master (core patterns) | Medium |
| 4 | Complexity analysis | H | NO | M [C] | Unverified | M [C] | Working | Explain–Master | Medium |
| 5 | OOP / SOLID / LLD | M–H | NO | M [C: parsers, ledger design] | NO | L | Essential (OOP); Working (SOLID) | Implement (OOP/LLD); Recognize (SOLID) | Low–medium |
| 6 | System design | L–M | M (AI startups) | **M** [C: Decagon, Plaud, xAI] | NO | L (AI/ML track only) | Working | Explain basics (APIs, storage, scaling vocabulary) | Medium–low |
| 7 | SQL & databases | L | L | L | M [P: DoorDash] | M [P] | **Essential for backend/full-stack** | Implement basic queries + schema concepts | Medium |
| 8 | Networking, HTTP, APIs | L–M | M [P] | **H** [C: integration rounds] | M [P] | M [P: REST] | Essential | Implement (consume/build REST, JSON) | Medium |
| 9 | Testing & debugging | H | H [O: work trial] | **H** [C: debugging rounds] | H [P] | **H** [C: technical case; agentic bug fix] | Essential | Implement | High |
| 10 | Git & PR workflow | NO | M [P] | L | M [P: DoorDash] | M [P] | Essential | Implement (branch, PR, review) | Medium |
| 11 | Cloud & deployment | L | M [P: own the deploy] | L–M [P] | L [P] | L–M [P] | Working | Implement basic deploy of one app; Recognize IaC/K8s | Medium |
| 12 | Practical coding assessments (realistic tasks) | M (Amazon, Meta) | **H** [O] | **H** [C] | M [O: GitLab] | **H** [C] | Essential | Implement | Medium–high |
| 13 | Take-homes | NO | **M–H** [O] | M [C] | NO | NO (DS roles only) | — | Complete a scoped project in ~4h with tests and README | Medium |
| 14 | Project / portfolio discussion | M | **H** [O: show deployed project] | M [C: deep dives] | M | M | Essential | Explain own project end to end | Medium |
| 15 | Reading/modifying existing code | M (Meta AI-native, Amazon) | H [P] | **H** [C] | H [O, P] | **H** [C] | Essential | Implement | High |
| 16 | Behavioral & communication | H | H [P: customer contact] | H [C] | H [P] | **H** [O: behavioral + case] | Essential | Implement (story bank) | High |
| 17 | AI-assisted development | Split (banned vs. expected) | **H — expected heavily** [P,O] | **H** [C: AI rounds] | M–H [P, O: GitLab] | **H** [C: agentic round; P] | Essential | Implement: direct, verify and debug AI output; also work without AI | High |
| 18 | Business/case reasoning | NO | M (customer-facing) | L | NO | **H at Capital One** [O] | Working | Explain trade-offs in business terms | Medium (one employer) |

---

## 8. Common practical engineering expectations

Whether entry-level engineers are expected to do each independently, and at what depth. **[Editorial]** conclusions, supported by the cited evidence.

| Task | Evidence | Expected independently at entry? | Depth |
|---|---|---|---|
| Implement a small feature | MSPilot, Affirm, Capital One agentic round, Sherpa | **Yes** | Implement |
| Read and understand an existing codebase | Stripe, Affirm, GitLab, Notion/Scale AI debugging, Capital One case | **Yes** | Implement |
| Diagnose and repair a defect | MSPilot ("find the root cause"), debugging rounds, Capital One bug fix | **Yes** | Implement |
| Write unit tests | DoorDash (required), Affirm, BofA, Notion testing-focused round | **Yes** | Implement |
| Create or consume an API | Stripe integration rounds, Verkada (REST), BofA/Fidelity (REST), Scale AI | **Yes** (consume and build simple REST endpoints) | Implement |
| Query a database | DoorDash (SQL), Capital One (SQL listed), backend roles | **Usually** for backend/full-stack | Implement (basic CRUD, joins, filtering) |
| Use Git branches and pull requests | DoorDash, MSPilot (PR descriptions), BofA | **Yes** | Implement |
| Review code | Affirm, GitLab interview, BofA, Sherpa (reviewing agents' work) | **Participate** (give and receive reviews) | Explain–Implement |
| Deploy a basic application | MSPilot (own the deploy), early-stage roles, Fidelity (mid-level) | **At startups, yes; at enterprises, via existing pipelines** | Implement one simple deploy; Recognize CI/CD and containers |
| Verify AI-generated code | Capital One agentic round, Pinterest, DoorDash, Sherpa, Lamar task; R2 Amazon/Meta | **Yes** | Implement |
| Explain technical decisions | Corelayer CTO interview on take-home, GitLab review walkthrough, deep dives | **Yes** | Explain |

---

## 9. Differences from Big Tech preparation

1. **More realistic, work-sample assessments.** Debugging rounds, integration tasks, backend practicals, take-homes, work trials and code-review interviews are prominent outside Big Tech; Big Tech still centres on algorithmic coding.
2. **AI expectations are stronger and more uniform.** Several startups expect heavy daily AI use; Capital One and Stripe run AI/agentic coding rounds; GitLab encourages AI in interviews. Big Tech is split (Google/Microsoft prohibit outside AI in interviews; Meta embeds it).
3. **Shipping evidence matters more.** Early-stage startups and product scaleups ask for deployed projects, real users and end-to-end ownership.
4. **Stack-specific signals appear more often** (TypeScript/React, Python/Go backends, SQL), though several employers state that fundamentals transfer.
5. **System design shows up in some new-grad startup loops**, especially AI-focused companies, at a practical (not senior) level.
6. **Enterprise-specific formats**: recorded video interviews, business case interviews, structured rotational programs, and job titles that do not reliably indicate level.
7. **Fewer entry-level openings** per company, and new-grad roles concentrated in companies with structured programs.

What stays the same: one strong language, testing/debugging, clear communication, behavioral stories, and core DSA for online assessments and phone screens.

---

## 10. Proposed readiness criteria

**[Editorial benchmarks — not employer-validated hiring thresholds.]** Build on the R2 common criteria (DSA, complexity, communication, behavioral, LLD) and add:

1. **Shipped project:** one deployed web application or service used by at least a few real people, with a README, tests, and a short write-up of decisions and trade-offs; able to demo and explain it for 20 minutes.
2. **Debugging:** given an unfamiliar ~1,000-line repository with three seeded bugs, find and fix at least two in 45 minutes, explaining reasoning aloud.
3. **Integration:** in 60 minutes, consume a documented JSON/REST API, transform the data and produce correct output, handling errors and edge cases.
4. **Feature in existing code:** add a small feature with tests to an existing codebase in 45 minutes, once without AI and once directing an AI agent while verifying its output.
5. **Take-home:** complete a 4-hour scoped build with tests, README and a clear commit history, then defend it in a 45-minute review.
6. **SQL:** write queries with filtering, joins, grouping and aggregation for a small schema without reference.
7. **Git workflow:** branch, open a pull request with a clear description, respond to review comments, resolve a merge conflict.
8. **Code review:** review a 200-line pull request and identify correctness, design, testing and readability issues.
9. **Basic system design (for startup targets):** explain how you would structure a small product's API, data model and storage, and what changes as usage grows.
10. **Enterprise add-ons:** a practice recorded-video interview; a business case discussion (e.g. reasoning about a public financial product) for Capital One-style loops.

Stopping point: R2 common criteria + items 1–8 make a candidate competitive across segments; items 9–10 are segment-specific.

---

## 11. Topics that can reasonably be deprioritized

**[Editorial]** with the conditions under which each becomes relevant.

| Topic | Defer unless… |
|---|---|
| Specific frameworks beyond one web stack | The target posting names a framework as required (learn one stack well; transfer later) |
| Kubernetes, Terraform, infrastructure-as-code | Targeting infrastructure/platform roles or startups listing them as requirements (they appear mainly as bonuses or job duties) |
| Deep distributed systems / senior system design | Targeting AI or infrastructure startups whose new-grad loops include design; keep to basic design otherwise |
| ML training, post-training, evals depth | Targeting AI-product or ML roles (Notion AI, Corelayer, Cekura) |
| Cloud certifications | Never required in the entry-level sample; preferred only for a mid-level enterprise role |
| SOLID and design-pattern catalogs | Rarely observed; learn through code review and practice |
| Language trivia | Not observed outside Big Tech in this sample |
| Security clearance-related knowledge | Only for defence employers (Anduril, Palantir government roles) |
| Business case frameworks | Only for Capital One-style enterprise programs |

---

## 12. Research limitations

- **Snapshot and seasonality:** one day (2026-11-25), during fall new-grad season.
- **Sampling bias:** postings were drawn mainly from companies using Greenhouse, Lever, Ashby or YC listings — tech-forward employers. Workday rate limits prevented sampling Walmart, Target and GM; the enterprise sample (5 postings + program pages) is small and finance-heavy.
- **Early-stage = YC only**; YC companies are not representative of all startups.
- **Closed postings and mirrors:** Capital One TDP read via an AnitaB.org mirror; several Apple/Walmart-style postings had closed.
- **Interview evidence is thin and uneven:** mostly one aggregator (FastPrep); established-tech new-grad loops (Pinterest, DoorDash, Roblox, Affirm, Palantir) were not covered by candidate reports in this batch; LeetCode/Glassdoor/Blind/Reddit inaccessible.
- **Some official guidance is dated (Stripe) or non-entry (GitLab).**
- **Counts in §3.2 are approximate** where postings use free text.
- Prevalence of interview formats cannot be inferred from these sample sizes; patterns indicate presence only.

---

## 13. Implications for the apprenticeship

**[Editorial]** for discussion; no changes made.

1. **A shared foundation remains valid across Big Tech, startups and enterprises**: one language, core DSA, testing/debugging, communication, behavioral stories.
2. **Practical engineering must be a first-class part of preparation, not a late phase**: debugging unfamiliar code, integration/API tasks, adding features with tests, Git/PR workflow and code review appear in interviews outside Big Tech and in job expectations everywhere.
3. **A deployed project with real users is a hiring asset**, especially for startups; Practical Engineering Projects should produce one early, and it should be reused for project interviews and portfolio.
4. **AI-assisted engineering needs explicit, assessed practice** in both directions — working without AI (Google/Microsoft/OAs) and directing/verifying AI agents (Capital One, Stripe, startups, Meta).
5. **SQL and HTTP/REST rise from "deferrable" to "working knowledge"** for backend/full-stack targets (confirming R4's focus).
6. **System design at a basic, practical level** is worth adding for startup-targeted candidates; senior-level design remains deferrable.
7. **Segment-specific Interview Preparation guides are justified** for: startups (take-homes, work trials, shipping evidence), growth-stage practical loops (debugging/integration), and enterprise programs (OA, recorded video, case interviews). These can sit on top of a single common foundation rather than duplicating it.
8. **Getting Hired guidance should warn that titles are unreliable** ("Software Engineer I" may require 2 years; "new grads OK" may target strong builders) and that entry-level openings cluster in companies with structured programs.

---

## Appendix A — Job posting sample (2026-11-25)

| # | Segment | Employer | Title | Location | Class | URL |
|---|---|---|---|---|---|---|
| 1 | Early | Sherpa (YC P26, team 2) | Founding Engineer | San Francisco | New grad OK (expects shipped production software) | https://www.ycombinator.com/companies/sherpa/jobs/0dzTFDM-founding-engineer |
| 2 | Early | Corelayer (YC W26, team 3) | Founding Engineer | San Francisco | New grad OK (expects distributed-systems experience) | https://www.ycombinator.com/companies/corelayer/jobs/d98zA8p-founding-engineer |
| 3 | Early | MSPilot (YC F25, team 3) | Junior Software Engineer (New Grad) | SF / Remote / Ukraine / Poland | New grad (no minimum years); pay band suggests non-US hiring | https://www.ycombinator.com/companies/mspilot/jobs/F6NaBxo-junior-software-engineer-new-grad |
| 4 | Early | Cekura (YC F24, team 15) | Member of Technical Staff | San Francisco | 1+ years | https://www.ycombinator.com/companies/cekura-ai/jobs/3Ebgkzy-member-of-technical-staff-cekura-san-francisco-in-person |
| 5 | Early/growth | Confido (YC S21, team 65, Series B) | Software Engineer | New York | 1+ years (+ systems design experience) | https://www.ycombinator.com/companies/confido/jobs/fm8NtZT-software-engineer |
| 6 | Early | Lamar Health (YC W21, team 15) | Product Engineer | San Mateo / Remote US | Junior-labelled (YC: 1+), requires 2–5 years | https://www.ycombinator.com/companies/lamar-health/jobs/nkwwGKj-product-engineer |
| 7 | Growth | Notion | Software Engineer, New Grad (Dec 2026) | San Francisco | New grad | https://jobs.ashbyhq.com/notion/e32799d2-8ef8-4803-8189-c72514afa816 |
| 8 | Growth | Notion | Software Engineer, Early Career (AI) | San Francisco | <2 years | https://jobs.ashbyhq.com/notion/85947779-6b87-466a-98bc-30a640448c28 |
| 9 | Growth | Notion | Software Engineer, Growth (Early Career) | San Francisco | <2 years | https://jobs.ashbyhq.com/notion/297b4ece-765f-4eea-b1b8-46057cb6501f |
| 10 | Growth | Stripe | Software Engineer, New Grad | SF / Seattle / New York | New grad (≤18 months experience) | https://stripe.com/jobs/search?gh_jid=8128744 |
| 11 | Growth | Scale AI | Software Engineer – New Grad | San Francisco | New grad (expects shipping at scale) | https://job-boards.greenhouse.io/scaleai/jobs/4730836005 |
| 12 | Growth | Verkada | Backend Software Engineer – University Graduate 2027 | San Mateo | New grad | https://job-boards.greenhouse.io/verkada/jobs/5280545007 |
| 13 | Growth | Sierra | Software Engineer, Agent (New Grad 2027) | San Francisco | New grad | https://jobs.ashbyhq.com/Sierra/149f368c-52d5-408f-ba26-ad888f318a00 |
| 14 | Growth | Anduril | 2027 Early Career Software Engineer | Multiple US | New grad (US Person) | https://boards.greenhouse.io/andurilindustries/jobs/5162263007 |
| 15 | Established | Pinterest | University Grad Software Engineer 2027 (USA) | SF / Remote US | New grad | https://www.pinterestcareers.com/jobs/?gh_jid=7838591 |
| 16 | Established | DoorDash | Software Engineer I, Entry-Level (Fall 2026–Summer 2027) | Multiple US | New grad (2 internships or equivalent) | https://job-boards.greenhouse.io/doordashusa/jobs/8163709 |
| 17 | Established | Roblox | [2027] Software Engineer, Early Career | San Mateo | New grad | https://careers.roblox.com/jobs/8072244 |
| 18 | Established | Affirm | Software Engineer I, Fullstack (Search) | Remote US | Junior-labelled; prior experience launching systems at scale | https://job-boards.greenhouse.io/affirm/jobs/8017340003 |
| 19 | Established | Affirm | Software Engineer I, Backend (Continuous Delivery) | Remote US | Junior-labelled; prior experience launching systems at scale | https://job-boards.greenhouse.io/affirm/jobs/8181183003 |
| 20 | Established | Palantir | Software Engineer, New Grad | New York | New grad (clearance eligibility valued) | https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92 |
| 21 | Enterprise | Capital One | Technology Development Program Associate – February 2027 | US (mirror) | New grad | https://jobs.anitab.org/companies/capital-one/jobs/91839296-technology-development-program-associate-february-2027 (mirror) |
| 22 | Enterprise | JPMorgan Chase | Software Engineer Program (program page) | US | New grad | https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime |
| 23 | Enterprise | SEP (software consultancy, 180 staff) | Software Engineer (2027 start dates, in person) | Westfield, IN | New grad | https://jobs.lever.co/sep/f7ad9ffb-03dc-4fb2-9a92-e5f04a85ba08 |
| 24 | Enterprise | Bank of America | Software Engineer I – Java | Pennington, NJ | Junior-labelled; requires 2 years | https://ghr.wd1.myworkdayjobs.com/Lateral-US/job/Pennington/Software-Engineer-I--Java_26043787 |
| 25 | Enterprise | Fidelity | Software Engineer, Python | Covington, KY | Mid-level boundary (2–4 years) | https://wd1.myworkdaysite.com/recruiting/fmr/targeted/job/Covington-KY/Software-Engineer--Python_2137843 |

Also reviewed but not counted as US entry-level evidence: Databricks new-grad roles (Aarhus, London only), Stripe/Scale AI international new-grad roles, Anduril non-software early-career roles, Palantir forward-deployed new-grad roles (FDE is out of scope), SyntheticFi (non-SWE), Fidelity Westlake "Software Engineer" (experience not stated).
