import { defineConfig } from "astro/config";

import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  output: 'static',
  site: "https://aom.koto.gq",
  build: {
    format: "file",
    assets: "aom-assets/_astro"
  },
  vite: {
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
        externalSystemJS: true
      }),
    ]
  }
});
