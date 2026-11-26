# SWE Apprenticeship

*Stop searching. Start learning. Get hired.*

A static web app that turns "how do I become a software engineer?" into one focused, employer-specific study plan for entry-level candidates. You pick an employer target and a role; the app tells you what to study, why, how deeply, in what order, where (exact sections of free resources), which interview questions to prepare, what to practise, when you are ready and what to skip. Getting hired is covered alongside: job-description gap analysis, resumes, projects, applications and interview recovery.

The app is a curator, not a course. The best free resources (official documentation, university courses, established educators, practice platforms) do the teaching; this project selects, sequences and qualifies them. It cannot guarantee interview success or employment.

## What is supported

- **Employer targets (12):** Google, Amazon, Meta, Apple, Microsoft, Netflix (eligibility guidance only — there is no reliable new-grad process to build a roadmap from), early-stage startups (including YC-backed), AI-focused startups, growth-stage companies, established technology companies, enterprise and structured early-career programs, and other employers or a specific job posting.
- **Roles (3):** Software Engineer, Backend Engineer, Full-Stack Engineer. That gives 33 customized apprenticeships plus three Netflix eligibility pages.
- **Knowledge Library:** 64 topics in ten units, each with five tabs (Learn, Resources, Interview Q&A, Practice, Ready?), plus interview-format and role guides, all searchable.
- **Instructional stack:** Python for programming and interviews; FastAPI and PostgreSQL for backend; TypeScript, React, HTML and CSS for full-stack. Skills transfer to other stacks.

## How a customized apprenticeship works

Each employer target lists its interview priorities and an explicit, hand-written stage order. Each role lists its on-the-job competencies; Backend and Full-Stack also define their own stages, which each employer places with one role marker. The two are combined so every topic appears once, with the employer's interview priority and the role's job priority kept distinct. Optional topics are marked and collapsed; deferred topics are listed under "Skip for now". Build-time checks reject duplicates, empty stages, missing required topics, deferred topics placed in a roadmap and broken references. Recruiter-confirmed formats and actual job requirements always override the defaults.

The last selected employer and role are remembered in the browser (localStorage). There are no accounts, no backend and no tracking.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build and deployment

```bash
npm run build      # type-checks, runs all content checks, writes the static site to out/
npx tsc --noEmit   # optional separate type check
```

`out/` is a plain static site. Serve it from any static host. Routes are exported as `page.html` files (for example `/library/python-lists` → `out/library/python-lists.html`), so the host must map extensionless URLs to `.html` files (most static hosts do this by default; for a plain file server, add a rewrite) and serve `out/404.html` for unknown paths. Topic pages read an optional `?path=<target>.<role>` query string in the browser; no server logic is needed.

## Repository structure

```
app/                     Next.js App Router pages and the few client components (picker, nav, topic tabs)
content/
  types.ts               Content types
  topics.ts, topics/     Library topics (one file per topic) and their build checks
  curriculum.ts          The ten units and which topics they contain
  interview-guides.ts, interview-guides/   Employer, role and interview-format guides
  roadmap.ts             Stage templates, roadmap composition and roadmap build checks
  career-guides.ts, career-guides/         Getting Hired guides
research/                Research reports, batch notes and the evidence register (not read by the app)
CLAUDE.md                Product rules, content standards and contribution workflow
```

## Maintaining content

- **Add or change a topic:** edit or add `content/topics/<slug>.ts`, list it in `content/topics.ts`, reference it in `content/curriculum.ts`, and place it in each relevant target's `stages` only where there is an employment reason. `npm run build` fails on any broken reference.
- **Resources:** link exact sections, disclose accounts, paid content, language and version caveats. A working link is not an educational review; set `verifiedOn` only after a person has reviewed it.
- **Interview answers:** keep them concise; add a `source` that supports the technical answer (never as evidence that employers ask it). Unsourced answers are shown as editorial preparation advice.
- **Employer evidence:** follow the review dates in `research/evidence-register.md` (about three months for AI-in-interview policies, six months for hiring processes and postings, twelve months for general resources). Label claims official, candidate-reported or editorial, and never invent dates or frequencies.
- See `CLAUDE.md` for the full content strategy and checks.

## Known limitations

- Employer processes change; evidence was collected in November 2026 and some guides rest on a handful of candidate reports. Confirm formats with your recruiter.
- Resources are external and can move, change or add paywalls. Several are commercial sites whose cited pages are currently free (Hello Interview, NeetCode, Total TypeScript, Frontend Mentor, Exercism, AlgoMaster, LeetCode).
- Some practice requires free accounts (LeetCode, Exercism, PortSwigger, GitHub, Frontend Mentor) or local tools (Node.js, a Unix shell).
- Readiness criteria and time benchmarks are editorial guidance, not employer passing standards.
- No resource has a human `verifiedOn` review yet; educational effectiveness has not been measured with real learners.
