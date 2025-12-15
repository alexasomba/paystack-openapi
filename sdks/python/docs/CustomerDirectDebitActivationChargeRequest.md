# CustomerDirectDebitActivationChargeRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_id** | **int** | The authorization ID gotten from the initiation response | 

## Example

```python
from alexasomba_paystack.models.customer_direct_debit_activation_charge_request import CustomerDirectDebitActivationChargeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerDirectDebitActivationChargeRequest from a JSON string
customer_direct_debit_activation_charge_request_instance = CustomerDirectDebitActivationChargeRequest.from_json(json)
# print the JSON string representation of the object
print CustomerDirectDebitActivationChargeRequest.to_json()

# convert the object into a dict
customer_direct_debit_activation_charge_request_dict = customer_direct_debit_activation_charge_request_instance.to_dict()
# create an instance of CustomerDirectDebitActivationChargeRequest from a dict
customer_direct_debit_activation_charge_request_form_dict = customer_direct_debit_activation_charge_request.from_dict(customer_direct_debit_activation_charge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


