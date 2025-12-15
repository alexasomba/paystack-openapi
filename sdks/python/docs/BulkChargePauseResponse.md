# BulkChargePauseResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_pause_response import BulkChargePauseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargePauseResponse from a JSON string
bulk_charge_pause_response_instance = BulkChargePauseResponse.from_json(json)
# print the JSON string representation of the object
print BulkChargePauseResponse.to_json()

# convert the object into a dict
bulk_charge_pause_response_dict = bulk_charge_pause_response_instance.to_dict()
# create an instance of BulkChargePauseResponse from a dict
bulk_charge_pause_response_form_dict = bulk_charge_pause_response.from_dict(bulk_charge_pause_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


