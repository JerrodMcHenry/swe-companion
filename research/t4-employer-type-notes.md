# T4 Employer-type preparation paths — notes

Recorded 2026-11-25. Built from R1–R6, T2 §2 and §5 and the evidence register. Focused re-checks only; no new broad research. The app does not read this file.

## Published

- **Early-Stage Startups (including YC-backed)** (`early-stage-startups`)
- **AI-Focused Startups** (`ai-focused-startups`)
- **Growth-Stage Companies** (`growth-stage-companies`; the planned listing said "Growth-Stage Startups")
- **Established Technology Companies** (`established-tech-companies`)
- **Enterprise & Structured Early-Career Programs** (`enterprise-early-career-programs`)

Each path combines with the Entry-Level Software Engineer role. Backend and Full-Stack combinations wait for their milestones.

## Focused re-checks (2026-11-25)

- **Corelayer posting:** still lists a CEO call, 4-hour take-home, CTO interview on the take-home and 2 days working with the team.
- **Stripe Atlas "Scaling engineering organizations":** still describes the Bug Squash interview.
- **Pinterest "Our philosophy on AI in hiring":** returns 403 to automated requests, but was read in the browser. It mentions designated AI sections and says to assume AI is not permitted for live questions unless told.
- **JPMorganChase Digital Handbook (PDF):** the first round is a recorded virtual interview on HireVue and/or HackerRank (technology only), followed by interviews.
- **Capital One "What to expect" page:** behavioral and case interviews.
- **Links:** YC jobs list, GitLab handbook and FastPrep report pages return 200.

## Priority design (differences, not just wording)

| | Google (existing) | Early-stage | Growth-stage | Amazon (existing) | AI-focused | Enterprise |
|---|---|---|---|---|---|---|
| Core DSA depth | Essential, Apply | Important, Implement | Essential, Implement | Essential, Apply | Essential, Implement | Essential, Implement (online-assessment level) |
| Trees and graphs | Essential, Apply | Optional | Important, Implement | Essential, Apply | Important, Implement | Trees and graphs Optional |
| Dynamic programming | Important | Defer | Optional | Important | Optional | Defer |
| Project and its explanation | Role / Important | Essential, Apply / Essential | Role / Important | Role | Role / Important | Role |
| Existing-codebase drills | Role (Important) | Essential | Essential | Role | Important | Role |
| Reading and debugging | Defer (interview) | Essential, Apply | Essential, Apply | Important, Implement | Essential, Apply | Important, Implement |
| AI-assisted engineering | Defer (interview) | Important, Apply | Important (conditional) | Important, Explain | Essential, Apply | Optional (conditional; agentic round reported at one program) |
| Design | OOP Optional | Small systems Important | Basic system design Optional | Low-level design Essential | Basic system design Important | Defer |
| Other | — | Take-home (forthcoming) Important | API integration (forthcoming, Unit 7) Important | Leadership Principles | ML, RAG and agents Defer | Recorded video Important (conditional); business case Optional (conditional); SQL and security Important |

The established-tech path is the balanced default:
- Essential: DSA at Implement depth and testing.
- Important: trees, graphs, stacks, binary search, recursion, Classes and Objects, Git, SQL concepts (postings), AI-designated sections (Pinterest) and projects.
- Defer: system design.

## Forthcoming items referenced

- One substantial project (Unit 6), using the Engineering Projects guide until then.
- Take-home Assignments, Project Deep Dives and Practical Coding Assessments guides (S7).
- Basic System Design guide (conditional; S10).
- API integration tasks (Backend Engineering, Unit 7).

## Composition fix

- **Change:** `composePath` now skips a role entry the role defers, even when the target rates it Essential or Important. Previously the target entry would have gained an incorrect note, "Also required for this role."
- **Trigger:** the AI-focused path's System design (Important, Explain) against the role's Defer.
- **Existing pages:** company combined pages were diffed before and after the fix, and none changed.

## Limitations

- Evidence is weak for early-stage, AI-focused and established-tech interviews, and moderate for growth-stage and enterprise.
- Enterprise evidence is finance-heavy.
- Posting counts are one-day snapshots.
- All benchmarks and times are editorial.
