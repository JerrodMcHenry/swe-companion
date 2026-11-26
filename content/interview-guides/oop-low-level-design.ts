import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "oop-low-level-design",
  title: "OOP & Low-Level Design Interviews",
  category: "Interview type",
  description: "Object-oriented concept questions and small-system design rounds: what they assess, how to approach them and how to practise.",
  level: "Entry level",
  overview:
    "Object-oriented and low-level design (LLD) interviews ask you to explain object-oriented concepts or to design and often code a small system — a parking lot, a library, a shopping cart — with classes, relationships and behavior. They differ from algorithmic coding rounds, which test a single algorithm against constraints, and from high-level system design, which is about services, storage and scaling. Not every employer runs them: prioritize them when your target's evidence or your recruiter indicates a design round (for example, Amazon's official topics include object-oriented design). The concepts are also everyday professional skills. The technical content and question bank live in the Unit 3 Library topics linked below.",
  process: [
    "Concept questions: short questions on the four pillars, inheritance versus composition, interfaces, SOLID and patterns, sometimes inside other rounds.",
    "Design discussion: you propose classes, responsibilities and relationships for a small system and explain trade-offs, often on a whiteboard or in a shared document.",
    "Design and code: you implement the core classes in about 45 minutes, handle invalid operations and adapt to a new requirement.",
    "Formats and whether a dedicated round exists vary by employer and team; ask your recruiter.",
  ],
  competencies: [
    "Clarifying requirements and scope before designing.",
    "Identifying entities, responsibilities and relationships.",
    "Choosing inheritance or composition appropriately, and defining clear interfaces.",
    "Implementing working classes that keep their state valid and reject invalid operations.",
    "Testing the design.",
    "Explaining trade-offs, adapting to changed requirements and avoiding overengineering.",
  ],
  studyTopics: [
    { title: "Classes and objects", priority: "Essential", depth: "Implement", slug: "classes-objects", reason: "The building blocks of every design answer; concept questions often probe Python-specific behavior.", exercises: ["Design Parking System (LeetCode)"] },
    { title: "Composition, inheritance and interfaces", priority: "Essential", depth: "Implement", slug: "composition-inheritance-interfaces", reason: "Choosing relationships and interfaces is the core judgment these interviews assess." },
    {
      title: "Designing small systems",
      priority: "Essential",
      depth: "Apply",
      slug: "designing-small-systems",
      reason: "The repeatable approach and worked example for design rounds.",
      exercises: [
        "Parking lot: requirements — spots of three sizes; a vehicle parks in the smallest free spot that fits; it can leave; report free spots by size.",
        "Shopping cart: requirements — add and remove items with quantities, compute the total, apply one discount code (percentage or fixed amount).",
        "Design Underground System (LeetCode)",
      ],
    },
    { title: "SOLID principles and common design patterns", priority: "Important", depth: "Explain", slug: "solid-design-patterns", reason: "Gives vocabulary for explaining your design; use patterns only when the requirements need them." },
    { title: "Testing and dry-running code", priority: "Important", depth: "Implement", slug: "python-debugging" },
    { title: "Concurrency, persistence and distributed design", priority: "Defer", reason: "Beyond entry-level object design unless the interviewer explicitly asks; mention as extensions instead." },
  ],
  sequence: [
    "Learn Classes and Objects and Composition, Inheritance and Interfaces until you can answer their interview questions aloud.",
    "Study the design approach and worked example in Designing Small Systems.",
    "Solve two design exercises untimed, writing tests for invalid operations.",
    "Learn the SOLID principles and the five patterns, and revisit your designs to see where they apply — and where they would be overkill.",
    "Do timed design practice: about 45 minutes per problem, explaining aloud, then have someone add a requirement midway.",
  ],
  practice: [
    {
      title: "Timed design round (editorial)",
      note: "Pick an unseen problem from the Awesome Low-Level Design list, spend 5–10 minutes clarifying and sketching classes, 25–30 minutes implementing the core, and the rest testing and explaining. Ask a partner to add a requirement halfway.",
    },
    {
      title: "Concept questions aloud",
      note: "Answer the interview questions in the four Unit 3 topics without notes, each in about a minute, with a small example.",
    },
    {
      title: "Awesome Low-Level Design problem list",
      url: "https://github.com/ashishps1/awesome-low-level-design",
      note: "Free problem statements. Start with the Easy problems; ignore concurrency requirements unless your target needs them.",
    },
  ],
  resources: [
    {
      title: "How to answer a low-level design interview problem",
      url: "https://blog.algomaster.io/p/how-to-answer-a-lld-interview-problem",
      provider: "AlgoMaster (Ashish Pratap Singh)",
      type: "Article",
      instructions: "Optional free article on structuring an LLD answer; it matches the approach in Designing Small Systems.",
    },
    {
      title: "Refactoring.Guru — Design Patterns",
      url: "https://refactoring.guru/design-patterns",
      provider: "Refactoring.Guru",
      type: "Visual explanation",
      instructions: "Use for the five patterns in the SOLID and Patterns topic only.",
    },
  ],
  readiness: [
    "You can explain the four pillars, inheritance versus composition, abstract classes versus interfaces and SOLID with examples, without notes.",
    "Editorial practice guide, not an employer threshold: design and implement an unseen small system in about 45 minutes, handling invalid operations, with a few tests.",
    "You can adapt your design to a new requirement and explain what made it easy or hard.",
    "You can say when a pattern or abstraction would be unnecessary.",
    "General professional readiness needs Implement depth; design-heavy targets need Apply depth under time pressure.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/rapid-fire-technical-questions",
    "/interview-prep/amazon",
  ],
  sources: [
    { title: "Amazon — Software Development Interview Topics (object-oriented design; official)", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" },
    { title: "Devinterview — OOP interview questions (commonly recommended question list)", url: "https://github.com/Devinterview-io/oop-interview-questions" },
    { title: "GeeksforGeeks — OOPs interview questions (commonly recommended question list)", url: "https://www.geeksforgeeks.org/interview-prep/oops-interview-questions/" },
  ],
};

export default guide;
