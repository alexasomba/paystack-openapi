# CustomerRiskAction


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | The customer code from the response of the customer creation | 
**risk_action** | **str** | This determines the fraud rules that should be applied to the customer | [optional] [default to 'default']

## Example

```python
from alexasomba_paystack.models.customer_risk_action import CustomerRiskAction

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerRiskAction from a JSON string
customer_risk_action_instance = CustomerRiskAction.from_json(json)
# print the JSON string representation of the object
print CustomerRiskAction.to_json()

# convert the object into a dict
customer_risk_action_dict = customer_risk_action_instance.to_dict()
# create an instance of CustomerRiskAction from a dict
customer_risk_action_form_dict = customer_risk_action.from_dict(customer_risk_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


