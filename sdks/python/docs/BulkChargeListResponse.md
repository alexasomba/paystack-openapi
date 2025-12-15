# BulkChargeListResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**List[BulkChargeListResponseArray]**](BulkChargeListResponseArray.md) |  | 
**meta** | [**BulkChargeListResponseMeta**](BulkChargeListResponseMeta.md) |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_list_response import BulkChargeListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeListResponse from a JSON string
bulk_charge_list_response_instance = BulkChargeListResponse.from_json(json)
# print the JSON string representation of the object
print BulkChargeListResponse.to_json()

# convert the object into a dict
bulk_charge_list_response_dict = bulk_charge_list_response_instance.to_dict()
# create an instance of BulkChargeListResponse from a dict
bulk_charge_list_response_form_dict = bulk_charge_list_response.from_dict(bulk_charge_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


