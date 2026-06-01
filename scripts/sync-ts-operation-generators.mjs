/* eslint-disable no-console */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { SDKS } from "./sdk-registry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const sourcePath = path.join(repoRoot, "scripts/ts-sdk-operation-generator.mjs");
const checkOnly = process.argv.includes("--check");

const targets = SDKS.filter(
  (sdk) => sdk.generator === "openapi-typescript" && sdk.shipsOpenapi === true,
).map((sdk) => ({
  sdk: sdk.name,
  path: path.join(repoRoot, "sdks", sdk.name, "scripts/generate-operations.mjs"),
}));

async function main() {
  const source = await fs.readFile(sourcePath, "utf8");
  const changed = [];

  for (const target of targets) {
    let previous = "";
    try {
      previous = await fs.readFile(target.path, "utf8");
    } catch (error) {
      if (error instanceof Error && /** @type {any} */ (error).code !== "ENOENT") {
        throw error;
      }
    }

    if (previous === source) continue;

    changed.push(target);
    if (!checkOnly) {
      await fs.mkdir(path.dirname(target.path), { recursive: true });
      await fs.writeFile(target.path, source, "utf8");
    }
  }

  if (checkOnly && changed.length > 0) {
    console.error(
      `Outdated TypeScript operation generator scripts: ${changed.map((target) => target.sdk).join(", ")}`,
    );
    process.exit(1);
  }

  if (changed.length > 0) {
    console.log(
      `${checkOnly ? "Outdated" : "Updated"} TypeScript operation generator scripts: ${changed.map((target) => target.sdk).join(", ")}`,
    );
  } else {
    console.log("TypeScript operation generator scripts are up to date");
  }
}

await main();
