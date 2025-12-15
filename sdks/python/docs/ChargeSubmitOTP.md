# ChargeSubmitOTP


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**otp** | **str** | Customer&#39;s OTP for ongoing transaction | 
**reference** | **str** | The reference of the ongoing transaction | 

## Example

```python
from alexasomba_paystack.models.charge_submit_otp import ChargeSubmitOTP

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitOTP from a JSON string
charge_submit_otp_instance = ChargeSubmitOTP.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitOTP.to_json()

# convert the object into a dict
charge_submit_otp_dict = charge_submit_otp_instance.to_dict()
# create an instance of ChargeSubmitOTP from a dict
charge_submit_otp_form_dict = charge_submit_otp.from_dict(charge_submit_otp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


