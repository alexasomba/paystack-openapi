# OrderCreateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | **List[object]** |  | 
**currency** | **str** |  | 
**shipping_address** | **object** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**email** | **str** |  | 
**customer** | **int** |  | 
**amount** | **int** |  | 
**pay_for_me** | **bool** |  | 
**shipping** | [**OrderCreateResponseDataShipping**](OrderCreateResponseDataShipping.md) |  | 
**shipping_fees** | **int** |  | 
**shipping_method** | [**OrderCreateResponseDataShippingMethod**](OrderCreateResponseDataShippingMethod.md) |  | [optional] 
**metadata** | **object** |  | 
**order_code** | **str** |  | 
**status** | **str** |  | 
**refunded** | **bool** |  | 
**is_viewed** | **bool** |  | 
**expiration_date** | **object** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**items** | **List[object]** |  | 
**pay_for_me_code** | **str** |  | 
**discount_amount** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.order_create_response_data import OrderCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCreateResponseData from a JSON string
order_create_response_data_instance = OrderCreateResponseData.from_json(json)
# print the JSON string representation of the object
print OrderCreateResponseData.to_json()

# convert the object into a dict
order_create_response_data_dict = order_create_response_data_instance.to_dict()
# create an instance of OrderCreateResponseData from a dict
order_create_response_data_form_dict = order_create_response_data.from_dict(order_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


