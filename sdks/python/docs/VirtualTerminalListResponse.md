# VirtualTerminalListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**List[VirtualTerminalListResponseArray]**](VirtualTerminalListResponseArray.md) |  | [optional] 
**meta** | [**VirtualTerminalListResponseMeta**](VirtualTerminalListResponseMeta.md) |  | [optional] 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_list_response import VirtualTerminalListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalListResponse from a JSON string
virtual_terminal_list_response_instance = VirtualTerminalListResponse.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalListResponse.to_json()

# convert the object into a dict
virtual_terminal_list_response_dict = virtual_terminal_list_response_instance.to_dict()
# create an instance of VirtualTerminalListResponse from a dict
virtual_terminal_list_response_form_dict = virtual_terminal_list_response.from_dict(virtual_terminal_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


