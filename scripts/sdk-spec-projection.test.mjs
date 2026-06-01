import assert from "node:assert/strict";
import test from "node:test";

import { projectSdkSpec } from "./sdk-spec-projection.mjs";

void test("projectSdkSpec keeps SDK operationIds and dedupes canonical collisions", () => {
  const canonicalSpec = {
    openapi: "3.0.4",
    paths: {
      "/customer/authorization/deactivate": {
        post: {
          operationId: "customer_deactivateAuthorization",
        },
      },
      "/legacy/customer/authorization/deactivate": {
        post: {
          operationId: "customer_deactivateAuthorization",
        },
      },
    },
    components: {},
  };

  const sdkOverrides = {
    paths: {
      "/legacy/customer/authorization/deactivate": {
        post: {
          operationId: "customer_deactivateAuthorization",
        },
      },
    },
  };

  const projected = projectSdkSpec(canonicalSpec, sdkOverrides);

  assert.equal(
    projected.paths["/legacy/customer/authorization/deactivate"].post.operationId,
    "customer_deactivateAuthorization",
  );
  assert.equal(
    projected.paths["/customer/authorization/deactivate"].post.operationId,
    "customer_authorization_deactivate",
  );
});

void test("projectSdkSpec keeps SDK-only components without overriding canonical components", () => {
  const projected = projectSdkSpec(
    {
      openapi: "3.0.4",
      paths: {},
      components: {
        schemas: {
          Canonical: { type: "string" },
          Shared: { type: "string" },
        },
      },
    },
    {
      components: {
        schemas: {
          SdkOnly: { type: "number" },
          Shared: { type: "number" },
        },
      },
    },
  );

  assert.deepEqual(projected.components.schemas.Canonical, { type: "string" });
  assert.deepEqual(projected.components.schemas.SdkOnly, { type: "number" });
  assert.deepEqual(projected.components.schemas.Shared, { type: "string" });
});

void test("projectSdkSpec removes duplicate timestamp casings for generators", () => {
  const projected = projectSdkSpec(
    {
      openapi: "3.0.4",
      paths: {},
      components: {
        schemas: {
          Transaction: {
            type: "object",
            required: ["created_at", "createdAt", "paid_at"],
            properties: {
              created_at: { type: "string" },
              createdAt: { type: "string" },
              paid_at: { type: "string" },
              paidAt: { type: "string" },
            },
          },
        },
      },
    },
    {},
  );

  const schema = projected.components.schemas.Transaction;

  assert.equal(schema.properties.created_at, undefined);
  assert.deepEqual(schema.properties.createdAt, { type: "string" });
  assert.deepEqual(schema.properties.paid_at, { type: "string" });
  assert.equal(schema.properties.paidAt, undefined);
  assert.deepEqual(schema.required, ["createdAt", "paid_at"]);
});
