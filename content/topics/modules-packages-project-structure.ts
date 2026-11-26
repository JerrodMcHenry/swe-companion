import type { Topic } from "../types";

const topic: Topic = {
  slug: "modules-packages-project-structure",
  title: "Modules, Packages and Project Structure",
  category: "Python",
  phase: "build-and-deploy-a-project",
  overview:
    "As a project grows beyond one file, you split it into modules and packages so each part has one clear job and can be tested on its own. This topic covers modules, packages and __init__.py, how imports are resolved, absolute versus relative imports, entry points and python -m, declaring dependencies and basic configuration in pyproject.toml, organizing application code and tests, and avoiding circular imports and needless layers. It uses one small, understandable structure and explains the reasoning, rather than prescribing enterprise architecture.",
  whyItMatters:
    "Every codebase you join is organized into modules and packages, and \"ModuleNotFoundError\" and circular imports are among the most common setup problems in practical rounds and take-homes. Interviewers reading a take-home or your project notice whether responsibilities are separated and tests are easy to find. This is mainly a professional skill; interviews touch it through project and take-home discussions.",
  prerequisites: ["Functions and Arguments", "Command Line and Development Environment (virtual environments)", "Automated Testing"],
  objectives: [
    "Explain what a module and a package are, and what __init__.py does.",
    "Explain how Python finds a module (the current directory or script directory, installed packages, sys.path) and why the same import can work in one place and fail in another.",
    "Use absolute imports by default, and explain when relative imports are acceptable.",
    "Create an entry point with if __name__ == \"__main__\": and run a package module with python -m.",
    "Declare dependencies and basic project metadata in pyproject.toml (or requirements.txt), installed into a virtual environment.",
    "Separate responsibilities: input and output at the edges, domain logic in plain functions or classes, data access in one place.",
    "Organize tests to mirror the code they test, and run them from the project root.",
    "Recognize and fix a circular import, and avoid layers and packages the project does not need.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Python Tutorial — 6. Modules",
      url: "https://docs.python.org/3/tutorial/modules.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Written, primary. Read the whole chapter: executing modules as scripts, the module search path, packages, __init__.py and intra-package references. About 30 minutes.",
    },
    {
      title: "Python Packaging User Guide — Writing your pyproject.toml",
      url: "https://packaging.python.org/en/latest/guides/writing-pyproject-toml/",
      provider: "Python Packaging Authority",
      type: "Documentation",
      instructions: "Reference. Read the sections on the [project] table, dependencies and optional dependencies. You do not need to publish a package; skip building and uploading.",
    },
  ],
  exercises: [
    {
      title: "Split a single-file script of 150 lines or more into a small package (domain logic, input/output, entry point) with a tests folder, keeping all tests passing after each move.",
      note: "Practical. Use one of your earlier exercises if you have nothing larger.",
    },
    {
      title: "Reproduce and fix three import problems on purpose: running a module from the wrong directory, a circular import between two modules, and a module named the same as a standard-library module (for example random.py).",
      note: "Write down the error message and the fix for each.",
    },
    {
      title: "Add a pyproject.toml to your project with its dependencies and a development extra for pytest, recreate the virtual environment from it and run the tests.",
      note: "Practical.",
    },
  ],
  interviewQuestions: [
    {
      question: "What are modules and packages, and what does __init__.py do?",
      answer:
        "A module is a single .py file; importing it runs it once and gives you its names. A package is a directory of modules that you import with dotted names such as tracker.services. An __init__.py file marks a directory as a regular package and runs when the package is first imported; it is often empty, or re-exports a few names. Since Python 3.3 directories without it can be namespace packages, but for application code keep the file to make the intent clear.",
      code: `$ tree -I .venv
study-tracker/
├── pyproject.toml
├── README.md
├── src/
│   └── tracker/
│       ├── __init__.py
│       ├── __main__.py      # "python -m tracker" runs this
│       ├── cli.py           # input and output: parses arguments, prints results
│       ├── models.py        # plain data classes
│       ├── services.py      # domain logic: scheduling reviews
│       └── storage.py       # reading and writing data
└── tests/
    ├── test_services.py
    └── test_storage.py`,
      followUps: ["Why might a project put its package under src/?"],
    },
    {
      question: "How does Python find the module you import, and why does an import work in one place but not another?",
      answer:
        "Python searches the entries of sys.path in order: the directory of the script being run (or the current directory for python -m and the interactive shell), then installed packages in the active environment. Running a file directly from inside a package puts that inner directory first, so absolute imports of the package fail; running from the project root with python -m, or installing the project in editable mode, fixes it. Modules are imported once and cached in sys.modules, so a second import returns the same object.",
      code: `import math
import math as maths
import sys

print(maths is math, "math" in sys.modules)   # imported once, then reused  # -> True True`,
      followUps: ["What happens if you create a file called random.py in your project?"],
    },
    {
      question: "What is the difference between absolute and relative imports?",
      answer:
        "An absolute import names the full path from the top-level package (from tracker.services import schedule); it is clear and works from anywhere once the package is importable, so it is the default recommendation. A relative import uses dots to mean the current or parent package (from .services import schedule); it only works inside a package and is sometimes used for closely related modules. Consistency matters more than the choice; avoid deep relative imports such as from ...x import y.",
      code: `$ cat src/tracker/cli.py
from tracker.services import schedule_reviews   # absolute: preferred
from .storage import load_sessions              # relative: same package only

$ python src/tracker/cli.py      # fails: the package root is not on sys.path
ModuleNotFoundError: No module named 'tracker'
$ pip install -e .               # or run from the root with the src layout configured
$ python -m tracker              # runs tracker/__main__.py as part of the package`,
      followUps: ["Why does python -m behave differently from running the file path?"],
    },
    {
      question: "What does if __name__ == \"__main__\": do?",
      answer:
        "Every module has a __name__: its import name when imported, or \"__main__\" when run directly as a script. Putting the entry-point call under this check lets the file be run as a program and also imported (for example by tests) without starting the program. Keep the block short: call a main() function that does the work.",
      code: `$ cat greet.py
def main():
    print("running as a program")

if __name__ == "__main__":
    main()

$ python greet.py
running as a program
$ python -c "import greet"      # importing does not run main()`,
      followUps: ["Why should tests import functions rather than run the script?"],
    },
    {
      question: "How do you manage a project's dependencies?",
      answer:
        "Declare the direct dependencies in pyproject.toml (or requirements.txt), separating development-only tools such as pytest; install them into a project virtual environment; and commit the declaration, never the environment. For applications, pin exact versions (a lock file or pip freeze output) so every machine and the deployment install the same versions. Add a dependency only when it earns its place.",
      code: `# pyproject.toml
[project]
name = "study-tracker"
version = "0.1.0"
requires-python = ">=3.12"
dependencies = [
    "httpx>=0.27",
]

[project.optional-dependencies]
dev = ["pytest>=8"]

[project.scripts]
study-tracker = "tracker.cli:main"`,
      followUps: ["What is the difference between a version range and a pinned version, and when do you want each?"],
    },
    {
      question: "What is a circular import, and how do you fix one?",
      answer:
        "Two modules import each other, directly or through a chain, so one of them is used before it has finished loading, typically producing an ImportError about a partially initialized module. It usually means responsibilities are tangled. Fix it by moving the shared code into a third module both can import, by making the dependency go one way (domain logic should not import the command-line layer), or, as a last resort, importing inside the function that needs it.",
      code: `$ cat src/tracker/models.py
from tracker.services import is_due          # models imports services...
$ cat src/tracker/services.py
from tracker.models import Session           # ...and services imports models
$ python -m tracker
ImportError: cannot import name 'Session' from partially initialized module 'tracker.models'
# Fix: models should not depend on services; keep is_due in services only.`,
      followUps: ["How does a clear direction of dependencies (edges → logic → data) prevent this?"],
    },
    {
      question: "How would you organize a small project, and how do you avoid overengineering it?",
      answer:
        "Start with as few modules as the code needs, and split when a file has more than one job or becomes hard to navigate. A useful rule is to keep input and output (command-line parsing, HTTP handlers) at the edges, domain logic in plain functions or classes that are easy to test, and data access in one place, with dependencies pointing inwards. Mirror the code in a tests folder. Avoid packages with one file each, interfaces with one implementation and \"utils\" dumping grounds; explain each folder by its responsibility, not by convention.",
      followUps: ["Your project has a utils.py with 40 unrelated functions. What would you do?"],
    },
  ],
  mistakes: [
    "Running modules by file path from inside the package and then adding sys.path hacks.",
    "Naming a file after a standard-library or installed module (random.py, json.py, requests.py).",
    "Circular imports from layers that depend on each other.",
    "Committing the virtual environment instead of the dependency declaration.",
    "Copying an enterprise folder structure with empty layers into a 300-line project.",
    "A large utils module with unrelated helpers.",
  ],
  mastery: [
    "You can organize a small project into a package with a tests folder and explain each module's responsibility.",
    "You can run it with python -m and from its tests, and diagnose ModuleNotFoundError and circular imports.",
    "You declare dependencies in pyproject.toml or requirements.txt and recreate the environment from them.",
  ],
  deprioritize: [
    "Publishing packages to PyPI, build backends and versioning schemes.",
    "Namespace packages, import hooks and other import-system internals.",
    "Monorepos, plugin systems and layered enterprise architecture.",
  ],
  keywords: ["module", "modules", "package", "packages", "import", "imports", "__init__.py", "__main__", "relative import", "pyproject.toml", "requirements.txt", "dependencies", "circular import", "project structure"],
};

export default topic;
