# TransactionInitialize

Initialize a transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer&#39;s email address | 
**amount** | **int** | Amount should be in smallest denomination of the currency.  | 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**reference** | **str** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] 
**channels** | **List[str]** | An array of payment channels to control what channels you want to make available to the user to make a payment with | [optional] 
**callback_url** | **str** | Fully qualified url, e.g. https://example.com/ to redirect your customers to after a successful payment. Use this to override the callback url provided on the dashboard for this transaction  | [optional] 
**plan** | **str** | If transaction is to create a subscription to a predefined plan, provide plan code here.  This would invalidate the value provided in amount  | [optional] 
**invoice_limit** | **int** | Number of times to charge customer during subscription to plan | [optional] 
**split_code** | **str** | The split code of the transaction split | [optional] 
**split** | [**SplitCreate**](SplitCreate.md) |  | [optional] 
**subaccount** | **str** | The code for the subaccount that owns the payment | [optional] 
**transaction_charge** | **str** | A flat fee to charge the subaccount for a transaction.  This overrides the split percentage set when the subaccount was created  | [optional] 
**bearer** | **str** | The bearer of the transaction charge | [optional] 
**label** | **str** | Used to replace the email address shown on the Checkout | [optional] 
**metadata** | **object** | JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.transaction_initialize import TransactionInitialize

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionInitialize from a JSON string
transaction_initialize_instance = TransactionInitialize.from_json(json)
# print the JSON string representation of the object
print TransactionInitialize.to_json()

# convert the object into a dict
transaction_initialize_dict = transaction_initialize_instance.to_dict()
# create an instance of TransactionInitialize from a dict
transaction_initialize_form_dict = transaction_initialize.from_dict(transaction_initialize_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


