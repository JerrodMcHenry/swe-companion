import type { Company } from "../types";

const company: Company = {
  slug: "jump-trading",
  name: "Jump Trading",
  group: "Quantitative Trading",
  roles: ["software-engineer", "frontend-engineer", "data-engineer", "quant-developer"],
  levels: "Postings reviewed (27 Nov 2026) include campus C++ and Python roles; experienced trading-team C++ and Quantitative Developer roles asked about five years.",
  tagline: "Software engineering, quantitative development, UI and data engineering",
  card: "No published interview guidance found; postings stress C++, Linux, OS and networking.",
  categories: ["coding", "cpp", "os-memory", "networking", "python", "behavioral"],
  roleCategories: {
    "quant-developer": ["coding", "cpp", "performance", "concurrency", "cpp-concurrency", "os-memory", "networking", "cpp-practical", "behavioral"],
  },
  notes: {
    coding: "No published interview guidance found (Nov 2026): a representative selection based on job requirements (data structures, algorithms and concurrency).",
    cpp: "Campus postings ask for C++ or Python; experienced roles emphasize C++.",
    "os-memory": "Postings ask for operating-systems fundamentals and Linux.",
    networking: "Postings ask for networking fundamentals.",
  },
  officialResources: [
    { title: "Students and new grads", url: "https://www.jumptrading.com/hr/students-new-grads", note: "Official programs page. It contains no interview guidance." },
  ],
  facts: [
    { label: "Interview guidance", value: "No published interview guidance found (Nov 2026 review)", evidence: "Varies" },
    { label: "Postings ask for", value: "C++ or Python, data structures and algorithms, OS and networking, Linux", evidence: "Official" },
    { label: "AI", value: "Postings expect AI tools on the job; no interview AI policy found", evidence: "Official" },
  ],
  formats: [
    { name: "No published guidance found", detail: "Our review (November 2026) found no published Jump interview process. The preparation here follows its job requirements and is representative.", evidence: "Varies" },
  ],
  caveat: "Job requirements are not interview requirements. Ask your recruiter about the stages, languages and any AI rules.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Postings reviewed on 27 November 2026 include campus software engineering roles (C++ or Python) and experienced roles such as a trading-team C++ engineer (5 years) and a Hong Kong Quantitative Developer (5-year track record).",
      ],
    },
    { heading: "Evidence", items: ["Official: careers, students and experienced-candidate pages, and postings (checked 27 November 2026). Public candidate reports are sparse and mostly older; they are not used here."] },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["A campus UI intern posting and experienced UI roles (4–5+ years); a data engineering posting asks 7+ years, and a campus data intern role exists."] },
  ],
  sources: [
    { title: "Jump Trading — Careers (official)", url: "https://www.jumptrading.com/careers/" },
    { title: "Jump Trading — Students and new grads (official)", url: "https://www.jumptrading.com/hr/students-new-grads" },
    { title: "Jump Trading — Experienced candidates (official)", url: "https://www.jumptrading.com/hr/experienced-candidates" },
  ],
  checked: "2026-11-27",
};

export default company;
