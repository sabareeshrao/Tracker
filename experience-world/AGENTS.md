# Instructions for lesson-authoring agents in this folder

**MANDATORY:** Before writing, publishing or advancing a Java Experience World lesson, read the following files *from the live repo* in this order:

1. [LESSON_CREATION_PLAYBOOK.md](LESSON_CREATION_PLAYBOOK.md) — authoritative style, structure, tool integration and commit protocol.
2. [MENTOR_TEACHING_CHECKLIST.md](MENTOR_TEACHING_CHECKLIST.md) — deduplication, specific next question, prior coverage and deferred misconceptions.
3. [KNOWLEDGE_STATE.json](KNOWLEDGE_STATE.json) — canonical active scenario/year/counts.
4. [EXPERIENCE_CHECKLIST.md](EXPERIENCE_CHECKLIST.md) — learner-facing career year and understood questions.
5. [TOOLS_AND_SOFTWARE_ROADMAP.md](TOOLS_AND_SOFTWARE_ROADMAP.md) — which software is introduced in each stage and whether it is resume-reported or learning-only.
6. [WORLD_MAP.md](WORLD_MAP.md) and the most recent verbatim [scenario](scenarios/README.md), plus [LESSON_TEMPLATE.md](scenarios/LESSON_TEMPLATE.md).

**Resume from live state, NEVER from this snapshot alone.** At the time of this rule's creation (2026-10-04), Q001–Q006 were understood by user self-report and Q007 was **in progress**; Q008 was next planned. This document does **not** confirm Q007.

**When drafting:** Match the complete original Day 1 and rewritten Day 2 quality: one grounded business requirement, Mentor–Student conversation, explain *why* before naming technology, small accurate examples, a failure and recovery, real input/output trace, interview-ready answer, one-line memory chain, and three-question understanding test. Do not repeat a completed anchor under a new ID.

**Tool choice:** Only introduce Git, GitHub, Postman, Jira, Jenkins/Actions, Docker, AWS/Azure, Kafka, Redis, Kubernetes or monitoring when the scenario actually needs it. IntelliJ is the preferred and only Java IDE in this learning series. Cloud and CI tools are **practice-only unless verified**; do not claim they were used during the user's job.

**When the user says "Understood":** Save the exact complete original lesson (including code, diagrams and chat UI source) in `scenarios/NNN-day-N-verbatim.txt` and matching Markdown *without rewriting*. Then update the canonical JSON, mentor anti-repeat ledger, learner checklist and roadmap in the same turn, verify the new status/links, and **only then** start the next question if requested.

**Important:** The separate main Tracker `QUESTION_CHECKLIST.md` and `STUDY_PROGRESS.json` for 2,719 questions are not part of this completion flow. Do not modify or mark them unless independently asked. Do not include sensitive information in this public repo. Never claim an operation, archive or deployment succeeded without tool verification.
