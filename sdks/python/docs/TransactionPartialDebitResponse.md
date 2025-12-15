# TransactionPartialDebitResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransactionPartialDebitResponseData**](TransactionPartialDebitResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.transaction_partial_debit_response import TransactionPartialDebitResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionPartialDebitResponse from a JSON string
transaction_partial_debit_response_instance = TransactionPartialDebitResponse.from_json(json)
# print the JSON string representation of the object
print TransactionPartialDebitResponse.to_json()

# convert the object into a dict
transaction_partial_debit_response_dict = transaction_partial_debit_response_instance.to_dict()
# create an instance of TransactionPartialDebitResponse from a dict
transaction_partial_debit_response_form_dict = transaction_partial_debit_response.from_dict(transaction_partial_debit_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


