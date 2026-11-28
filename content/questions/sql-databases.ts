import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "SQL",
    question: "What are primary keys and foreign keys?",
    answer: "A primary key uniquely identifies each row in a table and cannot be NULL (SQLite is a legacy exception: non-integer primary key columns accept NULL unless declared NOT NULL). A foreign key is a column that refers to the primary key (or another unique key) of another table, linking rows and letting the database enforce that the referenced row exists. A one-to-many relationship (one customer, many orders) puts the foreign key on the \"many\" side; a many-to-many relationship (students and courses) uses a join table with two foreign keys.",
    code: `-- One customer has many orders
-- Dialect: in SQLite, INTEGER PRIMARY KEY auto-assigns ids; PostgreSQL uses
-- id INTEGER GENERATED ALWAYS AS IDENTITY (or SERIAL). SQLite enforces foreign keys
-- only after PRAGMA foreign_keys = ON; PostgreSQL always enforces them.
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  total REAL NOT NULL CHECK (total >= 0)   -- use NUMERIC(10, 2) for money in PostgreSQL
);`,
    followUps: ["How would you model students enrolling in many courses?"],
    source: { title: "PostgreSQL Documentation — Tutorial: 3.3 Foreign Keys", url: "https://www.postgresql.org/docs/current/tutorial-fk.html" },
  },
  {
    group: "SQL",
    question: "What is the difference between an INNER JOIN and a LEFT JOIN?",
    answer: "An INNER JOIN returns only rows that have a match in both tables. A LEFT JOIN returns every row from the left table, with the right table's columns filled with NULL where there is no match. Use LEFT JOIN when you need rows even without related data, such as customers who have never ordered.",
    code: `-- Customers and orders
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, total REAL);
INSERT INTO customers VALUES (1, 'Ana'), (2, 'Ben');
INSERT INTO orders VALUES (10, 1, 25.0);
SELECT c.name, o.total FROM customers c INNER JOIN orders o ON o.customer_id = c.id;
-- -> ('Ana', 25.0)
SELECT c.name, o.total FROM customers c LEFT JOIN orders o ON o.customer_id = c.id ORDER BY c.name;
-- -> ('Ana', 25.0)
-- -> ('Ben', None)
SELECT c.name FROM customers c LEFT JOIN orders o ON o.customer_id = c.id WHERE o.id IS NULL;
-- -> ('Ben',)`,
    followUps: ["How would you write the last query with NOT EXISTS instead?"],
    source: { title: "SQLBolt — Lesson 7: OUTER JOINs", url: "https://sqlbolt.com/lesson/select_queries_with_outer_joins" },
  },
  {
    group: "SQL",
    question: "What is the difference between WHERE and HAVING? How does GROUP BY work?",
    answer: "GROUP BY collapses rows with the same values into groups so aggregates such as COUNT or SUM are computed per group. WHERE filters individual rows before grouping; HAVING filters groups after aggregation. Every selected column must either be in the GROUP BY or be inside an aggregate function (PostgreSQL also accepts columns that depend on a grouped primary key).",
    code: `-- Orders per customer
CREATE TABLE orders (id INTEGER PRIMARY KEY, customer TEXT, total REAL);
INSERT INTO orders (customer, total) VALUES ('Ana', 20), ('Ana', 30), ('Ben', 5), ('Cy', 50), ('Cy', 10), ('Cy', 15);
SELECT customer, COUNT(*), SUM(total) FROM orders WHERE total >= 10 GROUP BY customer HAVING COUNT(*) >= 2 ORDER BY customer;
-- -> ('Ana', 2, 50.0)
-- -> ('Cy', 3, 75.0)`,
    followUps: ["SELECT customer, total FROM orders GROUP BY customer runs in SQLite (and MySQL without ONLY_FULL_GROUP_BY) but PostgreSQL rejects it. Why is the strict behavior safer?"],
    source: { title: "SQLBolt — Lesson 11: Queries with aggregates (Pt. 2)", url: "https://sqlbolt.com/lesson/select_queries_with_aggregates_pt_2" },
  },
  {
    group: "SQL",
    question: "How does NULL behave in SQL?",
    answer: "NULL means \"unknown\" or \"missing\", not zero or an empty string. Comparisons with NULL (= NULL, <> NULL) evaluate to UNKNOWN, neither true nor false, so WHERE does not match the row; use IS NULL or IS NOT NULL. COUNT(*) counts rows, while COUNT(column) skips NULLs, and most aggregates ignore NULLs.",
    code: `-- Optional phone numbers
CREATE TABLE users (name TEXT, phone TEXT);
INSERT INTO users VALUES ('Ana', '555-0101'), ('Ben', NULL), ('Cy', NULL);
SELECT COUNT(*), COUNT(phone) FROM users;
-- -> (3, 1)
SELECT name FROM users WHERE phone = NULL;
SELECT name FROM users WHERE phone IS NULL ORDER BY name;
-- -> ('Ben',)
-- -> ('Cy',)`,
    followUps: ["What does COALESCE do?"],
    source: { title: "SQLBolt — Lesson 8: A short note on NULLs", url: "https://sqlbolt.com/lesson/select_queries_with_nulls" },
  },
  {
    group: "SQL",
    question: "How do you run SQL safely from application code?",
    answer: "Use parameterized queries (placeholders), passing values separately from the SQL text, so the database treats them as data, never as SQL. Building queries with string formatting or concatenation from user input allows SQL injection, where input such as ' OR '1'='1 changes the query's meaning. Placeholder style depends on the driver: sqlite3 uses ?, while psycopg (PostgreSQL) uses %s — still passed separately, never with Python's % operator. ORMs and query builders parameterize for you, but raw string formatting inside them is still dangerous.",
    code: `import sqlite3

db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE users (name TEXT, role TEXT)")
db.executemany("INSERT INTO users VALUES (?, ?)", [("ana", "admin"), ("ben", "user")])

user_input = "nobody' OR '1'='1"
unsafe = db.execute(f"SELECT name FROM users WHERE name = '{user_input}'").fetchall()
safe = db.execute("SELECT name FROM users WHERE name = ?", (user_input,)).fetchall()
print(unsafe, safe)   # -> [('ana',), ('ben',)] []`,
    followUps: ["Can you parameterize a table or column name? What would you do instead?"],
    source: { title: "OWASP — SQL Injection Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
  },
  {
    group: "SQL",
    question: "When would you choose a relational database over a non-relational one?",
    answer: "Choose a relational database when data has clear structure and relationships, you need joins and ad hoc queries, and you need transactions and constraints to keep data correct, which covers most business applications. Non-relational databases suit specific needs: document stores for flexible, nested records read as a whole; key-value stores for very fast lookups by key, such as caches and sessions; others for graphs or time series. Many systems use a relational database by default and add a specialized store where needed.",
    followUps: ["What does normalization mean, and when might you denormalize?"],
    source: { title: "AWS — What is a NoSQL database?", url: "https://aws.amazon.com/nosql/" },
  },
  {
    group: "SQL",
    question: "In what order is a SELECT statement evaluated, and why does it matter?",
    answer: "Logically: FROM and JOINs build the rows, WHERE filters them, GROUP BY forms groups, HAVING filters groups, SELECT computes the output columns (window functions run here), then DISTINCT, ORDER BY and finally LIMIT/OFFSET. That explains common errors: you cannot use an aggregate in WHERE (use HAVING) or a SELECT alias in WHERE (repeat the expression or wrap the query in a CTE), because neither exists yet, while ORDER BY can use aliases because it runs after SELECT. Dialects relax this: SQLite accepts aliases in WHERE, and MySQL in HAVING; PostgreSQL follows the logical order. The database may physically execute things differently, but the result must match this logical order.",
    followUps: ["Why can't you filter on a window function's result in WHERE, and what do you do instead?"],
    source: { title: "SQLBolt — Lesson 12: Order of execution of a Query", url: "https://sqlbolt.com/lesson/select_queries_order_of_execution" },
  },
  {
    group: "SQL",
    question: "What is the difference between ROW_NUMBER, RANK and DENSE_RANK?",
    answer: "All three are window functions that number rows in the order given by OVER (ORDER BY …), without collapsing rows the way GROUP BY does. ROW_NUMBER gives every row a distinct number, breaking ties arbitrarily unless the ORDER BY is unique. RANK gives tied rows the same number and leaves gaps after them (1, 1, 3). DENSE_RANK gives ties the same number without gaps (1, 1, 2). Add PARTITION BY to restart the numbering per group, which is the standard way to get the top N rows per group.",
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
    followUps: ["How would you return the top three salaries in each department?","Which one would you use for \"the second-highest distinct salary\"?"],
    source: { title: "PostgreSQL Documentation — 9.22 Window Functions", url: "https://www.postgresql.org/docs/current/functions-window.html" },
  },
  {
    group: "SQL",
    question: "Why can NOT IN return no rows when you expect some? When would you use NOT EXISTS?",
    answer: "x NOT IN (subquery) is true only if x is unequal to every value returned. If the subquery returns a NULL, the comparison with that NULL is unknown, so NOT IN is never true and the query returns nothing. NOT EXISTS (or LEFT JOIN … WHERE right.id IS NULL) asks whether a matching row exists, so NULLs do not break it. Prefer NOT EXISTS for \"rows with no match\" unless the subquery column is NOT NULL.",
    code: `-- One order has no user
CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE orders (id INTEGER PRIMARY KEY, user_id INTEGER);
INSERT INTO users VALUES (1, 'Ana'), (2, 'Ben');
INSERT INTO orders VALUES (10, 1), (11, NULL);
SELECT name FROM users WHERE id NOT IN (SELECT user_id FROM orders);
-- -> no rows
SELECT name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
-- -> ('Ben',)`,
    followUps: ["How would you write the same query with a LEFT JOIN?"],
    source: { title: "PostgreSQL Documentation — 9.25 Subquery Expressions: NOT IN", url: "https://www.postgresql.org/docs/current/functions-subquery.html" },
  },
  {
    group: "SQL",
    question: "When would you use a subquery, a JOIN or a common table expression (CTE)?",
    answer: "Use a JOIN when you need columns from both tables in the output. Use a subquery when you only need a value or a yes/no check from another table, such as a scalar maximum or an EXISTS test. Use a CTE (WITH name AS (…)) to name an intermediate result so a multi-step query reads top to bottom, or when the same intermediate result is used more than once. They are often interchangeable for correctness; choose the clearest, then check the plan if performance matters. Since PostgreSQL 12, a non-recursive, side-effect-free CTE referenced once is inlined like a subquery (unless written AS MATERIALIZED), so it is not automatically slower.",
    followUps: ["Rewrite a query that filters on an aggregate using a CTE.","What is a correlated subquery?"],
    source: { title: "PostgreSQL Documentation — 7.8 WITH Queries (Common Table Expressions)", url: "https://www.postgresql.org/docs/current/queries-with.html" },
  },
  {
    group: "SQL",
    question: "How would you find the second-highest value in a column?",
    answer: "Two common approaches: SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees), or SELECT DISTINCT salary FROM employees WHERE salary IS NOT NULL ORDER BY salary DESC LIMIT 1 OFFSET 1. DISTINCT matters when the top value is duplicated, and the NULL filter matters in PostgreSQL, which sorts NULLs first in descending order (MySQL and SQLite sort them last). The MAX version returns NULL when there is no second value; the LIMIT version returns no row, so wrap it in a scalar subquery if the caller needs NULL. For the Nth value or per-group answers, DENSE_RANK generalizes better. State the edge cases (ties, fewer than two rows, NULLs) before writing.",
    followUps: ["How does your query change for the Nth-highest value per department?"],
    source: { title: "PostgreSQL Documentation — 7.6 LIMIT and OFFSET", url: "https://www.postgresql.org/docs/current/queries-limit.html" },
  },
  {
    group: "Analytical SQL",
    question: "How do you remove duplicate records, keeping only the latest version of each?",
    answer: "Number the rows within each business key, newest first, and keep row 1. ROW_NUMBER (not RANK) guarantees exactly one row per key even when timestamps tie, so add a tie-breaker column to make the choice deterministic. In a pipeline, write the result to a new table or use it in a MERGE rather than deleting in place, so a bad run can be repeated safely.",
    code: `CREATE TABLE customers_raw (id int, email text, updated_at date);
INSERT INTO customers_raw VALUES
  (1, 'a@x.com', '2026-01-01'), (1, 'a@new.com', '2026-03-01'), (2, 'b@x.com', '2026-02-01');

WITH ranked AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY id ORDER BY updated_at DESC) AS rn
  FROM customers_raw
)
SELECT id, email, updated_at FROM ranked WHERE rn = 1 ORDER BY id;
-- -> (1, 'a@new.com', 2026-03-01)
-- -> (2, 'b@x.com', 2026-02-01)`,
    followUps: ["How would you deduplicate exact duplicate rows that have no id?"],
    source: { title: "PostgreSQL Documentation — Window Functions tutorial", url: "https://www.postgresql.org/docs/current/tutorial-window.html" },
  },
  {
    group: "Analytical SQL",
    question: "How do you calculate a running total and a rolling average?",
    answer: "Use aggregate functions as window functions. SUM(...) OVER (ORDER BY day) gives a running total, because the default frame runs from the first row to the current row and its peers: rows that tie on the ORDER BY value all get the same total, so order by a unique key if you need one row at a time. For a rolling average, set the frame explicitly. ROWS BETWEEN 2 PRECEDING AND CURRENT ROW means the last three rows, which is wrong when days are missing; RANGE with an interval means the last three calendar days (PostgreSQL 11+ and MySQL 8; SQLite supports only numeric RANGE offsets). Alternatively, join to a complete calendar of dates first so every day has a row.",
    code: `-- PostgreSQL. daily_sales(day date, revenue int): rows for Jan 1, 2, 3 and 5 (Jan 4 is missing)
-- AVG output shown rounded; PostgreSQL prints numeric, e.g. 10.0000000000000000
SELECT day, revenue,
       SUM(revenue) OVER (ORDER BY day) AS running_total,
       AVG(revenue) OVER (ORDER BY day ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS last_3_rows,
       AVG(revenue) OVER (ORDER BY day RANGE BETWEEN INTERVAL '2 days' PRECEDING AND CURRENT ROW) AS last_3_days
FROM daily_sales ORDER BY day;
-- -> (2026-01-01, 10,  10, 10.0, 10.0)
-- -> (2026-01-02, 20,  30, 15.0, 15.0)
-- -> (2026-01-03, 30,  60, 20.0, 20.0)
-- -> (2026-01-05, 40, 100, 30.0, 35.0)   rows: (20+30+40)/3, days: (30+40)/2`,
    source: { title: "PostgreSQL Documentation — Window function calls", url: "https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS" },
  },
  {
    group: "Analytical SQL",
    question: "How do you compare each row with the previous one, and find consecutive streaks?",
    answer: "LAG(column) OVER (ORDER BY …) returns the previous row's value, so revenue - LAG(revenue) is the change from the previous day; LEAD looks ahead. For streaks of consecutive days (a “gaps and islands” problem), subtract each row's ROW_NUMBER from its date: consecutive dates produce the same result, which becomes a group key. Remove duplicate dates first, or repeated logins on one day break the streak. Date minus integer is PostgreSQL syntax; other databases use a date-add function.",
    code: `WITH days AS (SELECT DISTINCT user_id, day FROM logins),
numbered AS (
  SELECT user_id, day,
         day - CAST(ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY day) AS int) AS grp
  FROM days
)
SELECT user_id, MIN(day) AS streak_start, COUNT(*) AS days
FROM numbered GROUP BY user_id, grp HAVING COUNT(*) >= 2;
-- logins: user 1 on Jan 1, 2 (twice), 3 and 5; user 2 on Jan 1 and 3
-- -> (1, 2026-01-01, 3)`,
    followUps: ["Find users who logged in on three or more consecutive days."],
    source: { title: "PostgreSQL Documentation — Window functions (LAG, LEAD)", url: "https://www.postgresql.org/docs/current/functions-window.html" },
  },
  {
    group: "Analytical SQL",
    question: "How do you turn rows into columns, for example counts per status for each country?",
    answer: "Use conditional aggregation: group by the row key and aggregate a CASE expression for each column you want. PostgreSQL and SQLite also support the shorter FILTER clause (MySQL does not). This is portable, readable and usually faster than joining the table to itself once per category. If the categories are not known in advance, produce rows instead and pivot in the reporting tool.",
    code: `-- orders: US paid 20, US paid 40, US refunded 15, UK paid 30
SELECT country,
       COUNT(*) AS orders,
       SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS paid_amount,
       COUNT(*) FILTER (WHERE status = 'refunded') AS refunds
FROM orders GROUP BY country ORDER BY country;
-- -> ('UK', 1, 30, 0)
-- -> ('US', 3, 60, 1)`,
    source: { title: "PostgreSQL Documentation — Aggregate expressions (FILTER)", url: "https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-AGGREGATES" },
  },
  {
    group: "Database design",
    question: "How would you design the database schema for a feature, for example posts with comments and tags?",
    answer: "Start from the requirements and the queries, not the tables. List the entities (users, posts, comments, tags) and the relationships: a user writes many posts and comments (foreign keys on posts and comments), a post has many comments, and posts and tags are many-to-many, so add a post_tags join table with a composite primary key on (post_id, tag_id). Give each table a primary key, add NOT NULL and UNIQUE where the rules demand them (tag names, user emails) and choose an ON DELETE action for each foreign key. Then look at the main queries — a post with its comments, posts for a tag — and index the foreign keys and filter columns they use. State your assumptions and what you would change if requirements grew.",
    followUps: ["Which columns would you index first, and why?","Would you use integer or UUID ids?"],
  },
  {
    group: "Database design",
    question: "What is normalization? Explain the first three normal forms and when you would denormalize.",
    answer: "Normalization organizes data so each fact is stored once, which removes duplication and the update anomalies it causes. First normal form: each column holds one value and there are no repeating groups (no tag1, tag2, tag3 columns or comma-separated lists). Second: every non-key column depends on the whole primary key, which matters for composite keys. Third: non-key columns depend only on the key, not on other non-key columns — a customer's city belongs in customers, not copied into every order. Denormalize deliberately for read performance or reporting, such as storing a comment count on posts, and accept that you must keep the copy in sync (in the same transaction, or by recomputing it).",
    followUps: ["What anomaly occurs if a customer's address is copied into every order row?"],
    source: { title: "Microsoft Learn — Description of the database normalization basics", url: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description" },
  },
  {
    group: "Database design",
    question: "What is a schema migration, and how do you change a production schema safely?",
    answer: "A migration is a versioned script that moves the schema from one version to the next (and ideally back), stored in the repository and applied the same way in every environment, for example with Alembic. Autogenerated migrations are a draft: review them, because tools miss renames (they appear as drop plus add, losing data) and unnamed constraints. Make changes in safe steps — add a nullable column, deploy code that writes it, backfill existing rows, then add the NOT NULL constraint — test the upgrade and the downgrade on a copy of realistic data, and never edit a migration that has already run elsewhere.",
    followUps: ["How would you rename a column without breaking the running application?"],
    source: { title: "Alembic — What does Autogenerate Detect (and what does it not detect?)", url: "https://alembic.sqlalchemy.org/en/latest/autogenerate.html" },
  },
  {
    group: "Database design",
    question: "What does an ORM do, and what are its trade-offs?",
    answer: "An ORM such as SQLAlchemy maps classes to tables and objects to rows, and its Session tracks the objects you load and change, then flushes the needed INSERT, UPDATE and DELETE statements in one transaction when you commit (the unit-of-work pattern). Benefits: less repetitive SQL, parameterized queries by default, and relationships navigable as attributes. Costs: generated SQL can be inefficient if you do not look at it (especially N+1 lazy loading), and complex reports are often clearer in SQL. You still need to understand the SQL and the schema underneath.",
    followUps: ["What is the difference between flush and commit in SQLAlchemy?"],
    source: { title: "SQLAlchemy Unified Tutorial — Data Manipulation with the ORM", url: "https://docs.sqlalchemy.org/en/20/tutorial/orm_data_manipulation.html" },
  },
  {
    group: "Performance & transactions",
    question: "What is an index, and what are its trade-offs?",
    answer: "An index is a separate data structure, usually a B-tree, that lets the database find rows by the indexed columns without scanning the whole table, turning a full scan into a fast lookup for selective queries. The costs are extra storage and slower inserts, updates and deletes, because every index must be kept in sync. Index columns frequently used to filter, join or sort; avoid indexing everything. Check whether a query uses an index with EXPLAIN QUERY PLAN in SQLite or EXPLAIN (ANALYZE) in PostgreSQL.",
    followUps: ["Why might the database not use an index for a query that filters on that column?"],
    source: { title: "PostgreSQL Documentation — 11.1 Indexes: Introduction", url: "https://www.postgresql.org/docs/current/indexes-intro.html" },
  },
  {
    group: "Performance & transactions",
    question: "What is a transaction, and what does ACID mean?",
    answer: "A transaction groups several statements so they succeed or fail as one unit. ACID describes the guarantees: Atomicity (all or nothing), Consistency (constraints hold before and after), Isolation (concurrent transactions do not see each other's partial work, to a degree set by the isolation level) and Durability (committed data survives crashes). The classic example is a money transfer: the debit and the credit must both happen or neither. In Python's sqlite3, using the connection as a context manager (with db:) commits on success and rolls back on an exception.",
    source: { title: "PostgreSQL Documentation — Tutorial: 3.4 Transactions", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html" },
  },
  {
    group: "Performance & transactions",
    question: "What are transaction isolation levels, and which anomalies does each allow?",
    answer: "The SQL standard defines four levels by the anomalies they forbid: READ UNCOMMITTED allows dirty reads (seeing uncommitted changes); READ COMMITTED prevents those, but reading a row twice can return different values; REPEATABLE READ keeps rows you have read unchanged, but new matching rows (phantoms) may appear; SERIALIZABLE gives the same result as running the transactions one at a time. Behaviour differs by database, so name it: PostgreSQL defaults to READ COMMITTED, and its REPEATABLE READ is a snapshot that also prevents phantoms but still allows write skew, which only SERIALIZABLE prevents; MySQL InnoDB defaults to REPEATABLE READ; SQLite transactions are serializable. The anomaly interviewers ask about most is the lost update (two transactions read a balance, then both write a new value): prevent it with an atomic UPDATE, a row lock (SELECT … FOR UPDATE) or a stricter level, and retry transactions that fail with a serialization error.",
    code: `-- PostgreSQL, two sessions; balance starts at 100, each session reads it, then sets it to 90
-- READ COMMITTED:  both commit -> final 90 (one withdrawal lost)
-- REPEATABLE READ: second UPDATE fails: could not serialize access due to concurrent update
-- Atomic update instead: two concurrent sessions -> final 80
UPDATE accounts SET balance = balance - 10 WHERE id = 1;`,
    followUps: ["What is write skew? Give an example that REPEATABLE READ in PostgreSQL does not prevent."],
    source: { title: "PostgreSQL Documentation — 13.2 Transaction Isolation", url: "https://www.postgresql.org/docs/current/transaction-iso.html" },
  },
  {
    group: "Performance & transactions",
    question: "A query in your API is slow. How do you investigate?",
    answer: "Reproduce it with realistic data, then run EXPLAIN (estimated plan) or EXPLAIN ANALYZE (which really executes it and shows actual rows and time). Look for a sequential scan over a large table where only a few rows are needed, estimates far from actual row counts, and expensive sorts or joins. Common fixes: add an index on the filtered or joined columns — PostgreSQL does not index foreign-key columns automatically (MySQL InnoDB does) — order a multi-column index to match the query, select only the columns you need, paginate, and avoid issuing one query per row from application code. Measure again after the change; an index costs storage and write speed, so keep only those that help.",
    followUps: ["Why might PostgreSQL choose a sequential scan even though an index exists?","Why does column order matter in a multi-column index?"],
    source: { title: "PostgreSQL Documentation — 14.1 Using EXPLAIN", url: "https://www.postgresql.org/docs/current/using-explain.html" },
  },
  {
    group: "Performance & transactions",
    question: "What is the N+1 query problem, and how do you fix it?",
    answer: "It happens when code loads a list of N objects with one query and then touches a lazily loaded relationship on each, triggering one more query per object: N+1 round trips where one or two would do. It is easy to miss because each query is fast and the code looks innocent. Detect it by logging SQL (echo=True) or counting queries in tests, and fix it by eager loading — in SQLAlchemy, selectinload loads all the children in one extra query, and joinedload uses a JOIN — or by writing the join yourself.",
    followUps: ["When would joined loading be worse than selectin loading?"],
    source: { title: "SQLAlchemy Unified Tutorial — Loader Strategies", url: "https://docs.sqlalchemy.org/en/20/tutorial/orm_related_objects.html#loader-strategies" },
  },
  {
    group: "Performance & transactions",
    question: "Where should a transaction begin and end in a web application?",
    answer: "Usually one session per request: open it at the start of the request, do the work of one business operation, commit once at the end for requests that change data, roll back on an error, and always close it. Keep the session's lifecycle outside the functions that read and write data, so they can be combined in one transaction and tested. Keep transactions short: do not hold one open across slow external calls or user interaction, because it keeps locks and connections busy.",
    followUps: ["Two steps must both succeed, but one is a call to an external payment API. How do you handle that?"],
    source: { title: "SQLAlchemy — Session Basics: When do I construct a Session, when do I commit it, and when do I close it?", url: "https://docs.sqlalchemy.org/en/20/orm/session_basics.html" },
  },
];

export default questions;
