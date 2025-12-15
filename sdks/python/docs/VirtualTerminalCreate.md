# VirtualTerminalCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the virtual terminal | 
**destinations** | [**List[VirtualTerminalCreateDestinationsInner]**](VirtualTerminalCreateDestinationsInner.md) | Array of objects containing recipients for payment notifications for the Virtual Terminal. | 
**split_code** | **str** | Split code to associate with the virtual terminal | [optional] 
**metadata** | **object** | Additional custom data as key-value pairs | [optional] 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_create import VirtualTerminalCreate

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalCreate from a JSON string
virtual_terminal_create_instance = VirtualTerminalCreate.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalCreate.to_json()

# convert the object into a dict
virtual_terminal_create_dict = virtual_terminal_create_instance.to_dict()
# create an instance of VirtualTerminalCreate from a dict
virtual_terminal_create_form_dict = virtual_terminal_create.from_dict(virtual_terminal_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


