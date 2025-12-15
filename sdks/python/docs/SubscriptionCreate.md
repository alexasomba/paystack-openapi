# SubscriptionCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Customer&#39;s email address or customer code | 
**plan** | **str** | Plan code | 
**authorization** | **str** | If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here.  If this is not supplied, the customer&#39;s most recent authorization would be used | [optional] 
**start_date** | **datetime** | Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00 | [optional] 

## Example

```python
from alexasomba_paystack.models.subscription_create import SubscriptionCreate

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreate from a JSON string
subscription_create_instance = SubscriptionCreate.from_json(json)
# print the JSON string representation of the object
print SubscriptionCreate.to_json()

# convert the object into a dict
subscription_create_dict = subscription_create_instance.to_dict()
# create an instance of SubscriptionCreate from a dict
subscription_create_form_dict = subscription_create.from_dict(subscription_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


