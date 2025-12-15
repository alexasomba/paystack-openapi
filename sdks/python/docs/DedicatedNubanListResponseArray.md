# DedicatedNubanListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**DedicatedNubanListResponseArrayCustomer**](DedicatedNubanListResponseArrayCustomer.md) |  | 
**bank** | [**DedicatedNubanListResponseArrayBank**](DedicatedNubanListResponseArrayBank.md) |  | 
**id** | **int** |  | 
**account_name** | **str** |  | 
**account_number** | **str** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**currency** | **str** |  | 
**split_config** | [**DedicatedNubanListResponseArraySplitConfig**](DedicatedNubanListResponseArraySplitConfig.md) |  | 
**active** | **bool** |  | 
**assigned** | **bool** |  | 

## Example

```python
from alexasomba_paystack.models.dedicated_nuban_list_response_array import DedicatedNubanListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedNubanListResponseArray from a JSON string
dedicated_nuban_list_response_array_instance = DedicatedNubanListResponseArray.from_json(json)
# print the JSON string representation of the object
print DedicatedNubanListResponseArray.to_json()

# convert the object into a dict
dedicated_nuban_list_response_array_dict = dedicated_nuban_list_response_array_instance.to_dict()
# create an instance of DedicatedNubanListResponseArray from a dict
dedicated_nuban_list_response_array_form_dict = dedicated_nuban_list_response_array.from_dict(dedicated_nuban_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


