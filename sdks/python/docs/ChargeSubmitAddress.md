# ChargeSubmitAddress


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Customer&#39;s address | 
**city** | **str** | Customer&#39;s city | 
**state** | **str** | Customer&#39;s state | 
**zip_code** | **str** | Customer&#39;s zipcode | 
**reference** | **str** | The reference of the ongoing transaction | 

## Example

```python
from alexasomba_paystack.models.charge_submit_address import ChargeSubmitAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSubmitAddress from a JSON string
charge_submit_address_instance = ChargeSubmitAddress.from_json(json)
# print the JSON string representation of the object
print ChargeSubmitAddress.to_json()

# convert the object into a dict
charge_submit_address_dict = charge_submit_address_instance.to_dict()
# create an instance of ChargeSubmitAddress from a dict
charge_submit_address_form_dict = charge_submit_address.from_dict(charge_submit_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


