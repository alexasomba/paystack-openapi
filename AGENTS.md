# Paystack OpenAPI & SDKs

<!-- intent-skills:start -->

# Skill mappings - when working in these areas, load the linked skill file into context.

skills:

- task: "manage project development, CLI operations, and unified toolchain workflows using Vite+ (vp)"
load: ".agents/skills/vite-plus/SKILL.md"
<!-- intent-skills:end -->

This repository serves as the central source of truth for the Paystack API OpenAPI specification and the generated Client Libraries (SDKs). It is a monorepo managed with `pnpm`.

## Project Structure

- **`src/assets/base/`**: Contains the monolithic OpenAPI specification (`paystack.yaml`) used as the source for splitting.
- **`src/assets/openapi/`**: The source directory for the split OpenAPI specification files.
- **`src/assets/sdk/paystack.yaml`**: A specialized version of the spec used specifically for SDK generation.
- **`src/assets/use_cases/`**: Source files for specialized API bundles (e.g., betting, lending, wallet).
- **`dist/`**: Contains the bundled OpenAPI specification files (e.g., `paystack.yaml`, `betting.yaml`) generated from `src`.
- **`sdks/`**: Contains the client libraries.
  - **`sdks/node`**, **`sdks/axios`**, **`sdks/browser`**, **`sdks/inline`**: TypeScript/JavaScript SDKs.
  - **`sdks/go`**, **`sdks/php`**, **`sdks/python`**: Generated SDKs using OpenAPI Generator.
- **`Paystack-API/`**: Human-readable prose documentation for the API, used for synchronizing documentation sites and Postman collections.
- **`scripts/`**: Automation scripts for post-processing generated code and synchronizing SDKs.

## Core Workflows

This project uses **Vite+** (`vp`) as its primary toolchain. While `pnpm` can still be used to run scripts, `vp` is preferred for development, linting, and testing.

### 1. Working with the Spec

To modify the API specification, edit the files in `src/assets/openapi`.

- **Start Local Server (Watch Mode):**
  Bundles the spec and serves it locally at http://localhost:7070.

  ```bash
  vp run dev
  ```

- **Bundle Spec:**
  Combines the split files into `dist/paystack.yaml` and generates use-case bundles.

  ```bash
  vp run bundle
  ```

- **Split Spec:**
  Rebuilds the split specification files in `src/assets/openapi` from the monolithic `src/assets/base/paystack.yaml`.

  ```bash
  vp run split
  ```

- **Validate & Lint Spec:**
  Runs a comprehensive validation suite including `vp check` (code), `spectral` (OAS), and `vacuum` (OAS).
  ```bash
  vp run validate
  # or
  vp run lint
  ```

### 2. Generating SDKs

SDK generation workflows differ by language.

- **TypeScript/JavaScript (Node, Axios, Browser, Inline):**

  ```bash
  # Build all TS SDKs
  vp run sdk:build

  # Generate types for Node SDK specifically
  vp run sdk:node:generate
  ```

- **Go, PHP, Python:**
  These require **Docker** to run the OpenAPI Generator. Ensure the Docker daemon is running before executing.

  ```bash
  # Generate all three
  vp run sdk:others:generate
  ```

- **Cleanup:**
  Cleans build artifacts in all SDK directories.
  ```bash
  vp run sdk:clean
  ```

### 3. Testing & Type-checking

Ensures code quality and consistency across the monorepo.

```bash
# Run tests for all SDKs
vp run test

# Run type-checks for all TS SDKs
vp run typecheck
```

### 4. Syncing & Publishing

- **Sync to Local Workspace:**
  Synchronizes generated SDKs to the parallel `paystack-sdks` directory (usually located in the same parent folder).

  ```bash
  vp run sdk:sync:local
  ```

- **Sync All SDKs (Remote):**
  Pushes synchronized contents to their respective GitHub repositories.

  ```bash
  vp run sdk:sync:all
  ```

- **Full Sync (Local + Remote):**
  Performs both local and remote synchronization in one step.

  ```bash
  vp run sdk:sync:full
  ```

- **Publish TS SDKs to npm:**
  The monorepo workflow in `.github/workflows/publish-npm.yml` publishes only on tag pushes matching `v*` or manual dispatch. A push to `main` alone does not publish to npm.

  ```bash
  git tag v1.9.2
  git push origin v1.9.2
  ```

- **Versioning Before Publish:**
  The `sdks/node`, `sdks/axios`, and `sdks/browser` `package.json` versions must be bumped before triggering npm publish. Syncing code alone is not enough.

## Strategic Guidance for Agents

- **Validation First:** Always run `vp run validate` after modifying the spec and before generating or syncing SDKs.
- **Docker Dependency:** The generation of Go, PHP, and Python SDKs relies on Docker. If generation fails, check the Docker daemon state.
- **Local Dev Loop:** When working on SDK features, use `vp run sdk:sync:local` to verify changes in the `paystack-sdks` workspace before committing.
- **Dependency Management:** If encountering cross-package errors, verify the workspace links in `pnpm-workspace.yaml`.
- **TS SDK Releases:** For `node`, `axios`, and `browser`, bump package versions, build, push the SDK repos, and then push the matching `v*` tag in each SDK repo to trigger the release workflow.

## Conventions

- **Source of Truth:** Always edit the spec in `src/assets/openapi` or `src/assets/sdk`. Do not manually edit generated code in `sdks/go`, `sdks/php`, or `sdks/python`.
- **Tooling:**
  - **Redocly:** Used for bundling and splitting the specification.
  - **Spectral & Vacuum:** Used for OpenAPI linting and quality assurance.
  - **Vite+ (vp):** Unified toolchain for all core development tasks.
- **Versioning:** SDKs follow semantic versioning synced with the main spec tags.
