import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "engineering-projects",
  title: "Engineering Projects",
  description: "What a project should show, project ideas by role, and how to explain your work in two minutes or in a deep dive.",
  guidance: [
    {
      heading: "What a project should demonstrate",
      items: [
        "Clear problem definition and requirements.",
        "Appropriate technology selection.",
        "Understandable software architecture.",
        "Working implementation.",
        "Testing and debugging.",
        "Deployment, where relevant.",
        "Technical documentation.",
        "Ability to communicate engineering decisions.",
      ],
    },
    {
      heading: "Projects that fit the role",
      items: [
        "Backend: an API with a database, authentication, validation, tests and a deployment.",
        "Frontend: an accessible, responsive interface that loads data from an API with loading, error and empty states, and measured performance.",
        "Data: a pipeline that ingests a real public dataset, models it and answers questions with SQL, with data quality checks and a rerunnable load.",
        "ML: a model on a real dataset with a leak-free split, a baseline, the right metric and an honest error analysis.",
        "AI: a small RAG or tool-using application with an evaluation set and a note on failure cases.",
        "Experienced engineers can usually discuss work projects instead; share what you built and decided, not confidential details.",
      ],
    },
    {
      heading: "Explaining a project in an interview",
      items: [
        "Two-minute version: the problem and who it was for, what you built, your role, one hard decision and the result.",
        "Deep dive: draw the architecture, trace one request or data flow end to end, explain a trade-off you made (and the alternative), how you tested it, a bug you fixed and what you would change with more time or more users.",
        "Be precise about your contribution in team projects, and about which parts were generated or suggested by AI tools and how you verified them.",
      ],
    },
  ],
  recommendations: [
    "Choose a meaningful problem rather than blindly following a tutorial.",
    "Keep the architecture proportional to the problem.",
    "Understand the purpose of every major dependency.",
    "Be able to trace the application's execution flow.",
    "Document important architectural decisions and trade-offs.",
    "Include meaningful tests.",
    "Review and verify AI-generated code.",
    "Be able to modify and debug the application independently.",
  ],
  interviewQuestions: [
    "Why did you build this application?",
    "What problem does it solve?",
    "Why did you choose this technology stack?",
    "How does a request flow through the application?",
    "What happens when a component fails?",
    "How did you test the application?",
    "What technical trade-offs did you make?",
    "What would you change if usage increased significantly?",
    "How did you use AI during development?",
    "Which parts of the implementation can you explain and modify independently?",
  ],
  mistakes: [
    "Building tutorial clones without understanding them.",
    "Adding unnecessary technologies.",
    "Generating code with AI without reviewing or understanding it.",
    "Overengineering simple applications.",
    "Prioritizing project quantity over technical depth.",
    "Being unable to explain code or architecture during an interview.",
  ],
  relatedQuestions: ["projects-take-homes", "backend-engineering"],
  relatedGuides: ["/getting-hired/resume", "/getting-hired/performing-in-interviews"],
};

export default guide;
