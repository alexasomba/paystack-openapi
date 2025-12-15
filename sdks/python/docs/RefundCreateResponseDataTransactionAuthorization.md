# RefundCreateResponseDataTransactionAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exp_month** | **object** |  | 
**exp_year** | **object** |  | 
**account_name** | **object** |  | 

## Example

```python
from alexasomba_paystack.models.refund_create_response_data_transaction_authorization import RefundCreateResponseDataTransactionAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of RefundCreateResponseDataTransactionAuthorization from a JSON string
refund_create_response_data_transaction_authorization_instance = RefundCreateResponseDataTransactionAuthorization.from_json(json)
# print the JSON string representation of the object
print RefundCreateResponseDataTransactionAuthorization.to_json()

# convert the object into a dict
refund_create_response_data_transaction_authorization_dict = refund_create_response_data_transaction_authorization_instance.to_dict()
# create an instance of RefundCreateResponseDataTransactionAuthorization from a dict
refund_create_response_data_transaction_authorization_form_dict = refund_create_response_data_transaction_authorization.from_dict(refund_create_response_data_transaction_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


