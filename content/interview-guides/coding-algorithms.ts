import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "coding-algorithms",
  title: "Coding & Algorithms Interview Preparation",
  category: "Interview type",
  description: "Problem solving with data structures and algorithms, implementation and complexity analysis.",
  level: "Entry level",
  overview:
    "Coding interviews and online assessments ask you to solve an unfamiliar problem in code within a time limit, and to explain your reasoning, correctness and complexity. They are the most widely reported technical format for entry-level software engineering roles, especially at Big Tech companies and in many enterprise online assessments, though startups often add or substitute practical work. This guide organizes preparation; the techniques, code and interview questions live in the Library topics linked below. You do not need to finish every listed problem: aim to solve unfamiliar problems reliably.",
  process: [
    "Online assessment: one or more problems on a platform such as HackerRank or CodeSignal, usually with code execution and test cases. Amazon's official university guidance describes a coding assessment as the first step for its graduate software roles.",
    "Technical screen: often about 45 minutes in a shared editor with an interviewer, sometimes without running code.",
    "Interview loop: several coding interviews of about 45 minutes each at many Big Tech employers. One recent Google candidate report describes coding in a shared document without a compiler.",
    "Tool rules differ. Google's official hiring page says AI tools are not permitted in interviews, while Meta's official hiring page says many of its interviews include a built-in AI assistant that candidates are expected to use. Ask your recruiter whether you can run code, use documentation or use AI.",
  ],
  competencies: [
    "Understanding the problem and clarifying inputs, outputs, constraints and edge cases.",
    "Working through examples by hand before coding.",
    "Choosing suitable data structures and recognizing the pattern a problem needs.",
    "Developing a correct solution, then optimizing when the constraints require it.",
    "Explaining why the solution is correct and stating its time and space complexity.",
    "Implementing clean, complete code and testing it on normal and edge cases.",
    "Handling follow-up questions, communicating throughout, managing time and recovering when stuck.",
  ],
  studyTopics: [
    {
      title: "Problem-solving process and communication",
      priority: "Essential",
      slug: "problem-solving-process",
      reason: "The step-by-step method used in every coding interview: clarify, examples, approach, implement, test, complexity, follow-ups; plus time management and getting unstuck.",
    },
    {
      title: "Complexity analysis",
      priority: "Essential",
      slug: "complexity-analysis",
      reason: "Asked about nearly every solution; includes average, worst-case and amortized costs and the cost of Python operations.",
    },
    {
      title: "Programming fluency in one language",
      priority: "Essential",
      slug: "python-lists",
      reason: "Write correct code without looking up syntax. Complete the Programming Fluency unit (Lists, Sets, Dictionaries, Strings, Sorting and Python Debugging are the most used in coding problems) or demonstrate equivalent fluency in another language.",
    },
    {
      title: "Arrays and strings: two pointers, sliding window, prefix sums",
      priority: "Essential",
      slug: "arrays-strings-patterns",
      reason: "The most common inputs in coding interviews and online assessments.",
    },
    {
      title: "Hash maps and sets",
      priority: "Essential",
      slug: "hash-map-set-patterns",
      reason: "Membership, counting, complement lookup and grouping; many optimal solutions are a single pass with a dictionary.",
    },
    { title: "Trees and binary search trees", priority: "Essential", slug: "trees-binary-search-trees", reason: "A frequent problem category in preparation lists and candidate reports; tests recursion." },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Essential", slug: "graphs-bfs-dfs", reason: "Named in official employer preparation material and common in reports, including grid problems." },
    { title: "Recursion and backtracking", priority: "Essential", slug: "recursion-backtracking", reason: "Underlies trees, graphs and dynamic programming; named in official preparation material." },
    { title: "Binary search", priority: "Essential", slug: "binary-search", reason: "A common optimization step and a test of precise boundary handling." },
    { title: "Stacks and queues", priority: "Essential", slug: "stacks-queues", reason: "Matching, monotonic-stack and queue-based traversal problems recur in preparation lists." },
    {
      title: "Testing and dry-running your code",
      priority: "Essential",
      slug: "python-debugging",
      reason: "Find your own bugs by tracing examples and edge cases, especially where code cannot be run.",
    },
    { title: "Sorting algorithms and interval patterns", priority: "Important", slug: "sorting-algorithms-intervals" },
    { title: "Heaps and priority queues", priority: "Important", slug: "heaps-priority-queues", reason: "Essential for Big Tech preparation; top-k and merging problems." },
    { title: "Linked lists", priority: "Important", slug: "linked-lists" },
    {
      title: "Dynamic programming basics",
      priority: "Important",
      slug: "dynamic-programming-basics",
      reason: "Basic one- and two-dimensional problems; advanced categories can be deferred.",
    },
    {
      title: "Union-find and shortest paths",
      priority: "Optional",
      slug: "union-find-shortest-paths",
      reason: "Conditional: only for targets whose interviews reach advanced graph problems, typically Big Tech, and only after the core topics.",
    },
  ],
  sequence: [
    "Check your fluency. If you cannot yet write straightforward functions with lists, strings and dictionaries without help, finish Programming Fluency first; if you can, start here.",
    "Learn Problem-Solving Process and Complexity Analysis first, and apply them to every problem afterwards.",
    "Work through the pattern topics in roughly this order: arrays and strings, hash maps and sets, stacks and queues, binary search, linked lists, recursion and backtracking, trees, heaps, graphs, sorting and intervals, dynamic programming.",
    "For each pattern: learn it, solve the topic's Foundation and Reinforcement problems untimed and independently, then try a Transfer problem without hints. Move on when you can explain the pattern and its complexity.",
    "Mix patterns once you have covered several: practise unseen problems without knowing which pattern applies.",
    "Add timed practice and mock interviews only after you can solve problems untimed.",
    "Start applying once you meet your path's readiness guide below; keep practising while applications are in progress.",
  ],
  practice: [
    {
      title: "Untimed independent problem solving",
      note: "Solve without looking at solutions or using AI. If stuck for 20–30 minutes (an editorial guide), read a hint rather than the full solution, then re-solve from scratch a few days later.",
    },
    {
      title: "Coding without AI, autocomplete or execution",
      note: "Practise in a plain editor or shared document at least some of the time, especially if your target employer interviews that way. Dry-run your code before running it.",
    },
    {
      title: "Explaining aloud",
      note: "Talk through clarifying questions, your approach, the code and its complexity as you solve. Recording yourself shows where you go silent or skip steps.",
    },
    {
      title: "Timed practice",
      note: "Once untimed solving is reliable, use roughly 45 minutes per problem (an editorial guide that mirrors commonly reported interview lengths) and include testing and the complexity explanation inside that time.",
    },
    {
      title: "Mixed-pattern review",
      note: "About once a week, solve two or three unseen problems from earlier topics without knowing their pattern. This builds recognition, which is what unfamiliar interview problems test.",
    },
    {
      title: "Mock interviews with another person",
      note: "Ask a peer, mentor or free peer-practice platform to give you an unseen problem and interrupt with follow-up questions. Aim for realistic conditions, including the tool rules of your target employer.",
    },
    {
      title: "Reviewing unsuccessful attempts",
      note: "For each problem you could not solve, write down what you missed (pattern recognition, an edge case, complexity, implementation) and re-solve it after a few days. Do not keep repeating problems you already solve confidently.",
    },
    {
      title: "Grind 75 (optional study plan)",
      url: "https://www.techinterviewhandbook.org/grind75/",
      note: "A free, adjustable plan of commonly recommended problems, solved on LeetCode. Use it if you want a ready-made schedule; it overlaps heavily with the problems already linked in the Library topics.",
    },
  ],
  resources: [
    {
      title: "Coding interview techniques",
      url: "https://www.techinterviewhandbook.org/coding-interview-techniques/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. A concise summary of what to do before, during and after coding; reinforces the Problem-Solving Process topic.",
    },
    {
      title: "How to solve a Google coding interview question",
      url: "https://www.youtube.com/watch?v=Ti5vfu9arXQ",
      provider: "Life at Google (official)",
      type: "Video",
      instructions: "An official mock interview showing clarification, moving from brute force to an optimized solution, and explaining while coding.",
    },
    {
      title: "NeetCode roadmap",
      url: "https://neetcode.io/roadmap",
      provider: "NeetCode",
      type: "Interactive",
      instructions: "Optional. A free map of problems by pattern with linked video explanations; some site features are paid and not needed.",
    },
  ],
  readiness: [
    "You can apply the problem-solving process to an unseen problem and explain your reasoning throughout.",
    "You recognize the common patterns and choose suitable data structures without being told the topic.",
    "You reach correct solutions independently, test them by hand, and state time and space complexity with appropriate qualifications.",
    "Editorial practice guide, general entry-level roles: solve two of three unseen Easy-to-Medium problems in about 45 minutes each, explaining complexity.",
    "Editorial practice guide, Big Tech: solve two of three unseen Medium problems in about 45 minutes each, without AI or running code, explaining complexity and handling a follow-up.",
    "These guides are this curriculum's recommendations, not employer passing thresholds. Once you meet yours consistently, more problem volume has diminishing returns; apply and keep up mixed review.",
  ],
  relatedGuides: [
    "/interview-prep/rapid-fire-technical-questions",
    "/interview-prep/behavioral-interviews",
    "/interview-prep/debugging-code-review",
    "/interview-prep/ai-assisted-coding",
    "/getting-hired/interview-failure-recovery",
  ],
  sources: [
    { title: "Google — Our hiring process (AI tools not permitted in interviews)", url: "https://www.google.com/about/careers/applications/how-we-hire/" },
    { title: "Meta — Hiring process (AI assistant in many interviews)", url: "https://www.metacareers.com/hiring-process/" },
    { title: "Amazon — Software development interview topics", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" },
    { title: "Amazon — Online assessment preparation for SDE roles", url: "https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa" },
  ],
};

export default guide;
