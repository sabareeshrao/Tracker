# Five-Year Java Experience World

A scenario-by-scenario mentor–student learning track, separate from the existing five-question interview batches and website.

## Roles
- **Mentor:** An illustrative Java developer with five years of practical software development experience. Explains real-world engineering work from first principles; is not evidence of the user's own employment.
- **Student:** A recent college graduate who understands introductory Java but has no industry experience.
- **Goal:** Build defensible knowledge of the user's stated Aerial Topographic Services experience by tracing realistic business scenarios into actual implementation details, progressively.

## Source-of-truth policy
1. The user's resume is the source for **reported** personal responsibilities, not proof of particular architectures or code.
2. Actual linked repositories and inspected files are the source for **verified** project code/architecture. Do not attribute illustrative designs to the user's employer.
3. Clearly mark **VERIFIED**, **USER-REPORTED**, **ILLUSTRATIVE**, and **UNKNOWN** facts in each scenario.
4. Never fabricate years of employment, incidents, tools, exact microservice names, numerical measurements, or code.
5. This repository is PUBLIC: avoid secrets, identifiable colleague/client details, confidential data, and sensitive notes.

## Teaching protocol
1. Pick one business scenario and one anchor interview question. Prioritize prerequisites before implementation.
2. Write an easy conversational exchange: Mentor (five years experienced) ↔ Student (college Java graduate). Start at ground zero, discuss why, follow the request/data flow, show minimal accurate Java code if useful, include one failure case, and end with an interview-ready summary and one-line memory chain.
3. At the end, ask for the student's understanding or a practical explanation. **Do not mark complete until the user explicitly says "understood", or otherwise confirms completion.**
4. On confirmation, write the reviewed lesson to `scenarios/` and update `KNOWLEDGE_STATE.json` **in that same user-requested chat turn**. Preserve question, dialogue knowledge, key implementation points, misconceptions, verified-vs-illustrative evidence, and suggested next prerequisite.
5. `understood` means **self-reported comprehension only**. It does not mean hands-on practice, verified expertise, interview-readiness, or completion of an independently assigned roadmap question.
6. At the start of a new chat, read `KNOWLEDGE_STATE.json`, `WORLD_MAP.md` and most recent scenario files before choosing the next lesson. Do not depend on chat context alone.
7. Keep this track **separate** from root-level `STUDY_PROGRESS.json`, `CURRENT_BATCH.md`, `BATCH_HISTORY.md`, and `QUESTION_CHECKLIST.md`. Only update those existing files when the user explicitly confirms the corresponding specific roadmap question or requests synchronization.
8. If GitHub writes fail, report that immediately; never claim a lesson or progress has been saved without a successful write.

## Canonical tone — use for every scenario

The exact reference is the user's favorite very-simple mentor–student explanation of **"How would you design a transactional method involving multiple databases and a message?"** (the simplified Saga + Transactional Outbox version). Treat this as a **tone and teaching structure reference**, not a required topic for each lesson.

- Friendly, relaxed, approachable, and spoken aloud; never dense, academic, or a lecture.
- **Mentor persona:** a developer with five years of experience explaining a practical situation. **Student persona:** a new college Java graduate with zero professional experience.
- Use many short, natural **Mentor:** and **Student:** exchanges. The student asks genuine beginner questions like "Why?", "What if it fails?", "Can't we just use ...?", and the mentor introduces each idea only after its problem appears.
- Start with one concrete business problem, illustrate a success and failure with a tiny text diagram (e.g. Database A SUCCESS / Database B FAILED), then explain why the next concept is needed.
- Explain one idea at a time; don't assume jargon. Show short, accurate code only where it helps understanding. If multiple possible architectures exist, distinguish local vs distributed transactions and tradeoffs without pretending the user's company used one.
- End with a short concept comparison where helpful, a clear **interview-ready answer**, and a **one-line memory trick**.
- Avoid giant prerequisite lists before understanding the business need; avoid unnecessary numbers, irrelevant technologies, or invented experience.
- Stop and re-explain when the student is confused. An explicit "Understood" triggers the separate GitHub knowledge-saving protocol.
- Prefer clarity over covering many topics in one lesson. Maintain technical correctness: a local `@Transactional` does not automatically span two independent databases and Kafka; an outbox guarantees atomic local write plus event intent, not instantaneous global atomicity.

## Start here
- [World roadmap](WORLD_MAP.md)
- [Knowledge state](KNOWLEDGE_STATE.json)
- [Scenario archive](scenarios/README.md)

**Current status:** Foundation scaffold created. Scenario 001 has not yet been studied or confirmed.
