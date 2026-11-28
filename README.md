# SWE Companion

A modern, curated software engineering interview cheat sheet and resource directory. Open it, pick a company or topic, and go straight to the relevant questions and answers, coding problems and the best free resources.

It is not a course. It links the best existing free material (Tech Interview Handbook, NeetCode, Grind 75, Hello Interview, System Design Primer, Awesome Low-Level Design, Refactoring.Guru, DevInterview and official employer pages) and adds concise answers, prioritization and evidence labels. It cannot guarantee interviews or offers.

## Mission

SWE Companion exists to help engineers get jobs and get paid, and to build better futures for themselves and their families. It consolidates, verifies, prioritizes and simplifies the interview information that already exists, so candidates know what to focus on within minutes. Accuracy, relevance, accessibility and simplicity are permanent principles. It does not promise interviews, offers or exact questions, and it is not affiliated with any employer.

## What is included

- **20 employers:** Big Tech (Google, Amazon, Meta, Apple, Microsoft, Netflix), AI companies (OpenAI, Anthropic, Perplexity), quantitative trading firms (Jane Street, Citadel Securities, Hudson River Trading, Jump Trading, Optiver) and six employer types, including General preparation for any employer.
- **10 roles:** Software, Backend, Frontend, Full-Stack, Data, Machine Learning, AI, Forward Deployed, Solutions and Quantitative Developer. Individual companies show only roles with hiring evidence; employer types and General preparation cover representative roles as general preparation, not verified openings. Scope is frozen for the initial release (see `CLAUDE.md`).
- **25 question sets** (569 questions, each answer reviewed by an automated, source-backed audit in November 2026; human expert review is still outstanding) covering Python, C++, AI engineering, ML fundamentals, ML system design, data engineering, frontend system design and web performance, customer and solutions scenarios, data structures and algorithms, OOP and SOLID, low-level design, system design, SQL, operating systems, networking, APIs, backend, JavaScript, TypeScript, React, HTML/CSS and accessibility, testing and debugging, Git and AI-assisted coding, behavioral, and projects and take-homes.
- **89 coding problems** grouped by pattern (including SQL and JavaScript practice for data and frontend roles), with employer selections, difficulty, priority, LeetCode links and explanation videos where one explains that exact problem.
- **Company pages** showing only the preparation categories relevant to that company and role; process, eligibility and sources are collapsed.
- **Resource Library** (a directory by topic) and seven **Getting Hired** guides: application strategy, job descriptions, resumes with LinkedIn and GitHub, projects, performing in interviews, interview recovery, and offers and negotiation.
- Global search (⌘K) across companies, roles and equivalent job titles, question groups, questions, problems, resources and guides; light and dark themes; mobile layouts.

## Maintenance

Follow `research/phase-e/maintenance-policy.md` (review schedule and how to add content). Content review records are in `research/phase-e/`. The `research/` folder is internal and is not part of the static site.

Employer facts come from research collected in November 2026 (see `research/`). Each claim is labelled Official, Candidate-reported, Third-party, Editorial or Varies. Problems are representative practice by pattern, not documented company questions. Confirm interview formats with your recruiter.

## Simplicity requirements

Every page must give immediate value. Relevant material is within two clicks of the homepage, nothing needs instructions to use, and anything that does not help the user prepare is removed or collapsed. It is not a course, curriculum or encyclopedia. See `CLAUDE.md`.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build and deploy

```bash
npm run build      # type-checks, runs all content checks, writes the static site to out/
```

Deploying the website publishes only `out/`; it contains no research notes, review records or credentials. The source repository (including `research/`) is private, and making it public is a separate decision. See `research/phase-e/beta-readiness.md` for the recommended static hosts and beta checklist.

`out/` is a plain static site. Routes are exported as `.html` files (for example `/questions/python` → `out/questions/python.html`), so the host must map extensionless URLs to `.html` files (most static hosts do this by default) and serve `out/404.html` for unknown paths. Filters such as `/problems?company=google` are read in the browser; no server logic is needed.

## Repository structure

```
app/                       Pages and the few client components (header and search, question list, problem table)
  companies/               /companies/[slug] and /companies/[slug]/[role]
  questions/               /questions and /questions/[slug]
  problems/                /problems
  resources/               /resources
  getting-hired/           /getting-hired and /getting-hired/[slug]
  search-index.json/       Static search index
content/
  types.ts                 Content types
  questions.ts, questions/ Question sets (one file per set) and their checks
  problems.ts              Problems, patterns and pattern resources
  companies.ts, companies/ Employer pages (one file per employer), category catalogue and checks
  resources.ts             Featured resources for the Resource Library
  career-guides.ts, career-guides/   Getting Hired guides
research/                  Research reports and evidence register (not read by the app)
CLAUDE.md                  Product rules, evidence standards and contribution workflow
```

## Maintaining content

- **Add a question:** add it to the right file in `content/questions/` with a concise answer and a `source` that supports the technical answer. A source never means an employer asks the question.
- **Add a problem:** add it to `content/problems.ts` with its pattern. Add an `explanation` only if it explains that exact problem, and `employers` only if it comes from that employer's evidence-based selection.
- **Change an employer:** edit `content/companies/<slug>.ts`: its `categories` (most important first), optional `roleCategories` and `notes`, official resources, and the collapsed facts and sources. Keep at most four facts, label evidence, and update `checked` only when the evidence was actually re-checked.
- **Resources:** verify the linked content, not just that the link loads, and disclose accounts, paid sections and language or version caveats.
- **Review intervals** are in `research/evidence-register.md`: about 3 months for AI-in-interview policies, 6 months for hiring processes and postings, and 12 months for general resources.

## Logos and affiliation

Companies are shown with neutral monograms, not logos: the brand review (`research/phase-e/brand-review.md`, not legal advice) found no licence for this use, and several owners' published guidelines restrict it. Every page's footer states that SWE Companion is independent and not affiliated with, endorsed by or sponsored by the companies named. Company names identify employers only.

## Known limitations

- Employer processes change; evidence dates from November 2026 and some pages rest on a handful of candidate reports.
- External resources can move, change or add paywalls. LeetCode, NeetCode and Hello Interview are commercial sites whose linked pages were free at review.
- No human has reviewed every answer and resource end to end; effectiveness has not been measured with real users.
