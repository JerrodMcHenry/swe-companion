import Link from "next/link";
import { getGuideByPath } from "@/content/interview-guides";
import { getTopic } from "@/content/topics";
import type { InterviewGuide } from "@/content/types";
import { Bullets, Collapsible, Crumbs, DepthChip, ExternalLink, PriorityChip } from "../ui";

// An interview-format or role guide, as a Library reference page. Every section of the guide is kept, in collapsible cards.
export default function GuideView({ guide }: { guide: InterviewGuide }) {
  const topics = (guide.studyTopics ?? []).filter((item) => item.priority !== "Defer");
  const deferred = (guide.studyTopics ?? []).filter((item) => item.priority === "Defer");
  return (
    <div className="narrow">
      <Crumbs items={[{ label: "Knowledge Library", href: "/library" }, { label: guide.category === "Role" ? "Roles" : "Interview formats" }]} />
      <h1 className="title">{guide.title}</h1>
      <p className="lead" style={{ fontSize: 17 }}>
        {guide.overview}
      </p>
      {guide.category === "Role" && (
        <p className="small body2" style={{ marginTop: 12 }}>
          Preparing for a specific employer?{" "}
          <Link className="link" href="/apprenticeship">
            Choose your target
          </Link>{" "}
          to get this role combined with that employer&apos;s apprenticeship.
        </p>
      )}

      {topics.length > 0 && (
        <>
          <h2 className="h2" style={{ marginTop: 30 }}>
            What to study
          </h2>
          {topics.map((item) => {
            const topic = item.slug ? getTopic(item.slug) : undefined;
            const inner = (
              <div className="grow">
                <div className="chips">
                  <h3 className="h3">{item.title}</h3>
                  <DepthChip depth={item.depth} />
                  <PriorityChip priority={item.priority} />
                </div>
                {item.reason && <div className="why">{item.reason}</div>}
                {item.exercises && item.exercises.length > 0 && <div className="why">Selected practice: {item.exercises.join(" · ")}</div>}
              </div>
            );
            return topic ? (
              <Link key={item.slug ?? item.title} className="card trow" href={`/library/${topic.slug}`}>
                {inner}
                <span className="arrow" aria-hidden="true">
                  ›
                </span>
              </Link>
            ) : (
              <div key={item.title} className="card trow static">
                {inner}
              </div>
            );
          })}
        </>
      )}

      <div style={{ marginTop: 22 }}>
        {guide.competencies && guide.competencies.length > 0 && (
          <Collapsible title="What it assesses">
            <Bullets items={guide.competencies} />
          </Collapsible>
        )}
        {guide.process && guide.process.length > 0 && (
          <Collapsible title="How the format works">
            <Bullets items={guide.process} />
          </Collapsible>
        )}
        {(guide.guidance ?? []).map((block) => (
          <Collapsible key={block.heading} title={block.heading}>
            <Bullets items={block.items} />
          </Collapsible>
        ))}
        {guide.sequence && guide.sequence.length > 0 && (
          <Collapsible title="How to prepare">
            <ol>
              {guide.sequence.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Collapsible>
        )}
        {guide.practice && guide.practice.length > 0 && (
          <Collapsible title="Practice">
            <ul>
              {guide.practice.map((exercise) => (
                <li key={exercise.title}>
                  {exercise.url ? <ExternalLink href={exercise.url}>{exercise.title}</ExternalLink> : <b>{exercise.title}</b>}
                  {exercise.note && <div className="small">{exercise.note}</div>}
                </li>
              ))}
            </ul>
          </Collapsible>
        )}
        {guide.resources && guide.resources.length > 0 && (
          <Collapsible title="Resources">
            <ul>
              {guide.resources.map((resource) => (
                <li key={resource.url}>
                  <ExternalLink href={resource.url}>{resource.title}</ExternalLink>
                  <div className="small">{resource.instructions}</div>
                </li>
              ))}
            </ul>
          </Collapsible>
        )}
        {guide.readiness && guide.readiness.length > 0 && (
          <Collapsible title="Ready when" open>
            <Bullets items={guide.readiness} />
          </Collapsible>
        )}
        {deferred.length > 0 && (
          <Collapsible title="Skip for now">
            <ul>
              {deferred.map((item) => (
                <li key={item.slug ?? item.title}>
                  <b>{item.title}</b>
                  {item.reason && ` — ${item.reason}`}
                </li>
              ))}
            </ul>
          </Collapsible>
        )}
        {guide.relatedGuides && guide.relatedGuides.length > 0 && (
          <Collapsible title="Related guides">
            <ul>
              {guide.relatedGuides.map((href) => {
                const related = getGuideByPath(href)!; // Checked at build time in interview-guides.ts.
                return (
                  <li key={href}>
                    <Link className="link" href={href}>
                      {related.title}
                    </Link>{" "}
                    — {related.description}
                  </li>
                );
              })}
            </ul>
          </Collapsible>
        )}
        {guide.sources && guide.sources.length > 0 && (
          <Collapsible title={`Sources (${guide.sources.length})`}>
            <ul>
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <ExternalLink href={source.url}>{source.title}</ExternalLink>
                </li>
              ))}
            </ul>
          </Collapsible>
        )}
      </div>
    </div>
  );
}
