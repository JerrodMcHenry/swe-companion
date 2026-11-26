import type { Topic } from "../types";

const topic: Topic = {
  slug: "ai-assisted-engineering",
  title: "AI-Assisted Engineering and Verification",
  category: "Practical Engineering",
  phase: "practical-software-engineering",
  overview:
    "Using AI coding assistants as a professional: small, well-specified requests, every generated change reviewed and tested, fabricated APIs and insecure patterns caught, and full ownership of the result. Practise it in two modes — independently without AI, and AI-assisted with verification — because employers differ on whether interviews allow AI.",
  whyItMatters:
    "Many postings now expect experience with AI-assisted development (half of the reviewed Amazon early-career postings list it as a basic qualification, and about 8 of 18 reviewed startup, growth-stage and enterprise postings state AI-tool expectations), and teams expect you to validate what the tools produce. Interview relevance depends on the employer: Google states that AI tools are not permitted in its interviews, Microsoft asks candidates to demonstrate their own skills without outside assistance unless explicitly permitted, while Meta's official hiring page says many of its interviews include a built-in AI assistant that candidates are expected to use, and candidates report AI-assisted or agentic rounds at Capital One, Stripe and some startups. So this is recommended professional preparation for everyone and conditional interview preparation; your recruiter's instructions and the employer's assessment rules always override these defaults.",
  prerequisites: ["Reading and Debugging Unfamiliar Code", "Code Review", "Automated Testing", "Security Fundamentals"],
  objectives: [
    "Use an assistant to explain unfamiliar code, then confirm the explanation against the code, tests and documentation.",
    "Break a task into small, verifiable changes and give each request clear requirements, constraints, relevant files and acceptance criteria.",
    "Evaluate a proposed implementation against the requirements before accepting it, including edge cases and side effects.",
    "Review every generated diff as you would a teammate's pull request.",
    "Detect incorrect assumptions, invented requirements and fabricated functions, parameters and packages by checking official documentation and package registries.",
    "Verify generated code with tests you understand, including tests that would fail if the code were wrong.",
    "Check security implications: injection, unsafe evaluation, secrets, permissions and unvetted dependencies.",
    "Reject unnecessary abstractions and unrequested changes; keep diffs small and focused.",
    "Keep ownership of decisions: you choose the approach, and you can explain and defend every change without AI.",
    "Never paste credentials, personal data or confidential code into a tool your employer has not approved.",
    "Practise in both modes: independent (no AI) and AI-assisted (every material change inspected, tested and explained).",
    "Skip for now: building AI applications, prompt-engineering techniques and advanced agent configuration.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "The Missing Semester — Agentic Coding (2026)",
      url: "https://missing.csail.mit.edu/2026/agentic-coding/",
      provider: "MIT",
      type: "Video",
      instructions:
        "Start here. Video and notes: how coding agents work, how to give them context and why output must be reviewed for correctness and security. Do the exercise comparing coding by hand, autocomplete, chat and an agent on the same small task. Free; no account (the exercise needs access to some AI assistant).",
    },
    {
      title: "Best practices for using GitHub Copilot — Check Copilot's work",
      url: "https://docs.github.com/en/copilot/get-started/best-practices",
      provider: "GitHub Docs",
      type: "Documentation",
      instructions:
        "Optional written alternative (vendor guidance). Read the sections Choose the right Copilot tool for the job, Create thoughtful prompts and Check Copilot's work; the advice applies to other assistants too. A paid subscription is not required (GitHub offers a limited free plan; any assistant you can access works).",
    },
  ],
  exercises: [
    {
      title: "Independent mode: complete one drill from Existing-Codebase Drills with AI assistants and AI autocomplete turned off, then explain your change aloud.",
      note: "Establishes what you can do alone — the baseline for interviews that do not allow AI.",
    },
    {
      title: "AI-assisted mode: complete a comparable drill with an AI assistant and keep a verification log.",
      note: "For each request record what you asked, what it produced, what you checked (tests, docs, behavior), what you rejected or changed and why. Aim to catch at least one incorrect suggestion; if you catch none, check more carefully.",
    },
    {
      title: "Fabricated-API check: ask an assistant for code that uses a library you have not used before, then verify every function, parameter and package name against the official documentation and the package index.",
      note: "No suitable external exercise exists. Record anything that did not exist or behaved differently from the explanation.",
    },
    {
      title: "Explain without AI: after an AI-assisted change, close the assistant and explain every changed line, the alternatives and how you verified it to a partner or a recording.",
      note: "If you cannot explain a line, you do not own it yet: read, test or rewrite it.",
    },
    {
      title: "Missing Semester agentic coding comparison",
      url: "https://missing.csail.mit.edu/2026/agentic-coding/",
      note: "Do the same small feature by hand, with autocomplete, with chat and with an agent; compare time, quality and how much verification each needed.",
    },
  ],
  interviewQuestions: [
    {
      question: "How do you evaluate an AI-generated implementation?",
      answer:
        "I treat it like a pull request from someone I don't know. I check it against the requirements, read every line, and test it with the cases the requirements imply — normal, boundaries, empty and invalid input — not only the ones the assistant chose. I look for side effects, wrong assumptions, invented behavior and security issues, and I check unfamiliar functions in the documentation. I also ask whether it is simpler than necessary or more complex. Here the suggestion looks right but is wrong for even-length lists and reorders the caller's list as a side effect.",
      code: `def median_suggested(values):          # as suggested by an assistant
    values.sort()
    return values[len(values) // 2]

def median(values):                    # after review
    if not values:
        raise ValueError("median of an empty list")
    ordered = sorted(values)           # no side effect on the caller's list
    mid = len(ordered) // 2
    return ordered[mid] if len(ordered) % 2 else (ordered[mid - 1] + ordered[mid]) / 2

data = [4, 1, 3, 2]
print(median_suggested(data), data)   # wrong median, and the input was reordered  # -> 3 [1, 2, 3, 4]
print(median([4, 1, 3, 2]), median([5, 1, 3]))   # -> 2.5 3`,
      followUps: ["Which tests would have caught both problems?"],
      source: { title: "GitHub Docs — Best practices for using GitHub Copilot (Check Copilot's work)", url: "https://docs.github.com/en/copilot/get-started/best-practices" },
    },
    {
      question: "What would you do if generated code passed the tests but you did not understand it?",
      answer:
        "I would not merge it: passing tests only shows it handles the cases someone thought of, and I am responsible for code I submit whoever wrote it. I would read and step through it until I can explain it, check unfamiliar calls in the documentation and add tests for edge cases the existing tests miss. If it is still unclear, I would replace it with a simpler version I can explain. Here the suggestion passes the given tests but is wrong for century years.",
      code: `def is_leap_suggested(year):
    return year % 4 == 0

def is_leap(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

given_tests = [(2024, True), (2023, False)]
print(all(is_leap_suggested(y) == want for y, want in given_tests))   # -> True
print(is_leap_suggested(1900), is_leap(1900), is_leap(2000))        # -> True False True`,
      followUps: ["How do you choose extra test cases for code you didn't write?"],
      source: { title: "GitHub Docs — Best practices for using GitHub Copilot (Check Copilot's work)", url: "https://docs.github.com/en/copilot/get-started/best-practices#check-copilots-work" },
    },
    {
      question: "How do you catch fabricated functions, parameters or packages in generated code?",
      answer:
        "Check every unfamiliar call against the official documentation for the version you use, and run the code — fabricated functions often fail immediately, but a fabricated parameter or a wrong assumption about behavior may not. For a new dependency, confirm the exact package name on the official package index, look at its maintainers, repository and activity, and only then install it: researchers found code models recommending non-existent package names often enough for attackers to register them. Prefer the standard library or an existing project dependency when it does the job.",
      followUps: ["The assistant suggests installing a package you have never heard of. What do you check first?"],
      source: { title: "Spracklen et al. — We Have a Package for You! A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs (arXiv)", url: "https://arxiv.org/abs/2406.10279" },
    },
    {
      question: "What security checks do you apply to AI-generated code?",
      answer:
        "The same as for any code, with extra care because assistants reproduce common insecure patterns confidently. I look for injection (SQL or shell commands built from input), unsafe evaluation (eval, unsafe deserialization), hard-coded or logged secrets, missing authorization checks, disabled certificate verification and unvetted new dependencies. Here a generated calculator uses eval, which runs any Python expression a user sends; a parser that only accepts literals or a small expression grammar is safe.",
      code: `import ast

user_input = "__import__('os').name"
print(eval(user_input) in ("posix", "nt"))   # eval ran code chosen by the user  # -> True
try:
    ast.literal_eval(user_input)              # accepts only literals such as numbers, strings and lists
except ValueError:
    print("rejected")                          # -> rejected`,
      followUps: ["Which items from Security Fundamentals are most likely to appear in generated code?"],
      source: { title: "Python Docs — ast.literal_eval", url: "https://docs.python.org/3/library/ast.html#ast.literal_eval" },
    },
    {
      question: "How do you give an AI assistant a task so the result is useful?",
      answer:
        "I break the work into small steps I can verify — for example a failing test that reproduces the bug, then the fix, then a refactor — rather than asking for a whole feature. For each step I give the goal, the constraints (language version, existing patterns, no new dependencies), the relevant files and how I will judge the result. I ask for a small diff with an explanation, and if it starts going in circles I stop and rethink rather than accepting more changes.",
      followUps: ["The assistant changed five files when you asked for a one-line fix. What do you do?"],
      source: { title: "GitHub Docs — Best practices for using GitHub Copilot", url: "https://docs.github.com/en/copilot/get-started/best-practices" },
    },
    {
      question: "What information should you never give an AI tool?",
      answer:
        "Never paste passwords, API keys, tokens or private keys; customer or other personal data; or confidential code and documents into a tool your employer has not approved for that data. Follow your employer's AI policy, which may restrict which tools can be used and on what code. Remove secrets from logs and examples before sharing them, and treat anything you send as potentially stored by the provider. If a secret is ever pasted, treat it as leaked and rotate it.",
      followUps: ["How would you ask for help with an error message that contains a customer's email address?"],
      source: { title: "OWASP Top 10 for LLM Applications — LLM02:2025 Sensitive Information Disclosure", url: "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/" },
    },
    {
      question: "Can you use AI tools during technical interviews?",
      answer:
        "Only when the employer explicitly allows it, and only in the way it allows. Policies differ and change (as checked on 25–26 November 2026; recheck before each interview): Google states AI tools are not permitted in its interviews; Microsoft asks candidates to demonstrate their own skills without outside assistance unless explicitly permitted; Meta says many of its interviews include a built-in AI assistant candidates are expected to use. Ask your recruiter, follow the written assessment instructions, and prepare in both modes (see the AI-Assisted Coding interview guide). When AI is allowed, interviewers typically still assess your own reasoning: explain your plan, review and test what the assistant produces, and catch its mistakes out loud.",
      followUps: ["In an AI-assisted round, the assistant gives a solution that looks right. What do you say and do before moving on?"],
      source: { title: "Meta Careers — Hiring process (official)", url: "https://www.metacareers.com/hiring-process/" },
    },
  ],
  mistakes: [
    "Accepting generated code because it runs or passes its own tests.",
    "Asking for a whole feature in one request and accepting a large, unfocused diff.",
    "Installing a suggested package without checking that it exists and is trustworthy.",
    "Letting the assistant choose the design and adding abstractions nobody asked for.",
    "Pasting secrets, personal data or confidential code into an unapproved tool.",
    "Being unable to explain your own submitted code without the assistant.",
    "Using AI in an interview or assessment that does not allow it.",
    "Practising only with AI, so independent skills needed for AI-free interviews never develop.",
  ],
  mastery: [
    "Independent mode: you can complete a small drill (fix a bug, add a tested feature) in unfamiliar code without AI and explain it.",
    "AI-assisted mode: you can complete a comparable drill with an assistant in small steps, keep a verification log and catch incorrect suggestions.",
    "You verify every generated change with tests and documentation, check its security implications and reject unnecessary complexity.",
    "You can explain and defend every line of an AI-assisted change with the assistant closed.",
    "You know your target employer's AI rules for interviews, or you have asked.",
    "Skip this topic only if you already work this way: small verified steps, a habit of catching wrong suggestions, and the ability to explain every change without the assistant.",
  ],
  deprioritize: [
    "Building AI applications, prompt-engineering techniques and model internals (role-specific; AI Engineer paths are planned separately).",
    "Configuring advanced agent features such as custom tools, multi-agent setups and automation pipelines.",
    "Comparing and switching between many AI tools; one assistant used well is enough.",
  ],
  keywords: [
    "AI",
    "AI-assisted",
    "AI coding assistant",
    "coding agent",
    "agentic",
    "Copilot",
    "Claude Code",
    "LLM",
    "generated code",
    "hallucination",
    "fabricated API",
    "verification",
    "prompting",
    "AI interview",
    "AI policy",
  ],
};

export default topic;
