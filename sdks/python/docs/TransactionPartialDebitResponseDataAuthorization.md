# TransactionPartialDebitResponseDataAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | **str** |  | 
**bin** | **str** |  | 
**last4** | **str** |  | 
**exp_month** | **str** |  | 
**exp_year** | **str** |  | 
**channel** | **str** |  | 
**card_type** | **str** |  | 
**bank** | **str** |  | 
**country_code** | **str** |  | 
**brand** | **str** |  | 
**reusable** | **bool** |  | 
**signature** | **str** |  | 
**account_name** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_partial_debit_response_data_authorization import TransactionPartialDebitResponseDataAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionPartialDebitResponseDataAuthorization from a JSON string
transaction_partial_debit_response_data_authorization_instance = TransactionPartialDebitResponseDataAuthorization.from_json(json)
# print the JSON string representation of the object
print TransactionPartialDebitResponseDataAuthorization.to_json()

# convert the object into a dict
transaction_partial_debit_response_data_authorization_dict = transaction_partial_debit_response_data_authorization_instance.to_dict()
# create an instance of TransactionPartialDebitResponseDataAuthorization from a dict
transaction_partial_debit_response_data_authorization_form_dict = transaction_partial_debit_response_data_authorization.from_dict(transaction_partial_debit_response_data_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


