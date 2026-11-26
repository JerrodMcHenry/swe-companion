import type { Topic } from "../types";

const topic: Topic = {
  slug: "postgresql-sql-practice",
  title: "PostgreSQL and SQL Practice",
  category: "Backend",
  phase: "backend-engineering",
  overview:
    "Writing, explaining and checking the PostgreSQL queries a backend needs: filtering, joins, aggregation, subqueries and CTEs, data changes inside transactions, and a first look at query plans. It builds on Databases and SQL Concepts, which covers keys, ACID, injection and the basic query clauses with SQLite examples.",
  whyItMatters:
    "SQL and relational databases appeared in 15 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, and a backend job means writing and reviewing queries every week. Dedicated SQL interview rounds, however, were not found in the US new-grad evidence reviewed (only an Accenture India online assessment, a Klaviyo internship and Wise UK), so treat timed SQL problem practice as conditional: do it when the posting stresses SQL or your recruiter confirms a SQL round. The professional skill — correct, readable, parameterized queries you can explain — is not conditional for backend roles.",
  prerequisites: ["Databases and SQL Concepts", "Security Fundamentals (SQL injection)"],
  objectives: [
    "Write SELECT queries with WHERE, ORDER BY and LIMIT/OFFSET; always pair LIMIT with an ORDER BY that gives a unique order, or results are unpredictable.",
    "Change data with INSERT, UPDATE and DELETE; check the WHERE clause before running UPDATE or DELETE, and use RETURNING (PostgreSQL) to get generated ids or changed rows back.",
    "Choose INNER JOIN or LEFT JOIN on purpose, including self joins (a member and their recommender) and joins across three tables.",
    "Aggregate with GROUP BY, HAVING, COUNT, SUM, AVG, MIN and MAX; PostgreSQL rejects selected columns that are neither grouped nor aggregated.",
    "Handle NULL in real queries: IS NULL, COALESCE, LEFT JOIN … IS NULL, and why NOT IN against a subquery that can return NULL matches nothing.",
    "Write scalar and IN/EXISTS subqueries, and rewrite a nested query as a common table expression (WITH) for readability.",
    "Know the logical order a SELECT is evaluated in (FROM/JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT) and use it to explain alias and aggregate errors.",
    "Use ROW_NUMBER, RANK and DENSE_RANK with OVER (PARTITION BY … ORDER BY …) for numbering and top-N-per-group — needed if a SQL assessment is confirmed or your project needs ranking; otherwise recognize them.",
    "Declare primary keys, foreign keys, NOT NULL, UNIQUE and CHECK constraints in PostgreSQL (ids with GENERATED ALWAYS AS IDENTITY, money as NUMERIC, timestamps as timestamptz).",
    "Group related changes in a transaction from Python: psycopg does not commit until you call commit() or leave a transaction block; keep transactions short.",
    "Pass values with psycopg placeholders (%s or %(name)s, passed as a separate argument to execute), never with Python string formatting.",
    "Read a basic EXPLAIN plan: sequential scan versus index scan, estimated versus actual rows; know that EXPLAIN ANALYZE actually runs the statement. Add an index for a measured slow query, and understand that column order matters in a multi-column index.",
    "Skip for now: recursive CTEs, advanced window frames, isolation-level details, query-planner tuning, stored procedures, triggers and database administration.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "PostgreSQL Documentation — Part I. Tutorial: Chapter 2 The SQL Language and Chapter 3 Advanced Features",
      url: "https://www.postgresql.org/docs/current/tutorial-sql.html",
      provider: "PostgreSQL Global Development Group",
      type: "Documentation",
      instructions:
        "Start here. Read Chapter 2 (2.1–2.9: creating tables, inserting, querying, joins, aggregates, updates, deletions) and Chapter 3 sections 3.3 Foreign Keys, 3.4 Transactions and 3.5 Window Functions; skip 3.2 Views and 3.6 Inheritance. It is the official PostgreSQL dialect, short and example-led. You can read it without installing anything and do the practice in PostgreSQL Exercises (see Practice), which runs in the browser. Free; no account.",
    },
    {
      title: "PostgreSQL Exercises",
      url: "https://pgexercises.com/questions/basic/",
      provider: "PostgreSQL Exercises (Alisdair Owens)",
      type: "Interactive",
      instructions:
        "The hands-on half of Start here: real PostgreSQL in the browser against one sample country-club database (members, facilities, bookings), with a discussion of each answer. Work through the categories named in this topic's Practice tab alongside the tutorial chapters. The site notes that its schema is deliberately flawed, so do not copy it as a design example. Free; no account.",
    },
    {
      title: "PostgreSQL Documentation — 7.8.1 SELECT in WITH, 9.25 Subquery Expressions, 7.6 LIMIT and OFFSET",
      url: "https://www.postgresql.org/docs/current/queries-with.html",
      provider: "PostgreSQL Global Development Group",
      type: "Documentation",
      instructions:
        "Reference for the parts the tutorial skips. Read 7.8.1 for CTEs (skip recursive queries and materialization), then 9.25 (https://www.postgresql.org/docs/current/functions-subquery.html) for EXISTS, IN and NOT IN — note its paragraph on NOT IN and NULL — and 7.6 (https://www.postgresql.org/docs/current/queries-limit.html) for why LIMIT needs ORDER BY.",
    },
    {
      title: "PostgreSQL Documentation — 14.1 Using EXPLAIN (14.1.1 EXPLAIN Basics and 14.1.2 EXPLAIN ANALYZE)",
      url: "https://www.postgresql.org/docs/current/using-explain.html",
      provider: "PostgreSQL Global Development Group",
      type: "Documentation",
      instructions:
        "Read the opening of 14.1.1 until you can tell a Seq Scan from an Index Scan and know what the cost and rows estimates mean, then the start of 14.1.2 on actual versus estimated rows. Stop before the bitmap and join-plan details. Introductory depth is enough for entry-level work.",
    },
    {
      title: "Use The Index, Luke — Chapter 1: Anatomy of an Index, and Concatenated Keys",
      url: "https://use-the-index-luke.com/sql/anatomy",
      provider: "Markus Winand",
      type: "Book",
      instructions:
        "Free web book. Read Chapter 1 (how a B-tree index finds rows) and, in Chapter 2, the page on concatenated keys (https://use-the-index-luke.com/sql/where-clause/the-equals-operator/concatenated-keys) for why column order matters in a multi-column index. Covers several databases; follow the PostgreSQL notes. No account.",
    },
    {
      title: "Psycopg 3 — Passing parameters to SQL queries, and Transactions management",
      url: "https://www.psycopg.org/psycopg3/docs/basic/params.html",
      provider: "Psycopg",
      type: "Documentation",
      instructions:
        "How Python code sends values to PostgreSQL safely. Read the whole params page (including \"Danger: SQL injection\"), then the transactions page (https://www.psycopg.org/psycopg3/docs/basic/transactions.html) up to and including Transaction contexts, to learn when psycopg commits.",
    },
  ],
  exercises: [
    {
      title: "PostgreSQL Exercises — Basic (all 12) and Joins and Subqueries (all 8)",
      url: "https://pgexercises.com/questions/joins/",
      note: "Filtering, CASE, UNION, inner, outer and self joins, and the same questions rewritten with subqueries. Free in the browser; no account. Start with Basic at https://pgexercises.com/questions/basic/.",
    },
    {
      title: "PostgreSQL Exercises — Aggregation, from \"Count the number of facilities\" to \"List each member's first booking after September 1st 2012\"",
      url: "https://pgexercises.com/questions/aggregates/",
      note: "GROUP BY, HAVING, aggregates with joins and date filters — the core of reporting queries. Free; no account.",
    },
    {
      title: "PostgreSQL Exercises — Modifying data (all 9)",
      url: "https://pgexercises.com/questions/updates/",
      note: "INSERT (including calculated values), UPDATE and DELETE with WHERE clauses and subqueries. Free; no account.",
    },
    {
      title: "PostgreSQL Exercises — window functions: Produce a numbered list of members; Rank members by (rounded) hours used; Find the top three revenue generating facilities",
      url: "https://pgexercises.com/questions/aggregates/nummembers.html",
      note: "ROW_NUMBER and RANK with OVER. Conditional: do these if a SQL assessment is confirmed or your project needs rankings. The other two are at https://pgexercises.com/questions/aggregates/rankmembers.html and https://pgexercises.com/questions/aggregates/facrev3.html.",
    },
    {
      title: "Second Highest Salary (LeetCode)",
      url: "https://leetcode.com/problems/second-highest-salary/",
      note: "Medium. Subquery or DISTINCT … ORDER BY … LIMIT 1 OFFSET 1, and returning NULL when there is no second value. Choose PostgreSQL in the language menu if offered. LeetCode needs a free account to submit.",
    },
    {
      title: "Confirmation Rate (LeetCode)",
      url: "https://leetcode.com/problems/confirmation-rate/",
      note: "Medium. LEFT JOIN plus conditional aggregation, with users who have no rows. Free account.",
    },
    {
      title: "Managers with at Least 5 Direct Reports (LeetCode)",
      url: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/",
      note: "Medium. Self join or IN subquery with GROUP BY … HAVING. Free account.",
    },
    {
      title: "Game Play Analysis IV (LeetCode)",
      url: "https://leetcode.com/problems/game-play-analysis-iv/",
      note: "Medium. A CTE for each player's first day, then a join on dates. Free account.",
    },
    {
      title: "Department Top Three Salaries (LeetCode)",
      url: "https://leetcode.com/problems/department-top-three-salaries/",
      note: "Hard, conditional: top-N per group with DENSE_RANK() OVER (PARTITION BY …). Do it only if a SQL round is confirmed. Free account.",
    },
    {
      title: "LeetCode — SQL 50 study plan",
      url: "https://leetcode.com/studyplan/top-sql-50/",
      note: "Conditional, for a confirmed SQL assessment: a structured set of SQL problems grouped by technique. Work through it after PostgreSQL Exercises rather than instead of it. Free account; some LeetCode content is Premium.",
    },
    {
      title: "Apply it to your backend project: write the queries your API needs — a filtered, ordered and paginated list, a join across two or three tables, and one aggregate report — with psycopg placeholders, then run EXPLAIN ANALYZE on the slowest, add an index only if the plan justifies it, and compare the plans.",
      note: "Turns practice queries into professional work you can discuss in a project deep dive. Wrap EXPLAIN ANALYZE of an UPDATE or DELETE in a transaction you roll back, because it really runs the statement.",
    },
  ],
  interviewQuestions: [
    {
      question: "In what order is a SELECT statement evaluated, and why does it matter?",
      answer:
        "Logically: FROM and JOINs build the rows, WHERE filters them, GROUP BY forms groups, HAVING filters groups, SELECT computes the output columns (window functions run here), then DISTINCT, ORDER BY and finally LIMIT/OFFSET. That explains common errors: you cannot use a SELECT alias or an aggregate in WHERE, because neither exists yet (use HAVING, repeat the expression or wrap the query in a CTE), while ORDER BY can use aliases because it runs after SELECT. The database may physically execute things differently, but the result must match this logical order.",
      followUps: ["Why can't you filter on a window function's result in WHERE, and what do you do instead?"],
      source: { title: "SQLBolt — Lesson 12: Order of execution of a Query", url: "https://sqlbolt.com/lesson/select_queries_order_of_execution" },
    },
    {
      question: "What is the difference between ROW_NUMBER, RANK and DENSE_RANK?",
      answer:
        "All three are window functions that number rows in the order given by OVER (ORDER BY …), without collapsing rows the way GROUP BY does. ROW_NUMBER gives every row a distinct number, breaking ties arbitrarily unless the ORDER BY is unique. RANK gives tied rows the same number and leaves gaps after them (1, 1, 3). DENSE_RANK gives ties the same number without gaps (1, 1, 2). Add PARTITION BY to restart the numbering per group, which is the standard way to get the top N rows per group.",
      code: `-- Ranking tied scores
CREATE TABLE scores (player TEXT, points INTEGER);
INSERT INTO scores VALUES ('Ana', 90), ('Ben', 85), ('Cy', 90), ('Di', 70);
SELECT player, points,
       ROW_NUMBER() OVER (ORDER BY points DESC, player) AS row_num,
       RANK() OVER (ORDER BY points DESC) AS rnk,
       DENSE_RANK() OVER (ORDER BY points DESC) AS dense
FROM scores ORDER BY points DESC, player;
-- -> ('Ana', 90, 1, 1, 1)
-- -> ('Cy', 90, 2, 1, 1)
-- -> ('Ben', 85, 3, 3, 2)
-- -> ('Di', 70, 4, 4, 3)`,
      followUps: ["How would you return the top three salaries in each department?", "Which one would you use for \"the second-highest distinct salary\"?"],
      source: { title: "PostgreSQL Documentation — 9.22 Window Functions", url: "https://www.postgresql.org/docs/current/functions-window.html" },
    },
    {
      question: "Why can NOT IN return no rows when you expect some? When would you use NOT EXISTS?",
      answer:
        "x NOT IN (subquery) is true only if x is unequal to every value returned. If the subquery returns a NULL, the comparison with that NULL is unknown, so NOT IN is never true and the query returns nothing. NOT EXISTS (or LEFT JOIN … WHERE right.id IS NULL) asks whether a matching row exists, so NULLs do not break it. Prefer NOT EXISTS for \"rows with no match\" unless the subquery column is NOT NULL.",
      code: `-- One order has no user
CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE orders (id INTEGER PRIMARY KEY, user_id INTEGER);
INSERT INTO users VALUES (1, 'Ana'), (2, 'Ben');
INSERT INTO orders VALUES (10, 1), (11, NULL);
SELECT name FROM users WHERE id NOT IN (SELECT user_id FROM orders);
SELECT name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
-- -> ('Ben',)`,
      followUps: ["How would you write the same query with a LEFT JOIN?"],
      source: { title: "PostgreSQL Documentation — 9.25 Subquery Expressions: NOT IN", url: "https://www.postgresql.org/docs/current/functions-subquery.html" },
    },
    {
      question: "When would you use a subquery, a JOIN or a common table expression (CTE)?",
      answer:
        "Use a JOIN when you need columns from both tables in the output. Use a subquery when you only need a value or a yes/no check from another table, such as a scalar maximum or an EXISTS test. Use a CTE (WITH name AS (…)) to name an intermediate result so a multi-step query reads top to bottom, or when the same intermediate result is used more than once. They are often interchangeable for correctness; choose the clearest, then check the plan if performance matters. In current PostgreSQL a simple CTE used once is usually inlined like a subquery, so it is not automatically slower.",
      followUps: ["Rewrite a query that filters on an aggregate using a CTE.", "What is a correlated subquery?"],
      source: { title: "PostgreSQL Documentation — 7.8 WITH Queries (Common Table Expressions)", url: "https://www.postgresql.org/docs/current/queries-with.html" },
    },
    {
      question: "How would you find the second-highest value in a column?",
      answer:
        "Two common approaches: SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees), or SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1. DISTINCT matters when the top value is duplicated. The MAX version returns NULL when there is no second value; the LIMIT version returns no row, so wrap it in a scalar subquery if the caller needs NULL. For the Nth value or per-group answers, DENSE_RANK generalizes better. State the edge cases (ties, fewer than two rows, NULLs) before writing.",
      followUps: ["How does your query change for the Nth-highest value per department?"],
      source: { title: "PostgreSQL Documentation — 7.6 LIMIT and OFFSET", url: "https://www.postgresql.org/docs/current/queries-limit.html" },
    },
    {
      question: "A query in your API is slow. How do you investigate?",
      answer:
        "Reproduce it with realistic data, then run EXPLAIN (estimated plan) or EXPLAIN ANALYZE (which really executes it and shows actual rows and time). Look for a sequential scan over a large table where only a few rows are needed, estimates far from actual row counts, and expensive sorts or joins. Common fixes: add an index on the filtered or joined columns — PostgreSQL does not index foreign-key columns automatically — order a multi-column index to match the query, select only the columns you need, paginate, and avoid issuing one query per row from application code. Measure again after the change; an index costs storage and write speed, so keep only those that help.",
      followUps: ["Why might PostgreSQL choose a sequential scan even though an index exists?", "Why does column order matter in a multi-column index?"],
      source: { title: "PostgreSQL Documentation — 14.1 Using EXPLAIN", url: "https://www.postgresql.org/docs/current/using-explain.html" },
    },
    {
      question: "How do you insert a row and get its generated id back, or insert-or-update in PostgreSQL?",
      answer:
        "Add RETURNING to INSERT, UPDATE or DELETE to get columns of the affected rows, such as the generated id, without a second query. For insert-or-update (upsert), use INSERT … ON CONFLICT (column) DO UPDATE SET … (or DO NOTHING); it needs a unique constraint or index on that column to detect the conflict, and it is atomic, unlike checking first and inserting second, which can race with another request.",
      followUps: ["Why is \"SELECT, then INSERT if missing\" unsafe under concurrent requests?"],
      source: { title: "PostgreSQL Documentation — INSERT (ON CONFLICT and RETURNING)", url: "https://www.postgresql.org/docs/current/sql-insert.html" },
    },
    {
      question: "How do you run several related changes safely from Python with psycopg?",
      answer:
        "Run them in one transaction so they all commit or all roll back. psycopg starts a transaction on the first statement and does not commit until you call commit(); with a connection context (with psycopg.connect(...) as conn) it commits on success and rolls back on an exception, and with conn.transaction() you can mark an explicit block. Pass every value as a parameter (%s placeholders with a separate tuple). Keep transactions short — no network calls or user waits inside — and for read-then-write logic such as decrementing stock, prefer one atomic UPDATE (SET stock = stock - 1 WHERE id = %s AND stock > 0) or lock the row with SELECT … FOR UPDATE.",
      followUps: ["What happens to later statements after an error inside a PostgreSQL transaction?"],
      source: { title: "Psycopg 3 — Transactions management", url: "https://www.psycopg.org/psycopg3/docs/basic/transactions.html" },
    },
  ],
  mistakes: [
    "Using LIMIT/OFFSET without an ORDER BY that gives a unique order, so pages repeat or skip rows.",
    "Using NOT IN against a subquery that can return NULL.",
    "Joining before thinking about row counts, then \"fixing\" duplicated rows with DISTINCT instead of fixing the join.",
    "Putting an aggregate condition in WHERE instead of HAVING, or a row condition in HAVING instead of WHERE.",
    "Running EXPLAIN ANALYZE on an UPDATE or DELETE outside a transaction you roll back.",
    "Adding an index without measuring, or assuming foreign-key columns are indexed automatically.",
    "Building SQL with f-strings or the % operator instead of passing parameters to execute.",
    "Forgetting that psycopg needs a commit, so changes silently disappear.",
    "Copying a SQLite or MySQL habit (loose GROUP BY, double-quoted strings) into PostgreSQL.",
  ],
  mastery: [
    "Without notes, you solve the PostgreSQL Exercises Basic, Joins and Subqueries, Aggregation (through the first-booking exercise) and Modifying data categories, and can explain each answer aloud.",
    "You can solve an unfamiliar medium SQL problem (such as Confirmation Rate or Game Play Analysis IV) by first stating the tables, joins, grouping and edge cases. Editorial benchmark: no fixed time is an employer standard.",
    "You can explain logical query order, NULL pitfalls in NOT IN, RANK versus DENSE_RANK, and when to use a JOIN, subquery or CTE.",
    "Your project's queries are parameterized, run in transactions where they belong, and you can show an EXPLAIN plan before and after one index you added.",
    "SQL rounds are conditional: if one is confirmed, add the window-function exercises and the LeetCode SQL 50 study plan; otherwise move on once the professional criteria above are met.",
    "Skip this topic if you can already do all of the above in PostgreSQL or another relational database.",
  ],
  deprioritize: [
    "Recursive CTEs, window frames (ROWS BETWEEN …) and advanced analytic SQL unless a SQL-heavy role or round requires them.",
    "Isolation levels in depth, locking internals, VACUUM and planner configuration.",
    "Stored procedures, triggers, views, partitioning and database administration.",
    "Large SQL problem banks beyond what a confirmed SQL assessment justifies.",
  ],
  keywords: [
    "PostgreSQL",
    "Postgres",
    "SQL practice",
    "join",
    "self join",
    "subquery",
    "CTE",
    "common table expression",
    "WITH",
    "window function",
    "ROW_NUMBER",
    "RANK",
    "DENSE_RANK",
    "NOT EXISTS",
    "EXPLAIN",
    "EXPLAIN ANALYZE",
    "query plan",
    "index",
    "upsert",
    "ON CONFLICT",
    "RETURNING",
    "psycopg",
    "pgexercises",
    "SQL 50",
  ],
};

export default topic;
