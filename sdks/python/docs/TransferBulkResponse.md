# TransferBulkResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[TransferBulkResponseArray]**](TransferBulkResponseArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_bulk_response import TransferBulkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferBulkResponse from a JSON string
transfer_bulk_response_instance = TransferBulkResponse.from_json(json)
# print the JSON string representation of the object
print TransferBulkResponse.to_json()

# convert the object into a dict
transfer_bulk_response_dict = transfer_bulk_response_instance.to_dict()
# create an instance of TransferBulkResponse from a dict
transfer_bulk_response_form_dict = transfer_bulk_response.from_dict(transfer_bulk_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


