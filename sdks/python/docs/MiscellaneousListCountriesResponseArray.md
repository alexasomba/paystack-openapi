# MiscellaneousListCountriesResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**active_for_dashboard_onboarding** | **bool** |  | 
**name** | **str** |  | 
**iso_code** | **str** |  | 
**default_currency_code** | **str** |  | 
**integration_defaults** | **object** |  | 
**calling_code** | **str** |  | 
**pilot_mode** | **bool** |  | 
**relationships** | [**MiscellaneousListCountriesResponseArrayRelationships**](MiscellaneousListCountriesResponseArrayRelationships.md) |  | 

## Example

```python
from alexasomba_paystack.models.miscellaneous_list_countries_response_array import MiscellaneousListCountriesResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of MiscellaneousListCountriesResponseArray from a JSON string
miscellaneous_list_countries_response_array_instance = MiscellaneousListCountriesResponseArray.from_json(json)
# print the JSON string representation of the object
print MiscellaneousListCountriesResponseArray.to_json()

# convert the object into a dict
miscellaneous_list_countries_response_array_dict = miscellaneous_list_countries_response_array_instance.to_dict()
# create an instance of MiscellaneousListCountriesResponseArray from a dict
miscellaneous_list_countries_response_array_form_dict = miscellaneous_list_countries_response_array.from_dict(miscellaneous_list_countries_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


