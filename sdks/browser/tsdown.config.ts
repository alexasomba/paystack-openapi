import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["esm"],
	platform: "browser",
	dts: { build: true, incremental: false },
	clean: true,
	tsconfig: "./tsconfig.build.json",
	external: ["openapi-fetch"],
});
