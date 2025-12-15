# VerifyResponseDataAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | **str** |  | [optional] 
**bin** | **object** |  | [optional] 
**last4** | **str** |  | [optional] 
**exp_month** | **str** |  | [optional] 
**exp_year** | **str** |  | [optional] 
**channel** | **str** |  | [optional] 
**card_type** | **str** |  | [optional] 
**bank** | **str** |  | [optional] 
**country_code** | **str** |  | [optional] 
**brand** | **str** |  | [optional] 
**reusable** | **bool** |  | [optional] 
**signature** | **str** |  | [optional] 
**account_name** | **object** |  | [optional] 
**receiver_bank_account_number** | **object** |  | [optional] 
**receiver_bank** | **object** |  | [optional] 

## Example

```python
from alexasomba_paystack.models.verify_response_data_authorization import VerifyResponseDataAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyResponseDataAuthorization from a JSON string
verify_response_data_authorization_instance = VerifyResponseDataAuthorization.from_json(json)
# print the JSON string representation of the object
print VerifyResponseDataAuthorization.to_json()

# convert the object into a dict
verify_response_data_authorization_dict = verify_response_data_authorization_instance.to_dict()
# create an instance of VerifyResponseDataAuthorization from a dict
verify_response_data_authorization_form_dict = verify_response_data_authorization.from_dict(verify_response_data_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


