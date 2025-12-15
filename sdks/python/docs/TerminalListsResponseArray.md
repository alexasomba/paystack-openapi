# TerminalListsResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**serial_number** | **str** |  | 
**device_make** | **str** |  | 
**terminal_id** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**name** | **str** |  | 
**address** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.terminal_lists_response_array import TerminalListsResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalListsResponseArray from a JSON string
terminal_lists_response_array_instance = TerminalListsResponseArray.from_json(json)
# print the JSON string representation of the object
print TerminalListsResponseArray.to_json()

# convert the object into a dict
terminal_lists_response_array_dict = terminal_lists_response_array_instance.to_dict()
# create an instance of TerminalListsResponseArray from a dict
terminal_lists_response_array_form_dict = terminal_lists_response_array.from_dict(terminal_lists_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


