# VerificationResolveAccountNumberResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | 
**account_name** | **str** |  | 
**bank_id** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.verification_resolve_account_number_response_data import VerificationResolveAccountNumberResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationResolveAccountNumberResponseData from a JSON string
verification_resolve_account_number_response_data_instance = VerificationResolveAccountNumberResponseData.from_json(json)
# print the JSON string representation of the object
print VerificationResolveAccountNumberResponseData.to_json()

# convert the object into a dict
verification_resolve_account_number_response_data_dict = verification_resolve_account_number_response_data_instance.to_dict()
# create an instance of VerificationResolveAccountNumberResponseData from a dict
verification_resolve_account_number_response_data_form_dict = verification_resolve_account_number_response_data.from_dict(verification_resolve_account_number_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


