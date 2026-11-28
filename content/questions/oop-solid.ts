import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Classes & objects",
    question: "What are the four pillars of object-oriented programming?",
    answer: "Encapsulation (keeping data with the code that maintains it), abstraction (exposing a simple interface and hiding details), inheritance (defining a class as a specialization of another) and polymorphism (different classes responding to the same call in their own way, such as shape.area() on a Square and a Circle). Have a one-line example ready for each. Worth adding: inheritance is not the only way to reuse code, and composition is often the more flexible choice.",
    followUps: ["Which of the four do you rely on most in everyday code, and why?"],
    source: { title: "MDN — Object-oriented programming", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming" },
  },
  {
    group: "Classes & objects",
    question: "What is the difference between instance attributes and class attributes? What is the mutable class attribute pitfall?",
    answer: "Instance attributes are set on self and belong to one object. Class attributes are defined in the class body and shared by all instances; reading an attribute checks the instance first, then the class. Assigning through an instance creates an instance attribute, but mutating a shared mutable class attribute, such as a list, changes it for every instance. Create per-object mutable state in __init__.",
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
    group: "Classes & objects",
    question: "What are instance methods, class methods and static methods? What are self and cls?",
    answer: "An instance method receives the object as its first parameter, conventionally self, and works with that object's state. A class method (@classmethod) receives the class, conventionally cls, and is commonly used for alternative constructors such as Temperature.from_fahrenheit(212). A static method (@staticmethod) receives neither; it is a plain function grouped with the class because it belongs there logically. self and cls are naming conventions, not keywords: Python passes the object or class automatically.",
    followUps: ["Why does a class method call cls(...) instead of the class name directly? (Subclasses then get instances of themselves.)"],
    source: { title: "Python Docs — Built-in functions: classmethod", url: "https://docs.python.org/3/library/functions.html#classmethod" },
  },
  {
    group: "Classes & objects",
    question: "What are encapsulation and abstraction, and how does Python handle private attributes?",
    answer: "Encapsulation keeps an object's data together with the code that maintains it and steers other code to use methods rather than change data directly. Abstraction exposes a simple interface and hides how it works. Python has no enforced private members: _balance is a convention meaning \"internal\"; __balance triggers name mangling to _ClassName__balance, which avoids accidental clashes in subclasses but does not prevent access.",
    code: `class Account:
    def __init__(self):
        self.__balance = 0           # name-mangled, still reachable

acct = Account()
print(hasattr(acct, "__balance"), acct._Account__balance)   # -> False 0`,
    followUps: ["How does this compare with private members in Java or C++?"],
    source: { title: "The Python Tutorial — 9.6 Private Variables", url: "https://docs.python.org/3/tutorial/classes.html#private-variables" },
  },
  {
    group: "Classes & objects",
    question: "What is a property, and when would you use one?",
    answer: "A property makes attribute-style access (r.width, r.width = 5) call methods, so you can compute a value, validate assignments or make an attribute read-only without changing how callers use the object. Start with plain attributes and switch to a property when you need one of those; there is no need for Java-style getters and setters for every attribute. Assigning to a property without a setter raises AttributeError.",
    followUps: ["What happens if you assign to a read-only property?"],
    source: { title: "Python Docs — Built-in functions: property", url: "https://docs.python.org/3/library/functions.html#property" },
  },
  {
    group: "Classes & objects",
    question: "How do identity and equality work for objects? What happens to hashing if you define __eq__?",
    answer: "By default, == on custom objects compares identity, the same as is. Define __eq__ to compare values. A class that defines __eq__ without __hash__ gets __hash__ set to None, so its instances are unhashable, because equal objects must have equal hashes. If instances are effectively immutable and should work as dictionary keys or set members, define __hash__ from the same fields used by __eq__.",
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
    group: "Inheritance & composition",
    question: "What is the difference between inheritance and composition? When would you choose each?",
    answer: "Inheritance models is-a: the subclass reuses and specializes the parent. Composition models has-a: an object holds other objects and delegates work to them, for example a Car that holds an Engine or an ElectricMotor and calls its start(). Prefer composition when behavior must vary independently, be swapped at runtime or be combined, because it keeps classes small and loosely coupled. Use inheritance for a genuine, stable is-a relationship where every subclass can stand in for the parent.",
    followUps: ["What problems appear in deep inheritance hierarchies?"],
    source: { title: "Brandon Rhodes — The Composition Over Inheritance Principle", url: "https://python-patterns.guide/gang-of-four/composition-over-inheritance/" },
  },
  {
    group: "Inheritance & composition",
    question: "What is polymorphism? How do method overriding and super() work?",
    answer: "Polymorphism means code calls the same operation on different objects and each responds in its own way. A subclass overrides a method by defining one with the same name; Python uses the most specific version. super() calls the next implementation in the method resolution order, usually the parent's, so a subclass can extend behavior — for example run the parent's __init__ and then add fields, or return super().annual_pay() + self.bonus.",
    followUps: ["What happens if a subclass's __init__ forgets to call super().__init__()?"],
    source: { title: "Python Docs — Built-in functions: super", url: "https://docs.python.org/3/library/functions.html#super" },
  },
  {
    group: "Inheritance & composition",
    question: "What is the difference between overriding and overloading? Does Python support overloading?",
    answer: "Overriding is a subclass replacing a parent's method of the same name. Overloading means several methods with the same name but different parameter lists, chosen by argument types at compile time, as in Java or C++. Python does not overload by signature: defining a method again replaces the earlier definition. Use default arguments, *args, or functools.singledispatch (singledispatchmethod for methods) for type-based dispatch; typing.overload only describes signatures for type checkers.",
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
    group: "Inheritance & composition",
    question: "What is the difference between an abstract class and an interface? How do you express them in Python?",
    answer: "An abstract class defines a contract and can share some implementation; it cannot be instantiated until its abstract methods are implemented. An interface defines the contract with little or no implementation (Java interfaces have allowed default methods since Java 8). Java and C# make interfaces a language construct. In Python, a class inheriting abc.ABC with @abstractmethod methods raises TypeError if you instantiate it (or a subclass that has not implemented them); typing.Protocol describes an interface structurally and is checked by type checkers (isinstance works only with @runtime_checkable, and then checks only that the methods exist); plain duck typing needs no declaration at all.",
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
    group: "Inheritance & composition",
    question: "What is duck typing?",
    answer: "Duck typing means Python cares whether an object supports the operations you use, not what class it is: any object with a write(text) method can be passed where a file-like output is expected. It keeps code flexible and easy to test with fakes; the cost is that mistakes appear at runtime, which tests, or type hints with a Protocol, help catch.",
    followUps: ["How would you document the expected interface for other developers?"],
    source: { title: "Python Glossary — duck-typing", url: "https://docs.python.org/3/glossary.html#term-duck-typing" },
  },
  {
    group: "Inheritance & composition",
    question: "What is coupling, and how does dependency injection reduce it?",
    answer: "Coupling is how much one piece of code depends on the details of another. A class that creates its own collaborators, such as a real email client inside OrderService, is tightly coupled to them and hard to test or change. Dependency injection passes collaborators in from outside, usually through the constructor, so the class depends only on the interface it uses and tests can supply a fake.",
    followUps: ["What is the difference between cohesion and coupling?"],
    source: { title: "Martin Fowler — Inversion of Control Containers and the Dependency Injection pattern", url: "https://martinfowler.com/articles/injection.html" },
  },
  {
    group: "SOLID",
    question: "What is the Single Responsibility Principle?",
    answer: "A class should have one reason to change; Robert C. Martin later phrased it as being responsible to one actor, meaning one group of people who request changes. A class that calculates invoices and also formats and emails them changes whenever tax rules, layout or email delivery change. Splitting it means each change touches one place and each part can be tested alone. The trade-off is more classes; do not split until responsibilities genuinely differ.",
    followUps: ["How do you decide what counts as one responsibility?"],
    source: { title: "DigitalOcean — SOLID: The First 5 Principles of Object Oriented Design", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
  },
  {
    group: "SOLID",
    question: "What is the Open/Closed Principle?",
    answer: "Software should be open for extension but closed for modification: you add new behavior by adding code, not by editing working code. A growing if/elif chain over types is the usual warning sign; moving each variant behind a common interface lets you add a variant as a new class or function. Apply it where variation is expected; for two stable cases an if statement is simpler.",
    followUps: ["What is the cost of applying Open/Closed everywhere?"],
    source: { title: "DigitalOcean — SOLID: The First 5 Principles of Object Oriented Design", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
  },
  {
    group: "SOLID",
    question: "What is the Liskov Substitution Principle?",
    answer: "Objects of a subclass must be usable wherever the parent is expected without breaking the caller's expectations: a subclass should not demand more of its inputs, guarantee less, or raise errors for operations the parent supports. The classic violation is a Square subclass of Rectangle whose width setter changes both sides, breaking code that sets width and height independently. If a subclass cannot honor the parent's contract, the relationship is not really is-a: use composition or a different hierarchy.",
    code: `class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h

    def set_width(self, w):
        self.w = w

    def area(self):
        return self.w * self.h

class Square(Rectangle):
    def set_width(self, w):               # changes height too: breaks the contract
        self.w = self.h = w

def stretch(rect):
    rect.set_width(10)
    return rect.area()

print(stretch(Rectangle(2, 3)), stretch(Square(3, 3)))   # caller expects 30 both times  # -> 30 100`,
    followUps: ["How would you redesign shapes to avoid this?"],
    source: { title: "DigitalOcean — SOLID: The First 5 Principles of Object Oriented Design", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
  },
  {
    group: "SOLID",
    question: "What is the Interface Segregation Principle?",
    answer: "Clients should not be forced to depend on methods they do not use. A large interface (print, scan, fax) forces a simple printer to provide meaningless methods or raise errors. Smaller, focused interfaces let each class implement only what it supports. In Python this often means small Protocols or plain duck typing; do not split interfaces so finely that nobody can follow them.",
    followUps: ["How does this principle relate to Single Responsibility?"],
    source: { title: "DigitalOcean — SOLID: The First 5 Principles of Object Oriented Design", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
  },
  {
    group: "SOLID",
    question: "What is the Dependency Inversion Principle, and how is it different from dependency injection?",
    answer: "Dependency inversion says high-level policy code should not depend on low-level details; both should depend on abstractions, ideally defined by the high-level side: an OrderService should depend on \"something that can notify\", not on a specific SMTP client. Dependency injection is a technique for how an object receives a dependency — from outside, usually through the constructor. Injection is the common way to achieve inversion, but they differ: you can inject a low-level concrete class and still violate inversion. Python needs no injection framework; passing objects in is enough.",
    followUps: ["Why does dependency inversion make code easier to test?"],
    source: { title: "Brett L. Schuchert — DIP in the Wild (martinfowler.com)", url: "https://martinfowler.com/articles/dipInTheWild.html" },
  },
  {
    group: "Design patterns",
    question: "When would you use the Strategy pattern?",
    answer: "When an operation has several interchangeable algorithms chosen at runtime — pricing rules, sorting policies, payment methods — and you want to add new ones without changing the code that uses them. Each strategy implements the same interface and the context holds one. In Python a strategy can simply be a function passed as an argument; use classes when strategies need configuration or several methods.",
    code: `def no_discount(total):
    return total

def ten_percent(total):
    return round(total * 0.9, 2)

def checkout(total, pricing=no_discount):    # the strategy is a plain function
    return pricing(total)

print(checkout(50), checkout(50, ten_percent))   # -> 50 45.0`,
    followUps: ["How does Strategy relate to the Open/Closed Principle?"],
    source: { title: "Refactoring.Guru — Strategy", url: "https://refactoring.guru/design-patterns/strategy" },
  },
  {
    group: "Design patterns",
    question: "What is the difference between a simple factory and the Factory Method pattern?",
    answer: "A simple factory is one function or method that decides which class to instantiate from an input, centralizing creation logic — in Python often a dictionary from name to class plus a clear error for unknown names. Factory Method is a pattern in which a base class's workflow calls a creation method that subclasses override to choose the concrete type, so the workflow stays unchanged. A simple factory is usually enough; Factory Method suits framework-style base classes.",
    followUps: ["What problem does centralizing object creation solve?"],
    source: { title: "Refactoring.Guru — Factory Comparison", url: "https://refactoring.guru/design-patterns/factory-comparison" },
  },
  {
    group: "Design patterns",
    question: "What is the Observer pattern?",
    answer: "A subject keeps a list of subscribers and notifies each one when its state changes, without knowing what they do. It decouples the source of events from the reactions: adding a reaction means subscribing another observer. Typical uses are UI events, notifications and domain events. Watch for observers that are never unsubscribed, one failing observer stopping the rest, and long notification chains that are hard to trace.",
    followUps: ["How would you stop one failing observer from preventing the others being notified?"],
    source: { title: "Refactoring.Guru — Observer", url: "https://refactoring.guru/design-patterns/observer" },
  },
  {
    group: "Design patterns",
    question: "What is the Adapter pattern?",
    answer: "An adapter converts the interface of an existing class into the interface your code expects, so incompatible classes work together without modifying either. It is common when integrating third-party libraries or legacy code: for example, a PaymentAdapter exposes pay(dollars) and calls a vendor's make_payment(cents). The adapter wraps the other object and translates the calls.",
    followUps: ["How is an adapter different from a decorator?"],
    source: { title: "Refactoring.Guru — Adapter", url: "https://refactoring.guru/design-patterns/adapter" },
  },
  {
    group: "Design patterns",
    question: "What is the Decorator design pattern, and how is it different from Python's @decorator syntax?",
    answer: "The Decorator pattern wraps an object in another object with the same interface to add behavior, such as logging or caching, without changing the original class; wrappers can be stacked. Python's @decorator syntax is a language feature that replaces a function or class with the result of calling another function on it at definition time. Both involve wrapping, but the pattern is about objects sharing an interface, and a Python decorator is not necessarily an implementation of the pattern.",
    followUps: ["When would you choose a decorator object over a subclass?"],
    source: { title: "Brandon Rhodes — The Decorator Pattern", url: "https://python-patterns.guide/gang-of-four/decorator-pattern/" },
  },
  {
    group: "Design patterns",
    question: "What is the Singleton pattern, and why is it often discouraged?",
    answer: "Singleton ensures a class has only one instance and provides global access to it, often for configuration or a connection pool. Its problems are those of global state: hidden dependencies, coupling across the codebase, and tests that interfere with each other or cannot replace the instance. In Python a module-level object already gives one shared instance; usually it is better to create one object at startup and pass it to the code that needs it.",
    followUps: ["How would you test code that reads a global Singleton?"],
    source: { title: "Refactoring.Guru — Singleton (Pros and Cons)", url: "https://refactoring.guru/design-patterns/singleton" },
  },
  {
    group: "Design patterns",
    question: "How do you decide whether to use a design pattern?",
    answer: "Start from the problem, not the pattern. Use one when the requirements show the problem it solves — several interchangeable behaviors, a need to react to events, an incompatible interface — and the simpler alternative is getting worse. Prefer plain functions, dictionaries and composition first. In an interview, naming a pattern is a bonus; explaining why the design fits the requirements is what matters.",
    followUps: ["Describe a time you removed unnecessary abstraction from code."],
    source: { title: "Refactoring.Guru — Criticism of patterns", url: "https://refactoring.guru/design-patterns/criticism" },
  },
];

export default questions;
