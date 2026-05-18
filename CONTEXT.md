# Context

## Domain Vocabulary

- **Canonical spec**: the public Paystack OpenAPI source under `src/assets/openapi`, bundled into `dist/paystack.yaml`.
- **SDK spec**: the generator-friendly OpenAPI projection at `src/assets/sdk/paystack.yaml`, synced into SDK folders as `openapi.yaml`.
- **SDK projection**: the rules that turn the canonical spec into the SDK spec, including SDK-only overrides, operation ID deduping, and generator-safe schema cleanup.
- **Generated SDK**: an SDK whose language bindings are produced from the SDK spec, currently Go, PHP, and Python.
- **TypeScript SDK**: a hand-maintained TypeScript package with generated OpenAPI types and operation helpers, currently Node, Axios, and Browser.
- **Inline SDK**: the hand-authored Paystack Popup wrapper in `sdks/inline`; it is synced like the other SDKs but does not ship an OpenAPI spec.
- **SDK registry**: the monorepo source of truth for SDK identity, package name, split GitHub repository, sync branch, required files, and generation style.
- **Use-case bundle**: a specialized OpenAPI bundle for a product scenario such as wallet, betting, lending, marketplace, membership, or savings.
- **Standalone SDK repo**: the destination repository for one SDK after sync. Standalone repos must contain everything needed for their own package build and release.

## Architecture Notes

- The canonical spec remains the public API source of truth.
- The SDK spec is a projection of the canonical spec, not a separate product surface.
- SDK packages are published independently, so generated or shared implementation must be copied into SDK folders before sync unless it is an explicit public dependency.
- Public SDK names are compatibility-sensitive. Operation method names, exported helpers, package names, and generated model/type names should be preserved unless a major release intentionally changes them.
