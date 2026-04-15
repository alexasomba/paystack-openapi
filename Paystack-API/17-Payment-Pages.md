# Payment Pages

The Payment Pages API provides a quick and secure way to collect payment for products.

## Create Payment Page

Create a payment page on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `name` (`String`): Name of page
- `description` (`String`, optional): A description for this page
- `amount` (`Integer`, optional): Amount should be in the subunit of the supported currency
- `currency` (`String`, optional): The transaction currency. Defaults to your integration currency.
- `slug` (`String`, optional): URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]
- `type` (`String`, optional): The type of payment page to create. Options are payment, subscription, product, and plan. Defaults to payment if no type is specified.
- `plan` (`String`, optional): The ID of the plan to subscribe customers on this payment page to when type is set to subscription.
- `fixed_amount` (`Boolean`, optional): Specifies whether to collect a fixed amount on the payment page. If true, amount must be passed.
- `split_code` (`String`, optional): The split code of the transaction split. e.g. SPL_98WF13Eb3w
- `metadata` (`Object`, optional): Extra data to configure the payment page including subaccount, logo image, transaction charge
- `redirect_url` (`String`, optional): If you would like Paystack to redirect someplace upon successful payment, specify the URL here.
- `success_message` (`String`, optional): A success message to display to the customer after a successful transaction
- `notification_email` (`String`, optional): An email address that will receive transaction notifications for this payment page
- `collect_phone` (`Boolean`, optional): Specify whether to collect phone numbers on the payment page
- `custom_fields` (`Array`, optional): If you would like to accept custom fields, specify them here.

**Endpoint:** `POST /page`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/page"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"name": "Buttercup Brunch",

"amount": 500000,

"description": "Gather your friends for the ritual that is brunch",

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Page created",
  "data": {
    "name": "Onipan and Hassan",
    "description": "",
    "amount": 10000,
    "split_code": "SPL_yqSS1FvrBz",
    "integration": 463433,
    "domain": "test",
    "slug": "1got2y8unp",
    "currency": "NGN",
    "type": "payment",
    "collect_phone": false,
    "active": true,
    "published": true,
    "migrate": false,
    "id": 1308510,
    "createdAt": "2023-03-21T11:44:16.412Z",
    "updatedAt": "2023-03-21T11:44:16.412Z"
  }
}
```

## List Payment Pages

List payment pages available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing page e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing page e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /page`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/page"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization"  -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Pages retrieved",
  "data": [
    {
      "integration": 100073,
      "plan": 1716,
      "domain": "test",
      "name": "Subscribe to plan: Weekly small chops",
      "description": null,
      "amount": null,
      "currency": "NGN",
      "slug": "sR7Ohx2iVd",
      "custom_fields": null,
      "redirect_url": null,
      "active": true,
      "migrate": null,
      "id": 2223,
      "createdAt": "2016-10-01T10:59:11.000Z",
      "updatedAt": "2016-10-01T10:59:11.000Z"
    },
    {
      "integration": 100073,
      "plan": null,
      "domain": "test",
      "name": "Special",
      "description": "Special page",
      "amount": 10000,
      "currency": "NGN",
      "slug": "special-me",
      "custom_fields": [
        {
          "display_name": "Speciality",
          "variable_name": "speciality"
        },
        {
          "display_name": "Age",
          "variable_name": "age"
        }
      ],
      "redirect_url": "http://special.url",
      "active": true,
      "migrate": null,
      "id": 1807,
      "createdAt": "2016-09-09T19:18:37.000Z",
      "updatedAt": "2016-09-14T17:51:49.000Z"
    }
  ],
  "meta": {
    "total": 2,
    "skipped": 0,
    "perPage": "3",
    "page": 1,
    "pageCount": 1
  }
}
```

## Fetch Payment Page

Get details of a payment page on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_slug` (`String`): The page ID or slug you want to fetch

**Endpoint:** `GET /page/:id_or_slug`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/page/:id_or_slug"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization"  -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Page retrieved",
  "data": {
    "integration": 100032,
    "domain": "test",
    "name": "Offering collections",
    "description": "Give unto the Lord, and it shall be multiplied ten-fold to you.",
    "amount": null,
    "currency": "NGN",
    "slug": "5nApBwZkvY",
    "active": true,
    "id": 18,
    "createdAt": "2016-03-30T00:49:57.000Z",
    "updatedAt": "2016-03-30T00:49:57.000Z",
    "products": [
      {
        "product_id": 523,
        "name": "Product Four",
        "description": "Product Four Description",
        "product_code": "PROD_l9p81u9pkjqjunb",
        "page": 18,
        "price": 500000,
        "currency": "NGN",
        "quantity": 0,
        "type": "good",
        "features": null,
        "is_shippable": 0,
        "domain": "test",
        "integration": 343288,
        "active": 1,
        "in_stock": 1
      },
      {
        "product_id": 522,
        "name": "Product Five",
        "description": "Product Five Description",
        "product_code": "PROD_8ne9cxutagmtsyz",
        "page": 18,
        "price": 500000,
        "currency": "NGN",
        "quantity": 0,
        "type": "good",
        "features": null,
        "is_shippable": 0,
        "domain": "test",
        "integration": 343288,
        "active": 1,
        "in_stock": 0
      }
    ]
  }
}
```

## Update Payment Page

Update a payment page details on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id_or_slug` (`String`): Page ID or slug

### Body Parameters

- `name` (`String`): Name of page
- `description` (`String`): A description for this page
- `amount` (`Integer`, optional): Default amount you want to accept using this page. If none is set, customer is free to provide any amount of their choice. The latter scenario is useful for accepting donations
- `active` (`Boolean`, optional): Set to false to deactivate page url

**Endpoint:** `PUT /page/:id_or_slug`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/page/:id_or_slug"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"name": "Buttercup Brunch",

"amount": 500000

"description": "Gather your friends for the ritual that is brunch",

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Page updated",
  "data": {
    "domain": "test",
    "name": "Buttercup Brunch",
    "description": "Gather your friends for the ritual that is brunch",
    "amount": null,
    "currency": "NGN",
    "slug": "5nApBwZkvY",
    "active": true,
    "id": 18,
    "integration": 100032,
    "createdAt": "2016-03-30T00:49:57.000Z",
    "updatedAt": "2016-03-30T04:44:35.000Z"
  }
}
```

## Check Slug Availability

Check the availability of a slug for a payment page

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `slug` (`String`): URL slug to be confirmed

**Endpoint:** `GET /page/check_slug_availability/:slug`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/page/check_slug_availability/:slug"
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

## Add Products

Add products to a payment page

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`Integer`): Id of the payment page

### Body Parameters

product
Array of Integer
Ids of all the products

**Endpoint:** `POST /page/:id/product`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/page/:id/product"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "product": [473, 292] }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Products added to page",
  "data": {
    "integration": 343288,
    "plan": null,
    "domain": "test",
    "name": "Demo Products Page",
    "description": "Demo Products Page",
    "amount": null,
    "currency": "NGN",
    "slug": "demoproductspage",
    "custom_fields": [],
    "type": "product",
    "redirect_url": null,
    "success_message": null,
    "collect_phone": false,
    "active": true,
    "published": true,
    "migrate": true,
    "notification_email": null,
    "metadata": {},
    "id": 102859,
    "createdAt": "2019-06-29T16:21:24.000Z",
    "updatedAt": "2019-06-29T16:28:11.000Z",
    "products": [
      {
        "product_id": 523,
        "name": "Product Four",
        "description": "Product Four Description",
        "product_code": "PROD_l9p81u9pkjqjunb",
        "page": 102859,
        "price": 500000,
        "currency": "NGN",
        "quantity": 0,
        "type": "good",
        "features": null,
        "is_shippable": 0,
        "domain": "test",
        "integration": 343288,
        "active": 1,
        "in_stock": 1
      }
    ]
  }
}
```
