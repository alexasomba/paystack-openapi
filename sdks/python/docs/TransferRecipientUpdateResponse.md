# TransferRecipientUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_update_response import TransferRecipientUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientUpdateResponse from a JSON string
transfer_recipient_update_response_instance = TransferRecipientUpdateResponse.from_json(json)
# print the JSON string representation of the object
print TransferRecipientUpdateResponse.to_json()

# convert the object into a dict
transfer_recipient_update_response_dict = transfer_recipient_update_response_instance.to_dict()
# create an instance of TransferRecipientUpdateResponse from a dict
transfer_recipient_update_response_form_dict = transfer_recipient_update_response.from_dict(transfer_recipient_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


