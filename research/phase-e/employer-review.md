# Phase E — Employer page review

Date checked: **2026-11-27** for every row unless stated. Builds on `research/expansion-2026-11/` (ai-companies, quant-firms, phase-b/c/d); completed research is not repeated. Methods: curl with HTML text extraction (raw HTML for Google, whose policy text sits in embedded JSON); WebFetch; public job-board APIs (Ashby `openai`, `Perplexity`; Greenhouse `anthropic`); Claude in Chrome, signed out, for metacareers.com, citadelsecurities.com and hudsonrivertrading.com, which block curl. Clicking FAQ accordions was the only interaction. No binaries, no paid or leaked content. Quotes are verbatim and under 25 words.

Scope of edits: `content/companies/{google,amazon,meta,apple,microsoft,netflix,openai,anthropic,perplexity,jane-street,citadel-securities,hudson-river-trading,jump-trading,optiver}.ts`. `npx tsc --noEmit -p .` passes. `npm run build` not run (parallel edits).

Rendering reminder: `notes` show on every role page where the key appears (including roleDefaults pages for Frontend, Data, ML and Solutions), so notes were reworded where they only held for one role.

## AI-in-interview policies (current official statements)

| Company | Statement | Source and date | Status |
|---|---|---|---|
| Google | "Google Search and AI are amazing tools, but are not permitted to be used during your interviews." (interview tips); "AI tools are not permitted to be used during your interviews." (how we hire) | https://www.google.com/about/careers/applications/interview-tips ; /how-we-hire/ — undated, re-read 2026-11-27 (text is in embedded page data; WebFetch misses it) | Official, confirmed |
| Amazon | "we've reimagined our technical assessments to better reflect how SDEs are actually working" / "work with an interactive AI assistant on a real coding platform" | https://www.aboutamazon.com/news/workplace/artificial-intelligence-resume-jobs-hiring-amazon — 22 Jan 2026 | **New** official statement (assessments). The SDE OA prep page (undated) still says public documentation only and does not mention an assistant. No official live-interview policy found; 2025 ban is secondary reporting (ITPro / Business Insider). |
| Meta | "Select roles now include an authorized AI assistant within CoderPad during technical interviews." / "No outside AI tools or assistance are authorized" | https://www.metacareers.com/hiring-process/ — undated, WebFetch 2026-11-27 | Official, confirmed; adds CoderPad and the models offered (Claude, ChatGPT, Gemini, Meta's). Which roles: not stated. |
| Apple | none found | Web search + careers site, 2026-11-27 | A third-party blog (fonzi.ai) claims a ban; not used |
| Microsoft | candidates should "demonstrate their own skills without outside assistance unless explicitly permitted" | https://careers.microsoft.com/v2/global/en/hiring-tips.html — undated (fy26 assets), WebFetch 2026-11-27 | Official, confirmed; also encourages AI "during preparation" |
| Netflix | none found | careers site (no new search beyond phase D) | — |
| OpenAI | "Expectations for AI and other tools vary by interview: some formats intentionally allow them, while others are designed to assess your independent problem-solving without AI tools." | https://openai.com/interview-guide/ — undated, curl 2026-11-27 | Official, unchanged |
| Anthropic | "This is all you–no AI assistance unless we indicate otherwise." (live); take-homes "without Claude unless we indicate otherwise" | https://www.anthropic.com/candidate-ai-guidance — "Last updated Jul 10, 2025", curl 2026-11-27 | Official, unchanged |
| Perplexity | Hands-on coding: no AI except docs and library questions; Agentic Coding requires agents; Spike round unrestricted | https://interviewresources.perplexity.ai/ — undated, verified 2026-11-27 (phase B) | Official, unchanged |
| Jane Street | "Most rounds will continue to be traditional coding interviews, conducted without LLM assistance." Trial campus rounds involve using LLMs | https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/ — 2 Nov 2026 | Official |
| Citadel Securities | none found (0 mentions of AI on either interview page) | both interview pages, browser 2026-11-27 | — |
| HRT | "Use of AI tools by an applicant during interviews or assessments is strictly prohibited, unless otherwise instructed or agreed upon." | all 86 Greenhouse postings (phase C, 2026-11-27) | Official (postings) |
| Jump Trading | none found; postings expect AI tools on the job | phase C | — |
| Optiver | none found | tips page (21 Mar 2025), Europe FAQ (11 Jun 2026) | — |

## Per company

### Google
- Issues: `coding` note ("Graphs, trees, recursion…") came from SWE candidate reports but also showed on Data Engineer and ML pages; "Behavioral" format was labelled Official but included a candidate-reported "Googleyness" round.
- Corrections: note now "Early-career SWE reports: …"; behavioral format keeps only Google's official tips plus a neutral "candidates separately report a dedicated behavioral round"; evidence line records the AI policy re-read date; Solutions (Customer Engineer) line adds "No Google interview guidance specific to these roles was found; prepare from the posting."
- Remaining: Google's pages are undated; L3 label remains third-party.

### Amazon
- Issues: AI fact said "Not stated officially" (Third-party). Amazon's own 22 Jan 2026 post says SDE technical assessments now include an interactive AI assistant.
- Corrections: AI fact → Official, dated; `ai` note cites the Jan 2026 statement; "AI and tools" details separate the OA prep page (docs only, no assistant mentioned), the Jan 2026 post, and the absence of an official live-interview policy; source added. `coding` note scoped to SDE.
- Remaining: the OA prep page and the Jan 2026 post are not reconciled by Amazon; which candidates get the AI-assisted assessment is not stated. Solutions: AWS 2021 blogs remain the only official SA guidance (labelled 2021).

### Meta
- Retry of job pages (Chrome, 2026-11-27): the `/jobs/<id>/` form loads; `/profile/job_details/` does not.
  - Data Engineer, Product Analytics (https://www.metacareers.com/jobs/1283364266159062/): "4+ years of experience where the primary responsibility involves working with data" — **verified**.
  - ML: three current "Software Engineer, Machine Learning" postings sampled: Master's + "12 months of work experience" (2542490782884946); Master's + "3 years of work experience" (1061344469849575); "12+ years of experience designing, building, and deploying large-scale machine learning systems" (1401543682021600); a PhD ML intern posting is listed — **partly verified (sample of 3)**.
  - Front end: searches for "front end", "Front End Engineer" and "Software Engineer, Front End" returned no front-end-titled posting on the first results page; search-engine links to older FE postings now show "no longer available" — **still unverified**.
  - University grad search: 33 results, none a generalist SWE role (page 1 read).
- Corrections: AI fact/format/note/caveat updated to the FAQ's CoderPad and "no outside AI" wording; caveat now says Meta confirms AI-assisted interviews for "select roles" without naming them; eligibility and other-roles lines re-dated; DE posting added to sources.
- Remaining: the Front End Engineer role page rests on Meta's official FEE prep page, not on a current posting.

### Apple
- Issues: "Process: Set by each team; no official guide" was labelled Official although "set by each team" comes from reports; caveat said "Apple publishes no … guidance" (categorical).
- Corrections: fact → "No official interview guide found (Nov 2026); reports say it varies by team" (Varies); caveat and evidence now "none found in our review", including no AI policy.

### Microsoft
- Corrections: AI fact uses the official wording; caveat "not published" → "no entry-level round list was found in our review"; evidence line records the AI re-read and that Microsoft encourages AI in preparation.

### Netflix
- Corrections: "Not published" / "No reliable description … exists" → "none found in our review (Nov 2026)"; caveat adds no AI statement found and recruiter precedence. Posting counts not re-checked (still 25 Nov 2026).

### OpenAI
- Re-check (Ashby API, 876 postings, 2026-11-27): 159 titles contain "Software Engineer" (phase B: 158); only "Software Engineer, Applied Emerging Talent (2027)" states "0-1 years of experience in software engineering or a relevant field" (https://jobs.ashbyhq.com/openai/55150071-fce8-48f5-aea4-14ed78b83511). 40 FDE titles; every individual-contributor FDE posting states 5+ (some 6+ or 7+). `levels` line accurate and dated.
- Corrections: `coding` note "publishes no topic list" → "No official OpenAI topic list was found (Nov 2026)"; `customer-discovery` note said "Forward deployed postings…" but also shows on the Solutions page → reworded as a customer-facing job duty, not a confirmed round; Experience fact now precise and dated; caveat dates the guide re-read.

### Anthropic
- Re-check (Greenhouse, 634 postings): 92 "Software Engineer" titles; the only postings mentioning ≤2 years are Staff+ roles where "2" sits beside an 8+ main requirement. No intern/new-grad engineering titles. `levels` line accurate.
- Corrections: "publishes no topic list / stage list / official sequence" → "none found (Nov 2026)"; `agents` note marked as a job requirement, not an interview topic; Experience fact now quantified and dated; caveat adds that recruiters may allow Claude in a round (consistent with "unless we indicate otherwise").

### Perplexity
- Re-check (Ashby, 150 postings): New Grad portal still says "The general application portal has closed for 2026. We will reopen applications at some point in 2027." Early Career–Industry asks "1+ years of professional software engineering experience, or a track record of strong internships".
- Corrections: `levels` said "3 stated 0–2 years"; the three ask 1+ or 2+ → "3 asked 2 years or less (lowest 1+)". Coding fact adds the library-question exception. Evidence line summarizes the per-round AI rules.

### Jane Street
- Corrections: LLM fact dated ("Since Nov 2026"); caveat adds that the recruiter says whether a round involves LLMs. No other issues.

### Citadel Securities (largest change)
- Finding: the live site is readable in a browser (curl still 403). The URL previously cited as the campus process now hosts **"Experienced Professionals: Engineering Interview Process", dated July 23, 2026**. The campus process moved to https://www.citadelsecurities.com/careers/career-perspectives/internship-and-new-graduates-engineering-interview-process/ (page date **July 24, 2024**; the previous note's "Nov 2024" came from the archive copy and could not be reconciled).
- Experienced page quotes: "you spend the day on one real problem. You scope it, build it, defend it and stretch it"; onsite "Four to five hours"; tools "Shared coding environments (CoderPad or similar)"; problems from "order books, matching engines and market-data pipelines"; "Memorizing common algorithm puzzles will be less useful here than in a typical coding interview."; languages "Role-dependent. Most of our production systems are in C++, and many roles will expect you to interview in it".
- Campus page quotes: "There are four steps in the process. Typically, it takes about eight weeks"; "This 45-minute remote interview will cover both technical and behavioral skills"; "Our core programming languages are Python and C++, but we welcome any languages."; "The second-round usually consists of three 45-minute interviews."
- Corrections: both pages linked and dated; facts split campus vs experienced plus "no AI policy found"; Quantitative Developer list (experienced roles) reordered to system design → C++ → systems coding exercises → low-level design → coding → memory, concurrency, performance → behavioral; new notes for `system-design`, `cpp-practical`, `lld`; caveat no longer claims the only process is campus-oriented.
- Remaining: no AI policy; postings still read via Wayback.

### Hudson River Trading
- Finding: the 2021 guide is **not** the most recent official guidance. "Answers to Questions I Often Get: Engineering and Interviewing at HRT" (Joe Smith, **published Oct 2, 2025**), https://www.hudsonrivertrading.com/hrtbeat/engineering-and-interviewing-at-hrt/. Quotes: "Right now you can choose between C++, Python, or Typescript/Python (for Fullstack)"; onsites "generally composed of coding and debugging rounds, technical design discussions, and team fit"; "We do our best to stray away from “burst of insight” leet-code style questions."; "we administer the same technical tests to candidates at all levels"; first pitfall "A shallow understanding of fundamentals."
- Corrections: facts, formats, notes and caveat rebuilt around the 2025 post with the 2021 guide retained and dated; added a `behavioral` note (communication rated as highly as technical ability); caveat says it is one engineer's account and HRT keeps iterating.
- Remaining: the 2025 post mentions full-stack (TypeScript/Python) engineering; HRT's `roles` list was not changed (needs product-owner approval).

### Jump Trading
- Corrections: card, note, fact and format now say "No published interview guidance found (Nov 2026 review)"; AI fact "no interview AI policy found".

### Optiver
- Corrections: evidence line dates the Europe FAQ (11 Jun 2026) and records no AI policy; caveat adds recruiter precedence.

### Solutions Engineer pages
- Google, Meta, Apple, Microsoft, OpenAI, Anthropic, Perplexity: no official SE/SA/CE interview guidance found; no SE format is labelled Official. Amazon's AWS early-career SA advice is official and labelled 2021. OpenAI's `customer-discovery` note (shown on the SE page) was reworded from an FDE-specific claim.

## Unresolved
- Meta front-end posting minimums (no current FE-titled posting found).
- Amazon: which candidates take the AI-assisted assessment; no official live-interview AI policy.
- Apple, Netflix, Citadel Securities, Jump, Optiver: no official AI policy found.
- Citadel campus page date: live page shows 24 July 2024; earlier notes cited Nov 2024 from the January 2026 archive.

## roleDefaults (content/companies.ts, not edited)
- `quant-developer` defaults omit `system-design` and `lld`. Citadel Securities' experienced process (July 2026) and HRT's 2025 post (technical design discussions) suggest design matters for experienced quant-developer roles. Both companies have their own lists, so this only affects future employers. Suggestion only.
- No other concerns.

## Healthcare, insurance and fintech vs banks (research only; employer-type files not edited)

Checked 2026-11-27, official careers pages only. Epic and Goldman Sachs quotes were re-verified by curl. The Capital One quote was read by a delegated fetch and did not show up in curl text (the page renders client-side), so treat it as verified once, not twice.

| Employer | Official evidence (verbatim) | URL | Differs from general enterprise prep? |
|---|---|---|---|
| Epic Systems | "Our assessments include logic and reasoning questions and require no prep work." Intern page: "Technical assessments and a final interview—that's all." | https://careers.epic.com/applicationprocess/ ; https://careers.epic.com/jobs/intern/ | **Yes**: logic and reasoning assessment, not a LeetCode-style OA. An on-site (Verona) requirement was **not** stated on the pages read (unverified). |
| UnitedHealth Group / Optum | Lists "Software engineering - Develop software that transforms the healthcare industry and improves lives." | https://www.unitedhealthgroup.com/careers/en/early-careers/programs/technology-and-analytics.html | No evidence. The TDP rotation details redirect to job search (unverified). |
| Progressive | "Progressive often conducts tech screens via a video conference with one or more subject matter experts." / "questions focus on your current or past experiences with the technologies needed for the job." | https://careers.progressive.com/posts/how-to-prepare-for-a-technical-screening (Oct 2023 post; Wayback 20260408, live 403) | Somewhat: an experience-based Q&A screen, which our projects and behavioral sets already cover. |
| State Farm | "you may be asked to complete pre-employment and/or language proficiency assessments." | https://jobs.statefarm.com/employment-process (Wayback 2026, live 403) | No (generic). |
| GEICO, Oracle Health | — | careers.geico.com is JavaScript-only; Oracle Health not checked | Unverified |
| Capital One (fintech-style bank) | "The last step of the process is the Power Day." / "A case interview is when we present you with a hypothetical scenario and objective" | https://www.capitalonecareers.com/student-and-grad-application-questions-answered-students-cdev | **Yes**: the Technology Development Program adds a case interview to its technical rounds. |
| JPMorgan Chase | "a two‑year development program"; FAQ: "Technical assessments may take the form of online tests" | https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime ; /careers/how-we-hire/faqs | No: same as general enterprise prep. |
| Goldman Sachs | candidates "work within an existing application built using Django (Python), Node.js (JavaScript), or Spring Boot (Java) to diagnose and resolve issues"; "Software Diagnostics Challenge: 45 minutes" | https://www.goldmansachs.com/careers/blog/guide-to-hackerrank | **Yes**: a debugging exercise in an unfamiliar codebase. The page also mentions a "limited" built-in AI assistant. |

**Conclusion:** separate healthcare, insurance or fintech pages are **not justified**. On the pages read, no healthcare or insurance employer made domain knowledge or HIPAA an interview topic. The real differences belong to individual employers (Epic's logic assessment, Capital One's case interview, Goldman's diagnostics challenge), and existing categories already cover them (practical/debugging, behavioral, projects). Each fits as one line on the Enterprise page.

**Proposed Enterprise lines** (for the employer-type owner):
1. Epic's careers site says its assessments include logic and reasoning questions and need no preparation, followed by a final interview. — https://careers.epic.com/applicationprocess/
2. Capital One's careers site lists online assessments, then technical, behavioral and case interviews at a final "Power Day" for its Technology Development Program. — https://www.capitalonecareers.com/student-and-grad-application-questions-answered-students-cdev
3. Goldman Sachs says its engineering assessment includes a 45-minute challenge diagnosing issues in an existing Django, Node.js or Spring Boot application: practise debugging unfamiliar code. — https://www.goldmansachs.com/careers/blog/guide-to-hackerrank
4. Regulated industries (healthcare, insurance, banking) rarely test domain knowledge in the postings and pages we reviewed; read the posting for compliance or security expectations and prepare examples. — Editorial, based on the rows above.
