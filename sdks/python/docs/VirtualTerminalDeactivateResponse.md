# VirtualTerminalDeactivateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_deactivate_response import VirtualTerminalDeactivateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalDeactivateResponse from a JSON string
virtual_terminal_deactivate_response_instance = VirtualTerminalDeactivateResponse.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalDeactivateResponse.to_json()

# convert the object into a dict
virtual_terminal_deactivate_response_dict = virtual_terminal_deactivate_response_instance.to_dict()
# create an instance of VirtualTerminalDeactivateResponse from a dict
virtual_terminal_deactivate_response_form_dict = virtual_terminal_deactivate_response.from_dict(virtual_terminal_deactivate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


