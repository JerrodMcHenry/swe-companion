# Phase D: employer types × Frontend, Solutions, Data and ML Engineer

Date checked: **2026-11-27** for every row. Scope: the five employer-type pages only (`early-stage-startups`, `ai-startups`, `growth-stage`, `established-tech`, `enterprise`). Pages were read with curl (HTML text extraction), the public Greenhouse and Ashby board APIs, YC's embedded page data and WebSearch for discovery only. No binaries, no paid or leaked content. Quotes are verbatim and under 25 words. Posting counts are **one-day snapshots** and are matched by title keywords, so they are approximate.

Labels: **Official** (employer page) · **Job posting** · **Candidate-reported** · **Third-party** · **Editorial**.
Verdicts: **VERIFIED** · **PARTLY** · **UNVERIFIED** · **FALSE**.

Postings establish that a role is hired and what it requires; they say nothing about interview content unless the posting describes the process (marked below).

---

## A. YC jobs pages (early-stage)

### A1. Which role pages exist

| Claim | Source | Evidence | Verdict |
|---|---|---|---|
| YC has a per-role page for Software Engineer | https://www.ycombinator.com/jobs/role/software-engineer | title "Software Engineer jobs at Y Combinator startups" | VERIFIED |
| YC has sub-role pages such as `/software-engineer/frontend`, `/machine-learning`, `/data` | same path + suffix | All return 200 but render the generic Software Engineer page; the sidebar's only sub-paths are locations ("Explore Software Engineer jobs by location"). `/sales/sales-engineer` renders the Sales page | FALSE: no sub-role pages. Do not link them |
| Role pages that do exist | page data `jobRoles` | software-engineer, designer, product-manager, recruiting-hr, sales-manager, marketing, support, operations, science | VERIFIED |
| Postings carry an engineering sub-type and an experience field | page data on each posting (`roleSpecificType`, `minExperience`) | sub-types seen: Full stack, Backend, Machine learning, AI engineer, Devops…; experience values include "Any (new grads ok)" | VERIFIED. Filtering by sub-type is only possible on Work at a Startup (login), not on the public pages |

### A2. Snapshot of the public SWE pages (main + 8 location pages, 311 unique postings)

| Role | Count (title or sub-type) | Examples | Verdict |
|---|---|---|---|
| Frontend | 1 by title (tagged "Full stack"); 0 tagged Frontend | Axiom "Frontend Engineer", "Any (new grads ok)" — https://www.ycombinator.com/companies/axiom/jobs/GNTewkz-frontend-engineer | PARTLY: frontend work exists but is mostly folded into Full stack (91 of 311) |
| Solutions / Sales Engineer | 1 Sales Engineer, ~4 Solutions Consultant | Vector "Sales Engineer", 3+ years — https://www.ycombinator.com/companies/vector/jobs/qc79aS0-sales-engineer | VERIFIED as hired; experienced only in sample |
| Data Engineer | 2 | Vector "Senior Data Engineer" (6+ years); Vori "Forward Deployed Data Engineer" (3+ years) | VERIFIED as hired; experienced only |
| ML Engineer | ~5 (Machine learning sub-type or title) | Whatnot "Machine Learning Engineer, Applied Research", "Any (new grads ok)" — https://www.ycombinator.com/companies/whatnot/jobs/rQ9Bdof-machine-learning-engineer-applied-research ; Terra API "AI Engineer", tagged "Engineering, Machine learning", "Any (new grads ok)" | VERIFIED; note Whatnot is a late-stage YC company, not early-stage |
| New-grad share overall | 98 of 311 "Any (new grads ok)" | — | VERIFIED (snapshot) |

### A3. Interview differences stated in YC postings

| Claim | Source | Exact quote | Verdict |
|---|---|---|---|
| A YC startup's Sales Engineer process includes a simulated discovery call and demo | Vector Sales Engineer posting (Job posting) | "Panel Interview with Simulated Discovery and Demo" | VERIFIED for one posting only |
| The same process is mostly executive interviews | same | "Formal interviews with: VP, Marketing, VP, Operations, COO, and CEO." | VERIFIED |
| Frontend, data and ML postings in the sample describe their interview | Axiom, Vector Data Engineer, Whatnot, Terra API | No "About the interview" section found | UNVERIFIED (no evidence either way) |

---

## B. AI-focused startups (Ashby boards: Decagon, Cursor, Harvey, Sierra)

| Claim | Source | Evidence / quote | Verdict |
|---|---|---|---|
| Solutions / Sales Engineers are hired, in volume at some | api.ashbyhq.com/posting-api/job-board/{sierra,decagon,harvey} | Sierra 19 "Enterprise Sales Engineer" titles; Decagon 3; Harvey 2; Cursor 0 (hires FDEs instead, 11) | VERIFIED |
| Those SE roles are experienced | Decagon Enterprise Solutions Engineer, https://jobs.ashbyhq.com/decagon/95dadea4-8bd2-421a-bf3f-51c04e102ee2 | "4-6 years of customer facing experience in a sales engineering (pre-sales) role" | VERIFIED |
| SE job content centres on demos | Sierra Enterprise Sales Engineer, https://jobs.ashbyhq.com/Sierra/8152eaf6-012b-4154-95e2-7d6c52faba93 | "designing and demoing Sierra's incredible platform, leading technical and architecture reviews" | VERIFIED (job duties, not interview content) |
| ML hiring is "Research Engineer", not "ML Engineer" | same boards | Decagon 6 Research Engineer titles; Harvey 3; Sierra 1; no "Machine Learning Engineer" titles | VERIFIED (snapshot). Overlaps the site's AI Engineer role and the excluded research track |
| Frontend titles | same | Harvey 3 (all Staff); others 0 | VERIFIED: senior only |
| Data Engineer titles | same | Decagon 2 Data Infrastructure (Senior/Staff) + 1 analytics; Cursor 1; Harvey 2 analytics | VERIFIED: experienced only |
| New-grad route is agent / product engineering, not these four roles | Sierra APX, https://jobs.ashbyhq.com/Sierra/d9c445da-c7b4-43a3-8d71-d367681c3015 | "open to students graduating from undergraduate or Master's programs by June 2027"; "Build and ship AI agents with Sierra's customers" | VERIFIED. This is FDE/AI-engineer shaped, already covered by the site's roles |

No interview-process description for these four roles was found on the AI startup postings.

---

## C. Growth-stage (Stripe, Notion, Ramp, DoorDash, Databricks)

### C1. Title counts (snapshot)

| Board | Total | Frontend | Solutions (SA/SE/SC) | Data Eng (incl. analytics eng) | ML Eng | Source |
|---|---|---|---|---|---|---|
| Stripe (Greenhouse `stripe`) | 771 | 2 | 61 (≈23 "Solutions Architect…") | 3 | 13 | boards-api.greenhouse.io/v1/boards/stripe/jobs |
| Notion (Ashby `notion`) | 174 | 2 (Design Engineer; Frontend intern) | 42 "Solutions Consultant" | 2 | 0 | api.ashbyhq.com/posting-api/job-board/notion |
| Ramp (Ashby `ramp`) | 183 | 3 | 9 | 0 | 2 | api.ashbyhq.com/posting-api/job-board/ramp |
| DoorDash (Greenhouse `doordashusa`) | 401 | 0 | 4 (mostly internal IT) | 5 | 20 | boards-api.greenhouse.io/v1/boards/doordashusa/jobs |
| Databricks (Greenhouse `databricks`) | 889 | 2 | 205 (mostly SA) | 6 | 14 | boards-api.greenhouse.io/v1/boards/databricks/jobs |

### C2. Entry-level evidence

| Claim | Source | Exact quote | Verdict |
|---|---|---|---|
| Stripe hires a new-grad Frontend SWE | Stripe "Software Engineer, New Grad - Frontend", https://stripe.com/jobs/search?gh_jid=8130927 (updated 2026-11-19) | "New grad candidates should have no more than 18 months of prof[essional experience]" | VERIFIED |
| …but it is a SWE posting with frontend as a preference | same | "One or more areas of specialized knowledge (frontend, backend, infrastructure or other technologies)" | VERIFIED: treat as SWE with a frontend team |
| Notion and Ramp have frontend **intern** postings | https://jobs.ashbyhq.com/notion/43ffba97-b64a-4c6a-ac13-c803253c9413 ; https://jobs.ashbyhq.com/ramp/a13ae586-f4cb-4385-8822-c42b9b54ed74 | Notion: "Working toward proficiency in React / TypeScript" | VERIFIED |
| Full-time frontend roles at growth-stage are experienced | Ramp "Software Engineer, Frontend", https://jobs.ashbyhq.com/ramp/6511d68f-b65d-4499-962f-7e2f75eabe3f | "Minimum of 5 years of frontend engineering experience preferred" | VERIFIED |
| Stripe Solutions Architect requires prior experience | Stripe "Solutions Architect, Startups & SMB", https://stripe.com/jobs/search?gh_jid=8144264 | "2+ years of experience in a similar customer-facing engineering role (e.g. solutions architect, sales engineer…" | VERIFIED |
| Notion Solutions Consultant is early-career-accessible but sales-side | Notion "Commercial Solutions Consultant", https://jobs.ashbyhq.com/notion/15dde0f5-b3fd-4d46-8ec2-0858ebdd888d | "1-3 years of experience selling technical products to technical buyers" | VERIFIED |
| Growth-stage Data Engineers are experienced | DoorDash "Software Engineer, Data Engineering", https://job-boards.greenhouse.io/doordashusa/jobs/8192116 | "3+ years of professional experience working in data engineering, business intelligence, or a similar role" | VERIFIED; Notion "Data Engineer, Product" asks "5+ years" |
| Data Engineer postings centre on SQL and pipelines | Notion Data Engineer, https://jobs.ashbyhq.com/notion/73a71747-28d3-4dda-a718-77336056e687 | "SQL expert, proficient with aggregation, window functions, UDFs, self-joins, and optimization techniques" | VERIFIED (requirement, not interview content) |
| Growth-stage ML entry routes are internships (Master's/PhD) | Stripe "Master's Machine Learning Engineer, Intern" (gh_jid 8333074); DoorDash "Machine Learning Intern (Masters) - Summer 2027" (8204111) | titles only | VERIFIED; no bachelor's new-grad MLE found |
| Ramp ML Engineer requires 5 years | https://jobs.ashbyhq.com/ramp/2888b101-b1da-4e53-a02e-1bb9b1b5a951 | "A minimum of 5 years of industry experience as a Machine Learning Engineer, Applied Scientist or Data Scientist" | VERIFIED |

No growth-stage posting reviewed describes a role-specific interview for these four roles.

---

## D. Established tech (Pinterest, GitLab)

| Claim | Source | Exact quote | Verdict |
|---|---|---|---|
| Pinterest has a **university-grad MLE** posting | "Master's University Grad Machine Learning Engineer 2027 (USA)", https://www.pinterestcareers.com/jobs/?gh_jid=8140219 (updated 2026-11-06) | "Master's in Computer Science, ML, NLP, Statistics, Information Sciences or related field required" | VERIFIED; also "PhD University Grad Machine Learning Engineer (USA)" (8140363) |
| Pinterest MLE count | Greenhouse `pinterest`, 165 postings | 28 ML titles vs 31 SWE titles | VERIFIED (snapshot) |
| Pinterest has a Solutions Engineer **intern** | "Solutions Engineer Intern 2027 (USA)", https://www.pinterestcareers.com/jobs/?gh_jid=8214788 | "Experience writing and debugging code in at least one programming language, such as Python, Java, JavaScript or C++." | VERIFIED |
| Pinterest's AI interview philosophy applies to MLE and SE postings too | both postings above | "we'll explore your foundational skills and how you collaborate with AI" | VERIFIED (same boilerplate as SWE) |
| Pinterest frontend / data engineer entry routes | Greenhouse `pinterest` | 0 frontend titles; data-engineering titles are Staff/Principal or "Data Analytics Engineer II" | VERIFIED: none at entry level today |
| GitLab frontend interview differs from backend only in interviewer, not stated format | GitLab Frontend job family, https://handbook.gitlab.com/job-families/engineering/development/frontend/ (Official) | "a 90 minute technical interview with either a Frontend Engineer or a Frontend Hiring Manager" | VERIFIED; preceded by "a short written assessment". Experienced roles only (GitLab: 0 frontend postings today) |
| GitLab Solutions Architect interview includes a business-plan presentation | GitLab SA job family, https://handbook.gitlab.com/job-families/sales/solutions-architect/ (Official, last modified 8 May 2026) | "candidates will present a business plan to include 30/60/90 day approach, outcomes, and metrics" | VERIFIED. 19 SA postings, all Senior or above |
| GitLab ML / data engineer hiring | Greenhouse `gitlab`, 243 postings | 0 ML; 1 analytics-engineering director | VERIFIED: exclude for GitLab |

---

## E. Enterprise and structured early-career programs

| Claim | Source | Exact quote | Verdict |
|---|---|---|---|
| JPMorganChase runs a Data & AI program for students with data-engineering and ML tracks | https://www.jpmorganchase.com/careers/explore-opportunities/programs/data-analytics-opportunities (Official) | "Data Engineering & Data Products Build and optimize scalable data pipelines and products" | VERIFIED |
| …with ML work | same | "develop and deploy machine learning solutions, and run experiments tied to key business outcomes" | VERIFIED |
| …and eligibility by degree | same | "pursuing a bachelor's or master's degree in quantitative or technical disciplines such as Data Science, Machine Learning, Computer Science" | VERIFIED |
| Skills split by track | same | "For AI-focused roles, proficiency in Python … SQL and visualization tools like Tableau for data focused roles." | VERIFIED (requirements, not interview content) |
| Program is named "2027 Data & AI Program – Full Time Analyst" | Ladders listing (Third-party), https://www.theladders.com/job/2027-data-ai-program-full-time-analyst-united-states-jpmorganchase-palo-alto-ca_88156265 | title only | PARTLY: aggregator; confirm on jpmorganchase.com |
| JPMorganChase data-program interview differs from the SWE program | — | Program page links only to the firm-wide "How we hire" page | UNVERIFIED |
| Capital One full-time Technology program mentions ML | https://www.capitalonecareers.com/full-time-programs (Official) | "working with cutting-edge AI tools … across platforms like iOS, Android, AWS, Java, machine learning and more" | VERIFIED |
| Capital One TDP associates rotate through two SWE roles | https://www.capitalonecareers.com/elevate-your-tech-career-with-the-tdp-students-tech (Official) | "you'll experience two distinct software engineering roles and develop skills in AWS, machine learning and more" | VERIFIED. No separate data-engineer or ML track stated on current pages |
| Capital One has a bachelor's Data Analytics program | full-time-programs page | "work hands-on with large datasets in banking—engineering the foundations, models and predictive insights" | VERIFIED; it is an analyst program, not a Data Engineer title |
| Capital One AI Engineering program (Master's/PhD) | https://www.capitalonecareers.com/graduate-programs (Official) | "Build agentic AI systems and high-performance infrastructure in this program for Master's and PhD students." | VERIFIED: 12-week program; fits AI Engineer more than MLE |
| Capital One graduate Data Science program | same | "Tap into the latest computing and machine learning tech in this program for master's and PhD students." | VERIFIED (data science, not MLE) |
| Current Capital One TDP 2027 postings | /job/mclean/technology-development-program-associate-{february,august}-2027/… (found via search) | both return 404 today | UNVERIFIED as open; likely closed for the cycle |
| Capital One "Machine Learning Development Program" exists | WayUp 2023/2024 listings (Third-party) | not re-checked on an official page | UNVERIFIED (dated) |
| Capital One experienced MLE roles | capitalonecareers.com search "machine learning development" | ≈10 "Machine Learning Engineer 4/5", Staff, Director | VERIFIED: experienced only |
| Capital One Sales/Solutions Engineer | search "sales engineer" | no SE/SA titles; sales roles only | VERIFIED: exclude |
| Associate Solution Engineer new-grad programs at an enterprise SaaS (Salesforce Futureforce) | WebSearch hits on aggregators; official page https://www.salesforce.com/company/careers/university-recruiting/sales/success-grad-solution-eng/ | official page content did not describe the program when fetched | UNVERIFIED. Salesforce would be established tech, not enterprise |

---

## F. Third-party evidence on frontend interview differences

| Claim | Source | Exact quote | Verdict |
|---|---|---|---|
| Front-end coding rounds differ from algorithm rounds | Front End Interview Handbook (Third-party, free), https://www.frontendinterviewhandbook.com/ | "Coding questions are an entirely different ball game for Front End interviews … (hint: not just LeetCode)" | VERIFIED as a third-party view; site sections list "JavaScript utility functions", "User interfaces", front-end system design |

---

## G. Matrix (Editorial, from the rows above)

| Employer type | Frontend | Solutions / Sales Eng | Data Eng | ML Eng |
|---|---|---|---|---|
| Early-stage (YC) | Exclude: mostly folded into Full stack; one new-grad-ok posting | Exclude: rare, 3+ yrs (one process: simulated discovery + demo) | Exclude: rare, 3–6+ yrs | Weak: few postings; new-grad-ok ones overlap AI Engineer |
| AI-focused | Exclude: Staff only | Include only as experienced (Sierra 19 SE titles); no entry route | Exclude: senior infra only | Exclude: "Research Engineer" titles (research track / AI Engineer overlap) |
| Growth-stage | Weak include: Stripe new-grad SWE (frontend), Notion/Ramp frontend interns; full-time 5+ yrs | Include for experienced (Stripe 61, Databricks 205, Notion 42 SC); entry route only Notion SC "1-3 years" (sales-side) | Exclude for entry level: 3–5+ yrs | Exclude for entry level: Master's/PhD interns only |
| Established tech | Exclude: no entry postings (Pinterest 0, GitLab 0 open) | Weak: Pinterest SE intern; GitLab SA Senior+ with business-plan presentation | Exclude: Staff/II only | Include: Pinterest Master's/PhD university-grad MLE (28 ML titles) |
| Enterprise programs | Exclude: no frontend program; frontend sits inside SWE/TDP | Exclude: no SE/SA program found at Capital One or JPMorganChase | Include: JPMorganChase Data & AI program (data-engineering track); Capital One Data Analytics (analyst) | Include with caution: JPMorganChase Data & AI program (AI/ML track); Capital One AI Engineering / Data Science are Master's/PhD |

## H. Interview-difference evidence found (short)

- **Sales Engineer (YC, Job posting):** simulated discovery and demo panel plus executive interviews.
- **Solutions Architect (GitLab, Official):** recruiter screen, leadership and peer interviews, then a 30/60/90-day business-plan presentation; no coding round listed.
- **Frontend (GitLab, Official):** written assessment, 90-minute technical interview with a frontend engineer, behavioral, director. Format not described beyond that.
- **Frontend (Third-party):** UI-building and JavaScript-utility questions rather than LeetCode-only.
- **MLE / SE at Pinterest (Official boilerplate):** the same AI-collaboration interview philosophy as SWE.
- **Data Engineer and ML Engineer:** no official or posting-level description of a different interview at any employer type reviewed. Do not state one.

## Limitations

- One-day snapshots; title matching is approximate (e.g. Databricks "Solutions Architect" counts include specialist and delivery SAs).
- YC public pages show a sample (~34 per page), not the full Work at a Startup catalogue, which needs a login for sub-type filters.
- Capital One TDP 2027 postings are closed (404), so current TDP track names could not be confirmed.
- No candidate-reported interview experiences were collected for these roles; that would be the next step if a role is approved.

## Sources

| # | Source | Type | Checked |
|---|---|---|---|
| 1 | https://www.ycombinator.com/jobs/role/software-engineer (+ 8 location pages, `/sales-manager`, `/science`) | Official listing | 2026-11-27 |
| 2 | https://www.ycombinator.com/companies/vector/jobs/qc79aS0-sales-engineer | Job posting | 2026-11-27 |
| 3 | https://www.ycombinator.com/companies/axiom/jobs/GNTewkz-frontend-engineer | Job posting | 2026-11-27 |
| 4 | https://www.ycombinator.com/companies/whatnot/jobs/rQ9Bdof-machine-learning-engineer-applied-research | Job posting | 2026-11-27 |
| 5 | https://www.ycombinator.com/companies/vector/jobs/MZ9Oh9B-senior-data-engineer | Job posting | 2026-11-27 |
| 6 | https://api.ashbyhq.com/posting-api/job-board/{decagon,cursor,harvey,sierra,notion,ramp} | Job board API | 2026-11-27 |
| 7 | https://boards-api.greenhouse.io/v1/boards/{stripe,pinterest,gitlab,doordashusa,databricks}/jobs | Job board API | 2026-11-27 |
| 8 | Stripe postings gh_jid 8130927, 8144264, 8333074 | Job posting | 2026-11-27 |
| 9 | Pinterest postings gh_jid 8140219, 8140363, 8214788 | Job posting | 2026-11-27 |
| 10 | DoorDash posting 8192116, 8204111 | Job posting | 2026-11-27 |
| 11 | Notion postings 73a71747…, 15dde0f5…, 43ffba97… | Job posting | 2026-11-27 |
| 12 | Ramp postings 6511d68f…, a13ae586…, 2888b101… | Job posting | 2026-11-27 |
| 13 | Decagon 95dadea4…, Sierra 8152eaf6…, Sierra APX d9c445da… | Job posting | 2026-11-27 |
| 14 | https://handbook.gitlab.com/job-families/engineering/development/frontend/ | Official | 2026-11-27 |
| 15 | https://handbook.gitlab.com/job-families/sales/solutions-architect/ | Official | 2026-11-27 |
| 16 | https://www.jpmorganchase.com/careers/explore-opportunities/programs/data-analytics-opportunities | Official | 2026-11-27 |
| 17 | https://www.capitalonecareers.com/full-time-programs | Official | 2026-11-27 |
| 18 | https://www.capitalonecareers.com/graduate-programs | Official | 2026-11-27 |
| 19 | https://www.capitalonecareers.com/elevate-your-tech-career-with-the-tdp-students-tech | Official | 2026-11-27 |
| 20 | https://www.capitalonecareers.com/search-jobs/… (TDP, ML, sales engineer queries) | Official listing | 2026-11-27 |
| 21 | https://www.theladders.com/job/2027-data-ai-program-full-time-analyst-united-states-jpmorganchase-palo-alto-ca_88156265 | Third-party | search snippet only |
| 22 | https://www.frontendinterviewhandbook.com/ | Third-party | 2026-11-27 |
