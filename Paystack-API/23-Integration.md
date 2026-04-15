# Integration

The Integration API allows you manage some settings on your integration.

## Fetch Timeout

Fetch the payment session timeout on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

**Endpoint:** `GET /integration/payment_session_timeout`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/integration/payment_session_timeout"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment session timeout retrieved",
  "data": {
    "payment_session_timeout": 30
  }
}
```

## Update Timeout

Update the payment session timeout on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `timeout` (`Integer`): Time before stopping session (in seconds). Set to 0 to cancel session timeouts

**Endpoint:** `PUT /integration/payment_session_timeout`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/integration/payment_session_timeout"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "timeout": 30 }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Payment session timeout updated",
  "data": {
    "payment_session_timeout": 30
  }
}
```
