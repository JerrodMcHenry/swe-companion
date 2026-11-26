import type { Topic } from "../types";

const topic: Topic = {
  slug: "html-css-fundamentals",
  title: "HTML and CSS Fundamentals",
  category: "Frontend",
  phase: "full-stack-engineering",
  overview:
    "Structure pages with semantic HTML and working forms, and lay them out with CSS: the box model, selectors and the cascade, Flexbox, Grid and responsive, mobile-first design. The goal is a usable, responsive interface for your project, not visual design skill.",
  whyItMatters:
    "HTML and CSS were named explicitly in 6 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, far fewer than TypeScript (19) or React (18), but every React component renders HTML and is styled with CSS. One candidate-reported online assessment (Accenture India) included a task editing HTML, CSS and JavaScript. At work, the common entry-level frontend tickets — a form that does not submit the right field, a layout that breaks on a phone, a style that will not apply — are solved with exactly these fundamentals, especially semantic elements, the cascade and Flexbox.",
  prerequisites: ["Command Line and Development Environment (an editor and a browser with developer tools)"],
  objectives: [
    "Document structure: doctype, html with lang, head (charset, viewport meta tag, title) and body.",
    "Semantic elements: headings in order (h1 to h6), paragraphs and lists, landmarks (header, nav, main, footer, section, article, aside), and button for actions versus a for navigation; use div and span only when no element carries the meaning.",
    "Forms: form, label tied to its control (for and id, or wrapping), input types (text, email, password, number, checkbox, radio), textarea, select, button type=\"submit\"; the name attribute (the key sent to the server) and built-in constraints such as required. The submit-and-validate flow in React belongs to Forms, API Integration and UI States.",
    "Links and images: href (relative versus absolute URLs), img with meaningful alt text, or alt=\"\" for decorative images; Web Accessibility Fundamentals goes deeper.",
    "The box model: content, padding, border and margin; box-sizing: border-box; block versus inline versus inline-block display; normal flow.",
    "Selectors: type, class, id, attribute, descendant and child combinators, pseudo-classes (:hover, :focus, :focus-visible, :disabled) and the ::before and ::after pseudo-elements.",
    "The cascade: origin and !important, then specificity (id over class, attribute and pseudo-class, over type), then source order; inheritance of properties such as color and font; read the Styles pane in developer tools to see which rule won.",
    "Flexbox for one-dimensional layout: display: flex, flex-direction, justify-content, align-items, gap, flex-wrap and flex: 1; centering an element.",
    "Grid for two-dimensional layout: grid-template-columns with fr, repeat() and minmax(), gap, and placing items across tracks.",
    "Responsive design: the viewport meta tag, relative units (rem, em, %, vw, vh), max-width on images and containers, mobile-first styles with min-width media queries, and Flexbox or Grid layouts that adapt without a breakpoint where possible.",
    "Positioning at a recognize level: static, relative, absolute (relative to the nearest positioned ancestor), fixed and sticky; z-index.",
    "Basic styling: colors, fonts, spacing and borders; check text contrast and keep focus outlines visible.",
    "Skip for now: animations and transitions, visual design and design systems, CSS preprocessors (Sass), CSS-in-JS, BEM and other naming methodologies, container queries, cascade layers, legacy float layouts, and mastering a CSS framework — learn Tailwind or similar only when a job or codebase requires it.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "MDN Learn web development — Structuring content with HTML, CSS styling basics, CSS layout (selected articles)",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
      provider: "MDN Web Docs",
      type: "Course",
      instructions:
        "Start here. Read these articles and do each linked \"Test your skills\" page. Structuring content with HTML: Basic HTML syntax, What's in the head? Web page metadata, Headings and paragraphs, Lists, Structuring documents, Creating links, HTML images, Forms and buttons in HTML, Debugging HTML. CSS styling basics: What is CSS?, Getting started with CSS, Basic CSS selectors, Pseudo-classes and pseudo-elements, Combinators, The box model, Handling conflicts, Values and units, Sizing items in CSS, Debugging CSS. CSS layout: Introduction to CSS layout, Positioning, Flexbox, CSS grid layout, Responsive design, Media query fundamentals. Skip tables, video and audio, embedding, floats, multiple-column layout and legacy layout methods. Free; no account.",
    },
    {
      title: "web.dev — Learn CSS (selected modules)",
      url: "https://web.dev/learn/css",
      provider: "web.dev (Google Chrome team)",
      type: "Course",
      instructions:
        "Alternative to the MDN CSS articles, more concise and with a short quiz in each module: Box Model, Selectors, The cascade, Specificity, Inheritance, Sizing units, Layout, Flexbox and Grid. Use it instead of MDN's CSS sections, not in addition. Free; no account.",
    },
    {
      title: "The Odin Project — Foundations: HTML and CSS lessons",
      url: "https://www.theodinproject.com/paths/foundations/courses/foundations",
      provider: "The Odin Project",
      type: "Course",
      instructions:
        "Project-based alternative: complete Introduction to HTML and CSS through Links and Images, then Project: Recipes; then Intro to CSS through Alignment (The Cascade, Inspecting HTML and CSS, The Box Model, Block and Inline and the four Flexbox lessons), then Project: Landing Page. It works locally with a text editor, Git and GitHub (set up in its earlier lessons). Foundations does not cover Grid or responsive design — take those from the MDN CSS layout articles. Free; an account is optional (it tracks progress).",
    },
    {
      title: "MDN — Specificity",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions: "Reference for how specificity is calculated (the ID, CLASS and TYPE columns) when you need to explain why a rule did or did not apply. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Flexbox Froggy",
      url: "https://flexboxfroggy.com/",
      note: "Interactive levels for justify-content, align-items, flex-direction, flex-wrap and order. Free; no account.",
    },
    {
      title: "Grid Garden",
      url: "https://cssgridgarden.com/",
      note: "Interactive levels for placing items with grid-column, grid-row and grid-template-columns. Free; no account.",
    },
    {
      title: "MDN challenges: Feedback form, Fixing blog page styles, Fundamental layout comprehension, Mobile-first",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Mobile-first_challenge",
      note: "Forms with labels and constraints, debugging the cascade, Flexbox and Grid layout, and a mobile-first responsive page. Each challenge page links its starting code. The Feedback form challenge is in the Structuring content module, Fixing blog page styles in CSS styling basics. Free; no account.",
    },
    {
      title: "Frontend Mentor (free Newbie challenges): Recipe page, QR code component, Product preview card component",
      url: "https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm",
      note: "Build a real design from a screenshot: semantic structure (Recipe page), centering and the box model (QR code), and a responsive layout that switches at a breakpoint (Product preview card). Downloading starter files requires a free account; ignore the paid Pro design files.",
    },
    {
      title: "The Odin Project — Project: Landing Page",
      url: "https://www.theodinproject.com/lessons/foundations-landing-page",
      note: "A full page built with semantic HTML and Flexbox from a design. Free; no account needed to read; you build it locally.",
    },
    {
      title: "Apply to your full-stack project: the main page and one form",
      note: "Without a CSS framework first, build your project's main screen mobile-first with semantic landmarks and a labelled form, then check it at a 320-pixel width and on a desktop width with developer tools' device mode. Fix one style that does not apply by finding the winning rule in the Styles pane, and explain why it won.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is semantic HTML, and why does it matter?",
      answer:
        "Using the element that describes what content is — header, nav, main, article, button, h1 to h6, ul — rather than generic divs and spans styled to look right. Browsers and assistive technologies use the semantics: a screen reader can list the headings and landmarks, and a real button is focusable and works with the keyboard without extra code. It also helps search engines and makes the code easier to read. A div with a click handler looks like a button but is not one to a keyboard or screen-reader user.",
      followUps: ["When is a div the right choice?", "What is the difference between a button and a link?"],
      source: { title: "web.dev — Learn HTML: Semantic HTML", url: "https://web.dev/learn/html/semantic-html" },
    },
    {
      question: "How do you build an accessible form field? What do name, required and label do?",
      answer:
        "Give each control a label tied to it — <label for=\"email\"> matching id=\"email\", or a label wrapping the input — so the label is read by screen readers and clicking it focuses the field; a placeholder is not a label. Choose the right type (email, number, password) for built-in checks and the right mobile keyboard. The name attribute is the key the value is submitted under; a field without a name is not sent. required and attributes such as minlength or pattern enable the browser's built-in validation, which helps users but never replaces server-side validation.",
      followUps: ["What does a button inside a form do by default?", "Why must the server validate again?"],
      source: { title: "MDN — Forms and buttons in HTML", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms" },
    },
    {
      question: "What should an image's alt text say?",
      answer:
        "The information the image conveys, briefly, as you would describe it to someone who cannot see it — and nothing the surrounding text already says. If the image is a link, the alt text (or other text in the link) must say where the link goes. If the image is purely decorative, use an empty alt=\"\" so screen readers skip it, rather than leaving the attribute out. Do not put text in images. Web Accessibility Fundamentals covers this in more depth.",
      followUps: ["What alt text would you give a company logo that links to the home page?"],
      source: { title: "MDN — HTML images: Alternative text", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images" },
    },
    {
      question: "Explain the CSS box model. What does box-sizing: border-box change?",
      answer:
        "Every element is a box made of content, padding, border and margin. With the default box-sizing: content-box, width sets only the content, so padding and border are added on top: width: 200px with 20px padding and a 1px border takes 242px. With border-box, width includes padding and border, so the box is 200px — which is why many stylesheets set it for every element. Margins sit outside the box, and vertical margins between blocks can collapse into one.",
      followUps: ["What is the difference between padding and margin?", "How do you inspect an element's box in developer tools?"],
      source: { title: "MDN — The box model", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model" },
    },
    {
      question: "What is the difference between display: block, inline and inline-block?",
      answer:
        "Block elements (div, p, h1) start on a new line, take the full available width and respect width, height and vertical margins. Inline elements (span, a, strong) flow within text, are only as wide as their content and ignore width and height. inline-block flows inline but accepts width, height and padding like a block. display: none removes the element from layout entirely, whereas visibility: hidden hides it but keeps its space. display: flex and grid make an element a block-level container whose children use that layout.",
      followUps: ["Why does setting width on a span do nothing?"],
      source: { title: "MDN — The box model: Block and inline boxes", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model" },
    },
    {
      question: "Two CSS rules target the same element. Which one wins?",
      answer:
        "The cascade decides. First importance and origin (an !important declaration beats a normal one); then specificity: inline styles beat ID selectors, which beat classes, attribute selectors and pseudo-classes, which beat type selectors and pseudo-elements; if specificity is equal, the rule that comes later in the source wins. Properties not set on an element may be inherited from its parent (color and font are; padding and border are not). In practice, open the Styles pane in developer tools: it shows the winning rule and crosses out the overridden ones. Prefer lowering specificity to adding !important.",
      followUps: ["Why is overusing IDs or !important in stylesheets a maintenance problem?"],
      source: { title: "MDN — Handling conflicts", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts" },
    },
    {
      question: "When would you use Flexbox and when Grid?",
      answer:
        "Flexbox lays items out in one dimension — a row or a column — and is ideal for navigation bars, toolbars, aligning a few items or centering, with sizes driven by the content. Grid lays items out in rows and columns at once, so it suits page layouts and card grids where items must line up in both directions; repeat(auto-fill, minmax(200px, 1fr)) gives a responsive grid without media queries. They combine well: a Grid page layout whose cards use Flexbox inside.",
      followUps: ["How would you build a row of cards that wraps on small screens?"],
      source: { title: "MDN — CSS grid layout", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids" },
    },
    {
      question: "How do you center an element horizontally and vertically?",
      answer:
        "Make the parent a flex container with justify-content: center (main axis) and align-items: center (cross axis), and give it a height; or use display: grid with place-items: center. For a block element horizontally only, margin-inline: auto with a width or max-width also works. Know one method well and why it works — the axes — rather than a list of tricks.",
      followUps: ["Why does align-items: center appear to do nothing when the parent has no height?"],
      source: { title: "web.dev — Learn CSS: Flexbox (How to center an item vertically and horizontally)", url: "https://web.dev/learn/css/flexbox" },
    },
    {
      question: "How do you make a page responsive? What does mobile-first mean?",
      answer:
        "Add the viewport meta tag so phones do not render a zoomed-out desktop page; use fluid layouts (Flexbox, Grid, percentages, max-width) and relative units such as rem; make images scale with max-width: 100%. Mobile-first means writing the base styles for small screens and adding min-width media queries to adapt the layout as space grows, so small devices get the simplest CSS. Choose breakpoints where your content breaks, not at specific device widths, and test with developer tools' device mode.",
      followUps: ["What is the difference between rem and em?", "Why might a layout overflow horizontally on a phone?"],
      source: { title: "MDN — Media query fundamentals: Mobile-first responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries" },
    },
    {
      question: "What is the difference between position: relative, absolute, fixed and sticky?",
      answer:
        "relative keeps the element in normal flow and offsets it with top or left, and it becomes the reference point for absolutely positioned children. absolute removes the element from flow and positions it relative to its nearest positioned ancestor (or the page). fixed positions it relative to the viewport, so it stays in place when scrolling. sticky behaves like relative until a scroll threshold, then sticks like fixed within its container. z-index controls stacking of positioned elements.",
      followUps: ["How would you place a badge in the top-right corner of a card?"],
      source: { title: "MDN — Positioning", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning" },
    },
  ],
  mistakes: [
    "Using divs with click handlers instead of buttons and links.",
    "Inputs without labels, or a placeholder used as the label.",
    "Form fields without a name attribute, so their values are never submitted.",
    "Omitting alt, or writing alt text for decorative images.",
    "Fixing every conflict with !important or ever more specific selectors instead of finding the winning rule in developer tools.",
    "Fixed pixel widths that overflow on a phone; forgetting the viewport meta tag.",
    "Using absolute positioning for page layout instead of Flexbox or Grid.",
    "Removing focus outlines without providing a visible replacement.",
    "Spending weeks on visual polish or a CSS framework before the fundamentals work.",
  ],
  mastery: [
    "Interview readiness: you can explain semantic HTML, the box model, specificity and the cascade, Flexbox versus Grid and mobile-first responsive design in a few sentences each, and center an element without looking it up.",
    "Professional competence: with documentation available, you can build a page from a simple design with semantic structure, a labelled form and a layout that works from a 320-pixel phone width to a desktop.",
    "Professional competence: you can find why a style does not apply using the developer tools Styles pane and fix it without !important.",
    "You complete Flexbox Froggy, Grid Garden and two of the listed Frontend Mentor or MDN challenges without help (editorial benchmark, not an employer standard).",
    "Skip this topic if you have already built responsive pages with semantic HTML and can do all of the above.",
  ],
  deprioritize: [
    "Animations, transitions and visual design.",
    "Sass, CSS-in-JS, CSS Modules details and naming methodologies such as BEM.",
    "Container queries, cascade layers, subgrid and other advanced layout features.",
    "Float-based and other legacy layout techniques.",
    "Mastering Tailwind CSS or another framework before a job requires it.",
  ],
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "semantic HTML",
    "forms",
    "label",
    "alt text",
    "box model",
    "box-sizing",
    "selectors",
    "specificity",
    "cascade",
    "inheritance",
    "flexbox",
    "CSS grid",
    "responsive design",
    "media queries",
    "mobile-first",
    "rem em",
    "position absolute",
    "centering",
    "layout",
  ],
};

export default topic;
