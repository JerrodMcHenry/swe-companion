import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-type-hints",
  title: "Python Type Hints",
  category: "Backend",
  phase: "backend-engineering",
  overview:
    "Type hints annotate what a function accepts and returns. Python does not enforce them at runtime; static checkers such as mypy and pyright check them before the code runs, and FastAPI and Pydantic read them to parse, validate and document requests.",
  whyItMatters:
    "In this curriculum's backend stack, type hints are functional, not decoration: FastAPI decides what a path, query or body parameter is and how to validate it from annotations. In professional Python codebases they make code easier to read and refactor and let a checker catch None-handling and wrong-argument bugs before they reach production. Treat this as professional readiness rather than a standalone interview topic (editorial); expect it to come up when you explain your project's code.",
  prerequisites: ["Functions and Arguments", "Classes and Objects", "Lists", "Dictionaries"],
  objectives: [
    "Annotate parameters and return values (-> None for functions that return nothing); annotate variables only when inference is not enough, such as an empty list.",
    "Built-in generics: list[int], dict[str, int], set[str], tuple[int, str] and tuple[int, ...]; accept collections.abc.Iterable, Sequence or Mapping in parameters when any such collection works.",
    "Unions and None: X | None (Python 3.10+), and Optional[X] and Union[X, Y] in older code; Optional means \"may be None\", not \"argument may be omitted\".",
    "Type aliases: type UserId = int (Python 3.12+) or a plain assignment in older code.",
    "Classes, dataclasses and Pydantic models as types; Any as an escape hatch that switches checking off.",
    "Type narrowing: if value is None: return, isinstance checks and early returns, and why the checker rejects name.upper() when name is str | None.",
    "Hints versus runtime validation: annotations are stored metadata (__annotations__) that Python ignores; mypy or pyright check them statically; Pydantic and FastAPI read them and validate data at runtime.",
    "Run mypy (or pyright) on a project and fix the errors; know that mypy skips unannotated functions by default, that --strict exists and that # type: ignore needs a stated reason.",
    "How FastAPI uses annotations: parameter source, conversion, validation and docs; Annotated[int, Query(gt=0)] attaches validation metadata to a type.",
    "Skip for now: writing your own generics (TypeVar, PEP 695 class syntax), Protocols internals, overloads, ParamSpec, variance, TypeGuard and TypeIs, stub files and metaclasses.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "FastAPI — Python Types Intro",
      url: "https://fastapi.tiangolo.com/python-types/",
      provider: "FastAPI (official documentation)",
      type: "Documentation",
      instructions:
        "Start here. Read the whole page: Motivation, Declaring types (simple types, generic types, union, possibly None, classes as types), Pydantic models, Type Hints with Metadata Annotations and Type hints in FastAPI. It is short and shows exactly how this stack uses hints. Free; no account.",
    },
    {
      title: "mypy — Getting started",
      url: "https://mypy.readthedocs.io/en/stable/getting_started.html",
      provider: "mypy (official documentation)",
      type: "Documentation",
      instructions:
        "How static checking works in practice. Read Installing and running mypy, Dynamic vs static typing, Strict mode and configuration, Local type inference and Types from libraries. Free; no account.",
    },
    {
      title: "mypy — Type hints cheat sheet",
      url: "https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html",
      provider: "mypy (official documentation)",
      type: "Documentation",
      instructions:
        "Reference to keep open while annotating: Variables, Useful built-in types, Functions, Classes, When you're puzzled or when things are complicated, and Standard \"duck types\". Skip Decorators and Forward references for now. For narrowing, read only Type narrowing expressions on mypy's Type narrowing page.",
    },
    {
      title: "Python typing documentation — Modernizing Superseded Typing Features",
      url: "https://typing.python.org/en/latest/guides/modernizing.html",
      provider: "Python typing community (typing.python.org)",
      type: "Documentation",
      instructions:
        "Reference for reading older code: Generics in the typing Module (List[int] versus list[int]), typing.Union and typing.Optional, and Type Aliases. Skip the other sections.",
    },
  ],
  exercises: [
    {
      title: "Python Type Challenges — basic: parameter, return, variable, list, dict, tuple, optional, union, typealias, kwargs, any",
      url: "https://python-type-challenges.laike9m.com/basic/optional",
      note: "Short online challenges checked by pyright in the browser. Do all the basic challenges; intermediate await, callable and literal are an optional stretch. Free; no account.",
    },
    {
      title: "mypy Playground or Pyright Playground",
      url: "https://mypy-play.net/",
      note: "Paste a function with a str | None parameter and remove the None check to see the error you must fix. Pyright's playground is at pyright-play.net. Free; no account.",
    },
    {
      title: "Apply to your backend project: type-check one module",
      note: "Annotate every function in one module, run mypy (or pyright), and fix every error without Any or # type: ignore. Then add the check to your CI workflow (see Deployment and CI/CD).",
    },
  ],
  interviewQuestions: [
    {
      question: "Does Python enforce type hints at runtime?",
      answer:
        "No. Annotations are stored as metadata on the function (__annotations__) and the interpreter ignores them, so a call with the wrong type runs until something actually fails. Static checkers such as mypy and pyright read the hints and report mistakes before the code runs. Some libraries also read hints at runtime: Pydantic and FastAPI use them to convert and validate incoming data, which is real runtime checking — but only where those libraries are involved.",
      code: `def double(n: int) -> int:
    return n * 2

print(double("ab"))              # -> abab
print(double.__annotations__)    # -> {'n': <class 'int'>, 'return': <class 'int'>}`,
      followUps: ["How does FastAPI turn the hint item_id: int into validation?"],
      source: { title: "Python Standard Library — typing (note on runtime enforcement)", url: "https://docs.python.org/3/library/typing.html" },
    },
    {
      question: "Why use type hints if Python does not enforce them?",
      answer:
        "A type checker catches whole classes of bugs before running anything — forgetting that a value can be None, passing the wrong argument, using a misspelled attribute. Editors use hints for autocompletion and safe refactoring, and hints document the interface in a form the checker keeps honest. In FastAPI and Pydantic they also drive validation. The costs are extra syntax and a false sense of safety: unannotated code and Any are not checked, and hints say nothing about valid ranges or business rules.",
      followUps: ["What does mypy do with a function that has no annotations?"],
      source: { title: "mypy — Getting started: Dynamic vs static typing", url: "https://mypy.readthedocs.io/en/stable/getting_started.html" },
    },
    {
      question: "What does Optional[str] mean? Is it the same as an optional argument?",
      answer:
        "Optional[str] is the same as str | None: the value may be a string or None. It says nothing about whether the argument can be omitted — def greet(name: str | None) still requires an argument. Giving a default, as in name: str | None = None, is what makes it optional to pass. Because the value may be None, code using it must handle None before calling string methods.",
      followUps: ["Which spelling would you use in new code, and why?"],
      source: { title: "Python Standard Library — typing.Optional", url: "https://docs.python.org/3/library/typing.html#typing.Optional" },
    },
    {
      question: "A type checker reports: Item \"None\" of \"str | None\" has no attribute \"upper\". What does it mean, and how do you fix it?",
      answer:
        "The variable's type includes None, and calling .upper() on None would raise AttributeError at runtime, so the checker refuses. Fix it by narrowing: handle the None case first (if name is None: return a default or raise), or use isinstance, after which the checker knows the type is str. If None is impossible, change the annotation instead. Silencing it with # type: ignore or a cast hides a real bug.",
      followUps: ["Why does an early return narrow the type for the rest of the function?"],
      source: { title: "mypy — Type narrowing", url: "https://mypy.readthedocs.io/en/stable/type_narrowing.html" },
    },
    {
      question: "When would you annotate a parameter as Iterable or Sequence instead of list?",
      answer:
        "Accept the most general type your function actually needs. If it only loops over the items, Iterable[int] lets callers pass a list, tuple, set or generator; if it needs indexing or len, use Sequence[int]; for read-only dictionaries, Mapping[str, int]. Return a concrete type such as list[int] so callers know exactly what they get. Sequence and Mapping also signal that the function will not mutate the argument.",
      followUps: ["Why is list[int] not accepted where list[float] is expected?"],
      source: { title: "mypy — Type hints cheat sheet: Standard \"duck types\"", url: "https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html" },
    },
    {
      question: "What is Any, and why should you avoid overusing it?",
      answer:
        "Any is compatible with every type in both directions, so the checker stops checking anything that touches it — errors flow through silently. It is useful at boundaries with untyped libraries or during gradual adoption. When you mean \"any object\", object is safer: the checker requires you to narrow it before using it. Prefer a precise type, a union or a Pydantic model for external data.",
      followUps: ["How would you type the result of json.loads?"],
      source: { title: "Python Standard Library — typing.Any", url: "https://docs.python.org/3/library/typing.html#the-any-type" },
    },
  ],
  mistakes: [
    "Believing hints validate data at runtime outside Pydantic or FastAPI.",
    "Writing Optional[str] or str | None and assuming the argument may be omitted.",
    "Silencing checker errors with Any, cast or # type: ignore instead of handling None.",
    "Annotating parameters as list when any iterable would work.",
    "Running mypy on unannotated code and concluding it is correct because no errors appear.",
    "Mixing old (List, Optional) and new (list, X | None) spellings inconsistently in one codebase.",
  ],
  mastery: [
    "You can annotate a module's functions, including None-able values and collections, and mypy or pyright passes without Any or # type: ignore.",
    "You can explain without notes that hints are not enforced at runtime, how static checking differs from Pydantic validation, and what Optional means.",
    "You can fix narrowing errors and read older typing syntax (List, Dict, Optional, Union).",
    "You complete the basic Python Type Challenges without hints.",
    "Skip this topic if you already type-check your Python projects with mypy or pyright.",
  ],
  deprioritize: [
    "Writing generic classes and functions with TypeVar or PEP 695 syntax.",
    "Protocols, overloads, ParamSpec and variance.",
    "TypeGuard and TypeIs, stub files and metaclasses.",
    "Runtime type-checking libraries such as beartype and typeguard.",
  ],
  keywords: [
    "type hints",
    "type annotations",
    "typing",
    "static typing",
    "mypy",
    "pyright",
    "type checker",
    "Optional",
    "Union",
    "None",
    "type alias",
    "type narrowing",
    "Any",
    "Annotated",
    "generics",
    "list[int]",
  ],
};

export default topic;
