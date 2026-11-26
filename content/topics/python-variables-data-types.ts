import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-variables-data-types",
  title: "Variables and Data Types",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A variable is a name bound to an object, and every object has a type (int, float, str, bool, None) that decides what you can do with it. Wrong assumptions about types and missing values cause many beginner bugs, in interviews and at work.",
  whyItMatters:
    "Every program stores and transforms data, and most beginner bugs come from a wrong assumption about a value's type: a number read as text, a missing value treated as zero, or a float compared exactly. In interviews you are rarely asked type trivia on its own, but you are expected to explain the values your code handles, including None, empty inputs and conversions. At work the same skills appear whenever you parse user input, configuration or API data.",
  prerequisites: ["None. This is the first Programming Fluency topic; you only need a way to run Python code."],
  objectives: [
    "Assignment binds a name to an object; reassigning rebinds the name. Types belong to objects, not names (dynamic typing), and incompatible types are not silently combined (strong typing).",
    "The basic types int, float, str, bool and None, and when each is appropriate. Python ints have arbitrary precision; bool is a subclass of int.",
    "type() returns the exact class; isinstance() also accepts subclasses and a tuple of classes.",
    "Conversions with int(), float(), str() and bool(): int() truncates floats toward zero and raises ValueError for text such as \"4.2\"; input() always returns a string.",
    "Truthiness: None, False, numeric zero and empty containers are falsy; None is not equal to 0, False or \"\". Check for None with `is None`.",
    "Floats are binary approximations: 0.1 + 0.2 != 0.3. Compare with math.isclose; use integers or decimal for exact money values.",
    "Which basic types are immutable (int, float, bool, str, tuple, None) and which are mutable (list, dict, set).",
    "Naming: readable snake_case names; never shadow built-ins such as list, str or input.",
    "Skip for now: floating-point bit layout, small-integer caching, string interning and object internals.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Part 1: More about variables",
      url: "https://programming-26.mooc.fi/part-1/3-more-about-variables",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Read the whole section (reassignment, naming, integers, f-strings, floating-point numbers) and do its exercises. Then read \"Numbers as input\" in the next section, Arithmetic operations, for converting input with int() and float(). Free; reading needs no account, submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions, Variables",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative to the MOOC section, not an addition. In the lecture, watch the parts the notes title \"Integers or int\", \"Readability Wins\", \"Float Basics\" and \"More on Floats\". Free, no account needed.",
    },
    {
      title: "Python Standard Library — Truth Value Testing",
      url: "https://docs.python.org/3/library/stdtypes.html#truth-value-testing",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference: the exact list of falsy values, which the MOOC does not cover. Read this short section only.",
    },
    {
      title: "The Python Tutorial — 15. Floating-Point Arithmetic: Issues and Limitations",
      url: "https://docs.python.org/3/tutorial/floatingpoint.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for why 0.1 + 0.2 is not 0.3 and how to compare floats (math.isclose) or use the decimal module. Read the main part; skip 15.1 Representation Error.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, More about variables: Arithmetics; Fix the code: Print a single line",
      url: "https://programming-26.mooc.fi/part-1/3-more-about-variables",
      note: "Assigning and combining int and str values in output. Instructions are readable without an account; submitting requires a free MOOC.fi account.",
    },
    {
      title: "University of Helsinki, Arithmetic operations: Name and age",
      url: "https://programming-26.mooc.fi/part-1/4-arithmetic-operations",
      note: "Converting text input to a number before calculating. Submitting requires a free MOOC.fi account.",
    },
    {
      title: "Guido's Gorgeous Lasagna (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/guidos-gorgeous-lasagna",
      note: "Constants, variables and simple arithmetic with automated tests. Instructions are readable without an account; solving in the online editor or CLI needs a free Exercism account.",
    },
    {
      title: "Apply it to your own code: review every int() or float() conversion of input in a script you have written.",
      note: "Decide and handle what happens for \"\", \" 42 \", \"4.5\" and None. No external exercise covers missing-value handling at this level.",
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
      source: { title: "Python Language Reference — Objects, values and types", url: "https://docs.python.org/3/reference/datamodel.html#objects-values-and-types" },
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
      source: { title: "Python Docs — Built-in functions: isinstance()", url: "https://docs.python.org/3/library/functions.html#isinstance" },
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
      source: { title: "PEP 8 — Programming Recommendations (comparisons to None)", url: "https://peps.python.org/pep-0008/#programming-recommendations" },
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
      source: { title: "Python Docs — Truth Value Testing", url: "https://docs.python.org/3/library/stdtypes.html#truth-value-testing" },
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
      source: { title: "The Python Tutorial — Floating-Point Arithmetic: Issues and Limitations", url: "https://docs.python.org/3/tutorial/floatingpoint.html" },
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
      source: { title: "Python Docs — Built-in functions: int()", url: "https://docs.python.org/3/library/functions.html#int" },
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
      source: { title: "Python Language Reference — Objects, values and types", url: "https://docs.python.org/3/reference/datamodel.html#objects-values-and-types" },
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
    "You complete the MOOC and Exercism exercises above without help.",
    "Without running them, you predict the type and value of the snippets in the interview questions (truthiness, float addition, int() conversions, isinstance(True, int)) and explain any you got wrong.",
    "You can explain dynamic versus strong typing, None and truthiness aloud without notes.",
    "You can convert user-style input safely, handling empty, padded and invalid values, and fix basic TypeError and ValueError problems.",
    "Skip this topic if you can already do all of the above.",
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
