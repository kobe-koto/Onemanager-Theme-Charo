import { defineConfig } from "astro/config";

import legacy from '@vitejs/plugin-legacy';

import { readFileSync } from "fs";
const { homepage: Site } = JSON.parse(readFileSync("./package.json"));


export default defineConfig({
  output: 'static',
  site: Site,
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
