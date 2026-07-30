/**
 * letters.ts — Letters from the Rookery (themeA only)
 *
 * Curated correspondence received from named houses of the realm. Each letter
 * comments on one specific piece of work — either a project or a work-experience
 * role. Renders inside the "Letters from the Rookery" easter-egg subsection
 * when themeA is active; not shown in themeB.
 *
 * Section header + tagline live in `copy.ts` (`themeA.signature`).
 * Content lives here.
 *
 * `aboutProject` is a free string, intentionally NOT constrained to the project
 * slug union. The renderer's contract:
 *   - If `aboutProject` matches an existing project slug (e.g. "nexus"), the
 *     letter renders with the project name as a clickable link.
 *   - Otherwise (e.g. "optum-rag", a work-experience reference), it renders as
 *     plain text — no broken link.
 *
 * Houses give projects their own in-universe names — letter bodies are not
 * required to use the canonical project name. Only the `aboutProject` slug is
 * canonical (for routing).
 */

export type Letter = {
  fromHouse: string;
  /** Project slug if it matches a project file; free-form work-experience reference otherwise. */
  aboutProject: string;
  body: string;
  signOff?: string;
};

export const letters: Letter[] = [
  {
    fromHouse: "House Lannister",
    aboutProject: "nexus",
    body: "Maester, the Doc Intel system you forged for our customer-support arm has restored sense to our refund ledgers — every coin now accounted for, every approval witnessed by a hand of flesh before it leaves the vault. The Lord Commander of Coin sleeps for the first time in three moons. Send word of your fee.",
    signOff: "— Lord Tywin, by raven, sealed in gold",
  },
  {
    fromHouse: "House Stark",
    aboutProject: "optum-rag",
    body: "Maester, the work you do in the realm of healers does not go unnoticed in the North. A system that refuses to invent what it does not know — that flags its own uncertainty before it speaks — is rare, and rarer still in the southern courts. We have long held that the man who passes the sentence should swing the sword. Your evaluation framework appears to honor the same principle. The North remembers.",
    signOff: "— Lord Stark, Warden of the North",
  },
  {
    fromHouse: "House Tyrell",
    aboutProject: "neurochat",
    body: "Maester, your conversational system arrived at Highgarden in the autumn and has yet to lose its bloom. The dialogue keeps its thread across many turns — a feat we associate with skilled courtiers, not with constructs of glass and number. Grandmother says it is almost charming. From her, this is praise of an order rarely granted. Do come south when the work is quiet.",
    signOff: "— Lady Olenna, with the usual reservations",
  },
  {
    fromHouse: "House Targaryen",
    aboutProject: "scale-vision",
    body: "Maester, we hear of a system that grows larger when the realm grows louder — that summons more of itself to meet the demand, then sleeps again when the storm passes. This is a kind of quiet fire. We have long looked for craftsmen who understand that power must scale to its purpose, neither hoarded nor wasted. Should you ever wish to forge such systems for a House with greater ambitions, send a raven across the narrow sea.",
    signOff: "— Daenerys of House Targaryen, Breaker of Chains",
  },
];
