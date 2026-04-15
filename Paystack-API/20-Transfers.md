# Transfers

The Transfers API allows you automate sending money to your customers.

## Initiate Transfer

Send money to your customers.

Status of transfer object returned will be pending if OTP is disabled. In the event that an OTP is required, status will read otp.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `source` (`String`): Where should we transfer from? Only balance for now
- `amount` (`Integer`): Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS.
- `recipient` (`String`): Code for transfer recipient
- `reference` (`String`): min: 16 max: 50 A unique identifier containing lowercase letters (a-z), digits (0-9) and these symbols: dash (-), underscore(\_).
- `reason` (`String`, optional): The reason for the transfer. This would also show up in the narration of the customer's credit notification
- `currency` (`String`, optional): Specify the currency of the transfer. Defaults to NGN
- `account_reference` (`String`, optional): A unique identifier required in Kenya for MPESA Paybill and Till transfers

**Endpoint:** `POST /transfer`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"source": "balance",

"amount": 100000,

"recipient": "RCP_gd9vgag7n5lr5ix",

"reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f68",

"reason": "Bonus for the week"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transfer has been queued",
  "data": {
    "transfersessionid": [],
    "transfertrials": [],
    "domain": "test",
    "amount": 100000,
    "currency": "NGN",
    "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f68",
    "source": "balance",
    "source_details": null,
    "reason": "Bonus for the week",
    "status": "success",
    "failures": null,
    "transfer_code": "TRF_v5tip3zx8nna9o78",
    "titan_code": null,
    "transferred_at": null,
    "id": 860703114,
    "integration": 463433,
    "request": 1068439313,
    "recipient": 56824902,
    "createdAt": "2025-08-04T10:32:40.000Z",
    "updatedAt": "2025-08-04T10:32:40.000Z"
  }
}
```

## Finalize Transfer

## Finalize an initiated transfer

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `transfer_code` (`String`): The transfer code you want to finalize
- `otp` (`String`): OTP sent to business phone to verify transfer

**Endpoint:** `POST /transfer/finalize_transfer`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer/finalize_transfer"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"transfer_code": "TRF_vsyqdmlzble3uii",

"otp": "928783"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transfer has been queued",
  "data": {
    "domain": "test",
    "amount": 1000000,
    "currency": "NGN",
    "reference": "n7ll9pzl6b",
    "source": "balance",
    "source_details": null,
    "reason": "E go better for you",
    "status": "success",
    "failures": null,
    "transfer_code": "TRF_zuirlnr9qblgfko",
    "titan_code": null,
    "transferred_at": null,
    "id": 529410,
    "integration": 123460,
    "recipient": 225204,
    "createdAt": "2018-08-02T10:02:55.000Z",
    "updatedAt": "2018-08-02T10:12:05.000Z"
  }
}
```

## Initiate Bulk Transfer

Batch multiple transfers in a single request.

You need to disable the Transfers OTP requirement to use this endpoint.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `source` (`String`): Where should we transfer from? Only balance for now
- `transfers` (`Array`): A list of transfer object.

### Show parameters

**Endpoint:** `POST /transfer/bulk`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer/bulk"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"currency": "NGN",

"source": "balance",

"transfers": [

    {
      "amount": 20000,
      "reference": "acv_2627bbfe-1a2a-4a1a-8d0e-9d2ee6c31496",
      "reason": "Bonus for the week",
      "recipient": "RCP_gd9vgag7n5lr5ix"
    },

    {
      "amount": 35000,
      "reference": "acv_1bd0c1f8-78c2-463b-8bd4-ed9eeb36be50",
      "reason": "Bonus for the week",
      "recipient": "RCP_zpk2tgagu6lgb4g"
    },

    {
      "amount": 15000,
      "reference": "acv_11bebfc3-18b3-40aa-a4df-c55068c93457",
      "reason": "Bonus for the week",
      "recipient": "RCP_dfznnod8rwxlwgn"
    }

]

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "3 transfers queued.",
  "data": [
    {
      "reference": "acv_2627bbfe-1a2a-4a1a-8d0e-9d2ee6c31496",
      "recipient": "RCP_gd9vgag7n5lr5ix",
      "amount": 20000,
      "transfer_code": "TRF_o0mv5dc2lv4t2wdb",
      "currency": "NGN",
      "status": "success"
    },
    {
      "reference": "acv_1bd0c1f8-78c2-463b-8bd4-ed9eeb36be50",
      "recipient": "RCP_zpk2tgagu6lgb4g",
      "amount": 35000,
      "transfer_code": "TRF_tlvxomz43gjso2py",
      "currency": "NGN",
      "status": "success"
    },
    {
      "reference": "acv_11bebfc3-18b3-40aa-a4df-c55068c93457",
      "recipient": "RCP_dfznnod8rwxlwgn",
      "amount": 15000,
      "transfer_code": "TRF_yt2y2gcd3dmli8av",
      "currency": "NGN",
      "status": "success"
    }
  ]
}
```

## List Transfers

List the transfers made on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
- `page` (`Integer`): Specify exactly what transfer you want to page. If not specify we use a default value of 1.
- `recipient` (`Integer`): Filter by the recipient ID
- `from` (`Datetime`, optional): A timestamp from which to start listing transfer e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing transfer e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /transfer`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transfers retrieved",
  "data": [
    {
      "integration": 100073,
      "recipient": {
        "domain": "test",
        "type": "nuban",
        "currency": "NGN",
        "name": "Flesh",
        "details": {
          "account_number": "olounje",
          "account_name": null,
          "bank_code": "044",
          "bank_name": "Access Bank"
        },
        "description": "Eater",
        "metadata": null,
        "recipient_code": "RCP_2x5j67tnnw1t98k",
        "active": true,
        "id": 28,
        "integration": 100073,
        "createdAt": "2017-02-02T19:39:04.000Z",
        "updatedAt": "2017-02-02T19:39:04.000Z"
      },
      "domain": "test",
      "amount": 4400,
      "currency": "NGN",
      "source": "balance",
      "source_details": null,
      "reason": "Eater",
      "status": "otp",
      "failures": null,
      "transfer_code": "TRF_1ptvuv321ahaa7q",
      "id": 14,
      "createdAt": "2017-02-03T17:21:54.000Z",
      "updatedAt": "2017-02-03T17:21:54.000Z"
    },
    {
      "integration": 100073,
      "recipient": {
        "domain": "test",
        "type": "nuban",
        "currency": "USD",
        "name": "FleshUSD",
        "details": {
          "account_number": "1111111111",
          "account_name": null,
          "bank_code": "044",
          "bank_name": "Access Bank"
        },
        "description": "EaterUSD",
        "metadata": null,
        "recipient_code": "RCP_bi84k5gguakuqmg",
        "active": true,
        "id": 22,
        "integration": 100073,
        "createdAt": "2017-01-23T16:52:48.000Z",
        "updatedAt": "2017-01-23T16:52:48.000Z"
      },
      "domain": "test",
      "amount": 3300,
      "currency": "NGN",
      "source": "balance",
      "source_details": null,
      "reason": "I love you",
      "status": "otp",
      "failures": null,
      "transfer_code": "TRF_5pr8ypzb0htx0cn",
      "id": 13,
      "createdAt": "2017-01-23T16:55:59.000Z",
      "updatedAt": "2017-01-23T16:55:59.000Z"
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

## Fetch Transfer

Get details of a transfer on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): The transfer ID or code you want to fetch

**Endpoint:** `GET /transfer/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer/{id_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transfer retrieved",
  "data": {
    "amount": 20000,
    "createdAt": "2024-02-01T08:32:21.000Z",
    "currency": "NGN",
    "domain": "test",
    "failures": null,
    "id": 451930323,
    "integration": 463433,
    "reason": "Life go better for you",
    "reference": "ge-bzrf8u8k2pygxrnqf",
    "source": "balance",
    "source_details": null,
    "status": "success",
    "titan_code": null,
    "transfer_code": "TRF_fpmd0l8uta8upow7",
    "request": 502643104,
    "transferred_at": null,
    "updatedAt": "2024-02-01T08:34:07.000Z",
    "recipient": {
      "active": true,
      "createdAt": "2021-10-21T11:08:04.000Z",
      "currency": "NGN",
      "description": null,
      "domain": "test",
      "email": "jake@jill.com",
      "id": 19643784,
      "integration": 463433,
      "metadata": {
        "custom_fields": [
          {
            "display_name": "Branch Name",
            "variable_name": "branchName",
            "value": "funny place, Alabama"
          },
          {
            "display_name": "Branch ID",
            "variable_name": "branchID",
            "value": "123"
          }
        ]
      },
      "name": "Abbey Baker",
      "recipient_code": "RCP_rjs1szi4ax5hoeo",
      "type": "nuban",
      "updatedAt": "2023-03-29T08:39:39.000Z",
      "is_deleted": false,
      "isDeleted": false,
      "details": {
        "authorization_code": null,
        "account_number": "0123456789",
        "account_name": "Abbey Baker",
        "bank_code": "058",
        "bank_name": "Guaranty Trust Bank"
      }
    },
    "session": {
      "provider": null,
      "id": null
    },
    "fee_charged": 0,
    "fees_breakdown": null,
    "gateway_response": null
  }
}
```

## Verify Transfer

Verify the status of a transfer on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `reference` (`String`): Transfer reference

**Endpoint:** `GET /transfer/verify/:reference`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer/verify/{reference}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transfer retrieved",
  "data": {
    "amount": 100000,
    "createdAt": "2025-08-04T09:59:19.000Z",
    "currency": "NGN",
    "domain": "test",
    "failures": null,
    "id": 860670817,
    "integration": 463433,
    "reason": "Bonus for the week",
    "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f67",
    "source": "balance",
    "source_details": null,
    "status": "success",
    "titan_code": null,
    "transfer_code": "TRF_8opchtrhtjlfz90n",
    "request": 1068403325,
    "transferred_at": null,
    "updatedAt": "2025-08-04T09:59:19.000Z",
    "recipient": {
      "active": true,
      "createdAt": "2023-07-11T15:42:27.000Z",
      "currency": "NGN",
      "description": "",
      "domain": "test",
      "email": null,
      "id": 56824902,
      "integration": 463433,
      "metadata": null,
      "name": "Jekanmo Padie",
      "recipient_code": "RCP_gd9vgag7n5lr5ix",
      "type": "nuban",
      "updatedAt": "2023-07-11T15:42:27.000Z",
      "is_deleted": false,
      "isDeleted": false,
      "details": {
        "authorization_code": null,
        "account_number": "9876543210",
        "account_name": null,
        "bank_code": "044",
        "bank_name": "Access Bank"
      }
    },
    "session": {
      "provider": null,
      "id": null
    },
    "fee_charged": 1000,
    "fees_breakdown": null,
    "gateway_response": null
  }
}
```
