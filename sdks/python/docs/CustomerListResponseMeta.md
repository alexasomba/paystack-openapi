# CustomerListResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**skipped** | **int** |  | 
**per_page** | [**TransactionListResponseMetaPerPage**](TransactionListResponseMetaPerPage.md) |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.customer_list_response_meta import CustomerListResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerListResponseMeta from a JSON string
customer_list_response_meta_instance = CustomerListResponseMeta.from_json(json)
# print the JSON string representation of the object
print CustomerListResponseMeta.to_json()

# convert the object into a dict
customer_list_response_meta_dict = customer_list_response_meta_instance.to_dict()
# create an instance of CustomerListResponseMeta from a dict
customer_list_response_meta_form_dict = customer_list_response_meta.from_dict(customer_list_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


