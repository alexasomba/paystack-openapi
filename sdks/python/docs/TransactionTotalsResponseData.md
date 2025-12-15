# TransactionTotalsResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_transactions** | **int** |  | 
**total_volume** | **int** |  | 
**total_volume_by_currency** | [**List[TransactionTotalVolumeByCurrencyArray]**](TransactionTotalVolumeByCurrencyArray.md) |  | 
**pending_transfers** | **int** |  | 
**pending_transfers_by_currency** | [**List[TransactionPendingTransfersByCurrencyArray]**](TransactionPendingTransfersByCurrencyArray.md) |  | 

## Example

```python
from alexasomba_paystack.models.transaction_totals_response_data import TransactionTotalsResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionTotalsResponseData from a JSON string
transaction_totals_response_data_instance = TransactionTotalsResponseData.from_json(json)
# print the JSON string representation of the object
print TransactionTotalsResponseData.to_json()

# convert the object into a dict
transaction_totals_response_data_dict = transaction_totals_response_data_instance.to_dict()
# create an instance of TransactionTotalsResponseData from a dict
transaction_totals_response_data_form_dict = transaction_totals_response_data.from_dict(transaction_totals_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


