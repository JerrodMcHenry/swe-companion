import type { Topic } from "../types";

const topic: Topic = {
  slug: "composition-inheritance-interfaces",
  title: "Composition, Inheritance and Interfaces",
  category: "Object-Oriented Design",
  phase: "object-oriented-programming-and-design",
  overview:
    "Objects relate to each other in two main ways: inheritance (a subclass is a specialized kind of its parent) and composition (an object has other objects that do part of the work). Interfaces and abstract classes describe what a group of objects must be able to do, and polymorphism lets code work with any object that fulfils that contract. This topic is about choosing the right relationship and explaining why.",
  whyItMatters:
    "Choosing between inheritance and composition, and depending on interfaces rather than concrete classes, determines whether code is easy to change and test. These are some of the most commonly recommended object-oriented interview questions, and they are the core of low-level design rounds where employers run them. In professional code, a badly chosen inheritance hierarchy is one of the most common sources of fragile designs.",
  prerequisites: ["Classes and Objects"],
  objectives: [
    "Implement inheritance with method overriding and use super() to extend parent behavior.",
    "Explain polymorphism and write code that works with any object meeting an interface.",
    "Distinguish overriding from overloading, and explain that Python does not overload methods by signature.",
    "Use abc.ABC and @abstractmethod to define abstract classes, and typing.Protocol or duck typing for structural interfaces.",
    "Distinguish is-a from has-a relationships and choose composition when behavior should be swapped or combined.",
    "Explain substitutability: a subclass must be usable wherever its parent is expected.",
    "Reduce coupling by passing dependencies in (dependency injection) and depending on interfaces.",
    "Explain multiple inheritance and the method resolution order (MRO) at a basic level, including how super() follows it.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Python Tutorial — 9.5 Inheritance and 9.5.1 Multiple Inheritance",
      url: "https://docs.python.org/3/tutorial/classes.html#inheritance",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Written, primary for Python mechanics: overriding, super-style calls to base classes and multiple inheritance. Short.",
    },
    {
      title: "Think Python — Chapter 17: Inheritance",
      url: "https://allendowney.github.io/ThinkPython/chap17.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions: "Written alternative with a worked card-game example of inheritance and its pitfalls.",
    },
    {
      title: "Python Standard Library — abc (Abstract Base Classes)",
      url: "https://docs.python.org/3/library/abc.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read the ABC class and the abstractmethod decorator entries only.",
    },
    {
      title: "Python typing — Protocol",
      url: "https://docs.python.org/3/library/typing.html#typing.Protocol",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for structural interfaces. Read the Protocol entry; runtime_checkable is optional.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lecture 8 (inheritance segment)",
      url: "https://cs50.harvard.edu/python/weeks/8/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative. Watch the inheritance segment near the end of the lecture.",
    },
  ],
  exercises: [
    {
      title: "Model payment methods (card, bank transfer, gift card) with an abstract PaymentMethod base class and a checkout function that works with any of them.",
      note: "Foundation. Test that the base class cannot be instantiated and that each method rejects invalid amounts.",
    },
    {
      title: "Refactor a deep inheritance hierarchy (for example DatabaseLogger, FileLogger, EmailFileLogger) into composition with injected outputs.",
      note: "Reinforcement. Explain which changes became easier.",
    },
    {
      title: "Write a report generator that accepts any object with a write(text) method, and test it with an in-memory fake.",
      note: "Reinforcement. Duck typing and dependency injection; no real files needed in the test.",
    },
    {
      title: "Predict the MRO and the output of super() calls in a diamond-shaped class hierarchy, then check with __mro__.",
      note: "Code reading.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between inheritance and composition? When would you choose each?",
      answer:
        "Inheritance models an is-a relationship: the subclass reuses and specializes the parent. Composition models has-a: an object holds other objects and delegates work to them. Prefer composition when behavior should vary independently, be swapped at runtime or be combined, because it keeps classes small and loosely coupled. Use inheritance for a genuine, stable is-a relationship where every subclass can stand in for the parent.",
      code: `class Engine:
    def start(self):
        return "engine started"

class ElectricMotor:
    def start(self):
        return "motor humming"

class Car:                       # has-a: the power source is a part
    def __init__(self, power_source):
        self.power_source = power_source

    def start(self):
        return self.power_source.start()

print(Car(Engine()).start())          # -> engine started
print(Car(ElectricMotor()).start())   # -> motor humming`,
      followUps: ["What problems appear in deep inheritance hierarchies?"],
    },
    {
      question: "What is polymorphism? How do method overriding and super() work?",
      answer:
        "Polymorphism means code can call the same operation on different objects and each responds in its own way. A subclass overrides a method by defining one with the same name; Python calls the most specific version. super() calls the parent's implementation, which lets a subclass extend behavior instead of replacing it entirely, for example to run the parent's __init__ and then add fields.",
      code: `class Employee:
    def __init__(self, name, salary):
        self.name, self.salary = name, salary

    def annual_pay(self):
        return self.salary

class Manager(Employee):
    def __init__(self, name, salary, bonus):
        super().__init__(name, salary)     # reuse parent initialization
        self.bonus = bonus

    def annual_pay(self):                  # override and extend
        return super().annual_pay() + self.bonus

staff = [Employee("Ana", 100), Manager("Ben", 120, 30)]
print([e.annual_pay() for e in staff])     # -> [100, 150]`,
      followUps: ["What happens if a subclass's __init__ forgets to call super().__init__()?"],
    },
    {
      question: "What is the difference between overriding and overloading? Does Python support overloading?",
      answer:
        "Overriding is a subclass replacing a parent's method with the same name. Overloading means several methods with the same name but different parameter lists, chosen by the arguments' types at compile time, as in Java or C++. Python does not overload by signature: defining a method again replaces the earlier definition. Use default arguments, *args, or functools.singledispatch when you need flexible inputs.",
      code: `class Greeter:
    def greet(self, name):
        return f"Hi {name}"

    def greet(self, name, title):        # replaces the first definition
        return f"Hi {title} {name}"

g = Greeter()
try:
    g.greet("Ana")
except TypeError:
    print("only the second greet exists")   # -> only the second greet exists

class FlexibleGreeter:
    def greet(self, name, title=None):      # one method, optional parameter
        return f"Hi {title + ' ' if title else ''}{name}"

print(FlexibleGreeter().greet("Ana"), "|", FlexibleGreeter().greet("Lee", "Dr"))   # -> Hi Ana | Hi Dr Lee`,
      followUps: ["What is the difference between compile-time and run-time polymorphism?"],
    },
    {
      question: "What is the difference between an abstract class and an interface? How do you express them in Python?",
      answer:
        "An abstract class defines a contract and can share some implementation; it cannot be instantiated until its abstract methods are implemented. An interface defines only the contract. In Java the distinction is enforced by the language. In Python, abc.ABC with @abstractmethod gives an abstract class that raises TypeError if instantiated incompletely; typing.Protocol describes an interface structurally, checked by type checkers rather than at runtime, and plain duck typing works without declaring anything.",
      code: `from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, message): ...

    def send_all(self, messages):          # shared implementation
        return [self.send(m) for m in messages]

class EmailNotifier(Notifier):
    def send(self, message):
        return f"email: {message}"

try:
    Notifier()
except TypeError:
    print("cannot instantiate an abstract class")   # -> cannot instantiate an abstract class
print(EmailNotifier().send_all(["a", "b"]))         # -> ['email: a', 'email: b']`,
      followUps: ["When would you prefer a Protocol or duck typing over an abstract base class?"],
    },
    {
      question: "What is duck typing?",
      answer:
        "Duck typing means Python cares whether an object supports the operations you use, not what class it is: \"if it walks like a duck and quacks like a duck\". Any object with a write method can be passed where a file-like object is expected. It keeps code flexible and easy to test with fakes; the cost is that mistakes appear at runtime, which tests or type hints with Protocols help catch.",
      code: `class ConsoleOutput:
    def write(self, text):
        print(text)

class MemoryOutput:
    def __init__(self):
        self.lines = []

    def write(self, text):
        self.lines.append(text)

def report(output, total):
    output.write(f"Total: {total}")      # works with anything that has write()

report(ConsoleOutput(), 3)               # -> Total: 3
mem = MemoryOutput()
report(mem, 5)
print(mem.lines)                         # -> ['Total: 5']`,
      followUps: ["How would you document the expected interface for other developers?"],
    },
    {
      question: "What is coupling, and how does dependency injection reduce it?",
      answer:
        "Coupling is how much one piece of code depends on the details of another. If a class creates its own collaborators (for example a real email client inside OrderService), it is tightly coupled to them and hard to test or change. Dependency injection passes collaborators in from outside, usually through the constructor, so the class depends only on an interface and tests can supply a fake.",
      code: `class OrderService:
    def __init__(self, notifier):          # dependency is injected
        self.notifier = notifier

    def place(self, item):
        if not item:
            raise ValueError("item required")
        self.notifier.send(f"ordered {item}")
        return True

class FakeNotifier:
    def __init__(self):
        self.sent = []

    def send(self, message):
        self.sent.append(message)

fake = FakeNotifier()
OrderService(fake).place("book")
print(fake.sent)                           # -> ['ordered book']`,
      followUps: ["What is the difference between cohesion and coupling?"],
    },
    {
      question: "How does multiple inheritance work in Python, and what is the method resolution order?",
      answer:
        "A class can inherit from several parents. Python searches for attributes using the method resolution order (MRO), computed with the C3 linearization: the class itself, then its parents left to right, with each class appearing once and always before its own parents. super() calls the next class in the MRO, not necessarily the direct parent, which is how diamond hierarchies call each method once. Use multiple inheritance sparingly, mostly for small mixins.",
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
    "You can implement overriding with super(), an abstract base class and a duck-typed interface.",
    "You can choose between inheritance and composition for a given scenario and justify the choice aloud.",
    "You can inject a dependency and test the class with a fake.",
    "You can explain overriding versus overloading, abstract classes versus interfaces, and the MRO at a basic level.",
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
