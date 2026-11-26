# S5 Engineering Fundamentals — notes

Recorded 2026-11-25. Focused resource, question and behavior verification only. The app does not read this file.

## Published

| Topic | Slug | Depth |
|---|---|---|
| Git and Pull Requests | `git-pull-requests` | Implement |
| Command Line and Development Environment | `command-line-environment` | Implement |
| Automated Testing | `automated-testing` | Implement |
| How the Internet and HTTP Work | `internet-http` | Explain (curl and developer-tools exercises) |
| Databases and SQL Concepts | `databases-sql-concepts` | Explain (basic SQL implementation) |
| Computer Science Essentials: Processes, Threads, Memory and Concurrency | `computer-science-essentials` | Explain |
| Security Fundamentals | `security-fundamentals` | Explain (defensive exercises) |

Category: Engineering Fundamentals. Unit 4 planned entries replaced with slugs. Unit 4 readiness rewritten (8 abilities) and stopping point extended with an editorial integrated practical check (repository setup, branch, failing or missing test, fix, pull request).

## Interview-question evidence

- **Employer-supported:** Amazon's official topic list covers how the internet works, operating systems, and relational vs non-relational databases at a basic level, and evaluates well-tested code. Microsoft says interviewers are likely to expect you to test your solution.
- **Commonly recommended (editorial selection):** what happens when you enter a URL; TCP vs UDP; HTTP methods, idempotency and status codes; process vs thread; stack vs heap; race conditions and deadlocks; the GIL; joins, GROUP BY/HAVING, NULL, indexes, ACID; authentication vs authorization; hashing vs encryption; password storage; SQL injection, XSS, CSRF; merge vs rebase; revert vs reset.
- **Not claimed:** no question is attributed to an employer and no frequencies are stated.
- **SQL distinction:** SQL is an essential job skill for backend roles (15/28 R4 postings) but dedicated SQL interview rounds were not found in US new-grad evidence (R4 §14). The topic and the Other Employer and Rapid-Fire guides treat SQL rounds as conditional.

## Behavior verified by execution

- **Git** (scratch repository outside the project): conflict markers and `UU` status; `git revert --no-edit` creates a new commit (reverting a merge needs `-m`); `git reset --soft HEAD~1` leaves changes staged; `git restore --staged` unstages; discarding working-tree changes.
- **SQL:** all 5 SQL blocks run in SQLite with rows compared to `-- ->` comments (joins with NULLs, GROUP BY/HAVING, NULL counting, index, keys).
- **Transactions:** `with connection:` rolls back on a CHECK violation (Python sqlite3).
- **Concurrency:** thread pool overlap, locked counter (40000), consistent lock ordering, `asyncio.gather` result order; run repeatedly with identical results.
- **Security:** scrypt with OWASP minimum parameters (N=2^17, r=8, p=1; ~0.3 s locally), constant-time comparison, `html.escape`, parameterized query vs f-string injection.

## Code validation

- **New examples in S5:** 49 = 23 Python + 5 SQL + 6 pytest + 15 shell (shell examples are shown, not executed).
- **Library total:** 256 examples = 228 Python, 5 SQL, 6 pytest, 15 shell (not executed), 2 deliberately not run; 0 failures. Python 3.13.5, pytest run per block, SQLite in memory.

## Resources

- 28 new external resource and exercise URLs returned HTTP 200 on 2026-11-25; 3 LeetCode SQL problems (Combine Two Tables, Customers Who Never Order, Duplicate Emails; all free, Easy) confirmed in the browser.
- Named sections confirmed to exist: Pro Git 2.2, 2.4, 3.2, 3.6; OSTEP cpu-intro, vm-intro, threads-intro, threads-bugs; CS50 SQL Querying, Relating, Designing, Optimizing; SQLBolt lessons 1–18; Missing Semester 2026 lectures.
- GitHub Skills exercises require a free GitHub account (noted in the topic).
- `verifiedOn` not set: accessibility checks only; educational-quality review is the product owner's.

## Target integration

| Path | Change |
|---|---|
| Entry-level SWE role | Git and Automated testing Essential (Implement); Command line Important (Implement); HTTP and Security Important (Explain); Databases and CS essentials Optional (Explain) |
| Amazon | HTTP, Databases, CS essentials Important (Explain), now linked |
| Google | Databases and CS essentials Defer (linked); role entries carry the employer-priority note |
| Microsoft | Automated testing added as Essential (Implement) |
| Apple | CS essentials Important (Explain), team-dependent |
| Meta, Netflix | Unchanged; receive Unit 4 topics through the role |
| Other Employer | SQL guidance points to Databases and SQL Concepts; Databases Optional, raised when SQL is stressed |
| Rapid-Fire | Testing/Git, Databases, HTTP linked; OS and security entry added (conditional) |

## Limitations

- Topic subtitle repeats "Engineering Fundamentals" (category and unit share the name), consistent with how earlier units repeat similar names.
- Evidence for HTTP, OS and security interview questions outside Amazon is commonly-recommended, not employer-confirmed.
- Shell examples are not executed; Git behaviors were verified separately in a scratch repository.
