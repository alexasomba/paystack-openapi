# VerificationResolveCardBINResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin** | **str** |  | 
**brand** | **str** |  | 
**sub_brand** | **str** |  | 
**country_code** | **str** |  | 
**country_name** | **str** |  | 
**card_type** | **str** |  | 
**bank** | **str** |  | 
**currency** | **str** |  | 
**linked_bank_id** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.verification_resolve_card_bin_response_data import VerificationResolveCardBINResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationResolveCardBINResponseData from a JSON string
verification_resolve_card_bin_response_data_instance = VerificationResolveCardBINResponseData.from_json(json)
# print the JSON string representation of the object
print VerificationResolveCardBINResponseData.to_json()

# convert the object into a dict
verification_resolve_card_bin_response_data_dict = verification_resolve_card_bin_response_data_instance.to_dict()
# create an instance of VerificationResolveCardBINResponseData from a dict
verification_resolve_card_bin_response_data_form_dict = verification_resolve_card_bin_response_data.from_dict(verification_resolve_card_bin_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


