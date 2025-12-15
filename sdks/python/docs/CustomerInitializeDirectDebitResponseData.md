# CustomerInitializeDirectDebitResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_url** | **str** |  | 
**access_code** | **str** |  | 
**reference** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.customer_initialize_direct_debit_response_data import CustomerInitializeDirectDebitResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerInitializeDirectDebitResponseData from a JSON string
customer_initialize_direct_debit_response_data_instance = CustomerInitializeDirectDebitResponseData.from_json(json)
# print the JSON string representation of the object
print CustomerInitializeDirectDebitResponseData.to_json()

# convert the object into a dict
customer_initialize_direct_debit_response_data_dict = customer_initialize_direct_debit_response_data_instance.to_dict()
# create an instance of CustomerInitializeDirectDebitResponseData from a dict
customer_initialize_direct_debit_response_data_form_dict = customer_initialize_direct_debit_response_data.from_dict(customer_initialize_direct_debit_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


