# PageProduct


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | **List[int]** | A list of IDs of products to add to a page. | 

## Example

```python
from alexasomba_paystack.models.page_product import PageProduct

# TODO update the JSON string below
json = "{}"
# create an instance of PageProduct from a JSON string
page_product_instance = PageProduct.from_json(json)
# print the JSON string representation of the object
print PageProduct.to_json()

# convert the object into a dict
page_product_dict = page_product_instance.to_dict()
# create an instance of PageProduct from a dict
page_product_form_dict = page_product.from_dict(page_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


