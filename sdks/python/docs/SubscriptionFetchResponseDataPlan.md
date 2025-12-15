# SubscriptionFetchResponseDataPlan


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**plan_code** | **str** |  | 
**description** | **object** |  | 
**amount** | **int** |  | 
**interval** | **str** |  | 
**send_invoices** | **bool** |  | 
**send_sms** | **bool** |  | 
**currency** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.subscription_fetch_response_data_plan import SubscriptionFetchResponseDataPlan

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionFetchResponseDataPlan from a JSON string
subscription_fetch_response_data_plan_instance = SubscriptionFetchResponseDataPlan.from_json(json)
# print the JSON string representation of the object
print SubscriptionFetchResponseDataPlan.to_json()

# convert the object into a dict
subscription_fetch_response_data_plan_dict = subscription_fetch_response_data_plan_instance.to_dict()
# create an instance of SubscriptionFetchResponseDataPlan from a dict
subscription_fetch_response_data_plan_form_dict = subscription_fetch_response_data_plan.from_dict(subscription_fetch_response_data_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


