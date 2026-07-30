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
    mailtoLabel: string;       // visible text on the mailto: link (voiced)
    // Form fields intentionally absent — contact is mailto-only, no form.
    // No emailLabel prefix either — the section header alone provides context.
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
    /** Persistent Resume link — neutral label "Resume" in BOTH themes.
     *  Locked: never voice-flavor this. Recruiters need the literal word. */
    resumeLink: string;
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
    pageTitle: "Abhishek Gullipalli — AI/ML Engineer, sworn to the Citadel",
    pageDescription: "AI/ML engineer building the unglamorous parts of production AI — eval frameworks, safety rails, ingestion pipelines that hold through the long night.",
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
    sectionTagline: "The chronicles, kept honestly.",
    techLabel: "Forged with",                             // split-voice (Maester side)
    viewLive: "View live demo",                           // 5b-neutral
    viewRepo: "View source",                              // 5b-neutral
    viewApi: "API docs",                                  // 5b-neutral
    noLivePlaceholder: "Held within the Citadel walls",
  },

  experience: {
    sectionLabel: "Sworn Service",                        // ✓ from Phase 0 (alt: 'Banners Raised')
    sectionTagline: "Houses served, watches kept, oaths still standing.",
    presentLabel: "Currently sworn",
  },

  skills: {
    sectionLabel: "The Maester's Chain",                  // ✓ from Phase 0
    sectionTagline: "The links of the chain, each its own craft.",
    // Pattern: every Maester header opens with "Of [domain] and [related domain]."
    // Cohesion through grammar, not through repeating "link." The Chain framing
    // lives only at the section level.
    categories: {
      programming: "Of letters and ledgers",
      ml: "Of inference and proof",
      agents: "Of speech with familiars",
      cloud: "Of wards and watchtowers",
      math: "Of numbers and auguries",
      compliance: "Of oaths and witnesses",
    },
  },

  writing: {
    sectionLabel: "The Citadel Archives",                 // ✓ from Phase 0
    sectionTagline: "What few scrolls have left the tower.",
    empty: "Coming soon.",                                // 5b-neutral
  },

  blog: {
    sectionLabel: "Scrolls from the Tower",               // ✓ from Phase 0
    sectionTagline: "Notes from the rookery, when the watch is quiet.",
    empty: "Coming soon.",                                // 5b-neutral
    readMore: "Read the scroll",
  },

  contact: {
    sectionLabel: "Send a Raven",                         // ✓ from Phase 0
    sectionTagline: "The Citadel keeps no closed doors. Reach me by raven.",
    mailtoLabel: "Send word →",
  },

  signature: {
    sectionLabel: "Letters from the Rookery",             // ✓ from Phase 0
    sectionTagline: "What the realm has said of the work.",
  },

  footer: {
    tagline: "Sworn to serve the realm. — Maester A.",    // ✓ from Phase 0
    copyright: "© 2026 House Gullipalli. Sworn through the long night.",
    backToTop: "Back to top",                             // 5b-neutral
    resumeLink: "Resume",                                 // neutral, identical across themes
  },

  notFound: {
    title: "This page took the black",                    // ✓ from Phase 0
    body: "This page took the black and rides now beyond the Wall. The long night came for it before its watch had ended.",
    cta: "Return to the Citadel",
  },

  misc: {
    loading: "Loading…",                                  // 5b-neutral
    error: "Something went wrong.",                       // 5b-neutral
    copyEmail: "Copy email",                              // 5b-neutral
    copied: "Copied",                                     // 5b-neutral
  },
};

// ─────────────────────────────────────────────────────────────────────
// Theme B — MacLaren's, Booth 3
// ─────────────────────────────────────────────────────────────────────

const themeB: Copy = {
  meta: {
    universe: "MACLAREN'S, BOOTH 3",                      // ✓ derived from Phase 0
    pageTitle: "Abhishek Gullipalli — AI/ML Engineer (also: a guy at MacLaren's)",
    pageDescription: "Kids, this is Abhishek — an AI/ML engineer who builds the parts nobody puts in the demo. Eval frameworks, safety rails, pipelines that hold at 3am.",
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
    bio: "Kids, your dad-ish friend Abhishek is the guy who builds the parts nobody puts in the demo — the eval framework, the safety rails, the ingestion pipeline that doesn't lose pages. Four years in healthcare, financial services, and research have taught him the interesting work starts after the model is good. Most of his projects begin with the same line: this must not hallucinate in production. — True story.",
  },

  projects: {
    sectionLabel: "The Playbook: Legendary Stories",      // ✓ from Phase 0
    sectionTagline: "Kids, every one of these has a story. Some are even legendary.",
    techLabel: "Built with",                              // split-voice (Ted side)
    viewLive: "View live demo",                           // 5b-neutral
    viewRepo: "View source",                              // 5b-neutral
    viewApi: "API docs",                                  // 5b-neutral
    noLivePlaceholder: "You had to be there.",
  },

  experience: {
    sectionLabel: "The Highlight Reel",                   // ✓ from Phase 0 (alt: 'Past Jobs, Pre-Architect Era')
    sectionTagline: "The places that hired me before this place did.",
    presentLabel: "Currently",
  },

  skills: {
    sectionLabel: "Things I'm Annoyingly Good At",        // ✓ from Phase 0
    sectionTagline: "The list got long. Suit up.",
    // Register: 5 Barney-swagger headers + 1 Robin-newsroom spike on Compliance for contrast.
    // Marshall/Lily/Ted voices live in the Booth Banter easter egg, not at this layer.
    // Render exactly as typed: em-dash in "(Legen — dary)" and "The Math, Yes The Math"
    // capitalization are intentional. No text-transform; no smart-quote conversion.
    categories: {
      programming: "The Plumbing Bit (Legen — dary)",
      ml: "Models I Have Bent To My Will",
      agents: "The Ones That Talk Back",
      cloud: "Where The Magic Lives Rent-Free",
      math: "The Math, Yes The Math",
      compliance: "In Tonight's Top Story: Compliance",
    },
  },

  writing: {
    sectionLabel: "Articles I Made the Gang Read",        // ✓ from Phase 0
    sectionTagline: "Things the gang actually finished reading.",
    empty: "Coming soon.",                                // 5b-neutral
  },

  blog: {
    sectionLabel: "Booth Notes",                          // ✓ from Phase 0
    sectionTagline: "Notes scribbled at Booth 3, between rounds.",
    empty: "Coming soon.",                                // 5b-neutral
    readMore: "Keep reading",
  },

  contact: {
    sectionLabel: "Haaaave You Met Me?",                  // ✓ from Phase 0
    sectionTagline: "Have you met me? You're about to. Challenge accepted.",
    mailtoLabel: "Drop a line →",
  },

  signature: {
    sectionLabel: "Booth Banter",                         // ✓ from Phase 0
    sectionTagline: "Kids, this is what the gang had to say.",
  },

  footer: {
    tagline: "True story. — Ted-ish, A.",                 // ✓ from Phase 0
    copyright: "© 2026 Abhishek Gullipalli. Built in Booth 3.",
    backToTop: "Back to top",                             // 5b-neutral
    resumeLink: "Resume",                                 // neutral, identical across themes
  },

  notFound: {
    title: "...and that's not how I met your page",       // ✓ from Phase 0
    body: "Kids, somewhere along the way this page got lost. But that's a story for another time.",
    cta: "Back to Booth 3",
  },

  misc: {
    loading: "Loading…",                                  // 5b-neutral
    error: "Something went wrong.",                       // 5b-neutral
    copyEmail: "Copy email",                              // 5b-neutral
    copied: "Copied",                                     // 5b-neutral
  },
};

// ─────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────

export const copy = { themeA, themeB } as const;

export type ThemeKey = keyof typeof copy;
