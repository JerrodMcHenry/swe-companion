"use client";

import Link from "next/link";
import { useState } from "react";

export type LibraryGroup = {
  title: string;
  href?: string;
  items: { href: string; title: string; text: string; terms: string[] }[];
};

// Client component because results update as the learner types: case-insensitive substring search over titles and keywords.
export default function LibrarySearch({ groups }: { groups: LibraryGroup[] }) {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const matches = (item: LibraryGroup["items"][number]) =>
    !normalized || [item.title, ...item.terms].some((text) => text.toLowerCase().includes(normalized));
  const results = groups.map((group) => ({ ...group, items: group.items.filter(matches) })).filter((group) => group.items.length > 0);
  const count = results.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <>
      <label htmlFor="library-search" className="sr-only">
        Search the Knowledge Library
      </label>
      <input
        id="library-search"
        className="search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search topics, e.g. hash map, merge conflict, GIL…"
        autoComplete="off"
      />
      <p aria-live="polite" className="small muted" style={{ minHeight: 22, margin: "8px 0 0" }}>
        {normalized && `${count} ${count === 1 ? "result" : "results"}`}
      </p>
      {results.length === 0 ? (
        <div className="card" style={{ padding: 20, marginTop: 16 }}>
          <b>Nothing matches “{query.trim()}”.</b>
          <p className="small muted" style={{ margin: "4px 0 0" }}>
            Try a broader term or a different spelling.
          </p>
        </div>
      ) : (
        results.map((group) => (
          <section key={group.title} className="libgroup">
            <h2 className="eyebrow">{group.href ? <Link href={group.href}>{group.title}</Link> : group.title}</h2>
            <div className="libgrid">
              {group.items.map((item) => (
                <Link key={item.href} className="card lib" href={item.href}>
                  <b>{item.title}</b>
                  <div className="d">{item.text}</div>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}
