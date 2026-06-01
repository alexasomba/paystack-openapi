const METHOD_KEYS = ["get", "put", "post", "delete", "options", "head", "patch", "trace"];

/** @param {unknown} value */
export function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

// Deep-merge helper where `base` wins on conflicts.
/**
 * @param {Record<string, any>} base
 * @param {Record<string, any>} extra
 */
export function deepMergePreferBase(base, extra) {
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

/**
 * @param {any[]} mainTags
 * @param {any[]} sdkTags
 */
export function mergeTags(mainTags, sdkTags) {
  const mainList = Array.isArray(mainTags) ? mainTags : [];
  const sdkList = Array.isArray(sdkTags) ? sdkTags : [];

  const byName = new Map();
  for (const tag of mainList) {
    if (tag?.name !== undefined) byName.set(tag.name, tag);
  }

  const extras = [];
  for (const tag of sdkList) {
    if (tag?.name === undefined) continue;
    if (!byName.has(tag.name)) extras.push(tag);
  }

  return [...mainList, ...extras];
}

/**
 * @param {Record<string, any>} mainPaths
 * @param {Record<string, any>} sdkPaths
 */
export function mergePaths(mainPaths, sdkPaths) {
  const out = isPlainObject(mainPaths) ? structuredClone(mainPaths) : {};
  const sdk = isPlainObject(sdkPaths) ? sdkPaths : {};

  for (const [route, sdkPathItem] of Object.entries(sdk)) {
    if (!isPlainObject(sdkPathItem)) continue;

    if (out[route] === undefined) {
      out[route] = sdkPathItem;
      continue;
    }

    if (!isPlainObject(out[route])) {
      out[route] = sdkPathItem;
      continue;
    }

    // Preserve bundled path metadata but let SDK overrides replace operations
    // so legacy operationIds stay stable.
    for (const method of METHOD_KEYS) {
      if (sdkPathItem[method] !== undefined) {
        out[route][method] = sdkPathItem[method];
      }
    }

    out[route] = deepMergePreferBase(out[route], sdkPathItem);
  }

  return out;
}

/** @param {any} spec */
export function collectOperationLocations(spec) {
  const locations = new Set();
  for (const [route, item] of Object.entries(spec?.paths ?? {})) {
    for (const method of METHOD_KEYS) {
      if (/** @type {any} */ (item)?.[method]?.operationId !== undefined) {
        locations.add(`${method.toUpperCase()} ${route}`);
      }
    }
  }
  return locations;
}

/** @param {any} value */
export function sanitizeOperationIdSuffix(value) {
  return String(value)
    .replace(/[{}]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80);
}

/**
 * @param {any} mergedSpec
 * @param {any} sdkSpec
 */
export function dedupeOperationIds(mergedSpec, sdkSpec) {
  const sdkLocations = collectOperationLocations(sdkSpec);

  // Friendly overrides for known collisions between legacy SDK paths and the bundled spec.
  const overrides = new Map([
    ["GET /transaction/timeline/{id}", "transaction_timeline_by_id"],
    ["POST /customer/authorization/deactivate", "customer_authorization_deactivate"],
    ["GET /dedicated_account/{id}", "dedicated_account_fetch_by_id"],
    ["DELETE /dedicated_account/{id}", "dedicated_account_deactivate_by_id"],
    ["GET /settlement/{id}/transactions", "settlement_transactions"],
  ]);

  const groups = new Map();
  for (const [route, item] of Object.entries(mergedSpec?.paths ?? {})) {
    for (const method of METHOD_KEYS) {
      const op = /** @type {any} */ (item)?.[method];
      const operationId = op?.operationId;
      if (operationId === undefined) continue;

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
    const keepers = occurrences.filter((/** @type {any} */ o) => sdkLocations.has(o.loc));
    const keepSet = new Set(
      (keepers.length > 0 ? keepers : [occurrences[0]]).map((/** @type {any} */ o) => o.loc),
    );

    for (const occ of occurrences) {
      if (keepSet.has(occ.loc)) continue;

      let nextId = overrides.get(occ.loc);
      if (nextId === undefined) {
        const suffix = sanitizeOperationIdSuffix(`${occ.method}_${occ.route}`);
        nextId = `${operationId}_${suffix}`;
      }

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

/** @param {any} schema */
function isObjectSchema(schema) {
  return isPlainObject(schema) && schema.type === "object" && isPlainObject(schema.properties);
}

/**
 * @param {any} schema
 * @param {string} propertyName
 */
function removeFromRequired(schema, propertyName) {
  if (!Array.isArray(schema.required)) return;
  schema.required = schema.required.filter((/** @type {string} */ name) => name !== propertyName);
  if (schema.required.length === 0) delete schema.required;
}

/**
 * @param {any} schema
 * @param {string} snakeKey
 * @param {string} camelKey
 */
export function dedupeTimestampCasing(schema, snakeKey, camelKey) {
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

/** @param {any} spec */
export function sanitizeSdkSpecForGenerators(spec) {
  const pairs = [
    ["paid_at", "paidAt"],
    ["created_at", "createdAt"],
    ["updated_at", "updatedAt"],
  ];

  /** @param {any} node */
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

/**
 * @param {any} bundledSpec
 * @param {any} sdkOverrides
 */
export function projectSdkSpec(bundledSpec, sdkOverrides) {
  const sdkSpec = isPlainObject(sdkOverrides) ? sdkOverrides : {};
  const mergedSpec = structuredClone(bundledSpec);

  mergedSpec.tags = mergeTags(bundledSpec?.tags, sdkSpec?.tags);
  mergedSpec.paths = mergePaths(bundledSpec?.paths, sdkSpec?.paths);
  mergedSpec.components = deepMergePreferBase(
    bundledSpec?.components ?? {},
    sdkSpec?.components ?? {},
  );

  dedupeOperationIds(mergedSpec, sdkSpec);
  sanitizeSdkSpecForGenerators(mergedSpec);

  return mergedSpec;
}
