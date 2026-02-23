import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["esm"],
	platform: "node",
	dts: { build: true, incremental: false },
	clean: true,
	tsconfig: "./tsconfig.build.json",
	external: ["openapi-fetch", "axios"],
});
