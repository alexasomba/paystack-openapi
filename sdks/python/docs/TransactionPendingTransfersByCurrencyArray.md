# TransactionPendingTransfersByCurrencyArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  | 
**amount** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_pending_transfers_by_currency_array import TransactionPendingTransfersByCurrencyArray

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionPendingTransfersByCurrencyArray from a JSON string
transaction_pending_transfers_by_currency_array_instance = TransactionPendingTransfersByCurrencyArray.from_json(json)
# print the JSON string representation of the object
print TransactionPendingTransfersByCurrencyArray.to_json()

# convert the object into a dict
transaction_pending_transfers_by_currency_array_dict = transaction_pending_transfers_by_currency_array_instance.to_dict()
# create an instance of TransactionPendingTransfersByCurrencyArray from a dict
transaction_pending_transfers_by_currency_array_form_dict = transaction_pending_transfers_by_currency_array.from_dict(transaction_pending_transfers_by_currency_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


