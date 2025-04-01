import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://astro-tutorial0022.netlify.app/",
  integrations: [preact()]
});