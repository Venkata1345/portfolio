/**
 * copy.ts — every UI string in the site, in both voices.
 *
 * Rules:
 *   - themeA = Maester / Citadel of Houston (default)
 *   - themeB = MacLaren's, Booth 3 (toggle)
 *   - The Copy type forces both objects to have IDENTICAL keys.
 *     If you add a field to one theme, TypeScript will fail until you add it to the other.
 *   - Project content lives in src/content/projects/*.mdx (Phase 2). Not here.
 *
 * Status legend in this file:
 *   "✓ <text>"  — final value, taken directly from the Phase 0 persona brief.
 *   "TBD: ..."  — placeholder. User must write voice copy. Listed at end of file too.
 */

// ─────────────────────────────────────────────────────────────────────
// Type — single source of truth for both themes' shape
// ─────────────────────────────────────────────────────────────────────

export type Copy = {
  meta: {
    universe: string;          // hero eyebrow / display universe label, often UPPERCASE
    pageTitle: string;         // browser tab title
    pageDescription: string;   // meta description for SEO + share cards
  };

  toggle: {
    toOther: string;           // button label that switches TO the other persona
    toOtherAria: string;       // a11y label for the toggle
    // currentBadge field intentionally removed — hero.eyebrow already names the
    // realm; a separate badge would be redundant. The toggle button itself can
    // show current state by virtue of saying where it goes.
  };

  nav: {
    hero: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    writing: string;
    blog: string;
    contact: string;
    resume: string;            // "Download Resume" equivalent
  };

  hero: {
    eyebrow: string;           // small label above name
    name: string;              // persona-flavored display name
    title: string;             // role line
    tagline: string;           // the one-liner, in voice
    primaryCta: string;
    primaryCtaHref: string;    // anchor target, e.g. "#contact"
    secondaryCta: string;
    secondaryCtaHref: string;
    scrollCue: string;         // "Read on" / "Continue down"
  };

  about: {
    sectionLabel: string;
    sectionTagline: string;
    bio: string;               // 2–4 sentences in voice
  };

  projects: {
    sectionLabel: string;
    sectionTagline: string;
    techLabel: string;         // "Forged with" / "Built with"
    viewLive: string;
    viewRepo: string;
    viewApi: string;
    noLivePlaceholder: string; // shown when a project has no live link
  };

  experience: {
    sectionLabel: string;
    sectionTagline: string;
    presentLabel: string;      // shown next to current role's date range
  };

  skills: {
    sectionLabel: string;
    sectionTagline: string;
    // Category HEADERS only get persona-flavored.
    // Technical items inside each bucket (Python, PyTorch, FastAPI, etc.) stay
    // untouched in both themes — recruiter legibility outranks voice.
    // Source list: see _brief/resume.md "Technical Skills".
    categories: {
      programming: string;
      ml: string;
      agents: string;
      cloud: string;
      math: string;
      compliance: string;
    };
  };

  writing: {
    sectionLabel: string;
    sectionTagline: string;
    empty: string;
  };

  blog: {
    sectionLabel: string;
    sectionTagline: string;
    empty: string;
    readMore: string;
  };

  contact: {
    sectionLabel: string;
    sectionTagline: string;
    emailLabel: string;        // "By raven, to:" / "Email me at:"
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formError: string;
  };

  signature: {
    // The easter-egg subsection.
    // themeA = "Letters from the Rookery"
    // themeB = "Booth Banter"
    sectionLabel: string;
    sectionTagline: string;
  };

  footer: {
    tagline: string;
    copyright: string;
    backToTop: string;
  };

  notFound: {
    title: string;
    body: string;
    cta: string;
  };

  misc: {
    loading: string;
    error: string;
    copyEmail: string;
    copied: string;
  };
};

// ─────────────────────────────────────────────────────────────────────
// Theme A — Maester / Citadel of Houston
// ─────────────────────────────────────────────────────────────────────

const themeA: Copy = {
  meta: {
    universe: "THE CITADEL OF HOUSTON",                 // ✓ derived from Phase 0
    pageTitle: "TBD: browser tab title in Maester voice",
    pageDescription: "TBD: SEO/share-card description in Maester voice (~155 chars)",
  },

  toggle: {
    toOther: "To the alehouse beyond",
    toOtherAria: "Switch to the modern, casual version of this site",
  },

  nav: {
    // Short nav labels. Full section headers live in each section's `sectionLabel`.
    hero: "Hall",
    about: "Words",
    projects: "Records",
    experience: "Service",
    skills: "Chain",
    writing: "Archives",
    blog: "Scrolls",
    contact: "Raven",
    resume: "Dossier",
  },

  hero: {
    eyebrow: "MAESTER OF THE CITADEL",
    name: "Maester Abhishek of House Gullipalli",
    title: "Forger of chains in the arts of inference and memory",
    tagline: "I take the tomes of the Citadel and forge them into systems that hold their watch through the long night.",
    primaryCta: "Read the chronicle",
    primaryCtaHref: "#projects",
    secondaryCta: "Take the dossier",
    secondaryCtaHref: "/resume.pdf",
    scrollCue: "Read on",
  },

  about: {
    sectionLabel: "Words of House Gullipalli",            // ✓ from Phase 0
    sectionTagline: "Of links forged and oaths kept",
    bio: "A Maester's work is rarely the work the realm sees. The crowds remember the model that speaks; I remember the eval framework that keeps it honest, the safety wards that catch what should not be said, and the ingestion pipelines that lose no scroll between binding and shelf. Four years sworn to healers, merchants, and scholars have taught me the interesting work begins after the model is good — that most of my oaths begin with the same words: this must not hallucinate in production.",
  },

  projects: {
    sectionLabel: "The Maester's Records",                // ✓ from Phase 0 (alt: 'Annals of Service')
    sectionTagline: "TBD: sub-header",
    techLabel: "TBD: e.g. 'Forged with'",
    viewLive: "TBD: e.g. 'Visit the works'",
    viewRepo: "TBD: e.g. 'Read the scroll'",
    viewApi: "TBD: e.g. 'The Archmaester's notes' (API docs link label)",
    noLivePlaceholder: "TBD: e.g. 'Held within the Citadel'",
  },

  experience: {
    sectionLabel: "Sworn Service",                        // ✓ from Phase 0 (alt: 'Banners Raised')
    sectionTagline: "TBD: sub-header",
    presentLabel: "TBD: e.g. 'Currently sworn' or 'Present'",
  },

  skills: {
    sectionLabel: "The Maester's Chain",                  // ✓ from Phase 0
    sectionTagline: "TBD: sub-header",
    categories: {
      // Resume groups skills into 6 categories. Each needs a Maester-voice name.
      programming: "TBD: name for 'Programming & Data Engineering' link of the chain",
      ml: "TBD: name for 'Machine Learning & NLP' link",
      agents: "TBD: name for 'AI & Conversational Agents' link",
      cloud: "TBD: name for 'Cloud, Deployment & Infrastructure' link",
      math: "TBD: name for 'Applied Math & Statistics' link",
      compliance: "TBD: name for 'Compliance, Collaboration & Soft Skills' link",
    },
  },

  writing: {
    sectionLabel: "The Citadel Archives",                 // ✓ from Phase 0
    sectionTagline: "TBD: sub-header",
    empty: "TBD: empty-state copy (e.g. 'The shelves await new tomes')",
  },

  blog: {
    sectionLabel: "Scrolls from the Tower",               // ✓ from Phase 0
    sectionTagline: "TBD: sub-header",
    empty: "TBD: empty-state copy",
    readMore: "TBD: 'read more' link label",
  },

  contact: {
    sectionLabel: "Send a Raven",                         // ✓ from Phase 0
    sectionTagline: "TBD: sub-header",
    emailLabel: "TBD: e.g. 'By raven, to:'",
    formName: "TBD: name field label",
    formEmail: "TBD: email field label",
    formMessage: "TBD: message field label",
    formSubmit: "TBD: submit button label",
    formSuccess: "TBD: success message",
    formError: "TBD: error message",
  },

  signature: {
    sectionLabel: "Letters from the Rookery",             // ✓ from Phase 0
    sectionTagline: "TBD: sub-header (e.g. 'Word from the houses of the realm')",
  },

  footer: {
    tagline: "Sworn to serve the realm. — Maester A.",    // ✓ from Phase 0
    copyright: "TBD: e.g. '© 2026, by my oath. House Gullipalli.'",
    backToTop: "TBD: 'back to top' label",
  },

  notFound: {
    title: "This page took the black",                    // ✓ from Phase 0
    body: "TBD: 1–2 sentence body copy for the 404",
    cta: "TBD: 'return home' button label",
  },

  misc: {
    loading: "TBD: e.g. 'The ravens are in flight…'",
    error: "TBD: generic error fallback",
    copyEmail: "TBD: 'copy email' button label",
    copied: "TBD: 'copied!' confirmation",
  },
};

// ─────────────────────────────────────────────────────────────────────
// Theme B — MacLaren's, Booth 3
// ─────────────────────────────────────────────────────────────────────

const themeB: Copy = {
  meta: {
    universe: "MACLAREN'S, BOOTH 3",                      // ✓ derived from Phase 0
    pageTitle: "TBD: browser tab title in Ted-narrator voice",
    pageDescription: "TBD: SEO/share-card description in Ted voice (~155 chars)",
  },

  toggle: {
    toOther: "To the medieval bit",
    toOtherAria: "Switch to the formal, fantasy version of this site",
  },

  nav: {
    // Short nav labels. Full section headers live in each section's `sectionLabel`.
    hero: "Booth 3",
    about: "The Story",
    projects: "Playbook",
    experience: "Highlights",
    skills: "Skills",
    writing: "Articles",
    blog: "Notes",
    contact: "Met Me?",
    resume: "Resume",
  },

  hero: {
    eyebrow: "BOOTH 3 · TUESDAY NIGHT",
    name: "Abhishek (the architect)",
    // Hybrid tense: framing/eyebrow/bio are Future-Ted past-tense, but role facts (title, tagline) stay
    // present-tense so recruiters don't read "was an AI engineer" and assume he isn't one anymore.
    title: "Builds AI systems by day. Tells the story at MacLaren's by night.",
    tagline: "Kids — true story — I'm the guy who turns research-grade models into systems that don't break at 3am.",
    primaryCta: "See the Playbook",
    primaryCtaHref: "#projects",
    secondaryCta: "Grab the resume",
    secondaryCtaHref: "/resume.pdf",
    scrollCue: "Wait for it…",
  },

  about: {
    sectionLabel: "Kids, Here's How It Started",          // ✓ from Phase 0
    sectionTagline: "Kids, the unglamorous version is the real one",
    bio: "Kids, your dad-ish friend Abhishek is the guy who builds the parts nobody puts in the demo — the eval framework, the safety rails, the ingestion pipeline that doesn't lose pages. Four years in healthcare, CRM, and research have taught him the interesting work starts after the model is good. Most of his projects begin with the same line: this must not hallucinate in production. — True story.",
  },

  projects: {
    sectionLabel: "The Playbook: Legendary Stories",      // ✓ from Phase 0
    sectionTagline: "TBD: sub-header",
    techLabel: "TBD: e.g. 'Built with'",
    viewLive: "TBD: e.g. 'See it live'",
    viewRepo: "TBD: e.g. 'See the source'",
    viewApi: "TBD: e.g. 'API docs'",
    noLivePlaceholder: "TBD: e.g. 'Internal only — but trust me, it was legendary'",
  },

  experience: {
    sectionLabel: "The Highlight Reel",                   // ✓ from Phase 0 (alt: 'Past Jobs, Pre-Architect Era')
    sectionTagline: "TBD: sub-header (Ted intro)",
    presentLabel: "TBD: e.g. 'Currently' or 'Still telling this one'",
  },

  skills: {
    sectionLabel: "Things I'm Annoyingly Good At",        // ✓ from Phase 0
    sectionTagline: "TBD: sub-header (Barney+Robin blend)",
    categories: {
      programming: "TBD: name for the 'Programming & Data Engineering' bucket in Ted/Barney voice",
      ml: "TBD: name for 'Machine Learning & NLP'",
      agents: "TBD: name for 'AI & Conversational Agents'",
      cloud: "TBD: name for 'Cloud, Deployment & Infrastructure'",
      math: "TBD: name for 'Applied Math & Statistics'",
      compliance: "TBD: name for 'Compliance, Collaboration & Soft Skills'",
    },
  },

  writing: {
    sectionLabel: "Articles I Made the Gang Read",        // ✓ from Phase 0
    sectionTagline: "TBD: sub-header (Ted)",
    empty: "TBD: empty-state copy",
  },

  blog: {
    sectionLabel: "Booth Notes",                          // ✓ from Phase 0
    sectionTagline: "TBD: sub-header (Ted)",
    empty: "TBD: empty-state copy",
    readMore: "TBD: 'read more' link label",
  },

  contact: {
    sectionLabel: "Haaaave You Met Me?",                  // ✓ from Phase 0
    sectionTagline: "TBD: sub-header (Barney)",
    emailLabel: "TBD: e.g. 'Email me at:'",
    formName: "TBD: name field label",
    formEmail: "TBD: email field label",
    formMessage: "TBD: message field label",
    formSubmit: "TBD: submit button label",
    formSuccess: "TBD: success message",
    formError: "TBD: error message",
  },

  signature: {
    sectionLabel: "Booth Banter",                         // ✓ from Phase 0
    sectionTagline: "TBD: sub-header (the gang reacts)",
  },

  footer: {
    tagline: "True story. — Ted-ish, A.",                 // ✓ from Phase 0
    copyright: "TBD: e.g. '© 2026. True story.'",
    backToTop: "TBD: 'back to top' label",
  },

  notFound: {
    title: "...and that's not how I met your page",       // ✓ from Phase 0
    body: "TBD: 1–2 sentence body copy for the 404",
    cta: "TBD: 'return home' button label",
  },

  misc: {
    loading: "TBD: e.g. 'Wait for it…'",
    error: "TBD: generic error fallback",
    copyEmail: "TBD: 'copy email' button label",
    copied: "TBD: 'copied!' confirmation",
  },
};

// ─────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────

export const copy = { themeA, themeB } as const;

export type ThemeKey = keyof typeof copy;
