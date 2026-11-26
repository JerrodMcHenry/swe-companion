import type { Topic } from "../types";

const topic: Topic = {
  slug: "fastapi-http-apis",
  title: "HTTP APIs with FastAPI",
  category: "Backend",
  phase: "backend-engineering",
  overview:
    "Build REST endpoints with FastAPI — routes, path and query parameters, request bodies, status codes, dependencies, generated OpenAPI docs and tests — and call other teams' APIs from Python with timeouts, error handling, retries and pagination. This topic is also the curriculum's home for API integration tasks.",
  whyItMatters:
    "REST/HTTP APIs were the most common technical requirement in this curriculum's R4 sample of 28 entry-level backend and full-stack postings (18 of 28, ahead of testing at 17 and SQL at 15). Integration tasks — calling an API, processing its data and handling failures — were candidate-reported at Stripe and Scale AI. At work, adding an endpoint or integrating a third-party service is routine backend work. FastAPI is this curriculum's teaching choice, not an employer requirement: the concepts transfer to Flask, Django REST Framework, Express or Spring.",
  prerequisites: [
    "How the Internet and HTTP Work (methods, status codes, JSON, idempotency — not repeated here)",
    "Functions and Arguments",
    "Dictionaries",
    "Classes and Objects",
    "Exceptions and Error Handling",
    "Automated Testing",
  ],
  objectives: [
    "Design REST resources: plural nouns in URLs (/books, /books/{book_id}), methods mapped to operations (POST create, GET read and list, PUT or PATCH update, DELETE remove), and the status code each returns (201 on create, 204 or 200 on delete, 404 for a missing item).",
    "Declare path operations with @app.get, @app.post, @app.put, @app.patch and @app.delete; know that route order matters (/users/me before /users/{user_id}).",
    "Path parameters, query parameters (defaults, optional, required) and a request body as a Pydantic model; know FastAPI's rule: a name in the path template is a path parameter, a single-value type is a query parameter, a Pydantic model is the body.",
    "Return data with a response model or return type so FastAPI filters the output (never return a password hash); set status_code on the decorator; raise HTTPException(status_code=404) for a missing resource. Error shapes and validation rules are covered in Validation and Error Responses.",
    "Implement CRUD plus a filtered, paginated list endpoint (limit and offset query parameters with a maximum limit).",
    "Use the generated docs: Swagger UI at /docs and the OpenAPI schema at /openapi.json; explain what OpenAPI is.",
    "Dependency injection with Depends: share logic such as pagination parameters, a database session or the current user, and replace a dependency in tests with app.dependency_overrides.",
    "Test endpoints with TestClient and pytest: status code and JSON body for success, not-found and invalid-input cases.",
    "Consume an external API with httpx: a Client with base_url, an explicit timeout (httpx defaults to 5 seconds of network inactivity), status checks or raise_for_status, and the difference between httpx.RequestError (network, timeout) and httpx.HTTPStatusError (non-2xx).",
    "Parse responses defensively (missing or null fields), follow pagination (next URLs, Link headers, page or cursor parameters) and respect rate limits (429 and Retry-After).",
    "Retry only transient failures (connection errors, timeouts, 429, 503) a few times with backoff, and only for idempotent requests unless the API supports idempotency keys; know that httpx's HTTPTransport(retries=n) retries only connection failures.",
    "Test client code without the network by injecting the client and using httpx.MockTransport (or a fake from Automated Testing).",
    "Skip for now: service and repository layers, async database drivers, API versioning strategies, GraphQL and gRPC, WebSockets and server-sent events, background tasks, and OAuth flows (covered in Authentication and Authorization).",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "FastAPI — Tutorial - User Guide",
      url: "https://fastapi.tiangolo.com/tutorial/",
      provider: "FastAPI (official documentation)",
      type: "Documentation",
      instructions:
        "Start here. Type and run every example in these chapters, in order: First Steps (including Interactive API docs and OpenAPI), Path Parameters (including Order matters), Query Parameters, Request Body, Response Model - Return Type, Response Status Code, Handling Errors (only Use HTTPException for now), Body - Updates (PUT versus PATCH), Dependencies (the first page only) and Testing. Read Bigger Applications - Multiple Files when your main.py gets long. Skip forms, files, cookies, headers, security, middleware, streaming and background tasks for now. Free; no account.",
    },
    {
      title: "Python API Development — Comprehensive Course for Beginners (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
      provider: "freeCodeCamp.org (Sanjeev Thiyagarajan)",
      type: "Video",
      instructions:
        "Video alternative to the tutorial chapters, building one API step by step. Watch only 36:21 (Starting FastAPI) to 2:21:34 (end of Automatic Documentation): path operations, HTTP requests, Pydantic schemas, CRUD, path order, status codes, deleting, updating and docs. Published in November 2021, so some syntax predates current FastAPI and Pydantic v2 — follow the official tutorial where they differ. It uses Postman; FastAPI's /docs page works instead. Free; no account.",
    },
    {
      title: "HTTPX — QuickStart, Clients, Timeouts and Transports",
      url: "https://www.python-httpx.org/quickstart/",
      provider: "HTTPX (official documentation)",
      type: "Documentation",
      instructions:
        "The client half of this topic. In QuickStart read Passing Parameters in URLs, JSON Response Content, Response Status Codes, Timeouts and Exceptions. Then read Clients (Why use a Client? and Sharing configuration across requests), Timeouts (Setting and disabling timeouts) and, under Transports, the HTTP Transport retries note and Mock transports. About an hour. Free; no account.",
    },
    {
      title: "GitHub Docs — Using pagination in the REST API, and Rate limits for the REST API",
      url: "https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api",
      provider: "GitHub",
      type: "Documentation",
      instructions:
        "Reference: how a large real-world API paginates (About pagination, Using link headers, Changing the number of items per page) and limits clients (the rate limits page: unauthenticated requests get 60 per hour). Use it with the integration exercise below.",
    },
  ],
  exercises: [
    {
      title: "FastAPI tutorial chapters (Start here list)",
      url: "https://fastapi.tiangolo.com/tutorial/",
      note: "Run each chapter's example locally, then call it from /docs and with curl -i. Demonstrates parameters, bodies, response models, status codes, dependencies and TestClient tests. Free; no account.",
    },
    {
      title: "Apply to your backend project: one complete resource",
      note: "Implement create, read, update, delete and a filtered, paginated list for one resource, with correct status codes, a response model that hides internal fields, one shared dependency, and TestClient tests for success, not-found and invalid input. This is the Backend Engineering unit's readiness check; do it without AI first.",
    },
    {
      title: "Read the Full Stack FastAPI Template: users and items routes and their tests",
      url: "https://github.com/fastapi/full-stack-fastapi-template/blob/master/backend/app/api/routes/items.py",
      note: "Trace one request from route to response: which dependencies run (session, current user), which status codes are raised, and how tests/api/routes/test_items.py checks them. Code-review question: users.py returns 400 for a duplicate email on create but 409 on update — which would you choose, and why? Ignore SQLModel, auth and the frontend for now. Free to read on GitHub; no account.",
    },
    {
      title: "Integration practice: GitHub REST API client",
      url: "https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api",
      note: "Write a function that lists all open issues of a small public repository by following Link headers, with a timeout, a clear error for 404, handling of 403/429 rate-limit responses and a bounded retry for timeouts; transform the result (count issues per label). Test it with httpx.MockTransport, including a two-page response and a 500. No account needed (60 unauthenticated requests per hour). Practice prompt: no suitable external integration exercise set was found.",
    },
    {
      title: "Alternative pagination style: PokeAPI resource lists",
      url: "https://pokeapi.co/api/v2/pokemon?limit=20",
      note: "This API returns a next URL in the JSON body instead of a Link header. Follow next until it is null and collect every name, reusing your client code. Free; no account.",
    },
  ],
  interviewQuestions: [
    {
      question: "Design REST endpoints for a books resource. Which URLs, methods and status codes would you use?",
      answer:
        "GET /books lists books, with filtering and pagination as query parameters (?author=…&limit=20&offset=0), returning 200. POST /books creates one and returns 201 with the created book. GET /books/{book_id} returns 200 or 404. PUT /books/{book_id} replaces and PATCH updates fields, returning 200 with the updated book (or 204), or 404. DELETE /books/{book_id} returns 204 (or 404). Use nouns, not verbs (/books, not /getBooks), nest only for real ownership (/authors/{author_id}/books), return 422 or 400 for invalid input and 409 for conflicts such as a duplicate ISBN.",
      followUps: [
        "How would you model an action that is not plain CRUD, such as cancelling an order?",
        "Should DELETE of an already-deleted book return 404 or 204?",
      ],
      source: { title: "MDN — HTTP request methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods" },
    },
    {
      question: "What is the difference between path parameters, query parameters and the request body? How does FastAPI tell them apart?",
      answer:
        "The path identifies a resource (/users/42), query parameters filter or modify the request (?status=open&limit=20), and the body carries the data for a create or update, usually JSON. FastAPI decides from the function signature: a parameter named in the path template is a path parameter, a parameter with a single-value type (int, str, bool) is a query parameter, and a parameter typed as a Pydantic model is the request body. The type hints also drive conversion, validation and the generated docs.",
      followUps: ["Why is a body on a GET request a bad idea?", "How do you make a query parameter required?"],
      source: { title: "FastAPI — Request Body: Request body + path + query parameters", url: "https://fastapi.tiangolo.com/tutorial/body/" },
    },
    {
      question: "How would you paginate a list endpoint, and what are the trade-offs?",
      answer:
        "The simplest approach is limit and offset query parameters with a maximum limit, returning the items plus a way to get the next page. It is easy to build and lets clients jump to any page, but rows skipped by OFFSET still have to be computed by the database, so large offsets get slow, and items can shift between pages when data changes. Cursor (keyset) pagination returns an opaque cursor such as the last seen id and queries \"after this id\"; it is fast and stable but cannot jump to page 50. Always use a stable ORDER BY and cap the page size.",
      followUps: [
        "How do you consume an API that paginates with Link headers or a next URL?",
        "Why is ORDER BY required for correct pagination?",
      ],
      source: { title: "PostgreSQL Documentation — LIMIT and OFFSET", url: "https://www.postgresql.org/docs/current/queries-limit.html" },
    },
    {
      question: "What is dependency injection in FastAPI, and why is it useful?",
      answer:
        "An endpoint declares what it needs with Depends — a database session, the current user, common pagination parameters — and FastAPI calls that dependency for each request and passes in the result. Shared logic lives in one place instead of being repeated in every endpoint, dependencies can depend on other dependencies, and a dependency that uses yield can clean up afterwards (closing a session). In tests, app.dependency_overrides replaces a real dependency, such as an external service, with a fake.",
      followUps: ["How would you replace the database or a payment client in a test?"],
      source: { title: "FastAPI — Dependencies", url: "https://fastapi.tiangolo.com/tutorial/dependencies/" },
    },
    {
      question: "How do you test an API endpoint?",
      answer:
        "With FastAPI, TestClient sends real HTTP requests to the application in-process, without starting a server, and pytest runs the tests. For each endpoint, assert the status code and the JSON body for the success case, a missing resource (404), invalid input (422) and edge cases such as an empty list or the maximum page size; after a create, check that the item can be fetched. Keep tests isolated: use a separate test database or override the dependency that provides data, and fake external services instead of calling them.",
      followUps: ["What is the difference between this and a unit test of a helper function?"],
      source: { title: "FastAPI — Testing", url: "https://fastapi.tiangolo.com/tutorial/testing/" },
    },
    {
      question: "What is OpenAPI, and how does FastAPI produce API documentation?",
      answer:
        "OpenAPI is a standard, machine-readable description of an API: its paths, parameters, request and response bodies and status codes. FastAPI generates it from your route decorators, type hints and Pydantic models and serves it at /openapi.json; Swagger UI at /docs and ReDoc at /redoc render it as interactive documentation. Because it is derived from code it stays in sync, and other tools can generate clients from it — but it is only as accurate as your declarations, so undeclared error responses do not appear.",
      followUps: ["How would a frontend team use the OpenAPI schema?"],
      source: { title: "FastAPI — First Steps: Interactive API docs and OpenAPI", url: "https://fastapi.tiangolo.com/tutorial/first-steps/" },
    },
    {
      question: "Your service calls a third-party API. What can go wrong, and how do you handle it?",
      answer:
        "The call can hang, fail at the network level, return an error status, return unexpected or missing fields, hit a rate limit or span several pages. Always set a timeout. Catch network errors and timeouts separately from error statuses (in httpx, RequestError versus HTTPStatusError). A 4xx usually means your request is wrong, so do not retry it — except 429, where you wait for Retry-After. Retry transient failures (timeouts, 502, 503) a few times with exponential backoff, and only for idempotent requests unless the API supports idempotency keys. Validate the response before using it, log failures with context, and return a clear error (often 502 or 503) to your own client instead of passing through the third party's error or crashing.",
      followUps: [
        "Why must retries be limited and spaced out?",
        "How would you stop calling an API that keeps failing?",
      ],
      source: { title: "HTTPX — Exceptions", url: "https://www.python-httpx.org/exceptions/" },
    },
    {
      question: "How do you test code that calls an external API without using the network?",
      answer:
        "Pass the HTTP client in instead of creating it inside the function, then give it a fake transport that returns prepared responses. With httpx, MockTransport takes a function that maps each request to a response, so you can test success, 404, 500, malformed JSON and multi-page responses quickly and deterministically. Real-API tests are slow, flaky and rate-limited; keep at most a few, run separately.",
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
  ],
  mistakes: [
    "Verbs in URLs (/createBook, /getBooks) instead of resource nouns and HTTP methods.",
    "Returning 200 for everything, including creations and errors, or 500 for a client's mistake.",
    "Returning the database model directly, exposing fields such as password hashes, instead of declaring a response model.",
    "List endpoints with no maximum page size.",
    "Declaring /users/{user_id} before /users/me, so \"me\" is parsed as an id.",
    "Calling external APIs without a timeout, or retrying every failure indefinitely, including 4xx errors and non-idempotent POSTs.",
    "Assuming every field in a third-party response is present, causing KeyError in production.",
    "Tests that call the real third-party API.",
    "Adding service and repository layers to a handful of endpoints before there is a reason.",
  ],
  mastery: [
    "Without AI, you can build a resource with create, read, update, delete and a filtered, paginated list, correct status codes, a response model and TestClient tests for success, not-found and invalid input.",
    "You can explain path versus query versus body, how FastAPI chooses each, and how Depends works and is overridden in tests.",
    "Given an unfamiliar requirement, you can design the endpoints and status codes and justify trade-offs such as PUT versus PATCH and offset versus cursor pagination.",
    "You can write a client for a real API that follows pagination, sets timeouts, handles error statuses and rate limits and retries only transient failures, tested with a mock transport. Editorial benchmark: a basic integration task — fetch, transform, handle failures, test — in about 60 minutes. This is not an employer passing standard.",
    "You can explain every endpoint of your project in a project deep dive.",
    "Skip this topic if you have built and tested a REST API in another framework and written an API client with timeouts and error handling; skim First Steps, Request Body, Dependencies and Testing for FastAPI syntax.",
  ],
  deprioritize: [
    "GraphQL, gRPC, WebSockets and server-sent events.",
    "HATEOAS, the Richardson maturity model and API versioning strategies.",
    "Service and repository layers, async database drivers and API gateways.",
    "Generating client SDKs from OpenAPI and rate limiting your own API.",
  ],
  keywords: [
    "REST",
    "REST API",
    "RESTful",
    "API",
    "endpoint",
    "route",
    "path operation",
    "CRUD",
    "FastAPI",
    "Swagger",
    "OpenAPI",
    "Depends",
    "dependency injection",
    "TestClient",
    "httpx",
    "requests",
    "API client",
    "API integration",
    "integration task",
    "third-party API",
    "pagination",
    "retries",
    "timeout",
    "rate limit",
    "429",
  ],
};

export default topic;
