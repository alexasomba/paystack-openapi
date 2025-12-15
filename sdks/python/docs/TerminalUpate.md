# TerminalUpate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The new name for the Terminal | [optional] 
**address** | **str** | The new address for the Terminal | [optional] 

## Example

```python
from alexasomba_paystack.models.terminal_upate import TerminalUpate

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalUpate from a JSON string
terminal_upate_instance = TerminalUpate.from_json(json)
# print the JSON string representation of the object
print TerminalUpate.to_json()

# convert the object into a dict
terminal_upate_dict = terminal_upate_instance.to_dict()
# create an instance of TerminalUpate from a dict
terminal_upate_form_dict = terminal_upate.from_dict(terminal_upate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


