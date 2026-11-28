# Phase E content review: ai-people

Automated review (Claude), 2026-11-27. Not a human expert review. Code run with `python3 -I`; sources fetched where listed.

## ai-engineering.ts

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| 1 Tokens | "model never sees individual characters": too absolute (byte-level fallbacks exist) | "usually works on multi-character tokens" | HF tokenizer summary | — |
| 3 Attention | Missing softmax/scaling; "cost grows" vague | Scaled dot products + softmax; every token vs earlier tokens, compute and memory grow with length | Illustrated Transformer; Anthropic context engineering (n² relationships) | Interviewer may expect KV-cache detail (follow-up covers prefill) |
| 4 Context window | Degradation claim unqualified; no "lost in the middle" | Gradual recall degradation ("context rot"); middle-position effect, varies by model | Anthropic context engineering | Lost-in-the-middle magnitude is model-dependent and shrinking in newer models |
| 5 Hallucination | "Lowering randomness" listed as a hallucination fix | Temperature makes output consistent but does not stop confident errors | Eugene Yan patterns | — |
| 6 Prompt/RAG/FT | Omitted fine-tuning cost | Needs training set and evaluation | applied-llms.org | — |
| 7 Sampling | Question asks "other settings"; answer only covered temperature; no source | Added top-k, top-p, max tokens, one-at-a-time, some models do not expose settings; source added | HF "How to generate text" | — |
| 10 Hybrid | Merge method unnamed | e.g. reciprocal rank fusion | Pinecone rerankers; Anthropic Contextual Retrieval (rank fusion) | — |
| 11 RAG eval | "recall or precision at k" imprecise | recall@k defined; precision/MRR where ranking matters | Hamel evals FAQ | — |
| 12 Permissions | Permission changes not covered | Propagate permission changes | — (editorial) | — |
| 13 Tool calling | Source URL 308-redirects | Updated to developers.openai.com cookbook URL; content verified ("API will not actually execute") | OpenAI cookbook | — |
| 14 Workflow vs agent | Unsupported claim "many production systems are workflows…" | Replaced with article's guidance: agents for open-ended tasks, cost/compounding errors, start simplest | Anthropic Building effective agents | — |
| 16 Human approval | Overclaimed: hijacked agent "cannot act without a person noticing" | Gated actions cannot complete unseen; approval fatigue caveat; OWASP LLM06 source added | OWASP LLM06:2025 | — |
| 19 LLM judge | Agreement metric too simple | Report failure-catch and pass rates separately (raw agreement misleads when failures rare) | Hamel LLM-as-judge | Bias list (verbosity, self-preference, position) from literature, not this source |
| 20 Regression | Ignored nondeterminism | Run important cases more than once | — (editorial) | — |
| 25 Prompt injection | Filtering presented as equal mitigation; no adversarial testing | Filtering "as an extra layer"; adversarial testing; OWASP "unclear fool-proof prevention exists" | OWASP LLM01:2025 | — |
| 26 Agent risk | "Excessive agency" not tied to OWASP name | Named OWASP LLM06:2025 Excessive Agency | OWASP Top 10 2025 list; Willison lethal trifecta | — |
| 29 Support agent | Relied on model "confidence" | Hand off on out-of-policy/uncertain classification; do not rely on self-reported confidence | — (editorial) | — |
| 32 API integration | Code retried only TimeoutError while text says rate-limit errors | Catches TimeoutError/ConnectionError with comment to use SDK error types; text adds jitter, Retry-After | Ran code (retries then succeeds) | — |

Code checked: Q2 cosine prints 0.5; Q24 prints high; Q32 retry verified. Reviewed 33 questions; no issues found in the others. Removals: none.

## customer-scenarios.ts

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| 26 One customer → many | Implied FDE work always feeds the product; source's 2026 update says most FDEs do not contribute back to platforms | Qualified by employer; suggest asking | Pragmatic Engineer FDE article | — |
| 27 Why forward deployed | Travel stated as universal; no warning against inventing experience | "often some travel"; use a real example, do not invent customer experience | Pragmatic Engineer (travel common, varies: ~25–50%) | — |
| 28 SE vs FDE | Distinction already responsibilities-based, no universal pre/post-sales split (kept) | "real, specific experience" | — | Title meanings vary by employer |

Also verified: OAuth source (Okta illustrated guide, "key card" analogy for tokens), AWS Well-Architected six pillars and URL, OWASP Top 10 link. No sales-training fluff found requiring removal. Reviewed 28 questions; no issues found in the others. Removals: none.

## behavioral.ts

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| 3 Amazon LPs | "Candidates report LP questions in most rounds": unsourced | Now cites Amazon's interview guide (LP-based behavioral questions in phone screen and loop) | aboutamazon.com interview guide | Source field still points to LP page; guide is linked in Q1 |
| 9 Failure | Meta guidance claimed without source | Added Meta Careers source (verified "how you learned, improved and grew… is valued") | metacareers.com blog (2022) | Meta post dates from 2022 |

STAR and "I" guidance verified against Amazon's guide. Answers already require true stories and forbid invented numbers. Reviewed 15 questions; no issues found in the others. Removals: none.

## Human expert review still needed

Highest impact: ai-engineering Q3–Q5 (attention, long-context, hallucination explanations), Q19 (LLM-as-judge), Q25–Q26 (security mitigations); customer-scenarios Q28 (SE vs FDE distinction); behavioral Q3 (Amazon process may change).
