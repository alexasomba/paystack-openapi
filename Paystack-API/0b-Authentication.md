# Authentication

All requests to the Paystack API must be authenticated. Authentication identifies which Paystack integration a request belongs to and determines whether it’s authorized to perform the requested action.

The Paystack API uses API keys to authenticate requests. Every request must include your secret key in the `Authorization` header, using the `Bearer` scheme.

## API Keys

Every Paystack integration provides two types of API keys for each environment:

| Type           | Prefix | Description                                                                                                                                                     |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Public Key** | `pk_`  | Used on the frontend when integrating using Paystack Inline and in our Mobile SDKs only. By design, public keys can only initiate transactions to your account. |
| **Secret Key** | `sk_`  | Used on the backend when making API requests. The secret keys must be stored securely.                                                                          |

You can find your API keys on the **API Keys & Webhooks** section of the Paystack Dashboard.

It's good practice to rotate your API keys periodically to enhance security. You can rotate your keys by generating new ones in the Paystack Dashboard. If you suspect that your secret key has been compromised, you should rotate it immediately.

## Secure Your Secret Key

Do not commit your secret keys to git, or use them in client-side code.

Authorization headers should be in the following format:

`Authorization: Bearer SECRET_KEY`

### Sample Authorization Header

```http
Authorization: Bearer sk_test_r3m3mb3r2pu70nasm1l3
```

API requests made without authentication fail with the status code **401 Unauthorized**. All API requests must be made over HTTPS.

## Secure Your Requests

Don't set `VERIFY_PEER` to `FALSE`. Ensure your server verifies the SSL connection to Paystack.

## Test and Live Modes

Paystack provides two separate environments for integration:

- **Test Mode**: For development and quality assurance. Transactions and API calls here don't involve real money.
- **Live Mode**: For production. Transactions and settlements are real and processed through your live Paystack account.

Each environment has its own set of public and secret keys. Test keys are prefixed with `pk_test_` and `sk_test_`, while live keys are prefixed with `pk_live_` and `sk_live_`.

### Test Mode Limitations

The test environment aims to closely mirror live behavior, but not all features are available. For example, settlements aren't processed in test mode, and some payment channels are unavailable.

## IP Whitelisting

IP whitelisting is a security feature that allows only specific IP addresses to make API requests using your secret keys. This provides an added layer of security by preventing unauthorized usage of your secret keys from unknown IP addresses.

When IP whitelisting is enabled, Paystack checks the IP address that each secret key request originates from and compares it with your list of whitelisted IP addresses. If the request's IP address is whitelisted, Paystack allows the request. If not, Paystack blocks the request.
