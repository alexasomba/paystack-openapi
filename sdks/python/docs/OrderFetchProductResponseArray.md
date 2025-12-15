# OrderFetchProductResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **int** |  | 
**transaction** | **int** |  | 
**order_code** | **str** |  | 
**customer** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**customer_name** | **str** |  | 
**phone** | **str** |  | 
**email** | **str** |  | 
**product_code** | **str** |  | 
**product_id** | **int** |  | 
**product_name** | **str** |  | 
**price** | **int** |  | 
**quantity_sold** | **int** |  | 
**currency** | **str** |  | 
**quantity** | **int** |  | 
**variant_id** | **object** |  | 
**variant_price** | **object** |  | 
**variant_code** | **object** |  | 
**amount** | **int** |  | 
**shipping_method** | **object** |  | 
**status** | **str** |  | 
**shipping_address** | **object** |  | 
**refunded** | **bool** |  | 
**shipping** | **object** |  | 
**paid_at** | **str** |  | 
**created_at** | **str** |  | 
**is_shipped** | **bool** |  | 
**is_viewed** | **int** |  | 
**delivery_note** | **object** |  | 
**shipping_fee** | **object** |  | 
**amount_paid** | **int** |  | 
**storefront_slug** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.order_fetch_product_response_array import OrderFetchProductResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFetchProductResponseArray from a JSON string
order_fetch_product_response_array_instance = OrderFetchProductResponseArray.from_json(json)
# print the JSON string representation of the object
print OrderFetchProductResponseArray.to_json()

# convert the object into a dict
order_fetch_product_response_array_dict = order_fetch_product_response_array_instance.to_dict()
# create an instance of OrderFetchProductResponseArray from a dict
order_fetch_product_response_array_form_dict = order_fetch_product_response_array.from_dict(order_fetch_product_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


