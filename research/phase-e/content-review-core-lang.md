# Phase E content review — core-lang

This is an automated review by Claude (core-lang), checked on 2026-11-27. It is not a human expert review. I ran every Python code block with `python3 -I` (CPython 3.13.5) and compared its output with the `# ->` comments. I ran the pytest snippets with pytest 8.3.4 and reproduced the circular-import and traceback examples. The shell, diff and traceback blocks are illustrative and were not run.

## python.ts (54)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q5 floats | math.isclose advice had no caveat for zero (the default is relative tolerance only, so `isclose(1e-10, 0)` is False) | Added a note to pass abs_tol near zero | Ran it; docs.python.org math.isclose | — |
| Q6 mutable types | Pointed to a section ("Mutability, References and Copying") that no longer exists | Removed the reference | — | — |
| Q7 `/ // %` | "/ always returns a float" is false for Fraction and Decimal | Changed to "for int and float operands" | Language reference | — |
| Q19 list | Follow-up still said "covered in Unit 2" (left over from the old curriculum) | Removed | — | — |
| Q23 dict | Insertion order was not split into language guarantee vs CPython detail. The match step said only `==` | Order is a language guarantee since 3.7 (a CPython 3.6 implementation detail). The match step is now "identity or ==, probing on a collision" | docs.python.org stdtypes and what's new 3.7 | — |
| Q28 dict iteration | Said deleting during iteration always raises RuntimeError. The docs say it "may raise RuntimeError or fail to iterate over all entries" | Qualified the claim and named the CPython behaviour | stdtypes dictionary views | — |
| Q52 circular import | The error message did not match real output. The follow-up used curriculum jargon ("edges → logic → data") | Error text now matches a reproduced run. Follow-up reworded | Reproduced on 3.13.5 | — |
| Q53 type hints | "Interpreter ignores them" was inaccurate: annotations are evaluated (deferred from 3.14) but not enforced | Changed to "does not enforce them" | typing docs | `__annotations__` output not run on 3.14 |

The `docs.python.org/3/builtins/time-complexity.html` page and its anchors (#list, #dict-frozendict, #set-frozenset) exist in the 3.15 docs. The page supports the list, dict and set costs given in the answers.

The GIL and free-threading are not covered in this set. They are answered in operating-systems.ts, which was not assigned to me. I added no question for them.

Reviewed 54 questions; no issues found in the others. Removals: none.

## oop-solid.ts (24)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q9 overloading | Left out singledispatchmethod and typing.overload | Added both briefly | functools and typing docs | — |
| Q10 abstract class vs interface | "An interface defines only the contract" is out of date for Java 8+ (default methods). Protocol "not at runtime" left out @runtime_checkable | Qualified both | Java language spec (general knowledge); typing docs | — |
| Q13 SRP | Gave only "one reason to change" | Added Martin's later "responsible to one actor" phrasing | Robert C. Martin's SRP writing (from memory, not fetched) | Wording of the attribution |
| Q17 DIP | Gave only half the principle | Added "both depend on abstractions, ideally defined by the high-level side" | Martin's DIP (from memory), and the DIP in the Wild URL returns HTTP 200 | — |

Reviewed 24 questions; no issues found in the others. Removals: none.

## low-level-design.ts (7)

Reviewed 7 questions; no issues found. Links checked: AlgoMaster, the Awesome LLD parking-lot page and pytest all return HTTP 200. Removals: none.

## testing-debugging.ts (25)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q1 test levels | Presented the test pyramid as a rule | Now framed as the common guideline that teams adjust | Fowler, The Practical Test Pyramid | — |
| Q3 regression test | Follow-up said "awareness level" (curriculum remnant) | Removed | — | — |
| Q4 test doubles | Treated mock and spy as the same thing | Separated them in line with Meszaros/Fowler, and noted that Mock does both | Fowler, Test Double | — |
| Q25 responding to review | Pointed to a section ("see Behavioral Interviews") that does not exist | Shortened to "(Behavioral question.)" | — | — |

All pytest snippets produce the stated results (2 passed, 1 passed, 2 passed, 1 passed, 1 failed + 1 passed, 1 passed). The count_words, parse_price and order_total outputs were verified by running them.

Reviewed 25 questions; no issues found in the others. Removals: none.

## git-tools-ai.ts (15)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q13 hallucinated packages | Implied that attackers had registered the hallucinated names | Changed to "could register" | arXiv 2406.10279 abstract (HTTP 200) | — |
| Q14 AI security | Called ast.literal_eval "safe" without qualification | Changed to "far safer", with a note on input-size limits | ast.literal_eval docs warning | — |
| Q14 follow-up | Pointed to a "Security Fundamentals" set that does not exist | Reworded | — | — |
| Q15 AI in interviews | Meta's statement left out "select roles" and "no outside AI tools". The answer pointed to a guide that does not exist | Added both points and removed the reference | metacareers.com/hiring-process (fetched 2026-11-27) | Google and Microsoft wording was taken from the repo's 25–26 Nov evidence, not re-fetched |

Reviewed 15 questions; no issues found in the others. Removals: none.

## projects-take-homes.ts (11)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q1 project walkthrough | Strengthened the honesty guard | Added "describe only what you actually built" | — | — |
| Q9, Q10 take-home follow-ups | Referred to a settlement/splitting example that was never introduced | Labelled it "an expense-splitting take-home, for example" | — | — |

I checked the integrity guidance: no answer encourages inventing experience or hiding AI use. Q6, Q7, Q8 and Q11 require honest attribution and disclosure.

Reviewed 11 questions; no issues found in the others. Removals: none.

## Human expert review still needed

These are the highest-impact items. All answers still need human review in principle.

- git-tools-ai Q15: employer AI policies change often, and the Google and Microsoft wording was not re-fetched.
- python Q23, Q24 and Q28: CPython vs language guarantees for dicts.
- oop-solid Q13 and Q17: the SOLID attributions and wording.
- testing-debugging Q4: the test-double terminology.
- python Q53: annotation behaviour under 3.14's deferred evaluation (not run on 3.14).
