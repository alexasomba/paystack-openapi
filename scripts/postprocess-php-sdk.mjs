import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(new URL('.', import.meta.url).pathname, '..');
const phpLibDir = path.join(repoRoot, 'sdks/php/lib');

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

  if (changedFiles) {
    console.log(`[sdk:php:postprocess] Updated ${changedFiles} PHP files`);
  } else {
    console.log('[sdk:php:postprocess] No changes needed');
  }
}

await main();
