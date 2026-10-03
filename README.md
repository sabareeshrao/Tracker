# TRACE — Developer-7 Knowledge Tracker

**[Complete question checklist](QUESTION_CHECKLIST.md)** — tick off all 2,719 unique questions by stable Q-number. Tell ChatGPT which questions you completed to update the file.

A static, private-by-default **study dashboard** generated from the complete [Developer-7 question roadmap](./docs/questions/roadmap/ALL_SETS_001_390.md).

## Open the tracker

After GitHub Pages is enabled for this repository: **https://sabareeshrao.github.io/Tracker/**

In the GitHub repository, go to **Settings → Pages → Build and deployment → Deploy from a branch**. Select **main** and **/(root)**, then save. Pages will publish the root `index.html`.

**Standalone/offline use:** Download only [`index.html`](index.html) using GitHub’s **Raw → Download** option. The entire question catalog and application are embedded directly in that file, so opening it with `file://` works without `data.js` or `app.js`. When the downloaded file has internet access, it also attempts to read the public GitHub `STUDY_PROGRESS.json` over HTTPS on page load. Without internet access, the browser-based tracker still runs and retains previously saved local progress. Re-download `index.html` whenever the repository version changes.

**If https://sabareeshrao.github.io/Tracker/ shows 404:** The HTML file being committed is not sufficient to activate GitHub Pages. Visit [Settings → Pages](https://github.com/sabareeshrao/Tracker/settings/pages) → Source **Deploy from a branch** → branch **main** → folder **/(root)** → **Save**. Wait for the publishing job, then refresh the link. The GitHub integration available to this assistant cannot change that repository setting.

## Five-Year Experience World

The [Experience World checklist](experience.html) is a separate scenario-based mentoring track, linked in the main dashboard sidebar. The [mentor-only teaching checklist](experience-world/MENTOR_TEACHING_CHECKLIST.md) prevents repeated lessons by preserving the last confirmed question, unfinished scenario, unique next question and prior concepts. It shows **which simulated career year you are studying**, a read-only checklist synchronized from [GitHub learning state](experience-world/KNOWLEDGE_STATE.json), and links to complete [verbatim lesson transcripts](experience-world/scenarios/001-day-1-verbatim.txt). [Markdown career checklist](experience-world/EXPERIENCE_CHECKLIST.md). **Current: Year 1 (2018–2019), Day 1 understood, Day 2 in progress, 1/1,000 self-reported understood.** This does not overwrite the independent 2,719-question study checklist.

## Resume-driven interview batches

- **[Resume experience reference](docs/RESUME_EXPERIENCE.md)** — the user's exact stated responsibilities, roles and results (user-reported; not externally verified).
- **[Current five-question batch](CURRENT_BATCH.md)** — the five assigned questions, reasons for choosing them, and their original roadmap references.
- **[Permanent batch history](BATCH_HISTORY.md)** — an append-only record of Batch 001, Batch 002, Batch 003 and every later five-question assignment, including their completion checkboxes.
- **[Permanent completion checklist](QUESTION_CHECKLIST.md)** — the 2,719 distinct question IDs; only mark a question checked after the user reports finishing it.
- **[GitHub study progress](STUDY_PROGRESS.json)** — concept milestones, individual question stages and the active batch. The static page **reads** this file when refreshed; the assistant updates it when the user submits study notes or confirms completing questions in chat.

**Learning loop:** Read the five assigned questions → paste your learning and identify completed question IDs in chat → **update `STUDY_PROGRESS.json` first** to capture knowledge evidence and concept levels → **mark the corresponding boxes in `QUESTION_CHECKLIST.md`** → **update the permanent `BATCH_HISTORY.md` record** → after all five are confirmed finished, issue the next five and append a new history entry. Chat-only study updates never silently mark all related questions complete. Prioritize resume-relevant fundamentals and real implementation questions; postpone close paraphrases until later without dropping distinct questions.

**Progress semantics:** 0% not started; 25% reading; 50% captured substantive notes; 75% demonstrated practice; 100% confirmed interview readiness. These numbers are **self-assessed study milestones**, not automatically measured exam results. Concepts and question completion are tracked independently.

**Privacy:** This repository is public. Resume statements and any knowledge recorded into GitHub are visible publicly. Notes entered directly into the website stay in that browser until the user exports them; **the page cannot write GitHub changes**, and ChatGPT does not receive website-only notes automatically. If you want ChatGPT to update GitHub progress, paste your notes into the chat.

## What's included

- **390 source sets** maintained in their original numerical order.
- **3,989 question appearances**, including the 390 set anchors, 3,590 numbered questions, and 9 original appendix prompts.
- **2,719 unique questions** after conservative text-based deduplication (case, typography and terminal punctuation). Near-paraphrases that are not identical are deliberately retained. Each question remembers *all* original set, part and line references.
- **Trackable concept groups**: curated Java/Spring/architecture topics plus supplementary set-specific topics so no question is unassigned.
- A study journal that detects likely topics when you paste your own explanation; you select the matching concepts before saving.
- Five **self-assessed concept milestones**: Not started (0%), Read (25%), Notes captured (50%), Practiced (75%), Interview ready (100%). Saving a note advances the selected concepts to **at least 50%**, without claiming that every related interview question is mastered.
- Independent per-question statuses: Not started, Read, Practiced, Interview ready. Progress for a repeated question is shared everywhere it appears.
- Search, source-phase filters, subject groups, notes, export/import backup, and responsive layout.

## Important distinction

The source document calls sets 1–85 “completed” in its *original* roadmap. **This tracker does not treat those sets as studied by you.** All personal progress starts empty.

## Where are my notes saved?

Website-generated progress, journal entries, and question statuses are held in browser **localStorage**. GitHub updates made by ChatGPT in response to your chat messages are read from **STUDY_PROGRESS.json** when the website is refreshed; browser-only changes do **not** write back to GitHub. No login or external backend is used. Use **Export** regularly to download a JSON backup and **Import** to restore it on another browser or device.

If you want the assistant to use your progress later, provide the exported JSON file. Do **not** commit personal notes to this public repository unless you want them public.

## Files

| File | Purpose |
|---|---|
| `index.html` | GitHub Pages-ready responsive interface |
| `CURRENT_BATCH.md` | Active five-question interview assignment |
| `BATCH_HISTORY.md` | Cumulative, ordered history of every five-question batch |
| `STUDY_PROGRESS.json` | GitHub-side question and concept milestones read by the website |
| `docs/RESUME_EXPERIENCE.md` | User-provided career reference |
| `QUESTION_CHECKLIST.md` | Permanent per-question completion checkboxes |
| `app.js` | Study journal, topic matching, milestone logic, question tracking and backup |
| `data.js` | Generated all-question catalog with source references |
| `docs/questions/roadmap/ALL_SETS_001_390.md` | Unmodified original question roadmap |

The source catalog is the source of truth. Regenerate `data.js` after changing the roadmap; do not hand-edit question wording in the catalog.
