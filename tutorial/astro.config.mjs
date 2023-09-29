import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  outDir: './build',
  integrations: [tailwind(), preact()],
  site: "https://example.com"
});