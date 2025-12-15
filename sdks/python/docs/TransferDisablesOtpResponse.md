# TransferDisablesOtpResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_disables_otp_response import TransferDisablesOtpResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferDisablesOtpResponse from a JSON string
transfer_disables_otp_response_instance = TransferDisablesOtpResponse.from_json(json)
# print the JSON string representation of the object
print TransferDisablesOtpResponse.to_json()

# convert the object into a dict
transfer_disables_otp_response_dict = transfer_disables_otp_response_instance.to_dict()
# create an instance of TransferDisablesOtpResponse from a dict
transfer_disables_otp_response_form_dict = transfer_disables_otp_response.from_dict(transfer_disables_otp_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


