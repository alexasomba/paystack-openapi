# SubscriptionDisableResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.subscription_disable_response import SubscriptionDisableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionDisableResponse from a JSON string
subscription_disable_response_instance = SubscriptionDisableResponse.from_json(json)
# print the JSON string representation of the object
print SubscriptionDisableResponse.to_json()

# convert the object into a dict
subscription_disable_response_dict = subscription_disable_response_instance.to_dict()
# create an instance of SubscriptionDisableResponse from a dict
subscription_disable_response_form_dict = subscription_disable_response.from_dict(subscription_disable_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


