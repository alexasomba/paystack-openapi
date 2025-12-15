# VerificationResolveCardBINResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**VerificationResolveCardBINResponseData**](VerificationResolveCardBINResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.verification_resolve_card_bin_response import VerificationResolveCardBINResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationResolveCardBINResponse from a JSON string
verification_resolve_card_bin_response_instance = VerificationResolveCardBINResponse.from_json(json)
# print the JSON string representation of the object
print VerificationResolveCardBINResponse.to_json()

# convert the object into a dict
verification_resolve_card_bin_response_dict = verification_resolve_card_bin_response_instance.to_dict()
# create an instance of VerificationResolveCardBINResponse from a dict
verification_resolve_card_bin_response_form_dict = verification_resolve_card_bin_response.from_dict(verification_resolve_card_bin_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


