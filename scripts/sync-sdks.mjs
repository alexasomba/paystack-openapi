import { execFileSync } from "node:child_process";
import {
  openSync,
  closeSync,
  unlinkSync,
  realpathSync,
  readFileSync,
  mkdirSync,
  writeFileSync,
  mkdtempSync,
  rmSync,
  existsSync,
} from "node:fs";
import path from "node:path";
import os from "node:os";
import { parse, stringify } from "yaml";
import { fileURLToPath } from "node:url";
import { DEFAULT_LOCAL_SDK_BASE_PATH, SDKS } from "./sdk-registry.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
/** @param {string} name */
const option = (name) => {
  const i = args.indexOf(name);
  return i < 0 ? undefined : args[i + 1];
};
const dryRun = args.includes("--dry-run");
const remote = args.includes("--remote");
const base = path.resolve(
  option("--destination") ?? process.env.LOCAL_SDK_PATH ?? DEFAULT_LOCAL_SDK_BASE_PATH,
);
const selected = option("--sdk");
const sdks = SDKS.filter(
  (sdk) => selected === undefined || selected === "" || sdk.name === selected,
);
if (!sdks.length) throw new Error("Unknown SDK");
const branch = option("--branch") ?? `codex/sdk-sync-${Date.now()}`;
if (!branch.startsWith("codex/") || branch === "codex/")
  throw new Error("Sync requires a codex/ review branch");
/** @param {string} dir @param {...string} command */
const git = (dir, ...command) =>
  execFileSync("git", ["-C", dir, ...command], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
const exclusions = [
  ".git",
  "node_modules",
  "pnpm-lock.yaml",
  ".venv",
  "__pycache__",
  ".pytest_cache",
  ".ruff_cache",
  ".mypy_cache",
  "*.egg-info",
  "build",
  ".env",
  ".env.*",
  "*.log",
  "vendor",
  "coverage",
  "dist",
  "contract-fixtures",
  ".turbo",
  ".DS_Store",
  ".worktrees",
  ".wrangler",
  "python_gen.log",
  "php_gen.log",
  "go_gen.log",
];
const plan = sdks.map((sdk) => ({
  sdk,
  source: path.join(root, "sdks", sdk.name),
  destination: path.join(base, sdk.repository),
}));
// Validate every target before the first checkout, deletion, commit, or push.
for (const item of plan) {
  const { source, destination } = item;
  if (realpathSync(git(destination, "rev-parse", "--show-toplevel")) !== realpathSync(destination))
    throw new Error(`Target must be its own checkout: ${destination}`);
  if (realpathSync(source) === realpathSync(destination))
    throw new Error("Source and destination must differ");
  if (git(destination, "status", "--porcelain", "--untracked-files=all"))
    throw new Error(`Refusing dirty SDK checkout: ${destination}`);
  git(destination, "check-ref-format", "--branch", branch);
  if (remote) {
    const origin = git(destination, "remote", "get-url", "origin")
      .replace(/\.git$/, "")
      .replace(/^git@github.com:/, "https://github.com/");
    if (origin !== item.sdk.repositoryUrl)
      throw new Error(`Origin does not match ${item.sdk.repository}: ${destination}`);
  }
  try {
    git(destination, "show-ref", "--verify", `refs/heads/${branch}`);
    throw new Error(`Sync branch already exists: ${destination}`);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Sync branch")) throw error;
  }
}
const workspace = parse(readFileSync(path.join(root, "pnpm-workspace.yaml"), "utf8"));
const standaloneWorkspace = stringify({
  ...workspace,
  packages: ["."],
});
const locks = [];
try {
  if (!dryRun) {
    for (const { destination } of plan) {
      const lock = path.resolve(
        destination,
        git(destination, "rev-parse", "--git-path", "sdk-sync.lock"),
      );
      const fd = openSync(lock, "wx");
      closeSync(fd);
      locks.push(lock);
    }
    // Recheck after acquiring locks to reject work that changed during preflight.
    for (const { destination } of plan)
      if (git(destination, "status", "--porcelain", "--untracked-files=all"))
        throw new Error(`Checkout changed during preflight: ${destination}`);
    for (const { destination } of plan) git(destination, "switch", "-c", branch);
  }
  for (const { source, destination, sdk } of plan) {
    const rsync = [
      "-a",
      "--delete",
      "--itemize-changes",
      ...exclusions.flatMap((value) => ["--exclude", value]),
      ...(dryRun ? ["--dry-run"] : []),
      `${source}/`,
      `${destination}/`,
    ];

    process.stdout.write(`${dryRun ? "Preview" : "Sync"} ${sdk.name}: ${destination}\n`);
    execFileSync("rsync", rsync, { stdio: "inherit" });
    if (!dryRun && ["node", "go", "php", "python"].includes(sdk.name)) {
      const fixtureDir = path.join(destination, "contract-fixtures");
      mkdirSync(fixtureDir, { recursive: true });
      writeFileSync(
        path.join(fixtureDir, "paystack.json"),
        readFileSync(path.join(root, "sdks", "contract-fixtures", "paystack.json")),
      );
    }
    if (!dryRun && sdk.npm === true) {
      // Split repositories need the catalog and security overrides from the source workspace.
      writeFileSync(path.join(destination, "pnpm-workspace.yaml"), standaloneWorkspace);
      // Generate without an existing virtual store: an up-to-date installed tree
      // can otherwise leave a stale public lockfile untouched on pnpm 11.
      const lockWorkspace = mkdtempSync(path.join(os.tmpdir(), "paystack-sdk-lock-"));
      try {
        for (const file of ["package.json", "pnpm-workspace.yaml", "pnpm-lock.yaml"]) {
          const sourceFile = path.join(destination, file);
          if (existsSync(sourceFile))
            writeFileSync(path.join(lockWorkspace, file), readFileSync(sourceFile));
        }
        execFileSync(
          "pnpm",
          ["install", "--lockfile-only", "--ignore-scripts", "--no-frozen-lockfile"],
          {
            cwd: lockWorkspace,
            stdio: "inherit",
          },
        );
        writeFileSync(
          path.join(destination, "pnpm-lock.yaml"),
          readFileSync(path.join(lockWorkspace, "pnpm-lock.yaml")),
        );
      } finally {
        rmSync(lockWorkspace, { recursive: true, force: true });
      }
    }
    if (!dryRun && remote) {
      git(destination, "add", "--all");
      if (git(destination, "diff", "--cached", "--name-only"))
        git(
          destination,
          "commit",
          "-m",
          option("--message") ?? "chore: sync SDK from OpenAPI source",
        );
    }
  }
  if (!dryRun && remote)
    for (const { destination } of plan)
      git(destination, "push", "--set-upstream", "origin", branch);
  process.stdout.write(
    dryRun
      ? "Preview complete; no files or refs changed.\n"
      : `Review branch: ${branch}. No release tags were created.\n`,
  );
} finally {
  for (const lock of locks) unlinkSync(lock);
}
