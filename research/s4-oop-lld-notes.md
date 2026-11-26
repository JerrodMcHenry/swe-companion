# S4 OOP and Low-Level Design — notes

Recorded 2026-11-25. Focused resource and question verification only. The app does not read this file.

## Published

- **Topics:** Classes and Objects (Implement), Composition, Inheritance and Interfaces (Implement), Designing Small Systems (Apply), and SOLID Principles and Common Design Patterns (Implement).
- **Guide:** OOP & Low-Level Design Interviews (Interview type).

## Interview-question evidence

| Source | Class | Use |
|---|---|---|
| Devinterview OOP interview questions (GitHub; 15 of 52 answers in the repository, the rest on a site; Java-centred) | Commonly recommended | Overlaps with GeeksforGeeks on: what OOP is, encapsulation, polymorphism with overriding vs overloading, inheritance, abstraction, class vs object, access specifiers, cohesion, coupling, constructors, inheritance vs composition |
| GeeksforGeeks OOPs interview questions | Commonly recommended | Same core list, plus abstract class vs interface, association, aggregation and composition, the diamond problem, and shallow vs deep copy |
| Amazon interview topics (R2 A1) | Official | Object-oriented design with defended choices |
| R2 A8–A9, R1 S15 | Candidate | Low-level, API and class-design rounds for new grads (Amazon ×2, Google ×1) |
| awesome-low-level-design | Commonly recommended | Problem set (parking lot, task management, library, shopping, and others) |

- **Commonly recommended questions:** the four pillars, class vs object, encapsulation vs abstraction, inheritance vs composition, polymorphism, overriding vs overloading, abstract class vs interface, cohesion and coupling, and MRO / the diamond problem. They appear in both question lists.
- **Representative editorial questions:** Python-specific behavior (class attributes, name mangling, `__eq__` and hashing, `__new__` vs `__init__`), all SOLID and pattern questions, and the design walk-throughs.
- **Not claimed:** no employer is attributed to any question, and no frequencies are stated.

## Code validation

- **Examples:** 26 new code examples (Unit 3 topics) were run on Python 3.13.5 and matched their `# ->` comments. The Library now has 207 examples: 205 pass and 2 are deliberately not run.
- **Python behavior checked by execution:**
  - a shared mutable class attribute;
  - name mangling (`_Account__balance`);
  - defining `__eq__` while keeping instances hashable;
  - `__new__` running before `__init__`;
  - a second method definition replacing the first, so there is no overloading;
  - an ABC that cannot be instantiated;
  - MRO order in a diamond hierarchy, and `super()` following it;
  - the Liskov violation with Square and Rectangle;
  - `Protocol` working structurally.
- **Invalid operations in design examples:** the library rejects an already-borrowed book, an exceeded limit, returning a book the member doesn't hold, and an unknown ISBN. The parking lot rejects a full lot and an unknown ticket. The cart's fixed discount is clamped so it never goes below zero.

## Resource verification (2026-11-25)

- **Accessible by automated request (HTTP 200):**
  - Python tutorial sections 9.3–9.6 (anchors confirmed), plus the abc, `typing.Protocol` and `property` docs;
  - Think Python chapters 14–17 (titles confirmed);
  - the CS50P Lecture 8 page;
  - refactoring.guru's pattern catalogue;
  - the DigitalOcean SOLID article;
  - the awesome-low-level-design repository (README and the parking-lot problem read);
  - the AlgoMaster LLD article;
  - the Devinterview repository;
  - GeeksforGeeks OOP questions.
- **Confirmed in a browser:** LeetCode Design Parking System (Easy) and Design Underground System (Medium).
- **Excluded:** Design Browser History (the problem statement didn't load), and the Helsinki MOOC parts 8–10 (titles couldn't be confirmed without the browser; not needed given the alternatives).
- **No `verifiedOn` dates** were set.

## Target integration

| Target | OOP / LLD priority |
|---|---|
| Amazon | Classes, composition and design are Essential (design at Apply, with 3 selected exercises); SOLID and patterns are Important at Explain depth |
| Microsoft | Classes, composition and design are Important at Implement |
| Apple | Classes and composition are Important (in the team's language); design is Optional |
| Google, Meta | Design is Optional (conditional on a design round); the professional OOP topics come from the role |
| General SWE role | Classes, composition and design are Important at Implement; SOLID is Optional at Explain |
| Other Employer | Design is Optional, raised to Essential at Apply when a design round is confirmed |
| Rapid-Fire guide | Links Classes and Objects |
| Netflix | Unchanged (role only) |

## Deferred

- Metaclasses, descriptors, `__slots__`, and most special methods.
- The full Gang of Four catalogue, dependency injection frameworks, and enterprise architecture.
- Concurrency, persistence and distributed design within LLD problems.
- High-level system design.

## Editorial effort estimate

Roughly 15–25 hours for Unit 3 at Implement depth, plus 5–10 hours of timed design practice for design-heavy targets. These are editorial estimates.
