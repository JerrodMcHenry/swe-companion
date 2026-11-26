import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "interview-failure-recovery",
  title: "Interview Failure Recovery",
  description: "Review an unsuccessful interview, find the specific weakness, and return to targeted practice without restarting.",
  overview:
    "A rejection is information, not a verdict. Many outcomes depend on factors outside your control: the number of candidates, a position being filled or frozen, team fit, or one interviewer's question. Sometimes, though, there is a specific, fixable weakness. Review each unsuccessful interview soon after it ends, identify the most likely weak area, practise that area specifically, and keep applying. Do not restart the whole curriculum.",
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
        "Programming fluency (syntax slips, fighting the language, slow to write simple code) → Apprenticeship Unit 1, Programming Fluency.",
        "Technical knowledge (could not answer a concept question about your language or tools) → the related Library topics, starting with the Programming Fluency interview questions.",
        "Problem recognition (did not see which approach fits) or algorithmic reasoning (could not get past brute force) → Unit 2 and the Coding & Algorithms guide; practise identifying the pattern before coding.",
        "Complexity analysis (wrong or missing big-O) → Unit 2, Complexity Analysis, and the complexity questions in the Programming Fluency topics.",
        "Implementation (right idea, buggy or unfinished code) → more timed implementation practice in Unit 2, writing complete code without running it first.",
        "Testing and debugging (did not test, or could not find your bug) → Python Debugging and Automated Testing in the Library; dry-run every solution on edge cases.",
        "Object-oriented programming and design → Unit 3, Object-Oriented Programming & Design.",
        "SQL and databases → Unit 4 for concepts and Unit 7 for practical SQL.",
        "Practical engineering (take-home, working in an existing codebase, code review) → Units 5 and 6.",
        "APIs and backend work (an integration task or backend practical) → Unit 7, Backend Engineering, and the API and Integration Assessments guide.",
        "Frontend or React (a UI task or debugging React code) → Unit 8, Full-Stack Engineering.",
        "System design (a design discussion) → the Basic System Design guide, after explaining your own project's architecture.",
        "AI-assisted rounds (could not direct, verify or explain AI output) → AI-Assisted Engineering and the AI-Assisted Coding guide.",
        "Technical communication (silent, unclear or disorganized explanation) → practise solving problems aloud, ideally with another person.",
        "Behavioral answers (vague, no clear result, not your own contribution) → Behavioral Interview Preparation in Interview Preparation; improve your story bank.",
        "Project explanations (could not explain design decisions or trade-offs) → Explaining Project Architecture and the Project Deep Dives guide.",
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
    "Restarting the whole curriculum after one rejection.",
    "Grinding large numbers of random problems instead of practising the specific weak area.",
    "Assuming every rejection is a skill failure.",
    "Waiting until you feel fully recovered before applying again.",
    "Relying only on memory; details fade within a day.",
  ],
  readiness: [
    "You have written a reflection for each unsuccessful interview.",
    "You can name the one or two areas most likely to have caused the result, or explain why the cause was probably outside your control.",
    "You have a short, specific practice plan linked to an Apprenticeship unit or guide.",
    "You have retested the weak area in interview-like conditions.",
  ],
  relatedTopics: ["problem-solving-process", "complexity-analysis", "automated-testing", "explaining-project-architecture"],
  relatedGuides: ["/interview-prep/coding-algorithms", "/interview-prep/behavioral-interviews", "/getting-hired/engineering-projects", "/getting-hired/application-strategy"],
};

export default guide;
