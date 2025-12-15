# TerminalSendEventData

The parameters needed to perform the specified action

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The invoice or transaction  ID you want to push to the Terminal | [optional] 
**reference** | **str** | The offline_reference from the Payment Request response | [optional] 

## Example

```python
from alexasomba_paystack.models.terminal_send_event_data import TerminalSendEventData

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalSendEventData from a JSON string
terminal_send_event_data_instance = TerminalSendEventData.from_json(json)
# print the JSON string representation of the object
print TerminalSendEventData.to_json()

# convert the object into a dict
terminal_send_event_data_dict = terminal_send_event_data_instance.to_dict()
# create an instance of TerminalSendEventData from a dict
terminal_send_event_data_form_dict = terminal_send_event_data.from_dict(terminal_send_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


