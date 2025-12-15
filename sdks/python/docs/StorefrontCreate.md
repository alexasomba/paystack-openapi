# StorefrontCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the storefront | 
**slug** | **str** | A unique identifier to access your store. Once the storefront is created, it can be accessed from https://paystack.shop/your-slug  | 
**currency** | **str** | Currency for prices of products in your storefront. | 
**description** | **str** | The description of the storefront | [optional] 

## Example

```python
from alexasomba_paystack.models.storefront_create import StorefrontCreate

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontCreate from a JSON string
storefront_create_instance = StorefrontCreate.from_json(json)
# print the JSON string representation of the object
print StorefrontCreate.to_json()

# convert the object into a dict
storefront_create_dict = storefront_create_instance.to_dict()
# create an instance of StorefrontCreate from a dict
storefront_create_form_dict = storefront_create.from_dict(storefront_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


