# TransferRecipientErrorsArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**records** | [**List[ErrorRecordsArray]**](ErrorRecordsArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.transfer_recipient_errors_array import TransferRecipientErrorsArray

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRecipientErrorsArray from a JSON string
transfer_recipient_errors_array_instance = TransferRecipientErrorsArray.from_json(json)
# print the JSON string representation of the object
print TransferRecipientErrorsArray.to_json()

# convert the object into a dict
transfer_recipient_errors_array_dict = transfer_recipient_errors_array_instance.to_dict()
# create an instance of TransferRecipientErrorsArray from a dict
transfer_recipient_errors_array_form_dict = transfer_recipient_errors_array.from_dict(transfer_recipient_errors_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


