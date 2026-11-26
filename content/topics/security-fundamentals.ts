import type { Topic } from "../types";

const topic: Topic = {
  slug: "security-fundamentals",
  title: "Security Fundamentals",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Most security incidents start with ordinary mistakes: unvalidated input, badly stored passwords, committed secrets, missing permission checks. Every entry-level engineer is expected to recognize these risks and apply established defenses — never to invent their own cryptography; implementing authentication comes in Backend Engineering.",
  whyItMatters:
    "Security was named in 11 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, and reviewers and interviewers check that new engineers do not introduce obvious vulnerabilities. Short security questions — authentication versus authorization, how to store passwords, what SQL injection is — are commonly recommended preparation. The job requirement is to recognize risks and use established defenses, never to invent your own cryptography.",
  prerequisites: ["How the Internet and HTTP Work", "Databases and SQL Concepts"],
  objectives: [
    "Authentication (who are you?) versus authorization (what may you do?); authorization is checked on the server for every request, including ownership of the requested record.",
    "Encoding (reversible by anyone) versus hashing (one-way) versus encryption (reversible with a key), and when to use each.",
    "Password storage: a slow, salted password-hashing algorithm (Argon2id, then scrypt; bcrypt for legacy systems) through a maintained library; never plain text, reversible encryption or a fast hash.",
    "What HTTPS protects, and why credentials and session cookies must only travel over it.",
    "Least privilege for accounts, API keys and database users.",
    "Server-side input validation (type, length, format, allowed values); all external input is untrusted.",
    "SQL injection (parameterized queries), XSS (context-aware output encoding, auto-escaping templates) and CSRF (anti-CSRF tokens, SameSite cookies, no state changes on GET).",
    "Secrets out of code, Git history and logs; environment variables or a secrets manager; revoke and rotate anything leaked.",
    "Dependencies: keep them updated and check them for known vulnerabilities.",
    "Skip for now: implementing login, sessions, OAuth and JWT (Backend Engineering), cryptographic internals, penetration testing and compliance frameworks.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "OWASP Top 10:2025",
      url: "https://owasp.org/Top10/2025/",
      provider: "OWASP",
      type: "Documentation",
      instructions:
        "Start here: the most common web application risks. Read the introduction and the summary at the top of each category, focusing on A01 Broken Access Control, A04 Cryptographic Failures, A05 Injection, A03 Software Supply Chain Failures and A07 Authentication Failures; skim the rest. Free; no account.",
    },
    {
      title: "OWASP Cheat Sheets — Password Storage, Cross Site Scripting Prevention, CSRF Prevention, Secrets Management",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions:
        "Authoritative defensive guidance. Read the introduction and main recommendations of each of these four cheat sheets (all in the same series): for Password Storage, the Introduction, Salting and Password Hashing Algorithms; for CSRF, Token-Based Mitigation and SameSite. Skip the advanced sections.",
    },
    {
      title: "PortSwigger Web Security Academy — SQL injection, Cross-site scripting, CSRF and Access control",
      url: "https://portswigger.net/web-security",
      provider: "PortSwigger",
      type: "Interactive",
      instructions:
        "Hands-on alternative that shows how each vulnerability works. For each of the four topics, read the \"What is…\" section and the \"How to prevent…\" (or \"Common defences\") section, then do the labs listed in this topic's exercises. Skip the advanced variants (blind SQL injection, DOM XSS, CSRF token bypasses). Free; the labs need a free account.",
    },
    {
      title: "OWASP — Logging Cheat Sheet (data to exclude)",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions: "Read only the \"Data to exclude\" section so you never log passwords, tokens or personal data.",
    },
  ],
  exercises: [
    {
      title: "PortSwigger lab: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data",
      url: "https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data",
      note: "Free with a PortSwigger account; labs are deliberately vulnerable practice sites — never test sites you do not own. Afterwards, write the parameterized query that would have prevented it.",
    },
    {
      title: "PortSwigger lab: SQL injection vulnerability allowing login bypass",
      url: "https://portswigger.net/web-security/sql-injection/lab-login-bypass",
      note: "Free with a PortSwigger account. Shows why injected input can change a query's logic, not just its data.",
    },
    {
      title: "PortSwigger lab: Reflected XSS into HTML context with nothing encoded",
      url: "https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded",
      note: "Free with a PortSwigger account. Afterwards, explain which output encoding or auto-escaping template would have prevented it.",
    },
    {
      title: "PortSwigger lab: CSRF vulnerability with no defenses",
      url: "https://portswigger.net/web-security/csrf/lab-no-defenses",
      note: "Free with a PortSwigger account; uses the lab's exploit server. Afterwards, explain how an anti-CSRF token or SameSite cookie would stop it.",
    },
    {
      title: "PortSwigger lab: User ID controlled by request parameter",
      url: "https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter",
      note: "Free with a PortSwigger account. A missing server-side ownership check (insecure direct object reference); explain the authorization check the server should make.",
    },
    {
      title: "Run pip-audit (or enable GitHub Dependabot alerts) on one of your projects and explain one finding or why there are none.",
      url: "https://github.com/pypa/pip-audit",
      note: "Dependency vulnerability checking on your own code. pip-audit is free and open source; Dependabot alerts are free on GitHub repositories.",
    },
    {
      title: "Review one of your own projects for SQL built with string formatting, hard-coded secrets, tokens or passwords in logs, and endpoints that do not check the user may access the record.",
      note: "Applies the topic to your code; write down each problem, its risk and the fix.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between authentication and authorization?",
      answer:
        "Authentication verifies who someone is, for example with a password, a one-time code or a single sign-on token. Authorization decides what an authenticated user is allowed to do, such as whether they may view another user's order. Many serious bugs are authorization failures: the user is logged in, but the server never checks that the resource belongs to them. Authorization must be enforced on the server for every request.",
      followUps: ["Which HTTP status codes correspond to failed authentication and failed authorization?"],
      source: { title: "OWASP — Authorization Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" },
    },
    {
      question: "What is the difference between encoding, hashing and encryption?",
      answer:
        "Encoding transforms data into another format for transport or storage, such as Base64 or URL encoding; anyone can reverse it, so it provides no secrecy. Hashing maps data to a fixed-size fingerprint that cannot be reversed; it is used for integrity checks and, with slow salted algorithms, for passwords. Encryption transforms data so only someone with the key can read it, and it is reversible with that key; it protects data you need to read again, such as stored tokens or network traffic.",
      code: `import base64
import hashlib

encoded = base64.b64encode(b"secret").decode()
print(encoded, base64.b64decode(encoded))         # reversible by anyone  # -> c2VjcmV0 b'secret'
digest = hashlib.sha256(b"secret").hexdigest()
print(len(digest))                                # fixed size, not reversible  # -> 64`,
      followUps: ["Why is a fast hash such as SHA-256 alone a poor choice for storing passwords?"],
      source: { title: "OWASP — Password Storage Cheat Sheet: Hashing vs Encryption", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#hashing-vs-encryption" },
    },
    {
      question: "How should passwords be stored?",
      answer:
        "Never store passwords in plain text or with reversible encryption. Store a hash produced by a slow, salted password-hashing algorithm designed for passwords — OWASP recommends Argon2id, then scrypt, with bcrypt for legacy systems — through a well-maintained library rather than your own code. The salt is a random value per password that makes identical passwords produce different hashes and defeats precomputed tables; the slowness makes guessing expensive. To log in, the library re-hashes the attempt with the stored salt and parameters and compares in constant time.",
      followUps: ["What should happen if your password database is leaked?"],
      source: { title: "OWASP — Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
    },
    {
      question: "What is SQL injection, and how do you prevent it?",
      answer:
        "SQL injection happens when user input is inserted into a SQL statement as text, letting an attacker change the query, for example to read or delete other users' data. Prevent it with parameterized queries, which send values separately from the SQL so they are always treated as data (see Databases and SQL Concepts for an example). Validate input and use least-privilege database accounts as additional layers. Escaping by hand is error-prone and not a substitute.",
      followUps: ["What other kinds of injection exist besides SQL? (Command injection, for example.)"],
      source: { title: "OWASP — SQL Injection Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
    },
    {
      question: "What is cross-site scripting (XSS), and how do you prevent it?",
      answer:
        "XSS happens when an application includes untrusted input in a web page without proper encoding, so the browser runs an attacker's script in the victim's session, for example to steal data or act as the user. Prevent it by encoding output for the context where it appears (HTML, attributes, JavaScript, URLs), using templating frameworks that escape by default, avoiding inserting raw HTML, and adding a Content Security Policy as an extra layer.",
      code: `import html

comment = '<script>alert("hacked")</script>'
print(html.escape(comment))   # encode before inserting into HTML  # -> &lt;script&gt;alert(&quot;hacked&quot;)&lt;/script&gt;`,
      followUps: ["Why is filtering out the word \"script\" not a reliable defense?"],
      source: { title: "OWASP — Cross Site Scripting Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
    },
    {
      question: "What is CSRF, and how is it prevented?",
      answer:
        "Cross-site request forgery tricks a logged-in user's browser into sending an unwanted request to a site that trusts it, because the browser automatically includes that site's cookies. Defenses include anti-CSRF tokens that a forged request cannot know, SameSite cookie settings that stop cookies being sent on most cross-site requests, never changing state with GET requests, and frameworks' built-in CSRF protection. APIs that send tokens in headers rather than relying on cookies are less exposed.",
      followUps: ["How does the SameSite cookie attribute help?"],
      source: { title: "OWASP — Cross-Site Request Forgery Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" },
    },
    {
      question: "How should secrets such as API keys be handled?",
      answer:
        "Keep secrets out of source code, Git history, logs, error messages and client-side code. Load them from environment variables or a secrets manager, give each key only the permissions it needs (least privilege), and rotate them regularly. If a secret is committed or leaked, assume it is compromised: revoke and rotate it immediately — deleting the commit is not enough because history and copies remain.",
      followUps: ["What information should never appear in logs?"],
      source: { title: "OWASP — Secrets Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" },
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
    "Skip this topic if you can already do all of the above.",
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
