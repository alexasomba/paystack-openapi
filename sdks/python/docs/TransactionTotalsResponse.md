# TransactionTotalsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransactionTotalsResponseData**](TransactionTotalsResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.transaction_totals_response import TransactionTotalsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionTotalsResponse from a JSON string
transaction_totals_response_instance = TransactionTotalsResponse.from_json(json)
# print the JSON string representation of the object
print TransactionTotalsResponse.to_json()

# convert the object into a dict
transaction_totals_response_dict = transaction_totals_response_instance.to_dict()
# create an instance of TransactionTotalsResponse from a dict
transaction_totals_response_form_dict = transaction_totals_response.from_dict(transaction_totals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


