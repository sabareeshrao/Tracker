# TRACE — Developer-7 Knowledge Tracker

A static, private-by-default **study dashboard** generated from the complete [Developer-7 question roadmap](./docs/questions/roadmap/ALL_SETS_001_390.md).

## Open the tracker

After GitHub Pages is enabled for this repository: **https://sabareeshrao.github.io/Tracker/**

In the GitHub repository, go to **Settings → Pages → Build and deployment → Deploy from a branch**. Select **main** and **/(root)**, then save. Pages will publish the root `index.html`.

You can also open `index.html` locally in a browser, keeping `data.js` and `app.js` beside it.

## What's included

- **390 source sets** maintained in their original numerical order.
- **3,989 question appearances**, including the 390 set anchors, 3,590 numbered questions, and 9 original appendix prompts.
- **2,719 unique questions** after conservative text-based deduplication (case, typography and terminal punctuation). Near-paraphrases that are not identical are deliberately retained. Each question remembers *all* original set, part and line references.
- **266 trackable concept groups**: curated Java/Spring/architecture topics plus supplementary set-specific topics so no question is unassigned.
- A study journal that detects likely topics when you paste your own explanation; you select the matching concepts before saving.
- Five **self-assessed concept milestones**: Not started (0%), Read (25%), Notes captured (50%), Practiced (75%), Interview ready (100%). Saving a note advances the selected concepts to **at least 50%**, without claiming that every related interview question is mastered.
- Independent per-question statuses: Not started, Read, Practiced, Interview ready. Progress for a repeated question is shared everywhere it appears.
- Search, source-phase filters, subject groups, notes, export/import backup, and responsive layout.

## Important distinction

The source document calls sets 1–85 “completed” in its *original* roadmap. **This tracker does not treat those sets as studied by you.** All personal progress starts empty.

## Where are my notes saved?

Progress, journal entries, and question statuses are held in browser **localStorage**. They do **not** automatically synchronize with your GitHub account, different browsers, or a ChatGPT conversation. No login or external backend is used. Use **Export** regularly to download a JSON backup and **Import** to restore it on another browser or device.

If you want the assistant to use your progress later, provide the exported JSON file. Do **not** commit personal notes to this public repository unless you want them public.

## Files

| File | Purpose |
|---|---|
| `index.html` | GitHub Pages-ready responsive interface |
| `app.js` | Study journal, topic matching, milestone logic, question tracking and backup |
| `data.js` | Generated all-question catalog with source references |
| `docs/questions/roadmap/ALL_SETS_001_390.md` | Unmodified original question roadmap |

The source catalog is the source of truth. Regenerate `data.js` after changing the roadmap; do not hand-edit question wording in the catalog.
