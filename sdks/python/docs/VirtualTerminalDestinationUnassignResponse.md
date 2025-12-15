# VirtualTerminalDestinationUnassignResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_destination_unassign_response import VirtualTerminalDestinationUnassignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalDestinationUnassignResponse from a JSON string
virtual_terminal_destination_unassign_response_instance = VirtualTerminalDestinationUnassignResponse.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalDestinationUnassignResponse.to_json()

# convert the object into a dict
virtual_terminal_destination_unassign_response_dict = virtual_terminal_destination_unassign_response_instance.to_dict()
# create an instance of VirtualTerminalDestinationUnassignResponse from a dict
virtual_terminal_destination_unassign_response_form_dict = virtual_terminal_destination_unassign_response.from_dict(virtual_terminal_destination_unassign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


