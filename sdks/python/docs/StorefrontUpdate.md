# StorefrontUpdate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the storefront | [optional] 
**slug** | **str** | A unique identifier to access your store. Once the storefront is created, it can be accessed from https://paystack.shop/your-slug  | [optional] 
**description** | **str** | The description of the storefront | [optional] 

## Example

```python
from alexasomba_paystack.models.storefront_update import StorefrontUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontUpdate from a JSON string
storefront_update_instance = StorefrontUpdate.from_json(json)
# print the JSON string representation of the object
print StorefrontUpdate.to_json()

# convert the object into a dict
storefront_update_dict = storefront_update_instance.to_dict()
# create an instance of StorefrontUpdate from a dict
storefront_update_form_dict = storefront_update.from_dict(storefront_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


