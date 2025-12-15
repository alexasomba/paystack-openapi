# TerminalUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.terminal_update_response import TerminalUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalUpdateResponse from a JSON string
terminal_update_response_instance = TerminalUpdateResponse.from_json(json)
# print the JSON string representation of the object
print TerminalUpdateResponse.to_json()

# convert the object into a dict
terminal_update_response_dict = terminal_update_response_instance.to_dict()
# create an instance of TerminalUpdateResponse from a dict
terminal_update_response_form_dict = terminal_update_response.from_dict(terminal_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


