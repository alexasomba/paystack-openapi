# TransferRecipientDeleteResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_delete_response import TransferRecipientDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientDeleteResponse from a JSON string
transfer_recipient_delete_response_instance = TransferRecipientDeleteResponse.from_json(json)
# print the JSON string representation of the object
print TransferRecipientDeleteResponse.to_json()

# convert the object into a dict
transfer_recipient_delete_response_dict = transfer_recipient_delete_response_instance.to_dict()
# create an instance of TransferRecipientDeleteResponse from a dict
transfer_recipient_delete_response_form_dict = transfer_recipient_delete_response.from_dict(transfer_recipient_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


