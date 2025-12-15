# BulkChargeFetchResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**BulkChargeInitiateResponseData**](BulkChargeInitiateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.bulk_charge_fetch_response import BulkChargeFetchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkChargeFetchResponse from a JSON string
bulk_charge_fetch_response_instance = BulkChargeFetchResponse.from_json(json)
# print the JSON string representation of the object
print BulkChargeFetchResponse.to_json()

# convert the object into a dict
bulk_charge_fetch_response_dict = bulk_charge_fetch_response_instance.to_dict()
# create an instance of BulkChargeFetchResponse from a dict
bulk_charge_fetch_response_form_dict = bulk_charge_fetch_response.from_dict(bulk_charge_fetch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


