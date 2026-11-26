import type { Topic } from "../types";

const topic: Topic = {
  slug: "exceptions-error-handling",
  title: "Exceptions and Error Handling",
  category: "Python",
  phase: "build-and-deploy-a-project",
  overview:
    "Exceptions are how Python signals that something could not be done: a missing key, bad input, a file that will not open, a network call that fails. This topic covers when to use exceptions instead of ordinary checks, try/except/else/finally, raising exceptions (including your own), how exceptions propagate, catching specific exceptions, cleaning up resources with with, useful messages and logging, and where in an application to handle errors. Reading tracebacks is covered in Python Debugging.",
  whyItMatters:
    "Code that handles invalid input and failures deliberately is part of what interviewers mean by robust or production-quality code, and exception questions appear among language-fundamentals questions (one Apple new-grad report described them). On the job, every feature has an error path: what happens when input is wrong or a dependency fails is often where bugs and security problems hide.",
  prerequisites: ["Functions and Arguments", "Python Debugging", "Classes and Objects (for custom exceptions)"],
  objectives: [
    "Explain when an exception is appropriate and when an ordinary check or return value is clearer.",
    "Use try, except, else and finally, and explain when each block runs.",
    "Raise built-in exceptions with clear messages, and define a small custom exception when callers need to handle a specific failure.",
    "Explain how an exception propagates up the call stack until something handles it.",
    "Catch specific exceptions, and explain why bare except and broad except Exception hide bugs.",
    "Chain exceptions with raise … from to keep the original cause.",
    "Release resources reliably with with statements, and recognize a context manager.",
    "Write error messages that help the user or the developer, and log failures without leaking secrets.",
    "Handle errors at application boundaries (a request handler, a command-line entry point) and let lower layers raise.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Python Tutorial — 8. Errors and Exceptions (sections 8.3–8.8)",
      url: "https://docs.python.org/3/tutorial/errors.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Written, primary. Read Handling Exceptions through Predefined Clean-up Actions: try/except/else/finally, raising, chaining, user-defined exceptions and with. About 30 minutes. Skip exception groups and notes (8.9 and 8.10) unless you need them.",
    },
    {
      title: "Python Standard Library — Built-in Exceptions: exception hierarchy",
      url: "https://docs.python.org/3/library/exceptions.html#exception-hierarchy",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Look at the tree once to see why catching Exception is broad and why KeyboardInterrupt is not an Exception. Do not memorize it.",
    },
  ],
  exercises: [
    {
      title: "Write parse_duration(text) that accepts \"90\", \"1h\" or \"1h30m\" and returns minutes, raising ValueError with a helpful message for anything else; test every branch with pytest, including pytest.raises.",
      note: "Foundation.",
    },
    {
      title: "Find every bare except or except Exception in one of your projects (grep -rn \"except\"), and replace each with a specific exception or a documented boundary handler.",
      note: "Practical.",
    },
    {
      title: "Add a boundary handler to your project's entry point or request handler that turns expected errors into clear messages and logs unexpected ones, then write a test for each path.",
      note: "Practical: application boundaries.",
    },
    {
      title: "Write a context manager with contextlib.contextmanager that times a block and prints the duration even when the block raises; prove it with a test.",
      note: "Reinforcement: cleanup.",
    },
  ],
  interviewQuestions: [
    {
      question: "When should you use an exception rather than an ordinary check?",
      answer:
        "Use an exception when a function cannot do what its name promises — the input is invalid, a file is missing, a service is down — so the caller must decide what to do. Use an ordinary check or return value for expected, normal outcomes, such as a lookup that often finds nothing. Python commonly uses \"easier to ask forgiveness than permission\": try the operation and handle the specific failure, which also avoids race conditions between checking and acting.",
      code: `prices = {"apple": 0.5}

print(prices.get("pear", 0.0))         # a missing price is a normal case here  # -> 0.0

def parse_quantity(text):
    try:
        return int(text)
    except ValueError:
        raise ValueError(f"quantity must be a whole number, got {text!r}") from None

try:
    parse_quantity("three")
except ValueError as error:
    print(error)                          # -> quantity must be a whole number, got 'three'`,
      followUps: ["Why can checking os.path.exists before opening a file still fail?"],
    },
    {
      question: "Explain try, except, else and finally. When does each run?",
      answer:
        "The try block runs first. If it raises an exception that matches an except clause, that handler runs. The else block runs only if try raised nothing — it keeps code that should not be protected out of try. The finally block always runs, whether there was an exception, a handled exception, or a return, and is used for cleanup.",
      code: `def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("cannot divide by zero")
        return None
    else:
        print("division worked")
        return result
    finally:
        print("finished")

print(divide(6, 3))
# -> division worked
# -> finished
# -> 2.0
print(divide(1, 0))
# -> cannot divide by zero
# -> finished
# -> None`,
      followUps: ["What happens if finally contains a return statement?"],
    },
    {
      question: "How do you raise an exception, and when would you define a custom exception?",
      answer:
        "Use raise with a built-in exception that fits (ValueError for a bad value, TypeError for a wrong type, KeyError for a missing key) and a message that says what was wrong. Define a custom exception, usually a small subclass of an existing one, when callers need to handle that specific failure differently from others. Use raise … from to keep the original cause when you translate a low-level error into a domain error.",
      code: `class InsufficientFunds(ValueError):
    """Raised when a withdrawal is larger than the balance."""

def withdraw(balance, amount):
    if amount <= 0:
        raise ValueError("amount must be positive")
    if amount > balance:
        raise InsufficientFunds(f"balance {balance} is less than {amount}")
    return balance - amount

for amount in (30, 500, -5):
    try:
        print(withdraw(100, amount))
    except InsufficientFunds as error:
        print("declined:", error)
    except ValueError as error:
        print("invalid:", error)
# -> 70
# -> declined: balance 100 is less than 500
# -> invalid: amount must be positive`,
      followUps: ["Why does the order of the except clauses matter here?"],
    },
    {
      question: "How does an exception propagate?",
      answer:
        "When an exception is raised and not handled in the current function, Python stops that function and looks for a handler in its caller, then the caller's caller, up the call stack. If no handler is found, the program stops and prints a traceback. This lets low-level code raise and a higher level that has the context — a request handler, a command-line entry point — decide how to respond.",
      code: `def read_age(raw):
    return int(raw)                       # raises ValueError for bad input

def load_user(record):
    return {"name": record["name"], "age": read_age(record["age"])}

def handle(record):
    try:
        return load_user(record)
    except (KeyError, ValueError) as error:
        return f"bad record: {type(error).__name__}"

print(handle({"name": "Ana", "age": "31"}))   # -> {'name': 'Ana', 'age': 31}
print(handle({"name": "Ben", "age": "x"}))    # -> bad record: ValueError
print(handle({"age": "40"}))                  # -> bad record: KeyError`,
      followUps: ["Which function should handle the error, and why not read_age?"],
    },
    {
      question: "Why should you catch specific exceptions instead of using a bare except or except Exception?",
      answer:
        "A broad handler also catches bugs you did not expect — a typo that raises NameError, a wrong attribute — and hides them behind a misleading message. A bare except even catches KeyboardInterrupt and SystemExit. Catch the specific exceptions you can actually handle; let everything else propagate so it is seen and fixed. A broad handler belongs only at a top-level boundary that logs the error and responds safely.",
      code: `def total_price(items):
    try:
        return sum(item["price"] * item["qty"] for item in itmes)   # typo: itmes
    except Exception:
        return 0                                                    # hides the bug

def total_price_fixed(items):
    try:
        return sum(item["price"] * item["qty"] for item in items)
    except KeyError as error:
        raise ValueError(f"item is missing {error}") from error

print(total_price([{"price": 2, "qty": 3}]))         # wrong answer, no error  # -> 0
print(total_price_fixed([{"price": 2, "qty": 3}]))   # -> 6`,
      followUps: ["Where in an application is a broad handler acceptable?"],
    },
    {
      question: "How do you make sure resources are cleaned up?",
      answer:
        "Use a with statement: the object's context manager releases the resource — closes the file, releases the lock, rolls back the transaction — when the block ends, even if an exception is raised. try/finally does the same by hand. contextlib.contextmanager lets you write your own context manager as a generator.",
      code: `from contextlib import contextmanager

@contextmanager
def opened(name):
    print(f"open {name}")
    try:
        yield name
    finally:
        print(f"close {name}")            # runs even when the block raises

try:
    with opened("report.csv"):
        raise RuntimeError("disk full")
except RuntimeError as error:
    print("handled:", error)
# -> open report.csv
# -> close report.csv
# -> handled: disk full`,
      followUps: ["What does a database connection's with block do on an exception?"],
    },
    {
      question: "Where should an application handle errors, and what should it tell the user?",
      answer:
        "Lower layers should raise specific exceptions and not decide how to present them. At the boundary — the request handler, command-line entry point or job runner — translate expected errors into a clear response (for example 400 with \"amount must be positive\") and log unexpected ones with enough context to debug, then return a generic message (500 \"something went wrong\") without stack traces, secrets or personal data. Never silently swallow an error.",
      code: `import logging, sys

logging.basicConfig(stream=sys.stdout, format="%(levelname)s %(message)s", force=True)
log = logging.getLogger("app")

def transfer(amount):
    if amount <= 0:
        raise ValueError("amount must be positive")
    raise ConnectionError("payments service timed out")

def handle_transfer(amount):
    try:
        transfer(amount)
        return 200, "ok"
    except ValueError as error:
        return 400, str(error)                      # the user can fix this
    except ConnectionError:
        log.error("transfer failed: payments unavailable (amount=%s)", amount)
        return 503, "Please try again shortly."    # no internal details

print(handle_transfer(-5))    # -> (400, 'amount must be positive')
print(handle_transfer(20))
# -> ERROR transfer failed: payments unavailable (amount=20)
# -> (503, 'Please try again shortly.')`,
      followUps: ["What should never appear in an error message or log line?"],
    },
  ],
  mistakes: [
    "Bare except or except Exception around large blocks, hiding bugs.",
    "Catching an exception and doing nothing (pass) without a documented reason.",
    "Using exceptions for normal control flow where a simple check or return value is clearer.",
    "Raising vague errors (\"error\", \"invalid\") that do not say what was wrong.",
    "Losing the original cause when re-raising (use raise … from).",
    "Forgetting cleanup; opening files or connections without with.",
    "Showing stack traces, secrets or personal data to users.",
    "Handling the same error at every layer instead of at the boundary.",
  ],
  mastery: [
    "You can predict the output of try/except/else/finally code, including returns inside them.",
    "You raise specific exceptions with useful messages and test them with pytest.raises.",
    "Your code has no bare except, and every broad handler is a deliberate boundary that logs.",
    "You can explain propagation and choose where an error should be handled in your own project.",
  ],
  deprioritize: [
    "The full exception hierarchy, exception groups (except*) and warnings.",
    "Writing context managers as classes with __enter__/__exit__ beyond recognizing them.",
    "Retry libraries and circuit breakers (useful later for services).",
  ],
  keywords: ["exception", "exceptions", "error handling", "try except", "finally", "raise", "custom exception", "context manager", "with statement", "propagation", "logging errors"],
};

export default topic;
