# Dedicated Virtual Accounts

The Dedicated Virtual Account API enables Nigerian and Ghanaian merchants to manage unique payment accounts of their customers.

## Create Dedicated Virtual Account

Create a dedicated virtual account for an existing customer

## Bank Availability

You can get supported banks by calling the Fetch Providers endpoint.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `customer` (`String`): Customer ID or code
- `preferred_bank` (`String`, optional): The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint.
- `subaccount` (`String`, optional): Subaccount code of the account you want to split the transaction with
- `split_code` (`String`, optional): Split code consisting of the lists of accounts you want to split the transaction with
- `first_name` (`String`, optional): Customer's first name
- `last_name` (`String`, optional): Customer's last name
- `phone` (`String`, optional): Customer's phone number

**Endpoint:** `POST /dedicated_account`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dedicated_account"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "customer": 481193,

"preferred_bank":"wema-bank"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "NUBAN successfully created",
  "data": {
    "bank": {
      "name": "Wema Bank",
      "id": 20,
      "slug": "wema-bank"
    },
    "account_name": "KAROKART / RHODA CHURCH",
    "account_number": "9930000737",
    "assigned": true,
    "currency": "NGN",
    "metadata": null,
    "active": true,
    "id": 253,
    "created_at": "2019-12-12T12:39:04.000Z",
    "updated_at": "2020-01-06T15:51:24.000Z",
    "assignment": {
      "integration": 100043,
      "assignee_id": 7454289,
      "assignee_type": "Customer",
      "expired": false,
      "account_type": "PAY-WITH-TRANSFER-RECURRING",
      "assigned_at": "2020-01-06T15:51:24.764Z"
    },
    "customer": {
      "id": 7454289,
      "first_name": "RHODA",
      "last_name": "CHURCH",
      "email": "rhodachurch@email.com",
      "customer_code": "CUS_kpb3qj71u1m0rw8",
      "phone": "+2349053267565",
      "risk_action": "default"
    }
  }
}
```

## Assign Dedicated Virtual Account

With this endpoint, you can create a customer, validate the customer, and assign a DVA to the customer.

## Bank Availability

You can get supported banks by calling the Fetch Providers endpoint.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `email` (`String`): Customer email address
- `first_name` (`String`): Customer's first name
- `last_name` (`String`): Customer's last name
- `phone` (`String`): Customer's phone number
- `preferred_bank` (`String`): The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint.
- `country` (`String`): Currently accepts NG and GH only
- `account_number` (`String`, optional): Customer's account number
- `bvn` (`String`, optional): Customer's Bank Verification Number (Nigeria only)
- `bank_code` (`String`, optional): Customer's bank code
- `subaccount` (`String`, optional): Subaccount code of the account you want to split the transaction with
- `split_code` (`String`, optional): Split code consisting of the lists of accounts you want to split the transaction with

**Endpoint:** `POST /dedicated_account/assign`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dedicated_account/assign"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"email": "janedoe@test.com",

"first_name": "Jane",

"middle_name": "Karen",

"last_name": "Doe",

"phone": "+2348100000000",

"preferred_bank": "test-bank",

"country": "NG"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Assign dedicated account in progress"
}
```

## List Dedicated Virtual Accounts

List dedicated virtual accounts available on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `active` (`Boolean`): Status of the dedicated virtual account
- `currency` (`String`): The currency of the dedicated virtual account. Only NGN and GHS are currently allowed
- `provider_slug` (`String`, optional): The bank's slug in lowercase, without spaces e.g. wema-bank
- `bank_id` (`String`, optional): The bank's ID e.g. 035
- `customer` (`String`, optional): The customer's ID

**Endpoint:** `GET /dedicated_account`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dedicated_account"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Managed accounts successfully retrieved",
  "data": [
    {
      "customer": {
        "id": 1530104,
        "first_name": "yinka",
        "last_name": "Ojo",
        "email": "hello@company.co",
        "customer_code": "CUS_dy1r7ts03zixbq5",
        "phone": "08154239386",
        "risk_action": "default",
        "international_format_phone": null
      },
      "bank": {
        "name": "Wema Bank",
        "id": 20,
        "slug": "wema-bank"
      },
      "id": 173,
      "account_name": "KAROKART/A YINKA",
      "account_number": "9930020212",
      "created_at": "2019-12-09T13:31:38.000Z",
      "updated_at": "2020-06-11T14:04:28.000Z",
      "currency": "NGN",
      "split_config": {
        "subaccount": "ACCT_xdrne0tcvr5jkei"
      },
      "active": true,
      "assigned": true
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

## Fetch Dedicated Virtual Account

Get details of a dedicated virtual account on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `dedicated_account_id` (`Integer`): ID of dedicated virtual account

**Endpoint:** `GET /dedicated_account/:dedicated_account_id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dedicated_account/:dedicated_account_id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Managed account successfully retrieved",
  "data": {
    "customer": {
      "id": 42200598,
      "first_name": "Rose",
      "last_name": "Sharon",
      "email": "rose@sharon.com",
      "customer_code": "CUS_lfq5hi7rsnub7gl",
      "phone": "8091234650",
      "metadata": {
        "calling_code": "+234"
      },
      "risk_action": "default",
      "international_format_phone": null
    },
    "bank": {
      "name": "Wema Bank",
      "id": 20,
      "slug": "wema-bank"
    },
    "id": 1234553,
    "account_name": "BOOMBOOMINDUS/Sharon Rose",
    "account_number": "1234709987",
    "created_at": "2021-02-13T00:29:50.000Z",
    "updated_at": "2021-03-30T10:03:54.000Z",
    "currency": "NGN",
    "split_config": "{\"subaccount\":\"ACCT_f651f39t7x9a9c6\"}",
    "active": true,
    "assigned": true
  }
}
```

## Requery Dedicated Account

Requery Dedicated Virtual Account for new transactions

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `account_number` (`String`): Virtual account number to requery
- `provider_slug` (`String`): The bank's slug in lowercase, without spaces e.g. wema-bank
- `date` (`String`, optional): The day the transfer was made in YYYY-MM-DD format

**Endpoint:** `GET /dedicated_account/requery/:account_number`

### cURL

```sh
#!/bin/sh
accountNumber="1234567890"
providerSlug="example-provider"

date="2023-05-30"

url="https://api.paystack.co/dedicated_account/requery?account_number=$accountNumber&provider_slug=$providerSlug&date=$date"

authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

curl "$url" -H "$authorization" -H "$content_type" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "We are checking the status of your transfer. We will send you a notification once it is confirmed"
}
```

## Deactivate Dedicated Account

Deactivate a dedicated virtual account on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `dedicated_account_id` (`Integer`): ID of dedicated virtual account

## DEL

/dedicated_account/:dedicated_account_id

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dedicated_account/:dedicated_account_id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X DELETE
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Managed Account Successfully Unassigned",
  "data": {
    "bank": {
      "name": "Wema Bank",
      "id": 20,
      "slug": "wema-bank"
    },
    "account_name": "KAROKART/A YINKA",
    "account_number": "9930020212",
    "assigned": false,
    "currency": "NGN",
    "metadata": null,
    "active": true,
    "id": 173,
    "created_at": "2019-12-09T13:31:38.000Z",
    "updated_at": "2020-08-28T10:04:25.000Z",
    "assignment": {
      "assignee_id": 1530104,
      "assignee_type": "Integration",
      "assigned_at": "2019-12-09T13:40:21.000Z",
      "integration": 100043,
      "account_type": "PAY-WITH-TRANSFER-RECURRING"
    }
  }
}
```

## Split Dedicated Account Transaction

Split a dedicated virtual account transaction with one or more accounts

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `customer` (`String`): Customer ID or code
- `subaccount` (`String`, optional): Subaccount code of the account you want to split the transaction with
- `split_code` (`String`, optional): Split code consisting of the lists of accounts you want to split the transaction with
- `preferred_bank` (`String`, optional): The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint

**Endpoint:** `POST /dedicated_account/split`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dedicated_account"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{ "customer": 481193,

"preferred_bank":"wema-bank",

"split_code": "SPL_e7jnRLtzla"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Assigned Managed Account Successfully Created",
  "data": {
    "bank": {
      "name": "Wema Bank",
      "id": 20,
      "slug": "wema-bank"
    },
    "account_name": "KAROKART/YINKA ADE",
    "account_number": "6731105168",
    "assigned": true,
    "currency": "NGN",
    "metadata": null,
    "active": true,
    "id": 97,
    "created_at": "2019-11-13T13:52:39.000Z",
    "updated_at": "2020-03-17T07:52:23.000Z",
    "assignment": {
      "integration": 100043,
      "assignee_id": 17328,
      "assignee_type": "Customer",
      "expired": false,
      "account_type": "PAY-WITH-TRANSFER-RECURRING",
      "assigned_at": "2020-03-17T07:52:23.023Z",
      "expired_at": null
    },
    "split_config": {
      "split_code": "SPL_e7jnRLtzla"
    },
    "customer": {
      "id": 17328,
      "first_name": "YINKA",
      "last_name": "ADE",
      "email": "yinka@testemail.com",
      "customer_code": "CUS_xxxxxxxx",
      "phone": null,
      "metadata": null,
      "risk_action": "default"
    }
  }
}
```

Remove Split from Dedicated Account

If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `account_number` (`String`): Dedicated virtual account number

## DEL

/dedicated_account/split

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dedicated_account/split"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"account_number": "0033322211"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X DELETE
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": "success",
  "message": "Subaccount unassigned",
  "data": {
    "id": 22173,
    "split_config": {},
    "account_name": "KAROKART/YINKA ADE",
    "account_number": "0033322211",
    "currency": "NGN",
    "assigned": true,
    "active": true,
    "createdAt": "2020-03-11T15:14:00.707Z",
    "updatedAt": "2020-03-11T15:14:00.707Z"
  }
}
```

## Fetch Bank Providers

Get available bank providers for a dedicated virtual account

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

**Endpoint:** `GET /dedicated_account/available_providers`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/dedicated_account/available_providers"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Dedicated account providers retrieved",
  "data": [
    {
      "provider_slug": "access-bank",
      "bank_id": 1,
      "bank_name": "Access Bank",
      "id": 6
    },
    {
      "provider_slug": "wema-bank",
      "bank_id": 20,
      "bank_name": "Wema Bank",
      "id": 5
    }
  ]
}
```
