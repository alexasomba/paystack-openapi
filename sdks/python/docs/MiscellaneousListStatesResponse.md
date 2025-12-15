# MiscellaneousListStatesResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[MiscellaneousListStatesResponseArray]**](MiscellaneousListStatesResponseArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.miscellaneous_list_states_response import MiscellaneousListStatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MiscellaneousListStatesResponse from a JSON string
miscellaneous_list_states_response_instance = MiscellaneousListStatesResponse.from_json(json)
# print the JSON string representation of the object
print MiscellaneousListStatesResponse.to_json()

# convert the object into a dict
miscellaneous_list_states_response_dict = miscellaneous_list_states_response_instance.to_dict()
# create an instance of MiscellaneousListStatesResponse from a dict
miscellaneous_list_states_response_form_dict = miscellaneous_list_states_response.from_dict(miscellaneous_list_states_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


