import type { Topic } from "../types";

const topic: Topic = {
  slug: "data-modeling",
  title: "Data Modeling",
  category: "Backend",
  phase: "backend-engineering",
  overview:
    "Turning requirements into tables, relationships and constraints that keep data correct, then evolving that schema safely with migrations and using it from Python through an ORM. Implemented here with PostgreSQL, SQLAlchemy and Alembic; the design reasoning transfers to any relational stack.",
  whyItMatters:
    "SQL and relational databases appeared in 15 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, and nearly every backend feature starts with \"where does this data live and how is it related?\". A schema that lets bad data in, or a migration that breaks production, is expensive to fix later. In interviews, schema design shows up inside low-level design, take-home and project deep-dive discussions rather than as a separate round in the evidence reviewed, so learn to design and defend the schema of your own project.",
  prerequisites: ["Databases and SQL Concepts", "PostgreSQL and SQL Practice", "Classes and Objects"],
  objectives: [
    "Identify entities, attributes and relationships from written requirements, and model one-to-one, one-to-many (foreign key on the \"many\" side) and many-to-many (join table with two foreign keys, usually a composite primary key or unique constraint) relationships.",
    "Choose keys: a surrogate primary key (identity integer or UUID) plus UNIQUE constraints on natural identifiers such as email; know the trade-offs of each id type.",
    "Enforce rules in the database: NOT NULL, UNIQUE, CHECK and FOREIGN KEY with a deliberate ON DELETE action (RESTRICT, CASCADE or SET NULL).",
    "Choose appropriate PostgreSQL types: integer or bigint, NUMERIC for money (never floating point), text, boolean, timestamptz for moments in time, date for calendar dates.",
    "Normalize to third normal form in plain terms — one value per column, no repeating groups, every non-key column depends on the key, the whole key and nothing but the key — and explain when deliberate denormalization (a cached count, a reporting table) is worth its consistency cost.",
    "Choose indexes from the queries the application runs: foreign-key columns used in joins (PostgreSQL does not index them automatically), columns you filter or sort by, and uniqueness rules.",
    "Write and review schema migrations with Alembic: one migration per change, kept in version control, autogenerate output always checked by hand (it cannot detect renames), with a working downgrade.",
    "Map classes to tables with SQLAlchemy's declarative ORM (Mapped, mapped_column, ForeignKey, relationship), and use a Session as a unit of work: add, flush, commit, roll back and close.",
    "Set transaction boundaries: one session and transaction per request or business operation, committed once at the end, never held open across user interaction or external calls.",
    "Recognize the N+1 query problem from lazy loading and fix it with an eager-loading option such as selectinload.",
    "Skip for now: higher normal forms (BCNF and beyond), inheritance mapping, sharding and partitioning, event sourcing, NoSQL data modeling and zero-downtime migration tooling.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "CS50's Introduction to Databases with SQL — Lecture 2: Designing",
      url: "https://cs50.harvard.edu/sql/weeks/2/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Start here. Watch the lecture video on this page, or read its notes (https://cs50.harvard.edu/sql/notes/2/) if you prefer text: Creating a Database Schema, Normalizing, Relating, Data Types, Table Constraints and Column Constraints. It designs a real schema step by step. It uses SQLite types; map them to the PostgreSQL types in this topic's Learn list. If you already watched it for Databases and SQL Concepts, skim the notes and move on. Free; no account to watch.",
    },
    {
      title: "Microsoft Learn — Description of the database normalization basics",
      url: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description",
      provider: "Microsoft",
      type: "Article",
      instructions:
        "Short plain-language explanation of first, second and third normal form with a worked example table. Read Description of normalization through Third normal form and Normalizing an example table; skip Other normalization forms. The article sits in Access documentation, but the rules are database-independent. Free; no account.",
    },
    {
      title: "SQLAlchemy 2.0 Unified Tutorial — ORM sections",
      url: "https://docs.sqlalchemy.org/en/20/tutorial/metadata.html#using-orm-declarative-forms-to-define-table-metadata",
      provider: "SQLAlchemy",
      type: "Documentation",
      instructions:
        "The official tutorial, with examples that run against an in-memory SQLite database. Read, in order: Working with Database Metadata — the \"Using ORM Declarative Forms to Define Table Metadata\" section; Data Manipulation with the ORM (https://docs.sqlalchemy.org/en/20/tutorial/orm_data_manipulation.html) from Inserting Rows through Closing a Session, skipping Bulk/Multi Row; and Working with ORM Related Objects (https://docs.sqlalchemy.org/en/20/tutorial/orm_related_objects.html) including Loader Strategies and Selectin Load. Skip the Core-only material and Table Reflection. Free; no account.",
    },
    {
      title: "Alembic — Tutorial, and Auto Generating Migrations",
      url: "https://alembic.sqlalchemy.org/en/latest/tutorial.html",
      provider: "SQLAlchemy",
      type: "Documentation",
      instructions:
        "Read Creating an Environment, Create a Migration Script, Running our First Migration, Running our Second Migration, Getting Information and Downgrading; skip the .ini escaping details. Then read the top of Auto Generating Migrations and \"What does Autogenerate Detect (and what does it not detect?)\" (https://alembic.sqlalchemy.org/en/latest/autogenerate.html). Free; no account.",
    },
    {
      title: "PostgreSQL Documentation — 5.5 Constraints, and 8.1 Numeric Types",
      url: "https://www.postgresql.org/docs/current/ddl-constraints.html",
      provider: "PostgreSQL Global Development Group",
      type: "Documentation",
      instructions:
        "Reference for constraint syntax and behavior: read 5.5.1–5.5.5, especially the ON DELETE options and the note that foreign-key columns are not indexed automatically. Use 8.1 (https://www.postgresql.org/docs/current/datatype-numeric.html) to confirm why NUMERIC, not floating point, is recommended for money.",
    },
    {
      title: "FastAPI — SQL (Relational) Databases",
      url: "https://fastapi.tiangolo.com/tutorial/sql-databases/",
      provider: "FastAPI",
      type: "Documentation",
      instructions:
        "Alternative for FastAPI projects: shows a session-per-request dependency and separate table and API models. It uses SQLModel, a layer over SQLAlchemy; use it if your project does, otherwise read only Create a Session Dependency and the multiple-models section for the pattern. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "CS50 SQL — Problem Set 2: ATL, Happy to Connect, Union Square Donuts",
      url: "https://cs50.harvard.edu/sql/psets/2/",
      note: "Design schemas from written requirements (tables, keys, relationships, constraints). Do the problems you did not do for Databases and SQL Concepts, then translate one design into PostgreSQL types. Free; working and submitting use CS50's browser codespace, which needs a free GitHub account.",
    },
    {
      title: "CS50 SQL — Problem Set 5: your.harvard",
      url: "https://cs50.harvard.edu/sql/psets/5/your.harvard/",
      note: "Choose indexes from a list of typical queries while balancing speed against storage — the reasoning you need for your own schema. Free; GitHub account for the codespace.",
    },
    {
      title: "Critique the PostgreSQL Exercises schema",
      url: "https://pgexercises.com/gettingstarted.html",
      note: "The site states its country-club schema is deliberately flawed. Read the three CREATE TABLE statements and write down at least three design problems (types, constraints, how slots and costs are stored) and how you would fix each. Free; no account.",
    },
    {
      title: "Follow the SQLAlchemy Unified Tutorial ORM sections in a Python session",
      url: "https://docs.sqlalchemy.org/en/20/tutorial/orm_related_objects.html",
      note: "Run the examples with echo=True so you can see the SQL. Count the queries when loading related objects lazily, then with selectinload: that is the N+1 problem and its fix. Needs only pip-installed SQLAlchemy; the tutorial uses in-memory SQLite.",
    },
    {
      title: "Apply it to your backend project: write the entities, relationships and rules in a short design note, then implement the schema as SQLAlchemy models with keys, constraints and indexes, create the first Alembic migration, and add a second migration (a new column or constraint) with a downgrade you have actually run.",
      note: "The professional deliverable. Add tests that try to insert invalid data (duplicate email, missing required field, orphaned foreign key) and confirm the database rejects it. Be ready to explain every table in a project deep dive.",
    },
  ],
  interviewQuestions: [
    {
      question: "How would you design the database schema for a feature, for example posts with comments and tags?",
      answer:
        "Start from the requirements and the queries, not the tables. List the entities (users, posts, comments, tags) and the relationships: a user writes many posts and comments (foreign keys on posts and comments), a post has many comments, and posts and tags are many-to-many, so add a post_tags join table with a composite primary key on (post_id, tag_id). Give each table a primary key, add NOT NULL and UNIQUE where the rules demand them (tag names, user emails) and choose an ON DELETE action for each foreign key. Then look at the main queries — a post with its comments, posts for a tag — and index the foreign keys and filter columns they use. State your assumptions and what you would change if requirements grew.",
      followUps: ["Which columns would you index first, and why?", "Would you use integer or UUID ids?"],
    },
    {
      question: "What is normalization? Explain the first three normal forms and when you would denormalize.",
      answer:
        "Normalization organizes data so each fact is stored once, which removes duplication and the update anomalies it causes. First normal form: each column holds one value and there are no repeating groups (no tag1, tag2, tag3 columns or comma-separated lists). Second: every non-key column depends on the whole primary key, which matters for composite keys. Third: non-key columns depend only on the key, not on other non-key columns — a customer's city belongs in customers, not copied into every order. Denormalize deliberately for read performance or reporting, such as storing a comment count on posts, and accept that you must keep the copy in sync (in the same transaction, or by recomputing it).",
      followUps: ["What anomaly occurs if a customer's address is copied into every order row?"],
      source: { title: "Microsoft Learn — Description of the database normalization basics", url: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description" },
    },
    {
      question: "How do you choose column types and constraints?",
      answer:
        "Pick the type that matches the meaning and lets the database reject bad values: integer or bigint for counts and ids, NUMERIC for money because floating-point types are inexact, timestamptz for moments in time, date for calendar dates, boolean for flags and text for strings (add a CHECK or length limit only when there is a real rule). Then encode the business rules as constraints — NOT NULL for required fields, UNIQUE for identifiers like email, CHECK for ranges such as quantity > 0 and foreign keys for references — because application validation can be bypassed by other code paths, scripts or concurrent requests, while the database enforces them for everyone.",
      followUps: ["If you validate in the API already, why also add database constraints?"],
      source: { title: "PostgreSQL Documentation — 8.1 Numeric Types", url: "https://www.postgresql.org/docs/current/datatype-numeric.html" },
    },
    {
      question: "What should happen to related rows when a parent row is deleted?",
      answer:
        "Decide per relationship and declare it on the foreign key. ON DELETE RESTRICT (or the default NO ACTION) blocks the delete while children exist — right for orders that reference a product. CASCADE deletes the children too — right for rows that cannot exist without the parent, such as a post's tag links. SET NULL keeps the child but clears the reference, for optional relationships. Many applications avoid deleting important records at all and use a soft delete (a deleted_at column), at the cost of filtering it out in queries.",
      followUps: ["What are the risks of using CASCADE everywhere?"],
      source: { title: "PostgreSQL Documentation — 5.5.5 Foreign Keys", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK" },
    },
    {
      question: "What is a schema migration, and how do you change a production schema safely?",
      answer:
        "A migration is a versioned script that moves the schema from one version to the next (and ideally back), stored in the repository and applied the same way in every environment, for example with Alembic. Autogenerated migrations are a draft: review them, because tools miss renames (they appear as drop plus add, losing data) and unnamed constraints. Make changes in safe steps — add a nullable column, deploy code that writes it, backfill existing rows, then add the NOT NULL constraint — test the upgrade and the downgrade on a copy of realistic data, and never edit a migration that has already run elsewhere.",
      followUps: ["How would you rename a column without breaking the running application?"],
      source: { title: "Alembic — What does Autogenerate Detect (and what does it not detect?)", url: "https://alembic.sqlalchemy.org/en/latest/autogenerate.html" },
    },
    {
      question: "What does an ORM do, and what are its trade-offs?",
      answer:
        "An ORM such as SQLAlchemy maps classes to tables and objects to rows, and its Session tracks the objects you load and change, then flushes the needed INSERT, UPDATE and DELETE statements in one transaction when you commit (the unit-of-work pattern). Benefits: less repetitive SQL, parameterized queries by default, and relationships navigable as attributes. Costs: generated SQL can be inefficient if you do not look at it (especially N+1 lazy loading), and complex reports are often clearer in SQL. You still need to understand the SQL and the schema underneath.",
      followUps: ["What is the difference between flush and commit in SQLAlchemy?"],
      source: { title: "SQLAlchemy Unified Tutorial — Data Manipulation with the ORM", url: "https://docs.sqlalchemy.org/en/20/tutorial/orm_data_manipulation.html" },
    },
    {
      question: "What is the N+1 query problem, and how do you fix it?",
      answer:
        "It happens when code loads a list of N objects with one query and then touches a lazily loaded relationship on each, triggering one more query per object: N+1 round trips where one or two would do. It is easy to miss because each query is fast and the code looks innocent. Detect it by logging SQL (echo=True) or counting queries in tests, and fix it by eager loading — in SQLAlchemy, selectinload loads all the children in one extra query, and joinedload uses a JOIN — or by writing the join yourself.",
      followUps: ["When would joined loading be worse than selectin loading?"],
      source: { title: "SQLAlchemy Unified Tutorial — Loader Strategies", url: "https://docs.sqlalchemy.org/en/20/tutorial/orm_related_objects.html#loader-strategies" },
    },
    {
      question: "Where should a transaction begin and end in a web application?",
      answer:
        "Usually one session per request: open it at the start of the request, do the work of one business operation, commit once at the end for requests that change data, roll back on an error, and always close it. Keep the session's lifecycle outside the functions that read and write data, so they can be combined in one transaction and tested. Keep transactions short: do not hold one open across slow external calls or user interaction, because it keeps locks and connections busy.",
      followUps: ["Two steps must both succeed, but one is a call to an external payment API. How do you handle that?"],
      source: { title: "SQLAlchemy — Session Basics: When do I construct a Session, when do I commit it, and when do I close it?", url: "https://docs.sqlalchemy.org/en/20/orm/session_basics.html" },
    },
  ],
  mistakes: [
    "Designing tables before listing the queries the application must answer.",
    "Storing lists as comma-separated text or numbered columns instead of a related table.",
    "Using floating-point types for money, or timestamps without a time zone for moments in time.",
    "Relying on application validation alone, with no NOT NULL, UNIQUE, CHECK or foreign-key constraints.",
    "Forgetting to index foreign-key columns used in joins, or indexing every column \"just in case\".",
    "Applying autogenerated migrations without reading them, or editing a migration that has already run.",
    "Committing in many small places inside one request, leaving data half-updated after an error.",
    "Not noticing N+1 queries because SQL logging was never turned on.",
  ],
  mastery: [
    "Given written requirements (such as a CS50 SQL Problem Set 2 problem), you can produce a schema with keys, relationships, constraints and justified types, and explain each choice.",
    "You can explain normalization to third normal form with an example, and name one case where you would denormalize and how you would keep the copy correct.",
    "Your project has SQLAlchemy models, Alembic migrations that upgrade and downgrade cleanly, and tests showing the database rejects invalid data.",
    "You can spot and fix an N+1 query, and say where each request's transaction begins and ends.",
    "Skip this topic if you can already do all of the above with any relational database and ORM.",
  ],
  deprioritize: [
    "Boyce–Codd and higher normal forms beyond recognition.",
    "ORM inheritance mapping, hybrid properties and advanced relationship configuration.",
    "Zero-downtime migration tooling, partitioning, sharding and replication.",
    "NoSQL and event-sourced data modeling unless a role requires them.",
  ],
  keywords: [
    "data modeling",
    "schema design",
    "database design",
    "ERD",
    "entity relationship",
    "one-to-many",
    "many-to-many",
    "join table",
    "normalization",
    "3NF",
    "denormalization",
    "constraints",
    "ON DELETE CASCADE",
    "migrations",
    "Alembic",
    "SQLAlchemy",
    "ORM",
    "session",
    "unit of work",
    "N+1",
    "selectinload",
    "SQLModel",
  ],
};

export default topic;
