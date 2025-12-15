# TransactionFetchResponseDataMetadata


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fields** | [**List[MetadataCustomFieldsArray]**](MetadataCustomFieldsArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.transaction_fetch_response_data_metadata import TransactionFetchResponseDataMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionFetchResponseDataMetadata from a JSON string
transaction_fetch_response_data_metadata_instance = TransactionFetchResponseDataMetadata.from_json(json)
# print the JSON string representation of the object
print TransactionFetchResponseDataMetadata.to_json()

# convert the object into a dict
transaction_fetch_response_data_metadata_dict = transaction_fetch_response_data_metadata_instance.to_dict()
# create an instance of TransactionFetchResponseDataMetadata from a dict
transaction_fetch_response_data_metadata_form_dict = transaction_fetch_response_data_metadata.from_dict(transaction_fetch_response_data_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


