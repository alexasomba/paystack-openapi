# TransactionFetchResponseDataCustomer


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
from alexasomba_paystack.models.transaction_fetch_response_data_customer import TransactionFetchResponseDataCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionFetchResponseDataCustomer from a JSON string
transaction_fetch_response_data_customer_instance = TransactionFetchResponseDataCustomer.from_json(json)
# print the JSON string representation of the object
print TransactionFetchResponseDataCustomer.to_json()

# convert the object into a dict
transaction_fetch_response_data_customer_dict = transaction_fetch_response_data_customer_instance.to_dict()
# create an instance of TransactionFetchResponseDataCustomer from a dict
transaction_fetch_response_data_customer_form_dict = transaction_fetch_response_data_customer.from_dict(transaction_fetch_response_data_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


