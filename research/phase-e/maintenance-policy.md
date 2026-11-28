# Maintenance policy

Internal and lightweight: no scraping, scheduled jobs or dashboards. A person (optionally with an AI assistant) re-checks sources by hand on the schedule below and records what changed. Automated checks are not human expert review.

## Where evidence lives

| Content | Evidence record | Date field |
|---|---|---|
| Employer pages (`content/companies/<slug>.ts`) | `research/expansion-2026-11/*.md`, `research/phase-e/employer-review.md`, earlier R/T notes | `checked` on each company; dates inside `levels`, `details` |
| Question sets | `research/phase-e/content-review-*.md` (issues, corrections, sources, uncertainty) | Review record date |
| Resources and problems | `research/phase-e/resource-problem-review.md` | Review record date |
| Logos | `research/phase-e/brand-review.md` | Review record date |

Every employer claim carries an evidence label (Official, Candidate-reported, Third-party, Editorial, Varies). Eligibility lines describe "postings reviewed" with a date, never policy.

## Review schedule

| What | Changes | Re-check every | How |
|---|---|---|---|
| AI-in-interview policies (all employers), AI-company processes and eligibility | Fast | 3 months | Official interview/candidate pages; update `facts`, `notes`, `checked` |
| Employer interview processes, eligibility lines, "Other roles" posting lines | Medium | 6 months, or when a user reports a change | Official pages and public job boards; keep dates |
| Free/paid status and content of resources; explanation videos | Medium | 6 months | Open each link, read the promised section; LeetCode free status via the problem page |
| External link health | Medium | Before any release, and every 3 months | Request every external URL; replace 404s; note bot-blocked sites (403/429) separately |
| Stable technical answers (DSA, SQL semantics, OS, networking, C++ language rules) | Slow | 12 months, or on a language/standard release | Spot-check against official docs; run code examples |
| Fast-moving technical answers (LLM/AI engineering, AI security, frontend frameworks, ML tooling) | Fast | 6 months | Re-read cited sources; check names (e.g. OWASP LLM Top 10 edition, React APIs) |

Outstanding: every answer still requires qualified human expert review before it can be described as reviewed. Priorities are listed at the end of each content review record.

## Adding content without compromising simplicity

Before adding anything, ask: does it help a candidate prepare for a real interview, and is it better than what is already there? Do not grow counts by default.

- **Company:** only with approval. Add `content/companies/<slug>.ts` (copy a similar company), list it in `content/companies.ts`, set `roles` to roles with hiring evidence, put dated evidence in `research/`, label every fact, keep ≤4 facts, and use a monogram unless the brand review supports a logo.
- **Role:** only with approval. Add it to `roles` in `content/types.ts` (with `also` titles), a `roleDefaults` list in `content/companies.ts`, and only the targeted question groups it needs.
- **Question:** add to the most specific existing set and group; original, concise, speakable answer; run any code; add a `source` that supports the technical claim; never claim an employer asks it unless a documented report says so. Do not rename groups (category links use them).
- **Resource:** add only if it is interview-specific, verified by reading it, labelled free / free account / partly free / paid, linked to the exact section, and better than what it replaces. Define it once (with its question set, pattern or the featured list).
- **Problem:** add only to fill a real pattern or role gap; check free status, title and difficulty; add an explanation link only if it explains that exact problem; add `employers` only from an evidence-based selection.

Run `npm run build` (type checks and content checks), check 390px and narrower widths in both themes, and record what was verified.
