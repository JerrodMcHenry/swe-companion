import type { CareerGuide, CareerListing } from "./types";
import { getTopic } from "./topics";
import engineeringProjects from "./career-guides/engineering-projects";

// Every published career guide. To publish a guide, add its file in content/career-guides/,
// list it here, and give its entry below a slug instead of a description.
export const careerGuides: CareerGuide[] = [engineeringProjects];

// What the Getting Hired page lists, in order. Published entries take their description from the guide.
export const careerListings: CareerListing[] = [
  { title: "Career Strategy", description: "Choosing target roles and companies, and planning your path to them." },
  {
    title: "Job Description Gap Analysis",
    description: "Reading a job description, separating required from preferred, and deciding whether to apply now or close a gap first.",
  },
  { title: "Resume", description: "Presenting your experience and projects clearly for engineering roles." },
  { title: "GitHub & Portfolio", description: "Making your code and projects easy for employers to evaluate." },
  { title: "Engineering Projects", slug: "engineering-projects" },
  { title: "LinkedIn & Personal Brand", description: "Presenting your profile and work professionally online." },
  { title: "Networking & Referrals", description: "Building professional relationships and asking for referrals." },
  { title: "Job Applications", description: "Finding suitable openings and applying effectively." },
  { title: "Recruiter Screens", description: "Preparing for the first conversation with a recruiter." },
  {
    title: "Interview Failure Recovery",
    description: "Diagnosing what went wrong after an unsuccessful interview and returning to the right unit, without restarting.",
  },
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
