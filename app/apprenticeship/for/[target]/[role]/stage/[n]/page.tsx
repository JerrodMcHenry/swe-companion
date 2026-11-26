import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide } from "@/content/interview-guides";
import { itemReason, topicHref, type RoadmapItem } from "@/content/roadmap";
import { getTopic } from "@/content/topics";
import { Bullets, cleanTitle, Crumbs, DepthChip, ExternalLink, firstSentence, isForthcoming, PriorityChip, StageNumber } from "../../../../../../ui";
import RememberPath from "../../../../remember-path";
import { resolvePath, targetRoleParams } from "../../../../path-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return targetRoleParams().flatMap((params) => {
    const stages = resolvePath(params.target, params.role)!.roadmap?.stages ?? [];
    return stages.map((stage) => ({ ...params, n: String(stage.index + 1) }));
  });
}

type Props = { params: Promise<{ target: string; role: string; n: string }> };

async function load(params: Props["params"]) {
  const { target, role, n } = await params;
  const path = resolvePath(target, role);
  const stage = path?.roadmap?.stages[Number(n) - 1];
  return path && stage ? { ...path, stage, roadmap: path.roadmap! } : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await load(params);
  return data ? { title: `${data.stage.title} · ${data.name}` } : {};
}

export default async function StagePage({ params }: Props) {
  const data = await load(params);
  if (!data) notFound();
  const { target, role, name, stage, roadmap } = data;
  const base = `/apprenticeship/for/${target.slug}/${role.slug}`;
  const main = stage.items.filter((item) => item.priority !== "Optional");
  const optional = stage.items.filter((item) => item.priority === "Optional");
  const previous = roadmap.stages[stage.index - 1];
  const next = roadmap.stages[stage.index + 1];

  const row = (item: RoadmapItem, label: string) => {
    const topic = item.slug && !item.phase ? getTopic(item.slug) : undefined;
    const href = item.phase ? `${base}/unit/${item.phase}` : topic ? topicHref(topic.slug, target, role) : undefined;
    const title = item.phase ? "Programming Fluency" : topic ? topic.title : cleanTitle(item.title);
    const purpose = item.phase
      ? `${item.unitTopics!.length} short topics, from variables to dictionaries, functions, mutability and sorting.`
      : topic
        ? firstSentence(topic.overview)
        : isForthcoming(item.title)
          ? "A dedicated guide is forthcoming; the reason below says what to do for now."
          : undefined;
    const reason = itemReason(item);
    const inner = (
      <>
        <div className="i">{label}</div>
        <div className="grow">
          <div className="chips">
            <h3 className="h3">{title}</h3>
            <DepthChip depth={item.depth} />
            <PriorityChip priority={item.priority} />
            {isForthcoming(item.title) && <span className="chip soon">Forthcoming</span>}
            {item.track === "job" && stage.template !== "job" && <span className="chip">Needed on the job</span>}
          </div>
          {purpose && <div className="p">{purpose}</div>}
          {reason && (
            <div className="why">
              Why for {name}: {reason}
            </div>
          )}
        </div>
        {href && (
          <span className="arrow" aria-hidden="true">
            ›
          </span>
        )}
      </>
    );
    return href ? (
      <Link key={item.key} className="card trow" href={href}>
        {inner}
      </Link>
    ) : (
      <div key={item.key} className="card trow static">
        {inner}
      </div>
    );
  };

  return (
    <div className="narrow">
      <RememberPath target={target.slug} role={role.slug} />
      <Crumbs items={[{ label: "My Apprenticeship", href: "/apprenticeship" }, { label: name, href: base }, { label: `Stage ${stage.index + 1}` }]} />
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <StageNumber tone={stage.tone}>{stage.index + 1}</StageNumber>
        <h1 className="title">{stage.title}</h1>
      </div>
      <p className="lead">{stage.goal}</p>
      {stage.note && (
        <p className="small body2" style={{ marginTop: 10 }}>
          {stage.note}
        </p>
      )}
      <div className="skipbox">
        <b>Skip this stage if</b> {stage.skipIf}
      </div>

      <div style={{ marginTop: 22 }}>{main.map((item, index) => row(item, String(index + 1)))}</div>

      {stage.practice && (
        <>
          <h2 className="h2" style={{ marginTop: 30 }}>
            Practise for your interviews
          </h2>
          {roadmap.practice.map((exercise) => (
            <div key={exercise.title} className="card ex">
              {exercise.url ? <ExternalLink href={exercise.url}>{exercise.title}</ExternalLink> : <b>{exercise.title}</b>}
              {exercise.note && (
                <div className="small muted" style={{ marginTop: 4 }}>
                  {exercise.note}
                </div>
              )}
            </div>
          ))}
          {target.readiness && (
            <>
              <h3 className="h3" style={{ marginTop: 24 }}>
                Ready when
              </h3>
              <div className="body2">
                <Bullets items={target.readiness} />
              </div>
            </>
          )}
        </>
      )}

      {stage.guides.length > 0 && (
        <>
          <h3 className="h3" style={{ marginTop: 24 }}>
            Format guides
          </h3>
          <div className="guides">
            {stage.guides.map((slug) => (
              <Link key={slug} href={`/interview-prep/${slug}`}>
                {getGuide(slug)!.title}
              </Link>
            ))}
          </div>
        </>
      )}

      {optional.length > 0 && (
        <details className="card" style={{ marginTop: 18 }}>
          <summary className="sumrow">
            Optional for {name} ({optional.length})
          </summary>
          <div style={{ padding: "0 10px 10px" }}>
            <p className="small muted" style={{ margin: "0 4px 10px" }}>
              You can skip these. Study one only when the job posting, your recruiter or your project calls for it.
            </p>
            {optional.map((item) => row(item, "+"))}
          </div>
        </details>
      )}

      <nav aria-label="Stages" className="pager">
        {previous ? (
          <Link className="card" href={`${base}/stage/${previous.index + 1}`}>
            <div className="xs muted">← Previous stage</div>
            <b>{previous.title}</b>
          </Link>
        ) : (
          <Link className="card" href={base}>
            <div className="xs muted">← Back</div>
            <b>Your apprenticeship</b>
          </Link>
        )}
        {next ? (
          <Link className="card r" href={`${base}/stage/${next.index + 1}`}>
            <div className="xs muted">Next stage →</div>
            <b>{next.title}</b>
          </Link>
        ) : (
          <Link className="card r" href="/getting-hired">
            <div className="xs muted">Next →</div>
            <b>Getting Hired</b>
          </Link>
        )}
      </nav>
    </div>
  );
}
