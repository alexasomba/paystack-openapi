# VirtualTerminalDestinationAssign


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[VirtualTerminalCreateDestinationsInner]**](VirtualTerminalCreateDestinationsInner.md) | Array of objects containing recipients for payment notifications for the Virtual Terminal. | 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_destination_assign import VirtualTerminalDestinationAssign

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalDestinationAssign from a JSON string
virtual_terminal_destination_assign_instance = VirtualTerminalDestinationAssign.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalDestinationAssign.to_json()

# convert the object into a dict
virtual_terminal_destination_assign_dict = virtual_terminal_destination_assign_instance.to_dict()
# create an instance of VirtualTerminalDestinationAssign from a dict
virtual_terminal_destination_assign_form_dict = virtual_terminal_destination_assign.from_dict(virtual_terminal_destination_assign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


