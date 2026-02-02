# Paystack OpenAPI & SDKs

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
