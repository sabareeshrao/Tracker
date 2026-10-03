# Experience World — Career-Year Checklist

**Source of truth:** [KNOWLEDGE_STATE.json](KNOWLEDGE_STATE.json)  
**Mentor's separate teaching queue:** [MENTOR_TEACHING_CHECKLIST.md](MENTOR_TEACHING_CHECKLIST.md) — what has been explained, what must not be repeated, and the next unique interview scenario.  
**View on the website:** [Experience tracker](../experience.html)  
**Priority study target:** 1,000 scenario-led interview questions, **5 understood / 1,000**, with 6 introduced as of 2026-10-02.  
**Current simulated career year:** **Year 1 — June 2018 to May 2019 (internship → backend)**.  
**Actual resume timeline:** June 2018–November 2023. Year labels here represent the *teaching timeline*, not additional employment or unverified professional milestones.

> ✅ only means the student explicitly said **Understood**. It does not imply hands-on mastery or verification of an interview answer. The main Tracker's 2,719-question checklist is a separate dataset and remains unchanged.

## Foundation / Year 1 — June 2018–May 2019

- [x] **Scenario 001 / Q001 — Day 1:** Why does a geospatial workflow tracking application exist? [Exact original Day 1 conversation](scenarios/001-day-1-verbatim.txt) · [Original source (Markdown/DIL)](scenarios/001-mapping-project-intake.md) · **Understood (self-reported)**
- [x] **Scenario 002 / Q002 — Day 2:** When an employee clicks Save Project, how does data travel from a web form through Servlet/JDBC to MySQL? [Verbatim Day 2](scenarios/002-day-2-verbatim.txt) · [Original Markdown](scenarios/002-save-project-servlet-jdbc.md) · **Understood (self-reported)**
- [x] **Scenario 003 / Q003 — Day 3:** Read an existing project through GET, Servlet doGet, JDBC SELECT/ResultSet, and JSP. [Exact Day 3 transcript](scenarios/003-day-3-verbatim.txt) · [Original Markdown/DIL](scenarios/003-view-project-servlet-jdbc.md) · **Understood (self-reported)**
- [x] **Scenario 004 / Q004 — Day 4:** Update an existing project's status using SQL UPDATE, validate the new value, and check affected rows. [Original Day 4 transcript](scenarios/004-day-4-verbatim.txt) · [matching source Markdown](scenarios/004-update-project-jdbc.md) · **Understood (self-reported)**
- [x] **Scenario 005 / Q005 — Day 5:** Safely delete or archive a project with linked QA records using JDBC and MySQL. [Original Day 5 transcript](scenarios/005-day-5-verbatim.txt) · [matching source Markdown](scenarios/005-safe-delete-vs-archive.md) · **Understood (self-reported)**
- [ ] **Scenario 006 / Q006 — Day 6:** Handle duplicate project codes and repeated Save requests with MySQL uniqueness and safe conflict handling. **In progress**
- [ ] CRUD operations with JSP/Servlet, JDBC, and MySQL — future lesson, not yet assigned.
- [ ] Validation and safe SQL parameter handling — future lesson, not yet assigned.

## Year 2 — June 2019–May 2020 (Backend)

- [ ] Develop a Spring Boot REST endpoint for a project workflow — future lesson.
- [ ] Explain the service/repository responsibilities with a real example — future lesson.
- [ ] Diagnose and fix a validation or database query issue — future lesson.

## Year 3 — June 2020–May 2021 (Backend → Full Stack)

- [ ] Track a processing job through statuses and exception handling — future lesson.
- [ ] Build a repeatable batch validation/reconciliation workflow — future lesson.
- [ ] Introduce React-based project status monitoring — future lesson.

## Year 4 — June 2021–May 2022 (Full Stack)

- [ ] Trace a dashboard request end-to-end — future lesson.
- [ ] Explain responsibilities of several collaborating services — future lesson; verify actual service boundaries.
- [ ] Build and explain role-restricted QA operations — future lesson.

## Year 5 — June 2022–May 2023 (Full Stack)

- [ ] Investigate slow REST endpoints and database queries — future lesson.
- [ ] Handle failures between workflow components safely — future lesson.
- [ ] Rehearse production incidents with real-vs-simulated evidence clearly labeled — future lesson.

## Final months — June–November 2023

- [ ] Explain feature delivery, testing, deployment, and collaboration — future lesson.
- [ ] Defend a complete recent-project walkthrough and follow-up questions — future lesson.

## Update rule

When the user explicitly confirms **Understood**:
1. Save that day's entire user-visible assistant response **verbatim, without a rewrite**, in `scenarios/NNN-day-N-verbatim.txt` and update the numbered Markdown scenario archive.
2. Update `KNOWLEDGE_STATE.json`, tick exactly that scenario here, and update `MENTOR_TEACHING_CHECKLIST.md` with the completed concept, anti-repeat notes, and next unique question.
3. Update the current simulated career-year label **only when the curriculum reaches another year**.
4. Never silently tick the independent root `QUESTION_CHECKLIST.md`.
5. Do not publish secrets or confidential business data to this public repo.
