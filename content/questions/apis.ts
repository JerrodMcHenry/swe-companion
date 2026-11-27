import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "API design",
    question: "Design REST endpoints for a books resource. Which URLs, methods and status codes would you use?",
    answer: "GET /books lists books, with filtering and pagination as query parameters (?author=…&limit=20&offset=0), returning 200. POST /books creates one and returns 201 with the created book. GET /books/{book_id} returns 200 or 404. PUT /books/{book_id} replaces and PATCH updates fields, returning 200 with the updated book (or 204), or 404. DELETE /books/{book_id} returns 204 (or 404). Use nouns, not verbs (/books, not /getBooks), nest only for real ownership (/authors/{author_id}/books), return 422 or 400 for invalid input and 409 for conflicts such as a duplicate ISBN.",
    followUps: ["How would you model an action that is not plain CRUD, such as cancelling an order?","Should DELETE of an already-deleted book return 404 or 204?"],
    source: { title: "MDN — HTTP request methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods" },
  },
  {
    group: "API design",
    question: "What is the difference between path parameters, query parameters and the request body? How does FastAPI tell them apart?",
    answer: "The path identifies a resource (/users/42), query parameters filter or modify the request (?status=open&limit=20), and the body carries the data for a create or update, usually JSON. FastAPI decides from the function signature: a parameter named in the path template is a path parameter, a parameter with a single-value type (int, str, bool) is a query parameter, and a parameter typed as a Pydantic model is the request body. The type hints also drive conversion, validation and the generated docs.",
    followUps: ["Why is a body on a GET request a bad idea?","How do you make a query parameter required?"],
    source: { title: "FastAPI — Request Body: Request body + path + query parameters", url: "https://fastapi.tiangolo.com/tutorial/body/" },
  },
  {
    group: "API design",
    question: "How would you paginate a list endpoint, and what are the trade-offs?",
    answer: "The simplest approach is limit and offset query parameters with a maximum limit, returning the items plus a way to get the next page. It is easy to build and lets clients jump to any page, but rows skipped by OFFSET still have to be computed by the database, so large offsets get slow, and items can shift between pages when data changes. Cursor (keyset) pagination returns an opaque cursor such as the last seen id and queries \"after this id\"; it is fast and stable but cannot jump to page 50. Always use a stable ORDER BY and cap the page size.",
    followUps: ["How do you consume an API that paginates with Link headers or a next URL?","Why is ORDER BY required for correct pagination?"],
    source: { title: "PostgreSQL Documentation — LIMIT and OFFSET", url: "https://www.postgresql.org/docs/current/queries-limit.html" },
  },
  {
    group: "API design",
    question: "How do you test an API endpoint?",
    answer: "With FastAPI, TestClient sends real HTTP requests to the application in-process, without starting a server, and pytest runs the tests. For each endpoint, assert the status code and the JSON body for the success case, a missing resource (404), invalid input (422) and edge cases such as an empty list or the maximum page size; after a create, check that the item can be fetched. Keep tests isolated: use a separate test database or override the dependency that provides data, and fake external services instead of calling them.",
    followUps: ["What is the difference between this and a unit test of a helper function?"],
    source: { title: "FastAPI — Testing", url: "https://fastapi.tiangolo.com/tutorial/testing/" },
  },
  {
    group: "API design",
    question: "Your service calls a third-party API. What can go wrong, and how do you handle it?",
    answer: "The call can hang, fail at the network level, return an error status, return unexpected or missing fields, hit a rate limit or span several pages. Always set a timeout. Catch network errors and timeouts separately from error statuses (in httpx, RequestError versus HTTPStatusError). A 4xx usually means your request is wrong, so do not retry it — except 429, where you wait for Retry-After. Retry transient failures (timeouts, 502, 503) a few times with exponential backoff, and only for idempotent requests unless the API supports idempotency keys. Validate the response before using it, log failures with context, and return a clear error (often 502 or 503) to your own client instead of passing through the third party's error or crashing.",
    followUps: ["Why must retries be limited and spaced out?","How would you stop calling an API that keeps failing?"],
    source: { title: "HTTPX — Exceptions", url: "https://www.python-httpx.org/exceptions/" },
  },
  {
    group: "API design",
    question: "How do you test code that calls an external API without using the network?",
    answer: "Pass the HTTP client in instead of creating it inside the function, then give it a fake transport that returns prepared responses. With httpx, MockTransport takes a function that maps each request to a response, so you can test success, 404, 500, malformed JSON and multi-page responses quickly and deterministically. Real-API tests are slow, flaky and rate-limited; keep at most a few, run separately.",
    code: `import httpx

def fetch_user(client: httpx.Client, user_id: int) -> dict | None:
    response = client.get(f"/users/{user_id}", timeout=5.0)
    if response.status_code == 404:
        return None
    response.raise_for_status()          # any other non-2xx raises HTTPStatusError
    return response.json()

fake = httpx.MockTransport(lambda request: httpx.Response(404))
client = httpx.Client(transport=fake, base_url="https://api.example.com")
print(fetch_user(client, 7))             # -> None`,
    followUps: ["How would you test a timeout?"],
    source: { title: "HTTPX — Transports: Mock transports", url: "https://www.python-httpx.org/advanced/transports/" },
  },
  {
    group: "Validation & errors",
    question: "What is the difference between request validation, business-rule validation and database constraints? Where does each belong?",
    answer: "Request validation checks that the input is well-formed — required fields, types, lengths, ranges — without knowing anything about stored data; in FastAPI the Pydantic model does it before your function runs. Business rules need application state or domain logic, such as \"this email is not already registered\" or \"enough stock\", so they live in your code and return errors such as 404, 409 or 400. Database constraints (NOT NULL, UNIQUE, FOREIGN KEY, CHECK) are the final guarantee: they protect data from every code path and from races between concurrent requests. Use all three; never rely on frontend validation alone.",
    followUps: ["Which status code would you return for each layer's failure?"],
  },
  {
    group: "Validation & errors",
    question: "What does FastAPI do when a request fails validation, and why 422 rather than 400?",
    answer: "FastAPI validates the path, query and body against your declared types before calling your function. If validation fails, the function is not called and FastAPI returns 422 with a detail list: for each problem, its type, location (loc, such as [\"body\", \"quantity\"]), message and input. 422 Unprocessable Content means the request was syntactically valid but its content was not acceptable; 400 Bad Request is broader. Many APIs use 400 for validation errors; what matters is choosing one convention and documenting it.",
    followUps: ["How would you change the shape of FastAPI's validation errors?"],
    source: { title: "MDN — 422 Unprocessable Content", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422" },
  },
  {
    group: "Validation & errors",
    question: "How do you return errors consistently across a FastAPI application?",
    answer: "For simple cases, raise HTTPException with a status code and detail. As the application grows, raise domain exceptions (such as OrderNotFound or DuplicateEmail) from lower-level code and register exception handlers that map each to a status code and one documented error shape, so routes stay simple and every endpoint responds the same way. If you adopt a different shape, such as RFC 9457 Problem Details, override the default RequestValidationError and HTTPException handlers too, so validation errors match. Unexpected exceptions get a generic 500 and are logged with full detail server-side.",
    followUps: ["What fields does an RFC 9457 Problem Details object contain?","What must never appear in an error response?"],
    source: { title: "FastAPI — Handling Errors", url: "https://fastapi.tiangolo.com/tutorial/handling-errors/" },
  },
  {
    group: "Validation & errors",
    question: "Two users register with the same email at the same moment. Your code checks for an existing user before inserting. What can go wrong?",
    answer: "Both requests can run the check before either inserts, both see no existing user, and both insert — a race condition. The application check gives a friendly error in the normal case, but only a UNIQUE constraint in the database guarantees uniqueness. Add the constraint, catch the database's integrity error on insert and return 409 Conflict with a clear message instead of letting it surface as a 500.",
    followUps: ["Where else can check-then-act races appear in a web application?"],
    source: { title: "PostgreSQL Documentation — Unique Constraints", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS" },
  },
  {
    group: "Authentication & authorization",
    question: "What is the difference between 401 Unauthorized and 403 Forbidden?",
    answer: "401 means the request lacks valid authentication credentials: no token, a malformed one or an expired one, so the client should authenticate (the response includes a WWW-Authenticate header). 403 means the server knows who you are but you are not allowed to do this. Despite its name, 401 is about authentication and 403 about authorization. For another user's private record, many APIs return 404 instead of 403 so they do not reveal that the record exists.",
    followUps: ["Which status should a valid user get when requesting another user's order, and why might you choose 404?"],
    source: { title: "MDN — 401 Unauthorized", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401" },
  },
  {
    group: "Authentication & authorization",
    question: "Sessions or tokens: how do they differ, and when would you choose each?",
    answer: "With a server-side session, the server stores the session state and gives the browser a random, opaque session id in a cookie; logging out or revoking is just deleting the server record. With a self-contained token such as a JWT, the claims travel in the token and the server verifies its signature without a lookup, which suits APIs called by mobile apps or other services, but a token stays valid until it expires unless you add a denylist. For a browser app on one domain, a session cookie with Secure, HttpOnly and SameSite is often the simpler, safer default; tokens in localStorage can be read by any script injected through XSS.",
    followUps: ["How would logout work in each design?","Why does a cookie-based design need CSRF protection?"],
    source: { title: "OWASP — Session Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" },
  },
  {
    group: "Authentication & authorization",
    question: "What is a JWT, and what should you never put in it?",
    answer: "A JSON Web Token is three base64url-encoded parts separated by dots: a header (token type and signing algorithm), a payload of claims (such as sub for the user id, exp for the expiry, iss and aud for the issuer and intended audience) and a signature over the first two. The signature lets the server detect tampering, but a signed JWT is not encrypted: anyone holding the token can decode and read the payload without the key. So never put passwords, secrets or sensitive personal data in it; keep it to identifiers and the claims needed for the decision.",
    code: `import base64, json

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsInJvbGUiOiJ1c2VyIiwiZXhwIjoxNzY3MjI1NjAwfQ.c2lnbmF0dXJl"
header, payload, signature = token.split(".")
print(json.loads(base64.urlsafe_b64decode(payload + "==")))   # no key needed to read it  # -> {'sub': '42', 'role': 'user', 'exp': 1767225600}`,
    followUps: ["If the payload is readable, what stops a user changing role to admin?"],
    source: { title: "OWASP — JSON Web Token Cheat Sheet: Signed JWTs are not confidential", url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet.html" },
  },
  {
    group: "Authentication & authorization",
    question: "How should a server validate a JWT it receives?",
    answer: "Use a maintained library and let it do the checks: verify the signature with the expected key and an explicit allow-list of algorithms (never accept alg \"none\" or whatever algorithm the token names), reject expired tokens (exp), and check iss and aud when your system uses them, so a token issued for another service is not accepted. Only after it is valid, load the user from sub and confirm they still exist and are active. Decoding without verification is only for debugging. Keep the signing key in configuration, not code.",
    followUps: ["Why is decoding a token without verifying the signature dangerous?"],
    source: { title: "PortSwigger Web Security Academy — JWT attacks: How to prevent JWT attacks", url: "https://portswigger.net/web-security/jwt" },
  },
  {
    group: "Authentication & authorization",
    question: "How do you log a user out or revoke access when you use JWTs?",
    answer: "A JWT is valid until it expires, so revocation needs a design choice. Keep access tokens short-lived (minutes) and issue a longer-lived refresh token that is stored server-side or can be checked, so revoking the refresh token stops new access tokens; rotate refresh tokens on use. If immediate revocation is required, keep a denylist of token ids (the jti claim) or a per-user token version and check it on each request — which brings back a server lookup, the cost tokens were meant to avoid. Saying this trade-off clearly is the point of the question.",
    followUps: ["What would you do if a signing key leaked?"],
    source: { title: "OWASP — JSON Web Token Cheat Sheet: JWT revocation", url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet.html" },
  },
  {
    group: "Authentication & authorization",
    question: "A logged-in user can view another user's invoice by changing the id in the URL. What is wrong, and how do you fix it?",
    answer: "It is an insecure direct object reference: the server authenticates the user but never checks that the requested object belongs to them. Fix it on the server for every endpoint that takes an id: load the record scoped to the current user (WHERE id = :id AND owner_id = :current_user) or check ownership or permission after loading, and return 403 or 404 when the check fails. Unguessable ids such as UUIDs make enumeration harder but are not a fix on their own. Add a test that one user cannot read, change or delete another user's record.",
    followUps: ["Where in a FastAPI app would you put this check so it is not forgotten?"],
    source: { title: "OWASP — Insecure Direct Object Reference Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html" },
  },
  {
    group: "Authentication & authorization",
    question: "How would you implement roles and permissions?",
    answer: "Start with deny by default: every endpoint requires an authenticated user unless deliberately public. Role-based access control assigns users roles (user, admin) and checks the required role in one reusable place, such as a FastAPI dependency, on the server — never from a role the client sends. Roles alone are too coarse for most data, so combine them with ownership or relationship checks (this user owns this project, or is a member of this team). Check on every request, log denied attempts without sensitive data, and test each rule.",
    followUps: ["What is the difference between vertical and horizontal privilege escalation?"],
    source: { title: "OWASP — Authorization Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" },
  },
  {
    group: "Authentication & authorization",
    question: "What should a login endpoint return when the username or password is wrong, and how do you resist guessing attacks?",
    answer: "Return the same generic message and status (for example \"Invalid username or password\") whether the user exists or not, and try to take similar time, so attackers cannot enumerate accounts. Resist guessing with rate limiting or throttling per account and per IP, temporary lockout with care (it can be abused to lock out real users), multi-factor authentication, and monitoring for spikes in failures. Never log the submitted password.",
    followUps: ["How do the same rules apply to password-reset and registration endpoints?"],
    source: { title: "OWASP — Authentication Cheat Sheet: Authentication and Error Messages", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
  },
  {
    group: "Authentication & authorization",
    question: "What are OAuth 2.0 and OpenID Connect, and how do they differ?",
    answer: "OAuth 2.0 is an authorization framework for delegated access: a user lets an application call an API on their behalf, and the application receives an access token with limited scopes instead of the user's password. The recommended flow for most apps is the authorization code flow with PKCE. OpenID Connect is an identity layer on top of OAuth 2.0 that adds an ID token (a signed JWT about the user) so the application can log the user in — \"Sign in with Google\" is OIDC. Short version: OAuth for access to APIs, OIDC for login. In practice you use a provider and a maintained client library rather than implementing either.",
    followUps: ["Why should an application never ask for a user's password to another service?"],
    source: { title: "OWASP — Authentication Cheat Sheet: OAuth 2.0 and OpenID Connect", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
  },
];

export default questions;
