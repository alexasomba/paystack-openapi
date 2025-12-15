# SubscriptionListResponseArrayCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**customer_code** | **str** |  | 
**phone** | **str** |  | 
**metadata** | **str** |  | 
**risk_action** | **str** |  | 
**international_format_phone** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.subscription_list_response_array_customer import SubscriptionListResponseArrayCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListResponseArrayCustomer from a JSON string
subscription_list_response_array_customer_instance = SubscriptionListResponseArrayCustomer.from_json(json)
# print the JSON string representation of the object
print SubscriptionListResponseArrayCustomer.to_json()

# convert the object into a dict
subscription_list_response_array_customer_dict = subscription_list_response_array_customer_instance.to_dict()
# create an instance of SubscriptionListResponseArrayCustomer from a dict
subscription_list_response_array_customer_form_dict = subscription_list_response_array_customer.from_dict(subscription_list_response_array_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


