import type { Topic } from "../types";

const topic: Topic = {
  slug: "classes-objects",
  title: "Classes and Objects",
  category: "Object-Oriented Design",
  phase: "object-oriented-programming-and-design",
  overview:
    "A class bundles data (attributes) with the methods that keep it valid; an object is one instance with its own state. You will read, extend and test classes in almost every codebase, and interviewers probe how Python classes actually behave.",
  whyItMatters:
    "Most real codebases organize logic into classes, and entry-level engineers read, extend and test them daily. Object-oriented concepts are a commonly recommended interview topic, and some employers run object-oriented or low-level design rounds (Amazon's official interview topics include object-oriented design). Interviewers often probe Python-specific behavior, such as shared class attributes or what \"private\" really means, to check that you understand the code you write.",
  prerequisites: ["Functions and Arguments", "Mutability, References and Copying", "Dictionaries"],
  objectives: [
    "Define a class with __init__, attributes and methods; create objects and explain what self refers to.",
    "Distinguish instance attributes (set on self, one per object) from class attributes (shared); lookup checks the instance first, then the class.",
    "Avoid the shared mutable class attribute pitfall: per-object lists and dictionaries belong in __init__.",
    "Choose between instance methods, class methods (receive cls; typical use: alternative constructors) and static methods (receive neither).",
    "Keep state valid: validate in __init__ and methods and raise exceptions for invalid operations.",
    "Explain encapsulation and abstraction, and Python's conventions: _name means internal, __name triggers name mangling, and neither is access control.",
    "Use @property for computed, validated or read-only attributes without changing the public interface.",
    "Distinguish identity (is) from equality (==); know that defining __eq__ without __hash__ makes instances unhashable.",
    "Explain that __new__ creates an instance and __init__ initializes it.",
    "Skip for now: metaclasses, descriptors, __slots__ and most special methods beyond __init__, __str__/__repr__, __eq__ and __hash__.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Python Programming MOOC — Part 8 and Part 9 (object-oriented programming)",
      url: "https://programming-26.mooc.fi/part-8",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Complete Part 8 sections 2 Classes and objects, 3 Defining classes, 4 Defining methods and 5 More examples of classes, then Part 9 sections 1 Objects and references, 3 Encapsulation (private attributes, getters and setters with @property) and 5 Class attributes (class variables and class methods). Skip 8.1 if you already use built-in objects comfortably; 9.2, 9.4 and 9.6 are useful but optional here (9.2 and 9.6 return in the next topic). The course does not cover static methods, __hash__ or __new__: use the references below for those. Reading is free without an account; submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lecture 8: Object-Oriented Programming",
      url: "https://cs50.harvard.edu/python/weeks/8/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative to the MOOC. Watch from the start through classes, raise, properties (the \"decorators\" segment), class methods and static methods; stop at inheritance, which is the next topic. Written lecture notes with the same headings are linked from the page. Free, no account.",
    },
    {
      title: "The Python Tutorial — 9.3 A First Look at Classes, 9.4 Random Remarks, 9.6 Private Variables",
      url: "https://docs.python.org/3/tutorial/classes.html#a-first-look-at-classes",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for exact behavior. 9.3.5 Class and Instance Variables shows the shared-list mistake; 9.6 explains the underscore convention and name mangling. Skip 9.5 (next topic) and 9.8–9.10 (iterators and generators).",
    },
    {
      title: "Python Language Reference — 3.3.1 Basic customization (__new__, __init__, __eq__, __hash__)",
      url: "https://docs.python.org/3/reference/datamodel.html#basic-customization",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference only. Read the entries for object.__new__, object.__init__, object.__eq__ and object.__hash__; skip the rest of the data model.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Part 8.5: LunchCard",
      url: "https://programming-26.mooc.fi/part-8/5-more-examples-of-classes",
      note: "A class whose methods keep its state valid (balance cannot go negative). Instructions are readable without an account; submitting requires a free MOOC.fi account.",
    },
    {
      title: "University of Helsinki, Part 9.3: Recording; Weather station",
      url: "https://programming-26.mooc.fi/part-9/3-encapsulation",
      note: "Recording: a private attribute behind a property whose setter raises ValueError. Weather station: state fully hidden behind a fixed public interface. Free account to submit.",
    },
    {
      title: "University of Helsinki, Part 9.5: Postcodes; List helper",
      url: "https://programming-26.mooc.fi/part-9/5-class-attributes",
      note: "A class variable shared by all instances, and methods callable without an instance. After List helper, explain whether a class method or a static method fits better. Free account to submit.",
    },
    {
      title: "University of Helsinki, Part 10.3: Money",
      url: "https://programming-26.mooc.fi/part-10/3-oo-programming-techniques",
      note: "Value equality with __eq__, operators that return new objects, a ValueError for invalid results and hidden attributes. Afterwards, add __hash__ consistent with __eq__ and use Money objects as dictionary keys. Free account to submit.",
    },
    {
      title: "Design Parking System (LeetCode)",
      url: "https://leetcode.com/problems/design-parking-system/",
      note: "Easy. A first \"design a class\" problem: choose the state to keep and validate each operation. LeetCode needs a free account to submit.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between a class and an object?",
      answer:
        "A class is a definition: it describes what data its objects hold and what operations they support. An object is a concrete instance created from the class, with its own state; many objects can share one class while holding different data. A good class keeps its state valid through its methods, for example by rejecting a negative deposit.",
      followUps: ["Where should validation live: in the caller or in the class?"],
      source: { title: "The Python Tutorial — 9.3 A First Look at Classes", url: "https://docs.python.org/3/tutorial/classes.html#a-first-look-at-classes" },
    },
    {
      question: "What is the difference between instance attributes and class attributes? What is the mutable class attribute pitfall?",
      answer:
        "Instance attributes are set on self and belong to one object. Class attributes are defined in the class body and shared by all instances; reading an attribute checks the instance first, then the class. Assigning through an instance creates an instance attribute, but mutating a shared mutable class attribute, such as a list, changes it for every instance. Create per-object mutable state in __init__.",
      code: `class Team:
    members = []                 # shared by every Team: usually a bug

    def add(self, name):
        self.members.append(name)

a, b = Team(), Team()
a.add("Ana")
print(b.members)                 # -> ['Ana']`,
      followUps: ["When is a class attribute the right choice? (Constants and genuinely shared configuration.)"],
      source: { title: "The Python Tutorial — 9.3.5 Class and Instance Variables", url: "https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables" },
    },
    {
      question: "What are instance methods, class methods and static methods? What are self and cls?",
      answer:
        "An instance method receives the object as its first parameter, conventionally self, and works with that object's state. A class method (@classmethod) receives the class, conventionally cls, and is commonly used for alternative constructors such as Temperature.from_fahrenheit(212). A static method (@staticmethod) receives neither; it is a plain function grouped with the class because it belongs there logically. self and cls are naming conventions, not keywords: Python passes the object or class automatically.",
      followUps: ["Why does a class method call cls(...) instead of the class name directly? (Subclasses then get instances of themselves.)"],
      source: { title: "Python Docs — Built-in functions: classmethod", url: "https://docs.python.org/3/library/functions.html#classmethod" },
    },
    {
      question: "What are encapsulation and abstraction, and how does Python handle private attributes?",
      answer:
        "Encapsulation keeps an object's data together with the code that maintains it and steers other code to use methods rather than change data directly. Abstraction exposes a simple interface and hides how it works. Python has no enforced private members: _balance is a convention meaning \"internal\"; __balance triggers name mangling to _ClassName__balance, which avoids accidental clashes in subclasses but does not prevent access.",
      code: `class Account:
    def __init__(self):
        self.__balance = 0           # name-mangled, still reachable

acct = Account()
print(hasattr(acct, "__balance"), acct._Account__balance)   # -> False 0`,
      followUps: ["How does this compare with private members in Java or C++?"],
      source: { title: "The Python Tutorial — 9.6 Private Variables", url: "https://docs.python.org/3/tutorial/classes.html#private-variables" },
    },
    {
      question: "What is a property, and when would you use one?",
      answer:
        "A property makes attribute-style access (r.width, r.width = 5) call methods, so you can compute a value, validate assignments or make an attribute read-only without changing how callers use the object. Start with plain attributes and switch to a property when you need one of those; there is no need for Java-style getters and setters for every attribute. Assigning to a property without a setter raises AttributeError.",
      followUps: ["What happens if you assign to a read-only property?"],
      source: { title: "Python Docs — Built-in functions: property", url: "https://docs.python.org/3/library/functions.html#property" },
    },
    {
      question: "How do identity and equality work for objects? What happens to hashing if you define __eq__?",
      answer:
        "By default, == on custom objects compares identity, the same as is. Define __eq__ to compare values. A class that defines __eq__ without __hash__ gets __hash__ set to None, so its instances are unhashable, because equal objects must have equal hashes. If instances are effectively immutable and should work as dictionary keys or set members, define __hash__ from the same fields used by __eq__.",
      code: `class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __eq__(self, other):
        return isinstance(other, Point) and (self.x, self.y) == (other.x, other.y)

    def __hash__(self):
        return hash((self.x, self.y))

p, q = Point(1, 2), Point(1, 2)
print(p == q, p is q, len({p, q}))   # -> True False 1`,
      followUps: ["Why is it risky to make mutable objects hashable?"],
      source: { title: "Python Language Reference — object.__hash__", url: "https://docs.python.org/3/reference/datamodel.html#object.__hash__" },
    },
    {
      question: "What is the difference between __new__ and __init__?",
      answer:
        "__new__ creates and returns the new instance; __init__ then initializes that instance's state and returns None. Python calls them in that order when you call the class. You almost always write only __init__; overriding __new__ is mainly for subclassing immutable types such as int, str or tuple, or for controlling instance creation.",
      followUps: ["Why can't __init__ change the value of an immutable object such as an int?"],
      source: { title: "Python Language Reference — object.__new__", url: "https://docs.python.org/3/reference/datamodel.html#object.__new__" },
    },
    {
      question: "What are the four pillars of object-oriented programming?",
      answer:
        "Encapsulation (keeping data with the code that maintains it), abstraction (exposing a simple interface and hiding details), inheritance (defining a class as a specialization of another) and polymorphism (different classes responding to the same call in their own way, such as shape.area() on a Square and a Circle). Have a one-line example ready for each. Worth adding: inheritance is not the only way to reuse code, and composition is often the more flexible choice.",
      followUps: ["Which of the four do you rely on most in everyday code, and why?"],
      source: { title: "MDN — Object-oriented programming", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming" },
    },
  ],
  mistakes: [
    "Putting mutable defaults or per-object lists in the class body instead of __init__.",
    "Forgetting self in a method definition or when accessing attributes.",
    "Treating _name or __name as real security or access control.",
    "Writing getters and setters for every attribute instead of starting with plain attributes.",
    "Defining __eq__ and then being surprised that instances are no longer hashable.",
    "Allowing invalid state (negative balances, empty names) because nothing validates it.",
    "Making everything a class when a function would do.",
  ],
  mastery: [
    "You complete LunchCard, Recording, List helper and Money without help, and add a consistent __hash__ to Money.",
    "You can explain classes, objects, self, class versus instance attributes and the three method types aloud without notes.",
    "You can predict the output of code involving a shared mutable class attribute and name mangling.",
    "You can implement a class that keeps its state valid and test both valid and invalid operations.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "Metaclasses, descriptors and the attribute lookup protocol in detail.",
    "__slots__, weak references and memory layout.",
    "Most special methods beyond __init__, __repr__, __eq__ and __hash__.",
  ],
  keywords: [
    "class",
    "object",
    "OOP",
    "self",
    "cls",
    "__init__",
    "__new__",
    "class attribute",
    "instance attribute",
    "classmethod",
    "staticmethod",
    "property",
    "encapsulation",
    "abstraction",
    "name mangling",
    "__eq__",
    "four pillars",
  ],
};

export default topic;
