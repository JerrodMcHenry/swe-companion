import type { Topic } from "../types";

const topic: Topic = {
  slug: "problem-solving-process",
  title: "Problem-Solving Process and Communication",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "A repeatable way to approach an unfamiliar coding problem and talk through it: understand and clarify the problem, work examples and edge cases, find a correct approach, improve it if needed, explain the plan, implement, test, and state the complexity and trade-offs. It is a flexible framework, not a script.",
  whyItMatters:
    "Coding interviews assess how you reach a solution as much as whether you reach it. Google's official mock interview shows the candidate asking clarifying questions, explaining their thinking, starting with a straightforward approach and then optimizing; Amazon's official guidance asks for syntactically correct, well-tested code and checked edge cases. The same habits — clarify requirements, reason about cases, explain decisions — are how engineers work on real tickets. Learn this topic first and apply it to every problem in this unit.",
  prerequisites: ["Programming Fluency checkpoint (Unit 1)", "Python Debugging (for testing and dry-running)"],
  objectives: [
    "Restate a problem in your own words and ask focused clarifying questions about inputs, outputs, constraints and edge cases.",
    "Work through small examples by hand, including edge cases, before coding.",
    "Describe a straightforward correct approach and its complexity, then look for improvements using the constraints.",
    "Recognize common signals that suggest a data structure or pattern (sorted input, \"pairs\", \"contiguous\", \"shortest\", \"all combinations\").",
    "Explain your chosen approach before writing code, and get agreement.",
    "Implement in clean, complete code without relying on running it.",
    "Test by dry-running examples and edge cases, find and fix bugs, and state final time and space complexity.",
    "Discuss trade-offs and answer follow-ups such as \"What if the input did not fit in memory?\"",
    "Manage time, and recover when stuck by revisiting examples or simplifying the problem.",
    "Skip for now: memorized scripts and formal correctness proofs.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Coding interview cheatsheet",
      url: "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions:
        "Start here. Read \"What to do during a coding interview\" steps 2–5: clarifying the question, working out the approach with the interviewer, coding while talking, and checking your code with test cases (about 15 minutes). Skim the before and after sections; skip the course advertisements. Free, no account.",
    },
    {
      title: "Coding interview techniques",
      url: "https://www.techinterviewhandbook.org/coding-interview-techniques/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions:
        "Companion to Start here for the step most candidates get stuck on. Read \"How to find solutions to coding interview problems\" (techniques 1–5) and \"How to optimize time complexity\" (about 15 minutes). Skip the space-optimization section for now.",
    },
    {
      title: "How to solve a Google coding interview question",
      url: "https://www.youtube.com/watch?v=Ti5vfu9arXQ",
      provider: "Life at Google (official)",
      type: "Video",
      instructions:
        "Official mock interview: watch the whole video to see the process performed. Note the clarifying questions, the move from a straightforward approach to an optimized one, and how the candidate explains while coding.",
    },
    {
      title: "Software development interview topics — Coding",
      url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics",
      provider: "Amazon (official)",
      type: "Article",
      instructions:
        "Official employer guidance. Open only the Coding topic: syntactically correct code (no pseudocode), well-tested code and checking edge cases. Two minutes.",
    },
  ],
  exercises: [
    {
      title: "For your next three problems in this unit, write the clarifying questions, examples, edge cases and approach before any code.",
      note: "Foundation. Five minutes of planning; then compare your plan with the final solution.",
    },
    {
      title: "Majority Element (LeetCode)",
      url: "https://leetcode.com/problems/majority-element/",
      note: "Foundation, Easy. Solve it three ways — counting with a dictionary, sorting, and (optional) Boyer–Moore voting — and compare time and space aloud. Free LeetCode account needed to submit.",
    },
    {
      title: "Missing Number (LeetCode)",
      url: "https://leetcode.com/problems/missing-number/",
      note: "Reinforcement, Easy. Compare a set, sorting and the arithmetic-sum approach; discuss which you would choose and why.",
    },
    {
      title: "Record yourself solving an unseen Easy problem while talking aloud for 20 minutes, then watch it back.",
      note: "Communication practice. Note silences, unexplained jumps and untested code.",
    },
    {
      title: "Do a mock interview with another person who gives you an unfamiliar problem and asks follow-ups.",
      note: "Transfer. A peer, mentor or a free peer mock-interview platform works; practise without AI or code execution if your target employer interviews that way.",
    },
  ],
  interviewQuestions: [
    {
      question: "What clarifying questions would you ask before solving a coding problem?",
      answer:
        "Questions that change the solution: the input type and size, whether it can be empty, whether values can be negative or duplicated, whether the input is sorted, what to return when there is no answer, whether several answers are valid, and whether I may modify the input. Constraints such as n up to 10^5 tell me an O(n²) approach is probably too slow. I restate the problem, then ask a few targeted questions rather than a long list.",
      followUps: ["How do the constraints help you choose an algorithm?"],
      source: {
        title: "Tech Interview Handbook — Upon receiving the question, make clarifications",
        url: "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/#2-upon-receiving-the-question-make-clarifications",
      },
    },
    {
      question: "Should you always code the brute-force solution first?",
      answer:
        "No. Always be able to describe a correct straightforward approach and its complexity: it proves you understand the problem and gives a baseline. If you already see a better approach and can justify it, explain both briefly and implement the better one. If you are stuck on the optimal solution, implementing the straightforward one is better than having no working code.",
      followUps: ["When might the brute-force solution be the right final answer?"],
      source: {
        title: "Tech Interview Handbook — Work out and optimize your approach with the interviewer",
        url: "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/#3-work-out-and-optimize-your-approach-with-the-interviewer",
      },
    },
    {
      question: "How do you find a better approach once you have a working one?",
      answer:
        "Look for repeated work. Common moves: replace a repeated search with a hash map or set lookup; sort first so that two pointers or binary search apply; keep a running value (sum, minimum, window) instead of recomputing; precompute prefix sums; or use a heap when you only need the top k. Also estimate the best possible complexity — if you must read every element, you cannot beat O(n) — so you know when to stop optimizing.",
      followUps: ["What signals suggest sorting first? What signals suggest a hash map?"],
      source: {
        title: "Tech Interview Handbook — How to optimize time complexity",
        url: "https://www.techinterviewhandbook.org/coding-interview-techniques/#how-to-optimize-time-complexity",
      },
    },
    {
      question: "How do you test a solution without running it?",
      answer:
        "Read the code as if someone else wrote it, looking for off-by-one errors. Dry-run it on the given example, tracking variables in a small table, then on edge cases: empty input, one element, two elements, duplicates, negative numbers, all-equal values and the boundaries of each loop. Check that every branch returns the right type and that indexes stay in range. Say aloud what each test checks, then restate the time and space complexity.",
      followUps: ["Which edge cases would you test for a function that merges two sorted lists?"],
      source: {
        title: "Tech Interview Handbook — After coding, check your code and add test cases",
        url: "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/#5-after-coding-check-your-code-and-add-test-cases",
      },
    },
    {
      question: "What should you do when you are stuck in an interview?",
      answer:
        "Say so and keep reasoning aloud. Draw the data and solve a concrete example by hand, noting what you do; try more examples; simplify the problem (smaller input, sorted input, no duplicates) or break it into parts; ask which data structure would make the slow step fast; and consider implementing the straightforward solution. Interviewers often give hints when they can see your reasoning, and taking a hint well is part of the assessment.",
      followUps: ["How do you use an interviewer's hint without losing your own reasoning?"],
      source: {
        title: "Tech Interview Handbook — How to find solutions to coding interview problems",
        url: "https://www.techinterviewhandbook.org/coding-interview-techniques/#how-to-find-solutions-to-coding-interview-problems",
      },
    },
    {
      question: "How should you manage time in a 45-minute coding interview?",
      answer:
        "A rough editorial guide: about 5 minutes understanding and clarifying, 5–10 minutes on examples and the approach, 15–20 minutes implementing, and 5–10 minutes testing and discussing complexity and follow-ups. Leave room for introductions and your own questions, and compress the plan if there is more than one problem. Do not polish details before the core solution works; if you run short, say what you would finish or improve.",
      followUps: ["What would you say if you realize with five minutes left that your approach is wrong?"],
    },
  ],
  mistakes: [
    "Starting to code before understanding the problem or agreeing on the approach.",
    "Working silently, so the interviewer cannot follow or help.",
    "Ignoring constraints that rule out the approach you chose.",
    "Skipping edge cases, then declaring the solution finished without testing.",
    "Polishing variable names or helpers while the core algorithm is still broken.",
    "Memorizing solutions instead of practising how to reach them; unfamiliar variations then fail.",
  ],
  mastery: [
    "On an unseen problem, you ask relevant clarifying questions and list edge cases before coding.",
    "You can state a correct straightforward approach with its complexity, and explain how you improved it.",
    "You explain your plan before coding and narrate key decisions while implementing.",
    "You dry-run and test your code and find your own bugs before the interviewer does.",
    "You finish by stating time and space complexity and at least one trade-off or follow-up.",
    "Skip this topic if mock interviewers already describe your process as clear and well-tested; keep applying it to every problem.",
  ],
  deprioritize: [
    "Memorized scripts or catchphrases; interviewers notice and they do not help on unfamiliar problems.",
    "Formal proof techniques; a clear informal argument for correctness is enough at entry level.",
  ],
  keywords: [
    "problem solving",
    "interview process",
    "clarifying questions",
    "communication",
    "think aloud",
    "brute force",
    "optimization",
    "edge cases",
    "dry run",
    "time management",
  ],
};

export default topic;
