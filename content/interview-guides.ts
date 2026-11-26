import type { GuideCategory, GuideListing, InterviewGuide } from "./types";
import { getTopic } from "./topics";
import codingAlgorithms from "./interview-guides/coding-algorithms";
import behavioralInterviews from "./interview-guides/behavioral-interviews";

// Every published guide. To publish a guide, add its file in content/interview-guides/,
// list it here, and replace its { planned } entry below with { slug }.
export const guides: InterviewGuide[] = [codingAlgorithms, behavioralInterviews];

// What the Interview Preparation page lists, in order, for each category.
export const guideListings: Record<GuideCategory, GuideListing[]> = {
  Company: [
    { planned: "Google" },
    { planned: "Amazon" },
    { planned: "Meta" },
    { planned: "Apple" },
    { planned: "Netflix" },
    { planned: "Microsoft" },
    { planned: "Startups & Growth-Stage" },
    { planned: "Enterprise Programs" },
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
    { slug: "behavioral-interviews" },
    { planned: "Debugging & Code Review" },
    { planned: "AI-Assisted Coding" },
    { planned: "Practical Coding Assessments" },
    { planned: "OOP & Low-Level Design" },
    { planned: "Project Deep Dives" },
    { planned: "Take-Home Assignments" },
    { planned: "Basic System Design (conditional)" },
    { planned: "SQL & Database Assessments (conditional)" },
    { planned: "Rapid-Fire Technical Questions (conditional)" },
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
