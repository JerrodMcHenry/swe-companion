import Link from "next/link";
import type { Tone } from "@/content/roadmap";

// Small presentation helpers shared by the pages.

export function ExternalLink({ href, children, className = "link" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Crumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumb">
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 && <span aria-hidden="true"> › </span>}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function DepthChip({ depth, suffix = "" }: { depth?: string; suffix?: string }) {
  return depth ? <span className="chip depth">{depth + suffix}</span> : null;
}

// Priority is shown only where it helps a decision: Essential stands out, Optional is marked; Important is the default.
export function PriorityChip({ priority }: { priority?: string }) {
  if (priority === "Essential") return <span className="chip key">Essential</span>;
  if (priority === "Optional") return <span className="chip opt">Optional</span>;
  return null;
}

export function StageNumber({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return <div className={`num tone-${tone}`}>{children}</div>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

// A collapsible card section, used for secondary detail.
export function Collapsible({ title, open, children }: { title: string; open?: boolean; children: React.ReactNode }) {
  return (
    <details className="card" open={open}>
      <summary className="sumrow">{title}</summary>
      <div>{children}</div>
    </details>
  );
}

export const isForthcoming = (title: string) => /forthcoming/i.test(title);
export const cleanTitle = (title: string) => title.replace(/\s*\(forthcoming[^)]*\)/i, "");
export const firstSentence = (text: string) => text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;
