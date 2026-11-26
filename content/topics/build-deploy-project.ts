import type { Topic } from "../types";

const topic: Topic = {
  slug: "build-deploy-project",
  title: "Build and Deploy a Project",
  category: "Practical Engineering",
  phase: "build-and-deploy-a-project",
  overview:
    "One working, tested, deployed and documented project is the strongest practical evidence an entry-level candidate can show. This topic is the assignment: choose a meaningful, appropriately scoped problem, define requirements and acceptance criteria, choose a reasonable stack, design and build the core, test and debug it, keep it in Git, handle configuration, errors and basic security, deploy it and document it — then explain every decision. It demonstrates competence, not complexity. An existing project counts if you can explain, modify, debug and test it on your own.",
  whyItMatters:
    "Screeners and interviewers use projects as evidence of what you can build, especially when you have little professional experience. Some early-stage companies in this curriculum's research ask to see a deployed project or discuss a take-home, and candidates report project deep dives at several employers. A personal project is not professional experience: describe it honestly, and do not expect it to satisfy a posting's experience requirement. Its value is the competence you can demonstrate and explain.",
  prerequisites: [
    "Programming Fluency",
    "Automated Testing",
    "Git and Pull Requests",
    "Command Line and Development Environment",
    "Exceptions and Error Handling and Modules, Packages and Project Structure (learn alongside the build)",
  ],
  objectives: [
    "Choose a problem that is meaningful to someone and small enough to finish: one core workflow done well beats many half-built features.",
    "Write requirements and acceptance criteria before building, and keep a short list of what is out of scope.",
    "Choose a reasonable stack you can explain; prefer the apprenticeship stack unless you have a good reason.",
    "Design the main components and data flow, and organize the code so each part has one clear job.",
    "Implement the core workflow first, then improve it in small, tested steps committed through pull requests.",
    "Test the core behavior and its edge cases, and debug failures with evidence.",
    "Handle configuration, invalid input and failures deliberately; keep secrets out of the repository.",
    "Deploy it so others can use it, or document exactly how to run it if deployment is not appropriate.",
    "Write a README that explains what it does, how to run and test it, the architecture, key decisions and limitations.",
    "Explain how you used AI and how you verified its output, and be able to change any part without AI.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "About READMEs",
      url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
      provider: "GitHub Docs",
      type: "Documentation",
      instructions: "Short reference for what a README is for and where GitHub shows it. Use this topic's README outline for the content.",
    },
    {
      title: "The Missing Semester — Beyond the Code (2026)",
      url: "https://missing.csail.mit.edu/2026/beyond-code/",
      provider: "MIT",
      type: "Video",
      instructions: "Optional. The parts on writing for people without your context — comments, READMEs, commit messages — explain why documentation should capture the why, not just the what.",
    },
  ],
  exercises: [
    {
      title: "Write a one-page project brief: the problem and who has it, three to five requirements with acceptance criteria, what is out of scope, and how you will know it works.",
      note: "Before any code. Ask someone to read it and tell you what they think the project does.",
    },
    {
      title: "Audit an existing project against this topic's readiness criteria and fix the three weakest areas instead of starting a new project.",
      note: "Use this if you already have a project. Typical gaps: no tests, no README, secrets in the repository, cannot explain a dependency.",
    },
    {
      title: "Build the core workflow end to end in a branch, with tests for its main path and two edge cases, merged through a pull request.",
      note: "Practical. Resist adding features until this works and is tested.",
    },
    {
      title: "Deploy the project (or a part of it) and write down the exact steps, environment variables and how you verified the deployed version works.",
      note: "See Deployment and CI/CD. Check the hosting provider's current terms; free tiers can change or expire.",
    },
    {
      title: "With AI tools closed, add a small feature or fix a bug in your project in under an hour, then explain the change to someone.",
      note: "Proves you own the code. If this is hard, simplify the code until it is not.",
    },
  ],
  interviewQuestions: [
    {
      question: "How do you choose a project that is worth building for job applications?",
      answer:
        "Pick a real problem you or someone you know has, small enough to finish properly in a few weeks of part-time work. It should exercise the skills your target role needs — for most software roles, a small web application or API with persistent data, input validation, tests and a deployment — and avoid technologies you cannot yet explain. One core workflow that works reliably, with tests and a clear README, demonstrates more than many half-finished features or a tutorial clone.",
      followUps: ["Why did you not just follow a tutorial project?", "What did you deliberately leave out?"],
    },
    {
      question: "What kind of project fits my target role?",
      answer:
        "General software engineering: a small application with real logic and persistent data, such as a study planner that schedules reviews, an expense splitter or a booking tool — a command-line tool or simple web app is enough if it is tested, documented and explainable. Backend: a REST API with a relational database, validation, consistent error responses, authentication and tests (Backend Engineering, forthcoming, teaches these; build alongside it). Full-stack: the same API with a small React frontend handling forms, loading and error states (Full-Stack Engineering, forthcoming). One project can grow from the general version into the backend or full-stack version instead of starting again.",
      followUps: ["Why is a deployed API with tests more convincing than a larger app without them?"],
    },
    {
      question: "How did you define requirements and decide when the project was done?",
      answer:
        "I wrote a few requirements as user-visible behavior, each with acceptance criteria I could test, and a list of what was out of scope. The project was done when the acceptance criteria passed as automated tests, it was deployed and documented, and I could demo the main workflow. Writing acceptance criteria as tests kept the scope honest.",
      code: `# Requirement: "A user can log a study session; sessions with zero or negative minutes are rejected."
import pytest

def log_session(sessions, topic, minutes):
    if minutes <= 0:
        raise ValueError("minutes must be positive")
    sessions.append({"topic": topic, "minutes": minutes})
    return sessions

def test_logs_a_valid_session():
    assert log_session([], "graphs", 30) == [{"topic": "graphs", "minutes": 30}]

def test_rejects_zero_minutes():
    with pytest.raises(ValueError, match="positive"):
        log_session([], "graphs", 0)

# pytest result  # -> 2 passed`,
      followUps: ["Which requirement changed while you were building, and how did you handle it?"],
    },
    {
      question: "Why did you choose this technology stack?",
      answer:
        "A good answer connects the choice to the problem and to constraints, not to popularity: for example, Python and a small web framework because I know Python well and the app is a simple CRUD API; PostgreSQL because the data is relational and I needed constraints; a managed host because I did not want to operate servers. Then name one alternative and why you did not choose it, and one limitation you accepted.",
      followUps: ["What would make you choose a different database?", "Which dependency would you remove if you could, and why?"],
    },
    {
      question: "How did you use AI tools on this project, and how do you know the code is correct?",
      answer:
        "Answer honestly and specifically: what you used AI for (for example, drafting tests or explaining an error), what you checked (reading every change, running tests, checking documentation), and one suggestion you rejected and why. Interviewers want to know that you understand and own the code; you should be able to explain and modify any part without AI.",
      followUps: ["Show me a part an assistant wrote and explain it line by line."],
    },
    {
      question: "What does your README contain?",
      answer:
        "What the project does and who it is for; how to install, configure (including required environment variables, never their values) and run it; how to run the tests; the deployed URL if there is one; a short architecture overview with a diagram; key decisions and trade-offs; known limitations; and how AI was used and verified. A reader should be able to run it without asking you questions.",
      code: `# README.md (outline)
# Study Tracker
One-line description and who it is for.
## Running locally   — prerequisites, install, environment variables (names only), run
## Tests             — one command
## Deployment        — URL and how it is deployed
## Architecture      — diagram and the main request flow
## Decisions         — choices, alternatives considered, trade-offs
## Limitations       — known gaps and what you would do next
## AI use            — what was AI-assisted and how it was verified`,
      followUps: ["What would a new teammate still not understand after reading it?"],
    },
  ],
  mistakes: [
    "Choosing a project too large to finish, or too trivial to show any engineering decisions.",
    "Following a tutorial without changing or understanding it.",
    "Adding technologies to the resume list rather than to solve a problem.",
    "No tests, no README, or a README that only says how to install it.",
    "Committing secrets or relying on settings that only exist on your machine.",
    "Not being able to explain or modify AI-generated parts.",
    "Building several shallow projects instead of finishing one well.",
    "Presenting a personal project as professional or production experience.",
  ],
  mastery: [
    "Project-readiness checklist (editorial):",
    "1. A stranger can run it from the README in under 15 minutes, and the tests pass with one command.",
    "2. Its core workflow is covered by automated tests, including at least two edge or failure cases.",
    "3. It is deployed and you have verified the deployed version works — or the README explains how to run it and why it is not deployed.",
    "4. No secrets are in the repository or its history; configuration comes from environment variables.",
    "5. Invalid input and expected failures produce clear messages, not crashes.",
    "6. Changes went through branches and pull requests with meaningful commit messages.",
    "7. You can draw the architecture and trace one request through the code from memory.",
    "8. You can add a small feature or fix a bug in it without AI in under an hour.",
    "9. You can name two limitations and what you would improve next.",
  ],
  deprioritize: [
    "Real users, payments, custom domains and paid infrastructure — welcome but not required.",
    "Microservices, Kubernetes, multiple databases and other architecture the problem does not need.",
    "A second project, unless it closes a specific gap for your target role (for example, adding a frontend for full-stack roles).",
  ],
  keywords: ["project", "portfolio", "side project", "capstone", "deploy", "README", "requirements", "acceptance criteria", "backend project", "full-stack project"],
};

export default topic;
