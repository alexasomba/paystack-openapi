# OrderItemsArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_item_id** | **int** |  | 
**order_id** | **int** |  | 
**type** | **str** |  | 
**item** | **int** |  | 
**current_total_items_price** | **int** |  | 
**files** | **str** |  | 
**order** | **int** |  | 
**amount** | **int** |  | 
**quantity** | **int** |  | 
**created_at** | **str** |  | 
**name** | **str** |  | 
**product_level_type** | **str** |  | 
**product_id** | **int** |  | 
**product_success_message** | **object** |  | 
**product_redirect_url** | **object** |  | 
**ifnull_p1_expires_in_p2_expires_in** | **object** |  | 
**product_quantity_sold** | **int** |  | 
**product_notification_emails** | **object** |  | 
**ifnull_p1_metadata_p2_metadata** | **str** |  | 
**storefront_redirect_url** | **object** |  | 
**storefront_success_message** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.order_items_array import OrderItemsArray

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItemsArray from a JSON string
order_items_array_instance = OrderItemsArray.from_json(json)
# print the JSON string representation of the object
print OrderItemsArray.to_json()

# convert the object into a dict
order_items_array_dict = order_items_array_instance.to_dict()
# create an instance of OrderItemsArray from a dict
order_items_array_form_dict = order_items_array.from_dict(order_items_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


