# MiscellaneousListCountriesResponseArrayRelationships


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**MiscellaneousListCountriesResponseArrayRelationshipsCurrency**](MiscellaneousListCountriesResponseArrayRelationshipsCurrency.md) |  | 
**integration_feature** | [**MiscellaneousListCountriesResponseArrayRelationshipsIntegrationFeature**](MiscellaneousListCountriesResponseArrayRelationshipsIntegrationFeature.md) |  | 
**integration_type** | [**MiscellaneousListCountriesResponseArrayRelationshipsIntegrationType**](MiscellaneousListCountriesResponseArrayRelationshipsIntegrationType.md) |  | 
**payment_method** | [**MiscellaneousListCountriesResponseArrayRelationshipsIntegrationType**](MiscellaneousListCountriesResponseArrayRelationshipsIntegrationType.md) |  | 

## Example

```python
from alexasomba_paystack.models.miscellaneous_list_countries_response_array_relationships import MiscellaneousListCountriesResponseArrayRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of MiscellaneousListCountriesResponseArrayRelationships from a JSON string
miscellaneous_list_countries_response_array_relationships_instance = MiscellaneousListCountriesResponseArrayRelationships.from_json(json)
# print the JSON string representation of the object
print MiscellaneousListCountriesResponseArrayRelationships.to_json()

# convert the object into a dict
miscellaneous_list_countries_response_array_relationships_dict = miscellaneous_list_countries_response_array_relationships_instance.to_dict()
# create an instance of MiscellaneousListCountriesResponseArrayRelationships from a dict
miscellaneous_list_countries_response_array_relationships_form_dict = miscellaneous_list_countries_response_array_relationships.from_dict(miscellaneous_list_countries_response_array_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


