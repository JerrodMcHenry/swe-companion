import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careerGuides, getCareerGuide } from "@/content/career-guides";
import { getQuestionSet } from "@/content/questions";

export const dynamicParams = false;
export const generateStaticParams = () => careerGuides.map((g) => ({ slug: g.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getCareerGuide((await params).slug);
  return guide ? { title: guide.title, description: guide.description } : {};
}

function Block({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section style={{ marginTop: 26 }}>
      <h2>{title}</h2>
      <ul className="bul muted" style={{ marginTop: 8 }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function CareerGuidePage({ params }: Props) {
  const guide = getCareerGuide((await params).slug);
  if (!guide) notFound();
  // Worked examples are long; they stay available but collapsed.
  const steps = guide.guidance?.filter((b) => !b.heading.startsWith("Example")) ?? [];
  const examples = guide.guidance?.filter((b) => b.heading.startsWith("Example")) ?? [];
  return (
    <div className="narrow">
      <div className="crumb">
        <Link href="/getting-hired">Getting Hired</Link>
      </div>
      <h1 style={{ marginTop: 8 }}>{guide.title}</h1>
      <p className="muted" style={{ marginTop: 6 }}>
        {guide.description}
      </p>
      {steps.map((b) => (
        <Block key={b.heading} title={b.heading} items={b.items} />
      ))}
      <Block title="Do" items={guide.recommendations} />
      <Block title="Questions to prepare for" items={guide.interviewQuestions} />
      <Block title="Avoid" items={guide.mistakes} />
      {examples.length > 0 && (
        <details className="more">
          <summary>Worked examples</summary>
          <div>
            {examples.map((b) => (
              <div key={b.heading}>
                <h3>{b.heading}</h3>
                <ul className="bul small muted">
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      )}
      {guide.resources && guide.resources.length > 0 && (
        <div className="rlist" style={{ marginTop: 26 }}>
          {guide.resources.map((r) => (
            <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
              <span className="t">{r.title} ↗</span> <span className="d">— {r.note}</span>
            </a>
          ))}
        </div>
      )}
      {(guide.relatedQuestions?.length ?? 0) > 0 && (
        <p className="small" style={{ marginTop: 18 }}>
          <span className="muted">Related questions: </span>
          {guide.relatedQuestions!.map((slug, i) => (
            <span key={slug}>
              {i > 0 && <span className="faint"> · </span>}
              <Link className="link" href={`/questions/${slug}`}>
                {getQuestionSet(slug)!.title}
              </Link>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
