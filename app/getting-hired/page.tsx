import type { Metadata } from "next";
import Link from "next/link";
import { careerGuides } from "@/content/career-guides";

export const metadata: Metadata = { title: "Getting Hired", description: "Resumes, applications, job descriptions, projects, behavioral interviews and recovering from rejection." };

export default function GettingHired() {
  return (
    <div className="narrow">
      <h1 style={{ marginTop: 32 }}>Getting Hired</h1>
      <div className="list" style={{ marginTop: 24 }}>
        {careerGuides.map((g) => (
          <Link key={g.slug} className="row" href={`/getting-hired/${g.slug}`}>
            <div className="grow">
              <div>{g.title}</div>
              <div className="why">{g.description}</div>
            </div>
            <span className="go" aria-hidden="true">›</span>
          </Link>
        ))}
        <Link className="row" href="/questions/behavioral">
          <div className="grow">
            <div>Behavioral interviews</div>
            <div className="why">How to structure answers, build a story bank and prepare for the common questions.</div>
          </div>
          <span className="go" aria-hidden="true">›</span>
        </Link>
      </div>
    </div>
  );
}
