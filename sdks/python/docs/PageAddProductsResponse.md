# PageAddProductsResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PageAddProductsResponseData**](PageAddProductsResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.page_add_products_response import PageAddProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PageAddProductsResponse from a JSON string
page_add_products_response_instance = PageAddProductsResponse.from_json(json)
# print the JSON string representation of the object
print PageAddProductsResponse.to_json()

# convert the object into a dict
page_add_products_response_dict = page_add_products_response_instance.to_dict()
# create an instance of PageAddProductsResponse from a dict
page_add_products_response_form_dict = page_add_products_response.from_dict(page_add_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


