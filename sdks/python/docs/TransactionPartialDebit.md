# TransactionPartialDebit


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer&#39;s email address | 
**amount** | **int** | Specified in the lowest denomination of your currency | 
**authorization_code** | **str** | Valid authorization code to charge | 
**currency** | [**Currency**](Currency.md) |  | 
**at_least** | **str** | Minimum amount to charge | [optional] 
**reference** | **str** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] 

## Example

```python
from alexasomba_paystack.models.transaction_partial_debit import TransactionPartialDebit

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionPartialDebit from a JSON string
transaction_partial_debit_instance = TransactionPartialDebit.from_json(json)
# print the JSON string representation of the object
print TransactionPartialDebit.to_json()

# convert the object into a dict
transaction_partial_debit_dict = transaction_partial_debit_instance.to_dict()
# create an instance of TransactionPartialDebit from a dict
transaction_partial_debit_form_dict = transaction_partial_debit.from_dict(transaction_partial_debit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


