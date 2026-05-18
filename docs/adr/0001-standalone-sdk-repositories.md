# ADR 0001: Keep Synced SDK Repositories Standalone

## Status

Accepted

## Context

The monorepo is the source of truth for the Paystack OpenAPI spec and SDK generation workflow. Each SDK is later synced into its own GitHub repository, and the TypeScript SDKs also publish their own npm packages.

Architecture refactors should improve Locality inside the monorepo without making split SDK repositories depend on unpublished monorepo-only files.

## Decision

Synced SDK repositories must remain standalone. Shared SDK tooling may live in the monorepo, but any runtime or build-time code required by a split SDK must be present inside that SDK folder after generation or declared as an intentional public dependency.

## Consequences

- Monorepo Modules can generate, copy, or template shared code into SDK folders.
- Split SDK packages must still build and publish from their own repository after sync.
- Refactors that centralize TypeScript runtime or operation generation need an Adapter step that materializes the required files into each standalone SDK.
