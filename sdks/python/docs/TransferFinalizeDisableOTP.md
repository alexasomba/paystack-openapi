# TransferFinalizeDisableOTP


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**otp** | **str** | OTP sent to business phone to verify disabling OTP requirement | 

## Example

```python
from alexasomba_paystack.models.transfer_finalize_disable_otp import TransferFinalizeDisableOTP

# TODO update the JSON string below
json = "{}"
# create an instance of TransferFinalizeDisableOTP from a JSON string
transfer_finalize_disable_otp_instance = TransferFinalizeDisableOTP.from_json(json)
# print the JSON string representation of the object
print TransferFinalizeDisableOTP.to_json()

# convert the object into a dict
transfer_finalize_disable_otp_dict = transfer_finalize_disable_otp_instance.to_dict()
# create an instance of TransferFinalizeDisableOTP from a dict
transfer_finalize_disable_otp_form_dict = transfer_finalize_disable_otp.from_dict(transfer_finalize_disable_otp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


