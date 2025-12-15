# BulkChargeInitiateResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_code** | **str** |  | 
**reference** | **str** |  | 
**id** | **int** |  | 
**integration** | **int** |  | 
**domain** | **str** |  | 
**status** | **str** |  | 
**total_charges** | **int** |  | 
**pending_charges** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_initiate_response_data import BulkChargeInitiateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeInitiateResponseData from a JSON string
bulk_charge_initiate_response_data_instance = BulkChargeInitiateResponseData.from_json(json)
# print the JSON string representation of the object
print BulkChargeInitiateResponseData.to_json()

# convert the object into a dict
bulk_charge_initiate_response_data_dict = bulk_charge_initiate_response_data_instance.to_dict()
# create an instance of BulkChargeInitiateResponseData from a dict
bulk_charge_initiate_response_data_form_dict = bulk_charge_initiate_response_data.from_dict(bulk_charge_initiate_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


