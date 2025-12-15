# ChargeAuthorizationResponseDataLog


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **int** |  | 
**time_spent** | **int** |  | 
**attempts** | **int** |  | 
**errors** | **int** |  | 
**success** | **bool** |  | 
**mobile** | **bool** |  | 
**input** | **List[object]** |  | 
**history** | [**List[ChargeAuthorizationResponseDataLogHistoryInner]**](ChargeAuthorizationResponseDataLogHistoryInner.md) |  | 

## Example

```python
from alexasomba_paystack.models.charge_authorization_response_data_log import ChargeAuthorizationResponseDataLog

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeAuthorizationResponseDataLog from a JSON string
charge_authorization_response_data_log_instance = ChargeAuthorizationResponseDataLog.from_json(json)
# print the JSON string representation of the object
print ChargeAuthorizationResponseDataLog.to_json()

# convert the object into a dict
charge_authorization_response_data_log_dict = charge_authorization_response_data_log_instance.to_dict()
# create an instance of ChargeAuthorizationResponseDataLog from a dict
charge_authorization_response_data_log_form_dict = charge_authorization_response_data_log.from_dict(charge_authorization_response_data_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


