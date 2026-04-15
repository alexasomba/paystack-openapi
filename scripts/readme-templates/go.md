# {{package_name}}

Go client for the Paystack API, generated from the Paystack OpenAPI spec in this repository.

## Why this SDK

- Generated from the Paystack OpenAPI source of truth in this repo
- Includes reliability helpers for timeouts, retries, idempotency, and structured API errors
- Tracks the same endpoint coverage as the bundled SDK spec used for client generation

## Installation

```sh
go get github.com/alexasomba/paystack-go@latest
```

Then import:

```go
import paystack "github.com/alexasomba/paystack-go"
```

Authenticate requests by attaching your Paystack secret key as a bearer token header on the generated configuration.

## Quick Start

```go
package main

import (
	"context"
	"fmt"
	"os"

	paystack "github.com/alexasomba/paystack-go"
)

func main() {
	cfg := paystack.NewConfiguration()
	cfg.AddDefaultHeader("Authorization", "Bearer "+os.Getenv("PAYSTACK_SECRET_KEY"))

	client := paystack.NewAPIClient(cfg)
	resp, _, err := client.TransactionAPI.TransactionInitialize(context.Background()).
		TransactionInitialize(paystack.TransactionInitialize{
			Email:  "customer@example.com",
			Amount: paystack.PtrInt32(5000),
		}).
		Execute()
	if err != nil {
		panic(err)
	}

fmt.Println(resp.Data.AuthorizationUrl)
}
```

The generated client returns the typed Paystack response object, the raw HTTP response, and an error. Check both the error and the response payload when debugging integration issues.

{{api_basics}}

{{authentication}}

## Reliability

This SDK includes opt-in helpers in `reliability.go`:

```go
opts := paystack.DefaultReliabilityOptions()
opts.Timeout = 30 * time.Second
opts.Idempotency.Enabled = true
client, ctx := paystack.NewAPIClientWithReliability(os.Getenv("PAYSTACK_SECRET_KEY"), opts)
```

Use these helpers when you want one place to standardize timeout, retry, and idempotency behavior across services.

{{pagination_overview}}

## Coverage

{{errors_overview}}

This SDK is generated from [api/openapi.yaml](./api/openapi.yaml) and currently ships with the full set of operations produced from the Paystack-API-aligned SDK spec.

## Modules

For this SDK, these schema families are emitted as generated Go models in the package root and referenced by the generated API services.

{{module_schema_table}}

## Module Examples

These are intentionally short examples. Use them as entry points, then expand the typed request structs and fluent request builders shown by the generated package.

{{module_examples}}

## Configuration Notes

The generated Go client still exposes the standard OpenAPI Generator server configuration surface. In most integrations, the only thing you need to override is the bearer token header.

## Related SDKs

- Node: [alexasomba/paystack-node](https://github.com/alexasomba/paystack-node)
- Axios: [alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios)
- Browser: [alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser)
- PHP: [alexasomba/paystack-php](https://github.com/alexasomba/paystack-php)
- Python: [alexasomba/paystack-python](https://github.com/alexasomba/paystack-python)

## Source

- Monorepo source: [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Standalone SDK repo: [{{sdk_repo_url}}]({{sdk_repo_url}})
