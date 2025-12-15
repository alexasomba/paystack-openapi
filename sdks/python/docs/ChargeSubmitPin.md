# ChargeSubmitPin


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pin** | **str** | Customer&#39;s PIN for the ongoing transaction | 
**reference** | **str** | Transaction reference that requires the PIN | 

## Example

```python
from alexasomba_paystack.models.charge_submit_pin import ChargeSubmitPin

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitPin from a JSON string
charge_submit_pin_instance = ChargeSubmitPin.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitPin.to_json()

# convert the object into a dict
charge_submit_pin_dict = charge_submit_pin_instance.to_dict()
# create an instance of ChargeSubmitPin from a dict
charge_submit_pin_form_dict = charge_submit_pin.from_dict(charge_submit_pin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


