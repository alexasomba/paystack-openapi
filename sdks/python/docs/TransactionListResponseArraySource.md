# TransactionListResponseArraySource


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** |  | 
**type** | **str** |  | 
**identifier** | **object** |  | 
**entry_point** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_list_response_array_source import TransactionListResponseArraySource

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionListResponseArraySource from a JSON string
transaction_list_response_array_source_instance = TransactionListResponseArraySource.from_json(json)
# print the JSON string representation of the object
print TransactionListResponseArraySource.to_json()

# convert the object into a dict
transaction_list_response_array_source_dict = transaction_list_response_array_source_instance.to_dict()
# create an instance of TransactionListResponseArraySource from a dict
transaction_list_response_array_source_form_dict = transaction_list_response_array_source.from_dict(transaction_list_response_array_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


