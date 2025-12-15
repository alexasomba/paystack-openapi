# MiscellaneousListCountriesResponseArrayRelationshipsCurrency


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**data** | **List[str]** |  | 
**supported_currencies** | [**MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrencies**](MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrencies.md) |  | 

## Example

```python
from alexasomba_paystack.models.miscellaneous_list_countries_response_array_relationships_currency import MiscellaneousListCountriesResponseArrayRelationshipsCurrency

# TODO update the JSON string below
json = "{}"
# create an instance of MiscellaneousListCountriesResponseArrayRelationshipsCurrency from a JSON string
miscellaneous_list_countries_response_array_relationships_currency_instance = MiscellaneousListCountriesResponseArrayRelationshipsCurrency.from_json(json)
# print the JSON string representation of the object
print MiscellaneousListCountriesResponseArrayRelationshipsCurrency.to_json()

# convert the object into a dict
miscellaneous_list_countries_response_array_relationships_currency_dict = miscellaneous_list_countries_response_array_relationships_currency_instance.to_dict()
# create an instance of MiscellaneousListCountriesResponseArrayRelationshipsCurrency from a dict
miscellaneous_list_countries_response_array_relationships_currency_form_dict = miscellaneous_list_countries_response_array_relationships_currency.from_dict(miscellaneous_list_countries_response_array_relationships_currency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


