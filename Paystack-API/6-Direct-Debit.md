# Direct Debit

The Direct Debit API allows you manage the authorization on your customer's bank accounts.

## Trigger Activation Charge

Trigger an activation charge on pending mandates on behalf of your customers.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

customer_ids
array
An array of customer IDs with pending mandate authorizations.

**Endpoint:** `PUT /directdebit/activation-charge`

### cURL

```sh
#!/bin/sh
curl https://api.paystack.co/directdebit/activation-charge
-H "Authorization: Bearer YOUR_SECRET_KEY"

-H "Content-Type: application/json"

-d '{

"customer_ids": [28958104, 983697220]

}'

-X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Mandate is queued for retry"
}
```

## List Mandate Authorizations

Get the list of direct debit mandates on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `cursor` (`String`): The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response
- `status` (`String`): Filter by the authorization status. Accepted values are: pending, active, revoked
- `per_page` (`Integer`): The number of authorizations to fetch per request

**Endpoint:** `GET /directdebit/mandate-authorizations`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/directdebit/mandate-authorizations"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Mandate authorizations retrieved successfully",
  "data": [
    {
      "id": 112244,
      "status": "active",
      "mandate_id": 1560169,
      "authorization_id": 1069309917,
      "authorization_code": "AUTH_lEt8QgrSfW",
      "integration_id": 463433,
      "account_number": "0123456789",
      "bank_code": "058",
      "bank_name": "Guaranty Trust Bank",
      "customer": {
        "id": 28958104,
        "customer_code": "CUS_5kye9bc41uw15pb",
        "email": "customer@email.com",
        "first_name": "Booker",
        "last_name": "Jones"
      },
      "authorized_at": "2025-06-23T12:47:10.632Z"
    }
  ],
  "meta": {
    "per_page": 10,
    "next": "MTI1OTc=",
    "count": 10,
    "total": 40
  }
}
```
