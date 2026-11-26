import type { Metadata } from "next";
import { phases } from "@/content/curriculum";
import { guideListings, getGuide } from "@/content/interview-guides";
import { getTopic } from "@/content/topics";
import { getSection } from "../sections";
import { firstSentence } from "../ui";
import LibrarySearch, { type LibraryGroup } from "./library-search";

const section = getSection("/library");

export const metadata: Metadata = { title: section.title };

// Topics grouped by unit in curriculum order, then the interview-format guides. Only searchable fields go to the browser.
const groups: LibraryGroup[] = [
  ...phases
    .map((phase) => ({
      title: phase.title,
      href: `/apprenticeship/${phase.slug}`,
      items: (phase.topics ?? []).flatMap((item) => {
        if (!("slug" in item)) return [];
        const topic = getTopic(item.slug)!; // Checked at build time in curriculum.ts.
        return [{ href: `/library/${topic.slug}`, title: topic.title, text: firstSentence(topic.overview), terms: [topic.category, phase.title, ...(topic.keywords ?? [])] }];
      }),
    }))
    .filter((group) => group.items.length > 0),
  {
    title: "Interview format guides",
    items: guideListings["Interview type"].flatMap((item) => {
      if (!("slug" in item)) return [];
      const guide = getGuide(item.slug)!; // Checked at build time in interview-guides.ts.
      return [{ href: `/interview-prep/${guide.slug}`, title: guide.title, text: guide.description, terms: ["interview", "format", "guide"] }];
    }),
  },
];

export default function LibraryPage() {
  return (
    <>
      <h1 className="title">{section.title}</h1>
      <p className="lead">{section.description} Your apprenticeship links here in the right order.</p>
      <LibrarySearch groups={groups} />
    </>
  );
}
