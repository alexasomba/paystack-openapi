import { defineConfig } from "vite-plus";

export default defineConfig({
  test: {
    globals: true,
    include: ["sdks/*/test/**/*.test.ts"],
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    exclude: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
  },
});
