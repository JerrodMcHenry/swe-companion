"use client";

import { useEffect, useMemo, useState } from "react";
import type { Question } from "@/content/types";
import { Chevron } from "../ui";

// Client component: filters questions by text and group, expands and collapses answers,
// and opens a question linked from search (#q<number>) or a group linked from a company page (?group=).
export default function QuestionList({ questions }: { questions: Question[] }) {
  const groups = useMemo(() => [...new Set(questions.map((q) => q.group))], [questions]);
  const [group, setGroup] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const g = new URLSearchParams(window.location.search).get("group");
    if (g && groups.includes(g)) {
      setGroup(g);
      setOpen(new Set([questions.findIndex((q) => q.group === g)]));
    }
    const m = window.location.hash.match(/^#q(\d+)$/);
    if (m && questions[Number(m[1]) - 1]) {
      setOpen(new Set([Number(m[1]) - 1]));
      requestAnimationFrame(() => document.getElementById(`q${m[1]}`)?.scrollIntoView({ block: "start" }));
    }
  }, [groups, questions]);

  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  const visible = questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => (!group || q.group === group) && words.every((w) => `${q.question} ${q.answer} ${q.code ?? ""}`.toLowerCase().includes(w)));
  const allOpen = visible.length > 0 && visible.every(({ i }) => open.has(i));

  // Consecutive questions of the same group share one box under one heading.
  const blocks: { group: string; items: typeof visible }[] = [];
  for (const v of visible) {
    if (blocks.at(-1)?.group === v.q.group) blocks.at(-1)!.items.push(v);
    else blocks.push({ group: v.q.group, items: [v] });
  }

  const setItem = (i: number, isOpen: boolean) =>
    setOpen((prev) => {
      if (prev.has(i) === isOpen) return prev;
      const next = new Set(prev);
      if (isOpen) next.add(i);
      else next.delete(i);
      return next;
    });

  const selectGroup = (g: string | null) => {
    setGroup(g);
    const url = new URL(window.location.href);
    if (g) url.searchParams.set("group", g);
    else url.searchParams.delete("group");
    url.hash = "";
    window.history.replaceState(null, "", url);
  };

  return (
    <div>
      <div className="filters" style={{ marginTop: 22 }}>
        <input className="qsearch" type="search" placeholder="Filter questions" aria-label="Filter questions" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" className="chip" onClick={() => setOpen(allOpen ? new Set() : new Set(visible.map(({ i }) => i)))}>
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>
      {groups.length > 1 && (
        <div className="filters" role="group" aria-label="Question groups">
          <button type="button" className="chip" aria-pressed={group === null} onClick={() => selectGroup(null)}>
            All
          </button>
          {groups.map((g) => (
            <button key={g} type="button" className="chip" aria-pressed={group === g} onClick={() => selectGroup(g)}>
              {g}
            </button>
          ))}
        </div>
      )}
      <p className="xs faint" aria-live="polite">
        {visible.length} of {questions.length} questions
      </p>
      {visible.length === 0 && (
        <p className="muted" style={{ marginTop: 16 }}>
          No questions match. Try fewer words or another group.
        </p>
      )}
      {blocks.map((block) => (
        <div key={`${block.group}-${block.items[0].i}`}>
          <h2 className="label group">{block.group}</h2>
          <div className="qa">
            {block.items.map(({ q, i }) => (
              <details key={i} id={`q${i + 1}`} open={open.has(i)} onToggle={(e) => setItem(i, e.currentTarget.open)}>
                <summary>
                  <span className="qn">{String(i + 1).padStart(2, "0")}</span>
                  <span>{q.question}</span>
                  <Chevron />
                </summary>
                <div className="ans">
                  <p>{q.answer}</p>
                  {q.code && <pre>{q.code}</pre>}
                  {q.followUps && q.followUps.length > 0 && (
                    <div className="fu">
                      Follow-ups
                      <ul className="bul">
                        {q.followUps.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="src">
                    {q.source ? (
                      <>
                        Source:{" "}
                        <a className="link" href={q.source.url} target="_blank" rel="noreferrer">
                          {q.source.title} ↗
                        </a>
                      </>
                    ) : (
                      "Preparation advice (editorial)"
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
