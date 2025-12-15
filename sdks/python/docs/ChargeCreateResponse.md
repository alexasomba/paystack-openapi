# ChargeCreateResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ChargeCreateResponseData**](ChargeCreateResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.charge_create_response import ChargeCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeCreateResponse from a JSON string
charge_create_response_instance = ChargeCreateResponse.from_json(json)
# print the JSON string representation of the object
print ChargeCreateResponse.to_json()

# convert the object into a dict
charge_create_response_dict = charge_create_response_instance.to_dict()
# create an instance of ChargeCreateResponse from a dict
charge_create_response_form_dict = charge_create_response.from_dict(charge_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


