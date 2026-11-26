import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-functions-arguments",
  title: "Functions and Arguments",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A function is a named, reusable block of code that takes inputs through parameters and returns a result. Interview answers are written as functions, and functions are the unit you test, review and reuse at work.",
  whyItMatters:
    "Nearly every coding interview answer is written as a function with a clear signature, and splitting a problem into small helper functions is one of the clearest signals of good engineering. Misunderstanding return values, default arguments or how arguments are shared causes common bugs that interviewers like to probe. At work, functions are the basic unit you test, review and reuse.",
  prerequisites: ["Variables and Data Types", "Conditional Statements", "Loops"],
  objectives: [
    "Defining and calling functions; parameters (names in the definition) versus arguments (values in the call).",
    "return hands a value to the caller; print only displays it. A function that reaches its end without return returns None.",
    "Positional, keyword and default arguments; parameters after a bare * are keyword-only.",
    "Default values are evaluated once, at definition time, so a mutable default ([] or {}) is shared between calls. Use None and create the object inside.",
    "*args collects extra positional arguments into a tuple and **kwargs extra keyword arguments into a dict; * and ** unpack in a call.",
    "Argument passing is by object reference (\"by assignment\"): mutating a passed list is visible to the caller; rebinding the parameter is not.",
    "Pure functions versus side effects; keep input and output separate from computation so the logic can be tested.",
    "Decomposing a problem into small, named helpers with a clear contract or one-line docstring.",
    "Skip for now: decorators, closures, functional programming techniques and positional-only parameters (/) beyond recognizing them.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Part 3: Defining functions",
      url: "https://programming-26.mooc.fi/part-3/4-defining-functions",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Read the whole section and do its exercises, then continue in Part 4 with \"More functions\" (parameters versus arguments, return values, the difference between return and print) and its exercises. Free; reading needs no account, submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "The Python Tutorial — 4.9 More on Defining Functions",
      url: "https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Read after the MOOC, not instead of it: the MOOC does not cover these. Read 4.9.1 Default Argument Values (including the shared mutable default warning), 4.9.2 Keyword Arguments, 4.9.4 Arbitrary Argument Lists and 4.9.5 Unpacking Argument Lists. 4.9.3 Special parameters is optional; skip 4.9.6 onwards.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions, Variables",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative to the MOOC sections. Watch the parts the notes title \"Strings and Parameters\", \"Def\" and \"Returning Values\". Free, no account needed.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Defining functions: The first character; Mean; Print many times; A square of hashes",
      url: "https://programming-26.mooc.fi/part-3/4-defining-functions",
      note: "Defining functions with parameters. Instructions are readable without an account; submitting requires a free MOOC.fi account.",
    },
    {
      title: "University of Helsinki, More functions: The greatest number; Same characters; First, second and last words",
      url: "https://programming-26.mooc.fi/part-4/2-more-functions",
      note: "Returning values instead of printing them. Free MOOC.fi account to submit.",
    },
    {
      title: "Two Fer (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/two-fer",
      note: "A default argument value; the tests call the function with and without a name. Solving needs a free Exercism account.",
    },
    {
      title: "Locomotive Engineer (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/locomotive-engineer",
      note: "Optional stretch: *args, **kwargs and unpacking. It uses lists and dictionaries, so it fits best after those topics. Free Exercism account.",
    },
    {
      title: "Apply it to your own code: split one script you have written into small functions, with input and output kept out of the computation.",
      note: "Call the computation from a few test lines without typing input. No suitable external exercise was found for this skill.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between a parameter and an argument?",
      answer:
        "A parameter is the name in the function definition; an argument is the actual value passed in a call. In def area(width, height), width and height are parameters; in area(3, 4), 3 and 4 are arguments. When the call runs, each parameter becomes a local name bound to its argument's object.",
      code: `def area(width, height):     # parameters
    return width * height

print(area(3, height=4))      # arguments: 3 and 4  # -> 12`,
      followUps: ["What happens if you pass the wrong number of arguments?"],
      source: { title: "Python Programming FAQ — What is the difference between arguments and parameters?", url: "https://docs.python.org/3/faq/programming.html#what-is-the-difference-between-arguments-and-parameters" },
    },
    {
      question: "What is the difference between print and return? What does a function without return give back?",
      answer:
        "print writes text to the output for a human to read; return hands a value back to the caller so the program can use it. A function that only prints returns None, which causes bugs when the caller tries to use the result. Interview solutions should return results unless the problem explicitly asks you to print.",
      code: `def show_total(a, b):
    print(a + b)

def total(a, b):
    return a + b

result = show_total(2, 3)   # -> 5
print(result)               # -> None
print(total(2, 3) * 10)     # -> 50`,
      followUps: ["Can a function return more than one value?"],
      source: { title: "Python Programming MOOC — The difference between return and print", url: "https://programming-26.mooc.fi/part-4/2-more-functions#the-difference-between-return-and-print" },
    },
    {
      question: "How do positional and keyword arguments differ?",
      answer:
        "Positional arguments are matched to parameters by order; keyword arguments are matched by name, so their order does not matter and calls are easier to read. In a call, positional arguments must come before keyword arguments. Parameters after a bare * in the definition are keyword-only, which forces callers to name options such as flags.",
      code: `def connect(host, port=5432, *, timeout=10):
    return f"{host}:{port} (timeout {timeout}s)"

print(connect("db", 6543))             # -> db:6543 (timeout 10s)
print(connect(port=1, host="local"))   # -> local:1 (timeout 10s)
print(connect("db", timeout=3))        # -> db:5432 (timeout 3s)`,
      followUps: ["Why might keyword-only parameters make an API safer?"],
      source: { title: "The Python Tutorial — 4.9.2 Keyword Arguments", url: "https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments" },
    },
    {
      question: "Why are mutable default arguments dangerous?",
      answer:
        "Default values are evaluated once, when the function is defined, not on every call. A mutable default such as [] or {} is therefore one shared object, and changes made in one call appear in later calls. Use None as the default and create a new object inside the function.",
      code: `def add_bad(item, items=[]):
    items.append(item)
    return items

print(add_bad("a"))   # -> ['a']
print(add_bad("b"))   # -> ['a', 'b']

def add(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add("a"), add("b"))   # -> ['a'] ['b']`,
      followUps: ["Is there ever a legitimate use for a shared mutable default?"],
      source: { title: "Python Programming FAQ — Why are default values shared between objects?", url: "https://docs.python.org/3/faq/programming.html#why-are-default-values-shared-between-objects" },
    },
    {
      question: "What are *args and **kwargs?",
      answer:
        "In a definition, *args collects extra positional arguments into a tuple and **kwargs collects extra keyword arguments into a dictionary; the names are conventions. In a call, * unpacks a sequence into positional arguments and ** unpacks a dictionary into keyword arguments. They are useful for flexible functions and for passing arguments through to another function, but explicit parameters are clearer when you know what you need.",
      code: `def report(*args, **kwargs):
    return args, kwargs

print(report(1, 2, unit="ms"))   # -> ((1, 2), {'unit': 'ms'})
values = [3, 4]
print(max(*values, 10))          # -> 10`,
      followUps: ["In what order must regular, *args, keyword-only and **kwargs parameters appear?"],
      source: { title: "The Python Tutorial — 4.9.4 Arbitrary Argument Lists", url: "https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists" },
    },
    {
      question: "Does Python pass arguments by value or by reference?",
      answer:
        "Neither exactly: Python passes references to objects, often called call by object reference or call by sharing. The parameter and the caller's variable refer to the same object. If the function mutates a mutable object, the caller sees the change. If the function rebinds the parameter to a new object, the caller's variable is unaffected.",
      code: `def mutate(items):
    items.append(99)       # changes the shared list

def rebind(items):
    items = [0]            # only changes the local name

data = [1]
mutate(data)
rebind(data)
print(data)                # -> [1, 99]`,
      followUps: ["How would you write a function that must not change its caller's list?"],
      source: { title: "Python Programming FAQ — How do I write a function with output parameters (call by reference)?", url: "https://docs.python.org/3/faq/programming.html#how-do-i-write-a-function-with-output-parameters-call-by-reference" },
    },
    {
      question: "What is a side effect, and why do pure functions matter?",
      answer:
        "A side effect is anything a function does besides returning a value: printing, writing files, changing a global or mutating an argument. A pure function's result depends only on its inputs and it changes nothing else, which makes it easy to test and reason about. Real programs need side effects, so keep them at the edges and the core logic pure.",
      code: `def apply_discount(prices, rate):        # pure: returns a new list
    return [round(p * (1 - rate), 2) for p in prices]

prices = [10.0, 20.0]
print(apply_discount(prices, 0.1))   # -> [9.0, 18.0]
print(prices)                        # -> [10.0, 20.0]`,
      followUps: ["How does separating input and output from logic help testing?"],
      source: { title: "Python Docs — Functional Programming HOWTO: Introduction", url: "https://docs.python.org/3/howto/functional.html#introduction" },
    },
    {
      question: "How would you structure a solution into functions during a coding interview?",
      answer:
        "Write the main function with a clear signature first, then extract a helper when a step has its own purpose, such as normalizing input, checking validity or processing one item. Name helpers after what they do, keep each short, and state your assumptions about inputs. Helpers make your explanation clearer and let you test pieces separately; avoid extracting trivial one-line steps.",
      followUps: ["When does adding helper functions make code harder to follow?"],
    },
  ],
  mistakes: [
    "Printing a result instead of returning it, then using the None that comes back.",
    "Using a list or dictionary as a default argument value.",
    "Mutating an argument the caller did not expect to change.",
    "Forgetting a return statement on one branch, so that branch returns None.",
    "Writing one long function that mixes input, computation and output.",
    "Relying on global variables instead of passing parameters.",
  ],
  mastery: [
    "You complete the MOOC function exercises and Two Fer without help, returning results rather than printing them.",
    "Without running them, you predict the output of the mutable-default and mutate-versus-rebind snippets in the interview questions, and fix the mutable default with None.",
    "You can translate a problem statement into a function with appropriate parameters, defaults and return value, and split a small program into testable helpers.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "Writing decorators, complex closures and functional programming techniques.",
    "Positional-only parameters (/) beyond recognizing them in documentation.",
    "Lambda expressions beyond short key functions, which are covered in Sorting and Custom Sort Keys.",
  ],
  keywords: [
    "functions",
    "def",
    "parameters",
    "arguments",
    "return",
    "default arguments",
    "keyword arguments",
    "args",
    "kwargs",
    "side effects",
    "pure functions",
    "mutable defaults",
    "pass by reference",
    "call by sharing",
  ],
};

export default topic;
