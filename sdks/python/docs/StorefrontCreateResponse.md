# StorefrontCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**StorefrontCreateResponseData**](StorefrontCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.storefront_create_response import StorefrontCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontCreateResponse from a JSON string
storefront_create_response_instance = StorefrontCreateResponse.from_json(json)
# print the JSON string representation of the object
print StorefrontCreateResponse.to_json()

# convert the object into a dict
storefront_create_response_dict = storefront_create_response_instance.to_dict()
# create an instance of StorefrontCreateResponse from a dict
storefront_create_response_form_dict = storefront_create_response.from_dict(storefront_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


