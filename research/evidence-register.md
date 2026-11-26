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

## Other Employer or Specific Job Posting (`/interview-prep/other-employer`)

Editorial guidance built on the cross-employer summaries in R3 §4 and §9 and R4 §6. There are no employer-specific claims. Review it when the employer-type paths (T4) are published.

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

## Known gaps (for T2)

- **Big Tech without dedicated paths:**
  - Netflix: not researched.
  - Meta and Microsoft: no current entry-level posting; candidate evidence weak.
  - Apple: no official guidance found.
- **Employer types:**
  - Established-technology companies: new-grad interview content not verified.
  - AI-focused startups: small sample.
  - Enterprise: sample is finance-heavy.
- **Roles:** for backend roles, whether US entry-level interviews include a dedicated SQL round.
