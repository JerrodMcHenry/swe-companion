# R4 — Entry-level backend and full-stack engineering

Status: draft for product-owner review. Research date (all sources accessed): **2026-11-25**. Nothing in this report has been published to the application.

Same evidence rules as R1–R3: **[Official]** employer-published; **[Candidate]** candidate-reported (aggregators may rewrite or combine reports); **[Third-party]** indexes, mirrors, unofficial guides; **[Editorial]** our recommendation. "Not observed" ≠ "not assessed". **Job postings establish eligibility and job expectations, not interview content.** Observed interview formats indicate presence, not statistically established prevalence. All curriculum recommendations and readiness criteria are **editorial**.

---

## 1. Research methodology

**Scope.** Junior and entry-level backend and full-stack software engineers, and early-career generalist SWE roles with backend or full-stack responsibilities; US first, Bay Area where available.

**Sampling.**

1. Used a public, daily-maintained new-grad job index (SimplifyJobs "New-Grad-Positions", GitHub, accessed 2026-11-25; 329 open software roles) as a **sampling frame only**, selecting US roles whose titles indicate backend, full-stack, web, API or product engineering.
2. Retrieved each selected posting from the **employer's own job board** (Ashby, Greenhouse, SmartRecruiters, Workable APIs; Workday and TikTok pages in a browser). Index metadata was not used as evidence.
3. Added relevant generalist new-grad postings already verified in R3 (Notion, Stripe, Pinterest, DoorDash, Scale AI, Verkada, Affirm ×2).
4. Scanned 30 further company job boards for entry-level backend/full-stack roles (most had none; §3.4).
5. Counted technology and practice mentions across the sample (mention anywhere in the posting text; see limitations).
6. Read official interview guidance and 2025–2026 candidate reports; reused R1–R3 interview evidence instead of re-collecting it.

**Sample.** 28 postings: backend 6, full-stack 15, frontend-leaning web 2, generalist new grad 5. 27 US-only; 1 remote role also open to Canada (Quora). Bay Area 10, New York 3, Boston area 4, remote US 8, other US 3 (Raleigh, Denver/Long Beach, multi-city DoorDash).

---

## 2. Verified source inventory

All accessed 2026-11-25. Posting URLs are in Appendix A.

### Official

| # | Source | URL | Publisher | Date | Findings | Limitations |
|---|---|---|---|---|---|---|
| O1 | Our Philosophy on AI in Hiring | https://www.pinterestcareers.com/candidate-hub/our-philosophy-on-ai-in-hiring/ | Pinterest | Current | Interviews screen individual skills **and** AI fluency. In designated parts (e.g. a take-home or a section of a live technical screen) candidates are invited to use AI and are assessed on judgment, prompting, reviewing AI suggestions and owning the outcome. **For any live question, assume AI is not permitted unless told otherwise.** The new-grad posting says candidates must always explain their approach | One employer |
| O2 | EQL Tech (recruiter) — Founding Full Stack Engineer posting, "How they hire" | https://apply.workable.com/eqltech/j/E001CE3E7F/ | EQL Tech for an unnamed startup | Posted 2026-03-09 | Founder intro → CTO technical deep dive → **take-home built from a real problem, presented on a whiteboard** → **short paid work trial** in the office | Recruiter-posted; client unnamed; 0–5 years |
| O3 | Postings with explicit job expectations (Appendix A) | — | Employers | 2026 | e.g. State Street junior API engineer: REST, HTTP, JSON, SQL, OOP/design patterns, Git, unit/integration/API tests, OAuth 2.0/JWT (to learn), logging/monitoring, code and design reviews; Chewy SWE I: React plus backend APIs, unit and integration tests, debugging, production root-cause analysis, monitoring | Eligibility/job content, not interview content |
| R1–R3 | Official guidance from Google, Amazon, Meta, Microsoft, Capital One, JPMorgan, GitLab, Stripe, early-stage startups | See R1–R3 | — | — | Reused (AI policies, practical rounds, testing expectations, OOD) | — |

### Candidate-reported (FastPrep unless noted; reused R3 items marked)

| # | Report | URL | Date | Findings | Limitations |
|---|---|---|---|---|---|
| C1 | Klaviyo SWE intern interviews (15 experiences; 5 current) | https://www.fastprep.io/experience/2021-2026-klaviyo-intern-interviews-ai-engineer-intern-update-14-swe-experiences-tb0w7ynaed | Oct 2024 – Mar 2026 | Practical final rounds: **extend or fix a small Python web app, often with SQL**; web apps/APIs/webhooks in 4 of 5 current reports; **debugging with a SQL-injection check**; behavioral | Internship (adjacent); Boston; aggregated |
| C2 | Wise graduate SWE OA and interviews (14) | https://fastprep.io/experience/2022-2026-wise-graduate-swe-oa-interviews-14-experiences-3r7sysvngq | Oct 2024 – Apr 2026 | OA pairs DSA with a **practical REST data task (fetch, paginate, process)** in 4 of 13; programming MCQs (HTTP methods, code output, complexity) in 1; 60-min **pair-programming final in supplied code** (OAuth token utility) | Mostly UK; aggregated |
| C3 | Accenture new-grad ASE OA (15) | https://www.fastprep.io/experience/accenture-new-grad-sde-oa-interviews-ase-aase-aae-aeh-2025-2026-current-experien-x8g4q1maot | Sep 2025 – Aug 2026 | 60-min coding test with **one DSA, one SQL (joins), one HTML/CSS/JS edit** (SQL and frontend edit in 9 of 10); technical MCQs | **India** campus hiring; not US evidence |
| R3-C1/C2 | Stripe new grad | see R3 | Nov 2026 | Integration (API/JSON), debugging a library, AI coding round | Reused |
| R3-C3 | Notion new grad | see R3 | 2026 | Debugging in an existing React/TypeScript codebase; AI new-grad take-home with design doc | Reused |
| R3-C4 | Scale AI new grad | see R3 | 2026 | Coding, debugging, **backend practical**, values, HM | Reused |
| R3-C5–C7 | Decagon, Plaud, xAI new grad | see R3 | 2026 | Basic system design and AI-assisted building in some loops | Reused |
| R3-C8/C9 | Capital One TDP | see R3 | 2026 | Technical case reading business logic and debugging; agentic Claude Code bug fix + feature | Reused |
| R2-AP5 | Apple new grad | see R2 | 2026 | Nine rapid-fire Java fundamentals questions | Reused; Apple only |

Searches for US new-grad backend reports describing a dedicated SQL round returned none accessible; this is noted as a gap (§14).

---

## 3. Job posting sample and qualification findings

### 3.1 Experience classification (n = 28)

| Class | Count | Examples |
|---|---|---|
| New grad (explicit) | 16 | Quora, SpruceID, Brain Co., Composio, True Anomaly, C3 AI, Bask Health ×2, TikTok, Mirantis, Notion, Stripe, Pinterest, DoorDash, Scale AI, Verkada |
| Genuine junior / 0–2 years | 8 | Bridger, Bags, Bask Health ×2 (junior), Sonos, Chewy, State Street, PathAI (SWE I) |
| Junior-labelled but substantial experience | 2 | Affirm SWE I ×2 (prior experience launching backend systems at scale) |
| Broad range incl. entry | 1 | EQL Tech client (0–5 years, founding role) |
| Misleading index listing | 1 | Jampack AI "Founding Product Engineer" (listed as new grad by the index; posting requires 4+ years) — **not counted as entry-level evidence** |

### 3.2 Qualification patterns [Official — postings]

- **Degree:** most require or prefer a CS-related degree; many accept equivalent experience (State Street explicitly counts internships, bootcamps or personal projects).
- **Internships / shipped projects:** commonly preferred; several require a project the candidate can walk through in detail (Mirantis must-have; Composio "built full-stack projects from scratch"; EQL "apps in production").
- **Fundamentals still listed:** DSA in 11/28; database fundamentals (TikTok, Chewy); OOP/design patterns (State Street, PathAI).
- **Learning signals:** many postings emphasise learning unfamiliar systems, reading source code and accepting rigorous review (Mirantis, Chewy, Stripe).
- **AI-assisted development with verification:** explicit wording about understanding and validating generated code in 6/28 (Bask Health ×3, Pinterest, DoorDash, State Street-style review language); AI tools or LLMs mentioned in 21/28 (includes product-description mentions).

### 3.3 Technology mentions (any mention in posting text, n = 28)

| Category | Mentions |
|---|---|
| Languages | **TypeScript 19**, JavaScript 16, **Python 13**, Java 8, Go 8, C#/.NET 3, Kotlin 3, Rust 2, Ruby 1, Elixir 1 |
| Frontend | **React 18**, Next.js 7, HTML/CSS 6, Angular/Vue 2, Tailwind 2 |
| Backend frameworks | Node.js 6, Spring 3, FastAPI/Django/Flask **1** (PathAI), Rails 0 |
| Data | **SQL/relational 15**, PostgreSQL 6, MySQL 4, Redis 3, ORM (Prisma/Drizzle etc.) 3, MongoDB 2 |
| APIs | **REST/HTTP/API 18**, auth (OAuth/JWT/authentication/authorization) 6, GraphQL 2, gRPC 1 |
| Practices | **Testing 17**, **code review 15**, logging/monitoring/observability 12, security 11, Git 10, debugging 8, CI/CD 8, accessibility 4 |
| Infrastructure | Cloud (AWS/GCP/Azure) 9, distributed systems 7, Kubernetes 5, message queues 4, Docker 3, microservices 3, serverless 3 |

Observations:

- **Frontend-capable full-stack roles converge on TypeScript + React.** No other frontend framework is close.
- **Backend languages vary widely** (Python, TypeScript/Node, Java, Go, C#). Specific backend frameworks are rarely required; FastAPI/Django appears once.
- **SQL and REST are the most consistent backend requirements**, followed by testing and code review.
- Kubernetes, message queues and microservices appear mostly as preferred skills or job duties, not requirements.

### 3.4 Availability

Of 30 additional company boards scanned for US entry-level backend/full-stack roles, almost all had none (e.g. Toast, Grafana Labs, Klaviyo, Spotify, Samsara, HubSpot, Oscar, Carta). Entry-level backend/full-stack openings cluster in structured new-grad programs and in small startups, consistent with R3.

---

## 4. Backend engineering findings

- **Core eligibility signals:** one backend language (any mainstream one), REST APIs and HTTP, SQL and relational databases, Git, testing; State Street's junior API role adds JSON, OOP/design patterns, OAuth 2.0/JWT (to learn), logging/monitoring and code reviews; TikTok's graduate backend role adds networking/OS/database fundamentals and basic indexing.
- **Job expectations:** build and maintain APIs and services; write unit/integration/API tests; debug and investigate production issues; participate in code review; document APIs; follow secure coding; use CI/CD pipelines that already exist.
- **Interview evidence (backend-relevant):** integration/API tasks (Stripe; Wise REST data task, mostly UK), backend practical from an existing repository (Scale AI), Python web app extension with SQL (Klaviyo, internship), debugging (several), DSA in OAs and screens (R1–R3). Dedicated SQL rounds were observed in Accenture India and an internship loop, **not** in accessible US new-grad backend reports.
- **Deeper requirements appear only in team-specific roles:** Go + Kubernetes (Mirantis, as nice-to-haves), Elixir/OTP (True Anomaly), streaming infrastructure and MySQL/Kubernetes (Affirm, junior-labelled).

## 5. Full-stack engineering findings

- **Core eligibility signals:** TypeScript/JavaScript, React, HTML/CSS, consuming and building APIs, a database (usually SQL), Git, testing, and evidence of shipping a working app.
- **Job expectations:** build UI components and backend endpoints end to end; integrate third-party APIs; handle authentication/authorization best practices; improve responsiveness and accessibility; debug across frontend and backend; write tests; instrument code; participate in reviews; deploy via the team's pipeline; use AI tools while validating output (Bask Health; Chewy; Sonos).
- **Startup full-stack roles emphasise product sense and shipping** (Composio, Bridger, Bags, EQL); established/enterprise roles emphasise testing, reviews and production reliability (Chewy, Sonos, PathAI).
- **Interview evidence:** debugging in existing React/TypeScript code (Notion), frontend + API app building (Klaviyo, internship), take-homes and work trials (EQL; R3 startups), HTML/CSS/JS edits (Accenture India).
- **Accessibility** appears in 4/28 postings (mostly as an interest or responsibility); **frontend testing tools** are named only occasionally (True Anomaly: Jest, Vitest, React Testing Library).

---

## 6. Official interview guidance and candidate-reported experiences

Evidence for each interview type relevant to backend/full-stack roles (US unless stated):

| Interview type | Evidence | Strength |
|---|---|---|
| Rapid-fire language-specific questions | Apple Java fundamentals (R2); Wise programming MCQs (UK); Accenture MCQs (India) | **Weak in US** outside isolated cases |
| DSA coding | Big Tech (R1–R2), Capital One OA, Stripe/Decagon screens (R3); DSA listed in 11/28 postings | **Strong** |
| OOP / low-level design | Amazon OOD (R2 official); parser/ledger tasks (Stripe, R3); OOP listed in postings | Medium |
| SQL assessments | Accenture India (9/10), Klaviyo internship (Python + SQL), Wise (1/13) | **Weak for US new-grad backend**; SQL is strongly required on the job |
| API design / integration | Stripe integration rounds; Wise REST task; Klaviyo API/webhooks; Scale AI backend practical | Medium |
| Debugging | Stripe, Notion, Scale AI, Capital One, Klaviyo | **Strong (outside Big Tech)** |
| Code review assessments | GitLab merge-request review (official, non-entry) | Weak at entry level |
| Practical coding assignments | Scale AI backend practical, Klaviyo app extension, Capital One agentic round | Medium–strong |
| Take-home projects | EQL (official), Corelayer (official, R3), Notion AI, xAI (R3) | Medium (startups) |
| Project architecture discussions | Mirantis must-have; EQL CTO deep dive; Decagon deep dive | Medium |
| Basic system design | Decagon, Plaud, xAI new grad (R3) | Low–medium |
| Behavioral | All segments | Strong |
| AI-assisted coding assessments | Pinterest (official, designated sections), Capital One agentic, Stripe AI round, Meta (R2) | **Strong and growing** |

---

## 7. Comparative competency matrix

**[Editorial ratings from the evidence.]** Interview relevance: H/M/L/NO (not observed). Prof. = professional relevance at entry level. BE = backend, FS = full-stack.

### Backend competencies

| # | Competency | Interview | Prof. | Entry depth | Representative tasks / formats | Evidence | Role differences | Confidence | Deeper when… |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Programming language proficiency | H | Essential | Master (core subset) | DSA screens; practical builds | R1–R3; all postings | Language varies by employer | High | Team uses a language you don't know |
| 2 | Language-specific technical questions | L (US) | Working | Explain | Short concept questions | Apple (R2); Wise/Accenture (non-US) | Java-heavy enterprises more likely | Low | Targeting Apple/Java enterprise roles |
| 3 | DSA | H | Working | Implement–Master | OAs, phone screens | R1–R3; 11/28 postings | Higher at Big Tech/structured programs | High | Big Tech targets |
| 4 | OOP and SOLID | M (OOP) / L (SOLID) | Essential (OOP) / Working (SOLID) | Implement OOP; Recognize SOLID | Class design, LLD | Amazon (R2); State Street, PathAI | Java/C# enterprises stress design patterns more | Medium | Enterprise Java/.NET roles |
| 5 | HTTP and REST APIs | M | **Essential** | Implement | Integration tasks; build endpoints | 18/28; Stripe, Wise, Klaviyo | Universal for BE/FS | High | API platform roles (versioning, gateways) |
| 6 | Request/response lifecycle | M | Essential | Explain | Trace a request through middleware, handler, DB, response | Implied by API/debugging tasks | — | Medium | Performance/infrastructure work |
| 7 | Input validation and error handling | M | Essential | Implement | Edge cases in practical tasks; API error responses | Amazon "no bad input" (R2); integration tasks | — | Medium | Public APIs, regulated domains |
| 8 | Relational databases and SQL | M (L in US interviews) | **Essential** | Implement (CRUD, joins, aggregation, indexes basics) | Queries in practical tasks | 15/28 postings; Klaviyo; Accenture (India) | Essential BE; working FS | High (job) / Low (interview) | Data-heavy or performance roles |
| 9 | Data modeling | L–M | Essential | Implement (tables, keys, relations for a small domain) | Schema for a project; design discussions | Postings; R3 design rounds | — | Medium | Complex domains, analytics |
| 10 | ORM fundamentals | NO | Working | Recognize–Implement (one ORM) | Use within project | 3/28 (Prisma, Drizzle etc.) | Stack-specific | Medium | Team's stack uses one heavily |
| 11 | Authentication and authorization | L | Essential (concepts) | Explain sessions/tokens, OAuth/JWT basics; Implement basic auth in a project | Project; Wise OAuth task (UK) | 6/28; State Street, Bask | — | Medium | Security/identity roles (SpruceID) |
| 12 | Testing and debugging | H | **Essential** | Implement | Debugging rounds; write tests | 17/28 testing; R3 debugging rounds | Universal | High | — |
| 13 | Git and collaborative workflows | L | **Essential** | Implement (branches, PRs, reviews, conflicts) | PR workflow in project | 10/28 Git; 15/28 code review | — | High | — |
| 14 | Application security fundamentals | L | Essential (basics) | Explain OWASP-style basics (injection, auth, secrets); Implement in project | SQL-injection debugging (Klaviyo) | 11/28 | Higher in fintech/health/gov | Medium | Security-sensitive domains |
| 15 | Logging and monitoring | NO | Working | Implement structured logging; Recognize metrics/alerts | Instrument a project | 12/28 | Higher in enterprise/scaleups | Medium | On-call/production ownership |
| 16 | Deployment and containers | L | Working | Implement one simple deploy; Recognize Docker; defer Kubernetes | Deploy project | Cloud 9/28, Docker 3/28, K8s 5/28 (mostly preferred) | Startups expect owning deploys | Medium | Infra/platform roles |
| 17 | Concurrency and async | L | Working | Explain basics (async I/O, race conditions); Implement simple async endpoints | — | Rarely named; TikTok "high-concurrency" preferred | Higher in Go/Java infra roles | Low | Infra, high-throughput backends |
| 18 | Practical application architecture | M | Essential | Explain layering (routes/handlers, services, data access), trade-offs | Project deep dives; take-home defence | Mirantis, EQL, Decagon | — | Medium | Mid-level |
| 19 | AI-assisted engineering and verification | **H** | **Essential** | Implement (direct, review, test AI output) and work without AI | Designated AI sections; agentic rounds | Pinterest (O1); Capital One; 6/28 explicit | Universal trend | High | — |

### Full-stack additions

| # | Competency | Interview | Prof. | Entry depth | Representative tasks / formats | Evidence | Confidence | Deeper when… |
|---|---|---|---|---|---|---|---|---|
| F1 | HTML and CSS | L–M | Essential | Implement (semantic HTML, layout, responsive basics) | UI edits; take-homes | 6/28; Sonos, True Anomaly; Accenture (India) | Medium | Frontend-specialist roles |
| F2 | JavaScript and TypeScript | M | **Essential** | Implement (TS types, async/await, modules) | Debugging React/TS code | TS 19/28, JS 16/28 | High | — |
| F3 | Browser and DOM fundamentals | L | Working | Explain (DOM, events, network tab, dev tools) | Debugging with dev tools | Bask (browser dev tools) | Low–medium | Frontend performance roles |
| F4 | Frontend framework | M | **Essential** | Implement in **one** framework (React) | Build/debug components | React 18/28 | High | Team uses Vue/Angular |
| F5 | Components, state and props | M | Essential | Implement | Feature in existing React code | Notion debugging (R3) | Medium | Complex state management |
| F6 | Forms and input validation | L–M | Essential | Implement (client + server validation) | Take-home features | Implied by product roles | Medium | — |
| F7 | API integration | M–H | Essential | Implement (fetch, errors, auth headers) | Weather-API app (Klaviyo), integration rounds | Postings; C1, C2 | Medium | — |
| F8 | Client-server architecture | M | Essential | Explain | Project architecture discussion | Postings; deep dives | Medium | — |
| F9 | Loading and error states | L | Essential | Implement | Take-home quality | Implied (UX-focused postings) | Low | — |
| F10 | Accessibility | L | Working | Implement basics (labels, keyboard, contrast); Recognize WCAG | — | 4/28 | Low | Public-sector/consumer roles |
| F11 | Frontend testing and debugging | M (debugging) / L (testing) | Working–Essential | Implement component tests in one tool; debug with dev tools | Notion debugging | True Anomaly (Jest/Vitest/RTL) | Medium | Frontend-specialist roles |
| F12 | Full-stack deployment | L | Working | Implement one deploy of frontend + API + DB | Show live project | Startups (EQL, Bask "deploying a personal project") | Medium | Startups owning infra |

---

## 8. Minimum effective knowledge depth by competency (summary)

**[Editorial]** Using the CLAUDE.md levels:

- **Master:** one programming language (core subset); DSA core patterns (for structured programs and Big Tech); technical communication.
- **Implement:** HTTP/REST APIs; input validation and error handling; SQL (CRUD, joins, grouping, basic indexes); data modeling for a small domain; testing (unit and API/integration) and debugging; Git/PR workflow; basic auth in a project; structured logging; one simple deployment; OOP; AI-assisted development with verification; for full-stack: TypeScript, React components/state, forms, API integration, loading/error states, HTML/CSS basics, accessibility basics, one frontend test tool.
- **Explain:** request/response lifecycle; application architecture and trade-offs; OAuth/JWT and session concepts; security basics (injection, secrets, access control); concurrency/async basics; client-server architecture; browser/DOM fundamentals.
- **Recognize:** SOLID; Docker beyond basic use; metrics/alerting; ORMs beyond one; CI/CD internals; message queues; microservices; Kubernetes.

---

## 9. Language and framework recommendations

**[Editorial]**

1. **One coherent stack is sufficient** to demonstrate foundational backend or full-stack competence. Employers repeatedly state that fundamentals transfer (Stripe, Roblox in R3; Quora "or the ability to learn quickly"), and specific backend frameworks are rarely required.
2. **Backend:** concepts (HTTP, REST, SQL, testing, auth, logging) matter more than the framework. Python with a lightweight framework (FastAPI is a reasonable instructional choice) plus PostgreSQL demonstrates all backend competencies; Python also matches the apprenticeship's existing language and is a common interview language. Note that FastAPI itself appeared in only 1 of 28 postings, so it should be taught as an example of transferable concepts, not as an employer requirement.
3. **Full-stack:** TypeScript and React are the clear market signal (19 and 18 of 28). A full-stack track therefore requires **TypeScript as a second language** for the frontend; this is justified by the evidence, not by preference.
4. **Two viable stack options, choose one:**
   - **A. Python backend + TypeScript/React frontend** (Python/FastAPI/PostgreSQL + TypeScript/React). Keeps Python as the single DSA/interview language; adds TypeScript only for the frontend.
   - **B. TypeScript end to end** (Node.js + React + PostgreSQL). One language across the stack; matches many startup postings (Node 6, Next.js 7); but a Python-first apprenticeship would then teach two languages anyway.
   Option A fits the existing Python-first curriculum with the least duplication; Option B fits candidates targeting TypeScript-heavy startups. Learners should not do both.
5. **Do not teach competing frameworks** (Django and FastAPI and Flask; React and Vue and Angular). Java/Spring or C#/.NET become relevant only for learners targeting enterprises that require them.

---

## 10. Proposed practical engineering assignments

**[Editorial]** Minimum set: **one portfolio project plus two repeatable exercise types.** No additional portfolio projects are recommended.

### Assignment 1 — One deployed application (portfolio project)

- **Backend track:** a REST API with PostgreSQL covering a small real domain: data model, CRUD and one non-trivial query, input validation and consistent error responses, authentication with protected routes, unit and API tests, structured logging, CI running tests, deployed to a public URL, README with architecture diagram and trade-offs.
- **Full-stack track:** the same API plus a TypeScript/React frontend with forms and validation, loading and error states, basic accessibility, at least a few component tests, deployed end to end.
- **Demonstrates:** build a functional application; explain its architecture and trade-offs; write and run tests; deploy; Git workflow (all changes via pull requests, even when solo); security and logging basics.
- **Evidence of use:** at least a few real users, matching startup expectations (R3, MSPilot, EQL, Mirantis).
- **No-AI vs AI:** the learner must be able to explain and modify every part without AI; AI-assisted portions should be noted in a short "how AI was used and verified" section.

### Assignment 2 — Existing-codebase drills (repeatable, not portfolio)

Using unfamiliar open-source or prepared repositories:

- **2a (no AI):** find and fix seeded defects; add a small feature with tests; time-boxed to 45–60 minutes.
- **2b (AI-assisted):** repeat with an AI coding agent, recording prompts, reviewing every change, rejecting incorrect output and adding tests that prove the fix.
- **2c (review):** review a provided pull request (or an AI-generated change) for correctness, design, tests, security and readability.
- **Demonstrates:** read and modify an existing codebase; diagnose and repair defects; add a feature independently; review AI-generated code; separated no-AI and AI-assisted competence.
- **Evidence:** debugging rounds (Stripe, Notion, Scale AI), agentic rounds (Capital One), Pinterest's designated AI sections, Meta AI-native (R2), GitLab MR review.

### Assignment 3 — Timed integration take-home simulation (repeatable)

- A 3–4 hour build that consumes an external REST API, transforms data, persists it in SQL, exposes one endpoint (and one screen for full-stack), with tests and a README; followed by a 30–45 minute self-recorded or peer defence of decisions.
- **Demonstrates:** API integration, SQL, time-boxed delivery, explaining trade-offs; mirrors take-homes, integration rounds and work trials.

These three cover every capability in the brief's list with minimal duplication.

---

## 11. Proposed interview and engineering readiness criteria

**[Editorial benchmarks — not employer-validated hiring thresholds.]** In addition to the R2/R3 common criteria (DSA, complexity, behavioral, communication):

**Backend readiness**

1. Without AI or references, implement a small REST resource (create, read, update, delete, list with filtering) with validation, error handling and tests in about 60 minutes.
2. Write SQL with joins, grouping and aggregation for a provided schema; explain what an index does and when to add one.
3. Design tables and relationships for a small domain and justify them.
4. Explain the lifecycle of an HTTP request through your application and where authentication, validation and logging happen.
5. Explain how sessions/tokens work and identify common security mistakes (SQL injection, leaked secrets, missing authorization checks).
6. Deploy your project and explain how it is configured, logged and updated.

**Full-stack readiness (backend criteria plus)**

7. Build a React component with a form, client-side validation, API call, and loading/error states in about 60 minutes, without AI.
8. Debug a broken React/TypeScript feature in an unfamiliar codebase using browser dev tools.
9. Explain how the frontend, API and database interact in your project, and what you would change for more users.

**Practical engineering readiness (both)**

10. Complete Assignment 2a within the time box on at least two unfamiliar repositories.
11. Complete Assignment 2b, producing a verification log and catching at least one incorrect AI suggestion.
12. Present Assignment 1 for 20 minutes and answer architecture and trade-off questions.

Stopping point: once these and the common criteria are met, apply; further framework or infrastructure study has diminishing returns for entry-level hiring.

---

## 12. Topics candidates can reasonably defer

**[Editorial]** Foundations stay; advanced implementations can wait.

| Advanced topic | Defer? | Keep the foundation | Becomes necessary when… |
|---|---|---|---|
| Kubernetes administration | **Yes** | Know what containers are; run one Docker container | Infra/platform roles or postings requiring it |
| Complex distributed systems | **Yes** | Client-server, statelessness, basic caching concepts | Infra roles; mid-level system design |
| Microservice orchestration | **Yes** | Why services split; API contracts | Joining a microservice-heavy team |
| Advanced database optimization | **Yes** | Indexes, query plans at a basic level, N+1 awareness | Data-heavy or performance-critical roles |
| Advanced design patterns | **Yes** | OOP, separation of concerns, a few common patterns met in practice | Enterprise Java/.NET roles |
| Deep language internals | **Yes** | Semantics and costs of features you use | Apple-style or systems roles |
| Complex cloud infrastructure | **Yes** | Deploy one app; environment variables; logs | Startups expecting infra ownership; cloud teams |
| Multiple frontend frameworks | **Yes** | One framework (React) well | Target team uses Vue/Angular |
| Multiple backend frameworks | **Yes** | One framework well; HTTP concepts | Target employer mandates a framework (e.g. Spring) |
| Message queues / event-driven systems | Yes | Recognize the concept | Teams using Kafka/RabbitMQ |
| GraphQL, gRPC | Yes | REST first | Team uses them |

---

## 13. Overlap with R1–R3

- **Shared foundation (all segments and roles):** one language to fluency, DSA and complexity for screens, testing and debugging, communication, behavioral stories, reading/modifying existing code, AI-assisted work with verification.
- **Added by backend/full-stack roles:** HTTP/REST, SQL and data modeling, auth basics, logging, deployment, security basics; for full-stack, TypeScript and React.
- **Confirmed from R3:** practical rounds (debugging, integration, take-homes) are where backend/full-stack skills are most directly assessed outside Big Tech.
- **Consistent with R1–R2:** Big Tech entry interviews rarely test SQL, frameworks or deployment directly; these remain job and practical-round competencies.

Conclusion: the shared foundation identified in R2–R3 should remain common; backend and full-stack content should be **role-specific modules layered on top**, delivered mainly through the practical assignments in §10.

---

## 14. Research limitations

- **Sampling frame:** a third-party new-grad index biased toward roles its maintainers list; mostly tech companies; one day's snapshot.
- **Sample size:** 28 postings (27 US-only); backend-titled roles are fewer (6) than full-stack (15).
- **Mention counts are crude:** keyword matches anywhere in the posting, including company descriptions (e.g. "AI" in product descriptions inflates the AI count) and nice-to-haves; they indicate relative frequency, not requirement strength.
- **Interview evidence for backend/full-stack specifically is thin:** much is internship (Klaviyo), non-US (Wise UK, Accenture India) or reused from R2–R3. **No accessible US new-grad backend report described a dedicated SQL round**; whether US entry-level backend interviews assess SQL directly remains uncertain.
- Official guidance specific to backend/full-stack entry-level interviews is scarce (Pinterest's AI policy and one recruiter-posted startup process).
- Workday rate limits restricted enterprise sampling; three Workday postings were read in a browser.
- Observed formats indicate presence, not prevalence.

---

## 15. Implications for the apprenticeship

**[Editorial]** For discussion; no changes made.

1. **Keep a single shared foundation** (language, DSA, testing/debugging, communication, behavioral, AI verification) and add **backend and full-stack as role-specific tracks**.
2. **Backend track core:** HTTP/REST, SQL and data modeling, validation/error handling, auth basics, security basics, logging, one deployment — taught through Assignment 1.
3. **Full-stack track adds TypeScript and React** (justified by the market signal), using one framework only.
4. **Choose one instructional stack** (Option A recommended for a Python-first apprenticeship: Python/FastAPI/PostgreSQL + TypeScript/React). Present FastAPI and React as vehicles for transferable concepts.
5. **Replace many small portfolio projects with one deployed application plus repeatable codebase and take-home drills** (§10).
6. **Make no-AI and AI-assisted practice explicit and separate**, mirroring Pinterest's official model and agentic rounds.
7. **SQL deserves solid Implement-level coverage** for job readiness even though US interview evidence for SQL rounds is weak.
8. **Infrastructure topics (Kubernetes, microservices, advanced cloud) stay deferred**, with "becomes necessary when…" guidance rather than mandatory study.
9. The existing curriculum phases **SQL & Databases, Networking & Internet, Backend Engineering, Frontend Engineering, Testing, Cloud & DevOps** map onto these tracks but are likely over-scoped as standalone phases; R5–R6 should consolidate them into role-specific, assignment-driven modules.

---

## Appendix A — Posting sample (2026-11-25)

| # | Employer | Title | Location | Type | Class | URL |
|---|---|---|---|---|---|---|
| 1 | Quora | Full Stack Software Engineer, New Grad | Remote (US/Canada) | FS | New grad | https://jobs.ashbyhq.com/quora/5494e6a1-a973-46af-b9f3-57208eb91b52 |
| 2 | SpruceID | Full-Stack Software Engineer (New Grad) | Remote US | FS | New grad | https://jobs.ashbyhq.com/spruceid/3d182b7f-482e-45b2-8668-f04f0b5fda8e |
| 3 | Brain Co. | AI Product Engineer, 2027 New Grad | SF Bay Area | FS | New grad | https://jobs.ashbyhq.com/brainco/c1788246-305f-4e4f-8b03-8444c76a466e |
| 4 | Composio | Fullstack Engineer, Product Team (New Grad) | San Francisco | FS | New grad | https://jobs.ashbyhq.com/composio/01e0e7ad-44a2-44e8-9340-64ca70eff491 |
| 5 | Bridger | Early Career Product Engineer | New York | FS | 0–2 years | https://jobs.ashbyhq.com/bridger/5a4a77e4-31a0-40c6-8e3d-9b5c6205943f |
| 6 | Bags | Junior Full Stack Engineer | New York | FS | Junior | https://jobs.ashbyhq.com/bagsfm/012239d1-0c6c-4e87-9cfa-22d8ba4e5cb4 |
| 7 | Jampack AI | Founding Product Engineer | New York | FS | **Misleading listing (4+ years)** | https://jobs.ashbyhq.com/jampack-ai/8668f920-0640-42b9-8bb4-d322c14e97a9 |
| 8 | True Anomaly | Software Engineer I, Full Stack (New Grad) | Denver / Long Beach | FS | New grad (0–2; clearance) | https://job-boards.greenhouse.io/trueanomalyinc/jobs/5092069007 |
| 9 | PathAI | Software Engineer I, Fullstack | Boston | FS | Junior | https://www.pathai.com/careers/8696764002?gh_jid=8696764002 |
| 10 | C3 AI | Platform Full-Stack Engineer, New Grad 2027 | Redwood City | FS | New grad | https://c3.ai/job-description/8801434002?gh_jid=8801434002 |
| 11 | Mirantis | Software Engineer, Backend (Go) | Raleigh | BE | New grad | https://jobs.smartrecruiters.com/Mirantis/744000162186029 |
| 12 | Bask Health | Junior Product Engineer, Interactive Experiences | Remote US | Web/FE | Junior | https://apply.workable.com/bask-health-1/j/7B69E15EFA/ |
| 13 | Bask Health | Junior Full Stack Engineer | Remote US | FS | Junior | https://apply.workable.com/bask-health-1/j/DFC51193B4/ |
| 14 | Bask Health | Product Engineer, New Grad | Remote US | FS | New grad | https://apply.workable.com/bask-health-1/j/E7E44CA0FC/ |
| 15 | Bask Health | Backend Engineer, New Grad | Remote US | BE | New grad | https://apply.workable.com/bask-health-1/j/472CF47F60/ |
| 16 | EQL Tech (client) | Founding Full Stack Engineer | San Francisco | FS | 0–5 years | https://apply.workable.com/eqltech/j/E001CE3E7F/ |
| 17 | Sonos | Junior Software Development Engineer, Web | Boston / Seattle | Web/FE | 0–2 years | https://sonos.wd1.myworkdayjobs.com/Sonos/job/Boston-MA/Junior-Software-Development-Engineer--Web_R2912 |
| 18 | Chewy | Software Engineer I, Full Stack, Promotions | Boston | FS | 0–2 years | https://wd5.myworkdaysite.com/recruiting/chewy/External/job/Boston-MA/Software-Engineer-I--Full-Stack--Promotions_R31442 |
| 19 | State Street | Software Engineer – REST API Development (Junior) | Burlington, MA | BE | 0–2 years | https://statestreet.wd1.myworkdayjobs.com/Global/job/Burlington-Massachusetts/Software-Engineer---REST-API-Development--Officer_R-798140 |
| 20 | TikTok | AI Software Engineer Graduate (PGC, backend) – 2027 Start | San Jose | BE | New grad | https://lifeattiktok.com/search/7672976491146004741 |
| 21 | Notion | Software Engineer, New Grad (Dec 2026) | San Francisco | Generalist | New grad | https://jobs.ashbyhq.com/notion/e32799d2-8ef8-4803-8189-c72514afa816 |
| 22 | Stripe | Software Engineer, New Grad | SF / Seattle / NY | Generalist | New grad | https://stripe.com/jobs/search?gh_jid=8128744 |
| 23 | Pinterest | University Grad Software Engineer 2027 | SF / Remote US | Generalist | New grad | https://www.pinterestcareers.com/jobs/?gh_jid=7838591 |
| 24 | DoorDash | Software Engineer I, Entry-Level | Multiple US | Generalist | New grad | https://job-boards.greenhouse.io/doordashusa/jobs/8163709 |
| 25 | Scale AI | Software Engineer – New Grad | San Francisco | Generalist (FS product) | New grad | https://job-boards.greenhouse.io/scaleai/jobs/4730836005 |
| 26 | Verkada | Backend Software Engineer – University Graduate 2027 | San Mateo | BE | New grad | https://job-boards.greenhouse.io/verkada/jobs/5280545007 |
| 27 | Affirm | Software Engineer I, Fullstack (Search) | Remote US | FS | Junior-labelled, substantial | https://job-boards.greenhouse.io/affirm/jobs/8017340003 |
| 28 | Affirm | Software Engineer I, Backend (Continuous Delivery) | Remote US | BE | Junior-labelled, substantial | https://job-boards.greenhouse.io/affirm/jobs/8181183003 |
