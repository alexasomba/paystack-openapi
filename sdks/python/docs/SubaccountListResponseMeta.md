# SubaccountListResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**skipped** | **int** |  | 
**per_page** | **int** |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.subaccount_list_response_meta import SubaccountListResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountListResponseMeta from a JSON string
subaccount_list_response_meta_instance = SubaccountListResponseMeta.from_json(json)
# print the JSON string representation of the object
print SubaccountListResponseMeta.to_json()

# convert the object into a dict
subaccount_list_response_meta_dict = subaccount_list_response_meta_instance.to_dict()
# create an instance of SubaccountListResponseMeta from a dict
subaccount_list_response_meta_form_dict = subaccount_list_response_meta.from_dict(subaccount_list_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


