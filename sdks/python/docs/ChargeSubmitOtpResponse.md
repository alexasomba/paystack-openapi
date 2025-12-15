# ChargeSubmitOtpResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ChargeSubmitPinResponseData**](ChargeSubmitPinResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.charge_submit_otp_response import ChargeSubmitOtpResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitOtpResponse from a JSON string
charge_submit_otp_response_instance = ChargeSubmitOtpResponse.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitOtpResponse.to_json()

# convert the object into a dict
charge_submit_otp_response_dict = charge_submit_otp_response_instance.to_dict()
# create an instance of ChargeSubmitOtpResponse from a dict
charge_submit_otp_response_form_dict = charge_submit_otp_response.from_dict(charge_submit_otp_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


