# Card Preauthorization

The Preauthorization API enables South African merchants to hold an amount from a customer's account, and charge it later.

## Initialize Preauthorization

Initialize a preauthorization transaction for a new customer

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `amount` (`String`): Amount should be in the subunit of the supported currency
- `email` (`String`): Customer's email address
- `currency` (`String`): Only ZAR is supported for now
- `reference` (`String`, optional): Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
- `callback_url` (`String`, optional): Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction
- `metadata` (`String`, optional): Stringified JSON object of custom data. Kindly check the Metadata page for more information.
- `split_code` (`String`, optional): The split code of the transaction split. e.g. SPL_98WF13Eb3w
- `subaccount` (`String`, optional): The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj
- `transaction_charge` (`Integer`, optional): An amount used to override the split configuration for a single split payment. If set, the amount specified goes to the main account regardless of the split configuration.
- `bearer` (`String`, optional): Specifies who will pay the Paystack transaction charges for this transaction. Either account or subaccount (defaults to account).
- `expire_action` (`String`, optional): Specify the action to take on the expiry date. It’s either capture or release. Defaults to release.
- `expire_after_days` (`Integer`, optional): The number of days until the expire_action is executed. The minimum is 1 day and maximum 30 days. Defaults to 5 days.

**Endpoint:** `POST /preauthorization/initialize`

### cURL

```sh
curl https://api.paystack.co/preauthorization/initialize

-H "Authorization: Bearer YOUR_SECRET_KEY"

-H "Content-Type: application/json"

-d '{ "email": "customer@email.com",

"amount": "500000",

"currency": "ZAR"

}'

-X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Authorization URL created",
  "data": {
    "authorization_url": "https://checkout.paystack.com/preauthorization/NDEyOTIyOmxpdmU6ZWloZ2VodTNyczZjanJj",
    "access_code": "NDEyOTIyOmxpdmU6ZWloZ2VodTNyczZjanJj",
    "reference": "eihgehu3rs6cjrc"
  }
}
```

## Capture Preauthorization

Charge a preauthorized transaction upon service delivery

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `reference` (`String`): Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
- `currency` (`String`): Only ZAR is supported for now
- `amount` (`String`): Amount should be in the subunit of the supported currency

**Endpoint:** `POST /preauthorization/capture`

### cURL

```sh
curl https://api.paystack.co/preauthorization/capture

-H "Authorization: Bearer YOUR_SECRET_KEY"

-H "Content-Type: application/json"

-d '{ "reference": "123-abc",

"currency": "ZAR",

"amount": "1000"

}'

-X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Capture attempted",
  "data": {
    "amount": 1000,
    "currency": "ZAR",
    "transaction_date": "2023-08-24T11:38:32.000Z",
    "status": "success",
    "reference": "123-abc",
    "domain": "live",
    "metadata": {
      "custom_fields": [
        {
          "display_name": "Cart Number",
          "variable_name": "cart_number",
          "value": "123443"
        }
      ]
    },
    "gateway_response": "Approved",
    "message": null,
    "channel": "preauth",
    "ip_address": null,
    "log": null,
    "fees": 373,
    "authorization": {
      "authorization_code": "AUTH_5h7ifp9x1h",
      "bin": "541333",
      "last4": "0028",
      "exp_month": "12",
      "exp_year": "2025",
      "channel": "card",
      "card_type": "mastercard ",
      "bank": "Absa Bank Limited, South Africa ",
      "country_code": "ZA",
      "brand": "mastercard",
      "reusable": true,
      "signature": "SIG_6bCAS8p20rANfmuYgQ2i",
      "account_name": null
    },
    "customer": {
      "id": 180063193,
      "first_name": null,
      "last_name": null,
      "email": "customer@email.com",
      "customer_code": "CUS_zi5os4fs31qxao0",
      "phone": null,
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "plan": null,
    "id": 1504173002
  }
}
```

## Reserve Preauthorization

Hold an amount using an existing customer's authorization that's marked reusable.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `email` (`String`): Customer's email address
- `amount` (`String`): Amount should be in the subunit of the supported currency
- `authorization_code` (`String`): This is the code that is used to charge and identify a customer's previously used card
- `currency` (`String`): Only ZAR is supported for now
- `reference` (`String`, optional): Unique transaction reference. Only -, ., = and alphanumeric characters allowed.

**Endpoint:** `POST /preauthorization/reserve_authorization`

### cURL

```sh
curl https://api.paystack.co/preauthorization/reserve_authorization

-H "Authorization: Bearer YOUR_SECRET_KEY"

-H "Content-Type: application/json"

-d '{

"email" : "test@paystack.com",

"currency": "ZAR",

"amount": 1000,

"authorization_code": "AUTH_dalhwqi5vw",

}'

-X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Preauthorization successful",
  "data": {
    "id": 523,
    "domain": "live",
    "status": "authorized",
    "reference": "pre_p0xpfge2",
    "amount": 1600,
    "gateway_response": {
      "authorizeResponse": "Approved",
      "rrn": "KdeasineK"
    },
    "created_at": "2023-08-24T19:00:18.000Z",
    "released_at": null,
    "expiry_date": "2023-08-25T19:00:26.000Z",
    "currency": "ZAR",
    "metadata": null,
    "fees": 0,
    "authorization": {
      "authorization_code": "AUTH_dalhwqi5vw",
      "bin": "492312",
      "last4": "5652",
      "exp_month": "08",
      "exp_year": "2024",
      "channel": "card",
      "card_type": "visa credit",
      "bank": "NEDBANK",
      "country_code": "ZA",
      "brand": "visa",
      "reusable": true,
      "signature": "SIG_BAJR7TwTw5TwKOYCro5c",
      "account_name": null
    },
    "customer": {
      "id": 180063193,
      "first_name": null,
      "last_name": null,
      "email": "test@paystack.com",
      "customer_code": "CUS_zi5os4fs31qxao0",
      "phone": null,
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "merchant_id": 210002,
    "merchant_name": "ABC merchant",
    "expire_action": "release",
    "split_code": null,
    "split": null
  }
}
```

## Verify preauthorization

Fetch and confirm the status of a preauthorized transaction.

### Transaction ID data type

If you plan to store or make use of the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `reference` (`String`): The transaction reference used to intiate the transaction

**Endpoint:** `GET /preauthorization/verify/:reference`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/preauthorization/:reference"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 OK

```json
{
  "status": true,
  "message": "Preauthorization retrieved",
  "data": {
    "id": 523,
    "domain": "live",
    "status": "captured",
    "reference": "pre_p0xpfge2",
    "amount": 1600,
    "created_at": "2023-08-24T19:00:18.000Z",
    "released_at": null,
    "expiry_date": "2023-08-25T19:00:26.000Z",
    "currency": "ZAR",
    "metadata": null,
    "fees": 100,
    "authorization": {
      "authorization_code": "AUTH_dalhwqi5vw",
      "bin": "492312",
      "last4": "5652",
      "exp_month": "08",
      "exp_year": "2024",
      "channel": "card",
      "card_type": "visa credit",
      "bank": "NEDBANK",
      "country_code": "ZA",
      "brand": "visa",
      "reusable": true,
      "signature": "SIG_BAJR7TwTw5TwKOYCro5c",
      "account_name": null
    },
    "customer": {
      "id": 180063193,
      "first_name": null,
      "last_name": null,
      "email": "test@paystack.com",
      "customer_code": "CUS_zi5os4fs31qxao0",
      "phone": null,
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "merchant_id": 210002,
    "merchant_name": "ABC merchant",
    "expire_action": "release",
    "captured_at": "2023-08-28T10:53:31.000Z",
    "split_code": null,
    "split": null
  }
}
```

## Release Preauthorization

For when a customer cancels an order or you want to release the hold from their card.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `reference` (`String`): Unique transaction reference. Only -, ., = and alphanumeric characters allowed.

**Endpoint:** `POST /preauthorization/release`

### cURL

```sh
curl https://api.paystack.co/preauthorization/release

-H "Authorization: Bearer YOUR_SECRET_KEY"

-H "Content-Type: application/json"

-d '{

"reference": "123-abc"

}'

-X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Successfully released",
  "data": {
    "status": "released",
    "reference": "123-abc"
  }
}
```

## List preauthorization

List preauthorizations carried out on your integration

### Transaction ID data type

If you plan to store or make use of the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more, check out our changelog.

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
- `page` (`Integer`): Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
- `customer` (`Integer`, optional): The unique customer ID to retrieve transactions belonging to that customer
- `status` (`String`, optional): Filter transactions by status. Either authorized, captured, released, ongoing, failed, abandoned
- `from` (`Datetime`, optional): A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `amount` (`Integer`, optional): Filter transactions by amount using the supported currency code

**Endpoint:** `GET /transaction`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/preauthorization"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 OK

```json
{
  "status": true,
  "message": "Preauthorizations retrieved",
  "data": [
    {
      "domain": "test",
      "status": "failed",
      "reference": "ctbaq5z6fkzsk2f",
      "amount": 1200,
      "created_at": "2023-08-21T06:30:31.000Z",
      "transaction_id": null,
      "captured_at": null,
      "released_at": null,
      "currency": "ZAR",
      "fees": 0,
      "customer": {
        "id": 180063193,
        "first_name": null,
        "last_name": null,
        "email": "test@example.com",
        "customer_code": "CUS_zi5os4fs31qxao0",
        "phone": null,
        "metadata": null,
        "risk_action": "default",
        "international_format_phone": null
      },
      "id": 10321309
    },
    {
      "domain": "test",
      "status": "captured",
      "reference": "adoiasdiruvme",
      "amount": 500,
      "created_at": "2025-01-08T10:51:24.000Z",
      "transaction_id": 4563444462,
      "captured_at": "2025-01-08T10:53:31.000Z",
      "released_at": null,
      "currency": "ZAR",
      "fees": 115,
      "customer": {
        "id": 226230427,
        "first_name": null,
        "last_name": null,
        "email": "chonky@example.com",
        "customer_code": "CUS_6bklfq9zapdbdpp",
        "phone": null,
        "metadata": null,
        "risk_action": "default",
        "international_format_phone": null
      },
      "id": 153028
    },
    {
      "domain": "test",
      "status": "released",
      "reference": "abcoeii-123adoi",
      "amount": 8888,
      "created_at": "2025-01-08T12:48:02.000Z",
      "transaction_id": null,
      "captured_at": null,
      "released_at": "2025-01-08T13:21:35.000Z",
      "currency": "ZAR",
      "fees": 115,
      "customer": {
        "id": 226271601,
        "first_name": null,
        "last_name": null,
        "email": "test@example.com",
        "customer_code": "CUS_l3hkvdfhxaxdad",
        "phone": null,
        "metadata": null,
        "risk_action": "default",
        "international_format_phone": null
      },
      "id": 53041032
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
