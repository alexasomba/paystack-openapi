# TransactionInitializeResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransactionInitializeResponseData**](TransactionInitializeResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.transaction_initialize_response import TransactionInitializeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionInitializeResponse from a JSON string
transaction_initialize_response_instance = TransactionInitializeResponse.from_json(json)
# print the JSON string representation of the object
print TransactionInitializeResponse.to_json()

# convert the object into a dict
transaction_initialize_response_dict = transaction_initialize_response_instance.to_dict()
# create an instance of TransactionInitializeResponse from a dict
transaction_initialize_response_form_dict = transaction_initialize_response.from_dict(transaction_initialize_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


