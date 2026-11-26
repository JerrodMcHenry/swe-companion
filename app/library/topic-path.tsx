"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Children, Suspense, useState } from "react";

// Target-aware parts of a topic page. The page is static; the selected apprenticeship comes from ?path=<target>.<role>.
// Each topic page receives, for every apprenticeship that includes it, a small precomputed context.

export type TopicLink = { slug: string; title: string };
export type PathContext = {
  name: string; // Employer name, e.g. "Google".
  pathHref: string;
  stageTitle: string;
  stageHref: string;
  depth?: string;
  priority: string;
  track: "interview" | "job";
  reason?: string;
  unit?: string; // Set when the topic is part of a whole unit in this path (e.g. Programming Fluency).
  selected: string[]; // Exercise titles selected for this path.
  previous?: TopicLink;
  next?: TopicLink;
};
type Contexts = Record<string, PathContext>;

function useContext(contexts: Contexts) {
  const key = useSearchParams().get("path");
  return key ? { key, context: contexts[key] } : { key: null, context: undefined };
}

function CrumbsInner({ contexts, fallback }: { contexts: Contexts; fallback: React.ReactNode }) {
  const { context } = useContext(contexts);
  if (!context) return <>{fallback}</>;
  return (
    <nav aria-label="Breadcrumb" className="crumb">
      <Link href={context.pathHref}>{context.name}</Link>
      <span aria-hidden="true"> › </span>
      <Link href={context.stageHref}>{context.stageTitle}</Link>
    </nav>
  );
}
export function PathCrumbs(props: { contexts: Contexts; fallback: React.ReactNode }) {
  return (
    <Suspense fallback={props.fallback}>
      <CrumbsInner {...props} />
    </Suspense>
  );
}

function CardInner({ contexts }: { contexts: Contexts }) {
  const { context } = useContext(contexts);
  if (!context) return null;
  return (
    <div className="card forpath">
      <div className="eyebrow">For your {context.name} path</div>
      <div className="chips" style={{ marginTop: 8 }}>
        {context.depth && <span className="chip depth">{context.depth} depth</span>}
        {context.priority === "Essential" && <span className="chip key">Essential</span>}
        {context.priority === "Optional" && <span className="chip opt">Optional</span>}
        <span className="chip">{context.track === "job" ? "Needed on the job" : "Tested in interviews"}</span>
      </div>
      {context.unit ? (
        <p className="small body2" style={{ margin: "10px 0 0" }}>
          Part of {context.unit} in this apprenticeship.
        </p>
      ) : (
        context.reason && (
          <p className="small body2" style={{ margin: "10px 0 0" }}>
            {context.reason}
          </p>
        )
      )}
      {context.selected.length > 0 && (
        <p className="small" style={{ margin: "8px 0 0" }}>
          <b>Selected practice:</b> {context.selected.join(" · ")}
        </p>
      )}
    </div>
  );
}
export function PathCard({ contexts }: { contexts: Contexts }) {
  return (
    <Suspense fallback={null}>
      <CardInner contexts={contexts} />
    </Suspense>
  );
}

function PagerInner({ contexts, previous, next }: { contexts: Contexts; previous?: TopicLink; next?: TopicLink }) {
  const { key, context } = useContext(contexts);
  return <PagerView pathKey={key} context={context} previous={previous} next={next} />;
}
function PagerView({ pathKey: key, context, previous, next }: { pathKey: string | null; context?: PathContext; previous?: TopicLink; next?: TopicLink }) {
  const query = context ? `?path=${key}` : "";
  const prev = context ? context.previous : previous;
  const nxt = context ? context.next : next;
  return (
    <nav aria-label="Topics" className="pager">
      {prev ? (
        <Link className="card" href={`/library/${prev.slug}${query}`}>
          <div className="xs muted">← Previous</div>
          <b>{prev.title}</b>
        </Link>
      ) : context ? (
        <Link className="card" href={context.pathHref}>
          <div className="xs muted">← Back</div>
          <b>Your apprenticeship</b>
        </Link>
      ) : (
        <span />
      )}
      {nxt ? (
        <Link className="card r" href={`/library/${nxt.slug}${query}`}>
          <div className="xs muted">Next →</div>
          <b>{nxt.title}</b>
        </Link>
      ) : context ? (
        <Link className="card r" href={context.pathHref}>
          <div className="xs muted">Done →</div>
          <b>Your apprenticeship</b>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
export function PathPager(props: { contexts: Contexts; previous?: TopicLink; next?: TopicLink }) {
  return (
    <Suspense fallback={<PagerView pathKey={null} previous={props.previous} next={props.next} />}>
      <PagerInner {...props} />
    </Suspense>
  );
}

// Practice exercises: those selected for the learner's path come first and are labelled.
function PracticeInner({ contexts, titles, children }: { contexts: Contexts; titles: string[]; children: React.ReactNode }) {
  const { context } = useContext(contexts);
  return <PracticeView context={context} titles={titles}>{children}</PracticeView>;
}
function PracticeView({ context, titles, children }: { context?: PathContext; titles: string[]; children: React.ReactNode }) {
  const items = Children.toArray(children);
  const picked = new Set(context?.selected ?? []);
  const order = titles.map((title, index) => ({ title, index })).sort((a, b) => Number(picked.has(b.title)) - Number(picked.has(a.title)));
  return (
    <>
      {order.map(({ title, index }) => (
        <div key={title} className={picked.has(title) ? "card ex picked" : "card ex"}>
          {picked.has(title) && <div className="tag">Selected for {context!.name}</div>}
          {items[index]}
        </div>
      ))}
    </>
  );
}
export function PathPractice(props: { contexts: Contexts; titles: string[]; children: React.ReactNode }) {
  return (
    <Suspense fallback={<PracticeView titles={props.titles}>{props.children}</PracticeView>}>
      <PracticeInner {...props} />
    </Suspense>
  );
}

// Tabs over panes rendered on the server; every pane stays in the page for search engines and printing.
export function TopicTabs({ labels, children }: { labels: string[]; children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const panes = Children.toArray(children);
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Topic sections">
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            id={`tab-${index}`}
            aria-selected={active === index}
            aria-controls={`pane-${index}`}
            onClick={() => setActive(index)}
          >
            {label}
          </button>
        ))}
      </div>
      {panes.map((pane, index) => (
        <div key={index} className="pane" role="tabpanel" id={`pane-${index}`} aria-labelledby={`tab-${index}`} hidden={active !== index}>
          {pane}
        </div>
      ))}
    </>
  );
}
