import type { Topic } from "../types";

const topic: Topic = {
  slug: "exceptions-error-handling",
  title: "Exceptions and Error Handling",
  category: "Python",
  phase: "build-and-deploy-a-project",
  overview:
    "Exceptions are how Python signals that an operation could not be done. Handling invalid input and failures deliberately — specific exceptions, clean-up, clear messages, errors handled at the application boundary — is part of what interviewers and reviewers mean by robust code. Reading tracebacks is covered in Python Debugging.",
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
    "Skip for now: exception groups (except*), warnings, class-based context managers and retry libraries.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Python Tutorial — 8. Errors and Exceptions (sections 8.3–8.8)",
      url: "https://docs.python.org/3/tutorial/errors.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Start here. Read 8.3 Handling Exceptions through 8.8 Predefined Clean-up Actions: try/except/else/finally, raising, chaining, user-defined exceptions and with. About 30 minutes. Skip exception groups and notes (8.9 and 8.10). Free; no account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 3: Exceptions",
      url: "https://cs50.harvard.edu/python/weeks/3/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative to the tutorial: try, except, else and pass, built around validating user input. Watch the lecture; the problem set is optional extra practice. It does not cover raise, finally, chaining or custom exceptions — read tutorial sections 8.4–8.7 for those. Free; no account to watch.",
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
      title: "Exercism Python — Error Handling",
      url: "https://exercism.org/tracks/python/exercises/error-handling",
      note: "Easy. Raising and catching exceptions and cleaning up a file-like resource when an exception is raised; the tests define the requirements. Free; needs a free Exercism account to submit (in the browser editor or the CLI).",
    },
    {
      title: "Exercism Python — Wordy",
      url: "https://exercism.org/tracks/python/exercises/wordy",
      note: "Easy. Parse simple word problems and raise ValueError with the specific messages the tests expect (\"unknown operation\", \"syntax error\"). Demonstrates validating input and raising precise errors. Free account.",
    },
    {
      title: "Exercism Python — Bank Account",
      url: "https://exercism.org/tracks/python/exercises/bank-account",
      note: "Medium. Raise ValueError with messages for invalid operations (closed account, invalid amounts); the Python track runs no concurrency tests. Demonstrates choosing and testing error paths in stateful code. Free account.",
    },
    {
      title: "Find every bare except or except Exception in one of your projects (grep -rn \"except\"), and replace each with a specific exception or a documented boundary handler.",
      note: "Apply to your own project.",
    },
    {
      title: "Add a boundary handler to your project's entry point or request handler that turns expected errors into clear messages and logs unexpected ones, then write a test for each path.",
      note: "Apply to your own project: application boundaries. No external exercise covers this well.",
    },
  ],
  interviewQuestions: [
    {
      question: "When should you use an exception rather than an ordinary check?",
      answer:
        "Use an exception when a function cannot do what its name promises — the input is invalid, a file is missing, a service is down — so the caller must decide what to do. Use an ordinary check or return value for expected, normal outcomes, such as a lookup that often finds nothing. Python commonly uses \"easier to ask forgiveness than permission\": try the operation and handle the specific failure, which also avoids race conditions between checking and acting.",
      followUps: ["Why can checking os.path.exists before opening a file still fail?"],
      source: { title: "Python Glossary — EAFP", url: "https://docs.python.org/3/glossary.html#term-EAFP" },
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
      source: { title: "The Python Tutorial — 8.7 Defining Clean-up Actions", url: "https://docs.python.org/3/tutorial/errors.html#defining-clean-up-actions" },
    },
    {
      question: "How do you raise an exception, and when would you define a custom exception?",
      answer:
        "Use raise with a built-in exception that fits (ValueError for a bad value, TypeError for a wrong type, KeyError for a missing key) and a message that says what was wrong. Define a custom exception, usually a small subclass of an existing one, when callers need to handle that specific failure differently from others. Use raise … from to keep the original cause when you translate a low-level error into a domain error.",
      code: `class InsufficientFunds(ValueError):
    """Raised when a withdrawal is larger than the balance."""

try:
    raise InsufficientFunds("balance 100 is less than 500")
except InsufficientFunds as error:        # must come before a plain "except ValueError"
    print("declined:", error)             # -> declined: balance 100 is less than 500`,
      followUps: ["Why must except InsufficientFunds come before except ValueError?"],
      source: { title: "The Python Tutorial — 8.6 User-defined Exceptions and 8.5 Exception Chaining", url: "https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions" },
    },
    {
      question: "How does an exception propagate?",
      answer:
        "When an exception is raised and not handled in the current function, Python stops that function and looks for a handler in its caller, then the caller's caller, up the call stack. If no handler is found, the program stops and prints a traceback. This lets low-level code raise and a higher level that has the context — a request handler, a command-line entry point — decide how to respond.",
      followUps: ["A parsing helper raises ValueError three calls below the request handler. Which function should handle it, and why not the helper?"],
      source: { title: "The Python Tutorial — 8.3 Handling Exceptions", url: "https://docs.python.org/3/tutorial/errors.html#handling-exceptions" },
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
      source: { title: "Python Docs — Built-in Exceptions: exception hierarchy", url: "https://docs.python.org/3/library/exceptions.html#exception-hierarchy" },
    },
    {
      question: "How do you make sure resources are cleaned up?",
      answer:
        "Use a with statement: the object's context manager releases the resource — closes the file, releases the lock, rolls back the transaction — when the block ends, even if an exception is raised. try/finally does the same by hand. contextlib.contextmanager lets you write your own context manager as a generator.",
      followUps: ["What does a database connection's with block do on an exception?"],
      source: { title: "The Python Tutorial — 8.8 Predefined Clean-up Actions", url: "https://docs.python.org/3/tutorial/errors.html#predefined-clean-up-actions" },
    },
    {
      question: "Where should an application handle errors, and what should it tell the user?",
      answer:
        "Lower layers should raise specific exceptions and not decide how to present them. At the boundary — the request handler, command-line entry point or job runner — translate expected errors into a clear response (for example 400 with \"amount must be positive\") and log unexpected ones with enough context to debug, then return a generic message (500 \"something went wrong\") without stack traces, secrets or personal data. Never silently swallow an error.",
      followUps: ["What should never appear in an error message or log line?"],
      source: { title: "OWASP Error Handling Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html" },
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
    "You can pass the Exercism Error Handling and Wordy exercises without help.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "The full exception hierarchy, exception groups (except*) and warnings.",
    "Writing context managers as classes with __enter__/__exit__ beyond recognizing them.",
    "Retry libraries and circuit breakers (useful later for services).",
  ],
  keywords: ["exception", "exceptions", "error handling", "try except", "finally", "raise", "custom exception", "context manager", "with statement", "propagation", "logging errors"],
};

export default topic;
