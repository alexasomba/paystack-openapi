# ChargeSubmitPhone


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **str** | Customer&#39;s mobile number | 
**reference** | **str** | The reference of the ongoing transaction | 

## Example

```python
from alexasomba_paystack.models.charge_submit_phone import ChargeSubmitPhone

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitPhone from a JSON string
charge_submit_phone_instance = ChargeSubmitPhone.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitPhone.to_json()

# convert the object into a dict
charge_submit_phone_dict = charge_submit_phone_instance.to_dict()
# create an instance of ChargeSubmitPhone from a dict
charge_submit_phone_form_dict = charge_submit_phone.from_dict(charge_submit_phone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


