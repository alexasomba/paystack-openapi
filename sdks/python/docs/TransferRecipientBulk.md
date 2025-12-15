# TransferRecipientBulk


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch** | [**List[TransferRecipientCreate]**](TransferRecipientCreate.md) | A list of transfer recipient object. | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_bulk import TransferRecipientBulk

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientBulk from a JSON string
transfer_recipient_bulk_instance = TransferRecipientBulk.from_json(json)
# print the JSON string representation of the object
print TransferRecipientBulk.to_json()

# convert the object into a dict
transfer_recipient_bulk_dict = transfer_recipient_bulk_instance.to_dict()
# create an instance of TransferRecipientBulk from a dict
transfer_recipient_bulk_form_dict = transfer_recipient_bulk.from_dict(transfer_recipient_bulk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


