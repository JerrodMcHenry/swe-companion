import type { Metadata } from "next";
import Link from "next/link";
import Nav from "./nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Software Engineering Apprenticeship",
    template: "%s · Software Engineering Apprenticeship",
  },
  description: "Stop searching. Start learning. Get hired.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="top">
          <div className="in">
            <Link href="/" className="brand">
              <span className="logo" aria-hidden="true">
                ◆
              </span>
              <span className="name">SWE Apprenticeship</span>
            </Link>
            <Nav />
          </div>
        </header>
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
