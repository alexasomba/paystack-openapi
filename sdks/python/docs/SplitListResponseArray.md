# SplitListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**type** | **str** |  | 
**currency** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**split_code** | **str** |  | 
**active** | **bool** |  | 
**bearer_type** | **str** |  | 
**bearer_subaccount** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**is_dynamic** | **bool** |  | 
**subaccounts** | [**List[SplitSubaccountsArray]**](SplitSubaccountsArray.md) |  | 
**total_subaccounts** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.split_list_response_array import SplitListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of SplitListResponseArray from a JSON string
split_list_response_array_instance = SplitListResponseArray.from_json(json)
# print the JSON string representation of the object
print SplitListResponseArray.to_json()

# convert the object into a dict
split_list_response_array_dict = split_list_response_array_instance.to_dict()
# create an instance of SplitListResponseArray from a dict
split_list_response_array_form_dict = split_list_response_array.from_dict(split_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


