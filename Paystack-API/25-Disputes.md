# Disputes

The Disputes API allows you manage transaction disputes on your integration.

## List Disputes

List disputes filed against you

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

from
Date
A timestamp from which to start listing dispute e.g. 2016-09-21

to
Date
A timestamp at which to stop listing dispute e.g. 2016-09-21

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what dispute you want to page. If not specified, we use a default value of 1.
- `transaction` (`String`, optional): Transaction Id
- `status` (`String`, optional): Dispute Status. Acceptable values: { awaiting-merchant-feedback | awaiting-bank-feedback | pending | resolved }

**Endpoint:** `GET /dispute`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dispute"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Disputes retrieved",
  "data": [
    {
      "id": 2867,
      "refund_amount": null,
      "currency": null,
      "status": "archived",
      "resolution": null,
      "domain": "test",
      "transaction": {
        "id": 5991760,
        "domain": "test",
        "status": "success",
        "reference": "asjck8gf76zd1dr",
        "amount": 39100,
        "message": null,
        "gateway_response": "Successful",
        "paid_at": "2017-11-09T00:01:56.000Z",
        "created_at": "2017-11-09T00:01:36.000Z",
        "channel": "card",
        "currency": "NGN",
        "ip_address": null,
        "metadata": "",
        "log": null,
        "fees": 587,
        "fees_split": null,
        "authorization": {},
        "customer": null,
        "plan": {},
        "subaccount": {},
        "split": {},
        "order_id": null,
        "paidAt": "2017-11-09T00:01:56.000Z",
        "createdAt": "2017-11-09T00:01:36.000Z",
        "pos_transaction_data": null
      },
      "transaction_reference": null,
      "category": null,
      "customer": {
        "id": 10207,
        "first_name": null,
        "last_name": null,
        "email": "shola@baddest.com",
        "customer_code": "CUS_unz4q52yjsd6064",
        "phone": null,
        "metadata": null,
        "risk_action": "default",
        "international_format_phone": null
      },
      "bin": null,
      "last4": null,
      "dueAt": null,
      "resolvedAt": null,
      "evidence": null,
      "attachments": "[]",
      "note": null,
      "history": [
        {
          "status": "pending",
          "by": "demo@test.co",
          "createdAt": "2017-11-16T16:12:24.000Z"
        }
      ],
      "messages": [
        {
          "sender": "demo@test.co",
          "body": "test this",
          "createdAt": "2017-11-16T16:12:24.000Z"
        }
      ],
      "createdAt": "2017-11-16T16:12:24.000Z",
      "updatedAt": "2019-08-16T08:05:25.000Z"
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

## Fetch Dispute

Get more details about a dispute.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`String`): The dispute ID you want to fetch

**Endpoint:** `GET /dispute/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dispute/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Dispute retrieved",
  "data": {
    "id": 2867,
    "refund_amount": null,
    "currency": null,
    "status": "archived",
    "resolution": null,
    "domain": "test",
    "transaction": {
      "id": 5991760,
      "domain": "test",
      "status": "success",
      "reference": "asjck8gf76zd1dr",
      "amount": 39100,
      "message": null,
      "gateway_response": "Successful",
      "paid_at": "2017-11-09T00:01:56.000Z",
      "created_at": "2017-11-09T00:01:36.000Z",
      "channel": "card",
      "currency": "NGN",
      "ip_address": null,
      "metadata": "",
      "log": null,
      "fees": 587,
      "fees_split": null,
      "authorization": {},
      "customer": {
        "international_format_phone": null
      },
      "plan": {},
      "subaccount": {},
      "split": {},
      "order_id": null,
      "paidAt": "2017-11-09T00:01:56.000Z",
      "createdAt": "2017-11-09T00:01:36.000Z",
      "requested_amount": null
    },
    "transaction_reference": null,
    "category": null,
    "customer": {
      "id": 10207,
      "first_name": null,
      "last_name": null,
      "email": "shola@baddest.com",
      "customer_code": "CUS_unz4q52yjsd6064",
      "phone": null,
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "bin": null,
    "last4": null,
    "dueAt": null,
    "resolvedAt": null,
    "evidence": null,
    "attachments": "[]",
    "note": null,
    "history": [
      {
        "status": "pending",
        "by": "demo@test.co",
        "createdAt": "2017-11-16T16:12:24.000Z"
      }
    ],
    "messages": [
      {
        "sender": "demo@test.co",
        "body": "test this",
        "createdAt": "2017-11-16T16:12:24.000Z"
      }
    ],
    "createdAt": "2017-11-16T16:12:24.000Z",
    "updatedAt": "2019-08-16T08:05:25.000Z"
  }
}
```

## List Transaction Disputes

This endpoint retrieves disputes for a particular transaction

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`String`): The transaction ID you want to fetch

**Endpoint:** `GET /dispute/transaction/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dispute/transaction/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Dispute retrieved successfully",
  "data": {
    "history": [
      {
        "id": 6094,
        "dispute": 2867,
        "status": "pending",
        "by": "demo@test.co",
        "createdAt": "2017-11-16T16:12:24.000Z",
        "updatedAt": "2017-11-16T16:12:24.000Z"
      }
    ],
    "messages": [
      {
        "sender": "demo@test.co",
        "body": "test this",
        "dispute": 2867,
        "id": 148,
        "is_deleted": 0,
        "createdAt": "2017-11-16T16:12:24.000Z",
        "updatedAt": "2017-11-16T16:12:24.000Z"
      }
    ],
    "currency": null,
    "last4": null,
    "bin": null,
    "transaction_reference": null,
    "merchant_transaction_reference": null,
    "refund_amount": null,
    "status": "archived",
    "domain": "test",
    "resolution": null,
    "category": null,
    "note": null,
    "attachments": "[]",
    "id": 2867,
    "integration": 100043,
    "transaction": {
      "id": 5991760,
      "domain": "test",
      "status": "success",
      "reference": "asjck8gf76zd1dr",
      "amount": 39100,
      "message": null,
      "gateway_response": "Successful",
      "paid_at": "2017-11-09T00:01:56.000Z",
      "created_at": "2017-11-09T00:01:36.000Z",
      "channel": "card",
      "currency": "NGN",
      "ip_address": null,
      "metadata": "",
      "log": null,
      "fees": 587,
      "fees_split": null,
      "authorization": {},
      "customer": {
        "international_format_phone": null
      },
      "plan": {},
      "subaccount": {},
      "split": {},
      "order_id": null,
      "paidAt": "2017-11-09T00:01:56.000Z",
      "createdAt": "2017-11-09T00:01:36.000Z",
      "requested_amount": null
    },
    "created_by": null,
    "evidence": null,
    "resolvedAt": null,
    "createdAt": "2017-11-16T16:12:24.000Z",
    "updatedAt": "2019-08-16T08:05:25.000Z",
    "dueAt": null
  }
}
```

## Update Dispute

Update details of a dispute on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`String`): Dispute ID

### Body Parameters

- `refund_amount` (`Integer`): The amount to refund, in the subunit of the supported currency
- `uploaded_filename` (`String`, optional): filename of attachment returned via response from upload url(GET /dispute/:id/upload_url)

**Endpoint:** `PUT /dispute/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dispute/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "refund_amount": 1002 }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Dispute updated successfully",
  "data": [
    {
      "currency": "NGN",
      "last4": null,
      "bin": null,
      "transaction_reference": null,
      "merchant_transaction_reference": null,
      "refund_amount": 1002,
      "status": "resolved",
      "domain": "test",
      "resolution": "merchant-accepted",
      "source": "bank",
      "category": "general",
      "note": null,
      "attachments": "attachement",
      "id": 624,
      "transaction": {
        "id": 5991760,
        "domain": "test",
        "status": "success",
        "reference": "asjck8gf76zd1dr",
        "amount": 39100,
        "message": null,
        "gateway_response": "Successful",
        "paid_at": "2017-11-09T00:01:56.000Z",
        "created_at": "2017-11-09T00:01:36.000Z",
        "channel": "card",
        "currency": "NGN",
        "ip_address": null,
        "metadata": "",
        "log": null,
        "fees": 587,
        "fees_split": null,
        "authorization": {},
        "customer": {
          "international_format_phone": null
        },
        "plan": {},
        "subaccount": {},
        "split": {},
        "order_id": null,
        "paidAt": "2017-11-09T00:01:56.000Z",
        "createdAt": "2017-11-09T00:01:36.000Z",
        "requested_amount": null
      },
      "customer": {
        "id": 10207,
        "first_name": null,
        "last_name": null,
        "email": "shola@baddest.com",
        "customer_code": "CUS_unz4q52yjsd6064",
        "phone": null,
        "metadata": null,
        "risk_action": "default",
        "international_format_phone": null
      },
      "organization": 1,
      "evidence": null,
      "resolvedAt": "2019-08-28T14:14:41.000Z",
      "createdAt": "2019-08-28T14:14:41.000Z",
      "updatedAt": "2019-08-28T14:29:07.000Z",
      "dueAt": null
    }
  ]
}
```

## Add Evidence

Provide evidence for a dispute

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `customer_email` (`String`): Customer email
- `customer_name` (`String`): Customer name
- `customer_phone` (`String`): Customer phone
- `service_details` (`String`): Details of service involved
- `delivery_address` (`String`, optional): Delivery Address

delivery_date
Date
ISO 8601 representation of delivery date (YYYY-MM-DD)

**Endpoint:** `POST /dispute/:id/evidence`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dispute/:id/evidence"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "customer_email": "cus@gmail.com",

"customer_name": "Mensah King",

"customer_phone": "0802345167",

"service_details": "claim for buying product",

"delivery_address": "3a ladoke street ogbomoso"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Evidence created",
  "data": {
    "customer_email": "cus@gmail.com",
    "customer_name": "Mensah King",
    "customer_phone": "0802345167",
    "service_details": "claim for buying product",
    "delivery_address": "3a ladoke street ogbomoso",
    "dispute": 624,
    "id": 21,
    "createdAt": "2019-08-28T15:36:13.783Z",
    "updatedAt": "2019-08-28T15:39:39.153Z"
  }
}
```

## Get Upload URL

This endpoint retrieves disputes for a particular transaction

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`String`): Dispute Id

### Query Parameters

- `upload_filename` (`String`): The file name, with its extension, that you want to upload. e.g filename.pdf

**Endpoint:** `GET /dispute/:id/upload_url`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dispute/:id/upload_url?upload_filename=filename.ext"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Upload url generated",
  "data": {
    "signedUrl": "https://s3.eu-west-1.amazonaws.com/files.paystack.co/qesp8a4df1xejihd9x5q?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI7CL5IZL2DJHOPPA%2F20191009%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20191009T220931Z&X-Amz-Expires=1800&X-Amz-Signature=f5cc387949f3520982886e70ab2e08721a82a9fa9e26b696b91471f36453867a&X-Amz-SignedHeaders=host",
    "fileName": "qesp8a4df1xejihd9x5q"
  }
}
```

## Resolve Dispute

Resolve a dispute on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`String`): Dispute ID

### Body Parameters

- `resolution` (`String`): Dispute resolution. Accepted values: { merchant-accepted | declined }.
- `message` (`String`): Reason for resolving
- `refund_amount` (`Integer`): the amount to refund, in the subunit of the supported currency
- `uploaded_filename` (`String`): filename of attachment returned via response from upload url(GET /dispute/:id/upload_url)
- `evidence` (`Integer`, optional): Evidence Id for fraud claims

**Endpoint:** `PUT /dispute/:id/resolve`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dispute/:id/resolve"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "resolution": "merchant-accepted",

"message": "Merchant accepted",

"uploaded_filename": "qesp8a4df1xejihd9x5q",

"refund_amount": 1002

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Dispute successfully resolved",
  "data": {
    "currency": "NGN",
    "last4": null,
    "bin": null,
    "transaction_reference": null,
    "merchant_transaction_reference": null,
    "refund_amount": 1002,
    "status": "resolved",
    "domain": "test",
    "resolution": "merchant-accepted",
    "category": "general",
    "note": null,
    "attachments": "attachment",
    "id": 624,
    "transaction": {
      "id": 5991760,
      "domain": "test",
      "status": "success",
      "reference": "asjck8gf76zd1dr",
      "amount": 39100,
      "message": null,
      "gateway_response": "Successful",
      "paid_at": "2017-11-09T00:01:56.000Z",
      "created_at": "2017-11-09T00:01:36.000Z",
      "channel": "card",
      "currency": "NGN",
      "ip_address": null,
      "metadata": "",
      "log": null,
      "fees": 587,
      "fees_split": null,
      "authorization": {},
      "customer": {
        "international_format_phone": null
      },
      "plan": {},
      "subaccount": {},
      "split": {},
      "order_id": null,
      "paidAt": "2017-11-09T00:01:56.000Z",
      "createdAt": "2017-11-09T00:01:36.000Z",
      "requested_amount": null
    },
    "created_by": 30,
    "evidence": null,
    "resolvedAt": "2019-08-28T15:23:31.000Z",
    "createdAt": "2019-08-28T14:14:41.000Z",
    "updatedAt": "2019-08-28T15:23:31.000Z",
    "dueAt": null,
    "message": {
      "dispute": 624,
      "sender": "demo@test.co",
      "body": "Merchant accepted",
      "id": 718,
      "createdAt": "2019-08-28T15:23:31.418Z",
      "updatedAt": "2019-08-28T15:23:31.418Z"
    }
  }
}
```

## Export Disputes

Export disputes available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

from
Date
A timestamp from which to start listing dispute e.g. 2016-09-21

to
Date
A timestamp at which to stop listing dispute e.g. 2016-09-21

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what dispute you want to page. If not specified, we use a default value of 1.
- `transaction` (`String`, optional): Transaction Id
- `status` (`String`, optional): Dispute Status. Acceptable values: { awaiting-merchant-feedback | awaiting-bank-feedback | pending | resolved }

**Endpoint:** `GET /dispute/export`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dispute/export"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Export successful",
  "data": {
    "path": "https://s3.eu-west-1.amazonaws.com/files.paystack.co/exports/100043/disputes/161834548008.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIFGL5IZL2DJHOPPA%2F20210419%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20210419T115718Z&X-Amz-Expires=60&X-Amz-Signature=8fc02bdf7f12411a6505559b4c35b069a8a478295b98c0587907777ef5e31bda&X-Amz-SignedHeaders=host",
    "expiresAt": "2021-04-19 11:58:18"
  }
}
```
