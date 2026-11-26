import type { Topic } from "../types";

const topic: Topic = {
  slug: "composition-inheritance-interfaces",
  title: "Composition, Inheritance and Interfaces",
  category: "Object-Oriented Design",
  phase: "object-oriented-programming-and-design",
  overview:
    "Objects relate through inheritance (is-a), composition (has-a) and shared interfaces that let code work with any object fulfilling a contract. Choosing the right relationship, and explaining why, is a core object-oriented interview question and decides whether professional code stays easy to change and test.",
  whyItMatters:
    "Choosing between inheritance and composition, and depending on interfaces rather than concrete classes, determines whether code is easy to change and test. These are some of the most commonly recommended object-oriented interview questions, and they are the core of low-level design rounds where employers run them. In professional code, a badly chosen inheritance hierarchy is a common source of fragile designs.",
  prerequisites: ["Classes and Objects"],
  objectives: [
    "Implement inheritance with method overriding, and use super() to extend rather than replace parent behavior (including super().__init__()).",
    "Explain polymorphism: the same call works on different objects, each responding in its own way.",
    "Distinguish overriding from overloading; Python does not overload by signature (a second def with the same name replaces the first).",
    "Define an abstract class with abc.ABC and @abstractmethod, and a structural interface with typing.Protocol or plain duck typing.",
    "Distinguish is-a from has-a, and prefer composition when behavior must vary independently, be swapped or be combined.",
    "Explain substitutability: a subclass must work wherever its parent is expected.",
    "Reduce coupling by passing collaborators in (dependency injection) so tests can use fakes.",
    "Explain multiple inheritance and the method resolution order (MRO) at a basic level, including that super() follows the MRO.",
    "Skip for now: detailed C3 linearization rules, metaclasses, ABC registration and advanced generics.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Python Programming MOOC — Part 10: 1 Class hierarchies and 2 Access modifiers",
      url: "https://programming-26.mooc.fi/part-10/1-class-hierarchies",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Complete 10.1 Class hierarchies (inheritance, overriding, calling the parent with super()) and 10.2 Access modifiers (protected attributes in subclasses), with their exercises. The course does not cover abstract classes, Protocols or composition-versus-inheritance trade-offs: use the article and references below. Reading is free; submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lecture 8 (inheritance segment)",
      url: "https://cs50.harvard.edu/python/weeks/8/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative to the MOOC sections. Watch only the inheritance and inheritance-and-exceptions segments near the end of the lecture. Free, no account.",
    },
    {
      title: "The Composition Over Inheritance Principle",
      url: "https://python-patterns.guide/gang-of-four/composition-over-inheritance/",
      provider: "Brandon Rhodes (Python Design Patterns)",
      type: "Article",
      instructions:
        "Read \"Problem: the subclass explosion\", \"Solution #1: The Adapter Pattern\" and the \"Dodge\" sections on multiple inheritance and mixins. It shows, with Python's logging module, why combining behaviors through subclasses explodes and how composition avoids it. Skip the Bridge and Decorator solutions for now; Decorator returns in the SOLID topic. Free, no account.",
    },
    {
      title: "The Python Tutorial — 9.5 Inheritance and 9.5.1 Multiple Inheritance",
      url: "https://docs.python.org/3/tutorial/classes.html#inheritance",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Short reference for overriding, isinstance/issubclass and how attribute lookup works with several base classes.",
    },
    {
      title: "Python Standard Library — abc (Abstract Base Classes)",
      url: "https://docs.python.org/3/library/abc.html#abc.ABC",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read only the ABC class and the abstractmethod decorator entries.",
    },
    {
      title: "Python typing — Protocol",
      url: "https://docs.python.org/3/library/typing.html#typing.Protocol",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for structural interfaces (static duck typing). Read the Protocol entry; runtime_checkable is optional.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Part 10.1: Laptop computer; Areas; Word game",
      url: "https://programming-26.mooc.fi/part-10/1-class-hierarchies",
      note: "Subclassing with super().__init__(), a Square that inherits Rectangle (afterwards, explain whether it stays substitutable if a Rectangle can change its width), and subclasses that override one method of a shared game loop (polymorphism). Free MOOC.fi account to submit.",
    },
    {
      title: "University of Helsinki, Part 10.2: Secret magic potion",
      url: "https://programming-26.mooc.fi/part-10/2-access-modifiers",
      note: "Extend a parent's methods in a subclass and call the parent implementation. Free account to submit.",
    },
    {
      title: "University of Helsinki, Part 9.6: Item, Suitcase and Cargo hold",
      url: "https://programming-26.mooc.fi/part-9/6-more-examples-with-classes",
      note: "Composition: objects that contain and delegate to other objects. Free account to submit.",
    },
    {
      title: "Apply it to your own project: inject one collaborator and test with a fake",
      note: "No suitable external exercise covers this. Pick a class in your project (or the Unit 6 project) that creates its own database client, HTTP client, clock or notifier; pass it in through the constructor instead and test the class with a small fake. If two real implementations exist, describe their shared interface with abc.ABC or typing.Protocol and explain which you chose.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between inheritance and composition? When would you choose each?",
      answer:
        "Inheritance models is-a: the subclass reuses and specializes the parent. Composition models has-a: an object holds other objects and delegates work to them, for example a Car that holds an Engine or an ElectricMotor and calls its start(). Prefer composition when behavior must vary independently, be swapped at runtime or be combined, because it keeps classes small and loosely coupled. Use inheritance for a genuine, stable is-a relationship where every subclass can stand in for the parent.",
      followUps: ["What problems appear in deep inheritance hierarchies?"],
      source: { title: "Brandon Rhodes — The Composition Over Inheritance Principle", url: "https://python-patterns.guide/gang-of-four/composition-over-inheritance/" },
    },
    {
      question: "What is polymorphism? How do method overriding and super() work?",
      answer:
        "Polymorphism means code calls the same operation on different objects and each responds in its own way. A subclass overrides a method by defining one with the same name; Python uses the most specific version. super() calls the next implementation in the method resolution order, usually the parent's, so a subclass can extend behavior — for example run the parent's __init__ and then add fields, or return super().annual_pay() + self.bonus.",
      followUps: ["What happens if a subclass's __init__ forgets to call super().__init__()?"],
      source: { title: "Python Docs — Built-in functions: super", url: "https://docs.python.org/3/library/functions.html#super" },
    },
    {
      question: "What is the difference between overriding and overloading? Does Python support overloading?",
      answer:
        "Overriding is a subclass replacing a parent's method of the same name. Overloading means several methods with the same name but different parameter lists, chosen by argument types at compile time, as in Java or C++. Python does not overload by signature: defining a method again replaces the earlier definition. Use default arguments, *args, or functools.singledispatch for type-based dispatch.",
      code: `class Greeter:
    def greet(self, name):
        return f"Hi {name}"

    def greet(self, name, title):        # replaces the first definition
        return f"Hi {title} {name}"

try:
    Greeter().greet("Ana")
except TypeError:
    print("only the second greet exists")   # -> only the second greet exists`,
      followUps: ["What is the difference between compile-time and run-time polymorphism?"],
      source: { title: "Python Docs — functools.singledispatch", url: "https://docs.python.org/3/library/functools.html#functools.singledispatch" },
    },
    {
      question: "What is the difference between an abstract class and an interface? How do you express them in Python?",
      answer:
        "An abstract class defines a contract and can share some implementation; it cannot be instantiated until its abstract methods are implemented. An interface defines only the contract. Java enforces the distinction in the language. In Python, a class inheriting abc.ABC with @abstractmethod methods raises TypeError if you instantiate it (or a subclass that has not implemented them); typing.Protocol describes an interface structurally and is checked by type checkers, not at runtime; plain duck typing needs no declaration at all.",
      code: `from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, message): ...

try:
    Notifier()
except TypeError:
    print("cannot instantiate")   # -> cannot instantiate`,
      followUps: ["When would you prefer a Protocol or duck typing over an abstract base class?"],
      source: { title: "Python Docs — abc.abstractmethod", url: "https://docs.python.org/3/library/abc.html#abc.abstractmethod" },
    },
    {
      question: "What is duck typing?",
      answer:
        "Duck typing means Python cares whether an object supports the operations you use, not what class it is: any object with a write(text) method can be passed where a file-like output is expected. It keeps code flexible and easy to test with fakes; the cost is that mistakes appear at runtime, which tests, or type hints with a Protocol, help catch.",
      followUps: ["How would you document the expected interface for other developers?"],
      source: { title: "Python Glossary — duck-typing", url: "https://docs.python.org/3/glossary.html#term-duck-typing" },
    },
    {
      question: "What is coupling, and how does dependency injection reduce it?",
      answer:
        "Coupling is how much one piece of code depends on the details of another. A class that creates its own collaborators, such as a real email client inside OrderService, is tightly coupled to them and hard to test or change. Dependency injection passes collaborators in from outside, usually through the constructor, so the class depends only on the interface it uses and tests can supply a fake.",
      followUps: ["What is the difference between cohesion and coupling?"],
      source: { title: "Martin Fowler — Inversion of Control Containers and the Dependency Injection pattern", url: "https://martinfowler.com/articles/injection.html" },
    },
    {
      question: "How does multiple inheritance work in Python, and what is the method resolution order?",
      answer:
        "A class can inherit from several parents. Python looks up attributes in the method resolution order (MRO), computed by C3 linearization: the class, then its parents left to right, with each class appearing once and always before its own parents. super() calls the next class in the MRO, not necessarily the direct parent, which is how a diamond hierarchy calls each method once. Use multiple inheritance sparingly, mostly for small mixins.",
      code: `class Base:
    def hello(self):
        return ["Base"]

class Left(Base):
    def hello(self):
        return ["Left"] + super().hello()

class Right(Base):
    def hello(self):
        return ["Right"] + super().hello()

class Child(Left, Right):
    pass

print([c.__name__ for c in Child.__mro__])   # -> ['Child', 'Left', 'Right', 'Base', 'object']
print(Child().hello())                       # -> ['Left', 'Right', 'Base']`,
      followUps: ["What is the diamond problem, and how does the MRO address it?"],
      source: { title: "Python Docs — The Python 2.3 Method Resolution Order", url: "https://docs.python.org/3/howto/mro.html" },
    },
  ],
  mistakes: [
    "Using inheritance only to reuse code when there is no genuine is-a relationship.",
    "Building deep hierarchies that force subclasses to inherit behavior they do not need.",
    "Subclasses that change the parent's contract, for example raising errors for methods callers rely on.",
    "Forgetting to call super().__init__() in a subclass.",
    "Defining two methods with the same name expecting Java-style overloading.",
    "Creating collaborators inside a class instead of injecting them, making it hard to test.",
    "Adding abstract base classes or interfaces where there is only one implementation and no need to swap it.",
  ],
  mastery: [
    "You complete the Part 10.1 and 10.2 exercises and Item, Suitcase and Cargo hold without help.",
    "You can choose between inheritance and composition for a given scenario and justify the choice aloud.",
    "You can write an abstract base class and a duck-typed or Protocol interface, inject a dependency and test the class with a fake.",
    "You can explain overriding versus overloading, abstract classes versus interfaces, and predict a simple diamond hierarchy's MRO.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "Detailed C3 linearization rules and cooperative multiple-inheritance designs.",
    "Metaclasses and abstract base class registration.",
    "Advanced generics and variance in type hints.",
  ],
  keywords: [
    "inheritance",
    "composition",
    "polymorphism",
    "overriding",
    "overloading",
    "super",
    "abstract class",
    "ABC",
    "interface",
    "Protocol",
    "duck typing",
    "is-a",
    "has-a",
    "coupling",
    "dependency injection",
    "MRO",
    "multiple inheritance",
  ],
};

export default topic;
