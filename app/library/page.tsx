import type { Metadata } from "next";
import { getPhase } from "@/content/curriculum";
import { topics } from "@/content/topics";
import { getSection } from "../sections";
import LibrarySearch, { type LibraryTopic } from "./library-search";

const section = getSection("/library");

export const metadata: Metadata = { title: section.title };

// Only the fields the search needs are sent to the browser, sorted by title.
const libraryTopics: LibraryTopic[] = topics
  .map((topic) => ({
    slug: topic.slug,
    title: topic.title,
    category: topic.category,
    overview: topic.overview,
    phaseTitle: getPhase(topic.phase)!.title, // Existence is checked at build time in curriculum.ts.
    keywords: topic.keywords ?? [],
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

export default function LibraryPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">{section.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{section.description}</p>
      <LibrarySearch topics={libraryTopics} />
    </>
  );
}
