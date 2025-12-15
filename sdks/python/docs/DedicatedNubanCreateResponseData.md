# DedicatedNubanCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank** | [**DedicatedNubanListResponseArrayBank**](DedicatedNubanListResponseArrayBank.md) |  | 
**account_name** | **str** |  | 
**account_number** | **str** |  | 
**assigned** | **bool** |  | 
**currency** | **str** |  | 
**metadata** | **object** |  | 
**active** | **bool** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**assignment** | [**DedicatedNubanCreateResponseDataAssignment**](DedicatedNubanCreateResponseDataAssignment.md) |  | 
**customer** | [**DedicatedNubanCreateResponseDataCustomer**](DedicatedNubanCreateResponseDataCustomer.md) |  | 

## Example

```python
from alexasomba_paystack.models.dedicated_nuban_create_response_data import DedicatedNubanCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedNubanCreateResponseData from a JSON string
dedicated_nuban_create_response_data_instance = DedicatedNubanCreateResponseData.from_json(json)
# print the JSON string representation of the object
print DedicatedNubanCreateResponseData.to_json()

# convert the object into a dict
dedicated_nuban_create_response_data_dict = dedicated_nuban_create_response_data_instance.to_dict()
# create an instance of DedicatedNubanCreateResponseData from a dict
dedicated_nuban_create_response_data_form_dict = dedicated_nuban_create_response_data.from_dict(dedicated_nuban_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


