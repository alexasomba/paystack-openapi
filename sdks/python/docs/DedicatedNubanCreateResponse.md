# DedicatedNubanCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**DedicatedNubanCreateResponseData**](DedicatedNubanCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.dedicated_nuban_create_response import DedicatedNubanCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedNubanCreateResponse from a JSON string
dedicated_nuban_create_response_instance = DedicatedNubanCreateResponse.from_json(json)
# print the JSON string representation of the object
print DedicatedNubanCreateResponse.to_json()

# convert the object into a dict
dedicated_nuban_create_response_dict = dedicated_nuban_create_response_instance.to_dict()
# create an instance of DedicatedNubanCreateResponse from a dict
dedicated_nuban_create_response_form_dict = dedicated_nuban_create_response.from_dict(dedicated_nuban_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


