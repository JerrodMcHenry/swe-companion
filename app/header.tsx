"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { SearchIcon } from "./ui";

// Client component: highlights the current section, switches the theme and runs global search.

export const sections = [
  { href: "/", title: "Interview Prep", short: "Interview Prep", icon: "M4 6h16M4 12h16M4 18h10" },
  { href: "/resources", title: "Resource Library", short: "Resources", icon: "M5 4h10l4 4v12H5zM9 12h6M9 16h6" },
  { href: "/getting-hired", title: "Getting Hired", short: "Getting Hired", icon: "M3 7h18v13H3zM9 7V5h6v2" },
];

function useSection() {
  const pathname = usePathname();
  return (href: string) => (href === "/" ? !sections.slice(1).some((s) => pathname.startsWith(s.href)) : pathname.startsWith(href));
}

export function Nav() {
  const isCurrent = useSection();
  return (
    <nav aria-label="Primary" className="main">
      {sections.map((s) => (
        <Link key={s.href} href={s.href} className={isCurrent(s.href) ? "on" : undefined} aria-current={isCurrent(s.href) ? "page" : undefined}>
          {s.title}
        </Link>
      ))}
    </nav>
  );
}

export function MobileTabs() {
  const isCurrent = useSection();
  return (
    <nav aria-label="Primary (mobile)" className="tabs-mobile">
      {sections.map((s) => (
        <Link key={s.href} href={s.href} className={isCurrent(s.href) ? "on" : undefined} aria-current={isCurrent(s.href) ? "page" : undefined}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d={s.icon} />
          </svg>
          {s.short}
        </Link>
      ))}
    </nav>
  );
}

export function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("swe-companion-theme", next);
  };
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label="Switch between light and dark mode">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}

export const openSearch = () => window.dispatchEvent(new Event("open-search"));

// The header button. Hidden on the homepage, which has its own search field.
export function SearchButton() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <button type="button" className="kbtn" onClick={openSearch} aria-label="Search">
      <SearchIcon />
      <span>Search questions, problems…</span>
      <kbd>⌘K</kbd>
    </button>
  );
}

type Item = { t: string; k: string; h: string; x?: string };

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<Item[] | null>(null);
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const opener = useRef<Element | null>(null);

  useEffect(() => {
    const show = () => {
      opener.current = document.activeElement;
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        show();
      }
    };
    window.addEventListener("open-search", show);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-search", show);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    if (!index)
      fetch("/search-index.json")
        .then((r) => r.json())
        .then(setIndex)
        .catch(() => setIndex([]));
  }, [open, index]);

  const results = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!index || words.length === 0) return [];
    return index.filter((i) => words.every((w) => `${i.t} ${i.k} ${i.x ?? ""}`.toLowerCase().includes(w))).slice(0, 12);
  }, [index, query]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActive(0);
    (opener.current as HTMLElement | null)?.focus?.();
  };

  if (!open) return null;
  const go = (item: Item) => {
    close();
    if (item.h.startsWith("http")) window.open(item.h, "_blank", "noopener");
    else window.location.assign(item.h);
  };

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Search">
        <input
          ref={input}
          value={query}
          placeholder="Search companies, questions, problems and resources"
          aria-label="Search"
          aria-controls="search-results"
          aria-activedescendant={results[active] ? `sr-${active}` : undefined}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
            else if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            } else if (e.key === "Enter" && results[active]) go(results[active]);
          }}
        />
        {query.trim() && (
          <ul id="search-results" role="listbox" aria-label="Results">
            {results.map((item, i) => (
              <li key={`${item.h}-${i}`}>
                <a
                  id={`sr-${i}`}
                  role="option"
                  aria-selected={i === active}
                  href={item.h}
                  target={item.h.startsWith("http") ? "_blank" : undefined}
                  rel={item.h.startsWith("http") ? "noreferrer" : undefined}
                  onMouseEnter={() => setActive(i)}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item);
                  }}
                >
                  <span className="t">{item.t}</span>
                  <span className="xs faint">{item.k}</span>
                </a>
              </li>
            ))}
            {index && results.length === 0 && <li className="empty">No results for “{query}”.</li>}
            {!index && <li className="empty">Loading…</li>}
          </ul>
        )}
      </div>
    </div>
  );
}
