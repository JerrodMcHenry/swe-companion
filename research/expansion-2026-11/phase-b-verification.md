# Phase B verification: AI companies (OpenAI, Anthropic, Perplexity)

Checked 2026-11-27. Read-only. Every page listed was fetched with curl (browser User-Agent) and its text was extracted and read. Job data comes from the public APIs fetched on 2026-11-27: OpenAI Ashby (876 postings), Anthropic Greenhouse (634), Perplexity Ashby (150). Quotes are verbatim and short. "Date" means the date checked; a page's own date is given where it shows one.

Verdicts: VERIFIED · PARTLY (substantially right, but wording or scope needs correcting) · UNVERIFIED (could not be confirmed from a primary page) · FALSE.

---

## 1. OpenAI interview guide

URL: https://openai.com/interview-guide/ (HTTP 200, server-rendered, read in full). The page shows no date of its own.

| Claim (ai-companies.md) | Verdict | Quote | Date |
|---|---|---|---|
| Application review takes about 1 week | VERIFIED | "It typically takes the recruiting team one week to review your résumé and email you back." | 2026-11-27 |
| Intro call with a recruiter or hiring manager | VERIFIED | "schedule a conversation with the hiring manager or recruiter" | 2026-11-27 |
| Skills-based assessment, possibly more than one | VERIFIED | "Formats vary by team and may include: pair coding interviews, take-home projects, technical tests, etc." / "We may ask you to complete more than one assessment depending on the role." | 2026-11-27 |
| Finals: 4–6 h, 4–6 people, 1–2 days, virtual by default | VERIFIED | "Typically, our candidates go through 4–6 hours of final interviews with 4–6 people over 1–2 days." / "By default, our interviews will continue to take place virtually" | 2026-11-27 |
| Decision in about 1 week; references may be requested | VERIFIED | "You should expect to hear from us within one week of your final interviews. Your recruiter may ask for references" | 2026-11-27 |
| Engineering criteria | VERIFIED | "we generally look for well-designed solutions to the challenge, high-quality code, optimal performance, and good test coverage." | 2026-11-27 |
| Communication, collaboration and mission are assessed | VERIFIED | "We care about collaboration, effective communication, openness to feedback, and alignment with our mission and values." | 2026-11-27 |
| AI policy varies by interview | VERIFIED | "Expectations for AI and other tools vary by interview: some formats intentionally allow them, while others are designed to assess your independent problem-solving without AI tools." / "If you're unsure, please ask your recruiter before the interview." | 2026-11-27 |
| No language or system design statements | VERIFIED (absence) | The page never names a programming language and never says "system design". Its only "technical reading" is the Deep Learning Book and Spinning Up in Deep RL. | 2026-11-27 |
| No new-grad vs experienced split; "not credential-driven" | VERIFIED | "We are not credential-driven"; the guide also welcomes "people who are not yet specialized but show high potential". | 2026-11-27 |
| Residency: 2026 applications closed | UNVERIFIED | https://openai.com/residency/ now returns 307 to /research/. The careers page only says the Residency "is a six-month program…". The "closed" status came from a snippet. | 2026-11-27 |
| Careers page: "early in their professional journey" | VERIFIED | "We welcome curious, driven people early in their professional journey through internships, residencies, and full-time roles." (https://openai.com/careers/) | 2026-11-27 |

## 2. Anthropic candidate AI guidance and interview stages

URL: https://www.anthropic.com/candidate-ai-guidance (HTTP 200, read in full).

| Claim | Verdict | Quote | Date |
|---|---|---|---|
| Page date is Jul 10, 2025 | VERIFIED | "Last updated Jul 10, 2025" | 2026-11-27 |
| Applications: draft yourself, then refine with Claude | VERIFIED | "Please create your first draft yourself, then use Claude to refine it." | 2026-11-27 |
| Take-homes: no Claude unless indicated | VERIFIED | "Complete these without Claude unless we indicate otherwise." | 2026-11-27 |
| Live interviews: no AI unless indicated | VERIFIED | "This is all you–no AI assistance unless we indicate otherwise." | 2026-11-27 |
| Prohibited: invented experiences; Claude writing assessment code | VERIFIED | "Using Claude to create experiences ❌ Not allowed"; "Having Claude write your code when we haven't explicitly allowed it" | 2026-11-27 |
| AI encouraged for interview prep | VERIFIED | "Use Claude to research Anthropic, practice your answers, and prepare questions for us." | 2026-11-27 |
| The page lists no stages, languages or round content | VERIFIED (absence) | It covers application, take-home, preparation and live interviews only. | 2026-11-27 |
| Careers page: Google Meet, live coding tools | VERIFIED | "All interviews are conducted over Google Meet" / "For technical roles, we use live coding tools like Colab and CodeSignal. You can look things up" (https://www.anthropic.com/careers) | 2026-11-27 |
| Careers page: "skills over credentials" | VERIFIED (paraphrase) | "We care about what you can do, not where you learned to do it." | 2026-11-27 |
| No internships | VERIFIED | "We don't currently offer internships." | 2026-11-27 |
| Is there an official page describing interview stages? | No official stage list found | The careers "How we hire" section has no stage sequence; it covers only the tools and the conversational nature of the interviews. A search of anthropic.com for interview stages returned only third-party guides. | 2026-11-27 |

Correction to note: the careers page says candidates "can look things up" in live coding. That covers reference lookups, not AI assistance. Do not merge it with the AI policy.

## 3. Perplexity interview resources

All pages are server-rendered (HTTP 200) and were read in full: https://interviewresources.perplexity.ai/ and /hands-on-coding/, /practical-assessment/, /agentic-coding/, /spike-round/instructions/, /system-design/, /core-expertise/, plus https://www.perplexity.ai/hub/careers/interview-guide. The portal footer reads "© 2026-Present"; the pages carry no per-page dates.

| Claim | Verdict | Quote | URL | Date |
|---|---|---|---|---|
| Round types | VERIFIED | Portal lists Practical Assessment, Hands-on Coding, Spike Round, Agentic Coding, System Design, Core Expertise. | portal home | 2026-11-27 |
| Each role uses a subset; no swaps | VERIFIED | "each role's interview process involves a different subset of these rounds" / "we don't accept requests to substitute one type of round for another." | portal home | 2026-11-27 |
| At least one non-technical round | VERIFIED | "Most interview loops for technical roles also include at least one non-technical round" | portal home | 2026-11-27 |
| Overlay and second-screen tools are cheating | VERIFIED | Lists "Realtime audio models and screen overlay apps" and "Cheating tools running on second, third, and even fourth monitors" | portal home | 2026-11-27 |
| CodeSignal | VERIFIED | "Most of our hands-on coding rounds are conducted in a shared CodeSignal session." Practical assessments are "typically conducted within a CodeSignal session". | /hands-on-coding/, /practical-assessment/ | 2026-11-27 |
| Hands-on coding is 30–60 min | VERIFIED | "Most rounds are scheduled for between 30 and 60 minutes" | /hands-on-coding/ | 2026-11-27 |
| Python strongly recommended | VERIFIED | "We strongly recommend Python for almost all candidates." | /hands-on-coding/ | 2026-11-27 |
| Java strongly discouraged | VERIFIED | "Java ( strongly discouraged )" / "candidates who choose Java are much less likely to succeed on hands-on coding rounds." | /hands-on-coding/ | 2026-11-27 |
| Language list (C++, Go, TypeScript also offered) | VERIFIED | Python, C++, Go, Java, TypeScript, introduced as "In most instances". | /hands-on-coding/ | 2026-11-27 |
| Expected: containers, sorting/searching, graph traversal, OOD | VERIFIED | "arrays, strings, dictionaries, sets, and priority queues" / "sorting, searching, and iterating over sets and graphs" / "Classes, methods, and object-oriented design principles." | /hands-on-coding/ | 2026-11-27 |
| Not expected: DP, esoteric data structures, advanced graph algorithms | VERIFIED | "Dynamic programming recipes (e.g., longest common subsequence, edit distance…)"; "Esoteric data structures"; "Advanced graph algorithms (e.g., Dijkstra's algorithm…)" all listed under "not expected". | /hands-on-coding/ | 2026-11-27 |
| No question banks | VERIFIED (added) | "We don't use question banks from LeetCode, HackerRank, or similar platforms." | /hands-on-coding/ | 2026-11-27 |
| No AI except docs and library questions | VERIFIED | "We do not allow the use of AI or other outside assistance". Exceptions: language docs, and asking an AI tool about libraries, but "you should not ask the tool to produce any significant part of your answer". | /hands-on-coding/ | 2026-11-27 |
| Practical Assessment is 45–90 min with the same no-AI rule | VERIFIED | "Most practical assessments are designed to be completed in 45 to 90 minutes." Same two exceptions apply. | /practical-assessment/ | 2026-11-27 |
| Agentic Coding: async 3 h or sync 60–120 min; agents required | VERIFIED | "require candidates to use frontier agents"; "typically fixed in length at 3 hours"; "anywhere between 60 and 120 minutes". Judged with "appropriately higher expectations for scope, depth, and quality of work." | /agentic-coding/ | 2026-11-27 |
| Spike: up to 9 h | VERIFIED | "for however long you'd like, up to 9 hours" | /spike-round/instructions/ | 2026-11-27 |
| Spike: AI unrestricted | VERIFIED | "there are absolutely no restrictions on how you are allowed to leverage AI during this round." Human help is still not allowed. | same | 2026-11-27 |
| Spike: ineffective AI use counts against you | VERIFIED | "Ineffective use of AI will result in a negative assessment." | same | 2026-11-27 |
| Spike: "self-defined project in your own stack" | PARTLY | A spec arrives by email: "You'll receive your project spec via email approximately 5 minutes before your official start time." On stack: "Typically, we'll expect backend and modeling code to be written in Python 3, and client-side scripts (if any) to be written in TypeScript." The Agentic page does describe Spike as "allowing candidates to steer their own project". | same | 2026-11-27 |
| Spike: repo, README, 10–20 min recap; up to $750 reimbursed | VERIFIED | "Your recap should typically be between 10 and 20 minutes long." / "We'll reimburse you for up to $750 in technical costs". README and a ZIP of the repo are requested. | same | 2026-11-27 |
| Spike criteria | VERIFIED | Scope completed, Methodology, Performance and functionality, Effective use of tools, Code quality and legibility, Communication. | same | 2026-11-27 |
| System Design: 45–60 min, whiteboard or CodeSignal | VERIFIED | "typically 45 to 60 minutes in length" / "may take place in CodeSignal" | /system-design/ | 2026-11-27 |
| System Design: no memorized template; complexity is not quality | VERIFIED | "or do you try to fit the problem to a prememorized template?" / "Complexity ≠ quality." | /system-design/ | 2026-11-27 |
| Early-career Core Expertise: choose from at least four disciplines | VERIFIED | "you'll be presented with at least four choices of disciplines, typically drawn from computer science and applied mathematics." | /core-expertise/ | 2026-11-27 |
| Core Expertise replaces System Design for early career | VERIFIED (sharpens ours) | Used "for candidates who haven't worked closely yet on large-scale production systems. In these cases, a System Design interview provides very noisy signal". | /core-expertise/ | 2026-11-27 |
| Algorithms has the lowest pass rate | VERIFIED | "algorithms has the lowest pass rate by a wide margin". The page also says LeetCode over-preparation tends to hurt in this round. | /core-expertise/ | 2026-11-27 |
| Experienced: recruiter-named domain, deep dive into own work | PARTLY | "your recruiter will share with you the technical domain of focus". The experienced variant is for "specialized roles that require particularly sharp mastery", not every experienced candidate. | /core-expertise/ | 2026-11-27 |
| Hub stages: phone screen, technical screen, 4–5 onsite incl. HM deep dive, founder/leader final | VERIFIED | "For engineers, this is usually a standard technical programming interview." / "an onsite with 4-5 interviews, including a deep dive with a hiring manager" / "a final interview will be scheduled with a Perplexity founder or leader." | hub interview-guide | 2026-11-27 |
| No AI product experience expected, but AI knowledge required | VERIFIED | "No experience with building AI products is expected, but knowledge of how to use AI is required." | hub interview-guide | 2026-11-27 |
| GPA ≥3.92 CS/Math and A/A+ in upper-level algorithms, for non-focus schools | VERIFIED | "GPA of ≥3.92, averaged across all CS and Math classes" / "Grade of A or A+ in your school's upper-level algorithms course." Introduced with "we typically require". It applies "If you're not applying from a focus school". Other applicants: "we will be looking for other evidence of exceptional ability." | https://jobs.ashbyhq.com/Perplexity/5a4cec8b-5688-497c-a5ec-884f75d09511 (published 2026-09-29) | 2026-11-27 |
| Focus schools route to school portals | VERIFIED | "if you attend one of our focus schools listed below, please do not apply via this portal". The list has 23 US and 4 Canadian schools. | same | 2026-11-27 |
| New-grad portal "closed until 2027" | PARTLY | "APPLICATIONS CLOSED. The general application portal has closed for 2026. We will reopen applications at some point in 2027." This covers the general portal only. The status of the school-specific portals was not checked; pplx.ai/2026MIT returns 200 but was not read. | same | 2026-11-27 |

## 4. Experience requirements (job-board APIs, 2026-11-27)

Method: titles matched by keyword. The minimum years are the lowest stated "N+ years" or "N–M years" figure in the main experience line. Lead/management years ("2+ years leading…") were ignored when a main figure existed. Both the 0–2 bucket and the anomalous lines were checked by hand. Tallies are approximate.

### OpenAI

| Family | Count | Experience lines (quoted) | Verdict vs ai-companies.md |
|---|---|---|---|
| FDE / FDSWE, individual contributor (excl. Manager/Lead titles) | 33 reviewed: 24 at 5+, 6 at 6+, 3 at 7+; **0 below 5** | FDSWE SF/NYC/Seattle: "7+ years of professional full stack engineering experience (excluding internships)" (00207abc, 533c0fc9, 7b90b83c). FDE Dublin/Paris/Munich/Tokyo/London/SF/NYC/Seattle etc.: "Bring 5+ years of engineering or technical deployment experience that includes customer-facing work". FDSWE Gov: "Bring 5+ years…ideally in customer-facing or government environments". Healthcare/Life Sciences London/Spanish-speaking: 6+. Cyber: "5+ years of software engineering experience". SF FDE: "Travel up to 50% is required." | VERIFIED ("about 40" counts managers too: 41 titles in total including 8 manager/lead) |
| FDE managers/leads | 8 | 8+ to 10+ (e.g. "Bring 10+ years of engineering or technical delivery experience, including 2+ years managing…") | n/a |
| Software Engineer, Applied Emerging Talent (2027) | 1 | "0-1 years of experience in software engineering or a relevant field"; "Proficiency with JavaScript, React, and some backend languages (we use Python)"; "Interest in AI/ML (direct experience not required)" (55150071, published 2026-09-14) | VERIFIED; still the only early-career SWE posting |
| Applied AI Architect, individual contributor | 22 reviewed: 2 state 5+ (Cyber); **20 state no number** | Typical line: "Have significant experience in customer-facing technical roles such as solutions architecture, solutions engineering, technical account leadership, AI deployment, or technical customer success." Also: "You will act as the 'CTO of your book of business'… from pre-sales discovery and solution evaluation through deployment" (98a36c10) | PARTLY: "where stated, 3–5+" is wrong for IC roles, which state 5+ where they state anything. Managers ask 8–10+. |
| Solutions Engineer | 2 (Ads Solutions NYC, Tokyo) | "Have 5+ years of experience in solutions engineering, sales engineering, technical account management, adtech, martech…" | VERIFIED |
| Early Access Deployment Engineer | 1 | "Have 4+ years of software engineering or equivalent technical experience" | VERIFIED |
| **Software engineering postings** (title contains "Software Engineer", excl. manager/lead/head) | **Of 158 reviewed: 1 states 0–2 years (Emerging Talent, 0–1); 66 state 3+ (lowest stated minimum 4+, most 5+ or 7+); 91 state no numeric minimum** | Postings with no number are not entry-level by implication; many require "track record of shipping and operating high-reliability distributed services" (e.g. 98ad9beb). | Partly consistent with "mostly 4–9+" |

### Anthropic

Every one of the 634 postings has this line: "Minimum years of experience: Years of experience required will correlate with the internal job level requirements for the position" (VERIFIED, 634/634).

| Family | Count | Experience lines (quoted) | Verdict |
|---|---|---|---|
| Forward Deployed Engineer (IC) | 4 | London (5423029008): "4+ years of experience in a technical, customer facing role such as Forward Deployed Engineer, or as a Software Engineer with consulting or product experience". **Munich (5391016008) and Paris (5391021008): "8+ years…"**. Staff FDE US (5449229008): no number; "Experience in a senior technical, customer facing role…". London also: "Travel frequently (25-50%)" and "MCP servers, sub-agents, and agent skills". | **PARTLY: the "4+" figure is London only. Paris and Munich ask 8+.** |
| FDE managers | 4 | "10+ years of experience in software engineering, solutions architecture, or a technical customer-facing role" | n/a |
| Applied AI Engineer | 12 (incl. 1 manager) | Commercial, Enterprise SF/NYC, Public Sector, Startups London, Startups Life Sciences, Physical AI: 4+. Enterprise Paris/Munich: "6+ years of experience as a Software Engineer, Solutions Architect, Forward Deployed Engineer, or technical founder". 3 Beneficial Deployments postings: no number (domain experience). Manager: 6+. | VERIFIED ("mostly 4+": 7 of 11 IC) |
| Applied AI Architect | 42 total, 37 non-manager: four at 3+ (Commercial; Startups SF/NYC; Beneficial Global & Public Health; Non-Profits), two at 4+, 20 at 5+, 2 at 7+ (7–10), 2 at 8+, 6 at 10+, 1 no number | Commercial (5192805008): "3+ years of highly technical experience as a software engineer (or equivalent) with some customer-facing exposure"; "you will be a Pre-Sales architect". Startups (5406982008): "3+ years…"; "Track record of selling technical products in competitive markets". | VERIFIED ("3–5+, up to 10+"). **The phrase "Commercial Solutions Architect" was not found in 5192805008: UNVERIFIED wording.** |
| "Solutions Engineer/Architect" title | 0 engineering roles (only "Solutions Marketing Manager") | — | VERIFIED |
| Early-career titles | Only the Fellows Program ×3 (AI Safety & Security; ML Systems & RL; Economics & Policy) | — | VERIFIED |
| **Software engineering postings** (title contains "Software Engineer") | **Of 92 reviewed: 0 state 0–2 years; 65 state 3+ (lowest real minimum 5+; one "3+" was lead years inside a 10+ line); 27 state no number (25 of those are Staff/Senior titled). 80 of 92 titles contain Staff, Senior, Lead or Manager.** | e.g. "Have 5+ years of software engineering experience with a strong focus on full-stack development" (Research Tools, 4981828008); "Have 6+ years of experience building software…" (Beneficial Deployments, 4942024008) | VERIFIED |

### Perplexity (supplementary)

Of 30 software engineering postings reviewed (titles containing "Software Engineer", plus "New Grad" and "Early Career"; managers excluded):
- **3 state 0–2 years:**
  - Early Career–Industry: "1+ years of professional software engineering experience, or a track record of strong internships".
  - Computer Growth: "2+ years… (we're open to strong junior and mid-level candidates…)".
  - Training Infrastructure: "2+ years of experience developing and shipping distributed systems".
- **21 state 3+.** Mostly 4+ or 5+. Monetization's "2+ Stripe" is secondary to "4+ years of professional software engineering experience".
- **6 state no number,** including the New Grad portal (closed).

Early Career–Industry also says: "New grads and current students should NOT apply to this role" and "We expect you to use agents and coding models aggressively… and to have sound judgment about when their output is wrong." (VERIFIED, daa9120e)

## 5. Applied AI engineering postings (OpenAI and Perplexity)

### OpenAI

The postings are customer-facing deployment roles ("Applied AI Engineer") or product-side agent roles. 42 non-manager "Applied AI Engineer" titles: 20 state a number (lowest 4–6) and 22 state none.

| Title | URL | Experience | Responsibility (quoted) |
|---|---|---|---|
| Applied AI Engineer, Enterprise | https://jobs.ashbyhq.com/openai/01091aed-427d-4e10-8cdb-fb500cf55bb9 | No number: "Have a demonstrated track record of designing, building, and delivering AI or machine-learning systems… from prototype to production" | "Work hands-on in code to build prototypes, evaluation harnesses, reference implementations, integrations, and production accelerators." / "Make sound technical decisions across models, agents, retrieval, tools…" |
| Applied AI Engineer, Startups | https://jobs.ashbyhq.com/openai/71e7252f-abb1-4b74-8e69-318413042357 | "5+ years of experience as a software engineer, ML engineer or equivalent" | "Experiment and prototype alongside customers, demonstrating practical use cases." |
| Applied AI Engineer, Plugins | https://jobs.ashbyhq.com/openai/ca9e0aeb-6df1-4b73-8ec0-2e9e124712f1 | "4-6 years of professional software engineering experience" | "Write production and sample code, build prototypes and reference implementations, and create the technical guidance, evals…" |
| Applied AI Engineer, Codex Core Agent (product-side) | https://jobs.ashbyhq.com/openai/577e6673-0a4a-491b-9a0d-facbdd3bdf3c | No number; "Have experience building or shipping machine learning or LLM-powered products." | "Work closely with research to develop and run evals to measure agent performance, regressions, failure modes, and edge cases." |

Conclusion: an "AI Engineer" role page for OpenAI is justified as an **experienced-hire target**. Matching postings are numerous, and every one that states a minimum asks 4+ years. There is no entry-level applied AI posting.

### Perplexity

| Title | URL | Experience | Responsibility (quoted) |
|---|---|---|---|
| MTS (Software Engineer, Applied AI) | https://jobs.ashbyhq.com/Perplexity/3c656963-876a-458d-bca6-916a42a24c1a | "5+ years experience building and shipping robust AI products" | "Personalization (LLM memory, context summarization, retrieval and ranking)"; "evaluation, offline/online A/B testing" |
| MTS (Applied AI Engineer, Agent Capabilities) | https://jobs.ashbyhq.com/Perplexity/5c561bd0-c180-4ee1-b079-647f3c20bdc0 | "Typically 6+ years of professional software engineering experience" | "Evaluate frontier models against real user tasks… and turn the most promising advances into production agent systems." |
| MTS (Answer Quality & Evals) | https://jobs.ashbyhq.com/Perplexity/7755eb0a-0f51-4286-b75e-591e44c741bc | "4+ years of software, data, or machine learning engineering experience" | "Build shared evaluation infrastructure that helps teams run reliable evals" |
| MTS (AI Software Engineer, Agent Engine) | https://jobs.ashbyhq.com/Perplexity/10a51134-6741-40ec-8cca-a8ac1534673b | No number ("Significant experience in at least one of the following areas") | "Designing frontier agent harnesses and systems to perform high-stakes, mission-critical work for our users" |

Conclusion: an "AI Engineer" role page for Perplexity is justified only as an **experienced-hire target** (4–6+ where stated), and all roles carry the MTS title. Perplexity's interview rounds are the shared MTS rounds; no AI-engineer-specific round is published. The Early Career–Industry posting lists "Experience building on top of LLMs: AI orchestration, RAG, evals, agents, tool use", which suggests applied AI skills are valued at early-career level. Whether that line is required or preferred was not confirmed.

## 6. Third-party FDE / SWE interview reports

| Source | Readable? | Basis / sample | Format claims (quoted) | Verdict vs ai-companies.md |
|---|---|---|---|---|
| interviewing.io OpenAI https://interviewing.io/openai-interview-questions | Yes (200) | No visible date. Topics compiled by "spoke to some current and former OpenAI engineers" and "cross-referenced… with Glassdoor data AND our own data-set of mock interviews". No sample size. | "They are currently piloting an agentic coding round as part of the onsite."; "AI use in OpenAI interviews is strictly prohibited, except in the beta agentic coding interview."; onsite lists agentic coding (beta), behavioral with senior manager (45 min), presentation (45 min), coding (1 h), system design (1 h), behavioral on teams (30 min); "You can choose the language for the coding rounds"; topics include "Time-based data structures", "Versioned data stores", concurrency, OOP. | VERIFIED |
| interviewing.io Anthropic https://interviewing.io/anthropic-interview-questions | Yes (200) | "The info below is based on conversations with Anthropic engineers in 2026." For "Mid to senior-level engineers". No sample size. | "Coding challenge… (60-90 mins). Note that this part of the process is in flux… many Anthropic teams are moving away from traditional coding challenges"; one candidate quote: "There were four levels… your code had to pass all the tests at one level to get to the next level."; onsite: HM, coding (CodeSignal), system design (Google Doc), second role-specific coding, company values; "The values/culture round is where most candidates fail, per Anthropic recruiters"; "Most coding rounds are carried out in a shared Python environment"; system design about "request batching, queuing"; "piloting an AI-assisted interview". | PARTLY: add the "in flux / moving away from traditional coding challenges" caveat. The black-box levels come from a single quoted candidate. |
| aced.io OpenAI New Grad https://www.aced.io/guides/openai-software-engineer-new-grad-interview | Yes (200) | "Updated 8 days ago" (≈2026-11-19); "Interview experiences 10"; but "This guide reflects one recent New Grad SWE interview loop at OpenAI." | Stages: recruiter screen; "A timed coding assessment on HackerRank or a similar platform"; first round "focused on a single algorithmic challenge"; final "An object-oriented design build, extended iteratively"; behavioral incl. "perspective on AI safety"; "team matching deferred until after the offer". One listed experience describes only a recruiter call plus a system design round. | PARTLY: the stage structure comes from **one loop**, not 10 |
| aced.io OpenAI FDE https://www.aced.io/guides/openai-forward-deployed-engineer-interview | Yes (200) | "Updated 8 days ago"; "Interview experiences 2"; written by an Aced co-founder | Early stage varies: "a take-home case study with a separate AI-enabled coding screen, back-to-back technical screens for coding and system design, or a single technical phone screen"; take-home "Roughly a week to submit working code, a running app, and a recorded walkthrough" and "not every loop includes one"; onsite coding "can be a 60-minute production-style build"; system design "with a focus on LLM deployment and agentic architecture"; "Some OpenAI coding interviews allow AI assistance and others prohibit it". | VERIFIED (thin sample: 2) |
| aced.io FDE blog https://www.aced.io/blog/forward-deployed-engineer-interview-the-definitive-2026-guide-fde (cited in roles.md) | Yes (200) | "Last updated 2 months ago"; no sample size | "Take-home project (~5 hours): Build something real on OpenAI's APIs (e.g., a RAG system, an agent, an evaluation harness)" | PARTLY: it **conflicts** with the newer aced FDE guide (about a week to submit; the build may take a few hours). Present the take-home length as variable. |
| aced.io Anthropic FDE https://www.aced.io/guides/anthropic-forward-deployed-engineer-interview | Yes (200) | "Updated 8 days ago"; no experience count shown; "reflects candidate experiences across Anthropic's Applied AI and adjacent engineering loops" | Recruiter screen; "Technical use-case screen: A practical scenario built around deploying Claude with MCP tooling and long-context reliability"; "Coding round: A practical, incremental coding exercise on a platform such as CodeSignal"; HM round; "Final panel: Solution design, plus behavioral and company values". Also: "You may be given access to Claude during this round" (use-case screen). On AI: "not during live interviews unless an interviewer tells you otherwise." | PARTLY: rounds verified. Add that Claude access may be granted in the use-case screen, which is consistent with "unless we indicate otherwise". |
| OpenAI careers FDE SF page (roles.md) https://openai.com/careers/forward-deployed-engineer-(fde)-sf-san-francisco/ | Yes (200) | Primary posting | "Bring 5+ years of engineering or technical deployment experience that includes customer-facing work"; "Travel up to 50% is required." | VERIFIED |
| Pragmatic Engineer | n/a | **Not cited in ai-companies.md or roles.md**, so nothing to verify | — | — |
| Glassdoor (Anthropic FDE/Applied AI Mar 2026; Perplexity May 2026 and others) | No: 403 earlier; not reopened | Search snippets only | — | UNVERIFIED (snippet only). Do not publish. |
| 1point3acres thread 1175318 | No: HTTP 403 on 2026-11-27 | — | — | UNVERIFIED |

## 7. Brand and logo usage

| Company | Official page | Rules on third-party use (quoted) | Simple Icons | Date |
|---|---|---|---|---|
| OpenAI | https://openai.com/brand/ ("OpenAI Design Guidelines"; HTTP 200) | Addressed to "partners, resellers, customers, developers, consultants, publishers, and any other third parties". Do: "Use the logo only when it directly relates to OpenAI services." Don't: "Use the logo without permission or outside OpenAI's terms."; "Misrepresent your relationship with OpenAI, imply endorsement, or confuse users about sponsorship."; "…or modify it in any way."; "DON'T stretch or alter wordmark in any way". "By using our logos, you agree to our Marks usage terms." | **Not listed.** The current develop-branch data (v16.38.1, 3,476 icons) has only "OpenAI Gym" | 2026-11-27 |
| Anthropic | https://www.anthropic.com/legal/trademark-guidelines (HTTP 200; "Effective Aug 1, 2024") | "You may only use our trademarks as specifically permitted by us and only in materials we approve beforehand."; "No alterations of our trademarks (changes to color, font, proportion, or otherwise) are permitted."; "You may not use our trademarks in a manner that implies Anthropic's sponsorship or endorsement, or a relationship or affiliation with Anthropic". https://www.anthropic.com/brand returns 404. https://www.anthropic.com/press-kit redirects straight to a ZIP of media assets. | Listed: "Anthropic" (source https://www.anthropic.com), plus "Claude" and "Claude Code". **No `guidelines` field.** | 2026-11-27 |
| Perplexity | https://www.perplexity.ai/hub/brand (HTTP 200; linked as "Brand Guidelines" in the site footer) | The page is a design system (symbol, logo, typography, colour, downloads) aimed largely at internal teams (it points to Slack channels such as "#design-creative-approvals-review"). **No third-party usage, endorsement or modification rules were found on it.** The Terms of Service (https://www.perplexity.ai/hub/legal/terms-of-service, version shown "Effective: January 1, 2027") say: "The Company's name, trademarks, logo and all related names… are trademarks of the Company". Its prohibited uses include "use, reproduce or remove any… trademark… logo… displayed on or through the Services". | Listed: "Perplexity" (source https://www.perplexity.ai). **No `guidelines` field.** | 2026-11-27 |
| Simple Icons disclaimer | https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md | "Simple Icons is released under CC0 - though that doesn't mean to imply that all icons within the project are also CC0."; "We ask that our users seek the correct permissions to use the icons relevant to their project."; "The lack of a `guidelines` entry for a particular brand does not imply that the brand has no guidelines." | 847 of 3,476 icons carry a guidelines link; these three do not | 2026-11-27 |

Process note: the press-kit URL served a ZIP file directly. It was saved by mistake while checking the page, then deleted without being opened or extracted. No other assets were downloaded. The Simple Icons metadata JSON was fetched only to read the entries.

Implication [ED]:
- OpenAI permits logo use only for content that directly relates to OpenAI services, with no implied endorsement and no modification. OpenAI is also absent from Simple Icons.
- Anthropic requires prior approval for any trademark use.
- Plain-text company names (nominative use) carry the lowest risk.
- Any logos would need a visible non-affiliation disclaimer and, for Anthropic, permission.

---

## Safe-to-publish statements (conservative)

**OpenAI**
- OpenAI's official interview guide describes:
  - application review;
  - an introductory call with a recruiter or hiring manager;
  - one or more skills-based assessments, which "may include" pair coding, take-home projects or technical tests;
  - typically 4–6 hours of final interviews with 4–6 people over 1–2 days, virtual by default.
- OpenAI says its engineering interviews generally look for well-designed solutions, high-quality code, optimal performance and good test coverage, along with communication and collaboration.
- OpenAI says AI-tool expectations vary by interview: some formats allow AI tools and others assess independent problem-solving without them. Candidates should check their prep materials or ask their recruiter.
- OpenAI's guide does not specify programming languages or a system design round. Third-party guides (interviewing.io, aced.io) report practical coding, system design and, for some candidates, a pilot agentic coding round. These reports are not official and may not reflect every loop.

**Anthropic**
- Anthropic's candidate AI guidance (last updated Jul 10, 2025) asks candidates to complete take-home assessments without Claude, and live interviews without AI assistance, unless Anthropic indicates otherwise. It encourages AI for preparation and for refining a self-written application.
- Anthropic's careers page says interviews take place over Google Meet and that technical roles use live coding tools such as Colab and CodeSignal. Anthropic publishes no official sequence of interview stages.

**Perplexity**
- Perplexity's official portal describes several possible technical rounds, and each role uses a subset:
  - Practical Assessment (45–90 min, CodeSignal);
  - Hands-on Coding (30–60 min, mostly CodeSignal);
  - Agentic Coding (requires coding agents);
  - Spike Round (up to 9 hours, no restrictions on AI use);
  - System Design (45–60 min);
  - Core Expertise.
- For hands-on coding, Perplexity strongly recommends Python and strongly discourages Java. It lists expected knowledge (common containers, sorting/searching, graph iteration, object-oriented design) and says it does not expect dynamic-programming recipes, esoteric data structures or advanced graph algorithms such as Dijkstra.
- Hands-on coding and practical assessments prohibit AI assistance, except documentation and asking about language libraries.
- Perplexity uses a Core Expertise round, not System Design, for early-career candidates without large-scale production experience. Candidates choose from at least four disciplines.
- Perplexity's general new-grad portal closed for 2026 and is expected to reopen at some point in 2027. For applicants outside its listed focus schools, it states it "typically" requires a CS/Math GPA of at least 3.92 and an A or A+ in an upper-level algorithms course, or other evidence of exceptional ability.

**Experience requirements (as of 2026-11-27)**
- OpenAI: of 158 "Software Engineer" postings reviewed, one (Software Engineer, Applied Emerging Talent) asks 0–1 years. Every OpenAI Forward Deployed Engineer posting reviewed (33 individual-contributor roles) asks 5+ years or more.
- Anthropic: of 92 "Software Engineer" postings reviewed, none states 0–2 years, and 80 carry Staff, Senior, Lead or Manager titles. Anthropic's Forward Deployed Engineer postings ask 4+ years (London) to 8+ years (Paris, Munich). Applied AI Engineer postings mostly ask 4+ years.
- Customer-facing AI roles at all three companies (Forward Deployed Engineer, Applied AI Engineer, Applied AI Architect, Solutions Engineer) are experienced-hire roles: none of the postings reviewed states fewer than 3 years. Present them as targets after professional experience.
- Experience requirements are job requirements, not interview content, and postings change frequently.

**Brands**
- Refer to companies by name only. Do not display OpenAI, Anthropic or Perplexity logos without the permissions their guidelines require. Never imply endorsement or affiliation.
