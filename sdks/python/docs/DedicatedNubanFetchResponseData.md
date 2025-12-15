# DedicatedNubanFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**DedicatedNubanCreateResponseDataCustomer**](DedicatedNubanCreateResponseDataCustomer.md) |  | 
**bank** | [**DedicatedNubanListResponseArrayBank**](DedicatedNubanListResponseArrayBank.md) |  | 
**id** | **int** |  | 
**account_name** | **str** |  | 
**account_number** | **str** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**currency** | **str** |  | 
**split_config** | **object** |  | 
**active** | **bool** |  | 
**assigned** | **bool** |  | 

## Example

```python
from alexasomba_paystack.models.dedicated_nuban_fetch_response_data import DedicatedNubanFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedNubanFetchResponseData from a JSON string
dedicated_nuban_fetch_response_data_instance = DedicatedNubanFetchResponseData.from_json(json)
# print the JSON string representation of the object
print DedicatedNubanFetchResponseData.to_json()

# convert the object into a dict
dedicated_nuban_fetch_response_data_dict = dedicated_nuban_fetch_response_data_instance.to_dict()
# create an instance of DedicatedNubanFetchResponseData from a dict
dedicated_nuban_fetch_response_data_form_dict = dedicated_nuban_fetch_response_data.from_dict(dedicated_nuban_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


