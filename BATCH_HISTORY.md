# Developer-7 — Cumulative Interview Batch History

**Purpose:** Every five-question study assignment is recorded here permanently, **Batch 001 → Batch 002 → Batch 003 → ...** in the order assigned. This is the chronological history; [CURRENT_BATCH.md](CURRENT_BATCH.md) shows only the active five, while [QUESTION_CHECKLIST.md](QUESTION_CHECKLIST.md) contains each globally unique question once.

**Update order when the user reports study progress:**

1. **Update the tracker first:** Record the user's demonstrated knowledge and appropriate concept milestones in [STUDY_PROGRESS.json](STUDY_PROGRESS.json); record the specific learning evidence in [STUDY_LOG.md](STUDY_LOG.md) when first provided. These are the authoritative inputs for choosing the next batch. Reading/pasting notes does not automatically mean a concept is interview-ready.
2. **Tick finished questions:** For every question the user explicitly declares finished, update its stable Q-ID in [QUESTION_CHECKLIST.md](QUESTION_CHECKLIST.md). Do not check unreported questions; update the batch's completed Q-ID list in `STUDY_PROGRESS.json` as well. The question-stage value and concept percentage can differ.
3. **Update this history:** Change the matching `- [ ]` boxes to `- [x]`, update the Batch completion count/status, and retain the questions and ordering permanently.
4. **Issue the next five only after the active five have been confirmed finished:** Select exactly five new unique Q-IDs from the source roadmap based on the user's resume, covered topics, remaining gaps, and question importance. Avoid already checked Q-IDs; defer near-paraphrases or strongly overlapping questions toward later batches. Add the new batch **below** all older batches here; replace the contents of `CURRENT_BATCH.md`; advance `activeBatch` and append to `batches` in `STUDY_PROGRESS.json`.

**Safeguards:** Exact duplicate source appearances have been merged into one master Q-ID. Different but similar questions are retained and studied later rather than silently discarded. The source roadmap's historical Set completion is not this user's personal completion. Never infer hands-on employer experience or interview readiness from the resume alone. If tracker, checklist and history disagree, reconcile the Q-IDs before assigning more questions.

**Public repository:** Content written into these files is public. Do not add private information, raw sensitive notes or credentials.

---

## Batch 001 — Resume-grounded Java and backend foundations

**Issued:** 2026-10-02  
**Status:** Active · 0/5 finished  
**Reason:** Start with questions directly grounded in the user-provided Aerial Topographic Services experience.  
**Active assignment:** [CURRENT_BATCH.md](CURRENT_BATCH.md)

- [ ] **Q2537** (Roadmap Set 348) — Can you please explain your recent project and also introduce yourself? · [source](docs/questions/roadmap/ALL_SETS_001_390.md#L7120)
- [ ] **Q1596** (Roadmap Set 171) — Why do we need separate Controller, Service, Business and Repository Layers in a Spring Boot application? · [source](docs/questions/roadmap/ALL_SETS_001_390.md#L3870)
- [ ] **Q1928** (Roadmap Set 213) — What REST API best practices do you follow in your project? · [source](docs/questions/roadmap/ALL_SETS_001_390.md#L4754)
- [ ] **Q1531** (Roadmap Set 165) — Are you comfortable with indexes in SQL? · [source](docs/questions/roadmap/ALL_SETS_001_390.md#L3711)
- [ ] **Q0347** (Roadmap Set 015) — How do you handle exceptions in your project? · [source](docs/questions/roadmap/ALL_SETS_001_390.md#L622)

**Study evidence:** Not supplied yet.  
**Completed on:** Pending.

---

_Future batches are appended here as Batch 002, Batch 003, and so on; earlier batches are never overwritten or renumbered._
