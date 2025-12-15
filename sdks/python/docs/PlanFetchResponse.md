# PlanFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PlanFetchResponseData**](PlanFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.plan_fetch_response import PlanFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlanFetchResponse from a JSON string
plan_fetch_response_instance = PlanFetchResponse.from_json(json)
# print the JSON string representation of the object
print PlanFetchResponse.to_json()

# convert the object into a dict
plan_fetch_response_dict = plan_fetch_response_instance.to_dict()
# create an instance of PlanFetchResponse from a dict
plan_fetch_response_form_dict = plan_fetch_response.from_dict(plan_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


