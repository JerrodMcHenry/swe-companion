# Role expansion research: new roles for SWE Companion

Checked: 2026-11-27. Read-only web research. Evidence labels: **[O]** official employer guidance · **[P]** job posting (eligibility/expectations, not interview content) · **[C]** candidate report (dated where known) · **[E3]** established prep material / third party · **[Ed]** editorial judgement (mine).

Existing sets referenced below by short name: Python, DSA, OOP, LLD, SysDes, SQL, OS, Net, APIs, Backend, JS, TS, React, HTML/CSS/a11y, Testing, Git/AI, Behavioral, Projects.

Overall caveat: for every role below, official employer interview guidance is thin. Most format detail comes from prep vendors (Exponent/aced.io, Prepfully, Hello Interview, GreatFrontEnd) and candidate reports, which disagree and change quickly. Every role page should tell candidates to confirm the format with their recruiter.

---

## 1. AI Engineer (applied, LLM applications)

**Merge:** AI Engineer, Applied AI Engineer, LLM Engineer, GenAI Engineer, AI Product Engineer [Ed]. Anthropic's "Applied AI Engineer" is customer-facing (see FDE overlap) [P]. Do **not** merge with ML Engineer or Research Scientist.

**Formats:**
- Anthropic Applied AI Engineer, Enterprise [P]: 4+ years as an FDE, product engineer or SWE; production LLM work (prompting, agents, eval frameworks, MCP); Python or TypeScript; workshops and code reviews with customers. **No ML research, training or maths requirement.**
- techinterview.org, 2026-07-23 [E3, editorial]: four or five rounds, only one a classic algorithms round. Retrieval and prompting screen; take-home "build and measure an LLM system"; live debugging of an agent or integration; AI system design around a model you don't control (eval and serving path); product scoping. Topics: RAG metrics (recall@k, MRR/NDCG), LLM-as-judge calibrated against human labels, agent failure modes (loops, caps, tracing), cost and latency routing. "The classic loop (gradient descent, bias-variance, training from scratch) has mostly been dropped" for LLM-product roles.
- Other 2026 vendor guides [E3] add LLM fundamentals (tokens, context windows, sampling), with a Mistral loop that includes LLM theory [C, compiled].

**Reuse [Ed]:** about 60%. Python, DSA (lighter), APIs, Backend, SysDes, Testing (evals extend it), Git/AI, Behavioral and Projects apply directly. TS/React are conditional on product-facing roles.

**New sets:**
1. **AI Engineering: LLMs, RAG, agents, evals.** Covers tokens, context, sampling, embeddings; prompting and structured output; RAG pipeline and retrieval metrics; tool use and agents; evals and LLM-as-judge; guardrails, prompt injection, cost and latency.
2. **AI System Design.** Covers an eval-first design around a hosted model, retrieval, caching, routing, observability and failure handling. This could start as a section of set 1 and be split out only if it grows [Ed].

**Seniority:** Entry-level postings are rare; Anthropic's start at 2–4+ years [P]. A concise note is enough: juniors focus on coding, RAG and evals; seniors add AI system design ownership and customer leadership [Ed].

## 2. Forward Deployed Engineer (FDE)

**Merge:** FDE, Forward Deployed Software Engineer (Palantir FDSE, OpenAI), Forward Deployed AI Engineer, Deployment Engineer [Ed]. Palantir's "Deployment Strategist" is non-engineering and should be excluded.

**Formats:**
- Palantir FDSE, London [P]: 6+ months of post-college experience; one of Python, Java, C++ or TS/JS; secure coding; work directly with customers; build custom applications and LLM workflows; 25–50% travel. Palantir publishes no fixed interview process (noted by Educative [E3]).
- Palantir rounds [C/E3]: decomposition (about 60 minutes, break down a vague real problem, little or no code) and learning (pick up an unfamiliar API or concept with the interviewer acting as documentation). Blind new-grad FDSE threads report both [C, undated]. Some reports mention a Karat coding screen [E3].
- OpenAI FDE, SF [P]: 5+ years with customer-facing work; production code across frontend and backend; has built LLM systems; 50% travel. Reported loop: roughly 5-hour take-home build, then walkthrough, then onsite [E3, aced.io, about mid-2026].
- aced.io "Definitive 2026 guide" [E3]: recruiter, hiring manager, practical coding with messy inputs, deployment system design, decomposition case, client simulation, behavioral, sometimes a take-home.

**Reuse [Ed]:** about 65%. Python, DSA, APIs, Backend, SQL, SysDes, Testing/debugging, Git/AI, Behavioral and Projects apply. The AI Engineering set applies to AI-lab FDE roles.

**New set:** **Customer & Solutions Scenarios.** Covers decomposition of ambiguous problems, discovery questions, scoping an MVP, stakeholder communication, client role-play, and learning an unfamiliar API quickly. This set can be **shared with Solutions Engineer**, with role-specific sections (FDE: decomposition and learning rounds; SE: demo and objection handling) [Ed].

**Seniority:** Palantir hires early-career candidates [P/C]; OpenAI and Anthropic ask for 4–7+ years [P]. A note is enough.

## 3. Solutions Engineer / Solutions Architect

**Merge:** Solutions Engineer, Sales Engineer, Solutions Consultant, Pre-sales Engineer, Solutions Architect (vendor-side, for example AWS SA or Databricks SA), Customer/Field Engineer [Ed]. Vendors note that the titles are used interchangeably [E3].

**Formats:**
- Databricks Field Engineering prep, April 2025 [O; PDF summarised through search, because its text could not be extracted directly]. Recruiter screen (30 minutes), hiring manager (1 hour), technical screen (1 hour), coding assignment, then a presentation. In the presentation you play the SA in a hypothetical scenario, ask discovery questions, then pitch. Linked prep covers lakehouse, Spark, MLflow and Photon.
- Databricks candidates [C, Glassdoor, undated]: Python, Spark and SQL notebook exercise; architecture whiteboard; panel presentation.
- Amazon SA [E3, Exponent]: technical rounds are "not focused on algorithms or data structures"; Leadership Principles are core.
- Salesforce, HubSpot and Smartsheet SE guides [E3]: discovery before demo, demo and panel role-play, objection handling.

**Reuse [Ed]:** about 40%. SQL, APIs, Net, SysDes (cloud architecture), Behavioral and Projects (presentation). DSA is reduced or absent at many vendors.

**New set:** the shared **Customer & Solutions Scenarios** set. Optionally add a short "Cloud architecture fundamentals" section, later shared with Cloud Engineer [Ed].

**Seniority:** Associate SA and SE programmes exist for new grads (AWS Associate SA appears in Glassdoor listings [C]). A note is enough.

### Solutions Engineering vs Forward Deployed Engineering (clear differences)

| | Solutions Engineer / SA | Forward Deployed Engineer |
|---|---|---|
| Sales stage | Mostly pre-sale | Post-sale delivery |
| Production code | Demos and proofs of concept | Owns production code in the customer environment |
| Quota | Often quota or sales-linked | No quota |
| Interview signature | Discovery, demo/presentation, objection handling, architecture | Coding, decomposition/learning, deployment design, client simulation |
| DSA bar | Low to moderate | Moderate (SWE-like) |

Sources: aced.io 2026 guide [E3], OpenAI and Palantir postings [P], Databricks prep [O]. The framing is a generalisation; individual companies vary.

## 4. Machine Learning Engineer (MLE)

**Merge:** ML Engineer, Software Engineer (Machine Learning), Applied Scientist (partly; it leans more toward research) [Ed]. Many Google MLEs are hired under the SWE umbrella [E3].

**Formats:**
- Hello Interview ML System Design [E3]: covers applied MLSD (problem framing, data and features, model choice, training and evaluation, deployment, monitoring). It skips ML theory and is mostly free. **Entry-level ML roles are rare without an advanced degree and usually have no MLSD round**; it is more common at mid level and the norm at senior level.
- Meta MLE loops [C, Blind/Glassdoor, 2025–26]: two coding rounds (one possibly AI-assisted), one or two MLSD rounds, sometimes general system design, and behavioral.
- Google MLE [E3]: SWE-style loop plus an ML design round; ML fundamentals such as regularisation and ROC.

**Reuse [Ed]:** about 50%. Python, DSA (full SWE bar), SQL, SysDes, Testing, Behavioral and Projects.

**New sets:**
1. **ML Fundamentals.** Covers the supervised learning workflow, bias/variance, overfitting and regularisation, metrics (precision/recall, ROC-AUC), feature engineering, embeddings, train/validation/test splits, and neural network basics.
2. **ML System Design.** Covers recommendation, ranking and classification systems, offline vs online evaluation, feature stores, training/serving skew, drift and monitoring.

**Sharing [Ed]:** Applied AI can reuse a small "ML Fundamentals Lite" subset (embeddings, evaluation metrics, overfitting) without the rest of ML Fundamentals. Implement this as a section of ML Fundamentals that the AI Engineer role links to, rather than as a separate set.

**Seniority:** This role differs most by level. MLSD is largely mid and senior [E3]. A **concise note plus marking MLSD as mid+** is enough; no selector is needed.

### Applied AI vs ML Engineer vs Research Scientist (depth, to avoid over-preparing)

| | Applied AI Engineer | ML Engineer | AI Research Scientist |
|---|---|---|---|
| Builds on | Hosted or open models (API) | Models the team trains | New methods |
| Maths | Recognise: cosine similarity, probability for evals | Explain: linear algebra, gradient descent, stats for metrics | Apply: derivations, optimisation theory |
| Training | Recognise fine-tuning vs prompting vs RAG trade-offs | Implement training pipelines and evaluation | Design experiments, novel architectures |
| Research | None | Read papers selectively | Publications are usually expected (PhD-typical) |
| Key rounds | Coding, RAG/evals, AI system design, take-home | Coding, ML fundamentals, MLSD | Research talk, paper discussion, ML theory, coding |

Sources: Anthropic posting (no maths or training requirement) [P]; techinterview.org [E3]; Hello Interview (research interviews out of scope, theory only there) [E3]; Chip Huyen *ML Interviews Book* §1.1 (research scientist vs research engineer vs MLE) [E3]. The depth cells are [Ed]. **Research Scientist is out of scope** for this site.

## 5. Frontend Engineer

**Merge:** Frontend Engineer, Front End Engineer (Meta), UI Engineer, Web Engineer [Ed]. Full-Stack remains separate.

**Formats:**
- Meta FEE initial interview [O]: 60 minutes with an engineer, technical and behavioral; a downloadable guide gives the detail. CoderPad with no autocomplete or linter [E3, Prepfully].
- Front End Interview Handbook [E3, free]: JS utility coding (debounce, throttle, polyfills, Promises); UI component coding (autocomplete, carousel), sometimes without React; easier algorithm problems; quiz/trivia (closures, box model); front-end system design.
- GreatFrontEnd / FEIH system design [E3]: RADIO framework (requirements, architecture, data model, API, optimisations). Two question types: UI components and applications. Performance, accessibility and i18n "differentiate senior from junior candidates". Server scaling is out of scope.

**Reuse [Ed]:** about 75%. JS, TS, React, HTML/CSS/a11y, DSA (lighter), Net/HTTP, APIs, Testing, Git/AI, Behavioral and Projects. It is the cheapest role to add.

**New set:** **Frontend System Design & Web Performance.** Covers RADIO, component API design, client state and data fetching, pagination, caching, Core Web Vitals, rendering strategies (CSR/SSR/SSG), image and resource loading, and a11y/i18n at design level. If the JS set lacks "implement debounce/throttle/Promise.all"-style coding prompts, add them as a section of JS, not a new set.

**Seniority:** Front-end system design is lighter at junior level [E3]. A note is enough.

## 6. Data Engineer

**Merge:** Data Engineer, Analytics Engineer (lighter, more SQL/dbt), Data Platform Engineer, ETL Developer [Ed].

**Formats:**
- Exponent/aced.io DE loop [E3, Premium page]: recruiter; SQL (30 minutes); DSA (30 minutes); data modelling (45–60 minutes); ETL pipeline design (45–60 minutes); behavioral; concepts usually folded in. Entry level may get shorter or combined modelling/ETL rounds and more concept questions. Senior roles weight leadership more heavily.
- Meta DE [E3/C]: three 60-minute technical rounds (SQL, Python data manipulation, data modelling, product sense) plus a 30-minute ownership/behavioral round. Sources disagree on the exact structure.

**Reuse [Ed]:** about 50%. SQL (central, needs extension), Python, DSA (lighter), SysDes, OS (partial), Testing (data quality), Behavioral and Projects.

**New set:** **Data Engineering: modelling, pipelines, warehousing, streaming.** Covers dimensional modelling (star/snowflake, SCDs), batch vs streaming, idempotent and incremental loads, partitioning, orchestration, data quality, columnar warehouses, Spark basics and Kafka basics. Check whether the existing SQL set already covers window functions and CTEs at DE depth; if not, add an "advanced analytical SQL" section there [Ed].

**Free resources:** DataTalksClub Data Engineering Zoomcamp (free and open source; covers warehousing, dbt, Spark, Kafka) [verified].

**Seniority:** A note is enough.

## 7. Quantitative Developer (brief; specific firms are covered by another agent)

**Merge:** Quant Developer, Trading Systems Engineer, Low-Latency/HFT C++ Engineer, Software Engineer at trading firms [Ed].

**Formats [E3/C]:** Three variants are reported: a language-agnostic algorithm process (for example Jane Street, with a project walkthrough), a C++-first low-latency process (memory model, UB, cache effects, lock-free structures), and a data-leaning platform role; the job description usually says which applies [E3, techinterview.org]. Some firms add maths and mental arithmetic [E3, Optiver guide].

**Reuse [Ed]:** DSA, OS & concurrency, Net, LLD and Behavioral, about 50%. The instructional stack is Python, and C++ depth does not fit it.

**New sets (if added):** **C++ & Low-Latency Systems**, and possibly **Probability & Mental Maths**. Both are large and specialist.

**Recommendation [Ed]:** defer, because it conflicts with the Python stack and serves a niche audience. If added, state the C++ requirement explicitly.

---

## Proposed new question sets (minimal) and sharing

| New set | Used by | Notes |
|---|---|---|
| AI Engineering: LLMs, RAG, agents, evals (+ AI system design section) | AI Eng (core), FDE (AI-lab roles), MLE (optional) | Highest marginal value |
| Customer & Solutions Scenarios | FDE + Solutions Eng (shared) | Role-specific subsections |
| Frontend System Design & Web Performance | Frontend, Full-Stack (optional) | Benefits an existing role too |
| Data Engineering | Data Eng | Plus an SQL-set extension if needed |
| ML Fundamentals (incl. "Lite" section) | MLE core; AI Eng links the Lite section | One set, two depths |
| ML System Design | MLE (mid+) | Mark as mid+ |

That is six sets for six roles (Quant deferred).

**Seniority selector:** not justified [Ed]. Differences are mostly "senior adds system design ownership and leadership behavioral", and the only round that is genuinely level-gated is MLSD (and front-end system design depth). Use a one-paragraph note per role plus a "mid+" tag on specific sets or questions. This is consistent with the project's entry-level scope.

---

## Future candidates (assessment and order)

| Role | Distinct interview requirements | Free resources | Overlap | Job-seeker value |
|---|---|---|---|---|
| DevOps / Platform | Linux, CI/CD, containers, IaC, cloud, troubleshooting scenarios | roadmap.sh, Docker/Kubernetes/Terraform docs, Google SRE books | OS, Net, Backend, Git high | High; few true entry roles |
| SRE | Linux internals, troubleshooting, NALSD (Google: every SRE candidate gets one NALSD round [O, Google Research/SRECon18]), on-call/incident | Google SRE book + Workbook ch.12 NALSD (free) [O] | OS, Net, SysDes high | High at large companies |
| Cloud Engineer | Cloud services, networking, IAM, cost, architecture | Vendor docs, free tiers, AWS Well-Architected | Overlaps the SA cloud section and DevOps | Medium-high; certification-driven |
| Security (AppSec) | OWASP Top 10:2025, threat modelling, secure code review | OWASP Top 10:2025 (free, current) [verified], PortSwigger Web Security Academy | APIs, Backend, Net | Medium; entry roles scarce |
| Mobile (iOS/Android) | Platform language (Swift/Kotlin), lifecycle, mobile system design | Apple/Android official docs | DSA, OOP, LLD; new stack needed | Medium; needs a second stack |
| QA / SDET | Test design, automation frameworks, API testing, coding (lighter DSA) | Playwright/Selenium docs, ministry-of-testing | Testing, APIs, Python high | Medium; good entry-level access |
| Embedded | C/C++, memory, interrupts, RTOS, hardware basics | Vendor/university material | OS partial; stack conflict | Low for this audience |

**Recommended order [Ed]:**
1. **SRE + DevOps/Platform (one combined "Infrastructure" role page)**: high overlap with OS and Net, a strong free official source (SRE books), and one new set (Linux troubleshooting & infrastructure).
2. **QA/SDET**: largely reuses Testing, APIs and Python; realistic entry-level access.
3. **Cloud Engineer**: reuses SA cloud architecture and the infrastructure set; mostly certification and vendor-specific.
4. **Security (AppSec)**: OWASP and PortSwigger are free, but entry roles are scarce and many expect prior experience.
5. **Mobile**: requires a new language stack, which conflicts with the single instructional stack.
6. **Embedded**: C/C++ and hardware, minimal overlap, low value for the target audience.

---

## Sources

| URL | Type | Date checked | Supports |
|---|---|---|---|
| https://api.lever.co/v0/postings/palantir/5168e8fd-fec1-4fea-b7a1-81bdaea65850 | P | 2026-11-27 | Palantir FDSE requirements (6+ months, languages, travel) |
| https://www.educative.io/courses/forward-deployed-engineer/the-hiring-process-stages-timeline-and-no-ai-rule | E3 | 2026-11-27 | Palantir publishes no fixed FDSE process; conflicting accounts |
| https://www.tryexponent.com/guides/palantir-forward-deployed-engineer-interview | E3 | 2026-11-27 | Decomposition round (~60 min, little code); learning round |
| https://www.teamblind.com/post/update-interview-experience-palantir-new-grad-fdse-interview-dtncjyze | C (undated) | 2026-11-27 | New-grad FDSE candidates report decomposition and learning rounds |
| https://openai.com/careers/forward-deployed-engineer-(fde)-sf-san-francisco/ | P | 2026-11-27 | OpenAI FDE: 5+ years, customer-facing, LLM systems, 50% travel |
| https://www.aced.io/blog/forward-deployed-engineer-interview-the-definitive-2026-guide-fde | E3 (~mid-2026) | 2026-11-27 | FDE loop; FDE vs SA vs Sales Engineer comparison; OpenAI take-home |
| https://job-boards.greenhouse.io/anthropic/jobs/5057647008 | P | 2026-11-27 | Applied AI Engineer: 4+ years, LLM/agents/evals, no research/maths requirement |
| https://www.techinterview.org/post/3233476824/ai-engineer-interview-rag-agents-evals/ | E3 (2026-07-23) | 2026-11-27 | Applied AI loop; RAG metrics, evals, agents; classic ML theory dropped |
| https://hamel.dev/blog/posts/evals-faq/ | E3 (2026-09-18) | 2026-11-27 | Free evals resource (LLM-as-judge validation, RAG evals) |
| https://huggingface.co/learn/llm-course/chapter1/1 | E3 | 2026-11-27 | Free LLM course (transformers, fine-tuning) |
| https://github.com/anthropics/courses | E3 | 2026-11-27 | Prompting, evals, tool-use courses (archived; hands-on likely needs a paid API key) |
| https://hellointerview.com/learn/ml-system-design/ | E3 | 2026-11-27 | MLSD scope; entry-level ML rare and usually no MLSD; mostly free |
| https://huyenchip.com/ml-interviews-book/ | E3 | 2026-11-27 | Role distinctions (research scientist / research engineer / MLE) |
| https://developers.google.com/machine-learning/crash-course | E3 (official Google education) | 2026-11-27 | ML fundamentals modules incl. intro to LLMs (price not stated on page) |
| https://www.tryexponent.com/guides/google-machine-learning-engineer-interview | E3 | 2026-11-27 | Google MLEs often hired under SWE; ML design round |
| https://www.tryexponent.com/guides/meta-machine-learning-engineer-interview | E3/C | 2026-11-27 | Meta MLE loop (coding, MLSD, behavioral) |
| https://www.metacareers.com/FEE-prep-initial | O | 2026-11-27 | Meta FEE initial interview: 60 min, technical + behavioral |
| https://www.frontendinterviewhandbook.com/introduction | E3 (free) | 2026-11-27 | Front-end question formats; less algorithm emphasis |
| https://www.frontendinterviewhandbook.com/front-end-system-design | E3 (free) | 2026-11-27 | FE system design types; perf/a11y/i18n separate senior from junior |
| https://greatfrontend.com/front-end-system-design-playbook/framework | E3 (partly free) | 2026-11-27 | RADIO framework |
| https://web.dev/learn/performance | E3 (Google) | 2026-11-27 | Web performance course modules |
| https://www.aced.io/courses/data-engineering-intro/data-engineering-interview-loop | E3 (Premium) | 2026-11-27 | DE loop rounds and level differences |
| https://www.tryexponent.com/guides/meta-data-engineer-interview | E3/C | 2026-11-27 | Meta DE: SQL, Python, modelling, product sense, ownership |
| https://github.com/DataTalksClub/data-engineering-zoomcamp | E3 (free) | 2026-11-27 | Free DE curriculum (warehousing, dbt, Spark, Kafka) |
| https://www.databricks.com/sites/default/files/2025-04/field-engineering-careers-site-interview-prep-april-2025-002.pdf | O (Apr 2025) | 2026-11-27 | Databricks SA stages and presentation role-play (summarised through search; PDF text not extractable) |
| https://www.tryexponent.com/guides/amazon-solutions-architect-interview | E3 | 2026-11-27 | Amazon SA: not DSA-focused; Leadership Principles core |
| https://www.cleverprep.com/roles/solutions-engineer | E3 | 2026-11-27 | Discovery before demo; formats vary, confirm with recruiter |
| https://www.techinterview.org/post/3233477393/quant-developer-interview-loop/ | E3 | 2026-11-27 | Three quant-dev interview variants |
| https://www.techinterview.org/post/3233474597/cpp-quant-interviews/ | E3 | 2026-11-27 | C++ depth at HFT firms |
| https://sre.google/workbook/non-abstract-design/ | O | 2026-11-27 | NALSD (free, official) |
| https://research.google/pubs/interviewing-for-systems-design-skills/ | O | 2026-11-27 | All Google SRE candidates take one NALSD interview |
| https://prepfully.com/interview-guides/meta-production-engineer | E3/C | 2026-11-27 | Production engineer loop: coding, Linux, networking, design |
| https://owasp.org/Top10/2025/0x00_2025-Introduction/ | O (standard body) | 2026-11-27 | OWASP Top 10:2025 is current |

Limitations: I could not reach several official pages (Palantir blog: 403; Meta FEE downloadable guide; Databricks PDF body text). Vendor guides (Exponent/aced.io, Prepfully, techinterview.org) are commercial and partly paywalled, and many of their claims are compiled from unverified candidate reports. I used no question dumps. The reuse percentages are editorial estimates; I did not measure them against the repository's actual question content.
