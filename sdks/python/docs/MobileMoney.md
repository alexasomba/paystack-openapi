# MobileMoney

Details of the mobile service provider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **str** | Customer&#39;s phone number | [optional] 
**provider** | **str** | The telco provider of customer&#39;s phone number. This can be fetched from the List Bank endpoint | [optional] 

## Example

```python
from alexasomba_paystack.models.mobile_money import MobileMoney

# TODO update the JSON string below
json = "{}"
# create an instance of MobileMoney from a JSON string
mobile_money_instance = MobileMoney.from_json(json)
# print the JSON string representation of the object
print MobileMoney.to_json()

# convert the object into a dict
mobile_money_dict = mobile_money_instance.to_dict()
# create an instance of MobileMoney from a dict
mobile_money_form_dict = mobile_money.from_dict(mobile_money_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


