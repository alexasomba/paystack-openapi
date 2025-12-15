# TransferRecipientListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[TransferRecipientListResponseArray]**](TransferRecipientListResponseArray.md) |  | 
**meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_list_response import TransferRecipientListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientListResponse from a JSON string
transfer_recipient_list_response_instance = TransferRecipientListResponse.from_json(json)
# print the JSON string representation of the object
print TransferRecipientListResponse.to_json()

# convert the object into a dict
transfer_recipient_list_response_dict = transfer_recipient_list_response_instance.to_dict()
# create an instance of TransferRecipientListResponse from a dict
transfer_recipient_list_response_form_dict = transfer_recipient_list_response.from_dict(transfer_recipient_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


