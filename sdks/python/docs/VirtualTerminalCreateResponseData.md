# VirtualTerminalCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**code** | **str** |  | 
**payment_methods** | **List[object]** |  | 
**active** | **bool** |  | 
**metadata** | **object** |  | 
**destinations** | [**List[VirtualTerminalCreateResponseDataDestinationsInner]**](VirtualTerminalCreateResponseDataDestinationsInner.md) |  | 
**currency** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_create_response_data import VirtualTerminalCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalCreateResponseData from a JSON string
virtual_terminal_create_response_data_instance = VirtualTerminalCreateResponseData.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalCreateResponseData.to_json()

# convert the object into a dict
virtual_terminal_create_response_data_dict = virtual_terminal_create_response_data_instance.to_dict()
# create an instance of VirtualTerminalCreateResponseData from a dict
virtual_terminal_create_response_data_form_dict = virtual_terminal_create_response_data.from_dict(virtual_terminal_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


