# BulkChargeFetchBulkBatchChargesResponseMeta


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**per_page** | **str** |  | 
**total** | **int** |  | 
**skipped** | **int** |  | 
**page** | **int** |  | 
**page_count** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_fetch_bulk_batch_charges_response_meta import BulkChargeFetchBulkBatchChargesResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeFetchBulkBatchChargesResponseMeta from a JSON string
bulk_charge_fetch_bulk_batch_charges_response_meta_instance = BulkChargeFetchBulkBatchChargesResponseMeta.from_json(json)
# print the JSON string representation of the object
print BulkChargeFetchBulkBatchChargesResponseMeta.to_json()

# convert the object into a dict
bulk_charge_fetch_bulk_batch_charges_response_meta_dict = bulk_charge_fetch_bulk_batch_charges_response_meta_instance.to_dict()
# create an instance of BulkChargeFetchBulkBatchChargesResponseMeta from a dict
bulk_charge_fetch_bulk_batch_charges_response_meta_form_dict = bulk_charge_fetch_bulk_batch_charges_response_meta.from_dict(bulk_charge_fetch_bulk_batch_charges_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


