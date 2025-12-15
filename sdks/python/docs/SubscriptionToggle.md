# SubscriptionToggle


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Subscription code | 
**token** | **str** | Email token | 

## Example

```python
from alexasomba_paystack.models.subscription_toggle import SubscriptionToggle

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionToggle from a JSON string
subscription_toggle_instance = SubscriptionToggle.from_json(json)
# print the JSON string representation of the object
print SubscriptionToggle.to_json()

# convert the object into a dict
subscription_toggle_dict = subscription_toggle_instance.to_dict()
# create an instance of SubscriptionToggle from a dict
subscription_toggle_form_dict = subscription_toggle.from_dict(subscription_toggle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


