# Virtual Terminal

The Virtual Terminal API allows you to accept in-person payments without a POS device.

## Create Virtual Terminal

Create a Virtual Terminal on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `name` (`String`): Name of the Virtual Terminal
- `destinations` (`Array`): An array of objects containing the notification recipients for payments to the Virtual Terminal. Each object includes a target parameter for the Whatsapp phone number to send notifications to, and a name parameter for a descriptive label.
- `metadata` (`Array`): Stringified JSON object of custom data. Kindly check the Metadata page for more information
- `currency` (`Array`): The transaction currency for the Virtual Terminal. Defaults to your integration currency
- `custom_fields` (`Array`): An array of objects representing custom fields to display on the form. Each object contains a display_name parameter, representing what will be displayed on the Virtual Terminal page, and variable_name parameter for referencing the custom field programmatically

**Endpoint:** `POST /virtual_terminal`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal"
authorization="Authorization: Bearer SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"name": "Sample Terminal",

"destinations": [

    {
    "target": "+27639022319",
    "name": "Phone Destination"
    }

]

}'

curl "$url" -H "$authorization" -H "$content_type" -X POST -d "$data"
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Virtual Terminal created",
  "data": {
    "id": 27691,
    "name": "Sample Terminal",
    "integration": 530700,
    "domain": "test",
    "code": "VT_LJK5892Z",
    "paymentMethods": [],
    "active": true,
    "metadata": null,
    "destinations": [
      {
        "target": "+27639022319",
        "type": "whatsapp",
        "name": "Phone Destination"
      }
    ],
    "currency": "ZAR"
  }
}
```

## List Virtual Terminals

List Virtual Terminals on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `status` (`String`): Filter by status ('active' or 'inactive')
- `perPage` (`Integer`): Number of records per page
- `search` (`String`, optional): Search query string
- `next` (`String`, optional): Cursor for next page
- `previous` (`String`, optional): Cursor for previous page

**Endpoint:** `GET /virtual_terminal`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal"
authorization="Authorization: Bearer SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Virtual Terminals retrieved",
  "data": [
    {
      "id": 26740,
      "code": "VT_SOUAPKJZ",
      "name": "Sales Point #3",
      "integration": 530790,
      "domain": "test",
      "paymentMethods": [],
      "active": true,
      "created_at": "2025-01-16T14:09:11.000Z",
      "currency": "ZAR"
    },
    {
      "id": 26592,
      "code": "VT_NG3LPU2I",
      "name": "Sales Point #4",
      "integration": 530790,
      "domain": "test",
      "paymentMethods": [],
      "active": true,
      "created_at": "2025-01-14T16:35:58.000Z",
      "currency": "ZAR"
    }
  ],
  "meta": {
    "next": null,
    "previous": null,
    "perPage": 50
  }
}
```

## Fetch Virtual Terminal

Fetch a Virtual Terminal on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): Code of the Virtual Terminal

**Endpoint:** `GET /virtual_terminal/:code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code"
authorization="Authorization: Bearer SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Virtual Terminal retrieved",
  "data": {
    "id": 27691,
    "code": "VT_MCK5292Z",
    "name": "Sample Terminal",
    "integration": 730720,
    "domain": "test",
    "paymentMethods": [],
    "active": true,
    "created_at": "2025-02-04T12:56:56.000Z",
    "connect_account_id": null,
    "destinations": [
      {
        "target": "+27639091249",
        "type": "whatsapp",
        "name": "Sales Point #1",
        "created_at": "2025-02-04T12:56:56.000Z"
      }
    ],
    "currency": "ZAR"
  }
}
```

## Update Virtual Terminal

Update a Virtual Terminal on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `code` (`String`): Code of the Virtual Terminal to update

### Body Parameters

- `name` (`String`): Name of the Virtual Terminal

**Endpoint:** `PUT /virtual_terminal/:code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code"
authorization="Authorization: Bearer SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"name": "New terminal name"

}'

curl "$url" -H "$authorization" -H "$content_type" -X PUT -d "$data"
```

### Sample Response

**Status:** 400 Bad Request

```json
{
  "status": false,
  "message": "\"name\" is required",
  "meta": {
    "nextStep": "Provide all required params "
  },
  "type": "validation_error",
  "code": "missing_params"
}
```

## Deactivate Virtual Terminal

Deactivate a Virtual Terminal on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `code` (`String`): Code of the Virtual Terminal to deactivate

**Endpoint:** `PUT /virtual_terminal/:code/deactivate`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/deactivate"
authorization="Authorization: Bearer SECRET_KEY"

curl "$url" -H "$authorization" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Terminal set to inactive"
}
```

Assign Destination to Virtual Terminal

Add a destination (WhatsApp number) to a Virtual Terminal on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `code` (`String`): Code of the Virtual Terminal

### Body Parameters

- `destinations` (`Array`): An array of objects containing the notification recipients for payments to the Virtual Terminal. Each object includes a target parameter for the Whatsapp phone number to send notifications to, and a name parameter for a descriptive label.

**Endpoint:** `POST /virtual_terminal/:code/destination/assign`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/destination/assign"
authorization="Authorization: Bearer SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"destinations": [

        {
            "target": "+2341234567890",
            "name": "Another one"
        }

]

}'

curl "$url" -H "$authorization" -H "$content_type" -X POST -d "$data"
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Destinations assigned successfully",
  "data": [
    {
      "integration": 530700,
      "target": "2341234567890",
      "name": "Another one",
      "type": "whatsapp",
      "id": 27934,
      "createdAt": "2025-02-04T13:26:35.278Z",
      "updatedAt": "2025-02-04T13:26:35.278Z"
    }
  ]
}
```

Unassign Destination from Virtual Terminal

Unassign a destination (WhatsApp Number) summary of transactions from a Virtual Terminal on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `code` (`String`): Code of the Virtual Terminal

### Body Parameters

- `targets` (`Array`): Array of destination targets to unassign

**Endpoint:** `POST /virtual_terminal/:code/destination/unassign`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/destination/unassign"
authorization="Authorization: Bearer SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"targets": ["+2348123456789"]

}'

curl "$url" -H "$authorization" -H "$content_type" -X POST -d "$data"
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Destination deleted successfully"
}
```

Add Split Code to Virtual Terminal

Add a split code to a Virtual Terminal on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `code` (`String`): Code of the Virtual Terminal

### Body Parameters

- `split_code` (`String`): Split code to be added to the Virtual Terminal

**Endpoint:** `PUT /virtual_terminal/:code/split_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/split_code"
authorization="Authorization: Bearer SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"split_code": "SPL_98WF13Zu8w5"

}'

curl "$url" -H "$authorization" -H "$content_type" -X PUT -d "$data"
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Split code assigned",
  "data": {
    "id": 3025782,
    "name": "Dynamic Split at 1729681745076",
    "type": "flat",
    "currency": "ZAR",
    "integration": 530700,
    "domain": "test",
    "split_code": "SPL_HBaFCbbiyI",
    "active": true,
    "bearer_type": "subaccount",
    "bearer_subaccount": 854043,
    "createdAt": "2024-10-23T11:09:05.000Z",
    "updatedAt": "2024-10-23T11:09:05.000Z",
    "is_dynamic": true,
    "subaccounts": [
      {
        "subaccount": {
          "id": 523210,
          "subaccount_code": "ACCT_r56edei4okmllle",
          "business_name": "ABC Ventures",
          "description": "ABC Ventures",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "settlement_bank": "African Bank Limited",
          "currency": "ZAR",
          "account_number": "00000000000"
        },
        "share": 1600
      },
      {
        "subaccount": {
          "id": 854043,
          "subaccount_code": "ACCT_n8m5vz2itt8y0f1",
          "business_name": "Best Logistics",
          "description": "Best Logistics",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "settlement_bank": "Capitec Bank Limited",
          "currency": "ZAR",
          "account_number": "1051366984"
        },
        "share": 98400
      }
    ],
    "total_subaccounts": 2
  }
}
```

Remove Split Code from Virtual Terminal

Remove a split code from a Virtual Terminal on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `code` (`String`): Code of the Virtual Terminal

### Body Parameters

- `split_code` (`String`): Split code to be removed from the Virtual Terminal

**Endpoint:** `DELETE /virtual_terminal/:code/split_code`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/split_code"
authorization="Authorization: Bearer SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"split_code": "SPL_98WF13Zu8w5"

}'

curl "$url" -H "$authorization" -H "$content_type" -X DELETE -d "$data"
```

### Sample Response

**Status:** 400 Bad Request

```json
{
  "status": false,
  "message": "Payment method does not exist",
  "meta": {
    "nextStep": "Ensure that you're passing the correct reference for the requested resource that exists on this integration"
  },
  "type": "validation_error",
  "code": "not_found"
}
```
