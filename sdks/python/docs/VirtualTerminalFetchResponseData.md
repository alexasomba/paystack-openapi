# VirtualTerminalFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**code** | **str** |  | 
**name** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**payment_methods** | **List[object]** |  | 
**active** | **bool** |  | 
**created_at** | **str** |  | 
**connect_account_id** | **object** |  | 
**destinations** | [**List[VirtualTerminalFetchResponseDataDestinationsInner]**](VirtualTerminalFetchResponseDataDestinationsInner.md) |  | 
**currency** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_fetch_response_data import VirtualTerminalFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalFetchResponseData from a JSON string
virtual_terminal_fetch_response_data_instance = VirtualTerminalFetchResponseData.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalFetchResponseData.to_json()

# convert the object into a dict
virtual_terminal_fetch_response_data_dict = virtual_terminal_fetch_response_data_instance.to_dict()
# create an instance of VirtualTerminalFetchResponseData from a dict
virtual_terminal_fetch_response_data_form_dict = virtual_terminal_fetch_response_data.from_dict(virtual_terminal_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


