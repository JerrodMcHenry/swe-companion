# S3 Core interview preparation — evidence and verification notes

Recorded 2026-11-25. Focused verification only; the app does not read this file.

## Guides

| Guide | Category | Slug | Status |
|---|---|---|---|
| Coding & Algorithms Interview Preparation | Interview type | `coding-algorithms` | Revised (URL unchanged) |
| Rapid-Fire Technical Questions | Interview type | `rapid-fire-technical-questions` | New (conditional format) |
| Google Early-Career Software Engineer | Company | `google` | New |
| Entry-Level Software Engineer | Role | `software-engineer` | New |

## Inventory after S3

| Section | Published | Planned |
|---|---|---|
| Interview Preparation | 5 guides: Coding & Algorithms, Behavioral, Rapid-Fire, Google, Entry-Level Software Engineer | Company 7, Role 5, Interview type 8 |
| Getting Hired | 5 guides | 5 entries |

## Google: official claims re-checked on 2026-11-25

Checked against the official page source:

| Claim | Source page |
|---|---|
| Up to three applications in a rolling 30-day window | Google, Our hiring process (body text and FAQ) |
| Resume and transcript review for interns and new graduates | Our hiring process |
| Possible Google Hiring Assessment, plus a possible role-related coding exercise | Our hiring process |
| One or two recruiter conversations by phone or video | Our hiring process |
| Panel of interviews by video or in person; structured rubrics; open-ended questions; no brainteasers | Our hiring process |
| About 6–8 weeks once interviews start | Our hiring process |
| AI tools not permitted during interviews | Our hiring process ("Important note") |
| AI and Google Search not permitted; STAR expanded as Situation, Task, Activity, Result; X-Y-Z data structure | Interviewing at Google (interview tips) |
| US "Software Engineer II, Early Career" posting (job 109116638069957318) still open; minimum qualifications unchanged from R1 | The posting itself |

The US posting's minimum qualifications are: bachelor's degree or equivalent practical experience; 1 year of software development in an industry setting; experience in a listed area; experience using AI productivity tools.

The Early career page and the Build your future resources page both returned 200 and link the official preparation videos.

**Not re-verified.** The 14-posting worldwide snapshot comes from R1, taken the same day; current openings change and were not recounted. The candidate reports (R1 S17–S19) were re-checked only for availability (HTTP 200), not re-read. The guide treats "L3" as a third-party and candidate-reported mapping (Levels.fyi), not an official Google label.

**Verification dates.** The guide's overview says the official pages were last checked on 25 November 2026, which is factual. The `verifiedOn` field is left unset, because by convention it is reserved for a person's verification.

## Other employer claims (checked 2026-11-25)

- **Meta:** the hiring-process FAQ says many interviews include a built-in AI assistant that candidates are expected to use.
- **Amazon:** the online assessment is the first step for full-time and internship SDE roles (university OA page). The interview topics page lists programming language, data structures and algorithms.
- **Capital One:** the student page describes an automated assessment, recruiter calls and a Power Day with job-fit and behavioral interviews.
- **JPMorganChase:** the Software Engineer Program page describes the program and expected skills, but not its assessment steps, so the guide does not claim it does.

## Priority decisions

- **Google:**
  - Essential, matching R1 §6–7 and candidate reports: problem-solving process, complexity, fluency, testing and dry-running, arrays and strings, hash maps, graphs, trees, recursion, heaps, binary search, sorting and intervals, behavioral.
  - Important: dynamic programming basics, stacks and queues, linked lists, project explanation.
  - Optional: union-find and shortest paths (seen in a small number of reports); object-oriented design (1 of 5 reports); system design (none of the early-career reports, but in Google's general videos); SQL, operating systems, networking and cloud (team-dependent).
- **Coding & Algorithms (all targets):** heaps, dynamic programming, linked lists, and sorting and intervals are Important, with heaps noted as Essential for Big Tech; union-find is Optional and conditional.
- **Entry-Level Software Engineer:**
  - Essential: fluency, problem-solving, complexity, arrays and hash maps, trees, graphs and recursion, debugging, one project, behavioral.
  - Important: the remaining DSA topics and forthcoming Units 3–5.
  - Optional: rapid-fire questions, union-find, system design.
- **Rapid-Fire:** framed as conditional, with the Library as the question bank and no new question list. Forthcoming topics are named without links.

## Linking coverage

- **Coding & Algorithms:** links all 14 DSA topics plus Lists and Python Debugging.
- **Google:** 16 topic links.
- **Entry-Level Software Engineer:** 8 topic links; forthcoming Units 3–6 are named in text.
- **Rapid-Fire:** 7 topic links.
- **Cross-references to other guides** (Behavioral, Engineering Projects, Job Description Gap Analysis, Job Application Strategy, Interview Failure Recovery, Coding & Algorithms, Rapid-Fire) are in text. The schema has no guide-to-guide link field; the product owner chose not to add one in E1.

## External links

All 22 external URLs across the four guides returned HTTP 200 on 2026-11-25.
