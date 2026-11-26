"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { readSavedPath } from "./saved-path";
import { sections } from "./sections";

// Client component because it highlights the current section and reopens the learner's saved apprenticeship.
// A topic opened from an apprenticeship (?path=...) counts as part of My Apprenticeship.
function NavView({ inPath }: { inPath: boolean }) {
  const pathname = usePathname();
  const [myHref, setMyHref] = useState("/apprenticeship");
  useEffect(() => {
    const saved = readSavedPath();
    setMyHref(saved ? `/apprenticeship/for/${saved.target}/${saved.role}` : "/apprenticeship");
  }, [pathname]);

  const current = (href: string) => {
    if (href === "/apprenticeship") return pathname === "/" || pathname.startsWith("/apprenticeship/for") || pathname === "/apprenticeship" || inPath;
    if (href === "/library") return !inPath && (pathname.startsWith("/library") || pathname.startsWith("/interview-prep") || (pathname.startsWith("/apprenticeship/") && !pathname.startsWith("/apprenticeship/for")));
    return pathname.startsWith(href);
  };

  return (
    <nav aria-label="Primary" className="main">
      {sections.map((section) => (
        <Link
          key={section.href}
          href={section.href === "/apprenticeship" ? myHref : section.href}
          aria-current={current(section.href) ? "page" : undefined}
          className={current(section.href) ? "on" : undefined}
        >
          <span className="label-long">{section.title}</span>
          <span className="label-short">{section.shortTitle}</span>
        </Link>
      ))}
    </nav>
  );
}

function NavWithParams() {
  return <NavView inPath={useSearchParams().has("path")} />;
}

export default function Nav() {
  return (
    <Suspense fallback={<NavView inPath={false} />}>
      <NavWithParams />
    </Suspense>
  );
}
