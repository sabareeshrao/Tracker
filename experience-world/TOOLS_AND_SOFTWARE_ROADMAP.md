# Experience World — Software & Tools Roadmap

**Purpose:** Teach the *complete workflow* of a Java developer, using tools when a real business requirement creates the need. This is a future study plan, **not** a claim that every tool appeared in the user's job.

**Canonical progress:** [KNOWLEDGE_STATE.json](KNOWLEDGE_STATE.json) and [MENTOR_TEACHING_CHECKLIST.md](MENTOR_TEACHING_CHECKLIST.md). As checked on 2026-10-04, **Year 1, Q001–Q006 understood (self-reported), Q007 in progress**. Writing this document does **not** mark an extra question as presented or completed.

**Interview-priority goal:** ~1,000 distinct anchor questions across a simulated five-career-year journey, with one main scenario per lesson where suitable. A career year does **not** imply exactly 200 lessons; progress depends on verified prerequisites, quality and actual interview needs.

## Evidence legend

- **RESUME-REPORTED:** User's supplied resume describes having used it or performed relevant work; **not independently verified against employer artifacts**.
- **LEARNING-ONLY:** Extra technology proposed for hands-on scenarios and interviews; **never imply this was used at the user's employer without explicit evidence**.
- **OPTIONAL/ALTERNATIVE:** Pick the right one for the scenario, do not require mastery of all equivalent products.
- **INTRODUCED / UNDERSTOOD / PRACTICED:** Three distinct learning states. “Understood” is only self-reported comprehension. Never infer production proficiency from it.

## Year 1 — Internship: build an internal records application (roughly first 200 priority questions)

| Tool / software | Evidence level | New business reason for the tool |
|---|---|---|
| **IntelliJ IDEA** | LEARNING-ONLY preferred hands-on IDE | Open, code, run, debug Java projects; user prefers IntelliJ only, **no Eclipse** |
| Java / JDK / JVM | RESUME-REPORTED Java; JDK version not confirmed | Write and run project-domain code, understand the runtime |
| HTML / CSS / JavaScript | RESUME-REPORTED | Create usable project entry, search and reporting screens |
| Java Servlets / JSP | RESUME-REPORTED | Receive forms and display results on legacy Java web pages |
| Apache Tomcat / servlet container | LEARNING-ONLY named product | Run Servlet/JSP web application and route HTTP requests |
| JDBC | RESUME-REPORTED | Perform parameterized SQL CRUD operations safely |
| MySQL | RESUME-REPORTED | Store project, task, status and QA records |
| MySQL Workbench | LEARNING-ONLY named GUI | Inspect tables, test queries and visualize schemas |
| Git + GitHub | LEARNING-ONLY named collaboration tools until confirmed | Commit changes, push to repo, use feature branches and pull requests |
| Maven | LEARNING-ONLY in this internship-stage sequence | Compile and package a reproducible Java project; build tool used at employer not established |

**Previously explained:** Q001 (business context/Java object), Q002 (POST/Servlet/JDBC INSERT), Q003 (GET/JDBC SELECT/ResultSet/JSP), Q004–Q006 (UPDATE, archive/delete tradeoffs, uniqueness/retries). These introductions have user-confirmed **understanding**, not proven hands-on practice.

**Currently active:** Q007 — validation at form, backend and database layers. Do not reintroduce earlier questions as new lessons.

## Year 2 — Backend developer: build and test business APIs (roughly next 200)

| Tools / technologies | Evidence level | Why |
|---|---|---|
| Spring Boot / Spring Framework | RESUME-REPORTED | Replace ad hoc web handlers with maintainable endpoints and services |
| REST and HTTP | RESUME-REPORTED | Integrate workflow applications and reporting systems |
| Postman | LEARNING-ONLY named API client | Send GET/POST/PUT/DELETE requests and inspect status/errors |
| Hibernate / JPA | RESUME-REPORTED Hibernate in later role; JPA tooling not verified | Map database records to persistent Java entities |
| Maven | LEARNING-ONLY named build tool | Dependencies, lifecycle, test and packaging |
| JUnit / Mockito | LEARNING-ONLY specific test frameworks | Automate unit tests and verify failures before shipping |
| SQL EXPLAIN / database indexes | RESUME-REPORTED SQL/index optimization; exact tooling not verified | Diagnose slow queries with evidence |
| Linux terminal, shell scripts | RESUME-REPORTED Linux support; particular shell utilities unverified | Debug deployment and service issues |
| GitHub pull requests, reviews, issue tracker | LEARNING-ONLY workflows | Collaborate safely on features |

## Year 3 — Backend → Full Stack (roughly next 200)

| Tools / technologies | Evidence level | Why |
|---|---|---|
| React, JavaScript, HTML/CSS | RESUME-REPORTED | Show QA and processing status in operational dashboards |
| Browser DevTools | LEARNING-ONLY named tooling | Trace failing browser-to-API calls |
| Swagger UI / OpenAPI | LEARNING-ONLY named tooling | Document and try endpoints collaboratively |
| Python / SQL utilities | RESUME-REPORTED | Automate validation, reconciliation and reporting |
| Microsoft Excel | RESUME-REPORTED reporting output | Generate and validate operations reports |
| Jira | LEARNING-ONLY named product; Agile reported | Move issue from backlog to code review and delivery |
| QGIS / PostGIS / GeoServer | OPTIONAL/ALTERNATIVE educational GIS tools | Understand coordinates, spatial records and mapping integrations; specific tools **not confirmed** in resume |
| pgAdmin / SQL Server Management Studio | OPTIONAL/ALTERNATIVE database clients | Compare SQL/database tooling only when the scenario calls for it |

## Year 4 — Integration, collaboration and cloud fundamentals (roughly next 200)

| Tools / technologies | Evidence level | Why |
|---|---|---|
| GitHub Actions or Jenkins | LEARNING-ONLY; no employer CI platform confirmed | Automate build, test and safe deployment |
| Docker | LEARNING-ONLY | Package a Spring Boot service for consistent environments |
| AWS or Microsoft Azure | LEARNING-ONLY; **no cloud provider confirmed from resume** | Move a working app from local machine to a secured hosted environment |
| Redis | LEARNING-ONLY | Cache high-frequency project status lookups when measured need exists |
| Kafka or RabbitMQ | OPTIONAL/ALTERNATIVE LEARNING-ONLY | Decouple batch processing events from API operations |
| JWT / OAuth 2.0 / Spring Security | LEARNING-ONLY implementation details; role-based portals RESUME-REPORTED | Explain authentication, authorization and access policies |
| GitHub branches, pull requests, merge/conflict resolution | LEARNING-ONLY workflow | Coordinate releases between developers and teams |

## Year 5 — Architecture, production and delivery (roughly final 200)

| Tools / technologies | Evidence level | Why |
|---|---|---|
| Kubernetes | LEARNING-ONLY | Orchestrate several containers when scale and operations justify it |
| Prometheus + Grafana | LEARNING-ONLY | Collect metrics, inspect latency and error trends |
| ELK/OpenSearch stack | OPTIONAL/ALTERNATIVE LEARNING-ONLY | Investigate service logs across a distributed workflow |
| Cloud monitoring / IAM / secret management | LEARNING-ONLY | Protect credentials, monitor releases and investigate incidents |
| Java profiling, thread dumps and SQL plans | RESUME-REPORTED performance/debugging work; exact profiling tools not verified | Find slow API and JVM/database bottlenecks with evidence |
| Distributed transaction design, Outbox / Saga | LEARNING-ONLY architecture examples | Handle business workflow spanning multiple services and messages |
| GitHub Actions/Jenkins release stages, CI/CD | LEARNING-ONLY | Demonstrate reproducible tests, rollback and post-deploy checks |
| Agile planning / retrospectives / incident runbooks | RESUME-REPORTED Agile and production support; individual applications unspecified | Collaborate, triage, hand over and improve reliability |

## Cloud practical route — go deep on one platform first

Choose **one primary provider for hands-on practice when a cloud scenario arrives**, then compare the equivalent service on the other:

| Scenario | AWS example | Azure example |
|---|---|---|
| Run Java API | EC2 / ECS / App Runner | App Service / Azure Container Apps |
| Managed MySQL | Amazon RDS for MySQL | Azure Database for MySQL |
| Store generated reports | S3 | Blob Storage |
| Permissions | IAM | Microsoft Entra ID / Azure RBAC |
| Store secrets | Secrets Manager | Key Vault |
| Logs and metrics | CloudWatch | Azure Monitor |
| Network controls | VPC/security groups | VNet/network security groups |

Teach subscriptions, budgets, identity and least privilege *before* deploying anything. Avoid surprise costs: simulated walkthroughs or local-first alternatives are valid. Do not claim cloud deployment in a past job without evidence.

## Real end-to-end tool experience: example story

1. **Jira** — read a requirement: “QA needs to filter failed mapping projects.”
2. **IntelliJ** — implement the Java/Spring Boot endpoint in a branch.
3. **MySQL Workbench** — examine project data/query plans.
4. **Postman** — test valid input, invalid input and missing records.
5. **JUnit / Mockito** — add regression tests.
6. **Git and GitHub** — commit and open a pull request.
7. **GitHub Actions/Jenkins** — run build and tests.
8. **Docker** — package the service when deployment demands it.
9. **AWS/Azure** — deploy to a practice environment using suitable security controls.
10. **Monitoring/logging** — detect and investigate a failed query or slow request.

Every item gets a *why → task → tool use → failure → fix → interview-ready explanation → test your understanding*. Not every tool is required in every scenario, and the exact software mix will evolve with actual project evidence.

## Creation instructions for every software/tool lesson

**This file answers *what software and why*. The mandatory [LESSON_CREATION_PLAYBOOK.md](LESSON_CREATION_PLAYBOOK.md) answers *how to create the actual lesson*, including Day 1 dialogue tone, the user's favorite transaction analogy, one business problem and failure at a time, realistic interface/command snippets, a quiz, interview answer and separate confirmation tracking. Read both before teaching a tool.** Use the [scenario drafting template](scenarios/LESSON_TEMPLATE.md) and keep the latest [mentor queue](MENTOR_TEACHING_CHECKLIST.md) as the source of truth for the next distinct question.

## Continuity rules

- This file is **planning-only**. It does not tick Q001–Q1000 or change current Day 7 status.
- Before selecting an actual lesson, read [MENTOR_TEACHING_CHECKLIST.md](MENTOR_TEACHING_CHECKLIST.md) and [KNOWLEDGE_STATE.json](KNOWLEDGE_STATE.json).
- Map newly introduced tools to a distinct business need and assign **one unique anchor question ID**. Record whether the user merely saw a tool, understood the concept, or actually practised with it; do not conflate those states.
- Continue the existing Q007 before advancing the main story; optional tool detours do not automatically complete it.
- User has indicated IntelliJ as the only preferred Java IDE. Do **not** substitute Eclipse or STS in the main hands-on track.
- **No employer technology claims without evidence.** Preserve hypothetical cloud, CI/CD, Kafka and Kubernetes uses as educational until user confirms them.
