# Plans

The Plans API allows you create and manage installment payment options on your integration.

## Create Plan

Create a plan on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `name` (`String`): Name of plan
- `amount` (`Integer`): Amount should be in the subunit of the supported currency
- `interval` (`String`): Interval in words. Valid intervals are: `daily`, `weekly`, `monthly`, `quarterly`, `biannually` (every 6 months), `annually`.
- `description` (`String`, optional): A description for this plan
- `send_invoices` (`Boolean`, optional): Set to `false` if you don't want invoices to be sent to your customers
- `send_sms` (`String`, optional): Set to `false` if you don't want text messages to be sent to your customers
- `currency` (`String`, optional): Currency in which amount is set
- `invoice_limit` (`Integer`, optional): Number of invoices to raise during subscription to this plan. Can be overridden by specifying an `invoice_limit` while subscribing.

**Endpoint:** `POST /plan`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/plan"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "name": "Monthly retainer",
  "interval": "monthly",
  "amount": "500000"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Plan created",
  "data": {
    "name": "Monthly retainer",
    "amount": 500000,
    "interval": "monthly",
    "integration": 100032,
    "domain": "test",
    "plan_code": "PLN_gx2wn530m0i3w3m",
    "send_invoices": true,
    "send_sms": true,
    "hosted_page": false,
    "currency": "NGN",
    "id": 28,
    "createdAt": "2016-03-29T22:42:50.811Z",
    "updatedAt": "2016-03-29T22:42:50.811Z"
  }
}
```

## List Plans

List plans available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `status` (`String`, optional): Filter list by plans with specified status
- `interval` (`String`, optional): Filter list by plans with specified interval
- `amount` (`Integer`, optional): Filter list by plans with specified amount using the supported currency

**Endpoint:** `GET /plan`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/plan"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Plans retrieved",
  "data": [
    {
      "subscriptions": [
        {
          "customer": 63,
          "plan": 27,
          "integration": 100032,
          "domain": "test",
          "start": 1458505748,
          "status": "complete",
          "quantity": 1,
          "amount": 100000,
          "subscription_code": "SUB_birvokwpp0sftun",
          "email_token": "9y62mxp4uh25das",
          "authorization": {
            "authorization_code": "AUTH_6tmt288t0o",
            "bin": "408408",
            "last4": "4081",
            "exp_month": "12",
            "exp_year": "2020",
            "channel": "card",
            "card_type": "visa visa",
            "bank": "TEST BANK",
            "country_code": "NG",
            "brand": "visa",
            "reusable": true,
            "signature": "SIG_uSYN4fv1adlAuoij8QXh",
            "account_name": "BoJack Horseman"
          },
          "easy_cron_id": null,
          "cron_expression": "0 0 * * 0",
          "next_payment_date": "2016-03-27T07:00:00.000Z",
          "open_invoice": null,
          "id": 8,
          "createdAt": "2016-03-20T20:29:08.000Z",
          "updatedAt": "2016-03-22T16:23:52.000Z"
        }
      ],
      "integration": 100032,
      "domain": "test",
      "name": "Satin Flower",
      "plan_code": "PLN_lkozbpsoyd4je9t",
      "description": null,
      "amount": 100000,
      "interval": "weekly",
      "send_invoices": true,
      "send_sms": true,
      "hosted_page": false,
      "hosted_page_url": null,
      "hosted_page_summary": null,
      "currency": "NGN",
      "id": 27,
      "createdAt": "2016-03-21T02:44:14.000Z",
      "updatedAt": "2016-03-21T02:44:14.000Z"
      },
    {
      "subscriptions": [],
      "integration": 100032,
      "domain": "test",
      "name": "Monthly retainer",
      "plan_code": "PLN_gx2wn530m0i3w3m",
      "description": null,
      "amount": 50000,
      "interval": "monthly",
      "send_invoices": true,
      "send_sms": true,
      "hosted_page": false,
      "hosted_page_url": null,
      "hosted_page_summary": null,
      "currency": "NGN",
      "id": 28,
      "createdAt": "2016-03-29T22:42:50.000Z",
      "updatedAt": "2016-03-29T22:42:50.000Z"
    },
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

## Fetch Plan

Get details of a plan on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): The plan ID or code you want to fetch

**Endpoint:** `GET /plan/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/plan/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Plan retrieved",
  "data": {
    "subscriptions": [],
    "integration": 100032,
    "domain": "test",
    "name": "Monthly retainer",
    "plan_code": "PLN_gx2wn530m0i3w3m",
    "description": null,
    "amount": 50000,
    "interval": "monthly",
    "send_invoices": true,
    "send_sms": true,
    "hosted_page": false,
    "hosted_page_url": null,
    "hosted_page_summary": null,
    "currency": "NGN",
    "id": 28,
    "createdAt": "2016-03-29T22:42:50.000Z",
    "updatedAt": "2016-03-29T22:42:50.000Z"
  }
}
```

## Update Plan

Update a plan details on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id_or_code` (`String`): Plan's ID or code

### Body Parameters

- `name` (`String`, optional): Name of plan
- `amount` (`Integer`, optional): Amount should be in the subunit of the supported currency
- `interval` (`String`, optional): Interval in words. Valid intervals are `hourly`, `daily`, `weekly`, `monthly`, `quarterly`, `biannually` (every 6 months), `annually`.
- `description` (`String`, optional): A description for this plan
- `send_invoices` (`Boolean`, optional): Set to `false` if you don't want invoices to be sent to your customers
- `send_sms` (`String`, optional): Set to `false` if you don't want text messages to be sent to your customers
- `currency` (`String`, optional): Currency in which amount is set
- `invoice_limit` (`Integer`, optional): Number of invoices to raise during subscription to this plan. Can be overridden by specifying an `invoice_limit` while subscribing.
- `update_existing_subscriptions` (`Boolean`, optional): Set to `true` if you want the existing subscriptions to use the new changes. Set to `false` and only new subscriptions will be changed. Defaults to `true` when not set.

**Endpoint:** `PUT /plan/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/plan/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "name": "Monthly retainer (renamed)"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Plan updated. 1 subscription(s) affected"
}
```
