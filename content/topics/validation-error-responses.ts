import type { Topic } from "../types";

const topic: Topic = {
  slug: "validation-error-responses",
  title: "Validation and Error Responses",
  category: "Backend",
  phase: "backend-engineering",
  overview:
    "An API must reject bad input with a clear, consistent error and fail without exposing its internals. In FastAPI, Pydantic models validate request data automatically; you add business-rule checks, map errors to status codes and keep database constraints as the last line of defence.",
  whyItMatters:
    "REST/HTTP APIs appeared in 18 and security in 11 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample; validation and safe error responses are where the two meet, because verbose errors leak information and missing checks let bad data in. Integration and API tasks were candidate-reported at Stripe and Scale AI, and handling invalid or missing data is part of doing them well (editorial). At work, most bug reports about an API involve a rule that was not enforced or an error that did not explain itself.",
  prerequisites: ["HTTP APIs with FastAPI", "Exceptions and Error Handling", "Automated Testing"],
  objectives: [
    "Separate three layers and say where each lives: request validation (shape, types, required fields, ranges, formats — Pydantic, before your code runs), business rules (need application state or domain logic: email already registered, enough stock, end date after start — your code) and database constraints (NOT NULL, UNIQUE, FOREIGN KEY, CHECK — the final guarantee, which also catches races).",
    "Pydantic models: a field is required unless it has a default; str | None without a default is still required (it only allows None); separate input models (no id) from output models (no secrets).",
    "Know Pydantic's default (lax) conversion — \"3\" becomes 3 for an int field — and that extra fields are ignored unless the model sets extra=\"forbid\".",
    "Constraints with Field (gt, ge, lt, le, min_length, max_length, pattern) and, for query and path parameters, Query and Path with Annotated.",
    "Custom rules: @field_validator for one field, @model_validator(mode=\"after\") for rules across fields; raising ValueError inside a validator becomes a validation error.",
    "FastAPI's automatic 422 response and its detail list (type, loc, msg, input); why some APIs use 400 instead.",
    "Raise HTTPException for simple cases; define domain exceptions and register @app.exception_handler to map them to status codes; override the RequestValidationError handler only if your error shape requires it.",
    "One consistent, documented error shape across the API — FastAPI's {\"detail\": …} or RFC 9457 Problem Details (type, title, status, detail, instance).",
    "Map database errors deliberately: a unique-constraint violation becomes 409, not 500.",
    "Never leak internals: no stack traces, SQL, file paths, library versions or secrets in responses; return a generic 500 and log the details server-side (see Exceptions and Error Handling).",
    "Test invalid input: missing fields, wrong types, boundary values (0, 1, maximum, maximum + 1), empty strings, broken business rules and duplicates, asserting both status code and error body.",
    "Skip for now: custom Pydantic types and core schemas, discriminated unions, JSON Schema customization, translated error messages and full Problem Details type registries.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "FastAPI — Tutorial chapters on validation and errors",
      url: "https://fastapi.tiangolo.com/tutorial/handling-errors/",
      provider: "FastAPI (official documentation)",
      type: "Documentation",
      instructions:
        "Start here. Complete Handling Errors in full (Use HTTPException, Add custom headers, Install custom exception handlers, Override the default exception handlers), then, from the tutorial menu, Query Parameters and String Validations, Path Parameters and Numeric Validations, Body - Fields and Body - Nested Models. Revisit Response Model - Return Type for separate input and output models. Run each example and send invalid requests from /docs to see the responses. Free; no account.",
    },
    {
      title: "Pydantic — Models, Fields and Validators",
      url: "https://docs.pydantic.dev/latest/concepts/models/",
      provider: "Pydantic (official documentation)",
      type: "Documentation",
      instructions:
        "The validation library underneath FastAPI. In Models read Basic model usage, Data conversion, Extra data, Nested models and Error handling. In Fields read Default values and Field constraints. In Validators read Field validators, Model validators and Raising validation errors. Skip generic models, dynamic models, RootModel, aliases and JSON Schema customization. Free; no account.",
    },
    {
      title: "OWASP Error Handling Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Article",
      instructions:
        "Short reference for what an error response must not reveal and why: read Introduction, Context and Objective. Skip the Proposition section's Java and ASP.NET configuration examples. Free; no account.",
    },
    {
      title: "RFC 9457 — Problem Details for HTTP APIs",
      url: "https://www.rfc-editor.org/rfc/rfc9457.html",
      provider: "IETF",
      type: "Documentation",
      instructions:
        "Optional reference for a standard error shape. Read Section 3 (The Problem Details JSON Object) and Section 5 (Security Considerations). Use it if you want a standard format; FastAPI's default detail shape is also fine if it is consistent.",
    },
  ],
  exercises: [
    {
      title: "FastAPI Handling Errors and validation chapters",
      url: "https://fastapi.tiangolo.com/tutorial/handling-errors/",
      note: "Run the examples, send invalid requests (wrong types, missing fields, out-of-range values) from /docs and read each 422 body; then add a custom exception handler. Free; no account.",
    },
    {
      title: "Apply to your backend project: validation map and tests",
      note: "For each create and update endpoint, list its request rules, business rules and database constraints; implement them with Field or Query constraints, one cross-field validator, one domain exception with a handler and a unique-constraint violation mapped to 409. Write a test per rule asserting status and error body, and one test showing an unexpected exception returns a generic 500 (TestClient(app, raise_server_exceptions=False)).",
    },
    {
      title: "Code review drill: Full Stack FastAPI Template users routes",
      url: "https://github.com/fastapi/full-stack-fastapi-template/blob/master/backend/app/api/routes/users.py",
      note: "Find every HTTPException and its status code. Duplicate email returns 400 in create_user and register_user but 409 in the update endpoints: write the review comment you would leave. Then check whether the email check is only check-then-insert and what would stop a duplicate under concurrent sign-ups. Free to read on GitHub; no account.",
    },
    {
      title: "PortSwigger Web Security Academy — Lab: Information disclosure in error messages",
      url: "https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-in-error-messages",
      note: "Apprentice-level lab showing what a verbose error reveals to an attacker. Labs require a free PortSwigger account; the official solution uses Burp Suite Community Edition (free).",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between request validation, business-rule validation and database constraints? Where does each belong?",
      answer:
        "Request validation checks that the input is well-formed — required fields, types, lengths, ranges — without knowing anything about stored data; in FastAPI the Pydantic model does it before your function runs. Business rules need application state or domain logic, such as \"this email is not already registered\" or \"enough stock\", so they live in your code and return errors such as 404, 409 or 400. Database constraints (NOT NULL, UNIQUE, FOREIGN KEY, CHECK) are the final guarantee: they protect data from every code path and from races between concurrent requests. Use all three; never rely on frontend validation alone.",
      followUps: ["Which status code would you return for each layer's failure?"],
    },
    {
      question: "What does FastAPI do when a request fails validation, and why 422 rather than 400?",
      answer:
        "FastAPI validates the path, query and body against your declared types before calling your function. If validation fails, the function is not called and FastAPI returns 422 with a detail list: for each problem, its type, location (loc, such as [\"body\", \"quantity\"]), message and input. 422 Unprocessable Content means the request was syntactically valid but its content was not acceptable; 400 Bad Request is broader. Many APIs use 400 for validation errors; what matters is choosing one convention and documenting it.",
      followUps: ["How would you change the shape of FastAPI's validation errors?"],
      source: { title: "MDN — 422 Unprocessable Content", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422" },
    },
    {
      question: "In a Pydantic model, which fields are required? What does note: str | None mean?",
      answer:
        "A field is required unless it has a default. str | None only says the value may be None — without a default the client must still send it, even as null. note: str | None = None makes it optional. By default, unknown extra fields are silently ignored; set extra=\"forbid\" to reject them. For PATCH, use a model whose fields all have defaults and apply only the fields the client sent (exclude_unset).",
      code: `from pydantic import BaseModel, ValidationError

class Item(BaseModel):
    name: str
    note: str | None     # may be None, but is still required
    quantity: int = 1    # optional: it has a default

try:
    Item(name="pen")
except ValidationError as error:
    print([problem["loc"] for problem in error.errors()])   # -> [('note',)]
print(Item(name="pen", note=None).quantity)                 # -> 1
print(Item(name="pen", note=None, color="red"))   # -> name='pen' note=None quantity=1`,
      followUps: ["Why might ignoring unknown fields hide a client bug?"],
      source: { title: "Pydantic — Fields: Default values", url: "https://docs.pydantic.dev/latest/concepts/fields/" },
    },
    {
      question: "How do you enforce a value range, or a rule that involves two fields?",
      answer:
        "Declare simple constraints on the field — Field(gt=0) for a positive quantity, max_length for a name — so they are validated and appear in the OpenAPI docs. For a custom rule on one field, use @field_validator; for a rule across fields, such as end_date after start_date, use @model_validator(mode=\"after\"). Raising ValueError in a validator produces a normal validation error, so FastAPI returns 422. Note that Pydantic converts compatible input by default (\"3\" becomes 3); use strict mode where that is unacceptable.",
      code: `from pydantic import BaseModel, Field, ValidationError

class Order(BaseModel):
    quantity: int = Field(gt=0)
    note: str | None = None

print(Order(quantity="3").quantity)        # -> 3
try:
    Order(quantity=0)
except ValidationError as error:
    problem = error.errors()[0]
    print(problem["loc"], problem["type"])  # -> ('quantity',) greater_than`,
      followUps: ["Would you check \"email already registered\" in a validator? Why not?"],
      source: { title: "Pydantic — Validators", url: "https://docs.pydantic.dev/latest/concepts/validators/" },
    },
    {
      question: "How do you return errors consistently across a FastAPI application?",
      answer:
        "For simple cases, raise HTTPException with a status code and detail. As the application grows, raise domain exceptions (such as OrderNotFound or DuplicateEmail) from lower-level code and register exception handlers that map each to a status code and one documented error shape, so routes stay simple and every endpoint responds the same way. If you adopt a different shape, such as RFC 9457 Problem Details, override the default RequestValidationError and HTTPException handlers too, so validation errors match. Unexpected exceptions get a generic 500 and are logged with full detail server-side.",
      followUps: ["What fields does an RFC 9457 Problem Details object contain?", "What must never appear in an error response?"],
      source: { title: "FastAPI — Handling Errors", url: "https://fastapi.tiangolo.com/tutorial/handling-errors/" },
    },
    {
      question: "Two users register with the same email at the same moment. Your code checks for an existing user before inserting. What can go wrong?",
      answer:
        "Both requests can run the check before either inserts, both see no existing user, and both insert — a race condition. The application check gives a friendly error in the normal case, but only a UNIQUE constraint in the database guarantees uniqueness. Add the constraint, catch the database's integrity error on insert and return 409 Conflict with a clear message instead of letting it surface as a 500.",
      followUps: ["Where else can check-then-act races appear in a web application?"],
      source: { title: "PostgreSQL Documentation — Unique Constraints", url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS" },
    },
    {
      question: "How do you test an endpoint's validation and error handling?",
      answer:
        "List the rules, then write at least one failing-input test per rule: missing required fields, wrong types, boundary values on both sides of each limit, empty strings, unknown fields if you forbid them, a broken business rule and a duplicate. Assert the status code and the error body's shape, not just that the request failed. pytest.mark.parametrize keeps many similar cases short. Also test that an unexpected error returns a generic 500 without internal details.",
      followUps: ["Which boundary values would you test for a field with Field(ge=1, le=100)?"],
      source: { title: "pytest — How to parametrize fixtures and test functions", url: "https://pytest.org/en/stable/how-to/parametrize.html" },
    },
  ],
  mistakes: [
    "Relying on type hints alone for rules such as \"positive quantity\" or \"at most 100 characters\".",
    "Validating only in the frontend.",
    "Check-then-insert without a UNIQUE constraint, so concurrent requests create duplicates.",
    "Letting a database integrity error surface as a 500.",
    "Different error shapes from different endpoints (a string here, an object there).",
    "Returning exception messages, stack traces, SQL or library versions to clients.",
    "Assuming str | None makes a field optional.",
    "Using one model for input and output, so clients can set the id or see internal fields.",
    "Testing only the happy path.",
  ],
  mastery: [
    "For every endpoint in your project you can name its request rules, business rules and database constraints, and each has a test asserting status and error body.",
    "You can implement field constraints, a cross-field validator, a domain exception with a handler and a unique-constraint violation mapped to 409 without looking up the pattern.",
    "You can explain 422 versus 400, required versus optional fields, why a database constraint is still needed after an application check, and what must never appear in an error response.",
    "All your API's error responses share one documented shape, and a test shows that an unexpected error returns a generic 500.",
    "Skip this topic if your existing API already does all of the above.",
  ],
  deprioritize: [
    "Custom Pydantic types, core schemas and discriminated unions.",
    "JSON Schema customization and translated error messages.",
    "Problem Details type registries and API-wide error catalogues.",
  ],
  keywords: [
    "validation",
    "input validation",
    "request validation",
    "Pydantic",
    "BaseModel",
    "Field",
    "field_validator",
    "model_validator",
    "422",
    "Unprocessable Entity",
    "400 Bad Request",
    "409 Conflict",
    "HTTPException",
    "exception handler",
    "RequestValidationError",
    "error response",
    "Problem Details",
    "RFC 9457",
    "RFC 7807",
    "unique constraint",
    "IntegrityError",
    "business rules",
  ],
};

export default topic;
