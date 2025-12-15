# ChargeCreate


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer&#39;s email address | 
**amount** | **int** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | 
**authorization_code** | **str** | An authorization code to charge. | [optional] 
**pin** | **str** | 4-digit PIN (send with a non-reusable authorization code) | [optional] 
**reference** | **str** | Unique transaction reference. Only -, .&#x60;, &#x3D; and alphanumeric characters allowed. | [optional] 
**birthday** | **date** | The customer&#39;s birthday in the format YYYY-MM-DD e.g 2017-05-16 | [optional] 
**device_id** | **str** | This is the unique identifier of the device a user uses in making payment.  Only -, .&#x60;, &#x3D; and alphanumeric characters are allowed. | [optional] 
**metadata** | **object** | JSON object of custom data | [optional] 

## Example

```python
from alexasomba_paystack.models.charge_create import ChargeCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeCreate from a JSON string
charge_create_instance = ChargeCreate.from_json(json)
# print the JSON string representation of the object
print ChargeCreate.to_json()

# convert the object into a dict
charge_create_dict = charge_create_instance.to_dict()
# create an instance of ChargeCreate from a dict
charge_create_form_dict = charge_create.from_dict(charge_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


