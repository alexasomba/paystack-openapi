# TransferListResponseArrayRecipient


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | 
**created_at** | **str** |  | 
**currency** | **str** |  | 
**description** | **str** |  | 
**domain** | **str** |  | 
**email** | **str** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**metadata** | **object** |  | [optional] 
**name** | **str** |  | 
**recipient_code** | **str** |  | 
**type** | **str** |  | 
**updated_at** | **str** |  | 
**is_deleted** | **bool** |  | 
**details** | [**TransferListResponseArrayRecipientDetails**](TransferListResponseArrayRecipientDetails.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_list_response_array_recipient import TransferListResponseArrayRecipient

# TODO update the JSON string below
json = "{}"
# create an instance of TransferListResponseArrayRecipient from a JSON string
transfer_list_response_array_recipient_instance = TransferListResponseArrayRecipient.from_json(json)
# print the JSON string representation of the object
print TransferListResponseArrayRecipient.to_json()

# convert the object into a dict
transfer_list_response_array_recipient_dict = transfer_list_response_array_recipient_instance.to_dict()
# create an instance of TransferListResponseArrayRecipient from a dict
transfer_list_response_array_recipient_form_dict = transfer_list_response_array_recipient.from_dict(transfer_list_response_array_recipient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


