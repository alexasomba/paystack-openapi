# Payment Requests

The Payment Requests API allows you manage requests for payment of goods and services.

## Create Payment Request

Create a payment request for a transaction on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `customer` (`String`): Customer ID or code
- `amount` (`Integer`): Payment request amount. It should be used when `line_items` and `tax` aren't specified.
- `due_date` (`Datetime`, optional): ISO 8601 representation of request due date
- `description` (`String`, optional): A short description of the payment request
- `line_items` (`Array`, optional): Array of line items in the format `[{"name":"item 1", "amount":2000, "quantity": 1}]`
- `tax` (`Array`, optional): Array of taxes to be charged in the format `[{"name":"VAT", "amount":2000}]`
- `currency` (`String`, optional): Specify the currency of the payment request. Defaults to `NGN`.
- `send_notification` (`Boolean`, optional): Indicates whether Paystack sends an email notification to customer. Defaults to `true`
- `draft` (`Boolean`, optional): Indicate if request should be saved as draft. Defaults to `false` and overrides `send_notification`
- `has_invoice` (`Boolean`, optional): Set to `true` to create a draft payment request (adds an auto incrementing payment request number if none is provided) even if there are no `line_items` or `tax` passed
- `invoice_number` (`Integer`, optional): Numeric value of the payment request. Payment Requests will start from 1 and auto increment from there. This field is to help override whatever value Paystack decides. Auto increment for subsequent payment requests continue from this point.
- `split_code` (`String`, optional): The split code of the transaction split. e.g. `SPL_98WF13Eb3w`

**Endpoint:** `POST /paymentrequest`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "description": "a test invoice",
  "line_items": [
    {"name": "item 1", "amount": 20000},
    {"name": "item 2", "amount": 20000}
  ],
  "tax": [
    {"name": "VAT", "amount": 2000}
  ],
  "customer": "CUS_xwaj0txjryg393b",
  "due_date": "2020-07-08"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment request created",
  "data": {
    "id": 3136406,
    "domain": "test",
    "amount": 42000,
    "currency": "NGN",
    "due_date": "2020-07-08T00:00:00.000Z",
    "has_invoice": true,
    "invoice_number": 1,
    "description": "a test invoice",
    "line_items": [
      {
        "name": "item 1",
        "amount": 20000
      },
      {
        "name": "item 2",
        "amount": 20000
      }
    ],
    "tax": [
      {
        "name": "VAT",
        "amount": 2000
      }
    ],
    "request_code": "PRQ_1weqqsn2wwzgft8",
    "status": "pending",
    "paid": false,
    "metadata": null,
    "notifications": [],
    "offline_reference": "4286263136406",
    "customer": 25833615,
    "created_at": "2020-06-29T16:07:33.073Z"
  }
}
```

## List Payment Requests

List the payment requests available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify the page you want to fetch payment requests from. If not specified, we use a default value of 1.
- `customer` (`String`, optional): Filter by customer ID
- `status` (`String`, optional): Filter by payment request status
- `currency` (`String`, optional): Filter by currency
- `include_archive` (`String`, optional): Show archived payment requests
- `from` (`Datetime`, optional): A timestamp from which to start listing payment requests e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing payment requests e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /paymentrequest`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment requests retrieved",
  "data": [
    {
      "id": 3136406,
      "domain": "test",
      "amount": 42000,
      "currency": "NGN",
      "due_date": "2020-07-08T00:00:00.000Z",
      "has_invoice": true,
      "invoice_number": 1,
      "description": "a test invoice",
      "pdf_url": null,
      "line_items": [
        {
          "name": "item 1",
          "amount": 20000
        },
        {
          "name": "item 2",
          "amount": 20000
        }
      ],
      "tax": [
        {
          "name": "VAT",
          "amount": 2000
        }
      ],
      "request_code": "PRQ_1weqqsn2wwzgft8",
      "status": "pending",
      "paid": false,
      "paid_at": null,
      "metadata": null,
      "notifications": [],
      "offline_reference": "4286263136406",
      "customer": {
        "id": 25833615,
        "first_name": "Damilola",
        "last_name": "Odujoko",
        "email": "damilola@example.com",
        "customer_code": "CUS_xwaj0txjryg393b",
        "phone": null,
        "metadata": {
          "calling_code": "+234"
        },
        "risk_action": "default",
        "international_format_phone": null
      },
      "created_at": "2020-06-29T16:07:33.000Z"
    }
  ],
  "meta": {
    "total": 1,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 1
  }
}
```

## Fetch Payment Request

Get details of a payment request on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): The payment request ID or code you want to fetch

**Endpoint:** `GET /paymentrequest/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment request retrieved",
  "data": {
    "transactions": [],
    "domain": "test",
    "request_code": "PRQ_1weqqsn2wwzgft8",
    "description": "a test invoice",
    "line_items": [
      {
        "name": "item 1",
        "amount": 20000
      },
      {
        "name": "item 2",
        "amount": 20000
      }
    ],
    "tax": [
      {
        "name": "VAT",
        "amount": 2000
      }
    ],
    "amount": 42000,
    "discount": null,
    "currency": "NGN",
    "due_date": "2020-07-08T00:00:00.000Z",
    "status": "pending",
    "paid": false,
    "paid_at": null,
    "metadata": null,
    "has_invoice": true,
    "invoice_number": 1,
    "offline_reference": "4286263136406",
    "pdf_url": null,
    "notifications": [],
    "archived": false,
    "source": "user",
    "payment_method": null,
    "note": null,
    "amount_paid": null,
    "id": 3136406,
    "integration": 428626,
    "customer": {
      "transactions": [],
      "subscriptions": [],
      "authorizations": [],
      "first_name": "Damilola",
      "last_name": "Odujoko",
      "email": "damilola@example.com",
      "phone": null,
      "metadata": {
        "calling_code": "+234"
      },
      "domain": "test",
      "customer_code": "CUS_xwaj0txjryg393b",
      "risk_action": "default",
      "id": 25833615,
      "integration": 428626,
      "createdAt": "2020-06-29T16:06:53.000Z",
      "updatedAt": "2020-06-29T16:06:53.000Z"
    },
    "createdAt": "2020-06-29T16:07:33.000Z",
    "updatedAt": "2020-06-29T16:07:33.000Z",
    "pending_amount": 42000
  }
}
```

## Verify Payment Request

Verify details of a payment request on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): Payment Request code

**Endpoint:** `GET /paymentrequest/verify/:code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest/verify/:code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment request retrieved",
  "data": {
    "id": 3136406,
    "domain": "test",
    "amount": 42000,
    "currency": "NGN",
    "due_date": "2020-07-08T00:00:00.000Z",
    "has_invoice": true,
    "invoice_number": 1,
    "description": "a test invoice",
    "pdf_url": null,
    "line_items": [
      {
        "name": "item 1",
        "amount": 20000
      },
      {
        "name": "item 2",
        "amount": 20000
      }
    ],
    "tax": [
      {
        "name": "VAT",
        "amount": 2000
      }
    ],
    "request_code": "PRQ_1weqqsn2wwzgft8",
    "status": "pending",
    "paid": false,
    "paid_at": null,
    "metadata": null,
    "notifications": [],
    "offline_reference": "4286263136406",
    "customer": {
      "id": 25833615,
      "first_name": "Damilola",
      "last_name": "Odujoko",
      "email": "damilola@example.com",
      "customer_code": "CUS_xwaj0txjryg393b",
      "phone": null,
      "metadata": {
        "calling_code": "+234"
      },
      "risk_action": "default",
      "international_format_phone": null
    },
    "created_at": "2020-06-29T16:07:33.000Z",
    "integration": {
      "key": "pk_test_xxxxxxxx",
      "name": "Paystack Documentation",
      "logo": "https://s3-eu-west-1.amazonaws.com/pstk-integration-logos/paystack.jpg",
      "allowed_currencies": ["NGN", "USD"]
    },
    "pending_amount": 42000
  }
}
```

## Send Notification

Send notification of a payment request to your customers

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): Payment Request code

**Endpoint:** `POST /paymentrequest/notify/:code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest/notify/:code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Notification sent"
}
```

## Payment Request Totals

Get payment requests metrics

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

**Endpoint:** `GET /paymentrequest/totals`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest/totals"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment request totals",
  "data": {
    "pending": [
      {
        "currency": "NGN",
        "amount": 42000
      },
      {
        "currency": "USD",
        "amount": 0
      }
    ],
    "successful": [
      {
        "currency": "NGN",
        "amount": 0
      },
      {
        "currency": "USD",
        "amount": 0
      }
    ],
    "total": [
      {
        "currency": "NGN",
        "amount": 42000
      },
      {
        "currency": "USD",
        "amount": 0
      }
    ]
  }
}
```

## Finalize Payment Request

Finalize a draft payment request

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): Payment Request code

### Body Parameters

- `send_notification` (`Boolean`, optional): Indicates whether Paystack sends an email notification to customer. Defaults to `true`

**Endpoint:** `POST /paymentrequest/finalize/:code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest/finalize/:code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment request finalized",
  "data": {
    "id": 3136496,
    "domain": "test",
    "amount": 45000,
    "currency": "NGN",
    "due_date": "2020-06-30T22:59:59.000Z",
    "has_invoice": true,
    "invoice_number": 2,
    "description": "Testing Invoice",
    "pdf_url": null,
    "line_items": [
      {
        "name": "Water",
        "amount": 15000,
        "quantity": 1
      },
      {
        "name": "Bread",
        "amount": 30000,
        "quantity": 1
      }
    ],
    "tax": [],
    "request_code": "PRQ_rtjkfk1tpmvqo40",
    "status": "pending",
    "paid": false,
    "paid_at": null,
    "metadata": null,
    "notifications": [],
    "offline_reference": "4286263136496",
    "customer": {
      "id": 25833615,
      "first_name": "Damilola",
      "last_name": "Odujoko",
      "email": "damilola@email.com",
      "customer_code": "CUS_xwaj0txjryg393b",
      "phone": null,
      "metadata": {
        "calling_code": "+234"
      },
      "risk_action": "default",
      "international_format_phone": null
    },
    "created_at": "2020-06-29T16:22:35.000Z",
    "pending_amount": 45000
  }
}
```

## Update Payment Request

Update payment request details on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id_or_code` (`String`): Payment Request ID or code

### Body Parameters

- `customer` (`String`, optional): Customer ID or code
- `amount` (`Integer`, optional): Payment request amount. Only useful if `line_items` and `tax` values are ignored.
- `due_date` (`Datetime`, optional): ISO 8601 representation of request due date
- `description` (`String`, optional): A short description of the payment request
- `line_items` (`Array`, optional): Array of line items in the format `[{"name":"item 1", "amount":2000}]`
- `tax` (`Array`, optional): Array of taxes to be charged in the format `[{"name":"VAT", "amount":2000}]`
- `currency` (`String`, optional): Specify the currency of the payment request. Defaults to `NGN`.
- `send_notification` (`Boolean`, optional): Indicates whether Paystack sends an email notification to customer. Defaults to `true`
- `draft` (`Boolean`, optional): Indicate if request should be saved as draft. Defaults to `false` and overrides `send_notification`
- `invoice_number` (`Integer`, optional): Numeric value of the payment request.
- `split_code` (`String`, optional): The split code of the transaction split. e.g. `SPL_98WF13Eb3w`

**Endpoint:** `PUT /paymentrequest/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "description": "Update test invoice",
  "due_date": "2017-05-10"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment request updated",
  "data": {
    "id": 3136496,
    "domain": "test",
    "amount": 45000,
    "currency": "NGN",
    "due_date": "2020-06-30T22:59:59.000Z",
    "has_invoice": true,
    "invoice_number": 2,
    "description": "Update Testing",
    "pdf_url": null,
    "line_items": [
      {
        "name": "Water",
        "amount": 15000,
        "quantity": 1
      },
      {
        "name": "Bread",
        "amount": 30000,
        "quantity": 1
      }
    ],
    "tax": [],
    "request_code": "PRQ_rtjkfk1tpmvqo40",
    "status": "pending",
    "paid": false,
    "paid_at": null,
    "metadata": null,
    "notifications": [],
    "offline_reference": "4286263136496",
    "customer": {
      "id": 25833615,
      "first_name": "Doc",
      "last_name": "Test",
      "email": "doc@test.com",
      "customer_code": "CUS_xwaj0txjryg393b",
      "phone": null,
      "metadata": {
        "calling_code": "+234"
      },
      "risk_action": "default",
      "international_format_phone": null
    },
    "created_at": "2020-06-29T16:22:35.000Z"
  }
}
```

## Archive Payment Request

Used to archive a payment request. A payment request will no longer be fetched on list or returned on verify

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): Payment Request code

**Endpoint:** `POST /paymentrequest/archive/:code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/paymentrequest/archive/:code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -H "$content_type" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment request has been archived"
}
```
