"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { readSavedPath, type SavedPath } from "./saved-path";

export type PickerTarget = { slug: string; name: string; text: string; icon: string; tone: string };
export type PickerRole = { slug?: string; title: string; text: string };

// Client component because the learner selects an employer and role before opening the apprenticeship.
export default function TargetPicker({
  companies,
  employerTypes,
  roles,
}: {
  companies: PickerTarget[];
  employerTypes: PickerTarget[];
  roles: PickerRole[];
}) {
  const router = useRouter();
  const names = new Map([...companies, ...employerTypes].map((t) => [t.slug, t.name]));
  const defaultRole = roles.find((r) => r.slug)!.slug!;
  const [saved, setSaved] = useState<SavedPath | null>(null);
  const [target, setTarget] = useState<string | null>(null);
  const [role, setRole] = useState(defaultRole);

  useEffect(() => {
    const value = readSavedPath();
    if (value && names.has(value.target)) {
      setSaved(value);
      setTarget(value.target);
      if (roles.some((r) => r.slug === value.role)) setRole(value.role);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const card = (t: PickerTarget) => (
    <button key={t.slug} type="button" className={`sel${target === t.slug ? " on" : ""}`} aria-pressed={target === t.slug} onClick={() => setTarget(t.slug)}>
      <div className={`ic tone-${t.tone}`} aria-hidden="true">
        {t.icon}
      </div>
      <div className="t">{t.name}</div>
      <div className="d">{t.text}</div>
    </button>
  );
  const roleTitle = roles.find((r) => r.slug === role)!.title;

  return (
    <>
      {saved && (
        <div className="continue">
          <span>
            Continue your <b>{names.get(saved.target)}</b> apprenticeship
          </span>
          <Link className="btn" href={`/apprenticeship/for/${saved.target}/${saved.role}`}>
            Continue →
          </Link>
        </div>
      )}
      <div className="step">
        <b>1</b>
        <h2 className="h2">Where do you want to work?</h2>
      </div>
      <div className="eyebrow" style={{ margin: "8px 0 10px" }}>
        Companies
      </div>
      <div className="grid g3">{companies.map(card)}</div>
      <div className="eyebrow" style={{ margin: "22px 0 10px" }}>
        Types of employer
      </div>
      <div className="grid g3">{employerTypes.map(card)}</div>

      <div className="step">
        <b>2</b>
        <h2 className="h2">Which role?</h2>
      </div>
      <div className="grid g3">
        {roles.map((r) =>
          r.slug ? (
            <button key={r.title} type="button" className={`sel${role === r.slug ? " on" : ""}`} aria-pressed={role === r.slug} onClick={() => setRole(r.slug!)}>
              <div className="t">{r.title}</div>
              <div className="d">{r.text}</div>
            </button>
          ) : (
            <button key={r.title} type="button" className="sel" disabled>
              <div className="t">
                {r.title} <span className="chip soon">Coming soon</span>
              </div>
              <div className="d">{r.text}</div>
            </button>
          ),
        )}
      </div>

      <div className="card sticky-cta">
        <span>
          {target ? (
            <>
              <b>{names.get(target)}</b> · {roleTitle}
            </>
          ) : (
            <span className="muted">Choose an employer to continue</span>
          )}
        </span>
        <button type="button" className="btn" disabled={!target} onClick={() => router.push(`/apprenticeship/for/${target}/${role}`)}>
          Open my apprenticeship →
        </button>
      </div>
    </>
  );
}
