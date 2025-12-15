# ChargeSubmitPhoneResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**amount** | **int** |  | 
**currency** | **str** |  | 
**transaction_date** | **str** |  | 
**reference** | **str** |  | 
**domain** | **str** |  | 
**redirect_url** | **str** |  | 
**metadata** | **object** |  | 
**gateway_response** | **str** |  | 
**message** | **str** |  | 
**channel** | **str** |  | 
**fees** | **int** |  | 
**authorization** | [**ChargeSubmitPinResponseDataAuthorization**](ChargeSubmitPinResponseDataAuthorization.md) |  | 
**customer** | [**ChargeSubmitPinResponseDataCustomer**](ChargeSubmitPinResponseDataCustomer.md) |  | 
**display_text** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.charge_submit_phone_response_data import ChargeSubmitPhoneResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitPhoneResponseData from a JSON string
charge_submit_phone_response_data_instance = ChargeSubmitPhoneResponseData.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitPhoneResponseData.to_json()

# convert the object into a dict
charge_submit_phone_response_data_dict = charge_submit_phone_response_data_instance.to_dict()
# create an instance of ChargeSubmitPhoneResponseData from a dict
charge_submit_phone_response_data_form_dict = charge_submit_phone_response_data.from_dict(charge_submit_phone_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


