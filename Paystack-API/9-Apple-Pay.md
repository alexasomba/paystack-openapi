# Apple Pay

The Apple Pay API allows you register your app's top-level domain or subdomain.

## Register Domain

Register a top-level domain or subdomain for your Apple Pay integration.

## Domain Registration

This endpoint can only be called with one domain or subdomain at a time.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `domainName` (`String`): Domain name to be registered

**Endpoint:** `POST /apple-pay/domain`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/apple-pay/domain"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"domainName": "example.com"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Domain successfully registered on Apple Pay"
}
```

## List Domains

Lists all registered domains on your integration. Returns an empty array if no domains have been added.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

use_cursor
boolean
Flag to enable cursor pagination on the endpoint

- `next` (`String`, optional): A cursor that indicates your place in the list. It can be used to fetch the next page of the list
- `previous` (`String`, optional): A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request

**Endpoint:** `GET /apple-pay/domain`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/apple-pay/domain"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Apple Pay registered domains retrieved",
  "data": {
    "domainNames": ["example.com"]
  }
}
```

## Unregister Domain

Unregister a top-level domain or subdomain previously used for your Apple Pay integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Body Parameters

- `domainName` (`String`): Domain name to be registered

## DEL

/apple-pay/domain

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/apple-pay/domain"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"domainName": "example.com"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X DELETE
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Domain successfully unregistered on Apple Pay"
}
```
