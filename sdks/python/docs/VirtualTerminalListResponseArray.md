# VirtualTerminalListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**code** | **str** |  | 
**name** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**payment_methods** | **List[object]** |  | 
**active** | **bool** |  | 
**created_at** | **str** |  | 
**currency** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_list_response_array import VirtualTerminalListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalListResponseArray from a JSON string
virtual_terminal_list_response_array_instance = VirtualTerminalListResponseArray.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalListResponseArray.to_json()

# convert the object into a dict
virtual_terminal_list_response_array_dict = virtual_terminal_list_response_array_instance.to_dict()
# create an instance of VirtualTerminalListResponseArray from a dict
virtual_terminal_list_response_array_form_dict = virtual_terminal_list_response_array.from_dict(virtual_terminal_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


