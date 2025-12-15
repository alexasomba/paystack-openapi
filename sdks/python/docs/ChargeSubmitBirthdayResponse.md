# ChargeSubmitBirthdayResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** |  | 
**message** | **str** |  | 
**data** | [**ChargeSubmitBirthdayResponseData**](ChargeSubmitBirthdayResponseData.md) |  | 

## Example

```python
from alexasomba_paystack.models.charge_submit_birthday_response import ChargeSubmitBirthdayResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitBirthdayResponse from a JSON string
charge_submit_birthday_response_instance = ChargeSubmitBirthdayResponse.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitBirthdayResponse.to_json()

# convert the object into a dict
charge_submit_birthday_response_dict = charge_submit_birthday_response_instance.to_dict()
# create an instance of ChargeSubmitBirthdayResponse from a dict
charge_submit_birthday_response_form_dict = charge_submit_birthday_response.from_dict(charge_submit_birthday_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


