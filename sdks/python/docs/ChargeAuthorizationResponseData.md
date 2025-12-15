# ChargeAuthorizationResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | 
**currency** | **str** |  | 
**transaction_date** | **str** |  | 
**status** | **str** |  | 
**reference** | **str** |  | 
**domain** | **str** |  | 
**metadata** | **str** |  | 
**gateway_response** | **str** |  | 
**message** | **str** |  | 
**channel** | **str** |  | 
**ip_address** | **object** |  | 
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | 
**fees** | **int** |  | 
**authorization** | [**ChargeAuthorizationResponseDataAuthorization**](ChargeAuthorizationResponseDataAuthorization.md) |  | 
**customer** | [**ChargeAuthorizationResponseDataCustomer**](ChargeAuthorizationResponseDataCustomer.md) |  | 
**plan** | **object** |  | 
**id** | **int** |  | 

## Example

```python
from alexasomba_paystack.models.charge_authorization_response_data import ChargeAuthorizationResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeAuthorizationResponseData from a JSON string
charge_authorization_response_data_instance = ChargeAuthorizationResponseData.from_json(json)
# print the JSON string representation of the object
print ChargeAuthorizationResponseData.to_json()

# convert the object into a dict
charge_authorization_response_data_dict = charge_authorization_response_data_instance.to_dict()
# create an instance of ChargeAuthorizationResponseData from a dict
charge_authorization_response_data_form_dict = charge_authorization_response_data.from_dict(charge_authorization_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


