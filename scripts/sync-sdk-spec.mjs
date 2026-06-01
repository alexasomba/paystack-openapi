/* eslint-disable no-console */
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parse as parseYaml, stringify as stringifyYaml } from "yaml";

import { SDKS } from "./sdk-registry.mjs";
import { projectSdkSpec } from "./sdk-spec-projection.mjs";

const repoRoot = path.resolve(process.cwd());
const sdkSpecPath = path.join(repoRoot, "src/assets/sdk/paystack.yaml");
const sdkOverridesPath = path.join(repoRoot, "src/assets/sdk/overrides.yaml");
const bundledSpecPath = path.join(repoRoot, "dist/paystack.yaml");

const targets = SDKS.filter((sdk) => sdk.shipsOpenapi === true).map((sdk) =>
  path.join(repoRoot, "sdks", sdk.name, "openapi.yaml"),
);

function runBundleMainIfNeeded() {
  if (process.env.PAYSTACK_SDK_SPEC_SKIP_BUNDLE === "1") return;

  const result = spawnSync("npx", ["pnpm", "bundle:main"], {
    cwd: repoRoot,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    throw new Error(`Failed to bundle spec (pnpm bundle:main exited ${result.status})`);
  }
}

runBundleMainIfNeeded();

const bundledText = await fs.readFile(bundledSpecPath, "utf8");
let sdkOverridesText = "";
try {
  sdkOverridesText = await fs.readFile(sdkOverridesPath, "utf8");
} catch {
  sdkOverridesText = "";
}

/** @type {any} */
const bundledSpec = parseYaml(bundledText);
/** @type {any} */
const sdkSpec = sdkOverridesText.trim() ? parseYaml(sdkOverridesText) : {};

const mergedSpec = projectSdkSpec(bundledSpec, sdkSpec);
const mergedYaml = `${stringifyYaml(mergedSpec).trimEnd()}\n`;

// Keep the SDK spec file in sync with what we ship into each SDK folder.
await fs.mkdir(path.dirname(sdkSpecPath), { recursive: true });
await fs.writeFile(sdkSpecPath, mergedYaml, "utf8");

await Promise.all(
  targets.map(async (target) => {
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, mergedYaml, "utf8");
  }),
);

console.log(`Synced merged SDK spec → ${targets.length} folders`);
