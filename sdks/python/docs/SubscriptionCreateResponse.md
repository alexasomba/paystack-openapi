# SubscriptionCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**SubscriptionCreateResponseData**](SubscriptionCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.subscription_create_response import SubscriptionCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreateResponse from a JSON string
subscription_create_response_instance = SubscriptionCreateResponse.from_json(json)
# print the JSON string representation of the object
print SubscriptionCreateResponse.to_json()

# convert the object into a dict
subscription_create_response_dict = subscription_create_response_instance.to_dict()
# create an instance of SubscriptionCreateResponse from a dict
subscription_create_response_form_dict = subscription_create_response.from_dict(subscription_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


