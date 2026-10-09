import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, readFileSync, mkdirSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { SDKS } from "./sdk-registry.mjs";
/** @param {string} dir @param {...string} args */
const git = (dir, ...args) => execFileSync("git", ["-C", dir, ...args], { stdio: "pipe" });
function fixture() {
  const base = mkdtempSync(path.join(os.tmpdir(), "sdk-sync-"));
  for (const sdk of SDKS) {
    const dir = path.join(base, sdk.repository);
    mkdirSync(dir);
    git(dir, "init");
    git(dir, "config", "user.name", "Test");
    git(dir, "config", "user.email", "test@example.com");
    writeFileSync(path.join(dir, "sentinel"), "keep me");
    git(dir, "add", ".");
    git(dir, "commit", "-m", "fixture");
  }
  return base;
}
void test("all-target preflight refuses a dirty final checkout before modifying the first", () => {
  const base = fixture();
  try {
    writeFileSync(path.join(base, SDKS[SDKS.length - 1].repository, "untracked"), "user work");
    const result = spawnSync(process.execPath, ["scripts/sync-sdks.mjs", "--destination", base], {
      encoding: "utf8",
    });
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /Refusing dirty/);
    for (const sdk of SDKS)
      assert.equal(readFileSync(path.join(base, sdk.repository, "sentinel"), "utf8"), "keep me");
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
void test("dry-run leaves contents and Git refs untouched", () => {
  const base = fixture();
  try {
    const dir = path.join(base, SDKS[0].repository);
    const before = git(dir, "show-ref").toString();
    const result = spawnSync(
      process.execPath,
      ["scripts/sync-sdks.mjs", "--destination", base, "--dry-run"],
      { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
    );
    assert.equal(result.status, 0, result.stderr);
    assert.equal(git(dir, "show-ref").toString(), before);
    for (const sdk of SDKS)
      assert.equal(readFileSync(path.join(base, sdk.repository, "sentinel"), "utf8"), "keep me");
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
