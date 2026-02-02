import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(new URL('.', import.meta.url).pathname, '..');
const goDir = path.join(repoRoot, 'sdks/go');
const goModPath = path.join(goDir, 'go.mod');
const goGitPushPath = path.join(goDir, 'git_push.sh');

async function postprocessGoMod() {
  let prev;
  try {
    prev = await fs.readFile(goModPath, 'utf8');
  } catch (error) {
    if (error && error.code === 'ENOENT') return false;
    throw error;
  }

  const next = prev.replace(
    /^module\s+.*$/m,
    'module github.com/alexasomba/paystack-go'
  );

  if (next === prev) return false;

  await fs.writeFile(goModPath, next, 'utf8');
  return true;
}

async function postprocessGitPush() {
  let prev;
  try {
    prev = await fs.readFile(goGitPushPath, 'utf8');
  } catch (error) {
    if (error && error.code === 'ENOENT') return false;
    throw error;
  }

  const next = prev.replace(
    /^(\s*git_repo_id=)".*"$/m,
    '$1"paystack-go"'
  );

  if (next === prev) return false;

  await fs.writeFile(goGitPushPath, next, 'utf8');
  return true;
}

async function main() {
  let changedCount = 0;

  try {
    if (await postprocessGoMod()) {
      console.log('[sdk:go:postprocess] Updated go.mod');
      changedCount++;
    }
    if (await postprocessGitPush()) {
      console.log('[sdk:go:postprocess] Updated git_push.sh');
      changedCount++;
    }
  } catch (error) {
    console.error('[sdk:go:postprocess] Error:', error.message);
    process.exit(1);
  }

  if (changedCount === 0) {
    console.log('[sdk:go:postprocess] No changes needed');
  }
}

await main();
