# Phase E content review: ML sets (reviewer "ml")

Automated review (2026-11-27), not human expert review. Numbers and code run with NumPy 2.1.3 and scikit-learn 1.6.1 (`python3 -I`). All 24 source URLs returned HTTP 200; key pages were also checked for content (see table).

## ml-fundamentals (22 questions)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q4 Bias–variance | "More complex models reduce bias but increase variance" stated as a law | Marked as a rule of thumb; noted large neural networks do not always follow it | Google MLCC overfitting | None material |
| Q5 L1/L2 | Said strength is "alpha in scikit-learn"; ignored C (inverse) in LogisticRegression/SVM. "Weight decay (an L2 penalty)" is wrong for Adam | Alpha for Ridge/Lasso (larger = stronger), C for LogisticRegression/SVM (smaller = stronger); weight decay = L2 only for plain SGD, hence AdamW | scikit-learn docstrings (LogisticRegression "Inverse of regularization strength"; Lasso objective) | Code block omits scikit-learn's 1/(2n) Lasso scaling; kept as generic pseudo-code |
| Q7 Feature selection | Permutation importance presented as reliable without caveat | Added: impurity importance favors high-cardinality features; both mislead with correlated features | scikit-learn permutation importance page (sections on cardinality bias and correlated features) | None |
| Q9 Imbalance | Omitted that weighting/resampling distorts probabilities; "often helps more than any technique" unsupported | Added calibration caveat; softened to "can help" | Google MLCC imbalanced datasets | None |
| Q10 Precision/recall | None in maths | Verified P=0.75, R=0.6, F1=0.6667, accuracy=0.994 with scikit-learn | scikit-learn metrics | — |
| Q11 ROC vs PR | "PR-AUC (average precision)" equated; "usually"; source title wrong | AP described as the usual computation; "often"; added that ROC-AUC remains useful for ranking comparison; source retitled to the precision–recall example it links | Simulation: 1% positives gave ROC-AUC 0.965 vs AP 0.493; random-score AP = 0.01 = positive rate; ties count 0.5 | None |
| Q12 Regression | MAE "robust to outliers" overstated; R² can be negative | "Less sensitive"; RMSE also in target units; R² definition with negative case | r2_score([1,2,3],[3,2,1]) = -3.0 | None |
| Q16 Trees | Random forest feature subsets per tree implied (scikit-learn samples per split); boosting "correcting errors" vague; "usually best" | Per-split feature subsets; boosting fits loss gradient (residuals for squared error); "often" | scikit-learn ensembles; RandomForestClassifier max_features default "sqrt" | Tabular superiority of boosting is empirical, not universal |
| Q17 k-means | No local-minimum caveat; k-means++ not explained though a follow-up asks; "round clusters" | Inertia + local minimum; one-line k-means++ (D² sampling); "convex" | scikit-learn clustering page ("convex and isotropic"); KMeans default init k-means++ | None |
| Q18 Gradient descent | Did not answer what batch size changes; Adam description incomplete | Added batch-size effects (noise, memory, learning-rate retuning), momentum, Adam = momentum + per-parameter step | Google MLCC gradient descent | Batch-size/generalization effects vary by setup; kept general |
| Q20 A/B test | Randomization vs analysis unit; peeking without alternative; p-value definition lacked assumptions | Analyze at the randomization unit; sequential testing for early monitoring; p-value "at least as large as observed… assumptions hold", not effect size | None external (standard statistics) | No source link on this answer |
| Q21 k-means code | None | Ran code: output matches comment; same result for seeds 0–19; O(n·k·d) per iteration correct | NumPy run | Broadcasting uses O(n·k·d) memory (acceptable for an interview sketch) |

Reviewed 22 questions; no issues found in the others (Q1–Q3, Q6, Q8, Q13–Q15, Q19, Q22). Removals: none.

## ml-system-design (16 questions)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q1 Approach | Seniority claim unattributed; no "state assumptions / no single architecture" | Attributed to Hello Interview (page states it); added "confirm with your recruiter"; added assumptions and "rarely one correct architecture" | Hello Interview intro page (text confirmed) | Third-party claim, not employer-official |
| Q4 Model registry | MLflow "stages" are superseded by aliases; traceability overstated | Alias (e.g. "champion") instead of stages; traceability only if version is logged per prediction | MLflow Model Registry page (aliases, @champion) | None |
| Q5 Feature store | No cost/trade-off | Added operational cost | Feast docs | None |
| Q7 Distributed training | FSDP framed as model sharding outside data parallelism; "communication becomes the main cost" absolute | DDP: full replica, all-reduce averaged gradients; FSDP/ZeRO = sharded data parallel with just-in-time parameter gathering; tensor vs pipeline parallel distinguished; activation checkpointing; "often the bottleneck" | PyTorch DDP URL returns 200 but page text could not be extracted (JS-rendered); relied on established PyTorch design | Highest-impact item to confirm against PyTorch DDP/FSDP docs |
| Q10 Safe deployment | Canary and A/B conflated; shadow-mode limitation missing | Canary for operational health, A/B for effect; shadow cannot measure user reaction | — | None |
| Q12 Drift | "Data drift (covariate shift)" equated; label shift missing | Defined P(X), covariate shift, label shift P(Y), concept drift P(Y|X); noted terms used loosely; not every shift hurts; concept drift invisible in inputs | Chip Huyen post (definitions confirmed verbatim in meaning) | None |
| Q15 Recommendation | Presented as the design | "A common design uses two stages" | — | None |
| Q16 Fraud | Missing selective-labels failure mode | Blocked transactions never get labels; keep a randomized or reviewed sample | — | None |

Reviewed 16 questions; no issues found in the others (Q2, Q3, Q6, Q8, Q9, Q11, Q13, Q14). Removals: none. No questions added.

Training–serving skew anchor `#training-serving_skew` exists; Google's definition (difference between training and serving performance, from data handling differences, data change, feedback loops) matches the answer.

## Human expert review still needed

Highest impact first: ml-system-design Q7 (DDP/FSDP mechanics, docs text not machine-verified); ml-fundamentals Q20 (A/B testing and p-values, no linked source); Q5 (weight decay vs L2 with Adam); Q11 (ROC vs PR framing); ml-system-design Q12 (drift terminology varies across sources). All answers still need human review in principle.
