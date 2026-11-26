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
    "Explain local and global scope, and that assigning to a name inside a function makes it local.",
    "Apply the LEGB rule to predict which object a name refers to, including in nested functions.",
    "Explain why UnboundLocalError occurs and fix it.",
    "Use global and nonlocal correctly, and explain why passing values and returning results is usually better.",
    "Recognize and avoid shadowing, especially of built-in names.",
    "Explain that if, for and while blocks do not create a new scope, while comprehensions do.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Think Python — 3.5 Variables and parameters are local",
      url: "https://allendowney.github.io/ThinkPython/chap03.html#variables-and-parameters-are-local",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written introduction. Read section 3.5 on local variables and parameters. For LEGB, global, nonlocal and name resolution, use the references below.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Introductory video only. The lecture briefly introduces local scope while discussing functions. It does not cover LEGB, global or nonlocal; use the written references below for those.",
    },
    {
      title: "Python Programming FAQ — What are the rules for local and global variables?",
      url: "https://docs.python.org/3/faq/programming.html#what-are-the-rules-for-local-and-global-variables-in-python",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Short official answers. Read this entry and the one just before it, on why UnboundLocalError occurs.",
    },
    {
      title: "The Python Tutorial — Python Scopes and Namespaces",
      url: "https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Written reference with a worked example of local, nonlocal and global assignment. Read only this section; the rest of the page covers classes.",
    },
    {
      title: "The Python Language Reference — Naming and binding",
      url: "https://docs.python.org/3/reference/executionmodel.html#naming-and-binding",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Optional formal reference for name resolution, global and nonlocal. Use it only to settle a specific question.",
    },
  ],
  exercises: [
    { title: "Predict the output of functions whose local variables share names with global variables, then check them." },
    { title: "Identify and fix an UnboundLocalError in a function that updates a counter." },
    {
      title: "Replace a global counter with explicit parameters and return values.",
      note: "Then write a test for the function, and note how much easier it is without global state.",
    },
    { title: "Implement a nested function that updates an enclosing variable using nonlocal." },
    { title: "Find and fix a bug caused by a variable named list or sum." },
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
    },
    {
      question: "Why should you avoid unnecessary global state?",
      answer:
        "Functions that read or change globals have hidden inputs and outputs: you cannot understand or test them from their signature, the order of calls changes results, and tests can interfere with each other. Passing values as parameters and returning results makes behavior explicit. Module-level constants that never change, such as MAX_RETRIES, are fine.",
      code: `TAX_RATE = 0.2            # constant: acceptable

def price_with_tax(price, rate=TAX_RATE):
    return round(price * (1 + rate), 2)

print(price_with_tax(10))   # -> 12.0`,
      followUps: ["How would global state cause problems in a web server handling many requests?"],
    },
    {
      question: "Does an if statement or a for loop create a new scope?",
      answer:
        "No. In Python only modules, functions and classes (and comprehensions) create scopes. A variable assigned inside an if block or a loop belongs to the enclosing function, and a for loop's variable still exists after the loop with its last value. Comprehension variables, however, do not leak out in Python 3.",
      code: `for i in range(3):
    pass
print(i)          # -> 2
squares = [n * n for n in range(3)]
print("n" in dir())   # -> False`,
      followUps: ["What happens to the loop variable if the loop body never runs?"],
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
    "Correctly trace name resolution through nested functions.",
    "Explain and fix UnboundLocalError and shadowing bugs.",
    "Write functions without unnecessary global state.",
    "Explain when global and nonlocal are needed, and when they are not.",
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
