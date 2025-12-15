# BulkChargeListResponseArray


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **int** |  | 
**domain** | **str** |  | 
**batch_code** | **str** |  | 
**status** | **str** |  | 
**easy_cron_id** | **object** |  | 
**reference** | **str** |  | 
**id** | **int** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_list_response_array import BulkChargeListResponseArray

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeListResponseArray from a JSON string
bulk_charge_list_response_array_instance = BulkChargeListResponseArray.from_json(json)
# print the JSON string representation of the object
print BulkChargeListResponseArray.to_json()

# convert the object into a dict
bulk_charge_list_response_array_dict = bulk_charge_list_response_array_instance.to_dict()
# create an instance of BulkChargeListResponseArray from a dict
bulk_charge_list_response_array_form_dict = bulk_charge_list_response_array.from_dict(bulk_charge_list_response_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


