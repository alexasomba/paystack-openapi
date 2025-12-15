# OrderCreateResponseDataShippingMethod


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** |  | 
**fee** | **int** |  | 
**currency** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.order_create_response_data_shipping_method import OrderCreateResponseDataShippingMethod

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCreateResponseDataShippingMethod from a JSON string
order_create_response_data_shipping_method_instance = OrderCreateResponseDataShippingMethod.from_json(json)
# print the JSON string representation of the object
print OrderCreateResponseDataShippingMethod.to_json()

# convert the object into a dict
order_create_response_data_shipping_method_dict = order_create_response_data_shipping_method_instance.to_dict()
# create an instance of OrderCreateResponseDataShippingMethod from a dict
order_create_response_data_shipping_method_form_dict = order_create_response_data_shipping_method.from_dict(order_create_response_data_shipping_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


