"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Keeps old links useful on a static site: forwards to the new page, with a visible link as a fallback.
export default function Moved({ href, title, text }: { href: string; title: string; text: string }) {
  const router = useRouter();
  useEffect(() => router.replace(href), [router, href]);
  return (
    <div className="narrow">
      <div className="eyebrow">This page has moved</div>
      <h1 className="title" style={{ marginTop: 8 }}>
        {title}
      </h1>
      <p className="lead">{text}</p>
      <p style={{ marginTop: 22 }}>
        <Link className="btn" href={href}>
          Continue →
        </Link>
      </p>
    </div>
  );
}
