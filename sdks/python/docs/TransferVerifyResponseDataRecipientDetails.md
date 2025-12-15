# TransferVerifyResponseDataRecipientDetails


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | **object** |  | 
**account_number** | **str** |  | 
**account_name** | **str** |  | 
**bank_code** | **str** |  | 
**bank_name** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_verify_response_data_recipient_details import TransferVerifyResponseDataRecipientDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TransferVerifyResponseDataRecipientDetails from a JSON string
transfer_verify_response_data_recipient_details_instance = TransferVerifyResponseDataRecipientDetails.from_json(json)
# print the JSON string representation of the object
print TransferVerifyResponseDataRecipientDetails.to_json()

# convert the object into a dict
transfer_verify_response_data_recipient_details_dict = transfer_verify_response_data_recipient_details_instance.to_dict()
# create an instance of TransferVerifyResponseDataRecipientDetails from a dict
transfer_verify_response_data_recipient_details_form_dict = transfer_verify_response_data_recipient_details.from_dict(transfer_verify_response_data_recipient_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


