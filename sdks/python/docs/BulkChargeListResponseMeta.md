# BulkChargeListResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | 
**skipped** | **int** |  | 
**per_page** | [**BulkChargeListResponseMetaPerPage**](BulkChargeListResponseMetaPerPage.md) |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_list_response_meta import BulkChargeListResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeListResponseMeta from a JSON string
bulk_charge_list_response_meta_instance = BulkChargeListResponseMeta.from_json(json)
# print the JSON string representation of the object
print BulkChargeListResponseMeta.to_json()

# convert the object into a dict
bulk_charge_list_response_meta_dict = bulk_charge_list_response_meta_instance.to_dict()
# create an instance of BulkChargeListResponseMeta from a dict
bulk_charge_list_response_meta_form_dict = bulk_charge_list_response_meta.from_dict(bulk_charge_list_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


