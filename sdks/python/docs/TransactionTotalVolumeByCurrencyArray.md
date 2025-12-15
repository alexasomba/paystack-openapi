# TransactionTotalVolumeByCurrencyArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  | 
**amount** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_total_volume_by_currency_array import TransactionTotalVolumeByCurrencyArray

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionTotalVolumeByCurrencyArray from a JSON string
transaction_total_volume_by_currency_array_instance = TransactionTotalVolumeByCurrencyArray.from_json(json)
# print the JSON string representation of the object
print TransactionTotalVolumeByCurrencyArray.to_json()

# convert the object into a dict
transaction_total_volume_by_currency_array_dict = transaction_total_volume_by_currency_array_instance.to_dict()
# create an instance of TransactionTotalVolumeByCurrencyArray from a dict
transaction_total_volume_by_currency_array_form_dict = transaction_total_volume_by_currency_array.from_dict(transaction_total_volume_by_currency_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


