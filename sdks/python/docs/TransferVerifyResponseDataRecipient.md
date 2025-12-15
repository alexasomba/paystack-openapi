# TransferVerifyResponseDataRecipient


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
**details** | [**TransferVerifyResponseDataRecipientDetails**](TransferVerifyResponseDataRecipientDetails.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_verify_response_data_recipient import TransferVerifyResponseDataRecipient

# TODO update the JSON string below
json = "{}"
# create an instance of TransferVerifyResponseDataRecipient from a JSON string
transfer_verify_response_data_recipient_instance = TransferVerifyResponseDataRecipient.from_json(json)
# print the JSON string representation of the object
print TransferVerifyResponseDataRecipient.to_json()

# convert the object into a dict
transfer_verify_response_data_recipient_dict = transfer_verify_response_data_recipient_instance.to_dict()
# create an instance of TransferVerifyResponseDataRecipient from a dict
transfer_verify_response_data_recipient_form_dict = transfer_verify_response_data_recipient.from_dict(transfer_verify_response_data_recipient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


