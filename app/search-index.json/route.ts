import { companies, companyRoles, getCompany } from "@/content/companies";
import { questionSets } from "@/content/questions";
import { patterns, problems } from "@/content/problems";
import { careerGuides } from "@/content/career-guides";
import { featuredResources } from "@/content/resources";

// The global search index, written to out/search-index.json at build time and fetched when search opens.
export const dynamic = "force-static";

export function GET() {
  const items = [
    ...companyRoles(getCompany("other")!).map((r) => ({ t: `${r.title} interview prep`, k: "Role", h: r.slug === "software-engineer" ? "/companies/other" : `/companies/other/${r.slug}`, x: "also" in r ? r.also : undefined })),
    ...companies.map((c) => ({ t: c.name, k: c.group === "Types of Employer" ? "Employer type" : "Company", h: `/companies/${c.slug}`, x: c.tagline })),
    ...questionSets.map((s) => ({ t: `${s.title} interview questions`, k: "Questions", h: `/questions/${s.slug}`, x: s.description })),
    ...patterns.map((p) => ({ t: `${p.name} problems`, k: "Coding pattern", h: `/problems?pattern=${encodeURIComponent(p.name)}` })),
    ...careerGuides.map((g) => ({ t: g.title, k: "Getting Hired", h: `/getting-hired/${g.slug}`, x: g.description })),
    ...questionSets.flatMap((s) => [...new Set(s.questions.map((q) => q.group))].map((g) => ({ t: g, k: `${s.title} · group`, h: `/questions/${s.slug}?group=${encodeURIComponent(g).replace(/%20/g, "+")}` }))),
    ...questionSets.flatMap((s) => s.questions.map((q, i) => ({ t: q.question, k: s.title, h: `/questions/${s.slug}#q${i + 1}` }))),
    ...problems.map((p) => ({ t: p.name, k: `Problem · ${p.pattern} · ${p.difficulty}`, h: p.url })),
    ...[...featuredResources, ...questionSets.flatMap((s) => s.resources)]
      .filter((r, i, all) => all.findIndex((o) => o.url === r.url) === i)
      .map((r) => ({ t: r.title, k: "Resource", h: r.url, x: r.note })),
  ];
  return Response.json(items);
}
