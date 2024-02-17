import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { readFileSync } from "fs";
const { homepage: site } = JSON.parse(readFileSync("./package.json"));


export default defineConfig({
  site,
  prefetch: true,
  build: {
    format: "file",
    assets: "aom-assets/_astro"
  },
  integrations: [
    icon()
  ]
});
