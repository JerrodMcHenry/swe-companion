import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "resume",
  title: "Resume Preparation",
  description: "A clear, honest software engineering resume tailored to each role, plus LinkedIn and GitHub, for new graduates, career switchers and experienced engineers.",
  guidance: [
    {
      heading: "Representative entry-level structure (one page)",
      items: [
        "Header: name, city and country (or region), email, phone, and links to GitHub, a portfolio or LinkedIn if they show relevant work. No photo, date of birth or full street address unless the country's norms require them.",
        "Education: degree or program, institution, expected or actual graduation date, and relevant coursework only if it adds something the rest of the resume does not show. Include a grade average only if it is strong or the employer asks for it.",
        "Experience: internships, part-time or full-time jobs, research assistant roles and teaching assistant roles, most recent first. Non-technical jobs belong here too; describe the transferable parts briefly.",
        "Projects: two or three of your best engineering projects, each labelled as personal, academic, team or open-source, with the technologies used and one to three accomplishment bullets.",
        "Skills: a short, grouped list (Languages; Frameworks and tools; Databases; Practices such as testing, Git and CI) containing only things you could discuss in an interview.",
        "Optional: relevant awards, hackathons or leadership activities. Omit a summary or objective unless you are a career switcher who needs to explain the change.",
      ],
    },
    {
      heading: "Representative career-switcher structure (one page)",
      items: [
        "Header as above, plus a two-line summary that states the target role and connects your previous career to it, for example: \"Former logistics analyst moving into backend engineering; built and deployed a Python and PostgreSQL inventory API.\"",
        "Projects or technical experience first, because they are your most relevant evidence. Label them clearly as personal or bootcamp projects.",
        "Professional experience next, with bullets rewritten to emphasise transferable work: automation you built, data you analysed, processes you improved, stakeholders you worked with and incidents you handled.",
        "Education and training: degree, bootcamp or courses that matter for the role. Online courses do not need individual listing unless they are directly relevant.",
        "Skills, grouped as above. Do not claim professional software engineering experience you have not had; equivalent practical experience is described honestly through projects and transferable work.",
      ],
    },
    {
      heading: "Experienced engineers, including after a layoff",
      items: [
        "One page is enough for most engineers with under about ten years of experience; two pages are fine for longer careers if every line is relevant.",
        "Lead each role with the scope (product, users, scale, team) and two to four results you can explain: systems you designed or improved, reliability or performance gains you measured, migrations, incidents handled, people mentored.",
        "Match your most recent work to the target role's title and stack; older roles can shrink to one line each.",
        "A layoff needs no apology. If asked, one honest sentence is enough: \"My role was eliminated in a company-wide layoff in March; since then I've been preparing for backend roles and finishing a small open-source contribution.\" Do not hide gaps with inaccurate dates.",
        "Describe your actual title and level; if an internal title is unusual, you can add a clarifying phrase (\"Software Engineer II (backend, payments)\").",
      ],
    },
    {
      heading: "LinkedIn and GitHub",
      items: [
        "LinkedIn: a headline naming your target role and main skills (\"Backend engineer · Python, PostgreSQL, AWS\"), a short About section, the same jobs and dates as your resume, and your location and work preferences. Recruiters often search by title, skills and location.",
        "Use the platform's open-to-work settings if you are comfortable with them; you can limit visibility to recruiters.",
        "GitHub: pin the two to six repositories that best match your target role, each with a README that explains what it does, how to run it, your design decisions and tests. Quality matters more than activity graphs.",
        "Remove or archive unfinished tutorial copies that you would not want an interviewer to read, and never commit secrets such as API keys.",
      ],
    },
    {
      heading: "Writing accomplishment bullets",
      items: [
        "Start with a strong verb, say what you did, how you did it and what changed. Illustrative example: \"Built a REST API in FastAPI with 40 automated tests, used by three classmates to track study groups.\"",
        "Google's interview guidance suggests describing impact as \"Accomplished [X] as measured by [Y] by doing [Z]\"; the same structure works well for resume bullets.",
        "Quantify only with numbers you can explain and defend: test counts, response-time changes you measured, users, data size, time saved. If there is no honest number, describe the scope or the outcome instead.",
        "Show engineering competence: testing, debugging a hard problem, deployment, performance, code review, documentation and working with others.",
        "Keep each bullet to one or two lines. Three strong bullets beat six weak ones.",
        "Resume bullets usually omit personal pronouns: start with the verb (\"Built…\", not \"I built…\"). They should still describe your own contribution to a team project, not the team's. In interviews, by contrast, say \"I\" when explaining what you personally did.",
      ],
    },
    {
      heading: "Tailoring to a job description",
      items: [
        "Use the Job Description Gap Analysis guide to identify the required qualifications and the skills the role emphasises.",
        "Reorder and reword bullets so your most relevant evidence appears first, using the posting's terms where they truthfully describe your work (for example \"REST API\" rather than \"web service\" if that is what you built).",
        "Swap in the most relevant project for each role type: a backend project for backend roles, a full-stack project for full-stack roles.",
        "Keep one master resume with everything, and a short tailored copy per role type rather than rewriting from scratch for every application.",
      ],
    },
    {
      heading: "Formatting that applicant tracking systems can read",
      items: [
        "Many employers manage applications with applicant tracking systems (ATS). How each system parses and filters resumes varies and is not publicly documented, so aim for formatting that any system and any human can read easily. This is commonly recommended practice, not a guaranteed rule.",
        "Use a single-column layout, standard section headings (Education, Experience, Projects, Skills), a common font at 10–12 point and real text rather than images.",
        "Avoid tables, text boxes, icons, skill-level bars and putting important details in headers or footers.",
        "Submit the file type the employer asks for. A text-based PDF is usually fine; check that you can select and copy its text.",
        "Name the file clearly, for example firstname-lastname-resume.pdf.",
      ],
    },
  ],
  recommendations: [
    "Put the most relevant evidence in the top third of the page; a reviewer may decide quickly.",
    "Link only to repositories with a clear README, working instructions and code you can explain.",
    "Ask one or two people to read it: a working engineer if possible, and a careers adviser if you are a student or recent graduate.",
    "Update the master resume whenever you finish a project or learn something you could discuss in an interview.",
  ],
  interviewQuestions: [
    "Walk me through your resume.",
    "Tell me about this project. What was your contribution?",
    "Why did you choose this technology for this project?",
    "What does this number on your resume measure, and how did you measure it?",
    "Which of the listed skills are you strongest in? Which would you need to refresh?",
    "Why are you moving into software engineering? (career switchers)",
  ],
  mistakes: [
    "Fabricated or unverifiable metrics, or numbers you cannot explain.",
    "Listing every technology you have touched; anything listed is fair game for questions.",
    "Keyword stuffing: copying the job description's terms without matching experience.",
    "Presenting personal, academic or bootcamp projects as professional employment, or inflating job titles.",
    "Describing tasks (\"responsible for\") instead of accomplishments.",
    "Multi-column designs, graphics and skill bars that hinder reading and parsing.",
    "Typos, inconsistent dates and broken links.",
    "Two pages for an entry-level candidate without a clear reason.",
    "Inconsistent dates or titles between your resume and LinkedIn.",
  ],
  resources: [
    {
      title: "Practical guide to writing software engineer resumes",
      url: "https://www.techinterviewhandbook.org/resume/",
      note:
        "Free. Read the sections on structure, content and keywords. The page links paid resume services, which you do not need, and some of its claims about ATS screening are the author's view rather than documented behavior.",
    },
    {
      title: "Resumes — resources and templates",
      url: "https://capd.mit.edu/resources/resumes/",
      note: "Free university guidance on formatting, length and wording, with examples. Skim the resume guidance and use one example as a model.",
    },
    {
      title: "Create a strong resume",
      url: "https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/",
      note: "Free alternative with action verbs and sample resumes. Use the action-verb list when writing bullets.",
    },
    {
      title: "Interviewing at Google: best practices, advice and tips",
      url: "https://www.google.com/about/careers/applications/interview-tips",
      note: "Official employer guidance. Read the advice on describing achievements with the X-Y-Z structure.",
    },
  ],
  relatedGuides: ["/getting-hired/job-description-gap-analysis", "/getting-hired/engineering-projects"],
};

export default guide;
