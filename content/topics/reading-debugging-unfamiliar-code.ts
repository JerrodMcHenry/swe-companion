import type { Topic } from "../types";

const topic: Topic = {
  slug: "reading-debugging-unfamiliar-code",
  title: "Reading and Debugging Unfamiliar Code",
  category: "Practical Engineering",
  phase: "practical-software-engineering",
  overview:
    "Most engineering work happens in code someone else wrote. This topic teaches a repeatable way to find your way around an unfamiliar repository — README, structure, entry points, dependencies, execution and data flow — and a repeatable debugging process for it: reproduce, gather evidence from stack traces, logs and breakpoints, form and test one hypothesis at a time, isolate the root cause, make a minimal fix, prove it with a regression test and check that nothing else broke. It builds on Python Debugging (tracebacks, print and the debugger on your own code) and Automated Testing (writing tests); it does not repeat them.",
  whyItMatters:
    "New engineers spend their first months reading, tracing and fixing existing code, and postings ask for it directly (for example, investigating bugs and finding the root cause). Debugging rounds in existing codebases were reported by candidates at several growth-stage companies (Stripe, Notion, Scale AI) and in Capital One's technical case, and Meta's official guidance advises being comfortable reading, debugging and building on existing code. Not every employer runs such a round; Big Tech interviews still centre on algorithmic coding. As a professional skill it matters everywhere.",
  prerequisites: ["Python Debugging", "Automated Testing", "Command Line and Development Environment", "Git and Pull Requests"],
  objectives: [
    "Orient yourself in an unfamiliar repository: README, setup instructions, folder structure, configuration and tests.",
    "Identify entry points (command-line scripts, web routes, main modules, scheduled jobs) and the modules that matter for a task.",
    "Trace execution and data flow from an input to an output by reading code, searching and stepping with a debugger.",
    "Understand what dependencies the code relies on and where external services, files and databases are touched.",
    "Reproduce a reported bug reliably, ideally as a failing automated test.",
    "Read stack traces that pass through several modules and libraries, and find the first frame in the project's own code.",
    "Use logs and breakpoints to collect evidence instead of guessing.",
    "Form one hypothesis at a time, predict what you will observe, test it, and narrow the search (including by halving the input or the code path, or with git bisect).",
    "Distinguish symptom from root cause, and make the smallest fix that addresses the cause.",
    "Write a regression test, run the full test suite and check other callers so existing behavior still works.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "The Missing Semester — Debugging and Profiling (2026)",
      url: "https://missing.csail.mit.edu/2026/debugging-profiling/",
      provider: "MIT",
      type: "Video",
      instructions:
        "Video and notes, primary. Watch the debugging half: print debugging and logging, debuggers and specialized tools. Skip profiling unless you are working on performance. Do the merge-sort debugging exercise at the end.",
    },
    {
      title: "Python Logging HOWTO — Basic Logging Tutorial",
      url: "https://docs.python.org/3/howto/logging.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Written. Read the Basic Logging Tutorial (when to use logging, levels, logging to a file, formatting messages). Skip the advanced tutorial until you need handlers and configuration files.",
    },
    {
      title: "pytest — How to handle test failures",
      url: "https://docs.pytest.org/en/stable/how-to/failures.html",
      provider: "pytest documentation",
      type: "Documentation",
      instructions: "Short reference: stop after the first failure, rerun only failed tests and open the debugger on failure (--pdb). Use while debugging failing tests.",
    },
    {
      title: "Pro Git — 7.10 Debugging with Git (blame and bisect)",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Debugging-with-Git",
      provider: "Scott Chacon and Ben Straub (free book)",
      type: "Book",
      instructions: "Optional. Read when you need to find which commit introduced a regression. Awareness is enough at entry level.",
    },
  ],
  exercises: [
    {
      title: "Trace naturalsize in the humanize library",
      url: "https://github.com/python-humanize/humanize",
      note: "Small, pure-Python repository. Clone it, set it up and run its tests. Then trace naturalsize in src/humanize/filesize.py for 3000, 3000 with binary=True and 3000 with gnu=True: which branches run, and why do the outputs differ? Write a three-sentence explanation and one new test.",
    },
    {
      title: "Missing Semester merge-sort debugging exercise",
      url: "https://missing.csail.mit.edu/2026/debugging-profiling/",
      note: "Implement the lecture's buggy merge sort and find the bug with a debugger rather than by rereading. Write the failing test first.",
    },
    {
      title: "Reproduce a closed bug report in a small open-source project",
      note: "Pick a small Python project, find a closed issue labelled bug with a linked fix, check out the commit before the fix (git checkout <commit>^ in your own clone), reproduce the bug as a failing test, and fix it yourself before reading the real fix. Then compare.",
    },
    {
      title: "Debugging log: for your next three bugs (in any code), write down the symptom, each hypothesis, the evidence for or against it, the root cause and how you verified the fix.",
      note: "Habit-building. The log is also good material for behavioral and project questions.",
    },
  ],
  interviewQuestions: [
    {
      question: "How would you approach an unfamiliar codebase?",
      answer:
        "Start with the goal: what do I need to change or understand? Read the README and setup docs, get the project running and run the tests to have a working baseline. Skim the folder structure and configuration to see the main parts and dependencies. Find the entry point for the behavior I care about — a route, command or main function — and trace from there, reading tests to learn the intended behavior. Search for names from error messages or the UI. I note what I learn and only go as deep as the task needs, rather than trying to read everything.",
      code: `$ cat README.md                      # purpose, setup, how to run and test
$ ls; ls src tests                    # main packages, where tests live
$ cat pyproject.toml                  # dependencies, entry points ([project.scripts])
$ python -m pytest -q                 # baseline: what passes before I change anything
$ grep -rn "def naturalsize" src      # find where a behavior is defined
$ grep -rn "naturalsize(" src tests   # ...and who calls it`,
      followUps: ["The project has no README and no tests. Where do you start?", "How do you decide what not to read?"],
    },
    {
      question: "How do you trace execution and data flow through code you didn't write?",
      answer:
        "Pick one concrete input and follow it to the output. Read from the entry point, noting each function call and how the data changes shape. Where reading gets hard, step through with a debugger or add temporary log lines at boundaries to see the actual values. Tests are useful maps: a test that calls the function shows the inputs and expected outputs. Writing a short summary of the flow (or a sketch) makes it easier to explain and to spot where a bug could enter.",
      code: `import logging, sys

logging.basicConfig(stream=sys.stdout, level=logging.DEBUG, format="%(funcName)s: %(message)s", force=True)
log = logging.getLogger(__name__)

def parse(line):
    log.debug("raw=%r", line)
    name, amount = line.split(",")
    return name.strip(), float(amount)

def total(lines):
    records = [parse(line) for line in lines]
    log.debug("records=%r", records)
    return sum(amount for _, amount in records)

print(total(["ana, 10", "ben, 2.5"]))
# -> parse: raw='ana, 10'
# -> parse: raw='ben, 2.5'
# -> total: records=[('ana', 10.0), ('ben', 2.5)]
# -> 12.5`,
      followUps: ["When is a debugger better than logging, and the other way round?"],
    },
    {
      question: "How would you investigate a production bug?",
      answer:
        "First understand the impact and whether to mitigate immediately (roll back a recent deploy, disable a feature) before finding the cause. Then gather evidence: the exact error and stack trace, logs around the time, which users or inputs are affected, and what changed recently (deploys, configuration, data, a dependency or an external API). Reproduce it locally or in a test with the same input. Form a hypothesis, check it against the evidence, fix the root cause with a regression test, and confirm in production that the errors stop. Afterwards, consider what would have caught it earlier. A common cause is an integration change — here an external service started sending amounts as strings.",
      code: `def order_total(items):
    return sum(item["amount"] for item in items)

from_old_api = [{"amount": 12.5}, {"amount": 7.5}]
from_new_api = [{"amount": "12.50"}, {"amount": "7.50"}]   # the provider changed its format

print(order_total(from_old_api))                            # -> 20.0
try:
    order_total(from_new_api)
except TypeError as error:
    print(type(error).__name__, "-", error)                 # -> TypeError - unsupported operand type(s) for +: 'int' and 'str'`,
      followUps: ["Would you convert the strings in order_total or where the API response is parsed? Why?", "How do you debug a problem you cannot reproduce locally?"],
    },
    {
      question: "How do you determine the root cause of a failing test?",
      answer:
        "Read the failure message and the assertion first: what was expected, what happened. Run the failing test alone; if it passes alone but fails in the full suite, suspect shared state between tests or test order. Check whether the test or the code is wrong by comparing against the requirement. Then narrow down with logs or a debugger until you find where the actual value first diverges from the expected one — that is the root cause, not the line where the assertion fails. In this example the second test fails only because the first one ran: the default list is created once and shared between calls (incorrect state). The fix is tags=None with a new list inside the function.",
      code: `def add_tag(tag, tags=[]):        # bug: one default list shared by every call
    tags.append(tag)
    return tags

def test_first_tag():
    assert add_tag("urgent") == ["urgent"]

def test_tags_start_empty():
    assert add_tag("later") == ["later"]   # fails: ['urgent', 'later'] — state leaked from the previous test

# fails: test_tags_start_empty -- assert ['urgent', 'later'] == ['later']
# pytest result  # -> 1 failed, 1 passed`,
      followUps: ["A test fails only on the CI server. What could differ from your machine?", "How would you find which commit made the test start failing?"],
    },
    {
      question: "A bug only happens for some inputs or users. How do you isolate it?",
      answer:
        "Compare failing and working cases and look for what differs: format, size, locale, account type, time zone or missing fields. Shrink the failing input until the smallest case that still fails remains, then test one hypothesis at a time with a prediction (\"if thousands separators cause it, '1,200' fails and '1200' works\"). Unexpected input is a frequent cause: real data contains spaces, commas, empty strings and None.",
      code: `def parse_price(text):
    return float(text)

for value in ["12.50", " 12.50 ", "1200", "1,200", ""]:
    try:
        print(repr(value), parse_price(value))
    except ValueError:
        print(repr(value), "ValueError")
# -> '12.50' 12.5
# -> ' 12.50 ' 12.5
# -> '1200' 1200.0
# -> '1,200' ValueError
# -> '' ValueError`,
      followUps: ["Should the fix accept '1,200', reject it with a clear error, or handle it earlier? Who decides?"],
    },
    {
      question: "How do you verify that a bug fix does not introduce regressions?",
      answer:
        "Write a test that reproduces the bug and fails before the fix, then passes after it. Keep the fix minimal and focused on the root cause so the change is easy to review. Run the whole test suite, not just the new test. Search for other callers of the changed code and check whether they relied on the old behavior. Test the edge cases next to the bug (here: just below, at and above the boundary). In review, explain the cause and the fix; after release, watch the logs or metrics that showed the bug.",
      code: `$ python -m pytest tests/test_shipping.py -k boundary   # new regression test: fails before, passes after
$ python -m pytest -q                                     # the full suite still passes
$ grep -rn "free_shipping(" src                           # other callers that may depend on the old behavior
$ git diff --stat                                         # the change is small and focused`,
      followUps: ["The full suite takes an hour. What do you run before opening the pull request?"],
    },
    {
      question: "What is a minimal, targeted fix, and when is it not enough?",
      answer:
        "A minimal fix changes only what is needed to correct the root cause, with a test, so it is easy to review, low-risk and easy to revert. It is not enough when the same mistake exists in several places, when the design makes the bug likely to recur, or when the fix only hides the symptom (for example catching and ignoring an exception). Then fix the cause now and propose the larger cleanup as a separate, planned change rather than mixing it into the bug fix.",
      code: `def average(values):
    if not values:                       # targeted fix: the reported crash on an empty list
        return 0.0
    return sum(values) / len(values)

print(average([]), average([2, 4]))      # -> 0.0 3.0`,
      followUps: ["Is returning 0.0 the right behavior for an empty list, or should it raise? How would you decide?"],
    },
  ],
  mistakes: [
    "Changing code at random until the symptom disappears, without a hypothesis.",
    "Trying to read the whole codebase before starting the task.",
    "Fixing the line where the error appears instead of where the wrong value was produced.",
    "Not reproducing the bug first, so you cannot tell whether the fix worked.",
    "Making a large refactor inside a bug fix.",
    "Hiding errors with a broad try/except instead of fixing the cause.",
    "Running only the new test, not the full suite.",
    "Leaving debugging print statements or breakpoints in the final change.",
  ],
  mastery: [
    "In an unfamiliar small repository, you can get it running, find the code for a given behavior and explain its main flow within an hour (editorial guide).",
    "You can reproduce a reported bug as a failing test, isolate the root cause with evidence and explain each hypothesis you tested.",
    "Your fixes are minimal, come with a regression test and leave the full suite passing.",
    "You can debug a failure that crosses module or service boundaries using stack traces and logs.",
  ],
  deprioritize: [
    "Profiling and performance debugging, beyond recognizing when a problem is about speed or memory.",
    "Production observability tooling (tracing systems, dashboards, alerting); learn your team's tools on the job.",
    "Debugging concurrency bugs, memory corruption and compiled extensions.",
  ],
  keywords: [
    "debugging",
    "unfamiliar codebase",
    "existing code",
    "legacy code",
    "code reading",
    "tracing",
    "execution flow",
    "data flow",
    "entry point",
    "stack trace",
    "logging",
    "breakpoint",
    "root cause",
    "reproduce",
    "regression",
    "production bug",
    "git bisect",
    "hypothesis",
  ],
};

export default topic;
