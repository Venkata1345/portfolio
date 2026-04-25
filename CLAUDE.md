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

Project content (per-project descriptions, metrics, persona-specific framings) lives in `src/content/projects/*.mdx` (Phase 2, not yet built).

## Non-negotiable rules

- **Do not invent voice content.** If a Maester or Ted-narrator string isn't in `personas.md`, `copy.ts`, or directly from the user this conversation, ask — don't guess.
- **Recruiter legibility outranks voice** for: technical skill items (Python, PyTorch, etc. stay untouched), accessibility labels, form fields, and project tech tags.
- **Voice motifs are intentional reuse, not sprinkle.** "The long night" (Maester), "True story" / "Kids,…" (Ted) — see `personas.md` cross-bucket voice rules for which strings each motif belongs to.
- **Theme B tense is hybrid.** Future-Ted past-tense for *framing* (narrator interjections, retrospective transitions); present-tense for *role facts* (title, tagline, current capabilities). A recruiter reading "was an AI engineer" assumes he isn't one anymore.
- **Lily skips ScaleVision** in Booth Banter. Pure infra — she has nothing wholesome to land on. The skip is a feature.

## Current build state

No tech stack chosen yet. No code beyond `src/content/copy.ts`. We are filling copy bucket-by-bucket before any UI work.
