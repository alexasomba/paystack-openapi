# TransactionPartialDebitResponseDataCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**customer_code** | **str** |  | 
**phone** | **str** |  | 
**metadata** | **object** |  | 
**risk_action** | **str** |  | 
**international_format_phone** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_partial_debit_response_data_customer import TransactionPartialDebitResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionPartialDebitResponseDataCustomer from a JSON string
transaction_partial_debit_response_data_customer_instance = TransactionPartialDebitResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print TransactionPartialDebitResponseDataCustomer.to_json()

# convert the object into a dict
transaction_partial_debit_response_data_customer_dict = transaction_partial_debit_response_data_customer_instance.to_dict()
# create an instance of TransactionPartialDebitResponseDataCustomer from a dict
transaction_partial_debit_response_data_customer_form_dict = transaction_partial_debit_response_data_customer.from_dict(transaction_partial_debit_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


