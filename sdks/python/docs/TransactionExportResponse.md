# TransactionExportResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransactionExportResponseData**](TransactionExportResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.transaction_export_response import TransactionExportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionExportResponse from a JSON string
transaction_export_response_instance = TransactionExportResponse.from_json(json)
# print the JSON string representation of the object
print TransactionExportResponse.to_json()

# convert the object into a dict
transaction_export_response_dict = transaction_export_response_instance.to_dict()
# create an instance of TransactionExportResponse from a dict
transaction_export_response_form_dict = transaction_export_response.from_dict(transaction_export_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


