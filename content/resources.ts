import type { Resource } from "./types";

// The interview-prep hubs worth knowing. Topic-specific resources live with each question set
// (content/questions.ts) and pattern resources with the problems (content/problems.ts); the Resource
// Library page shows all of them, so each resource is defined once.
export const featuredResources: (Resource & { tags: string[] })[] = [
  { title: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/", note: "Free guide to the whole process: coding interview techniques, algorithm cheatsheets, behavioral interviews and resumes.", tags: ["Free", "Guide"] },
  { title: "NeetCode roadmap", url: "https://neetcode.io/roadmap", note: "Problems grouped by pattern, each with a free video explanation. A free account saves progress; the Pro course is paid.", tags: ["Free", "Video"] },
  { title: "Grind 75", url: "https://www.techinterviewhandbook.org/grind75/", note: "A customizable schedule of common problems for the weeks you have left. It is a plan, not a guarantee.", tags: ["Free", "Study plan"] },
  { title: "Hello Interview — Learn", url: "https://www.hellointerview.com/learn/code", note: "Coding-pattern and system design write-ups with walkthroughs. Many pages are free; some are premium.", tags: ["Free sections", "Articles"] },
  { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", note: "The standard free system design reference. Entry-level candidates need only the interview approach and a few core sections.", tags: ["Free", "GitHub"] },
  { title: "Awesome Low-Level Design", url: "https://github.com/ashishps1/awesome-low-level-design", note: "OOP, SOLID, design patterns and low-level design problems with solutions in several languages.", tags: ["Free", "GitHub"] },
  { title: "Refactoring.Guru — design patterns", url: "https://refactoring.guru/design-patterns/catalog", note: "Illustrated explanations of the classic design patterns. Pattern pages are free; the book is paid.", tags: ["Free pages", "Articles"] },
  { title: "DevInterview", url: "https://github.com/Devinterview-io", note: "Interview question lists for many technologies (Python, SQL, React, Git…). About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium.", tags: ["Partly free", "GitHub"] },
  { title: "LeetCode", url: "https://leetcode.com/problemset/", note: "Where most problems on this site link. Free account; company tags and some editorials need Premium (not required here).", tags: ["Free account", "Practice"] },
];
