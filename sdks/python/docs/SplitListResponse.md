# SplitListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[SplitListResponseArray]**](SplitListResponseArray.md) |  | 
**meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.split_list_response import SplitListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SplitListResponse from a JSON string
split_list_response_instance = SplitListResponse.from_json(json)
# print the JSON string representation of the object
print SplitListResponse.to_json()

# convert the object into a dict
split_list_response_dict = split_list_response_instance.to_dict()
# create an instance of SplitListResponse from a dict
split_list_response_form_dict = split_list_response.from_dict(split_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


