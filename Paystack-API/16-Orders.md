# Orders

The Orders API allows you to create and manage orders for your products.

## Create Order

Create an order for selected items

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `customer` (`String`): Customer code or ID
- `line_items` (`Array`): An array of line items. Each item should have product (product ID) and quantity

**Endpoint:** `POST /order`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/order"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"customer": "CUS_abc123def456",

"line_items": [

    {
      "product": 2196244,
      "quantity": 2
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
  "message": "Order created",
  "data": {
    "id": 12345,
    "code": "ORD_abc123def456",
    "amount": 20000,
    "currency": "NGN",
    "status": "pending",
    "customer": {
      "id": 297346561,
      "email": "customer@email.com"
    },
    "line_items": [
      {
        "product": {
          "id": 2196244,
          "name": "Sample Product"
        },
        "quantity": 2,
        "amount": 20000
      }
    ],
    "createdAt": "2024-11-01T12:00:00.000Z"
  }
}
```

## List Orders

List the orders available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing orders e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing orders e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /order`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/order"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Orders retrieved",
  "data": [
    {
      "id": 12345,
      "code": "ORD_abc123def456",
      "amount": 20000,
      "currency": "NGN",
      "status": "success",
      "customer": {
        "email": "customer@email.com"
      },
      "createdAt": "2024-11-01T12:00:00.000Z"
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

## Fetch Order

Fetch the details of an order on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The order ID you want to fetch

**Endpoint:** `GET /order/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/order/12345"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Order retrieved",
  "data": {
    "id": 12345,
    "code": "ORD_abc123def456",
    "amount": 20000,
    "currency": "NGN",
    "status": "success",
    "customer": {
      "id": 297346561,
      "email": "customer@email.com"
    },
    "line_items": [
      {
        "product": {
          "id": 2196244,
          "name": "Sample Product"
        },
        "quantity": 2,
        "amount": 20000
      }
    ],
    "createdAt": "2024-11-01T12:00:00.000Z"
  }
}
```

## Fetch Product Orders

Fetch all orders for a particular product

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The product ID to fetch orders for

**Endpoint:** `GET /order/product/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/order/product/2196244"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Product orders retrieved",
  "data": [
    {
      "id": 12345,
      "code": "ORD_abc123def456",
      "amount": 20000,
      "currency": "NGN",
      "status": "success",
      "customer": {
        "email": "customer@email.com"
      },
      "createdAt": "2024-11-01T12:00:00.000Z"
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

## Validate Order

Validate a pay for me order

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): The order code you want to validate

**Endpoint:** `GET /order/:code/validate`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/order/ORD_abc123def456/validate"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Order is valid",
  "data": {
    "id": 12345,
    "code": "ORD_abc123def456",
    "amount": 20000,
    "currency": "NGN",
    "status": "pending",
    "valid": true
  }
}
```
