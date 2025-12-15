# BulkChargeFetchBulkBatchChargesResponseArrayCustomer


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**customer_code** | **str** |  | 
**phone** | **str** |  | 
**metadata** | [**BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata**](BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata.md) |  | 
**risk_action** | **str** |  | 
**international_format_phone** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_fetch_bulk_batch_charges_response_array_customer import BulkChargeFetchBulkBatchChargesResponseArrayCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeFetchBulkBatchChargesResponseArrayCustomer from a JSON string
bulk_charge_fetch_bulk_batch_charges_response_array_customer_instance = BulkChargeFetchBulkBatchChargesResponseArrayCustomer.from_json(json)
# print the JSON string representation of the object
print BulkChargeFetchBulkBatchChargesResponseArrayCustomer.to_json()

# convert the object into a dict
bulk_charge_fetch_bulk_batch_charges_response_array_customer_dict = bulk_charge_fetch_bulk_batch_charges_response_array_customer_instance.to_dict()
# create an instance of BulkChargeFetchBulkBatchChargesResponseArrayCustomer from a dict
bulk_charge_fetch_bulk_batch_charges_response_array_customer_form_dict = bulk_charge_fetch_bulk_batch_charges_response_array_customer.from_dict(bulk_charge_fetch_bulk_batch_charges_response_array_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


