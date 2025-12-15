# ChargeSubmitPinResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ChargeSubmitPinResponseData**](ChargeSubmitPinResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.charge_submit_pin_response import ChargeSubmitPinResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitPinResponse from a JSON string
charge_submit_pin_response_instance = ChargeSubmitPinResponse.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitPinResponse.to_json()

# convert the object into a dict
charge_submit_pin_response_dict = charge_submit_pin_response_instance.to_dict()
# create an instance of ChargeSubmitPinResponse from a dict
charge_submit_pin_response_form_dict = charge_submit_pin_response.from_dict(charge_submit_pin_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


