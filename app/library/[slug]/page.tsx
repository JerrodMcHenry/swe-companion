import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhase } from "@/content/curriculum";
import { getTopic, topics } from "@/content/topics";

// Only slugs listed in content/topics.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopic((await params).slug);
  return topic ? { title: topic.title, description: topic.overview } : {};
}

function Section({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-stone-200 pt-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 leading-relaxed text-stone-700">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600">
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default async function TopicPage({ params }: Props) {
  const topic = getTopic((await params).slug);
  if (!topic) notFound();
  const phase = getPhase(topic.phase)!; // Existence is checked at build time in curriculum.ts.

  return (
    <article className="max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
        <Link href="/library" className="hover:text-stone-900 hover:underline">
          Knowledge Library
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{topic.title}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{topic.title}</h1>
        <p className="mt-2 text-sm text-stone-600">
          {topic.category} ·{" "}
          <Link href={`/apprenticeship/${phase.slug}`} className="hover:text-stone-900 hover:underline">
            {phase.title}
          </Link>
        </p>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">{topic.overview}</p>
        <p className="mt-4 text-sm text-stone-600">
          Already comfortable with this topic?{" "}
          <a href="#readiness" className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600">
            Check the readiness criteria
          </a>{" "}
          and skip to practice.
        </p>
      </header>

      <div className="mt-10 space-y-8">
        <Section title="Why it matters">
          <p>{topic.whyItMatters}</p>
        </Section>

        <Section title="Prerequisites">
          <List items={topic.prerequisites} />
        </Section>

        <Section title="What you need to learn">
          <List items={topic.objectives} />
        </Section>

        <Section title="Required knowledge depth">
          <p>{topic.depth}</p>
        </Section>

        <Section title="Best free learning resources">
          <ol className="space-y-5">
            {topic.resources.map((resource) => (
              <li key={resource.url}>
                <ExternalLink href={resource.url}>{resource.title}</ExternalLink>
                <p className="mt-1 text-sm text-stone-600">
                  {resource.provider} · {resource.type}
                  {resource.verifiedOn && ` · Verified ${resource.verifiedOn}`}
                </p>
                <p className="mt-1">{resource.instructions}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Practice exercises">
          <ul className="list-disc space-y-1.5 pl-5">
            {topic.exercises.map((exercise) => (
              <li key={exercise.title}>
                {exercise.url ? <ExternalLink href={exercise.url}>{exercise.title}</ExternalLink> : exercise.title}
                {exercise.note && <p className="mt-0.5 text-sm text-stone-600">{exercise.note}</p>}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Interview questions">
          <ul className="list-disc space-y-4 pl-5">
            {topic.interviewQuestions.map((item) =>
              typeof item === "string" ? (
                <li key={item}>{item}</li>
              ) : (
                <li key={item.question}>
                  <p className="font-medium text-stone-900">{item.question}</p>
                  <p className="mt-1">{item.answer}</p>
                  {item.code && (
                    <pre className="mt-2 overflow-x-auto rounded-md bg-stone-100 p-3 text-sm leading-relaxed text-stone-800">
                      <code>{item.code}</code>
                    </pre>
                  )}
                  {item.followUps && item.followUps.length > 0 && (
                    <div className="mt-2 text-sm">
                      <p className="text-stone-600">Follow-up questions:</p>
                      <ul className="mt-1 list-[circle] space-y-1 pl-5">
                        {item.followUps.map((followUp) => (
                          <li key={followUp}>{followUp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ),
            )}
          </ul>
        </Section>

        {topic.mistakes && topic.mistakes.length > 0 && (
          <Section title="Common mistakes">
            <List items={topic.mistakes} />
          </Section>
        )}

        <Section title="Readiness criteria" id="readiness">
          <List items={topic.mastery} />
        </Section>

        {topic.deprioritize && topic.deprioritize.length > 0 && (
          <Section title="What to deprioritize">
            <List items={topic.deprioritize} />
          </Section>
        )}
      </div>
    </article>
  );
}
