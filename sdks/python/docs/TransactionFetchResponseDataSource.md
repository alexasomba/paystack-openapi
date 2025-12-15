# TransactionFetchResponseDataSource


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**source** | **str** |  | 
**identifier** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_fetch_response_data_source import TransactionFetchResponseDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionFetchResponseDataSource from a JSON string
transaction_fetch_response_data_source_instance = TransactionFetchResponseDataSource.from_json(json)
# print the JSON string representation of the object
print TransactionFetchResponseDataSource.to_json()

# convert the object into a dict
transaction_fetch_response_data_source_dict = transaction_fetch_response_data_source_instance.to_dict()
# create an instance of TransactionFetchResponseDataSource from a dict
transaction_fetch_response_data_source_form_dict = transaction_fetch_response_data_source.from_dict(transaction_fetch_response_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


