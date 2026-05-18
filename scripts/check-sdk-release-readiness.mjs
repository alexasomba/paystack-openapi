/* eslint-disable no-console */
import fs from "node:fs";
import path from "node:path";

import { SDKS, getSdk } from "./sdk-registry.mjs";

const repoRoot = path.resolve(new URL(".", import.meta.url).pathname, "..");

const sdkSpec = fs.readFileSync(path.join(repoRoot, "src/assets/sdk/paystack.yaml"), "utf8");
const failures = [];

/** @param {string} filePath */
function assertFile(filePath) {
  if (!fs.existsSync(filePath)) failures.push(`Missing ${path.relative(repoRoot, filePath)}`);
}

/**
 * @param {string} filePath
 * @param {RegExp} pattern
 * @param {string} message
 */
function assertContains(filePath, pattern, message) {
  const contents = fs.readFileSync(filePath, "utf8");
  if (!pattern.test(contents)) failures.push(`${path.relative(repoRoot, filePath)}: ${message}`);
}

/** @param {string} value */
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

for (const sdk of SDKS) {
  const sdkDir = path.join(repoRoot, "sdks", sdk.name);
  const files = sdk.requiredFiles ?? [];
  for (const file of files) assertFile(path.join(sdkDir, file));

  const openapiPath = path.join(sdkDir, "openapi.yaml");
  if (sdk.shipsOpenapi && fs.existsSync(openapiPath)) {
    const sdkOpenapi = fs.readFileSync(openapiPath, "utf8");
    if (sdkOpenapi !== sdkSpec) {
      failures.push(
        `sdks/${sdk.name}/openapi.yaml is not synced with src/assets/sdk/paystack.yaml`,
      );
    }
  }

  const readmePath = path.join(sdkDir, "README.md");
  if (fs.existsSync(readmePath)) {
    assertContains(
      readmePath,
      /https:\/\/api\.paystack\.co/,
      "README must document the Paystack base URL",
    );
    assertContains(
      readmePath,
      /Authentication|Authenticate|secret key|public key/i,
      "README must document authentication",
    );
  }
}

for (const sdk of SDKS.filter((candidate) => candidate.npm === true)) {
  const packagePath = path.join(repoRoot, "sdks", sdk.name, "package.json");
  if (!fs.existsSync(packagePath)) continue;
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  for (const field of ["name", "version", "license", "repository", "exports"]) {
    if (pkg[field] === undefined) failures.push(`sdks/${sdk.name}/package.json missing ${field}`);
  }
  if (pkg.name !== sdk.packageName) {
    failures.push(`sdks/${sdk.name}/package.json name must be ${sdk.packageName}`);
  }
  if (pkg.publishConfig?.access !== "public") {
    failures.push(`sdks/${sdk.name}/package.json publishConfig.access must be public`);
  }
}

const pythonSdk = getSdk("python");
const pyprojectPath = path.join(repoRoot, "sdks/python/pyproject.toml");
if (fs.existsSync(pyprojectPath)) {
  assertContains(pyprojectPath, /^version\s*=\s*".+"/m, "pyproject must include a version");
  assertContains(
    pyprojectPath,
    new RegExp(`Repository\\s*=\\s*"${escapeRegExp(pythonSdk.repositoryUrl)}"`),
    "pyproject repository URL must point to the split repo",
  );
}

const composerPath = path.join(repoRoot, "sdks/php/composer.json");
if (fs.existsSync(composerPath)) {
  const composer = JSON.parse(fs.readFileSync(composerPath, "utf8"));
  for (const field of ["name", "version", "license", "homepage", "support"]) {
    if (composer[field] === undefined) failures.push(`sdks/php/composer.json missing ${field}`);
  }
}

if (failures.length > 0) {
  console.error("SDK release readiness failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("SDK release readiness checks passed");
