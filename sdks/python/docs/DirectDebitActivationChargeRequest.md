# DirectDebitActivationChargeRequest


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_ids** | **List[int]** | Array of customer IDs to trigger activation charge for | 

## Example

```python
from alexasomba_paystack.models.direct_debit_activation_charge_request import DirectDebitActivationChargeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DirectDebitActivationChargeRequest from a JSON string
direct_debit_activation_charge_request_instance = DirectDebitActivationChargeRequest.from_json(json)
# print the JSON string representation of the object
print DirectDebitActivationChargeRequest.to_json()

# convert the object into a dict
direct_debit_activation_charge_request_dict = direct_debit_activation_charge_request_instance.to_dict()
# create an instance of DirectDebitActivationChargeRequest from a dict
direct_debit_activation_charge_request_form_dict = direct_debit_activation_charge_request.from_dict(direct_debit_activation_charge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


