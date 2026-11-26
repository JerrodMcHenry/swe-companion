# S7 Projects, Deployment and Practical Interview Assessments — notes

Recorded 2026-11-26. Focused resource, example and evidence verification only; no new broad employer research. The app does not read this file.

## Published

| Item | Slug | Depth | Category |
|---|---|---|---|
| Build and Deploy a Project | `build-deploy-project` | Apply | Practical Engineering |
| Exceptions and Error Handling | `exceptions-error-handling` | Implement | Python |
| Modules, Packages and Project Structure | `modules-packages-project-structure` | Implement | Python |
| Deployment and CI/CD | `deployment-ci-cd` | Implement (basic workflows); concepts at Explain | Practical Engineering |
| Explaining Project Architecture | `explaining-project-architecture` | Apply | Practical Engineering |
| Take-Home Assessment Simulation | `take-home-simulation` | Apply | Practical Engineering |
| Practical Coding Assessments (guide) | `practical-coding-assessments` | Interview type | |
| Take-Home Assignments (guide) | `take-home-assignments` | Interview type | |
| Project Deep Dives (guide) | `project-deep-dives` | Interview type | |

- Unit 6 planned entries are replaced with the six slugs.
- The Engineering Projects career guide now links the new topics and guides and points to them for the assignment and the explanation work. Its own guidance is kept.

## Evidence used (existing research; focused re-checks marked)

| Claim | Source | Class |
|---|---|---|
| 4-hour take-home, then a CTO interview on it, then 2 days working with the team | Corelayer YC posting (R3 O1; re-checked in T4) | Official (posting) |
| Founder intro, CTO deep dive, take-home presented on a whiteboard, paid work trial | EQL Tech recruiter posting (R4 O2; re-read in browser 2026-11-26) | Official (recruiter posting) |
| Take-home named as one place AI use may be invited | Pinterest AI-in-hiring page (R4 O1; read in browser in T4) | Official |
| 90-minute take-home (design document plus coding) on Notion's AI new-grad track; four-hour take-home built with AI at xAI | R3 C3, C7 | Candidate |
| Backend practical at Scale AI; integration rounds at Stripe; Klaviyo intern practical rounds extending a Python web app with SQL; Capital One agentic bug fix plus feature | R3 C1, C4, C9; R4 C1 | Candidate |
| Project deep dive in Decagon's onsite; resume and project deep dives common in adjacent Microsoft internship reports | R3 C5; R2 MS6 | Candidate |
| Language-fundamentals questions including exceptions in one Apple new-grad report | R2 AP5 | Candidate |
| Amazon evaluates code on scalability, robustness and testing | R2 A1 | Official |
| CI/CD 8/28, cloud 9/28, Docker 3/28 in R4 postings, mostly as job expectations | R4 §6 | Official (postings) |

No question is attributed to an employer, and no frequencies are stated. Model answers are editorial.

## Code validation

- **New examples:** 21 in total.
  - 9 Python and 1 pytest, all executed and matching their expected output.
  - 5 shell, not executed. Their import behaviours were reproduced in a scratch package: `ModuleNotFoundError` when running a package module by path, the circular-import `ImportError` text, and `__main__` not running on import.
  - 1 YAML (the GitHub Actions workflow) and 1 TOML (`pyproject.toml`), both parsed for syntax.
  - 1 JSON (take-home input), parsed.
  - 3 inspected files (README outline, architecture text, Dockerfile), not executed. The Dockerfile was not built: Docker was not used.
- **Library total:** 297 examples; 0 failures.
- **Workflow action versions** (`actions/checkout@v6`, `actions/setup-python@v5`) match GitHub's official Python tutorial on 2026-11-26. Newer major versions (v7) exist. The workflow was not run on GitHub.

## Resources

- All 25 S7 URLs returned HTTP 200 on 2026-11-26, except Pinterest (403 to automated requests; read in a browser in T4).
- **Sections confirmed:**
  - Python tutorial chapter 8 (8.3–8.8 assigned; 8.9–8.10 are exception groups and notes) and chapter 6;
  - the Packaging guide on `pyproject.toml`;
  - GitHub Actions "Building and testing Python" (and the billing page: free on standard runners for public repositories);
  - Missing Semester 2026 Shipping Code (dependencies, packaging, releases, containers, configuration, deploying a web service) and Beyond the Code (documentation);
  - Twelve-Factor Config;
  - the Docker "What is a container?" page;
  - the C4 system context diagram page;
  - the argparse HOWTO and `json` reference.
- No hosting provider is recommended or promised as free; learners are told to check current terms and set spending limits.
- `verifiedOn` is not set.

## Roadmap placements

| Target | Placements |
|---|---|
| Google | Project and project explanation in parallel; Exceptions in "Engineering for the job"; Project Deep Dives guide in the simulation stage |
| Amazon | Project and explanation in parallel; Exceptions (target Important; robustness, official) in Coding fluency; Project Deep Dives guide |
| Meta | Project and explanation (role) in parallel; Exceptions in job stage; Practical Coding Assessments guide on the AI-assisted existing-code stage |
| Apple | Project and explanation (target Essential) in parallel; Exceptions (Explain; language-fundamentals report) in the team-language stage; Project Deep Dives guide |
| Microsoft | Project and explanation in parallel; Exceptions (testing invalid input) in "Write, run and test"; Project Deep Dives guide |
| Early-stage | Project (Apply) in parallel; Exceptions in stage 1; Modules (Optional) and Deployment (Important, Implement; owning deploys) in "Build and ship"; Take-home simulation and Explaining architecture in stage 4 with the Take-Home, Deep Dives and Practical guides |
| AI-focused | Exceptions in "Verify code" with the Practical guide; new Take-home stage (target Important; reported take-homes); Deep Dives guide |
| Growth-stage | Exceptions (target Important; integration rounds) in APIs and integration; Practical guide in "Working in real code"; Take-home (Optional) in simulation with the Take-Home and Deep Dives guides |
| Established tech | Take-home (Optional; Pinterest) in simulation with the Take-Home and Deep Dives guides; Exceptions in job stage |
| Enterprise | Explanation (role) in parallel; Exceptions in "Enterprise engineering" with the Practical guide; Deployment (target Important, Explain; postings) in job stage |
| Other employer | Take-home (Optional) in Practical skills with the Practical and Take-Home guides; Exceptions in job stage; Deep Dives guide |
| Netflix | Unchanged (eligibility guidance only) |

- **Role guide additions:** Exceptions Important (Implement), Explaining your project Important (Explain), Modules Optional (Implement), Deployment Optional (Explain). The project entry now links its topic.
- **Not placed anywhere** (Library only), deliberately:
  - Modules outside early-stage;
  - Deployment outside early-stage and enterprise;
  - Take-home for Big Tech targets and enterprise (no evidence).

## Limitations

- **External tools not run:** the GitHub Actions workflow and the Dockerfile were checked only by parsing and inspection.
- **Thin evidence:** take-home and deep-dive evidence is a handful of companies; prevalence is unknown.
- **Editorial values:** all timeboxes and benchmarks are editorial.
