import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectMetric = z.object({
  label: z.string(),
  value: z.string(),
});

const boothBanterEntry = z.object({
  voice: z.enum(["marshall", "lily", "robin", "barney", "ted"]),
  vintage: z.string().optional(),
  line: z.string(),
});

const projectThemeBlock = z.object({
  projectId: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  metricLabels: z.array(z.string()),
});

const projects = defineCollection({
  // Exclude `_*.mdx` so the authoring template (with TBD placeholders)
  // doesn't fail schema validation alongside real project entries.
  loader: glob({ pattern: ["*.mdx", "!_*.mdx"], base: "./src/content/projects" }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    liveDemo: z.string().url().optional(),
    apiDocs: z.string().url().optional(),
    neutral: z.object({
      name: z.string(),
      description: z.string(),
      metrics: z.array(projectMetric),
    }),
    themeA: projectThemeBlock,
    themeB: projectThemeBlock.extend({
      boothBanter: z.array(boothBanterEntry),
    }),
  }),
});

export const collections = { projects };
