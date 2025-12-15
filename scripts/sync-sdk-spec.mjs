import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

const repoRoot = path.resolve(process.cwd());
const sdkSpecPath = path.join(repoRoot, 'src/assets/sdk/paystack.yaml');
const sdkOverridesPath = path.join(repoRoot, 'src/assets/sdk/overrides.yaml');
const bundledSpecPath = path.join(repoRoot, 'dist/paystack.yaml');

const targets = [
  'sdks/node/openapi.yaml',
  'sdks/axios/openapi.yaml',
  'sdks/browser/openapi.yaml',
  'sdks/python/openapi.yaml',
  'sdks/php/openapi.yaml',
  'sdks/go/openapi.yaml',
].map((p) => path.join(repoRoot, p));

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

// Deep-merge helper where `base` wins on conflicts.
function deepMergePreferBase(base, extra) {
  if (!isPlainObject(base) || !isPlainObject(extra)) {
    return base ?? extra;
  }

  const out = { ...base };
  for (const [key, extraValue] of Object.entries(extra)) {
    if (!(key in out)) {
      out[key] = extraValue;
      continue;
    }
    out[key] = deepMergePreferBase(out[key], extraValue);
  }

  return out;
}

function mergeTags(mainTags, sdkTags) {
  const mainList = Array.isArray(mainTags) ? mainTags : [];
  const sdkList = Array.isArray(sdkTags) ? sdkTags : [];

  const byName = new Map();
  for (const tag of mainList) {
    if (tag?.name) byName.set(tag.name, tag);
  }

  const extras = [];
  for (const tag of sdkList) {
    if (!tag?.name) continue;
    if (!byName.has(tag.name)) extras.push(tag);
  }

  return [...mainList, ...extras];
}

function mergePaths(mainPaths, sdkPaths) {
  const out = isPlainObject(mainPaths) ? structuredClone(mainPaths) : {};
  const sdk = isPlainObject(sdkPaths) ? sdkPaths : {};

  for (const [route, sdkPathItem] of Object.entries(sdk)) {
    if (!isPlainObject(sdkPathItem)) continue;

    if (!out[route]) {
      out[route] = sdkPathItem;
      continue;
    }

    if (!isPlainObject(out[route])) {
      out[route] = sdkPathItem;
      continue;
    }

    // Method-level merge: preserve bundled (main) path metadata but let
    // the SDK spec override any overlapping operations to keep operationIds stable.
    const methodKeys = [
      'get',
      'put',
      'post',
      'delete',
      'options',
      'head',
      'patch',
      'trace',
    ];

    for (const method of methodKeys) {
      if (sdkPathItem[method]) {
        out[route][method] = sdkPathItem[method];
      }
    }

    // If the SDK spec includes path-level fields (e.g. parameters) that are
    // missing from the bundled spec, fill them in.
    out[route] = deepMergePreferBase(out[route], sdkPathItem);
  }

  return out;
}

function collectOperationLocations(spec) {
  const methods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'];
  const locations = new Set();
  for (const [route, item] of Object.entries(spec?.paths ?? {})) {
    for (const method of methods) {
      if (item?.[method]?.operationId) {
        locations.add(`${method.toUpperCase()} ${route}`);
      }
    }
  }
  return locations;
}

function sanitizeOperationIdSuffix(value) {
  return String(value)
    .replace(/[{}]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 80);
}

function dedupeOperationIds(mergedSpec, sdkSpec) {
  const methods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'];
  const sdkLocations = collectOperationLocations(sdkSpec);

  // Friendly overrides for known collisions between legacy SDK paths and the bundled spec.
  const overrides = new Map([
    ['GET /transaction/timeline/{id}', 'transaction_timeline_by_id'],
    ['POST /customer/authorization/deactivate', 'customer_authorization_deactivate'],
    ['GET /dedicated_account/{id}', 'dedicated_account_fetch_by_id'],
    ['DELETE /dedicated_account/{id}', 'dedicated_account_deactivate_by_id'],
    ['GET /settlement/{id}/transactions', 'settlement_transactions'],
  ]);

  const groups = new Map();
  for (const [route, item] of Object.entries(mergedSpec?.paths ?? {})) {
    for (const method of methods) {
      const op = item?.[method];
      const operationId = op?.operationId;
      if (!operationId) continue;

      const loc = `${method.toUpperCase()} ${route}`;
      const list = groups.get(operationId) ?? [];
      list.push({ loc, route, method, op });
      groups.set(operationId, list);
    }
  }

  const used = new Set(groups.keys());

  for (const [operationId, occurrences] of groups.entries()) {
    if (occurrences.length <= 1) continue;

    // Prefer keeping operationIds for operations that existed in the SDK spec already.
    const keepers = occurrences.filter((o) => sdkLocations.has(o.loc));
    const keepSet = new Set((keepers.length ? keepers : [occurrences[0]]).map((o) => o.loc));

    for (const occ of occurrences) {
      if (keepSet.has(occ.loc)) continue;

      let nextId = overrides.get(occ.loc);
      if (!nextId) {
        const suffix = sanitizeOperationIdSuffix(`${occ.method}_${occ.route}`);
        nextId = `${operationId}_${suffix}`;
      }

      // Ensure uniqueness if an override collides.
      if (used.has(nextId)) {
        let i = 2;
        while (used.has(`${nextId}_${i}`)) i += 1;
        nextId = `${nextId}_${i}`;
      }

      occ.op.operationId = nextId;
      used.add(nextId);
    }
  }
}

function isObjectSchema(schema) {
  return isPlainObject(schema) && schema.type === 'object' && isPlainObject(schema.properties);
}

function removeFromRequired(schema, propertyName) {
  if (!Array.isArray(schema.required)) return;
  schema.required = schema.required.filter((name) => name !== propertyName);
  if (schema.required.length === 0) delete schema.required;
}

function dedupeTimestampCasing(schema, snakeKey, camelKey) {
  if (!isObjectSchema(schema)) return;

  const props = schema.properties;
  if (!(snakeKey in props) || !(camelKey in props)) return;

  const required = new Set(Array.isArray(schema.required) ? schema.required : []);

  // Prefer the key that is explicitly required. If ambiguous, keep camelCase.
  const keepSnake = required.has(snakeKey) && !required.has(camelKey);
  const keepCamel = required.has(camelKey) && !required.has(snakeKey);
  const keepKey = keepSnake ? snakeKey : keepCamel ? camelKey : camelKey;
  const dropKey = keepKey === snakeKey ? camelKey : snakeKey;

  delete props[dropKey];
  removeFromRequired(schema, dropKey);
}

function sanitizeSdkSpecForGenerators(spec) {
  // Some generators (notably Python/PHP/Go) cannot safely handle both snake_case and
  // camelCase variants of the same logical field within a single schema, because both
  // variants often map to the same language identifier.
  //
  // The bundled spec contains both casings in some responses to match Paystack reality,
  // but the SDK spec needs to be generator-friendly. We dedupe these fields everywhere
  // in the merged spec (including inline schemas).

  const pairs = [
    ['paid_at', 'paidAt'],
    ['created_at', 'createdAt'],
    ['updated_at', 'updatedAt'],
  ];

  const visit = (node) => {
    if (Array.isArray(node)) {
      for (const item of node) visit(item);
      return;
    }

    if (!isPlainObject(node)) return;

    for (const [snakeKey, camelKey] of pairs) {
      dedupeTimestampCasing(node, snakeKey, camelKey);
    }

    for (const value of Object.values(node)) {
      visit(value);
    }
  };

  visit(spec);
}

function runBundleMainIfNeeded() {
  if (process.env.PAYSTACK_SDK_SPEC_SKIP_BUNDLE === '1') return;

  const result = spawnSync('pnpm', ['bundle:main'], {
    cwd: repoRoot,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`Failed to bundle spec (pnpm bundle:main exited ${result.status})`);
  }
}

runBundleMainIfNeeded();

const bundledText = await fs.readFile(bundledSpecPath, 'utf8');
let sdkOverridesText = '';
try {
  sdkOverridesText = await fs.readFile(sdkOverridesPath, 'utf8');
} catch {
  sdkOverridesText = '';
}

const bundledSpec = parseYaml(bundledText);
const sdkSpec = sdkOverridesText.trim() ? parseYaml(sdkOverridesText) : {};

// Merge strategy:
// - Start from the bundled (full) spec for broad coverage.
// - Overlay SDK spec paths at the *operation* level to keep operationIds stable.
// - Prefer bundled components (source-of-truth), but keep any SDK-only components.
const mergedSpec = structuredClone(bundledSpec);
mergedSpec.tags = mergeTags(bundledSpec?.tags, sdkSpec?.tags);
mergedSpec.paths = mergePaths(bundledSpec?.paths, sdkSpec?.paths);
mergedSpec.components = deepMergePreferBase(bundledSpec?.components ?? {}, sdkSpec?.components ?? {});

dedupeOperationIds(mergedSpec, sdkSpec);

sanitizeSdkSpecForGenerators(mergedSpec);

const mergedYaml = `${stringifyYaml(mergedSpec)}\n`;

// Keep the SDK spec file in sync with what we ship into each SDK folder.
await fs.mkdir(path.dirname(sdkSpecPath), { recursive: true });
await fs.writeFile(sdkSpecPath, mergedYaml, 'utf8');

await Promise.all(
  targets.map(async (target) => {
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, mergedYaml, 'utf8');
  }),
);

console.log(`Synced merged SDK spec → ${targets.length} folders`);
