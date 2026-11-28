import type { Metadata } from "next";
import Link from "next/link";
import { MobileTabs, Nav, SearchButton, SearchDialog, ThemeToggle } from "./header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "SWE Companion", template: "%s · SWE Companion" },
  description: "Software engineering interview questions, answers, coding problems and the best free preparation resources, by company and role.",
};

// Applies the saved or system theme before the page paints, so there is no flash of the wrong theme.
const themeScript = `try{var t=localStorage.getItem("swe-companion-theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <header className="top">
          <div className="wrap bar">
            <Link href="/" className="brand">
              <span className="mark" aria-hidden="true">
                SC
              </span>
              SWE Companion
            </Link>
            <Nav />
            <div className="spacer" />
            <SearchButton />
            <ThemeToggle />
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="wrap">
          <div className="foot">
            <span>SWE Companion · links to the best free interview preparation</span>
            <span>Interview processes change. Confirm formats with your recruiter.</span>
          </div>
          <p className="foot-note">
            SWE Companion is an independent resource and is not affiliated with, endorsed by or sponsored by any company named on this site. Company names are trademarks of their respective owners and are used only to identify employers.
          </p>
        </footer>
        <MobileTabs />
        <SearchDialog />
      </body>
    </html>
  );
}
