# DisputeExportResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransactionExportResponseData**](TransactionExportResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dispute_export_response import DisputeExportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeExportResponse from a JSON string
dispute_export_response_instance = DisputeExportResponse.from_json(json)
# print the JSON string representation of the object
print DisputeExportResponse.to_json()

# convert the object into a dict
dispute_export_response_dict = dispute_export_response_instance.to_dict()
# create an instance of DisputeExportResponse from a dict
dispute_export_response_form_dict = dispute_export_response.from_dict(dispute_export_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


