import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careerGuides, getCareerGuide } from "@/content/career-guides";
import { getGuideByPath } from "@/content/interview-guides";
import { getTopic } from "@/content/topics";
import { Bullets, Collapsible, Crumbs, ExternalLink } from "../../ui";

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

const has = <T,>(items: T[] | undefined): items is T[] => items !== undefined && items.length > 0;

export default async function CareerGuidePage({ params }: Props) {
  const guide = getCareerGuide((await params).slug);
  if (!guide) notFound();

  return (
    <article className="narrow">
      <Crumbs items={[{ label: "Getting Hired", href: "/getting-hired" }, { label: guide.title }]} />
      <h1 className="title">{guide.title}</h1>
      <p className="lead" style={{ fontSize: 17 }}>
        {guide.overview}
      </p>
      <div style={{ marginTop: 22 }}>
        {guide.guidance?.map((block, index) =>
          block.items.length > 0 ? (
            <Collapsible key={block.heading} title={block.heading} open={index === 0}>
              <Bullets items={block.items} />
            </Collapsible>
          ) : null,
        )}
        {has(guide.recommendations) && (
          <Collapsible title="Practical recommendations">
            <Bullets items={guide.recommendations} />
          </Collapsible>
        )}
        {has(guide.interviewQuestions) && (
          <Collapsible title="Questions to prepare for">
            <Bullets items={guide.interviewQuestions} />
          </Collapsible>
        )}
        {has(guide.mistakes) && (
          <Collapsible title="Common mistakes">
            <Bullets items={guide.mistakes} />
          </Collapsible>
        )}
        {has(guide.readiness) && (
          <Collapsible title="Ready when">
            <Bullets items={guide.readiness} />
          </Collapsible>
        )}
        {has(guide.resources) && (
          <Collapsible title="Resources">
            <ul>
              {guide.resources.map((resource) => (
                <li key={resource.url}>
                  <ExternalLink href={resource.url}>{resource.title}</ExternalLink>
                  <div className="small">
                    {resource.provider} · {resource.type}
                    {resource.verifiedOn && ` · Verified ${resource.verifiedOn}`}
                  </div>
                  <div className="small">{resource.instructions}</div>
                </li>
              ))}
            </ul>
          </Collapsible>
        )}
      </div>
      {(has(guide.relatedTopics) || has(guide.relatedGuides)) && (
        <>
          <h2 className="h3" style={{ marginTop: 28 }}>
            Related
          </h2>
          <div className="guides">
            {(guide.relatedTopics ?? []).map((slug) => (
              <Link key={slug} href={`/library/${slug}`}>
                {getTopic(slug)!.title /* Checked at build time in career-guides.ts. */}
              </Link>
            ))}
            {(guide.relatedGuides ?? []).map((href) => (
              <Link key={href} href={href}>
                {getGuideByPath(href)!.title /* Checked at build time in interview-guides.ts. */}
              </Link>
            ))}
          </div>
        </>
      )}
    </article>
  );
}
