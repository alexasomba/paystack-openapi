# alexasomba-paystack

Python client for the Paystack API, generated from the Paystack OpenAPI spec in this repository.

## Why this SDK

- Generated from the Paystack OpenAPI source of truth in this repo
- Includes opt-in helpers for timeouts, retries, idempotency, and structured API errors
- Keeps generated models and APIs aligned with the SDK generation spec

## Requirements

Python 3.9+

## Installation

```sh
pip install alexasomba-paystack
```

Or from source:

```sh
pip install git+https://github.com/alexasomba/paystack-python.git
```

Then import:

```python
import alexasomba_paystack
```

Authenticate requests with your Paystack secret key through the generated configuration object:

```python
configuration = alexasomba_paystack.Configuration(
    access_token="sk_test_...",
)
```

## Quick Start

```python
import os

import alexasomba_paystack
from alexasomba_paystack.api.transaction_api import TransactionApi
from alexasomba_paystack.models.transaction_initialize import TransactionInitialize

configuration = alexasomba_paystack.Configuration(
    access_token=os.environ["PAYSTACK_SECRET_KEY"],
)

with alexasomba_paystack.ApiClient(configuration) as api_client:
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

## API Basics

- Base URL: `https://api.paystack.co`
- HTTPS is required for all requests.
- Requests and responses are JSON-based.
- Most successful responses follow the `status`, `message`, `data`, and optional `meta` envelope described in `Paystack-API/0a-Introduction.md`.
- Amounts are usually sent in currency subunits such as kobo, pesewas, or cents. Check the module docs for currency-specific rules.

## Authentication & Environments

- Server-side SDKs should use your secret key (`sk_test_*` or `sk_live_*`).
- Browser SDKs should use only your public key (`pk_test_*` or `pk_live_*`).
- Send server-side API credentials as `Authorization: Bearer YOUR_SECRET_KEY`.
- Test and live modes use different keys and isolated environments.
- Rotate keys if they are exposed, and never commit secret keys to source control.
- If you enable IP whitelisting in Paystack, requests from non-whitelisted IPs will be blocked.

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

## Pagination

- Paystack supports both offset pagination and cursor pagination.
- Offset pagination uses `page` and `perPage`.
- Cursor pagination uses `use_cursor=true` plus `next` or `previous` cursors returned in `meta`.
- Cursor pagination is especially useful for large or frequently changing datasets.
- The exact `meta` shape varies by endpoint and pagination mode.

## Coverage

## Errors

- Paystack uses conventional HTTP status codes such as `200`, `201`, `400`, `401`, `404`, and `5xx`.
- Error responses typically include `status`, `message`, `type`, `code`, and optional diagnostic `meta` information.
- Error types described in `Paystack-API/0d-Errors.md` include `api_error`, `validation_error`, and `processor_error`.
- For charge and verify flows, always inspect the returned response body and status fields, not just the HTTP code.

This SDK is generated from the SDK spec in this monorepo and covers the operations emitted into the generated API modules under `alexasomba_paystack.api`.

## Modules

For this SDK, these schema families are emitted as generated model modules under `alexasomba_paystack.models` and used by the generated API modules under `alexasomba_paystack.api`.

| Module                                                               | Schema / model family                                    |
| -------------------------------------------------------------------- | -------------------------------------------------------- |
| Transactions                                                         | `Transaction*`                                           |
| Verify Payments (Transaction verification)                           | `VerifyResponse / TransactionFetchResponse`              |
| Charges                                                              | `Charge*`                                                |
| Bulk Charges                                                         | `BulkCharge*`                                            |
| Subaccounts                                                          | `Subaccount*`                                            |
| Transaction Splits                                                   | `Split*`                                                 |
| Terminal                                                             | `Terminal*`                                              |
| Virtual Terminal                                                     | `VirtualTerminal*`                                       |
| Customers                                                            | `Customer*`                                              |
| Direct Debit                                                         | `DirectDebit*`                                           |
| Dedicated Virtual Accounts                                           | `DedicatedNuban* / DedicatedVirtualAccount*`             |
| Apple Pay                                                            | `ApplePay*`                                              |
| Plans                                                                | `Plan*`                                                  |
| Subscriptions                                                        | `Subscription*`                                          |
| Transfer Recipients                                                  | `TransferRecipient*`                                     |
| Transfers                                                            | `Transfer*`                                              |
| Transfers Control (OTP settings; under Transfers)                    | `TransferEnable* / TransferDisable* / TransferFinalize*` |
| Balance                                                              | `Balance*`                                               |
| Payment Requests (Invoices)                                          | `PaymentRequest*`                                        |
| Verification (Resolve Account / Validate Account / Resolve Card BIN) | `Verification*`                                          |
| Products                                                             | `Product*`                                               |
| Storefronts                                                          | `Storefront*`                                            |
| Orders                                                               | `Order*`                                                 |
| Payment Pages                                                        | `Page*`                                                  |
| Settlements                                                          | `Settlement*`                                            |
| Integration                                                          | `Integration*`                                           |
| Control Panel (Payment session timeout; under Integration)           | `ControlPanel*`                                          |
| Refunds                                                              | `Refund*`                                                |
| Disputes                                                             | `Dispute*`                                               |
| Banks                                                                | `Bank*`                                                  |
| Miscellaneous                                                        | `Miscellaneous* / Currency`                              |

## Module Examples

These are intentionally short examples. Use them as entry points, then expand the generated models and method arguments for your use case.

### Transactions

```python
response = transaction_api.transaction_initialize(
    transaction_initialize=TransactionInitialize(email="customer@example.com", amount=5000)
)
```

### Verify Payments (Transaction verification)

```python
verified = transaction_api.transaction_verify("ref_123")
```

### Charges

```python
charge_api.charge_create(
    charge_create_request=ChargeCreateRequest(email="customer@example.com")
)
```

### Bulk Charges

```python
bulk_charge_api.bulk_charge_initiate([
    BulkChargeInitiate(authorization="AUTH_xxx", amount=5000, reference="bulk-ref-1")
])
```

### Subaccounts

```python
subaccount_api.subaccount_create(
    subaccount_create=SubaccountCreate(business_name="Acme Stores")
)
```

### Transaction Splits

```python
split_api.split_create(
    split_create=SplitCreate(name="Main split", type="percentage", currency="NGN")
)
```

### Terminal

```python
terminals = terminal_api.terminal_list()
```

### Virtual Terminal

```python
virtual_terminal_api.virtual_terminal_create(
    virtual_terminal_create=VirtualTerminalCreate(name="Web checkout terminal")
)
```

### Customers

```python
customer_api.customer_create(
    customer_create=CustomerCreate(email="customer@example.com")
)
```

### Direct Debit

```python
direct_debit_api.directdebit_initialize(
    direct_debit_initialize_request=DirectDebitInitializeRequest(email="customer@example.com")
)
```

### Dedicated Virtual Accounts

```python
dedicated_virtual_account_api.dedicated_account_assign(
    dedicated_virtual_account_assign=DedicatedVirtualAccountAssign(customer=12345)
)
```

### Apple Pay

```python
apple_pay_api.apple_pay_register_domain(
    apple_pay_param=ApplePayParam(domain_name="example.com")
)
```

### Plans

```python
plan_api.plan_create(
    plan_create=PlanCreate(name="Starter", amount=500000, interval="monthly")
)
```

### Subscriptions

```python
subscription_api.subscription_create(
    subscription_create=SubscriptionCreate(customer="CUS_xxx", plan="PLN_xxx")
)
```

### Transfer Recipients

```python
transfer_recipient_api.transferrecipient_create(
    transfer_recipient_create=TransferRecipientCreate(name="Ada Lovelace", type="nuban")
)
```

### Transfers

```python
transfer_api.transfer_create(
    transfer_initiate=TransferInitiate(source="balance", amount=5000, recipient="RCP_xxx")
)
```

### Transfers Control (OTP settings; under Transfers)

```python
transfer_api.transfer_enable_otp()
```

### Balance

```python
balance = balance_api.balance_fetch()
```

### Payment Requests (Invoices)

```python
payment_request_api.payment_request_create(
    payment_request_create=PaymentRequestCreate(amount=5000, description="Consulting invoice")
)
```

### Verification (Resolve Account / Validate Account / Resolve Card BIN)

```python
resolved = bank_api.bank_resolve_account_number("0001234567", "057")
```

### Products

```python
product_api.product_create(
    product_create=ProductCreate(name="T-shirt", price=5000, currency="NGN")
)
```

### Storefronts

```python
storefronts = storefront_api.storefront_list()
```

### Orders

```python
order_api.order_create(order_create=OrderCreate(customer="CUS_xxx"))
```

### Payment Pages

```python
page_api.page_create(page_create=PageCreate(name="Event Ticket", amount=5000))
```

### Settlements

```python
settlements = settlement_api.settlement_list()
```

### Integration

```python
timeout = integration_api.integration_fetch_payment_session_timeout()
```

### Control Panel (Payment session timeout; under Integration)

```python
integration_api.integration_update_payment_session_timeout(20)
```

### Refunds

```python
refund_api.refund_create(refund_create=RefundCreate(transaction=123456789, amount=5000))
```

### Disputes

```python
disputes = dispute_api.dispute_list()
```

### Banks

```python
banks = bank_api.bank_list(country="nigeria")
```

### Miscellaneous

```python
countries = miscellaneous_api.miscellaneous_list_countries()
```

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
- Standalone SDK repo: [https://github.com/alexasomba/paystack-python](https://github.com/alexasomba/paystack-python)
