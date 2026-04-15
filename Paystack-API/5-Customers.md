# Customers

The Customers API allows you create and manage customers on your integration.

## Create Customer

Create a customer on your integration

## Customer Validation

The first_name, last_name and phone are optional parameters. However, when creating a customer that would be assigned a Dedicated Virtual Account and your business category falls under Betting, Financial services, and General Service, then these parameters become compulsory.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `email` (`String`): Customer's email address
- `first_name` (`String`): Customer's first name
- `last_name` (`String`): Customer's last name
- `phone` (`String`, optional): Customer's phone number
- `metadata` (`Object`, optional): A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format.

**Endpoint:** `POST /customer`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"email": "customer@example.com",

"first_name": "Zero",

"last_name": "Sum",

"phone": "+2348123456789"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Customer created",
  "data": {
    "email": "customer@email.com",
    "integration": 100032,
    "domain": "test",
    "customer_code": "CUS_xnxdt6s1zg1f4nx",
    "id": 1173,
    "identified": false,
    "identifications": null,
    "createdAt": "2016-03-29T20:03:09.584Z",
    "updatedAt": "2016-03-29T20:03:09.584Z"
  }
}
```

## List Customer

List customers available on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing customers e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing customers e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /customer`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Customers retrieved",
  "data": [
    {
      "integration": 463433,
      "first_name": null,
      "last_name": null,
      "email": "dom@gmail.com",
      "phone": null,
      "metadata": null,
      "domain": "test",
      "customer_code": "CUS_c6wqvwmvwopw4ms",
      "risk_action": "default",
      "id": 90758908,
      "createdAt": "2022-08-15T13:46:39.000Z",
      "updatedAt": "2022-08-15T13:46:39.000Z"
    },
    {
      "integration": 463433,
      "first_name": "Okiki",
      "last_name": "Sample",
      "email": "okiki@sample.com",
      "phone": "09048829123",
      "metadata": {},
      "domain": "test",
      "customer_code": "CUS_rki2ccocw7g8lsj",
      "risk_action": "default",
      "id": 90758301,
      "createdAt": "2022-08-15T13:42:52.000Z",
      "updatedAt": "2022-08-15T13:42:52.000Z"
    },
    {
      "integration": 463433,
      "first_name": "lukman",
      "last_name": "calle",
      "email": "lukman@calle.co",
      "phone": "08922383034",
      "metadata": {},
      "domain": "test",
      "customer_code": "CUS_hpxsz8c1if90quo",
      "risk_action": "default",
      "id": 90747194,
      "createdAt": "2022-08-15T12:31:13.000Z",
      "updatedAt": "2022-08-15T12:31:13.000Z"
    }
  ],
  "meta": {
    "next": "Y3VzdG9tZXI6OTAyMjU4MDk=",
    "previous": null,
    "perPage": 3
  }
}
```

## Fetch Customer

Get details of a customer on your integration.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `email_or_code` (`String`): An email or customer code for the customer you want to fetch

**Endpoint:** `GET /customer/:email_or_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/{email_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Customer retrieved",
  "data": {
    "transactions": [],
    "subscriptions": [],
    "authorizations": [
      {
        "authorization_code": "AUTH_ekk8t49ogj",
        "bin": "408408",
        "last4": "4081",
        "exp_month": "12",
        "exp_year": "2030",
        "channel": "card",
        "card_type": "visa ",
        "bank": "TEST BANK",
        "country_code": "NG",
        "brand": "visa",
        "reusable": true,
        "signature": "SIG_yEXu7dLBeqG0kU7g95Ke",
        "account_name": null
      }
    ],
    "first_name": null,
    "last_name": null,
    "email": "dom@gmail.com",
    "phone": null,
    "metadata": null,
    "domain": "test",
    "customer_code": "CUS_c6wqvwmvwopw4ms",
    "risk_action": "default",
    "id": 90758908,
    "integration": 463433,
    "createdAt": "2022-08-15T13:46:39.000Z",
    "updatedAt": "2022-08-15T13:46:39.000Z",
    "created_at": "2022-08-15T13:46:39.000Z",
    "updated_at": "2022-08-15T13:46:39.000Z",
    "total_transactions": 0,
    "total_transaction_value": [],
    "dedicated_account": null,
    "identified": false,
    "identifications": null
  }
}
```

## Update Customer

Update a customer's details on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `code` (`String`): Customer's code

### Body Parameters

- `first_name` (`String`): Customer's first name
- `last_name` (`String`): Customer's last name
- `phone` (`String`, optional): Customer's phone number
- `metadata` (`Object`, optional): A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format.

**Endpoint:** `PUT /customer/:code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/{code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"first_name": "BoJack"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Customer updated",
  "data": {
    "integration": 100032,
    "first_name": "BoJack",
    "last_name": "Horseman",
    "email": "bojack@horsinaround.com",
    "phone": null,
    "metadata": {
      "photos": [
        {
          "type": "twitter",
          "typeId": "twitter",
          "typeName": "Twitter",
          "url": "https://d2ojpxxtu63wzl.cloudfront.net/static/61b1a0a1d4dda2c9fe9e165fed07f812_a722ae7148870cc2e33465d1807dfdc6efca33ad2c4e1f8943a79eead3c21311",
          "isPrimary": true
        }
      ]
    },
    "identified": false,
    "identifications": null,
    "domain": "test",
    "customer_code": "CUS_xnxdt6s1zg1f4nx",
    "id": 1173,
    "transactions": [],
    "subscriptions": [],
    "authorizations": [],
    "createdAt": "2016-03-29T20:03:09.000Z",
    "updatedAt": "2016-03-29T20:03:10.000Z"
  }
}
```

## Validate Customer

## Validate a customer's identity

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `code` (`String`): Email, or customer code of customer to be identified

### Body Parameters

- `first_name` (`String`): Customer's first name
- `last_name` (`String`): Customer's last name
- `type` (`String`): Predefined types of identification. Only bank_account is supported at the moment
- `value` (`String`): Customer's identification number
- `country` (`String`): 2 letter country code of identification issuer
- `bvn` (`String`): Customer's Bank Verification Number
- `bank_code` (`String`): You can get the list of Bank Codes by calling the List Banks endpoint. (required if type is bank_account)
- `account_number` (`String`): Customer's bank account number. (required if type is bank_account)
- `middle_name` (`String`, optional): Customer's middle name

**Endpoint:** `POST /customer/:code/identification`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/{customer_code}/identification"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"country": "NG",

"type": "bank_account",

"account_number": "0123456789",

"bvn": "20012345677",

"bank_code": "007",

"first_name": "Asta",

"last_name": "Lavista"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 202 Accepted

```json
{
  "status": true,
  "message": "Customer Identification in progress"
}
```

## Whitelist/Blacklist Customer

Whitelist or blacklist a customer on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `customer` (`String`): Customer's code, or email address
- `risk_action` (`String`, optional): One of the possible risk actions [ default, allow, deny ]. allow to whitelist. deny to blacklist. Customers start with a default risk action.

**Endpoint:** `POST /customer/set_risk_action`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/set_risk_action"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"customer": "CUS_xr58yrr2ujlft9k",

"risk_action": "allow"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Customer updated",
  "data": {
    "first_name": "Peter",
    "last_name": "Griffin",
    "email": "peter@grif.com",
    "phone": null,
    "metadata": {},
    "domain": "test",
    "identified": false,
    "identifications": null,
    "customer_code": "CUS_xr58yrr2ujlft9k",
    "risk_action": "allow",
    "id": 2109,
    "integration": 100032,
    "createdAt": "2016-01-26T13:43:38.000Z",
    "updatedAt": "2016-08-23T03:56:43.000Z"
  }
}
```

## Initialize Authorization

Initiate a request to create a reusable authorization code for recurring transactions.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

email
string
Customer's email address

channel
string
direct-debit is the only supported option for now

callback_url
string
Fully qualified url (e.g. https://example.com/) to redirect your customer to.

- `account` (`object`, optional): Holds the customer's account details.

### Show parameters

address
object
Represents the customer's address.

### Show parameters

**Endpoint:** `POST /customer/authorization/initialize`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/authorization/initialize"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"email": "ravi@demo.com",

"channel": "direct_debit",

"callback_url": "http://test.url.com"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Authorization initialized",
  "data": {
    "redirect_url": "https://checkout.paystack.com/82t4mp5b5mfn51h",
    "access_code": "82t4mp5b5mfn51h",
    "reference": "dfbzfotsrbv4n5s82t4mp5b5mfn51h"
  }
}
```

## Verify Authorization

Check the status of an authorization request.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `reference` (`String`): The reference returned in the initialization response

**Endpoint:** `GET /customer/authorization/verify/:reference`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/authorization/verify/{reference}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Authorization retrieved successfully",
  "data": {
    "authorization_code": "AUTH_JV4T9Wawdj",
    "channel": "direct_debit",
    "bank": "Guaranty Trust Bank",
    "active": true,
    "customer": {
      "code": "CUS_24lze1c8i2zl76y",
      "email": "ravi@demo.com"
    }
  }
}
```

## Initialize Direct Debit

Initialize the process of linking an account to a customer for Direct Debit transactions.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `account` (`object`): An object that contains the customer’s account details

### Show parameters

address
object
An object that contains the customer’s address information

### Show parameters

**Endpoint:** `POST /customer/:id/initialize-direct-debit`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/{id}/initialize-direct-debit"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"account": {

"number": "0123456789",

"bank_code": "058"

},

"address": {

"street": "Some Where",

"city": "Ikeja",

"state": "Lagos"

}

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Authorization initialized",
  "data": {
    "redirect_url": "https://link.paystack.com/ll6b0szngj1f27k",
    "access_code": "ll6b0szngj1f27k",
    "reference": "1er945lpy4txyki"
  }
}
```

## Direct Debit Activation Charge

Trigger an activation charge on an inactive mandate on behalf of your customer.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

id
integer
The customer ID attached to the authorization

### Body Parameters

authorization_id
integer
The authorization ID gotten from the initiation response

**Endpoint:** `PUT /customer/:id/directdebit-activation-charge`

### cURL

```sh
#!/bin/sh
curl https://api.paystack.co/customer/{id}/directdebit-activation-charge
-H "Authorization: Bearer YOUR_SECRET_KEY"

-H "Content-Type: application/json"

-d '{

"authorization_id" : 1069309917

}'

-X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Mandate is queued for retry"
}
```

## Fetch Mandate Authorizations

Get the list of direct debit mandates associated with a customer.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`String`): The customer ID for the authorizations to fetch

**Endpoint:** `GET /customer/:id/directdebit-mandate-authorizations`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/{id}/directdebit-mandate-authorizations"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Mandate authorizations retrieved successfully",
  "data": [
    {
      "id": 164098,
      "status": "active",
      "mandate_id": 512003,
      "authorization_id": 110049014,
      "authorization_code": "AUTH_8Lol0pNt14",
      "integration_id": 463433,
      "account_number": "0123456789",
      "bank_code": "032",
      "bank_name": null,
      "customer": {
        "id": 43975700,
        "customer_code": "CUS_2eusy8uwe34s23fy",
        "email": "customer@email.com",
        "first_name": "Smith",
        "last_name": "Bel"
      },
      "authorized_at": "2024-09-27T10:57:53.824Z"
    }
  ],
  "meta": {
    "per_page": 50,
    "next": null,
    "count": 1,
    "total": 1
  }
}
```

## Deactivate Authorization

Deactivate an authorization for any payment channel.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `authorization_code` (`String`): Authorization code to be deactivated

**Endpoint:** `POST /customer/authorization/deactivate`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/customer/authorization/deactivate"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"authorization_code": "AUTH_xxxIjkZVj5"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Authorization has been deactivated"
}
```
