import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "apple",
  title: "Apple Software Engineer (Early Career)",
  category: "Company",
  description: "Team-specific preparation for Apple's early-career engineering roles: the team's language, language fundamentals, core coding and your projects.",
  level: "Early career",
  overview:
    "Apple hires early-career engineers into specific teams, and no official interview-preparation guidance was found. What you need depends on the team: the language and platform it uses (for example Swift for iOS, Java or Python for services, JavaScript for web), its posting requirements and what your recruiter tells you. This path gives a general foundation — fluency in the team's language, language fundamentals, core coding, object-oriented design and your projects — and expects you to adjust it to the team. Evidence is limited.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "On 25 November 2026, Apple's US job search showed only two engineering postings titled \"Early Career\" (Frontend Engineer and Network Engineer, both in Austin). Early-career roles are few and team-specific.",
        "A reviewed early-career posting required proficiency in one language area (server, web, iOS or scripting), computer science fundamentals and a bachelor's degree or equivalent experience. Each team's posting differs; read yours.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Official: postings only. Apple publishes no software engineering interview guidance that this curriculum's research could find.",
        "Candidate-reported (one 2026 new-grad report): a recruiter call, Java fundamentals questions, coding, and a long behavioral conversation with a manager. One report does not describe Apple's process in general.",
        "Some candidate reports (mostly not new graduates) mention questions about how candidates use AI tools, and a few allowed AI during coding.",
        "Everything below is editorial guidance for a team-based process; your recruiter's information takes priority.",
      ],
    },
    {
      heading: "How to use this path",
      items: [
        "Ask your recruiter: which language and platform the team uses, what each interview covers, and whether any tools are allowed.",
        "If the team uses a language other than Python, practise your coding and concept answers in that language; the patterns and concepts in the Library transfer, but fluency must be in the team's language.",
        "Read the posting's preferred qualifications for team-specific technologies and prepare to discuss any you list on your resume.",
      ],
    },
  ],
  process: [
    "Apple does not publish a standard early-career interview process; it appears to be decided by each team.",
    "One candidate reported a recruiter call, language-fundamentals questions, coding and a manager conversation. Expect variation.",
  ],
  competencies: [
    "Fluency in the team's language and platform.",
    "Explaining language fundamentals: types, memory and objects, exceptions, collections.",
    "Core data structures and algorithms with complexity.",
    "Object-oriented design.",
    "Discussing your projects and motivation in depth.",
  ],
  studyTopics: [
    { title: "Programming fluency in one language", priority: "Essential", depth: "Apply", slug: "python-lists", reason: "The reviewed early-career posting requires proficiency in a language area; use the team's language if it is not Python." },
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Implement", slug: "problem-solving-process", reason: "Coding interviews were reported, and explaining your reasoning applies to every format." },
    { title: "Behavioral preparation", priority: "Essential", reason: "A long behavioral conversation was reported, and motivation for the team matters in a team-based process. See Behavioral Interview Preparation." },
    { title: "Explaining your projects", priority: "Essential", depth: "Explain", reason: "Team-based hiring relies on evidence of what you have built; prepare to discuss projects relevant to the team. See the Engineering Projects guide." },
    { title: "Language fundamentals questions", priority: "Important", depth: "Explain", reason: "A new-grad report described conceptual questions about the candidate's language. Use the Rapid-Fire Technical Questions guide and the Programming Fluency interview questions, adapted to the team's language." },
    { title: "Complexity analysis", priority: "Important", depth: "Implement", slug: "complexity-analysis" },
    { title: "Arrays and strings", priority: "Important", depth: "Implement", slug: "arrays-strings-patterns", exercises: ["Best Time to Buy and Sell Stock (LeetCode)", "Longest Substring Without Repeating Characters (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Important", depth: "Implement", slug: "hash-map-set-patterns", exercises: ["Top K Frequent Elements (LeetCode)"] },
    { title: "Trees and binary search trees", priority: "Important", depth: "Implement", slug: "trees-binary-search-trees", exercises: ["Maximum Depth of Binary Tree (LeetCode)", "Binary Tree Level Order Traversal (LeetCode)"] },
    { title: "Linked lists", priority: "Important", depth: "Implement", slug: "linked-lists", exercises: ["Reverse Linked List (LeetCode)"] },
    { title: "Stacks and queues", priority: "Important", depth: "Implement", slug: "stacks-queues", exercises: ["Valid Parentheses (LeetCode)"] },
    { title: "Testing and dry-running code", priority: "Important", depth: "Implement", slug: "python-debugging" },
    { title: "Object-oriented programming and design (forthcoming: Unit 3)", priority: "Important", depth: "Implement", reason: "Postings for some early-career roles have asked for object-oriented design skills, and a reported interview included object-oriented concept questions. Not yet published." },
    { title: "Computer science fundamentals (forthcoming: Unit 4)", priority: "Important", depth: "Explain", reason: "A reviewed posting lists computer science fundamentals as a requirement. Not yet published." },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Optional", depth: "Implement", slug: "graphs-bfs-dfs", exercises: ["Number of Islands (LeetCode)"] },
    { title: "Binary search", priority: "Optional", depth: "Implement", slug: "binary-search" },
    { title: "Heaps, sorting and dynamic programming", priority: "Optional", depth: "Implement", slug: "heaps-priority-queues", reason: "Raise if the recruiter describes algorithm-heavy coding rounds." },
    { title: "System design", priority: "Optional", depth: "Recognize", reason: "Team-dependent; prepare only if your recruiter mentions it." },
    { title: "Union-find and weighted shortest paths", priority: "Defer", slug: "union-find-shortest-paths", reason: "No Apple early-career evidence supports it." },
  ],
  sequence: [
    "Find the team's posting and ask your recruiter about its language, platform and interview structure.",
    "Make sure you are fluent in the team's language; skip Programming Fluency if you already are.",
    "Prepare your project explanations and behavioral stories, especially your motivation for this team.",
    "Practise language-fundamentals answers aloud in the team's language.",
    "Cover the Important coding topics at Implement depth, then raise priorities if the recruiter describes algorithm-heavy rounds.",
    "Apply when eligible and reasonably prepared.",
  ],
  practice: [
    {
      title: "Concept questions aloud",
      note: "Answer 10 language-fundamentals questions in the team's language using definition, behavior, example and trade-off (see the Rapid-Fire Technical Questions guide).",
    },
    {
      title: "Team-relevant project walkthrough",
      note: "Prepare a 3-minute explanation of the project most relevant to the team, then answer \"why this design?\" and \"what would you change?\".",
    },
  ],
  resources: [
    {
      title: "Apple — Student jobs and internships",
      url: "https://www.apple.com/careers/us/work-at-apple/students.html",
      provider: "Apple (official)",
      type: "Article",
      instructions: "Official page for student and early-career opportunities; use Apple's job search for current team postings.",
    },
  ],
  readiness: [
    "You know the team's language and interview structure from the posting and recruiter.",
    "Editorial practice guide, not an Apple threshold: solve unseen Easy-to-Medium problems in the team's language in about 45 minutes, explaining complexity.",
    "You can answer core language-fundamentals questions in the team's language aloud without notes.",
    "You can present a team-relevant project and explain your motivation for the team.",
  ],
  relatedGuides: [
    "/interview-prep/rapid-fire-technical-questions",
    "/interview-prep/coding-algorithms",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/engineering-projects",
    "/getting-hired/job-description-gap-analysis",
    "/getting-hired/application-strategy",
  ],
  sources: [
    { title: "Apple — Frontend Engineer, EE&P – IS&T Early Career (official posting)", url: "https://jobs.apple.com/en-us/details/200676168-0157/frontend-engineer-ee-p-is-t-early-career" },
    { title: "Apple — Job search for \"early career\" (official; checked 25 November 2026)", url: "https://jobs.apple.com/en-us/search?search=%22early%20career%22&location=united-states-USA&sort=newest" },
    { title: "Candidate report — 2026 Apple new grad SWE: HR call, Java questions, coding and manager round (FastPrep)", url: "https://www.fastprep.io/experience/2026-apple-new-grad-swe-hr-call-java-questions-coding-and-manager-round-1-experi-52ej2p4ouy" },
    { title: "Candidate reports — Apple AI coding and related interviews (FastPrep, mixed levels)", url: "https://www.fastprep.io/experience/2024-2026-apple-ai-coding-related-interviews-17-experiences-new-grad-first-2hegeoa82n" },
  ],
};

export default guide;
