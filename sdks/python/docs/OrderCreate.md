# OrderCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the customer placing the order | 
**first_name** | **str** | The customer&#39;s first name | 
**last_name** | **str** | The customer&#39;s last name | 
**phone** | **str** | The customer&#39;s mobile number | 
**currency** | **str** | Currency in which amount is set | 
**items** | [**List[OrderItems]**](OrderItems.md) |  | 
**shipping** | [**OrderShipping**](OrderShipping.md) |  | 
**is_gift** | **bool** | A flag to indicate if the order is for someone else | [optional] 
**pay_for_me** | **bool** | A flag to indicate if the someone else should pay for the order | [optional] 

## Example

```python
from alexasomba_paystack.models.order_create import OrderCreate

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCreate from a JSON string
order_create_instance = OrderCreate.from_json(json)
# print the JSON string representation of the object
print OrderCreate.to_json()

# convert the object into a dict
order_create_dict = order_create_instance.to_dict()
# create an instance of OrderCreate from a dict
order_create_form_dict = order_create.from_dict(order_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


