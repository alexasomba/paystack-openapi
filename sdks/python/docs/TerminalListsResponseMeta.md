# TerminalListsResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next** | **str** |  | 
**previous** | **str** |  | 
**per_page** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.terminal_lists_response_meta import TerminalListsResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalListsResponseMeta from a JSON string
terminal_lists_response_meta_instance = TerminalListsResponseMeta.from_json(json)
# print the JSON string representation of the object
print TerminalListsResponseMeta.to_json()

# convert the object into a dict
terminal_lists_response_meta_dict = terminal_lists_response_meta_instance.to_dict()
# create an instance of TerminalListsResponseMeta from a dict
terminal_lists_response_meta_form_dict = terminal_lists_response_meta.from_dict(terminal_lists_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


