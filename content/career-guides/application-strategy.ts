import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "application-strategy",
  title: "Job Application Strategy",
  description: "Find suitable entry-level roles, apply efficiently, use referrals and recruiter screens well, and keep preparing while you apply.",
  overview:
    "You do not need to finish the apprenticeship before applying. Hiring has two separate questions: are you eligible (degree or equivalent, graduation timing, work authorization, location), and are you ready for the interviews? Apply as soon as you are eligible and reasonably prepared, and keep preparing while applications are in progress, because hiring processes commonly take weeks to months. Nothing here guarantees interviews or offers; it helps you spend your time where it is most likely to pay off.",
  guidance: [
    {
      heading: "When to start applying",
      items: [
        "You meet a role's eligibility requirements (see Job Description Gap Analysis).",
        "You have a one-page resume with at least one project you can explain in depth (see Resume Preparation).",
        "You can solve straightforward coding problems in one language and are practising data structures and algorithms (Apprenticeship Units 1–2).",
        "You have a few behavioral stories prepared (see Behavioral Interview Preparation in Interview Preparation).",
        "Graduation-year programs often open many months before the start date; if you are a student, check timing early rather than waiting until you feel fully ready.",
      ],
    },
    {
      heading: "Choosing roles to target",
      items: [
        "Look for titles that signal entry level: \"New Grad\", \"University Graduate\", \"Early Career\", \"Junior\", \"Associate\", \"Software Engineer I\" or level-one titles such as \"SDE I\".",
        "Treat \"Software Engineer\" postings that ask for several years of professional experience as out of range unless they say internships or equivalent experience count.",
        "General software engineering roles are the broadest target. Add backend roles once you have done Unit 7 work, and full-stack roles once you have done Unit 8 work.",
        "Big Tech, startups and enterprise programs differ in process: Big Tech usually emphasises coding interviews, startups often add practical or take-home work, and enterprise graduate programs often use online assessments and assessment days. Confirm the format with the recruiter.",
        "Internships and apprenticeships are also routes in, if you are eligible for them.",
      ],
    },
    {
      heading: "Where to find openings",
      items: [
        "Employer career pages are the authoritative source for eligibility, deadlines and status. Many large employers have student and graduate pages (see the resources below).",
        "Community-maintained lists such as the SimplifyJobs new-grad repository collect openings across many companies; always confirm details on the employer's own page before applying.",
        "University career services and platforms such as Handshake list roles for students and recent graduates (they usually require an account).",
        "General job boards and professional networks are useful for discovery; filter by entry-level terms and recent posting dates.",
        "Beware of postings that ask for payment, financial details or unusual personal information before an interview.",
      ],
    },
    {
      heading: "Applying efficiently",
      items: [
        "Keep a master resume and a tailored copy per role type (general, backend, full-stack); adjust the order of bullets and the featured project for each application rather than rewriting.",
        "Apply to roles where you meet eligibility and most required skills; quality of fit matters more than volume, but do not hold back waiting for a perfect match.",
        "Check employer-specific rules. For example, Google's hiring page states a limit on how many roles you can apply to within a period; read such rules on the employer's site before applying.",
        "Write a cover letter only when the employer asks for one or the role is a strong fit you want to explain; keep it short and specific.",
        "Apply soon after a role opens where you can; there is no reliable public data on exact timing effects, so do not delay an application to perfect it.",
      ],
    },
    {
      heading: "Networking and referrals: the fundamentals",
      items: [
        "A referral is a current employee recommending you for a specific role. Ask people who know you or your work first: classmates, former colleagues, teaching staff, people you met at events or through open source.",
        "When asking, be specific: name the role and link to it, include your resume, and give two or three sentences on why you fit. Make it easy to say no.",
        "Short conversations with engineers (informational interviews) help you understand a team and role; ask about their work, not for a job in the first message.",
        "Do not send mass messages or ask strangers to refer you without context. Thank people regardless of the outcome.",
      ],
    },
    {
      heading: "Recruiter screens",
      items: [
        "Recruiter conversations typically cover your background, interest in the role, logistics (location, start date, work authorization) and sometimes salary expectations. Google and Meta both describe recruiter conversations as an early step in their official hiring pages.",
        "Prepare a 60–90 second introduction connecting your background to the role (see Behavioral Interview Preparation).",
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
    "Apply while preparing. Keep one primary technical focus (for example Unit 2), a little regular behavioral practice, and a fixed, limited amount of application time each week.",
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
    "Waiting to finish every unit, or to feel completely ready, before applying.",
    "Applying to roles where you clearly fail an eligibility requirement.",
    "Sending one generic resume to every role type.",
    "Spending all your time applying and none preparing, or the reverse.",
    "Relying on unverified job lists without checking the employer's own page.",
    "Not asking the recruiter how the interviews work.",
    "Treating silence or rejection as proof you are not good enough; many factors are outside your control.",
  ],
  readiness: [
    "You can state your eligibility clearly: degree or equivalent, graduation date, work authorization and location.",
    "You have a master resume and tailored versions for the role types you target.",
    "You have a list of target employers and know where their entry-level roles are posted.",
    "You have an introduction you can give in about a minute.",
    "You keep a simple external record of applications and review it regularly.",
  ],
  resources: [
    {
      title: "Google — Build your future (students and early career)",
      url: "https://www.google.com/about/careers/applications/buildyourfuture/",
      provider: "Google Careers",
      type: "Article",
      instructions: "Official student and early-career page. Use it to find programs and Google's preparation resources. See also Google's hiring process page for application rules.",
    },
    {
      title: "Amazon — Students & graduates",
      url: "https://www.amazon.jobs/content/en/career-programs/university",
      provider: "Amazon",
      type: "Article",
      instructions: "Official page for internships and graduate roles at Amazon.",
    },
    {
      title: "Meta — Jobs for students and recent grads",
      url: "https://www.metacareers.com/careerprograms/students",
      provider: "Meta",
      type: "Article",
      instructions: "Official page for Meta's student and recent-graduate roles.",
    },
    {
      title: "Apple — Student jobs and internships",
      url: "https://www.apple.com/careers/us/work-at-apple/students.html",
      provider: "Apple",
      type: "Article",
      instructions: "Official US page for Apple's student and early-career opportunities.",
    },
    {
      title: "Our hiring process",
      url: "https://www.google.com/about/careers/applications/how-we-hire/",
      provider: "Google Careers",
      type: "Article",
      instructions: "Official example of an employer explaining its process, recruiter conversations and application rules. Read it as an example of what to look for on any employer's site.",
    },
    {
      title: "New-Grad-Positions",
      url: "https://github.com/SimplifyJobs/New-Grad-Positions",
      provider: "SimplifyJobs (community-maintained)",
      type: "Repository",
      instructions: "Free, frequently updated list of new-grad software roles. Use it for discovery only and confirm every detail on the employer's page; links to the maintainer's own product are optional.",
    },
  ],
  relatedGuides: ["/getting-hired/resume", "/getting-hired/job-description-gap-analysis", "/interview-prep/behavioral-interviews", "/getting-hired/interview-failure-recovery"],
};

export default guide;
