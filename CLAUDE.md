# Portfolio — Claude project context

## What this project is

A dual-persona portfolio for **Venkata Abhishek Gullipalli** (AI/ML Engineer, Houston). The theme toggle swaps the **entire site** between two complete in-universe versions, not just colors:

- **Theme A — Maester / Citadel of Houston** (default). Game of Thrones register.
- **Theme B — MacLaren's, Booth 3** (toggle). HIMYM register, Future-Ted narrator.

Reference for the concept: saiprathek.com (F1 ↔ The Office swap).

## Binding reference documents

Read these before generating any user-facing string. They are the source of truth and override defaults:

- [_brief/personas.md](_brief/personas.md) — voice rules, forbidden phrases, reference phrases, section labels, signature easter-egg subsections, cross-bucket voice rules
- [_brief/profile.md](_brief/profile.md) — neutral identity, projects, bio, one-liner, contact info
- [_brief/resume.md](_brief/resume.md) — resume source of truth, untouched

## Source of truth for site copy

[src/content/copy.ts](src/content/copy.ts) holds every UI string in both voices. The exported `Copy` type forces `themeA` and `themeB` to keep identical keys — adding a key to one without the other will fail TypeScript.

Easter-egg content lives in dedicated files because the two personas use different mechanics:

- [src/content/letters.ts](src/content/letters.ts) — `Letters from the Rookery` (themeA only). Curated 3–4 entries.
- `src/content/projects/<slug>.mdx` — `Booth Banter` (themeB) lives in each project's frontmatter. Schema documented in [_brief/booth-banter-schema.md](_brief/booth-banter-schema.md).

Project content (per-project descriptions, metrics, persona-specific framings, Booth Banter) lives in `src/content/projects/*.mdx` (Phase 2, not yet built).

## Non-negotiable rules

- **Do not invent voice content.** If a Maester or Ted-narrator string isn't in `personas.md`, `copy.ts`, or directly from the user this conversation, ask — don't guess.
- **Recruiter legibility outranks voice** for: technical skill items (Python, PyTorch, etc. stay untouched), accessibility labels, form fields, and project tech tags.
- **Voice motifs are intentional reuse, not sprinkle.** "The long night" (Maester), "True story" / "Kids,…" (Ted) — see `personas.md` cross-bucket voice rules for which strings each motif belongs to.
- **Theme B tense is hybrid.** Future-Ted past-tense for *framing* (narrator interjections, retrospective transitions); present-tense for *role facts* (title, tagline, current capabilities). A recruiter reading "was an AI engineer" assumes he isn't one anymore.
- **Lily skips ScaleVision** in Booth Banter. Pure infra — she has nothing wholesome to land on. The skip is a feature.
- **Contact is mailto-only, no form.** No `<form>` element, no validation, no submit handlers. The Contact section renders a single `mailto:` link with the visible text from `contact.mailtoLabel`. Form-related fields (formName, formEmail, formMessage, formSubmit, formSuccess, formError) are intentionally absent from the `Copy` type — don't re-add them.

## Rendering rules (apply when building UI)

- **No `text-transform: uppercase`** on any string in `copy.ts`. Strings are already cased exactly as they should render. The hero eyebrow values like `"MAESTER OF THE CITADEL"` are uppercase in the source — don't double-transform them. Strings like `"Of letters and ledgers"` are intentionally lowercase-after-Of and must not be force-capitalized.
- **No smart-quote auto-conversion.** Render apostrophes and quotes exactly as typed. Don't run strings through any typographer that swaps `'` for `'` or `"` for `"` unless the string already contains the curly form.
- **Em-dashes are intentional.** `(Legen — dary)`, `Kids — true story —`, etc. Preserve verbatim. Don't normalize to hyphens or en-dashes.

## Current build state

No tech stack chosen yet. No code beyond `src/content/copy.ts`. We are filling copy bucket-by-bucket before any UI work.
