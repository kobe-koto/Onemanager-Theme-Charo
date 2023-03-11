import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

export default defineConfig({
  output: 'static',
  site: "https://aom.koto.gq/",
  build: {
    format: "file",
    assets: "aom-assets/_astro"
  },

  integrations: [vue()]
});
