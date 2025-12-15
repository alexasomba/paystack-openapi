# ChargeCheckPendingResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ChargeSubmitPinResponseData**](ChargeSubmitPinResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.charge_check_pending_response import ChargeCheckPendingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeCheckPendingResponse from a JSON string
charge_check_pending_response_instance = ChargeCheckPendingResponse.from_json(json)
# print the JSON string representation of the object
print ChargeCheckPendingResponse.to_json()

# convert the object into a dict
charge_check_pending_response_dict = charge_check_pending_response_instance.to_dict()
# create an instance of ChargeCheckPendingResponse from a dict
charge_check_pending_response_form_dict = charge_check_pending_response.from_dict(charge_check_pending_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


