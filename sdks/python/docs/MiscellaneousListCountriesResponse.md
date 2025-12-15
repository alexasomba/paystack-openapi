# MiscellaneousListCountriesResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[MiscellaneousListCountriesResponseArray]**](MiscellaneousListCountriesResponseArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.miscellaneous_list_countries_response import MiscellaneousListCountriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MiscellaneousListCountriesResponse from a JSON string
miscellaneous_list_countries_response_instance = MiscellaneousListCountriesResponse.from_json(json)
# print the JSON string representation of the object
print MiscellaneousListCountriesResponse.to_json()

# convert the object into a dict
miscellaneous_list_countries_response_dict = miscellaneous_list_countries_response_instance.to_dict()
# create an instance of MiscellaneousListCountriesResponse from a dict
miscellaneous_list_countries_response_form_dict = miscellaneous_list_countries_response.from_dict(miscellaneous_list_countries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


