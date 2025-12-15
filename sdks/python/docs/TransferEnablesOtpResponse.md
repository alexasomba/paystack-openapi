# TransferEnablesOtpResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transfer_enables_otp_response import TransferEnablesOtpResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferEnablesOtpResponse from a JSON string
transfer_enables_otp_response_instance = TransferEnablesOtpResponse.from_json(json)
# print the JSON string representation of the object
print TransferEnablesOtpResponse.to_json()

# convert the object into a dict
transfer_enables_otp_response_dict = transfer_enables_otp_response_instance.to_dict()
# create an instance of TransferEnablesOtpResponse from a dict
transfer_enables_otp_response_form_dict = transfer_enables_otp_response.from_dict(transfer_enables_otp_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


