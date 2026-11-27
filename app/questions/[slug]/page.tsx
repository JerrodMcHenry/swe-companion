import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuestionSet, questionSets } from "@/content/questions";
import QuestionList from "../question-list";

export const dynamicParams = false;
export const generateStaticParams = () => questionSets.map((s) => ({ slug: s.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const set = getQuestionSet((await params).slug);
  return set ? { title: `${set.title} interview questions`, description: set.description } : {};
}

export default async function QuestionSetPage({ params }: Props) {
  const set = getQuestionSet((await params).slug);
  if (!set) notFound();
  return (
    <div className="narrow">
      <h1 style={{ marginTop: 32 }}>{set.title} interview questions</h1>
      <div className="rlist">
        {set.resources.map((r) => (
          <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
            <span className="t">{r.title} ↗</span> <span className="d">— {r.note}</span>
          </a>
        ))}
        {set.slug === "data-structures-algorithms" && (
          <Link href="/problems">
            <span className="t">Coding problems by pattern →</span> <span className="d">— practise with video explanations.</span>
          </Link>
        )}
      </div>
      <QuestionList questions={set.questions} />
    </div>
  );
}
