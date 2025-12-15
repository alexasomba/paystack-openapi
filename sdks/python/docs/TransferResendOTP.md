# TransferResendOTP


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transfer_code** | **str** | The transfer code that requires an OTP validation | 
**reason** | **str** | Specify the flag to indicate the purpose of the OTP | [default to 'transfer']

## Example

```python
from alexasomba_paystack.models.transfer_resend_otp import TransferResendOTP

# TODO update the JSON string below
json = "{}"
# create an instance of TransferResendOTP from a JSON string
transfer_resend_otp_instance = TransferResendOTP.from_json(json)
# print the JSON string representation of the object
print TransferResendOTP.to_json()

# convert the object into a dict
transfer_resend_otp_dict = transfer_resend_otp_instance.to_dict()
# create an instance of TransferResendOTP from a dict
transfer_resend_otp_form_dict = transfer_resend_otp.from_dict(transfer_resend_otp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


