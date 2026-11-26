import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-functions-arguments",
  title: "Functions and Arguments",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A function is a named, reusable block of code that receives inputs through parameters and can return a result. Python supports positional, keyword, default and variable-length arguments, and passes every argument as a reference to an object.",
  whyItMatters:
    "Nearly every coding interview answer is written as a function with a clear signature, and splitting a problem into small helper functions is one of the clearest signals of good engineering. Misunderstanding return values, default arguments or how arguments are shared causes common bugs that interviewers like to probe. At work, functions are the basic unit you test, review and reuse.",
  prerequisites: ["Variables and Data Types", "Conditional Statements", "Loops"],
  objectives: [
    "Define and call functions, and distinguish parameters from arguments.",
    "Return values deliberately, and explain implicit None and the difference between returning and printing.",
    "Use positional, keyword and default arguments, and recognize keyword-only parameters.",
    "Explain why mutable default values are shared between calls, and use None as a safe default.",
    "Use *args and **kwargs to accept, and * and ** to unpack, variable numbers of arguments.",
    "Explain Python's argument passing (call by object reference) and predict when a caller sees changes.",
    "Distinguish pure functions from functions with side effects, and keep input and output separate from computation.",
    "Decompose a problem into small, named, testable functions with a clear contract or docstring.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Think Python — Chapter 3: Functions",
      url: "https://allendowney.github.io/ThinkPython/chap03.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions: "Written. Read sections 3.1–3.3 and 3.8 on defining functions, parameters, calling functions and why functions are useful.",
    },
    {
      title: "Think Python — Chapter 6: Return Values",
      url: "https://allendowney.github.io/ThinkPython/chap06.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions: "Written, continued. Read sections 6.1–6.5 on return values, None and Boolean functions. Skip the recursion sections.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative. Focus on functions, parameters, arguments, return values and side effects.",
    },
    {
      title: "The Python Tutorial — More on Defining Functions",
      url: "https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for default values (including the mutable default warning), keyword arguments, *args and **kwargs. Special parameters (/ and *) are optional reading.",
    },
    {
      title: "Python Programming FAQ — Why are default values shared between objects?",
      url: "https://docs.python.org/3/faq/programming.html#why-are-default-values-shared-between-objects",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Official explanation of the mutable default pitfall. The neighbouring answers on arguments versus parameters and on output parameters are also worth reading.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Defining functions: The first character; Mean; Print many times; A square of hashes",
      url: "https://programming-26.mooc.fi/part-3/4-defining-functions",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    { title: "Write a function that calculates a final price with optional discount and tax keyword arguments, and test the defaults." },
    { title: "Refactor a 40-line script with repeated code into small functions, each with a one-line docstring." },
    { title: "Implement a function that accepts any number of numbers and returns their mean, deciding what happens with none." },
    {
      title: "Diagnose and repair a mutable default argument bug.",
      note: "Debugging. Predict the output of three calls before running, then fix it with a None default.",
    },
    {
      title: "Write two versions of a function that removes negative numbers: one that returns a new list and one that modifies the list in place.",
      note: "Explain which one you would choose for a shared list and why. Reinforces mutability.",
    },
    { title: "Separate input and output from computation in a small program so that the computation can be tested without typing input." },
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
    },
    {
      question: "How would you structure a solution into functions during a coding interview?",
      answer:
        "Write the main function with a clear signature first, then extract a helper when a step has its own purpose, such as normalizing input, checking validity or processing one item. Name helpers after what they do, keep each short, and state your assumptions about inputs. Helpers make your explanation clearer and let you test pieces separately; avoid extracting trivial one-line steps.",
      code: `def normalize(word):
    return "".join(ch for ch in word.lower() if ch.isalnum())

def is_palindrome(text):
    cleaned = normalize(text)
    return cleaned == cleaned[::-1]

print(is_palindrome("Race car!"))   # -> True`,
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
    "Translate a problem statement into a function with appropriate parameters and return value.",
    "Use default and keyword arguments correctly, including a safe None default.",
    "Predict whether a caller sees changes made inside a function, and explain why.",
    "Decompose a small program into reusable, testable functions.",
    "Answer the interview questions above aloud with your own examples.",
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
