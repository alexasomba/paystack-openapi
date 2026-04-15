# Go API client for paystack

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

This SDK includes opt-in helpers in `reliability.go`:

```go
opts := paystack.DefaultReliabilityOptions()
opts.Timeout = 30 * time.Second
opts.Idempotency.Enabled = true
client, ctx := paystack.NewAPIClientWithReliability(os.Getenv("PAYSTACK_SECRET_KEY"), opts)
```

Use these helpers when you want one place to standardize timeout, retry, and idempotency behavior across services.

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

This SDK is generated from [api/openapi.yaml](./api/openapi.yaml) and currently ships with the full set of operations produced from the Paystack-API-aligned SDK spec.

## Modules

For this SDK, these schema families are emitted as generated Go models in the package root and referenced by the generated API services.

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

These are intentionally short examples. Use them as entry points, then expand the typed request structs and fluent request builders shown by the generated package.

### Transactions

```go
resp, _, err := client.TransactionAPI.TransactionInitialize(ctx).
  TransactionInitialize(paystack.TransactionInitialize{Email: "customer@example.com", Amount: paystack.PtrInt32(5000)}).
  Execute()
```

### Verify Payments (Transaction verification)

```go
verified, _, err := client.TransactionAPI.TransactionVerify(ctx, "ref_123").Execute()
```

### Charges

```go
_, _, err := client.ChargeAPI.ChargeCreate(ctx).
  ChargeCreate(paystack.ChargeCreateRequest{Email: "customer@example.com"}).
  Execute()
```

### Bulk Charges

```go
_, _, err := client.BulkChargeAPI.BulkChargeInitiate(ctx).
  BulkChargeInitiate([]paystack.BulkChargeInitiate{{Authorization: "AUTH_xxx", Amount: 5000, Reference: "bulk-ref-1"}}).
  Execute()
```

### Subaccounts

```go
_, _, err := client.SubaccountAPI.SubaccountCreate(ctx).
  SubaccountCreate(paystack.SubaccountCreate{BusinessName: "Acme Stores"}).
  Execute()
```

### Transaction Splits

```go
_, _, err := client.SplitAPI.SplitCreate(ctx).
  SplitCreate(paystack.SplitCreate{Name: "Main split", Type: "percentage", Currency: "NGN"}).
  Execute()
```

### Terminal

```go
terminals, _, err := client.TerminalAPI.TerminalList(ctx).Execute()
```

### Virtual Terminal

```go
_, _, err := client.VirtualTerminalAPI.VirtualTerminalCreate(ctx).
  VirtualTerminalCreate(paystack.VirtualTerminalCreate{Name: "Web checkout terminal"}).
  Execute()
```

### Customers

```go
_, _, err := client.CustomerAPI.CustomerCreate(ctx).
  CustomerCreate(paystack.CustomerCreate{Email: "customer@example.com"}).
  Execute()
```

### Direct Debit

```go
_, _, err := client.DirectDebitAPI.DirectdebitInitialize(ctx).
  DirectDebitInitializeRequest(paystack.DirectDebitInitializeRequest{Email: "customer@example.com"}).
  Execute()
```

### Dedicated Virtual Accounts

```go
_, _, err := client.DedicatedVirtualAccountAPI.DedicatedAccountAssign(ctx).
  DedicatedVirtualAccountAssign(paystack.DedicatedVirtualAccountAssign{Customer: 12345}).
  Execute()
```

### Apple Pay

```go
_, _, err := client.ApplePayAPI.ApplePayRegisterDomain(ctx).
  ApplePayParam(paystack.ApplePayParam{DomainName: "example.com"}).
  Execute()
```

### Plans

```go
_, _, err := client.PlanAPI.PlanCreate(ctx).
  PlanCreate(paystack.PlanCreate{Name: "Starter", Amount: 500000, Interval: "monthly"}).
  Execute()
```

### Subscriptions

```go
_, _, err := client.SubscriptionAPI.SubscriptionCreate(ctx).
  SubscriptionCreate(paystack.SubscriptionCreate{Customer: "CUS_xxx", Plan: "PLN_xxx"}).
  Execute()
```

### Transfer Recipients

```go
_, _, err := client.TransferRecipientAPI.TransferrecipientCreate(ctx).
  TransferRecipientCreate(paystack.TransferRecipientCreate{Name: "Ada Lovelace", Type: "nuban"}).
  Execute()
```

### Transfers

```go
_, _, err := client.TransferAPI.TransferCreate(ctx).
  TransferInitiate(paystack.TransferInitiate{Source: "balance", Amount: 5000, Recipient: "RCP_xxx"}).
  Execute()
```

### Transfers Control (OTP settings; under Transfers)

```go
_, _, err := client.TransferAPI.TransferEnableOtp(ctx).Execute()
```

### Balance

```go
balance, _, err := client.BalanceAPI.BalanceFetch(ctx).Execute()
```

### Payment Requests (Invoices)

```go
_, _, err := client.PaymentRequestAPI.PaymentRequestCreate(ctx).
  PaymentRequestCreate(paystack.PaymentRequestCreate{Amount: 5000, Description: "Consulting invoice"}).
  Execute()
```

### Verification (Resolve Account / Validate Account / Resolve Card BIN)

```go
resolved, _, err := client.BankAPI.BankResolveAccountNumber(ctx).
  AccountNumber("0001234567").
  BankCode("057").
  Execute()
```

### Products

```go
_, _, err := client.ProductAPI.ProductCreate(ctx).
  ProductCreate(paystack.ProductCreate{Name: "T-shirt", Price: 5000, Currency: "NGN"}).
  Execute()
```

### Storefronts

```go
storefronts, _, err := client.StorefrontAPI.StorefrontList(ctx).Execute()
```

### Orders

```go
_, _, err := client.OrderAPI.OrderCreate(ctx).
  OrderCreate(paystack.OrderCreate{Customer: "CUS_xxx"}).
  Execute()
```

### Payment Pages

```go
_, _, err := client.PageAPI.PageCreate(ctx).
  PageCreate(paystack.PageCreate{Name: "Event Ticket", Amount: 5000}).
  Execute()
```

### Settlements

```go
settlements, _, err := client.SettlementAPI.SettlementList(ctx).Execute()
```

### Integration

```go
timeout, _, err := client.IntegrationAPI.IntegrationFetchPaymentSessionTimeout(ctx).Execute()
```

### Control Panel (Payment session timeout; under Integration)

```go
_, _, err := client.IntegrationAPI.IntegrationUpdatePaymentSessionTimeout(ctx).
  Timeout(20).
  Execute()
```

### Refunds

```go
_, _, err := client.RefundAPI.RefundCreate(ctx).
  RefundCreate(paystack.RefundCreate{Transaction: 123456789, Amount: paystack.PtrInt32(5000)}).
  Execute()
```

### Disputes

```go
disputes, _, err := client.DisputeAPI.DisputeList(ctx).Execute()
```

### Banks

```go
banks, _, err := client.BankAPI.BankList(ctx).
  Country("nigeria").
  Execute()
```

### Miscellaneous

```go
countries, _, err := client.MiscellaneousAPI.MiscellaneousListCountries(ctx).Execute()
```

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
- Standalone SDK repo: [https://github.com/alexasomba/paystack-go](https://github.com/alexasomba/paystack-go)
