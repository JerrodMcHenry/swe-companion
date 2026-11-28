# Phase D: Data Engineer verification (interviews, employers, SQL practice, resources, technical claims)

Date checked: **2026-11-27** for every row unless a snapshot date is given. Roles covered: Data Engineer, merged with Analytics Engineer, Data Platform Engineer and ETL Developer. This file builds on `roles.md` §6 and `resources.md` §5 and does not repeat them.

Methods: curl with HTML text extraction; the public Greenhouse board API (`boards-api.greenhouse.io/v1/boards/<board>/jobs`); the Ashby posting API; amazon.jobs `search.json`; the Microsoft Eightfold `pcsx` API (rate-limited after a few calls); server-rendered search pages for Google, Apple and Netflix; the Wayback Machine for Citadel Securities (live site returns 403); the Substack post API for blog.dataexpert.io; the GitHub REST API; the LeetCode GraphQL endpoint; YouTube search plus oEmbed. WebFetch was used for metacareers.com, which returns 400 to curl and renders job pages client-side. I downloaded no binaries and opened no PDFs. Quotes are verbatim and under 25 words.

Labels: **Official** (employer's own guidance page) · **Job posting** · **Candidate-reported** · **Third-party** · **Editorial** (our judgement).
Verdicts: **VERIFIED** · **PARTLY** · **UNVERIFIED** · **FALSE**.

---

## A. Interview expectations

### A1. Official: Amazon, "Interview preparation for data roles" (university and graduate data roles)

URL: https://amazon.jobs/content/en/how-we-hire/university/data (live, 200, undated). The older URLs `amazon.jobs/content/en/how-we-hire/data-engineer-interview-prep` and `/en/landing_pages/data-engineer-interview-prep` both return **404**. The accordion text sits in the page's embedded JSON. In that JSON each list of items comes before its heading, so I matched items to headings by position. The first list ends just before the first "Technical interview prep for Data Engineers" heading.

| Claim | Exact quote | Label | Verdict |
|---|---|---|---|
| DE role definition: SQL, ETL, data modelling, a scripting language | "Data Engineers are knowledgeable in SQL. They have an understanding of ETL and data modeling." | Official | VERIFIED |
| Distributed systems understanding expected | "they understand distributed systems concepts from a data storage and compute perspective" | Official | VERIFIED |
| Full-time loop: one interview, then three to four | "The first round consists of one interview … This stage has three to four interviews that are 45 to 60 minutes each." | Official | VERIFIED (university roles) |
| Intern loop | "one round of two interviews that will be a combination of technical and behavioral interview questions" | Official | VERIFIED |
| Behavioral questions follow the Leadership Principles, two or three per interviewer | "Each interviewer will typically ask two or three behavioral-based questions" | Official | VERIFIED |
| No brain teasers | "We won't ask brain teasers." | Official | VERIFIED |
| Verbal and coding exercises; study the job description | "assess your technical acumen through a combination of verbal and coding exercises" | Official | VERIFIED |
| SQL depth includes window functions | "table joins, data grouping, data structures, use of window functions, and aggregations" | Official | VERIFIED (DE list) |
| Joins and filter placement | "Be able to describe different types of joins and how condition filters affect the joins." | Official | VERIFIED |
| Query optimization | "Be familiar with ways of simplifying a complex query and optimizing performance." | Official | VERIFIED |
| Database types and schema design | "Identify what different styles of schema design exist and when to use each." | Official | VERIFIED |
| Logical data modelling | "Be able to describe how to build/optimize logical data models for a given data set." | Official | VERIFIED |
| Scalability | "The code solution you provide should be able to handle data that scales." | Official | VERIFIED |
| Write code for both SQL and scripting | "Be prepared to write code for SQL and scripting questions." | Official | VERIFIED |
| DSA is expected (coding best practices, shared DE/BIE) | "Expect to utilize common data structures and algorithms, and to compare and contrast their usage" | Official | VERIFIED |
| Python named as the example scripting language | "Be ready to write syntactically correct code in a scripting language (e.g., Python)" | Official | VERIFIED |
| Know any technology you propose | "If you suggest technology to help solve the problem, understand how that technology works." | Official | VERIFIED |
| Requirements first | "Requirements should be the first thing you write out." | Official | VERIFIED |
| Interview tool | "Our interviewers use LiveCode for conducting interviews." | Official | VERIFIED (as of this check) |
| Preferred qualifications are not all required | "That's our preferred list, not a required list." | Official | VERIFIED |

Scope note: this is Amazon's **university** data page, and it says so: "To learn about interviewing for jobs outside of our university roles, please visit Interviewing at Amazon." For experienced DE roles, use it as guidance only.

### A2. Official: Meta DE prep pages

| Claim | Source | Exact quote | Label | Verdict |
|---|---|---|---|---|
| Initial interview is 60 minutes with an engineer | https://www.metacareers.com/de-prep-initial/ (via WebFetch; curl returns 400) | "The initial interview is a 60-minute conversation with an engineer and is designed to assess your technical skills." | Official | VERIFIED |
| Onsite has five or more interviewers | https://www.metacareers.com/DE-prep-onsite/ | "several different conversations with five or more different interviewers" | Official | VERIFIED |
| Round contents (SQL, Python, modelling, product sense) | both pages | Not on the HTML pages. The detail sits in downloadable PDF guides, which I did not open | — | UNVERIFIED from official HTML. Third-party guides and candidate reports describe SQL plus Python in the screen (search snippets only, e.g. prepfully.com, tryexponent.com, 1point3acres). Sources disagree, as `roles.md` already notes |

### A3. Third-party and candidate-reported

| Claim | Source | Exact quote / content | Label | Verdict |
|---|---|---|---|---|
| Big-tech DE SQL screener is 45–60 min with about 4–5 questions | Zach Wilson, https://blog.dataexpert.io/p/how-to-pass-data-engineering-sql (5 Mar 2025; Substack API `audience: everyone`, so free) | "The screener interview This interview is 45-60 minutes" … "they usually ask four to five questions" | Third-party (former big-tech interviewer) | VERIFIED as his account |
| Window functions with PARTITION BY are core; replicate LAG/LEAD with a self-join | same | "Know the differences between these functions and also how to use PARTITION BY in window functions" | Third-party | VERIFIED |
| Some companies want ANSI SQL only | same | "Some places like, Facebook/Meta want you to use only ANSI SQL" | Third-party, about Meta | PARTLY: one author's claim. Do not state it as Meta policy |
| Over-reliance on window functions is a common mistake | same | "Not knowing how to replicate window functions with self-joins and pure ANSI SQL is a common mistake" | Third-party | VERIFIED |
| A DE system design round runs: requirements, source data, model, pipeline, quality, storage, backfill, discoverability, observability | Joseph Machado, https://www.startdataengineering.com/post/de_interview_sd/ (20 Jan 2025, free, no paywall) | TOC: "[Backfill] Define how the pipeline will be re-run(aka backfill) without issues when things go wrong" | Third-party | VERIFIED |
| DE DSA is a subset of patterns (intervals, graph, two pointers, hashing, stacks, sliding window, heap, DP) | https://www.startdataengineering.com/post/de_interview_dsa/ (13 Aug 2024, free) | TOC "3. Common DSA questions asked during DE interviews" | Third-party | VERIFIED |
| Typical loop: SQL, DSA, data modelling, ETL design, behavioral | Exponent / aced.io (see `roles.md` E3; Exponent page is Premium) | not re-quoted | Third-party | Unchanged from `roles.md` |
| Junior DE market is very hard in 2026 | Zach Wilson, https://blog.dataexpert.io/p/the-state-of-the-2026-data-engineering (29 Oct 2026, free) | "Junior engineers are having an incredibly hard time breaking into the market" | Third-party opinion | VERIFIED as opinion. The post is largely promotional, so do not link it |

### A4. Entry vs senior (from postings below)

- **Entry-level DE titles exist but are rare among the 14 employers.** Amazon "Data Engineer I" asks for "1+ years of data engineering experience" (Job posting, 10614089, 26 Nov 2026). Google lists two "Early" Data Engineer roles, both in India. Interns: Jane Street (Data Engineering intern), Jump (Campus Data Engineer Intern), Meta (Data Engineer Intern, Summer 2027, from search snippet only), Amazon (university page).
- **Most other DE postings ask for 3–8+ years.** None of the official pages found describes how DE interviews differ by level. The claim that senior loops weight design and leadership more is Third-party only (Exponent, per `roles.md`). [Editorial: a one-line note is enough, as `roles.md` already says.]

### A5. Frameworks: job requirement vs interview content

| Framework | Appears in postings (examples) | Appears in official interview guidance? | Verdict |
|---|---|---|---|
| Spark / PySpark | OpenAI DE ("Solid understanding of Spark and ability to write, debug and optimize Spark code"), Optiver, Apple ("distributed computing frameworks (e.g., Spark)"), Netflix ("Spark or Flink"), Google, Microsoft (PySpark) | No. Amazon names no framework | Job requirement |
| Airflow (or Dagster/Prefect) | Anthropic (all DE postings), OpenAI ("ETL schedulers such as Airflow, Dagster, Prefect"), Perplexity | No | Job requirement |
| dbt | Anthropic, Optiver, Perplexity Analytics Engineer | No | Job requirement (strongest for Analytics Engineer) |
| Kafka / streaming | Perplexity Data Platform ("Kafka, Kinesis, PubSub, or similar"), Optiver (Structured Streaming), Netflix (Flink) | No | Job requirement (mainly platform roles) |
| Cloud warehouses | BigQuery (Anthropic recruiting DE, Google), Snowflake (Perplexity bonus; Apple "Snowflake Data Engineer - Ads" title), Databricks (Optiver, Perplexity), Fabric/Synapse (Microsoft) | No | Job requirement, varies by employer |

**Conclusion [Editorial, evidence-based]:** frameworks are hiring requirements. The only official interview guidance found (Amazon) tests SQL, scripting, modelling, schema design, optimization, scalability and DSA, and says to understand any technology you propose. Zach Wilson (Third-party): "If you need a fancy SparkSQL UDF to solve your problem, you're going to fail". A question set should cover concepts (shuffle, partitioning, delivery semantics, incremental loads, orchestration and idempotency), not API trivia. Absence of evidence is not proof that framework questions are never asked; say so.

---

## B. Employer evidence (existing site employers only)

| Employer | DE-titled posting(s) now? | Count / sample | Experience minimums | Official DE interview guidance | Source |
|---|---|---|---|---|---|
| **Google** | Yes | Search for "data engineer" (in quotes) returned "10 jobs matched": Data Engineer (×4, India), gUP Engineering (Boulder), Cloud Learning Services (Atlanta/Austin), Senior and Staff DE | "3 years of experience with data engineering, database architecture or distributed systems" (gUP); Cloud Learning: 5 years; two "Early" India roles ask for 1 year in analytics/warehousing | None found | https://www.google.com/about/careers/applications/jobs/results/?q=%22data%20engineer%22 |
| **Amazon** | Yes, many | `search.json` with "data engineer": 709 keyword hits; 25 of the first 100 are DE-titled (DE I, II, III, Sr). The country filter did not fully apply, so India roles appear | DE I: "1+ years of data engineering experience"; DE II/III: 3–5+; Sr: 5+ | **Yes** (A1, university data roles) | https://www.amazon.jobs/en/search.json?base_query=%22data%20engineer%22 ; ids 10614089, 10615974, 10609538 |
| **Meta** | Yes (search snippet; live page not readable) | "Data Engineer, Product Analytics"; "Data Engineer Intern, Product Analytics (Summer 2027)"; "Data Engineer, Analytics (Technical Leadership)" | Snippet: 4+ years with SQL, ETL and data modelling; intern needs a degree in progress | **Yes** (A2), but thin on HTML | https://www.metacareers.com/profile/job_details/1283364266159062/ , /1373603594867455/ (client-rendered; UNVERIFIED live) |
| **Apple** | Yes | Search "data engineer" shows "34 Result"; titles include Data Engineer - Ads, Sr. Data Engineer iCloud Insights, Finance Data Engineer, Operations Data Engineer | Sr DE iCloud: "5+ years of experience in data engineering or business intelligence roles" | None found | https://jobs.apple.com/en-us/search?search=%22data%20engineer%22 ; /details/200685531-0836 |
| **Microsoft** | Yes | Keyword count 841 (relevance-based, not title); 3 DE-titled in the first 30 results (Principal DE, Senior DE ×2, Redmond). API rate-limited (429), so no full count | Sr DE: Master's "AND 3+ years" or Bachelor's "AND 4+ years" in analytics, data or software | None found | https://apply.careers.microsoft.com/api/pcsx/search?domain=microsoft.com&query=data%20engineer ; position 1970393557095745 |
| **Netflix** | Yes (senior) | Search count 129 (keyword); DE-titled: Data Engineer (L5), Data Engineer (L5) - Ads, Staff Data Engineer (L6) - Ads; also Analytics Engineer 5 | L5/L6 = senior; L5 posting: "familiar with big data technologies like Spark or Flink" | None found | https://explore.jobs.netflix.net/careers?query=data%20engineer ; job 790313345439 |
| **OpenAI** | Yes | 3 DE-titled (Data Engineer [publishedAt 2023-09-26, still listed], Core Experimentation, Hardware & Consumer Devices) plus 2 DE managers | "3+ years of experience as a data engineer and 8+ years of any software engineering experience" | None found | https://api.ashbyhq.com/posting-api/job-board/openai |
| **Anthropic** | Yes | 5 DE-titled: Billing & Payments, GTM, Product, Recruiting Analytics, Security | Product: "7+ years"; GTM: "5+ years"; Billing and Recruiting: 5+ preferred, no minimum stated | None found | https://boards-api.greenhouse.io/v1/boards/anthropic/jobs (5450099008, 5418610008, 5448481008, 5424111008, 5462966008) |
| **Perplexity** | Adjacent only | "Member of Data Staff (Analytics Engineer)"; "Member of Technical Staff (Software Engineer, Data Platform)". No title is exactly Data Engineer | AE: "6+ years"; Data Platform: "5+ years (Senior) or 8+ years (Staff)" | None found | https://api.ashbyhq.com/posting-api/job-board/perplexity |
| **Jane Street** | Yes | 4 titled "Data Engineer": NY, HK and London full-time, plus 8631973002 (NY), which is an **internship** although titled "Data Engineer" | Full-time: no years stated; "Proficient with SQL or DataFrame libraries like pandas or Polars"; "Prior experience with financial data is helpful but not required." | None DE-specific (the SWE prep page does not cover DE) | Greenhouse `janestreet` 6558007002, 7668113002, 7229633002, 8631973002 |
| **Citadel Securities** | Adjacent title | "Senior Research Engineer (Data)" (Wayback snapshot 2026-10-28). Search also shows Market Data Engineer and AI Data Engineer (aggregators; not verified live) | Not stated in the extracted section | None found | http://web.archive.org/web/20261028220926/https://www.citadelsecurities.com/careers/details/senior-research-engineer-data/ (live 403) |
| **Hudson River Trading** | **Not found** | Greenhouse `wehrtyou`, 86 postings: no DE title (nearest: Data Strategist, Research Data Expert, Data Scientist Intern) | — | — | https://boards-api.greenhouse.io/v1/boards/wehrtyou/jobs |
| **Jump Trading** | Yes | 2: Data Engineer (NY/Chicago), Campus Data Engineer (Intern) | Full-time: "At least 7 years of software engineering experience"; intern: Python on Linux, data structures, threading | None found | Greenhouse `jumptrading` 8171060, 8002998 |
| **Optiver** | Yes | Data Engineer - Trading (Amsterdam), Senior Data Engineer (Amsterdam, Sydney), Principal Data Engineer (Amsterdam, Sydney) | Senior: "8+ years of experience designing and building production data pipelines"; Trading role is a "Lead Data Engineer" with no years stated | None found | Greenhouse `optiverus` 8545257002, 8583399002 |

Eligibility note [Editorial]: apart from Amazon DE I, Google's two India "Early" roles and the intern postings (Jane Street, Jump, Meta), the postings reviewed are mid-level to senior. Phrase this as "of the postings reviewed…".

---

## C. SQL practice gaps (LeetCode GraphQL, checked 2026-11-27)

The existing 6 problems cover joins, the second-highest value, GROUP BY/HAVING, conditional ratio, first event + next day (Game Play Analysis IV) and top-N per group with DENSE_RANK. sql-databases.ts already covers ROW_NUMBER/RANK and CTEs. Missing: **window frames (ROWS BETWEEN), running totals, LAG/LEAD or gaps-and-islands, pivot-style conditional aggregation, DELETE-based deduplication.**

| Slug | # | isPaidOnly | Difficulty | Gap filled | Recommend? |
|---|---|---|---|---|---|
| restaurant-growth | 1321 | false | Medium | 7-day moving average (window frame or self-join on a date range) | **Yes** |
| last-person-to-fit-in-the-bus | 1204 | false | Medium | Running total `SUM() OVER (ORDER BY …)` | **Yes** |
| consecutive-numbers | 180 | false | Medium | LAG/LEAD or self-join; consecutive runs | **Yes** |
| monthly-transactions-i | 1193 | false | Medium | Conditional aggregation (`SUM(CASE…)`) grouped by month | **Yes** |
| delete-duplicate-emails | 196 | false | Easy | Deduplication with DELETE plus a self-join or ROW_NUMBER | **Yes** (dedup is a core pipeline task) |
| rising-temperature | 197 | false | Easy | Self-join on adjacent dates / LAG | Optional (overlaps 180) |
| immediate-food-delivery-ii | 1174 | false | Medium | First event per user | No (Game Play Analysis IV already covers it) |
| product-sales-analysis-iii | 1070 | false | Medium | First year per product | No (same pattern) |
| percentage-of-users-attended-a-contest | 1633 | false | Easy | Percentage via subquery count | No (Confirmation Rate covers ratios) |
| department-top-three-salaries | 185 | false | Hard | Top-N per group | Already on site |
| game-play-analysis-iv | 550 | false | Medium | — | Already on site |

**Explanation videos** (titles checked with YouTube oEmbed; all from one channel, Frederik Müller, each named after the exact problem). I did not watch them, so confirm the content before linking.

| Problem | Video | oEmbed title |
|---|---|---|
| 1321 | https://www.youtube.com/watch?v=6p9lY_YftsE | "LeetCode 1321: Restaurant Growth [SQL]" |
| 1204 | https://www.youtube.com/watch?v=Td452uOq-80 | "LeetCode 1204: Last Person to Fit in the Elevator/Bus [SQL]" (the problem was renamed; same problem) |
| 180 | https://www.youtube.com/watch?v=smd03AqX5LA | "LeetCode 180: Consecutive Numbers [SQL]" |
| 1193 | https://www.youtube.com/watch?v=awFtLa_iO0s | "LeetCode 1193: Monthly Transactions I" |
| 196 | https://www.youtube.com/watch?v=V0-33jrJgwo | "LeetCode 196: Delete Duplicate Emails [SQL]" |
| 197 | https://www.youtube.com/watch?v=09wjf87VRs0 | "LeetCode 197: Rising Temperature [SQL]" |

Labels: all of these are representative practice chosen by pattern. No employer-specific candidate report names these problems. Some YouTube titles say "Amazon Interview", but those are uploader claims and should not be used.

---

## D. Resources

| Resource | URL | Access (verified) | Verdict / why |
|---|---|---|---|
| Amazon data-roles interview prep | https://amazon.jobs/content/en/how-we-hire/university/data | Free | **Top.** The only official DE interview guidance found with technical specifics |
| Zach Wilson, DE SQL interviews in big tech | https://blog.dataexpert.io/p/how-to-pass-data-engineering-sql | Free (Substack `audience: everyone`, 8.4k chars body) | **Top** for SQL rounds (already in `resources.md`; re-verified) |
| Start Data Engineering, DE Interview Series #2: System Design | https://www.startdataengineering.com/post/de_interview_sd/ | Free, no paywall, 20 Jan 2025 | **Top** for pipeline and data system design rounds. A step-by-step framework that includes backfill and data quality |
| Start Data Engineering, Series #1: DSA | https://www.startdataengineering.com/post/de_interview_dsa/ | Free, 13 Aug 2024 | Optional. Useful to scope DSA for DE (the site's DSA patterns already cover it) |
| Start Data Engineering, idempotent pipelines | https://www.startdataengineering.com/post/why-how-idempotent-data-pipeline/ | Free, 13 May 2021 | Supporting reference for idempotency answers |
| Kimball Dimensional Modeling Techniques | https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/ ; subpages `grain/`, `type-1/`, `type-2/`, `star-schema-olap-cube/`, `fact-table-structure/`, `dimension-table-structure/`, `conformed-dimension/`, `type-0/` (all 200 with correct text) | Free | **Top** for modelling rounds. Short authoritative definitions |
| DataLemur SQL questions | https://datalemur.com/sql-interview-questions | 54 questions listed. Sampled question pages (rolling-average-tweets, consecutive-filing-years, sql-third-transaction, user-retention) loaded the prompt with no paywall text; the only "Premium" text is the nav link. Running or submitting may need an account (not verified). Premium is $15/mo per `resources.md` | Good for practice. Caveat: company tags ("Twitter", "Facebook") are DataLemur's attributions and several say "same question as problem #N in … Ace the Data Science Interview". **Do not present them as real employer questions** |
| DataLemur SQL tutorial: window functions, LEAD/LAG | https://datalemur.com/sql-tutorial/sql-aggregate-window-functions ; https://datalemur.com/sql-tutorial/sql-time-series-window-function-lead-lag | Free, full text loads | Good pattern explanation for the window-function chip |
| StrataScratch | https://platform.stratascratch.com/pricing | Partly free: free tier "75+" coding questions and solutions vs "1000+" premium; $24/mo or $139/yr | Lower priority than DataLemur (as before) |
| DataExpert-io/data-engineer-handbook | https://github.com/DataExpert-io/data-engineer-handbook | Free repo, 45.3k stars, pushed 2026-08-03, no licence | Pointer only (`interviews.md` is a link list, as already noted) |
| DataTalksClub Data Engineering Zoomcamp | https://github.com/DataTalksClub/data-engineering-zoomcamp | Free course, 47.1k stars, pushed 2026-11-26; modules 03 warehouse, 04 analytics engineering, 06 batch, 07 streaming | **Course: supporting only.** Not default preparation, per CLAUDE.md |
| Apache Airflow best practices (idempotent tasks) | https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html | Free | Official reference |
| Maxime Beauchemin, "Functional Data Engineering" | medium.com (403 to curl and WebFetch) | Not verified | Do not link until a person verifies access (Medium may meter it) |
| startdataengineering `post/data-engineering-interview-prep/` | — | 404 | Not a valid URL; use the series URLs above |

---

## E. Technical claims (official documentation)

| Claim | Official URL | Exact quote | Verdict |
|---|---|---|---|
| SCD Type 1 overwrites and loses history | https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/type-1/ | "the old attribute value in the dimension row is overwritten with the new value … this technique destroys history" | VERIFIED |
| SCD Type 2 adds a new row with a new surrogate key | …/type-2/ | "Slowly changing dimension type 2 changes add a new row in the dimension with the updated attribute values." | VERIFIED |
| Type 2 tracking columns | …/type-2/ | "1) row effective date or date/time stamp; 2) row expiration date or date/time stamp; and 3) current row indicator" | VERIFIED |
| Grain is declared first | …/grain/ | "The grain establishes exactly what a single fact table row represents." | VERIFIED |
| Kafka is at-least-once by default | https://kafka.apache.org/44/design/design/ (also 43; `/documentation/` redirects by JS) | "Kafka guarantees at-least-once delivery by default" | VERIFIED |
| Idempotent producer prevents duplicates from retries | same | "the Kafka producer also supports an idempotent delivery option which guarantees that resending will not result in duplicate entries in the log" | VERIFIED |
| Idempotence is on by default (current clients) | https://kafka.apache.org/44/configuration/producer-configs/ | "Idempotence is enabled by default if no conflicting configurations are set." Default: true | VERIFIED. Nuance: the producer default is idempotent, but end-to-end delivery is still at-least-once on consumer failure unless transactions or idempotent sinks are used. Write it that way |
| Exactly-once in Kafka: Streams, or transactional producer + read_committed | design doc | "the transactional producer and the consumer using read-committed isolation level can be used generally to provide exactly-once delivery" | VERIFIED. Scope: reading, processing and writing on Kafka topics. External systems need cooperation |
| Spark shuffle redistributes data across partitions and is costly | https://spark.apache.org/docs/latest/rdd-programming-guide.html (Spark 4.3.0) | "The shuffle is Spark's mechanism for re-distributing data so that it's grouped differently across partitions." | VERIFIED |
| Operations that can shuffle | same | "repartition and coalesce , 'ByKey operations (except for counting) like groupByKey and reduceByKey , and join operations" | VERIFIED. Nuance: `coalesce` (reducing partitions) normally avoids a full shuffle. The doc lists it under "repartition operations" |
| "Narrow vs wide transformations" terminology | Spark docs | The terms do not appear in the RDD programming guide. They come from the RDD paper (Zaharia et al., NSDI 2012: "narrow" and "wide" dependencies) and common usage | PARTLY. Explain them as "transformations that need a shuffle (wide) vs those that don't (narrow)" and cite the shuffle section, not a doc definition |
| dbt incremental: full build first, then only filtered new rows | https://docs.getdbt.com/docs/build/incremental-models | "The first time a model is run, the table is built by transforming all rows of source data. On subsequent runs, dbt transforms only the rows in your source data that you tell dbt to fi[lter]" | VERIFIED |
| `is_incremental()` and `unique_key` for updates | same | "For updated records, you'll need to define a unique key to ensure you don't bring in modified records as duplicates." | VERIFIED |
| dbt snapshots implement SCD Type 2 | https://docs.getdbt.com/docs/build/snapshots | "Snapshots implement type-2 Slowly Changing Dimensions over mutable source tables." | VERIFIED |
| Airflow tasks should be idempotent; prefer UPSERT; read and write a specific partition | https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html | "Do not use INSERT during a task re-run, an INSERT statement might lead to duplicate rows in your database. Replace it with UPSERT." | VERIFIED |

---

## F. Recommendations (for review; nothing implemented)

1. **New question set** (as proposed in `roles.md`): modelling (grain, star schema, SCD 0/1/2, conformed dimensions), pipelines (batch vs streaming, idempotency, backfill, incremental loads, orchestration, data quality), Spark (shuffle, partitioning, skew) and Kafka (delivery semantics). Add an "advanced analytical SQL" group to sql-databases.ts (window frames, LAG/LEAD, running totals, gaps-and-islands, pivots) only if the reviewer agrees.
2. **Problems:** add the five recommended above with `role: "data-engineer"`. Videos are optional, and only after someone watches them.
3. **Company–role pages:** evidence supports DE pages for Amazon (with official guidance), Google, Meta, Apple, Microsoft, Netflix, OpenAI, Anthropic, Jane Street, Jump and Optiver. It is weaker for Citadel Securities (adjacent title, live site blocked) and Perplexity (Analytics Engineer / Data Platform titles only). **Not supported for HRT.** Eligibility lines: most postings are mid-level to senior (OpenAI 3+ DE and 8+ SWE; Anthropic 5–7+; Jump 7+; Optiver 8+ senior; Apple 5+ senior; Netflix L5/L6).

---

## Sources

| URL | Label | Used for |
|---|---|---|
| https://amazon.jobs/content/en/how-we-hire/university/data | Official | A1 |
| https://www.metacareers.com/de-prep-initial/ , https://www.metacareers.com/DE-prep-onsite/ | Official | A2 |
| https://blog.dataexpert.io/p/how-to-pass-data-engineering-sql | Third-party | A3, D |
| https://blog.dataexpert.io/p/the-state-of-the-2026-data-engineering | Third-party | A3 (opinion, not for linking) |
| https://www.startdataengineering.com/post/de_interview_sd/ , /de_interview_dsa/ , /why-how-idempotent-data-pipeline/ | Third-party | A3, D |
| https://www.amazon.jobs/en/search.json?base_query=%22data%20engineer%22&result_limit=100&sort=recent | Job posting | B |
| https://www.google.com/about/careers/applications/jobs/results/?q=%22data%20engineer%22 | Job posting | B |
| https://jobs.apple.com/en-us/search?search=%22data%20engineer%22 ; https://jobs.apple.com/en-us/details/200685531-0836 | Job posting | B |
| https://apply.careers.microsoft.com/api/pcsx/search?domain=microsoft.com&query=data%20engineer ; position_details 1970393557095745 | Job posting | B |
| https://explore.jobs.netflix.net/careers?query=data%20engineer ; /careers/job/790313345439 | Job posting | B |
| https://api.ashbyhq.com/posting-api/job-board/openai ; /perplexity | Job posting | B |
| https://boards-api.greenhouse.io/v1/boards/{anthropic,janestreet,jumptrading,optiverus,wehrtyou}/jobs | Job posting | B |
| Wayback 20261028220926 citadelsecurities.com/careers/details/senior-research-engineer-data/ | Job posting (snapshot) | B |
| metacareers.com/profile/job_details/1283364266159062 , /1373603594867455 | Job posting (search snippet only) | B |
| https://leetcode.com/graphql | Third-party (platform data) | C |
| YouTube oEmbed for 6p9lY_YftsE, Td452uOq-80, smd03AqX5LA, awFtLa_iO0s, V0-33jrJgwo, 09wjf87VRs0 | Third-party | C |
| Kimball technique pages (D, E) | Third-party (authoritative) | D, E |
| https://datalemur.com/sql-interview-questions ; /sql-tutorial/... ; /questions/... | Third-party | D |
| https://platform.stratascratch.com/pricing | Third-party | D |
| https://api.github.com/repos/DataExpert-io/data-engineer-handbook ; /DataTalksClub/data-engineering-zoomcamp | Third-party | D |
| https://kafka.apache.org/44/design/design/ ; /44/configuration/producer-configs/ | Official docs | E |
| https://spark.apache.org/docs/latest/rdd-programming-guide.html | Official docs | E |
| https://docs.getdbt.com/docs/build/incremental-models ; /snapshots | Official docs | E |
| https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html | Official docs | E |
