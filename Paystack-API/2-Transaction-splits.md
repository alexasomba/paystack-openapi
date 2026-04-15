# Transaction Splits

The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts.

## Create Split

Create a split payment on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `name` (`String`): Name of the transaction split
- `type` (`String`): The type of transaction split you want to create. You can use one of the following: percentage | flat
- `currency` (`String`): Any of the supported currency
- `subaccounts` (`Array`): A list of object containing subaccount code and number of shares: [{subaccount: ‘ACT_xxxxxxxxxx’, share: xxx},{...}]
- `bearer_type` (`String`): Any of subaccount | account | all-proportional | all
- `bearer_subaccount` (`String`): Subaccount code

**Endpoint:** `POST /split`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/split"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"name":"Halfsies",

"type":"percentage",

"currency": "NGN",

"subaccounts":[{

"subaccount": "ACCT_6uujpqtzmnufzkw",

"share": 50

}]

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Split created",
  "data": {
    "id": 2703655,
    "name": "Halfsies",
    "type": "percentage",
    "currency": "NGN",
    "integration": 463433,
    "domain": "test",
    "split_code": "SPL_RcScyW5jp2",
    "active": true,
    "bearer_type": "all",
    "createdAt": "2024-08-26T11:38:47.506Z",
    "updatedAt": "2024-08-26T11:38:47.506Z",
    "is_dynamic": false,
    "subaccounts": [
      {
        "subaccount": {
          "id": 1151727,
          "subaccount_code": "ACCT_6uujpqtzmnufzkw",
          "business_name": "Oasis Global",
          "description": "Oasis Global",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "settlement_bank": "Guaranty Trust Bank",
          "currency": "NGN",
          "account_number": "0123456047"
        },
        "share": 50
      }
    ],
    "total_subaccounts": 1
  }
}
```

## List Split

List the transaction splits available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `name` (`String`): The name of the split
- `active` (`Boolean`): Any of true or false
- `sort_by` (`String`, optional): Sort by name, defaults to createdAt date
- `perPage` (`Integer`, optional): Number of splits per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Page number to view. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing splits e.g. 2019-09-24T00:00:05.000Z, 2019-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing splits e.g. 2019-09-24T00:00:05.000Z, 2019-09-21

**Endpoint:** `GET /split`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/split"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Split retrieved",
  "data": [
    {
      "id": 2703655,
      "name": "Halfsies",
      "type": "percentage",
      "currency": "NGN",
      "integration": 463433,
      "domain": "test",
      "split_code": "SPL_RcScyW5jp2",
      "active": true,
      "bearer_type": "all",
      "bearer_subaccount": null,
      "createdAt": "2024-08-26T11:38:47.000Z",
      "updatedAt": "2024-08-26T11:38:47.000Z",
      "is_dynamic": false,
      "subaccounts": [
        {
          "subaccount": {
            "id": 1151727,
            "subaccount_code": "ACCT_6uujpqtzmnufzkw",
            "business_name": "Oasis Global",
            "description": "Oasis Global",
            "primary_contact_name": null,
            "primary_contact_email": null,
            "primary_contact_phone": null,
            "metadata": null,
            "settlement_bank": "Guaranty Trust Bank",
            "currency": "NGN",
            "account_number": "0123456047"
          },
          "share": 50
        }
      ],
      "total_subaccounts": 1
    }
  ],
  "meta": {
    "total": 98,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 2
  }
}
```

## Fetch Split

Get details of a split on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`String`): The id of the split

**Endpoint:** `GET /split/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/split/{id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Split retrieved",
  "data": {
    "id": 2703655,
    "name": "Halfsies",
    "type": "percentage",
    "currency": "NGN",
    "integration": 463433,
    "domain": "test",
    "split_code": "SPL_RcScyW5jp2",
    "active": true,
    "bearer_type": "all",
    "bearer_subaccount": null,
    "createdAt": "2024-08-26T11:38:47.000Z",
    "updatedAt": "2024-08-26T11:38:47.000Z",
    "is_dynamic": false,
    "subaccounts": [
      {
        "subaccount": {
          "id": 1151727,
          "subaccount_code": "ACCT_6uujpqtzmnufzkw",
          "business_name": "Oasis Global",
          "description": "Oasis Global",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "settlement_bank": "Guaranty Trust Bank",
          "currency": "NGN",
          "account_number": "0123456047"
        },
        "share": 50
      }
    ],
    "total_subaccounts": 1
  }
}
```

## Update Split

Update a transaction split details on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`String`): Split ID

### Body Parameters

- `name` (`String`): Name of the transaction split
- `active` (`Boolean`): True or False
- `bearer_type` (`String`, optional): Any of the following values: subaccount | account | all-proportional | all
- `bearer_subaccount` (`String`, optional): Subaccount code of a subaccount in the split group. This should be specified only if the bearer_type is subaccount

**Endpoint:** `PUT /split/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/split/{id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"bearer_type": "all-proportional"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Split group updated",
  "data": {
    "id": 2703655,
    "name": "Halfsies",
    "type": "percentage",
    "currency": "NGN",
    "integration": 463433,
    "domain": "test",
    "split_code": "SPL_RcScyW5jp2",
    "active": true,
    "bearer_type": "all-proportional",
    "bearer_subaccount": null,
    "createdAt": "2024-08-26T11:38:47.000Z",
    "updatedAt": "2024-08-26T11:50:47.000Z",
    "is_dynamic": false,
    "subaccounts": [
      {
        "subaccount": {
          "id": 1151727,
          "subaccount_code": "ACCT_6uujpqtzmnufzkw",
          "business_name": "Oasis Global",
          "description": "Oasis Global",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "settlement_bank": "Guaranty Trust Bank",
          "currency": "NGN",
          "account_number": "0123456047"
        },
        "share": 50
      }
    ],
    "total_subaccounts": 1
  }
}
```

## Add/Update Subaccount Split

Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`String`): Split Id

### Body Parameters

- `subaccount` (`String`): This is the sub account code
- `share` (`Integer`): This is the transaction share for the subaccount

**Endpoint:** `POST /split/:id/subaccount/add`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/split/:id/subaccount/add"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"subaccount": "ACCT_eg4sob4590pq9vb",

"share": 20

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subaccount added",
  "data": {
    "id": 2703655,
    "name": "Halfsies",
    "type": "percentage",
    "currency": "NGN",
    "integration": 463433,
    "domain": "test",
    "split_code": "SPL_RcScyW5jp2",
    "active": true,
    "bearer_type": "all-proportional",
    "bearer_subaccount": null,
    "createdAt": "2024-08-26T11:38:47.000Z",
    "updatedAt": "2024-08-26T11:50:47.000Z",
    "is_dynamic": false,
    "subaccounts": [
      {
        "subaccount": {
          "id": 1151727,
          "subaccount_code": "ACCT_6uujpqtzmnufzkw",
          "business_name": "Oasis Global",
          "description": "Oasis Global",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "settlement_bank": "Guaranty Trust Bank",
          "currency": "NGN",
          "account_number": "0123456047"
        },
        "share": 50
      },
      {
        "subaccount": {
          "id": 803508,
          "subaccount_code": "ACCT_eg4sob4590pq9vb",
          "business_name": "mmhm",
          "description": "mmhm",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "settlement_bank": "Zenith Bank",
          "currency": "NGN",
          "account_number": "0000000000"
        },
        "share": 20
      }
    ],
    "total_subaccounts": 2
  }
}
```

## Remove Subaccount from Split

Remove a subaccount from a transaction split

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id` (`String`): Split Id

### Body Parameters

- `subaccount` (`String`): This is the sub account code

**Endpoint:** `POST /split/:id/subaccount/remove`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/split/:id/subaccount/remove"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"subaccount": "ACCT_eg4sob4590pq9vb"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subaccount removed"
}
```
