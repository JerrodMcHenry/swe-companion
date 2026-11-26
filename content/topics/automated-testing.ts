import type { Topic } from "../types";

const topic: Topic = {
  slug: "automated-testing",
  title: "Automated Testing",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Automated tests are code that checks other code, so you can change a program and know quickly whether you broke something. Teams expect new engineers to add tests with every change, and interview and take-home solutions are judged partly on how well they are tested.",
  whyItMatters:
    "Testing was named in 17 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, and teams expect new engineers to add tests with their changes from the start. Interviews check testing habits in several ways: Microsoft's official guidance says interviewers will likely expect you to test your solution, Amazon's official guidance evaluates whether code is well tested, and practical and take-home rounds are often judged partly on tests. Writing a failing test before fixing a bug is also one of the fastest ways to debug.",
  prerequisites: ["Functions and Arguments", "Python Debugging", "Classes and Objects", "Command Line and Development Environment (running commands)"],
  objectives: [
    "Unit, integration and end-to-end tests and their trade-offs (speed, confidence, brittleness); many unit tests, fewer higher-level ones.",
    "pytest tests with plain assert, structured as Arrange–Act–Assert, run from the command line; read a failure report.",
    "Choosing cases deliberately: normal, boundaries, empty and invalid input, error paths; pytest.raises for exceptions; pytest.approx for floats.",
    "Regression tests: write a test that fails before the bug fix and passes after it.",
    "Fixtures for shared setup (a fresh value per test by default) and test isolation (no order dependence, no shared mutable state).",
    "Test doubles: stub (canned answers), fake (simple working implementation), mock (records calls to verify interactions); inject or monkeypatch network, time and randomness.",
    "Coverage shows which lines ran, not whether results were checked; use it to find untested code, not as a target.",
    "Skip for now: property-based and mutation testing, browser automation, load testing and frameworks other than pytest (recognize unittest).",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "pytest — Get Started",
      url: "https://docs.pytest.org/en/stable/getting-started.html",
      provider: "pytest documentation",
      type: "Documentation",
      instructions:
        "Start here. Work through the whole page, typing each example: installing, your first test, running multiple tests, asserting that an exception is raised, grouping tests in a class, pytest.approx and temporary directories. About 30 minutes. Free; no account.",
    },
    {
      title: "pytest — How to use fixtures",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html",
      provider: "pytest documentation",
      type: "Documentation",
      instructions: "Read \"Requesting\" fixtures (with its subsections) and Autouse fixtures. Skip Scope and everything after it until you need it.",
    },
    {
      title: "pytest — How to monkeypatch/mock modules and environments",
      url: "https://docs.pytest.org/en/stable/how-to/monkeypatch.html",
      provider: "pytest documentation",
      type: "Documentation",
      instructions:
        "Read Monkeypatching functions, Monkeypatching returned objects, the \"requests\" global patch example and Monkeypatching environment variables. For Mock objects and assert_called_once_with, use the unittest.mock documentation as a reference.",
    },
    {
      title: "Test Double",
      url: "https://martinfowler.com/bliki/TestDouble.html",
      provider: "Martin Fowler",
      type: "Article",
      instructions: "Five-minute article defining dummies, fakes, stubs, spies and mocks — the vocabulary interviewers use. Read the whole page; skip the linked longer essay.",
    },
    {
      title: "The Missing Semester — Code Quality (2026)",
      url: "https://missing.csail.mit.edu/2026/code-quality/",
      provider: "MIT",
      type: "Video",
      instructions: "Optional video context for testing as everyday practice. Watch or read only the Testing and Code coverage sections; formatting, linting and CI are covered elsewhere.",
    },
  ],
  exercises: [
    {
      title: "CodeRefinery — Test design exercises Design-1 to Design-7",
      url: "https://coderefinery.github.io/testing/test-design/",
      note: "Free, no account, with suggested pytest solutions (choose the Python tab). Design-1 and Design-2 practise choosing cases; Design-3 a function that reads a file; Design-4 an external dependency; Design-5 a mutable class; Design-6 test-driven development; Design-7 code with randomness. Write your tests before opening each solution.",
    },
    {
      title: "Write a test for code that calls an external weather API, using a fake client instead of the network.",
      note: "Isolating a network dependency: pass the client in (or monkeypatch it), give the fake fixed responses including an error, and explain why you chose a fake over a mock.",
    },
    {
      title: "The Missing Semester — Code Quality exercises: unit tests and a coverage report",
      url: "https://missing.csail.mit.edu/2026/code-quality/#exercises",
      note: "The second exercise: write unit tests for a project of yours, run a coverage tool (for Python, coverage.py or pytest-cov), read the HTML report and add tests for untested lines. Judge whether each added test checks a result, not just that a line ran.",
    },
    {
      title: "Take a function from your Programming Fluency or DSA practice and write tests until you find a bug; write the regression test, then fix it.",
      note: "Regression testing on your own code: the test must fail before the fix and pass after it.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between unit, integration and end-to-end tests?",
      answer:
        "A unit test checks one small piece of code, such as a function or class, in isolation; it is fast and pinpoints failures. An integration test checks that several pieces work together, for example code with a real database. An end-to-end test exercises the whole system as a user would, through the user interface or public API; it gives the most confidence but is slow and more brittle. A healthy suite has many unit tests, fewer integration tests and a small number of end-to-end tests.",
      followUps: ["Why is a suite made mostly of end-to-end tests slow and fragile?"],
      source: { title: "Martin Fowler — The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html" },
    },
    {
      question: "How do you decide which test cases to write?",
      answer:
        "Cover the normal case, boundaries (zero, one, maximum, just inside and just outside limits), empty and missing input, invalid input that should raise an error, and any case that broke before. Think about what the code promises and what could go wrong rather than aiming for a number of tests. Each test checks one behavior and its name says which.",
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
      question: "What is a regression test, and why write a failing test before fixing a bug?",
      answer:
        "A regression test checks that a fixed bug stays fixed. Writing it before the fix proves that it reproduces the bug (it fails), then proves the fix works (it passes). It also documents the case and stops someone reintroducing the bug later.",
      followUps: ["How would you find which commit introduced a regression? (git bisect, awareness level)"],
      source: { title: "Martin Fowler — Self Testing Code", url: "https://martinfowler.com/bliki/SelfTestingCode.html" },
    },
    {
      question: "What are fakes, stubs and mocks?",
      answer:
        "They are test doubles that replace real dependencies. A stub returns fixed answers so the code under test can run. A fake is a simple working implementation, such as an in-memory store instead of a database. A mock records how it was called so the test can verify interactions, such as \"send was called once with this message\". Prefer fakes, stubs and checking results; overusing mocks ties tests to implementation details and makes refactoring painful.",
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
      question: "What are fixtures, and why does test isolation matter?",
      answer:
        "A fixture provides setup that tests need, such as a prepared object or temporary directory; in pytest a test requests it by naming it as a parameter, and by default each test gets a fresh one. Isolation means tests do not depend on each other or on shared state, so they can run in any order and a failure points to one cause. Shared mutable state between tests causes flaky, order-dependent failures.",
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
      question: "What does code coverage tell you, and what doesn't it?",
      answer:
        "Coverage measures which lines (or branches) ran during the tests. Low coverage reveals untested code. High coverage does not prove correctness: a test can execute a line without checking its result, and missing cases (such as an unexpected input) do not show up as uncovered lines. Use coverage to find gaps, not as a number to maximize.",
      code: `def classify(n):
    return "even" if n % 2 == 0 else "odd"

def test_classify_runs():
    classify(3)                            # 100% line coverage, but checks nothing

# pytest result  # -> 1 passed`,
      followUps: ["How would you test that a function behaves correctly with negative numbers?"],
      source: { title: "Martin Fowler — Test Coverage", url: "https://martinfowler.com/bliki/TestCoverage.html" },
    },
  ],
  mistakes: [
    "Testing only the happy path and skipping boundaries, empty input and error cases.",
    "Tests that depend on each other's order or on shared state.",
    "Tests that call real networks, clocks or randomness and therefore fail unpredictably.",
    "Asserting nothing meaningful, or checking implementation details instead of behavior.",
    "Mocking so heavily that tests pass even when the real code is broken.",
    "Treating a coverage percentage as proof of quality.",
    "Fixing a bug without adding a test that reproduces it.",
  ],
  mastery: [
    "You can write clear pytest tests for normal, boundary, empty, invalid and exception cases without looking up syntax.",
    "You write a failing regression test before fixing a bug.",
    "You can isolate a dependency with a fake, stub or mock, and explain which you chose and why.",
    "You can explain unit, integration and end-to-end tests and the limits of coverage.",
    "Skip this topic if you already write pytest tests with fixtures and test doubles for your own projects.",
  ],
  deprioritize: [
    "Advanced test architecture, property-based testing and mutation testing.",
    "Browser automation and frontend testing tools (covered in Full-Stack Engineering).",
    "Testing frameworks other than pytest, beyond recognizing unittest.",
    "Performance and load testing.",
  ],
  keywords: [
    "testing",
    "automated tests",
    "unit test",
    "integration test",
    "end-to-end test",
    "pytest",
    "assert",
    "arrange act assert",
    "fixture",
    "mock",
    "stub",
    "fake",
    "regression test",
    "edge cases",
    "coverage",
    "TDD",
  ],
};

export default topic;
