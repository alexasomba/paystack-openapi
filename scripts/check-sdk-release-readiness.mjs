/* eslint-disable no-console */
import fs from "node:fs";
import path from "node:path";

import { SDK_OWNER, SDKS, SOURCE_REPOSITORY_URL, getSdk } from "./sdk-registry.mjs";

const repoRoot = path.resolve(new URL(".", import.meta.url).pathname, "..");
const sdkSpec = fs.readFileSync(path.join(repoRoot, "src/assets/sdk/paystack.yaml"), "utf8");
/** @type {string[]} */
const failures = [];
const checkRemote = process.env.SDK_RELEASE_CHECK_REMOTE !== "0";

/** @param {string} filePath */
function relative(filePath) {
  return path.relative(repoRoot, filePath);
}

/** @param {string} filePath */
function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

/** @param {string} filePath */
function assertFile(filePath) {
  if (!fs.existsSync(filePath)) failures.push(`Missing ${relative(filePath)}`);
}

/**
 * @param {string} filePath
 * @param {RegExp} pattern
 * @param {string} message
 */
function assertContains(filePath, pattern, message) {
  const contents = fs.readFileSync(filePath, "utf8");
  if (!pattern.test(contents)) failures.push(`${relative(filePath)}: ${message}`);
}

/**
 * @param {unknown} actual
 * @param {unknown} expected
 * @param {string} label
 */
function assertEqual(actual, expected, label) {
  if (actual !== expected) failures.push(`${label} must be ${String(expected)}`);
}

/** @param {string} value */
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** @param {unknown} pkg */
function getRepositoryUrl(pkg) {
  if (typeof pkg !== "object" || pkg === null || !("repository" in pkg)) return undefined;
  const repository = pkg.repository;
  if (typeof repository === "string") return repository;
  if (typeof repository === "object" && repository !== null && "url" in repository) {
    return repository.url;
  }
  return undefined;
}

/**
 * @param {unknown} value
 * @returns {Record<string, unknown>}
 */
function asPackageRecord(value) {
  return typeof value === "object" && value !== null
    ? /** @type {Record<string, unknown>} */ (value)
    : {};
}

/**
 * @typedef {{
 *   major: number;
 *   minor: number;
 *   patch: number;
 *   prerelease?: string;
 * }} Semver
 */

/**
 * @param {string} version
 * @returns {Semver | undefined}
 */
function parseSemver(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?$/.exec(version);
  if (match === null) return undefined;
  return {
    major: Number.parseInt(match[1], 10),
    minor: Number.parseInt(match[2], 10),
    patch: Number.parseInt(match[3], 10),
    prerelease: match[4],
  };
}

/**
 * @param {string | undefined} a
 * @param {string | undefined} b
 */
function comparePrerelease(a, b) {
  if (a === undefined && b === undefined) return 0;
  if (a === undefined) return 1;
  if (b === undefined) return -1;

  const aParts = a.split(".");
  const bParts = b.split(".");
  const length = Math.max(aParts.length, bParts.length);
  for (let index = 0; index < length; index += 1) {
    const left = aParts[index];
    const right = bParts[index];
    if (left === undefined) return -1;
    if (right === undefined) return 1;
    if (left === right) continue;

    const leftNumber = /^\d+$/.test(left) ? Number.parseInt(left, 10) : undefined;
    const rightNumber = /^\d+$/.test(right) ? Number.parseInt(right, 10) : undefined;
    if (leftNumber !== undefined && rightNumber !== undefined) return leftNumber - rightNumber;
    if (leftNumber !== undefined) return -1;
    if (rightNumber !== undefined) return 1;
    return left.localeCompare(right);
  }
  return 0;
}

/**
 * @param {string} a
 * @param {string} b
 */
function compareSemver(a, b) {
  const left = parseSemver(a);
  const right = parseSemver(b);
  if (left === undefined || right === undefined) return a.localeCompare(b);

  for (const key of /** @type {const} */ (["major", "minor", "patch"])) {
    const diff = left[key] - right[key];
    if (diff !== 0) return diff;
  }

  return comparePrerelease(left.prerelease, right.prerelease);
}

/**
 * @param {{
 *   localVersion: string;
 *   remoteVersion: string;
 *   localLabel: string;
 *   remoteLabel: string;
 * }} input
 */
function assertLocalNotOlder(input) {
  if (compareSemver(input.localVersion, input.remoteVersion) < 0) {
    failures.push(
      `${input.localLabel} version ${input.localVersion} is older than ${input.remoteLabel} version ${input.remoteVersion}`,
    );
  }
}

/**
 * @param {string} url
 * @param {string} label
 */
async function fetchJson(url, label) {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "paystack-openapi-release-check",
      },
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      failures.push(`${label}: ${response.status} ${response.statusText}`);
      return undefined;
    }

    return await response.json();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    failures.push(`${label}: ${message}`);
    return undefined;
  }
}

/**
 * @param {Record<string, unknown>} pkg
 * @param {typeof SDKS[number]} sdk
 * @param {string} label
 */
function assertNpmPackageMetadata(pkg, sdk, label) {
  const publishConfig = asPackageRecord(pkg.publishConfig);
  const bugs = asPackageRecord(pkg.bugs);

  assertEqual(pkg.name, sdk.packageName, `${label} name`);
  assertEqual(pkg.license, "MIT", `${label} license`);
  assertEqual(pkg.homepage, `${sdk.repositoryUrl}#readme`, `${label} homepage`);
  assertEqual(publishConfig.access, "public", `${label} publishConfig.access`);
  assertEqual(getRepositoryUrl(pkg), `${sdk.repositoryUrl}.git`, `${label} repository.url`);
  assertEqual(bugs.url, `${sdk.repositoryUrl}/issues`, `${label} bugs.url`);

  if (pkg.version === undefined) failures.push(`${label} missing version`);
  if (pkg.exports === undefined) failures.push(`${label} missing exports`);
}

function assertRootMetadata() {
  const packagePath = path.join(repoRoot, "package.json");
  const pkg = readJson(packagePath);

  assertEqual(pkg.homepage, `${SOURCE_REPOSITORY_URL}#readme`, "package.json homepage");
  assertEqual(pkg.bugs?.url, `${SOURCE_REPOSITORY_URL}/issues`, "package.json bugs.url");
  assertEqual(getRepositoryUrl(pkg), `${SOURCE_REPOSITORY_URL}.git`, "package.json repository.url");

  const readmePath = path.join(repoRoot, "README.md");
  assertContains(
    readmePath,
    new RegExp(escapeRegExp(SOURCE_REPOSITORY_URL)),
    "README must link to the source repository",
  );
  assertContains(
    readmePath,
    /vp run sdk:check:release/,
    "README must document the SDK release-readiness check",
  );
  assertContains(
    readmePath,
    /OpenAPI source[\s\S]*generated SDK source[\s\S]*split repos[\s\S]*package/i,
    "README must document the source to package sync path",
  );

  const readme = fs.readFileSync(readmePath, "utf8");
  if (readme.includes("PaystackOSS/openapi")) {
    failures.push("README.md still links to PaystackOSS/openapi");
  }
}

/**
 * @param {typeof SDKS[number]} sdk
 * @param {Record<string, unknown>} localPackage
 */
async function checkNpmRegistryVersion(sdk, localPackage) {
  if (typeof localPackage.version !== "string") return;

  const encodedPackageName = encodeURIComponent(sdk.packageName);
  const registry = await fetchJson(
    `https://registry.npmjs.org/${encodedPackageName}`,
    `npm registry metadata for ${sdk.packageName}`,
  );
  if (registry === undefined) return;

  const registryRecord = asPackageRecord(registry);
  const distTags = asPackageRecord(registryRecord["dist-tags"]);
  const latestVersion = distTags.latest;
  if (typeof latestVersion !== "string") {
    failures.push(`npm registry metadata for ${sdk.packageName} missing dist-tags.latest`);
    return;
  }

  assertLocalNotOlder({
    localVersion: localPackage.version,
    remoteVersion: latestVersion,
    localLabel: `sdks/${sdk.name}/package.json`,
    remoteLabel: `${sdk.packageName}@latest on npm`,
  });
}

/**
 * @param {typeof SDKS[number]} sdk
 * @param {Record<string, unknown>} localPackage
 */
async function checkSplitRepoPackage(sdk, localPackage) {
  if (typeof localPackage.version !== "string") return;

  const remotePackage = await fetchJson(
    `https://raw.githubusercontent.com/${SDK_OWNER}/${sdk.repository}/${sdk.syncBranch}/package.json`,
    `${sdk.repository} split repo package.json`,
  );
  if (remotePackage === undefined) return;

  const remote = asPackageRecord(remotePackage);
  assertNpmPackageMetadata(remote, sdk, `${sdk.repository} split repo package.json`);

  if (typeof remote.version !== "string") {
    failures.push(`${sdk.repository} split repo package.json missing version`);
    return;
  }

  assertLocalNotOlder({
    localVersion: localPackage.version,
    remoteVersion: remote.version,
    localLabel: `sdks/${sdk.name}/package.json`,
    remoteLabel: `${sdk.repository} split repo`,
  });
}

async function main() {
  assertRootMetadata();

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
      assertContains(
        readmePath,
        new RegExp(escapeRegExp(SOURCE_REPOSITORY_URL)),
        "README must link back to the monorepo source",
      );
      assertContains(
        readmePath,
        new RegExp(escapeRegExp(sdk.repositoryUrl)),
        "README must link to the standalone SDK repo",
      );
    }
  }

  const npmPackages = [];
  for (const sdk of SDKS.filter((candidate) => candidate.npm === true)) {
    const packagePath = path.join(repoRoot, "sdks", sdk.name, "package.json");
    if (!fs.existsSync(packagePath)) continue;
    const pkg = readJson(packagePath);
    npmPackages.push({ sdk, pkg });

    for (const field of ["name", "version", "license", "repository", "exports"]) {
      if (pkg[field] === undefined) failures.push(`sdks/${sdk.name}/package.json missing ${field}`);
    }
    assertNpmPackageMetadata(pkg, sdk, `sdks/${sdk.name}/package.json`);

    if (checkRemote) {
      await checkSplitRepoPackage(sdk, pkg);
      await checkNpmRegistryVersion(sdk, pkg);
    }
  }

  const npmVersions = new Map();
  for (const { sdk, pkg } of npmPackages) {
    if (typeof pkg.version === "string") npmVersions.set(sdk.name, pkg.version);
  }
  const uniqueNpmVersions = new Set(npmVersions.values());
  if (uniqueNpmVersions.size > 1) {
    const versions = [...npmVersions]
      .map(([sdkName, version]) => `${sdkName}@${version}`)
      .join(", ");
    failures.push(`npm SDK package versions must stay aligned: ${versions}`);
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

  const phpSdk = getSdk("php");
  const composerPath = path.join(repoRoot, "sdks/php/composer.json");
  if (fs.existsSync(composerPath)) {
    const composer = readJson(composerPath);
    for (const field of ["name", "version", "license", "homepage", "support"]) {
      if (composer[field] === undefined) failures.push(`sdks/php/composer.json missing ${field}`);
    }
    assertEqual(composer.name, phpSdk.packageName, "sdks/php/composer.json name");
    assertEqual(composer.homepage, phpSdk.repositoryUrl, "sdks/php/composer.json homepage");
    assertEqual(
      composer.support?.issues,
      `${phpSdk.repositoryUrl}/issues`,
      "sdks/php support.issues",
    );
    assertEqual(composer.support?.source, phpSdk.repositoryUrl, "sdks/php support.source");
  }

  const goSdk = getSdk("go");
  const goModPath = path.join(repoRoot, "sdks/go/go.mod");
  if (fs.existsSync(goModPath)) {
    assertContains(
      goModPath,
      new RegExp(`^module\\s+${escapeRegExp(goSdk.packageName)}$`, "m"),
      "go.mod module must point to the split repo",
    );
  }

  if (failures.length > 0) {
    console.error("SDK release readiness failed:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
  }

  console.log("SDK release readiness checks passed");
}

await main();
