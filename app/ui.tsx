import type { Company, Evidence } from "@/content/types";

// Neutral icons for employer types without a logo (simple strokes, currentColor).
const icons: Record<string, string> = {
  spark: "M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  growth: "M4 18l6-6 4 4 6-8M15 8h5v5",
  building: "M5 21V4h14v17M3 21h18M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1",
  bank: "M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6",
  document: "M6 3h9l4 4v14H6zM9 12h6M9 16h4",
  seed: "M12 21v-8M12 13c0-4 3-7 7-7 0 4-3 7-7 7zM12 13c0-3-2-6-6-6 0 3 2 6 6 6",
};

export function Logo({ company, large }: { company: Company; large?: boolean }) {
  return (
    <span className={large ? "logo lg" : "logo"} aria-hidden="true">
      {company.icon ? (
        <span className="gicon">
          <svg width={large ? 22 : 17} height={large ? 22 : 17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={icons[company.icon]} />
          </svg>
        </span>
      ) : (
        // Neutral monogram for every company: no brand owner has licensed its logo for this use (research/phase-e/brand-review.md).
        <span className="gicon mono-tile">{company.name[0]}</span>
      )}
    </span>
  );
}

const tagClass: Record<Evidence, string> = { Official: "official", "Candidate-reported": "reported", "Third-party": "third", Editorial: "", Varies: "" };

export function EvidenceTag({ evidence }: { evidence: Evidence }) {
  return <span className={`tag ${tagClass[evidence]}`}>{evidence}</span>;
}

export function Chevron() {
  return (
    <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function SearchIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
