# PageFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PageFetchResponseData**](PageFetchResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.page_fetch_response import PageFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PageFetchResponse from a JSON string
page_fetch_response_instance = PageFetchResponse.from_json(json)
# print the JSON string representation of the object
print PageFetchResponse.to_json()

# convert the object into a dict
page_fetch_response_dict = page_fetch_response_instance.to_dict()
# create an instance of PageFetchResponse from a dict
page_fetch_response_form_dict = page_fetch_response.from_dict(page_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


