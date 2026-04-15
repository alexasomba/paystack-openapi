# Paystack OpenAPI & SDKs

<!-- intent-skills:start -->

# Skill mappings - when working in these areas, load the linked skill file into context.

skills:

- task: "manage project development, CLI operations, and unified toolchain workflows using Vite+ (vp)"
load: ".agents/skills/vite-plus/SKILL.md"
<!-- intent-skills:end -->

This repository serves as the central source of truth for the Paystack API OpenAPI specification and the generated Client Libraries (SDKs). It is a monorepo managed with `pnpm`.

## Project Structure

- **`src/assets/openapi/`**: The source directory for the OpenAPI specification, split into manageable files.
- **`src/assets/sdk/paystack.yaml`**: A specialized version of the spec used specifically for SDK generation.
- **`dist/`**: Contains the bundled OpenAPI specification files (e.g., `paystack.yaml`) generated from `src`.
- **`sdks/`**: Contains the client libraries.
  - **`sdks/node`**, **`sdks/axios`**, **`sdks/browser`**: TypeScript/JavaScript SDKs.
  - **`sdks/go`**, **`sdks/php`**, **`sdks/python`**: Generated SDKs using OpenAPI Generator.
- **`scripts/`**: Automation scripts for post-processing generated code and synchronizing SDKs to their respective repositories.

## Getting Started

### Prerequisites

- Node.js & pnpm
- Docker (required for generating Go, PHP, and Python SDKs)
- Java (sometimes required by OpenAPI generator dependencies, though Docker encapsulates this)

### Installation

```bash
pnpm install
```

## Core Workflows

### 1. Working with the Spec

To modify the API specification, edit the files in `src/assets/openapi`.

- **Start Local Server (Watch Mode):**
  Bundles the spec and serves it locally (usually http://localhost:7070).

  ```bash
  pnpm dev
  ```

- **Bundle Spec:**
  Combines the split files into a single `dist/paystack.yaml`.

  ```bash
  pnpm bundle
  ```

- **Lint Spec:**
  Validates the specification using Spectral.
  ```bash
  pnpm lint
  ```

### 2. Generating SDKs

SDK generation workflows differ by language.

- **TypeScript/JavaScript (Node, Axios, Browser):**

  ```bash
  # Build TS SDKs
  pnpm sdk:build

  # Generate types for Node SDK
  pnpm sdk:node:generate
  ```

- **Go, PHP, Python:**
  These require **Docker** to run the OpenAPI Generator.

  ```bash
  # Generate all three
  pnpm sdk:others:generate

  # Or individually:
  pnpm sdk:python:generate
  pnpm sdk:php:generate
  pnpm sdk:go:generate
  ```

### 3. Syncing & Publishing

This repo synchronizes the contents of `sdks/` to separate GitHub repositories (e.g., `alexasomba/paystack-php`).

- **Sync All SDKs:**
  ```bash
  pnpm sdk:sync:all
  ```
- **Sync Individual SDK:**
  ```bash
  pnpm sdk:sync:php  # or :go, :python, :node, etc.
  ```

## Conventions

- **Source of Truth:** Always edit the spec in `src/assets/openapi` or `src/assets/sdk` (if targeting SDK changes specifically). Do not manually edit the generated code in `sdks/go`, `sdks/php`, or `sdks/python` as changes will be overwritten.
- **Tools:** Use `pnpm` for all script execution. `redocly` is used for bundling, `spectral` for linting.
- **Versioning:** SDKs likely follow semantic versioning synced with tags or release notes passed to the sync scripts.

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, but it invokes Vite through `vp dev` and `vp build`.

## Vite+ Workflow

`vp` is a global binary that handles the full development lifecycle. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

### Start

- create - Create a new project from a template
- migrate - Migrate an existing project to Vite+
- config - Configure hooks and agent integration
- staged - Run linters on staged files
- install (`i`) - Install dependencies
- env - Manage Node.js versions

### Develop

- dev - Run the development server
- check - Run format, lint, and TypeScript type checks
- lint - Lint code
- fmt - Format code
- test - Run tests

### Execute

- run - Run monorepo tasks
- exec - Execute a command from local `node_modules/.bin`
- dlx - Execute a package binary without installing it as a dependency
- cache - Manage the task cache

### Build

- build - Build for production
- pack - Build libraries
- preview - Preview production build

### Manage Dependencies

Vite+ automatically detects and wraps the underlying package manager such as pnpm, npm, or Yarn through the `packageManager` field in `package.json` or package manager-specific lockfiles.

- add - Add packages to dependencies
- remove (`rm`, `un`, `uninstall`) - Remove packages from dependencies
- update (`up`) - Update packages to latest versions
- dedupe - Deduplicate dependencies
- outdated - Check for outdated packages
- list (`ls`) - List installed packages
- why (`explain`) - Show why a package is installed
- info (`view`, `show`) - View package information from the registry
- link (`ln`) / unlink - Manage local package links
- pm - Forward a command to the package manager

### Maintain

- upgrade - Update `vp` itself to the latest version

These commands map to their corresponding tools. For example, `vp dev --port 3000` runs Vite's dev server and works the same as Vite. `vp test` runs JavaScript tests through the bundled Vitest. The version of all tools can be checked using `vp --version`. This is useful when researching documentation, features, and bugs.

## Common Pitfalls

- **Using the package manager directly:** Do not use pnpm, npm, or Yarn directly. Vite+ can handle all package manager operations.
- **Always use Vite commands to run tools:** Don't attempt to run `vp vitest` or `vp oxlint`. They do not exist. Use `vp test` and `vp lint` instead.
- **Running scripts:** Vite+ built-in commands (`vp dev`, `vp build`, `vp test`, etc.) always run the Vite+ built-in tool, not any `package.json` script of the same name. To run a custom script that shares a name with a built-in command, use `vp run <script>`. For example, if you have a custom `dev` script that runs multiple services concurrently, run it with `vp run dev`, not `vp dev` (which always starts Vite's dev server).
- **Do not install Vitest, Oxlint, Oxfmt, or tsdown directly:** Vite+ wraps these tools. They must not be installed directly. You cannot upgrade these tools by installing their latest versions. Always use Vite+ commands.
- **Use Vite+ wrappers for one-off binaries:** Use `vp dlx` instead of package-manager-specific `dlx`/`npx` commands.
- **Import JavaScript modules from `vite-plus`:** Instead of importing from `vite` or `vitest`, all modules should be imported from the project's `vite-plus` dependency. For example, `import { defineConfig } from 'vite-plus';` or `import { expect, test, vi } from 'vite-plus/test';`. You must not install `vitest` to import test utilities.
- **Type-Aware Linting:** There is no need to install `oxlint-tsgolint`, `vp lint --type-aware` works out of the box.

## CI Integration

For GitHub Actions, consider using [`voidzero-dev/setup-vp`](https://github.com/voidzero-dev/setup-vp) to replace separate `actions/setup-node`, package-manager setup, cache, and install steps with a single action.

```yaml
- uses: voidzero-dev/setup-vp@v1
  with:
    cache: true
- run: vp check
- run: vp test
```

## Review Checklist for Agents

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to validate changes.
<!--VITE PLUS END-->
