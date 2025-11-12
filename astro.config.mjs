// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === "production" ? "https://www.lignumelement.com" : undefined,
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  integrations: [sitemap()],
});
