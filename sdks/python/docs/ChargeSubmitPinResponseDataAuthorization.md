# ChargeSubmitPinResponseDataAuthorization


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | **str** |  | 
**bin** | **str** |  | 
**last4** | **str** |  | 
**exp_month** | **str** |  | 
**exp_year** | **str** |  | 
**channel** | **str** |  | 
**card_type** | **str** |  | 
**bank** | **str** |  | 
**country_code** | **str** |  | 
**brand** | **str** |  | 
**reusable** | **bool** |  | 
**signature** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.charge_submit_pin_response_data_authorization import ChargeSubmitPinResponseDataAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitPinResponseDataAuthorization from a JSON string
charge_submit_pin_response_data_authorization_instance = ChargeSubmitPinResponseDataAuthorization.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitPinResponseDataAuthorization.to_json()

# convert the object into a dict
charge_submit_pin_response_data_authorization_dict = charge_submit_pin_response_data_authorization_instance.to_dict()
# create an instance of ChargeSubmitPinResponseDataAuthorization from a dict
charge_submit_pin_response_data_authorization_form_dict = charge_submit_pin_response_data_authorization.from_dict(charge_submit_pin_response_data_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


