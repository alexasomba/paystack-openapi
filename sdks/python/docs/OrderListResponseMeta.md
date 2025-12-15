# OrderListResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**revenue** | **object** |  | 
**skipped** | **int** |  | 
**per_page** | **int** |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.order_list_response_meta import OrderListResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of OrderListResponseMeta from a JSON string
order_list_response_meta_instance = OrderListResponseMeta.from_json(json)
# print the JSON string representation of the object
print OrderListResponseMeta.to_json()

# convert the object into a dict
order_list_response_meta_dict = order_list_response_meta_instance.to_dict()
# create an instance of OrderListResponseMeta from a dict
order_list_response_meta_form_dict = order_list_response_meta.from_dict(order_list_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


