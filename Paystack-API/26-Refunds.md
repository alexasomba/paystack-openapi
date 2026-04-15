# Refunds

The Refunds API allows you create and manage transaction refunds.

## Create Refund

Initiate a refund on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `transaction` (`String`): Transaction reference or ID
- `amount` (`Integer`, optional): Amount, in the subunit of the supported currency, to be refunded to the customer. Amount is optional (defaults to original transaction amount) and cannot be more than the original transaction amount.
- `currency` (`String`, optional): Any of the supported currency
- `customer_note` (`String`, optional): Customer reason
- `merchant_note` (`String`, optional): Merchant reason

**Endpoint:** `POST /refund`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/refund"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "transaction": 1641 }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Refund has been queued for processing",
  "data": {
    "transaction": {
      "id": 1004723697,
      "domain": "live",
      "reference": "T685312322670591",
      "amount": 10000,
      "paid_at": "2021-08-20T18:34:11.000Z",
      "channel": "apple_pay",
      "currency": "NGN",
      "authorization": {
        "exp_month": null,
        "exp_year": null,
        "account_name": null
      },
      "customer": {
        "international_format_phone": null
      },
      "plan": {},
      "subaccount": {
        "currency": null
      },
      "split": {},
      "order_id": null,
      "paidAt": "2021-08-20T18:34:11.000Z",
      "pos_transaction_data": null,
      "source": null,
      "fees_breakdown": null
    },
    "integration": 412829,
    "deducted_amount": 0,
    "channel": null,
    "merchant_note": "Refund for transaction T685312322670591 by test@me.com",
    "customer_note": "Refund for transaction T685312322670591",
    "status": "pending",
    "refunded_by": "test@me.com",
    "expected_at": "2021-12-16T09:21:17.016Z",
    "currency": "NGN",
    "domain": "live",
    "amount": 10000,
    "fully_deducted": false,
    "id": 3018284,
    "createdAt": "2021-12-07T09:21:17.122Z",
    "updatedAt": "2021-12-07T09:21:17.122Z"
  }
}
```

## Retry Refund

Retry a refund with a `needs-attention` status by providing the bank account details of a customer.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`Integer`): The ID of the previously initiated refund

### Body Parameters

- `refund_account_details` (`Object`): An object that contains the customer’s account details for refund
  - `currency` (`String`): Currency of the account
  - `account_number` (`String`): Account number
  - `bank_id` (`String`): Bank ID

**Endpoint:** `POST /refund/retry_with_customer_details/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/refund/retry_with_customer_details/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "refund_account_details": {
    "currency": "NGN",
    "account_number": "1234567890",
    "bank_id": "9"
  }
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Refund retried and has been queued for processing",
  "data": {
    "integration": 123456,
    "transaction": 3298598423,
    "dispute": null,
    "settlement": null,
    "id": 1234567,
    "domain": "live",
    "currency": "NGN",
    "amount": 20000,
    "status": "processing",
    "refunded_at": null,
    "expected_at": "2025-10-13T16:02:18.000Z",
    "channel": "isw_3ds",
    "refunded_by": "paystack@email.com",
    "customer_note": "Refund for transaction T708775813895475",
    "merchant_note": "Refund for transaction T708775813895475 by paystack@email.com",
    "deducted_amount": 20000,
    "fully_deducted": true,
    "bank_reference": null,
    "reason": "PROCESSING",
    "customer": null,
    "initiated_by": "paystack@email.com",
    "reversed_at": null,
    "session_id": null
  }
}
```

## List Refunds

List refunds available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `transaction` (`String`, optional): The transaction ID of the refunded transaction
- `currency` (`String`, optional): Any of the supported currency
- `from` (`Datetime`, optional): A timestamp from which to start listing refunds e.g. 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing refunds e.g. 2016-09-21
- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what refund you want to page. If not specified we use a default value of 1.

**Endpoint:** `GET /refund`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/refund"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Refunds retrieved",
  "data": [
    {
      "id": 1,
      "integration": 100982,
      "domain": "live",
      "transaction": 1641,
      "dispute": 20,
      "amount": 500000,
      "deducted_amount": 500000,
      "currency": "NGN",
      "channel": "migs",
      "fully_deducted": 1,
      "refunded_by": "customer@gmail.com",
      "refunded_at": "2018-01-12T10:54:47.000Z",
      "expected_at": "2017-10-01T21:10:59.000Z",
      "settlement": null,
      "customer_note": "xxx",
      "merchant_note": "xxx",
      "created_at": "2017-09-24T21:10:59.000Z",
      "updated_at": "2018-01-18T11:59:56.000Z",
      "status": "processed"
    }
  ]
}
```

## Fetch Refund

Get details of a refund on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The ID of the initiated refund

**Endpoint:** `GET /refund/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/refund/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Refund retrieved",
  "data": {
    "integration": 100982,
    "transaction": 1641,
    "dispute": null,
    "settlement": null,
    "domain": "live",
    "amount": 500000,
    "deducted_amount": 500000,
    "fully_deducted": true,
    "currency": "NGN",
    "channel": "migs",
    "status": "processed",
    "refunded_by": "eseyinwale@gmail.com",
    "refunded_at": "2018-01-12T10:54:47.000Z",
    "expected_at": "2017-10-01T21:10:59.000Z",
    "customer_note": "xxx",
    "merchant_note": "xxx",
    "id": 1,
    "createdAt": "2017-09-24T21:10:59.000Z",
    "updatedAt": "2018-01-18T11:59:56.000Z"
  }
}
```
