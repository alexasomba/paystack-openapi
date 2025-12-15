# TransactionExportResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | 
**expires_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_export_response_data import TransactionExportResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionExportResponseData from a JSON string
transaction_export_response_data_instance = TransactionExportResponseData.from_json(json)
# print the JSON string representation of the object
print TransactionExportResponseData.to_json()

# convert the object into a dict
transaction_export_response_data_dict = transaction_export_response_data_instance.to_dict()
# create an instance of TransactionExportResponseData from a dict
transaction_export_response_data_form_dict = transaction_export_response_data.from_dict(transaction_export_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


