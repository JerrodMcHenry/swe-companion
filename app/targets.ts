import type { Tone } from "@/content/roadmap";

// Presentation details for the target cards: a short name, a one-line description, an initial and a color.
// The guide's own title and description are used for any target not listed here.
export const targetCards: Record<string, { name: string; text: string; icon: string; tone: Tone }> = {
  google: { name: "Google", text: "Coding-heavy interviews at Apply depth; no AI.", icon: "G", tone: "sky" },
  amazon: { name: "Amazon", text: "Online assessment, low-level design and Leadership Principles.", icon: "A", tone: "amber" },
  meta: { name: "Meta", text: "Fast coding; an AI-assisted round at some interviews.", icon: "M", tone: "indigo" },
  apple: { name: "Apple", text: "Team-based process; your team's language.", icon: "Ap", tone: "slate" },
  microsoft: { name: "Microsoft", text: "Runnable code with explicit tests.", icon: "Ms", tone: "teal" },
  netflix: { name: "Netflix", text: "Eligibility first: few early-career openings.", icon: "N", tone: "rose" },
  "early-stage-startups": { name: "Early-stage startup", text: "Ship a project; practical work and take-homes.", icon: "⚡", tone: "amber" },
  "ai-focused-startups": { name: "AI-focused startup", text: "Strong fundamentals and verified AI use.", icon: "✦", tone: "violet" },
  "growth-stage-companies": { name: "Growth-stage company", text: "Coding screens plus debugging and integration.", icon: "↗", tone: "emerald" },
  "established-tech-companies": { name: "Established tech company", text: "A balanced coding and fundamentals path.", icon: "▣", tone: "sky" },
  "enterprise-early-career-programs": { name: "Enterprise program", text: "Online assessments, behavioral, assessment days.", icon: "⌂", tone: "slate" },
  "other-employer": { name: "Other employer", text: "Prioritize from the posting and confirmed format.", icon: "◎", tone: "indigo" },
};

export function targetName(slug: string, fallback: string) {
  return targetCards[slug]?.name ?? fallback;
}

// Short role descriptions for the role step.
export const roleCards: Record<string, string> = {
  "software-engineer": "General entry-level software engineering.",
  "backend-engineer": "APIs, data and services.",
  "full-stack-engineer": "Backend plus a React frontend.",
};
