# TerminalGetResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**TerminalGetResponseData**](TerminalGetResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.terminal_get_response import TerminalGetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalGetResponse from a JSON string
terminal_get_response_instance = TerminalGetResponse.from_json(json)
# print the JSON string representation of the object
print TerminalGetResponse.to_json()

# convert the object into a dict
terminal_get_response_dict = terminal_get_response_instance.to_dict()
# create an instance of TerminalGetResponse from a dict
terminal_get_response_form_dict = terminal_get_response.from_dict(terminal_get_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


