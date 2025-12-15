# SubscriptionListResponseArrayAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | **str** |  | 
**bin** | **str** |  | 
**last4** | **str** |  | 
**exp_month** | **str** |  | 
**exp_year** | **str** |  | 
**channel** | **str** |  | 
**card_type** | **str** |  | 
**bank** | **str** |  | 
**country_code** | **str** |  | 
**brand** | **str** |  | 
**reusable** | **int** |  | 
**signature** | **str** |  | 
**account_name** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.subscription_list_response_array_authorization import SubscriptionListResponseArrayAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListResponseArrayAuthorization from a JSON string
subscription_list_response_array_authorization_instance = SubscriptionListResponseArrayAuthorization.from_json(json)
# print the JSON string representation of the object
print SubscriptionListResponseArrayAuthorization.to_json()

# convert the object into a dict
subscription_list_response_array_authorization_dict = subscription_list_response_array_authorization_instance.to_dict()
# create an instance of SubscriptionListResponseArrayAuthorization from a dict
subscription_list_response_array_authorization_form_dict = subscription_list_response_array_authorization.from_dict(subscription_list_response_array_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


