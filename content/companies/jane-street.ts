import type { Company } from "../types";

const company: Company = {
  slug: "jane-street",
  name: "Jane Street",
  group: "Quantitative Trading",
  roles: ["software-engineer", "frontend-engineer", "data-engineer", "machine-learning-engineer", "quant-developer"],
  levels: "Of 14 software engineering postings reviewed (27 Nov 2026), 4 were new-grad and 4 intern roles; the one Low-Latency Engineer posting was experienced.",
  tagline: "Software, low-latency, frontend, data and ML engineering",
  card: "Collaborative coding in any language; no maths or puzzles for engineers.",
  categories: ["coding", "practical", "dsa", "behavioral"],
  roleCategories: {
    "quant-developer": ["coding", "performance", "cpp", "concurrency", "os-memory", "networking", "cpp-practical", "behavioral"],
  },
  notes: {
    coding: "Open-ended problems that grow in stages. Jane Street's published retired “Memo” question builds from memoization to a bounded cache and then LRU: practise LRU Cache, but retired questions are not asked.",
    practical: "Real code in the language you know best; no pseudocode. Talk through your reasoning with the interviewer.",
    dsa: "Clear problem-solving and communication over memorized tricks.",
    behavioral: "Interviews are collaborative: show how you think and take hints.",
    performance: "The Low-Latency Engineer role centers on performance; Jane Street says OCaml can be taught.",
  },
  officialResources: [
    { title: "Preparing for a software engineering interview", url: "https://www.janestreet.com/preparing-for-a-software-engineering-interview", note: "Official: languages, format and what interviewers look for." },
    { title: "Mock interview", url: "https://www.janestreet.com/mock-interview", note: "Official video of a full mock interview using a retired question." },
    { title: "What a Jane Street dev interview is like (retired question)", url: "https://blog.janestreet.com/what-a-jane-street-dev-interview-is-like/", note: "Official 2017 post walking through a retired question from memoization to an LRU cache." },
  ],
  facts: [
    { label: "Language", value: "Any language, real code, no pseudocode; no bonus for OCaml", evidence: "Official" },
    { label: "No puzzles", value: "No mental maths, maths-olympiad or logic puzzles for software engineers", evidence: "Official" },
    { label: "LLM rounds", value: "Since Nov 2026, trialling some campus onsite rounds that involve using LLMs to produce code; most rounds stay LLM-free", evidence: "Official" },
  ],
  formats: [
    { name: "Coding interviews", detail: "Open-ended problems with several parts, solved collaboratively in a real language of your choice; Jane Street avoids “aha” puzzles and “algorithm bingo”.", evidence: "Official" },
    { name: "New campus rounds (trial)", detail: "A 2 November 2026 post describes trial campus onsite rounds with less code-writing, more design and code verification, and using LLMs to produce code. Not every onsite includes them, and candidates are told in advance.", evidence: "Official" },
  ],
  caveat: "Jane Street describes its standard campus process; other processes can differ, and your recruiter will say whether a round involves LLMs. OCaml or functional programming experience is not required, and Jane Street advises against trying OCaml for the first time in an interview.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Of 219 postings reviewed on Jane Street's job board (27 November 2026), 14 were software engineering titles: 12 Software Engineer (4 experienced, 4 new grad, 4 intern), 1 Software Engineer / Writer and 1 Low-Latency Engineer (experienced).",
        "No Quantitative Developer or Algorithm Developer titles were found; quantitative trading and research roles are separate and not covered here.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: the preparation page, interviewing page, mock interview, the 2020 and 2017 blog posts, and the 2 November 2026 post saying the 2020 description remains accurate (checked 27 November 2026).",
        "Older detail such as a specific coding tool is from 2020 and may have changed; current pages mention Zoom.",
      ],
    },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["Front End Software Engineer and data engineering postings state no minimum; a data engineering internship exists.", "A Machine Learning Engineer internship posting describes 2–4 technical rounds after a Zoom coding round, 1–2 of them on ML engineering skills."] },
  ],
  sources: [
    { title: "Jane Street — Preparing for a software engineering interview (official)", url: "https://www.janestreet.com/preparing-for-a-software-engineering-interview" },
    { title: "Jane Street — Interviewing (official)", url: "https://www.janestreet.com/join-jane-street/interviewing/" },
    { title: "Jane Street — Software engineering interviews are changing a little (official, Nov 2026)", url: "https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/" },
    { title: "Jane Street — Interview process 2020 (official)", url: "https://blog.janestreet.com/jane-street-interview-process-2020/" },
    { title: "Jane Street — What a Jane Street dev interview is like (official, 2017)", url: "https://blog.janestreet.com/what-a-jane-street-dev-interview-is-like/" },
  ],
  checked: "2026-11-27",
};

export default company;
