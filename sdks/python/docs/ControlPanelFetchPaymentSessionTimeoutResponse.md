# ControlPanelFetchPaymentSessionTimeoutResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ControlPanelFetchPaymentSessionTimeoutResponseData**](ControlPanelFetchPaymentSessionTimeoutResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.control_panel_fetch_payment_session_timeout_response import ControlPanelFetchPaymentSessionTimeoutResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControlPanelFetchPaymentSessionTimeoutResponse from a JSON string
control_panel_fetch_payment_session_timeout_response_instance = ControlPanelFetchPaymentSessionTimeoutResponse.from_json(json)
# print the JSON string representation of the object
print ControlPanelFetchPaymentSessionTimeoutResponse.to_json()

# convert the object into a dict
control_panel_fetch_payment_session_timeout_response_dict = control_panel_fetch_payment_session_timeout_response_instance.to_dict()
# create an instance of ControlPanelFetchPaymentSessionTimeoutResponse from a dict
control_panel_fetch_payment_session_timeout_response_form_dict = control_panel_fetch_payment_session_timeout_response.from_dict(control_panel_fetch_payment_session_timeout_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


