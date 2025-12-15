# TransferRecipientListResponseArrayDetails


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
from alexasomba_paystack.models.transfer_recipient_list_response_array_details import TransferRecipientListResponseArrayDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientListResponseArrayDetails from a JSON string
transfer_recipient_list_response_array_details_instance = TransferRecipientListResponseArrayDetails.from_json(json)
# print the JSON string representation of the object
print TransferRecipientListResponseArrayDetails.to_json()

# convert the object into a dict
transfer_recipient_list_response_array_details_dict = transfer_recipient_list_response_array_details_instance.to_dict()
# create an instance of TransferRecipientListResponseArrayDetails from a dict
transfer_recipient_list_response_array_details_form_dict = transfer_recipient_list_response_array_details.from_dict(transfer_recipient_list_response_array_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


