# BulkChargeFetchBulkBatchChargesResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[BulkChargeFetchBulkBatchChargesResponseArray]**](BulkChargeFetchBulkBatchChargesResponseArray.md) |  | 
**meta** | [**BulkChargeFetchBulkBatchChargesResponseMeta**](BulkChargeFetchBulkBatchChargesResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_fetch_bulk_batch_charges_response import BulkChargeFetchBulkBatchChargesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeFetchBulkBatchChargesResponse from a JSON string
bulk_charge_fetch_bulk_batch_charges_response_instance = BulkChargeFetchBulkBatchChargesResponse.from_json(json)
# print the JSON string representation of the object
print BulkChargeFetchBulkBatchChargesResponse.to_json()

# convert the object into a dict
bulk_charge_fetch_bulk_batch_charges_response_dict = bulk_charge_fetch_bulk_batch_charges_response_instance.to_dict()
# create an instance of BulkChargeFetchBulkBatchChargesResponse from a dict
bulk_charge_fetch_bulk_batch_charges_response_form_dict = bulk_charge_fetch_bulk_batch_charges_response.from_dict(bulk_charge_fetch_bulk_batch_charges_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


