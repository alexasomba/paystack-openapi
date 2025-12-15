# VirtualTerminalCreateDestinationsInner


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **str** | The WhatsApp number to receive payment notifications | [optional] 
**name** | **str** | The name of the associated WhatsApp number | [optional] 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_create_destinations_inner import VirtualTerminalCreateDestinationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalCreateDestinationsInner from a JSON string
virtual_terminal_create_destinations_inner_instance = VirtualTerminalCreateDestinationsInner.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalCreateDestinationsInner.to_json()

# convert the object into a dict
virtual_terminal_create_destinations_inner_dict = virtual_terminal_create_destinations_inner_instance.to_dict()
# create an instance of VirtualTerminalCreateDestinationsInner from a dict
virtual_terminal_create_destinations_inner_form_dict = virtual_terminal_create_destinations_inner.from_dict(virtual_terminal_create_destinations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


