import type { Metadata } from "next";
import Link from "next/link";
import { questionSets } from "@/content/questions";

export const metadata: Metadata = { title: "Interview questions", description: "Technical interview questions with concise answers, by topic." };

export default function QuestionsIndex() {
  return (
    <div className="narrow">
      <h1 style={{ marginTop: 32 }}>Interview questions</h1>
      <div className="list" style={{ marginTop: 24 }}>
        {questionSets.map((s) => (
          <Link key={s.slug} className="row" href={`/questions/${s.slug}`}>
            <div className="grow">
              <div>{s.title}</div>
              <div className="why">{s.description}</div>
            </div>
            <span className="xs faint">{s.questions.length}</span>
            <span className="go" aria-hidden="true">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
