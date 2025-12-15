# OrderFetchProductResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity_sold** | **int** |  | 
**revenue** | **int** |  | 
**total** | **int** |  | 
**skipped** | **int** |  | 
**per_page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.order_fetch_product_response_meta import OrderFetchProductResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFetchProductResponseMeta from a JSON string
order_fetch_product_response_meta_instance = OrderFetchProductResponseMeta.from_json(json)
# print the JSON string representation of the object
print OrderFetchProductResponseMeta.to_json()

# convert the object into a dict
order_fetch_product_response_meta_dict = order_fetch_product_response_meta_instance.to_dict()
# create an instance of OrderFetchProductResponseMeta from a dict
order_fetch_product_response_meta_form_dict = order_fetch_product_response_meta.from_dict(order_fetch_product_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


