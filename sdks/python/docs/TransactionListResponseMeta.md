# TransactionListResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**total_volume** | **float** |  | 
**skipped** | **int** |  | 
**per_page** | [**TransactionListResponseMetaPerPage**](TransactionListResponseMetaPerPage.md) |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.transaction_list_response_meta import TransactionListResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionListResponseMeta from a JSON string
transaction_list_response_meta_instance = TransactionListResponseMeta.from_json(json)
# print the JSON string representation of the object
print TransactionListResponseMeta.to_json()

# convert the object into a dict
transaction_list_response_meta_dict = transaction_list_response_meta_instance.to_dict()
# create an instance of TransactionListResponseMeta from a dict
transaction_list_response_meta_form_dict = transaction_list_response_meta.from_dict(transaction_list_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


