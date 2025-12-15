# SplitUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**SplitFetchResponseData**](SplitFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.split_update_response import SplitUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SplitUpdateResponse from a JSON string
split_update_response_instance = SplitUpdateResponse.from_json(json)
# print the JSON string representation of the object
print SplitUpdateResponse.to_json()

# convert the object into a dict
split_update_response_dict = split_update_response_instance.to_dict()
# create an instance of SplitUpdateResponse from a dict
split_update_response_form_dict = split_update_response.from_dict(split_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


