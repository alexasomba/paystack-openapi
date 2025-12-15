# PageCheckSlugAvailabilityResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.page_check_slug_availability_response import PageCheckSlugAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PageCheckSlugAvailabilityResponse from a JSON string
page_check_slug_availability_response_instance = PageCheckSlugAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print PageCheckSlugAvailabilityResponse.to_json()

# convert the object into a dict
page_check_slug_availability_response_dict = page_check_slug_availability_response_instance.to_dict()
# create an instance of PageCheckSlugAvailabilityResponse from a dict
page_check_slug_availability_response_form_dict = page_check_slug_availability_response.from_dict(page_check_slug_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


