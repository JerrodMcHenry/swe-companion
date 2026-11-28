import type { Question } from "../types";

const KIMBALL = "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques";

// Data engineering interview questions: data modeling, pipelines, storage and processing, data quality,
// data system design and representative exercises. SQL itself (joins, window functions, analytical SQL) lives in
// the SQL & Databases set; Python language questions in the Python set. Answers are original; SQL examples were
// run in PostgreSQL 14 and Python examples in Python 3. Exercises are representative, not documented employer
// questions. Framework questions cover concepts that transfer; postings name the tools each employer uses.
const questions: Question[] = [
  {
    group: "Data modeling",
    question: "How does a data model for analytics differ from an application database schema?",
    answer:
      "An application (OLTP) database handles many small reads and writes of individual records, so it is normalized to avoid duplicate data and keep updates consistent. An analytical (OLAP) system answers questions over millions of rows (“revenue by region by month”), so it favors fewer joins and fast scans: data is often denormalized into fact and dimension tables and stored in columnar formats. Analytical tables are usually loaded in batches or streams from the application databases, not updated by users directly.",
    followUps: ["Why not run analytics directly on the production database?"],
    source: { title: "Kimball Group — Dimensional modeling techniques", url: `${KIMBALL}/` },
  },
  {
    group: "Data modeling",
    question: "What are fact and dimension tables, and what is the grain of a fact table?",
    answer:
      "A fact table records measurable business events, such as an order line with its quantity and amount, plus foreign keys to dimensions. Dimension tables describe the context used to filter and group facts: customer, product, date, store. The grain is exactly what one fact row represents (“one row per order line”); decide it first, at the most detailed level the source supports, because every measure and dimension must be true at that grain. Mixing grains in one table, such as order totals beside order lines, causes double counting.",
    source: { title: "Kimball Group — Declare the grain", url: `${KIMBALL}/grain/` },
  },
  {
    group: "Data modeling",
    question: "What is the difference between a star schema and a snowflake schema?",
    answer:
      "In a star schema each dimension is one denormalized table joined directly to the fact table, so queries are simple and need few joins. In a snowflake schema dimensions are normalized into sub-tables (product → category → department), which removes repeated values but adds joins and complexity. Star schemas are the usual default for analytics because storage is cheap and query simplicity matters; snowflaking can make sense for a very large dimension with a shared hierarchy.",
    source: { title: "Kimball Group — Star schemas and OLAP cubes", url: `${KIMBALL}/star-schema-olap-cube/` },
  },
  {
    group: "Data modeling",
    question: "What is a slowly changing dimension? Explain types 1 and 2.",
    answer:
      "Dimension attributes change over time, such as a customer moving city. Type 1 overwrites the old value: simple, but history is lost and old facts now appear under the new city. Type 2 adds a new row for each change, with its own surrogate key and validity dates (and often a current flag), so facts keep pointing at the version that was true when they happened. Use type 2 for attributes where history matters to reporting, and type 1 for corrections such as fixing a typo.",
    code: `-- Type 2: one row per version of customer 42
-- (customer_key, customer_id, city, valid_from, valid_to, is_current)
--  (1, 42, 'Leeds',  2025-01-01, 2026-06-01, false)
--  (2, 42, 'London', 2026-06-01, 9999-12-31, true)
SELECT city FROM dim_customer
WHERE customer_id = 42
  AND DATE '2026-03-15' >= valid_from AND DATE '2026-03-15' < valid_to;
-- -> Leeds`,
    followUps: ["How would you load a type 2 dimension incrementally?"],
    source: { title: "Kimball Group — Type 2: add new row", url: `${KIMBALL}/type-2/` },
  },
  {
    group: "Pipelines",
    question: "What is the difference between ETL and ELT?",
    answer:
      "ETL transforms data before loading it into the warehouse, which suits strict data rules or limited warehouse compute. ELT loads raw data first and transforms it inside the warehouse with SQL, which modern cloud warehouses make practical: raw data is kept, so transformations can be fixed and rerun, and analysts can work in SQL. Tools such as dbt manage those in-warehouse transformations as version-controlled, tested SQL models. Many pipelines mix both, for example removing sensitive fields before loading.",
    source: { title: "dbt — What is dbt?", url: "https://docs.getdbt.com/docs/introduction" },
  },
  {
    group: "Pipelines",
    question: "When would you choose batch processing over stream processing?",
    answer:
      "Batch processes bounded chunks of data on a schedule (hourly, daily): simpler to build, test, rerun and backfill, and cheaper, which makes it the default for reporting and most analytics. Streaming processes events continuously as they arrive: necessary when the result loses value within seconds or minutes, such as fraud detection, alerts or live operational dashboards, but it adds complexity with ordering, late data, state and exactly-once processing. Ask how fresh the result must really be; many “real-time” requests are satisfied by a batch every few minutes.",
  },
  {
    group: "Pipelines",
    question: "What does it mean for a pipeline to be idempotent, and how do you make it so?",
    answer:
      "Running it again with the same input produces the same result, so a retry or rerun never duplicates or corrupts data. Techniques: process a fixed interval passed in as a parameter (the run date) rather than “now”; overwrite the output partition for that interval instead of appending; upsert or MERGE on a unique key; deduplicate on an event id; and write to a staging location before swapping it in. Idempotency is what makes retries, backfills and recovery safe.",
    code: `-- PostgreSQL and SQLite syntax; needs a unique constraint on day
-- Rerunning the load for a day replaces the row instead of adding a second one
INSERT INTO daily_revenue (day, revenue) VALUES ('2026-11-26', 120)
ON CONFLICT (day) DO UPDATE SET revenue = EXCLUDED.revenue;`,
    source: { title: "PostgreSQL Documentation — INSERT … ON CONFLICT", url: "https://www.postgresql.org/docs/current/sql-insert.html" },
  },
  {
    group: "Pipelines",
    question: "How do you load data incrementally instead of reprocessing everything?",
    answer:
      "Track a high-water mark, such as the largest updated_at or id already loaded, and fetch only newer rows on each run, overlapping slightly to catch rows committed late. This misses deletes and updates that do not change the timestamp, so for complete and timely changes use change data capture (CDC), which reads the database's change log. Merge changes into the target by key, and keep a full refresh available for recovery or when the logic changes.",
    followUps: ["How do you handle a source table with no reliable updated_at column?"],
  },
  {
    group: "Pipelines",
    question: "What is a backfill, and how do you run one safely?",
    answer:
      "Reprocessing historical data, for example after fixing a bug, adding a column or onboarding a new source. Do it safely by making the pipeline idempotent and parameterized by date; running in chunks (one day or month at a time) with limited parallelism so you do not overload sources or the warehouse; writing to a separate table or partitions and validating row counts and totals before swapping them in; and telling the people who use the data what will change and when.",
  },
  {
    group: "Pipelines",
    question: "How do you handle events that arrive late or out of order?",
    answer:
      "Distinguish event time (when it happened) from processing time (when you received it) and aggregate by event time. Batch jobs can reprocess recent partitions, for example the last three days on each run, so late events are included. Stream processors use watermarks: an estimate of how far event time has progressed, typically the latest event time seen minus a configured delay. A window's result is emitted or finalized once the watermark passes its end (Flink can keep it open for an extra allowed lateness and emit updates); events behind the watermark may be dropped, sent to a side output or handled by a correction job. Spark guarantees only that data within the delay is aggregated; later data may or may not be. The right lateness is a trade-off between completeness and how quickly results are final.",
    source: { title: "Spark Structured Streaming — Handling late data and watermarking", url: "https://spark.apache.org/docs/latest/streaming/apis-on-dataframes-and-datasets.html#handling-late-data-and-watermarking" },
  },
  {
    group: "Pipelines",
    question: "How do you handle schema changes from an upstream source?",
    answer:
      "Classify the change. Adding a nullable column is usually safe if the pipeline tolerates extra fields; renaming, removing or changing the type of a column breaks consumers. Validate the schema on ingestion and fail or quarantine data that does not match, rather than silently loading nulls. Prevent surprises with data contracts or a schema registry agreed with the producing team, version breaking changes, and land raw data so you can reprocess it once the pipeline is updated.",
  },
  {
    group: "Pipelines",
    question: "What does an orchestrator such as Airflow do?",
    answer:
      "It schedules and coordinates pipelines defined as a directed acyclic graph (DAG) of tasks: it runs each task when its dependencies succeed, retries failures, runs past intervals for backfills, and shows the history and logs of each run. It should coordinate work, not do heavy processing itself: tasks call the warehouse, Spark or another service. Good DAGs are idempotent per run interval, have small tasks with clear inputs and outputs, and alert when a run fails or misses its deadline.",
    source: { title: "Apache Airflow — Best practices (idempotent tasks)", url: "https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html" },
  },
  {
    group: "Storage & processing",
    question: "What is the difference between a data warehouse, a data lake and a lakehouse?",
    answer:
      "A data warehouse stores structured, modeled data for SQL analytics with strong performance, governance and transactions. A data lake stores raw files of any format cheaply in object storage, which is flexible but can become hard to trust without governance. A lakehouse adds warehouse features to lake storage: open table formats such as Delta Lake, Apache Iceberg or Apache Hudi provide transactions, schema enforcement and time travel over files in object storage. All three typically store analytical data in columnar formats such as Parquet, which read only the needed columns and compress well.",
  },
  {
    group: "Storage & processing",
    question: "What is partitioning, and how do you choose a partition key?",
    answer:
      "Partitioning splits a table into separate parts by a column, usually a date, so queries that filter on it read only the relevant parts (partition pruning) and pipelines can overwrite one partition at a time. Choose a column that most queries filter on, with a moderate number of values. Too fine a key (user id, or hour for a small table) creates many small files and slows everything down; too coarse a key prunes little. Uneven partitions cause skew, where one task does most of the work.",
  },
  {
    group: "Storage & processing",
    question: "How does Apache Spark execute a job, and what is a shuffle?",
    answer:
      "Transformations (select, filter, join) are lazy: Spark builds a plan and runs it only when an action (write, count, collect) needs a result. Some transformations, such as filter, work within each partition (often called narrow); others, such as groupBy and most joins, need rows with the same key on the same machine, so Spark redistributes data across the network in a shuffle and splits the job into stages there. Shuffles (written to disk and fetched over the network) are the usual bottleneck: filter and select columns early, broadcast small tables in joins to avoid shuffling the large one, and watch for skewed keys that leave one task running long after the rest; Spark 3's adaptive query execution can split skewed join partitions automatically.",
    followUps: ["Why can collect() crash the driver?", "How would you handle a join where one key has most of the rows?"],
    source: { title: "Spark — RDD programming guide: shuffle operations", url: "https://spark.apache.org/docs/latest/rdd-programming-guide.html#shuffle-operations" },
  },
  {
    group: "Storage & processing",
    question: "What are Kafka topics, partitions and consumer groups, and what delivery guarantees can you get?",
    answer:
      "A topic is a named, durable log of events split into partitions; order is guaranteed only within a partition, so events that must stay in order share a key. Consumers in the same group divide the partitions between them, so each event goes to one consumer in the group (a rebalance can cause redelivery), and they record their position as committed offsets. If a consumer commits offsets after processing, a crash causes reprocessing (at-least-once); committing before processing risks loss (at-most-once). The idempotent producer prevents duplicates from producer retries, and transactions (with consumers reading read_committed, or Kafka Streams' exactly-once mode) give exactly-once processing when reading from and writing to Kafka topics; writes to external systems still need idempotent sinks, deduplication or offsets stored with the output.",
    source: { title: "Apache Kafka — Design: message delivery semantics", url: "https://kafka.apache.org/44/design/design/" },
  },
  {
    group: "Data quality & operations",
    question: "How do you ensure data quality in a pipeline?",
    answer:
      "Test data the way you test code, at the points where it enters and leaves each stage. Common checks: schema and types, not-null and uniqueness on keys, accepted values, relationships between tables, row counts and totals compared with the source or the previous run, and freshness. Decide what each failure should do: stop the pipeline before bad data reaches users, or warn and quarantine the bad rows. Tools such as dbt tests or Great Expectations make these checks declarative; agree the most important ones with the people who use the data.",
    source: { title: "dbt — Add data tests to your DAG", url: "https://docs.getdbt.com/docs/build/data-tests" },
  },
  {
    group: "Data quality & operations",
    question: "What should you monitor in data pipelines, and how does lineage help?",
    answer:
      "Monitor whether the data is right and on time, not just whether jobs ran: freshness against the agreed deadline, row volumes compared with normal, failed and retried runs, run duration, data quality test results and cost. Lineage records which sources, jobs and tables each dataset depends on. It tells you which dashboards are affected when a source breaks, which upstream change caused a problem, and what will break before you change or delete a table.",
  },
  {
    group: "Data quality & operations",
    question: "A daily pipeline failed overnight and dashboards are stale. What do you do?",
    answer:
      "Assess impact and tell the people affected first, with when you expect to update them. Read the failed task's logs to find the first error, not the cascade after it, and check what changed: code deploys, upstream schema or volume, credentials, quotas, an upstream job that was late. Fix the cause or apply a safe workaround, rerun the affected interval (safe if the pipeline is idempotent), validate the output and confirm the dashboards are correct. Afterwards, add the check or alert that would have caught it earlier.",
  },
  {
    group: "Data system design",
    question: "Design a reliable pipeline that collects events from a mobile app for analytics.",
    answer:
      "Clarify first: event volume, how fresh analytics must be, who uses the data and any privacy rules. A common design: the app batches events with a unique event id and the device timestamp (record the server receive time too, because device clocks are unreliable) and sends them to an ingestion API; the API validates the schema and writes to a durable queue such as Kafka or a managed equivalent, so spikes and downstream outages do not lose data. A consumer writes raw events to object storage partitioned by event date; a scheduled job deduplicates on event id, handles late arrivals by reprocessing recent days and loads modeled tables into the warehouse. Add schema validation with a quarantine for bad events, data quality checks, monitoring of volume and freshness, and retention and deletion rules for personal data.",
    followUps: ["What changes if product teams need results within a minute?", "How do you handle users who are offline for a week?"],
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: flatten nested JSON records into tables.",
    answer:
      "Clarify what each output row represents. Nested objects (customer.address.country) usually become columns with prefixed names; nested arrays (order items) become a separate child table with a key back to the parent, because putting them in one row would repeat or lose data. Handle missing keys and nulls, inconsistent types and very deep nesting, and say how you would scale it, for example with pandas json_normalize or Spark's explode for large inputs.",
    code: `def flatten(record, prefix=""):
    """Flatten nested dicts into dotted keys; move lists to a child table before calling."""
    row = {}
    for key, value in record.items():
        name = f"{prefix}{key}"
        if isinstance(value, dict):
            row.update(flatten(value, f"{name}."))
        else:
            row[name] = value
    return row

order = {"id": 7, "customer": {"id": 3, "address": {"country": "US"}},
         "items": [{"sku": "A1", "qty": 2}, {"sku": "B2", "qty": 1}]}
header = flatten({k: v for k, v in order.items() if k != "items"})
lines = [{"order_id": order["id"], **item} for item in order["items"]]
print(header)  # -> {'id': 7, 'customer.id': 3, 'customer.address.country': 'US'}
print(lines)   # -> [{'order_id': 7, 'sku': 'A1', 'qty': 2}, {'order_id': 7, 'sku': 'B2', 'qty': 1}]`,
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: aggregate a file that is too large to fit in memory.",
    answer:
      "Stream it instead of loading it: read one line or one chunk at a time and keep only the running aggregates in memory. Handle malformed rows explicitly (count, log or quarantine them rather than crashing or silently dropping them). If even the aggregates do not fit, for example a count per user for billions of users, partition the input by key into smaller files and process each one, or use a tool built for it: DuckDB, Spark or the warehouse itself.",
    code: `import csv
from collections import defaultdict

def totals_by_user(path):
    totals, bad_rows = defaultdict(float), 0
    with open(path, newline="") as f:
        for row in csv.DictReader(f):          # one row at a time
            try:
                user, amount = row["user_id"], float(row["amount"])
            except (KeyError, TypeError, ValueError):   # missing column -> None -> TypeError
                bad_rows += 1                  # count and skip; quarantine in a real job
                continue
            totals[user] += amount
    return dict(totals), bad_rows

# events.csv: user_id,amount / 1,10.5 / 2,3 / 1,4.5 / bad,row
print(totals_by_user("events.csv"))  # -> ({'1': 15.0, '2': 3.0}, 1)`,
    followUps: ["The file is compressed and 200 GB. What changes?"],
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: design a dimensional model for an online store's sales.",
    answer:
      "Start with the business questions (revenue by product, customer segment, region and day; returns; discounts) and declare the grain: one row per order line. Fact table: fact_order_line with order id, keys to date, customer, product and store, plus quantity, unit price, discount and net amount. Dimensions: dim_date, dim_customer (type 2 if reports need the customer's region at the time of the order), dim_product (with category) and dim_store or channel. Returns are a separate fact table at their own grain. Explain how each business question is answered with one join per dimension, and how late or corrected orders are loaded.",
    followUps: ["How would you model order status changes over time?"],
    source: { title: "Kimball Group — Dimensional modeling techniques", url: `${KIMBALL}/` },
  },
];

export default questions;
