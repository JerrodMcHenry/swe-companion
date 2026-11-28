# Phase D verification: Frontend, Solutions, Data and Machine Learning Engineer

Checked 2026-11-27. Detailed evidence (claims, verbatim quotes, URLs, verdicts) is in the per-role notes in this folder:
`phase-d-frontend.md`, `phase-d-solutions.md`, `phase-d-data.md`, `phase-d-ml.md` and `phase-d-employer-types.md`. This file records the
decisions taken from them and the technical verification of the new content. Automated checks are not human expert review.

## Role combinations added (hiring evidence)

Posting counts are one-day snapshots of public job boards; experience lines describe postings reviewed, not hiring policy.

| Employer | Frontend | Data | ML | Solutions | Basis / exclusions |
|---|---|---|---|---|---|
| Google | — | ✓ | ✓ | ✓ | Frontend excluded: only senior UX Engineer titles |
| Amazon | ✓ | ✓ | ✓ | ✓ | Official FEE prep and university data-roles prep pages; AWS early-career SA blogs (2021) |
| Meta | ✓ | ✓ | ✓ | ✓ | Official FEE and ML prep pages; posting pages did not load, so minimums unverified |
| Apple | ✓ | ✓ | ✓ | ✓ | One early-career frontend posting; others 5+ years |
| Microsoft | ✓ | ✓ | ✓ | ✓ | Frontend posting outside the US; others mostly Senior+ |
| Netflix | ✓ | ✓ | ✓ | — | Solutions excluded: two senior partner-integration roles only |
| OpenAI | ✓ | ✓ | ✓ | ✓ | Applied AI Architect counted as Solutions |
| Anthropic | ✓ | ✓ | ✓ | ✓ | ML titles are ML infrastructure / ML-research engineer |
| Perplexity | — | — | ✓ | ✓ | Data excluded: adjacent titles only |
| Jane Street | ✓ | ✓ | ✓ | — | MLE internship posting describes 1–2 ML engineering rounds |
| Citadel Securities | ✓ | — | ✓ | — | Wayback snapshots (live site 403); data titles adjacent only |
| Hudson River Trading | — | — | — | — | No matching engineering titles |
| Jump Trading | ✓ | ✓ | — | — | ML titles are research-track |
| Optiver | — | ✓ | ✓ | — | |
| Growth-stage | ✓ | — | — | ✓ | New-grad frontend preference postings and internships; experienced SA/SE |
| AI-focused startups | — | — | — | ✓ | Experienced SE postings |
| Established tech | — | — | ✓ | — | University-grad MLE (often Master's/PhD) |
| Enterprise | — | ✓ | ✓ | — | JPMorganChase Data & AI program tracks |
| Early-stage | — | — | — | — | Too few postings; YC has no role sub-pages |
| General preparation | ✓ | ✓ | ✓ | ✓ | Editorial general preparation for every role |

## Decisions from the research

- Front-end system design: GreatFrontEnd says it is often for mid-to-senior roles; Amazon's official FEE prep expects at least one front-end systems design question. Category text says "Lighter at entry level"; Amazon's page carries the official note.
- ML system design: Hello Interview says entry-level ML roles usually exclude it; the set and category are labelled as mainly for experienced candidates.
- Solutions vs FDE: no universal pre-sales/post-sales split (counterexamples at OpenAI, Google, Microsoft, Perplexity, Netflix, Meta). The answer distinguishes by responsibilities.
- Frameworks (Spark, Kafka, Airflow, dbt, cloud warehouses) appear as job requirements, not official interview content: questions test transferable concepts.
- "Narrow/wide transformations" are not official Spark documentation terms; the answer explains them as "needs a shuffle or not".
- Removed duplicate frontend categories (a browser group of the JavaScript set and the accessibility group of the HTML/CSS set) because their parent rows are already listed.
- Fixed a broken link found by research: AWS Well-Architected pillars page (404 after restructuring) → `workloads.html`.
- Not linked: GreatFrontEnd Throttle and LeetCode Throttle (premium), khangich/machine-learning-interview (stale, paid links), Beauchemin's article (unreadable), YC role sub-pages (do not exist), DataLemur company tags (vendor labels, not employer questions).

## Technical verification

| Content | Method | Result |
|---|---|---|
| Debounce, throttle, Promise.all, abortable search | Node 24, local HTTP server with delayed responses | Outputs as shown; stale request returns null |
| Infinite scroll with IntersectionObserver | Real Chrome, mocked fetch, 100 px rows | 3 requests, 60 items, observer disconnects at the end |
| Analytical SQL (dedup, running total, ROWS vs RANGE rolling average, gaps and islands, LAG, conditional aggregation, FILTER) | Temporary PostgreSQL 14 instance in the scratchpad (also SQLite 3.45) | Outputs as shown, including 30.0 vs 35.0 with a missing day |
| SCD type 2 lookup, ON CONFLICT upsert | PostgreSQL 14 | Leeds; rerun replaces 100 with 120 |
| Flatten JSON, streaming file aggregation | Python 3 (`-I`) | Outputs as shown; fixed a bug where a bad row created a key before failing |
| Precision/recall/F1 worked example, k-means | NumPy, scikit-learn | 0.75 / 0.6 / 0.667, accuracy 0.994 vs 0.99; centroids [1.17 1.5] and [8.5 8.5] |
| Core Web Vitals thresholds, INP replacing FID (12 March 2024) | web.dev (research note) | Verified |
| Kafka delivery semantics, idempotent producer default | kafka.apache.org/44 design and producer configs | Verified |
| New LeetCode problems | LeetCode GraphQL | All free; difficulties as listed |
| Explanation videos | YouTube oEmbed titles | Exact problem named (NeetCodeIO, Frederik Müller); not watched in full |
