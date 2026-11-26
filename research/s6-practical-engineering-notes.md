# S6 Practical Software Engineering — notes

Recorded 2026-11-25. Focused resource, question and example verification only; no new broad employer research. The app does not read this file.

## Published

| Item | Slug | Depth |
|---|---|---|
| Reading and Debugging Unfamiliar Code | `reading-debugging-unfamiliar-code` | Apply |
| Code Review | `code-review` | Implement |
| AI-Assisted Engineering and Verification | `ai-assisted-engineering` | Apply (professional); interview relevance conditional |
| Existing-Codebase Drills | `existing-codebase-drills` | Apply |
| Debugging & Code Review Interviews (guide) | `debugging-code-review` | Interview type |
| AI-Assisted Coding Interviews (guide) | `ai-assisted-coding` | Interview type |

Category: Practical Engineering (per CLAUDE.md). "Practical Coding Assessments", "Take-Home Assignments" and "Project Deep Dives" stay planned.

Also in S6: SQL dialect notes added to Databases and SQL Concepts (SQLite vs PostgreSQL: identity columns, foreign-key enforcement, NUMERIC for money, GROUP BY strictness, EXPLAIN, driver placeholder styles).

## Evidence used (existing research only)

| Claim | Source | Class |
|---|---|---|
| Debugging rounds in existing code: Stripe, Notion, Scale AI; Capital One technical case | R3 C1–C4, C8 | Candidate |
| Capital One agentic round (bug fix then feature, ~20 min each; some ran out of time and still got offers) | R3 C9 | Candidate |
| AI coding rounds at Stripe, Decagon, xAI | R3 C1, C5, C7 | Candidate |
| Meta: many interviews include a built-in AI assistant candidates are expected to use; reading, debugging, building on existing code | R2 M1 | Official |
| Google: AI tools not permitted in interviews | R1 S1 | Official |
| Microsoft: no outside assistance unless explicitly permitted | R2 MS1 | Official |
| Amazon: half of postings list AI tools as basic qualification; validate AI-generated code; code reviews and troubleshooting | R2 A6 | Official (postings) |
| Amazon: AI-debugging OA section; questions on checking AI output | R2 A8, T2 | Candidate |
| Apple: debugging existing code 3/17; AI-workflow questions 9/17; AI access 3/17 (mixed levels) | R2 AP6 | Candidate (aggregated) |
| Code review in 15/28 postings | R4 | Official (postings) |
| AI-tool expectations in ~8/18 postings | R3 §5 | Official (postings) |
| Code-review rounds: weak at entry level (GitLab, non-entry) | R5 §8 | Official, non-entry |

Interview questions are representative and editorial; none is attributed to an employer and no frequencies are stated.

## Code validation

- **New examples:** 20 = 9 Python + 4 pytest + 2 shell + 5 diff (diffs and shell are shown, not executed).
- **Library total:** 276 = 237 Python, 5 SQL, 10 pytest, 17 shell, 5 diff, 2 deliberately not run; 0 failures.
- **Deliberately broken examples:** the validator now checks `# fails:` markers. The mutable-default example fails exactly `test_tags_start_empty` with the stated assertion.
- **Broken-versus-fixed check** (scratch pytest file, 9 tests passing):
  - corrected `add_tag` passes in order;
  - the pagination PR skips page 1, and the fix returns 5 items on page 3 and rejects page 0;
  - the discount abstraction equals the plain function;
  - the f-string query leaks all orders for `x' OR '1'='1` and fails on a quote, while the parameterized version does not;
  - `calc` returns 30;
  - the original shipping `>` reproduces the report;
  - the integration fix sums string amounts.
- **AI-topic examples** print both the suggested (buggy) and the reviewed result: median, leap year, `eval` vs `ast.literal_eval`.

## Resources

- 21 S6 URLs returned HTTP 200 on 2026-11-25.
- Sections confirmed:
  - Missing Semester 2026 debugging-profiling (merge-sort exercise) and agentic-coding (comparison exercise);
  - Google eng-practices "What to look for" and "comments" (Nit/Optional/FYI);
  - pytest `--pdb`;
  - GitHub Copilot Free plan.
- **External drill repositories** (Gilded Rose kata, humanize) were inspected by reading their files, but not cloned or executed: running third-party code was blocked by the session's permission rules.
  - Gilded Rose: `python/` has `gilded_rose.py`, a failing placeholder `test_foo` and an approval test.
  - Gilded Rose rule: do not alter the Item class or items property.
  - Gilded Rose feature: the Conjured requirement exists.
  - humanize: `naturalsize` exists with `binary` and `gnu` options.
- **Status (product owner, T4):** the Gilded Rose kata and humanize repositories are recorded as inspected but not execution-verified. Revisit them in S10.
- `verifiedOn` not set.

## Target integration

| Path | Change |
|---|---|
| Entry-level SWE role | Reading/debugging Essential (Apply); Code review Important (Implement); Drills Important (Apply); AI-assisted Important (Apply) |
| Google | Reading/debugging Defer (linked); AI-assisted Defer (AI not permitted in interviews) |
| Amazon | AI-assisted Important (Explain, linked); Reading/debugging Important (Implement) |
| Meta | Reading/debugging and AI-assisted Important (Apply), conditional on a confirmed AI-assisted round |
| Microsoft | AI-assisted Defer (no outside assistance unless permitted) |
| Apple | Reading/debugging Optional (Implement); AI-assisted Optional (Explain) |
| Netflix | Unchanged |
| Other Employer | Practical work linked to Drills (Important, Apply); format lines point to the two new guides |
| Coding & Algorithms, Rapid-Fire | Related guides added; stale "forthcoming" line in Rapid-Fire fixed |

## Limitations

- Practical-round evidence is candidate-reported and concentrated in growth-stage companies and Capital One; prevalence is unknown.
- Drill time limits are editorial.
- External repositories may change; drills name files that existed on 2026-11-25.
