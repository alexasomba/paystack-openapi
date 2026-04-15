# {{package_name}}

Python client for the Paystack API, generated from the Paystack OpenAPI spec in this repository.

## Why this SDK

- Generated from the Paystack OpenAPI source of truth in this repo
- Includes opt-in helpers for timeouts, retries, idempotency, and structured API errors
- Keeps generated models and APIs aligned with the SDK generation spec

## Requirements

Python 3.9+

## Installation

```sh
pip install {{package_name}}
```

Or from source:

```sh
pip install git+https://github.com/alexasomba/paystack-python.git
```

Then import:

```python
import {{package_slug}}
```

Authenticate requests with your Paystack secret key through the generated configuration object:

```python
configuration = {{package_slug}}.Configuration(
    access_token="sk_test_...",
)
```

## Quick Start

```python
import os

import {{package_slug}}
from {{package_slug}}.api.transaction_api import TransactionApi
from {{package_slug}}.models.transaction_initialize import TransactionInitialize

configuration = {{package_slug}}.Configuration(
    access_token=os.environ["PAYSTACK_SECRET_KEY"],
)

with {{package_slug}}.ApiClient(configuration) as api_client:
    api = TransactionApi(api_client)
    response = api.transaction_initialize(
        transaction_initialize=TransactionInitialize(
            email="customer@example.com",
            amount=5000,
        )
    )
    print(response.data.authorization_url)
```

Generated API calls return typed model instances. Catch `ApiException` when you need raw HTTP response details while debugging.

{{api_basics}}

{{authentication}}

## Reliability

This SDK includes opt-in helpers in `alexasomba_paystack.extras`:

```python
from alexasomba_paystack.extras import create_paystack_client

client = create_paystack_client(
    "YOUR_SECRET_KEY",
    timeout_seconds=30,
    idempotency=True,
)
```

Use the extras layer when you want a higher-level client with timeout, retry, and idempotency behavior preconfigured.

{{pagination_overview}}

## Coverage

{{errors_overview}}

This SDK is generated from the SDK spec in this monorepo and covers the operations emitted into the generated API modules under `alexasomba_paystack.api`.

## Modules

For this SDK, these schema families are emitted as generated model modules under `alexasomba_paystack.models` and used by the generated API modules under `alexasomba_paystack.api`.

{{module_schema_table}}

## Module Examples

These are intentionally short examples. Use them as entry points, then expand the generated models and method arguments for your use case.

{{module_examples}}

## Configuration Notes

The generated Python client still exposes the standard OpenAPI Generator configuration surface. In normal usage, the main thing you need is bearer token configuration plus any optional HTTP client tuning.

## Related SDKs

- Node: [alexasomba/paystack-node](https://github.com/alexasomba/paystack-node)
- Axios: [alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios)
- Browser: [alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser)
- Go: [alexasomba/paystack-go](https://github.com/alexasomba/paystack-go)
- PHP: [alexasomba/paystack-php](https://github.com/alexasomba/paystack-php)

## Source

- Monorepo source: [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Standalone SDK repo: [{{sdk_repo_url}}]({{sdk_repo_url}})
