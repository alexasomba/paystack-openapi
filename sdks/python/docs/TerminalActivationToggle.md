# TerminalActivationToggle

Model for activating and deactivating a debug Terminal

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial_number** | **str** | Device Serial Number | 

## Example

```python
from alexasomba_paystack.models.terminal_activation_toggle import TerminalActivationToggle

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalActivationToggle from a JSON string
terminal_activation_toggle_instance = TerminalActivationToggle.from_json(json)
# print the JSON string representation of the object
print TerminalActivationToggle.to_json()

# convert the object into a dict
terminal_activation_toggle_dict = terminal_activation_toggle_instance.to_dict()
# create an instance of TerminalActivationToggle from a dict
terminal_activation_toggle_form_dict = terminal_activation_toggle.from_dict(terminal_activation_toggle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


