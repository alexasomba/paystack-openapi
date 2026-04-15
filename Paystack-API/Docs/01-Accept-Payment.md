# Accept Payments

## In a nutshell

To accept a payment, create a transaction using our API, our client Javascript library, Popup JS, or our SDKs. Every transaction includes a link that can be used to complete payment.

## Popup

Paystack Popup is a Javascript library that allow developers to build a secure and convenient payment flow for their web applications. You can add it to your frontend app via CDN, NPM or Yarn:

### CDN

```html
<script src="https://js.paystack.co/v2/inline.js"></script>
```

### Initialize transaction

To get started, you need to initialize the transaction from your backend. Initializing the transaction from the backend ensures you have full control of the transaction details. To do this, make a POST request from your backend to the Initialize Transaction API endpoint:

```bash
curl https://api.paystack.co/transaction/initialize \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "customer@email.com",
        "amount": "500000"
      }' \
  -X POST
```

The `data` object of the response contains an `access_code` parameter that's needed to complete the transaction. You should store this parameter and send it to your frontend.

> [!WARNING]
> **Don't use your secret key in your frontend**  
> Never call the Paystack API directly from your frontend to avoid exposing your secret key on the frontend. All requests to the Paystack API should be initiated from your server, and your frontend gets the response from your server.

### Complete transaction

Your frontend app should make a request to your backend to initialize the transaction and get the `access_code` as described in the previous section. On getting the `access_code` from your backend, you can then use Popup to complete the transaction:

```javascript
const popup = new PaystackPop();
popup.resumeTransaction(access_code);
```

The `resumeTransaction` method triggers the checkout in the browser, allowing the user to choose their preferred payment channel to complete the transaction. You can check out the InlineJS reference guide to learn about the features available in Popup V2.

### Verify transaction status

Finally, you need to confirm the status of the transaction by using either webhooks or the verify transactions endpoint. Regardless of the method used, you need to use the following parameter to confirm if you should deliver value to your customer or not:

| Parameter     | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| `data.status` | This indicates if the payment is successful or not.                                             |
| `data.amount` | This indicates the price of your product or service in the lower denomination of your currency. |

#### Verify amount

When verifying the status of a transaction, you should also verify the amount to ensure it matches the value of the service you are delivering. If the amount doesn't match, don't deliver value to the customer.

## Redirect

Here, you call the Initialize Transaction API from your server to generate a checkout link, then redirect your users to the link so they can pay. After payment is made, the users are returned to your website at the `callback_url`.

> [!WARNING]
> Confirm that your server can conclude a TLSv1.2 connection to Paystack's servers. Most up-to-date software have this capability. Contact your service provider for guidance if you have any SSL errors.

### Collect customer information

To initialize the transaction, you'll need to pass information such as `email`, `first_name`, `last_name`, `amount`, `transaction_reference`, etc. `email` and `amount` are required. You can also pass any other additional information in the `metadata` object field.

The customer information can be retrieved from your database, session or cookie if you already have it stored, or from a form like in the example below.

```html
<form action="/save-order-and-pay" method="POST">
  <input type="hidden" name="user_email" value="<?php echo $email; ?>" />
  <input type="hidden" name="amount" value="<?php echo $amount; ?>" />
  <input type="hidden" name="cartid" value="<?php echo $cartid; ?>" />
  <button type="submit" name="pay_now" id="pay-now" title="Pay now">Pay now</button>
</form>
```

### Initialize transaction

When a customer clicks the payment action button, initialize a transaction by making a POST request to our API. Pass the email, amount and any other parameters to the Initialize Transaction API endpoint.

If the API call is successful, we will return an authorization URL which you will redirect to for the customer to input their payment information to complete the transaction.

> **Important notes:**
>
> - The amount should be in the subunit of the supported currency.
> - We used the `cart_id` from the form above as our transaction reference. You should use a unique transaction identifier from your system as your reference.
> - We set the `callback_url` in the `transaction_data` array. If you don't do this, we'll use the one that's set on your dashboard. Setting it in the code allows you to be flexible with the redirect URL if you need to.
> - If you don't set a callback URL on the dashboard or on the code, the users won't be redirected back to your site after payment.
> - You can set test callback URLs for test transactions and live callback URLs for live transactions.

```php
<?php
  $url = "https://api.paystack.co/transaction/initialize";

  $fields = [
    'email' => "customer@email.com",
    'amount' => "20000",
    'callback_url' => "https://hello.pstk.xyz/callback",
    'metadata' => ["cancel_action" => "https://your-cancel-url.com"]
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();

  //set the url, number of POST vars, POST data
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache",
  ));

  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  //execute post
  $result = curl_exec($ch);
  echo $result;
?>
```

### Verify transaction

If the transaction is successful, Paystack will redirect the user back to a `callback_url` you set. We'll append the transaction reference in the URL. In the example above, the user will be redirected to `http://your_website.com/postpayment_callback.php?reference=YOUR_REFERENCE`.

So you retrieve the reference from the URL parameter and use that to call the verify endpoint to confirm the status of the transaction. Learn more about verifying transactions.

> [!IMPORTANT]
> It's very important that you call the Verify endpoint to confirm the status of the transactions before delivering value. Just because the `callback_url` was visited doesn't prove that transaction was successful.

### Handle webhook

When a payment is successful, Paystack sends a `charge.success` webhook event to webhook URL that you provide. Learn more about using webhooks.

## Mobile SDKs

With our mobile SDKs, we provide a collection of methods and interfaces tailored to the aesthetic of the platform. Transactions are initiated on the server and completed in the SDK. The SDK requires an `access_code` to display the UI component that accepts payment.

To get the `access_code`, you need to initialize a transaction by making a POST request on your server to the Initialize Transaction API endpoint:

```bash
curl https://api.paystack.co/transaction/initialize \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "customer@email.com",
        "amount": "500000"
      }' \
  -X POST
```

On a successful initialization of the transaction, you get a response that contains an `access_code`. You need to return this `access_code` back to your mobile app.

> [!WARNING]
> **Secret key safeguarding**  
> Don't make an API request to the Initialize Transaction endpoint directly on your mobile app because it requires your secret key. Your secret key should only be used on your server where stronger security measures can be put in place.

With the `access_code` in place, you can now use the SDKs to complete the transaction.

### Android SDK

You need to install the SDK by adding the `paystack-ui` dependency to the dependencies block of your app-level `build.gradle` file:

> [!NOTE]
> **Latest dependency version**  
> You should check Maven Central to get the latest version before installation.

```gradle
// build.gradle
dependencies {
  implementation 'com.paystack.android:paystack-ui:0.0.9'
}
```

With all the requirements for accepting payment now in place, you can initialize and use the SDK as shown below:

```kotlin
// Android / Kotlin
import com.paystack.android.core.Paystack
import com.paystack.android.ui.paymentsheet.PaymentSheet
import com.paystack.android.ui.paymentsheet.PaymentSheetResult

class MainActivity : AppCompatActivity() {
    private lateinit var paymentSheet: PaymentSheet

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Other code snippets

        Paystack.builder()
            .setPublicKey("pk_test_xxxx")
            .build()
        paymentSheet = PaymentSheet(this, ::paymentComplete)
    }

    private fun makePayment() {
        // Pass access_code from transaction initialize call
        paymentSheet.launch("br6cgmvflhn3qtd")
    }

    private fun paymentComplete(paymentSheetResult: PaymentSheetResult) {
        val message = when (paymentSheetResult) {
            PaymentSheetResult.Cancelled -> "Cancelled"
            is PaymentSheetResult.Failed -> {
                Log.e("Something went wrong", paymentSheetResult.error.message.orEmpty(), paymentSheetResult.error)
                paymentSheetResult.error.message ?: "Failed"
            }

            is PaymentSheetResult.Completed -> {
                // Returns the transaction reference PaymentCompletionDetails(reference={TransactionRef})
                Log.d("Payment successful", paymentSheetResult.paymentCompletionDetails.toString())
                "Successful"
            }
        }
    }
}
```

You can check out the Android SDK reference to learn more about the methods and interfaces available for integration.

### iOS SDK

The installation of the SDK can be done via the Swift Package Manager. To add the required packages, ensure you have the latest version of XCode installed and follow these steps:

1. Select **File > Add Package Dependencies…**
2. Copy the repo URL and paste it in the search box of the package dependency popup

You can read the Swift Package Manager documentation to learn more about adding packages to your project.

With all the requirements for accepting payment now in place, you can initialize and use the SDK:

```swift
import SwiftUI
import PaystackCore
import PaystackUI

struct PaymentView: View {
	let paystack = try? PaystackBuilder
			.newInstance
			.setKey("pk_domain_xxxxxxxx")
			.build()

	var body: some View {
		VStack(spacing: 8) {
			Text("Make Payment")

			paystack?.chargeUIButton(accessCode: "0peioxfhpn", onComplete: paymentDone) {
				Text("Initiate Payment")
			}
		}
		.padding()
	}

	func paymentDone(_ result: TransactionResult) {
		// Handle transaction result
		print(result)
	}
}
```

You can check out the iOS SDK reference to learn more about the methods and interfaces available for integration.

## Charge API

The Create Charge API endpoint allows you to pass details of any payment channel directly to Paystack, along with the transaction details (email, amount, etc). We provide a couple of payment channels that you can harness based on your use case.

### Use cases

The Charge API exposes the core components powering our checkout. Developers can use these component to develop solutions that will cater to their customers specific needs. Some of these needs include:

- Serving non-smartphone users. Some of your users might be using mobile phones that can't access the internet. With the charge API, you can initiate a payment request form your server and send a prompt for payment completion via phone numbers to these users.
- Harnessing mobile OS APIs for a better user experience. Some businesses offer their products via mobile apps (Android and iOS). Mobile operating systems provide a rich set of APIs that developers can take advantage of. One of such APIs allow developers to autofill an OTP in a form. There are also APIs for dialing codes. Developers can combine the charge API with the mobile OS APIs to provide a richer experience to their users.

Here is a sample payload to the Charge API containing transaction details and an object for a payment instrument - in this case Mobile money:

```json
{
  "amount": 1000,
  "email": "customer@email.com",
  "currency": "GHS",
  "mobile_money": {
    "phone": "0553241149",
    "provider": "MTN"
  }
}
```

### Handling charge API responses

When you call the Create Charge API endpoint, the response contains a `data.status` which tells you what the next step in the process. Depending on the value in the `data.status`, you may need to prompt the user for an input as indicated in the response message (like OTP or pin or date of birth), or display an action that the user needs to complete on their device - like scanning a QR code or dialling a USSD code or redirecting to a 3DSecure page. So you follow the prompt on the `data.status` until there is no more user input required, then you listen for events via webhooks.

For the steps that prompt for user input, you will be required to display a form to the user to collect the requested input and send it to the relevant endpoint as shown in the table below. For the steps that require the user to complete an action on their device, we recommend that you display a button for the user to confirm the payment after they have performed that action so that you can listen for events via webhooks.

Below is the list of responses you can receive from the Create Charge API endpoint and what you should do next:

| Value           | Description                                                                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pending`       | Transaction is being processed. Call Check pending charge at least 10seconds after getting this status to check status                                                                                          |
| `timeout`       | Transaction has failed. You may start a new charge after showing `data.message` to user                                                                                                                         |
| `success`       | Transaction is successful. You can now provide value                                                                                                                                                            |
| `send_birthday` | Customer's birthday is needed to complete the transaction. Show `data.display_text` to user with an input that accepts the birthdate and submit to the Submit Birthday API endpoint with reference and birthday |
| `send_otp`      | Paystack needs OTP from customer to complete the transaction. Show `data.display_text` to user with an input that accepts OTP and submit the OTP to the Submit OTP API endpoint with reference and otp          |
| `failed`        | Transaction failed. No remedy for this, start a new charge after showing `data.message` to user                                                                                                                 |

### Handle webhook

When a payment is successful, Paystack sends a `charge.success` webhook event to webhook URL that you provide. It's highly recommended that you use webhooks to confirm the payment status before delivering value to your customers.
