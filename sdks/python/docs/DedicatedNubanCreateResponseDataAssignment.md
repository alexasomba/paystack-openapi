# DedicatedNubanCreateResponseDataAssignment


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**assignee_id** | **int** |  | 
**assignee_type** | **str** |  | 
**expired** | **bool** |  | 
**account_type** | **str** |  | 
**assigned_at** | **str** |  | 
**expired_at** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.dedicated_nuban_create_response_data_assignment import DedicatedNubanCreateResponseDataAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedNubanCreateResponseDataAssignment from a JSON string
dedicated_nuban_create_response_data_assignment_instance = DedicatedNubanCreateResponseDataAssignment.from_json(json)
# print the JSON string representation of the object
print DedicatedNubanCreateResponseDataAssignment.to_json()

# convert the object into a dict
dedicated_nuban_create_response_data_assignment_dict = dedicated_nuban_create_response_data_assignment_instance.to_dict()
# create an instance of DedicatedNubanCreateResponseDataAssignment from a dict
dedicated_nuban_create_response_data_assignment_form_dict = dedicated_nuban_create_response_data_assignment.from_dict(dedicated_nuban_create_response_data_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


