# TransactionListResponseArrayCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**phone** | **str** |  | 
**metadata** | **object** |  | 
**customer_code** | **str** |  | 
**risk_action** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_list_response_array_customer import TransactionListResponseArrayCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionListResponseArrayCustomer from a JSON string
transaction_list_response_array_customer_instance = TransactionListResponseArrayCustomer.from_json(json)
# print the JSON string representation of the object
print TransactionListResponseArrayCustomer.to_json()

# convert the object into a dict
transaction_list_response_array_customer_dict = transaction_list_response_array_customer_instance.to_dict()
# create an instance of TransactionListResponseArrayCustomer from a dict
transaction_list_response_array_customer_form_dict = transaction_list_response_array_customer.from_dict(transaction_list_response_array_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


