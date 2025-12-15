# TransferListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | 
**created_at** | **str** |  | 
**currency** | **str** |  | 
**domain** | **str** |  | 
**failures** | **object** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**reason** | **str** |  | 
**reference** | **str** |  | 
**source** | **str** |  | 
**source_details** | **object** |  | 
**status** | **str** |  | 
**titan_code** | **object** |  | 
**transfer_code** | **str** |  | 
**request** | **int** |  | 
**transferred_at** | **object** |  | 
**updated_at** | **str** |  | 
**recipient** | [**TransferListResponseArrayRecipient**](TransferListResponseArrayRecipient.md) |  | 
**session** | [**TransferListResponseArraySession**](TransferListResponseArraySession.md) |  | 
**fee_charged** | **int** |  | 
**fees_breakdown** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_list_response_array import TransferListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of TransferListResponseArray from a JSON string
transfer_list_response_array_instance = TransferListResponseArray.from_json(json)
# print the JSON string representation of the object
print TransferListResponseArray.to_json()

# convert the object into a dict
transfer_list_response_array_dict = transfer_list_response_array_instance.to_dict()
# create an instance of TransferListResponseArray from a dict
transfer_list_response_array_form_dict = transfer_list_response_array.from_dict(transfer_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


