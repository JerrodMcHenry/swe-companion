import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhase } from "@/content/curriculum";
import { topicHref } from "@/content/roadmap";
import { getTopic } from "@/content/topics";
import { Bullets, Crumbs, DepthChip, firstSentence } from "../../../../../../ui";
import { resolvePath, targetRoleParams } from "../../../../path-data";

// A whole unit inside an apprenticeship (StudyTopic.phase), e.g. Programming Fluency, with path-aware topic links.
export const dynamicParams = false;

export function generateStaticParams() {
  return targetRoleParams().flatMap((params) => {
    const roadmap = resolvePath(params.target, params.role)!.roadmap;
    const units = new Set((roadmap?.stages ?? []).flatMap((stage) => stage.items.flatMap((item) => (item.phase ? [item.phase] : []))));
    return [...units].map((phase) => ({ ...params, phase }));
  });
}

type Props = { params: Promise<{ target: string; role: string; phase: string }> };

async function load(params: Props["params"]) {
  const { target, role, phase } = await params;
  const path = resolvePath(target, role);
  const unit = getPhase(phase);
  const stage = path?.roadmap?.stages.find((s) => s.items.some((item) => item.phase === phase));
  const item = stage?.items.find((i) => i.phase === phase);
  return path && unit && stage && item ? { ...path, unit, stage, item } : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await load(params);
  return data ? { title: `${data.unit.title} · ${data.name}` } : {};
}

export default async function UnitInPathPage({ params }: Props) {
  const data = await load(params);
  if (!data) notFound();
  const { target, role, name, unit, stage, item } = data;
  const base = `/apprenticeship/for/${target.slug}/${role.slug}`;
  return (
    <div className="narrow">
      <Crumbs
        items={[
          { label: "My Apprenticeship", href: "/apprenticeship" },
          { label: name, href: base },
          { label: `Stage ${stage.index + 1}`, href: `${base}/stage/${stage.index + 1}` },
          { label: unit.title },
        ]}
      />
      <h1 className="title">{unit.title}</h1>
      <div className="chips" style={{ marginTop: 10 }}>
        <DepthChip depth={item.depth} suffix=" depth" />
        {item.reason && <span className="small muted">{item.reason}</span>}
      </div>
      {unit.readiness && (
        <div className="skipbox">
          <b>Skip if you can already:</b>
          <Bullets items={unit.readiness} />
        </div>
      )}
      <div style={{ marginTop: 22 }}>
        {(unit.topics ?? []).map((entry, index) => {
          if (!("slug" in entry)) {
            return (
              <div key={entry.planned} className="card trow static">
                <div className="i">·</div>
                <div className="grow">
                  <h2 className="h3 muted">{entry.planned}</h2>
                  <div className="xs muted">Planned</div>
                </div>
              </div>
            );
          }
          const topic = getTopic(entry.slug)!;
          return (
            <Link key={topic.slug} className="card trow" href={topicHref(topic.slug, target, role)}>
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
    </div>
  );
}
