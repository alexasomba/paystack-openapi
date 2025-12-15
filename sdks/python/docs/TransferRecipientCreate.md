# TransferRecipientCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Recipient Type | 
**name** | **str** | The recipient&#39;s name according to their account registration. | 
**account_number** | **str** | Recipient&#39;s bank account number | 
**bank_code** | **str** | Recipient&#39;s bank code. You can get the list of Bank Codes by calling the List Banks endpoint | 
**description** | **str** | A description for this recipient | [optional] 
**currency** | **str** | Currency for the account receiving the transfer | [optional] 
**authorization_code** | **str** | An authorization code from a previous transaction | [optional] 
**metadata** | **object** | JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_create import TransferRecipientCreate

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientCreate from a JSON string
transfer_recipient_create_instance = TransferRecipientCreate.from_json(json)
# print the JSON string representation of the object
print TransferRecipientCreate.to_json()

# convert the object into a dict
transfer_recipient_create_dict = transfer_recipient_create_instance.to_dict()
# create an instance of TransferRecipientCreate from a dict
transfer_recipient_create_form_dict = transfer_recipient_create.from_dict(transfer_recipient_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


