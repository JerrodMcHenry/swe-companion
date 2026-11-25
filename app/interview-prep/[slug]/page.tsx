import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/content/interview-guides";
import { getTopic } from "@/content/topics";

// Only slugs listed in content/interview-guides.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  return guide ? { title: guide.title, description: guide.description } : {};
}

const priorities = ["Essential", "Important", "Optional"] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-stone-200 pt-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 leading-relaxed text-stone-700">{children}</div>
    </section>
  );
}

function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`${ordered ? "list-decimal pl-6" : "list-disc pl-5"} space-y-1.5`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600"
    >
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function hasItems<T>(items: T[] | undefined): items is T[] {
  return items !== undefined && items.length > 0;
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  return (
    <article className="max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
        <Link href="/interview-prep" className="hover:text-stone-900 hover:underline">
          Interview Preparation
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{guide.title}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{guide.title}</h1>
        <p className="mt-2 text-sm text-stone-600">
          {guide.category}
          {guide.level && ` · ${guide.level}`}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">{guide.overview}</p>
      </header>

      <div className="mt-10 space-y-8">
        {hasItems(guide.process) && (
          <Section title="Interview process">
            <List items={guide.process} ordered />
          </Section>
        )}

        {hasItems(guide.competencies) && (
          <Section title="Required competencies">
            <List items={guide.competencies} />
          </Section>
        )}

        {hasItems(guide.studyTopics) && (
          <Section title="Study priorities">
            <div className="space-y-6">
              {priorities.map((priority) => {
                const items = guide.studyTopics!.filter((item) => item.priority === priority);
                if (items.length === 0) return null;
                return (
                  <div key={priority}>
                    <h3 className="font-semibold text-stone-900">{priority}</h3>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      {items.map((item) => {
                        const topic = item.slug ? getTopic(item.slug) : undefined;
                        return (
                          <li key={item.title}>
                            {item.title}
                            {topic && (
                              <>
                                {" "}
                                <span className="text-stone-600">— related topic: </span>
                                <Link
                                  href={`/library/${topic.slug}`}
                                  className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600"
                                >
                                  {topic.title}
                                </Link>
                              </>
                            )}
                            {item.reason && <p className="mt-0.5 text-sm text-stone-600">{item.reason}</p>}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {hasItems(guide.sequence) && (
          <Section title="Preparation sequence">
            <List items={guide.sequence} ordered />
          </Section>
        )}

        {hasItems(guide.practice) && (
          <Section title="Practice recommendations">
            <ul className="list-disc space-y-1.5 pl-5">
              {guide.practice.map((exercise) => (
                <li key={exercise.title}>
                  {exercise.url ? <ExternalLink href={exercise.url}>{exercise.title}</ExternalLink> : exercise.title}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {hasItems(guide.resources) && (
          <Section title="Learning resources">
            <ol className="space-y-5">
              {guide.resources.map((resource) => (
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
        )}

        {hasItems(guide.readiness) && (
          <Section title="Readiness criteria">
            <List items={guide.readiness} />
          </Section>
        )}

        {(hasItems(guide.sources) || guide.verifiedOn) && (
          <Section title="Sources">
            {hasItems(guide.sources) && (
              <ul className="list-disc space-y-1.5 pl-5">
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <ExternalLink href={source.url}>{source.title}</ExternalLink>
                  </li>
                ))}
              </ul>
            )}
            {guide.verifiedOn && <p className="mt-3 text-sm text-stone-600">Last verified {guide.verifiedOn}.</p>}
          </Section>
        )}
      </div>
    </article>
  );
}
