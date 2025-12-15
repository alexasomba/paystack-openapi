# PlanCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PlanCreateResponseData**](PlanCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.plan_create_response import PlanCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlanCreateResponse from a JSON string
plan_create_response_instance = PlanCreateResponse.from_json(json)
# print the JSON string representation of the object
print PlanCreateResponse.to_json()

# convert the object into a dict
plan_create_response_dict = plan_create_response_instance.to_dict()
# create an instance of PlanCreateResponse from a dict
plan_create_response_form_dict = plan_create_response.from_dict(plan_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


