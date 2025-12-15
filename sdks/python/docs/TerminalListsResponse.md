# TerminalListsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[TerminalListsResponseArray]**](TerminalListsResponseArray.md) |  | 
**meta** | [**TerminalListsResponseMeta**](TerminalListsResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.terminal_lists_response import TerminalListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalListsResponse from a JSON string
terminal_lists_response_instance = TerminalListsResponse.from_json(json)
# print the JSON string representation of the object
print TerminalListsResponse.to_json()

# convert the object into a dict
terminal_lists_response_dict = terminal_lists_response_instance.to_dict()
# create an instance of TerminalListsResponse from a dict
terminal_lists_response_form_dict = terminal_lists_response.from_dict(terminal_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


