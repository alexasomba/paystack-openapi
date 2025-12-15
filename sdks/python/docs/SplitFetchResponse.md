# SplitFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**SplitFetchResponseData**](SplitFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.split_fetch_response import SplitFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SplitFetchResponse from a JSON string
split_fetch_response_instance = SplitFetchResponse.from_json(json)
# print the JSON string representation of the object
print SplitFetchResponse.to_json()

# convert the object into a dict
split_fetch_response_dict = split_fetch_response_instance.to_dict()
# create an instance of SplitFetchResponse from a dict
split_fetch_response_form_dict = split_fetch_response.from_dict(split_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


