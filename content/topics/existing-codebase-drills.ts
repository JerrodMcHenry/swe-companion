import type { Topic } from "../types";

const topic: Topic = {
  slug: "existing-codebase-drills",
  title: "Existing-Codebase Drills",
  category: "Practical Engineering",
  phase: "practical-software-engineering",
  overview:
    "Short, repeatable exercises in code you did not write — trace a flow, add tests, fix a bug, add a small feature, refactor safely, review a change — using small public repositories, done once without AI and once with AI plus verification. They turn the practical-engineering topics into routine and mirror the work of a new engineer; you do not need to complete every drill.",
  whyItMatters:
    "Drills turn the skills from Reading and Debugging Unfamiliar Code, Code Review and AI-Assisted Engineering into routine. They mirror the work of a new engineer and the practical rounds candidates report outside Big Tech — debugging an existing codebase (Stripe, Notion, Scale AI) and Capital One's agentic round, reported as fixing a bug and then adding a feature in a large application. They are also the fastest way to build the confidence to change unfamiliar code without breaking it.",
  prerequisites: ["Reading and Debugging Unfamiliar Code", "Code Review", "Automated Testing", "Git and Pull Requests"],
  objectives: [
    "Follow a repeatable drill routine: understand the task, run the project and its tests, locate the code, change it in small steps, verify, explain.",
    "Write characterization tests that capture current behavior before changing untested code.",
    "Fix a reported bug with a reproducing test and a minimal change.",
    "Implement a small feature that follows the existing code's structure and conventions.",
    "Refactor without changing behavior, keeping tests green after each step.",
    "Review a proposed change and give prioritized feedback.",
    "Manage limited time: scope first, keep the code working, and say what you would do next.",
    "Skip for now: large open-source contributions and multi-service codebases.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Gilded Rose Refactoring Kata (Python version)",
      url: "https://github.com/emilybache/GildedRose-Refactoring-Kata",
      provider: "Emily Bache (open-source repository)",
      type: "Repository",
      instructions: "Start here: starting code for drills 2–4, a small, deliberately messy legacy function with a written requirements file (GildedRoseRequirements.md at the repository root). Use the python folder only. Free; no account needed to clone.",
    },
    {
      title: "humanize",
      url: "https://github.com/python-humanize/humanize",
      provider: "python-humanize (open-source repository)",
      type: "Repository",
      instructions: "Starting code for drill 1 and a good candidate for drill 5: a small, well-tested pure-Python library.",
    },
    {
      title: "Good First Issue",
      url: "https://goodfirstissue.dev/",
      provider: "goodfirstissue.dev",
      type: "Interactive",
      instructions: "Optional. Lists beginner-labelled issues in open-source projects, for when you want a real issue instead of a drill. Read the project's contributing guide first.",
    },
  ],
  exercises: [
    {
      title: "Drill 1 — Trace an unfamiliar flow (humanize)",
      url: "https://github.com/python-humanize/humanize",
      note: "Starting code: the humanize repository. Requirement: explain how naturalsize produces its output for 3000 bytes in default, binary and gnu modes. Constraints: no code changes except one new test; 45 minutes (editorial). Acceptance: a written explanation naming the functions and branches involved, and a new passing test for a case not already covered. Verify: run the full test suite. Explain afterwards: the call path, where the suffixes come from and how you found them.",
    },
    {
      title: "Drill 2 — Add missing tests (Gilded Rose)",
      url: "https://github.com/emilybache/GildedRose-Refactoring-Kata",
      note: "Starting code: python/gilded_rose.py. The tests folder has one deliberately failing placeholder test (test_foo) and an approval test that compares a 30-day text output; install requirements.txt in a virtual environment and run python -m pytest. Requirement: replace the placeholder with characterization tests that pin down the current behavior of update_quality for normal items, Aged Brie, Sulfuras and backstage passes, including the quality limits and sell-by date changes in GildedRoseRequirements.md (repository root). Constraints: do not change gilded_rose.py. Acceptance: each rule in the requirements is covered by at least one named test; all tests pass. Verify: temporarily break one rule in the code and confirm a test fails, then undo it. Explain afterwards: which cases were hardest to find and why.",
    },
    {
      title: "Drill 3 — Implement a small feature (Gilded Rose: Conjured items)",
      url: "https://github.com/emilybache/GildedRose-Refactoring-Kata",
      note: "Starting code: your result from drill 2. Requirement: \"Conjured\" items degrade in quality twice as fast as normal items (from the requirements file). Constraints: do not change the Item class or the items property (a rule in the requirements); keep the change small; existing tests must still pass. Acceptance: new tests for Conjured items before and after the sell-by date and at quality 0 pass, with all earlier tests. Verify: full test suite and a review of your own diff. Explain afterwards: where you put the change and why, and what made it harder than it should be.",
    },
    {
      title: "Drill 4 — Refactor a problematic implementation (Gilded Rose)",
      url: "https://github.com/emilybache/GildedRose-Refactoring-Kata",
      note: "Starting code: your result from drill 3. Requirement: make update_quality easy to read and extend without changing behavior. Constraints: small steps, running the tests after each; no new features; do not add abstractions the rules do not need. Acceptance: all tests pass; adding a new item type would touch one obvious place. Verify: tests after every step, then compare the before-and-after diff. Explain afterwards: each refactoring step, and one abstraction you considered and rejected.",
    },
    {
      title: "Drill 5 — Diagnose and fix a reported bug (historical bug)",
      note: "Starting code: a small Python project you have not worked on (humanize is one option), at the commit just before a closed bug fix (find a closed issue labelled bug with a linked fix; check out the fix's parent commit in your own clone). Requirement: the behavior described in the issue. Constraints: do not read the real fix until you are done; 60 minutes (editorial). Acceptance: a failing test reproduces the issue, a minimal fix makes it pass, the full suite passes. Verify: compare your fix and test with the real ones. Explain afterwards: your hypotheses, the root cause and any differences from the real fix.",
    },
    {
      title: "Drill 6 — Review a proposed change (open pull request)",
      note: "Starting code: an open pull request of under about 200 lines in a small open-source project (or a teammate's or classmate's). Requirement: a review covering purpose, correctness, tests, security where relevant and readability. Constraints: label each comment as blocking, suggestion or nit; write reviews for yourself, and only post on a public project if you have something genuinely useful to add. Acceptance: at least one concrete, actionable comment per category you found an issue in. Verify: compare with the maintainers' review once it appears. Explain afterwards: why each blocking comment blocks.",
    },
    {
      title: "Repeat any drill in AI-assisted mode with a verification log",
      note: "Use a different repository or feature from your independent attempt. Keep the log described in AI-Assisted Engineering and Verification, and finish by explaining the change with the assistant closed.",
    },
  ],
  interviewQuestions: [
    {
      question: "Worked example: \"Orders of exactly $100 don't get free shipping, but the pricing page says $100 or more ships free.\" How do you diagnose and fix it?",
      answer:
        "The requirement is total >= 100 ships free. Search for the threshold constant to find free_shipping in shipping.py and its callers, then reproduce the report with a test for exactly 100 — it fails because the code uses > instead of >=. The comparison is the root cause, so the minimal fix belongs there. Add boundary tests (99.99, 100, 100.01), run the full suite, and explain in the pull request the cause, the fix, the tests and that no caller relied on the old behavior.",
      code: `FREE_SHIPPING_THRESHOLD = 100

def free_shipping(total):
    return total >= FREE_SHIPPING_THRESHOLD      # was: total > FREE_SHIPPING_THRESHOLD

def test_boundary():                              # reproduced the report; failed before the fix
    assert free_shipping(100) and free_shipping(100.01) and not free_shipping(99.99)

# pytest result  # -> 1 passed`,
      followUps: ["What if the totals were floats computed from many prices — what boundary problems could appear?"],
    },
    {
      question: "Worked example: add express shipping (a flat $15, never free) to the same module. How do you implement a small feature in existing code?",
      answer:
        "Read the existing code and tests first and follow their style. Clarify the requirement (does express ever ship free? no). Write tests for the new behavior, including that standard shipping is unchanged. Make the smallest change that fits the existing design — here an optional parameter with the old behavior as its default (shipping_cost(total, express=False)), so existing callers keep working. Run the whole suite and describe the change, its tests and any open questions in the pull request.",
      followUps: ["A third shipping type is requested next month. When would you change the design?"],
    },
    {
      question: "How do you add tests to untested code before changing it?",
      answer:
        "Write characterization tests: tests that record what the code currently does, not what you think it should do. Call it with representative and edge inputs, and assert the actual results. If a result looks wrong, still record it, mark it with a comment and raise it as a question — changing behavior is a separate decision. Once the behavior is pinned down, you can refactor or add features and know immediately if something changed.",
      code: `def legacy_discount(total, code):
    return total * 0.9 if code == "SAVE10" else total

def test_lowercase_code_is_ignored_today():       # surprising: record it and ask whether it is intended
    assert legacy_discount(50, "save10") == 50

# pytest result  # -> 1 passed`,
      followUps: ["You find the code returns a negative total for some inputs. What do you do?"],
      source: { title: "Wikipedia — Characterization test", url: "https://en.wikipedia.org/wiki/Characterization_test" },
    },
    {
      question: "How do you refactor safely?",
      answer:
        "Make sure tests cover the behavior first (add characterization tests if not). Then change the structure in small steps — rename, extract a function, remove duplication — running the tests after each step, and commit at green points so you can go back. Do not mix behavior changes into a refactor. Stop when the code is clear enough for the task; refactoring is a means to make the next change easy, not a goal in itself.",
      followUps: ["Why compare old and new versions on many inputs rather than one?"],
      source: { title: "Refactoring.Guru — How to refactor", url: "https://refactoring.guru/refactoring/how-to" },
    },
    {
      question: "How do you balance a quick fix against maintainability?",
      answer:
        "It depends on urgency and risk. For a production incident, ship the smallest safe fix (or roll back) to stop the harm, with a test if at all possible, and record the follow-up work explicitly. Without that urgency, fix the root cause properly. Either way, avoid fixes that hide the problem, keep the change reviewable, and tell the team about trade-offs instead of quietly accumulating debt. A good answer names the trade-off and the follow-up, not just the choice.",
      followUps: ["Your quick fix is merged and the follow-up ticket has been ignored for a month. What do you do?"],
      source: { title: "Martin Fowler — TechnicalDebt", url: "https://martinfowler.com/bliki/TechnicalDebt.html" },
    },
    {
      question: "In a timed practical round, how do you manage limited time in unfamiliar code?",
      answer:
        "Spend the first minutes on the task, running the code and tests and finding the relevant files, while talking through what you see. Get to a reproduction or a failing test early, then make small changes that keep the code working so you always have something to show. If you are stuck, say so, state your current hypothesis and move to the next part rather than going silent. Leave a few minutes to run the tests and summarize what you did, what you verified and what you would do next: interviewers can credit only the reasoning they see.",
      followUps: ["You have 10 minutes left and the fix is half done. What do you say?"],
    },
  ],
  mistakes: [
    "Starting to edit before running the project and its tests.",
    "Rewriting large parts of the codebase instead of making the change that was asked for.",
    "Changing behavior while refactoring.",
    "Skipping tests because the change looks obvious.",
    "Reading the real fix or solution before trying the drill.",
    "Practising only one mode (only with AI, or only without it).",
    "Treating the drill list as a checklist to complete rather than practice until the readiness criteria are met.",
  ],
  mastery: [
    "Editorial guide, not an employer threshold: in an unfamiliar small repository, you can fix a reported bug with a regression test and add a small tested feature, each in about 45–60 minutes, explaining as you go.",
    "You have done at least one drill independently and one AI-assisted, with a verification log, and can explain every change in both.",
    "You can write characterization tests and refactor without changing behavior.",
    "You can review a small change and prioritize your comments.",
    "Keep doing an occasional drill as maintenance; you do not need to finish them all before applying.",
    "Skip this topic if you already make tested fixes and features in codebases you did not write, with and without AI.",
  ],
  deprioritize: [
    "Large open-source contributions; they are valuable but not required for readiness.",
    "Full take-home assignments and project deep dives (covered with the project and interview guides).",
    "Very large or multi-service codebases until you can work comfortably in small ones.",
  ],
  keywords: [
    "drills",
    "existing codebase",
    "legacy code",
    "characterization tests",
    "refactoring",
    "bug fix",
    "small feature",
    "Gilded Rose",
    "practical interview",
    "practical round",
    "agentic round",
    "worked example",
    "quick fix",
    "technical debt",
  ],
};

export default topic;
