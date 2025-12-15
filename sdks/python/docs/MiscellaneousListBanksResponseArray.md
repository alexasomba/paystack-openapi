# MiscellaneousListBanksResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**slug** | **str** |  | 
**code** | **str** |  | 
**longcode** | **str** |  | 
**gateway** | **str** |  | 
**pay_with_bank** | **bool** |  | 
**supports_transfer** | **bool** |  | 
**available_for_direct_debit** | **bool** |  | 
**active** | **bool** |  | 
**is_deleted** | **bool** |  | 
**country** | **str** |  | 
**currency** | **str** |  | 
**type** | **str** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.miscellaneous_list_banks_response_array import MiscellaneousListBanksResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of MiscellaneousListBanksResponseArray from a JSON string
miscellaneous_list_banks_response_array_instance = MiscellaneousListBanksResponseArray.from_json(json)
# print the JSON string representation of the object
print MiscellaneousListBanksResponseArray.to_json()

# convert the object into a dict
miscellaneous_list_banks_response_array_dict = miscellaneous_list_banks_response_array_instance.to_dict()
# create an instance of MiscellaneousListBanksResponseArray from a dict
miscellaneous_list_banks_response_array_form_dict = miscellaneous_list_banks_response_array.from_dict(miscellaneous_list_banks_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


