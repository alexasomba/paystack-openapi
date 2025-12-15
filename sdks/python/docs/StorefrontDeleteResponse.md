# StorefrontDeleteResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.storefront_delete_response import StorefrontDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontDeleteResponse from a JSON string
storefront_delete_response_instance = StorefrontDeleteResponse.from_json(json)
# print the JSON string representation of the object
print StorefrontDeleteResponse.to_json()

# convert the object into a dict
storefront_delete_response_dict = storefront_delete_response_instance.to_dict()
# create an instance of StorefrontDeleteResponse from a dict
storefront_delete_response_form_dict = storefront_delete_response.from_dict(storefront_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


