# TerminalCommissionDeviceResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.terminal_commission_device_response import TerminalCommissionDeviceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalCommissionDeviceResponse from a JSON string
terminal_commission_device_response_instance = TerminalCommissionDeviceResponse.from_json(json)
# print the JSON string representation of the object
print TerminalCommissionDeviceResponse.to_json()

# convert the object into a dict
terminal_commission_device_response_dict = terminal_commission_device_response_instance.to_dict()
# create an instance of TerminalCommissionDeviceResponse from a dict
terminal_commission_device_response_form_dict = terminal_commission_device_response.from_dict(terminal_commission_device_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


