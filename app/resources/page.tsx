import type { Metadata } from "next";
import Link from "next/link";
import { companies } from "@/content/companies";
import { questionSets } from "@/content/questions";
import { featuredResources } from "@/content/resources";
import type { Resource } from "@/content/types";

export const metadata: Metadata = { title: "Resource Library", description: "The best free software engineering interview preparation resources, by topic." };

function Section({ id, title, resources, href }: { id: string; title: string; resources: Resource[]; href?: string }) {
  if (resources.length === 0) return null;
  return (
    <section id={id} style={{ marginTop: 30 }}>
      <div className="sechead" style={{ marginBottom: 0 }}>
        <h2>{title}</h2>
        {href && <Link href={href}>Questions →</Link>}
      </div>
      <div className="rlist" style={{ marginTop: 8 }}>
        {resources.map((r) => (
          <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
            <span className="t">{r.title} ↗</span> <span className="d">— {r.note}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  // Each resource appears once: hubs first, then by topic, then official employer pages.
  const seen = new Set(featuredResources.map((r) => r.url));
  const once = (list: Resource[]) => list.filter((r) => !seen.has(r.url) && seen.add(r.url));
  const topics = questionSets.map((s) => ({ id: s.slug, title: s.title, href: `/questions/${s.slug}`, resources: once(s.resources) }));
  const official = once(companies.flatMap((c) => c.officialResources.map((r) => ({ ...r, title: `${c.name} — ${r.title}` }))));
  return (
    <div className="narrow">
      <h1 style={{ marginTop: 32 }}>Resource Library</h1>
      <nav className="filters" aria-label="Jump to topic" style={{ marginTop: 16 }}>
        <a className="chip" href="#hubs">
          Practice &amp; hubs
        </a>
        {topics
          .filter((t) => t.resources.length > 0)
          .map((t) => (
            <a key={t.id} className="chip" href={`#${t.id}`}>
              {t.title}
            </a>
          ))}
        <a className="chip" href="#official">
          Official company prep
        </a>
      </nav>
      <Section id="hubs" title="Practice platforms & hubs" resources={featuredResources} />
      {topics.map((t) => (
        <Section key={t.id} {...t} />
      ))}
      <Section id="official" title="Official company preparation" resources={official} />
    </div>
  );
}
