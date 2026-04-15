# Settlements

The Settlements API allows you gain insights into payouts made by Paystack to your bank account.

## List Settlements

List settlements made to your settlement accounts

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `status` (`String`, optional): Fetch settlements based on their state. Value can be one of `success`, `processing`, `pending` or `failed`.
- `subaccount` (`String`, optional): Provide a subaccount ID to export only settlements for that subaccount. Set to `none` to export only transactions for the account.
- `from` (`Datetime`, optional): A timestamp from which to start listing settlements e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing settlements e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

**Endpoint:** `GET /settlement`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/settlement"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Settlements retrieved",
  "data": [
    {
      "id": 3090024,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 995,
      "effective_amount": 995,
      "total_fees": 5,
      "total_processed": 1000,
      "deductions": null,
      "settlement_date": "2022-11-09T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2022-11-09T01:04:08.000Z",
      "updatedAt": "2022-11-09T08:12:01.000Z"
    },
    {
      "id": 2856168,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 9610,
      "effective_amount": 9610,
      "total_fees": 390,
      "total_processed": 10000,
      "deductions": null,
      "settlement_date": "2022-09-02T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2022-09-02T01:14:11.000Z",
      "updatedAt": "2022-09-02T04:32:01.000Z"
    },
    {
      "id": 2276794,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 4975,
      "effective_amount": 4975,
      "total_fees": 25,
      "total_processed": 5000,
      "deductions": null,
      "settlement_date": "2022-02-26T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2022-02-26T01:24:27.000Z",
      "updatedAt": "2022-02-28T09:32:00.000Z"
    },
    {
      "id": 2255771,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 38356,
      "effective_amount": 38356,
      "total_fees": 194,
      "total_processed": 38550,
      "deductions": null,
      "settlement_date": "2022-02-19T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2022-02-19T01:23:31.000Z",
      "updatedAt": "2022-02-21T09:32:00.000Z"
    },
    {
      "id": 2246373,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 24875,
      "effective_amount": 24875,
      "total_fees": 125,
      "total_processed": 25000,
      "deductions": null,
      "settlement_date": "2022-02-16T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2022-02-16T01:24:09.000Z",
      "updatedAt": "2022-02-16T09:12:00.000Z"
    },
    {
      "id": 2234251,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 0,
      "effective_amount": 0,
      "total_fees": 1,
      "total_processed": 1,
      "deductions": null,
      "settlement_date": "2022-02-12T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2022-02-12T01:20:50.000Z",
      "updatedAt": "2022-02-14T06:07:07.000Z"
    },
    {
      "id": 2046406,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 15439,
      "effective_amount": 15439,
      "total_fees": 78,
      "total_processed": 15517,
      "deductions": null,
      "settlement_date": "2021-12-07T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2021-12-07T01:25:18.000Z",
      "updatedAt": "2021-12-07T09:42:03.000Z"
    },
    {
      "id": 1986550,
      "domain": "live",
      "status": "pending",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 4975,
      "effective_amount": 4975,
      "total_fees": 25,
      "total_processed": 5000,
      "deductions": null,
      "settlement_date": "2021-11-16T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2021-11-16T01:17:49.000Z",
      "updatedAt": "2021-11-16T01:17:49.000Z"
    },
    {
      "id": 1955844,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 29550,
      "effective_amount": 29550,
      "total_fees": 450,
      "total_processed": 30000,
      "deductions": null,
      "settlement_date": "2021-11-05T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2021-11-05T01:14:28.000Z",
      "updatedAt": "2021-11-09T08:42:09.000Z"
    },
    {
      "id": 1913601,
      "domain": "live",
      "status": "pending",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 9850,
      "effective_amount": 9850,
      "total_fees": 150,
      "total_processed": 10000,
      "deductions": null,
      "settlement_date": "2021-10-21T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2021-10-21T01:05:22.000Z",
      "updatedAt": "2021-10-21T01:05:22.000Z"
    },
    {
      "id": 1897850,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 6965,
      "effective_amount": 6965,
      "total_fees": 35,
      "total_processed": 7000,
      "deductions": null,
      "settlement_date": "2021-10-15T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2021-10-15T01:03:17.000Z",
      "updatedAt": "2021-10-15T15:07:39.000Z"
    },
    {
      "id": 1875499,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 33635,
      "effective_amount": 33635,
      "total_fees": 1365,
      "total_processed": 35000,
      "deductions": null,
      "settlement_date": "2021-10-06T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2021-10-06T01:21:08.000Z",
      "updatedAt": "2021-10-06T10:35:10.000Z"
    },
    {
      "id": 1856831,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 9610,
      "effective_amount": 9610,
      "total_fees": 390,
      "total_processed": 10000,
      "deductions": null,
      "settlement_date": "2021-09-29T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2021-09-29T01:17:33.000Z",
      "updatedAt": "2021-10-15T15:07:38.000Z"
    },
    {
      "id": 1319048,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 4925,
      "effective_amount": 4925,
      "total_fees": 75,
      "total_processed": 5000,
      "deductions": null,
      "settlement_date": "2021-02-10T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2021-02-10T01:03:25.000Z",
      "updatedAt": "2021-06-22T17:00:36.000Z"
    },
    {
      "id": 1060807,
      "domain": "live",
      "status": "success",
      "currency": "NGN",
      "integration": 463433,
      "total_amount": 19700,
      "effective_amount": 19700,
      "total_fees": 300,
      "total_processed": 20000,
      "deductions": null,
      "settlement_date": "2020-09-30T00:00:00.000Z",
      "settled_by": null,
      "createdAt": "2020-09-30T01:12:49.000Z",
      "updatedAt": "2020-09-30T09:23:02.000Z"
    }
  ],
  "meta": {
    "total": 15,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 1
  }
}
```

## List Settlement Transactions

Get the transactions that make up a particular settlement

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `id` (`String`): The settlement ID in which you want to fetch its transactions

### Query Parameters

- `perPage` (`Integer`, optional): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `page` (`Integer`, optional): Specify exactly what page you want to retrieve. If not specified, we use a default value of 1.
- `from` (`Datetime`, optional): A timestamp from which to start listing settlement transactions e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
- `to` (`Datetime`, optional): A timestamp at which to stop listing settlement transactions e.g. 2016-09-24T00:00:05.000Z, 2016-09-21

> [!NOTE]
> If you plan to store or make use of the the transaction ID, you should represent it as a unsigned 64-bit integer.

**Endpoint:** `GET /settlement/:id/transactions`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/settlement/:id/transactions"
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
      "id": 2067030515,
      "domain": "live",
      "status": "success",
      "reference": "da8ed5u8sz6yn95",
      "amount": 10000,
      "message": "",
      "gateway_response": "Approved",
      "paid_at": "2022-09-01T10:36:37.000Z",
      "created_at": "2022-09-01T10:26:02.000Z",
      "channel": "card",
      "currency": "NGN",
      "ip_address": "172.31.63.124",
      "metadata": {
        "custom_fields": [
          {
            "value": "makurdi",
            "display_name": "Donation for",
            "variable_name": "donation_for"
          }
        ]
      },
      "log": null,
      "fees": 390,
      "fees_split": null,
      "customer": {
        "id": 44100000,
        "first_name": null,
        "last_name": null,
        "email": "some@body.com",
        "phone": null,
        "metadata": null,
        "customer_code": "CUS_38uvy1ksasyupp",
        "risk_action": "default"
      },
      "authorization": {
        "authorization_code": "AUTH_whyjj12345",
        "bin": "460000",
        "last4": "1234",
        "exp_month": "11",
        "exp_year": "2022",
        "channel": "card",
        "card_type": "visa debit",
        "bank": "",
        "country_code": "KE",
        "brand": "visa",
        "reusable": true,
        "signature": "SIG_0Rof76ERZlJMnXm9090",
        "account_name": null
      },
      "plan": {},
      "split": {},
      "subaccount": {},
      "order_id": null,
      "paidAt": "2022-09-01T10:36:37.000Z",
      "createdAt": "2022-09-01T10:26:02.000Z",
      "requested_amount": 10000,
      "source": {
        "source": "merchant_api",
        "type": "api",
        "identifier": null,
        "entry_point": "transaction_initialize"
      },
      "pos_transaction_data": null
    }
  ],
  "meta": {
    "total": 1,
    "total_volume": 100,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 1
  }
}
```
