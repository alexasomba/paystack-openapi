# OrderValidateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_code** | **str** |  | 
**domain** | **str** |  | 
**currency** | **str** |  | 
**amount** | **int** |  | 
**email** | **str** |  | 
**status** | **str** |  | 
**refunded** | **bool** |  | 
**paid_at** | **object** |  | 
**shipping_address** | **object** |  | 
**metadata** | **object** |  | 
**shipping_fees** | **int** |  | 
**shipping_method** | **object** |  | 
**is_viewed** | **bool** |  | 
**expiration_date** | **str** |  | 
**pay_for_me** | **bool** |  | 
**id** | **int** |  | 
**integration** | [**OrderValidateResponseDataIntegration**](OrderValidateResponseDataIntegration.md) |  | 
**transaction** | **object** |  | 
**page** | **object** |  | 
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | 
**shipping** | **object** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 
**payer** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.order_validate_response_data import OrderValidateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of OrderValidateResponseData from a JSON string
order_validate_response_data_instance = OrderValidateResponseData.from_json(json)
# print the JSON string representation of the object
print OrderValidateResponseData.to_json()

# convert the object into a dict
order_validate_response_data_dict = order_validate_response_data_instance.to_dict()
# create an instance of OrderValidateResponseData from a dict
order_validate_response_data_form_dict = order_validate_response_data.from_dict(order_validate_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


