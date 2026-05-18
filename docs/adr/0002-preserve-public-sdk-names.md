# ADR 0002: Preserve Public SDK Names By Default

## Status

Accepted

## Context

The SDKs are distributed as independent packages. Users may import helpers, call generated operation methods, and rely on generated model/type names. Silent renames would create unnecessary migration work.

Paystack's public API docs and changelog favor compatibility-oriented evolution: new functionality is added, deprecated behavior is documented, and migration guidance is provided for changed endpoints.

## Decision

Public SDK names are preserved by default. This includes package names, exported helpers, operation method names, and generated model/type names. Renaming any public surface requires an intentional major-version plan or a compatibility Adapter.

## Consequences

- Architecture work should snapshot or otherwise verify public names before and after generator changes.
- Deeper Modules may change internal Implementation, but the public Interface should stay stable.
- If a better naming scheme is introduced later, the old names should remain as compatibility Adapters unless the release is explicitly breaking.
