// The four primary sections. Used by the navigation, home page and section pages.
export const sections = [
  {
    href: "/apprenticeship",
    title: "Apprenticeship",
    description: "A sequential software engineering curriculum, organized into phases, topics and learning objectives.",
  },
  {
    href: "/library",
    title: "Knowledge Library",
    description: "A searchable reference of technical concepts, curated resources, exercises and interview questions.",
  },
  {
    href: "/interview-prep",
    title: "Interview Preparation",
    description: "Preparation guides by company, role, experience level and interview type.",
  },
  {
    href: "/getting-hired",
    title: "Getting Hired",
    description: "Resumes, portfolios, GitHub, networking, referrals, applications and behavioral interviews.",
  },
];

export function getSection(href: string) {
  const section = sections.find((s) => s.href === href);
  if (!section) throw new Error(`Unknown section: ${href}`);
  return section;
}
