# Verify Payments

## In a nutshell

The Verify Transaction API allows you confirm the status of a customer's transaction.

## Transaction statuses

Webhooks are the preferred option for confirming a transaction status, but we currently send webhook events for just successful transactions. However, a transaction can have the following statuses:

| Status       | Meaning                                                                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `abandoned`  | The customer hasn't completed the transaction.                                                                                                                                                                             |
| `failed`     | The transaction failed. For more information on why, refer to the message/gateway response.                                                                                                                                |
| `ongoing`    | The customer is currently trying to carry out an action to complete the transaction. This can get returned when we're waiting on the customer to enter an otp or to make a transfer (for a pay with transfer transaction). |
| `pending`    | The transaction is currently in progress.                                                                                                                                                                                  |
| `processing` | Same as `pending`, but for direct debit transactions.                                                                                                                                                                      |
| `queued`     | The transaction has been queued to be processed later. Only possible on bulk charge transactions.                                                                                                                          |
| `reversed`   | The transaction was reversed. This could mean the transaction was refunded, or a chargeback was successfully logged for this transaction.                                                                                  |
| `success`    | The transaction was successfully processed.                                                                                                                                                                                |

## Verify a transaction

You do this by making a GET request to the Verify Transaction API endpoint from your server using your transaction reference. This is dependent on the method you used to initialize the transaction.

### From Popup or mobile SDKs

You'll have to send the reference to your server, then from your server you call the verify endpoint.

### From the Redirect API

You initiate this request from your callback URL. The transaction reference is returned as a query parameter to your callback URL.

> [!TIP]
> **Helpful Tip**  
> If you offer digital value like airtime, wallet top-up, digital credit, etc, always confirm that you haven't already delivered value for that transaction to avoid double fulfillments, especially, if you also use webhooks.

Here's a code sample for verifying transactions:

```bash
#!/bin/sh
curl https://api.paystack.co/transaction/verify/:reference \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -X GET
```

> [!WARNING]
> The API response has a status key `response.status` indicating the status of the API call. This is not the status of the transaction. The status of the transaction is in the `data` object in the verify API response, i.e `response.data.status`. Learn more about Paystack API format.

## Charge returning users

The verify response also returns information about the payment instrument that the user paid with in the `data.authorization` object. If the channel is `card`, then you can store the `authorization_code` for that card against that user, and use that charge the user for subsequent transaction. Learn more about recurring charges.
