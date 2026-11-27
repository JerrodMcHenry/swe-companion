import type { Metadata } from "next";
import Link from "next/link";
import { companies } from "@/content/companies";
import { patterns, problems } from "@/content/problems";
import ProblemTable from "./problem-table";

export const metadata: Metadata = { title: "Coding problems", description: "Coding interview problems by company, pattern and difficulty, with explanation videos." };

export default function ProblemsPage() {
  const employers = companies.filter((c) => problems.some((p) => p.employers?.[c.slug])).map((c) => ({ slug: c.slug, name: c.name }));
  return (
    <div className="narrow">
      <h1 style={{ marginTop: 32 }}>Coding problems</h1>
      <p className="small muted" style={{ marginTop: 6 }}>
        Solve on LeetCode (free account), then watch the explanation. Concept questions:{" "}
        <Link className="link" href="/questions/data-structures-algorithms">
          Data Structures &amp; Algorithms
        </Link>
        .
      </p>
      <ProblemTable problems={problems} patterns={patterns} employers={employers} />
    </div>
  );
}
