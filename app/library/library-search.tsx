"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export type LibraryTopic = {
  slug: string;
  title: string;
  category: string;
  overview: string;
  phaseTitle: string;
  keywords: string[];
};

// Client component because results update as the user types. Matching is plain
// case-insensitive substring search over title, category, phase title and keywords.
export default function LibrarySearch({ topics }: { topics: LibraryTopic[] }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const normalized = query.trim().toLowerCase();

  const results = normalized
    ? topics.filter((topic) =>
        [topic.title, topic.category, topic.phaseTitle, ...topic.keywords].some((text) =>
          text.toLowerCase().includes(normalized),
        ),
      )
    : topics;

  const categories = [...new Set(results.map((topic) => topic.category))].sort();

  return (
    <div className="mt-10 max-w-3xl">
      <label htmlFor="library-search" className="block text-sm font-medium">
        Search topics
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="library-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by topic, category or keyword"
          autoComplete="off"
          className="w-full rounded-md border border-stone-300 px-3 py-2 placeholder:text-stone-500 focus:border-stone-900 focus:outline-2 focus:outline-offset-1 focus:outline-stone-900"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus(); // The button disappears, so return focus to the input.
            }}
            className="shrink-0 rounded-md border border-stone-300 px-4 py-2 text-sm font-medium hover:border-stone-500 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            Clear
          </button>
        )}
      </div>

      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-stone-600">
        {normalized && `${results.length} ${results.length === 1 ? "topic" : "topics"} found`}
      </p>

      {results.length === 0 ? (
        <div className="mt-6 border-y border-stone-200 py-8">
          <p className="font-medium">No topics match “{query.trim()}”.</p>
          <p className="mt-1 text-stone-600">
            Try a broader term or a different spelling. The library grows as new topics are published.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-10">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="text-sm font-semibold tracking-wide text-stone-600 uppercase">{category}</h2>
              <ul className="mt-3 divide-y divide-stone-200 border-y border-stone-200">
                {results
                  .filter((topic) => topic.category === category)
                  .map((topic) => (
                    <li key={topic.slug}>
                      <Link href={`/library/${topic.slug}`} className="block py-4 hover:bg-stone-50">
                        <span className="font-medium">{topic.title}</span>
                        <span className="mt-1 block text-stone-600">{topic.overview}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
