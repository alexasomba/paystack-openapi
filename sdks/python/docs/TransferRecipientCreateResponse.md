# TransferRecipientCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TransferRecipientCreateResponseData**](TransferRecipientCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_create_response import TransferRecipientCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientCreateResponse from a JSON string
transfer_recipient_create_response_instance = TransferRecipientCreateResponse.from_json(json)
# print the JSON string representation of the object
print TransferRecipientCreateResponse.to_json()

# convert the object into a dict
transfer_recipient_create_response_dict = transfer_recipient_create_response_instance.to_dict()
# create an instance of TransferRecipientCreateResponse from a dict
transfer_recipient_create_response_form_dict = transfer_recipient_create_response.from_dict(transfer_recipient_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


