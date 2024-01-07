import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://badges.penpow.dev",
  prefetch: {
    prefetchAll: true
  },
  integrations: [tailwind(), icon(), sitemap(), robotsTxt(), compress()]
});
