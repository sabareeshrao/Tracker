# Mentor-Only Teaching Checklist — Anti-Repetition & Next-Step Ledger

> **Purpose:** This is the mentor's **separate continuity checklist**, not the student's experience checklist or the independent 2,719-question master checklist. Read this file at the start of **every** Experience World session. Treat [KNOWLEDGE_STATE.json](KNOWLEDGE_STATE.json) as the canonical machine-readable status and [EXPERIENCE_CHECKLIST.md](EXPERIENCE_CHECKLIST.md) as the student-facing career-year record. This checklist provides the *instructional decision*: **what not to repeat, what is incomplete, and exactly what to teach next**.

**Last reviewed:** 2026-10-03  
**Current simulated year:** **Year 1 — June 2018–May 2019 (Internship → Backend)**  
**Experience World questions:** **6 / 1,000 explicitly understood**; **7 / 1,000 introduced**  
**One active lesson:** **Scenario 007 / Day 7 / Q007 — Validate project data in browser, Java and MySQL**  
**Root 2,719-question interview bank:** Independent; do not tick anything there based merely on understanding an Experience World scenario.

## 1. Mentor's quick-resume card (READ FIRST)

| Check | Recorded state | Mentor action |
|---|---|---|
| **Last confirmed scenario** | **006 / Day 6 / Q006** | Do not reteach Q001–Q006 as new lessons |
| **Day 1 question** | What business problem did a geospatial workflow application solve? | Build on this, only reference in 1–2 sentences when necessary |
| **Day 1 learned themes** | Centralized GIS/QA/operations status; application purpose; basic Project class; in-memory Java objects versus database persistence; frontend → backend → database overview; required-name validation | Assume these were **self-reported understood**, not performance-tested |
| **Evidence and wording** | User explicitly said **"I understood"**; full original [Day 1 transcript](scenarios/001-day-1-verbatim.txt) is archived | Don't recreate/rewrite or replace it |
| **Current unfinished scenario** | **007 / Day 7 / Q007** | New challenge: coordinated validation across user form, Servlet and MySQL |
| **Day 2 material already introduced** | The **complete rewritten Day 2** was explicitly understood and [archived without rewriting](scenarios/002-day-2-verbatim.txt): HTML POST, doPost, request parameters, validation/400, JDBC prepared INSERT, resource closing, redirect and database-failure case | **Never re-teach as a new question.** Only briefly refer back to contrast GET versus POST or SELECT versus INSERT |
| **Day 3 understood content** | [Verbatim Q003](scenarios/003-day-3-verbatim.txt): GET, doGet, validated id, PreparedStatement SELECT, ResultSet mapping, JSP forwarding/output escaping, 400 and 404 | User explicitly understood; build only on it when teaching UPDATE |
| **Next after completing Day 7** | **008 / Day 8 / Q008: Operational reporting via SQL filters, joins and aggregation** | Teach after Day 7 user confirmation |

## 2. What I must not teach as if new (anti-loop memory)

- [x] **Q001 — Why a geospatial workflow tracking system exists.** Confirmed *understood* 2026-10-02. Distinguish illustrative "three Excel sheets" from any verified claim about user's employer. Don't reuse that same scenario as the headline of another lesson.
- [x] **Q001 — Object in JVM memory versus data saved in a database.** Covered at beginner level within Q001. A **new** lesson about SQL durability, transaction isolation, or ORM is allowed **only with a new question and new reasoning**, not the same one-paragraph explanation.
- [x] **Q001 — Basic required-field validation as a business concept.** Covered at beginner level. Later in Q002 it is fine to teach **how** validation executes inside an HTTP handler and how errors return to the browser; do not repeat **what** validation means as a whole lesson.
- [x] **Q002 — HTML/JSP → HTTP POST → Servlet → JDBC → MySQL.** **UNDERSTOOD (self-reported, 2026-10-02).** Full rewritten Day 2 covered `doPost`, `getParameter`, validation/400, parameterized INSERT/`executeUpdate`, SQL injection, resource cleanup, success redirect, and MySQL error. [Original transcript](scenarios/002-day-2-verbatim.txt). Do not repeat as a new lesson.
- [x] **Q003 — GET /projects?id=101 → doGet → SELECT → ResultSet → JSP.** **UNDERSTOOD (self-reported, 2026-10-02).** Original [Day 3 transcript](scenarios/003-day-3-verbatim.txt) archived. Do not repeat as a new question.
- [x] **Q004 — Change an existing project status using parameterized UPDATE.** **UNDERSTOOD (self-reported 2026-10-03).** [Verbatim Day 4 source](scenarios/004-day-4-verbatim.txt): WHERE clause, allowlisted status, executeUpdate row count, missing record, safe redirect, DB failure. Do not repeat as a new question.
- [x] **Q005 — Decide DELETE vs soft archive for a project.** **UNDERSTOOD (self-reported 2026-10-03).** [Original Day 5 dialogue](scenarios/005-day-5-verbatim.txt) covers foreign key RESTRICT/CASCADE, soft archive flag, active/historical filtering, permissions and HTTP error distinctions. Do not reteach as a new question.
- [x] **Q006 — Duplicate project codes and repeated Save requests.** **UNDERSTOOD (self-reported 2026-10-03).** [Verbatim Day 6 archive](scenarios/006-day-6-verbatim.txt): surrogate ID vs business code, concurrent race, UNIQUE DB constraint, 1062 conflict and retry/idempotency intro. Do not reteach as new material.
- [ ] **Q007 — Validation at UI, Java backend and MySQL layers.** **IN PROGRESS.** New task: corrupted mapping intake field values, bypassed browser checks, reliable server rules, DB CHECK/NOT NULL constraints, field-specific error responses; no duplicate of basic Day 1 required-name or Day 6 UNIQUE explanations.

**Crucial:** checked items above mean *teaching material that need not be repeated*, not production proficiency. Revisit an item **only when the user requests review, demonstrates a missing prerequisite, or needs a clearly different production/implementation depth.** Label the revisit as a deliberate follow-up, not a brand-new question.

## 3. Unique scenario queue (numbers reserved; not claimed taught)

| Experience question ID | Career year | New business challenge / interview anchor | Teach *new* material; avoid duplicating Q001 | State |
|---|---|---|---|---|
| Q001 / S001 | Year 1 | Why does a geospatial workflow tracking system exist? | Business need, Java object, why database, basic validation | **✅ UNDERSTOOD** |
| Q002 / S002 | Year 1 | Employee clicks **Save Project**: what happens through HTML/JSP, Servlet, JDBC, and MySQL? | POST, doPost, request parameters, PreparedStatement INSERT, validation, success/failure | **✅ UNDERSTOOD** |
| Q003 / S003 | Year 1 | Employee opens an existing project: how does **Read Project** work? | GET, doGet, query parameter, SELECT, ResultSet, response/JSP rendering | **✅ UNDERSTOOD** |
| Q004 / S004 | Year 1 | Employee edits a project: how is an **Update** different from Create? | UPDATE, affected row count, missing ID, input validation | **✅ UNDERSTOOD** |
| Q005 / S005 | Year 1 | Employee removes or archives a project: how do we design **Delete** safely? | DELETE vs soft-delete decision, authorization idea, foreign keys | **✅ UNDERSTOOD** |
| Q006 / S006 | Year 1 | Two requests use the same project ID: what happens to **duplicates**? | unique key, detecting collisions, SQL constraints, meaningful error response | **✅ UNDERSTOOD** |
| Q007 / S007 | Year 1 | A form includes missing/invalid fields: where should **validation** run? | frontend vs backend validation, error messages, consistency; builds on Q001 | **🟠 IN PROGRESS** |
| Q008 / S008 | Year 1 | A manager needs a simple project report: how do **SQL filters, joins and aggregates** help? | SELECT/JOIN/GROUP BY, Excel export only if useful | ☐ QUEUED |
| Q009 / S009 | Year 1 | A SQL operation fails halfway: how do local **transactions and rollback** work? | JDBC transaction boundaries, commit/rollback, error path | ☐ QUEUED |
| Q010 / S010 | Year 1 | A basic app becomes harder to maintain: why separate **Controller/Service/DAO** responsibilities? | separation of concerns, same domain, refactor not duplicate intro | ☐ QUEUED |
| Q011+ | Year 1→Year 2 | Introduce Spring Boot and APIs when a real requirement exposes the limitation of earlier approach | Assign stable fresh ID **before** teaching, after reading this queue | ☐ PLANNED, unassigned |
| Later years | Year 2→Year 5 + final months | REST, Hibernate, batch validation, React, microservices, performance, production, Agile, defense | Follow [WORLD_MAP.md](WORLD_MAP.md); every scenario must have distinct new objective | ☐ PLANNED |

**The "1,000" target is a planning goal, not 1,000 prewritten questions.** We reserve stable IDs as actual distinct questions are selected. Never inflate the counter by rewording an already covered question or by a side question that is only a clarification.

**Tools plan:** [TOOLS_AND_SOFTWARE_ROADMAP.md](TOOLS_AND_SOFTWARE_ROADMAP.md). When a new tool is needed, teach it because a business requirement demands it; do not present proposed AWS/Azure, Kafka, Jenkins or Kubernetes practice as actual employer usage. This link does not change current Q007 in progress or the 6/1,000 completion count.

## 4. Non-negotiable mentor execution protocol

**REQUIRED LESSON AUTHORING GATE:** Read [LESSON_CREATION_PLAYBOOK.md](LESSON_CREATION_PLAYBOOK.md) and [scenarios/LESSON_TEMPLATE.md](scenarios/LESSON_TEMPLATE.md) before creating any Day. The playbook defines the Day 1/revised Day 2 conversation depth, how GitHub/cloud/DevOps software earns an introduction, the mandatory three-question understanding test, and how to archive verbatim upon explicit confirmation. It is not sufficient to read the tool list alone. Current main task remains Q007; merely updating instructions never ticks it.


1. **Before every new teaching answer:** Fetch [this checklist](MENTOR_TEACHING_CHECKLIST.md), [KNOWLEDGE_STATE.json](KNOWLEDGE_STATE.json), [EXPERIENCE_CHECKLIST.md](EXPERIENCE_CHECKLIST.md), and the most recent relevant lesson archive from GitHub. Use the repository's current default branch, not old chat memory. If files disagree, reconcile by documented explicit confirmations and the archived source; do not silently skip or duplicate lessons.
2. **Check explicit next pointer first.** If the active scenario is IN PROGRESS, finish *that* scenario, not the next one. If the user requests another topic, honor it without declaring the unfinished one understood; record the detour and resume its pointer afterward.
3. **Deduplicate against this ledger** by comparing each proposed new question's business action, concept, evidence, and outcome with checked items. If same outcome and only synonyms differ, reject the duplicate and select a new requirement or deeper, clearly named follow-up.
4. **New scenario = new need.** Start with a concrete business problem not yet solved; an experienced developer mentor explains to a student who just completed college Java. Follow the user-loved *simple Saga/Outbox explanation* tone: short dialogue, failure example, minimal accurate code, interview-ready answer, one-line memory chain.
5. **Don't treat explanation as completion.** Mark **PRESENTED** when taught; mark **UNDERSTOOD** only after the user explicitly says "Understood" or confirms completion. Learning milestone is self-reported understanding, **not** proven professional experience, hands-on practice or verified interview-readiness.
6. **When the user confirms understanding:** Push the **full original day conversation verbatim**, without paraphrasing, into numbered `scenarios/NNN-day-N-verbatim.txt` (plus original source Markdown). Then update **(a)** canonical `KNOWLEDGE_STATE.json`, **(b)** this mentor checklist and next pointer, **(c)** `EXPERIENCE_CHECKLIST.md` and relevant `WORLD_MAP.md` status. Verify successful writes and counts; never claim success if a write failed.
7. **Update counters carefully:** `questionsPresented` increments **once** per unique scenario, `questionsConfirmedCompleted` increments **once** per distinct explicitly confirmed scenario. `completedScenarioIds` must contain unique IDs. Don't tick unrelated root `QUESTION_CHECKLIST.md` or `STUDY_PROGRESS.json` without separate user request.
8. **Year progression:** Keep teaching in **Year 1 (June 2018–May 2019)** until year-1 topics are sufficiently covered; move on only when the selected curriculum reaches the next year, with a concrete explanation. The year is *simulated learning chronology* and does not make new factual claims about employer projects.
9. **No invented work history:** Resume is USER-REPORTED, checked GitHub code is VERIFIED, exercises are ILLUSTRATIVE, and unspecified company details remain UNKNOWN. Do not add exact service names, outage stories, messaging technology or performance evidence that the user did not supply.
10. **Avoid public secrets:** This repository is public. Do not store actual internal data, credentials, private colleague/client details, or unverifiable personal incidents in this checklist.
11. **On branching/new chat:** Ask the repo for the status, then say something like "Last understood: Q001. Current: Q002 (in progress). I’ll continue with the Servlet's POST handling, without repeating Day 1." Never claim to recall source code without reading it.

## 5. Single-sentence next instruction (update this after each confirmation)

**NOW: Teach Q007 / Day 7 / Year 1. Operations imports project data from a web form and external Excel/CSV where project codes, due dates and geospatial CRS identifiers can be invalid. Explain three distinct responsibilities: browser fast user feedback; Servlet authoritative business/semantic validation; MySQL NOT NULL, length/CHECK and FOREIGN KEY constraints as last defense. Show a direct request bypassing HTML validation, structured field-specific 400 messages, domain-specific due date/CRS rule and one useful servlet example, then test understanding. Never confuse database integrity enforcement with authorization. No retelling Day 1 basic blank names or Q006 duplicate-code prevention beyond brief continuity. Await Understood before marking Q007; Q008 reports next.**

## 6. Change record

- **2026-10-03:** Q006 explicitly understood and complete original Day 6 archived; Q007 validation layers opened as next unique question. 6 understood, 7 presented, Year 1 unchanged. Independent root question bank unaffected.

- **2026-10-03:** Day 5 explicitly understood and archived verbatim; Day 6/Q006 duplicates and retries now active. Five understood and six introduced, Year 1 remains current. Root question bank unchanged.

- **2026-10-03:** Q004 explicitly understood and verbatim [Day 4 archive](scenarios/004-day-4-verbatim.txt) added; Q005 safely delete/archive introduced. Four understood, five introduced; root question bank untouched.

- **2026-10-02:** Q003 understood, archived verbatim; Q004 now active. Counts: 3 confirmed of 1,000 and 4 presented. Don't reteach GET/SELECT as new material.

- **2026-10-02:** Day 2/Q002 confirmed understood explicitly and its original full lesson archived; Q003 opened as a distinct GET/SELECT task, counters now 2 understood / 3 presented. Do not reteach Q002. Root question bank unchanged.
- **2026-10-02:** Initial mentor-only ledger created. Q001 marked self-reported understood from user's explicit confirmation; Q002 remains introduced/in progress. Q003 reserved as a distinct read-project scenario. Existing separate root question bank untouched.
