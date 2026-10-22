import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Project case studies: one .md or .mdx file per project in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kicker: z.string(),
    date: z.string(),
    team: z.string().optional(),
    role: z.string().optional(),
    stack: z.array(z.string()),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { projects };
