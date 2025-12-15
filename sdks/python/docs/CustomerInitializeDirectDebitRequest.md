# CustomerInitializeDirectDebitRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**CustomerInitializeDirectDebitAccount**](CustomerInitializeDirectDebitAccount.md) |  | 
**address** | [**CustomerInitializeDirectDebitAddress**](CustomerInitializeDirectDebitAddress.md) |  | 

## Example

```python
from alexasomba_paystack.models.customer_initialize_direct_debit_request import CustomerInitializeDirectDebitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerInitializeDirectDebitRequest from a JSON string
customer_initialize_direct_debit_request_instance = CustomerInitializeDirectDebitRequest.from_json(json)
# print the JSON string representation of the object
print CustomerInitializeDirectDebitRequest.to_json()

# convert the object into a dict
customer_initialize_direct_debit_request_dict = customer_initialize_direct_debit_request_instance.to_dict()
# create an instance of CustomerInitializeDirectDebitRequest from a dict
customer_initialize_direct_debit_request_form_dict = customer_initialize_direct_debit_request.from_dict(customer_initialize_direct_debit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


