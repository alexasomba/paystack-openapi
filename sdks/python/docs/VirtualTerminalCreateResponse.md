# VirtualTerminalCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**VirtualTerminalCreateResponseData**](VirtualTerminalCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_create_response import VirtualTerminalCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalCreateResponse from a JSON string
virtual_terminal_create_response_instance = VirtualTerminalCreateResponse.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalCreateResponse.to_json()

# convert the object into a dict
virtual_terminal_create_response_dict = virtual_terminal_create_response_instance.to_dict()
# create an instance of VirtualTerminalCreateResponse from a dict
virtual_terminal_create_response_form_dict = virtual_terminal_create_response.from_dict(virtual_terminal_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


