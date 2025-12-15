# BankValidateRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Customer&#39;s first and last name registered with their bank | 
**account_number** | **str** | Customer&#39;s account number | 
**account_type** | **str** | The type of the customer&#39;s account number | 
**bank_code** | **str** | The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint | 
**country_code** | **str** | The two digit ISO code of the customer’s bank | 
**document_type** | **str** | Customer’s mode of identity | 
**document_number** | **str** | Customer’s mode of identity number | [optional] 

## Example

```python
from alexasomba_paystack.models.bank_validate_request import BankValidateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BankValidateRequest from a JSON string
bank_validate_request_instance = BankValidateRequest.from_json(json)
# print the JSON string representation of the object
print BankValidateRequest.to_json()

# convert the object into a dict
bank_validate_request_dict = bank_validate_request_instance.to_dict()
# create an instance of BankValidateRequest from a dict
bank_validate_request_form_dict = bank_validate_request.from_dict(bank_validate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


