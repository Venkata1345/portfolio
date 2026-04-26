# HANDOFF — Read this first if you're picking this up cold.

This is the operating manual for resuming work on this portfolio in a fresh session. Read it end-to-end once before doing anything. After that, [CLAUDE.md](CLAUDE.md) is the auto-loaded short version and the `_brief/` files are the deep-dives.

---

## 1. The project in 30 seconds

A dual-persona portfolio for **Venkata Abhishek Gullipalli** (AI/ML Engineer, Houston, TX). One person, two complete in-universe versions, swapped by a theme toggle:

- **Theme A — "Maester of the Citadel"** — Game of Thrones register. Default on first visit.
- **Theme B — "MacLaren's, Booth 3"** — HIMYM register. Future-Ted narrates.

Reference for the concept: saiprathek.com (F1 ↔ The Office swap). The toggle swaps **everything**: copy, colors, fonts, mascots, easter-egg subsections.

**Scope contract** (locked at project start): every UI string exists in two versions. Estimated 150–250 strings of voice writing. Currently ~169 strings + 4 letters written.

---

## 2. Stack and environment

| | |
|---|---|
| Framework | **Astro 5.18.1** (static output) |
| CSS | **Tailwind 4.2.4** via `@tailwindcss/vite` plugin. CSS variables only — **no Tailwind `dark:` mode anywhere.** |
| Animations | **Motion 11** (lighter than GSAP for this scope) |
| Deploy target | **Cloudflare Pages** (static output works without an adapter) |
| Persona engine | Astro components (no React island), CSS-driven visibility on `[data-theme]` |
| Theme transition | **View Transitions API** where available; CSS-variable transition fallback otherwise |
| Theme persistence | `localStorage` key `portfolio-theme` |

### Local environment quirk (Windows)

Node 25.9.0 is installed at `C:\Program Files\nodejs\` but **not on PATH** for the bash/PowerShell shells used by Claude Code in this session. To run npm in scripts:

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"; npm run dev
```

Or use absolute paths: `& "C:\Program Files\nodejs\npm.cmd" install`.

Dev server runs on `http://localhost:4321/`. The background task ID won't survive a fresh session — start a new one if you need it.

### Common commands

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
npm install         # already done; only re-run after package.json changes
npm run dev         # starts dev server with HMR
npm run build       # static build to dist/
npm run preview     # serve dist/ locally
```

---

## 3. Phase status

| Phase | Status | Deliverable |
|---|---|---|
| **0** — Persona briefing | ✅ done | Both personas locked in [_brief/personas.md](_brief/personas.md) |
| **1** — Copy tables | ✅ done | ~106 strings in [src/content/copy.ts](src/content/copy.ts), 4 letters in [src/content/letters.ts](src/content/letters.ts) |
| **2** — Project content | ✅ done | 4 MDX files in [src/content/projects/](src/content/projects/), ~59 strings |
| **3** — Astro scaffold + theme/persona engine | ✅ done | Persona engine verified end-to-end |
| **4** — Sections (one at a time) | 🟡 **in progress** | **Hero done both sides; awaiting close-out + commit** |

### Phase 4 progress (current section: Hero)

Build order locked (each is a separate commit, each verified in both personas before moving on):

1. **Hero** ✅ — eyebrow / name / title / tagline / 2 CTAs / scroll cue / mascot. **Done both sides; uncommitted.**
2. **About** — persona-flavored bio. **Rule B2 says this is the heaviest swap moment in the site — design the transition to earn a beat (longer fade, char-by-char reveal, or similar). Discuss before building.**
3. **Projects** — grid of cards from MDX. **Card hover behavior TBD — propose tilt / parallax / reveal at the start of this section.**
4. **Experience** — timeline + role cards from resume.md
5. **Skills** — categorized lists from copy.ts; technical items untouched per rule
6. **Writing/Publications** — placeholder pointing to `/blog`
7. **Contact** — `mailto:` + GitHub + LinkedIn. **No form** (locked rule).
8. **Footer** — persona-flavored sign-off
9. `/blog` — empty content collection, "Coming soon" page in both voices
10. **404** — persona-flavored, both versions

After each section: `npm run dev`, show user both themes, wait for approval before moving on.

### Half-finished / uncommitted work

The Phase 4 Hero commit is **pending**. Uncommitted in working tree (verify with `git status`):

- New: `src/components/Hero.astro`, `src/components/Mascot.astro`
- Modified: `src/components/ThemeToggle.astro` (repositioned to fixed top-right, accessibility), `src/layouts/Base.astro` (default-A on first visit), `src/styles/global.css` (GOT + HIMYM canonical palettes), `src/pages/index.astro` (uses Hero), `astro.config.mjs` (resume-presence-check integration), `_brief/booth-banter-schema.md` (vintage parenthetical-only), `src/content/projects/_schema.ts` (vintage docstring update)
- New brief docs: `_brief/progress.md`, `HANDOFF.md` (this file)

**Next step when resuming**: confirm Hero approval with user → commit Hero + the brief docs → move to About.

---

## 4. Critical voice rules

These override anything else. Listed in order of how often they get violated.

### R1 — Do not invent voice content

If a Maester or Ted-narrator string isn't in `copy.ts`, `letters.ts`, the project MDX files, or the persona briefs — **ask the user, don't guess.** Hint comments in stub files (e.g., "Hooks: …") are *pointers*, not prescriptions.

### R2 — Recruiter legibility outranks voice

These elements stay technical/legible regardless of voice:
- Technical skill items (Python, PyTorch, FastAPI, etc.) inside Skills section buckets
- Accessibility labels for screen readers
- Form field labels (no longer relevant since contact is mailto-only)
- Tech tags on project cards

Voice goes on the *labels around* these elements (skill category headers, section taglines), not on the items themselves.

### R3 — Voice motifs are intentional reuse, not sprinkle

Each motif has 3–5 *load-bearing* placements. Don't add it elsewhere just because it fits.

- **"The long night"** (Maester) — locked placements: `themeA.hero.tagline`, `themeA.notFound.body`, `themeA.footer.copyright`, `themeA.meta.pageDescription`. Possibly `themeA.experience.sectionTagline` or `presentLabel` if it fits naturally. **Nowhere else.**
- **"Kids,…"** (Ted-narrator) — opens about.bio, scattered through narration. Should not appear in present-tense role facts.
- **"True story"** (Ted/Barney) — already in `themeB.footer.tagline`, scattered carefully. Don't make it a tic.

### R4 — Theme B hybrid tense

Future-Ted speaks **past tense for framing** (narrator interjections, retrospective transitions, "your dad-ish friend was…"). **Present tense for role facts** (title, tagline, current capabilities). A recruiter reading "*was* an AI engineer" assumes he isn't one anymore — don't let that happen.

### R5 — Cross-persona references: wrong-voice-on-the-right-thing

When one persona has to mention the other (toggle button, easter eggs, 404 cross-references), each narrator describes the other in **their own register**, awkwardly. Don't fully translate; don't fully name.

- Maester: "the alehouse beyond" / "Abhishek's other self" — *not* the literal "MacLaren's"
- Ted: "the medieval bit" / "the fantasy one" — *not* GOT-specific terms like "Castle Black"

### R6 — Lily skips ScaleVision

The Booth Banter array on `scale-vision.mdx` has 4 voices, not 5. Pure infra has nothing wholesome for Lily to land on. The renderer must accept the missing voice without complaint. **Any new infra-only project should follow the same rule.**

### R7 — Contact is mailto-only

No `<form>` element, no validation, no submit handlers. The Contact section renders a single `mailto:` link with the visible text from `contact.mailtoLabel` (= "Send word →" / "Drop a line →"). Form-related fields are intentionally absent from the `Copy` type — don't re-add them.

### R8 — Rendering rules (CSS / build-pipeline)

Strings in `copy.ts` are pre-cased and pre-formatted exactly as they should render. Don't apply:
- `text-transform: uppercase` (eyebrows like "MAESTER OF THE CITADEL" are already cased)
- Smart-quote auto-conversion (preserve apostrophes/quotes as typed)
- Em-dash normalization (em-dashes are intentional, not hyphens or en-dashes)

---

## 5. Persona voice characteristics

### Theme A — Maester of the Citadel (Game of Thrones)

**Pitch:** Maester Abhishek of House Gullipalli, Sworn to the Citadel.

**Voice:**
- Formal, elevated, **never faux-Shakespearean**
- Frames work as service / duty / oath
- Uses "the realm," "the chain," "by my oath," "tomes," "scrolls," "sigils," "wards"
- Slightly grave but **a scholar's voice, not a warrior's**
- Confident through restraint, never boastful

**Forbidden:**
- "Methinks / verily / forsooth" (nobody on the show speaks like this)
- "Thee / thou" pronouns
- Modern corporate speak ("synergy," "leverage," "stakeholder")
- "You know nothing" used as a punchline
- Self-aware winks at the audience

**Reference phrases to lift verbatim** (use sparingly as texture; don't pile them up):
"Winter is coming" · "Valar Morghulis" / "Valar Dohaeris" · "Send a raven" · "By the old gods and the new" · "A Maester's chain" · "Sworn service" · "Words are wind" · "The realm" · "Hand of the King" · "The Citadel"

### Theme B — MacLaren's, Booth 3 (HIMYM)

**Pitch:** Kids, in the year 2026, your dad-ish friend Abhishek was building AI systems — and yes, it was going to be legendary.

**Voice (per-section assignment is locked):**
- **Ted's narrator voice as the default** — warm, retrospective, "Kids,…"
- **Barney bursts** for emphasis: catchphrases, confident one-liners, ALL CAPS
- **Lily's earnest sweetness** for soft notes (About openings, Contact warmth)
- **Marshall's earnestness or "Lawyered"** for closing arguments / wins
- **Robin's news-anchor delivery** for stats and metrics ("In tonight's top story…")
- **Tangents that almost matter** — very Ted

**Forbidden:**
- Anything Season 9 / finale-related
- Barney's pickup-artist Playbook content (the meta-concept of "The Playbook" is fine; the content isn't)
- Crazy/Hot scale or anything similar
- Ted's most pretentious moments said earnestly (only ironic uses)
- Cynical or grim — HIMYM is warm or it isn't HIMYM

**Reference phrases:**
"Kids, …" · "Legen — wait for it — dary" · "Suit up" · "Challenge accepted" · "True story" · "The Playbook" / "The Bro Code" (concept only) · "Lawyered" · "Have you met…" · "MacLaren's" / "Booth 3" · "But that's a story for another time"

---

## 6. Locked schema decisions

### Copy type ([src/content/copy.ts](src/content/copy.ts))

```ts
export const copy: { themeA: Copy; themeB: Copy } = { ... };
```

The `Copy` type forces both objects to have **identical keys**. Adding a key to one without the other fails TypeScript. This is the constraint that keeps the swap from drifting.

Notable absences (intentional): `contact.formName/Email/Message/Submit/Success/Error` and `currentBadge` on toggle. Don't re-add.

### Persona engine ([src/components/Persona.astro](src/components/Persona.astro))

```astro
<Persona field="hero.tagline" />
```

Renders **both theme strings** as siblings: `<span data-persona="A">…</span><span data-persona="B">…</span>`. CSS hides the inactive one based on `[data-theme]` on `<html>`. **No JS framework, no hydration, no client-side state.** View Transitions API wraps the visibility flip into a smooth crossfade.

This is the cleanest implementation we considered; don't refactor to a JS-state-based approach unless the user explicitly asks.

### Project MDX schema ([src/content/projects/_schema.ts](src/content/projects/_schema.ts))

Each project MDX file's frontmatter conforms to `ProjectFrontmatter`:
- `slug`, `order`, `tech[]`, `github?`, `liveDemo?`, `apiDocs?`
- `neutral`: `{ name, description, metrics: [{ label, value }] }`
- `themeA`: `{ projectId, name, tagline, description, metricLabels[] }`
- `themeB`: same as themeA + `boothBanter: BoothBanterEntry[]`

`BoothBanterEntry`:
```ts
{
  voice: "marshall" | "lily" | "robin" | "barney" | "ted";
  vintage?: string;  // PARENTHETICAL CONTENT ONLY (e.g. "post-bar exam"),
                     // renderer composes `${voice} (${vintage})`
  line: string;
}
```

### Letters from the Rookery ([src/content/letters.ts](src/content/letters.ts))

```ts
type Letter = {
  fromHouse: string;
  aboutProject: string;  // FREE STRING — matches a project slug (renders as link)
                         // or a free-form work-experience reference (renders as text)
  body: string;
  signOff?: string;
};
```

Currently 4 letters: House Lannister → nexus, House Stark → ecare-rag (work experience, no project file), House Tyrell → neurochat, House Targaryen → scale-vision.

---

## 7. Locked naming conventions

### Project IDs (decorative, on cards)

| Slug | order | themeA projectId | themeB projectId |
|---|---|---|---|
| nexus | 1 | ARC-I | PLAY-01 |
| neurochat | 2 | ARC-II | PLAY-02 |
| nutri-grade | 3 | ARC-III | PLAY-03 |
| scale-vision | 4 | ARC-IV | PLAY-04 |

- Maester convention: **ARC-I, ARC-II, …** ("Arcs of the Citadel's record"). Roman numerals reinforce the chronicle framing.
- Booth 3 convention: **PLAY-01, PLAY-02, …** ("Barney's Playbook," numbered).

When ScaleVision gets replaced (it's flagged as a placeholder), the new project keeps slot 4: ARC-IV / PLAY-04. Don't renumber existing projects.

### Project slugs (filenames)

Kebab-case, must match the MDX filename: `<slug>.mdx`.

### Vintage strings (Booth Banter)

Parenthetical content **only** ("post-bar exam"). Renderer composes `${voice} (${vintage})`. Don't store the character name in vintage.

---

## 8. Locked palettes (canonical to each show)

CSS variables in [src/styles/global.css](src/styles/global.css):

### Theme A — "Maester's study at night"

```
--bg:     #1c1f23   cold slate (dark stone library walls)
--fg:     #e8dcc0   warm parchment cream (candlelit text)
--accent: #c9913a   aged brass (the Maester's chain)
--muted:  #6b6760   dim stone
--border: rgba(232, 220, 192, 0.12)

--font-display: Cinzel / Cormorant Garamond / Georgia / serif
--font-body:    Cormorant Garamond / Georgia / serif
--font-mono:    Iosevka / JetBrains Mono / mono
```

### Theme B — "MacLaren's, last call"

```
--bg:     #1f1812   warm dark wood (bar paneling)
--fg:     #f4e8d0   booth cream (light reflecting off the booth)
--accent: #5fa8d3   sky blue (Blue French Horn / HIMYM title card)
--muted:  #7a6a5a   faded warm wood
--border: rgba(244, 232, 208, 0.12)

--font-display: Coolvetica / Bebas Neue / Helvetica Neue / sans
--font-body:    Inter / Helvetica Neue / system-ui / sans
--font-mono:    JetBrains Mono / Fira Code / mono
```

**Why both dark:** GOT is canonically grim/candlelit, MacLaren's is canonically dim/warm. Light themes would be technically faithful but visually weaker — neither show *feels* like a bright web page. The temperature inversion (cold A + warm accent / warm B + cool accent) is what makes them feel like opposites despite both being dark.

**First-visit default:** always Theme A (Maester) regardless of `prefers-color-scheme`. Both themes are dark, so OS-pref is no longer a useful signal. localStorage takes over from visit 2.

---

## 9. Mascots (locked)

In [src/components/Mascot.astro](src/components/Mascot.astro). Same DOM slot, persona-swapped via the same render-both/CSS-hide pattern as `<Persona>`.

| | Theme A | Theme B |
|---|---|---|
| Mascot | **Cream raven** silhouette (Citadel/proclamation white-raven canon) | **Blue French Horn** (HIMYM Blue French Horn + title card) |
| Animation | **Flies in once** on first reveal of A. Subsequent A-toggles → static. Motion One. | **Hover wobble** ±5° at 0.45s. CSS keyframes. |
| Reduced motion | Skip fly-in, appear in final position | **Disable wobble entirely** on hover |
| Mobile (<640px) | Hidden | Hidden |

---

## 10. Identity and contact

| | |
|---|---|
| Name | Venkata Abhishek Gullipalli (display: Abhishek Gullipalli) |
| Location | Houston, TX |
| Email (public) | abhishekgullipalli65@gmail.com |
| Phone | **NOT** on site |
| LinkedIn | https://www.linkedin.com/in/abhishek-gv/ |
| GitHub | https://github.com/Venkata1345 |
| X | https://x.com/OGambheera |
| Resume PDF | Will live at `public/resume.pdf` once dropped in. Currently missing → `astro.config.mjs` logs a warning at dev/build start; the link 404s but doesn't fail the build. |

---

## 11. Repo structure (annotated)

```
portfolio/
├── HANDOFF.md                         ← this file
├── CLAUDE.md                          ← auto-loaded; non-negotiable rules
├── astro.config.mjs                   ← Tailwind + resume-presence-check integration
├── package.json                       ← astro 5 / tailwind 4 / motion 11
├── tsconfig.json
├── _brief/                            ← source-of-truth working docs
│   ├── personas.md                    ← voice rules, signature easter-egg specs
│   ├── profile.md                     ← neutral identity, projects, bio, one-liner
│   ├── resume.md                      ← extracted resume content
│   ├── booth-banter-schema.md         ← Phase 2 prep schema (vintage = parenthetical only)
│   └── progress.md                    ← summary log (different from HANDOFF — that's history-by-phase)
└── src/
    ├── env.d.ts
    ├── content/
    │   ├── copy.ts                    ← ~106 UI strings, typed, both themes
    │   ├── letters.ts                 ← 4 Letters from the Rookery (themeA only)
    │   └── projects/
    │       ├── _schema.ts             ← ProjectFrontmatter + BoothBanterEntry
    │       ├── _template.mdx
    │       ├── nexus.mdx              ← ARC-I / PLAY-01
    │       ├── neurochat.mdx          ← ARC-II / PLAY-02
    │       ├── nutri-grade.mdx        ← ARC-III / PLAY-03
    │       └── scale-vision.mdx       ← ARC-IV / PLAY-04 (Lily absent)
    ├── components/
    │   ├── Persona.astro              ← the engine (render-both, CSS hide)
    │   ├── ThemeToggle.astro          ← global, fixed top-right, 44×44 min
    │   ├── Mascot.astro               ← raven (A) + french horn (B)
    │   └── Hero.astro                 ← full hero section
    ├── layouts/
    │   └── Base.astro                 ← HTML shell, theme init, toggle handler
    ├── pages/
    │   └── index.astro                ← currently just <Hero />
    └── styles/
        └── global.css                 ← all theme tokens
```

---

## 12. Git pattern

Each phase = a logical commit. Each Phase 4 section = its own commit. Per the user's preference, **no Co-Authored-By trailer** on commits.

Existing history:

```
99d92fd  phase 3: astro scaffold + theme/persona engine
0a3889b  phase 2: project MDX files + schema
8a4e9dd  phase 1: copy tables completed (buckets 4–6) + letters
9c767d2  Initial commit — Phase 0–1 buckets 1-3
```

Pending: Phase 4 hero commit (currently uncommitted in working tree).

---

## 13. When you start a fresh session

In order:

1. **Read [CLAUDE.md](CLAUDE.md)** (auto-loaded but verify it loaded).
2. **Read this HANDOFF.md** end-to-end.
3. **Read [_brief/personas.md](_brief/personas.md)** for full voice rules.
4. **Skim [src/content/copy.ts](src/content/copy.ts)** to see how the Copy type is structured and what's already locked.
5. **Run `git status`** to see uncommitted work.
6. **Run `git log --oneline`** to confirm phase boundaries.
7. **Start the dev server** (`$env:PATH = "C:\Program Files\nodejs;$env:PATH"; npm run dev`) to see the current state at http://localhost:4321/.
8. **Ask the user where to pick up.** Most likely: close out the Phase 4 Hero commit and move to About.

If you change anything voice-bearing, **never invent** — pull from the briefs or ask. R1 is the rule that gets violated most easily.

---

## 14. Open questions / decisions to surface when resuming

- **About transition design** — Rule B2 says about.bio swap should "earn a beat." Discuss with user before building (longer fade? char-by-char reveal? typewriter?).
- **Projects card hover** — propose tilt / parallax / reveal at the start of that section. Not yet decided.
- **`@astrojs/mdx` integration** — the projects MDX files exist but aren't rendered yet. Need to install `@astrojs/mdx` and define `src/content.config.ts` before the Projects section can render. Currently the dev server logs a non-blocking warning about auto-generated collections.
- **ScaleVision is a placeholder** — user intends to swap this project for a different one later. Keep the slot/order; expect new neutral content + reset of all themeA/themeB fields when swapped.
- **Resume PDF** — drop the actual PDF at `public/resume.pdf` before deploy.
- **Mailto address** — the user lives on `abhishekgullipalli65@gmail.com` for the public Contact link. Confirm before wiring into the Contact section.
