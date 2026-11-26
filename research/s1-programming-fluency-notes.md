# S1 Programming Fluency — research and verification notes

Recorded 2026-11-25. Focused verification for the S1 batch only; no broad research was run. The app does not read this file.

## 1. Interview-question evidence

**What R1–R6 already established.** Language-specific technical questions are rare as a dedicated round at the target employers (R5 §5.2, confidence low–medium). Two signals matter more:

- **Employer-confirmed (Amazon, R2-A1):** the official SDE interview topics page lists "programming language" as a topic and asks for syntactically correct code, checked edge cases and practice outside an IDE. It names no specific questions.
- **Candidate-reported (Google, R1-S17):** a 2026 L3 candidate's interviewer pressed on dry-running, complexity, and whether the candidate understood a Python built-in they used. This is a single report, but it is consistent with R5's "explain the behavior and cost of every built-in you use".
- **Candidate-reported (Apple, R2-AP5):** nine language-fundamentals questions in a new-grad loop (Java). This is one report, and only a weak signal for Python.

**Sources checked in this batch (all accessed 2026-11-25):**

| Source | URL | Class | Use |
|---|---|---|---|
| Python Programming FAQ | https://docs.python.org/3/faq/programming.html | Official technical documentation | Recurring conceptual questions with authoritative answers: arguments vs parameters, mutable defaults, aliasing, copying, UnboundLocalError, local/global rules, -22 // 10, ternary, removing duplicates, multidimensional lists, string concatenation |
| Python Design and History FAQ | https://docs.python.org/3/faq/design.html | Official technical documentation | String immutability, dictionary keys must be immutable, list.sort() returns None, floating-point inaccuracy |
| Time complexity of operations on built-in types | https://docs.python.org/3/builtins/time-complexity.html | Official technical documentation (CPython) | Every complexity claim in S1 was checked against this page |
| GeeksforGeeks — Python Interview Questions | https://www.geeksforgeeks.org/python/python-interview-questions/ | Third-party interview-prep list | 68 questions; used to identify commonly recommended entry-level questions. Advanced items (GIL, metaclasses, MRO, pickling, async) were excluded as out of scope |
| Tech Interview Handbook — Array, String, Hash table, Sorting and searching | https://www.techinterviewhandbook.org/algorithms/array/ (and /string/, /hash-table/, /sorting-searching/) | Reputable interview-prep resource | Edge cases (empty, single item, duplicates) and why hash tables and sorting matter in coding problems |

Unavailable to automated access: InterviewBit's Python questions page (404), DataCamp (403), Real Python (403). They were not used.

**How questions were classified.** "Commonly recommended" means the question appears in at least two independent sources among the official FAQs, the GeeksforGeeks list and R5 §5.2. "Representative editorial" means a code-reading or reasoning question written for this curriculum to exercise a listed competency. No question is attributed to a specific employer, and no frequency claims are made.

| Topic | Commonly recommended | Representative editorial | Total |
|---|---|---|---|
| Variables and Data Types | dynamic typing; mutable vs immutable; float inaccuracy; None | type vs isinstance; truthiness / bool("False"); conversion failures | 7 |
| Operators and Expressions | == vs is; / vs // vs % | short-circuit returns operands; precedence; `x == a or b`; cost of `in` | 6 |
| Strings | immutability; slicing; concatenation cost / join | split vs join; comparison and case; f-strings; str vs bytes | 7 |
| Conditional Statements | ternary operator | if/elif vs separate ifs; condition order (FizzBuzz); truthiness pitfalls; guard clauses; boundary tests; De Morgan simplification | 7 |
| Loops | for vs while; break vs continue | range boundaries; enumerate and zip; modifying while iterating; nested-loop complexity; early exit best/worst case | 7 |
| Functions and Arguments | parameter vs argument; mutable defaults; *args/**kwargs; argument passing | print vs return; positional vs keyword; side effects; decomposition in interviews | 8 |
| Lists | append vs extend; remove/pop/del; list comprehension; list vs tuple | implementation and costs; copying; choosing list/set/dict | 7 |
| Sets | set vs dict; removing duplicates; hashability | when to use; membership speed; set operations; ordering | 7 |
| Dictionaries | keys must be hashable; dict vs list/set | how it works; average vs worst case; get vs [] vs in; counting and grouping; iteration; Two Sum reasoning | 7 |
| Mutability, References and Copying | aliasing; shallow vs deep copy; multidimensional list bug; argument mutation; is vs == | rebinding vs mutation; tuple containing a list | 7 |
| Sorting and Custom Sort Keys | sort vs sorted; underlying algorithm | key functions; multi-key sorting; stability; complexity; when not to sort; mixed types | 7 |
| Python Debugging | how to debug a program | reading tracebacks; error categories; common exceptions; debugging process; print vs debugger; find-the-bug; dry-running without a compiler | 7 |
| Scope | LEGB; local vs global; global vs nonlocal; UnboundLocalError | global state; block scope; shadowing built-ins | 6 |

Total: 90 structured questions, each with a model answer, at least one follow-up and a code example. This is for editorial review, not a target.

## 2. Technical accuracy checks

- Every code example (90) was extracted from the topic files and run with Python 3.13.5. The printed output was compared automatically with the `# -> expected` comments: 88 matched. Two examples are not executed by design: one is a static traceback (generated from a real run, then shortened by removing file paths and caret markers), and one pauses with breakpoint().
- Complexity claims checked against the official CPython table:
  - list append is amortized O(1); insert and pop at index k are O(n - k); `x in list` is O(n).
  - dict and set operations are O(1) average and O(n) worst case; insertion is amortized.
  - Set union is O(len(s) + len(t)); intersection is O(min(len(s), len(t))).
  - Sorting is O(n log n) worst case and O(n) comparisons for already-sorted input.
  - String concatenation in a loop is quadratic.
  - Integer membership in a range is O(1).
- The stability guarantee was confirmed in the sorted() documentation. "Based on Timsort" follows the Sorting HOWTO wording; CPython's merge policy was updated in 3.11, so the topic avoids claiming a specific variant.
- Python-version notes: zip(strict=True) needs 3.10 or later; dictionary insertion order is guaranteed from 3.7.

## 3. Resource verification

Accessibility check on 2026-11-25. "Accessible" means HTTP 200 and readable without an account; for section links, the anchor id was confirmed in the page HTML. This is not an educational-quality review by a person. No `verifiedOn` dates were set.

- **68 non-LeetCode URLs:** all returned 200, and every anchor exists. The Ned Batchelder PyCon 2015 video is playable (status OK, 25 min 20 s).
- **University of Helsinki MOOC:** exercise names were read in a browser that was not logged in, for Lists (Part 4.3), References (5.2) and Dictionary (5.3), and the debugger section in 4.1 was confirmed. Submitting requires a MOOC.fi login.
- **27 LeetCode problems:** title, difficulty and problem statement were confirmed in the product owner's browser session. All are Easy except Group Anagrams and Merge Intervals (Medium, marked optional). Because the session may have been logged in, free access without a premium plan was not independently confirmed. These are long-standing free problems. Submitting requires a free account.
- **CS50P anchors:** a "set" section exists in Lecture 9 notes and a "dictionaries" section in Lecture 2 notes. Week 6 uses lambda keys with sorted().
- **Dropped:** CS50x debugging short (404). No focused free video for sets was found beyond the CS50P Lecture 9 segment.

## 4. Depth decisions

- Mutability, References and Copying uses **Explain**, following R5 §9 ("E (Explain depth)").
- Scope stays **Implement** (R5: Working priority).
- All other core topics use **Apply**.

## 5. Deferred or folded-in material

- **Not published, as instructed:** Tuples, Built-in Functions and Comprehensions. Their essentials are taught inside other topics:
  - tuple use and unpacking in Lists;
  - len, sum, min, max, sorted, enumerate, zip, any and all across Loops, Lists and Sorting;
  - list comprehensions in Lists.
- **Standard library preview:** collections.Counter and defaultdict are introduced briefly in Dictionaries, and heapq.nlargest is mentioned in Sorting; full coverage stays in Unit 2.
- **Deferred to later units:** try/except (Unit 6 Exception Handling), logging (Unit 7), and unfamiliar-codebase debugging (Unit 5).

## 6. Learner effort (editorial estimate)

These are rough editorial estimates for a beginner, not measurements:

| Hours | Topics |
|---|---|
| 1–2 | Scope |
| 2–3 | Variables; Operators; Conditionals; Sets |
| 2–4 | Mutability; Sorting |
| 3–5 | Strings; Debugging |
| 4–6 | Loops; Functions; Lists; Dictionaries |

That is roughly 35–55 hours for the core twelve topics plus Scope. Learners with programming experience should start with the Unit 1 readiness checklist and may need only a few hours of targeted review.
