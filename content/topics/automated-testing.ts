import type { Topic } from "../types";

const topic: Topic = {
  slug: "automated-testing",
  title: "Automated Testing",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Automated tests are code that checks other code, so you can change a program and know quickly whether you broke something. This topic covers the main kinds of tests, how to write clear unit tests with pytest, testing edge cases and exceptions, isolating code from slow or unpredictable dependencies with fakes, stubs and mocks, and what coverage does and does not tell you.",
  whyItMatters:
    "Testing was named in 17 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, and teams expect new engineers to add tests with their changes from the start. Interviews check testing habits in several ways: Microsoft's official guidance says interviewers will likely expect you to test your solution, Amazon's official guidance evaluates whether code is well tested, and practical and take-home rounds are often judged partly on tests. Writing a failing test before fixing a bug is also one of the fastest ways to debug.",
  prerequisites: ["Functions and Arguments", "Python Debugging", "Classes and Objects", "Command Line and Development Environment (running commands)"],
  objectives: [
    "Distinguish unit, integration and end-to-end tests, and explain the trade-offs of each.",
    "Write pytest tests with plain assert statements, following Arrange–Act–Assert.",
    "Choose test cases deliberately: normal cases, boundaries, empty and invalid input, and error paths.",
    "Test that code raises the right exception with pytest.raises.",
    "Write a regression test that fails before a bug fix and passes after it.",
    "Use fixtures to share setup, and keep tests isolated from each other.",
    "Replace slow or unpredictable dependencies (network, time, randomness) with fakes, stubs or mocks, and explain the difference.",
    "Run tests from the command line and read failures.",
    "Explain what code coverage measures and why 100% coverage does not mean bug-free code.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "pytest — Get Started",
      url: "https://docs.pytest.org/en/stable/getting-started.html",
      provider: "pytest documentation",
      type: "Documentation",
      instructions: "Written, primary. Work through the whole page: installing, writing tests, assertions, pytest.raises and grouping tests. About 30 minutes.",
    },
    {
      title: "pytest — How to use fixtures",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html",
      provider: "pytest documentation",
      type: "Documentation",
      instructions: "Read the first sections (requesting fixtures, fixtures requesting fixtures, autouse basics). Skip scope and parametrization of fixtures until you need them.",
    },
    {
      title: "pytest — How to monkeypatch/mock modules and environments",
      url: "https://docs.pytest.org/en/stable/how-to/monkeypatch.html",
      provider: "pytest documentation",
      type: "Documentation",
      instructions: "Reference for replacing functions, environment variables and attributes in tests. For general mock objects, see Python's unittest.mock documentation.",
    },
    {
      title: "The Missing Semester — Code Quality (2026)",
      url: "https://missing.csail.mit.edu/2026/code-quality/",
      provider: "MIT",
      type: "Video",
      instructions: "Optional video on testing, formatting and linting as everyday engineering practice. Watch the testing part.",
    },
  ],
  exercises: [
    {
      title: "Write pytest tests for a password validator (minimum length, at least one digit, no spaces) covering normal, boundary and invalid cases, including one pytest.raises test.",
      note: "Foundation. Write the tests first, then the function.",
    },
    {
      title: "Take a function from your Programming Fluency or DSA practice and write tests until you find a bug; write the regression test, then fix it.",
      note: "Practical: identify a defect and verify the fix.",
    },
    {
      title: "Test a function that depends on the current date (for example \"is this subscription expired?\") by injecting the date or monkeypatching it.",
      note: "Reinforcement: isolating unpredictable dependencies.",
    },
    {
      title: "Write a test for code that calls an external weather API, using a fake client instead of the network.",
      note: "Reinforcement: fakes versus mocks.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between unit, integration and end-to-end tests?",
      answer:
        "A unit test checks one small piece of code, such as a function or class, in isolation; it is fast and pinpoints failures. An integration test checks that several pieces work together, for example code with a real database. An end-to-end test exercises the whole system the way a user would, such as through the user interface or public API; it gives the most confidence but is slow and more brittle. A healthy suite has many unit tests, fewer integration tests and a small number of end-to-end tests.",
      code: `def apply_discount(price, percent):
    if not 0 <= percent <= 100:
        raise ValueError("percent must be between 0 and 100")
    return round(price * (1 - percent / 100), 2)

def test_ten_percent_discount():          # unit test: one function, no dependencies
    # Arrange
    price = 50
    # Act
    result = apply_discount(price, 10)
    # Assert
    assert result == 45.0

def test_zero_and_full_discount():        # boundaries
    assert apply_discount(50, 0) == 50
    assert apply_discount(50, 100) == 0

# pytest result  # -> 2 passed`,
      followUps: ["Why is a suite made mostly of end-to-end tests slow and fragile?"],
    },
    {
      question: "How do you decide which test cases to write?",
      answer:
        "Cover the normal case, the boundaries (zero, one, maximum, just inside and just outside limits), empty and missing input, invalid input that should raise an error, and any case that broke before. Think about what the code promises and what could go wrong, rather than aiming for a number of tests. Each test should check one behavior and have a name that says what it checks.",
      code: `import pytest

def average(values):
    if not values:
        raise ValueError("no values")
    return sum(values) / len(values)

def test_average_of_several():
    assert average([2, 4, 6]) == 4

def test_average_of_one():
    assert average([5]) == 5

def test_average_of_empty_raises():
    with pytest.raises(ValueError, match="no values"):
        average([])

# pytest result  # -> 3 passed`,
      followUps: ["How do you test a function that returns floating-point results?"],
    },
    {
      question: "What is a regression test, and why write a failing test before fixing a bug?",
      answer:
        "A regression test checks that a bug that was fixed stays fixed. Writing it before the fix proves that it reproduces the bug (it fails), and then proves the fix works (it passes). It also documents the case for future readers and stops someone reintroducing the bug later.",
      code: `def word_count(text):
    return len(text.split())            # fixed: split(" ") miscounted repeated spaces

def test_repeated_spaces_regression():
    assert word_count("one  two   three") == 3

def test_empty_string():
    assert word_count("") == 0

# pytest result  # -> 2 passed`,
      followUps: ["How would you find which commit introduced a regression? (git bisect, awareness level)"],
    },
    {
      question: "What are fakes, stubs and mocks?",
      answer:
        "They are test doubles that replace real dependencies. A stub returns fixed answers so the code under test can run. A fake is a simple working implementation, such as an in-memory store instead of a database. A mock records how it was called so the test can check interactions, such as \"send was called once with this message\". Prefer fakes and stubs and checking results; overusing mocks ties tests to implementation details and makes refactoring painful.",
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
    },
    {
      question: "What are fixtures, and why does test isolation matter?",
      answer:
        "A fixture provides setup that tests need, such as a prepared object or temporary directory; in pytest you request it by naming it as a test parameter, and each test gets a fresh one by default. Isolation means tests do not depend on each other or on shared state, so they can run in any order and a failure points to one cause. Shared mutable state between tests causes flaky, order-dependent failures.",
      code: `import pytest

class Cart:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

@pytest.fixture
def cart():
    return Cart()                         # a new cart for every test

def test_add_one(cart):
    cart.add("book")
    assert cart.items == ["book"]

def test_starts_empty(cart):
    assert cart.items == []               # not affected by the previous test

# pytest result  # -> 2 passed`,
      followUps: ["What is a flaky test, and how would you track down its cause?"],
    },
    {
      question: "What does code coverage tell you, and what doesn't it?",
      answer:
        "Coverage measures which lines (or branches) ran during the tests. Low coverage reveals untested code. High coverage does not prove correctness: a test can execute a line without checking its result, and missing cases (such as an unexpected input) do not show up as uncovered lines. Use coverage to find gaps, not as a target to maximize.",
      code: `def classify(n):
    return "even" if n % 2 == 0 else "odd"

def test_classify_runs():
    classify(3)                            # 100% line coverage, but checks nothing

def test_classify_values():
    assert classify(4) == "even"
    assert classify(-3) == "odd"

# pytest result  # -> 2 passed`,
      followUps: ["How would you test that a function behaves correctly with negative numbers?"],
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
