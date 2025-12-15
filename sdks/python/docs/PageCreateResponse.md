# PageCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**PageCreateResponseData**](PageCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.page_create_response import PageCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PageCreateResponse from a JSON string
page_create_response_instance = PageCreateResponse.from_json(json)
# print the JSON string representation of the object
print PageCreateResponse.to_json()

# convert the object into a dict
page_create_response_dict = page_create_response_instance.to_dict()
# create an instance of PageCreateResponse from a dict
page_create_response_form_dict = page_create_response.from_dict(page_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


