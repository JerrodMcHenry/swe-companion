import type { Topic } from "../types";

const topic: Topic = {
  slug: "designing-small-systems",
  title: "Designing Small Systems (Low-Level Design)",
  category: "Object-Oriented Design",
  phase: "object-oriented-programming-and-design",
  overview:
    "Low-level design means turning a small set of requirements — a library, a parking lot, a shopping cart — into classes with clear responsibilities, working code and tests, then explaining your decisions. This topic gives a repeatable approach: clarify, identify entities and responsibilities, define relationships and interfaces, decide state and behavior, implement the core, handle invalid operations, test, and explain trade-offs.",
  whyItMatters:
    "Some employers run object-oriented or low-level design interviews; Amazon's official interview topics include object-oriented design, and candidates report such rounds at several companies. More broadly, every feature you build at work is a small design problem, and interviewers and reviewers look for cohesive classes, low coupling, sensible handling of invalid input and code that is easy to test. This is not high-level system design: there are no servers, databases or scaling questions here.",
  prerequisites: ["Classes and Objects", "Composition, Inheritance and Interfaces", "Testing and dry-running code (Python Debugging)"],
  objectives: [
    "Clarify requirements and constraints before designing: what must the system do, and what is out of scope?",
    "Identify the main entities (nouns) and their responsibilities (verbs), and keep each class focused.",
    "Define relationships (has-a, is-a) and the public methods each class exposes.",
    "Decide where state lives and which class is responsible for keeping it valid.",
    "Implement the essential operations first, in clean, runnable code.",
    "Handle invalid operations and edge cases explicitly, usually by raising clear exceptions.",
    "Test valid paths, invalid operations and boundary cases.",
    "Explain cohesion, coupling, maintainability and testability in terms of your design, and adapt it when requirements change.",
    "Avoid overengineering: no patterns, interfaces or layers that the requirements do not need.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Awesome Low-Level Design — interview problems and \"How to answer a LLD interview problem\"",
      url: "https://github.com/ashishps1/awesome-low-level-design",
      provider: "Ashish Pratap Singh (GitHub)",
      type: "Repository",
      instructions:
        "Free problem statements with class diagrams and Python solutions. Use the Easy problems (parking lot, task management) and the library management problem. The reference solutions add concurrency and patterns such as Singleton that entry-level designs do not need; compare, do not copy.",
    },
    {
      title: "Think Python — Chapter 17: Inheritance (card game case study)",
      url: "https://allendowney.github.io/ThinkPython/chap17.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions: "Written alternative: a complete worked design of cards, decks and hands, including where inheritance helps and where it does not.",
    },
  ],
  exercises: [
    {
      title: "Parking lot: requirements — spots of three sizes; a vehicle parks in the smallest free spot that fits; it can leave; report free spots by size.",
      note: "Acceptance criteria: parking when full raises a clear error; leaving with an unknown ticket raises an error; a motorcycle may use any spot, a truck only a large one. Foundation; about 45 minutes once the topic is clear.",
    },
    {
      title: "Shopping cart: requirements — add and remove items with quantities, compute the total, apply one discount code (percentage or fixed amount).",
      note: "Acceptance criteria: quantities must be positive; removing more than present raises an error; discounts never make the total negative; adding a new discount type requires no change to the Cart class. Reinforcement.",
    },
    {
      title: "Task manager: requirements — create tasks with a title, due date and status; assign to users; move between statuses (to do, in progress, done) only in valid ways; list a user's overdue tasks.",
      note: "Acceptance criteria: invalid transitions (done → to do) raise an error; overdue listing is correct at the boundary date. Transfer.",
    },
    {
      title: "Notification system: requirements — users choose channels (email, SMS); sending a notification delivers it on each chosen channel; adding a channel must not change existing classes.",
      note: "Acceptance criteria: tested with fake channels; a failing channel does not stop the others. Optional stretch; pairs with the Observer and Strategy patterns.",
    },
    {
      title: "Design Underground System (LeetCode)",
      url: "https://leetcode.com/problems/design-underground-system/",
      note: "Medium. A timed \"design the class and its data structures\" problem; explain your choice of dictionaries.",
    },
  ],
  interviewQuestions: [
    {
      question: "Walk me through designing a simple library system where members borrow and return books.",
      answer:
        "Clarify first: one copy per book or several? A borrowing limit? Due dates? Then identify entities — Book, Member, Library — and responsibilities: the Library coordinates borrowing and owns the catalogue; a Member tracks what they hold; a Book knows whether it is available. Implement borrow and return, reject invalid operations (unknown book, already borrowed, over the limit, returning something not held) with clear errors, and test both valid and invalid paths. Finally, explain the trade-offs, such as why the borrowing rules live in Library rather than Book.",
      code: `class Book:
    def __init__(self, isbn, title):
        self.isbn, self.title = isbn, title
        self.borrower = None

class Member:
    LIMIT = 2

    def __init__(self, name):
        self.name = name
        self.books = []

class Library:
    def __init__(self):
        self.catalogue = {}

    def add(self, book):
        self.catalogue[book.isbn] = book

    def borrow(self, member, isbn):
        book = self.catalogue.get(isbn)
        if book is None:
            raise KeyError(f"unknown book {isbn}")
        if book.borrower is not None:
            raise ValueError("already borrowed")
        if len(member.books) >= member.LIMIT:
            raise ValueError("borrowing limit reached")
        book.borrower = member
        member.books.append(book)

    def give_back(self, member, isbn):
        book = self.catalogue.get(isbn)
        if book is None or book.borrower is not member:
            raise ValueError("member does not hold this book")
        book.borrower = None
        member.books.remove(book)

lib, ana, ben = Library(), Member("Ana"), Member("Ben")
for isbn, title in [("1", "SICP"), ("2", "CLRS"), ("3", "TAOCP")]:
    lib.add(Book(isbn, title))
lib.borrow(ana, "1"); lib.borrow(ana, "2")
for action in (lambda: lib.borrow(ben, "1"), lambda: lib.borrow(ana, "3"),
               lambda: lib.give_back(ben, "2"), lambda: lib.borrow(ana, "9")):
    try:
        action()
    except (ValueError, KeyError) as error:
        print(type(error).__name__, error)
# -> ValueError already borrowed
# -> ValueError borrowing limit reached
# -> ValueError member does not hold this book
# -> KeyError 'unknown book 9'
lib.give_back(ana, "1")
print([b.title for b in ana.books], lib.catalogue["1"].borrower)   # -> ['CLRS'] None`,
      followUps: [
        "How would you add due dates and late fees?",
        "What would change if a book had several copies?",
      ],
    },
    {
      question: "What questions would you ask before starting a low-level design?",
      answer:
        "Ask what the core use cases are, who the actors are, what the main constraints and rules are (limits, sizes, states), what should happen on invalid input, and what is out of scope (persistence, user interface, concurrency). Agree on a small scope you can implement well in the time, and note extensions you would add later. Clarifying prevents designing the wrong thing and shows you think about requirements.",
      code: `clarifying = [
    "Core use cases?", "Rules and limits?", "Invalid input behavior?",
    "Out of scope (storage, UI, concurrency)?", "Likely extensions?",
]
print(len(clarifying))   # -> 5`,
      followUps: ["How do you decide what to leave out when time is short?"],
    },
    {
      question: "What are cohesion and coupling, and why do they matter in a design?",
      answer:
        "Cohesion is how closely related the responsibilities inside one class are; high cohesion means a class does one job well. Coupling is how much classes depend on each other's details; low coupling means you can change one without breaking others. Aim for high cohesion and low coupling: classes become easier to understand, test and change. In the library example, Library coordinates rules while Book only tracks its availability, and the classes interact through a few clear methods.",
      code: `class PriceCalculator:                 # cohesive: only pricing
    def total(self, items):
        return sum(price * qty for price, qty in items)

class Receipt:                         # cohesive: only formatting
    def render(self, total):
        return f"Total: {total:.2f}"

items = [(2.5, 2), (1.0, 3)]
print(Receipt().render(PriceCalculator().total(items)))   # -> Total: 8.00`,
      followUps: ["What does a low-cohesion \"God class\" look like, and how would you split it?"],
    },
    {
      question: "How would you design a parking lot at entry level?",
      answer:
        "Clarify vehicle and spot sizes, how a spot is chosen, and what to return on entry. Entities: ParkingLot (assigns and releases spots, issues tickets), Spot (size, occupied or not) and Vehicle (size). Keep the fitting rule in one place. Use a dictionary from ticket to spot so leaving is O(1). Reject a full lot and unknown tickets. Avoid adding payment, multiple floors or concurrency unless asked; mention them as extensions.",
      code: `SIZES = ["small", "medium", "large"]

class ParkingLot:
    def __init__(self, counts):
        self.free = {size: counts.get(size, 0) for size in SIZES}
        self.tickets = {}
        self.next_ticket = 1

    def park(self, vehicle_size):
        for size in SIZES[SIZES.index(vehicle_size):]:     # smallest spot that fits
            if self.free[size] > 0:
                self.free[size] -= 1
                ticket, self.next_ticket = self.next_ticket, self.next_ticket + 1
                self.tickets[ticket] = size
                return ticket
        raise ValueError("no spot available")

    def leave(self, ticket):
        if ticket not in self.tickets:
            raise KeyError("unknown ticket")
        self.free[self.tickets.pop(ticket)] += 1

lot = ParkingLot({"small": 1, "large": 1})
t1 = lot.park("small")
t2 = lot.park("small")          # small full, uses large
print(lot.free)                 # -> {'small': 0, 'medium': 0, 'large': 0}
try:
    lot.park("medium")
except ValueError as error:
    print(error)                # -> no spot available
lot.leave(t2)
print(lot.free["large"])        # -> 1`,
      followUps: ["How would you support several floors? What would you change to show which spot was assigned?"],
    },
    {
      question: "The interviewer adds a requirement halfway through. How do you handle it?",
      answer:
        "Restate the new requirement and its impact, then find the smallest change that fits the design. Good designs absorb change in one place: if discounts were a separate object behind a common interface, a new discount type is a new class rather than an edit to the cart. If the design does not accommodate the change cleanly, say what you would refactor and why. Interviewers are checking that your design can evolve and that you reason calmly about trade-offs.",
      code: `class Percentage:
    def __init__(self, pct):
        self.pct = pct

    def apply(self, total):
        return total * (1 - self.pct / 100)

class FixedAmount:                       # new requirement: a new class, Cart unchanged
    def __init__(self, amount):
        self.amount = amount

    def apply(self, total):
        return max(0, total - self.amount)

class Cart:
    def __init__(self, discount=None):
        self.items, self.discount = [], discount

    def total(self):
        subtotal = sum(self.items)
        return self.discount.apply(subtotal) if self.discount else subtotal

fixed = Cart(FixedAmount(50)); fixed.items = [20, 10]
pct = Cart(Percentage(10)); pct.items = [100]
print(fixed.total(), pct.total())   # -> 0 90.0`,
      followUps: ["Which design choice made this change cheap?"],
    },
    {
      question: "How do you test a low-level design?",
      answer:
        "Test behavior through the public methods: the main success paths, each invalid operation (expecting a specific exception) and boundaries such as exactly full, empty and limit reached. Keep collaborators injectable so you can substitute fakes for things like clocks or notifiers. In an interview without a test framework, write a few assertions or a short script, and say which further cases you would add.",
      code: `class Counter:
    def __init__(self, limit):
        self.limit, self.value = limit, 0

    def increment(self):
        if self.value >= self.limit:
            raise ValueError("limit reached")
        self.value += 1

c = Counter(2)
c.increment(); c.increment()
assert c.value == 2
try:
    c.increment()
    raise AssertionError("expected ValueError")
except ValueError:
    pass
print("all checks passed")   # -> all checks passed`,
      followUps: ["How would you test code that depends on the current date?"],
    },
    {
      question: "How do you avoid overengineering a design?",
      answer:
        "Build for the stated requirements plus obvious near-term changes, not every imaginable future. Add an interface or pattern only when there are, or will clearly be, several implementations, or when it makes testing easier. A few clear classes with good names beat a hierarchy of abstract layers. In interviews, mention possible extensions verbally rather than implementing them.",
      code: `def shipping_cost(weight_kg):        # a function is enough for one rule
    return 5 if weight_kg <= 1 else 5 + 2 * (weight_kg - 1)

print(shipping_cost(0.5), shipping_cost(3))   # -> 5 9`,
      followUps: ["When would you turn this function into a strategy object?"],
    },
  ],
  mistakes: [
    "Starting to code classes before clarifying the requirements and scope.",
    "One large class that does everything, or many tiny classes with no clear responsibility.",
    "Spreading the same rule across several classes, so a change requires many edits.",
    "Ignoring invalid operations, letting the system reach impossible states.",
    "Adding Singletons, factories or abstract layers the requirements do not need.",
    "Designing for distributed systems, databases or concurrency in an entry-level object design question unless asked.",
    "Not testing, or testing only the happy path.",
  ],
  mastery: [
    "Given a short set of requirements, you can clarify scope, propose classes and responsibilities, and explain them aloud.",
    "You can implement the core of a small system in about 45 minutes with invalid operations handled (editorial practice guide).",
    "You can write tests for valid, invalid and boundary cases.",
    "You can adapt your design to a new requirement and explain what made the change easy or hard.",
    "Design-heavy interview preparation (Apply depth): you can do this for an unfamiliar problem under time pressure and defend your trade-offs.",
  ],
  deprioritize: [
    "High-level system design: servers, databases, caching, load balancing and scaling.",
    "Concurrency and thread safety in design problems, unless the role or interviewer requires it.",
    "Formal UML beyond simple boxes and arrows.",
    "Large catalogues of design problems; a few done well transfer better than many done partially.",
  ],
  keywords: [
    "low-level design",
    "LLD",
    "object-oriented design",
    "OOD",
    "class design",
    "parking lot",
    "library management",
    "shopping cart",
    "cohesion",
    "coupling",
    "requirements",
    "testability",
    "overengineering",
  ],
};

export default topic;
