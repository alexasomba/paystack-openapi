# TerminalSendEvent


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of event to push | [optional] 
**action** | **str** | The action the Terminal needs to perform. For the invoice type, the action can either be process or view.  For the transaction type, the action can either be process or print.  | [optional] 
**data** | [**TerminalSendEventData**](TerminalSendEventData.md) |  | [optional] 

## Example

```python
from alexasomba_paystack.models.terminal_send_event import TerminalSendEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalSendEvent from a JSON string
terminal_send_event_instance = TerminalSendEvent.from_json(json)
# print the JSON string representation of the object
print TerminalSendEvent.to_json()

# convert the object into a dict
terminal_send_event_dict = terminal_send_event_instance.to_dict()
# create an instance of TerminalSendEvent from a dict
terminal_send_event_form_dict = terminal_send_event.from_dict(terminal_send_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


