import type { Topic } from "../types";

const topic: Topic = {
  slug: "web-accessibility-fundamentals",
  title: "Web Accessibility Fundamentals",
  category: "Frontend",
  phase: "full-stack-engineering",
  overview:
    "Build interfaces that people using keyboards, screen readers, zoom and other assistive technology can use: semantic HTML first, keyboard and focus support, labelled forms with linked errors, alternative text, sufficient contrast and accessible names — plus a quick routine to check your own work.",
  whyItMatters:
    "Accessibility appeared in 4 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, mostly as an interest or a responsibility rather than a hard requirement, so treat it as professional readiness rather than a likely interview format. On the job, an inaccessible form or button is a real bug that excludes users, and accessibility is required by law in many situations. It is also cheap when done from the start: semantic HTML and labels make the UI work for more people, and the same roles and labels are what React Testing Library queries rely on.",
  prerequisites: [
    "HTML and CSS Fundamentals (semantic elements, forms, focus styles)",
    "React Fundamentals",
    "Browser and DOM Fundamentals (the DOM and events)",
  ],
  objectives: [
    "Explain who accessibility serves (people with visual, hearing, motor and cognitive disabilities, plus temporary and situational limitations), why it matters for users and product quality, and — in general terms only — that it is legally required in many situations.",
    "Use semantic HTML first: button for actions, a with href for navigation, real headings in order, landmarks (header, nav, main, footer), lists and table markup for tabular data; know that a clickable div lacks focus, keyboard activation and a role.",
    "Support the keyboard: every interactive element reachable with Tab in a logical order that follows the source, operable with Enter or Space, no keyboard traps; avoid positive tabindex values; know tabindex=\"0\" and tabindex=\"-1\".",
    "Keep focus visible: never remove outlines without a clearly visible replacement (use :focus-visible).",
    "Manage focus at a basic level in dynamic UIs: a modal dialog moves focus inside, keeps it there until closed, closes on Escape and returns focus to the element that opened it (the native dialog element with showModal() gives you most of this); after a client-side route change, move focus to the new page's main heading or announce it, and update the document title.",
    "Build accessible forms: a visible label element associated with every input (for/id or wrapping), not placeholder text as the label; mark required fields; show errors in text next to the field, linked with aria-describedby and flagged with aria-invalid; group related controls with fieldset and legend.",
    "Write alternative text: describe the purpose of informative images, use alt=\"\" for decorative ones, and give icon-only buttons and links an accessible name.",
    "Recognize colour contrast requirements: WCAG 2 level AA asks for at least 4.5:1 for normal text and 3:1 for large text; check with a contrast checker; never use colour alone to convey meaning (add text or an icon).",
    "Explain accessible names and the accessibility tree: the name assistive technology announces comes from the content, a label, alt text or aria-label/aria-labelledby; inspect it in the browser's Accessibility pane.",
    "Apply the first rule of ARIA: use a native element with the built-in semantics and behaviour instead of adding a role to a div; no ARIA is better than bad ARIA. Know a few safe uses: aria-label for an icon button, aria-describedby for a hint or error, aria-live for status messages, aria-expanded on a disclosure button.",
    "Check your own work in about 15 minutes: a keyboard-only pass, the Accessibility pane, an automated scan (Lighthouse accessibility audit or the free axe DevTools extension) and a quick screen reader check (VoiceOver on macOS or iOS, NVDA on Windows, TalkBack on Android); know automated tools catch only some issues.",
    "Skip for now: full WCAG conformance audits and VPATs, legal compliance details for specific jurisdictions, building complex ARIA widgets (comboboxes, tree views, grids) from scratch — use a well-tested accessible component library or the APG pattern when you must — and specialist assistive-technology testing matrices.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "web.dev — Learn Accessibility",
      url: "https://web.dev/learn/accessibility",
      provider: "web.dev (Google Chrome team)",
      type: "Course",
      instructions:
        "Start here. A free written course; complete these modules: What is digital accessibility, and why does it matter?, ARIA and HTML, Content structure, Keyboard focus, JavaScript (Focus management and State management), Images, Color and contrast, Forms, Automated accessibility testing, Manual accessibility testing and Assistive Technology testing. Skip Typography, Animation and motion, Video and audio, Patterns, and Design and user experience for now. Free; no account.",
    },
    {
      title: "W3C WAI — Introduction to Web Accessibility, and Easy Checks – A First Review of Web Accessibility",
      url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
      provider: "W3C Web Accessibility Initiative",
      type: "Documentation",
      instructions:
        "Short alternative or companion from the standards body. Read the Introduction (What is Web Accessibility, Accessibility is Important, Examples). Then use Easy Checks (https://www.w3.org/WAI/test-evaluate/easy-checks/) as your checking routine: Image Alternative Text, Page Title, Headings, Color Contrast, Visible Keyboard Focus, Zoom, and the Form Checks (Labels, Required Fields). The page is marked as a draft update and says itself that it is not an exhaustive evaluation. Free; no account.",
    },
    {
      title: "MDN — Accessibility on the web (Learn web development module)",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility",
      provider: "MDN Web Docs (Mozilla)",
      type: "Course",
      instructions:
        "Alternative with hands-on assessments. Read What is accessibility?, Accessibility tooling, HTML: A good basis for accessibility, CSS and JavaScript accessibility best practices and WAI-ARIA basics, then do the Test your skills tasks and the Accessibility troubleshooting challenge. Skip Multimedia and Mobile for now. Free; no account.",
    },
    {
      title: "W3C — Using ARIA (First Rule of ARIA Use) and the ARIA Authoring Practices Guide: Read Me First",
      url: "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/",
      provider: "W3C Web Accessibility Initiative",
      type: "Documentation",
      instructions:
        "Reference. Read the APG's No ARIA is better than Bad ARIA section and the First Rule of ARIA Use in Using ARIA (https://www.w3.org/TR/using-aria/). When you build a modal, read the APG Dialog (Modal) Pattern's Keyboard Interaction section and the MDN <dialog> element page (showModal makes the rest of the page inert).",
    },
    {
      title: "WebAIM — Contrast Checker",
      url: "https://webaim.org/resources/contrastchecker/",
      provider: "WebAIM (Utah State University)",
      type: "Interactive",
      instructions:
        "Reference tool: enter foreground and background colours to see the contrast ratio and the WCAG AA and AAA results for normal and large text. Use it on your project's colour palette. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "MDN — Challenge: Accessibility troubleshooting",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Accessibility_troubleshooting",
      note: "Fix colour, semantic HTML, images, forms, a show/hide control and a table on a deliberately inaccessible page. Demonstrates identifying and fixing the most common barriers. Free; no account (runs in an online editor or locally).",
    },
    {
      title: "W3C WAI — Before and After Demonstration (BAD)",
      url: "https://www.w3.org/WAI/demos/bad/",
      note: "Compare inaccessible and accessible versions of the same pages. Run your keyboard-only pass, the Accessibility pane and an automated scan on the inaccessible version and list the barriers before reading the report. Free; no account.",
    },
    {
      title: "MDN — Test your skills: HTML accessibility and WAI-ARIA",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Test_your_skills/HTML",
      note: "Short fix-the-markup tasks on semantics, labels, alt text and ARIA, with solutions. Free; no account.",
    },
    {
      title: "Apply to your full-stack project: a 15-minute accessibility pass",
      note: "Unplug the mouse and complete your main flow with the keyboard only (focus visible, logical order, no trap, dialog focus returns). Check every input's label and error linkage in the Accessibility pane, run Lighthouse or axe DevTools and fix what they find, check your colours in the WebAIM Contrast Checker, and listen to your form with a screen reader. Then make sure your React Testing Library tests can find every control by role or label — if they cannot, fix the markup, not the test.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is web accessibility, and why does it matter?",
      answer:
        "Designing and building sites so that people with disabilities — visual, hearing, motor, cognitive — can perceive, understand, navigate and interact with them, including people using keyboards, screen readers, magnification or voice control. It matters because it lets more people use the product, because many accessibility practices (clear labels, keyboard support, good contrast) improve it for everyone, including people with temporary or situational limitations, and because accessibility is required by law in many situations. It is much cheaper to build in from the start than to retrofit.",
      followUps: ["Give an example of an accessibility improvement that helps all users."],
      source: { title: "W3C WAI — Introduction to Web Accessibility", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
    },
    {
      question: "Why should you use a button element instead of a div with an onClick handler?",
      answer:
        "A button comes with behaviour and semantics for free: it is focusable with Tab, activates with Enter and Space, is announced as a button with its text as its name, and supports disabled and form submission. A div with onClick works only with a mouse — keyboard and screen reader users cannot reach or identify it — and reproducing all of that needs tabindex, a role, key handlers and state, which is easy to get wrong. Use button for actions and a link with href for navigation.",
      followUps: ["When is a link the right choice instead of a button?"],
      source: { title: "web.dev — Learn Accessibility: ARIA and HTML", url: "https://web.dev/learn/accessibility/aria-html" },
    },
    {
      question: "What is the first rule of ARIA? When is ARIA appropriate?",
      answer:
        "If a native HTML element or attribute already has the semantics and behaviour you need, use it instead of adding an ARIA role, state or property. ARIA changes only what assistive technology is told — it adds no keyboard behaviour — so a wrong or incomplete role is worse than none: no ARIA is better than bad ARIA. It is appropriate for gaps HTML does not cover: an accessible name for an icon-only button (aria-label), linking a hint or error (aria-describedby), announcing status updates (aria-live), or exposing expanded state on a disclosure button (aria-expanded). For complex widgets, follow the ARIA Authoring Practices pattern or use a tested component library.",
      followUps: ["What happens if you put role=\"button\" on a div and nothing else?"],
      source: { title: "W3C — Using ARIA: First Rule of ARIA Use", url: "https://www.w3.org/TR/using-aria/" },
    },
    {
      question: "How do you make a form accessible?",
      answer:
        "Give every input a visible label element associated with it (for and id, or by wrapping), not just placeholder text, which disappears and is often low contrast. Use the right input types, mark required fields in the label text as well as with the required attribute, and group related controls such as radio buttons with fieldset and legend. Show errors as text next to the field, link the message with aria-describedby and set aria-invalid=\"true\", and on submit move focus to the first invalid field or to an error summary. Never rely on colour alone to show an error.",
      followUps: ["How would you test that a screen reader announces the error?"],
      source: { title: "web.dev — Learn Accessibility: Forms", url: "https://web.dev/learn/accessibility/forms" },
    },
    {
      question: "How do you support keyboard users, and how should focus behave when a modal dialog opens and closes?",
      answer:
        "Every interactive element must be reachable with Tab in a logical order that follows the page, operable with Enter or Space, and visibly focused — never remove the focus outline without a clear replacement, and avoid positive tabindex values. For a modal: move focus into the dialog when it opens, keep Tab within it while it is open, close it with Escape, and return focus to the button that opened it. The native dialog element opened with showModal() makes the rest of the page inert and handles Escape. In a single-page app, after a route change move focus to the new page's heading (or announce the change) and update the document title, because no page load tells assistive technology that the content changed.",
      followUps: ["What is a keyboard trap?", "What do tabindex=\"0\" and tabindex=\"-1\" do?"],
      source: { title: "W3C WAI-ARIA Authoring Practices — Dialog (Modal) Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" },
    },
    {
      question: "How do you write alternative text for images?",
      answer:
        "Describe the image's purpose in its context, not its pixels: for an informative image, the information it conveys; for a functional image such as a linked logo or icon button, the action or destination (\"Home\", \"Search\"). A decorative image gets an empty alt=\"\" so screen readers skip it — omitting alt entirely makes some screen readers read the file name. Do not start with \"image of\", and put long descriptions of charts in nearby text.",
      followUps: ["What alt text would you give a profile picture next to the user's name?"],
      source: { title: "W3C WAI — An alt Decision Tree", url: "https://www.w3.org/WAI/tutorials/images/decision-tree/" },
    },
    {
      question: "What colour contrast does WCAG require?",
      answer:
        "For level AA, text needs a contrast ratio of at least 4.5:1 against its background, and large text (about 18pt, or 14pt bold) at least 3:1. Check with a contrast checker or the browser's DevTools, including text on images, placeholder and disabled-looking text that still matters, and focus indicators. Contrast is separate from the rule that colour must not be the only way to convey information — a red border alone does not tell a colour-blind user which field is wrong.",
      followUps: ["How would you show an error state without relying on colour?"],
      source: { title: "W3C — Understanding SC 1.4.3: Contrast (Minimum)", url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" },
    },
    {
      question: "How would you check the accessibility of a feature you built?",
      answer:
        "Combine quick manual checks with tools. Complete the flow with the keyboard only — reach everything, see focus, no traps, sensible order. Inspect labels and accessible names in the browser's Accessibility pane. Run an automated scan (Lighthouse's accessibility audit or axe DevTools) and fix what it finds, knowing automated tools catch only part of the problems and can report false positives. Check contrast and 200% zoom, and listen to the main flow with a screen reader such as VoiceOver or NVDA. In tests, querying by role and label in React Testing Library catches missing names early.",
      followUps: ["What kinds of problems can automated tools not detect?"],
      source: { title: "W3C WAI — Easy Checks: A First Review of Web Accessibility", url: "https://www.w3.org/WAI/test-evaluate/easy-checks/" },
    },
    {
      question: "An icon-only button (a trash can) is announced by a screen reader as just \"button\". How do you fix it?",
      answer:
        "It has no accessible name. Give it one: visually hidden text inside the button, or aria-label=\"Delete item\" (include which item if there are several), and mark the decorative icon itself as hidden from assistive technology (aria-hidden=\"true\" on the SVG, or alt=\"\" on an img). Verify the computed name in the Accessibility pane; a Testing Library query such as getByRole('button', { name: /delete/i }) then finds it too.",
      followUps: ["What is the difference between aria-label and aria-labelledby?"],
      source: { title: "web.dev — Learn Accessibility: ARIA and HTML (Rule 5: Use accessible names for interactive elements)", url: "https://web.dev/learn/accessibility/aria-html" },
    },
  ],
  mistakes: [
    "Clickable divs and spans instead of buttons and links.",
    "Removing focus outlines (outline: none) with no visible replacement.",
    "Placeholder text used as the only label, or inputs with no label at all.",
    "Error messages shown only in red, or not linked to their field.",
    "Missing alt on images, or file names and \"image of …\" as alt text; decorative images without alt=\"\".",
    "Adding ARIA roles to fix what a native element would have provided, or ARIA that contradicts the element.",
    "Positive tabindex values that scramble the focus order.",
    "Modals that let focus escape behind them or do not return focus when closed; route changes that leave focus on a removed element.",
    "Treating a perfect automated score as proof the page is accessible.",
  ],
  mastery: [
    "You can build a form, a list and a modal dialog in React that work with the keyboard alone, have visible focus, labelled inputs, linked error messages and correct alt text, without AI help.",
    "You can explain semantic HTML first, the first rule of ARIA, accessible names, the AA contrast ratios and why automated tools are not enough.",
    "You can run a 15-minute check on a page (keyboard pass, Accessibility pane, automated scan, contrast, a screen reader pass) and fix the issues you find.",
    "Interview readiness: explain the accessibility decisions in your own project if asked; this is rarely a dedicated interview format at entry level.",
    "Skip this topic if you already build with semantic HTML, test with the keyboard and a screen reader, and can explain focus management for dialogs; keep the Easy Checks routine.",
  ],
  deprioritize: [
    "Full WCAG conformance audits, VPATs and certification.",
    "Jurisdiction-specific legal requirements.",
    "Building complex ARIA widgets (combobox, tree, grid) from scratch.",
    "Testing across many screen reader and browser combinations.",
    "WCAG AAA criteria and the detailed contrast formula.",
  ],
  keywords: [
    "accessibility",
    "a11y",
    "WCAG",
    "ARIA",
    "WAI-ARIA",
    "semantic HTML",
    "screen reader",
    "keyboard navigation",
    "focus management",
    "focus visible",
    "alt text",
    "colour contrast",
    "color contrast",
    "accessible name",
    "accessibility tree",
    "axe",
    "Lighthouse",
    "inclusive design",
  ],
};

export default topic;
