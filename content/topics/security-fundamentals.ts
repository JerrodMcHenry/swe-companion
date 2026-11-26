import type { Topic } from "../types";

const topic: Topic = {
  slug: "security-fundamentals",
  title: "Security Fundamentals",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Most security incidents start with ordinary mistakes: unvalidated input, passwords stored badly, secrets committed to Git, missing permission checks. This topic covers the concepts every entry-level engineer should know and apply defensively — authentication versus authorization, hashing versus encryption versus encoding, password storage, HTTPS, least privilege, input validation, SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), secrets, dependencies and logging. Implementing authentication comes in Backend Engineering.",
  whyItMatters:
    "Security was named in 11 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, and reviewers and interviewers check that new engineers do not introduce obvious vulnerabilities. Short security questions — authentication versus authorization, how to store passwords, what SQL injection is — are commonly recommended preparation. The job requirement is to recognize risks and use established defenses, never to invent your own cryptography.",
  prerequisites: ["How the Internet and HTTP Work", "Databases and SQL Concepts"],
  objectives: [
    "Distinguish authentication (who are you?) from authorization (what may you do?).",
    "Distinguish encoding, hashing and encryption, and say which to use when.",
    "Explain how passwords should be stored: slow, salted password hashing (such as Argon2id, scrypt or bcrypt) via a maintained library.",
    "Explain what HTTPS protects and why credentials must only travel over it.",
    "Apply least privilege to accounts, keys and permissions.",
    "Validate input on the server (type, length, format, allowed values) and treat all external input as untrusted.",
    "Explain and prevent SQL injection (parameterized queries), XSS (output encoding, templating that escapes by default) and CSRF (anti-CSRF tokens, SameSite cookies).",
    "Keep secrets out of code and logs; use environment variables or a secrets manager, and rotate leaked secrets.",
    "Keep dependencies updated and check them for known vulnerabilities.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "OWASP Top 10",
      url: "https://owasp.org/Top10/",
      provider: "OWASP",
      type: "Documentation",
      instructions: "Written overview of the most common web application risks. Read the summary of each category; you do not need every detail.",
    },
    {
      title: "OWASP Cheat Sheets — Password Storage, Cross Site Scripting Prevention, CSRF Prevention, Secrets Management",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions:
        "Authoritative defensive guidance. Read the introduction and main recommendations of each of these four cheat sheets (all in the same series); skip the advanced sections.",
    },
    {
      title: "OWASP — Logging Cheat Sheet (data to exclude)",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions: "Read the \"Data to exclude\" section so you never log passwords, tokens or personal data.",
    },
  ],
  exercises: [
    {
      title: "Find and fix the vulnerabilities in a small script that builds SQL with f-strings, stores passwords with plain SHA-256 and prints an API key in a log line.",
      note: "Practical code review. Write down each problem, its risk and the fix.",
    },
    {
      title: "Store and verify passwords using a maintained password-hashing approach (for example hashlib.scrypt with a random salt, or the argon2-cffi library), and show that the same password produces different stored values.",
      note: "Practical.",
    },
    {
      title: "Run a dependency audit on one of your projects (for example pip-audit for Python or GitHub's Dependabot alerts) and explain one finding.",
      note: "Practical.",
    },
    {
      title: "Explain aloud: authentication versus authorization, hashing versus encryption, and how to prevent SQL injection and XSS.",
      note: "Interview practice.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between authentication and authorization?",
      answer:
        "Authentication verifies who someone is, for example with a password, a one-time code or a single sign-on token. Authorization decides what an authenticated user is allowed to do, such as whether they may view another user's order. Many serious bugs are authorization failures: the user is logged in, but the server never checks that the resource belongs to them. Authorization must be enforced on the server for every request.",
      code: `orders = {101: {"owner": "ana", "total": 25}, 102: {"owner": "ben", "total": 40}}

def get_order(current_user, order_id):
    order = orders.get(order_id)
    if order is None:
        raise KeyError("not found")
    if order["owner"] != current_user:          # authorization check on the server
        raise PermissionError("forbidden")
    return order

print(get_order("ana", 101)["total"])          # -> 25
try:
    get_order("ana", 102)
except PermissionError as error:
    print(error)                               # -> forbidden`,
      followUps: ["Which HTTP status codes correspond to failed authentication and failed authorization?"],
    },
    {
      question: "What is the difference between encoding, hashing and encryption?",
      answer:
        "Encoding transforms data into another format for transport or storage, such as Base64 or URL encoding; anyone can reverse it, so it provides no secrecy. Hashing maps data to a fixed-size fingerprint that cannot be reversed; it is used for integrity checks and, with slow salted algorithms, for passwords. Encryption transforms data so only someone with the key can read it, and it is reversible with that key; it protects data you need to read again, such as stored card tokens or network traffic.",
      code: `import base64
import hashlib

encoded = base64.b64encode(b"secret").decode()
print(encoded, base64.b64decode(encoded))         # reversible by anyone  # -> c2VjcmV0 b'secret'
digest = hashlib.sha256(b"secret").hexdigest()
print(len(digest))                                # fixed size, not reversible  # -> 64`,
      followUps: ["Why is a fast hash such as SHA-256 alone a poor choice for storing passwords?"],
    },
    {
      question: "How should passwords be stored?",
      answer:
        "Never store passwords in plain text or with reversible encryption. Store a hash produced by a slow, salted password-hashing algorithm designed for passwords — OWASP recommends Argon2id, then scrypt (the example uses OWASP's minimum scrypt settings), with bcrypt for legacy systems — through a well-maintained library. The salt is a random value per password that makes identical passwords produce different hashes and defeats precomputed tables; the slowness makes guessing expensive. Verify by hashing the login attempt with the stored salt and comparing in constant time.",
      code: `import hashlib
import hmac
import os

PARAMS = dict(n=2**17, r=8, p=1, maxmem=2**28)      # OWASP's minimum scrypt settings

def hash_password(password):
    salt = os.urandom(16)
    return salt, hashlib.scrypt(password.encode(), salt=salt, **PARAMS)

def verify(password, salt, digest):
    attempt = hashlib.scrypt(password.encode(), salt=salt, **PARAMS)
    return hmac.compare_digest(attempt, digest)     # constant-time comparison

s1, d1 = hash_password("correct horse")
s2, d2 = hash_password("correct horse")
print(d1 != d2, verify("correct horse", s1, d1), verify("wrong", s1, d1))   # -> True True False`,
      followUps: ["What should happen if your password database is leaked?"],
    },
    {
      question: "What is SQL injection, and how do you prevent it?",
      answer:
        "SQL injection happens when user input is inserted into a SQL statement as text, letting an attacker change the query, for example to read or delete other users' data. Prevent it with parameterized queries, which send values separately from the SQL so they are always treated as data. Validate input and use least-privilege database accounts as additional layers. Escaping by hand is error-prone and not a substitute.",
      code: `import sqlite3

db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE users (name TEXT, email TEXT)")
db.execute("INSERT INTO users VALUES ('ana', 'ana@example.com')")

def find_user(name):
    return db.execute("SELECT email FROM users WHERE name = ?", (name,)).fetchall()   # parameterized

print(find_user("ana"), find_user("x' OR '1'='1"))   # -> [('ana@example.com',)] []`,
      followUps: ["What other kinds of injection exist besides SQL? (Command injection, for example.)"],
    },
    {
      question: "What is cross-site scripting (XSS), and how do you prevent it?",
      answer:
        "XSS happens when an application includes untrusted input in a web page without proper encoding, so the browser runs an attacker's script in the victim's session, for example to steal data or act as the user. Prevent it by encoding output for the context where it appears (HTML, attributes, JavaScript, URLs), using templating frameworks that escape by default, avoiding inserting raw HTML, and adding a Content Security Policy as an extra layer.",
      code: `import html

comment = '<script>alert("hacked")</script>'
safe = html.escape(comment)                 # encode before inserting into HTML
print(safe)   # -> &lt;script&gt;alert(&quot;hacked&quot;)&lt;/script&gt;`,
      followUps: ["Why is filtering out the word \"script\" not a reliable defense?"],
    },
    {
      question: "What is CSRF, and how is it prevented?",
      answer:
        "Cross-site request forgery tricks a logged-in user's browser into sending an unwanted request to a site that trusts it, because the browser automatically includes that site's cookies. Defenses include anti-CSRF tokens that a forged request cannot know, SameSite cookie settings that stop cookies being sent on most cross-site requests, never changing state with GET requests, and frameworks' built-in CSRF protection. APIs that use tokens in headers rather than cookies are less exposed.",
      code: `import hmac
import secrets

session_token = secrets.token_hex(16)            # stored in the user's session

def accept_form(submitted_token):
    return hmac.compare_digest(submitted_token, session_token)

print(accept_form(session_token), accept_form("forged-value"))   # -> True False`,
      followUps: ["How does the SameSite cookie attribute help?"],
    },
    {
      question: "How should secrets such as API keys be handled?",
      answer:
        "Keep secrets out of source code, Git history, logs, error messages and client-side code. Load them from environment variables or a secrets manager, give each key only the permissions it needs (least privilege), and rotate them regularly. If a secret is committed or leaked, assume it is compromised: revoke and rotate it immediately — deleting the commit is not enough because history and copies remain.",
      code: `import os

api_key = os.environ.get("PAYMENTS_API_KEY")       # never hard-coded
masked = (api_key[:4] + "...") if api_key else "missing"
print(f"payments key: {masked}")                   # log a masked value, never the secret
# -> payments key: missing`,
      followUps: ["What information should never appear in logs?"],
    },
  ],
  mistakes: [
    "Storing passwords in plain text, with reversible encryption or with a fast unsalted hash.",
    "Writing your own encryption or password-hashing algorithm instead of using established libraries.",
    "Building SQL or HTML by concatenating user input.",
    "Checking permissions only in the user interface instead of on the server.",
    "Committing secrets or printing tokens and personal data in logs.",
    "Treating Base64 encoding as encryption.",
    "Ignoring dependency vulnerability alerts.",
  ],
  mastery: [
    "You can explain authentication versus authorization, encoding versus hashing versus encryption, and correct password storage.",
    "You can recognize SQL injection, XSS, CSRF, leaked secrets and missing authorization checks in code, and describe the defense for each.",
    "You use parameterized queries, output encoding and environment variables by default.",
    "You know where to look for authoritative guidance (OWASP) and never implement custom cryptography.",
  ],
  deprioritize: [
    "Implementing login, sessions, OAuth and JWT handling (covered in Backend Engineering).",
    "Cryptographic algorithms and protocol internals.",
    "Penetration testing, threat modeling frameworks and compliance standards beyond awareness.",
  ],
  keywords: [
    "security",
    "authentication",
    "authorization",
    "hashing",
    "encryption",
    "encoding",
    "password hashing",
    "salt",
    "bcrypt",
    "argon2",
    "SQL injection",
    "XSS",
    "cross-site scripting",
    "CSRF",
    "secrets",
    "least privilege",
    "OWASP",
    "input validation",
  ],
};

export default topic;
