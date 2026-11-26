import type { Topic } from "../types";

const topic: Topic = {
  slug: "databases-sql-concepts",
  title: "Databases and SQL Concepts",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Most applications keep their data in a relational database and query it with SQL, so reading and writing everyday queries and explaining keys, indexes and transactions is a core backend job skill. The code examples run in SQLite (built into Python); comments mark where PostgreSQL behaves differently.",
  whyItMatters:
    "SQL and relational databases appear in many backend and full-stack postings (15 of 28 in this curriculum's R4 sample), and Amazon's official interview topics include database concepts such as relational versus non-relational databases. Dedicated SQL interview rounds, however, were not found in the US entry-level evidence reviewed; the SQL assessments found were in non-US online assessments (Accenture India, Wise UK) and one internship (Klaviyo). So treat SQL as an essential job skill for backend work and a conditional interview topic: prepare it for interviews when the posting stresses SQL or your recruiter confirms a SQL round.",
  prerequisites: ["Dictionaries and Lists (for thinking in records)", "Command Line and Development Environment"],
  objectives: [
    "Tables, rows, columns and schemas; primary keys, foreign keys and constraints (NOT NULL, UNIQUE, CHECK).",
    "One-to-many (foreign key on the \"many\" side) and many-to-many (join table) relationships; normalization at a basic level (do not duplicate data).",
    "CRUD: INSERT, SELECT, UPDATE, DELETE — always with a WHERE on UPDATE and DELETE.",
    "WHERE, ORDER BY, LIMIT; NULL is unknown, so use IS NULL, and COUNT(*) counts rows while COUNT(column) skips NULLs.",
    "INNER JOIN (matches only) versus LEFT JOIN (all left rows, NULLs where no match).",
    "COUNT, SUM, AVG, MIN, MAX with GROUP BY; WHERE filters rows before grouping, HAVING filters groups after.",
    "Indexes speed up selective reads but cost storage and slow writes.",
    "Transactions and ACID; a lost update as an example of an isolation problem.",
    "Parameterized queries from Python (sqlite3 uses ?, psycopg uses %s passed separately); string formatting causes SQL injection.",
    "Relational versus document and key-value databases, and when each fits.",
    "Skip for now: window functions and complex subqueries (learn them if a SQL round is confirmed), query planning, replication, sharding and ORM details.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "SQLBolt — Lessons 1–12 and the exercises",
      url: "https://sqlbolt.com/lesson/select_queries_introduction",
      provider: "SQLBolt",
      type: "Interactive",
      instructions:
        "Start here. Free interactive lessons in the browser; no account. Do lessons 1–12 (queries, constraints, joins, outer joins, NULLs, expressions, aggregates, order of execution) with every exercise, then lessons 13–18 (inserting, updating, deleting, creating, altering and dropping tables), which are quick.",
    },
    {
      title: "CS50's Introduction to Databases with SQL",
      url: "https://cs50.harvard.edu/sql/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative, and the place to learn schema design and indexes in more depth. Watch lectures 0 (Querying), 1 (Relating), 2 (Designing) and 5 (Optimizing: indexes and transactions). Skip the rest unless you are targeting backend roles. Free; lectures need no account.",
    },
    {
      title: "PostgreSQL Documentation — Tutorial: 3.4 Transactions",
      url: "https://www.postgresql.org/docs/current/tutorial-transactions.html",
      provider: "PostgreSQL Global Development Group",
      type: "Documentation",
      instructions: "Short official explanation of transactions with a bank-transfer example. Read the page; skip savepoints if short on time.",
    },
    {
      title: "OWASP — SQL Injection Prevention Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions: "Read the introduction and Option 1 (prepared statements with parameterized queries). Skip the language-specific and stored-procedure details.",
    },
  ],
  exercises: [
    {
      title: "SQLBolt exercises for lessons 1–12",
      url: "https://sqlbolt.com/lesson/select_queries_introduction",
      note: "Foundation: filtering, sorting, joins, NULLs and aggregates. Free and in the browser; no account.",
    },
    {
      title: "Combine Two Tables (LeetCode)",
      url: "https://leetcode.com/problems/combine-two-tables/",
      note: "Easy. LEFT JOIN with NULLs. LeetCode needs a free account to submit.",
    },
    {
      title: "Customers Who Never Order (LeetCode)",
      url: "https://leetcode.com/problems/customers-who-never-order/",
      note: "Easy. LEFT JOIN … IS NULL, or NOT EXISTS.",
    },
    {
      title: "Duplicate Emails (LeetCode)",
      url: "https://leetcode.com/problems/duplicate-emails/",
      note: "Easy. GROUP BY with HAVING.",
    },
    {
      title: "CS50 SQL — Problem Set 2: ATL, Happy to Connect, Union Square Donuts",
      url: "https://cs50.harvard.edu/sql/psets/2/",
      note: "Design schemas from written requirements: tables, keys, relationships and constraints, in SQLite. Free; working and submitting use CS50's browser-based codespace, which requires a free GitHub account. Do at least one of the three.",
    },
    {
      title: "Python documentation — sqlite3 Tutorial",
      url: "https://docs.python.org/3/library/sqlite3.html#sqlite3-tutorial",
      note: "Create a database, insert with placeholders, commit and query from Python. Then read \"How to use placeholders to bind values in SQL queries\" in the same page. No installation beyond Python.",
    },
  ],
  interviewQuestions: [
    {
      question: "What are primary keys and foreign keys?",
      answer:
        "A primary key uniquely identifies each row in a table and cannot be NULL. A foreign key is a column that refers to the primary key of another table, linking rows and letting the database enforce that the referenced row exists. A one-to-many relationship (one customer, many orders) puts the foreign key on the \"many\" side; a many-to-many relationship (students and courses) uses a join table with two foreign keys.",
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
      question: "What is the difference between an INNER JOIN and a LEFT JOIN?",
      answer:
        "An INNER JOIN returns only rows that have a match in both tables. A LEFT JOIN returns every row from the left table, with the right table's columns filled with NULL where there is no match. Use LEFT JOIN when you need rows even without related data, such as customers who have never ordered.",
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
      question: "What is the difference between WHERE and HAVING? How does GROUP BY work?",
      answer:
        "GROUP BY collapses rows with the same values into groups so aggregates such as COUNT or SUM are computed per group. WHERE filters individual rows before grouping; HAVING filters groups after aggregation. Every selected column must either be in the GROUP BY or be inside an aggregate function.",
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
      question: "How does NULL behave in SQL?",
      answer:
        "NULL means \"unknown\" or \"missing\", not zero or an empty string. Comparisons with NULL (= NULL, <> NULL) are neither true nor false, so rows are not matched; use IS NULL or IS NOT NULL. COUNT(*) counts rows, while COUNT(column) skips NULLs, and most aggregates ignore NULLs.",
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
      question: "What is an index, and what are its trade-offs?",
      answer:
        "An index is a separate data structure, usually a B-tree, that lets the database find rows by the indexed columns without scanning the whole table, turning a full scan into a fast lookup for selective queries. The costs are extra storage and slower inserts, updates and deletes, because every index must be kept in sync. Index columns frequently used to filter, join or sort; avoid indexing everything. Check whether a query uses an index with EXPLAIN QUERY PLAN in SQLite or EXPLAIN (ANALYZE) in PostgreSQL.",
      followUps: ["Why might the database not use an index for a query that filters on that column?"],
      source: { title: "PostgreSQL Documentation — 11.1 Indexes: Introduction", url: "https://www.postgresql.org/docs/current/indexes-intro.html" },
    },
    {
      question: "What is a transaction, and what does ACID mean?",
      answer:
        "A transaction groups several statements so they succeed or fail as one unit. ACID describes the guarantees: Atomicity (all or nothing), Consistency (constraints hold before and after), Isolation (concurrent transactions do not see each other's partial work, to a configurable degree) and Durability (committed data survives crashes). The classic example is a money transfer: the debit and the credit must both happen or neither. Weaker isolation levels can allow anomalies such as two transactions reading a balance and both overwriting it (a lost update). In Python's sqlite3, using the connection as a context manager (with db:) commits on success and rolls back on an exception.",
      followUps: ["What is a lost update, and how can a transaction or a lock prevent it?"],
      source: { title: "PostgreSQL Documentation — Tutorial: 3.4 Transactions", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html" },
    },
    {
      question: "How do you run SQL safely from application code?",
      answer:
        "Use parameterized queries (placeholders), passing values separately from the SQL text, so the database treats them as data, never as SQL. Building queries with string formatting or concatenation from user input allows SQL injection, where input such as ' OR '1'='1 changes the query's meaning. Placeholder style depends on the driver: sqlite3 uses ?, while psycopg (PostgreSQL) uses %s — still passed separately, never with Python's % operator. ORMs and query builders parameterize for you, but raw string formatting inside them is still dangerous.",
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
      question: "When would you choose a relational database over a non-relational one?",
      answer:
        "Choose a relational database when data has clear structure and relationships, you need joins and ad hoc queries, and you need transactions and constraints to keep data correct, which covers most business applications. Non-relational databases suit specific needs: document stores for flexible, nested records read as a whole; key-value stores for very fast lookups by key, such as caches and sessions; others for graphs or time series. Many systems use a relational database by default and add a specialized store where needed.",
      followUps: ["What does normalization mean, and when might you denormalize?"],
      source: { title: "AWS — What is a NoSQL database?", url: "https://aws.amazon.com/nosql/" },
    },
  ],
  mistakes: [
    "Running UPDATE or DELETE without a WHERE clause.",
    "Comparing with = NULL instead of IS NULL.",
    "Using INNER JOIN when rows without matches should still appear.",
    "Building SQL with string formatting from user input.",
    "Adding indexes to every column, or none at all.",
    "Assuming transactions are automatic for multi-step changes in application code.",
    "Treating SQL as an interview requirement for every role without checking the posting.",
  ],
  mastery: [
    "You can design tables with keys and constraints for a small domain and explain the relationships.",
    "You can write queries with filtering, sorting, joins, grouping and aggregation without reference, handling NULL correctly.",
    "You can explain indexes, transactions, ACID and SQL injection prevention, with an example of each.",
    "You can run parameterized queries from Python.",
    "Backend targets go further in Backend Engineering; general targets can stop here unless the posting stresses SQL.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "Detailed PostgreSQL features, query planning and advanced optimization.",
    "Window functions and complex subqueries beyond recognition (learn them if a SQL round is confirmed).",
    "Replication, sharding, database administration and isolation-level internals.",
    "ORM-specific details (covered with the backend stack).",
  ],
  keywords: [
    "SQL",
    "database",
    "relational database",
    "primary key",
    "foreign key",
    "join",
    "left join",
    "group by",
    "having",
    "NULL",
    "index",
    "transaction",
    "ACID",
    "normalization",
    "SQL injection",
    "parameterized query",
    "NoSQL",
    "sqlite",
  ],
};

export default topic;
