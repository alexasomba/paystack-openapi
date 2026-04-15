# Verification

The Verification API allows you to perform KYC processes.

## Resolve Account

Confirm an account belongs to the right customer

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `account_number` (`String`): Account Number
- `bank_code` (`String`): You can get the list of bank codes by calling the List Banks endpoint

**Endpoint:** `GET /bank/resolve`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bank/resolve?account_number=0022728151&bank_code=063"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Account number resolved",
  "data": {
    "account_number": "0022728151",
    "account_name": "WES GIBBONS"
  }
}
```

## Validate Account

Confirm the authenticity of a customer's account number before sending money

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `account_name` (`String`): Customer's first and last name registered with their bank
- `account_number` (`String`): Customer’s account number
- `account_type` (`String`): This can take one of: [ personal, business ]
- `bank_code` (`String`): The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint
- `country_code` (`String`): The two digit ISO code of the customer’s bank
- `document_type` (`String`): Customer’s mode of identity. This could be one of: [ identityNumber, passportNumber, businessRegistrationNumber ]
- `document_number` (`String`, optional): Customer’s mode of identity number

**Endpoint:** `POST /bank/validate`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/bank/validate"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"bank_code": "632005",

"country_code": "ZA",

"account_number": "0123456789",

"account_name": "Ann Bron",

"account_type": "personal",

"document_type": "identityNumber",

"document_number": "1234567890123"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Personal Account Verification attempted",
  "data": {
    "accountAcceptsDebits": true,
    "accountAcceptsCredits": true,
    "accountHolderMatch": true,
    "accountOpenForMoreThanThreeMonths": true,
    "accountOpen": true,
    "verified": true,
    "verificationMessage": "Account is verified successfully"
  }
}
```

## Resolve Card BIN

Get more information about a customer's card

### Path Parameters

- `bin` (`String`): First 6 characters of card

**Endpoint:** `GET /decision/bin/:bin`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/decision/bin/539983"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Bin resolved",
  "data": {
    "bin": "539983",
    "brand": "Mastercard",
    "sub_brand": "",
    "country_code": "NG",
    "country_name": "Nigeria",
    "card_type": "DEBIT",
    "bank": "Guaranty Trust Bank",
    "linked_bank_id": 9
  }
}
```
