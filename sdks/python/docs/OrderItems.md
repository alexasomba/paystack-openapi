# OrderItems

The collection of items that make up the order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | **int** | The product ID of the item | 
**type** | **str** | The type of the item. &#x60;product&#x60; is currently the acceptable value | 
**quantity** | **int** | The number of items to get | 
**amount** | **int** | The cost of the item | 

## Example

```python
from alexasomba_paystack.models.order_items import OrderItems

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItems from a JSON string
order_items_instance = OrderItems.from_json(json)
# print the JSON string representation of the object
print OrderItems.to_json()

# convert the object into a dict
order_items_dict = order_items_instance.to_dict()
# create an instance of OrderItems from a dict
order_items_form_dict = order_items.from_dict(order_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


