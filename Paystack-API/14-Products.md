# Products

The Products API allows you create and manage inventories on your integration.

## Create Product

Create a product on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `name` (`String`): Name of product
- `description` (`String`): A description for this product
- `price` (`Integer`): Price should be in the subunit of the supported currency
- `currency` (`String`): Currency in which price is set
- `unlimited` (`Boolean`, optional): Set to true if the product has unlimited stock. Leave as false if the product has limited stock
- `quantity` (`Integer`, optional): Number of products in stock. Use if unlimited is false

**Endpoint:** `POST /product`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/product"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"name": "Puff Puff",

"description": "Crispy flour ball with fluffy interior",

"price": "5000",

"currency": "NGN",

"unlimited": false,

"quantity": 100

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 201 Created

```json
{
  "status": true,
  "message": "Product successfully created",
  "data": {
    "name": "Puff Puff",
    "description": "Crispy flour ball with fluffy interior",
    "currency": "NGN",
    "price": 5000,
    "quantity": 100,
    "is_shippable": true,
    "unlimited": false,
    "integration": 463433,
    "domain": "test",
    "metadata": {
      "background_color": "#F5F5F5"
    },
    "slug": "puff-puff-prqnxc",
    "product_code": "PROD_ddot3upakgl3ejt",
    "quantity_sold": 0,
    "type": "good",
    "shipping_fields": {
      "delivery_note": "disabled"
    },
    "active": true,
    "in_stock": true,
    "minimum_orderable": 1,
    "maximum_orderable": null,
    "low_stock_alert": false,
    "id": 489399,
    "createdAt": "2021-11-08T14:39:37.303Z",
    "updatedAt": "2021-11-08T14:39:37.303Z"
  }
}
```

## List Products

List products available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing product e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing product e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /product`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/product"
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
      "id": 795638,
      "name": "Mimshack",
      "description": "Everything cars",
      "product_code": "PROD_22deobcvbht2dfe",
      "slug": "mimshack-yiuedh",
      "currency": "NGN",
      "price": 50000,
      "quantity": 10,
      "quantity_sold": 0,
      "active": true,
      "domain": "test",
      "type": "good",
      "in_stock": true,
      "unlimited": false,
      "metadata": {
        "background_color": "#F5F5F5"
      },
      "files": [],
      "success_message": null,
      "redirect_url": null,
      "split_code": null,
      "notification_emails": null,
      "minimum_orderable": 1,
      "maximum_orderable": null,
      "createdAt": "2022-04-12T11:21:43.000Z",
      "updatedAt": "2022-04-12T11:21:43.000Z",
      "digital_assets": [],
      "variant_options": [],
      "is_shippable": true,
      "shipping_fields": {
        "delivery_note": "disabled"
      },
      "integration": 463433,
      "low_stock_alert": 0
    },
    {
      "id": 682324,
      "name": "Nike Air 23",
      "description": "Just do it!",
      "product_code": "PROD_4vg503b3qga3vul",
      "slug": "nike-air-23-gylbao",
      "currency": "NGN",
      "price": 25000000,
      "quantity": 7,
      "quantity_sold": 0,
      "active": true,
      "domain": "test",
      "type": "good",
      "in_stock": true,
      "unlimited": false,
      "metadata": {
        "background_color": "#05090b"
      },
      "files": [
        {
          "key": "products/2eppxpcv5mqdulp7l410.jpeg",
          "type": "image",
          "path": "https://res.cloudinary.com/paystack/image/upload/public/files/products/2eppxpcv5mqdulp7l410.jpeg",
          "original_filename": "download.jpeg"
        }
      ],
      "success_message": "Thanks for your order",
      "redirect_url": "https://nike.com",
      "split_code": null,
      "notification_emails": null,
      "minimum_orderable": 1,
      "maximum_orderable": null,
      "createdAt": "2022-03-02T11:48:09.000Z",
      "updatedAt": "2022-03-02T11:50:57.000Z",
      "digital_assets": [],
      "variant_options": [],
      "is_shippable": true,
      "shipping_fields": {
        "delivery_note": "optional",
        "shipping_fees": [
          {
            "region": "Ikeja",
            "fee": 100000,
            "currency": "NGN"
          },
          {
            "region": "Yaba",
            "fee": 150000,
            "currency": "NGN"
          },
          {
            "region": "Rest of Lagos",
            "fee": 300000,
            "currency": "NGN"
          }
        ]
      },
      "integration": 463433,
      "low_stock_alert": 0
    },
    {
      "id": 489399,
      "name": "Puff Puff",
      "description": "Crispy flour ball with fluffy interior",
      "product_code": "PROD_ddot3upakgl3ejt",
      "slug": "puff-puff-prqnxc",
      "currency": "NGN",
      "price": 5000,
      "quantity": 100,
      "quantity_sold": 0,
      "active": true,
      "domain": "test",
      "type": "good",
      "in_stock": true,
      "unlimited": false,
      "metadata": {
        "background_color": "#F5F5F5"
      },
      "files": [],
      "success_message": null,
      "redirect_url": null,
      "split_code": null,
      "notification_emails": null,
      "minimum_orderable": 1,
      "maximum_orderable": null,
      "createdAt": "2021-11-08T14:39:37.000Z",
      "updatedAt": "2021-11-08T14:39:37.000Z",
      "digital_assets": [],
      "variant_options": [],
      "is_shippable": true,
      "shipping_fields": {
        "delivery_note": "disabled"
      },
      "integration": 463433,
      "low_stock_alert": 0
    }
  ],
  "meta": {
    "total": 3,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 1
  }
}
```

## Fetch Product

Get details of a product on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`String`): The product ID you want to fetch

**Endpoint:** `GET /product/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/product/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Product retrieved",
  "data": {
    "digital_assets": [],
    "integration": 463433,
    "name": "Mimshack",
    "description": "Everything cars",
    "product_code": "PROD_22deobcvbht2dfe",
    "price": 50000,
    "currency": "NGN",
    "quantity": 10,
    "quantity_sold": null,
    "type": "good",
    "files": null,
    "file_path": null,
    "is_shippable": true,
    "shipping_fields": {
      "delivery_note": "disabled"
    },
    "unlimited": false,
    "domain": "test",
    "active": true,
    "features": null,
    "in_stock": true,
    "metadata": {
      "background_color": "#F5F5F5"
    },
    "slug": "mimshack-yiuedh",
    "success_message": null,
    "redirect_url": null,
    "split_code": null,
    "notification_emails": null,
    "minimum_orderable": 1,
    "maximum_orderable": null,
    "low_stock_alert": false,
    "stock_threshold": null,
    "expires_in": null,
    "id": 795638,
    "createdAt": "2022-04-12T11:21:43.000Z",
    "updatedAt": "2022-04-12T11:21:43.000Z"
  }
}
```

## Update Product

Update a product details on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`String`): Product ID

### Body Parameters

- `name` (`String`): Name of product
- `description` (`String`): A description for this product
- `price` (`Integer`): Price should be in the subunit of the supported currency
- `currency` (`String`): Currency in which price is set
- `unlimited` (`Boolean`, optional): Set to true if the product has unlimited stock. Leave as false if the product has limited stock
- `quantity` (`Integer`, optional): Number of products in stock. Use if unlimited is false

**Endpoint:** `PUT /product/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/product/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"description": "Product Six Description",

"name": "Product Six",

"price": 500000,

"currency": "USD",

"limited": false,

"quantity": 100

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Created

```json
{
  "status": true,
  "message": "Product successfully updated",
  "data": {
    "name": "Prod One",
    "description": "Prod 1",
    "product_code": "PROD_ohc0xq1ajpt2271",
    "price": 20000,
    "currency": "NGN",
    "quantity": 5,
    "quantity_sold": null,
    "type": "good",
    "image_path": "",
    "file_path": "",
    "is_shippable": false,
    "unlimited": false,
    "domain": "test",
    "active": true,
    "features": null,
    "in_stock": true,
    "metadata": null,
    "id": 526,
    "integration": 343288,
    "createdAt": "2019-06-29T14:46:52.000Z",
    "updatedAt": "2019-06-29T15:29:21.000Z"
  }
}
```
