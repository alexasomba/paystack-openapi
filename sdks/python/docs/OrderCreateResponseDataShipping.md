# OrderCreateResponseDataShipping


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **int** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**fees** | **int** |  | 
**delivery_note** | **object** |  | 
**street_line** | **str** |  | 
**city** | **str** |  | 
**state** | **str** |  | 
**country** | **str** |  | 
**is_shipped** | **bool** |  | 
**delivery_tracking_link** | **object** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.order_create_response_data_shipping import OrderCreateResponseDataShipping

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCreateResponseDataShipping from a JSON string
order_create_response_data_shipping_instance = OrderCreateResponseDataShipping.from_json(json)
# print the JSON string representation of the object
print OrderCreateResponseDataShipping.to_json()

# convert the object into a dict
order_create_response_data_shipping_dict = order_create_response_data_shipping_instance.to_dict()
# create an instance of OrderCreateResponseDataShipping from a dict
order_create_response_data_shipping_form_dict = order_create_response_data_shipping.from_dict(order_create_response_data_shipping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


