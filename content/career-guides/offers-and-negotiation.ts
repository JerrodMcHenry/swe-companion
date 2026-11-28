import type { CareerGuide } from "../types";

const guide: CareerGuide = {
  slug: "offers-and-negotiation",
  title: "Offers & Negotiation",
  description: "Base salary, bonus, equity, vesting and benefits: compare offers on total compensation and negotiate salary politely and honestly.",
  guidance: [
    {
      heading: "What an offer contains",
      items: [
        "Base salary: the fixed annual pay. It is the most certain part and the base for most bonuses and raises.",
        "Bonus: an annual or performance bonus (often a target percentage of base, not guaranteed) and sometimes a one-time sign-on bonus, which may have to be repaid if you leave within a set period.",
        "Equity: at public companies usually restricted stock units (RSUs), which become shares as they vest; at private companies often stock options, which you must pay to exercise and which may be worth nothing if the company does not succeed or sell. Ask for the number of units or options, not just a dollar value.",
        "Vesting schedule: when equity becomes yours. A common pattern is four years with a one-year cliff (nothing until the first anniversary), but schedules vary; some are front- or back-loaded. Ask whether there are annual refresh grants.",
        "Benefits: health insurance, retirement contributions or matching, paid leave, parental leave, remote-work policy and allowances, learning budget and relocation. Their value varies widely by country and employer.",
        "Compensation structures, taxes and benefits differ by country; check what is normal where the job is based.",
      ],
    },
    {
      heading: "Comparing offers",
      items: [
        "Compare total compensation per year: base + expected bonus + the equity that vests that year (valued conservatively, especially private-company options) + the value of key benefits, minus significant costs such as a commute or relocation.",
        "Look beyond the first year: vesting schedules, cliffs and refreshers can make year-one and year-three pay very different.",
        "Weigh the work itself: the team, your manager, what you will learn, the technology, on-call load, flexibility and how the role builds the career you want.",
        "Consider stability: company funding or profitability, recent layoffs and how dependent the role is on one project or customer. Use public information; do not rely on rumours.",
        "Use public compensation data (for example Levels.fyi or government salary data) to judge whether an offer is in a normal range for the role, level and location. Treat self-reported data as approximate.",
      ],
    },
    {
      heading: "Questions to ask before accepting",
      items: [
        "What is the level or title, and how are performance reviews and promotions handled?",
        "How is the bonus determined, and what has the typical payout been?",
        "For equity: how many units or options, the vesting schedule, the cliff, refreshers and, for options, the strike price and exercise window after leaving.",
        "Which team will I join, who is my manager, and what will I work on first?",
        "What are the working arrangements: location, remote or hybrid expectations, on-call and travel?",
        "When is the start date, and what is the deadline to decide?",
      ],
    },
    {
      heading: "How to negotiate",
      items: [
        "Wait for a written offer before negotiating the details, and thank the recruiter first; enthusiasm and politeness help.",
        "Ask what is flexible: base, sign-on bonus, equity, start date, level or remote arrangements. Companies differ in what they can change.",
        "Base requests on facts: a competing offer you actually have, market data for the role and location, or the scope of the role. Never invent a competing offer or inflate a current salary.",
        "Make one clear, specific request and explain it briefly. Then stop and let the recruiter respond.",
        "Polite negotiation is normal in software hiring, but an offer can occasionally be withdrawn, and some offers (for example many graduate programs) have fixed pay. Decide in advance what you would accept.",
        "Once you agree, get the final terms in writing before you resign from a current job.",
      ],
    },
    {
      heading: "Representative negotiation language",
      items: [
        "Asking for time: \"Thank you, I'm excited about this offer. Could I have until Friday to review it and come back to you?\"",
        "Asking about flexibility: \"Before I decide, is there any flexibility on the base salary or a sign-on bonus?\"",
        "Using market data: \"Based on what I've seen for similar roles in this city, I was hoping for a base closer to [figure]. Is that something you could look at?\"",
        "With a real competing offer: \"I have another offer with total compensation of about [figure]. I'd prefer to join your team; is there anything you can do to close the gap?\"",
        "Accepting: \"Thank you for working on this. I'm happy to accept and look forward to receiving the updated offer in writing.\"",
        "Replace the bracketed figures with your own honest numbers; these phrases are examples, not guarantees of a better offer.",
      ],
    },
  ],
  recommendations: [
    "Know your priorities and your minimum acceptable offer before the conversation.",
    "Keep every conversation polite; you may work with these people for years.",
    "If you were recently laid off, it is still reasonable to ask about flexibility; you do not have to disclose your previous salary unless you choose to, and some places restrict employers from asking.",
  ],
  mistakes: [
    "Accepting verbally before reviewing the written offer.",
    "Comparing only base salary and ignoring equity, bonus, benefits and vesting.",
    "Treating a private company's option value as cash.",
    "Inventing competing offers or misstating your current pay.",
    "Negotiating aggressively or with ultimatums you do not mean.",
  ],
  resources: [
    {
      title: "Haseeb Qureshi — Ten rules for negotiating a job offer",
      url: "https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/",
      note: "Free two-part essay by a former software engineer; the most practical guide for engineers. Its tactics assume US tech hiring.",
    },
    {
      title: "Levels.fyi",
      url: "https://www.levels.fyi/",
      note: "Free, self-reported compensation data by company, level and location; treat individual entries as approximate.",
    },
  ],
  relatedGuides: ["/getting-hired/application-strategy", "/getting-hired/performing-in-interviews"],
};

export default guide;
