# TerminalGetStatusResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TerminalGetStatusResponseData**](TerminalGetStatusResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.terminal_get_status_response import TerminalGetStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalGetStatusResponse from a JSON string
terminal_get_status_response_instance = TerminalGetStatusResponse.from_json(json)
# print the JSON string representation of the object
print TerminalGetStatusResponse.to_json()

# convert the object into a dict
terminal_get_status_response_dict = terminal_get_status_response_instance.to_dict()
# create an instance of TerminalGetStatusResponse from a dict
terminal_get_status_response_form_dict = terminal_get_status_response.from_dict(terminal_get_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


