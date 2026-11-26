import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhase, phases } from "@/content/curriculum";
import { getTopic } from "@/content/topics";
import { getSection } from "../../sections";
import { Bullets, Collapsible, Crumbs, firstSentence } from "../../ui";

// A unit of the curriculum as a Library reference: its topics, readiness and stopping point.
// Learners follow their customized apprenticeship; this page is for browsing a unit on its own.
export const dynamicParams = false;

export function generateStaticParams() {
  return phases.map((phase) => ({ phase: phase.slug }));
}

type Props = { params: Promise<{ phase: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const phase = getPhase((await params).phase);
  return phase ? { title: phase.title, description: phase.description } : {};
}

export default async function UnitPage({ params }: Props) {
  const phase = getPhase((await params).phase);
  if (!phase) notFound();

  return (
    <div className="narrow">
      <Crumbs items={[{ label: "Knowledge Library", href: "/library" }, { label: `Unit ${phase.number}` }]} />
      <div className="eyebrow">
        Unit {phase.number} · {phase.stage}
      </div>
      <h1 className="title" style={{ marginTop: 8 }}>
        {phase.title}
      </h1>
      <p className="lead">{phase.description}</p>
      <p className="small body2" style={{ marginTop: 12 }}>
        For the order and depth your target employer needs, open{" "}
        <Link className="link" href="/apprenticeship">
          My Apprenticeship
        </Link>
        .
      </p>

      {phase.readiness && phase.readiness.length > 0 && (
        <div className="skipbox">
          <b>Skip this unit if you can already:</b>
          <Bullets items={phase.readiness} />
        </div>
      )}

      {phase.topics && phase.topics.length > 0 ? (
        <div style={{ marginTop: 22 }}>
          {phase.topics.map((item, index) => {
            if (!("slug" in item)) {
              return (
                <div key={item.planned} className="card trow static">
                  <div className="i">·</div>
                  <div className="grow">
                    <h2 className="h3 muted">{item.planned}</h2>
                    <div className="xs muted">Planned</div>
                  </div>
                </div>
              );
            }
            const topic = getTopic(item.slug)!; // Existence is checked at build time in curriculum.ts.
            return (
              <Link key={topic.slug} className="card trow" href={`/library/${topic.slug}`}>
                <div className="i">{index + 1}</div>
                <div className="grow">
                  <h2 className="h3">{topic.title}</h2>
                  <div className="p">{firstSentence(topic.overview)}</div>
                </div>
                <span className="arrow" aria-hidden="true">
                  ›
                </span>
              </Link>
            );
          })}
        </div>
      ) : phase.sectionHref ? (
        <p style={{ marginTop: 22 }}>
          This unit is covered in{" "}
          <Link className="link" href={phase.sectionHref}>
            {getSection(phase.sectionHref).title}
          </Link>
          .
        </p>
      ) : (
        <p className="muted" style={{ marginTop: 22 }}>
          Detailed content for this unit is forthcoming.
        </p>
      )}

      {phase.mastery && phase.mastery.length > 0 && (
        <div style={{ marginTop: 22 }}>
          <Collapsible title="Stopping point" open>
            <Bullets items={phase.mastery} />
          </Collapsible>
        </div>
      )}
    </div>
  );
}
