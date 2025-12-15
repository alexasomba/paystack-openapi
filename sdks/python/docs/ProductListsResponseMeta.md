# ProductListsResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**skipped** | **int** |  | 
**per_page** | **str** |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.product_lists_response_meta import ProductListsResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListsResponseMeta from a JSON string
product_lists_response_meta_instance = ProductListsResponseMeta.from_json(json)
# print the JSON string representation of the object
print ProductListsResponseMeta.to_json()

# convert the object into a dict
product_lists_response_meta_dict = product_lists_response_meta_instance.to_dict()
# create an instance of ProductListsResponseMeta from a dict
product_lists_response_meta_form_dict = product_lists_response_meta.from_dict(product_lists_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


