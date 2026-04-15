# Terminal

The Terminal API allows you to build delightful in-person payment experiences.

## Send Event

Send an event from your app to the Paystack Terminal

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `terminal_id` (`String`): The ID of the Terminal the event should be sent to.

### Body Parameters

- `type` (`String`): The type of event to push. We currently support invoice and transaction
- `action` (`String`): The action the Terminal needs to perform. For the invoice type, the action can either be process or view. For the transaction type, the action can either be process or print.
- `data` (`Object`): The paramters needed to perform the specified action. For the invoice type, you need to pass the invoice id and offline reference: {id: invoice_id, reference: offline_reference}. For the transaction type, you can pass the transaction id: {id: transaction_id}

**Endpoint:** `POST /terminal/:terminal_id/event`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}/event"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"type": "invoice",

"action": "process",

"data": {

"id": 7895939,

"reference": 4634337895939

}

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Event sent to Terminal",
  "data": {
    "id": "616d721e8c5cd40a0cdd54a6"
  }
}
```

## Fetch Event Status

Check the status of an event sent to the Terminal

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `terminal_id` (`String`): The ID of the Terminal the event was sent to.
- `event_id` (`String`): The ID of the event that was sent to the Terminal

**Endpoint:** `GET /terminal/:terminal_id/event/:event_id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}/event/{event_id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Message Status Retrieved",
  "data": {
    "delivered": true
  }
}
```

## Fetch Terminal Status

Check the availiability of a Terminal before sending an event to it

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `terminal_id` (`String`): The ID of the Terminal you want to check

**Endpoint:** `GET /terminal/:terminal_id/presence`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}/presence"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Terminal status retrieved",
  "data": {
    "online": true,
    "available": false
  }
}
```

## List Terminals

List the Terminals available on your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Query Parameters

- `perPage` (`Integer`): Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
- `next` (`String`, optional): A cursor that indicates your place in the list. It can be used to fetch the next page of the list
- `previous` (`String`, optional): A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request

**Endpoint:** `GET /terminal`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/terminal"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Terminals retrieved successfully",
  "data": [
    {
      "id": 30,
      "serial_number": "033301504100A563877",
      "device_make": null,
      "terminal_id": "2872S934",
      "integration": 463433,
      "domain": "live",
      "name": "Damilola's Terminal",
      "address": null,
      "status": "active"
    }
  ],
  "meta": {
    "next": null,
    "previous": null,
    "perPage": 1
  }
}
```

## Fetch Terminal

Get the details of a Terminal

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY

### Path Parameters

- `terminal_id` (`String`): The ID of the Terminal the event was sent to.

**Endpoint:** `GET /terminal/:terminal_id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Terminal retrieved successfully",
  "data": {
    "id": 30,
    "serial_number": "033301504100A563877",
    "device_make": null,
    "terminal_id": "2872S934",
    "integration": 463433,
    "domain": "live",
    "name": "Damilola's Terminal",
    "address": null,
    "status": "active"
  }
}
```

## Update Terminal

Update the details of a Terminal

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Path Parameters

- `terminal_id` (`String`): The ID of the Terminal you want to update

### Body Parameters

- `name` (`String`): Name of the terminal
- `address` (`String`): The address of the Terminal

**Endpoint:** `PUT /terminal/:terminal_id`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"address": "Somewhere on earth"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Terminal Details updated"
}
```

## Commission Terminal

Activate your debug device by linking it to your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `serial_number` (`String`): Device Serial Number

**Endpoint:** `POST /terminal/commission_device`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/terminal/commission_device"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"serial_number": "1111150412230003899"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": false,
  "message": "Device has been commissioned already"
}
```

## Decommission Terminal

Unlink your debug device from your integration

### Headers

- `authorization` (`String`): Set value to Bearer SECRET_KEY
- `content-type` (`String`): Set value to application/json

### Body Parameters

- `serial_number` (`String`): Device Serial Number

**Endpoint:** `POST /terminal/decommission_device`

### cURL

```sh
#!/bin/sh
url="https://api.paystack.co/terminal/decommission_device"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

content_type="Content-Type: application/json"

data='{

"serial_number": "1111150412230003899"

}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

### Sample Response

**Status:** 200 Ok

```json
{
  "status": true,
  "message": "Device decommissioned successfully"
}
```
