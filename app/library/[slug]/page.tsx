import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPhase } from "@/content/curriculum";
import { allRoadmaps, itemReason, pathKey, topicSequence } from "@/content/roadmap";
import { getTopic, topics } from "@/content/topics";
import { targetName } from "../../targets";
import { Bullets, Crumbs, ExternalLink, firstSentence } from "../../ui";
import { PathCard, PathCrumbs, PathPager, PathPractice, TopicTabs, type PathContext, type TopicLink } from "../topic-path";

// Only slugs listed in content/topics.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopic((await params).slug);
  return topic ? { title: topic.title, description: firstSentence(topic.overview) } : {};
}

const link = (slug?: string): TopicLink | undefined => (slug ? { slug, title: getTopic(slug)!.title } : undefined);

// For every apprenticeship that includes this topic: its depth, reason, selected practice and previous/next topics.
function pathContexts(slug: string) {
  const contexts: Record<string, PathContext> = {};
  for (const roadmap of allRoadmaps()) {
    const { target, role } = roadmap;
    const sequence = topicSequence(roadmap);
    const index = sequence.findIndex((entry) => entry.slug === slug);
    const placed =
      index >= 0
        ? { item: sequence[index].item, stage: sequence[index].stage }
        : roadmap.stages.flatMap((stage) => stage.items.filter((item) => item.slug === slug).map((item) => ({ item, stage: stage.index })))[0];
    const base = `/apprenticeship/for/${target.slug}/${role.slug}`;
    const parallel = roadmap.parallel.find((item) => item.slug === slug);
    if (!placed && parallel) {
      // Started from day one, alongside the stages: no previous/next within the sequence.
      contexts[pathKey(target, role)] = {
        name: targetName(target.slug, target.title),
        pathHref: base,
        stageTitle: "In parallel, from day one",
        stageHref: base,
        depth: parallel.depth,
        priority: parallel.priority,
        track: parallel.track,
        reason: itemReason(parallel),
        selected: parallel.exercises ?? [],
      };
      continue;
    }
    if (!placed) continue;
    const { item, stage } = placed;
    contexts[pathKey(target, role)] = {
      name: targetName(target.slug, target.title),
      pathHref: base,
      stageTitle: roadmap.stages[stage].title,
      stageHref: `${base}/stage/${stage + 1}`,
      depth: item.depth,
      priority: item.priority,
      track: item.track,
      reason: itemReason(item),
      unit: item.phase ? getPhase(item.phase)!.title : undefined,
      selected: item.slug === slug && !item.phase ? (item.exercises ?? []) : [],
      previous: index > 0 ? link(sequence[index - 1].slug) : undefined,
      next: index >= 0 ? link(sequence[index + 1]?.slug) : undefined,
    };
  }
  return contexts;
}

export default async function TopicPage({ params }: Props) {
  const topic = getTopic((await params).slug);
  if (!topic) notFound();
  const phase = getPhase(topic.phase)!; // Existence is checked at build time in curriculum.ts.
  const contexts = pathContexts(topic.slug);

  // Without an apprenticeship, previous/next follow the unit's order.
  const unitSlugs = (phase.topics ?? []).flatMap((item) => ("slug" in item ? [item.slug] : []));
  const position = unitSlugs.indexOf(topic.slug);

  const labels = [
    "Learn",
    `Resources (${topic.resources.length})`,
    `Interview Q&A (${topic.interviewQuestions.length})`,
    `Practice (${topic.exercises.length})`,
    "Ready?",
  ];

  return (
    <article className="narrow">
      <PathCrumbs
        contexts={contexts}
        fallback={
          <Crumbs
            items={[
              { label: "Knowledge Library", href: "/library" },
              { label: phase.title, href: `/apprenticeship/${phase.slug}` },
            ]}
          />
        }
      />
      <h1 className="title">{topic.title}</h1>
      <p className="lead" style={{ fontSize: 17.5 }}>
        {firstSentence(topic.overview)}
      </p>
      <PathCard contexts={contexts} />

      <TopicTabs labels={labels}>
        <div>
          {topic.overview.length > firstSentence(topic.overview).length && (
            <p className="body2" style={{ marginTop: 0 }}>
              {topic.overview.slice(firstSentence(topic.overview).length).trim()}
            </p>
          )}
          <h3>Why it matters</h3>
          <p className="body2">{topic.whyItMatters}</p>
          <h3>What to learn</h3>
          <Bullets items={topic.objectives} />
          <h3>Depth</h3>
          <p className="body2">{topic.depth}</p>
          <p className="small muted">Prerequisites: {topic.prerequisites.length ? topic.prerequisites.join(" · ") : "none"}</p>
        </div>

        <div>
          {topic.resources.map((resource, index) => (
            <div key={resource.url} className="card res">
              <div className={index === 0 ? "tag primary" : "tag"}>
                {index === 0 ? "Start here" : "Alternative or reference"} · {resource.type}
              </div>
              <div style={{ marginTop: 4, fontSize: 16.5 }}>
                <ExternalLink href={resource.url}>{resource.title}</ExternalLink>
              </div>
              <div className="xs muted">
                {resource.provider}
                {resource.verifiedOn && ` · Verified ${resource.verifiedOn}`}
              </div>
              <p className="small body2" style={{ margin: "8px 0 0" }}>
                {resource.instructions}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="small muted" style={{ marginTop: 0 }}>
            Answer aloud before opening each one.
          </p>
          {topic.interviewQuestions.map((item) =>
            typeof item === "string" ? (
              <div key={item} className="card qa" style={{ padding: "14px 18px", marginTop: 10 }}>
                {item}
              </div>
            ) : (
              <details key={item.question} className="card qa" style={{ marginTop: 10 }}>
                <summary>{item.question}</summary>
                <div className="a">
                  <p style={{ marginTop: 0 }}>{item.answer}</p>
                  {item.code && (
                    <pre>
                      <code>{item.code}</code>
                    </pre>
                  )}
                  {item.followUps && item.followUps.length > 0 && (
                    <div className="small">
                      <b>Follow-ups:</b> {item.followUps.join(" · ")}
                    </div>
                  )}
                </div>
              </details>
            ),
          )}
        </div>

        <div>
          <PathPractice contexts={contexts} titles={topic.exercises.map((exercise) => exercise.title)}>
            {topic.exercises.map((exercise) => (
              <div key={exercise.title}>
                {exercise.url ? <ExternalLink href={exercise.url}>{exercise.title}</ExternalLink> : <b>{exercise.title}</b>}
                {exercise.note && (
                  <div className="small muted" style={{ marginTop: 4 }}>
                    {exercise.note}
                  </div>
                )}
              </div>
            ))}
          </PathPractice>
        </div>

        <div>
          <h3>You are ready to move on when</h3>
          <Bullets items={topic.mastery} />
          {topic.mistakes && topic.mistakes.length > 0 && (
            <>
              <h3>Common mistakes</h3>
              <Bullets items={topic.mistakes} />
            </>
          )}
          {topic.deprioritize && topic.deprioritize.length > 0 && (
            <>
              <h3>Skip for now</h3>
              <Bullets items={topic.deprioritize} />
            </>
          )}
        </div>
      </TopicTabs>

      <PathPager contexts={contexts} previous={link(unitSlugs[position - 1])} next={link(unitSlugs[position + 1])} />
    </article>
  );
}
