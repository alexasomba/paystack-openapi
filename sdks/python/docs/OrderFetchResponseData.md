# OrderFetchResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | **List[object]** |  | 
**order_code** | **str** |  | 
**domain** | **str** |  | 
**currency** | **str** |  | 
**amount** | **int** |  | 
**email** | **str** |  | 
**status** | **str** |  | 
**refunded** | **bool** |  | 
**paid_at** | **str** |  | 
**shipping_address** | **object** |  | 
**metadata** | **object** |  | 
**shipping_fees** | **int** |  | 
**shipping_method** | **object** |  | 
**is_viewed** | **bool** |  | 
**expiration_date** | **str** |  | 
**pay_for_me** | **bool** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**page** | **object** |  | 
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**shipping** | **object** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**transaction** | **int** |  | 
**is_gift** | **bool** |  | 
**payer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**fully_refunded** | **bool** |  | 
**refunded_amount** | **int** |  | 
**items** | [**List[OrderItemsArray]**](OrderItemsArray.md) |  | 
**discount_amount** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.order_fetch_response_data import OrderFetchResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFetchResponseData from a JSON string
order_fetch_response_data_instance = OrderFetchResponseData.from_json(json)
# print the JSON string representation of the object
print OrderFetchResponseData.to_json()

# convert the object into a dict
order_fetch_response_data_dict = order_fetch_response_data_instance.to_dict()
# create an instance of OrderFetchResponseData from a dict
order_fetch_response_data_form_dict = order_fetch_response_data.from_dict(order_fetch_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


