# Bank

The bank object if charging a bank account

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Customer&#39;s bank code | [optional] 
**account_number** | **str** | Customer&#39;s account number | [optional] 

## Example

```python
from alexasomba_paystack.models.bank import Bank

# TODO update the JSON string below
json = "{}"
# create an instance of Bank from a JSON string
bank_instance = Bank.from_json(json)
# print the JSON string representation of the object
print Bank.to_json()

# convert the object into a dict
bank_dict = bank_instance.to_dict()
# create an instance of Bank from a dict
bank_form_dict = bank.from_dict(bank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


