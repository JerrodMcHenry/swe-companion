# SWE Companion

A modern, curated software engineering interview cheat sheet and resource directory. Open it, pick a company or topic, and go straight to the relevant questions and answers, coding problems and the best free resources.

It is not a course. It links the best existing free material (Tech Interview Handbook, NeetCode, Grind 75, Hello Interview, System Design Primer, Awesome Low-Level Design, Refactoring.Guru, DevInterview and official employer pages) and adds concise answers, prioritization and evidence labels. It cannot guarantee interviews or offers.

## What is included

- **12 employers:** Google, Amazon, Meta, Apple, Microsoft, Netflix (eligibility-first), early-stage startups (including YC-backed), AI-focused startups, growth-stage companies, established tech companies, enterprise and graduate programs, and other employers or a specific posting.
- **3 roles:** Software Engineer, Backend Engineer and Full-Stack Engineer, giving 36 company and role pages.
- **18 question sets** (about 385 questions) covering Python, data structures and algorithms, OOP and SOLID, low-level design, system design, SQL, operating systems, networking, APIs, backend, JavaScript, TypeScript, React, HTML/CSS and accessibility, testing and debugging, Git and AI-assisted coding, behavioral, and projects and take-homes.
- **71 coding problems** grouped by pattern, with employer selections, difficulty, priority, LeetCode links and NeetCode explanation videos where one exists.
- **Company pages** showing only the preparation categories relevant to that company and role; process, eligibility and sources are collapsed.
- **Resource Library** (a directory by topic) and **Getting Hired** guides covering job descriptions, resumes, projects, applications and interview recovery.
- Global search (⌘K), light and dark themes, and mobile layouts.

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
public/logos/              Company logo assets (SVG)
research/                  Research reports and evidence register (not read by the app)
CLAUDE.md                  Product rules, evidence standards and contribution workflow
```

## Maintaining content

- **Add a question:** add it to the right file in `content/questions/` with a concise answer and a `source` that supports the technical answer. A source never means an employer asks the question.
- **Add a problem:** add it to `content/problems.ts` with its pattern. Add an `explanation` only if it explains that exact problem, and `employers` only if it comes from that employer's evidence-based selection.
- **Change an employer:** edit `content/companies/<slug>.ts`: its `categories` (most important first), optional `roleCategories` and `notes`, official resources, and the collapsed facts and sources. Keep at most four facts, label evidence, and update `checked` only when the evidence was actually re-checked.
- **Resources:** verify the linked content, not just that the link loads, and disclose accounts, paid sections and language or version caveats.
- **Review intervals** are in `research/evidence-register.md`: about 3 months for AI-in-interview policies, 6 months for hiring processes and postings, and 12 months for general resources.

## Logos

Company logos are stored locally in `public/logos/`. Meta, Apple, Netflix, Y Combinator and Amazon come from the Simple Icons project (CC0; Amazon from an earlier release, since it has been removed from current versions). Google and Microsoft are their standard marks. The logos identify the companies only; they imply no affiliation or endorsement. Check each company's brand guidelines before any public deployment.

## Known limitations

- Employer processes change; evidence dates from November 2026 and some pages rest on a handful of candidate reports.
- External resources can move, change or add paywalls. LeetCode, NeetCode and Hello Interview are commercial sites whose linked pages were free at review.
- No human has reviewed every answer and resource end to end; effectiveness has not been measured with real users.
