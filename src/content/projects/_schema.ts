/**
 * Project frontmatter schema (Phase 2).
 *
 * Each project's MDX file at src/content/projects/<slug>.mdx carries a
 * frontmatter block conforming to ProjectFrontmatter. The MDX body (below the
 * `---` block) is reserved for long-form content if needed; the persona-flavored
 * descriptions live in frontmatter so they're trivially queryable and can be
 * theme-swapped without re-rendering the body.
 *
 * Runtime validation will be added when the tech stack is chosen (Astro
 * content-collections / Zod, contentlayer, etc.). Until then, this file is the
 * authoring contract.
 */

// ─────────────────────────────────────────────────────────────────────
// Atomic types
// ─────────────────────────────────────────────────────────────────────

/** A neutral metric — value stays the same across themes; label is reframed per theme. */
export type ProjectMetric = {
  /** Recruiter-legible default label. */
  label: string;
  /** The actual number / score / status. */
  value: string;
};

/** One entry in the per-project Booth Banter array (themeB only). */
export type BoothBanterEntry = {
  /** Constrained to the fixed gang. Typo = build fails. */
  voice: "marshall" | "lily" | "robin" | "barney" | "ted";
  /**
   * Optional disambiguator for which *era* of the character is speaking.
   * Stored as the parenthetical content ONLY — character name comes from `voice`.
   * The renderer composes the full attribution: `${voice} (${vintage})`.
   *
   * Examples (just the parenthetical):
   *   "post-bar exam"
   *   "Channel One newsdesk"
   *   "post-Slap Bet, pre-Lawyered"
   *   "morning-traffic report"
   */
  vintage?: string;
  /** 1–2 sentences in that character's voice. */
  line: string;
};

// ─────────────────────────────────────────────────────────────────────
// Per-theme block
// ─────────────────────────────────────────────────────────────────────

export type ProjectThemeBlock = {
  /**
   * Decorative project ID rendered as a card eyebrow.
   * themeA convention: e.g. "I" / "II" / "ARC-I" / "OATH-01" — Maester / Citadel-style.
   * themeB convention: e.g. "PLAY-01" / "BOOTH-01" — Playbook-style.
   */
  projectId: string;

  /** Display name. May match `neutral.name` or be reframed in voice. */
  name: string;

  /** One-line tagline in voice. ~5–12 words. */
  tagline: string;

  /** Persona-flavored description, ~2–5 sentences in voice. */
  description: string;

  /**
   * Per-theme labels for the metrics in `neutral.metrics`. Same length and order
   * as `neutral.metrics`. The `value` carries through unchanged; only the label
   * gets persona-flavored.
   */
  metricLabels: string[];
};

// ─────────────────────────────────────────────────────────────────────
// Frontmatter
// ─────────────────────────────────────────────────────────────────────

export type ProjectFrontmatter = {
  /** URL slug, kebab-case. Must match the filename: `<slug>.mdx`. */
  slug: string;

  /** Display order in the Projects section. Lower = earlier. */
  order: number;

  /** Tech tags shown on the card. Recruiter-facing — keep technical and untouched. */
  tech: string[];

  // Links (all optional except wherever a project has them)

  /** Public repo URL. Omit if private. */
  github?: string;

  /** Live demo URL. Omit if no live demo. */
  liveDemo?: string;

  /** API docs URL. Omit if not applicable. */
  apiDocs?: string;

  /**
   * Neutral baseline content. The recruiter's anchor reading.
   * Used as the source of truth that both themes reframe.
   */
  neutral: {
    name: string;
    /** 1–2 sentence neutral pitch. */
    description: string;
    /** 1–4 metrics; the same metrics render under both themes with relabeled headers. */
    metrics: ProjectMetric[];
  };

  /** Maester / Citadel reframing. */
  themeA: ProjectThemeBlock;

  /** MacLaren's / Booth 3 reframing, plus the Booth Banter easter-egg content. */
  themeB: ProjectThemeBlock & {
    /**
     * 4–5 reactions from the gang. Omit any character that has nothing real to say
     * for this project (Lily on ScaleVision is the locked example).
     * Order in the array is the default render order.
     */
    boothBanter: BoothBanterEntry[];
  };
};
