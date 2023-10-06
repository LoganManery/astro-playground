import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  outDir: './build',
  renderers: ['@astro/types/renderer-mdx'],
  integrations: [
    tailwind(), 
    preact(), 
    mdx(
    {
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: false,
    }
  )],
  site: "https://example.com"
});