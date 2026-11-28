import type { Question } from "../types";

const SK = "https://scikit-learn.org/stable";
const MLCC = "https://developers.google.com/machine-learning/crash-course";

// Machine learning fundamentals for Machine Learning Engineer interviews: the concepts, metrics and algorithms
// asked in ML breadth rounds, with just enough maths to answer them. Not a course. Applied LLM topics live in
// the AI Engineering set. Answers are original; numeric examples were checked with NumPy and scikit-learn.
// Exercises are representative, not documented employer questions.
const questions: Question[] = [
  {
    group: "Core concepts",
    question: "What is the difference between supervised and unsupervised learning, and between classification and regression?",
    answer:
      "Supervised learning trains on examples with known labels to predict the label for new inputs; unsupervised learning finds structure in unlabeled data, such as clusters or a lower-dimensional representation. Within supervised learning, classification predicts a category (fraud or not, which product) and regression predicts a number (price, delivery time). Many real systems combine them: for example, clustering to create features, or self-supervised pretraining on unlabeled data before supervised fine-tuning.",
  },
  {
    group: "Core concepts",
    question: "Why do you split data into training, validation and test sets?",
    answer:
      "The model learns from the training set; you choose models, features and hyperparameters using the validation set; and you estimate performance on unseen data once, at the end, with the test set. If you make decisions based on the test set, it stops being unseen and your estimate becomes optimistic. The split must mirror how the model is used: split by time when predicting the future and by user or entity when the same entity appears many times, so the test set does not contain near-copies of training data.",
    source: { title: "Google ML Crash Course — Dividing the original dataset", url: `${MLCC}/overfitting/dividing-datasets` },
  },
  {
    group: "Core concepts",
    question: "What is cross-validation, and when would you use stratified or time-series splits?",
    answer:
      "k-fold cross-validation splits the training data into k folds, trains k times with a different fold held out each time and averages the scores. It gives a more reliable estimate than one validation split when data is limited, and its spread shows how stable the model is. Stratified k-fold keeps the class proportions in every fold, which matters for imbalanced classification. For time-ordered data use a time-series split, which always validates on data after the training period, because random folds would let the model learn from the future.",
    source: { title: "scikit-learn — Cross-validation", url: `${SK}/modules/cross_validation.html` },
  },
  {
    group: "Core concepts",
    question: "Explain overfitting, underfitting and the bias–variance trade-off. How do you tell which one you have?",
    answer:
      "Underfitting (high bias) means the model is too simple to capture the pattern: error is high on both training and validation data. Overfitting (high variance) means it has learned noise specific to the training data: training error is low but validation error is much higher. As a rule of thumb, more complex models reduce bias but increase variance (very large neural networks do not always follow this simple curve). Compare training and validation error, or plot learning curves as training data grows. Fix underfitting with a more expressive model or better features; fix overfitting with more data, regularization, a simpler model, early stopping or fewer features.",
    source: { title: "Google ML Crash Course — Overfitting", url: `${MLCC}/overfitting/overfitting` },
  },
  {
    group: "Core concepts",
    question: "What is regularization? Compare L1 and L2.",
    answer:
      "Regularization adds a penalty for model complexity to the loss so the model prefers simpler solutions and generalizes better. L2 (ridge) adds the sum of squared weights: it shrinks all weights smoothly towards zero and handles correlated features well. L1 (lasso) adds the sum of absolute weights: it can set some weights exactly to zero, so it also selects features. The strength is a hyperparameter tuned on validation data; in scikit-learn it is alpha for Ridge and Lasso (larger means stronger), but C for LogisticRegression and SVMs, the inverse (smaller means stronger). Neural networks also use dropout, weight decay and early stopping; weight decay equals an L2 penalty for plain SGD but not for Adam, which is why AdamW decouples it.",
    code: `loss_L2 = data_loss + lambda * sum(w ** 2)
loss_L1 = data_loss + lambda * sum(abs(w))`,
    source: { title: "scikit-learn — Linear models: ridge and lasso", url: `${SK}/modules/linear_model.html` },
  },
  {
    group: "Data & features",
    question: "How do you prepare features for a model?",
    answer:
      "Handle missing values deliberately (impute, add a “was missing” indicator or use a model that supports them). Encode categories: one-hot for few values; target encoding, hashing or embeddings for many. Scale numeric features for models that depend on distances or gradient size (linear models, k-means, neural networks); tree models do not need it. Transform skewed values (log of income), build features that capture domain knowledge (time since last purchase, ratios, counts over windows), and fit every transformation on the training data only, inside a pipeline, so the same steps apply at prediction time.",
    source: { title: "scikit-learn — Preprocessing data", url: `${SK}/modules/preprocessing.html` },
  },
  {
    group: "Data & features",
    question: "How do you decide which features to keep?",
    answer:
      "Start from domain knowledge and remove features that will not be available at prediction time or that leak the label. Then use evidence: compare validation performance with and without a feature or group, use model-based importance (permutation importance on validation data is more reliable than a tree's built-in impurity importance, which favors high-cardinality features, but both mislead when features are strongly correlated), L1 regularization, or simple filters for near-constant and highly correlated features. Fewer features mean less to compute, monitor and keep consistent between training and serving, so keep a feature only if it earns its cost.",
    source: { title: "scikit-learn — Permutation feature importance", url: `${SK}/modules/permutation_importance.html` },
  },
  {
    group: "Data & features",
    question: "What is data leakage? Give examples and say how you prevent it.",
    answer:
      "Leakage is information in training that will not be available when the model makes real predictions, which makes offline results look far better than production. Examples: a feature recorded after the outcome (“refund issued” when predicting fraud), fitting a scaler or imputer on the whole dataset before splitting, random splits of time series, the same customer in both training and test sets, and target encoding computed with the row's own label. Prevent it by building features as of the prediction time, splitting before any fitting, using pipelines, and being suspicious of results that look too good.",
    source: { title: "scikit-learn — Common pitfalls: data leakage", url: `${SK}/common_pitfalls.html` },
  },
  {
    group: "Data & features",
    question: "How do you handle a heavily imbalanced classification problem, such as 1% fraud?",
    answer:
      "First stop using accuracy: predicting “not fraud” for everything scores 99%. Use precision, recall, PR-AUC or a cost-based metric, and stratify splits. Then: weight the rare class more heavily in the loss (class_weight in many libraries), resample (undersample the majority, or oversample the minority) on the training data only, remembering that weighting and resampling distort predicted probabilities, and choose the decision threshold from the business trade-off between missed fraud and false alarms rather than using 0.5. Collecting more labeled examples of the rare class can help more than any of these techniques.",
    followUps: ["Why must resampling happen after the train–test split?"],
    source: { title: "Google ML Crash Course — Imbalanced datasets", url: `${MLCC}/overfitting/imbalanced-datasets` },
  },
  {
    group: "Evaluation & metrics",
    question: "Explain precision, recall and F1 with an example.",
    answer:
      "Precision is the share of predicted positives that are correct: TP / (TP + FP). Recall is the share of actual positives the model finds: TP / (TP + FN). F1 is their harmonic mean, which is low if either one is low. Out of 1,000 transactions, 10 are fraud; the model flags 8, of which 6 are fraud. Precision = 6/8 = 0.75, recall = 6/10 = 0.6, F1 ≈ 0.67, while accuracy is 99.4%, barely above the 99% of a model that flags nothing. Favor recall when misses are costly (disease screening) and precision when false alarms are costly (blocking a customer's card).",
    code: `TP, FP, FN = 6, 2, 4
precision = TP / (TP + FP)                         # 0.75
recall = TP / (TP + FN)                            # 0.6
f1 = 2 * precision * recall / (precision + recall) # 0.667`,
    source: { title: "Google ML Crash Course — Accuracy, recall, precision", url: `${MLCC}/classification/accuracy-precision-recall` },
  },
  {
    group: "Evaluation & metrics",
    question: "What do ROC-AUC and PR-AUC measure, and which would you use for imbalanced data?",
    answer:
      "Both summarize performance across all decision thresholds. The ROC curve plots the true positive rate against the false positive rate; ROC-AUC is the probability that a random positive is scored above a random negative, and 0.5 is random. The precision–recall curve plots precision against recall. When positives are rare, the false positive rate stays small even with many false alarms, so ROC-AUC can look excellent while precision is poor; PR-AUC (usually computed as average precision) often shows that more clearly, and its random baseline is the positive rate. ROC-AUC is still useful for comparing rankings, so report both when in doubt. Neither picks the threshold: choose that from costs.",
    source: { title: "scikit-learn — Precision-recall example", url: `${SK}/auto_examples/model_selection/plot_precision_recall.html` },
  },
  {
    group: "Evaluation & metrics",
    question: "How do you evaluate a regression model?",
    answer:
      "Mean absolute error (MAE) is the average size of errors in the target's units and is less sensitive to outliers. Root mean squared error (RMSE), also in the target's units, penalizes large errors more, which is right when big misses are disproportionately costly. R² compares the model's squared error with always predicting the mean: 1 is perfect, 0 is no better than the mean, and it can be negative on test data. Also compare with a simple baseline (the mean, or last week's value), check errors by segment, and consider percentage errors when targets vary in scale, avoiding MAPE when actual values can be near zero.",
    source: { title: "scikit-learn — Regression metrics", url: `${SK}/modules/model_evaluation.html#regression-metrics` },
  },
  {
    group: "Evaluation & metrics",
    question: "How do you choose an evaluation metric for a business problem?",
    answer:
      "Start from the decision the model supports and the cost of each kind of error. For fraud, a missed fraud costs the transaction amount and a false alarm costs a frustrated customer, so you might maximize recall at a fixed precision, or minimize expected cost. For ranking, use a ranking metric such as NDCG or precision at k. Pair one offline metric that correlates with the business outcome with guardrail metrics (latency, fairness across groups, calibration if probabilities are used directly), and confirm with an online experiment.",
  },
  {
    group: "Evaluation & metrics",
    question: "How do you select a model and tune hyperparameters without fooling yourself?",
    answer:
      "Start with a simple baseline (a heuristic, logistic regression or gradient-boosted trees) so you know what improvement is worth the complexity. Tune hyperparameters with cross-validation on the training data, using random search or Bayesian optimization rather than a large grid, and keep the test set untouched until the end. If you tune many models on the same validation data, you overfit to it; nested cross-validation or a final held-out test set gives an honest estimate. Prefer the simpler model when scores are within noise.",
    source: { title: "scikit-learn — Tuning the hyper-parameters of an estimator", url: `${SK}/modules/grid_search.html` },
  },
  {
    group: "Algorithms",
    question: "How do linear and logistic regression work, and what loss does each minimize?",
    answer:
      "Linear regression predicts a number as a weighted sum of features plus a bias, fitted by minimizing mean squared error. Logistic regression passes the same weighted sum through the sigmoid function to get a probability between 0 and 1, fitted by minimizing log loss (cross-entropy), which heavily penalizes confident wrong predictions. Both are fast, interpretable through their weights and strong baselines; they capture non-linear patterns only through engineered features.",
    code: `p = 1 / (1 + exp(-(w · x + b)))                      # logistic regression
log_loss = -mean(y * log(p) + (1 - y) * log(1 - p))`,
    source: { title: "Google ML Crash Course — Logistic regression", url: `${MLCC}/logistic-regression` },
  },
  {
    group: "Algorithms",
    question: "Compare decision trees, random forests and gradient-boosted trees.",
    answer:
      "A decision tree splits the data on feature thresholds; it is interpretable and handles non-linear patterns, but a deep tree overfits. A random forest trains many deep trees on bootstrap samples, considering a random subset of features at each split, and averages their predictions, which reduces variance and works well with little tuning. Gradient boosting trains shallow trees sequentially, each one fitted to the gradient of the loss of the ensemble so far (the residuals, for squared error), which often gives the best accuracy on tabular data but needs tuning (learning rate, number of trees, depth) and early stopping to avoid overfitting. XGBoost, LightGBM and CatBoost are common implementations.",
    source: { title: "scikit-learn — Ensembles", url: `${SK}/modules/ensemble.html` },
  },
  {
    group: "Algorithms",
    question: "How does k-means clustering work, and what are its limitations?",
    answer:
      "Choose k, initialize k centroids, then repeat: assign each point to the nearest centroid and move each centroid to the mean of its points, until assignments stop changing. It minimizes the within-cluster sum of squared distances (inertia) but only reaches a local minimum. Limitations: you must choose k (use the elbow method, silhouette score or the business need), results depend on initialization (k-means++, which picks each new initial centroid with probability proportional to its squared distance from the nearest one already chosen, and several restarts help), features must be scaled, and it assumes convex, roughly round clusters of similar size, so it handles elongated clusters and outliers poorly.",
    source: { title: "scikit-learn — Clustering: k-means", url: `${SK}/modules/clustering.html#k-means` },
  },
  {
    group: "Algorithms",
    question: "How does gradient descent work? What do the learning rate and batch size change?",
    answer:
      "Gradient descent minimizes the loss by repeatedly moving the parameters a small step against the gradient, the direction in which the loss decreases fastest locally: w = w - learning_rate * gradient. Too high a learning rate overshoots or diverges; too low converges slowly. Batch gradient descent uses all data per step (exact gradient but slow); stochastic gradient descent uses one example (noisy but cheap); mini-batches are the usual compromise and suit GPUs. Larger batches give less noisy gradients and better hardware use but need more memory and often a retuned learning rate. Momentum smooths updates using past gradients; Adam combines momentum with a per-parameter step size, and learning-rate schedules reduce it as training progresses.",
    source: { title: "Google ML Crash Course — Gradient descent", url: `${MLCC}/linear-regression/gradient-descent` },
  },
  {
    group: "Neural networks",
    question: "How does a neural network learn, and why does it need non-linear activation functions?",
    answer:
      "A forward pass computes predictions layer by layer: each layer multiplies its inputs by weights, adds a bias and applies an activation function. A loss function compares predictions with labels, backpropagation uses the chain rule to compute the gradient of the loss with respect to every weight, and an optimizer updates the weights. Without non-linear activations such as ReLU, stacked layers collapse into one linear function, so the network could only learn linear relationships. Deep networks also rely on good initialization and normalization so gradients neither vanish nor explode.",
    followUps: ["Why did ReLU largely replace sigmoid in hidden layers?"],
    source: { title: "Google ML Crash Course — Neural networks", url: `${MLCC}/neural-networks` },
  },
  {
    group: "Experimentation & statistics",
    question: "How would you run an A/B test of a new model, and what does a p-value tell you?",
    answer:
      "Randomly assign users (not requests, if the same user returns, and analyze at the same unit you randomize) between the current model and the new one, choose one primary metric plus guardrails in advance, and compute the sample size needed to detect the smallest effect worth acting on. Run for the planned duration, covering weekly cycles, and do not stop as soon as the result looks significant (repeatedly peeking at a fixed-sample test inflates false positives; use a sequential testing method if you need to monitor early). The p-value is the probability of seeing a difference at least as large as the observed one if there were no real effect and the test's assumptions hold; it is not the probability that the new model is better, nor a measure of how large the effect is. Report the effect size with a confidence interval.",
    followUps: ["Why might a model that wins offline lose in an A/B test?"],
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: implement k-means from scratch with NumPy.",
    answer:
      "Explain the algorithm, then write it with vectorized distance computation. Points to cover: random or k-means++ initialization, a stopping condition (centroids stop moving or a maximum number of iterations), what to do with an empty cluster, and the time complexity of O(n × k × d) per iteration.",
    code: `import numpy as np

def kmeans(X, k, iters=100, seed=0):
    rng = np.random.default_rng(seed)
    centroids = X[rng.choice(len(X), size=k, replace=False)]
    for _ in range(iters):
        distances = np.linalg.norm(X[:, None, :] - centroids[None, :, :], axis=2)
        labels = distances.argmin(axis=1)               # nearest centroid
        new = np.array([X[labels == j].mean(axis=0) if np.any(labels == j) else centroids[j]
                        for j in range(k)])             # keep a centroid with no points
        if np.allclose(new, centroids):
            break
        centroids = new
    return centroids, labels

X = np.array([[1, 1], [1.5, 2], [1, 1.5], [8, 8], [9, 8.5], [8.5, 9]])
centroids, labels = kmeans(X, k=2)
print(np.round(centroids[np.argsort(centroids[:, 0])], 2))
# -> [[1.17 1.5 ]
#     [8.5  8.5 ]]`,
    followUps: ["How would you choose k?", "How does k-means++ initialization work?"],
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: you have a dataset and an hour to build a model. What do you do?",
    answer:
      "Clarify the target, how the prediction will be used and the metric. Explore quickly: size, label balance, missing values, obviously leaky columns and whether rows are ordered in time. Split correctly (by time or entity if needed), build a trivial baseline, then a strong simple model (logistic regression or gradient-boosted trees) inside a pipeline. Evaluate with the agreed metric, look at errors and feature importance, and try one or two improvements. Finish by explaining results, limitations and what you would do with more time; a clean, leak-free baseline beats an elaborate model with a flawed split.",
  },
];

export default questions;
