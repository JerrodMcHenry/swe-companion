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
        <header className="border-b border-stone-200">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              SWE Apprenticeship
            </Link>
            <Nav />
          </div>
        </header>
        <main className="mx-auto max-w-[1100px] px-6 py-12 md:py-16">{children}</main>
      </body>
    </html>
  );
}
