# SplitCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**SplitCreateResponseData**](SplitCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.split_create_response import SplitCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SplitCreateResponse from a JSON string
split_create_response_instance = SplitCreateResponse.from_json(json)
# print the JSON string representation of the object
print SplitCreateResponse.to_json()

# convert the object into a dict
split_create_response_dict = split_create_response_instance.to_dict()
# create an instance of SplitCreateResponse from a dict
split_create_response_form_dict = split_create_response.from_dict(split_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


