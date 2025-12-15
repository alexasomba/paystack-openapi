# SubscriptionListResponseArrayPlan


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**name** | **str** |  | 
**plan_code** | **str** |  | 
**description** | **object** |  | 
**amount** | **int** |  | 
**interval** | **str** |  | 
**send_invoices** | **bool** |  | 
**send_sms** | **bool** |  | 
**currency** | **str** |  | 
**integration** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.subscription_list_response_array_plan import SubscriptionListResponseArrayPlan

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListResponseArrayPlan from a JSON string
subscription_list_response_array_plan_instance = SubscriptionListResponseArrayPlan.from_json(json)
# print the JSON string representation of the object
print SubscriptionListResponseArrayPlan.to_json()

# convert the object into a dict
subscription_list_response_array_plan_dict = subscription_list_response_array_plan_instance.to_dict()
# create an instance of SubscriptionListResponseArrayPlan from a dict
subscription_list_response_array_plan_form_dict = subscription_list_response_array_plan.from_dict(subscription_list_response_array_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


