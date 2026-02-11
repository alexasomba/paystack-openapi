import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts", "./src/webhooks.ts"],
	format: ["esm"],
	platform: "node",
	dts: { build: true, incremental: true },
	clean: true,
	tsconfig: "./tsconfig.build.json",
	external: ["openapi-fetch", "yaml"],
});
