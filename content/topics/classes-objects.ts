import type { Topic } from "../types";

const topic: Topic = {
  slug: "classes-objects",
  title: "Classes and Objects",
  category: "Object-Oriented Design",
  phase: "object-oriented-programming-and-design",
  overview:
    "A class bundles data (attributes) with the behavior that operates on it (methods); an object is one instance of that class with its own state. This topic covers how Python classes actually work: initialization, instance and class attributes, the three kinds of methods, encapsulation conventions, properties, and identity versus equality.",
  whyItMatters:
    "Most real codebases organize logic into classes, and entry-level engineers read, extend and test them daily. Object-oriented concepts are a commonly recommended interview topic, and some employers run object-oriented or low-level design rounds (Amazon's official interview topics include object-oriented design). Interviewers often probe Python-specific behavior, such as shared class attributes or what \"private\" really means, to check that you understand the code you write.",
  prerequisites: ["Functions and Arguments", "Mutability, References and Copying", "Dictionaries"],
  objectives: [
    "Define classes with __init__, attributes and methods, and create and use objects.",
    "Explain self, and distinguish instance attributes from class attributes.",
    "Avoid the mutable class attribute pitfall.",
    "Choose between instance methods, class methods (cls; alternative constructors) and static methods.",
    "Keep an object's state valid: validate in __init__ and methods, and raise exceptions for invalid operations.",
    "Explain encapsulation and abstraction, and Python's conventions: _name means internal, __name triggers name mangling, and neither is real access protection.",
    "Use properties for computed or validated attributes without changing the public interface.",
    "Distinguish identity (is) from equality (==), implement __eq__ when value equality is needed, and know its effect on hashing.",
    "Explain conceptually that __new__ creates an instance and __init__ initializes it.",
    "Test a class's valid and invalid operations.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Python Tutorial — Classes (9.3 A First Look at Classes to 9.6 Private Variables)",
      url: "https://docs.python.org/3/tutorial/classes.html#a-first-look-at-classes",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Written, primary. Read 9.3 (class definitions, objects, methods, class and instance variables), 9.4 Random Remarks and 9.6 Private Variables. Leave 9.5 Inheritance for the next topic; skip iterators and generators (9.8–9.10).",
    },
    {
      title: "Think Python — Chapters 14–16: Classes and Functions, Classes and Methods, Classes and Objects",
      url: "https://allendowney.github.io/ThinkPython/chap14.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions: "Written alternative with worked examples. Read chapters 14–16; skim the sections on pure functions versus modifiers if they repeat Programming Fluency.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lecture 8: Object-Oriented Programming",
      url: "https://cs50.harvard.edu/python/weeks/8/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative covering classes, validation in __init__, properties, class methods and static methods. Inheritance at the end is covered in the next topic.",
    },
    {
      title: "Python Built-in Functions — property, classmethod, staticmethod",
      url: "https://docs.python.org/3/library/functions.html#property",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Look these up when you use them; the classmethod and staticmethod entries are on the same page.",
    },
  ],
  exercises: [
    {
      title: "Implement a BankAccount class with deposit, withdraw and a read-only balance property; reject non-positive amounts and overdrafts with ValueError.",
      note: "Foundation. Write tests for valid operations and for each invalid operation before you finish.",
    },
    {
      title: "Predict the output of five short snippets involving class attributes, instance attributes and method calls, then run them.",
      note: "Code reading. Include one mutable class attribute shared between instances.",
    },
    {
      title: "Add a from_string class method to a Temperature class that parses \"21.5C\" or \"70F\", and a static method that validates units.",
      note: "Reinforcement. Explain why each method is a class method, static method or instance method.",
    },
    {
      title: "Implement a Money class with value equality (__eq__) that can be used as a dictionary key.",
      note: "Reinforcement. Make it immutable and define __hash__ consistently with __eq__.",
    },
    {
      title: "Design Parking System (LeetCode)",
      url: "https://leetcode.com/problems/design-parking-system/",
      note: "Easy. A first \"design a class\" problem: choose the state to keep and validate each operation.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between a class and an object?",
      answer:
        "A class is a definition: it describes what data an object holds and what operations it supports. An object is a concrete instance created from the class, with its own state. Many objects can share one class while holding different data. A good class keeps its state valid through its methods, for example rejecting a negative withdrawal.",
      code: `class BankAccount:
    def __init__(self, owner, balance=0):
        if balance < 0:
            raise ValueError("balance cannot be negative")
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("amount must be positive")
        self.balance += amount

a, b = BankAccount("Ana"), BankAccount("Ben", 50)
a.deposit(20)
print(a.balance, b.balance)   # -> 20 50
try:
    a.deposit(-5)
except ValueError as error:
    print(error)              # -> amount must be positive`,
      followUps: ["Where should validation live: in the caller or in the class?"],
    },
    {
      question: "What is the difference between instance attributes and class attributes? What is the mutable class attribute pitfall?",
      answer:
        "Instance attributes are set on self and belong to one object. Class attributes are defined in the class body and shared by all instances. Reading an attribute looks on the instance first, then the class. Assigning through an instance creates an instance attribute, but mutating a shared mutable class attribute (such as a list) changes it for every instance. Put per-object mutable state in __init__.",
      code: `class Team:
    members = []                 # shared by every Team: usually a bug

    def add(self, name):
        self.members.append(name)

a, b = Team(), Team()
a.add("Ana")
print(b.members)                 # -> ['Ana']

class FixedTeam:
    def __init__(self):
        self.members = []        # one list per object

c, d = FixedTeam(), FixedTeam()
c.members.append("Ana")
print(d.members)                 # -> []`,
      followUps: ["When is a class attribute the right choice? (Constants and genuinely shared configuration.)"],
    },
    {
      question: "What are instance methods, class methods and static methods? What are self and cls?",
      answer:
        "An instance method receives the object as its first parameter, conventionally self, and works with that object's state. A class method receives the class itself (cls) and is commonly used for alternative constructors. A static method receives neither; it is a plain function grouped with the class because it is related to it. self and cls are conventions, not keywords: Python passes the object or class automatically when you call the method.",
      code: `class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    @classmethod
    def from_fahrenheit(cls, f):            # alternative constructor
        return cls((f - 32) * 5 / 9)

    @staticmethod
    def is_valid(celsius):                  # related helper, no state needed
        return celsius >= -273.15

    def to_fahrenheit(self):                # uses this object's state
        return self.celsius * 9 / 5 + 32

t = Temperature.from_fahrenheit(212)
print(t.celsius, t.to_fahrenheit(), Temperature.is_valid(-300))   # -> 100.0 212.0 False`,
      followUps: ["Why does a class method use cls(...) instead of the class name directly? (Subclasses then get instances of themselves.)"],
    },
    {
      question: "What are encapsulation and abstraction, and how does Python handle private attributes?",
      answer:
        "Encapsulation means keeping an object's data and the code that maintains it together, and steering other code to use methods rather than changing data directly. Abstraction means exposing a simple interface and hiding how it works. Python has no enforced private members: a single underscore (_balance) is a convention meaning \"internal\"; a double underscore (__balance) triggers name mangling to _ClassName__balance, which avoids accidental clashes in subclasses but does not prevent access. Encapsulation in Python relies on conventions and clear interfaces.",
      code: `class Account:
    def __init__(self):
        self._audit = []        # internal by convention
        self.__balance = 0      # name-mangled, still reachable

acct = Account()
print(acct._audit)              # -> []
print(acct._Account__balance)   # -> 0
print(hasattr(acct, "__balance"))   # -> False`,
      followUps: ["How does this compare with private members in Java or C++?"],
    },
    {
      question: "What is a property, and when would you use one?",
      answer:
        "A property lets attribute-style access call a method, so you can compute a value or validate assignments without changing how callers use the object. Start with plain attributes; switch to a property when you need validation, a computed value or a read-only attribute. Avoid getters and setters for every attribute.",
      code: `class Rectangle:
    def __init__(self, width, height):
        self.width = width          # goes through the setter below
        self.height = height

    @property
    def width(self):
        return self._width

    @width.setter
    def width(self, value):
        if value <= 0:
            raise ValueError("width must be positive")
        self._width = value

    @property
    def area(self):                 # computed, read-only
        return self.width * self.height

r = Rectangle(3, 4)
print(r.area)                       # -> 12
try:
    r.width = 0
except ValueError as error:
    print(error)                    # -> width must be positive`,
      followUps: ["What happens if you assign to r.area?"],
    },
    {
      question: "How do identity and equality work for objects? What happens to hashing if you define __eq__?",
      answer:
        "By default, == on custom objects compares identity, the same as is. Define __eq__ to compare values. In Python 3, defining __eq__ without __hash__ sets __hash__ to None, making instances unhashable, because equal objects must have equal hashes. If instances are immutable and should work as dictionary keys or set members, define __hash__ from the same fields.",
      code: `class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __eq__(self, other):
        return isinstance(other, Point) and (self.x, self.y) == (other.x, other.y)

    def __hash__(self):
        return hash((self.x, self.y))

p, q = Point(1, 2), Point(1, 2)
print(p == q, p is q)       # -> True False
print(len({p, q}))          # -> 1`,
      followUps: ["Why is it risky to make mutable objects hashable?"],
    },
    {
      question: "What is the difference between __new__ and __init__?",
      answer:
        "__new__ creates and returns the new instance; __init__ then initializes that instance's state and returns None. Python calls them in that order when you call the class. You almost always write only __init__. Overriding __new__ is needed in rare cases, such as subclassing an immutable type like int or str, or controlling instance creation.",
      code: `class Traced:
    def __new__(cls, *args):
        print("creating")
        return super().__new__(cls)

    def __init__(self, value):
        print("initializing")
        self.value = value

t = Traced(5)
# -> creating
# -> initializing
print(t.value)   # -> 5`,
      followUps: ["Why can't __init__ change the value of an immutable object such as an int?"],
    },
    {
      question: "What are the four pillars of object-oriented programming?",
      answer:
        "Encapsulation (keeping data with the code that maintains it), abstraction (exposing a simple interface and hiding details), inheritance (defining a class in terms of another) and polymorphism (different classes responding to the same operation in their own way). In interviews, give a short example of each and mention that composition is often preferred over inheritance; the next topic covers that trade-off.",
      code: `class Shape:
    def area(self):
        raise NotImplementedError

class Square(Shape):                 # inheritance
    def __init__(self, side):
        self._side = side            # encapsulated state

    def area(self):                  # polymorphism: same call, own behavior
        return self._side ** 2

class Circle(Shape):
    def __init__(self, r):
        self._r = r

    def area(self):
        return round(3.14159 * self._r ** 2, 2)

print([s.area() for s in (Square(2), Circle(1))])   # abstraction: callers only use area()  # -> [4, 3.14]`,
      followUps: ["Which of the four do you rely on most in everyday code, and why?"],
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
    "You can explain classes, objects, self, class versus instance attributes and the three method types aloud without notes.",
    "You can implement a class that keeps its state valid and test both valid and invalid operations.",
    "You can predict the output of code involving shared class attributes and name mangling.",
    "You can implement value equality correctly, including its effect on hashing.",
    "You can answer this topic's interview questions with your own examples.",
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
