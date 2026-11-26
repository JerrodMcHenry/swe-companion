# Evidence register

A manual register of the employer evidence behind preparation paths and interview guides. Update it whenever a guide's evidence changes. The app does not read this file.

## Rules

- **Review intervals:** about six months for company hiring processes and postings; about three months for AI-tool policies and fast-changing assessment formats; about twelve months for general preparation resources.
- **Stale evidence:** evidence older than about twelve months, or past its review date, triggers a review, not automatic removal. A still-current official page can stay authoritative regardless of when it was first published.
- **Three different dates:** *Published* is the source's own date, if stated. *Accessed* is when this project last read it. Neither is a human educational review, which is recorded only in a guide's `verifiedOn` field under the CLAUDE.md standard.
- **Categories:** Official (employer page or posting), Official guidance (employer preparation advice), Candidate (candidate report), Third-party (level mappings, aggregators), Commonly recommended (preparation resources), Editorial.
- **Independence:** reposts or several reports from one aggregator do not count as independent evidence.
- **No automation:** no scraping or monitoring; review by hand at each batch.

## Google Early-Career Software Engineer (`/interview-prep/google`)

| Source | Category | Published | Accessed | Role / seniority | Geography | Limitations | Review by |
|---|---|---|---|---|---|---|---|
| Our hiring process (google.com/about/careers/applications/how-we-hire) | Official | Not stated | 2026-11-25 | All roles | Global | Generic to all roles | 2027-05-25 |
| Interviewing at Google: best practices (…/interview-tips) | Official guidance | Not stated | 2026-11-25 | All roles | Global | Behavioral focus; generic | 2027-05-25 |
| AI and Search not permitted in interviews (both pages above) | Official | Not stated | 2026-11-25 | All roles | Global | Policy may change quickly | 2027-02-25 |
| Software Engineer II, Early Career, job 109116638069957318 | Official (posting) | Open on access date | 2026-11-25 | Early career | US (Mountain View) | One posting; seasonal | 2027-05-25 |
| 13 further early-career postings (R1 Appendix A) | Official (postings) | Open on 2026-11-25 | 2026-11-25 | Early career | 13 outside the US | One-day snapshot | 2027-05-25 |
| Official prep videos (R1 S4–S9) | Official guidance | 2019 and 2025 | 2026-11-25 | Technical roles | Global | Reviewed from chapter lists only | 2027-11-25 |
| Levels.fyi Google levels | Third-party | Updated 2026-11-24 | 2026-11-25 | L3–L9 | Mostly US | Crowd-sourced; unofficial | 2027-05-25 |
| Aced L3 new-grad report (R1 S17) | Candidate | ~May 2026 | 2026-11-25 | L3 new grad | US | Partly paywalled; partly unreliable | 2027-05-25 |
| Roundz L3 reports (R1 S18, S19) | Candidate | 2025-05, 2025-06 | 2026-11-25 | L3 | US; India | Individual experiences | 2027-05-25 |
| FastPrep L3 reports (R1 S15, S16) | Candidate | 2025-11, 2026-06 | 2026-11-25 | L3 new grad | Not stated | One aggregator's reposts; not independent of each other | 2027-05-25 |

## Company paths published in T3 (sources detailed in the T2 table below)

| Path | Evidence strength | Main official sources | Weakest points | Next review |
|---|---|---|---|---|
| Amazon (`/interview-prep/amazon`) | Moderate–strong official, weak candidate | OA page; interview topics; interview loop; Leadership Principles; 10 US postings | Live-interview AI rule only from secondary reporting; design rounds from 2 reports | 2027-02-25 (AI rule); 2027-05-25 otherwise |
| Meta (`/interview-prep/meta`) | Weak | Hiring process FAQ; 2022 prep blog | No current generalist University Grad posting; AI-enabled round unconfirmed for new grads | 2027-02-25 |
| Microsoft (`/interview-prep/microsoft`) | Moderate official (all levels), weak entry-level | How we hire; Technical interviewing; Interview tips | No entry-level posting reviewed; candidate evidence from search summaries only | 2027-05-25 |
| Apple (`/interview-prep/apple`) | Weak | Postings only | No official interview guidance; one new-grad report | 2027-05-25 |
| Netflix (`/interview-prep/netflix`) | Insufficient for an interview path (eligibility note only) | Careers postings; culture page | No new-grad posting or interview guidance | 2027-02-25 (hiring season) |

All five paths were last checked on 2026-11-25. None has a `verifiedOn` date; that is reserved for review by a person.

## Other Employer or Specific Job Posting (`/interview-prep/other-employer`)

Editorial guidance built on the cross-employer summaries in R3 §4 and §9 and R4 §6. There are no employer-specific claims. Updated in T4 to point to the five employer-type paths. Review by 2027-05-25.

## Entry-Level Software Engineer role (`/interview-prep/software-engineer`)

| Source | Category | Accessed | Limitations | Review by |
|---|---|---|---|---|
| R1, R2 and R3 posting samples (Google, Amazon, startups, enterprise) | Official (postings) | 2026-11-25 | One-day snapshots; samples vary by company type | 2027-05-25 |
| R4 posting sample (28 postings) | Official (postings) | 2026-11-25 | Keyword counts; mostly US technology companies | 2027-05-25 |

## Interview-format guides

| Guide | Main employer sources | Accessed | Review by |
|---|---|---|---|
| Coding & Algorithms | Google hiring page; Meta hiring FAQ (AI assistant); Amazon topics and OA pages | 2026-11-25 | 2027-02-25 (AI policies) |
| Behavioral | Google interview tips; Meta prep blog (updated 2022); Amazon interview guide (2025-04-08) | 2026-11-25 | 2027-05-25 |
| Rapid-Fire Technical Questions | Amazon topics page; Apple and Google candidate reports | 2026-11-25 | 2027-05-25 |
| OOP & Low-Level Design | Amazon interview topics (object-oriented design); candidate reports R2 A8–A9, R1 S15; question lists: Devinterview, GeeksforGeeks | 2026-11-25 | 2027-05-25 |

## Unit 4 Engineering Fundamentals topics (S5)

| Claim used | Source | Category | Accessed | Limitations | Review by |
|---|---|---|---|---|---|
| Testing 17/28, code review 15/28, SQL/relational 15/28, security 11/28, Git 10/28 | R4 posting sample (§6 keyword counts) | Official (postings) | 2026-11-25 | Backend/full-stack sample only; mostly US; keyword counts | 2027-05-25 |
| Amazon topics: how the internet works, operating systems, relational vs non-relational databases (basic level); well-tested code | Amazon interview topics (R2 A1; re-checked T2) | Official | 2026-11-25 | Topic list, not question frequency | 2027-05-25 |
| Microsoft: interviewers likely expect you to test your solution | Microsoft interview guidance (T2) | Official | 2026-11-25 | General guidance | 2027-05-25 |
| No dedicated US new-grad SQL round found; SQL assessments in Accenture India OA, Wise (UK), Klaviyo internship | R4 §5, §14 | Candidate | 2026-11-25 | Absence of evidence, not proof | 2027-05-25 |
| Free-threaded CPython: experimental in 3.13 (PEP 703), officially supported but optional in 3.14 (PEP 779) | What's New in Python 3.13 and 3.14 | Official documentation | 2026-11-25 | Status may change in 3.15+ | 2027-11-25 |
| Password storage: Argon2id first; scrypt minimum N=2^17, r=8, p=1; bcrypt for legacy | OWASP Password Storage Cheat Sheet | Established guidance | 2026-11-25 | Parameters revised periodically | 2027-05-25 |

## Unit 5 Practical Engineering topics and guides (S6)

| Claim used | Source | Category | Accessed | Limitations | Review by |
|---|---|---|---|---|---|
| Debugging rounds (Stripe, Notion, Scale AI); Capital One technical case and agentic round | R3 C1–C4, C8–C9 (FastPrep) | Candidate | 2026-11-25 | Rewritten aggregator reports; prevalence unknown | 2027-02-25 |
| Meta built-in AI assistant in many interviews; reading, debugging, building on existing code | Meta hiring process (R2 M1) | Official | 2026-11-25 | New-grad loop inclusion unconfirmed | 2027-02-25 |
| Google AI not permitted; Microsoft no outside assistance unless permitted | R1 S1; R2 MS1 | Official | 2026-11-25 | Policies change quickly | 2027-02-25 |
| Apple debugging existing code 3/17, AI-workflow questions 9/17 | R2 AP6 | Candidate (aggregated) | 2026-11-25 | Mixed levels and teams | 2027-05-25 |
| Code review 15/28; AI-tool expectations ~8/18 | R4; R3 §5 | Official (postings) | 2026-11-25 | Samples; keyword counts | 2027-05-25 |

## T2 verification sources (paths to be published in T3/T4; details in t2-evidence-verification.md)

| Target | Source | Category | Published | Accessed | Role / seniority | Geography | Limitations | Review by |
|---|---|---|---|---|---|---|---|---|
| Amazon | SDE online assessment page (amazon.jobs …/university/sde-oa) | Official | Not stated | 2026-11-25 | University SDE | Global | OA content may vary by country | 2027-05-25 |
| Amazon | Software development interview topics | Official guidance | Not stated | 2026-11-25 | SDE | Global | Generic; new-grad weighting inferred | 2027-05-25 |
| Amazon | Interview loop and Leadership Principles pages | Official guidance | Not stated | 2026-11-25 | All roles | Global | Not SDE-specific | 2027-05-25 |
| Amazon | 10 US early-career SDE postings (R2 A6) | Official (postings) | Aug–Nov 2026 | 2026-11-25 | Early career | US | One-day snapshot | 2027-05-25 |
| Amazon | ITPro / Business Insider report on AI use in interviews | Third-party | 2025-02 | 2026-11-25 | All roles | Global | Secondary report of internal guidance; no official page found | 2027-02-25 |
| Amazon | FastPrep new-grad reports (R2 A8, A9) | Candidate | 2026-11 | 2026-11-25 | SDE I new grad | US | 2 reports; one rewritten | 2027-05-25 |
| Meta | Hiring process FAQ (AI assistant in many interviews) | Official | Current | 2026-11-25 | All roles | Global | New-grad applicability not stated | 2027-02-25 |
| Meta | Job search: no generalist SWE University Grad posting | Official (absence) | — | 2026-11-25 | University grad | US | Seasonal | 2027-02-25 |
| Meta | Preparing for your SWE interview (blog) | Official guidance | Updated 2022-10-06 | 2026-11-25 | SWE | Global | Predates AI-enabled rounds | 2027-05-25 |
| Meta | Third-party guides on the AI-enabled coding round (interviewing.io, DEV, Prepfully) | Third-party / Candidate | 2025–2026 | 2026-11-25 | Mostly experienced | US | Conflicting; pilot status unclear | 2027-02-25 |
| Microsoft | How we hire; Technical interviewing; Interview tips | Official guidance | Not stated | 2026-11-25 | All levels | Global | Not entry-level specific | 2027-05-25 |
| Microsoft | Glassdoor new-grad reports (search summaries) | Candidate | 2026 | 2026-11-25 | New grad | Mixed (Denmark, India, US) | Anonymous; not read in full | 2027-05-25 |
| Apple | Job search: 2 US "Early Career" engineering postings | Official (postings) | Aug–Oct 2026 | 2026-11-25 | Early career | US (Austin) | Team-specific; few postings | 2027-05-25 |
| Apple | FastPrep new-grad and AI-interview reports (R2 AP5, AP6) | Candidate | 2024–2026 | 2026-11-25 | Mixed | US | Thin; aggregated | 2027-05-25 |
| Netflix | Careers API: 139 SWE results, mostly L5/L6; no new-grad posting | Official (postings) | Current | 2026-11-25 | All levels | US + international | Seasonal | 2027-02-25 |
| Netflix | Software Engineer Intern – Summer 2027 posting | Official (posting) | Current | 2026-11-25 | Students (grad Dec 2027–2028) | US (Los Gatos) | Internship, not full-time | 2027-02-25 |
| Netflix | Culture page (jobs.netflix.com/culture) | Official | Current | 2026-11-25 | All roles | Global | Values, not interview format | 2027-11-25 |
| Netflix | Simplify new-grad guide | Third-party | 2026-11 | 2026-11-25 | New grad | US | Secondary | 2027-05-25 |
| Established tech | Pinterest AI-in-hiring page (R4 O1) | Official | Current | 2026-11-25 (R4) | All roles | US | Returned 403 to automated access in T2 | 2027-02-25 |
| Established tech | Walmart Global Tech, DoorDash reports (Glassdoor search summaries) | Candidate | 2016–2026 | 2026-11-25 | Mostly new grad and intern | US | Anonymous; many old | 2027-05-25 |
| Enterprise | Capital One student interview page | Official | Current | 2026-11-25 | Students | US | Single employer dominates the category | 2027-05-25 |

## Known gaps after T2

- Meta and Microsoft entry-level loop content; Apple team variation; Amazon's official AI-in-interview wording.
- Established-tech new-grad formats and AI-focused startup processes (small, mostly candidate evidence).
- Postings are seasonal snapshots (2026-11-25); re-check each company at T3 publication.

## Employer-type paths (T4, published 2026-11-25)

Each path is a qualified default for a category, not a description of one employer's process. Details in t4-employer-type-notes.md.

| Path | Main sources | Category | Evidence strength | Limitations | Review by |
|---|---|---|---|---|---|
| Early-Stage Startups (`/interview-prep/early-stage-startups`) | YC job list snapshot (3/32 accept new grads); YC job pages for Corelayer (re-checked 2026-11-25), Confido, Lamar Health, MSPilot (R3 O1) | Official (postings, individual companies) | Weak on interviews | YC listings only; four companies; DSA absence not evidence of no DSA | 2027-05-25 |
| AI-Focused Startups (`/interview-prep/ai-focused-startups`) | Decagon, xAI, Plaud, Notion AI new-grad reports (R3 C3, C5–C7) | Candidate (aggregator, rewritten) | Weak | Small sample; no official process page found; AI policies change | 2027-02-25 |
| Growth-Stage Companies (`/interview-prep/growth-stage-companies`) | Stripe, Notion, Scale AI reports (R3 C1–C4); Stripe Bug Squash (R3 O2, dated; re-checked 2026-11-25); entry-level posting snapshot (R3 §3.1) | Candidate; Official (dated) | Moderate | Mostly one aggregator; some companies keep Big Tech-style loops | 2027-05-25 |
| Established Technology Companies (`/interview-prep/established-tech-companies`) | Pinterest AI-in-hiring page (official; read in browser 2026-11-25); DoorDash, Pinterest, Affirm postings (R3); GitLab handbook (non-entry); one retailer's third-party screen (T2) | Official; Candidate | Weak | New-grad interview content mostly unverified | 2027-05-25 |
| Enterprise & Structured Early-Career Programs (`/interview-prep/enterprise-early-career-programs`) | Capital One interview pages (official, re-checked); JPMorganChase SEP page and Digital Handbook (HireVue/HackerRank round, re-checked 2026-11-25); Capital One Power Day and agentic reports (R3 C8–C9); BofA, Fidelity postings | Official; Candidate | Moderate (dominated by Capital One) | Finance-heavy; case, video and agentic formats not generalizable | 2027-05-25 (AI rounds 2027-02-25) |
