import type { Topic } from "../types";

const topic: Topic = {
  slug: "solid-design-patterns",
  title: "SOLID Principles and Common Design Patterns",
  category: "Object-Oriented Design",
  phase: "object-oriented-programming-and-design",
  overview:
    "SOLID is five guidelines for keeping object-oriented code easy to change; design patterns are named solutions to recurring design problems. You need the vocabulary and a few patterns — Strategy, Factory, Observer, Adapter, Decorator, and why Singleton is usually avoided — for object-oriented interview questions and code reviews.",
  whyItMatters:
    "SOLID and basic patterns come up in object-oriented interview questions and in low-level design discussions, and they give you vocabulary for code reviews (\"this class has two responsibilities\"). More importantly, they help you recognize and fix code that is hard to change. They are guidelines, not laws: applying them where they are not needed adds complexity, and interviewers value knowing when not to use a pattern.",
  prerequisites: ["Composition, Inheritance and Interfaces", "Designing Small Systems (Low-Level Design)"],
  objectives: [
    "Explain each SOLID principle — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion — with the problem it addresses, a small example and the cost of over-applying it.",
    "Distinguish dependency inversion (high-level code depends on abstractions) from dependency injection (supplying a dependency from outside).",
    "Explain and implement Strategy, a simple factory, Observer and Adapter in Python; recognize Factory Method and the Decorator pattern.",
    "Distinguish the Decorator design pattern from Python's @decorator syntax.",
    "Explain what Singleton is and why global state makes code hard to test.",
    "Choose a pattern only when it solves a problem in the requirements, and prefer plain functions, dictionaries and composition first.",
    "Skip for now: the rest of the 23 Gang of Four patterns, enterprise architecture patterns and dependency injection frameworks.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "SOLID: The First 5 Principles of Object Oriented Design",
      url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",
      provider: "DigitalOcean",
      type: "Article",
      instructions:
        "Start here for SOLID. Read the whole article: one section per principle, mostly built on one shapes example (in PHP; the ideas transfer directly). Then rewrite one example in Python yourself. A cloud provider's free tutorial: ignore the sign-up and product prompts; no account needed.",
    },
    {
      title: "Refactoring.Guru — Strategy, Factory Method, Observer, Adapter, Decorator, Singleton",
      url: "https://refactoring.guru/design-patterns/strategy",
      provider: "Refactoring.Guru",
      type: "Visual explanation",
      instructions:
        "Start here for patterns (the link opens Strategy; open the other five from the catalogue). On each page read Intent, Problem, Solution, Applicability and Pros and Cons; skim Structure; open the Python code example under Code Examples only if the idea is still unclear. Also read the Factory Comparison page (simple factory versus Factory Method). Skip the other patterns. Free; the paid e-book is not needed.",
    },
    {
      title: "Python Design Patterns — The Decorator Pattern and The Singleton Pattern",
      url: "https://python-patterns.guide/gang-of-four/decorator-pattern/",
      provider: "Brandon Rhodes",
      type: "Article",
      instructions:
        "Python-specific view, distinct from the language-neutral pages above. Read the Decorator Pattern's opening warning and Definition (the pattern is not Python's @decorator syntax) and \"Implementing: Static wrapper\"; skip the monkey-patching hacks. Then read The Singleton Pattern page (linked from the site's index) for why Python code rarely needs it. Free, no account.",
    },
  ],
  exercises: [
    {
      title: "Awesome Low-Level Design: Design Pub Sub System",
      url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/pub-sub-system.md",
      note: "Observer in practice: topics notify their subscribers. Implement publish, subscribe and unsubscribe single-threaded; skip the concurrency and scalability requirements. Test with fake subscribers, including one that raises.",
    },
    {
      title: "Awesome Low-Level Design: Design Logging Framework (Singleton review)",
      url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/logging-framework.md",
      note: "Read the problem's \"Classes, Interfaces and Enumerations\": the Logger is a Singleton and destinations are appenders behind one interface. Explain which part is Strategy-like, then propose a more testable alternative to the Singleton (create one logger at startup and pass it in).",
    },
    {
      title: "Apply it to your own code: refactor one class with SRP and Strategy",
      note: "No suitable external exercise covers this. In your project or an earlier exercise, find a class with two responsibilities or a growing if/elif chain over types. Split it, or move each variant behind one interface (or a dictionary of functions), name the principle each change applies, and stop when the code is clear rather than when every principle is maximized.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the Single Responsibility Principle?",
      answer:
        "A class should have one reason to change: one responsibility. A class that calculates invoices and also formats and emails them changes whenever tax rules, layout or email delivery change. Splitting it means each change touches one place and each part can be tested alone. The trade-off is more classes; do not split until responsibilities genuinely differ.",
      followUps: ["How do you decide what counts as one responsibility?"],
      source: { title: "DigitalOcean — SOLID: The First 5 Principles of Object Oriented Design", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
    },
    {
      question: "What is the Open/Closed Principle?",
      answer:
        "Software should be open for extension but closed for modification: you add new behavior by adding code, not by editing working code. A growing if/elif chain over types is the usual warning sign; moving each variant behind a common interface lets you add a variant as a new class or function. Apply it where variation is expected; for two stable cases an if statement is simpler.",
      followUps: ["What is the cost of applying Open/Closed everywhere?"],
      source: { title: "DigitalOcean — SOLID: The First 5 Principles of Object Oriented Design", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
    },
    {
      question: "What is the Liskov Substitution Principle?",
      answer:
        "Objects of a subclass must be usable wherever the parent is expected without breaking the caller's expectations: a subclass should not demand more of its inputs, guarantee less, or raise errors for operations the parent supports. The classic violation is a Square subclass of Rectangle whose width setter changes both sides, breaking code that sets width and height independently. If a subclass cannot honor the parent's contract, the relationship is not really is-a: use composition or a different hierarchy.",
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
      question: "What is the Interface Segregation Principle?",
      answer:
        "Clients should not be forced to depend on methods they do not use. A large interface (print, scan, fax) forces a simple printer to provide meaningless methods or raise errors. Smaller, focused interfaces let each class implement only what it supports. In Python this often means small Protocols or plain duck typing; do not split interfaces so finely that nobody can follow them.",
      followUps: ["How does this principle relate to Single Responsibility?"],
      source: { title: "DigitalOcean — SOLID: The First 5 Principles of Object Oriented Design", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
    },
    {
      question: "What is the Dependency Inversion Principle, and how is it different from dependency injection?",
      answer:
        "Dependency inversion says high-level policy code should depend on abstractions, not low-level details: an OrderService should depend on \"something that can notify\", not on a specific SMTP client. Dependency injection is a technique for how an object receives a dependency — from outside, usually through the constructor. Injection is the common way to achieve inversion, but they differ: you can inject a low-level concrete class and still violate inversion. Python needs no injection framework; passing objects in is enough.",
      followUps: ["Why does dependency inversion make code easier to test?"],
      source: { title: "Brett L. Schuchert — DIP in the Wild (martinfowler.com)", url: "https://martinfowler.com/articles/dipInTheWild.html" },
    },
    {
      question: "When would you use the Strategy pattern?",
      answer:
        "When an operation has several interchangeable algorithms chosen at runtime — pricing rules, sorting policies, payment methods — and you want to add new ones without changing the code that uses them. Each strategy implements the same interface and the context holds one. In Python a strategy can simply be a function passed as an argument; use classes when strategies need configuration or several methods.",
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
      question: "What is the difference between a simple factory and the Factory Method pattern?",
      answer:
        "A simple factory is one function or method that decides which class to instantiate from an input, centralizing creation logic — in Python often a dictionary from name to class plus a clear error for unknown names. Factory Method is a pattern in which a base class's workflow calls a creation method that subclasses override to choose the concrete type, so the workflow stays unchanged. A simple factory is usually enough; Factory Method suits framework-style base classes.",
      followUps: ["What problem does centralizing object creation solve?"],
      source: { title: "Refactoring.Guru — Factory Comparison", url: "https://refactoring.guru/design-patterns/factory-comparison" },
    },
    {
      question: "What is the Observer pattern?",
      answer:
        "A subject keeps a list of subscribers and notifies each one when its state changes, without knowing what they do. It decouples the source of events from the reactions: adding a reaction means subscribing another observer. Typical uses are UI events, notifications and domain events. Watch for observers that are never unsubscribed, one failing observer stopping the rest, and long notification chains that are hard to trace.",
      followUps: ["How would you stop one failing observer from preventing the others being notified?"],
      source: { title: "Refactoring.Guru — Observer", url: "https://refactoring.guru/design-patterns/observer" },
    },
    {
      question: "What is the Adapter pattern?",
      answer:
        "An adapter converts the interface of an existing class into the interface your code expects, so incompatible classes work together without modifying either. It is common when integrating third-party libraries or legacy code: for example, a PaymentAdapter exposes pay(dollars) and calls a vendor's make_payment(cents). The adapter wraps the other object and translates the calls.",
      followUps: ["How is an adapter different from a decorator?"],
      source: { title: "Refactoring.Guru — Adapter", url: "https://refactoring.guru/design-patterns/adapter" },
    },
    {
      question: "What is the Decorator design pattern, and how is it different from Python's @decorator syntax?",
      answer:
        "The Decorator pattern wraps an object in another object with the same interface to add behavior, such as logging or caching, without changing the original class; wrappers can be stacked. Python's @decorator syntax is a language feature that replaces a function or class with the result of calling another function on it at definition time. Both involve wrapping, but the pattern is about objects sharing an interface, and a Python decorator is not necessarily an implementation of the pattern.",
      followUps: ["When would you choose a decorator object over a subclass?"],
      source: { title: "Brandon Rhodes — The Decorator Pattern", url: "https://python-patterns.guide/gang-of-four/decorator-pattern/" },
    },
    {
      question: "What is the Singleton pattern, and why is it often discouraged?",
      answer:
        "Singleton ensures a class has only one instance and provides global access to it, often for configuration or a connection pool. Its problems are those of global state: hidden dependencies, coupling across the codebase, and tests that interfere with each other or cannot replace the instance. In Python a module-level object already gives one shared instance; usually it is better to create one object at startup and pass it to the code that needs it.",
      followUps: ["How would you test code that reads a global Singleton?"],
      source: { title: "Refactoring.Guru — Singleton (Pros and Cons)", url: "https://refactoring.guru/design-patterns/singleton" },
    },
    {
      question: "How do you decide whether to use a design pattern?",
      answer:
        "Start from the problem, not the pattern. Use one when the requirements show the problem it solves — several interchangeable behaviors, a need to react to events, an incompatible interface — and the simpler alternative is getting worse. Prefer plain functions, dictionaries and composition first. In an interview, naming a pattern is a bonus; explaining why the design fits the requirements is what matters.",
      followUps: ["Describe a time you removed unnecessary abstraction from code."],
      source: { title: "Refactoring.Guru — Criticism of patterns", url: "https://refactoring.guru/design-patterns/criticism" },
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
    "You can implement Strategy, a simple factory, Observer and Adapter in Python, and explain Factory Method and the Decorator pattern.",
    "You can explain when a pattern or abstraction is unnecessary and what you would do instead.",
    "You can explain dependency inversion versus dependency injection and the problems with Singleton.",
    "Skip this topic if you can already do all of the above.",
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
