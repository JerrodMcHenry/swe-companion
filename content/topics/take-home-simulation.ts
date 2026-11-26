import type { Topic } from "../types";

const topic: Topic = {
  slug: "take-home-simulation",
  title: "Take-Home Assessment Simulation",
  category: "Practical Engineering",
  phase: "build-and-deploy-a-project",
  overview:
    "A self-contained practice take-home under an editorial timebox, with requirements, evaluation criteria and the follow-up questions to prepare for; no solution is provided. Use it, or a real company assignment from a public collection, to practise delivering and then defending working, tested, documented code. Strategy for real take-homes is in the Take-Home Assignments interview guide.",
  whyItMatters:
    "Take-homes appear in some hiring processes but not all: in this curriculum's research they were described in official startup processes (a 4-hour take-home followed by an interview about it at one YC company; a take-home presented on a whiteboard in a recruiter-posted startup process), in candidate reports from AI-focused companies (a 90-minute take-home with a design document; a four-hour build with AI), and Pinterest names a take-home as one place where it may invite AI use. Big Tech early-career processes reviewed here rarely use them. Practising one under time pressure — and defending it — prepares you for take-homes, practical rounds and project discussions alike.",
  prerequisites: ["Automated Testing", "Exceptions and Error Handling", "Modules, Packages and Project Structure", "Git and Pull Requests"],
  objectives: [
    "Read a brief, list ambiguities and record the assumptions you make instead of stopping.",
    "Plan within a timebox: core requirements first, tests alongside, documentation last but not skipped.",
    "Deliver working, readable, tested code with clear error handling for invalid input.",
    "Write a README covering how to run it, design decisions, trade-offs, assumptions and what you would do with more time.",
    "Follow the assignment's AI rules exactly, and disclose AI use when it is allowed.",
    "Defend the submission in a follow-up interview: explain decisions, extend it live and answer \"what would you change\".",
    "Skip for now: polishing beyond the brief (user interfaces, persistence, deployment) and optimal settlement algorithms.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python HOWTO — Argparse Tutorial",
      url: "https://docs.python.org/3/howto/argparse.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Start here (reference, only if you build a command-line tool). Building the command-line entry point: positional arguments, options and help. Read the first half (up to combining positional and optional arguments).",
    },
    {
      title: "Python Standard Library — json",
      url: "https://docs.python.org/3/library/json.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for json.load and json.JSONDecodeError, which you need for reading the input and reporting malformed files.",
    },
  ],
  exercises: [
    {
      title: "Take-home simulation: Group expense splitter",
      note:
        "Brief: friends share expenses on a trip. Build a small Python program (command-line tool or library with an entry point) that reads a JSON file of members and expenses (example in this topic's first question) and reports each member's balance and a list of payments that settles all debts. Functional requirements: (1) each expense is split equally among the members listed in split_between; (2) balances are shown to the cent and sum to zero; (3) settlement suggests who pays whom how much, using no more payments than members minus one; (4) invalid input — unknown member, negative or zero amount, empty split, malformed JSON — produces a clear error message and a non-zero exit code, never a traceback. Out of scope: currencies, persistence, a user interface, authentication. Testing: automated tests for the splitting rules, rounding, settlement and each invalid-input case. Documentation: README with how to run and test, design decisions, assumptions (for example how leftover cents are assigned) and what you would do next. Editorial timebox: 3 hours, including tests and README. Work independently in a new Git repository; commit as you go.",
    },
    {
      title: "Backend Challenges — public take-home assignments from companies",
      url: "https://github.com/CollabCodeTech/backend-challenges",
      note: "Alternative practice source: a community-maintained list (about 80 entries) linking to take-home briefs that companies published openly. Pick one that accepts any language or uses your stack, and apply this topic's timebox, rubric and README expectations. Many entries are from Brazilian companies and some briefs are in Portuguese; links can go stale, and a listing does not mean the company still uses that assignment. Free; no account to read.",
    },
    {
      title: "Frontend Challenges — public front-end take-home assignments",
      url: "https://github.com/felipefialho/frontend-challenges",
      note: "For full-stack targets only: the same kind of community list for front-end briefs (many in Portuguese; each row is marked with its language). Same cautions as above.",
    },
    {
      title: "Extension for the follow-up: add expenses that are split by percentages or exact amounts, without breaking existing behavior.",
      note: "Do this 30 minutes live, as an interviewer might ask, after submitting the main assignment. Do not prepare it in advance.",
    },
    {
      title: "Self-review your submission against this topic's evaluation criteria a day later, then ask someone to review it and to ask you five follow-up questions.",
      note: "Write down what you would change if you resubmitted.",
    },
    {
      title: "Repeat the simulation in AI-assisted mode with a different brief (for example a library loan tracker, or one from the Backend Challenges list), keeping a verification log, and compare the result with your independent attempt.",
      note: "Only for targets that allow AI. Follow AI-Assisted Engineering and Verification.",
    },
  ],
  interviewQuestions: [
    {
      question: "Simulation input: what data does the expense splitter receive, and what should you clarify before building?",
      answer:
        "The input lists members and expenses; each expense has a payer, an amount and the members it is split between. Before building, list the ambiguities and decide them explicitly in your README: how amounts that do not divide evenly are rounded and who receives leftover cents; whether a payer who is not in split_between still gets credit; whether amounts are given in cents or decimals; what happens with duplicate member names. In a real take-home, ask the company if you can; otherwise state your assumption and move on.",
      code: `# expenses.json
{
  "members": ["ana", "ben", "cy"],
  "expenses": [
    {"payer": "ana", "amount": 90.00, "split_between": ["ana", "ben", "cy"], "note": "dinner"},
    {"payer": "ben", "amount": 20.00, "split_between": ["ben", "cy"], "note": "taxi"},
    {"payer": "cy", "amount": 10.00, "split_between": ["ana", "ben", "cy"], "note": "snacks"}
  ]
}`,
      followUps: ["Why might representing money as floats cause problems, and what would you use instead?"],
      source: { title: "The Python Tutorial — 15. Floating-Point Arithmetic: Issues and Limitations", url: "https://docs.python.org/3/tutorial/floatingpoint.html" },
    },
    {
      question: "Evaluation criteria: how will a reviewer judge the submission?",
      answer:
        "Use this as your editorial rubric (real employers set their own). Correctness: requirements met, including edge cases and invalid input. Code quality: clear structure and names, functions with one job, no dead code. Tests: meaningful tests for rules and failures that run with one command. Error handling: clear messages, no tracebacks for user errors. Documentation: a reader can run it and understand your decisions and assumptions. Scope and judgment: required features done well before extras; trade-offs explained. Git history: small commits with meaningful messages. Honesty: limitations and any AI use stated.",
      followUps: ["Which criterion would you sacrifice first if you ran out of time, and how would you say so in the README?"],
    },
    {
      question: "Follow-up: walk me through your design. Why did you structure it this way?",
      answer:
        "Start from the requirements, then the parts: input parsing and validation at the edge, splitting and settlement as pure functions that are easy to test, output formatting separate. Explain one real decision (for example storing money in integer cents to avoid floating-point errors, or how you assign leftover cents) and the alternative you rejected. Keep it to a couple of minutes and let the interviewer dig in.",
      followUps: ["Where would you add currencies?", "How would this change if the data lived in a database?"],
    },
    {
      question: "Follow-up: what would you do with more time, and what are the weaknesses of your solution?",
      answer:
        "Name concrete, prioritized items rather than a generic list: for example property-based tests for settlement, better messages for malformed JSON, support for uneven splits. Point out real weaknesses honestly — such as a greedy settlement that is not always optimal — and why you accepted them within the timebox. Interviewers value accurate self-assessment.",
      followUps: ["Is your settlement minimal? How would you check?"],
    },
    {
      question: "How should you use AI tools in a take-home?",
      answer:
        "Follow the employer's instructions exactly. If AI is prohibited, do not use it — including autocomplete assistants — and expect to explain every line. If it is permitted, use it as you would at work: small, verified steps, every change reviewed and tested, and disclose what you used it for in the README. Either way you must be able to explain, modify and defend everything you submit without AI in the follow-up interview. If the instructions are silent, ask.",
      followUps: ["The assistant produced a settlement algorithm you do not fully understand. What do you submit?"],
    },
  ],
  mistakes: [
    "Starting to code before listing requirements, ambiguities and assumptions.",
    "Spending the timebox on extras (a web interface, a database) while core requirements or tests are missing.",
    "Ignoring invalid input, or letting tracebacks reach the user.",
    "No README, or one that does not explain decisions and assumptions.",
    "Using AI where it is not allowed, or submitting code you cannot explain.",
    "Greatly exceeding the stated time without saying so.",
    "Being unable to extend or debug your own submission in the follow-up.",
  ],
  mastery: [
    "Editorial guide, not an employer threshold: you completed the simulation within about 3 hours, with all four functional requirements met, tests for the rules and invalid input, and a README with decisions and assumptions.",
    "A reviewer could run it and the tests from the README without asking you anything.",
    "You can defend the design for 15–30 minutes and add the uneven-split extension live in about 30 minutes.",
    "You can state what you would improve and which weaknesses you accepted, and why.",
    "Skip the simulation if you have recently completed and defended a real take-home; use one public assignment instead if you want more practice.",
  ],
  deprioritize: [
    "Polishing beyond the brief (user interfaces, persistence, deployment) unless the assignment asks for it.",
    "Optimal debt-settlement algorithms; a correct, explained approach within the timebox is the goal.",
  ],
  keywords: ["take-home", "take home", "assignment", "assessment", "practical assessment", "timebox", "README", "work sample", "evaluation criteria"],
};

export default topic;
