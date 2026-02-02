import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(new URL('.', import.meta.url).pathname, '..');
const phpLibDir = path.join(repoRoot, 'sdks/php/lib');
const phpComposerJsonPath = path.join(repoRoot, 'sdks/php/composer.json');
const phpGitPushPath = path.join(repoRoot, 'sdks/php/git_push.sh');

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.php')) {
      yield fullPath;
    }
  }
}

function normalizePaystackNamespaceLine(line) {
  if (!line.includes('Alexasomba\\\\Paystack')) return line;
  // Only touch lines that reference our own namespace to avoid breaking regex strings.
  // Replace double backslashes with single backslashes.
  return line.replace(/\\\\/g, '\\');
}

async function postprocessComposerJson() {
  let prev;
  try {
    prev = await fs.readFile(phpComposerJsonPath, 'utf8');
  } catch (error) {
    if (error && error.code === 'ENOENT') return false;
    throw error;
  }

  let json;
  try {
    json = JSON.parse(prev);
  } catch (error) {
    throw new Error(`[sdk:php:postprocess] Failed to parse ${phpComposerJsonPath}: ${error.message}`);
  }

  // Packagist expects a VCS repository with composer.json at the repository root.
  // This SDK lives in a subdirectory in the monorepo, so we enforce stable package
  // metadata here to keep the split-repo (used for Packagist) consistent.
  const nextJson = {
    ...json,
    name: 'alexasomba/paystack',
    description: 'Paystack API client for PHP',
    license: 'MIT',
    homepage: 'https://github.com/alexasomba/paystack-php',
    support: {
      issues: 'https://github.com/alexasomba/paystack-php/issues',
      source: 'https://github.com/alexasomba/paystack-php',
    },
    authors: [{ name: 'alexasomba' }],
  };

  const next = `${JSON.stringify(nextJson, null, 4)}\n`;
  const prevNormalized = prev.replace(/\r\n/g, '\n');
  if (next === prevNormalized) return false;

  await fs.writeFile(phpComposerJsonPath, next, 'utf8');
  return true;
}

async function postprocessGitPush() {
  let prev;
  try {
    prev = await fs.readFile(phpGitPushPath, 'utf8');
  } catch (error) {
    if (error && error.code === 'ENOENT') return false;
    throw error;
  }

  const next = prev.replace(
    /^(\s*git_repo_id=)".*"$/m,
    '$1"paystack-php"'
  );

  const prevNormalized = prev.replace(/\r\n/g, '\n');
  if (next === prevNormalized) return false;

  await fs.writeFile(phpGitPushPath, next, 'utf8');
  return true;
}

async function main() {
  let changedFiles = 0;

  for await (const filePath of walk(phpLibDir)) {
    const prev = await fs.readFile(filePath, 'utf8');
    const lines = prev.split(/\r?\n/);

    let changed = false;
    const nextLines = lines.map((line) => {
      const nextLine = normalizePaystackNamespaceLine(line);
      if (nextLine !== line) changed = true;
      return nextLine;
    });

    if (!changed) continue;

    const next = nextLines.join('\n');
    if (next !== prev.replace(/\r\n/g, '\n')) {
      await fs.writeFile(filePath, next, 'utf8');
      changedFiles += 1;
    }
  }

  const composerChanged = await postprocessComposerJson();
  if (composerChanged) changedFiles += 1;

  const gitPushChanged = await postprocessGitPush();
  if (gitPushChanged) changedFiles += 1;

  if (changedFiles) {
    console.log(`[sdk:php:postprocess] Updated ${changedFiles} PHP files`);
  } else {
    console.log('[sdk:php:postprocess] No changes needed');
  }
}

await main();
