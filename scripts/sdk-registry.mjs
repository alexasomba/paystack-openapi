/* eslint-disable no-console */
import { pathToFileURL } from "node:url";

export const SDK_OWNER = "alexasomba";
export const SOURCE_REPOSITORY = "alexasomba/paystack-openapi";
export const SOURCE_REPOSITORY_URL = `https://github.com/${SOURCE_REPOSITORY}`;
export const DEFAULT_LOCAL_SDK_BASE_PATH =
  "/Users/alexasomba/Documents/GitHub/alexasomba/paystack-sdks/sdks";

export const SDKS = Object.freeze([
  {
    name: "php",
    language: "php",
    generator: "openapi-generator",
    packageName: "alexasomba/paystack",
    repository: "paystack-php",
    repositoryUrl: "https://github.com/alexasomba/paystack-php",
    syncBranch: "main",
    shipsOpenapi: true,
    readmeTemplate: "php.md",
    requiredFiles: [
      "composer.json",
      "README.md",
      "openapi.yaml",
      "lib/Extras/HttpClientFactory.php",
    ],
  },
  {
    name: "go",
    language: "go",
    generator: "openapi-generator",
    packageName: "github.com/alexasomba/paystack-go",
    repository: "paystack-go",
    repositoryUrl: "https://github.com/alexasomba/paystack-go",
    syncBranch: "main",
    shipsOpenapi: true,
    readmeTemplate: "go.md",
    requiredFiles: ["go.mod", "README.md", "openapi.yaml", "reliability.go"],
  },
  {
    name: "python",
    language: "python",
    generator: "openapi-generator",
    packageName: "alexasomba-paystack",
    packageSlug: "alexasomba_paystack",
    repository: "paystack-python",
    repositoryUrl: "https://github.com/alexasomba/paystack-python",
    syncBranch: "main",
    shipsOpenapi: true,
    readmeTemplate: "python.md",
    requiredFiles: ["pyproject.toml", "README.md", "openapi.yaml", "alexasomba_paystack/extras.py"],
  },
  {
    name: "node",
    language: "typescript",
    generator: "openapi-typescript",
    packageName: "@alexasomba/paystack-node",
    repository: "paystack-node",
    repositoryUrl: "https://github.com/alexasomba/paystack-node",
    syncBranch: "main",
    npm: true,
    shipsOpenapi: true,
    readmeTemplate: "node.md",
    requiredFiles: [
      "package.json",
      "README.md",
      "CHANGELOG.md",
      "openapi.yaml",
      "src/openapi-types.ts",
    ],
  },
  {
    name: "axios",
    language: "typescript",
    generator: "openapi-typescript",
    packageName: "@alexasomba/paystack-axios",
    repository: "paystack-axios",
    repositoryUrl: "https://github.com/alexasomba/paystack-axios",
    syncBranch: "main",
    npm: true,
    shipsOpenapi: true,
    readmeTemplate: "axios.md",
    requiredFiles: [
      "package.json",
      "README.md",
      "CHANGELOG.md",
      "openapi.yaml",
      "src/openapi-types.ts",
    ],
  },
  {
    name: "browser",
    language: "typescript",
    generator: "openapi-typescript",
    packageName: "@alexasomba/paystack-browser",
    repository: "paystack-browser",
    repositoryUrl: "https://github.com/alexasomba/paystack-browser",
    syncBranch: "main",
    npm: true,
    shipsOpenapi: true,
    readmeTemplate: "browser.md",
    requiredFiles: [
      "package.json",
      "README.md",
      "CHANGELOG.md",
      "openapi.yaml",
      "src/openapi-types.ts",
    ],
  },
  {
    name: "inline",
    language: "typescript",
    generator: "hand-authored",
    packageName: "@alexasomba/paystack-inline",
    repository: "paystack-inline",
    repositoryUrl: "https://github.com/alexasomba/paystack-inline",
    syncBranch: "main",
    npm: true,
    shipsOpenapi: false,
    requiredFiles: ["package.json", "README.md", "CHANGELOG.md"],
  },
]);

export function sdkNames() {
  return SDKS.map((sdk) => sdk.name);
}

/** @param {string} name */
export function getSdk(name) {
  const sdk = SDKS.find((candidate) => candidate.name === name);
  if (sdk === undefined) throw new Error(`Unknown SDK: ${name}`);
  return sdk;
}

export function sdkSyncPlan() {
  return SDKS.map((sdk) => ({
    name: sdk.name,
    repository: sdk.repository,
    branch: sdk.syncBranch,
  }));
}

function printShellList() {
  console.log(sdkNames().join("\n"));
}

function printSyncPlan() {
  console.log(
    sdkSyncPlan()
      .map((sdk) => `${sdk.name}\t${sdk.repository}\t${sdk.branch}`)
      .join("\n"),
  );
}

function printJson() {
  console.log(JSON.stringify(SDKS, null, 2));
}

function main() {
  const command = process.argv[2] ?? "json";

  if (command === "names") {
    printShellList();
    return;
  }

  if (command === "sync-plan") {
    printSyncPlan();
    return;
  }

  if (command === "json") {
    printJson();
    return;
  }

  console.error(`Unknown sdk-registry command: ${command}`);
  process.exit(1);
}

if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
