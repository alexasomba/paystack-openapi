# StorefrontAddProducts


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | **List[int]** | An array of product IDs | 

## Example

```python
from alexasomba_paystack.models.storefront_add_products import StorefrontAddProducts

# TODO update the JSON string below
json = "{}"
# create an instance of StorefrontAddProducts from a JSON string
storefront_add_products_instance = StorefrontAddProducts.from_json(json)
# print the JSON string representation of the object
print StorefrontAddProducts.to_json()

# convert the object into a dict
storefront_add_products_dict = storefront_add_products_instance.to_dict()
# create an instance of StorefrontAddProducts from a dict
storefront_add_products_form_dict = storefront_add_products.from_dict(storefront_add_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


