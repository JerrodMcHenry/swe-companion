import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "behavioral-interviews",
  title: "Behavioral Interview Preparation",
  category: "Interview type",
  description: "Prepare honest, structured stories from your projects, studies and jobs for common entry-level behavioral questions.",
  level: "Entry level",
  overview:
    "Behavioral questions ask how you have handled real situations: working with others, solving hard problems, making mistakes and learning. Google, Amazon and Meta all describe behavioral questions as part of their interviews and recommend a structured format such as STAR (Situation, Task, Action, Result). Entry-level candidates are not expected to have years of professional stories: academic projects, team assignments, internships, part-time jobs, volunteering and previous careers all count, as long as the stories are true and specific. This is the general guide; employer-specific frameworks such as Amazon's Leadership Principles belong in the relevant company guide.",
  process: [
    "Recruiter screen: \"Tell me about yourself\" and motivation questions, often in a short call.",
    "Dedicated behavioral round at many employers. Meta's official preparation material describes a 45-minute behavioral interview; Google describes behavioral and hypothetical questions; Amazon describes behavioral questions throughout its interview loop.",
    "Behavioral questions inside technical rounds, often in the first or last few minutes.",
    "Hiring-manager or team-matching conversations, which focus on motivation, working style and fit with the team.",
    "Formats differ between employers and change over time; ask your recruiter what to expect.",
  ],
  competencies: [
    "Communicating clearly and concisely about your own work.",
    "Collaboration and handling disagreement constructively.",
    "Ownership and following through on commitments.",
    "Problem-solving under uncertainty and ambiguity.",
    "Learning from mistakes and feedback (self-awareness).",
    "Learning new technologies and adapting quickly.",
    "Motivation for software engineering and for the specific role.",
  ],
  studyTopics: [
    {
      title: "\"Tell me about yourself.\"",
      priority: "Essential",
      reason:
        "Asked in almost every process. Give a 60–90 second summary: who you are now, the relevant experience and one project, and why this role. Follow-ups: Why this company? What are you looking for next?",
    },
    {
      title: "\"Why software engineering?\" / \"Why are you changing careers?\"",
      priority: "Essential",
      reason:
        "Show genuine motivation with a concrete moment or project, and for career switchers how your previous work transfers. Follow-ups: What have you built so far? What did you find hardest about learning to program?",
    },
    {
      title: "\"Tell me about a difficult technical problem you solved.\"",
      priority: "Essential",
      reason:
        "Pick a real bug or design problem from a project or internship. Explain your debugging or reasoning steps, not just the fix. Follow-ups: What alternatives did you consider? How would you prevent it next time?",
    },
    {
      title: "\"Tell me about a time you worked in a team.\"",
      priority: "Essential",
      reason:
        "A team project, internship or job. Describe your specific contribution and how you coordinated. Follow-ups: What would you do differently? How did you handle someone who was not contributing?",
    },
    {
      title: "\"Tell me about a conflict or disagreement.\"",
      priority: "Essential",
      reason:
        "A disagreement about an approach or priorities, resolved by listening, using evidence and compromise. Avoid stories where you blame the other person. Follow-ups: What did you learn about the other person's view? Would you change anything?",
    },
    {
      title: "\"Tell me about a failure or mistake.\"",
      priority: "Essential",
      reason:
        "A real mistake with real consequences, what you did to recover and what you changed afterwards. Meta's guidance notes that discussing how you learned and grew is valued. Follow-ups: How do you make sure it does not happen again?",
    },
    {
      title: "\"Tell me about a time you received critical feedback.\"",
      priority: "Essential",
      reason:
        "Code review comments, a grade, or a manager's feedback; show how you responded and improved. Follow-ups: How do you give feedback to others?",
    },
    {
      title: "\"Tell me about a time you took ownership of something.\"",
      priority: "Important",
      reason:
        "Something you did beyond what was strictly required: fixing a recurring problem, improving documentation or tests, or finishing a team deliverable. Follow-ups: What was the outcome? Who else did you involve?",
    },
    {
      title: "\"Tell me about a time you faced ambiguity.\"",
      priority: "Important",
      reason:
        "Unclear requirements in a project or task; show how you asked questions, made reasonable assumptions and checked them. Follow-ups: How did you decide what to do first?",
    },
    {
      title: "\"Tell me about a time you had to prioritize or meet a deadline.\"",
      priority: "Important",
      reason:
        "Competing coursework, project or job demands; how you chose what mattered and communicated trade-offs. Follow-ups: What did you drop or postpone, and how did you tell people?",
    },
    {
      title: "\"Tell me about a time you learned a new technology quickly.\"",
      priority: "Important",
      reason:
        "How you learned (documentation, small experiments, asking for help) and what you built. Follow-ups: How do you decide when you understand something well enough?",
    },
    {
      title: "\"Do you have any questions for us?\"",
      priority: "Important",
      reason:
        "Prepare two or three genuine questions about the team's work, how new engineers are supported, or how success is measured. Avoid questions answered on the careers page.",
    },
  ],
  sequence: [
    "Build a small story bank: list six to eight real experiences from projects, studies, internships, jobs or volunteering. Include at least one technical challenge, one teamwork story, one conflict, one mistake, one piece of feedback and one example of learning something new.",
    "Map the stories to the questions above. Most stories can answer several questions; you do not need a separate story for each.",
    "Outline each story with STAR (Situation, Task, Action, Result) in a few short notes, not a script: one or two sentences of context, then most of the time on your own actions, then a specific result and what you learned. Google uses the same idea, calling the third part Activity.",
    "Make the result concrete where you honestly can: tests passing, a deadline met, a bug that stopped recurring, feedback received. Do not invent numbers.",
    "Say \"I\" for your own contribution. Amazon's guidance specifically recommends this. Credit teammates for their parts.",
    "Practise aloud, aiming for about two minutes per answer, and be ready for follow-up questions that probe details. Recording yourself or practising with a friend helps.",
    "Before an interview with a specific employer, read its official values or principles (for example Amazon's Leadership Principles) and check which of your stories fit; the company guide covers this.",
  ],
  practice: [
    {
      title: "Illustrative answer structure (new graduate): \"Tell me about a difficult technical problem.\"",
      note:
        "Example only; use your own experience. Situation: in a three-person course project, our web app's search returned wrong results for some users. Task: I owned the search feature. Action: I reproduced the bug with a small test case, traced it to a case-sensitivity mismatch between the database query and the input normalization, fixed it, and added tests for mixed-case and accented input. Result: the bug did not recur in the final demo, and I learned to write a failing test before fixing a bug.",
    },
    {
      title: "Illustrative answer structure (career switcher): \"Tell me about a conflict.\"",
      note:
        "Example only; use your own experience. Situation: as a warehouse operations analyst, a colleague and I disagreed about whether to automate a weekly report or keep the manual process. Task: we needed one approach before the next quarter. Action: I listened to their concern about errors, built a small script that produced the report alongside the manual one for three weeks, and we compared the results together. Result: we adopted the script once the outputs matched, and I learned that showing evidence works better than arguing.",
    },
    {
      title: "Write STAR outlines for six stories and map them to the twelve questions above.",
      note: "Keep each outline to five or six short bullet points so you do not memorize a script.",
    },
    {
      title: "Do a 20-minute mock behavioral interview with a friend, mentor or careers adviser.",
      note: "Ask them to interrupt with follow-up questions such as \"What did you personally do?\" and \"What would you change?\"",
    },
    {
      title: "Record a 90-second \"Tell me about yourself\" answer, listen back, and cut anything that does not support the role.",
    },
  ],
  resources: [
    {
      title: "Interviewing at Google: best practices, advice and tips",
      url: "https://www.google.com/about/careers/applications/interview-tips",
      provider: "Google Careers",
      type: "Article",
      instructions: "Official employer guidance. Read the sections on behavioral (\"Tell me about a time…\") and hypothetical questions and the advice on structuring answers.",
    },
    {
      title: "Preparing for your software engineering interview at Meta",
      url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/",
      provider: "Meta Careers",
      type: "Article",
      instructions:
        "Official employer guidance, last updated in 2022. Read only the behavioral section; Meta's coding interview format has since changed, so do not rely on the rest for current formats.",
    },
    {
      title: "Your complete guide to the Amazon interview process",
      url: "https://www.aboutamazon.com/news/workplace/amazon-interview-guide",
      provider: "Amazon",
      type: "Article",
      instructions: "Official employer guidance on the STAR method and using \"I\". Its Leadership Principles advice is Amazon-specific.",
    },
    {
      title: "Behavioral interview questions",
      url: "https://www.techinterviewhandbook.org/behavioral-interview-questions/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions:
        "Free third-party list of questions reported by candidates at many companies. Use it to check that your story bank covers common themes; ignore the joke and senior-level questions.",
    },
    {
      title: "Self introduction",
      url: "https://www.techinterviewhandbook.org/self-introduction/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free guide to structuring a short self-introduction.",
    },
  ],
  readiness: [
    "You have six to eight true stories outlined with STAR, covering every Essential question above.",
    "You can answer \"Tell me about yourself\" in about a minute and a half without reading.",
    "Each story makes your own actions clear and ends with a specific result and lesson.",
    "You can handle two follow-up questions on any story without contradicting yourself.",
    "You have practised aloud with at least one other person.",
    "You have two or three genuine questions for the interviewer.",
  ],
  sources: [
    { title: "Google — Interviewing at Google: best practices, advice and tips", url: "https://www.google.com/about/careers/applications/interview-tips" },
    { title: "Google — Our hiring process", url: "https://www.google.com/about/careers/applications/how-we-hire/" },
    { title: "Meta — Preparing for your software engineering interview at Meta", url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/" },
    { title: "Amazon — Your complete guide to the Amazon interview process", url: "https://www.aboutamazon.com/news/workplace/amazon-interview-guide" },
    { title: "Amazon — Leadership Principles", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
  ],
};

export default guide;
