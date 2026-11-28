# Phase E review records (2026-11-27)

Internal. Not part of the static site. Automated, source-backed review by AI agents and the implementing engineer; **not human expert review**. Running code shows examples work, not that a whole answer is correct, and agreement between AI reviewers is not independent verification.

| Record | Scope |
|---|---|
| `content-review-core-lang.md` | Python, OOP & SOLID, Low-Level Design, Testing & Debugging, Git/Tools/AI, Projects & Take-Homes (136 Q, 22 corrected) |
| `content-review-dsa-systems.md` | DSA, System Design, Networking, Operating Systems (113 Q, 18 corrected) |
| `content-review-cpp-data.md` | C++, SQL & Databases, Data Engineering (72 Q, 32 corrected, 1 added) |
| `content-review-web-backend.md` | JavaScript, TypeScript, React, HTML/CSS/a11y, Frontend System Design, APIs, Backend (131 Q, 29 corrected) |
| `content-review-ai-people.md` | AI Engineering, Customer & Solutions Scenarios, Behavioral (76 Q, 23 corrected) |
| `content-review-ml.md` | ML Fundamentals, ML System Design (38 Q, 19 corrected) |
| `employer-review.md` | 14 companies, AI-interview policies, healthcare/insurance/fintech check |
| `resource-problem-review.md` | All resources, 76 videos, 89 problems |
| `brand-review.md` | Logos and trademarks (not legal advice) |
| `user-validation-checklist.md` | Manual test plan for 10–20 job seekers |
| `maintenance-policy.md` | Review schedule and how to add content |
| `beta-readiness.md` | V1 beta checklist, deployment approach and blockers |

Totals: 566 questions reviewed, 143 corrected, 1 added (SQL isolation levels), 0 removed. V1 closeout added 3 representative customer-scenario exercises (now 569 questions; the 3 new answers have had only the author's own check).

## Human expert review — priority order

All 569 answers still need qualified human review. Highest impact first (details and question numbers in each record):

1. Security advice: CORS with credentials, OAuth/OIDC (RFC 9700), password hashing parameters, CSRF/SameSite, AI security (prompt injection, excessive agency).
2. Concurrency and memory models: C++ atomics and memory orders, data races, Kafka exactly-once boundaries, streaming watermarks.
3. Distributed systems trade-offs: CAP wording, cache invalidation, message-queue delivery, ML serving and drift.
4. Database semantics: isolation levels per database (MySQL and SQLite behaviour from documentation, not executed), NULL ordering.
5. Fast-moving AI/ML content: LLM behaviour (long context, hallucination), LLM-as-judge, distributed training (DDP/FSDP), A/B testing.
6. Accessibility answers (modal focus, combobox) and judgement-based frontend and system design answers.
7. Customer-facing and behavioral answers: employer-specific claims (Amazon, Meta) and the Solutions vs FDE distinction.

## Open evidence gaps

- Meta front end engineer postings not found (page rests on Meta's official prep page); Meta ML minimums from a sample of 3 postings.
- Which Amazon candidates receive the AI-assisted assessment.
- Solutions Engineer interview formats: only AWS's 2021 blogs are official; the rest are postings and third-party.
- HRT full-stack: added at closeout (official 2025 guidance mentions full-stack candidates); no full-stack posting found on 27 Nov 2026, stated on the page.
- Bot-blocked sites (Citadel Securities, HRT, Pinterest, Levels.fyi, GreatFrontEnd) were read in a browser, not by automated link checks.
- One video (Valid Parentheses) verified by title and chapters only; the other 75 against transcripts (coverage of the named problem, not explanation quality).
