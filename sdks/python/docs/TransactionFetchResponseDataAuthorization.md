# TransactionFetchResponseDataAuthorization


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
**receiver_bank_account_number** | **object** |  | 
**receiver_bank** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_fetch_response_data_authorization import TransactionFetchResponseDataAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionFetchResponseDataAuthorization from a JSON string
transaction_fetch_response_data_authorization_instance = TransactionFetchResponseDataAuthorization.from_json(json)
# print the JSON string representation of the object
print TransactionFetchResponseDataAuthorization.to_json()

# convert the object into a dict
transaction_fetch_response_data_authorization_dict = transaction_fetch_response_data_authorization_instance.to_dict()
# create an instance of TransactionFetchResponseDataAuthorization from a dict
transaction_fetch_response_data_authorization_form_dict = transaction_fetch_response_data_authorization.from_dict(transaction_fetch_response_data_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


