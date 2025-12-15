# BulkChargeFetchBulkBatchChargesResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**bulkcharge** | **int** |  | 
**customer** | [**BulkChargeFetchBulkBatchChargesResponseArrayCustomer**](BulkChargeFetchBulkBatchChargesResponseArrayCustomer.md) |  | 
**authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | 
**domain** | **str** |  | 
**amount** | **int** |  | 
**at_least** | **int** |  | 
**currency** | **str** |  | 
**reference** | **str** |  | 
**metadata** | [**TransactionFetchResponseDataMetadata**](TransactionFetchResponseDataMetadata.md) |  | 
**status** | **str** |  | 
**message** | **str** |  | 
**attempt_partial_debit** | **bool** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_fetch_bulk_batch_charges_response_array import BulkChargeFetchBulkBatchChargesResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeFetchBulkBatchChargesResponseArray from a JSON string
bulk_charge_fetch_bulk_batch_charges_response_array_instance = BulkChargeFetchBulkBatchChargesResponseArray.from_json(json)
# print the JSON string representation of the object
print BulkChargeFetchBulkBatchChargesResponseArray.to_json()

# convert the object into a dict
bulk_charge_fetch_bulk_batch_charges_response_array_dict = bulk_charge_fetch_bulk_batch_charges_response_array_instance.to_dict()
# create an instance of BulkChargeFetchBulkBatchChargesResponseArray from a dict
bulk_charge_fetch_bulk_batch_charges_response_array_form_dict = bulk_charge_fetch_bulk_batch_charges_response_array.from_dict(bulk_charge_fetch_bulk_batch_charges_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


