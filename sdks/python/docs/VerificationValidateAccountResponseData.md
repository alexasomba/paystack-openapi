# VerificationValidateAccountResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verified** | **bool** |  | 
**verification_message** | **str** |  | 
**account_accepts_debits** | **bool** |  | 
**account_accepts_credits** | **bool** |  | 
**account_open_for_more_than_three_months** | **bool** |  | 
**account_holder_match** | **bool** |  | 
**account_open** | **bool** |  | 

## Example

```python
from alexasomba_paystack.models.verification_validate_account_response_data import VerificationValidateAccountResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationValidateAccountResponseData from a JSON string
verification_validate_account_response_data_instance = VerificationValidateAccountResponseData.from_json(json)
# print the JSON string representation of the object
print VerificationValidateAccountResponseData.to_json()

# convert the object into a dict
verification_validate_account_response_data_dict = verification_validate_account_response_data_instance.to_dict()
# create an instance of VerificationValidateAccountResponseData from a dict
verification_validate_account_response_data_form_dict = verification_validate_account_response_data.from_dict(verification_validate_account_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


