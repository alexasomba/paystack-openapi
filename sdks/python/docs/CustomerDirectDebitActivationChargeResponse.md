# CustomerDirectDebitActivationChargeResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.customer_direct_debit_activation_charge_response import CustomerDirectDebitActivationChargeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerDirectDebitActivationChargeResponse from a JSON string
customer_direct_debit_activation_charge_response_instance = CustomerDirectDebitActivationChargeResponse.from_json(json)
# print the JSON string representation of the object
print CustomerDirectDebitActivationChargeResponse.to_json()

# convert the object into a dict
customer_direct_debit_activation_charge_response_dict = customer_direct_debit_activation_charge_response_instance.to_dict()
# create an instance of CustomerDirectDebitActivationChargeResponse from a dict
customer_direct_debit_activation_charge_response_form_dict = customer_direct_debit_activation_charge_response.from_dict(customer_direct_debit_activation_charge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


