# TransferRecipientCreateResponseDataDetails


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | **str** |  | 
**account_number** | **str** |  | 
**account_name** | **str** |  | 
**bank_code** | **str** |  | 
**bank_name** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_create_response_data_details import TransferRecipientCreateResponseDataDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientCreateResponseDataDetails from a JSON string
transfer_recipient_create_response_data_details_instance = TransferRecipientCreateResponseDataDetails.from_json(json)
# print the JSON string representation of the object
print TransferRecipientCreateResponseDataDetails.to_json()

# convert the object into a dict
transfer_recipient_create_response_data_details_dict = transfer_recipient_create_response_data_details_instance.to_dict()
# create an instance of TransferRecipientCreateResponseDataDetails from a dict
transfer_recipient_create_response_data_details_form_dict = transfer_recipient_create_response_data_details.from_dict(transfer_recipient_create_response_data_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


