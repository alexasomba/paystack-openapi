# StorefrontUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.storefront_update_response import StorefrontUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontUpdateResponse from a JSON string
storefront_update_response_instance = StorefrontUpdateResponse.from_json(json)
# print the JSON string representation of the object
print StorefrontUpdateResponse.to_json()

# convert the object into a dict
storefront_update_response_dict = storefront_update_response_instance.to_dict()
# create an instance of StorefrontUpdateResponse from a dict
storefront_update_response_form_dict = storefront_update_response.from_dict(storefront_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


