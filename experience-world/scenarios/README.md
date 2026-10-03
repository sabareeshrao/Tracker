# Scenario Archive

Each completed conversation gets its **unmodified original assistant response**, in numerical order:

- [`001-day-1-verbatim.txt`](001-day-1-verbatim.txt) — Day 1 exact text as it appeared in chat, with original code snippets and DIL source preserved.
- [`001-mapping-project-intake.md`](001-mapping-project-intake.md) — same Day 1 source preserved without a rewrite.
- Future lessons: `NNN-day-N-verbatim.txt` and `NNN-<topic>.md`; use the same complete content, not an abbreviated summary.

**A lesson is marked complete only when the student says Understood or explicitly confirms completion.** Day 1 was confirmed on 2026-10-02. For later lessons, preserve the full original text (with no rewrites) and record the following details in separate knowledge state/checklist files:
- Scenario ID, date, anchor question, business context (as separate tracking metadata)
- Mentor/student explanation and key takeaways
- Relevant code paths (only if a repository was actually inspected)
- Failure scenario and recovery approach
- Interview-ready answer and one-line memory chain
- Concepts introduced, prerequisites demonstrated, unresolved questions
- Evidence level of every project-specific claim: VERIFIED / USER-REPORTED / ILLUSTRATIVE / UNKNOWN
- Next recommended scenario and why

Always check current GitHub file state before modifying the progress JSON. A confirmation should not silently check off the separate root-level interview-question checklist.
