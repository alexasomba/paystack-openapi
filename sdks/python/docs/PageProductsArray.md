# PageProductsArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **int** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**product_code** | **str** |  | 
**page** | **int** |  | 
**price** | **int** |  | 
**currency** | **str** |  | 
**quantity** | **int** |  | 
**type** | **str** |  | 
**features** | **object** |  | 
**is_shippable** | **int** |  | 
**domain** | **str** |  | 
**integration** | **int** |  | 
**active** | **int** |  | 
**in_stock** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.page_products_array import PageProductsArray

# TODO update the JSON string below
json = "{}"
# create an instance of PageProductsArray from a JSON string
page_products_array_instance = PageProductsArray.from_json(json)
# print the JSON string representation of the object
print PageProductsArray.to_json()

# convert the object into a dict
page_products_array_dict = page_products_array_instance.to_dict()
# create an instance of PageProductsArray from a dict
page_products_array_form_dict = page_products_array.from_dict(page_products_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


