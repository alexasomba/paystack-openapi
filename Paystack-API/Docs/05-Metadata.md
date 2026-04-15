# Metadata

Add custom data to your request payload.

## Crafting metadata

With metadata, you can add additional parameters that an endpoint doesn't accept naturally. Crafting metadata will depend on your language's handling of JSON. Common metadata are:

- Invoice ID
- Cart ID
- Cart Items
- Payment medium (site/app)

There are two ways to add parameters to the metadata object:

1. **Key/value pair:** You pass the parameter as a key and value pair like this: `cart_id: "IU929"`. Parameters passed this way don't show up on the dashboard, however, they're returned with the API response.
2. **Custom Fields:** The `custom_fields` key is reserved for an array of custom fields that should show on the dashboard when you click the transaction.

> [!NOTE]
> Custom fields have 3 keys: `display_name`, `variable_name`, and `value`. The display name will be the label for the value when displaying.

```json
{
  "metadata": {
    "cart_id": 398,
    "custom_fields": [
      {
        "display_name": "Invoice ID",
        "variable_name": "Invoice ID",
        "value": 209
      },
      {
        "display_name": "Cart Items",
        "variable_name": "cart_items",
        "value": "3 bananas, 12 mangoes"
      }
    ]
  }
}
```

## Cancel action

You can redirect your users to a chosen URL when they cancel a payment. This is done by setting a `cancel_action` in your metadata:

```json
{
  "metadata": {
    "cancel_action": "https://your-cancel-url.com"
  }
}
```

## Custom filters

Custom filters allow you control how a transaction is completed by using the `custom_filters` object in the metadata object.

### Recurring payment

If you need to debit your customer in future, specify `recurring: true` in the custom_filters object.

```json
{
  "metadata": {
    "custom_filters": {
      "recurring": true
    }
  }
}
```

This is supported for the Card and Pay with Bank (PwB) channels with a different behaviour for each channel.

#### Card

With the card channel, we accept only Verve cards that support recurring billing and force a bank authentication for MasterCard and VISA.

#### Pay with bank

With the pwb channel, we'll only make the supported banks available for customers to make payment. Banks that don't support recurring payments are filtered out.

### Selected bank cards

You can use the `banks` parameter to specify the bank codes when you only want particular bank cards to be accepted for a transaction. You can use the `List Banks` API to get the list of supported bank codes.

```json
{
  "metadata": {
    "custom_filters": {
      "banks": ["057", "100"]
    }
  }
}
```

### Selected card brands

If you only want certain card brand(s) to be accepted for a transaction, specify the brands in the `card_brands` array:

```json
{
  "metadata": {
    "custom_filters": {
      "card_brands": ["visa"]
    }
  }
}
```

We currently support the following card brands:

| Brand            | Code         | Country                      |
| ---------------- | ------------ | ---------------------------- |
| Verve            | `verve`      | Nigeria                      |
| Visa             | `visa`       | All regions                  |
| American Express | `amex`       | Nigeria, Kenya, South Africa |
| Mastercard       | `mastercard` | All regions                  |

> [!TIP]
> The filters can also be combined for a comprehensive rule. In the snippet below, the filters tell us that the customer should be enrolled on recurring billing and we should only accept a visa card from Zenith (`057`) or Suntrust bank (`100`).

```json
{
  "metadata": {
    "custom_filters": {
      "recurring": true,
      "banks": ["057", "100"],
      "card_brands": ["visa"]
    }
  }
}
```

### Selected bank accounts

The `supported_bank_providers` parameter allows you to specify the banks you want on the Pay with Bank channel. When set, the customer will only see the banks you specified. You should use the `List Banks` API endpoint to get the bank codes.

```json
{
  "metadata": {
    "custom_filters": {
      "supported_bank_providers": ["033", "215", "102"]
    }
  }
}
```

### Selected MoMo provider

Sometimes, you want to give preference to only certain mobile money providers. For example, you might want to run a campaign to allow just a certain provider. To do this, you can specify the provider(s) in the `supported_mobile_money_providers` parameter:

```json
{
  "metadata": {
    "custom_filters": {
      "supported_mobile_money_providers": ["vod"]
    }
  }
}
```

| Provider   | Code  | Country |
| ---------- | ----- | ------- |
| MTN        | `mtn` | Ghana   |
| AirtelTigo | `atl` | Ghana   |
| Vodafone   | `vod` | Ghana   |
