import type { Topic } from "../types";

const topic: Topic = {
  slug: "designing-small-systems",
  title: "Designing Small Systems (Low-Level Design)",
  category: "Object-Oriented Design",
  phase: "object-oriented-programming-and-design",
  overview:
    "Low-level design means turning a short set of requirements — a parking lot, a library, a shopping cart — into focused classes, working code and tests, then explaining your decisions. It is assessed in object-oriented design rounds where employers run them, and it is what every scoped feature at work requires.",
  whyItMatters:
    "Some employers run object-oriented or low-level design interviews; Amazon's official interview topics include object-oriented design, and candidates report such rounds at several companies. More broadly, every feature you build at work is a small design problem, and interviewers and reviewers look for cohesive classes, low coupling, sensible handling of invalid input and code that is easy to test. This is not high-level system design: there are no servers, databases or scaling questions here.",
  prerequisites: ["Classes and Objects", "Composition, Inheritance and Interfaces", "Testing and dry-running code (Python Debugging)"],
  objectives: [
    "Follow a repeatable approach: clarify requirements and scope → identify entities (nouns) and responsibilities (verbs) → define relationships and public methods → decide where state lives and who keeps it valid → implement the core operations → handle invalid operations → test → explain trade-offs.",
    "Ask clarifying questions about use cases, rules and limits, invalid input and what is out of scope (storage, UI, concurrency) before writing classes.",
    "Keep each class focused (high cohesion) and interacting through a few clear methods (low coupling); keep each rule in one place.",
    "Handle invalid operations and edge cases explicitly, usually by raising clear exceptions.",
    "Test valid paths, each invalid operation and boundaries (empty, exactly full, limit reached).",
    "Adapt the design when a requirement is added, and explain what made the change easy or hard.",
    "Avoid overengineering: add a pattern, interface or layer only when the requirements need it.",
    "Skip for now: high-level system design, concurrency and thread safety (unless the role or interviewer requires it), and formal UML beyond boxes and arrows.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "How to Answer a LLD Interview Problem",
      url: "https://blog.algomaster.io/p/how-to-answer-a-lld-interview-problem",
      provider: "AlgoMaster (Ashish Pratap Singh)",
      type: "Article",
      instructions:
        "Start here. Read Step 1 Clarify Requirements through Step 5 Exception Handling: it is the interview approach this topic uses. Examples are in Java; the ideas transfer directly. Skip 4.3 Address concurrency unless your target employer or interviewer asks for it. Free; the site may prompt you to subscribe, which is not required.",
    },
    {
      title: "Awesome Low-Level Design — Low Level Design Interview Problems",
      url: "https://github.com/ashishps1/awesome-low-level-design",
      provider: "Ashish Pratap Singh (GitHub)",
      type: "Repository",
      instructions:
        "The README section \"Low Level Design Interview Problems\" is a free problem bank with requirements, class diagrams and Python reference solutions. Use it for the problems listed under Exercises, attempting each yourself first. The reference solutions routinely add Singletons, concurrency and several patterns that entry-level answers do not need: compare your responsibilities and invalid-input handling with them; do not copy their structure. Ignore the rest of the README for this topic.",
    },
  ],
  exercises: [
    {
      title: "Parking lot: requirements — spots of three sizes; a vehicle parks in the smallest free spot that fits; it can leave; report free spots by size.",
      url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md",
      note: "Implement the scoped requirements in the title, not the linked problem's full list (levels, concurrency). Acceptance criteria: parking when full raises a clear error; leaving with an unknown ticket raises an error; a motorcycle may use any spot, a truck only a large one. Afterwards compare with the linked reference design. Foundation; about 45 minutes once the topic is clear (editorial estimate).",
    },
    {
      title: "Shopping cart: requirements — add and remove items with quantities, compute the total, apply one discount code (percentage or fixed amount).",
      note: "No equivalent external problem at this scope. Acceptance criteria: quantities must be positive; removing more than present raises an error; discounts never make the total negative; adding a new discount type requires no change to the Cart class. Reinforcement.",
    },
    {
      title: "Task manager: requirements — create tasks with a title, due date and status; assign to users; move between statuses (to do, in progress, done) only in valid ways; list a user's overdue tasks.",
      url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/task-management-system.md",
      note: "Implement the scoped requirements in the title; the linked problem adds reminders, search, history and concurrency you can skip. Acceptance criteria: invalid transitions (done → to do) raise an error; overdue listing is correct at the boundary date. Transfer.",
    },
    {
      title: "Awesome Low-Level Design: Design a Library Management System",
      url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/library-management-system.md",
      note: "Transfer. Implement adding books, registering members, borrowing with a limit and returning; skip concurrency. Use it to practise the library interview question below aloud.",
    },
    {
      title: "Awesome Low-Level Design: Design Logging Framework",
      url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/logging-framework.md",
      note: "Optional stretch: log levels and several output destinations behind one interface, where adding a destination changes no existing class. Skip thread safety; test with a fake destination.",
    },
    {
      title: "Design Underground System (LeetCode)",
      url: "https://leetcode.com/problems/design-underground-system/",
      note: "Medium. A timed \"design the class and its data structures\" problem; explain your choice of dictionaries. LeetCode needs a free account to submit.",
    },
  ],
  interviewQuestions: [
    {
      question: "Walk me through designing a simple library system where members borrow and return books.",
      answer:
        "Clarify first: one copy per book or several? A borrowing limit? Due dates? Then name entities and responsibilities: Library coordinates borrowing and owns the catalogue (a dictionary from ISBN to Book); Member tracks the books it holds; Book knows whether it is available. Implement borrow and return, reject invalid operations (unknown book, already borrowed, over the limit, returning a book the member does not hold) with clear exceptions, and test both valid and invalid paths. Finish with trade-offs, such as why the borrowing rules live in Library rather than Book.",
      followUps: ["How would you add due dates and late fees?", "What would change if a book had several copies?"],
      source: { title: "AlgoMaster — How to Answer a LLD Interview Problem", url: "https://blog.algomaster.io/p/how-to-answer-a-lld-interview-problem" },
    },
    {
      question: "What questions would you ask before starting a low-level design?",
      answer:
        "Ask what the core use cases are, who the actors are, what the rules and limits are (sizes, states, maximums), what should happen on invalid input, and what is out of scope (persistence, user interface, concurrency). Agree on a small scope you can implement well in the time and note extensions for later. Clarifying prevents designing the wrong thing and shows you think about requirements.",
      followUps: ["How do you decide what to leave out when time is short?"],
      source: { title: "AlgoMaster — How to Answer a LLD Interview Problem (Step 1)", url: "https://blog.algomaster.io/p/how-to-answer-a-lld-interview-problem" },
    },
    {
      question: "What are cohesion and coupling, and why do they matter in a design?",
      answer:
        "Cohesion is how closely related the responsibilities inside one class are; high cohesion means a class does one job well. Coupling is how much classes depend on each other's details; low coupling means you can change one without breaking others. Aim for high cohesion and low coupling so classes are easier to understand, test and change: in the library example, Library enforces the rules while Book only tracks availability, and they interact through a few clear methods.",
      followUps: ["What does a low-cohesion \"God class\" look like, and how would you split it?"],
      source: { title: "Wikipedia — Cohesion (computer science)", url: "https://en.wikipedia.org/wiki/Cohesion_(computer_science)" },
    },
    {
      question: "How would you design a parking lot at entry level?",
      answer:
        "Clarify vehicle and spot sizes, how a spot is chosen and what entry returns. Entities: ParkingLot (assigns and releases spots, issues tickets), Spot (size, occupied or not) and Vehicle (size). Keep the fitting rule in one place, and keep a dictionary from ticket to spot so leaving is O(1) on average. Reject a full lot and unknown tickets with clear errors. Do not add payment, multiple floors or concurrency unless asked; mention them as extensions.",
      followUps: ["How would you support several floors? What would you change to show which spot was assigned?"],
      source: { title: "Awesome Low-Level Design — Design Parking Lot", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md" },
    },
    {
      question: "The interviewer adds a requirement halfway through. How do you handle it?",
      answer:
        "Restate the new requirement and its impact, then find the smallest change that fits the design. Good designs absorb change in one place: if each discount type is a separate object with the same apply(total) method, a new discount type is a new class rather than an edit to the Cart. If the design does not accommodate the change cleanly, say what you would refactor and why. Handled this way, the change shows that your design can evolve and that you can reason about trade-offs under pressure.",
      followUps: ["Which design choice made this change cheap?"],
      source: { title: "Refactoring.Guru — Strategy", url: "https://refactoring.guru/design-patterns/strategy" },
    },
    {
      question: "How do you test a low-level design?",
      answer:
        "Test behavior through the public methods: the main success paths, each invalid operation (expecting the specific exception) and boundaries such as empty, exactly full and limit reached. Keep collaborators injectable so tests can substitute fakes for clocks or notifiers. In an interview without a test framework, write a few assertions or a short demo script and say which further cases you would add.",
      followUps: ["How would you test code that depends on the current date?"],
      source: { title: "pytest — Assertions about expected exceptions", url: "https://docs.pytest.org/en/stable/how-to/assert.html#assertions-about-expected-exceptions" },
    },
    {
      question: "How do you avoid overengineering a design?",
      answer:
        "Build for the stated requirements plus obvious near-term changes, not every imaginable future. Add an interface or pattern only when there are, or clearly will be, several implementations, or when it makes testing easier; a single shipping rule can be a plain function. A few clear classes with good names beat a hierarchy of abstract layers. In interviews, mention possible extensions verbally rather than implementing them.",
      followUps: ["When would you turn that function into a strategy object?"],
      source: { title: "Martin Fowler — Yagni", url: "https://martinfowler.com/bliki/Yagni.html" },
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
    "You can implement the core of a small system such as the parking lot in about 45 minutes with invalid operations handled (editorial practice guide, not an employer benchmark).",
    "You can write tests for valid, invalid and boundary cases.",
    "You can adapt your design to a new requirement and explain what made the change easy or hard.",
    "Design-heavy interview preparation (Apply depth): you can do this for an unfamiliar problem under time pressure and defend your trade-offs.",
    "Skip this topic if you have already done the above for at least one unfamiliar problem.",
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
