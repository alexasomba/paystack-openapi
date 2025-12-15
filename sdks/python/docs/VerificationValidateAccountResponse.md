# VerificationValidateAccountResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**VerificationValidateAccountResponseData**](VerificationValidateAccountResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.verification_validate_account_response import VerificationValidateAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationValidateAccountResponse from a JSON string
verification_validate_account_response_instance = VerificationValidateAccountResponse.from_json(json)
# print the JSON string representation of the object
print VerificationValidateAccountResponse.to_json()

# convert the object into a dict
verification_validate_account_response_dict = verification_validate_account_response_instance.to_dict()
# create an instance of VerificationValidateAccountResponse from a dict
verification_validate_account_response_form_dict = verification_validate_account_response.from_dict(verification_validate_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


