import type { Topic } from "../types";

const topic: Topic = {
  slug: "databases-sql-concepts",
  title: "Databases and SQL Concepts",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Most applications store their data in a database. This topic covers relational databases — tables, keys, relationships, constraints and normalization — and the SQL you need to read and write everyday queries: CRUD, filtering, sorting, joins, aggregation and NULL handling. It also explains indexes, transactions, ACID and safe parameterized queries, and when a non-relational database is a better fit. Building a backend on PostgreSQL comes in Backend Engineering. The examples run in SQLite (built into Python); comments mark where PostgreSQL or other databases behave differently.",
  whyItMatters:
    "SQL and relational databases appear in many backend and full-stack postings (15 of 28 in this curriculum's R4 sample), and Amazon's official interview topics include database concepts such as relational versus non-relational databases. Dedicated SQL interview rounds, however, were not found in the US entry-level evidence reviewed; the SQL assessments found were in non-US online assessments (Accenture India, Wise UK) and one internship (Klaviyo). So treat SQL as an essential job skill for backend work and a conditional interview topic: prepare it for interviews when the posting stresses SQL or your recruiter confirms a SQL round.",
  prerequisites: ["Dictionaries and Lists (for thinking in records)", "Command Line and Development Environment"],
  objectives: [
    "Explain tables, rows, columns, schemas, primary keys, foreign keys and constraints (NOT NULL, UNIQUE, CHECK).",
    "Model one-to-many and many-to-many relationships, and explain normalization at a basic level (avoid duplicated data).",
    "Write CRUD statements: INSERT, SELECT, UPDATE and DELETE, including WHERE on every UPDATE and DELETE.",
    "Filter, sort and limit results (WHERE, ORDER BY, LIMIT), and handle NULL correctly (IS NULL, COUNT(*) versus COUNT(column)).",
    "Write INNER and LEFT joins, and explain the difference.",
    "Aggregate with COUNT, SUM, AVG, MIN, MAX and GROUP BY, and filter groups with HAVING.",
    "Explain what an index is, when it helps reads, and what it costs on writes and storage.",
    "Explain transactions and ACID, and give a basic example of an isolation problem.",
    "Use parameterized queries from Python and explain why string formatting causes SQL injection.",
    "Compare relational and non-relational (document, key-value) databases and choose sensibly.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "SQLBolt — Lessons 1–12 and the exercises",
      url: "https://sqlbolt.com/lesson/select_queries_introduction",
      provider: "SQLBolt",
      type: "Interactive",
      instructions:
        "Free external interactive lessons, primary for SQL practice. Do lessons 1–12 (queries, joins, NULLs, expressions, aggregates) with their exercises; lessons 13–18 (inserting, updating, deleting, creating tables) are quick and worth doing too.",
    },
    {
      title: "CS50's Introduction to Databases with SQL",
      url: "https://cs50.harvard.edu/sql/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Free video alternative. Watch lectures 0 (Querying), 1 (Relating), 2 (Designing) and 5 (Optimizing: indexes and transactions). Skip the rest unless you are targeting backend roles.",
    },
    {
      title: "PostgreSQL Documentation — Tutorial: 3.4 Transactions",
      url: "https://www.postgresql.org/docs/current/tutorial-transactions.html",
      provider: "PostgreSQL Global Development Group",
      type: "Documentation",
      instructions: "Short official explanation of transactions with a bank-transfer example. The neighbouring tutorial pages are useful references.",
    },
    {
      title: "OWASP — SQL Injection Prevention Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions: "Read the introduction and Option 1 (prepared statements with parameterized queries).",
    },
  ],
  exercises: [
    {
      title: "SQLBolt exercises for lessons 1–12",
      url: "https://sqlbolt.com/lesson/select_queries_introduction",
      note: "Foundation. Free and in the browser.",
    },
    {
      title: "Combine Two Tables (LeetCode)",
      url: "https://leetcode.com/problems/combine-two-tables/",
      note: "Easy. LEFT JOIN with NULLs.",
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
      title: "Design the tables for a small library (books, members, loans), including keys and constraints, then write queries for overdue loans and the most-borrowed books.",
      note: "Practical. Use Python's built-in sqlite3 module to run them.",
    },
  ],
  interviewQuestions: [
    {
      question: "What are primary keys and foreign keys?",
      answer:
        "A primary key uniquely identifies each row in a table and cannot be NULL. A foreign key is a column that refers to the primary key of another table, linking rows and letting the database enforce that the referenced row exists. Together they model relationships: a one-to-many relationship (one customer, many orders) puts a foreign key on the \"many\" side; a many-to-many relationship (students and courses) uses a join table with two foreign keys.",
      code: `-- One customer has many orders
-- Dialect: in SQLite, INTEGER PRIMARY KEY auto-assigns ids; PostgreSQL uses
-- id INTEGER GENERATED ALWAYS AS IDENTITY (or SERIAL). SQLite enforces foreign keys
-- only after PRAGMA foreign_keys = ON; PostgreSQL always enforces them.
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  total REAL NOT NULL CHECK (total >= 0)   -- use NUMERIC(10, 2) for money in PostgreSQL
);
INSERT INTO customers VALUES (1, 'Ana'), (2, 'Ben');
INSERT INTO orders VALUES (10, 1, 25.0), (11, 1, 40.0);
SELECT name, COUNT(orders.id) FROM customers LEFT JOIN orders ON orders.customer_id = customers.id GROUP BY customers.id ORDER BY name;
-- -> ('Ana', 2)
-- -> ('Ben', 0)`,
      followUps: ["How would you model students enrolling in many courses?"],
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
    },
    {
      question: "What is an index, and what are its trade-offs?",
      answer:
        "An index is a separate data structure, usually a B-tree, that lets the database find rows by the indexed columns without scanning the whole table, turning a full scan into a fast lookup for selective queries. The costs are extra storage and slower inserts, updates and deletes, because every index must be updated too. Index columns that are frequently used to filter, join or sort; avoid indexing everything.",
      code: `-- An index on email turns a table scan into an index search
-- Dialect: inspect the plan with EXPLAIN QUERY PLAN in SQLite, EXPLAIN (or EXPLAIN ANALYZE) in PostgreSQL
CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, name TEXT);
CREATE INDEX idx_users_email ON users(email);
INSERT INTO users (email, name) VALUES ('ana@example.com', 'Ana');
SELECT name FROM users WHERE email = 'ana@example.com';
-- -> ('Ana',)`,
      followUps: ["Why might the database not use an index for a query that filters on that column?"],
    },
    {
      question: "What is a transaction, and what does ACID mean?",
      answer:
        "A transaction groups several statements so they succeed or fail as one unit. ACID describes the guarantees: Atomicity (all or nothing), Consistency (constraints hold before and after), Isolation (concurrent transactions do not see each other's partial work, to a configurable degree) and Durability (committed data survives crashes). The classic example is a money transfer: debiting one account and crediting another must both happen or neither. Weaker isolation levels can allow anomalies such as two transactions reading a balance and both overwriting it (a lost update).",
      code: `import sqlite3

db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE accounts (name TEXT PRIMARY KEY, balance INTEGER CHECK (balance >= 0))")
db.executemany("INSERT INTO accounts VALUES (?, ?)", [("ana", 100), ("ben", 0)])
db.commit()

def transfer(amount):
    try:
        with db:                                  # commits on success, rolls back on error
            db.execute("UPDATE accounts SET balance = balance + ? WHERE name = 'ben'", (amount,))
            db.execute("UPDATE accounts SET balance = balance - ? WHERE name = 'ana'", (amount,))
    except sqlite3.IntegrityError:
        print("transfer failed, rolled back")

transfer(30)
transfer(500)                                     # would make ana negative, so it is rolled back
print(db.execute("SELECT name, balance FROM accounts ORDER BY name").fetchall())
# -> transfer failed, rolled back
# -> [('ana', 70), ('ben', 30)]`,
      followUps: ["What is a lost update, and how can a transaction or a lock prevent it?"],
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
    },
    {
      question: "When would you choose a relational database over a non-relational one?",
      answer:
        "Choose a relational database when data has clear structure and relationships, you need joins and ad hoc queries, and you need transactions and constraints to keep data correct, which covers most business applications. Non-relational databases suit specific needs: document stores for flexible, nested records read as a whole; key-value stores for very fast lookups by key, such as caches and sessions; others for graphs or time series. Many systems use a relational database by default and add a specialized store where needed.",
      code: `relational = {"orders": [(1, "ana", 25.0)], "customers": [("ana", "Ana")]}   # normalized rows
document = {"order_1": {"customer": {"id": "ana", "name": "Ana"}, "total": 25.0}}   # nested record
print(len(relational), document["order_1"]["customer"]["name"])   # -> 2 Ana`,
      followUps: ["What does normalization mean, and when might you denormalize?"],
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
