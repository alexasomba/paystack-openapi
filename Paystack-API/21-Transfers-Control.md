# Transfers Control

The Transfers Control API allows you manage settings of your transfers.

## Check Balance

Fetch the available balance on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

**Endpoint:** `GET /balance`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/balance"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Balances retrieved",
  "data": [
    {
      "currency": "NGN",
      "balance": 1700000
    }
  ]
}
```

## Fetch Balance Ledger

Fetch all pay-ins and pay-outs that occured on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

**Endpoint:** `GET /balance/ledger`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/balance/ledger"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Balance ledger retrieved",
  "data": [
    {
      "integration": 463433,
      "domain": "test",
      "balance": 2078224968,
      "currency": "NGN",
      "difference": -50000,
      "reason": "Who dey breet?",
      "model_responsible": "Transfer",
      "model_row": 56610600,
      "id": 149411613,
      "createdAt": "2021-04-08T09:39:49.000Z",
      "updatedAt": "2021-04-08T09:39:49.000Z"
    },
    {
      "integration": 463433,
      "domain": "test",
      "balance": 2078274968,
      "currency": "NGN",
      "difference": 10000,
      "reason": "",
      "model_responsible": "Transaction",
      "model_row": 1073891448,
      "id": 149314482,
      "createdAt": "2021-04-08T00:00:11.000Z",
      "updatedAt": "2021-04-08T00:00:11.000Z"
    },
    {
      "integration": 463433,
      "domain": "test",
      "balance": 2078264968,
      "currency": "NGN",
      "difference": 500000,
      "reason": "",
      "model_responsible": "Transaction",
      "model_row": 1073278150,
      "id": 149178966,
      "createdAt": "2021-04-07T15:26:36.000Z",
      "updatedAt": "2021-04-07T15:26:36.000Z"
    },
    {
      "integration": 463433,
      "domain": "test",
      "balance": 2077764968,
      "currency": "NGN",
      "difference": 230845,
      "reason": "",
      "model_responsible": "Transaction",
      "model_row": 1073230164,
      "id": 149164577,
      "createdAt": "2021-04-07T14:56:02.000Z",
      "updatedAt": "2021-04-07T14:56:02.000Z"
    },
    {
      "integration": 463433,
      "domain": "test",
      "balance": 2077534123,
      "currency": "NGN",
      "difference": -210000,
      "reason": "",
      "model_responsible": "Refund",
      "model_row": 1600361,
      "id": 149089424,
      "createdAt": "2021-04-07T12:19:22.000Z",
      "updatedAt": "2021-04-07T12:19:22.000Z"
    }
  ],
  "meta": {
    "total": 36944,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 739
  }
}
```

## Resend OTP

Generates a new OTP and sends to customer in the event they're having trouble receiving one.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `transfer_code` (`String`): Transfer code
- `reason` (`String`): Either resend_otp or transfer

**Endpoint:** `POST /transfer/resend_otp`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer/resend_otp"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"transfer_code": "TRF_vsyqdmlzble3uii",

"reason": "resend_otp"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "OTP has been resent"
}
```

## Disable OTP

This is used in the event that you want to be able to complete transfers programmatically without use of OTPs. No arguments required. You will get an OTP to complete the request.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

**Endpoint:** `POST /transfer/disable_otp`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer/disable_otp"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

curl "$url" -H "$authorization" -H "$content_type" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "OTP has been sent to mobile number ending with 4321"
}
```

## Finalize Disable OTP

Finalize the request to disable OTP on your transfers.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `otp` (`String`): OTP sent to business phone to verify disabling OTP requirement

**Endpoint:** `POST /transfer/disable_otp_finalize`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer/disable_otp_finalize"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "otp": "928783" }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "OTP requirement for transfers has been disabled"
}
```

## Enable OTP

In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

**Endpoint:** `POST /transfer/enable_otp`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transfer/enable_otp"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

curl "$url" -H "$authorization" -H "$content_type" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "OTP requirement for transfers has been enabled"
}
```
