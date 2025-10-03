import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJSON from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        match: ["*://*.wikipedia.org/*"],
        version: packageJSON.version,
        author: packageJSON.author,
        license: packageJSON.license,
      },
    }),
  ],
});
