# OrderListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**order_code** | **str** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**currency** | **str** |  | 
**amount** | **int** |  | 
**transaction** | **int** |  | 
**page** | **object** |  | 
**customer** | **int** |  | 
**customer_name** | **str** |  | 
**status** | **str** |  | 
**shipping_address** | **object** |  | 
**metadata** | **str** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**email** | **str** |  | 
**paid_at** | **str** |  | 
**shipping** | **object** |  | 
**shipping_fees** | **int** |  | 
**refunded** | **bool** |  | 
**is_viewed** | **bool** |  | 
**refunded_amount** | **object** |  | 
**discount_amount** | **object** |  | 
**discounts** | **object** |  | 
**items** | [**List[OrderItemsArray]**](OrderItemsArray.md) |  | 
**fully_refunded** | **bool** |  | 

## Example

```python
from alexasomba_paystack.models.order_list_response_array import OrderListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of OrderListResponseArray from a JSON string
order_list_response_array_instance = OrderListResponseArray.from_json(json)
# print the JSON string representation of the object
print OrderListResponseArray.to_json()

# convert the object into a dict
order_list_response_array_dict = order_list_response_array_instance.to_dict()
# create an instance of OrderListResponseArray from a dict
order_list_response_array_form_dict = order_list_response_array.from_dict(order_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


