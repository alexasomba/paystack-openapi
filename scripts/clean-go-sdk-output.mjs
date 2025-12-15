import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd());
const goDir = path.join(repoRoot, 'sdks', 'go');

async function safeRm(targetPath) {
  await fs.rm(targetPath, { recursive: true, force: true });
}

async function main() {
  const removableRootFiles = new Set([
    '.gitignore',
    '.travis.yml',
    'README.md',
    'client.go',
    'configuration.go',
    'response.go',
    'utils.go',
    'go.mod',
    'go.sum',
    'git_push.sh',
  ]);

  const removableDirs = new Set(['.openapi-generator', 'api']);

  let entries;
  try {
    entries = await fs.readdir(goDir, { withFileTypes: true });
  } catch (error) {
    throw new Error(`Failed to read Go SDK directory at ${goDir}: ${error?.message ?? error}`);
  }

  await Promise.all(
    entries.map(async (entry) => {
      const name = entry.name;
      const fullPath = path.join(goDir, name);

      if (entry.isDirectory()) {
        if (removableDirs.has(name)) {
          await safeRm(fullPath);
        }
        return;
      }

      if (!entry.isFile()) return;

      if (name.startsWith('api_') || name.startsWith('model_') || removableRootFiles.has(name)) {
        await safeRm(fullPath);
      }
    }),
  );

  console.log('Cleaned Go SDK generated output');
}

await main();
