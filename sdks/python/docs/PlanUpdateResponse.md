# PlanUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.plan_update_response import PlanUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlanUpdateResponse from a JSON string
plan_update_response_instance = PlanUpdateResponse.from_json(json)
# print the JSON string representation of the object
print PlanUpdateResponse.to_json()

# convert the object into a dict
plan_update_response_dict = plan_update_response_instance.to_dict()
# create an instance of PlanUpdateResponse from a dict
plan_update_response_form_dict = plan_update_response.from_dict(plan_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


