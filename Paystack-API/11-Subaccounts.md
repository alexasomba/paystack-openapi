# Subaccounts

The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account).

## Create Subaccount

Create a subacount on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `business_name` (`String`): Name of business for subaccount
- `bank_code` (`String`): Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint.
- `account_number` (`String`): Bank Account Number
- `percentage_charge` (`Float`): The percentage the main account receives from each payment made to the subaccount
- `description` (`String`, optional): A description for this subaccount
- `primary_contact_email` (`String`, optional): A contact email for the subaccount
- `primary_contact_name` (`String`, optional): A name for the contact person for this subaccount
- `primary_contact_phone` (`String`, optional): A phone number to call for this subaccount
- `metadata` (`String`, optional): Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]}

**Endpoint:** `POST /subaccount`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subaccount"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"business_name": "Oasis",

"settlement_bank": "058",

"account_number": "0123456047",

"percentage_charge": 30

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 201 Created

```json
{
  "status": true,
  "message": "Subaccount created",
  "data": {
    "business_name": "Oasis",
    "account_number": "0123456047",
    "percentage_charge": 30,
    "settlement_bank": "Guaranty Trust Bank",
    "currency": "NGN",
    "bank": 9,
    "integration": 463433,
    "domain": "test",
    "account_name": "LARRY JAMES  O",
    "product": "collection",
    "managed_by_integration": 463433,
    "subaccount_code": "ACCT_6uujpqtzmnufzkw",
    "is_verified": false,
    "settlement_schedule": "AUTO",
    "active": true,
    "migrate": false,
    "id": 1151727,
    "createdAt": "2024-08-26T09:24:28.723Z",
    "updatedAt": "2024-08-26T09:24:28.723Z"
  }
}
```

## List Subaccounts

List subaccounts available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing subaccounts e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing subaccounts e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /subaccount`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subaccount"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subaccounts retrieved",
  "data": [
    {
      "id": 1151727,
      "subaccount_code": "ACCT_6uujpqtzmnufzkw",
      "business_name": "Oasis",
      "description": "Oasis",
      "primary_contact_name": null,
      "primary_contact_email": null,
      "primary_contact_phone": null,
      "metadata": null,
      "percentage_charge": 30,
      "settlement_bank": "Guaranty Trust Bank",
      "bank_id": 9,
      "account_number": "0123456047",
      "currency": "NGN",
      "active": 1
    }
  ],
  "meta": {
    "total": 27,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 1
  }
}
```

## Fetch Subaccount

Get details of a subaccount on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_code` (`String`): The subaccount ID or code you want to fetch

**Endpoint:** `GET /subaccount/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subaccount/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subaccount retrieved",
  "data": {
    "integration": 463433,
    "bank": 9,
    "managed_by_integration": 463433,
    "domain": "test",
    "subaccount_code": "ACCT_6uujpqtzmnufzkw",
    "business_name": "Oasis",
    "description": null,
    "primary_contact_name": null,
    "primary_contact_email": null,
    "primary_contact_phone": null,
    "metadata": null,
    "percentage_charge": 30,
    "is_verified": false,
    "settlement_bank": "Guaranty Trust Bank",
    "account_number": "0123456047",
    "settlement_schedule": "AUTO",
    "active": true,
    "migrate": false,
    "currency": "NGN",
    "account_name": "LARRY JAMES  O",
    "product": "collection",
    "id": 1151727,
    "createdAt": "2024-08-26T09:24:28.000Z",
    "updatedAt": "2024-08-26T09:24:28.000Z"
  }
}
```

## Update Subaccount

Update a subaccount details on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `id_or_code` (`String`): Subaccount's ID or code

### Body Parameters

- `business_name` (`String`): Name of business for subaccount
- `description` (`String`): A description for this subaccount
- `bank_code` (`String`, optional): Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint.
- `account_number` (`String`, optional): Bank Account Number
- `active` (`Boolean`, optional): Activate or deactivate a subaccount. Set value to true to activate subaccount or false to deactivate the subaccount.
- `percentage_charge` (`Float`, optional): The default percentage charged when receiving on behalf of this subaccount
- `primary_contact_email` (`String`, optional): A contact email for the subaccount
- `primary_contact_name` (`String`, optional): A name for the contact person for this subaccount
- `primary_contact_phone` (`String`, optional): A phone number to call for this subaccount
- `settlement_schedule` (`String`, optional): Any of auto, weekly, `monthly`, `manual`. Auto means payout is T+1 and manual means payout to the subaccount should only be made when requested. Defaults to auto
- `metadata` (`String`, optional): Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]}

**Endpoint:** `PUT /subaccount/:id_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/subaccount/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"business_name": "Oasis Global",

"description": "Provide IT services"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Subaccount updated",
  "data": {
    "domain": "test",
    "subaccount_code": "ACCT_6uujpqtzmnufzkw",
    "business_name": "Oasis Global",
    "description": "Provide IT services",
    "primary_contact_name": null,
    "primary_contact_email": null,
    "primary_contact_phone": null,
    "metadata": null,
    "percentage_charge": 30,
    "is_verified": false,
    "settlement_bank": "Guaranty Trust Bank",
    "account_number": "0123456047",
    "settlement_schedule": "AUTO",
    "active": true,
    "migrate": false,
    "currency": "NGN",
    "account_name": "LARRY JAMES  O",
    "product": "collection",
    "id": 1151727,
    "integration": 463433,
    "bank": 9,
    "managed_by_integration": 463433,
    "createdAt": "2024-08-26T09:24:28.000Z",
    "updatedAt": "2024-08-26T09:34:18.000Z"
  }
}
```
