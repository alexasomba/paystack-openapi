# TerminalDecommissionDeviceResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.terminal_decommission_device_response import TerminalDecommissionDeviceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalDecommissionDeviceResponse from a JSON string
terminal_decommission_device_response_instance = TerminalDecommissionDeviceResponse.from_json(json)
# print the JSON string representation of the object
print TerminalDecommissionDeviceResponse.to_json()

# convert the object into a dict
terminal_decommission_device_response_dict = terminal_decommission_device_response_instance.to_dict()
# create an instance of TerminalDecommissionDeviceResponse from a dict
terminal_decommission_device_response_form_dict = terminal_decommission_device_response.from_dict(terminal_decommission_device_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


