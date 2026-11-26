import type { Topic } from "../types";

const topic: Topic = {
  slug: "code-review",
  title: "Code Review",
  category: "Practical Engineering",
  phase: "practical-software-engineering",
  overview:
    "Code review is reading a proposed change (usually a pull request) to decide whether it should be merged and to help improve it. This topic teaches what to check and in what order — purpose, correctness and edge cases, tests, security and performance at a sensible depth, then naming, readability and maintainability — how to read a diff, how to separate blocking defects from optional suggestions, and how to write and respond to feedback constructively. The examples are small changes to review, with model reviews.",
  whyItMatters:
    "Code review is part of the job from the first week: you will review teammates' changes and have every one of yours reviewed. In this curriculum's R4 sample, code review was named in 15 of 28 entry-level backend and full-stack postings. Dedicated code-review interviews have weak evidence at entry level (one official example, GitLab, was for non-entry roles), but the same skill is used in debugging rounds, AI-assisted rounds (reviewing generated code) and when you explain and defend your own decisions in any technical interview.",
  prerequisites: ["Git and Pull Requests", "Automated Testing", "Reading and Debugging Unfamiliar Code"],
  objectives: [
    "Understand the purpose of a change from its description, linked issue and tests before judging the code.",
    "Read a unified diff: files, hunks, removed and added lines, and the context around them.",
    "Evaluate correctness, including boundaries, empty and invalid input, error handling and state changes.",
    "Check whether tests cover the new behavior and the edge cases, and whether they would fail if the code were wrong.",
    "Recognize unnecessary complexity and abstractions that the requirements do not need.",
    "Spot common security issues (injection, secrets and personal data in logs, missing authorization) and obvious performance problems at entry-level depth.",
    "Comment on naming, readability and maintainability without imposing personal preferences.",
    "Label comments by importance: blocking defects versus optional suggestions and nits.",
    "Write specific, actionable, respectful comments that explain why, and respond to feedback on your own changes professionally.",
    "Explain and defend your engineering decisions with reasons, and change your mind when given better ones.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Google Engineering Practices — What to look for in a code review",
      url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html",
      provider: "Google",
      type: "Documentation",
      instructions: "Written, primary. Read the whole page (design, functionality, complexity, tests, naming, comments, style, every line, context). About 20 minutes.",
    },
    {
      title: "Google Engineering Practices — How to write code review comments",
      url: "https://google.github.io/eng-practices/review/reviewer/comments.html",
      provider: "Google",
      type: "Documentation",
      instructions: "Read the whole page: courtesy, explaining why, giving guidance and labelling comment severity (Nit, Optional, FYI). Then skim the author's guide on small changes and handling reviewer comments.",
    },
    {
      title: "Reviewing proposed changes in a pull request",
      url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request",
      provider: "GitHub Docs",
      type: "Documentation",
      instructions: "Reference for the mechanics: commenting on lines, suggesting changes, and approving or requesting changes.",
    },
    {
      title: "Software Engineering at Google — Chapter 9: Code Review",
      url: "https://abseil.io/resources/swe-book/html/ch09.html",
      provider: "Google engineers (free online book)",
      type: "Book",
      instructions: "Optional. Read the sections on code review benefits and best practices if you want the reasoning behind team review norms.",
    },
  ],
  exercises: [
    {
      title: "Review a merged pull request in a small open-source project before reading its review comments",
      note: "Choose a recently merged PR of fewer than about 200 changed lines. Write your review (purpose, blocking issues, suggestions, nits), then compare with the real discussion: what did you miss, and what did you flag that did not matter?",
    },
    {
      title: "Review exercise: a teammate changes \"return age > 18\" to \"return age >= 18\" in is_adult, with the description \"fix off-by-one\". Write the questions and checks you need before approving.",
      note: "Independent. Think about the requirement's source, tests, other callers and other places that use the same rule.",
    },
    {
      title: "Review exercise: to fix occasional timeouts, a pull request wraps the call that charges a customer's card in retry(times=10). Write your review.",
      note: "Independent. Think about what happens if the first request succeeded but the response was lost (see idempotency in How the Internet and HTTP Work).",
    },
    {
      title: "Review exercise: a pull request replaces a clear 12-line loop with a one-line nested list comprehension and calls it a cleanup. Write your review.",
      note: "Independent. Is this a blocking issue, an optional suggestion or no comment at all? Explain why.",
    },
    {
      title: "Re-review your own most recent pull request a day later, using this topic's checklist, and write the comments you would have left for someone else.",
      note: "Habit-building.",
    },
  ],
  interviewQuestions: [
    {
      question: "What do you look for during code review?",
      answer:
        "First, the purpose: does the change do what its description and issue say, and is it the right approach? Then correctness: logic, boundaries, empty and invalid input, error handling and state. Then tests: do they cover the new behavior and edge cases, and would they fail if the code were wrong? Then security and performance where relevant: injection, secrets or personal data in logs, missing permission checks, unnecessary repeated work. Finally readability and maintainability: names, structure, unnecessary complexity, comments. I prioritize correctness and maintainability over my personal style, label comments by importance and explain why.",
      followUps: ["How much time would you spend reviewing a 1,000-line pull request, and what would you suggest to its author?"],
    },
    {
      question: "How do you read a Git diff?",
      answer:
        "Each file starts with its old and new path. A hunk header such as @@ -3,4 +3,6 @@ means the hunk starts at line 3 and covers 4 lines in the old file and 6 in the new one. Lines starting with - were removed, + were added and a space is unchanged context. Read the description and tests first, then the diff file by file; open the full file when the context lines are not enough to judge a change.",
      code: `diff --git a/shop/shipping.py b/shop/shipping.py
--- a/shop/shipping.py
+++ b/shop/shipping.py
@@ -1,4 +1,4 @@
 FREE_SHIPPING_THRESHOLD = 100

 def free_shipping(total):
-    return total > FREE_SHIPPING_THRESHOLD
+    return total >= FREE_SHIPPING_THRESHOLD`,
      followUps: ["What would you check before approving this one-line change?"],
    },
    {
      question: "Review this change. The description says: \"Add pagination; pages are numbered from 1.\"",
      answer:
        "Blocking: the code is off by one for 1-based pages. Page 1 starts at index 10, so the first ten items can never be shown; start should be (page - 1) * page_size. Blocking: there are no tests. I would ask for tests for page 1, a middle page, a last partial page (25 items, page 3 → 5 items), a page past the end (empty list) and page 0 or a negative page, which should be rejected with a clear error rather than silently returning items. Non-blocking: the docstring is helpful; consider validating page_size too.",
      code: `diff --git a/shop/pagination.py b/shop/pagination.py
new file mode 100644
--- /dev/null
+++ b/shop/pagination.py
@@ -0,0 +1,5 @@
+def paginate(items, page, page_size=10):
+    """Return the items on a page, numbered from 1."""
+    start = page * page_size
+    end = start + page_size
+    return items[start:end]`,
      followUps: ["The author replies that the frontend always sends page 0 for the first page. What do you do?"],
    },
    {
      question: "Review this change. The description says: \"Add a 10% discount for members.\"",
      answer:
        "The code works, but it adds an abstract base class, a registry and a factory for a single discount rule, which makes a two-line feature harder to read, test and change. This is a maintainability concern, not a defect: I would suggest a plain function (def member_price(price): return round(price * 0.9, 2)) and adding structure when a second or third discount type actually arrives. Whether it blocks depends on team norms; I would request the simplification but explain my reasoning and listen if the author knows of upcoming discount types. I would also ask for tests, including rounding.",
      code: `diff --git a/shop/discounts.py b/shop/discounts.py
new file mode 100644
--- /dev/null
+++ b/shop/discounts.py
@@ -0,0 +1,17 @@
+from abc import ABC, abstractmethod
+
+class DiscountStrategy(ABC):
+    @abstractmethod
+    def apply(self, price): ...
+
+class MemberDiscount(DiscountStrategy):
+    def apply(self, price):
+        return round(price * 0.9, 2)
+
+_REGISTRY = {"member": MemberDiscount}
+
+def discount_factory(kind):
+    return _REGISTRY[kind]()
+
+def member_price(price):
+    return discount_factory("member").apply(price)`,
      followUps: ["When would a strategy or registry be justified here?"],
    },
    {
      question: "Review this change. The description says: \"Add order lookup by email for the support tool.\"",
      answer:
        "Blocking: the query is built with an f-string from customer_email, which allows SQL injection; use a parameterized query. Blocking: the log line writes the API token and the customer's email into the logs; remove the token entirely and avoid logging personal data. Blocking or at least a question: does the support tool check that the caller is allowed to look up any customer's orders (authorization)? Non-blocking: the duplicate check is O(n²) because each row is searched for in a list; SELECT DISTINCT or a set would be simpler, though it only matters if result sets are large. I would also ask for tests, including an email containing a quote.",
      code: `diff --git a/support/orders.py b/support/orders.py
--- a/support/orders.py
+++ b/support/orders.py
@@ -10,2 +10,11 @@ log = logging.getLogger(__name__)
 API_TOKEN = os.environ["SUPPORT_API_TOKEN"]

+def find_orders(db, customer_email):
+    log.info(f"order lookup for {customer_email} token={API_TOKEN}")
+    query = f"SELECT id, total FROM orders WHERE email = '{customer_email}'"
+    results = []
+    for row in db.execute(query).fetchall():
+        if row not in results:
+            results.append(row)
+    return results`,
      followUps: ["Which of your comments would you raise even if the author were a senior engineer in a hurry?"],
    },
    {
      question: "Review this change. The description says: \"Show the number of days until a subscription expires.\"",
      answer:
        "The logic is correct and has a test, so I would approve. The comments are optional improvements, labelled so the author knows they do not block: nit — calc and d do not say what they are; days_until_expiry(expiry_date, today) would. Optional — passing today in (as the test does) is good; keep it rather than calling date.today() inside, so the function stays testable. Not worth a comment: the author's choice of an f-string versus str.format in the template; that is personal preference.",
      code: `diff --git a/billing/subscriptions.py b/billing/subscriptions.py
--- a/billing/subscriptions.py
+++ b/billing/subscriptions.py
@@ -1,2 +1,5 @@
 from datetime import date

+def calc(d, today):
+    return (d - today).days
+
diff --git a/tests/test_subscriptions.py b/tests/test_subscriptions.py
--- a/tests/test_subscriptions.py
+++ b/tests/test_subscriptions.py
@@ -1 +1,5 @@
 from datetime import date
+from billing.subscriptions import calc
+
+def test_days_until_expiry():
+    assert calc(date(2026, 12, 31), date(2026, 12, 1)) == 30`,
      followUps: ["How do you decide whether a naming comment is a nit or worth blocking for?"],
    },
    {
      question: "How do you separate blocking issues from optional suggestions, and write feedback that helps?",
      answer:
        "Blocking issues are things that would cause harm if merged: incorrect behavior, missing tests for new logic, security problems, data loss, or code the team could not maintain. Suggestions and nits improve the change but are not required; label them (\"nit:\", \"optional:\") so the author can prioritize. Good comments are specific, explain why, and suggest a direction: \"page 1 starts at index 10 here, so the first ten items are skipped — should start be (page - 1) * page_size?\" rather than \"this is wrong\". Comment on the code, not the person, ask questions when unsure, and say what is good too. If a discussion goes back and forth, talk it through directly.",
      followUps: ["You and the author disagree about a design choice and both have reasonable arguments. What happens next?"],
    },
    {
      question: "How do you respond when a reviewer questions a decision in your pull request?",
      answer:
        "Assume good intent and take the comment seriously. If the reviewer is right, fix it and thank them. If I made the choice deliberately, explain the reasoning with evidence — requirements, a test, a measurement or a trade-off — and ask whether it addresses their concern. If it is a matter of preference, follow the team's conventions. If the explanation was needed by the reviewer, a future reader probably needs it too, so I add a comment or improve the code. I don't take review personally or argue to win.",
      followUps: ["Tell me about a time feedback on your code changed your approach. (Behavioral; see Behavioral Interviews.)"],
    },
  ],
  mistakes: [
    "Approving after skimming without understanding what the change is for.",
    "Focusing on formatting and personal preferences while missing a correctness bug.",
    "Not checking whether tests exist, or whether they would fail if the code were wrong.",
    "Leaving vague comments (\"this is confusing\") with no reason or suggestion.",
    "Treating every comment as blocking, or failing to block a real defect to avoid conflict.",
    "Requesting abstractions for requirements that do not exist yet.",
    "Responding defensively to feedback on your own code.",
  ],
  mastery: [
    "Given a small change, you can find its correctness bugs, missing tests and security issues, and explain each with a concrete example.",
    "Your comments are labelled by importance, specific, explain why and suggest a direction.",
    "You can tell unnecessary complexity apart from justified structure, and personal preference apart from maintainability.",
    "You can explain and defend your own decisions in review, and update them when given better reasons.",
  ],
  deprioritize: [
    "Formal code inspection processes and review metrics.",
    "Language-specific style guides beyond following your team's formatter and linter.",
    "Reviewing large architectural changes; at entry level, focus on scoped pull requests.",
  ],
  keywords: [
    "code review",
    "pull request review",
    "PR review",
    "diff",
    "git diff",
    "feedback",
    "nit",
    "blocking",
    "readability",
    "maintainability",
    "overengineering",
    "unnecessary abstraction",
    "review comments",
  ],
};

export default topic;
