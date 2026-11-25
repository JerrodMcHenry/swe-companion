import type { GuideCategory, GuideListing, InterviewGuide } from "./types";
import { getTopic } from "./topics";
import codingAlgorithms from "./interview-guides/coding-algorithms";

// Every published guide. To publish a guide, add its file in content/interview-guides/,
// list it here, and replace its { planned } entry below with { slug }.
export const guides: InterviewGuide[] = [codingAlgorithms];

// What the Interview Preparation page lists, in order, for each category.
export const guideListings: Record<GuideCategory, GuideListing[]> = {
  Company: [
    { planned: "Google" },
    { planned: "Amazon" },
    { planned: "Meta" },
    { planned: "Apple" },
    { planned: "Netflix" },
    { planned: "Microsoft" },
    { planned: "Startups" },
    { planned: "Enterprise" },
  ],
  Role: [
    { planned: "Software Engineer" },
    { planned: "Backend Engineer" },
    { planned: "Full-Stack Engineer" },
    { planned: "AI Engineer" },
    { planned: "Solutions Engineer" },
    { planned: "Forward Deployed Engineer" },
  ],
  "Interview type": [
    { slug: "coding-algorithms" },
    { planned: "Object-Oriented Design" },
    { planned: "System Design" },
    { planned: "SQL & Databases" },
    { planned: "Technical Knowledge" },
    { planned: "Take-Home Assignments" },
    { planned: "Portfolio & Project Discussions" },
    { planned: "Behavioral Interviews" },
  ],
};

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

// Build-time checks for internal references. Any failure stops the build.
const guideSlugs = new Set<string>();
for (const guide of guides) {
  if (guideSlugs.has(guide.slug)) throw new Error(`Duplicate guide slug: ${guide.slug}`);
  guideSlugs.add(guide.slug);
  for (const item of guide.studyTopics ?? []) {
    if (item.slug && !getTopic(item.slug)) {
      throw new Error(`Guide "${guide.slug}" references unknown topic: ${item.slug}`);
    }
  }
}
const listedGuides = new Set<string>();
for (const listings of Object.values(guideListings)) {
  for (const item of listings) {
    if (!("slug" in item)) continue;
    if (!guideSlugs.has(item.slug)) throw new Error(`Unknown guide listed: ${item.slug}`);
    listedGuides.add(item.slug);
  }
}
for (const guide of guides) {
  if (!listedGuides.has(guide.slug)) throw new Error(`Guide not listed on the Interview Preparation page: ${guide.slug}`);
}
