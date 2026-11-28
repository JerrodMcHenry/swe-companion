import type { Question } from "../types";

const RULES = "https://developers.google.com/machine-learning/guides/rules-of-ml";

// ML system design for Machine Learning Engineer interviews: framing, data and training pipelines, serving,
// monitoring and common design scenarios. Full ML system design rounds are mainly asked of experienced
// candidates; entry-level candidates are more often asked the concepts. Answers are original; design scenarios
// are representative, not documented employer questions.
const questions: Question[] = [
  {
    group: "Approach",
    question: "How do you approach an ML system design interview?",
    answer:
      "Work from the problem to the system. Clarify the business goal and turn it into an ML task (for example, rank posts by predicted engagement), with constraints: scale, latency, freshness and privacy. Define offline metrics and the online metric that matters. Then cover data (sources, labels, sampling), features, a baseline and a model choice, training and evaluation, serving (batch or online), monitoring and retraining, and finish with trade-offs and risks such as feedback loops and fairness. State your assumptions, start simple and justify each step up in complexity; there is rarely one correct architecture. According to Hello Interview, entry-level ML loops usually leave out a full ML system design round, which becomes more common at mid level and the norm for senior roles; confirm with your recruiter.",
    followUps: ["What would you do if there were no labels?"],
    source: { title: "Hello Interview — ML System Design in a Hurry", url: "https://www.hellointerview.com/learn/ml-system-design/in-a-hurry/introduction" },
  },
  {
    group: "Approach",
    question: "What is the difference between offline and online evaluation?",
    answer:
      "Offline evaluation measures a model on historical held-out data with metrics such as AUC, NDCG or RMSE: it is fast, cheap and safe, but it can only reward predictions the logged data can judge and ignores how the model changes user behavior. Online evaluation measures the real effect in production, usually with an A/B test on business metrics such as conversion or retention, plus guardrails such as latency and complaints. Use offline results to decide what is worth testing online, and track how well offline gains predict online ones.",
  },
  {
    group: "Data & training",
    question: "Where do training labels come from, and what can go wrong with them?",
    answer:
      "From user behavior (clicks, purchases, reports), from later outcomes (a chargeback confirms fraud weeks later), from human annotators, or from existing rules. Problems: labels can be delayed, noisy or biased by the current system (users can only click what you showed them, a feedback loop), the positive class can be rare, and annotators can disagree. Mitigations: write clear labeling guidelines and measure agreement, wait for labels to mature before training, log what was shown and include some exploration, and audit a sample of labels by hand.",
  },
  {
    group: "Data & training",
    question: "What does a production training pipeline include, and what is a model registry for?",
    answer:
      "Steps that run automatically and reproducibly: extract data as of a point in time, validate it, compute features, train, evaluate against the current model and fixed test sets (including important segments), and register the model if it passes. Reproducibility means versioning code, data snapshots, configuration and random seeds. A model registry stores each trained model with its version, metrics, training data reference and a deployment label (in current MLflow, an alias such as “champion” rather than the older fixed stages), so deployments and rollbacks pick a known version and, if the version is logged with each prediction, every prediction can be traced to its model.",
    source: { title: "MLflow — Model Registry", url: "https://mlflow.org/docs/latest/ml/model-registry/" },
  },
  {
    group: "Data & training",
    question: "What is a feature store, and when is it worth having?",
    answer:
      "A system that defines features once and serves them consistently in two places: an offline store with historical values for training, including point-in-time correct joins so training never sees future data, and an online store with low-latency current values for real-time inference. It reduces duplicated feature code across teams and training–serving skew, at the cost of another system to run and keep fresh. It is worth it when several models share features or need real-time features; a single batch model can start with a well-tested feature pipeline and a table.",
    source: { title: "Feast — Introduction", url: "https://docs.feast.dev/" },
  },
  {
    group: "Data & training",
    question: "What is training–serving skew, and how do you prevent it?",
    answer:
      "The model sees features computed differently in production than in training, so it performs worse than offline evaluation predicted. Causes: separate code paths for training (batch SQL) and serving (application code), features in training that used data unavailable at prediction time, different preprocessing or library versions, and data that changes between training and serving. Prevent it by sharing feature code or a feature store, logging the features actually used at serving time and training on those logs, validating serving data against training statistics, and comparing predictions from both paths on the same inputs.",
    source: { title: "Google — Rules of Machine Learning: training–serving skew", url: `${RULES}#training-serving_skew` },
  },
  {
    group: "Data & training",
    question: "How would you train a model that is too big or too slow to train on one GPU?",
    answer:
      "First check the simple fixes: profile the input pipeline (GPUs are often waiting for data), use mixed precision and larger batches. Data parallelism (PyTorch DDP) keeps a full copy of the model on each GPU, gives each one a different slice of the data and averages gradients with an all-reduce, so all copies stay identical; it is the common case when the model fits on one device. When it does not fit, first try activation checkpointing, then shard: FSDP (like DeepSpeed ZeRO) is still data parallel but splits parameters, gradients and optimizer state across GPUs and gathers each layer's parameters only when needed; tensor parallelism splits individual layers and pipeline parallelism splits groups of layers across devices. Communication between devices often becomes the bottleneck, so fast interconnects matter.",
    source: { title: "PyTorch — Distributed data parallel", url: "https://docs.pytorch.org/docs/stable/notes/ddp.html" },
  },
  {
    group: "Serving",
    question: "When would you use batch inference rather than online inference?",
    answer:
      "Batch inference precomputes predictions on a schedule and stores them for lookup: simple, cheap and tolerant of slow models, but predictions are stale and wasted on users who never return. Use it when inputs change slowly, such as daily product recommendations by email. Online inference computes a prediction per request: needed when the prediction depends on fresh context (the current session, the transaction being made), but it must meet a latency budget and stay available. Hybrids are common: precompute candidates or embeddings in batch and rank them online.",
  },
  {
    group: "Serving",
    question: "Design a low-latency inference service, for example scoring transactions within 50 ms.",
    answer:
      "Break the latency budget down: network, feature lookup, model inference and post-processing, and design for the 99th percentile, not the average. Fetch precomputed features from a low-latency online store and compute only request-time features in the service. Choose a model that fits the budget (gradient-boosted trees, a distilled or quantized network), load it once per process, and batch requests only if the budget allows. Scale horizontally behind a load balancer, set timeouts, and fall back to a simpler model or rule if a dependency is slow. Monitor latency, errors and prediction distributions.",
    followUps: ["What would you change for a large neural network on GPUs?"],
  },
  {
    group: "Serving",
    question: "How do you deploy a new model safely?",
    answer:
      "Gate it on offline evaluation against the current model, including important segments. Then run it in shadow mode, scoring live traffic without affecting users, to check latency, errors and prediction distributions (shadow mode cannot show how users react). Roll it out to a small percentage of traffic as a canary to catch operational problems, measure its effect on business and guardrail metrics with an A/B test, and increase traffic gradually. Keep the previous version ready for immediate rollback, and version models so every prediction can be traced to the model that made it.",
  },
  {
    group: "Monitoring",
    question: "What would you monitor for a model in production?",
    answer:
      "The service: latency, throughput, errors and resource use. The inputs: missing values, out-of-range values and distribution changes for important features compared with training. The outputs: prediction distribution and, for classifiers, the share of positive predictions. The quality: actual model metrics once labels arrive, which may be days later, plus proxy metrics in the meantime (click-through rate, manual review outcomes). And the business metric the model is meant to move. Alert on sudden changes, and review slower trends regularly.",
    source: { title: "Made With ML — Monitoring", url: "https://madewithml.com/courses/mlops/monitoring/" },
  },
  {
    group: "Monitoring",
    question: "What is the difference between data drift and concept drift, and how do you detect them?",
    answer:
      "The terms are used loosely, so define them. Data drift usually means the input distribution P(X) changes; when the relationship P(Y|X) stays the same it is called covariate shift, for example a marketing campaign brings younger users. Label shift means the label distribution P(Y) changes, such as a rise in the fraud rate. Concept drift means P(Y|X) itself changes, for example fraudsters change tactics so the same features now mean something else. Detect input drift by comparing feature distributions with the training data (population stability index, statistical tests, or simply monitoring summary statistics); not every detected shift hurts performance. Concept drift is invisible in the inputs alone and shows up as falling model metrics once labels arrive, so track them over time by segment.",
    source: { title: "Chip Huyen — Data distribution shifts and monitoring", url: "https://huyenchip.com/2022/02/07/data-distribution-shifts-and-monitoring.html" },
  },
  {
    group: "Monitoring",
    question: "How do you decide when and how to retrain a model?",
    answer:
      "Measure how quickly performance decays: train on older data and evaluate on successive later periods. Then choose scheduled retraining (daily or weekly) when decay is steady, triggered retraining when monitoring detects drift or a metric drop, or continual updates for fast-changing domains such as news or ads. Every retrained model must pass the same automated evaluation as a new model before it replaces the current one; retraining on corrupted data or during an anomaly (a holiday spike) can make things worse.",
  },
  {
    group: "Monitoring",
    question: "A model's performance has dropped in production. How do you diagnose it?",
    answer:
      "Confirm the drop is real and find when it started and which segments it affects. Check the pipeline first, since it is the most common cause: a broken or late feature, a schema or unit change upstream, nulls, a deployment of new code or a new model. Compare live feature distributions with training data to find drift, check whether labels or their definition changed, and look for training–serving skew by recomputing features for some live requests offline. Roll back if a recent change caused it; retrain on recent data if the world changed.",
  },
  {
    group: "Design scenarios",
    question: "Design a recommendation system, for example products on a shopping site.",
    answer:
      "Clarify the surface, the goal (purchases, not just clicks), scale and latency. A common design uses two stages. Candidate generation narrows millions of items to hundreds cheaply, combining sources such as embedding similarity (two-tower models with approximate nearest-neighbor search), items co-purchased with the user's history and popular items. A ranking model scores the candidates with richer user, item and context features and predicts the target action; then apply business rules (diversity, stock, already purchased). Handle new users and items with popularity and content features. Train on logged impressions and outcomes, evaluate with ranking metrics offline and A/B tests online, and watch for feedback loops that only reinforce what is already popular.",
    followUps: ["How do you recommend to a brand-new user?", "How would you add real-time session signals?"],
  },
  {
    group: "Design scenarios",
    question: "Design a fraud detection system for card payments.",
    answer:
      "Requirements: score each transaction in real time within the payment latency budget, with costs for missed fraud and for blocking good customers. Features: transaction details, the customer's history and velocity features (spend in the last hour, new device, distance from usual location) from an online feature store, plus merchant risk. Model: gradient-boosted trees are a strong start for tabular data, combined with hard rules for known patterns. Labels arrive late (chargebacks take weeks), blocked transactions never get a true label (so keep a small randomized or reviewed sample to measure what the system misses) and fraud is rare, so handle imbalance and use precision at a fixed recall or expected cost. Output a score with thresholds for approve, review and decline; route the middle band to manual review, whose decisions become labels. Monitor drift closely because fraudsters adapt.",
  },
];

export default questions;
