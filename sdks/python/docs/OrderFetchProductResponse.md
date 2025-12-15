# OrderFetchProductResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[OrderFetchProductResponseArray]**](OrderFetchProductResponseArray.md) |  | 
**meta** | [**OrderFetchProductResponseMeta**](OrderFetchProductResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.order_fetch_product_response import OrderFetchProductResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFetchProductResponse from a JSON string
order_fetch_product_response_instance = OrderFetchProductResponse.from_json(json)
# print the JSON string representation of the object
print OrderFetchProductResponse.to_json()

# convert the object into a dict
order_fetch_product_response_dict = order_fetch_product_response_instance.to_dict()
# create an instance of OrderFetchProductResponse from a dict
order_fetch_product_response_form_dict = order_fetch_product_response.from_dict(order_fetch_product_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


