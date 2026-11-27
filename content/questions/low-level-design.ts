import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Design questions",
    question: "What questions would you ask before starting a low-level design?",
    answer: "Ask what the core use cases are, who the actors are, what the rules and limits are (sizes, states, maximums), what should happen on invalid input, and what is out of scope (persistence, user interface, concurrency). Agree on a small scope you can implement well in the time and note extensions for later. Clarifying prevents designing the wrong thing and shows you think about requirements.",
    followUps: ["How do you decide what to leave out when time is short?"],
    source: { title: "AlgoMaster — How to Answer a LLD Interview Problem (Step 1)", url: "https://blog.algomaster.io/p/how-to-answer-a-lld-interview-problem" },
  },
  {
    group: "Design questions",
    question: "Walk me through designing a simple library system where members borrow and return books.",
    answer: "Clarify first: one copy per book or several? A borrowing limit? Due dates? Then name entities and responsibilities: Library coordinates borrowing and owns the catalogue (a dictionary from ISBN to Book); Member tracks the books it holds; Book knows whether it is available. Implement borrow and return, reject invalid operations (unknown book, already borrowed, over the limit, returning a book the member does not hold) with clear exceptions, and test both valid and invalid paths. Finish with trade-offs, such as why the borrowing rules live in Library rather than Book.",
    followUps: ["How would you add due dates and late fees?","What would change if a book had several copies?"],
    source: { title: "AlgoMaster — How to Answer a LLD Interview Problem", url: "https://blog.algomaster.io/p/how-to-answer-a-lld-interview-problem" },
  },
  {
    group: "Design questions",
    question: "How would you design a parking lot at entry level?",
    answer: "Clarify vehicle and spot sizes, how a spot is chosen and what entry returns. Entities: ParkingLot (assigns and releases spots, issues tickets), Spot (size, occupied or not) and Vehicle (size). Keep the fitting rule in one place, and keep a dictionary from ticket to spot so leaving is O(1) on average. Reject a full lot and unknown tickets with clear errors. Do not add payment, multiple floors or concurrency unless asked; mention them as extensions.",
    followUps: ["How would you support several floors? What would you change to show which spot was assigned?"],
    source: { title: "Awesome Low-Level Design — Design Parking Lot", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md" },
  },
  {
    group: "Design questions",
    question: "What are cohesion and coupling, and why do they matter in a design?",
    answer: "Cohesion is how closely related the responsibilities inside one class are; high cohesion means a class does one job well. Coupling is how much classes depend on each other's details; low coupling means you can change one without breaking others. Aim for high cohesion and low coupling so classes are easier to understand, test and change: in the library example, Library enforces the rules while Book only tracks availability, and they interact through a few clear methods.",
    followUps: ["What does a low-cohesion \"God class\" look like, and how would you split it?"],
    source: { title: "Wikipedia — Cohesion (computer science)", url: "https://en.wikipedia.org/wiki/Cohesion_(computer_science)" },
  },
  {
    group: "Design questions",
    question: "The interviewer adds a requirement halfway through. How do you handle it?",
    answer: "Restate the new requirement and its impact, then find the smallest change that fits the design. Good designs absorb change in one place: if each discount type is a separate object with the same apply(total) method, a new discount type is a new class rather than an edit to the Cart. If the design does not accommodate the change cleanly, say what you would refactor and why. Handled this way, the change shows that your design can evolve and that you can reason about trade-offs under pressure.",
    followUps: ["Which design choice made this change cheap?"],
    source: { title: "Refactoring.Guru — Strategy", url: "https://refactoring.guru/design-patterns/strategy" },
  },
  {
    group: "Design questions",
    question: "How do you test a low-level design?",
    answer: "Test behavior through the public methods: the main success paths, each invalid operation (expecting the specific exception) and boundaries such as empty, exactly full and limit reached. Keep collaborators injectable so tests can substitute fakes for clocks or notifiers. In an interview without a test framework, write a few assertions or a short demo script and say which further cases you would add.",
    followUps: ["How would you test code that depends on the current date?"],
    source: { title: "pytest — Assertions about expected exceptions", url: "https://docs.pytest.org/en/stable/how-to/assert.html#assertions-about-expected-exceptions" },
  },
  {
    group: "Design questions",
    question: "How do you avoid overengineering a design?",
    answer: "Build for the stated requirements plus obvious near-term changes, not every imaginable future. Add an interface or pattern only when there are, or clearly will be, several implementations, or when it makes testing easier; a single shipping rule can be a plain function. A few clear classes with good names beat a hierarchy of abstract layers. In interviews, mention possible extensions verbally rather than implementing them.",
    followUps: ["When would you turn that function into a strategy object?"],
    source: { title: "Martin Fowler — Yagni", url: "https://martinfowler.com/bliki/Yagni.html" },
  },
];

export default questions;
