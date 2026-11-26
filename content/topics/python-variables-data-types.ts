import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-variables-data-types",
  title: "Variables and Data Types",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Python variables are names bound to objects. Objects have types that determine their supported operations and behavior. Python uses dynamic typing, so a name can be rebound to objects of different types.",
  whyItMatters:
    "Every program stores and transforms data, and most beginner bugs come from a wrong assumption about a value's type: a number read as text, a missing value treated as zero, or a float compared exactly. In interviews you are rarely asked type trivia on its own, but you are expected to explain the values your code handles, including None, empty inputs and conversions. At work the same skills appear whenever you parse user input, configuration or API data.",
  prerequisites: ["None. This is the first Programming Fluency topic; you only need a way to run Python code."],
  objectives: [
    "Create and reassign variables, and explain that a variable is a name for an object.",
    "Use int, float, str, bool and None, and explain when each is appropriate.",
    "Inspect types with type() and isinstance(), and explain the difference.",
    "Convert values with int(), float(), str() and bool(), and predict which conversions fail.",
    "Explain truthiness and distinguish None, 0, False and the empty string.",
    "Explain why floating-point results such as 0.1 + 0.2 are not exact, and compare floats safely.",
    "Recognize which basic types are mutable and which are immutable.",
    "Follow readable naming conventions and avoid shadowing built-in names such as list or str.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — More about variables",
      url: "https://programming-26.mooc.fi/part-1/3-more-about-variables",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Written lesson. Focus on reassignment, integers and floating-point numbers. Converting input with int() is covered in the next lesson, Arithmetic operations.",
    },
    {
      title: "Think Python — 2.1 Variables",
      url: "https://allendowney.github.io/ThinkPython/chap02.html#variables",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative, part 1: variable assignment. Read sections 2.1–2.3 on variables, state diagrams and variable names.",
    },
    {
      title: "Think Python — 1.5 Values and types",
      url: "https://allendowney.github.io/ThinkPython/chap01.html#values-and-types",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative, part 2: types. Read section 1.5 on int, float and str, type(), and converting with int() and float().",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative. Focus on variables, the str, int and float types, and converting between them.",
    },
    {
      title: "Python Standard Library — Truth Value Testing",
      url: "https://docs.python.org/3/library/stdtypes.html#truth-value-testing",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Short reference listing exactly which values are false. Read this section only (a few minutes).",
    },
    {
      title: "Python Design FAQ — Why are floating-point calculations so inaccurate?",
      url: "https://docs.python.org/3/faq/design.html#why-are-floating-point-calculations-so-inaccurate",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Short official explanation of why 0.1 + 0.2 is not exactly 0.3. Read this answer only.",
    },
    {
      title: "Python Standard Library — Built-in Functions",
      url: "https://docs.python.org/3/library/functions.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for type conversion and type checking. Look up int(), float(), str(), bool(), type() and isinstance().",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, More about variables: Arithmetics; Fix the code: Print a single line",
      url: "https://programming-26.mooc.fi/part-1/3-more-about-variables",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    {
      title: "University of Helsinki, Arithmetic operations: Name and age",
      url: "https://programming-26.mooc.fi/part-1/4-arithmetic-operations",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    {
      title: "Predict the type and value of ten expressions involving int, float, str, bool and None.",
      note: "Code reading. Write your prediction first, then check each one in the interpreter and explain any surprise.",
    },
    {
      title: "Write a function that converts a numeric string into an integer and adds ten.",
      note: "Decide and document what happens for an empty string, surrounding spaces and a value such as \"4.5\".",
    },
    { title: "Write a temperature converter between Celsius and Fahrenheit, and test it with 0, 100, -40 and 37.5." },
    { title: "Repair a program containing mismatched string and integer operations." },
    {
      title: "Practical task: read an optional setting that may be missing (None), empty, or a number stored as text, and return a sensible integer default.",
      note: "Combines None checks, truthiness and conversion. State which inputs count as missing.",
    },
  ],
  interviewQuestions: [
    {
      question: "Is Python statically or dynamically typed?",
      answer:
        "Dynamically typed: types belong to objects, not to variable names, and are checked while the program runs. The same name can refer to an int and later to a str. Python is also strongly typed: it will not silently combine incompatible types, so adding a string and an integer raises a TypeError instead of guessing.",
      code: `x = 5
x = "five"           # allowed: the name now refers to a str
try:
    "1" + 1
except TypeError as error:
    print(type(error).__name__)   # -> TypeError`,
      followUps: [
        "What is the difference between dynamic typing and weak typing?",
        "Do type hints change how Python behaves at runtime?",
      ],
    },
    {
      question: "What is the difference between type() and isinstance()?",
      answer:
        "type(x) returns the exact class of an object. isinstance(x, cls) checks whether x is an instance of cls or of a subclass, and accepts a tuple of classes. Prefer isinstance for checks because it respects inheritance. A common surprise: bool is a subclass of int, so isinstance(True, int) is True.",
      code: `print(type(3) == int)            # -> True
print(isinstance(True, int))     # -> True
print(type(True) == int)         # -> False
print(isinstance(3.0, (int, float)))  # -> True`,
      followUps: ["When would checking the exact type be appropriate?"],
    },
    {
      question: "What is None, and how should you check for it?",
      answer:
        "None is a single special object that represents the absence of a value. A function without a return statement returns None. Check for it with `is None`, because there is only one None object and `is` cannot be fooled by objects that define their own equality. None is falsy, but it is not equal to 0, False or an empty string.",
      code: `def find(items, target):
    for item in items:
        if item == target:
            return item      # falls through and returns None if not found

result = find([1, 2, 3], 5)
print(result is None)   # -> True
print(None == 0)        # -> False`,
      followUps: ["Why might `if result:` be the wrong check when 0 is a valid result?"],
    },
    {
      question: "What is truthiness? Why does bool(\"False\") evaluate to True?",
      answer:
        "Every object can be used in a condition. False, None, numeric zero and empty containers (\"\", [], {}, set(), range(0)) are falsy; almost everything else is truthy. bool(\"False\") is True because it is a non-empty string; Python does not read the text. To parse text such as \"true\" or \"false\", compare the string explicitly.",
      code: `print(bool("False"))   # -> True
print(bool(""))        # -> False
print(bool([0]))       # -> True
print(bool(0.0))       # -> False`,
      followUps: ["When is `if items:` clearer than `if len(items) > 0:`, and when is it ambiguous?"],
    },
    {
      question: "Why is 0.1 + 0.2 not equal to 0.3, and how should you compare floats?",
      answer:
        "Floats are stored in binary, and most decimal fractions such as 0.1 cannot be represented exactly, so small rounding errors appear. Compare floats with a tolerance, for example math.isclose. Use integers (such as cents) or the decimal module when exact decimal arithmetic matters, as with money. Python integers, by contrast, have arbitrary precision and do not overflow.",
      code: `import math
print(0.1 + 0.2 == 0.3)              # -> False
print(math.isclose(0.1 + 0.2, 0.3))  # -> True
print(2 ** 100 > 10 ** 30)           # -> True`,
      followUps: ["How would you store prices in an application?"],
    },
    {
      question: "How do int(), float() and str() conversions behave, and what can go wrong?",
      answer:
        "int(\"42\") parses text into an integer and tolerates surrounding whitespace, but int(\"4.2\") raises ValueError because the text is not an integer literal. int(4.9) truncates toward zero, giving 4; use round() if you want rounding. Conversions fail loudly, so validate or handle ValueError when the input comes from users or files.",
      code: `print(int(" 42 "))   # -> 42
print(int(4.9))      # -> 4
print(int(-4.9))     # -> -4
try:
    int("4.2")
except ValueError as error:
    print(type(error).__name__)   # -> ValueError`,
      followUps: ["How would you convert \"4.2\" to an integer?", "What does round(2.5) return, and why might that surprise you?"],
    },
    {
      question: "Which built-in types are mutable and which are immutable?",
      answer:
        "int, float, bool, str, tuple and None are immutable: operations that seem to change them create new objects. list, dict and set are mutable: they can be changed in place, and every name referring to them sees the change. This matters for dictionary keys, default arguments and shared data; it is covered in depth in Mutability, References and Copying.",
      code: `s = "hi"
t = s
s += "!"          # creates a new string and rebinds s
print(t)          # -> hi

a = [1]
b = a
a.append(2)       # changes the one shared list
print(b)          # -> [1, 2]`,
      followUps: ["Is a tuple that contains a list immutable?"],
    },
  ],
  mistakes: [
    "Forgetting that input() and file reads return strings, then comparing or adding them as numbers.",
    "Writing `== None` instead of `is None`.",
    "Treating 0 or an empty string as missing when they are valid values.",
    "Comparing floats with == instead of a tolerance.",
    "Using type(x) == int and accidentally excluding subclasses, or forgetting that True counts as an int.",
    "Naming variables list, str, sum or input, which hides the built-in function for the rest of the scope.",
  ],
  mastery: [
    "Predict the type and value of short expressions without running them, and explain any you got wrong.",
    "Explain dynamic typing, None and truthiness aloud without notes.",
    "Convert user-style input safely, including empty, padded and invalid values.",
    "Diagnose and correct basic TypeError and ValueError problems.",
    "Answer the interview questions above in your own words, with an example for each.",
  ],
  deprioritize: [
    "Metaclasses, advanced object internals and detailed floating-point representation.",
    "Small-integer caching and string interning; they are implementation details.",
    "Detailed references, aliasing and copying. These are covered in Mutability, References and Copying.",
  ],
  keywords: [
    "variables",
    "assignment",
    "data types",
    "dynamic typing",
    "int",
    "float",
    "bool",
    "None",
    "type conversion",
    "casting",
    "truthiness",
    "isinstance",
    "floating point",
  ],
};

export default topic;
