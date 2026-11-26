import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-functions-arguments",
  title: "Functions and Arguments",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A function is a named, reusable block of code that receives inputs through parameters and can return a result. Python supports positional, keyword, default and variable-length arguments.",
  whyItMatters:
    "Functions are the main unit of code organization and reuse. Well-designed functions make programs easier to test, understand and change, and nearly every coding interview solution is written as a function.",
  prerequisites: ["Variables and Data Types", "Conditional Statements", "Loops"],
  objectives: [
    "Define and call functions.",
    "Distinguish parameters and arguments.",
    "Understand return values and implicit None.",
    "Distinguish returning from printing.",
    "Use positional and keyword arguments.",
    "Use default parameter values.",
    "Understand *args and **kwargs.",
    "Recognize mutable default argument pitfalls.",
    "Decompose problems into reusable functions.",
    "Understand side effects and basic pure functions.",
    "Explain Python's object-sharing argument behavior.",
    "Write clear function contracts and docstrings.",
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
      title: "The Python Tutorial — Defining Functions",
      url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for function definitions, docstrings and return values.",
    },
    {
      title: "The Python Tutorial — More on Defining Functions",
      url: "https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for default values (including the mutable default warning), keyword arguments, *args and **kwargs.",
    },
  ],
  exercises: [
    {
      title:
        "University of Helsinki, Defining functions: The first character; Mean; Print many times; A square of hashes. Instructions are readable without an account; submitting requires logging in.",
      url: "https://programming-26.mooc.fi/part-3/4-defining-functions",
    },
    { title: "Write a function that returns whether a number is even." },
    { title: "Write a function that calculates a final price with optional discount and tax arguments." },
    { title: "Refactor repetitive code into small reusable functions." },
    { title: "Implement a function accepting a variable number of numeric arguments." },
    { title: "Diagnose and repair a mutable default argument bug." },
    { title: "Separate input/output operations from computation in a small program." },
  ],
  interviewQuestions: [
    "What is the difference between an argument and a parameter?",
    "What is the difference between print and return?",
    "What happens if a function has no explicit return statement?",
    "How do positional and keyword arguments differ?",
    "What are *args and **kwargs?",
    "Why are mutable default arguments dangerous?",
    "Does Python pass arguments by value or by reference?",
    "What is a side effect?",
  ],
  mastery: [
    "Translate problem statements into well-defined functions.",
    "Select appropriate parameters and return values.",
    "Use default and keyword arguments correctly.",
    "Explain object-sharing semantics.",
    "Identify mutable default argument bugs.",
    "Independently decompose a small program into reusable functions.",
  ],
  deprioritize: ["Advanced decorators, complex closures and sophisticated functional programming techniques."],
  keywords: [
    "functions",
    "def",
    "parameters",
    "arguments",
    "return",
    "default arguments",
    "args",
    "kwargs",
    "side effects",
    "pure functions",
    "mutable defaults",
  ],
};

export default topic;
