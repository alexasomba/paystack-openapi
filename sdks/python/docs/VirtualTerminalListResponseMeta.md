# VirtualTerminalListResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**skipped** | **int** |  | [optional] 
**per_page** | [**TransactionListResponseMetaPerPage**](TransactionListResponseMetaPerPage.md) |  | [optional] 
**page** | **int** |  | [optional] 
**page_count** | **int** |  | [optional] 

## Example

```python
from alexasomba_paystack.models.virtual_terminal_list_response_meta import VirtualTerminalListResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTerminalListResponseMeta from a JSON string
virtual_terminal_list_response_meta_instance = VirtualTerminalListResponseMeta.from_json(json)
# print the JSON string representation of the object
print VirtualTerminalListResponseMeta.to_json()

# convert the object into a dict
virtual_terminal_list_response_meta_dict = virtual_terminal_list_response_meta_instance.to_dict()
# create an instance of VirtualTerminalListResponseMeta from a dict
virtual_terminal_list_response_meta_form_dict = virtual_terminal_list_response_meta.from_dict(virtual_terminal_list_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


