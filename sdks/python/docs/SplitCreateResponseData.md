# SplitCreateResponseData


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
**bearer_subaccount** | **int** |  | [optional] 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**is_dynamic** | **bool** |  | 
**subaccounts** | [**List[SplitSubaccountsArray]**](SplitSubaccountsArray.md) |  | 
**total_subaccounts** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.split_create_response_data import SplitCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SplitCreateResponseData from a JSON string
split_create_response_data_instance = SplitCreateResponseData.from_json(json)
# print the JSON string representation of the object
print SplitCreateResponseData.to_json()

# convert the object into a dict
split_create_response_data_dict = split_create_response_data_instance.to_dict()
# create an instance of SplitCreateResponseData from a dict
split_create_response_data_form_dict = split_create_response_data.from_dict(split_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


