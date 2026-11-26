import type { Topic } from "../types";

const topic: Topic = {
  slug: "deployment-ci-cd",
  title: "Deployment and CI/CD",
  category: "Practical Engineering",
  phase: "build-and-deploy-a-project",
  overview:
    "Deployment gets your application running where other people can use it; continuous integration (CI) and continuous delivery or deployment (CD) automate checking and releasing every change. One simple deployment and one CI workflow that runs your tests are enough to discuss your project honestly and to work within the pipelines new engineers usually join.",
  whyItMatters:
    "CI/CD appeared in 8 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, and cloud platforms in 9, mostly as job expectations or preferred skills; new engineers usually work within pipelines that already exist. Early-stage startups in the research expect you to own deploys, and some ask to see a deployed project. Interviews rarely test deployment directly, but project deep dives ask how your project is deployed and tested — and you should only say it is deployed if it is.",
  prerequisites: ["Command Line and Development Environment", "Git and Pull Requests", "Automated Testing", "Modules, Packages and Project Structure"],
  objectives: [
    "Explain what differs between local and deployed environments: operating system, versions, configuration, data, network and who can reach the app.",
    "Distinguish build-time from runtime dependencies, and pin versions so deployments are reproducible.",
    "Read configuration and secrets from environment variables, fail fast when a required one is missing, and never commit secrets.",
    "Deploy one application to a hosting platform (or publish a static site) and record the exact steps.",
    "Verify a deployment with a health check or smoke test, and read the platform's logs to troubleshoot.",
    "Write a GitHub Actions workflow that installs dependencies and runs the tests on every push and pull request.",
    "Explain continuous integration, continuous delivery and continuous deployment, and how they differ.",
    "Explain rollback: redeploying the previous known-good version, and why small, reversible changes make it safe.",
    "Explain what a container image is and when it helps, and read a simple Dockerfile.",
    "Skip for now: Kubernetes, infrastructure as code, advanced CI features and blue-green or canary deployments.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Missing Semester — Shipping Code (2026)",
      url: "https://missing.csail.mit.edu/2026/shipping-code/",
      provider: "MIT",
      type: "Video",
      instructions: "Start here for concepts. Video and notes: dependencies and environments, packaging, releases, reproducibility, containers, configuration and deploying a web service. Skip orchestration and publishing to package indexes. Free; no account.",
    },
    {
      title: "GitHub Actions — Building and testing Python",
      url: "https://docs.github.com/en/actions/tutorials/build-and-test-code/python",
      provider: "GitHub Docs",
      type: "Documentation",
      instructions:
        "Then, for CI (hands-on, written): follow the starter workflow and the sections on installing dependencies and testing with pytest. Actions on standard GitHub-hosted runners are free for public repositories; private repositories have a monthly allowance (see GitHub's billing page).",
    },
    {
      title: "The Twelve-Factor App — III. Config",
      url: "https://12factor.net/config",
      provider: "12factor.net",
      type: "Article",
      instructions: "Short reference on keeping configuration in environment variables, separate from code. Read this one factor; the rest is optional background.",
    },
    {
      title: "Docker Docs — What is a container?",
      url: "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
      provider: "Docker",
      type: "Documentation",
      instructions: "Optional. Read when your deployment target uses containers or a posting asks for Docker. Recognize-level is enough otherwise.",
    },
  ],
  exercises: [
    {
      title: "GitHub Skills — Hello GitHub Actions",
      url: "https://github.com/skills/hello-github-actions",
      note: "Short guided course: create and run your first workflow. Prerequisite for the next exercise. Needs a free GitHub account; keep your copy public so Actions minutes are free.",
    },
    {
      title: "GitHub Skills — Test with Actions",
      url: "https://github.com/skills/test-with-actions",
      note: "Under an hour, on a sample Python project: add a test workflow and a coverage workflow, investigate and fix a failing test, and require passing tests before merging. Demonstrates CI with branch protection. Free GitHub account; public copy recommended.",
    },
    {
      title: "Add a GitHub Actions workflow to your project that runs the tests on every push and pull request; make a pull request with a failing test, confirm the check fails, then fix it.",
      note: "Apply the Skills course to your own project. Free on public repositories.",
    },
    {
      title: "Move every configuration value and secret in your project into environment variables, add a .env.example with names but no values, and make the app fail with a clear message when a required variable is missing.",
      note: "Apply to your own project.",
    },
    {
      title: "Deploy your project to a hosting platform of your choice, write down every step, and verify it with a health check or smoke test.",
      note: "No neutral external exercise exists; follow your chosen platform's own quickstart. Hosting options and free tiers change; check the provider's current terms and set spending limits. A static frontend can be published on GitHub Pages. Record what you actually deployed — do not claim a deployment you have not done.",
    },
    {
      title: "Break your deployment on purpose (a missing environment variable or a wrong start command), find the cause in the platform logs, fix it, and practise rolling back to the previous version.",
      note: "Troubleshooting practice.",
    },
  ],
  interviewQuestions: [
    {
      question: "What changes when your application moves from your laptop to a deployed environment?",
      answer:
        "The operating system and installed versions may differ, so dependencies must be declared and pinned. Configuration differs (database URL, debug mode, allowed hosts), so it comes from environment variables, not code. Data is real and persistent. The app is reachable by others, so security settings, HTTPS and secrets matter. You cannot attach a debugger, so you rely on logs and health checks. \"It works on my machine\" usually means one of these differences was not made explicit.",
      followUps: ["Why should a missing secret stop the app at startup rather than at the first request?"],
      source: { title: "The Twelve-Factor App — III. Config", url: "https://12factor.net/config" },
    },
    {
      question: "What is continuous integration, and what would a minimal CI setup for your project do?",
      answer:
        "Continuous integration means every change is merged frequently and checked automatically: on each push or pull request, a CI service installs the project from scratch and runs the tests (and often linting), so broken changes are caught before they reach the main branch. A minimal setup for a Python project is one workflow that checks out the code, installs the pinned dependencies and runs pytest; branch protection can require it to pass before merging.",
      followUps: ["Your CI passes but the deployed app fails. What could differ?"],
      source: { title: "GitHub Docs — Building and testing Python", url: "https://docs.github.com/en/actions/tutorials/build-and-test-code/python" },
    },
    {
      question: "What is the difference between continuous delivery and continuous deployment?",
      answer:
        "Both build on CI. With continuous delivery, every change that passes the pipeline is ready to release, but a person decides when to deploy it to production. With continuous deployment, every change that passes is deployed to production automatically. Continuous deployment needs strong tests, monitoring and easy rollback; many teams use delivery with a manual approval step.",
      followUps: ["What would you want in place before turning on continuous deployment?"],
      source: { title: "Martin Fowler — ContinuousDelivery", url: "https://martinfowler.com/bliki/ContinuousDelivery.html" },
    },
    {
      question: "How do you verify that a deployment worked?",
      answer:
        "Check that the new version is actually the one running (a version or commit shown in a health endpoint or the logs), call a health-check endpoint that confirms the app and its dependencies (for example the database) respond, run a quick smoke test of the main workflow, and watch the logs and error rates for a few minutes. Automate the health check so the platform can detect a failed deployment.",
      followUps: ["What should a health check not do?"],
      source: { title: "Azure Architecture Center — Health Endpoint Monitoring pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring" },
    },
    {
      question: "A deployment breaks production. What do you do?",
      answer:
        "First limit the impact: roll back to the previous known-good version (or turn off the feature) rather than debugging live. Then investigate with the logs, the error, and the difference between the two versions — code, dependencies and configuration. Reproduce it, fix it with a test, and redeploy. Small, frequent changes make both rollback and finding the cause easier, which is one reason teams deploy often.",
      followUps: ["When can rolling back not fix the problem? (For example, after a database migration.)"],
      source: { title: "Site Reliability Engineering — Effective Troubleshooting (Triage)", url: "https://sre.google/sre-book/effective-troubleshooting/" },
    },
    {
      question: "What is a container, and when would you use one?",
      answer:
        "A container image packages an application with its runtime and dependencies; a container is a running instance of it, isolated from other processes but sharing the host's operating-system kernel, so it is lighter than a virtual machine. Containers make environments reproducible across laptops, CI and production, and many hosting platforms run them. For a small project, a platform that builds from your repository may be simpler; learn Docker when your target or deployment needs it.",
      followUps: ["In a Dockerfile, why is requirements.txt usually copied and installed before the rest of the code?"],
      source: { title: "Docker Docs — What is a container?", url: "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/" },
    },
    {
      question: "What is the difference between build-time and runtime dependencies?",
      answer:
        "Runtime dependencies are needed for the application to run in production (your web framework, database driver). Build-time and development dependencies are needed only to build, test or develop it (pytest, linters, type checkers, frontend build tools). Keeping them separate makes deployed images smaller and reduces what can go wrong or be attacked in production; pinning both makes builds reproducible.",
      followUps: ["Where would pytest go in your project's dependency files?"],
      source: { title: "Python Packaging User Guide — Writing your pyproject.toml (optional dependencies)", url: "https://packaging.python.org/en/latest/guides/writing-pyproject-toml/" },
    },
  ],
  mistakes: [
    "Committing secrets or a .env file; configuration hard-coded for one machine.",
    "Unpinned dependencies, so production installs different versions from CI.",
    "Calling a project deployed when it only runs locally, or listing tools you have not used.",
    "Debugging in production instead of rolling back first.",
    "No health check or logs, so failures are invisible.",
    "Assuming a free hosting tier is permanent, or leaving paid resources running without a spending limit.",
    "Adding Kubernetes or multi-cloud setups to a small project.",
  ],
  mastery: [
    "Your project has a CI workflow that runs the tests on every pull request, and you have seen it catch a failure.",
    "Configuration and secrets come from environment variables, with a .env.example and a clear error when one is missing.",
    "You have deployed one application (or documented why it is run locally) and can explain how you verified it, where its logs are and how you would roll back.",
    "You can explain CI, continuous delivery versus continuous deployment, and what a container is.",
    "Skip this topic if your project already has CI on pull requests and a verified deployment you can explain.",
  ],
  deprioritize: [
    "Kubernetes, Terraform and infrastructure as code.",
    "Cloud certifications and multi-cloud architecture.",
    "Advanced CI features: matrix builds across many versions, caching strategies, self-hosted runners.",
    "Blue-green and canary deployments beyond recognizing the terms.",
  ],
  keywords: ["deployment", "deploy", "CI", "CD", "CI/CD", "continuous integration", "continuous delivery", "continuous deployment", "GitHub Actions", "environment variables", "secrets", "Docker", "container", "rollback", "health check", "hosting"],
};

export default topic;
