import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { topicHref, type RoadmapItem } from "@/content/roadmap";
import type { InterviewGuide } from "@/content/types";
import { getTopic } from "@/content/topics";
import { Bullets, Crumbs, cleanTitle, StageNumber } from "../../../../ui";
import RememberPath from "../../remember-path";
import { resolvePath, targetRoleParams } from "../../path-data";

export const dynamicParams = false;
export const generateStaticParams = targetRoleParams;

type Props = { params: Promise<{ target: string; role: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { target, role } = await params;
  const path = resolvePath(target, role);
  return path ? { title: `${path.name} · ${path.roleTitle} apprenticeship`, description: path.target.description } : {};
}

// Where a parallel item leads: its topic within this apprenticeship, or the guide that teaches it.
function parallelHref(item: RoadmapItem, target: InterviewGuide, role: InterviewGuide) {
  if (item.slug && getTopic(item.slug)) return topicHref(item.slug, target, role);
  if (/behavioral/i.test(item.title)) return "/interview-prep/behavioral-interviews";
  return "/getting-hired/engineering-projects";
}

export default async function ApprenticeshipPathPage({ params }: Props) {
  const { target: targetSlug, role: roleSlug } = await params;
  const path = resolvePath(targetSlug, roleSlug);
  if (!path) notFound();
  const { target, role, roadmap, name, roleTitle } = path;
  const base = `/apprenticeship/for/${target.slug}/${role.slug}`;

  const header = (
    <>
      <RememberPath target={target.slug} role={role.slug} />
      <Crumbs items={[{ label: "My Apprenticeship", href: "/apprenticeship" }, { label: name }]} />
      <div className="rhead">
        <div>
          <div className="eyebrow">Your apprenticeship · {roleTitle}</div>
          <h1 className="title" style={{ marginTop: 8 }}>
            {name}
          </h1>
        </div>
        <Link className="btn ghost" href="/apprenticeship">
          Change employer or role
        </Link>
      </div>
      {target.atAGlance && (
        <div className="glance">
          {target.atAGlance.map((fact) => (
            <div key={fact.label}>
              <b>{fact.label}</b>
              {fact.value}
            </div>
          ))}
        </div>
      )}
    </>
  );

  // Targets without a roadmap (Netflix) show their eligibility guidance instead of an invented interview path.
  if (!roadmap) {
    const eligibility = target.guidance?.find((block) => block.heading === "Eligibility");
    return (
      <>
        {header}
        <div className="narrow">
          {eligibility && (
            <div className="notice">
              <h2 className="h3">Check eligibility before preparing</h2>
              <Bullets items={eligibility.items.slice(0, 3)} />
            </div>
          )}
          <p style={{ marginTop: 22 }}>
            There is no reliable new-graduate interview process to build a {name}-specific apprenticeship from. If you find a posting whose real
            requirements you meet, prepare with the general path and the posting itself.
          </p>
          <div className="chips" style={{ marginTop: 18 }}>
            <Link className="btn" href={`/apprenticeship/for/other-employer/${role.slug}`}>
              Use the Other Employer path →
            </Link>
            <Link className="btn ghost" href={`/apprenticeship/for/${target.slug}/about`}>
              About {name}
            </Link>
          </div>
        </div>
      </>
    );
  }

  const first = roadmap.stages[0].items[0];
  const firstSlug = first.unitTopics?.[0] ?? first.slug!; // Checked at build time in roadmap.ts.

  return (
    <>
      {header}
      <div className="layout">
        <div>
          <Link className="card start" href={topicHref(firstSlug, target, role)}>
            <div>
              <div className="k">Start here</div>
              <div className="h3">{getTopic(firstSlug)!.title}</div>
              <div style={{ opacity: 0.85, fontSize: 14.5 }}>
                Stage 1 · {roadmap.stages[0].title}. Already confident? Check “skip if” in each stage and move on.
              </div>
            </div>
            <span className="go">Start →</span>
          </Link>
          <div>
            {roadmap.stages.map((stage) => (
              <Link key={stage.index} className="card stage" href={`${base}/stage/${stage.index + 1}`}>
                <StageNumber tone={stage.tone}>{stage.index + 1}</StageNumber>
                <div className="body">
                  <h2 className="h3">{stage.title}</h2>
                  <div className="goal">{stage.goal}</div>
                  {stage.items.length > 0 && (
                    <div className="peek">
                      {stage.items
                        .filter((item) => item.priority !== "Optional")
                        .slice(0, 5)
                        .map((item) => (item.phase ? "Programming Fluency" : cleanTitle(item.slug ? getTopic(item.slug)!.title : item.title)))
                        .join(" · ")}
                    </div>
                  )}
                </div>
                <span className="arrow" aria-hidden="true">
                  ›
                </span>
              </Link>
            ))}
          </div>
          {roadmap.skip.length > 0 && (
            <details className="card" style={{ marginTop: 18 }}>
              <summary className="sumrow">Skip for now ({roadmap.skip.length})</summary>
              <div>
                {roadmap.skip.map((item) => (
                  <p key={item.key} className="small" style={{ margin: "8px 0 0" }}>
                    <b>{cleanTitle(item.slug ? getTopic(item.slug)!.title : item.title)}</b> —{" "}
                    <span className="muted">{item.reason ?? "Not needed for this target now."}</span>
                  </p>
                ))}
                <p className="xs muted" style={{ marginTop: 10 }}>
                  Everything else stays available in the <Link className="link" href="/library">Knowledge Library</Link>.
                </p>
              </div>
            </details>
          )}
        </div>

        <aside className="side grid">
          <div className="card">
            <h2 className="h3">In parallel, from day one</h2>
            <div className="par" style={{ marginTop: 8 }}>
              {roadmap.parallel.map((item) => (
                <Link key={item.key} href={parallelHref(item, target, role)}>
                  <span>{item.slug && getTopic(item.slug) ? getTopic(item.slug)!.title : cleanTitle(item.title)}</span>
                  <span className="muted">›</span>
                </Link>
              ))}
              <Link href="/getting-hired">
                <span>Apply when eligible and reasonably prepared</span>
                <span className="muted">›</span>
              </Link>
            </div>
          </div>
          {target.readiness && (
            <div className="card">
              <h2 className="h3">Ready to apply when…</h2>
              <div className="small body2">
                <Bullets items={target.readiness} />
              </div>
            </div>
          )}
          <Link className="card" href={`/apprenticeship/for/${target.slug}/about`}>
            <h2 className="h3">About this employer</h2>
            <div className="small muted" style={{ marginTop: 4 }}>
              Eligibility, interview process, AI rules, evidence and sources.
            </div>
            <div className="link small" style={{ marginTop: 8 }}>
              Open ›
            </div>
          </Link>
        </aside>
      </div>
    </>
  );
}
