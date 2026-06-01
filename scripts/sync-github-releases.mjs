#!/usr/bin/env node
/* eslint-disable no-console */
import { spawnSync } from "node:child_process";

import { SDK_OWNER, SDKS, SOURCE_REPOSITORY } from "./sdk-registry.mjs";

const usage = `Usage: node scripts/sync-github-releases.mjs <tag> [--dry-run] [--skip-source]

Creates or updates GitHub Releases for the source repository and split SDK
repositories. The tag must already exist on each target repository.

Examples:
  pnpm sdk:release:github -- v1.10.6
  pnpm sdk:release:github -- v1.10.6 --dry-run
`;

const args = process.argv.slice(2);
/** @type {string | undefined} */
let tag;
let dryRun = false;
let includeSource = true;

for (const arg of args) {
  if (arg === "--") {
    continue;
  }

  if (arg === "--dry-run") {
    dryRun = true;
    continue;
  }

  if (arg === "--skip-source") {
    includeSource = false;
    continue;
  }

  if (arg === "--help" || arg === "-h") {
    console.log(usage);
    process.exit(0);
  }

  if (tag === undefined) {
    tag = arg;
    continue;
  }

  console.error(`Unexpected argument: ${arg}`);
  console.error(usage);
  process.exit(1);
}

if (tag === undefined) {
  console.error("Missing release tag.");
  console.error(usage);
  process.exit(1);
}

const releaseTag = tag;

if (!/^v\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(releaseTag)) {
  console.error(`Release tag must look like v1.2.3: ${releaseTag}`);
  process.exit(1);
}

const targets = [
  ...(includeSource ? [{ name: "openapi", repository: SOURCE_REPOSITORY.split("/")[1] }] : []),
  ...SDKS.map((sdk) => ({ name: sdk.name, repository: sdk.repository })),
];

/**
 * @param {string[]} arguments_
 * @param {{ allowFailure?: boolean, capture?: boolean }} [options]
 */
function runGh(arguments_, { allowFailure = false, capture = false } = {}) {
  const result = spawnSync("gh", arguments_, {
    encoding: "utf8",
    stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
  });

  if (!allowFailure && result.status !== 0) {
    const command = `gh ${arguments_.join(" ")}`;
    throw new Error(`Command failed: ${command}`);
  }

  return result;
}

/** @param {string} repo */
function releaseExists(repo) {
  const result = runGh(
    ["release", "view", releaseTag, "--repo", `${SDK_OWNER}/${repo}`, "--json", "url"],
    { allowFailure: true, capture: true },
  );

  return result.status === 0;
}

/** @param {string} repo */
function assertTagExists(repo) {
  const result = runGh(["api", `repos/${SDK_OWNER}/${repo}/git/ref/tags/${releaseTag}`], {
    allowFailure: true,
    capture: true,
  });

  if (result.status !== 0) {
    throw new Error(`Missing remote tag ${releaseTag} on ${SDK_OWNER}/${repo}`);
  }
}

let changed = 0;

for (const target of targets) {
  const repo = target.repository;
  const repoWithOwner = `${SDK_OWNER}/${repo}`;

  assertTagExists(repo);

  if (releaseExists(repo)) {
    console.log(`${repoWithOwner}: release ${releaseTag} already exists; marking as latest`);
    if (!dryRun) {
      runGh([
        "release",
        "edit",
        releaseTag,
        "--repo",
        repoWithOwner,
        "--title",
        releaseTag,
        "--latest",
      ]);
    }
  } else {
    console.log(`${repoWithOwner}: creating release ${releaseTag}`);
    if (!dryRun) {
      runGh([
        "release",
        "create",
        releaseTag,
        "--repo",
        repoWithOwner,
        "--title",
        releaseTag,
        "--generate-notes",
        "--latest",
        "--verify-tag",
      ]);
    }
  }

  changed += 1;
}

console.log(
  `${dryRun ? "Checked" : "Synced"} ${changed} GitHub release${changed === 1 ? "" : "s"} for ${releaseTag}.`,
);
