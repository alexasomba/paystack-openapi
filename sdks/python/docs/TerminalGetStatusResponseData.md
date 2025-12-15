# TerminalGetStatusResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**online** | **bool** |  | 
**available** | **bool** |  | 

## Example

```python
from alexasomba_paystack.models.terminal_get_status_response_data import TerminalGetStatusResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalGetStatusResponseData from a JSON string
terminal_get_status_response_data_instance = TerminalGetStatusResponseData.from_json(json)
# print the JSON string representation of the object
print TerminalGetStatusResponseData.to_json()

# convert the object into a dict
terminal_get_status_response_data_dict = terminal_get_status_response_data_instance.to_dict()
# create an instance of TerminalGetStatusResponseData from a dict
terminal_get_status_response_data_form_dict = terminal_get_status_response_data.from_dict(terminal_get_status_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


