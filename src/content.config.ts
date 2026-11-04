import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un post = src/content/blog/es/<slug>.md + src/content/blog/en/<slug>.md (mismo slug)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

// Opcional: src/content/projects/<lang>/<slug>.md agrega contenido largo a /projects/<slug>/
// Sin frontmatter: los metadatos viven en src/data/projects.ts
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({}),
});

export const collections = { blog, projects };
