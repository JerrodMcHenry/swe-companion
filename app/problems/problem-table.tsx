"use client";

import { useEffect, useState } from "react";
import type { Pattern, Problem, ProblemPriority } from "@/content/types";

type Filters = { company: string; pattern: string; difficulty: string };
const empty: Filters = { company: "", pattern: "", difficulty: "" };
const keys = Object.keys(empty) as (keyof Filters)[];
const rank: Record<ProblemPriority, number> = { Core: 0, Important: 1, Optional: 2 };

// Client component: company, pattern and difficulty filters, kept in the URL so a selection can be shared.
export default function ProblemTable({ problems, patterns, employers }: { problems: Problem[]; patterns: Pattern[]; employers: { slug: string; name: string }[] }) {
  const [f, setF] = useState<Filters>(empty);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setF(Object.fromEntries(keys.map((k) => [k, params.get(k) ?? ""])) as Filters);
  }, []);

  const update = (key: keyof Filters, value: string) => {
    const next = { ...f, [key]: value };
    setF(next);
    const url = new URL(window.location.href);
    for (const k of keys) {
      if (next[k]) url.searchParams.set(k, next[k]);
      else url.searchParams.delete(k);
    }
    window.history.replaceState(null, "", url);
  };

  // Preparation order: the employer's priority when one is selected, otherwise the general priority.
  const priorityOf = (p: Problem) => (f.company && p.employers?.[f.company]) || p.priority;
  const rows = problems
    .filter((p) => (f.company ? p.employers?.[f.company] : !p.role || f.pattern) && (!f.pattern || p.pattern === f.pattern) && (!f.difficulty || p.difficulty === f.difficulty))
    .map((p, i) => ({ p, i }))
    .sort((a, b) => rank[priorityOf(a.p)] - rank[priorityOf(b.p)] || a.i - b.i)
    .map(({ p }) => p);
  const pattern = patterns.find((p) => p.name === f.pattern);

  return (
    <>
      <div className="filters" style={{ marginTop: 20 }}>
        <select className="sel" aria-label="Company" value={f.company} onChange={(e) => update("company", e.target.value)}>
          <option value="">All companies</option>
          {employers.map((e) => (
            <option key={e.slug} value={e.slug}>
              {e.name}
            </option>
          ))}
        </select>
        <select className="sel" aria-label="Pattern" value={f.pattern} onChange={(e) => update("pattern", e.target.value)}>
          <option value="">All patterns</option>
          {patterns.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
        <div role="group" aria-label="Difficulty" style={{ display: "flex", gap: 6 }}>
          {["", "Easy", "Medium", "Hard"].map((d) => (
            <button key={d} type="button" className="chip" aria-pressed={f.difficulty === d} onClick={() => update("difficulty", d)}>
              {d || "Any"}
            </button>
          ))}
        </div>
      </div>

      {pattern && (
        <p className="small" style={{ margin: "4px 0 14px" }}>
          <span className="muted">Learn the pattern: </span>
          <a className="link" href={pattern.resource.url} target="_blank" rel="noreferrer">
            {pattern.resource.title} ↗
          </a>{" "}
          <span className="faint">— {pattern.resource.note}</span>
        </p>
      )}

      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th className="hide-m">Pattern</th>
              <th>Difficulty</th>
              <th>Explanation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.name}>
                <td>
                  <a className="p" href={p.url} target="_blank" rel="noreferrer">
                    {p.name} ↗
                  </a>
                  <span className="pat-m">{p.pattern}</span>
                </td>
                <td className="hide-m pat">{p.pattern}</td>
                <td>
                  <span className={`diff ${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
                </td>
                <td className="nw">
                  {p.explanation ? (
                    <a className="x" href={p.explanation.url} target="_blank" rel="noreferrer">
                      Video ↗
                    </a>
                  ) : (
                    <span className="xs faint">—</span>
                  )}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="muted">
                  No problems match.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="xs faint" style={{ marginTop: 10 }}>
        Ordered by preparation priority. Representative practice by pattern, not documented company questions.
      </p>
    </>
  );
}
