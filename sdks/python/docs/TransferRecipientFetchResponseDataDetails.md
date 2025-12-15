# TransferRecipientFetchResponseDataDetails


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | 
**account_name** | **str** |  | 
**bank_code** | **str** |  | 
**bank_name** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_fetch_response_data_details import TransferRecipientFetchResponseDataDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientFetchResponseDataDetails from a JSON string
transfer_recipient_fetch_response_data_details_instance = TransferRecipientFetchResponseDataDetails.from_json(json)
# print the JSON string representation of the object
print TransferRecipientFetchResponseDataDetails.to_json()

# convert the object into a dict
transfer_recipient_fetch_response_data_details_dict = transfer_recipient_fetch_response_data_details_instance.to_dict()
# create an instance of TransferRecipientFetchResponseDataDetails from a dict
transfer_recipient_fetch_response_data_details_form_dict = transfer_recipient_fetch_response_data_details.from_dict(transfer_recipient_fetch_response_data_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


