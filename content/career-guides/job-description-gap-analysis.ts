import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "job-description-gap-analysis",
  title: "Job Description Gap Analysis",
  description: "Read a job description, separate requirements from preferences, map your gaps to interview preparation, and decide whether to apply now.",
  guidance: [
    {
      heading: "Step 1: Split the posting into parts",
      items: [
        "Required qualifications. Employers name these differently: Google lists \"Minimum qualifications\", Amazon lists \"Basic qualifications\", and many others say \"Requirements\" or \"What you need\". Treat them as the bar for an application.",
        "Preferred qualifications (\"Preferred\", \"Nice to have\", \"Bonus\"). These distinguish strong candidates; missing some is normal.",
        "Responsibilities. These describe the daily work and often reveal what interviews will test: \"write and review code\", \"build APIs\" or \"own features end to end\".",
        "Logistics: location, remote policy, start date, graduation window, work authorization, security clearance, and the number of years of experience.",
      ],
    },
    {
      heading: "Step 2: Separate eligibility from competency",
      items: [
        "Eligibility requirements cannot be closed by studying: work authorization or sponsorship, citizenship or clearance, a required graduation window, location, and a required degree when no equivalent is offered. If you do not meet one, do not apply to that posting; look for similar roles where you do.",
        "Degree wording matters. Many postings, including Google's early-career postings reviewed in this site's research, accept a bachelor's degree \"or equivalent practical experience\". Others require a degree or a specific field.",
        "Experience wording matters too. \"New grad\" and \"early career\" roles usually expect little or no full-time experience. \"1 year of experience\" may or may not count internships and projects; some postings say \"in an industry setting\". Read the exact wording rather than guessing, and do not misrepresent projects as employment.",
        "Competency requirements can be developed: languages, data structures and algorithms, testing, databases, frameworks and tools.",
      ],
    },
    {
      heading: "Step 3: Classify every skill line",
      items: [
        "Already have: you could discuss it confidently and show evidence (a project, internship or course work).",
        "Essential gap: a required skill you lack and that interviews or the job clearly depend on, such as coding fluently in one language or basic data structures for a role with an online assessment.",
        "Interview preparation gap: you have the skill but have not practised it in interview conditions, such as timed coding without help or explaining a project.",
        "Optional technology: a specific framework, cloud service or tool listed as preferred or as one of several examples. Entry-level candidates are commonly expected to learn these on the job.",
        "Defer: senior-level or specialised items (large-scale distributed systems, specific certifications) that appear in preferred qualifications.",
      ],
    },
    {
      heading: "Step 4: Map gaps to preparation",
      items: [
        "Writing code fluently in one language → timed easy problems in that language and its language questions (Python shown here).",
        "Data structures, algorithms, complexity, online assessments → Data Structures & Algorithms questions and the coding problems by pattern.",
        "Object-oriented design, design principles → OOP & SOLID and Low-Level Design.",
        "Git, testing, command line, HTTP, SQL concepts, operating-system and security basics → the Git, Testing & Debugging, Networking, SQL, Operating Systems and Backend question sets.",
        "Working in existing codebases, code review, AI-assisted development tools → Testing & Debugging and the AI-assisted coding questions, plus practice in an open-source repository.",
        "No substantial project to discuss → Engineering Projects.",
        "REST APIs, databases, authentication, backend frameworks → APIs, SQL & Databases and Backend Engineering questions.",
        "JavaScript, TypeScript, React, browser fundamentals → JavaScript, TypeScript, React and HTML/CSS questions.",
        "Behavioral questions → the Behavioral questions. Interview formats → the employer's page. Resume wording → Resume Preparation.",
        "If an equivalent stack is listed (for example Java instead of Python), the concepts transfer; plan focused practice in that language rather than starting a new course.",
      ],
    },
    {
      heading: "Step 5: Decide — apply now or close a gap first",
      items: [
        "Apply now if you meet every eligibility requirement, can show most required skills or a reasonable equivalent, and your gaps are mainly preferred qualifications, optional technologies or interview practice. Keep preparing while the application is in progress.",
        "Close a gap first, briefly, if a core required skill is missing and would almost certainly be tested early, such as coding in any language for a role that starts with an online coding assessment. Meanwhile, apply to roles that fit better.",
        "Skip the posting if you do not meet a hard eligibility requirement.",
        "These are editorial decision rules, not employer policy. Employers decide differently, and a posting rarely states which requirements are strictly enforced.",
      ],
    },
    {
      heading: "Example A (illustrative, not a real posting): Software Engineer, New Grad",
      items: [
        "Required: bachelor's degree in computer science or equivalent practical experience; graduating between December and August; proficiency in one of Python, Java, C++ or Go; knowledge of data structures and algorithms. Preferred: internship experience; experience with testing; familiarity with distributed systems.",
        "Analysis for a candidate who is fluent in Python, practises coding problems regularly, has one deployed project and is graduating in the window: eligible; required skills met; internship missing but preferred; distributed systems deferred. Decision: apply now, practise timed coding problems and behavioral stories, and put the project first under Projects.",
      ],
    },
    {
      heading: "Example B (illustrative, not a real posting): Junior Backend Engineer",
      items: [
        "Required: 0–2 years of experience; experience building REST APIs in Python, Go or Java; SQL and a relational database; Git. Preferred: Docker; a cloud provider such as AWS; message queues.",
        "Analysis for a career switcher with solid Python and coding fundamentals and a Python project but no API or database work: eligible; essential gap in APIs and SQL in practice. Decision: spend a few focused weeks on APIs and SQL and add an API with PostgreSQL to the project, while applying to general entry-level roles; apply here once the API exists. Docker and AWS are optional; message queues can be deferred.",
      ],
    },
    {
      heading: "Example C (illustrative, not a real posting): Junior Full-Stack Engineer",
      items: [
        "Required: experience with JavaScript or TypeScript and React; building and consuming APIs; HTML and CSS; Git. Preferred: Node.js; testing frontend code; Next.js.",
        "Analysis for a candidate fluent in Python with a backend project but no frontend work: eligible; essential gap in JavaScript, TypeScript and React. Decision: learn JavaScript, TypeScript and React before applying to full-stack roles specifically; apply to backend and general roles now. Next.js is optional once React is understood.",
      ],
    },
  ],
  recommendations: [
    "Analyse three to five postings for the same role type together; requirements that repeat across them matter more than any single posting's wish list.",
    "Write your analysis in a short note for each posting: eligibility (yes or no), required skills met, essential gaps, preferred gaps, decision.",
    "Use the posting's language on your resume only where it truthfully describes your experience.",
    "Postings describe eligibility and job expectations; they rarely describe interview formats. Confirm formats with the recruiter.",
  ],
  mistakes: [
    "Not applying because you lack some preferred qualifications.",
    "Applying despite missing a hard eligibility requirement such as work authorization or a graduation window.",
    "Treating every listed technology as something to learn before applying.",
    "Starting a new course for each posting instead of closing the shared gaps once.",
    "Misreading \"or equivalent practical experience\", or claiming projects as professional experience to meet a years-of-experience line.",
  ],
  relatedGuides: ["/getting-hired/resume", "/getting-hired/application-strategy"],
};

export default guide;
