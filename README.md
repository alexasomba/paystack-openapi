# Paystack OpenAPI Specification

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The OpenAPI specification for the [Paystack API](https://paystack.com/docs/api).

## Getting Started

The [OpenAPI specification](https://swagger.io/specification/) provides another alternative to test the Paystack API.
You can download the specification and make use of it on:

- [SwaggerHub](https://swagger.io/tools/swaggerhub/)
- [OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)

## Set up locally

- Clone repo
  ```sh
  git clone git@github.com:alexasomba/paystack-openapi.git
  ```
- Navigate to the cloned project and install dependencies
  ```sh
  cd paystack-openapi
  vp install
  ```
- Start the server to view the spec in your browser
  ```sh
  vp run dev
  ```
  > [!NOTE]
  > At the moment, the `paystack.yaml` file is the only spec that is automatically opened in your browser. If the spec doesn't open automatically in your browser, you can manually open http://localhost:7070 in your browser.

## Components

There are two top-level folders of interest in this repo:

- `src`: This contains the assets, scripts and basic .html for working and viewing the OpenAPI Specification (OAS) file.
  - `assets`: This contains the Paystack OAS files:
    - `base`: Monolithic OAS file (`paystack.yaml`) used as the source for splitting.
    - `openapi`: This contains the individual, manageable parts of the OAS.
    - `sdk`: This is a single file specification being used for client library generation. It contains just enough parameters for our client libraries.
    - `use_cases`: This is a collection of specifications containing APIs for common use cases of the Paystack API (e.g., `wallet.yaml`, `betting.yaml`). These are used to create the collections in our [Postman Workspace](https://www.postman.com/paystack-developers?tab=collections).
- `dist`: Contains the bundled OpenAPI specification files (e.g., `paystack.yaml`, `betting.yaml`) generated from `src`.

## SDKs

This repo also contains TypeScript SDKs generated from the OpenAPI spec in `src/assets/sdk/paystack.yaml`.

### Node (server)

- Package: `@alexasomba/paystack-node`

```ts
import { createPaystack } from "@alexasomba/paystack-node";

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
});

const { data, error } = await paystack.transaction_initialize({
  body: { email: "customer@example.com", amount: 5000 },
});

if (error) throw error;
```

### Axios (server)

- Package: `@alexasomba/paystack-axios`

```ts
import { createPaystack } from "@alexasomba/paystack-axios";

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
});

const { data, error } = await paystack.transaction_initialize({
  body: { email: "customer@example.com", amount: 5000 },
});

if (error) throw error;
```

### Browser

- Package: `@alexasomba/paystack-browser`

```ts
import { createPaystackClient } from "@alexasomba/paystack-browser";

const paystack = createPaystackClient({
  apiKey: "YOUR_API_KEY",
});

const { data, error } = await paystack.POST("/transaction/initialize", {
  body: { email: "customer@example.com", amount: 5000 },
});

if (error) throw error;
```

### Inline (JS/TS)

- Package: `@alexasomba/paystack-inline`

```ts
import { createPaystackInline } from "@alexasomba/paystack-inline";

const paystack = createPaystackInline({
  publicKey: "YOUR_PUBLIC_KEY",
});

paystack.setup({
  email: "customer@example.com",
  amount: 5000,
  onSuccess: (transaction) => {
    console.log("Payment successful", transaction);
  },
});
```

### Build locally

```sh
vp run sdk:build
```

### Sync and release readiness

The expected SDK release path is:

OpenAPI source flows into generated SDK source, then into split repos, and finally into published packages.

1. Update the OpenAPI source in `src/assets/openapi` or the SDK projection in `src/assets/sdk/paystack.yaml`.
2. Validate the spec with `vp run validate`.
3. Regenerate/build SDK sources with `vp run sdk:build` and language-specific generators when needed.
4. Run `vp run sdk:check:release` to confirm SDK source metadata, split repo metadata, npm versions, README links, and shipped specs are not stale.
5. Sync generated SDK output with `vp run sdk:sync:local` for local verification, then `vp run sdk:sync:all` when ready to push the split repos.
6. Push the matching `v*` tag to the source and split SDK repos, then create or refresh the GitHub Releases with `vp run sdk:release:github -- v1.10.7`.
7. Publish package releases from the split SDK repos after the generated source has been synced and package versions have been bumped. The TypeScript SDK repos publish to npm through `.github/workflows/publish-npm.yml` using npm Trusted Publisher, so no npm token is required in GitHub Actions.

### Other languages (generated)

The following SDKs are generated via OpenAPI Generator and live in the `sdks/` directory:

- Python: `sdks/python`
- PHP: `sdks/php`
- Go: `sdks/go`

Regenerate them with:

```sh
vp run sdk:others:generate
```

Each folder contains its own README with language-specific usage and install instructions.

### Packagist (PHP)

Packagist (public) expects a VCS repository where the package's `composer.json` is at the repository root. Since this repo is a monorepo and the PHP SDK lives in `sdks/php`, publishing to Packagist is handled by splitting `sdks/php` into its own repository.

- The dedicated PHP SDK repo is `alexasomba/paystack-php`.
- The normal release flow syncs generated PHP source and matching release tags to `alexasomba/paystack-php`.
- Packagist only needs the split repo and its tags. Use the `Register package on Packagist` workflow manually if the package needs to be created or refreshed.
- Configure `PACKAGIST_TOKEN` and, when the token is not already in `username:token` form, `PACKAGIST_USERNAME` for the manual registration workflow.

## Contributing

Here are some of the ways to contribute to this repository:

- Create a use case
- Raise an issue
- Suggest an improvement

## Issues

You can [open an issue](https://github.com/alexasomba/paystack-openapi/issues) if you discover any bug or have problems using this repo.

## License

This repository is made available under the MIT license. Kindly read the [LICENSE](https://github.com/alexasomba/paystack-openapi/blob/main/LICENSE) file for more information.
