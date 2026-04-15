# Errors

When a request to the Paystack API fails, the response always includes clear information about what went wrong and how to fix it. Each error follows a consistent structure that contains a human-readable message, a machine-readable code, and optional diagnostic information to help you debug quickly.

Paystack's API is RESTful and as such, uses conventional HTTP response codes to indicate the success or failure of requests.

## HTTP Status Codes

- `200`: Request was successful and intended action was carried out. Note that we will always send a 200 if a charge or verify request was made. Do check the data object to know how the charge went (i.e. successful or failed).
- `201`: A resource has successfully been created.
- `400`: A validation or client side error occurred and the request wasn't fulfilled.
- `401`: The request wasn't authorized. This can be triggered by passing an invalid secret key in the authorization header or the lack of one.
- `404`: Request couldn't be fulfilled as the request resource doesn't exist.
- `5xx`: Request couldn't be fulfilled due to an error on Paystack's end. This shouldn't happen so please report as soon as you encounter any instance of this.

## Error Response Format

Every error response includes the same top-level fields:

### JSON Keys

- `status` (`Boolean`): This lets you know if the request to the API was received and processed successfully or not. We recommend that you use this in combination with HTTP status codes to determine the result of an API call.
- `message` (`String`): This is a brief description of the error that occurred.
- `meta` (`Object`): An object containing additional information about the error. It contains a `next_step` key that provides a suggested action to resolve the issue.
- `type` (`String`): The type of error that occurred. This can be one of: `api_error`, `validation_error`, or `processor_error`.
- `code` (`String`): A Paystack-defined error code that categorizes the error.
- `data` (`Object`): This is generally not returned for error responses, but may be returned in some cases where the error is related to the data being processed.

For example, when a bulk transfer is rejected, the `meta` object indicates if any of the transfer recipients are invalid or blacklisted.

### Sample Validation Error

```json
{
  "status": false,
  "message": "Email Address is required",
  "meta": {
    "nextStep": "Provide all required params"
  },
  "type": "validation_error",
  "code": "missing_params"
}
```

## Error Categories

Errors are grouped into categories to make them easier to understand and handle programmatically.

### Categories

- `api_error` (`String`): This indicates that the error happened on the Paystack API. Errors here include attempts to access resources that an integration isn't authorized to access, or similar API-level issues.
- `validation_error` (`String`): This indicates that the error is related to invalid data in the request. Errors here include missing or invalid parameters being passed to the API.
- `processor_error` (`String`): This indicates that the error is related to the payment processor or gateway. Errors here include insufficient funds, blocked/expired cards, or other issues relayed by the payment processor.

### Not sure where to look?

Type the error or keywords into the search bar at the top of the page. If you don’t find what you’re looking for, contact us—we’re happy to help.
