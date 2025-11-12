import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsImages = defineCollection({
  loader: glob({ pattern: "**/*.png", base: "./" }),
});

export const collections = { projects: projectsImages };
