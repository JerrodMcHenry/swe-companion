import type { Metadata } from "next";
import Link from "next/link";
import { careerListings, getCareerGuide } from "@/content/career-guides";
import { getSection } from "../sections";

const section = getSection("/getting-hired");

export const metadata: Metadata = { title: section.title };

export default function GettingHiredPage() {
  return (
    <>
      <h1 className="title">{section.title}</h1>
      <p className="lead">{section.description}</p>
      <div className="grid g2" style={{ marginTop: 28 }}>
        {careerListings.map((item) => {
          if (!("slug" in item)) {
            return (
              <div key={item.title} className="card lib" style={{ padding: 20, boxShadow: "none" }}>
                <div className="chips">
                  <h2 className="h3 muted">{item.title}</h2>
                  <span className="chip soon">Planned</span>
                </div>
                <div className="d">{item.description}</div>
              </div>
            );
          }
          const guide = getCareerGuide(item.slug)!; // Existence is checked at build time in career-guides.ts.
          return (
            <Link key={item.title} className="card lib" href={`/getting-hired/${guide.slug}`} style={{ padding: 20 }}>
              <h2 className="h3">{item.title}</h2>
              <div className="d">{guide.description}</div>
            </Link>
          );
        })}
      </div>
      <p className="small body2" style={{ marginTop: 24 }}>
        Preparing for behavioral interviews? See{" "}
        <Link className="link" href="/interview-prep/behavioral-interviews">
          Behavioral Interviews
        </Link>
        .
      </p>
    </>
  );
}
