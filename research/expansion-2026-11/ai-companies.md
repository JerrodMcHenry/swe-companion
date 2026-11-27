# AI companies research: OpenAI, Anthropic, Perplexity

Checked 2026-11-27. Read-only web research. Evidence labels:
**[OFF]** official interview guidance · **[JOB]** current posting (job requirements, not interview content) · **[CAND]** candidate-reported or third-party aggregator (dated) · **[PREP]** established representative prep material · **[ED]** editorial recommendation.

How the postings were read: I pulled the public job-board APIs on 2026-11-27 (OpenAI Ashby: 875 postings; Anthropic Greenhouse: 634; Perplexity Ashby: 150) and searched titles and description text. The years-of-experience figures were extracted by regex and spot-checked by reading the text, so treat the tallies as approximate.

---

## 1. OpenAI

### Titles found (experience levels) [JOB]
- **Software Engineer**: about 159 titles contain "Software Engineer". Where a posting states years, they are mostly 4–9+.
  - Developer Productivity: 7+ yrs.
  - Full Stack (People Innovation Labs): 5+.
  - Integrity Foundations: 3+.
- **Entry level: one posting only.** *Software Engineer, Applied Emerging Talent (2027)*, published 2026-09-14. It asks for a BS/MS in CS or equivalent practical experience, **0–1 yrs**, JavaScript + React, a backend language ("we use Python"), some Postgres/MySQL, and interest in AI/ML ("direct experience not required"). https://jobs.ashbyhq.com/openai/55150071-fce8-48f5-aea4-14ed78b83511
- **Other early-career routes.** The careers page names internships, residencies and full-time roles for "people early in their professional journey". The OpenAI Residency (six months, for people from adjacent fields) says 2026 applications are closed. [OFF] https://openai.com/careers/ , https://openai.com/residency/
- **Forward Deployed (Software) Engineer**: about 40 postings, the largest customer-facing family.
  - FDSWE SF/NYC/Seattle: "7+ years of professional full stack engineering experience (excluding internships)", 50% travel. https://jobs.ashbyhq.com/openai/00207abc-49b7-465c-a219-f7c1140f8047 , https://jobs.ashbyhq.com/openai/533c0fc9-b773-476d-9f96-a0528efbab0e
  - FDE Dublin/Paris: "5+ years of engineering or technical deployment experience that includes customer-facing work". https://jobs.ashbyhq.com/openai/b40efa93-da3c-4593-bc98-03d203cd0488
  - FDSWE Gov: 5+. https://jobs.ashbyhq.com/openai/db5a708d-1d7a-4aa3-8dd3-0d0423b6b69f
- **Applied AI Engineer**: about 51 postings. Codex, Startups, Enterprise, Digital Natives, Cyber, Partner.
  - Startups: 5+ yrs as SWE/MLE. https://jobs.ashbyhq.com/openai/71e7252f-abb1-4b74-8e69-318413042357
  - Enterprise: no number stated. It asks for a "demonstrated track record" of taking AI systems from prototype to production, high Python proficiency, systematic AI evals (graders, representative data), and enterprise production concerns (security, observability, cost). https://jobs.ashbyhq.com/openai/01091aed-427d-4e10-8cdb-fb500cf55bb9
- **Applied AI Architect**: about 32 postings. Where stated, 3–5+; otherwise "significant experience in customer-facing technical roles such as solutions architecture, solutions engineering…". It is described as the "CTO of your book of business", owning the technical account plan from pre-sales to adoption. https://jobs.ashbyhq.com/openai/98a36c10-3497-4955-9cc0-a6f211e4dc1b
- **Solutions Engineer**: only *Solutions Engineer, Ads Solutions* (NYC, Tokyo). It is pre-sales for the ads platform and asks for 5+ yrs in solutions/sales engineering, adtech or martech. https://jobs.ashbyhq.com/openai/eb3b695e-6c60-4875-b8bc-8f4d5d8a9bbb
  - Other: *Early Access Deployment Engineer* (4+ yrs). https://jobs.ashbyhq.com/openai/ee6b7ece-ffcb-4546-8b4c-ef755ec21c14
  - Conclusion: the general solutions-architecture function appears to sit under "Applied AI Architect".

### Official process [OFF] https://openai.com/interview-guide/
- **Stages:**
  1. Application review (about 1 week).
  2. Intro call with a recruiter or hiring manager.
  3. **Skills-based assessment**, which "may include pair coding, take-home projects, or technical tests" and can be more than one.
  4. **Final interviews**: about 4–6 hours with 4–6 interviewers over 1–2 days, virtual by default.
  5. Decision in about 1 week; references may be requested.
- **Engineering criteria:** "well-designed solutions", "high-quality code", "optimal performance", "good test coverage", and reasoning. Communication, collaboration, openness to feedback and mission alignment are also assessed.
- **Not stated:** languages and system design are not mentioned on this page. There is no new grad vs experienced distinction ("not credential-driven").
- **AI policy (official):** "Expectations for AI and other tools vary by interview." Some rounds allow AI and others test independent problem solving. Permitted tools are explained in the prep materials; ask the recruiter.

### Reported formats [CAND]
- **interviewing.io OpenAI guide** (undated, ©2026; built from engineer conversations, Glassdoor and its own mock data; mid/senior focus).
  - Screens: recruiter call, a 1h technical screen, a 1h system design screen.
  - Onsite: an **agentic coding round (beta)**, a manager behavioral round, a presentation, coding, system design, and a teamwork behavioral round.
  - Coding is "more practical than LeetCode": multi-part tasks, with concurrency, versioned/time-based data structures and OOP recurring. Candidates choose the language.
  - AI is prohibited except in the agentic round. https://interviewing.io/openai-interview-questions
- **aced.io (formerly Exponent) new-grad guide** (updated 2026; 10 experiences, structure from one loop).
  - Stages: recruiter screen, a timed two-part algorithmic OA (HackerRank or similar), one live algorithmic round, a **final iterative OOP round** (requirements added mid-session), and a behavioral round (mission, AI safety views).
  - Team matching happens after the offer. https://www.aced.io/guides/openai-software-engineer-new-grad-interview
- **aced.io OpenAI FDE guide** (updated 2026; cites 2 interview experiences, so a thin sample).
  - Early screen varies: a take-home with an AI/Codex-enabled screen, coding + system design screens, or a project screen.
  - Onsite: a 60-minute incremental production-style build, system design focused on LLM deployment/RAG/evals/agents (sometimes framed as a customer scenario), a project deep dive presentation, and a behavioral round with customer scenarios.
  - An optional take-home of about 1 week asks for working code, a running app and a recorded walkthrough.
  - AI is allowed in some rounds and not others. https://www.aced.io/guides/openai-forward-deployed-engineer-interview

### Proposed roles
Software Engineer (with the Emerging Talent note), then Forward Deployed Engineer, then AI Engineer (Applied AI Engineer). Mark Applied AI Architect / Solutions Engineer as experienced-only.

### Categories for Software Engineer, priority order (one-line notes)
1. **Practical coding and debugging**: official "high-quality code, test coverage"; candidates report multi-part practical tasks [OFF+CAND].
2. **Coding problems / DSA**: new-grad OA and first round reported as algorithmic [CAND].
3. **OOP / low-level design**: the reported new-grad final round is iterative OOP [CAND].
4. **Python**: the Emerging Talent posting says "we use Python"; language choice is reported as free [JOB+CAND].
5. **System design**: reported for experienced loops; not on the official page. Basic depth for new grads [CAND].
6. **Behavioral**: official (communication, collaboration, mission) [OFF].
7. **AI-assisted coding**: official "varies by interview"; an agentic beta round is reported [OFF+CAND].
8. **Projects and take-homes**: official "take-home projects" is one possible format [OFF].
9. **JavaScript / TypeScript / React, SQL**: Emerging Talent posting requirements (job, not interview evidence) [JOB].
10. **Job description analysis**: teams vary widely [ED].

**FDE** adds AI engineering, AI system design and customer-facing scenarios on top of practical coding and system design.

### Evidence gaps
- There is no official statement of languages, system design or round content for new grads.
- The agentic round is "beta" per one third-party source.
- The FDE guide rests on 2 experiences.
- Glassdoor pages returned 403 and could not be read directly.

---

## 2. Anthropic

### Titles found [JOB]
- **Software Engineer**: 92 titles contain "Software Engineer", and **80 are titled Staff/Senior/Lead/Manager**. The rest state 5–10+ yrs; for example *Software Engineer, Research Tools* asks 5+ and *Beneficial Deployments* asks 6+. https://job-boards.greenhouse.io/anthropic/jobs/4981828008 , https://job-boards.greenhouse.io/anthropic/jobs/4942024008
- **No new-grad, early-career or internship SWE postings were found.** The careers page says "We don't currently offer internships." The only early-career-like entries are the **Anthropic Fellows Program** postings (AI Safety & Security; ML Systems & RL; Economics & Policy), which are research fellowships, not SWE roles. https://www.anthropic.com/careers , https://job-boards.greenhouse.io/anthropic/jobs/5183051008
- **Forward Deployed Engineer** (London, Paris, Munich; Staff FDE US). It asks for "4+ years of experience in a technical, customer facing role such as Forward Deployed Engineer, or as a Software Engineer with consulting or product experience", production LLM experience (prompting, agents, evals), and Python plus ideally TypeScript/Java. Deliverables named: "MCP servers, sub-agents, and agent skills". Travel 25–50%. https://job-boards.greenhouse.io/anthropic/jobs/5423029008
- **Applied AI Engineer**: 12 postings, mostly **4+ yrs**. Enterprise asks for 4+ yrs as FDE, Product Engineer, SWE or TPM; production LLM experience including evals, transcript analysis and MCP; Python or TypeScript. https://job-boards.greenhouse.io/anthropic/jobs/5057647008
- **Applied AI Architect**: about 42 postings, the largest family. Typically 3–5+ (up to 10+).
  - Commercial is described as a "Pre-Sales architect" / "Commercial Solutions Architect". https://job-boards.greenhouse.io/anthropic/jobs/5192805008
  - Startups asks for 3+ yrs as SA, Sales Engineer, FDE or technical founder, plus a "track record of selling technical products". https://job-boards.greenhouse.io/anthropic/jobs/5406982008
- **Solutions Engineer / Architect** as a title: none. The function is "Applied AI Architect".
- **Minimum years field:** every posting's logistics block says "Years of experience required will correlate with the internal job level".

### Official process [OFF]
- **Candidate AI guidance** (last updated Jul 10, 2025) https://www.anthropic.com/candidate-ai-guidance
  - Applications: write the first draft yourself, then you may refine it with Claude.
  - **Take-home assessments:** "Complete these without Claude unless we indicate otherwise."
  - **Live interviews:** "This is all you–no AI assistance unless we indicate otherwise."
  - Prohibited: inventing experiences, and having Claude write assessment code unless permitted.
  - AI use for interview preparation is encouraged.
  - The page does not list stages, languages or round content.
- **Careers page:** "All interviews are conducted over Google Meet"; technical candidates use live coding tools. Lists values such as "Do the simple thing that works" and "Be helpful, honest, and harmless". Skills over credentials. https://www.anthropic.com/careers

### Reported formats [CAND]
- **interviewing.io Anthropic guide** (undated, references Oct 2026 events; mid/senior focus) https://interviewing.io/anthropic-interview-questions
  - Stages: a 30-min recruiter call (mission fit), then a **60–90 min CodeSignal assessment**, then a 4–5 h onsite. The CodeSignal task has progressive levels unlocked by black-box tests, with an intentionally ambiguous spec.
  - Onsite: hiring manager, coding, system design, a second role-specific coding round, and **company values**. Recruiters reportedly say values is where most candidates fail.
  - Coding is practical and build-from-scratch in shared Python; concurrency recurs; no ML background is needed for SWE.
  - System design often involves LLM-serving topics (batching, queuing).
  - An AI-assisted interview pilot is reported.
- **aced.io Anthropic FDE guide** (updated 2026; per-question dates "6 months ago / a year ago"; no loop sample size) https://www.aced.io/guides/anthropic-forward-deployed-engineer-interview
  - Rounds: recruiter, a **technical use-case screen** (MCP, long context), multi-stage practical CodeSignal coding, hiring manager, **solution design** (a customer scenario: API design, batching, security/compliance), and behavioral + values.
  - No AI in live rounds unless stated.
- **Glassdoor (via search snippet only, not opened)**: a March 2026 FDE/Applied AI report describes a recruiter screen plus further rounds, with no offer. Treat as one anecdote.

### Proposed roles
Software Engineer and Forward Deployed Engineer, both marked **experienced hires only, no entry-level postings**. AI Engineer (Applied AI Engineer) and Applied AI Architect, experienced only.

### Categories for Software Engineer, priority order
1. **Practical coding and debugging**: reported progressive CodeSignal and build-from-scratch rounds [CAND].
2. **Python**: reported shared Python environment; Python appears in nearly every posting [CAND+JOB].
3. **Coding problems / DSA**: a practical framing is reported, but DSA fundamentals underpin it [CAND/ED].
4. **System design**: reported onsite round [CAND].
5. **Behavioral (values)**: company values round reported; official values published [OFF+CAND].
6. **Operating systems** (concurrency/threads): reported as recurring; keep at Working depth [CAND].
7. **OOP / low-level design**: implied by build-from-scratch tasks [ED].
8. **AI-assisted coding**: default is no AI unless stated, with a pilot reported; prepare both modes [OFF+CAND].
9. **Job description analysis**: senior-weighted postings [ED].

**FDE** adds AI engineering (prompting, agents, MCP, evals), AI system design and customer-facing scenarios.

### Evidence gaps
- No official stage list.
- No entry-level SWE postings, so a new-grad path cannot be built on evidence.
- FDE loop reports are inconsistent between aggregators.

---

## 3. Perplexity

### Titles found [JOB]
All technical staff use the title **"Member of Technical Staff" (MTS)** (official portal).
- **MTS (Software Engineer, …)**: about 30 postings. Stated minimums are mostly 4–5+ (range 2–7+).
- **Entry level: yes.**
  - **MTS (New Grad)** general portal, published 2026-09-29. It reads "APPLICATIONS CLOSED… will reopen… in 2027". It routes focus-school applicants to school portals. Non-focus-school applicants "typically" need a "GPA of ≥3.92, averaged across all CS and Math classes" and "Grade of A or A+ in… upper-level algorithms", or otherwise "evidence of exceptional ability". https://jobs.ashbyhq.com/Perplexity/5a4cec8b-5688-497c-a5ec-884f75d09511
  - **MTS, AI Products (Early Career – Industry)**, published 2026-09-23. It asks for "1+ years of professional software engineering experience, or a track record of strong internships", Python or Go, APIs and relational modelling, and React + TypeScript. It expects candidates to "use agents and coding models aggressively" with "sound judgment about when their output is wrong". New grads are told not to apply. https://jobs.ashbyhq.com/Perplexity/daa9120e-94ff-46e0-b4bd-4d2d290cb409
  - Internships (Belgrade/London search backend and ML) and a Research Fellowship.
- **Applied AI Engineer**:
  - MTS (Software Engineer, Applied AI): 5+ yrs; LLM memory, retrieval and ranking, evals, A/B testing. https://jobs.ashbyhq.com/Perplexity/3c656963-876a-458d-bca6-916a42a24c1a
  - MTS (Applied AI Engineer, Agent Capabilities): "Typically 6+ years". https://jobs.ashbyhq.com/Perplexity/5c561bd0-c180-4ee1-b079-647f3c20bdc0
- **Applied AI Architect, Perplexity Computer**: "5+ years in a customer-facing technical role such as solutions architecture, senior sales engineering, AI implementation, forward deployed work…". The role covers presales, demos and proofs of value, plus hands-on configuring and prototyping. https://jobs.ashbyhq.com/Perplexity/4fba58de-a168-4948-9d82-a7d4b38f45f2
  - Also MTS (Cybersecurity Solutions Architect).
- **Forward Deployed Engineer: no postings found.**

### Official process [OFF] (the most detailed of the three)
**Overview** https://www.perplexity.ai/hub/careers/interview-guide
- Stages: application, then phone screen, then a technical assessment ("standard technical programming interview"), then an onsite of "4-5 interviews, including a deep dive with a hiring manager" plus a founder/leader round. Team matching happens during the onsite.
- "No experience with building AI products is expected, but knowledge of how to use AI is required." Candidates are told to use Perplexity itself.

**Portal** https://interviewresources.perplexity.ai/
- Rounds: Practical Assessment, Hands-on Coding, Spike Round, Agentic Coding, System Design, Core Expertise, and ≥1 non-technical round.
- Each role uses a subset, and swap requests are not accepted.
- AI overlay or second-screen tools are treated as cheating.

**Hands-on Coding** (/hands-on-coding/)
- 30–60 min in shared CodeSignal.
- "We strongly recommend Python"; C++, Go and TypeScript are OK; Java is "strongly discouraged".
- Practical: "building practical components and abstractions". It expects containers, sorting/searching, graph traversal and **OOD**. It does **not** expect DP, esoteric data structures or advanced graph algorithms.
- No AI, except documentation and asking about library usage.

**Practical Assessment** (/practical-assessment/): 45–90 min online in CodeSignal, with the same no-AI rule.

**Agentic Coding** (/agentic-coding/): asynchronous (3 h) or synchronous (60–120 min) and "requiring the use of frontier coding agents". It is judged like Hands-on Coding with "higher expectations for scope, depth, and quality".

**Spike Round** (/spike-round/instructions/)
- Up to 9 h, a self-defined project built in your own stack. "absolutely no restrictions" on AI, and "Ineffective use of AI will result in a negative assessment".
- Deliverables: repo, README and a 10–20 min recap. Up to $750 in tool costs is reimbursed.
- Criteria: scope, judgment, functionality, tool use, code quality/docs, communication.

**System Design** (/system-design/)
- 45–60 min, whiteboard or CodeSignal.
- Assessed: framing, requirements, architecture fit ("not a memorized template"), scaling, trade-offs, adaptability.
- "Complexity ≠ quality."

**Core Expertise** (/core-expertise/)
- **Explicit seniority split.** Early-career candidates ("haven't worked closely yet on large-scale production systems") choose from "at least four" CS / applied-math disciplines, with problems of 25–50 min each. Algorithms is noted as having the lowest pass rate.
- Experienced candidates get a recruiter-named domain and a deep dive into their own work.

### Reported formats [CAND]
- **Glassdoor (search snippets only; pages 403)**:
  - May 2026: a machine-coding round on a real-world problem with 5 parts.
  - Another 2026 report: 2 coding rounds, 1 system design and an HM deep dive.
- **1point3acres** (Jan–Mar 2026): a SWE onsite covering coding, system design and debugging. The thread is login-gated, so details are unreadable. https://www.1point3acres.com/interview/thread/1175318
- No candidate write-ups were found describing the Spike or Agentic rounds.

### Proposed roles
- **Software Engineer**: MTS. New-grad route plus an early-career-industry route; note the strict eligibility filters.
- **AI Engineer**: experienced.
- **Applied AI Architect**: experienced; treat as Solutions Architect.
- No FDE.

### Categories for Software Engineer, priority order
1. **Practical coding and debugging**: official Hands-on Coding / Practical Assessment [OFF].
2. **Python**: officially "strongly recommend" [OFF].
3. **Data structures and algorithms**: official list (containers, sort/search, graph traversal); Core Expertise for early career; no DP [OFF].
4. **OOP / low-level design**: officially expected knowledge [OFF].
5. **AI-assisted coding**: official Agentic Coding and Spike rounds; "knowledge of how to use AI is required" [OFF].
6. **Projects and take-homes**: the Spike Round is a 9 h project [OFF].
7. **System design**: official round [OFF].
8. **Behavioral**: non-technical and HM deep-dive rounds [OFF].
9. **Backend, APIs, SQL, React/TypeScript**: Early Career–Industry posting requirements (job evidence only) [JOB].
10. **Job description analysis**: the early-career eligibility filters are critical [ED].

### Evidence gaps
- Which rounds new grads actually get is not stated (the recruiter assigns them).
- No candidate reports on the agentic or spike rounds.
- The new-grad portal is closed until 2027.

---

## 4. FDE vs Solutions Engineer/Architect (posting-based) [JOB]

| | Forward Deployed Engineer | Solutions Engineer / Applied AI Architect |
|---|---|---|
| Sales stage | Post-sales delivery. Anthropic: "Working closely with our Post-Sales…" | Pre-sales to adoption. Anthropic: "Pre-Sales architect"; OpenAI: "pre-sales discovery… through deployment" |
| Core output | Production code on the customer's infrastructure. OpenAI: "coding side-by-side… on their infrastructure"; Anthropic: "MCP servers, sub-agents, and agent skills" | Technical strategy, demos, proofs of value, evals, architecture, account plans. OpenAI: "CTO of your book of business" |
| Background asked | Full-stack / SWE years. OpenAI US FDSWE 7+, elsewhere 5+; Anthropic 4+ | Customer-facing technical years (SA, sales engineering), 3–5+. Anthropic Startups also asks for a selling track record |
| Coding weight | High: build and ship | Moderate: "can prototype"; Python/JS familiarity |
| Travel | 25–50% | Not emphasized |

- **Applied AI Engineer** sits between the two: hands-on build plus advisory work on the customer's own product (Anthropic Enterprise, OpenAI Enterprise).
- Perplexity has no FDE. Its Applied AI Architect blends SA with hands-on configuration.

**Implication [ED]:**
- No company posts an entry-level FDE or SA role (minimum 3–7 yrs).
- If the site adds these roles, present them as *targets after professional experience*, using the existing eligibility-warning pattern.

---

## 5. Proposed new categories [ED]
- **AI engineering (LLMs, RAG, agents, evals):** justified for the FDE and AI Engineer roles. Every FDE, Applied AI Engineer and Architect posting at all three companies names prompting, agents, evals, retrieval or MCP. Interview evidence is third-party only (aced.io: use-case screen, LLM-focused design). Not justified as Essential for entry-level SWE: OpenAI's Emerging Talent posting says "direct experience not required", and Perplexity says "No experience with building AI products is expected".
- **AI system design:** justified as Conditional for FDE and AI Engineer. Reported in FDE loops (LLM deployment, batching, evals) and in Anthropic SWE system design (LLM serving) [CAND only]. No official confirmation.
- **Customer-facing scenarios:** justified for FDE and Applied AI Architect only. Posting duties are pervasive; interview evidence is third-party (solution design, customer-scenario rounds).
- **AI-assisted coding (existing):** upgrade to high priority for Perplexity (officially required in the Agentic and Spike rounds) and for OpenAI (officially "varies by interview"). Anthropic is the opposite: the default is no AI.

## 6. Seniority evidence
- **Perplexity: meaningful official evidence.**
  - Core Expertise differs explicitly for early career vs experienced candidates.
  - The new-grad route has published GPA/algorithms-grade filters.
  - A separate early-career-industry posting (1+ yrs) exists.
- **OpenAI: third-party only.** The official guide makes no split. One aced.io guide reports that new-grad loops lean algorithmic/OOP, while experienced loops add system design, a presentation and an agentic round. There is one 0–1 yr posting.
- **Anthropic:** no entry-level roles, so no basis for a new-grad path.

---

## Sources

| URL | Type | Checked | Supports |
|---|---|---|---|
| https://openai.com/interview-guide/ | OFF | 2026-11-27 | OpenAI stages, criteria, AI "varies by interview" |
| https://openai.com/careers/ | OFF | 2026-11-27 | Emerging talent, residency |
| https://openai.com/residency/ | OFF | 2026-11-27 | 2026 residency closed (via search snippet) |
| https://api.ashbyhq.com/posting-api/job-board/openai | JOB | 2026-11-27 | 875 postings, titles, years tallies |
| https://jobs.ashbyhq.com/openai/55150071-fce8-48f5-aea4-14ed78b83511 | JOB | 2026-11-27 | Emerging Talent 0–1 yrs, JS/React/Python/SQL |
| https://jobs.ashbyhq.com/openai/00207abc-49b7-465c-a219-f7c1140f8047 | JOB | 2026-11-27 | FDSWE SF 7+ yrs, duties |
| https://jobs.ashbyhq.com/openai/b40efa93-da3c-4593-bc98-03d203cd0488 | JOB | 2026-11-27 | FDE Dublin 5+ yrs |
| https://jobs.ashbyhq.com/openai/01091aed-427d-4e10-8cdb-fb500cf55bb9 | JOB | 2026-11-27 | Applied AI Engineer, Enterprise requirements |
| https://jobs.ashbyhq.com/openai/71e7252f-abb1-4b74-8e69-318413042357 | JOB | 2026-11-27 | Applied AI Engineer, Startups 5+ |
| https://jobs.ashbyhq.com/openai/98a36c10-3497-4955-9cc0-a6f211e4dc1b | JOB | 2026-11-27 | Applied AI Architect duties |
| https://jobs.ashbyhq.com/openai/eb3b695e-6c60-4875-b8bc-8f4d5d8a9bbb | JOB | 2026-11-27 | Ads Solutions Engineer 5+ |
| https://interviewing.io/openai-interview-questions | CAND | 2026-11-27 | OpenAI loop, agentic beta round |
| https://www.aced.io/guides/openai-software-engineer-new-grad-interview | CAND | 2026-11-27 | New-grad OA, OOP round (10 experiences) |
| https://www.aced.io/guides/openai-forward-deployed-engineer-interview | CAND | 2026-11-27 | OpenAI FDE loop (2 experiences) |
| https://www.anthropic.com/candidate-ai-guidance | OFF | 2026-11-27 (page dated 2025-07-10) | No AI in take-homes or live interviews unless stated |
| https://www.anthropic.com/careers | OFF | 2026-11-27 | Google Meet, live coding tools, values, no internships |
| https://boards-api.greenhouse.io/v1/boards/anthropic/jobs?content=true | JOB | 2026-11-27 | 634 postings; 80/92 SWE titles senior or above |
| https://job-boards.greenhouse.io/anthropic/jobs/5423029008 | JOB | 2026-11-27 | FDE 4+ yrs, MCP/agents |
| https://job-boards.greenhouse.io/anthropic/jobs/5057647008 | JOB | 2026-11-27 | Applied AI Engineer 4+ yrs |
| https://job-boards.greenhouse.io/anthropic/jobs/5192805008 | JOB | 2026-11-27 | Applied AI Architect = pre-sales |
| https://job-boards.greenhouse.io/anthropic/jobs/5406982008 | JOB | 2026-11-27 | Architect Startups 3+ yrs, selling |
| https://job-boards.greenhouse.io/anthropic/jobs/4981828008 | JOB | 2026-11-27 | SWE Research Tools 5+ |
| https://job-boards.greenhouse.io/anthropic/jobs/5183051008 | JOB | 2026-11-27 | Fellows Program (research, not SWE) |
| https://interviewing.io/anthropic-interview-questions | CAND | 2026-11-27 | CodeSignal levels, onsite, values round |
| https://www.aced.io/guides/anthropic-forward-deployed-engineer-interview | CAND | 2026-11-27 | Anthropic FDE rounds |
| https://www.perplexity.ai/hub/careers/interview-guide | OFF | 2026-11-27 | Perplexity stages; AI knowledge required |
| https://interviewresources.perplexity.ai/ (and subpages listed above) | OFF | 2026-11-27 | Round types, languages, AI rules, early-career split |
| https://interviewresources.perplexity.ai/spike-round/instructions/ | OFF | 2026-11-27 | 9 h project, unrestricted AI |
| https://api.ashbyhq.com/posting-api/job-board/perplexity | JOB | 2026-11-27 | 150 postings |
| https://jobs.ashbyhq.com/Perplexity/5a4cec8b-5688-497c-a5ec-884f75d09511 | JOB | 2026-11-27 | New grad: closed until 2027, GPA/algorithms filter |
| https://jobs.ashbyhq.com/Perplexity/daa9120e-94ff-46e0-b4bd-4d2d290cb409 | JOB | 2026-11-27 | Early Career–Industry 1+ yrs |
| https://jobs.ashbyhq.com/Perplexity/3c656963-876a-458d-bca6-916a42a24c1a | JOB | 2026-11-27 | Applied AI 5+ |
| https://jobs.ashbyhq.com/Perplexity/4fba58de-a168-4948-9d82-a7d4b38f45f2 | JOB | 2026-11-27 | Applied AI Architect 5+ |
| https://www.1point3acres.com/interview/thread/1175318 | CAND | 2026-11-27 | Login-gated; only summary visible |
| Glassdoor Perplexity/Anthropic review pages | CAND | 2026-11-27 | **Not readable (403)**; only search snippets used, flagged above |
