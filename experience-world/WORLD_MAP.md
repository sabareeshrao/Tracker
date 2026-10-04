# Five-Year Experience World — Learning Map

This is a **teaching roadmap**, not a declaration that the user used every listed technology in production. Each topic can have additional sub-scenarios as required.

| World | Period or theme | Business scenario starting point | Technical connections | Status |
|---|---|---|---|---|
| 0 | Ground zero | What does an aerial mapping company's Java application do, and who uses it? | business terms, GIS outputs, projects, QA, workflows | completed — Scenario 001, understood 2026-10-02 |
| 1 | Internship (2018) | An operations user submits a new project through a form | Java object, HTTP, JSP/Servlet, JDBC, MySQL, CRUD, validation | in progress — Scenario 007 (Days 1–6 understood; Day 7/S007 introduced 2026-10-03) |
| 2 | Backend (2018–2020) | Build a project-status endpoint for the QA/operations teams | Controller, Service, Repository, Spring Boot, SQL, errors, testing | queued |
| 3 | Backend (2018–2020) | Validate and reconcile a batch of incoming records | Collections, duplicates, exception handling, SQL, automation, batches | queued |
| 4 | Full Stack (2021–2023) | Show project statuses in a dashboard | React, REST integration, service APIs, Hibernate, pagination | queued |
| 5 | Full Stack (2021–2023) | Track QA exceptions across teams | domain rules, database models, role-based access, reporting | queued |
| 6 | Architecture | Break a workflow into services *where this reflects actual work* | service boundaries, API design, consistency, integration tradeoffs | queued |
| 7 | Production | Investigate a slow or failing workflow | logs, reproducibility, SQL query plans, indexes, metrics, fixes | queued |
| 8 | Delivery | Ship and support a change | Git, Agile, testing, deployment, monitoring, incident handling | queued |
| 9 | Interview defense | Explain a project and answer increasingly deep follow-ups | architecture diagrams, STAR examples, evidence and uncertainty | queued |

**Tool-by-year companion:** [TOOLS_AND_SOFTWARE_ROADMAP.md](TOOLS_AND_SOFTWARE_ROADMAP.md) explains when Git/GitHub, Postman, CI/CD, AWS/Azure cloud, Docker, Kubernetes, monitoring and other software enter the practical storyline. These are learning plans, not claims about employer tools.

**Mandatory lesson-generation protocol:** [LESSON_CREATION_PLAYBOOK.md](LESSON_CREATION_PLAYBOOK.md), applied after checking live mentor queue and knowledge state. [Lesson skeleton](scenarios/LESSON_TEMPLATE.md). The five-year software roadmap is **not** a script to introduce all tools at once; introduce software only to solve a new business need, state whether its use is user-reported or learning-only, and retain the previous lesson's grounding and comprehension check.

## Selection rules
- **Resume from the active scenario in [KNOWLEDGE_STATE.json](KNOWLEDGE_STATE.json) and [MENTOR_TEACHING_CHECKLIST.md](MENTOR_TEACHING_CHECKLIST.md); do not default to Scenario 001 after it is completed.** As of 2026-10-03, Q001–Q006 are understood and Q007 is in progress.
- Expand from the student's questions and the last confirmed concepts; choose a missing prerequisite if the next scenario relies on it.
- Avoid repeating previously confirmed explanations; read the mentor anti-repeat queue before selecting a new question. A revisit requires explicit student request, demonstrated prerequisite gap or genuinely deeper new business use case, not a paraphrase.
- Do not assign specific invented microservice names, Kafka, cloud providers, containers, or deployment pipelines to the user's prior role.
- Distinguish an educational example from the original company's implementation.

## Definition of a completed scenario
- The user confirms comprehension.
- The scenario transcript/knowledge summary is saved in a numbered Markdown file in `scenarios/`.
- `KNOWLEDGE_STATE.json` records comprehension evidence and the next scenario.
- Any unresolved questions stay open and guide the next lesson.
