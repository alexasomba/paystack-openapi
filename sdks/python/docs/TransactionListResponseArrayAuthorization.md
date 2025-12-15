# TransactionListResponseArrayAuthorization


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
**account_name** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_list_response_array_authorization import TransactionListResponseArrayAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionListResponseArrayAuthorization from a JSON string
transaction_list_response_array_authorization_instance = TransactionListResponseArrayAuthorization.from_json(json)
# print the JSON string representation of the object
print TransactionListResponseArrayAuthorization.to_json()

# convert the object into a dict
transaction_list_response_array_authorization_dict = transaction_list_response_array_authorization_instance.to_dict()
# create an instance of TransactionListResponseArrayAuthorization from a dict
transaction_list_response_array_authorization_form_dict = transaction_list_response_array_authorization.from_dict(transaction_list_response_array_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


