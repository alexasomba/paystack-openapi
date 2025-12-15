# TransferBulkResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference** | **str** |  | 
**recipient** | **str** |  | 
**amount** | **int** |  | 
**transfer_code** | **str** |  | 
**currency** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_bulk_response_array import TransferBulkResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of TransferBulkResponseArray from a JSON string
transfer_bulk_response_array_instance = TransferBulkResponseArray.from_json(json)
# print the JSON string representation of the object
print TransferBulkResponseArray.to_json()

# convert the object into a dict
transfer_bulk_response_array_dict = transfer_bulk_response_array_instance.to_dict()
# create an instance of TransferBulkResponseArray from a dict
transfer_bulk_response_array_form_dict = transfer_bulk_response_array.from_dict(transfer_bulk_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


