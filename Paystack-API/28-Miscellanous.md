# Miscellaneous

Support APIs that can be used to provide more details for regular API integrations.

## List Banks

Get a list of all supported banks and their properties

### Query Parameters

- `country` (`String`, optional): The country from which to obtain the list of supported banks. Accepted values are: `ghana`, `kenya`, `nigeria`, `south-africa`
- `use_cursor` (`Boolean`, optional): Flag to enable cursor pagination on the endpoint
- `perPage` (`Integer`, optional): The number of objects to return per page. Defaults to 50, and limited to 100 records per page.
- `pay_with_bank_transfer` (`Boolean`, optional): A flag to filter for available banks a customer can make a transfer to complete a payment
- `pay_with_bank` (`Boolean`, optional): A flag to filter for banks a customer can pay directly from
- `enabled_for_verification` (`Boolean`, optional): A flag to filter the banks that are supported for account verification in South Africa. You need to combine this with either the currency or country filter.
- `next` (`String`, optional): A cursor that indicates your place in the list. It can be used to fetch the next page of the list
- `previous` (`String`, optional): A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an initial next request
- `gateway` (`String`, optional): The gateway type of the bank. It can be one of these: `emandate`, `digitalbankmandate`
- `type` (`String`, optional): Type of financial channel. For Ghanaian channels, please use either `mobile_money` for mobile money channels OR `ghipss` for bank channels
- `currency` (`String`, optional): One of the supported currency
- `include_nip_sort_code` (`Boolean`, optional): A flag that returns Nigerian banks with their NIP institution code. The returned value can be used in identifying institutions on NIP.

**Endpoint:** `GET /bank`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bank"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Banks retrieved",
  "data": [
    {
      "name": "Abbey Mortgage Bank",
      "slug": "abbey-mortgage-bank",
      "code": "801",
      "longcode": "",
      "gateway": null,
      "pay_with_bank": false,
      "active": true,
      "is_deleted": false,
      "country": "Nigeria",
      "currency": "NGN",
      "type": "nuban",
      "id": 174,
      "createdAt": "2020-12-07T16:19:09.000Z",
      "updatedAt": "2020-12-07T16:19:19.000Z"
    },
    {
      "name": "Coronation Merchant Bank",
      "slug": "coronation-merchant-bank",
      "code": "559",
      "longcode": "",
      "gateway": null,
      "pay_with_bank": false,
      "active": true,
      "is_deleted": false,
      "country": "Nigeria",
      "currency": "NGN",
      "type": "nuban",
      "id": 173,
      "createdAt": "2020-11-24T10:25:07.000Z",
      "updatedAt": "2020-11-24T10:25:07.000Z"
    },
    {
      "name": "Infinity MFB",
      "slug": "infinity-mfb",
      "code": "50457",
      "longcode": "",
      "gateway": null,
      "pay_with_bank": false,
      "active": true,
      "is_deleted": false,
      "country": "Nigeria",
      "currency": "NGN",
      "type": "nuban",
      "id": 172,
      "createdAt": "2020-11-24T10:23:37.000Z",
      "updatedAt": "2020-11-24T10:23:37.000Z"
    },
    {
      "name": "Paycom",
      "slug": "paycom",
      "code": "999992",
      "longcode": "",
      "gateway": null,
      "pay_with_bank": false,
      "active": true,
      "is_deleted": false,
      "country": "Nigeria",
      "currency": "NGN",
      "type": "nuban",
      "id": 171,
      "createdAt": "2020-11-24T10:20:45.000Z",
      "updatedAt": "2020-11-24T10:20:54.000Z"
    },
    {
      "name": "Petra Mircofinance Bank Plc",
      "slug": "petra-microfinance-bank-plc",
      "code": "50746",
      "longcode": "",
      "gateway": null,
      "pay_with_bank": false,
      "active": true,
      "is_deleted": false,
      "country": "Nigeria",
      "currency": "NGN",
      "type": "nuban",
      "id": 170,
      "createdAt": "2020-11-24T10:03:06.000Z",
      "updatedAt": "2020-11-24T10:03:06.000Z"
    }
  ],
  "meta": {
    "next": "YmFuazoxNjk=",
    "previous": null,
    "perPage": 5
  }
}
```

## List Countries

Gets a list of countries that Paystack currently supports

**Endpoint:** `GET /country`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/country"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Countries retrieved",
  "data": [
    {
      "id": 1,
      "name": "Nigeria",
      "iso_code": "NG",
      "default_currency_code": "NGN",
      "integration_defaults": {},
      "relationships": {
        "currency": {
          "type": "currency",
          "data": ["NGN", "USD"]
        },
        "integration_feature": {
          "type": "integration_feature",
          "data": []
        },
        "integration_type": {
          "type": "integration_type",
          "data": ["ITYPE_001", "ITYPE_002", "ITYPE_003"]
        },
        "payment_method": {
          "type": "payment_method",
          "data": ["PAYM_001", "PAYM_002", "PAYM_003", "PAYM_004"]
        }
      }
    }
  ]
}
```

## List States (AVS)

Get a list of states for a country for address verification

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `country` (`String`): The country code of the states to list (e.g., `US`, `CA`).

**Endpoint:** `GET /address_verification/states`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/address_verification/states?country=CA"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "States retrieved",
  "data": [
    {
      "name": "Alberta",
      "slug": "alberta",
      "abbreviation": "AB"
    },
    {
      "name": "British Columbia",
      "slug": "british-columbia",
      "abbreviation": "BC"
    }
  ]
}
```
