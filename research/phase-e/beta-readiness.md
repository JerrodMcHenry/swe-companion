# V1 limited beta — readiness checklist (2026-11-27)

Internal. Tick items as they are done; owner decisions are marked **Owner**.

## 1. Technical verification
- [x] `npm run build` passes: type check, content checks, static export (170 routes, 168 HTML pages).
- [x] No broken internal links; external links checked (only bot-blocked sites fail automated checks; read in a browser).
- [x] All content pages fit at 320 and 360 px; light and dark themes; keyboard focus, search and question expansion work.
- [x] Mobile primary controls about 44 px (chips 36 px with spacing); inputs 16 px to avoid iOS zoom.
- [ ] Before each beta build: rerun the build and the link check (see `maintenance-policy.md`).

## 2. Outstanding human content review (not done — required before public launch)
- [ ] Qualified reviewers check the 569 answers, in this priority: security → concurrency → databases → AI engineering → machine learning → system design (details in `README.md` in this folder and each `content-review-*.md`).
- [x] Automated, source-backed audit completed and recorded; it is **not** human expert review.
- Beta participants should be told answers have not yet been expert-reviewed and asked to report errors.

## 3. Employer evidence limitations (keep visible on pages; re-check per maintenance policy)
- Meta front end postings not found (page rests on Meta's official prep page); Meta ML minimums from 3 postings.
- Which Amazon candidates get the AI-assisted assessment is unknown.
- Solutions Engineer formats: only AWS's 2021 blogs are official.
- HRT full-stack: official 2025 interview guidance mentions full-stack candidates; no full-stack posting found on 27 Nov 2026 (stated on the page).
- Citadel Securities and HRT block automated requests; content read in a browser.

## 4. Brand and legal uncertainties
- Neutral monograms only; no logo licence obtained (`brand-review.md`, not legal advice).
- Footer disclaimer: independent, not affiliated with, endorsed or sponsored by companies named.
- [ ] **Owner** (before public launch): legal review of company-name use, the disclaimer and linking practices. No trademark or legal clearance has been obtained.

## 5. Repository privacy
- The source repository stays private. `research/`, `CLAUDE.md` and review records are in the repository only.
- [x] The static export (`out/`) contains no research notes, review records, temporary files, credentials or personal information (scanned 27 Nov 2026; only illustrative addresses such as `a@x.com` inside code examples).
- Deploying the website publishes only `out/`. Making the repository public would publish `research/` and history too — decide that separately.

## 6. Static deployment requirements
- Host serves `out/` as static files, maps extensionless URLs to `.html` (`/questions/python` → `questions/python.html`) and serves `404.html` for unknown paths. No server, database or environment variables are needed.
- Recommended for a private GitHub repository: **Cloudflare Pages** or **Netlify** connected to the private repo (build command `npm run build`, output directory `out`, Node 20+). Both serve extensionless `.html` routes and a root `404.html`. Vercel also supports Next.js static exports. Check each provider's current plan terms; GitHub Pages from a private repository requires a paid GitHub plan.
- For a limited beta, restrict access (for example Cloudflare Access in front of Cloudflare Pages, or the host's password protection) and consider adding `robots: { index: false }` to the root metadata until public launch so unreviewed content is not indexed.
- [ ] **Owner**: choose the host, create the account and deploy (not done here).

## 7. Manual user validation
- [ ] Run `user-validation-checklist.md` with 10–20 job seekers (new graduates, career switchers, experienced and laid-off engineers, varied specialties).
- [ ] Record findings; fix only issues that blocked a task or recurred; no outcome claims without evidence.

## Beta blockers (must do before inviting beta users)
1. **Owner** chooses a host, deploys `out/` and restricts access.
2. Tell beta users that answers are not yet expert-reviewed, and give them a way to report errors (for example a shared email address; no feedback platform).

## Public-launch blockers
1. Human expert review of high-priority answers.
2. Legal review of company names, disclaimer and linking.
3. Results from the user validation sessions addressed.
4. Re-check fast-changing employer and AI-policy evidence (every 3 months).
