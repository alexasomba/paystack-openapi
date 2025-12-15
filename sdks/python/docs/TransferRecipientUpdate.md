# TransferRecipientUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Recipient&#39;s name | [optional] 
**email** | **str** | Recipient&#39;s email address | [optional] 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_update import TransferRecipientUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientUpdate from a JSON string
transfer_recipient_update_instance = TransferRecipientUpdate.from_json(json)
# print the JSON string representation of the object
print TransferRecipientUpdate.to_json()

# convert the object into a dict
transfer_recipient_update_dict = transfer_recipient_update_instance.to_dict()
# create an instance of TransferRecipientUpdate from a dict
transfer_recipient_update_form_dict = transfer_recipient_update.from_dict(transfer_recipient_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


