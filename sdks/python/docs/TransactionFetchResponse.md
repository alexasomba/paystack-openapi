# TransactionFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransactionFetchResponseData**](TransactionFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.transaction_fetch_response import TransactionFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionFetchResponse from a JSON string
transaction_fetch_response_instance = TransactionFetchResponse.from_json(json)
# print the JSON string representation of the object
print TransactionFetchResponse.to_json()

# convert the object into a dict
transaction_fetch_response_dict = transaction_fetch_response_instance.to_dict()
# create an instance of TransactionFetchResponse from a dict
transaction_fetch_response_form_dict = transaction_fetch_response.from_dict(transaction_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


