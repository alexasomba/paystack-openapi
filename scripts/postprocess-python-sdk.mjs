import fs from 'node:fs';
import path from 'node:path';

const sdkDir = path.resolve('sdks/python');
const modelsDir = path.join(sdkDir, 'alexasomba_paystack/models');
const pyprojectPath = path.join(sdkDir, 'pyproject.toml');
const gitPushPath = path.join(sdkDir, 'git_push.sh');

function updatePyproject(contents) {
  return contents.replace(
    /^Repository\s*=\s*".*"$/m,
    'Repository = "https://github.com/alexasomba/paystack-python"'
  );
}

function updateGitPush(contents) {
  return contents.replace(
    /^(\s*git_repo_id=)".*"$/m,
    '$1"paystack-python"'
  );
}

function syncAliasChoicesImport(contents) {
  const importRe = /^from pydantic import (.+)$/m;
  const match = contents.match(importRe);
  if (!match) return contents;

  const imported = match[1].split(',').map((s) => s.trim()).filter(Boolean);
  if (!imported.includes('Field')) return contents;

  const needsAliasChoices = contents.includes('AliasChoices(');
  const hasAliasChoices = imported.includes('AliasChoices');

  if (needsAliasChoices && !hasAliasChoices) {
    const updated = ['AliasChoices', ...imported].join(', ');
    return contents.replace(importRe, `from pydantic import ${updated}`);
  }

  if (!needsAliasChoices && hasAliasChoices) {
    const updated = imported.filter((name) => name !== 'AliasChoices').join(', ');
    return contents.replace(importRe, `from pydantic import ${updated}`);
  }

  return contents;
}

function fixFieldCollision(contents, fieldName, aliasName) {
  const plainFieldLineRe = new RegExp(
    `^([ \t]*)${fieldName}:([^\n]*?)=\\s*None\\s*$\\n?`,
    'm'
  );
  const aliasFieldLineRe = new RegExp(
    `^([ \t]*)${fieldName}:\\s*([^\n]+?)\\s*=\\s*Field\\(alias=["']${aliasName}["']\\)\\s*$`,
    'm'
  );

  const hasAliasField = aliasFieldLineRe.test(contents);
  const hasAliasChoicesAlready = contents.includes(
    `validation_alias=AliasChoices('${fieldName}', '${aliasName}')`
  );

  // Only patch files where we can reasonably infer the camelCase counterpart.
  if (!hasAliasField && !hasAliasChoicesAlready) return contents;

  let updated = contents;

  // Remove the non-aliased duplicate field line (if present).
  updated = updated.replace(plainFieldLineRe, '');

  if (hasAliasField) {
    // Rewrite the aliased field to accept both snake_case and camelCase input keys.
    updated = updated.replace(aliasFieldLineRe, (_m, indent, annotation) => {
      const isOptional = /\bOptional\[/.test(annotation);
      const defaultPart = isOptional ? 'default=None, ' : '';
      return (
        `${indent}${fieldName}: ${annotation} = Field(` +
        `${defaultPart}validation_alias=AliasChoices('${fieldName}', '${aliasName}'), ` +
        `serialization_alias='${aliasName}')`
      );
    });
  }

  // Update from_dict mapping to prefer snake_case, fallback to camelCase.
  // Case 1: generator uses JSON-key dict keys (e.g. "paidAt": obj.get("paidAt"))
  updated = updated.replace(
    new RegExp(`\"${aliasName}\": obj\\.get\\(\"${aliasName}\"\\),`, 'g'),
    `"${fieldName}": obj.get("${fieldName}") if obj.get("${fieldName}") is not None else obj.get("${aliasName}"),`
  );

  // Case 2: generator uses snake_case keys but reads camelCase values (e.g. "paid_at": obj.get("paidAt"))
  updated = updated.replace(
    new RegExp(`\"${fieldName}\": obj\\.get\\(\"${aliasName}\"\\),`, 'g'),
    `"${fieldName}": obj.get("${fieldName}") if obj.get("${fieldName}") is not None else obj.get("${aliasName}"),`
  );

  // Case 3: generator uses snake_case keys and values (e.g. "paid_at": obj.get("paid_at"))
  updated = updated.replace(
    new RegExp(`\"${fieldName}\": obj\\.get\\(\"${fieldName}\"\\),`, 'g'),
    `"${fieldName}": obj.get("${fieldName}") if obj.get("${fieldName}") is not None else obj.get("${aliasName}"),`
  );

  return updated;
}

function main() {
  if (!fs.existsSync(modelsDir)) {
    console.error(`postprocess-python-sdk: missing ${modelsDir}`);
    process.exitCode = 1;
    return;
  }

  const files = fs
    .readdirSync(modelsDir)
    .filter((file) => file.endsWith('.py'))
    .map((file) => path.join(modelsDir, file));

  let patched = 0;

  for (const filePath of files) {
    const original = fs.readFileSync(filePath, 'utf8');
    let updated = original;

    updated = fixFieldCollision(updated, 'paid_at', 'paidAt');
    updated = fixFieldCollision(updated, 'created_at', 'createdAt');
    updated = fixFieldCollision(updated, 'updated_at', 'updatedAt');
    updated = syncAliasChoicesImport(updated);

    if (updated !== original) {
      fs.writeFileSync(filePath, updated, 'utf8');
      patched += 1;
    }
  }

  if (fs.existsSync(pyprojectPath)) {
    const original = fs.readFileSync(pyprojectPath, 'utf8');
    const updated = updatePyproject(original);
    if (updated !== original) {
      fs.writeFileSync(pyprojectPath, updated, 'utf8');
      console.log('postprocess-python-sdk: updated pyproject.toml');
    }
  }

  if (fs.existsSync(gitPushPath)) {
    const original = fs.readFileSync(gitPushPath, 'utf8');
    const updated = updateGitPush(original);
    if (updated !== original) {
      fs.writeFileSync(gitPushPath, updated, 'utf8');
      console.log('postprocess-python-sdk: updated git_push.sh');
    }
  }

  console.log(`postprocess-python-sdk: patched ${patched} file(s)`);
}

main();
