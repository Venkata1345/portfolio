# Portfolio — Progress Log

Single-page snapshot of what's been built, what's locked, and what's next.
This is a *summary*; details live in the files this points to.

---

## The concept

A dual-persona portfolio for **Venkata Abhishek Gullipalli** (AI/ML Engineer, Houston). The theme toggle swaps the **entire site** — copy, colors, fonts, mascots, easter-egg subsections — between two complete in-universe versions:

- **Theme A — Maester / Citadel of Houston** (default, Game of Thrones register)
- **Theme B — MacLaren's, Booth 3** (HIMYM, Future-Ted retrospective)

Reference: saiprathek.com (F1 ↔ The Office swap).

---

## Phase 0 — Persona briefing

**Deliverables:**
- Locked both personas in [_brief/personas.md](personas.md): voice rules, forbidden phrases, reference phrases, section labels, signature easter-egg subsections.
- Locked [_brief/profile.md](profile.md): identity, 4 personal projects (Nexus / NeuroChat / Nutri-Grade MLOps / ScaleVision), neutral bio, neutral one-liner.
- Saved resume source-of-truth at [_brief/resume.md](resume.md).
- Locked the Booth Banter Lily-skip rule for ScaleVision.

---

## Phase 1 — Copy tables (~106 strings)

Built [src/content/copy.ts](../src/content/copy.ts) — every UI string in both voices, typed so themeA and themeB can never drift apart.

Filled bucket-at-a-time:

| Bucket | Content | Strings |
|---|---|---|
| 3 | Short nav labels | 18 |
| 1 | Hero & About prose (eyebrow, name, title, tagline, bio) | 12 |
| 2 | CTAs & toggle (incl. cross-persona "wrong-voice-on-the-right-thing" rule) | 10 + 2 deletions |
| 4 | Skill category headers (technical items inside untouched per recruiter-legibility rule) | 12 |
| 5b-neutral | Utility microcopy at neutral defaults | ~22 |
| 5b-voice | Voice-worthy microcopy (404 body, footer copyright, mailto label, etc.) | 12 |
| 5a | Section taglines + meta (pageTitle, pageDescription) | 20 |
| 6 | 4 Letters from the Rookery → [src/content/letters.ts](../src/content/letters.ts) | 4 letters |

**Cross-bucket voice rules locked:**
- **Rule A1** — "the long night" Maester motif: load-bearing in hero tagline, 404 body, footer copyright, page description. Don't dilute elsewhere.
- **Rule B1** — Booth 3 hybrid tense: Future-Ted past for narration, present for role facts.
- **Rule B2** — `about.bio` is the heaviest swap moment; design implication for Phase 4+.
- **Rule X1** — Cross-persona references: each narrator awkwardly points at the other in their own register (Maester says "the alehouse beyond"; Ted says "the medieval bit").
- **Lily skips ScaleVision** in Booth Banter.

Rendering rules also locked in [../CLAUDE.md](../CLAUDE.md): no `text-transform: uppercase`, no smart-quote auto-conversion, em-dashes preserved.

---

## Phase 2 — Project content (~59 strings)

Wired the 4 personal projects to MDX in [src/content/projects/](../src/content/projects/).

Each project's frontmatter has:
- Neutral block (locked from profile.md)
- `themeA` block: projectId (ARC-I/II/III/IV), name, tagline, description, metricLabels
- `themeB` block: projectId (PLAY-01/02/03/04), name, tagline, description, metricLabels, **boothBanter**

Schema and contracts:
- [src/content/projects/_schema.ts](../src/content/projects/_schema.ts) — TypeScript types
- [_brief/booth-banter-schema.md](booth-banter-schema.md) — Phase 2 prep doc; `vintage` field stores parenthetical-only ("post-bar exam"), renderer composes `${voice} (${vintage})`.

ScaleVision's boothBanter has 4 voices (Lily intentionally absent — locked rule).

**Standout strings** (from the writing pass):
- *"a reminder that the smallest construct, kept properly, teaches more than the largest one shipped poorly"* (A.nutri-grade) — portfolio thesis in voice
- *"You had to be there."* (B.scale-vision noLivePlaceholder) — Future-Ted's whole thing in 4 words
- *"Back to you, Sandy"* (B.nexus.banter robin) — deepest HIMYM cut

---

## Phase 3 — Astro scaffold + theme/persona engine

**Stack:**
- Astro 5.18.1 + Tailwind 4.2.4 + Motion 11
- Cloudflare Pages deploy target (static output)
- View Transitions API where available; CSS-variable transition fallback
- All visual tokens are CSS custom properties keyed off `[data-theme="A|B"]`. Components reference `var(--token)` only.
- No Tailwind dark: mode anywhere

**The persona engine:**
- [src/components/Persona.astro](../src/components/Persona.astro) — `<Persona field="hero.tagline" />` renders BOTH theme strings. CSS hides the inactive one based on `[data-theme]` on `<html>`. No JS framework, no hydration.
- [src/layouts/Base.astro](../src/layouts/Base.astro) — inlined theme init script (no FOUC), View Transitions toggle handler with fallback. First visit defaults to A (Maester) regardless of `prefers-color-scheme` since both themes are dark.
- [src/styles/global.css](../src/styles/global.css) — full token system per theme: colors, fonts, weights, radii, spacing, easing.

**Verified:** test page rendered both themes, toggle worked end-to-end, View Transitions crossfade firing in supported browsers.

---

## Phase 4 — Sections (in progress)

Building one section at a time, each as its own commit, each verified in both personas before moving on.

### Hero ✅ (current)

- [src/components/Hero.astro](../src/components/Hero.astro) — eyebrow, name, title, tagline, primary CTA (→ #projects), secondary CTA (→ /resume.pdf), scroll cue. All persona-aware via `<Persona>`.
- [src/components/ThemeToggle.astro](../src/components/ThemeToggle.astro) — fixed top-right, 44×44 minimum hit area, visible focus ring. Rendered globally from `Base.astro`.
- [src/components/Mascot.astro](../src/components/Mascot.astro) — persona-specific signature element:
  - **Theme A**: cream raven SVG on cold slate. Flies in once (Motion One) on first reveal of A. Subsequent A-toggles → static.
  - **Theme B**: blue French Horn SVG. Hover wobbles ±5° at 0.45s.
  - Both: hidden on mobile (<640px); both respect `prefers-reduced-motion`.
- [astro.config.mjs](../astro.config.mjs) — added a `resume-presence-check` integration that warns (doesn't fail) if `public/resume.pdf` is missing.

**Palette** (canonical to each show):
- Theme A — "Maester's study at night": cold slate `#1c1f23` + parchment cream `#e8dcc0` + aged brass `#c9913a`
- Theme B — "MacLaren's, last call": warm dark wood `#1f1812` + booth cream `#f4e8d0` + sky blue `#5fa8d3` (Blue French Horn / HIMYM title card)
- Temperature inversion (cold A + warm accent / warm B + cool accent) is what makes the toggle feel like opposites despite both being dark.

### Remaining Phase 4 sections (in user's chosen order)

- About — persona-flavored bio (heaviest swap moment per Rule B2)
- Projects — grid of cards rendering from MDX
- Experience — timeline + role cards
- Skills — categorized lists with persona-flavored category names
- Writing/Publications — placeholder section pointing to /blog
- Contact — mailto:-only (no form, locked rule), GitHub + LinkedIn
- Footer — persona-flavored sign-off
- /blog — empty content collection, "Coming soon"
- 404 — persona-flavored, both versions

---

## Repo structure (current)

```
portfolio/
├── CLAUDE.md                          # auto-loaded rules; non-negotiables
├── astro.config.mjs                   # Tailwind + resume-presence-check integration
├── package.json
├── tsconfig.json
├── _brief/                            # source-of-truth working docs
│   ├── personas.md                    # voice rules, signature easter-egg specs
│   ├── profile.md                     # neutral identity, projects, bio, one-liner
│   ├── resume.md                      # extracted resume content
│   ├── booth-banter-schema.md         # Phase 2 prep schema
│   └── progress.md                    # this file
└── src/
    ├── env.d.ts
    ├── content/
    │   ├── copy.ts                    # ~106 UI strings, typed, both themes
    │   ├── letters.ts                 # 4 Letters from the Rookery (themeA only)
    │   └── projects/
    │       ├── _schema.ts             # ProjectFrontmatter type + BoothBanterEntry
    │       ├── _template.mdx
    │       ├── nexus.mdx              # ARC-I / PLAY-01
    │       ├── neurochat.mdx          # ARC-II / PLAY-02
    │       ├── nutri-grade.mdx        # ARC-III / PLAY-03
    │       └── scale-vision.mdx       # ARC-IV / PLAY-04 (Lily absent)
    ├── components/
    │   ├── Persona.astro              # the engine
    │   ├── ThemeToggle.astro          # global, fixed top-right
    │   ├── Mascot.astro               # raven (A) + french horn (B)
    │   └── Hero.astro                 # full hero section
    ├── layouts/
    │   └── Base.astro                 # HTML shell, theme init, toggle handler
    ├── pages/
    │   └── index.astro                # currently just <Hero />
    └── styles/
        └── global.css                 # all theme tokens
```

---

## String count to date

| | locked |
|---|---|
| Phase 1 — copy tables | ~106 |
| Phase 1 — letters (4 letters, multi-sentence each) | 4 |
| Phase 2 — project MDX content | ~59 |
| Phase 3 — scaffold (no copy) | 0 |
| Phase 4 — hero (already in copy.ts) | 0 |
| **Total written content** | **~169 strings** + 4 letters |

---

## Git history (clean phase boundaries)

```
99d92fd  phase 3: astro scaffold + theme/persona engine
0a3889b  phase 2: project MDX files + schema
8a4e9dd  phase 1: copy tables completed (buckets 4–6) + letters
9c767d2  Initial commit — Phase 0–1 buckets 1-3
```

The Phase 4 hero commit is pending — current uncommitted work is the hero + mascot scaffold + the GOT/HIMYM palette swap.

---

## What's next

Pending close on Phase 4 hero (commit and move forward), then **About** is up. Per Rule B2, the about.bio is the heaviest persona-swap moment in the whole site — the design implication is that the swap there should earn a beat (longer fade, character-by-character reveal, or similar). That's the next conversation.
