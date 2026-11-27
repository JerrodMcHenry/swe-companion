"use client";

import { openSearch } from "./header";
import { SearchIcon } from "./ui";

// The homepage search field: opens the same search dialog as ⌘K.
export default function HeroSearch() {
  return (
    <button type="button" className="hero-search" onClick={openSearch}>
      <SearchIcon size={18} />
      <span style={{ flex: 1 }}>Search a company, topic, question or problem</span>
      <kbd className="kbd">⌘K</kbd>
    </button>
  );
}
