# SubscriptionListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**domain** | **str** |  | 
**status** | **str** |  | 
**start** | **int** |  | 
**quantity** | **int** |  | 
**subscription_code** | **str** |  | 
**email_token** | **str** |  | 
**amount** | **int** |  | 
**cron_expression** | **str** |  | 
**next_payment_date** | **str** |  | 
**open_invoice** | **object** |  | 
**created_at** | **str** |  | 
**integration** | **int** |  | 
**plan** | [**SubscriptionListResponseArrayPlan**](SubscriptionListResponseArrayPlan.md) |  | 
**authorization** | [**SubscriptionListResponseArrayAuthorization**](SubscriptionListResponseArrayAuthorization.md) |  | 
**customer** | [**SubscriptionListResponseArrayCustomer**](SubscriptionListResponseArrayCustomer.md) |  | 
**invoice_limit** | **int** |  | 
**split_code** | **object** |  | 
**payments_count** | **int** |  | 
**most_recent_invoice** | **object** |  | 
**metadata** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.subscription_list_response_array import SubscriptionListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListResponseArray from a JSON string
subscription_list_response_array_instance = SubscriptionListResponseArray.from_json(json)
# print the JSON string representation of the object
print SubscriptionListResponseArray.to_json()

# convert the object into a dict
subscription_list_response_array_dict = subscription_list_response_array_instance.to_dict()
# create an instance of SubscriptionListResponseArray from a dict
subscription_list_response_array_form_dict = subscription_list_response_array.from_dict(subscription_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


