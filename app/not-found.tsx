import Link from "next/link";

export default function NotFound() {
  return (
    <div className="phead" style={{ paddingTop: 48 }}>
      <div>
        <h1>Page not found</h1>
        <p className="muted">
          Try <Link className="link" href="/">Interview Prep</Link>, the <Link className="link" href="/resources">Resource Library</Link> or search (⌘K).
        </p>
      </div>
    </div>
  );
}
