import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careerGuides, getCareerGuide } from "@/content/career-guides";
import { getTopic } from "@/content/topics";
import { getGuideByPath } from "@/content/interview-guides";

// Only slugs listed in content/career-guides.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return careerGuides.map((guide) => ({ slug: guide.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getCareerGuide((await params).slug);
  return guide ? { title: guide.title, description: guide.description } : {};
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-stone-200 pt-8">
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

function hasItems<T>(items: T[] | undefined): items is T[] {
  return items !== undefined && items.length > 0;
}

const linkClass = "font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600";

export default async function CareerGuidePage({ params }: Props) {
  const guide = getCareerGuide((await params).slug);
  if (!guide) notFound();

  return (
    <article className="max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
        <Link href="/getting-hired" className="hover:text-stone-900 hover:underline">
          Getting Hired
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{guide.title}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{guide.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">{guide.overview}</p>
      </header>

      <div className="mt-10 space-y-8">
        {guide.guidance?.map((block) =>
          block.items.length > 0 ? (
            <Section key={block.heading} title={block.heading}>
              <List items={block.items} />
            </Section>
          ) : null,
        )}

        {hasItems(guide.recommendations) && (
          <Section title="Practical recommendations">
            <List items={guide.recommendations} />
          </Section>
        )}

        {hasItems(guide.interviewQuestions) && (
          <Section title="Questions to prepare for">
            <List items={guide.interviewQuestions} />
          </Section>
        )}

        {hasItems(guide.mistakes) && (
          <Section title="Common mistakes">
            <List items={guide.mistakes} />
          </Section>
        )}

        {hasItems(guide.readiness) && (
          <Section title="Readiness criteria">
            <List items={guide.readiness} />
          </Section>
        )}

        {hasItems(guide.resources) && (
          <Section title="Learning resources">
            <ol className="space-y-5">
              {guide.resources.map((resource) => (
                <li key={resource.url}>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {resource.title}
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
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

        {hasItems(guide.relatedTopics) && (
          <Section title="Related topics">
            <ul className="list-disc space-y-1.5 pl-5">
              {guide.relatedTopics.map((slug) => {
                const topic = getTopic(slug)!; // Existence is checked at build time in career-guides.ts.
                return (
                  <li key={slug}>
                    <Link href={`/library/${slug}`} className={linkClass}>
                      {topic.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Section>
        )}
        {hasItems(guide.relatedGuides) && (
          <Section title="Related guides">
            <ul className="list-disc space-y-1.5 pl-5">
              {guide.relatedGuides.map((href) => {
                const related = getGuideByPath(href)!; // Existence is checked at build time in interview-guides.ts.
                return (
                  <li key={href}>
                    <Link href={href} className={linkClass}>
                      {related.title}
                    </Link>
                    <span className="text-stone-600"> — {related.description}</span>
                  </li>
                );
              })}
            </ul>
          </Section>
        )}
      </div>
    </article>
  );
}
