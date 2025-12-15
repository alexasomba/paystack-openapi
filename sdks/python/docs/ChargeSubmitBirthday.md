# ChargeSubmitBirthday


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birthday** | **date** | Customer&#39;s birthday in the format YYYY-MM-DD e.g 2016-09-21 | 
**reference** | **str** | The reference of the ongoing transaction | 

## Example

```python
from alexasomba_paystack.models.charge_submit_birthday import ChargeSubmitBirthday

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitBirthday from a JSON string
charge_submit_birthday_instance = ChargeSubmitBirthday.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitBirthday.to_json()

# convert the object into a dict
charge_submit_birthday_dict = charge_submit_birthday_instance.to_dict()
# create an instance of ChargeSubmitBirthday from a dict
charge_submit_birthday_form_dict = charge_submit_birthday.from_dict(charge_submit_birthday_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


