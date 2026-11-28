# Phase D research: Solutions Engineer / Solutions Architect

Date checked: **2026-11-27** for every row unless a snapshot date is given. Role family: Solutions Engineer, Solutions Architect (vendor-side), Sales Engineer, Solutions Consultant, Customer Engineer, Field Engineer, plus the AI-lab title **Applied AI Architect**, which both OpenAI and Anthropic now use for this job.

Method: public job-board APIs (Ashby `openai` and `Perplexity`; Greenhouse `anthropic`, `janestreet` and `jumptrading`; amazon.jobs `search.json`; Microsoft `apply.careers.microsoft.com/api/pcsx`; Netflix `explore.jobs.netflix.net/api/apply/v2`; Optiver `/en/api/v1/jobs`), HTML text extraction with curl (Google careers, Apple jobs hydration JSON, AWS blogs and docs), and a browser session for Meta, HRT and Citadel Securities, which block curl. No binaries were downloaded. The Databricks PDF was checked with HEAD only. Quotes are verbatim and under 25 words.

Labels: **Official** (employer guidance page) · **Job posting** · **Candidate-reported** · **Third-party** · **Editorial**.
Verdicts: **VERIFIED** · **PARTLY** · **UNVERIFIED** · **FALSE** · **NOT FOUND**.

---

## 1. Interview expectations

### 1a. Official employer guidance

| Claim | Label | Source | Exact quote | Verdict |
|---|---|---|---|---|
| AWS has no SA-specific interview prep page on amazon.jobs | Official | https://www.amazon.jobs/content/en/how-we-hire (lists SDE, SDE II/III, SDM, BIE, FEE, Security, TPM, PM, CSM and others). `/how-we-hire/sa-interview-prep` and `/solutions-architect-interview-prep` both return 404 | — | VERIFIED (absence). The "AWS official SA interview prep" page assumed in the brief **does not exist** |
| AWS early-career guidance names the associate SA role and tells candidates to prepare technical fundamentals, Leadership Principles and STAR stories | Official (AWS Training & Certification blog, 1 Jun 2021) | https://aws.amazon.com/blogs/training-and-certification/landing-your-early-cloud-career-role-blog-2-solidifying-your-technical-toolkit-for-your-interview/ | "ideal for recent college and university graduates or early career professionals interested in applying to technical cloud roles, including associate solutions architect" | VERIFIED (2021, so mark it dated) |
| Topics listed: networking, storage, databases and analytics, security, OS, application tiers, programming including time/space complexity and sorting | Official (2021) | same | "What is the difference between time and space complexities? What are some sorting algorithms and their complexities?" | VERIFIED. Light coding/CS fundamentals, not LeetCode-style |
| Two STAR stories per Leadership Principle | Official (2021) | same | "Ideally, identify two examples per Leadership Principle." | VERIFIED |
| Expect to present a technical solution by whiteboard or presentation | Official (AWS T&C blog #3, 9 Jun 2021) | https://aws.amazon.com/blogs/training-and-certification/landing-your-early-cloud-career-role-blog-3-sharpening-your-presentation-skills/ | "you'll be expected to present technical content encompassing a solution made up of services and their features" | VERIFIED |
| Practice the same topic for technical and non-technical audiences; 15–20 minutes with a diagram | Official (2021) | same | "explain it as you would to a friend or family member who lacks technical expertise. Increase the presentation to 15 to 20 minutes" | VERIFIED |
| Databricks Field Engineering (SA) process: recruiter (30 min), hiring manager (1 h), technical screen (1 h), coding assignment, presentation with discovery then pitch | Official PDF, Apr 2025 | https://www.databricks.com/sites/default/files/2025-04/field-engineering-careers-site-interview-prep-april-2025-002.pdf (HEAD: 200, application/pdf, 114,857 bytes) | Not quotable. I did not read the PDF; the content comes from a search-engine summary only | PARTLY: the PDF is live and linked from the official page, but its wording is unverified. The HTML hub https://www.databricks.com/company/careers/interview-prep lists "Interview Prep Guides: Engineering Field Engineering Product Sales" and gives a generic process (recruiter call, pre-onsite screen, onsite loop) |
| OpenAI interview guide covers SE/SA rounds | Official | https://openai.com/interview-guide/ | Generic only: "For engineering interviews, we generally look for well-designed solutions to the challenge, high-quality code" | NOT FOUND (no customer-facing or GTM-specific guidance) |
| Anthropic interview guidance covers SA rounds | Official | https://www.anthropic.com/candidate-ai-guidance | Gives AI-use rules only: "During live interviews This is all you–no AI assistance unless we indicate otherwise." | NOT FOUND for SA format. The AI-use rule applies to all roles |
| Google, Microsoft, Meta, Apple, Netflix publish SE/SA/CE-specific interview guidance | Official | careers sites searched | — | NOT FOUND |
| Stripe, Twilio, MongoDB, Snowflake, Datadog publish SE interview guidance | Official | one web search, no official pages returned | — | NOT FOUND (not site employers; low priority) |

### 1b. What postings say the job tests (interview content can only be inferred from these)

| Expectation | Label | Evidence (quote, source) | Verdict |
|---|---|---|---|
| Discovery | Job posting | OpenAI Applied AI Architect: "Lead discovery with executives and technical teams to identify, qualify, and prioritize use cases" (jobs.ashbyhq.com/openai/98a36c10-…). Perplexity AAA: "Lead technical discovery." Google CE I: "troubleshoot, lead demos, and architect solutions" | VERIFIED as a job duty. Treat a discovery role-play as likely, not guaranteed |
| Demos, POCs, evaluations | Job posting | OpenAI AAA: "technical evaluations, demonstrations, workshops, prototypes, and proofs of value". Anthropic AAA Startups: "Win technical evaluations". OpenAI Ads SE: "Build compelling demos, proofs of concept" | VERIFIED |
| Hands-on code (prototype level) | Job posting | Anthropic AAA Commercial: "Ship working code. Build prototypes and proof-of-concepts hands-on, develop eval frameworks, and write near-production examples" | VERIFIED. Coding depth varies: prototype/eval code at AI labs, scripting/SQL at Ads SE, "Experience with one of the following programming languages" at AWS associate SA |
| SQL/APIs/debugging | Job posting | OpenAI Ads SE: "Have experience writing SQL, using APIs, debugging implementation issues". Meta SA (Dublin): "Experience with SQL scripting, querying, and working with data pipelines" | VERIFIED |
| Architecture frameworks | Job posting | Microsoft CSA: "Lead architectural design sessions … using Microsoft's best practices and frameworks like CAF and WAF" | VERIFIED. A whiteboard/architecture round is consistent with this but is not stated |
| Technical screen not algorithm-focused (Amazon SA) | Third-party | Exponent/Aced (in roles.md); not re-verified | UNVERIFIED as official. The AWS 2021 blog does list complexity and sorting fundamentals |
| Objection handling is a top SA question | Third-party | https://www.aced.io/blog/how-to-prepare-for-a-solutions-architect (Aced, formerly Exponent): "The three most common solutions architect interview questions are: - How to handle a customer objection" | VERIFIED that Aced says it. It is a third-party claim based on interviewer conversations |
| Databricks presentation panel, notebook exercise | Candidate-reported | Glassdoor reviews via search (undated): one-hour presentation to a panel of 4–5 business and technical stakeholders | PARTLY (not opened directly) |
| Salesforce SE: case study ~2 weeks before a final demo/panel | Third-party / Candidate-reported | Prepfully guide and Glassdoor via search | PARTLY (not opened; not a site employer) |

**Editorial conclusion.** Across the evidence, the usual SE/SA loop is recruiter, then hiring manager, then a technical screen (architecture/fundamentals, sometimes SQL or scripting), then a presentation or demo with discovery, then behavioral. Coding is usually light to moderate: a take-home or notebook (Databricks), prototype code (AI labs) or fundamentals (AWS associate). Only Databricks (official PDF, unread) and AWS (2021 blog) state any of this officially. Everything else is inferred from postings or third-party sources, and pages must say so.

### 1c. Seniority and new-grad programmes

| Claim | Label | Source | Exact quote | Verdict |
|---|---|---|---|---|
| AWS runs early-career SA programmes | Job posting | amazon.jobs "Solutions Architect AGS-Tech, Early Career - 2027 (US)", Seattle, posted 16 Oct 2026, /en/jobs/10581072 | "This is a structured, cohort-based accelerated development program designed for early career Solutions Architects." | VERIFIED |
| US basic qualifications: degree in progress OK, one language, AI/ML experience | Job posting | same | "Currently has, or is in the process of obtaining, a Bachelor's degree or above in Computer Science, Computer Engineering, or related fields" | VERIFIED |
| EMEA graduate SA: degree within the last 12 months | Job posting | "Graduate Solutions Architect - German speaker", Munich, 9 Nov 2026, /en/jobs/10599711 | "degree … completed within the last 12 months, or equivalent training, certifications, and/or experience" | VERIFIED |
| Associate SA (APJ, PACE) has no years minimum; prefers 2+ years IT | Job posting | Bengaluru, 12 Nov 2026, /en/jobs/10602203 | Preferred: "2+ years of Information Technology (IT) experience" | VERIFIED |
| Associate SA internships 2027 (London, Munich, Madrid, Courbevoie, Stockholm, Tel Aviv, HK, China) | Job posting | amazon.jobs search "Associate Solutions Architect" (61 hits) | — | VERIFIED |
| Microsoft CSA internship | Job posting | "Cloud Solution Architect - Erada Internship", Doha (Microsoft id 200044944) | — | VERIFIED (one, Qatar-specific). Standard US CSA: "4+ years experience in cloud/infrastructure technologies…" |
| Google CE entry-level | Job posting | "Customer Engineer I, Platform, Google Cloud" | "4 years of experience with cloud native architecture in a customer-facing or support role." | VERIFIED: the lowest CE level found still requires 4 years. Only other "Associate Customer Engineer" is a Korea gReach programme for people with disabilities or veterans |
| AI labs hire SAs early-career | Job posting | Anthropic AAA Commercial and Startups: 3+ years; OpenAI AAA: no number ("significant experience"); OpenAI Ads SE: 5+; Perplexity AAA: 5+ | — | FALSE for new grads. Note it |

---

## 2. SE vs FDE: the pre-sales vs post-sales generalisation, re-checked

The product owner was right. The roles.md table ("SE mostly pre-sale; FDE post-sale; SE demos/POCs only; SE often quota") holds at **some** employers and fails at others. Counterexamples:

| Employer / title | Label | Quote (source) | What it shows |
|---|---|---|---|
| OpenAI Applied AI Architect | Job posting | "guiding their journey from pre-sales discovery and solution evaluation through deployment, adoption, and measurable business impact" (ashby openai/98a36c10, published 18 Aug 2025, live) | The SA role spans pre- **and** post-sale. It owns the technical account plan for existing customers too |
| OpenAI FDE | Job posting | "You will own discovery, technical scoping, system design, build, and production rollout" (openai/967f94aa) | FDEs also do discovery |
| Anthropic AAA Commercial | Job posting | "you will be a Pre-Sales architect" … "Ship working code … write near-production examples" (greenhouse 5192805008) | Pre-sales, but it writes code beyond demos |
| Anthropic FDE | Job posting | "Working closely with our Post-Sales, Product, and Engineering teams" (greenhouse 5423029008) | At Anthropic the split **does** roughly hold (AAA pre-sales, FDE alongside post-sales) |
| Google Outcome Customer Engineer | Job posting | "manage and execute the deployment plan, transitioning scoped workloads into production" (Customer Engineer, Outcome, Google Cloud) | A "Customer Engineer" title that is post-sale deployment |
| Google CE I, Platform | Job posting | "focus on identifying, pursuing, and winning new business workloads" | Same title family, pre-sale |
| Microsoft Cloud Solution Architect | Job posting | "Own the end-to-end technical delivery for a defined set of strategic accounts, ensuring alignment with customer success plans" (id 200067419) | The SA title sits in a customer-success / delivery motion |
| Perplexity Applied AI Architect | Job posting | "work directly with customers across presales, onboarding, adoption, and strategic engagements" | Spans the whole lifecycle |
| Netflix Solutions Engineer 5 (Content Promotion & Distribution) | Job posting | "Solutions Engineers accelerate partner integrations, help partners launch with confidence, and keep them running smoothly at scale" | No sales at all: partner integration, onboarding and escalation |
| Meta Partner Engineer (London) | Job posting | "You will write and ship reliable, scalable, production-grade code"; min "5+ years … building and shipping production-quality code" | An SE-family title that owns production code |
| Apple Business Solutions Engineer | Job posting | "At least 5 years of quota-carrying experience … or consultative pre-sales engineering roles" (posted 29 Oct 2026) | Supports "pre-sale, sales-linked" at Apple |
| OpenAI Ads SE | Job posting | "partner with advertisers and agencies throughout the pre-sales and growth lifecycle" | Pre-sale plus onboarding and troubleshooting |
| Jane Street FIX Onboarding and Connectivity Engineer | Job posting | "seeing the onboarding process all the way through to production" … "developing code of varying complexity" | A client-onboarding engineer at a quant firm; not titled SE |

**Conclusions (Editorial, from the postings above):**
1. Do not state a universal pre-sales/post-sales split. The defensible line is: *SE/SA roles centre on helping a customer decide on and adopt a product (discovery, architecture, demos, evaluations); FDE roles centre on building and delivering production systems with the customer. Many employers blend the two, and some SA/CE titles are explicitly post-sale.*
2. "Production code" is not a clean separator. Meta Partner Engineers and Netflix Solutions Engineers ship code, and Anthropic AAAs write "near-production examples". Say instead that *FDE postings make production delivery the primary measure of success* (OpenAI FDE: "Own technical delivery … from first prototype to stable production").
3. Quota: verified only at Apple ("quota-carrying"). Do not say "often quota" without a posting. Say "some SE roles are quota-carrying (for example Apple)".
4. The interview signature difference still holds as a tendency (third-party plus postings): SE/SA loops emphasise discovery, presentation/demo and architecture; FDE loops emphasise coding and decomposition. Label it "typical, varies".

---

## 3. Employer evidence (site employers only)

| Employer | SE/SA-type role now? | Titles and counts (2026-11-27) | Experience minimum (example) | Official interview guidance | Verdict |
|---|---|---|---|---|---|
| Google | **Yes** | Many "Customer Engineer" (Platform, AI, Security, Workspace, Outcome, Practice), "Technical Solutions Consultant", "Solutions Consultant", "Partner Solutions Architect". Search pages show 20+ per query; the total count was not extractable | CE I: 4 years; Outcome CE: 6 years | NOT FOUND (role-specific) | VERIFIED postings |
| Amazon (AWS) | **Yes** | "Solutions Architect" keyword: 1,012 hits; "Associate Solutions Architect": 61 hits, including early-career, graduate and intern roles | Early career: degree (in progress OK); standard SA example (Kuala Lumpur): "4+ years of specific technology domain areas". Of the first 100 SA results, 50 had no "N+ years" line; the rest ranged from 2+ to 15+ | No SA page on amazon.jobs; AWS T&C blogs #2/#3 (2021) are official early-career prep | VERIFIED |
| Meta | **Yes** | "Partner Engineer" search: 770 items (keyword search, includes unrelated roles); "Solutions Architect": 192 items, including Solutions Architect (Dublin), Solutions Architect, Business Agents, Applied AI Architect, Meta Enterprise Platform | SA Dublin: "2+ years of experience in a solutions architecture, technical consulting, sales engineering, or partner engineering role"; Partner Engineer London: 5+ years | NOT FOUND | VERIFIED (browser) |
| Apple | **Yes** | "Apple Business Solutions Engineer" (8 listings in results, US metros), "Systems Engineer - Enterprise and Education Sales" (Munich, 24 Mar 2026), "Solutions Architect, Customer Systems" (internal IT, not vendor-side) | ABSE: 5 years quota-carrying or pre-sales engineering; preferred 7 | NOT FOUND | VERIFIED |
| Microsoft | **Yes** | "Cloud Solution Architect": search count 878 (fuzzy); the first 40 results were all CSA-titled (rate-limited after 40) | US CSA: Bachelor's AND 4+ years, or equivalent | NOT FOUND (role-specific) | VERIFIED |
| Netflix | **Partly** | "Solutions Engineer 5 - Content Promotion & Distribution" (Los Gatos), "Games Solutions Engineer 5" (Warsaw). Partner-integration roles, not sales | L5 (senior); no years stated | NOT FOUND | VERIFIED. Not a typical vendor SE role; do not add a Netflix SE page |
| OpenAI | **Yes** | Applied AI Architect: 32 (22 non-manager); Solutions Engineer, Ads Solutions: 2 (NYC, Tokyo); FDE: 40; Applied AI Engineer: 51 | AAA: none stated ("significant experience"); AAA Cyber: 5+; Ads SE: 5+ | Generic interview guide only | VERIFIED |
| Anthropic | **Yes** | Applied AI Architect: 42 (37 non-manager); no "Solutions Architect" or "Solutions Engineer" titles. The Commercial AAA text calls itself "Commercial Solutions Architect" | AAA Commercial and Startups: 3+ years; FDE: 4+ | AI-use guidance only | VERIFIED |
| Perplexity | **Yes (few)** | "Applied AI Architect, Perplexity Computer" (NYC); "Member of Technical Staff (Cybersecurity Solutions Architect)" (SF) | 5+ years both | NOT FOUND | VERIFIED |
| Jane Street | **No** (closest: FIX Onboarding and Connectivity Engineer, Singapore and Hong Kong, client onboarding) | 219 postings, none SE/SA-titled | None stated ("Proficient with coding") | n/a | NOT FOUND (SE). Do not list |
| Citadel Securities | **Not found** | Live board unreadable (cookie wall/403). Search shows client-platform SWE roles (e.g. "UI Engineer – CES Client Platforms") but no SE/SA titles | — | — | NOT FOUND |
| Hudson River Trading | **No** | Careers page, about 45 role titles; none SE/SA ("Client Market Making" is a business-area link) | — | — | NOT FOUND |
| Jump Trading | **No** | Greenhouse `jumptrading`: 83 postings, none matching | — | — | NOT FOUND |
| Optiver | **No** (partial view) | API totalCount 148; Technology 84 (only the first 16 were readable, because the API ignores paging); Institutional Sales 3 (sales traders) | — | — | NOT FOUND (partial) |

Recommendation (Editorial): the SE/SA role should be enabled (`Company.roles`) only for Google, Amazon, Meta, Apple, Microsoft, OpenAI, Anthropic and Perplexity. Leave Netflix out, or add a note only if the product owner wants partner-engineering roles. Leave out all quant firms.

Eligibility notes the evidence supports (phrase by evidence):
- Amazon: "Of the postings reviewed, AWS runs early-career, graduate and intern Associate Solutions Architect programmes."
- Google: "Of the Customer Engineer postings reviewed, the lowest level asks for 4 years of customer-facing cloud experience."
- Microsoft: "Reviewed US Cloud Solution Architect postings ask for 4+ years (or equivalent); one internship was found (Qatar)."
- OpenAI / Anthropic / Perplexity: "Reviewed postings ask for 3–5+ years in customer-facing technical roles."
- Apple: "Reviewed Solutions Engineer postings ask for 5+ years of quota-carrying or pre-sales experience."
- Meta: "Reviewed Solutions Architect postings ask for 2+ years; Partner Engineer postings 5+."

---

## 4. Resources

| # | Title | URL | Access | Verified content | Use / why | Verdict |
|---|---|---|---|---|---|---|
| R1 | AWS T&C: Landing your early cloud career role, Blog #2 (technical toolkit) | https://aws.amazon.com/blogs/training-and-certification/landing-your-early-cloud-career-role-blog-2-solidifying-your-technical-toolkit-for-your-interview/ | Free | Topic questions, LP/STAR, two stories per LP. 1 Jun 2021 | Only official SA-interview prep found. Disclose the 2021 date | RECOMMEND |
| R2 | AWS T&C: Blog #3 (presentation skills) | https://aws.amazon.com/blogs/training-and-certification/landing-your-early-cloud-career-role-blog-3-sharpening-your-presentation-skills/ | Free | Whiteboard/presentation expectation; 30 s pitch, 2 min technical talk, 15–20 min non-technical version with a diagram. 9 Jun 2021 | Best free official guidance for the presentation round | RECOMMEND |
| R3 | AWS Well-Architected Framework, Cloud Workloads (six pillars) | https://docs.aws.amazon.com/wellarchitected/latest/framework/workloads.html | Free | "the six pillars of operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability". Framework updated 16 Nov 2026 and now split into Cloud Foundations and Cloud Workloads | Architecture-round checklist | RECOMMEND. **Fix needed:** `content/questions/customer-scenarios.ts` line 122 links `…/the-pillars-of-the-framework.html`, which now returns **404**. Replace it with this URL |
| R4 | Azure Well-Architected Framework pillars | https://learn.microsoft.com/en-us/azure/well-architected/pillars | Free | Pillar matrix (reliability, security, cost optimization…) | Microsoft CSA postings name WAF and CAF. Optional: only as the Microsoft-specific line, not a second generic list | OPTIONAL |
| R5 | Google Cloud Well-Architected Framework | https://docs.cloud.google.com/architecture/framework (redirected from cloud.google.com) | Free | "Last reviewed 2026-10-13" | Google CE equivalent. Optional, as above | OPTIONAL |
| R6 | Okta Developer: An Illustrated Guide to OAuth and OpenID Connect (David Neal) | https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc | Free | Illustrated, plain-language, about 7 min; starts from "never share your password" | Best plain-language OAuth explanation for a non-technical audience. Oct 2019 (concepts stable) | RECOMMEND |
| R7 | Gong: discovery call questions (Chris Orlob) | https://www.gong.io/blog/deal-closing-discovery-call/ | Free (a cheat-sheet download is gated; the article is open) | Analysis of 519k calls; 3–4 problems; 11–14 questions; talk-to-listen ratio. Published 2017, modified 4 Mar 2026 | Strongest free discovery-call guide found. It is a sales-vendor blog (Third-party) and its statistics are vendor-reported | RECOMMEND with label |
| R8 | Aced (formerly Exponent): How to prepare for a Solutions Architect interview | https://www.aced.io/blog/how-to-prepare-for-a-solutions-architect (tryexponent.com redirects here) | Blog free; it promotes a paid course. Course pages (e.g. `/courses/solution-architect-interview/.../discovery-calls`) render empty without JS and are presumably paid | Common questions (objection, mistake, complex customer problem), sample REST API answer. "Last updated 2 months ago" | Third-party overview of SA loops | OPTIONAL. Disclose the course upsell |
| R9 | Databricks Field Engineering interview prep (PDF) | see 1a | Free PDF; content unread | — | Employer-specific (not a site employer) | Do not link until a human reads it |
| — | NAASE tips, We The Sales Engineers ep. 319 | in resources.md | — | not re-checked | Demo prep | Keep the resources.md assessment |

**Resource gaps (state explicitly on the site):**
- No strong free **objection-handling** guide for technical SE interviews was found. Write concise original answers (Editorial).
- No free official **demo-round** rubric from any site employer. AWS Blog #3 is the closest.
- No free **mock discovery role-play** with a worked example from an employer. The Aced course has one but is presumably paid. Write a short original scenario.
- No official SA/CE interview guidance from Google, Microsoft, Meta, Apple, OpenAI, Anthropic or Perplexity.

---

## 5. Implications for content (Editorial; for product owner review)

1. Expand `customer-scenarios.ts` with SE groups (discovery role-play, demo/presentation, objection handling, explaining technical concepts such as OAuth to non-technical stakeholders, architecture walkthrough). Reuse `apis.ts` (OAuth/OIDC), `networking.ts`, `system-design.ts` and `behavioral.ts` by `?group=` links. Do not copy questions.
2. Rewrite the SE vs FDE comparison as a tendency with named counterexamples, not a rule (section 2).
3. Fix the dead AWS Well-Architected link (R3).
4. Treat "Applied AI Architect" (OpenAI, Anthropic, Perplexity) as part of the SE/SA role.

---

## Sources

| Source | URL | Type | Read how | Date |
|---|---|---|---|---|
| amazon.jobs How We Hire | https://www.amazon.jobs/content/en/how-we-hire | Official | curl | live |
| amazon.jobs search JSON | https://www.amazon.jobs/en/search.json?base_query=… | Job postings | curl | 2026-11-27 |
| AWS early-career SA (US) | https://www.amazon.jobs/en/jobs/10581072/solutions-architect-ags-tech-early-career-2027-us | Job posting | JSON | 16 Oct 2026 |
| AWS Graduate SA (Munich) | https://www.amazon.jobs/en/jobs/10599711/graduate-solutions-architect-german-speaker | Job posting | JSON | 9 Nov 2026 |
| AWS Associate SA (PACE) | https://www.amazon.jobs/en/jobs/10602203/associate-solutions-architect-apj-ect-sa-pace | Job posting | JSON | 12 Nov 2026 |
| AWS T&C Blog #2 | https://aws.amazon.com/blogs/training-and-certification/landing-your-early-cloud-career-role-blog-2-solidifying-your-technical-toolkit-for-your-interview/ | Official | curl | 1 Jun 2021 |
| AWS T&C Blog #3 | https://aws.amazon.com/blogs/training-and-certification/landing-your-early-cloud-career-role-blog-3-sharpening-your-presentation-skills/ | Official | curl | 9 Jun 2021 |
| AWS Well-Architected (Cloud Workloads) | https://docs.aws.amazon.com/wellarchitected/latest/framework/workloads.html | Official docs | curl | updated 16 Nov 2026 |
| Old AWS pillars URL | https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html | — | curl: **404** | 2026-11-27 |
| Databricks interview prep hub | https://www.databricks.com/company/careers/interview-prep | Official | curl | live |
| Databricks Field Eng PDF | https://www.databricks.com/sites/default/files/2025-04/field-engineering-careers-site-interview-prep-april-2025-002.pdf | Official | HEAD only | Apr 2025 |
| OpenAI board | https://api.ashbyhq.com/posting-api/job-board/openai | Job postings | API (876 jobs) | 2026-11-27 |
| OpenAI Applied AI Architect | https://jobs.ashbyhq.com/openai/98a36c10-3497-4955-9cc0-a6f211e4dc1b | Job posting | API | pub. 18 Aug 2025 |
| OpenAI SE, Ads (NYC) | https://jobs.ashbyhq.com/openai/eb3b695e-6c60-4875-b8bc-8f4d5d8a9bbb | Job posting | API | 25 Nov 2026 |
| OpenAI FDE SF | https://jobs.ashbyhq.com/openai/967f94aa-1706-4dba-ac89-bfbc2c38b688 | Job posting | API | 11 Sep 2026 |
| OpenAI interview guide | https://openai.com/interview-guide/ | Official | curl | live |
| Anthropic board | https://boards-api.greenhouse.io/v1/boards/anthropic/jobs | Job postings | API (634 jobs) | 2026-11-27 |
| Anthropic AAA Commercial | https://job-boards.greenhouse.io/anthropic/jobs/5192805008 | Job posting | API | updated 21 Aug 2026 |
| Anthropic AAA Startups | https://job-boards.greenhouse.io/anthropic/jobs/5406982008 | Job posting | API | updated 20 Oct 2026 |
| Anthropic FDE London | https://job-boards.greenhouse.io/anthropic/jobs/5423029008 | Job posting | API | 14 Sep 2026 |
| Anthropic candidate AI guidance | https://www.anthropic.com/candidate-ai-guidance | Official | curl | live |
| Perplexity board | https://api.ashbyhq.com/posting-api/job-board/perplexity | Job postings | API (150 jobs) | 2026-11-27 |
| Perplexity AAA | https://jobs.ashbyhq.com/Perplexity/4fba58de-a168-4948-9d82-a7d4b38f45f2 | Job posting | API | 26 Aug 2026 |
| Perplexity Cyber SA | https://jobs.ashbyhq.com/Perplexity/5149f625-1c76-4ca1-b076-7b81ed23c758 | Job posting | API | 16 Nov 2026 |
| Google CE I, Platform | https://www.google.com/about/careers/applications/jobs/results/127232878038655686-customer-engineer-i-platform-google-cloud | Job posting | curl | live |
| Google Outcome CE | https://www.google.com/about/careers/applications/jobs/results/127209492747035334-customer-engineer-outcome-google-cloud | Job posting | curl | live |
| Microsoft CSA – Cloud & AI | https://apply.careers.microsoft.com/careers/job/1970393557073502 (job 200067419) | Job posting | API | live |
| Meta SA (Dublin) | https://www.metacareers.com/profile/job_details/3010192069330658 | Job posting | browser | live |
| Meta Partner Engineer (London) | https://www.metacareers.com/profile/job_details/1511786967522227 | Job posting | browser | live |
| Apple Business SE | https://jobs.apple.com/en-us/details/200691237 | Job posting | hydration JSON | 29 Oct 2026 |
| Apple Systems Engineer, E&E Sales | https://jobs.apple.com/en-us/details/200652359 | Job posting | hydration JSON | 24 Mar 2026 |
| Netflix SE 5, CP&D | https://explore.jobs.netflix.net/careers/job/790318930882 | Job posting | API | live |
| Netflix Games SE 5 | https://explore.jobs.netflix.net/careers/job/790314058583 | Job posting | API | live |
| Jane Street FIX Onboarding | https://www.janestreet.com/join-jane-street/apply/8159216002 | Job posting | Greenhouse API | updated 25 Nov 2026 |
| Jump Trading board | https://boards-api.greenhouse.io/v1/boards/jumptrading/jobs | Job postings | API (83) | 2026-11-27 |
| HRT careers | https://www.hudsonrivertrading.com/careers/ | Job postings | browser | 2026-11-27 |
| Optiver jobs API | https://www.optiver.com/en/api/v1/jobs | Job postings | API (partial) | 2026-11-27 |
| Citadel Securities open opportunities | https://www.citadelsecurities.com/careers/open-opportunities/ | — | browser: cookie wall, no listings rendered | 2026-11-27 |
| Azure WAF pillars | https://learn.microsoft.com/en-us/azure/well-architected/pillars | Official docs | curl | live |
| Google Cloud WAF | https://docs.cloud.google.com/architecture/framework | Official docs | curl | reviewed 13 Oct 2026 |
| Okta illustrated OAuth guide | https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc | Third-party (vendor dev blog) | curl | 21 Oct 2019 |
| Gong discovery calls | https://www.gong.io/blog/deal-closing-discovery-call/ | Third-party | curl | mod. 4 Mar 2026 |
| Aced SA interview guide | https://www.aced.io/blog/how-to-prepare-for-a-solutions-architect | Third-party | curl | ~Sep 2026 |
