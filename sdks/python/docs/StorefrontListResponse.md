# StorefrontListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[StorefrontListResponseArray]**](StorefrontListResponseArray.md) |  | 
**meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.storefront_list_response import StorefrontListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontListResponse from a JSON string
storefront_list_response_instance = StorefrontListResponse.from_json(json)
# print the JSON string representation of the object
print StorefrontListResponse.to_json()

# convert the object into a dict
storefront_list_response_dict = storefront_list_response_instance.to_dict()
# create an instance of StorefrontListResponse from a dict
storefront_list_response_form_dict = storefront_list_response.from_dict(storefront_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


