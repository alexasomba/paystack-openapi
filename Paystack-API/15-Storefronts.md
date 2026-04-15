# Storefronts

The Storefronts API allows you to create and manage digital shops to display and sell your products.

## Create Storefront

Create a digital shop to manage and display your products

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `name` (`String`): Name of the storefront
- `slug` (`String`, optional): URL slug for the storefront. Must be unique
- `description` (`String`, optional): A description for this storefront

**Endpoint:** `POST /storefront`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "name": "My Storefront",
  "slug": "my-storefront",
  "description": "A description of my storefront"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Storefront created",
  "data": {
    "id": 1559046,
    "name": "My Storefront",
    "slug": "my-storefront",
    "description": "A description of my storefront",
    "status": "inactive",
    "currency": "NGN",
    "createdAt": "2024-11-01T12:00:00.000Z",
    "updatedAt": "2024-11-01T12:00:00.000Z"
  }
}
```

## List Storefronts

List the storefronts available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `status` (`String`, optional): Filter by storefront status. Value can be `active` or `inactive`

**Endpoint:** `GET /storefront`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Storefronts retrieved",
  "data": [
    {
      "id": 1559046,
      "name": "My Storefront",
      "slug": "my-storefront",
      "description": "A description of my storefront",
      "status": "active",
      "currency": "NGN",
      "createdAt": "2024-11-01T12:00:00.000Z",
      "updatedAt": "2024-11-01T12:00:00.000Z"
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

## Fetch Storefront

Get the details of a storefront on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The storefront ID you want to fetch

**Endpoint:** `GET /storefront/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/1559046"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Storefront retrieved",
  "data": {
    "id": 1559046,
    "name": "My Storefront",
    "slug": "my-storefront",
    "description": "A description of my storefront",
    "status": "active",
    "currency": "NGN",
    "createdAt": "2024-11-01T12:00:00.000Z",
    "updatedAt": "2024-11-01T12:00:00.000Z"
  }
}
```

## Update Storefront

Update the details of a storefront on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`Integer`): The storefront ID you want to update

### Body Parameters

- `name` (`String`, optional): Name of the storefront
- `description` (`String`, optional): A description for this storefront

**Endpoint:** `PUT /storefront/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/1559046"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "name": "Updated Storefront Name",
  "description": "An updated description"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Storefront updated",
  "data": {
    "id": 1559046,
    "name": "Updated Storefront Name",
    "slug": "my-storefront",
    "description": "An updated description",
    "status": "active",
    "currency": "NGN",
    "createdAt": "2024-11-01T12:00:00.000Z",
    "updatedAt": "2024-11-01T14:00:00.000Z"
  }
}
```

## Delete Storefront

Delete a storefront on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The storefront ID you want to delete

**Endpoint:** `DELETE /storefront/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/1559046"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X DELETE
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Storefront deleted"
}
```

## Verify Storefront Slug

Verify the availability of a slug before using it for your storefront

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `slug` (`String`): The slug you want to verify

**Endpoint:** `GET /storefront/verify/:slug`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/verify/my-storefront"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Slug is available"
}
```

## Fetch Storefront Orders

Fetch all orders in your storefront

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The storefront ID

**Endpoint:** `GET /storefront/:id/order`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/1559046/order"
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
      "amount": 50000,
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

## Add Products to Storefront

Add previously created products to a storefront

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`Integer`): The storefront ID

### Body Parameters

- `products` (`Array`): An array of product IDs to add to the storefront

**Endpoint:** `POST /storefront/:id/product`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/1559046/product"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{
  "products": [2196244, 2196245]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Products added to storefront"
}
```

## List Storefront Products

List the products in a storefront

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The storefront ID

**Endpoint:** `GET /storefront/:id/product`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/1559046/product"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Products retrieved",
  "data": [
    {
      "id": 2196244,
      "name": "Sample Product",
      "description": "A sample product",
      "price": 10000,
      "currency": "NGN",
      "active": true
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

## Publish Storefront

Make your storefront publicly available

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The storefront ID you want to publish

**Endpoint:** `POST /storefront/:id/publish`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/1559046/publish"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Storefront published"
}
```

## Duplicate Storefront

Duplicate a previously created storefront

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): The storefront ID you want to duplicate

**Endpoint:** `POST /storefront/:id/duplicate`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/storefront/1559046/duplicate"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Storefront duplicated"
}
```
