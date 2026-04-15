# Capitec Pay

The Capitec Pay API allows you to manage secure payment for customers with the Capitec banking app.

## Feature Availability

Capitec Pay is available to businesses in South Africa only.

## Requery Transaction

Check the status of a charge made with Capitec Pay. This endpoint should be used from your frontend application as it requires the use of your public key for request authorization.

## Polling recommendation

We recommend to start polling for a response after 90 seconds with a minimum 10 second interval, polling in less than 10 second intervals will return cached data.

### Headers

- `authorization` (`String`): Set value to Bearer PUBLIC_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `ref` (`String`): The transaction reference from the previously initiated charge request

**Endpoint:** `POST /capitec-pay/requery/{ref}`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/capitec-pay/requery/{ref}"
authorization="Authorization: Bearer pk_domain_xxxxx"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "type": "success",
  "code": "ok",
  "data": {
    "status": "success"
  },
  "message": "Charge successful"
}
```
