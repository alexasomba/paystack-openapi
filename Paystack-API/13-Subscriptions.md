# Subscriptions

The Subscriptions API allows you create and manage recurring payment on your integration.

## Create Subscription

Create a subscription on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `customer` (`String`): Customer's email address or customer code
- `plan` (`String`): Plan code
- `authorization` (`String`, optional): If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. If this is not supplied, the customer's most recent authorization would be used
- `start_date` (`String`, optional): Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00

**Endpoint:** `POST /subscription`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subscription"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "customer": "CUS_xnxdt6s1zg1f4nx",
  "plan": "PLN_gx2wn530m0i3w3m"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subscription successfully created",
  "data": {
    "customer": 1173,
    "plan": 28,
    "integration": 100032,
    "domain": "test",
    "start": 1459296064,
    "status": "active",
    "quantity": 1,
    "amount": 50000,
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
    "subscription_code": "SUB_vsyqdmlzble3uii",
    "email_token": "d7gofp6yppn3qz7",
    "id": 9,
    "createdAt": "2016-03-30T00:01:04.687Z",
    "updatedAt": "2016-03-30T00:01:04.687Z"
  }
}
```

## List Subscriptions

List subscriptions available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `customer` (`Integer`, optional): Filter by Customer ID
- `plan` (`Integer`, optional): Filter by Plan ID

**Endpoint:** `GET /subscription`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subscription"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subscriptions retrieved",
  "data": [
    {
      "customer": {
        "first_name": "BoJack",
        "last_name": "Horseman",
        "email": "bojack@horseman.com",
        "phone": "",
        "metadata": null,
        "domain": "test",
        "customer_code": "CUS_hdhye17yj8qd2tx",
        "risk_action": "default",
        "id": 84312,
        "integration": 100073,
        "createdAt": "2016-10-01T10:59:52.000Z",
        "updatedAt": "2016-10-01T10:59:52.000Z"
      },
      "plan": {
        "domain": "test",
        "name": "Weekly small chops",
        "plan_code": "PLN_0as2m9n02cl0kp6",
        "description": "Small chops delivered every week",
        "amount": 27000,
        "interval": "weekly",
        "send_invoices": true,
        "send_sms": true,
        "hosted_page": false,
        "hosted_page_url": null,
        "hosted_page_summary": null,
        "currency": "NGN",
        "migrate": null,
        "id": 1716,
        "integration": 100073,
        "createdAt": "2016-10-01T10:59:11.000Z",
        "updatedAt": "2016-10-01T10:59:11.000Z"
      },
      "integration": 123456,
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
      "domain": "test",
      "start": 1475319599,
      "status": "active",
      "quantity": 1,
      "amount": 27000,
      "subscription_code": "SUB_6phdx225bavuwtb",
      "email_token": "ore84lyuwcv2esu",
      "easy_cron_id": "275226",
      "cron_expression": "0 0 * * 6",
      "next_payment_date": "2016-10-15T00:00:00.000Z",
      "open_invoice": "INV_qc875pkxpxuyodf",
      "id": 4192,
      "createdAt": "2016-10-01T10:59:59.000Z",
      "updatedAt": "2016-10-12T07:45:14.000Z"
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

## Fetch Subscription

Get details of a subscription on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): The subscription ID or code you want to fetch

**Endpoint:** `GET /subscription/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subscription/{id_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subscription retrieved successfully",
  "data": {
    "invoices": [],
    "customer": {
      "first_name": "BoJack",
      "last_name": "Horseman",
      "email": "bojack@horsinaround.com",
      "phone": null,
      "metadata": {
        "photos": [
          {
            "type": "twitter",
            "typeId": "twitter",
            "typeName": "Twitter",
            "url": "https://d2ojpxxtu63wzl.cloudfront.net/static/61b1a0a1d4dda2c9fe9e165fed07f812_a722ae7148870cc2e33465d1807dfdc6efca33ad2c4e1f8943a79eead3c21311",
            "isPrimary": false
          }
        ]
      },
      "domain": "test",
      "customer_code": "CUS_xnxdt6s1zg1f4nx",
      "id": 1173,
      "integration": 100032,
      "createdAt": "2016-03-29T20:03:09.000Z",
      "updatedAt": "2016-03-29T20:53:05.000Z"
    },
    "plan": {
      "domain": "test",
      "name": "Monthly retainer (renamed)",
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
      "integration": 100032,
      "createdAt": "2016-03-29T22:42:50.000Z",
      "updatedAt": "2016-03-29T23:51:41.000Z"
    },
    "integration": 100032,
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
    "domain": "test",
    "start": 1459296064,
    "status": "active",
    "quantity": 1,
    "amount": 50000,
    "subscription_code": "SUB_vsyqdmlzble3uii",
    "email_token": "d7gofp6yppn3qz7",
    "easy_cron_id": null,
    "cron_expression": "0 0 28 * *",
    "next_payment_date": "2016-04-28T07:00:00.000Z",
    "open_invoice": null,
    "id": 9,
    "createdAt": "2016-03-30T00:01:04.000Z",
    "updatedAt": "2016-03-30T00:22:58.000Z"
  }
}
```

## Enable Subscription

Enable a subscription on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `code` (`String`): Subscription code
- `token` (`String`): Email token

**Endpoint:** `POST /subscription/enable`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subscription/enable"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "code": "SUB_vsyqdmlzble3uii",
  "token": "d7gofp6yppn3qz7"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subscription enabled successfully"
}
```

## Disable Subscription

Disable a subscription on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `code` (`String`): Subscription code
- `token` (`String`): Email token

**Endpoint:** `POST /subscription/disable`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subscription/disable"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "code": "SUB_vsyqdmlzble3uii",
  "token": "d7gofp6yppn3qz7"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subscription disabled successfully"
}
```

## Generate Update Subscription Link

Generate a link for updating the card on a subscription

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): Subscription code

**Endpoint:** `GET /subscription/:code/manage/link/`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subscription/{code}/manage/link"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Link generated",
  "data": {
    "link": "https://paystack.com/manage/subscriptions/qlgwhpyq1ts9nsw?subscription_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJzY3JpcHRpb25fY29kZSI6IlNVQl9xbGd3aHB5cTB0czluc3ciLCJpbnRlZ3JhdGlvbiI6MzUzNTE0LCJkb21haW4iOiJ0ZXN0IiwiZW1haWxfdG9rZW4iOiJzNXIwZjA0ODdwcnNtZWsiLCJpYXQiOjE2MzUyNTkxMzEsIm5iZiI6MTYzNTI1OTEzcjeR82XhwIjoxNjM1MzQ1NTMxfQ.FK1glvwMjHu9J8P-4n2oXPN_u_fIpQZ-F_s5x_4WLag"
  }
}
```

## Send Update Subscription Link

Email a customer a link for updating the card on their subscription

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): Subscription code

**Endpoint:** `POST /subscription/:code/manage/email/`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subscription/{code}/manage/email"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Email successfully sent"
}
```
