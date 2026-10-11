/**
 * Garden sections and note growth stages.
 *
 * Each note's frontmatter declares which garden it belongs to (`garden`) and
 * how mature it is (`stage`). Adding a garden here creates its listing page at
 * `/<slug>/` automatically; add a matching nav link in `Header.astro`.
 */

export const GARDENS = {
  tech: {
    title: "Tech",
    description:
      "Notes on software engineering, architecture, tooling and work life.",
  },
  interests: {
    title: "Interests",
    description: "Notes on hobbies and everything else I find interesting.",
  },
} as const;

export type GardenSlug = keyof typeof GARDENS;

export const GARDEN_SLUGS = Object.keys(GARDENS) as [
  GardenSlug,
  ...GardenSlug[],
];

export const STAGES = {
  seedling: {
    emoji: "🌱",
    label: "Seedling",
    description: "A rough idea, recently planted.",
  },
  budding: {
    emoji: "🌿",
    label: "Budding",
    description: "Taking shape, still being refined.",
  },
  evergreen: {
    emoji: "🌳",
    label: "Evergreen",
    description: "Mature and reasonably complete.",
  },
} as const;

export type Stage = keyof typeof STAGES;

export const STAGE_KEYS = Object.keys(STAGES) as [Stage, ...Stage[]];
