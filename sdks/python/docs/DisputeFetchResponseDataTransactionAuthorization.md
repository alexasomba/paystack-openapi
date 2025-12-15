# DisputeFetchResponseDataTransactionAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiver_bank_account_number** | **object** |  | 
**receiver_bank** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.dispute_fetch_response_data_transaction_authorization import DisputeFetchResponseDataTransactionAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeFetchResponseDataTransactionAuthorization from a JSON string
dispute_fetch_response_data_transaction_authorization_instance = DisputeFetchResponseDataTransactionAuthorization.from_json(json)
# print the JSON string representation of the object
print DisputeFetchResponseDataTransactionAuthorization.to_json()

# convert the object into a dict
dispute_fetch_response_data_transaction_authorization_dict = dispute_fetch_response_data_transaction_authorization_instance.to_dict()
# create an instance of DisputeFetchResponseDataTransactionAuthorization from a dict
dispute_fetch_response_data_transaction_authorization_form_dict = dispute_fetch_response_data_transaction_authorization.from_dict(dispute_fetch_response_data_transaction_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


