# CustomerInitializeDirectDebitResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**CustomerInitializeDirectDebitResponseData**](CustomerInitializeDirectDebitResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.customer_initialize_direct_debit_response import CustomerInitializeDirectDebitResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerInitializeDirectDebitResponse from a JSON string
customer_initialize_direct_debit_response_instance = CustomerInitializeDirectDebitResponse.from_json(json)
# print the JSON string representation of the object
print CustomerInitializeDirectDebitResponse.to_json()

# convert the object into a dict
customer_initialize_direct_debit_response_dict = customer_initialize_direct_debit_response_instance.to_dict()
# create an instance of CustomerInitializeDirectDebitResponse from a dict
customer_initialize_direct_debit_response_form_dict = customer_initialize_direct_debit_response.from_dict(customer_initialize_direct_debit_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


