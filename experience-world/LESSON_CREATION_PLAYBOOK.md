# Experience World — Mandatory Lesson Creation Playbook

**Status:** REQUIRED for every new scenario, whether written in this conversation, in a new branch of chat, or by another coding/lesson agent.  
**Last instruction update:** 2026-10-04  
**Read alongside:** [Mentor anti-repeat checklist](MENTOR_TEACHING_CHECKLIST.md) · [Canonical knowledge state](KNOWLEDGE_STATE.json) · [Student career-year checklist](EXPERIENCE_CHECKLIST.md) · [Software/tools roadmap](TOOLS_AND_SOFTWARE_ROADMAP.md) · [Career world map](WORLD_MAP.md).  
**Reference for tone and depth:** [Original Day 1](scenarios/001-day-1-verbatim.txt), [rewritten original Day 2](scenarios/002-day-2-verbatim.txt), and [Day 6](scenarios/006-day-6-verbatim.txt).

> **One-sentence creative direction:** Write each day like a patient five-year Java developer helping a fresh graduate complete an actual company task from scratch, discovering the need for each new concept/tool when the task breaks—never like a glossary or a lecture.

## 0. Current position (illustrative snapshot; re-read live JSON before teaching)

- **Simulated career:** Year 1 (June 2018–May 2019, internship → backend)
- **Last explicitly understood:** Q006 / Day 6 (self-reported understanding, not practical proficiency)
- **Currently active:** Q007 / Day 7 — validation across browser, backend and MySQL. **Not completed.**
- **Next queued:** Q008 / Day 8 — operational reporting using SQL filters/joins/aggregates.
- **Counts:** 6 / 1,000 confirmed understood; 7 / 1,000 introduced.
- **No tool-only planning request, like adding this document, advances these counts.**

**Do not trust this static snapshot in a later chat. Fetch the live status from `KNOWLEDGE_STATE.json` and the mentor ledger first.**

## 1. Mandatory read/decision order BEFORE writing a lesson

1. Fetch **`MENTOR_TEACHING_CHECKLIST.md`** to see which question is next and which concepts must not be repeated as brand-new material.
2. Fetch **`KNOWLEDGE_STATE.json`** for the definitive active scenario, question/day ID, completion count, current year, evidence level and last archive.
3. Fetch **`EXPERIENCE_CHECKLIST.md`** and **`WORLD_MAP.md`** for career stage and pending distinct skills.
4. Fetch **`TOOLS_AND_SOFTWARE_ROADMAP.md`** to see which software belongs to the current stage, whether it is user-reported or **learning-only**, and why the next business requirement needs it.
5. Read the latest relevant **verbatim** archived scenario, and the original Day 1 if you need a tone calibration. Do **not** replace its content with a paraphrase.
6. If the active scenario is already **IN PROGRESS**, continue the **same** question, honoring the user's latest feedback. If the user explicitly changes the topic, allow the detour and keep the original question unfinished unless the user separately confirms completion.
7. For a new scenario, reject duplicate topics or cosmetic rewordings. Identify its **new business action**, **new technical obstacle**, **new concept** and **new tool skill**, if any. Reserve exactly one new ID before presenting it.

### One-question uniqueness gate

Before assigning Q00N, ask:
- What can the employee/team do by the end of this lesson that they could *not* do by the end of Q001–Q00(N-1)?
- Is the failure/recovery case substantially different from what we already taught?
- Am I explaining the same Java concept at a **new, genuinely deeper** implementation level? If yes, label it as an advanced follow-up; don't silently count a repeat as a new question.
- Are there prerequisites the student has not understood? Explain those first **within the current scenario** or explicitly reserve a new prerequisite scenario when materially needed.

## 2. Five-year and 1,000-lesson planning bands

| Teaching career | Tentative day/question band | Practical engineering progression | Tools introduced **when needed** |
|---|---|---|---|
| **Year 1 — Intern → Junior Backend** | **1–200** | Java objects, HTML/JSP/Servlet, JDBC/MySQL CRUD, input checks, SQL reports, team entry, Git basics | IntelliJ IDEA (only main Java IDE), JDK, Tomcat as an educational runtime, MySQL Workbench, Git/GitHub, Maven when applicable |
| **Year 2 — Backend** | **201–400** | Spring Boot REST APIs, service boundaries, SQL/Hibernate, tests, debugging, collaborative reviews | Spring Boot, Postman, Maven, JUnit, Mockito, Linux terminal, pull requests |
| **Year 3 — Backend → Full Stack** | **401–600** | Batch/QA flows, React dashboards, API integration, operational reporting | React/DevTools, Swagger/OpenAPI, Python, SQL tools, Jira, relevant GIS tools |
| **Year 4 — Full Stack / Integration** | **601–800** | Reliable deliveries, several services, security, events, caching and deployment | GitHub Actions/Jenkins, Docker, Redis, Kafka/RabbitMQ when needed, **AWS/Azure learning** |
| **Year 5 — Experienced / Production** | **801–1000** | Architecture choices, latency/failures, operations, cloud scaling, production incidents and interview defense | Kubernetes, cloud monitoring/IAM, Prometheus/Grafana, logging, JVM/SQL profiling, release pipelines |

**These bands are a *target distribution*, not a promise of exactly 200 prewritten days per year.** Advance the simulated career year when appropriate skills and scenarios are covered, not merely because a number is reached; a real transition can differ from the illustrative band. Account for the user's reported final months in 2023 within the later career stage. The main learning counter remains **1,000 distinct anchor questions**, with one main anchor per Day by default. A clarification is **not** a new question.

## 3. Every new software tool MUST enter through a business problem

**Never** drop "now learn Azure/Jenkins/Kafka" into a lesson without establishing why a developer needs it.

Example tool-discovery dialogues:
- **Git/GitHub** — *Student:* "My feature runs on my laptop, but how will another developer review it?" *Mentor:* "We need a shared source history, branches and a pull request."
- **MySQL Workbench** — "Can we inspect the actual test table before writing a query?"
- **Postman** — "The browser can't easily reproduce this bad REST request; how can we send it ourselves?"
- **JUnit/Mockito** — "What prevents this fix from breaking the next time we change the method?"
- **Jira** — "How does the team know who owns this bug and whether it was accepted?"
- **GitHub Actions/Jenkins** — "What if somebody merges code without running the tests?"
- **Docker** — "Why does it run on the developer's machine but not on a deployment machine?"
- **AWS/Azure** — "Our local app works. How do we host a **practice** service securely and understand identity, networking, secrets and ongoing cost?"
- **Redis** — "We measured excessive repeated reads. Would a cache improve this, and how do we keep it fresh?"
- **Kafka/outbox** — "The database update succeeded but another system never received the event; what recovery guarantees do we need?"
- **Kubernetes** — "We now operate several containers. Why do scheduling, health checks and rollout controls matter?"
- **Monitoring/logs** — "The dashboard is slow only in production. What measurement tells us where the time went?"

### Tool-use fidelity checklist (include as appropriate)

For any tool introduced:
1. Say **what it is**, in one or two plain-English sentences **after** the student asks for the missing capability.
2. State **where the user opens it** (e.g. IntelliJ project, browser, terminal, CLI, GitHub web UI) and what exactly is typed/clicked or executed.
3. State **why this tool rather than a simpler existing option**. Name important trade-offs when relevant; don't falsely imply every team must use a specific product.
4. Trace the **input → action → observed result**, with a small accurate command, Java snippet, configuration, or textual screen when the scenario needs one.
5. Include **one realistic failure**, observable symptom and first diagnostic/fix step.
6. State what the student should be able to **explain or demonstrate** after the lesson. If no environment was actually used, say **conceptual example**; don't claim code was run, deployed, committed or tested.
7. Separate **tool understanding** from **hands-on practice** and **interview readiness** in the tracker. Merely mentioning GitHub or AWS is **not** mastery.

**IDE rule:** Use **IntelliJ IDEA** for Java walkthroughs; do not swap in Eclipse/STS. For CLI and cloud subjects, terminal/browser interfaces are allowed where appropriate.

**Cloud rule:** When cloud first becomes necessary, cover account/subscription and billing guardrails, IAM/identity, regions, resource isolation, networking, secrets and safe cleanup. Start with **one primary practice provider (AWS *or* Azure)** and map equivalent services on the other. Favor local/simulated walkthroughs if an actual account or spending approval is unavailable. Do not create paid cloud resources without user instruction and the required tools.

## 4. Required Day structure — preserve the Day 1 / rewritten Day 2 voice

The lesson should feel like a *continuous story*, not a list of definitions. Use the sequence flexibly with enough depth to genuinely understand the task:

**Opening:** `# 🐼 Day N — <concrete, interesting business problem>` and `YEAR X · SCENARIO NNN`; one distinct interview question; mentor (5-year developer) and student (new graduate). Briefly connect **one sentence** to yesterday without retelling it. Say if the scenario is illustrative.

**Step 1 — A manager/QA/operations request:** The student sees a specific problem, screen, record, defect or stakeholder request. Show the expected business outcome in 2–5 realistic lines or a compact UI demonstration if useful.

**Step 2 — First attempt / misunderstanding:** The student proposes a basic idea; the mentor asks a natural "why?" or introduces a test case where that idea fails. Make the first problem visible with a short failure/success diagram.

**Steps 3–N — Earn each technology:** Introduce **one** Java concept, API, application file or software tool at a time. Explain what it is, *why* it is needed *here*, *where* it fits, and how it connects to the previous step. Use short **Mentor:** and **Student:** turns and simple diagrams instead of wall-to-wall prose. Code should be *small enough to understand* and fit the current stage.

**Implementation/trace:** Follow a single named request or record from screen → request → backend → SQL/services → response or visible effect. Show accurate code only when beneficial; separate intentionally simplified examples from runnable code, mention omitted imports/environment as necessary. Include a concrete output or observation.

**Break it:** One nontrivial failure scenario (invalid input, missing record, duplicate request, network failure, SQL issue, deployment failure etc.), how to observe it, and what the application should actually return or do. Don't pretend something succeeded when it failed.

**Resume connection:** Ground the scenario in the **user-reported** Java/geospatial work without inventing precise employer project names, deployment environments, colleagues, cloud products, incidents or source code. If a hypothetical tool is new, tag it **LEARNING-ONLY**, not as former production experience.

**End:** An accurate interview-ready answer the student can say, a short one-line **memory chain**, and a meaningful **"📘 Day N — Test your understanding"** with **3 short-to-medium questions** about purpose, mechanism and failure. If interactive UI is feasible, allow answers and send them for review. Never hide the entire lesson behind a quiz.

**Progress footer:** Explicit **Year X, Day N, QNNN/1,000 presented, M/1,000 confirmed understood** (where M excludes current Day until confirmation). State next *distinct* question without teaching its answer. Prompt the student to say **"Understood"** when ready.

### Tone checks against the Day 1 reference

- Mentor is warm, practical, patient, conversational and *never patronizing*. Student asks believable novice questions; the mentor does not assume professional background.
- Explanations are detailed *where necessary*, not artificially short. The rewritten Day 2 was preferred over the initial "okayish" Day 2 because it had a complete scenario, implementation, errors, resume bridge, final answer and understanding test.
- Never repeat filler ("Exactly!", "Great question!") every other line; vary dialogue naturally.
- Avoid large unrelated tool inventories inside a day, opaque terms before motivation, textbook-only answers, unsupported company claims or an abrupt jump from a first-year Servlet to a Year-5 Kubernetes deployment.
- The **best single lesson** is one after which the student could **trace the input, justify the choice, explain the failure and answer the anchor interview question**.
- Do not use the word **"teacher"** as the persona. Use **Mentor** and **Student**.

## 5. Question/concept/tool progress: three separate dimensions

| Item | INTRODUCED | UNDERSTOOD | PRACTICED / VERIFIED |
|---|---|---|---|
| Main anchor question Q00N | Day is shown; `questionsPresented` increments once | User explicitly confirms "Understood"; `questionsConfirmedCompleted` increments once | Requires additional evidence; not inferred |
| Concept | Explained during relevant scenario | Only mark self-reported understood on explicit confirmation | Student shows accurate work or meets a separate verification rule |
| Tool (e.g. GitHub, AWS) | Mentioned, opened conceptually or shown in example | Student confirms what it does; note lesson and scope | User performs a real commit/deployment or presents verifiable equivalent evidence |

**Avoid misleading tick marks:** A tool "introduced" in a software list is merely **planned**; it is not a skill exercised. In particular, Day 1–6 do **not** mean every tool in Year 1 has been covered.

**Separate roadmaps:** The root `QUESTION_CHECKLIST.md`, `STUDY_PROGRESS.json` and separate five-question interview batches are **not automatically synchronized** when an Experience World Day is understood. Use the main learning counters for Experience World only.

## 6. On the user's explicit "Understood" — persist and move on

1. Confirm the ID currently in progress in `KNOWLEDGE_STATE.json`. If it is already complete, don't duplicate the increment.
2. Save the **full original assistant lesson verbatim**, including title, dialogue, code, diagrams, UI syntax, interactive checkpoint and original "awaiting understanding" footer, into `scenarios/NNN-day-N-verbatim.txt` and a matching Markdown source. **No rewritten summaries in place of the conversation.**
3. Update `KNOWLEDGE_STATE.json`: append the unique ID to `completedScenarioIds`, store an accurate `confirmedLessons` entry with date, anchor question, concepts/tool-level evidence and exact archive paths, set `questionsConfirmedCompleted` to the actual count, and set the **new** unique question as `activeScenario` with `questionsPresented` advanced **once** only when introduced.
4. Update `MENTOR_TEACHING_CHECKLIST.md`: check precisely Q00N; record what the user self-reported understanding; capture *specific concepts not to repeat*, deferred misconceptions, software tool levels, and exact next teaching instruction.
5. Update `EXPERIENCE_CHECKLIST.md` and `WORLD_MAP.md`: tick the confirmed Day, preserve year progress and queue the new lesson. A year changes only with deliberate career-stage progression.
6. Update `scenarios/README.md` with verbatim archive links; adjust Experience dashboard static fallback *only if needed* (live page already reads `KNOWLEDGE_STATE.json`). Link the new archive so it can be opened.
7. Verify the same completion ID and count appear in both checklists and JSON; read back the archived source, and verify root 2,719-question checklist wasn't inadvertently marked.
8. **Only then** teach the next Day in the same response if the user requested it. On any write error, report which writes succeeded and which remain incomplete; do not claim all tracker files were updated.
9. **If no "Understood":** explain, correct or deepen the same active lesson. Do **not** increment counters or open the next lesson.
10. **If the full original content is not actually retrievable:** never claim exact archival; report the gap instead of manufacturing a verbatim transcript.

## 7. Template and first-class rules for future sessions

- Use the [blank day authoring template](scenarios/LESSON_TEMPLATE.md) as a **checklist for your draft**, not as a rigid text skeleton. The conversational lesson itself should feel natural.
- This file is referenced by the root README and `experience-world/AGENTS.md` so new agents can find it.
- The current Q007 lesson is **still in progress**; this playbook is a rule/documentation update, not the next numbered lesson.

### One-line resume instruction for an agent arriving in a new chat

> "Read `experience-world/LESSON_CREATION_PLAYBOOK.md` → `MENTOR_TEACHING_CHECKLIST.md` → `KNOWLEDGE_STATE.json` → `EXPERIENCE_CHECKLIST.md` → `TOOLS_AND_SOFTWARE_ROADMAP.md` → latest verbatim Day, then **continue the live active question without recapping completed Days**. Draft using the original Day 1/revised Day 2 tone, don't invent production tools, and archive unmodified only after explicit understanding."
