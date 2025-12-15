# BulkChargeInitiateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**BulkChargeInitiateResponseData**](BulkChargeInitiateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_initiate_response import BulkChargeInitiateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeInitiateResponse from a JSON string
bulk_charge_initiate_response_instance = BulkChargeInitiateResponse.from_json(json)
# print the JSON string representation of the object
print BulkChargeInitiateResponse.to_json()

# convert the object into a dict
bulk_charge_initiate_response_dict = bulk_charge_initiate_response_instance.to_dict()
# create an instance of BulkChargeInitiateResponse from a dict
bulk_charge_initiate_response_form_dict = bulk_charge_initiate_response.from_dict(bulk_charge_initiate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


