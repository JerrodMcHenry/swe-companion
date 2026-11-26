import type { Metadata } from "next";
import Link from "next/link";
import { getGuide, guideListings } from "@/content/interview-guides";

export const metadata: Metadata = { title: "Interview preparation" };

// Old section landing page: interview preparation now lives inside each apprenticeship; format guides are in the Library.
export default function InterviewPrepPage() {
  const formats = guideListings["Interview type"].flatMap((item) => ("slug" in item ? [getGuide(item.slug)!] : []));
  return (
    <div className="narrow">
      <div className="eyebrow">Interview preparation</div>
      <h1 className="title" style={{ marginTop: 8 }}>
        Now part of your apprenticeship
      </h1>
      <p className="lead">Choose your employer and role, and your interview preparation is built into one customized learning path.</p>
      <p style={{ marginTop: 22 }}>
        <Link className="btn" href="/apprenticeship">
          Choose your target →
        </Link>
      </p>
      <h2 className="eyebrow" style={{ marginTop: 36 }}>
        Interview format guides
      </h2>
      <div className="guides">
        {formats.map((guide) => (
          <Link key={guide.slug} href={`/interview-prep/${guide.slug}`}>
            {guide.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
