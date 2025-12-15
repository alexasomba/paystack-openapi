# ChargeAuthorizationResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ChargeAuthorizationResponseData**](ChargeAuthorizationResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.charge_authorization_response import ChargeAuthorizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeAuthorizationResponse from a JSON string
charge_authorization_response_instance = ChargeAuthorizationResponse.from_json(json)
# print the JSON string representation of the object
print ChargeAuthorizationResponse.to_json()

# convert the object into a dict
charge_authorization_response_dict = charge_authorization_response_instance.to_dict()
# create an instance of ChargeAuthorizationResponse from a dict
charge_authorization_response_form_dict = charge_authorization_response.from_dict(charge_authorization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


