import { defineConfig } from "astro/config";

export default defineConfig({
  output: 'static',
  site: "https://aom.koto.gq",
  build: {
    format: "file",
    assets: "aom-assets/_astro"
  }
});
