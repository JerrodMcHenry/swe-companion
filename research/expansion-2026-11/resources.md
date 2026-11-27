# Resource verification for new role tracks (2026-11-27)

Method: fetched each page with `curl -sL` and a browser User-Agent, then checked the page title and counted key terms in the body text. GitHub repos were checked through the API (stars, `pushed_at`) and raw READMEs. YouTube titles came from oEmbed. Pages that block automated fetches were read with WebFetch or WebSearch, and those entries are marked. "Rel" is interview relevance from 1 to 5. These are link and content checks, not a full educational-quality review. Nothing here has a `verifiedOn` date from a person.

Access labels: **Free**, **Free account**, **Partially free** (some content is gated) and **Paid**.

---

## 1. AI engineering

### LLM fundamentals (tokenization, attention, embeddings, context)
1. **Jay Alammar, The Illustrated Transformer**: https://jalammar.github.io/illustrated-transformer/ . Self-attention (Q/K/V), multi-head attention and positional encoding, explained visually. Free. 2018, still the standard explainer. Rel 5. No better free replacement.
2. **3Blue1Brown, "Transformers, the tech behind LLMs" (DL ch. 5)**: https://www.youtube.com/watch?v=wjZofJX0v4M . Title confirmed via oEmbed. Free. Alternative format to (1): embeddings and next-token prediction. Rel 4.
3. **Hugging Face Transformers docs, Tokenization algorithms**: https://huggingface.co/docs/transformers/tokenizer_summary . Covers BPE, WordPiece, Unigram and SentencePiece. Free. Rel 4. Reference page, preferred over the HF LLM course. Karpathy's "Let's build the GPT Tokenizer" (https://www.youtube.com/watch?v=zduSFxRajkE, confirmed) is deeper but about 2 hours. Use it only as optional depth.
4. **Anthropic, Effective context engineering for AI agents**: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents . Covers the context window as an "attention budget", context rot and compaction. Free. Sep 2025. Rel 4 for context-window questions. Vendor source.

### RAG (chunking, hybrid search, reranking, evaluation)
1. **Anthropic, Contextual Retrieval**: https://www.anthropic.com/news/contextual-retrieval . Chunking, embeddings plus BM25 hybrid search, reranking, and measured retrieval-failure reductions. Free. Sep 2024. Rel 5. The best single free page on hybrid search and reranking. Vendor framing, but the techniques are general.
2. **Pinecone, Rerankers and Two-Stage Retrieval**: https://www.pinecone.io/learn/series/rag/rerankers/ . Bi-encoder versus cross-encoder, and two-stage retrieval. Free. Rel 4. Vendor source.
3. **Eugene Yan, Patterns for Building LLM-based Systems & Products**: https://eugeneyan.com/writing/llm-patterns/ . Evals, RAG (including BM25/hybrid), caching, guardrails and feedback. Free. 2023, a little dated on tooling but the concepts hold. Rel 5. Also covers production topics.
4. For RAG evaluation, see Hamel's Evals FAQ under Evals below. Its RAG section is extensive.

### Agents and tool calling
1. **Anthropic, Building effective agents**: https://www.anthropic.com/engineering/building-effective-agents (the old /research/ URL still resolves). Workflows versus agents, prompt chaining, routing, orchestrator-workers, evaluator-optimizer, and when not to build an agent. Free. Dec 2024. Rel 5.
2. **Chip Huyen, Agents**: https://huyenchip.com/2025/01/07/agents.html . Tools, planning, reflection, failure modes and agent evaluation. Free. Jan 2025. Rel 5. An excerpt adapted from the AI Engineering book.
3. **Anthropic, Writing effective tools for agents**: https://www.anthropic.com/engineering/writing-tools-for-agents . Tool design and evaluating tools. Free. Rel 3, for practical and FDE interviews.
4. Hands-on: **OpenAI Cookbook, How to call functions with chat models**: https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models . A tools / tool_calls notebook. Free (running it needs a paid API key). Rel 3. Vendor-specific.
- Lilian Weng, LLM Powered Autonomous Agents (https://lilianweng.github.io/posts/2023-06-23-agent/). Good on ReAct and memory but dated (Jun 2023), and covered by (1) and (2). Keep as Library reference only.

### Evals
1. **Hamel Husain, Your AI Product Needs Evals**: https://hamel.dev/blog/posts/evals/ . Levels of evals (unit tests, human/model eval, A/B) and traces. Free. Rel 5.
2. **Hamel Husain and Shreya Shankar, AI Evals FAQ**: https://hamel.dev/blog/posts/evals-faq/ . Error analysis, binary pass/fail judges, synthetic data and RAG evaluation. Free (the authors also sell a paid course; the post itself is free). Rel 5.
3. **Hamel Husain, Using LLM-as-a-Judge**: https://hamel.dev/blog/posts/llm-judge/ . Free. Rel 4. Optional depth on judges.

### Prompt injection and AI security
1. **OWASP, LLM01:2025 Prompt Injection**: https://genai.owasp.org/llmrisk/llm01-prompt-injection/ . Direct versus indirect injection, mitigations and least privilege. Free. 2025 edition. Rel 5. The full list is at https://genai.owasp.org/llm-top-10/ (LLM01–LLM10, including Excessive Agency).
2. **Simon Willison, The lethal trifecta for AI agents**: https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/ . Private data, untrusted content and external communication, which together enable exfiltration. Free. Jun 2025. Rel 4. The clearest mental model for agent security questions.
3. **Claude docs, Mitigate jailbreaks and prompt injections**: https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks . Free. Rel 3. Vendor-specific mitigations. Optional.

### Production concerns (latency, cost, caching, observability)
1. **Chip Huyen, Building A Generative AI Platform**: https://huyenchip.com/2024/07/25/genai-platform.html . Context construction, guardrails, model router, gateway, caching (including semantic cache) and observability. Free. Jul 2024. Rel 5. The best single system-design-shaped overview.
2. **Applied LLMs, What We've Learned From A Year of Building with LLMs**: https://applied-llms.org/ . Tactical, operational and strategic lessons (evals, RAG versus fine-tuning, caching, guardrails). Free. 2024. Rel 4.
3. **OpenAI docs, Latency optimization** (https://platform.openai.com/docs/guides/latency-optimization) and **Prompt caching** (https://platform.openai.com/docs/guides/prompt-caching). Free. Rel 3. Vendor docs. Use them as concrete examples of prefix caching and token and latency trade-offs.
- Chip Huyen, Building LLM applications for production (https://huyenchip.com/2023/04/11/llm-engineering.html). Cost, latency, prompt versioning. Free, but Apr 2023 and partly dated. Superseded by (1).

### AI engineering interview question banks
1. **alexeygrigorev/ai-engineering-field-guide**: https://github.com/alexeygrigorev/ai-engineering-field-guide . 6.2k stars, pushed 2026-11-13. Theory questions (`interview/questions/01-theory.md`), AI system design (`04-ai-system-design.md`), project deep dive, take-homes, and process analysis across 51 companies. Every question is footnoted to its sources (Reddit, HN, blogs). Free. The author sells a Maven course, and the repo links to it. Rel 5. **Questions only, no answers.** Label it candidate-reported, not employer-confirmed. Best choice for "what gets asked".
2. **KalyanKS-NLP/LLM-Interview-Questions-and-Answers-Hub**: https://github.com/KalyanKS-NLP/LLM-Interview-Questions-and-Answers-Hub . 1.1k stars, Feb 2026. More than 100 Q&As with free answers in `Interview_QA/` (I spot-checked Q1–3: correct and concise). Free, with an upsell for a paid book. Rel 3. Skews toward model internals (KV cache, quantization) more than application engineering.
3. **amitshekhariitbhu/ai-engineering-interview-questions**: 3.8k stars, pushed today. Broad question list, but the "answers" link mostly to the author's own blog, X and LinkedIn posts. Free. Rel 3. Use only if (1) and (2) leave a gap.
- **Chip Huyen, AI Engineering book (chiphuyen/aie-book)**: the book is **Paid**. The repo is free and has ToC, chapter summaries (about 5k words), a resources list and case studies. Rel 2 as prep. Not a question bank. Link the summaries only as Library reference.

---

## 2. ML fundamentals and ML system design

1. **alirezadir/AIMLInterviews (formerly Machine-Learning-Interviews), ML System Design chapter**: https://github.com/alirezadir/AIMLInterviews/blob/main/src/MLSD/ml-system-design.md . The repo was renamed and the old URL redirects. 10.6k stars, pushed Oct 2026. A 9-step MLSD framework (problem formulation, metrics, data, features, model, serving, online testing, monitoring) plus sample questions, including GenAI and LLM systems in 2026. Free. The README advertises paid coaching. Rel 5. The ML coding chapter (`src/MLC/ml-coding.md`) is also useful. The ML fundamentals chapter is mostly a topic list that links to courses (Rel 3).
2. **Chip Huyen, Introduction to ML Interviews Book**: https://huyenchip.com/ml-interviews-book/ . Part I covers roles, interview pipeline and signals. Part II is questions tagged [E]/[M]/[H] (for example https://huyenchip.com/ml-interviews-book/contents/7.1-basics.html). Free. Content is around 2021; repo last pushed Mar 2025. Rel 4. **Most questions have no answers.** The author says so on the "About the answers" page. Some deep-link URLs from memory 404; use the slugs listed in its sidebar.
3. **ByteByteGo ML System Design Interview, free chapters**: Visual Search, YouTube Video Search, Video Recommendation, Personalized News Feed. Example: https://bytebytego.com/courses/machine-learning-system-design-interview/video-recommendation-system . Partially free (4 of 11 chapters are marked `free:true` in the site's own data). Rel 5 for worked MLSD examples.
4. **Stanford CS229 cheatsheets (Amidi)**: https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-machine-learning-tips-and-tricks (metrics, bias/variance, regularization) and the supervised-learning cheatsheet. Free. Rel 4 for fast fundamentals recall.
- Reference only: **Google ML Glossary** (https://developers.google.com/machine-learning/glossary), Google ML Crash Course metric pages (for example /crash-course/classification/accuracy-precision-recall), **Rules of ML** (https://developers.google.com/machine-learning/guides/rules-of-ml), **Eugene Yan, System Design for Recommendations and Search** (https://eugeneyan.com/writing/system-design-for-discovery/; the offline/online retrieval-ranking split, Rel 4 for RecSys-heavy roles), and **Evidently AI, ML and LLM system design case studies** (https://www.evidentlyai.com/ml-system-design; about 800 company write-ups, browse-only).

---

## 3. Quant developer and C++

### Official firm guidance (first priority)
1. **Jane Street, Preparing for a Software Engineering Interview**: https://www.janestreet.com/preparing-for-a-software-engineering-interview . Plus the **mock interview video**: https://www.janestreet.com/mock-interview . Employer-confirmed. Free. Rel 5. Key facts: real code rather than pseudocode, any language, no mental math or puzzles for SWE, **no bonus for OCaml**, open-ended collaborative problems. The 2017 blog post (https://blog.janestreet.com/what-a-jane-street-dev-interview-is-like/) is older and superseded by this page.
2. **HRT, How to Prepare for Your Software Engineer Interview at HRT**: https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/ . Employer-confirmed. Sep 2021. Free. Rel 5. Covers the timed HackerRank/Codility take-home, a systems-knowledge phone screen (memory, I/O, processes), a programming screen (C++ or Python may be required) and the onsite. Curl gets a 403; content was read with WebFetch.
- Jane Street Trading Interviews (https://www.janestreet.com/trading-interviews): for trader roles (probability, mental math), not dev. Use only for quant-trader content.

### C++ (no C++ interview-question repo met the bar; use these instead)
1. **LearnCpp, specific lessons**: 22.1 smart pointers and move semantics (https://www.learncpp.com/cpp-tutorial/introduction-to-smart-pointers-move-semantics/), 22.2 rvalue references, 22.5 std::unique_ptr, 25.2 virtual functions (https://www.learncpp.com/cpp-tutorial/virtual-functions/), 25.6 the virtual table (https://www.learncpp.com/cpp-tutorial/the-virtual-table/). Free and current. Rel 5 for C++ knowledge rounds.
2. **cppreference**: RAII (https://en.cppreference.com/w/cpp/language/raii), rule of three/five/zero (https://en.cppreference.com/w/cpp/language/rule_of_three), std::memory_order (https://en.cppreference.com/w/cpp/atomic/memory_order). Free. Reference. Rel 4.
3. **C++ Core Guidelines, sections**: R resource management https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#s-resource , R.1 RAII `#rr-raii`, C.21 rule of five `#rc-five`. Anchors are lowercase and confirmed in the HTML. Free. Pushed Nov 2026. Rel 3.

### Performance and low latency
1. **Carl Cook, "When a Microsecond Is an Eternity: High Performance Trading Systems in C++" (CppCon 2017)**: https://www.youtube.com/watch?v=NH1Tta7purM . Free. Rel 5 for quant-dev "how would you make it fast" discussions.
2. **David Gross, "When Nanoseconds Matter: Ultrafast Trading Systems in C++" (CppCon 2024)**: https://www.youtube.com/watch?v=sX2nF1fW7kI . Optiver engineer. Free. Rel 4. Covers order-book data structures and latency.
3. **Algorithmica, Algorithms for Modern Hardware**: https://en.algorithmica.org/hpc/ . Specific pages: RAM & CPU caches (/hpc/cpu-cache/), memory bandwidth, cost of branching (/hpc/pipelining/branching/). Free. Rel 4.
- Scott Meyers, "CPU Caches and Why You Care" (code::dive 2014, https://www.youtube.com/watch?v=WDIkqP4JbkE). Free. A short alternative to Drepper.
- Fedor Pikus, "C++ atomics, from basic to advanced" (CppCon 2017, https://www.youtube.com/watch?v=ZQFzMfHIxng). Free. Optional for concurrency-heavy roles.

### Systems background (reference)
- **OSTEP chapter PDFs** (https://pages.cs.wisc.edu/~remzi/OSTEP/), for example threads-locks.pdf and vm-tlbs.pdf. Free. Rel 4 for HRT-style systems questions.
- **Beej's Guide to Network Programming** (https://beej.us/guide/bgnet/html/split/), sections "What is a socket" and "System calls or bust". Free. Rel 3.
- **Drepper, What Every Programmer Should Know About Memory** (https://akkadia.org/drepper/cpumemory.pdf). Free, but 2007 and about 100 pages. Reference only.

### Order book
- **WK Selph, How to Build a Fast Limit Order Book** (archived 2011): https://web.archive.org/web/20110219163448/http://howtohft.wordpress.com/2011/02/15/how-to-build-a-fast-limit-order-book/ . Price-level tree plus per-level linked lists, O(1) cancel. Free (Wayback Machine). Rel 4. The canonical short write-up. GitHub order-book repos (for example brprojects/Limit-Order-Book, 225 stars) are code without explanation, so do not link them.

### Probability (for quant-dev roles that include it)
1. **Dirk Bester, An Interview Primer for Quantitative Finance** (dwcoder/QuantitativePrimer): https://github.com/dwcoder/QuantitativePrimer/blob/master/src/QuantitativePrimer.pdf . Real interview questions with worked answers. Free (CC BY-SA). 2019. 1.6k stars. Rel 4.
2. **Chris Piech, Probability for Computer Scientists (Stanford CS109)**: https://chrispiech.github.io/probabilityForComputerScientists/en/ . Free. Rel 3. Reference for counting, conditional probability and expectation.
3. **QuantGuide**: https://www.quantguide.io/ . **Partially free, free account required.** Free accounts see non-premium questions. Premium questions, hints and detailed solutions for every question cost $20/mo (billed annually) or $35/mo (pricing page). Rel 4 as practice. Disclose the gating.

### OCaml (conditional or defer)
- **Real World OCaml** (https://dev.realworldocaml.org/toc.html). Free online. Jane Street states that OCaml earns no interview bonus. Library-only, for after an offer or for OCaml-specific roles.

---

## 4. Frontend

1. **Front End Interview Handbook**: https://www.frontendinterviewhandbook.com/ (repo yangshun/front-end-interview-handbook: 44k stars, pushed Oct 2026). Interview formats, trivia answers, JS coding and an intro to frontend system design. Free ("completely free to read"). Now part of GreatFrontEnd, with upsell banners. Rel 5.
2. **GreatFrontEnd Front End System Design Playbook**: https://www.greatfrontend.com/front-end-system-design-playbook . RADIO framework, common mistakes, cheatsheet. **Access not personally verified**: the site returns a Vercel bot checkpoint (429) to curl and WebFetch. Search snippets say the playbook is "entirely free" and that practice questions are mixed free and Premium (for example the Netflix design is Premium). Treat it as Partially free and **verify in a browser before linking**. Rel 5. The handbook's own system-design page now points to this playbook as the latest version.
3. **web.dev Core Web Vitals**: https://web.dev/articles/vitals , plus /articles/lcp, /articles/inp, /articles/cls. Thresholds are present (LCP 2.5 s, INP 200 ms, CLS 0.1). Free. Official. Rel 4. Optional: /articles/rendering-on-the-web (SSR, CSR, hydration trade-offs).
4. **javascript.info, Event loop: microtasks and macrotasks**: https://javascript.info/event-loop . Free. Rel 4. The classic output-prediction topic. (The MDN Event_loop guide URL now 404s. MDN Critical rendering path is at /docs/Web/Performance/Guides/Critical_rendering_path and returns 200.)
- sudheerj javascript- and reactjs-interview-questions (27.7k and 44.9k stars, active Aug and Oct 2026). Already used. Keep.
- patterns.dev could not be fetched (connection failure). Not verified.

---

## 5. Data engineering

1. **DataLemur SQL interview questions**: https://datalemur.com/sql-interview-questions . **Partially free.** Most listed questions are open, and some carry a Premium 🔒 tag. Premium is $15/mo or $60/yr. Rel 5 for SQL rounds. The free SQL tutorial is at /sql-tutorial. Note: a SQL-practice platform, not data-engineering specific.
2. **Zach Wilson, How to pass data engineering SQL interviews in big tech**: https://blog.dataexpert.io/p/how-to-pass-data-engineering-sql . Screener versus onsite, windows, LEFT JOIN/IS NULL, minimizing scans, EXPLAIN, indexes, partitioning. Free (confirmed not paywalled). Mar 2025. Rel 5. **The sister "data modeling round" post is Paid** (paywalled), so do not link it as free.
3. **Kimball Group, Dimensional Modeling Techniques**: https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/ . Specific pages: grain (/grain/) and SCD Type 2 (/type-2/). Free. Rel 5 for modeling rounds. The authoritative short definitions.
4. **Tyler Akidau, Streaming 101 and 102** (O'Reilly Radar): https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/ and https://www.oreilly.com/radar/the-world-beyond-batch-streaming-102/ . Event time versus processing time, windowing, watermarks. Free. 2015–16 but foundational. Rel 4.
- **DataExpert-io/data-engineer-handbook**: 45k stars, Aug 2026. Its `interviews.md` is a roughly 100-word link list that points mostly to the author's own videos and posts, with mixed free and paid access. Use as a pointer only, not as a primary resource.
- **StrataScratch**: Partially free. The free tier has "limited features"; full access is $24/mo or $139/yr. Lower priority than DataLemur.

---

## 6. Solutions engineering and FDE

### FDE
1. **The Pragmatic Engineer, What are Forward Deployed Engineers, and why are they so in demand?**: https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers . Origins at Palantir, FDEs at OpenAI and Ramp, "How FDEs differ from Solutions Engineers", hiring. **Free since Nov 2026** (previously paid; full text, about 6.8k words). Aug 2025. Rel 4 for role understanding and "why FDE" answers.
2. **Palantir, Forward Deployed Software Engineer, New Grad (Lever posting)**: for example https://jobs.lever.co/palantir/e500bcf3-19d8-4d3c-b340-4d76e4a55b40 . Employer-confirmed role description: embed with customers, build custom apps and LLM workflows, own end to end, 25–50% travel, required proficiency in one language, graduating Dec 2026 or Spring 2027. Free. Rel 4 for eligibility and expectations, not interview format. Postings rotate, so re-check before linking. The "Dev versus Delta" blog (blog.palantir.com/dev-versus-delta-demystifying-engineering-roles-at-palantir-ad44c2a6e87) returned 403 and is **unverified**. The decomposition round is described only by third-party and candidate sources.
3. **OpenAI, Interview Guide**: https://openai.com/interview-guide/ . Employer-confirmed. Skills assessments vary by team (pair coding, take-homes); finals are 4–6 hours with 4–6 people; **AI-tool rules vary by interview, so ask the recruiter**. Free. Rel 4. Pair it with **Anthropic, Guidance on Candidates' AI Usage** (https://www.anthropic.com/candidate-ai-guidance).
4. **alexeygrigorev field guide, FDE analysis**: `role/06-fde.md` in the repo from section 1. Built from 277 FDE postings: customer work in 91%, discovery and scoping in 69%, evals and monitoring in 66%. Free. Rel 3. Covers posting expectations, not interview prevalence.
- a16z, "Trading Margin for Moat" (https://a16z.com/services-led-growth/, Jun 2025). Investor perspective. Context only.

### Solutions engineer (gap: no strong free interview guide found)
1. **NAASE (North American Association of Sales Engineers), 5 Essential Tips to Ace Your Sales Engineer Interview**: https://sales-engineering.org/5-essential-tips-to-prepare-for-your-sales-engineer-interview/ . May 2025. Free. Rel 3. Its useful part is the demo section: confirm the panel, problem, access and time, then build the demo around a customer scenario and outcomes. Discovery guidance is thin.
2. **We The Sales Engineers, How To Prepare for A Customer or Interview Demo** (podcast episode page): https://wethesalesengineers.com/show319 . Problem-summary slide from discovery, storylines per stakeholder, cut features, lightbulb moments, dry runs. Appears free. No date shown. Rel 3.
- Everything else found was an SEO question list (Teal, DigitalDefynd, startup.jobs) or paid courses (Exponent SA and FDE modules, Educative, igotanoffer, Prepfully). Record this as a gap. A short original prep checklist (discovery questions, demo structure, objection handling) may be justified under the "no suitable external resource" exception, pending owner approval.

---

## 7. ByteByteGo (access status)

- **ByteByteGoHq/system-design-101**: https://github.com/ByteByteGoHq/system-design-101 . 91k stars, last commit 2025-04-04. The README is now only a table of contents, with 419 links to **https://bytebytego.com/guides/** (about 400 free visual guides by category). Free. Rel 4 as quick visual explanations. Link a specific guide, not the repo.
- **Free course chapters.** The site's own page data marks each chapter `free:true` or `free:false`, and the free chapters' text loaded without login:
  - System Design Interview (14 of 31 free): scale-from-zero-to-millions-of-users, back-of-the-envelope-estimation, a-framework-for-system-design-interviews, design-a-rate-limiter, design-consistent-hashing, design-a-key-value-store, design-a-url-shortener, design-a-web-crawler, design-a-news-feed-system, design-a-chat-system, design-youtube, hotel-reservation-system, real-time-gaming-leaderboard. URL pattern: https://bytebytego.com/courses/system-design-interview/<slug>
  - Object-Oriented Design Interview (3 free): what-is-an-object-oriented-design-interview, a-framework-for-the-ood-interview, design-a-parking-lot.
  - ML System Design Interview (4 of 11 free): visual-search-system, youtube-video-search, video-recommendation-system, personalized-news-feed.
  - GenAI System Design Interview (2 of 11 free): introduction-and-overview, gmail-smart-compose.
  - Everything else is **Paid**. Label each course as Partially free and link only the free chapters. Free flags can change, so re-check before publishing.
- **Newsletter** (blog.bytebytego.com): Partially free (Substack, with paid deep dives). **YouTube**: free.

---

## Rejected and why

- **llmgenai/LLMInterviewQuestions**: questions are free but answers sit behind a paid course (a 50%-off coupon is in the README).
- **Hugging Face LLM course**: a full course. Use the HF tokenizer docs page instead.
- **Made With ML**: a full MLOps course (50k stars, Mar 2026). Not default prep.
- **chiphuyen/machine-learning-systems-design**: 2019 content, last pushed 2023. Superseded by AIMLInterviews MLSD and the ByteByteGo free chapters.
- **AI Engineering book, Designing ML Systems, Heard on the Street, the "Green Book" (A Practical Guide to Quantitative Finance Interviews)**: paid books. Never label them free.
- **QuantNet forums**: Cloudflare-blocked to automated checks. Forum threads are unvetted candidate reports.
- **Mechanical Sympathy blog**: mostly 2011–2014. Covered by Algorithmica and the CppCon talks.
- **C++ interview-question repos**: none were credible. Devinterview-io/cpp-interview-questions has 20 stars and a 2024 last push; huihut/interview is in Chinese. Use LearnCpp and cppreference sections instead.
- **mikinty/Trading-Interview-Questions**: thin and unfinished chapters.
- **Jane Street Puzzles**: monthly puzzles, not interview prep, and Jane Street says SWE interviews avoid puzzles.
- **Optiver career hub**: no engineering interview guidance found.
- **Lilian Weng agent post, Chip Huyen 2023 production post**: good but superseded by newer posts already shortlisted.
- **Third-party FDE and SE "guides"** (Exponent, Educative, Scaler, techinterview.org, igotanoffer, Prepfully, Teal, DigitalDefynd): paid, SEO-style, or unsourced claims such as "four in ten pass decomposition".
- **amitshekhar question repo as primary**: answers are mostly self-promotional links. Secondary only.
- **DataExpert "data modeling round" post**: paywalled.
- **StrataScratch as primary**: the free tier is too limited compared with DataLemur.
- **DopplerHQ/awesome-interview-questions**: archived, link list only.
