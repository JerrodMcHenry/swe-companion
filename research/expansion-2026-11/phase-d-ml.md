# Phase D: Machine Learning Engineer verification

Date checked: **2026-11-27** for every row unless a snapshot date is given. Methods: public job board APIs (Greenhouse `boards-api.greenhouse.io`, Ashby `api.ashbyhq.com/posting-api`, `amazon.jobs/en/search.json`, Netflix and Microsoft Eightfold `api/apply/v2` / `api/pcsx`), curl plus HTML text extraction, the Wayback Machine (Citadel Securities returns 403 live), and WebFetch for metacareers.com (curl gets an error page). No binaries were downloaded. Quotes are verbatim and under 25 words.

Labels: **Official** (employer page) · **Job posting** · **Candidate-reported** · **Third-party** · **Editorial**.
Verdicts: **VERIFIED** · **PARTLY** · **UNVERIFIED** · **FALSE** · **NOT FOUND**.

Scope: Machine Learning Engineer, also titled Software Engineer (Machine Learning) or ML Engineer. Applied AI Engineer is excluded (the site covers it in `ai-engineering.ts`), and so is Research Scientist. At quant firms, "ML Researcher" roles count as research and are excluded. ML infrastructure, performance and engineering roles are included. "Research Engineer" titles whose duties are ML systems work are marked *borderline*.

---

## A. Interview expectations

### A1. Round types

| Claim | Label | Source | Exact quote | Verdict |
|---|---|---|---|---|
| Common technical ML modules: DSA coding, ML coding, ML breadth, (ML) system design, behavioral | Third-party | alirezadir/AIMLInterviews README | "the most commonly used interview modules for technical ML roles at different companies" (table: DSA Coding, ML Coding, ML Breadth, System Design, Behavioral & Leadership) | VERIFIED as one author's framing (repo has 10.6k stars, pushed 2026-10-08, MIT). Not an employer statement |
| The ML breadth round covers general ML concepts and is fairly uniform | Third-party | AIMLInterviews `src/ml-fundamental.md` | "the breadth interviews tend to follow a pretty similar structure and coverage amongst different interviewers and interviewees" | VERIFIED |
| ML coding means implementing algorithms such as logistic regression or k-means from scratch | Third-party | AIMLInterviews `src/MLC/ml-coding.md` | Rows: "Logistic regression with gradient descent", "k-means clustering", "k-nearest neighbors", "Numerically stable softmax and cross-entropy" | VERIFIED. Every row has a Python answer. The company tags in the table are the author's own and are not evidence |
| The DSA bar matches SWE | Job posting | Google SWE II (Search AI Answers Quality), min quals | "1 year of experience with data structures and algorithms. 1 year of experience implementing core ML concepts." | PARTLY. Google's ML-flavoured SWE postings list DSA as a minimum. No employer page says "the same bar as SWE" |
| Chip Huyen: ML candidates need SWE fundamentals | Third-party | MLIB 2.1.1.1 | "Aspects of computer science that are more relevant to ML include algorithms, data structures, time/space complexity, and scalability." | VERIFIED (about 2021 content) |
| Meta ML full loop length | Official | https://www.metacareers.com/ML-prep-onsite/ (via WebFetch) | "The full loop interview will consist of up to six 45-minute conversations with our engineers." | VERIFIED. The page does **not** list round types. It links a "Meta Full Loop Interview Guide" PDF, which was not downloaded |
| Meta ML initial screen | Official | https://www.metacareers.com/ML-prep-initial/ (via WebFetch) | "The initial interview is a 45-minute conversation with an engineer" | VERIFIED. Content is not specified beyond "assess your technical skills" |
| Meta MLE loop is 2 coding, 1–2 MLSD and behavioral, with one coding round possibly AI-assisted | Candidate-reported / Third-party | Glassdoor and 1point3acres (search snippets); roles.md §4 | — | UNVERIFIED in this pass. The pages were not read directly. Keep it labelled Candidate-reported, "varies" |
| Jane Street ML Engineer (intern): Zoom coding, then 2–4 onsite rounds, 1–2 of them on ML engineering | Job posting | JS MLE posting 8611307002 (NY), 8648474002 (London) | "after your initial technical coding interview over Zoom, you'll have an on-site interview with 2-4 technical rounds, including 1-2 dedicated to assessing ML engineering skills" | VERIFIED. This is an **internship** posting |
| Amazon (adjacent role, Applied Scientist): 60-minute phone screen(s); loop of four 55-minute interviews covering coding, ML depth/breadth, tech talk and Leadership Principles | Official | https://www.amazon.jobs/content/en/how-we-hire/applied-scientist-interview-prep | "Your loop will include four 55-minute interviews"; topics "Problem solving and coding", "Knowledge depth and breadth", "Tech talk" | VERIFIED for **Applied Scientist** only. Amazon has no MLE prep page (`machine-learning-engineer-interview-prep` returns 404). Amazon MLE postings use SDE-style qualifications (see B) |
| Google official MLE-specific interview guidance | Official | — | — | NOT FOUND. The web search returned only third-party pages, which say Google MLEs are often hired through the SWE process (Exponent, Interview Kickstart: Third-party) |
| Behavioral round present | Official (Amazon AS); Third-party | Amazon AS prep; AIMLInterviews | "A significant portion of the conversation will focus on how you've demonstrated our Leadership Principles" | VERIFIED for Amazon AS |

### A2. Seniority (entry-level and the ML system design round)

| Claim | Label | Source | Exact quote | Verdict |
|---|---|---|---|---|
| Entry-level ML roles rarely include MLSD; it is common by mid-level and the norm at senior level | Third-party | Hello Interview, ML System Design in a Hurry: Introduction, https://www.hellointerview.com/learn/ml-system-design/in-a-hurry/introduction | "Entry-level ML roles are rare (unless you have an advanced degree), and they usually exclude an ML system design component." … "By mid-level, ML system design interviews become more common, and at the senior level they are the norm." | VERIFIED (second quote split, each part under 25 words) |
| Some companies give MLSD only to senior candidates | Third-party | MLIB 2.1.1.4 Junior vs senior roles | "a few companies have told me that they only give the machine learning systems design questions … to more senior candidates" | VERIFIED (about 2021, anecdotal) |
| Amazon requires coding challenges only for junior candidates | Third-party | MLIB 2.1.1.4 | "Amazon, for example, only requires coding challenges for junior candidates." | VERIFIED as the book's claim (about 2021). Dated, do not publish as current |
| Hello Interview MLSD excludes research-engineering interviews | Third-party | HI intro | "This guide is not useful for AI/ML research engineering interviews." | VERIFIED |

**Seniority summary (Editorial):** for entry-level candidates, prepare for coding (SWE bar), ML fundamentals/breadth and behavioral. Mark MLSD "mid-level and above; sometimes asked at entry level". Most current MLE-titled postings at site employers ask for 2–5+ years (B). Explicit entry-level MLE evidence is mostly **internships** (Jane Street, Perplexity, Optiver Shanghai, Amazon UK SDE Intern (ML)) and Google's early-career SWE II roles with ML requirements.

### A3. Degree expectations

| Claim | Label | Source | Exact quote | Verdict |
|---|---|---|---|---|
| MLE does not require a PhD | Third-party | MLIB 2.1.1.5 | "No other roles, including the popular ML engineer, require a Ph.D." | VERIFIED (author's view, about 2021) |
| Postings at site employers mostly ask for a Bachelor's or equivalent; some list Master's/PhD as preferred | Job posting | see B | e.g. Anthropic "Bachelor's degree or an equivalent combination of education, training, and/or experience" | VERIFIED. Exceptions: Google "Software Engineer, AI/Machine Learning, PhD, Early Career" requires a PhD, and OpenAI MLE postings list Master's/PhD under "might thrive" or "might look like" (preferred-style framing) |

---

## B. Employer evidence (14 site employers)

Counts come from title filters on the API output on the access date. Fuzzy-search counts (Google, Microsoft, Apple) are the search tool's "matched" numbers and **overcount**.

| Employer | ML-engineering postings? | Evidence (exact title, location, minimums) | Label | Verdict |
|---|---|---|---|---|
| **Google** | Yes | 733 results for "machine learning engineer" (fuzzy). Titled examples: "Machine Learning Engineer, AI/ML Expert for Agents and TrustGraph, Google Ads": "Bachelor's degree or equivalent practical experience. 2 years of experience with software development…" plus "1 year of experience with end-to-end machine learning". Early career: "Software Engineer II, Search AI Answers Quality" lists 1 yr software dev, 1 yr DSA, "1 year of experience implementing core ML concepts". "Software Engineer, AI/Machine Learning, PhD, Early Career, 2027 Start" requires a PhD | Job posting | VERIFIED. No official MLE interview page found |
| **Amazon** | Yes | 58 hits for the exact phrase. "Machine Learning Engineer" (Seattle, 10595562): "3+ years of non-internship professional software development experience". "Machine Learning Engineer II, Amazon Music" adds "Bachelor's degree or foreign equivalent…". Entry: "2027 Software Dev Engineer Intern (Machine Learning) - UK" requires enrolment in a Bachelor's or above plus CS fundamentals | Job posting | VERIFIED. Official prep exists only for Applied Scientist (A1) |
| **Meta** | Likely; postings not verifiable | Official ML prep pages exist (A1). Search finds "Software Engineer, Machine Learning" listings on metacareers.com, but every job URL returned an error or 404 to curl and WebFetch. Third-party snippets cite ~2 yrs PyTorch/TensorFlow for one posting and 6+ (or 3+ with PhD) for another | Official (prep); Third-party (postings) | PARTLY. The interview prep is official; the posting minimums are UNVERIFIED |
| **Apple** | Yes (experienced) | 192 results. "Machine Learning Engineer - Experimentation": "Degree in Computer Science, Statistics, Applied Math or related field. 5+ years of industry experience…". Most sampled titles are Senior or ML Research Engineer | Job posting | VERIFIED (one posting read in full) |
| **Microsoft** | Yes (senior) | 566 fuzzy hits. Top MLE titles are all Senior or Principal. "Senior Machine Learning Engineer - RAI": "Bachelor's Degree in Computer Science or related technical field AND 4+ years technical engineering experience…" | Job posting | VERIFIED. No non-senior MLE title found in the top results |
| **Netflix** | Yes (L4/L5+) | 57 hits for "machine learning". MLE-titled: "Machine Learning Engineer (L4/L5) - Studio Media Algorithms", "Machine Learning Engineer 5 - Ads Signals & Targeting", "MLE 5 - Ads Platform Engineering", "MLE 5 - Decisioning & Optimization", "AI Software Engineer (L5) - Machine Learning". The rest are ML Scientist (excluded) | Job posting | VERIFIED. Levels L4 and above only |
| **OpenAI** | Yes | 876 total. MLE-titled: "Machine Learning Engineer, Monetization AI/ML" ("Master's/ PhD degree in Computer Science, Machine Learning, Data Science, or a related field." under "You might thrive…"), "MLE, API Multicloud" ("3+ years of professional engineering experience"), "MLE, Implicit Signals", "MLE, Core Experimentation" (Seattle), plus "Software Engineer, Monetization ML Infrastructure" ("7+ years") | Job posting | VERIFIED |
| **Anthropic** | Yes (no "MLE" title) | 634 total. ML-engineering titles: "Machine Learning Infrastructure Engineer, Safeguards Research", "ML/Research Engineer, Safeguards" ("4+ years of experience in ML engineering, research engineering, or applied research"), "Staff+ Software Engineer, Account Abuse (Machine Learning)", "Staff+ SWE, ML Inference Path", "Staff+ SWE, ML Sampling Path". Most other ML titles are "Research Engineer" (research-leaning). Standard logistics line: "Bachelor's degree or an equivalent combination…" | Job posting | VERIFIED. Experienced and Staff+ only |
| **Perplexity** | Yes | 150 total. "Member of Technical Staff (Machine Learning Engineer, Search)" (Belgrade; "Minimum of 5 years of working on search or recsys-related projects"), "(ML Engineer, Recommendations & User Modeling)" (SF), "(MLE, Ranking Quality - Search)", "(MLE, Search Agent RL)", plus "Internship - Search Machine Learning Engineer" (Belgrade, London: "Previous experience … is a plus, but not required") | Job posting | VERIFIED |
| **Jane Street** | Yes (intern MLE; experienced ML perf/infra) | 219 total. "Machine Learning Engineer" (NY, London) is an **internship**: "An undergraduate or PhD student with practical experience training an ML model, working on an ML library, or optimizing an ML workflow". "Machine Learning Performance Engineer" (NY, London, HK; CUDA/GPU). "Machine Learning Compiler Engineer" (NY, London). *Borderline:* "Machine Learning Research Engineer" (training/inference infrastructure plus strong maths). Excluded: "Machine Learning Researcher" (8 postings) | Job posting | VERIFIED |
| **Citadel Securities** | Yes (snapshot) | Live careers pages return 403. Wayback snapshot 2026-09-21 of /careers/details/machine-learning-engineer/ (Miami): "design and build the next generation library for deep learning within the firm"; "2+ years of experience in machine learning and software development." The page also says opportunities "may be available from time to time", so it reads as a standing pipeline posting | Job posting (archived) | PARTLY: not confirmed live today. Excluded: "Machine Learning Researcher" |
| **Hudson River Trading** | Borderline only | 86 total, none titled ML Engineer. "AI Research Engineer" (HAIL): "kernel development, training data loading, parallelism, networking, and fault-tolerance"; "two or more years work experience building deep learning systems". Also "GPU Systems Engineer", "Applied AI Engineer" (out of scope). Excluded: AI Researcher | Job posting | VERIFIED. No MLE title; the infra-style Research Engineer is borderline |
| **Jump Trading** | Borderline (campus) | 83 total. "Campus AI Research Engineer (Full-Time)" builds "state-of-the-art ML systems", "Optimize training pipelines", "Integrate AI/ML models into production systems where latency matters". Also "Research Engineer \| AI Agents" and "Research Scientist/Engineer \| Deep Learning". Excluded: "Campus AI/ML Researcher (Intern)" | Job posting | VERIFIED. Engineering duties under a Research Engineer title |
| **Optiver** | Yes | Greenhouse board `optiverus` (146 total). "2027 Shanghai Machine Learning Engineer Summer Internship" ("Students graduating in 2028 or later"), "Senior Machine Learning Engineer" (Shanghai; ML infrastructure), "Machine Learning Performance Engineer" (NY), "Software Engineer - AI Lab" (NY; "Strong understanding of machine learning fundamentals."). Excluded: AI Researcher; "AI Engineer" is applied AI | Job posting | VERIFIED |

**Editorial reading:** every Big Tech and AI employer has MLE-type roles. At quant firms, ML engineering is concentrated in **performance, infrastructure and compiler** roles (CUDA, distributed training) or internships. The site's generic MLE fundamentals and MLSD content fits those roles less well. If any quant firm is added, Jane Street (MLE intern, with official round structure) and Optiver are the clearest cases; HRT and Jump should not get an MLE role page.

---

## C. Resources (verified content and access)

| Resource | URL | Access | Content verified | Use |
|---|---|---|---|---|
| Hello Interview, ML System Design in a Hurry | https://www.hellointerview.com/learn/ml-system-design/in-a-hurry/introduction | **Mostly free**, no login. The intro says some deeper parts have "lock icons" and need Premium | Pages fetched (all 200, 25–40k chars of text each): introduction, `in-a-hurry/delivery` (framework), `core-concepts/feature-engineering`, `/embeddings`, `/generalization`, `/evaluation`, breakdowns `problem-breakdowns/harmful-content`, `/bot-detection`, `/video-recommendations` | **Best MLSD primary.** Delivery framework plus 3 worked problems. Its evaluation page also serves ML fundamentals (offline vs online metrics) |
| ByteByteGo ML System Design Interview, free chapters | https://bytebytego.com/courses/machine-learning-system-design-interview/video-recommendation-system | **Partly free** (4 of 11 chapters; recorded in resources.md, page re-checked 200 with content) | Visual search, YouTube video search, video recommendation, personalized news feed | MLSD worked examples |
| AIMLInterviews, ML System Design chapter | https://github.com/alirezadir/AIMLInterviews/blob/main/src/MLSD/ml-system-design.md | Free (README advertises paid coaching) | 9-step framework plus sample questions (resources.md) | MLSD framework; alternative to HI |
| AIMLInterviews, ML Coding chapter | https://github.com/alirezadir/AIMLInterviews/blob/main/src/MLC/ml-coding.md | Free | Classic ML table (softmax/cross-entropy, linear and logistic regression via gradient descent, kNN, k-means…), each with a Python answer and tests | **Best for the ML coding round** |
| AIMLInterviews, ML Breadth chapter | https://github.com/alirezadir/AIMLInterviews/blob/main/src/ml-fundamental.md | Free | Mostly a topic list plus links to courses (Coursera and similar) | Topic checklist only (Rel 3). Do not link its courses |
| Chip Huyen, ML Interviews Book | https://huyenchip.com/ml-interviews-book/ | Free | No MLSD chapter (2.1.1.4 footnote points to the older 2019 MLSD repo). Relevant: **7.1 Basics** `contents/7.1-basics.html`, **7.2 Sampling and creating training data**, **7.3 Objective functions, metrics, and evaluation** `contents/7.3-objective-functions,-metrics,-and-evaluation.html`, **8.1.2 Classical ML questions** `contents/8.1.2-questions.html`, **8.3 Training neural networks**; Part I **2.1.1.4** and **2.1.1.5** for context | ML fundamentals question lists. **Most questions have no answers** (author's "About the answers" page) and the content is from about 2021 |
| Chip Huyen, Data Distribution Shifts and Monitoring | https://huyenchip.com/2022/02/07/data-distribution-shifts-and-monitoring.html | Free | Feb 7, 2022; CS 329S notes. Sections: train-serving skew, covariate/label shift, concept drift, detection, monitoring | **Best single read for drift and monitoring** (MLSD) |
| Chip Huyen, Real-time machine learning: challenges and solutions | https://huyenchip.com/2022/01/02/real-time-machine-learning-challenges-and-solutions.html | Free | Jan 2, 2022 (updated Jan 3, 2023). Batch vs online prediction stages, online features, feature stores, continual learning | MLSD depth for online prediction. Supersedes the 2020 post https://huyenchip.com/2020/12/27/real-time-machine-learning.html , which links to it |
| Made With ML, Evaluation | https://madewithml.com/courses/mlops/evaluation/ | Free | Coarse- and fine-grained metrics, confusion matrix, slicing, behavioral testing, online evaluation (A/B, canary, shadow) | Optional MLSD/evaluation reference. Part of a full course (Anyscale-branded, repo 50k stars, pushed 2026-03-04). Link the lesson, not the course |
| Made With ML, Monitoring | https://madewithml.com/courses/mlops/monitoring/ | Free | Data, target and concept drift; locating and measuring drift; alert, inspect, act | Optional. Redundant with the Chip Huyen drift post; pick one |
| Google ML Crash Course, Classification: accuracy, precision, recall | https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall | Free | Last updated 2026-01-12 | ML fundamentals metrics |
| Google MLCC, ROC and AUC | https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc | Free | Last updated 2026-05-11; covers PR curves for imbalance | ML fundamentals metrics |
| Google MLCC, Overfitting and L2 regularization | https://developers.google.com/machine-learning/crash-course/overfitting/overfitting , …/overfitting/regularization | Free | Updated 2025-12-03 and 2026-04-09 | Overfitting and regularization |
| Google, Rules of ML | https://developers.google.com/machine-learning/guides/rules-of-ml | Free | Last updated 2025-08-25; training-serving skew section, Rules #29 and #32 | Reference for skew |
| scikit-learn User Guide: model evaluation, cross-validation, common pitfalls | see D | Free | scikit-learn 1.9.1 docs | Supporting references |
| khangich/machine-learning-interview | https://github.com/khangich/machine-learning-interview | Free repo, but links to Medium (mlengineer.io) and promotes an Educative course | Last pushed **2023-08-31** | **Exclude**: stale, and it funnels to paid content |

Recommended shortlist (Editorial):
- **ML Fundamentals:** (1) Google MLCC classification pages (accuracy-precision-recall; ROC-and-AUC) plus the overfitting/L2 page; (2) AIMLInterviews ML Coding chapter; (3) ML Interviews Book 7.3 and 8.1.2 as question lists (answers not provided); (4) scikit-learn common pitfalls (leakage) as a reference.
- **ML System Design:** (1) Hello Interview MLSD in a Hurry (introduction, delivery framework, the 3 free breakdowns); (2) ByteByteGo free chapters (4); (3) Chip Huyen data distribution shifts and monitoring; (4) optionally Chip Huyen real-time ML (2022).

---

## D. Technical claims

| Claim | Source (official / authoritative) | Exact quote | Verdict |
|---|---|---|---|
| Precision and recall definitions | https://scikit-learn.org/stable/modules/model_evaluation.html#precision-recall-and-f-measures | "precision is the ability of the classifier not to label as positive a sample that is negative, and recall is the ability of the classifier to find all the positive samples" | VERIFIED |
| F1 is the harmonic mean of precision and recall | same | "The F-measure … can be interpreted as a weighted harmonic mean of the precision and recall." With β = 1, Fβ and F1 are equivalent | VERIFIED |
| Precision/recall (PR) is the better choice under heavy class imbalance | https://scikit-learn.org/stable/auto_examples/model_selection/plot_precision_recall.html | "Precision-Recall is a useful measure of success of prediction when the classes are very imbalanced." | VERIFIED |
| PR-AUC may be better than ROC-AUC for imbalanced data | https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc | "When the dataset is imbalanced, precision-recall curves (PRCs) and the area under those curves may offer a better comparative visualization of model performance." | VERIFIED. Note "may"; write it as "often more informative", not "always" |
| Accuracy is inflated on imbalanced data; balanced accuracy addresses this | https://scikit-learn.org/stable/modules/model_evaluation.html#balanced-accuracy-score | "computes the balanced accuracy , which avoids inflated performance estimates on imbalanced datasets" | VERIFIED |
| Average precision summarises the PR curve | plot_precision_recall example | "Average precision (AP) summarizes such a plot as the weighted mean of precisions achieved at each threshold" | VERIFIED |
| StratifiedKFold preserves class proportions | https://scikit-learn.org/stable/modules/cross_validation.html#stratified-k-fold | "each set contains approximately the same percentage of samples of each target class as the complete set" | VERIFIED |
| TimeSeriesSplit trains on the past and tests on the next fold | https://scikit-learn.org/stable/modules/cross_validation.html#time-series-split | "returns first \(k\) folds as train set and the \((k+1)\) th fold as test set" | VERIFIED |
| Standard K-fold assumes i.i.d. data, which time series violate | …/cross_validation.html#cross-validation-of-time-series-data | "classical cross-validation techniques such as KFold and ShuffleSplit assume the samples are independent and identically distributed" | VERIFIED |
| Data leakage definition | https://scikit-learn.org/stable/common_pitfalls.html#data-leakage | "Data leakage occurs when information that would not be available at prediction time is used when building the model." | VERIFIED |
| Avoid leakage: split first, fit preprocessing on train only, use pipelines | …/common_pitfalls.html#how-to-avoid-data-leakage | "Always split the data into train and test subsets first, particularly before any preprocessing steps." / "Never include test data when using the fit and fit_transform methods." | VERIFIED; the page also says pipelines are "a great way to prevent data leakage" |
| L1 drives weights to exactly zero (sparsity, feature selection) | https://developers.google.com/machine-learning/glossary#l1-regularization ; https://scikit-learn.org/stable/modules/linear_model.html#lasso | "L1 regularization helps drive the weights of irrelevant or barely relevant features to exactly 0" / Lasso "is able to set coefficients exactly to zero" | VERIFIED |
| L2 shrinks large weights toward zero but not to zero | https://developers.google.com/machine-learning/glossary#l2-regularization ; MLCC …/overfitting/regularization | "helps drive outlier weights … closer to 0 but not quite to 0" | VERIFIED |
| Regularization rate trades off simplicity and overfitting | MLCC L2 page (Page Summary) | "higher values leading to simpler models and lower values increasing the risk of overfitting" | VERIFIED (summary text on the page) |
| Overfitting definition | https://developers.google.com/machine-learning/crash-course/overfitting/overfitting | "creating a model that matches ( memorizes ) the training set so closely that the model fails to make correct predictions on new data" | VERIFIED |
| Training-serving skew definition and causes | https://developers.google.com/machine-learning/guides/rules-of-ml (Training-Serving Skew section) | "Training-serving skew is a difference between performance during training and performance during serving." Causes include "A discrepancy between how you handle data in the training and serving pipelines." | VERIFIED |
| Mitigation: log serving features; share code | same, Rules #29 and #32 | "save the set of features used at serving time, and then pipe those features to a log to use them at training time" / "Re-use code between your training pipeline and your serving pipeline whenever possible" | VERIFIED |
| Covariate shift, label shift, concept drift | https://huyenchip.com/2022/02/07/data-distribution-shifts-and-monitoring.html | "Covariate shift is when P(X) changes, but P(Y\|X) remains the same." / "Concept drift is when P(Y\|X) changes, but P(X) remains the same." / Label shift: "P(Y) changes, but P(X\|Y) remains the same" | VERIFIED. **Chip Huyen does not use the term "data drift"** |
| "Data drift" = covariate (feature) shift | https://madewithml.com/courses/mlops/monitoring/ | "Data drift, also known as feature drift or covariate shift, occurs when the distribution of the production data is different from the training data." | VERIFIED (Third-party). Define data drift as input distribution change and cite Made With ML; cite Chip Huyen for concept drift |
| Feature store purpose: consistent features for training (offline) and serving (online), point-in-time correctness | https://docs.feast.dev/ | "Manage an offline store (batch training) and an online store (real-time serving) under one feature server." / "Generate point-in-time correct feature sets to ensure no future data leaks into model training." | VERIFIED (open-source project docs) |
| Feature store, managed-cloud version | https://cloud.google.com/vertex-ai/docs/featurestore/latest/overview (redirects to docs.cloud.google.com/gemini-enterprise-agent-platform/…/featurestore/latest/overview) | "a managed, cloud-native feature store service … streamlines your ML feature management and online serving processes" | VERIFIED. The product was renamed "Feature Store on Gemini Enterprise Agent Platform", so prefer the Feast link for stability |
| Feature stores help keep streaming features consistent between training and prediction | Chip Huyen real-time ML 2022 | "A feature store for managing materialized features and ensuring consistency of stream features during training and prediction." | VERIFIED (Third-party) |

---

## E. Limitations

- Meta posting pages could not be fetched (errors or 404 to curl and WebFetch), and the Full Loop Interview Guide PDF was not downloaded.
- Citadel Securities was confirmed only through a 2026-09-21 Wayback snapshot.
- The Google, Microsoft and Apple counts come from fuzzy search. I read one or two postings each, not all.
- The Meta loop composition (coding, MLSD, behavioral) was not re-read in this pass (candidate-reported, roles.md).
- The Chip Huyen ML Interviews Book is about 2021 content without answers.

## Sources

| URL | Label | Accessed / date |
|---|---|---|
| https://www.hellointerview.com/learn/ml-system-design/in-a-hurry/introduction (and the 8 subpages in C) | Third-party | 2026-11-27 |
| https://www.metacareers.com/ML-prep-onsite/ , https://www.metacareers.com/ML-prep-initial/ | Official | 2026-11-27 (WebFetch) |
| https://www.amazon.jobs/content/en/how-we-hire/applied-scientist-interview-prep | Official | 2026-11-27 |
| https://www.amazon.jobs/en/search.json?base_query="machine learning engineer" ; /en/jobs/10595562, 10557456, 10603409, 10588762 | Job posting | 2026-11-27 |
| https://www.google.com/about/careers/applications/jobs/results/ (111957608612405958, 132867596763439814, 123087196289671878) | Job posting | 2026-11-27 |
| https://apply.careers.microsoft.com/careers/job/1970393557040458 | Job posting | 2026-11-27 |
| https://jobs.apple.com/en-us/details/200696858-1052/machine-learning-engineer-experimentation | Job posting | 2026-11-27 |
| https://explore.jobs.netflix.net/careers/job/790319186617 (+ list API) | Job posting | 2026-11-27 |
| https://api.ashbyhq.com/posting-api/job-board/openai ; jobs.ashbyhq.com/openai/80f9f564…, 5acf4854…, a01fc9ed…, 9d4d2727…, 348ac6bf… | Job posting | 2026-11-27 |
| https://boards-api.greenhouse.io/v1/boards/anthropic/jobs (5364804008, 4949336008, 5436293008) | Job posting | 2026-11-27 |
| https://api.ashbyhq.com/posting-api/job-board/perplexity (0190699f…, affd3040…, 9246cf02…, 71168628…) | Job posting | 2026-11-27 |
| https://boards-api.greenhouse.io/v1/boards/janestreet/jobs (8611307002, 8648474002, 7449077002, 6485460002) | Job posting | 2026-11-27 (updated 2026-11-25) |
| http://web.archive.org/web/20260921194001/https://www.citadelsecurities.com/careers/details/machine-learning-engineer/ | Job posting (archived) | snapshot 2026-09-21 |
| https://boards-api.greenhouse.io/v1/boards/wehrtyou/jobs (7326870) | Job posting | 2026-11-27 |
| https://boards-api.greenhouse.io/v1/boards/jumptrading/jobs (8052313) | Job posting | 2026-11-27 |
| https://boards-api.greenhouse.io/v1/boards/optiverus/jobs (8633966002, 8371647002, 8405271002, 8226163002) | Job posting | 2026-11-27 |
| https://github.com/alirezadir/AIMLInterviews (README, src/MLC/ml-coding.md, src/ml-fundamental.md, src/MLSD/ml-system-design.md) | Third-party | pushed 2026-10-08 |
| https://huyenchip.com/ml-interviews-book/ (2.1.1.1, 2.1.1.4, 2.1.1.5, 2.2.1, 6.1, 7.1, 7.3, 8.1.2) | Third-party | about 2021 |
| https://huyenchip.com/2022/02/07/data-distribution-shifts-and-monitoring.html | Third-party | 2022-02-07 |
| https://huyenchip.com/2022/01/02/real-time-machine-learning-challenges-and-solutions.html ; https://huyenchip.com/2020/12/27/real-time-machine-learning.html | Third-party | 2022-01-02 / 2020-12-27 |
| https://madewithml.com/courses/mlops/evaluation/ , /monitoring/ , /splitting/ | Third-party | repo pushed 2026-03-04 |
| https://bytebytego.com/courses/machine-learning-system-design-interview/video-recommendation-system | Third-party | 2026-11-27 |
| https://github.com/khangich/machine-learning-interview | Third-party | pushed 2023-08-31 (excluded) |
| https://scikit-learn.org/stable/modules/model_evaluation.html ; /auto_examples/model_selection/plot_precision_recall.html ; /modules/cross_validation.html ; /common_pitfalls.html ; /modules/linear_model.html | Official docs | scikit-learn 1.9.1, 2026-11-27 |
| https://developers.google.com/machine-learning/guides/rules-of-ml | Official docs | updated 2025-08-25 |
| https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall ; …/roc-and-auc ; …/overfitting/overfitting ; …/overfitting/regularization | Official docs | updated 2026-01-12 / 2026-05-11 / 2025-12-03 / 2026-04-09 |
| https://developers.google.com/machine-learning/glossary (#l1-regularization, #l2-regularization, #training-serving-skew) | Official docs | 2026-11-27 |
| https://docs.feast.dev/ | Official docs (OSS) | 2026-11-27 |
| https://cloud.google.com/vertex-ai/docs/featurestore/latest/overview | Official docs | 2026-11-27 (redirects; product renamed) |
