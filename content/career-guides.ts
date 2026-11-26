import type { CareerGuide, CareerListing } from "./types";
import { getTopic } from "./topics";
import engineeringProjects from "./career-guides/engineering-projects";
import resume from "./career-guides/resume";
import jobDescriptionGapAnalysis from "./career-guides/job-description-gap-analysis";
import applicationStrategy from "./career-guides/application-strategy";
import interviewFailureRecovery from "./career-guides/interview-failure-recovery";

// Every published career guide. To publish a guide, add its file in content/career-guides/,
// list it here, and give its entry below a slug instead of a description.
export const careerGuides: CareerGuide[] = [
  engineeringProjects,
  resume,
  jobDescriptionGapAnalysis,
  applicationStrategy,
  interviewFailureRecovery,
];

// What the Getting Hired page lists, in order. Published entries take their description from the guide.
export const careerListings: CareerListing[] = [
  { title: "Job Description Gap Analysis", slug: "job-description-gap-analysis" },
  { title: "Resume Preparation", slug: "resume" },
  { title: "GitHub & Portfolio", description: "Making your code and projects easy for employers to evaluate." },
  { title: "Engineering Projects", slug: "engineering-projects" },
  { title: "LinkedIn & Personal Brand", description: "Presenting your profile and work professionally online." },
  { title: "Networking & Referrals", description: "Building professional relationships and asking for referrals." },
  { title: "Job Application Strategy", slug: "application-strategy" },
  { title: "Recruiter Screens", description: "Preparing for the first conversation with a recruiter." },
  { title: "Interview Failure Recovery", slug: "interview-failure-recovery" },
  { title: "Offer Negotiation", description: "Evaluating offers and negotiating compensation." },
];

export function getCareerGuide(slug: string) {
  return careerGuides.find((guide) => guide.slug === slug);
}

// Build-time checks for internal references. Any failure stops the build.
const careerSlugs = new Set<string>();
for (const guide of careerGuides) {
  if (careerSlugs.has(guide.slug)) throw new Error(`Duplicate career guide slug: ${guide.slug}`);
  careerSlugs.add(guide.slug);
  for (const slug of guide.relatedTopics ?? []) {
    if (!getTopic(slug)) throw new Error(`Career guide "${guide.slug}" references unknown topic: ${slug}`);
  }
}
const listedCareerGuides = new Set<string>();
for (const item of careerListings) {
  if (!("slug" in item)) continue;
  if (!careerSlugs.has(item.slug)) throw new Error(`Unknown career guide listed: ${item.slug}`);
  listedCareerGuides.add(item.slug);
}
for (const guide of careerGuides) {
  if (!listedCareerGuides.has(guide.slug)) throw new Error(`Career guide not listed on the Getting Hired page: ${guide.slug}`);
}
