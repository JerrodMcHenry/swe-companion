import type { Topic } from "../types";

const topic: Topic = {
  slug: "solid-design-patterns",
  title: "SOLID Principles and Common Design Patterns",
  category: "Object-Oriented Design",
  phase: "object-oriented-programming-and-design",
  overview:
    "The SOLID principles are five guidelines for keeping object-oriented code easy to change: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation and Dependency Inversion. Design patterns are named, reusable solutions to recurring design problems. This topic covers all five principles and a small set of patterns that entry-level engineers actually use — Strategy, Factory Method, Observer, Adapter and Decorator — plus why Singleton is usually best avoided.",
  whyItMatters:
    "SOLID and basic patterns come up in object-oriented interview questions and in low-level design discussions, and they give you vocabulary for code reviews (\"this class has two responsibilities\"). More importantly, they help you recognize and fix code that is hard to change. They are guidelines, not laws: applying them where they are not needed adds complexity, and interviewers value knowing when not to use a pattern.",
  prerequisites: ["Composition, Inheritance and Interfaces", "Designing Small Systems (Low-Level Design)"],
  objectives: [
    "Explain each SOLID principle: the problem it addresses, a small example and the trade-off of applying it.",
    "Recognize when an extra abstraction is unnecessary.",
    "Distinguish dependency inversion (depend on abstractions) from dependency injection (supply dependencies from outside).",
    "Implement Strategy, a simple factory and Factory Method, Observer, Adapter and the Decorator pattern in Python.",
    "Distinguish the Decorator design pattern from Python's @decorator syntax.",
    "Explain Singleton and its problems with global state and testing.",
    "Choose a pattern only when it solves a real problem in the requirements.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Refactoring.Guru — Design Patterns (Strategy, Factory Method, Observer, Adapter, Decorator, Singleton)",
      url: "https://refactoring.guru/design-patterns",
      provider: "Refactoring.Guru",
      type: "Visual explanation",
      instructions:
        "Free illustrated pattern pages with Python examples. Read only the six patterns listed, focusing on the Problem, Solution and Applicability sections. Skip the other patterns; the paid book is not needed.",
    },
    {
      title: "SOLID: The First 5 Principles of Object Oriented Design",
      url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",
      provider: "DigitalOcean",
      type: "Article",
      instructions: "Free written introduction to all five principles with small examples (in PHP; the ideas transfer directly). Read it once, then rewrite one example in Python yourself.",
    },
    {
      title: "Awesome Low-Level Design — Design Principles and Design Patterns sections",
      url: "https://github.com/ashishps1/awesome-low-level-design",
      provider: "Ashish Pratap Singh (GitHub)",
      type: "Repository",
      instructions: "Optional alternative explanations of SOLID and patterns linked from the README. Use only for patterns you found unclear above.",
    },
  ],
  exercises: [
    {
      title: "Take a 60-line class that reads orders, calculates totals, applies tax and prints a report, and split it into cohesive classes.",
      note: "Foundation. Name the SOLID principle each change applies, and stop when the code is clear, not when every principle is maximized.",
    },
    {
      title: "Implement shipping cost calculation with the Strategy pattern (standard, express, free over a threshold) and add a new strategy without editing existing classes.",
      note: "Reinforcement. Then compare with a dictionary of functions and explain which you would choose.",
    },
    {
      title: "Implement an Observer-based price alert: subscribers are notified when a product's price drops below their threshold.",
      note: "Reinforcement. Test with fake subscribers; handle unsubscribing.",
    },
    {
      title: "Write an Adapter so an existing PaymentProcessor interface can use a third-party client with different method names.",
      note: "Transfer.",
    },
    {
      title: "Review a short design that uses a Singleton for configuration and propose a more testable alternative.",
      note: "Code review practice.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the Single Responsibility Principle?",
      answer:
        "A class should have one reason to change: one responsibility. A class that calculates invoices and also formats and emails them changes whenever tax rules, layout or email delivery change. Splitting it means each change touches one place and each part can be tested alone. The trade-off is more classes; do not split until responsibilities genuinely differ.",
      code: `class InvoiceCalculator:
    def total(self, items, tax_rate):
        return round(sum(items) * (1 + tax_rate), 2)

class InvoiceFormatter:
    def render(self, total):
        return f"Amount due: {total:.2f}"

total = InvoiceCalculator().total([10, 20], 0.1)
print(InvoiceFormatter().render(total))   # -> Amount due: 33.00`,
      followUps: ["How do you decide what counts as one responsibility?"],
    },
    {
      question: "What is the Open/Closed Principle?",
      answer:
        "Software should be open for extension but closed for modification: you add new behavior by adding code, not by editing working code. A growing if/elif chain over types is the usual warning sign. Moving each variant behind a common interface lets you add a variant as a new class. Apply it where variation is expected; for two stable cases an if statement is simpler.",
      code: `class Standard:
    def cost(self, weight):
        return 5 + weight

class Express:
    def cost(self, weight):
        return 15 + 2 * weight

def quote(method, weight):            # never edited when a method is added
    return method.cost(weight)

print(quote(Standard(), 2), quote(Express(), 2))   # -> 7 19`,
      followUps: ["What is the cost of applying Open/Closed everywhere?"],
    },
    {
      question: "What is the Liskov Substitution Principle?",
      answer:
        "Objects of a subclass must be usable wherever the parent is expected without breaking the caller's expectations. A subclass should not strengthen preconditions, weaken guarantees or throw errors for operations the parent supports. The classic violation is a Square subclass of Rectangle whose setters change both sides, breaking code that sets width and height independently. If a subclass cannot honor the parent's contract, the relationship is not really is-a: use composition or a different hierarchy.",
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
    },
    {
      question: "What is the Interface Segregation Principle?",
      answer:
        "Clients should not be forced to depend on methods they do not use. A large interface (print, scan, fax) forces simple implementations to provide meaningless methods or raise errors. Smaller, focused interfaces let each class implement only what it supports. In Python this often means small Protocols or simply duck typing; avoid splitting interfaces so finely that nobody can follow them.",
      code: `from typing import Protocol

class Printer(Protocol):
    def print_doc(self, doc: str) -> str: ...

class Scanner(Protocol):
    def scan(self) -> str: ...

class BasicPrinter:                          # implements only what it can do
    def print_doc(self, doc):
        return f"printed {doc}"

class OfficeMachine:
    def print_doc(self, doc):
        return f"printed {doc}"

    def scan(self):
        return "scanned page"

def print_all(printer: Printer, docs):
    return [printer.print_doc(d) for d in docs]

print(print_all(BasicPrinter(), ["a"]), OfficeMachine().scan())   # -> ['printed a'] scanned page`,
      followUps: ["How does this principle relate to Single Responsibility?"],
    },
    {
      question: "What is the Dependency Inversion Principle, and how is it different from dependency injection?",
      answer:
        "Dependency inversion says high-level policy code should depend on abstractions, not on low-level details: an OrderService should depend on \"something that can notify\", not on a specific SMTP client. Dependency injection is a technique for supplying a dependency from outside, usually through the constructor. Injection is the common way to achieve inversion, but they are different things: you can inject a concrete class, and you can depend on an abstraction without a framework. Python needs no injection framework; passing objects in is enough.",
      code: `class SmsNotifier:
    def send(self, message):
        return f"SMS: {message}"

class ReportService:
    def __init__(self, notifier):        # depends on the send() abstraction, injected here
        self.notifier = notifier

    def finish(self):
        return self.notifier.send("report ready")

print(ReportService(SmsNotifier()).finish())   # -> SMS: report ready`,
      followUps: ["Why does dependency inversion make code easier to test?"],
    },
    {
      question: "When would you use the Strategy pattern?",
      answer:
        "When an operation has several interchangeable algorithms chosen at runtime — pricing rules, sorting policies, payment methods — and you want to add new ones without changing the code that uses them. Each strategy implements the same interface and the context holds one. In Python, a strategy can simply be a function passed as an argument; use classes when strategies need configuration or several methods.",
      code: `def no_discount(total):
    return total

def ten_percent(total):
    return round(total * 0.9, 2)

def checkout(total, pricing=no_discount):    # the strategy is a plain function
    return pricing(total)

print(checkout(50), checkout(50, ten_percent))   # -> 50 45.0`,
      followUps: ["How does Strategy relate to the Open/Closed Principle?"],
    },
    {
      question: "What is the difference between a simple factory and the Factory Method pattern?",
      answer:
        "A simple factory is one function or method that decides which class to create from an input, centralizing creation logic. Factory Method is a pattern in which a base class defines a method for creating an object and subclasses override it to decide the concrete type, so the base class's workflow stays the same. In Python, a simple factory (often a dictionary from name to class) is usually enough; Factory Method is useful when a framework-style base class must let subclasses choose what to create.",
      code: `class Csv:
    def export(self, rows): return "csv"

class Json:
    def export(self, rows): return "json"

def make_exporter(kind):                      # simple factory
    exporters = {"csv": Csv, "json": Json}
    if kind not in exporters:
        raise ValueError(f"unknown format {kind}")
    return exporters[kind]()

class ReportJob:                              # Factory Method
    def create_exporter(self):
        raise NotImplementedError

    def run(self, rows):
        return self.create_exporter().export(rows)

class JsonReportJob(ReportJob):
    def create_exporter(self):
        return Json()

print(make_exporter("csv").export([]), JsonReportJob().run([]))   # -> csv json`,
      followUps: ["What problem does centralizing object creation solve?"],
    },
    {
      question: "What is the Observer pattern?",
      answer:
        "A subject keeps a list of observers and notifies each of them when its state changes, without knowing what they do. It decouples the source of events from the reactions: adding a new reaction means subscribing another observer. Typical uses are UI events, notifications and domain events. Watch for observers that are never unsubscribed and for long notification chains that are hard to trace.",
      code: `class Product:
    def __init__(self, price):
        self.price, self.observers = price, []

    def subscribe(self, callback):
        self.observers.append(callback)

    def set_price(self, price):
        self.price = price
        for notify in self.observers:
            notify(price)

alerts = []
item = Product(100)
item.subscribe(lambda p: alerts.append(f"email: now {p}"))
item.subscribe(lambda p: alerts.append(f"sms: now {p}"))
item.set_price(80)
print(alerts)   # -> ['email: now 80', 'sms: now 80']`,
      followUps: ["How would you stop one failing observer from preventing the others being notified?"],
    },
    {
      question: "What is the Adapter pattern?",
      answer:
        "An adapter converts the interface of an existing class into the interface your code expects, so incompatible classes can work together without modifying either. It is common when integrating third-party libraries or legacy code. The adapter wraps the other object and translates calls.",
      code: `class LegacyPayments:                  # third-party code you cannot change
    def make_payment(self, cents):
        return f"paid {cents} cents"

class PaymentAdapter:                  # exposes the interface our code expects
    def __init__(self, legacy):
        self.legacy = legacy

    def pay(self, amount_dollars):
        return self.legacy.make_payment(round(amount_dollars * 100))

print(PaymentAdapter(LegacyPayments()).pay(12.5))   # -> paid 1250 cents`,
      followUps: ["How is an adapter different from a decorator?"],
    },
    {
      question: "What is the Decorator design pattern, and how is it different from Python's @decorator syntax?",
      answer:
        "The Decorator pattern wraps an object in another object with the same interface to add behavior, such as logging or caching, without changing the original class; wrappers can be stacked. Python's @decorator syntax is a language feature that wraps a function or class at definition time. They share the idea of wrapping, but the pattern is about objects and interfaces, while @ syntax is about functions; a Python decorator is not necessarily an implementation of the pattern.",
      code: `class Coffee:
    def cost(self):
        return 3.0

class MilkDecorator:                   # Decorator pattern: same interface, wraps an object
    def __init__(self, drink):
        self.drink = drink

    def cost(self):
        return self.drink.cost() + 0.5

def shout(func):                       # Python decorator syntax: wraps a function
    def wrapper(*args):
        return func(*args).upper()
    return wrapper

@shout
def greet(name):
    return f"hi {name}"

print(MilkDecorator(MilkDecorator(Coffee())).cost(), greet("ana"))   # -> 4.0 HI ANA`,
      followUps: ["When would you choose a decorator object over a subclass?"],
    },
    {
      question: "What is the Singleton pattern, and why is it often discouraged?",
      answer:
        "Singleton ensures a class has only one instance and provides global access to it, often for configuration or a connection pool. The problems are those of global state: hidden dependencies, coupling across the codebase, and tests that interfere with each other because they share the instance. In Python, a module-level object already gives one shared instance; usually it is better to create one object at startup and pass it to the code that needs it.",
      code: `class Config:
    def __init__(self, debug):
        self.debug = debug

def handle_request(config):             # dependency passed in, easy to replace in tests
    return "verbose" if config.debug else "quiet"

print(handle_request(Config(debug=True)), handle_request(Config(debug=False)))   # -> verbose quiet`,
      followUps: ["How would you test code that reads a global Singleton?"],
    },
    {
      question: "How do you decide whether to use a design pattern?",
      answer:
        "Start from the problem, not the pattern. Use a pattern when the requirements show the problem it solves — several interchangeable behaviors, a need to react to events, an incompatible interface — and when the simpler alternative is getting worse. Prefer plain functions, dictionaries and composition first. In an interview, naming a pattern is a bonus; explaining why the design fits the requirements is what matters.",
      code: `handlers = {"csv": lambda rows: ",".join(rows), "lines": lambda rows: "\\n".join(rows)}
print(handlers["csv"](["a", "b"]))   # a dictionary of functions is often enough  # -> a,b`,
      followUps: ["Describe a time you removed unnecessary abstraction from code."],
    },
  ],
  mistakes: [
    "Reciting SOLID definitions without being able to give an example of the problem each one solves.",
    "Applying every principle everywhere, creating many tiny classes and interfaces with one implementation.",
    "Confusing dependency inversion with dependency injection.",
    "Choosing a pattern first and bending the requirements to fit it.",
    "Using Singleton for convenience and making code hard to test.",
    "Assuming Python's @decorator syntax is the same thing as the Decorator pattern.",
  ],
  mastery: [
    "You can explain each SOLID principle with a problem example and a trade-off, without notes.",
    "You can implement Strategy, a simple factory, Observer, Adapter and the Decorator pattern in Python.",
    "You can explain when a pattern or abstraction is unnecessary and what you would do instead.",
    "You can explain dependency inversion versus dependency injection and the problems with Singleton.",
  ],
  deprioritize: [
    "The full catalogue of 23 Gang of Four patterns; Builder, Command and others can be learned when needed.",
    "Enterprise architecture patterns and dependency injection frameworks.",
    "Formal definitions and history of the principles.",
  ],
  keywords: [
    "SOLID",
    "single responsibility",
    "open closed",
    "Liskov substitution",
    "interface segregation",
    "dependency inversion",
    "dependency injection",
    "design patterns",
    "strategy pattern",
    "factory method",
    "observer pattern",
    "adapter pattern",
    "decorator pattern",
    "singleton",
  ],
};

export default topic;
