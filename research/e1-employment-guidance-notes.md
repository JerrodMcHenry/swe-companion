# Early employment guidance batch — evidence and verification notes

Recorded 2026-11-25. Focused verification only; no broad research. The app does not read this file.

## Guides published

| Guide | Location | Slug |
|---|---|---|
| Resume Preparation | Getting Hired | `resume` |
| Job Description Gap Analysis | Getting Hired | `job-description-gap-analysis` |
| Job Application Strategy | Getting Hired | `application-strategy` |
| Interview Failure Recovery | Getting Hired | `interview-failure-recovery` |
| Behavioral Interview Preparation | Interview Preparation (canonical) | `behavioral-interviews` |

## Employer-confirmed statements used (official pages, checked 2026-11-25)

| Statement in the guides | Source |
|---|---|
| Behavioral questions take the form "Tell me about a time when…" or "How would you approach this situation…?" | Google, Interviewing at Google (interview-tips), page source |
| STAR expanded as Situation, Task, Activity, Result; prepare a broad library of examples; concise narratives | Google interview-tips |
| "Accomplished [X], as measured by [Y], by doing [Z]" (under "Focus on data") | Google interview-tips |
| Cross-reference your resume with the job description | Google interview-tips |
| Apply for up to three jobs every 30 days; one or two shorter conversations with a recruiter before in-depth interviews | Google, Our hiring process |
| Behavioral interview is 45 minutes; use S.T.A.R. (Situation, Task, Actions, Results); discussing how you learned and grew is valued | Meta Careers blog (updated 2022; behavioral section only) |
| STAR method; use "I" statements for your personal contribution; Leadership Principles are Amazon-specific | Amazon, Your complete guide to the Amazon interview process (2025-04-08) |
| Recruiter call as the first step; process typically 2–3 months | Meta Hiring Process (R2-M1) |
| Google postings use "Minimum qualifications" and "Preferred qualifications" and accept a bachelor's degree "or equivalent practical experience" | R1 S10–S11 |
| Amazon postings use "Basic qualifications" and "Preferred qualifications" | R2 A6 |
| Enterprise graduate programs use online assessments and assessment days or recorded interviews | R3 (Capital One, JPMorganChase) |
| Graduation-year roles are posted many months before the start (Amazon 2027 roles posted Aug–Nov 2026) | R2 A6 |

## Third-party and editorial material

- **Tech Interview Handbook:** resume, behavioral questions and self-introduction pages. Third-party and free. Its ATS claims ("may reject automatically") are the author's view; the guides avoid repeating them as fact.
- **MIT CAPD and Harvard Office of Career Services:** resume guidance from established university careers offices.
- **SimplifyJobs New-Grad-Positions:** a community-maintained repository; the guide says to confirm every listing on the employer's page.
- **Editorial content:** the ATS formatting advice, the apply-now decision rules, the gap categories, the illustrative job descriptions (all three are labelled as not real postings), the illustrative STAR answers (labelled), the reflection template and the weakness-to-unit mapping.
- **Not claimed:** no hiring statistics, response rates, application quotas, ATS algorithm behavior or question frequencies.

## Resource verification

All 15 external URLs in the five guides returned HTTP 200 to an automated request on 2026-11-25, after redirects. The Apple student page's final URL (`/careers/us/work-at-apple/students.html`) is the one used.

| Dropped | Reason |
|---|---|
| Microsoft student page | Its former URL now returns a 404 page |
| Two Amazon interview-prep URLs | 404 |
| MIT "Make your resume ATS-friendly" | Mostly links to external articles |

No `verifiedOn` dates were set.

## Structural limitations encountered (no schema change made)

- **Career guides can link only to Library topics**, not to units or Interview Preparation guides. Gap Analysis, Application Strategy and Failure Recovery name units and guides in text; Failure Recovery links four relevant published topics through `relatedTopics`.
- **Interview guides have no question-and-answer field.** Behavioral questions use `studyTopics`: the question is the title, and the reason holds what it probes plus follow-ups, under the existing priority headings. Illustrative answers use `practice` notes. The page headings therefore read "Study priorities" and "Practice recommendations".
- **Long examples render as bulleted text:** the resume structures, job descriptions and reflection template.
