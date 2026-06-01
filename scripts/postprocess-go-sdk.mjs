/* eslint-disable no-console */
import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(new URL(".", import.meta.url).pathname, "..");
const goDir = path.join(repoRoot, "sdks/go");
const goModPath = path.join(goDir, "go.mod");
const goGitPushPath = path.join(goDir, "git_push.sh");
const goTravisPath = path.join(goDir, ".travis.yml");

/**
 * @param {string} value
 * @returns {string}
 */
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function postprocessGoMod() {
  let prev;
  try {
    prev = await fs.readFile(goModPath, "utf8");
  } catch (error) {
    if (error instanceof Error && /** @type {any} */ (error).code === "ENOENT") return false;
    throw error;
  }

  const next = prev.replace(/^module\s+.*$/m, "module github.com/alexasomba/paystack-go");

  if (next === prev) return false;

  await fs.writeFile(goModPath, next, "utf8");
  return true;
}

async function postprocessGitPush() {
  let prev;
  try {
    prev = await fs.readFile(goGitPushPath, "utf8");
  } catch (error) {
    if (error instanceof Error && /** @type {any} */ (error).code === "ENOENT") return false;
    throw error;
  }

  let next = prev.replace(/^(\s*git_repo_id=)".*"$/m, '$1"paystack-go"');
  const gitInitBlock = [
    "git init",
    "",
    "git branch -M main",
    "",
    "# Adds the files in the local repository and stages them for commit.",
    "git add .",
    "",
    "# Commits the tracked changes and prepares them to be pushed to a remote repository.",
    "if git diff --cached --quiet; then",
    '    echo "No changes to commit."',
    "else",
    '    git commit -m "$release_note"',
    "fi",
  ].join("\n");
  next = next.replace(
    /git init[\s\S]*?# Sets the new remote/,
    `${gitInitBlock}\n\n# Sets the new remote`,
  );
  next = next.replace(/git pull origin master/g, "git pull origin main --no-rebase");
  next = next.replace(/git push origin master/g, "git push origin main");

  if (next === prev) return false;

  await fs.writeFile(goGitPushPath, next, "utf8");
  return true;
}

async function postprocessTravis() {
  let prev;
  try {
    prev = await fs.readFile(goTravisPath, "utf8");
  } catch (error) {
    if (error instanceof Error && /** @type {any} */ (error).code === "ENOENT") return false;
    throw error;
  }

  const next = `${prev.trimEnd()}\n`;

  if (next === prev) return false;

  await fs.writeFile(goTravisPath, next, "utf8");
  return true;
}

async function postprocessRequestTypes() {
  const entries = await fs.readdir(goDir, { withFileTypes: true });
  let changedCount = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.startsWith("api_") || !entry.name.endsWith(".go")) {
      continue;
    }

    const filePath = path.join(goDir, entry.name);
    const prev = await fs.readFile(filePath, "utf8");
    const serviceMatch = /^type\s+([A-Za-z0-9]+)APIService\s+service$/m.exec(prev);
    if (!serviceMatch) continue;

    const serviceName = serviceMatch[1];
    /** @type {Map<string, string>} */
    const replacements = new Map();
    for (const match of prev.matchAll(/^type\s+([A-Za-z0-9]+Request)\s+struct\s+\{/gm)) {
      const oldName = match[1];
      if (oldName.endsWith("APIRequest")) continue;

      const baseName = oldName.startsWith("Api")
        ? `${serviceName}${oldName.slice("Api".length, -"Request".length)}`
        : oldName.slice(0, -"Request".length);
      replacements.set(oldName, `${baseName}APIRequest`);
    }

    if (replacements.size === 0) continue;

    let next = prev;
    for (const [oldName, newName] of replacements) {
      next = next.replace(new RegExp(`\\b${escapeRegExp(oldName)}\\b`, "g"), newName);
    }

    if (next !== prev) {
      await fs.writeFile(filePath, next, "utf8");
      changedCount++;
    }
  }

  return changedCount;
}

/**
 * @param {string} source
 * @returns {string}
 */
function removeDuplicateStructFields(source) {
  /** @type {Set<string>} */
  const seenFields = new Set();

  return source
    .split("\n")
    .filter((line) => {
      const match = /^\s+([A-Z][A-Za-z0-9_]*)\s+.+`json:"[^"]+"`/.exec(line);
      if (match === null) return true;

      const fieldName = match[1];
      if (seenFields.has(fieldName)) return false;

      seenFields.add(fieldName);
      return true;
    })
    .join("\n");
}

/**
 * @param {string} source
 * @returns {string}
 */
function removeDuplicateMethods(source) {
  /** @type {Set<string>} */
  const seenMethods = new Set();
  let output = "";
  let index = 0;

  while (index < source.length) {
    const funcIndex = source.indexOf("\nfunc (", index);
    if (funcIndex === -1) {
      output += source.slice(index);
      break;
    }

    const blockStart = funcIndex + 1;
    output += source.slice(index, blockStart);

    const signatureEnd = source.indexOf("{", blockStart);
    if (signatureEnd === -1) {
      output += source.slice(blockStart);
      break;
    }

    const signature = source.slice(blockStart, signatureEnd);
    const signatureMatch = /^func\s+\(o\s+\*([A-Za-z0-9_]+)\)\s+([A-Za-z0-9_]+)\s*\(/.exec(
      signature,
    );
    if (signatureMatch === null) {
      output += source.slice(blockStart, signatureEnd + 1);
      index = signatureEnd + 1;
      continue;
    }

    let cursor = signatureEnd;
    let depth = 0;
    do {
      const char = source[cursor];
      if (char === "{") depth++;
      if (char === "}") depth--;
      cursor++;
    } while (cursor < source.length && depth > 0);

    const methodKey = `${signatureMatch[1]}.${signatureMatch[2]}`;
    if (!seenMethods.has(methodKey)) {
      seenMethods.add(methodKey);
      output += source.slice(blockStart, cursor);
    }

    index = cursor;
  }

  return output;
}

async function postprocessModelDuplicates() {
  const entries = await fs.readdir(goDir, { withFileTypes: true });
  let changedCount = 0;

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.startsWith("model_") || !entry.name.endsWith(".go")) {
      continue;
    }

    const filePath = path.join(goDir, entry.name);
    const prev = await fs.readFile(filePath, "utf8");
    const next = removeDuplicateMethods(removeDuplicateStructFields(prev));

    if (next !== prev) {
      await fs.writeFile(filePath, next, "utf8");
      changedCount++;
    }
  }

  return changedCount;
}

async function main() {
  let changedCount = 0;

  try {
    if (await postprocessGoMod()) {
      console.log("[sdk:go:postprocess] Updated go.mod");
      changedCount++;
    }
    if (await postprocessGitPush()) {
      console.log("[sdk:go:postprocess] Updated git_push.sh");
      changedCount++;
    }
    if (await postprocessTravis()) {
      console.log("[sdk:go:postprocess] Updated .travis.yml");
      changedCount++;
    }
    const requestTypeFilesChanged = await postprocessRequestTypes();
    if (requestTypeFilesChanged > 0) {
      console.log(
        `[sdk:go:postprocess] Namespaced request builder types in ${requestTypeFilesChanged} files`,
      );
      changedCount += requestTypeFilesChanged;
    }
    const modelDuplicateFilesChanged = await postprocessModelDuplicates();
    if (modelDuplicateFilesChanged > 0) {
      console.log(
        `[sdk:go:postprocess] Removed duplicate generated model fields/methods in ${modelDuplicateFilesChanged} files`,
      );
      changedCount += modelDuplicateFilesChanged;
    }
  } catch (error) {
    console.error("[sdk:go:postprocess] Error:", error instanceof Error ? error.message : error);
    process.exit(1);
  }

  if (changedCount === 0) {
    console.log("[sdk:go:postprocess] No changes needed");
  }
}

await main();
