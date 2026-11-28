import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "application-strategy",
  title: "Job Application Strategy",
  description: "Find suitable roles, apply efficiently, reach recruiters and referrals, and keep preparing while you apply — for new graduates, career switchers and experienced engineers.",
  guidance: [
    {
      heading: "When to start applying",
      items: [
        "You meet a role's eligibility requirements (see Job Description Gap Analysis).",
        "You have a one-page resume with at least one project you can explain in depth (see Resume Preparation).",
        "You can solve straightforward coding problems in one language and are practising data structures and algorithms.",
        "You have a few behavioral stories prepared (see the Behavioral questions).",
        "Graduation-year programs often open many months before the start date; if you are a student, check timing early rather than waiting until you feel fully ready.",
      ],
    },
    {
      heading: "Choosing roles to target",
      items: [
        "Search by role, not only by title. Equivalent titles include Front End or UI Engineer (frontend), Analytics or Data Platform Engineer (data), Software Engineer, Machine Learning (ML), Applied AI Engineer (AI), Solutions Architect, Sales Engineer or Customer Engineer (solutions), and Trading Systems or Low-Latency Engineer (quantitative developer). Global search on this site finds these titles.",
        "Entry-level signals: \"New Grad\", \"University Graduate\", \"Early Career\", \"Junior\", \"Associate\", \"Software Engineer I\" or level-one titles such as \"SDE I\".",
        "Read experience requirements as a range, not a wall: if you meet most of the required skills and are within about a year of the stated experience, applying is reasonable; if a posting asks for many more years or a credential you lack (a PhD, a security clearance, work authorization), it is usually out of range. Postings rarely say how strictly they apply requirements.",
        "List your transferable skills honestly: production systems you supported, data or automation work, customer-facing work, debugging, testing and domain knowledge (finance, healthcare, logistics). Domain knowledge can make you a strong candidate at employers in that industry.",
        "Balance your list: a few aspirational employers, most where you clearly meet the requirements, and some where you exceed them. Enterprise, mid-size and non-tech employers hire many engineers and are often less competitive than the best-known companies.",
        "Processes differ: large tech companies usually emphasise coding interviews, startups often add practical or take-home work, and enterprise programs often use online assessments and assessment days. Confirm the format with the recruiter.",
      ],
    },
    {
      heading: "Where to find openings",
      items: [
        "Employer career pages are the authoritative source for eligibility, deadlines and status; check them before applying to a role found elsewhere.",
        "Established job platforms such as LinkedIn Jobs and Indeed cover most employers; filter by title, location, remote options and posting date. Startup-focused boards such as Y Combinator's Work at a Startup and Wellfound list early-stage roles.",
        "Community lists such as the SimplifyJobs new-grad repository collect early-career openings; always confirm details on the employer's page.",
        "University career services and Handshake list roles for students and recent graduates (account required).",
        "Your own network, former colleagues and alumni often know about roles before they are posted.",
        "Beware of postings that ask for payment, financial details or unusual personal information before an interview.",
      ],
    },
    {
      heading: "Applying efficiently",
      items: [
        "Keep a master resume and a tailored copy per role type (for example backend, frontend, data); adjust the order of bullets and the featured project for each application rather than rewriting.",
        "Apply to roles where you meet eligibility and most required skills; quality of fit matters more than volume, but do not hold back waiting for a perfect match.",
        "Check employer-specific rules. For example, Google's hiring page stated a limit on how many roles you can apply to within a period (see the Google guide, checked 25 November 2026); read such rules on the employer's site before applying.",
        "Write a cover letter only when the employer asks for one or the role is a strong fit you want to explain; keep it short and specific.",
        "Apply soon after a role opens where you can; there is no reliable public data on exact timing effects, so do not delay an application to perfect it.",
      ],
    },
    {
      heading: "Referrals and recruiter outreach",
      items: [
        "A referral is a current employee recommending you for a specific role. Ask people who know you or your work first: former colleagues, classmates, teaching staff, people you met at events or through open source.",
        "Be specific and brief: name the role and link it, attach your resume and give two or three sentences on why you fit. Make it easy to say no, and thank people regardless of the outcome.",
        "Representative message to a recruiter or engineer: \"Hi Sam — I'm a backend engineer with four years of Python and PostgreSQL experience, most recently building payment APIs. I applied for the Backend Engineer role on your team (link). Would you be open to a 15-minute chat about the team, or is there someone better to ask? Thanks either way.\" Adapt it to your real background.",
        "Short conversations with engineers (informational interviews) help you understand a team and role; ask about their work, not for a job in the first message.",
        "Avoid mass messages and asking strangers for referrals without context.",
      ],
    },
    {
      heading: "Career switchers",
      items: [
        "Target roles where your previous career is an advantage: a former analyst for data roles, a former teacher or consultant for solutions roles, a former nurse or claims specialist at healthcare or insurance technology companies.",
        "Show evidence of engineering ability through projects you can explain in depth, and describe earlier work honestly in terms of transferable skills; do not relabel non-engineering jobs as engineering.",
        "Prepare a one-sentence explanation of the switch: \"After automating reporting in my finance job, I retrained in software engineering and built [project]; I'm looking for my first backend role.\"",
      ],
    },
    {
      heading: "Recruiter screens",
      items: [
        "Recruiter conversations typically cover your background, interest in the role, logistics (location, start date, work authorization) and sometimes salary expectations. Google and Meta both describe recruiter conversations as an early step in their official hiring pages.",
        "Prepare a 60–90 second introduction connecting your background to the role (see the Behavioral questions).",
        "Ask about the interview process: the number and type of rounds, the language and environment, whether AI tools are allowed, and how to prepare. Formats change, so trust this over older online reports.",
        "Answer logistics truthfully. If asked for salary expectations and you are unsure, you can ask for the role's range first.",
      ],
    },
    {
      heading: "Keeping a simple application record",
      items: [
        "Use a spreadsheet or document outside this app with one row per application: company, role, link, date applied, resume version, referral (yes or no), current stage, next step and date, notes on the interview format.",
        "Save a copy of each job description; postings are often removed after they close and you will want it when preparing for interviews.",
        "Review the record every week or two: which role types lead to interviews, and which stage you most often stop at. That tells you whether to adjust your resume, your targeting or your interview preparation.",
      ],
    },
  ],
  recommendations: [
    "Apply while preparing. Keep one primary technical focus (for example one problem pattern at a time), a little regular behavioral practice, and a fixed, limited amount of application time each week.",
    "If you get few responses, revisit targeting, eligibility and your resume before blaming your skills.",
    "If you get interviews but no offers, use the Interview Failure Recovery guide to find the weak stage.",
    "Prepare for an online assessment as soon as you apply to an employer that uses them; it can arrive within days.",
  ],
  interviewQuestions: [
    "Tell me about yourself.",
    "Why are you interested in this role and company?",
    "What kind of work are you looking for?",
    "When could you start, and where are you able to work?",
    "Do you need visa sponsorship now or in the future?",
    "What are your salary expectations?",
    "Do you have any other interviews or offers in progress?",
  ],
  mistakes: [
    "Waiting to cover every topic, or to feel completely ready, before applying.",
    "Applying to roles where you clearly fail an eligibility requirement.",
    "Sending one generic resume to every role type.",
    "Spending all your time applying and none preparing, or the reverse.",
    "Relying on unverified job lists without checking the employer's own page.",
    "Not asking the recruiter how the interviews work.",
    "Treating silence or rejection as proof you are not good enough; many factors are outside your control.",
  ],
  resources: [
    {
      title: "Google — Build your future (students and early career)",
      url: "https://www.google.com/about/careers/applications/buildyourfuture/",
      note: "Official student and early-career page. Use it to find programs and Google's preparation resources. See also Google's hiring process page for application rules.",
    },
    {
      title: "Amazon — Students & graduates",
      url: "https://www.amazon.jobs/content/en/career-programs/university",
      note: "Official page for internships and graduate roles at Amazon.",
    },
    {
      title: "Meta — Jobs for students and recent grads",
      url: "https://www.metacareers.com/careerprograms/students",
      note: "Official page for Meta's student and recent-graduate roles.",
    },
    {
      title: "Apple — Student jobs and internships",
      url: "https://www.apple.com/careers/us/work-at-apple/students.html",
      note: "Official US page for Apple's student and early-career opportunities.",
    },
    {
      title: "Our hiring process",
      url: "https://www.google.com/about/careers/applications/how-we-hire/",
      note: "Official example of an employer explaining its process, recruiter conversations and application rules. Read it as an example of what to look for on any employer's site.",
    },
    {
      title: "New-Grad-Positions",
      url: "https://github.com/SimplifyJobs/New-Grad-Positions",
      note: "Free, frequently updated list of new-grad software roles. Use it for discovery only and confirm every detail on the employer's page; links to the maintainer's own product are optional.",
    },
  ],
  relatedGuides: ["/getting-hired/resume", "/getting-hired/job-description-gap-analysis", "/getting-hired/interview-failure-recovery"],
};

export default guide;
