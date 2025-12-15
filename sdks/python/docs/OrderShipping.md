# OrderShipping

The shipping details of the order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street_line** | **str** | The address of for the delivery | 
**city** | **str** | The city of the delivery address | 
**state** | **str** | The state of the delivery address | 
**country** | **str** | The country of the delivery address | 
**shipping_fee** | **int** | The cost of delivery | 
**delivery_note** | **str** | Extra details to be aware of for the delivery | [optional] 

## Example

```python
from alexasomba_paystack.models.order_shipping import OrderShipping

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipping from a JSON string
order_shipping_instance = OrderShipping.from_json(json)
# print the JSON string representation of the object
print OrderShipping.to_json()

# convert the object into a dict
order_shipping_dict = order_shipping_instance.to_dict()
# create an instance of OrderShipping from a dict
order_shipping_form_dict = order_shipping.from_dict(order_shipping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


