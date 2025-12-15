# PageListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[PageListResponseArray]**](PageListResponseArray.md) |  | 
**meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.page_list_response import PageListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PageListResponse from a JSON string
page_list_response_instance = PageListResponse.from_json(json)
# print the JSON string representation of the object
print PageListResponse.to_json()

# convert the object into a dict
page_list_response_dict = page_list_response_instance.to_dict()
# create an instance of PageListResponse from a dict
page_list_response_form_dict = page_list_response.from_dict(page_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


