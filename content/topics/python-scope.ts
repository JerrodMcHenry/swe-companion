import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-scope",
  title: "Scope",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Scope determines where a name can be seen and which object it refers to. Python looks names up in the local, enclosing, global and built-in scopes, in that order (LEGB), and decides at compile time that any name assigned inside a function is local to it unless declared otherwise.",
  whyItMatters:
    "Scope rules explain errors such as UnboundLocalError and bugs caused by accidentally shadowing a built-in like list or sum. Interviewers occasionally ask about LEGB, global and nonlocal, and code that avoids global state is easier to test and review. This topic is reinforcement: you can start Data Structures & Algorithms before finishing it.",
  prerequisites: ["Functions and Arguments"],
  objectives: [
    "Local versus global scope: any name assigned inside a function is local to the whole function body, decided when the function is compiled.",
    "The LEGB lookup order (Local, Enclosing, Global, Built-in) and how it resolves names in nested functions.",
    "Why UnboundLocalError occurs, and the usual fix: pass the value in and return the result.",
    "global and nonlocal: needed only to rebind a name in an outer scope, not to read it or to mutate a mutable object.",
    "Why unnecessary global state makes functions harder to test and reason about; module-level constants are fine.",
    "Shadowing, especially of built-ins such as list, sum and max.",
    "if, for and while blocks do not create a scope; functions, classes, modules and comprehensions do.",
    "Skip for now: closure internals (cells, __closure__), class-scope edge cases and annotation scopes.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Python Programming MOOC — Part 6: Local and global variables",
      url: "https://programming-26.mooc.fi/part-6/4-scope-of-variables",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Read the whole section: local and global variables, the UnboundLocalError example, the global keyword, when (rarely) to use global variables, and why passing arguments and returning values is better. It does not cover nested functions or nonlocal; read the tutorial section below for those. Free; no account needed to read.",
    },
    {
      title: "The Python Tutorial — 9.2 Python Scopes and Namespaces",
      url: "https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Read 9.2 and its 9.2.1 Scopes and Namespaces Example after the MOOC section: it covers enclosing scopes, the built-in scope and how local, nonlocal and global assignment differ. Predict the example's output before reading it. Stop at 9.3; the rest of the page is about classes.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lecture 9: Et Cetera (Global Variables)",
      url: "https://cs50.harvard.edu/python/weeks/9/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative to the MOOC section. Watch only the Global Variables segment, which hits UnboundLocalError in a bank-balance program and fixes it with global; the notes on the same site follow the same example. Skip the rest of the lecture.",
    },
    {
      title: "Python Programming FAQ — local and global variables, and UnboundLocalError",
      url: "https://docs.python.org/3/faq/programming.html#why-am-i-getting-an-unboundlocalerror-when-the-variable-has-a-value",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Short official reference. Read this entry and the next one, What are the rules for local and global variables in Python?, to check your explanation of UnboundLocalError.",
    },
  ],
  exercises: [
    {
      title: "Step through the snippets in the interview questions below in Python Tutor, predicting every printed value first.",
      url: "https://pythontutor.com/python-compiler.html",
      note: "Python Tutor draws each frame and its variables, so you can see which scope a name is found in. Free; no account needed. Explain each wrong prediction in one sentence.",
    },
    {
      title: "Audit your own earlier solutions (for example your MOOC or LeetCode code) for global state and shadowed built-ins.",
      url: "https://docs.astral.sh/ruff/rules/builtin-variable-shadowing/",
      note: "Refactor any function that reads or changes a global into one that takes parameters and returns a result, and rename variables such as list, sum or max. Optionally run the linked Ruff rule (A001), which flags assignments that shadow built-ins.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the LEGB rule?",
      answer:
        "It is the order in which Python looks up a name: Local (the current function), Enclosing (any outer functions, for nested functions), Global (the module) and Built-in (names such as len and print). The first match wins. If none matches, Python raises NameError.",
      code: `x = "global"

def outer():
    x = "enclosing"
    def inner():
        return x       # found in the enclosing scope
    return inner()

print(outer())   # -> enclosing
print(len("abc"))   # -> 3`,
      followUps: ["Where would Python look first if inner() also assigned x?"],
      source: { title: "Python Language Reference — Resolution of names", url: "https://docs.python.org/3/reference/executionmodel.html#resolution-of-names" },
    },
    {
      question: "Why does UnboundLocalError occur?",
      answer:
        "When a function assigns to a name anywhere in its body, Python treats that name as local throughout the function, decided when the function is compiled. Reading it before the assignment then fails, even if a global with the same name exists. Fix it by passing the value in and returning the result, or, if you really mean the global, by declaring global.",
      code: `count = 0

def increment():
    count += 1     # assignment makes count local, but it has no value yet

try:
    increment()
except UnboundLocalError as error:
    print(type(error).__name__)   # -> UnboundLocalError

def increment_pure(count):
    return count + 1

print(increment_pure(count))      # -> 1`,
      followUps: ["Why does reading a global inside a function work without any declaration?"],
      source: { title: "Python FAQ — Why am I getting an UnboundLocalError when the variable has a value?", url: "https://docs.python.org/3/faq/programming.html#why-am-i-getting-an-unboundlocalerror-when-the-variable-has-a-value" },
    },
    {
      question: "How do global and nonlocal differ?",
      answer:
        "global name makes assignments in a function refer to the module-level name. nonlocal name makes assignments in a nested function refer to the nearest enclosing function's name. Neither is needed just to read a variable, or to mutate a mutable object such as appending to a list; they are needed only to rebind the name.",
      code: `def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
counter()
print(counter())   # -> 2`,
      followUps: ["Why can a nested function append to an enclosing list without nonlocal?"],
      source: { title: "The Python Tutorial — 9.2.1 Scopes and Namespaces Example", url: "https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces-example" },
    },
    {
      question: "Why should you avoid unnecessary global state?",
      answer:
        "Functions that read or change globals have hidden inputs and outputs: you cannot understand or test them from their signature, the order of calls changes results, and tests can interfere with each other. Passing values as parameters and returning results makes behavior explicit. Module-level constants that never change, such as MAX_RETRIES, are fine.",
      followUps: ["How would global state cause problems in a web server handling many requests?"],
      source: { title: "Python Programming MOOC — Local and global variables: When should you use global variables?", url: "https://programming-26.mooc.fi/part-6/4-scope-of-variables" },
    },
    {
      question: "Does an if statement or a for loop create a new scope?",
      answer:
        "No. In Python only modules, functions and classes create scopes, and comprehensions run in their own nested scope. A variable assigned inside an if block or a loop belongs to the enclosing function, and a for loop's variable still exists after the loop with its last value. Comprehension variables, however, do not leak out in Python 3.",
      code: `for i in range(3):
    pass
print(i)          # -> 2
squares = [n * n for n in range(3)]
print("n" in dir())   # -> False`,
      followUps: ["What happens to the loop variable if the loop body never runs?"],
      source: { title: "Python Language Reference — Displays for lists, sets and dictionaries (comprehension scope)", url: "https://docs.python.org/3/reference/expressions.html#displays-for-lists-sets-and-dictionaries" },
    },
    {
      question: "What is shadowing, and why is shadowing a built-in a problem?",
      answer:
        "Shadowing happens when a name in an inner scope hides the same name in an outer scope. Naming a variable list, str, sum or max hides the built-in function for the rest of that scope, so a later call such as list(...) fails with a confusing TypeError. Choose descriptive names such as items or total instead.",
      code: `def broken(values):
    sum = 0
    for v in values:
        sum += v
    return sum(values)    # sum is now an int

try:
    broken([1, 2])
except TypeError as error:
    print(error)   # -> 'int' object is not callable`,
      followUps: ["How could a linter help you catch this?"],
      source: { title: "Ruff — builtin-variable-shadowing (A001)", url: "https://docs.astral.sh/ruff/rules/builtin-variable-shadowing/" },
    },
  ],
  mistakes: [
    "Updating a global counter inside a function without declaring it, causing UnboundLocalError.",
    "Using global to share state between functions instead of passing values.",
    "Naming variables after built-ins such as list, dict, str, sum, max or input.",
    "Expecting a variable created inside an if block or loop to disappear afterwards.",
    "Using nonlocal or global just to mutate a list, where neither is needed.",
  ],
  mastery: [
    "You predict the output of the snippets on this page, including the tutorial's scope_test example, before running them.",
    "You can explain why UnboundLocalError occurs and fix it without reaching for global.",
    "You can say when global and nonlocal are needed (rebinding) and when they are not (reading or mutating).",
    "Your own functions take inputs as parameters and return results instead of changing globals.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: ["Closure implementation details, class scope edge cases and interpreter internals."],
  keywords: [
    "scope",
    "LEGB",
    "local",
    "enclosing",
    "global",
    "built-in",
    "nonlocal",
    "namespace",
    "shadowing",
    "NameError",
    "UnboundLocalError",
    "closure",
  ],
};

export default topic;
