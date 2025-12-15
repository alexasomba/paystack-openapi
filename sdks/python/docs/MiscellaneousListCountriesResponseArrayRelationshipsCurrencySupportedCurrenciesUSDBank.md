# MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSDBank


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_type** | **str** |  | 
**required_fields** | **List[str]** |  | 
**branch_code** | **bool** |  | 
**branch_code_type** | **str** |  | 
**account_name** | **bool** |  | 
**account_verification_required** | **bool** |  | 
**account_number_label** | **str** |  | 
**account_number_pattern** | [**MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesNGNBankAccountNumberPattern**](MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesNGNBankAccountNumberPattern.md) |  | 
**documents** | **List[object]** |  | 
**notices** | **List[str]** |  | 

## Example

```python
from alexasomba_paystack.models.miscellaneous_list_countries_response_array_relationships_currency_supported_currencies_usd_bank import MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSDBank

# TODO update the JSON string below
json = "{}"
# create an instance of MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSDBank from a JSON string
miscellaneous_list_countries_response_array_relationships_currency_supported_currencies_usd_bank_instance = MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSDBank.from_json(json)
# print the JSON string representation of the object
print MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSDBank.to_json()

# convert the object into a dict
miscellaneous_list_countries_response_array_relationships_currency_supported_currencies_usd_bank_dict = miscellaneous_list_countries_response_array_relationships_currency_supported_currencies_usd_bank_instance.to_dict()
# create an instance of MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSDBank from a dict
miscellaneous_list_countries_response_array_relationships_currency_supported_currencies_usd_bank_form_dict = miscellaneous_list_countries_response_array_relationships_currency_supported_currencies_usd_bank.from_dict(miscellaneous_list_countries_response_array_relationships_currency_supported_currencies_usd_bank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


