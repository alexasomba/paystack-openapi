# TransferRecipientBulkCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **List[object]** |  | 
**errors** | [**List[TransferRecipientErrorsArray]**](TransferRecipientErrorsArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_bulk_create_response_data import TransferRecipientBulkCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientBulkCreateResponseData from a JSON string
transfer_recipient_bulk_create_response_data_instance = TransferRecipientBulkCreateResponseData.from_json(json)
# print the JSON string representation of the object
print TransferRecipientBulkCreateResponseData.to_json()

# convert the object into a dict
transfer_recipient_bulk_create_response_data_dict = transfer_recipient_bulk_create_response_data_instance.to_dict()
# create an instance of TransferRecipientBulkCreateResponseData from a dict
transfer_recipient_bulk_create_response_data_form_dict = transfer_recipient_bulk_create_response_data.from_dict(transfer_recipient_bulk_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


