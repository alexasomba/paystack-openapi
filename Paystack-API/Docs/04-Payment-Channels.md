# Payment Channels

## In a Nutshell

Paystack enables you to accept payments from customers using different payment channels such as: cards, mobile money accounts, QR codes, directly from their bank account, or USSD.

If you use the Popup or Redirect method, the paying customer will be shown all the payment methods selected on your dashboard. But if you don't want to use either option, you can initiate all the different payment channels directly from your server using the Charge API.

## Available Channels

Card payment channels are available on all Paystack accounts. Other payment channels are only available in countries where they are supported.

---

## Cards

Cards are one of the most common payment channels across Paystack markets. The following card brands are supported:

| Card       | Markets                          |
| ---------- | -------------------------------- |
| Visa       | All                              |
| Mastercard | All                              |
| Verve      | Nigeria                          |
| Amex       | Nigeria, South Africa, and Kenya |

### Feature Availability

The Card API is available in all markets for **PCI-compliant businesses**. If you intend to use this API, check the compliance requirements below and reach out to Paystack.

The Cards API allows you to send card details securely from your custom checkout. With this, PCI-DSS compliant businesses can build bespoke checkout experiences without compromising on security.

### Compliance Requirements

PCI-DSS certification documents can only be issued by an accredited Qualified Security Assessor (QSA) after an audit. The documents issued are the Attestation of Compliance (AOC) and Report on Compliance, valid for one year from the signing date.

A valid AOC must satisfy all of the following:

- Issued after an audit by a QSA
- Signed off by a QSA
- Within one year of the issue date
- Has the PCI SSC logo on the cover page
- Adheres to at least version 3.2.1 of PCI-DSS

Submit your documents to [support@paystack.com](mailto:support@paystack.com) or through your Paystack relationship manager to receive access.

---

## Bank Accounts

> [!NOTE]
> This feature is currently available to businesses in **Nigeria**.

The Pay with Bank feature allows customers to pay through their internet banking portal or by providing their bank account number and authenticating with an OTP sent to their phone or email.

> This is different from **Bank Transfers**, where customers transfer money into a bank account.

### Collect Bank Details

Prompt the user to select their bank and enter their account number. Fetch the list of supported banks via the List Banks endpoint with the `pay_with_bank=true` filter.

### Create a Charge

Send `email`, `amount`, `metadata`, and the `bank` object (containing the bank `code` and `account_number`) to the Charge endpoint:

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "customer@email.com",
    "amount": "10000",
    "bank": {
      "code": "057",
      "account_number": "0000000000"
    }
  }' \
  -X POST
```

For **Kuda**, use `phone` and `token` instead of `account_number`:

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "customer@email.com",
    "amount": "10000",
    "bank": {
      "code": "50211",
      "phone": "+2348100000000",
      "token": "123456"
    }
  }' \
  -X POST
```

When the charge is initiated, `data.status` is `pending` while processing. It then updates to `success` or `failed`.

---

## Pay with Transfer

> [!NOTE]
> This feature is currently available to businesses in **Nigeria**.

Pay with Transfer (PwT) creates temporary bank accounts tied to a specific transaction. The account number becomes invalid after the transaction completes or its expiry time is reached.

### Create a PwT Charge

Pass `email`, `amount`, and a `bank_transfer` object with `account_expires_at` to set the account expiry:

```bash
#!/bin/sh

url="https://api.paystack.co/charge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "email": "another@one.com",
  "amount": "10000",
  "bank_transfer": {
    "account_expires_at": "2025-04-24T16:40:57.954Z"
  }
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

| Parameter            | Type     | Description                                                                                                                                                                         |
| -------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account_expires_at` | `string` | Account validity period in ISO 8601 format (`YYYY-MM-DDThh:mm:ssZ`). Minimum is 15 minutes from now; maximum is 8 hours. Set to `null` to default to 8 hours from the current time. |

> [!NOTE]
> If the difference between `account_expires_at` and the current time is less than 15 minutes, it defaults to 15 minutes. If it exceeds 8 hours, it defaults to 8 hours.

### Verifying a Transfer

Implement a webhook URL on the Paystack Dashboard and listen for the following events:

| Event                    | Description                                                                  |
| ------------------------ | ---------------------------------------------------------------------------- |
| `charge.success`         | Customer's transfer was successful.                                          |
| `bank.transfer.rejected` | Customer sent an incorrect amount or was flagged by Paystack's fraud system. |

<details>
<summary><strong>Sample <code>charge.success</code> Webhook Payload</strong></summary>

```json
{
  "event": "charge.success",
  "data": {
    "id": 3104021987,
    "domain": "test",
    "status": "success",
    "reference": "zuz8ggd1ro",
    "amount": 25000,
    "message": null,
    "gateway_response": "Approved",
    "paid_at": "2023-09-12T13:29:09.000Z",
    "created_at": "2023-09-12T13:27:50.000Z",
    "channel": "bank_transfer",
    "currency": "NGN",
    "authorization": {
      "authorization_code": "AUTH_q5nfynycgm",
      "channel": "bank_transfer",
      "card_type": "transfer",
      "sender_name": "Jadesola Oluwashina",
      "narration": "Channel Tests"
    },
    "customer": {
      "id": 138496675,
      "email": "another@one.com",
      "customer_code": "CUS_1eq06yu8efl8u63"
    }
  }
}
```

</details>

Alternatively, use the **Check Pending Charge** endpoint to manually verify the transaction status.

---

## USSD

> [!NOTE]
> This payment method is available to **Nigerian customers** only.

Nigerian banks provide USSD services that customers use to complete payments by dialling a code on their mobile device. The user authenticates with a PIN and the transaction is confirmed.

> [!IMPORTANT]
> Webhooks must be set up on your Paystack Dashboard for USSD to work correctly.

### Create a Charge

Send `email`, `amount`, and the USSD `type` to the Charge endpoint:

| Bank                | Type  |
| ------------------- | ----- |
| Guaranty Trust Bank | `737` |

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "some@body.nice",
    "amount": "10000",
    "ussd": {
      "type": "737"
    },
    "metadata": {
      "custom_fields": [{
        "value": "makurdi",
        "display_name": "Donation for",
        "variable_name": "donation_for"
      }]
    }
  }' \
  -X POST
```

The response provides a USSD code for the customer to dial to complete payment.

### Handle Response

When the user completes payment, the `charge.success` webhook event is raised:

```json
{
  "event": "charge.success",
  "data": {
    "id": 53561,
    "domain": "live",
    "status": "success",
    "reference": "2ofkbk0yie6dvzb",
    "amount": 150000,
    "channel": "ussd",
    "currency": "NGN",
    "authorization": {
      "channel": "ussd",
      "card_type": "offline",
      "bank": "Guaranty Trust Bank"
    },
    "customer": {
      "id": 16200,
      "first_name": "John",
      "last_name": "Doe",
      "email": "customer@email.com"
    }
  }
}
```

> [!NOTE]
> USSD recurring charges are not currently available. Initiate a new transaction for each payment.

---

## Mobile Money

> [!NOTE]
> This feature is available to businesses in **Ghana, Kenya, and Côte d'Ivoire**.

The Mobile Money channel allows customers to pay by using a phone number enabled for mobile money. The customer authorizes the payment on their mobile device.

> [!IMPORTANT]
> Since payment is completed offline, you must have a webhook URL configured on your Paystack Dashboard.

### Create a Charge

Pass `email`, `amount`, `currency`, and a `mobile_money` object:

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "email": "customer@email.com",
    "currency": "GHS",
    "mobile_money": {
      "phone": "0551234987",
      "provider": "mtn"
    }
  }' \
  -X POST
```

### Supported Providers

Change `currency` and `provider` to target different operators:

| Provider          | Code     | Country      |
| ----------------- | -------- | ------------ |
| MTN               | `mtn`    | Ghana, CIV   |
| AT Money / Airtel | `atl`    | Ghana, Kenya |
| Telecel           | `vod`    | Ghana        |
| M-PESA            | `mpesa`  | Kenya        |
| Orange            | `orange` | CIV          |
| Wave              | `wave`   | CIV          |

When initiated, `data.status` returns `pay_offline`. Show `data.display_text` to the customer and listen for the `charge.success` webhook. Customers must complete the transaction within **180 seconds**.

### Transaction Verification

If you don't receive the `charge.success` event after 180 seconds, call the **Verify Transaction** endpoint to get the status and reason for failure from `data.message`.

---

## M-PESA

> [!NOTE]
> M-PESA allows Kenya-based businesses to charge individual customers and M-PESA Till numbers.

With M-PESA, merchants can charge individual users via an STK push. Include the country code in the phone number (e.g. `+254722000000`). The customer will be prompted to enter their PIN to complete the transaction.

### M-PESA Offline

The offline option allows businesses to create a charge completed later — useful for restaurants, e-commerce stores, and delivery services. The customer pays to Paystack's Paybill and the generated `account_reference` identifies the transaction.

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "email": "customer@email.com",
    "currency": "KES",
    "mobile_money": {
      "phone": "254700000000",
      "provider": "mpesa_offline"
    }
  }' \
  -X POST
```

> [!NOTE]
> The `account_number` is the Paybill number while `account_reference` uniquely identifies the transaction. Wrong amounts will cause transaction failure — create a new charge and share the updated details with the customer.

### M-PESA Till

Collect payments from other businesses via their M-PESA Till number:

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "email": "customer@email.com",
    "currency": "KES",
    "mobile_money": {
      "account": "1234567",
      "provider": "mptill"
    }
  }' \
  -X POST
```

Both M-PESA Till and individual charges require the customer to authorise on their phone. Display the `display_text` value to the customer in your custom UI.

```json
{
  "status": true,
  "message": "Charge attempted",
  "data": {
    "reference": "jq3psd5n96sprwl",
    "status": "pay_offline",
    "display_text": "Please complete authorization process on your mobile phone"
  }
}
```

> [!TIP]
> Since M-PESA transactions are asynchronous, implement **Verify Transactions** for charges that take too long to complete.

---

## EFT

> [!NOTE]
> This feature is available to **South African customers** only.

EFT (Electronic Funds Transfer) is an instant bank transfer payment method where customers pay through their internet banking interface. Paystack redirects the customer to the provider's platform for authorization.

### Create a Charge

Send `email`, `amount`, `currency`, and the `eft` provider to the Charge endpoint:

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 5000,
    "currency": "ZAR",
    "email": "customer@email.com",
    "eft": {
      "provider": "ozow"
    }
  }' \
  -X POST
```

> [!NOTE]
> **Ozow** is currently the only available EFT provider.

### Handle Response

Set up webhooks on your Paystack Dashboard to receive the `charge.success` event when payment is completed.

---

## Pay with Pesalink

> [!NOTE]
> This feature is available for **registered Kenyan businesses**. Reach out to [support@paystack.com](mailto:support@paystack.com) for enablement.

Pesalink enables customers to make instant transfers from their banking platform. Each transaction is assigned an account number and narration for the customer to use to complete the payment.

> [!WARNING]
> The virtual account is valid for **25 minutes**. Communicate this timeout to the customer to avoid reconciliation issues. Customers with **Diamond Trust Bank (DTB)** accounts cannot make transfers via this channel.

### Create a Charge

Pass `email`, `amount`, and the `bank_transfer` object with an optional `account_expires_at` (less than 25 minutes from now in UTC):

```bash
#!/bin/sh

url="https://api.paystack.co/charge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "email": "user@example.com",
  "amount": "10000",
  "bank_transfer": {
    "account_expires_at": "2025-04-24T16:40:57.954Z"
  }
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
```

> [!IMPORTANT]
> Always show the `transaction_reference` to the customer. They must use it as the narration when making the transfer for the transaction to be matched correctly.

### Handle Response

Listen for the following webhook events:

| Event                    | Description                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| `charge.success`         | Payment was successful.                                                                       |
| `bank.transfer.rejected` | Customer sent an incorrect amount. Notify them to retry. A refund is processed automatically. |

<details>
<summary><strong>Sample <code>charge.success</code> Webhook Payload</strong></summary>

```json
{
  "event": "charge.success",
  "data": {
    "id": 519558290,
    "status": "success",
    "reference": "uybxnzf71231",
    "amount": 1000,
    "channel": "bank_transfer",
    "currency": "KES",
    "authorization": {
      "channel": "bank_transfer",
      "sender_name": "ANN ABELL",
      "sender_bank": "Diamond Trust Bank Kenya Limited",
      "receiver_bank": "Diamond Trust Bank Kenya Ltd"
    },
    "customer": {
      "email": "user@example.com",
      "customer_code": "CUS_174rg4huaih38hk"
    }
  }
}
```

</details>

---

## QR Code

> [!NOTE]
> QR code payments are available to businesses in **South Africa** only. It works with both SnapScan and Scan to Pay supported apps.

The QR channel generates a QR code that customers scan on a supported app to complete payment. A `charge.success` event is sent to your webhook URL when the transaction is complete.

### Create a Charge

Send `email`, `amount`, `currency`, and a `qr` object with `provider` set to `scan-to-pay`:

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 1000,
    "email": "customer@email.com",
    "currency": "ZAR",
    "qr": {
      "provider": "scan-to-pay"
    }
  }' \
  -X POST
```

### Supported Apps

**SnapScan:** Customers complete payment by scanning with the SnapScan iOS or Android app.

**Scan to Pay** — supported by the following apps:

| Banking Apps  | Wallets                | Standalone Scan to Pay    |
| ------------- | ---------------------- | ------------------------- |
| Standard Bank | Ukheshe                | Nedbank Scan to Pay       |
| FNB Banking   | Spot (by Virgin Money) | Standard Bank Scan to Pay |
| Nedbank Money | Vodapay                | Absa Scan to Pay          |
| Capitec Bank  | Telkom Pay             |                           |
| Absa          | Instapay               |                           |
| RMB           | Nedbank Avo            |                           |

> [!NOTE]
> QR recurring charges are not supported. Initiate a new transaction for each payment.

---

## Capitec Pay

> [!NOTE]
> Capitec Pay is available to businesses in **South Africa** only.

Capitec Pay is an open banking payment method that allows customers to pay securely using their mobile phone number, ID, or account number. The customer receives a push notification in their Capitec banking app to authorise the payment — no card details or internet banking credentials required.

### Create a Charge

Send `email`, `amount`, `currency`, and a `capitec_pay` object to the Charge endpoint:

```bash
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 1000,
    "email": "drew.john@email.com",
    "currency": "ZAR",
    "capitec_pay": {
      "identifier_key": "CELLPHONE",
      "identifier_value": "0812345678"
    }
  }' \
  -X POST
```

### Transaction Verification

Store the transaction reference and check status via the **Requery Transaction** endpoint.

### Handling Errors

| Message                                                               | Error Code            | Reason                                                  |
| --------------------------------------------------------------------- | --------------------- | ------------------------------------------------------- |
| Account is de-activated, please contact Capitec for help.             | `not_found`           | The customer deactivated their account.                 |
| Customer details not found, please try again or contact Capitec.      | `not_found`           | The customer does not exist on Capitec.                 |
| Capitec app not detected, please check it's installed and up to date. | `not_found`           | The customer does not have the Capitec app.             |
| You've blocked this business, please contact Capitec for help.        | `charge_restricted`   | The customer blocked the merchant.                      |
| Charge Failed                                                         | `amount_exceed_limit` | Duplicate charge for the same amount in a short period. |
