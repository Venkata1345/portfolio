# Persona Briefs

Two complete personas. Theme toggle swaps the entire site between them — copy, section names, signature easter-egg subsections.

---

## Persona A — Game of Thrones (default)

**Universe**: The Citadel of Houston (House Gullipalli, Sworn to the Citadel)

**Pitch**: Inside this universe, I am Maester Abhishek of the Citadel, forging links of knowledge in service of the realm.

### Voice characteristics
- Formal and elevated, but never faux-Shakespearean
- Frames work as "service," "duty," "oath"
- Uses "the realm," "the chain," "by my oath"
- Treats systems as arcane: tomes, scrolls, archives, sigils
- Slightly grave but not edgy — a scholar's voice, not a warrior's
- Confident through restraint, never boastful
- Knowledge is the currency

### Forbidden phrases
- "Methinks / verily / forsooth"
- "Thee / thou" pronouns
- Modern corporate speak ("synergy," "leverage," "stakeholder")
- "You know nothing" used as a punchline (overdone meme)
- Self-aware winks at the audience

### Reference phrases (lift verbatim, sprinkled as texture)
- "Winter is coming"
- "Valar Morghulis" / "Valar Dohaeris"
- "Send a raven"
- "By the old gods and the new"
- "A Maester's chain"
- "Sworn service"
- "Words are wind"
- "The realm"
- "Hand of the King"
- "The Citadel"

### Section labels
| Section | A-side label |
|---|---|
| Hero | The Great Hall |
| About | Words of House Gullipalli |
| Projects | The Maester's Records (or: "Annals of Service") |
| Experience | Sworn Service (or: "Banners Raised") |
| Skills | The Maester's Chain |
| Publications/Writing | The Citadel Archives |
| Contact | Send a Raven |
| Blog | Scrolls from the Tower |
| Footer tagline | "Sworn to serve the realm. — Maester A." |
| 404 | "This page took the black" |

### Signature easter-egg subsection
**"Letters from the Rookery"** — 3–4 fictional ravens received from named houses commenting on your work. Equivalent of Sai's "Team Radio."
Example: *"From House Lannister: Maester, the Doc Intel system has restored honor to our ledgers. Send word of your fee."*

---

## Persona B — HIMYM Mixed (toggle)

**Universe**: MacLaren's, Booth 3

**Pitch**: Kids, in the year 2026, your dad-ish friend Abhishek was building AI systems — and yes, it was going to be legendary.

### Voice characteristics
- Ted's narrator voice as the default — warm, slightly nostalgic, "Kids,..." framing
- Barney bursts in for emphasis: catchphrases, Plays, confident one-liners
- Lily's earnest sweetness occasionally for the softer notes (About section, Contact)
- Marshall's earnestness or "Lawyered" for closing arguments / wins
- Robin's news-anchor delivery for stats and metrics ("In tonight's top story...")
- Tangents that almost matter — very Ted
- Catchphrases as punctuation, not centerpieces
- Italics for dramatic pauses
- **Tense framing**: full retrospective — Future-Ted's voice, past tense throughout. Don't blink.

### Forbidden phrases
- Anything Season 9 / finale-related
- Barney's pickup-artist Playbook content (the meta-concept of "The Playbook" is fine; the actual content isn't)
- Crazy/Hot scale or anything similar
- Ted's most pretentious moments ("I'm an architect" said earnestly — only ironic uses)
- Cynical or grim — HIMYM is warm or it isn't HIMYM

### Reference phrases (lift verbatim)
- "Kids, ..." (Ted framing)
- "Legen — wait for it — dary" (Barney)
- "Suit up" (Barney)
- "Challenge accepted" (Barney)
- "True story" (Barney/Ted both)
- "The Playbook" / "The Bro Code" (Barney concepts only, not content)
- "Lawyered" (Marshall, occasionally)
- "Have you met..." (Barney intro)
- "MacLaren's" / "Booth 3"
- "But that's a story for another time" (Ted's signature dodge)

### Section labels
| Section | B-side label | Whose voice |
|---|---|---|
| Hero | MacLaren's, Booth 3 | Ted framing, Barney CTA |
| About | Kids, Here's How It Started | Ted (with one Barney aside) |
| Projects | The Playbook: Legendary Stories | Ted intro, Barney plays inside |
| Experience | The Highlight Reel (or: "Past Jobs, Pre-Architect Era") | Mostly Ted, Barney bullet points |
| Skills | Things I'm Annoyingly Good At | Barney with Robin's metrics delivery |
| Publications/Writing | Articles I Made the Gang Read | Ted |
| Contact | Haaaave You Met Me? | Barney |
| Blog | Booth Notes | Ted |
| Footer tagline | "True story. — Ted-ish, A." | Ted+Barney blend |
| 404 | "...and that's not how I met your page" | Ted |

### Signature easter-egg subsection
**"Booth Banter"** — short reactions to your projects from each of the gang. Each character gets a clear voice:
- **Marshall (lawyer)**: pedantic legal-style commentary on compliance work
- **Lily (kindergarten teacher)**: wholesome takes on the medical AI
- **Robin (news anchor)**: stat-heavy reactions to performance metrics
- **Barney**: declares each project "legendary" with escalating absurdity
- **Ted**: narrates the whole thing in past tense

Each gets 1–2 lines per project. ~20–40 strings total for this section alone.

**Rule — Lily skips ScaleVision.** Pure infra has nothing wholesome to land on. Lily's silence on that one card is a feature: she gets a single meta line referencing the skip ("I don't really get this one, but Marshall says it's impressive"), which is on-brand. Don't force wholesomeness on infra.

---

## Cross-bucket voice rules (locked during Bucket 1)

These were called out as the persona prose landed. Apply them anywhere they fit, don't dilute.

### Rule A1 — "The long night" is a Maester motif
"Holds their watch through the long night" appears in `themeA.hero.tagline`. This is a voice motif, not a one-off. **Reuse intentionally** in:
- `themeA.notFound.body` — the page that "took the black" connects to "the long night"
- `themeA.footer` — closing line could echo the watch
- `themeA.experience.sectionTagline` or `presentLabel` — "still standing the night watch" for current role
- Anywhere a *vigilance / endurance / unglamorous-work* idea needs naming

Don't sprinkle elsewhere — these are the load-bearing reuses. Overuse = dilution.

### Rule B1 — Hybrid tense for Theme B
Future-Ted past-tense applies to **framing** (eyebrow, narrator interjections, bio opener "your dad-ish friend Abhishek is/was…", retrospective transitions) but **role facts stay present-tense** (title, tagline, current role descriptions, skill claims).

**Reason**: a recruiter reading "was an AI engineer" assumes he isn't one anymore. Future-Ted can talk about a currently-active person — the *narrator* is in the future, the *subject* is in the present.

**How to apply**: when writing a Theme B string, ask "is this Ted setting up the story (past) or stating who Abhishek is right now (present)?" — let the answer pick the tense.

### Rule X1 — Cross-persona references: narrator awkwardly pointing at the other
The site's premise is *one person, two narrators*. Whenever a string in one persona has to refer to the other universe (toggle button, easter-eggs, anywhere else), the rule is **wrong-voice-on-the-right-thing**: the narrator attempts to describe the other in their own register, and the friction is the joke.

- Maester referring to MacLaren's = "the alehouse beyond" / "Abhishek's other self" — *not* the literal name, *not* a pure GOT translation either. Acknowledges "I don't quite get it."
- Ted referring to the Citadel = "the medieval bit" / "the fantasy one" — *not* "Castle Black" or any GOT term. Ted has no reason to know that vocabulary.

**How to apply**: any string where one persona points at the other (toggles, meta-jokes, easter-egg cameos, 404 cross-references). Don't fully translate; don't fully name. Each narrator stays in voice, treats the other as a thing they vaguely register.

### Rule B2 — `about.bio` is the heaviest swap moment
The longest string in the file, and the one where personas diverge most. Phase 3 (build) implication: the swap animation between A and B should land hardest on this paragraph. Consider: longer fade, character-by-character reveal, or a typewriter effect just for the bio. Other strings can swap instantly; the bio earns a beat.

Not a writing rule — a design rule. Logged here so it survives to Phase 3.
