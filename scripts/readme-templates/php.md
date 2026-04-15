# {{package_name}}

PHP client for the Paystack API, generated from the Paystack OpenAPI spec in this repository.

## Why this SDK

- Generated from the Paystack OpenAPI source of truth in this repo
- Includes opt-in helpers for timeouts, retries, idempotency, and structured API errors
- Keeps generated models and API classes aligned with the SDK generation spec

## Requirements

PHP 8.1 and later.

## Installation

```sh
composer require alexasomba/paystack
```

Or from source:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/alexasomba/paystack-php.git"
    }
  ],
  "require": {
    "alexasomba/paystack": "*"
  }
}
```

Authenticate requests with your Paystack secret key through the generated configuration object:

```php
$config = Configuration::getDefaultConfiguration()
    ->setAccessToken($_ENV['PAYSTACK_SECRET_KEY']);
```

## Quick Start

```php
<?php

require_once __DIR__ . '/vendor/autoload.php';

use Alexasomba\Paystack\Api\TransactionApi;
use Alexasomba\Paystack\Configuration;
use Alexasomba\Paystack\Model\TransactionInitialize;
use GuzzleHttp\Client;

$config = Configuration::getDefaultConfiguration()
    ->setAccessToken($_ENV['PAYSTACK_SECRET_KEY']);

$api = new TransactionApi(new Client(), $config);
$response = $api->transactionInitialize(
    new TransactionInitialize([
        'email' => 'customer@example.com',
        'amount' => 5000,
    ])
);

echo $response->getData()->getAuthorizationUrl() . PHP_EOL;
```

Generated API methods return typed model objects. Catch `ApiException` when you need raw status codes, headers, or response bodies while debugging.

{{api_basics}}

{{authentication}}

## Reliability

This SDK includes opt-in helpers in `Alexasomba\Paystack\Extras`:

```php
use Alexasomba\Paystack\Extras\HttpClientFactory;
use Alexasomba\Paystack\Extras\Paystack;

$config = Paystack::createConfiguration($_ENV['PAYSTACK_SECRET_KEY']);
$client = HttpClientFactory::create([
    'timeoutSeconds' => 30,
    'idempotency' => ['enabled' => true, 'auto' => true],
]);
```

Use the extras layer when you want one place to set timeout, retry, and idempotency defaults across your application.

{{pagination_overview}}

## Coverage

{{errors_overview}}

This SDK is generated from the SDK spec in this monorepo and covers the operations emitted into the generated API classes under `lib/Api`.

## Modules

For this SDK, these schema families are emitted as generated model classes under `lib/Model` and used by the API classes under `lib/Api`.

{{module_schema_table}}

## Module Examples

These are intentionally short examples. Use them as entry points, then expand the generated model objects and API method arguments for your use case.

{{module_examples}}

## Configuration Notes

The generated PHP client still exposes the standard OpenAPI Generator configuration surface. In most integrations, the main requirement is setting the bearer token and optionally swapping in a custom Guzzle client.

## Related SDKs

- Node: [alexasomba/paystack-node](https://github.com/alexasomba/paystack-node)
- Axios: [alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios)
- Browser: [alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser)
- Go: [alexasomba/paystack-go](https://github.com/alexasomba/paystack-go)
- Python: [alexasomba/paystack-python](https://github.com/alexasomba/paystack-python)

## Source

- Monorepo source: [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Standalone SDK repo: [{{sdk_repo_url}}]({{sdk_repo_url}})
