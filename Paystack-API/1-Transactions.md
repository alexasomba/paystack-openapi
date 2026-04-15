# Transactions

The Transactions API allows you create and manage payments on your integration.

## Initialize Transaction

Initialize a transaction from your backend

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `amount` (`String`): Amount should be in the subunit of the supported currency
- `email` (`String`): Customer's email address
- `channels` (`Array`, optional): An array of payment channels to control what channels you want to make available to the user on the Checkout. Available channels include: ["card", "bank", "apple_pay", "ussd", "qr", "mobile_money", "bank_transfer", "eft", "capitec_pay", "payattitude"]
- `currency` (`String`, optional): The transaction currency. Defaults to your integration currency.
- `reference` (`String`, optional): Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
- `callback_url` (`String`, optional): Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction
- `plan` (`String`, optional): If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in amount
- `invoice_limit` (`Integer`, optional): Number of times to charge customer during subscription to plan
- `metadata` (`String`, optional): Stringified JSON object of custom data. Kindly check the Metadata page for more information.
- `split_code` (`String`, optional): The split code of the transaction split. e.g. SPL_98WF13Eb3w
- `subaccount` (`String`, optional): The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj
- `transaction_charge` (`Integer`, optional): An amount used to override the split configuration for a single split payment. If set, the amount specified goes to the main account regardless of the split configuration.
- `bearer` (`String`, optional): Use this param to indicate who bears the transaction charges. Allowed values are: account or subaccount (defaults to account).

**Endpoint:** `POST /transaction/initialize`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction/initialize"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"email": "customer@email.com",

"amount": "20000"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Authorization URL created",
  "data": {
    "authorization_url": "https://checkout.paystack.com/3ni8kdavz62431k",
    "access_code": "3ni8kdavz62431k",
    "reference": "re4lyvq3s3"
  }
}
```

## Verify Transaction

Confirm the status of a transaction

### Transaction ID data type

If you plan to store or make use of the the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `reference` (`String`): The transaction reference used to intiate the transaction

**Endpoint:** `GET /transaction/verify/:reference`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction/verify/{reference}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Verification successful",
  "data": {
    "id": 4099260516,
    "domain": "test",
    "status": "success",
    "reference": "re4lyvq3s3",
    "receipt_number": null,
    "amount": 40333,
    "message": null,
    "gateway_response": "Successful",
    "paid_at": "2024-08-22T09:15:02.000Z",
    "created_at": "2024-08-22T09:14:24.000Z",
    "channel": "card",
    "currency": "NGN",
    "ip_address": "197.210.54.33",
    "metadata": "",
    "log": {
      "start_time": 1724318098,
      "time_spent": 4,
      "attempts": 1,
      "errors": 0,
      "success": true,
      "mobile": false,
      "input": [],
      "history": [
        {
          "type": "action",
          "message": "Attempted to pay with card",
          "time": 3
        },
        {
          "type": "success",
          "message": "Successfully paid with card",
          "time": 4
        }
      ]
    },
    "fees": 10283,
    "fees_split": null,
    "authorization": {
      "authorization_code": "AUTH_uh8bcl3zbn",
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
    },
    "customer": {
      "id": 181873746,
      "first_name": null,
      "last_name": null,
      "email": "demo@test.com",
      "customer_code": "CUS_1rkzaqsv4rrhqo6",
      "phone": null,
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "plan": null,
    "split": {},
    "order_id": null,
    "paidAt": "2024-08-22T09:15:02.000Z",
    "createdAt": "2024-08-22T09:14:24.000Z",
    "requested_amount": 30050,
    "pos_transaction_data": null,
    "source": null,
    "fees_breakdown": null,
    "connect": null,
    "transaction_date": "2024-08-22T09:14:24.000Z",
    "plan_object": {},
    "subaccount": {}
  }
}
```

## List Transactions

List transactions carried out on your integration

### Transaction ID data type

If you plan to store or make use of the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `customer` (`Integer`, optional): Specify an ID for the customer whose transactions you want to retrieve
- `terminalid` (`String`, optional): The Terminal ID for the transactions you want to retrieve
- `status` (`String`, optional): Filter transactions by status ('failed', 'success', 'abandoned')
- `from` (`Datetime`, optional): A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `amount` (`Integer`, optional): Filter transactions by amount using the supported currency code

**Endpoint:** `GET /transaction`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transactions retrieved",
  "data": [
    {
      "id": 4099260516,
      "domain": "test",
      "status": "success",
      "reference": "re4lyvq3s3",
      "amount": 40333,
      "message": null,
      "gateway_response": "Successful",
      "paid_at": "2024-08-22T09:15:02.000Z",
      "created_at": "2024-08-22T09:14:24.000Z",
      "channel": "card",
      "currency": "NGN",
      "ip_address": "197.210.54.33",
      "metadata": null,
      "log": {
        "start_time": 1724318098,
        "time_spent": 4,
        "attempts": 1,
        "errors": 0,
        "success": true,
        "mobile": false,
        "input": [],
        "history": [
          {
            "type": "action",
            "message": "Attempted to pay with card",
            "time": 3
          },
          {
            "type": "success",
            "message": "Successfully paid with card",
            "time": 4
          }
        ]
      },
      "fees": 10283,
      "fees_split": null,
      "customer": {
        "id": 181873746,
        "first_name": null,
        "last_name": null,
        "email": "demo@test.com",
        "phone": null,
        "metadata": {
          "custom_fields": [
            {
              "display_name": "Customer email",
              "variable_name": "customer_email",
              "value": "new@email.com"
            }
          ]
        },
        "customer_code": "CUS_1rkzaqsv4rrhqo6",
        "risk_action": "default"
      },
      "authorization": {
        "authorization_code": "AUTH_uh8bcl3zbn",
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
      },
      "plan": {},
      "split": {},
      "subaccount": {},
      "order_id": null,
      "paidAt": "2024-08-22T09:15:02.000Z",
      "createdAt": "2024-08-22T09:14:24.000Z",
      "requested_amount": 30050,
      "source": {
        "source": "merchant_api",
        "type": "api",
        "identifier": null,
        "entry_point": "transaction_initialize"
      },
      "connect": null,
      "pos_transaction_data": null
    }
  ],
  "meta": {
    "next": "dW5kZWZpbmVkOjQwMTM3MDk2MzU=",
    "previous": null,
    "perPage": 50
  }
}
```

## Fetch Transaction

Get details of a transaction carried out on your integration

### Transaction ID data type

If you plan to store or make use of the the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`Integer`): An ID for the transaction to fetch

**Endpoint:** `GET /transaction/:id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction/{id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transaction retrieved",
  "data": {
    "id": 4099260516,
    "domain": "test",
    "status": "success",
    "reference": "re4lyvq3s3",
    "receipt_number": null,
    "amount": 40333,
    "message": null,
    "gateway_response": "Successful",
    "helpdesk_link": null,
    "paid_at": "2024-08-22T09:15:02.000Z",
    "created_at": "2024-08-22T09:14:24.000Z",
    "channel": "card",
    "currency": "NGN",
    "ip_address": "197.210.54.33",
    "metadata": "",
    "log": {
      "start_time": 1724318098,
      "time_spent": 4,
      "attempts": 1,
      "errors": 0,
      "success": true,
      "mobile": false,
      "input": [],
      "history": [
        {
          "type": "action",
          "message": "Attempted to pay with card",
          "time": 3
        },
        {
          "type": "success",
          "message": "Successfully paid with card",
          "time": 4
        }
      ]
    },
    "fees": 10283,
    "fees_split": null,
    "authorization": {
      "authorization_code": "AUTH_uh8bcl3zbn",
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
    },
    "customer": {
      "id": 181873746,
      "first_name": null,
      "last_name": null,
      "email": "demo@test.com",
      "customer_code": "CUS_1rkzaqsv4rrhqo6",
      "phone": null,
      "metadata": {
        "custom_fields": [
          {
            "display_name": "Customer email",
            "variable_name": "customer_email",
            "value": "new@email.com"
          }
        ]
      },
      "risk_action": "default",
      "international_format_phone": null
    },
    "plan": {},
    "subaccount": {},
    "split": {},
    "order_id": null,
    "paidAt": "2024-08-22T09:15:02.000Z",
    "createdAt": "2024-08-22T09:14:24.000Z",
    "requested_amount": 30050,
    "pos_transaction_data": null,
    "source": {
      "type": "api",
      "source": "merchant_api",
      "identifier": null
    },
    "fees_breakdown": null,
    "connect": null
  }
}
```

## Charge Authorization

All authorizations marked as reusable can be charged with this endpoint whenever you need to receive payments

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `amount` (`String`): Amount should be in the subunit of the supported currency
- `email` (`String`): Customer's email address
- `authorization_code` (`String`): Valid authorization code to charge
- `reference` (`String`, optional): Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
- `currency` (`String`, optional): Currency in which amount should be charged.
- `metadata` (`String`, optional): Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]}
- `channels` (`Array`, optional): Send us 'card' or 'bank' or 'card','bank' as an array to specify what options to show the user paying
- `subaccount` (`String`, optional): The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj
- `transaction_charge` (`Integer`, optional): A flat fee to charge the subaccount for this transaction in the subunit of the supported currency. This overrides the split percentage set when the subaccount was created. Ideally, you will need to use this if you are splitting in flat rates (since subaccount creation only allows for percentage split).
- `bearer` (`String`, optional): Who bears Paystack charges? account or subaccount (defaults to account).
- `queue` (`Boolean`, optional): If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. Send queue:true to take advantage of our queued charging.

**Endpoint:** `POST /transaction/charge_authorization`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction/charge_authorization"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"email": "customer@email.com",

"amount": "20000",

"authorization_code": "AUTH_72btv547"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Charge attempted",
  "data": {
    "amount": 35247,
    "currency": "NGN",
    "transaction_date": "2024-08-22T10:53:49.000Z",
    "status": "success",
    "reference": "0m7frfnr47ezyxl",
    "domain": "test",
    "metadata": "",
    "gateway_response": "Approved",
    "message": null,
    "channel": "card",
    "ip_address": null,
    "log": null,
    "fees": 10247,
    "authorization": {
      "authorization_code": "AUTH_uh8bcl3zbn",
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
    },
    "customer": {
      "id": 181873746,
      "first_name": null,
      "last_name": null,
      "email": "demo@test.com",
      "customer_code": "CUS_1rkzaqsv4rrhqo6",
      "phone": null,
      "metadata": {
        "custom_fields": [
          {
            "display_name": "Customer email",
            "variable_name": "customer_email",
            "value": "new@email.com"
          }
        ]
      },
      "risk_action": "default",
      "international_format_phone": null
    },
    "plan": null,
    "id": 4099490251
  }
}
```

## View Transaction Timeline

View the timeline of a transaction

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id_or_reference` (`String`): The ID or the reference of the transaction

**Endpoint:** `GET /transaction/timeline/:id_or_reference`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction/timeline/{id_or_reference}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Timeline retrieved",
  "data": {
    "start_time": 1724318098,
    "time_spent": 4,
    "attempts": 1,
    "errors": 0,
    "success": true,
    "mobile": false,
    "input": [],
    "history": [
      {
        "type": "action",
        "message": "Attempted to pay with card",
        "time": 3
      },
      {
        "type": "success",
        "message": "Successfully paid with card",
        "time": 4
      }
    ]
  }
}
```

## Transaction Totals

Total amount received on your account

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /transaction/totals`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction/totals"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Transaction totals",
  "data": {
    "total_transactions": 42670,
    "total_volume": 6617829946,
    "total_volume_by_currency": [
      {
        "currency": "NGN",
        "amount": 6617829946
      },
      {
        "currency": "USD",
        "amount": 28000
      }
    ],
    "pending_transfers": 6617829946,
    "pending_transfers_by_currency": [
      {
        "currency": "NGN",
        "amount": 6617829946
      },
      {
        "currency": "USD",
        "amount": 28000
      }
    ]
  }
}
```

## Export Transaction

Export a list of transactions carried out on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `customer` (`Integer`, optional): Specify an ID for the customer whose transactions you want to retrieve
- `status` (`String`, optional): Filter transactions by status ('failed', 'success', 'abandoned')
- `currency` (`String`, optional): Specify the transaction currency to export
- `amount` (`Integer`, optional): Filter transactions by amount, using the supported currency
- `settled` (`Boolean`, optional): Set to true to export only settled transactions. false for pending transactions. Leave undefined to export all transactions
- `settlement` (`Integer`, optional): An ID for the settlement whose transactions we should export
- `payment_page` (`Integer`, optional): Specify a payment page's id to export only transactions conducted on said page

**Endpoint:** `GET /transaction/export`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction/export"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Export successful",
  "data": {
    "path": "https://s3.eu-west-1.amazonaws.com/files.paystack.co/exports/463433/transactions/Integration_name_transactions_1724324423843.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI7CL5IZL2DJHOPPA%2F20240822%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240822T110023Z&X-Amz-Expires=60&X-Amz-Signature=40525f4f361e07c09a445a1a6888d135758abd507ed988ee744c2d94ea14cf1e&X-Amz-SignedHeaders=host",
    "expiresAt": "2024-08-22 11:01:23"
  }
}
```

## Partial Debit

Retrieve part of a payment from a customer

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `authorization_code` (`String`): Authorization Code
- `currency` (`String`): Specify the currency you want to debit. Allowed values are NGN or GHS.
- `amount` (`String`): Amount should be in the subunit of the supported currency
- `email` (`String`): Customer's email address (attached to the authorization code)
- `reference` (`String`, optional): Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
- `at_least` (`String`, optional): Minimum amount to charge

**Endpoint:** `POST /transaction/partial_debit`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/transaction/partial_debit"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"authorization_code": "AUTH_72btv547",

"currency": "NGN",

"amount": "20000",

"email": "customer@email.com"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Charge attempted",
  "data": {
    "amount": 50000,
    "currency": "NGN",
    "transaction_date": "2024-08-22T11:13:48.000Z",
    "status": "success",
    "reference": "ofuhmnzw05vny9j",
    "domain": "test",
    "metadata": "",
    "gateway_response": "Approved",
    "message": null,
    "channel": "card",
    "ip_address": null,
    "log": null,
    "fees": 10350,
    "authorization": {
      "authorization_code": "AUTH_uh8bcl3zbn",
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
    },
    "customer": {
      "id": 181873746,
      "first_name": null,
      "last_name": null,
      "email": "demo@test.com",
      "customer_code": "CUS_1rkzaqsv4rrhqo6",
      "phone": null,
      "metadata": {
        "custom_fields": [
          {
            "display_name": "Customer email",
            "variable_name": "customer_email",
            "value": "new@email.com"
          }
        ]
      },
      "risk_action": "default",
      "international_format_phone": null
    },
    "plan": 0,
    "requested_amount": 50000,
    "id": 4099546180
  }
}
```
