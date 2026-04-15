# Transfers Recipients

The Transfer Recipients API allows you create and manage beneficiaries that you send money to.

## Create Transfer Recipient

Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `type` (`String`): Recipient Type. It could be one of: nuban, ghipss, mobile_money or basa
- `name` (`String`): The recipient's name according to their account registration.
- `account_number` (`String`): Required for all recipient types except authorization
- `bank_code` (`String`): Required for all recipient types except authorization. You can get the list of Bank Codes by calling the List Banks endpoint.
- `description` (`String`, optional): A description for this recipient
- `currency` (`String`, optional): Currency for the account receiving the transfer
- `authorization_code` (`String`, optional): An authorization code from a previous transaction
- `metadata` (`Object`, optional): Store additional information about your recipient in a structured format, JSON

**Endpoint:** `POST /transferrecipient`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transferrecipient"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"type": "nuban",

"name": "Tolu Robert",

"account_number": "01000000010",

"bank_code": "058",

"currency": "NGN"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transfer recipient created successfully",
  "data": {
    "active": true,
    "createdAt": "2021-11-05T11:27:53.131Z",
    "currency": "NGN",
    "domain": "test",
    "id": 20317609,
    "integration": 463433,
    "name": "Tolu Robert",
    "recipient_code": "RCP_m7ljkv8leesep7p",
    "type": "nuban",
    "updatedAt": "2021-11-05T11:27:53.131Z",
    "is_deleted": false,
    "details": {
      "authorization_code": null,
      "account_number": "01000000010",
      "account_name": "Tolu Robert",
      "bank_code": "058",
      "bank_name": "Guaranty Trust Bank"
    }
  }
}
```

## Bulk Create Transfer Recipient

Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `batch` (`Array`): A list of transfer recipient object. Each object should contain type, name, and bank_code. Any Create Transfer Recipient param can also be passed.

**Endpoint:** `POST /transferrecipient/bulk`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transferrecipient/bulk"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"batch": [

  {
    "type":"nuban",
    "name" : "Habenero Mundane",
    "account_number": "0123456789",
    "bank_code": "033",
    "currency": "NGN"
  },

  {
    "type":"nuban",
    "name" : "Soft Merry",
    "account_number": "98765432310",
    "bank_code": "50211",
    "currency": "NGN"
  }]

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Recipients added successfully",
  "data": {
    "success": [
      {
        "domain": "test",
        "name": "Habenero Mundane",
        "type": "nuban",
        "description": "",
        "integration": 463433,
        "currency": "NGN",
        "metadata": null,
        "details": {
          "account_number": "0123456789",
          "account_name": null,
          "bank_code": "033",
          "bank_name": "United Bank For Africa"
        },
        "recipient_code": "RCP_wh5k8r4vzuh5c94",
        "active": true,
        "id": 10152540,
        "isDeleted": false,
        "createdAt": "2020-11-09T10:12:48.213Z",
        "updatedAt": "2020-11-09T10:12:48.213Z"
      },
      {
        "domain": "test",
        "name": "Soft Merry",
        "type": "nuban",
        "description": "",
        "integration": 463433,
        "currency": "NGN",
        "metadata": null,
        "details": {
          "account_number": "98765432310",
          "account_name": null,
          "bank_code": "50211",
          "bank_name": "Kuda Bank"
        },
        "recipient_code": "RCP_yu1kkyktoljnczg",
        "active": true,
        "id": 10152541,
        "isDeleted": false,
        "createdAt": "2020-11-09T10:12:48.213Z",
        "updatedAt": "2020-11-09T10:12:48.213Z"
      }
    ],
    "errors": []
  }
}
```

## List Transfer Recipients

List transfer recipients available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing transfer recipients e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing transfer recipients e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /transferrecipient`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transferrecipient"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Recipients retrieved",
  "data": [
    {
      "domain": "test",
      "type": "nuban",
      "currency": "NGN",
      "name": "Flesh",
      "details": {
        "account_number": "01000000000",
        "account_name": null,
        "bank_code": "044",
        "bank_name": "Access Bank"
      },
      "metadata": {
        "job": "Eater"
      },
      "recipient_code": "RCP_2x5j67tnnw1t98k",
      "active": true,
      "id": 28,
      "createdAt": "2017-02-02T19:39:04.000Z",
      "updatedAt": "2017-02-02T19:39:04.000Z"
    },
    {
      "integration": 100073,
      "domain": "test",
      "type": "nuban",
      "currency": "NGN",
      "name": "Flesh",
      "details": {
        "account_number": "0100000010",
        "account_name": null,
        "bank_code": "044",
        "bank_name": "Access Bank"
      },
      "metadata": {},
      "recipient_code": "RCP_1i2k27vk4suemug",
      "active": true,
      "id": 27,
      "createdAt": "2017-02-02T19:35:33.000Z",
      "updatedAt": "2017-02-02T19:35:33.000Z"
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

## Fetch Transfer Recipient

Fetch the details of a transfer recipient

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): An ID or code for the recipient whose details you want to receive.

**Endpoint:** `GET /transferrecipient/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transferrecipient/{id_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Recipient retrieved",
  "data": {
    "domain": "test",
    "type": "nuban",
    "currency": "NGN",
    "name": "Flesh",
    "details": {
      "account_number": "01000000000",
      "account_name": null,
      "bank_code": "044",
      "bank_name": "Access Bank"
    },
    "metadata": {
      "job": "Eater"
    },
    "recipient_code": "RCP_2x5j67tnnw1t98k",
    "active": true,
    "id": 28,
    "createdAt": "2017-02-02T19:39:04.000Z",
    "updatedAt": "2017-02-02T19:39:04.000Z"
  }
}
```

## Update Transfer Recipient

Update transfer recipients available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id_or_code` (`String`): Transfer Recipient's ID or code

### Body Parameters

- `name` (`String`): A name for the recipient
- `email` (`String`, optional): Email address of the recipient

**Endpoint:** `PUT /transferrecipient/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transferrecipient/{id_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"name": "Rick Sanchez"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Recipient updated",
  "data": {
    "type": "nuban",
    "name": "Rick Sanchez",
    "metadata": {
      "job": "Flesh Eater",
      "retired": true
    },
    "domain": "test",
    "details": {
      "account_number": "01000000010",
      "account_name": null,
      "bank_code": "044",
      "bank_name": "Access Bank"
    },
    "currency": "NGN",
    "recipient_code": "RCP_1i2k27vk4suemug",
    "active": true,
    "id": 27,
    "createdAt": "2017-02-02T19:35:33.686Z",
    "updatedAt": "2017-02-02T19:35:33.686Z"
  }
}
```

## Delete Transfer Recipient

Delete a transfer recipient (sets the transfer recipient to inactive)

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): An ID or code for the recipient who you want to delete.

**Endpoint:** `DELETE /transferrecipient/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transferrecipient/{id_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X DELETE
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transfer recipient set as inactive"
}
```
