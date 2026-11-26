// The three primary sections. Used by the navigation and section pages.
export const sections = [
  {
    href: "/apprenticeship",
    title: "My Apprenticeship",
    shortTitle: "My Path",
    description: "Your customized apprenticeship: what to study for your target employer and role, in what order and how deeply.",
  },
  {
    href: "/library",
    title: "Knowledge Library",
    shortTitle: "Library",
    description: "Every topic and interview-format guide, independent of your target.",
  },
  {
    href: "/getting-hired",
    title: "Getting Hired",
    shortTitle: "Getting Hired",
    description: "Targeting, resumes, applications and recovering from rejections. Start these early — alongside your apprenticeship, not after it.",
  },
];

export function getSection(href: string) {
  const section = sections.find((s) => s.href === href);
  if (!section) throw new Error(`Unknown section: ${href}`);
  return section;
}
