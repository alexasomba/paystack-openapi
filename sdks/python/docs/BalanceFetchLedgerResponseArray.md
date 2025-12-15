# BalanceFetchLedgerResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**domain** | **str** |  | 
**balance** | **int** |  | 
**currency** | **str** |  | 
**difference** | **int** |  | 
**reason** | **str** |  | 
**model_responsible** | **str** |  | 
**model_row** | **int** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.balance_fetch_ledger_response_array import BalanceFetchLedgerResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceFetchLedgerResponseArray from a JSON string
balance_fetch_ledger_response_array_instance = BalanceFetchLedgerResponseArray.from_json(json)
# print the JSON string representation of the object
print BalanceFetchLedgerResponseArray.to_json()

# convert the object into a dict
balance_fetch_ledger_response_array_dict = balance_fetch_ledger_response_array_instance.to_dict()
# create an instance of BalanceFetchLedgerResponseArray from a dict
balance_fetch_ledger_response_array_form_dict = balance_fetch_ledger_response_array.from_dict(balance_fetch_ledger_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


