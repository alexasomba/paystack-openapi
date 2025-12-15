# PageUpdateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PageUpdateResponseData**](PageUpdateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.page_update_response import PageUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PageUpdateResponse from a JSON string
page_update_response_instance = PageUpdateResponse.from_json(json)
# print the JSON string representation of the object
print PageUpdateResponse.to_json()

# convert the object into a dict
page_update_response_dict = page_update_response_instance.to_dict()
# create an instance of PageUpdateResponse from a dict
page_update_response_form_dict = page_update_response.from_dict(page_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


