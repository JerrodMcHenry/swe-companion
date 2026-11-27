import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Testing",
    question: "What is the difference between unit, integration and end-to-end tests?",
    answer: "A unit test checks one small piece of code, such as a function or class, in isolation; it is fast and pinpoints failures. An integration test checks that several pieces work together, for example code with a real database. An end-to-end test exercises the whole system as a user would, through the user interface or public API; it gives the most confidence but is slow and more brittle. A healthy suite has many unit tests, fewer integration tests and a small number of end-to-end tests.",
    followUps: ["Why is a suite made mostly of end-to-end tests slow and fragile?"],
    source: { title: "Martin Fowler — The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html" },
  },
  {
    group: "Testing",
    question: "How do you decide which test cases to write?",
    answer: "Cover the normal case, boundaries (zero, one, maximum, just inside and just outside limits), empty and missing input, invalid input that should raise an error, and any case that broke before. Think about what the code promises and what could go wrong rather than aiming for a number of tests. Each test checks one behavior and its name says which.",
    code: `import pytest

def average(values):
    if not values:
        raise ValueError("no values")
    return sum(values) / len(values)

def test_average_of_one():
    assert average([5]) == 5

def test_average_of_empty_raises():
    with pytest.raises(ValueError, match="no values"):
        average([])

# pytest result  # -> 2 passed`,
    followUps: ["How do you test a function that returns floating-point results? (pytest.approx)"],
    source: { title: "pytest — Get Started: Assert that a certain exception is raised", url: "https://docs.pytest.org/en/stable/getting-started.html" },
  },
  {
    group: "Testing",
    question: "What is a regression test, and why write a failing test before fixing a bug?",
    answer: "A regression test checks that a fixed bug stays fixed. Writing it before the fix proves that it reproduces the bug (it fails), then proves the fix works (it passes). It also documents the case and stops someone reintroducing the bug later.",
    followUps: ["How would you find which commit introduced a regression? (git bisect, awareness level)"],
    source: { title: "Martin Fowler — Self Testing Code", url: "https://martinfowler.com/bliki/SelfTestingCode.html" },
  },
  {
    group: "Testing",
    question: "What are fakes, stubs and mocks?",
    answer: "They are test doubles that replace real dependencies. A stub returns fixed answers so the code under test can run. A fake is a simple working implementation, such as an in-memory store instead of a database. A mock (or spy) records how it was called so the test can verify interactions, such as \"send was called once with this message\". Prefer fakes, stubs and checking results; overusing mocks ties tests to implementation details and makes refactoring painful.",
    code: `from unittest.mock import Mock

class InMemoryRepo:                       # fake
    def __init__(self):
        self.users = {}

    def save(self, user_id, name):
        self.users[user_id] = name

def register(repo, notifier, user_id, name):
    repo.save(user_id, name)
    notifier.send(f"welcome {name}")

def test_register_saves_and_notifies():
    repo, notifier = InMemoryRepo(), Mock()   # notifier is a mock
    register(repo, notifier, 1, "Ana")
    assert repo.users == {1: "Ana"}
    notifier.send.assert_called_once_with("welcome Ana")

# pytest result  # -> 1 passed`,
    followUps: ["What problems appear when a test suite mocks everything?"],
    source: { title: "Martin Fowler — Test Double", url: "https://martinfowler.com/bliki/TestDouble.html" },
  },
  {
    group: "Testing",
    question: "What are fixtures, and why does test isolation matter?",
    answer: "A fixture provides setup that tests need, such as a prepared object or temporary directory; in pytest a test requests it by naming it as a parameter, and by default each test gets a fresh one. Isolation means tests do not depend on each other or on shared state, so they can run in any order and a failure points to one cause. Shared mutable state between tests causes flaky, order-dependent failures.",
    code: `import pytest

@pytest.fixture
def cart():
    return []                         # a new list for every test

def test_add_one(cart):
    cart.append("book")
    assert cart == ["book"]

def test_starts_empty(cart):
    assert cart == []                 # not affected by the previous test

# pytest result  # -> 2 passed`,
    followUps: ["What is a flaky test, and how would you track down its cause?"],
    source: { title: "pytest — How to use fixtures", url: "https://docs.pytest.org/en/stable/how-to/fixtures.html" },
  },
  {
    group: "Testing",
    question: "What does code coverage tell you, and what doesn't it?",
    answer: "Coverage measures which lines (or branches) ran during the tests. Low coverage reveals untested code. High coverage does not prove correctness: a test can execute a line without checking its result, and missing cases (such as an unexpected input) do not show up as uncovered lines. Use coverage to find gaps, not as a number to maximize.",
    code: `def classify(n):
    return "even" if n % 2 == 0 else "odd"

def test_classify_runs():
    classify(3)                            # 100% line coverage, but checks nothing

# pytest result  # -> 1 passed`,
    followUps: ["How would you test that a function behaves correctly with negative numbers?"],
    source: { title: "Martin Fowler — Test Coverage", url: "https://martinfowler.com/bliki/TestCoverage.html" },
  },
  {
    group: "Debugging",
    question: "How do you read a Python traceback?",
    answer: "From the bottom up. The last line gives the exception type and message. Above it is the call chain, most recent call last, so the frame just above the message is where the error was raised. I find the lowest frame in my own code and ask which value on that line could cause the error; that is often not where the bad value was created. Python 3.11 and later also mark the failing expression.",
    code: `Traceback (most recent call last):
  File "report.py", line 8, in <module>
    report({"ana": [90, 80], "ben": []})
  File "report.py", line 6, in report
    print(name, average(scores))
  File "report.py", line 2, in average
    return sum(scores) / len(scores)
ZeroDivisionError: division by zero`,
    followUps: ["The error is in average(), but where should the fix go?"],
    source: { title: "The Python Tutorial — 8.2 Exceptions", url: "https://docs.python.org/3/tutorial/errors.html#exceptions" },
  },
  {
    group: "Debugging",
    question: "Walk me through how you would debug a function that returns the wrong result.",
    answer: "Reproduce it with the smallest failing input and state the correct output. Form one hypothesis about where the values go wrong and check it by inspecting state, with a print or a breakpoint. Change one thing at a time. After fixing the cause, rerun the failing case and keep it as a test so the bug cannot return. In an interview, say each step aloud.",
    code: `def count_words(text):
    count = 0
    for i in range(len(text) - 1):
        if text[i] == " ":
            count += 1
    return count + 1

print(count_words("one two"))    # -> 2
print(count_words(""))           # -> 1
print(count_words("one  two"))   # -> 3`,
    followUps: ["Which tests above reveal bugs, and how would you rewrite the function?"],
  },
  {
    group: "Debugging",
    question: "When would you use print statements and when a debugger?",
    answer: "Prints are quick and work anywhere, so they suit checking a hypothesis about one or two values. A debugger is better when I do not yet know where to look: I can pause at a breakpoint, inspect every variable, step into calls and evaluate expressions without editing the code. breakpoint() starts pdb; editors such as VS Code do the same visually. Temporary prints come out, or become logging, before committing.",
    code: `def running_total(values):
    total = 0
    for v in values:
        breakpoint()   # pauses here: try p total, p v, n, c
        total += v
    return total`,
    followUps: ["What do the pdb commands n, s and c do?"],
    source: { title: "Python Docs — pdb: Debugger Commands", url: "https://docs.python.org/3/library/pdb.html#debugger-commands" },
  },
  {
    group: "Debugging",
    question: "How would you approach an unfamiliar codebase?",
    answer: "Start from the task, not the whole codebase. Read the README, get the project running and run the tests for a baseline, then skim the folder structure and configuration to see the main parts and dependencies. Find the entry point for the behavior you care about — a route, command or main function — by searching for names from error messages or the UI, trace from there, and read its tests to learn the intended behavior. Note what you learn and go only as deep as the task needs.",
    code: `$ cat README.md                      # purpose, setup, how to run and test
$ ls; ls src tests                    # main packages, where tests live
$ cat pyproject.toml                  # dependencies, entry points ([project.scripts])
$ python -m pytest -q                 # baseline: what passes before I change anything
$ grep -rn "def naturalsize" src      # find where a behavior is defined
$ grep -rn "naturalsize(" src tests   # ...and who calls it`,
    followUps: ["The project has no README and no tests. Where do you start?","How do you decide what not to read?"],
  },
  {
    group: "Debugging",
    question: "How do you trace execution and data flow through code you didn't write?",
    answer: "Pick one concrete input and follow it to the output. Read from the entry point, noting each function call and how the data changes shape. Where reading gets hard, step through with a debugger or add temporary log lines at boundaries to see the actual values. Tests are useful maps: a test that calls the function shows the inputs and expected outputs. Writing a short summary of the flow (or a sketch) makes it easier to explain and to spot where a bug could enter.",
    followUps: ["When is a debugger better than logging, and the other way round?"],
    source: { title: "Python Logging HOWTO — When to use logging", url: "https://docs.python.org/3/howto/logging.html" },
  },
  {
    group: "Debugging",
    question: "How would you investigate a production bug?",
    answer: "Impact first: if users are affected, mitigate (roll back a recent deploy, disable a feature) before hunting for the cause. Then gather evidence: the exact error and stack trace, logs around the time, which users or inputs are affected, and what changed recently (deploys, configuration, data, a dependency or an external API). Reproduce it with the same input, test one hypothesis at a time, fix the root cause with a regression test, and confirm in production that the errors stop. Here the cause is an integration change: an external service started sending amounts as strings.",
    code: `def order_total(items):
    return sum(item["amount"] for item in items)

from_old_api = [{"amount": 12.5}, {"amount": 7.5}]
from_new_api = [{"amount": "12.50"}, {"amount": "7.50"}]   # the provider changed its format

print(order_total(from_old_api))                            # -> 20.0
try:
    order_total(from_new_api)
except TypeError as error:
    print(type(error).__name__, "-", error)                 # -> TypeError - unsupported operand type(s) for +: 'int' and 'str'`,
    followUps: ["Would you convert the strings in order_total or where the API response is parsed? Why?","How do you debug a problem you cannot reproduce locally?"],
    source: { title: "Site Reliability Engineering — Effective Troubleshooting (Triage; What touched it last)", url: "https://sre.google/sre-book/effective-troubleshooting/" },
  },
  {
    group: "Debugging",
    question: "How do you determine the root cause of a failing test?",
    answer: "Read the assertion first: expected versus actual. Run the test alone; if it passes alone but fails in the full suite, suspect shared state or test order. Check the requirement to decide whether the test or the code is wrong. Then use logs or a debugger to find where the value first diverges from what was expected — that is the root cause, not the line where the assertion fails. Here the second test fails only because the first one ran: the default list is created once and shared between calls; the fix is tags=None with a new list inside the function.",
    code: `def add_tag(tag, tags=[]):        # bug: one default list shared by every call
    tags.append(tag)
    return tags

def test_first_tag():
    assert add_tag("urgent") == ["urgent"]

def test_tags_start_empty():
    assert add_tag("later") == ["later"]   # fails: ['urgent', 'later'] — state leaked from the previous test

# fails: test_tags_start_empty -- assert ['urgent', 'later'] == ['later']
# pytest result  # -> 1 failed, 1 passed`,
    followUps: ["A test fails only on the CI server. What could differ from your machine?","How would you find which commit made the test start failing?"],
    source: { title: "Python FAQ — Why are default values shared between objects?", url: "https://docs.python.org/3/faq/programming.html#why-are-default-values-shared-between-objects" },
  },
  {
    group: "Debugging",
    question: "A bug only happens for some inputs or users. How do you isolate it?",
    answer: "Compare failing and working cases and look for what differs: format, size, locale, account type, time zone or missing fields. Shrink the failing input until the smallest case that still fails remains, then test one hypothesis at a time with a prediction (\"if thousands separators cause it, '1,200' fails and '1200' works\"). Unexpected input is a frequent cause: real data contains spaces, commas, empty strings and None.",
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
    source: { title: "Site Reliability Engineering — Effective Troubleshooting (Simplify and reduce)", url: "https://sre.google/sre-book/effective-troubleshooting/" },
  },
  {
    group: "Debugging",
    question: "How do you verify that a bug fix does not introduce regressions?",
    answer: "Reproduce the bug as a test that fails before the fix and passes after it, and test the neighbouring edge cases (here just below, at and above the boundary). Keep the fix small and focused on the root cause so it is easy to review. Run the whole suite, not only the new test, and check other callers of the changed code in case they relied on the old behavior. After release, watch the logs or metrics that showed the bug.",
    code: `$ python -m pytest tests/test_shipping.py -k boundary   # new regression test: fails before, passes after
$ python -m pytest -q                                     # the full suite still passes
$ grep -rn "free_shipping(" src                           # other callers that may depend on the old behavior
$ git diff --stat                                         # the change is small and focused`,
    followUps: ["The full suite takes an hour. What do you run before opening the pull request?"],
  },
  {
    group: "Debugging",
    question: "What is a minimal, targeted fix, and when is it not enough?",
    answer: "A minimal fix changes only what is needed to correct the root cause, with a test, so it is easy to review, low-risk and easy to revert. It is not enough when the same mistake exists in several places, when the design makes the bug likely to recur, or when the fix only hides the symptom (for example catching and ignoring an exception). Then fix the cause now and propose the larger cleanup as a separate, planned change rather than mixing it into the bug fix.",
    followUps: ["The reported crash is average([]) raising ZeroDivisionError. Should the fix return 0.0 or raise a clearer error? How would you decide?"],
    source: { title: "Google Engineering Practices — Small CLs (Separate out refactorings)", url: "https://google.github.io/eng-practices/review/developer/small-cls.html" },
  },
  {
    group: "Debugging",
    question: "How do you add tests to untested code before changing it?",
    answer: "Write characterization tests: tests that record what the code currently does, not what you think it should do. Call it with representative and edge inputs, and assert the actual results. If a result looks wrong, still record it, mark it with a comment and raise it as a question — changing behavior is a separate decision. Once the behavior is pinned down, you can refactor or add features and know immediately if something changed.",
    code: `def legacy_discount(total, code):
    return total * 0.9 if code == "SAVE10" else total

def test_lowercase_code_is_ignored_today():       # surprising: record it and ask whether it is intended
    assert legacy_discount(50, "save10") == 50

# pytest result  # -> 1 passed`,
    followUps: ["You find the code returns a negative total for some inputs. What do you do?"],
    source: { title: "Wikipedia — Characterization test", url: "https://en.wikipedia.org/wiki/Characterization_test" },
  },
  {
    group: "Debugging",
    question: "How do you refactor safely?",
    answer: "Make sure tests cover the behavior first (add characterization tests if not). Then change the structure in small steps — rename, extract a function, remove duplication — running the tests after each step, and commit at green points so you can go back. Do not mix behavior changes into a refactor. Stop when the code is clear enough for the task; refactoring is a means to make the next change easy, not a goal in itself.",
    followUps: ["Why compare old and new versions on many inputs rather than one?"],
    source: { title: "Refactoring.Guru — How to refactor", url: "https://refactoring.guru/refactoring/how-to" },
  },
  {
    group: "Debugging",
    question: "In a timed practical round, how do you manage limited time in unfamiliar code?",
    answer: "Spend the first minutes on the task, running the code and tests and finding the relevant files, while talking through what you see. Get to a reproduction or a failing test early, then make small changes that keep the code working so you always have something to show. If you are stuck, say so, state your current hypothesis and move to the next part rather than going silent. Leave a few minutes to run the tests and summarize what you did, what you verified and what you would do next: interviewers can credit only the reasoning they see.",
    followUps: ["You have 10 minutes left and the fix is half done. What do you say?"],
  },
  {
    group: "Code review",
    question: "What do you look for during code review?",
    answer: "First, the purpose: does the change do what its description and issue say, and is it the right approach? Then correctness: logic, boundaries, empty and invalid input, error handling and state. Then tests: do they cover the new behavior and edge cases, and would they fail if the code were wrong? Then security and performance where relevant: injection, secrets or personal data in logs, missing permission checks, unnecessary repeated work. Finally readability and maintainability: names, structure, unnecessary complexity, comments. I prioritize correctness and maintainability over my personal style, label comments by importance and explain why.",
    followUps: ["How much time would you spend reviewing a 1,000-line pull request, and what would you suggest to its author?"],
    source: { title: "Google Engineering Practices — What to look for in a code review", url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html" },
  },
  {
    group: "Code review",
    question: "Review this change. The description says: \"Add pagination; pages are numbered from 1.\"",
    answer: "Blocking: off by one for 1-based pages. Page 1 starts at index 10, so the first ten items are never shown; start should be (page - 1) * page_size. Blocking: no tests. I would ask for page 1, a last partial page (25 items, page 3 → 5 items), a page past the end (empty list), and page 0 or a negative page, which should raise a clear error rather than silently return items. Non-blocking: consider validating page_size too.",
    code: `diff --git a/shop/pagination.py b/shop/pagination.py
new file mode 100644
--- /dev/null
+++ b/shop/pagination.py
@@ -0,0 +1,5 @@
+def paginate(items, page, page_size=10):
+    """Return the items on a page, numbered from 1."""
+    start = page * page_size
+    end = start + page_size
+    return items[start:end]`,
    followUps: ["The author replies that the frontend always sends page 0 for the first page. What do you do?"],
    source: { title: "Google Engineering Practices — What to look for in a code review (Functionality; Tests)", url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html#tests" },
  },
  {
    group: "Code review",
    question: "Review this change. The description says: \"Add a 10% discount for members.\"",
    answer: "The code works, but an abstract base class, a registry and a factory for one discount rule make a two-line feature harder to read, test and change. That is a maintainability concern, not a defect: I would suggest a plain function (def member_price(price): return round(price * 0.9, 2)) and adding structure when a second discount type actually arrives. Whether it blocks depends on team norms; I would explain my reasoning and listen if the author knows of upcoming discount types. I would also ask for tests, including rounding.",
    code: `diff --git a/shop/discounts.py b/shop/discounts.py
new file mode 100644
--- /dev/null
+++ b/shop/discounts.py
@@ -0,0 +1,17 @@
+from abc import ABC, abstractmethod
+
+class DiscountStrategy(ABC):
+    @abstractmethod
+    def apply(self, price): ...
+
+class MemberDiscount(DiscountStrategy):
+    def apply(self, price):
+        return round(price * 0.9, 2)
+
+_REGISTRY = {"member": MemberDiscount}
+
+def discount_factory(kind):
+    return _REGISTRY[kind]()
+
+def member_price(price):
+    return discount_factory("member").apply(price)`,
    followUps: ["When would a strategy or registry be justified here?"],
    source: { title: "Google Engineering Practices — What to look for: Complexity (over-engineering)", url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html#complexity" },
  },
  {
    group: "Code review",
    question: "Review this change. The description says: \"Add order lookup by email for the support tool.\"",
    answer: "Blocking: SQL injection — the query is an f-string built from customer_email; use a parameterized query. Blocking: the log line writes the API token and the customer's email; remove the token and avoid logging personal data. A question that may be blocking: is the caller authorized to look up any customer's orders? Non-blocking: the duplicate check is O(n²) (a list search per row); SELECT DISTINCT or a set is simpler, though it only matters for large results. I would also ask for tests, including an email containing a quote.",
    code: `diff --git a/support/orders.py b/support/orders.py
--- a/support/orders.py
+++ b/support/orders.py
@@ -10,2 +10,11 @@ log = logging.getLogger(__name__)
 API_TOKEN = os.environ["SUPPORT_API_TOKEN"]

+def find_orders(db, customer_email):
+    log.info(f"order lookup for {customer_email} token={API_TOKEN}")
+    query = f"SELECT id, total FROM orders WHERE email = '{customer_email}'"
+    results = []
+    for row in db.execute(query).fetchall():
+        if row not in results:
+            results.append(row)
+    return results`,
    followUps: ["Which of your comments would you raise even if the author were a senior engineer in a hurry?"],
    source: { title: "OWASP SQL Injection Prevention Cheat Sheet (parameterized queries)", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
  },
  {
    group: "Code review",
    question: "How do you separate blocking issues from optional suggestions, and write feedback that helps?",
    answer: "Blocking means it would cause harm if merged: incorrect behavior, missing tests for new logic, security problems, data loss or code the team could not maintain. Everything else is a suggestion, labelled (\"nit:\", \"optional:\") so the author can prioritize; pure personal preferences, such as an f-string versus str.format, I leave out. Helpful comments are specific, explain why and suggest a direction — \"page 1 starts at index 10 here, so the first ten items are skipped; should start be (page - 1) * page_size?\" rather than \"this is wrong\". I comment on the code, not the person, ask when unsure, say what is good, and move a long back-and-forth to a direct conversation.",
    followUps: ["You and the author disagree about a design choice and both have reasonable arguments. What happens next?","How do you decide whether a naming comment is a nit or worth blocking for?"],
    source: { title: "Google Engineering Practices — How to write code review comments (Label comment severity)", url: "https://google.github.io/eng-practices/review/reviewer/comments.html" },
  },
  {
    group: "Code review",
    question: "How do you respond when a reviewer questions a decision in your pull request?",
    answer: "Assume good intent and take the comment seriously. If the reviewer is right, fix it and thank them. If I made the choice deliberately, explain the reasoning with evidence — requirements, a test, a measurement or a trade-off — and ask whether it addresses their concern. If it is a matter of preference, follow the team's conventions. If the explanation was needed by the reviewer, a future reader probably needs it too, so I add a comment or improve the code. I don't take review personally or argue to win.",
    followUps: ["Tell me about a time feedback on your code changed your approach. (Behavioral; see Behavioral Interviews.)"],
    source: { title: "Google Engineering Practices — How to handle reviewer comments", url: "https://google.github.io/eng-practices/review/developer/handling-comments.html" },
  },
];

export default questions;
