import type { Topic } from "../types";

const topic: Topic = {
  slug: "authentication-authorization",
  title: "Authentication and Authorization",
  category: "Backend",
  phase: "backend-engineering",
  overview:
    "Implementing login and access control in a backend with established libraries: hashing passwords, issuing and verifying sessions or tokens, protecting endpoints, checking roles and ownership on every request, and testing that unauthorized access fails. It builds on Security Fundamentals, which covers authentication versus authorization, password storage, CSRF and secrets.",
  whyItMatters:
    "Security appeared in 11 and authentication concepts in 6 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample. Almost every backend feature has to answer \"who is calling, and may they do this?\", and broken access control is the first category in the OWASP Top 10. The entry-level expectation is to wire up a well-known library correctly, check permissions on the server for every request and write tests for the failure cases — never to invent your own cryptography or authentication scheme.",
  prerequisites: ["Security Fundamentals", "HTTP APIs with FastAPI", "Automated Testing", "Data Modeling"],
  objectives: [
    "Keep authentication (verifying identity) and authorization (deciding what that identity may do) as separate steps in code, and return 401 for missing or invalid credentials and 403 for an authenticated caller without permission (or 404 to avoid revealing that another user's record exists).",
    "Hash and verify passwords through a maintained library (FastAPI's tutorial uses pwdlib with Argon2; Security Fundamentals covers why); never store, log or return passwords.",
    "Compare server-side sessions (an opaque random id in a cookie, state on the server) with self-contained tokens such as JWTs (signed claims sent in an Authorization: Bearer header), including how each is revoked.",
    "Explain a JWT: header, payload and signature, base64url-encoded; signed, not encrypted, so never put secrets or sensitive personal data in the payload; standard claims sub, exp, iat, iss and aud.",
    "Validate tokens with a library (such as PyJWT): verify the signature with an explicit list of allowed algorithms, reject expired tokens, and check issuer and audience when they are used.",
    "Use short-lived access tokens with refresh tokens, and explain the revocation trade-off (short expiry, refresh-token rotation, a server-side denylist).",
    "Store browser credentials safely: cookies with Secure, HttpOnly and SameSite; understand why tokens in localStorage are exposed to XSS.",
    "Protect FastAPI endpoints with security dependencies (OAuth2PasswordBearer, a get_current_user dependency, and a reusable permission dependency) and deny by default.",
    "Implement role-based access control for coarse permissions, plus ownership checks on every request that reads or changes a specific record, to prevent insecure direct object references (IDOR).",
    "Avoid account-enumeration and brute-force weaknesses: generic login error messages, rate limiting or lockout, and multi-factor authentication where offered.",
    "Configure secrets (signing keys) from the environment, never in code, and rotate them if leaked.",
    "Test the unhappy paths: no token, malformed or expired token, wrong role, and another user's resource, using FastAPI's TestClient and dependency overrides.",
    "Explain OAuth 2.0 (delegated authorization: an app gets an access token to call an API on a user's behalf; authorization code flow with PKCE) and OpenID Connect (an identity layer that adds an ID token for login) — Explain depth only.",
    "Skip for now: implementing an OAuth or OIDC provider, SAML, writing your own token format or cryptography, WebAuthn/passkey implementation and fine-grained policy engines.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "FastAPI — Security tutorial: Security intro through OAuth2 with Password (and hashing), Bearer with JWT tokens",
      url: "https://fastapi.tiangolo.com/tutorial/security/",
      provider: "FastAPI",
      type: "Documentation",
      instructions:
        "Start here, and build along in a scratch project. Read the five pages in order: Security (intro), First Steps, Get Current User, Simple OAuth2 with Password and Bearer, and OAuth2 with Password (and hashing), Bearer with JWT tokens (https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/). They show password hashing with pwdlib/Argon2, signing and verifying JWTs with PyJWT, and protecting endpoints with dependencies. The code is instructional — fake in-memory users, one secret key, no refresh tokens, rate limiting or revocation — so do not treat it as production-ready. Skip Advanced: OAuth2 scopes for now. Free; no account.",
    },
    {
      title: "OWASP Cheat Sheets — Authorization, Insecure Direct Object Reference Prevention, JSON Web Token, Session Management",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions:
        "Authoritative defensive guidance. Authorization: Deny by Default, Validate the Permissions on Every Request, Exit Safely when Authorization Checks Fail and Create Unit and Integration Test Cases. IDOR Prevention (https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html): Introduction and Mitigation. JSON Web Token (https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet.html): Token Structure, Considerations about using JWTs, Claims, Unsecured JWTs, JWT revocation and Signed JWTs are not confidential. Session Management (https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html): Cookies (Secure, HttpOnly, SameSite), Renew the Session ID After Any Privilege Level Change and Session Expiration. Free; no account.",
    },
    {
      title: "OWASP — Authentication Cheat Sheet (selected sections)",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions:
        "Read Authentication and Error Messages (generic responses), Protect Against Automated Attacks (multi-factor authentication, login throttling, account lockout), Require Re-authentication for Sensitive Features, and the short OAuth 2.0 and 2.1 and OpenID Connect (OIDC) sections for the Explain-depth distinction. Skip SAML, FIDO and password-recovery details. Free; no account.",
    },
    {
      title: "PortSwigger Web Security Academy — Authentication, Access control and JWT attacks",
      url: "https://portswigger.net/web-security/access-control",
      provider: "PortSwigger",
      type: "Interactive",
      instructions:
        "Hands-on alternative that shows how these defenses fail. Access control: What is access control?, vertical and horizontal access controls and Insecure direct object references. Authentication (https://portswigger.net/web-security/authentication): What is authentication? and How do authentication vulnerabilities arise?. JWT attacks (https://portswigger.net/web-security/jwt): What are JWTs?, JWT signature, How to prevent JWT attacks. Then do the labs in this topic's Practice tab. Skip the header-injection and algorithm-confusion sections. Free; labs need a free account.",
    },
    {
      title: "PortSwigger Web Security Academy — OAuth 2.0: What is OAuth? and How does OAuth 2.0 work?",
      url: "https://portswigger.net/web-security/oauth",
      provider: "PortSwigger",
      type: "Article",
      instructions:
        "Read only these two sections for an Explain-depth picture of roles, scopes, the authorization code flow and how OAuth is used for login; stop before the vulnerability sections. Free; no account to read.",
    },
  ],
  exercises: [
    {
      title: "Build the FastAPI Security tutorial step by step",
      url: "https://fastapi.tiangolo.com/tutorial/security/first-steps/",
      note: "From First Steps to the JWT page, run the app locally and use the interactive docs to log in and call the protected endpoint. Then explain where each step (hashing, token creation, token verification, current-user lookup) happens. Free; needs Python with FastAPI, PyJWT and pwdlib installed.",
    },
    {
      title: "PortSwigger lab: Unprotected admin functionality",
      url: "https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality",
      note: "Vertical access control: hiding a URL is not authorization. Free with a PortSwigger account; labs are deliberately vulnerable practice sites — never test sites you do not own.",
    },
    {
      title: "PortSwigger lab: User role controlled by request parameter",
      url: "https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter",
      note: "Never trust a role sent by the client; derive it on the server. Free with a PortSwigger account.",
    },
    {
      title: "PortSwigger lab: Insecure direct object references",
      url: "https://portswigger.net/web-security/access-control/lab-insecure-direct-object-references",
      note: "A missing ownership check on stored files. Afterwards, write the server-side check that would prevent it. Free with a PortSwigger account. (The user-ID lab is in Security Fundamentals.)",
    },
    {
      title: "PortSwigger lab: Username enumeration via different responses",
      url: "https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses",
      note: "Why login errors must be generic and attempts rate-limited. Free with a PortSwigger account; the lab expects Burp Suite (the free Community Edition is enough).",
    },
    {
      title: "PortSwigger lab: JWT authentication bypass via unverified signature",
      url: "https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-unverified-signature",
      note: "What happens when a server decodes a JWT without verifying its signature. Afterwards, name the library call and arguments that verify it. Free with a PortSwigger account; the lab instructions use Burp Suite (Community Edition is free).",
    },
    {
      title: "FastAPI — Testing Dependencies with Overrides",
      url: "https://fastapi.tiangolo.com/advanced/testing-dependencies/",
      note: "Learn app.dependency_overrides so tests can act as different users without real tokens; combine with TestClient from the Testing tutorial. Free; no account.",
    },
    {
      title: "Apply it to your backend project: add registration and login with a maintained hashing library, protect every non-public endpoint with a dependency, add an ownership check to every endpoint that takes a record id, and add one admin-only action with a role check. Then write tests for: no token (401), invalid or expired token (401), another user's record (403 or 404), and a non-admin calling the admin action (403).",
      note: "The professional deliverable. Load the signing key from an environment variable, keep access tokens short-lived, and be ready to explain your session or token choice and its revocation trade-off in a project deep dive.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between 401 Unauthorized and 403 Forbidden?",
      answer:
        "401 means the request lacks valid authentication credentials: no token, a malformed one or an expired one, so the client should authenticate (the response includes a WWW-Authenticate header). 403 means the server knows who you are but you are not allowed to do this. Despite its name, 401 is about authentication and 403 about authorization. For another user's private record, many APIs return 404 instead of 403 so they do not reveal that the record exists.",
      followUps: ["Which status should a valid user get when requesting another user's order, and why might you choose 404?"],
      source: { title: "MDN — 401 Unauthorized", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401" },
    },
    {
      question: "Sessions or tokens: how do they differ, and when would you choose each?",
      answer:
        "With a server-side session, the server stores the session state and gives the browser a random, opaque session id in a cookie; logging out or revoking is just deleting the server record. With a self-contained token such as a JWT, the claims travel in the token and the server verifies its signature without a lookup, which suits APIs called by mobile apps or other services, but a token stays valid until it expires unless you add a denylist. For a browser app on one domain, a session cookie with Secure, HttpOnly and SameSite is often the simpler, safer default; tokens in localStorage can be read by any script injected through XSS.",
      followUps: ["How would logout work in each design?", "Why does a cookie-based design need CSRF protection?"],
      source: { title: "OWASP — Session Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" },
    },
    {
      question: "What is a JWT, and what should you never put in it?",
      answer:
        "A JSON Web Token is three base64url-encoded parts separated by dots: a header (token type and signing algorithm), a payload of claims (such as sub for the user id, exp for the expiry, iss and aud for the issuer and intended audience) and a signature over the first two. The signature lets the server detect tampering, but a signed JWT is not encrypted: anyone holding the token can decode and read the payload without the key. So never put passwords, secrets or sensitive personal data in it; keep it to identifiers and the claims needed for the decision.",
      code: `import base64, json

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsInJvbGUiOiJ1c2VyIiwiZXhwIjoxNzY3MjI1NjAwfQ.c2lnbmF0dXJl"
header, payload, signature = token.split(".")
print(json.loads(base64.urlsafe_b64decode(payload + "==")))   # no key needed to read it  # -> {'sub': '42', 'role': 'user', 'exp': 1767225600}`,
      followUps: ["If the payload is readable, what stops a user changing role to admin?"],
      source: { title: "OWASP — JSON Web Token Cheat Sheet: Signed JWTs are not confidential", url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet.html" },
    },
    {
      question: "How should a server validate a JWT it receives?",
      answer:
        "Use a maintained library and let it do the checks: verify the signature with the expected key and an explicit allow-list of algorithms (never accept alg \"none\" or whatever algorithm the token names), reject expired tokens (exp), and check iss and aud when your system uses them, so a token issued for another service is not accepted. Only after it is valid, load the user from sub and confirm they still exist and are active. Decoding without verification is only for debugging. Keep the signing key in configuration, not code.",
      followUps: ["Why is decoding a token without verifying the signature dangerous?"],
      source: { title: "PortSwigger Web Security Academy — JWT attacks: How to prevent JWT attacks", url: "https://portswigger.net/web-security/jwt" },
    },
    {
      question: "How do you log a user out or revoke access when you use JWTs?",
      answer:
        "A JWT is valid until it expires, so revocation needs a design choice. Keep access tokens short-lived (minutes) and issue a longer-lived refresh token that is stored server-side or can be checked, so revoking the refresh token stops new access tokens; rotate refresh tokens on use. If immediate revocation is required, keep a denylist of token ids (the jti claim) or a per-user token version and check it on each request — which brings back a server lookup, the cost tokens were meant to avoid. Saying this trade-off clearly is the point of the question.",
      followUps: ["What would you do if a signing key leaked?"],
      source: { title: "OWASP — JSON Web Token Cheat Sheet: JWT revocation", url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet.html" },
    },
    {
      question: "A logged-in user can view another user's invoice by changing the id in the URL. What is wrong, and how do you fix it?",
      answer:
        "It is an insecure direct object reference: the server authenticates the user but never checks that the requested object belongs to them. Fix it on the server for every endpoint that takes an id: load the record scoped to the current user (WHERE id = :id AND owner_id = :current_user) or check ownership or permission after loading, and return 403 or 404 when the check fails. Unguessable ids such as UUIDs make enumeration harder but are not a fix on their own. Add a test that one user cannot read, change or delete another user's record.",
      followUps: ["Where in a FastAPI app would you put this check so it is not forgotten?"],
      source: { title: "OWASP — Insecure Direct Object Reference Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html" },
    },
    {
      question: "How would you implement roles and permissions?",
      answer:
        "Start with deny by default: every endpoint requires an authenticated user unless deliberately public. Role-based access control assigns users roles (user, admin) and checks the required role in one reusable place, such as a FastAPI dependency, on the server — never from a role the client sends. Roles alone are too coarse for most data, so combine them with ownership or relationship checks (this user owns this project, or is a member of this team). Check on every request, log denied attempts without sensitive data, and test each rule.",
      followUps: ["What is the difference between vertical and horizontal privilege escalation?"],
      source: { title: "OWASP — Authorization Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" },
    },
    {
      question: "How do you protect an endpoint in FastAPI?",
      answer:
        "Declare a security dependency. OAuth2PasswordBearer extracts the bearer token from the Authorization header (returning 401 if it is missing); a get_current_user dependency verifies the token, loads the user and raises 401 if it is invalid; and endpoints declare Depends(get_current_user) to receive the user. Permission rules become further dependencies built on it (an active user, an admin), and dependencies can be applied to a whole router so new endpoints are protected by default. In tests, app.dependency_overrides substitutes a fake current user.",
      followUps: ["How would you make every endpoint in a router require authentication?"],
      source: { title: "FastAPI — Security: Get Current User", url: "https://fastapi.tiangolo.com/tutorial/security/get-current-user/" },
    },
    {
      question: "What should a login endpoint return when the username or password is wrong, and how do you resist guessing attacks?",
      answer:
        "Return the same generic message and status (for example \"Invalid username or password\") whether the user exists or not, and try to take similar time, so attackers cannot enumerate accounts. Resist guessing with rate limiting or throttling per account and per IP, temporary lockout with care (it can be abused to lock out real users), multi-factor authentication, and monitoring for spikes in failures. Never log the submitted password.",
      followUps: ["How do the same rules apply to password-reset and registration endpoints?"],
      source: { title: "OWASP — Authentication Cheat Sheet: Authentication and Error Messages", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
    },
    {
      question: "What are OAuth 2.0 and OpenID Connect, and how do they differ?",
      answer:
        "OAuth 2.0 is an authorization framework for delegated access: a user lets an application call an API on their behalf, and the application receives an access token with limited scopes instead of the user's password. The recommended flow for most apps is the authorization code flow with PKCE. OpenID Connect is an identity layer on top of OAuth 2.0 that adds an ID token (a signed JWT about the user) so the application can log the user in — \"Sign in with Google\" is OIDC. Short version: OAuth for access to APIs, OIDC for login. In practice you use a provider and a maintained client library rather than implementing either.",
      followUps: ["Why should an application never ask for a user's password to another service?"],
      source: { title: "OWASP — Authentication Cheat Sheet: OAuth 2.0 and OpenID Connect", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
    },
    {
      question: "How do you test authentication and authorization?",
      answer:
        "Test the failures as carefully as the successes, at the API level: no credentials return 401, malformed and expired tokens return 401, a valid user calling an admin action gets 403, and a user requesting, editing or deleting another user's record gets 403 or 404 and nothing changes. Add one test per endpoint for ownership, because a forgotten check is the common bug. In FastAPI, use TestClient and dependency overrides to act as different users, plus a few end-to-end tests that obtain a real token.",
      followUps: ["How would you make sure a newly added endpoint is not left unprotected?"],
      source: { title: "OWASP — Authorization Cheat Sheet: Create Unit and Integration Test Cases for Authorization Logic", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" },
    },
  ],
  mistakes: [
    "Writing custom password hashing, token formats or cryptography instead of using maintained libraries.",
    "Copying tutorial code with its hard-coded secret key and fake users into a real project.",
    "Decoding a JWT without verifying the signature, or accepting any algorithm the token names.",
    "Putting personal data or secrets in a JWT payload, believing it is encrypted.",
    "Checking that the user is logged in but not that they own the record (IDOR).",
    "Trusting a role, user id or price sent by the client.",
    "Enforcing permissions only in the frontend.",
    "Long-lived access tokens with no way to revoke them.",
    "Different login error messages for unknown users and wrong passwords.",
    "Testing only the happy path, so missing checks go unnoticed.",
  ],
  mastery: [
    "Your project has login built on maintained libraries, every non-public endpoint protected by a dependency, ownership checks on record endpoints and one role-restricted action.",
    "Your tests prove the failures: 401 without or with an invalid token, 403 for the wrong role, 403 or 404 for another user's record.",
    "You can explain sessions versus tokens, what is inside a JWT and why it is readable, how you validate it and how you would revoke access.",
    "You have completed the listed PortSwigger labs and can describe the server-side fix for each.",
    "You can explain OAuth 2.0 versus OpenID Connect in two sentences each, without claiming to have implemented them.",
    "Skip this topic if you can already do all of the above in any web framework.",
  ],
  deprioritize: [
    "Implementing OAuth 2.0 or OpenID Connect providers, SAML and enterprise single sign-on.",
    "WebAuthn/passkey implementation details, token binding and proof-of-possession tokens.",
    "Policy engines and fine-grained attribute-based access control frameworks.",
    "Advanced JWT attacks (header injection, algorithm confusion) beyond knowing that libraries must be configured to prevent them.",
  ],
  keywords: [
    "authentication",
    "authorization",
    "login",
    "JWT",
    "JSON Web Token",
    "bearer token",
    "session",
    "cookie",
    "refresh token",
    "401",
    "403",
    "RBAC",
    "role-based access control",
    "IDOR",
    "access control",
    "OAuth",
    "OAuth 2.0",
    "OpenID Connect",
    "OIDC",
    "FastAPI security",
    "OAuth2PasswordBearer",
    "pwdlib",
    "PyJWT",
    "Argon2",
  ],
};

export default topic;
