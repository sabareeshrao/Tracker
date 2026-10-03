# Interview Study — Active Batch 001

**Status:** Awaiting your answers / study notes. **Date issued:** 2026-10-02. **Size:** 5 unique questions. **Progress:** 0/5 marked completed.

**Resume source:** [Aerial Topographic Services experience](docs/RESUME_EXPERIENCE.md) (user-reported, public). **Checklist:** [QUESTION_CHECKLIST.md](QUESTION_CHECKLIST.md). **Synced tracker state:** [STUDY_PROGRESS.json](STUDY_PROGRESS.json).

### Your five questions

#### 1. 2537 — Can you please explain your recent project and also introduce yourself?

- **Roadmap set:** 348 — Project Introduction and Self-Introduction ([source](docs/questions/roadmap/ALL_SETS_001_390.md#L7120))
- **Why this is in the batch:** Full Stack Java Developer; 5+ services; 20+ endpoints; geospatial workflows.
- **What to cover:** Self-introduction, your project, role and credible scope
- **Completion:** [ ] Waiting for user confirmation. Never infer completion from resume alone.

#### 2. 1596 — Why do we need separate Controller, Service, Business and Repository Layers in a Spring Boot application?

- **Roadmap set:** 171 — Legacy Spring Application Experience ([source](docs/questions/roadmap/ALL_SETS_001_390.md#L3870))
- **Why this is in the batch:** Spring Boot/Hibernate backend services and reusable validation modules.
- **What to cover:** Controller → Service → business logic → Repository; real use from your services
- **Completion:** [ ] Waiting for user confirmation. Never infer completion from resume alone.

#### 3. 1928 — What REST API best practices do you follow in your project?

- **Roadmap set:** 213 — REST API Design Best Practices ([source](docs/questions/roadmap/ALL_SETS_001_390.md#L4754))
- **Why this is in the batch:** 20+ REST endpoints in full-stack role and 15+ earlier backend endpoints.
- **What to cover:** REST conventions, validation, status codes, errors, versioning and maintainability
- **Completion:** [ ] Waiting for user confirmation. Never infer completion from resume alone.

#### 4. 1531 — Are you comfortable with indexes in SQL?

- **Roadmap set:** 165 — SQL Index Fundamentals ([source](docs/questions/roadmap/ALL_SETS_001_390.md#L3711))
- **Why this is in the batch:** SQL joins, indexing and measured 20–25% performance improvements.
- **What to cover:** Index basics, query plans, read/write costs and measurable optimization
- **Completion:** [ ] Waiting for user confirmation. Never infer completion from resume alone.

#### 5. 347 — How do you handle exceptions in your project?

- **Roadmap set:** 15 — Exception Handling in Projects ([source](docs/questions/roadmap/ALL_SETS_001_390.md#L622))
- **Why this is in the batch:** Production defect resolution and reusable exception-handling components.
- **What to cover:** Checked vs unchecked, custom exceptions, global API errors, logging
- **Completion:** [ ] Waiting for user confirmation. Never infer completion from resume alone.

### How study updates work

1. User pastes what they studied and/or explicitly identifies finished question IDs in chat.
2. Assistant matches demonstrated keywords to the topic taxonomy in `app.js`, asks only if an essential ambiguity prevents a match, and saves a concise evidence summary in `STUDY_LOG.md` (create when first needed). Do not claim competencies or employer projects unsupported by the user.
3. Concepts mentioned and genuinely understood: raise to **Read (25%)** or **Notes captured (50%)** when a substantive explanation is supplied. **Practiced (75%)** requires hands-on practice or equivalent evidence; **Interview ready (100%)** requires user confirmation of readiness/rehearsal. Do not promote every related concept indiscriminately.
4. When the user says a listed question is finished, update `QUESTION_CHECKLIST.md` to checked and set its unique Q-id to 3 (interview ready) in `STUDY_PROGRESS.json` **only if the user explicitly claims interview readiness**; otherwise mark the completed question 2 (practiced) or 1 (read) as appropriate. The Markdown checkbox means their declared study of the question is finished; it does not automatically imply 100% concept mastery.
5. Update `STUDY_PROGRESS.json` in the same GitHub repo so the website can read it. Maintain `activeBatch` and `batches` accurately. The assistant updates GitHub from chat; the HTML page is not permitted to write back to GitHub.
6. Once all five are confirmed complete, issue the next five from the original 2,719 unique questions. Prioritize resume relevance, fundamentals, then deeper implementation/design and incidents; avoid semantic near-duplicates until later. Never repeat a checked Q-id. Preserve source set/part/source references.

### Scheduling rules

- Batches of **exactly five** unique questions unless the user changes the batch size.
- Prefer questions relevant to the user's actual experience in Java, Spring Boot, REST, SQL, React, GIS, incident handling and Agile. Mix core Java, project discussion, architecture, databases, and practical problems as appropriate.
- Keep stable Q-IDs; deduped identical wording is one checklist item, regardless of source set count.
- Do **not** automatically claim any of the 85 historically completed source sets represent this user's personal knowledge.
- The repository is **public**. Avoid publishing anything beyond experience and study material the user asks to save.
