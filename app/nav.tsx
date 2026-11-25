"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "./sections";

// Client component only because highlighting the current section needs the URL.
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {sections.map((section) => {
          const isCurrent = pathname.startsWith(section.href);
          return (
            <li key={section.href}>
              <Link
                href={section.href}
                aria-current={isCurrent ? "page" : undefined}
                className={
                  isCurrent
                    ? "font-semibold text-stone-900 underline underline-offset-4"
                    : "text-stone-600 hover:text-stone-900"
                }
              >
                {section.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
