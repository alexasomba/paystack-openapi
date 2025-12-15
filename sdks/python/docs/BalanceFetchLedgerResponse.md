# BalanceFetchLedgerResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[BalanceFetchLedgerResponseArray]**](BalanceFetchLedgerResponseArray.md) |  | 
**meta** | [**SubaccountListResponseMeta**](SubaccountListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.balance_fetch_ledger_response import BalanceFetchLedgerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceFetchLedgerResponse from a JSON string
balance_fetch_ledger_response_instance = BalanceFetchLedgerResponse.from_json(json)
# print the JSON string representation of the object
print BalanceFetchLedgerResponse.to_json()

# convert the object into a dict
balance_fetch_ledger_response_dict = balance_fetch_ledger_response_instance.to_dict()
# create an instance of BalanceFetchLedgerResponse from a dict
balance_fetch_ledger_response_form_dict = balance_fetch_ledger_response.from_dict(balance_fetch_ledger_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


