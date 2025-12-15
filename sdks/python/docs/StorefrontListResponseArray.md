# StorefrontListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**slug** | **str** |  | 
**orders_count** | **int** |  | 
**status** | **str** |  | 
**revenue** | **object** |  | 
**currency** | **str** |  | 
**products** | **List[object]** |  | 
**contacts** | **List[object]** |  | 
**social_media** | **List[object]** |  | 
**shipping_fees** | **List[object]** |  | 

## Example

```python
from alexasomba_paystack.models.storefront_list_response_array import StorefrontListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontListResponseArray from a JSON string
storefront_list_response_array_instance = StorefrontListResponseArray.from_json(json)
# print the JSON string representation of the object
print StorefrontListResponseArray.to_json()

# convert the object into a dict
storefront_list_response_array_dict = storefront_list_response_array_instance.to_dict()
# create an instance of StorefrontListResponseArray from a dict
storefront_list_response_array_form_dict = storefront_list_response_array.from_dict(storefront_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


