# TransferRecipientCreateResponseData


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
**details** | [**TransferRecipientCreateResponseDataDetails**](TransferRecipientCreateResponseDataDetails.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_create_response_data import TransferRecipientCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientCreateResponseData from a JSON string
transfer_recipient_create_response_data_instance = TransferRecipientCreateResponseData.from_json(json)
# print the JSON string representation of the object
print TransferRecipientCreateResponseData.to_json()

# convert the object into a dict
transfer_recipient_create_response_data_dict = transfer_recipient_create_response_data_instance.to_dict()
# create an instance of TransferRecipientCreateResponseData from a dict
transfer_recipient_create_response_data_form_dict = transfer_recipient_create_response_data.from_dict(transfer_recipient_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


