# Bulk Charges

The Bulk Charges API allows you create and manage multiple recurring payments from your customers.

## Initiate Bulk Charge

Send an array of objects with authorization codes and amount, using the supported currency format, so we can process transactions as a batch.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `(no name )` (`Array`): A list of charge object. Each object consists of an authorization, amount and reference

**Endpoint:** `POST /bulkcharge`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bulkcharge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

[
    {"authorization": "AUTH_ncx8hews93", "amount": 2500, "reference": "dam1266638dhhd"},

    {"authorization": "AUTH_xfuz7dy4b9", "amount": 1500, "reference": "dam1266638dhhe"}

]

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Charges have been queued",
  "data": {
    "batch_code": "BCH_rrsbgwb4ivgzst1",
    "reference": "bulkcharge-1663150565684-p18nyoa68a",
    "id": 66608171,
    "integration": 463433,
    "domain": "test",
    "status": "active",
    "total_charges": 2,
    "pending_charges": 2,
    "createdAt": "2022-09-14T10:16:05.000Z",
    "updatedAt": "2022-09-14T10:16:05.000Z"
  }
}
```

## List Bulk Charge Batches

This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what transfer you want to page. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing batches e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing batches e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /bulkcharge`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bulkcharge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Bulk charges retrieved",
  "data": [
    {
      "domain": "test",
      "batch_code": "BCH_1nV4L1D7cayggh",
      "status": "complete",
      "id": 1733,
      "createdAt": "2017-02-04T05:44:19.000Z",
      "updatedAt": "2017-02-04T05:45:02.000Z"
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

## Fetch Bulk Charge Batch

This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): An ID or code for the charge whose batches you want to retrieve.

**Endpoint:** `GET /bulkcharge/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bulkcharge/{id_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Bulk charge retrieved",
  "data": {
    "domain": "test",
    "batch_code": "BCH_180tl7oq7cayggh",
    "status": "complete",
    "id": 17,
    "total_charges": 0,
    "pending_charges": 0,
    "createdAt": "2017-02-04T05:44:19.000Z",
    "updatedAt": "2017-02-04T05:45:02.000Z"
  }
}
```

Fetch Charges in a Batch

This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): An ID or code for the batch whose charges you want to retrieve.

### Query Parameters

- `status` (`String`): Either one of these values: pending, success or failed
- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what transfer you want to page. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing charges e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing charges e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /bulkcharge/:id_or_code/charges`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bulkcharge/{id_or_code}/charges"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Bulk charge items retrieved",
  "data": [
    {
      "integration": 100073,
      "bulkcharge": 18,
      "customer": {
        "id": 181336,
        "first_name": null,
        "last_name": null,
        "email": "test@again.com",
        "customer_code": "CUS_dw5posshfd1i5uj",
        "phone": null,
        "metadata": null,
        "risk_action": "default"
      },
      "authorization": {
        "authorization_code": "AUTH_jh3cfpca",
        "bin": "412345",
        "last4": "1381",
        "exp_month": "08",
        "exp_year": "2088",
        "channel": "card",
        "card_type": "visa visa",
        "bank": "TEST BANK",
        "country_code": "NG",
        "brand": "visa",
        "reusable": true,
        "account_name": "BoJack Horseman"
      },
      "transaction": {
        "id": 718835,
        "domain": "test",
        "status": "success",
        "reference": "2mr588n0ik9enja",
        "amount": 20500,
        "message": null,
        "gateway_response": "Successful",
        "paid_at": "2017-02-04T06:05:02.000Z",
        "created_at": "2017-02-04T06:05:02.000Z",
        "channel": "card",
        "currency": "NGN",
        "ip_address": null,
        "metadata": "",
        "log": null,
        "fees": null,
        "fees_split": null,
        "customer": {},
        "authorization": {},
        "plan": {},
        "subaccount": {},
        "paidAt": "2017-02-04T06:05:02.000Z",
        "createdAt": "2017-02-04T06:05:02.000Z"
      },
      "domain": "test",
      "amount": 20500,
      "currency": "NGN",
      "status": "success",
      "id": 15,
      "createdAt": "2017-02-04T06:04:26.000Z",
      "updatedAt": "2017-02-04T06:05:03.000Z"
    },
    {
      "integration": 100073,
      "bulkcharge": 18,
      "customer": {
        "id": 181336,
        "first_name": null,
        "last_name": null,
        "email": "duummy@email.com",
        "customer_code": "CUS_dw5posshfd1i5uj",
        "phone": null,
        "metadata": null,
        "risk_action": "default"
      },
      "authorization": {
        "authorization_code": "AUTH_qdyfjbl3",
        "bin": "412345",
        "last4": "1381",
        "exp_month": "08",
        "exp_year": "2018",
        "channel": "card",
        "card_type": "visa visa",
        "bank": "TEST BANK",
        "country_code": "NG",
        "brand": "visa",
        "reusable": true,
        "account_name": "BoJack Horseman"
      },
      "transaction": {
        "id": 718836,
        "domain": "test",
        "status": "success",
        "reference": "5xkmvfe2h4065zl",
        "amount": 11500,
        "message": null,
        "gateway_response": "Successful",
        "paid_at": "2017-02-04T06:05:02.000Z",
        "created_at": "2017-02-04T06:05:02.000Z",
        "channel": "card",
        "currency": "NGN",
        "ip_address": null,
        "metadata": "",
        "log": null,
        "fees": null,
        "fees_split": null,
        "customer": {},
        "authorization": {},
        "plan": {},
        "subaccount": {},
        "paidAt": "2017-02-04T06:05:02.000Z",
        "createdAt": "2017-02-04T06:05:02.000Z"
      },
      "domain": "test",
      "amount": 11500,
      "currency": "NGN",
      "status": "success",
      "id": 16,
      "createdAt": "2017-02-04T06:04:26.000Z",
      "updatedAt": "2017-02-04T06:05:03.000Z"
    }
  ],
  "meta": {
    "total": 2,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 1
  }
}
```

## Pause Bulk Charge Batch

Use this endpoint to pause processing a batch

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `batch_code` (`String`): The batch code for the bulk charge you want to pause

**Endpoint:** `GET /bulkcharge/pause/:batch_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bulkcharge/pause/{batch_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Bulk charge batch has been paused"
}
```

## Resume Bulk Charge Batch

Use this endpoint to resume processing a batch

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `batch_code` (`String`): The batch code for the bulk charge you want to resume

**Endpoint:** `GET /bulkcharge/resume/:batch_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bulkcharge/resume/{batch_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Bulk charge batch has been resumed"
}
```
