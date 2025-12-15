# VirtualTerminalDestinationAssignResponseDataInner


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**target** | **str** |  | 
**name** | **str** |  | 
**type** | **str** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_destination_assign_response_data_inner import VirtualTerminalDestinationAssignResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalDestinationAssignResponseDataInner from a JSON string
virtual_terminal_destination_assign_response_data_inner_instance = VirtualTerminalDestinationAssignResponseDataInner.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalDestinationAssignResponseDataInner.to_json()

# convert the object into a dict
virtual_terminal_destination_assign_response_data_inner_dict = virtual_terminal_destination_assign_response_data_inner_instance.to_dict()
# create an instance of VirtualTerminalDestinationAssignResponseDataInner from a dict
virtual_terminal_destination_assign_response_data_inner_form_dict = virtual_terminal_destination_assign_response_data_inner.from_dict(virtual_terminal_destination_assign_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


