# TransferFinalize


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transfer_code** | **str** | The transfer code you want to finalize | 
**otp** | **str** | OTP sent to business phone to verify transfer | 

## Example

```python
from alexasomba_paystack.models.transfer_finalize import TransferFinalize

# TODO update the JSON string below
json = "{}"
# create an instance of TransferFinalize from a JSON string
transfer_finalize_instance = TransferFinalize.from_json(json)
# print the JSON string representation of the object
print TransferFinalize.to_json()

# convert the object into a dict
transfer_finalize_dict = transfer_finalize_instance.to_dict()
# create an instance of TransferFinalize from a dict
transfer_finalize_form_dict = transfer_finalize.from_dict(transfer_finalize_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


