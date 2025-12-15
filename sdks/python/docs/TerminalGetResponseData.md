# TerminalGetResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**serial_number** | **str** |  | 
**device_make** | **str** |  | 
**terminal_id** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**name** | **str** |  | 
**address** | **str** |  | 
**status** | **str** |  | 
**split_code** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.terminal_get_response_data import TerminalGetResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalGetResponseData from a JSON string
terminal_get_response_data_instance = TerminalGetResponseData.from_json(json)
# print the JSON string representation of the object
print TerminalGetResponseData.to_json()

# convert the object into a dict
terminal_get_response_data_dict = terminal_get_response_data_instance.to_dict()
# create an instance of TerminalGetResponseData from a dict
terminal_get_response_data_form_dict = terminal_get_response_data.from_dict(terminal_get_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


