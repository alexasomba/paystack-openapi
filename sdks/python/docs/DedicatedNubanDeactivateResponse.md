# DedicatedNubanDeactivateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**DedicatedNubanDeactivateResponseData**](DedicatedNubanDeactivateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dedicated_nuban_deactivate_response import DedicatedNubanDeactivateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedNubanDeactivateResponse from a JSON string
dedicated_nuban_deactivate_response_instance = DedicatedNubanDeactivateResponse.from_json(json)
# print the JSON string representation of the object
print DedicatedNubanDeactivateResponse.to_json()

# convert the object into a dict
dedicated_nuban_deactivate_response_dict = dedicated_nuban_deactivate_response_instance.to_dict()
# create an instance of DedicatedNubanDeactivateResponse from a dict
dedicated_nuban_deactivate_response_form_dict = dedicated_nuban_deactivate_response.from_dict(dedicated_nuban_deactivate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


