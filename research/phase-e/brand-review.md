# Phase E: brand and logo usage review

Checked 2026-11-27. Research only. **This is not legal advice.** It summarises what the brand owners publish and flags where a lawyer or the brand owner would have to give a definitive answer.

Copyright and trademark are separate questions. A CC0 licence on an SVG drawing (Simple Icons) waives the illustrator's copyright only. It grants no trademark rights, so it says nothing about whether showing a company's logo on SWE Companion is allowed. On the other side, the lack of explicit permission does not mean that referring to a company is prohibited. Naming a company in plain text to identify it ("Google interview questions") is the kind of referential use most trademark guidelines allow (see Microsoft and Google below). Logos are treated much more strictly than names in every guideline reviewed.

## 1. Current state of the repository

**Files.** None of the files has an origin comment, licence or attribution.

| File | Origin (inferred) | Colour as shipped | Rendering |
|---|---|---|---|
| `google.svg` | The four-colour "G" (48×48 path, the same artwork Google publishes for Sign-in-with-Google buttons). Not Simple Icons, which uses a single-colour G. | Official four colours | As-is |
| `amazon.svg` | Simple Icons-style 24×24 path: the "a" with the smile arrow. `fill="#000000"` was added. Amazon is **not in** the current Simple Icons data (develop branch, 3,476 icons). | Black | `mono: true`, so it is **inverted to white in dark mode** |
| `meta.svg` | Simple Icons "Meta" path (source www.meta.com) | `#0467DF` (Simple Icons hex) | As-is |
| `apple.svg` | Simple Icons "Apple" path | Black (`fill` added) | `mono: true`, so it is **inverted to white in dark mode** |
| `microsoft.svg` | Hand-built four squares, symbol only (no "Microsoft" logotype). Microsoft is **not in** the current Simple Icons data. | Official four colours | As-is |
| `netflix.svg` | Simple Icons "Netflix" N symbol (source and guidelines: brand.netflix.com) | `#E50914` | As-is |
| `ycombinator.svg` | Simple Icons "Y Combinator" path (source ycombinator.com/press) | `#F0652F` | Used as the icon for the **"Early-stage startups" employer type**, not for YC itself |

**Rendering** (`app/ui.tsx`, `app/globals.css`):

- `<img>` sits inside `.logo`. In `.logo.lg` (company page header) that is a 52px box with a border and a 12px radius.
- `[data-theme="dark"] .logo img.mono { filter: invert(1); }` recolours Apple and Amazon at runtime.
- Other employers use `.gicon.mono-tile`, a neutral first-letter tile. Employer types use stroke icons.
- No page carries a non-affiliation or trademark notice. The footer reads "SWE Companion · links to the best free interview preparation".

## 2. Simple Icons

- Disclaimer (https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md):
  - "Simple Icons is released under CC0 - though that doesn't mean to imply that all icons within the project are also CC0."
  - "We ask that our users seek the correct permissions to use the icons relevant to their project."
  - "The lack of a `guidelines` entry for a particular brand does not imply that the brand has no guidelines."
- Repository licence: CC0 1.0 (https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md). CC0 waives only the affirmer's own "Copyright and Related Rights". Paragraph 4(a) of CC0 states that trademark rights are not waived.
- Per-brand data (`data/simple-icons.json`, develop branch, fetched 2026-11-27). No entry carries a `license` field.

| Brand | In Simple Icons? | `guidelines` | `source` |
|---|---|---|---|
| Google | Yes | https://about.google/brand-resource-center/brand-elements/ | https://partnermarketinghub.withgoogle.com |
| Meta | Yes | https://www.facebook.com/brand/resources/meta/company-brand | www.meta.com |
| Netflix | Yes | https://brand.netflix.com/en/assets/logos | the same URL |
| Apple | Yes | none | www.apple.com |
| Y Combinator | Yes | none | https://www.ycombinator.com/press |
| Anthropic | Yes | none | anthropic.com |
| Perplexity | Yes | none | perplexity.ai |
| Amazon, Microsoft, OpenAI, Jane Street, Citadel Securities, HRT, Jump, Optiver | **No** | — | — |

## 3. Per-company findings

Quotes are verbatim and come from the brand owner's own pages unless stated otherwise. OpenAI, Anthropic and Perplexity were verified earlier today in `research/expansion-2026-11/phase-b-verification.md` §7. Those findings are repeated here.

| Company | Asset source available? | Guideline URL | Key restrictions (quoted) | Current file complies? | Recommendation | Uncertainty |
|---|---|---|---|---|---|---|
| **Google** | Brand resources sit behind a Partner Marketing Hub application: "Please complete your application to access brand resources." | https://partnermarketinghub.withgoogle.com/brands/google/trademarks-and-terms/trademark-guidelines-for-proper-usage/ (about.google/brand-resource-center/rules/ redirects here). Requests go to https://support.google.com/contact/brand_request_form, which now redirects to the Hub. | "Use only Google-approved artwork when using Google's logos."; "Don't remove, distort, or alter any element of a Google Brand Feature."; Don't imply "a relationship with, affiliation with, sponsorship by, or endorsement by Google". | Artwork is unmodified and correctly coloured. However, it is the Sign-in-button G taken outside that context, and no approval was obtained. | **Use monogram** (or ask Google through the brand request process) | Whether a non-commercial, purely identifying use of the G needs approval. The public pages do not say. A search snippet suggests the form says strictly non-commercial use "may not" need it, but that page could not be read directly. |
| **Amazon** | No public logo download for third parties | https://affiliate-program.amazon.com/help/operating/amazonmarks/ (Amazon Trademark Guidelines) | "The Amazon logo and the Amazon Smile mark are not permitted to be used by influencers or publishers"; do not "alter or modify any Amazon Mark in any manner"; no change to "the proportion, color, or font"; no use "that implies sponsorship or endorsement by us." | **No.** The logo is used without approval, and the dark-mode `invert(1)` changes its colour. The page is an Amazon help page, with no non-retail exception. | **Use monogram.** Remove `mono` and the logo. | Low |
| **Meta** | Lockup download after accepting "the applicable guidelines and other terms for use" | https://www.meta.com/brand/resources/meta/company-brand/ | "All usage of the Meta logo requires approval"; trademarks "may only be used as provided in these guidelines or with Meta's permission"; mono variants only "in low reproduction environments when a primary variation cannot perform". | **No approval.** The colour is the Simple Icons hex, not a verified official asset. The symbol is shown without the lockup. | **Use monogram** | Low |
| **Apple** | None (Newsroom offers no logo download) | https://www.apple.com/legal/intellectual-property/guidelinesfor3rdparties.html | "Only Apple and its authorized resellers and licensees may use the Apple Logo"; no Apple logo on "websites" without "an express written trademark license from Apple"; no use implying "Apple's affiliation with or endorsement". | **No.** No licence, plus dark-mode inversion. | **Use monogram.** Remove `mono` and the logo. | Low. This is the most explicit prohibition of the group. |
| **Microsoft** | Official files are linked from the logo PDF ("Get logo for light background" / "dark background") | https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks and the logo PDF (Aug 2025): https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/mscle/documents/legal/intellectualproperty/trademarks/Microsoft_logo_third_party_usage_guidance_.pdf | "As a general rule, a formal license is required to use the Microsoft logo". The license-free exceptions cover only resellers and partners. "The symbol and logotype must be used together."; "The logo should not be contained within a box, circle, or other shapes." Text use is fine: "Use without alteration in text to refer to Microsoft". | **No.** It is the symbol alone, it is self-drawn, it sits inside a bordered box (`.logo.lg`), and it is not covered by the licence-free exceptions. | **Use monogram** | Low |
| **Netflix** | brand.netflix.com: the page rendered empty to the fetcher, so access is unconfirmed. Media Center assets come under licence terms. | https://help.netflix.com/en/legal/media-terms-and-conditions; https://help.netflix.com/legal/notices; Simple Icons points to https://brand.netflix.com/en/assets/logos | "The Netflix Assets must be used as provided by Netflix with no modifications"; "All uses of the Netflix Assets must conform to the Netflix Brand Guidelines"; "Unless you have our permission, do not use the Netflix marks as your own"; nothing "that implies sponsorship or endorsement". | Partly. The shape and colour match Simple Icons, which sourced from Netflix's brand site, and there is no modification. But it is not a Netflix-provided file, and no licence or permission covers this use. | **Use monogram** (or obtain the official asset and terms from Netflix) | Medium. The brand-site terms could not be read. Whether identifying use on an independent directory is acceptable is unconfirmed. |
| **Y Combinator** | No logo downloads on /press (only press@ycombinator.com) | https://www.ycombinator.com/legal (Terms of Use, trademarks) | No licence "to use any of Y Combinator Trademarks displayed on the Site, without our prior written permission in each instance." YC also has "Brand Use Rules" for founders (https://ycombinator.com/ethics); the text was not found. | **No.** No permission. Using YC's mark to stand for *all* early-stage startups also implies an association YC has not made and mislabels the category. | **Replace with the neutral employer-type icon** used by the other employer types | Low |
| **OpenAI** | Brand page with downloads | https://openai.com/brand/ | "Use the logo only when it directly relates to OpenAI services."; "Use the logo without permission or outside OpenAI's terms." (a Don't); "…or modify it in any way." | Not applicable (monogram) | **Keep monogram** | Low |
| **Anthropic** | Press kit (ZIP) | https://www.anthropic.com/legal/trademark-guidelines | "You may only use our trademarks as specifically permitted by us and only in materials we approve beforehand."; "No alterations of our trademarks (changes to color, font, proportion, or otherwise) are permitted." | Not applicable (monogram) | **Keep monogram** | Low |
| **Perplexity** | hub/brand design system with downloads | https://www.perplexity.ai/hub/brand; https://www.perplexity.ai/hub/legal/terms-of-service | No third-party rules on the brand page. The terms prohibit to "use, reproduce or remove any… trademark… logo… displayed on or through the Services". | Not applicable (monogram) | **Keep monogram** | Medium. There is no explicit third-party policy. |
| **Jane Street** | None found | None found. The site footer links only /privacy-notice/. Registered marks are owned by Jane Street Group, LLC (USPTO data via Justia, third-party). | No published logo rules found | Not applicable (monogram) | **Keep monogram** | No policy published. Absence is neither permission nor prohibition. |
| **Citadel Securities** | None found | Legal pages returned HTTP 403 to automated fetch | Not reviewed | Not applicable (monogram) | **Keep monogram** | Unreviewed |
| **Hudson River Trading** | None found | Notice on a site page (https://www.hudsonrivertrading.com/hrt-comment-letters, seen via search): "HRT® and Hudson River Trading® are registered trademarks of Hudson River Trading LLC." Legal pages returned 403 or 404. | No logo rules found | Not applicable (monogram) | **Keep monogram** | No policy published |
| **Jump Trading** | Media contact only (mediainquiries@jumptrading.com) | None found. The marks appear registered to Jump Algorithms, LLC (third-party registry data). | No logo rules found | Not applicable (monogram) | **Keep monogram** | No policy published |
| **Optiver** | None found | https://optiver.com/notices/ | Prohibits "Unauthorised use of or any unauthorized association with our name"; "Websites and apps that claim to represent Optiver without our permission." | Not applicable (monogram, and the site makes no representation claim) | **Keep monogram.** The disclaimer matters here. | Low |

## 4. General findings

1. **No current logo file has documented permission.** Six brand owners publish explicit restrictions that the current use does not meet:
   - Apple requires a licence for websites.
   - Microsoft requires a formal licence and the logotype, and prohibits the box.
   - Meta requires approval for all logo use.
   - Amazon bars publishers.
   - Google requires approved artwork.
   - Y Combinator requires prior written permission.

   Netflix is the closest to compliant, but it still has no licence for this use.
2. **Dark-mode inversion is a modification.** `filter: invert(1)` on Apple and Amazon changes the colour of the mark. Amazon ("color") and Anthropic and others ban that kind of change explicitly. If any logo is kept with permission, use the owner's own reverse or monochrome asset rather than a CSS filter.
3. **Containers.** Microsoft prohibits placing its logo in "a box, circle, or other shapes". `.logo.lg` draws a bordered rounded box. Other owners set clear-space rules (Meta: twice the symbol height; Microsoft: the symbol height). The 30px logo in a 34px or 52px tile does not meet these.
4. **Simple Icons gives no trademark cover.** Four of the files come from Simple Icons or match its paths. Amazon and Microsoft are no longer in its data at all.
5. **Names in text are the lower-risk path.** Microsoft and Google both describe acceptable plain-text reference. Apple allows word marks in "referential" phrases. The site already identifies employers by name, which is what users need.
6. **Consistency.** Monograms for all 14 employers remove the current two-tier look, where Big Tech gets logos and AI and quant firms get letters. That look could also suggest a relationship with the companies shown with logos.
7. **No disclaimer exists anywhere.** Apple's guidance for publications asks for a statement that the work "has not been authorized, sponsored, or otherwise approved by Apple Inc."; Microsoft suggests a trademark footnote. A short site-wide notice addresses implied affiliation regardless of the logo decision. CLAUDE.md already requires never implying affiliation.

## 5. Recommended changes (for owner approval; nothing changed)

- Google, Amazon, Meta, Apple, Microsoft and Netflix: drop `logo` (and `mono` on Apple and Amazon). The existing `mono-tile` fallback then renders automatically.
- Early-stage startups: replace `logo: "/logos/ycombinator.svg"` with the same kind of neutral `icon` the other employer types use.
- After that, `public/logos/`, the `mono` field and the `invert(1)` rule are unused. They could be removed, which simplifies the code. The tagline text "including YC-backed companies" is a factual, nominative reference and can stay.
- If the owner later wants authentic logos: request permission through each owner's process (Google brand request, Meta counterpart or Brand Review, Microsoft trademarks@microsoft.com, Apple Trademark Department, Amazon business development or trademarks@amazon.com, Netflix, yclegal@ycombinator.com). Then use only the files they supply, unmodified, with their own dark-background variants and the required clear space, and without boxes.

## 6. Recommended disclaimer wording (not legal advice)

Footer, site-wide:

> SWE Companion is an independent resource and is not affiliated with, endorsed by or sponsored by any company named on this site. Company names are trademarks of their respective owners and are used only to identify employers.

Optional, if any logo is ever restored with permission: "Logos are used with permission or as provided by their owners."

## 7. Not verified

- Netflix brand-site terms: the page rendered empty.
- Citadel Securities and HRT legal pages: HTTP 403.
- The full text of the YC Brand Use Rules.
- The text of Google's brand-request form: it redirects to a login-gated Hub.

No logo assets were downloaded. The Microsoft guidance PDF was fetched only to read its text.

**This review is not legal advice.** Trademark law differs by jurisdiction. Questions about fair or nominative use, and any decision to display a logo, should go to a qualified lawyer or to the brand owner.
