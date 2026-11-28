import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "performing-in-interviews",
  title: "Performing in Interviews",
  description: "How to work through coding, practical, design, project and behavioral rounds so interviewers can see how you think.",
  guidance: [
    {
      heading: "Before any round",
      items: [
        "Confirm the format with your recruiter: the round types, language, coding environment (shared editor, IDE, whiteboard), whether code must run, and whether AI tools are allowed. The recruiter's instructions override anything on this site.",
        "Practise in the same conditions: a plain editor if there is no autocomplete, out loud, with a timer.",
        "Test your camera, microphone and connection before a video interview, and have water and paper nearby.",
      ],
    },
    {
      heading: "Coding rounds",
      items: [
        "Restate the problem in your own words and ask clarifying questions: input size and types, empty or invalid input, duplicates, negative numbers, whether the input is sorted, and what to return when there is no answer.",
        "Work through a small example by hand before coding, and state a straightforward approach first, with its time and space complexity, even if you will improve it.",
        "Say which approach you will implement and why, then code it while explaining what each part does. Use clear names; interviewers read your code as you write it.",
        "State the final complexity and what it depends on (for example O(n log n) time because of sorting, O(n) extra space for the hash map).",
        "Test without being asked: trace a normal case, then edge cases (empty input, one element, duplicates, very large values). Fix bugs calmly and say what you found.",
        "Discuss trade-offs when they exist: a faster approach that uses more memory, or simpler code that is fast enough for the stated input size.",
      ],
    },
    {
      heading: "When you are stuck",
      items: [
        "Say what you are thinking and where you are stuck; silence makes it hard for the interviewer to help.",
        "Go back to a smaller example, a brute-force solution or a related pattern (sorting, a hash map, two pointers, BFS) and look for repeated work you can remove.",
        "Treat hints as collaboration, not failure: acknowledge the hint and use it.",
        "If time is running out, finish a working simpler solution and explain how you would improve it, rather than leaving an unfinished clever one.",
      ],
    },
    {
      heading: "Practical, debugging and take-home rounds",
      items: [
        "Read the task and the existing code before changing anything; run it and the tests first if you can.",
        "Reproduce the bug, form a hypothesis, check it with a print statement, a debugger or a test, then make the smallest fix and add a test that would have caught it.",
        "Prioritize a working, tested core over extra features, and leave a short README with how to run it, decisions, trade-offs and what you would do next.",
        "Follow the instructions exactly (time limit, language, libraries, AI rules); ignoring them is a common reason for rejection.",
      ],
    },
    {
      heading: "System design rounds",
      items: [
        "Clarify requirements and scale first; state assumptions out loud and write them down.",
        "Sketch a simple design that works, then deepen the parts that matter most for this problem, explaining trade-offs and failure modes (what happens when a component is slow or down).",
        "Ask the interviewer where they would like you to go deeper, and keep an eye on time.",
      ],
    },
    {
      heading: "Project and behavioral questions",
      items: [
        "Prepare five to seven true stories from your own work, study or projects that show ownership, collaboration, handling conflict or ambiguity, learning from a mistake and delivering results. Use a structure such as STAR (situation, task, action, result) and keep each story to about two minutes.",
        "Say \"I\" for what you did and \"we\" for the team; interviewers want your contribution.",
        "For a project, explain the problem, your design, one hard technical decision and its trade-off, how you tested it and what you would change. Know every technology you list.",
        "Never invent experience or results. If you have not faced a situation, say so and explain how you would handle it, or use the closest real example.",
        "End with two or three genuine questions about the team, the work and how success is measured.",
      ],
    },
    {
      heading: "AI tools and interview rules",
      items: [
        "Use AI assistants only when the employer explicitly allows them for that round, and only in the way allowed. Policies differ by company and by round, and some employers state that using AI without permission can disqualify you.",
        "When AI is allowed, you are still assessed on your judgment: explain what you asked for, read and test the output, and fix what is wrong.",
      ],
    },
  ],
  recommendations: [
    "Think out loud throughout; the interviewer can only assess reasoning they can hear.",
    "Do a few mock interviews with a friend or a peer platform before important rounds.",
    "Write a short note after every interview about what went well and what to practise (see Interview Failure Recovery).",
  ],
  mistakes: [
    "Coding immediately without clarifying the problem or checking an example.",
    "Going silent for long stretches.",
    "Not testing the code or ignoring edge cases.",
    "Arguing with hints or with the interviewer's constraints.",
    "Claiming skills or experience you cannot discuss in depth.",
    "Using AI tools or outside help when they are not allowed.",
  ],
  resources: [
    {
      title: "Tech Interview Handbook — Coding interview techniques",
      url: "https://www.techinterviewhandbook.org/coding-interview-techniques/",
      note: "Free: what to do before, during and after a coding interview, with a checklist.",
    },
    {
      title: "Interviewing at Google: tips",
      url: "https://www.google.com/about/careers/applications/interview-tips",
      note: "Official employer guidance on explaining your thinking and answering behavioral questions; useful beyond Google.",
    },
  ],
  relatedQuestions: ["data-structures-algorithms", "testing-debugging", "behavioral", "projects-take-homes"],
  relatedGuides: ["/getting-hired/interview-failure-recovery", "/getting-hired/offers-and-negotiation"],
};

export default guide;
