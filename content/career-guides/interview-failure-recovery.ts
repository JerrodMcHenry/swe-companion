import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "interview-failure-recovery",
  title: "Interview Failure Recovery",
  description: "Review an unsuccessful interview, find the specific weakness, and return to targeted practice without restarting.",
  guidance: [
    {
      heading: "Step 1: Write a reflection within a day",
      items: [
        "Company, role, date and stage (online assessment, recruiter screen, technical screen, final round).",
        "Format: number of rounds, language and environment, whether you could run code or use AI or documentation, and the time limit.",
        "Each question as precisely as you can remember it, and what you did: how long it took to understand it, the approach you chose, whether you finished, and how you tested it.",
        "Where you got stuck or ran out of time, and what you would do differently.",
        "What went well; keep doing it.",
        "Any feedback received. Many employers give little or none, so rely mainly on your own notes.",
        "Your best guess at the weak area (Step 2), and one or two practice actions.",
      ],
    },
    {
      heading: "Step 2: Identify the weak area and where to practise",
      items: [
        "Language fluency (syntax slips, fighting the language, slow to write simple code) → timed practice on easy problems in your interview language, plus the Python questions.",
        "Technical knowledge (could not answer a concept question about your language or tools) → the matching question set, such as Python, JavaScript or SQL.",
        "Problem recognition (did not see which approach fits) or algorithmic reasoning (could not get past brute force) → the coding problems by pattern; name the pattern before you code.",
        "Complexity analysis (wrong or missing big-O) → the Complexity questions in Data Structures & Algorithms.",
        "Implementation (right idea, buggy or unfinished code) → more timed problems in the patterns you know, writing complete code before running it.",
        "Testing and debugging (did not test, or could not find your bug) → the Testing & Debugging questions; dry-run every solution on edge cases.",
        "Object-oriented programming and design → OOP & SOLID and Low-Level Design questions.",
        "SQL and databases → SQL & Databases questions and the SQL problems.",
        "Practical engineering (take-home, working in an existing codebase, code review) → Testing & Debugging and Projects & Take-Homes questions, plus timed practice in an open-source repository.",
        "APIs and backend work (an integration task or backend practical) → the APIs and Backend Engineering questions.",
        "Frontend or React (a UI task or debugging React code) → the React and JavaScript questions.",
        "System design (a design discussion) → the System Design questions, after you can explain your own project's architecture.",
        "AI-assisted rounds (could not direct, verify or explain AI output) → the AI-assisted coding questions.",
        "Technical communication (silent, unclear or disorganized explanation) → practise solving problems aloud, ideally with another person.",
        "Behavioral answers (vague, no clear result, not your own contribution) → the Behavioral questions; improve your story bank.",
        "Project explanations (could not explain design decisions or trade-offs) → the Projects & Take-Homes questions.",
        "Time management (spent too long clarifying, coding or perfecting) → timed practice with a visible clock and agreed checkpoints.",
        "Not reaching the interview at all → Resume Preparation, Job Description Gap Analysis and Job Application Strategy, not technical study.",
      ],
    },
    {
      heading: "Step 3: Practise the gap, then retest it",
      items: [
        "Pick one or two weak areas, not everything. Keep up light practice in your other areas.",
        "Practise in conditions like the interview: the same time limit, no running code if the interview did not allow it, and explaining aloud.",
        "Retest with unfamiliar problems or a mock interview. If you now handle the weak area reliably, move on.",
        "Keep applying while you practise; another interview is also practice.",
      ],
    },
    {
      heading: "When the cause is probably not your competence",
      items: [
        "You solved the problems, communicated well and tested your code, but were still rejected.",
        "The role was filled, paused or changed, or the employer stopped responding.",
        "Strong competition for a small number of positions.",
        "A single interviewer's unusual question or mismatch. A pattern across several interviews matters far more than one result.",
        "In these cases, make light notes and move on to the next application.",
      ],
    },
  ],
  recommendations: [
    "Look for patterns across several interviews before making big changes to your plan.",
    "Ask the recruiter politely whether any feedback is available; accept that it often is not.",
    "Check each employer's policy before reapplying; some state a waiting period.",
    "Note the format of each interview, so you can prepare more realistically next time.",
  ],
  mistakes: [
    "Restarting all of your preparation after one rejection.",
    "Grinding large numbers of random problems instead of practising the specific weak area.",
    "Assuming every rejection is a skill failure.",
    "Waiting until you feel fully recovered before applying again.",
    "Relying only on memory; details fade within a day.",
  ],
  relatedQuestions: ["data-structures-algorithms", "testing-debugging", "behavioral", "projects-take-homes"],
  relatedGuides: ["/getting-hired/engineering-projects", "/getting-hired/application-strategy"],
};

export default guide;
