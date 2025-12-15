import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const START = "<!-- paystack-openapi:readme-start -->";
const END = "<!-- paystack-openapi:readme-end -->";

function upsertHeaderBlock(readme, headerBlock) {
	const block = `${START}\n${headerBlock.trim()}\n${END}\n\n`;

	if (readme.includes(START) && readme.includes(END)) {
		return readme.replace(new RegExp(`${START}[\\s\\S]*?${END}\\n?\\n?`, "m"), block);
	}

	// Insert after the first Markdown H1 line if present, otherwise at top.
	const h1Match = readme.match(/^# .*\n/m);
	if (h1Match?.index === 0) {
		const h1Line = h1Match[0];
		return readme.replace(h1Line, `${h1Line}\n${block}`);
	}

	return `${block}${readme}`;
}

async function readText(filePath) {
	return fs.readFile(filePath, "utf8");
}

async function writeTextIfChanged(filePath, next) {
	const prev = await readText(filePath);
	if (prev === next) return false;
	await fs.writeFile(filePath, next, "utf8");
	return true;
}

function normalizeNewlines(text) {
	return text.replace(/\r\n/g, "\n");
}

function postprocessPython(readme) {
	let next = normalizeNewlines(readme);

	next = upsertHeaderBlock(
		next,
		[
			"## Why this SDK",
			"",
			"This SDK is generated from the Paystack OpenAPI spec in this repository, so it stays aligned with the API surface and request/response models.",
			"",
			"## Reliability (timeouts, retries, idempotency, errors)",
			"",
			"This package includes opt-in helpers in `alexasomba_paystack.extras`:",
			"",
			"```python",
			"from alexasomba_paystack.extras import create_paystack_client, PaystackApiError",
			"client = create_paystack_client(\"YOUR_SECRET_KEY\", timeout_seconds=30, idempotency=True)",
			"```",
			"",
			"## Modules",
			"",
			"- Transactions",
			"- Verify Payments (Transaction verification)",
			"- Charges",
			"- Bulk Charges",
			"- Subaccounts",
			"- Transaction Splits",
			"- Terminal",
			"- Virtual Terminal",
			"- Customers",
			"- Direct Debit",
			"- Dedicated Virtual Accounts",
			"- Apple Pay",
			"- Plans",
			"- Subscriptions",
			"- Transfer Recipients",
			"- Transfers",
			"- Transfers Control (OTP settings; under Transfers)",
			"- Balance",
			"- Payment Requests (Invoices)",
			"- Verification (Resolve Account / Validate Account / Resolve Card BIN)",
			"- Products",
			"- Storefronts",
			"- Orders",
			"- Payment Pages",
			"- Settlements",
			"- Integration",
			"- Control Panel (Payment session timeout; under Integration)",
			"- Refunds",
			"- Disputes",
			"- Banks",
			"- Miscellaneous",
			"",
			"## Coverage",
			"",
			"Covers endpoints described in `openapi.yaml` in this folder.",
		].join("\n"),
	);

	// Fix monorepo pip install instructions (OpenAPI Generator default is wrong for monorepos).
	const pipSectionRe = /### pip install[\s\S]*?### Setuptools\n/m;
	const pipReplacement = [
		"### pip install (from this monorepo)",
		"",
		"Because this repository is a monorepo, install the Python package using `#subdirectory=sdks/python`:",
		"",
		"```sh",
		"pip install \"alexasomba_paystack @ git+https://github.com/alexasomba/paystack-openapi.git#subdirectory=sdks/python\"",
		"```",
		"",
		"Then import the package:",
		"```python",
		"import alexasomba_paystack",
		"```",
		"",
		"### Setuptools",
		"",
	].join("\n");
	if (pipSectionRe.test(next)) {
		next = next.replace(pipSectionRe, `${pipReplacement}`);
	}

	// Fix missing `import os` in the Getting Started snippet.
	next = next.replace(
		/\nimport alexasomba_paystack\nfrom alexasomba_paystack\.rest import ApiException\n/m,
		"\nimport alexasomba_paystack\nimport os\nfrom alexasomba_paystack.rest import ApiException\n",
	);

	return next;
}

function postprocessPhp(readme) {
	let next = normalizeNewlines(readme);

	next = upsertHeaderBlock(
		next,
		[
			"## Why this SDK",
			"",
			"This SDK is generated from the Paystack OpenAPI spec in this repository.",
			"",
			"## Reliability (timeouts, retries, idempotency, errors)",
			"",
			"This package includes opt-in helpers in `Alexasomba\\Paystack\\Extras`:",
			"",
			"```php",
			"use Alexasomba\\Paystack\\Extras\\HttpClientFactory;",
			"use Alexasomba\\Paystack\\Extras\\Paystack;",
			"use Alexasomba\\Paystack\\Extras\\PaystackApiError;",
			"$config = Paystack::createConfiguration($_ENV['PAYSTACK_SECRET_KEY']);",
			"$client = HttpClientFactory::create(['timeoutSeconds' => 30, 'idempotency' => ['enabled' => true, 'auto' => true]]);",
			"```",
			"",
			"## Modules",
			"",
			"- Transactions",
			"- Verify Payments (Transaction verification)",
			"- Charges",
			"- Bulk Charges",
			"- Subaccounts",
			"- Transaction Splits",
			"- Terminal",
			"- Virtual Terminal",
			"- Customers",
			"- Direct Debit",
			"- Dedicated Virtual Accounts",
			"- Apple Pay",
			"- Plans",
			"- Subscriptions",
			"- Transfer Recipients",
			"- Transfers",
			"- Transfers Control (OTP settings; under Transfers)",
			"- Balance",
			"- Payment Requests (Invoices)",
			"- Verification (Resolve Account / Validate Account / Resolve Card BIN)",
			"- Products",
			"- Storefronts",
			"- Orders",
			"- Payment Pages",
			"- Settlements",
			"- Integration",
			"- Control Panel (Payment session timeout; under Integration)",
			"- Refunds",
			"- Disputes",
			"- Banks",
			"- Miscellaneous",
			"",
			"## Coverage",
			"",
			"Covers endpoints described in `openapi.yaml` in this folder.",
		].join("\n"),
	);

	// Composer instructions generated by default are incorrect for monorepos (SDK lives in sdks/php).
	const composerSectionRe = /### Composer[\s\S]*?### Manual Installation\n/m;
	const composerReplacement = [
		"### Composer (from this monorepo)",
		"",
		"Because this repository is a monorepo, Composer cannot install the `sdks/php` subdirectory directly from the VCS URL alone.",
		"",
		"To use it today:",
		"",
		"1. Clone this repo locally",
		"2. Add a path repository pointing at `sdks/php`",
		"",
		"Example `composer.json`:",
		"",
		"```json",
		"{",
		"  \"repositories\": [",
		"    {",
		"      \"type\": \"path\",",
		"      \"url\": \"../path/to/paystack-openapi/sdks/php\",",
		"      \"options\": { \"symlink\": true }",
		"    }",
		"  ],",
		"  \"require\": {",
		"    \"alexasomba/paystack-openapi\": \"*\"",
		"  }",
		"}",
		"```",
		"",
		"Then run `composer install`.",
		"",
		"### Manual Installation",
		"",
	].join("\n");
	if (composerSectionRe.test(next)) {
		next = next.replace(composerSectionRe, `${composerReplacement}`);
	}

	return next;
}

function postprocessGo(readme) {
	let next = normalizeNewlines(readme);

	next = upsertHeaderBlock(
		next,
		[
			"## Why this SDK",
			"",
			"This SDK is generated from the Paystack OpenAPI spec in this repository.",
			"",
			"## Reliability (timeouts, retries, idempotency, errors)",
			"",
			"This package includes opt-in helpers in `reliability.go`:",
			"",
			"```go",
			"opts := paystack.DefaultReliabilityOptions()",
			"opts.Timeout = 30 * time.Second",
			"opts.Idempotency.Enabled = true",
			"client, ctx := paystack.NewAPIClientWithReliability(os.Getenv(\"PAYSTACK_SECRET_KEY\"), opts)",
			"```",
			"",
			"## Modules",
			"",
			"- Transactions",
			"- Verify Payments (Transaction verification)",
			"- Charges",
			"- Bulk Charges",
			"- Subaccounts",
			"- Transaction Splits",
			"- Terminal",
			"- Virtual Terminal",
			"- Customers",
			"- Direct Debit",
			"- Dedicated Virtual Accounts",
			"- Apple Pay",
			"- Plans",
			"- Subscriptions",
			"- Transfer Recipients",
			"- Transfers",
			"- Transfers Control (OTP settings; under Transfers)",
			"- Balance",
			"- Payment Requests (Invoices)",
			"- Verification (Resolve Account / Validate Account / Resolve Card BIN)",
			"- Products",
			"- Storefronts",
			"- Orders",
			"- Payment Pages",
			"- Settlements",
			"- Integration",
			"- Control Panel (Payment session timeout; under Integration)",
			"- Refunds",
			"- Disputes",
			"- Banks",
			"- Miscellaneous",
			"",
			"## Coverage",
			"",
			"Covers endpoints described in `openapi.yaml` in this folder.",
		].join("\n"),
	);

	// Replace installation section with a go-mod friendly install.
	const installationRe = /## Installation[\s\S]*?## Configuration of Server URL\n/m;
	const installationReplacement = [
		"## Installation",
		"",
		"```sh",
		"go get github.com/alexasomba/paystack-openapi/sdks/go@latest",
		"```",
		"",
		"Then import:",
		"",
		"```go",
		"import paystack \"github.com/alexasomba/paystack-openapi/sdks/go\"",
		"```",
		"",
		"## Configuration of Server URL",
		"",
	].join("\n");
	if (installationRe.test(next)) {
		next = next.replace(installationRe, installationReplacement);
	}

	return next;
}

async function main() {
	const targets = [
		{
			name: "python",
			filePath: path.join(repoRoot, "sdks/python/README.md"),
			fn: postprocessPython,
		},
		{
			name: "php",
			filePath: path.join(repoRoot, "sdks/php/README.md"),
			fn: postprocessPhp,
		},
		{
			name: "go",
			filePath: path.join(repoRoot, "sdks/go/README.md"),
			fn: postprocessGo,
		},
	];

	const results = await Promise.all(
		targets.map(async ({ name, filePath, fn }) => {
			try {
				const prev = await readText(filePath);
				const next = fn(prev);
				const changed = await writeTextIfChanged(filePath, next);
				return { name, changed };
			} catch (error) {
				return { name, changed: false, error };
			}
		}),
	);

	const failed = results.filter((r) => r.error);
	if (failed.length) {
		for (const f of failed) {
			console.error(`[sdk:readme] Failed for ${f.name}:`, f.error);
		}
		process.exitCode = 1;
		return;
	}

	const changed = results.filter((r) => r.changed).map((r) => r.name);
	if (changed.length) {
		console.log(`[sdk:readme] Updated: ${changed.join(", ")}`);
	} else {
		console.log("[sdk:readme] No changes needed");
	}
}

await main();
