import type { CareerGuide } from "./types";
import { getQuestionSet } from "./questions";
import jobDescriptionGapAnalysis from "./career-guides/job-description-gap-analysis";
import resume from "./career-guides/resume";
import engineeringProjects from "./career-guides/engineering-projects";
import applicationStrategy from "./career-guides/application-strategy";
import interviewFailureRecovery from "./career-guides/interview-failure-recovery";

// Every Getting Hired guide, in the order the Getting Hired page lists them.
export const careerGuides: CareerGuide[] = [jobDescriptionGapAnalysis, resume, engineeringProjects, applicationStrategy, interviewFailureRecovery];

export function getCareerGuide(slug: string) {
  return careerGuides.find((guide) => guide.slug === slug);
}

// Build-time checks for internal references.
const slugs = new Set<string>();
for (const guide of careerGuides) {
  if (slugs.has(guide.slug)) throw new Error(`Duplicate career guide slug: ${guide.slug}`);
  slugs.add(guide.slug);
  for (const slug of guide.relatedQuestions ?? []) if (!getQuestionSet(slug)) throw new Error(`${guide.slug} references unknown question set ${slug}`);
}
for (const guide of careerGuides)
  for (const path of guide.relatedGuides ?? []) {
    const slug = path.replace(/^\/getting-hired\//, "");
    if (slug === path || !slugs.has(slug)) throw new Error(`${guide.slug} references unknown guide ${path}`);
  }
