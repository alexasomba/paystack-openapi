# ChargeSubmitBirthdayResponseData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**display_text** | **str** |  | 

## Example

```python
from alexasomba_paystack.models.charge_submit_birthday_response_data import ChargeSubmitBirthdayResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitBirthdayResponseData from a JSON string
charge_submit_birthday_response_data_instance = ChargeSubmitBirthdayResponseData.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitBirthdayResponseData.to_json()

# convert the object into a dict
charge_submit_birthday_response_data_dict = charge_submit_birthday_response_data_instance.to_dict()
# create an instance of ChargeSubmitBirthdayResponseData from a dict
charge_submit_birthday_response_data_form_dict = charge_submit_birthday_response_data.from_dict(charge_submit_birthday_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


