# Booth Banter — MDX frontmatter schema (Phase 2)

> Defined and approved during Phase 1, Bucket 6.
> Actual reaction lines are written in Phase 2 when each project's MDX file is created.
> One field is `optional` — see `vintage`.

## Where it lives

Each project's MDX file (`src/content/projects/<slug>.mdx`) carries a `themeB.boothBanter` array in its frontmatter. The `Booth Banter` section in themeB renders these aggregated across all projects.

`themeA` (Maester) does **not** use this field. Letters from the Rookery are curated separately at `src/content/letters.ts`.

## Schema

```yaml
themeB:
  boothBanter:
    - voice: marshall | lily | robin | barney | ted   # required
      vintage: "..."                                  # optional — see below
      line: "..."                                     # required, 1–2 sentences in that character's voice
```

### Field definitions

- **`voice`** *(required)*: one of the five fixed gang members. Constrained to the literal set `marshall | lily | robin | barney | ted` so a typo fails the build rather than rendering an unknown character.
- **`vintage`** *(optional, nice-to-have)*: a short disambiguator for which *era* of the character is speaking. Stored as **parenthetical content only** — the character name comes from `voice`, and the renderer composes the full attribution as `${voice} (${vintage})`. Examples (just the parenthetical):
  - `"post-bar exam"` → renders as *Marshall (post-bar exam)*
  - `"Channel One newsdesk"` → renders as *Robin (Channel One newsdesk)*
  - `"post-Slap Bet, pre-Lawyered"` → renders as *Marshall (post-Slap Bet, pre-Lawyered)*
  When absent, render just the voice name — the field's omission must not break layout.
- **`line`** *(required)*: 1–2 sentences in that character's voice.

## Rules baked in

- **Lily skips ScaleVision** (per Rule logged in `personas.md`). The `boothBanter` array on `scale-vision.mdx` will simply omit a Lily entry. The schema and the renderer must accept missing voices without complaint — no character is mandatory.
- **No required ordering.** The renderer can sort by character or by appearance order. Authoring order in MDX is the default render order.

## Example (illustrative — actual content written in Phase 2)

```yaml
---
slug: nexus
order: 1
themeB:
  boothBanter:
    - voice: marshall
      vintage: "newly-passed-bar"
      line: "Pausing for human approval before any financial action — finally, due process in software."
    - voice: lily
      line: "It's so sweet that it asks before doing anything important."
    - voice: robin
      vintage: "Channel One era"
      line: "In tonight's top story: a 99.3% F1 score on intent classification."
    - voice: barney
      line: "An agent that respects rules. Rule-respecting AI. Legen — wait for it — dary."
    - voice: ted
      line: "Kids, this was the project where your dad-ish friend learned that the best agents know when to ask."
---
```
