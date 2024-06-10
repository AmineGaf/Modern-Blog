import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "xdm6n7l4",
      dataset: "production",
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
  ],
});
