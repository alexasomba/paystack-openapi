# DirectDebitActivationChargeResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.direct_debit_activation_charge_response import DirectDebitActivationChargeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DirectDebitActivationChargeResponse from a JSON string
direct_debit_activation_charge_response_instance = DirectDebitActivationChargeResponse.from_json(json)
# print the JSON string representation of the object
print DirectDebitActivationChargeResponse.to_json()

# convert the object into a dict
direct_debit_activation_charge_response_dict = direct_debit_activation_charge_response_instance.to_dict()
# create an instance of DirectDebitActivationChargeResponse from a dict
direct_debit_activation_charge_response_form_dict = direct_debit_activation_charge_response.from_dict(direct_debit_activation_charge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


