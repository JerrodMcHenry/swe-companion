import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "engineering-projects",
  title: "Building an Interview-Worthy Engineering Project",
  description: "What makes a project demonstrate engineering competence, and how to prepare to discuss it.",
  overview:
    "A strong engineering project demonstrates your ability to solve a meaningful problem, make technical decisions and deliver working software. The objective is not to accumulate technologies or repositories, but to demonstrate engineering competence. The step-by-step assignment and readiness checklist are in Build and Deploy a Project; how to explain it in interviews is in Explaining Project Architecture. This guide covers how a project helps your applications.",
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
  readiness: [
    "Draw the application architecture from memory.",
    "Trace important execution paths through the codebase.",
    "Explain major technical decisions and alternatives.",
    "Demonstrate the working application.",
    "Modify existing functionality independently.",
    "Debug unexpected behavior.",
    "Explain testing and deployment decisions.",
    "Describe limitations and reasonable improvements.",
  ],
  relatedTopics: ["build-deploy-project", "explaining-project-architecture", "deployment-ci-cd", "take-home-simulation"],
  relatedGuides: ["/interview-prep/project-deep-dives", "/interview-prep/take-home-assignments", "/interview-prep/behavioral-interviews", "/getting-hired/resume"],
};

export default guide;
